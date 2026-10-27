import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, Scroll } from '@angular/router';
import { filter, take } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PROJECTS, ProjectCategory } from '../../data/projects';
import { ProjectCover } from '../project-cover/project-cover';

type Category = 'All work' | ProjectCategory;
@Component({
  selector: 'app-projects',
  imports: [RouterLink, ProjectCover],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  readonly projects = PROJECTS;
  readonly categories: Category[] = ['All work', 'Platforms', 'Client websites', 'Engineering'];
  active: Category = 'All work';
  expanded = false;
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  constructor() {
    this.route.queryParamMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      const category = params.get('work') as Category;
      this.active = this.categories.includes(category) ? category : 'All work';
      this.expanded = params.get('all') === '1';
    });
  }
  get filteredProjects() {
    return this.projects.filter((p) => this.active === 'All work' || p.category === this.active);
  }
  get visibleProjects() {
    return this.expanded ? this.filteredProjects : this.filteredProjects.slice(0, 6);
  }
  count(category: Category) {
    return this.projects.filter((p) => category === 'All work' || p.category === category).length;
  }
  select(category: Category) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { work: category === 'All work' ? null : category, all: null },
      queryParamsHandling: 'merge',
      preserveFragment: true,
      replaceUrl: true,
    });
  }
  showAll() {
    const nextProject = this.filteredProjects[this.visibleProjects.length];
    const scroll = this.router.events
      .pipe(
        filter((event): event is Scroll => event instanceof Scroll),
        take(1),
      )
      .subscribe(() => {
        requestAnimationFrame(() => {
          const article = document.getElementById('project-' + nextProject?.slug);
          article?.querySelector<HTMLAnchorElement>('a')?.focus({ preventScroll: true });
          article?.scrollIntoView({ block: 'start' });
        });
      });
    this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams: { all: '1' },
        queryParamsHandling: 'merge',
        preserveFragment: true,
        replaceUrl: true,
      })
      .then((navigated) => {
        if (!navigated) scroll.unsubscribe();
      })
      .catch(() => scroll.unsubscribe());
  }
}

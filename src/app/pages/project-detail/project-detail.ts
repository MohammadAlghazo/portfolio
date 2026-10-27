import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PROJECTS, Project } from '../../data/projects';
import { PROJECT_MEDIA, ProjectMedia } from '../../data/project-media';
import { ProjectCover } from '../../components/project-cover/project-cover';
import { Seo } from '../../services/seo';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, ProjectCover],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  project?: Project;
  next?: Project;
  media: ProjectMedia = {};
  private readonly seo = inject(Seo);
  constructor() {
    inject(ActivatedRoute)
      .paramMap.pipe(takeUntilDestroyed())
      .subscribe((params) => {
        this.project = PROJECTS.find((project) => project.slug === params.get('slug'));
        if (this.project) {
          this.media = PROJECT_MEDIA[this.project.slug] || {};
          this.next = PROJECTS[(PROJECTS.indexOf(this.project) + 1) % PROJECTS.length];
          this.seo.update(
            this.project.name + ' — Project by Mohammad Alghazo',
            this.project.summary,
            '/projects/' + this.project.slug,
            this.media.cover?.src,
          );
        } else {
          this.seo.update(
            'Project not found — Mohammad Alghazo',
            'This project could not be found. Explore the project collection.',
            '/projects/' + params.get('slug'),
            undefined,
            true,
          );
        }
      });
  }
}

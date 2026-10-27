import { Component, Input, OnChanges } from '@angular/core';
import { Project } from '../../data/projects';
import { PROJECT_MEDIA } from '../../data/project-media';

@Component({
  selector: 'app-project-cover',
  templateUrl: './project-cover.html',
  styleUrl: './project-cover.css',
})
export class ProjectCover implements OnChanges {
  @Input({ required: true }) project!: Project;
  @Input() priority = false;
  @Input() wide = false;
  imageFailed = false;
  ngOnChanges() {
    this.imageFailed = false;
  }
  get image() {
    return PROJECT_MEDIA[this.project.slug]?.cover;
  }
}

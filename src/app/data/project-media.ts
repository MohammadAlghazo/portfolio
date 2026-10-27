import { ProjectImage } from './projects';

export interface ProjectMedia {
  cover?: ProjectImage;
  gallery?: ProjectImage[];
}

export const PROJECT_MEDIA: Record<string, ProjectMedia> = {};

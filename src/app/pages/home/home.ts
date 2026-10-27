import { Component, inject } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Projects } from '../../components/projects/projects';
import { About } from '../../components/about/about';
import { Skills } from '../../components/skills/skills';
import { Experience } from '../../components/experience/experience';
import { Contact } from '../../components/contact/contact';
import { Seo } from '../../services/seo';

@Component({
  selector: 'app-home',
  imports: [Hero, Projects, About, Skills, Experience, Contact],
  template:
    '<app-hero /><app-projects /><app-about /><app-skills /><app-experience /><app-contact />',
})
export class Home {
  constructor() {
    inject(Seo).update(
      'Mohammad Alghazo — Full-stack Software Engineer',
      'Full-stack software engineer in Amman, Jordan. Explore real client platforms, custom business systems, and automation, from interface to production.',
    );
  }
}

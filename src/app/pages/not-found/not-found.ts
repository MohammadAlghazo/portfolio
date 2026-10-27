import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Seo } from '../../services/seo';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template:
    '<section class="container not-found"><span class="section-label">404 / Page not found</span><h1>A different direction</h1><p>The page you are looking for could not be found</p><a routerLink="/" class="btn-primary">Back to the portfolio <span aria-hidden="true">→</span></a></section>',
  styles:
    '.not-found { padding-block: 180px 100px; min-height: 75vh; } h1 { font-size: clamp(2.5rem, 6vw, 4rem); } p { margin-block: 20px 30px; color: var(--text-secondary); }',
})
export class NotFound {
  constructor() {
    inject(Seo).update(
      'Page not found — Mohammad Alghazo',
      'Return to the portfolio and explore the projects.',
      '/',
      undefined,
      true,
    );
  }
}

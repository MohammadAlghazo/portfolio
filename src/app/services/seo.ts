import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class Seo {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  readonly origin = 'https://mohammadalghazo.dev';

  update(title: string, description: string, path = '/', image = '/og-image.png', noindex = false) {
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: noindex ? 'noindex,follow' : 'index,follow' });
    for (const [property, content] of Object.entries({
      'og:title': title,
      'og:description': description,
      'og:url': this.origin + path,
      'og:image': new URL(image, this.origin).href,
    }))
      this.meta.updateTag({ property, content });
    for (const [name, content] of Object.entries({
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': new URL(image, this.origin).href,
    }))
      this.meta.updateTag({ name, content });
    let canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.append(canonical);
    }
    canonical.href = this.origin + path;
  }
}

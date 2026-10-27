import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from './app.routes';
import { Home } from './pages/home/home';
import { ProjectDetail } from './pages/project-detail/project-detail';
import { PROJECTS } from './data/projects';

describe('Portfolio navigation', () => {
  beforeEach(() => TestBed.configureTestingModule({ providers: [provideRouter(routes)] }));

  it('filters the catalogue through URL state and keeps all six client websites', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/?work=Client%20websites', Home);
    const cards = harness.routeNativeElement!.querySelectorAll('.project-card');
    expect(cards.length).toBe(6);
    expect(harness.routeNativeElement!.textContent).toContain('Almaha Museum');
    expect(harness.routeNativeElement!.textContent).toContain('Lamsa');
  });

  it('restores an expanded project collection from its URL', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/?all=1', Home);
    expect(harness.routeNativeElement!.querySelectorAll('.project-card').length).toBe(13);
  });

  it('renders every project story through a direct route', async () => {
    const harness = await RouterTestingHarness.create();
    for (const project of PROJECTS) {
      await harness.navigateByUrl('/projects/' + project.slug, ProjectDetail);
      expect(harness.routeNativeElement!.querySelector('h1')!.textContent).toContain(project.name);
      expect(harness.routeNativeElement!.textContent).toContain(project.role);
    }
  });

  it('opens a direct case-study link with the right content and title', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/projects/huwia', ProjectDetail);
    expect(harness.routeNativeElement!.querySelector('h1')!.textContent).toContain('Huwia');
    expect(harness.routeNativeElement!.textContent).toContain('Better Auth');
    expect(document.title).toBe('Huwia — Project by Mohammad Alghazo');
    expect(harness.routeNativeElement!.querySelector('.project-gallery')).toBeNull();
  });

  it('offers recovery rather than breaking on an unknown project', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/projects/missing-project', ProjectDetail);
    expect(harness.routeNativeElement!.textContent).toContain('Explore all work');
    expect(document.querySelector('meta[name="robots"]')?.getAttribute('content')).toContain(
      'noindex',
    );
  });
});

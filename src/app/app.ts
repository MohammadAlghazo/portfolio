import { Component, AfterViewInit, NgZone } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Experience } from './components/experience/experience';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import Lenis from '@studio-freight/lenis';


@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements AfterViewInit {
  title = 'portfolio';

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {

      // Only initialize Lenis on desktop/non-touch devices for best mobile performance
      const isTouch = window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 768;
      
      if (!isTouch) {
        const lenis = new Lenis({
          duration: 1.1,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 1.5,
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        setTimeout(() => {
          document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
            anchor.addEventListener('click', (e) => {
              e.preventDefault();
              const target = anchor.getAttribute('href');
              if (target) lenis.scrollTo(target, { duration: 1.1, offset: -80 });
            });
          });
        }, 100);
      } else {
        // Fallback for native smooth scrolling on mobile navbar links
        document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
          anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
              const targetEl = document.querySelector(targetId);
              if (targetEl) {
                window.scrollTo({
                  top: targetEl.getBoundingClientRect().top + window.scrollY - 80,
                  behavior: 'smooth'
                });
              }
            }
          });
        });
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // fire once only
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });

      setTimeout(() => {
        document.querySelectorAll('.reveal, .reveal-left').forEach(el => {
          observer.observe(el);
        });
      }, 200);
    });
  }
}

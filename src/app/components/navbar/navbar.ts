import { Component, ElementRef, HostListener, ViewChild, inject } from '@angular/core';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @ViewChild('menuToggle') menuToggle?: ElementRef<HTMLButtonElement>;
  menuOpen = false;
  isDark = document.documentElement.dataset['theme'] === 'dark';
  readonly links = [
    { label: 'Work', fragment: 'projects' },
    { label: 'About', fragment: 'about' },
    { label: 'Expertise', fragment: 'skills' },
    { label: 'Experience', fragment: 'experience' },
  ];
  private readonly element = inject(ElementRef);
  constructor() {
    inject(Router)
      .events.pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => (this.menuOpen = false));
  }
  @HostListener('document:click', ['$event'])
  outsideClick(event: Event) {
    if (!this.element.nativeElement.contains(event.target)) this.menuOpen = false;
  }
  @HostListener('document:keydown.escape')
  escape() {
    if (this.menuOpen) {
      this.menuOpen = false;
      this.menuToggle?.nativeElement.focus();
    }
  }
  toggleTheme() {
    this.isDark = !this.isDark;
    document.documentElement.dataset['theme'] = this.isDark ? 'dark' : 'light';
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', this.isDark ? '#171a16' : '#f8f8f5');
    try {
      localStorage.setItem('portfolio-theme', this.isDark ? 'dark' : 'light');
    } catch {}
  }
}

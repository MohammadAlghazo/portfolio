import { Component, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  scrolled = false;
  menuOpen = false;
  isDark = true;

  constructor(private eRef: ElementRef) {
    const saved = localStorage.getItem('theme') ?? 'dark';
    this.isDark = saved === 'dark';
    this.applyTheme();
  }

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (this.menuOpen && !this.eRef.nativeElement.contains(event.target)) {
      this.menuOpen = false;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 60;
  }

  toggleMenu() { this.menuOpen = !this.menuOpen; }
  closeMenu() { this.menuOpen = false; }

  toggleTheme() {
    this.isDark = !this.isDark;
    this.applyTheme();
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  }

  private applyTheme() {
    document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
  }
}

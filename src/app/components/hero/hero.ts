import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class Hero implements AfterViewInit {
  @ViewChild('photoFrame') photoFrame!: ElementRef;

  xTo: any;
  yTo: any;

  ngAfterViewInit() {

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.hero-topbar', { opacity: 0, y: 16, duration: 0.7, delay: 0.2 })
      .from('.name-row', { opacity: 0, y: 50, duration: 1.0, stagger: 0.12 }, '-=0.4')
      .from('.hero-photo-wrap', { opacity: 0, scale: 0.85, duration: 0.9, ease: 'power4.out' }, '-=0.7')
      .from('.hero-footer', { opacity: 0, y: 20, duration: 0.8 }, '-=0.5')
      .from('.hero-scroll', { opacity: 0, duration: 0.6 }, '-=0.3');

    if (this.photoFrame) {
      this.xTo = gsap.quickTo(this.photoFrame.nativeElement, 'x', { duration: 0.55, ease: 'power3.out' });
      this.yTo = gsap.quickTo(this.photoFrame.nativeElement, 'y', { duration: 0.55, ease: 'power3.out' });
    }
  }

  onMouseMove(e: MouseEvent) {
    if (!this.photoFrame) return;
    const rect = this.photoFrame.nativeElement.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    this.xTo?.((e.clientX - cx) * 0.18);
    this.yTo?.((e.clientY - cy) * 0.18);
  }

  onMouseLeave() {
    this.xTo?.(0);
    this.yTo?.(0);
  }
}

import { CommonModule } from '@angular/common';
import { Component, DestroyRef, effect, HostListener, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';

type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'ev24kh-theme';

interface RouteOption {
  from: string;
  to: string;
  price: number;
  duration: string;
  distance: string;
  tag?: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly bookingSent = signal(false);
  protected readonly menuOpen = signal(false);
  protected readonly selectedRoute = signal('Siem Reap');
  protected readonly passengerName = signal('');
  protected readonly pickup = signal('Phnom Penh');
  protected readonly theme = signal<Theme>(this.initialTheme());
  protected readonly activeSlide = signal(0);
  protected readonly heroSlides = [
    'https://images.pexels.com/photos/29082604/pexels-photo-29082604.jpeg'
  ];

  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  protected readonly isHome = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(event => event.urlAfterRedirects === '/home')
    ),
    { initialValue: true }
  );

  protected readonly routes: RouteOption[] = [
    { from: 'Phnom Penh', to: 'Siem Reap', price: 150, duration: '5h 30m', distance: '320 km', tag: 'Most booked' },
    { from: 'Phnom Penh', to: 'Sihanoukville', price: 150, duration: '3h 30m', distance: '230 km' },
    { from: 'Phnom Penh', to: 'Bavet Border', price: 100, duration: '3h 15m', distance: '165 km' },
    { from: 'Phnom Penh', to: 'Kampot & Kep', price: 110, duration: '3h 15m', distance: '150 km' },
    { from: 'Phnom Penh', to: 'Koh Kong', price: 180, duration: '5h 30m', distance: '270 km' },
    { from: 'Phnom Penh', to: 'Dara Sakor', price: 200, duration: '6h 15m', distance: '330 km' },
    { from: 'Phnom Penh', to: 'Battambang', price: 210, duration: '5h 45m', distance: '290 km' },
    { from: 'Phnom Penh', to: 'Mondulkiri', price: 220, duration: '6h 30m', distance: '370 km' },
    { from: 'Phnom Penh', to: 'Ratanakiri', price: 250, duration: '8h 30m', distance: '570 km' },
    { from: 'Phnom Penh', to: 'Pursat', price: 180, duration: '4h 15m', distance: '190 km' }
  ];

  constructor() {
    effect(() => {
      document.documentElement.dataset['theme'] = this.theme();
      localStorage.setItem(THEME_STORAGE_KEY, this.theme());
    });

    if (this.heroSlides.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const timer = setInterval(() => this.activeSlide.update(i => (i + 1) % this.heroSlides.length), 6000);
      this.destroyRef.onDestroy(() => clearInterval(timer));
    }
  }

  protected toggleTheme(): void {
    this.theme.update(current => (current === 'dark' ? 'light' : 'dark'));
  }

  private initialTheme(): Theme {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  protected get selectedRouteDetails(): RouteOption {
    return this.routes.find(route => route.to === this.selectedRoute()) ?? this.routes[0];
  }

  @HostListener('click', ['$event'])
  protected onSectionLinkClick(event: MouseEvent): void {
    const link = (event.target as Element).closest('a[href^="#"]:not([href^="#/"])');
    if (!link) {
      return;
    }
    event.preventDefault();
    const id = link.getAttribute('href')!.slice(1);
    this.menuOpen.set(false);

    if (this.isHome()) {
      this.scrollToSection(id);
    } else {
      void this.router.navigateByUrl('/home').then(() => setTimeout(() => this.scrollToSection(id)));
    }
  }

  private scrollToSection(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  protected chooseRoute(destination: string): void {
    this.selectedRoute.set(destination);
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  protected submitBooking(): void {
    this.bookingSent.set(true);
  }

  protected closeBookingNotice(): void {
    this.bookingSent.set(false);
  }
}

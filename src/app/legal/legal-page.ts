import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import { POLICIES, PolicyKey } from './policies';

@Component({
  selector: 'app-legal-page',
  imports: [RouterLink],
  templateUrl: './legal-page.html',
  styleUrl: './legal-page.css'
})
export class LegalPageComponent {
  protected readonly policy = POLICIES[inject(ActivatedRoute).snapshot.data['policy'] as PolicyKey];
  protected readonly lastUpdated = 'November 2026';

  constructor() {
    inject(Title).setTitle(`${this.policy.title} — Ev24 Kh`);
    inject(Meta).updateTag({ name: 'description', content: `${this.policy.title} for Ev24 Kh private taxi bookings and driver services.` });
  }
}

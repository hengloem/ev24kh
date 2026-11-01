import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

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
}

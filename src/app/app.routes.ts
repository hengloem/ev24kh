import { Routes } from '@angular/router';

import { DriverRegistrationComponent } from './driver-registration/driver-registration';
import { LegalPageComponent } from './legal/legal-page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', children: [] },
  { path: 'register-driver', component: DriverRegistrationComponent },
  { path: 'privacy', component: LegalPageComponent, data: { policy: 'privacy' } },
  { path: 'terms', component: LegalPageComponent, data: { policy: 'terms' } },
  { path: 'refund', component: LegalPageComponent, data: { policy: 'refund' } }
];

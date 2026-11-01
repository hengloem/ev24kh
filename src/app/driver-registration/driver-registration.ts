import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

interface DriverApplication {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  yearsDriving: number | null;
  vehicleMake: string;
  vehicleYear: number | null;
  plate: string;
  licenseNumber: string;
  agreed: boolean;
}

@Component({
  selector: 'app-driver-registration',
  imports: [FormsModule, RouterLink],
  templateUrl: './driver-registration.html',
  styleUrl: './driver-registration.css'
})
export class DriverRegistrationComponent {
  protected readonly submitted = signal(false);
  protected readonly cities = ['Phnom Penh', 'Siem Reap', 'Sihanoukville', 'Battambang', 'Other'];
  protected readonly steps = [
    { title: 'Send your application', text: 'Fill in your details and vehicle information below.' },
    { title: 'We review your documents', text: 'Our team checks your license and vehicle papers.' },
    { title: 'Start accepting rides', text: 'Go online and receive private long-distance bookings.' }
  ];

  protected application: DriverApplication = this.emptyApplication();

  constructor() {
    inject(Title).setTitle('Register as a driver — Ev24 Kh');
    inject(Meta).updateTag({ name: 'description', content: 'Join Ev24 Kh as a private long-distance driver. Membership is $100 per month.' });
  }

  protected submit(): void {
    this.submitted.set(true);
  }

  protected reset(): void {
    this.application = this.emptyApplication();
    this.submitted.set(false);
  }

  private emptyApplication(): DriverApplication {
    return {
      fullName: '',
      phone: '',
      email: '',
      city: 'Phnom Penh',
      yearsDriving: null,
      vehicleMake: '',
      vehicleYear: null,
      plate: '',
      licenseNumber: '',
      agreed: false
    };
  }
}

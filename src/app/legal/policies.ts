export type PolicyKey = 'privacy' | 'terms' | 'refund';

export interface PolicySection {
  heading: string;
  paragraphs: string[];
}

export interface Policy {
  title: string;
  intro: string;
  sections: PolicySection[];
}

export const POLICIES: Record<PolicyKey, Policy> = {
  privacy: {
    title: 'Privacy Policy',
    intro: 'This policy explains what personal information Ev24 Kh collects, how we use it, and the choices you have.',
    sections: [
      {
        heading: '1. Information we collect',
        paragraphs: [
          'Passengers: name, phone number, email address, pick-up location, destination, travel date, and number of passengers.',
          'Drivers: identity details, driver license number, vehicle make, model, year, license plate, and the documents we need to verify your application.',
          'Usage data: basic device and browser information, and your theme preference, which is stored in your browser.'
        ]
      },
      {
        heading: '2. How we use it',
        paragraphs: [
          'We use your information to confirm bookings, match you with a driver, send trip updates, provide customer support, keep rides safe, and meet our legal obligations.'
        ]
      },
      {
        heading: '3. Who we share it with',
        paragraphs: [
          'We share the details needed for a trip with the driver assigned to it. We do not sell personal information. We may share data with payment providers, service providers that run our systems, or authorities when the law requires it.'
        ]
      },
      {
        heading: '4. How long we keep it',
        paragraphs: [
          'We keep booking records for as long as needed for accounting, dispute resolution, and legal compliance. Driver documents are kept while your membership is active and for a period required by law afterwards.'
        ]
      },
      {
        heading: '5. Your choices',
        paragraphs: [
          'You can ask to see, correct, or delete your personal information. Some records must be kept for legal reasons, and we will tell you when that applies. To make a request, contact us by phone at +855 12 345 678.'
        ]
      },
      {
        heading: '6. Security',
        paragraphs: [
          'We use reasonable technical and organisational measures to protect your information. No system is completely secure, so please tell us promptly if you believe your account has been compromised.'
        ]
      },
      {
        heading: '7. Changes to this policy',
        paragraphs: [
          'We may update this policy from time to time. The date at the top of this page shows when it last changed.'
        ]
      }
    ]
  },
  terms: {
    title: 'Terms of Use',
    intro: 'These terms govern your use of the Ev24 Kh website and our private ride services. By booking a ride or using the site, you agree to them.',
    sections: [
      {
        heading: '1. Our service',
        paragraphs: [
          'Ev24 Kh arranges private, long-distance car journeys across Cambodia. We accept bookings only for the routes listed on our site, plus hourly driver add-on services where offered.'
        ]
      },
      {
        heading: '2. Bookings and fares',
        paragraphs: [
          'A booking request is not confirmed until we contact you and confirm availability. Listed fares apply to the stated routes. Hourly add-on services start from $30 per hour and are charged in addition to the route fare.'
        ]
      },
      {
        heading: '3. Passenger responsibilities',
        paragraphs: [
          'Please provide accurate booking details, be ready at the agreed pick-up time, and treat drivers and vehicles with respect. We may refuse or end a booking if a passenger behaves unsafely or unlawfully.'
        ]
      },
      {
        heading: '4. Driver membership',
        paragraphs: [
          'Drivers join through our registration process and pay a monthly subscription of $100. Drivers must hold a valid license, keep their vehicle roadworthy and insured, and comply with Cambodian traffic and transport law.'
        ]
      },
      {
        heading: '5. Cancellations and refunds',
        paragraphs: [
          'Cancellation and refund terms are set out in our Refund Policy, which forms part of these terms.'
        ]
      },
      {
        heading: '6. Limitation of liability',
        paragraphs: [
          'Ev24 Kh is not liable for indirect or consequential losses. Our total liability for any booking is limited to the fare paid for that booking, except where the law does not allow this limit.'
        ]
      },
      {
        heading: '7. Governing law',
        paragraphs: [
          'These terms are governed by the laws of the Kingdom of Cambodia.'
        ]
      },
      {
        heading: '8. Changes to these terms',
        paragraphs: [
          'We may update these terms. Continued use of the site or our services after an update means you accept the revised terms.'
        ]
      }
    ]
  },
  refund: {
    title: 'Refund Policy',
    intro: 'This policy explains how cancellations and refunds work for Ev24 Kh private rides.',
    sections: [
      {
        heading: '1. Cancelling a booking',
        paragraphs: [
          'To cancel, contact us by phone at +855 12 345 678 as early as possible. Cancellations are effective when we confirm them.'
        ]
      },
      {
        heading: '2. Refund amounts',
        paragraphs: [
          'Cancellations made at least 24 hours before the scheduled pick-up receive a full refund of the route fare. Cancellations made less than 24 hours before pick-up receive a 50% refund. No refund is due for no-shows or for cancellations after the trip has started.'
        ]
      },
      {
        heading: '3. Add-on services',
        paragraphs: [
          'Hourly add-on services already used are not refundable. Unused, pre-booked hours are refunded under the same timing rules as the route fare.'
        ]
      },
      {
        heading: '4. Driver-initiated changes',
        paragraphs: [
          'If we or our driver cancel a booking, you receive a full refund. If a trip cannot be completed for reasons within our control, we will refund the unused portion of the fare.'
        ]
      },
      {
        heading: '5. How refunds are paid',
        paragraphs: [
          'Approved refunds are returned to the original payment method. Processing times depend on your bank or payment provider, usually within 7 to 14 business days.'
        ]
      }
    ]
  }
};

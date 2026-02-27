export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: 'ceremony',
    name: 'Ceremony',
    price: '$350',
    description: 'Perfect for wedding ceremonies or memorial services',
    features: [
      'Up to 1 hour of music',
      'Prelude & processional',
      'Up to 3 song selections',
      'Phone consultation',
      'One rehearsal attendance',
    ],
    ctaText: 'Book Ceremony',
  },
  {
    id: 'full-event',
    name: 'Full Event',
    price: '$750',
    description: 'Complete musical coverage for your special day',
    features: [
      'Up to 4 hours of music',
      'Ceremony & reception',
      'Unlimited song selections',
      'In-person consultation',
      'Custom arrangements',
      'Rehearsal attendance',
      'Cocktail hour included',
    ],
    highlighted: true,
    ctaText: 'Book Full Event',
  },
  {
    id: 'custom',
    name: 'Custom',
    price: 'Contact',
    description: 'Tailored packages for unique occasions',
    features: [
      'Flexible duration',
      'Multi-day events',
      'Travel arrangements',
      'Specialized repertoire',
      'Recording sessions',
      'Collaborative performances',
    ],
    ctaText: 'Get Quote',
  },
];

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
    price: '$250',
    description: 'Perfect for wedding ceremonies or memorial services',
    features: [
      'Up to 1 hour of music',
      'Prelude & processional',
      'Up to 6 song selections',
      'Phone consultation',
      'One rehearsal attendance',
    ],
    highlighted: true,
    ctaText: 'Book Ceremony',
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

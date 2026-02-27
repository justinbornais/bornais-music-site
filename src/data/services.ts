import { FaRing, FaChurch, FaCross, FaMusic } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'weddings',
    title: 'Weddings',
    description: 'Create unforgettable moments with elegant piano music for your ceremony and reception.',
    icon: FaRing,
    features: [
      'Ceremony prelude & processional',
      'Custom song arrangements',
      'Reception background music',
      'Cocktail hour entertainment',
    ],
  },
  {
    id: 'funerals',
    title: 'Funeral Services',
    description: 'Provide comfort and solace with dignified, heartfelt musical tributes.',
    icon: FaCross,
    features: [
      'Traditional hymns',
      'Contemporary selections',
      'Personalized tributes',
      'Graveside services',
    ],
  },
  {
    id: 'church',
    title: 'Church Services',
    description: 'Enhance your worship experience with skilled piano and organ accompaniment.',
    icon: FaChurch,
    features: [
      'Sunday services',
      'Holiday masses',
      'Choir accompaniment',
      'Special liturgies',
    ],
  },
  {
    id: 'events',
    title: 'Special Events',
    description: 'Add sophistication to any gathering with live piano performances.',
    icon: FaMusic,
    features: [
      'Corporate events',
      'Private parties',
      'Restaurant performances',
      'Holiday celebrations',
    ],
  },
];

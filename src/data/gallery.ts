export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  alt: string;
  caption?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    type: 'image',
    src: '/images/piano-portrait.jpg',
    alt: 'Justin at the piano',
    caption: 'Performance at Artisan Grill, Amherstburg',
  },
  {
    id: '2',
    type: 'image',
    src: '/images/gallery-2.jpg',
    alt: 'Wedding ceremony performance',
    caption: 'Wedding at St. John the Baptist Parish',
  },
  {
    id: '3',
    type: 'image',
    src: '/images/gallery-3.jpg',
    alt: 'Church organ performance',
    caption: 'Sunday service at Our Lady of the Assumption',
  },
  {
    id: '4',
    type: 'image',
    src: '/images/gallery-4.jpg',
    alt: 'Private event performance',
    caption: 'Corporate holiday gala',
  },
  {
    id: '5',
    type: 'image',
    src: '/images/gallery-5.jpg',
    alt: 'Grand piano close-up',
    caption: 'Steinway grand piano',
  },
  {
    id: '6',
    type: 'image',
    src: '/images/gallery-6.jpg',
    alt: 'Reception performance',
    caption: 'Wedding reception entertainment',
  },
];

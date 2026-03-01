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
    id: '2',
    type: 'image',
    src: '/images/2023-sjb.webp',
    alt: 'Wedding ceremony performance',
    caption: 'Wedding at St. John the Baptist Parish',
  },
  {
    id: '3',
    type: 'image',
    src: '/images/2022-sjb-funeral.webp',
    alt: 'Funeral service performance on the organ',
    caption: 'Funeral service at St. John the Baptist Parish',
  },
  {
    id: '1',
    type: 'image',
    src: '/images/2021-wedding.webp',
    alt: 'Justin playing piano at a wedding',
    caption: 'Wedding at Harvest Bible Church',
  },
  {
    id: '4',
    type: 'image',
    src: '/images/2022-sjb-advent.webp',
    alt: 'Private event performance',
    caption: 'Advent concert at St. John the Baptist Parish',
  },
  {
    id: '5',
    type: 'image',
    src: '/images/fleur-de-lis.webp',
    alt: 'Piano performance at Fleur de Lis restaurant',
    caption: 'Weekly performances at Fleur de Lis restaurant in Amherstburg',
  },
  {
    id: '6',
    type: 'image',
    src: '/images/2021-piano-portrait.webp',
    alt: 'Piano portrait',
    caption: 'Practicing on my personal grabd piano',
  }
];

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  event: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Justin made our wedding day absolutely magical. His rendition of our first dance song brought tears to everyone\'s eyes. We couldn\'t have asked for a more talented and professional musician.',
    author: 'Sarah & Michael Thompson',
    event: 'Wedding',
    date: 'September 2025',
  },
  {
    id: '2',
    quote: 'During one of the most difficult times for our family, Justin\'s music provided such comfort. His sensitivity and skill helped us honor my mother\'s memory beautifully.',
    author: 'The Rodriguez Family',
    event: 'Memorial Service',
    date: 'June 2025',
  },
  {
    id: '3',
    quote: 'We\'ve had Justin perform at our parish for three years now. His talent on both piano and organ elevates every service. The congregation always comments on how his music enhances their worship experience.',
    author: 'Father James Mitchell',
    event: 'St. Mary\'s Parish',
    date: 'Ongoing',
  },
  {
    id: '4',
    quote: 'Justin played at our corporate holiday gala and exceeded all expectations. He read the room perfectly, transitioning from elegant background music to upbeat classics as the evening progressed.',
    author: 'Jennifer Walsh',
    event: 'Corporate Event',
    date: 'December 2025',
  },
  {
    id: '5',
    quote: 'Having live piano at our anniversary dinner was my husband\'s dream. Justin learned our special song and performed it flawlessly. A truly gifted musician with a warm personality.',
    author: 'Linda & Robert Chen',
    event: '50th Anniversary',
    date: 'August 2025',
  },
];

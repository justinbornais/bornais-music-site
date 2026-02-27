export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Listen', href: '#listen' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const contactInfo = {
  email: 'justin@bornaismusic.com',
  phone: '(519) 555-0123',
  location: 'Windsor-Essex, Ontario',
  googleFormUrl: 'https://forms.google.com/your-form-id',
  social: {
    facebook: 'https://facebook.com/bornaismusic',
    instagram: 'https://instagram.com/bornaismusic',
    youtube: 'https://youtube.com/@bornaismusic',
  },
};

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'What types of events do you perform at?',
    answer: 'I perform at weddings, funerals, memorial services, church services, corporate events, private parties, restaurant engagements, and any special occasion where live piano music would enhance the atmosphere.',
  },
  {
    id: '2',
    question: 'How far in advance should I book?',
    answer: 'I recommend booking at least 2-3 months in advance for weddings and large events to ensure availability. For smaller events or church services, 2-4 weeks notice is typically sufficient, though earlier is always better.',
  },
  {
    id: '3',
    question: 'Do you take song requests?',
    answer: 'Absolutely! I love incorporating special songs that are meaningful to you. I can arrange most popular songs for piano, and I\'m always happy to learn new pieces for your event. Just let me know your requests during our consultation.',
  },
  {
    id: '4',
    question: 'What if there\'s no piano at my venue?',
    answer: 'No problem! I can bring a high-quality digital piano/keyboard that provides beautiful sound for any venue. This is included at no extra charge for most bookings.',
  },
  {
    id: '5',
    question: 'Do you play organ as well?',
    answer: 'Yes, I am an experienced organist and regularly play for church services. If your venue has an organ, I\'m happy to incorporate it into the performance.',
  },
  {
    id: '6',
    question: 'What is your service area?',
    answer: 'I\'m based in the Windsor-Essex region and regularly perform throughout Southwestern Ontario. I\'m willing to travel further for special events—just ask about travel arrangements when you contact me.',
  },
  {
    id: '7',
    question: 'What is your cancellation policy?',
    answer: 'Deposits are non-refundable but can be applied to a rescheduled date within 12 months. Full refunds are available if I need to cancel due to unforeseen circumstances. Detailed terms are provided in the booking agreement.',
  },
  {
    id: '8',
    question: 'Do you offer virtual consultations?',
    answer: 'Yes! I offer consultations via phone, video call, or in-person meeting—whatever works best for you. We\'ll discuss your event, song preferences, and any special requests.',
  },
];

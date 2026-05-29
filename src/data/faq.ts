export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  label: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    label: 'Booking',
    items: [
      {
        question: 'How far in advance should I book?',
        answer: 'I recommend booking at least 2-3 months in advance for weddings and large events to ensure availability. For smaller events or church services, 2-4 weeks notice is typically sufficient, though earlier is always better.',
      },
      {
        question: 'What is the $100 deposit for?',
        answer: 'A $100 non-refundable deposit is required to officially book and secure your date on my calendar. This deposit is applied toward the total cost of your booking.',
      },
      {
        question: 'What happens if I need to reschedule my event?',
        answer: 'If you need to reschedule, please contact me as soon as possible. If I am available on your new date, your deposit can be transferred to the rescheduled event. If the new date is unavailable, the deposit will be held and can be used toward a future booking within one year.',
      },
      {
        question: 'What is your cancellation policy?',
        answer: 'If you need to cancel the event, the full payment may be refunded if notice is given at least one week before the event. However, the $100 deposit is non-refundable.\n\nIf I need to cancel due to unforeseen circumstances, the full price including the non-refundable deposit will be refunded.',
      },
    ],
  },
  {
    label: 'Music',
    items: [
      {
        question: 'Do you take song requests?',
        answer: 'Absolutely! I love incorporating special songs that are meaningful to you. I can arrange most popular songs for piano, and I\'m always happy to learn new pieces for your event. Just let me know your requests early on during our consultation.',
      },
      {
        question: 'Do you play organ as well?',
        answer: 'Yes, I am an experienced organist and regularly play for Masses and other church services, including weddings and funerals. If your venue has an organ, I\'m happy to incorporate it into the performance.',
      },
      {
        question: 'What styles and genres of music do you play?',
        answer: 'My repertoire spans a wide range of styles, including classical, sacred, pop, and contemporary. Whether you\'re looking for traditional hymns, romantic wedding classics, or modern favourites, I can tailor the music to suit the mood and tone of your event.',
      },
      {
        question: 'How much notice do you need to learn a new song?',
        answer: 'For most songs, 2–3 weeks notice is sufficient. For more complex arrangements or pieces I\'m less familiar with, I appreciate as much lead time as possible. Ideally, at least a month notice would be preferred in that case.\n\nThe earlier you share your requests, the better I can prepare!',
      },
    ],
  },
  {
    label: 'Services & Logistics',
    items: [
      {
        question: 'What types of events do I perform at?',
        answer: 'I perform at weddings, funerals, memorial services, church services, corporate events, private parties, restaurant engagements, and any other special occasion where live music would enhance the atmosphere.',
      },
      {
        question: 'What is your service area?',
        answer: 'I\'m based in the Windsor-Essex region and regularly perform throughout Southwestern Ontario. I\'m willing to travel further for special events, though there may be a travel fee depending on the location. Just ask about travel arrangements when you contact me.',
      },
      {
        question: 'Do you offer virtual consultations?',
        answer: 'Absolutely, I offer consultations via phone, video call, or in-person. Whichever option works best for you!',
      },
      {
        question: 'What if there\'s no piano at my venue?',
        answer: 'No problem! I can bring a high-quality digital piano/keyboard that provides beautiful sound for any venue. This is included at no extra charge for most bookings.',
      },
    ],
  },
];

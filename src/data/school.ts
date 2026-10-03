// Brookwell Harmony School — verified content only.
// Do not add facts here (history, accreditation, results, stats) unless
// they have been confirmed by the school. Keep general/elegant wording
// where specifics are not yet available.

export const school = {
  name: 'Brookwell Harmony School',
  location: 'Nanyuki, Kenya',
  phone: '0143447913',
  whatsapp: '+254 117 957 009',
  whatsappDial: '254117957009',
  email: 'brookwellharmonyschoolnanyuki@gmail.com',
};

export const nav = [
  { label: 'Home', href: '#home' },

  {
    label: 'About Brookwell',
    dropdown: [
      { label: 'Our Story', href: '#about' },
      { label: 'Vision, Mission & Values', href: '#values' },
      { label: 'Leadership & Staff', href: '#leadership' },
      { label: 'School Facilities', href: '#facilities' },
      { label: 'Safeguarding & Child Protection', href: '#safeguarding' },
    ],
  },

  {
    label: 'Learning',
    dropdown: [
      { label: 'Early Years', href: '#early-years' },
      { label: 'Primary School', href: '#primary' },
      { label: 'Junior School', href: '#junior' },
      { label: 'Curriculum', href: '#curriculum' },
    ],
  },

  {
    label: 'School Life',
    dropdown: [
      { label: 'Sports & Games', href: '#sports' },
      { label: 'Arts, Music & Drama', href: '#arts' },
      { label: 'Educational Trips & Outdoor Learning', href: '#trips' },
      { label: 'Photos', href: '#gallery' },
      { label: 'Videos', href: '#videos' },
    ],
  },

  {
    label: 'Admissions',
    dropdown: [
      { label: 'Why Choose Brookwell?', href: '#why-brookwell' },
      { label: 'Book a School Visit', href: '#book-visit' },
      { label: 'How to Apply', href: '#apply' },
      { label: 'Admission Requirements', href: '#requirements' },
      { label: 'Admissions FAQs', href: '#admissions-faqs' },
    ],
  },

  {
    label: 'Parents',
    dropdown: [
      { label: 'Parent Information', href: '#parent-information' },
      { label: 'Notices & Newsletters', href: '#notices' },
      { label: 'Forms & Downloads', href: '#downloads' },
      { label: 'Parent Contact & Support', href: '#parent-support' },
    ],
  },

  { label: 'News & Events', href: '#news-events' },

  { label: 'Contact Us', href: '#contact' },
];

export const values = [
  {
    number: '01',
    title: 'Character',
    description: 'Building honesty, respect and responsibility into everyday school life.',
  },
  {
    number: '02',
    title: 'Curiosity',
    description: 'Encouraging learners to ask questions and explore ideas with wonder.',
  },
  {
    number: '03',
    title: 'Confidence',
    description: 'Creating space for every child to speak up, try, and grow.',
  },
  {
    number: '04',
    title: 'Community',
    description: 'Bringing learners, teachers and families together as one.',
  },
  {
    number: '05',
    title: 'Creativity',
    description: 'Nurturing imagination through art, movement and expression.',
  },
  {
    number: '06',
    title: 'Growth',
    description: 'Supporting every learner on their own journey, at their own pace.',
  },
] as const;

export type LifeCard = {
  id: string;
  index: string;
  category: string;
  headline: string;
  description: string;
  image: string;
  alt: string;
};

export const lifeCards: LifeCard[] = [
  {
    id: 'creativity',
    index: '01',
    category: 'Creativity & Talent',
    headline: 'Every child deserves a space to shine.',
    description:
      'From traditional dance to ballet and creative expression, Brookwell gives learners opportunities to discover their talents and build confidence.',
    image: '/assets/images/traditional-dance.jpg',
    alt: 'Brookwell learners performing a traditional dance in school uniform',
  },
  {
    id: 'sports',
    index: '02',
    category: 'Sports & Movement',
    headline: 'Growing through movement, play and teamwork.',
    description:
      'Activities such as swimming encourage confidence, discipline, teamwork and a healthy enjoyment of being active.',
    image: '/assets/images/swimming.jpg',
    alt: 'Young Brookwell learners in a swimming lesson',
  },
  {
    id: 'beyond',
    index: '03',
    category: 'Beyond the Classroom',
    headline: 'Learning continues wherever curiosity takes us.',
    description:
      'Outings, events and shared experiences help learners connect what they discover in school with the world around them.',
    image: '/assets/images/school-outing.jpg',
    alt: 'Brookwell learners walking together during a school outing',
  },
  {
    id: 'community',
    index: '04',
    category: 'Community & Togetherness',
    headline: 'Growing together as one school community.',
    description:
      'School events and shared moments create a sense of belonging and bring learners, teachers and families together.',
    image: '/assets/images/community-event.jpg',
    alt: 'Brookwell learners and staff gathered together at a community event',
  },
];

export const galleryImages = [
  {
    src: '/assets/images/hero-parade.jpg',
    alt: 'Brookwell learners marching together at a school event',
    caption: 'Marching with pride',
  },
  {
    src: '/assets/images/early-years-circle.jpg',
    alt: 'Early years learners performing in a circle formation',
    caption: 'Early years, full of joy',
  },
  {
    src: '/assets/images/traditional-dance.jpg',
    alt: 'Learners performing a traditional dance',
    caption: 'Traditional dance',
  },
  {
    src: '/assets/images/group-dance.jpg',
    alt: 'Learners dancing together as a group',
    caption: 'Dancing together',
  },
  {
    src: '/assets/images/swimming.jpg',
    alt: 'Learners in a swimming lesson',
    caption: 'Swimming lessons',
  },
  {
    src: '/assets/images/ballet-performance.jpg',
    alt: 'Learners in white tutus performing ballet',
    caption: 'Ballet performance',
  },
  {
    src: '/assets/images/community-event.jpg',
    alt: 'The Brookwell community gathered together',
    caption: 'Community, always',
  },
  {
    src: '/assets/images/community-tent.jpg',
    alt: 'Learners visiting exhibition tents at a community event',
    caption: 'Exploring beyond school',
  },
  {
    src: '/assets/images/school-outing.jpg',
    alt: 'Learners walking together on a school outing',
    caption: 'On a school outing',
  },
];

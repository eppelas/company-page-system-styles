export type OfferEntry = {
  name: string;
  price: string;
  outcome: string;
  bullets: string[];
};

export const logoAssetPath = `${import.meta.env.BASE_URL}assets/ai-mindset-logo.png`;

export const coreIdeas = [
  'AI in design that feels strong, not generic',
  'Lower design and production cost',
  'Faster page creation and launch cycles',
  'Direct work by product managers without waiting on designers',
];

export const differentiation = [
  'A normal team rebuilds each landing with new handoffs between product, design, and frontend.',
  'We define the visual system once, cut it into reusable blocks, and let product teams assemble pages directly in CMS.',
  'The result is a page factory: less waiting, less redesign, and cleaner experiments across companies, offers, and markets.',
];

export const deliverySteps = [
  {
    step: '01',
    title: 'Branding and positioning',
    detail: 'Lock the tone, visual grammar, offer structure, and content hierarchy before layout churn starts.',
  },
  {
    step: '02',
    title: 'Flagship page and block architecture',
    detail: 'Build the main page, then slice it into reusable modules that can survive new markets and new briefs.',
  },
  {
    step: '03',
    title: 'CMS setup and product training',
    detail: 'Put the system into CMS, configure editing rules, and teach product managers how to ship without designer dependency.',
  },
  {
    step: '04',
    title: 'Generation and analytics loop',
    detail: 'Generate new pages from markdown and structured prompts, then use analytics to propose reorder, redesign, and A/B tests.',
  },
];

export const proofPoints = [
  'Worked with AI Mindset as a live reference project for AI-first company pages.',
  'The AI Mindset site already gave us measurable proof points such as faster answer finding, lower task chaos, and more predictable delivery.',
  'This service is built around real shipping constraints: content changes, stakeholder edits, pricing updates, and multi-page rollout pressure.',
];

export const aiMindsetCase = {
  name: 'AI Mindset',
  summary:
    'AI Mindset is the clearest proof case so far: a live AI-first education and systems product where the site had to communicate the offer, support curriculum evolution, and stay editable while the product kept changing.',
  metrics: [
    '−35% task chaos',
    '3x faster sorting',
    '10x faster answer search',
    '12+ hours saved per week',
    '+25% schedule predictability',
    '−70% time spent decoding metrics',
  ],
};

export const offers: OfferEntry[] = [
  {
    name: 'Consultation',
    price: '200 / hour',
    outcome: 'Find out what is realistically possible for the exact request before a bigger build.',
    bullets: ['real request review', 'feasibility mapping'],
  },
  {
    name: 'AI-First Design Transition Support',
    price: '1500 / month',
    outcome: 'Shared calls and ongoing support while the team moves from traditional production to an AI-first design workflow.',
    bullets: ['shared calls', 'workflow support'],
  },
  {
    name: 'AI Design Factory Turnkey',
    price: '14000 one-off setup / about 15k month dev / up to 45k euro by case',
    outcome: 'A full company page system with branding, block architecture, design guide, CMS setup, and team training.',
    bullets: ['branding', 'block architecture', 'design guide', 'CMS setup', 'CMS configuration', 'product training'],
  },
  {
    name: 'AI Design Factory Turnkey +',
    price: 'custom',
    outcome: 'The same factory plus auto-generation and analytics-connected iteration.',
    bullets: ['auto generation', 'analytics integration'],
  },
];

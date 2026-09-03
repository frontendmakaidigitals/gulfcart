export const heroBullets = [
  'True local currency — processed and settled in AED, SAR, KWD, QAR, BHD and OMR.',
  'One-tap checkout for buyers already verified across our network.',
  'OTP login and COD fee rules that cut fake orders and failed deliveries.',
  'Tabby, Tamara, Apple Pay, cards and COD — controlled from one place.',
];

export const logos = [
  {
    name: "Business Mansion",
    img: "/BM.png",
  },
  {
    name: "Max",
    img: "/max.png",
  },
  {
    name: "Noir Perfumes",
    img: "/noir.png",
  },
  {
    name: "Nova",
    img: "/nova.png",
  },
  {
    name: "Opto",
    img: "/opto.png",
  },
  {
    name: "Perfume Oasis",
    img: "/perfume oasis.png",
  },
  {
    name: "Ruhayah",
    img: "/ruhayah.png",
  },
  {
    name: "Teeser",
    img: "/teeser.png",
  },
];

export const heroStats = [
  { v: '+39%', l: 'Average conversion-rate lift' },
  { v: '6', l: 'Currencies processed and settled locally' },
  { v: '−40%', l: 'Fake COD orders and RTO losses' },
  { v: '23s', l: 'Typical returning-buyer checkout' },
];

export const currencyPoints = [
  'Real processing and settlement, not a display conversion at the last step.',
  'Local payment rails and methods that buyers in that country already trust.',
  'Prices, tax and shipping shown the way a domestic store would show them.',
];

export const markets = [
  {
    code: 'AED',
    name: 'UAE',
    methods: 'Tabby · Tamara · Apple Pay · COD',
    flag: 'uae.png'
  },
  {
    code: 'SAR',
    name: 'Saudi Arabia',
    methods: 'Tabby · Tamara · Apple Pay · COD',
    flag: 'saudi.png'
  },
  {
    code: 'KWD',
    name: 'Kuwait',
    methods: 'Tabby · Cards · COD',
    flag: 'kuwait.png'
  },
  {
    code: 'QAR',
    name: 'Qatar',
    methods: 'Tamara · Cards · COD',
    flag: 'qatar.png'
  },
  {
    code: 'BHD',
    name: 'Bahrain',
    methods: 'Tamara · Cards · COD',
    flag: 'bahrain.png'
  },
  {
    code: 'OMR',
    name: 'Oman',
    methods: 'Cards · COD',
    flag: 'oman.png'
  },
];

export const leakBefore = [
  {
    label: 'Reach checkout',
    value: '1,000',
    width: '100%',
    note: 'Everything you paid for lands here',
  },
  {
    label: 'Finish the form',
    value: '610',
    width: '61%',
    note: 'Nine fields, typed by hand, mostly on a phone',
  },
  {
    label: 'Find a payment method they trust',
    value: '470',
    width: '47%',
    note: 'BNPL missing, wrong card rails, no COD control',
  },
  {
    label: 'Place the order',
    value: '310',
    width: '31%',
    note: 'Hesitation, distraction, second thoughts',
  },
  {
    label: 'Order actually delivered',
    value: '268',
    width: '27%',
    note: 'Unverified COD orders returned to origin',
  },
];

export const leakAfter = [
  {
    label: 'Reach checkout',
    value: '1,000',
    width: '100%',
    note: 'Same traffic, same spend',
  },
  {
    label: 'Finish the form',
    value: '840',
    width: '84%',
    note: 'Recognised buyers pre-filled, phone-first flow',
  },
  {
    label: 'Find a payment method they trust',
    value: '760',
    width: '76%',
    note: 'Right methods, right market, right moment',
  },
  {
    label: 'Place the order',
    value: '431',
    width: '43%',
    note: 'Fewer steps, familiar methods, no surprises',
  },
  {
    label: 'Order actually delivered',
    value: '410',
    width: '41%',
    note: 'OTP-verified buyers, COD fee filters the rest',
  },
];

export const levers = [
  {
    tag: 'PAYMENTS',
    metric: '6',
    metricLabel: 'Markets, each with its own rule set',
    t: 'Country-level payment rules',
    d: "Decide exactly which methods appear in each country and in what order — Tabby and Tamara where they belong, Apple Pay where it's supported, cards everywhere. One rule set, no code, no duplicate stores.",
  },
  {
    tag: 'TRUST',
    metric: '−40%',
    metricLabel: 'Fake COD orders and RTO losses',
    t: 'COD with a fee, by country',
    d: 'Enable Cash on Delivery only where it makes sense and attach a handling fee when it`s chosen.Abuse drops, margin is protected, and buyers quietly move toward prepaid.',
  },
  {
    tag: 'OPERATIONS',
    metric: '1',
    metricLabel: 'Dashboard for all six markets',
    t: 'Shipping, tax and logistics by country',
    d: 'Localised delivery rates, VAT and tax handling per market, configured once and applied automatically at checkout — instead of one blunt global setting you keep apologising for.',
  },
  {
    tag: 'PROMOTIONS',
    metric: '6',
    metricLabel: 'Currencies your offers can be locked to',
    t: 'GCC discount engine',
    d: 'Run SAR-only promotions for Saudi or KWD-locked vouchers for Kuwait. Shopify treats every offer as global; here the rules understand which country and currency the buyer is actually in.',
  },
  {
    tag: 'SECURITY',
    metric: 'OTP',
    metricLabel: 'Verified before the order exists',
    t: 'Buyer login and fraud reduction',
    d: 'Login-gated checkout with OTP verification removes fake addresses and joke COD orders before they reach fulfilment — cleaner delivery rates and a buyer you can actually reach.',
  },
  {
    tag: 'CONVERSION',
    metric: '1 tap',
    metricLabel: 'For a buyer the network already knows',
    t: 'Buyer network — one-click checkout',
    d: "Anyone who has checked out with a GulfCart brand is recognised at yours, with address and payment pre-filled. The longest, highest drop-off part of checkout simply doesn't happen.",
  },
];

export const flow = [
  {
    n: '01',
    t: 'Buyer enters their phone number',
    d: "Recognised instantly if they've bought from any brand on the network.",
  },
  {
    n: '02',
    t: 'OTP confirms who they are',
    d: 'Fake and joke COD orders are filtered before they reach fulfilment.',
  },
  {
    n: '03',
    t: 'Address and payment pre-fill',
    d: "The longest and highest-drop-off part of checkout doesn't happen at all.",
  },
  {
    n: '04',
    t: 'They pay the way they prefer',
    d: 'Tabby, Tamara, Apple Pay, cards or verified COD — the right set, in the right order.',
  },
];

export const networkPoints = [
  'Buyers arrive pre-filled and pre-verified, even on their first order with you.',
  'Risk history travels with the buyer, so bad COD orders are caught before dispatch.',
  'Every brand that joins makes the next checkout faster — including yours.',
];

export const networkStats = [
  {
    v: '1 tap',
    l: 'To complete a purchase for a recognised buyer',
  },
  {
    v: '23s',
    l: 'Typical time from cart to confirmed order',
  },
  {
    v: '9 → 2',
    l: 'Form fields a returning buyer has to fill',
  },
  {
    v: 'Day 1',
    l: 'When network recognition starts working for you',
  },
];

export const fits = [
  {
    t: 'You sell in one market and want more from it',
    d: 'Nothing about GulfCart requires expansion. Shorten the form, verify buyers, control COD and charge in the right currency — the lift comes from the traffic you already pay for.',
    start: 'Local currency, one-tap checkout and COD verification.',
  },
  {
    t: 'COD is a large share of your orders',
    d: 'Undelivered parcels quietly eat the margin that the order was supposed to earn. Verification and a handling fee change the economics of every COD order you take.',
    start: 'OTP login, COD fee by market, buyer risk signals.',
  },
  {
    t: 'You spend heavily on Meta and Google',
    d: "You're optimising campaigns against a checkout that leaks. Fixing the last step raises the return on every dirham you've already committed.",
    start: 'Checkout analytics, then one-tap and payment rules.',
  },
  {
    t: "You're ready to sell in more of the Gulf",
    d: 'When the time comes, adding a country is a switch, not a project — its own currency, payment methods, shipping and tax rules on the store you already run.',
    start: 'Turn on one new market and measure it for 30 days.',
  },
];

export const quotes = [
  {
    stat: '+39%',
    text: "We didn't change anything about our ads or our products. The checkout changed, and the order count moved within the first month.",
    who: 'Operations Lead',
    org: 'Fashion brand · AED 2M+ monthly GMV',
  },
  {
    stat: '−40%',
    text: 'The COD fee and verification alone saved a meaningful chunk of our fulfilment costs. Fake orders dropped within two weeks of going live.',
    who: 'Founder',
    org: 'Perfume Oasis · B2C lifestyle',
  },
  {
    stat: '1 tap',
    text: 'Returning buyers stopped typing anything. Our repeat orders got noticeably easier to win, and support stopped hearing about failed payments.',
    who: 'E-commerce Director',
    org: 'Regional beauty hub · 50k+ customers',
  },
];

export const plans = [
  {
    name: 'Starter',
    base: 149,
    rate: '+ 1.2% of GMV',
    band: 'Up to AED 100K/mo',
    cta: 'Book a demo',
    popular: false,
    features: [
      'Branded checkout',
      'OTP login and COD fee rules',
      'Tabby, Tamara and cards',
      '7-day onboarding',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    base: 249,
    rate: '+ 0.9% of GMV',
    band: 'AED 100K – 500K/mo',
    cta: 'Book a demo',
    popular: true,
    features: [
      'Everything in Starter',
      'One-tap buyer network',
      'True local currency checkout',
      'Funnel analytics dashboard',
      'WhatsApp support',
      'Arabic checkout UI',
    ],
  },
  {
    name: 'Enterprise',
    base: null,
    rate: '+ negotiated GMV rate',
    band: 'AED 500K+/mo',
    cta: 'Talk to us',
    popular: false,
    features: [
      'Everything in Growth',
      'Dedicated account manager',
      'Custom rules and workflows',
      'All six GCC markets',
      'White-label option',
      'SLA guarantee',
    ],
  },
];

export const faqs = [
  {
    q: 'We only sell in one country. Is this still relevant?',
    a: 'Yes — most of the lift has nothing to do with expansion. One-tap returning buyers, verified COD, BNPL rules, checkout-level offers and a shorter form all apply to a single-market store. Extra countries are there when you want them, not a requirement.',
  },
  {
    q: 'Do we have to move off Shopify?',
    a: 'No. GulfCart installs on your existing store as a checkout layer. Your theme, catalogue, apps, admin and reporting stay exactly where they are.',
  },
  {
    q: 'Does it look like our brand?',
    a: 'Yes. The checkout carries your logo, colours and domain. Buyers never see a third-party page — they see a faster version of yours.',
  },
  {
    q: 'How long does it take to go live?',
    a: "Most brands are live in about seven days, with roughly two hours of your team's time. It's a connect-and-configure process, not a development project.",
  },
  {
    q: 'What actually reduces fake and undelivered COD orders?',
    a: "OTP-verified login at checkout, a configurable COD handling fee that nudges buyers to prepay, and risk signals drawn from that buyer's history across every brand on the network.",
  },
  {
    q: 'How does it cost less than what we pay now?',
    a: 'Shopify takes 2% of every order. Our rate starts at 1.2% and drops to 0.9% at scale, plus a flat platform fee — and it removes the cost of duplicate stores or apps stitched together to do the same job.',
  },
  {
    q: 'Can we keep our existing Tabby, Tamara and payment accounts?',
    a: 'Yes. Existing provider accounts connect straight in and are then managed centrally, with rules for where and when each method appears.',
  },
];

export const goalChips = [
  'Cart abandonment',
  'COD losses',
  'Failed deliveries',
  'Slow checkout',
  'Ad spend ROI',
  'New markets',
];
export type FunnelBand = {
  value: string;       // e.g. "1,000", "620"
  label: string;       // e.g. "Landed on checkout"
  width: string;        // e.g. "100%", "82%"
  padX: string;         // horizontal padding inside the band, e.g. "18px"
  fill: string;         // tailwind bg color class fragment, e.g. "bg-accent/10"
  stroke: string;       // border color class, e.g. "border-accent/30"
  numColor: string;     // text color class for the number
  clip?: string;        // optional clip-path if you want the tapered funnel shape
  dropDisplay: boolean; // whether to show the drop-off row beneath this band
  dropColor: string;    // text color class for the drop label
  drop?: string;        // e.g. "12% drop"
};

export const funnelBefore: FunnelBand[] = [
  { value: '1,000', label: 'Landed on checkout', width: '100%', padX: 'px-5', fill: 'bg-bad/10', stroke: 'border-bad/30', numColor: 'text-fg', dropDisplay: true, dropColor: 'text-bad', drop: '18% drop' },
  { value: '820', label: 'Started filling fields', width: '86%', padX: 'px-5', fill: 'bg-bad/10', stroke: 'border-bad/30', numColor: 'text-fg', dropDisplay: true, dropColor: 'text-bad', drop: '22% drop' },
  { value: '640', label: 'Reached payment step', width: '70%', padX: 'px-4', fill: 'bg-bad/10', stroke: 'border-bad/30', numColor: 'text-fg', dropDisplay: true, dropColor: 'text-bad', drop: '31% drop' },
  { value: '440', label: 'Chose a payment method', width: '55%', padX: 'px-4', fill: 'bg-bad/10', stroke: 'border-bad/30', numColor: 'text-fg', dropDisplay: true, dropColor: 'text-bad', drop: '39% drop' },
  { value: '268', label: 'Completed order', width: '38%', padX: 'px-3', fill: 'bg-bad/15', stroke: 'border-bad/40', numColor: 'text-bad', dropDisplay: false, dropColor: '' },
];

export const funnelAfter: FunnelBand[] = [
  { value: '1,000', label: 'Landed on checkout', width: '100%', padX: 'px-5', fill: 'bg-accent/10', stroke: 'border-accent/30', numColor: 'text-fg', dropDisplay: true, dropColor: 'text-good', drop: '6% drop' },
  { value: '940', label: 'Started filling fields', width: '92%', padX: 'px-5', fill: 'bg-accent/10', stroke: 'border-accent/30', numColor: 'text-fg', dropDisplay: true, dropColor: 'text-good', drop: '9% drop' },
  { value: '855', label: 'Reached payment step', width: '82%', padX: 'px-4', fill: 'bg-accent/10', stroke: 'border-accent/30', numColor: 'text-fg', dropDisplay: true, dropColor: 'text-good', drop: '12% drop' },
  { value: '752', label: 'Chose a payment method', width: '68%', padX: 'px-4', fill: 'bg-accent/10', stroke: 'border-accent/30', numColor: 'text-fg', dropDisplay: true, dropColor: 'text-good', drop: '14% drop' },
  { value: '410', label: 'Completed order', width: '52%', padX: 'px-3', fill: 'bg-good/15', stroke: 'border-good/40', numColor: 'text-good', dropDisplay: false, dropColor: '' },
];

export const funnelReasons: string[] = [
  'One-tap checkout for returning buyers — no retyping address or card.',
  'Local payment methods shown first, ranked by what actually converts.',
  'Verified COD cuts Return to Origin risk before the order ships.',
  'Country-aware tax, currency and delivery estimates shown upfront.',
];
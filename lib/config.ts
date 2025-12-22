// ============================================
// SITE CONFIGURATION
// ============================================

export const siteConfig = {
  name: 'Kora',
  tagline: "South Africa's Leading Creator Management Agency",
  domain: 'koracreators.net',
  defaultLocale: 'en',
  social: {
    instagram: '',
    twitter: '',
  },
};

// ============================================
// AVATAR/LANDING PAGE CONFIGURATION
// ============================================
// Each avatar represents a different audience segment with customized copy

// Headline variant for split testing
export interface HeadlineVariant {
  headline: string;
  subheadline: string;
}

// Service/feature item
export interface ServiceItem {
  title: string;
  description: string;
}

// Comparison table row
export interface ComparisonRow {
  before: string;
  after: string;
}

// Case study for social proof
export interface CaseStudy {
  title: string;
  problem: string;
  whatWeFound: string;
  whatWeFixed: string[];
  result: string;
  image?: string;  // Optional image path to display below the case study
}

// Testimonial
export interface Testimonial {
  name: string;
  timeframe: string;
  quote: string;
}

// Competitor comparison item
export interface CompetitorItem {
  type: 'agency' | 'coach' | 'kora';
  title: string;
  points: string[];
  isPositive: boolean;
}

// Qualification criteria item
export interface QualificationItem {
  title: string;
  description: string;
}

export interface AvatarConfig {
  slug: string;
  name: string;
  region?: string;
  
  // Variant support for split testing
  variant?: 'a' | 'b' | 'c';
  headlineVariants?: {
    a: HeadlineVariant;
    b: HeadlineVariant;
    c: HeadlineVariant;
  };
  
  // SEO
  meta: {
    title: string;
    description: string;
    keywords?: string;
  };
  
  // Hero section copy
  hero: {
    badge: string;
    headline: string;  // Full headline (can be overridden by variant)
    subheadline: string;
    guaranteeText: string;
    guaranteeSubtext: string;
    vslEnabled?: boolean;  // Whether to show VSL video section (defaults to false)
    videoText?: string;
    videoNote?: string;
    cta: string;
  };
  
  // Problem section copy
  problem: {
    headline: string;
    intro: string[];
    painPoints: string[];
    truthHeadline: string;
    truthPoints: string[];
    businessModelStatement: string;
    closingPoints: string[];
    cta: string;
  };
  
  // Solution section copy
  solution: {
    headline: string;
    intro: string;
    bottlenecks: Array<{ problem: string; description: string }>;
    closingStatement: string;
    comparisonTable: ComparisonRow[];
  };
  
  // What You Get section copy
  whatYouGet: {
    headline: string;
    subheadline: string;
    services: ServiceItem[];
    cta: string;
  };
  
  // Social Proof section copy
  socialProof: {
    headline: string;
    subheadline: string;
    // Stats banner - fully configurable
    statsPrimary?: string;    // Full primary line (e.g., "Most Creators add $8K-15K/month" or custom)
    statsSecondary?: string;  // Secondary line (e.g., "in their first 90 days in our program")
    stats: string;            // Legacy: just the number (used if statsPrimary not set)
    statsSubtext: string;     // Additional context below
    testimonials?: Testimonial[];
    caseStudy?: CaseStudy;
  };
  
  // Why Different section copy
  whyDifferent: {
    headline: string;
    subheadline: string;
    competitors: CompetitorItem[];
    coreDifference: string;
  };
  
  // Guarantee section copy
  guarantee: {
    badge: string;
    headline: string;
    subheadline: string;
    intro: string;
    qualificationIntro: string;
    qualifications: QualificationItem[];
    closing: string;
    cta: string;
  };
  
  // Application Form
  form: {
    headline: string;
    subheadline: string;
    webhookUrl?: string;
    successMessage: string;
    fields: {
      challengeEnabled: boolean;
      challengeLabel?: string;
      challengePlaceholder?: string;
    };
    trustBadges: string[];
    submitText: string;
  };
  
  // Footer
  footer: {
    brandName: string;
    tagline: string;
    disclaimer: string;
  };
  
  // Tracking
  tracking?: {
    facebookPixelId?: string;
    googleAnalyticsId?: string;
    customParams?: Record<string, string>;
  };
}

// ============================================
// LEAD MAGNET PAGE CONFIGURATION
// ============================================
// Lead magnets are simpler opt-in pages for free resources (guides, playbooks, etc.)

export type LeadMagnetFieldType = 'firstName' | 'lastName' | 'email' | 'phone' | 'company' | 'custom';

export interface LeadMagnetField {
  type: LeadMagnetFieldType;
  label: string;
  placeholder?: string;
  required?: boolean;
  // For custom fields
  customKey?: string;
}

// Color scheme options for lead magnet pages
export type LeadMagnetColorScheme = 'blue' | 'amber';

export interface LeadMagnetConfig {
  slug: string;
  name: string;
  
  // Split test variants (just like main LP)
  variant?: 'a' | 'b' | 'c';
  headlineVariants?: {
    a: HeadlineVariant;
    b: HeadlineVariant;
    c: HeadlineVariant;
  };
  
  // Color scheme: 'blue' (matches main LP) or 'amber' (Gym Launch style)
  colorScheme?: LeadMagnetColorScheme;
  
  // SEO
  meta: {
    title: string;
    description: string;
    keywords?: string;
  };
  
  // Hero section
  hero: {
    trustBadge?: string;
    headline: string;
    subheadline: string;
    resourceImage?: string;  // Path to book/playbook mockup image
  };
  
  // Opt-in form (embedded in hero)
  form: {
    headline: string;
    fields: LeadMagnetField[];
    submitText: string;
    webhookUrl?: string;
    successRedirect?: string;  // URL to redirect after submission (e.g., thank you page or main LP)
    successMessage?: string;   // Message to show if no redirect
  };
  
  // What's inside section
  whatYouGet: {
    headline: string;
    intro?: string;
    items: Array<{ title: string; description: string }>;
  };
  
  // Footer
  footer: {
    brandName: string;
    disclaimer: string;
  };
  
  // Tracking
  tracking?: {
    facebookPixelId?: string;
    googleAnalyticsId?: string;
    customParams?: Record<string, string>;
  };
}

// Default lead magnet config
export const defaultLeadMagnetConfig: LeadMagnetConfig = {
  slug: 'default',
  name: 'Default Lead Magnet',
  colorScheme: 'blue', // Default to blue (matches main LP)
  meta: {
    title: 'Free Download | Kora',
    description: 'Get your free resource from Kora.',
  },
  hero: {
    trustBadge: 'TRUSTED BY 500+ CREATORS',
    headline: 'Free Download: The Creator Growth Playbook',
    subheadline: 'The proven strategies that help creators scale to $10K+ months.',
  },
  form: {
    headline: 'Enter Your Info Below To Access',
    fields: [
      { type: 'firstName', label: 'First Name', required: true },
      { type: 'lastName', label: 'Last Name', required: true },
      { type: 'email', label: 'Email', required: true },
      { type: 'phone', label: 'Phone Number', required: false },
    ],
    submitText: 'ACCESS THE PLAYBOOK',
    successMessage: 'Check your email for instant access!',
  },
  whatYouGet: {
    headline: 'Here\'s What You\'ll Get Access To',
    intro: 'When you download the free playbook, you\'ll unlock proven strategies that help creators scale.',
    items: [
      { title: 'Traffic Strategies', description: 'Learn how to drive consistent, high-quality subscribers.' },
      { title: 'Conversion Tactics', description: 'Turn subscribers into paying fans with proven methods.' },
      { title: 'Retention Systems', description: 'Keep fans paying month after month.' },
    ],
  },
  footer: {
    brandName: 'Kora',
    disclaimer: 'This website is not endorsed by any platform. Individual results may vary.',
  },
};

// ============================================
// LEAD MAGNET REGISTRY
// ============================================
// Add lead magnets here - they'll be accessible at /lm-[slug]

export const leadMagnets: Record<string, Partial<LeadMagnetConfig>> = {
  // Blue scheme (matches main LP)
  'playbook': {
    slug: 'playbook',
    name: 'Creator Growth Playbook',
    colorScheme: 'blue', // Blue/purple gradient style (matches main LP)
    
    // Split test headline variants
    headlineVariants: {
      a: {
        headline: 'The Creator Growth Playbook',
        subheadline: '7 proven strategies that help creators scale to $10K+ months without burning out.',
      },
      b: {
        headline: 'The No-Burnout Revenue System',
        subheadline: 'How top creators are scaling to $20K+ months while working less.',
      },
      c: {
        headline: 'Stop Posting and Hoping',
        subheadline: 'The data-driven playbook that turns content into consistent revenue.',
      },
    },
    
    meta: {
      title: 'Free Download: The Creator Growth Playbook | Kora',
      description: 'Get instant access to the 7 proven strategies that help creators scale to $10K+ months.',
      keywords: 'creator growth, creator playbook, onlyfans growth, creator business',
    },
    
    hero: {
      trustBadge: 'TRUSTED BY 500+ CREATORS',
      headline: 'The Creator Growth Playbook',
      subheadline: '7 proven strategies that help creators scale to $10K+ months without burning out.',
      resourceImage: undefined, // Add your book mockup image path here
    },
    
    form: {
      headline: 'Enter Your Info Below To Access',
      fields: [
        { type: 'firstName', label: 'First Name', required: true },
        { type: 'lastName', label: 'Last Name', required: true },
        { type: 'email', label: 'Email', required: true },
        { type: 'phone', label: 'Phone Number', required: false },
      ],
      submitText: 'ACCESS THE PLAYBOOK',
      webhookUrl: undefined, // Add your webhook URL here
      successRedirect: undefined, // Or redirect to /2 for your main LP
      successMessage: 'Check your email for instant access!',
    },
    
    whatYouGet: {
      headline: 'Here\'s What You\'ll Get Access To',
      intro: 'When you download the free playbook, you\'ll unlock 7 proven strategies that help creators scale.',
      items: [
        { 
          title: 'Traffic Engine Blueprint', 
          description: 'The multi-platform strategy (Reddit, Twitter, IG, TikTok) that drives consistent, high-quality subscribers.' 
        },
        { 
          title: 'Conversion Architecture', 
          description: 'Offer structure and pricing strategy that turns subscribers into buyers. Most creators leave 70% on the table.' 
        },
        { 
          title: 'The Chat Playbook', 
          description: 'Scripts and systems for DMs that convert — without spending 5 hours a day.' 
        },
        { 
          title: 'Retention Systems', 
          description: 'Automated sequences that keep fans paying month after month. This is where the real profit lives.' 
        },
        { 
          title: 'Content Calendar Framework', 
          description: 'Not just "what to post" — a complete system for traffic, conversion, and retention content.' 
        },
        { 
          title: 'The $10K Month Roadmap', 
          description: 'Step-by-step breakdown of exactly what to focus on each week to hit your first $10K month.' 
        },
        { 
          title: 'Bonus: Agency Red Flags Checklist', 
          description: 'How to spot the bad agencies before you sign — and what to look for in a real growth partner.' 
        },
      ],
    },
    
    footer: {
      brandName: 'Kora',
      disclaimer: 'This website is NOT endorsed by any platform. Individual experiences may vary. Your background, education, effort, and application affect your results.',
    },
  },
  'reddit': {
  slug: 'reddit',
  name: 'Reddit Playbook + Subreddit Database',
  colorScheme: 'amber',
  
  headlineVariants: {
    a: {
      headline: 'Free: The Creator Reddit Playbook + 15,000 NSFW Subreddit Database',
      subheadline: 'The exact strategy top creators use to drive 40%+ of their traffic from Reddit — without getting banned.',
    },
    b: {
      headline: 'Stop Getting Banned. Start Getting Traffic.',
      subheadline: 'Free Reddit playbook + 15,000 subreddit database with niche, engagement data, and ban risk ratings.',
    },
    c: {
      headline: 'The Reddit Strategy That\'s Working Right Now (2026)',
      subheadline: 'Free playbook + the most comprehensive NSFW subreddit database ever compiled.',
    },
  },
  
  meta: {
    title: 'Free: Creator Reddit Playbook + 15K Subreddit Database | Kora',
    description: 'The exact Reddit strategy top creators use to drive 40%+ of traffic — plus 15,000 NSFW subreddits mapped by niche, engagement, and ban risk.',
    keywords: 'reddit onlyfans, nsfw subreddits, reddit strategy, onlyfans traffic',
  },
  
  hero: {
    trustBadge: 'USED BY 500+ CREATORS',
    headline: 'Free: The Creator Reddit Playbook + 15,000 NSFW Subreddit Database',
    subheadline: 'The exact strategy top creators use to drive 40%+ of their traffic from Reddit — without getting banned.',
    resourceImage: undefined,
  },
  
  form: {
    headline: 'Get Instant Access',
    fields: [
      { type: 'firstName', label: 'First Name', placeholder: 'Jane', required: true },
      { type: 'email', label: 'Email', placeholder: 'jane@example.com', required: true },
      { type: 'custom', customKey: 'current_revenue', label: 'Current Monthly Revenue', placeholder: 'Select...', required: false },
    ],
    submitText: 'SEND ME THE PLAYBOOK + DATABASE',
    webhookUrl: undefined,
    successRedirect: '/thank-you',
    successMessage: 'Check your email! The playbook and database are on their way.',
  },
  
  whatYouGet: {
    headline: 'Here\'s What You\'re Getting (Free)',
    intro: 'Everything you need to make Reddit your #1 traffic source:',
    items: [
      {
        title: 'The Ban-Proof Posting Strategy',
        description: 'The 7 things that trigger 90% of Reddit bans — and exactly how to avoid all of them.',
      },
      {
        title: '15,000+ NSFW Subreddit Database',
        description: 'Every NSFW sub mapped with: niche category, subscriber count, engagement rate, verification requirements, ban risk rating, and best posting times.',
      },
      {
        title: 'Niche Matching System',
        description: 'How to find the exact subreddits that match YOUR content and audience — not generic recommendations.',
      },
      {
        title: 'Karma Building Shortcuts',
        description: 'The fast-track karma strategy that gets you posting-ready in days instead of weeks.',
      },
      {
        title: 'Title Formulas That Convert',
        description: '23 proven title templates that drive clicks without triggering spam filters.',
      },
      {
        title: 'Posting Schedule Blueprint',
        description: 'Exactly when to post, how often, and how to rotate subs without looking spammy.',
      },
      {
        title: 'Multi-Account Safety Strategy',
        description: 'How to structure accounts so one ban never tanks your entire Reddit presence.',
      },
    ],
  },
  
  footer: {
    brandName: 'Kora',
    disclaimer: 'This website is NOT endorsed by Reddit or any platform. Individual experiences may vary based on effort, niche, and application of the strategies.',
  },
  
  tracking: {
    customParams: {
      lead_magnet: 'reddit_playbook',
      avatar_target: '4',
    },
  },
},
  
  // Amber scheme (Gym Launch style) - same content, different colors
  'playbook-amber': {
    slug: 'playbook-amber',
    name: 'Creator Growth Playbook (Amber)',
    colorScheme: 'amber', // Amber/gold style (Gym Launch style)
    
    headlineVariants: {
      a: {
        headline: 'The Creator Growth Playbook',
        subheadline: '7 proven strategies that help creators scale to $10K+ months without burning out.',
      },
      b: {
        headline: 'The No-Burnout Revenue System',
        subheadline: 'How top creators are scaling to $20K+ months while working less.',
      },
      c: {
        headline: 'Stop Posting and Hoping',
        subheadline: 'The data-driven playbook that turns content into consistent revenue.',
      },
    },
    
    meta: {
      title: 'Free Download: The Creator Growth Playbook | Kora',
      description: 'Get instant access to the 7 proven strategies that help creators scale to $10K+ months.',
    },
    
    hero: {
      trustBadge: 'TRUSTED BY TOP 0.01% CREATORS',
      headline: 'The Creator Growth Playbook',
      subheadline: '7 proven strategies that help creators scale to $10K+ months without burning out.',
    },
    
    form: {
      headline: 'Enter Your Info Below To Access',
      fields: [
        { type: 'firstName', label: 'First Name', required: true },
        { type: 'lastName', label: 'Last Name', required: true },
        { type: 'email', label: 'Email', required: true },
        { type: 'phone', label: 'Phone Number', required: false },
      ],
      submitText: 'ACCESS THE PLAYBOOK',
      successMessage: 'Check your email for instant access!',
    },
    
    whatYouGet: {
      headline: 'Here\'s What You\'ll Get Access To',
      intro: 'When you download the free playbook, you\'ll unlock 7 proven strategies that help creators scale.',
      items: [
        { title: 'Traffic Engine Blueprint', description: 'The multi-platform strategy that drives consistent, high-quality subscribers.' },
        { title: 'Conversion Architecture', description: 'Offer structure and pricing strategy that turns subscribers into buyers.' },
        { title: 'The Chat Playbook', description: 'Scripts and systems for DMs that convert — without spending 5 hours a day.' },
        { title: 'Retention Systems', description: 'Automated sequences that keep fans paying month after month.' },
        { title: 'Content Calendar Framework', description: 'A complete system for traffic, conversion, and retention content.' },
        { title: 'The $10K Month Roadmap', description: 'Step-by-step breakdown of exactly what to focus on each week.' },
        { title: 'Bonus: Agency Red Flags Checklist', description: 'How to spot bad agencies before you sign.' },
      ],
    },
    
    footer: {
      brandName: 'Kora',
      disclaimer: 'This website is NOT endorsed by any platform. Individual experiences may vary.',
    },
  },
  'positioning': {
  slug: 'positioning',
  name: 'Free Positioning Consult',
  
  headlineVariants: {
    a: {
      headline: 'Free 30-Minute Branding Audit',
      subheadline: 'We\'ll review your socials, tell you exactly what\'s broken, and show you how to fix it. No pitch. Just answers.',
    },
    b: {
      headline: 'Let Us Tell You Why You\'re Not Growing',
      subheadline: 'Book a free 30-min call. We\'ll audit your page, find the positioning gaps, and give you the fix.',
    },
    c: {
      headline: 'Stop Guessing. Get a Free Positioning Diagnosis.',
      subheadline: 'In 30 minutes, we\'ll review your content, identify what\'s costing you money, and tell you exactly what to change.',
    },
  },
  
  meta: {
    title: 'Free Positioning Audit | Find Out What\'s Broken | Kora',
    description: 'Book a free 30-minute call. We\'ll audit your socials, diagnose your positioning, and tell you exactly what to fix.',
    keywords: 'creator audit, positioning strategy, onlyfans growth, free consultation',
  },
  
  hero: {
    trustBadge: 'LIMITED SPOTS AVAILABLE',
    headline: 'Free 30-Minute Positioning Audit',
    subheadline: 'We\'ll review your socials, tell you exactly what\'s broken, and show you how to fix it. No pitch. Just answers.',
    resourceImage: '/earnings.png',
  },
  
  form: {
    headline: 'Book Your Free Audit',
    fields: [
      { type: 'firstName', label: 'First Name', placeholder: 'Jane', required: true },
      { type: 'email', label: 'Email', placeholder: 'jane@example.com', required: true },
      { type: 'phone', label: 'Phone Number', placeholder: 'Your phone number', required: true },
      { type: 'custom', customKey: 'instagram', label: 'Your Instagram Handle', placeholder: '@yourhandle', required: true },
    ],
    submitText: 'BOOK MY FREE AUDIT →',
    webhookUrl: undefined,
    successRedirect: '/thank-you',
    successMessage: 'You\'re in. Check your email — we\'ll send you a link to schedule your call.',
  },
  
  whatYouGet: {
    headline: 'Here\'s What Happens on the Call',
    intro: 'In 30 minutes, you\'ll know exactly what\'s wrong and how to fix it:',
    items: [
      {
        title: 'Full Social Audit',
        description: 'We review your IG, Twitter, Reddit (if you have it) — and tell you what\'s working and what\'s killing your growth.',
      },
      {
        title: 'Positioning Diagnosis',
        description: 'We identify your natural positioning — the angle that fits who you actually are, not some niche you have to fake.',
      },
      {
        title: 'Content Gap Analysis',
        description: 'We show you exactly which content is converting and which is wasting your time.',
      },
      {
        title: 'The Fix',
        description: 'You leave with a clear action plan. What to change, what to double down on, and what to stop doing immediately.',
      },
    ],
  },
  
  footer: {
    brandName: 'Kora',
    disclaimer: 'This is a real strategy call, not a sales pitch. We only take on a handful of creators each month.',
  },
  
  tracking: {
    customParams: {
      lead_magnet: 'positioning_audit',
      avatar_target: '8',
    },
  },
},
'branding': {
  slug: 'branding',
  name: 'The 4-Step Branding Framework',
  colorScheme: 'blue',
  
  headlineVariants: {
    a: {
      headline: 'The 4-Step Branding Framework We Use to Scale Creators to $500K/pm+',
      subheadline: 'The exact positioning system that transformed faceless creators into industry icons.',
    },
    b: {
      headline: 'How We Build $500K/pm+ Brands (In 4 Steps)',
      subheadline: 'The branding framework behind the highest-earning creators you\'ve never heard of.',
    },
    c: {
      headline: 'From Generic to Iconic: The 4-Step Framework',
      subheadline: 'How we scale creators to $500K/month by getting branding right from day one.',
    },
  },
  
  meta: {
    title: 'Free: The 4-Step Branding Framework for $500K/pm+ Creators | Kora',
    description: 'The exact positioning & branding system we use to scale creators to $500K/month+. Download the framework used by top 0.01% earners.',
    keywords: 'creator branding, onlyfans positioning, creator brand, personal brand creator',
  },
  
  hero: {
    trustBadge: 'USED TO BUILD 8-FIGURE CREATOR BRANDS',
    headline: 'The 4-Step Branding Framework We Use to Scale Creators to $500K/pm+',
    subheadline: 'The exact positioning system that transformed faceless creators into industry icons.',
    resourceImage: '/earnings.png',
  },
  
  form: {
    headline: 'Download the Framework (Free)',
    fields: [
      { type: 'firstName', label: 'First Name', placeholder: 'Jane', required: true },
      { type: 'email', label: 'Email', placeholder: 'jane@example.com', required: true },
      { type: 'phone', label: 'Phone Number (Optional)', placeholder: 'Your phone', required: false },
    ],
    submitText: 'SEND ME THE FRAMEWORK',
    webhookUrl: undefined,
    successRedirect: '/thank-you-branding', // Redirect to thank you page with calendar
    successMessage: 'Check your email! The 4-Step Branding Framework is on its way.',
  },
  
  whatYouGet: {
    headline: 'What\'s Inside the Framework',
    intro: 'The exact 4-step system we use to position creators for maximum earnings:',
    items: [
      {
        title: 'Step 1: Core Identity Mapping',
        description: 'How to identify your natural positioning — not what you should be, but what you already are (and how to leverage it for 6-7 figures).',
      },
      {
        title: 'Step 2: The Differentiation Matrix',
        description: 'The strategic tool we use to position you in a way that eliminates competition. You\'re not "better" — you\'re different. Here\'s how.',
      },
      {
        title: 'Step 3: Brand Architecture Blueprint',
        description: 'Visual identity, messaging framework, content pillars, and platform strategy — all aligned to ONE clear brand position.',
      },
      {
        title: 'Step 4: The Scale Protocol',
        description: 'How to scale a brand from $10K/month to $500K+ without diluting it. Most creators lose their edge when they scale. This prevents that.',
      },
      {
        title: 'Bonus: The $0 → $450K Case Study',
        description: 'Full breakdown of how we positioned one creator from complete unknown to $450K/month in 4 months using this exact framework.',
      },
      {
        title: 'Bonus: Brand Audit Checklist',
        description: '23-point checklist to diagnose what\'s broken in your current positioning (and what to fix first).',
      },
    ],
  },
  
  footer: {
    brandName: 'Kora',
    disclaimer: 'This website is NOT endorsed by any platform. Results vary based on execution and individual circumstances.',
  },
  
  tracking: {
    customParams: {
      lead_magnet: 'branding_framework',
      avatar_target: '8',
    },
  },
},
};

// Default config - used as base for all avatars
export const defaultAvatarConfig: AvatarConfig = {
  slug: 'default',
  name: 'Default',
  meta: {
    title: 'Add $10K/Month to Your Creator Business — Guaranteed',
    description: 'Join creators who\'ve scaled their business with our proven system.',
    keywords: 'creator management, creator agency, creator growth',
  },
  hero: {
    badge: '💎 GUARANTEE FOR QUALIFIED CREATORS 💎',
    headline: 'Add $10K/Month to Your Creator Business — Guaranteed.',
    subheadline: 'If you don\'t hit your growth target, we\'ll manage your account for FREE until you do.',
    guaranteeText: 'If you don\'t, we\'ll manage your account for FREE',
    guaranteeSubtext: '(and coach you 1-on-1 until you do)',
    videoText: 'Watch: Why most creators stay stuck (and the system that fixes it)',
    videoNote: '🔊 Sound on',
    cta: 'SEE IF YOU QUALIFY',
  },
  problem: {
    headline: 'It\'s Not You — It\'s Your Model.',
    intro: [
      'You\'ve done the work.',
      'You\'ve posted consistently. Tried agencies that overpromised. Bought courses. Maybe even hired chatters who made things worse.',
      'And what did it get you?',
    ],
    painPoints: [
      '5 hours a day in DMs making the same money',
      'Content that gets likes but not buyers',
      'Subscribers who pay once and disappear',
      'The same $3K-5K month after month',
    ],
    truthHeadline: 'The Truth:',
    truthPoints: [
      'It\'s not your content. It\'s not your looks. It\'s not your niche.',
      'It\'s your business model.',
    ],
    businessModelStatement: 'You\'ve been running a content treadmill when you should be building a revenue machine.',
    closingPoints: [
      'Posting more doesn\'t fix a broken conversion system.',
      'Better lighting doesn\'t fix a leaky retention funnel.',
      'More followers don\'t matter if they never pay.',
    ],
    cta: 'YES — SHOW ME THE SYSTEM',
  },
  solution: {
    headline: 'At Kora, We Find the One Thing Holding You Back — And Fix That.',
    intro: 'Every creator has a different bottleneck:',
    bottlenecks: [
      { problem: 'Traffic problem?', description: 'You\'re posting but nobody\'s converting.' },
      { problem: 'Sales problem?', description: 'Fans subscribe but never buy.' },
      { problem: 'Retention problem?', description: 'You\'re always chasing new subs because old ones leave.' },
      { problem: 'Time problem?', description: 'You\'re doing everything yourself and burning out.' },
    ],
    closingStatement: 'When we fix YOUR constraint, the needle moves. Then we find the next one. And fix that too. Bottleneck by bottleneck, we build your business.',
    comparisonTable: [
      { before: 'Posting and hoping', after: 'Strategic content that converts' },
      { before: '5 hrs/day in chats', after: 'Professional team handles it 24/7' },
      { before: 'Guessing what works', after: 'Data-driven decisions' },
      { before: 'Feast or famine income', after: 'Predictable monthly growth' },
      { before: 'Doing everything alone', after: 'Dedicated growth partner' },
    ],
  },
  whatYouGet: {
    headline: 'Everything You Need to Scale — Finally, In One Place.',
    subheadline: 'You don\'t get random tactics. You get a complete business system.',
    services: [
      {
        title: 'Traffic Engine',
        description: 'Multi-platform strategy (Reddit, Twitter, IG, TikTok) that drives consistent, high-quality subscribers — not tire-kickers.',
      },
      {
        title: 'Conversion Architecture',
        description: 'Offer structure, pricing strategy, and page optimization that turns subscribers into buyers. Most creators leave 70% of their revenue on the table. We fix that.',
      },
      {
        title: 'Professional Chat Team',
        description: 'Trained specialists who match your voice, build real fan relationships, and maximize sales — so you never touch a DM again.',
      },
      {
        title: 'Retention Systems',
        description: 'Automated sequences and engagement strategies that keep fans paying month after month. This is where the real profit lives.',
      },
      {
        title: 'Content Strategy',
        description: 'Not just "what to post" — a complete system for traffic content, conversion content, and retention content. Each serves a different purpose.',
      },
      {
        title: '1-on-1 Growth Partner',
        description: 'Your dedicated coach who knows your business inside out. Weekly calls. Real strategy. Not a group chat you get lost in.',
      },
    ],
    cta: 'I WANT THIS SYSTEM',
  },
  socialProof: {
    headline: 'Creators Are Scaling Right Now. In 2025.',
    subheadline: 'Most creators add $8K-15K/month in their first 90 days.',
    statsPrimary: 'Most Creators add $8K-15K/month',
    statsSecondary: 'in their first 90 days in our program',
    stats: '$8K-15K',  // Legacy fallback
    statsSubtext: 'But the real results come as we remove constraint after constraint...',
    caseStudy: {
      title: 'Case Study: The $3K → $11K Turnaround',
      problem: 'Creator posting 3x/day, doing her own chats, stuck at $3K for 6 months.',
      whatWeFound: 'Her content was great. Her chat conversion was 4% (industry average is 15-20%). She was spending 5 hours/day on chats that weren\'t converting.',
      whatWeFixed: [
        'Handed chats to trained team',
        'Restructured her offer stack',
        'Added a mid-tier upsell she didn\'t have',
      ],
      result: '$11K in month 2. $14K in month 3. Now works 2 hours/day on content only.',
    },
  },
  whyDifferent: {
    headline: 'Not "Just Coaching" — Not "Just an Agency"',
    subheadline: 'Here\'s what makes Kora different:',
    competitors: [
      {
        type: 'agency',
        title: 'Most Agencies',
        points: [
          'Cookie-cutter strategies that ignore your brand',
          'Take 50%+ while you do all the work',
          'Chatters who sound nothing like you',
          'No transparency on what\'s actually happening',
          'You\'re just another account in a roster of 50',
        ],
        isPositive: false,
      },
      {
        type: 'coach',
        title: 'Most Coaches',
        points: [
          'Talk strategy but never touch execution',
          'Group calls where you\'re a face in the crowd',
          'Generic advice that doesn\'t fit your situation',
          'Motivation without actual systems',
        ],
        isPositive: false,
      },
      {
        type: 'kora',
        title: 'Kora',
        points: [
          'Strategy AND execution, together',
          'Your dedicated growth partner (not a group chat)',
          'Chat team trained on YOUR voice',
          'Full transparency — you see everything',
          'We win when you win',
        ],
        isPositive: true,
      },
    ],
    coreDifference: 'We don\'t just tell you what to do. We build your business WITH you.',
  },
  guarantee: {
    badge: '💎 OUR GUARANTEE 💎',
    headline: 'Add $10K/Month to Your Creator Income — Guaranteed.',
    subheadline: 'If you don\'t, we\'ll manage your account for FREE and coach you 1-on-1 until you hit it.',
    intro: 'We don\'t work with everyone who applies. If we guaranteed to transform your business... we\'d need you to commit to a few things first.',
    qualificationIntro: 'We need to know you\'re:',
    qualifications: [
      { title: 'Ready', description: 'Not just curious. Actually ready to scale.' },
      { title: 'Coachable', description: 'Willing to follow the process, even when it\'s different from what you\'ve tried.' },
      { title: 'Committed', description: 'We handle the heavy lifting, but you still have to show up.' },
    ],
    closing: 'If that\'s you, we guarantee results. If you don\'t hit your growth target, we work for free until you do. We take on the risk because we know the system works.',
    cta: 'APPLY NOW — SEE IF YOU QUALIFY',
  },
  form: {
    headline: 'Ready to See If You Qualify?',
    subheadline: 'No credit card. No commitment. Just a conversation.',
    webhookUrl: undefined,
    successMessage: 'Thanks! We\'ll review your application and reach out within 24 hours.',
    fields: {
      challengeEnabled: true,
      challengeLabel: 'What\'s your biggest challenge right now?',
      challengePlaceholder: 'Traffic, sales, retention, time, something else?',
    },
    trustBadges: [
      '🔒 100% Confidential — We never share your info',
      '⚡ Response within 24 hours',
      '💬 No sales pressure — Just a real conversation',
    ],
    submitText: 'SUBMIT APPLICATION →',
  },
  footer: {
    brandName: 'Kora',
    tagline: 'We don\'t manage creators. We build creator businesses.',
    disclaimer: 'Results vary. Growth depends on following our systems and showing up to do the work.',
  },
};

// ============================================
// AVATAR REGISTRY
// ============================================
// Add new avatars here - they'll automatically get routes

export const avatars: Record<string, Partial<AvatarConfig>> = {
  // Avatar 2 - Main revamped copy with split test variants
  '1': {
  slug: '1',
  name: 'Avatar 1 - SA Creators',
  region: 'South Africa',
  
  headlineVariants: {
    a: {
      headline: 'SA Creator? Here\'s How to Reach the US Audience (Without Going Public)',
      subheadline: 'The anonymous growth system that\'s helping South African creators build $10K+ months.',
    },
    b: {
      headline: 'Build a 6-Figure OnlyFans Without Anyone in SA Knowing',
      subheadline: 'The privacy-first system for South African creators who want US dollars, not local drama.',
    },
    c: {
      headline: 'You Don\'t Need to Show Your Face. You Need a System.',
      subheadline: 'How SA creators are quietly building $10K+ months while staying completely anonymous.',
    },
  },
  
  meta: {
    title: 'SA Creators: Reach the US Audience Without Going Public | Kora',
    description: 'The anonymous growth system helping South African OnlyFans creators build $10K+ months without public exposure.',
    keywords: 'south africa onlyfans, sa creator, anonymous creator, us audience',
  },
  
  hero: {
    badge: '🇿🇦 FOR SOUTH AFRICAN CREATORS',
    headline: 'SA Creator? Here\'s How to Reach the US Audience (Without Going Public)',
    subheadline: 'The anonymous growth system that\'s helping South African creators build $10K+ months.',
    guaranteeText: 'If you don\'t hit your growth target, we\'ll manage your account for FREE',
    guaranteeSubtext: '(and coach you 1-on-1 until you do)',
    videoText: 'Watch: How SA creators are scaling anonymously',
    videoNote: '🔊 Sound on',
    cta: 'SEE IF YOU QUALIFY',
  },
  
  problem: {
    headline: 'The SA Creator Trap',
    intro: [
      'You want to build a real income from this.',
      'But you\'re stuck between two fears:',
      'Fear of someone finding out. And fear of never reaching the audience that actually pays.',
    ],
    painPoints: [
      'Terrified your family or friends will discover your content',
      'Making Rand-equivalent money while US creators earn 3x more',
      'No idea how to reach American buyers (the highest spenders)',
      'Intimidated by Reddit, Twitter, and platforms you don\'t understand',
      'Feeling isolated — no local creator community that gets it',
      'Worried about tax and legal implications you can\'t figure out',
    ],
    truthHeadline: 'Here\'s the Truth:',
    truthPoints: [
      'You don\'t need to go public to make real money.',
      'You don\'t need to be in the US to reach US buyers.',
      'You need a system built for privacy AND profit.',
    ],
    businessModelStatement: 'The creators making $10K+ from South Africa aren\'t doing it by "being brave" and going public. They\'re doing it with smart systems that protect their identity while targeting the right audience.',
    closingPoints: [
      'Posting on IG and hoping isn\'t a strategy.',
      'Avoiding Reddit because it\'s "complicated" is leaving money on the table.',
      'Staying small because you\'re scared isn\'t sustainable.',
    ],
    cta: 'SHOW ME THE SYSTEM',
  },
  
  solution: {
    headline: 'At Kora, We Build Anonymous Growth Systems',
    intro: 'Every SA creator has unique constraints. We solve for yours:',
    bottlenecks: [
      { problem: 'Privacy fears?', description: 'We build faceless funnels that convert without exposing your identity.' },
      { problem: 'Can\'t reach US audience?', description: 'We know which platforms, times, and content types resonate with American buyers.' },
      { problem: 'Intimidated by tech?', description: 'We handle Reddit, Twitter, and traffic platforms — you focus on content.' },
      { problem: 'Tax confusion?', description: 'We connect you with creator-friendly tax guidance (no judgment, just clarity).' },
    ],
    closingStatement: 'Your location doesn\'t limit your income. Your system does. We fix the system.',
    comparisonTable: [
      { before: 'Hiding and hoping', after: 'Strategic anonymity that converts' },
      { before: 'Earning in Rand', after: 'Earning in USD from US buyers' },
      { before: 'Scared of Reddit', after: 'Reddit driving 50%+ of traffic' },
      { before: 'Doing it alone', after: 'SA-based support who gets it' },
      { before: 'Confused about tax', after: 'Clear systems for SA creators' },
    ],
  },
  
  whatYouGet: {
    headline: 'Everything You Need — Built for SA Creators',
    subheadline: 'Privacy-first growth without sacrificing income.',
    services: [
      {
        title: 'Anonymous Traffic Engine',
        description: 'Multi-platform strategy (Reddit, Twitter, TikTok) that drives US subscribers without revealing your identity. We know what works for faceless creators.',
      },
      {
        title: 'US Audience Targeting',
        description: 'Content timing, platform selection, and messaging optimized for American buyers — the highest-spending audience in the world.',
      },
      {
        title: 'Professional Chat Team',
        description: 'Native English speakers who sound natural to US fans, maximize sales, and protect your privacy. You never touch a DM.',
      },
      {
        title: 'Privacy-First Content Strategy',
        description: 'What to show, what to hide, how to build a brand without a face. We\'ve helped dozens of SA creators do this successfully.',
      },
      {
        title: 'SA Tax & Legal Clarity',
        description: 'We connect you with resources who understand the SA creator landscape — so you\'re protected and compliant.',
      },
      {
        title: '1-on-1 SA Growth Partner',
        description: 'Your dedicated coach who understands SA-specific challenges. Same timezone. Real support. Not a generic US playbook.',
      },
    ],
    cta: 'I WANT THIS SYSTEM',
  },
  
  socialProof: {
    headline: 'SA Creators Are Scaling Right Now',
    subheadline: 'Quietly building real income from South Africa.',
    stats: '$8K-15K/month',
    statsSubtext: 'Average growth for SA creators in their first 90 days',
    caseStudy: {
      title: 'Case Study: R50K/month → R180K/month',
      problem: 'Cape Town creator scared to post publicly, stuck at R50K/month, only had local fans.',
      whatWeFound: 'Her content was great. But 90% of her audience was SA-based (low spending power). Zero Reddit presence. No US traffic strategy.',
      whatWeFixed: [
        'Built anonymous Reddit traffic system (US-focused subs)',
        'Restructured offers for USD pricing psychology',
        'Handed chats to native English team',
        'Optimized posting times for US timezone',
      ],
      result: 'R180K in month 3. 70% of fans now US-based. Still completely anonymous locally.',
    },
  },
  
  whyDifferent: {
    headline: 'Not a Generic US Agency',
    subheadline: 'We understand SA-specific challenges:',
    competitors: [
      {
        type: 'agency',
        title: 'US-Based Agencies',
        points: [
          'Don\'t understand SA privacy concerns',
          'Generic strategies that ignore your reality',
          'Timezone nightmare for communication',
          'No knowledge of SA tax/legal landscape',
          'Push you to "go public" because they don\'t know better',
        ],
        isPositive: false,
      },
      {
        type: 'coach',
        title: 'Local "Gurus"',
        points: [
          'Never actually scaled creators themselves',
          'Recycled US advice that doesn\'t translate',
          'No real systems, just motivation',
          'Can\'t help with traffic or execution',
        ],
        isPositive: false,
      },
      {
        type: 'kora',
        title: 'Kora',
        points: [
          'SA-based team who gets your reality',
          'Privacy-first systems proven to work',
          'US audience targeting without US exposure',
          'Execution + strategy, not just advice',
          'We handle the scary platforms for you',
        ],
        isPositive: true,
      },
    ],
    coreDifference: 'We\'re not asking you to go public. We\'re showing you how to stay private AND scale.',
  },
  
  guarantee: {
    badge: '💎 SA CREATOR GUARANTEE 💎',
    headline: 'Add R150K+/Month to Your Income — Guaranteed.',
    subheadline: 'If you don\'t hit your growth target, we\'ll manage your account for FREE until you do.',
    intro: 'We don\'t work with every SA creator who applies. This system requires commitment.',
    qualificationIntro: 'We need to know you\'re:',
    qualifications: [
      { title: 'Serious', description: 'Ready to build a real business, not just curious about the industry.' },
      { title: 'Coachable', description: 'Willing to try platforms and strategies outside your comfort zone.' },
      { title: 'Committed', description: 'We handle the heavy lifting, but you still have to create content.' },
    ],
    closing: 'If that\'s you, we guarantee results. Your location won\'t limit your income anymore.',
    cta: 'APPLY NOW — SEE IF YOU QUALIFY',
  },
  
  form: {
    headline: 'Ready to Scale from SA?',
    subheadline: 'No credit card. No judgment. Just a conversation about what\'s possible.',
    webhookUrl: undefined,
    successMessage: 'Thanks! We\'ll review your application and reach out within 24 hours.',
    fields: {
      challengeEnabled: true,
      challengeLabel: 'What\'s holding you back right now?',
      challengePlaceholder: 'Privacy concerns, reaching US audience, tech overwhelm, something else?',
    },
    trustBadges: [
      '🔒 100% Confidential — Your privacy is sacred to us',
      '🇿🇦 SA-based team who understands your situation',
      '⚡ Response within 24 hours',
    ],
    submitText: 'SUBMIT APPLICATION →',
  },
  
  footer: {
    brandName: 'Kora',
    tagline: 'Privacy-first growth for SA creators.',
    disclaimer: 'Results vary. Growth depends on following our systems and showing up to do the work.',
  },
},
'2': {
  slug: '2',
  name: 'Avatar 2 - Stuck at $3K',
  
  headlineVariants: {
    a: {
      headline: 'Add $10K/Month to Your OnlyFans — Guaranteed.',
      subheadline: 'If you don\'t hit your growth target, we\'ll manage your account for FREE until you do.',
    },
    b: {
      headline: 'You Don\'t Have a Content Problem. You Have a Business Problem.',
      subheadline: 'The system that\'s turning stuck creators into $20K+ months.',
    },
    c: {
      headline: 'Stuck at $3K/Month? It\'s Not Your Content.',
      subheadline: 'Here\'s what\'s actually broken (and how to fix it in 90 days).',
    },
  },
  
  meta: {
    title: 'Add $10K/Month to Your OnlyFans — Guaranteed | Kora',
    description: 'Stuck at $3K/month? The system that\'s scaling creators to $20K+ months. Get your dedicated growth partner.',
    keywords: 'onlyfans growth, scale onlyfans, creator business, onlyfans agency',
  },
  
  hero: {
    badge: '💎 GUARANTEE FOR QUALIFIED CREATORS 💎',
    headline: 'You Don\'t Have a Content Problem. You Have a Business Problem.',
    subheadline: 'The system that\'s turning stuck creators into $20K+ months.',
    guaranteeText: 'If you don\'t hit your growth target, we\'ll manage your account for FREE',
    guaranteeSubtext: '(and coach you 1-on-1 until you do)',
    videoText: 'Watch: Why most creators stay stuck (and the system that fixes it)',
    videoNote: '🔊 Sound on',
    cta: 'SEE IF YOU QUALIFY',
  },
  
  problem: {
    headline: 'It\'s Not You — It\'s Your Model.',
    intro: [
      'You\'ve done the work.',
      'You\'ve posted consistently. Tried agencies that overpromised. Bought courses. Maybe even hired chatters who made things worse.',
      'And what did it get you?',
    ],
    painPoints: [
      '5 hours a day in DMs making the same money',
      'Content that gets likes but not buyers',
      'Subscribers who pay once and disappear',
      'The same $3K-5K month after month',
      'Watching smaller accounts blow past you',
      'No idea what\'s actually driving revenue vs. just "engagement"',
    ],
    truthHeadline: 'Here\'s the Truth:',
    truthPoints: [
      'It\'s not your content. It\'s not your looks. It\'s not your niche.',
      'It\'s your business model.',
    ],
    businessModelStatement: 'You\'ve been running a content treadmill when you should be building a revenue machine.',
    closingPoints: [
      'Posting more doesn\'t fix a broken conversion system.',
      'Better lighting doesn\'t fix a leaky retention funnel.',
      'More followers don\'t matter if they never pay.',
      'You don\'t need to work harder. You need a system that actually works.',
    ],
    cta: 'YES — SHOW ME THE SYSTEM',
  },
  
  solution: {
    headline: 'At Kora, We Find the One Thing Holding You Back — And Fix That.',
    intro: 'Every creator has a different bottleneck:',
    bottlenecks: [
      { problem: 'Traffic problem?', description: 'You\'re posting but nobody\'s converting.' },
      { problem: 'Sales problem?', description: 'Fans subscribe but never buy PPV or tips.' },
      { problem: 'Retention problem?', description: 'You\'re always chasing new subs because old ones leave.' },
      { problem: 'Time problem?', description: 'You\'re doing everything yourself and burning out.' },
    ],
    closingStatement: 'When we fix YOUR constraint, the needle moves. Then we find the next one. And fix that too. Bottleneck by bottleneck, we build your business.',
    comparisonTable: [
      { before: 'Posting and hoping', after: 'Strategic content that converts' },
      { before: '5 hrs/day in chats', after: 'Professional team handles it 24/7' },
      { before: 'Guessing what works', after: 'Data-driven decisions' },
      { before: 'Feast or famine income', after: 'Predictable monthly growth' },
      { before: 'Doing everything alone', after: 'Dedicated growth partner' },
    ],
  },
  
  whatYouGet: {
    headline: 'Everything You Need to Scale — Finally, In One Place.',
    subheadline: 'You don\'t get random tactics. You get a complete business system.',
    services: [
      {
        title: 'Traffic Engine',
        description: 'Multi-platform strategy (Reddit, Twitter, IG, TikTok) that drives consistent, high-quality subscribers — not tire-kickers.',
      },
      {
        title: 'Conversion Architecture',
        description: 'Offer structure, pricing strategy, and page optimization that turns subscribers into buyers. Most creators leave 70% of their revenue on the table. We fix that.',
      },
      {
        title: 'Professional Chat Team',
        description: 'Trained specialists who match your voice, build real fan relationships, and maximize sales — so you never touch a DM again.',
      },
      {
        title: 'Retention Systems',
        description: 'Automated sequences and engagement strategies that keep fans paying month after month. This is where the real profit lives.',
      },
      {
        title: 'Content Strategy',
        description: 'Not just "what to post" — a complete system for traffic content, conversion content, and retention content. Each serves a different purpose.',
      },
      {
        title: '1-on-1 Growth Partner',
        description: 'Your dedicated partner who knows your business inside out. Weekly calls. Real strategy. Not a group chat you get lost in.',
      },
    ],
    cta: 'I WANT THIS SYSTEM',
  },
  
  socialProof: {
    headline: 'Creators Are Scaling Right Now. In 2025.',
    subheadline: 'Most creators add $8K-15K/month in their first 90 days.',
    stats: '$8K-15K',
    statsSubtext: 'But the real results come as we remove constraint after constraint...',
    caseStudy: {
      title: 'Case Study: The $3K → $14K Turnaround',
      problem: 'Creator posting 3x/day, doing her own chats, stuck at $3K for 6 months.',
      whatWeFound: 'Her content was great. Her chat conversion was 4% (industry average is 15-20%). She was spending 5 hours/day on chats that weren\'t converting.',
      whatWeFixed: [
        'Handed chats to trained team',
        'Restructured her offer stack',
        'Added a mid-tier upsell she didn\'t have',
        'Optimized her Reddit traffic strategy',
      ],
      result: '$11K in month 2. $14K in month 3. Now works 2 hours/day on content only.',
    },
  },
  
  whyDifferent: {
    headline: 'Not Just Another Agency',
    subheadline: 'Here\'s what makes Kora different:',
    competitors: [
      {
        type: 'agency',
        title: 'Most Agencies',
        points: [
          'Cookie-cutter strategies that ignore your brand',
          'Take 50%+ while you do all the work',
          'Chatters who sound nothing like you',
          'No transparency on what\'s actually happening',
          'You\'re just another account in a roster of 50',
        ],
        isPositive: false,
      },
      {
        type: 'kora',
        title: 'Kora',
        points: [
          'Strategy AND execution, together',
          'Your dedicated growth partner (not a group chat)',
          'Chat team trained on YOUR voice',
          'Full transparency — you see everything',
          'We win when you win',
        ],
        isPositive: true,
      },
    ],
    coreDifference: 'We don\'t just tell you what to do. We build your business WITH you.',
  },
  
  guarantee: {
    badge: '💎 OUR GUARANTEE 💎',
    headline: 'Add $10K/Month to Your OnlyFans — Guaranteed.',
    subheadline: 'If you don\'t, we\'ll manage your account for FREE and work with you 1-on-1 until you hit it.',
    intro: 'We don\'t work with everyone who applies. If we guaranteed to transform your business... we\'d need you to commit to a few things first.',
    qualificationIntro: 'We need to know you\'re:',
    qualifications: [
      { title: 'Ready', description: 'Not just curious. Actually ready to scale.' },
      { title: 'Coachable', description: 'Willing to follow the process, even when it\'s different from what you\'ve tried.' },
      { title: 'Committed', description: 'We handle the heavy lifting, but you still have to show up.' },
    ],
    closing: 'If that\'s you, we guarantee results. If you don\'t hit your growth target, we work for free until you do. We take on the risk because we know the system works.',
    cta: 'APPLY NOW — SEE IF YOU QUALIFY',
  },
  
  form: {
    headline: 'Ready to See If You Qualify?',
    subheadline: 'No credit card. No commitment. Just a conversation.',
    webhookUrl: undefined,
    successMessage: 'Thanks! We\'ll review your application and reach out within 24 hours.',
    fields: {
      challengeEnabled: true,
      challengeLabel: 'What\'s your biggest challenge right now?',
      challengePlaceholder: 'Traffic, sales, retention, time, something else?',
    },
    trustBadges: [
      '🔒 100% Confidential — We never share your info',
      '⚡ Response within 24 hours',
      '💬 No sales pressure — Just a real conversation',
    ],
    submitText: 'SUBMIT APPLICATION →',
  },
  
  footer: {
    brandName: 'Kora',
    tagline: 'We don\'t manage creators. We build creator businesses.',
    disclaimer: 'Results vary. Growth depends on following our systems and showing up to do the work.',
  },
},
'3': {
  slug: '3',
  name: 'Avatar 3 - IG Struggles',
  
  headlineVariants: {
    a: {
      headline: 'Shadowbanned Again? The Algorithm Isn\'t Broken. Your Strategy Is.',
      subheadline: 'The 2026 Instagram playbook for OnlyFans creators who are done fighting the algorithm.',
    },
    b: {
      headline: 'Your IG Reach Is Dying. Here\'s What to Do About It.',
      subheadline: 'How smart creators are building $10K+ months without depending on Instagram.',
    },
    c: {
      headline: 'Getting 200 Views While Worse Creators Go Viral?',
      subheadline: 'The algorithm changed. Here\'s the new playbook (it\'s not what you think).',
    },
  },
  
  meta: {
    title: 'Shadowbanned? The 2026 Instagram Playbook for Creators | Kora',
    description: 'IG reach dying? The algorithm changed. Here\'s how creators are building $10K+ months without depending on Instagram.',
    keywords: 'instagram shadowban, ig algorithm, onlyfans instagram, creator instagram',
  },
  
  hero: {
    badge: '📱 FOR CREATORS FRUSTRATED WITH INSTAGRAM',
    headline: 'Shadowbanned Again? The Algorithm Isn\'t Broken. Your Strategy Is.',
    subheadline: 'The 2026 Instagram playbook for OnlyFans creators who are done fighting the algorithm.',
    guaranteeText: 'If you don\'t hit your growth target, we\'ll manage your account for FREE',
    guaranteeSubtext: '(and coach you 1-on-1 until you do)',
    videoText: 'Watch: Why IG is failing you (and what actually works now)',
    videoNote: '🔊 Sound on',
    cta: 'SEE IF YOU QUALIFY',
  },
  
  problem: {
    headline: 'The IG Death Spiral',
    intro: [
      'You used to get reach.',
      'Now you post and it\'s like screaming into the void. 200 views. Maybe 50 likes. Same followers. No conversions.',
      'And the worst part?',
    ],
    painPoints: [
      'Getting shadowbanned constantly with no clear reason',
      'Reels getting 200 views while worse creators go viral',
      'Spending hours on content that dies immediately',
      'Don\'t understand the algorithm anymore (nobody does)',
      'Scared to post anything "too spicy" but bland content gets ignored',
      'Watching your reach decline month over month',
      'No idea how to actually convert followers to paying fans',
    ],
    truthHeadline: 'Here\'s the Hard Truth:',
    truthPoints: [
      'Instagram isn\'t a growth platform for creators anymore. It\'s a brand platform.',
      'The creators making real money aren\'t fighting the algorithm. They\'ve diversified.',
    ],
    businessModelStatement: 'You\'ve been putting all your eggs in a basket that\'s actively trying to push you out. The algorithm isn\'t your enemy — your single-platform dependency is.',
    closingPoints: [
      'IG is for brand awareness, not conversions.',
      'Reddit, Twitter, and TikTok convert 3-5x better for OnlyFans.',
      'Smart creators use IG as ONE piece of a multi-platform system.',
      'You don\'t need to quit IG. You need to stop depending on it.',
    ],
    cta: 'SHOW ME THE ALTERNATIVE',
  },
  
  solution: {
    headline: 'At Kora, We Build Multi-Platform Systems (So You\'re Never Held Hostage by One Algorithm)',
    intro: 'Here\'s what actually moves the needle:',
    bottlenecks: [
      { problem: 'IG reach dying?', description: 'We use IG for brand, not conversions. The real traffic comes from elsewhere.' },
      { problem: 'Scared of Reddit?', description: 'We handle it for you. Reddit converts 3-5x better than IG for OnlyFans.' },
      { problem: 'Don\'t understand Twitter?', description: 'We build your Twitter strategy from scratch — it\'s still massively underused.' },
      { problem: 'No time to learn new platforms?', description: 'We execute on all of them. You just create content.' },
    ],
    closingStatement: 'Stop fighting an algorithm that doesn\'t want you. We build systems across platforms — so no single shadowban can tank your income.',
    comparisonTable: [
      { before: 'All eggs in IG basket', after: 'Traffic from 4+ platforms' },
      { before: 'Fighting the algorithm', after: 'Working WITH each platform\'s strengths' },
      { before: 'Shadowban = income dies', after: 'Shadowban = minor inconvenience' },
      { before: 'Guessing what works', after: 'Data-driven multi-platform strategy' },
      { before: '200 views, no sales', after: 'Consistent conversions from diversified traffic' },
    ],
  },
  
  whatYouGet: {
    headline: 'Everything You Need — Across Every Platform That Matters',
    subheadline: 'Stop depending on one algorithm. Build a real traffic engine.',
    services: [
      {
        title: 'Multi-Platform Traffic Engine',
        description: 'Reddit, Twitter, TikTok, AND optimized IG strategy. Each platform serves a purpose. None is the single point of failure.',
      },
      {
        title: 'Platform-Specific Content Strategy',
        description: 'What works on IG doesn\'t work on Reddit. We build content systems for EACH platform so you\'re not wasting time on the wrong approach.',
      },
      {
        title: 'Shadowban Recovery & Prevention',
        description: 'We know why accounts get hit and how to recover. More importantly, we know how to post without triggering the algorithm.',
      },
      {
        title: 'Professional Chat Team',
        description: 'Convert traffic from ALL platforms. Trained on your voice, maximizing sales, handling DMs 24/7.',
      },
      {
        title: 'Conversion Architecture',
        description: 'The actual funnel that turns followers (from any platform) into paying OnlyFans subscribers.',
      },
      {
        title: '1-on-1 Growth Partner',
        description: 'Your dedicated partner who manages your multi-platform strategy. Weekly calls. Real execution.',
      },
    ],
    cta: 'I WANT THIS SYSTEM',
  },
  
  socialProof: {
    headline: 'Creators Are Escaping the IG Trap Right Now',
    subheadline: 'What happens when you stop fighting and start diversifying.',
    stats: '$8K-15K/month',
    statsSubtext: 'Average growth when creators diversify beyond IG',
    caseStudy: {
      title: 'Case Study: IG-Dependent to Platform-Proof',
      problem: 'Creator with 50K IG followers, shadowbanned 3x in 6 months, income crashed each time. Stuck at $2K/month.',
      whatWeFound: '100% of her traffic came from IG. Zero Reddit presence. Zero Twitter. Every shadowban was catastrophic.',
      whatWeFixed: [
        'Built Reddit traffic system (now 40% of traffic)',
        'Launched Twitter presence (now 25% of traffic)',
        'Optimized IG for brand only (35% of traffic)',
        'Shadowban now = 35% dip instead of 100% crash',
      ],
      result: '$12K in month 3. Got shadowbanned in month 4 — income only dropped 30% and recovered in 2 weeks.',
    },
  },
  
  whyDifferent: {
    headline: 'Not IG "Gurus" — Platform-Agnostic Growth Partners',
    subheadline: 'We don\'t promise to fix Instagram. We make it irrelevant to your success.',
    competitors: [
      {
        type: 'agency',
        title: 'IG "Experts"',
        points: [
          'Sell you on algorithm hacks that stop working',
          'Can\'t help when you get shadowbanned',
          'Don\'t know Reddit, Twitter, or TikTok',
          'One platform strategy = one point of failure',
          'Your success depends on Meta\'s mood',
        ],
        isPositive: false,
      },
      {
        type: 'kora',
        title: 'Kora',
        points: [
          'Multi-platform systems from day one',
          'Shadowban = minor speed bump',
          'Reddit, Twitter, TikTok, AND IG strategy',
          'No single point of failure',
          'Your success depends on systems, not algorithms',
        ],
        isPositive: true,
      },
    ],
    coreDifference: 'We don\'t try to beat the algorithm. We make you algorithm-proof.',
  },
  
  guarantee: {
    badge: '💎 OUR GUARANTEE 💎',
    headline: 'Add $10K/Month to Your OnlyFans — Guaranteed.',
    subheadline: 'If you don\'t, we\'ll manage your account for FREE until you hit it.',
    intro: 'We don\'t work with everyone who applies. We need creators ready to diversify, not just chase IG hacks.',
    qualificationIntro: 'We need to know you\'re:',
    qualifications: [
      { title: 'Open', description: 'Willing to try Reddit, Twitter, and platforms outside your comfort zone.' },
      { title: 'Coachable', description: 'Ready to learn new platforms with our guidance.' },
      { title: 'Committed', description: 'We handle execution, but you still need to create content.' },
    ],
    closing: 'If that\'s you, we guarantee results. Stop gambling on one algorithm.',
    cta: 'APPLY NOW — SEE IF YOU QUALIFY',
  },
  
  form: {
    headline: 'Ready to Escape the IG Trap?',
    subheadline: 'No credit card. No commitment. Just a conversation about what\'s possible.',
    webhookUrl: undefined,
    successMessage: 'Thanks! We\'ll review your application and reach out within 24 hours.',
    fields: {
      challengeEnabled: true,
      challengeLabel: 'What\'s your biggest IG frustration right now?',
      challengePlaceholder: 'Shadowbans, dying reach, low conversions, something else?',
    },
    trustBadges: [
      '🔒 100% Confidential — We never share your info',
      '⚡ Response within 24 hours',
      '💬 No sales pressure — Just a real conversation',
    ],
    submitText: 'SUBMIT APPLICATION →',
  },
  
  footer: {
    brandName: 'Kora',
    tagline: 'Build a business, not an algorithm dependency.',
    disclaimer: 'Results vary. Growth depends on following our systems and showing up to do the work.',
  },
},
'4': {
  slug: '4',
  name: 'Avatar 4 - Reddit Bans',
  
  headlineVariants: {
    a: {
      headline: 'Banned From Reddit Again? There\'s a Better Way.',
      subheadline: 'The sustainable Reddit strategy that\'s helping creators drive 50%+ of their traffic without burning through accounts.',
    },
    b: {
      headline: 'Reddit Is the #1 Traffic Source for OnlyFans. Here\'s Why You Keep Getting Banned.',
      subheadline: 'Stop burning through accounts. Start building sustainable traffic.',
    },
    c: {
      headline: 'Your Reddit Ban Cycle Is Costing You $5K+/Month',
      subheadline: 'Here\'s the system that breaks it (used by top 1% creators).',
    },
  },
  
  meta: {
    title: 'Stop Getting Banned on Reddit | The Sustainable Creator Strategy | Kora',
    description: 'Reddit is the #1 traffic source for OnlyFans. Here\'s why you keep getting banned — and the sustainable strategy that fixes it.',
    keywords: 'reddit onlyfans, reddit ban, reddit nsfw, reddit creator strategy',
  },
  
  hero: {
    badge: '🔥 FOR CREATORS TIRED OF REDDIT BANS',
    headline: 'Banned From Reddit Again? There\'s a Better Way.',
    subheadline: 'The sustainable Reddit strategy that\'s helping creators drive 50%+ of their traffic without burning through accounts.',
    guaranteeText: 'If you don\'t hit your growth target, we\'ll manage your account for FREE',
    guaranteeSubtext: '(and coach you 1-on-1 until you do)',
    videoText: 'Watch: Why you keep getting banned (and how to stop)',
    videoNote: '🔊 Sound on',
    cta: 'SEE IF YOU QUALIFY',
  },
  
  problem: {
    headline: 'The Reddit Ban Cycle',
    intro: [
      'You know Reddit converts better than any other platform.',
      'You\'ve seen other creators drive massive traffic. You\'ve tried it yourself.',
      'And the cycle goes like this:',
    ],
    painPoints: [
      'Spend hours building karma on a new account',
      'Start posting, get some traction',
      'BAM — permabanned. No warning. No explanation.',
      'Start over. Again.',
      'Watch creators with "worse" content somehow never get banned',
      'Burning through accounts constantly',
      'Missing out on the highest-converting traffic source because you can\'t crack the code',
    ],
    truthHeadline: 'Here\'s What You Don\'t Know:',
    truthPoints: [
      'The creators who never get banned aren\'t lucky. They have a system.',
      'Bans aren\'t random. They\'re predictable — if you know what triggers them.',
    ],
    businessModelStatement: 'You\'re not getting banned because Reddit hates you. You\'re getting banned because you\'re using 2020 tactics in 2026. The game changed. Your strategy didn\'t.',
    closingPoints: [
      'The "spray and pray" approach is dead.',
      'Karma farming without strategy is a waste of time.',
      'Posting in the wrong subs is account suicide.',
      'There\'s a sustainable way to run Reddit — and we\'ve documented it.',
    ],
    cta: 'SHOW ME THE SYSTEM',
  },
  
  solution: {
    headline: 'At Kora, We\'ve Cracked the Reddit Code',
    intro: 'After managing Reddit for hundreds of creators, we know:',
    bottlenecks: [
      { problem: 'Getting banned constantly?', description: 'We know the 7 triggers that cause 90% of bans. We avoid all of them.' },
      { problem: 'Don\'t know which subs to post in?', description: 'We have a database of 15,000+ NSFW subs with engagement data, ban risk, and niche fit.' },
      { problem: 'Karma building takes forever?', description: 'We have karma-building systems that work in days, not weeks.' },
      { problem: 'No time to manage it yourself?', description: 'We handle your entire Reddit presence. You just approve content.' },
    ],
    closingStatement: 'Reddit should be driving 30-50% of your traffic. If it\'s not — or if you can\'t stay unbanned long enough to see results — you\'re leaving thousands on the table every month.',
    comparisonTable: [
      { before: 'Banned every 2 weeks', after: '6+ months without a single ban' },
      { before: 'Random subreddit guessing', after: '15,000+ sub database with niche matching' },
      { before: 'Hours building karma', after: 'Karma systems that work in days' },
      { before: '5% of traffic from Reddit', after: '40-50% of traffic from Reddit' },
      { before: 'Starting over constantly', after: 'Sustainable, compounding growth' },
    ],
  },
  
  whatYouGet: {
    headline: 'The Complete Reddit System',
    subheadline: 'Everything you need to make Reddit your #1 traffic source — sustainably.',
    services: [
      {
        title: 'Ban-Proof Strategy',
        description: 'We know exactly what triggers bans and how to avoid them. Our creators go 6+ months without issues.',
      },
      {
        title: '15,000+ Subreddit Database',
        description: 'Every NSFW sub mapped by niche, engagement, verification requirements, ban risk, and best posting times. You\'ll never guess again.',
      },
      {
        title: 'Done-For-You Reddit Management',
        description: 'We handle everything — karma building, posting schedule, sub selection, content optimization. You just approve.',
      },
      {
        title: 'Multi-Account Strategy',
        description: 'Smart account structure that protects you even if one account gets hit. Never lose everything to one ban.',
      },
      {
        title: 'Content Optimization',
        description: 'What titles, formats, and content types perform best on Reddit. It\'s different from every other platform.',
      },
      {
        title: 'Conversion Architecture',
        description: 'Reddit traffic is worthless if it doesn\'t convert. We build the funnel from Reddit post to OnlyFans subscriber.',
      },
    ],
    cta: 'I WANT THIS SYSTEM',
  },
  
  socialProof: {
    headline: 'Creators Are Finally Cracking Reddit',
    subheadline: 'What happens when you stop getting banned and start compounding.',
    stats: '40-50%',
    statsSubtext: 'of traffic from Reddit for our creators (industry average: 5-10%)',
    caseStudy: {
      title: 'Case Study: Ban Cycle → Traffic Machine',
      problem: 'Creator banned 6 times in 4 months. Gave up on Reddit entirely. Only using IG (dying reach).',
      whatWeFound: 'She was posting in high-risk subs, using flagged titles, and had no karma strategy. Every mistake in the book.',
      whatWeFixed: [
        'Built proper account structure (multi-account safety net)',
        'Matched her to 47 low-risk, high-engagement subs from our database',
        'Implemented our karma-building system',
        'Created Reddit-specific content calendar',
      ],
      result: '6 months, zero bans. Reddit now drives 45% of her traffic. Income up from $4K to $13K/month.',
    },
  },
  
  whyDifferent: {
    headline: 'We Don\'t Just "Know Reddit" — We\'ve Systematized It',
    subheadline: 'Most agencies avoid Reddit. We\'ve mastered it.',
    competitors: [
      {
        type: 'agency',
        title: 'Most Agencies',
        points: [
          'Avoid Reddit because it\'s "too risky"',
          'No subreddit research or database',
          'No ban prevention strategy',
          'Leave the highest-converting platform on the table',
          'You\'re stuck figuring it out yourself',
        ],
        isPositive: false,
      },
      {
        type: 'kora',
        title: 'Kora',
        points: [
          'Reddit is our specialty (40-50% of client traffic)',
          '15,000+ subreddit database with full analytics',
          'Ban prevention built into every strategy',
          'Done-for-you management so you don\'t touch it',
          'Sustainable systems, not random posting',
        ],
        isPositive: true,
      },
    ],
    coreDifference: 'We don\'t just help you use Reddit. We make it your most reliable traffic source.',
  },
  
  guarantee: {
    badge: '💎 OUR GUARANTEE 💎',
    headline: 'Add $10K/Month to Your OnlyFans — Guaranteed.',
    subheadline: 'If you don\'t, we\'ll manage your account for FREE until you hit it.',
    intro: 'We don\'t work with everyone. We need creators ready to trust the system and let us run Reddit properly.',
    qualificationIntro: 'We need to know you\'re:',
    qualifications: [
      { title: 'Committed', description: 'Ready to let us handle Reddit the right way (not your old approach).' },
      { title: 'Patient', description: 'Sustainable Reddit takes 30-60 days to ramp. No shortcuts.' },
      { title: 'Active', description: 'Creating content we can post. We handle distribution, you handle creation.' },
    ],
    closing: 'If that\'s you, we guarantee results. No more ban cycles. No more leaving money on the table.',
    cta: 'APPLY NOW — SEE IF YOU QUALIFY',
  },
  
  form: {
    headline: 'Ready to Make Reddit Work?',
    subheadline: 'No credit card. No commitment. Just a conversation about fixing your Reddit strategy.',
    webhookUrl: undefined,
    successMessage: 'Thanks! We\'ll review your application and reach out within 24 hours.',
    fields: {
      challengeEnabled: true,
      challengeLabel: 'What\'s your Reddit situation right now?',
      challengePlaceholder: 'Getting banned, don\'t know where to post, no traffic, never tried it?',
    },
    trustBadges: [
      '🔒 100% Confidential — We never share your info',
      '⚡ Response within 24 hours',
      '💬 No sales pressure — Just a real conversation',
    ],
    submitText: 'SUBMIT APPLICATION →',
  },
  
  footer: {
    brandName: 'Kora',
    tagline: 'Turn Reddit from your biggest headache into your biggest traffic source.',
    disclaimer: 'Results vary. Growth depends on following our systems and showing up to do the work.',
  },
},
'8': {
  slug: '8',
  name: 'Avatar 8 - No Niche / Forced Niche',
  
  headlineVariants: {
    a: {
      headline: 'Your Agency Made You a "Fitness Girl" and You Haven\'t Been to the Gym in 6 Months.',
      subheadline: 'No wonder you dread posting. There\'s a better way.',
    },
    b: {
      headline: 'Your Agency Picked Your Niche. You Hate Creating. Your Fans Can Tell.',
      subheadline: 'The positioning strategy that lets you build a brand around who you actually are.',
    },
    c: {
      headline: 'Cooking Videos When You Can\'t Cook. Gamer Girl When You Don\'t Game. Sound Familiar?',
      subheadline: 'Your agency shoved you into a niche. Here\'s how to escape.',
    },
  },
  
  meta: {
    title: 'You Don\'t Need a Niche. You Need Positioning. | Kora',
    description: 'Stuck in a niche that isn\'t you? Dreading content? The positioning strategy for creators who don\'t fit a box.',
    keywords: 'creator niche, onlyfans niche, creator positioning, creator branding',
  },
  
  hero: {
    badge: '🎭 FOR CREATORS STUCK IN THE WRONG NICHE',
    headline: 'Your Agency Made You a "Fitness Girl" and You Haven\'t Been to the Gym in 6 Months.',
    subheadline: 'No wonder you dread posting. There\'s a better way.',
    guaranteeText: 'If you don\'t hit your growth target, we\'ll manage your account for FREE',
    guaranteeSubtext: '',
    videoText: 'Watch: Why "find your niche" is bad advice',
    videoNote: '🔊 Sound on',
    cta: 'SEE IF YOU QUALIFY',
  },
  
  problem: {
    headline: 'The Niche Trap',
    intro: [
      'Your agency couldn\'t figure out how to market you.',
      'So they did what lazy agencies do:',
      'They shoved you into a random niche and called it "strategy."',
    ],
    painPoints: [
      'Made you a "fitness girl" when you haven\'t seen a gym in months',
      'Told you to do cooking content when you burn toast',
      'Pushed "gamer girl" when you don\'t even own a console',
      'Forced foot content when you hate feet',
      'Now you dread every single shoot',
      'Your fans can tell it\'s forced — engagement is dropping',
      'You feel like you\'re playing a character instead of being yourself',
    ],
    truthHeadline: 'Here\'s What Your Agency Got Wrong:',
    truthPoints: [
      'A niche is something you ARE. Fitness, cosplay, gamer — you either have it or you fake it.',
      'Positioning is something you BUILD. Around who you actually are.',
      'They gave you a niche because they didn\'t know how to position you. That\'s lazy.',
    ],
    businessModelStatement: 'The most successful creators aren\'t "niched." They\'re positioned. There\'s a $10K/month difference.',
    closingPoints: [
      'Pretending to love something you don\'t is exhausting.',
      'Your audience can feel when it\'s forced.',
      'You don\'t need to become someone you\'re not.',
      'You need a strategy that makes YOU the brand.',
    ],
    cta: 'SHOW ME THE ALTERNATIVE',
  },
  
  solution: {
    headline: 'At Kora, We Build Positioning — Not Fake Niches',
    intro: 'Here\'s the difference:',
    bottlenecks: [
      { problem: 'Don\'t have a "niche"?', description: 'You don\'t need one. We build positioning around your actual personality, energy, and vibe.' },
      { problem: 'Stuck in a niche you hate?', description: 'We help you transition out without starting over. Your fans follow YOU, not your "niche."' },
      { problem: 'Feel generic?', description: 'Positioning isn\'t about being unique. It\'s about being specific. "Girl next door" is a position. So is "your secret."' },
      { problem: 'Agency doesn\'t get it?', description: 'Most agencies take the lazy route. We do the actual work of figuring out what makes you connect.' },
    ],
    closingStatement: 'The girl next door? That\'s a position. The one who feels like your secret? Position. Relatable, real, unfiltered? Position. None of these require a hobby or a costume.',
    comparisonTable: [
      { before: 'Pretending to love fitness', after: 'Building a brand around who you actually are' },
      { before: 'Dreading every shoot', after: 'Content that feels natural' },
      { before: 'Fans sensing something\'s off', after: 'Authentic connection that converts' },
      { before: 'Playing a character', after: 'Being yourself (strategically)' },
      { before: 'Copying what works for others', after: 'Positioning that\'s uniquely yours' },
    ],
  },
  
  whatYouGet: {
    headline: 'Everything You Need — Without Faking a Personality',
    subheadline: 'Build a brand around who you actually are.',
    services: [
      {
        title: 'Positioning Strategy',
        description: 'We figure out what makes you connect — your energy, your vibe, your story. Not some random niche you have to pretend to love.',
      },
      {
        title: 'Brand Architecture',
        description: 'How to present yourself across platforms in a way that feels authentic AND converts. No costume required.',
      },
      {
        title: 'Content Strategy',
        description: 'What to post, how to post it, and why — all based on YOUR positioning. Not recycled "fitness girl" templates.',
      },
      {
        title: 'Niche Transition Plan',
        description: 'If you\'re stuck in the wrong niche, we help you pivot without losing your audience. Your fans follow you, not your gimmick.',
      },
      {
        title: 'Multi-Platform Traffic',
        description: 'Reddit, Twitter, IG, TikTok — each optimized for your positioning. Not generic strategies that ignore who you are.',
      },
      {
        title: '1-on-1 Positioning Partner',
        description: 'Your dedicated partner who actually takes time to understand you. Not a group chat where you\'re just another account.',
      },
    ],
    cta: 'I WANT THIS',
  },
  
  socialProof: {
    headline: 'Creators Are Escaping the Niche Trap',
    subheadline: 'What happens when you stop pretending and start positioning.',
    statsPrimary: 'How we scaled a creator from $0 to $450k/month in 4 months',
    statsSecondary: 'Simply by positioning her correctly',
    stats: '$8K-15K',
    statsSubtext: '',
    caseStudy: {
      title: 'Case Study: $0 → $450K/Month in 4 Months',
      problem: 'Creator spending hours every day scrolling other creators\' pages, trying to find trends to copy. Waking up stressed, no idea what to post. Every piece of content felt like a knockoff of someone else\'s.',
      whatWeFound: 'She had no positioning. No brand identity. Just a feed full of recycled ideas that looked like everyone else\'s. She was chasing trends instead of creating them — and her audience could feel it.',
      whatWeFixed: [
        'Built positioning around who she actually is',
        'Created a brand identity that made content ideas obvious',
        'Stopped the trend-chasing cycle entirely',
        'Unique content now flows naturally as an extension of her brand',
      ],
      result: '$0 to $450K/month in 4 months. No more scrolling for ideas. No more copying. She wakes up knowing exactly what to create — because it\'s just her.',
      image: 'earnings.png'
    },
  },
  whyDifferent: {
    headline: 'Not Another Agency That\'ll Shove You in a Box',
    subheadline: 'Here\'s what makes Kora different:',
    competitors: [
      {
        type: 'agency',
        title: 'Most Agencies',
        points: [
          'First question: "What\'s your niche?"',
          'Can\'t market you? They\'ll assign a niche anyway',
          'Cookie-cutter strategies that ignore who you are',
          'You end up pretending to be someone you\'re not',
          'Dreading content becomes normal',
        ],
        isPositive: false,
      },
      {
        type: 'kora',
        title: 'Kora',
        points: [
          'First question: "What makes fans connect to you?"',
          'We do the work to figure out your positioning',
          'Strategy built around your actual personality',
          'Content you don\'t dread creating',
          'Authentic brand that actually converts',
        ],
        isPositive: true,
      },
    ],
    coreDifference: 'We don\'t ask "what\'s your niche?" We ask "what makes you, you?" Then we build from there.',
  },
  
  guarantee: {
    badge: '💎 OUR GUARANTEE 💎',
    headline: 'Add $10K/Month to Your OnlyFans — Guaranteed.',
    subheadline: 'If you don\'t, we\'ll manage your account for FREE until you hit it.',
    intro: 'We don\'t work with everyone who applies. We need creators who are ready to be themselves — not play a character.',
    qualificationIntro: 'We need to know you\'re:',
    qualifications: [
      { title: 'Done Pretending', description: 'Ready to build a brand around who you actually are, not who an agency told you to be.' },
      { title: 'Coachable', description: 'Willing to try new positioning even if it feels vulnerable at first.' },
      { title: 'Committed', description: 'We handle strategy and execution, but you still need to create content.' },
    ],
    closing: 'If that\'s you, we guarantee results. No more pretending. No more dreading content.',
    cta: 'APPLY NOW — SEE IF YOU QUALIFY',
  },
  
  form: {
    headline: 'Ready to Build a Real Brand?',
    subheadline: 'No credit card. No judgment. Just a conversation about who you actually are.',
    webhookUrl: undefined,
    successMessage: 'Thanks! We\'ll review your application and reach out within 24 hours.',
    fields: {
      challengeEnabled: true,
      challengeLabel: 'What\'s your situation right now?',
      challengePlaceholder: 'Stuck in wrong niche, don\'t have a niche, dreading content, something else?',
    },
    trustBadges: [
      '🔒 100% Confidential — We never share your info',
      '⚡ Response within 24 hours',
      '💬 No sales pressure — Just a real conversation',
    ],
    submitText: 'SUBMIT APPLICATION →',
  },
  
  footer: {
    brandName: 'Kora',
    tagline: 'You don\'t need a niche. You need positioning.',
    disclaimer: 'Results vary. Growth depends on following our systems and showing up to do the work.',
  },
},
  // Legacy avatars (keeping for backwards compatibility)
  'avatar1southafrica': {
    slug: 'avatar1southafrica',
    name: 'South Africa Creators',
    region: 'South Africa',
    meta: {
      title: 'Add R900K+ to Your Creator Business in 90 Days - Guaranteed | South Africa',
      description: 'Join South African creators who\'ve scaled their business. Get our proven system.',
    },
  },
  
  'avatar2uk': {
    slug: 'avatar2uk',
    name: 'UK Creators',
    region: 'United Kingdom',
    meta: {
      title: 'Add £40K+ to Your Creator Business in 90 Days - Guaranteed | UK',
      description: 'Join UK creators who\'ve scaled their business with our proven system.',
    },
  },
  
  'avatar3us': {
    slug: 'avatar3us',
    name: 'US Creators',
    region: 'United States',
    meta: {
      title: 'Add $50K+ to Your Creator Business in 90 Days - Guaranteed | USA',
      description: 'Join American creators who\'ve scaled their business with our proven system.',
    },
  },
};

// ============================================
// HELPER FUNCTIONS
// ============================================

// Parse avatar slug and variant from URL (e.g., "2a" -> { avatar: "2", variant: "a" })
export function parseAvatarSlug(slug: string): { avatarId: string; variant?: 'a' | 'b' | 'c' } {
  // Check if slug ends with a variant letter (a, b, or c)
  const match = slug.match(/^(.+?)([abc])$/);
  if (match) {
    const [, avatarId, variant] = match;
    // Only parse as variant if the base avatar exists
    if (avatars[avatarId]) {
      return { avatarId, variant: variant as 'a' | 'b' | 'c' };
    }
  }
  return { avatarId: slug };
}

// Helper to get full config (merges with defaults)
export function getAvatarConfig(slug: string, variant?: 'a' | 'b' | 'c'): AvatarConfig {
  const avatar = avatars[slug];
  if (!avatar) {
    return defaultAvatarConfig;
  }
  
  // Deep merge with defaults
  const config: AvatarConfig = {
    ...defaultAvatarConfig,
    ...avatar,
    meta: { ...defaultAvatarConfig.meta, ...avatar.meta },
    hero: { ...defaultAvatarConfig.hero, ...avatar.hero },
    problem: { ...defaultAvatarConfig.problem, ...avatar.problem },
    solution: { ...defaultAvatarConfig.solution, ...avatar.solution },
    whatYouGet: { ...defaultAvatarConfig.whatYouGet, ...avatar.whatYouGet },
    socialProof: { ...defaultAvatarConfig.socialProof, ...avatar.socialProof },
    whyDifferent: { ...defaultAvatarConfig.whyDifferent, ...avatar.whyDifferent },
    guarantee: { ...defaultAvatarConfig.guarantee, ...avatar.guarantee },
    form: { ...defaultAvatarConfig.form, ...avatar.form },
    footer: { ...defaultAvatarConfig.footer, ...avatar.footer },
    tracking: { ...defaultAvatarConfig.tracking, ...avatar.tracking },
  };
  
  // Apply variant headline if specified
  if (variant && avatar.headlineVariants?.[variant]) {
    config.hero.headline = avatar.headlineVariants[variant].headline;
    config.hero.subheadline = avatar.headlineVariants[variant].subheadline;
    config.variant = variant;
  }
  
  return config;
}

// Get all avatar slugs for static generation (includes variants)
export function getAllAvatarSlugs(): string[] {
  const slugs: string[] = [];
  
  Object.entries(avatars).forEach(([slug, avatar]) => {
    slugs.push(slug);
    // Add variant slugs if avatar has variants
    if (avatar.headlineVariants) {
      slugs.push(`${slug}a`, `${slug}b`, `${slug}c`);
    }
  });
  
  // Add lead magnet slugs with lm- prefix
  Object.entries(leadMagnets).forEach(([slug, lm]) => {
    slugs.push(`lm-${slug}`);
    // Add variant slugs if lead magnet has variants
    if (lm.headlineVariants) {
      slugs.push(`lm-${slug}a`, `lm-${slug}b`, `lm-${slug}c`);
    }
  });
  
  return slugs;
}

// ============================================
// LEAD MAGNET HELPER FUNCTIONS
// ============================================

// Check if a slug is for a lead magnet page (starts with "lm-")
export function isLeadMagnetSlug(slug: string): boolean {
  return slug.startsWith('lm-');
}

// Parse lead magnet slug and variant from URL (e.g., "lm-playbook" or "lm-playbooka")
export function parseLeadMagnetSlug(slug: string): { leadMagnetId: string; variant?: 'a' | 'b' | 'c' } | null {
  // Must start with lm-
  if (!slug.startsWith('lm-')) {
    return null;
  }
  
  // Remove the lm- prefix
  const remainder = slug.slice(3);
  
  // Check if it ends with a variant letter (a, b, or c)
  const match = remainder.match(/^(.+?)([abc])$/);
  if (match) {
    const [, leadMagnetId, variant] = match;
    // Only parse as variant if the base lead magnet exists
    if (leadMagnets[leadMagnetId]) {
      return { leadMagnetId, variant: variant as 'a' | 'b' | 'c' };
    }
  }
  
  return { leadMagnetId: remainder };
}

// Helper to get full lead magnet config (merges with defaults)
export function getLeadMagnetConfig(slug: string, variant?: 'a' | 'b' | 'c'): LeadMagnetConfig | null {
  const lm = leadMagnets[slug];
  if (!lm) {
    return null;
  }
  
  // Deep merge with defaults
  const config: LeadMagnetConfig = {
    ...defaultLeadMagnetConfig,
    ...lm,
    meta: { ...defaultLeadMagnetConfig.meta, ...lm.meta },
    hero: { ...defaultLeadMagnetConfig.hero, ...lm.hero },
    form: { 
      ...defaultLeadMagnetConfig.form, 
      ...lm.form,
      fields: lm.form?.fields || defaultLeadMagnetConfig.form.fields,
    },
    whatYouGet: { 
      ...defaultLeadMagnetConfig.whatYouGet, 
      ...lm.whatYouGet,
      items: lm.whatYouGet?.items || defaultLeadMagnetConfig.whatYouGet.items,
    },
    footer: { ...defaultLeadMagnetConfig.footer, ...lm.footer },
    tracking: { ...defaultLeadMagnetConfig.tracking, ...lm.tracking },
  };
  
  // Apply variant headline if specified
  if (variant && lm.headlineVariants?.[variant]) {
    config.hero.headline = lm.headlineVariants[variant].headline;
    config.hero.subheadline = lm.headlineVariants[variant].subheadline;
    config.variant = variant;
  }
  
  return config;
}

// Get all lead magnet slugs for static generation (includes variants)
export function getAllLeadMagnetSlugs(): string[] {
  const slugs: string[] = [];
  
  Object.entries(leadMagnets).forEach(([slug, lm]) => {
    slugs.push(`lm-${slug}`);
    // Add variant slugs if lead magnet has variants
    if (lm.headlineVariants) {
      slugs.push(`lm-${slug}a`, `lm-${slug}b`, `lm-${slug}c`);
    }
  });
  
  return slugs;
}

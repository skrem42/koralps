// ============================================
// SITE CONFIGURATION
// ============================================

export const siteConfig = {
  name: 'Kora',
  domain: 'koracreators.net',
  defaultLocale: 'en',
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
    videoText: string;
    videoNote: string;
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
    stats: string;
    statsSubtext: string;
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
    stats: '$8K-15K',
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
  '2': {
    slug: '2',
    name: 'Avatar 2 - Revamped VSL',
    
    // Split test headline variants
    headlineVariants: {
      a: {
        headline: 'Add $10K/Month to Your Creator Business — Guaranteed.',
        subheadline: 'If you don\'t hit your growth target, we\'ll manage your account for FREE until you do.',
      },
      b: {
        headline: 'You Don\'t Have a Content Problem. You Have a Business Problem.',
        subheadline: 'The system that\'s turning stuck creators into $20K+ months.',
      },
      c: {
        headline: 'The System That\'s Scaling Creators to $20K+ Months',
        subheadline: 'Stop posting and hoping. Start building a real business.',
      },
    },
    
    meta: {
      title: 'Add $10K/Month to Your Creator Business — Guaranteed | Kora',
      description: 'The system that\'s scaling creators to $20K+ months. Get your dedicated growth partner.',
      keywords: 'creator growth, creator business, scale creator income',
    },
    
    hero: {
      badge: '💎 GUARANTEE FOR QUALIFIED CREATORS 💎',
      // Default to variant B
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
      stats: '$8K-15K',
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
  
  return slugs;
}

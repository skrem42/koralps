import { Metadata } from 'next';
import {
  AgencyHero,
  ProofBanner,
  CaseStudyFeature,
  ComparisonSection,
  ServicesGrid,
  CreatorApplication,
  AgencyNavbar,
  AgencyFooter,
} from '@/components/agency';
import { OrganizationSchema, WebSiteSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "Kora | South Africa's #1 Creator Management Agency",
  description:
    "The agency behind SA's top creators. In-person content direction in Cape Town & Johannesburg, brilliant organic strategy, and the fastest deployment in the game. We scaled Lauren from R18K to R9M/month.",
  keywords:
    "creator management south africa, onlyfans agency sa, cape town creator agency, johannesburg creator management, influencer agency south africa, kora",
  openGraph: {
    title: "Kora | South Africa's #1 Creator Management Agency",
    description:
      "We don't just manage accounts. We build influencers. In-person content direction in SA, brilliant strategy, and results like R18K to R9M/month.",
    type: 'website',
    siteName: 'Kora',
    locale: 'en_ZA',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kora Creator Agency South Africa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kora | SA's #1 Creator Agency",
    description:
      'In-person content direction in South Africa. Brilliant strategy. Results like R18K to R9M/month.',
    images: ['/og-image.png'],
  },
  alternates: {
    languages: {
      'en-ZA': 'https://koracreators.net/za',
      'x-default': 'https://koracreators.net',
    },
    canonical: 'https://koracreators.net/za',
  },
};

export default function ZAHomePage() {
  return (
    <main className="bg-black min-h-screen">
      <OrganizationSchema />
      <WebSiteSchema />
      <AgencyNavbar />

      <AgencyHero
        headline="South Africa's #1 Creator Management Agency"
        subheadline="We don't just manage accounts. We build influencers. In-person content direction in Cape Town & Joburg, brilliant strategy, and the fastest deployment in the game."
        caseStudyResult="R18K → R9M/month"
        caseStudyName="Lauren"
      />

      <ProofBanner
        stats={[
          { value: 'R50M+', label: 'Creator Revenue Generated in 2025' },
          { value: '#1', label: 'Agency in South Africa' },
        ]}
      />

      <CaseStudyFeature
        name="Lauren"
        beforeRevenue="Under R18K/month"
        afterRevenue="R9M/month"
        timeframe="2025"
        story={[
          'Lauren came to us as a SA creator stuck under R18K/month. She had potential, but no system. No direction. No strategy.',
          "We didn't just manage her account—we transformed her entire approach. In-person shoots in our SA studio. Direct content direction. Brilliant positioning that resonated with US audiences.",
          'Within months, Lauren became one of the highest-earning creators in the industry. Not by accident. By design.',
        ]}
        highlights={[
          'Complete brand repositioning & identity',
          'In-person content direction at our SA studios',
          'US audience targeting from South Africa',
          'Full account & chat management',
          'Organic growth strategy across all platforms',
        ]}
        images={[
          { src: '/3.png', label: 'Earnings Growth' },
          { src: '/1.png', label: 'Reach Growth' },
        ]}
        autoPlay={5000}
      />

      <ComparisonSection
        headline="Why SA Creators Choose Us Over Overseas Agencies"
        subheadline="There's a reason we're SA's biggest agency. We don't do what everyone else does."
        comparisons={[
          {
            title: 'Overseas Agencies',
            points: [
              'Remote coaching via video calls',
              "Can't direct your content in person",
              'Timezone nightmares (6-12 hour delays)',
              "Generic strategies that don't fit SA creators",
              'Weeks to implement changes',
            ],
            isPositive: false,
          },
          {
            title: 'Local "Coaches"',
            points: [
              "Never actually scaled creators themselves",
              'Recycled advice from US gurus',
              'No real systems, just motivation',
              "Can't help with traffic or execution",
              'No understanding of US audience targeting',
            ],
            isPositive: false,
          },
          {
            title: 'Kora (SA-Based)',
            points: [
              'In-person shoots in Cape Town & Joburg',
              'Same timezone, instant communication',
              'Brilliant strategy tailored for SA creators',
              'Build you into an influencer, not just a creator',
              'Deploy content faster than anyone',
            ],
            isPositive: true,
          },
        ]}
      />

      <ServicesGrid
        headline="What We Do For SA Creators"
        subheadline="Full-service creator management with one key difference: we're actually here. On the ground. In South Africa."
        services={[
          {
            icon: '🎬',
            title: 'In-Person Content Direction',
            description:
              "We don't coach from a screen overseas. We're in the studio with you in Cape Town or Joburg, directing every shot, every angle, every piece of content.",
            highlights: [
              'Professional shoots in SA',
              'Real-time direction',
              'Cape Town & Joburg studios',
            ],
          },
          {
            icon: '🚀',
            title: 'Organic Growth Strategy',
            description:
              'Brilliant strategy, not average tactics. We build traffic engines across Reddit, Twitter, TikTok, and IG that actually convert.',
            highlights: [
              'Multi-platform traffic',
              'US audience targeting from SA',
              'Data-driven approach',
            ],
          },
          {
            icon: '⭐',
            title: 'Influencer Building',
            description:
              "We don't just manage accounts—we build influencers. Real positioning, real brand, real audience that follows YOU.",
            highlights: [
              'Brand positioning',
              'Creator-to-influencer pipeline',
              'Long-term brand equity',
            ],
          },
          {
            icon: '💬',
            title: 'Full Account Management',
            description:
              'Chat team, content scheduling, fan engagement—all handled. You focus on creating, we handle everything else.',
            highlights: [
              '24/7 chat management',
              'Revenue optimization',
              'Complete backend',
            ],
          },
          {
            icon: '⚡',
            title: 'Same Timezone Advantage',
            description:
              "No more waiting 12 hours for a response. We're in the same timezone as you. Changes happen in hours, not days.",
            highlights: [
              'Fast turnaround',
              'No timezone delays',
              'Instant communication',
            ],
          },
          {
            icon: '🎯',
            title: 'US Audience Targeting',
            description:
              'SA creators targeting the highest-spending audience in the world. We know what converts with American buyers.',
            highlights: [
              'US market expertise',
              'USD pricing psychology',
              'Cultural positioning',
            ],
          },
        ]}
      />

      <CreatorApplication
        headline="Ready to Scale From South Africa?"
        subheadline="We're selective about who we work with. If you're a serious SA creator ready for growth, apply below."
      />

      <AgencyFooter />
    </main>
  );
}




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

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <AgencyNavbar />
      
      <AgencyHero
        headline="The Agency Behind SA's Top Creators"
        subheadline="We don't just manage accounts. We build influencers. In-person content direction, brilliant strategy, and the fastest deployment in the game."
        caseStudyResult="$1K → $500K/month"
        caseStudyName="Lauren"
      />
      
      <ProofBanner
        stats={[
          { value: 'R50M+', label: 'Creator Revenue Generated in 2025' },
          { value: '#1', label: 'Agency in South Africa' },
          //{ value: '50+', label: 'Creators Managed' },
          //{ value: '500x', label: 'Lauren\'s Growth' },
        ]}
      />
      
      <CaseStudyFeature
        name="Lauren"
        beforeRevenue="Under $1K/month"
        afterRevenue="$500K/month"
        timeframe="2025"
        story={[
          "Lauren came to us as a SA creator stuck under $1K/month. She had potential, but no system. No direction. No strategy.",
          "We didn't just manage her account—we transformed her entire approach. In-person shoots. Direct content direction. Brilliant positioning that resonated with US audiences.",
          "Within months, Lauren became one of the highest-earning creators in the industry. Not by accident. By design.",
        ]}
        highlights={[
          'Complete brand repositioning & identity',
          'In-person content direction & professional shoots',
          'US audience targeting from South Africa',
          'Full account & chat management',
          'Organic growth strategy across all platforms',
        ]}
        images={[
          { src: '/3.png', label: 'Earnings Growth' },
          { src: '/1.png', label: 'Reach Growth' },
          // Add more images here:
          // { src: '/reach.png', label: 'Social Reach' },
          // { src: '/fans.png', label: 'Fan Growth' },
          // { src: '/engagement.png', label: 'Engagement Stats' },
        ]}
        autoPlay={5000}
      />
      
      <ComparisonSection
        headline="Average Strategy vs. Brilliant Strategy"
        subheadline="There's a reason we're SA's biggest agency. We don't do what everyone else does."
        comparisons={[
          {
            title: 'Overseas Agencies',
            points: [
              'Remote coaching via video calls',
              "Can't direct your content in person",
              'Timezone delays on everything',
              "Generic strategies that don't fit SA creators",
              'Weeks to implement changes',
            ],
            isPositive: false,
          },
          {
            title: 'Average Strategy',
            points: [
              '"Post 3x a day and hope"',
              "Copy what's trending",
              'No brand positioning',
              'Treat every creator the same',
              'Focus on quantity over quality',
            ],
            isPositive: false,
          },
          {
            title: 'Kora',
            points: [
              'In-person shoots & content direction',
              'Same timezone, instant communication',
              'Brilliant strategy tailored to YOU',
              'Build you into an influencer, not just a creator',
              'Deploy content faster than anyone',
            ],
            isPositive: true,
          },
        ]}
      />
      
      <ServicesGrid
        headline="What We Do"
        subheadline="Full-service creator management with one key difference: we're actually here."
        services={[
          {
            icon: '🎬',
            title: 'In-Person Content Direction',
            description: "We don't coach from a screen. We're in the studio with you, directing every shot, every angle, every piece of content.",
            highlights: ['Professional shoots', 'Real-time direction', 'SA-based studio access'],
          },
          {
            icon: '🚀',
            title: 'Organic Growth Strategy',
            description: 'Brilliant strategy, not average tactics. We build traffic engines across Reddit, Twitter, TikTok, and IG that actually convert.',
            highlights: ['Multi-platform traffic', 'US audience targeting', 'Data-driven approach'],
          },
          {
            icon: '⭐',
            title: 'Influencer Building',
            description: "We don't just manage accounts—we build influencers. Real positioning, real brand, real audience that follows YOU.",
            highlights: ['Brand positioning', 'Creator-to-influencer pipeline', 'Long-term brand equity'],
          },
          {
            icon: '💬',
            title: 'Full Account Management',
            description: 'Chat team, content scheduling, fan engagement—all handled. You focus on creating, we handle everything else.',
            highlights: ['24/7 chat management', 'Revenue optimization', 'Complete backend'],
          },
          {
            icon: '⚡',
            title: 'Rapid Deployment',
            description: 'Same timezone. In-person access. We implement changes in days, not weeks. Speed is our competitive advantage.',
            highlights: ['Fast turnaround', 'No timezone delays', 'Instant communication'],
          },
          {
            icon: '🎯',
            title: 'US Audience Targeting',
            description: 'SA creators targeting the highest-spending audience in the world. We know what converts with American buyers.',
            highlights: ['US market expertise', 'Pricing psychology', 'Cultural positioning'],
          },
        ]}
      />
      
      <CreatorApplication
        headline="Ready to Scale?"
        subheadline="We're selective about who we work with. If you're serious about growth, apply below."
      />
      
      <AgencyFooter />
    </main>
  );
}

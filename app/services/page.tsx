import { Metadata } from 'next';
import { AgencyNavbar, AgencyFooter } from '@/components/agency';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services | Kora - Creator Management Agency',
  description: 'Full-service creator management: in-person content direction, organic growth strategy, influencer building, and complete account management.',
};

const services = [
  {
    icon: '🎬',
    title: 'In-Person Content Direction',
    description: 'This is our biggest differentiator. We don\'t coach from a screen thousands of miles away.',
    details: [
      'Professional studio shoots in South Africa',
      'Real-time creative direction—every angle, every shot',
      'Content that stands out because it\'s directed, not DIY',
      'Same-day feedback and iteration',
      'No timezone delays, no miscommunication',
    ],
    highlight: 'This is how Lauren went from amateur content to professional-grade in weeks.',
  },
  {
    icon: '🚀',
    title: 'Organic Growth Strategy',
    description: 'We don\'t just tell you to "post more." We build complete traffic systems across every platform that matters.',
    details: [
      'Reddit strategy: ban-proof, sustainable traffic',
      'Twitter/X growth and engagement systems',
      'TikTok content that converts (not just views)',
      'Instagram optimization for the algorithm',
      'Multi-platform content repurposing',
    ],
    highlight: 'Organic traffic converts 3-5x better than paid. We maximize it.',
  },
  {
    icon: '⭐',
    title: 'Influencer Building',
    description: 'We don\'t just manage accounts. We build influencers with real brand equity.',
    details: [
      'Complete brand positioning strategy',
      'Visual identity and aesthetic direction',
      'Persona development that resonates',
      'Audience-building beyond just subscribers',
      'Long-term brand value, not just short-term revenue',
    ],
    highlight: 'Influencers command higher prices and have sustainable careers.',
  },
  {
    icon: '💬',
    title: 'Full Account Management',
    description: 'Everything that isn\'t content creation—we handle it.',
    details: [
      '24/7 chat team trained on your voice',
      'Message management and fan engagement',
      'Content scheduling and optimization',
      'Revenue tracking and analytics',
      'PPV strategy and pricing optimization',
    ],
    highlight: 'You create. We handle everything else.',
  },
  {
    icon: '🎯',
    title: 'US Audience Targeting',
    description: 'SA creators accessing the highest-spending market in the world.',
    details: [
      'Content timing optimized for US timezones',
      'Pricing psychology for American buyers',
      'Cultural positioning that resonates',
      'Platform strategy for US-dominated spaces',
      'Native English chat team',
    ],
    highlight: 'US fans spend 3-5x more. We help you reach them.',
  },
  {
    icon: '⚡',
    title: 'Rapid Deployment',
    description: 'Speed is our competitive advantage. Being local means we move fast.',
    details: [
      'Strategy changes implemented in days, not weeks',
      'Real-time communication (same timezone)',
      'In-person meetings when needed',
      'Fast iteration based on what\'s working',
      'No overseas delays or miscommunication',
    ],
    highlight: 'In this game, speed compounds. We move faster than anyone.',
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-black min-h-screen">
      <AgencyNavbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Our Services
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            Everything You Need to Scale
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Full-service creator management with one key difference: we're actually here. In-person. On the ground. Building with you.
          </p>
        </div>
      </section>
      
      {/* Services list */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-amber-500/30 transition-colors"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left side */}
                  <div className="lg:w-1/3">
                    <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-3xl">{service.icon}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h2>
                    <p className="text-gray-400">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Right side */}
                  <div className="lg:w-2/3">
                    <ul className="space-y-3 mb-6">
                      {service.details.map((detail, dIndex) => (
                        <li key={dIndex} className="flex items-start gap-3">
                          <span className="text-amber-400 mt-1">✓</span>
                          <span className="text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                      <p className="text-amber-400 text-sm font-medium">
                        💡 {service.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process section */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              How We Work
            </h2>
            <p className="text-gray-400 text-lg">
              A proven process that's scaled creators from $1K to $500K/month
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Apply', description: 'Tell us about yourself and your goals. We\'re selective.' },
              { step: '02', title: 'Strategy', description: 'We analyze your current position and build a custom plan.' },
              { step: '03', title: 'Execute', description: 'In-person shoots, content direction, full deployment.' },
              { step: '04', title: 'Scale', description: 'Optimize, iterate, and compound your growth.' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-amber-500 text-black font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Apply to work with South Africa's leading creator agency.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-xl transition-all hover:scale-105"
          >
            Apply Now
          </Link>
        </div>
      </section>
      
      <AgencyFooter />
    </main>
  );
}






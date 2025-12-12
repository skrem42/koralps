import { Metadata } from 'next';
import { AgencyNavbar, AgencyFooter, CreatorApplication } from '@/components/agency';

export const metadata: Metadata = {
  title: 'Apply | Kora - Creator Management Agency',
  description: 'Apply to work with South Africa\'s leading creator management agency. We\'re selective, but the results speak for themselves.',
};

export default function ApplyPage() {
  return (
    <main className="bg-black min-h-screen">
      <AgencyNavbar />
      
      {/* Hero */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Work With Us
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            Apply to Join Kora
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We don't work with everyone. We're selective because that's how we deliver results like Lauren's $500K/month transformation.
          </p>
        </div>
      </section>
      
      {/* What we look for */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Who We Work With
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-amber-400">✓</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Serious Creators</h3>
                <p className="text-gray-500 text-sm">
                  You're ready to treat this like a business, not a hobby.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-amber-400">✓</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Coachable</h3>
                <p className="text-gray-500 text-sm">
                  You're willing to follow our process, even when it's different.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-amber-400">✓</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Committed</h3>
                <p className="text-gray-500 text-sm">
                  You'll show up, create content, and do the work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Application form */}
      <CreatorApplication
        headline="Your Application"
        subheadline="Fill out the form below. If you're a good fit, we'll be in touch within 48 hours."
      />
      
      {/* FAQ */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Common Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What if I'm just starting out?",
                a: "We work with creators at various stages. What matters most is your commitment and potential, not your current numbers.",
              },
              {
                q: "Do I need to be based in South Africa?",
                a: "We primarily work with SA-based creators (that's our advantage—in-person content direction). But we're open to discussing if you're willing to travel for shoots.",
              },
              {
                q: "How much does it cost?",
                a: "We discuss pricing after reviewing your application and having an initial conversation. Our model is designed so we only win when you win.",
              },
              {
                q: "How long until I see results?",
                a: "Most creators see significant movement within the first 30-90 days. Lauren's transformation happened over months, but she was seeing progress from week one.",
              },
              {
                q: "What makes you different from other agencies?",
                a: "We're local. We do in-person shoots and content direction. We move fast. And we build influencers, not just manage accounts. That's why we can achieve results like $1K to $500K/month.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <AgencyFooter />
    </main>
  );
}


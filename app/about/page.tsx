import { Metadata } from 'next';
import { AgencyNavbar, AgencyFooter } from '@/components/agency';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Kora | South Africa\'s Leading Creator Agency',
  description: 'Learn about Kora - the agency behind SA\'s top creators. In-person content direction, brilliant strategy, and the fastest deployment in the game.',
};

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen">
      <AgencyNavbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            About Kora
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            We're Not Just Another Agency
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We're South Africa's biggest creator management agency. And we got here by doing things differently.
          </p>
        </div>
      </section>
      
      {/* Story section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                Built in South Africa. For South African Creators.
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  We saw what was happening in the industry. SA creators with incredible potential, stuck working with overseas agencies who couldn't deliver.
                </p>
                <p>
                  Remote coaching. Timezone nightmares. Generic strategies that ignored the SA reality. Creators burning out trying to implement advice that didn't fit.
                </p>
                <p>
                  So we built something different. An agency that's actually <span className="text-white font-semibold">here</span>. On the ground. In the studio. Directing content in person, not over a laggy video call.
                </p>
                <p>
                  The result? We've scaled creators from nothing to hundreds of thousands per month. Not by doing what everyone else does—by doing what actually works.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/20 rounded-2xl p-8">
              <div className="text-center">
                <span className="text-6xl mb-4 block">🇿🇦</span>
                <h3 className="text-2xl font-bold text-white mb-4">The SA Advantage</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400">✓</span>
                    <span className="text-gray-300">Same timezone communication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400">✓</span>
                    <span className="text-gray-300">In-person content direction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400">✓</span>
                    <span className="text-gray-300">Local studio access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400">✓</span>
                    <span className="text-gray-300">Understand the SA creator landscape</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400">✓</span>
                    <span className="text-gray-300">Rapid deployment & iteration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Philosophy section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Our Philosophy
            </h2>
            <p className="text-gray-400 text-lg">
              The principles that drive everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Brilliant Over Average
              </h3>
              <p className="text-gray-400">
                Average strategy gets average results. We don't do "post 3x a day and hope." Every move is calculated, tested, and optimized for your specific situation.
              </p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Build Influencers, Not Just Accounts
              </h3>
              <p className="text-gray-400">
                Anyone can manage an account. We build real brands with real positioning. You become an influencer with lasting value, not just another creator in a sea of content.
              </p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Speed Is Everything
              </h3>
              <p className="text-gray-400">
                Being local means we move fast. In-person shoots. Same-day feedback. Changes implemented in days, not weeks. In this game, speed compounds.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results highlight */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-8">
            The Proof Is in the Results
          </h2>
          <div className="bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-amber-500/20 border border-amber-500/30 rounded-2xl p-8 mb-8">
            <p className="text-gray-400 mb-2">Our headline case study</p>
            <p className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300 mb-2">
              $1K → $500K/month
            </p>
            <p className="text-gray-400">Lauren, scaled in 2025</p>
          </div>
          <Link
            href="/#case-study"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold"
          >
            Read Lauren's full story →
          </Link>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            We're selective about who we work with. Apply to see if you're a fit.
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






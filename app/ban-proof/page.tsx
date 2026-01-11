'use client';

import { useEffect } from 'react';
import { trackLeadCAPI } from '@/lib/analytics-capi';

export default function BanProofPage() {
  useEffect(() => {
    // Track page view
    trackLeadCAPI({}, {
      contentName: 'Ban Proof Landing Page',
      contentCategory: 'Lead Magnet',
    });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      {/* Background pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
            <span className="text-red-400 text-sm font-medium tracking-wider uppercase">
              ⚠️ IF YOU'VE BEEN BANNED
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight uppercase tracking-tight"
              style={{ fontFamily: 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif' }}>
            Your Instagram Got Banned.<br/>
            <span className="text-amber-400">Now What?</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We get it. You're stressed. Your income just disappeared. You're scared it'll happen again.
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            The truth? <span className="text-white font-semibold">One platform = one point of failure.</span> Let us show you how to build a ban-proof brand and platform ecosystem so this never tanks your business again.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-12 px-4 bg-slate-950/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
            Sound Familiar?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "Woke up to your account disabled with no warning",
              "Lost all your followers and income overnight",
              "Don't know where to start rebuilding",
              "Terrified of putting all your eggs in one basket again",
              "Seeing other creators thriving while you're stuck",
              "No backup plan or strategy to prevent this"
            ].map((pain, index) => (
              <div key={index} className="flex items-start gap-3 bg-slate-900/50 rounded-lg p-4 border border-red-500/20">
                <div className="flex-shrink-0 w-6 h-6 text-red-400 mt-1">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-300">{pain}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-8 text-center">
            <p className="text-2xl font-bold text-white mb-3">
              Here's The Hard Truth:
            </p>
            <p className="text-xl text-gray-300">
              If your entire business lives on <span className="text-amber-400 font-semibold">one platform</span>, you're one ban away from $0/month. 
              <br className="hidden sm:block"/>
              <span className="text-white font-semibold">Every. Single. Time.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            The Solution: A Ban-Proof Ecosystem
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 text-center max-w-2xl mx-auto">
            Stop depending on one algorithm that can destroy you overnight. Build a diversified brand that can't be taken down.
          </p>

          <div className="space-y-6">
            {[
              {
                title: "Multi-Platform Strategy",
                description: "We distribute your presence across Reddit, Twitter, TikTok, and yes, Instagram. If one gets banned, you lose 25% of traffic — not 100%."
              },
              {
                title: "Ban-Proof Account Structure",
                description: "We set up your accounts the right way from day one. Proper verification, content strategy, and posting systems that keep you under the radar."
              },
              {
                title: "Platform-Specific Content Systems",
                description: "What works on IG dies on Reddit. We create content strategies for EACH platform so you're not wasting time or getting flagged."
              },
              {
                title: "Backup & Recovery Plan",
                description: "When (not if) something happens, you have a system to pivot fast. Your audience knows where to find you. Your income doesn't disappear."
              },
              {
                title: "Professional Account Management",
                description: "We handle the platforms that get creators banned (like Reddit) so you don't have to learn the hard way. Again."
              },
              {
                title: "Brand Ownership",
                description: "You own your email list, your OnlyFans, your brand. Platforms come and go. Your business stays."
              }
            ].map((item, index) => (
              <div key={index} className="bg-slate-900/50 border border-slate-700 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Calendly */}
      <section className="relative py-16 px-4 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-2 border-amber-500 rounded-2xl p-8 sm:p-12 mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 uppercase tracking-tight"
                style={{ fontFamily: 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif' }}>
              If You've Been Banned And Are Worried About Your Future...
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Book a call below and we'll see how we can fix it for you.
            </p>
            
            <div className="bg-slate-900/50 rounded-xl p-6 mb-8">
              <p className="text-lg text-gray-300 mb-4">
                <span className="text-amber-400 font-semibold">On this 30-minute call, we'll:</span>
              </p>
              <ul className="text-left max-w-2xl mx-auto space-y-3">
                {[
                  "Audit your current situation and identify your biggest vulnerabilities",
                  "Show you exactly how to rebuild on multiple platforms",
                  "Map out a ban-proof ecosystem tailored to your brand",
                  "Give you a clear action plan to get back on track"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-amber-400 font-bold">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Calendly Embed */}
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/calum-koracreative/30-minute-call-with-kora-team?hide_gdpr_banner=1&background_color=0f172a&text_color=ffffff&primary_color=f59e0b"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-sm mb-2">🔒 Your info stays private. No judgment. Just solutions.</p>
            <p className="text-gray-500 text-sm">⚡ We'll respond within 24 hours</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 bg-slate-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 font-bold text-xl mb-6 uppercase tracking-wider">
            KORA
          </p>
          <p className="text-slate-500 text-xs leading-relaxed max-w-2xl mx-auto">
            This website is NOT endorsed by Instagram, Facebook, Reddit, Twitter, or any platform. 
            Individual experiences may vary. Results depend on following our systems and your commitment to the work.
          </p>
        </div>
      </footer>

      {/* Calendly Script */}
      <script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        async
      />
    </main>
  );
}


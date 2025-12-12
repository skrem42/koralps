'use client';

import { Button } from '@heroui/react';
import Link from 'next/link';

interface AgencyHeroProps {
  headline?: string;
  subheadline?: string;
  caseStudyResult?: string;
  caseStudyName?: string;
}

export default function AgencyHero({
  headline = "The Agency Behind SA's Top Creators",
  subheadline = "We don't just manage accounts. We build influencers. In-person content direction, brilliant strategy, and the fastest deployment in the game.",
  caseStudyResult = "$1K → $500K/month",
  caseStudyName = "Lauren",
}: AgencyHeroProps) {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="flex flex-col items-center text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-8">
            <span className="text-amber-400 text-sm font-semibold tracking-wide uppercase">
              🇿🇦 South Africa's #1 Creator Agency
            </span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            {headline}
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            {subheadline}
          </p>
          
          {/* Case study highlight */}
          <div className="bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-amber-500/20 border border-amber-500/30 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto mb-10 mt-10">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
              Featured Creator: {caseStudyName}
            </p>
            <p className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              {caseStudyResult}
            </p>
            <p className="text-gray-400 mt-2">
              in 2025 with Kora
            </p>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as={Link}
              href="/apply"
              size="lg"
              className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-6 text-lg rounded-xl transition-all hover:scale-105"
            >
              Apply to Work With Us
            </Button>
            <Button
              as={Link}
              href="#case-study"
              size="lg"
              variant="bordered"
              className="border-gray-600 text-white hover:bg-white/5 font-semibold px-8 py-6 text-lg rounded-xl"
            >
              See Lauren's Story
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent" />
    </section>
  );
}


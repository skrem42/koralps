'use client';

import { Button } from '@heroui/react';
import Link from 'next/link';

interface Service {
  icon: string;
  title: string;
  description: string;
  highlights?: string[];
}

interface ServicesGridProps {
  headline?: string;
  subheadline?: string;
  services?: Service[];
}

const defaultServices: Service[] = [
  {
    icon: '🎬',
    title: 'In-Person Content Direction',
    description: 'We don\'t coach from a screen. We\'re in the studio with you, directing every shot, every angle, every piece of content.',
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
    description: 'We don\'t just manage accounts—we build influencers. Real positioning, real brand, real audience that follows YOU.',
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
];

export default function ServicesGrid({
  headline = "What We Do",
  subheadline = "Full-service creator management with one key difference: we're actually here.",
  services = defaultServices,
}: ServicesGridProps) {
  return (
    <section className="bg-gray-950 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 items-center text-center flex flex-col">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            {headline}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {subheadline}
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-amber-500/30 transition-colors group"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                <span className="text-2xl">{service.icon}</span>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              {/* Highlights */}
              {service.highlights && (
                <div className="flex flex-wrap gap-2">
                  {service.highlights.map((highlight, hIndex) => (
                    <span
                      key={hIndex}
                      className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <Button
            as={Link}
            href="/apply"
            size="lg"
            className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-6 text-lg rounded-xl transition-all hover:scale-105"
          >
            Apply to Work With Us
          </Button>
        </div>
      </div>
    </section>
  );
}



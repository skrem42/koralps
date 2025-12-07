'use client';

import { AvatarConfig } from '@/lib/config';

interface WhyItWorksProps {
  config: AvatarConfig;
  onApplyClick: () => void;
}

export default function WhyItWorks({ config, onApplyClick }: WhyItWorksProps) {
  const { whyDifferent } = config;

  return (
    <section className="py-20 sm:py-28 bg-slate-950">
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {whyDifferent.headline}
          </h2>
          <p className="text-xl text-gray-300">
            {whyDifferent.subheadline}
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {whyDifferent.competitors.map((competitor, index) => (
            <div 
              key={index}
              className={`rounded-xl p-6 border ${
                competitor.isPositive 
                  ? 'bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30' 
                  : competitor.type === 'agency'
                    ? 'bg-red-500/5 border-red-500/20'
                    : 'bg-orange-500/5 border-orange-500/20'
              }`}
            >
              <div className="text-center mb-4">
                <div className="text-3xl mb-3">
                  {competitor.isPositive ? '✓' : '❌'}
                </div>
                <h3 className="text-lg font-bold text-white">{competitor.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {competitor.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-2">
                    <span className={`mt-1 ${competitor.isPositive ? 'text-green-400' : 'text-gray-500'}`}>
                      {competitor.isPositive ? '✓' : '✗'}
                    </span>
                    <p className={`text-sm ${competitor.isPositive ? 'text-white' : 'text-gray-400'}`}>
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Core Difference */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 sm:p-10 border border-slate-700/50 text-center mb-12">
          <h3 className="text-xl font-bold text-gray-400 mb-4">The Core Difference:</h3>
          <p className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            {whyDifferent.coreDifference}
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={onApplyClick}
            className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40"
          >
            <span className="relative z-10">SEE IF YOU QUALIFY</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}

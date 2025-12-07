'use client';

import { AvatarConfig } from '@/lib/config';

interface SolutionIntroProps {
  config: AvatarConfig;
  onApplyClick: () => void;
}

export default function SolutionIntro({ config, onApplyClick }: SolutionIntroProps) {
  const { solution } = config;

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 max-w-4xl mx-auto">
            {solution.headline}
          </h2>
          <p className="text-xl text-gray-300">
            {solution.intro}
          </p>
        </div>

        {/* Bottlenecks Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {solution.bottlenecks.map((bottleneck, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <span className="text-blue-400 text-2xl">→</span>
                <div>
                  <p className="text-white font-bold text-lg mb-1">{bottleneck.problem}</p>
                  <p className="text-gray-400">{bottleneck.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="text-center mb-16">
          <p className="text-xl sm:text-2xl text-white font-semibold max-w-3xl mx-auto">
            {solution.closingStatement}
          </p>
        </div>

        {/* Before/After Comparison Table */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            What Changes:
          </h3>
          
          <div className="bg-slate-800/30 rounded-2xl overflow-hidden border border-slate-700/50">
            {/* Table Header */}
            <div className="grid grid-cols-2 bg-slate-800/80">
              <div className="px-6 py-4 border-r border-slate-700/50">
                <p className="text-red-400 font-bold text-center">Before Kora</p>
              </div>
              <div className="px-6 py-4">
                <p className="text-green-400 font-bold text-center">After Kora</p>
              </div>
            </div>
            
            {/* Table Rows */}
            {solution.comparisonTable.map((row, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-2 ${index !== solution.comparisonTable.length - 1 ? 'border-b border-slate-700/50' : ''}`}
              >
                <div className="px-6 py-4 border-r border-slate-700/50 flex items-center">
                  <span className="text-red-400 mr-3">✗</span>
                  <p className="text-gray-400">{row.before}</p>
                </div>
                <div className="px-6 py-4 flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  <p className="text-white">{row.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={onApplyClick}
            className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40"
          >
            <span className="relative z-10">YES — SHOW ME THE SYSTEM</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}

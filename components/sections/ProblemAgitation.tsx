'use client';

import { AvatarConfig } from '@/lib/config';

interface ProblemAgitationProps {
  config: AvatarConfig;
  onApplyClick: () => void;
}

export default function ProblemAgitation({ config, onApplyClick }: ProblemAgitationProps) {
  const { problem } = config;

  return (
    <section className="py-20 sm:py-28 bg-slate-950">
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            "{problem.headline.split(' — ')[0]}
            {problem.headline.includes(' — ') && (
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"> — {problem.headline.split(' — ')[1]}</span>
            )}"
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          {/* Intro paragraphs */}
          <div className="mb-8">
            {problem.intro.map((paragraph, index) => (
              <p 
                key={index} 
                className={`text-lg ${index === 0 ? 'text-xl sm:text-2xl text-white font-bold mb-6' : 'text-gray-300 mb-4'}`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Pain Points */}
          <div className="space-y-3 mb-12">
            {problem.painPoints.map((point, index) => (
              <div key={index} className="flex items-start">
                <span className="text-red-400 text-xl mr-3 mt-0.5">❌</span>
                <p className="text-lg text-gray-300">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The Truth */}
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 rounded-3xl p-8 sm:p-12 border border-slate-700/50">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            {problem.truthHeadline}
          </h3>
          
          {problem.truthPoints.map((point, index) => (
            <p 
              key={index} 
              className={`text-center mb-4 max-w-3xl mx-auto ${
                index === problem.truthPoints.length - 1 
                  ? 'text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold mb-8' 
                  : 'text-xl text-gray-300'
              }`}
            >
              {point}
            </p>
          ))}
          
          <p className="text-lg text-gray-300 text-center mb-6 max-w-3xl mx-auto">
            {problem.businessModelStatement}
          </p>
          
          <div className="space-y-2 mb-8 max-w-2xl mx-auto">
            {problem.closingPoints.map((point, index) => (
              <p key={index} className="text-lg text-gray-300 text-center">
                {point}
              </p>
            ))}
          </div>
          
          <p className="text-xl text-white text-center font-bold">
            You don't need to work harder. You need a system that actually works.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={onApplyClick}
            className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40"
          >
            <span className="relative z-10">{problem.cta}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}

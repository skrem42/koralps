'use client';

import { AvatarConfig } from '@/lib/config';

interface GuaranteeSectionProps {
  config: AvatarConfig;
  onApplyClick: () => void;
}

export default function GuaranteeSection({ config, onApplyClick }: GuaranteeSectionProps) {
  const { guarantee } = config;

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Badge */}
        <div className="inline-block bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/40 rounded-2xl px-6 py-2 mb-8">
          <p className="text-yellow-400 font-bold">{guarantee.badge}</p>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl mx-auto">
          {guarantee.headline}
        </h2>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
          {guarantee.subheadline}
        </p>

        {/* Intro */}
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 mb-10 max-w-2xl mx-auto">
          <p className="text-lg text-gray-300">
            {guarantee.intro}
          </p>
        </div>

        {/* Qualification */}
        <div className="text-left max-w-2xl mx-auto mb-10">
          <p className="text-white font-semibold mb-6 text-center text-lg">
            {guarantee.qualificationIntro}
          </p>
          
          <div className="space-y-4">
            {guarantee.qualifications.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-slate-800/30 rounded-lg p-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">{item.title}</p>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-lg text-gray-300">
            {guarantee.closing}
          </p>
        </div>

        {/* Final CTA */}
        <div>
          <button
            onClick={onApplyClick}
            className="group relative inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/40"
          >
            <span className="relative z-10">{guarantee.cta}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}

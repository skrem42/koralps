'use client';

import { AvatarConfig } from '@/lib/config';

interface HeroSectionProps {
  config: AvatarConfig;
  onApplyClick: () => void;
}

export default function HeroSection({ config, onApplyClick }: HeroSectionProps) {
  const { hero } = config;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/80 to-slate-900">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-center">
        {/* Badge */}
        <div className="inline-block bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/40 rounded-full px-6 py-2 mb-8">
          <p className="text-green-400 font-bold text-sm sm:text-base tracking-wide">{hero.badge}</p>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.15] max-w-4xl mx-auto">
          <span className="text-white">{hero.headline}</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-gray-200 mb-4 mx-auto font-medium">
          {hero.subheadline}
        </p>

        {/* Guarantee details */}
        <p className="text-lg text-gray-300 mb-10 mx-auto text-center w-full!">
          {hero.guaranteeSubtext}
        </p>

        {/* VSL Video Section */}
        {hero.vslEnabled && (
          <div className="mb-12 max-w-4xl mx-auto">
            <div className="relative aspect-video bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-blue-500/10">
              {/* Video Placeholder - Replace with actual video embed */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                {/* Play Button */}
                <button className="group relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50">
                  <svg 
                    className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  {/* Pulse animation ring */}
                  <span className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping"></span>
                </button>
              </div>
              {/* Video thumbnail overlay text */}
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <p className="text-white/80 text-sm sm:text-base font-medium">
                  ▶ {hero.videoText}
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-3">
              {hero.videoNote}
            </p>
          </div>
        )}

        {/* CTA Button */}
        <button
          onClick={onApplyClick}
          className="group relative inline-flex items-center justify-center px-10 sm:px-12 py-5 sm:py-6 text-lg sm:text-xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40"
        >
          <span className="relative z-10">{hero.cta}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center opacity-60">
          <span className="text-gray-400 text-sm mb-2">Scroll to learn more</span>
          <svg className="w-6 h-6 text-gray-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

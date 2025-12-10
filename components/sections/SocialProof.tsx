'use client';

import { AvatarConfig } from '@/lib/config';

interface SocialProofProps {
  config: AvatarConfig;
}

export default function SocialProof({ config }: SocialProofProps) {
  const { socialProof } = config;

  return (
    <section className="py-20 sm:py-15 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {socialProof.headline.split('. ')[0]}.{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              {socialProof.headline.split('. ')[1]}
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            {socialProof.subheadline}
          </p>
         </div> */}

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-8 border border-green-500/30 mb-12 text-center">
          <p className="text-3xl sm:text-4xl font-bold text-white mb-2">
            {socialProof.statsPrimary || (
              <>Most Creators add <span className="text-green-400">{socialProof.stats}</span>/month</>
            )}
          </p>
          <p className="text-xl text-gray-300">
            {socialProof.statsSecondary || 'in their first 90 days in our program'}
          </p>
          {socialProof.statsSubtext && (
            <p className="text-gray-400 mt-2">
              {socialProof.statsSubtext}
            </p>
          )}
        </div>

        {/* Case Study */}
        {socialProof.caseStudy && (
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 sm:p-10 border border-slate-700/50">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
              {socialProof.caseStudy.title}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* The Problem */}
              <div className="bg-red-500/5 rounded-xl p-6 border border-red-500/20">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-red-400 text-xl">⚠️</span>
                  <h4 className="text-lg font-bold text-white">The Problem</h4>
                </div>
                <p className="text-gray-300">{socialProof.caseStudy.problem}</p>
              </div>

              {/* What We Found */}
              <div className="bg-yellow-500/5 rounded-xl p-6 border border-yellow-500/20">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-yellow-400 text-xl">🔍</span>
                  <h4 className="text-lg font-bold text-white">What We Found</h4>
                </div>
                <p className="text-gray-300">{socialProof.caseStudy.whatWeFound}</p>
              </div>
            </div>

            {/* What We Fixed */}
            <div className="bg-blue-500/5 rounded-xl p-6 border border-blue-500/20 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-400 text-xl">🔧</span>
                <h4 className="text-lg font-bold text-white">What We Fixed</h4>
              </div>
              <ul className="space-y-2">
                {socialProof.caseStudy.whatWeFixed.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">→</span>
                    <p className="text-gray-300">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Result */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-500/30 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-green-400 text-xl">🚀</span>
                <h4 className="text-lg font-bold text-white">The Result</h4>
              </div>
              <p className="text-xl text-white font-semibold">{socialProof.caseStudy.result}</p>
            </div>

            {/* Case Study Image */}
            {socialProof.caseStudy.image && (
              <div className="mt-8">
                <img 
                  src={socialProof.caseStudy.image} 
                  alt="Case study results" 
                  className="w-full rounded-xl shadow-2xl shadow-black/20 border border-slate-700/50"
                />
              </div>
            )}
          </div>
        )}

        {/* Testimonials (if available) */}
        {socialProof.testimonials && socialProof.testimonials.length > 0 && (
          <div className="mt-12 space-y-6">
            {socialProof.testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-semibold text-white">{testimonial.name}</span>
                      <span className="text-gray-500 text-sm">{testimonial.timeframe}</span>
                    </div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-3">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-300">"{testimonial.quote}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

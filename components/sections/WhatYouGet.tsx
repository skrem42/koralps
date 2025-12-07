'use client';

import { AvatarConfig } from '@/lib/config';

interface WhatYouGetProps {
  config: AvatarConfig;
  onApplyClick: () => void;
}

export default function WhatYouGet({ config, onApplyClick }: WhatYouGetProps) {
  const { whatYouGet } = config;

  // Icons for each service (matched by index)
  const serviceIcons = [
    // Traffic Engine
    <svg key="traffic" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>,
    // Conversion Architecture
    <svg key="conversion" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>,
    // Professional Chat Team
    <svg key="chat" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>,
    // Retention Systems
    <svg key="retention" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>,
    // Content Strategy
    <svg key="content" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>,
    // 1-on-1 Growth Partner
    <svg key="partner" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>,
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-950">
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {whatYouGet.headline.split(' — ')[0]}
            {whatYouGet.headline.includes(' — ') && (
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"> — {whatYouGet.headline.split(' — ')[1]}</span>
            )}
          </h2>
          <p className="text-xl text-gray-400">
            {whatYouGet.subheadline}
          </p>
        </div>

        {/* The System Label */}
        <div className="text-center mb-10">
          <span className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-6 py-2">
            <p className="text-blue-400 font-semibold">The System</p>
          </span>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {whatYouGet.services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                  {serviceIcons[index]}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-500 font-mono text-sm">{index + 1}.</span>
                    <h4 className="text-lg font-bold text-white">{service.title}</h4>
                  </div>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={onApplyClick}
            className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40"
          >
            <span className="relative z-10">{whatYouGet.cta}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}

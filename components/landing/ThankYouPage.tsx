'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface ThankYouPageProps {
  headline?: string;
  subheadline?: string;
  guarantee?: {
    amount: string;
    timeframe: string;
    description: string;
  };
  calendlyUrl?: string;
  testimonials?: Array<{
    name: string;
    result: string;
    quote?: string;
  }>;
  disclaimer?: string;
}

export default function ThankYouPage({
  headline = "Your Playbook Is On Its Way. But First...",
  subheadline = "We guarantee you'll add $10K/month to your creator income — or we'll keep working with you for free until you do.",
  guarantee = {
    amount: "$10K/month",
    timeframe: "90 days",
    description: "Book a call below to see if you qualify."
  },
  calendlyUrl = "https://calendly.com/calum-koracreative/30-minute-call-with-kora-team",
  testimonials = [],
  disclaimer = "Individual experiences presented here may not be typical. Their background, education, effort, and application affected their experience. The information shared here are for example purposes and not a guarantee of a rate of return or a specific result. Your results may vary.",
}: ThankYouPageProps) {

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        
        {/* Success Check Mark */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-6 leading-tight uppercase tracking-tight"
            style={{ fontFamily: 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif' }}>
          {headline}
        </h1>

        {/* Guarantee Box */}
        <div className="bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl p-8 mb-8 text-center shadow-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tight"
              style={{ fontFamily: 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif' }}>
            {subheadline}
          </h2>
          <p className="text-lg sm:text-xl text-slate-900 font-semibold">
            {guarantee.description}
          </p>
        </div>

        {/* Calendly Widget */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
          <div 
            className="calendly-inline-widget" 
            data-url={calendlyUrl}
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>

        {/* Social Proof Section */}
        {testimonials.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 uppercase tracking-tight"
                style={{ fontFamily: 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif' }}>
              Don't Believe Us?<br />
              Here Are Creators Who've Scaled With Us
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-bold">{testimonial.name}</p>
                      <p className="text-amber-400 text-sm font-semibold">{testimonial.result}</p>
                    </div>
                  </div>
                  {testimonial.quote && (
                    <p className="text-gray-300 text-sm italic">"{testimonial.quote}"</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="text-center text-slate-500 text-xs max-w-3xl mx-auto">
          <p className="mb-4">{disclaimer}</p>
          <p>This website is NOT endorsed by any platform. Individual experiences may vary.</p>
        </div>
      </div>

      {/* Calendly Script */}
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="lazyOnload"
      />
    </main>
  );
}






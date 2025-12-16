'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface SlideImage {
  src: string;
  alt?: string;
  label?: string;
}

interface CaseStudyProps {
  name?: string;
  beforeRevenue?: string;
  afterRevenue?: string;
  timeframe?: string;
  story?: string[];
  highlights?: string[];
  /** Single image (legacy support) */
  imageSrc?: string;
  imageAlt?: string;
  /** Multiple images for slideshow */
  images?: SlideImage[];
  /** Auto-advance slides (in ms, 0 to disable) */
  autoPlay?: number;
}

export default function CaseStudyFeature({
  name = 'Lauren',
  beforeRevenue = 'Under $1K/month',
  afterRevenue = '$500K/month',
  timeframe = '2025',
  story = [
    "Lauren came to us as a SA creator struggling to break past $1K/month. She had the look, the drive, but no system.",
    "Within months, we transformed everything: positioning, content strategy, and execution. In-person shoots. Direct content direction. No remote guessing games.",
    "The result? Lauren didn't just grow—she became one of the top earners in the industry.",
  ],
  highlights = [
    'Complete brand repositioning',
    'In-person content direction & shoots',
    'US audience targeting from SA',
    'Full account management',
  ],
  imageSrc,
  imageAlt = 'Case study results',
  images = [],
  autoPlay = 5000,
}: CaseStudyProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Build slides array from images prop or fallback to single imageSrc
  const slides: SlideImage[] = images.length > 0 
    ? images 
    : imageSrc 
      ? [{ src: imageSrc, alt: imageAlt }] 
      : [];
  
  const hasSlides = slides.length > 0;
  const hasMultipleSlides = slides.length > 1;
  
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);
  
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  // Auto-advance slides
  useEffect(() => {
    if (!hasMultipleSlides || autoPlay === 0) return;
    
    const timer = setInterval(nextSlide, autoPlay);
    return () => clearInterval(timer);
  }, [hasMultipleSlides, autoPlay, nextSlide]);

  return (
    <section id="case-study" className="bg-gray-950 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Case Study
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            How We Scaled {name} to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              {afterRevenue}
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            A SA creator transformation story
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story side */}
          <div>
            {/* Before/After card */}
            <div className="bg-gray-900 rounded-2xl p-6 mb-8 border border-gray-800">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-800/50 rounded-xl">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Before Kora</p>
                  <p className="text-2xl font-bold text-red-400">{beforeRevenue}</p>
                </div>
                <div className="text-center p-4 bg-amber-500/10 rounded-xl border border-amber-500/20">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">With Kora ({timeframe})</p>
                  <p className="text-2xl font-bold text-amber-400">{afterRevenue}</p>
                </div>
              </div>
            </div>
            
            {/* Story paragraphs */}
            <div className="space-y-4 mb-8">
              {story.map((paragraph, index) => (
                <p key={index} className="text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            {/* Highlights */}
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <p className="text-white font-semibold mb-4">What we did:</p>
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-amber-400 mt-1">✓</span>
                    <span className="text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Image/Slideshow side */}
          <div className="relative">
            {hasSlides ? (
              <div className="relative">
                {/* Slideshow container */}
                <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-900">
                  {/* Current slide */}
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={slides[currentSlide].src}
                      alt={slides[currentSlide].alt || `Slide ${currentSlide + 1}`}
                      fill
                      className="object-cover"
                    />
                    
                    {/* Slide label */}
                    {slides[currentSlide].label && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <p className="text-white font-semibold text-center">
                          {slides[currentSlide].label}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {/* Navigation arrows */}
                  {hasMultipleSlides && (
                    <>
                      <button
                        onClick={prevSlide}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                        aria-label="Previous slide"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={nextSlide}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                        aria-label="Next slide"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>
                
                {/* Dots navigation */}
                {hasMultipleSlides && (
                  <div className="flex justify-center gap-2 mt-4">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                          index === currentSlide
                            ? 'bg-amber-500'
                            : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
                
                {/* Slide counter */}
                {hasMultipleSlides && (
                  <p className="text-center text-gray-500 text-sm mt-2">
                    {currentSlide + 1} / {slides.length}
                  </p>
                )}
              </div>
            ) : (
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 aspect-[4/5] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">📈</span>
                  </div>
                  <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300 mb-2">
                    500x
                  </p>
                  <p className="text-gray-400">Revenue Growth</p>
                  <div className="mt-8 pt-8 border-t border-gray-700">
                    <p className="text-gray-500 text-sm">Results screenshot placeholder</p>
                    <p className="text-gray-600 text-xs mt-1">Add Lauren's earnings screenshot here</p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-amber-500 text-black font-bold px-4 py-2 rounded-lg shadow-lg z-10">
              Verified Results
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




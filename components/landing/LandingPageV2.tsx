'use client';

import { AvatarConfig } from '@/lib/config';
import HeroSection from '@/components/sections/HeroSection';
import ProblemAgitation from '@/components/sections/ProblemAgitation';
import SolutionIntro from '@/components/sections/SolutionIntro';
import WhatYouGet from '@/components/sections/WhatYouGet';
import SocialProof from '@/components/sections/SocialProof';
import WhyItWorks from '@/components/sections/WhyItWorks';
import GuaranteeSection from '@/components/sections/GuaranteeSection';
import ApplicationForm from '@/components/ApplicationForm';
import Footer from '@/components/shared/Footer';

interface LandingPageProps {
  config: AvatarConfig;
}

export default function LandingPageV2({ config }: LandingPageProps) {
  const scrollToApply = () => {
    const applySection = document.getElementById('apply');
    if (applySection) {
      applySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen">
      {/* 1. Hero - Guarantee First */}
      <HeroSection config={config} onApplyClick={scrollToApply} />
      
      {/* 2. Problem Agitation */}
      <ProblemAgitation config={config} onApplyClick={scrollToApply} />
      
      {/* 3. Solution Introduction */}
      <SolutionIntro config={config} onApplyClick={scrollToApply} />
      
      {/* 4. What You Get (Services) */}
      <WhatYouGet config={config} onApplyClick={scrollToApply} />
      
      {/* 5. Social Proof / Testimonials */}
      <SocialProof config={config} />
      
      {/* 6. Why It Works / Why Different */}
      <WhyItWorks config={config} onApplyClick={scrollToApply} />
      
      {/* 7. Guarantee & Qualification */}
      <GuaranteeSection config={config} onApplyClick={scrollToApply} />
      
      {/* 8. Application Form */}
      <ApplicationForm config={config} />
      
      {/* 9. Footer */}
      <Footer config={config} />
    </main>
  );
}

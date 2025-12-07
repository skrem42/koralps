'use client';

import { useEffect } from 'react';
import { initFacebookPixel, trackPageView } from '@/lib/analytics';

export default function FacebookPixel() {
  useEffect(() => {
    initFacebookPixel();
    trackPageView();
  }, []);

  return null;
}






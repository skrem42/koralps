'use client';

let pixelInitialized = false;
let ReactPixel: any = null;

const loadPixel = async () => {
  if (typeof window === 'undefined') return null;
  if (ReactPixel) return ReactPixel;
  
  try {
    const module = await import('react-facebook-pixel');
    ReactPixel = module.default;
    return ReactPixel;
  } catch (error) {
    console.error('Failed to load Facebook Pixel:', error);
    return null;
  }
};

export const initFacebookPixel = async () => {
  if (typeof window === 'undefined') return;
  
  const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || '1241561791159730';
  
  if (!pixelId) {
    console.warn('Facebook Pixel ID not found in environment variables');
    return;
  }

  if (!pixelInitialized) {
    const pixel = await loadPixel();
    if (pixel) {
      pixel.init(pixelId, undefined, {
        autoConfig: true,
        debug: false,
      });
      pixelInitialized = true;
    }
  }
};

export const trackPageView = async () => {
  if (typeof window === 'undefined') return;
  if (pixelInitialized && ReactPixel) {
    ReactPixel.pageView();
  }
};

export const trackViewContent = async (contentName: string) => {
  if (typeof window === 'undefined') return;
  if (pixelInitialized && ReactPixel) {
    ReactPixel.track('ViewContent', {
      content_name: contentName,
    });
  }
};

export const trackVideoPlay = async (videoName: string) => {
  if (typeof window === 'undefined') return;
  if (pixelInitialized && ReactPixel) {
    ReactPixel.trackCustom('VideoPlay', {
      video_name: videoName,
    });
  }
};

export const trackScheduleClick = async () => {
  if (typeof window === 'undefined') return;
  if (pixelInitialized && ReactPixel) {
    ReactPixel.track('Schedule', {
      content_name: 'Calendly Booking',
    });
  }
};

export const trackCustomEvent = async (eventName: string, data?: Record<string, any>) => {
  if (typeof window === 'undefined') return;
  if (pixelInitialized && ReactPixel) {
    ReactPixel.trackCustom(eventName, data);
  }
};

// Standard Lead event - use this for form submissions
// This is a standard Facebook conversion event that can be optimized for in ads
export const trackLead = async (data?: {
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
}) => {
  if (typeof window === 'undefined') return;
  if (pixelInitialized && ReactPixel) {
    ReactPixel.track('Lead', data);
  }
};

// Standard CompleteRegistration event - alternative for form completions
export const trackCompleteRegistration = async (data?: {
  content_name?: string;
  value?: number;
  currency?: string;
}) => {
  if (typeof window === 'undefined') return;
  if (pixelInitialized && ReactPixel) {
    ReactPixel.track('CompleteRegistration', data);
  }
};


// ============================================
// FACEBOOK PIXEL ANALYTICS UTILITIES
// ============================================
// Uses the native fbq SDK loaded via Script component

// Declare fbq on window for TypeScript
declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

/**
 * Check if fbq is available
 */
function isFbqAvailable(): boolean {
  return typeof window !== 'undefined' && typeof window.fbq === 'function';
}

/**
 * Track page view
 */
export function trackPageView(): void {
  if (!isFbqAvailable()) return;
  window.fbq('track', 'PageView');
}

/**
 * Track content view
 */
export function trackViewContent(contentName: string): void {
  if (!isFbqAvailable()) return;
  window.fbq('track', 'ViewContent', {
    content_name: contentName,
  });
}

/**
 * Track video play
 */
export function trackVideoPlay(videoName: string): void {
  if (!isFbqAvailable()) return;
  window.fbq('trackCustom', 'VideoPlay', {
    video_name: videoName,
  });
}

/**
 * Track schedule click (Calendly)
 */
export function trackScheduleClick(): void {
  if (!isFbqAvailable()) return;
  window.fbq('track', 'Schedule', {
    content_name: 'Calendly Booking',
  });
}

/**
 * Track custom event
 */
export function trackCustomEvent(
  eventName: string,
  data?: Record<string, unknown>
): void {
  if (!isFbqAvailable()) return;
  window.fbq('trackCustom', eventName, data);
}

/**
 * Standard Lead event - use this for form submissions
 * This is a standard Facebook conversion event that can be optimized for in ads
 */
export function trackLead(data?: {
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
}): void {
  if (!isFbqAvailable()) return;
  window.fbq('track', 'Lead', data);
}

/**
 * Standard CompleteRegistration event - alternative for form completions
 */
export function trackCompleteRegistration(data?: {
  content_name?: string;
  value?: number;
  currency?: string;
}): void {
  if (!isFbqAvailable()) return;
  window.fbq('track', 'CompleteRegistration', data);
}

/**
 * Track InitiateCheckout event
 */
export function trackInitiateCheckout(data?: {
  content_name?: string;
  value?: number;
  currency?: string;
}): void {
  if (!isFbqAvailable()) return;
  window.fbq('track', 'InitiateCheckout', data);
}

/**
 * Track AddToCart event
 */
export function trackAddToCart(data?: {
  content_name?: string;
  value?: number;
  currency?: string;
}): void {
  if (!isFbqAvailable()) return;
  window.fbq('track', 'AddToCart', data);
}

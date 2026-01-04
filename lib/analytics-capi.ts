// ============================================
// CLIENT-SIDE FACEBOOK CAPI HELPERS
// ============================================
// Use these functions to trigger server-side CAPI events from your forms

import { generateEventId } from './facebook-capi';

/**
 * User data interface (client-side)
 */
export interface UserDataClient {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
  externalId?: string;
}

/**
 * Custom data for events
 */
export interface CustomDataClient {
  contentName?: string;
  contentCategory?: string;
  value?: number;
  currency?: string;
  [key: string]: unknown;
}

/**
 * Get Facebook Browser Pixel (_fbp cookie)
 */
function getFbpCookie(): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(/(?:^|;\s*)_fbp=([^;]*)/);
  return match ? decodeURIComponent(match[1]) : undefined;
}

/**
 * Get Facebook Click ID (_fbc cookie)
 */
function getFbcCookie(): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(/(?:^|;\s*)_fbc=([^;]*)/);
  return match ? decodeURIComponent(match[1]) : undefined;
}

/**
 * Send event to Facebook CAPI via your API endpoint
 */
export async function sendCAPIEvent(
  eventName: string,
  userData: UserDataClient,
  customData?: CustomDataClient,
  eventId?: string
): Promise<{ success: boolean; error?: string }> {
  try {
    // Generate event ID if not provided (for deduplication with Pixel)
    const finalEventId = eventId || generateEventId();

    // Get current page URL
    const eventSourceUrl = typeof window !== 'undefined' ? window.location.href : undefined;

    // Enrich user data with Facebook cookies
    const enrichedUserData = {
      ...userData,
      fbp: getFbpCookie(),
      fbc: getFbcCookie(),
    };

    const response = await fetch('/api/facebook-capi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        userData: enrichedUserData,
        customData,
        eventSourceUrl,
        eventId: finalEventId,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('CAPI Error:', result);
      return { success: false, error: result.error };
    }

    console.log('CAPI Event Sent:', eventName, finalEventId);
    return { success: true };
  } catch (error) {
    console.error('CAPI Exception:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

/**
 * Track Lead event (form submission)
 * ALSO triggers Facebook Pixel event for deduplication
 */
export async function trackLeadCAPI(
  userData: UserDataClient,
  customData?: CustomDataClient
): Promise<void> {
  const eventId = generateEventId();

  // Send to CAPI (server-side)
  await sendCAPIEvent('Lead', userData, customData, eventId);

  // ALSO send to Pixel (browser-side) with same event_id for deduplication
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      ...customData,
      eventID: eventId, // Important: same ID for deduplication
    });
  }
}

/**
 * Track CompleteRegistration event
 * ALSO triggers Facebook Pixel event for deduplication
 */
export async function trackCompleteRegistrationCAPI(
  userData: UserDataClient,
  customData?: CustomDataClient
): Promise<void> {
  const eventId = generateEventId();

  // Send to CAPI (server-side)
  await sendCAPIEvent('CompleteRegistration', userData, customData, eventId);

  // ALSO send to Pixel (browser-side)
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'CompleteRegistration', {
      ...customData,
      eventID: eventId,
    });
  }
}

/**
 * Track ViewContent event
 */
export async function trackViewContentCAPI(
  userData: UserDataClient,
  contentName: string
): Promise<void> {
  const eventId = generateEventId();

  await sendCAPIEvent('ViewContent', userData, { content_name: contentName }, eventId);

  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: contentName,
      eventID: eventId,
    });
  }
}

/**
 * Track Schedule event (Calendly booking)
 */
export async function trackScheduleCAPI(
  userData: UserDataClient,
  customData?: CustomDataClient
): Promise<void> {
  const eventId = generateEventId();

  await sendCAPIEvent('Schedule', userData, customData, eventId);

  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Schedule', {
      ...customData,
      eventID: eventId,
    });
  }
}

/**
 * Track Purchase event
 */
export async function trackPurchaseCAPI(
  userData: UserDataClient,
  value: number,
  currency: string = 'USD',
  customData?: CustomDataClient
): Promise<void> {
  const eventId = generateEventId();

  await sendCAPIEvent(
    'Purchase',
    userData,
    { ...customData, value, currency },
    eventId
  );

  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Purchase', {
      ...customData,
      value,
      currency,
      eventID: eventId,
    });
  }
}

/**
 * Track any custom event
 */
export async function trackCustomEventCAPI(
  eventName: string,
  userData: UserDataClient,
  customData?: CustomDataClient
): Promise<void> {
  const eventId = generateEventId();

  await sendCAPIEvent(eventName, userData, customData, eventId);

  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, {
      ...customData,
      eventID: eventId,
    });
  }
}

// Declare fbq on window for TypeScript
declare global {
  interface Window {
    fbq: (action: string, event: string, data?: Record<string, unknown>) => void;
  }
}


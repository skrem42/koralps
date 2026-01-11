import crypto from 'crypto';

// ============================================
// FACEBOOK CONVERSIONS API (CAPI) UTILITIES
// ============================================
// Server-side event tracking for Facebook

const PIXEL_ID = process.env.FACEBOOK_PIXEL_ID || '2055900041887614';
const ACCESS_TOKEN = process.env.FACEBOOK_CONVERSION_API_ACCESS_TOKEN;
const TEST_EVENT_CODE = process.env.FACEBOOK_TEST_EVENT_CODE; // Optional, for testing

/**
 * Hash data using SHA-256 (required by Meta for PII)
 */
function hashData(data: string | undefined | null): string | undefined {
  if (!data) return undefined;
  
  // Normalize: trim, lowercase
  const normalized = data.trim().toLowerCase();
  if (!normalized) return undefined;
  
  return crypto.createHash('sha256').update(normalized).digest('hex');
}

/**
 * Normalize and hash phone number
 * Removes all non-digit characters
 */
function hashPhone(phone: string | undefined | null): string | undefined {
  if (!phone) return undefined;
  
  // Remove all non-digits
  const digitsOnly = phone.replace(/\D/g, '');
  if (!digitsOnly) return undefined;
  
  return crypto.createHash('sha256').update(digitsOnly).digest('hex');
}

/**
 * User data interface for CAPI events
 */
export interface UserData {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
  externalId?: string;  // Your internal user ID
  clientIpAddress?: string;
  clientUserAgent?: string;
  fbp?: string;  // Facebook browser ID (_fbp cookie)
  fbc?: string;  // Facebook click ID (_fbc cookie)
}

/**
 * Custom data for events
 */
export interface CustomData {
  contentName?: string;
  contentCategory?: string;
  value?: number;
  currency?: string;
  [key: string]: unknown;
}

/**
 * Facebook CAPI event interface
 */
export interface FacebookEvent {
  event_name: string;
  event_time: number;
  event_id?: string;
  event_source_url?: string;
  action_source: 'website' | 'email' | 'app' | 'phone_call' | 'chat' | 'physical_store' | 'system_generated' | 'other';
  user_data: {
    em?: string[];  // Hashed email
    ph?: string[];  // Hashed phone
    fn?: string[];  // Hashed first name
    ln?: string[];  // Hashed last name
    ct?: string[];  // Hashed city
    st?: string[];  // Hashed state
    zp?: string[];  // Hashed zip
    country?: string[];  // Hashed country (2-letter code)
    external_id?: string[];  // Hashed external ID
    client_ip_address?: string;
    client_user_agent?: string;
    fbp?: string;
    fbc?: string;
  };
  custom_data?: Record<string, unknown>;
}

/**
 * Build user data payload with hashing
 */
function buildUserData(userData: UserData): FacebookEvent['user_data'] {
  const hashedData: FacebookEvent['user_data'] = {};
  
  // Hash PII data
  if (userData.email) hashedData.em = [hashData(userData.email)!];
  if (userData.phone) hashedData.ph = [hashPhone(userData.phone)!];
  if (userData.firstName) hashedData.fn = [hashData(userData.firstName)!];
  if (userData.lastName) hashedData.ln = [hashData(userData.lastName)!];
  if (userData.city) hashedData.ct = [hashData(userData.city)!];
  if (userData.state) hashedData.st = [hashData(userData.state)!];
  if (userData.zipCode) hashedData.zp = [hashData(userData.zipCode)!];
  if (userData.country) hashedData.country = [hashData(userData.country)!];
  if (userData.externalId) hashedData.external_id = [hashData(userData.externalId)!];
  
  // These are NOT hashed
  if (userData.clientIpAddress) hashedData.client_ip_address = userData.clientIpAddress;
  if (userData.clientUserAgent) hashedData.client_user_agent = userData.clientUserAgent;
  if (userData.fbp) hashedData.fbp = userData.fbp;
  if (userData.fbc) hashedData.fbc = userData.fbc;
  
  return hashedData;
}

/**
 * Generate a unique event ID for deduplication
 * Use the same ID for both Pixel and CAPI events
 */
export function generateEventId(): string {
  return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Send an event to Facebook Conversions API
 */
export async function sendFacebookEvent(
  eventName: string,
  userData: UserData,
  customData?: CustomData,
  eventSourceUrl?: string,
  eventId?: string
): Promise<{ success: boolean; error?: string }> {
  if (!ACCESS_TOKEN) {
    console.error('Facebook CAPI: Missing access token');
    return { success: false, error: 'Missing access token' };
  }

  try {
    const event: FacebookEvent = {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000), // Unix timestamp in seconds
      event_id: eventId || generateEventId(),
      event_source_url: eventSourceUrl,
      action_source: 'website',
      user_data: buildUserData(userData),
      custom_data: customData,
    };

    const payload = {
      data: [event],
      test_event_code: TEST_EVENT_CODE, // Only used if set
    };

    const url = `https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Facebook CAPI Error:', result);
      return { success: false, error: result.error?.message || 'Unknown error' };
    }

    console.log('Facebook CAPI Success:', {
      eventName,
      eventId: event.event_id,
      eventsReceived: result.events_received,
      testEventCode: TEST_EVENT_CODE ? 'Using test mode' : 'Production mode',
    });

    return { success: true };
  } catch (error) {
    console.error('Facebook CAPI Exception:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

/**
 * Convenience function: Track a Lead event
 */
export async function trackLeadEvent(
  userData: UserData,
  customData?: CustomData,
  eventSourceUrl?: string,
  eventId?: string
): Promise<{ success: boolean; error?: string }> {
  return sendFacebookEvent('Lead', userData, customData, eventSourceUrl, eventId);
}

/**
 * Convenience function: Track a PageView event
 */
export async function trackPageViewEvent(
  userData: UserData,
  eventSourceUrl?: string,
  eventId?: string
): Promise<{ success: boolean; error?: string }> {
  return sendFacebookEvent('PageView', userData, undefined, eventSourceUrl, eventId);
}

/**
 * Convenience function: Track a ViewContent event
 */
export async function trackViewContentEvent(
  userData: UserData,
  contentName: string,
  eventSourceUrl?: string,
  eventId?: string
): Promise<{ success: boolean; error?: string }> {
  return sendFacebookEvent(
    'ViewContent',
    userData,
    { content_name: contentName },
    eventSourceUrl,
    eventId
  );
}

/**
 * Convenience function: Track a CompleteRegistration event
 */
export async function trackCompleteRegistrationEvent(
  userData: UserData,
  customData?: CustomData,
  eventSourceUrl?: string,
  eventId?: string
): Promise<{ success: boolean; error?: string }> {
  return sendFacebookEvent(
    'CompleteRegistration',
    userData,
    customData,
    eventSourceUrl,
    eventId
  );
}

/**
 * Convenience function: Track a Schedule event (custom)
 */
export async function trackScheduleEvent(
  userData: UserData,
  customData?: CustomData,
  eventSourceUrl?: string,
  eventId?: string
): Promise<{ success: boolean; error?: string }> {
  return sendFacebookEvent('Schedule', userData, customData, eventSourceUrl, eventId);
}

/**
 * Convenience function: Track a Purchase event
 */
export async function trackPurchaseEvent(
  userData: UserData,
  value: number,
  currency: string,
  customData?: CustomData,
  eventSourceUrl?: string,
  eventId?: string
): Promise<{ success: boolean; error?: string }> {
  return sendFacebookEvent(
    'Purchase',
    userData,
    { ...customData, value, currency },
    eventSourceUrl,
    eventId
  );
}




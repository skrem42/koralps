# Facebook CAPI Integration Examples

## 🎯 Quick Reference

All the CAPI functions are in `lib/analytics-capi.ts`. They automatically:
- Send events to both Pixel (browser) AND CAPI (server)
- Handle deduplication with unique event IDs
- Hash all PII data for privacy
- Include Facebook cookies for better matching

---

## 📝 Example 1: Lead Magnet Form (Already Implemented)

```typescript
import { trackLeadCAPI } from '@/lib/analytics-capi';

// Inside your form submit handler:
await trackLeadCAPI({
  email: formData.email,
  firstName: formData.firstName,
  lastName: formData.lastName,
  phone: formData.phone,
}, {
  contentName: 'Branding Framework',
  contentCategory: 'Lead Magnet',
});
```

✅ **What it does:**
- Sends "Lead" event to Facebook Pixel (browser)
- Sends "Lead" event to Facebook CAPI (server)
- Uses same event ID for deduplication
- Hashes email, phone, name for privacy

---

## 📝 Example 2: Application Form

For your creator application forms (`/app/apply/page.tsx`):

```typescript
import { trackCompleteRegistrationCAPI } from '@/lib/analytics-capi';

// After form submission:
await trackCompleteRegistrationCAPI({
  email: formData.email,
  firstName: formData.name?.split(' ')[0],
  lastName: formData.name?.split(' ')[1],
  phone: formData.phone,
}, {
  contentName: 'Creator Application',
  contentCategory: 'Application',
  value: 1000, // Optional: estimated lead value
  currency: 'USD',
});
```

---

## 📝 Example 3: Calendly Booking

When someone books a call:

```typescript
import { trackScheduleCAPI } from '@/lib/analytics-capi';

// After Calendly event:
await trackScheduleCAPI({
  email: userData.email,
  firstName: userData.firstName,
  lastName: userData.lastName,
}, {
  contentName: 'Calendly Booking',
  value: 500, // Estimated value of a booked call
  currency: 'USD',
});
```

---

## 📝 Example 4: Page Views (High-Value Pages)

Track important page views:

```typescript
import { trackViewContentCAPI } from '@/lib/analytics-capi';

// On thank-you page or pricing page:
useEffect(() => {
  if (userEmail) {
    trackViewContentCAPI({
      email: userEmail,
    }, 'Thank You Page');
  }
}, [userEmail]);
```

⚠️ **Note:** Only track page views where you have user data. Regular page views are handled by Pixel automatically.

---

## 📝 Example 5: Purchase/Payment

For e-commerce or payment forms:

```typescript
import { trackPurchaseCAPI } from '@/lib/analytics-capi';

// After successful payment:
await trackPurchaseCAPI({
  email: formData.email,
  firstName: formData.firstName,
  lastName: formData.lastName,
  phone: formData.phone,
}, 
997, // Amount in dollars
'USD', // Currency
{
  contentName: 'Branding Package',
  contentCategory: 'Service',
});
```

---

## 📝 Example 6: Custom Events

For any custom tracking:

```typescript
import { trackCustomEventCAPI } from '@/lib/analytics-capi';

// Custom event:
await trackCustomEventCAPI('VideoWatched', {
  email: userEmail,
}, {
  videoName: 'Case Study Video',
  watchTime: 120, // seconds
});
```

---

## 🔄 How Deduplication Works

Every CAPI function automatically:

1. **Generates a unique event ID** (e.g., `1704384000000_abc123xyz`)
2. **Sends to CAPI** (server) with event ID
3. **Sends to Pixel** (browser) with SAME event ID
4. **Meta deduplicates** - only counts the event once

Example in the code:

```typescript
export async function trackLeadCAPI(userData, customData) {
  const eventId = generateEventId(); // Unique ID

  // Send to CAPI (server-side)
  await sendCAPIEvent('Lead', userData, customData, eventId);

  // Send to Pixel (browser-side) with SAME eventId
  if (window.fbq) {
    window.fbq('track', 'Lead', {
      ...customData,
      eventID: eventId, // Same ID = deduplication
    });
  }
}
```

---

## 🎨 Where to Add CAPI Tracking

### ✅ **DO** track these events:
- ✅ Form submissions (Lead)
- ✅ Account registrations (CompleteRegistration)
- ✅ Calendly bookings (Schedule)
- ✅ Purchases (Purchase)
- ✅ High-value page views (ViewContent)
- ✅ Important custom actions

### ❌ **DON'T** track these:
- ❌ Regular page views (Pixel handles this)
- ❌ Button clicks without user data
- ❌ Anonymous browsing
- ❌ Every single user action (too noisy)

---

## 🔍 Debugging & Testing

### Check if CAPI is working:

```typescript
// In your browser console:
fetch('/api/facebook-capi')
  .then(r => r.json())
  .then(console.log);

// Should show:
// { status: "ok", service: "Facebook Conversions API", configured: true }
```

### Test an event manually:

```typescript
import { sendCAPIEvent } from '@/lib/analytics-capi';

// Send a test event:
await sendCAPIEvent('Lead', {
  email: 'test@example.com',
  firstName: 'Test',
  lastName: 'User',
}, {
  contentName: 'Test Event',
});

// Check Events Manager: https://business.facebook.com/events_manager2
```

---

## 📊 Event Match Quality

To improve your **Event Match Quality Score** in Events Manager:

### Send more data:
```typescript
await trackLeadCAPI({
  email: formData.email,           // ✅ Always include
  phone: formData.phone,           // ✅ Highly valuable
  firstName: formData.firstName,   // ✅ Improves matching
  lastName: formData.lastName,     // ✅ Improves matching
  city: formData.city,             // 🔹 Optional but helpful
  state: formData.state,           // 🔹 Optional but helpful
  zipCode: formData.zipCode,       // 🔹 Optional but helpful
  country: 'US',                   // 🔹 Optional (2-letter code)
});
```

### The system automatically adds:
- ✅ `fbp` cookie (Facebook browser ID)
- ✅ `fbc` cookie (Facebook click ID)
- ✅ User IP address
- ✅ User agent string
- ✅ Hashed PII data

---

## 🚀 Next Steps

1. **Add to Application Form** - Track creator applications
2. **Add to Calendly** - Track call bookings
3. **Add to Thank You Pages** - Track conversions with user data
4. **Monitor Events Manager** - Check match quality and event volume
5. **Create Custom Audiences** - Use server events for retargeting
6. **Optimize Ad Campaigns** - Meta will have better data to optimize

---

## 🔗 Related Files

- `lib/analytics-capi.ts` - Client-side CAPI functions (use these in your components)
- `lib/facebook-capi.ts` - Server-side CAPI core (don't import directly)
- `app/api/facebook-capi/route.ts` - API endpoint (handles requests)
- `components/landing/LeadMagnetPage.tsx` - Example implementation

---

## 💡 Pro Tips

1. **Always include email** - It's the strongest identifier
2. **Include phone if available** - Second strongest identifier
3. **Use standard events** - Lead, CompleteRegistration, Purchase (better than custom)
4. **Test with Test Event Code** - Use test mode during development
5. **Check match quality** - Aim for 6.5+ score in Events Manager
6. **Monitor deduplication** - Same event should show "Pixel" and "CAPI" sources

---

## ❓ Need Help?

- [Events Manager](https://business.facebook.com/events_manager2) - View your events
- [Match Quality](https://www.facebook.com/business/help/765081237991954) - Improve matching
- [CAPI Docs](https://developers.facebook.com/docs/marketing-api/conversions-api) - Full documentation




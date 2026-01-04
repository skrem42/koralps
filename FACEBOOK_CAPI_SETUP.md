# Facebook Conversions API (CAPI) Setup

## 🎯 Why Add Conversions API?

**Conversions API** is Meta's **server-side tracking** that complements your Facebook Pixel (browser tracking).

### Benefits:
- ✅ **Bypass ad blockers** - Track events even when browser blockers are active
- ✅ **iOS 14.5+ tracking** - Get around Apple's privacy restrictions
- ✅ **Better attribution** - More accurate conversion tracking
- ✅ **Duplicate prevention** - Meta automatically deduplicates pixel + CAPI events
- ✅ **First-party data** - Send events directly from your server to Meta

---

## 🔑 Step 1: Get Your Access Token

### Option A: Quick Setup (Recommended)
1. Go to [Meta Events Manager](https://business.facebook.com/events_manager2)
2. Select your Pixel
3. Click **Settings** → **Conversions API** → **Generate Access Token**
4. Click **Generate Access Token** → Copy it
5. Save this token (format: `EAAxxxxxxxxxx...`)

### Option B: Manual Setup (Advanced)
1. Go to [Meta Business Settings](https://business.facebook.com/settings)
2. Click **System Users** → **Add** → Create a system user
3. Assign the user to your ad account with **Manage campaigns** permissions
4. Generate an access token for the user
5. Make sure it has `ads_management` scope

---

## 🆔 Step 2: Get Your Pixel ID

You already have this! It's in your code:
- Pixel ID: `2055900041887614`

You can verify it at [Events Manager](https://business.facebook.com/events_manager2)

---

## 🔧 Step 3: Add Environment Variables

### For Local Development:
Add to `.env.local`:

```bash
# Facebook Pixel (Client-side) - Already configured
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=2055900041887614

# Facebook Conversions API (Server-side) - NEW
FACEBOOK_CONVERSION_API_ACCESS_TOKEN=your_access_token_here
FACEBOOK_PIXEL_ID=2055900041887614

# Optional: Test Event Code (for testing CAPI events)
FACEBOOK_TEST_EVENT_CODE=TEST12345
```

### For Vercel Production:
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project → **Settings** → **Environment Variables**
3. Add these variables:
   - `FACEBOOK_CONVERSION_API_ACCESS_TOKEN` → Your access token
   - `FACEBOOK_PIXEL_ID` → `2055900041887614`
   - `FACEBOOK_TEST_EVENT_CODE` → (optional, for testing)
4. Click **Save**
5. **Redeploy** your project

---

## 📦 Step 4: Install Required Package

```bash
npm install crypto
```

(Already included in Node.js, but used for hashing user data)

---

## 🚀 Step 5: Implementation Files

I'll create these files for you:

1. **`lib/facebook-capi.ts`** - Core CAPI utility functions
2. **`app/api/facebook-capi/route.ts`** - API endpoint to send events
3. Update your lead capture forms to trigger CAPI events

---

## 📊 Standard Events You Can Track

### Standard Events (Recommended):
- `PageView` - User views a page
- `Lead` - User submits lead form
- `CompleteRegistration` - User completes registration
- `ViewContent` - User views specific content
- `InitiateCheckout` - User starts checkout
- `Purchase` - User completes purchase
- `Schedule` - User books a call (custom)

### Custom Events:
- `VideoPlay` - User watches video
- `LeadMagnetDownload` - Downloads branding framework
- `CalendlyBooking` - Books a call

---

## 🔐 Step 6: Data Hashing & Privacy

CAPI requires hashing user data (email, phone, etc.) using SHA-256 for privacy.

The implementation automatically:
- Hashes all PII data (email, phone, first name, last name)
- Normalizes data (lowercase, trim whitespace)
- Complies with Meta's requirements
- Removes personal data from being sent in plain text

---

## 🧪 Step 7: Testing Your Implementation

### Test Event Code (Optional but Recommended):
1. Go to [Events Manager](https://business.facebook.com/events_manager2)
2. Select your Pixel → **Test Events**
3. Copy the **Test Event Code**
4. Add it to your environment variables as `FACEBOOK_TEST_EVENT_CODE`

### Run a Test:
1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Submit a lead form at `http://localhost:3000/lm-branding`

3. Check Events Manager → **Test Events** tab
   - You should see the event appear within seconds
   - Shows "CAPI" as the source
   - Shows green checkmark if successful

4. Remove `FACEBOOK_TEST_EVENT_CODE` when going to production

---

## 🎨 Event Deduplication

**Important:** Meta automatically deduplicates events sent from both Pixel and CAPI.

To enable deduplication:
- Send the same `event_id` from both Pixel and CAPI
- CAPI events include a timestamp
- If both events have same `event_id`, Meta only counts it once
- This prevents double-counting conversions

Our implementation handles this automatically.

---

## ✅ Verification Checklist

After setup, verify:

- [ ] Access token generated from Events Manager
- [ ] Environment variables added (local + Vercel)
- [ ] `/app/api/facebook-capi/route.ts` created
- [ ] `lib/facebook-capi.ts` created
- [ ] Lead forms updated to call CAPI endpoint
- [ ] Test event appears in Events Manager
- [ ] Test event shows "CAPI" source
- [ ] Events show in both Pixel and CAPI
- [ ] Deploy to production
- [ ] Test in production

---

## 🔍 Monitoring & Debugging

### Check Event Quality:
1. Go to [Events Manager](https://business.facebook.com/events_manager2)
2. Click **Data Sources** → Select your Pixel
3. View **Event Match Quality Score**
   - **Good:** 6.5+ (means good data matching)
   - **Fair:** 4.0-6.4
   - **Poor:** <4.0

### Improve Match Quality:
- Send more user data (email, phone, name)
- Hash data properly (our implementation does this)
- Include `fbp` cookie (Facebook browser ID)
- Include `fbc` click ID

### View Events:
- **Events Manager** → **Overview** → Filter by "Server" to see CAPI events
- Check **Activity** column for real-time events
- Use **Test Events** during development

---

## 🐛 Common Issues

### "Invalid Access Token"
- Verify token is correct in environment variables
- Make sure token has `ads_management` scope
- Token may have expired (regenerate in Events Manager)

### Events Not Appearing
- Check Vercel logs for errors
- Verify Pixel ID is correct
- Make sure you've redeployed after adding env vars
- Check Test Events tab in Events Manager

### Low Match Quality
- Include more user data (email, phone)
- Make sure data is properly hashed
- Send `fbp` cookie from browser
- Include `client_user_agent` and `client_ip_address`

### Duplicate Events
- Make sure you're using `event_id` for deduplication
- Our implementation automatically handles this
- Check that the same `event_id` is sent from Pixel and CAPI

---

## 🔗 Useful Resources

- [Meta Events Manager](https://business.facebook.com/events_manager2)
- [Conversions API Documentation](https://developers.facebook.com/docs/marketing-api/conversions-api)
- [Event Match Quality Guide](https://www.facebook.com/business/help/765081237991954)
- [Test Events Tool](https://developers.facebook.com/docs/marketing-api/conversions-api/using-the-api#test-events)

---

## 📈 Expected Results

After implementing CAPI, you should see:

1. **Higher Event Count** - More events tracked (bypasses blockers)
2. **Better Attribution** - More accurate conversion tracking
3. **Improved Match Quality** - Better data matching in Events Manager
4. **Dual Sources** - Events show up from both "Pixel" and "CAPI"
5. **Better Ad Performance** - More accurate optimization

---

## 🚦 Quick Start Summary

1. Get access token from Events Manager
2. Add to `.env.local` and Vercel
3. Run the implementation commands (provided next)
4. Test with Test Event Code
5. Deploy to production
6. Monitor in Events Manager

Let's implement it! 🚀


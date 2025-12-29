# Mailchimp Integration Setup

## 🔑 Step 1: Get Your Mailchimp API Credentials

### Get API Key:
1. Log into [Mailchimp](https://mailchimp.com)
2. Go to **Profile** → **Extras** → **API Keys**
3. Click **Create A Key**
4. Copy your API key (format: `xxxxxxxxxxxxxxxxxxxxx-us19`)

### Get Audience ID:
1. Go to **Audience** → **All contacts**
2. Click **Settings** → **Audience name and defaults**
3. Copy your **Audience ID** (format: `a1b2c3d4e5`)

### Get Server Prefix:
- Look at your API key: `xxxxxxxxxxxxxxxxxxxxx-us19`
- The server prefix is the part after the dash (e.g., `us19`, `us21`, etc.)

---

## 🔧 Step 2: Add Environment Variables

### For Local Development:
Create/update `.env.local` in the project root:

```bash
# Mailchimp Configuration
MAILCHIMP_API_KEY=your_api_key_here-us19
MAILCHIMP_AUDIENCE_ID=your_audience_id_here
MAILCHIMP_SERVER_PREFIX=us19

# Optional: Postgres (if using database)
POSTGRES_URL=your_postgres_url_here
```

### For Vercel Production:
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project → **Settings** → **Environment Variables**
3. Add these three variables:
   - `MAILCHIMP_API_KEY` → `your_api_key_here-us19`
   - `MAILCHIMP_AUDIENCE_ID` → `your_audience_id_here`
   - `MAILCHIMP_SERVER_PREFIX` → `us19` (or your prefix)
4. Click **Save**
5. Redeploy your project

---

## 📧 Step 3: Setup Mailchimp Automation

### Create Custom Fields (Merge Tags):
1. In Mailchimp: **Audience** → **Settings** → **Audience fields and *|MERGE|* tags**
2. Add these custom fields:
   - `FNAME` - First Name (usually exists by default)
   - `LNAME` - Last Name (usually exists by default)
   - `PHONE` - Phone Number (type: Phone)
   - `INSTAGRAM` - Instagram Handle (type: Text)

### Create Email Automation:
1. Go to **Automations** → **Create** → **Custom**
2. **Trigger:** "Subscriber is added to audience" + tag is `branding`
3. **Add Email:**
   - **Subject:** "Your 4-Step Branding Framework is Here! 🎯"
   - **From Name:** Kora
   - **Preview Text:** "The exact system we use to scale creators to $500K/month+"

### Email Template:

```html
Hi *|FNAME|*,

You're in 🎉

Here's your 4-Step Branding Framework — the exact system we use to position creators for $500K/month+.

👉 ACCESS THE FRAMEWORK:
https://docs.google.com/document/d/1JEmhEgAare-asHI_WzOMKxu5RJ8ZU20U12AL3UDwtO0/edit

Inside you'll find:
✓ Step 1: Core Identity Mapping
✓ Step 2: The Differentiation Matrix
✓ Step 3: Brand Architecture Blueprint
✓ Step 4: The Scale Protocol
+ BONUS: The $0 → $450K Case Study

This is the same framework we used to scale creators from complete unknowns to industry leaders.

Want us to apply it to YOUR brand?

📞 Book a free positioning call:
https://calendly.com/calum-koracreative/30-minute-call-with-kora-team

We'll audit your positioning, find the gaps, and show you exactly what to fix.

Talk soon,
The Kora Team

P.S. Most creators get positioning completely wrong. This framework fixes that.
```

### Setup Follow-Up Sequence:

**Email 2 (Delay: 1 day):**
- Subject: "Case Study: $0 → $450K in 4 Months"
- Content: Deep dive into positioning success story
- CTA: Book positioning audit

**Email 3 (Delay: 3 days):**
- Subject: "Quick question about your positioning..."
- Content: "Have you had a chance to review the framework?"
- CTA: Reply or book call

**Email 4 (Delay: 7 days):**
- Subject: "Your positioning is costing you thousands"
- Content: Why bad positioning keeps creators stuck
- Strong CTA: Last chance to book free audit

---

## 🧪 Step 4: Test Everything

1. **Test locally:**
   ```bash
   npm run dev
   ```

2. Go to `http://localhost:3000/lm-branding`

3. Fill out the form with your email

4. Check:
   - ✅ Lead saved to database (if configured)
   - ✅ Pushover notification sent (if configured)
   - ✅ Added to Mailchimp audience
   - ✅ Tagged with `branding` tag
   - ✅ Automation email sent

5. **Deploy to production:**
   ```bash
   vercel --prod
   ```

---

## 📊 Mailchimp Tags for Lead Magnets

Each lead magnet automatically gets tagged:
- `branding` - Downloaded branding framework
- `reddit` - Downloaded Reddit playbook
- `positioning` - Booked positioning audit
- `playbook` - Downloaded creator playbook
- `lead-magnet` - General tag for all lead magnets

Use these tags to:
- Segment your audience
- Create specific automations
- Track conversion sources
- Personalize follow-ups

---

## ✅ Checklist

- [ ] Get Mailchimp API key
- [ ] Get Audience ID
- [ ] Get Server Prefix
- [ ] Add environment variables (local + Vercel)
- [ ] Create custom merge fields (PHONE, INSTAGRAM)
- [ ] Create email automation with `branding` tag trigger
- [ ] Design email with Google Doc link
- [ ] Setup follow-up sequence (Day 1, 3, 7)
- [ ] Test with your own email
- [ ] Deploy to Vercel
- [ ] Test in production

---

## 🐛 Troubleshooting

**"Member Exists" error:**
- This is normal! It means the email is already subscribed
- The system treats this as success

**No email received:**
- Check spam/junk folder
- Verify automation is "Live" in Mailchimp
- Check that the tag `branding` is being added
- Verify trigger conditions match

**Environment variables not working:**
- Redeploy after adding env vars in Vercel
- Check for typos in variable names
- Make sure no extra spaces in values

**Mailchimp API errors:**
- Verify your API key is valid
- Check server prefix matches your account
- Ensure Audience ID is correct
- Look at Vercel logs for detailed errors

---

## 🔗 Useful Links

- [Mailchimp API Docs](https://mailchimp.com/developer/marketing/api/)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Google Doc Share Settings](https://support.google.com/docs/answer/2494822)

Your Google Doc URL: https://docs.google.com/document/d/1JEmhEgAare-asHI_WzOMKxu5RJ8ZU20U12AL3UDwtO0/edit


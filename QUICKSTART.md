# 🚀 Quick Start Guide

Get your talent management funnel live in 5 minutes!

## ✅ Step 1: Environment Setup

1. **Copy the environment file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Add your Calendly URL** (Required):
   - Go to [calendly.com](https://calendly.com)
   - Create an event type (e.g., "Strategy Call")
   - Copy your event URL
   - Add it to `.env.local`:
     ```
     NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/yourname/strategy-call
     ```

3. **Add your Facebook Pixel ID** (Optional but recommended):
   - Go to [Facebook Events Manager](https://business.facebook.com/events_manager2)
   - Copy your Pixel ID
   - Add it to `.env.local`:
     ```
     NEXT_PUBLIC_FACEBOOK_PIXEL_ID=your_pixel_id
     ```

## ✅ Step 2: Customize Your Content

### Update Your Video (5 minutes)

Edit `components/VSLSection.tsx` and replace the placeholder with your video:

**For YouTube:**
```tsx
<iframe
  className="absolute inset-0 w-full h-full"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  // ... rest of the props
></iframe>
```

**For Vimeo:**
```tsx
<iframe
  className="absolute inset-0 w-full h-full"
  src="https://player.vimeo.com/video/YOUR_VIDEO_ID"
  // ... rest of the props
></iframe>
```

### Update Your Copy (10 minutes)

1. **Hero headline** - Edit `components/Hero.tsx`
2. **Case study metrics** - Edit `components/CaseStudy.tsx`
3. **Company name** - Search and replace "Elite Talent Management"

## ✅ Step 3: Test Locally

```bash
npm run dev
```

Visit `http://localhost:3000` and test:
- [ ] Hero section loads with animations
- [ ] Video player is visible
- [ ] Case study stats animate on scroll
- [ ] Calendly button opens booking widget
- [ ] Mobile responsive (test on phone)

## ✅ Step 4: Deploy to Production

### Option 1: Vercel (Recommended - 2 minutes)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables:
   - `NEXT_PUBLIC_CALENDLY_URL`
   - `NEXT_PUBLIC_FACEBOOK_PIXEL_ID`
5. Click "Deploy"

Your funnel will be live at `your-project.vercel.app`!

### Option 2: Netlify

1. Build: `npm run build`
2. Upload `.next` folder to Netlify
3. Add environment variables in Netlify settings

## ✅ Step 5: Connect Your Ads

### Facebook/Instagram Ads Setup

1. **Create your ad campaign** in Facebook Ads Manager
2. **Set destination URL** to your deployed funnel URL
3. **Test the pixel** using Facebook Pixel Helper extension
4. **Track these events** in Events Manager:
   - PageView
   - ViewContent
   - Schedule (conversion event)

### Optimization Tips

- Start with warm audiences (retargeting)
- Test different headlines in your ads
- A/B test video vs image ads
- Track cost per scheduled call

## 🎯 Success Checklist

- [ ] Calendly URL is configured
- [ ] Video is embedded and plays
- [ ] All copy is customized
- [ ] Tested on mobile device
- [ ] Facebook Pixel is tracking
- [ ] Deployed to production
- [ ] Ads are pointing to funnel
- [ ] First booking received! 🎉

## 📊 Monitoring Performance

### Key Metrics to Track

1. **Landing Page Views** - How many people see your funnel
2. **Video Play Rate** - % who click play
3. **Video Completion Rate** - % who watch entire video
4. **Click-to-Book Rate** - % who click Calendly CTA
5. **Booking Completion Rate** - % who actually book
6. **Cost Per Booking** - Ad spend / bookings

### In Facebook Events Manager

- Check that PageView events are firing
- Verify ViewContent tracks when video section loads
- Ensure Schedule event tracks when CTA is clicked
- Set Schedule as your conversion event for optimization

## 🆘 Need Help?

**Video not showing?**
- Check video URL format
- Ensure video is publicly accessible
- Try a different video hosting platform

**Calendly not working?**
- Verify URL in `.env.local` is correct
- Check that Calendly event is active
- Test URL directly in browser

**Pixel not tracking?**
- Use Facebook Pixel Helper extension
- Check browser console for errors
- Verify Pixel ID is correct in `.env.local`

**Site not loading?**
- Run `npm install` to ensure all packages are installed
- Check for console errors
- Try clearing browser cache

## 🎨 Next Steps

Once your funnel is live and converting:

1. **Add email follow-up** for non-bookers
2. **Create retargeting ads** for video viewers
3. **A/B test different headlines** and copy
4. **Add more case studies** or testimonials
5. **Optimize for mobile** based on analytics
6. **Test different video lengths** and styles

---

**Ready to launch?** Follow this checklist and you'll be converting ad traffic into booked calls in no time! 🚀

Need more details? Check the full [README.md](README.md)









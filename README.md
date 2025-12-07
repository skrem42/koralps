# 🚀 OnlyFans Creator Growth Funnel

A modern, high-converting Next.js sales funnel designed specifically for OnlyFans creator management agencies. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion, inspired by the proven Gym Launch funnel model.

## ✨ Features

- **Guarantee-First Hero** - Bold $50K+ guarantee that immediately qualifies prospects
- **Problem Agitation Section** - Addresses creator pain points and builds urgency
- **Complete Solution Presentation** - Positions your agency as the all-in-one answer
- **Service Breakdown** - Clear, benefit-driven service explanations
- **Video Sales Letter (VSL)** - Proof-driven case study video section
- **Before/After Case Studies** - Real creator transformations with metrics
- **"Why It Works" Explanation** - Differentiates from other agencies
- **Social Proof Testimonials** - 6 creator testimonials with results
- **Qualification Section** - Pre-qualifies leads before booking
- **Facebook Pixel Integration** - Complete conversion tracking for ads
- **Calendly Integration** - Seamless booking with qualification messaging
- **Mobile-First Design** - Fully responsive across all devices
- **Smooth Animations** - Professional Framer Motion animations throughout

## 🎯 Funnel Flow (Gym Launch Model)

This funnel follows the proven Gym Launch psychology:

1. **Hero with Guarantee** - Lead with bold $50K+ guarantee for qualified creators
2. **Problem Agitation** - "It's not you, it's your business model"
3. **Solution Introduction** - Position as the complete system (not just agency OR coaching)
4. **Services Breakdown** - Show everything they get in one place
5. **VSL Video** - Proof with real creator case study
6. **Case Study Section** - Before/after transformation with metrics
7. **Why It Works** - Explain the hybrid agency + coaching model
8. **Testimonials** - Multiple creator success stories
9. **Guarantee & Qualification** - Restate guarantee and qualify prospects
10. **Final CTA** - Calendly booking with "see if you qualify" messaging

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling
- [Framer Motion](https://www.framer.com/motion/) - Smooth animations
- [React Facebook Pixel](https://www.npmjs.com/package/react-facebook-pixel) - Conversion tracking
- [Calendly](https://calendly.com/) - Appointment scheduling

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- A Calendly account
- A Facebook Pixel ID (optional but recommended for ad tracking)

### Installation

1. **Navigate to the project directory:**

```bash
cd fbfunnels
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**

Copy the `.env.example` file to create your local environment file:

```bash
cp .env.example .env.local
```

Then edit `.env.local` and add your credentials:

```env
# Facebook Pixel ID for conversion tracking
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=your_pixel_id_here

# Calendly scheduling URL
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/meeting
```

4. **Run the development server:**

```bash
npm run dev
```

5. **Open your browser:**

Visit [http://localhost:3000](http://localhost:3000) to see your funnel!

## 🎨 Customization Guide

### 1. Update Your Copy & Branding

Edit the following to match your company:

#### Company Name
Replace "Your Company Name" in:
- `app/page.tsx` (footer)
- Update all placeholder copy with your actual company name

#### Revenue Guarantee
Update the guarantee amount in:
- `components/Hero.tsx` (currently $50K+)
- `components/GuaranteeSection.tsx`
- Adjust based on your actual guarantee terms

#### Qualification Criteria
Update in `components/GuaranteeSection.tsx`:
- Current minimum: $3K/month
- Adjust based on your ideal client profile

#### Stats & Social Proof
Update in:
- `components/CaseStudy.tsx` - Revenue growth metrics
- `components/TestimonialsSection.tsx` - Creator testimonials
- `components/CalendlyButton.tsx` - Social proof numbers

#### Case Studies
Replace example case studies in:
- `components/CaseStudy.tsx` - Mia's story
- `components/TestimonialsSection.tsx` - 6 testimonials
- Use your real creator results

### 2. Add Your Video

In `components/VSLSection.tsx`, replace the placeholder video player:

**For YouTube:**

```tsx
<iframe
  className="absolute inset-0 w-full h-full"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID?rel=0&modestbranding=1"
  title="Video Sales Letter"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
```

**For Vimeo:**

```tsx
<iframe
  className="absolute inset-0 w-full h-full"
  src="https://player.vimeo.com/video/YOUR_VIDEO_ID?title=0&byline=0&portrait=0"
  title="Video Sales Letter"
  frameBorder="0"
  allow="autoplay; fullscreen; picture-in-picture"
  allowFullScreen
></iframe>
```

### 3. Customize Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --primary: #3b82f6;        /* Main blue color */
  --primary-dark: #2563eb;   /* Darker blue for hovers */
  --secondary: #8b5cf6;      /* Purple accent */
  --accent: #06b6d4;         /* Cyan accent */
  --gradient-start: #3b82f6; /* Gradient start color */
  --gradient-end: #8b5cf6;   /* Gradient end color */
}
```

### 4. Update Metadata & SEO

Edit `app/layout.tsx` to update your site's metadata:

```tsx
export const metadata: Metadata = {
  title: "Your Title Here",
  description: "Your description here",
  keywords: "your, keywords, here",
  // ... add more metadata
};
```

### 5. Add Your Branding

Replace the default content with your:
- Logo (add to `/public` directory)
- Brand colors (optional - current blue/purple gradient works well)
- Company name (currently "Your Company Name" in footer)
- Real creator results and testimonials
- Actual guarantee terms

## 📊 Facebook Pixel Events

The funnel tracks these events automatically:

- **PageView** - When someone lands on your page
- **ViewContent** - When the video section is viewed
- **VideoPlay** - When someone plays your VSL video (custom event)
- **Schedule** - When someone clicks the Calendly CTA

View these events in Facebook Events Manager to optimize your ads.

## 🎯 Calendly Setup

1. Sign up for Calendly at https://calendly.com
2. Create an event type (e.g., "Strategy Call")
3. Copy your event URL (e.g., `https://calendly.com/yourname/strategy-call`)
4. Add it to your `.env.local` file

The funnel includes both:
- **Popup widget** - Opens Calendly in a modal (better for mobile)
- **Inline embed** - Shows calendar directly on the page (better for desktop)

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add your environment variables in Vercel settings
5. Deploy!

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload the .next folder to Netlify
```

### Environment Variables in Production

Don't forget to add these in your hosting platform:
- `NEXT_PUBLIC_FACEBOOK_PIXEL_ID`
- `NEXT_PUBLIC_CALENDLY_URL`

## 📱 Mobile Optimization

The funnel is built mobile-first with:
- Responsive typography (scales from mobile to desktop)
- Touch-friendly buttons (large tap targets)
- Optimized images with Next.js Image component
- Smooth scrolling and animations
- Sticky CTA bar for better conversions

## ⚡ Performance

Built for speed with:
- Next.js 14 App Router for optimal performance
- Optimized package imports for Framer Motion
- Lazy loading for Calendly widget
- CSS-in-JS with Tailwind for minimal CSS
- Remote image optimization with Next.js

Target: **< 2 second page load** on 4G connection

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📁 Project Structure

```
fbfunnels/
├── app/
│   ├── layout.tsx                  # Root layout with Facebook Pixel & SEO
│   ├── page.tsx                    # Main landing page (all sections)
│   └── globals.css                 # Global styles and theme
├── components/
│   ├── Hero.tsx                    # Guarantee-first hero section
│   ├── ProblemSection.tsx          # Problem agitation
│   ├── SolutionSection.tsx         # Solution introduction
│   ├── ServicesSection.tsx         # Services breakdown
│   ├── VSLSection.tsx              # Video sales letter
│   ├── CaseStudy.tsx               # Before/after case study
│   ├── WhyItWorksSection.tsx       # Why it works explanation
│   ├── TestimonialsSection.tsx     # Creator testimonials
│   ├── GuaranteeSection.tsx        # Guarantee & qualification
│   ├── CalendlyButton.tsx          # Final CTA with Calendly
│   └── FacebookPixel.tsx           # Facebook Pixel component
├── lib/
│   └── analytics.ts                # Facebook Pixel tracking helpers
├── public/                         # Static assets
├── .env.example                    # Environment variables template
└── README.md                       # This file
```

## 🐛 Troubleshooting

### Calendly Not Showing

- Verify your `NEXT_PUBLIC_CALENDLY_URL` is set in `.env.local`
- Check that your Calendly URL is publicly accessible
- Try disabling ad blockers

### Facebook Pixel Not Tracking

- Verify your `NEXT_PUBLIC_FACEBOOK_PIXEL_ID` is set correctly
- Check Facebook Events Manager for events
- Use Facebook Pixel Helper Chrome extension for debugging

### Animations Not Working

- Clear your browser cache
- Check console for JavaScript errors
- Ensure Framer Motion is installed: `npm list framer-motion`

## 💡 Best Practices

1. **Video Length** - Keep your VSL between 5-15 minutes
2. **Load Time** - Optimize video hosting for fast loading
3. **Mobile Testing** - Test on real devices, not just browser tools
4. **A/B Testing** - Test different headlines and CTAs
5. **Social Proof** - Use real metrics and testimonials
6. **Scarcity** - Consider adding limited availability messaging
7. **Follow-up** - Set up email sequences for non-converters

## 📈 Conversion Optimization Tips

1. **Above the fold** - Strong headline + video player visible immediately
2. **Clear CTA** - Multiple CTAs throughout the page
3. **Sticky CTA bar** - Appears after video plays
4. **Social proof** - Case study with real numbers
5. **Trust indicators** - "No credit card required" badges
6. **Fast loading** - Optimize everything for speed

## 🤝 Support

Need help? 
- Check the Next.js docs: https://nextjs.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs
- Framer Motion docs: https://www.framer.com/motion/

## 📝 License

This project is yours to customize and use for your talent management agency!

---

Built with ❤️ using Next.js 14 | Inspired by Gym Launch's proven funnel model | Ready to convert your ad traffic into qualified OnlyFans creator leads

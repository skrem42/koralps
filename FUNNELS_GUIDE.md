# Kora Creators Multi-Funnel Website

This project is set up to support multiple landing pages for different audience segments (avatars) and a blog for SEO.

## 🏗️ Project Structure

```
fbfunnels/
├── app/
│   ├── page.tsx                    # Default landing page (/)
│   ├── layout.tsx                  # Root layout
│   ├── [avatar]/                   # Dynamic avatar landing pages
│   │   └── page.tsx                # e.g., /avatar1southafrica
│   └── blogs/
│       ├── page.tsx                # Blog listing (/blogs)
│       ├── layout.tsx              # Blog layout with nav
│       └── [slug]/
│           └── page.tsx            # Individual blog posts
├── components/
│   ├── Hero.tsx                    # Accepts config prop
│   ├── ProblemSection.tsx          # Accepts config prop
│   ├── ... (other sections)
│   ├── landing/
│   │   └── LandingPage.tsx         # Reusable LP wrapper
│   └── shared/
│       └── Footer.tsx
├── content/
│   └── blogs/                      # Markdown blog posts
│       ├── how-to-grow-onlyfans-2025.md
│       └── ppv-strategies-that-work.md
├── lib/
│   ├── config.ts                   # Avatar configurations
│   ├── blog.ts                     # Blog utilities
│   └── analytics.ts
└── public/
```

---

## 🎯 Adding a New Landing Page (Avatar)

### Step 1: Add configuration to `lib/config.ts`

```typescript
export const avatars: Record<string, Partial<AvatarConfig>> = {
  // Add your new avatar here:
  'newavatar': {
    slug: 'newavatar',
    name: 'New Avatar Name',
    region: 'Target Region',
    meta: {
      title: 'Custom SEO Title',
      description: 'Custom meta description',
    },
    hero: {
      badge: '💎 YOUR BADGE TEXT 💎',
      headline: {
        prefix: 'Add',
        amount: '$50K+',
        suffix: 'to Your OnlyFans in',
        timeframe: '90 Days',
      },
      subheadline: 'Guaranteed.',
      guarantee: 'If you don\'t, we\'ll manage your account for FREE until you do',
      qualifier: '(For creators earning $3K+/month)',
      cta: 'I\'m Ready to Grow!',
    },
    problem: {
      headline: 'Your custom headline',
      painPoints: [
        'Pain point 1',
        'Pain point 2',
        'Pain point 3',
      ],
      transition: 'Your transition text',
    },
    calendly: {
      url: 'https://calendly.com/your-custom-link',
      ctaText: 'Book Your Call',
    },
    tracking: {
      facebookPixelId: 'optional-different-pixel',
    },
  },
};
```

### Step 2: That's it!

Your new landing page is now live at: `koracreators.net/newavatar`

---

## 📝 Adding Blog Posts

### Step 1: Create a new markdown file

Create a new file in `content/blogs/` with a `.md` extension:

```bash
content/blogs/your-post-slug.md
```

### Step 2: Add frontmatter

```markdown
---
title: "Your Post Title"
description: "A short description for SEO"
date: "2025-01-15"
author: "Kora Team"
category: "Growth Strategies"
tags: ["onlyfans", "growth", "tips"]
image: "/blog/your-image.jpg"
published: true
---

# Your Post Title

Your content here...

## Subheadings work

- Bullet points
- Work too

**Bold** and *italic* are supported.

[Links work](/path)
```

### Step 3: That's it!

Your post is now live at: `koracreators.net/blogs/your-post-slug`

---

## 🚀 Deploying to Vercel

### 1. Push to GitHub

```bash
git add .
git commit -m "Multi-funnel structure"
git push origin main
```

### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Add environment variables:
   - `NEXT_PUBLIC_CALENDLY_URL` = Your Calendly link
   - `NEXT_PUBLIC_FB_PIXEL_ID` = Your Facebook Pixel ID

### 3. Deploy!

Vercel will automatically deploy on every push to main.

---

## 🎨 Customization

### Enable Animations

In each component file, change:

```typescript
const ENABLE_ANIMATIONS = false;
```

to:

```typescript
const ENABLE_ANIMATIONS = true;
```

### Customize Colors

Edit `app/globals.css` for global styles.

### Add New Sections

1. Create component in `components/`
2. Add to `components/landing/LandingPage.tsx`
3. Optionally add config props for avatar-specific content

---

## 📊 Tracking

Each avatar can have its own:
- Facebook Pixel ID
- Google Analytics ID
- Custom UTM parameters

Set these in the avatar's `tracking` config.

---

## 🔗 URL Structure

| URL | What it shows |
|-----|--------------|
| `/` | Default landing page |
| `/avatar1southafrica` | South Africa-focused LP |
| `/avatar2uk` | UK-focused LP |
| `/avatar3us` | US-focused LP |
| `/blogs` | Blog listing |
| `/blogs/post-slug` | Individual blog post |

---

## ❓ Common Tasks

### Change the default landing page content

Edit `lib/config.ts` → `defaultAvatarConfig`

### Add a region-specific currency

Add to avatar config:
```typescript
hero: {
  headline: {
    amount: 'R900K+',  // South African Rand
    // or
    amount: '£40K+',   // British Pounds
  }
}
```

### Hide a blog post

Set `published: false` in the post's frontmatter.

### Add new testimonials

Edit `components/TestimonialsSection.tsx` and modify the `testimonials` array.

---

## 🛠️ Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **Gray Matter** - Blog parsing
- **Vercel** - Hosting

---

## Need Help?

This structure is designed to be:
- ✅ Easy to add new landing pages
- ✅ Easy to add blog posts
- ✅ Easy to customize per audience
- ✅ SEO optimized
- ✅ Fast to deploy









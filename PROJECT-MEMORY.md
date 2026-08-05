# ATHLEIRON Project Memory

> This file tracks where the project stands so work can resume quickly in a new session.

## Quick Links

- **Live website:** https://athleiron-web.vercel.app
- **GitHub repo:** https://github.com/Yasir292/athleiron-web
- **Local project folder:** `C:/Users/HP/athleiron-web`
- **Vercel dashboard:** https://vercel.com/yasir-tajs-projects/athleiron-web

## What Was Built

A complete MVP ecommerce website for the UK sportswear brand **ATHLEIRON**.

### Brand Identity
- Logo (icon + wordmark) in SVG: `public/logo-icon.svg`, `public/favicon.svg`
- Colour palette: dark iron grey (`#0a0a0b`) + flame orange accent (`#ff4d00`)
- Typography: Inter (Google Fonts)
- Brand guidelines: `BRAND-GUIDELINES.md`

### Tech Stack
- React 19 + Vite 6
- Tailwind CSS 4
- React Router 7
- Lucide React + inline SVGs
- React Context for cart state

### Pages & Features
| Page | Path | Status |
|------|------|--------|
| Home | `/` | Live |
| Shop | `/shop` | Live with category filters |
| Product Detail | `/product/:id` | Live with size/colour selectors |
| About | `/about` | Live |
| Contact | `/contact` | Live with FAQ |
| Checkout | `/checkout` | Live with shipping form + order summary |
| Cart Drawer | slide-out | Live with add/remove/quantity |

### Deployment
- Vercel production deployment active
- `vercel.json` handles SPA routing
- GitHub repo auto-deploys on push (if Git connection is enabled in Vercel dashboard)

## What's Done ✅

1. Competitor analysis completed (High Sports Wear + UK brands: Gymshark, Sweaty Betty, Castore, AYBL, TALA)
2. Brand positioning and identity created
3. React + Vite + Tailwind project scaffolded
4. All core pages and components built
5. Shopping cart with add/remove/quantity
6. Checkout page with shipping form
7. Responsive mobile-first design
8. SEO meta tags and favicon
9. GitHub repo created and code pushed
10. Vercel deployment live
11. Stripe payment config file created (`src/config/stripe.js`)

## What's Pending / Next Steps

### High Priority
1. **Real product photography** — replace Unsplash placeholder images in `src/data/products.js`
2. **Stripe payments** — connect real Stripe Payment Links or Checkout Sessions
3. **Custom domain** — e.g., `athleiron.com` (purchase and configure in Vercel)

### Medium Priority
4. **Connect GitHub to Vercel** for automatic deploys on every push (currently deploying via CLI)
5. **Email capture integration** — connect newsletter form to Mailchimp/Klaviyo/Formspree
6. **Contact form backend** — currently simulates submission
7. **Reviews system** — add real product reviews

### Growth / Marketing
8. Google Analytics 4 or Plausible setup
9. Meta Pixel for ads
10. Social media content strategy based on competitor analysis
11. Influencer outreach plan

## Key Files to Know

| File | Purpose |
|------|---------|
| `src/data/products.js` | All product data, prices, images |
| `src/context/CartContext.jsx` | Cart state management |
| `src/config/stripe.js` | Stripe Payment Links config |
| `src/index.css` | Tailwind theme + brand colours |
| `src/App.jsx` | Page routes |
| `vercel.json` | Vercel SPA routing config |
| `public/_redirects` | Netlify SPA routing fallback |

## How to Resume Work

```bash
cd C:/Users/HP/athleiron-web
npm run dev          # local development
npm run build        # production build
npm run preview      # preview production build
vercel --prod        # manual deploy to Vercel
git push origin master   # push changes (deploys automatically if Git is linked)
```

## Notes

- The checkout currently collects order details and shows a confirmation. It does **not** process real payments yet.
- Cart state is stored in React Context (in-memory). It resets on page refresh.
- Product images are from Unsplash and should be replaced before marketing the site.
- Vercel CLI is authenticated on this machine; deployments can be done via `vercel --prod`.

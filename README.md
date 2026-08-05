# ATHLEIRON Website

A premium UK sportswear brand website built with React, Vite, and Tailwind CSS.

## Live Site

**Production URL:** https://athleiron-web.vercel.app

Local preview: `http://localhost:4173/`

## Tech Stack

- **Framework:** React 19 + Vite 6
- **Styling:** Tailwind CSS 4
- **Routing:** React Router 7
- **Icons:** Lucide React + inline SVGs
- **State:** React Context (cart)

## Project Structure

```
athleiron-web/
├── public/              # Static assets (favicon, logo, redirects)
├── src/
│   ├── components/      # Reusable UI components
│   ├── context/         # Cart context
│   ├── data/            # Product data
│   ├── pages/           # Route pages (Home, Shop, Product, About, Contact, Checkout)
│   ├── config/          # Stripe payment links config
│   ├── App.jsx          # Router layout
│   └── main.jsx         # Entry point
├── dist/                # Production build
├── index.html
└── vite.config.js
```

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## Deployment

### Option 1: Vercel (Recommended)

```bash
npm i -g vercel
vercel login
vercel --prod
```

A `vercel.json` is included for SPA routing.

### Option 2: Netlify

Drag and drop the `dist/` folder into Netlify, or use the Netlify CLI. A `public/_redirects` file is included for SPA routing.

### Option 3: Other Static Hosts

Upload the contents of the `dist/` folder to any static host. Ensure all routes serve `index.html` for client-side routing.

## Enabling Real Payments

The checkout flow currently collects customer and order details, then shows an "order received" confirmation. To accept real payments:

### Option A: Stripe Payment Links (simplest, no backend)
1. Create a Stripe account at [stripe.com](https://stripe.com).
2. Create a Stripe Payment Link for each product in your Stripe Dashboard.
3. Paste each link into `src/config/stripe.js`.
4. Set `enabled: true` in `src/config/stripe.js`.
5. Add "Buy Now" buttons that redirect to the product's Stripe Payment Link.

### Option B: Stripe Checkout Sessions (full cart checkout)
1. Set up a small backend (Node.js/Express, Next.js API routes, or serverless function).
2. Create a Checkout Session from the cart items.
3. Redirect the customer to Stripe's hosted checkout page.

### Option C: Manual invoice
The current flow collects the order and shows a confirmation. You can manually email customers a Stripe/PayPal invoice until automated payments are connected.

## Brand Assets

- Logo: `public/logo-icon.svg`
- Favicon: `public/favicon.svg`
- Brand colors and typography are defined in `src/index.css`.

## Next Steps

1. Replace Unsplash placeholder images with professional product photography.
2. Connect real payment processing (Stripe).
3. Add a backend for order management and inventory.
4. Set up analytics (Google Analytics 4 or Plausible).
5. Connect email marketing (Klaviyo, Mailchimp, etc.).

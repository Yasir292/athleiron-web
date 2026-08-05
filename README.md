# ATHLEIRON Website

A premium UK sportswear brand website built with React, Vite, and Tailwind CSS.

## Live Preview

The site is currently running locally at `http://localhost:4173/`.

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
│   ├── pages/           # Route pages (Home, Shop, Product, About, Contact)
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

The cart currently simulates checkout. To accept real payments:

1. Create a Stripe account at [stripe.com](https://stripe.com).
2. Create Stripe Payment Links for each product.
3. Update the cart checkout button in `src/components/CartDrawer.jsx` to redirect to a Stripe Payment Link or Checkout Session.

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

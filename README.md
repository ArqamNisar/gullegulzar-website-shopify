# 🏛️ Gull e Gulzar Home Trolley — Premium Shopify 2.0 Theme

A bespoke, mobile-optimized, light luxury Shopify 2.0 theme developed specifically for **Gull e Gulzar Home Trolley**, currently featuring the Mini Coffee Table.

[![GitHub Repo](https://img.shields.io/badge/GitHub-gullegulzar--website--shopify-blue?logo=github)](https://github.com/ArqamNisar/gullegulzar-website-shopify)
[![Shopify 2.0](https://img.shields.io/badge/Shopify-Online%20Store%202.0-green?logo=shopify)](https://shopify.dev/docs/themes)
[![Mobile Responsive](https://img.shields.io/badge/Design-100%25%20Mobile%20Compliant-gold)](#)

---

## 🌟 Highlights & Aesthetics

- **Light Luxury Color Palette**:
  - Main Background: `#FAF8F5` (Warm Cream / Pearl Alabaster)
  - Card & Surface: `#FFFFFF` (Pure Crisp White)
  - Accent Color: `#B89053` (Warm Champagne Gold / Brushed Brass)
  - Text: `#1C1917` (Deep Charcoal Black) & `#44403C` (Stone Gray)
  - WhatsApp Accent: `#25D366` (High-conversion WhatsApp Emerald Green)
- **Stylist Luxury Icons**: Custom SVG icons for carts, search, stars, verified badges, artisanal craft, custom fabrication, and delivery trucks.
- **Mobile-First Responsive Layout**: Smooth mobile drawer menu, sticky header, touch-friendly product cards, and floating contact triggers.

---

## 📱 WhatsApp Integration (Click-to-Chat Direct)

All contact numbers on the website automatically redirect users to WhatsApp:
- **Primary Orders & WhatsApp**: `+923204967079`  
  👉 Direct Link: [`https://wa.me/923204967079`](https://wa.me/923204967079)
- **Support & Sales Line**: `+923004055876`  
  👉 Direct Link: [`https://wa.me/923004055876`](https://wa.me/923004055876)
- **Floating WhatsApp Concierge Widget**: Persistent interactive bottom-right button with pulse animation and greeting card leading directly to WhatsApp `+923204967079`.
- **Product Card / Detail WhatsApp Inquiry**: Every product includes an instant *"Order via WhatsApp"* button that pre-populates the product title and details for instant confirmation.

---

## 🪑 Current Product

The storefront currently features one confirmed product: the **Mini Coffee Table**, priced at **Rs. 5,500 PKR** in the standalone preview.

---

## 📄 Multi-Page Architecture

The project contains fully modular Shopify 2.0 sections and dedicated standalone multi-page views:

- **Home Page** ([`index.html`](./index.html) / [`templates/index.json`](./templates/index.json)):
  - Announcement bar with direct phone/WhatsApp links
  - Sticky glassmorphic header with navigation and mobile drawer
  - Hero banner with headline, CTA buttons, and trust highlights
  - A featured Mini Coffee Table product card
  - Furniture quality highlights and a zoomable lifestyle photo of the table
  - Luxury footer with quick links, policies, and contact cards

- **Catalog & Collections Page** ([`collections.html`](./collections.html) / [`templates/collection.json`](./templates/collection.json)):
  - A single Mini Coffee Table product listing

- **Dedicated Product Page** ([`product-mini-coffee.html`](./product-mini-coffee.html) / [`sections/main-product.liquid`](./sections/main-product.liquid)):
  - Two-photo gallery with zoom and thumbnail switching
  - Confirmed standalone price of Rs. 5,500, quantity selector, cart action, and WhatsApp ordering
  - Customer review summary, submission handoff to WhatsApp, and review blocks for publishing moderated feedback
  - Shopify product form with native Add to Cart and Buy Now actions when the Shopify product exists

- **Dedicated Contact Us Page** ([`contact.html`](./contact.html) / [`templates/page.contact.json`](./templates/page.contact.json)):
  - Direct WhatsApp click cards for `+923204967079` and `+923004055876`
  - Inquiry form & workshop hours

- **Shopping Cart** ([`cart.html`](./cart.html) / [`templates/cart.json`](./templates/cart.json)) & **Slide-in Cart Drawer**:
  - Standalone preview cart with a subtotal and WhatsApp order handoff; Shopify uses its native cart and checkout.

- **Dedicated Policy Pages**:
  - Shipping & Delivery Policy ([`shipping-policy.html`](./shipping-policy.html))
  - Refund & Return Policy ([`refund-policy.html`](./refund-policy.html))
  - Privacy Policy ([`privacy-policy.html`](./privacy-policy.html))
  - Terms of Service ([`terms-of-service.html`](./terms-of-service.html))

---

## 🚀 How to Install on Shopify

### Method 1: Direct ZIP Upload (Quickest)
1. Zip the repository folders (`layout`, `templates`, `sections`, `snippets`, `assets`, `config`, `locales`).
2. Go to your **Shopify Admin** > **Online Store** > **Themes**.
3. Under *Theme library*, click **Add theme** > **Upload zip file**.
4. Click **Publish** once uploaded!

### Method 2: GitHub Integration
1. Go to **Shopify Admin** > **Online Store** > **Themes**.
2. Click **Add theme** > **Connect from GitHub**.
3. Select `ArqamNisar/gullegulzar-website-shopify` and branch `main`.

---

## 🛠️ Customization & Settings

Open Shopify Theme Customizer (`Online Store > Customize`):
- Customize primary and secondary WhatsApp phone numbers anytime under **Brand & WhatsApp Settings**.
- Adjust light colors (Cream background, Champagne gold accents, typography colors).
- Update typography and corner radiuses.

### Home Page Preview

The home page has a full-width hero banner, two scrolling announcement strips, a horizontally scrollable featured-product rail, craftsmanship highlights, and a single interactive product image that magnifies under the pointer (or on tap). A floating WhatsApp icon opens a direct chat, and the footer groups the store introduction, main menu, policies, and support information. The provided logo and banner are included in `assets/brand-logo.jpg` and `assets/home-hero.jpg`.

To preview the standalone home page locally, run `python -m http.server 8000` from the repository root and open `http://localhost:8000/index.html`. The standalone product page uses the supplied Mini Coffee Table photos and its confirmed Rs. 5,500 price. Before publishing, create the Shopify product with handle `mini-coffee-table` and set its price and product images in Shopify Admin. Update the footer social profile links before publishing.

---

Crafted with ❤️ for **Gull e Gulzar Home Trolley**.

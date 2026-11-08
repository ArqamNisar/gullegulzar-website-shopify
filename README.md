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

## 🪑 Current Products

The catalog includes the **Mini Coffee Table** at **Rs. 6,000 PKR** (compare-at price Rs. 7,000), four **Console Tables** at **Rs. 13,000 PKR** each (compare-at price Rs. 15,000), and four **Center Tables**:
- **Fluted Pillar Marble Center Table (CT1)**: **Rs. 18,500 PKR** (compare-at price Rs. 21,500)
- **Stepped Multi-Tier Marble Center Table (CT2)**: **Rs. 16,500 PKR** (compare-at price Rs. 19,000)
- **Oval Ribbed Cage Center Table (CT3)**: **Rs. 16,500 PKR** (compare-at price Rs. 19,000)
- **Geometric Spiral Center Table (CT4)**: **Rs. 10,500 PKR** (compare-at price Rs. 12,500)

The center tables use individual Shopify template suffixes (`ct1`, `ct2`, `ct3`, `ct4`) with custom customer reviews pre-configured in their template blocks. To create or update products in Shopify Admin, import [`product-import.csv`](./product-import.csv) from **Products > Import**. When updating existing products, enable Shopify's option to overwrite products with matching handles so the current prices and image order are applied. Product rows in the CSV are marked `active` and `TRUE` for publication on the Online Store. The CSV image links point to this repository's `main` branch. A theme ZIP does not import catalog products, update their prices/media, or publish them to the Online Store sales channel.

---

## 📄 Multi-Page Architecture

The project contains fully modular Shopify 2.0 sections and dedicated standalone multi-page views:

- **Home Page** ([`index.html`](./index.html) / [`templates/index.json`](./templates/index.json)):
  - Announcement bar with direct phone/WhatsApp links
  - Sticky glassmorphic header with navigation and mobile drawer
  - Hero banner with headline, CTA buttons, and trust highlights
  - Featured products including the Mini Coffee Table, four Console Tables, and four Center Tables
  - Furniture quality highlights and a zoomable lifestyle photo of the table
  - Luxury footer with quick links, policies, and contact cards

- **Catalog & Collections Page** ([`collections.html`](./collections.html) / [`templates/collection.json`](./templates/collection.json)):
  - The Mini Coffee Table, four Console Table designs, and four Center Table models, each with a rich product listing

- **Product Pages** ([`product-mini-coffee.html`](./product-mini-coffee.html), [`product-ct1.html`](./product-ct1.html), [`product-ct2.html`](./product-ct2.html), [`product-ct3.html`](./product-ct3.html), [`product-ct4.html`](./product-ct4.html), [`console-product.html`](./console-product.html) / [`sections/main-product.liquid`](./sections/main-product.liquid)):
  - Two-photo gallery with zoom and thumbnail switching
  - Use the Mini Coffee Table product page as the design and content reference for every new product page
  - Use the product-in-use or styled photo as the primary image when available; keep clean product-only photos as secondary images
  - Premium product layout with stock status, trust benefits, quantity selector, cart action, Buy Now, and sticky cart bar
  - Bundle selector with totals calculated from the product price
  - Delivery timeline, product-specific specifications, delivery and care accordions, and a 5% exit offer
  - Bundle totals use the listed per-piece price; no bundle discount is applied unless configured by the store
  - Customer review form and summary; only display reviews supplied for that product rather than reusing another product's feedback
  - Customer review submission handoff to WhatsApp and review blocks for publishing moderated feedback
  - The Mini Coffee Table uses the `mini-coffee` Shopify template suffix for its supplied reviews; Center Tables use `ct1`, `ct2`, `ct3`, and `ct4` suffixes with bespoke reviews
  - Shopify product form with native Add to Cart and Buy Now actions when the Shopify product exists
  - Product reference data is included in [`assets/products.json`](./assets/products.json); Shopify theme ZIP uploads do not create catalog products
  - Product cards and galleries for all included product handles use the theme's bundled images, so their display does not depend on Shopify product media URLs resolving
  - Console Table Shopify product pages use the `console` template suffix; their imported handles create the individual `/products/...` URLs
  - The standalone collection links to dedicated product pages ([`product-ct1.html`](./product-ct1.html), [`product-ct2.html`](./product-ct2.html), [`product-ct3.html`](./product-ct3.html), [`product-ct4.html`](./product-ct4.html)) and [`console-product.html`](./console-product.html) for local product previews

- **Dedicated Contact Us Page** ([`contact.html`](./contact.html) / [`templates/page.contact.json`](./templates/page.contact.json)):
  - Direct WhatsApp click cards for `+923204967079` and `+923004055876`
  - Inquiry form & workshop hours

- **Shopping Cart** ([`cart.html`](./cart.html) / [`templates/cart.json`](./templates/cart.json)) & **Slide-in Cart Drawer**:
  - Plus/minus quantity controls, remove actions, live preview subtotal, and WhatsApp order handoff; Shopify uses its native cart and checkout.

- **Dedicated Policy Pages**:
  - Shipping & Delivery Policy ([`shipping-policy.html`](./shipping-policy.html))
  - Refund & Return Policy ([`refund-policy.html`](./refund-policy.html))
  - Privacy Policy ([`privacy-policy.html`](./privacy-policy.html))
  - Terms of Service ([`terms-of-service.html`](./terms-of-service.html))
  - Legal Notice ([`legal-notice.html`](./legal-notice.html) / [`templates/page.legal-notice.json`](./templates/page.legal-notice.json))
  - Contact Information ([`contact-information.html`](./contact-information.html)); Contact Us form ([`contact.html`](./contact.html))
  - Create a Shopify page titled **Legal Notice** with the handle `legal-notice`, then assign the `page.legal-notice` template in Shopify Admin. The theme can render the page template only after this Page record exists; a 404-template fallback cannot create the page or change Shopify's 404 response.

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

To preview the standalone home page locally, run `python -m http.server 8000` from the repository root and open `http://localhost:8000/index.html`. The standalone product page uses the supplied Mini Coffee Table photos and its Rs. 6,000 selling price with a Rs. 7,000 compare-at price. Before publishing, create the Shopify product with handle `mini-coffee-table` and set its price and product images in Shopify Admin. Update the footer social profile links before publishing.

---

Crafted with ❤️ for **Gull e Gulzar Home Trolley**.

document.querySelector('[data-store-header]')?.insertAdjacentHTML('beforebegin', `
  <div class="announcement-bar" role="region" aria-label="Store announcements">
    <div class="ticker-track">
      <div class="ticker-group">
        <span>Gull e Gulzar Home Trolley</span><span aria-hidden="true">✦</span>
        <span>Free Shipping Across Pakistan</span><span aria-hidden="true">✦</span>
        <span>11.11 Sale Coming Soon</span><span aria-hidden="true">✦</span>
      </div>
      <div class="ticker-group" aria-hidden="true">
        <span>Gull e Gulzar Home Trolley</span><span>✦</span>
        <span>Free Shipping Across Pakistan</span><span>✦</span>
        <span>11.11 Sale Coming Soon</span><span>✦</span>
      </div>
    </div>
  </div>
  <header class="site-header" role="banner">
    <div class="header-inner">
      <button class="mobile-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <nav class="header-nav" aria-label="Main navigation">
        <a class="nav-link" href="index.html">Home</a>
        <a class="nav-link" href="collections.html">Collections</a>
        <a class="nav-link" href="contact.html">Contact</a>
      </nav>
      <a class="header-brand" href="index.html" aria-label="Gull e Gulzar Home Trolley home">
        <img src="assets/brand-logo.jpg" alt="Gull e Gulzar Home Trolley" width="120" height="120">
      </a>
      <div class="header-actions">
        <a class="header-action-btn" href="search.html" aria-label="Search products">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path></svg>
        </a>
        <a class="header-action-btn" href="cart.html" aria-label="Shopping cart">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 1.9-1.4L22 8H6"></path><circle cx="10" cy="20" r="1"></circle><circle cx="18" cy="20" r="1"></circle></svg>
        </a>
      </div>
    </div>
  </header>
  <div class="mobile-drawer" role="dialog" aria-modal="true" aria-label="Navigation menu">
    <div class="mobile-drawer-header">
      <img src="assets/brand-logo.jpg" alt="Gull e Gulzar Home Trolley" width="100" height="100">
      <button class="mobile-drawer-close" type="button" aria-label="Close navigation menu">×</button>
    </div>
    <div class="mobile-drawer-body">
      <nav class="mobile-nav-list">
        <a class="mobile-nav-link" href="index.html">Home</a>
        <a class="mobile-nav-link" href="collections.html">Explore Collections</a>
        <a class="mobile-nav-link" href="product-tea-trolley.html">Tea Trolleys</a>
        <a class="mobile-nav-link" href="product-coffee.html">Coffee Tables</a>
        <a class="mobile-nav-link" href="product-nesting-set.html">Nesting Sets</a>
        <a class="mobile-nav-link" href="contact.html">Contact Us</a>
        <a class="mobile-nav-link" href="shipping-policy.html">Shipping Policy</a>
        <a class="mobile-nav-link" href="refund-policy.html">Return &amp; Refund Policy</a>
        <a class="mobile-nav-link" href="privacy-policy.html">Privacy Policy</a>
        <a class="mobile-nav-link" href="terms-of-service.html">Terms &amp; Conditions</a>
      </nav>
    </div>
  </div>
  <div class="mobile-drawer-overlay"></div>
`);

document.querySelector('[data-store-footer]')?.insertAdjacentHTML('beforebegin', `
  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-column footer-about">
          <h2>About us</h2>
          <p class="footer-desc">Gull e Gulzar Home Trolley offers elegant, thoughtfully crafted furniture to bring comfort and timeless style to your home. Discover beautiful tea trolleys, tables, and furniture made with care.</p>
          <p class="footer-about-closing">Discover your perfect piece and make every moment count with <strong>Gull e Gulzar Home Trolley.</strong></p>
          <div class="footer-social-links" aria-label="Social media">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="18" cy="6" r="0.8" class="social-fill"></circle></svg></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v5h4v-5h3l1-4h-4V9a1 1 0 0 1 1-1z"></path></svg></a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3v11.2a4 4 0 1 1-3-3.9V7.2a8 8 0 1 0 7 7.9V9.4a9 9 0 0 0 4 1V6.8A5 5 0 0 1 17 3h-3z"></path></svg></a>
          </div>
        </div>
        <div class="footer-column">
          <h2>Main Menu</h2>
          <ul class="footer-links">
            <li><a href="index.html" class="footer-link">Home</a></li>
            <li><a href="collections.html" class="footer-link">Featured Collection</a></li>
            <li><a href="collections.html" class="footer-link">All Collections</a></li>
            <li><a href="contact.html" class="footer-link">Contact</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h2>Policy</h2>
          <ul class="footer-links">
            <li><a href="search.html" class="footer-link">Search</a></li>
            <li><a href="terms-of-service.html" class="footer-link">Terms of Service</a></li>
            <li><a href="shipping-policy.html" class="footer-link">Shipping Policy</a></li>
            <li><a href="refund-policy.html" class="footer-link">Refund Policy</a></li>
            <li><a href="privacy-policy.html" class="footer-link">Privacy Policy</a></li>
            <li><a href="terms-of-service.html" class="footer-link">Legal Notice</a></li>
            <li><a href="contact.html" class="footer-link">Contact Information</a></li>
          </ul>
        </div>
        <div class="footer-column footer-help">
          <h2>Need Help?</h2>
          <p class="footer-desc">We are happy to help and assist you.</p>
          <p class="footer-help-detail"><strong>Timing:</strong> 24/7 Support</p>
          <a class="footer-link" href="contact.html">Contact Us</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; ${new Date().getFullYear()} Gull e Gulzar Home Trolley. All rights reserved.</span>
        <span>Made for beautiful living.</span>
      </div>
    </div>
  </footer>
  <div class="floating-whatsapp-widget">
    <a class="floating-whatsapp-btn" href="https://wa.me/923204967079?text=Hello%20Gull%20e%20Gulzar%20Home%20Trolley%2C%20I%20would%20like%20to%20inquire%20about%20your%20products." target="_blank" rel="noopener noreferrer" aria-label="Open WhatsApp chat with Gull e Gulzar Home Trolley">
      <span class="whatsapp-pulse-ring" aria-hidden="true"></span>
      <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.5a12.3 12.3 0 0 0-10.6 18.5L4 28l6.2-1.6A12.4 12.4 0 1 0 16 3.5Z"></path><path d="M12.1 10.1c-.3-.7-.6-.7-.9-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.5 1.4-1.5 3.4s1.5 3.9 1.7 4.2c.2.3 2.9 4.6 7.1 6.2 3.5 1.4 4.2 1.1 4.9 1 .8-.1 2.4-1 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.8-.5l-2.7-1.3c-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.6-.2.3-.5.3-.9.1a10.7 10.7 0 0 1-3.2-2 12 12 0 0 1-2.2-2.8c-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.7.1-.3 0-.5 0-.7Z"></path></svg>
    </a>
  </div>
`);

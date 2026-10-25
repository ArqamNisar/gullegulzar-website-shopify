/**
 * Gull e Gulzar Home Trolley - Theme JavaScript
 * Interactive controls, Mobile navigation, WhatsApp bindings, FAQs, Gallery
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileDrawer();
  initWhatsAppFloating();
  initFAQAccordion();
  initProductGallery();
  initWhatsAppPhoneLinks();
});

/* --------------------------------------------------------------------------
   Header Scroll Behavior
   -------------------------------------------------------------------------- */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
}

/* --------------------------------------------------------------------------
   Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.mobile-drawer-overlay');
  const closeBtn = document.querySelector('.mobile-drawer-close');

  if (!toggleBtn || !drawer || !overlay) return;

  const openDrawer = () => {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeDrawer();
    }
  });
}

/* --------------------------------------------------------------------------
   Floating WhatsApp Widget & Interactive Popup
   -------------------------------------------------------------------------- */
function initWhatsAppFloating() {
  const widgetBtn = document.querySelector('.floating-whatsapp-btn');
  const popup = document.querySelector('.whatsapp-popup-card');
  const popupClose = document.querySelector('.whatsapp-popup-close');

  if (!widgetBtn || !popup) return;

  widgetBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    popup.classList.toggle('active');
  });

  if (popupClose) {
    popupClose.addEventListener('click', (e) => {
      e.stopPropagation();
      popup.classList.remove('active');
    });
  }

  document.addEventListener('click', (e) => {
    if (!popup.contains(e.target) && !widgetBtn.contains(e.target)) {
      popup.classList.remove('active');
    }
  });
}

/* --------------------------------------------------------------------------
   Interactive FAQ Accordion
   -------------------------------------------------------------------------- */
function initFAQAccordion() {
  const faqHeaders = document.querySelectorAll('.faq-question');

  faqHeaders.forEach((header) => {
    header.addEventListener('click', () => {
      const parent = header.closest('.faq-card');
      const isActive = parent.classList.contains('active');

      // Close siblings in same container
      const container = parent.parentElement;
      container.querySelectorAll('.faq-card').forEach((card) => {
        card.classList.remove('active');
      });

      if (!isActive) {
        parent.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Product Gallery Thumbnails
   -------------------------------------------------------------------------- */
function initProductGallery() {
  const thumbs = document.querySelectorAll('.product-thumb-item');
  const mainImage = document.querySelector('#product-main-image');

  if (!thumbs.length || !mainImage) return;

  thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      thumbs.forEach((t) => t.classList.remove('active'));
      thumb.classList.add('active');

      const newSrc = thumb.getAttribute('data-image-src');
      if (newSrc) {
        mainImage.src = newSrc;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   WhatsApp Direct Redirection for Contact Numbers
   Ensures that clicking on ANY contact number (+923204967079 or +923004055876)
   redirects to WhatsApp directly
   -------------------------------------------------------------------------- */
function initWhatsAppPhoneLinks() {
  const phoneLinks = document.querySelectorAll('a[href^="tel:"], a[href*="923204967079"], a[href*="923004055876"], .whatsapp-redirect');

  phoneLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const text = link.textContent || link.getAttribute('href');
      let targetNumber = '923204967079'; // default primary

      if (text.includes('923004055876') || text.includes('03004055876') || text.includes('3004055876')) {
        targetNumber = '923004055876';
      } else if (text.includes('923204967079') || text.includes('03204967079') || text.includes('3204967079')) {
        targetNumber = '923204967079';
      }

      const waUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent('Hello Gull e Gulzar Home Trolley, I would like to inquire about your products.')}`;
      link.setAttribute('href', waUrl);
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    });
  });
}

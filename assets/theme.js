/**
 * Gull e Gulzar Home Trolley - Theme JavaScript
 * Interactive controls, Multi-page Cart Drawer, Variant Chips, Product Gallery, FAQs & WhatsApp routing
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileDrawer();
  initFAQAccordion();
  initProductGallery();
  initVariantChips();
  initCartDrawer();
  initWhatsAppPhoneLinks();
  initHorizontalCarousels();
  initZoomableImages();
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

  let pageScrollY = 0;
  let originalBodyStyles = null;
  let originalRootOverflow = '';

  const openDrawer = () => {
    if (drawer.classList.contains('active')) return;

    pageScrollY = window.scrollY;
    originalBodyStyles = {
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      right: document.body.style.right,
      width: document.body.style.width,
      overflow: document.body.style.overflow
    };
    originalRootOverflow = document.documentElement.style.overflow;

    document.documentElement.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${pageScrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    drawer.classList.add('active');
    overlay.classList.add('active');
    toggleBtn.setAttribute('aria-expanded', 'true');
  };

  const closeDrawer = () => {
    if (!drawer.classList.contains('active')) return;

    drawer.classList.remove('active');
    overlay.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');

    if (originalBodyStyles) {
      Object.entries(originalBodyStyles).forEach(([property, value]) => {
        document.body.style[property] = value;
      });
    }
    document.documentElement.style.overflow = originalRootOverflow;
    const originalScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, pageScrollY);
    document.documentElement.style.scrollBehavior = originalScrollBehavior;
    originalBodyStyles = null;
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
   Horizontal content carousels
   -------------------------------------------------------------------------- */
function initHorizontalCarousels() {
  document.querySelectorAll('[data-carousel-prev], [data-carousel-next]').forEach((button) => {
    button.addEventListener('click', () => {
      const section = button.closest('section');
      const carousel = section?.querySelector('[data-horizontal-carousel]');
      if (!carousel) return;

      const direction = button.hasAttribute('data-carousel-next') ? 1 : -1;
      carousel.scrollBy({ left: direction * carousel.clientWidth * 0.8, behavior: 'smooth' });
    });
  });
}

/* --------------------------------------------------------------------------
   Product image magnifier
   -------------------------------------------------------------------------- */
function initZoomableImages() {
  document.querySelectorAll('[data-zoom-image]').forEach((zoomable) => {
    const setZoomOrigin = (event) => {
      const bounds = zoomable.getBoundingClientRect();
      const x = Math.max(0, Math.min(100, ((event.clientX - bounds.left) / bounds.width) * 100));
      const y = Math.max(0, Math.min(100, ((event.clientY - bounds.top) / bounds.height) * 100));

      zoomable.style.setProperty('--zoom-x', `${x}%`);
      zoomable.style.setProperty('--zoom-y', `${y}%`);
    };

    zoomable.addEventListener('pointermove', (event) => {
      if (event.pointerType !== 'mouse') return;

      setZoomOrigin(event);
      zoomable.classList.add('is-zoomed');
      zoomable.setAttribute('aria-pressed', 'true');
    });

    zoomable.addEventListener('pointerleave', (event) => {
      if (event.pointerType !== 'mouse') return;

      zoomable.classList.remove('is-zoomed');
      zoomable.setAttribute('aria-pressed', 'false');
    });

    zoomable.addEventListener('click', (event) => {
      if (event.detail === 0 || !window.matchMedia('(hover: none)').matches) return;

      setZoomOrigin(event);
      const isZoomed = zoomable.classList.toggle('is-zoomed');
      zoomable.setAttribute('aria-pressed', String(isZoomed));
    });

    zoomable.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;

      event.preventDefault();
      const isZoomed = zoomable.classList.toggle('is-zoomed');
      zoomable.setAttribute('aria-pressed', String(isZoomed));
    });
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
   Variant Selection Chips & Quantity Controls
   -------------------------------------------------------------------------- */
function initVariantChips() {
  document.querySelectorAll('.variant-chips').forEach((group) => {
    const chips = group.querySelectorAll('.variant-chip');
    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        chips.forEach((c) => c.classList.remove('active'));
        chip.classList.add('active');
      });
    });
  });

  const qtyInput = document.querySelector('#Quantity');
  const minusBtn = document.querySelector('#qty-decrease');
  const plusBtn = document.querySelector('#qty-increase');

  if (qtyInput && minusBtn && plusBtn) {
    minusBtn.addEventListener('click', () => {
      let val = parseInt(qtyInput.value) || 1;
      if (val > 1) qtyInput.value = val - 1;
    });

    plusBtn.addEventListener('click', () => {
      let val = parseInt(qtyInput.value) || 1;
      qtyInput.value = val + 1;
    });
  }
}

/* --------------------------------------------------------------------------
   Interactive Cart Drawer System
   -------------------------------------------------------------------------- */
function initCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-drawer-overlay');
  const closeBtn = document.getElementById('cart-drawer-close');
  const continueBtn = document.getElementById('cart-continue-btn');
  const cartTriggerBtns = document.querySelectorAll('.header-action-btn[title="Cart"], a[href="/cart"], .js-open-cart');

  let cart = JSON.parse(localStorage.getItem('gg_cart') || '[]');

  const updateCartUI = () => {
    const countElements = document.querySelectorAll('.badge-count, #cart-drawer-count');
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    countElements.forEach((el) => {
      el.textContent = totalItems;
    });

    const itemsContainer = document.getElementById('cart-drawer-items');
    const footer = document.getElementById('cart-drawer-footer');
    const subtotalEl = document.getElementById('cart-drawer-subtotal');

    if (!itemsContainer) return;

    if (cart.length === 0) {
      itemsContainer.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem;">
          <h4 style="font-size: 1.2rem; margin-bottom: 0.5rem;">Your Cart is Empty</h4>
          <p style="color: var(--color-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">Explore our signature tea trolleys and designer tables.</p>
          <a href="collections.html" class="btn btn-outline btn-sm">Explore Catalog</a>
        </div>
      `;
      if (footer) footer.style.display = 'none';
      return;
    }

    if (footer) footer.style.display = 'block';

    let subtotal = 0;
    itemsContainer.innerHTML = cart
      .map((item, idx) => {
        const priceNum = parseInt(item.price.replace(/[^0-9]/g, '')) || 0;
        subtotal += priceNum * (item.quantity || 1);

        return `
          <div class="cart-drawer-item">
            <img src="${item.image}" alt="${item.title}" class="cart-drawer-item-img">
            <div class="cart-drawer-item-info">
              <h5 class="cart-drawer-item-title">${item.title}</h5>
              <div class="cart-drawer-item-variant">${item.variant || 'Standard Custom Finish'}</div>
              <div class="cart-drawer-item-price">${item.price} × ${item.quantity}</div>
            </div>
            <button type="button" class="js-remove-cart-item" data-index="${idx}" style="color: #EF4444; font-size: 0.8rem; font-weight: 600; padding: 4px;">Remove</button>
          </div>
        `;
      })
      .join('');

    if (subtotalEl) {
      subtotalEl.textContent = 'Rs. ' + subtotal.toLocaleString();
    }

    // Attach remove handlers
    itemsContainer.querySelectorAll('.js-remove-cart-item').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const index = parseInt(e.target.dataset.index);
        cart.splice(index, 1);
        localStorage.setItem('gg_cart', JSON.stringify(cart));
        updateCartUI();
      });
    });
  };

  const openDrawer = () => {
    if (drawer && overlay) {
      drawer.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeDrawer = () => {
    if (drawer && overlay) {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  cartTriggerBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openDrawer();
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (continueBtn) continueBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  // Handle Add to Cart button on Product Page
  const addToCartBtn = document.getElementById('btn-add-to-cart');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const title = document.querySelector('.product-detail-title')?.textContent || 'Luxury Table';
      const price = document.querySelector('.product-price-current')?.textContent || 'Rs. 24,500';
      const image = document.querySelector('#product-main-image')?.src || '';
      const finish = document.querySelector('.variant-chip.active[data-finish]')?.getAttribute('data-finish') || 'Champagne Gold';
      const surface = document.querySelector('.variant-chip.active[data-surface]')?.getAttribute('data-surface') || 'Tempered Glass';
      const qty = parseInt(document.querySelector('#Quantity')?.value) || 1;

      cart.push({
        title,
        price,
        image,
        variant: `${finish} / ${surface}`,
        quantity: qty
      });

      localStorage.setItem('gg_cart', JSON.stringify(cart));
      updateCartUI();
      openDrawer();
    });
  }

  // Handle Buy Now button
  const buyNowBtn = document.getElementById('btn-buy-now');
  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const title = document.querySelector('.product-detail-title')?.textContent || 'Luxury Table';
      const price = document.querySelector('.product-price-current')?.textContent || 'Rs. 24,500';
      const image = document.querySelector('#product-main-image')?.src || '';
      const finish = document.querySelector('.variant-chip.active[data-finish]')?.getAttribute('data-finish') || 'Champagne Gold';
      const surface = document.querySelector('.variant-chip.active[data-surface]')?.getAttribute('data-surface') || 'Tempered Glass';
      const qty = parseInt(document.querySelector('#Quantity')?.value) || 1;

      cart.push({
        title,
        price,
        image,
        variant: `${finish} / ${surface}`,
        quantity: qty
      });

      localStorage.setItem('gg_cart', JSON.stringify(cart));
      updateCartUI();
      window.location.href = 'cart.html';
    });
  }

  // Handle Quick Add to Cart on Product Cards
  document.querySelectorAll('.js-card-add-to-cart').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const card = btn.closest('.product-card');
      const title = card?.querySelector('.product-title')?.textContent?.trim() || 'Designer Table';
      const price = card?.querySelector('.product-price')?.textContent?.trim() || 'Rs. 24,500';
      const image = card?.querySelector('.product-media img')?.src || '';

      cart.push({
        title,
        price,
        image,
        variant: 'Standard Champagne Gold',
        quantity: 1
      });

      localStorage.setItem('gg_cart', JSON.stringify(cart));
      updateCartUI();
      openDrawer();
    });
  });

  updateCartUI();
}

/* --------------------------------------------------------------------------
   WhatsApp Direct Redirection for Contact Numbers Only
   -------------------------------------------------------------------------- */
function initWhatsAppPhoneLinks() {
  const phoneLinks = document.querySelectorAll('a[href^="tel:"], a[href*="923204967079"], a[href*="923004055876"], .whatsapp-redirect');

  phoneLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const text = link.textContent || link.getAttribute('href');
      let targetNumber = '923204967079';

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

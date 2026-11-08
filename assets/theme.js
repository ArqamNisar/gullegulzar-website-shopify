/**
 * Gull e Gulzar Home Trolley - Theme JavaScript
 * Interactive controls, Multi-page Cart Drawer, Variant Chips, Product Gallery, FAQs & WhatsApp routing
 */

const initializeTheme = () => {
  initHeader();
  initMobileDrawer();
  initFAQAccordion();
  initProductGallery();
  initVariantChips();
  initCartDrawer();
  initShopifyCartQuantityControls();
  initWhatsAppPhoneLinks();
  initHorizontalCarousels();
  initZoomableImages();
  initPreviewContactForm();
  initProductWhatsAppOrder();
  initProductBundles();
  initExitOffer();
  initProductReviewForm();
  initSearchSort();
  initProductStickyBar();
};

initializeTheme();

function parsePriceAmount(value) {
  const match = String(value).match(/\d[\d,]*(?:\.\d+)?/);
  return match ? Number.parseFloat(match[0].replace(/,/g, '')) : 0;
}

function formatPriceAmount(amount) {
  return `Rs. ${Math.round(amount).toLocaleString('en-PK')}`;
}

function getProductCartImage(title, currentImage = '') {
  const productImages = {
    'mini coffee table': 'assets/mini-room.jpg',
    'gold wheel console trolley': 'assets/console-a2.jpg',
    'black top x-frame console table': 'assets/console-b.jpg',
    'sunburst gold console table': 'assets/console-c2.jpg',
    'white top lattice console table': 'assets/console-d.jpg'
  };
  const normalizedTitle = String(title || '').trim().toLocaleLowerCase();
  return productImages[normalizedTitle] || currentImage;
}

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
    });

    zoomable.addEventListener('pointerleave', (event) => {
      if (event.pointerType !== 'mouse') return;

      zoomable.classList.remove('is-zoomed');
    });

    zoomable.addEventListener('click', (event) => {
      if (event.target.closest('button')) return;
      if (event.detail === 0 || !window.matchMedia('(hover: none)').matches) return;

      setZoomOrigin(event);
      zoomable.classList.toggle('is-zoomed');
    });

    zoomable.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;

      event.preventDefault();
      zoomable.classList.toggle('is-zoomed');
    });
  });
}

function initPreviewContactForm() {
  const form = document.querySelector('#preview-contact-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const subject = `Website inquiry from ${formData.get('name')}`;
    const body = [
      `Name: ${formData.get('name')}`,
      `Phone / WhatsApp: ${formData.get('phone')}`,
      `Email: ${formData.get('email')}`,
      '',
      'Message:',
      formData.get('message')
    ].join('\n');

    window.location.href = `mailto:gullegulzarhometrolley@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

function initSearchSort() {
  const sortControl = document.querySelector('[name="sort_by"][form="SearchFiltersForm"]');
  const filterForm = document.querySelector('#SearchFiltersForm');
  if (!sortControl || !filterForm) return;

  sortControl.addEventListener('change', () => filterForm.requestSubmit());
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
  document.querySelectorAll('.product-gallery').forEach((gallery) => {
    const mainView = gallery.querySelector('.product-main-image');
    const mainImage = mainView?.querySelector('#product-main-image');
    const thumbnails = gallery.querySelector('.product-thumbs');
    const previousButton = mainView?.querySelector('[data-gallery-prev]');
    const nextButton = mainView?.querySelector('[data-gallery-next]');
    if (!mainView || !mainImage || !thumbnails) return;

    let activeIndex = 0;
    let swipeStartX = null;
    let ignoreClickUntil = 0;

    const getThumbs = () => [...thumbnails.querySelectorAll('.product-thumb-item')];
    const selectPhoto = (nextIndex) => {
      const thumbs = getThumbs();
      if (!thumbs.length) return;
      activeIndex = (nextIndex + thumbs.length) % thumbs.length;
      const selectedThumb = thumbs[activeIndex];
      const newSrc = selectedThumb.dataset.imageSrc;
      if (newSrc) mainImage.src = newSrc;
      const thumbnailImage = selectedThumb.querySelector('img');
      if (thumbnailImage?.alt) mainImage.alt = thumbnailImage.alt;
      thumbs.forEach((thumb, index) => {
        const selected = index === activeIndex;
        thumb.classList.toggle('active', selected);
        thumb.setAttribute('aria-pressed', String(selected));
      });
      selectedThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      if (previousButton) previousButton.hidden = thumbs.length < 2;
      if (nextButton) nextButton.hidden = thumbs.length < 2;
      mainView.classList.remove('is-zoomed');
    };

    const refreshGallery = () => {
      const thumbs = getThumbs();
      const selectedIndex = thumbs.findIndex((thumb) => thumb.classList.contains('active'));
      activeIndex = selectedIndex < 0 ? 0 : selectedIndex;
      const hasMultiplePhotos = thumbs.length > 1;
      if (previousButton) previousButton.hidden = !hasMultiplePhotos;
      if (nextButton) nextButton.hidden = !hasMultiplePhotos;
    };

    thumbnails.addEventListener('click', (event) => {
      const thumb = event.target.closest('.product-thumb-item');
      if (!thumb || !thumbnails.contains(thumb)) return;
      selectPhoto(getThumbs().indexOf(thumb));
    });
    previousButton?.addEventListener('click', () => selectPhoto(activeIndex - 1));
    nextButton?.addEventListener('click', () => selectPhoto(activeIndex + 1));
    mainView.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      selectPhoto(activeIndex + (event.key === 'ArrowRight' ? 1 : -1));
    });
    mainView.addEventListener('pointerdown', (event) => {
      if (event.pointerType === 'mouse') return;
      swipeStartX = event.clientX;
    });
    mainView.addEventListener('pointerup', (event) => {
      if (swipeStartX === null) return;
      const deltaX = event.clientX - swipeStartX;
      swipeStartX = null;
      if (Math.abs(deltaX) < 40 || getThumbs().length < 2) return;
      ignoreClickUntil = Date.now() + 400;
      selectPhoto(activeIndex + (deltaX < 0 ? 1 : -1));
    });
    mainView.addEventListener('pointercancel', () => { swipeStartX = null; });
    mainView.addEventListener('click', (event) => {
      if (Date.now() < ignoreClickUntil) {
        event.stopImmediatePropagation();
        event.preventDefault();
      }
    }, true);

    new MutationObserver(refreshGallery).observe(thumbnails, { childList: true });
    refreshGallery();
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
      if (val > 1) {
        qtyInput.value = val - 1;
        qtyInput.dispatchEvent(new Event('input', { bubbles: true }));
      }
    });

    plusBtn.addEventListener('click', () => {
      let val = parseInt(qtyInput.value) || 1;
      qtyInput.value = val + 1;
      qtyInput.dispatchEvent(new Event('input', { bubbles: true }));
    });
  }
}

/* --------------------------------------------------------------------------
   Interactive Cart Drawer System
   -------------------------------------------------------------------------- */
function initCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  if (drawer?.hasAttribute('data-shopify-cart-drawer')) return;
  const overlay = document.getElementById('cart-drawer-overlay');
  const closeBtn = document.getElementById('cart-drawer-close');
  const continueBtn = document.getElementById('cart-continue-btn');
  const cartTriggerBtns = document.querySelectorAll('.header-action-btn[title="Cart"], a[href="/cart"], .js-open-cart');

  let cart = JSON.parse(localStorage.getItem('gg_cart') || '[]');
  window.addEventListener('gg-cart-updated', () => {
    cart = JSON.parse(localStorage.getItem('gg_cart') || '[]');
    updateCartUI();
  });

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
          <p style="color: var(--color-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">Take a look at our Mini Coffee Table.</p>
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
        const priceNum = parsePriceAmount(item.price);
        const quantity = Math.max(1, Number.parseInt(item.quantity, 10) || 1);
        subtotal += priceNum * quantity;

        return `
          <div class="cart-drawer-item">
            <img src="${getProductCartImage(item.title, item.image)}" alt="${item.title}" class="cart-drawer-item-img">
            <div class="cart-drawer-item-info">
              <h5 class="cart-drawer-item-title">${item.title}</h5>
              <div class="cart-drawer-item-variant">${item.variant || 'Standard Custom Finish'}</div>
              <div class="cart-drawer-item-price">${formatPriceAmount(priceNum)} each</div>
              <div class="cart-drawer-quantity" aria-label="Quantity controls for ${item.title}">
                <button type="button" class="cart-drawer-quantity-step" data-cart-action="decrease" data-index="${idx}" aria-label="Decrease quantity">−</button>
                <span aria-live="polite">${quantity}</span>
                <button type="button" class="cart-drawer-quantity-step" data-cart-action="increase" data-index="${idx}" aria-label="Increase quantity">+</button>
              </div>
            </div>
            <button type="button" class="js-remove-cart-item" data-index="${idx}" style="color: #EF4444; font-size: 0.8rem; font-weight: 600; padding: 4px;">Remove</button>
          </div>
        `;
      })
      .join('');

    if (subtotalEl) {
      subtotalEl.textContent = formatPriceAmount(subtotal);
    }

    itemsContainer.querySelectorAll('[data-cart-action]').forEach((button) => {
      button.addEventListener('click', (event) => {
        const index = Number.parseInt(event.currentTarget.dataset.index, 10);
        const item = cart[index];
        if (!item) return;
        const direction = event.currentTarget.dataset.cartAction === 'increase' ? 1 : -1;
        item.quantity = Math.max(1, (Number.parseInt(item.quantity, 10) || 1) + direction);
        localStorage.setItem('gg_cart', JSON.stringify(cart));
        updateCartUI();
      });
    });

    // Attach remove handlers
    itemsContainer.querySelectorAll('.js-remove-cart-item').forEach((btn) => {
      btn.addEventListener('click', (event) => {
        const index = Number.parseInt(event.currentTarget.dataset.index, 10);
        if (!Number.isInteger(index) || index < 0 || index >= cart.length) return;
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
  if (addToCartBtn && !addToCartBtn.closest('form[action^="/cart/add"]')) {
    addToCartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const title = document.querySelector('.product-detail-title')?.textContent || 'Luxury Table';
      const price = document.querySelector('.product-price-current')?.textContent || 'Rs. 24,500';
      const image = document.querySelector('#product-main-image')?.src || '';
      const finish = document.querySelector('.variant-chip.active[data-finish]')?.getAttribute('data-finish');
      const surface = document.querySelector('.variant-chip.active[data-surface]')?.getAttribute('data-surface');
      const qty = parseInt(document.querySelector('#Quantity')?.value) || 1;
      const variant = [finish, surface].filter(Boolean).join(' / ') || 'Standard';

      cart.push({
        title,
        price,
        image,
        variant,
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
      const finish = document.querySelector('.variant-chip.active[data-finish]')?.getAttribute('data-finish');
      const surface = document.querySelector('.variant-chip.active[data-surface]')?.getAttribute('data-surface');
      const qty = parseInt(document.querySelector('#Quantity')?.value) || 1;
      const variant = [finish, surface].filter(Boolean).join(' / ') || 'Standard';

      cart.push({
        title,
        price,
        image,
        variant,
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

function initShopifyCartQuantityControls() {
  document.querySelectorAll('[data-shopify-cart-quantity]').forEach((control) => {
    const input = control.querySelector('input[name="updates[]"]');
    const form = control.closest('form');
    const updateButton = form?.querySelector('button[name="update"], input[name="update"]');
    if (!input || !form || !updateButton) return;

    control.querySelectorAll('[data-cart-quantity-decrease], [data-cart-quantity-increase]').forEach((button) => {
      button.addEventListener('click', () => {
        const current = Math.max(1, Number.parseInt(input.value, 10) || 1);
        const direction = button.hasAttribute('data-cart-quantity-increase') ? 1 : -1;
        input.value = String(Math.max(1, current + direction));
        form.requestSubmit(updateButton);
      });
    });

    input.addEventListener('change', () => {
      input.value = String(Math.max(1, Number.parseInt(input.value, 10) || 1));
      form.requestSubmit(updateButton);
    });
  });
}

function initProductWhatsAppOrder() {
  document.querySelectorAll('[data-product-whatsapp]').forEach((orderLink) => {
    orderLink.addEventListener('click', () => {
      const title = document.querySelector('.product-detail-title')?.textContent?.trim() || 'Mini Coffee Table';
      const price = document.querySelector('.product-price-current')?.textContent?.trim() || '';
      const quantity = Math.max(1, parseInt(document.querySelector('#Quantity')?.value, 10) || 1);
      const imageEl = document.querySelector('#product-main-image');
      const imageUrl = imageEl?.src || '';
      const pageUrl = window.location.href;
      const finish = document.querySelector('.variant-chip.active[data-finish]')?.getAttribute('data-finish') || '';
      const surface = document.querySelector('.variant-chip.active[data-surface]')?.getAttribute('data-surface') || '';
      const variant = [finish, surface].filter(Boolean).join(' / ');

      const lines = [
        `Hello Gull e Gulzar Home Trolley! 🛋️`,
        ``,
        `I would like to place an order:`,
        ``,
        `📦 *Product:* ${title}`,
        variant ? `🎨 *Variant:* ${variant}` : null,
        `🔢 *Quantity:* ${quantity}`,
        price ? `💰 *Price:* ${price}` : null,
        ``,
        `🔗 *Product Link:* ${pageUrl}`,
        imageUrl ? `🖼️ *Product Image:* ${imageUrl}` : null,
        ``,
        `Please confirm availability and delivery details. Thank you!`
      ].filter((line) => line !== null).join('\n');

      orderLink.href = `https://wa.me/923204967079?text=${encodeURIComponent(lines)}`;
    });
  });
}

function initProductBundles() {
  const bundleSelector = document.querySelector('[data-product-bundles]');
  const quantityInput = document.querySelector('#Quantity');
  const totalElement = bundleSelector?.querySelector('[data-bundle-total]');
  if (!bundleSelector || !quantityInput || !totalElement) return;

  const options = bundleSelector.querySelectorAll('[data-bundle-qty]');
  const priceElement = document.querySelector('.product-price-current');
  const dataPrice = Number.parseFloat(priceElement?.dataset.unitPrice || '');
  const unitPrice = Number.isFinite(dataPrice) && dataPrice >= 0
    ? dataPrice
    : parsePriceAmount(priceElement?.textContent || '');

  const updateBundle = (quantity) => {
    options.forEach((option) => {
      const selected = Number.parseInt(option.dataset.bundleQty, 10) === quantity;
      option.classList.toggle('active', selected);
      option.setAttribute('aria-pressed', String(selected));
      const optionPrice = option.querySelector('[data-bundle-option-price]');
      if (optionPrice) {
        const optionQuantity = Number.parseInt(option.dataset.bundleQty, 10);
        optionPrice.textContent = formatPriceAmount(unitPrice * optionQuantity);
      }
    });
    totalElement.textContent = formatPriceAmount(unitPrice * quantity);
  };

  options.forEach((option) => {
    option.addEventListener('click', () => {
      const quantity = Number.parseInt(option.dataset.bundleQty, 10);
      if (!Number.isInteger(quantity) || quantity < 1) return;
      quantityInput.value = String(quantity);
      quantityInput.dispatchEvent(new Event('input', { bubbles: true }));
      updateBundle(quantity);
    });
  });

  quantityInput.addEventListener('input', () => {
    const quantity = Math.max(1, Number.parseInt(quantityInput.value, 10) || 1);
    updateBundle(quantity);
  });
  quantityInput.addEventListener('change', () => {
    const quantity = Math.max(1, Number.parseInt(quantityInput.value, 10) || 1);
    quantityInput.value = String(quantity);
    updateBundle(quantity);
  });
  updateBundle(Math.max(1, Number.parseInt(quantityInput.value, 10) || 1));
}

function initExitOffer() {
  const modal = document.querySelector('[data-exit-offer]');
  if (!modal || !window.history?.pushState || typeof modal.showModal !== 'function') return;

  const storageKey = 'gg_product_exit_offer_seen';
  const claimLink = modal.querySelector('[data-exit-offer-claim]');
  const productTitle = document.querySelector('.product-detail-title')?.textContent?.trim() || 'Mini Coffee Table';
  const productPrice = document.querySelector('.product-price-current')?.textContent?.trim() || 'Rs. 6,000';
  if (claimLink) {
    const message = `Hello Gull e Gulzar Home Trolley, I am interested in the 5% offer for ${productTitle} (${productPrice}). Please confirm the discount for my order.`;
    claimLink.href = `https://wa.me/923204967079?text=${encodeURIComponent(message)}`;
  }

  const dismissOffer = () => {
    if (modal.open) modal.close();
    window.history.go(-2);
  };

  modal.querySelectorAll('[data-exit-offer-close]').forEach((button) => {
    button.addEventListener('click', dismissOffer);
  });
  modal.addEventListener('cancel', (event) => {
    event.preventDefault();
    dismissOffer();
  });
  modal.addEventListener('click', (event) => {
    if (event.target === modal) dismissOffer();
  });

  window.history.pushState({ ggExitOfferGuard: true }, '', window.location.href);
  window.addEventListener('popstate', (event) => {
    if (event.state?.ggExitOfferGuard) return;
    if (sessionStorage.getItem(storageKey) === 'shown') return;
    sessionStorage.setItem(storageKey, 'shown');
    window.history.pushState({ ggExitOfferGuard: true }, '', window.location.href);
    modal.showModal();
  });
}

function initProductReviewForm() {
  const form = document.querySelector('[data-review-form]');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const message = [
      'Hello Gull e Gulzar Home Trolley, I would like to submit a customer review.',
      `Product: ${document.querySelector('.product-detail-title')?.textContent?.trim() || 'Mini Coffee Table'}`,
      `Name: ${formData.get('reviewer-name')}`,
      `Rating: ${formData.get('review-rating')} out of 5`,
      `Title: ${formData.get('review-title')}`,
      `Review: ${formData.get('review-content')}`,
      '',
      'Please review my feedback before publishing it.'
    ].join('\n');

    window.location.href = `https://wa.me/923204967079?text=${encodeURIComponent(message)}`;
  });
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

/* --------------------------------------------------------------------------
   Sticky Add-to-Cart Bar
   -------------------------------------------------------------------------- */
function initProductStickyBar() {
  const stickyBar = document.getElementById('product-sticky-bar');
  const purchaseBox = document.querySelector('.product-purchase-box');
  if (!stickyBar || !purchaseBox) return;

  // Keep sticky bar price in sync with main price
  const mainPrice = document.querySelector('.product-price-current');
  const stickyPrice = document.getElementById('sticky-price-display');
  if (mainPrice && stickyPrice) {
    const updateStickyPrice = () => { stickyPrice.textContent = mainPrice.textContent; };
    updateStickyPrice();
    new MutationObserver(updateStickyPrice).observe(mainPrice, {
      childList: true,
      characterData: true,
      subtree: true
    });
  }

  // Show sticky bar once the purchase box scrolls out of view
  const observer = new IntersectionObserver(
    ([entry]) => {
      const isVisible = !entry.isIntersecting;
      stickyBar.classList.toggle('is-visible', isVisible);
      stickyBar.setAttribute('aria-hidden', String(!isVisible));
      document.body.classList.toggle('has-visible-product-sticky', isVisible);
    },
    { threshold: 0, rootMargin: '-80px 0px 0px 0px' }
  );
  observer.observe(purchaseBox);

  // Clicking sticky "Add to Cart" triggers the main button and scrolls up
  const stickyAddBtn = document.getElementById('sticky-add-btn');
  const mainAddBtn = document.getElementById('btn-add-to-cart');
  if (stickyAddBtn && mainAddBtn) {
    stickyAddBtn.addEventListener('click', () => {
      mainAddBtn.click();
      window.scrollTo({
        top: purchaseBox.getBoundingClientRect().top + window.scrollY - 120,
        behavior: 'smooth'
      });
    });
  }
}

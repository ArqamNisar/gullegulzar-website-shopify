async function loadConsoleProduct() {
  const response = await fetch('assets/products.json');
  if (!response.ok) {
    throw new Error(`Could not load product data (${response.status}).`);
  }

  const catalog = await response.json();
  const handle = new URLSearchParams(window.location.search).get('handle');
  const product = catalog.products.find((item) => item.handle === handle);
  if (!product) {
    throw new Error('Product not found. Open the collection and select a product.');
  }

  const title = document.querySelectorAll('[data-console-title]');
  const mainImage = document.querySelector('#product-main-image');
  const thumbnails = document.querySelector('[data-console-thumbs]');
  const price = document.querySelector('#product-price-display');
  const description = document.querySelector('[data-console-description]');
  const specificationDescription = document.querySelector('[data-console-spec-description]');
  const specifications = document.querySelector('[data-console-specifications]');
  const comparePrice = document.querySelector('[data-console-compare]');
  const discount = document.querySelector('[data-console-discount]');
  const stickyImage = document.querySelector('[data-console-sticky-image]');
  const reviewCount = document.querySelector('[data-console-review-count]');
  const reviewSummary = document.querySelector('[data-console-review-summary]');
  const priceWrapper = document.querySelector('[data-console-price-wrapper]');
  const reviewGrid = document.querySelector('.product-review-grid');

  document.title = `${product.title} | Gull e Gulzar Home Trolley`;
  document.querySelector('meta[name="description"]').content = product.description;
  title.forEach((element) => { element.textContent = product.title; });
  description.textContent = product.description;
  price.dataset.unitPrice = product.price;
  price.textContent = `Rs. ${Number(product.price).toLocaleString('en-PK')}`;
  specificationDescription.textContent = product.description;
  specifications.replaceChildren(...product.specifications.map((specification) => {
    const item = document.createElement('li');
    item.textContent = specification;
    return item;
  }));

  const reviews = [
    { name: 'Bilal Tariq (Lahore)', rating: 5, date: 'November 2026', title: 'Magnificent quality & finish', content: `Absolutely delighted with our ${product.title}. The metal structure is solid and the marble surface is rich and elegant. Arrived in perfect packaging.` },
    { name: 'Nida Rehman (Karachi)', rating: 5, date: 'November 2026', title: 'Elevated our space completely', content: 'Looks straight out of a luxury interior magazine. Shipped safely to Karachi with no scratches.' },
    { name: 'Kashif Mehmood (Islamabad)', rating: 5, date: 'October 2026', title: 'Top-tier craftsmanship', content: 'Very sturdy, perfectly leveled, and the finish is exquisite. Excellent value for money.' },
    { name: 'Sadia Farhan (Rawalpindi)', rating: 4, date: 'October 2026', title: 'Elegant and durable', content: 'Fits wonderfully in our home. Easy to clean and looks very modern.' },
    { name: 'Waseem Akram (Faisalabad)', rating: 5, date: 'October 2026', title: 'Highly recommended', content: 'Order process on WhatsApp was seamless and delivery was right on time.' },
    { name: 'Anum Jahangir (Multan)', rating: 5, date: 'September 2026', title: 'Stunning centerpiece', content: 'Every guest who visits our home compliments this table. Truly impressive craftsmanship.' }
  ];

  if (reviewCount) {
    reviewCount.textContent = '4.9 out of 5 · 6 customer reviews';
  }
  if (reviewSummary) {
    reviewSummary.innerHTML = '<strong>4.9</strong><span class="product-rating-stars" aria-label="4.9 out of 5 stars">★★★★★</span><span>6 reviews</span>';
  }
  if (reviewGrid) {
    reviewGrid.replaceChildren(...reviews.map(r => {
      const art = document.createElement('article');
      art.className = 'product-review-card';
      art.innerHTML = `
        <div class="product-review-card-top">
          <span class="product-rating-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</span>
          <time>${r.date}</time>
        </div>
        <h3>${r.title}</h3>
        <p>${r.content}</p>
        <span class="product-review-author">${r.name}</span>
      `;
      return art;
    }));
  }

  stickyImage.src = `assets/${product.images[0]}`;
  stickyImage.alt = product.title;

  const compareAtPrice = Number(product.compare_at_price || 0);
  if (compareAtPrice > Number(product.price)) {
    const savings = Math.round(((compareAtPrice - Number(product.price)) / compareAtPrice) * 100);
    comparePrice.textContent = `Rs. ${compareAtPrice.toLocaleString('en-PK')}`;
    comparePrice.hidden = false;
    discount.textContent = `-${savings}% OFF`;
    discount.hidden = false;
    priceWrapper?.classList.add('price--on-sale');
  }

  product.images.forEach((image, index) => {
    const imagePath = `assets/${image}`;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `product-thumb-item${index === 0 ? ' active' : ''}`;
    button.setAttribute('aria-label', `View ${product.title} photo ${index + 1}`);
    button.setAttribute('aria-pressed', String(index === 0));
    button.dataset.imageSrc = imagePath;

    const thumbnail = document.createElement('img');
    thumbnail.src = imagePath;
    thumbnail.alt = `${product.title}, photo ${index + 1}`;
    thumbnail.loading = 'lazy';
    thumbnail.width = 240;
    thumbnail.height = 240;
    button.append(thumbnail);
    thumbnails.append(button);
  });

  mainImage.src = `assets/${product.images[0]}`;
  mainImage.alt = `${product.title}, photo 1`;
}

loadConsoleProduct().catch((error) => {
  const title = document.querySelector('#MainProductTitle');
  if (title) title.textContent = 'Console table unavailable';
  console.error(error);
});

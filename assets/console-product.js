async function loadConsoleProduct() {
  const response = await fetch('assets/products.json');
  if (!response.ok) {
    throw new Error(`Could not load product data (${response.status}).`);
  }

  const catalog = await response.json();
  const handle = new URLSearchParams(window.location.search).get('handle');
  const product = catalog.products.find((item) => item.handle === handle && item.product_type === 'Console Tables');
  if (!product) {
    throw new Error('Console table not found. Open the console table collection and select a product.');
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
  reviewCount.textContent = 'No reviews yet';
  reviewSummary.textContent = 'No ratings yet';
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
    button.addEventListener('click', () => {
      mainImage.src = imagePath;
      mainImage.alt = `${product.title}, photo ${index + 1}`;
      thumbnails.querySelectorAll('.product-thumb-item').forEach((item) => {
        const selected = item === button;
        item.classList.toggle('active', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
    });
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

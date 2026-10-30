const previewSearchProducts = [
  { title: 'Mini Coffee Table', category: 'Mini Coffee Table', price: 5500, compareAt: null, image: 'assets/mini-coffee.jpg', url: 'product-mini-coffee.html', badge: 'New' }
];

const initializePreviewSearch = () => {
  const form = document.querySelector('#PreviewSearchFilters');
  const productsElement = document.querySelector('#SearchProducts');
  const searchForm = document.querySelector('.search-main-form');
  if (!form || !productsElement || !searchForm) return;

  const queryInput = searchForm.querySelector('input[name="q"]');
  const categorySelect = document.querySelector('#SearchCategory');
  const minInput = document.querySelector('#SearchMinPrice');
  const maxInput = document.querySelector('#SearchMaxPrice');
  const saleInput = document.querySelector('#SearchOnSale');
  const sortSelect = document.querySelector('#SearchSort');
  const params = new URLSearchParams(window.location.search);

  queryInput.value = params.get('q') || '';
  categorySelect.value = params.get('category') || '';
  minInput.value = params.get('min') || '';
  maxInput.value = params.get('max') || '';
  saleInput.checked = params.get('sale') === 'true';
  sortSelect.value = params.get('sort') || 'featured';

  const formatPrice = (price) => `Rs. ${price.toLocaleString('en-PK')}`;
  const cardMarkup = (product) => {
    return `
      <article class="product-card">
        <div class="product-media">
          <span class="product-tag tag-gold">${product.badge}</span>
          <a href="${product.url}" aria-label="${product.title}">
            <img src="${product.image}" alt="${product.title}" loading="lazy" width="700" height="700">
          </a>
          <div class="product-quick-actions"><a href="${product.url}" class="btn btn-dark btn-sm btn-block">View Details</a></div>
        </div>
        <div class="product-content">
          <div class="product-category-hint">${product.category}</div>
          <h3 class="product-title"><a href="${product.url}">${product.title}</a></h3>
          <div class="product-rating" aria-label="Rated 5 out of 5">★★★★★ <span>(5.0)</span></div>
          <div class="product-price-row"><span class="product-price">${formatPrice(product.price)}</span>${product.compareAt ? `<span class="product-price-compare">${formatPrice(product.compareAt)}</span>` : ''}</div>
          <a href="${product.url}" class="product-preview-link">View product <span aria-hidden="true">→</span></a>
        </div>
      </article>
    `;
  };

  const renderResults = () => {
    const query = queryInput.value.trim().toLocaleLowerCase();
    const category = categorySelect.value;
    const min = minInput.value === '' ? 0 : Number(minInput.value);
    const max = maxInput.value === '' ? Number.POSITIVE_INFINITY : Number(maxInput.value);
    const onSale = saleInput.checked;
    let results = previewSearchProducts.filter((product) => {
      const matchesQuery = !query || `${product.title} ${product.category}`.toLocaleLowerCase().includes(query);
      return matchesQuery &&
        (!category || product.category === category) &&
        product.price >= min &&
        product.price <= max &&
        (!onSale || (product.compareAt && product.compareAt > product.price));
    });

    switch (sortSelect.value) {
      case 'price-ascending':
        results.sort((a, b) => a.price - b.price);
        break;
      case 'price-descending':
        results.sort((a, b) => b.price - a.price);
        break;
      case 'title-ascending':
        results.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    productsElement.innerHTML = results.map(cardMarkup).join('');
    document.querySelector('#SearchResultsCount').textContent = `${results.length} ${results.length === 1 ? 'piece' : 'pieces'} to explore`;
    document.querySelector('#SearchEmptyState').hidden = results.length > 0;
    productsElement.hidden = results.length === 0;
    document.querySelector('#SearchResultsTitle').textContent = query ? `Results for “${queryInput.value.trim()}”` : 'Explore our furniture';
    document.querySelector('#SearchActiveFilters').innerHTML = [
      category && `<span>${category}</span>`,
      min && `<span>From ${formatPrice(min)}</span>`,
      Number.isFinite(max) && `<span>Up to ${formatPrice(max)}</span>`,
      onSale && '<span>On sale</span>'
    ].filter(Boolean).join('');

    const nextParams = new URLSearchParams();
    if (queryInput.value.trim()) nextParams.set('q', queryInput.value.trim());
    if (category) nextParams.set('category', category);
    if (min) nextParams.set('min', String(min));
    if (Number.isFinite(max)) nextParams.set('max', String(max));
    if (onSale) nextParams.set('sale', 'true');
    if (sortSelect.value !== 'featured') nextParams.set('sort', sortSelect.value);
    const nextUrl = `${window.location.pathname}${nextParams.size ? `?${nextParams}` : ''}`;
    window.history.replaceState(null, '', nextUrl);
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderResults();
  });
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    renderResults();
  });
  sortSelect.addEventListener('change', renderResults);
  document.querySelector('#SearchClearFilters').addEventListener('click', () => {
    queryInput.value = '';
    categorySelect.value = '';
    minInput.value = '';
    maxInput.value = '';
    saleInput.checked = false;
    sortSelect.value = 'featured';
    renderResults();
  });
  document.querySelector('[data-search-reset]').addEventListener('click', () => {
    queryInput.value = '';
    categorySelect.value = '';
    minInput.value = '';
    maxInput.value = '';
    saleInput.checked = false;
    sortSelect.value = 'featured';
    renderResults();
  });

  renderResults();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializePreviewSearch, { once: true });
} else {
  initializePreviewSearch();
}

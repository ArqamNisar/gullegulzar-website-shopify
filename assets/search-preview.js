const previewSearchProducts = [
  { title: 'Royal 2-Tier Gold Tea Trolley', category: 'Tea Trolleys', price: 24500, compareAt: 29000, image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=700&q=80', url: 'product-tea-trolley.html', badge: 'Bestseller' },
  { title: 'Modernist Sleek Coffee Table', category: 'Coffee Tables', price: 19500, compareAt: 23000, image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=700&q=80', url: 'product-coffee.html', badge: 'Popular' },
  { title: 'Fluted Brass Center Table', category: 'Center Tables', price: 28500, compareAt: 34000, image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=700&q=80', url: 'product-center.html', badge: 'Trending' },
  { title: 'Aura Compact Mini Coffee Table', category: 'Mini Coffee Tables', price: 14000, compareAt: 16500, image: 'https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&w=700&q=80', url: 'product-mini-coffee.html', badge: 'Compact' },
  { title: 'Imperial Round Nesting Set (3-Piece)', category: 'Nesting Sets', price: 32000, compareAt: 38000, image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=700&q=80', url: 'product-nesting-set.html', badge: 'Signature' },
  { title: 'Geometric Marble Center Table Set', category: 'Center Table Sets', price: 42000, compareAt: 48000, image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=700&q=80', url: 'product-center-set.html', badge: 'Luxury Set' },
  { title: 'Sculptural Marble Top Table Set (4-Piece)', category: 'Table Sets', price: 58000, compareAt: 68000, image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=700&q=80', url: 'product-table-set.html', badge: 'Exclusive' },
  { title: 'Monarch Grand Foyer Console Table', category: 'Console Tables', price: 36000, compareAt: 42000, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=80', url: 'product-console.html', badge: 'New' },
  { title: 'Artisan Glass & Wood Tea Table', category: 'Tea Tables', price: 18500, compareAt: 22000, image: 'https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=700&q=80', url: 'product-tea-table.html', badge: 'Artisan' }
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
    const discount = Math.round(((product.compareAt - product.price) / product.compareAt) * 100);
    return `
      <article class="product-card">
        <div class="product-media">
          <span class="product-tag tag-gold">${discount}% OFF</span>
          <a href="${product.url}" aria-label="${product.title}">
            <img src="${product.image}" alt="${product.title}" loading="lazy" width="700" height="700">
          </a>
          <div class="product-quick-actions"><a href="${product.url}" class="btn btn-dark btn-sm btn-block">View Details</a></div>
        </div>
        <div class="product-content">
          <div class="product-category-hint">${product.category}</div>
          <h3 class="product-title"><a href="${product.url}">${product.title}</a></h3>
          <div class="product-rating" aria-label="Rated 5 out of 5">★★★★★ <span>(5.0)</span></div>
          <div class="product-price-row"><span class="product-price">${formatPrice(product.price)}</span><span class="product-price-compare">${formatPrice(product.compareAt)}</span></div>
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
        (!onSale || product.compareAt > product.price);
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

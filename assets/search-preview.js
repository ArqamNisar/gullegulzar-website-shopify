const previewSearchProducts = [
  { title: 'Mini Coffee Table', category: 'Mini Coffee Table', price: 6000, compareAt: 7000, image: 'assets/mini-room.jpg', url: 'product-mini-coffee.html' },
  { title: 'Gold Wheel Console Trolley', category: 'Console Tables', price: 13000, compareAt: 15000, image: 'assets/console-a2.jpg', url: 'console-product.html?handle=gold-wheel-console' },
  { title: 'Black Top X-Frame Console Table', category: 'Console Tables', price: 13000, compareAt: 15000, image: 'assets/console-b.jpg', url: 'console-product.html?handle=black-xframe-console' },
  { title: 'Sunburst Gold Console Table', category: 'Console Tables', price: 13000, compareAt: 15000, image: 'assets/console-c2.jpg', url: 'console-product.html?handle=sunburst-console-table' },
  { title: 'White Top Lattice Console Table', category: 'Console Tables', price: 13000, compareAt: 15000, image: 'assets/console-d.jpg', url: 'console-product.html?handle=white-lattice-console' },
  { title: 'Fluted Pillar Marble Center Table (CT1)', category: 'Center Tables', price: 18500, compareAt: 21500, image: 'assets/ct1-room.jpg', url: 'product-ct1.html' },
  { title: 'Oval Ribbed Cage Center Table (CT2)', category: 'Center Tables', price: 16500, compareAt: 19000, image: 'assets/ct2-room.jpg', url: 'product-ct2.html' },
  { title: 'Stepped Multi-Tier Marble Center Table (CT3)', category: 'Center Tables', price: 16500, compareAt: 19000, image: 'assets/ct3-room.jpg', url: 'product-ct3.html' },
  { title: 'Geometric Spiral Center Table (CT4)', category: 'Center Tables', price: 10500, compareAt: 12500, image: 'assets/ct4-room.jpg', url: 'product-ct4.html' },
  { title: 'Birdcage 3-Piece Nesting Center Table Set (CTS1)', category: 'Center Tables', price: 20500, compareAt: 24000, image: 'assets/cts1-room.jpg', url: 'product-cts1.html' },
  { title: 'Spherical Bowed Cage 3-Piece Nesting Center Table Set (CTS2)', category: 'Center Tables', price: 20500, compareAt: 24000, image: 'assets/cts2-room.jpg', url: 'product-cts2.html' },
  { title: 'Crescent Base 3-Piece Nesting Center Table Set (CTS3)', category: 'Center Tables', price: 16500, compareAt: 19500, image: 'assets/cts3-room.jpg', url: 'product-cts3.html' },
  { title: 'Hourglass Fluted Mini Coffee Table (MCT2)', category: 'Coffee Table', price: 6000, compareAt: 7000, image: 'assets/mct2-room.jpg', url: 'product-mct2.html' },
  { title: 'Hexagonal Geometric Nesting Table Set (NS1)', category: 'Nesting Tables', price: 11500, compareAt: 13500, image: 'assets/ns1-room.jpg', url: 'product-ns1.html' },
  { title: 'Minimalist Square Nesting Table Set (NS2)', category: 'Nesting Tables', price: 10500, compareAt: 12500, image: 'assets/ns2-room.jpg', url: 'product-ns2.html' },
  { title: 'Dual Arch Wireframe Nesting Table Set (NS3)', category: 'Nesting Tables', price: 11500, compareAt: 13500, image: 'assets/ns3-room.jpg', url: 'product-ns3.html' },
  { title: 'Compact Accent Nesting Table Set (NS4)', category: 'Nesting Tables', price: 7500, compareAt: 9000, image: 'assets/ns4-room.jpg', url: 'product-ns4.html' },
  { title: 'Cylindrical Ribbed Nesting Table Set (NS5)', category: 'Nesting Tables', price: 10500, compareAt: 12500, image: 'assets/ns5-room.jpg', url: 'product-ns5.html' },
  { title: 'Fluted Gold Nesting Table Set (NS6)', category: 'Nesting Tables', price: 10500, compareAt: 12500, image: 'assets/ns6-room.jpg', url: 'product-ns6.html' },
  { title: 'Architectural Cage Nesting Table Set (NS7)', category: 'Nesting Tables', price: 11500, compareAt: 13500, image: 'assets/ns7-room.jpg', url: 'product-ns7.html' },
  { title: 'Interlocking Ring Nesting Table Set (NS8)', category: 'Nesting Tables', price: 10500, compareAt: 12500, image: 'assets/ns8-room.jpg', url: 'product-ns8.html' },
  { title: 'Slim Profile Accent Nesting Table Set (NS9)', category: 'Nesting Tables', price: 7500, compareAt: 9000, image: 'assets/ns9-room.jpg', url: 'product-ns9.html' },
  { title: 'Radial Wireframe Nesting Table Set (NS10)', category: 'Nesting Tables', price: 10500, compareAt: 12500, image: 'assets/ns10-room.jpg', url: 'product-ns10.html' },
  { title: 'Contemporary Hourglass Nesting Table Set (NS11)', category: 'Nesting Tables', price: 10500, compareAt: 12500, image: 'assets/ns11-room.jpg', url: 'product-ns11.html' },
  { title: 'Tempered Glass Top Wood Nesting Table Set (NSG1)', category: 'Nesting Tables', price: 8500, compareAt: 10000, image: 'assets/nsg1-room.jpg', url: 'product-nsg1.html' },
  { title: 'Luxury Art Deco 2-Piece Marble Table Set (TS1)', category: 'Table Sets', price: 16000, compareAt: 19000, image: 'assets/ts1-room.jpg', url: 'product-ts1.html' },
  { title: 'Curved Crescent Marble Table Set (TS2)', category: 'Table Sets', price: 16000, compareAt: 19000, image: 'assets/ts2-room.jpg', url: 'product-ts2.html' },
  { title: 'Grand Fluted Pillar 2-Piece Table Set (TS4)', category: 'Table Sets', price: 16000, compareAt: 19000, image: 'assets/ts4-room.jpg', url: 'product-ts4.html' },
  { title: 'Sculptural Multi-Tier Table Set (TS5)', category: 'Table Sets', price: 16000, compareAt: 19000, image: 'assets/ts5-room.jpg', url: 'product-ts5.html' },
  { title: 'Executive Stainless 3-Tier Rolling Tea Trolley (TT1)', category: 'Tea Trolleys', price: 13500, compareAt: 16000, image: 'assets/tt1-room.jpg', url: 'product-tt1.html' },
  { title: 'Two-Tier Marble Top Serving Tea Trolley (TT2)', category: 'Tea Trolleys', price: 13500, compareAt: 16000, image: 'assets/tt2-room.jpg', url: 'product-tt2.html' },
  { title: 'Arched Handle Mobile Tea Trolley (TT3)', category: 'Tea Trolleys', price: 13500, compareAt: 16000, image: 'assets/tt3-room.jpg', url: 'product-tt3.html' },
  { title: 'Compact Rolling Beverage Tea Trolley (TT4)', category: 'Tea Trolleys', price: 9000, compareAt: 11000, image: 'assets/tt4-room.jpg', url: 'product-tt4.html' },
  { title: 'Grand Triple-Tier Serving Tea Trolley (TT5)', category: 'Tea Trolleys', price: 14500, compareAt: 17500, image: 'assets/tt5-room.jpg', url: 'product-tt5.html' },
  { title: 'Signature Wheel Designer Tea Trolley (TT6)', category: 'Tea Trolleys', price: 15000, compareAt: 18000, image: 'assets/tt6-room.jpg', url: 'product-tt6.html' },
  { title: 'Tempered Glass Top Serving Tea Trolley (TTG1)', category: 'Tea Trolleys', price: 9000, compareAt: 11000, image: 'assets/ttg1-room.jpg', url: 'product-ttg1.html' },
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
          <a href="${product.url}" aria-label="${product.title}">
            <img src="${product.image}" alt="${product.title}" loading="lazy" width="700" height="700">
          </a>
          <div class="product-quick-actions"><a href="${product.url}" class="btn btn-dark btn-sm btn-block">View Details</a></div>
        </div>
        <div class="product-content">
          <div class="product-category-hint">${product.category}</div>
          <h3 class="product-title"><a href="${product.url}">${product.title}</a></h3>
          <div class="product-rating" aria-label="Rated 5 out of 5">★★★★★ <span>(5.0)</span></div>
          <div class="product-price-row"><span class="product-price">${formatPrice(product.price)}</span>${product.compareAt ? `<span class="product-price-compare crossed-price-red">${formatPrice(product.compareAt)}</span><span class="badge-discount-percent">${Math.round(((product.compareAt - product.price) / product.compareAt) * 100)}% OFF</span>` : ''}</div>
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

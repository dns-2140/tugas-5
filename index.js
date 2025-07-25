// Product data
const products = [
  {
    id: 1,
    name: "Wireless Noise-Canceling Headphones",
    price: 349.99,
    description:
      "Experience premium sound quality with our advanced noise-canceling technology. Perfect for travel or focused listening sessions.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    description:
      "Made from 100% organic cotton for ultimate comfort. Classic fit with a modern silhouette.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Clothing",
  },
  {
    id: 3,
    name: "Stainless Steel Water Bottle",
    price: 24.95,
    description:
      "Keep your drinks hot or cold for hours with our premium double-walled stainless steel bottle.",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Accessories",
  },
  {
    id: 4,
    name: "Smart Fitness Watch",
    price: 199.99,
    description:
      "Track your workouts, heart rate, sleep patterns, and more with our advanced smart watch.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
  },
  {
    id: 5,
    name: "Leather Wallet",
    price: 59.99,
    description:
      "Handcrafted from genuine leather with multiple card slots and a discreet money compartment.",
    image:
      "https://images.unsplash.com/photo-1591561954555-607968c989ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Accessories",
  },
  {
    id: 6,
    name: "Wireless Charging Pad",
    price: 39.99,
    description:
      "Charge your Qi-compatible devices quickly and efficiently without the hassle of cables.",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
  },
  {
    id: 7,
    name: "Premium Coffee Beans",
    price: 19.99,
    description:
      "Single-origin arabica beans, freshly roasted for a rich and complex flavor profile.",
    image:
      "https://images.unsplash.com/photo-1515442261605-65987783cb6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Food",
  },
  {
    id: 8,
    name: "Yoga Mat",
    price: 49.99,
    description:
      "Eco-friendly, non-slip yoga mat with optimal cushioning for all types of practice.",
    image:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Fitness",
  },
  {
    id: 9,
    name: "Ceramic Cookware Set",
    price: 129.99,
    description:
      "Healthy, non-toxic ceramic cookware that distributes heat evenly for perfect cooking results.",
    image: "https://images.pexels.com/photos/951334/pexels-photo-951334.jpeg",
    category: "Home",
  },
  {
    id: 10,
    name: "Bluetooth Speaker",
    price: 89.99,
    description:
      "Portable speaker with 20-hour battery life and crystal clear 360° sound.",
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
  },
  {
    id: 11,
    name: "Cashmere Sweater",
    price: 179.99,
    description:
      "Luxuriously soft 100% cashmere sweater with a timeless design for year-round wear.",
    image:
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Clothing",
  },
  {
    id: 12,
    name: "Aromatherapy Diffuser",
    price: 34.99,
    description:
      "Ultrasonic diffuser with color-changing LED lights and automatic shut-off feature.",
    image:
      "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Home",
  },
];

// DOM elements
const productsContainer = document.getElementById("products-container");
const categoryFilters = document.getElementById("category-filters");
const priceRange = document.getElementById("price-range");
const maxPriceValue = document.getElementById("max-price-value");
const resetFiltersBtn = document.getElementById("reset-filters");
const cartCount = document.querySelector(".cart-count");
const searchInput = document.getElementById("search-input");
const clearSearchBtn = document.getElementById("clear-search");

// Current filter state
let currentFilters = {
  categories: [],
  maxPrice: 1000,
  sortBy: "default",
  searchQuery: "",
};

// Cart state
let cart = [];

// Initialize the app
function init() {
  renderProducts(products);
  renderCategoryFilters();
  setupEventListeners();
}

// Render products to the DOM
function renderProducts(productsToRender) {
  productsContainer.innerHTML = "";

  if (productsToRender.length === 0) {
    productsContainer.innerHTML =
      '<div class="no-products">No products match your filters. Try adjusting your criteria.</div>';
    return;
  }

  productsToRender.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
                    <img src="${product.image}" alt="${
      product.name
    }" class="product-image">
                    <div class="product-info">
                        <span class="product-category">${
                          product.category
                        }</span>
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-description">${
                          product.description
                        }</p>
                        <div class="product-price">$${product.price.toFixed(
                          2
                        )}</div>
                        <button class="add-to-cart" data-id="${
                          product.id
                        }">Add to Cart</button>
                    </div>
                `;
    productsContainer.appendChild(productCard);
  });

  // Add event listeners to all add-to-cart buttons
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", addToCart);
  });
}

// Render category filter options
function renderCategoryFilters() {
  // Get all unique categories
  const categories = [...new Set(products.map((product) => product.category))];

  categories.forEach((category) => {
    const filterId = `category-${category.toLowerCase().replace(/\s+/g, "-")}`;

    const option = document.createElement("div");
    option.className = "filter-option";
    option.innerHTML = `
                    <input type="checkbox" id="${filterId}" value="${category}">
                    <label for="${filterId}">${category}</label>
                `;
    categoryFilters.appendChild(option);
  });
}

// Setup event listeners
function setupEventListeners() {
  // Search input
  searchInput.addEventListener("input", (e) => {
    currentFilters.searchQuery = e.target.value.toLowerCase().trim();
    filterProducts();

    // Show/hide clear button
    if (currentFilters.searchQuery.length > 0) {
      clearSearchBtn.style.display = "block";
    } else {
      clearSearchBtn.style.display = "none";
    }
  });

  // Clear search
  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    currentFilters.searchQuery = "";
    filterProducts();
    clearSearchBtn.style.display = "none";
  });

  // Category filter change
  categoryFilters.addEventListener("change", (e) => {
    if (e.target.type === "checkbox") {
      const category = e.target.value;

      if (e.target.checked) {
        currentFilters.categories.push(category);
      } else {
        currentFilters.categories = currentFilters.categories.filter(
          (c) => c !== category
        );
      }

      filterProducts();
    }
  });

  // Price range change
  priceRange.addEventListener("input", (e) => {
    currentFilters.maxPrice = parseInt(e.target.value);
    maxPriceValue.textContent = `$${currentFilters.maxPrice}`;
    filterProducts();
  });

  // Sort change
  document.querySelectorAll('input[name="sort"]').forEach((radio) => {
    radio.addEventListener("change", (e) => {
      currentFilters.sortBy = e.target.value;
      filterProducts();
    });
  });

  // Reset filters
  resetFiltersBtn.addEventListener("click", resetFilters);
}

// Filter products based on current filters
function filterProducts() {
  let filteredProducts = [...products];

  // Filter by search query
  if (currentFilters.searchQuery.length > 0) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(currentFilters.searchQuery) ||
        product.description.toLowerCase().includes(currentFilters.searchQuery)
    );
  }

  // Filter by category
  if (currentFilters.categories.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      currentFilters.categories.includes(product.category)
    );
  }

  // Filter by price
  filteredProducts = filteredProducts.filter(
    (product) => product.price <= currentFilters.maxPrice
  );

  // Sort products
  filteredProducts = sortProducts(filteredProducts, currentFilters.sortBy);

  renderProducts(filteredProducts);
}

// Sort products based on criteria
function sortProducts(productsToSort, criteria) {
  switch (criteria) {
    case "price-low":
      return [...productsToSort].sort((a, b) => a.price - b.price);
    case "price-high":
      return [...productsToSort].sort((a, b) => b.price - a.price);
    case "name":
      return [...productsToSort].sort((a, b) => a.name.localeCompare(b.name));
    default:
      return productsToSort;
  }
}

// Reset all filters
function resetFilters() {
  // Reset search
  searchInput.value = "";
  currentFilters.searchQuery = "";
  clearSearchBtn.style.display = "none";

  // Reset category checkboxes
  document
    .querySelectorAll('#category-filters input[type="checkbox"]')
    .forEach((checkbox) => {
      checkbox.checked = false;
    });

  // Reset price range
  priceRange.value = 1000;
  maxPriceValue.textContent = "$1000";

  // Reset sort
  document.getElementById("sort-default").checked = true;

  // Reset filter state
  currentFilters = {
    categories: [],
    maxPrice: 1000,
    sortBy: "default",
    searchQuery: "",
  };

  // Render all products
  renderProducts(products);
}

// Add product to cart
function addToCart(e) {
  const productId = parseInt(e.target.getAttribute("data-id"));
  const product = products.find((p) => p.id === productId);

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  updateCartCount();

  // Show a quick confirmation
  e.target.textContent = "Added!";
  setTimeout(() => {
    e.target.textContent = "Add to Cart";
  }, 2000);
}

// Update cart count in header
function updateCartCount() {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = totalItems;
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", init);

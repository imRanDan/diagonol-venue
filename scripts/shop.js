// Product Data
const products = [
  {
    id: 1,
    name: "Venue Roller T-Shirt",
    price: 35.0,
    image: "/assets/images/product1.jpg",
    category: "T-Shirts",
  },
  {
    id: 2,
    name: "Venue Bomber Jacket",
    price: 355.0,
    image: "/assets/images/product2.jpg",
    category: "Jackets",
  },
  // Add more products here
];

// Cart functionality
let cart = [];
const cartSidebar = document.querySelector(".cart-sidebar");

// Quick Add functionality
document.querySelectorAll(".quick-add").forEach((button) => {
  button.addEventListener("click", (e) => {
    const productCard = e.target.closest(".product-card");
    const productId = productCard.dataset.productId;
    addToCart(productId);
    openCart();
  });
});

// Filter functionality
document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", (e) => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
    const category = e.target.textContent;
    filterProducts(category);
  });
});

// Cart toggle
document.querySelector(".close-cart").addEventListener("click", () => {
  cartSidebar.classList.remove("active");
});

function openCart() {
  cartSidebar.classList.add("active");
}

function addToCart(productId) {
  const product = products.find((p) => p.id === parseInt(productId));
  if (product) {
    cart.push(product);
    updateCartDisplay();
  }
}

function updateCartDisplay() {
  const cartItems = document.querySelector(".cart-items");
  const totalAmount = document.querySelector(".total-amount");

  // Update cart items display
  cartItems.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>£${item.price.toFixed(2)} GBP</p>
            </div>
            <button class="remove-item" data-id="${item.id}">&times;</button>
        </div>
    `
    )
    .join("");

  // Update total
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  totalAmount.textContent = `£${total.toFixed(2)} GBP`;
}

function filterProducts(category) {
  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach((card) => {
    if (category === "All" || card.dataset.category === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Shop items array with categories
const shopItems = [
    {
        name: "Diagonal Roller T-Shirt",
        price: 35.00,
        category: "T-Shirts",
        image: "/assets/images/product1.jpg"
    },
    {
        name: "Diagonal Jacket",
        price: 89.99,
        category: "Jackets",
        image: "/assets/images/product2.jpg"  // Update with your actual image path
    },
    {
        name: "Diagonal Hoodie",
        price: 89.99,
        category: "Jackets",
        image: "/assets/images/product3.jpg"  // Update with your actual image path
    },
    // Add more items as needed
];

function displayShopItems(category = 'All') {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = ''; // Clear existing items
    
    const filteredItems = category === 'All' 
        ? shopItems 
        : shopItems.filter(item => item.category === category);
    
    filteredItems.forEach(item => {
        const productCard = `
            <div class="product-card">
                <div class="product-image">
                    <img src="${item.image}" alt="${item.name}" />
                    <div class="quick-add">Quick Add</div>
                </div>
                <div class="product-info">
                    <h3>${item.name}</h3>
                    <p class="price">$${item.price.toFixed(2)} CAD</p>
                </div>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });
}

// Set up filter buttons
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Filter products
            const category = button.textContent;
            displayShopItems(category);
        });
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    displayShopItems(); // Show all items initially
    setupFilters();
});

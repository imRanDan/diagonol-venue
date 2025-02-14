// Combine all product data into one array
const products = [
    {
        id: 1,
        name: "Diagonal Roller T-Shirt",
        price: 35.99,
        category: "T-Shirts",
        image: "/assets/images/product1.jpg"
    },
    {
        id: 2,
        name: "Diagonal Jacket",
        price: 355.99,
        category: "Jackets",
        image: "/assets/images/product2.jpg"
    },
    {
        id: 3,
        name: "Diagonal Hoodie",
        price: 129.99,
        category: "Hoodies",
        image: "/assets/images/product3.jpg"
    },
    {
        id: 4,
        name: "Diagonal DRESS TO SWEAT T-Shirt",
        price: 35.99,
        category: "T-Shirts",
        image: "/assets/images/product4.jpg"
    },
    {
        id: 5,
        name: "Diagonal Scarf",
        price: 15.99,
        category: "Accessories",
        image: "/assets/images/product5.jpg"
    }
];

// Cart functionality
let cart = [];
const cartSidebar = document.querySelector(".cart-sidebar");

function displayShopItems(category = 'All') {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = ''; // Clear existing items
    
    const filteredItems = category === 'All' 
        ? products 
        : products.filter(item => item.category === category);
    
    filteredItems.forEach(item => {
        const productCard = `
            <div class="product-card" data-product-id="${item.id}">
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

    // Set up quick add listeners after products are rendered
    setupQuickAdd();
}

function setupQuickAdd() {
    document.querySelectorAll(".quick-add").forEach((button) => {
        button.addEventListener("click", (e) => {
            const productCard = e.target.closest(".product-card");
            const productId = productCard.dataset.productId;
            addToCart(productId);
            openCart();
        });
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
                    <p>$${item.price.toFixed(2)} CAD</p>
                </div>
                <button class="remove-item" data-id="${item.id}">&times;</button>
            </div>
        `
        )
        .join("");

    // Add remove functionality to buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', () => {
            const itemId = parseInt(button.dataset.id);
            removeFromCart(itemId);
        });
    });

    // Update total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalAmount.textContent = `$${total.toFixed(2)} CAD`;
}

function removeFromCart(productId) {
    // Find the index of the first matching item
    const index = cart.findIndex(item => item.id === productId);
    if (index > -1) {
        // Remove the item from the cart
        cart.splice(index, 1);
        // Update the cart display
        updateCartDisplay();
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    displayShopItems(); // Show all items initially
    setupFilters();
});

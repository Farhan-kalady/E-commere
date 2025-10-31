// --- Data Structure (Mimicking a Database) ---
const products = [
    { id: 1, name: "Smartphone X10", price: 15999, image: "mobile.jpg" },
    { id: 2, name: "Wireless Headphones", price: 999, image: "headphone.jpg" },
    { id: 3, name: "4K LED TV 55-inch", price: 34999, image: "tv.jpg" },
    { id: 4, name: "Men's Casual Shirt", price: 799, image: "shirt.jpg" },
    { id: 5, name: "Running Shoes", price: 1899, image: "shoes.jpg" }
];

let cart = []; // Local array to hold items added to the cart

// --- Core Functions ---

// Updates the cart counter in the header
function updateCartCount() {
    const cartIcon = document.getElementById('cart-icon');
    cartIcon.textContent = `🛒 Cart (${cart.length})`;
}

// Dynamically creates and injects product cards into the HTML
function displayProducts() {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = ''; // Clear previous content

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        // Note: You must manually create an 'images' folder and add placeholder images (e.g., mobile.jpg) 
        // or replace the src with actual URLs (like the placeholder one used in index.html)
        card.innerHTML = `
            <img src="https://via.placeholder.com/200x180?text=${product.name.replace(/ /g, '+')}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">₹${product.price.toLocaleString('en-IN')}</p>
            <button onclick="addToCart(${product.id})">ADD TO CART</button>
        `;
        productGrid.appendChild(card);
    });
}

// Adds a product to the cart array
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
        console.log(`Cart contents:`, cart); // Log to console for debugging
        alert(`${product.name} successfully added to cart!`);
    }
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    updateCartCount();
});
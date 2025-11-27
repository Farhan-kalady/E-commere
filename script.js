// --- Product Data ---
const products = [
    { id: 1, name: "Smartphone X10", price: 15999, image: "mobile.jpg" },
    { id: 2, name: "Wireless Headphones", price: 999, image: "headphone.jpg" },
    { id: 3, name: "4K LED TV 55-inch", price: 34999, image: "tv.jpg" },
    { id: 4, name: "Men's Casual Shirt", price: 799, image: "shirt.jpg" },
    { id: 5, name: "Running Shoes", price: 1899, image: "shoes.jpg" }
];

let cart = []; // Keeps added items


// --- Update Cart Count ---
function updateCartCount() {
    const cartIcon = document.getElementById('cart-icon');
    cartIcon.textContent = `🛒 Cart (${cart.length})`;
}


// --- Display Products as Bootstrap Cards ---
function displayProducts() {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = ""; // Clear previous

    products.forEach(product => {
        const col = document.createElement("div");
        col.className = "col-6 col-md-3";

        col.innerHTML = `
            <div class="card border-0 shadow-sm p-3 text-center h-100">

                <img src="https://via.placeholder.com/200x180?text=${product.name.replace(/ /g, '+')}"
                     class="img-fluid"
                     style="height:180px; object-fit:contain;"
                     alt="${product.name}">
                
                <h5 class="mt-2 fs-6">${product.name}</h5>
                
                <p class="text-success fw-bold">₹${product.price.toLocaleString('en-IN')}</p>

                <button class="btn btn-warning w-100 fw-semibold"
                        onclick="addToCart(${product.id})">
                    ADD TO CART
                </button>
            </div>
        `;

        productGrid.appendChild(col);
    });
}


// --- Add to Cart Function ---
function addToCart(productId) {
    const product = products.find(p => p.id === productId);

    if (product) {
        cart.push(product);
        updateCartCount();
        alert(`${product.name} added to cart!`);
        console.log("Cart:", cart);
    }
}


// --- Initialize Page ---
document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
    updateCartCount();
});

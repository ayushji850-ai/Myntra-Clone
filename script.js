
const products = [
    {
        name: "Classic Streetwear",
        category: "Men",
        price: 1299,
        rating: "4.5 ★",
        image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500"
    },
    {
        name: "Elegant Summer Dress",
        category: "Women",
        price: 1899,
        rating: "4.8 ★",
        image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500"
    },
    {
        name: "Urban Sneakers",
        category: "Shoes",
        price: 2499,
        rating: "4.6 ★",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    },
    {
        name: "Premium Casual",
        category: "Men",
        price: 1599,
        rating: "4.3 ★",
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500"
    },
    {
        name: "Modern Fashion",
        category: "Women",
        price: 2199,
        rating: "4.7 ★",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500"
    },
    {
        name: "Daily Sneakers",
        category: "Shoes",
        price: 1799,
        rating: "4.4 ★",
        image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=500"
    },
    {
        name: "Minimal Outfit",
        category: "Men",
        price: 999,
        rating: "4.2 ★",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500"
    },
    {
        name: "Chic Collection",
        category: "Women",
        price: 1999,
        rating: "4.9 ★",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500"
    }
];

let cart = [];

function displayProducts(items) {
    const grid = document.getElementById("product-grid");

    grid.innerHTML = items.map((product, index) => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.category} Collection</p>
                <p>${product.rating}</p>
                <div class="price">₹${product.price}</div>
            </div>
            <button onclick="addToCart(${products.indexOf(product)})">
                Add to Bag
            </button>
        </div>
    `).join("");
}

function filterProducts(category) {
    if (category === "All") {
        displayProducts(products);
    } else {
        displayProducts(
            products.filter(product => product.category === category)
        );
    }
}

function addToCart(index) {
    cart.push(products[index]);

    document.getElementById("cart-count").innerText = cart.length;

    alert(products[index].name + " added to your bag!");
}

function showCart() {
    if (cart.length === 0) {
        alert("Your shopping bag is empty!");
        return;
    }

    let message = "YOUR SHOPPING BAG\n\n";

    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - ₹${item.price}\n`;
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    message += `\nTotal: ₹${total}`;

    alert(message);
}

// Search
document.getElementById("search").addEventListener("input", function() {
    const searchValue = this.value.toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchValue) ||
        product.category.toLowerCase().includes(searchValue)
    );

    displayProducts(filtered);
});

// Initial products
displayProducts(products);

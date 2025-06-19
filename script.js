// script.js

// Profile Management Functions
function loadUserProfile() {
  const profile = {
    name: localStorage.getItem('farmerName') || 'Farmer John',
    phone: '1234567890',
    email: 'john@example.com',
    language: 'English'
  };
  
  const accountInfo = document.querySelector('.account-info');
  if (accountInfo) {
    accountInfo.innerHTML = `
      <p><strong>Name:</strong> ${profile.name}</p>
      <p><strong>Phone:</strong> ${profile.phone}</p>
      <p><strong>Email:</strong> ${profile.email}</p>
      <p><strong>Language:</strong> ${profile.language}</p>
    `;
  }
}

function setupEventListeners() {
  const updateProfileBtn = document.getElementById('update-profile-btn');
  const changeLanguageBtn = document.getElementById('change-language-btn');
  const deleteAccountBtn = document.getElementById('delete-account-btn');

  if (updateProfileBtn) updateProfileBtn.addEventListener('click', showProfileUpdateForm);
  if (changeLanguageBtn) changeLanguageBtn.addEventListener('click', showLanguageSelector);
  if (deleteAccountBtn) deleteAccountBtn.addEventListener('click', confirmDeleteAccount);
}

function showProfileUpdateForm() {
  const currentInfo = document.querySelector('.account-info');
  currentInfo.innerHTML = `
    <form class="profile-form" id="profile-update-form">
      <input type="text" id="name" placeholder="Name" required>
      <input type="tel" id="phone" placeholder="Phone" required>
      <input type="email" id="email" placeholder="Email" required>
      <button type="submit">Save Changes</button>
      <button type="button" onclick="loadUserProfile()">Cancel</button>
    </form>
  `;
  
  document.getElementById('profile-update-form').addEventListener('submit', updateProfile);
}

function updateProfile(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  
  localStorage.setItem('farmerName', name);
  alert('Profile updated successfully!');
  loadUserProfile();
}

function showLanguageSelector() {
  const languages = ['English', 'Hindi', 'Spanish'];
  const currentInfo = document.querySelector('.account-info');
  currentInfo.innerHTML = `
    <div class="profile-form">
      <h3>Select Language</h3>
      <select id="language-select">
        ${languages.map(lang => `<option value="${lang}">${lang}</option>`).join('')}
      </select>
      <button onclick="updateLanguage()">Save</button>
      <button onclick="loadUserProfile()">Cancel</button>
    </div>
  `;
}

function updateLanguage() {
  const language = document.getElementById('language-select').value;
  alert(`Language updated to ${language}`);
  loadUserProfile();
}

function confirmDeleteAccount() {
  if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
    localStorage.clear();
    alert('Account deleted successfully');
    window.location.href = 'index.html';
  }
}

// Orders Management
function loadOrders() {
  const orders = [
    {
      id: 'ORD001',
      date: '2025-01-15',
      items: [
        { name: 'Tomatoes', quantity: 5, price: 10 },
        { name: 'Potatoes', quantity: 3, price: 15 }
      ],
      total: 95,
      status: 'Delivered'
    },
    {
      id: 'ORD002',
      date: '2025-01-14',
      items: [
        { name: 'Onions', quantity: 2, price: 20 }
      ],
      total: 40,
      status: 'Processing'
    }
  ];
  
  const ordersContainer = document.getElementById('orders-container');
  if (ordersContainer) {
    ordersContainer.innerHTML = orders.map(order => `
      <div class="order-card">
        <div class="order-header">
          <span>Order #${order.id}</span>
          <span>${order.date}</span>
          <span>${order.status}</span>
        </div>
        <div class="order-items">
          ${order.items.map(item => `
            <div class="order-item">
              <span>${item.name} x ${item.quantity}</span>
              <span>₹${item.price * item.quantity}</span>
            </div>
          `).join('')}
        </div>
        <div class="order-total">
          Total: ₹${order.total}
        </div>
      </div>
    `).join('');
  }
}

// Cart Management
let cart = [];

function addToCart(product) {
  cart.push(product);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartContainer = document.querySelector('.cart-container');
  if (!cartContainer) return;
  
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  
  cartContainer.innerHTML = `
    <h3>Shopping Cart</h3>
    <div class="cart-items">
      ${cart.map(item => `
        <div class="cart-item">
          <span>${item.name} x ${item.quantity}</span>
          <span>₹${item.price * item.quantity}</span>
        </div>
      `).join('')}
    </div>
    <div class="cart-total">
      <span>Total:</span>
      <span>₹${cartTotal}</span>
    </div>
    <button class="checkout-button" onclick="checkout()">Proceed to Checkout</button>
  `;
}

function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  
  alert('Order placed successfully!');
  cart = [];
  updateCartDisplay();
  if (document.querySelector('.account-section')) {
    loadOrders();
  }
}

document.addEventListener('DOMContentLoaded', () => {

  // Language Selection
  const languageSelector = document.getElementById('language');
  if (languageSelector) {
    languageSelector.addEventListener('change', () => {
      // Placeholder for language change logic
      const selectedLanguage = languageSelector.value;
      alert(`Language changed to: ${selectedLanguage}`);
      // Implement language change by loading translations
    });
  }

  // Login Logic
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const phone = document.getElementById('phone').value.trim();
      const aadhar = document.getElementById('aadhar').value.trim();

      // Simulate Aadhaar Verification
      if (phone && aadhar) {
        // In production, verify Aadhaar through official APIs
        alert('Login Successful!');
        localStorage.setItem('loggedIn', 'true'); // Simulate session
        localStorage.setItem('farmerName', 'Farmer John'); // Simulate farmer's name
        window.location.href = 'dashboard.html';
      } else {
        alert('Please enter valid credentials.');
      }
    });
  }

  // Check Login Status
  const isLoggedIn = localStorage.getItem('loggedIn');
  if (!isLoggedIn && !window.location.pathname.endsWith('index.html') && window.location.pathname === '/') {
    window.location.href = 'index.html';
  }

  // Logout Logic
  const logoutButton = document.getElementById('logout');
  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      localStorage.clear();
      window.location.href = 'index.html';
    });
  }

  // Dashboard Logic
  const buyButton = document.getElementById('buy-button');
  const sellButton = document.getElementById('sell-button');
  if (buyButton && sellButton) {
    const farmerName = localStorage.getItem('farmerName') || 'Farmer';
    document.querySelector('.dashboard h2').textContent = `Welcome, ${farmerName}!`;

    buyButton.addEventListener('click', () => {
      window.location.href = 'buyer.html'; // Redirect to buyer page
    });

    sellButton.addEventListener('click', () => {
      window.location.href = 'sell.html';
    });
  }

  // Sell Page Logic
  const sellForm = document.getElementById('sell-form');
  if (sellForm) {
    sellForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const cropName = document.getElementById('crop-name').value.trim();
      const cropPrice = document.getElementById('crop-price').value.trim();
      const cropQuantity = document.getElementById('crop-quantity').value.trim();
      const cropPhoto = document.getElementById('crop-photo').files[0];

      if (cropName && cropPrice && cropQuantity && cropPhoto) {
        // Simulate saving product
        const myProducts = JSON.parse(localStorage.getItem('myProducts')) || [];
        myProducts.push({
          id: Date.now(),
          name: cropName,
          price: cropPrice,
          quantity: cropQuantity,
          photo: URL.createObjectURL(cropPhoto) // For demo purposes
        });
        localStorage.setItem('myProducts', JSON.stringify(myProducts));
        alert('Product listed successfully!');
        window.location.href = 'account.html';
      } else {
        alert('Please fill in all the details.');
      }
    });
  }

  // Buyer Page Logic
  const buyerProductsContainer = document.getElementById('products-container');
  if (buyerProductsContainer) {
    // Get products from localStorage
    const allProducts = JSON.parse(localStorage.getItem('myProducts')) || [];
    if (allProducts.length > 0) {
      allProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
          <h3>${product.name}</h3>
          <img src="${product.photo}" alt="${product.name}" class="product-photo">
          <p>Price: ₹${product.price} per Quintal</p>
          <p>Available: ${product.quantity} Quintal(s)</p>
          <button data-id="${product.id}" class="add-to-cart-btn">Add to Cart</button>
        `;

        buyerProductsContainer.appendChild(productCard);
      });
    } else {
      buyerProductsContainer.innerHTML = '<p>No products available at the moment.</p>';
    }

    // Cart Functionality
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;

    buyerProductsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('add-to-cart-btn')) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        const product = allProducts.find(p => p.id === productId);
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        cartCount.textContent = cart.length;
        alert(`${product.name} has been added to your cart.`);
      }
    });
  }

  // Cart Link Logic
  const cartLink = document.getElementById('cart-link');
  if (cartLink) {
    cartLink.addEventListener('click', (e) => {
      e.preventDefault();
      // For demo purposes, display cart items in an alert
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      if (cart.length > 0) {
        let cartDetails = 'Your Cart:\n\n';
        cart.forEach((item, index) => {
          cartDetails += `${index + 1}. ${item.name} - ₹${item.price} per Quintal, Quantity: ${item.quantity} Quintal(s)\n`;
        });
        alert(cartDetails);
      } else {
        alert('Your cart is empty.');
      }
    });
  }

  // Account Page Logic
  const myProductsContainer = document.getElementById('my-products');
  if (myProductsContainer) {
    // Display Farmer's Products
    const myProducts = JSON.parse(localStorage.getItem('myProducts')) || [];
    if (myProducts.length > 0) {
      myProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
          <h3>${product.name}</h3>
          <p>Price: ₹${product.price} per Quintal</p>
          <p>Quantity: ${product.quantity} Quintal(s)</p>
          <img src="${product.photo}" alt="${product.name}" class="product-photo">
          <button data-id="${product.id}" class="remove-product-btn">Remove</button>
        `;

        myProductsContainer.appendChild(productCard);
      });
    } else {
      myProductsContainer.innerHTML = '<p>No products listed yet.</p>';
    }

    // Remove Product
    myProductsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-product-btn')) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        let myProducts = JSON.parse(localStorage.getItem('myProducts')) || [];
        myProducts = myProducts.filter(p => p.id !== productId);
        localStorage.setItem('myProducts', JSON.stringify(myProducts));
        alert('Product removed.');
        window.location.reload();
      }
    });

    // Orders Logic – For demonstration
    const ordersContainer = document.getElementById('orders-container');
    if (ordersContainer) {
      const orders = [
        {
          orderId: 101,
          product: 'Wheat',
          quantity: 10,
          unit: 'Quintal',
          buyer: 'Buyer A',
          status: 'Pending',
        },
        // Additional orders can be added here
      ];

      if (orders.length > 0) {
        orders.forEach(order => {
          const orderCard = document.createElement('div');
          orderCard.classList.add('order-card');

          orderCard.innerHTML = `
            <h3>Order #${order.orderId}</h3>
            <p><strong>Product:</strong> ${order.product}</p>
            <p><strong>Quantity:</strong> ${order.quantity} ${order.unit}</p>
            <p><strong>Buyer:</strong> ${order.buyer}</p>
            <p><strong>Status:</strong> ${order.status}</p>
            <button data-id="${order.orderId}" class="view-details-btn">View Details</button>
          `;

          ordersContainer.appendChild(orderCard);
        });

        // View Order Details
        ordersContainer.addEventListener('click', (e) => {
          if (e.target.classList.contains('view-details-btn')) {
            const orderId = e.target.getAttribute('data-id');
            alert(`Viewing details for Order #${orderId}`);
            // Implement order details display
          }
        });
      } else {
        ordersContainer.innerHTML = '<p>No orders yet.</p>';
      }
    }

    // Settings Buttons
    const changeLanguageBtn = document.getElementById('change-language-btn');
    const updateProfileBtn = document.getElementById('update-profile-btn');
    const deleteAccountBtn = document.getElementById('delete-account-btn');

    if (changeLanguageBtn) {
      changeLanguageBtn.addEventListener('click', () => {
        alert('Change Language functionality is not implemented in this demo.');
      });
    }

    if (updateProfileBtn) {
      updateProfileBtn.addEventListener('click', () => {
        alert('Update Profile functionality is not implemented in this demo.');
      });
    }

    if (deleteAccountBtn) {
      deleteAccountBtn.addEventListener('click', () => {
        const confirmDelete = confirm('Are you sure you want to delete your account? This action cannot be undone.');
        if (confirmDelete) {
          localStorage.clear();
          alert('Your account has been deleted.');
          window.location.href = 'index.html';
        }
      });
    }
  }

});

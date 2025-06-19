# Agriconnect Pro - Empowering Indian Farmers with Direct Market Access

Agriconnect Pro is a web-based platform that connects farmers directly with buyers to ensure fair prices for agricultural products. The platform eliminates exploitation by middlemen through secure Aadhar-based authentication and provides a transparent marketplace for agricultural trade.

The platform features a modern, responsive interface with support for multiple languages (English and Hindi), secure user authentication via Aadhar verification, and comprehensive account management. Farmers can easily list their products, manage inventory, track orders, and connect with buyers directly. The dark-themed UI with intuitive animations ensures a seamless user experience across devices.

## Repository Structure
```
agriconnect-pro/
├── index.html          # Main entry point with login functionality
├── dashboard.html      # Central hub for buyer/seller navigation
├── about.html         # Platform information and team details
├── buyer.html         # Product browsing and purchasing interface
├── sell.html          # Product listing interface for farmers
├── account.html       # User profile and settings management
├── team.html          # Team information and platform details
├── script.js          # Core application logic and functionality
├── styles.css         # Global styling and theme definitions
└── images/           # Asset directory for product and UI images
```

## Usage Instructions
### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, or Edge)
- Active internet connection
- Valid Aadhar card for authentication
- Mobile phone number for registration
- Basic understanding of web navigation

### Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/agriconnect-pro.git
```

2. Navigate to the project directory:
```bash
cd agriconnect-pro
```

3. For local development, start a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server
```

4. Access the application:
```
http://localhost:8000
```

### Quick Start
1. Open the application in your web browser
2. Select your preferred language (English/Hindi)
3. Log in using:
   - Phone number
   - Aadhar number
4. Navigate the dashboard to:
   - Buy products: Browse available crops
   - Sell products: List your agricultural products

### More Detailed Examples
#### Listing a Product for Sale
```javascript
1. Click "Sell Products" on the dashboard
2. Fill in the product details:
   - Crop name
   - Price per unit (₹)
   - Quantity (in Quintals)
   - Upload crop photo
3. Click "List Product" to publish
```

#### Making a Purchase
```javascript
1. Click "Buy Products" on the dashboard
2. Browse available products
3. Add items to cart
4. Review cart contents
5. Click "Proceed to Checkout"
```

### Troubleshooting
#### Common Issues
1. Login Failures
   - Ensure correct phone number format
   - Verify Aadhar number is entered correctly
   - Check internet connectivity

2. Image Upload Issues
   - Ensure image size is under 5MB
   - Supported formats: JPG, PNG
   - Check browser permissions for file access

3. Payment Processing
   - Clear browser cache
   - Verify transaction timeout hasn't occurred
   - Check bank server status

#### Debug Mode
Enable debug logging:
```javascript
// Add to URL
?debug=true

// Check console for detailed logs
// Location: Browser Developer Tools (F12)
```

## Data Flow
The platform facilitates direct farmer-to-buyer transactions through a secure and authenticated marketplace system.

```ascii
[Farmer] -----> [Authentication] -----> [Dashboard]
    |                                       |
    |                                       v
[Product Listing] <---> [Database] <---> [Buyer Interface]
    |                       |                  |
    v                       v                  v
[Order Management] <--- [Transaction] <--- [Shopping Cart]
```

Key Component Interactions:
1. Authentication verifies user identity through Aadhar and phone number
2. Farmers can list products with details and images
3. Buyers browse products through a responsive interface
4. Shopping cart manages temporary order storage
5. Transaction system handles secure payment processing
6. Order management tracks delivery and completion
7. Real-time updates maintain inventory accuracy
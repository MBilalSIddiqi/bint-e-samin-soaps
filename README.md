# Bint-e-Samin Soaps - Website

A modern, responsive multi-page e-commerce website for a soap seller with WhatsApp checkout integration.

## Features

- **Multi-Page Structure**: Separate pages for Home, Products, and Contact
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Product Catalog**: 8 different soap products with descriptions and pricing
- **Shopping Cart**: Add/remove items, adjust quantities
- **WhatsApp Checkout**: Orders are sent directly to WhatsApp (+92 334 3601488)
- **Contact Form**: Contact form that sends inquiries via WhatsApp
- **Local Storage**: Cart persists even after closing the browser
- **Smooth Animations**: Modern UI with smooth transitions
- **Clean Design**: Purple gradient theme with professional styling

## How to Use

### Opening the Website

1. Navigate to the `soap-shop` directory
2. Open `index.html` in any web browser (Chrome, Firefox, Safari, Edge)
   - **Double-click** the `index.html` file, OR
   - **Right-click** and select "Open with" → your browser

### Using the Website

1. **Navigate Pages**: Use the navigation menu to switch between:
   - **Home**: Welcome page with hero section and about information
   - **Products**: Browse all available soaps
   - **Contact**: Get in touch via contact form
2. **Browse Products**: Go to the Products page to see all available soaps
3. **Add to Cart**: Click "Add to Cart" on any product
4. **View Cart**: Click the cart icon (🛒) in the navigation bar (available on all pages)
5. **Adjust Quantities**: Use + and - buttons in the cart
6. **Remove Items**: Click "Remove" button on any cart item
7. **Checkout**: Click "Checkout via WhatsApp" button
   - This will open WhatsApp with your order details pre-filled
   - The message will be sent to +92 334 3601488
8. **Contact Us**: Fill out the contact form on the Contact page
   - Submissions are sent via WhatsApp to +92 334 3601488

## Product List

1. **Lavender Dreams** - Rs. 350
2. **Honey Oat** - Rs. 400
3. **Mint Fresh** - Rs. 380
4. **Rose Garden** - Rs. 450
5. **Citrus Burst** - Rs. 370
6. **Charcoal Detox** - Rs. 420
7. **Coconut Cream** - Rs. 390
8. **Aloe Vera Bliss** - Rs. 410

## Customization

### Changing Products

Edit `script.js` and modify the `products` array:

```javascript
const products = [
    {
        id: 1,
        name: "Product Name",
        description: "Product description",
        price: 350,
        emoji: "💜"
    },
    // Add more products...
];
```

### Changing WhatsApp Number

Edit `script.js` line 178:

```javascript
const phoneNumber = '923343601488'; // Change this number
```

### Changing Colors

Edit `styles.css` and modify the color values:
- Primary gradient: `#667eea` and `#764ba2`
- WhatsApp button: `#25D366`

## Files Structure

```
soap-shop/
├── index.html                  # Home page
├── products.html               # Products catalog page
├── contact.html                # Contact page with form
├── about.html                  # About Us page
├── faq.html                    # Frequently Asked Questions page
├── 404.html                    # 404 error page (Page Not Found)
├── 500.html                    # 500 error page (Server Error)
├── error.html                  # Generic error page
├── README.md                   # This file
├── ERROR-PAGES-TESTING.md      # Guide for testing error pages
├── HISTORY.md                  # Complete development history with timestamps
├── todo-list.txt               # Development task list
├── .claude/                    # Claude AI settings
│   └── settings.local.json
└── assets/                     # Static assets folder
    ├── css/                    # Stylesheet files
    │   └── styles.css          # All styling and responsive design
    ├── js/                     # JavaScript files
    │   ├── script.js           # Cart logic and WhatsApp integration
    │   └── contact.js          # Contact form handler
    └── images/                 # Image assets
        └── (screenshots, etc.)
```

## Browser Compatibility

Works on all modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## No Server Required

This is a static website - no server or hosting required! Just open the HTML file in a browser.

## Error Pages

The website includes professional error pages:

- **404.html** - Page Not Found (purple theme)
- **500.html** - Server Error (red theme)
- **error.html** - Generic Error (orange theme)

All error pages include:
- Clear error messages
- Navigation to return home or contact support
- Working cart functionality
- WhatsApp contact integration

### Testing Error Pages

See the comprehensive [ERROR-PAGES-TESTING.md](ERROR-PAGES-TESTING.md) guide for detailed testing instructions.

**Quick Test:**
1. Open `404.html`, `500.html`, or `error.html` directly in your browser
2. Or try accessing a non-existent page like: `file:///path/to/soap-shop/fake-page.html`

## Future Enhancements

Potential additions:
- Image upload for actual product photos
- Customer reviews and ratings
- Discount codes
- Order tracking
- Multiple payment options
- Admin panel for product management

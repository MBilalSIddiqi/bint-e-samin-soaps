// ============================================
// EVENT LISTENERS (replacing inline onclick)
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Cart button event listener
    const cartButton = document.querySelector('.cart-btn');
    if (cartButton) {
        cartButton.addEventListener('click', toggleCart);
    }

    // Mobile menu hamburger button
    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
        // Touch support for mobile
        hamburger.addEventListener('touchend', function(e) {
            e.preventDefault();
            toggleMobileMenu();
        });
    }

    // Close cart button
    const closeCartBtn = document.querySelector('.close-btn');
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', toggleCart);
    }

    // Overlay click to close cart
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.addEventListener('click', toggleCart);
    }

    // Initialize accordion if FAQ page exists
    if (document.querySelector('.accordion-header')) {
        initAccordion();
    }
});

// Focus management for cart sidebar
function handleCartFocusTrap() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartButton = document.querySelector('.cart-btn');
    const closeBtn = document.querySelector('.close-btn');
    const cartItems = cartSidebar.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstFocusableElement = closeBtn;
    const lastFocusableElement = cartItems[cartItems.length - 1];

    if (cartSidebar.getAttribute('aria-hidden') === 'false') {
        // Update aria-expanded state
        cartButton.setAttribute('aria-expanded', 'true');

        // Move focus to close button
        if (firstFocusableElement) {
            firstFocusableElement.focus();
        }

        // Handle tab trapping
        document.addEventListener('keydown', function trapFocus(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusableElement) {
                        e.preventDefault();
                        lastFocusableElement.focus();
                    }
                } else {
                    if (document.activeElement === lastFocusableElement) {
                        e.preventDefault();
                        firstFocusableElement.focus();
                    }
                }
            }

            if (e.key === 'Escape') {
                toggleCart();
                cartButton.focus();
                document.removeEventListener('keydown', trapFocus);
            }
        });
    } else {
        cartButton.setAttribute('aria-expanded', 'false');
        cartButton.focus();
    }
}

// Update toggleCart to use focus management
const originalToggleCart = window.toggleCart;
window.toggleCart = function() {
    originalToggleCart();
    setTimeout(handleCartFocusTrap, 10);
};

// Update toggleMobileMenu to update aria-expanded
const originalToggleMobileMenu = window.toggleMobileMenu;
window.toggleMobileMenu = function() {
    originalToggleMobileMenu();
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        const isExpanded = navLinks.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isExpanded.toString());
    }
};

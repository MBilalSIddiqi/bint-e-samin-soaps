// Contact Form Handler with input sanitization
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Sanitize function for contact form inputs
    function sanitizeInput(input) {
        if (typeof input !== 'string') return '';
        // Remove HTML tags and trim
        return input.replace(/<[^>]*>/g, '').trim();
    }

    // Get and sanitize form values
    const name = sanitizeInput(document.getElementById('name').value);
    const email = sanitizeInput(document.getElementById('email').value);
    const phone = sanitizeInput(document.getElementById('phone').value);
    const subject = sanitizeInput(document.getElementById('subject').value);
    const message = sanitizeInput(document.getElementById('message').value);

    // Validate required fields
    if (!name || !email || !subject || !message) {
        alert('Please fill in all required fields.');
        return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Build WhatsApp message
    let whatsappMessage = '📧 *Contact Form Submission*\n\n';
    whatsappMessage += `*Name:* ${name}\n`;
    whatsappMessage += `*Email:* ${email}\n`;

    if (phone) {
        whatsappMessage += `*Phone:* ${phone}\n`;
    }

    whatsappMessage += `*Subject:* ${subject}\n\n`;
    whatsappMessage += `*Message:*\n${message}\n\n`;
    whatsappMessage += '━━━━━━━━━━━━━━━━\n';
    whatsappMessage += 'Sent from Bint-e-Samin Soaps website';

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp link (using WHATSAPP_PHONE_NUMBER from script.js if available, otherwise fallback)
    const phoneNumber = typeof WHATSAPP_PHONE_NUMBER !== 'undefined' ? WHATSAPP_PHONE_NUMBER : '923343601488';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Reset form
    this.reset();

    // Show success message
    alert('Thank you! Your message will be sent via WhatsApp.');
});

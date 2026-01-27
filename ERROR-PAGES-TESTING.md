# Error Pages Testing Guide

This guide explains how to test the error pages in your Bint-e-Samin Soaps website.

## Error Pages Created

1. **404.html** - Page Not Found Error
2. **500.html** - Internal Server Error
3. **error.html** - Generic Error Page

## How to Test Error Pages

### Method 1: Direct Access (Easiest)

Simply open the error page files directly in your browser:

1. **Test 404 Page:**
   - Navigate to `/home/hasan/hello_world/soap-shop/`
   - Double-click `404.html`
   - OR type in browser: `file:///home/hasan/hello_world/soap-shop/404.html`

2. **Test 500 Page:**
   - Navigate to `/home/hasan/hello_world/soap-shop/`
   - Double-click `500.html`
   - OR type in browser: `file:///home/hasan/hello_world/soap-shop/500.html`

3. **Test Generic Error Page:**
   - Navigate to `/home/hasan/hello_world/soap-shop/`
   - Double-click `error.html`
   - OR type in browser: `file:///home/hasan/hello_world/soap-shop/error.html`

### Method 2: Trigger 404 Error

When viewing the website, try to access a non-existent page:

1. Open your website in a browser
2. In the address bar, add a fake page name:
   - Example: `file:///home/hasan/hello_world/soap-shop/nonexistent.html`
   - Example: `file:///home/hasan/hello_world/soap-shop/fake-product.html`

**Note:** This only works if you configure your web server to redirect 404 errors to `404.html`

### Method 3: Using a Local Web Server

For more realistic testing, set up a local web server:

#### Option A: Using Python (if Python is installed)

```bash
# Navigate to the soap-shop directory
cd /home/hasan/hello_world/soap-shop

# Start a local server (Python 3)
python3 -m http.server 8000

# Or if you have Python 2
python -m SimpleHTTPServer 8000
```

Then:
- Open browser to: `http://localhost:8000`
- Test 404: `http://localhost:8000/nonexistent-page`
- View error pages directly:
  - `http://localhost:8000/404.html`
  - `http://localhost:8000/500.html`
  - `http://localhost:8000/error.html`

#### Option B: Using Node.js (if Node.js is installed)

```bash
# Install http-server globally (one time only)
npm install -g http-server

# Navigate to soap-shop directory
cd /home/hasan/hello_world/soap-shop

# Start server
http-server -p 8000
```

Then access same URLs as Python method above.

#### Option C: Using PHP (if PHP is installed)

```bash
# Navigate to soap-shop directory
cd /home/hasan/hello_world/soap-shop

# Start PHP built-in server
php -S localhost:8000
```

Then access same URLs as methods above.

## What to Test on Each Error Page

### 404 Page (404.html)
✅ Check that it displays:
- Large "404" error code
- Soap emoji (🧼)
- "Oops! Page Not Found" message
- "Go Home" button (should redirect to index.html)
- "Browse Products" button (should redirect to products.html)
- Suggestions list
- Working navigation menu
- Working cart functionality

### 500 Page (500.html)
✅ Check that it displays:
- Large "500" error code
- Warning emoji (⚠️)
- "Internal Server Error" message
- "Go Home" button (should redirect to index.html)
- "Contact Support" button (should redirect to contact.html)
- Explanation of what happened
- Working navigation menu
- Working cart functionality

### Generic Error Page (error.html)
✅ Check that it displays:
- "Oops!" message
- Sad emoji (😕) with bounce animation
- "Something Went Wrong" message
- "Go Home" button (should redirect to index.html)
- "Go Back" button (should use browser's back button)
- Solutions list
- WhatsApp contact button (should open WhatsApp)
- Working navigation menu
- Working cart functionality

## Testing Checklist

For each error page, verify:

- [ ] Page loads correctly
- [ ] All styling is applied (purple gradient header)
- [ ] Navigation links work
- [ ] Cart button shows correct item count
- [ ] Cart sidebar opens when clicked
- [ ] Footer displays correctly
- [ ] Error message is clear and helpful
- [ ] Action buttons work correctly
- [ ] Page is responsive (test on mobile/tablet size)
- [ ] WhatsApp links (where applicable) open correctly

## Simulating 500 Errors

Since 500 errors are server-side errors, they're harder to test with static files. Options:

1. **Direct access** (easiest): Just open `500.html` directly
2. **Server configuration**: Configure your web server to show `500.html` for server errors
3. **Broken server script**: If using a dynamic server, create a script that intentionally crashes

## Production Setup (When You Deploy)

When you deploy this website to a real web server, configure your server to:

1. **For Apache (.htaccess file):**
```apache
ErrorDocument 404 /404.html
ErrorDocument 500 /500.html
```

2. **For Nginx (nginx.conf):**
```nginx
error_page 404 /404.html;
error_page 500 502 503 504 /500.html;
```

3. **For Node.js/Express:**
```javascript
// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/404.html');
});

// Error handler
app.use((err, req, res, next) => {
  res.status(500).sendFile(__dirname + '/500.html');
});
```

## Quick Test Commands

```bash
# Navigate to soap-shop directory
cd /home/hasan/hello_world/soap-shop

# List all error pages
ls -la *.html | grep -E "(404|500|error)"

# Open 404 page in default browser (Linux)
xdg-open 404.html

# Open 500 page in default browser (Linux)
xdg-open 500.html

# Open error page in default browser (Linux)
xdg-open error.html
```

## Browser Developer Tools Testing

1. Open any error page in your browser
2. Press F12 to open Developer Tools
3. Check the Console tab for any JavaScript errors
4. Check the Network tab to ensure all resources (CSS, JS) load correctly
5. Use Device Toolbar (Ctrl+Shift+M) to test responsive design

## Notes

- Error pages maintain the same design consistency as the rest of your website
- Cart functionality is preserved even on error pages
- Each error page has a unique color scheme:
  - 404: Purple gradient (matches brand)
  - 500: Red gradient (indicates critical error)
  - Generic: Orange gradient (indicates warning)
- All error pages include helpful suggestions and navigation options
- WhatsApp contact integration is available for quick support

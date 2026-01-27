#!/bin/bash

echo "Opening favicon generator in browser..."
echo ""
echo "=== INSTRUCTIONS ==="
echo "1. Open generate-favicons.html in your browser:"
echo "   file:///home/hasan/hello_world/soap-shop/generate-favicons.html"
echo ""
echo "2. Click the download buttons to get:"
echo "   - favicon.ico (32x32)"
echo "   - apple-touch-icon.png (180x180)"
echo ""
echo "3. Move the downloaded files to this directory"
echo ""
echo "Alternative: Use an online generator:"
echo "   - https://favicon.io/favicon-generator/"
echo "   - Upload the soap emoji 🧼"
echo "   - Use colors: #667eea and #764ba2"
echo ""

# Try to open in browser
if command -v xdg-open &> /dev/null; then
    xdg-open generate-favicons.html
elif command -v open &> /dev/null; then
    open generate-favicons.html
elif command -v wslview &> /dev/null; then
    wslview generate-favicons.html
else
    echo "Please open generate-favicons.html manually in your browser"
fi


# Deployment Guide - Bint-e-Samin Soaps

This guide contains instructions for deploying the Bint-e-Samin Soaps website to various free hosting platforms.

---

## GitHub Pages (Recommended)

GitHub Pages is a free hosting service that's perfect for static websites like this one.

### Prerequisites
- A GitHub account ([sign up here](https://github.com/join))
- Git installed on your computer

### Step 1: Initialize Git Repository

```bash
cd /home/hasan/hello_world/soap-shop

# Initialize git repository
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Bint-e-Samin Soaps - Initial commit"
```

### Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click the "+" icon in top right → "New repository"
3. Repository name: `soap-shop` (or any name you prefer)
4. Description: "Bint-e-Samin Soaps - Handmade natural soap e-commerce website"
5. Choose "Public" (required for free GitHub Pages)
6. **Do NOT** initialize with README, .gitignore, or license (we already have files)
7. Click "Create repository"

### Step 3: Connect Local Repository to GitHub

```bash
# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/soap-shop.git

# Rename branch to main
git branch -M main

# Push code to GitHub
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in left sidebar
4. Under "Source":
   - Select "Deploy from a branch"
   - Branch: `main`
   - Folder: `/ (root)`
5. Click "Save"

### Step 5: Access Your Website

After 2-3 minutes, your site will be live at:
```
https://YOUR_USERNAME.github.io/soap-shop/
```

Check the green banner in Settings → Pages for the exact URL.

---

## Updating Your Website

After making changes to your website:

```bash
cd /home/hasan/hello_world/soap-shop

# Check what files changed
git status

# Add all changes
git add .

# Commit with a descriptive message
git commit -m "Update products page styling"

# Push to GitHub
git push
```

Your website will automatically update within 1-2 minutes!

---

## Custom Domain (Optional)

If you want to use your own domain name (e.g., `pureessencesoaps.com`):

### Step 1: Buy a Domain
- Namecheap.com (~$10/year)
- GoDaddy.com (~$12/year)
- Cloudflare (~$9/year)

### Step 2: Configure DNS

Add these DNS records in your domain registrar:

**For apex domain (pureessencesoaps.com):**
```
Type: A
Name: @
Value: 185.199.108.153
```
```
Type: A
Name: @
Value: 185.199.109.153
```
```
Type: A
Name: @
Value: 185.199.110.153
```
```
Type: A
Name: @
Value: 185.199.111.153
```

**For www subdomain (www.pureessencesoaps.com):**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

### Step 3: Configure GitHub Pages

1. Go to repository Settings → Pages
2. Under "Custom domain", enter: `pureessencesoaps.com`
3. Click "Save"
4. Wait for DNS check (can take up to 24 hours)
5. Check "Enforce HTTPS" once available

---

## Alternative Free Hosting Options

### Netlify

**Quick Deploy:**
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Drag and drop the `soap-shop` folder
4. Done! You get `https://random-name.netlify.app`

**Or with CLI:**
```bash
npm install -g netlify-cli
cd /home/hasan/hello_world/soap-shop
netlify deploy --prod
```

**Pros:**
- Drag-and-drop deployment
- Form handling built-in
- Automatic HTTPS
- Free custom domain

---

### Vercel

**Quick Deploy:**
```bash
npm install -g vercel
cd /home/hasan/hello_world/soap-shop
vercel
```

**Or:**
1. Go to [vercel.com](https://vercel.com)
2. Import GitHub repository
3. Deploy

**Pros:**
- Fastest CDN
- Automatic deployments
- Preview URLs for each commit
- Free custom domain

---

### Cloudflare Pages

**Quick Deploy:**
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect GitHub account
3. Select repository
4. Deploy

**Pros:**
- Cloudflare's global CDN
- Unlimited bandwidth
- DDoS protection
- Best performance

---

### Render

**Quick Deploy:**
1. Go to [render.com](https://render.com)
2. Click "New +" → "Static Site"
3. Connect GitHub repository
4. Deploy

**Pros:**
- Simple interface
- Free SSL
- Custom domains

---

## Comparison Table

| Platform | Setup Difficulty | Speed | Custom Domain | SSL | Best For |
|----------|------------------|-------|---------------|-----|----------|
| GitHub Pages | Easy | Fast | Yes (free) | Yes | Simple sites, version control |
| Netlify | Very Easy | Very Fast | Yes (free) | Yes | Forms, drag-and-drop |
| Vercel | Easy | Fastest | Yes (free) | Yes | Performance-focused |
| Cloudflare Pages | Easy | Very Fast | Yes (free) | Yes | Maximum security |
| Render | Easy | Fast | Yes (paid) | Yes | Simple deployment |

---

## Troubleshooting

### Issue: 404 Page Not Found
- Make sure `index.html` is in the root folder
- Check GitHub Pages settings (Settings → Pages)
- Wait 5 minutes after pushing changes

### Issue: CSS/JS Not Loading
- Check file paths in HTML files
- Ensure paths are relative (e.g., `assets/css/styles.css`, not `/assets/css/styles.css`)
- Clear browser cache (Ctrl+Shift+R)

### Issue: WhatsApp Links Not Working
- WhatsApp links should work fine (they use `https://wa.me/` which is allowed)
- Test on mobile device for best experience

### Issue: Images Not Loading
- Make sure all images are in the `assets/images/` folder
- Check file names match exactly (case-sensitive on Linux/GitHub)

---

## Security Notes

- Your `.env` file is **NOT** included in the repository (good!)
- Never commit sensitive data (API keys, passwords)
- GitHub Pages is served over HTTPS automatically
- Content Security Policy is already configured

---

## Performance Tips

Already implemented in your site:
- ✅ Content Security Policy (CSP)
- ✅ No external dependencies
- ✅ Optimized CSS
- ✅ Debounced search
- ✅ Local storage for cart

Future improvements:
- Minify CSS/JS for production
- Compress images
- Add favicon
- Add Open Graph images

---

## Need Help?

- **GitHub Pages Docs:** [docs.github.com/pages](https://docs.github.com/pages)
- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)

---

*Last Updated: January 1, 2026*

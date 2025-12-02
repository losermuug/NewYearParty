# Deployment Guide - New Year Party Website

## Overview

This guide provides step-by-step instructions to deploy the New Year Party website to production using Vercel, Netlify, or GitHub Pages.

## Prerequisites

- Node.js 16+
- Git repository (GitHub recommended)
- Production build folder (`dist/`)

## Option 1: Deploy to Vercel (Recommended)

Vercel is the creator of Next.js and offers seamless React/Vite deployments with zero-config.

### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub" (recommended)
4. Authorize Vercel to access your GitHub account

### Step 2: Import Project
1. Click "New Project"
2. Select your GitHub repository
3. Vercel auto-detects Vite configuration

### Step 3: Configure Settings
- **Project Name**: newyear (or desired name)
- **Framework Preset**: Vite
- **Root Directory**: ./ (default)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Step 4: Environment Variables
If you need environment variables, add them in Vercel dashboard:
1. Project Settings → Environment Variables
2. Add any required variables (currently none needed)

### Step 5: Deploy
1. Click "Deploy"
2. Vercel builds and deploys your site
3. Get live URL (example: `https://newyear-wine.vercel.app`)

### Auto-Deploy on Git Push
Once connected, Vercel automatically deploys when you push to `main` branch.

**Command Line Deploy:**
```bash
npm install -g vercel
vercel --prod
```

---

## Option 2: Deploy to Netlify

Netlify offers Git-based deployments with built-in CI/CD.

### Step 1: Create Netlify Account
1. Go to [netlify.com](https://netlify.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"

### Step 2: Connect Repository
1. Click "New site from Git"
2. Select GitHub
3. Choose your repository
4. Authorize Netlify

### Step 3: Configure Build Settings
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Functions**: Skip (not needed)

### Step 4: Deploy
1. Click "Deploy Site"
2. Netlify builds and publishes
3. Your site is live at `https://<sitename>.netlify.app`

### Update Deployment
Every push to `main` triggers auto-deployment.

**Manual Deploy:**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

---

## Option 3: Deploy to GitHub Pages

Free hosting directly from your GitHub repository.

### Step 1: Update Vite Config
Edit `vite.config.ts` to set base URL:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/NewYear/', // Replace 'NewYear' with your repo name
  plugins: [react()],
})
```

### Step 2: Build Locally
```bash
npm run build
```

### Step 3: Commit & Push
```bash
git add -A
git commit -m "Build for GitHub Pages"
git push origin main
```

### Step 4: Enable GitHub Pages
1. Go to repository Settings
2. Scroll to "Pages" section
3. Under "Build and deployment":
   - **Source**: GitHub Actions
4. GitHub automatically deploys `dist/` folder

**Manual deploy with script:**
```bash
# Create gh-pages branch
git checkout --orphan gh-pages

# Add dist folder
git add dist -f
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
git push origin gh-pages:gh-pages
```

Your site will be at: `https://username.github.io/NewYear`

---

## Post-Deployment Checklist

After deploying to any platform, verify:

- [ ] **Homepage loads**: Visit your deployment URL
- [ ] **All links work**: Test all buttons and navigation
- [ ] **Google Form opens**: Click "Register" button
- [ ] **Map displays**: Embedded Google Maps shows location
- [ ] **Responsive design**: Test on mobile (use DevTools)
- [ ] **Countdown works**: Timer updates in real-time
- [ ] **Animations play**: Snowflakes and confetti appear
- [ ] **SEO**: Check page title and meta description in source

## Troubleshooting

### Build Fails
- Check Node.js version: `node --version` (should be 16+)
- Delete `node_modules` and reinstall: `npm install`
- Check for TypeScript errors: `npm run build` locally

### Site Not Updating After Deploy
- **Vercel/Netlify**: Check deployment logs in dashboard
- **GitHub Pages**: May take 2-5 minutes, try incognito window
- Clear browser cache: `Ctrl+Shift+Delete` (Chrome)

### Google Form Not Loading
- Verify form URL in `src/config.ts`
- Check form sharing permissions
- Test in incognito window

### Map Embed Not Showing
- Verify Google Maps embed URL
- Check if iframes are blocked in browser
- Confirm location coordinates are correct

## Custom Domain

### Vercel
1. Project Settings → Domains
2. Add custom domain
3. Update DNS records (Vercel provides instructions)

### Netlify
1. Site Settings → Domain Management
2. Add custom domain
3. Update DNS records at domain registrar

### GitHub Pages
1. Add `CNAME` file to repository root with domain name
2. Update DNS records to point to GitHub Pages

---

## Environment-Specific Configuration

Create `.env` files for different environments:

### `.env.local` (development)
```env
VITE_API_URL=http://localhost:3000
```

### `.env.production` (production)
```env
VITE_API_URL=https://your-domain.com
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

---

## Monitoring & Analytics

### Add Google Analytics (Optional)
1. Install: `npm install react-ga4`
2. Add to `main.tsx`:
```typescript
import ReactGA from "react-ga4";
ReactGA.initialize("G-YOUR_ID");
ReactGA.send("pageview");
```

### Performance Monitoring
- Use Vercel/Netlify Analytics
- Check Lighthouse in Chrome DevTools
- Target: Accessibility ≥80, Performance ≥80

---

## Rollback & Versioning

### Vercel/Netlify
- Automatic version history in dashboard
- One-click rollback to previous deployment

### GitHub Pages
- Revert to previous commit
- Redeploy from older version tag

---

## Maintenance

### Regular Updates
```bash
# Update dependencies
npm update

# Check for vulnerabilities
npm audit

# Run tests
npm run test

# Rebuild and deploy
npm run build
git add -A
git commit -m "Update dependencies"
git push
```

### Monitoring Uptime
- Use free tools like [UptimeRobot](https://uptimerobot.com)
- Set alerts for deployment failures

---

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **GitHub Pages**: https://pages.github.com
- **Vite Guide**: https://vitejs.dev/guide/

---

**Deployed! 🎉** Your New Year Party website is now live!

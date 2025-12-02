# ⚡ Quick Start Guide

## 1️⃣ Setup (First Time Only)

```bash
npm install
```

## 2️⃣ Edit Event Details

Open `src/config.ts` and update:

```typescript
// Most important - Replace with your Google Form ID
googleFormUrl: 'https://forms.gle/YOUR_FORM_ID_HERE',

// Update these with your event info
title: 'New Year Party 2026',
dateDisplay: 'January 20, 2026',
startTime: '18:00',
location: 'Main University Hall, Building 8',
basePrice: 5000,
```

## 3️⃣ Run Locally

```bash
npm run dev
```

Opens at `http://localhost:3000` with live reload ♨️

## 4️⃣ Build for Production

```bash
npm run build
```

Creates `dist/` folder ready to deploy 📦

## 5️⃣ Deploy

Choose one:

### Option A: Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Option B: Netlify
1. Push code to GitHub
2. Go to netlify.com → "New site from Git"
3. Select your repo
4. Done! Auto-deploys on push

### Option C: GitHub Pages
1. Update `vite.config.ts` → set `base: '/YourRepoName/'`
2. Push to GitHub
3. Enable Pages in Settings

## 📝 What to Customize

### 1. Google Form URL (CRITICAL!)
```typescript
// src/config.ts
googleFormUrl: 'https://forms.gle/YOUR_FORM_ID',
```

Get your form ID from Google Forms share link.

### 2. Event Details
- Date, time, location
- Price and tax info
- Contact email/phone
- Schedule of activities

### 3. Colors & Branding
```typescript
// tailwind.config.ts
colors: {
  'party-gold': '#FFD700',      // Golden highlight
  'party-deep-blue': '#0F172A', // Dark background
}
```

### 4. Organizers
```typescript
// src/config.ts
organizers: [
  { name: 'Software Engineering', color: 'bg-blue-600' },
  { name: 'Information Technology', color: 'bg-purple-600' },
  { name: 'Information Systems', color: 'bg-indigo-600' },
]
```

## 🧪 Test Before Deploy

```bash
# TypeScript check
npm run type-check

# Build locally
npm run build

# Preview build
npm run preview
```

## ✅ Pre-Launch Checklist

- [ ] Google Form URL updated in `config.ts`
- [ ] Event date & time correct
- [ ] Location and address set
- [ ] Pricing and tax shown correctly
- [ ] All links open in new tab
- [ ] Responsive on mobile (test with DevTools)
- [ ] Countdown timer working
- [ ] Build successful: `npm run build`
- [ ] No console errors

## 🚀 Deploy Command

```bash
npm run build
# Then deploy dist/ folder to your hosting platform
```

## 📞 Support

- 📖 Full guide: [README.md](./README.md)
- 🛠️ Development: [DEVELOPMENT.md](./DEVELOPMENT.md)
- 🌐 Deploy: [DEPLOYMENT.md](./DEPLOYMENT.md)

---

**Ready?** Start with: `npm install && npm run dev`

🎉 Good luck with your New Year Party!

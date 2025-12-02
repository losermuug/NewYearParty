# New Year Party 2026 Website

A responsive, festive React website for celebrating the New Year with Software Engineering, IT, and Information Systems departments.

## 🎉 Features

- **Responsive Design**: Mobile-first layout that works on all devices
- **Festive UI**: Animated snowflakes, confetti effects, and gradient styling
- **Countdown Timer**: Real-time countdown to the event
- **Event Timeline**: Schedule of activities throughout the night
- **Easy Registration**: Prominent Google Form integration
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation
- **Performance Optimized**: Vite build tool, lazy-loaded components
- **SEO Friendly**: Meta tags, structured data, open graph support

## 📋 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool for fast development and production builds
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **Jest + React Testing Library** - Unit testing

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd NewYear

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will open at `http://localhost:3000` with hot reload enabled.

### Build for Production

```bash
# Build the project
npm run build

# Preview production build locally
npm run preview
```

The production-ready files will be in the `dist/` directory.

## 📝 Configuration & Content

All event details are centralized in **`src/config.ts`**. Edit this single file to update:

### Party Details
```typescript
title: 'New Year Party 2026',
subtitle: 'Software, IT & Information Systems',
tagline: 'Celebrate the start of a new year together!',
```

### Date & Time
```typescript
date: '2026-01-20', // YYYY-MM-DD format
dateDisplay: 'January 20, 2026',
startTime: '18:00',
endTime: '23:00',
```

### Location
```typescript
location: 'Main University Hall, Building 8',
fullAddress: 'Main University Hall, Building 8, University Campus, City, Country',
googleMapsDirectionsUrl: 'https://maps.google.com/?q=...',
```

### Pricing
```typescript
basePrice: 5000, // in MNT
currency: 'MNT',
taxPercentage: 10,
taxLabel: 'Tax included',
totalSeats: 500,
remainingSeats: 325, // Update this as registrations come in
```

### Google Form & Links
```typescript
googleFormUrl: 'https://forms.gle/YOUR_FORM_ID_HERE', // ⚠️ IMPORTANT: Replace with your form
googleFormLabel: 'Submit Your Performance',
rsvpLabel: 'Register for RSVP',
```

### Contact Information
```typescript
contact: {
  email: 'events@university.edu',
  phone: '+976 1234 5678',
},
```

### Schedule
Update the `schedule` array to customize the event timeline:
```typescript
schedule: [
  { time: '18:00', activity: 'Doors Open', description: '...' },
  { time: '18:30', activity: 'Opening Speech', description: '...' },
  // ... more events
],
```

### Organizers
```typescript
organizers: [
  { name: 'Software Engineering Department', shortName: 'SE', color: 'bg-blue-600' },
  { name: 'Information Technology Department', shortName: 'IT', color: 'bg-purple-600' },
  { name: 'Information Systems Department', shortName: 'IS', color: 'bg-indigo-600' },
],
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Connect Repository**
   ```bash
   npm install -g vercel
   vercel
   ```
   Follow the prompts to connect your GitHub account and authorize Vercel.

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Configure Build Settings** (if needed in Vercel dashboard):
   - Build Command: `npm run build`
   - Output Directory: `dist`

### Deploy to Netlify

1. **Build your project locally**
   ```bash
   npm run build
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

3. **Deploy**
   - Netlify will automatically deploy on push to main branch

### Deploy to GitHub Pages

1. **Update `vite.config.ts`** to set the base URL:
   ```typescript
   export default defineConfig({
     base: '/NewYear/', // Replace 'NewYear' with your repo name
     // ... other config
   })
   ```

2. **Build and deploy**
   ```bash
   npm run build
   git add dist/
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

3. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Select `main` branch, `/docs` folder or `gh-pages` branch

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests with coverage
npm run test -- --coverage
```

## ♿ Accessibility

This site follows WCAG 2.1 Level AA standards:

- ✅ Semantic HTML elements (`<section>`, `<article>`, `<nav>`, etc.)
- ✅ ARIA labels for icons and interactive elements
- ✅ Keyboard navigation support (Tab, Enter, Escape)
- ✅ Focus visible indicators on all interactive elements
- ✅ Color contrast ratios meet accessibility standards
- ✅ Alt text for all images and icons

### Test Accessibility

Run Lighthouse in Chrome DevTools:
1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Run accessibility audit
4. Target score: 80+

## 📱 Components

### `Hero`
- Party title, tagline, and countdown timer
- Main call-to-action buttons
- Animated snowflake background

### `EventDetails`
- Date, time, location
- Dress code
- Pricing with tax breakdown
- Info tooltips

### `Schedule`
- Vertical timeline of activities
- Animated timeline dots
- Responsive layout

### `Participation`
- How to submit performances
- 3-step submission process
- Confetti animation on submit

### `RSVP`
- Ticket availability counter
- Seat capacity indicator
- Quick information boxes

### `Map`
- Embedded Google Maps
- Directions link
- Parking & location details

### `Footer`
- Contact information
- Organizer details
- Accessibility statement

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      'party-gold': '#FFD700',      // Primary highlight color
      'party-deep-blue': '#0F172A', // Primary dark color
    },
  },
}
```

### Fonts

The site uses system fonts by default. To add custom fonts, update `App.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

body {
  font-family: 'Poppins', system-ui, sans-serif;
}
```

### Images & Favicons

1. **Favicon**: Replace `public/favicon.svg` with your icon
2. **Open Graph Image**: Add `public/og-image.png` and update `index.html` meta tags

## 📊 Performance

- **Lighthouse Score Target**: 90+
- **Bundle Size**: ~50KB (gzipped)
- **Lazy Loading**: Non-critical images load on scroll
- **CSS Purging**: Unused Tailwind styles removed in production

### Check Performance

```bash
npm run build
npm run preview
# Open DevTools → Lighthouse, run audit
```

## 🛠️ Development

### Environment Variables

Create `.env.local` for development:

```env
# Add any API keys or environment-specific config
VITE_API_URL=http://localhost:3000
```

### Project Structure

```
src/
├── components/
│   ├── animations/
│   │   ├── Confetti.tsx
│   │   └── Snowflake.tsx
│   ├── Countdown.tsx
│   ├── EventDetails.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── InfoIcon.tsx
│   ├── Map.tsx
│   ├── Participation.tsx
│   ├── RSVP.tsx
│   └── Schedule.tsx
├── config.ts          # ⚠️ Edit this for event details
├── App.tsx
├── App.css
├── App.test.tsx
└── main.tsx
```

## 🐛 Troubleshooting

### Google Form not loading?
- Check that the URL in `src/config.ts` is correct
- Ensure the form has proper sharing permissions
- Test in incognito window to rule out cache issues

### Map not displaying?
- Verify the Google Maps embed URL is valid
- Check that iframes are not blocked
- Ensure full address is correct for Maps API

### Styles not applying?
- Clear browser cache and rebuild: `npm run build`
- Check Tailwind config classes are included in `content` array
- Verify no conflicting CSS is present

## 📞 Support

For issues or questions:
1. Check the README for configuration options
2. Review component code comments
3. Run tests: `npm run test`
4. Check browser console for errors

## 📄 License

This project is open source and available under the MIT License.

## 🚀 Next Steps

1. **Replace Google Form URL**: Update `src/config.ts` with your actual form ID
2. **Customize Content**: Edit all text, dates, and contact info in `src/config.ts`
3. **Update Map**: Replace Google Maps embed URL with your location
4. **Test**: Run `npm run build` to verify everything works
5. **Deploy**: Choose Vercel, Netlify, or GitHub Pages
6. **Share**: Get your live URL and share with participants!

---

Made with ❤️ by the Software Engineering, IT, and Information Systems departments.

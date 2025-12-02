# Development Guide

## Project Structure

```
NewYear/
├── public/                    # Static assets
├── src/
│   ├── components/           # React components
│   │   ├── animations/       # Animation components
│   │   │   ├── Confetti.tsx
│   │   │   └── Snowflake.tsx
│   │   ├── Countdown.tsx     # Event countdown timer
│   │   ├── EventDetails.tsx  # Event info cards
│   │   ├── Footer.tsx        # Footer with contact info
│   │   ├── Hero.tsx          # Hero section
│   │   ├── InfoIcon.tsx      # Reusable info tooltip
│   │   ├── Map.tsx           # Google Maps embed
│   │   ├── Participation.tsx # Performance submission
│   │   ├── RSVP.tsx          # Ticket & registration
│   │   └── Schedule.tsx      # Event timeline
│   ├── App.tsx               # Main app component
│   ├── App.css               # Global styles
│   ├── App.test.tsx          # Component tests
│   ├── config.ts             # ⚠️ Event config (EDIT THIS)
│   ├── main.tsx              # Entry point
│   └── setupTests.ts         # Test configuration
├── dist/                     # Production build (generated)
├── .gitignore
├── index.html                # HTML entry point
├── jest.config.cjs           # Jest test config
├── package.json
├── postcss.config.cjs        # PostCSS config
├── tailwind.config.ts        # Tailwind CSS config
├── tsconfig.json             # TypeScript config
├── tsconfig.node.json
├── vite.config.ts            # Vite config
├── README.md                 # Setup & usage guide
└── DEPLOYMENT.md             # Deployment instructions
```

## Development Workflow

### Start Development Server
```bash
npm run dev
```
- Opens at `http://localhost:3000`
- Hot reload on file changes
- DevTools available (F12)

### Make Changes

#### 1. Edit Event Details
File: `src/config.ts`
```typescript
// Update any of these values
title: 'New Year Party 2026',
date: '2026-01-20',
googleFormUrl: 'https://forms.gle/YOUR_FORM_ID',
```

#### 2. Edit Component Content
Files in `src/components/`
- All text is editable
- Styles use Tailwind CSS classes
- Props passed from config

#### 3. Edit Global Styles
File: `src/App.css`
- Tailwind directives
- Custom CSS if needed

#### 4. Edit Colors/Theme
File: `tailwind.config.ts`
```typescript
colors: {
  'party-gold': '#FFD700',      // Change highlight color
  'party-deep-blue': '#0F172A', // Change main color
}
```

### Testing

```bash
# Run tests
npm run test

# Run tests with coverage
npm run test -- --coverage

# Watch mode
npm run test -- --watch
```

### Type Checking

```bash
# Check TypeScript errors
npm run type-check
```

### Code Quality

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint -- --fix
```

## Component Customization Guide

### Hero Component
**File**: `src/components/Hero.tsx`

- Title: Update text in JSX
- Background: Modify gradient classes (`bg-gradient-to-b`)
- Button: Change text and `onClick` handler
- Snowflakes: Adjust `length: 20` for more/fewer

### EventDetails Component
**File**: `src/components/EventDetails.tsx`

- Cards: Add/remove divs with `border-t-4` class
- Colors: Change border colors (border-party-gold, etc.)
- Content: Edit from `EVENT_CONFIG` in `src/config.ts`

### Schedule Component
**File**: `src/components/Schedule.tsx`

- Timeline: Edit `EVENT_CONFIG.schedule` array
- Timeline color: Change gradient colors
- Spacing: Adjust `gap-8` for tighter/looser layout

### Map Component
**File**: `src/components/Map.tsx`

- Update `googleMapsEmbedUrl` in config
- Change `fullAddress` text
- Modify link URLs

## Add New Sections

To add a new section to the site:

1. **Create component** in `src/components/NewSection.tsx`
2. **Import** in `App.tsx`
3. **Add to JSX** in render method
4. **Style** with Tailwind CSS

Example:
```typescript
// src/components/Gallery.tsx
import React from 'react'

export const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center">Photo Gallery</h2>
      {/* Add gallery content */}
    </section>
  )
}
```

Then in `App.tsx`:
```typescript
import { Gallery } from './components/Gallery'

export default function App() {
  return (
    <>
      {/* other sections */}
      <Gallery />
      <Footer />
    </>
  )
}
```

## CSS Classes Reference

### Colors (from tailwind.config.ts)
- `text-party-gold` - Gold text
- `bg-party-deep-blue` - Dark blue background
- Standard colors: `bg-white`, `text-slate-700`, `border-blue-500`

### Spacing
- `p-4` - Padding (4 = 1rem)
- `m-2` - Margin
- `gap-8` - Gap between flex items
- `py-20` - Vertical padding
- `px-4` - Horizontal padding

### Typography
- `text-3xl` - Large heading
- `font-bold` - Bold text
- `text-slate-700` - Text color
- `leading-tight` - Line height

### Layout
- `flex` - Flexbox
- `grid` - CSS Grid
- `grid-cols-1 md:grid-cols-2` - Responsive columns
- `relative`, `absolute` - Positioning

### Responsiveness
- `sm:` - Small screens (640px+)
- `md:` - Medium screens (768px+)
- `lg:` - Large screens (1024px+)
- Example: `text-2xl sm:text-3xl lg:text-4xl`

## Performance Tips

### Images
- Use WebP format when possible
- Lazy load below-fold images
- Optimize with tools like TinyPNG

### Animations
- Keep animations under 500ms
- Use CSS transforms (GPU accelerated)
- Test on mobile devices

### Bundle Size
- Check with: `npm run build`
- Tree-shake unused code
- Avoid large dependencies

## Accessibility Checklist

When adding new content, ensure:

- [ ] Semantic HTML (`<section>`, `<button>`, not `<div>`)
- [ ] `aria-label` on icons
- [ ] Keyboard navigation works (Tab key)
- [ ] Color contrast ≥ 4.5:1
- [ ] Focus visible on interactive elements
- [ ] Alt text on images

## Debugging

### React DevTools
- Install extension in Chrome
- View component tree
- Inspect props and state

### Browser DevTools
- **Console**: Check for JavaScript errors
- **Network**: Check asset load times
- **Lighthouse**: Run accessibility audit

### Common Issues
1. **Styles not applying**: Check Tailwind config `content` array
2. **Components not rendering**: Check imports and JSX syntax
3. **Type errors**: Run `npm run type-check`

## Git Workflow

```bash
# Make changes
git add src/config.ts

# Commit
git commit -m "Update event date and location"

# Push to GitHub
git push origin main

# For deployment to Vercel/Netlify, it auto-deploys on push
```

## Environment Variables

Create `.env.local` for development:
```env
VITE_DEBUG=true
```

Access in code:
```typescript
const debug = import.meta.env.VITE_DEBUG
```

## Useful Commands

```bash
# Install dependencies
npm install

# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Type checking
npm run type-check

# Format code (if prettier configured)
npm run format
```

## Resources

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

Happy developing! 🚀

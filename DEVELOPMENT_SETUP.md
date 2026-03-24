# Local Development Setup Guide

## Prerequisites

- **Node.js**: 18.0 or higher
- **npm**: 9.0 or higher (comes with Node.js)
- **Git**: Latest version
- **Browser**: Chrome, Firefox, Safari, or Edge (for viewing animations)

## Installation

### 1. Clone or Download the Project

**Option A: Clone from Git**
```bash
git clone https://github.com/USERNAME/scroll-hero-animation.git
cd scroll-hero-animation
```

**Option B: Use the project folder**
```bash
cd path/to/scroll-hero-animation
```

### 2. Install Dependencies

```bash
npm install
```

This installs all required packages:
- Next.js and React
- GSAP for animations
- Tailwind CSS for styling
- TypeScript and ESLint

### 3. Start Development Server

```bash
npm run dev
```

You'll see output like:
```
  ▲ Next.js 16.2.1
  
  Local:        http://localhost:3000
  Environments: .env.local

  ✓ Ready in 2.5s
```

### 4. Open in Browser

Visit: **http://localhost:3000**

## 🎬 Testing the Animations

Once the page loads, verify:

### Initial Load Animation
- [ ] Letters "W E L C O M E I T Z F I Z Z" appear one by one
- [ ] Animation is smooth and not too fast
- [ ] Statistics cards slide in after letters
- [ ] All animations feel premium and polished

### Scroll-Based Animation
- [ ] Scroll down slowly and observe:
  - Headline moves up and fades
  - Circular visual element responds to scroll
  - Opacity changes smoothly
- [ ] Motion should feel fluid, not jerky
- [ ] Parallax effect is noticeable but subtle

### Responsive Design
- [ ] Open DevTools: Press `F12` or `Ctrl+Shift+I`
- [ ] Click responsive design mode (Ctrl+Shift+M)
- [ ] Test on different screen sizes:
  - Mobile (375px width)
  - Tablet (768px width)
  - Desktop (1024px+ width)
- [ ] Verify text sizing and layout adjust properly

## 📝 Making Changes

### Edit Components

The main animation components are in `src/components/`:

**HeroSection.tsx** - Main animations
```bash
src/components/HeroSection.tsx
```

**ContentSection.tsx** - Content below hero
```bash
src/components/ContentSection.tsx
```

### Real-time Updates

Changes to these files automatically refresh in the browser:
1. Edit file
2. Save (Ctrl+S)
3. Browser updates automatically (Hot Module Replacement)

### Modify Animations

To adjust animation timing in HeroSection.tsx:

```typescript
// Faster letter reveal
tl.from(letters, {
  opacity: 0,
  y: 20,
  duration: 0.3,  // was 0.6 - now faster
  stagger: 0.02,  // was 0.05 - less delay
  ease: 'back.out',
});

// Slower scroll effect
gsap.to(visual, {
  y: -100,
  scrollTrigger: {
    trigger: container,
    start: 'top top',
    end: 'bottom top',
    scrub: 2.5,  // was 1.2 - now slower/smoother
  },
});
```

### Change Colors

Edit Tailwind classes in HeroSection.tsx:

```typescript
// Change primary color from orange to blue
className="from-orange-500"  // Change to "from-blue-500"
className="text-orange-400"  // Change to "text-blue-400"
```

### Edit Headline Text

Update the letter arrays:

```typescript
// Change from "WELCOME ITZFIZZ"
{['W', 'E', 'L', 'C', 'O', 'M', 'E'].map(...)}
{['I', 'T', 'Z', 'F', 'I', 'Z', 'Z'].map(...)}

// To your desired text
{['Y', 'O', 'U', 'R'].map(...)}  // First line
{['T', 'E', 'X', 'T'].map(...)}  // Second line
```

## 🔨 Available Commands

```bash
# Development server (auto-reload)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Build and test full pipeline
npm run build && npm start
```

## 📊 Performance Tips

### Check Performance
1. Open DevTools (F12)
2. Go to **Performance** tab
3. Record for a few seconds of scrolling
4. Check FPS - should stay above 50 (ideally 60)

### Optimize if Needed
- Use Chrome DevTools Performance tab
- Check for layout shifts during scroll
- Profile JavaScript execution time
- Optimize heavy animations if noticed

### Monitor in Production Build
```bash
npm run build
npm start
# Open http://localhost:3000
```

Production build is optimized and closer to GitHub Pages performance.

## 🐛 Debugging

### View Browser Console
- Press F12 to open DevTools
- Click **Console** tab
- Look for any errors (red text)
- Check for warnings (yellow text)

### Common Issues

**Animations not showing**
```
Solution: Check console for GSAP error, ensure package installed
npm list gsap  # Check if GSAP is installed
```

**Scroll effect not working**
```
Solution: Make sure component is marked 'use client'
Check: First line of HeroSection.tsx should be: 'use client';
```

**Page very slow**
```
Solution: Check DevTools Performance tab
- Disable browser extensions
- Close other tabs
- Use production build: npm run build && npm start
```

### Get Help

1. Check browser console for error messages
2. Read the error message carefully
3. Search the error on Google or Stack Overflow
4. Check GSAP docs: https://greensock.com/docs/
5. Check Next.js docs: https://nextjs.org/docs

## 🔄 Git Workflow

After making changes:

```bash
# Check what changed
git status

# View changes
git diff

# Stage changes
git add .

# Commit
git commit -m "feat: Describe your changes"

# Push to GitHub (if connected)
git push origin main
```

## 📚 Useful Resources

- **GSAP Documentation**: https://greensock.com/docs/
- **Next.js Guide**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React Docs**: https://react.dev
- **MDN Web Docs**: https://developer.mozilla.org

## ✅ Checklist Before Deployment

Before pushing to GitHub:

- [ ] Run `npm run build` without errors
- [ ] Animations work smoothly on desktop
- [ ] Responsive design works on mobile
- [ ] No console errors (F12 > Console tab)
- [ ] All commit messages are descriptive
- [ ] Updated README with your info
- [ ] GitHub repository created and configured
- [ ] GitHub Pages settings configured

## 🎉 You're Ready!

Your development environment is set up. Start by:

1. **Understanding the code**: Read through HeroSection.tsx
2. **Experiment**: Change animation values and see results
3. **Customize**: Modify colors, text, and animations to match your style
4. **Deploy**: Follow DEPLOYMENT_GUIDE.md to go live

Happy coding! 🚀

# Scroll-Driven Hero Section Animation

A premium scroll-driven hero section animation built with **Next.js**, **React**, **GSAP**, and **Tailwind CSS**. This project showcases smooth, performant animations triggered by scroll interactions.

## 🎯 Features

✨ **Smooth Initial Load Animation**
- Staggered letter reveal effect on headline
- Animated statistics with subtle delays
- Premium fade-in transitions

🎬 **Scroll-Based Animation**
- Parallax effect on headline as user scrolls
- Visual element responds to scroll progress
- Opacity transitions synchronized with scroll
- Easing and interpolation for natural fluid motion

📱 **Responsive Design**
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions

⚡ **Performance Optimized**
- Uses CSS transforms for smooth 60fps animations
- Efficient scroll event handling with GSAP ScrollTrigger
- No layout reflows during animations
- Lightweight and fast loading

🎨 **Modern UI**
- Gradient backgrounds with animated blobs
- Letter-spaced headline with premium styling
- Impact metrics/statistics cards
- Custom scrollbar styling

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with React 19
- **Styling**: Tailwind CSS 4
- **Animation**: GSAP (GreenSock Animation Platform)
- **Language**: TypeScript
- **Linting**: ESLint

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn package manager

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/scroll-hero-animation.git
cd scroll-hero-animation
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the animation in action.

### 4. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and animations
├── components/
│   ├── HeroSection.tsx     # Hero section with GSAP animations
│   └── ContentSection.tsx  # Content section below hero
└── public/                 # Static assets
```

## 🎨 Component Details

### HeroSection Component

The main hero section with:
- **Headline**: Animated letter-by-letter reveal
- **Statistics**: Grid of animated stat cards
- **Visual Element**: Circular SVG that responds to scroll
- **Animations**: 
  - Initial load: GSAP timeline with staggered animations
  - Scroll: ScrollTrigger-based parallax effects

```typescript
// Animation features:
- Letter animation: 0.6s duration, 0.05s stagger
- Statistics animation: 0.5s duration, 0.1s stagger delay
- Scroll parallax: y-axis movement tied to scroll progress
- Opacity fade: Decreases as user scrolls down
```

### Key Animation Features

1. **Staggered Letter Reveal**
   - Each letter fades in and moves up
   - Smooth easing with `back.out` curve
   - Creates premium entrance effect

2. **Statistics Animation**
   - Appears after headline with slight delay
   - Subtle fade and movement
   - Cascading effect with stagger

3. **Scroll Parallax**
   - Headline moves up and fades as user scrolls
   - Visual element responds to scroll position
   - Opacity decreases for depth effect
   - Uses `scrub` property for smooth scroll sync

## 🎬 Animation Timeline

```
0s ──────────────────────────────────────────── Page Load
   │
   ├─→ Letters 1-7 fade in (0s - 0.35s) - staggered
   │
   ├─→ Statistics fade in (0.3s - 0.8s) - delayed stagger
   │
   └─→ Scroll animations begin immediately
       - Parallax on interaction
       - Progress-based opacity
       - Smooth easing
```

## ⚡ Performance Considerations

- **Transform-Only Animations**: Uses `transform` and `opacity` for 60fps performance
- **ScrollTrigger Optimization**: Efficient scroll event handling
- **Lazy Loading**: Components render on client-side only
- **CSS Animations**: Blob animations handled by CSS keyframes
- **Minimal Reflows**: No DOM manipulations during animations

## 🌐 Deployment to GitHub Pages

This project is configured to deploy to GitHub Pages:

### Setup Instructions

1. **Create Repository**
   ```bash
   git add .
   git commit -m "Initial commit: Scroll hero animation"
   git branch -M main
   git remote add origin https://github.com/yourusername/scroll-hero-animation.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to "Pages" section
   - Select "Deploy from branch"
   - Choose `main` branch and `/root` folder
   - Save

3. **GitHub Actions** (Optional)
   - Project includes workflow configuration
   - Automatic deployment on push to main
   - Visit `https://yourusername.github.io/scroll-hero-animation`

### Manual Deployment

```bash
npm run build
npx gh-pages -d out
```

## 🔧 Customization

### Change Colors

Edit the Tailwind classes in components:
- **Primary Color**: `from-orange-500` to your preferred color
- **Background**: `from-slate-900` gradient colors
- **Text**: `text-white` or your preferred color

### Change Headline Text

In `src/components/HeroSection.tsx`, update the letter arrays:

```typescript
{['Y', 'O', 'U', 'R'].map((letter, idx) => (...))}
```

### Adjust Animation Speed

Modify GSAP animation values:

```typescript
// Faster animation
duration: 0.3,  // was 0.6
stagger: 0.02,  // was 0.05

// Faster scroll effect
scrub: 0.5,  // was 1.2 (lower = faster)
```

### Modify Statistics

Update the stats array in `HeroSection.tsx`:

```typescript
{
  number: 'YOUR_VALUE',
  label: 'YOUR_LABEL'
}
```

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## 🐛 Troubleshooting

### Animations Not Playing
- Ensure GSAP is installed: `npm install gsap`
- Check browser console for errors
- Verify ScrollTrigger plugin is registered

### Scroll Effect Not Working
- Check `basePath` in `next.config.ts` matches your deployment URL
- Ensure component is wrapped with `'use client'`
- Verify GSAP is loaded before animations run

### Build Errors
- Delete `.next` folder and rebuild: `rm -rf .next && npm run build`
- Clear npm cache: `npm cache clean --force`
- Reinstall dependencies: `rm -rf node_modules && npm install`

## 📚 Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [React Documentation](https://react.dev)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest improvements
- Submit pull requests

## 📧 Questions?

For questions or support, please open an issue in the GitHub repository.

---

**Built with ❤️ using modern web technologies**

### Live Demo
🔗 [View Live Demo](https://yourusername.github.io/scroll-hero-animation)

### GitHub Repository
🔗 [View Repository](https://github.com/yourusername/scroll-hero-animation)This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

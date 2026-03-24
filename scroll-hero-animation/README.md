# Advanced Scroll-Driven Hero Animation

A premium, highly-performant scroll-driven hero section utilizing Next.js, Tailwind CSS, GSAP (ScrollTrigger), and Lenis for fluid motion. 

## 🚀 Tech Stack Highlights
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS (v4)
- **Animation Engine:** GSAP & ScrollTrigger
- **Smooth Scrolling:** Lenis (for friction/inertia-based scrolling)
- **Typography:** Next Font (Inter, Syncopate)

## ✨ Features Implemented
1. **Initial Load Sequencing:** A customized GSAP timeline that reveals the headline with a slight rotation/fade and staggers the statistics sequence perfectly.
2. **Scroll-Based Parallax:** The primary visual image is attached to a `ScrollTrigger` that dynamically scales and scrubs through the timeline as the user scrolls, creating a premium full-cover immersion effect identical to top-tier digital agencies.
3. **Difference Blending:** The text utilizes CSS `mix-blend-difference` to maintain perfect contrast as the dynamic image passes underneath it.
4. **Fluid Smooth Scrolling:** Lenis wrapper perfectly synchronizes native scroll events with GSAP's ticker, removing stuttering.

## 📦 Deployment Instructions (To fulfill assignment)

### 1. Push to GitHub
```bash
git remote add origin <YOUR_GITHUB_REPO_URL>
git branch -M main
git push -u origin main
```

### 2. Live Deployment (Vercel recommended)
Since this is a Next.js application, Vercel provides the most seamless deployment:
```bash
npx vercel
```
_(Alternatively, you can host on GitHub Pages by updating `next.config.ts` with `output: "export"` and running `npx gh-pages -d out`)_

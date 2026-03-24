# Deployment Guide - Scroll-Driven Hero Animation

## 🚀 Quick Start for GitHub Pages Deployment

Follow these steps to deploy your project to GitHub Pages with a live URL.

## Step 1: Create a GitHub Account & Repository

1. **Create GitHub Account** (skip if you already have one)
   - Visit https://github.com/signup
   - Complete the registration process

2. **Create a New Repository**
   - Go to https://github.com/new
   - Repository name: `scroll-hero-animation`
   - Description: "Smooth scroll-driven hero section animation with GSAP and React"
   - Choose: **Public** (required for GitHub Pages free tier)
   - Initialize without README (we already have one)
   - Click "Create repository"

## Step 2: Push Code to GitHub

After creating the repository, you'll see setup instructions. Follow this:

```bash
# Navigate to your project directory
cd path/to/scroll-hero-animation

# Add GitHub remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/scroll-hero-animation.git

# Rename branch to main if needed
git branch -M main

# Push code to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository settings
   - GitHub URL: `https://github.com/USERNAME/scroll-hero-animation/settings`

2. Navigate to **"Pages"** section in the left sidebar

3. Under **"Build and deployment"**:
   - Source: Select **"Deploy from a branch"**
   - Branch: Select **"gh-pages"** branch
   - Folder: Select **"/ (root)"**
   - Click **"Save"**

## Step 4: Automatic Deployment

The GitHub Actions workflow will automatically:
1. Build your project when you push to `main` branch
2. Deploy to GitHub Pages (`gh-pages` branch)
3. Your site will be live at: `https://USERNAME.github.io/scroll-hero-animation`

You can track the deployment:
- Go to the "Actions" tab in your repository
- Click on the latest workflow run
- Check the deployment status

## 📋 After First Push

The first deployment may take 2-5 minutes. After that:
- Every push to `main` triggers automatic deployment
- Your site updates within 1-2 minutes
- No manual steps required

## 🔗 Your Live URLs

Once deployed:

**Live Website:**
```
https://USERNAME.github.io/scroll-hero-animation
```

**GitHub Repository:**
```
https://github.com/USERNAME/scroll-hero-animation
```

Replace `USERNAME` with your actual GitHub username.

## 🧪 Testing Locally Before Deployment

Test your site locally before pushing to ensure everything works:

```bash
# Install dependencies (if not done yet)
npm install

# Run development server
npm run dev

# Open browser and visit
http://localhost:3000
```

Scroll down and verify:
- ✓ Headline letters animate on page load
- ✓ Statistics cards fade in with stagger
- ✓ Parallax effect works as you scroll
- ✓ Circular visual element responds to scroll

## 🛠️ Troubleshooting Deployment

### Site not showing up
- Wait 5-10 minutes for initial deployment
- Check GitHub Actions tab for build errors
- Verify GitHub Pages settings point to `gh-pages` branch

### CSS/Images not loading
- Check `basePath` in `next.config.ts` matches repo name
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console for 404 errors

### Animations not smooth
- Update browser to latest version
- Try different browser (Chrome, Firefox, Safari, Edge)
- Check "Network" tab in DevTools for slow resources

### Want to redeploy manually?
```bash
# Rebuild locally
npm run build

# Delete gh-pages branch and push again
git branch -D gh-pages
git push origin main --force
```

## 📝 Customizing for Your Use

### Change repository name
```bash
# In next.config.ts, update basePath:
basePath: "/your-new-name"
assetPrefix: "/your-new-name/"
```

### Change deployment branch
- In GitHub Settings > Pages, select different branch
- Update `.github/workflows/deploy.yml` if needed

### Disable automatic deployment
- In GitHub Actions, disable the workflow
- Manually build and deploy when needed

## 🔐 Security Notes

- Keep your GitHub token secure
- Don't commit `.env` files with secrets
- Review GitHub Actions logs for any sensitive info

## 📞 Need Help?

If deployment fails:

1. **Check GitHub Actions**
   - Repository > Actions tab
   - Click failed workflow
   - Review error messages

2. **Common Issues**
   - Node version mismatch: Update `.github/workflows/deploy.yml`
   - Build errors: Run `npm run build` locally first
   - Permission issues: Check repository settings

3. **Manual Deployment Alternative**
   ```bash
   npm install -g gh-pages
   npm run build
   npx gh-pages -d out
   ```

## ✅ Verification Checklist

After deployment, verify:

- [ ] GitHub repository created and public
- [ ] Code pushed to main branch
- [ ] GitHub Pages enabled in settings
- [ ] Actions workflow completed successfully
- [ ] Site accessible at your GitHub Pages URL
- [ ] Animations working smoothly
- [ ] Responsive on mobile devices
- [ ] Scrolling triggers parallax effects
- [ ] No console errors in browser

## 🎉 Success!

Your scroll-driven hero animation is now live on the internet! 

Share your links:
- Live Demo: `https://USERNAME.github.io/scroll-hero-animation`
- Repository: `https://github.com/USERNAME/scroll-hero-animation`

Congratulations on deploying your project! 🚀

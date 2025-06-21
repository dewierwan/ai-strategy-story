# GitHub Pages Deployment Guide

This project is now configured to deploy to GitHub Pages. Here are your deployment options:

## Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch.

### Setup Steps:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages in your repository:**
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically run and deploy your site

3. **Your site is available at:**
   https://dewierwan.github.io/ai-strategy-story/

## Manual Deployment

You can also deploy manually using the npm script:

```bash
npm run deploy
```

This will build the project and push the `dist` folder to the `gh-pages` branch.

## Local Development

Continue using these commands for local development:

```bash
npm run dev    # Start development server at http://localhost:8080/ai-strategy-story/
npm run build  # Build for production
npm run preview # Preview production build locally
```

## Important Notes

- The site is configured with base path `/ai-strategy-story/` for GitHub Pages
- Local development also uses the same base path for consistency
- All routing will work correctly with React Router
- Static assets are properly configured for the GitHub Pages environment
- The Lovable platform integration has been removed

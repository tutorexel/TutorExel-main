# Deployment Instructions

## Vercel Deployment

This project is configured for deployment on Vercel with proper SPA (Single Page Application) routing support.

### Files Added for Vercel:

1. **`vercel.json`** - Configures Vercel to handle client-side routing by rewriting all routes to `/index.html`
2. **`public/_redirects`** - Fallback for other hosting platforms (Netlify, etc.)

### Deployment Steps:

1. **Push your changes to your Git repository**
   ```bash
   git add .
   git commit -m "Add Vercel configuration for SPA routing"
   git push
   ```

2. **Deploy to Vercel**
   - Connect your repository to Vercel
   - Vercel will automatically detect it's a Vite project
   - The build command will be: `npm run build`
   - The output directory will be: `dist`

3. **Verify the deployment**
   - Test direct URL access (e.g., `yoursite.vercel.app/pricing`)
   - Test opening links in new tabs
   - All routes should now work correctly

### What the Configuration Does:

- **Rewrites**: All routes (`/*`) are rewritten to serve `/index.html`, allowing React Router to handle client-side routing
- **Headers**: Added security headers and caching optimization for static assets
- **Build optimization**: Configured chunk splitting for better performance

### Troubleshooting:

If you still experience issues:
1. Clear Vercel's build cache and redeploy
2. Check the Vercel function logs for any errors
3. Ensure the `vercel.json` file is in the root directory of your project
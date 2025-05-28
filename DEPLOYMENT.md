# Deployment Instructions

## GitHub Pages Deployment

To enable GitHub Pages for this repository:

1. Go to the repository settings (Settings tab)
2. Scroll down to the "Pages" section in the left sidebar
3. Under "Source", select "GitHub Actions" from the dropdown
4. The site will be published at `https://[username].github.io/rajulwebsite/`

## Manual Vercel Deployment

If you prefer to deploy directly to Vercel:

1. Install Vercel CLI: `npm install -g vercel`
2. Login to Vercel: `vercel login`
3. Deploy the site: `npm run deploy`

The site will be deployed to your Vercel account under the project name "rajulwebsite". 
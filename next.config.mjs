/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Generates static HTML/CSS/JS that can be deployed to GitHub Pages
  trailingSlash: true, // Add trailing slashes to URLs
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },
  // Use these settings when deploying to GitHub Pages
  basePath: process.env.NODE_ENV === "production" ? "/my-portfolio" : "", // Update 'my-portfolio' to your repo name
  assetPrefix: process.env.NODE_ENV === "production" ? "/my-portfolio" : "", // Remove trailing slash for better path resolution
};

export default nextConfig;

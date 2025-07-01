/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure output for better deployment compatibility
  output: "export",

  // Disable some experimental features that might cause deployment issues
  experimental: {
    // Keep only stable features
    scrollRestoration: true,
    // Remove optimizeCss as it can cause issues in some deployment environments
  },

  // Image optimization with more deployment-friendly settings
  images: {
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24, // 1 day
    // Enable unoptimized for static export
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // Compiler optimizations that are safe for production
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error", "warn"],
          }
        : false,
  },

  // Keep only essential headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
    ];
  },

  // Disable webpack optimizations that might cause issues
  webpack: (config) => {
    return config;
  },

  // Make sure paths in the app are handled correctly
  trailingSlash: true,

  // This ensures assets are referenced correctly in static export
  assetPrefix: process.env.NODE_ENV === "production" ? "." : "",
};

module.exports = nextConfig;

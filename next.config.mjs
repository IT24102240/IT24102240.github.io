/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Use static export for better performance
  // Enable only compatible experimental features
  experimental: {
    // Remove or disable optimizeCss to avoid the critters dependency
    scrollRestoration: true,
  },

  // Image optimization
  images: {
    unoptimized: true, // Required for static export to work with images
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Bundle analyzer (enable when needed)
  ...(process.env.ANALYZE === "true" && {
    webpack: (config) => {
      config.plugins.push(
        new (require("@next/bundle-analyzer"))({
          enabled: true,
          openAnalyzer: true,
        })
      );
      return config;
    },
  }),

  // Optimize bundle size
  webpack: (config, { isServer }) => {
    // Optimize chunks
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          name: "vendors",
          priority: 10,
          enforce: true,
        },
      };
    }

    return config;
  },

  // Ensure assets are copied to the output directory
  assetPrefix: "./",
};

export default nextConfig;

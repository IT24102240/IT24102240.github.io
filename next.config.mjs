/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Use static export for better performance
  // Enable experimental features for better performance
  experimental: {
    // Disable optimizeCss as it requires the 'critters' package
    // optimizeCss: true,
    scrollRestoration: true,
  },

  // Image optimization
  images: {
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

  // Headers are removed as they don't work with static exports
  // If you need headers, consider using a hosting service that allows custom headers
  // or switch to a server-rendered deployment
};

export default nextConfig;

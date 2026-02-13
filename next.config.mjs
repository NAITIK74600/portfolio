/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure webpack to handle PDFs
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      type: 'asset/resource',
    });
    return config;
  },

  // Ensure public folder is served properly
  async headers() {
    return [
      {
        source: '/certificates/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'application/pdf',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

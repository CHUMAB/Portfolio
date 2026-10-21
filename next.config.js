/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  compiler: {
    styledComponents: true,
  },
  assetPrefix: isProd ? '/study/' : '',
  basePath: isProd ? '/study' : '',
  output: 'export'
};

module.exports = nextConfig



/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["s3-alpha-sig.figma.com", "images.unsplash.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;

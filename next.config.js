/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "s3-alpha-sig.figma.com",
      "images.unsplash.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com"
    ],
  },
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["@prisma/client"],
  },
};

module.exports = nextConfig;

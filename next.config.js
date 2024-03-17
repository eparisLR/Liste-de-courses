/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: { enableUndici: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakeimg.pl",
      },
    ],
  },
};

module.exports = nextConfig;

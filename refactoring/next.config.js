/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/backend/:path*",
        destination: "http://210.204.194.10:8080/:path*",
      },
    ];
  },
};

module.exports = nextConfig;

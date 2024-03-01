/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/backend/:path*",
        destination: "http://13.124.234.170:9000/:path*",
      },
    ];
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zsxzahwzyiamxscwlzxh.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;

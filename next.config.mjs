/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.timbu.cloud",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdni.iconscout.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;

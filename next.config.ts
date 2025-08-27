import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: "1111",
            pathname: "/storage/clientes/**"
          },
          {
            protocol: 'http',
            hostname: 'localhost',
            port: "1111",
            pathname: "/storage/produtos/**"
          },
          {
            protocol: 'https',
            hostname: 'api-play-magia-production.up.railway.app',
            pathname: "/storage/clientes/**"
          },
          {
            protocol: 'https',
            hostname: 'api-play-magia-production.up.railway.app',
            pathname: "/storage/produtos/**"
          }
        ],
  }
};

export default nextConfig;

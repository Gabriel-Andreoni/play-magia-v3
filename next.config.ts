import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

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
    ]
  }
};

export default nextConfig;

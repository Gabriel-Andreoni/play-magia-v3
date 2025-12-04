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
            protocol: 'http',
            hostname: 'lw0kc8owc0oo0w0ssokco884.147.93.71.68.sslip.io',
            pathname: "/storage/clientes/**"
          },
          {
            protocol: 'http',
            hostname: 'lw0kc8owc0oo0w0ssokco884.147.93.71.68.sslip.io',
            pathname: "/storage/produtos/**"
          }
        ],
  }
};

export default nextConfig;

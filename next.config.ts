import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/welcome", destination: "/", permanent: true },
      { source: "/dough-get-baked", destination: "/interactive/dough-get-baked", permanent: true },
      { source: "/super-mayor", destination: "/interactive/super-mayor", permanent: true },
      { source: "/credentials", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;

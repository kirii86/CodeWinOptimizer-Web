import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/win", destination: "/install.ps1" },
      { source: "/win-beta", destination: "/install-beta.ps1" },
      { source: "/win-dev", destination: "/install-dev.ps1" },
    ];
  },
  async headers() {
    return [
      {
        source: "/:script(install.*\\.ps1)",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=300" },
        ],
      },
    ];
  },
};

export default nextConfig;

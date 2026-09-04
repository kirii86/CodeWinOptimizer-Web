import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "CodeWinOptimizer",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#070d1a",
    theme_color: "#0b1220",
    icons: [
      {
        src: "/logo.png",
        sizes: "559x559",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "559x559",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}

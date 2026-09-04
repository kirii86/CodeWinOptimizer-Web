import type { Metadata } from "next";
import { absoluteUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "System Tweaks — 140+ Registry & Performance Tweaks",
  description:
    "Browse 140+ documented Windows tweaks across 14 categories: privacy, telemetry, network, memory, GPU, firewall, latency, UI and bloat removal. Every tweak shows its exact command, impact level and warnings.",
  keywords: [
    "windows tweaks",
    "windows registry tweaks",
    "windows performance tweaks",
    "windows privacy tweaks",
    "disable telemetry",
    "disable cortana",
    "network tweaks windows",
    "disable nagle",
    "gaming tweaks windows",
    "remove bloatware",
    "windows debloat tweaks",
    "ajustes de Windows",
  ],
  alternates: {
    canonical: "/docs/tweaks",
  },
  openGraph: {
    title: "System Tweaks — 140+ Registry & Performance Tweaks",
    description:
      "140+ documented Windows tweaks across 14 categories with exact commands, impact levels and warnings.",
    type: "website",
    images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630 }],
  },
};

export default function TweaksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

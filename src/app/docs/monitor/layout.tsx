import type { Metadata } from "next";
import { absoluteUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "System Monitor — PC Health Score, CPU, GPU, RAM & Network",
  description:
    "Monitor your PC in real time with a 0-100 PC Health Score (A+ to F), CPU and GPU temperature, disk usage, uptime and network latency — with actionable tips to speed up Windows.",
  keywords: [
    "pc health check",
    "system monitor windows",
    "cpu temperature monitor",
    "gpu temperature windows",
    "ram usage monitor",
    "check pc performance",
    "windows monitor tool",
    "network latency test",
    "pc health score",
    "monitor del sistema",
  ],
  alternates: {
    canonical: "/docs/monitor",
  },
  openGraph: {
    title: "System Monitor — PC Health Score, CPU, GPU, RAM & Network",
    description:
      "Real-time PC monitoring with a 0-100 PC Health Score, CPU/GPU temperature, disk, uptime and network latency.",
    type: "website",
    images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630 }],
  },
};

export default function MonitorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

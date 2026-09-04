import type { Metadata } from "next";
import { absoluteUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "Windows Features & Quick Fixes (Hyper-V, WSL, SFC/DISM)",
  description:
    "Enable or disable optional Windows features — Hyper-V, WSL, Windows Sandbox, .NET Framework, NFS — and run one-click quick fixes: network reset, NTP sync, SFC/DISM scan and Windows Update reset.",
  keywords: [
    "enable hyper-v",
    "wsl",
    "windows sandbox",
    ".NET framework",
    "sfc scannow",
    "dism restorehealth",
    "windows update reset",
    "network reset windows",
    "disable windows features",
    "f8 boot recovery",
    "caracteristicas de Windows",
  ],
  alternates: {
    canonical: "/docs/features",
  },
  openGraph: {
    title: "Windows Features & Quick Fixes (Hyper-V, WSL, SFC/DISM)",
    description:
      "Enable or disable optional Windows features and run one-click quick fixes: network reset, SFC/DISM and Windows Update reset.",
    type: "website",
    images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630 }],
  },
};

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

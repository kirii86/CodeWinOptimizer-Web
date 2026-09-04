import type { Metadata } from "next";
import { absoluteUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "App Manager — 181 Windows Apps with WinGet & Chocolatey",
  description:
    "Install or uninstall 181 curated Windows apps in 8 categories with one click using WinGet or Chocolatey: browsers, development tools, Microsoft Tools, Sysinternals, PowerShell 7 and PowerToys.",
  keywords: [
    "install apps Windows",
    "winget",
    "chocolatey",
    "Windows app manager",
    "bulk install apps Windows",
    "sysinternals",
    "powertoys install",
    "powerShell 7",
    ".NET SDK install",
    "windows package manager",
    "install many apps at once",
    "gestor de apps Windows",
  ],
  alternates: {
    canonical: "/docs/apps",
  },
  openGraph: {
    title: "App Manager — 181 Windows Apps with WinGet & Chocolatey",
    description:
      "Install or uninstall 181 curated Windows apps in 8 categories with one click using WinGet or Chocolatey.",
    type: "website",
    images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630 }],
  },
};

export default function AppsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

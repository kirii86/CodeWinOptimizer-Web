import type { Metadata } from "next";
import { absoluteUrl } from "@/config/site";
import DocSidebar from "@/components/DocSidebar";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    template: "%s | CodeWinOptimizer Docs",
    default: "Windows Optimizer Documentation & User Guides",
  },
  description:
    "Complete CodeWinOptimizer documentation: how to optimize and debloat Windows 10/11, install apps with WinGet or Chocolatey, apply 140+ system tweaks, enable Windows features, clean disk space, manage startup programs and create restore points.",
  keywords: [
    "Windows optimizer documentation",
    "how to optimize Windows 10",
    "how to optimize Windows 11",
    "Windows tweaks guide",
    "Windows registry tweaks how to",
    "debloat Windows guide",
    "winget guide",
    "chocolatey guide",
    "Windows cleanup guide",
    "Windows startup manager guide",
    "system restore guide",
    "CodeWinOptimizer docs",
    "optimizar Windows guía",
  ],
  alternates: {
    canonical: "/docs",
  },
  openGraph: {
    title: "Windows Optimizer Documentation & User Guides",
    description:
      "Learn how to optimize, debloat and speed up Windows 10/11 with CodeWinOptimizer: tweaks, app installs, cleanup, startup and restore.",
    type: "website",
    images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630 }],
  },
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen pt-14">
        <DocSidebar />
        <main className="flex-1 px-8 py-10 max-w-4xl mx-auto">{children}</main>
      </div>
    </>
  );
}

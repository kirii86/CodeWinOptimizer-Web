export const siteConfig = {
  name: "CodeWinOptimizer",
  title: "CodeWinOptimizer - Free Windows Optimizer for Windows 10 and 11",
  description:
    "Download CodeWinOptimizer, a free open-source Windows optimizer with restore points, app management, cleanup, registry tweaks, performance tuning, and quick repair tools.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://codewinoptimizer.oscarcodedev.com",
  logo: "/logo.png",
  repository: "https://github.com/oscarcodedev/CodeWinOptimizer-App",
  releases: "https://github.com/oscarcodedev/CodeWinOptimizer-App/releases",
  author: "OscarCodeDev",
  keywords: [
    "CodeWinOptimizer",
    "Windows optimizer",
    "Windows 10 optimizer",
    "Windows 11 optimizer",
    "Windows tweaks",
    "system tweaks",
    "registry tweaks",
    "Windows cleanup",
    "Windows performance",
    "WinGet",
    "Chocolatey",
    "portable Windows app",
    "open source Windows tool",
  ],
};

export function absoluteUrl(path = "") {
  if (/^https?:\/\//.test(path)) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

import type { Metadata } from "next";
import { absoluteUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "Disk Cleanup — Free Up Space & Remove Temp Files on Windows",
  description:
    "Clean 7 types of junk safely with one click: temp files, recycle bin, prefetch, Windows Update cache, thumbnails, DNS cache and memory dumps — each task documented with exactly what it removes.",
  keywords: [
    "clean temp files windows",
    "disk cleanup",
    "free up disk space",
    "windows update cache clear",
    "delete prefetch",
    "clear recycle bin",
    "dns cache clear",
    "windows junk cleaner",
    "cleaner for windows 11",
    "libera espacio windows",
    "limpiador de windows",
  ],
  alternates: {
    canonical: "/docs/cleanup",
  },
  openGraph: {
    title: "Disk Cleanup — Free Up Space & Remove Temp Files on Windows",
    description:
      "Clean 7 types of junk safely: temp files, recycle bin, prefetch, Windows Update cache, thumbnails, DNS cache and memory dumps.",
    type: "website",
    images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630 }],
  },
};

export default function CleanupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

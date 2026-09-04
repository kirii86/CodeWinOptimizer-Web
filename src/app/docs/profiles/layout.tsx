import type { Metadata } from "next";
import { absoluteUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "Tweak Profiles — Standard, Gaming & Minimal Presets for Windows",
  description:
    "Save and load named tweak profiles to switch Windows optimization strategies in one click. Includes three ready-made presets: Standard, Gaming (max performance) and Minimal (clean, debloated Windows).",
  keywords: [
    "windows preset",
    "gaming performance profile",
    "windows tweak profiles",
    "debloat preset windows",
    "minimal windows setup",
    "windows optimization presets",
    "perfiles de tweaks",
    "perfil gaming windows",
  ],
  alternates: {
    canonical: "/docs/profiles",
  },
  openGraph: {
    title: "Tweak Profiles — Standard, Gaming & Minimal Presets for Windows",
    description:
      "Save and load named tweak profiles. Includes three ready-made presets: Standard, Gaming and Minimal.",
    type: "website",
    images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630 }],
  },
};

export default function ProfilesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

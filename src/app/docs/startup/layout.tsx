import type { Metadata } from "next";
import { absoluteUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "Startup Manager — Speed Up Windows Boot & Disable Startup",
  description:
    "Control every Windows auto-start entry from one place: registry Run keys, Startup folders, AppX UWP tasks and scheduled tasks. Toggles are reversible and fully compatible with Task Manager.",
  keywords: [
    "disable startup programs",
    "windows startup manager",
    "speed up boot windows",
    "slow startup windows fix",
    "disable background apps",
    "startup approved registry",
    "disable scheduled tasks",
    "windows boot time",
    "make windows boot faster",
    "programas de inicio",
  ],
  alternates: {
    canonical: "/docs/startup",
  },
  openGraph: {
    title: "Startup Manager — Speed Up Windows Boot & Disable Startup",
    description:
      "Control every Windows auto-start entry: Run keys, Startup folders, UWP tasks and scheduled tasks. Reversible toggles compatible with Task Manager.",
    type: "website",
    images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630 }],
  },
};

export default function StartupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

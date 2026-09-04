import type { Metadata } from "next";
import { absoluteUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "Restore & Backup — System Restore, Registry & Driver Backup",
  description:
    "Three layers of protection for Windows tweaking: custom system restore points (24h cooldown bypassed), full 5-hive registry backup to .reg files, and driver backup & restore — safe to undo any change.",
  keywords: [
    "system restore point",
    "create restore point windows",
    "registry backup",
    "backup registry windows",
    "driver backup",
    "restore drivers windows",
    "undo windows tweaks",
    "safe windows tweaks",
    "punto de restauracion",
    "copia de seguridad registro",
  ],
  alternates: {
    canonical: "/docs/restore",
  },
  openGraph: {
    title: "Restore & Backup — System Restore, Registry & Driver Backup",
    description:
      "Custom system restore points, full 5-hive registry backup and driver backup & restore — undo any Windows change safely.",
    type: "website",
    images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630 }],
  },
};

export default function RestoreLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

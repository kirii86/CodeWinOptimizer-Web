"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/i18n";

const sections = [
  { href: "/docs", label: { en: "Overview", es: "General" } },
  { href: "/docs/tweaks", label: { en: "System Tweaks", es: "Ajustes del Sistema" } },
  { href: "/docs/features", label: { en: "Windows Features", es: "Características" } },
  { href: "/docs/cleanup", label: { en: "Disk Cleanup", es: "Limpieza de Disco" } },
  { href: "/docs/profiles", label: { en: "Tweak Profiles", es: "Perfiles de Tweaks" } },
  { href: "/docs/restore", label: { en: "Restore & Backup", es: "Restauración y Backup" } },
];

export default function DocSidebar() {
  const pathname = usePathname();
  const { locale } = useLanguage();

  return (
    <aside className="w-56 shrink-0 border-r border-border">
      <nav className="sticky top-14 p-6">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
          {locale === "en" ? "Documentation" : "Documentación"}
        </h2>
        <ul className="space-y-1">
          {sections.map((s) => {
            const isActive =
              s.href === "/docs"
                ? pathname === "/docs"
                : pathname.startsWith(s.href);
            return (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "bg-neon/10 text-neon font-medium"
                      : "text-text-muted hover:text-white hover:bg-bg-card"
                  }`}
                >
                  {s.label[locale as "en" | "es"]}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

"use client";

import { useLanguage } from "@/i18n";
import Link from "next/link";
import tweaksData from "@/data/tweaks.json";
import { type ReactNode } from "react";

type TweakCategory = {
  id: string;
  icon: string;
  name: { en: string; es: string };
  tweaks: TweakEntry[];
};

type TweakEntry = {
  id: string;
  name: { en: string; es: string };
  description: { en: string; es: string };
  benefit: { en: string; es: string };
  impact: string;
  commands: string[];
  warnings: { en: string[]; es: string[] };
};

const impactColors: Record<string, string> = {
  high: "text-red-400 bg-red-400/10 border-red-400/20",
  medium: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  low: "text-neon bg-neon/10 border-neon/20",
};

const categoryIcons: Record<string, ReactNode> = {
  network: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  memory: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2" /><rect x="5" y="5" width="14" height="14" rx="2" /><rect x="9" y="9" width="6" height="6" rx="1" />
    </svg>
  ),
  gpu: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2" /><path d="M6 12h.01M10 12h.01M14 12h.01M18 12h.01" />
    </svg>
  ),
  system: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  privacy: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  services: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#FB923C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  telemetry: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  power: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#FACC15">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  scheduler: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#FB7185" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  security: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  startup: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  ),
  visual: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  essential: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  advanced: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#F87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
};

function stripEmoji(text: string): string {
  return text.replace(/^[\p{Emoji_Presentation}\p{Extended_Pictographic}‍️]+\s*/u, "");
}

export default function TweaksPage() {
  const { locale } = useLanguage();
  const categories = tweaksData as TweakCategory[];

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-3">
        {locale === "en" ? "System Tweaks" : "Ajustes del Sistema"}
      </h1>
      <p className="text-text-muted mb-10 leading-relaxed">
        {locale === "en"
          ? `${categories.reduce((sum, c) => sum + c.tweaks.length, 0)}+ tweaks across ${categories.length} categories. Each tweak includes a description, benefit, impact level, the exact commands it runs, and any warnings you should know.`
          : `${categories.reduce((sum, c) => sum + c.tweaks.length, 0)}+ ajustes en ${categories.length} categorías. Cada ajuste incluye descripción, beneficio, nivel de impacto, los comandos exactos que ejecuta y advertencias importantes.`}
      </p>

      {categories.map((cat) => (
        <section key={cat.id} className="mb-12">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-1">
            <span className="shrink-0">{categoryIcons[cat.id] ?? cat.icon}</span>
            <span>{cat.name[locale as "en" | "es"]}</span>
          </h2>
          <p className="text-xs text-text-muted mb-4">
            {cat.tweaks.length}{" "}
            {locale === "en" ? "tweaks" : "ajustes"}
          </p>
          <div className="grid gap-2">
            {cat.tweaks.map((t) => (
              <Link
                key={t.id}
                href={`/docs/tweaks/${t.id}`}
                className="group rounded-lg border border-border bg-bg-card px-4 py-3 transition-all hover:border-neon/40 hover:bg-bg-card-hover flex items-center justify-between gap-4"
              >
                <div className="min-w-0">
                  <span className="text-sm font-medium group-hover:text-neon transition-colors line-clamp-1">
                    {stripEmoji(t.name[locale as "en" | "es"])}
                  </span>
                  <p className="text-xs text-text-muted mt-0.5 line-clamp-1">
                    {t.description[locale as "en" | "es"]}
                  </p>
                </div>
                <span
                  className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase ${impactColors[t.impact] || impactColors.low}`}
                >
                  {t.impact}
                </span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

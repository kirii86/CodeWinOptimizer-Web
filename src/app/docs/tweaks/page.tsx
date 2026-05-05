"use client";

import { useLanguage } from "@/i18n";
import Link from "next/link";
import tweaksData from "@/data/tweaks.json";

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
            <span>{cat.icon}</span>
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
                    {t.name[locale as "en" | "es"]}
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

"use client";

import { useLanguage } from "@/i18n";
import Link from "next/link";

type TweakEntry = {
  id: string;
  name: { en: string; es: string };
  description: { en: string; es: string };
  benefit: { en: string; es: string };
  impact: string;
  commands: string[];
  warnings: { en: string[]; es: string[] };
};

type TweakCategory = {
  id: string;
  name: { en: string; es: string };
  icon: string;
  tweaks: TweakEntry[];
};

interface Props {
  tweak: TweakEntry;
  category: TweakCategory;
}

const impactColors: Record<string, string> = {
  high: "text-red-400 bg-red-400/10 border-red-400/20",
  medium: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  low: "text-neon bg-neon/10 border-neon/20",
};

function stripEmoji(text: string): string {
  return text.replace(/^[\p{Emoji_Presentation}\p{Extended_Pictographic}‍️]+\s*/u, "");
}

const labels = {
  en: {
    back: "All Tweaks",
    benefit: "Benefit",
    impact: "Impact",
    commands: "Commands",
    warnings: "Warnings",
  },
  es: {
    back: "Todos los Ajustes",
    benefit: "Beneficio",
    impact: "Impacto",
    commands: "Comandos",
    warnings: "Advertencias",
  },
};

export default function TweakDetailClient({ tweak, category }: Props) {
  const { locale } = useLanguage();
  const l = labels[locale as keyof typeof labels] || labels.en;

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/docs/tweaks"
          className="text-xs text-text-muted hover:text-neon transition-colors"
        >
          &larr; <span className="hover:underline">{l.back}</span>
        </Link>
        <p className="text-xs text-text-muted mt-1">
          {category.name[locale as "en" | "es"]}
        </p>
      </div>

      <h1 className="text-2xl font-bold tracking-tight mb-2">
        {stripEmoji(tweak.name[locale as "en" | "es"])}
      </h1>
      <p className="text-sm text-text-muted mb-6 leading-relaxed">
        {tweak.description[locale as "en" | "es"]}
      </p>

      <div className="grid gap-6">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
            {l.benefit}
          </h2>
          <p className="text-sm text-neon">
            {tweak.benefit[locale as "en" | "es"]}
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
            {l.impact}
          </h2>
          <span
            className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold uppercase ${impactColors[tweak.impact] || impactColors.low}`}
          >
            {tweak.impact}
          </span>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
            {l.commands} ({tweak.commands.length})
          </h2>
          <div className="space-y-2">
            {tweak.commands.map((cmd, i) => (
              <pre
                key={i}
                className="rounded-lg border border-border bg-bg-dark p-3 text-xs font-mono text-text-muted overflow-x-auto"
              >
                {cmd}
              </pre>
            ))}
          </div>
        </div>

        {tweak.warnings[locale as "en" | "es"]?.length > 0 && (
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-2">
              {l.warnings}
            </h2>
            <ul className="space-y-2">
              {tweak.warnings[locale as "en" | "es"].map((w, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-red-300/80 rounded-lg border border-red-400/10 bg-red-400/5 p-3"
                >
                  <svg className="mt-0.5 shrink-0" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#F87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

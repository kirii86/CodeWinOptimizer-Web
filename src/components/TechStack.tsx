"use client";

import { useLanguage } from "@/i18n";

export default function TechStack() {
  const { t } = useLanguage();

  return (
    <section id="tech" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              {t.tech.heading1}{" "}
              <span className="text-neon">{t.tech.heading2}</span>
            </h2>
            <div className="space-y-4">
              {t.tech.items.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-xl border border-border bg-bg-card p-4"
                >
                  <span className="text-sm font-medium text-neon min-w-[120px]">{item.label}</span>
                  <span className="text-sm text-text-muted">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              {t.tech.howToHeading1}{" "}
              <span className="text-neon">{t.tech.howToHeading2}</span>
            </h2>
            <div className="rounded-2xl border border-border bg-bg-card overflow-hidden">
              <div className="border-b border-border bg-bg-dark px-5 py-3">
                <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                  {t.tech.quickStart}
                </span>
              </div>
              <div className="p-5 space-y-4">
                {t.tech.steps.map((s, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neon/10 text-xs font-bold text-neon">
                      {i + 1}
                    </span>
                    <span className="text-sm text-text-muted">{s}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border bg-bg-card-hover p-5">
                <p className="text-xs text-text-muted">
                  <strong className="text-white">{t.tech.prerequisites}</strong>
                  {t.tech.prerequisitesText}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-bg-card p-5">
              <p className="text-xs text-text-muted leading-relaxed">
                <strong className="text-yellow-400">{t.tech.antivirusNotice}</strong>
                {t.tech.antivirusText}
                <a
                  href="https://github.com/oscarcodedev/CodeWinOptimizer-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon underline"
                >
                  {t.tech.reviewSource}
                </a>
                {t.tech.orBuild}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

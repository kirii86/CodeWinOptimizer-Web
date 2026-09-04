"use client";

import { useLanguage } from "@/i18n";

export default function Faq() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {t.faq.heading1}{" "}
            <span className="text-neon">{t.faq.heading2}</span>
          </h2>
        </div>
        <div className="space-y-3">
          {t.faq.items.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-border bg-bg-card transition-all open:border-neon/40 open:bg-bg-card-hover"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold select-none [&::-webkit-details-marker]:hidden">
                {item.q}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-text-muted transition-transform duration-200 group-open:rotate-180"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-text-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

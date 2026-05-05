"use client";

import { useLanguage } from "@/i18n";

const sources = [
  "https://i.imgur.com/REsj7bQ.png",
  "https://i.imgur.com/kMnT9aW.png",
  "https://i.imgur.com/57wnMc5.png",
  "https://i.imgur.com/blgf8FT.png",
  "https://i.imgur.com/qMgfBqe.png",
  "https://i.imgur.com/jgOlF4j.png",
  "https://i.imgur.com/SQ8IbOl.png",
];

const alts = [
  "System Restore",
  "App Manager",
  "System Tweaks",
  "Windows Features",
  "System Monitor",
  "Disk Cleanup",
  "Appearance Settings",
];

export default function Preview() {
  const { t } = useLanguage();

  return (
    <section id="preview" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {t.preview.heading1}{" "}
            <span className="text-neon">{t.preview.heading2}</span>
          </h2>
          <p className="mt-4 text-text-muted max-w-xl mx-auto">
            {t.preview.subheading}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {sources.map((src, i) => (
            <div
              key={t.preview.labels[i]}
              className="group relative overflow-hidden rounded-2xl border border-border bg-bg-card transition-all hover:border-neon/30 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={alts[i]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-block rounded-lg bg-neon/20 px-3 py-1 text-xs font-medium text-neon backdrop-blur-sm">
                  {t.preview.labels[i]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

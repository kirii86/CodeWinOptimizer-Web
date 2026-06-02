"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/i18n";
import PreviewLightbox from "./PreviewLightbox";

const sources = [
  "/preview/1.png",
  "/preview/2.png",
  "/preview/3.png",
  "/preview/4.png",
  "/preview/5.png",
  "/preview/6.png",
  "/preview/7.png",
  "/preview/8.png",
];

const alts = [
  "System Restore",
  "App Manager",
  "System Tweaks",
  "Windows Features",
  "System Monitor",
  "Disk Cleanup",
  "Windows Updates",
  "Settings",
];

export default function Preview() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
            <button
              type="button"
              key={t.preview.labels[i]}
              onClick={() => setOpenIndex(i)}
              aria-label={`${t.preview.labels[i]} — open preview`}
              className="group relative overflow-hidden rounded-2xl border border-border bg-bg-card text-left transition-all hover:border-neon/30 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-neon/40"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src={src}
                  alt={alts[i]}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-neon/40 bg-bg-dark/70 text-neon backdrop-blur-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-block rounded-lg bg-neon/20 px-3 py-1 text-xs font-medium text-neon backdrop-blur-sm">
                  {t.preview.labels[i]}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <PreviewLightbox
          images={sources}
          alts={alts}
          labels={t.preview.labels}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onChange={setOpenIndex}
        />
      )}
    </section>
  );
}

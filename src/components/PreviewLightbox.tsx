"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";

interface PreviewLightboxProps {
  images: string[];
  alts: string[];
  labels: string[];
  index: number;
  onClose: () => void;
  onChange: (next: number) => void;
}

export default function PreviewLightbox({
  images,
  alts,
  labels,
  index,
  onClose,
  onChange,
}: PreviewLightboxProps) {
  const goPrev = useCallback(
    () => onChange((index - 1 + images.length) % images.length),
    [index, images.length, onChange],
  );
  const goNext = useCallback(
    () => onChange((index + 1) % images.length),
    [index, images.length, onChange],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [goPrev, goNext, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alts[index]}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 md:p-8 animate-fade-up"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-dark/70 text-white transition-all hover:border-neon/50 hover:text-neon"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Previous"
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        className="absolute left-4 md:left-8 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-bg-dark/70 text-white transition-all hover:border-neon/50 hover:text-neon"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Next"
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        className="absolute right-4 md:right-8 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-bg-dark/70 text-white transition-all hover:border-neon/50 hover:text-neon"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-neon/20 bg-bg-card shadow-[0_0_60px_rgba(212,255,0,0.08)]">
          <Image
            key={images[index]}
            src={images[index]}
            alt={alts[index]}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-contain"
            priority
          />
        </div>
        <div className="mt-3 flex items-center justify-center gap-3 text-xs text-text-muted">
          <span className="rounded-full border border-neon/30 bg-neon/5 px-3 py-1 font-medium text-neon">
            {labels[index]}
          </span>
          <span>
            {index + 1} / {images.length}
          </span>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setProgress(pct);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        update();
        frame = 0;
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] overflow-hidden"
    >
      <div
        className="h-full origin-left bg-neon shadow-[0_0_8px_rgba(212,255,0,0.6)] transition-transform duration-75 ease-out"
        style={{ transform: `scaleX(${progress / 100})`, width: "100%" }}
      />
    </div>
  );
}

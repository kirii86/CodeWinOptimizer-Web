"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="CodeWinOptimizer"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-sm font-medium">
              Code<span className="text-neon">Win</span>Optimizer
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-text-muted">
            <a
              href="https://github.com/oscarxdev/CodeWinOptimizer-App"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://github.com/oscarxdev/CodeWinOptimizer-App/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              MIT License
            </a>
          </div>

          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} {t.footer.website}
          </p>
        </div>
      </div>
    </footer>
  );
}

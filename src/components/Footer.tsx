"use client";

import { useLanguage } from "@/i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-7 w-7 rounded-lg bg-neon flex items-center justify-center text-bg-dark font-bold text-xs">
              CW
            </span>
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

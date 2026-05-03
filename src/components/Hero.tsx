export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,255,0,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="animate-fade-up">
          <span className="inline-block rounded-full border border-neon/30 bg-neon/5 px-4 py-1.5 text-xs font-medium text-neon mb-6">
            Open Source · Portable · Free
          </span>
        </div>

        <h1 className="animate-fade-up animate-fade-up-delay-1 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl leading-[1.1]">
          Take control of
          <br />
          <span className="text-neon">your Windows.</span>
        </h1>

        <p className="animate-fade-up animate-fade-up-delay-2 mx-auto mt-6 max-w-2xl text-base md:text-lg text-text-muted leading-relaxed">
          A local-first Windows optimization tool that puts you in charge. System restore,
          app management, registry tweaks, performance tuning — all from a single, portable executable.
        </p>

        <div className="animate-fade-up animate-fade-up-delay-3 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://github.com/kirii86/CodeWinOptimizer/releases/download/v1.0.0/CodeWinOptimizer.exe"
            className="inline-flex items-center gap-2 rounded-full bg-neon px-8 py-3.5 text-sm font-semibold text-bg-dark transition-all hover:bg-neon-dim hover:scale-[1.02] glow"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download for Windows
          </a>
          <a
            href="https://github.com/kirii86/CodeWinOptimizer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-medium text-white transition-all hover:border-neon/40 hover:bg-bg-card"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </div>

        <p className="animate-fade-up animate-fade-up-delay-4 mt-4 text-xs text-text-muted">
          Windows 10/11 · Single .exe · No installation required · Run as Administrator
        </p>
      </div>
    </section>
  );
}

const techItems = [
  { label: "Backend", value: "Go + Wails v2 runtime" },
  { label: "Frontend", value: "Vanilla JS, CSS (dark theme)" },
  { label: "Window", value: "WebView2 (Edge Chromium)" },
  { label: "Package Managers", value: "WinGet, Chocolatey" },
  { label: "System Tools", value: "PowerShell, DISM, bcdedit, reg.exe, nvidia-smi" },
  { label: "Monitoring", value: "gopsutil (CPU/RAM), nvidia-smi (GPU), WMI" },
];

const steps = [
  { step: "1", label: "Download the latest .exe from GitHub Releases" },
  { step: "2", label: "Run CodeWinOptimizer.exe as Administrator" },
  { step: "3", label: "(Recommended) Create a restore point first" },
  { step: "4", label: "Use any tab: install apps, apply tweaks, run fixes" },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              Built with{" "}
              <span className="text-neon">modern tech.</span>
            </h2>
            <div className="space-y-4">
              {techItems.map((item) => (
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
              How to <span className="text-neon">run.</span>
            </h2>
            <div className="rounded-2xl border border-border bg-bg-card overflow-hidden">
              <div className="border-b border-border bg-bg-dark px-5 py-3">
                <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                  Quick Start
                </span>
              </div>
              <div className="p-5 space-y-4">
                {steps.map((s) => (
                  <div key={s.step} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neon/10 text-xs font-bold text-neon">
                      {s.step}
                    </span>
                    <span className="text-sm text-text-muted">{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border bg-bg-card-hover p-5">
                <p className="text-xs text-text-muted">
                  <strong className="text-white">Prerequisites:</strong> Go 1.20+, Wails v2, Windows 10/11 with WebView2 runtime.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-bg-card p-5">
              <p className="text-xs text-text-muted leading-relaxed">
                <strong className="text-yellow-400">Antivirus notice:</strong> This tool uses PowerShell,
                DISM, WMI, and registry commands. Some antivirus may flag the .exe as suspicious.
                All code is open source —{" "}
                <a
                  href="https://github.com/kirii86/CodeWinOptimizer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon underline"
                >
                  review the source
                </a>{" "}
                or build it yourself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

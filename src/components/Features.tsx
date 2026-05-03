const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "System Restore",
    description:
      "Create system restore points with custom names. Bypasses the Windows 24h cooldown via registry tweak. Full registry backup to .reg files across all 5 hives.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "App Manager",
    description:
      "86+ apps across 7 categories. Install/Uninstall via WinGet or Chocolatey. Detects already installed apps with green badges. Website links and per-category select-all.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20V10M18 20V4M6 20v-4" />
      </svg>
    ),
    title: "105+ System Tweaks",
    description:
      "Comprehensive tweaks across 12 categories: network, memory, GPU, privacy, performance, firewall, latency timers, UI & bloat removal. Toggle switches for each.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Windows Features",
    description:
      "Enable/disable .NET Framework, Hyper-V, WSL, Sandbox, NFS, F8 Boot Recovery, and more. Quick fixes: network reset, NTP sync, SFC/DISM scan, Windows Update reset.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 20V10M12 20V4M6 20v-6" />
        <circle cx="18" cy="8" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: "System Monitor",
    description:
      "Real-time dashboard with 3-second auto-refresh. CPU usage, RAM gauge, GPU temp/VRAM via nvidia-smi, per-drive usage bars, system temperatures, and uptime tracking.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Appearance & Terminal",
    description:
      "6 accent colors (Neon Green, Cyan, Purple, Orange, Pink, Yellow) and 6 fonts. Real-time command output terminal with copy and clear. Persistent via localStorage.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Everything you need to
            <br />
            <span className="text-neon">optimize Windows.</span>
          </h2>
          <p className="mt-4 text-text-muted max-w-xl mx-auto">
            From system restore to performance tuning — all the tools you need in one portable executable.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-bg-card p-6 transition-all hover:border-neon/30 hover:bg-bg-card-hover"
            >
              <div className="mb-4 inline-flex rounded-xl bg-neon/10 p-3 text-neon">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

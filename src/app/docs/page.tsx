import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation — CodeWinOptimizer",
  description:
    "Complete documentation for CodeWinOptimizer — tweaks, features, cleanup, profiles, and restore & backup.",
};

const sections = [
  {
    href: "/docs/tweaks",
    title: "System Tweaks",
    desc: "140+ tweaks across 14 categories — network, memory, GPU, privacy, performance, essential, advanced. Each tweak documented with commands, warnings, and impact level.",
    icon: "⚡",
  },
  {
    href: "/docs/features",
    title: "Windows Features & Quick Fixes",
    desc: "Enable/disable Hyper-V, WSL, Sandbox, .NET Framework, and more. Quick fixes for network reset, NTP sync, SFC/DISM scan, and Windows Update.",
    icon: "🛠",
  },
  {
    href: "/docs/cleanup",
    title: "Disk Cleanup",
    desc: "7 cleanup tasks: temp files, recycle bin, prefetch, Windows Update cache, thumbnails, DNS cache, memory dumps. Each documented with what it removes.",
    icon: "🧹",
  },
  {
    href: "/docs/profiles",
    title: "Tweak Profiles",
    desc: "Save and load tweak configurations as named profiles. 3 default profiles included: Standard, Gaming, Minimal. Learn how to create custom profiles.",
    icon: "💾",
  },
  {
    href: "/docs/restore",
    title: "Restore & Backup",
    desc: "System restore points, full registry backup (5 hives), and driver backup/restore. Learn how each feature works and when to use them.",
    icon: "🔧",
  },
];

export default function DocsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-3">Documentation</h1>
      <p className="text-text-muted mb-10 leading-relaxed">
        Everything you need to know about CodeWinOptimizer — from system tweaks to
        driver backups. Click any section below to dive in.
      </p>
      <div className="grid gap-4">
        {sections.map((s) => (
          <a
            key={s.href}
            href={s.href}
            className="group rounded-xl border border-border bg-bg-card p-6 transition-all hover:border-neon/40 hover:bg-bg-card-hover"
          >
            <div className="flex items-start gap-4">
              <span className="text-2xl mt-0.5">{s.icon}</span>
              <div>
                <h2 className="text-lg font-semibold group-hover:text-neon transition-colors">
                  {s.title}
                </h2>
                <p className="mt-1 text-sm text-text-muted leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

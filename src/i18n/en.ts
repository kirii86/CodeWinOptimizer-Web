const en = {
  nav: {
    features: "Features",
    preview: "Preview",
    techStack: "Tech Stack",
    docs: "Docs",
    starOnGitHub: "Star on GitHub",
    download: "Download",
  },
  hero: {
    badge: "Open Source · Portable · Free",
    title1: "Take control of",
    title2: "your Windows.",
    description:
      "A local-first Windows optimization tool that puts you in charge. System restore, app management, registry tweaks, performance tuning — all from a single, portable executable.",
    download: "Download for Windows",
    viewOnGitHub: "View on GitHub",
    subtitle: "Windows 10/11 · Single .exe with bundled O&O ShutUp10++ · No installation required · Auto-elevates to Administrator",
    install: {
      label: "Install in one line (PowerShell admin)",
      copy: "Copy",
      copied: "Copied!",
      hint: "No downloads. Always the latest version.",
    },
  },
  features: {
    heading1: "Everything you need to",
    heading2: "optimize Windows.",
    subheading:
      "From system restore to performance tuning — all the tools you need in one portable executable.",
    items: [
      {
        title: "System Restore",
        description:
          "Create system restore points with custom names. Bypasses the Windows 24h cooldown via registry tweak. Full registry backup to .reg files across all 5 hives. Driver backup & restore.",
      },
      {
        title: "App Manager",
        description:
          "181 apps across 8 categories including Microsoft Tools (.NET SDK 6/8/9/10, Sysinternals suite, PowerShell 7, PowerToys). Install/Uninstall via WinGet or Chocolatey with a dynamic button that switches based on installation state. Sticky search header that stays visible while scrolling.",
      },
      {
        title: "140+ System Tweaks",
        description:
          "Comprehensive tweaks across 14 categories: network, memory, GPU, privacy, performance, essential, advanced, firewall, Nagle, latency timers, UI & bloat removal. Robust execution via PowerShell cmdlets (Get/Disable-WindowsOptionalFeature, NetFirewallRule, CIM) — no more brittle wmic/netsh. Sticky toolbar with global Select All, per-category X/Y progress badges, and one-click ShutUp10++ launcher.",
      },
      {
        title: "Windows Features",
        description:
          "Enable/disable .NET Framework, Hyper-V, WSL, Sandbox, NFS, F8 Boot Recovery, and more. Quick fixes: network reset, NTP sync, SFC/DISM scan, Windows Update reset. State-checked features that skip cleanly when absent and never hang on Windows Update payload downloads.",
      },
      {
        title: "System Monitor",
        description:
          "3x2 dashboard with auto-refresh. Inline SVG icons (chip, RAM, GPU, disk, clock, globe). CPU & GPU usage with temperature next to the percentage. Per-drive usage bars, uptime + boot time, color-coded network latency rows per host. PC Health Score (0-100, A+ to F) with granular thresholds for RAM, CPU, disk free GB + % used, and GPU/CPU temp.",
      },
      {
        title: "Side-Docked Terminal",
        description:
          "Real-time command output docked to the right side, drag-resizable from 280px to 70% width with the width persisted in localStorage. Collapsible to a 36px vertical strip. Copy & clear actions. 6 accent colors + 6 fonts, persisted via localStorage. Bundled O&O ShutUp10++ for one-click privacy hardening.",
      },
    ],
  },
  stats: {
    appsAvailable: "Apps available",
    systemTweaks: "System tweaks",
    categories: "Categories",
    accentColors: "Accent colors",
    packageManagers: "Package managers",
    singleExe: "Single .exe",
  },
  preview: {
    heading1: "See it",
    heading2: "in action.",
    subheading: "A dark-themed, modern interface designed for power users.",
    labels: ["Restore", "Apps", "Tweaks", "Features", "Monitor", "Cleanup", "Updates", "Settings"],
  },
  discord: {
    heading: "Join KiriHub on Discord",
    subheading: "Get help, share feedback, and stay up to date.",
    button: "Join KiriHub",
  },
  tech: {
    heading1: "Built with",
    heading2: "modern tech.",
    items: [
      { label: "Backend", value: "Go + Wails v2 runtime" },
      { label: "Frontend", value: "Vanilla JS, CSS (dark theme)" },
      { label: "Window", value: "WebView2 (Edge Chromium)" },
      { label: "Package Managers", value: "WinGet, Chocolatey" },
      { label: "System Tools", value: "PowerShell, DISM, bcdedit, reg.exe, nvidia-smi" },
      { label: "Monitoring", value: "gopsutil (CPU/RAM), nvidia-smi (GPU), WMI" },
    ],
    howToHeading1: "How to",
    howToHeading2: "run.",
    quickStart: "Quick Start",
    steps: [
      "Download the latest .exe from GitHub Releases",
      "Run CodeWinOptimizer.exe as Administrator",
      "(Recommended) Create a restore point first",
      "Use any tab: install apps, apply tweaks, run fixes",
    ],
    prerequisites:
      "Prerequisites:",
    prerequisitesText: " Go 1.20+, Wails v2, Windows 10/11 with WebView2 runtime.",
    antivirusNotice: "Antivirus notice:",
    antivirusText:
      " This tool uses PowerShell, DISM, WMI, and registry commands. Some antivirus may flag the .exe as suspicious. All code is open source — ",
    reviewSource: "review the source",
    orBuild: " or build it yourself.",
  },
  footer: {
    website: "OscarDev",
  },
  lang: "English",
};

export default en;

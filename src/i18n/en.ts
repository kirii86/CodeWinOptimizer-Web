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
    subtitle: "Windows 10/11 · Single .exe · No installation required · Run as Administrator",
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
          "Create system restore points with custom names. Bypasses the Windows 24h cooldown via registry tweak. Full registry backup to .reg files across all 5 hives.",
      },
      {
        title: "App Manager",
        description:
          "171 apps across 7 categories. Install/Uninstall via WinGet or Chocolatey. Detects already installed apps with green badges. Website links and per-category select-all.",
      },
      {
        title: "140+ System Tweaks",
        description:
          "Comprehensive tweaks across 14 categories: network, memory, GPU, privacy, performance, essential (safe), advanced (caution), firewall, latency timers, UI & bloat removal. Toggle switches for each.",
      },
      {
        title: "Windows Features",
        description:
          "Enable/disable .NET Framework, Hyper-V, WSL, Sandbox, NFS, F8 Boot Recovery, and more. Quick fixes: network reset, NTP sync, SFC/DISM scan, Windows Update reset.",
      },
      {
        title: "System Monitor",
        description:
          "Real-time dashboard with 3-second auto-refresh. CPU usage, RAM gauge, GPU temp/VRAM via nvidia-smi, per-drive usage bars, system temperatures, and uptime tracking.",
      },
      {
        title: "Appearance & Terminal",
        description:
          "6 accent colors (Neon Green, Cyan, Purple, Orange, Pink, Yellow) and 6 fonts. Real-time command output terminal with copy and clear. Persistent via localStorage.",
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
    labels: ["Restore", "Apps", "Tweaks", "Features", "Monitor", "Cleanup", "Appearance"],
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

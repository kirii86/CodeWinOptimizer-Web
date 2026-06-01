"use client";

import { useLanguage } from "@/i18n";
import { type ReactNode } from "react";

const IconTweaks = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FFB020" strokeWidth="2" strokeLinecap="round">
    <line x1="4" y1="5" x2="4" y2="19" />
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="20" y1="5" x2="20" y2="19" />
    <circle cx="4" cy="10" r="2.5" fill="#FFB020" stroke="none" />
    <circle cx="12" cy="15" r="2.5" fill="#FFB020" stroke="none" />
    <circle cx="20" cy="8" r="2.5" fill="#FFB020" stroke="none" />
  </svg>
);

const IconFeatures = () => (
  <svg viewBox="10 8 42 46" width="24" height="24" fill="none">
    <path d="M15.3 19.9l16.9-7.2 11.9 28.1-17 7.3z" fill="#fff" />
    <path d="M24.8 43.8l17.5-7.5 1.9 4.6-17.3 7.4z" fill="#FEC34E" />
    <path d="M32.6 11.8L14.2 19.5l12.4 29.7 18.4-7.8L32.6 11.8zm-16.3 8.6L31.8 13.8l11.3 26.7-15.6 6.6z" fill="#2A2941" />
    <circle cx="34.6" cy="42.1" r="1" fill="#2A2941" />
    <path d="M33.1 17.2l4.6-1.9 4.5 2.8-3.6 6.2-6.6-2.4z" fill="#A694FE" />
    <path d="M40.8 28.1l4.5-2 4.7 2.6-3.1 6.5-7.2-2.2z" fill="#A694FE" />
    <path d="M27.3 28.5l3.5-1.6 3.3 2.2-2.2 4.6-5.2-1.4z" fill="#A694FE" />
  </svg>
);

const IconCleanup = () => (
  <svg viewBox="0 0 256 256" width="24" height="24">
    <path d="M179.3 171.1c1.5-5.3-.9-12.2-5.4-15.4l-14.5-10.3c-4.5-3.2-5.5-9.5-2.3-14l57.4-80.4c3.2-4.5 2.1-10.8-2.3-14l-5-3.6c-4.5-3.2-10.8-2.1-14 2.3l-57.4 80.4c-3.2 4.5-9.5 5.5-14 2.3l-14.1-10.1c-4.5-3.2-11.9-3.4-16.5-.4l-10.5 6.8c-4.6 3-4.7 8-.3 11.2l84.6 60.4c4.5 3.2 9.4 1.5 10.9-3.8z" fill="#464646" />
    <path d="M163.3 198.9c.1-2.3-1.3-5.4-3.2-6.8l-86.5-61.7c-1.9-1.4-4.7-1-6.2.8 0 0-56.9 68.9-36.9 67.8 3.5-.2 6.9-.2 10.2-.2 10.8-16.2 28.8-35 28.8-35s-8.5 19-12.6 36.4c7 1.1 13.2 2.8 18.8 4.9 4.2-4.9 7.5-9.3 7.5-9.3-1.6 4.4-2.9 7.9-3.9 10.7 6.9 2.8 12.8 6.2 18 9.5 9.1-5.7 16.4-11.8 16.4-11.8s-3.2 8.4-7.9 17.4c12.1 8.2 21 14 32.9 7.8 23.1-12.1 24.3-30.4 24.6-30.5z" fill="#464646" />
  </svg>
);

const IconRestore = () => (
  <svg viewBox="0 0 48 48" width="24" height="24">
    <g fill="#D1C4E9">
      <rect x="8" y="7" width="32" height="10" rx="2" />
      <rect x="8" y="19" width="32" height="10" rx="2" />
      <rect x="8" y="31" width="32" height="10" rx="2" />
    </g>
    <g fill="#2196F3">
      <polygon points="31,30 38,35.6 38,24.4" />
      <path d="M38 28c-.3 0-.7 0-1 .1v4c.3-.1.7-.1 1-.1 3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6c0-.3 0-.6.1-.9l-3.4-2.7c-.4 1.1-.7 2.3-.7 3.6 0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10z" />
    </g>
  </svg>
);

const IconProfiles = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17 21 17 13 7 13 7 21" />
    <polyline points="7 3 7 8 15 8" />
  </svg>
);

const IconApps = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const IconMonitor = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

type Section = {
  href: string;
  title: string;
  icon: ReactNode;
  desc: string;
};

const content: Record<string, { title: string; subtitle: string; sections: Section[] }> = {
  en: {
    title: "Documentation",
    subtitle: "Everything you need to know about CodeWinOptimizer — from system tweaks to driver backups. Click any section below to dive in.",
    sections: [
      { href: "/docs/apps", title: "App Manager", icon: <IconApps />, desc: "181 apps across 8 categories including the new Microsoft Tools section (.NET SDK 6/8/9/10, Sysinternals, PowerShell 7, PowerToys). Install/Uninstall via WinGet or Chocolatey with a dynamic action button. Sticky search header." },
      { href: "/docs/tweaks", title: "System Tweaks", icon: <IconTweaks />, desc: "140+ tweaks across 14 categories — network, memory, GPU, privacy, performance, essential, advanced. All commands now use modern PowerShell cmdlets (NetFirewallRule, CIM, *-WindowsOptionalFeature) instead of deprecated wmic/netsh. Each tweak documented with commands, warnings, and impact level." },
      { href: "/docs/monitor", title: "System Monitor", icon: <IconMonitor />, desc: "Real-time PC Health Score (0-100, A+ to F), 3×2 hardware cards with inline temperature, per-host network latency badges, DNS selector and full Speedtest.net integration." },
      { href: "/docs/features", title: "Windows Features & Quick Fixes", icon: <IconFeatures />, desc: "Enable/disable Hyper-V, WSL, Sandbox, .NET Framework, and more. Quick fixes for network reset, NTP sync, SFC/DISM scan, and Windows Update. State-checked so already-disabled features skip cleanly without hanging on payload downloads." },
      { href: "/docs/cleanup", title: "Disk Cleanup", icon: <IconCleanup />, desc: "7 cleanup tasks: temp files, recycle bin, prefetch, Windows Update cache, thumbnails, DNS cache, memory dumps. Each documented with what it removes. Handles empty/locked directories gracefully without spurious errors." },
      { href: "/docs/profiles", title: "Tweak Profiles", icon: <IconProfiles />, desc: "Save and load tweak configurations as named profiles. 3 default profiles included: Standard, Gaming, Minimal. Learn how to create custom profiles." },
      { href: "/docs/restore", title: "Restore & Backup", icon: <IconRestore />, desc: "System restore points, full registry backup (5 hives), and driver backup/restore. Learn how each feature works and when to use them." },
    ],
  },
  es: {
    title: "Documentación",
    subtitle: "Todo lo que necesitas saber sobre CodeWinOptimizer — desde ajustes del sistema hasta copias de seguridad de drivers. Haz clic en cualquier sección para explorar.",
    sections: [
      { href: "/docs/apps", title: "Gestor de Apps", icon: <IconApps />, desc: "181 apps en 8 categorías incluyendo la nueva sección Microsoft Tools (.NET SDK 6/8/9/10, Sysinternals, PowerShell 7, PowerToys). Instalar/Desinstalar vía WinGet o Chocolatey con botón dinámico. Cabecera con buscador sticky." },
      { href: "/docs/tweaks", title: "Ajustes del Sistema", icon: <IconTweaks />, desc: "Más de 140 ajustes en 14 categorías — red, memoria, GPU, privacidad, rendimiento, esenciales, avanzados. Todos los comandos ahora usan cmdlets modernas de PowerShell (NetFirewallRule, CIM, *-WindowsOptionalFeature) en lugar de wmic/netsh obsoletos. Cada ajuste documentado con comandos, advertencias y nivel de impacto." },
      { href: "/docs/monitor", title: "Monitor del sistema", icon: <IconMonitor />, desc: "Salud del PC en tiempo real (0-100, A+ a F), tarjetas de hardware 3×2 con temperatura inline, badges de latencia de red por host, selector DNS y test completo de Speedtest.net." },
      { href: "/docs/features", title: "Características de Windows", icon: <IconFeatures />, desc: "Activar/desactivar Hyper-V, WSL, Sandbox, .NET Framework y más. Correcciones rápidas para reinicio de red, sincronización NTP, escaneo SFC/DISM y Windows Update. Verificación de estado para que features ya deshabilitadas se omitan limpiamente sin quedarse colgadas en descargas." },
      { href: "/docs/cleanup", title: "Limpieza de Disco", icon: <IconCleanup />, desc: "7 tareas de limpieza: archivos temporales, papelera, prefetch, caché de Windows Update, miniaturas, caché DNS, volcados de memoria. Maneja directorios vacíos/bloqueados sin errores espurios." },
      { href: "/docs/profiles", title: "Perfiles de Tweaks", icon: <IconProfiles />, desc: "Guarda y carga configuraciones de tweaks como perfiles con nombre. 3 perfiles incluidos: Standard, Gaming, Minimal. Aprende a crear perfiles personalizados." },
      { href: "/docs/restore", title: "Restauración y Backup", icon: <IconRestore />, desc: "Puntos de restauración del sistema, copia completa del registro (5 hives) y backup/restauración de drivers. Aprende cómo funciona cada función." },
    ],
  },
};

export default function DocsPage() {
  const { locale } = useLanguage();
  const c = content[locale as keyof typeof content] || content.en;

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-3">{c.title}</h1>
      <p className="text-text-muted mb-10 leading-relaxed">{c.subtitle}</p>
      <div className="grid gap-4">
        {c.sections.map((s) => (
          <a
            key={s.href}
            href={s.href}
            className="group rounded-xl border border-border bg-bg-card p-6 transition-all hover:border-neon/40 hover:bg-bg-card-hover"
          >
            <div className="flex items-start gap-4">
              <span className="mt-0.5 shrink-0">{s.icon}</span>
              <div>
                <h2 className="text-lg font-semibold group-hover:text-neon transition-colors">
                  {s.title}
                </h2>
                <p className="mt-1 text-sm text-text-muted leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

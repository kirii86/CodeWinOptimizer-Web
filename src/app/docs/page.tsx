"use client";

import { useLanguage } from "@/i18n";

const content = {
  en: {
    title: "Documentation",
    subtitle: "Everything you need to know about CodeWinOptimizer — from system tweaks to driver backups. Click any section below to dive in.",
    sections: [
      { href: "/docs/tweaks", title: "System Tweaks", icon: "⚡", desc: "140+ tweaks across 14 categories — network, memory, GPU, privacy, performance, essential, advanced. Each tweak documented with commands, warnings, and impact level." },
      { href: "/docs/features", title: "Windows Features & Quick Fixes", icon: "🛠", desc: "Enable/disable Hyper-V, WSL, Sandbox, .NET Framework, and more. Quick fixes for network reset, NTP sync, SFC/DISM scan, and Windows Update." },
      { href: "/docs/cleanup", title: "Disk Cleanup", icon: "🧹", desc: "7 cleanup tasks: temp files, recycle bin, prefetch, Windows Update cache, thumbnails, DNS cache, memory dumps. Each documented with what it removes." },
      { href: "/docs/profiles", title: "Tweak Profiles", icon: "💾", desc: "Save and load tweak configurations as named profiles. 3 default profiles included: Standard, Gaming, Minimal. Learn how to create custom profiles." },
      { href: "/docs/restore", title: "Restore & Backup", icon: "🔧", desc: "System restore points, full registry backup (5 hives), and driver backup/restore. Learn how each feature works and when to use them." },
    ],
  },
  es: {
    title: "Documentación",
    subtitle: "Todo lo que necesitas saber sobre CodeWinOptimizer — desde ajustes del sistema hasta copias de seguridad de drivers. Haz clic en cualquier sección para explorar.",
    sections: [
      { href: "/docs/tweaks", title: "Ajustes del Sistema", icon: "⚡", desc: "Más de 140 ajustes en 14 categorías — red, memoria, GPU, privacidad, rendimiento, esenciales, avanzados. Cada ajuste documentado con comandos, advertencias y nivel de impacto." },
      { href: "/docs/features", title: "Características de Windows", icon: "🛠", desc: "Activar/desactivar Hyper-V, WSL, Sandbox, .NET Framework y más. Correcciones rápidas para reinicio de red, sincronización NTP, escaneo SFC/DISM y Windows Update." },
      { href: "/docs/cleanup", title: "Limpieza de Disco", icon: "🧹", desc: "7 tareas de limpieza: archivos temporales, papelera, prefetch, caché de Windows Update, miniaturas, caché DNS, volcados de memoria." },
      { href: "/docs/profiles", title: "Perfiles de Tweaks", icon: "💾", desc: "Guarda y carga configuraciones de tweaks como perfiles con nombre. 3 perfiles incluidos: Standard, Gaming, Minimal. Aprende a crear perfiles personalizados." },
      { href: "/docs/restore", title: "Restauración y Backup", icon: "🔧", desc: "Puntos de restauración del sistema, copia completa del registro (5 hives) y backup/restauración de drivers. Aprende cómo funciona cada función." },
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
              <span className="text-2xl mt-0.5">{s.icon}</span>
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

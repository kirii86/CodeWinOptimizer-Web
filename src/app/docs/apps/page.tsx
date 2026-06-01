"use client";

import { useLanguage } from "@/i18n";
import { type ReactNode } from "react";

const sectionIcons: ReactNode[] = [
  <svg key="catalog" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>,
  <svg key="ms" viewBox="0 0 24 24" width="22" height="22" fill="#A78BFA">
    <path d="M2 2h10v10H2zM12 2h10v10H12zM2 12h10v10H2zM12 12h10v10H12z" />
  </svg>,
  <svg key="pkg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16.5 9.4l-9-5.19" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>,
  <svg key="install" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
  </svg>,
];

const content = {
  en: {
    title: "App Manager",
    subtitle: "Install or uninstall 181 curated apps across 8 categories with one click. Powered by WinGet (default) or Chocolatey.",
    sections: [
      {
        title: "Catalog overview",
        desc: "Apps grouped by purpose with sticky search and filters that stay visible while scrolling.",
        details: [
          "8 categories: Browsers, Multimedia, Development, Games, Communication, AI, Utilities, Microsoft Tools",
          "Already-installed apps show a green badge and left border; the toggle is disabled for them",
          "Sticky header: WinGet/Chocolatey toggle, search box, Clear Selection, Collapse All, Show Installed — always visible",
          "Per-category Select All / Deselect All",
        ],
      },
      {
        title: "Microsoft Tools (new in 1.2.1)",
        desc: "Dedicated category with the 14 most-requested Microsoft utilities. Real icons extracted from each official .exe.",
        details: [
          ".NET SDK 6.0 LTS, 8.0 LTS, 9.0, 10.0 (Preview)",
          "Sysinternals: TCPView, RDCMan, Process Monitor, Process Explorer",
          "PowerShell 7, NuGet CLI, PowerToys, NTLite, DISMTools, OneDrive",
          "All icons sourced from the official binaries (Sysinternals icons extracted with [System.Drawing.Icon]::ExtractAssociatedIcon)",
        ],
      },
      {
        title: "Package managers",
        desc: "Pick WinGet or Chocolatey at the top. Each app stores both IDs and the active manager decides which is used.",
        details: [
          "WinGet: ships with Windows 10+/11, no setup needed",
          "Chocolatey: alternative manager; some apps have different IDs or aren't available",
          "Apps with no ID for the active manager are disabled (the Web button still opens the project site for manual download)",
        ],
      },
      {
        title: "Install / Uninstall (dynamic)",
        desc: "The action button on every card switches automatically based on installation state.",
        details: [
          "Not installed → green 'Install' button — runs winget install or choco install via the elevated app context",
          "Installed → red 'Uninstall' button — runs winget uninstall or choco uninstall",
          "Bulk mode: tick the toggle on multiple apps, then click 'Install Selected' to install them all in sequence",
          "Real-time output streams to the side-docked terminal",
        ],
      },
    ],
  },
  es: {
    title: "Gestor de Apps",
    subtitle: "Instala o desinstala 181 apps curadas en 8 categorías con un click. Funciona con WinGet (por defecto) o Chocolatey.",
    sections: [
      {
        title: "Catálogo general",
        desc: "Apps agrupadas por propósito con buscador y filtros sticky que permanecen visibles al hacer scroll.",
        details: [
          "8 categorías: Navegadores, Multimedia, Desarrollo, Juegos, Comunicación, IA, Utilidades, Microsoft Tools",
          "Las apps ya instaladas muestran un badge verde y borde lateral; el toggle aparece deshabilitado",
          "Cabecera sticky: toggle WinGet/Chocolatey, buscador, Limpiar Selección, Colapsar Todo, Mostrar Instaladas — siempre visible",
          "Seleccionar Todo / Deseleccionar Todo por categoría",
        ],
      },
      {
        title: "Microsoft Tools (nuevo en 1.2.1)",
        desc: "Categoría dedicada con las 14 utilidades de Microsoft más solicitadas. Iconos reales extraídos de cada .exe oficial.",
        details: [
          ".NET SDK 6.0 LTS, 8.0 LTS, 9.0, 10.0 (Preview)",
          "Sysinternals: TCPView, RDCMan, Process Monitor, Explorador de procesos",
          "PowerShell 7, NuGet CLI, PowerToys, NTLite, DISMTools, OneDrive",
          "Todos los iconos provienen de los binarios oficiales (iconos Sysinternals extraídos con [System.Drawing.Icon]::ExtractAssociatedIcon)",
        ],
      },
      {
        title: "Gestores de paquetes",
        desc: "Elige WinGet o Chocolatey arriba. Cada app guarda ambos IDs y el gestor activo decide cuál se usa.",
        details: [
          "WinGet: viene con Windows 10+/11, sin configuración previa",
          "Chocolatey: gestor alternativo; algunas apps tienen IDs distintos o no están disponibles",
          "Las apps sin ID para el gestor activo se deshabilitan (el botón Web sigue abriendo la web del proyecto para descarga manual)",
        ],
      },
      {
        title: "Instalar / Desinstalar (dinámico)",
        desc: "El botón de acción de cada tarjeta cambia automáticamente según el estado de instalación.",
        details: [
          "No instalada → botón verde 'Instalar' — ejecuta winget install o choco install en el contexto elevado de la app",
          "Instalada → botón rojo 'Desinstalar' — ejecuta winget uninstall o choco uninstall",
          "Modo masivo: marca el toggle en múltiples apps, luego pulsa 'Instalar Seleccionados' para instalarlas en secuencia",
          "La salida en tiempo real fluye a la terminal lateral",
        ],
      },
    ],
  },
};

export default function AppsPage() {
  const { locale } = useLanguage();
  const c = content[locale as keyof typeof content] || content.en;

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-3">{c.title}</h1>
      <p className="text-text-muted mb-10 leading-relaxed">{c.subtitle}</p>
      <div className="grid gap-6">
        {c.sections.map((s, i) => (
          <section key={i} className="rounded-lg border border-border bg-bg-card p-5">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <span className="shrink-0">{sectionIcons[i]}</span> {s.title}
            </h2>
            <p className="text-sm text-text-muted mt-2 leading-relaxed">{s.desc}</p>
            <div className="mt-3 text-xs text-text-muted space-y-1">
              {s.details.map((d, j) => <p key={j}>{d}</p>)}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

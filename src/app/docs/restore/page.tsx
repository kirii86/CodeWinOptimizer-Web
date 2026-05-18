"use client";

import { useLanguage } from "@/i18n";
import { type ReactNode } from "react";

const sectionIcons: ReactNode[] = [
  <svg key="restore" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M12 7v5l4 2" />
  </svg>,
  <svg key="registry" viewBox="0 0 24 24" width="22" height="22" fill="#F59E0B">
    <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3m18 0v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8m18 0H3m6 0V3m6 0v5" />
  </svg>,
  <svg key="driver" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" /><polyline points="7 11 12 16 17 11" /><line x1="12" y1="4" x2="12" y2="16" />
  </svg>,
];

const content = {
  en: {
    title: "Restore & Backup",
    subtitle: "Three layers of protection: system restore points, full registry backup, and driver backup.",
    sections: [
      {
        title: "System Restore Point",
        desc: "Creates a Windows System Restore point with a custom name. Bypasses the default 24-hour cooldown by temporarily setting SystemRestorePointCreationFrequency to 0.",
        details: [
          "Backs up: Registry (all hives), system files, drivers, installed programs (system state), Windows Updates",
          "Does NOT back up: Personal files (Documents, Photos), user-deleted files",
          "When to use: Before applying tweaks, installing unknown software, or registry changes",
        ],
      },
      {
        title: "Registry Backup",
        desc: "Exports all 5 registry hives (HKLM, HKCU, HKCR, HKU, HKCC) to .reg files via reg export. Saved to Documents\\CodeWinOptimizer\\registry-backups\\ with timestamp.",
        details: [
          "Full backup: Complete registry export, not just a snapshot",
          "Restorable: Double-click any .reg file to restore that hive",
          "When to use: Before major system changes or as periodic safety net",
        ],
      },
      {
        title: "Driver Backup & Restore",
        desc: "Backup: Exports all third-party drivers via DISM. Restore: Select a backup folder and uses pnputil for each .inf file.",
        details: [
          "When to backup: Before reinstalling Windows or selling a PC",
          "When to restore: After fresh Windows install to get all drivers back",
          "Note: Only third-party drivers are exported (not Windows inbox drivers)",
        ],
      },
    ],
  },
  es: {
    title: "Restauración y Backup",
    subtitle: "Tres capas de protección: puntos de restauración del sistema, copia completa del registro y backup de drivers.",
    sections: [
      {
        title: "Punto de Restauración",
        desc: "Crea un punto de restauración del sistema con nombre personalizado. Omite el bloqueo de 24 horas ajustando temporalmente SystemRestorePointCreationFrequency a 0.",
        details: [
          "Respalda: Registro (todos los hives), archivos del sistema, drivers, programas instalados, Windows Updates",
          "NO respalda: Archivos personales (Documentos, Fotos), archivos eliminados por el usuario",
          "Cuándo usar: Antes de aplicar tweaks, instalar software desconocido o cambios en el registro",
        ],
      },
      {
        title: "Copia del Registro",
        desc: "Exporta los 5 hives del registro (HKLM, HKCU, HKCR, HKU, HKCC) a archivos .reg mediante reg export. Guardado en Documents\\CodeWinOptimizer\\registry-backups\\ con marca de tiempo.",
        details: [
          "Copia completa: Exportación completa del registro, no solo una instantánea",
          "Restaurable: Haz doble clic en cualquier .reg para restaurar ese hive",
          "Cuándo usar: Antes de cambios importantes del sistema o como respaldo periódico",
        ],
      },
      {
        title: "Backup de Drivers",
        desc: "Backup: Exporta todos los drivers de terceros mediante DISM. Restauración: Selecciona una carpeta de backup y usa pnputil para cada archivo .inf.",
        details: [
          "Cuándo respaldar: Antes de reinstalar Windows o vender un PC",
          "Cuándo restaurar: Después de una instalación limpia de Windows para recuperar drivers",
          "Nota: Solo se exportan drivers de terceros (no los drivers incluidos en Windows)",
        ],
      },
    ],
  },
};

export default function RestorePage() {
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

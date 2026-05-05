"use client";

import { useLanguage } from "@/i18n";

const content = {
  en: {
    title: "Restore & Backup",
    subtitle: "Three layers of protection: system restore points, full registry backup, and driver backup.",
    sections: [
      {
        title: "System Restore Point", icon: "🔧",
        desc: "Creates a Windows System Restore point with a custom name. Bypasses the default 24-hour cooldown by temporarily setting SystemRestorePointCreationFrequency to 0.",
        details: [
          "Backs up: Registry (all hives), system files, drivers, installed programs (system state), Windows Updates",
          "Does NOT back up: Personal files (Documents, Photos), user-deleted files",
          "When to use: Before applying tweaks, installing unknown software, or registry changes",
        ],
      },
      {
        title: "Registry Backup", icon: "📦",
        desc: "Exports all 5 registry hives (HKLM, HKCU, HKCR, HKU, HKCC) to .reg files via reg export. Saved to Documents\\CodeWinOptimizer\\registry-backups\\ with timestamp.",
        details: [
          "Full backup: Complete registry export, not just a snapshot",
          "Restorable: Double-click any .reg file to restore that hive",
          "When to use: Before major system changes or as periodic safety net",
        ],
      },
      {
        title: "Driver Backup & Restore", icon: "💾",
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
        title: "Punto de Restauración", icon: "🔧",
        desc: "Crea un punto de restauración del sistema con nombre personalizado. Omite el bloqueo de 24 horas ajustando temporalmente SystemRestorePointCreationFrequency a 0.",
        details: [
          "Respalda: Registro (todos los hives), archivos del sistema, drivers, programas instalados, Windows Updates",
          "NO respalda: Archivos personales (Documentos, Fotos), archivos eliminados por el usuario",
          "Cuándo usar: Antes de aplicar tweaks, instalar software desconocido o cambios en el registro",
        ],
      },
      {
        title: "Copia del Registro", icon: "📦",
        desc: "Exporta los 5 hives del registro (HKLM, HKCU, HKCR, HKU, HKCC) a archivos .reg mediante reg export. Guardado en Documents\\CodeWinOptimizer\\registry-backups\\ con marca de tiempo.",
        details: [
          "Copia completa: Exportación completa del registro, no solo una instantánea",
          "Restaurable: Haz doble clic en cualquier .reg para restaurar ese hive",
          "Cuándo usar: Antes de cambios importantes del sistema o como respaldo periódico",
        ],
      },
      {
        title: "Backup de Drivers", icon: "💾",
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
              <span>{s.icon}</span> {s.title}
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

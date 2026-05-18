"use client";

import { useLanguage } from "@/i18n";
import { type ReactNode } from "react";

const icons: Record<string, ReactNode> = {
  folder: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#F59E0B">
      <path d="M2 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z" />
    </svg>
  ),
  trash: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /><path d="M10 11v6" /><path d="M14 11v6" /><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#FACC15">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  download: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
  image: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  crash: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#F87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
};

const iconKeys = ["folder", "trash", "bolt", "download", "image", "globe", "crash"];

const content = {
  en: {
    title: "Disk Cleanup",
    subtitle: "7 cleanup tasks that safely free disk space without affecting system stability. All operations are safe but not reversible (Recycle Bin already emptied, etc.), so review each task before running.",
    location: "Location",
    command: "Command",
    items: [
      { name: "Temporary Files", desc: "Removes files from %TEMP% and Windows\\Temp folders. These are created by apps and Windows during normal operation and are safe to delete.", path: "%TEMP%\\* and %WINDIR%\\Temp\\*", cmd: 'Remove-Item -Recurse -Force "$env:TEMP\\*"; Remove-Item -Recurse -Force "$env:WINDIR\\Temp\\*"' },
      { name: "Recycle Bin", desc: "Empties the Recycle Bin on all drives, permanently deleting files that were previously sent to the Recycle Bin.", path: "All drives", cmd: "Clear-RecycleBin -Force" },
      { name: "Prefetch Files", desc: "Deletes prefetch files (.pf) in Windows\\Prefetch. These files speed up app startup but can accumulate over time. Safe to delete — Windows will rebuild them as needed.", path: "%WINDIR%\\Prefetch\\*", cmd: 'Remove-Item -Force "$env:WINDIR\\Prefetch\\*"' },
      { name: "Windows Update Cache", desc: "Clears the SoftwareDistribution\\Download folder where Windows stores downloaded update files. Windows Update service is stopped/restarted automatically.", path: "%WINDIR%\\SoftwareDistribution\\Download\\*", cmd: 'net stop wuauserv; net stop bits; Remove-Item -Recurse -Force "$env:WINDIR\\SoftwareDistribution\\Download\\*"; net start wuauserv; net start bits' },
      { name: "Thumbnail Cache", desc: "Deletes Explorer thumbnail cache files (thumbcache_*.db). These caches speed up thumbnail display in folders with images but can grow large over time.", path: "%LOCALAPPDATA%\\Microsoft\\Windows\\Explorer\\thumbcache_*", cmd: 'Remove-Item -Force "$env:LOCALAPPDATA\\Microsoft\\Windows\\Explorer\\thumbcache_*"' },
      { name: "DNS Cache", desc: "Flushes the DNS resolver cache (ipconfig /flushdns). This forces Windows to re-resolve domain names, fixing connectivity issues and clearing outdated entries.", path: "In-memory cache", cmd: "ipconfig /flushdns" },
      { name: "Memory Dumps", desc: "Deletes MEMORY.DMP (kernel memory dump) and Minidump files. Created after BSOD crashes and can be very large. Safe to delete after diagnosing crash issues.", path: "%WINDIR%\\MEMORY.DMP and %WINDIR%\\Minidump\\*", cmd: 'Remove-Item -Force "$env:WINDIR\\MEMORY.DMP"; Remove-Item -Force "$env:WINDIR\\Minidump\\*"' },
    ],
  },
  es: {
    title: "Limpieza de Disco",
    subtitle: "7 tareas de limpieza que liberan espacio en disco de forma segura sin afectar la estabilidad del sistema. Revisa cada tarea antes de ejecutarla.",
    location: "Ubicación",
    command: "Comando",
    items: [
      { name: "Archivos Temporales", desc: "Elimina archivos de las carpetas %TEMP% y Windows\\Temp. Son creados por apps y Windows durante la operación normal y es seguro eliminarlos.", path: "%TEMP%\\* y %WINDIR%\\Temp\\*", cmd: 'Remove-Item -Recurse -Force "$env:TEMP\\*"; Remove-Item -Recurse -Force "$env:WINDIR\\Temp\\*"' },
      { name: "Papelera de Reciclaje", desc: "Vacía la Papelera de Reciclaje en todas las unidades, eliminando permanentemente los archivos enviados previamente a la papelera.", path: "Todas las unidades", cmd: "Clear-RecycleBin -Force" },
      { name: "Archivos Prefetch", desc: "Elimina archivos prefetch (.pf) en Windows\\Prefetch. Estos archivos aceleran el inicio de apps pero pueden acumularse. Windows los reconstruirá según sea necesario.", path: "%WINDIR%\\Prefetch\\*", cmd: 'Remove-Item -Force "$env:WINDIR\\Prefetch\\*"' },
      { name: "Caché de Windows Update", desc: "Limpia la carpeta SoftwareDistribution\\Download donde Windows almacena archivos de actualización descargados. El servicio Windows Update se detiene/reinicia automáticamente.", path: "%WINDIR%\\SoftwareDistribution\\Download\\*", cmd: 'net stop wuauserv; net stop bits; Remove-Item -Recurse -Force "$env:WINDIR\\SoftwareDistribution\\Download\\*"; net start wuauserv; net start bits' },
      { name: "Caché de Miniaturas", desc: "Elimina archivos de caché de miniaturas del Explorador (thumbcache_*.db). Estas cachés aceleran la visualización de miniaturas en carpetas con imágenes.", path: "%LOCALAPPDATA%\\Microsoft\\Windows\\Explorer\\thumbcache_*", cmd: 'Remove-Item -Force "$env:LOCALAPPDATA\\Microsoft\\Windows\\Explorer\\thumbcache_*"' },
      { name: "Caché DNS", desc: "Vacía la caché del resolver DNS (ipconfig /flushdns). Esto obliga a Windows a volver a resolver nombres de dominio, corrigiendo problemas de conectividad.", path: "Caché en memoria", cmd: "ipconfig /flushdns" },
      { name: "Volcados de Memoria", desc: "Elimina MEMORY.DMP (volcado de memoria del kernel) y archivos Minidump. Creados después de pantallazos azules (BSOD), pueden ser muy grandes. Seguro eliminar tras diagnosticar.", path: "%WINDIR%\\MEMORY.DMP y %WINDIR%\\Minidump\\*", cmd: 'Remove-Item -Force "$env:WINDIR\\MEMORY.DMP"; Remove-Item -Force "$env:WINDIR\\Minidump\\*"' },
    ],
  },
};

export default function CleanupPage() {
  const { locale } = useLanguage();
  const c = content[locale as keyof typeof content] || content.en;

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-3">{c.title}</h1>
      <p className="text-text-muted mb-10 leading-relaxed">{c.subtitle}</p>
      <div className="grid gap-4">
        {c.items.map((t, i) => (
          <div key={i} className="rounded-lg border border-border bg-bg-card p-5">
            <h2 className="text-base font-semibold flex items-center gap-2">
              <span className="shrink-0">{icons[iconKeys[i]]}</span> {t.name}
            </h2>
            <p className="text-sm text-text-muted mt-2 leading-relaxed">{t.desc}</p>
            <div className="mt-3 flex flex-wrap gap-4">
              <div>
                <span className="text-[10px] font-semibold uppercase text-text-muted tracking-wider">{c.location}</span>
                <p className="text-xs font-mono text-text-muted mt-0.5">{t.path}</p>
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-semibold uppercase text-text-muted tracking-wider">{c.command}</span>
                <pre className="mt-0.5 rounded border border-border bg-bg-dark p-2 text-[11px] font-mono text-text-muted overflow-x-auto">{t.cmd}</pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

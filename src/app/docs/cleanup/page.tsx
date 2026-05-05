"use client";

import { useLanguage } from "@/i18n";

const content = {
  en: {
    title: "Disk Cleanup",
    subtitle: "7 cleanup tasks that safely free disk space without affecting system stability. All operations are safe but not reversible (Recycle Bin already emptied, etc.), so review each task before running.",
    location: "Location",
    command: "Command",
    items: [
      { name: "Temporary Files", icon: "📁", desc: "Removes files from %TEMP% and Windows\\Temp folders. These are created by apps and Windows during normal operation and are safe to delete.", path: "%TEMP%\\* and %WINDIR%\\Temp\\*", cmd: 'Remove-Item -Recurse -Force "$env:TEMP\\*"; Remove-Item -Recurse -Force "$env:WINDIR\\Temp\\*"' },
      { name: "Recycle Bin", icon: "🗑", desc: "Empties the Recycle Bin on all drives, permanently deleting files that were previously sent to the Recycle Bin.", path: "All drives", cmd: "Clear-RecycleBin -Force" },
      { name: "Prefetch Files", icon: "⚡", desc: "Deletes prefetch files (.pf) in Windows\\Prefetch. These files speed up app startup but can accumulate over time. Safe to delete — Windows will rebuild them as needed.", path: "%WINDIR%\\Prefetch\\*", cmd: 'Remove-Item -Force "$env:WINDIR\\Prefetch\\*"' },
      { name: "Windows Update Cache", icon: "🔽", desc: "Clears the SoftwareDistribution\\Download folder where Windows stores downloaded update files. Windows Update service is stopped/restarted automatically.", path: "%WINDIR%\\SoftwareDistribution\\Download\\*", cmd: 'net stop wuauserv; net stop bits; Remove-Item -Recurse -Force "$env:WINDIR\\SoftwareDistribution\\Download\\*"; net start wuauserv; net start bits' },
      { name: "Thumbnail Cache", icon: "🖼", desc: "Deletes Explorer thumbnail cache files (thumbcache_*.db). These caches speed up thumbnail display in folders with images but can grow large over time.", path: "%LOCALAPPDATA%\\Microsoft\\Windows\\Explorer\\thumbcache_*", cmd: 'Remove-Item -Force "$env:LOCALAPPDATA\\Microsoft\\Windows\\Explorer\\thumbcache_*"' },
      { name: "DNS Cache", icon: "🌐", desc: "Flushes the DNS resolver cache (ipconfig /flushdns). This forces Windows to re-resolve domain names, fixing connectivity issues and clearing outdated entries.", path: "In-memory cache", cmd: "ipconfig /flushdns" },
      { name: "Memory Dumps", icon: "💥", desc: "Deletes MEMORY.DMP (kernel memory dump) and Minidump files. Created after BSOD crashes and can be very large. Safe to delete after diagnosing crash issues.", path: "%WINDIR%\\MEMORY.DMP and %WINDIR%\\Minidump\\*", cmd: 'Remove-Item -Force "$env:WINDIR\\MEMORY.DMP"; Remove-Item -Force "$env:WINDIR\\Minidump\\*"' },
    ],
  },
  es: {
    title: "Limpieza de Disco",
    subtitle: "7 tareas de limpieza que liberan espacio en disco de forma segura sin afectar la estabilidad del sistema. Revisa cada tarea antes de ejecutarla.",
    location: "Ubicación",
    command: "Comando",
    items: [
      { name: "Archivos Temporales", icon: "📁", desc: "Elimina archivos de las carpetas %TEMP% y Windows\\Temp. Son creados por apps y Windows durante la operación normal y es seguro eliminarlos.", path: "%TEMP%\\* y %WINDIR%\\Temp\\*", cmd: 'Remove-Item -Recurse -Force "$env:TEMP\\*"; Remove-Item -Recurse -Force "$env:WINDIR\\Temp\\*"' },
      { name: "Papelera de Reciclaje", icon: "🗑", desc: "Vacía la Papelera de Reciclaje en todas las unidades, eliminando permanentemente los archivos enviados previamente a la papelera.", path: "Todas las unidades", cmd: "Clear-RecycleBin -Force" },
      { name: "Archivos Prefetch", icon: "⚡", desc: "Elimina archivos prefetch (.pf) en Windows\\Prefetch. Estos archivos aceleran el inicio de apps pero pueden acumularse. Windows los reconstruirá según sea necesario.", path: "%WINDIR%\\Prefetch\\*", cmd: 'Remove-Item -Force "$env:WINDIR\\Prefetch\\*"' },
      { name: "Caché de Windows Update", icon: "🔽", desc: "Limpia la carpeta SoftwareDistribution\\Download donde Windows almacena archivos de actualización descargados. El servicio Windows Update se detiene/reinicia automáticamente.", path: "%WINDIR%\\SoftwareDistribution\\Download\\*", cmd: 'net stop wuauserv; net stop bits; Remove-Item -Recurse -Force "$env:WINDIR\\SoftwareDistribution\\Download\\*"; net start wuauserv; net start bits' },
      { name: "Caché de Miniaturas", icon: "🖼", desc: "Elimina archivos de caché de miniaturas del Explorador (thumbcache_*.db). Estas cachés aceleran la visualización de miniaturas en carpetas con imágenes.", path: "%LOCALAPPDATA%\\Microsoft\\Windows\\Explorer\\thumbcache_*", cmd: 'Remove-Item -Force "$env:LOCALAPPDATA\\Microsoft\\Windows\\Explorer\\thumbcache_*"' },
      { name: "Caché DNS", icon: "🌐", desc: "Vacía la caché del resolver DNS (ipconfig /flushdns). Esto obliga a Windows a volver a resolver nombres de dominio, corrigiendo problemas de conectividad.", path: "Caché en memoria", cmd: "ipconfig /flushdns" },
      { name: "Volcados de Memoria", icon: "💥", desc: "Elimina MEMORY.DMP (volcado de memoria del kernel) y archivos Minidump. Creados después de pantallazos azules (BSOD), pueden ser muy grandes. Seguro eliminar tras diagnosticar.", path: "%WINDIR%\\MEMORY.DMP y %WINDIR%\\Minidump\\*", cmd: 'Remove-Item -Force "$env:WINDIR\\MEMORY.DMP"; Remove-Item -Force "$env:WINDIR\\Minidump\\*"' },
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
              <span>{t.icon}</span> {t.name}
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

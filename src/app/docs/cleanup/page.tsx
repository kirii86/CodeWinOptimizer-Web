import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disk Cleanup — CodeWinOptimizer Docs",
  description:
    "Documentation for all 7 disk cleanup tasks in CodeWinOptimizer — temp files, recycle bin, prefetch, Windows Update cache, thumbnails, DNS, memory dumps.",
};

const tasks = [
  {
    id: "temp",
    name: "Temporary Files",
    icon: "📁",
    desc: "Removes files from %TEMP% and Windows\\Temp folders. These are created by apps and Windows during normal operation and are safe to delete.",
    path: "%TEMP%\\* and %WINDIR%\\Temp\\*",
    cmd: 'Remove-Item -Recurse -Force "$env:TEMP\\*"; Remove-Item -Recurse -Force "$env:WINDIR\\Temp\\*"',
  },
  {
    id: "recycle",
    name: "Recycle Bin",
    icon: "🗑",
    desc: "Empties the Recycle Bin on all drives, permanently deleting files that were previously sent to the Recycle Bin.",
    path: "All drives",
    cmd: "Clear-RecycleBin -Force",
  },
  {
    id: "prefetch",
    name: "Prefetch Files",
    icon: "⚡",
    desc: "Deletes prefetch files (.pf) in Windows\\Prefetch. These files speed up app startup but can accumulate over time. Safe to delete — Windows will rebuild them as needed.",
    path: "%WINDIR%\\Prefetch\\*",
    cmd: 'Remove-Item -Force "$env:WINDIR\\Prefetch\\*"',
  },
  {
    id: "winupdate",
    name: "Windows Update Cache",
    icon: "🔽",
    desc: "Clears the SoftwareDistribution\\Download folder where Windows stores downloaded update files. This can free significant space if updates have accumulated. Windows Update service is stopped/restarted automatically.",
    path: "%WINDIR%\\SoftwareDistribution\\Download\\*",
    cmd: 'net stop wuauserv; net stop bits; Remove-Item -Recurse -Force "$env:WINDIR\\SoftwareDistribution\\Download\\*"; net start wuauserv; net start bits',
  },
  {
    id: "thumbnails",
    name: "Thumbnail Cache",
    icon: "🖼",
    desc: "Deletes Explorer thumbnail cache files (thumbcache_*.db). These caches speed up thumbnail display in folders with images but can grow large over time.",
    path: "%LOCALAPPDATA%\\Microsoft\\Windows\\Explorer\\thumbcache_*",
    cmd: 'Remove-Item -Force "$env:LOCALAPPDATA\\Microsoft\\Windows\\Explorer\\thumbcache_*"',
  },
  {
    id: "dnscache",
    name: "DNS Cache",
    icon: "🌐",
    desc: "Flushes the DNS resolver cache (ipconfig /flushdns). This forces Windows to re-resolve domain names, which can fix connectivity issues and clear outdated entries.",
    path: "In-memory cache",
    cmd: "ipconfig /flushdns",
  },
  {
    id: "memorydump",
    name: "Memory Dumps",
    icon: "💥",
    desc: "Deletes MEMORY.DMP (kernel memory dump) and Minidump files. These are created after system crashes (BSOD) and can be very large. Safe to delete after diagnosing crash issues.",
    path: "%WINDIR%\\MEMORY.DMP and %WINDIR%\\Minidump\\*",
    cmd: 'Remove-Item -Force "$env:WINDIR\\MEMORY.DMP"; Remove-Item -Force "$env:WINDIR\\Minidump\\*"',
  },
];

export default function CleanupPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-3">Disk Cleanup</h1>
      <p className="text-text-muted mb-10 leading-relaxed">
        7 cleanup tasks that safely free disk space without affecting system stability.
        All operations are reversible only through Windows backup mechanisms (Recycle Bin
        already emptied, etc.), so review each task before running.
      </p>

      <div className="grid gap-4">
        {tasks.map((t) => (
          <div key={t.id} className="rounded-lg border border-border bg-bg-card p-5">
            <h2 className="text-base font-semibold flex items-center gap-2">
              <span>{t.icon}</span>
              {t.name}
            </h2>
            <p className="text-sm text-text-muted mt-2 leading-relaxed">{t.desc}</p>
            <div className="mt-3 flex flex-wrap gap-4">
              <div>
                <span className="text-[10px] font-semibold uppercase text-text-muted tracking-wider">
                  Location
                </span>
                <p className="text-xs font-mono text-text-muted mt-0.5">{t.path}</p>
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-semibold uppercase text-text-muted tracking-wider">
                  Command
                </span>
                <pre className="mt-0.5 rounded border border-border bg-bg-dark p-2 text-[11px] font-mono text-text-muted overflow-x-auto">
                  {t.cmd}
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

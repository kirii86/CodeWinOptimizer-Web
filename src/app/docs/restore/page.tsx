import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restore & Backup — CodeWinOptimizer Docs",
  description: "System restore points, registry backup, and driver backup/restore documentation.",
};

export default function RestorePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-3">Restore & Backup</h1>
      <p className="text-text-muted mb-10 leading-relaxed">
        Three layers of protection: system restore points, full registry backup, and driver backup.
      </p>

      <div className="grid gap-6">
        <section className="rounded-lg border border-border bg-bg-card p-5">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <span>🔧</span> System Restore Point
          </h2>
          <p className="text-sm text-text-muted mt-2 leading-relaxed">
            Creates a Windows System Restore point with a custom name. Bypasses the default 24-hour cooldown
            by temporarily setting <code className="text-neon text-xs">SystemRestorePointCreationFrequency</code> to 0.
          </p>
          <div className="mt-3 text-xs text-text-muted space-y-1">
            <p><strong className="text-white">Backs up:</strong> Registry (all hives), system files, drivers, installed programs (system state), Windows Updates</p>
            <p><strong className="text-white">Does NOT back up:</strong> Personal files (Documents, Photos), user-deleted files</p>
            <p><strong className="text-white">When to use:</strong> Before applying tweaks, installing unknown software, or registry changes</p>
          </div>
        </section>

        <section className="rounded-lg border border-border bg-bg-card p-5">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <span>📦</span> Registry Backup
          </h2>
          <p className="text-sm text-text-muted mt-2 leading-relaxed">
            Exports all 5 registry hives (HKLM, HKCU, HKCR, HKU, HKCC) to .reg files via <code className="text-neon text-xs">reg export</code>.
            Saved to <code className="text-neon text-xs">Documents\CodeWinOptimizer\registry-backups\</code> with timestamp.
          </p>
          <div className="mt-3 text-xs text-text-muted space-y-1">
            <p><strong className="text-white">Full backup:</strong> Complete registry export, not just a snapshot</p>
            <p><strong className="text-white">Restorable:</strong> Double-click any .reg file to restore that hive</p>
            <p><strong className="text-white">When to use:</strong> Before major system changes or as periodic safety net</p>
          </div>
        </section>

        <section className="rounded-lg border border-border bg-bg-card p-5">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <span>💾</span> Driver Backup &amp; Restore
          </h2>
          <p className="text-sm text-text-muted mt-2 leading-relaxed">
            <strong>Backup:</strong> Exports all third-party drivers via <code className="text-neon text-xs">dism /Online /Export-Driver</code>
            to <code className="text-neon text-xs">Documents\CodeWinOptimizer\driver-backups\</code> with timestamp.
          </p>
          <p className="text-sm text-text-muted mt-2 leading-relaxed">
            <strong>Restore:</strong> Select a backup folder. Uses <code className="text-neon text-xs">pnputil /add-driver /install</code>
            for each .inf file found recursively.
          </p>
          <div className="mt-3 text-xs text-text-muted space-y-1">
            <p><strong className="text-white">When to backup:</strong> Before reinstalling Windows or selling a PC</p>
            <p><strong className="text-white">When to restore:</strong> After fresh Windows install to get all drivers back</p>
            <p><strong className="text-white">Note:</strong> Only third-party drivers are exported (not Windows inbox drivers)</p>
          </div>
        </section>
      </div>
    </div>
  );
}

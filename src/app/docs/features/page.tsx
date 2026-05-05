import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Windows Features & Quick Fixes — CodeWinOptimizer Docs",
  description:
    "Documentation for Windows Features and Quick Fixes in CodeWinOptimizer — Hyper-V, WSL, Sandbox, network reset, SFC/DISM, and more.",
};

const features = [
  { id: "net-framework-35", name: ".NET Framework 3.5", desc: "Enables .NET Framework 3.5 (includes 2.0 and 3.0) for legacy application compatibility.", cmd: "Enable-WindowsOptionalFeature -Online -FeatureName NetFx3" },
  { id: "net-framework-48", name: ".NET Framework 4.8", desc: "Enables .NET Framework 4.8 Advanced Services.", cmd: "Enable-WindowsOptionalFeature -Online -FeatureName NetFx4-AdvSrvs" },
  { id: "hyper-v", name: "Hyper-V", desc: "Microsoft's hypervisor for running virtual machines on Windows.", cmd: "Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V-All" },
  { id: "wsl", name: "WSL (Windows Subsystem for Linux)", desc: "Run Linux distributions natively on Windows without a VM.", cmd: "Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux" },
  { id: "sandbox", name: "Windows Sandbox", desc: "Isolated desktop environment to run untrusted software safely.", cmd: "Enable-WindowsOptionalFeature -Online -FeatureName Containers-DisposableClientVM" },
  { id: "nfs-client", name: "NFS Client", desc: "Client for accessing NFS (Network File System) shares.", cmd: "Enable-WindowsOptionalFeature -Online -FeatureName ServicesForNFS-ClientOnly" },
  { id: "legacy-media", name: "Legacy Media Components", desc: "Windows Media Player and related legacy media features.", cmd: "Enable-WindowsOptionalFeature -Online -FeatureName WindowsMediaPlayer" },
  { id: "f8-boot", name: "F8 Boot Recovery", desc: "Enables legacy F8 Advanced Boot Options (Safe Mode) menu.", cmd: 'bcdedit /set {default} bootmenupolicy legacy' },
  { id: "scheduled-registry-backup", name: "Scheduled Registry Backup", desc: "Enables automatic registry backup to RegBack folder (disabled by default in Windows 10+).", cmd: "reg add \"HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Configuration Manager\" /v EnablePeriodicBackup /t REG_DWORD /d 1 /f" },
];

const fixes = [
  { id: "autologin", name: "Autologin", desc: "Configures automatic login for a specific user account on startup.", cmd: "reg add \"HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Winlogon\" /v AutoAdminLogon /t REG_SZ /d 1 /f" },
  { id: "network-reset", name: "Network Reset", desc: "Resets all network adapters and TCP/IP stack to default settings.", cmd: "netsh int ip reset; netsh winsock reset; ipconfig /flushdns" },
  { id: "ntp-sync", name: "NTP Sync", desc: "Force synchronizes system time with Windows time servers.", cmd: "w32tm /resync /force" },
  { id: "sfc-scan", name: "SFC/DISM Scan", desc: "Scans and repairs system files using SFC and DISM.", cmd: "sfc /scannow; DISM /Online /Cleanup-Image /RestoreHealth" },
  { id: "windows-update-reset", name: "Windows Update Reset", desc: "Resets Windows Update components by stopping services and clearing SoftwareDistribution folder.", cmd: "net stop wuauserv; net stop bits; Remove-Item -Recurse -Force \"$env:WINDIR\\SoftwareDistribution\" -ErrorAction SilentlyContinue; net start wuauserv; net start bits" },
  { id: "winget-reinstall", name: "WinGet Reinstall", desc: "Reinstalls WinGet package manager using the latest App Installer package.", cmd: "Add-AppxPackage -RegisterByFamilyName -MainPackage Microsoft.DesktopAppInstaller_8wekyb3d8bbwe" },
];

export default function FeaturesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-3">Windows Features & Quick Fixes</h1>
      <p className="text-text-muted mb-10 leading-relaxed">
        Enable or disable optional Windows features and run quick system fixes with one click.
      </p>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4">Windows Features</h2>
        <div className="grid gap-3">
          {features.map((f) => (
            <div key={f.id} className="rounded-lg border border-border bg-bg-card p-4">
              <h3 className="font-medium text-sm">{f.name}</h3>
              <p className="text-xs text-text-muted mt-1 mb-3">{f.desc}</p>
              <pre className="rounded border border-border bg-bg-dark p-2 text-[11px] font-mono text-text-muted overflow-x-auto">
                {f.cmd}
              </pre>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">Quick Fixes</h2>
        <div className="grid gap-3">
          {fixes.map((f) => (
            <div key={f.id} className="rounded-lg border border-border bg-bg-card p-4">
              <h3 className="font-medium text-sm">{f.name}</h3>
              <p className="text-xs text-text-muted mt-1 mb-3">{f.desc}</p>
              <pre className="rounded border border-border bg-bg-dark p-2 text-[11px] font-mono text-text-muted overflow-x-auto">
                {f.cmd}
              </pre>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

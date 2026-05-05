"use client";

import { useLanguage } from "@/i18n";

const content = {
  en: {
    title: "Windows Features & Quick Fixes",
    subtitle: "Enable or disable optional Windows features and run quick system fixes with one click.",
    featuresHeading: "Windows Features",
    fixesHeading: "Quick Fixes",
    features: [
      { name: ".NET Framework 3.5", desc: "Enables .NET Framework 3.5 (includes 2.0 and 3.0) for legacy application compatibility.", cmd: 'Enable-WindowsOptionalFeature -Online -FeatureName NetFx3' },
      { name: ".NET Framework 4.8", desc: "Enables .NET Framework 4.8 Advanced Services.", cmd: 'Enable-WindowsOptionalFeature -Online -FeatureName NetFx4-AdvSrvs' },
      { name: "Hyper-V", desc: "Microsoft's hypervisor for running virtual machines on Windows.", cmd: 'Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V-All' },
      { name: "WSL", desc: "Run Linux distributions natively on Windows without a VM.", cmd: 'Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux' },
      { name: "Windows Sandbox", desc: "Isolated desktop environment to run untrusted software safely.", cmd: 'Enable-WindowsOptionalFeature -Online -FeatureName Containers-DisposableClientVM' },
      { name: "NFS Client", desc: "Client for accessing NFS (Network File System) shares.", cmd: 'Enable-WindowsOptionalFeature -Online -FeatureName ServicesForNFS-ClientOnly' },
      { name: "Legacy Media Components", desc: "Windows Media Player and related legacy media features.", cmd: 'Enable-WindowsOptionalFeature -Online -FeatureName WindowsMediaPlayer' },
      { name: "F8 Boot Recovery", desc: "Enables legacy F8 Advanced Boot Options (Safe Mode) menu.", cmd: 'bcdedit /set {default} bootmenupolicy legacy' },
      { name: "Scheduled Registry Backup", desc: "Enables automatic registry backup to RegBack folder (disabled by default in Windows 10+).", cmd: 'reg add "HKLM\\SYSTEM\\.\\Configuration Manager" /v EnablePeriodicBackup /t REG_DWORD /d 1 /f' },
    ],
    fixes: [
      { name: "Autologin", desc: "Configures automatic login for a specific user account on startup.", cmd: 'reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Winlogon" /v AutoAdminLogon /t REG_SZ /d 1 /f' },
      { name: "Network Reset", desc: "Resets all network adapters and TCP/IP stack to default settings.", cmd: "netsh int ip reset; netsh winsock reset; ipconfig /flushdns" },
      { name: "NTP Sync", desc: "Force synchronizes system time with Windows time servers.", cmd: "w32tm /resync /force" },
      { name: "SFC/DISM Scan", desc: "Scans and repairs system files using SFC and DISM.", cmd: "sfc /scannow; DISM /Online /Cleanup-Image /RestoreHealth" },
      { name: "Windows Update Reset", desc: "Resets Windows Update components by stopping services and clearing SoftwareDistribution folder.", cmd: 'net stop wuauserv; net stop bits; Remove-Item -Recurse -Force "$env:WINDIR\\SoftwareDistribution" -ErrorAction SilentlyContinue; net start wuauserv; net start bits' },
      { name: "WinGet Reinstall", desc: "Reinstalls WinGet package manager using the latest App Installer package.", cmd: "Add-AppxPackage -RegisterByFamilyName -MainPackage Microsoft.DesktopAppInstaller_8wekyb3d8bbwe" },
    ],
  },
  es: {
    title: "Características de Windows y Correcciones Rápidas",
    subtitle: "Activa o desactiva características opcionales de Windows y ejecuta correcciones rápidas con un solo clic.",
    featuresHeading: "Características de Windows",
    fixesHeading: "Correcciones Rápidas",
    features: [
      { name: ".NET Framework 3.5", desc: "Activa .NET Framework 3.5 (incluye 2.0 y 3.0) para compatibilidad con aplicaciones legacy.", cmd: 'Enable-WindowsOptionalFeature -Online -FeatureName NetFx3' },
      { name: ".NET Framework 4.8", desc: "Activa los Servicios Avanzados de .NET Framework 4.8.", cmd: 'Enable-WindowsOptionalFeature -Online -FeatureName NetFx4-AdvSrvs' },
      { name: "Hyper-V", desc: "Hipervisor de Microsoft para ejecutar máquinas virtuales en Windows.", cmd: 'Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V-All' },
      { name: "WSL", desc: "Ejecuta distribuciones Linux nativamente en Windows sin una VM.", cmd: 'Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux' },
      { name: "Windows Sandbox", desc: "Entorno de escritorio aislado para ejecutar software no confiable de forma segura.", cmd: 'Enable-WindowsOptionalFeature -Online -FeatureName Containers-DisposableClientVM' },
      { name: "Cliente NFS", desc: "Cliente para acceder a recursos compartidos NFS (Network File System).", cmd: 'Enable-WindowsOptionalFeature -Online -FeatureName ServicesForNFS-ClientOnly' },
      { name: "Componentes Multimedia Legacy", desc: "Windows Media Player y características multimedia legacy relacionadas.", cmd: 'Enable-WindowsOptionalFeature -Online -FeatureName WindowsMediaPlayer' },
      { name: "Recuperación de Arranque F8", desc: "Activa el menú legacy de Opciones Avanzadas de Arranque F8 (Modo Seguro).", cmd: 'bcdedit /set {default} bootmenupolicy legacy' },
      { name: "Backup Programado del Registro", desc: "Activa la copia de seguridad automática del registro en la carpeta RegBack (desactivada por defecto en Windows 10+).", cmd: 'reg add "HKLM\\SYSTEM\\.\\Configuration Manager" /v EnablePeriodicBackup /t REG_DWORD /d 1 /f' },
    ],
    fixes: [
      { name: "Autologin", desc: "Configura el inicio de sesión automático para una cuenta de usuario específica.", cmd: 'reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Winlogon" /v AutoAdminLogon /t REG_SZ /d 1 /f' },
      { name: "Reinicio de Red", desc: "Restablece todos los adaptadores de red y la pila TCP/IP a la configuración predeterminada.", cmd: "netsh int ip reset; netsh winsock reset; ipconfig /flushdns" },
      { name: "Sincronización NTP", desc: "Fuerza la sincronización de la hora del sistema con los servidores de tiempo de Windows.", cmd: "w32tm /resync /force" },
      { name: "Escaneo SFC/DISM", desc: "Escanea y repara archivos del sistema usando SFC y DISM.", cmd: "sfc /scannow; DISM /Online /Cleanup-Image /RestoreHealth" },
      { name: "Reinicio de Windows Update", desc: "Restablece los componentes de Windows Update deteniendo servicios y limpiando la carpeta SoftwareDistribution.", cmd: 'net stop wuauserv; net stop bits; Remove-Item -Recurse -Force "$env:WINDIR\\SoftwareDistribution" -ErrorAction SilentlyContinue; net start wuauserv; net start bits' },
      { name: "Reinstalar WinGet", desc: "Reinstala el gestor de paquetes WinGet usando el último paquete de App Installer.", cmd: "Add-AppxPackage -RegisterByFamilyName -MainPackage Microsoft.DesktopAppInstaller_8wekyb3d8bbwe" },
    ],
  },
};

export default function FeaturesPage() {
  const { locale } = useLanguage();
  const c = content[locale as keyof typeof content] || content.en;

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-3">{c.title}</h1>
      <p className="text-text-muted mb-10 leading-relaxed">{c.subtitle}</p>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4">{c.featuresHeading}</h2>
        <div className="grid gap-3">
          {c.features.map((f, i) => (
            <div key={i} className="rounded-lg border border-border bg-bg-card p-4">
              <h3 className="font-medium text-sm">{f.name}</h3>
              <p className="text-xs text-text-muted mt-1 mb-3">{f.desc}</p>
              <pre className="rounded border border-border bg-bg-dark p-2 text-[11px] font-mono text-text-muted overflow-x-auto">{f.cmd}</pre>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">{c.fixesHeading}</h2>
        <div className="grid gap-3">
          {c.fixes.map((f, i) => (
            <div key={i} className="rounded-lg border border-border bg-bg-card p-4">
              <h3 className="font-medium text-sm">{f.name}</h3>
              <p className="text-xs text-text-muted mt-1 mb-3">{f.desc}</p>
              <pre className="rounded border border-border bg-bg-dark p-2 text-[11px] font-mono text-text-muted overflow-x-auto">{f.cmd}</pre>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

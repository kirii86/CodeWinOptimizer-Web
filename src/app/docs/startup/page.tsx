"use client";

import { useLanguage } from "@/i18n";

const content = {
  en: {
    title: "Startup Manager",
    subtitle:
      "Full visibility and control over every Windows auto-start entry in one place. Toggles use the same StartupApproved binary registry value that Task Manager writes, so every change is fully reversible and visible in Task Manager too.",
    sourcesHeading: "Detected sources",
    behaviorHeading: "Toggle behavior",
    sources: [
      {
        name: "Run keys (Registry)",
        desc: "Classic auto-start entries written to the Windows registry. Scanned in all three locations covering both 64-bit and 32-bit programs.",
        path: "HKLM:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run, HKCU:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run, HKLM:\\SOFTWARE\\WOW6432Node\\Microsoft\\Windows\\CurrentVersion\\Run",
      },
      {
        name: "Startup folders",
        desc: "Shortcuts and executables placed in the per-user or all-users Startup folder. Run when the user logs in.",
        path: "shell:startup (per-user) and shell:common startup (all-users)",
      },
      {
        name: "AppX UWP startup tasks",
        desc: "Modern Microsoft Store and UWP apps that declare a startup extension in their manifest — Discord, Windows Terminal, WhatsApp, Xbox Game Bar, etc. Detection parses every installed package's AppxManifest.xml for any <Extension Category=\"windows.startupTask\"> in any namespace (uap5, desktop, …).",
        path: "AppxManifest.xml of every installed package; default enable state from the manifest's Enabled attribute, override from HKCU:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\StartupApproved\\StartupTask\\<PackageFamilyName>\\<TaskId>",
      },
      {
        name: "Scheduled tasks (Logon / Boot)",
        desc: "Tasks scheduled to run at user logon or system boot — browser updaters, vendor maintenance tools, etc. System tasks under \\Microsoft\\Windows\\* are intentionally excluded to avoid breaking Windows internals.",
        path: "Get-ScheduledTask with LogonTrigger or BootTrigger, outside \\Microsoft\\Windows\\*",
      },
    ],
    behavior: [
      "Run keys and Startup folders: enable/disable writes the StartupApproved binary value (byte 0x02 = enabled, 0x03 = disabled) — the exact same bytes Task Manager writes.",
      "AppX UWP tasks: writes StartupApproved\\StartupTask\\<PackageFamilyName>\\<TaskId> with the same binary scheme; the manifest entry is never modified.",
      "Scheduled tasks: toggled via Enable-ScheduledTask / Disable-ScheduledTask.",
      "No entry is ever moved or deleted — only its enabled state is flipped. Re-enabling restores the exact original behavior.",
    ],
  },
  es: {
    title: "Gestor de Inicio",
    subtitle:
      "Visibilidad y control total sobre cada entrada de auto-arranque de Windows en un solo lugar. Los toggles usan el mismo valor binario StartupApproved del registro que escribe el Administrador de tareas, así que cada cambio es totalmente reversible y también visible en el Administrador de tareas.",
    sourcesHeading: "Fuentes detectadas",
    behaviorHeading: "Comportamiento del toggle",
    sources: [
      {
        name: "Claves Run (Registro)",
        desc: "Entradas clásicas de auto-arranque escritas en el registro de Windows. Se escanean las tres ubicaciones cubriendo programas de 64 y 32 bits.",
        path: "HKLM:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run, HKCU:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run, HKLM:\\SOFTWARE\\WOW6432Node\\Microsoft\\Windows\\CurrentVersion\\Run",
      },
      {
        name: "Carpetas Inicio",
        desc: "Accesos directos y ejecutables colocados en la carpeta Inicio del usuario o de todos los usuarios. Se ejecutan al iniciar sesión.",
        path: "shell:startup (por usuario) y shell:common startup (todos los usuarios)",
      },
      {
        name: "Tareas de inicio AppX (UWP)",
        desc: "Apps modernas de Microsoft Store y UWP que declaran una extensión de inicio en su manifiesto — Discord, Windows Terminal, WhatsApp, Xbox Game Bar, etc. La detección parsea el AppxManifest.xml de cada paquete instalado buscando <Extension Category=\"windows.startupTask\"> en cualquier namespace (uap5, desktop, …).",
        path: "AppxManifest.xml de cada paquete instalado; estado por defecto del atributo Enabled del manifiesto, override desde HKCU:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\StartupApproved\\StartupTask\\<PackageFamilyName>\\<TaskId>",
      },
      {
        name: "Tareas programadas (Logon / Arranque)",
        desc: "Tareas programadas para ejecutarse al iniciar sesión o al arrancar el sistema — actualizadores de navegadores, herramientas de fabricantes, etc. Las tareas del sistema bajo \\Microsoft\\Windows\\* se excluyen intencionadamente para no romper internos de Windows.",
        path: "Get-ScheduledTask con LogonTrigger o BootTrigger, fuera de \\Microsoft\\Windows\\*",
      },
    ],
    behavior: [
      "Claves Run y carpetas Inicio: activar/desactivar escribe el valor binario StartupApproved (byte 0x02 = activado, 0x03 = desactivado) — exactamente los mismos bytes que escribe el Administrador de tareas.",
      "Tareas AppX UWP: escribe StartupApproved\\StartupTask\\<PackageFamilyName>\\<TaskId> con el mismo esquema binario; la entrada del manifiesto nunca se modifica.",
      "Tareas programadas: se cambian con Enable-ScheduledTask / Disable-ScheduledTask.",
      "Ninguna entrada se mueve ni se elimina — solo se cambia su estado activado/desactivado. Reactivar restaura el comportamiento original exacto.",
    ],
  },
};

export default function StartupPage() {
  const { locale } = useLanguage();
  const c = content[locale as keyof typeof content] || content.en;

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-3">{c.title}</h1>
      <p className="text-text-muted mb-10 leading-relaxed">{c.subtitle}</p>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4">{c.sourcesHeading}</h2>
        <div className="grid gap-4">
          {c.sources.map((s, i) => (
            <div key={i} className="rounded-lg border border-border bg-bg-card p-5">
              <h3 className="text-base font-semibold">{s.name}</h3>
              <p className="text-sm text-text-muted mt-2 leading-relaxed">{s.desc}</p>
              <pre className="mt-3 rounded border border-border bg-bg-dark p-2 text-[11px] font-mono text-text-muted overflow-x-auto whitespace-pre-wrap break-words">{s.path}</pre>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">{c.behaviorHeading}</h2>
        <ul className="grid gap-2 list-disc list-inside text-sm text-text-muted leading-relaxed">
          {c.behavior.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

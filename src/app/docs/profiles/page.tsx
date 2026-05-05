"use client";

import { useLanguage } from "@/i18n";

const content = {
  en: {
    title: "Tweak Profiles",
    subtitle: "Tweak profiles let you save and load your tweak selections as named configurations. Switch between different optimization strategies with one click.",
    howItWorks: "How It Works",
    steps: [
      "Select tweaks in the Tweaks tab using toggle switches",
      "Click Save Profile and give it a name",
      "The profile is saved as JSON",
      "Later, click Load Profile or use a preset button to restore that configuration",
      "Profiles can be deleted from the Load Profile dropdown",
    ],
    defaultProfiles: "Default Profiles",
    defaultSubtitle: "Three profiles come pre-installed. Click any button in the Tweaks tab to apply instantly.",
    profiles: [
      {
        name: "Standard", color: "blue", count: 15,
        desc: "Safe essential tweaks recommended for any user. Focuses on privacy, performance, and removing unnecessary Windows features without risking system stability.",
        tweaks: ["Disable ConsumerFeatures","Disable Activity History","Disable Hibernation","Disable Telemetry","Disable Widgets","Disable Background Apps","Disable OneDrive","Optimize Visual Effects","Disable News & Interests","Disable Advertising ID","Disable Startup Delay","Disable Cortana","Remove Temporary Files","Set Services to Manual","Enable End Task Right Click"],
      },
      {
        name: "Gaming", color: "green", count: 21,
        desc: "Maximum gaming performance tweaks. Disables background services, optimizes network and GPU settings, prioritizes foreground apps, and removes bloatware that consumes resources while gaming.",
        tweaks: ["Disable ConsumerFeatures","Disable Activity History","Disable Hibernation","Disable Telemetry","Disable Widgets","Disable Background Apps","Disable OneDrive","Optimize Visual Effects","Disable Xbox Game Bar","Disable Fullscreen Optimizations","Disable HPET","Disable Dynamic Tick","Disable Network Throttling","Set System Responsiveness to Zero","Enable Large System Cache","GPU Hardware Scheduling","Ultimate Power Plan","Disable IPv6","CTCP Congestion Provider","Disable Memory Compression","NVIDIA Performance Tuning"],
      },
      {
        name: "Minimal", color: "purple", count: 19,
        desc: "Cleanest possible Windows install. Removes bloatware, tracking, notifications, and unnecessary UI elements for a distraction-free experience. Some features like Copilot and Widgets are permanently removed.",
        tweaks: ["Disable ConsumerFeatures","Disable Activity History","Disable Hibernation","Disable Telemetry","Disable Widgets","Disable Background Apps","Disable OneDrive","Optimize Visual Effects","Disable Cortana","Disable News & Interests","Disable Advertising ID","Disable Lockscreen","Disable Startup Delay","Disable Location Tracking","Disable Store Search Results","Disable Notifications","Disable Copilot","Disable Gallery","Remove Bloatware"],
      },
    ],
  },
  es: {
    title: "Perfiles de Tweaks",
    subtitle: "Los perfiles de tweaks te permiten guardar y cargar tus selecciones de ajustes como configuraciones con nombre. Cambia entre diferentes estrategias de optimización con un solo clic.",
    howItWorks: "Cómo Funciona",
    steps: [
      "Selecciona tweaks en la pestaña Tweaks usando interruptores",
      "Haz clic en Guardar Perfil y asígnale un nombre",
      "El perfil se guarda como JSON",
      "Luego, haz clic en Cargar Perfil o usa un botón predefinido para restaurar esa configuración",
      "Los perfiles se pueden eliminar desde el menú desplegable Cargar Perfil",
    ],
    defaultProfiles: "Perfiles por Defecto",
    defaultSubtitle: "Tres perfiles vienen preinstalados. Haz clic en cualquier botón en la pestaña Tweaks para aplicarlos.",
    profiles: [
      {
        name: "Standard", color: "blue", count: 15,
        desc: "Ajustes esenciales seguros recomendados para cualquier usuario. Se enfoca en privacidad, rendimiento y eliminación de funciones innecesarias sin arriesgar la estabilidad.",
        tweaks: ["Desactivar ConsumerFeatures","Desactivar Historial de Actividad","Desactivar Hibernación","Desactivar Telemetría","Desactivar Widgets","Desactivar Apps en Segundo Plano","Desactivar OneDrive","Optimizar Efectos Visuales","Desactivar Noticias e Intereses","Desactivar ID de Publicidad","Desactivar Retraso de Inicio","Desactivar Cortana","Eliminar Archivos Temporales","Servicios a Manual","Activar Finalizar Tarea Click Derecho"],
      },
      {
        name: "Gaming", color: "green", count: 21,
        desc: "Ajustes para máximo rendimiento en juegos. Desactiva servicios en segundo plano, optimiza red y GPU, prioriza apps en primer plano y elimina bloatware que consume recursos.",
        tweaks: ["Desactivar ConsumerFeatures","Desactivar Historial de Actividad","Desactivar Hibernación","Desactivar Telemetría","Desactivar Widgets","Desactivar Apps en Segundo Plano","Desactivar OneDrive","Optimizar Efectos Visuales","Desactivar Xbox Game Bar","Desactivar Optimizaciones de Pantalla Completa","Desactivar HPET","Desactivar Dynamic Tick","Desactivar Limitación de Red","Responsividad del Sistema a Cero","Activar Caché Grande del Sistema","Programación GPU por Hardware","Plan de Energía Máximo","Desactivar IPv6","Proveedor de Congestión CTCP","Desactivar Compresión de Memoria","Optimización NVIDIA"],
      },
      {
        name: "Minimal", color: "purple", count: 19,
        desc: "Instalación de Windows lo más limpia posible. Elimina bloatware, rastreo, notificaciones y elementos de UI innecesarios. Algunas funciones como Copilot y Widgets se eliminan permanentemente.",
        tweaks: ["Desactivar ConsumerFeatures","Desactivar Historial de Actividad","Desactivar Hibernación","Desactivar Telemetría","Desactivar Widgets","Desactivar Apps en Segundo Plano","Desactivar OneDrive","Optimizar Efectos Visuales","Desactivar Cortana","Desactivar Noticias e Intereses","Desactivar ID de Publicidad","Desactivar Pantalla de Bloqueo","Desactivar Retraso de Inicio","Desactivar Rastreo de Ubicación","Desactivar Resultados de Tienda","Desactivar Notificaciones","Desactivar Copilot","Desactivar Galería","Eliminar Bloatware"],
      },
    ],
  },
};

export default function ProfilesPage() {
  const { locale } = useLanguage();
  const c = content[locale as keyof typeof content] || content.en;

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-3">{c.title}</h1>
      <p className="text-text-muted mb-10 leading-relaxed">{c.subtitle}</p>

      <div className="mb-10">
        <h2 className="text-lg font-semibold mb-2">{c.howItWorks}</h2>
        <ol className="list-decimal list-inside text-sm text-text-muted space-y-2 leading-relaxed">
          {c.steps.map((s, i) => <li key={i}>{s}</li>)}
        </ol>
      </div>

      <h2 className="text-lg font-semibold mb-1">{c.defaultProfiles}</h2>
      <p className="text-text-muted text-sm mb-6">{c.defaultSubtitle}</p>

      <div className="grid gap-4">
        {c.profiles.map((p) => (
          <div key={p.name} className="rounded-lg border border-border bg-bg-card p-5">
            <h3 className="text-base font-semibold flex items-center gap-2">
              <span className={`inline-block w-3 h-3 rounded-full ${p.color === "green" ? "bg-neon" : p.color === "blue" ? "bg-blue-400" : "bg-purple-400"}`} />
              {p.name} <span className="text-xs text-text-muted font-normal">({p.count} tweaks)</span>
            </h3>
            <p className="text-sm text-text-muted mt-2 leading-relaxed">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.tweaks.map((t, i) => <span key={i} className="rounded-full border border-border px-2.5 py-0.5 text-[10px] text-text-muted">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

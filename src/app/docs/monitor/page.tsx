"use client";

import { useLanguage } from "@/i18n";
import { type ReactNode } from "react";

const sectionIcons: ReactNode[] = [
  <svg key="health" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>,
  <svg key="cards" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>,
  <svg key="net" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>,
  <svg key="temp" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#F87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
  </svg>,
];

const content = {
  en: {
    title: "System Monitor",
    subtitle: "Real-time dashboard with PC Health Score, hardware metrics, and network diagnostics. Auto-refreshes every 3 seconds.",
    sections: [
      {
        title: "PC Health Score",
        desc: "Composite score from 0 to 100 with grade letter (A+ down to F). Updates on tab open or Refresh button.",
        details: [
          "RAM (30 pts): penalizes usage above 30%, 50%, 70%, 80%, 90%",
          "CPU (20 pts): penalizes load above 25%, 50%, 70%, 90%",
          "Disk (30 pts): independent penalties for low free GB and high % used — takes the larger penalty",
          "Temperature (10 pts): worst of CPU and GPU temp; penalizes above 55°C, 65°C, 75°C, 85°C. GPU temp read via nvidia-smi",
          "Uptime (10 pts): penalizes >7 days and >14 days without reboot",
          "Actionable tips listed below the score (e.g. 'System drive 87% full — consider cleanup')",
        ],
      },
      {
        title: "Hardware cards (3×2 layout)",
        desc: "Inline SVG icons throughout — chip, RAM stick, GPU PCB, disk cylinders, clock, globe.",
        details: [
          "CPU: usage % + temperature inline (when WMI exposes it — common on Intel; AMD requires OpenHardwareMonitor or LibreHardwareMonitor running)",
          "RAM: used / total GB with gauge bar + free GB",
          "GPU: usage % + temperature inline + name + VRAM (from nvidia-smi)",
          "DISCO (spans 2 cols): per-drive % used with colored bars",
          "ACTIVO: uptime (Xd Yh Zm) + boot time ('Iniciado lun 11:24')",
          "RED (full-width below): per-host latency rows + DNS selector + speed test",
        ],
      },
      {
        title: "Network latency & DNS",
        desc: "Continuously pings 1.1.1.1, 8.8.8.8, and google.com via TCP. Each result rendered as a row.",
        details: [
          "Status dot color: green (<30ms), amber (30-100ms), red (>100ms), grey (timeout)",
          "Latency badge same color tier, monospace tabular numbers",
          "DNS selector: 9 providers (Google, Cloudflare, OpenDNS, Quad9, AdGuard variants) + DHCP reset",
          "Speed Test button: full Speedtest.net run via speedtest-go (download/upload/ping)",
        ],
      },
      {
        title: "Temperature reading sources",
        desc: "CodeWinOptimizer tries multiple WMI namespaces and falls back gracefully.",
        details: [
          "Order: root\\OpenHardwareMonitor → root\\LibreHardwareMonitor → \\Thermal Zone Information perf counter → MSAcpi_ThermalZoneTemperature",
          "GPU temp: nvidia-smi --query-gpu=temperature.gpu (AMD/Intel GPU temps not yet supported)",
          "If none returns a value (common on AMD without OHM/LHM), the CPU card simply omits the temp instead of showing 'n/a'",
        ],
      },
    ],
  },
  es: {
    title: "Monitor del sistema",
    subtitle: "Panel en tiempo real con Salud del PC, métricas de hardware y diagnóstico de red. Auto-refresco cada 3 segundos.",
    sections: [
      {
        title: "Salud del PC",
        desc: "Puntuación compuesta de 0 a 100 con letra (A+ hasta F). Se actualiza al abrir la pestaña o pulsar Refresh.",
        details: [
          "RAM (30 pts): penaliza uso superior al 30%, 50%, 70%, 80%, 90%",
          "CPU (20 pts): penaliza carga superior al 25%, 50%, 70%, 90%",
          "Disco (30 pts): penalizaciones independientes por GB libres bajos y % usado alto — toma la mayor",
          "Temperatura (10 pts): peor de CPU y GPU; penaliza por encima de 55°C, 65°C, 75°C, 85°C. Temp GPU leída con nvidia-smi",
          "Uptime (10 pts): penaliza >7 días y >14 días sin reiniciar",
          "Consejos accionables debajo del score (ej. 'Disco del sistema 87% lleno — considera limpiar')",
        ],
      },
      {
        title: "Tarjetas de hardware (layout 3×2)",
        desc: "Iconos SVG inline en todas — chip, módulo de RAM, PCB de GPU, cilindros de disco, reloj, globo.",
        details: [
          "CPU: % de uso + temperatura inline (cuando WMI la expone — común en Intel; AMD requiere OpenHardwareMonitor o LibreHardwareMonitor corriendo)",
          "RAM: usada / total GB con barra + GB libres",
          "GPU: % de uso + temperatura inline + nombre + VRAM (vía nvidia-smi)",
          "DISCO (ocupa 2 cols): % usado por unidad con barras de color",
          "ACTIVO: uptime (Xd Yh Zm) + hora de arranque ('Iniciado lun 11:24')",
          "RED (ancho completo abajo): filas de latencia por host + selector DNS + test de velocidad",
        ],
      },
      {
        title: "Latencia de red y DNS",
        desc: "Ping continuo TCP a 1.1.1.1, 8.8.8.8 y google.com. Cada resultado se renderiza como una fila.",
        details: [
          "Color del punto: verde (<30ms), ámbar (30-100ms), rojo (>100ms), gris (timeout)",
          "Badge de latencia en el mismo color, números monospace tabulares",
          "Selector DNS: 9 proveedores (Google, Cloudflare, OpenDNS, Quad9, variantes AdGuard) + reset a DHCP",
          "Botón Probar Velocidad: ejecuta Speedtest.net completo vía speedtest-go (descarga/subida/ping)",
        ],
      },
      {
        title: "Fuentes de lectura de temperatura",
        desc: "CodeWinOptimizer prueba múltiples namespaces de WMI y degrada elegantemente.",
        details: [
          "Orden: root\\OpenHardwareMonitor → root\\LibreHardwareMonitor → contador \\Thermal Zone Information → MSAcpi_ThermalZoneTemperature",
          "Temp GPU: nvidia-smi --query-gpu=temperature.gpu (AMD/Intel GPU aún no soportadas)",
          "Si ninguna devuelve valor (común en AMD sin OHM/LHM), la card de CPU simplemente omite la temp en lugar de mostrar 'n/a'",
        ],
      },
    ],
  },
};

export default function MonitorPage() {
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

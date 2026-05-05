const es = {
  nav: {
    features: "Características",
    preview: "Vista previa",
    techStack: "Tecnología",
    docs: "Docs",
    starOnGitHub: "Estrella en GitHub",
    download: "Descargar",
  },
  hero: {
    badge: "Código abierto · Portable · Gratis",
    title1: "Toma el control de",
    title2: "tu Windows.",
    description:
      "Una herramienta de optimización local-first que te da el control. Restauración del sistema, gestión de apps, ajustes del registro, tuning de rendimiento — todo desde un único ejecutable portable.",
    download: "Descargar para Windows",
    viewOnGitHub: "Ver en GitHub",
    subtitle: "Windows 10/11 · Solo un .exe · Sin instalación · Ejecutar como Administrador",
  },
  features: {
    heading1: "Todo lo que necesitas para",
    heading2: "optimizar Windows.",
    subheading:
      "Desde restaurar el sistema hasta tuning de rendimiento — todas las herramientas en un ejecutable portable.",
    items: [
      {
        title: "Restauración del sistema",
        description:
          "Crea puntos de restauración con nombres personalizados. Omite el bloqueo de 24h de Windows mediante ajuste del registro. Backup completo del registro a archivos .reg de los 5 hives.",
      },
      {
        title: "Gestor de apps",
        description:
          "171 apps en 7 categorías. Instalar/Desinstalar vía WinGet o Chocolatey. Detecta apps ya instaladas con badges verdes. Enlaces web y seleccionar todo por categoría.",
      },
      {
        title: "Más de 140 ajustes",
        description:
          "Ajustes completos en 14 categorías: red, memoria, GPU, privacidad, rendimiento, esenciales (seguros), avanzados (precaución), firewall, temporizadores de latencia, UI y eliminación de bloat. Interruptores para cada uno.",
      },
      {
        title: "Características de Windows",
        description:
          "Activar/desactivar .NET Framework, Hyper-V, WSL, Sandbox, NFS, recuperación F8 y más. Correcciones rápidas: reinicio de red, sincronización NTP, escaneo SFC/DISM, reinicio de Windows Update.",
      },
      {
        title: "Monitor del sistema",
        description:
          "Panel en tiempo real con actualización cada 3 segundos. Uso de CPU, barra de RAM, temperatura/VRAM de GPU vía nvidia-smi, barras de uso por disco, temperaturas del sistema y tiempo de actividad.",
      },
      {
        title: "Apariencia y Terminal",
        description:
          "6 colores de acento (Verde neón, Cyan, Púrpura, Naranja, Rosa, Amarillo) y 6 fuentes. Terminal con salida de comandos en tiempo real, copiar y limpiar. Persistente en localStorage.",
      },
    ],
  },
  stats: {
    appsAvailable: "Apps disponibles",
    systemTweaks: "Ajustes del sistema",
    categories: "Categorías",
    accentColors: "Colores de acento",
    packageManagers: "Gestores de paquetes",
    singleExe: "Solo un .exe",
  },
  preview: {
    heading1: "Míralo",
    heading2: "en acción.",
    subheading: "Una interfaz moderna con tema oscuro diseñada para power users.",
    labels: ["Restauración", "Apps", "Ajustes", "Características", "Monitor", "Limpieza", "Apariencia"],
  },
  discord: {
    heading: "Únete a KiriHub en Discord",
    subheading: "Recibe ayuda, comparte feedback y mantente al día.",
    button: "Unirse a KiriHub",
  },
  tech: {
    heading1: "Construido con",
    heading2: "tecnología moderna.",
    items: [
      { label: "Backend", value: "Go + Wails v2 runtime" },
      { label: "Frontend", value: "Vanilla JS, CSS (tema oscuro)" },
      { label: "Ventana", value: "WebView2 (Edge Chromium)" },
      { label: "Gestores de paquetes", value: "WinGet, Chocolatey" },
      {
        label: "Herramientas del sistema",
        value: "PowerShell, DISM, bcdedit, reg.exe, nvidia-smi",
      },
      { label: "Monitorización", value: "gopsutil (CPU/RAM), nvidia-smi (GPU), WMI" },
    ],
    howToHeading1: "Cómo",
    howToHeading2: "ejecutarlo.",
    quickStart: "Inicio rápido",
    steps: [
      "Descarga el último .exe de GitHub Releases",
      "Ejecuta CodeWinOptimizer.exe como Administrador",
      "(Recomendado) Crea un punto de restauración primero",
      "Usa cualquier pestaña: instala apps, aplica ajustes, ejecuta correcciones",
    ],
    prerequisites:
      "Requisitos:",
    prerequisitesText: " Go 1.20+, Wails v2, Windows 10/11 con WebView2 runtime.",
    antivirusNotice: "Aviso antivirus:",
    antivirusText:
      " Esta herramienta usa PowerShell, DISM, WMI y comandos del registro. Algunos antivirus pueden marcar el .exe como sospechoso. Todo el código es open source — ",
    reviewSource: "revisa el código",
    orBuild: " o compílalo tú mismo.",
  },
  footer: {
    website: "OscarDev. Código abierto, gratis para siempre.",
  },
  lang: "Español",
};

export default es;

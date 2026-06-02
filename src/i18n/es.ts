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
    subtitle: "Windows 10/11 · Un solo .exe con O&O ShutUp10++ embebido · Sin instalación · Auto-elevación a Administrador",
    install: {
      label: "Instala en una línea (PowerShell admin)",
      copy: "Copiar",
      copied: "¡Copiado!",
      hint: "Sin descargas. Siempre la última versión.",
    },
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
          "Crea puntos de restauración con nombres personalizados. Omite el bloqueo de 24h de Windows mediante ajuste del registro. Backup completo del registro a archivos .reg de los 5 hives. Backup y restauración de drivers.",
      },
      {
        title: "Gestor de apps",
        description:
          "181 apps en 8 categorías incluyendo Microsoft Tools (.NET SDK 6/8/9/10, suite Sysinternals, PowerShell 7, PowerToys). Instalar/Desinstalar vía WinGet o Chocolatey con un botón dinámico que cambia según el estado de instalación. Cabecera con buscador sticky que permanece visible al hacer scroll.",
      },
      {
        title: "Más de 140 ajustes",
        description:
          "Ajustes completos en 14 categorías: red, memoria, GPU, privacidad, rendimiento, esenciales, avanzados, firewall, Nagle, temporizadores de latencia, UI y eliminación de bloat. Ejecución robusta vía cmdlets de PowerShell (Get/Disable-WindowsOptionalFeature, NetFirewallRule, CIM) — sin más wmic/netsh frágiles. Toolbar sticky con Seleccionar Todo global, badges X/Y de progreso por categoría, y lanzador de ShutUp10++ con un click.",
      },
      {
        title: "Características de Windows",
        description:
          "Activar/desactivar .NET Framework, Hyper-V, WSL, Sandbox, NFS, recuperación F8 y más. Correcciones rápidas: reinicio de red, sincronización NTP, escaneo SFC/DISM, reinicio de Windows Update. Features con verificación de estado que omiten limpiamente cuando no están y nunca se quedan colgadas esperando descargas de Windows Update.",
      },
      {
        title: "Monitor del sistema",
        description:
          "Dashboard 3x2 con auto-refresh. Iconos SVG inline (chip, RAM, GPU, disco, reloj, globo). Uso de CPU y GPU con temperatura junto al porcentaje. Barras de uso por disco, uptime + hora de arranque, filas de latencia de red por host con color según ms. Salud del PC (0-100, A+ a F) con umbrales granulares para RAM, CPU, espacio libre + % usado en disco, y temp de GPU/CPU.",
      },
      {
        title: "Terminal lateral",
        description:
          "Salida de comandos en tiempo real anclada a la derecha, redimensionable arrastrando de 280px a 70% del ancho con la anchura persistida en localStorage. Colapsable a una franja vertical de 36px. Acciones de copiar y limpiar. 6 colores de acento + 6 fuentes, persistido en localStorage. O&O ShutUp10++ embebido para endurecimiento de privacidad con un click.",
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
    website: "OscarDev",
  },
  lang: "Español",
};

export default es;

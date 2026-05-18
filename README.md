<p align="center">
  <img src="https://i.imgur.com/nwR4Z8i.png" alt="CodeWinOptimizer logo" width="160" />
</p>

# CodeWinOptimizer Web

Official website and documentation for [CodeWinOptimizer](https://github.com/oscarcodedev/CodeWinOptimizer-App), a portable Windows application focused on optimization, maintenance, and system tweaks.

This repository contains the public website for the application, including project information, feature details, previews, technical notes, and documentation to help users download and use CodeWinOptimizer safely.

## Application

- Main repository: [oscarcodedev/CodeWinOptimizer-App](https://github.com/oscarcodedev/CodeWinOptimizer-App)
- Downloads: [GitHub Releases](https://github.com/oscarcodedev/CodeWinOptimizer-App/releases)
- Platform: Windows 10/11
- Format: portable `.exe`
- Installation: no installation required
- Recommended permissions: run as Administrator

## What Is CodeWinOptimizer

CodeWinOptimizer is a local-first tool for managing and optimizing Windows from a modern interface. It lets users apply system tweaks, install or uninstall applications, create restore points, run quick repairs, and inspect system information from a single portable executable.

Main features:

- Restore point creation and registry backups.
- Application manager powered by WinGet and Chocolatey.
- More than 140 system tweaks organized by category.
- Windows feature enable/disable tools.
- Quick repairs using PowerShell, DISM, SFC, bcdedit, and reg.exe.
- System monitor for CPU, RAM, disks, GPU, and uptime.
- Dark theme, accent colors, and integrated terminal.

## Download The Application

1. Open the [CodeWinOptimizer releases page](https://github.com/oscarcodedev/CodeWinOptimizer-App/releases).
2. Download the `.exe` file from the latest available release.
3. Save the executable in a trusted local folder.
4. Run `CodeWinOptimizer.exe` as Administrator.
5. Before applying tweaks, create a restore point from inside the application.

## Requirements

To use the application:

- Windows 10 or Windows 11.
- Microsoft Edge WebView2 Runtime.
- Administrator permissions for system-level changes.
- Internet connection when installing applications with WinGet or Chocolatey.

To build the application from the main repository:

- Go 1.20 or later.
- Wails v2.
- Node.js/pnpm if required by the application frontend.

See [CodeWinOptimizer-App](https://github.com/oscarcodedev/CodeWinOptimizer-App) for technical build and development instructions for the application itself.

## Recommended Use

- Review the source code if you want to understand what the tool does before running it.
- Always create a restore point before applying important changes.
- Start with essential or safe tweaks.
- Use advanced tweaks only when you understand their impact.
- Restart Windows after relevant changes to networking, services, Windows features, or the registry.

## Security Notice

CodeWinOptimizer runs system commands and can modify Windows settings, the registry, optional features, and services. Some antivirus tools may flag the executable as suspicious because of the type of actions it performs.

The application is open source: you can review the code, build it manually, or download an official release from GitHub Releases.

## Documentation Included In This Website

This website includes documentation pages for:

- General features.
- Cleanup and maintenance.
- Profiles.
- System restore.
- Individual system tweaks.

These pages are designed to explain what each feature does and help users decide which changes to apply.

## Website Development

This project is built with Next.js, React, TypeScript, and Tailwind CSS.

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Available commands:

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## Project Structure

- `src/app`: website routes and pages.
- `src/app/docs`: public documentation.
- `src/components`: UI components.
- `src/i18n`: localized text.
- `src/data/tweaks.json`: documented tweak data.
- `public`: public images, icons, and assets.

## License

See the main application repository, [CodeWinOptimizer-App](https://github.com/oscarcodedev/CodeWinOptimizer-App), for license information.

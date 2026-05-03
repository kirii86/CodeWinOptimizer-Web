import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeWinOptimizer — Windows optimization & customization tool",
  description:
    "Optimize and customize Windows — system restore, app management, registry tweaks, performance tuning, and more. Open source, portable, free.",
  keywords: [
    "Windows optimizer",
    "system tweaks",
    "registry backup",
    "app manager",
    "Windows performance",
    "open source",
  ],
  openGraph: {
    title: "CodeWinOptimizer",
    description:
      "Windows optimization & customization tool — system restore, app management, registry tweaks, and quick fixes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="min-h-full flex flex-col bg-bg-dark text-white">{children}</body>
    </html>
  );
}

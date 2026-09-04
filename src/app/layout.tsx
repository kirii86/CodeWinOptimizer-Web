import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import { absoluteUrl, siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: "%s | CodeWinOptimizer",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.repository }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  category: "Software",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: siteConfig.logo, type: "image/png" },
    ],
    apple: siteConfig.logo,
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: "en_US",
    alternateLocale: ["es_ES"],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
  },
  verification: {},
};

export const viewport: Viewport = {
  themeColor: "#0b1220",
  colorScheme: "dark",
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Windows 10, Windows 11",
    description: siteConfig.description,
    url: siteConfig.url,
    image: [absoluteUrl(siteConfig.logo), absoluteUrl("/preview/1.png")],
    screenshot: [
      absoluteUrl("/preview/1.png"),
      absoluteUrl("/preview/2.png"),
      absoluteUrl("/preview/3.png"),
    ],
    downloadUrl: siteConfig.releases,
    installUrl: absoluteUrl("/win"),
    softwareHelp: absoluteUrl("/docs"),
    codeRepository: siteConfig.repository,
    featureList: siteConfig.features,
    keywords: siteConfig.keywords.slice(0, 30).join(", "),
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      category: "Free",
    },
    author: {
      "@type": "Person",
      name: siteConfig.author,
      url: siteConfig.repository,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: "CodeWinOptimizer - Windows Optimizer",
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en",
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
    sameAs: [
      siteConfig.repository,
      "https://discord.albionbattlehub.com/",
    ],
  },
];

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg-dark text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

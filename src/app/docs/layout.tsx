import type { Metadata } from "next";
import DocSidebar from "@/components/DocSidebar";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    template: "%s | CodeWinOptimizer Docs",
    default: "Documentation — CodeWinOptimizer",
  },
  description:
    "Complete documentation for CodeWinOptimizer — system tweaks, Windows features, cleanup tasks, profiles, and restore & backup.",
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen pt-14">
        <DocSidebar />
        <main className="flex-1 px-8 py-10 max-w-4xl mx-auto">{children}</main>
      </div>
    </>
  );
}

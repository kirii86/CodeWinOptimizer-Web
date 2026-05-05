import DocSidebar from "@/components/DocSidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen pt-16">
      <DocSidebar />
      <main className="flex-1 px-8 py-10 max-w-4xl">{children}</main>
    </div>
  );
}

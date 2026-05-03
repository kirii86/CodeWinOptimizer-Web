const stats = [
  { value: "86+", label: "Apps available" },
  { value: "105+", label: "System tweaks" },
  { value: "12", label: "Categories" },
  { value: "6", label: "Accent colors" },
  { value: "2", label: "Package managers" },
  { value: "Portable", label: "Single .exe" },
];

export default function Stats() {
  return (
    <section className="border-y border-border bg-bg-card/50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-neon">{stat.value}</div>
              <div className="mt-1 text-xs text-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

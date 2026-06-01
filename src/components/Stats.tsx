"use client";

import { useLanguage } from "@/i18n";

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    { value: "181", label: t.stats.appsAvailable },
    { value: "140+", label: t.stats.systemTweaks },
    { value: "14", label: t.stats.categories },
    { value: "6", label: t.stats.accentColors },
    { value: "2", label: t.stats.packageManagers },
    { value: t.stats.singleExe, label: "" },
  ];

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

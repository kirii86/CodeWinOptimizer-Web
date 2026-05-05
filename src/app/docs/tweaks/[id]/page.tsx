import type { Metadata } from "next";
import { notFound } from "next/navigation";
import tweaksData from "@/data/tweaks.json";

type TweakEntry = {
  id: string;
  name: { en: string; es: string };
  description: { en: string; es: string };
  benefit: { en: string; es: string };
  impact: string;
  commands: string[];
  warnings: { en: string[]; es: string[] };
};

type TweakCategory = {
  id: string;
  name: { en: string; es: string };
  icon: string;
  tweaks: TweakEntry[];
};

function findTweak(id: string): { tweak: TweakEntry; category: TweakCategory } | null {
  const cats = tweaksData as TweakCategory[];
  for (const cat of cats) {
    const t = cat.tweaks.find((t) => t.id === id);
    if (t) return { tweak: t, category: cat };
  }
  return null;
}

export async function generateStaticParams() {
  const cats = tweaksData as TweakCategory[];
  return cats.flatMap((c) => c.tweaks.map((t) => ({ id: t.id })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const found = findTweak(id);
  if (!found) return { title: "Not Found" };
  return {
    title: `${found.tweak.name.en} — CodeWinOptimizer Docs`,
    description: found.tweak.description.en,
  };
}

export default async function TweakDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const found = findTweak(id);
  if (!found) notFound();

  const { tweak, category } = found;
  const impactColors: Record<string, string> = {
    high: "text-red-400 bg-red-400/10 border-red-400/20",
    medium: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    low: "text-neon bg-neon/10 border-neon/20",
  };

  return (
    <div>
      <div className="mb-8">
        <a
          href="/docs/tweaks"
          className="text-xs text-text-muted hover:text-neon transition-colors"
        >
          ←{" "}
          <span className="hover:underline">
            All Tweaks
          </span>
        </a>
        <p className="text-xs text-text-muted mt-1">
          {category.icon} {category.name.en}
        </p>
      </div>

      <h1 className="text-2xl font-bold tracking-tight mb-2">{tweak.name.en}</h1>
      <p className="text-sm text-text-muted mb-6 leading-relaxed">
        {tweak.description.en}
      </p>

      <div className="grid gap-6">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
            Benefit
          </h2>
          <p className="text-sm text-neon">{tweak.benefit.en}</p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
            Impact
          </h2>
          <span
            className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold uppercase ${impactColors[tweak.impact] || impactColors.low}`}
          >
            {tweak.impact}
          </span>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
            Commands ({tweak.commands.length})
          </h2>
          <div className="space-y-2">
            {tweak.commands.map((cmd, i) => (
              <pre
                key={i}
                className="rounded-lg border border-border bg-bg-dark p-3 text-xs font-mono text-text-muted overflow-x-auto"
              >
                {cmd}
              </pre>
            ))}
          </div>
        </div>

        {tweak.warnings.en.length > 0 && (
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-2">
              Warnings
            </h2>
            <ul className="space-y-2">
              {tweak.warnings.en.map((w, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-red-300/80 rounded-lg border border-red-400/10 bg-red-400/5 p-3"
                >
                  <span className="mt-0.5 shrink-0">⚠</span>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

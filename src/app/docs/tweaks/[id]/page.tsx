import type { Metadata } from "next";
import { notFound } from "next/navigation";
import tweaksData from "@/data/tweaks.json";
import TweakDetailClient from "./TweakDetailClient";

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

  return <TweakDetailClient tweak={found.tweak} category={found.category} />;
}

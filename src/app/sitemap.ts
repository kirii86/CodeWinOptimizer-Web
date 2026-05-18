import type { MetadataRoute } from "next";
import tweaksData from "@/data/tweaks.json";
import { absoluteUrl } from "@/config/site";

type TweakCategory = {
  tweaks: Array<{ id: string }>;
};

const staticRoutes = [
  "",
  "/docs",
  "/docs/tweaks",
  "/docs/features",
  "/docs/cleanup",
  "/docs/profiles",
  "/docs/restore",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const tweakRoutes = (tweaksData as TweakCategory[]).flatMap((category) =>
    category.tweaks.map((tweak) => `/docs/tweaks/${tweak.id}`),
  );

  return [...staticRoutes, ...tweakRoutes].map((route) => {
    const changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] =
      route === "" ? "weekly" : "monthly";

    return {
      url: absoluteUrl(route),
      lastModified,
      changeFrequency,
      priority: route === "" ? 1 : route.startsWith("/docs/tweaks/") ? 0.55 : 0.8,
    };
  });
}

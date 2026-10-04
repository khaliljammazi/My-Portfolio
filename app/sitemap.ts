import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";

const baseUrl = "https://khalil-jammazi.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-04");

  const staticPages: MetadataRoute.Sitemap = ([
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/projects", changeFrequency: "weekly", priority: 0.9 },
    { path: "/resume", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  ] as const).map(({ path, ...metadata }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    ...metadata,
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map(({ slug }) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...projectPages];
}

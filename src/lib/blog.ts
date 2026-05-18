import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import { languages } from "@/i18n/ui";

export type SiteLang = keyof typeof languages;

export interface BlogFrontmatter {
  title: string;
  summary: string;
  date: string | Date;
  lang: SiteLang;
  category?: string;
  pinned?: boolean;
  draft?: boolean;
}

interface BlogModule {
  frontmatter: BlogFrontmatter;
  default: AstroComponentFactory;
}

export interface BlogEntry {
  slug: string;
  data: {
    title: string;
    summary: string;
    date: Date;
    lang: SiteLang;
    category: string;
    pinned: boolean;
    draft: boolean;
  };
  Content: AstroComponentFactory;
}

const blogModules = import.meta.glob<BlogModule>("../contents/blog/*.md", {
  eager: true,
});

function toSlug(path: string) {
  return path.split("/").pop()?.replace(/\.md$/, "") ?? path;
}

function normalizeEntry(path: string, mod: BlogModule): BlogEntry {
  const frontmatter = mod.frontmatter;

  return {
    slug: toSlug(path),
    data: {
      title: frontmatter.title,
      summary: frontmatter.summary,
      date: new Date(frontmatter.date),
      lang: frontmatter.lang,
      category: frontmatter.category ?? "News",
      pinned: frontmatter.pinned ?? false,
      draft: frontmatter.draft ?? false,
    },
    Content: mod.default,
  };
}

const allBlogEntries = Object.entries(blogModules).map(([path, mod]) =>
  normalizeEntry(path, mod),
);

export async function getBlogEntries(lang: SiteLang) {
  return allBlogEntries
    .filter((entry) => entry.data.lang === lang && !entry.data.draft)
    .sort((a, b) => {
      const pinnedDelta = Number(b.data.pinned) - Number(a.data.pinned);

      if (pinnedDelta !== 0) return pinnedDelta;

      return b.data.date.getTime() - a.data.date.getTime();
    });
}

export async function getAllBlogEntries() {
  return [...allBlogEntries]
    .filter((entry) => !entry.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatBlogDate(date: Date, lang: SiteLang) {
  return new Intl.DateTimeFormat(lang === "zh" ? "zh-CN" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

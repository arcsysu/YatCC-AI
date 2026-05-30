import type { SiteLang } from "@/lib/blog";

export interface NewsEntry {
  date: Date;
  body: string;
  rawDate: string;
}

const newsModules = import.meta.glob<string>("../contents/news.*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

const monthPattern = MONTH_NAMES.join("|");

const zhLinePattern =
  /^(\d{4})年(\d{1,2})月(\d{1,2})日[：:]\s*(.+)$/;

const enLinePattern = new RegExp(
  `^(${monthPattern})\\s+(\\d{1,2}),\\s+(\\d{4})[:：]\\s*(.+)$`,
);

function parseZhLine(line: string): NewsEntry | null {
  const match = line.trim().match(zhLinePattern);
  if (!match) return null;

  const [, year, month, day, body] = match;
  const rawDate = `${year}年${month}月${day}日`;

  return {
    date: new Date(Number(year), Number(month) - 1, Number(day)),
    body: body.trim(),
    rawDate,
  };
}

function parseEnLine(line: string): NewsEntry | null {
  const match = line.trim().match(enLinePattern);
  if (!match) return null;

  const [, monthName, day, year, body] = match;
  const monthIndex = MONTH_NAMES.indexOf(monthName as (typeof MONTH_NAMES)[number]);

  if (monthIndex < 0) return null;

  const rawDate = `${monthName} ${day}, ${year}`;

  return {
    date: new Date(Number(year), monthIndex, Number(day)),
    body: body.trim(),
    rawDate,
  };
}

function parseNewsContent(content: string, lang: SiteLang): NewsEntry[] {
  const parseLine = lang === "zh" ? parseZhLine : parseEnLine;

  return content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .map(parseLine)
    .filter((entry): entry is NewsEntry => entry !== null)
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}

function loadNewsFile(lang: SiteLang): NewsEntry[] {
  const path = Object.keys(newsModules).find((filePath) =>
    filePath.endsWith(`news.${lang}.md`),
  );

  if (!path) {
    return [];
  }

  return parseNewsContent(newsModules[path], lang);
}

export async function getNewsEntries(lang: SiteLang): Promise<NewsEntry[]> {
  return loadNewsFile(lang);
}

export function getLatestNews(entries: NewsEntry[], limit = 5): NewsEntry[] {
  return entries.slice(0, limit);
}

export function formatNewsDate(date: Date, lang: SiteLang) {
  return new Intl.DateTimeFormat(lang === "zh" ? "zh-CN" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

export function formatNewsDisplayDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}/${month}/${day}`;
}

const markdownLinkPattern = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;

export function renderNewsBody(body: string): string {
  const escaped = body
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return escaped.replace(
    markdownLinkPattern,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>',
  );
}

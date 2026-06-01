import { ui, defaultLang, showDefaultLang } from "./ui";

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

/** Strip leading /zh or /en from a pathname. */
export function stripLangPrefix(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && segments[0] in ui) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname || "/";
}

/**
 * Path for the language switcher — always uses /zh/... or /en/... so switching
 * to the default language does not hit / (browser-language redirect).
 */
export function getSwitcherPath(url: URL, targetLang: keyof typeof ui): string {
  const pathWithoutLang = stripLangPrefix(url.pathname);
  const suffix = pathWithoutLang === "/" ? "/" : pathWithoutLang;
  return `/${targetLang}${suffix}`;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function tOfUrl(url: URL) {
  return useTranslations(getLangFromUrl(url));
}

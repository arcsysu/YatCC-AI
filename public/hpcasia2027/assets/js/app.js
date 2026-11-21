/**
 * BEHAVIOR / 交互逻辑
 * Content editors normally only need content.js, not this file.
 * No framework, fetch request, analytics or backend is used.
 * Public resource links are validated; text is inserted with DOM APIs.
 */
(() => {
  "use strict";

  const content = window.YatccTutorialContent;
  if (!content) {
    console.error("YatCC tutorial: assets/js/content.js is missing.");
    return;
  }

  const LANGUAGES = ["en", "zh"];
  const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
  const state = { language: "en", workflowStep: 0, resourceFilter: "all" };
  const elements = {
    agenda: document.getElementById("agenda-list"),
    resources: document.getElementById("resource-grid"),
    speakers: document.getElementById("speaker-list"),
    affiliation: document.getElementById("team-affiliation"),
    workflowDescription: document.getElementById("step-description")
  };

  // Optional payloads are added by build_standalone.py; the source folder
  // uses ordinary relative download links instead.
  const embeddedDownloads = readEmbeddedDownloads();

  function translate(value) {
    if (typeof value === "string") return value;
    return value?.[state.language] ?? value?.en ?? "";
  }

  function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function createIcon(name) {
    const svg = document.createElementNS(SVG_NAMESPACE, "svg");
    svg.setAttribute("class", "icon");
    svg.setAttribute("aria-hidden", "true");
    const use = document.createElementNS(SVG_NAMESPACE, "use");
    use.setAttribute("href", `#i-${name}`);
    svg.append(use);
    return svg;
  }

  /** Allow web links and relative local files, never executable URL schemes. */
  function safeUrl(value, allowEmail = false) {
    if (typeof value !== "string" || !value.trim()) return null;
    try {
      const resolved = new URL(value, window.location.href);
      if (["http:", "https:"].includes(resolved.protocol)) return resolved.href;
      if (allowEmail && resolved.protocol === "mailto:") return resolved.href;
      if (window.location.protocol === "file:" && resolved.protocol === "file:") {
        return resolved.href;
      }
    } catch {
      return null;
    }
    return null;
  }

  /**
   * A small, explicit rich-text vocabulary for headings and inline emphasis.
   * No arbitrary HTML/attributes from content.js are copied into the page.
   * Allowed: <br>, <em>, <strong>, and safe <a href="..."> links.
   */
  function setInlineCopy(target, value) {
    const text = translate(value);
    if (!text.includes("<")) {
      target.textContent = text;
      return;
    }
    const template = document.createElement("template");
    template.innerHTML = text;

    function copyNode(source) {
      if (source.nodeType === Node.TEXT_NODE) {
        return document.createTextNode(source.textContent);
      }
      if (source.nodeType !== Node.ELEMENT_NODE) return document.createTextNode("");
      const tag = source.tagName.toLowerCase();
      if (!["br", "em", "strong", "a"].includes(tag)) {
        return document.createTextNode(source.textContent);
      }
      const node = document.createElement(tag);
      if (tag === "a") {
        const href = safeUrl(source.getAttribute("href"), true);
        if (href) node.href = href;
        node.className = "text-link";
      }
      node.append(...Array.from(source.childNodes, copyNode));
      return node;
    }

    target.replaceChildren(...Array.from(template.content.childNodes, copyNode));
  }

  function renderStaticCopy() {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      setInlineCopy(element, content.ui[element.dataset.i18n]);
    });
    const attributes = [
      ["data-i18n-aria", "aria-label"],
      ["data-i18n-alt", "alt"]
    ];
    for (const [key, attribute] of attributes) {
      document.querySelectorAll(`[${key}]`).forEach((element) => {
        element.setAttribute(attribute, translate(content.ui[element.getAttribute(key)]));
      });
    }
    document.querySelectorAll("[data-link]").forEach((element) => {
      const href = safeUrl(content.site.links[element.dataset.link], true);
      if (href) element.href = href;
    });
    document.querySelectorAll("[data-leader]").forEach((element) => {
      element.textContent = content.leader[element.dataset.leader] ?? "";
    });
    document.getElementById("session-time").textContent = translate(content.site.sessionTime);
    document.getElementById("session-room").textContent = translate(content.site.sessionRoom);
  }

  function renderAgenda() {
    const previousRows = Array.from(elements.agenda.querySelectorAll("details"));
    const openIds = new Set(previousRows.filter((row) => row.open).map((row) => row.dataset.id));
    const initialRender = previousRows.length === 0;
    const fragment = document.createDocumentFragment();

    content.agenda.forEach((item, index) => {
      const time = createElement(
        "span",
        "agenda-time",
        `${item.time} ${translate(content.labels.minutes)}`
      );
      if (item.break) {
        const row = createElement("div", "agenda-break");
        const label = createElement("span");
        label.append(createIcon("coffee"), document.createTextNode(translate(item.title)));
        row.append(time, label);
        fragment.append(row);
        return;
      }
      const id = item.id || `agenda-${index}`;
      const row = createElement("details", "agenda-row");
      row.dataset.id = id;
      row.open = openIds.has(id) || (initialRender && item.initiallyOpen === true);
      const summary = createElement("summary");
      const heading = createElement("div");
      heading.append(
        createElement("h3", "", translate(item.title)),
        createElement("span", "agenda-type", translate(item.type))
      );
      summary.append(time, heading, createIcon("plus"));
      row.append(summary, createElement("p", "agenda-detail", translate(item.body)));
      fragment.append(row);
    });
    elements.agenda.replaceChildren(fragment);
  }

  function renderWorkflowStep(index) {
    state.workflowStep = Math.min(Math.max(index, 0), content.workflowSteps.length - 1);
    document.querySelectorAll("[data-step]").forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        String(Number(button.dataset.step) === state.workflowStep)
      );
    });
    setInlineCopy(elements.workflowDescription, content.workflowSteps[state.workflowStep]);
  }

  function renderSpeakers() {
    elements.speakers.querySelectorAll(".team-member").forEach((element) => element.remove());
    const fragment = document.createDocumentFragment();
    content.speakers.forEach((speaker) => {
      const article = createElement("article", "team-member");
      const avatar = createElement("div", "avatar", speaker.initials);
      avatar.setAttribute("aria-hidden", "true");
      const info = createElement("div");
      info.append(
        createElement("h3", "", speaker.name),
        createElement("div", "speaker-role", translate(speaker.role)),
        createElement("div", "team-focus", translate(speaker.focus))
      );
      article.append(avatar, info);
      fragment.append(article);
    });
    elements.speakers.insertBefore(fragment, elements.affiliation);
  }

  function readEmbeddedDownloads() {
    const element = document.getElementById("embedded-downloads");
    if (!element) return {};
    try {
      return JSON.parse(element.textContent);
    } catch (error) {
      console.error("YatCC tutorial: invalid embedded download data.", error);
      return {};
    }
  }

  function downloadEmbeddedFile(path) {
    const file = embeddedDownloads[path];
    if (!file) return;
    const blob = new Blob([file.text], { type: file.mime });
    const objectUrl = URL.createObjectURL(blob);
    const anchor = createElement("a");
    anchor.href = objectUrl;
    anchor.download = path.split("/").pop();
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    // Retain the object long enough for browser download handling.
    window.setTimeout(() => URL.revokeObjectURL(objectUrl), 30000);
  }

  function resourceAccess(resource) {
    const publicUrl = safeUrl(translate(resource.url));
    const filePath = translate(resource.file);
    const localUrl = safeUrl(filePath);
    return { publicUrl, filePath, localUrl, ready: Boolean(publicUrl || localUrl) };
  }

  function createResourceAction(resource, access) {
    const title = translate(resource.title);
    if (!access.ready)
      return createElement("span", "pending-label", translate(content.labels.release));

    const localDownload = !access.publicUrl && access.filePath;
    const embedded = localDownload && embeddedDownloads[access.filePath];
    const action = createElement(embedded ? "button" : "a", "download-link");
    const label = translate(localDownload ? content.labels.download : content.labels.open);
    action.setAttribute("aria-label", `${label} ${title}`);
    action.append(document.createTextNode(label), createIcon(localDownload ? "download" : "file"));

    if (embedded) {
      action.type = "button";
      action.addEventListener("click", () => downloadEmbeddedFile(access.filePath));
    } else {
      action.href = access.publicUrl || access.localUrl;
      if (localDownload) action.download = access.filePath.split("/").pop();
      else {
        action.target = "_blank";
        action.rel = "noopener noreferrer";
      }
    }
    return action;
  }

  function renderResources() {
    const fragment = document.createDocumentFragment();
    content.resources.forEach((resource) => {
      const access = resourceAccess(resource);
      const status = access.ready ? "ready" : "pending";
      const card = createElement("article", "resource-card");
      card.hidden = state.resourceFilter !== "all" && state.resourceFilter !== status;
      const top = createElement("div", "resource-top");
      top.append(
        createIcon(resource.icon),
        createElement(
          "span",
          `status${access.ready ? "" : " pending"}`,
          translate(access.ready ? content.labels.available : content.labels.pending)
        )
      );
      const foot = createElement("div", "resource-foot");
      foot.append(
        createElement("span", "resource-format", resource.format),
        createResourceAction(resource, access)
      );
      card.append(
        top,
        createElement("h3", "", translate(resource.title)),
        createElement("p", "", translate(resource.desc)),
        foot
      );
      fragment.append(card);
    });
    elements.resources.replaceChildren(fragment);
  }

  function initialLanguage() {
    const query = new URLSearchParams(window.location.search).get("lang");
    if (LANGUAGES.includes(query)) return query;
    try {
      const saved = window.localStorage.getItem(content.site.storageKey);
      if (LANGUAGES.includes(saved)) return saved;
    } catch {
      /* Storage can be unavailable in local/private browsing. */
    }
    if (navigator.language.toLowerCase().startsWith("zh")) return "zh";
    return content.site.defaultLanguage;
  }

  function setLanguage(language, updateUrl = false) {
    state.language = LANGUAGES.includes(language) ? language : "en";
    document.documentElement.lang = state.language;
    document.title = translate(content.site.title);
    document.querySelector('meta[name="description"]').content = translate(
      content.site.description
    );
    document.querySelector('meta[property="og:title"]').content = translate(content.site.title);
    document.querySelector('meta[property="og:description"]').content = translate(
      content.site.description
    );
    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.lang === state.language));
    });
    renderStaticCopy();
    renderAgenda();
    renderSpeakers();
    renderResources();
    renderWorkflowStep(state.workflowStep);
    try {
      window.localStorage.setItem(content.site.storageKey, state.language);
    } catch {
      /* Language switching still works when storage is disabled. */
    }
    if (updateUrl) {
      try {
        const url = new URL(window.location.href);
        url.searchParams.set("lang", state.language);
        window.history.replaceState(null, "", url);
      } catch {
        /* Some browsers restrict history updates on file:// URLs. */
      }
    }
  }

  // Event bindings are deliberately kept together for easy review.
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang, true));
  });
  document.querySelectorAll("[data-step]").forEach((button) => {
    button.addEventListener("click", () => renderWorkflowStep(Number(button.dataset.step)));
  });
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.resourceFilter = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((item) => {
        item.setAttribute("aria-pressed", String(item === button));
      });
      renderResources();
    });
  });
  window.addEventListener("popstate", () => setLanguage(initialLanguage()));
  setLanguage(initialLanguage());
})();

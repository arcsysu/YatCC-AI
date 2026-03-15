import OpenAI from "https://esm.sh/openai@6.27.0?bundle";
import { marked } from "https://esm.sh/marked@15.0.7";
import DOMPurify from "https://esm.sh/dompurify@3.2.6";

const OPENAI_CONFIG = {
  baseURL: "https://api.deepseek.com",
  apiKey: "sk-f5393eefb65648f5beed802ba3be1179",
  model: "deepseek-chat",
};
const MAX_HISTORY_TURNS = 6;
const MAX_CONTEXT_DOCS = 6;

// 封装成初始化函数，方便在 Astro 路由切换时再次调用
function initYatAgent() {
  const root = document.querySelector("[data-yat-agent]");
  if (!root) return;

  const state = {
    history: [],
    isBusy: false,
    searchIndex: null,
    thinkingEl: null,
  };

  // 1. 重新映射选择器，匹配你的 Astro 组件结构
  const closeButton = root.querySelector("[data-agent-close]");
  const messagesEl = root.querySelector("[data-agent-messages]");
  const form = root.querySelector("[data-agent-form]");
  const input = form.querySelector('textarea[name="prompt"]');
  const submitButton = form.querySelector('button[type="submit"]');
  const statusEl = root.querySelector("[data-agent-status]");
  const canvas = document.getElementById("site-canvas");

  // 初始化检查状态
  checkIndexStatus();

  // 2. 绑定事件
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const question = input.value.trim();
    if (!question || state.isBusy) return;

    appendMessage("user", question);
    input.value = "";
    input.style.height = "";

    setBusy(true);
    showThinking();

    try {
      const docs = await ensureSearchIndex();
      const selectedDocs = selectRelevantDocs(question, docs);
      const response = await generateAnswer(question, selectedDocs);

      clearThinking();
      appendMessage("assistant", response, selectedDocs);

      state.history.push({ role: "user", content: question });
      state.history.push({ role: "assistant", content: response });
      state.history = state.history.slice(-MAX_HISTORY_TURNS * 2);
    } catch (error) {
      clearThinking();
      console.error("AI Request Error:", error);
      appendMessage("assistant", `请求失败：${error.message || "未知错误"}`);
    } finally {
      setBusy(false);
    }
  });

  // 自动高度和快捷键
  input.addEventListener("input", autoResizeInput);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      form.requestSubmit();
    }
  });

  // 状态检查：如果索引加载成功，圆点变绿
  async function checkIndexStatus() {
    try {
      await ensureSearchIndex();
      if (statusEl) statusEl.dataset.ready = "true";
    } catch (e) {
      console.warn("Search index not ready yet.");
    }
  }

  function setBusy(busy) {
    state.isBusy = busy;
    submitButton.disabled = busy;
    input.disabled = busy;
    if (statusEl) statusEl.style.opacity = busy ? "0.5" : "1";
  }

  function autoResizeInput() {
    input.style.height = "auto";
    input.style.height = `${Math.min(input.scrollHeight, 120)}px`;
  }

  async function ensureSearchIndex() {
    if (state.searchIndex) return state.searchIndex;
    const url = root.dataset.searchIndexUrl;
    const response = await fetch(url);
    if (!response.ok) throw new Error("无法加载搜索索引");
    const payload = await response.json();
    state.searchIndex = Array.isArray(payload.docs) ? payload.docs : [];
    return state.searchIndex;
  }

  // --- 逻辑函数（保持原样，但确保内部引用正确） ---

  function selectRelevantDocs(question, docs) {
    const currentPage = root.dataset.currentPage || "";
    const normalizedQuestion = normalize(question);
    const terms = buildTerms(normalizedQuestion);

    const ranked = docs
      .map((doc) => ({
        doc,
        score: scoreDoc(doc, normalizedQuestion, terms, currentPage),
      }))
      .filter((entry) => entry.score > 0)
      .sort((left, right) => right.score - left.score)
      .slice(0, MAX_CONTEXT_DOCS)
      .map((entry) => ({
        title: entry.doc.title || "相关页面",
        location: entry.doc.location || "",
        text: buildExcerpt(entry.doc.text || "", terms),
      }));

    return ranked.length ? ranked : [];
  }

  function scoreDoc(doc, question, terms, currentPage) {
    const title = normalize(doc.title || "");
    const text = normalize(doc.text || "");
    const location = normalize(doc.location || "");
    let score = 0;
    if (question && title.includes(question)) score += 24;
    if (question && text.includes(question)) score += 12;
    for (const term of terms) {
      if (term.length < 2) continue;
      if (title.includes(term)) score += 8;
      if (text.includes(term)) score += 2;
    }
    return score;
  }

  function buildTerms(text) {
    return Array.from(
      new Set(text.match(/[a-z0-9_./-]+|[\u4e00-\u9fff]{2,}/g) || []),
    ).slice(0, 24);
  }

  function buildExcerpt(text, terms) {
    const plain = text.replace(/\s+/g, " ").trim();
    return plain.slice(0, 300) + "...";
  }

  async function generateAnswer(question, docs) {
    const client = new OpenAI({
      apiKey: OPENAI_CONFIG.apiKey,
      baseURL: OPENAI_CONFIG.baseURL,
      dangerouslyAllowBrowser: true,
    });

    const contextBlock = docs.length
      ? docs.map((d, i) => `[${i + 1}] ${d.title}: ${d.text}`).join("\n")
      : "未找到相关文档内容。";

    const prompt = `文档内容：\n${contextBlock}\n\n问题：${question}`;

    const completion = await client.chat.completions.create({
      model: OPENAI_CONFIG.model,
      messages: [
        {
          role: "system",
          content: "你是 YatCC 智能助手。请基于提供的文档回答，保持简洁专业。",
        },
        { role: "user", content: prompt },
      ],
    });

    return (
      completion.choices?.[0]?.message?.content || "抱歉，我无法回答这个问题。"
    );
  }

  function showThinking() {
    const article = document.createElement("article");
    article.className = "yat-agent__message yat-agent__message--assistant";
    article.innerHTML =
      '<div class="yat-agent__message-body"><div class="yat-agent__thinking"><span></span><span></span><span></span></div></div>';
    messagesEl.appendChild(article);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    state.thinkingEl = article;
  }

  function clearThinking() {
    if (state.thinkingEl) state.thinkingEl.remove();
  }

  function appendMessage(role, text, docs = []) {
    const article = document.createElement("article");
    article.className = `yat-agent__message yat-agent__message--${role}`;

    const body = document.createElement("div");
    body.className = "yat-agent__message-body";
    body.innerHTML =
      role === "assistant" ? DOMPurify.sanitize(marked.parse(text)) : text;
    article.appendChild(body);

    if (role === "assistant" && docs.length) {
      const sources = document.createElement("div");
      sources.className = "yat-agent__sources";
      docs.forEach((doc) => {
        const a = document.createElement("a");
        a.className = "yat-agent__source";
        a.href = doc.location;
        a.textContent = doc.title;
        sources.appendChild(a);
      });
      article.appendChild(sources);
    }

    messagesEl.appendChild(article);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function normalize(v) {
    return String(v || "").toLowerCase();
  }
}

// 执行初始化
initYatAgent();
// 兼容 Astro 路由
document.addEventListener("astro:after-swap", initYatAgent);

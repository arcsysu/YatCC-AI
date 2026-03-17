import OpenAI from "https://esm.sh/openai@6.27.0?bundle";
import { marked } from "https://esm.sh/marked@15.0.7";
import DOMPurify from "https://esm.sh/dompurify@3.2.6";

const OPENAI_CONFIG = {
  baseURL: "https://api.deepseek.com",
  apiKey: "sk-f5393eefb65648f5beed802ba3be1179",
  model: "deepseek-chat",
};
const MAX_HISTORY_TURNS = 5;

function initYatCCAgent() {
  const root = document.querySelector("[data-yat-agent]");
  if (!root) return;

  const state = {
    history: [],
    isBusy: false,
    thinkingEl: null,
  };

  const messagesEl = root.querySelector("[data-agent-messages]");
  const form = root.querySelector("[data-agent-form]");
  const input = form?.querySelector('textarea[name="prompt"]');
  const submitButton = form?.querySelector('button[type="submit"]');
  const statusEl = root.querySelector("[data-agent-status]");

  if (!form || !input || !messagesEl) return;

  // 设置初始状态：实时模式下，状态灯默认亮起
  if (statusEl) {
    statusEl.dataset.ready = "true";
    statusEl.title = "实时页面分析模式已就绪";
  }

  // --- 核心逻辑：提取当前页面内容 ---
  function getPageContext() {
    // 优先选择正文容器，根据你的 Astro 模板选择器调整
    const contentArea =
      document.querySelector("main") ||
      document.querySelector("article") ||
      document.querySelector(".md-content") ||
      document.body;

    const clone = contentArea.cloneNode(true);

    // 剔除不需要 AI 关注的噪音元素
    const noiseSelectors = [
      "nav",
      "footer",
      "script",
      "style",
      "aside",
      ".yat-agent", // 排除助手自己
      ".sidebar",
      ".table-of-contents",
      ".ads",
    ];
    noiseSelectors.forEach((selector) => {
      clone.querySelectorAll(selector).forEach((el) => el.remove());
    });

    // 获取纯文本并压缩空白
    return clone.innerText.replace(/\s+/g, " ").trim().slice(0, 10000);
  }

  // --- 事件监听 ---
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // 严防 URL 出现 ?prompt=

    const question = input.value.trim();
    if (!question || state.isBusy) return;

    appendMessage("user", question);
    input.value = "";
    input.style.height = "auto";

    setBusy(true);
    showThinking();

    try {
      const pageContext = getPageContext();
      const response = await generateAnswer(question, pageContext);

      clearThinking();
      appendMessage("assistant", response);

      state.history.push({ role: "user", content: question });
      state.history.push({ role: "assistant", content: response });
      state.history = state.history.slice(-MAX_HISTORY_TURNS * 2);
    } catch (error) {
      clearThinking();
      console.error("Agent Error:", error);
      appendMessage("assistant", `抱歉，处理您的请求时出错：${error.message}`);
    } finally {
      setBusy(false);
    }
  });

  input.addEventListener("input", autoResizeInput);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      form.requestSubmit();
    }
  });

  // --- API 交互 ---
  async function generateAnswer(question, context) {
    const client = new OpenAI({
      apiKey: OPENAI_CONFIG.apiKey,
      baseURL: OPENAI_CONFIG.baseURL,
      dangerouslyAllowBrowser: true,
    });

    const conversation = state.history
      .map((h) => `${h.role === "user" ? "用户" : "助手"}: ${h.content}`)
      .join("\n");

    const systemPrompt = `# Role
你是一个名为 "YatCC-AI" 的智能助手。你的目标是为中山大学（Sun Yat-sen University）编译实验框架 YatCC-AI 的用户提供专业、友好的技术支持。

# Context & Scope
- **定义**: YatCC-AI (Your AI Time Cool Compiler) 是一个基于工业级 LLVM 构建的现代化编译实验框架，致力于为编译课程提供现代、友好和前沿的实践体验。
- **架构**: 采用高度模块化的架构设计，将编译器前端与后端逻辑解耦。
- **核心能力**:
  - **智能化**: 深度整合 DeepSeek 等大语言模型能力，提供全程赋能。
  - **便捷化**: “零配置” Web 化实践平台，浏览器即开即用。
  - **自动化**: 内置单元测试体系与双模式（本地/云端）自动化评测机制。
- **项目愿景**: 从 "Yet Another Tiny C Compiler" 演进为 AI 驱动的创新平台，衔接高校教学与工业界实践。

# Guidelines
1. **身份一致性**: 始终以 YatCC-AI 官方助手的身份回答。
2. **回答依据**: 优先根据当前页面的文档内容回答。如果涉及 LLVM、编译器设计模式、C++ 开发等通用技术，需保持与 YatCC-AI 工业级、模块化设计理念一致。
3. **技术栈关注点**: 
   - 强调 LLVM 基础、模块化扩展、自动化评测及 AI 辅助编程。
   - 关注 Web 端即开即用的体验及环境配置问题的简化。
4. **语气风格**: 专业、鼓励创新、简洁明了。
5. **局限性说明**: 如果用户询问非编译、非 YatCC 相关的话题，请委婉引导回编译技术或本平台相关内容。

# Response Protocol
- 回答末尾应根据需要提示相关资源（如：参考手册、历年课程归档、实现源码或教学视频）。
- 对于代码实现问题，应遵循 LLVM 代码风格和模块化拆分的原则。

当前页面标题: ${document.title}`;

    const userMessage = `【当前页面内容提取】:
${context}

【历史对话】:
${conversation}

【用户提问】:
${question}`;

    const completion = await client.chat.completions.create({
      model: OPENAI_CONFIG.model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ],
      temperature: 0.7,
    });

    return completion.choices?.[0]?.message?.content || "模型未返回有效信息。";
  }

  // --- UI 工具 ---
  function setBusy(busy) {
    state.isBusy = busy;
    if (submitButton) submitButton.disabled = busy;
    if (input) input.disabled = busy;
  }

  function autoResizeInput() {
    input.style.height = "auto";
    input.style.height = `${Math.min(input.scrollHeight, 150)}px`;
  }

  function showThinking() {
    const article = document.createElement("article");
    article.className = "yat-agent__message yat-agent__message--assistant";
    article.innerHTML = `<div class="yat-agent__message-body"><div class="yat-agent__thinking"><span></span><span></span><span></span></div></div>`;
    messagesEl.appendChild(article);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    state.thinkingEl = article;
  }

  function clearThinking() {
    state.thinkingEl?.remove();
    state.thinkingEl = null;
  }

  function appendMessage(role, text) {
    const article = document.createElement("article");
    article.className = `yat-agent__message yat-agent__message--${role}`;

    const body = document.createElement("div");
    body.className = "yat-agent__message-body";
    // 仅对助手回复进行 Markdown 解析
    body.innerHTML =
      role === "assistant" ? DOMPurify.sanitize(marked.parse(text)) : text;

    article.appendChild(body);
    messagesEl.appendChild(article);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }
}

// 初始化及生命周期绑定
initYatCCAgent();
document.addEventListener("astro:after-swap", initYatCCAgent);

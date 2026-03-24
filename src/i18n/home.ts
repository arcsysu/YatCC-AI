export type HomeCard = {
  icon: string;
  title: string;
  description: string;
};

export type HomeFeature = {
  title: string;
  description: string;
  imageAlt?: string;
};

export type HomeFeatureSection = {
  title: string;
  direction: "left" | "right";
  items: HomeFeature[];
};

export type HomeContent = {
  hero: {
    title: string;
    subtitle: string;
    buttons: {
      start: string;
      docs: string;
      details: string;
    };
    detailsHref: string;
  };
  cards: HomeCard[];
  featureSections: HomeFeatureSection[];
};

export const homeContent = {
  zh: {
    hero: {
      title: "YatCC AI",
      subtitle: "一个基于工业级 LLVM 构建的现代化编译实验框架",
      buttons: {
        start: "🔨 开始实验",
        docs: "📄 阅读文档",
        details: "❔ 了解更多",
      },
      detailsHref: "https://yatcc-ai.com/zh/introduction.html",
    },
    cards: [
      {
        icon: "📦",
        title: "高度模块化",
        description:
          "将编译器前端与后端逻辑有效解耦，实现结构清晰、灵活扩展与便捷演进，为教学和科研提供坚实支撑。",
      },
      {
        icon: "✅",
        title: "自动化评测机制",
        description:
          "内置单元测试体系与双模式自动化评测机制，全面适配本地与云端环境，让过程更流畅、高效、可复现。",
      },
      {
        icon: "🤖",
        title: "深度整合大模型",
        description:
          "深度整合 DeepSeek 等大语言模型能力，打造『零配置』Web化实践平台，用户无需复杂环境搭建，仅通过浏览器即刻开启编译探索之旅。",
      },
      {
        icon: "🦾",
        title: "全链路智能化与自动化",
        description:
          "通过全链路的智能化与自动化支持，使能高效构建功能完备的编译器，并引导AI驱动下的编译前沿创新。",
      },
    ],
    featureSections: [
      {
        title: "YatCC OL",
        direction: "left",
        items: [
          {
            title: "便捷化",
            description:
              "通过云端开发环境与预置工具链，快速进入实验状态，减少本地环境搭建与排障成本。",
            imageAlt: "YatCC OL 便捷化演示",
          },
          {
            title: "自动化",
            description:
              "评测、提交与反馈流程统一串联，让实验过程更稳定、更高效，也更容易复现。",
            imageAlt: "YatCC OL 自动化演示",
          },
          {
            title: "智能化",
            description:
              "将 AI 能力嵌入教学与实践场景，在编译器构建过程中提供更自然的辅助与引导。",
            imageAlt: "YatCC OL 智能化演示",
          },
        ],
      },
      {
        title: "AI Hub",
        direction: "right",
        items: [
          {
            title: "统一模型网关",
            description:
              "基于 LiteLLM 提供统一的 LLM Gateway，将多模型调用收敛到一致接口之上，便于在同一平台内接入和切换不同模型能力。",
          },
          {
            title: "密钥与访问控制",
            description:
              "面向项目和用户提供认证鉴权、虚拟密钥与访问控制能力，让模型服务的开放、隔离与管理更加清晰可控。",
          },
          {
            title: "用量与成本观测",
            description:
              "依托管理控制台观察 Token、调用量与项目级开销，帮助团队持续追踪模型使用状态、预算消耗与平台活跃度。",
          },
        ],
      },
    ],
  },
  en: {
    hero: {
      title: "YatCC AI",
      subtitle:
        "A modern compiler experimentation framework built on industrial-grade LLVM.",
      buttons: {
        start: "🔨 Start Lab",
        docs: "📄 Read Docs",
        details: "❔ Learn More",
      },
      detailsHref: "https://yatcc-ai.com/introduction.html",
    },
    cards: [
      {
        icon: "📦",
        title: "Highly Modular",
        description:
          "Decouple compiler frontend and backend logic with a clean architecture that stays extensible for both teaching and research.",
      },
      {
        icon: "✅",
        title: "Automated Evaluation",
        description:
          "Built-in unit tests and dual-mode automated evaluation streamline workflows across both local and cloud environments.",
      },
      {
        icon: "🤖",
        title: "Deep LLM Integration",
        description:
          "Integrate models such as DeepSeek into a zero-setup web platform so learners can start exploring compilers directly in the browser.",
      },
      {
        icon: "🦾",
        title: "End-to-End Intelligence",
        description:
          "Support the full compiler-building workflow with intelligent automation and enable AI-driven innovation throughout the pipeline.",
      },
    ],
    featureSections: [
      {
        title: "YatCC OL",
        direction: "left",
        items: [
          {
            title: "Accessible",
            description:
              "Start quickly with cloud development environments and preconfigured toolchains, without spending time on local setup.",
            imageAlt: "YatCC OL accessibility demo",
          },
          {
            title: "Automated",
            description:
              "Unify submission, evaluation, and feedback into one smooth workflow for more reliable and reproducible lab experiences.",
            imageAlt: "YatCC OL automation demo",
          },
          {
            title: "Intelligent",
            description:
              "Embed AI assistance into compiler education and practice to provide more natural guidance during implementation and experimentation.",
            imageAlt: "YatCC OL intelligence demo",
          },
        ],
      },
      {
        title: "AI Hub",
        direction: "right",
        items: [
          {
            title: "Unified Model Gateway",
            description:
              "Provide a LiteLLM-based gateway that unifies multi-model access behind a consistent interface for switching and integration.",
          },
          {
            title: "Access Control",
            description:
              "Support authentication, virtual keys, and project-level access control so model services remain manageable and clearly isolated.",
          },
          {
            title: "Usage Visibility",
            description:
              "Track tokens, requests, and project-level spending through the admin console to better understand usage, activity, and cost.",
          },
        ],
      },
    ],
  },
} as const satisfies Record<string, HomeContent>;

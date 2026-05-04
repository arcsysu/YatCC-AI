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
      subtitle: "“应用—系统—算力”全栈式、一体化智能服务平台",
      buttons: {
        start: "🔨 进入平台",
        docs: "📄 阅读文档",
        details: "🎓 2026编译实践",
      },
      detailsHref: "https://yatcc-ai.com/teach/s2026.html",
    },
    cards: [
      {
        icon: "📦",
        title: "设计模块化",
        description:
          "以前沿技术为驱动，将设计与代码逻辑有效解耦，实现结构清晰、灵活扩展与便捷演进，为教学、科研等提供坚实支撑",
      },
      {
        icon: "✅",
        title: "体验现代化",
        description:
          "提供容器化支持，打造『零配置』Web 化实践平台，用户无需复杂环境搭建，打开浏览器即开即用，让计算触手可及",
      },
      {
        icon: "🤖",
        title: "过程智能化",
        description:
          "深度整合 DeepSeek、OpenClaw 等模型及框架，提供 AI Hub token 服务，一键进入 Vibe Coding 和 Agent 应用",
      },
      {
        icon: "🦾",
        title: "资源聚合化",
        description:
          "提供平台服务、文档指南、引导视频、智能助手的全方位多层次资源，助力提升过程体验",
      },
    ],
    featureSections: [
      {
        title: "OL LAB",
        direction: "left",
        items: [
          {
            title: "便捷化",
            description:
              "通过云端开发环境与预置工具链，快速进入系统开发状态，减少本地环境搭建与排障成本。",
            imageAlt: "OL LAB 便捷化演示",
          },
          {
            title: "自动化",
            description:
              "评测、提交与反馈流程统一串联，让实践过程更稳定、更高效，也更容易复现。",
            imageAlt: "OL LAB 自动化演示",
          },
          {
            title: "智能化",
            description:
              "将 AI 能力嵌入教学与科研场景，在系统开发构建过程中提供更自然的辅助与引导。",
            imageAlt: "OL LAB 智能化演示",
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
              "基于 LiteLLM 提供统一 LLM Gateway，将多模型调用收敛到一致接口之上，便于在同一平台内接入和切换不同模型能力。",
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
        "One-stop intelligent platform from apps to compute.",
      buttons: {
        start: "🔨 Get Started",
        docs: "📄 Read Docs",
        details: "🎓 2026 Compiler",
      },
      detailsHref: "https://yatcc-ai.com/teach/s2026.html",
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
        title: "OL LAB",
        direction: "left",
        items: [
          {
            title: "Accessible",
            description:
              "Start quickly with cloud development environments and preconfigured toolchains, without spending time on local setup.",
            imageAlt: "OL LAB accessibility demo",
          },
          {
            title: "Automated",
            description:
              "Unify submission, evaluation, and feedback into one smooth workflow for more reliable and reproducible lab experiences.",
            imageAlt: "OL LAB automation demo",
          },
          {
            title: "Intelligent",
            description:
              "Embed AI assistance into compiler education and practice to provide more natural guidance during implementation and experimentation.",
            imageAlt: "OL LAB intelligence demo",
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

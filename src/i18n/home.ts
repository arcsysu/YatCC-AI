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
      subtitle: "贯通“应用—系统—算力”的全栈式、一体化智能服务平台",
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
          "以前沿技术体系为驱动，构建高内聚、低耦合的模块化架构，支持组件级扩展与能力复用，为复杂系统构建提坚实健技术底座",
      },
      {
        icon: "🌐",
        title: "体验现代化",
        description:
          "提供容器化支持，打造『零配置』Web 化实践平台，用户无需本地部署与复杂环境搭建，打开浏览器即开即用，让计算触手可及",
      },
      {
        icon: "🤖",
        title: "过程智能化",
        description:
          "深度融合 DeepSeek、OpenClaw 等先进模型及框架，提供统一 AI Hub 能力入口，一键进入 Vibe Coding 和 Agent 应用",
      },
      {
        icon: "🦾",
        title: "资源聚合化",
        description:
          "围绕平台能力构建多层次资源体系，提供服务接口、技术文档、引导教程、智能助手等完整支持链路，持续优化提升用户实践体验",
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
              "通过云端开发环境与预置工具链，快速进入系统开发状态，减少本地环境搭建与排障成本",
            imageAlt: "OL LAB 便捷化演示",
          },
          {
            title: "自动化",
            description:
              "开发、测试、部署、运行，端到端流程自动化闭环，让实践过程更稳定、更高效、更可复现",
            imageAlt: "OL LAB 自动化演示",
          },
          {
            title: "智能化",
            description:
              "将 AI 能力嵌入教学与科研场景，在系统开发构建过程中提供全程辅助，推动智能范式变革",
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
              "基于 LiteLLM 提供统一 LLM Gateway，将多模型调用抽象为一致接口，实现跨模型能力的无缝接入与灵活切换",
          },
          {
            title: "密钥访问控制",
            description:
              "面向项目与用户提供体系化的认证鉴权、虚拟密钥与细粒度访问控制机制，构建开放、共享、可控的先进性服务能力",
          },
          {
            title: "用量成本观测",
            description:
              "依托统一管理控制台观测 Token 使用、调用频次与项目级开销，支持精细化管理模型使用、预算消耗与平台活跃度",
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
        icon: "🌐",
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

export type TeachingCard = {
  icon: string;
  title: string;
  description: string;
};

export type TeachingShowcase = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  placeholderTitle: string;
  placeholderDescription: string;
};

export type TeachingPracticeContent = {
  hero: {
    title: string;
    subtitle: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
  overview: {
    eyebrow: string;
    title: string;
    description: string;
  };
  cards: TeachingCard[];
  showcases: TeachingShowcase[];
};

export const teachingPracticeContent = {
  zh: {
    hero: {
      title: "教学实践",
      subtitle:
        "面向课程建设、实验组织与智能化助教协作的教学实践展示页，后续可持续补充真实案例、课程成果与平台数据。",
      primaryLabel: "查看平台",
      primaryHref: "https://ol.yatcc.arcsysu.cn",
      secondaryLabel: "相关文档",
      secondaryHref: "https://docs.yatcc-ai.com",
    },
    overview: {
      eyebrow: "内容总览",
      title: "面向课程落地的实践展示模块",
      description:
        "该页面延续主页的视觉语言，并预留清晰的占位区域，后续可以逐步补充课程案例、教学资料、成果总结与平台数据。",
    },
    cards: [
      {
        icon: "🧪",
        title: "课程实验编排",
        description:
          "支持从实验发布、环境准备到结果回收的统一组织，方便后续接入具体课程案例与时间线。",
      },
      {
        icon: "🧑‍🏫",
        title: "教学流程协同",
        description:
          "覆盖教师、助教与学生三类角色的协作流程，可在后续补充班级规模、任务拆分与评分策略。",
      },
      {
        icon: "📊",
        title: "过程数据展示",
        description:
          "预留实验完成率、常见问题分布与平台活跃度等数据板块，便于后续沉淀真实教学指标。",
      },
    ],
    showcases: [
      {
        eyebrow: "实践场景 A",
        title: "编译原理课程实验组织",
        description:
          "这里后续可展示课程简介、实验阶段、平台接入方式，以及学生从准备到提交的完整实践路径。",
        bullets: [
          "占位：课程背景与开课信息",
          "占位：实验阶段拆分与目标",
          "占位：学生使用流程与反馈摘要",
        ],
        placeholderTitle: "待补充案例材料",
        placeholderDescription:
          "可在这里放置课程截图、实验界面、成果海报或关键数据概览。",
      },
      {
        eyebrow: "实践场景 B",
        title: "智能助教与答疑支持",
        description:
          "这里后续可补充 AI 助教、实验指导与常见问题归纳等内容，说明平台如何提升教学支撑效率。",
        bullets: [
          "占位：问答场景与助教协作方式",
          "占位：AI 辅助能力接入说明",
          "占位：师生反馈与迭代计划",
        ],
        placeholderTitle: "待补充交互演示",
        placeholderDescription:
          "可在这里放置对话示例、助教工作流示意图，或阶段性使用成效。",
      },
      {
        eyebrow: "实践场景 C",
        title: "课程成果与推广复用",
        description:
          "这里后续可展示课程成果复盘、教学资源沉淀与跨课程复用方式，作为案例页的长期扩展区域。",
        bullets: [
          "占位：课程成果总结",
          "占位：资源复用与共享方式",
          "占位：后续建设计划",
        ],
        placeholderTitle: "待补充成果展示",
        placeholderDescription:
          "可在这里展示项目报告、作品截图、课程评价或推广材料。",
      },
    ],
  },
  en: {
    hero: {
      title: "Teaching Practice",
      subtitle:
        "A showcase page for course delivery, lab orchestration, and AI-assisted teaching workflows, ready to be filled with real cases later.",
      primaryLabel: "Open Platform",
      primaryHref: "https://ol.yatcc.arcsysu.cn",
      secondaryLabel: "Read Docs",
      secondaryHref: "https://docs.yatcc-ai.com",
    },
    overview: {
      eyebrow: "Overview",
      title: "Practice-ready teaching showcase modules",
      description:
        "This page follows the home page visual language and leaves clear placeholder zones for later course cases, teaching assets, outcome summaries, and platform metrics.",
    },
    cards: [
      {
        icon: "🧪",
        title: "Course Lab Design",
        description:
          "Organize publishing, environment setup, and result collection in one flow, with room for real course case details later.",
      },
      {
        icon: "🧑‍🏫",
        title: "Teaching Collaboration",
        description:
          "Cover teacher, TA, and student collaboration workflows, with placeholders for class scale, task breakdown, and grading strategy.",
      },
      {
        icon: "📊",
        title: "Process Insights",
        description:
          "Reserve space for completion rate, issue distribution, and platform activity metrics once real teaching data is available.",
      },
    ],
    showcases: [
      {
        eyebrow: "Scenario A",
        title: "Compiler Course Lab Delivery",
        description:
          "This section can later introduce the course, lab milestones, platform onboarding, and the end-to-end student workflow.",
        bullets: [
          "Placeholder: course background and schedule",
          "Placeholder: lab phases and goals",
          "Placeholder: student workflow and feedback summary",
        ],
        placeholderTitle: "Case Materials Coming Soon",
        placeholderDescription:
          "Use this area for course screenshots, lab interfaces, posters, or a concise data summary.",
      },
      {
        eyebrow: "Scenario B",
        title: "AI TA and Support Workflow",
        description:
          "This section can later describe AI teaching assistants, lab guidance, and FAQ support to show how the platform improves teaching operations.",
        bullets: [
          "Placeholder: Q&A scenarios and TA workflow",
          "Placeholder: AI capability integration notes",
          "Placeholder: teacher and student feedback",
        ],
        placeholderTitle: "Interaction Demo Coming Soon",
        placeholderDescription:
          "Use this area for dialogue samples, TA workflow diagrams, or early usage outcomes.",
      },
      {
        eyebrow: "Scenario C",
        title: "Outcomes and Reuse",
        description:
          "This section can later show course outcomes, reusable assets, and cross-course adoption as the page grows over time.",
        bullets: [
          "Placeholder: outcome summary",
          "Placeholder: resource sharing approach",
          "Placeholder: future roadmap",
        ],
        placeholderTitle: "Outcome Showcase Coming Soon",
        placeholderDescription:
          "Use this area for reports, project snapshots, course evaluations, or outreach materials.",
      },
    ],
  },
} as const satisfies Record<string, TeachingPracticeContent>;

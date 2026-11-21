/**
 * CONTENT / 内容编辑入口
 * Edit this file for copy, links, agenda, speaker records and resource status.
 * 修改顺序建议：site（时间/地点/链接）→ ui（中英文文案）→ agenda → resources → speakers。
 * Keep en / zh pairs complete. A null resource URL means “not released”.
 * Local resources use file; published external resources use url.
 * This assignment intentionally uses JSON-compatible syntax for Python checks.
 * No secrets, API keys or private lab credentials belong in this public file.
 */
window.YatccTutorialContent = {
  "site": {
    "sessionTime": {
      "en": "Tutorial day · time to be announced",
      "zh": "Tutorial · 具体时段待公布"
    },
    "sessionRoom": {
      "en": "HPC Asia 2027 · room to be announced",
      "zh": "HPC Asia 2027 · 教室待公布"
    },
    "title": {
      "en": "YatCC Tutorial · HPC Asia 2027 | From Models to Scientific Workflows",
      "zh": "YatCC Tutorial · HPC Asia 2027 | 从模型服务到科学工作流"
    },
    "description": {
      "en": "Build an intelligent HPC workspace with YatCC. HPC Asia 2027 tutorial program, speakers and public learning resources.",
      "zh": "使用 YatCC 构建智能 HPC 工作空间。HPC Asia 2027 Tutorial 介绍、议程、讲者团队与公开学习材料。"
    },
    "links": {
      "yatcc": "https://yatcc-ai.com/",
      "platform": "https://ol.yatcc.arcsysu.cn",
      "conference": "https://hpcasia2027.org/2027/",
      "tutorialInfo": "https://hpcasia2027.org/2027/pages_submission/call_for_tutorials.vm",
      "registration": "https://hpcasia2027.org/2027/pages_registration/registration.vm",
      "venue": "https://hpcasia2027.org/2027/pages_information/venue.vm",
      "github": "https://github.com/arcsysu/YatCC-AI",
      "leaderHomepage": "https://xianweiz.github.io",
      "contact": "mailto:zhangxw79@mail.sysu.edu.cn"
    },
    "storageKey": "yatcc-tutorial-lang",
    "defaultLanguage": "en"
  },
  "labels": {
    "available": {
      "en": "Available",
      "zh": "可下载"
    },
    "pending": {
      "en": "Coming soon",
      "zh": "待发布"
    },
    "download": {
      "en": "Download",
      "zh": "下载"
    },
    "open": {
      "en": "Open resource",
      "zh": "打开材料"
    },
    "release": {
      "en": "Link added upon release",
      "zh": "发布后开放链接"
    },
    "minutes": {
      "en": "min",
      "zh": "分"
    },
    "downloadReady": {
      "en": "Your reference file is ready to download.",
      "zh": "参考资料已准备好下载。"
    },
    "newTab": {
      "en": "Opens in a new tab",
      "zh": "在新标签页打开"
    }
  },
  "ui": {
    "accessibility.skip_to_content": {
      "en": "Skip to content",
      "zh": "跳转到正文"
    },
    "navigation.overview": {
      "en": "Overview",
      "zh": "Tutorial概览"
    },
    "navigation.program": {
      "en": "Program",
      "zh": "Tutorial议程"
    },
    "navigation.materials": {
      "en": "Materials",
      "zh": "学习材料"
    },
    "navigation.speakers": {
      "en": "Speakers",
      "zh": "讲者团队"
    },
    "hero.hpc_asia_2027_hands_on_tutorial": {
      "en": "HPC ASIA 2027 · HANDS-ON TUTORIAL",
      "zh": "HPC ASIA 2027 · 实践教程"
    },
    "hero.title": {
      "en": "From Models to<br><em>Scientific<br>Workflows.</em>",
      "zh": "从模型服务<br>到<em>科学工作流</em>"
    },
    "hero.building_intelligent_hpc_workspaces_with_yatcc": {
      "en": "Building Intelligent HPC Workspaces<br>with YatCC",
      "zh": "使用 YatCC 构建智能 HPC 工作空间"
    },
    "hero.bring_models_data_and_compute_into": {
      "en": "Bring models, data and compute into one research workspace. Build a scientific workflow you can review, run and reproduce—in a half-day, hands-on session.",
      "zh": "将模型、数据与算力接入同一个科研工作空间，构建可审查、可执行、可复现的科学工作流"
    },
    "hero.explore_the_program": {
      "en": "Explore the program",
      "zh": "查看议程"
    },
    "hero.get_the_materials": {
      "en": "Get the materials",
      "zh": "获取材料"
    },
    "hero.bring_your_browser_no_personal_gpu": {
      "en": "Bring your browser. No personal GPU required.",
      "zh": "携带笔记本和浏览器即可，无需自备 GPU"
    },
    "hero.one_connected_research_loop": {
      "en": "ONE CONNECTED RESEARCH LOOP",
      "zh": "贯通科研任务的完整闭环"
    },
    "hero.private_models": {
      "en": "Private models",
      "zh": "私有模型服务"
    },
    "hero.scientific_data": {
      "en": "Scientific data",
      "zh": "科学数据"
    },
    "hero.managed_datasets": {
      "en": "Managed datasets",
      "zh": "统一管理与预备"
    },
    "hero.hpc_cloud": {
      "en": "HPC & cloud",
      "zh": "HPC 与云算力"
    },
    "hero.execution_adapters": {
      "en": "Execution adapters",
      "zh": "执行后端适配"
    },
    "hero.a_persistent_home_for_your_scientific": {
      "en": "A customized home for your scientific task",
      "zh": "承载科学任务的定制化工作空间"
    },
    "hero.agent_tools": {
      "en": "Agent + tools",
      "zh": "Agent 与工具"
    },
    "hero.workflow_state": {
      "en": "Workflow state",
      "zh": "流程状态"
    },
    "hero.provenance": {
      "en": "Provenance",
      "zh": "过程溯源"
    },
    "hero.connect": {
      "en": "Connect",
      "zh": "接入"
    },
    "hero.review": {
      "en": "Review",
      "zh": "审查"
    },
    "hero.execute": {
      "en": "Execute",
      "zh": "执行"
    },
    "hero.validate": {
      "en": "Validate",
      "zh": "验证"
    },
    "hero.reference_architecture_select_a_step_to": {
      "en": "Reference architecture · select a step to explore",
      "zh": "参考架构示意 · 点击步骤查看说明"
    },
    "hero.february_19_2027": {
      "en": "February 19, 2027",
      "zh": "2027 年 2 月 19 日"
    },
    "hero.yonsei_university_seoul": {
      "en": "Yonsei University · Seoul",
      "zh": "韩国首尔 · 延世大学"
    },
    "hero.180_minutes_hands_on": {
      "en": "180 minutes · hands-on",
      "zh": "180 分钟 · 动手实践"
    },
    "hero.intermediate_newcomers_welcome": {
      "en": "Intermediate · newcomers welcome",
      "zh": "中级内容 · 欢迎领域初学者"
    },
    "conference.part_of_the_hpc_asia_2027": {
      "en": "PART OF THE HPC ASIA 2027 TUTORIAL PROGRAM",
      "zh": "HPC ASIA 2027 教程项目"
    },
    "conference.an_international_meeting_for_the_asia": {
      "en": "An international meeting for the Asia-Pacific HPC community.",
      "zh": "连接亚太高性能计算领域的研究者与实践者"
    },
    "conference.conference": {
      "en": "Conference",
      "zh": "会议日期"
    },
    "conference.february_16_19_2027": {
      "en": "February 16–19, 2027",
      "zh": "2027 年 2 月 16–19 日"
    },
    "conference.tutorial_day": {
      "en": "Tutorial day",
      "zh": "Tutorial日期"
    },
    "conference.february_19_2027": {
      "en": "February 19, 2027",
      "zh": "2027 年 2 月 19 日"
    },
    "conference.baekyang_nuri_the_commons_yonsei_university": {
      "en": "Baekyang Nuri (The Commons), Yonsei University · Seoul, Korea",
      "zh": "韩国首尔 · 延世大学 Baekyang Nuri（The Commons）会场"
    },
    "conference.conference_website": {
      "en": "Conference website",
      "zh": "会议官网"
    },
    "conference.venue_directions": {
      "en": "Venue & directions",
      "zh": "会场与交通"
    },
    "conference.registration_information": {
      "en": "Registration information",
      "zh": "注册信息"
    },
    "conference.yonsei_university_baekyang_nuri": {
      "en": "Yonsei University · Baekyang Nuri",
      "zh": "延世大学 · Baekyang Nuri"
    },
    "conference.photo_hpc_asia_2027": {
      "en": "Photo: HPC Asia 2027",
      "zh": "图片来源：HPC Asia 2027"
    },
    "overview.the_idea": {
      "en": "THE IDEA",
      "zh": "Tutorial概览"
    },
    "overview.title": {
      "en": "Connect the tools.<br>Complete the science.",
      "zh": "贯通模型与算力，<br>让科学任务真正落地"
    },
    "overview.a_model_endpoint_is_only_the": {
      "en": "A model endpoint is only the beginning. Learn how private LLM services, managed data and execution backends come together in a persistent workspace—with researchers in control at every critical step.",
      "zh": "模型接口只是起点；本Tutorial将私有大模型服务、科学数据和计算后端连接起来，构建持久化科研工作空间，并在关键步骤保留研究者的审查与控制"
    },
    "overview.researcher_oversight": {
      "en": "Researcher oversight",
      "zh": "研究者把关"
    },
    "overview.measurable_performance": {
      "en": "Measurable performance",
      "zh": "可量化性能"
    },
    "overview.reproducible_workflows": {
      "en": "Reproducible workflows",
      "zh": "可复现工作流"
    },
    "overview.serve_a_model": {
      "en": "Serve a model",
      "zh": "部署模型服务"
    },
    "overview.explore_a_private_llm_endpoint_understand": {
      "en": "Explore a private LLM endpoint. Understand batching, accelerator memory, latency and token throughput.",
      "zh": "了解私有模型部署与兼容接口，理解批处理、加速器显存、推理时延和 Token 吞吐"
    },
    "overview.connect_the_workspace": {
      "en": "Connect the workspace",
      "zh": "连接科研工作空间"
    },
    "overview.route_models_through_an_ai_hub": {
      "en": "Route models through an AI hub. Stage data and connect an HPC or cloud execution backend.",
      "zh": "通过 AI Hub 路由模型、记录用量，准备科学数据，并连接 HPC 或云端执行后端"
    },
    "overview.build_with_an_agent": {
      "en": "Build with an agent",
      "zh": "与 Agent 协作构建"
    },
    "overview.inspect_a_dataset_review_suggested_analysis": {
      "en": "Inspect a dataset, review suggested analysis code and approve a parameterized computation.",
      "zh": "检查数据集，审查 Agent 提议的分析代码和参数，在批准后提交计算任务"
    },
    "overview.validate_and_reproduce": {
      "en": "Validate and reproduce",
      "zh": "验证结果并复现"
    },
    "overview.check_reference_results_preserve_provenance_and": {
      "en": "Check reference results, preserve provenance and separate inference, transfer, queue and compute time.",
      "zh": "对照参考结果验证输出，保留过程记录，分别评估推理、传输、排队与计算耗时"
    },
    "program.the_program": {
      "en": "THE PROGRAM",
      "zh": "Tutorial议程"
    },
    "program.title": {
      "en": "One workflow.<br>From start to finish.",
      "zh": "一条工作流，<br>从接入到验证"
    },
    "program.short_walkthroughs_lead_into_a_guided": {
      "en": "Short walkthroughs lead into a guided lab, followed by validation and deployment discussion.",
      "zh": "从概念讲解与演示入手，逐步进入动手实验、结果验证及部署讨论"
    },
    "program.minutes_including_a_break": {
      "en": "minutes, including a break",
      "zh": "分钟，含中场休息"
    },
    "program.times_below_are_minutes_from_the": {
      "en": "Times below are minutes from the session start. Select a topic for details.",
      "zh": "下列时间为Tutorial开始后的相对时间，点击议题可查看详情"
    },
    "materials.the_resource_desk": {
      "en": "THE RESOURCE DESK",
      "zh": "材料中心"
    },
    "materials.title": {
      "en": "Everything for the hands-on.",
      "zh": "课前准备与现场材料，一站获取"
    },
    "materials.start_with_the_preparation_guide_and": {
      "en": "Start with the preparation guide and reference resources. Slides and runnable lab materials will be added here as they are released.",
      "zh": "可先下载准备指南与参考资料；Tutorial讲义和可运行实验材料将在发布后于此开放"
    },
    "materials.all_resources": {
      "en": "All resources",
      "zh": "全部材料"
    },
    "materials.available": {
      "en": "Available",
      "zh": "可下载"
    },
    "materials.coming_soon": {
      "en": "Coming soon",
      "zh": "待发布"
    },
    "materials.public_resources_no_sign_in_needed": {
      "en": "Public resources · no sign-in needed for downloads",
      "zh": "公开资料 · 下载无需登录"
    },
    "materials.the_guide_checklist_and_architecture_support": {
      "en": "The guide, checklist and architecture support pre-tutorial preparation. Final lab instructions, data and expected outputs will be released separately. Hosted lab access details will be provided for the session.",
      "zh": "准备指南、检查清单与架构图用于课前学习；正式实验说明、数据与预期输出将单独发布。现场托管实验环境的访问方式将在Tutorial中提供"
    },
    "participate.come_ready_to_build": {
      "en": "COME READY TO BUILD",
      "zh": "参与指南"
    },
    "participate.title": {
      "en": "Your browser is<br>your starting point.",
      "zh": "从一个浏览器，<br>开始动手探索"
    },
    "participate.for_people_building_or_using_hpc": {
      "en": "For people building or using HPC and AI infrastructure. Basic Python or shell familiarity and an understanding of batch jobs are helpful; prior YatCC experience is not required.",
      "zh": "面向建设和使用 HPC 与 AI 基础设施的研究者与开发者；建议了解基础 Python 或 Shell 以及批处理作业概念，无需 YatCC 使用经验"
    },
    "participate.research_software": {
      "en": "Research software",
      "zh": "科研软件"
    },
    "participate.ai_infrastructure": {
      "en": "AI infrastructure",
      "zh": "AI 基础设施"
    },
    "participate.scientific_research": {
      "en": "Scientific research",
      "zh": "科学研究"
    },
    "participate.education": {
      "en": "Education",
      "zh": "科研教学"
    },
    "participate.conference_registration": {
      "en": "Conference & registration",
      "zh": "会议官网与注册"
    },
    "participate.the_conference_tutorial_call_states_that": {
      "en": "The conference tutorial call states that registered HPC Asia 2027 attendees may join tutorials without an additional tutorial fee. There is no tutorial-only registration.",
      "zh": "按会议 Tutorial 通知，已注册 HPC Asia 2027 的参会者参加Tutorial无需额外付费；会议不提供仅限 Tutorial 的注册类别"
    },
    "participate.a_small_preparation_checklist": {
      "en": "A small preparation checklist",
      "zh": "轻量课前准备"
    },
    "participate.laptop_modern_browser_wi_fi": {
      "en": "Laptop, modern browser, Wi-Fi",
      "zh": "笔记本电脑、现代浏览器和 Wi-Fi"
    },
    "participate.the_core_lab_uses_a_hosted": {
      "en": "The core lab uses a hosted browser environment.",
      "zh": "核心实验通过托管浏览器环境完成"
    },
    "participate.python_or_shell_basics": {
      "en": "Python or shell basics",
      "zh": "基础 Python 或 Shell 知识"
    },
    "participate.a_local_python_3_setup_is": {
      "en": "A local Python 3 setup is optional, for additional exploration.",
      "zh": "本地 Python 3 环境为可选项，可用于进一步探索"
    },
    "participate.no_personal_gpu_or_hpc_account": {
      "en": "No personal GPU or HPC account needed",
      "zh": "无需个人 GPU 或超算账户"
    },
    "participate.prepared_datasets_and_compute_access_support": {
      "en": "Prepared datasets and compute access support the guided exercise.",
      "zh": "引导实验将配套准备好的数据和计算资源访问"
    },
    "participate.keep_the_researcher_in_the_loop": {
      "en": "Keep the researcher in the loop",
      "zh": "研究者始终参与关键决策"
    },
    "participate.review_generated_code_and_parameters_before": {
      "en": "Review generated code and parameters before approving execution.",
      "zh": "执行前审查生成的代码与参数，再批准计算任务"
    },
    "speakers.meet_the_team": {
      "en": "MEET THE TEAM",
      "zh": "讲者团队"
    },
    "speakers.title": {
      "en": "Built by the people teaching it.",
      "zh": "与平台建设者一起动手"
    },
    "speakers.the_yatcc_team_at_sun_yat": {
      "en": "The YatCC team at Sun Yat-sen University brings together systems research, platform engineering and hands-on teaching.",
      "zh": "来自中山大学的 YatCC 团队，将系统研究、平台开发与实践教学带到Tutorial现场"
    },
    "speakers.session_leader": {
      "en": "SESSION LEADER",
      "zh": "Tutorial负责人"
    },
    "speakers.associate_professor_sun_yat_sen_university": {
      "en": "Associate Professor · Sun Yat-sen University",
      "zh": "张献伟 · 中山大学副教授"
    },
    "speakers.leads_the_arcsysu_research_group_his": {
      "en": "Leads the arcSYSu research group. His research spans GPU systems, compilers, runtimes and HPC/AI infrastructure, with industry experience at AMD and NVIDIA and a Ph.D. from the University of Pittsburgh.",
      "zh": "领导 arcSYSu 研究组，研究方向涵盖 GPU 系统、编译与运行时、HPC 和 AI 基础设施。曾在 AMD 和 NVIDIA 工作或实习，获匹兹堡大学计算机科学博士学位。"
    },
    "speakers.homepage": {
      "en": "Homepage",
      "zh": "个人主页"
    },
    "speakers.contact": {
      "en": "Contact",
      "zh": "联系讲者"
    },
    "speakers.school_of_computer_science_and_engineering": {
      "en": "School of Computer Science<br>and Engineering<br>Sun Yat-sen University",
      "zh": "中山大学<br>计算机学院"
    },
    "faq.before_you_join": {
      "en": "BEFORE YOU JOIN",
      "zh": "常见问题"
    },
    "faq.title": {
      "en": "A few practical details.",
      "zh": "参与前，了解这些"
    },
    "faq.have_a_specific_question_get_in": {
      "en": "Have a specific question? <a class='text-link' href='mailto:zhangxw79@mail.sysu.edu.cn'>Get in touch.</a>",
      "zh": "有其他问题？<a class='text-link' href='mailto:zhangxw79@mail.sysu.edu.cn'>联系Tutorial团队。</a>"
    },
    "faq.do_i_need_experience_with_yatcc": {
      "en": "Do I need experience with YatCC or LLM serving?",
      "zh": "需要提前使用过 YatCC 或部署过大模型吗？"
    },
    "faq.no_prior_yatcc_experience_or_gpu": {
      "en": "No prior YatCC experience or GPU administration experience is required. The tutorial is intermediate overall, but introductory walkthroughs make it accessible to participants new to LLM serving. Basic Python or shell and batch-job concepts will help.",
      "zh": "无需 YatCC 使用经验，也不要求 GPU 管理经验。Tutorial整体为中级难度，但通过入门讲解帮助初次接触大模型服务的参与者上手。建议具备基础 Python 或 Shell 知识并了解批处理作业概念。"
    },
    "faq.will_agents_run_generated_code_automatically": {
      "en": "Will agents run generated code automatically?",
      "zh": "Agent 会自动执行生成的代码吗？"
    },
    "faq.the_guided_workflow_includes_an_explicit": {
      "en": "The guided workflow includes an explicit human review and approval step before computation is submitted. Participants inspect the proposed code, adjust parameters and check results against reference outputs, while preserving the execution record.",
      "zh": "引导工作流在提交计算前设置明确的人工审查和批准步骤。参与者检查代码、调整参数，将结果与参考输出核对，并保留完整执行记录。"
    },
    "faq.what_if_live_generation_or_connectivity": {
      "en": "What if live generation or connectivity is unavailable?",
      "zh": "如果实时生成或网络连接不可用怎么办？"
    },
    "faq.the_tutorial_plan_includes_reference_scripts": {
      "en": "The tutorial plan includes reference scripts, prepared outputs, screenshots and recorded demonstrations as fallback materials. These support discussion and verification when live services are unavailable; hands-on hosted access still requires connectivity.",
      "zh": "Tutorial计划配备参考脚本、预生成输出、截图与录制演示作为备用材料，便于在实时服务不可用时继续讲解和验证。在线托管环境的实际操作仍需要网络连接。"
    },
    "faq.can_i_adapt_the_workflow_for": {
      "en": "Can I adapt the workflow for my own institution?",
      "zh": "可以迁移到自己所在机构的环境吗？"
    },
    "faq.yes_the_reference_architecture_and_reusable": {
      "en": "Yes—the reference architecture and reusable workflow template are intended to support adaptation. Institutional deployment must account for model access, scheduler policies, resource isolation, permissions, data staging and budget limits. The closing discussion covers these trade-offs.",
      "zh": "可以。参考架构与可复用工作流模板旨在支持环境适配。机构部署需结合模型访问、调度策略、资源隔离、权限、数据预备及预算限制；Tutorial最后将讨论这些取舍。"
    },
    "closing.meet_us_in_seoul": {
      "en": "Meet us in Seoul.",
      "zh": "首尔见，一起构建科研新工作流"
    },
    "closing.february_19_2027_hpc_asia_2027": {
      "en": "February 19, 2027 · HPC Asia 2027 · Yonsei University",
      "zh": "2027 年 2 月 19 日 · HPC Asia 2027 · 延世大学"
    },
    "closing.browse_the_materials": {
      "en": "Browse the materials",
      "zh": "查看Tutorial材料"
    },
    "closing.explore_yatcc": {
      "en": "Explore YatCC",
      "zh": "体验 YatCC 平台"
    },
    "footer.sun_yat_sen_university": {
      "en": "Sun Yat-sen University",
      "zh": "中山大学"
    },
    "footer.yatcc_home": {
      "en": "YatCC home",
      "zh": "YatCC 主页"
    },
    "footer.official_tutorial_info": {
      "en": "Official tutorial info",
      "zh": "官方信息"
    },
    "footer.contact": {
      "en": "Contact",
      "zh": "联系我们"
    },
    "navigation.main_navigation_label": {
      "en": "Main navigation",
      "zh": "页面导航"
    },
    "hero.interactive_reference_architecture_label": {
      "en": "Interactive reference architecture",
      "zh": "可交互的参考架构示意"
    },
    "hero.explore_the_workflow_label": {
      "en": "Explore the workflow",
      "zh": "探索工作流步骤"
    },
    "materials.filter_materials_label": {
      "en": "Filter materials",
      "zh": "筛选学习材料"
    },
    "conference.baekyang_nuri_at_yonsei_university_conference_alt": {
      "en": "Baekyang Nuri at Yonsei University, conference venue in Seoul",
      "zh": "HPC Asia 2027 首尔会场：延世大学 Baekyang Nuri"
    }
  },
  "agenda": [
    {
      "time": "00–20",
      "title": {
        "en": "Why intelligent HPC workspaces?",
        "zh": "为什么需要智能 HPC 工作空间？"
      },
      "type": {
        "en": "Concepts · audience poll · reference architecture",
        "zh": "概念讲解 · 现场交流 · 参考架构"
      },
      "body": {
        "en": "Identify the fragmentation between model services, data, environments and compute. Map the components of a persistent workspace and discuss where agents can help a scientific task.",
        "zh": "识别模型服务、数据、软件环境与计算资源之间的割裂，理解持久化工作空间的组成，讨论 Agent 如何协助完成科学任务。"
      },
      "id": "motivation"
    },
    {
      "time": "20–50",
      "title": {
        "en": "Private LLM services in practice",
        "zh": "私有大模型服务实践"
      },
      "type": {
        "en": "Walkthrough · live demonstration",
        "zh": "流程讲解 · 现场演示"
      },
      "body": {
        "en": "Explore an open-weight model such as Qwen on institution-managed infrastructure. Cover model selection, accelerator memory, batching, an OpenAI-compatible endpoint and basic inference metrics.",
        "zh": "以 Qwen 等开放权重模型为例，介绍机构自主管理环境下的模型选择、加速器显存、批处理、OpenAI 兼容接口与基础推理性能指标。"
      },
      "id": "model-serving"
    },
    {
      "time": "50–80",
      "title": {
        "en": "Connect models, data and compute",
        "zh": "连接模型、数据和算力"
      },
      "type": {
        "en": "Demonstration · guided configuration",
        "zh": "功能演示 · 引导配置"
      },
      "body": {
        "en": "Connect an AI hub for routing and token accounting, add HPC/cloud execution adapters, stage datasets and define permissions and job controls. Relate these services to persistent workspace state.",
        "zh": "配置 AI Hub 的模型路由与 Token 用量记录，接入 HPC 或云执行适配器，预备数据集，设置权限和作业控制，并理解这些服务如何与工作空间状态协同。"
      },
      "id": "connect-services"
    },
    {
      "time": "80–90",
      "break": true,
      "title": {
        "en": "Break",
        "zh": "中场休息"
      },
      "id": "break"
    },
    {
      "time": "90–135",
      "title": {
        "en": "Build your scientific workflow",
        "zh": "构建科学工作流"
      },
      "type": {
        "en": "Guided hands-on lab · build",
        "zh": "动手实验 · 构建"
      },
      "body": {
        "en": "Inspect a prepared, openly redistributable dataset. Ask an agent to propose analysis code, review and adjust code and parameters, then approve and submit a parameterized computation.",
        "zh": "检查预先准备且可公开再分发的数据集，让 Agent 提议分析代码；人工审查并调整代码和参数，批准后提交参数化计算任务。"
      },
      "id": "build-workflow",
      "initiallyOpen": true
    },
    {
      "time": "135–165",
      "title": {
        "en": "Validate outputs and measure the workflow",
        "zh": "验证结果并测量工作流性能"
      },
      "type": {
        "en": "Guided hands-on lab · validate",
        "zh": "动手实验 · 验证"
      },
      "body": {
        "en": "Retrieve results, compare with reference checks and preserve execution records. Separate inference, data-transfer, queueing and computation time; record model versions, parameters, environment and human approvals for reproducibility.",
        "zh": "取回结果，对照参考检查进行验证并保存执行记录。区分推理、数据传输、排队和计算耗时，记录模型版本、参数、环境与人工批准过程，支持复现。"
      },
      "id": "validate-workflow"
    },
    {
      "time": "165–180",
      "title": {
        "en": "Adapt, discuss and take it further",
        "zh": "迁移适配、交流与延伸"
      },
      "type": {
        "en": "Deployment trade-offs · Q&A",
        "zh": "部署取舍 · 问答交流"
      },
      "body": {
        "en": "Discuss adapting the architecture to your institution, performance and reproducibility checklists, resource policies and open research opportunities.",
        "zh": "讨论如何将参考架构适配到所在机构，梳理性能与复现检查清单、资源策略及后续研究机会。"
      },
      "id": "discussion"
    }
  ],
  "resources": [
    {
      "id": "guide",
      "icon": "file",
      "format": "MARKDOWN",
      "url": {
        "en": null,
        "zh": null
      },
      "title": {
        "en": "Before you arrive",
        "zh": "课前准备指南"
      },
      "desc": {
        "en": "Audience, prerequisites, what to bring and how the hosted lab works.",
        "zh": "适合人群、知识准备、携带物品，以及托管实验的参与方式。"
      },
      "file": {
        "en": "materials/guide.en.md",
        "zh": "materials/guide.zh.md"
      }
    },
    {
      "id": "architecture",
      "icon": "network",
      "format": "SVG",
      "url": {
        "en": null,
        "zh": null
      },
      "title": {
        "en": "Reference architecture",
        "zh": "参考架构图"
      },
      "desc": {
        "en": "A portable diagram connecting models, data, compute and human review.",
        "zh": "连接模型、数据、算力与人工审查的可缩放架构示意图。"
      },
      "file": {
        "en": "materials/architecture.en.svg",
        "zh": "materials/architecture.zh.svg"
      }
    },
    {
      "id": "checklist",
      "icon": "review",
      "format": "MARKDOWN",
      "url": {
        "en": null,
        "zh": null
      },
      "title": {
        "en": "Performance & reproducibility",
        "zh": "性能与复现检查清单"
      },
      "desc": {
        "en": "What to measure, record and verify in a scientific workflow.",
        "zh": "梳理科学工作流中应测量、记录和验证的关键事项。"
      },
      "file": {
        "en": "materials/checklist.en.md",
        "zh": "materials/checklist.zh.md"
      }
    },
    {
      "id": "slides",
      "icon": "slides",
      "format": "SLIDES",
      "url": {
        "en": null,
        "zh": null
      },
      "title": {
        "en": "Tutorial slides",
        "zh": "Tutorial讲义"
      },
      "desc": {
        "en": "Concepts, deployment walkthroughs and the end-to-end workflow.",
        "zh": "核心概念、部署讲解与端到端工作流的现场演示材料。"
      },
      "file": null
    },
    {
      "id": "lab",
      "icon": "code",
      "format": "CODE · DATA",
      "url": {
        "en": null,
        "zh": null
      },
      "title": {
        "en": "Hands-on lab kit",
        "zh": "动手实验材料"
      },
      "desc": {
        "en": "Example API calls, scripts, redistributable data and expected outputs.",
        "zh": "API 调用示例、实验脚本、可再分发数据与预期输出。"
      },
      "file": null
    },
    {
      "id": "deployment",
      "icon": "compute",
      "format": "CONFIG · CONTAINERS",
      "url": {
        "en": null,
        "zh": null
      },
      "title": {
        "en": "Deployment recipes",
        "zh": "部署与环境配置"
      },
      "desc": {
        "en": "Setup instructions, container recipes and backend configuration examples.",
        "zh": "环境准备说明、容器配置与执行后端接入示例。"
      },
      "file": null
    }
  ],
  "workflowSteps": [
    {
      "en": "<strong>Connect.</strong> Bring a model endpoint, managed data and an execution backend into one persistent workspace.",
      "zh": "<strong>接入。</strong>将模型接口、统一管理的数据与执行后端，连接到同一个持久化工作空间。"
    },
    {
      "en": "<strong>Review.</strong> Inspect the agent’s proposed analysis code and parameters. A researcher approves the computation.",
      "zh": "<strong>审查。</strong>检查 Agent 提议的分析代码与参数，由研究者批准计算任务。"
    },
    {
      "en": "<strong>Execute.</strong> Stage inputs, submit the approved job and retrieve results under backend permissions and scheduler policies.",
      "zh": "<strong>执行。</strong>预备输入、提交已批准作业并取回结果，遵循后端权限与调度策略。"
    },
    {
      "en": "<strong>Validate.</strong> Check reference outputs, measure the workflow and preserve versions, logs and human decisions.",
      "zh": "<strong>验证。</strong>对照参考输出，测量工作流性能，保留版本、日志和人工决策记录。"
    }
  ],
  "leader": {
    "name": "Xianwei Zhang",
    "initials": "XZ"
  },
  "speakers": [
    {
      "name": "Yuhao Gu",
      "initials": "YG",
      "role": {
        "en": "Ph.D. student researcher",
        "zh": "博士研究生"
      },
      "focus": {
        "en": "HPC infrastructure",
        "zh": "HPC 基础设施"
      }
    },
    {
      "name": "Tianyu Guo",
      "initials": "TG",
      "role": {
        "en": "Ph.D. student researcher",
        "zh": "博士研究生"
      },
      "focus": {
        "en": "LLM deployment",
        "zh": "大模型部署"
      }
    },
    {
      "name": "Zhongchun Zheng",
      "initials": "ZZ",
      "role": {
        "en": "Ph.D. student researcher",
        "zh": "博士研究生"
      },
      "focus": {
        "en": "HPC workspaces",
        "zh": "HPC 工作空间"
      }
    },
    {
      "name": "Bingjie Liu",
      "initials": "BL",
      "role": {
        "en": "Master’s student researcher",
        "zh": "硕士研究生"
      },
      "focus": {
        "en": "Serving & workflow demos",
        "zh": "模型服务与工作流演示"
      }
    },
    {
      "name": "Xin Huang",
      "initials": "XH",
      "role": {
        "en": "Master’s student researcher",
        "zh": "硕士研究生"
      },
      "focus": {
        "en": "Serving & workflow demos",
        "zh": "模型服务与工作流演示"
      }
    }
  ]
};

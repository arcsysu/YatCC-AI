# 贡献指北

## 开始 quick 'n dirty

1. 一定准备好一个包管理器, in case you dont have one
   - windows: check out [**`scoop`**](https://scoop.sh/#/)
   - ubuntu: you got `apt`
   - archlinux: i use `yay`, but `paru` may be better

2. 安装 `node/npm + pnpm`
   - 推荐直接运行仓库脚本，一次性补齐 `node`、`npm` 和项目所需主版本的 `pnpm`:

   ```bash
   ./scripts/install-pnpm.sh
   ```

   - Windows PowerShell:

   ```bash
   .\scripts\install-pnpm.ps1
   ```

   - 如果系统里还没有 `node` / `npm`，脚本会先尝试通过系统包管理器自动安装
   - `pnpm` 会优先通过 `corepack` 下载并启用
   - 如果你的环境没有可用的 `corepack`，会回退到 `npm install -g`
   - 也可以手动指定版本，例如:

   ```bash
   PNPM_VERSION=pnpm@10 ./scripts/install-pnpm.sh
   ```

3. 安装依赖

   ```bash
   pnpm install
   ```

4. 开造！
   - 调试

     ```bash
     pnpm dev
     ```

   - 构建

     ```bash
     pnpm build
     ```

   - 本地预览构建结果

     ```bash
     pnpm preview
     ```

   - 可选格式化

     ```bash
     pnpm prettier -w .
     ```

5. feel free to push，但至少先确认你改的页面能正常打开

## Astro quick 'n dirty

1. component usage
   1. import
   
      在 `.astro` 文件最上面的 frontmatter 里 `import` 其他组件，然后像 HTML 标签一样使用，例如引入 [Card](src/components/Card.astro) 之后写 `<Card />`

      ```astro
      ---
      import Card from "@/components/Card.astro";
      ---

      <Card title="Example">hello</Card>
      ```

   2. props
   
      组件参数和 React 那套意思差不多，父组件传，子组件在 `Astro.props` 里取；适合传标题、链接、状态、class 之类结构信息

      ```astro
      --- src/components/Example.astro
      const { title } = Astro.props;
      ---

      <h2>{title}</h2>
      ```

      ```astro
      --- src/contents/index.astro
      import Example from "@/components/Example.astro";
      ---

      <Example title="YatCC AI" />
      ```

   3. slot
   
      slot 用来把一整段子内容塞进组件里，适合做壳子组件；如果一个组件主要负责“布局容器”而不是“具体文案”，优先考虑 slot

      ```astro
      --- src/components/Shell.astro
      ---

      <section>
        <slot />
      </section>
      ```

      ```astro
      --- src/contents/index.astro
      import Shell from "@/components/Shell.astro";
      ---

      <Shell>
        <h1>Hello</h1>
        <p>Some content</p>
      </Shell>
      ```

2. asset import
   
   图片、svg 之类资源一般从 [src/assets](src/assets/) 或 `public/` 引入；在 Astro 里可以像模块一样 `import img from "...png"` 再传给组件

   ```astro
   ---
   import logo from "@/assets/yatcc-icon.png";
   ---

   <img src={logo.src} width={logo.width} height={logo.height} alt="YatCC" />
   ```

3. page content 尽量写在 [src/contents](src/contents/) 里，不要把具体文案塞进通用组件
   
   简单说就是：`components` 负责“长什么样”，`contents` 负责“写什么内容”；页面文案、卡片文字、section 标题这些都尽量放在 `contents`

   ```astro
   --- src/components/Hero.astro
   const { title, subtitle } = Astro.props;
   ---

   <header>
     <h1>{title}</h1>
     <p>{subtitle}</p>
   </header>
   ```

   ```astro
   --- src/contents/index.astro
   import Hero from "@/components/Hero.astro";
   import { getLangFromUrl } from "@/i18n/utils";

   const lang = getLangFromUrl(Astro.url);
   const t = <T,>(value: { zh: T; en: T }) => value[lang];
   ---

   <Hero
     title="YatCC AI"
     subtitle={t({
       zh: "中文介绍",
       en: "English introduction",
     })}
   />
   ```

## 项目结构

1. 组件 [src/components](src/components/)
   1. 全局布局 [BaseLayout](src/layouts/BaseLayout.astro)

      每一个路由页的最外层一般都会经过它，负责默认排版、主题和全局结构

   2. 单页壳子 / 页面骨架
      1. [HomePageShell](src/components/HomePageShell.astro)

         首页内容壳子，只负责整体结构和 slot，不负责具体文案

      2. [TeachingPracticePageShell](src/components/TeachingPracticePageShell.astro)

         教学实践页内容壳子，只负责整体结构和 slot，不负责具体文案

   3. 页面片段组件
      1. [HomeHero](src/components/HomeHero.astro)
      2. [HomeFeatureSection](src/components/HomeFeatureSection.astro)
      3. [TeachingHero](src/components/TeachingHero.astro)
      4. [TeachingOverview](src/components/TeachingOverview.astro)
      5. [TeachingShowcase](src/components/TeachingShowcase.astro)

   4. 页面布局组件
      1. [FixPage](src/components/FixPage.astro) + [FixPageContainer](src/components/FixPageContainer.astro)

         固定高度页

      2. [SnapPage](src/components/SnapPage.astro) + [SnapContainer](src/components/SnapContainer.astro)

         吸附式页面布局

      3. [FeatureDisplayPage](src/components/FeatureDisplayPage.astro) + [FeatureDisplayPageFeature](src/components/FeatureDisplayPageFeature.astro)

         功能展示页及其中的 feature 卡片

   5. 基础 UI
      1. [DarkLightButton](src/components/DarkLightButton.astro)

         随主题明暗变化的黑/白按钮

      2. [Button](src/components/Button.astro)

         主题色按钮

      3. [OutlinedButton](src/components/OutlinedButton.astro)

         描边按钮

      4. [ButtonGroup](src/components/ButtonGroup.astro)

         按钮组容器

      5. [Card](src/components/Card.astro) + [CardContainer](src/components/CardContainer.astro)

         卡片及卡片容器

      6. [Badge](src/components/Badge.astro)

         小标签

   6. 导航 / 链接
      1. [Link](src/components/Link.astro)
      2. [NavDropdown](src/components/NavDropdown.astro)
      3. [Topbar](src/components/Topbar.astro)
      4. [YatccTopbar](src/components/Yatcc/YatccTopbar.astro)

         YatCC 默认导航栏

   7. 主题 / 装饰 / 其他
      1. [ThemeManager](src/components/ThemeManager.astro)
      2. [ThemeToggleButton](src/components/ThemeToggleButton.astro)
      3. [DragonParticles](src/components/DragonParticles.astro)

         llvm 龙样粒子效果，基于 three.js，一般做背景

      4. [HomeTitle](src/components/HomeTitle.astro)
      5. [Footer](src/components/Footer.astro)
      6. [IntroductionPage](src/components/IntroductionPage.astro)
      7. [ChatPannel](src/components/ChatPannel.astro)

   8. 原则
      - `components` 尽量保持无具体内容耦合
      - 优先用 `props`、`slot`、shell/component 组合内容
      - 如果一个组件里开始堆很多具体文案，通常应该拆去 [src/contents](src/contents/)

2. 内容 [src/contents](src/contents/)
   1. 这里放“有具体页面内容”的 Astro 文件，而不是通用组件
   2. 文件名尽量和页面 slug 对应
      - 首页: [index.astro](src/contents/index.astro)
      - 教学实践: [teaching-practice.astro](src/contents/teaching-practice.astro)
   3. 页面文案 i18n 采用 inline 形式，靠近实际渲染位置，例如：

      ```ts
      const t = <T,>(value: { zh: T; en: T }) => value[lang];
      ```

      ```astro
      <h1>{t({ zh: "中文标题", en: "English Title" })}</h1>
      ```

   4. 不要再新建集中式 page-content dictionary，除非真的有明确复用需求

3. 路由 [src/pages](src/pages/)
   1. 无语言前缀路由入口 [\[...slug].astro](<src/pages/[...slug].astro>)

      负责把 `/`、`/teaching-practice` 这类路径重定向到默认语言

   2. 带语言前缀路由入口 [\[lang]/\[...slug].astro](<src/pages/[lang]/[...slug].astro>)

      负责把 `/zh/...`、`/en/...` 分发到对应 contents 页面

   3. 目前内容页需要在这个文件里注册 slug，新增页面时记得一起改

   4. 现有中文文档页 [src/pages/zh/about.md](src/pages/zh/about.md)

4. i18n [src/i18n](src/i18n/)
   1. [ui.ts](src/i18n/ui.ts)

      放共享导航、按钮等全局短文本

   2. [utils.ts](src/i18n/utils.ts)

      放 `getLangFromUrl`、`useTranslations`、`useTranslatedPath` 这些通用工具

   3. 页面正文内容不要再回到这里集中维护

5. 其他
   1. 全局样式 [src/styles](src/styles/)
   2. 字体资源 [src/fonts](src/fonts/)
   3. 静态资源 / 图片 [src/assets](src/assets/)
   4. 构建配置 [astro.config.mjs](astro.config.mjs)

## 新增页面 quick 'n dirty

1. 在 [src/contents](src/contents/) 新建一个同 slug 文件
2. 在 [\[lang]/\[...slug].astro](<src/pages/[lang]/[...slug].astro>) 里注册这个 slug
3. 如果希望无语言前缀也能访问，在 [\[...slug].astro](<src/pages/[...slug].astro>) 里也加上这个 slug
4. 内容写在 `contents`，结构拆到 `components`

## 贡献时尽量保持

1. 改动尽量小而准
2. 命名尽量直接，不要为了“抽象”而抽象
3. 如果你改了路由、contents 结构或 i18n 约定，请顺手更新这个文件

# 贡献指北

## 开始 quick 'n dirty

1. 一定准备好一个包管理器, in case you dont have one
   - windows: check out [**`scoop`**](https://scoop.sh/#/)
   - ubuntu: you got `apt`

   - archlinux: i use `yay`, but `paru` may be better

2. 安装 `pnpm`，其实其他都行但是我用的这个
   - windows: `scoop install pnpm`
   - archlinux: `yay -S pnpm`

3. 安装依赖

   `pnpm install`

4. 开造！
   - 调试 `pnpm run dev`

   - TODO: 或许加一些 prettier 指令...

5. feel free to push

## 更新内容

1. 参照 [开始 quick 'n dirty](#开始-quick-n-dirty) 配好环境

2. 修改指定内容
   1. 组件 [src/components](src/components/)
      1. 全局布局 [BaseLayout](src/layouts/BaseLayout.astro)

         每一个路由页的最外层用这个包起来用于默认排版，也可以自定义排版

      2. 单页布局

         每个路由页都由若干个 Page 上下相接组成，比如:
         1. [FixPage](src/components/FixPage.astro) + [FixPageContainer](src/components/FixPageContainer.astro) 固定高度页

         2. [SnapPage](src/components/SnapPage.astro) 带吸附的页

      3. 按钮
         1. [DarkLightButton](src/components/DarkLightButton.astro) 随主题明暗变化的黑/白按钮

         2. [Button](src/components/Button.astro) 主题色按钮

      4. 链接 [Link](src/components/Link.astro)

      5. 下拉菜单 [NavDropdown](src/components/NavDropdown.astro)

      6. 顶部导航栏 [Topbar](src/components/Topbar.astro)
         1. Yatcc 默认导航栏 [YatccTopbar](src/components/Yatcc/YatccTopbar.astro)

      7. 特效组件
         1. [DragonParticles](src/components/DragonParticles.astro) llvm 龙样粒子效果，基于 three.js 和 vibe coding，一般做背景

      8. 更多组件等待各位补充完善**实现**

   2. 路由 [src/pages](src/pages/)
      1. 可以仿照 [index.html](src/pages/zh/index.astro) 完成一整页

      2. `zh/` 下为中文页面，`en/` 下为英文页面

~~如果你实在看不懂 astro 咋改，那你直接提需求告诉我我来改吧 QAQ~~

## 规范

迭代完再看看

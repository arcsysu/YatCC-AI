---
title: YatCC AI 博客系统上线
summary: 主页时间线、统一博客详情页和 markdown 内容目录已经串联完成，后续只需新增文章文件即可扩展。
date: 2026-05-18
lang: zh
category: Product
pinned: true
---

这一版博客系统的目标不是先做复杂 CMS，而是先把最核心的内容流打通：

- 在 `src/content/blog/` 中维护 markdown 文章
- 通过统一布局渲染为博客详情页
- 在首页的 timeline/news 区域自动读取最新文章
- 点击时间节点直接跳转到对应博客页面

后续如果需要，我们还可以继续补标签、分页、封面图和中英文互链。

/// hope主题相关的设置

import { hopeTheme, type ThemeOptions } from "vuepress-theme-hope";
import { themeOptions2 } from "./theme_cover.js"
import { themeOptions3 } from "./theme_git.js"

export const themeOptions: ThemeOptions = {
  // 信息类
  hostname: "LincZero.github.io",
  author: {
    name: "LincZero",
    url: "https://github.com/LincZero/",
  },
  repo: "LincZero/LincZero.github.io",
  logo: "/logo.svg",

  // 导航类
  docsDir: "src",
  locales: { // 多语言配置
    "/": {
      navbar: [ {text: "/", link: "/"} ],
      sidebar: { "/": "structure" },
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },
  // navbar:
  // sidebar:
  // metaLocales: {
  //   editLink: "在 GitHub 上编辑此页",
  // },
  toc: true,
  headerDepth: 6,
  sidebarSorter: ["readme", "order", "filename"],

  // 开发类
  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 插件类 - md // 与旧api不同
  markdown: {
    // mdit - 容器语法
    // alert: true,       // 被 obsidain callout 代替
    align: true,          // mdit容器 - 对齐
    attrs: true,          // mdit容器 - 属性
    tabs: true,           // mdit容器 - 标签页
    codeTabs: true,       // mdit容器 - 代码块分组
    demo: true,           // mdit容器 - 代码演示 // 注意变更: https://plugin-md-enhance.vuejs.press/zh/migration.html#%E5%8F%98%E6%9B%B4

    // mdit - 内联语法
    mark: true,           // ==高亮==
    sub: true,            // _子项_
    sup: true,            // ^上标^
    imgLazyload: true,    // 懒加载图片
    // imgSize: true,     // 图片大小, ![Alt](/example.bmp =x300)
    // include: true,     // 导入其他文件，`<!-- @include: filename -->`，@WARN 版本较低时，启用的话会和mdit插件那边的 `md.render()` 冲突

    // mdit - 文生图类
    mermaid: true,        // 在启用之前安装 mermaid
    markmap: true,
    plantuml: true,
    // echarts: true,     // 在启用之前安装 echarts
    // flowchart: true,   // 在启用之前安装 flowchart.ts
    // chartjs: true,     // 在启用之前安装 chart.js
    // figure: true,      // Figure 图表工具
    math: true,           // 数学公式
    // markdownMath: {    // (这个疑似有bug)
    //   // 启用前安装 katex
    //   type: "katex",
    //   // 或者安装 mathjax-full
    //   // type: "mathjax",
    // },

    // 其他
    tasklist: true,       // 任务列表
    // component: true,   // insert component easily
    // gfm: true,         // Github风格的md，是CommonMark的超集，GitHub Flavored Markdown，见 https://github.github.com/gfm/
    spoiler: true,
    // stylize: [         // 样式化工具
    //   {
    //     matcher: "Recommended",
    //     replacer: ({ tag }) => {
    //       if (tag === "em")
    //         return {
    //           tag: "Badge",
    //           attrs: { type: "tip" },
    //           content: "Recommended",
    //         };
    //     },
    //   },
    // ],
    // vPre: true,        // Vue 预处理，Mustache 语法
    // revealjs: {        // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },
    // playground: {      // 在线代码演示设置
    //   presets: ["ts", "vue"],
    // },
    // vuePlayground: true, // 在启用之前安装 @vue/repl
    // sandpack: true,    // 在启用之前安装 sandpack-vue3
  },

  // 插件类 - 非md
  plugins: {
    seo: true,            // 搜索引擎优化
    // comment: {         // 评论插件
    //   provider: "Giscus",
    //   repo: "vuepress-theme-hope/giscus-discussions",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",
    // },
    components: {         // 内置组件
      components: ["PDF"], // "Badge", "VPCard"
    },
    icon: {               // icon组件
      prefix: "fa6-solid:",
    },
    docsearch: {          // 文档搜索插件
      appId: "247IUCFQ4Q",
      apiKey: "b8883b05027bfa9fc73f21286ed7395e", // 707332eeb6a1daf0e6ecfbb63e27afbc
      indexName: "linczeroio"
    },
    blog: {               // 博客系统
      article: "/MdNote_BlogHide/",
    },
    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
};

export default hopeTheme(
  { ...themeOptions, ...(themeOptions3 as any), ...(themeOptions2 as any) },
  { custom: true }
);

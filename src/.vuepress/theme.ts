/// hope主题相关的设置

import { hopeTheme } from "vuepress-theme-hope";
import { navbarConfig } from "./theme_navbar";
import { sidebarConfig } from "./theme_sidebar";

export default hopeTheme(
  {
    // 信息类
    hostname: "http://192.168.0.101:8080/",
    author: {
      name: "LincZero",
      url: "https://github.com/LincZero/",
    },
    repo: "LincZero/LincZero.github.io",
    iconAssets: "fontawesome-with-brands",
    logo: "/logo.svg",

    // 导航类
    docsDir: "src",
    locales: {
      "/": {
        navbar: navbarConfig,
        sidebar: sidebarConfig,
        metaLocales: {
          editLink: "在 GitHub 上编辑此页",
        },
      },
    },
    toc: true,
    headerDepth: 6,
    sidebarSorter: ["readme", "order", "filename"],
    encrypt: {
      config: {
        "/MdNote_Private/": ["dfajiohjffolwseinf"],
        "/MdNote_Work/个人信息/": ["Boss直聘123", "Boss123", "boss123", "58同城123", "58123", "前程无忧123", "51123", "猎聘123", "智联招聘123"],
        "/MdNote_Public/03.%20SkillAndProduction": ["789456123"],
      },
    },

    // 插件类
    plugins: {
      seo: true,            // 搜索引擎优化
      docsearch: {          // 文档搜索插件
        appId: "247IUCFQ4Q",
        apiKey: "b8883b05027bfa9fc73f21286ed7395e", // 707332eeb6a1daf0e6ecfbb63e27afbc
        indexName: "linczeroio"
      },
      blog: {               // 博客系统
        article: "/MdNote_BlogHide/",
      },
      components: {         // 内置组件 (有很多类型，这里就不加不使用的类型了)
        components: ["PDF"]
      },
      // comment: {},       // 评论系统的配置
      mdEnhance: {          // 扩展 Markdown 的功能 (通常是markdown-it插件)
        // mdit - 容器语法
        // alert: true,     // 被 obsidain callout 代替
        align: true,        // mdit容器 - 对齐
        attrs: true,        // mdit容器 - 属性
        demo: true,         // mdit容器 - 代码演示 // 注意变更: https://plugin-md-enhance.vuejs.press/zh/migration.html#%E5%8F%98%E6%9B%B4
        tabs: true,         // mdit容器 - 标签
        codetabs: true,     // mdit容器 - 代码块分组

        // mdit - 内联语法
        mark: true,         // ==高亮==
        sub: true,          // _子项_
        sup: true,          // ^上标^
        imgLazyload: true,  // 懒加载图片
        // imgSize: true,   // 图片大小, ![Alt](/example.bmp =x300)
        // include: true,   // 导入其他文件，`<!-- @include: filename -->`，@WARN 版本较低时，启用的话会和mdit插件那边的 `md.render()` 冲突

        // mdit - 文生图类
        katex: true,        // TeX数学公式渲染工具 (二选一，katex), install katex before enabling it
        // mathjax: true,   // TeX数学公式渲染工具 (二选一，mathjax), mathjax-full before enabling it
        mermaid: true,      // Mermaid 图表工具, install mermaid before enabling it
        markmap: true,      // 思维导图，pnpm add -D markmap-lib markmap-toolbar markmap-view
        // plantuml: true,  // Plantuml 图表工具
        // chart: true,     // 图表 install chart.js before enabling it
        // echarts: true,   // Echarts 图表工具，install echarts before enabling it
        // flowchart: true, // 流程图，install flowchart.ts before enabling it
        // figure: true,    // Figure 图表工具

        // 其他
        // component: true, // insert component easily
        // gfm: true,       // Github风格的md，是CommonMark的超集，GitHub Flavored Markdown，见 https://github.github.com/gfm/
        // playground: {    // 在线代码演示设置
        //   presets: ["ts", "vue"], // 预设
        // },
        // vuePlayground: true, // Vue 实验场, install @vue/repl before enabling it
        // revealJs: {      // install reveal.js before enabling it
        //   plugins: ["highlight", "math", "search", "notes", "zoom"],
        // },
        // stylize: [       // 样式化工具
        //   {              // 匹配器
        //     matcher: "Recommended",
        //                  // 替换器，这里判断如果标签为 "em" 就替换成 "Badge" 标签，并设置相关的属性和内容
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
        // vPre: true,      // Vue 预处理，Mustache 语法
      },
    }
  },
  {
    custom: true
  }
);

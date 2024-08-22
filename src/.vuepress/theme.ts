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
    sidebarSorter: "filename",
    encrypt: {
      config: {
        "/MdNote_Private/": ["dfajiohjffolwseinf"],
        "/MdNote_Work/个人信息/": ["Boss直聘123", "Boss123", "boss123", "58同城123", "58123", "前程无忧123", "51123", "猎聘123", "智联招聘123"],
        "/MdNote_Public/03. 生活技能与生活生产": ["789456123"],
      },
    },

    // 插件类
    plugins: {
      docsearch: {
        appId: "247IUCFQ4Q",
        apiKey: "b8883b05027bfa9fc73f21286ed7395e", // 707332eeb6a1daf0e6ecfbb63e27afbc
        indexName: "linczeroio"
      },
      blog: { // 博客系统
        article: "/MdNote_BlogHide/",
      },
      // comment: {}, // 评论系统的配置
      mdEnhance: { // 扩展 Markdown 的功能
        // mdit - 容器语法
        alert: true, // obsidain callout
        align: true, // mdit容器 - 对齐
        attrs: true, // mdit容器 - 属性
        demo: true, // mdit容器 - 代码演示
        tabs: true, // mdit容器 - 标签

        // mdit - 内联语法
        imgLazyload: true, // 懒加载图片
        // imgSize: true, // 图片大小, ![Alt](/example.bmp =x300)
        // include: true, // 导入其他文件，`<!-- @include: filename -->`，@WARN 启用的话会和mdit插件那边的 `md.render()` 冲突
        mark: true, // ==高亮==
        sub: true, // _子项_
        sup: true, // ^上标^

        // mdit - 文生图类
        katex: true, // TeX数学公式渲染工具 (二选一，katex), install katex before enabling it
        // mathjax: true, // TeX数学公式渲染工具 (二选一，mathjax), mathjax-full before enabling it
        mermaid: true, // Mermaid 图表工具, install mermaid before enabling it
        markmap: true, // 思维导图，pnpm add -D markmap-lib markmap-toolbar markmap-view
        // plantuml: true, // Plantuml 图表工具
        // chart: true,  // 图表 install chart.js before enabling it
        // echarts: true, // Echarts 图表工具，install echarts before enabling it
        figure: true, // Figure 图表工具
        // flowchart: true, // 流程图，install flowchart.ts before enabling it

        // 其他
        codetabs: true, // 代码块分组
        // component: true, // insert component easily
        // gfm: true, // GFM 警告，类似ob的callout
        playground: { // 在线代码演示设置
          presets: ["ts", "vue"], // 预设
        },
        // revealJs: { // install reveal.js before enabling it
        //   plugins: ["highlight", "math", "search", "notes", "zoom"],
        // },
        stylize: [ // 样式化工具
          {
            matcher: "Recommended", // 匹配器
            replacer: ({ tag }) => { // 替换器
              if (tag === "em") // 如果标签为 "em"
                return {
                  tag: "Badge", // 替换为 "Badge" 标签
                  attrs: { type: "tip" }, // 设置属性
                  content: "Recommended", // 设置内容
                };
            },
          },
        ],
        vPre: true, // Vue 预处理，Mustache 语法
        // vuePlayground: true, // Vue 种植场, install @vue/repl before enabling it
      },
    }
  },
  {
    custom: true
  }
);

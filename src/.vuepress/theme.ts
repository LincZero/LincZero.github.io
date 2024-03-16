import { hopeTheme } from "vuepress-theme-hope"; // 从 "vuepress-theme-hope" 导入 hope 主题

// 导出默认的主题配置
export default hopeTheme({
  // ******************* 信息类 *****************************

  hostname: "http://192.168.0.101:8080/", //设置网站主机名
  author: { // 设置作者信息
    name: "LincZero", // 作者姓名
    url: "https://github.com/LincZero/", // 作者网站链接
  },
  repo: "LincZero/LincZero-Vuepress", // 仓库地址
  iconAssets: "fontawesome-with-brands", // 使用 FontAwesome 图标库
  logo: "/logo.svg", // 设置 logo 路径

  // ******************* 配置类 - 导航 **********************

  docsDir: "src", // 存放文档的目录
  locales: {
    // "/en/": { // 英文
    //   // navbar: enNavbar, // 导航栏
    //   sidebar: "structure", // 侧边栏
    //   // footer: "Default footer", // 页脚文本
    //   // displayFooter: true, // 显示页脚
    //   metaLocales: {
    //     editLink: "Edit this page on GitHub", // Github上编辑该页的文本
    //   },
    // },
    "/": {
      // navbar: zhNavbar,
      sidebar: "structure",
      // footer: "默认页脚",
      // displayFooter: true,
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },
  toc: true,
  headerDepth: 6,

  // ******************* 配置类 - 内容 **********************

  plugins: { // 插件配置
    // comment: {}, // 评论系统的配置

    mdEnhance: { // 扩展 Markdown 的功能
      align: true, // 对齐
      attrs: true, // 属性
      // chart: true,  // 图表 install chart.js before enabling it
      codetabs: true, // 代码标签
      demo: true, // 演示
      // component: true, // insert component easily
      // echarts: true, // Echarts 图表工具，install echarts before enabling it
      figure: true, // Figure 图表工具
      // flowchart: true, // 流程图，install flowchart.ts before enabling it
      // gfm: true, // GitHub 风格的 Markdown，gfm requires mathjax-full to provide tex support
      imgLazyload: true, // 懒加载图片
      imgSize: true, // 图片大小
      include: true, // 包括
      // katex: true, // TeX数学公式渲染工具 (二选一，katex), install katex before enabling it
      // mathjax: true, // TeX数学公式渲染工具 (二选一，mathjax), mathjax-full before enabling it
      mark: true, // 标记
      // mermaid: true, // Mermaid 图表工具, install mermaid before enabling it
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
      sub: true, // 子项
      sup: true, // 上标
      tabs: true, // 标签
      vPre: true, // Vue 预处理
      // vuePlayground: true, // Vue 种植场, install @vue/repl before enabling it
    },
  }
},
{ custom: true }
);

// 该文件特点：
// 1. 个性化强，默认值都是一些设置默认值不太合适的点
// 2. 但所有内容都是非必须的
// 3. 可手写也可被自动生成。通常由不依赖底层的描述+适配器生成
// 使用时需要注意浅拷贝问题

import { navbarConfig } from "./theme_navbar";
import { sidebarConfig } from "./theme_sidebar";

export const themeOptions2 = {
  // 信息类
  hostname: "LincZero.github.io",
  // author: { // 全局默认作者
  //   name: "LincZero",
  //   url: "https://github.com/LincZero/",
  // },
  repo: "LincZero/LincZero.github.io",
  // iconAssets: "fontawesome-with-brands", // @deprecated
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
  displayFooter: true, copyright: false, footer: '自用，转载需要联系授权 | Copyright © 2015-present LincZero | Powered by <a href="https://github.com/LincDocs/Workflow">LincZero.github.io Workflow</a>',
  encrypt: {
    config: {
      "/MdNote_Private/": ["dfajiohjffolwseinf"],
      "/MdNote_Work/个人信息/": ["Boss直聘123", "Boss123", "boss123", "58同城123", "58123", "前程无忧123", "51123", "猎聘123", "智联招聘123"],
      "/MdNote_Public/03.%20SkillAndProduction": ["789456123"],
    },
  },

  // 导航类 - 布局
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "Repo", "Outlook", "Search", "ReadEnhance"],
  },

  // 插件类 - 非md
  plugins: {
    components: {         // 内置组件
      components: ["PDF"], // "Badge", "VPCard"
    },
    icon: {               // icon组件
      prefix: "fa6-solid:", // https://fontawesome.com/search?ip=classic&s=solid&o=r
      // assets: "fontawesome",
    },
    blog: {               // 博客系统
      article: "/MdNote_BlogHide/",
    },

    // 一些外部服务
    seo: true,            // 搜索引擎优化
    // 除了主文档用aligo的搜索服务外，其余快捷文档使用slimsearch
    // slimsearch: {
    //   // indexContent: true,
    //   // indexOptions: {
    //   //   // import { cut } from 'nodejs-jieba' // 注意：这个npm install时需要本地有: 有环境变量的python3.8+
    //   //   // 使用 nodejs-jieba 进行分词 (仅中文)
    //   //   tokenize: (text, fieldName) =>
    //   //     fieldName === 'id' ? [text] : cut(text, true),
    //   // },
    // },
    docsearch: {          // 文档搜索插件
      appId: "247IUCFQ4Q",
      apiKey: "b8883b05027bfa9fc73f21286ed7395e", // 707332eeb6a1daf0e6ecfbb63e27afbc
      indexName: "linczeroio"
    },
  },
}

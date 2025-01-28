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
  author: {
    name: "LincZero",
    url: "https://github.com/LincZero/",
  },
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
  // displayFooter: true, footer: "自用，未经许可禁止转载任何内容 | Copyright © 2015-present LincZero",
  encrypt: {
    config: {
      "/MdNote_Private/": ["dfajiohjffolwseinf"],
      "/MdNote_Work/个人信息/": ["Boss直聘123", "Boss123", "boss123", "58同城123", "58123", "前程无忧123", "51123", "猎聘123", "智联招聘123"],
      "/MdNote_Public/03.%20SkillAndProduction": ["789456123"],
    },
  },
}

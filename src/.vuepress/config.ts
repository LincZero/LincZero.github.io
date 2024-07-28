import { defineUserConfig } from "vuepress";        // vuepress

import theme from "./theme.ts";                     // hope主题 - 默认部分
import alias from "./alias.ts";                     // hope主题 - 别名扩展
import extendsMarkdown from "./mdit_plugin.ts";     // hope主题 - mdit扩展

export default defineUserConfig({
  
  // ------------------ 导航类 ------------------
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Linc 的小站",
      description: "Linc 的个人小站",
    },
  },
  markdown: {
    headers: {
      level: [1, 2, 3, 4, 5, 6] // 不然的话toc会受限
    },
  },

  // ------------------ 扩展类 ------------------
  theme,
  alias,
  extendsMarkdown,

  // ------------------ 其他 ---------------------
  // 使网页成为PWA
  // shouldPrefetch: false, // 是否预获取
});

import { defineUserConfig } from "vuepress"; // vuepress
import { getDirname, path } from "@vuepress/utils" // vuepress别名系统，需要：pnpm install -D @vuepress/utils
import theme from "./theme.ts"; // hope主题
import alias from "./alias.ts"; // hope主题

const __dirname = getDirname(import.meta.url)
export default defineUserConfig({
  // 导航类
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
    }
  },

  // 扩展类
  theme,
  alias,

  // 其他
  // 使网页成为PWA
  // shouldPrefetch: false, // 是否预获取
});

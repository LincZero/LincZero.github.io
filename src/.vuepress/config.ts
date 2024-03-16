import { defineUserConfig } from "vuepress"; // 从 "vuepress" 导入定义用户配置的方法
import theme from "./theme.js"; // 从当前目录下的 "theme.js" 文件导入主题

// 使用定义的用户配置导出一个默认的配置对象
export default defineUserConfig({
  // ******************* 配置类 - 特殊 **********************

  theme, // 使用导入的主题

  // ******************* 配置类 - 导航 **********************

  base: "/", // 设置基本目录路径

  locales: { // 设置多语言配置
    // "/en/": {
    //   lang: "en-US", // 设定语言为美式英语
    //   title: "Docs Demo", // 设定标题
    //   description: "A docs demo for vuepress-theme-hope", // 设定描述
    // },
    "/": {
      lang: "zh-CN",
      title: "Linc 的小站",
      description: "Linc 的个人小站",
    },
  },
  markdown: {
    headers: {
      level: [1,2,3,4,5,6] // 不然的话toc会受限
    }
  },

  // ******************* 配置类 - 其他 **********************
  // 使网页成为PWA
  // shouldPrefetch: false, // 是否预获取
});

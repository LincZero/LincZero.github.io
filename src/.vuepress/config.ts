/// VuePress 相关的设置

import { App, createPage, defineUserConfig, type UserConfig } from "vuepress"; // vuepress

import theme from "./theme.ts";                               // hope主题 - 默认部分
// import alias from "./config_alias.ts";                     // hope主题 - 别名扩展
import extendsMarkdown from "./config_extendsMarkdown.ts";    // hope主题 - mdit扩展
import plugins from "./config_plugins.ts";                    // hope主题 - 插件扩展

import { userConfig2 } from './config_cover.js'
import { userConfig3 } from './config_git.js'

const userConfig: UserConfig = {
  // ------------------ 导航类 ------------------
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "个人知识库",
      description: "这仅仅是一个个人知识库",
    },
  },
  markdown: {
    headers: {
      level: [1, 2, 3, 4, 5, 6] // 不然的话toc会受限
    },
  },
  pagePatterns: [
    "**/*.md", "!**/*.snippet.md",
    "**/*.json", // "**/*.pdf"
    "!.vuepress", "!node_modules", "!**/.obsidian", "!**/.github",
  ],

  // ------------------ 扩展类 ------------------
  theme,
  // alias,
  extendsMarkdown,
  plugins,

  // ------------------ 其他 ---------------------
  // 使网页成为PWA
  // shouldPrefetch: false, // 是否预获取
}

// 其实不应该直接深拷贝/浅拷贝合并，特别是对于sidebar和navbar配置来说，覆盖才是对的。条件合并又会导致复杂性过高
// 深拷贝合并两个object
// deepMerge(userConfig, userConfig2) 代替 {...userConfig, ...userConfig2} 的语法，扩展运算符只能浅拷贝
// function deepMerge(target, ...sources) {
//   if (!sources.length) return target;
//   const result = { ...target };
//   sources.forEach(source => {
//     for (const key in source) {
//       if (source[key] instanceof Object) {
//         result[key] = deepMerge(result[key] || {}, source[key]);
//       } else {
//         result[key] = source[key];
//       }
//     }
//   });
//   return result;
// }

export default defineUserConfig({
  ...(userConfig as any),
  ...(userConfig3 as any),
  ...(userConfig2 as any)
});

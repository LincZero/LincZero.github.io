/// VuePress 相关的设置

import { defineUserConfig } from "vuepress";                  // vuepress

import theme from "./theme.ts";                               // hope主题 - 默认部分
import alias from "./config_alias.ts";                        // hope主题 - 别名扩展
import extendsMarkdown from "./config_extendsMarkdown.ts";    // hope主题 - mdit扩展
import plugins from "./config_plugins.ts";                    // hope主题 - 插件扩展

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
  pagePatterns: ["**/*.md", "**/*.json", "!**/*.snippet.md", "!.vuepress", "!node_modules"], // "**/*.pdf"

  // ------------------ 扩展类 ------------------
  theme,
  alias,
  extendsMarkdown,
  plugins,

  // ------------------ 扩展类 - 钩子 ------------
  async onInitialized(app) {
    /**
     * 对.json后缀进行处理 (需要先设置pagePatterns允许解析json，否则这里遍历不到json文件)
     * 这里编辑对应的page信息，视情况甚至可以createPage替换、新增、去除
     */
    for (const page of app.pages) {
      if (!page.path.endsWith(".json")) continue
      // console.log("旧页面信息---\n", page)
      // console.log("新页面信息---\n", newPage)
      {
        page.path = page.path+"/"
        page.frontmatter.layout = 'Layout'
        page.content = "```nodeflow-comfyui\n" + page.content + "\n```"
        if(page.sfcBlocks.template?.contentStripped) page.sfcBlocks.template.contentStripped = // HTML内容以这个为准
          app.markdown.render(page.content) // 重新渲染该页
      }
    }
  },

  // ------------------ 其他 ---------------------
  // 使网页成为PWA
  // shouldPrefetch: false, // 是否预获取
});

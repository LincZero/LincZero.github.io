/// VuePress 相关的设置

import { App, createPage, defineUserConfig } from "vuepress"; // vuepress

import theme from "./theme.ts";                               // hope主题 - 默认部分
import alias from "./config_alias.ts";                        // hope主题 - 别名扩展
import extendsMarkdown from "./config_extendsMarkdown.ts";    // hope主题 - mdit扩展
import plugins from "./config_plugins.ts";                    // hope主题 - 插件扩展

import * as fs from 'fs';                                     // 用于public静态资源扩展
import * as path from 'path';

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
  pagePatterns: [
    "**/*.md", "!**/*.snippet.md", "!.vuepress", "!node_modules",
    "**/*.json", // "**/*.pdf"
  ],

  // ------------------ 扩展类 ------------------
  theme,
  alias,
  extendsMarkdown,
  plugins,

  // ------------------ 扩展类 - 钩子 ------------
  /**
   * page变量的调试、实验
   * // 安全修改
   * {
   *   // page.filePath = ""
   *   // page.chunkName = ""
   *   // page.htmlFilePath = ""
   *   // page.htmlFilePathRelative = ""
   * }
   * // 非安全修改
   * {
   *   // page.filePathRelative = ""           // 侧边栏显示的关键
   *   // page.componentFilePath = ""          // 侧边栏正常，打开文件则运行报错
   *   // page.componentFilePathRelative = ""  // 编译报错
   *   // page.chunkFilePath = ""              // 运行报错
   *   // page.chunkFilePathRelative = ""      // 编译报错
   * }
   */
  async onInitialized(app: App) {
    /**
     * 对.json后缀进行处理 (需要先设置pagePatterns允许解析json，否则这里遍历不到json文件)
     * 这里编辑对应的page信息，视情况甚至可以createPage替换、新增、去除
     */
    for (let i = 0; i<app.pages.length; i++) {
      const page = app.pages[i]
      if (page.path.endsWith(".json")) {
        // console.log("旧页面信息---\n", page)
        // console.log("新页面信息---\n", newPage)
        page.path = page.path+"/"
        page.frontmatter.layout = 'Layout'
        page.content = "```nodeflow-comfyui\n" + page.content + "\n```"
        if(page.sfcBlocks.template?.contentStripped) page.sfcBlocks.template.contentStripped = // HTML内容以这个为准
          app.markdown.render(page.content) // 重新渲染该页 (好像删了某些东西就会自动重新渲染，不需要手动这一步？)
      }
      else if (page.path.endsWith(".pdf")) {}
    }

    /**
     * 遍历public静态资源，并将部分映射到虚拟页中
     * 
     * (注意这里必须要使用同步方法，不能用异步的!!! 否则可能在读完文件之前就开始其他步骤的解析了)
     * 旧版实验：
     * async function traverseDirectory(directory: string) {
     *   await fsPromise.readdir(directory, { withFileTypes: true }, async (err, files) => {})
     * await traverseDirectory("./src/.vuepress/public/docs");
     */
    {
      // 创建虚拟页
      // 注意：话说我将 `MdNote_Other` 修改成其他不存在的路径会有问题。即这里需要挂载在一个真实路径上! (TODO 也许是个bug，有空再修)
      async function fn_newPage(path: string) {
        const newPage = await createPage(app, {
          path: (`/MdNote_Other/docs/${path}/`), // TODO TMP
          frontmatter: { layout: 'Layout', },
          content: `# PUBLICDOCS/${path}\n<PDF url="/docs/${path}" height="1000px" zoom="auto" noFullscreen="false"/>`,
        })
        newPage.filePathRelative = `MdNote_Other/docs/${path}` // 侧边栏显示的关键
        app.pages.push(newPage)
      }

      // 读取public静态资源
      let files;
      try {
        files = await fs.readdirSync("./src/.vuepress/public/docs/", { withFileTypes: true, recursive: true })
      } catch {
        console.warn("without dir: ./src/.vuepress/public/docs/")
        files = []
      }
      for (const file of files) {
        // 跳过非pdf
        if (!file.name.endsWith(".pdf")) continue
        // 跳过目录 (无需手动递归)
        if (file.isDirectory()) { continue } // 由于前面开了递归模式，这里就不手动递归了
        // 如果是文件，添加对应的虚拟页
        let fullname = file.path.replace("src\\.vuepress\\public\\docs\\", "") // 这个fullname的路径构造很奇怪。根据是否有父目录，两种情况都会出现。可能和 `recursive: true` 和windows路径有关
        if (fullname != file.path) { fullname = fullname.replace(/\\/g, "/") + "/" } // 有父路径
        else fullname = fullname.replace("./src/.vuepress/public/docs/", "") // 无父路径
        fullname += file.name
        await fn_newPage(fullname)
      }
    }
  },

  // ------------------ 其他 ---------------------
  // 使网页成为PWA
  // shouldPrefetch: false, // 是否预获取
});

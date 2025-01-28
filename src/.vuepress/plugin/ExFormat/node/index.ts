import { App, createPage, defineUserConfig, type UserConfig } from "vuepress";

import * as fs from 'fs';                                     // 用于public静态资源扩展
import * as path from 'path';

export default (options, ctx) => {
  return {
    name: 'vuepress-plugin-pdf',
    onInitialized: onInitialized2
  }
}

// ------------------ 扩展类 - 钩子 ------------
// 这部分也可以直接写在config.ts根部
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
async function onInitialized2(app: App) {
  // 无h1可能会存在的问题:
  // 1. data.title, 会在正文顶部显示 (默认front>h1>空，视觉影响不大。但title可能会影响seo)
  // 2. shortTitle，会影响原侧边栏和翻页显示的文本 (默认h1>fullpath with encode, 后者极度丑陋)
  // 这里尽量填充一下这些问题
  for (let i = 0; i<app.pages.length; i++) {
    if (app.pages[i].data.title.length == 0) {
      let newPath = app.pages[i].data.path;
      newPath = ((page: string) => {
        const title_arr = page.split('/')
        let title = title_arr.pop()?.replace(/\.md$/, '').replace(/\.html$/, '')
        if (!title) return "undefined"
        if (title == "README" && title_arr.length>1) { title = title_arr[title_arr.length-2] + "/" }
        return decodeURIComponent(title)
      })(newPath);
      app.pages[i].data.title = newPath

      // app.pages[i].data.frontmatter.title = newPath
      // app.pages[i].frontmatter.title = newPath
      // app.pages[i].data.shortTitle = newPath
      // app.pages[i].shortTitle = newPath
      // app.pages[i].data.frontmatter.shortTitle = newPath
      // app.pages[i].frontmatter.shortTitle = newPath
      // app.pages[i].routeMeta.title = newPath
      app.pages[i].routeMeta.s = newPath // 有毒，这个才是真 "shortTitle"
    }
  }

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
}

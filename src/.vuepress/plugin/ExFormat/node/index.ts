/// 需要注意，默认情况下不在 `public` 中的 `.json、.pdf` 等扩展名不会被识别
/// 需要在 `/src/.vuepress/config.ts` 中允许匹配。例如我的设置：
/// pagePatterns: [
///   "**/*.md", "!**/*.snippet.md",
///   "**/*.json", // "**/*.pdf", (pdf不要加进去，不需要解析里面的内容)
///   "!.vuepress", "!node_modules", "!**/.obsidian", "!**/.github",
/// ],

import { App, createPage, defineUserConfig, type UserConfig } from "vuepress";
import { getDirname, path } from "@vuepress/utils"

import * as fs from 'fs';                                     // 用于public静态资源扩展

const __dirname = getDirname(import.meta.url)

export default (options, ctx) => {
  return {
    name: 'vuepress-plugin-exFormat',
    // clientConfigFile: path.resolve(__dirname, '../client/clientConfig.ts'),
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
  /**
   * 调试专用打印 app.pages 的工具
   * 
   * 会去除掉关于md内容的部分再打印，避免由于md内容过长而看不到其他信息的问题
   */
  // for (let i = 0; i<app.pages.length; i++) {
  //   const page = app.pages[i]
  //   const page2 = JSON.parse(JSON.stringify(page))
  //   if (page2.data.excerpt) delete page2.data.excerpt
  //   if (page2.content) delete page2.content
  //   if (page2.contentRendered) delete page2.contentRendered
  //   if (page2.routeMeta.e) delete page2.routeMeta.e
  //   if (page2.routeMeta.excerpt) delete page2.routeMeta.excerpt // .json才有
  //   if (page2.sfcBlocks) delete page2.sfcBlocks
  //   console.log("page---\n", page2)
  // }

  /**
   * 处理无h1的问题
   * 
   * 无h1可能会存在的问题:
   * 1. data.title, 会在正文顶部显示 (默认front>h1>空，视觉影响不大。但title可能会影响seo)
   * 2. shortTitle，会影响原侧边栏和翻页显示的文本 (默认h1>fullpath with encode, 后者极度丑陋)
   * 这里填充以尽量修复一下这些问题
   */
  for (let i = 0; i<app.pages.length; i++) {
    if (app.pages[i].data.title.length == 0) {
      let newPath = app.pages[i].data.path;
      newPath = ((page: string) => {
        const title_arr = page.split('/')
        let title = title_arr.pop()?.replace(/\.md$/, '').replace(/\.html$/, '')
        if (!title) return "/" // root
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
   * 处理 `.json` 扩展名
   * 
   * 对 .json` 扩展名进行处理 (需要先设置pagePatterns允许解析json，否则这里遍历不到json文件)
   * 这里编辑对应的page信息，视情况甚至可以createPage替换、新增、去除
   */
  for (let i = 0; i<app.pages.length; i++) {
    const page = app.pages[i]
    // vuepress旧版本 `page.path` 是 `.json.md` 和 `.json` 分别 `.json.html` 和 `.json` 结尾
    // 而新版本的 `.json.md` 和 `.json` 都是 `.json.html` 结尾，这可能导致bug
    // 所以这里修正为用 `page.filePath` 补充判断 (无对应文件的虚拟页没有该字段)
    if ((page.path.endsWith(".json") || page.path.endsWith(".json.html"))
      && (page.filePath as string)?.endsWith('.json')
    ) {
      // console.log("json类型---\n", page.path, page.filePath)
      page.path = page.path // vuepress旧版本要 +"/" 才能成功
      page.frontmatter.layout = 'Layout'
      page.content = "```nodeflow-comfyui\n" + page.content + "\n```"
      if(page.sfcBlocks.template?.contentStripped) page.sfcBlocks.template.contentStripped = // HTML内容以这个为准
        app.markdown.render(page.content) // 重新渲染该页 (好像删了某些东西就会自动重新渲染，不需要手动这一步？)
    }
    else if (page.path.endsWith(".pdf") || page.path.endsWith(".pdf.html")) {}
  }

  /**
   * 处理public静态资源
   * 
   * 遍历public静态资源，并将部分映射到虚拟页中。包括 pdf
   * 
   * (注意这里必须要使用同步方法，不能用异步的!!! 否则可能在读完文件之前就开始其他步骤的解析了)
   * 旧版实验：
   * async function traverseDirectory(directory: string) {
   *   await fsPromise.readdir(directory, { withFileTypes: true }, async (err, files) => {})
   * await traverseDirectory("./src/.vuepress/public/docs");
   * 
   * 话说新版本vuepress在dev环境下，pdf页失效。在build环境才正常回来
   */
  {
    // 创建虚拟目录
    // 
    // 因为如果后面创建虚拟页时将 `<path_target>` 修改成其他不存在的路径会有问题。即这里需要挂载在一个真实路径上!
    // 因为这时你访问 `/<path_target>/` 时，这个页面没有任何内容
    // 
    // 所以这里要加虚拟目录和虚拟 README.md
    // 
    // TODO: 这里仅构造了根的虚拟目录，还需要递归构造里面的虚拟目录
    const path_target = 'pdf_docs/' // TODO TMP
    {
      const newPage = await createPage(app, {
        path: (`/${path_target}`),
        content: `# Pdf Pages\n\nThis is a pdf page.`, // necessary
      })
      newPage.filePathRelative = null // show it's a virtual dir
      app.pages.push(newPage)

      // newPage.data.path = `/${path_target}`
      // newPage.data.filePathRelative = null
      // newPage.data.excerpt = ''

      // newPage.data.frontmatter.article = false
      // newPage.data.frontmatter.feed = false
      // newPage.data.frontmatter.sitemap = false
      // newPage.frontmatter.article = false
      // newPage.frontmatter.feed = false
      // newPage.frontmatter.sitemap = false

      // newPage.filePath = null
      // newPage.filePathRelative = `${path_target}`
    }

    // 创建虚拟页
    async function fn_newPage(path: string) {
      const newPage = await createPage(app, {
        path: (`/${path_target}${path}/`), // 核心1: 访问URL
        frontmatter: { layout: 'Layout', },
        content: `# PUBLICDOCS/${path}\n<!--path:/docs/${path}-->\n<PDF url="/docs/${path}" height="1000px" zoom="auto" noFullscreen="false"/>`,
      })
      newPage.filePathRelative = `${path_target}${path}` // 核心2: 侧边栏显示的关键、是否文件夹
      app.pages.push(newPage)
    }

    // 读取public静态资源
    let files;
    try {
      files = await fs.readdirSync("./src/.vuepress/public/docs/", { withFileTypes: true, recursive: true }) // 这里开的递归模式
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

  /**
   * 遍历src里的.pdf文件 (非.public)
   * 
   * 算了，感觉还是不妥当。pdf和md分开放会好一些，他们在性能和内存上存在较大区别
   * 
   * 所以没实现。不过 github 仓库倒是放一起的
   */
}

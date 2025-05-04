import callout_mdit from "markdown-it-obsidian-callouts" // https://github.com/ebullient/markdown-it-obsidian-callouts
import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links'
import { limit_img_alias, img_not_found } from "./plugins/limit_img_alias.js"

import chatview_mdit from "./plugins/ChatView/src/MarkdownIt/index_mdit.js"

import { ab_mdit, jsdom_init_ } from "./plugins/ABConvertManager/MarkdownIt/index.js" // 源码版 - 新
jsdom_init_()

// import ab_mdit from "./plugins/ABConvertManager/dist/index_mdit.js"     // 编译版tsc (成功)
// import ab_mdit from "./plugins/ABConvertManager/dist/index_mdit"        // 编译版tsup (使用失败 Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'markdown-it')
// import ab_mdit from "./plugins/ABConvertManager/dist/mdit-any-block.js" // 编译版vite
// import ab_mdit from "./plugins/ABConvertManager/src/index_mdit.js"      // 源码版
// import ab_mdit from "any-block-converter-markdown-it"                   // npm版

// @ts-ignore 找不到名称“markdownit”
export default  (md: markdownit) => {
  md.use(ab_mdit)
  md.use(chatview_mdit) // 这里要虚拟dom，让前面的ab_mdit模块给解决一下
  md.use(callout_mdit)
  md.use(BiDirectionalLinks({
    dir: "./src/",
    // baseDir: "/src2/",
    noNoMatchedFileWarning: true, // 找不到对应链接时忽略 (控制台不打印信息)
    stillRenderNoMatched: true,   // 找不到对应链接时依然生成链接
    // TODO 下面这个选项有一个bug: 其 `<a class="route-link" href=...>` 标签中的href没有转义，route-linke中文路径会导致404，要重新刷新一下才正常
    // isRelativePath: true,      // 强行使用相对路径 (双链引用图片在vuepress如果用绝对路径要加@source前缀)
  }))
  // md.use(img_not_found) // 必须在 limit_img_alias 插件之前use，然后执行顺序会在 limit_img_alias 之后
  md.use(limit_img_alias)
}

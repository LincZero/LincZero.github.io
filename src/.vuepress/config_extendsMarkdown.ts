import callout_mdit from "markdown-it-obsidian-callouts" // https://github.com/ebullient/markdown-it-obsidian-callouts
import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links'

import chatview_mdit from "./plugins/ChatView/src/MarkdownIt/index_mdit"

// import ab_mdit from "./plugins/ABConvertManager/dist/index_mdit.js"     // 编译版tsc (成功)
// import ab_mdit from "./plugins/ABConvertManager/dist/index_mdit"        // 编译版tsup (使用失败 Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'markdown-it')
// import ab_mdit from "./plugins/ABConvertManager/dist/mdit-any-block.js" // 编译版vite
import ab_mdit from "./plugins/ABConvertManager/src/index_mdit"            // 源码版
// import ab_mdit from "any-block-converter-markdown-it"                  // npm版

/*// JsDom。仅用于提供document对象支持 (如果Ob环境中则不需要，用ob自带document对象的)
import jsdom from "jsdom"
const { JSDOM } = jsdom
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`, {
  url: 'http://localhost/', // @warn 若缺少该行，则在mdit+build环境下，编译报错
});
// @ts-ignore 不能将类型“DOMWindow”分配给类型“Window & typeof globalThis”
global.Storage = function () { // @warn 若缺少改行，则在不知名环境下会出现"Storage is not defined"错误
  this.temp_method = function () {
  }
}
// @ts-ignore 不能将类型“DOMWindow”分配给类型“Window & typeof globalThis”
global.window = dom.window
global.history = dom.window.history // @warn 若缺少该行，则在mdit+build环境下，编译报错：ReferenceError: history is not defined
global.document = dom.window.document
global.NodeList = dom.window.NodeList
global.HTMLElement = dom.window.HTMLElement
global.HTMLDivElement = dom.window.HTMLDivElement
global.HTMLPreElement = dom.window.HTMLPreElement
global.HTMLQuoteElement = dom.window.HTMLQuoteElement
global.HTMLTableElement = dom.window.HTMLTableElement
global.HTMLUListElement = dom.window.HTMLUListElement
global.HTMLScriptElement = dom.window.HTMLScriptElement
dom.window.scrollTo = ()=>{} // @warn 若缺少该行，编译警告：Error: Not implemented: window.scrollTo*/

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
  md.use(limit_img_alias)
}

// #region 禁用img别名 (禁用非`@`开头的别名)
// ban img alias
// via deepseek
// 
// 实现：将渲染结果进行替换
// 机制: https://vuejs.press/zh/guide/assets.html#%E4%BE%9D%E8%B5%96%E5%8C%85%E5%92%8C%E8%B7%AF%E5%BE%84%E5%88%AB%E5%90%8D
// 举例: 将 `<img src="aaa/bbb">` 转化为 `<img src="./aaa/bbb">`，避免vuepress认定 `aaa` 为别名
// 
// 版本一弃用，应在解析阶段就完成替换，否则无用
function limit_img_alias1(md: any, options?: any): void {
  // 覆盖render方法以处理整个HTML输出
  const originalRender = md.render.bind(md);
  md.render = function (...args) {
    const html = originalRender(...args)
    return processImgTags(html)
  }

  // 同样处理行内渲染
  const originalRenderInline = md.renderInline.bind(md);
  md.renderInline = function (...args) {
    const html = originalRenderInline(...args)
    return processImgTags(html)
  }

  function processImgTags(html) {
    return html.replace(
      /(<img\b)([^>]*?\bsrc=)(['"])(?!\.\/|\/|http|@)([^'"]*?)(\3)/gi, // src
      (match, tagStart, attrs, quote, src, endQuote) => {
        // 排除协议链接和Data URLs
        // console.log('匹配到了----------------\n', match)
        if (/^(?:[a-z]+:)?\/\//i.test(src) || src.startsWith('data:')) {
          return match
        }
        return `${tagStart}${attrs}${quote}./${src}${endQuote}`
      }
    )
  }
}
function limit_img_alias(md: any, options?: any): void {
  // 在核心处理流程中插入自定义逻辑
  md.core.ruler.push('limit_img_alias', state => {
    state.tokens.forEach(token => {
      if (token.type === 'html_block' || token.type === 'html_inline') { // 同时处理块级和行内HTML标签
        token.content = processImgTags(token.content);
      }
    })
    return true
  })

  function processImgTags(html) {
    return html.replace(
      /(<img\b)(?=[^>]*?\bsrc=)([^>]*?\bsrc=)(['"])(?!\.\/|@|\/|https?:|data:)([^'"]*?)(\3)/gi, // src不以 `./ / @ https?: data:` 开头
      (match, tagStart, attrs, quote, src, endQuote) => {
        return `${tagStart}${attrs}${quote}./${src}${endQuote}`;
      }
    )
  }
}
// #endregion

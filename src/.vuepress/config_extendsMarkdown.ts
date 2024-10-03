import callout_mdit from "markdown-it-obsidian-callouts" // https://github.com/ebullient/markdown-it-obsidian-callouts

import ab_mdit from "./plugin/ABConvertManager/src/index_mdit"            // 源码版

// import ab_mdit from "any-block-converter-markdown-it"                  // npm版
// JsDom。仅用于提供document对象支持 (如果Ob环境中则不需要，用ob自带document对象的)
import jsdom from "jsdom"
const { JSDOM } = jsdom
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`, {
  url: 'http://localhost/', // @warn 若缺少该行，则在mdit+build环境下，编译报错
});
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
  md.use(callout_mdit)
}

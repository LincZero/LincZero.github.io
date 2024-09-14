import ab_mdit from "./plugin/ABConvertManager/src/index_mdit"     // 源码版 (成功)
// import ab_mdit from "./plugin/ABConvertManager/dist/index_mdit.js" // 编译版tsc (成功)
// import ab_mdit from "./plugin/ABConvertManager/dist/markdown-it-any-block.js" // 编译版vite (使用失败 Error [ERR_MODULE_NOT_FOUND])
// import ab_mdit from "./plugin/ABConvertManager/dist/markdown-it-any-block.cjs"
// import ab_mdit from "any-block-converter-markdown-it"              // npm版 (使用失败 Error [ERR_MODULE_NOT_FOUND]) https://www.npmjs.com/package/any-block-converter-markdown-it

import callout_mdit from "markdown-it-obsidian-callouts" // https://github.com/ebullient/markdown-it-obsidian-callouts

export default  (md: markdownit) => {
  md.use(ab_mdit)
  md.use(callout_mdit)
}

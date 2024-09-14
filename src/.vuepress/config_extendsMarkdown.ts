import ab_mdit from "./plugin/ABConvertManager/src/index_mdit"          // 源码版 (成功)
// import ab_mdit from "./plugin/ABConvertManager/dist/index_mdit.js"   // 编译版tsc (成功)
// import ab_mdit from "./plugin/ABConvertManager/dist/index_mdit"      // 编译版tsup (使用失败 Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'markdown-it')
// import ab_mdit from "./plugin/ABConvertManager/dist/markdown-it-any-block.js" // 编译版vite (使用失败 Error [ERR_MODULE_NOT_FOUND])
// import ab_mdit from "./plugin/ABConvertManager/dist/markdown-it-any-block.cjs"
// import ab_mdit from "any-block-converter-markdown-it"                // npm编译版 (使用失败 Error [ERR_MODULE_NOT_FOUND]) https://www.npmjs.com/package/any-block-converter-markdown-it
// import ab_mdit from "any-block-converter-markdown-it/src/index_mdit" // npm源码版 (使用失败 Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath)

import callout_mdit from "markdown-it-obsidian-callouts" // https://github.com/ebullient/markdown-it-obsidian-callouts

export default  (md: markdownit) => {
  md.use(ab_mdit)
  md.use(callout_mdit)
}

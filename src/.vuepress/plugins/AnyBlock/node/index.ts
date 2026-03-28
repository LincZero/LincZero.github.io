import { path } from "@vuepress/utils"

import { ab_mdit, ab_mdit_client } from "markdown-it-any-block"

const CLIENT_MODE = false
if (!CLIENT_MODE && typeof document === 'undefined') {
  // (可选) 如果你要在 node 环境渲染而非 client 中渲染，则加上下面的语句。在 client 端不要这样做
  import("markdown-it-any-block/node").then(({ jsdom_init }) => {
    jsdom_init(true, true)  // 如果模块根部有直接使用的，可能要改成 await jsdom_init() 同步操作
  })
}

export default (_options, _ctx) => {
  return {
    name: 'vuepress-plugin-any-block',
    clientConfigFile: path.resolve(__dirname, '../client/clientConfig.ts'),
    extendsMarkdown: (md: any)=>{
      if (CLIENT_MODE) md.use(ab_mdit_client)
      else md.use(ab_mdit)
    }
  }
}

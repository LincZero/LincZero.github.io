import { getDirname, path } from "@vuepress/utils"
import nodeflow_mdit from "./index_mdit"

export default (options, ctx) => {
  return {
    name: 'vuepress-plugin-vue-flow',
    clientConfigFile: path.resolve(__dirname, '../client/clientConfig.ts'),
    extendsMarkdown: (md: any)=>{
      md.use(nodeflow_mdit)
    }
  }
}

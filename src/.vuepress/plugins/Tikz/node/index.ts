import { getDirname, path } from "@vuepress/utils"
import tikz_mdit from './index_mdit'

export default (options, ctx) => {
  return {
    name: 'vuepress-plugin-tikz',
    clientConfigFile: path.resolve(__dirname, '../client/clientConfig.ts'),
    extendsMarkdown: (md: any)=>{
      md.use(tikz_mdit)
    }
  }
}

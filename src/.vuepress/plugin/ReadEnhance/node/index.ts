import { getDirname, path } from "@vuepress/utils" // vuepress别名系统，需要：pnpm install -D @vuepress/utils

const __dirname = getDirname(import.meta.url)

export default (options, ctx) => {
  return {
    name: 'vuepress-plugin-enhanced-readabilities',
    clientConfigFile: path.resolve(__dirname, '../client/clientConfig.ts'),
  }
}

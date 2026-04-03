import { getDirname, path } from "@vuepress/utils"
const __dirname = getDirname(import.meta.url)

export interface BatchBuildOptions {
  batchs: string[]
}

export default (options: BatchBuildOptions = {batchs: []}) => {
  return {
    name: 'vuepress-plugin-batch-build',
    define: { // 将配置注入为客户端可访问的编译时常量
      __BATCHBUILD_BATCHS__: options.batchs,
    },
    clientConfigFile: path.resolve(__dirname, '../client/clientConfig.ts'),
  }
}

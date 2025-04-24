import { App } from "vuepress";
import { getDirname, path } from "@vuepress/utils" // vuepress别名系统，需要：pnpm install -D @vuepress/utils
import { readFile } from "fs/promises";
import { resolve } from "path";

import { md2sidebar } from './mdBookTools.js'

const __dirname = getDirname(import.meta.url)

export default (options, ctx) => {
  return {
    name: 'vuepress-plugin-root-sidebar',
    clientConfigFile: path.resolve(__dirname, '../client/clientConfig.ts'),
    onInitialized: onInitialized2,
    // alias: {
    //   // 侧边栏
    //   "@theme-hope/modules/sidebar/composables/index":
    //     path.resolve(__dirname, "./module/sidebar/composables/index.ts"), // 文件名，但无法解决特殊符号名问题（#或+）
    //   "@theme-hope/modules/sidebar/components/SidebarLinks":
    //     path.resolve(__dirname, "./module/sidebar/components/SidebarLinks.ts"), // 不自动折叠

    //   // 通用
    //   "@theme-hope/utils/index":
    //     path.resolve(__dirname, "./module/utils/index.ts"), // 文件名、目录名
    // },
  }
}

/**
 * MdBook用工具
 * 
 * - MdBook 文档: https://llever.com/mdBook-zh/cli/init.zh.html
 * 
 * 可额外识别 MdBook 的一些配置格式，如 `/src/SUMMARY.md`，是 MdBook 的目录文件，会将其识别转换为 vuepress 的目录格式
 */
async function onInitialized2(app: App) {
  // 读取项目根目录下 src/SUMMARY.md 文件
  let mdStr = ''
  try {
    mdStr = await readFile(
      resolve(process.cwd(), "src/SUMMARY.md"),
      "utf-8"
    );
  } catch (err) {
    console.log("Failed to read SUMMARY.md");
  }

  // 转化为侧边栏数据
  const result = md2sidebar(mdStr)

  // 写入临时文件
  // 
  // 引入方法
  // import { sidebarData } from "@temp/theme-hope/sidebar.js";
  // import { sidebarData } from "@temp/theme-hope/sidebar2.js";
  // 其他: dir.temp()
  app.writeTemp('theme-hope/sidebar2.js', `export const sidebarData2 = ${JSON.stringify(result)}`)
}

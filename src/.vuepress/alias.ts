import { getDirname, path } from "@vuepress/utils" // vuepress别名系统，需要：pnpm install -D @vuepress/utils

const __dirname = getDirname(import.meta.url)

export default {
    // 侧边栏
    "@theme-hope/modules/sidebar/composables/index":
        path.resolve(__dirname, "../../module/sidebar/composables/index.ts"), // 文件名，但无法解决特殊符号名问题（#或+）
    "@theme-hope/modules/sidebar/components/SidebarLinks":
        path.resolve(__dirname, "../../module/sidebar/components/SidebarLinks.ts"), // 不自动折叠

    // 通用
    "@theme-hope/utils/index":
        path.resolve(__dirname, "../../module/utils/index.ts"), // 文件名、目录名
}

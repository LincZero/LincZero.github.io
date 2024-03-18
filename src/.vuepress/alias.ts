import { getDirname, path } from "@vuepress/utils" // vuepress别名系统，需要：pnpm install -D @vuepress/utils

const __dirname = getDirname(import.meta.url)

export default {
    // 侧边栏
    "@theme-hope/modules/sidebar/composables/index":
        path.resolve(__dirname, "../../module/sidebar/composables/index.ts"),
    "@theme-hope/modules/sidebar/components/SidebarLinks":
        path.resolve(__dirname, "../../module/sidebar/components/SidebarLinks.ts"),

    // 其他
}

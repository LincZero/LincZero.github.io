import { getDirname, path } from "@vuepress/utils" // vuepress别名系统，需要：pnpm install -D @vuepress/utils

const __dirname = getDirname(import.meta.url)

export default {
    "@theme-hope/modules/sidebar/components/SidebarLinks":
        path.resolve(__dirname, "../../module/sidebar/components/SidebarLinks.ts")
}

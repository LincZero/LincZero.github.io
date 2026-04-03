import { defineClientConfig } from 'vuepress/client'
import { useRouter } from 'vuepress/client'

declare const __BATCHBUILD_BATCHS__: string[] // 由 node/index.ts 通过 define() 注入的编译时常量

export default defineClientConfig({
  setup() {
    newPageHook_init(__BATCHBUILD_BATCHS__)
  },
})

/// 当路径进入/例外 watchedPrefixes 定义的某个批次，则视为越过边界，将强制进行一次页面刷新
function newPageHook_init(watchedPrefixes: string[] = []): void {
  const router = useRouter()

  // 判断路径前缀属于哪个批次，若都不匹配则返回 null
  const getMatchedPrefix = (path: string): string | null =>
    watchedPrefixes.find(prefix => path.startsWith(prefix)) ?? null

  // 在每次路由跳转前拦截
  router.beforeEach((to, from) => {
    const fromPrefix = getMatchedPrefix(from.path)
    const toPrefix   = getMatchedPrefix(to.path)

    // 两端匹配到的前缀不同，则视为跨越边界，强制 hard reload 到目标页面
    if (fromPrefix !== toPrefix) {
      window.location.href = to.fullPath // 直接让浏览器跳转到目标 URL，触发完整页面加载，完全绕过 vue-router 软导航
      return false // 取消 vue-router 自身的导航（此时 hard reload 已接管）
    }
  })
}

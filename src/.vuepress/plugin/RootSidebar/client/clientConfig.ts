import { defineClientConfig, usePageData } from 'vuepress/client'
import { nextTick, watch } from 'vue'

import SlotDemo from "./SlotDemo.vue"
import NewLayout from "./NewLayout.vue"
import {Layout} from "vuepress-theme-hope/client/export.js";

export default defineClientConfig({
  setup() { // ({app})
    // newPageHook_init()
  },
  enhance: ({ app, router, siteData }) => {
    // app.component("RootSidebar", RootSidebar);
  },
  layouts: {
    OldLayout: Layout, // 允许手动使用回旧布局
    Layout: NewLayout,
    // Layout: RootSidebar,
  },
  rootComponents: [],
})

/**
 * 调用：客户端加载时被调用
 * 
 * @deprecated 弃用, 组件中使用watch监听
 */
function newPageHook_init (): void {
  // 一些参数准备
  // console.log("newPageHook_init")
  const page = usePageData()
  const enabled = true

  /**
   * 全局 - 事件
   * 
   * 调用频率：每个页面加载出来后被调用一次
   */
  const newPageHookFn = async (): Promise<void> => {}

  /**
   * 事件触发的开始位置
   * 
   * 注意这里的watch需要有vue组件的支持
   * 
   * 每个页面加载出来后会自动调用一次。原理：监听 page.value.path 和 enabled.value，两个值中任意一个发生变化时触发回调
   */
  watch(() => [page.value.path, enabled], newPageHookFn, {
    immediate: true,
  })
}

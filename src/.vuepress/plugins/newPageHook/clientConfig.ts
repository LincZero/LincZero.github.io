import { defineClientConfig } from 'vuepress/client'

import { nextTick, watch } from 'vue'
import { usePageData } from 'vuepress/client'

import { abConvertEvent } from '../ABConvertManager/ABConverter/ABConvertEvent.js'

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export default defineClientConfig({
  setup() { // ({app})
    newPageHook_init()
  },
})

/**
 * 调用：客户端加载时被调用
 */
function newPageHook_init (
  delay = 1000,
  showInMobile = false,
): void {
  // 一些参数准备
  // console.log("newPageHook_init")
  const page = usePageData()
  const enabled = true

  /**
   * 全局 - 事件
   * 
   * 调用频率：每个页面加载出来后被调用一次
   */
  const newPageHookFn = async (): Promise<void> => {
    // console.log("newPageHook_fn", page.value.path)
    await nextTick()
    await wait(delay/4) // 分两次更新，能确保响应够快，同时慢修改加载慢的东西
    abConvertEvent(document)
    await wait(delay/4*3)
    abConvertEvent(document)
  }

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

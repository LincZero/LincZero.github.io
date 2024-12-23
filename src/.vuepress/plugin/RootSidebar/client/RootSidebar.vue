<!--
使用注意：要求一定要在sidebar配置中包含一个："/": "structure"

- RootSidebar: 该组件多个侧边栏只会调用一次，数据只在url变化时更新
- RootSidebarContent: 该组件每个侧边栏会调用一次
- RootSidebarItem: 该组件每个侧边栏文件夹会调用一次
-->

<template>
  <div>
    <div>
      <div class="debug">targetDeep: {{ targetDeep }}</div>
      <div class="debug">targetPath: {{ targetPath }}</div>
      <div class="debug">targetFolder: {{ targetFolder }} ({{ targetData.length }})</div>
    </div>
    <RootSidebarItem
      :deep="0"
      :sidebarData="targetData"
    />
  </div>
</template>

<script setup lang="ts">
import { sidebarData } from "@temp/theme-hope/sidebar.js"; // 在client端获取侧边栏数据
import { usePageData, useRoute } from 'vuepress/client'
import { type ComputedRef, type Ref, computed, onMounted, ref, watch } from 'vue';
import RootSidebarItem from "./RootSidebarItem.vue"

/**
 * 侧边栏类型, 单string表示text
 * 不算太优雅，但我这里在Client端就不再去转化归一化了，避免目录树较大时影响性能
 * 主要是text这个值是vuepress-theme-hope算的，优先使用h1的值，不是我预期的。我这个组件以文件名为主，不会用到
 */
type SidebarType = "string" | {
  children: Array<SidebarType>,
  collapsible: boolean,
  prefix: string,
  text: string,
}

// 数据获取
if (!sidebarData.hasOwnProperty("/")) { console.error(`Error: Must be add a {"/": "structure"} in sidebar config`) }
const rootData = ref(sidebarData["/"] as SidebarType[]) // 从根部开始的数据 (ATTENTION 要求一定要在sidebar配置中包含一个"/"struct)
const currentUrl = ref(window.location.href)            // 当前url
const targetDeep = ref<number>(0)                       // 指定目录深度 (不会超过当前目录的最大深度)
const targetPath = ref<string>("/")                     // 指定目录路径
const targetFolder = ref("/")                           // 指定目录名称
const targetData = ref(rootData.value);                 // 指定目录开始的数据

/// 钩子与回调
/// 每次切换url时被调用 (存在多个侧边栏也只调用一次)
function onNewUrl() {
  currentUrl.value = window.location.href

  // 更新值 - targetDeep
  // 解析url参数，获取state参数
  function getQueryVariable(variable) {
    const vars = window.location.search.substring(1).split("&"); // windows.当前链接.查询部分.去掉第一个字符(?).以&分割
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] == variable) {
        return pair[1];
      }
    }
    return null;
  }
  targetDeep.value = parseInt(getQueryVariable("deep") || "0")

  // 更新值 - targetPath, 校正 targetDeep
  const calc_targetPath = () =>{
    const pathname = window.location.pathname
    // http... -> /path1/path2/path3.html -> ["", "path1", "path2", "path3.html"] -> ["", "path1", "path2"]
    // http... -> /path1/path2 -> ["", "path1", "path2"] -> ["", "path1", "path2"]
    // http... -> /path1/path2/ -> ["", "path1", "path2", ""] -> ["", "path1", "path2"]
    let dirArr = pathname.split("/")
    if (pathname.endsWith("/") || dirArr[dirArr.length - 1].includes(".")) dirArr.pop()
    
    // deep0: /
    // deep1: /path1/
    // deep2: /path1/path2/
    if (targetDeep.value > dirArr.length-1) {
      targetDeep.value = dirArr.length-2
      console.warn(`Warning: The deep value is too large, reset deep: ${targetDeep.value}`)
    }
    targetPath.value = dirArr.slice(0, targetDeep.value+1).join("/") + "/"
  }
  calc_targetPath()

  // 更新值 - targetData, 校正 targetPath, targetDeep
  const calc_targetData = () => {
    let tmp_arr = rootData.value
    const targetPath_arr = targetPath.value.split("/").slice(1, -1) // /path1/path2/ -> ["path1", "path2"]
    for (let i = 0; i < targetPath_arr.length; i++) { // 遍历url
      for (let j = 0; j < tmp_arr.length; j++) { // 遍历children中是否有对应的prefix
        const item = tmp_arr[j]
        if (typeof item === 'string') continue
        if (item.prefix === targetPath_arr[i] + "/") {
          targetFolder.value = item.prefix.slice(0, -1)
          tmp_arr = item.children
          break
        }
        if (j===tmp_arr.length-1) { // url和侧边栏数据不匹配
          targetDeep.value = i
          calc_targetPath()
          console.warn(`Warning: Can't find the path: ${targetPath_arr[i]}, reset deep: ${i}`)
          return
        }
      }
    }
    targetData.value = tmp_arr
    console.log("targetData:", tmp_arr)
  }
  calc_targetData()
}
onMounted(() => {
  onNewUrl()
})
watch(() => useRoute().value, () => {
  onNewUrl()
})

// 仅调试
const isDebug = false
if (isDebug) {
  // test url: http://localhost:8080/MdNote_Public/Test.html?deep=1&state=s2#h2
  console.log("debug usepagedata ---------------------------------")
  console.log("p1", usePageData())              // Object，一个包含了当前页面数据的对象 {lang, path, forntmatter, ...}
  console.log("p2", usePageData().value.router) // undefined
  console.log("p3", usePageData().value.path)   // /MdNote_Public/Test.html
  console.log("r1", useRoute().value)           // undefined
  console.log("s1", sidebarData)                // Object, 一个纯侧边栏数据对象，[ self-childern结构 ]
  console.log("w1", window.location)            // Location {hash, host, hostname, href, origin, pathname, port, protocol, search}
  console.log("w2", window.location.href)       // http://localhost:8080/MdNote_Public/Test.html?state=s1&state2=s2#h2
}
</script>

<style scoped lang="scss">
.debug {
  border: solid 1px currentColor;
  padding: 4px;
  white-space: pre;
  overflow-x: auto;
}
</style>

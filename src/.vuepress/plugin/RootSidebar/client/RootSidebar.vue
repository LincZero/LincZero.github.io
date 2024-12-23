<!--
使用注意：要求一定要在sidebar配置中包含一个："/": "structure"

- RootSidebar: 该组件多个侧边栏只会调用一次，数据只在url变化时更新
- RootSidebarContent: 该组件每个侧边栏会调用一次 (未支持)
- RootSidebarItem: 该组件每个侧边栏文件夹会调用一次
-->

<template>
  <div>
    <div>
      <div class="breadcrumb">
        <span class="arrow left" @click="() => { onNewUrl(targetDeep-1) }" :relDeep="-999"><</span>
        <span class="arrow right" @click="() => { onNewUrl(targetDeep+1) }" :relDeep="-999">></span>
        <!-- TODO: 下拉框，路径下拉表示、排序、固定伪标签页 -->
        <span v-for="(item,index) in currentPathArr"
          @click="() => {onNewUrl(index)}" :relDeep="index - targetDeep">
          <span :title="decodeURIComponent(item) + '/'">
            {{ decodeURIComponent(item) + "/" }}
          </span>
        </span>
      </div>
    </div>
    <RootSidebarItem
      :deep="0"
      :sidebarData="targetData"
      :prefix="targetFolder+'/'"
      :currentPath="currentPath"
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
  prefix: string, // 仅一层前缀
  text: string,
}

// 数据获取
// current基于完整的url
// target基于按截取截取后的url
if (!sidebarData.hasOwnProperty("/")) { console.error(`Error: Must be add a {"/": "structure"} in sidebar config`) }
const rootData = ref(sidebarData["/"] as SidebarType[]) // 从根部开始的数据 (ATTENTION 要求一定要在sidebar配置中包含一个"/"struct)
const currentPath = ref(window.location.pathname)       // 当前url
const currentPathArr = ref<string[]>([])                // 当前url数组 (["", "path1", "path2"], 不包含文件名)
const targetDeep = ref<number>(0)                       // 指定目录深度 (不会超过当前目录的最大深度)
const targetPath = computed(()=>{                       // 指定目录路径
  // deep0: /
  // deep1: /path1/
  // deep2: /path1/path2/
  return currentPathArr.value.slice(0, targetDeep.value+1).join("/") + "/"
})
const targetFolder = computed(()=>{                     // 指定目录名称
  return currentPathArr.value[targetDeep.value]
})
const targetData = ref(rootData.value);                 // 指定目录开始的数据

/// 钩子, 与回调进行数据更新
/// 每次切换url时被调用 (存在多个侧边栏也只调用一次)
function onNewUrl(newDeep?: number) {
  // 更新值 - currentPath, currentPathArr
  currentPath.value = window.location.pathname
  // http... -> /path1/path2/path3.html -> ["", "path1", "path2", "path3.html"] -> ["", "path1", "path2"]
  // http... -> /path1/path2 -> ["", "path1", "path2"] -> ["", "path1", "path2"]
  // http... -> /path1/path2/ -> ["", "path1", "path2", ""] -> ["", "path1", "path2"]
  let dirArr = currentPath.value.split("/")
  if (currentPath.value.endsWith("/") || dirArr[dirArr.length - 1].includes(".")) dirArr.pop()
  currentPathArr.value = dirArr

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
  targetDeep.value = (newDeep !== undefined && newDeep >= 0) ? newDeep : parseInt(getQueryVariable("deep") || "0")
  // 限制、校正
  if (targetDeep.value > currentPathArr.value.length-1) {
    targetDeep.value = currentPathArr.value.length-2
    console.warn(`Warning: The deep value is too large, reset deep: ${targetDeep.value}`)
  }

  // 更新值 - targetData, 校正 targetPath, targetDeep
  const calc_targetData = () => {
    let tmp_arr = rootData.value
    for (let deep = 1; deep < targetDeep.value+1; deep++) { // 遍历url。从1找起是因为rootData一开始就已经被提取过"/"层了
      for (let j = 0; j < tmp_arr.length; j++) {            // 遍历children中是否有对应的prefix
        const item = tmp_arr[j]
        if (typeof item === 'string') continue
        if (item.prefix === currentPathArr.value[deep] + "/") {
          tmp_arr = item.children
          break
        }
        if (j === tmp_arr.length-1) {                       // url和侧边栏数据不匹配
          console.warn(`Warning: Can't find the deep ${deep} in ${currentPath.value}, reset deep: ${(deep-1)>0 ? (deep-1) : 0}`)
          targetDeep.value = (deep-1)>0 ? (deep-1) : 0
          return
        }
      }
    }
    targetData.value = tmp_arr
  }
  calc_targetData()
}
onMounted(() => {
  onNewUrl()
})
const route = useRoute()
watch(() => route.fullPath, () => {
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
.breadcrumb {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  height: 44px; // 34+10，10容纳滚动条
  box-sizing: border-box;

  >span {
    flex: 0 0 auto;
    display: inline-block;
    box-sizing: border-box;
    height: 30px;
    margin: 2px 2px 2px 0;

    padding: 2px 2px;
    // border: solid 1px currentColor;
    line-height: 26px;
    cursor: pointer; 

    >span {
      display: inline-block;
      max-width: 200px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}

.breadcrumb span {
  &[relDeep="0"] { border-color: red; }
  &[relDeep="0"]>span { color: red !important; }

  // 这个是我自己的个人样式
  &[relDeep^="-"]>span { color: var(--theme-color-level0); fill: var(--theme-color-level10); }
  &[relDeep="0"]>span { color: var(--theme-color-level0); fill: var(--theme-color-level10); }
  &[relDeep="1"]>span { color: var(--theme-color-level1); fill: var(--theme-color-level10); }
  &[relDeep="2"]>span { color: var(--theme-color-level2); fill: var(--theme-color-level10); }
  &[relDeep="3"]>span { color: var(--theme-color-level3); fill: var(--theme-color-level10); }
  &[relDeep="4"]>span { color: var(--theme-color-level4); fill: var(--theme-color-level10); }
  &[relDeep="5"]>span { color: var(--theme-color-level5); fill: var(--theme-color-level10); }
  &[relDeep="6"]>span { color: var(--theme-color-level6); fill: var(--theme-color-level10); }
  &[relDeep="7"]>span { color: var(--theme-color-level7); fill: var(--theme-color-level10); }
  &[relDeep="8"]>span { color: var(--theme-color-level8); fill: var(--theme-color-level10); }
  &[relDeep="9"]>span { color: var(--theme-color-level9); fill: var(--theme-color-level10); }
  &[relDeep="10"]>span { color: var(--theme-color-level10); fill: var(--theme-color-level10); }
  span { color: var(--theme-color-level10); }
}
</style>

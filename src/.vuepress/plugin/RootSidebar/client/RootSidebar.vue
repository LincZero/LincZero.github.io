<!--
使用注意：要求一定要在sidebar配置中包含一个："/": "structure"

- RootSidebar: 该组件多个侧边栏只会调用一次，数据只在url变化时更新
- RootSidebarContent: 该组件每个侧边栏会调用一次 (未支持)。该组件确定target文件夹和深度
- RootSidebarItem: 该组件每个侧边栏文件夹会调用一次。不关注target文件夹是什么

术语:
该树组件的一大特点是，可以将任意一个目标文件夹声明为新的根部
- 绝对的根部文件夹叫root
- 指定为根部的目标文件夹叫target
- 固定标签页的根部文件夹叫pin
-->

<template>
  <div class="root-sidebar">
    <div class="root-sidebar-control">
      <div class="root-sidebar-btn">
        <button @click="switchOldSidebar()" title="切换新旧侧边栏">Old</button>
        <button @click="() => { emitPinTab() }"
          title="固定或删除当前标签页">Pin</button>
        <!-- <button title="升序/降序排序">Ord</button> -->
        <button class="left" @click="() => { emitNewUrl(targetDeep-1) }"
          title="显示更多侧边项"><</button>
        <button class="right" @click="() => { emitNewUrl(targetDeep+1) }"
          title="精简更少侧边项">></button>
      </div>
      <div class="root-sidebar-breadcrumb" ref="Breadcrumb">
        <!-- TODO: 下拉框，路径下拉表示、排序、固定伪标签页 -->
        <button v-for="(item,index) in currentPathArr"
          @click="() => { emitNewUrl(index) }"
          :relDeep="index - targetDeep"
        >
          <span :title="decodeURIComponent(item) + '/'">
            {{ decodeURIComponent(item) + "/" }}
          </span>
        </button>
      </div>
    </div>
    <div class="root-sidebar-control2">
      <!-- 固定标签, 伪标签栏  -->
      <RootSidebarItem
        :deep_from_target="0"
        :prefix_from_root="targetPath"
        :sidebarData="pinData"
        :currentPath="'/'"
      />
      <div v-show="pinData.length>0"><hr></div>
    </div>
    <div class="root-sidebar-content">
      <RootSidebarItem
        :deep_from_target="0"
        :prefix_from_root="targetPath"
        :sidebarData="targetData"
        :currentPath="currentPath"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { sidebarData } from "@temp/theme-hope/sidebar.js"; // 在client端获取侧边栏数据
import { usePageData, useSiteData } from 'vuepress/client'
import { useRouter, useRoute } from 'vue-router'; // 不 import {useRoute} from vuepress/client 了
import { type ComputedRef, type Ref, computed, onMounted, ref, watch, nextTick } from 'vue';
import RootSidebarItem from "./RootSidebarItem.vue"
import type { SidebarType } from "./index"

// 数据获取
// current基于完整的url
// target基于按截取截取后的url
if (!sidebarData.hasOwnProperty("/")) { console.error(`Error: Must be add a {"/": "structure"} in sidebar config`) }
let targetDeep_isInit = false                           // 仅触发一次，用于锁定targetDeep
const rootData = ref<SidebarType[]>(sidebarData["/"])   // 从根部开始的数据 (ATTENTION 要求一定要在sidebar配置中包含一个"/"struct)
const currentPath = ref("") // 当前url.path
const currentPathArr = ref<string[]>([])                // 当前url.path数组 (["", "path1", "path2"], 不包含文件名)
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
const targetData = ref<SidebarType[]>(rootData.value);  // 指定目录开始的数据
const pinData = ref<SidebarType[]>([])

/**
 * 组织部署的特殊处理。如果是组织 (config base != `/`)，那么rootData层次和url层次会出现不一致
 * - 处理方法1：(弃用) 以url为准，修改rootData。deep也以url为准。但绝对路径的链接会有问题! `/xxx` 会指向 `/orgName/xxx`
 * - 处理方法2: (选用) pathname省略org name，即 ["", "orgname", "path2"] -> ["", "path2"]。`https://域名/orgname/` 视为一个整体
 */
let orgName:string = useSiteData().value.base
if (orgName != "/") { // 不是`/`
  if (orgName.startsWith("/")) orgName = orgName.slice(1,)
  if (orgName.endsWith("/")) orgName = orgName.slice(0,-1)
}

/// 钩子, 与回调进行数据更新
/// 每次url与deep变动时更新 (前者存在多个侧边栏也只调用一次，后者每个侧边栏调用一次)
function onNewUrl(newDeep?: number) {
  // 更新值 - currentPath, currentPathArr
  {
    if (orgName == "/") {
      currentPath.value = decodeURIComponent(window.location.pathname)
    } else {
      currentPath.value = decodeURIComponent(window.location.pathname).replace(new RegExp(`^/${orgName}/`), "/")
    }
    // http... -> /path1/path2/path3.html -> ["", "path1", "path2", "path3.html"] -> ["", "path1", "path2"]
    // http... -> /path1/path2 -> ["", "path1", "path2"] -> ["", "path1", "path2"]
    // http... -> /path1/path2/ -> ["", "path1", "path2", ""] -> ["", "path1", "path2"]
    let dirArr = currentPath.value.split("/")
    if (currentPath.value.endsWith("/") || dirArr[dirArr.length - 1].includes(".")) dirArr.pop()
    currentPathArr.value = dirArr
  }

  // 更新值 - targetDeep
  {
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
    let tmp2: string | null = getQueryVariable("deep")
    if (newDeep !== undefined && newDeep >= 0) targetDeep.value = newDeep // 优先级1: 函数传参 (不可负)
    else if (tmp2) targetDeep.value = parseInt(tmp2)                      // 优先级2: url传参 (可负)
    else if (targetDeep_isInit) {}                                        // 优先级3: 保持不变
    else {                                                                // 优先级4: 初始化为最大深度 (不可负)
      targetDeep.value = targetDeep.value = currentPathArr.value.length-1
      if (targetDeep.value < 0) targetDeep.value = 0
    }
    targetDeep_isInit = true
    // 限制、校正
    if (targetDeep.value > currentPathArr.value.length-1) {
      targetDeep.value = currentPathArr.value.length-1
      console.warn(`Warning: The deep value is too large, reset deep: ${targetDeep.value}`)
    } else if (targetDeep.value < 0) {
      if (targetDeep.value == -1) { targetDeep.value = currentPathArr.value.length-1 }
      else targetDeep.value = 0
    }
  }

  // 更新值 - targetData, 校正 targetPath, targetDeep
  ;(() => {                                                 // calc_targetData
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
          console.error(`Error: Can't find the deep ${deep} in ${currentPath.value}, reset deep: ${(deep-1)>0 ? (deep-1) : 0}`)
          targetDeep.value = (deep-1)>0 ? (deep-1) : 0
          return
        }
      }
    }
    targetData.value = tmp_arr
  })();

  // 确保deep信息始终在url上。当deep为最大深度时(默认deep), 无需显示, 保证url的简洁
  if (targetDeep.value != currentPathArr.value.length-1) {
    const newQuery = { ...route.query, deep: targetDeep.value };
    router.push({ path: route.path, query: newQuery });
  }
}
onMounted(() => {
  switchOldSidebar(true)
  onNewUrl()
  emitScrollBreadcrumb()
})
const router = useRouter();
const route = useRoute();
watch(() => route.fullPath, () => {
  onNewUrl()
})
const emitNewUrl = (newDeep: number) => { // 手动触发
  if (newDeep<0) return // 无法指定负数，只允许url为-1
  const newQuery = { ...route.query, deep: newDeep };
  router.push({ path: route.path, query: newQuery });

  onNewUrl(newDeep)
  emitScrollBreadcrumb()
}

/// 切换新旧侧边栏 (兼容考虑)
function switchOldSidebar(isUseNew?: boolean) {
  const el_old: HTMLElement|null = document.querySelector("#sidebar>.vp-sidebar-links")
  const el_new: HTMLElement|null = document.querySelector("#sidebar>.root-sidebar>.root-sidebar-content")
  // const root-sidebar
  if (!el_old || !el_new) { console.warn("Warning: can not find sidebar old/new element"); return }

  if (isUseNew !== undefined) {}
  else if (el_old.style.display === 'none' || el_old.style.display === '') { isUseNew = false }
  else { isUseNew = true }

  if (isUseNew) {
    el_old.style.display = 'none';
    el_new.style.display = 'block';
  } else {
    el_new.style.display = 'none';
    el_old.style.display = 'block';
    debug()
  }
}

/// 固定或取消当前打开项为固定标签
function emitPinTab() {
  const s:string = window.location.pathname + window.location.search
  if (pinData.value.includes(s)) {
    pinData.value = pinData.value.filter((v) => v !== s)
  } else {
    pinData.value.push(window.location.pathname + window.location.search)
  }
}

/// 面包屑激活项自动滚动 (仅初始化、手动切换deep时触发，SPA切换url时不触发)
async function emitScrollBreadcrumb () {
  await nextTick(); // 需要await nextTick();确保元素先更新，元素上的relDeep是正确的
  if (!Breadcrumb.value)  return
  const el = Breadcrumb.value.querySelector(":scope>button[relDeep='0']")
  if (!el) return
  el.scrollIntoView({
    behavior: 'smooth', // 平滑
    block: 'nearest', // "center" | "end" | "nearest" | "start";
    inline: 'start',
  });
}
const Breadcrumb = ref<HTMLElement|null>(null);

// 仅调试
const debug = () => {
  // test url: http://localhost:8080/MdNote_Public/Test.html?deep=1&state=s2#h2
  console.log("debug start ---------------------------------------")
  console.log("dataR", rootData)                // Object, 一个纯侧边栏数据对象，[ self-childern结构 ]
  console.log("dataT", targetData)              // ^
  console.log("comp2", targetPath)
  console.log("comp4", currentPath)
  console.log("route1", window.location)        // Location {hash, host, hostname, href, origin, pathname, port, protocol, search}
  console.log("route2", route)                  // 
  console.log("route3", router)                 // 
  console.log("p1", usePageData())              // Object，一个包含了当前页面数据的对象 {lang, path, forntmatter, ...}
  console.log("p2", usePageData().value.router) // undefined
  console.log("p3", usePageData().value.path)   // /MdNote_Public/Test.html
  console.log("debug end -----------------------------------------")
}
const isDebug = false
if (isDebug) { debug() }
</script>

<style scoped lang="scss">
button { // h:(26+4+0)+4
  box-sizing: border-box;
  display: inline-block;
  margin: 0;
  padding: 0;
  background: none;
  color: currentColor;
  font-size: 14px;
  cursor: pointer;

  height: 30px;
  margin-top: 2px;
  padding: 2px 2px; border: none;
  line-height: 26px;
}

.root-sidebar {
  padding-right: 4px;
}
.root-sidebar>.root-sidebar-control {
  height: 44px; // 34+10，10容纳滚动条
  display: flex;
  flex-wrap: nowrap;

  >div {
    display: flex;
    flex-wrap: nowrap;
    box-sizing: border-box;
    >button {
      flex: 0 0 auto;
      // border: solid 1px currentColor;
    }
  }
  >div.root-sidebar-btn {
    >button {
      border: solid 1px currentColor;
      margin-right: 2px;
      line-height: 24px;
      border-radius: 6px;
    }
  }
  >div.root-sidebar-breadcrumb {
    overflow-x: auto;
    padding-right: 30px;
    >button {
      padding: 2px 4px;
    }
    >button>span {
      max-width: 200px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
.root-sidebar>.root-sidebar-content {
  margin-top: 10px;
  // overflow-x: auto;
}

// 颜色, 配色可以自己通过自定义变量调，不自带配色方案
.root-sidebar-breadcrumb>button {
  &[relDeep="0"] { 
    padding: 2px 2px !important; border: solid 2px var(--theme-color);
    line-height: 22px;
    border-radius: 6px;
  }
  // &[relDeep="0"]>span { color: red !important; }

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

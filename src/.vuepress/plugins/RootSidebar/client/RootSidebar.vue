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
        <!-- <button title="升序/降序排序">Ord</button> -->
        <button @click="()=>{ isH1 = !isH1 }"
          :class="{'active': isH1}"
          :title="isH1 ? '切换显示: H1->文件名' : '切换显示: 文件名->H1'">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="1 -4 22 22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading"><path d="M6 12h12"/><path d="M6 20V4"/><path d="M18 20V4"/></svg>
        </button>
        <button @click="switchOldSidebar()"
        :class="{'active': isOldSidebar}"
          title="切换新旧侧边栏">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-up"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="m21 8-4-4-4 4"/><path d="M17 4v16"/></svg>
        </button>
        <button v-if="hasSummary" @click="switchSummarySidebar()"
        :class="{'active': isSummary}"
          title="使用SUMMARY源">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-up"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="m21 8-4-4-4 4"/><path d="M17 4v16"/></svg>
        </button>
        <button @click="() => { emitPinTab() }"
          title="固定或删除当前标签页">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="26" viewBox="0 -1 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pin"><path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/></svg>
        </button>
        <button @click="() => { emitNewUrl(targetDeep-1) }"
          title="显示更多侧边项">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="26" viewBox="6 5 12 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button @click="() => { emitNewUrl(targetDeep+1) }"
          title="精简更少侧边项">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="26" viewBox="5 5 12 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
        </button>
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
    <div class="root-sidebar-content2">
      <!-- 固定标签, 伪标签栏  -->
      <RootSidebarItem
        :deep_from_target="0"
        :prefix_from_root="targetPath"
        :sidebarData="pinData"
        :currentPath="'/'"
        :isH1="isH1"
      />
      <div v-show="pinData.length>0"><hr></div>
    </div>
    <div class="root-sidebar-content">
      <RootSidebarItem
        :deep_from_target="0"
        :prefix_from_root="targetPath"
        :sidebarData="targetData"
        :currentPath="currentPath"
        :isH1="isH1"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { sidebarData } from "@temp/theme-hope/sidebar.js"; // 在client端获取侧边栏数据
import { sidebarData2 } from "@temp/theme-hope/sidebar2.js";
import { useSiteData } from 'vuepress/client' // https://vuepress.github.io/zh/reference/client-api.html
import { useRouter, useRoute } from 'vue-router'
// import { useRoute } from 'vuepress/client' // 为什么用 vue-router 版而不是 vupress/client 版的原因忘了，好像是有区别的
import { type ComputedRef, type Ref, computed, onMounted, ref, watch, nextTick } from 'vue';
import RootSidebarItem from "./RootSidebarItem.vue"
import type { SidebarType } from "./index"

// import { useSidebarItems } from "vuepress-theme-hope/client/modules/sidebar/composables/index";
/**
 * 数据更多的siebarData版本
 * 
 * @detail
 * 被vuepress-theme-hope处理过
 * 特点: 仅检测并获取当前路径下的子目录/文件。有 h1、icon、collapsible 等处理
 * 原理: 
 * 数据来源: inject(sidebarItemsSymbol)
 * https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/1b543518aea70ee6f500741ab64b833a3e98d8e8/packages/theme/src/client/modules/sidebar/composables/setupSidebarItems.ts#L61
 * usePageFrontmatter
 */
// const sidebarData2 = useSidebarItems().value

// 数据获取
// 注意：如果存在第二数据 SUMMARY.md，则优先使用该数据 sidebarData2
// current基于完整的url
// target基于按截取截取后的url
if (!sidebarData.hasOwnProperty("/")) { console.error(`Error: Must be add a {"/": "structure"} in sidebar config`) }
let targetDeep_isInit = false                           // 仅触发一次，用于锁定targetDeep
const rootData = ref<SidebarType[]>(sidebarData["/"])   // 从根部开始的数据 (ATTENTION 要求一定要在sidebar配置中包含一个"/"struct)
const currentPath = ref("")                             // 当前url.path (特别注意的是，这里不纳入base(组织名)前面的path部分)
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
        else if (!('children' in item)) continue

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
  // TODO: 有bug，暂时注释，可能让回退功能失效
  // if (targetDeep.value != currentPathArr.value.length-1) {
  //   const newQuery = { ...route.query, deep: targetDeep.value };
  //   router.push({ path: route.path, query: newQuery, hash: route.hash });
  // }
}
const router = useRouter();
const route = useRoute();
const emitNewUrl = (newDeep: number) => { // 手动触发
  if (newDeep<0) return // 无法指定负数，只允许url为-1
  const newQuery = { ...route.query, deep: newDeep };
  router.push({ path: route.path, query: newQuery, hash: route.hash });

  onNewUrl(newDeep)
  emitScrollBreadcrumb()
}
onMounted(() => {
  onNewUrl()
})
watch(() => route.fullPath, () => {
  onNewUrl()
})

const isH1 = ref<boolean>(false) // 切换显示H1还是文件名 // TODO 用浏览器存储，允许在插件配置中设置默认值

/// 切换新旧侧边栏 (兼容考虑)
const isOldSidebar = ref<boolean>(false)
function switchOldSidebar(isUseNew?: boolean) {
  const el_old: HTMLElement|null = document.querySelector("#sidebar>.vp-sidebar-links")
  const el_new: HTMLElement|null = document.querySelector("#sidebar>.root-sidebar>.root-sidebar-content")
  const el_new2: HTMLElement|null = document.querySelector("#sidebar>.root-sidebar>.root-sidebar-content2")
  // const root-sidebar
  if (!el_old || !el_new || !el_new2) { console.warn("Warning: can not find sidebar old/new element"); return }

  if (isUseNew !== undefined) {} // TODO
  else if (el_old.style.display === 'none' || el_old.style.display === '') { isUseNew = false; isOldSidebar.value = true }
  else { isUseNew = true; isOldSidebar.value = false }

  if (isUseNew) {
    el_old.style.display = 'none';
    el_new.style.display = 'block';
    el_new2.style.display = 'block';
  } else {
    el_new.style.display = 'none';
    el_new2.style.display = 'none';
    el_old.style.display = 'block';
  }
}
onMounted(() => {
  switchOldSidebar(true)
})

// #region 切换SUMMARY数据源
const hasSummary = ref<boolean>(sidebarData2 && sidebarData2.length!=0) // 是否存在summary数据
const isSummary = ref<boolean>(false) // 是否切换到summary数据
function switchSummarySidebar() {
  if (isSummary.value) {
    isSummary.value = false
    rootData.value = sidebarData["/"]
  } else {
    isSummary.value = true
    rootData.value = sidebarData2
  }

  targetData.value = rootData.value // 一般情况下rootData不会修改
  onNewUrl()
}
if (hasSummary) switchSummarySidebar()
// #endregion

/// 固定或取消当前打开项为固定标签
const pinData = ref<string[]>([])
onMounted(()=>{
  // 获取缓存
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    const pinDataString = localStorage.getItem('pinnedTabs');
    if (pinDataString) {
      pinData.value = JSON.parse(pinDataString);
    }
  }
})
// 固定标签页变动
function emitPinTab() {
  const s:string = currentPath.value + window.location.search + window.location.hash
  if (pinData.value.includes(s)) {
    pinData.value = pinData.value.filter((v) => v !== s)
  } else {
    pinData.value.push(s)
  }
  // 设置缓存
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    const pinDataString = JSON.stringify(pinData.value);
    localStorage.setItem('pinnedTabs', pinDataString);
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
onMounted(() => {
  emitScrollBreadcrumb()
})

/// 调试输出
import { usePageData, usePageFrontmatter } from 'vuepress/client' // https://vuepress.github.io/zh/reference/client-api.html
const isDebug = false
const _usePageData = usePageData()
const _usePageFrontmatter = usePageFrontmatter()
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
  console.log("usePageData1", _usePageData.value)        // Object，一个包含了当前页面数据的对象 {lang, path, forntmatter, ...}
  console.log("usePageData2", _usePageData.value.router) // undefined
  console.log("usePageData3", _usePageData.value.path)   // /MdNote_Public/Test.html
  console.log("usePageFrontmatter", _usePageFrontmatter.value)
  console.log("debug end -----------------------------------------")
}
onMounted(()=>{
  if (isDebug) { debug() }
})
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
  line-height: 26px;
  border-radius: 6px;
  padding: 2px 3px; border: none;
  // padding: 0px 1px !important; border: solid 2px currentColor; // 各让2px padding给border

  &:hover {
    padding: 0px 1px !important; border: solid 2px currentColor; // 各让2px padding给border
    // line-height: 22px;
    // background-color: #f0f0f011;
    background-color: var(--vp-c-accent-soft);
    // 或使用 var(--theme-color-mask); // 一种更浅的 --theme-color
  }

  &.active>svg {
    stroke: var(--vp-c-accent) !important;
  }
}

.root-sidebar {
  padding-right: 4px;
}
.root-sidebar>.root-sidebar-control {
  height: 44px; // 子元素34+10，10容纳滚动条。子元素34 = (26+4)+4 = (24+2+4)+4
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
    >button {}
  }
  >div.root-sidebar-breadcrumb {
    overflow-x: auto;
    padding-right: 30px;
    >button {}
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

// (附加) 横向滚动优化。要点：不能影响到控制栏的位置 (不然不好连续按`>/<`键)，扩大可用区域
.root-sidebar {
  margin-top: 8px;
  >.root-sidebar-content {
    overflow-x: auto;
    transform: scaleY(-1); // 让滚动条置于上方
    padding-bottom: 10px;
    >.sidebar-item-children {
      transform: scaleY(-1);
    }
  }
}

// (附加) 颜色, 配色可以自己通过自定义变量调，不自带配色方案
.root-sidebar-breadcrumb>button {
  &[relDeep="0"] { 
    padding: 0px 1px !important; border: solid 2px var(--vp-c-accent); // 各让1px padding给border
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

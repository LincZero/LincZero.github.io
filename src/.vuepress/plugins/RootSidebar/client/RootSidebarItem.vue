<template>
  <ul class="sidebar-item-children">
    <li v-for="(item,index) in sidebarData" :key="index">
      <!-- 文件-1 -->
      <div v-if="typeof item === 'string'" class="sidebar-item file">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 5.52 0 10-4.48 10-10 0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9h4v2h-4v-2z"/>
        </svg> -->
        <div
          :class="['sidebar-item-name', 'file', { active: getIsActive(item)}]"
          :relDeep="props.deep_from_target+1"
          :style="'padding-inline-start:'+(props.deep_from_target*20+24)+'px'"
        >
          <!-- router-link代替a，spa路由切换，避免整个页面刷新 -->
          <!-- <a :href="item">{{ getText(item) }},deep: {{ deep }}, item: {{ item }}</a> -->
          <router-link :to="getUrl(item)" :title="getUrl(item)">{{ getText(item) }}</router-link>
        </div>
      </div>
      <!--  文件-2 -->
      <div v-else-if="!('children' in item)" class="sidebar-item file">
        <div
          :class="['sidebar-item-name', 'file', { active: getIsActive(item.link)}]"
          :relDeep="props.deep_from_target+1"
          :style="'padding-inline-start:'+(props.deep_from_target*20+24)+'px'"
        >
          <router-link :to="getUrl(item.link)" :title="getUrl(item.link)">{{ getText(item.text) }}</router-link>
        </div>
      </div>
      <!-- 文件夹 -->
      <div v-else class="sidebar-item folder" :unfold="isUnFold(item)">
        <div
          :class="['sidebar-item-name', 'folder', { active: getIsActive(item.prefix)}]"
          :relDeep="props.deep_from_target+1"
          :style="'padding-inline-start:'+(props.deep_from_target*20+24)+'px'"
          @click="clickItem(item)"
        >
          <a :title="getUrl(item.prefix)">{{ getText(item) }}</a>
        </div>
        <RootSidebarItem
          v-if="isUnFold(item)"
          :deep_from_target="props.deep_from_target+1"
          :prefix_from_root="props.prefix_from_root + item.prefix"
          :sidebarData="item.children"
          :currentPath="props.currentPath"
          :is-h1="props.isH1"
        />
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { SidebarType } from "./index"

const props = withDefaults(defineProps<{
  deep_from_target: number,     // 当前文件夹层的深度 (随着传递增加，相对于targetDeep的深度，从0开始)
  prefix_from_root: string,     // 当前文件夹层的前缀
  sidebarData: SidebarType[],   // 当前文件夹层的数据 (随着传递减少深度)
  currentPath: string,          // 当前url (仅用于初始化时默认展开，url编码)
  isH1?: boolean,               // 是否使用h1名，flase则使用文件名
}>(), {
  isH1: false
})

// #region 展开状态
// 每个目录文件夹组件只管理自己这一层的折叠状态。多个侧边栏可以有不同的折叠状态
// 内容均非url编码，以`/`结尾
const unfold_arr = ref<string[]>([])
// 设计上需要同时展开多个同级文件夹
// 所以 `深度/url` 形式的变动导致的展开状态刷新，不会取消展开，而只会增加展开
// 即：展开是自动的，取消展开必须手动折叠回去
// @parem allowFold false时只允许自动展开而不允许自动折叠，true时允许后者
const onUpdateDeep = () => {
  let dirArr = props.currentPath.split("/")
  if (props.currentPath.endsWith("/") || dirArr[dirArr.length - 1].includes(".")) dirArr.pop()
  dirArr.map((item)=>{ // TODO 临时，目录重名时会误展开
    unfold_arr.value.push(item+"/")
  })
}
onUpdateDeep()
watch(() => props.prefix_from_root, () => {
  onUpdateDeep()
})
watch(() => props.currentPath, () => {
  onUpdateDeep()
})
// 初始化折叠状态
// 在RootSidebarItem中，不收回用户折叠的权限。collapsed == false 的行为会被解释为默认展开而非不可折叠
for (const item of props.sidebarData) {
  if (typeof item === 'string') continue
  if ('collapsed' in item && item.collapsed != undefined && item.collapsed == false) {
    unfold_arr.value.push(item.prefix)
  }
}
// 是否折叠 - 小功能函数
function isUnFold(item) { // 是否展开/允许展开
  if (!item.hasOwnProperty('children')) return false
  if (unfold_arr.value.includes(item.prefix)) return true
  return false
}
// 手动切换折叠状态
const clickItem = (item: SidebarType) => {
  if (typeof item === 'string') return
  else if (!('children' in item)) return
  
  if (unfold_arr.value.includes(item.prefix)) { // 展开 -> 折叠
    unfold_arr.value = unfold_arr.value.filter((v) => v !== item.prefix)
  } else { // 折叠 -> 展开
    unfold_arr.value.push(item.prefix)
  }
}
// #endregion

/**
 * 返回高可读的文本 (非url编码)
 * 用于: 可能是侧边栏或pin栏上的目录/文件名
 * 值: 有两种情况
 * - 一是文件夹/文件名 (适合本地md笔记用户)
 * - 二是h1名 (适合考虑url路径带来影响的网络博客用户)
 * 
 * frontmeta的获取: 两种方法:
 * - useRoutes().value[getUrl(item)] // useRoutes()在setup作用域下调用
 * - resolveRoute(getUrl(item))
 */
import { resolveRoute, useRoutes } from 'vuepress/client'
const getText = (item: SidebarType) => {
  // 文件
  if (typeof item === 'string') {
    // b1. title/h1名 (如果没有，还是会用回文件名)
    if (props.isH1) {
      const title = resolveRoute(getUrl(item))?.meta?.title // 可能为空或未定义。meta.title -> h1 -> filename
      if (title && title != '404') return title // 路由不存在时返回404
    }
    // b2. 文件夹/文件名
    if (!item.length) return "README"
    let s:string = decodeURIComponent(item)           // /MdNote_Other/Pkmer-Math-main/(Home.html or "")?deep=1
    if(item.endsWith("/")) { s = s.slice(0, -1); }
    let s_arr = s.split('/')                          // ["", "MdNote_Other", "Pkmer-Math-main", "(Home.html or "")?deep=1"]
    s = s_arr.pop() ?? "Error: pathname without shape"// (Home.html or "")?deep=1
    let s_arr2 = s.split('?')
    if (s_arr2.length>1) s = s_arr2[0]                // (Home.html or "")
    if (!s.length) return (s_arr.pop()??"/")          // Pkmer-Math-main
    else return s.replace(/\.html$/, "")              // Home
  }
  else if (!('children' in item)) {
    // b1. title/h1名 (如果没有，还是会用回文件名)
    if (props.isH1) {
      const title = resolveRoute(getUrl(item.link))?.meta?.title // 可能为空或未定义。meta.title -> h1 -> filename
      if (title && title != '404') return title // 路由不存在时返回404
    }
    // b2. 文件夹/文件名
    if (!item.text.length) return "README"
    let s:string = decodeURIComponent(item.link)      // /MdNote_Other/Pkmer-Math-main/(Home.html or "")?deep=1
    if(item.link.endsWith("/")) { s = s.slice(0, -1); }
    let s_arr = s.split('/')                          // ["", "MdNote_Other", "Pkmer-Math-main", "(Home.html or "")?deep=1"]
    s = s_arr.pop() ?? "Error: pathname without shape"// (Home.html or "")?deep=1
    let s_arr2 = s.split('?')
    if (s_arr2.length>1) s = s_arr2[0]                // (Home.html or "")
    if (!s.length) return (s_arr.pop()??"/")          // Pkmer-Math-main
    else return s.replace(/\.html$/, "")              // Home
  }
  // 文件夹
  else {
    return item.prefix.slice(0, -1)
  }
}

/**
 * @return 非url编码
 */
const getUrl = (item: string) => {
  if (!item.length) return props.prefix_from_root                 // README
  // if (/^(\/|https?:|data:)/.test(item)) return item            // 绝对路径、网络路径等，不处理
  if (item.startsWith("/")) return item                           // 绝对路径
  if (item.endsWith("/")) return (props.prefix_from_root + item)  // 文件夹 (可传入item.prefix判断)
  return (props.prefix_from_root + item + ".html")                // 文件
}
const getIsActive = (item: string): boolean => {
  return decodeURIComponent(props.currentPath) == getUrl(item).replace(/index\.html$/, "")
}
</script>

<style lang="scss">
html { // [data-theme="dark"]
  --sidebar-arrow-bg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='rgba(255,255,255,0.5)' d='M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z'/%3E%3C/svg%3E");
}
html[data-theme="light"] {
  --sidebar-arrow-bg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='rgba(0,0,0,0.5)' d='M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z'/%3E%3C/svg%3E");
}
</style>

<style scoped lang="scss">
/**
 * - ul.sidebar-item-children
 *   - li                                         // 特点: 满宽度、无缩进、高度可能为多行。
 *     - div.sidebar-item (.file/.folder)         // 特点: 满宽度、无缩进、高度为一行。悬浮时高亮整行是这个单位
 *       - div.sidebar-item-name (.file/.folder)  // 特点: 有缩进、高度为一行。这里启用缩进，动态设置style的padding-inline-start
 *         - ::before
 *         - a
 *       - (可选, 递归) RootSidebarContent
 */
ul.sidebar-item-children {
  padding: 0;
  margin: 0;
}
// 特点: 满宽度、无缩进、高度可能为多行
li {
  list-style: none;
  cursor: pointer;

  // 特点: 满宽度、无缩进、高度为一行
  > .sidebar-item {

    // 特点: 有缩进、高度为一行
    >.sidebar-item-name {
      box-sizing: border-box;
      width: 100%;
      display: block;
      height: 34px;

      // border: solid 1px currentColor;
      padding: 0 2px;
      line-height: 30px;
      font-size: 17px; // 1.1em;

      white-space: pre;
      border-radius: 8px;
    }

    // 图标
    >.sidebar-item-name>a {
      display: block;
      height: 30px;
      position: relative;
      &::before {
        position: absolute;
        box-sizing: border-box;
        height: 30px;
        width: 22px;
        padding: 2px 2px;
        left: -25px;

        vertical-align: middle;
        content: "";
        margin-right: 0.5em;
      }
    }
    &.file>.sidebar-item-name>a::before {
      // content: "•";
      // background-image: var(--sidebar-arrow-bg);
      // transform: rotate(180deg)
    }
    &.folder[unfold = true]>.sidebar-item-name>a::before {
      // content: "v";
      background-image: var(--sidebar-arrow-bg);
      transform: rotate(180deg);
      top: -3px;
      left: -22px;
    }
    &.folder[unfold = false]>.sidebar-item-name>a::before {
      // content: ">";
      background-image: var(--sidebar-arrow-bg);
      transform: rotate(90deg);
      top: 1px;
    }
  }
}

// 悬浮、被选中
.sidebar-item-name.file.active {
  background-color: var(--vp-c-accent-soft);
  border-radius: 8px;
}
.sidebar-item-name:hover{
  background-color: #f0f0f011;
  border-radius: 8px;
}
.router-link-active {
  color: var(--vp-c-accent);
}

// 这个是我自己的个人样式
.sidebar-item-name.folder {
  &[relDeep="^-"] >a { color: var(--theme-color-level0); fill: var(--theme-color-level10); }
  &[relDeep="0"] >a { color: var(--theme-color-level0); fill: var(--theme-color-level10); }
  &[relDeep="1"] >a { color: var(--theme-color-level1); fill: var(--theme-color-level10); }
  &[relDeep="2"] >a { color: var(--theme-color-level2); fill: var(--theme-color-level10); }
  &[relDeep="3"] >a { color: var(--theme-color-level3); fill: var(--theme-color-level10); }
  &[relDeep="4"] >a { color: var(--theme-color-level4); fill: var(--theme-color-level10); }
  &[relDeep="5"] >a { color: var(--theme-color-level5); fill: var(--theme-color-level10); }
  &[relDeep="6"] >a { color: var(--theme-color-level6); fill: var(--theme-color-level10); }
  &[relDeep="7"] >a { color: var(--theme-color-level7); fill: var(--theme-color-level10); }
  &[relDeep="8"] >a { color: var(--theme-color-level8); fill: var(--theme-color-level10); }
  &[relDeep="9"] >a { color: var(--theme-color-level9); fill: var(--theme-color-level10); }
  &[relDeep="10"] >a { color: var(--theme-color-level10); fill: var(--theme-color-level10); }
  >a { color: var(--theme-color-level10); fill: var(--theme-color-level10); }
}
</style>

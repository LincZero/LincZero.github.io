<template>
  <ul class="sidebar-item-children">
    <li v-for="(item,index) in sidebarData" :key="index">
      <!-- 文件 -->
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
          <router-link :to="getUrl(item)">{{ getText(item) }}</router-link>
        </div>
      </div>
      <!-- 文件夹 -->
      <div v-else class="sidebar-item folder" :unfold="unfold_arr.includes(item.prefix)">
        <div
          :class="['sidebar-item-name', 'folder', { active: getIsActive(item.prefix)}]"
          :relDeep="props.deep_from_target+1"
          :style="'padding-inline-start:'+(props.deep_from_target*20+24)+'px'"
          @click="clickItem(item)"
        >
          <a :title="getText(item)">{{ getText(item) }}</a>
        </div>
        <RootSidebarItem
          v-if="item.hasOwnProperty('children') && (unfold_arr.includes(item.prefix))"
          :deep_from_target="props.deep_from_target+1"
          :prefix_from_root="props.prefix_from_root + item.prefix"
          :sidebarData="item.children"
          :currentPath="props.currentPath"
        />
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { SidebarType } from "./index"

const props = defineProps<{
  deep_from_target: number,     // 当前文件夹层的深度 (随着传递增加，相对于targetDeep的深度，从0开始)
  prefix_from_root: string,     // 当前文件夹层的前缀
  sidebarData: SidebarType[],   // 当前文件夹层的数据 (随着传递减少深度)
  currentPath: string,          // 当前url (仅用于初始化时默认展开，url编码)
}>()

// 每个目录文件夹组件只管理自己这一层的折叠状态。多个侧边栏可以有不同的折叠状态
// 内容均非url编码，以`/`结尾
const unfold_arr = ref<string[]>([])
if (props.currentPath) {
  let dirArr = props.currentPath.split("/")
  if (props.currentPath.endsWith("/") || dirArr[dirArr.length - 1].includes(".")) dirArr.pop()
  dirArr.map((item)=>{ // TODO 临时，目录重名时会误展开
    unfold_arr.value.push(item+"/")
  })
}

const getText = (item: SidebarType) => { // 返回值可视化高的文本 (非url编码，可能是侧边栏或pin栏上的目录/文件名)
  // 文件
  if (typeof item === 'string') {
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
  // 文件夹
  else {
    return item.prefix.slice(0, -1)
  }
}
const getUrl = (item: string) => { // 返回值非url编码
  if (!item.length) return props.prefix_from_root                 // README
  if (item.startsWith("/")) return item                           // 绝对路径
  if (item.endsWith("/")) return (props.prefix_from_root + item)  // 文件夹 (可传入item.prefix判断)
  return (props.prefix_from_root + item + ".html")                // 文件
}
const getIsActive = (item: string): boolean => {
  return decodeURIComponent(props.currentPath) == getUrl(item)
}

const clickItem = (item: SidebarType) => {
  if (typeof item === 'string') return
  if (unfold_arr.value.includes(item.prefix)) { // 展开 -> 折叠
    unfold_arr.value = unfold_arr.value.filter((v) => v !== item.prefix)
  } else { // 折叠 -> 展开
    unfold_arr.value.push(item.prefix)
  }
}
</script>

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
      // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='rgba(255,255,255,0.5)' d='M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z'/%3E%3C/svg%3E");
      // transform: rotate(180deg)
    }
    &.folder[unfold = true]>.sidebar-item-name>a::before {
      // content: "v";
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='rgba(255,255,255,0.5)' d='M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z'/%3E%3C/svg%3E");
      transform: rotate(180deg);
      top: -3px;
      left: -22px;
    }
    &.folder[unfold = false]>.sidebar-item-name>a::before {
      // content: ">";
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='rgba(255,255,255,0.5)' d='M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z'/%3E%3C/svg%3E");
      transform: rotate(90deg);
      top: 1px;
    }
  }
}

// 悬浮、被选中
.sidebar-item-name.file.active {
  background-color: var(--theme-color-mask);
  border-radius: 8px;
}
.sidebar-item-name:hover{
  background-color: #f0f0f011;
  border-radius: 8px;
}
.router-link-active {
  color: var(--theme-color);
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

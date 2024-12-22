<!--
- RootSidebar: 该组件多个侧边栏只会调用一次，数据只在url变化时更新
- RootSidebarContent: 该组件每个侧边栏会调用一次
- RootSidebarItem: 该组件每个侧边栏文件夹会调用一次
- (当前后两者是同一个，还没分离)
-->

<template>
  <ul class="sidebar-item-children">
    <li v-for="item in sidebarData" :key="item.text">
      <!-- 文件 -->
      <div v-if="typeof item === 'string'" class="sidebar-item file">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 5.52 0 10-4.48 10-10 0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9h4v2h-4v-2z"/>
        </svg> -->
        <div class="sidebar-item-name file" :style="'padding-inline-start:'+(relDeep*20+24)+'px'">
          <span>{{ showText(item) }}</span>
        </div>
      </div>
      <!-- 文件夹 -->
      <div v-else class="sidebar-item folder" :unfold="unfold_arr.includes(item.prefix)">
        <div class="sidebar-item-name folder" :style="'padding-inline-start:'+(relDeep*20+24)+'px'" @click="clickItem(item)">
          <span>{{ showText(item) }}</span>
        </div>
        <RootSidebarContent
          v-if="item.hasOwnProperty('children') && (unfold_arr.includes(item.prefix))"
          :deep="relDeep+1"
          :sidebarData="item.children"
        />
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 类型, 单string表示text
type SidebarType = "string" | {
  children: SidebarType[],
  collapsible: boolean,
  prefix: string,
  text: string,
}
const props = defineProps<{
  deep?: number,       // 深度 (相对于targetDeep的深度，从0开始)
  currentUrl?: string, // 初始url (用于默认展开)
  sidebarData: SidebarType[]
}>()
const relDeep = props.deep ?? 0

// 折叠状态与sidebarData无关，多个侧边栏可以有不同的折叠状态
const unfold_arr = ref<string[]>([])
if (props.currentUrl) {
  let url_arr = props.currentUrl.split("/")
  console.log("url_arr", url_arr) // TODOOOOOOooo
}

const showText = (item: SidebarType) => {
  // 文件
  if (typeof item === 'string') {
    let s:string = item
    if (!item.length) return "README"
    if(item.endsWith("/")) s = s.slice(0, -1)
    return decodeURIComponent(s.split('/').pop() ?? "error: 文件名可能不正常")
  }
  // 文件夹
  else {
    return item.prefix.slice(0, -1)
  }
}

const clickItem = (item: SidebarType) => {
  if (typeof item === 'string') return
  if (unfold_arr.value.includes(item.prefix)) { // 展开 -> 折叠
    unfold_arr.value = unfold_arr.value.filter((v) => v !== item.prefix)
  } else { // 折叠 -> 展开
    unfold_arr.value.push(item.prefix)
  }
  console.log("unfold_arr.value2", unfold_arr.value)
}
</script>

<style scoped lang="scss">
/**
 * - ul.sidebar-item-children
 *   - li                                         // 特点: 满宽度、无缩进、高度可能为多行。
 *     - div.sidebar-item (.file/.folder)         // 特点: 满宽度、无缩进、高度为一行。悬浮时高亮整行是这个单位
 *       - div.sidebar-item-name (.file/.folder)  // 特点: 有缩进、高度为一行。这里启用缩进，动态设置style的padding-inline-start
 *         - ::before
 *         - span
 *       - (可选, 递归) RootSidebarContent
 */
ul.sidebar-item-children {
  padding: 0;
}
li {
  list-style: none;
  cursor: pointer;

  > .sidebar-item {
    >.sidebar-item-name {
      box-sizing: border-box;
      width: 100%;
      display: block;
      height: 30px;

      border: solid 1px currentColor;
      padding: 2px;
      line-height: 24px;

      white-space: pre;
      border-radius: 8px;

      &:hover{
        background-color: #f0f0f022;
        border-radius: 8px;
      }
    }

    /* 图标 */
    >.sidebar-item-name>span {
      position: relative;
      &::before {
        position: absolute;
        width: 20px;
        height: 20px;
        left: -15px;

        content: "";
        margin-right: 0.5em;
      }
    }
    &.file>.sidebar-item-name>span::before { content: "•"; }
    &.folder[unfold = true]>.sidebar-item-name>span::before { content: "v"; }
    &.folder[unfold = false]>.sidebar-item-name>span::before { content: ">"; }
  }
}
</style>

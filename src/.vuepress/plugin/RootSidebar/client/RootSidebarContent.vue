<!--
- RootSidebar: 该组件多个侧边栏只会调用一次，数据只在url变化时更新
- RootSidebarContent: 该组件每个侧边栏会调用一次
- RootSidebarItem: 该组件每个侧边栏文件夹会调用一次
- (当前后两者是同一个，还没分离)
-->

<template>
  <ul>
    <li v-for="item in sidebarData" :key="item.text">
      <!-- 文件 -->
      <div v-if="typeof item === 'string'" class="sidebar-item file">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 5.52 0 10-4.48 10-10 0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9h4v2h-4v-2z"/>
        </svg> -->
        <span>{{ showText(item) }}</span>
      </div>
      <!-- 文件夹 -->
      <div v-else class="sidebar-item folder" :unfold="unfold_arr.includes(item.prefix)">
        <span @click="clickItem(item)">
          {{ showText(item) }}
        </span>
        <RootSidebarContent v-if="item.hasOwnProperty('children') && (unfold_arr.includes(item.prefix))" :sidebarData="item.children" />
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
  currentUrl?: string, // 初始url (用于默认展开)
  sidebarData: SidebarType[]
}>()

// 折叠状态与sidebarData无关，多个侧边栏可以有不同的折叠状态
const unfold_arr = ref<string[]>([])
if (props.currentUrl) {
  let url_arr = props.currentUrl.split("/")
  console.log("url_arr", url_arr) // TODOOOOOOooo
}

const showText = (item: SidebarType) => {
  if (typeof item === 'string') {
    if (item.length) return item
    else return "README"
  } else {
    return item.prefix.slice(0, -1) + " (" + item.collapsible
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
ul {
  padding: 0;
}
li {
  position: relative;
  list-style: none;
  cursor: pointer;

  > .sidebar-item {
    /* 文件 */
    &.file {
      &::before {
        position: absolute;
        width: 20px;
        height: 20px;
        left: -20px;

        content: "•";
        margin-right: 0.5em;
      }
    }
    /* 文件夹 */
    &.folder {
      &::before {
        position: absolute;
        width: 20px;
        height: 20px;
        left: -20px;

        content: "•";
        margin-right: 0.5em;
      }
      &[unfold = true]::before {
        content: "v";
      }
      &[unfold = false]::before {
        content: ">";
      }
    }
    > span {
      width: 100%;
      display: block;
      height: 30px;
      line-height: 30px;

      padding: 2px;
      border: solid 1px currentColor;
      white-space: pre;
    }
  }
}
</style>

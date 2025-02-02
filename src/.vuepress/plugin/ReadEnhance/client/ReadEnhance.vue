<template>
  <!-- 如果要调试就将第二个改成true -->
  <div class="read-enhance vp-nav-item"
    @mouseover="isShowContent = true"
    @mouseleave="isShowContent = false"
  >  
    <div class="read-enhance-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>
    </div>
    <div class="read-enhance-content" v-if="isShowContent">
      <div>
        布局切换
      </div>
      <div>
        <button @click="fn_mode(1)" :class="{'is-activate': mode == 1}">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shrink"><path d="m15 15 6 6m-6-6v4.8m0-4.8h4.8"/><path d="M9 19.8V15m0 0H4.2M9 15l-6 6"/><path d="M15 4.2V9m0 0h4.8M15 9l6-6"/><path d="M9 4.2V9m0 0H4.2M9 9 3 3"/></svg>
        </button>
        <button  @click="fn_mode(2)" :class="{'is-activate': mode == 2}">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-expand"><path d="m15 15 6 6"/><path d="m15 9 6-6"/><path d="M21 16.2V21h-4.8"/><path d="M21 7.8V3h-4.8"/><path d="M3 16.2V21h4.8"/><path d="m3 21 6-6"/><path d="M3 7.8V3h4.8"/><path d="M9 9 3 3"/></svg>
        </button>
        <button  @click="fn_mode(3)" :class="{'is-activate': mode == 3}">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-maximize"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = {}

const isShowContent = ref(false)
const mode = ref(1)

function fn_mode(n: number) {
  mode.value = n
  const el_root = document.documentElement;
  const el_toc: HTMLElement = document.querySelector("#toc")
  const el_start1: HTMLElement = document.querySelector(".vp-page-title")
  const el_end1: HTMLElement = document.querySelector(".backlink-container")
  const el_end2: HTMLElement = document.querySelector("footer.vp-page-meta")
  const el_end3: HTMLElement = document.querySelector("nav.vp-page-nav")
  
  const el_sidebar: HTMLElement = document.querySelector("#sidebar")
  const el_mainContent: HTMLElement = document.querySelector("#main-content")

  // 宽屏模式
  if (mode.value == 2) {
    if (el_toc) el_toc.style.display = "block";
    if (el_start1) el_start1.style.display = "block";
    if (el_end1) el_end1.style.display = "block";
    if (el_end2) el_end2.style.display = "block";
    if (el_end3) el_end3.style.display = "flex";

    if (el_sidebar) el_sidebar.style.paddingInlineStart = "1rem";
    if (el_mainContent) {
      el_mainContent.style.paddingInlineStart = "calc(var(--sidebar-width) + 2rem)";
      el_mainContent.style.paddingInlineEnd = "calc(var(--sidebar-width) + 2rem)";
    }
    if (el_root) {
      el_root.style.setProperty('--content-width', 'calc(100%)');
      el_root.style.setProperty('--nf-min-height', '900px');
    }
  }
  // 超宽屏模式 (很多东西都省略显示，一般用于非md页)
  else if (mode.value == 3) {
    if (el_toc) el_toc.style.display = "none";
    if (el_start1) el_start1.style.display = "none";
    if (el_end1) el_end1.style.display = "none";
    if (el_end2) el_end2.style.display = "none";
    if (el_end3) el_end3.style.display = "none";

    if (el_sidebar) el_sidebar.style.paddingInlineStart = "1rem";
    if (el_mainContent) {
      el_mainContent.style.paddingInlineStart = "calc(var(--sidebar-width) + 2rem)";
      el_mainContent.style.paddingInlineEnd = "1rem";
    }
    if (el_root) {
      el_root.style.setProperty('--content-width', 'calc(100%)');
      el_root.style.setProperty('--nf-min-height', 'calc(100vh - var(--navbar-height) - 140px)'); // my plugin
    }
  }
  // 默认
  else {
    if (el_toc) el_toc.style.display = "block";
    if (el_start1) el_start1.style.display = "block";
    if (el_end1) el_end1.style.display = "block";
    if (el_end2) el_end2.style.display = "block";
    if (el_end3) el_end3.style.display = "flex";

    if (el_sidebar) el_sidebar.style.paddingInlineStart = "calc(var(--sidebar-space) - var(--sidebar-width))";
    if (el_mainContent) {
      el_mainContent.style.paddingInlineStart = "calc(var(--sidebar-space) + 2rem)";
      el_mainContent.style.paddingInlineEnd = "calc(100vw - var(--content-width) - var(--sidebar-space) - 6rem)";
    }
    if (el_root) {
      el_root.style.setProperty('--content-width', 'calc(820px + 16px)');
      el_root.style.setProperty('--nf-min-height', '900px');
    }
  }
}
</script>

<style lang="scss">
.read-enhance {
  .read-enhance-icon {
    width: 20px;
    height: 20px;
    padding: 6px;
    margin: 0;
    padding-bottom: 8px; // 为了让两个组件紧挨着，避免鼠标移出区域
  }
  .read-enhance-content {
    position: absolute;
    top: 32px;
    right: 0px;
    width: 220px;
    height: auto;

    // border: 1px solid currentColor;
    box-shadow: 0px 0px 2px currentColor;
    background-color: var(--vp-c-bg);
    border-radius: 8px;
    padding: 14px 20px;
    font-size: 15px;
    line-height: 24px;
    div {
      width: 100%;
      margin-bottom: 8px;
    }
    button {
      width: calc(33.33% - 7px);
      height: 32px; // (20+8+4)
      padding: 4px;
      margin: 0 4px;
      box-shadow: none;
      border-radius: 8px;
      border: none;
      box-sizing: border-box;
      border: 2px solid transparent;
      &.is-activate {
        border: 2px solid var(--vp-c-accent);
        background-color: var(--vp-c-accent-soft);
      }
    }
  }
}
</style>

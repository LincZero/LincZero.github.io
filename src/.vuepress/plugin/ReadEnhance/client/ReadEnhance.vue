<!-- TODO 有比较大的优化空间，特别是撤销修改方面 -->

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
        <button @click="fn_mode('narrow')" :class="{'is-activate': mode == 'narrow'}" title="窄栏模式">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shrink"><path d="m15 15 6 6m-6-6v4.8m0-4.8h4.8"/><path d="M9 19.8V15m0 0H4.2M9 15l-6 6"/><path d="M15 4.2V9m0 0h4.8M15 9l6-6"/><path d="M9 4.2V9m0 0H4.2M9 9 3 3"/></svg>
        </button>
        <button  @click="fn_mode('side')" :class="{'is-activate': mode == 'side'}" title="两侧模式">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-maximize-2"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" x2="14" y1="3" y2="10"/><line x1="3" x2="10" y1="21" y2="14"/></svg>
        </button>
        <button  @click="fn_mode('wide')" :class="{'is-activate': mode == 'wide'}" title="宽屏模式">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-expand"><path d="m15 15 6 6"/><path d="m15 9 6-6"/><path d="M21 16.2V21h-4.8"/><path d="M21 7.8V3h-4.8"/><path d="M3 16.2V21h4.8"/><path d="m3 21 6-6"/><path d="M3 7.8V3h4.8"/><path d="M9 9 3 3"/></svg>
        </button>
        <button  @click="fn_mode('super-wide')" :class="{'is-activate': mode == 'super-wide'}" title="超宽屏模式">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-maximize"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>
        </button>
      </div>
      <div>
        隐藏侧边栏/TOC
      </div>
      <div>
        <button @click="fn_switchShowSidebar()" title="侧边栏">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-left-dashed-icon lucide-panel-left-dashed"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 14v1"/><path d="M9 19v2"/><path d="M9 3v2"/><path d="M9 9v1"/></svg>
        </button>
        <button @click="fn_switchShowToc()" title="TOC">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-right-dashed-icon lucide-panel-right-dashed"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 14v1"/><path d="M15 19v2"/><path d="M15 3v2"/><path d="M15 9v1"/></svg>
        </button>
      </div>
      <div>
        背景颜色
      </div>
      <div>
        <button @click="fn_color('#ffffff')" :class="{'is-activate': bgColor == '#ffffff'}" title="明亮"
          style="background-color: #ffffff;">
        </button>
        <button @click="fn_color('#f8f8f2')" :class="{'is-activate': bgColor == '#f8f8f2'}" title="非饱和白"
          style="background-color: #f8f8f2;">
        </button>
        <button @click="fn_color('#faf8df')" :class="{'is-activate': bgColor == '#faf8df'}" title="杏仁黄"
          style="background-color: #faf8df;">
        </button>
        <button @click="fn_color('#cce8cf')" :class="{'is-activate': bgColor == '#cce8cf'}" title="豆沙绿"
          style="background-color: #cce8cf;">
        </button>
        <br>
        <button @click="fn_color('#e3edcd')" :class="{'is-activate': bgColor == '#e3edcd'}" title="青草绿"
          style="background-color: #e3edcd;">
        </button>
        <button @click="fn_color('#e9ecff')" :class="{'is-activate': bgColor == '#e9ecff'}" title="葛巾紫"
          style="background-color: #e9ecff;">
        </button>
        <button @click="fn_color('#eaeaef')" :class="{'is-activate': bgColor == '#eaeaef'}" title="极光灰"
          style="background-color: #eaeaef;">
        </button>
        <button @click="fn_color('#1f1f1f')" :class="{'is-activate': bgColor == '#1f1f1f'}" title="非饱和黑"
          style="background-color: #1f1f1f;">
        </button>
      </div>
      <div>
        tips: 如遇兼容问题，切换明暗模式，<br>或可重复点击取选，并刷新页面
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
const props = {}

const isShowContent = ref(false)

// #region 布局模式
const mode = ref('')
onMounted(()=>{ // 获取 浏览器缓存
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    const mode2 = localStorage.getItem('ReadEnahnce_mode');
    if (mode2) fn_mode(mode2)
  }
})
function fn_mode(n: string) {
  if (mode.value == n) { mode.value = "" } // 允许为空 (防止出bug的一种手段。毕竟有可能框架会更新，也有可能在其他平台如android上样式会不一样)
  else { mode.value = n }
  
  const el_root = document.documentElement;
  const el_toc: HTMLElement = document.querySelector("#toc")
  const el_start1: HTMLElement = document.querySelector(".vp-page-title")
  const el_end1: HTMLElement = document.querySelector(".backlink-container")
  const el_end2: HTMLElement = document.querySelector("footer.vp-page-meta")
  const el_end3: HTMLElement = document.querySelector("nav.vp-page-nav")
  
  const el_sidebar: HTMLElement = document.querySelector("#sidebar")
  const el_mainContent: HTMLElement = document.querySelector("#main-content")

  document.documentElement.setAttribute('read-mode', mode.value)
  // 两侧模式
  if (mode.value == 'side') {
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
      el_root.style.setProperty('--content-width', 'calc(820px + 16px)');
      el_root.style.setProperty('--nf-min-height', '900px');
    }
  }
  // 宽屏模式
  else if (mode.value == 'wide') {
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
  else if (mode.value == 'super-wide') {
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
    
    // 特别地
    el_mainContent.style.paddingBottom = '0';
    let el_tmp: HTMLElement = document.querySelector('.theme-hope-content');
    if (el_tmp) el_tmp.style.paddingBottom = '0';
    // TODO 切换页面会被重置，得改CSS
    el_tmp = document.querySelector('.pdf-viewer-wrapper');
    if (el_tmp) el_tmp.style.height = 'calc(100vh - 110px)'
  }
  // 窄栏模式 (narrow, 近似默认)
  else if (mode.value == 'narrow') {
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
  // 默认模式，需刷新起效
  else {}

  // 存储 浏览器缓存
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    localStorage.setItem('ReadEnahnce_mode', mode.value);
  }
}
// #endregion

// #region 是否显示侧边栏和toc
function fn_switchShowSidebar(isShow?: boolean) {
  const el = document.querySelector('#app>div.theme-container')
  if (!el) { console.warn('没有找到主题主页，无法切换'); return }

  if (isShow == undefined) {
    const hasSidebar = !el.classList.contains('no-sidebar');
    isShow = !hasSidebar
  }

  if (isShow == true) { el.classList.remove('no-sidebar') }
  else if (isShow == false) { el.classList.add('no-sidebar') }
}
function fn_switchShowToc(isShow?: boolean) {
  const el = document.querySelector('#app>div.theme-container')
  if (!el) { console.warn('没有找到主题主页，无法切换'); return }

  if (isShow == undefined) {
    const hasToc = el.classList.contains('has-toc');
    isShow = !hasToc
  }

  if (isShow == true) { el.classList.add('has-toc') }
  else if (isShow == false) { el.classList.remove('has-toc') }
}
// #endregion

// #region 配色相关
const bgColor = ref('')
onMounted(()=>{ // 获取 浏览器缓存
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    const bgColor2 = localStorage.getItem('ReadEnahnce_color');
    if (bgColor2) fn_mode(bgColor2)
  }
})
function fn_color(n: string) {
  if (bgColor.value == n) { bgColor.value = "" }
  else { bgColor.value = n }

  const el_root = document.documentElement;

  if (bgColor.value.startsWith('#')) {
    el_root.style.setProperty('--vp-c-bg', bgColor.value);
    el_root.style.setProperty('--vp-c-bg-soft', `($color: ${bgColor.value}, $alpha: 1.0)`);
    el_root.style.setProperty('--vp-c-bg-elv-soft', `($color: ${bgColor.value}, $alpha: 1.0)`);
  }
  // 默认模式，需刷新起效
  else {}

  // 存储 浏览器缓存
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    localStorage.setItem('ReadEnahnce_color', bgColor.value);
  }
}
// #endregion
</script>

<style lang="scss" scoped>
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
      width: calc(25% - 7px);
      height: 32px; // (20+8+4)
      padding: 4px;
      margin: 0 4px 4px;
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

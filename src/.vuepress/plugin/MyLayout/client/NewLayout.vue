<script setup lang="ts">
/**
 * 此页参考：
 * https://theme-hope.vuejs.press/zh/guide/advanced/replace.html#%E6%8F%92%E6%A7%BD%E5%88%A9%E7%94%A8
 * https://theme-hope.vuejs.press/zh/demo/slot.html
 */

// tsconfig.json "@theme-hope/*": ["../../packages/theme/src/client/*.js"]
// 即这里要将 @theme-hope/* 替换为 vuepress-theme-hope/client/*
import CommonWrapper from "vuepress-theme-hope/client/components/CommonWrapper.js";
import NormalPage from "vuepress-theme-hope/client/components/NormalPage.js";
import SkipLink from "vuepress-theme-hope/client/components/SkipLink.js";
import { FadeSlideY } from "vuepress-theme-hope/client/components/transitions/FadeSlideY.js";

// import RootSidebar from "../../RootSidebar/client/RootSidebar.vue"

import Backlink from "../../BiGraph/client/components/backlink.vue";
import LocalRelationshipMap from "../../BiGraph/client/components/localRelationshipMap.vue";
import GlobalGraph from "../../BiGraph/client/components/globalGraph.vue";
</script>

<template>
  <global-graph></global-graph>
  <SkipLink />

  <CommonWrapper>
    <FadeSlideY>
      <NormalPage>
        <template #contentAfter>
          <backlink></backlink>
        </template>
        <template #tocBefore>
          <local-relationship-map></local-relationship-map>
        </template>
      </NormalPage>
    </FadeSlideY>

    <template #sidebarTop>
      <RootSidebar />
    </template>
    <!-- <template #sidebar>
      <SidebarLinks :config="sidebarItems.value" />
    </template> -->
  </CommonWrapper>
</template>

<style lang="scss">
/**
 * bi-graph 插件行为
 * 
 * 如果您使用的不是vuepress-hope-theme或不是最新版本，请在任意样式文件添加仿照下述代码补全css变量
 */
html {
  /* 文字色 */
  --vp-c-text-1: var(--text-color);
  --vp-c-text: var(--text-color);
  /* 激活色 */
  --vp-c-accent: var(--theme-color);
  /* 边框色 */
  --vp-c-divider: var(--border-color);
  --vp-c-brand: var(--border-color);
  /* 背景色 */
  --vp-c-bg: var(--bg-color);
  --vp-c-bg-mute: var(--bg-color);
  --vp-c-bg-soft: var(--bg-color);
}
</style>

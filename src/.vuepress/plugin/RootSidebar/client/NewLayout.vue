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
import FadeSlideY from "vuepress-theme-hope/client/components/transitions/FadeSlideY.js";

import RootSidebar from "./RootSidebar.vue"
</script>

<template>
  <SkipLink />

  <CommonWrapper>
    <FadeSlideY>
      <NormalPage>
      </NormalPage>
    </FadeSlideY>

    <template #sidebarTop>
      <RootSidebar />
    </template>
    <!-- <template #sidebar>
      <RootSidebar />
    </template> -->
  </CommonWrapper>
</template>

<style lang="scss" scoped>
</style>

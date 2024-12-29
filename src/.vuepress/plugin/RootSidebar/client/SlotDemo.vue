<script setup lang="ts">
// tsconfig.json "@theme-hope/*": ["../../packages/theme/src/client/*.js"]
// 即这里要将 @theme-hope/* 替换为 vuepress-theme-hope/client/*
import CommonWrapper from "vuepress-theme-hope/client/components/CommonWrapper.js";
import NormalPage from "vuepress-theme-hope/client/components/NormalPage.js";
import SkipLink from "vuepress-theme-hope/client/components/SkipLink.js";
import FadeSlideY from "vuepress-theme-hope/client/components/transitions/FadeSlideY.js";
</script>

<template>
  <SkipLink />

  <CommonWrapper>
    <FadeSlideY>
      <NormalPage>
        <template #contentBefore>
          <div class="slot-demo-block">contentBefore Slot</div>
        </template>

        <template #contentAfter>
          <div class="slot-demo-block">contentAfter Slot</div>
        </template>

        <template #top>
          <div class="slot-demo-block">page top Slot</div>
        </template>

        <template #bottom>
          <div class="slot-demo-block">page bottom Slot</div>
        </template>

        <template #tocBefore>
          <div class="slot-demo-block">tocBefore Slot</div>
        </template>

        <template #tocAfter>
          <div class="slot-demo-block">tocAfter Slot</div>
        </template>
      </NormalPage>
    </FadeSlideY>

    <template #sidebarTop>
      <div class="slot-demo-block">sidebarTop Slot</div>
    </template>

    <template #sidebarBottom>
      <div class="slot-demo-block">sidebarBottom Slot</div>
    </template>

    <template #navScreenTop>
      <div class="slot-demo-block">navScreenTop Slot</div>
    </template>

    <template #navScreenBottom>
      <div class="slot-demo-block">navScreenBottom Slot</div>
    </template>
  </CommonWrapper>
</template>

<style lang="scss" scoped>
.slot-demo-inline {
  display: inline-block;
  background-color: var(--vp-c-bg-alt);
  border-radius: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  width: 2rem;
  height: 2rem;
  margin: 0.25em;
}

.slot-demo-block {
  background-color: var(--vp-c-bg-alt);
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  margin: 0.5rem 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: var(--vp-c-text-mute);
}
</style>

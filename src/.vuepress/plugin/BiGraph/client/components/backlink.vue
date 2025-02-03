<script lang="ts" setup>
import {usePageData, withBase} from "vuepress/client";
import {computed} from "vue";
import type {BioChainData} from "../../types";

const data = usePageData();
const biodata = data.value?.bioChainData as BioChainData | undefined;
const hasBacklink = computed(() => {
  return biodata?.backlink && biodata?.backlink?.length > 0;
});
const tot_link = computed(() => {
  return biodata?.backlink?.length;
});
</script>

<template>
  <div class="backlink-container">
    <div class="backlink-header">
      <span>链接到当前文件 </span>
      <span>{{ tot_link }}</span>
    </div>
    <div v-if="!hasBacklink">没有文件链接到当前文件</div>
    <div v-else>
      <template v-for="item in biodata.backlink">
        <div class="backlink-item">
          <router-link :to="withBase(item.link)">{{ item.title }}</router-link>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.backlink-container {
  max-width: var(--content-width, 740px);
  margin-inline: auto;
  padding: 10px;
  border-top: 1px solid #ddd;
}

.backlink-header {
  font-weight: bold;
  margin-bottom: 10px;
}

.backlink-item {
  margin: 5px 0;
}

.backlink-item a {
  text-decoration: none;
}

.backlink-item a:hover {
  text-decoration: underline;
}
</style>

<script lang="ts" setup>
import { Layout } from "vuepress-theme-hope/client";
import Backlink from "./backlink.vue";
import LocalRelationshipMap from "./localRelationshipMap.vue";
import { computed } from "vue";
import GlobalGraph from "./globalGraph.vue";

declare const __RELATIONAL_GRAPH_ENABLE_LOCAL_GRAPH: boolean;
declare const __RELATIONAL_GRAPH_ENABLE_GLOBAL_GRAPH: boolean;
const options = computed(() => {
  return {
    enableLocalGraph: __RELATIONAL_GRAPH_ENABLE_LOCAL_GRAPH,
    enableGlobalGraph: __RELATIONAL_GRAPH_ENABLE_GLOBAL_GRAPH,
  };
});

</script>

<template>

  <global-graph></global-graph>
  <layout>
    <template #contentAfter>
      <backlink></backlink>
    </template>
    <template #tocBefore>
      <local-relationship-map></local-relationship-map>
    </template>
  </layout>
</template>

<style scoped>

</style>
<script setup lang="ts">
const props = defineProps<{
  type?: string,
  data: string,
}>()


import { factoryFlowData } from "./NodeFlow/factoryFlowData"
const result = factoryFlowData(props.type, props.data)
import { ref } from "vue";
let jsonData = ref({})
if (result.code == 0) {
  jsonData.value = result.data
} else {
  jsonData.value = {nodes:[],edges:[]}
}

import NodeFlowContainer from "./NodeFlow/component/NodeFlowContainerS.vue"

</script>

<template>
  <NodeFlowContainer v-if="result.code==0" :jsonData="jsonData" :is-mini="true" />
  <div v-if="result.code!=0">
    {{ result.msg }}
  </div>
</template>

<style lang="scss">
/* import the necessary styles for Vue Flow to work */
@import '@vue-flow/core/dist/style.css';

/* import the default theme, this is optional but generally recommended */
@import '@vue-flow/core/dist/theme-default.css';

.vue-flow {
  height: 400px;
  border: 1px solid currentColor;
  border-radius: 8px;
}
</style>

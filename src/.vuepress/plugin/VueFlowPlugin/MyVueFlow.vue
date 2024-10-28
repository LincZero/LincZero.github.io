
<template>
  <div>
    <NodeFlowContainer v-if="result.code==0" :jsonData="jsonData" :isMini="true"/>
  </div>
  <div v-if="result.code!=0">
    {{ result.msg }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  type?: string,
  data: string,
}>()

// json数据处理
import { factoryFlowData } from "./NodeFlow/factoryFlowData"
const result = factoryFlowData(props.type, props.data)
import { ref } from "vue";
let jsonData = ref({})
if (result.code == 0) {
  jsonData.value = result.data
} else {
  jsonData.value = {nodes:[],edges:[]}
}

// 组件 - 节点流画布
import NodeFlowContainer from "./NodeFlow/component/NodeFlowContainerS.vue"
</script>

<style scoped lang="scss">
</style>

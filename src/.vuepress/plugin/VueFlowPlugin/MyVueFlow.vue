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

// 按钮 - 新视图
let isMini = ref(true)
function fn_newView(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const div = NodeFlowContainerP.value;
    if (!div) { return }
    // 如果是正常大小，切换到全尺寸
    if (div.classList.contains('normal-size')) {
      isMini.value = false
      // document.body.style.overflow = 'hidden'; // 禁用滚动
      if (div.requestFullscreen) {
          div.requestFullscreen();
      } else if (div.webkitRequestFullScreen) {
          div.webkitRequestFullScreen();
      } else if (div.mozRequestFullScreen) {
          div.mozRequestFullScreen();
      } else if (div.msRequestFullscreen) {
          div.msRequestFullscreen(); // IE11
      }
    }
    // 如果已经是全尺寸，切换回正常大小
    else {
      isMini.value = true
      // document.body.style.overflow = ''; // 恢复滚动
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (div.webkitCancelFullScreen) {
        div.webkitCancelFullScreen();
      } else if (div.mozCancelFullScreen) {
        div.mozCancelFullScreen();
      } else if (div.msExitFullscreen) {
        div.msExitFullscreen();
      }
    }
  })
}
// 添加监听器，监听由F11或Esc等方式退出全屏状态的事件
{
  document.addEventListener('fullscreenchange', handleFullScreenChange);
  document.addEventListener('webkitfullscreenchange', handleFullScreenChange);
  document.addEventListener('mozfullscreenchange', handleFullScreenChange);
  document.addEventListener('MSFullscreenChange', handleFullScreenChange);
  function handleFullScreenChange() {
    const div = NodeFlowContainerP.value;
    if (!div) return;
    if (!document.fullscreenElement && isMini) {
      // 全屏退出后，恢复状态
      isMini.value = true;
      div.classList.remove('full-size');
      div.classList.add('normal-size');
    }
    isMini.value = document.fullscreenElement == null;
  }
}

// 组件 - 节点流画布
import NodeFlowContainer from "./NodeFlow/component/NodeFlowContainerS.vue"
const NodeFlowContainerP = ref();
</script>

<template>
  <div ref="NodeFlowContainerP" :class="isMini?'normal-size':'full-size'">
    <NodeFlowContainer v-if="result.code==0" :jsonData="jsonData" :is-mini="isMini" :fn_new-view="fn_newView"/>
  </div>
  <div v-if="result.code!=0">
    {{ result.msg }}
  </div>
</template>

<style scoped lang="scss">
.normal-size {
  margin-bottom: 22px;
}
// .full-size {
//   z-index: 180;
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100vw; /* 占据整个宽度 */
//   height: calc(100vh - 24px); /* 占据整个高度 */
// }
</style>

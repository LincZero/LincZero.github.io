<script lang="ts" setup>
import {computed, nextTick, onMounted, onUnmounted, ref, watch} from "vue";
import {usePageData, useRouter} from "vuepress/client";
import RelationGraph from "./relationGraph.vue";
import type {CanvasSize, MapNodeLink} from "../../types";
import {showGlobalGraph} from "../useGlobalGraph.js";

declare const __RELATIONAL_GRAPH_FOLD_EMPTY_GRAPH: boolean;
declare const __RELATIONAL_GRAPH_LOCAL_GRAPH_DEEP: number;
declare const __RELATIONAL_GRAPH_HEIGHT: number;
declare const __RELATIONAL_GRAPH_MAX_WIDTH: number;
declare const __RELATIONAL_GRAPH_ENABLE_GLOBAL_GRAPH: boolean;
// 基础数据设置
const data = usePageData();
const map_data = computed(() => {
  const bioChainData = (data.value as any)?.bioChainData;
  return bioChainData?.localMap as MapNodeLink | undefined;
});
const router = useRouter();
const graphRef = ref<InstanceType<typeof RelationGraph> | null>(null);
const fullscreenGraphRef = ref<InstanceType<typeof RelationGraph> | null>(null);
const options = computed(() => {
  return {
    foldEmptyGraph: __RELATIONAL_GRAPH_FOLD_EMPTY_GRAPH,
    localGraphDeep: __RELATIONAL_GRAPH_LOCAL_GRAPH_DEEP,
    enableGlobalGraph: __RELATIONAL_GRAPH_ENABLE_GLOBAL_GRAPH,

    graphSize: {
      height: __RELATIONAL_GRAPH_HEIGHT,
      maxWidth: __RELATIONAL_GRAPH_MAX_WIDTH,
    },
  };
});

const shouldFoldEmptyGraph = computed(() => {
  if (!options.value.foldEmptyGraph) return true;
  return map_data.value?.nodes.length > 1;
});

// 处理节点点击事件
const handleNodeClick = (path: string) => {
  router.push(`/${path}`);
};

const containerRef = ref<HTMLElement | null>(null);
const fullscreenContainerRef = ref<HTMLElement | null>(null);
const canvasSize = ref<CanvasSize>({
  width: 300,
  height: options.value.graphSize.height,
});
const containerWidth = ref<number>(0);
const isLargeScreen = ref<boolean>(false);
const isExpanded = ref<boolean>(false);
const fullscreenCanvasSize = ref<CanvasSize>({
  width: 800,
  height: 600,
});

function updateScreenSize() {
  isLargeScreen.value = window.matchMedia("(min-width: 1440px)").matches;
}

function updateContainerWidth() {
  if (containerRef.value) {
    const parentElement = containerRef.value.parentElement;
    if (!parentElement) return;

    const parentRect = parentElement.getBoundingClientRect();
    const parentStyle = window.getComputedStyle(parentElement);
    const parentPadding =
        parseFloat(parentStyle.paddingLeft) +
        parseFloat(parentStyle.paddingRight);

    if (isLargeScreen.value) {
      // 大屏幕时使用距离屏幕边距的算方式
      if (options.value.graphSize.maxWidth) {
        containerWidth.value = Math.min(
            options.value.graphSize.maxWidth,
            document.documentElement.clientWidth - parentRect.left - 40
        );
      } else {
        containerWidth.value =
            document.documentElement.clientWidth - parentRect.left - 40;
      }
    } else {
      // 小屏幕时考虑父元素的内边距
      containerWidth.value = Math.max(
          300,
          parentRect.width - parentPadding - 20
      );
    }

    // 更新 canvasSize
    canvasSize.value = {
      width: containerWidth.value,
      height: options.value.graphSize.height,
    };

    // 重启模拟程序
    nextTick(() => {
      graphRef.value?.restartSimulation();
    });
  }
}

// 添加切换折叠状态的方法
function toggleExpand() {
  isExpanded.value = !isExpanded.value;
  // 展开时要重新计算和更新画布
  if (isExpanded.value) {
    nextTick(() => {
      updateContainerWidth();
      graphRef.value?.restartSimulation();
    });
  }
}

let mediaQuery: MediaQueryList | null = null;
let resizeObserver: ResizeObserver | null = null;

const updateFullscreenSize = () => {
  if (fullscreenContainerRef.value) {
    const rect = fullscreenContainerRef.value.getBoundingClientRect();
    fullscreenCanvasSize.value = {
      width: Math.floor(rect.width),
      height: Math.floor(rect.height),
    };
    // 重启力导向图模拟
    nextTick(() => {
      if (fullscreenGraphRef.value) {
        fullscreenGraphRef.value.restartSimulation();
      }
    });
  }
};

onMounted(() => {
  // 初始化屏幕尺寸状态
  updateScreenSize();

  // 添加媒体查询监听器
  mediaQuery = window.matchMedia("(min-width: 1440px)");
  mediaQuery.addEventListener("change", updateScreenSize);

  // 初始化容器宽度并确保DOM渲染完成
  nextTick(() => {
    updateContainerWidth();
    // 重启力导向图模拟
    graphRef.value?.restartSimulation();
  });

  // 监听窗口大小变化
  window.addEventListener("resize", updateContainerWidth);

  // 修改 ResizeObserver
  resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      if (entry.target === containerRef.value) {
        updateContainerWidth();
      } else if (entry.target === fullscreenContainerRef.value) {
        updateFullscreenSize();
        // 重启力导向图模拟
        nextTick(() => {
          fullscreenGraphRef.value?.restartSimulation();
        });
      }
    }
  });

  // 开始观察容器元素
  if (containerRef.value) {
    resizeObserver.observe(containerRef.value);
  }
});

// 在组件卸载时清理所有事件监听器和观察器
onUnmounted(() => {
  // 清理窗口事件监听器
  window.removeEventListener("resize", updateContainerWidth);
  window.removeEventListener("resize", updateFullscreenSize);

  // 清理媒体查询监听器
  if (mediaQuery) {
    mediaQuery.removeEventListener("change", updateScreenSize);
  }

  // 清理 ResizeObserver
  if (resizeObserver) {
    resizeObserver.disconnect();
  }

  // 停止力导向图模拟
  // @ts-ignore
  graphRef.value?.stopSimulation?.();
});
const isLocalGraphFullScreen = ref(false);

// 监听全屏状态变化
watch(isLocalGraphFullScreen, (value) => {
  if (value) {
    // 添加窗口大小变化监听
    window.addEventListener("resize", updateFullscreenSize);
    // 等待组件挂载完成后再计算尺寸
    nextTick(() => {
      if (fullscreenContainerRef.value) {
        updateFullscreenSize();
        // 然后再添加观察器
        if (resizeObserver) {
          resizeObserver.observe(fullscreenContainerRef.value);
        }
      }
    });
  } else {
    // 移除窗口大小变化监听
    window.removeEventListener("resize", updateFullscreenSize);
    if (fullscreenContainerRef.value && resizeObserver) {
      resizeObserver.unobserve(fullscreenContainerRef.value);
    }
  }
});
</script>

<template>
  <div v-if="shouldFoldEmptyGraph" class="relationship-map">
    <button
        v-if="!isLargeScreen"
        class="relationship-map__toggle-btn"
        @click="toggleExpand"
    >
      查看关系图谱
      {{ isExpanded ? "▼" : "▶" }}
    </button>
    <div
        ref="containerRef"
        :class="{
        'relationship-map__container--expanded': isExpanded || isLargeScreen,
      }"
        :style="
        isLargeScreen
          ? {
              width: containerWidth + 'px',
              height: options.graphSize.height + 'px',
            }
          : ''
      "
        class="relationship-map__container"
    >
      <button
          class="relationship-map__btn relationship-map__btn--fullscreen"
          @click="isLocalGraphFullScreen = true"
      >
        <svg
            fill="none"
            height="24"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              d="M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
          />
        </svg>
      </button>
      <button
          v-if="options.enableGlobalGraph"
          class="relationship-map__btn relationship-map__btn--global"
          @click="showGlobalGraph = true"
      >
        <svg
            class="svg-icon lucide-git-fork"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="18" r="3"></circle>
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="18" cy="6" r="3"></circle>
          <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></path>
          <path d="M12 12v3"></path>
        </svg>
      </button>

      <relation-graph
          v-if="!isLocalGraphFullScreen"
          ref="graphRef"
          :canvas-height="canvasSize.height"
          :canvas-width="canvasSize.width"
          :current-path="router.currentRoute.value.path"
          :data="map_data"
          @node-click="handleNodeClick"
      ></relation-graph>
    </div>
  </div>

  <div
      v-if="isLocalGraphFullScreen"
      class="relationship-map-fullscreen"
      @click.self="isLocalGraphFullScreen = false"
  >
    <div
        ref="fullscreenContainerRef"
        class="relationship-map-fullscreen__container"
    >
      <button
          class="relationship-map__btn relationship-map__btn--close"
          @click="isLocalGraphFullScreen = false"
      >
        <svg
            fill="none"
            height="24"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
          />
          <path
              d="M15 16L9 8"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
          />
          <path
              d="M9 16L15 8"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
          />
        </svg>
      </button>
      <relation-graph
          ref="fullscreenGraphRef"
          :canvas-height="fullscreenCanvasSize.height"
          :canvas-width="fullscreenCanvasSize.width"
          :current-path="router.currentRoute.value.path"
          :data="map_data"
          @node-click="handleNodeClick"
      ></relation-graph>
    </div>
  </div>
</template>

<style scoped>
/* 基础样式 */
.relationship-map {
  width: 100%;
}

/* 切换按钮样式 */
.relationship-map__toggle-btn {
  font-size: 14px;
  font-weight: 600;
  display: block;
  width: 100%;
  margin-bottom: 8px;
  padding: 8px 8px 8px 16px;
  cursor: pointer;
  text-align: left;
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-mute);
}

/* 图谱容器样式 */
.relationship-map__container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

/* 按钮基础样式 */
.relationship-map__btn {
  position: absolute;
  z-index: 2;
  top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 32px;
  padding: 0;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: transparent;
}

.relationship-map__btn svg {
  width: 16px;
  height: 16px;
  opacity: 0.75;
}

.relationship-map__btn:hover {
  transform: scale(1.05);
  background: var(--vp-c-bg-soft);
}

.relationship-map__btn:hover svg {
  opacity: 1;
}

/* 按钮变体 */
.relationship-map__btn--fullscreen {
  right: 8px;
}

.relationship-map__btn--global {
  right: 40px;
}

.relationship-map__btn--close {
  top: 8px;
  right: 8px;
}

/* 全屏模式样式 */
.relationship-map-fullscreen {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
}

.relationship-map-fullscreen__container {
  position: fixed;
  z-index: 1001;
  top: 10%;
  left: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 80%;
  border-radius: 8px;
  background-color: var(--vp-c-bg);
}

/* 响应式样式 */
@media (max-width: 1439px) {
  .relationship-map__container {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding: 2px;
    opacity: 0;
  }

  .relationship-map__container--expanded {
    height: 300px;
    padding-top: 10px;
    opacity: 1;
  }

  .relationship-map__btn {
    top: 16px;
  }

  .relationship-map__btn--fullscreen {
    right: 24px;
  }

  canvas {
    position: relative !important;
  }
}
</style>

<script setup lang="ts">
import * as d3 from "d3";
import {computed, onMounted, onUnmounted, ref, watch} from "vue";
import type {CanvasSize, Link, MapNodeLink, MousePosition, Node,} from "../../types";

// 定义 emit 事件
const emit = defineEmits<{
  (e: "nodeClick", path: string): void;
}>();

// 用于存储模拟程序的引用
let simulation: d3.Simulation<Node, Link> | null = null;

// 重启模拟程序的方法
const restartSimulation = (): void => {
  if (simulation) {
    simulation
        .alpha(FORCE_CONFIG.simulation.restart.alpha)
        .alphaTarget(FORCE_CONFIG.simulation.restart.alphaTarget)
        .restart();
  }
};

// 暴露方法给外部使用
defineExpose({
  restartSimulation,
});

// 常量配置
const CANVAS_CONFIG = {
  defaultWidth: 300,
  defaultHeight: 300,
  nodeRadius: 5,
  nodePadding: 5,
  zoomExtent: [0.1, 10],
  nodeClickRadius: 15,
  hoverNodeRadius: 8,
} as const;

// 力导向图配置
const FORCE_CONFIG = {
  link: d3
      .forceLink<Node, Link>()
      .id((d: Node) => d.id)
      .distance(100) // 调整连接线的距离
      .strength(0.8), // 调整连接线的强度
  charge: d3
      .forceManyBody<Node>()
      .strength((d: Node) => -100) // 调整电荷力，减少排斥力
      .distanceMin(50) // 最小距离
      .distanceMax(300), // 最大距离
  collision: d3
      .forceCollide<Node>()
      .radius(30) // 调整碰撞半径
      .strength(0.7), // 调整碰撞力的强度
  x: d3.forceX<Node>().strength((d: Node) => (d.isIsolated ? 0.02 : 0.1)), // 减小孤立节点的X轴中心力
  y: d3.forceY<Node>().strength((d: Node) => (d.isIsolated ? 0.02 : 0.1)), // 减小孤立节点的Y轴中心力
  simulation: {
    alphaDecay: 0.01, // 增加alphaDecay，使得模拟更快停止
    alphaMin: 0.001, // 设置alphaMin，避免无限刷新
    velocityDecay: 0.6, // 调整速度衰减，使得节点移动更平滑
    restart: {
      alpha: 1,
      alphaTarget: 0.3,
      watchAlpha: 0.3,
      dataChangeAlpha: 1,
      dragEndAlphaTarget: 0,
      dragEndAlpha: 0.3,
    },
  },
} as const;

// 样式配置
const STYLE_CONFIG = {
  link: {
    color: "#aaa",
    normalOpacity: 0.3,
    highlightOpacity: 1,
  },
  node: {
    normalOpacity: 0.3,
    highlightOpacity: 0.8,
  },
  text: {
    font: "12px 'Microsoft YaHei', 'Heiti SC', 'SimHei', -apple-system, sans-serif",
    offset: 25,
    minScale: 0.5,
    maxScale: 1.5,
  },
  currentNode: {
    strokeWidth: 2,
  },
} as const;

// 添加路径匹配工具函数
function isPathMatch(routePath: string, nodePath: string): boolean {
  // 1. 码 URL 编码的字符
  const decodedRoutePath = decodeURIComponent(routePath);

  // 2. 移除两个路径的后缀（.html  .md 等）
  const cleanRoutePath = decodedRoutePath.replace(/\.[^/.]+$/, "");
  const cleanNodePath = nodePath.replace(/\.[^/.]+$/, "");

  // 3. 移除开头的斜杠
  const normalizedRoutePath = cleanRoutePath.replace(/^\//, "");
  const normalizedNodePath = cleanNodePath.replace(/^\//, "");

  return normalizedRoutePath === normalizedNodePath;
}

const props = defineProps<{
  data: MapNodeLink;
  currentPath?: string;
  canvasWidth: number;
  canvasHeight: number;
}>();

const canvasSize = computed<CanvasSize>(() => ({
  width: props.canvasWidth,
  height: props.canvasHeight,
}));

const canvasRef = ref<HTMLCanvasElement | null>(null);
const mouseDownTime = ref<number>(0);
const mouseDownPosition = ref<MousePosition>({
  x: 0,
  y: 0,
});
const map_data = props.data;

// 添加颜色存储
const themeColors = ref({
  accent: "",
  text: "",
  // 记录实际使用的CSS变量名,用于后续监听
  cssVariableName: {
    accent: "",
    text: "",
  },
});

// 修改获取主题色函数
function initThemeColors(): void {
  const root = getComputedStyle(document.documentElement);

  // 获取accent颜色
  if (root.getPropertyValue("--vp-c-accent").trim()) {
    themeColors.value.accent = root.getPropertyValue("--vp-c-accent").trim();
    themeColors.value.cssVariableName.accent = "--vp-c-accent";
  } else if (root.getPropertyValue("--theme-color").trim()) {
    themeColors.value.accent = root.getPropertyValue("--theme-color").trim();
    themeColors.value.cssVariableName.accent = "--theme-color";
  } else {
    themeColors.value.accent = "#299764";
    themeColors.value.cssVariableName.accent = "";
  }

  // 获取text颜色
  if (root.getPropertyValue("--vp-c-text").trim()) {
    themeColors.value.text = root.getPropertyValue("--vp-c-text").trim();
    themeColors.value.cssVariableName.text = "--vp-c-text";
  } else if (root.getPropertyValue("--text-color").trim()) {
    themeColors.value.text = root.getPropertyValue("--text-color").trim();
    themeColors.value.cssVariableName.text = "--text-color";
  } else {
    themeColors.value.text = "#000000";
    themeColors.value.cssVariableName.text = "";
  }
}

onMounted(() => {
  // 初始化颜色
  initThemeColors();

  // 设置 MutationObserver 监听样式变化
  const styleObserver = new MutationObserver(() => {
    const root = getComputedStyle(document.documentElement);
    let shouldUpdate = false;
    // 只检查实际使用的CSS变量
    if (themeColors.value.cssVariableName.accent) {
      const newAccent = root
          .getPropertyValue(themeColors.value.cssVariableName.accent)
          .trim();
      if (newAccent !== themeColors.value.accent) {
        shouldUpdate = true;
      }
    }

    if (themeColors.value.cssVariableName.text) {
      const newText = root
          .getPropertyValue(themeColors.value.cssVariableName.text)
          .trim();
      if (newText !== themeColors.value.text) {
        shouldUpdate = true;
      }
    }

    if (shouldUpdate) {
      initThemeColors();
      // 触发重绘
      if (simulation) {
        ticked();
      }
    }
  });

  styleObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["style", "class", "data-theme"],
  });

  // 组件卸载时清理observer
  onUnmounted(() => {
    styleObserver.disconnect();
  });

  if (!map_data) {
    return;
  }
  // 初始化变量
  const canvas = canvasRef.value as HTMLCanvasElement;
  const context = canvas.getContext("2d") as CanvasRenderingContext2D;
  let isDragging: boolean = false;
  let draggingNode: Node | null = null;
  let transform: d3.ZoomTransform = d3.zoomIdentity;
  let hoveredNode: Node | null = null;
  let observer: MutationObserver | null = null;

  // 事件监听器设置
  function setupEventListeners(): void {
    const zoom = d3
        .zoom<HTMLCanvasElement, unknown>()
        .scaleExtent(CANVAS_CONFIG.zoomExtent as [number, number])
        .filter((event) => filterZoomEvent(event))
        .touchable(true)
        .on("zoom", (event: d3.D3ZoomEvent<HTMLCanvasElement, unknown>) => {
          transform = event.transform;
          ticked();
        });

    const touchOptions: AddEventListenerOptions = {
      passive: true,
      capture: false,
    };

    d3.select<HTMLCanvasElement, unknown>(canvas)
        .on("touchstart touchmove", null)
        .call(zoom);

    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("touchstart", onMouseDown, touchOptions);
    canvas.addEventListener("click", onClick);
    canvas.addEventListener("touchend", onClick);
    canvas.addEventListener("mousemove", onCanvasMouseMove);
    canvas.addEventListener("touchmove", onCanvasMouseMove, touchOptions);
    canvas.addEventListener("mouseleave", onCanvasMouseLeave);
    canvas.addEventListener("touchend", onCanvasMouseLeave);
  }

  // 初始化 observer
  observer = new MutationObserver(() => {
    if (canvas && context) {
      ticked();
    }
  });

  // 观察 html 元素的 style 属性
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["style", "class", "data-theme"],
  });

  // 清理函数
  const cleanup = (): void => {
    if (observer) {
      observer.disconnect();
    }
    if (simulation) {
      simulation.stop();
    }
    // 移除所有事件监听器
    canvas.removeEventListener("mousedown", onMouseDown);
    canvas.removeEventListener("click", onClick);
    canvas.removeEventListener("mousemove", onCanvasMouseMove);
    canvas.removeEventListener("mouseleave", onCanvasMouseLeave);
    canvas.removeEventListener("touchstart", onMouseDown);
    canvas.removeEventListener("touchend", onClick);
    canvas.removeEventListener("touchmove", onCanvasMouseMove);
    canvas.removeEventListener("touchend", onCanvasMouseLeave);
    d3.select(canvas).on(".zoom", null);
  };

  // 在组件卸载时调用清理函数
  onUnmounted(cleanup);

  // 找到当前节点
  let currentNode: Node | undefined;
  if (props.currentPath) {
    currentNode = map_data.nodes.find((node) =>
        isPathMatch(props.currentPath!, node.value.path)
    );
    if (currentNode) {
      currentNode.isCurrent = true;
      currentNode.fx = canvasSize.value.width / 2;
      currentNode.fy = canvasSize.value.height / 2;
      setTimeout(() => {
        if (currentNode) {
          currentNode.fx = null;
          currentNode.fy = null;
        }
      }, 1000);
    }
  }

  // 初始化力导向图
  simulation = initializeSimulation();
  // 设置事件监听
  setupEventListeners();

  // 力导图初始化
  function initializeSimulation(): d3.Simulation<Node, Link> {
    // 标记孤立节点
    map_data.nodes.forEach((node) => {
      node.isIsolated = !map_data.links.some(
          (link) =>
              (typeof link.source === "string"
                  ? link.source === node.id
                  : link.source === node) ||
              (typeof link.target === "string"
                  ? link.target === node.id
                  : link.target === node)
      );

      // 设置节点的初始位置在画布中心
      node.x = canvasSize.value.width / 2;
      node.y = canvasSize.value.height / 2;
    });

    // 创建一个 center force
    const centerForce = d3
        .forceCenter<Node>(
            canvasSize.value.width / 2,
            canvasSize.value.height / 2
        )
        .strength(0.002);

    window.simulation = d3
        .forceSimulation<Node>(map_data.nodes)
        .force("link", FORCE_CONFIG.link.links(map_data.links))
        .force("charge", FORCE_CONFIG.charge)
        .force("collision", FORCE_CONFIG.collision)
        .force("center", centerForce)
        .force("x", FORCE_CONFIG.x.x(canvasSize.value.width / 2))
        .force("y", FORCE_CONFIG.y.y(canvasSize.value.height / 2))
        .alphaDecay(FORCE_CONFIG.simulation.alphaDecay)
        .alphaMin(FORCE_CONFIG.simulation.alphaMin)
        .velocityDecay(FORCE_CONFIG.simulation.velocityDecay)
        .on("tick", () => {
          ticked();
        });

    return window.simulation;
  }

  // 事件处理数
  function filterZoomEvent(
      event: d3.D3ZoomEvent<HTMLCanvasElement, unknown>
  ): boolean {
    // 获取原始事件
    const sourceEvent = event.sourceEvent || event;

    // 如果是触摸事件，需要检查触摸点是否在节点上
    if (sourceEvent.type === "touchstart") {
      const touch = sourceEvent.touches[0];
      const rect = canvas.getBoundingClientRect();
      const x = (touch.clientX - rect.left - transform.x) / transform.k;
      const y = (touch.clientY - rect.top - transform.y) / transform.k;
      const node = simulation.find(x, y, CANVAS_CONFIG.nodeClickRadius);
      return !node; // 如果触摸点在节点上，阻止缩放
    }
    // 对于鼠标事件保持原有逻辑
    if (sourceEvent.type === "mousedown") {
      const [x, y] = transform.invert(d3.pointer(sourceEvent, canvas));
      return !isMouseOverNode(x, y) && !draggingNode;
    }
    return true;
  }

  function onMouseDown(event: MouseEvent | TouchEvent): void {
    if (event.type === "touchstart") {
      event.preventDefault();
    }

    const point = (event as TouchEvent).touches
        ? (event as TouchEvent).touches[0]
        : (event as MouseEvent);
    const [x, y] = transform.invert(d3.pointer(point, canvas));
    draggingNode = simulation.find(x, y, CANVAS_CONFIG.nodeClickRadius);

    // 记录按下时的时间和位置
    mouseDownTime.value = Date.now();
    mouseDownPosition.value = {
      x: point.clientX,
      y: point.clientY,
    };

    if (draggingNode) {
      // 设置当前拖拽的节点为悬停节点
      hoveredNode = draggingNode;

      event.stopPropagation();
      document.body.style.userSelect = "none";
      draggingNode.fx = x;
      draggingNode.fy = y;
      simulation
          .alphaTarget(FORCE_CONFIG.simulation.restart.alphaTarget)
          .restart();

      const touchOptions: AddEventListenerOptions = {
        passive: false,
        capture: false,
      };

      // 根据事件类型绑定对应的事件监听器
      if ((event as TouchEvent).touches) {
        window.addEventListener("touchmove", onMouseMove, touchOptions);
        window.addEventListener("touchend", onMouseUp);
      } else {
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
      }
    }
  }

  // 处理鼠标移动事件
  function onMouseMove(event) {
    if (draggingNode) {
      const point = event.touches ? event.touches[0] : event;
      // 计算移动距离
      const moveDistance = Math.sqrt(
          Math.pow(point.clientX - mouseDownPosition.value.x, 2) +
          Math.pow(point.clientY - mouseDownPosition.value.y, 2)
      );

      // 只有当移动距离大于5像素时才开始拖拽
      if (moveDistance > 5) {
        isDragging = true;
        const rect = canvas.getBoundingClientRect();
        // 计算相对于画布的坐标
        const x = (point.clientX - rect.left - transform.x) / transform.k;
        const y = (point.clientY - rect.top - transform.y) / transform.k;

        // 获取边界内的位置并更新节点位置
        const boundedPosition = getBoundedPosition(x, y);
        updateDraggingNodePosition(boundedPosition);
        simulation.alphaTarget(FORCE_CONFIG.simulation.restart.alphaTarget);
      }
      event.preventDefault();
    }
  }

  // 处理鼠标松开事件
  function onMouseUp() {
    if (draggingNode) {
      // 清除节点的固定位置
      draggingNode.fx = null;
      draggingNode.fy = null;
      document.body.style.userSelect = "";
      // 清除悬停节点和拖拽节点
      hoveredNode = null;
      draggingNode = null;
      simulation
          .alphaTarget(FORCE_CONFIG.simulation.restart.dragEndAlphaTarget)
          .alpha(FORCE_CONFIG.simulation.restart.dragEndAlpha);

      // 根据事件类型移除对应的事件监听器
      if (event.type === "touchend") {
        window.removeEventListener("touchmove", onMouseMove);
        window.removeEventListener("touchend", onMouseUp);
      } else {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
      }
    }
  }

  // 获取边界内的位置
  function getBoundedPosition(x, y) {
    // 计算边界范围
    const bounds = {
      left: -transform.x / transform.k,
      top: -transform.y / transform.k,
      right: (canvasSize.value.width - transform.x) / transform.k,
      bottom: (canvasSize.value.height - transform.y) / transform.k,
    };

    // 返回限在边界内的坐标
    return {
      x: Math.max(
          bounds.left + CANVAS_CONFIG.nodePadding,
          Math.min(bounds.right - CANVAS_CONFIG.nodePadding, x)
      ),
      y: Math.max(
          bounds.top + CANVAS_CONFIG.nodePadding,
          Math.min(bounds.bottom - CANVAS_CONFIG.nodePadding, y)
      ),
    };
  }

  // 更新拖拽节点的位置
  function updateDraggingNodePosition({x, y}) {
    draggingNode.x = x;
    draggingNode.y = y;
    draggingNode.fx = x;
    draggingNode.fy = y;
  }

  // 渲染相关函数
  // 每帧更新画布内容
  function ticked() {
    context.clearRect(0, 0, canvasSize.value.width, canvasSize.value.height);
    context.save();
    applyTransform();
    drawLinks();
    drawNodes();
    drawLabels();
    context.restore();
  }

  // 应用坐标变换
  function applyTransform() {
    context.translate(transform.x, transform.y);
    context.scale(transform.k, transform.k);
  }

  // 绘制连接线
  function drawLink(d) {
    context.moveTo(d.source.x, d.source.y);
    context.lineTo(d.target.x, d.target.y);
  }

  // 绘制节点
  function drawNode(d, radius) {
    context.moveTo(d.x + radius, d.y);
    context.arc(d.x, d.y, radius, 0, 2 * Math.PI);
  }

  // 检查鼠标是否在节点上
  function isMouseOverNode(x, y) {
    return map_data.nodes.some((node) => {
      const dx = node.x - x;
      const dy = node.y - y;
      return Math.sqrt(dx * dx + dy * dy) < CANVAS_CONFIG.nodeClickRadius;
    });
  }

  // 处理点击事件
  function onClick(event) {
    // 获取点击位置
    const point = event.changedTouches ? event.changedTouches[0] : event;

    // 计算点击持续时间和移动距离
    const clickDuration = Date.now() - mouseDownTime.value;
    const moveDistance = Math.sqrt(
        Math.pow(point.clientX - mouseDownPosition.value.x, 2) +
        Math.pow(point.clientY - mouseDownPosition.value.y, 2)
    );

    // 判断是否为有效点击（时间短且移动距离小）
    if (clickDuration < 300 && moveDistance < 5) {
      const rect = canvas.getBoundingClientRect();
      const x = (point.clientX - rect.left - transform.x) / transform.k;
      const y = (point.clientY - rect.top - transform.y) / transform.k;
      const clickedNode = simulation.find(x, y, CANVAS_CONFIG.nodeClickRadius);

      // 如果点击了非当前节点，触发节点点击事件
      if (clickedNode && !isDragging) {
        if (!clickedNode.isCurrent) {
          emit("nodeClick", clickedNode.value.path);
        }
      }
    }

    isDragging = false;
  }

  function onCanvasMouseMove(event: MouseEvent | TouchEvent): void {
    if (draggingNode) {
      return;
    }

    const point = (event as TouchEvent).touches
        ? (event as TouchEvent).touches[0]
        : (event as MouseEvent);
    const rect = canvas.getBoundingClientRect();
    const x = (point.clientX - rect.left - transform.x) / transform.k;
    const y = (point.clientY - rect.top - transform.y) / transform.k;
    const node = simulation.find(x, y, CANVAS_CONFIG.nodeClickRadius);

    if (node !== hoveredNode) {
      hoveredNode = node;
      ticked(); // 重新渲染
    }
  }

  function onCanvasMouseLeave(): void {
    if (hoveredNode) {
      hoveredNode = null;
      ticked(); // 重新渲染
    }
  }

  // 修改 drawLinks 函数
  function drawLinks(): void {
    const {accent} = themeColors.value;

    map_data.links.forEach((link) => {
      context.beginPath();
      drawLink(link);

      if (
          hoveredNode &&
          (link.source === hoveredNode || link.target === hoveredNode)
      ) {
        context.strokeStyle = accent;
        context.globalAlpha = STYLE_CONFIG.link.highlightOpacity;
      } else {
        context.strokeStyle = STYLE_CONFIG.link.color;
        context.globalAlpha = hoveredNode
            ? STYLE_CONFIG.link.normalOpacity
            : STYLE_CONFIG.link.highlightOpacity;
      }

      context.stroke();
    });
    context.globalAlpha = 1;
  }

  // 修改 drawNodes 函数
  function drawNodes(): void {
    const {accent, text} = themeColors.value;

    // 获与悬停点相连的点
    const connectedNodes = new Set<Node>();
    if (hoveredNode) {
      map_data.links.forEach((link) => {
        if (link.source === hoveredNode) {
          connectedNodes.add(link.target as Node);
        }
        if (link.target === hoveredNode) {
          connectedNodes.add(link.source as Node);
        }
      });
    }

    // 先绘制所有普通节点（包括孤立节点）
    context.beginPath();
    map_data.nodes
        .filter((d) => !d.isCurrent && d !== hoveredNode)
        .forEach((d) => {
          drawNode(d, CANVAS_CONFIG.nodeRadius);
        });
    context.fillStyle = text;
    context.globalAlpha = hoveredNode
        ? STYLE_CONFIG.node.normalOpacity
        : STYLE_CONFIG.node.highlightOpacity;
    context.fill();

    // 如果有悬停节点，绘制与其相连的节点
    if (hoveredNode) {
      context.beginPath();
      Array.from(connectedNodes).forEach((d) => {
        if (!d.isCurrent) {
          drawNode(d, CANVAS_CONFIG.nodeRadius);
        }
      });
      context.fillStyle = text;
      context.globalAlpha = STYLE_CONFIG.node.highlightOpacity;
      context.fill();
    }

    // 绘制悬停节点
    if (hoveredNode && !hoveredNode.isCurrent) {
      context.beginPath();
      drawNode(hoveredNode, CANVAS_CONFIG.hoverNodeRadius);
      context.fillStyle = accent;
      context.globalAlpha = STYLE_CONFIG.node.highlightOpacity;
      context.fill();
    }

    // 绘制当前节点
    const currentNode = map_data.nodes.find((d) => d.isCurrent);
    if (currentNode) {
      context.beginPath();
      drawNode(
          currentNode,
          currentNode === hoveredNode
              ? CANVAS_CONFIG.hoverNodeRadius
              : CANVAS_CONFIG.nodeRadius
      );
      context.fillStyle = accent;
      context.globalAlpha =
          hoveredNode &&
          currentNode !== hoveredNode &&
          !connectedNodes.has(currentNode)
              ? STYLE_CONFIG.node.normalOpacity
              : STYLE_CONFIG.node.highlightOpacity;
      context.fill();
    }

    // 恢复默认透明度
    context.globalAlpha = 1;
  }

  // 修改 drawLabels 函数
  function drawLabels(): void {
    context.font = STYLE_CONFIG.text.font;
    const {text} = themeColors.value;

    // 获取与悬停节点相连的节点集合
    const connectedNodes = new Set<Node>();
    if (hoveredNode) {
      map_data.links.forEach((link) => {
        if (link.source === hoveredNode) {
          connectedNodes.add(link.target as Node);
        }
        if (link.target === hoveredNode) {
          connectedNodes.add(link.source as Node);
        }
      });
    }

    map_data.nodes.forEach((node) => {
      let shouldDrawText = false;
      let opacity = 1;

      if (transform.k > STYLE_CONFIG.text.minScale) {
        shouldDrawText = true;
        opacity = Math.min(
            (transform.k - STYLE_CONFIG.text.minScale) /
            (STYLE_CONFIG.text.maxScale - STYLE_CONFIG.text.minScale),
            1
        );

        // 如果有悬停节点，调整透明度
        if (hoveredNode) {
          if (node === hoveredNode || connectedNodes.has(node)) {
          } else {
            opacity = opacity * STYLE_CONFIG.node.normalOpacity; // 降低非相关节点的文字透明度
          }
        }
      }

      if (shouldDrawText) {
        const textWidth = context.measureText(node.value.title).width;
        context.fillStyle = text;
        context.globalAlpha = opacity;
        context.fillText(
            node.value.title,
            node.x - textWidth / 2,
            node.y + STYLE_CONFIG.text.offset
        );
        context.globalAlpha = 1; // 恢复默认透明度
      }
    });
  }
});
declare global {
  // @ts-ignore
  interface Window {
    simulation: d3.Simulation<Node, Link>;
  }
}
watch(
    () => canvasSize.value,
    (): void => {
      if (window.simulation) {
        const centerForce = d3
            .forceCenter<Node>(
                canvasSize.value.width / 2,
                canvasSize.value.height / 2
            )
            .strength(0.002);
        window.simulation
            .force("center", centerForce)
            .force("x", FORCE_CONFIG.x.x(canvasSize.value.width / 2))
            .force("y", FORCE_CONFIG.y.y(canvasSize.value.height / 2));
        window.simulation
            .alpha(FORCE_CONFIG.simulation.restart.watchAlpha)
            .restart();
      }
    }
);

// 添加组件卸载时的清理
onUnmounted((): void => {
  if (simulation) {
    simulation.stop();
  }
});

// 添加 watch 监听 data 变化
watch(
    () => props.data,
    (newData) => {
      if (!newData || !simulation) return;

      // 更新节点和连接
      simulation
          .nodes(newData.nodes)
          .force("link", FORCE_CONFIG.link.links(newData.links));
      // 重启模拟
      simulation.alpha(FORCE_CONFIG.simulation.restart.dataChangeAlpha).restart();
    }
);
</script>

<template>
  <canvas
      ref="canvasRef"
      :width="canvasSize.width"
      :height="canvasSize.height"
      :style="{
      width: canvasSize.width + 'px',
      height: canvasSize.height + 'px',
    }"
  ></canvas>
</template>

<style scoped>
canvas {
  border: 1px solid rgb(60, 60, 67);
  margin: 0;
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
}
</style>

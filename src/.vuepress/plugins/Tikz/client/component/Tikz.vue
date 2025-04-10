<template>
  <div class="tikz">
    <div class="tikz-ref" ref="ref_tikz"></div>
    <!-- TODO 在未加载出来之前，给个占位和提示文字 -->
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { ref } from 'vue';

// import { optimize } from "./svgo.browser"; // 573KB
// @ts-ignore
// import tikzjaxJs from 'inline:./tikzjax.js'; // 6.7MB

const props = defineProps<{
  data: string
}>()

// #region tikzjax依赖
function loadTikZJax() {
  if (document.querySelector('script[src="https://tikzjax.com/v1/tikzjax.js"]')) {
    renderTikz()
    return
  }

  const style = document.createElement("link"); document.head.appendChild(style)
  style.rel = "stylesheet"
  style.type = "text/css"
  style.href = 'https://tikzjax.com/v1/fonts.css'

  const script = document.createElement("script"); document.head.appendChild(script)
  script.id = "tikzjax"
  script.type = "text/javascript"
  // script.innerText = tikzjaxJs
  script.src = 'https://tikzjax.com/v1/tikzjax.js'

  script.onload = () => {
    renderTikz()
    console.log('TikZJax loaded successfully')
  }
  script.onerror = () => {
    console.error('Failed to load TikZJax')
  }

  document.addEventListener('tikzjax-load-finished', onTikzFinish)
}
onMounted(() => {
  loadTikZJax()
})
// #endregion

// #region tikzjax渲染触发
const ref_tikz = ref<HTMLElement | null>(null)
function renderTikz() {
  if (!ref_tikz.value) return
  const script = document.createElement('script'); ref_tikz.value.appendChild(script);

  script.setAttribute("type", "text/tikz");
  script.setAttribute("data-show-console", "true");
  script.textContent = renderTikz_tidy(props.data) // 可能需要tidy一下
}
function renderTikz_tidy(tikzSource: string): string {
  // Remove non-breaking space characters, otherwise we get errors | 删除非换行空格字符，否则我们会得到错误
  const remove = "&nbsp;";
  tikzSource = tikzSource.replaceAll(remove, "");

  let lines = tikzSource.split("\n");

  // Trim whitespace that is inserted when pasting in code, otherwise TikZJax complains | 修剪粘贴代码时插入的空白，否则TikZJax会报错
  lines = lines.map(line => line.trim());

  // Remove empty lines | 删除空行
  lines = lines.filter(line => line);


  return lines.join("\n");
}
// #endregion

// #region tikzjax回调、后处理
function onTikzFinish (e) {
  console.log('tikz finish-------------------------------\n', e)
  // 这里可以仿照 obsidian tikz 的做法做反色，懒得，直接填白色背景算了
}
// #endregion
</script>

<style lang="scss">
/* 注意最后一个div是tikz库生成出来的 */
.tikz>.tikz-ref>div {
  background-color: white;
  padding: 10px;
  margin: 10px 0;
}
</style>

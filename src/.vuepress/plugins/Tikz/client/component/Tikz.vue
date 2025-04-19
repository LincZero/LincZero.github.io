<template>
  <div class="tikz">
    <div class="tikz-ref" ref="ref_tikz"></div>
    <!-- TODO 在未加载出来之前，给个占位和提示文字 -->
    <!-- <button @click="readyTikzScript">准备Tikz内容</button>
    <button @click="reloadTikZJax">重新加载Tikz</button> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { ref } from 'vue';

// import { optimize } from "./svgo.browser"; // 573KB
// @ts-ignore
// import tikzjaxJs from 'inline:./tikzjax.js'; // 6.7MB

const props = defineProps<{
  data: string
}>()

// #region tikzjax依赖
function loadTikZJax() {
  if (document.querySelector('#tikzjax')) { // script[src="https://tikzjax.com/v1/tikzjax.js"]
    // @ts-ignore
    console.log('window.tikzJax2', window, window.tikzjax, window.tikzjax?.render)
    // @ts-ignore
    // if (window.tikzjax) window.tikzjax.render()
    // TODO 话说重新加载也没办法自动触发自动渲染，没用
    unloadTikZJax(); loadTikZJax(); return // 注意避免无限循环
  }

  readyTikzScript()

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
    console.log('TikZJax loaded successfully')
    // 首次加载不手动触发也行，他自己会自动触发一次
    // @ts-ignore
    // console.log('window.tikzJax', window, window.tikzjax, window.tikzjax?.render)
    // @ts-ignore
    // if (window.tikzjax) window.tikzjax.render()
  }
  script.onerror = () => {
    console.error('Failed to load TikZJax')
  }

  document.addEventListener('tikzjax-load-finished', onTikzFinish)
}
function unloadTikZJax() {
  const els = document.querySelectorAll("#tikzjax");
  for (const el of els) el.remove();

  document.removeEventListener("tikzjax-load-finished", onTikzFinish);
}
async function reloadTikZJax() {
  // TODO 话说重新加载也没办法自动触发自动渲染，没用
  unloadTikZJax();
  await setTimeout(() => { loadTikZJax(); }, 2000)
  return
}
onMounted(() => {
  loadTikZJax()
})
onUnmounted(() => {
  unloadTikZJax()
})
// #endregion

// #region tikzjax渲染触发
const ref_tikz = ref<HTMLElement | null>(null)
function readyTikzScript() {
  if (!ref_tikz.value) return
  const script = document.createElement('script'); ref_tikz.value.appendChild(script);

  script.setAttribute("type", "text/tikz");
  script.setAttribute("data-show-console", "true");
  script.textContent = readyTikzScript_tidy(props.data) // 可能需要tidy一下

  console.log('readyTikzscript yet')
}
function readyTikzScript_tidy(tikzSource: string): string {
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
  // TODO fix 目前无效，因为ob-tikzjax的包是有 finish 事件的，
  // 而网络加载的 https://tikzjax.com/v1/tikzjax.js 似乎没有这个东西
  // 怀疑是不是v0和v1的区别

  // TODO 这里可以做显示出来之前的占位
  // TODO 这里可以仿照 obsidian tikz 的做法做反色。目前懒得，直接填白色背景算了
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

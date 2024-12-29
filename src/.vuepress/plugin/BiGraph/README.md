# BiGraph

## 使用

(1) 将BiGraph添加到你的主题中，
    并像 [config.ts](https://github.com/erduotong/erduotong.github.io/blob/main/src/.vuepress/config.ts) 中的那样使用他。
    编译时可能会提示确实依赖，安装即可，如 `pnpm install d3`

(2) (可选) 如果您使用该插件时，文档框架不是vuepress-hope-theme或不是最新版本，你可能需要进行一些额外的操作

样式问题：

```css
/**
 * 如果您使用的不是vuepress-hope-theme或不是最新版本，请在任意样式文件添加仿照下述代码补全css变量
 */
:root {
  /* 文字色 */
  --vp-c-text-1: var(--text-color);
  --vp-c-text: var(--text-color);
  /* 激活色 */
  --vp-c-accent: var(--theme-color);
  /* 边框色 */
  --vp-c-divider: var(--border-color);
  --vp-c-brand: var(--border-color);
  /* 背景色 */
  --vp-c-bg: var(--bg-color);
  --vp-c-bg-mute: var(--bg-color);
  --vp-c-bg-soft: var(--bg-color);
}
```

数据与依赖问题：

略，未处理

(3) (可选) 自定义布局方式的使用

如果您的文档框架或插件没有使用了自定义布局，可以跳过这步，正常使用。

如果使用了自定义布局，会产生冲突（后加载的插件的自定义布局会覆盖前加载的插件的自定义布局），所以可能需要另一个不使用自定义布局的插件的使用方式

(3.1) 将 `./client/config.ts` 的自定义布局行为注释掉

```ts
layouts: {
  // Layout,
},
```

(3.2) 在你自己的自定义布局中使用插件中的组件

你可以根据自己的喜好调整使用哪些插件提供组件，以及插件提供组件的位置

(下述代码仅供参考，有 `[+code]` 注释的表示新增行，其他为你自己已有的自定义布局)

```ts
<script setup lang="ts">
// ...
import Backlink from "../../BiGraph/client/components/backlink.vue";  // [+code]
import LocalRelationshipMap from "../../BiGraph/client/components/localRelationshipMap.vue"; // [+code]
</script>

<template>
  <SkipLink />

  <CommonWrapper>
    <FadeSlideY>
      <NormalPage>
        <template #contentAfter>                            // [+code]
          <backlink></backlink>                             // [+code]
        </template>                                         // [+code]
        <template #tocBefore>                               // [+code]
          <local-relationship-map></local-relationship-map> // [+code]
        </template>                                         // [+code]
      </NormalPage>
    </FadeSlideY>

    <template #sidebarTop>
      <RootSidebar />
    </template>
  </CommonWrapper>
</template>
```

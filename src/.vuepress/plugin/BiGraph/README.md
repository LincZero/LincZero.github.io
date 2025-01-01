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

(3.1) 确保BiGraph插件在你的自定义布局插件之前被加载，这样后加载的自定义布局会覆盖该插件的自定义布局

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

## FAQ (常见问题)

### 双链的识别范围，为什么我的本地链接没有被识别？

正常的 `[xxx](xxx.md)` 语法，以及借助其他插件实现的双链 `[[xxx]]` 转换来的连接基本都能识别。如果转换后的链接的pathname部分 (排除query和hash字段) 是以 `.html` 结尾，那么应该都能识别

但是有一种写法不行：如果转换后的链接的pathname部分不以 `.html` 结尾，哪怕指向页面，无法被vuepress识别。
例如md链接的写法 `[aaa](bbb)` 时，如果bbb不加 `.md` 扩展名，在大多数md软件是正常的，在vuepress中也能正常转化为能被跳转的链接，但无法被该插件识别。

临时提供解决方案：可以使用markdown-it插件检查这种链接（如果你想，也可以顺便进行转化。以下代码示例仅进行检查）

```js
// only check，[filename](./filename) -> [filename](./filename.md)
// 使用：markdown-it扩展里加上：md.use(selector_mdLink)
function selector_mdLink(md: MarkdownIt, options?: Partial<Options>): void {
  md.inline.ruler.before('link', 'BiGraphLink', function (state, silent) {
    // 匹配本地链接
    let text: string
    const pos = state.pos                 // 这行字符的初始位置
    const max = state.posMax              // 这行字符的结束位置
    text = state.src.substring(pos, max)  // 这一行的内容

    // 非本地md链接 (`[...]((.|/)...)`)
    if (!/\!?\[(.*?)\]\((\.|\/)(.*?)\)/.test(text)) return false 
    // TODO，这里还可以检查和处理包含空格需要转义为 `%20` 的情况
    // 链接尾合法 (为目录或带扩展名)
    if (/(\/|\.md|\.json|\.pdf|\.jpg|\.png|\.gif)\)$/.test(text)) return false
    console.log("[!link check]", state.env.filePathRelative||state.env.relativePath ,state.pos, state.posMax, text)
    return false
  })
}
```

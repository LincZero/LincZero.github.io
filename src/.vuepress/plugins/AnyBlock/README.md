# vuepress-plugin-any-block

(该页可能在 any-block/obsidian-any-block 或 LincZero/LincZero.github.io 仓库下。
如果该页没有内容，请到另一个仓库中查看)

(大概率是放在 LincZero/LincZero.github.io 仓库，不然的话 any-block 这边得绑很多vuepress相关的依赖)

## 使用 - 源码版

当正常vuepress插件使用即可

先安装 markdown-it-any-block

```ts
pnpm install -D markdown-it-any-block@latest
```

`src/.vuepress/config.ts`

```ts
import anyblock from "./plugins/AnyBlock/node"

const userConfig: UserConfig = {
  plugins: [
    anyblock
  ],
}
```

## 架构

主要是对 markdown-it-any-block 进行二次封装，并提供了客户端/服务端两种渲染策略

(客户端渲染暂未支持)

依赖于 `markdown-it-any-block`

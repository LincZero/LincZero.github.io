# For Developer

本地测试常用命令

## 升级主题

```bash
pnpm dlx vp-update
```

## python 临时服务器

dist文件夹下

```bash
# cd 到 dist 文件夹

python -m http.server 8080

# 进入 http://127.0.0.1:8080/
```

## TODO

### vuepress 内存维护所有 pages 的问题

当前的 vuepress 架构会维护了全局的pages和pagesMap。也就是node侧有完整的页面数据在内存里。

VitePress是只在对应的页面chunk里有对应的页面数据，A、B页面是不能够互相拿到对方的数据的（除非你加hook在渲染每个页面的时候把你要的对应数据写的你自己的一个store里）

编译阶段也是，VitePress把每个页面chunk做成孤立chunk，你访问 `/a/b.html` 的时候直接去拉取 `a_b.chunk.js` 之类的chunk加载，而vuepress选择做了一个loader map:
```ts
const pagesMap = {
  '/a/b': () => import('./a-b.chunk.js')
}
```

所以vuepress构建需要生成全部的chunk map，而VitePress的每一个页面chunk是单独生成的，只有import了别的东西才会和 ventor chunk 之类的产生影响。 

### 提问

1. vuepress 这种行为会比 vitepress 占多特别多的内存。如果我想要为 vuepress 添加一种模式，类似 vitepress 的做法，不把所有 pages 信息都放内存里，是否好改。
2. 修改成这种做法后，可能会有哪些影响，会影响哪些需要获取全部 pages 的功能或插件？

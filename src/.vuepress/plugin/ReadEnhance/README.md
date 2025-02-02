# 阅读增强

推荐使用方式:

1. 先使用插件 (自动注册组件)

```ts
import readEnhance from "./plugin/ReadEnhance/node"

plugins: [
  readEnhance
]
```

2. 然后再自定义布局将其添加到导航栏右侧

```ts
export default {
  theme: hopeTheme({
    navbarLayout: {
      start: ["Brand"],
      center: ["Links"],
      end: ["Language", "Repo", "Outlook", "Search", "ReadEnhance"],
    },
  }),
};
```

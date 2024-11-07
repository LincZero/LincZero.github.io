# Linc's WebSite

## 网站内容

个人的 markdown 笔记，public 部分主要为个人学习笔记。

笔记内容，如非特殊标注，则为原创，转载需署名。

## 核心扩展

该网站并非是普通的 VuePress，我做了许多扩展以及魔改，其中非常多的扩展都是个人开发的：

- 插件主题：VuePress-Theme-Hope
- 仿文件侧边栏 (自研魔改)，组件替换
- 高通用扩展（可以在VuePress以外使用）
  - AnyBlock (自研, V3 2024)，用于部分md写法与渲染扩展
  - newPageHook (自研)，对Markdown-it版本的AnyBlock的补充增强
  - NodeFlow (自研, 2024)，用于节点工作流的显示与扩展
  - onInitialized-json (自研)，用于对NodeFlow的增强，直接识别工作流json文件
  - markdown-it-obsidian-callout (贡献)，用于obsidian callout语法的渲染，用于代替gfm-alert
  - @nolebase/markdown-it-bi-directional-links，用于双链的wiki链接语法的支持
- onInitialized-pdf (自研)，直接识别pdf库
- 新的解耦以及工作流 (自研)

上面标 “自研” 的部分均使用 “GPLV3” 开源协议

## 编译相关

### js内存满的错误

注意，扩展比较多，容易爆内存，出现报错：FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory

参考：

- https://theme-hope.vuejs.press/zh/faq/common-error.html#fatal-error-xxx-javascript-heap-out-of-memory
- https://stackoverflow.com/questions/53230823/fatal-error-ineffective-mark-compacts-near-heap-limit-allocation-failed-javas

CICD需要：构建文档时设置env

```bash
- name: 构建文档
  env:
    NODE_OPTIONS: --max_old_space_size=12288
  run: |-
    node -e 'console.log(v8.getHeapStatistics())'
    pnpm run docs:build
    > src/.vuepress/dist/.nojekyll
```

Windows/Linux 需要：

```bash
# if Linux
export NODE_OPTIONS="--max-old-space-size=8192"
# if Windows
Set NODE_OPTIONS="--max-old-space-size=8192"
# if Windows PowerShell
$env:NODE_OPTIONS="--max-old-space-size=8192"
# if this is the instruction in the compilation
node --max-old-space-size=8192 xxxxxxx_original_instruction

# 验证内存 (我在VSCode用`$env`那条才成功了，其他不行)
node -e 'console.log(v8.getHeapStatistics().heap_size_limit/(1024*1024))'
# 验证更多
node
> v8.getHeapStatistics()
```

检查：https://github.com/watson/memory-usage

### 版本更新

`pnpm dlx vp-update`

不要单独更新，否则可能存在版本匹配问题

## 部署相关

### Github Page

注意，这里使用了 git submodule 引入多个笔记库，其中部分笔记是在私有仓库的，通过 Github Action 使用 Secrets Tokens 引入。
因此，异地部署时：需要可能修改子模块的链接，取消 private 仓库部分的笔记。或者手动指定 private 仓库的 token。

笔记库手动更新：

```bash
git submodule status
git submodule update --recursive --remote

# 或
git submodule foreach git pull origin main
```

如果你不想使用我的子模块：

```bash
# 1. 删除.gitmodules文件里的对应条目
# 2. 移除子模块配置，这里 path/to/submodule 是你需要卸载的子模块的相对路径
git rm --cached path/to/submodule
# 3. 提交
git commit -m "Removed submodule <submodule name>"
# 4. 删除子模块目录
rm -rf path/to/submodule
```

---

2024-11-02: 

删除了子模块系统，依赖仅依赖脚本进行。

优点：

- 简化、解耦、方便项目的迁移与复用
- 不太容易存在某个文档库需要强制依赖某个版本以上的编译系统的情况（即两者之间不存在的版本依赖），子模块优点在这不起效

### Gitee Page

本来打算用 Gitee 镜像网站兼顾 Github 访问不稳的情况，不过 Gitee 官方现在已经停用了。

不过还是使用了 Gitee 来自动镜像 Github，进行备份。

### Cloudflare Pages

为照顾 GitHub Page 无法稳定访问情况，备份了一个页面：https://linczero-github-io.pages.dev/

## 笔记部分

前面已经讲了，还有另外两个子项目。现在这里说一下子项目会遇到的问题：

- 问题
  - 笔记在ty和ob中折返，经常会出现：No content changes found
- 原因
  - https://ggame.gledos.science/mkdocs/No_content_Changes_found.html
    
    Obsidian 编辑、预览过的文件，会自动把 CRLF 替换成 LF，也就是说 Obsidian 不尊重原始文件的换行字符
- 解决方法1
  - 无用，并不是这个原因
    ```bash
    # 在git上禁用检查文件模式
    git config core.filemode false
    ```
- 解决方法2
  - 删掉这些修改
    ```bash
    git rm -r --cached .
    ```
- 解决方法3
  - 不管了，把全部文件都转换成 LF 的，然后 VS Code 使用 LF 来编写

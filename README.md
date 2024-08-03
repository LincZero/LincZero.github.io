# Linc's WebSite

## 网站内容

个人的 markdown 笔记，public 部分主要为个人学习笔记。

笔记内容，如非特殊标注，则为原创，转载需署名。

## 编译相关

### js内存满的错误

注意，扩展比较多，容易爆内存，出现报错：FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory

参考：

- https://theme-hope.vuejs.press/zh/faq/common-error.html#fatal-error-xxx-javascript-heap-out-of-memory
- 

需要：

```bash
# if Linux
export NODE_OPTIONS="--max-old-space-size=8192"
# if Windows
Set NODE_OPTIONS="--max-old-space-size=8192"
# if Windows PowerShell
$env:NODE_OPTIONS="--max-old-space-size=8192"
# if this is the instruction in the compilation
node --max-old-space-size=8192 xxxxxxx_original_instruction

# 验证 (我在VSCode用`$env`那条才成功了，其他不行)
node -e 'console.log(v8.getHeapStatistics().heap_size_limit/(1024*1024))'
```

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

### Gitee Page

本来打算用 Gitee 镜像网站兼顾 Github 访问不稳的情况，不过 Gitee 官方现在已经停用了。

不过还是使用了 Gitee 来自动镜像 Github，进行备份。

### Cloudflare Pages

为照顾 GitHub Page 无法稳定访问情况，备份了一个页面：https://linczero-github-io.pages.dev/

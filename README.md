# Linc's WebSite

## 网站内容

个人的 markdown 笔记，public 部分主要为个人学习笔记。

笔记内容，如非特殊标注，则为原创，转载需署名。

## 部署相关

注意，这里使用了 git submodule 引入多个笔记库，其中部分笔记是在私有仓库的，通过 Github Action 使用 Secrets Tokens 引入。
因此，异地部署时：需要可能修改子模块的链接，取消 private 仓库部分的笔记。或者手动指定 private 仓库的 token。

笔记库手动更新：

```bash
git submodule status
git submodule update --recursive --remote

# 或
git submodule foreach git pull origin main
```

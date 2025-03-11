# 更通用的工作流文件

## Obsidian/纯文档仓库/非纯文档仓库

workflows下的工作流是个人的，这里提供一个更通用的工作流文件以便其他人部署：

工作流的部署会根据仓库的特点而定，有以下几种可能：

1. 如果根目录下有 `.htaccess` 是代理仓库。则使用代理文件中的git链接进行clone。否则则使用本文档链接
2. 如果根目录下有 `docs` 文件夹 (如果是代理仓库有也算)。自动识别为非纯文档仓库，部署时也只会解析docs部分。否则整个仓库都视为文档

```yml
# take from https://github.com/LincDocs/Workflow

name: 部署文档

on:
  push:
    branches: ["main"] # 确保这是你正在使用的分支名称
  schedule:
    # 定时任务。建议多个仓库错开，避免多个仓库同一时间一起坏掉。我个人用键盘阵列映射周1~5。特别是代理仓库比较需要这个
    - cron:  '30 10 * * 1' # 每周一10:30触发工作流
  workflow_dispatch:

permissions:
  contents: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy-gh-pages:
    runs-on: ubuntu-latest
    steps:          
      - name: 环境 - 构建库
        uses: actions/checkout@v4
        with:
          fetch-depth: 1
          repository: LincZero/LincZero.github.io
          ref: 'main' # 分支，旧raw
          
      - name: 环境 - 安装 pnpm
        uses: pnpm/action-setup@v4
        with:
          run_install: true
          version: 9

      - name: 环境 - 设置 Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: pnpm

      # 获取仓库的相关配置
      # https://docs.github.com/zh/actions/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables#default-environment-variables
      # TODO：若 “仓库无前缀名” 是.github.io结尾，则设置为"/"
      - name: 配置 - 获取仓库配置
        id: config1 # 用于给其他步骤引用
        working-directory: ./scripts/
        run: |
          > git_config.json                                                                           # 先清空
          echo "{" >> git_config.json
          echo "  \"GITHUB_WORKSPACE\": \"${GITHUB_WORKSPACE}\"," >> git_config.json                  # 工作路径
          echo "  \"GITHUB_ACTION_PATH\": \"${GITHUB_ACTION_PATH}\"," >> git_config.json              # action路径
          echo "  \"GITHUB_ACTION_REPOSITORY\": \"${GITHUB_ACTION_REPOSITORY}\"," >> git_config.json  # action仓库
          echo "  \"GITHUB_REPOSITORY_OWNER\": \"${GITHUB_REPOSITORY_OWNER}\"," >> git_config.json    # 仓库所属(格式: 可以是组织)
          echo "  \"GITHUB_ACTOR\": \"${GITHUB_ACTOR}\"," >> git_config.json                          # 仓库作者(格式: 不会是组织)
          echo "  \"GITHUB_REPOSITORY\": \"${GITHUB_REPOSITORY}\"," >> git_config.json                # 仓库标识(格式: 个人或组织/仓库名)
          echo "  \"CALC_URL\": \"${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}/\"," >> git_config.json    # 仓库url
          REPO_NAME=$(echo "${GITHUB_REPOSITORY}" | cut -d"/" -f2)
          echo "  \"CALC_REPO_NAME\": \"${REPO_NAME}\"" >> git_config.json                            # 仓库无前缀名
          echo "}" >> git_config.json
          echo "::set-output name=REPO_NAME::$REPO_NAME"

      - name: 文档 - 文档克隆1 # 文档的克隆、构建、部署。注意 `clone --depth 1` 只拉最近一次提交，减少时间
        working-directory: ./src/
        run: |
          rm README.md
          
          # git clone --depth 1 https://github.com/${GITHUB_REPOSITORY}.git # 如果有多个clone项则替换成这个，避免冲突
          git clone --depth 1 https://github.com/${GITHUB_REPOSITORY}.git temp_repo 

      - name: 文档 - 文档克隆2, 允许使用代理仓库/指定文件夹
        working-directory: ./src/
        run: |
          # step1. 克隆被代理仓库
          # 该仓库为代理仓库时，使用链接仓库而非此仓库
          # TODO 支持agency多个仓库。如果想更通用，干脆支持直接运行agency里的命令组
          if [ -f temp_repo/agency ]; then
            echo "with agency"
            GIT_LINK=$(sed -n '1p' temp_repo/agency | tr -d '\r')
            DIR=$(sed -n '2p' temp_repo/agency | tr -d '\r')
            rm -rf temp_repo
            git clone --depth 1 $GIT_LINK temp_repo
          else
            echo "without agency"
            DIR="docs/"
          fi

          # 使用指定文件夹
          if [ -d "temp_repo/${DIR}" ]; then
            echo "with docs folder: temp_repo/${DIR}"
            # find temp_repo/* -maxdepth 0 -name docs -prune -o -exec rm -rf {} \;
            # ls -l temp_repo/website/docs/ # debug
            mv "temp_repo/${DIR}"/* .
            rm -rf temp_repo
          else
            echo "without docs folder: temp_repo/${DIR}"
            rsync -a temp_repo/ .
            rm -rf temp_repo
          fi
          echo "---"
          ls

      # [!code] 根据实际情况修改 (需要在仓库配置写入以及和文档仓库clone这两个步骤的后面)
      - name: 配置 - 设置
        working-directory: ./
        run: |
          # sed -i 's/base: \"\/\"/base: \"\/${{steps.config1.outputs.REPO_NAME}}\/\"/g' ./src/.vuepress/config.ts
          cat ./scripts/git_config.json
          rm -f ./src/.vuepress/config_cover.js
          rm -f ./src/.vuepress/theme_cover.js
          pnpm run gen-config

      - name: 文档 - 构建
        env:
          NODE_OPTIONS: --max_old_space_size=20480
        run: |-
          node -e 'console.log(v8.getHeapStatistics())'
          pnpm run docs:build
          > src/.vuepress/dist/.nojekyll

      - name: 文档 - 部署
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          # 这是文档部署到的分支名称
          branch: gh-pages
          folder: src/.vuepress/dist
```

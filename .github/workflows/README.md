# 更通用的工作流文件

workflows下的工作流是个人的，这里提供一个更通用的工作流文件以便其他人部署：

```yml
name: 部署文档

on:
  push:
    branches: ["main"] # 确保这是你正在使用的分支名称
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
          fetch-depth: 0
          repository: LincZero/LincZero.github.io
          ref: 'main' # 分支，旧raw
          
      - name: 环境 - 安装 pnpm
        uses: pnpm/action-setup@v2
        with:
          run_install: true
          version: 8

      - name: 环境 - 设置 Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 20
          cache: pnpm

      # 获取仓库的相关配置
      # https://docs.github.com/zh/actions/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables#default-environment-variables
      # TODO：若 “仓库无前缀名” 是.github.io结尾，则设置为"/"
      - name: 配置 - 获取仓库配置
        id: config1 # 用于给其他步骤引用
        working-directory: ./src/scripts/
        run: |
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

      # [!code] 根据实际情况修改
      - name: 配置 - 设置
        working-directory: ./
        run: |
          # sed -i 's/base: \"\/\"/base: \"\/${{steps.config1.outputs.REPO_NAME}}\/\"/g' ./src/.vuepress/config.ts
          cat ./scripts/git_config.json
          rm ./src/.vuepress/config_conver.ts
          rm ./src/.vuepress/theme_conver.ts
          pnpm run gen-config

      # 文档的克隆、构建、部署。注意 `clone --depth 1` 只拉最近一次提交，减少时间
      - name: 文档 - 文档库克隆
        working-directory: ./src/
        run: |
          git clone --depth 1 https://github.com/${GITHUB_REPOSITORY}.git temp_repo 
          rsync -a temp_repo/ .
          rm -rf temp_repo
          # git clone --depth 1 https://github.com/${GITHUB_REPOSITORY}.git # 如果有多个clone项则替换成这个，避免冲突

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

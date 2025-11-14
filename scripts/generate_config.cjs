/**
 * !ATTENTION: 运行该脚本可能会覆盖 ./src/.vuepress/ 下的 config_cover.ts 和 theme_cover.ts 文件
 * 自定义脚本，用于生成配置文件 (vuepress-hope-theme版本)
 * 工作流中，根据统一的简单的描述，生成vuepress/vitepress的配置文件
 *
 * CJS与EJS问题，的开发注释：
 *   我这里使用了一个技巧：在CJS中读取MJS函数的导出函数
 * 
 *   如果该文件是js文件：
 *   配置：package.json::script中增加："gen-config": "node generate_config.js"
 *   运行：pnpm/npm run gen-config
 *   
 *   如果该文件是ts文件：
 *   配置：package.json::script中增加："gen-config": "ts-node generate_config.ts" (需要依赖: ts-node、typescript)
 *   运行：pnpm/npm run gen-config
 *   
 *   如果报错说需要ES/CommonJS模块，则将扩展名修改成.mjs/.cjs，并换用import from/require写法
 * 
 * 流程：
 *   1. 首先将配置文件分成：github 工作流自动生成的配置、用户的追加配置、框架的默认配置
 *      覆盖优先级：default < github < user (注意这里不是完全覆盖，而是冲突覆盖)
 *   2. 该脚本用于合并第一个和第二个，生成新的第二个
 *   3. 而构建的时候会自动合并第二个和第三个，生成最终的配置
 */

const fs = require('fs');
const path = require('path');

// 配置处理 git版。将工作流生成文件的文件，转换为vuepress配置文件
async function generate_config_by_git() {
  // 1. 读取配置 - 工作流生成的
  let gitInfoObj = {}
  const gitInfoPath = path.join(__dirname, '../scripts/git_config.json');
  try {
    const gitInfoPathContent = fs.readFileSync(gitInfoPath, 'utf8');
    gitInfoObj = JSON.parse(gitInfoPathContent)
  } catch (error) {
    console.error('Failed to read gitInfoFile: ', gitInfoPath , 'error: ', error);
  }

  // 2. 处理内容
  let config_git_obj = {}
  let theme_git_obj = {}
  if (gitInfoObj && gitInfoObj["CALC_REPO_NAME"]) { // gitInfoObj["CALC_REPO_NAME"] 可能是未定义
    let calc_base = "/" // 在组织中部署非常重要，只要不满足 `xxx/xxx.github.io` 的形式，base都不为 `/`
    if (gitInfoObj["CALC_REPO_NAME"] == "/") {} // 强制指定为 "/"，否则会变成 "///"
    else if (gitInfoObj["CALC_REPO_NAME"] == `${gitInfoObj["GITHUB_REPOSITORY_OWNER"]}.github.io`) {}
    else {
      calc_base = `/${gitInfoObj["CALC_REPO_NAME"]}/`
    }

    config_git_obj = {
      base: calc_base,
      locales: {
        "/": {
          lang: "zh-CN",
          title: gitInfoObj["CALC_REPO_NAME"],
          description: gitInfoObj["CALC_REPO_NAME"] + " site",
        },
      }
    }
    theme_git_obj = {
      hostname: gitInfoObj["GITHUB_REPOSITORY_OWNER"] + ".github.io",
      // author: { // 全局默认作者 (可选, 需要的话取消注释即可)
      //   name: gitInfoObj["GITHUB_REPOSITORY_OWNER"],
      //   url: gitInfoObj["CALC_URL"],
      // },
      repo: gitInfoObj["GITHUB_REPOSITORY"],
    }
  }
  let config_git_text = "export const userConfig3 = " + JSON.stringify(config_git_obj, null, 2)
  let theme_git_text = "export const themeOptions3 = " + JSON.stringify(theme_git_obj, null, 2)

  // 3. 创建最终文件
  const config_git_path = path.join(__dirname, '../src/.vuepress/config_git.js');
  const theme_git_path = path.join(__dirname, '../src/.vuepress/theme_git.js');
  try {
    fs.writeFileSync(config_git_path, config_git_text, 'utf8');
    fs.writeFileSync(theme_git_path, theme_git_text, 'utf8');
  }
  catch (error) {
    console.error('Failed to generate file: .vuepress/xxx_git.js. error: ', error);
    return
  }
  console.log('Successfully generate file: .vuepress/xxx_git.js.')
  console.log(JSON.stringify(config_git_obj, null, 2))
  console.log(JSON.stringify(theme_git_obj, null, 2))
}
generate_config_by_git()

// 配置处理 user cover版。如果文件不存在，则创建并填充默认内容
function createFileIfNotExist(filePath, content) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content, 'utf8');
   }
}
createFileIfNotExist(path.join(__dirname, '../src/.vuepress/config_cover.js'), 'export const userConfig2 = {}')
createFileIfNotExist(path.join(__dirname, '../src/.vuepress/theme_cover.js'), 'export const themeOptions2 = {}')

// 配置处理 .obsidian版。
function generate_config_by_obConfig() {
  /**
   * 1. 读取配置
   * 
   * ob配置文件说明：(这里主要使用那些打叉的部分)
   * .obsidian/
   * - plugins/
   * - snippets/
   * - themes/
   * - app.json               |  | 自定义设置：编辑器、文件与链接的设置项
   * - appearance.json        | x| 自定义设置：启用(未启用不算)的css片段、主题、颜色、字体
   * - bookmarks.json
   * - community-plugins.json | x| 自定义设置: 启用(未启用不算)的社区插件
   * - core-plugins.json      | x| 自定义设置: 启用(未启用不算)的核心插件
   * - ...
   * 
   * 除配置文件外还可以检查plugins文件夹
   *   上传仓库有时是不传 app.json 等文件的，对示例库来说是都传。
   *   如果仓库有部分插件是必须的，还有另外一些插件只是自己用，而非必须的。
   *   有时是通过.gitignore+反向排除，只同步特定的插件。这样可以做到部分配置的共享
   *   (需要注意：这种方式只能判断社区插件，无法判断核心插件，也无法判断插件是否开启 (但一般选择同步插件而没有排除，应该都是要用的))
   */
  let fileObj = {}
  let filePath = path.join(__dirname, '../src/.obsidian/core-plugins.json');
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    fileObj = JSON.parse(fileContent)
    if (fileObj.hasOwnProperty("graph") && fileObj["graph"] == true) { console.log("ObConfig: 开启了图谱核心插件")}
    if (fileObj.hasOwnProperty("canvas") && fileObj["canvas"] == true) { console.log("ObConfig: 开启了画布核心插件")}
  } catch (error) {
    console.error('Failed to read file: ', filePath , 'error: ', error);
  }
  filePath = path.join(__dirname, '../src/.obsidian/community-plugins.json');
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    fileObj = JSON.parse(fileContent)
    if (fileObj.includes("any-block")||fileObj.includes("obsidian-any-block")) { console.log("ObConfig: 开启了AnyBlock社区插件")}
    if (fileObj.includes("node-flow")) { console.log("ObConfig: 开启了NodeFlow社区插件")}
  } catch (error) {
    console.error('Failed to read file: ', filePath , 'error: ', error);
  }
  console.log('Successfully open file: .obsidian/xxx.');
}
generate_config_by_obConfig()

/// 旧，弃用
/// @deprecated
async function generate_config2() {
  const { pathToFileURL } = require('url');

  // cjs加载mjs文件的export函数
  async function loadMjsFile(filePath) {
    // Convert the file path to a file URL
    const fileUrl = pathToFileURL(filePath).href;
    // Use dynamic import to load the ES module
    const module = await import(fileUrl);
    return module;
  }

  // 读取配置 - 用户追加文件
  let userConfObj = {}
  const userConfPath = path.join(__dirname, '../src/.vuepress/config_cover.js');
  try {
    userConfObj = await loadMjsFile(userConfPath)
  } catch (error) {
    console.error('Failed to read userConfFile: ', userConfPath , 'error: ', error);
  }

  // 处理内容
  let newObj = userConfObj.userConfig2
  if (gitInfoObj && userConfObj) {
    userConfObj.userConfig2["locales"]["/"]["title"] = gitInfoObj["CALC_REPO_NAME"]
    userConfObj.userConfig2["locales"]["/"]["description"] = gitInfoObj["CALC_REPO_NAME"] + " site"
  }
  let newContent = "export const userConfig2:any = " + JSON.stringify(newObj, null, 2)

  // 创建最终文件
  // const newFilePath = path.join(__dirname, '../src/.vuepress/config_cover.ts');
  try {
    fs.writeFileSync(config_git_path, newContent, 'utf8');
  }
  catch (error) {
    console.error('Failed to generate file: ', config_git_path, 'error: ', error);
    return
  }
}

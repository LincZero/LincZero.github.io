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

// 将工作流生成的配置文件，合并到默认配置文件中
async function generate_config() {
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
  if (gitInfoObj) {
    config_git_obj = {
      base: gitInfoObj["CALC_REPO_NAME"] ? `"/${gitInfoObj["CALC_REPO_NAME"]}/"` : "/", // 在组织中部署非常重要
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
      author: {
        name: gitInfoObj["GITHUB_REPOSITORY_OWNER"],
        url: gitInfoObj["CALC_URL"],
      },
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
    console.error('Failed to generate file. error: ', error);
    return
  }

  console.log('Successfully generate file.');
}
generate_config()

// 如果文件不存在，则创建并填充默认内容
function createFileIfNotExist(filePath, content) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content, 'utf8');
   }
}
createFileIfNotExist(path.join(__dirname, '../src/.vuepress/config_cover.js'), 'export const userConfig2 = {}')
createFileIfNotExist(path.join(__dirname, '../src/.vuepress/theme_cover.js'), 'export const themeOptions2 = {}')

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

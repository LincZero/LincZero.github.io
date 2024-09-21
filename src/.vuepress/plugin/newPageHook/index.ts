// --------- ES6版 ---------------
import { getDirname, path } from "@vuepress/utils"

export default (options, ctx) => {
  return {
    name: 'vuepress-plugin-code-copy',
    // 指定客户端配置文件的路径
    clientConfigFile: path.resolve(__dirname, 'clientConfig.ts'),

    // 这个是V1的旧API，现在已经不用了。取之替代的是clientConfigFile
    // clientRootMixin: path.resolve(__dirname, 'clientRootMixin.ts'),
  }
}

// --------- commonJs版 ----------
// const path = require('path');
// 
// module.exports = (options, ctx) => {
//     return {
//         name: 'vuepress-plugin-code-copy',
//         // 指定客户端配置文件的路径
//         clientConfigFile: path.resolve(__dirname, 'clientConfig.js'),
//         clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js')
//     }
//  }

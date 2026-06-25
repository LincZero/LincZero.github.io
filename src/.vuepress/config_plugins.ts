import anyblock from "./plugins/AnyBlock/node/index.js"
import nodeFlow from "./plugins/NodeFlow/node/index.js"
import tikz from "./plugins/Tikz/node/index.js"
import exFormat from "./plugins/ExFormat/node/index.js"
import rootSidebar from "./plugins/RootSidebar/node/index.js"
import readEnhance from "./plugins/ReadEnhance/node/index.js"
import relational_graph from "./plugins/BiGraph/node/index.js"
import batchBuild from "./plugins/BatchBuild/node/index.js"
import myLayout from "./plugins/MyLayout/node/index.js" // 非通用的自定义布局，必须最后加载，便于覆盖其他插件的自定义布局行为
type PluginConfig = any;

const plugins: PluginConfig = [
  anyblock,
  nodeFlow,
  tikz,
  exFormat,
  batchBuild({ // TODO 易于配置
    batchs: ['/MdNote_Public/01. DesignAndDevelop/', '/01 2021新教程/'], // 填写URL解码的内容
  }),
  relational_graph({ // 含自定义组件
    localGraphDeep: 1, // 最大深度，默认20
    foldEmptyGraph: true,
    graphMaxWidth: 300,
    graphHeight: 300,
    titleGetter: (page: any) => {
      const title_arr = (page.filePathRelative as string).split('/')
      let title = title_arr.pop()?.replace(/\.md$/, '')
      if (!title) return "undefined"
      if (title == "README" && title_arr.length>1) { title = title_arr[title_arr.length-2] + "/" }
      return title
    },
    // enableGlobalGraph: true,
  }),
  rootSidebar, // 含自定义组件 <RootSidebar>
  readEnhance, // 含自定义组件 <ReadMenu>
  myLayout,    // (非通用) 自定义布局，必须最后加载，且使用以上插件提供的自定义组件。便于使用和覆盖其他插件的自定义布局行为
]

export default plugins

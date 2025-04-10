import newPageHook from "./plugins/newPageHook"
import nodeFlow from "./plugins/NodeFlow/node"
import tikz from "./plugins/Tikz/node"
import exFormat from "./plugins/ExFormat/node"
import rootSidebar from "./plugins/RootSidebar/node"
import readEnhance from "./plugins/ReadEnhance/node"
import relational_graph from "./plugins/BiGraph/node"
import myLayout from "./plugins/MyLayout/node" // 非通用的自定义布局，必须最后加载，便于覆盖其他插件的自定义布局行为
type PluginConfig = any;

const plugins: PluginConfig = [
  newPageHook,
  nodeFlow,
  tikz,
  exFormat,
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
  myLayout, // (非通用) 自定义布局，必须最后加载，且使用以上插件提供的自定义组件。便于使用和覆盖其他插件的自定义布局行为
]

export default plugins

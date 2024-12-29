import newPageHook from "./plugin/newPageHook"
import vueflowPlugin from "./plugin/VueFlowPlugin"
import exFormat from "./plugin/ExFormat/node"
import rootSidebar from "./plugin/RootSidebar/node"
import relational_graph from "./plugin/BiGraph/node"
import myLayout from "./plugin/MyLayout/node" // 非通用的自定义布局，必须最后加载，便于覆盖其他插件的自定义布局行为
type PluginConfig = any;

const plugins: PluginConfig = [
  newPageHook,
  vueflowPlugin,
  exFormat,
  relational_graph({
    localGraphDeep: 1, // 最大深度，默认20
    foldEmptyGraph: true,
    graphMaxWidth: 300,
    graphHeight: 300,
    titleGetter: (page: any) => {
      return (page.filePathRelative as string).split('/').pop()?.replace(/\.md$/, '') ?? "undefined"
    }
  }),
  rootSidebar,
  myLayout, // 非通用的自定义布局，必须最后加载，便于覆盖其他插件的自定义布局行为
]

export default plugins

import newPageHook from "./plugin/newPageHook"
import vueflowPlugin from "./plugin/VueFlowPlugin"
import exFormat from "./plugin/ExFormat/node"
import rootSidebar from "./plugin/RootSidebar/node"
type PluginConfig = any;

const plugins: PluginConfig = [
  newPageHook,
  vueflowPlugin,
  exFormat,
  rootSidebar,
]

export default plugins

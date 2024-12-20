import newPageHook from "./plugin/newPageHook"
import vueflowPlugin from "./plugin/VueFlowPlugin"
import pdf from "./plugin/pdf/node"
type PluginConfig = any;

const plugins: PluginConfig = [
  newPageHook,
  vueflowPlugin,
  pdf,
]

export default plugins

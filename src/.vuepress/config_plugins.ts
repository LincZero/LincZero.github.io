import newPageHook from "./plugin/newPageHook"
import vueflowPlugin from "./plugin/VueFlowPlugin"
import exFormat from "./plugin/ExFormat/node"
type PluginConfig = any;

const plugins: PluginConfig = [
  newPageHook,
  vueflowPlugin,
  exFormat,
]

export default plugins

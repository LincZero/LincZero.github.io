import newPageHook from "./plugin/newPageHook"
import vueflowPlugin from "./plugin/VueFlowPlugin"
type PluginConfig = any;

const plugins: PluginConfig = [
  newPageHook,
  vueflowPlugin
]

export default plugins

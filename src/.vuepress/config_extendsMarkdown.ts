import ab_mdit from "./plugin/ABConvertManager/ab_mdit"
import callout_mdit from "markdown-it-obsidian-callouts" // https://github.com/ebullient/markdown-it-obsidian-callouts

export default  (md: markdownit) => {
  md.use(ab_mdit)
  md.use(callout_mdit)
}

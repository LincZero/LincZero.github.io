import ab_mdit from "./plugin/ABConvertManager/ab_mdit"

export default  (md: markdownit) => {
  md.use(ab_mdit)
}

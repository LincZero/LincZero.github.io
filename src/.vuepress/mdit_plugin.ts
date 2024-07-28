// import type MarkdownIt from "markdown-it";

// import mdit_plugin_multimd_table_plugin from "markdown-it-multimd-table"  // markdwon-it table插件

function demo1(state, silent){
  console.log(state);
  console.log(silent);
  return true
}

interface Options {
  multiline: boolean;
  rowspan: boolean;
  headerless: boolean;
  multibody: boolean;
  autolabel: boolean;
}

function demo2(md: markdownit, options?: Partial<Options>): void {
  //md.inline.ruler.before('emphasis', 'demo', demo1)

  const fence = md.renderer.rules.fence
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args
    const token = tokens[idx]
    // @ts-ignore 这里会说fence未定义 (可以通过安装markdown-it依赖并用MarkdownIt类型替换markdown-it消除)
    const rawCode = fence(...args)		// rawCode是原内容，下面在原内容的外面包一一个div
    return `<!--beforebegin--><div class="mdit-test language-${token.info.trim()} extra-class">` +
    `<!--afterbegin-->${rawCode}<!--beforeend--></div><!--afterend-->`
  }
}

export default  (md: markdownit) => {
  //md.inline.ruler.before('emphasis', 'tag', demo1)
  md.use(demo2)
}

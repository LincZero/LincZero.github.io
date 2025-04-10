import MarkdownIt from "markdown-it";

function render_fence(md: MarkdownIt, options?: any): void {
  const oldFence = md.renderer.rules.fence || function(tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    // 查看是否匹配
    let token = tokens[idx]
    if (token.info != "tikz") { return oldFence(tokens, idx, options, env, self) }    

    // 渲染
    return `<Tikz data='${(token.content as string).replace(/'/g, "&#39;")}' />`
  }
}

export default function tikz_mdit(md: MarkdownIt, options?: any): void {
  md.use(render_fence)
}

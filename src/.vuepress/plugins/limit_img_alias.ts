
// 禁用img别名 (禁用非`@`开头的别名)
// ban img alias
// via deepseek
// 
// 实现：将渲染结果进行替换
// 机制: https://vuejs.press/zh/guide/assets.html#%E4%BE%9D%E8%B5%96%E5%8C%85%E5%92%8C%E8%B7%AF%E5%BE%84%E5%88%AB%E5%90%8D
// 举例: 将 `<img src="aaa/bbb">` 转化为 `<img src="./aaa/bbb">`，避免vuepress认定 `aaa` 为别名
// 
// 版本一弃用，应在解析阶段就完成替换，否则无用
export function limit_img_alias1(md: any, options?: any): void {
  // 覆盖render方法以处理整个HTML输出
  const originalRender = md.render.bind(md);
  md.render = function (...args) {
    const html = originalRender(...args)
    return processImgTags(html)
  }

  // 同样处理行内渲染
  const originalRenderInline = md.renderInline.bind(md);
  md.renderInline = function (...args) {
    const html = originalRenderInline(...args)
    return processImgTags(html)
  }

  function processImgTags(html) {
    return html.replace(
      /(<img\b)([^>]*?\bsrc=)(['"])(?!\.\/|\/|http|@)([^'"]*?)(\3)/gi, // src
      (match, tagStart, attrs, quote, src, endQuote) => {
        // 排除协议链接和Data URLs
        // console.log('匹配到了----------------\n', match)
        if (/^(?:[a-z]+:)?\/\//i.test(src) || src.startsWith('data:')) {
          return match
        }
        return `${tagStart}${attrs}${quote}./${src}${endQuote}`
      }
    )
  }
}

export function limit_img_alias(md: any, options?: any): void {
  md.core.ruler.push('limit_img_alias', state => {
  // md.core.ruler.before('normalize', 'limit_img_alias', state => { // 最优先
    // state.env.content = processImgTags(state.env.content)

    state.tokens.forEach(token => {
      // 同时处理多个类型，注意img可能被嵌入在任何地方，如表格。根据情况跨大区域
      // 虽然被嵌套的节点应该也会递归走这里，但会莫名其妙处理失败
      if (token.type === 'html_block' || token.type === 'html_inline') { // || token.type === 'inline' || true
        token.content = processImgTags(token.content)
      }
    })
    return true
  })

  function processImgTags(html) {
    // if (html.includes('<img')) { // 从这里的打印可以确定都正确地完成替换了
    //   console.log('\nhtml-------------', html)
    //   console.log('\nhtm2-------------',  html.replace(
    //     /(<img\b)(?=[^>]*?\bsrc=)([^>]*?\bsrc=)(['"])(?!\.\/|@|\/|https?:|data:)([^'"]*?)(\3)/gi, // src不以 `./ / @ https?: data:` 开头
    //     (match, tagStart, attrs, quote, src, endQuote) => {
    //       return `${tagStart}${attrs}${quote}./${src}${endQuote}`;
    //     }
    //   ))
    // }
    return html.replace(
      /(<img\b)(?=[^>]*?\bsrc=)([^>]*?\bsrc=)(['"])(?!\.\/|@|\/|https?:|data:)([^'"]*?)(\3)/gi, // src不以 `./ / @ https?: data:` 开头
      (match, tagStart, attrs, quote, src, endQuote) => {
        return `${tagStart}${attrs}${quote}./${src}${endQuote}`;
      }
    )
  }
}

export function limit_img_alias4(md: any, options?: any): void {
  md.inline.ruler.before('link', 'limit_img_alias', function replace(state) {
    state.env.content = processImgTags(state.env.content)

    if (state.env.filePath && state.env.filePath.includes('bug')) {
      console.log('\nlimit dfssd------------------------', state.env.filePath, state.tokens)
      // state.env.content
    }
    state.tokens.forEach(token => {
      token.content = processImgTags(token.content)
    })
    return false
  })

  function processImgTags(html) {
    if (html.includes('<img')) { // 从这里的打印可以确定都正确地完成替换了
      console.log('html', html)
      console.log('htm2',  html.replace(
        /(<img\b)(?=[^>]*?\bsrc=)([^>]*?\bsrc=)(['"])(?!\.\/|@|\/|https?:|data:)([^'"]*?)(\3)/gi, // src不以 `./ / @ https?: data:` 开头
        (match, tagStart, attrs, quote, src, endQuote) => {
          return `${tagStart}${attrs}${quote}./${src}${endQuote}`;
        }
      ))
    }
    return html.replace(
      /(<img\b)(?=[^>]*?\bsrc=)([^>]*?\bsrc=)(['"])(?!\.\/|@|\/|https?:|data:)([^'"]*?)(\3)/gi, // src不以 `./ / @ https?: data:` 开头
      (match, tagStart, attrs, quote, src, endQuote) => {
        return `${tagStart}${attrs}${quote}./${src}${endQuote}`;
      }
    )
  }
}

export function limit_img_alias3(md: any, options?: any): void {
  const defaultRender = md.renderer.rules.image!
  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    const srcIndex = token.attrIndex('src')
    if (srcIndex >= 0) {
      console.log('img src---------\n', token.content)
      const src = token.attrs![srcIndex][1]
      // 为没有 ./ 或 / 开头的路径添加 ./
      if (!/^(\.?\/|https?:|\/|data:)/.test(src)) {
        token.attrs![srcIndex][1] = './' + src
      }
    }
    return defaultRender(tokens, idx, options, env, self)
  }
}

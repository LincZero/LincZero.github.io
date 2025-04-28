/**
 * 禁用img别名 (禁用非`@`开头的别名)
 * ban img alias
 * via deepseek
 * 
 * 原机制：https://vuejs.press/zh/guide/assets.html#%E4%BE%9D%E8%B5%96%E5%8C%85%E5%92%8C%E8%B7%AF%E5%BE%84%E5%88%AB%E5%90%8D
 * 原代码：
 * core https://github.com/vuepress/core/blob/a78ee55b4dabbaad7cd3ec9e2a0c7bf1eaa15c87/packages/markdown/src/markdown.ts#L84
 *   https://github.com/vuepress/core/blob/a78ee55b4dabbaad7cd3ec9e2a0c7bf1eaa15c87/packages/markdown/src/plugins/assetsPlugin/assetsPlugin.ts#L40
 *       ~~https://github.com/vuepress/core/blob/a78ee55b4dabbaad7cd3ec9e2a0c7bf1eaa15c87/packages/markdown/src/plugins/assetsPlugin/resolveLink.ts#L35~~
 * 在assetsPlugin的创建并替换了 md.renderer.rules.html_block, md.renderer.rules.html_inline 规则
 * 
 * 实现：将渲染结果进行替换
 * 举例: 将 `<img src="aaa/bbb">` 转化为 `<img src="./aaa/bbb">`，避免vuepress认定 `aaa` 为别名
 */

import { fs, path } from "vuepress/utils";

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

export function limit_img_alias5(md: any, options?: any): void {
  md.core.ruler.push('limit_img_alias', state => {
  // md.core.ruler.before('normalize', 'limit_img_alias', state => { // 最优先
    // state.env.content = processImgTags(state.env.content)

    state.tokens.forEach(token => {
      // 同时处理多个类型，注意img可能被嵌入在任何地方，如表格。根据情况跨大区域
      // 虽然被嵌套的节点应该也会递归走这里，但会莫名其妙处理失败
      // html_block和html_inline 只处理了非被嵌套的 `<img>`, inline 还处理了被嵌套的 `<img>`
      // 均不包括 `![]()`
      if (token.type === 'html_block' || token.type === 'html_inline' || token.type === 'inline') { //  || true
        token.content = processImgTags(token.content)
      }
    })
    return true
  })

  function processImgTags(html) {
    if (html.includes('<img')) { // 从这里的打印可以确定都正确地完成替换了
      console.log('\nhtml-------------', html)
      console.log('\nhtm2-------------',  html.replace(
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

export function limit_img_alias(md: any, options?: any): void {
  const createHtmlRule =
  (rawHtmlRule) =>
  (tokens, idx, options, env, self) => {
    tokens[idx].content = tokens[idx].content.replace(
      /(<img\b)([^>]*?\bsrc=)(['"])(?!\.|\/|@|https?:|data:)([^'"]*?)(\3)/gi,
      (match, tagStart, attrs, quote, src, endQuote) => {
        return `${tagStart}${attrs}${quote}./${src}${endQuote}`
      }
    )
    return rawHtmlRule(tokens, idx, options, env, self)
  }

  const rawHtmlBlockRule = md.renderer.rules.html_block || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options))
  const rawHtmlInlineRule = md.renderer.rules.html_inline || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options))
  md.renderer.rules.html_block = createHtmlRule(rawHtmlBlockRule)
  md.renderer.rules.html_inline = createHtmlRule(rawHtmlInlineRule)
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

// 该版本缺点：这里只能匹配 `![]()` 形式的
export function limit_img_alias3(md: any, options?: any): void {
  const defaultRender = md.renderer.rules.image!
  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    const srcIndex = token.attrIndex('src')
    if (srcIndex >= 0) {
      const src = token.attrs![srcIndex][1]
      // 为没有 ./ 或 / 开头的路径添加 ./
      if (!/^(\.?\/|https?:|\/|data:)/.test(src)) {
        token.attrs![srcIndex][1] = './' + src
      }
      console.log('img src2---------\n', token.content, token)
    }
    return defaultRender(tokens, idx, options, env, self)
  }
}

const DOCS_PATH = 'src/' // TODO 从 vuepress 配置中获取
// 必须在 limit_img_alias 插件之前use，然后执行顺序会在 limit_img_alias 之后
// 另外需要确保你的public文件夹下存在 404.png
export function img_not_found(md: any, options?: any): void {
  const createHtmlRule =
  (rawHtmlRule) =>
  (tokens, idx, options, env, self) => {
    tokens[idx].content = tokens[idx].content.replace(
      /(<img\b)([^>]*?\bsrc=)(['"])(?!@|https?:|data:)([^'"]*?)(\3)/gi, // TODO not found 还要检查 `![]()` 的情况
      (match, tagStart, attrs, quote, src, endQuote) => {
        // if (src.startsWith('/') || src.startsWith('.')) {
        const absPath = path.resolve(DOCS_PATH + path.dirname(env.filePathRelative), src)
        if (!fs.existsSync(absPath)) { // TODO 性能优化
          console.error(`[error] Img not found, ${src} from ${env.filePathRelative}`)
          tokens[idx].attrSet('src', '/404.png'); src = '/404.png';
        }
        return `${tagStart}${attrs}${quote}${src}${endQuote}`  //  保持不动
      }
    );
    return rawHtmlRule(tokens, idx, options, env, self)
  }

  const rawHtmlBlockRule = md.renderer.rules.html_block || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options))
  const rawHtmlInlineRule = md.renderer.rules.html_inline || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options))
  md.renderer.rules.html_block = createHtmlRule(rawHtmlBlockRule)
  md.renderer.rules.html_inline = createHtmlRule(rawHtmlInlineRule)
}

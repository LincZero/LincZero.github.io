/**
 * markdown-it 扩展相关 + markdown-it-anyBlock 的实现
 * 
 * 其中插件部分暂自用，等需要发布时再从这里剥离开，放到npm官网上
 */

// import type MarkdownIt from "markdown-it";
import MarkdownItConstructor from "markdown-it-container";

interface Options {
  multiline: boolean;
  rowspan: boolean;
  headerless: boolean;
  multibody: boolean;
  autolabel: boolean;
}

/**
 * 选择 anyBlock 块 - 方括号内联段
 * 
 * TODO 目前仅支持修饰 list 的ab块，后续要将 fence/codeBlock、quote 也加进来
 * 
 * @detail
 * 选择 [] 包裹的正文段
 */
function abSelector_squareInline(md: markdownit, options?: Partial<Options>): void {
  md.block.ruler.before('paragraph', 'anyBlock_paragraph', function (state,startLine,endLine) {
    
    // (1) 匹配ab块头部
    let text: String;
    {
      state.line = startLine
      const pos = state.bMarks[state.line]  // 这行字符的初始位置
      const max = state.eMarks[state.line]  // 这行字符的结束位置
      text = state.src.substring(pos, max)  // 这一行的内容
      // 若不匹配则退出
      const reg = /^\[(.*)\]$/;
      const match = text.match(reg)
      if (!match || !match.length) return false
    }

    // (2) 匹配ab块范围
    const ab_startLine: number = state.line // ab块 - 起始行
    let ab_content: String = ""             // ab块 - 内容
    state.line += 1
    findEnd1()
    findEnd2()
    // 若不匹配则退出
    if (ab_content.trim() == "") {
      state.line = ab_startLine
      return false
    }
    const ab_header: String = text          // ab块 - 头部
    const ab_endLine: number = state.line   // ab块 - 结束行

    // (3) 插入ab块token
    let token = state.push('fence', 'codee', 1)
    token.info = "AnyBlock"
    token.content = `${ab_header}${ab_content}`+
      `\n\n[debug] startLine:${ab_startLine}, endLine:${ab_endLine}`
    token.map = [ab_startLine, ab_endLine]
    //token.markup = '[ABB]';
    return true

    // -------------------------- 子函数部分 ------------------------

    /// 找到ab块的结尾 - 1，允许下一行为空格
    function findEnd1() {
      const pos = state.bMarks[state.line];  // 这行字符的初始位置
      const max = state.eMarks[state.line];  // 这行字符的结束位置
      const text = state.src.substring(pos, max); // 这一行的内容
      if (text.trim() == "") {
        ab_content += "\n"
        state.line = state.line + 1
      }
    }

    /// 找到ab块的结尾 - 2，迭代部分
    function findEnd2() {
      const pos = state.bMarks[state.line]  // 这行字符的初始位置
      const max = state.eMarks[state.line]  // 这行字符的结束位置

      const text = state.src.substring(pos, max) // 这一行的内容
      if (text.trim().match(/^-\s/)) {
        ab_content += "\n" + text
        state.line += 1
        findEnd2()
      }
    }
  })
}

/**
 * 选择 anyBlock 块 - :::规则
 * 
 * @detail 选择 `:::anyBlock` 包裹的片段
 */
function abSelector_container(md: markdownit, options?: Partial<Options>): void {
  md.use(MarkdownItConstructor, 'AnyBlockContainer', {
  
    validate: function(params) {
      return params.trim().match(/^anyBlock(.*)$/);
    },
  
    render: function (tokens, idx) {
      // 通过 tokens[idx].info.trim() 取出 'click me' 字符串
      var m = tokens[idx].info.trim().match(/^anyBlock(.*)$/);
  
      // 开始标签的 nesting 为 1，结束标签的 nesting 为 -1
      if (tokens[idx].nesting === 1) {
        // 开始标签
        return '<details class="any-block-debug"><summary>' + md.utils.escapeHtml(m[1]).trimStart() + '</summary>\n';
      } else {
        // 结束标签
        return '</details>\n';
      }
    }
  });
}

/**
 * 渲染 anyBlock 块 - codeBlock/fence 规则
 */
function abRender_fence(md: markdownit, options?: Partial<Options>): void {
  const oldFence = md.renderer.rules.fence || function(tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    // 查看是否匹配
    let token = tokens[idx]
    if (token.info.toLowerCase() != "anyblock") {
      return oldFence(tokens, idx, options, env, self)
    }

    // anyBlock专属渲染
    let rawCode = oldFence(tokens, idx, options, env, self);
    return `<!--beforebegin--><div class="any-block-debug language-${token.info.trim()} extra-class">` +
    `<!--afterbegin-->${rawCode}<!--beforeend--></div><!--afterend-->`
  }
}

export default  (md: markdownit) => {
  // md.use(anyBlock)
  md.use(abSelector_squareInline)
  md.use(abSelector_container)
  md.use(abRender_fence)
}

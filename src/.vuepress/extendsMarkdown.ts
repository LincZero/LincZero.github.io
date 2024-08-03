/**
 * markdown-it 扩展相关 + markdown-it-anyBlock 的实现
 * 
 * 其中插件部分暂自用，等需要发布时再从这里剥离开，放到npm官网上
 * 
 * @detail
 * 依赖问题：
 * - 1. MarkdownIt
 *       这里的回调函数自带有一个md，按理说是不需要再安一个的。但vuePress给的mdit对象可能存在问题：
 *       - 部分属性访问报错可能是VuePress定义省略的原因。可通过 安装 + import type MarkdownIt from "markdown-it" 解决，这里我仅仅是ts-ignore了
 *       - 原始的无插件md对象，调用render不报错。但如果用vuepress给的md对象，renderInline正常，但调用render会编译报错 (后来发现和mdEnhance的include冲突了)
 * - 2. MarkdownItConstructor
 *       安装 + import MarkdownItConstructor from "markdown-it-container";
 * - 3. JsDom。这个是解决平台兼容问题
 *       跨平台兼容依赖问题：
 *       - 在Obsidian环境，能够使用document
 *       - 在vuepress和mdit环境，他是使用纯文本来解析渲染md而非面向对象，也不依赖document。
 *         所以为了兼顾这个，需要额外安装Node.js中能使用的[jsdom](https://github.com/jsdom/jsdom)
 *         JSDOM是一个模拟浏览器环境的库，主要用于服务器端渲染。
 *   
 *       jsdom 老install失败。网上搜说：
 *       a: jsdom 依赖于 contextify，而 contextify 最近才支持 windows。安装它需要 python 和 C++ 编译器。
 *       b: jsdom 使用 contextify 在 DOM 上运行 JavaScript。而 contextify 需要本地 C++ 编译器。根据官方自述，在 Windows 平台上必须安装一堆东西
 *       不过我后来尝试按一个回答中那样指定了版本就可以了：npm install -D jsdom@4.2.0
 * 
 *       另外就是需要注意jsdom创建的dom和正常的dom是不一样的：
 *       const dom2: HTMLElement = new JSDOM("<h2>777</h2>")
 *       const dom1 = document.createElement("h2"); dom1.textContent = "666";
 *       el.appendChild(dom2) // dom2会报错，而dom1不会
 * - 4. AnyBlockConvert 插件主体
 * 
 * 使用 AnyBlockConvert 的一个别扭的转化：
 * - 原mdit逻辑
 *     - str --md.render--> html_str
 * - 原obplugin逻辑
 *     - str --callback--> html
 *     - callback: str --ob的MarkdownRenderer.renderMarkdown--> html
 * - 现混合复用逻辑
 *     - str --callback--> html --outerHTML--> html_str
 *     - callback：str --MarkdownIt.render--> html_str --innerHTML--> html
 */

/// 下面的依赖可以见上面文件注释

// 1. markdown-it
//import MarkdownIt from "markdown-it"

// 2. markdown-it-container
import MarkdownItConstructor from "markdown-it-container";

// 3. JsDom。仅用于提供document对象支持 (如果Ob环境中则不需要，用ob自带document对象的)
import jsdom from "jsdom"
const { JSDOM } = jsdom
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`, {
  url: 'http://localhost/', // @warn 若缺少该行，则在mdit+build环境下，编译报错
});
global.window = dom.window
global.history = dom.window.history // @warn 若缺少该行，则在mdit+build环境下，编译报错：ReferenceError: history is not defined
global.document = dom.window.document
global.NodeList = dom.window.NodeList
global.HTMLElement = dom.window.HTMLElement
global.HTMLDivElement = dom.window.HTMLDivElement
global.HTMLPreElement = dom.window.HTMLPreElement
global.HTMLQuoteElement = dom.window.HTMLQuoteElement
global.HTMLTableElement = dom.window.HTMLTableElement
global.HTMLUListElement = dom.window.HTMLUListElement
global.HTMLScriptElement = dom.window.HTMLScriptElement
dom.window.scrollTo = ()=>{} // @warn 若缺少该行，编译警告：Error: Not implemented: window.scrollTo

// 4. markdown-it-anyblock 插件
import { ABConvertManager } from "./plugin/ABConvertManager/ABConvertManager"
import { ABReg } from "./plugin/ABConvertManager/ABReg"

// 加载所有转换器 (都是可选的)
// (当然，如果A转换器依赖B转换器，那么你导入A必然导入B)
import "./plugin/ABConvertManager/converter/abc_text"
import "./plugin/ABConvertManager/converter/abc_list"
import "./plugin/ABConvertManager/converter/abc_table"
import "./plugin/ABConvertManager/converter/abc_deco"
import "./plugin/ABConvertManager/converter/abc_ex"
import "./plugin/ABConvertManager/converter/abc_mermaid" // 可选建议：7.1MB
import "./plugin/ABConvertManager/converter/abc_markmap" // 可选建议：1.3MB

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
    let text: string
    {
      state.line = startLine
      const pos = state.bMarks[state.line]  // 这行字符的初始位置
      const max = state.eMarks[state.line]  // 这行字符的结束位置
      text = state.src.substring(pos, max)  // 这一行的内容
      // 若不匹配则退出
      const match = text.match(ABReg.reg_header)
      if (!match || !match.length) return false
    }

    // (2) 匹配ab块范围
    // const prefix // ab块 - 前缀，TODO 前缀功能以后再做，暂不支持。不过ob的mc要处理前缀避免嵌套问题，感觉mdit的token应该不需要处理？
    let ab_blankLine_counter = 0            // ab块 - 连续空行计数器，为1则跳到下行，为2则结束ab块
    const ab_startLine: number = state.line // ab块 - 起始行
    let ab_content: string = ""             // ab块 - 内容
    let ab_blockType: string = ""           // ab块 - 块类型
    state.line += 1
    findAbEnd()
    // 若不匹配则退出
    if (ab_content.trim() == "") {
      state.line = ab_startLine
      return false
    }
    const ab_header: string = text          // ab块 - 头部
    const ab_endLine: number = state.line   // ab块 - 结束行

    // (3) 插入ab块token
    let token = state.push('fence', 'codee', 1)
    token.info = "AnyBlock"
    token.content = `${ab_header}${ab_content}`
    token.map = [ab_startLine, ab_endLine]
    //token.markup = '[ABB]';
    return true

    // -------------------------- 子函数部分 ------------------------

    /// 找到ab块的结尾，迭代部分
    function findAbEnd() {
      const pos = state.bMarks[state.line]  // 这行字符的初始位置
      const max = state.eMarks[state.line]  // 这行字符的结束位置
      const text = state.src.substring(pos, max) // 这一行的内容

      // 1. 文章末行结束
      if (state.line > endLine) {
        state.line = endLine
        return
      }

      // 2. 连续空行结束
      if (text.trim() == "") {
        ab_blankLine_counter++;
        if (ab_blankLine_counter < 2) {
          ab_content += "\n"
          state.line += 1
          return findAbEnd()
        }
        else {
          return
        }
      } else {
        ab_blankLine_counter = 0;
      }

      // 3. 非匹配项结束 (第一行和其他行不同的)
      let reg;
      if (ab_blockType == "") { reg = ABReg.reg_list_noprefix; ab_blockType = "list" }
      else { reg = /^(-\s|\s).*$/ }
      if (reg.test(text)) {
        ab_content += "\n" + text
        state.line += 1
        return findAbEnd()
      }
      return
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
    let lines = token.content.split('\n')
    if (token.info.toLowerCase() != "anyblock") { return oldFence(tokens, idx, options, env, self) }

    // 抽离指令头和内容
    let ab_header: string|undefined = lines.shift()
    if (typeof ab_header === 'undefined') { return oldFence(tokens, idx, options, env, self) }
    const match = ab_header.match(/\[(.*)\]/)
    if (!match || match?.length < 1) { return oldFence(tokens, idx, options, env, self) }
    ab_header = match[1]
    let ab_content: string = lines.join('\n')
    ab_content = ab_content.trimStart() // TODO 这里去除了空行以外的前面空格，是否存在问题

    // anyBlock专属渲染 - 测试
    //let rawCode = oldFence(tokens, idx, options, env, self);
    //return `<!--beforebegin--><div class="any-block-debug language-${token.info.trim()} extra-class">` +
    //`<!--afterbegin-->${rawCode}<!--beforeend--></div><!--afterend-->`

    // anyBlock专属渲染
    let el: HTMLDivElement = document.createElement("div"); el.classList.add("ab-note", "drop-shadow");
        // 临时el，未appendClild到dom中，脱离作用域会自动销毁
        // 用临时el是因为 mdit render 是 md_str 转 html_str 的，而Ob和原插件那边是使用HTML类的，要兼容
    ABConvertManager.autoABConvert(el, ab_header, ab_content)
    
    // 特殊：anyBlcok的特殊转文字输出 (主要用于额外修复服务器环境导致的 mermaid bug)
    // TODO !!! 这种用法是有问题的，和ab的接口设计是冲突的，仅临时使用后面要规范一下
    if (el.classList.contains("ab-mermaid-label")) {
      const subEl = el.querySelector(".ab-mermaid-data")
      if (subEl) {
        token.content = subEl.getAttribute("mermaidText")??token.content
        token.info = "mermaid"
        return oldFence(tokens, idx, options, env, self);
      }
    }

    return el.outerHTML
  }
}

export default  (md: markdownit) => {
  // 定义默认渲染行为
  ABConvertManager.getInstance().redefine_renderMarkdown((markdown: string, el: HTMLElement): void => {
    const result: string = md.render(markdown)
    const el_child = document.createElement("div"); el.appendChild(el_child); el_child.innerHTML = result;
  })

  // 加载插件
  md.use(abSelector_squareInline)
  md.use(abSelector_container)
  md.use(abRender_fence)
}

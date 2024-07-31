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

// 3. JsDom。仅用于提供document对象支持 (如果在Ob中则请注释掉他，用ob自带document对象的)
import jsdom from "jsdom"
const { JSDOM } = jsdom
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`)
global.window = dom.window
global.document = dom.window.document
global.NodeList = dom.window.NodeList
global.HTMLElement = dom.window.document

// 4. markdown-it-anyblock 插件
import { ABConvertManager } from "./plugin/ABConvertManager/ABConvertManager"
import { ABReg } from "./plugin/ABConvertManager/ABReg"
import "./plugin/ABConvertManager/converter/abc_text"    // 加载所有处理器和选择器
//import "./plugin/ABConvertManager/converter/abc_list"    // ^

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
      const match = text.match(ABReg.reg_header)
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
    token.content = `${ab_header}${ab_content}`
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
      if (text.trim().match(ABReg.reg_list)) {
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
    let el: HTMLDivElement = document.createElement("div")  // 临时el，未appendClild到dom中，脱离作用域会自动销毁
        // 用临时el是因为 mdit render 是 md_str 转 html_str 的，而Ob和原插件那边是使用HTML类的，要兼容
    ABConvertManager.autoABConvert(el, ab_header, ab_content)
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
  // md.use(anyBlock)
  md.use(abSelector_squareInline)
  md.use(abSelector_container)
  md.use(abRender_fence)
}

import {ABConvert_IOType, ABConvert, type ABConvert_SpecSimp} from "./ABConvert"
import {ABReg} from "../abReg"

//import {getID} from "src/utils/utils"
//import mermaid from "mermaid"
//import mindmap from '@mermaid-js/mermaid-mindmap';
//const initialize = mermaid.registerExternalDiagrams([mindmap]);
//export const mermaid_init = async () => {
//  await initialize;
//};

/**
 * 将registerABProcessor的调用分成两步是因为：
 * 1. 能方便在大纲里快速找到想要的处理器
 * 2. 让处理器能互相调用
 */

//const abc_md = ABConvert.factory({
//  id: "md",
//  name: "md",
//  process_param: ABConvert_IOType.text,
//  process_return: ABConvert_IOType.el,
//  process: (el, header, content)=>{
//    const subEl = el.createDiv()
//    subEl.addClass("markdown-rendered")
//    const child = new MarkdownRenderChild(subEl);
//    MarkdownRenderer.renderMarkdown(content, subEl, "", child);
//    // ctx.addChild(child);
//    return el
//  }
//})

const abc_quote = ABConvert.factory({
  id: "quote",
  name: "增加引用块",
  process_param: ABConvert_IOType.text,
  process_return: ABConvert_IOType.text,
  process: (el, header, content)=>{
    return content.split("\n").map((line)=>{return "> "+line}).join("\n")
  }
})

const abc_code = ABConvert.factory({
  id: "code",
  name: "增加代码块",
  match: /^code(\((.*)\))?$/,
  default: "code()",
  detail: "不加`()`表示用原文本的第一行作为代码类型，括号类型为空表示代码类型为空",
  process_param: ABConvert_IOType.text,
  process_return: ABConvert_IOType.text,
  process: (el, header, content)=>{
    let matchs = header.match(/^code(\((.*)\))?$/)
    if (!matchs) return content
    if (matchs[1]) content = matchs[2]+"\n"+content
    return "```"+content+"\n```"
  }
})

const abc_Xquote = ABConvert.factory({
  id: "Xquote",
  name: "去除引用块",
  process_param: ABConvert_IOType.text,
  process_return: ABConvert_IOType.text,
  process: (el, header, content)=>{
    return content.split("\n").map(line=>{
      return line.replace(/^>\s/, "")
    }).join("\n")
  }
})

const abc_Xcode = ABConvert.factory({
  id: "Xcode",
  name: "去除代码块",
  match: /^Xcode(\((true|false)\))?$/,
  default: "Xcode(true)",
  detail: "参数为是否移除代码类型, 默认为false。记法: code|Xcode或code()|Xcode(true)内容不变",
  process_param: ABConvert_IOType.text,
  process_return: ABConvert_IOType.text,
  process: (el, header, content)=>{
    let matchs = header.match(/^Xcode(\((true|false)\))?$/)
    if (!matchs) return content
    let remove_flag:boolean
    if (matchs[1]=="") remove_flag=false
    else remove_flag= (matchs[2]=="true")
    let list_content = content.split("\n")
    // 开始去除
    let code_flag = ""
    let line_start = -1
    let line_end = -1
    for (let i=0; i<list_content.length; i++){
      if (code_flag==""){     // 寻找开始标志
        const match_tmp = list_content[i].match(ABReg.reg_code)
        if(match_tmp){
          code_flag = match_tmp[3]
          line_start = i
        }
      }
      else {                  // 寻找结束标志
        if(list_content[i].indexOf(code_flag)>=0){
          line_end = i
          break
        }
      }
    }
    if(line_start>=0 && line_end>0) { // 避免有头无尾的情况
      if(remove_flag) list_content[line_start] = list_content[line_start].replace(/^```(.*)$|^~~~(.*)$/, "")
      else list_content[line_start] = list_content[line_start].replace(/^```|^~~~/, "")
      list_content[line_end] = list_content[line_end].replace(/^```|^~~~/, "")
      content = list_content.join("\n")//.trim()
    }
    return content
  }
})


//const abc_mermaid = ABConvert.factory({
//  id: "mermaid",
//  name: "新mermaid",
//  match: /^mermaid(\((.*)\))?$/,
//  default: "mermaid(graph TB)",
//  detail: "由于需要兼容脑图，这里会使用插件内置的最新版mermaid",
//  process_param: ABConvert_IOType.text,
//  process_return: ABConvert_IOType.el,
//  process: (el, header, content)=>{
//    let matchs = content.match(/^mermaid(\((.*)\))?$/)
//    if (!matchs) return el
//    if (matchs[1]) content = matchs[2]+"\n"+content
//
//    ;(async (el:HTMLDivElement, header:string, content:string)=>{
//      await mermaid_init()
//      await mermaid.mermaidAPI.renderAsync("ab-mermaid-"+getID(), content, (svgCode: string)=>{
//        el.innerHTML = svgCode
//      });
//    })(el, header, content)
//    return el
//  }
//})

const abc_text = ABConvert.factory({
  id: "text",
  name: "纯文本",
  detail: "其实一般会更推荐用code()代替，那个更精确",
  process_param: ABConvert_IOType.text,
  process_return: ABConvert_IOType.el,
  process: (el, header, content)=>{
    // 文本元素。pre不好用，这里还是得用<br>换行最好
    // `<p>${content.split("\n").map(line=>{return "<span>"+line+"</span>"}).join("<br/>")}</p>`
    el.innerHTML = `<p>${content.replace(/ /g, "&nbsp;").split("\n").join("<br/>")}</p>`
    return el
  }
})

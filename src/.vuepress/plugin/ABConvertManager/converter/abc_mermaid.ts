/**
 * AB转换器 - mermaid相关
 * 
 * (可选) 参考：在Ob插件中增加7.1MB
 */

import {ABConvert_IOEnum, ABConvert, type ABConvert_SpecSimp} from "./ABConvert"
import {ABConvertManager} from "../ABConvertManager"
import {ListProcess, type List_ListItem} from "./abc_list"
import {ABReg} from "../ABReg"

/**
 * 生成一个随机id
 * 
 * @detail 因为mermaid渲染块时需要一个id，不然多个mermaid块会发生冲突
 */
function getID(length=16){
    return Number(Math.random().toString().substr(3,length) + Date.now()).toString(36);
}

// mermaid相关
import mermaid from "mermaid"
import mindmap from '@mermaid-js/mermaid-mindmap';
const initialize = mermaid.registerExternalDiagrams([mindmap]);
export const mermaid_init = async () => {
  await initialize;
};

// 纯组合，后续用别名模块替代
const abc_title2mindmap = ABConvert.factory({
  id: "title2mindmap",
  name: "标题到脑图",
  process_param: ABConvert_IOEnum.text,
  process_return: ABConvert_IOEnum.el,
  process: (el, header, content)=>{
    content = ListProcess.title2list(content, el)
    list2mindmap(content, el)
    return el
  }
})

const abc_list2mermaid = ABConvert.factory({
  id: "list2mermaid",
  name: "列表转mermaid流程图",
  process_param: ABConvert_IOEnum.text,
  process_return: ABConvert_IOEnum.el,
  process: (el, header, content)=>{
    list2mermaid(content, el)
    return el
  }
})

const abc_list2mindmap = ABConvert.factory({
  id: "list2mindmap",
  name: "列表转mermaid思维导图",
  process_param: ABConvert_IOEnum.text,
  process_return: ABConvert_IOEnum.el,
  process: (el, header, content)=>{
    list2mindmap(content, el)
    return el
  }
})

const abc_mermaid = ABConvert.factory({
  id: "mermaid",
  name: "新mermaid",
  match: /^mermaid(\((.*)\))?$/,
  default: "mermaid(graph TB)",
  detail: "由于需要兼容脑图，这里会使用插件内置的最新版mermaid",
  process_param: ABConvert_IOEnum.text,
  process_return: ABConvert_IOEnum.el,
  process: (el, header, content)=>{
    let matchs = content.match(/^mermaid(\((.*)\))?$/)
    if (!matchs) return el
    if (matchs[1]) content = matchs[2]+"\n"+content

    ;(async (el:HTMLDivElement, header:string, content:string)=>{
      //await mermaid_init()
      //await mermaid.mermaidAPI.renderAsync("ab-mermaid-"+getID(), content, (svgCode: string)=>{
      //  el.innerHTML = svgCode
      //});
      const { svg } = await mermaid.render("ab-mermaid-"+getID(), content)
      el.innerHTML = svg
    })(el, header, content)
    return el
  }
})

// ----------- list and mermaid ------------

/** 列表转mermaid流程图 */
function list2mermaid(text: string, div: HTMLDivElement) {
  let list_itemInfo = ListProcess.list2data(text)
  return data2mermaid(list_itemInfo, div)
}

/** 列表转mermaid思维导图 */
function list2mindmap(text: string, div: HTMLDivElement) {
  let list_itemInfo = ListProcess.list2data(text)
  return data2mindmap(list_itemInfo, div)
}

/** 列表数据转mermaid流程图
 * ~~@bug 旧版bug（未内置mermaid）会闪一下~~ 
 * 然后注意一下mermaid的(项)不能有空格，或非法字符。空格我处理掉了，字符我先不管。算了，还是不处理空格吧
 */
async function data2mermaid(
  list_itemInfo: List_ListItem, 
  div: HTMLDivElement
){
  const html_mode = false    // @todo 暂时没有设置来切换这个开关

  let list_line_content:string[] = ["graph LR"]
  // let list_line_content:string[] = html_mode?['<pre class="mermaid">', "graph LR"]:["```mermaid", "graph LR"]
  let prev_line_content = ""
  let prev_level = 999
  for (let i=0; i<list_itemInfo.length; i++){
    if (list_itemInfo[i].level>prev_level){ // 向右正常加箭头
      prev_line_content = prev_line_content+" --> "+list_itemInfo[i].content//.replace(/ /g, "_")
    } else {                                // 换行，并……
      list_line_content.push(prev_line_content)
      prev_line_content = ""

      for (let j=i; j>=0; j--){             // 回退到上一个比自己大的
        if(list_itemInfo[j].level<list_itemInfo[i].level) {
          prev_line_content = list_itemInfo[j].content//.replace(/ /g, "_")
          break
        }
      }
      if (prev_line_content) prev_line_content=prev_line_content+" --> "  // 如果有比自己大的
      prev_line_content=prev_line_content+list_itemInfo[i].content//.replace(/ /g, "_")
    }
    prev_level = list_itemInfo[i].level
  }
  list_line_content.push(prev_line_content)
  // list_line_content.push(html_mode?"</pre>":"```")

  let text = list_line_content.join("\n")

  //const child = new MarkdownRenderChild(div);
  // div.addClass("markdown-rendered")
  //MarkdownRenderer.renderMarkdown(text, div, "", child);
  
  //mermaid.mermaidAPI.renderAsync("ab-mermaid-"+getID(), text, (svgCode:string)=>{
  //  div.innerHTML = svgCode
  //})
  const { svg } = await mermaid.render("ab-mermaid-"+getID(), text)
  div.innerHTML = svg
  return div
}

/** 列表数据转mermaid思维导图 */
async function data2mindmap(
  list_itemInfo: List_ListItem, 
  div: HTMLDivElement
){
  let list_newcontent:string[] = []
  for (let item of list_itemInfo){
    // 等级转缩进，以及"\n" 转化 <br/>
    let str_indent = ""
    for(let i=0; i<item.level; i++) str_indent+= " "
    list_newcontent.push(str_indent+item.content.replace("\n","<br/>"))
  }
  const newcontent = "mindmap\n"+list_newcontent.join("\n")
  //mermaid.mermaidAPI.renderAsync("ab-mermaid-"+getID(), newcontent, (svgCode:string)=>{
  //  div.innerHTML = svgCode
  //})
  const { svg } = await mermaid.render("ab-mermaid-"+getID(), newcontent)
  div.innerHTML = svg
  return div
}

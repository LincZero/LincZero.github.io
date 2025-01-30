/**
 * 处理器_装饰版
 * 
 * html <-> html
 * md_str <-> html
 */

import { ABConvert_IOEnum, ABConvert } from "./ABConvert"
import { ABConvertManager } from "../ABConvertManager"

export const DECOProcessor = 0  // 用于模块化，防报错，其实没啥用

const abc_md = ABConvert.factory({
  id: "md",
  name: "md",
  process_param: ABConvert_IOEnum.text,
  process_return: ABConvert_IOEnum.el,
  process: (el, header, content: string): HTMLElement=>{
    const subEl = document.createElement("div"); el.appendChild(subEl);
    ABConvertManager.getInstance().m_renderMarkdownFn(content, subEl)
    return el
  }
})

const abc_text = ABConvert.factory({
  id: "text",
  name: "纯文本",
  detail: "其实一般会更推荐用code()代替，那个更精确",
  process_param: ABConvert_IOEnum.text,
  process_return: ABConvert_IOEnum.el,
  process: (el, header, content: string): HTMLElement=>{
    // 文本元素。pre不好用，这里还是得用<br>换行最好
    // `<p>${content.split("\n").map(line=>{return "<span>"+line+"</span>"}).join("<br/>")}</p>`
    el.innerHTML = `<p>${content.replace(/ /g, "&nbsp;").split("\n").join("<br/>")}</p>`
    return el
  }
})

const abc_fold = ABConvert.factory({
  id: "fold",
  name: "折叠",
  process_param: ABConvert_IOEnum.el,
  process_return: ABConvert_IOEnum.el,
  process: (el, header, content: HTMLElement): HTMLElement=>{
    if(content.children.length!=1) return content
    const sub_el = content.children[0] as HTMLElement
    sub_el.remove()
    sub_el.setAttribute("is_hide", "true")
    sub_el.classList.add("ab-deco-fold-content")
    sub_el.style.display = "none"
    const mid_el = document.createElement("div"); content.appendChild(mid_el); mid_el.classList.add("ab-deco-fold");
    const sub_button = document.createElement("div"); mid_el.appendChild(sub_button); sub_button.classList.add("ab-deco-fold-button"); sub_button.textContent = "展开";
    const fn_fold = ()=>{
      const is_hide = sub_el.getAttribute("is_hide")
      if (is_hide && is_hide=="false") {
        sub_el.setAttribute("is_hide", "true"); 
        sub_el.style.display = "none"
        sub_button.textContent = "展开"
      }
      else if(is_hide && is_hide=="true") {
        sub_el.setAttribute("is_hide", "false");
        sub_el.style.display = ""
        sub_button.textContent = "折叠"
      }
    }
    sub_button.onclick = fn_fold
    mid_el.appendChild(sub_button)
    mid_el.appendChild(sub_el)

    // 二选一。仅ob环境，mdit环境不支持
    // 特殊：如果折叠内容是列表格。将该处理器的折叠行为修改该按钮的折叠功能
    // if (sub_el.classList.contains("ab-list-table")) {
    //   const btn = sub_el.querySelector(":scope>.ab-table-fold")
    //   if (btn) {
    //     // 1. 回溯原折叠
    //     fn_fold()
    //     sub_button.textContent = "全部折叠/展开"
    //     // 2. 使用新折叠
    //     const fn_fold2 = ()=>{
    //       const clickEvent = new MouseEvent("click", {
    //         view: window,
    //         bubbles: true,
    //         cancelable: true
    //       });
    //       btn.dispatchEvent(clickEvent);
    //     }
    //     fn_fold2()
    //     // 3. 按钮功能替换
    //     sub_button.onclick = fn_fold2
    //   }
    // }
    return content
  }
})


const abc_scroll = ABConvert.factory({
  id: "scroll",
  name: "滚动",
  match: /^scroll(\((\d+)\))?(T)?$/,
  default: "scroll(460)",
  process_param: ABConvert_IOEnum.el,
  process_return: ABConvert_IOEnum.el,
  process: (el, header, content: HTMLElement): HTMLElement=>{
    // 找参数
    const matchs = header.match(/^scroll(\((\d+)\))?(T)?$/)
    if (!matchs) return content
    let arg1
    if (!matchs[1]) arg1=460  // 默认值
    else{
      if (!matchs[2]) return content
      arg1 = Number(matchs[2])
      if (isNaN(arg1)) return content
    }
    // 修改元素
    if(content.children.length!=1) return content
    const sub_el = content.children[0]
    sub_el.remove()
    const mid_el = document.createElement("div"); content.appendChild(mid_el); mid_el.classList.add("ab-deco-scroll");
    if (!matchs[3]){
      mid_el.classList.add("ab-deco-scroll-y")
      mid_el.setAttribute("style", `max-height: ${arg1}px`)
    } else {
      mid_el.classList.add("ab-deco-scroll-x")
    }
    mid_el.appendChild(sub_el)
    return content
  }
})

const abc_overfold = ABConvert.factory({
  id: "overfold",
  name: "超出折叠",
  match: /^overfold(\((\d+)\))?$/,
  default: "overfold(380)",
  process_param: ABConvert_IOEnum.el,
  process_return: ABConvert_IOEnum.el,
  process: (el, header, content: HTMLElement): HTMLElement=>{
    // 找参数
    const matchs = header.match(/^overfold(\((\d+)\))?$/)
    if (!matchs) return content
    let arg1:number
    if (!matchs[1]) arg1=460  // 默认值
    else{
      if (!matchs[2]) return content
      arg1 = Number(matchs[2])
      if (isNaN(arg1)) return content
    }
    // 修改元素
    if(content.children.length!=1) return content
    const sub_el = content.children[0]
    sub_el.remove()
    const mid_el = document.createElement("div"); content.appendChild(mid_el); mid_el.classList.add("ab-deco-overfold");
    const sub_button = document.createElement("div"); mid_el.appendChild(sub_button); sub_button.classList.add("ab-deco-overfold-button"); sub_button.textContent = "展开";
    sub_el.classList.add("ab-deco-overfold-content")
    mid_el.appendChild(sub_el)
    mid_el.appendChild(sub_button)

    mid_el.setAttribute("style", `max-height: ${arg1}px`)
    mid_el.setAttribute("is-fold", "true")
    sub_button.onclick = ()=>{
      const is_fold = mid_el.getAttribute("is-fold")
      if (!is_fold) return
      if (is_fold=="true") {
        mid_el.setAttribute("style", "")
        mid_el.setAttribute("is-fold", "false")
        sub_button.textContent = "折叠"
      }
      else{
        mid_el.setAttribute("style", `max-height: ${arg1}px`)
        mid_el.setAttribute("is-fold", "true")
        sub_button.textContent = "展开"
      }
    }

    return content
  }
})

  /// 可以匹配如:
  /// width(25%,25%,50%)
  /// width(100px,10rem,10.5) 
  /// width(100)
  const abc_width = ABConvert.factory({
    id: "width",
    name: "宽度控制",
    match: /^width\(((?:\d*\.?\d+(?:%|px|rem)?,\s*)*\d*\.?\d+(?:%|px|rem)?)\)$/,
    detail: "用于控制表格或分栏的每列的宽度",
    process_param: ABConvert_IOEnum.el,
    process_return: ABConvert_IOEnum.el,
    process: (el, header, content: HTMLElement): HTMLElement=>{
      const matchs = header.match(/^width\(((?:\d*\.?\d+(?:%|px|rem)?,\s*)*\d*\.?\d+(?:%|px|rem)?)\)$/)
      if (!matchs || content.children.length!=1) return content
  
      // 支持 % 和 px 两种单位，默认单位是 px
      const args = matchs[1].split(",").map(arg => 
        /^\d*\.?\d+$/.test(arg.trim()) ? `${arg.trim()}%` : arg.trim()
      )
      // 检查容器是否包含需要处理的类名, 根据不同的容器, 处理方式不同
      switch(true){
        // ab-col支持渲染混合单位参数
        case content.children[0].classList.contains('ab-col'): {
          const sub_els = content.children[0].children
          if(sub_els.length==0) return content
          // 允许参数数量与分栏数量不一致，多的部分会被忽略 
          for(let i=0;i<Math.min(sub_els.length, args.length);i++){
            const sub_el = sub_els[i] as HTMLElement
            if(args[i].endsWith("%")) sub_el.style.flex = `0 1 ${args[i]}`
            else {
              sub_el.style.width = args[i]
              sub_el.style.flex = `0 0 auto`
            }
          }
          return content
        }
        /**
         * table目前无法很好渲染混合单位的参数（px和rem可以混合)
         * 用settimeout延迟获取table宽度可解决，但是会延长渲染时间
         * 可以尝试改用grid布局
         */
        // 使用非百分比单位尽量保证参数数量与列数一致，使用百分比单位表格会被按比例拉伸到行宽
        case content.children[0].querySelector('table') !== null: {
          const table = content.children[0].querySelector('table')
          if (!table) return content
          table.style.tableLayout = 'fixed'
          // 检查是否存在 % 单位的参数，使用100%，否则使用fit-content
          table.style.width = args.some(arg => arg.endsWith('%')) ? '100%' : 'fit-content'
          // setTimeout(() => {
          //   console.log('Table width:', table.offsetWidth);
          //   console.log('Computed width:', window.getComputedStyle(table).width);
          // }, 10);
          table.querySelectorAll('tr').forEach(row => {
            for (let i = 0; i < Math.min(row.children.length, args.length); i++) {
              const cell = row.children[i] as HTMLElement
              cell.style.width = cell.style.minWidth = cell.style.maxWidth = args[i]
            }
          })
          return content
        }
        default:
          return content
      }
    }
  })

const abc_addClass = ABConvert.factory({
  id: "addClass",
  name: "增加class",
  detail: "给当前块增加一个类名",
  match: /^addClass\((.*)\)$/,
  process_param: ABConvert_IOEnum.el,
  process_return: ABConvert_IOEnum.el,
  process: (el, header, content: HTMLElement): HTMLElement=>{
    const matchs = header.match(/^addClass\((.*)\)$/)
    if (!matchs || !matchs[1]) return content
    if(content.children.length!=1) return content
    const sub_el = content.children[0]
    sub_el.classList.add(String(matchs[1]))
    return content
  }
})

const abc_addDiv = ABConvert.factory({
  id: "addDiv",
  name: "增加div和class",
  detail: "给当前块增加一个父类，需要给这个父类一个类名",
  match: /^addDiv\((.*)\)$/,
  process_param: ABConvert_IOEnum.el,
  process_return: ABConvert_IOEnum.el,
  process: (el, header, content: HTMLElement): HTMLElement=>{
    const matchs = header.match(/^addDiv\((.*)\)$/)
    if (!matchs || !matchs[1]) return content
    const arg1 = matchs[1]
    // 修改元素
    if(content.children.length!=1) return content
    const sub_el = content.children[0]
    sub_el.remove()
    const mid_el = document.createElement("div"); content.appendChild(mid_el); mid_el.classList.add(arg1)
    mid_el.appendChild(sub_el)
    return content
  }
})

const abc_title = ABConvert.factory({
  id: "title",
  name: "标题",
  match: /^#(.*)/,
  detail: "若直接处理代码或表格块，则会有特殊风格",
  process_param: ABConvert_IOEnum.el,
  process_return: ABConvert_IOEnum.el,
  process: (el, header, content: HTMLElement): HTMLElement=>{ // content有特殊class，不能更换。要在他下面套壳
    const matchs = header.match(/^#(.*)/)
    if (!matchs || !matchs[1]) return content
    const arg1 = matchs[1]

    // 修改元素 - 把旧元素取出文档树
    const el_content = document.createElement("div");
    while (content.firstChild) {
      const item = content.firstChild;
      content.removeChild(item)
      el_content.appendChild(item)
    }
    // 修改元素 - 重新构建结构
    const el_root = document.createElement("div"); content.appendChild(el_root); el_root.classList.add("ab-deco-title");
    const el_title = document.createElement("div"); el_root.appendChild(el_title); el_title.classList.add("ab-deco-title-title");
    const el_title_p = document.createElement("p"); el_title.appendChild(el_title_p); el_title_p.textContent = arg1;
    el_root.appendChild(el_content); el_content.classList.add("ab-deco-title-content");

    // 判断元素类型修改，以修改title风格 // TODO 话说混合应该用第一个还是直接none？先用第一个吧，因为说不定后面的是工具栏之类的
    let el_content_sub = el_content.childNodes[0]; if (!el_content_sub) return content;
    if (el_content_sub instanceof HTMLDivElement && el_content.childNodes.length == 1 && el_content.childNodes[0].childNodes[0]) { el_content_sub = el_content.childNodes[0].childNodes[0] } // 如果是重渲染，则再往下一层
    let title_type = "none"
    if (el_content_sub instanceof HTMLQuoteElement){title_type = "quote"
      // 这里借用callout的样式
      el_root.classList.add("callout")
      el_title.classList.add("callout-title");
      el_content.classList.add("callout-content");
      // 去除原来的引用块样式
      const el_content_sub_parent =  el_content_sub.parentNode; if (!el_content_sub_parent) return content
      while (el_content_sub.firstChild) {
        el_content_sub_parent.insertBefore(el_content_sub.firstChild, el_content_sub);
      }
      el_content_sub_parent.removeChild(el_content_sub)
    }
    else if (el_content_sub instanceof HTMLTableElement){title_type = "table"}
    else if (el_content_sub instanceof HTMLUListElement){title_type = "ul"}
    else if (el_content_sub instanceof HTMLPreElement){title_type = "pre"}
    // ;(()=>{
    //   let color:string = window.getComputedStyle(el_content_sub ,null).getPropertyValue('background-color'); 
    //   if (color) el_title.setAttribute("style", `background-color:${color}`)
    //   else {
    //   color = window.getComputedStyle(el_content_sub ,null).getPropertyValue('background'); 
    //   el_title.setAttribute("style", `background:${color}`)
    //   }
    // })//()
    el_title.setAttribute("title-type", title_type)
    return content
  }
})

const abc_transposition = ABConvert.factory({
  id: "transposition",
  name: "表格转置",
  match: "transposition",
  detail: "将表格进行转置，就像矩阵转置那样。该版本不支持有跨行跨列单元格",
  process_param: ABConvert_IOEnum.el,
  process_return: ABConvert_IOEnum.el,
  process: (el, header, content: HTMLElement): HTMLElement=>{

    // 1. 数据准备 - 旧表格简单解析 (暂时仅支持规范列表，不支持跨行跨列或缺格)
    const origi_table: HTMLTableElement | null = content.querySelector('table'); if (!origi_table) return content;
    const origi_rows = origi_table.rows;
    const origi_rowCount: number = origi_rows.length;           // 行数
    const origi_colCount: number = origi_rows[0].cells.length;  // 列数 (只取第一行的列数)

    // 2. 准备表格元素
    const trans_table = document.createElement('table'); content.appendChild(trans_table); origi_table.classList.add("ab-transposition"); origi_table.classList.add("ab-table");
    origi_table.classList.forEach(className => { // 并应用原表格的样式
      trans_table.classList.add(className);
    });
    // const trans_header = document.createElement('thead'); trans_table.appendChild(trans_header); // 转置不支持表头
    const trans_body = document.createElement('tbody'); trans_table.appendChild(trans_body);

    // 3. 数据填充表格
    for (let col = 0; col < origi_colCount; col++) {
      const newRow = trans_body.insertRow();
      for (let row = 0; row < origi_rowCount; row++) {
        const oldCell = origi_rows[row].cells[col]; if (!oldCell) continue; // 需要注意的是：如果是obsidian的可视化编辑表格，tbody前两个tr会是空的，很怪
        const newCell = newRow.insertCell();
        newCell.innerHTML = oldCell.innerHTML;
      }
    }

    origi_table.remove();
    return content;
  }
})

const abc_transpose = ABConvert.factory({
  id: "transpose",
  name: "表格转置",
  match: "trs",
  detail: "将表格进行转置，就像矩阵转置那样。该版本支持有跨行跨列单元格",
  process_param: ABConvert_IOEnum.el,
  process_return: ABConvert_IOEnum.el,
  process: (el, header, content: HTMLElement): HTMLElement=>{
    /**
     * 架构：
     * 
     * 这里我们把每个单元格的位置和尺寸用四个变量描述：rowSpan, colSpan, rowIndex, colIndex
     * 
     * 注意区分以下几个变量：
     * - 这四个是绝对的：rowSpan、colSpan、rowIndex、colIndex
     * - 这两个是相对的（起点不一定从0开始）：relRow、relCol
     *   例如对于下表来说，C的 (rowIndex, colIndex)是(1,1)，但 (relRow, relCol)是(1,0)
     *   | A | B |
     *   | ^ | C |
     * - 这两个不是纯粹的位置描述：table_rowCount、table_colCount。他们有可能大于rowIndex、colIndex的取值
     *   行数的值应该等于单元格中(rowIndex+rowSpan)最大的值
     */
    type type_tableCell = {
      html: HTMLTableCellElement,
      rowSpan: number,
      colSpan: number,
      rowIndex: number,
      colIndex: number,
    }

    // 1.1. 数据准备 - 旧表格简单解析 (支持rowspan和colspan)
    const origi_table: HTMLTableElement | null = content.querySelector('table'); if (!origi_table) return content;
    const origi_rows = origi_table.rows;
    const origi_rowCount: number = origi_rows.length;             // 最大行数 (算span范围扩展)
    let origi_colCount: number = 0;                               // 最大列数 (算span范围扩展)
    // TODO: 这里有bug: 如果第一行的spanRow是2，第2的col数又多出一个，这里会计少。如下面的列数是3，但第一行只能找到2
    // - r1c1
    //   - r1c2
    //   - r2c2
    //     - r2c3
    //     - r3c3
    // - r4c1
    //   - r4c2
    //   - r5c2
    for (let relRow = 0; relRow < origi_rowCount; relRow++) {
      let colCount = 0; // 此行的最大列数
      for (const cell of origi_rows[relRow].cells) {
        colCount += cell.colSpan || 1;
      }
      if (colCount > origi_colCount) {
        origi_colCount = colCount;
      }
    }

    // 1.2. 数据准备 - 旧表格解析到map
    // 创建一个二维数组来记录旧表格, size: [origi_rowCount][origi_colCount]
    // 要分析带span的表格，必须用到占位符才有解。`^` 和 `<` 都是占位符，不过目前不区分作用
    const map_table: (type_tableCell|null|"<"|"^")[][] = new Array(origi_rowCount).fill(null).map(() => new Array(origi_colCount).fill(null));
    for (let relRow = 0; relRow < origi_rowCount; relRow++) {
      for (let relCol = 0; relCol < origi_rows[relRow].cells.length; relCol++) {
        const cell: HTMLTableCellElement = origi_rows[relRow].cells[relCol];

        // 调整当前格位置
        const rowIndex = relRow;
        let colIndex = relCol;
        while(true) {
          if (colIndex >= map_table[rowIndex].length) { console.error("表格解析错误: colIndex超出范围", map_table, rowIndex, colIndex, relRow, relCol); return content; }
          if (!map_table[rowIndex][colIndex]) { break }         // 位置正确 (null)
          else colIndex++                                       // 继续找位置
        }
        // 填充下占位
        if (cell.rowSpan>1) {
          for (let i = 1; i < cell.rowSpan; i++) {
            if (rowIndex+i >= map_table.length) { break; }            // 允许范围溢出
            map_table[rowIndex+i][colIndex] = "^"
          }
        }
        // 填充右占位
        if (cell.colSpan>1) {
          for (let i = 1; i < cell.rowSpan; i++) {
            if (colIndex+i >= map_table[rowIndex].length) { break; }  // 允许范围溢出
            map_table[rowIndex][colIndex+i] = "<"
          }
        }
        // 填充本格
        map_table[rowIndex][colIndex] = {
          html: cell,
          rowSpan: cell.rowSpan,
          colSpan: cell.colSpan,
          rowIndex: rowIndex,
          colIndex: colIndex,
        };
      }
    }

    // 1.3. 数据准备 - map转置
    const map_table2: (type_tableCell|null|"<"|"^")[][] = new Array(origi_colCount).fill(null).map(() => new Array(origi_rowCount).fill(null));
    for (let i = 0; i < origi_rowCount; i++) {
      for (let j = 0; j < origi_colCount; j++) {
        const origi_cell = map_table[i][j]
        if (!origi_cell) continue;
        else if (origi_cell == "<") {
          map_table2[j][i] = "^"
        }
        else if (origi_cell == "^") {
          map_table2[j][i] = "<"
        }
        else {
          map_table2[j][i] = {
            html: origi_cell.html,
            rowSpan: origi_cell.colSpan || 1,
            colSpan: origi_cell.rowSpan || 1,
            rowIndex: origi_cell.colIndex,
            colIndex: origi_cell.rowIndex,
          }
        }
      }
    }

    // 2. 准备表格元素
    const trans_table = document.createElement('table'); content.appendChild(trans_table); origi_table.classList.add("ab-transposition"); origi_table.classList.add("ab-table");
    origi_table.classList.forEach(className => { // 并应用原表格的样式
      trans_table.classList.add(className);
    });
    // const trans_header = document.createElement('thead'); trans_table.appendChild(trans_header); // 转置不支持表头
    const trans_body = document.createElement('tbody'); trans_table.appendChild(trans_body);

    // 3. 数据填充
    for (let i = 0; i < origi_colCount; i++) {
      const newRow = trans_body.insertRow();
      for (let j = 0; j < origi_rowCount; j++) {
        const cell = map_table2[i][j]
        if (!cell) continue;
        if (cell == "<" || cell == "^") continue;
        const newCell = newRow.insertCell();
        newCell.innerHTML = cell.html.innerHTML;
        newCell.rowSpan = cell.rowSpan;
        newCell.colSpan = cell.colSpan;
        newCell.setAttribute("rowIndex", String(cell.rowIndex));
        newCell.setAttribute("colIndex", String(cell.colIndex));
      }
    }

    origi_table.remove();
    return content;
  }
})

// 实现上与表格转置大差不差
const abc_exTable = ABConvert.factory({
  id: "exTable",
  name: "表格扩展",
  match: "exTable",
  detail: "将表格应用sheet-table语法 (使用 `</^` 标注合并单元格)",
  process_param: ABConvert_IOEnum.el,
  process_return: ABConvert_IOEnum.el,
  process: (el, header, content: HTMLElement): HTMLElement=>{
    /**
     * 架构：
     * 
     * 这里我们把每个单元格的位置和尺寸用四个变量描述：rowSpan, colSpan, rowIndex, colIndex
     * 
     * 注意区分以下几个变量：
     * - 这四个是绝对的：rowSpan、colSpan、rowIndex、colIndex
     * - 这两个是相对的（起点不一定从0开始）：relRow、relCol
     *   例如对于下表来说，C的 (rowIndex, colIndex)是(1,1)，但 (relRow, relCol)是(1,0)
     *   | A | B |
     *   | ^ | C |
     * - 这两个不是纯粹的位置描述：table_rowCount、table_colCount。他们有可能大于rowIndex、colIndex的取值
     *   行数的值应该等于单元格中(rowIndex+rowSpan)最大的值
     */
    type type_tableCell = {
      html: HTMLTableCellElement,
      rowSpan: number,
      colSpan: number,
      rowIndex: number,
      colIndex: number,
    }

    // 1.1. 数据准备 - 旧表格简单解析 (支持rowspan和colspan)
    const origi_table: HTMLTableElement | null = content.querySelector('table'); if (!origi_table) return content;
    const origi_rows = origi_table.rows;
    const origi_rowCount: number = origi_rows.length;             // 最大行数 (算span范围扩展)
    let origi_colCount: number = 0;                               // 最大列数 (算span范围扩展)
    // TODO: 这里有bug: 如果第一行的spanRow是2，第2的col数又多出一个，这里会计少。如下面的列数是3，但第一行只能找到2
    // - r1c1
    //   - r1c2
    //   - r2c2
    //     - r2c3
    //     - r3c3
    // - r4c1
    //   - r4c2
    //   - r5c2
    for (let relRow = 0; relRow < origi_rowCount; relRow++) {
      let colCount = 0; // 此行的最大列数
      for (const cell of origi_rows[relRow].cells) {
        colCount += cell.colSpan || 1;
      }
      if (colCount > origi_colCount) {
        origi_colCount = colCount;
      }
    }

    // 1.2. 数据准备 - 旧表格解析到map
    // 创建一个二维数组来记录旧表格, size: [origi_rowCount][origi_colCount]
    // 要分析带span的表格，必须用到占位符才有解。`^` 和 `<` 都是占位符，不过目前不区分作用
    const map_table: (type_tableCell|null|"<"|"^")[][] = new Array(origi_rowCount).fill(null).map(() => new Array(origi_colCount).fill(null));
    for (let relRow = 0; relRow < origi_rowCount; relRow++) {
      for (let relCol = 0; relCol < origi_rows[relRow].cells.length; relCol++) {
        const cell: HTMLTableCellElement = origi_rows[relRow].cells[relCol];

        // 调整当前格位置
        const rowIndex = relRow;
        let colIndex = relCol;
        while(true) {
          if (colIndex >= map_table[rowIndex].length) { console.error("表格解析错误: colIndex超出范围", map_table, rowIndex, colIndex, relRow, relCol); return content; }
          if (!map_table[rowIndex][colIndex]) { break }         // 位置正确 (null)
          else colIndex++                                       // 继续找位置
        }
        // 填充下占位
        if (cell.rowSpan>1) {
          for (let i = 1; i < cell.rowSpan; i++) {
            if (rowIndex+i >= map_table.length) { break; }            // 允许范围溢出
            map_table[rowIndex+i][colIndex] = "^"
          }
        }
        // 填充右占位
        if (cell.colSpan>1) {
          for (let i = 1; i < cell.rowSpan; i++) {
            if (colIndex+i >= map_table[rowIndex].length) { break; }  // 允许范围溢出
            map_table[rowIndex][colIndex+i] = "<"
          }
        }
        // 填充本格。可能影响他格
        // 注意区分是程序填充 ^/< 和人为填充 ^/< 是有区别的，也可以区分得出来 // [!code]
        if (cell.rowSpan == 1 && cell.colSpan == 1 && cell.textContent == "^") {
          map_table[rowIndex][colIndex] = "^"
          for (let i=rowIndex-1; i>=0; i--) {
            const item = map_table[i][colIndex]
            if (!item) break
            if (item == "<") break
            if (item == "^") continue
            if (item.html.textContent == "<") break
            if (item.html.textContent != "^" || i==0) {
              item.rowSpan += 1
              break
            }
          }
        }
        else if (cell.rowSpan == 1 && cell.colSpan == 1 && cell.textContent == "<") {
          map_table[rowIndex][colIndex] = "<"
          for (let j=colIndex-1; j>=0; j--) {
            const item = map_table[rowIndex][j]
            if (!item) break
            if (item == "^") break
            if (item == "<") continue
            if (item.html.textContent == "^") break
            if (item.html.textContent != "<" || j==0) {
              item.colSpan += 1
              break
            }
          }
        }
        else {
          map_table[rowIndex][colIndex] = {
            html: cell,
            rowSpan: cell.rowSpan,
            colSpan: cell.colSpan,
            rowIndex: rowIndex,
            colIndex: colIndex,
          }
        }
      }
    }

    // 1.3. 数据准备 - map转置 // [!code]
    const map_table2 = map_table
    // let map_table2: (type_tableCell|null|"<"|"^")[][] = new Array(origi_colCount).fill(null).map(() => new Array(origi_rowCount).fill(null));
    // for (let i = 0; i < origi_rowCount; i++) {
    //   for (let j = 0; j < origi_colCount; j++) {
    //     let origi_cell = map_table[i][j]
    //     if (!origi_cell) continue;
    //     else if (origi_cell == "<") {
    //       map_table2[j][i] = "^"
    //     }
    //     else if (origi_cell == "^") {
    //       map_table2[j][i] = "<"
    //     }
    //     else {
    //       map_table2[j][i] = {
    //         html: origi_cell.html,
    //         rowSpan: origi_cell.colSpan || 1,
    //         colSpan: origi_cell.rowSpan || 1,
    //         rowIndex: origi_cell.colIndex,
    //         colIndex: origi_cell.rowIndex,
    //       }
    //     }
    //   }
    // }

    // 2. 准备表格元素
    const trans_table = document.createElement('table'); content.appendChild(trans_table); origi_table.classList.add("ab-transposition"); origi_table.classList.add("ab-table");
    origi_table.classList.forEach(className => { // 并应用原表格的样式
      trans_table.classList.add(className);
    });
    // const trans_header = document.createElement('thead'); trans_table.appendChild(trans_header); // 转置不支持表头
    const trans_body = document.createElement('tbody'); trans_table.appendChild(trans_body);

    // 3. 数据填充
    for (let i = 0; i < origi_rowCount; i++) { // [!code]
      const newRow = trans_body.insertRow();
      for (let j = 0; j < origi_colCount; j++) { // [!code]
        const cell = map_table2[i][j]
        if (!cell) continue;
        if (cell == "<" || cell == "^") continue;
        const newCell = newRow.insertCell();
        newCell.innerHTML = cell.html.innerHTML;
        newCell.rowSpan = cell.rowSpan;
        newCell.colSpan = cell.colSpan;
        newCell.setAttribute("rowIndex", String(cell.rowIndex));
        newCell.setAttribute("colIndex", String(cell.colIndex));
      }
    }

    origi_table.remove();
    return content;
  }
})

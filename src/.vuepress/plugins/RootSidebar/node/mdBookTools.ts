// 将md文本转为侧边栏结构
// 
// 转换后，link的值都是绝对路径
// TODO 暂不支持下划线
export function md2sidebar(mdStr: string): any[] {
  mdStr = mdStr.replace(/<!--[\s\S]*?-->/g, '') // 去除注释，仅支持 `<!---->` 未支持ob的 `%%` 注释，支持换行
  const lines = mdStr.split('\n')
  const result = []
  let map = [{indent: -10, obj: result}] // 每级目录所对应的对象，注意: 标题层级减10 [-9, -3]。正文减1
  for (let i=0; i<lines.length; i++) {
    // step1. 去除非匹配项, var: indent, content
    const line = lines[i]
    const match_list = line.match(/^(\s*)([-+*] )(.*)/)
    const match_heading = line.match(/^(#+)( )(.*)/)
    const match_p = line.match(/^(\[(.*)\]\((.*)\))/)
    const match_line = line.match(/^(---|===|\+\+\+)/)
    if (!match_list && !match_heading && !match_p) continue
    const line_indent = match_p ? -1: match_list ? match_list[1].length : (match_heading[1].length-10)
    const line_content = match_p ? match_p[1] : match_list ? match_list[3] : match_heading[3]

    // step2. isFolder
    let isFolder = false
    if (match_heading) isFolder = true // match_heading，必然为文件夹
    else {
      for (let j=i+1; j<lines.length; j++) {
        // 去除非匹配项, var: indent
        const line2 = lines[j]
        const match_list2 = line2.match(/^(\s*)([-+*] )(.*)/)
        const match_heading2 = line2.match(/^(#+)( )(.*)/)
        const match_p2 = line2.match(/^(\[(.*)\]\((.*)\))/)
        if (!match_list2 && !match_heading2 && !match_p2) continue
        const line_indent2 = match_p ? -1: match_list2 ? match_list2[1].length : (match_heading2[1].length-10)

        if (line_indent2 > line_indent) { isFolder = true; break } // 暂不支持tab/space混用
        else { isFolder = false; break }
      }
    }

    // step3. var: text、link
    const match_link = line_content.match(/\[(.*)\]\((.*)\)/)
    let text = ''; let link = '';
    if (!match_link) { // 这种情况是：文件夹不一定有文件夹页，文件也可能只是占位而不应可点击
      text = line_content; link = line_content;
    } else {
      text = match_link[1]; link = match_link[2];
    }
    // link的一些头、尾替换
    if (link.startsWith('./')) { link = link.replace(/^\.\//, '/') }
    else if (link.startsWith('/')) {}
    else { link = '/' + link }
    link = link.replace(/\.md$/, '.html')
    link = link.replace(/README\.html$/, '')

    // step4. var: sidebarItem
    let sidebarItem:any = {}
    if (!isFolder) {
      sidebarItem = {
        text: text,
        link: link
      }
    } else {
      sidebarItem = {
        collapsed: match_heading ? false : true,
        text: text,
        link: link,
        prefix: text+'/',
        children: match_link ? [
          { // 自动添加子项来表示文件夹页
            text: 'README',
            link: link
          }
        ] : []
      }
    }

    // step5. outside var: map、result
    while (true) {
      const map_end = map[map.length-1]
      if (line_indent <= map_end.indent) {
        map.pop()
        continue
      }
      else {
        map[map.length-1].obj.push(sidebarItem)
        if (isFolder) { map.push({indent: line_indent, obj: sidebarItem.children}) }
        break
      }
    }
  }

  return result
}

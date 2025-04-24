// 将md文本转为侧边栏结构
// TODO 暂不支持标题、下划线、非链接目录。标题应该是通过 (dir:) collapsible: false 来实现的
export function md2sidebar(mdStr: string): any[] {
  const lines = mdStr.split('\n')
  const result = []
  let map = [{indent: -1, obj: result}] // 每级目录所对应的对象
  for (let i=0; i<lines.length; i++) {
    // step1. 去除非匹配项
    const line = lines[i]
    const match = line.match(/(\s*)[-+*] (.*)/)
    if (!match) continue
    
    // step2. var: indent, isFolder
    const indent = match[1]
    let isFolder = false
    for (let j=i+1; j<lines.length; j++) {
      const line2 = lines[j]
      const match2 = line2.match(/(\s*)[-+*] (.*)/)
      if (!match2) continue
      const indent2 = match2[1]
      if (indent2.length > indent.length) { isFolder = true; break } // 暂不支持tab/space混用
      else { isFolder = false; break }
    }

    // step3. var: text、link
    const match2 = match[2].match(/\[(.*)\]\((.*)\)/)
    let text = ''; let link = '';
    if (!match2) {
      text = match[2]; link = match[2];
    } else {
      text = match2[1]; link = match2[2];
    }
    link = link.replace(/\.md$/, '.html')
    link = link.replace(/^\.\//, '/')
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
        text: text,
        link: link,
        prefix: text+'/',
        children: []
      }
    }

    // step5. outside var: map、result
    while (true) {
      const map_end = map[map.length-1]
      if (indent.length <= map_end.indent) {
        map.pop()
        continue
      }
      else {
        map[map.length-1].obj.push(sidebarItem)
        if (isFolder) { map.push({indent: indent.length, obj: sidebarItem.children}) }
        break
      }
    }
  }

  return result
}

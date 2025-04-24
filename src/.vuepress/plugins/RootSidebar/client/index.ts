/**
 * 侧边栏类型
 * 是vuepress-theme-hope计算的结构
 * 
 * string类型时: 相当于Object.text或.prefix
 * text: 优先使用h1的值，不是我预期的。我这个组件以文件名为主，不会用到
 * prfix: 仅一层前缀，并以`/`结尾
 * 
 * 由于不是我定义的，和组件本身不是很吻合。
 * 虽然不算太优雅，但我这里在Client端就不再去转化归一化了，避免目录树较大时影响性能
 */
export type SidebarType = string | {
  text: string,
  link: string,
} | {
  children: Array<SidebarType>,
  collapsible: boolean,
  prefix: string, // 通常是url/文件夹名
  text: string,   // 通常是title/h1名
}

/**
 * 侧边栏 - 局部文件夹类型
 * 
 * 由于为了节省性能，这里的做法是不将主结构进行处理，而是处理每一层时，生成一个对应的结构
 * 
 * 一个这个项，仅表示一个文件夹
 */
export type RootSidebarType = {
  deep_from_root: number,           // 相对于Root的深度
  deep_from_target: number,         // 相对于targetRoot的深度
  prefix_from_root: string,         // 文件夹的总前缀 (`/`结尾)
  prefix_form_last: string,         // 文件夹的当前前缀 (`/`结尾)
}

// 适配器，将SidebarType转换成RootSidebarType
export const adapt = (data: SidebarType): RootSidebarType => {
  return {
    deep_from_root: 0,
    deep_from_target: 0,
    prefix_from_root: "",
    prefix_form_last: ""
  }
}

import { sidebar } from 'vuepress-theme-hope';

export const sidebarConfig = sidebar(
  {
    // raw:
    // "/": "structure",

    "/MdNote_Public/": "structure", // 如果这里重复了，其实会有该问题：当你点击子菜单时，侧边栏会发生改变，变为更小的级别
      "/MdNote_Public/Guide": "structure",
      "/MdNote_Public/ProductDoc": "structure",
      "/MdNote_Public/01. 设计开发与数据生产": "structure",
      "/MdNote_Public/02. 十二门类与纯粹知识": "structure",
      "/MdNote_Public/03. 生活技能与生活生产": "structure",
    "/MdNote_Work/": "structure",
    "/MdNote_Private/": "structure",
  }
);

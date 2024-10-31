import { sidebar } from 'vuepress-theme-hope';

export const sidebarConfig = sidebar(
  {
    // raw:
    // "/": "structure",

    "/MdNote_Public/": "structure", // 如果这里重复了，其实会有该问题：当你点击子菜单时，侧边栏会发生改变，变为更小的级别
      "/MdNote_Public/Guide": "structure",
      "/MdNote_Public/ProductDoc": "structure",
      "/MdNote_Public/01.%20DesignAndDevelop": "structure",
      "/MdNote_Public/02.%20SubjectAndKnowledge": "structure",
      "/MdNote_Public/03.%20SkillAndProduction": "structure",
    "/MdNote_Work/": "structure",
    "/MdNote_Private/": "structure",
  }
);

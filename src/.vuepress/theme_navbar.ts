import { navbar } from 'vuepress-theme-hope';

export const navbarConfig = navbar([
  // raw:
  // {text: "/", link: "/"},

  {
    text: "公有文档",
    //link: "/MdNote_Public/",
    prefix: "/MdNote_Public/",
    children: [
      { text: "引导", link: "Guide/"},
      { text: "产品文档", link: "ProductDoc/"},
      { text: "设计开发与数据生产", link: "01.%20DesignAndDevelop/"},
      { text: "十二门类与纯粹知识", link: "02.%20SubjectAndKnowledge/"},
      { text: "生活技能与生活生产", link: "03.%20SkillAndProduction/"},
      { text: "全部", link: ""},
    ]
  },
  {
    text: "其他文档库",
    link: "/MdNote_Other/",
  },
  {
    text: "私有文档",
    link: "/MdNote_Private/",
  },
  {
    text: "特殊权限 (路径隐藏)",
    link: "/MdNote_Hide1/",
  },
  {
    text: "博客页 (路径隐藏)",
    link: "/MdNote_Blog1/",
  },
]);

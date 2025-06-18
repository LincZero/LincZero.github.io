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
      { text: "全部", link: "?deep=1"},
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
  {
    text: "我的其他网站",
    children: [
      { text: "数学库", link: "https://pkm-er.github.io/Pkmer-Math/" },
      {
        text: "AnyBlock",
        children: [
          { text: "AnyBlock 在线", link: "https://any-block.github.io/any-block/" },
          { text: "AnyBlock 文档", link: "https://lincdocs.github.io/AnyBlock/" },    
        ]
      },
      {
        text: "NodeFlow",
        children: [
          { text: "NodeFlow 在线", link: "https://linczero.github.io/obsidian-node-flow/" },
          { text: "NodeFlow 文档", link: "https://linczero.github.io/MdNote_Public/ProductDoc/Plugin/NodeFlow/docs/zh/" },
        ]
      },
      {
        text: "ChatView",
        children: [
          { text: "ChatView 在线", link: "https://linczero.github.io/obsidian-chat-view-qq/" },
          { text: "ChatView 文档", link: "https://linczero.github.io/MdNote_Public/ProductDoc/Plugin/Obsidian-Chat-View-QQ/" },
        ]
      },
      {
        text: "LincDocs",
        children: [
          { text: "目录", link: "https://lincdocs.github.io/" },
          { text: "公开笔记", link: "https://lincdocs.github.io/MdNote_Public/" }, // 内容重复
          // { text: "ComfyUI", link: "https://lincdocs.github.io/ComfyUI-Workflows-Linc/" }, // 内容重复
          // { text: "ComfyUI2", link: "https://lincdocs.github.io/Workflow/" }, // 内容重复
          { text: "更多...", link: "https://lincdocs.github.io/" },
        ]
      },
    ]
  }
]);

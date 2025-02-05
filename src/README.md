---
# 声明这是主页
layout: OldLayout
home: true
# 主导航
containerClass: home
icon: home
title: Home
bgImage: /svg_bg/07.svg
bgImageDark: /svg_bg/03.svg
bgImageStyle:
  background-attachment: fixed
heroText: Linc 的小站
tagline: |
  这不是什么文档，仅仅是一个自用个人笔记<br>
  仅记录学习与生活笔记，非面向用户，如果有说明不太好的地方欢迎issue
actions:
  - text: 公开文档
    icon: lightbulb
    link: ./MdNote_Public/
    type: primary

  - text: 产品文档
    icon: book
    link: ./MdNote_Public/ProductDoc/

  - text: 导航
    icon: signs-post
    link: ./MdNote_Public/Guide/?deep=1

  - text: 编程
    icon: code
    link: ./MdNote_Public/01.%20DesignAndDevelop/Develop/

  - text: 3D
    icon: box
    link: ./MdNote_Public/01.%20DesignAndDevelop/3D/

highlights:
  # 编程笔记 - 按语言划分
  - header: 笔记 - 按编程语言划分
    description: |
      注意编程笔记的分类优先级：工程 > 理论 > 语言，当你找不到想要的内容时，看看是否在其他的分类项当中。<br>
      例如："Qt"相关的就不会出现在C++中，"Android"相关的就不会出现在Java中
    #image: /assets/image/markdown.svg
    bgImage: /svg_bg/01.svg
    bgImageDark: /svg_bg/02.svg
    features:
      - title: C++
        icon: code
        #details: Check markdown links
        link: ./MdNote_Public/01. DesignAndDevelop/Develop/01. Language/C__/

      - title: C
        icon: code
        link: ./MdNote_Public/01. DesignAndDevelop/Develop/01. Language/C/

      - title: Python
        icon: code
        link: ./MdNote_Public/01. DesignAndDevelop/Develop/01. Language/Python/

      - title: TypeScript
        icon: code
        link: ./MdNote_Public/01. DesignAndDevelop/Develop/01. Language/TypeScript/

      - title: JavaScript
        icon: code
        link: ./MdNote_Public/01. DesignAndDevelop/Develop/01. Language/JavaScript/

      - title: Java
        icon: code
        link: ./MdNote_Public/01. DesignAndDevelop/Develop/01. Language/Java/

      - title: Rust
        icon: code
        link: ./MdNote_Public/01. DesignAndDevelop/Develop/01. Language/Rust/

      - title: Go
        icon: code
        link: ./MdNote_Public/01. DesignAndDevelop/Develop/01. Language/Go/

      - title: E语言
        icon: code
        link: ./MdNote_Public/01. DesignAndDevelop/Develop/01. Language/EProgram/

      - title: C#
        icon: code
        link: ./MdNote_Public/01. DesignAndDevelop/Develop/01. Language/C_/

  # 常用类别分支
  - header: 笔记 - 按工程类别划分
    #description: Customizable outlook with full a11y support.
    #image: /assets/image/ui.svg
    bgImage: /svg_bg/01.svg
    bgImageDark: /svg_bg/02.svg
    features:
      - title: 网络
        icon: code
        link: ./MdNote_Public/01. DesignAndDevelop/Develop/02. Theory/Computer/03. 计算机系统 - 专题或子系统的字典版/下层相关/Network/
        
      - title: SCAPP
        icon: code
        link: ./MdNote_Public/01. DesignAndDevelop/Develop/02. Theory/Computer/

      - title: Qt/PyQt
        icon: code
        #details: Check markdown links
        link: ./MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/Multi/QT（Cpp）/

      - title: 前端
        icon: code
        link: ./MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/Web/

      - title: Electron
        icon: code
        #details: Check markdown links
        link: ./MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/Multi/Electron（Web）/

      - title: Vue
        icon: code
        link: ./MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/Web/02. 前端框架/Vue/

      - title: Android
        icon: code
        link: ./MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/Android/  

      - title: 解析渲染
        icon: code
        link: ./MdNote_Public/01. DesignAndDevelop/Develop/02. Theory/Type/Doc/

      - title: 文档技巧
        icon: code
        link: ./MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Doc/

      - title: 数据库
        icon: code
        link: ./MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/Web/04. 后端/数据库/

      - title: 机器/深度学习
        icon: code
        link: ./MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Artificial_Intelligence/

      - title: 游戏引擎
        icon: code
        link: ./MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/SoftCode/Game/

copyright: true
footer: 自用，未经许可禁止转载任何内容 | Copyright © 2015-present LincZero
---

<br>

## 访问建议

本站推荐访问：(主站点，及主要导航)

- [公开文档](./MdNote_Public/)
- [产品文档](./MdNote_Public/ProductDoc/)
- [导航](./MdNote_Public/Guide/?deep=1)
- [编程](./MdNote_Public/01.%20DesignAndDevelop/Develop/)
- [3D](./MdNote_Public/01.%20DesignAndDevelop/3D/)

自链：(个人的其他站点、以及个人参与过代码贡献的站点)

- [LincDocs](https://lincdocs.github.io/)
  - [MdNote_Public](https://lincdocs.github.io/MdNote_Public/)
  - [obsidian-api-request (Agency)](https://lincdocs.github.io/obsidian-api-request/)
  - [Pkmer-Math (Agency)](https://lincdocs.github.io/Pkmer-Math/)
  - [Workflow (Comfyui)](https://lincdocs.github.io/Workflow/)
  - [AnyBlock](https://lincdocs.github.io/AnyBlock/)
  - [ComfyUI-Workflows-Linc](https://lincdocs.github.io/ComfyUI-Workflows-Linc/)
- Other Contribution
  - [Pkmer-Math](https://pkm-er.github.io/Pkmer-Math/)
  - [nolebase-integrations](https://nolebase-integrations.ayaka.io/)
  - [erduotong](https://blog.erduotong.com/)

## 个人实验场

- [AnyBlock实验场](https://lincdocs.github.io/AnyBlock/README.show.html)
- NodeFlow实验场, 见下

### comfyui

```nodeflow-comfyui
demo
```

### obsidian canvas

```nodeflow-obcanvas
demo
```

### list

```nodeflow-list
demo
```

### vueflow

```nodeflow-vueflow
demo
```

### item

```nodeflow-item
demo
```

### listitem

```nodeflow-listitem
demo
```

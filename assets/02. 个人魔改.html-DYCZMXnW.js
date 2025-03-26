import{_ as t,e as a,g as e,f as s,k as i,o as n}from"./app-MVqA2zh9.js";const r={};function h(p,l){return n(),a("div",null,l[0]||(l[0]=[e('<h1 id="个人魔改" tabindex="-1"><a class="header-anchor" href="#个人魔改"><span>个人魔改</span></a></h1><h2 id="魔改内容" tabindex="-1"><a class="header-anchor" href="#魔改内容"><span>魔改内容</span></a></h2><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3><h4 id="需要修改的内容" tabindex="-1"><a class="header-anchor" href="#需要修改的内容"><span>需要修改的内容</span></a></h4><ul><li>侧边栏部分，文件夹化 (主要得修改主题源码) <ul><li>✅ 点击另一处不自动折叠</li><li>✅ 目录名（任何时候都应当以文件名为主，而非h1的名字，哪怕是README.md）<br> 同时解决无h1时会产生bug的问题</li><li>使用懒加载，否则当路径上千时，打开页面贼慢 (可能较难，但不弄的话网差要10s+才能加载出页面)</li><li>根前缀指定 (用户可选择某个路径作为根路径，以指定的新的根路径而非绝对的根路径，重新显示侧边栏)</li><li>收缩再展开时保留原来的折叠状态</li><li>样式调整：展开箭头前置及优化</li></ul></li><li>TOC部分 <ul><li>✅ toc级别（默认配置，只到3级，应该全开）</li><li>toc的缩进与可折叠（只靠css和少量源码修改应该就能实现）</li></ul></li><li>正文 <ul><li>标题及列表的点击展开收缩</li><li>重写 ob 的 AnyBlock 插件</li><li>✅ 窄屏改宽屏</li></ul></li><li>通用样式类 <ul><li>✅ 层级着色（正文标题 + 目录大纲 + TOC大纲 + 路径导航）</li></ul></li></ul><h4 id="重写" tabindex="-1"><a class="header-anchor" href="#重写"><span>重写</span></a></h4><p>后来发现很多东西不符合自己的心意，而要改起来则太麻烦了，自己写一套获取能更方便</p><p>核心</p><ul><li><strong>开箱即用 + 可mini化 + 可扩展</strong> 的资源管理器 <ul><li>开箱即用：除了官方的开箱即用版本，还可以使用其他组合的开箱即用。可以方便地分享自己的开箱即用组合</li><li>可mini化：几乎所有模块都可以进行去除</li><li>可扩展：大量的可选模块与插件</li></ul></li><li>可以连同要设计的资源管理器一起设计和开发</li></ul><p>主干框架设计、可选子模块</p><ul><li>Valut生成模块 (索引生成) <ul><li>生成目录索引，首先会有一个主索引。<br> 然后可以通过插件，通过不同的规则预先或动态生成不同的目录索引（Valut筛选器），如：<br> 最高嵌套层数（静）、起始位置（动）、根据标签（静/动）、根据时间等其他元标签（静/动）</li></ul></li><li>前端展示模块 <ul><li>基于渲染后的html进行简易展示</li><li>通用资源管理器中的 缩略图、资源查看</li></ul></li><li>Valut筛选模块 <ul><li>依赖Valut，作用见上</li></ul></li><li>md渲染模块 <ul><li>md预渲染成html，暂时不需要实时渲染但后期可能会使用</li></ul></li><li>网页抓取模块</li><li>通过&quot;转载链接&quot;自动标记tag模块 <ul><li>自动标记的tag会进入&quot;autotags&quot;而非&quot;tags&quot;一栏</li></ul></li><li>AI分类模块</li><li>侧边栏与大纲栏的子模块</li></ul><p>所需技术栈：</p><ul><li>Vuepress源码解读</li><li><a href="https://www.bilibili.com/video/BV1dS4y1y7vd" target="_blank" rel="noopener noreferrer">Vue源码</a>、响应式源码、SFC、虚拟dom、diff算法</li><li><a href="https://www.liaoxuefeng.com/" target="_blank" rel="noopener noreferrer">廖雪峰</a></li><li>MVC模式、MVVM模式</li><li>选修：WASM / React</li></ul><h3 id="自动目录" tabindex="-1"><a class="header-anchor" href="#自动目录"><span>自动目录</span></a></h3><p>大佬们好，我现在想要自定义自动目录插件中的三项</p><p>首先看下这三是不是原来就支持的，或者是不需要改动源代码的前提下就能够实现的，不然可能需要修改下。修改流程这样？：</p><ol><li>fork https://github.com/vuepress-theme-hope/vuepress-theme-hope，是这个仓库吧</li><li>找到对应路径修改源码。应该是下面的位置吧，还没开始改 <ul><li><s>/packages/auto-catalog</s> (不是这个，很有误导性，一开始猜错了)</li><li>/packages/theme/src/share/options/layout/sidebar.ts，接口</li><li>/packages/theme/src/client/modules/sidebar/，实现</li></ul></li><li>然后……请求合并，如果感觉这需求比较小众没被合并的话。要么另外传npm，要么弄git依赖，在文档项目中依赖修改后的源码？</li></ol><h2 id="不通过npm-i-直接使用npm内容" tabindex="-1"><a class="header-anchor" href="#不通过npm-i-直接使用npm内容"><span>不通过npm i，直接使用npm内容</span></a></h2><p>首先我们找到npm地址：https://www.npmjs.com/package/vuepress-theme-hope?activeTab=code</p><p>其封装组件后的目录结构：</p>',20),s("div",{class:"ab-note drop-shadow"},[s("table",{class:"ab-table ab-list-table ab-table-folder"},[s("tbody",null,[s("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 0
         const tr_level = Number(tr.getAttribute("tr_level"))
         if (isNaN(tr_level)) return
         const tr_isfold = tr.getAttribute("is_fold")
         if (!tr_isfold) return
         let flag_do_fold = false  // 防止折叠最小层
         for (let j=i+1; j<l_tr.length; j++){
           const tr2 = l_tr[j]
           const tr_level2 = Number(tr2.getAttribute("tr_level"))
           if (isNaN(tr_level2)) break
           if (tr_level2<=tr_level) break
           (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
           flag_do_fold = true
         }
         if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[s("td",{rowspan:"1"},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[i("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),s("div",{class:"ab-list-table-witharrow markdown-rendered"},[s("div",null,[s("p",null,"lib")])])])]),s("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 1
         const tr_level = Number(tr.getAttribute("tr_level"))
         if (isNaN(tr_level)) return
         const tr_isfold = tr.getAttribute("is_fold")
         if (!tr_isfold) return
         let flag_do_fold = false  // 防止折叠最小层
         for (let j=i+1; j<l_tr.length; j++){
           const tr2 = l_tr[j]
           const tr_level2 = Number(tr2.getAttribute("tr_level"))
           if (isNaN(tr_level2)) break
           if (tr_level2<=tr_level) break
           (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
           flag_do_fold = true
         }
         if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[s("td",{rowspan:"1"},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[i("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),s("div",{class:"ab-list-table-witharrow markdown-rendered"},[s("div",null,[s("p",null,"bundle")])])])]),s("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 2
         const tr_level = Number(tr.getAttribute("tr_level"))
         if (isNaN(tr_level)) return
         const tr_isfold = tr.getAttribute("is_fold")
         if (!tr_isfold) return
         let flag_do_fold = false  // 防止折叠最小层
         for (let j=i+1; j<l_tr.length; j++){
           const tr2 = l_tr[j]
           const tr_level2 = Number(tr2.getAttribute("tr_level"))
           if (isNaN(tr_level2)) break
           if (tr_level2<=tr_level) break
           (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
           flag_do_fold = true
         }
         if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[s("td",{rowspan:"1"},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[i("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),s("div",{class:"ab-list-table-witharrow markdown-rendered"},[s("div",null,[s("p",null,"client")])])])]),s("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 3
         const tr_level = Number(tr.getAttribute("tr_level"))
         if (isNaN(tr_level)) return
         const tr_isfold = tr.getAttribute("is_fold")
         if (!tr_isfold) return
         let flag_do_fold = false  // 防止折叠最小层
         for (let j=i+1; j<l_tr.length; j++){
           const tr2 = l_tr[j]
           const tr_level2 = Number(tr2.getAttribute("tr_level"))
           if (isNaN(tr_level2)) break
           if (tr_level2<=tr_level) break
           (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
           flag_do_fold = true
         }
         if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[s("td",{rowspan:"1"},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[i("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),s("div",{class:"ab-list-table-witharrow markdown-rendered"},[s("div",null,[s("p",null,"node")])])])]),s("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 4
         const tr_level = Number(tr.getAttribute("tr_level"))
         if (isNaN(tr_level)) return
         const tr_isfold = tr.getAttribute("is_fold")
         if (!tr_isfold) return
         let flag_do_fold = false  // 防止折叠最小层
         for (let j=i+1; j<l_tr.length; j++){
           const tr2 = l_tr[j]
           const tr_level2 = Number(tr2.getAttribute("tr_level"))
           if (isNaN(tr_level2)) break
           if (tr_level2<=tr_level) break
           (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
           flag_do_fold = true
         }
         if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[s("td",{rowspan:"1"},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[i("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),s("div",{class:"ab-list-table-witharrow markdown-rendered"},[s("div",null,[s("p",null,"presets")])])])]),s("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 5
         const tr_level = Number(tr.getAttribute("tr_level"))
         if (isNaN(tr_level)) return
         const tr_isfold = tr.getAttribute("is_fold")
         if (!tr_isfold) return
         let flag_do_fold = false  // 防止折叠最小层
         for (let j=i+1; j<l_tr.length; j++){
           const tr2 = l_tr[j]
           const tr_level2 = Number(tr2.getAttribute("tr_level"))
           if (isNaN(tr_level2)) break
           if (tr_level2<=tr_level) break
           (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
           flag_do_fold = true
         }
         if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[s("td",{rowspan:"1"},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[i("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),s("div",{class:"ab-list-table-witharrow markdown-rendered"},[s("div",null,[s("p",null,"shared")])])])]),s("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 6
         const tr_level = Number(tr.getAttribute("tr_level"))
         if (isNaN(tr_level)) return
         const tr_isfold = tr.getAttribute("is_fold")
         if (!tr_isfold) return
         let flag_do_fold = false  // 防止折叠最小层
         for (let j=i+1; j<l_tr.length; j++){
           const tr2 = l_tr[j]
           const tr_level2 = Number(tr2.getAttribute("tr_level"))
           if (isNaN(tr_level2)) break
           if (tr_level2<=tr_level) break
           (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
           flag_do_fold = true
         }
         if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[s("td",{rowspan:"1"},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[i("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),s("div",{class:"ab-list-table-witharrow markdown-rendered"},[s("div",null,[s("p",null,"templates")])])])]),s("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 7
         const tr_level = Number(tr.getAttribute("tr_level"))
         if (isNaN(tr_level)) return
         const tr_isfold = tr.getAttribute("is_fold")
         if (!tr_isfold) return
         let flag_do_fold = false  // 防止折叠最小层
         for (let j=i+1; j<l_tr.length; j++){
           const tr2 = l_tr[j]
           const tr_level2 = Number(tr2.getAttribute("tr_level"))
           if (isNaN(tr_level2)) break
           if (tr_level2<=tr_level) break
           (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
           flag_do_fold = true
         }
         if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[s("td",{rowspan:"1"},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[i("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),s("div",{class:"ab-list-table-witharrow markdown-rendered"},[s("div",null,[s("p",null,"giscus")])])])]),s("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 8
         const tr_level = Number(tr.getAttribute("tr_level"))
         if (isNaN(tr_level)) return
         const tr_isfold = tr.getAttribute("is_fold")
         if (!tr_isfold) return
         let flag_do_fold = false  // 防止折叠最小层
         for (let j=i+1; j<l_tr.length; j++){
           const tr2 = l_tr[j]
           const tr_level2 = Number(tr2.getAttribute("tr_level"))
           if (isNaN(tr_level2)) break
           if (tr_level2<=tr_level) break
           (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
           flag_do_fold = true
         }
         if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[s("td",{rowspan:"1"},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[i("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),s("div",{class:"ab-list-table-witharrow markdown-rendered"},[s("div",null,[s("p",null,"palette")])])])]),s("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 9
         const tr_level = Number(tr.getAttribute("tr_level"))
         if (isNaN(tr_level)) return
         const tr_isfold = tr.getAttribute("is_fold")
         if (!tr_isfold) return
         let flag_do_fold = false  // 防止折叠最小层
         for (let j=i+1; j<l_tr.length; j++){
           const tr2 = l_tr[j]
           const tr_level2 = Number(tr2.getAttribute("tr_level"))
           if (isNaN(tr_level2)) break
           if (tr_level2<=tr_level) break
           (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
           flag_do_fold = true
         }
         if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[s("td",{rowspan:"1"},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[i("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),s("div",{class:"ab-list-table-witharrow markdown-rendered"},[s("div",null,[s("p",null,"socialMediaIcons")])])])]),s("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"html",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 10
         const tr_level = Number(tr.getAttribute("tr_level"))
         if (isNaN(tr_level)) return
         const tr_isfold = tr.getAttribute("is_fold")
         if (!tr_isfold) return
         let flag_do_fold = false  // 防止折叠最小层
         for (let j=i+1; j<l_tr.length; j++){
           const tr2 = l_tr[j]
           const tr_level2 = Number(tr2.getAttribute("tr_level"))
           if (isNaN(tr_level2)) break
           if (tr_level2<=tr_level) break
           (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
           flag_do_fold = true
         }
         if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[s("td",{rowspan:"1"},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[i("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),s("div",{class:"ab-list-table-witharrow markdown-rendered"},[s("div",null,[s("p",null,"index.build.html")])])])]),s("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"LICENSE",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 11
         const tr_level = Number(tr.getAttribute("tr_level"))
         if (isNaN(tr_level)) return
         const tr_isfold = tr.getAttribute("is_fold")
         if (!tr_isfold) return
         let flag_do_fold = false  // 防止折叠最小层
         for (let j=i+1; j<l_tr.length; j++){
           const tr2 = l_tr[j]
           const tr_level2 = Number(tr2.getAttribute("tr_level"))
           if (isNaN(tr_level2)) break
           if (tr_level2<=tr_level) break
           (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
           flag_do_fold = true
         }
         if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[s("td",{rowspan:"1"},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[i("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),s("div",{class:"ab-list-table-witharrow markdown-rendered"},[s("div",null,[s("p",null,"LICENSE")])])])]),s("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"md",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 12
         const tr_level = Number(tr.getAttribute("tr_level"))
         if (isNaN(tr_level)) return
         const tr_isfold = tr.getAttribute("is_fold")
         if (!tr_isfold) return
         let flag_do_fold = false  // 防止折叠最小层
         for (let j=i+1; j<l_tr.length; j++){
           const tr2 = l_tr[j]
           const tr_level2 = Number(tr2.getAttribute("tr_level"))
           if (isNaN(tr_level2)) break
           if (tr_level2<=tr_level) break
           (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
           flag_do_fold = true
         }
         if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[s("td",{rowspan:"1"},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[i("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),s("div",{class:"ab-list-table-witharrow markdown-rendered"},[s("div",null,[s("p",null,"README.md")])])])]),s("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:`json
`,onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 13
         const tr_level = Number(tr.getAttribute("tr_level"))
         if (isNaN(tr_level)) return
         const tr_isfold = tr.getAttribute("is_fold")
         if (!tr_isfold) return
         let flag_do_fold = false  // 防止折叠最小层
         for (let j=i+1; j<l_tr.length; j++){
           const tr2 = l_tr[j]
           const tr_level2 = Number(tr2.getAttribute("tr_level"))
           if (isNaN(tr_level2)) break
           if (tr_level2<=tr_level) break
           (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
           flag_do_fold = true
         }
         if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[s("td",{rowspan:"1"},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[i("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),s("div",{class:"ab-list-table-witharrow markdown-rendered"},[s("div",null,[s("p",null,"package.json")])])])])]),s("button",{class:"ab-table-fold",is_fold:"false"},"全部折叠/展开")])],-1),e(`<p>其packages.json：</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;dependencies&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;@vuepress/cli&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.0.0-beta.67&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;@vuepress/client&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.0.0-beta.67&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;@vuepress/core&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.0.0-beta.67&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;@vuepress/plugin-active-header-links&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.0.0-beta.67&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;@vuepress/plugin-container&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.0.0-beta.67&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;@vuepress/plugin-external-link-icon&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.0.0-beta.67&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;@vuepress/plugin-git&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.0.0-beta.67&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;@vuepress/plugin-nprogress&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.0.0-beta.67&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;@vuepress/plugin-prismjs&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.0.0-beta.67&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;@vuepress/plugin-theme-data&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.0.0-beta.67&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;@vuepress/shared&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.0.0-beta.67&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;@vuepress/utils&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.0.0-beta.67&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;@vueuse/core&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;^10.5.0&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;balloon-css&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;^1.2.0&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;bcrypt-ts&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;^4.0.1&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;cheerio&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;1.0.0-rc.12&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;chokidar&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;^3.5.3&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;gray-matter&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;^4.0.3&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;vue&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;^3.3.7&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;vue-router&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;^4.2.5&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;vuepress-plugin-auto-catalog&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.0.0-beta.242&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;vuepress-plugin-blog2&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.0.0-beta.242&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;vuepress-plugin-comment2&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.0.0-beta.242&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;vuepress-plugin-components&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.0.0-beta.242&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;vuepress-plugin-copy-code2&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.0.0-beta.242&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;vuepress-plugin-copyright2&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.0.0-beta.242&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;vuepress-plugin-feed2&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.0.0-beta.242&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;vuepress-plugin-md-enhance&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.0.0-beta.242&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;vuepress-plugin-photo-swipe&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.0.0-beta.242&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;vuepress-plugin-pwa2&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.0.0-beta.242&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;vuepress-plugin-reading-time2&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.0.0-beta.242&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;vuepress-plugin-rtl&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.0.0-beta.242&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;vuepress-plugin-sass-palette&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.0.0-beta.242&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;vuepress-plugin-seo2&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.0.0-beta.242&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;vuepress-plugin-sitemap2&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.0.0-beta.242&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;vuepress-shared&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.0.0-beta.242&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">},</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用submodule方便修改源码-旧版方法" tabindex="-1"><a class="header-anchor" href="#使用submodule方便修改源码-旧版方法"><span>使用submodule方便修改源码 - 旧版方法</span></a></h3><p>初始化流程</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 初始化</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /h/Git/Private/LincZero-Vuepress</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> submodule</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git@github.com:LincZero/vuepress-theme-hope.git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> lib/vuepress-theme-hope</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 添加子项目</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># $ git submodule init   # 初始化子项目</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># $ git submodule update # 更新子项目</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># $ git submodule status # 检查子项目</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 构建子项目</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> lib/vuepress-theme-hope</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> i</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 此时，各模块会生成一个 lib 文件夹</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> packages</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">heme</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\l</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ib</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ..</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ode_modules</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">uepress-theme-hope</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\l</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ib</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 复制lib文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ../../</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 替换依赖</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> uninstall</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> vuepress-theme-hope</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # (之前用npm仓库的vuepress主题的话)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 此时 &quot;vuepress-theme-hope&quot;: &quot;2.0.0-beta.237&quot; 这一行没了，我们需要将其替换成新的本地路径：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;devDependencies&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # &quot;vuepress-theme-hope&quot;: &quot;2.0.0-beta.242&quot; # 原</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">	&quot;vuepress-theme-hope&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;file:lib/vuepress-theme-hope/packages/theme&quot;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 修改成这样</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	# &quot;vuepress-theme-hope&quot;: &quot;workspace:*&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> i</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 运行</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docs:dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 然后这里会出现一个错误，说找不到 /node_modules/vuepress-theme-hope/lib/node/index.js (lib文件夹没有)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 我查看了一下我的 ./lib/vuepress-theme-hope/packages/theme 路径，里面是有lib文件夹的</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 然后我将lib文件夹复制到 /node_modules/vuepress-theme-hope/ 重新运行 pnpm docs:dev 就能成功运行了</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改流程（这里最好在VSCode里备两个控制台，避免来回跳转）</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 修改主题子项目代码后</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># /lib/vuepress-theme-hope</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> packages</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">heme</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\l</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ib</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">..</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ode_modules</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">uepress-theme-hope</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># /</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docs:dev</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="流程改良版-pnpm-workspace管理monorepo" tabindex="-1"><a class="header-anchor" href="#流程改良版-pnpm-workspace管理monorepo"><span>流程改良版 - pnpm-workspace管理monorepo</span></a></h3><p>需要加一个 pnpm-workspace.yaml 文件，内容加上：</p><div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">packages</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">packages/*</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">lib/vuepress-theme-hope/demo/*</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">lib/vuepress-theme-hope/docs/*</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">lib/vuepress-theme-hope/docs-shared/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">lib/vuepress-theme-hope/packages/*</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后修改 package.json</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;devDependencies&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	&quot;vuepress-theme-hope&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;workspace:*&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改后更新，这里可以创建三个命令行</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># cd \\lib\\vuepress-theme-hope\\packages\\theme 在修改的模块里运行就行了，不需要在 \\lib\\vuepress-theme-hope</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 这一句就够了，不需要在主项目重新执行 pnpm docs:dev，会自动更新的</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="流程再改良-使用组件替换-由主题提供的功能" tabindex="-1"><a class="header-anchor" href="#流程再改良-使用组件替换-由主题提供的功能"><span>流程再改良 - 使用组件替换（由主题提供的功能）</span></a></h3><p>（但是我修改的地方好像超出了sidebar范围，不知道还能不能用这个）</p><p>详见：https://theme-hope.vuejs.press/zh/guide/advanced/replace.html#%E6%9B%BF%E6%8D%A2%E7%BB%84%E4%BB%B6%E7%9A%84%E6%96%B9%E5%BC%8F</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// .vuepress/config.ts</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">getDirname</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;@vuepress/utils&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">defineUserConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress-theme-hope&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> __dirname</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> getDirname</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">meta</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> defineUserConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  theme</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 主题选项</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">custom</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ),</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  alias</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 你可以在这里将别名定向到自己的组件</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 比如这里我们将主题的主页组件改为用户 .vuepress/components 下的 HomePage.vue</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;@theme-hope/components/HomePage&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">resolve</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      __dirname</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;./components/HomePage.vue&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    ),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以支持的别名如下：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 具体查链接</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">...</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 组件:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">@theme-hope/modules/sidebar/components/Sidebar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 侧边栏</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">@theme-hope/modules/sidebar/components/SidebarChild</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 侧边栏链接子项</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">@theme-hope/modules/sidebar/components/SidebarGroup</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 侧边栏分组链接</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">@theme-hope/modules/sidebar/components/SidebarLinks</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 侧边栏链接</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 杂项:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">@theme-hope/modules/sidebar/composables/index</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 侧边栏可组合</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> API</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">@theme-hope/modules/sidebar/utils/index</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 侧边栏通用函数</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但还是需要子项目，否则虽然能用但有bug （import scss时失效）</p><h3 id="最终版" tabindex="-1"><a class="header-anchor" href="#最终版"><span>最终版</span></a></h3><ol><li>配置：workspace + 子项目</li><li>修改：别名？</li><li>运行：子项目编译 + 父项目编译</li><li>后续修改：修改替换组件 + 孙子项目编译 + 父项目编译</li></ol><h2 id="设置修改项" tabindex="-1"><a class="header-anchor" href="#设置修改项"><span>设置修改项</span></a></h2><h2 id="源码修改项" tabindex="-1"><a class="header-anchor" href="#源码修改项"><span>源码修改项</span></a></h2>`,25)]))}const d=t(r,[["render",h],["__file","02. 个人魔改.html.vue"]]),o=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Type/Doc/MarkdwonAbout/01.%20Soft%20And%20Frame/VuePress2%20(Vue3)/03.%20%E4%B8%BB%E9%A2%98%E6%89%A9%E5%B1%95/Hope%E4%B8%BB%E9%A2%98/09.%20Private/02.%20%E4%B8%AA%E4%BA%BA%E9%AD%94%E6%94%B9.html","title":"个人魔改","lang":"zh-CN","frontmatter":{"description":"个人魔改 魔改内容 总结 需要修改的内容 侧边栏部分，文件夹化 (主要得修改主题源码) ✅ 点击另一处不自动折叠 ✅ 目录名（任何时候都应当以文件名为主，而非h1的名字，哪怕是README.md） 同时解决无h1时会产生bug的问题 使用懒加载，否则当路径上千时，打开页面贼慢 (可能较难，但不弄的话网差要10s+才能加载出页面) 根前缀指定 (用户可选...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Type/Doc/MarkdwonAbout/01.%20Soft%20And%20Frame/VuePress2%20(Vue3)/03.%20%E4%B8%BB%E9%A2%98%E6%89%A9%E5%B1%95/Hope%E4%B8%BB%E9%A2%98/09.%20Private/02.%20%E4%B8%AA%E4%BA%BA%E9%AD%94%E6%94%B9.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"个人魔改"}],["meta",{"property":"og:description","content":"个人魔改 魔改内容 总结 需要修改的内容 侧边栏部分，文件夹化 (主要得修改主题源码) ✅ 点击另一处不自动折叠 ✅ 目录名（任何时候都应当以文件名为主，而非h1的名字，哪怕是README.md） 同时解决无h1时会产生bug的问题 使用懒加载，否则当路径上千时，打开页面贼慢 (可能较难，但不弄的话网差要10s+才能加载出页面) 根前缀指定 (用户可选..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"个人魔改\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"git":{},"readingTime":{"minutes":6.17,"words":1852},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Doc/MarkdwonAbout/01. Soft And Frame/VuePress2 (Vue3)/03. 主题扩展/Hope主题/09. Private/02. 个人魔改.md","excerpt":"\\n<h2>魔改内容</h2>\\n<h3>总结</h3>\\n<h4>需要修改的内容</h4>\\n<ul>\\n<li>侧边栏部分，文件夹化 (主要得修改主题源码)\\n<ul>\\n<li>✅ 点击另一处不自动折叠</li>\\n<li>✅ 目录名（任何时候都应当以文件名为主，而非h1的名字，哪怕是README.md）<br>\\n同时解决无h1时会产生bug的问题</li>\\n<li>使用懒加载，否则当路径上千时，打开页面贼慢 (可能较难，但不弄的话网差要10s+才能加载出页面)</li>\\n<li>根前缀指定 (用户可选择某个路径作为根路径，以指定的新的根路径而非绝对的根路径，重新显示侧边栏)</li>\\n<li>收缩再展开时保留原来的折叠状态</li>\\n<li>样式调整：展开箭头前置及优化</li>\\n</ul>\\n</li>\\n<li>TOC部分\\n<ul>\\n<li>✅ toc级别（默认配置，只到3级，应该全开）</li>\\n<li>toc的缩进与可折叠（只靠css和少量源码修改应该就能实现）</li>\\n</ul>\\n</li>\\n<li>正文\\n<ul>\\n<li>标题及列表的点击展开收缩</li>\\n<li>重写 ob 的 AnyBlock 插件</li>\\n<li>✅ 窄屏改宽屏</li>\\n</ul>\\n</li>\\n<li>通用样式类\\n<ul>\\n<li>✅ 层级着色（正文标题 + 目录大纲 + TOC大纲 + 路径导航）</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Doc/MarkdwonAbout/01. Soft And Frame/VuePress2 (Vue3)/03. 主题扩展/Hope主题/09. Private/02. 个人魔改.md","value":{"title":"02. 个人魔改","path":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Doc/MarkdwonAbout/01. Soft And Frame/VuePress2 (Vue3)/03. 主题扩展/Hope主题/09. Private/02. 个人魔改.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{d as comp,o as data};

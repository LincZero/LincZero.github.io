import{_ as r,e as n,g as e,f as t,o as s}from"./app-KOVNTMHG.js";const o={};function i(a,l){return s(),n("div",null,l[0]||(l[0]=[e('<h1 id="goldenlayout" tabindex="-1"><a class="header-anchor" href="#goldenlayout"><span>GoldenLayout</span></a></h1><p>这个我23年用过，挺好用的。现在25年又需要用，再了下，也到v2版本了。顺便在用的时候做做笔记</p><p>不过就是两年没更新</p><ul><li>参考 <ul><li>repo: https://github.com/golden-layout/golden-layout</li><li>website: https://golden-layout.github.io/golden-layout/</li><li>oldWebsite (v1): http://golden-layout.com/</li><li>demo online: https://codepen.io/pbklink/pen/dyWJNNm</li></ul></li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> golden-layout</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><p>主要还是使用v1文档的demo和docs，v2的说明很少的</p><h2 id="v1文档" tabindex="-1"><a class="header-anchor" href="#v1文档"><span>V1文档</span></a></h2>',9),t("div",{class:"ab-note drop-shadow"},[t("table",{class:"ab-table ab-list-table"},[t("tbody",null,[t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"Download   ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Download")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"下载")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"com/examples/)      ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("a",{href:"http://golden-layout.com/examples/",target:"_blank",rel:"noopener noreferrer"},"Demo")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"示例 (建议用这个来学习)")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"com/tutorials/) ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("a",{href:"http://golden-layout.com/tutorials/",target:"_blank",rel:"noopener noreferrer"},"Tutorials")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"教程")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"com/docs/)       ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("a",{href:"http://golden-layout.com/docs/",target:"_blank",rel:"noopener noreferrer"},"Docs")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"文档")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"Faq        ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Faq")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"常见问题")])])])])]),t("button",{class:"ab-table-fold",is_fold:"false"},"全部折叠/展开")])],-1),t("h3",{id:"demo",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#demo"},[t("span",null,"Demo")])],-1),t("div",{class:"ab-note drop-shadow"},[t("table",{class:"ab-table ab-list-table"},[t("tbody",null,[t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"com/examples/)      ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("a",{href:"http://golden-layout.com/examples/",target:"_blank",rel:"noopener noreferrer"},"Demo")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"示例 (建议用这个来学习)")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"主要",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"主要")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"row          ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"row")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"行")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"column       ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"column")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"列")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"stack        ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"stack")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"堆栈")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"saving state ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"saving state")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"保存状态")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"主题",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"主题")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"简单的黑暗主题",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"简单的黑暗主题")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"简单的明亮主题",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"简单的明亮主题")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"配置",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"配置")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"黄金螺旋",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"黄金螺旋")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"同步布局",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"同步布局")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"嵌套堆栈",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"嵌套堆栈")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"添加项目",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"添加项目")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"通过拖动",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 14
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"通过拖动")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"通过选择",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 15
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"通过选择")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"到元素",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 16
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"到元素")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"自定义功能",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 17
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"自定义功能")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"扩展标头",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 18
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"扩展标头")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"扩展选项卡",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 19
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"扩展选项卡")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"变成重新订购1,2",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 20
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"变成重新订购1,2")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"禁用标题",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 21
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"禁用标题")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"有条件的关闭",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 22
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"有条件的关闭")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"自定义拆分器",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 23
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"自定义拆分器")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"配置的CSS类",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 24
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"配置的CSS类")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"面板滚动",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 25
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"面板滚动")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"自定义工具提示",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 26
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"自定义工具提示")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"一体化",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 27
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"一体化")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"简单的ReactJS示例",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 28
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"简单的ReactJS示例")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"复杂的ReactJS示例",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 29
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"复杂的ReactJS示例")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"Highcharts和YQL",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 30
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Highcharts和YQL")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"Slickgrid",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 31
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Slickgrid")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"Angular",onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 32
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Angular")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:`Webix
`,onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 33
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Webix")])])])])]),t("button",{class:"ab-table-fold",is_fold:"false"},"全部折叠/展开")])],-1),t("h3",{id:"tutotials",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#tutotials"},[t("span",null,"Tutotials")])],-1),t("div",{class:"ab-note drop-shadow"},[t("table",{class:"ab-table ab-list-table"},[t("tbody",null,[t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"com/tutorials/) ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("a",{href:"http://golden-layout.com/tutorials/",target:"_blank",rel:"noopener noreferrer"},"Tutorials")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"教程")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"Goldenlayout",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Goldenlayout")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"入门",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"入门")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"入门ReactJs",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"入门ReactJs")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"保存状态",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"保存状态")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"添加项目",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"添加项目")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"标题控件",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"标题控件")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"弹出式",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"弹出式")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"扩展选项卡",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"扩展选项卡")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"使用...")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"requirejs",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"requirejs")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"Angular (简单)",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Angular (简单)")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"Angular (复杂)",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Angular (复杂)")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"HighCharts",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"HighCharts")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:`Slickgrid
`,onclick:`
         const tr = this
         const l_tr = tr.parentNode.querySelectorAll("tr")
         const i = 14
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Slickgrid")])])])])]),t("button",{class:"ab-table-fold",is_fold:"false"},"全部折叠/展开")])],-1),t("h3",{id:"docs",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#docs"},[t("span",null,"Docs")])],-1),t("div",{class:"ab-note drop-shadow"},[t("table",{class:"ab-table ab-list-table"},[t("tbody",null,[t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"com/docs/)       ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("a",{href:"http://golden-layout.com/docs/",target:"_blank",rel:"noopener noreferrer"},"Docs")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"文档")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"配置",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"配置")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"Configuration      ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Configuration")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"一般配置")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"Item Configuration ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Item Configuration")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"项目配置。组件、行、列和堆栈配置")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"API",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"API")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"html)      ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("a",{href:"http://golden-layout.com/docs/GoldenLayout.html",target:"_blank",rel:"noopener noreferrer"},"GoldenLayout")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"主要的布局实例")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"ContentItem Item   ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"ContentItem Item")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"组件、行、列和堆栈")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"Container          ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Container")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"容器")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"BrowserWindow      ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"BrowserWindow")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"浏览器")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"Header             ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Header")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"标题")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"Tab                ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Tab")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"选项卡")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"EventEmitter       ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"EventEmitter")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"GoldenLayou中每个对象都能发出事件，这是API")])])])])]),t("button",{class:"ab-table-fold",is_fold:"false"},"全部折叠/展开")])],-1),e(`<h2 id="个人备注" tabindex="-1"><a class="header-anchor" href="#个人备注"><span>个人备注</span></a></h2><p>其原理和做法，GoldenLayout 和 VueFlow 都是很类似的。都通过具名插槽注册组件，然后在生成对应的布局，最后把注册的组件按名字填入这些布局当中</p><p>对应的纯js写法也行，类似这样：</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// http://golden-layout.com/examples/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">myLayout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">registerComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">( </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;example&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">( </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">container</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  container</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getElement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">( </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;&lt;h2&gt;&#39;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">text</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;&lt;/h2&gt;&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const _=r(o,[["render",i],["__file","GoldenLayout.html.vue"]]),f=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Platform/Web/03.%20%E5%89%8D%E7%AB%AF%E7%BB%84%E4%BB%B6/%E7%BB%84%E4%BB%B6%E5%BA%93/GoldenLayout/GoldenLayout.html","title":"GoldenLayout","lang":"zh-CN","frontmatter":{"create_time":"2025-02-11T00:00:00.000Z","Author":"LincZero","description":"GoldenLayout 这个我23年用过，挺好用的。现在25年又需要用，再了下，也到v2版本了。顺便在用的时候做做笔记 不过就是两年没更新 参考 repo: https://github.com/golden-layout/golden-layout website: https://golden-layout.github.io/golden-la...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Platform/Web/03.%20%E5%89%8D%E7%AB%AF%E7%BB%84%E4%BB%B6/%E7%BB%84%E4%BB%B6%E5%BA%93/GoldenLayout/GoldenLayout.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"GoldenLayout"}],["meta",{"property":"og:description","content":"GoldenLayout 这个我23年用过，挺好用的。现在25年又需要用，再了下，也到v2版本了。顺便在用的时候做做笔记 不过就是两年没更新 参考 repo: https://github.com/golden-layout/golden-layout website: https://golden-layout.github.io/golden-la..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"GoldenLayout\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"git":{},"readingTime":{"minutes":1.69,"words":508},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/Web/03. 前端组件/组件库/GoldenLayout/GoldenLayout.md","excerpt":"\\n<p>这个我23年用过，挺好用的。现在25年又需要用，再了下，也到v2版本了。顺便在用的时候做做笔记</p>\\n<p>不过就是两年没更新</p>\\n<ul>\\n<li>参考\\n<ul>\\n<li>repo: https://github.com/golden-layout/golden-layout</li>\\n<li>website: https://golden-layout.github.io/golden-layout/</li>\\n<li>oldWebsite (v1): http://golden-layout.com/</li>\\n<li>demo online: https://codepen.io/pbklink/pen/dyWJNNm</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/Web/03. 前端组件/组件库/GoldenLayout/GoldenLayout.md","value":{"title":"GoldenLayout","path":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/Web/03. 前端组件/组件库/GoldenLayout/GoldenLayout.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{_ as comp,f as data};

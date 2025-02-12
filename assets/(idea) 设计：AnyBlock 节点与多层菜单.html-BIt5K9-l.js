import{_ as i,c as n,e as s,a as l,g as t,o as a}from"./app-DnpufS1x.js";const r={};function o(d,e){return a(),n("div",null,e[0]||(e[0]=[s('<h1 id="idea-设计-anyblock-节点与多层菜单" tabindex="-1"><a class="header-anchor" href="#idea-设计-anyblock-节点与多层菜单"><span>(idea) 设计：AnyBlock 节点与多层菜单</span></a></h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h3><p>一是表单、二是节点转用表单</p><h3 id="对比" tabindex="-1"><a class="header-anchor" href="#对比"><span>对比</span></a></h3><ul><li>json类型 <ul><li>类型(8): Number、String、Boolean、Array/Object、null、Value(any)、Whitespace</li><li>但最后两种没怎么见过，只适配6种应该也行</li></ul></li><li>请求表单 - json <ul><li>类型(8)：string、integer/number、boolean、array <strong>/object、null/any</strong></li></ul></li><li>请求表单 - params <ul><li>类型(6): string、integer/number、boolean、array、<strong>file</strong></li></ul></li><li>请求表单 - 表单实体 <ul><li>基本同上，但输入框类型还分：数字类型(是否密码)/文本单多行属性/约束等等</li></ul></li><li>节点表单类型 <ul><li>新增节点输入、节点输出类型 (特点：允许给一个字符串作为二次类型、通常没有Key名字，取之替代的是二次类型名)</li></ul></li><li>简化 - Schema码类型 <ul><li>删除了嵌套功能，节点类型删除Object/Array</li><li>删除了约束 (范围、必填等)</li><li>主要属性：&quot;type&quot;、&quot;default&quot;</li></ul></li></ul><h3 id="相似产品" tabindex="-1"><a class="header-anchor" href="#相似产品"><span>相似产品</span></a></h3><p>我记得 plantuml 有一个东西可以用于 UI 页面的绘制，甚至能着色、绘制按钮、显示菜单的展开状态等</p><p>但我这里并不需要，更需要的是稳定的格式</p><h3 id="anyblock-用-card-dir-模拟节点" tabindex="-1"><a class="header-anchor" href="#anyblock-用-card-dir-模拟节点"><span>AnyBlock 用 card+dir 模拟节点</span></a></h3><p>之前是用 card + dir 来模拟节点，例如：</p>',11),l("div",{class:"ab-note drop-shadow"},[l("div",{class:"ab-items ab-card ab-lay-vfall ab-col2"},[l("div",{class:"ab-items-item"},[l("div",{class:"ab-items-title markdown-rendered"},[l("div",null,[l("p",null,"Load Checkpoint")])]),l("div",{class:"ab-items-content markdown-rendered"},[l("div",null,[l("p",null,"中文：Checkpoint加载器(简易) 作用：加载扩散模型"),l("ul",null,[l("li",null,"Checkpoint名称: 加载大模型"),l("li",null,"(O) 模型"),l("li",null,"(O) CLIP"),l("li",null,"(O) VAE")])])])]),l("div",{class:"ab-items-item"},[l("div",{class:"ab-items-title markdown-rendered"},[l("div",null,[l("p",null,"CLIP Text Encode (Prompt)")])]),l("div",{class:"ab-items-content markdown-rendered"},[l("div",null,[l("p",null,"中文：CLIP文本编码器 (提示词) (正面) 作用：CLIP (ContrastiveLanguageImagePretraining) 理解输入文字的意思"),l("ul",null,[l("li",null,"(I) CLIO"),l("li",null,"文本"),l("li",null,"(O) 条件")])])])]),l("div",{class:"ab-items-item"},[l("div",{class:"ab-items-title markdown-rendered"},[l("div",null,[l("p",null,"CLIP Text Encode (Prompt)")])]),l("div",{class:"ab-items-content markdown-rendered"},[l("div",null,[l("p",null,"中文：CLIP文本编码器 (提示词) (负面)"),l("ul",null,[l("li",null,"(I) CLIO"),l("li",null,"文本"),l("li",null,"(O) 条件")])])])]),l("div",{class:"ab-items-item"},[l("div",{class:"ab-items-title markdown-rendered"},[l("div",null,[l("p",null,"Empty Latent Image")])]),l("div",{class:"ab-items-content markdown-rendered"},[l("div",null,[l("p",null,"中文：空Laten 作用：潜空间，内部流程中的图像格式 (例如图生图时，先VAE编码转化为Laten数据，然后处理完再解码回图像)，可以用于设置图片大小"),l("ul",null,[l("li",null,"宽度"),l("li",null,"高度"),l("li",null,"批次大小")])])])]),l("div",{class:"ab-items-item"},[l("div",{class:"ab-items-title markdown-rendered"},[l("div",null,[l("p",null,"KSampler")])]),l("div",{class:"ab-items-content markdown-rendered"},[l("div",null,[l("p",null,"中文：K采样器"),l("div",{class:"ab-note drop-shadow"},[l("button",{class:"ab-table-fold",is_fold:"false"},"全部折叠/展开"),l("table",{class:"ab-table ab-list-table ab-table-folder"},[l("tbody",null,[l("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"(I) 模型",onclick:`
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
        `},[l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[t("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"(I) 模型")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"(I) 正面条件",onclick:`
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
        `},[l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[t("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"(I) 正面条件")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"(I) 负面条件",onclick:`
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
        `},[l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[t("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"(I) 负面条件")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"(I) Latent",onclick:`
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
        `},[l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[t("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"(I) Latent")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"seed        ",onclick:`
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
        `},[l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[t("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"seed")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"种子")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"fixed     ",onclick:`
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
        `},[l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[t("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"fixed")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"固定")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"increment ",onclick:`
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
        `},[l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[t("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"increment")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"生成后自增")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"decrement ",onclick:`
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
        `},[l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[t("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"decrement")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"生成后自减")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"randomize ",onclick:`
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
        `},[l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[t("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"randomize")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"随机")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"control_after_generate ",onclick:`
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
        `},[l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[t("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"control_after_generate")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"运行后操作")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"steps 步数",onclick:`
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
        `},[l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[t("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"steps 步数")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"CFG",onclick:`
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
        `},[l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[t("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"CFG")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"sampler_name",onclick:`
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
        `},[l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[t("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"sampler_name")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"采样器,采样方法")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"scheduler   ",onclick:`
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
        `},[l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[t("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"scheduler")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"调度器")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"denoise     ",onclick:`
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
        `},[l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[t("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"denoise")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"降噪")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:`(O) Latent
`,onclick:`
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
        `},[l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[t("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"(O) Latent")])])])])])])])])])]),l("div",{class:"ab-items-item"},[l("div",{class:"ab-items-title markdown-rendered"},[l("div",null,[l("p",null,"VAE Decode")])]),l("div",{class:"ab-items-content markdown-rendered"},[l("div",null,[l("p",null,"中文：VAE (变分自编码器) 解码器，用于将 Latent 格式转 Images 格式"),l("ul",null,[l("li",null,"I samples"),l("li",null,"I vae"),l("li",null,"O Image")])])])]),l("div",{class:"ab-items-item"},[l("div",{class:"ab-items-title markdown-rendered"},[l("div",null,[l("p",null,"Save Image")])]),l("div",{class:"ab-items-content markdown-rendered"},[l("div",null,[l("p",null,"中文：图片保存"),l("ul",null,[l("li",null,"I images"),l("li",null,"filename_prefix")])])])])])],-1),s(`<h2 id="设计方案" tabindex="-1"><a class="header-anchor" href="#设计方案"><span>设计方案</span></a></h2><h3 id="杂记" tabindex="-1"><a class="header-anchor" href="#杂记"><span>杂记</span></a></h3><p>新语法：card要不还是表示不变吧</p><p>然后里面的内容修改：</p><p>建议声明顺序：先O再I</p><p>每个表单项的属性：</p><ul><li>类型 &amp; <s>约束</s>、默认值、描述</li></ul><p>感觉基于table要比基于dir容易理解……毕竟其实不需要dir的嵌套功能</p><ul><li>优点： <ul><li>非json化，易写 (底层还是转json)</li><li>可以非列表，而是表格选择器</li><li>其实在像 apifox 这种schema可视化定义软件中，呈现的也是表格（默认这个表格是没约束条件的，约束条件有一个单独的展开面板）</li></ul></li><li>缺点 <ul><li>适用于不可嵌套的结果，例如表单</li></ul></li></ul><div class="ab-note drop-shadow"><div class="ab-items ab-card ab-lay-vfall ab-col2"><div class="ab-items-item"><div class="ab-items-title markdown-rendered"><div><p>KSampler</p></div></div><div class="ab-items-content markdown-rendered"><div><p>中文：K采样器</p><div class="ab-note drop-shadow"><div class="markdown-rendered"><div><ul><li>&lt; name | description | type | default</li></ul></div></div></div></div></div></div></div></div><h3 id="类型问题" tabindex="-1"><a class="header-anchor" href="#类型问题"><span>类型问题</span></a></h3><p>类型上，我们总体使用（请求表单 - params）。“表格简化” 中主要是apifox-params的界面。</p><p>但是需要注意那个无法生成 json-schema，我们一般还是要在 json 页面进行节点的定义。</p><p>先复习一下：</p><ul><li>请求表单 - json <ul><li>类型(8)：string、integer/number、boolean、array <strong>/object、null/any</strong></li></ul></li><li>请求表单 - params <ul><li>类型(6): string、integer/number、boolean、array、<strong>file</strong></li></ul></li></ul><p>如何表示节点的IO类型？由于 “请求表单 - params” 是没有object/null/any类型的，但json定义中却有，我们用object来表示节点输入类型、用null来表示节点输出类型 (<strong>但这里属于是无理定义了</strong>)</p><h3 id="schema-demo" tabindex="-1"><a class="header-anchor" href="#schema-demo"><span>Schema Demo</span></a></h3><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;object&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;properties&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Latent&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;model&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;description&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;模型&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;positive&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;description&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;正面条件&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;negative&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;description&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;负面条件&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Latent_image&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;description&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;潜空间&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;seed&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;description&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;种子&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;control_after_generate&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;description&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;运行后操作&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;steps&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;description&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;步数&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;CFG&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;sampler_name&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;description&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;采样器,采样方法&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;scheduler&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;description&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;调度器&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;denoise&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;description&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;降噪&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="需要实现接口" tabindex="-1"><a class="header-anchor" href="#需要实现接口"><span>需要实现接口</span></a></h3><ol><li>表格转Schema</li><li>Schema生成表单</li><li>扩展：节点的 (I/O) Flag</li></ol>`,20)]))}const p=i(r,[["render",o],["__file","(idea) 设计：AnyBlock 节点与多层菜单.html.vue"]]),h=JSON.parse('{"path":"/MdNote_Public/ProductDoc/Plugin/(idea)%20%E8%AE%BE%E8%AE%A1%EF%BC%9AAnyBlock%20%E8%8A%82%E7%82%B9%E4%B8%8E%E5%A4%9A%E5%B1%82%E8%8F%9C%E5%8D%95.html","title":"(idea) 设计：AnyBlock 节点与多层菜单","lang":"zh-CN","frontmatter":{"description":"(idea) 设计：AnyBlock 节点与多层菜单 介绍 应用场景 一是表单、二是节点转用表单 对比 json类型 类型(8): Number、String、Boolean、Array/Object、null、Value(any)、Whitespace 但最后两种没怎么见过，只适配6种应该也行 请求表单 - json 类型(8)：string、int...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/ProductDoc/Plugin/(idea)%20%E8%AE%BE%E8%AE%A1%EF%BC%9AAnyBlock%20%E8%8A%82%E7%82%B9%E4%B8%8E%E5%A4%9A%E5%B1%82%E8%8F%9C%E5%8D%95.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"(idea) 设计：AnyBlock 节点与多层菜单"}],["meta",{"property":"og:description","content":"(idea) 设计：AnyBlock 节点与多层菜单 介绍 应用场景 一是表单、二是节点转用表单 对比 json类型 类型(8): Number、String、Boolean、Array/Object、null、Value(any)、Whitespace 但最后两种没怎么见过，只适配6种应该也行 请求表单 - json 类型(8)：string、int..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"(idea) 设计：AnyBlock 节点与多层菜单\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"(idea) 设计：AnyBlock 节点与多层菜单","slug":"idea-设计-anyblock-节点与多层菜单","link":"#idea-设计-anyblock-节点与多层菜单","children":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[{"level":3,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]},{"level":3,"title":"对比","slug":"对比","link":"#对比","children":[]},{"level":3,"title":"相似产品","slug":"相似产品","link":"#相似产品","children":[]},{"level":3,"title":"AnyBlock 用 card+dir 模拟节点","slug":"anyblock-用-card-dir-模拟节点","link":"#anyblock-用-card-dir-模拟节点","children":[]}]},{"level":2,"title":"设计方案","slug":"设计方案","link":"#设计方案","children":[{"level":3,"title":"杂记","slug":"杂记","link":"#杂记","children":[]},{"level":3,"title":"类型问题","slug":"类型问题","link":"#类型问题","children":[]},{"level":3,"title":"Schema Demo","slug":"schema-demo","link":"#schema-demo","children":[]},{"level":3,"title":"需要实现接口","slug":"需要实现接口","link":"#需要实现接口","children":[]}]}]}],"git":{},"readingTime":{"minutes":3.47,"words":1041},"filePathRelative":"MdNote_Public/ProductDoc/Plugin/(idea) 设计：AnyBlock 节点与多层菜单.md","excerpt":"\\n<h2>介绍</h2>\\n<h3>应用场景</h3>\\n<p>一是表单、二是节点转用表单</p>\\n<h3>对比</h3>\\n<ul>\\n<li>json类型\\n<ul>\\n<li>类型(8): Number、String、Boolean、Array/Object、null、Value(any)、Whitespace</li>\\n<li>但最后两种没怎么见过，只适配6种应该也行</li>\\n</ul>\\n</li>\\n<li>请求表单 - json\\n<ul>\\n<li>类型(8)：string、integer/number、boolean、array <strong>/object、null/any</strong></li>\\n</ul>\\n</li>\\n<li>请求表单 - params\\n<ul>\\n<li>类型(6): string、integer/number、boolean、array、<strong>file</strong></li>\\n</ul>\\n</li>\\n<li>请求表单 - 表单实体\\n<ul>\\n<li>基本同上，但输入框类型还分：数字类型(是否密码)/文本单多行属性/约束等等</li>\\n</ul>\\n</li>\\n<li>节点表单类型\\n<ul>\\n<li>新增节点输入、节点输出类型\\n(特点：允许给一个字符串作为二次类型、通常没有Key名字，取之替代的是二次类型名)</li>\\n</ul>\\n</li>\\n<li>简化 - Schema码类型\\n<ul>\\n<li>删除了嵌套功能，节点类型删除Object/Array</li>\\n<li>删除了约束 (范围、必填等)</li>\\n<li>主要属性：\\"type\\"、\\"default\\"</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/ProductDoc/Plugin/(idea) 设计：AnyBlock 节点与多层菜单.md","value":{"title":"(idea) 设计：AnyBlock 节点与多层菜单","path":"MdNote_Public/ProductDoc/Plugin/(idea) 设计：AnyBlock 节点与多层菜单.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{p as comp,h as data};

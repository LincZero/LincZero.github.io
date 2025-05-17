import{_ as s,e as o,g as n,f as t,k as e,j as l,o as i}from"./app-DDNHu5Ce.js";const a={};function d(c,r){return i(),o("div",null,r[0]||(r[0]=[n('<h1 id="包和模块" tabindex="-1">包和模块</h1><h2 id="为什么需要包-封装多个文件-模块" tabindex="-1">为什么需要包，封装多个文件/模块</h2><p>当工程规模变大时，把代码写到一个甚至几个文件中，都是不太聪明的做法，可能存在以下问题：</p><ol><li>单个文件过大，导致打开、翻页速度大幅变慢</li><li>查询和定位效率大幅降低，类比下，你会把所有知识内容放在一个几十万字的文档中吗？</li><li>只有一个代码层次：函数，难以维护和协作，想象一下你的操作系统只有一个根目录，剩下的都是单层子目录会如何：<code>disaster</code></li><li>容易滋生 Bug</li></ol><p>同时，将大的代码文件拆分成包和模块，还允许我们实现代码抽象和复用：将你的代码封装好后提供给用户，那么用户只需要调用公共接口即可，无需知道内部该如何实现。</p><h2 id="概念和项目单位" tabindex="-1">概念和项目单位</h2><p>因此，跟其它语言一样，Rust 也提供了相应概念用于代码的组织管理：(概念尽量从大到小排序，组织上更类似于node.js的方式)</p><ul><li>工作空间(WorkSpace) <ul><li>组成: 对于大型项目，可以进一步将<strong>多个包</strong>联合在一起，组织成工作空间</li><li>特点：可以有多个 package 和 crate</li><li>类比：类似于 js 中一个复杂的 monorepo 的样子，有多个 package.json</li></ul></li><li>项目(Packages) <ul><li>组成: 可以包含<strong>一个库</strong>(library)类型的包和包含<strong>多个二进制</strong>可执行类型的包</li><li>特点: 一个包 (<code>Cargo</code>) 提供的 <code>feature</code>。可以用来构建、测试和分享包</li><li>类比：类似于 js 的 package.json 对应一个项目，可以有 build/test/publish 等编译入口</li></ul></li><li>包/货箱(Crate) <ul><li>组成: 一个由<strong>多个模块组成</strong>的树形结构</li><li>特点: 独立的<em>可编译单元</em>，它编译后会生成<em>一个可执行文件</em>用来运行，或者生成<em>一个库</em> (可能用于第三方库的分发等)</li><li>类比: 类似于 js 的 package.json 中能编译项目的 script 项 (编译入口)，又可以分可执行还是库类型</li></ul></li><li>文件(File) <ul><li>略，就是文件</li></ul></li><li>模块(Module) <ul><li>组成: <strong>一个文件一个/多个模块</strong></li><li>特点: 模块可以被认为是真实项目中的代码组织单元</li><li>类比：类似cpp的using，命名空间</li></ul></li></ul><div class="callout" data-callout="note"><div class="callout-title"><div class="callout-title-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path></svg></div><div class="callout-title-inner">Note</div></div><div class="callout-content"><p></p><p>与其他语言不同：</p><p>注意，项目叫package应该是受js之类的影响。不然一般应该是叫project，然后包有可能叫package</p><p>为什么名字怪怪的：(无论英文还是中文)</p><p>鉴于 Rust 团队标新立异的起名传统，以及包的名称被 <code>crate</code> 占用，库的名称被 <code>library</code> 占用，经过斟酌， 我们决定将 <code>Package</code> 翻译成项目，你也可以理解为工程、软件包。</p></div></div><h2 id="结合项目目录demo" tabindex="-1">结合项目目录demo</h2>',10),t("div",{class:"ab-note drop-shadow"},[t("div",{class:"ab-list-table-parent"},[t("table",{class:"ab-table ab-list-table ab-table-folder"},[t("tbody",null,[t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"toml"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"Cargo.toml")])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"lock"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"Cargo.lock")])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"src")])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"rs    "},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"main.rs")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[l("默认"),t("em",null,"二进制包"),l("，生成的可执行文件与 "),t("code",null,"Pacakge"),l(" 同名")])])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"rs     "},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"lib.rs")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[l("唯一"),t("em",null,"库包")])])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"bin")])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"rs "},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"main1.rs")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[l("其余"),t("em",null,"二进制包"),l("，生成的可执行文件与文件名同名")])])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"rs "},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"main2.rs")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[l("其余"),t("em",null,"二进制包"),l("，生成的可执行文件与文件名同名")])])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"tests")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"集成测试文件")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"rs"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"some_integration_tests.rs")])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"benches")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"基准性能测试")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"rs"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"simple_bench.rs")])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"examples")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"项目示例")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:`rs
`},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"simple_example.rs")])])])]),t("button",{class:"ab-table-fold",is_fold:"false",onclick:`          const btn = this;
          const svgStr_fold = \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-fold-vertical-icon lucide-fold-vertical"><path d="M12 22v-6"/><path d="M12 8V2"/><path d="M4 12H2"/><path d="M10 12H8"/><path d="M16 12h-2"/><path d="M22 12h-2"/><path d="m15 19-3-3-3 3"/><path d="m15 5-3 3-3-3"/></svg>\`;
          const svgStr_unfold = \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-unfold-vertical-icon lucide-unfold-vertical"><path d="M12 22v-6"/><path d="M12 8V2"/><path d="M4 12H2"/><path d="M10 12H8"/><path d="M16 12h-2"/><path d="M22 12h-2"/><path d="m15 19-3 3-3-3"/><path d="m15 5-3-3-3 3"/></svg>\`;
          const table = btn.parentNode?.querySelector("table");
          if (!table) return;
          
          const l_tr = table.querySelectorAll("tr");
          for (let i=0; i<l_tr.length; i++) {
            const tr = l_tr[i]
            ;(()=>{
              const tr_level = Number(tr.getAttribute("tr_level"))
              if (isNaN(tr_level)) return
              const tr_isfold = btn.getAttribute("is_fold"); // [!code] tr->btn
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
            })()
          }
          const is_all_fold = btn.getAttribute("is_fold")
          if (is_all_fold=="true") {
            btn.setAttribute("is_fold", "false"); btn.innerHTML = svgStr_fold;
          }
          else {
            btn.setAttribute("is_fold", "true"); btn.innerHTML = svgStr_unfold;
          }
          `},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-fold-vertical-icon lucide-fold-vertical"},[t("path",{d:"M12 22v-6"}),t("path",{d:"M12 8V2"}),t("path",{d:"M4 12H2"}),t("path",{d:"M10 12H8"}),t("path",{d:"M16 12h-2"}),t("path",{d:"M22 12h-2"}),t("path",{d:"m15 19-3-3-3 3"}),t("path",{d:"m15 5-3 3-3-3"})])])])],-1),t("h2",{id:"其他",tabindex:"-1"},"其他",-1),t("p",null,"目前看到这里应该会是挺懵逼的，需要后面详细举例和分别描述，才能有所体会。",-1),t("p",null,"下面，让我们一一来学习这些概念以及如何在实践中运用。",-1)]))}const _=s(a,[["render",d],["__file","index.html.vue"]]),u=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Develop/01.%20Language/Rust/%E5%AD%A6%E4%B9%A0/07.%20%E6%A8%A1%E5%9D%97%E5%BA%93/","title":"包和模块","lang":"zh-CN","frontmatter":{"description":"包和模块 为什么需要包，封装多个文件/模块 当工程规模变大时，把代码写到一个甚至几个文件中，都是不太聪明的做法，可能存在以下问题： 单个文件过大，导致打开、翻页速度大幅变慢 查询和定位效率大幅降低，类比下，你会把所有知识内容放在一个几十万字的文档中吗？ 只有一个代码层次：函数，难以维护和协作，想象一下你的操作系统只有一个根目录，剩下的都是单层子目录会如...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/01.%20DesignAndDevelop/Develop/01.%20Language/Rust/%E5%AD%A6%E4%B9%A0/07.%20%E6%A8%A1%E5%9D%97%E5%BA%93/"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"包和模块"}],["meta",{"property":"og:description","content":"包和模块 为什么需要包，封装多个文件/模块 当工程规模变大时，把代码写到一个甚至几个文件中，都是不太聪明的做法，可能存在以下问题： 单个文件过大，导致打开、翻页速度大幅变慢 查询和定位效率大幅降低，类比下，你会把所有知识内容放在一个几十万字的文档中吗？ 只有一个代码层次：函数，难以维护和协作，想象一下你的操作系统只有一个根目录，剩下的都是单层子目录会如..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"包和模块\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"git":{},"readingTime":{"minutes":2.89,"words":868},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Develop/01. Language/Rust/学习/07. 模块库/README.md","excerpt":"\\n<h2>为什么需要包，封装多个文件/模块</h2>\\n<p>当工程规模变大时，把代码写到一个甚至几个文件中，都是不太聪明的做法，可能存在以下问题：</p>\\n<ol>\\n<li>单个文件过大，导致打开、翻页速度大幅变慢</li>\\n<li>查询和定位效率大幅降低，类比下，你会把所有知识内容放在一个几十万字的文档中吗？</li>\\n<li>只有一个代码层次：函数，难以维护和协作，想象一下你的操作系统只有一个根目录，剩下的都是单层子目录会如何：<code>disaster</code></li>\\n<li>容易滋生 Bug</li>\\n</ol>\\n<p>同时，将大的代码文件拆分成包和模块，还允许我们实现代码抽象和复用：将你的代码封装好后提供给用户，那么用户只需要调用公共接口即可，无需知道内部该如何实现。</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/01. DesignAndDevelop/Develop/01. Language/Rust/学习/07. 模块库/README.md","value":{"title":"学习/","path":"MdNote_Public/01. DesignAndDevelop/Develop/01. Language/Rust/学习/07. 模块库/README.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{_ as comp,u as data};

import{_ as l,c as a,a as t,f as s,d as n,o}from"./app-DqOgzRet.js";const r={};function i(c,e){return o(),a("div",null,e[0]||(e[0]=[t("h1",{id:"分析",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#分析"},[t("span",null,"分析")])],-1),t("h2",{id:"路径分析",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#路径分析"},[t("span",null,"路径分析")])],-1),t("div",{class:"ab-note drop-shadow"},[t("table",{class:"ab-table ab-list-table ab-table-folder"},[t("tbody",null,[t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"ComfyUI")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"models")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"checkpoints/")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"放置大模型文件")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"clip")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"clip_vision")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"configs")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"controlnet/")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"放置ControlNet模型文件")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"diffusers")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"embeddings/")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"放置词嵌入 (Embeddings) 模型文件")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"gligen")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"hypernetworks")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"loras/")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"放置LoRA模型文件")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"photomarker")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"style_models")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"unet")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"upscale_models")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"vae/")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"放置VAE模型文件")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"vae_approx/")])])])])]),t("button",{class:"ab-table-fold",is_fold:"false"},"全部折叠/展开")])],-1),t("h2",{id:"布局存储",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#布局存储"},[t("span",null,"布局存储")])],-1),t("p",null,"然后这个工作流可以分享，可以去Github里找别人的工作流来用",-1),t("p",null,[n("("),t("code",null,"[X|json2pumlJson]"),n(")")],-1),t("div",{class:"ab-note drop-shadow"},[t("div",{class:"ab-deco-scroll ab-deco-scroll-y",style:{"max-height":"460px"}},[t("div",{class:"ab-deco-title"},[t("div",{class:"ab-deco-title-title","title-type":"none"},[t("p",null," workflow.json")]),t("div",{class:"ab-deco-title-content"},[t("div",{class:"markdown-rendered"},[t("div",null,[t("div",{class:"language-json line-numbers-mode","data-ext":"json","data-title":"json"},[t("pre",{class:"language-json"},[t("code",null,[t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},'"last_node_id"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"9"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token property"},'"last_link_id"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"9"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token property"},'"nodes"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
    `),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token property"},'"id"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"6"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"CLIPTextEncode"'),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"pos"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token property"},'"0"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"373"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token property"},'"1"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"47"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"size"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token property"},'"0"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"422.84503173828125"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token property"},'"1"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"164.31304931640625"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"flags"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"order"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"mode"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"inputs"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token property"},'"name"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"clip"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"CLIP"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"link"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"3"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"outputs"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token property"},'"name"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"CONDITIONING"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"CONDITIONING"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"links"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
            `),t("span",{class:"token number"},"4"),n(`
          `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"slot_index"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"properties"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token property"},'"Node name for S&R"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"CLIPTextEncode"'),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"widgets_values"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token string"},'"beautiful scenery nature glass bottle landscape, , purple galaxy bottle,"'),n(`
      `),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token property"},'"id"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"7"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"CLIPTextEncode"'),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"pos"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token property"},'"0"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"408"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token property"},'"1"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"569"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"size"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token property"},'"0"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"425.27801513671875"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token property"},'"1"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"180.6060791015625"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"flags"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"order"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"mode"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"inputs"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token property"},'"name"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"clip"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"CLIP"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"link"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"5"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"outputs"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token property"},'"name"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"CONDITIONING"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"CONDITIONING"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"links"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
            `),t("span",{class:"token number"},"6"),n(`
          `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"slot_index"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"properties"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token property"},'"Node name for S&R"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"CLIPTextEncode"'),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"widgets_values"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token string"},'"text, watermark"'),n(`
      `),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token property"},'"id"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"5"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"EmptyLatentImage"'),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"pos"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token property"},'"0"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"489"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token property"},'"1"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"809"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"size"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token property"},'"0"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"315"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token property"},'"1"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"106"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"flags"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"order"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"mode"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"inputs"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"outputs"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token property"},'"name"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"LATENT"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"LATENT"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"links"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
            `),t("span",{class:"token number"},"2"),n(`
          `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"slot_index"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"properties"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token property"},'"Node name for S&R"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"EmptyLatentImage"'),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"widgets_values"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token number"},"512"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token number"},"512"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token number"},"1"),n(`
      `),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token property"},'"id"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"8"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"VAEDecode"'),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"pos"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token property"},'"0"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1325"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token property"},'"1"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"336"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"size"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token property"},'"0"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"210"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token property"},'"1"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"46"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"flags"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"order"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"5"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"mode"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"inputs"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token property"},'"name"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"samples"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"LATENT"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"link"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"7"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token property"},'"name"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"vae"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"VAE"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"link"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"8"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"outputs"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token property"},'"name"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"IMAGE"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"IMAGE"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"links"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
            `),t("span",{class:"token number"},"9"),n(`
          `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"slot_index"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"properties"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token property"},'"Node name for S&R"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"VAEDecode"'),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"widgets_values"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token property"},'"id"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"9"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"SaveImage"'),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"pos"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token property"},'"0"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1577"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token property"},'"1"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"335"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"size"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token number"},"210"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token number"},"270"),n(`
      `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"flags"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"order"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"6"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"mode"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"inputs"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token property"},'"name"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"images"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"IMAGE"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"link"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"9"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"outputs"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"properties"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"widgets_values"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token string"},'"ComfyUI"'),n(`
      `),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token property"},'"id"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"KSampler"'),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"pos"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token property"},'"0"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"941"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token property"},'"1"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"377"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"size"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token property"},'"0"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"315"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token property"},'"1"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"262"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"flags"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"order"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"4"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"mode"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"inputs"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token property"},'"name"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"model"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"MODEL"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"link"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token property"},'"name"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"positive"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"CONDITIONING"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"link"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"4"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token property"},'"name"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"negative"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"CONDITIONING"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"link"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"6"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token property"},'"name"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"latent_image"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"LATENT"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"link"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"2"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"outputs"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token property"},'"name"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"LATENT"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"LATENT"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"links"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
            `),t("span",{class:"token number"},"7"),n(`
          `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"slot_index"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"properties"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token property"},'"Node name for S&R"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"KSampler"'),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"widgets_values"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token number"},"984943483018319"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token string"},'"randomize"'),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token number"},"20"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token number"},"8"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token string"},'"euler"'),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token string"},'"normal"'),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token number"},"1"),n(`
      `),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token property"},'"id"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"4"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"CheckpointLoaderSimple"'),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"pos"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token property"},'"0"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"19"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token property"},'"1"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"438"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"size"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token property"},'"0"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"315"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token property"},'"1"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"98"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"flags"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"order"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"mode"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"inputs"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"outputs"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token property"},'"name"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"MODEL"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"MODEL"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"links"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
            `),t("span",{class:"token number"},"1"),n(`
          `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"slot_index"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token property"},'"name"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"CLIP"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"CLIP"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"links"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
            `),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token number"},"5"),n(`
          `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"slot_index"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token property"},'"name"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"VAE"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"VAE"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"links"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
            `),t("span",{class:"token number"},"8"),n(`
          `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token property"},'"slot_index"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"2"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"properties"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token property"},'"Node name for S&R"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"CheckpointLoaderSimple"'),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"widgets_values"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token string"},'"abyssorangemix2SFW_abyssorangemix2Sfw.safetensors"'),n(`
      `),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token property"},'"links"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
    `),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"4"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},'"MODEL"'),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"5"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},'"LATENT"'),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"4"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"6"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},'"CLIP"'),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token number"},"4"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"6"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},'"CONDITIONING"'),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token number"},"5"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"4"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"7"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},'"CLIP"'),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token number"},"6"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"7"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},'"CONDITIONING"'),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token number"},"7"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"8"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},'"LATENT"'),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token number"},"8"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"4"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"8"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},'"VAE"'),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token number"},"9"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"8"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"9"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token string"},'"IMAGE"'),n(`
    `),t("span",{class:"token punctuation"},"]"),n(`
  `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token property"},'"groups"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token property"},'"config"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token property"},'"extra"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token property"},'"ds"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token property"},'"scale"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1.1000000000000003"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token property"},'"offset"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token number"},"105.73286361205797"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token number"},"93.22187298366379"),n(`
      `),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token property"},'"version"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0.4"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])])])])])])])],-1)]))}const u=l(r,[["render",i],["__file","分析.html.vue"]]),d=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Type/Artificial_Intelligence/Project/Draw/ComfyUI/%E5%88%86%E6%9E%90.html","title":"分析","lang":"zh-CN","frontmatter":{"Author":"LincZero","description":"分析 路径分析 全部折叠/展开布局存储 然后这个工作流可以分享，可以去Github里找别人的工作流来用 ([X|json2pumlJson]) workflow.json","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Type/Artificial_Intelligence/Project/Draw/ComfyUI/%E5%88%86%E6%9E%90.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"分析"}],["meta",{"property":"og:description","content":"分析 路径分析 全部折叠/展开布局存储 然后这个工作流可以分享，可以去Github里找别人的工作流来用 ([X|json2pumlJson]) workflow.json"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分析\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"分析","slug":"分析","link":"#分析","children":[{"level":2,"title":"路径分析","slug":"路径分析","link":"#路径分析","children":[]},{"level":2,"title":"布局存储","slug":"布局存储","link":"#布局存储","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.69,"words":507},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Artificial_Intelligence/Project/Draw/ComfyUI/分析.md","excerpt":"\\n<h2>路径分析</h2>\\n<div class=\\"ab-note drop-shadow\\"><button class=\\"ab-table-fold\\" is_fold=\\"false\\">全部折叠/展开</button><table class=\\"ab-table ab-list-table ab-table-folder\\"><tbody><tr class=\\"ab-foldable-tr\\" tr_level=\\"0\\" is_fold=\\"false\\" able_fold=\\"true\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 0\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>ComfyUI</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"1\\" is_fold=\\"false\\" able_fold=\\"true\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 1\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>models</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 2\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>checkpoints/</p>\\n</div></div></td><td rowspan=\\"1\\"><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>放置大模型文件</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 3\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>clip</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 4\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>clip_vision</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 5\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>configs</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 6\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>controlnet/</p>\\n</div></div></td><td rowspan=\\"1\\"><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>放置ControlNet模型文件</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 7\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>diffusers</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 8\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>embeddings/</p>\\n</div></div></td><td rowspan=\\"1\\"><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>放置词嵌入 (Embeddings) 模型文件</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 9\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>gligen</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 10\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>hypernetworks</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 11\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>loras/</p>\\n</div></div></td><td rowspan=\\"1\\"><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>放置LoRA模型文件</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 12\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>photomarker</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 13\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>style_models</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 14\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>unet</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 15\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>upscale_models</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 16\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>vae/</p>\\n</div></div></td><td rowspan=\\"1\\"><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>放置VAE模型文件</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 17\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>vae_approx/</p>\\n</div></div></td></tr></tbody></table></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Artificial_Intelligence/Project/Draw/ComfyUI/分析.md","value":{"title":"分析","path":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Artificial_Intelligence/Project/Draw/ComfyUI/分析.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{u as comp,d as data};

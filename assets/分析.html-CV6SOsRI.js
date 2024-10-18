import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,a as n,f as s,e as o}from"./app-C7SjGLJX.js";const l={},r=n("h1",{id:"分析",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#分析"},[n("span",null,"分析")])],-1),p=n("h2",{id:"路径分析",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#路径分析"},[n("span",null,"路径分析")])],-1),i=n("div",{class:"ab-note drop-shadow"},[n("table",{class:"ab-table ab-list-table ab-table-folder"},[n("tbody",null,[n("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-svg"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),n("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"ComfyUI")])])])]),n("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-svg"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),n("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"models")])])])]),n("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-svg"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),n("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"checkpoints/")])])]),n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"放置大模型文件")])])])]),n("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-svg"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),n("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"clip")])])])]),n("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-svg"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),n("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"clip_vision")])])])]),n("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-svg"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),n("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"configs")])])])]),n("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-svg"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),n("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"controlnet/")])])]),n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"放置ControlNet模型文件")])])])]),n("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-svg"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),n("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"diffusers")])])])]),n("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-svg"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),n("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"embeddings/")])])]),n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"放置词嵌入 (Embeddings) 模型文件")])])])]),n("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-svg"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),n("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"gligen")])])])]),n("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-svg"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),n("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"hypernetworks")])])])]),n("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-svg"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),n("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"loras/")])])]),n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"放置LoRA模型文件")])])])]),n("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-svg"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),n("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"photomarker")])])])]),n("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-svg"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),n("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"style_models")])])])]),n("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-svg"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),n("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"unet")])])])]),n("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-svg"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),n("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"upscale_models")])])])]),n("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-svg"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),n("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"vae/")])])]),n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"放置VAE模型文件")])])])]),n("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-svg"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),n("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"vae_approx/")])])])])])])],-1),u=o(`<h2 id="布局存储" tabindex="-1"><a class="header-anchor" href="#布局存储"><span>布局存储</span></a></h2><p>然后这个工作流可以分享，可以去Github里找别人的工作流来用</p><p>(<code>[X|json2pumlJson]</code>)</p><p>[# workflow.json|scroll]</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;last_node_id&quot;</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
  <span class="token property">&quot;last_link_id&quot;</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
  <span class="token property">&quot;nodes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CLIPTextEncode&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;pos&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;0&quot;</span><span class="token operator">:</span> <span class="token number">373</span><span class="token punctuation">,</span>
        <span class="token property">&quot;1&quot;</span><span class="token operator">:</span> <span class="token number">47</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;0&quot;</span><span class="token operator">:</span> <span class="token number">422.84503173828125</span><span class="token punctuation">,</span>
        <span class="token property">&quot;1&quot;</span><span class="token operator">:</span> <span class="token number">164.31304931640625</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;flags&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;inputs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;clip&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CLIP&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;link&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;outputs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CONDITIONING&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CONDITIONING&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">4</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;slot_index&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;Node name for S&amp;R&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CLIPTextEncode&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;widgets_values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;beautiful scenery nature glass bottle landscape, , purple galaxy bottle,&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CLIPTextEncode&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;pos&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;0&quot;</span><span class="token operator">:</span> <span class="token number">408</span><span class="token punctuation">,</span>
        <span class="token property">&quot;1&quot;</span><span class="token operator">:</span> <span class="token number">569</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;0&quot;</span><span class="token operator">:</span> <span class="token number">425.27801513671875</span><span class="token punctuation">,</span>
        <span class="token property">&quot;1&quot;</span><span class="token operator">:</span> <span class="token number">180.6060791015625</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;flags&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;inputs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;clip&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CLIP&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;link&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;outputs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CONDITIONING&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CONDITIONING&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">6</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;slot_index&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;Node name for S&amp;R&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CLIPTextEncode&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;widgets_values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;text, watermark&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;EmptyLatentImage&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;pos&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;0&quot;</span><span class="token operator">:</span> <span class="token number">489</span><span class="token punctuation">,</span>
        <span class="token property">&quot;1&quot;</span><span class="token operator">:</span> <span class="token number">809</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;0&quot;</span><span class="token operator">:</span> <span class="token number">315</span><span class="token punctuation">,</span>
        <span class="token property">&quot;1&quot;</span><span class="token operator">:</span> <span class="token number">106</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;flags&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;inputs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;outputs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LATENT&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LATENT&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">2</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;slot_index&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;Node name for S&amp;R&quot;</span><span class="token operator">:</span> <span class="token string">&quot;EmptyLatentImage&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;widgets_values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token number">512</span><span class="token punctuation">,</span>
        <span class="token number">512</span><span class="token punctuation">,</span>
        <span class="token number">1</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;VAEDecode&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;pos&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;0&quot;</span><span class="token operator">:</span> <span class="token number">1325</span><span class="token punctuation">,</span>
        <span class="token property">&quot;1&quot;</span><span class="token operator">:</span> <span class="token number">336</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;0&quot;</span><span class="token operator">:</span> <span class="token number">210</span><span class="token punctuation">,</span>
        <span class="token property">&quot;1&quot;</span><span class="token operator">:</span> <span class="token number">46</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;flags&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;inputs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;samples&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LATENT&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;link&quot;</span><span class="token operator">:</span> <span class="token number">7</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vae&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;VAE&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;link&quot;</span><span class="token operator">:</span> <span class="token number">8</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;outputs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;IMAGE&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;IMAGE&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">9</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;slot_index&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;Node name for S&amp;R&quot;</span><span class="token operator">:</span> <span class="token string">&quot;VAEDecode&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;widgets_values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SaveImage&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;pos&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;0&quot;</span><span class="token operator">:</span> <span class="token number">1577</span><span class="token punctuation">,</span>
        <span class="token property">&quot;1&quot;</span><span class="token operator">:</span> <span class="token number">335</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token number">210</span><span class="token punctuation">,</span>
        <span class="token number">270</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;flags&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
      <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;inputs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;images&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;IMAGE&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;link&quot;</span><span class="token operator">:</span> <span class="token number">9</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;outputs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;widgets_values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;ComfyUI&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;KSampler&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;pos&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;0&quot;</span><span class="token operator">:</span> <span class="token number">941</span><span class="token punctuation">,</span>
        <span class="token property">&quot;1&quot;</span><span class="token operator">:</span> <span class="token number">377</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;0&quot;</span><span class="token operator">:</span> <span class="token number">315</span><span class="token punctuation">,</span>
        <span class="token property">&quot;1&quot;</span><span class="token operator">:</span> <span class="token number">262</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;flags&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;inputs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;model&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MODEL&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;link&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;positive&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CONDITIONING&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;link&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;negative&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CONDITIONING&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;link&quot;</span><span class="token operator">:</span> <span class="token number">6</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latent_image&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LATENT&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;link&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;outputs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LATENT&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LATENT&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">7</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;slot_index&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;Node name for S&amp;R&quot;</span><span class="token operator">:</span> <span class="token string">&quot;KSampler&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;widgets_values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token number">984943483018319</span><span class="token punctuation">,</span>
        <span class="token string">&quot;randomize&quot;</span><span class="token punctuation">,</span>
        <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token number">8</span><span class="token punctuation">,</span>
        <span class="token string">&quot;euler&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;normal&quot;</span><span class="token punctuation">,</span>
        <span class="token number">1</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CheckpointLoaderSimple&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;pos&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;0&quot;</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
        <span class="token property">&quot;1&quot;</span><span class="token operator">:</span> <span class="token number">438</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;0&quot;</span><span class="token operator">:</span> <span class="token number">315</span><span class="token punctuation">,</span>
        <span class="token property">&quot;1&quot;</span><span class="token operator">:</span> <span class="token number">98</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;flags&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;inputs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;outputs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MODEL&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MODEL&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">1</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;slot_index&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CLIP&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CLIP&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token number">5</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;slot_index&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;VAE&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;VAE&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">8</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;slot_index&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;Node name for S&amp;R&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CheckpointLoaderSimple&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;widgets_values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;abyssorangemix2SFW_abyssorangemix2Sfw.safetensors&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string">&quot;MODEL&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token string">&quot;LATENT&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token number">6</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string">&quot;CLIP&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token number">6</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token string">&quot;CONDITIONING&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token number">7</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string">&quot;CLIP&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token number">6</span><span class="token punctuation">,</span>
      <span class="token number">7</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token string">&quot;CONDITIONING&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token number">7</span><span class="token punctuation">,</span>
      <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">8</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string">&quot;LATENT&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token number">8</span><span class="token punctuation">,</span>
      <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token number">8</span><span class="token punctuation">,</span>
      <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token string">&quot;VAE&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token number">9</span><span class="token punctuation">,</span>
      <span class="token number">8</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">9</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string">&quot;IMAGE&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;groups&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;extra&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ds&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;scale&quot;</span><span class="token operator">:</span> <span class="token number">1.1000000000000003</span><span class="token punctuation">,</span>
      <span class="token property">&quot;offset&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token number">105.73286361205797</span><span class="token punctuation">,</span>
        <span class="token number">93.22187298366379</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token number">0.4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[r,p,i,u];function d(v,b){return e(),a("div",null,c)}const _=t(l,[["render",d],["__file","分析.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Type/Artificial_Intelligence/Project/Draw/ComfyUI/%E5%88%86%E6%9E%90.html","title":"分析","lang":"zh-CN","frontmatter":{"Author":"LincZero","description":"分析 路径分析 布局存储 然后这个工作流可以分享，可以去Github里找别人的工作流来用 ([X|json2pumlJson]) [# workflow.json|scroll]","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Type/Artificial_Intelligence/Project/Draw/ComfyUI/%E5%88%86%E6%9E%90.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"分析"}],["meta",{"property":"og:description","content":"分析 路径分析 布局存储 然后这个工作流可以分享，可以去Github里找别人的工作流来用 ([X|json2pumlJson]) [# workflow.json|scroll]"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分析\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"分析","slug":"分析","link":"#分析","children":[{"level":2,"title":"路径分析","slug":"路径分析","link":"#路径分析","children":[]},{"level":2,"title":"布局存储","slug":"布局存储","link":"#布局存储","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.69,"words":507},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Type/Artificial_Intelligence/Project/Draw/ComfyUI/分析.md","excerpt":"\\n<h2>路径分析</h2>\\n<div class=\\"ab-note drop-shadow\\"><table class=\\"ab-table ab-list-table ab-table-folder\\"><tbody><tr class=\\"ab-foldable-tr\\" tr_level=\\"0\\" is_fold=\\"false\\" able_fold=\\"true\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 0\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>ComfyUI</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"1\\" is_fold=\\"false\\" able_fold=\\"true\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 1\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>models</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 2\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>checkpoints/</p>\\n</div></div></td><td rowspan=\\"1\\"><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>放置大模型文件</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 3\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>clip</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 4\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>clip_vision</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 5\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>configs</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 6\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>controlnet/</p>\\n</div></div></td><td rowspan=\\"1\\"><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>放置ControlNet模型文件</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 7\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>diffusers</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 8\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>embeddings/</p>\\n</div></div></td><td rowspan=\\"1\\"><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>放置词嵌入 (Embeddings) 模型文件</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 9\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>gligen</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 10\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>hypernetworks</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 11\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>loras/</p>\\n</div></div></td><td rowspan=\\"1\\"><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>放置LoRA模型文件</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 12\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>photomarker</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 13\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>style_models</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 14\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>unet</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 15\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>upscale_models</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 16\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>vae/</p>\\n</div></div></td><td rowspan=\\"1\\"><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>放置VAE模型文件</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"2\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 17\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>vae_approx/</p>\\n</div></div></td></tr></tbody></table></div>","autoDesc":true}');export{_ as comp,m as data};

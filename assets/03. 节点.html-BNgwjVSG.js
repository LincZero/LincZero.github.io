import{_ as d,c as f,e as r,b as n,a as t,f as e,d as o,o as c,r as s}from"./app-DGYDqQs-.js";const _={},u={href:"https://www.bilibili.com/video/BV1pZ421b7t7/",target:"_blank",rel:"noopener noreferrer"};function b(v,l){const i=s("VueFlow"),a=s("ExternalLinkIcon");return c(),f("div",null,[l[2]||(l[2]=r('<h1 id="节点" tabindex="-1"><a class="header-anchor" href="#节点"><span>节点</span></a></h1><p>右键可以新键节点</p><h2 id="按工作流" tabindex="-1"><a class="header-anchor" href="#按工作流"><span>按工作流</span></a></h2><h3 id="默认文生图工作流" tabindex="-1"><a class="header-anchor" href="#默认文生图工作流"><span>默认文生图工作流</span></a></h3>',4)),n(i,{type:"nodeflow-list",data:`- nodes
  - Load Checkpoint: Checkpoint加载器(简易)
    - 模型, o
    - CLIP, o
    - VAE, o
    - Checkpoint名称,, 加载大模型
    - ,,[!note]
      作用：加载扩散模型
  - CLIP Text Encode1:CLIP文本编码器 (正面)
    - CLIP, i
    - 条件, o
    - ,,
      beautiful scenery nature glass bottle landscape, , purple galaxy bottle,
    - ,,[!note]
      作用：CLIP (ContrastiveLanguageImagePretraining) 理解输入文字的意思
  - CLIP Text Encode2:CLIP文本编码器 (负面)
    - CLIP, i
    - 条件, o
    - ,,
      beautiful scenery nature glass bottle landscape, , purple galaxy bottle,
  - 空Latent
    - Latent, o
    - 宽度,, 512
    - 高度,, 512
    - 批次大小, 1
  - K采样器
    - 模型,i
    - 条件(正面),i
    - 条件(负面),i
    - Latent1,i
    - Latent2,o
    - 随机种,
    - 运行后操作,
    - 步数,
    - CFG,
    - 采样器,
    - 调度器,
    - 降噪,
  - VAE解码
    - Latent,i
    - VAE,i
    - 图像,o
  - 保存图像
    - 图像,i
    - 文件名前缀,, COmfyUI
- edges
  - Load Checkpoint,模型,K采样器,模型
  - Load Checkpoint,CLIP,CLIP Text Encode1,CLIP
  - Load Checkpoint,CLIP,CLIP Text Encode2,CLIP
  - Load Checkpoint,VAE,VAE解码,VAE
  - CLIP Text Encode1,条件,K采样器,条件(正面)
  - CLIP Text Encode2,条件,K采样器,条件(负面)
  - 空Latent,Latent,K采样器,Latent1
  - K采样器,Latent2,VAE解码,Latent
  - VAE解码,图像,保存图像,图像
`}),l[3]||(l[3]=t("p",null,[t("a",{href:"../ProjectNote/Study/01.%20%E9%BB%98%E8%AE%A4%E6%96%87%E7%94%9F%E5%9B%BE.json"},"../ProjectNote/Study/01.%20默认文生图.json")],-1)),l[4]||(l[4]=t("h3",{id:"默认文生图工作流-节点类别位置",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#默认文生图工作流-节点类别位置"},[t("span",null,"默认文生图工作流_节点类别位置")])],-1)),l[5]||(l[5]=t("p",null,"这里我们复习一下默认场景的节点分别在哪吧",-1)),l[6]||(l[6]=t("div",{class:"ab-note drop-shadow"},[t("table",{class:"ab-table ab-branch-table"},[t("tbody",null,[t("tr",null,[t("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[t("div",null,[t("p",null,"Load Checkpoint")])]),t("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[t("div",null,[t("p",null,"loaders/")])])]),t("tr",null,[t("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[t("div",null,[t("p",null,"CLIP Text Encode (Prompt)")])]),t("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[t("div",null,[t("p",null,"conditioning/")])])]),t("tr",null,[t("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[t("div",null,[t("p",null,"Empty Latent Image")])]),t("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[t("div",null,[t("p",null,"latent/")])])]),t("tr",null,[t("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[t("div",null,[t("p",null,"KSampler")])]),t("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[t("div",null,[t("p",null,"sampling/")])])]),t("tr",null,[t("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[t("div",null,[t("p",null,"VAE Decode")])]),t("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[t("div",null,[t("p",null,"latent/")])])]),t("tr",null,[t("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[t("div",null,[t("p",null,"Save Image")])]),t("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[t("div",null,[t("p",null,"image/")])])])])])],-1)),l[7]||(l[7]=r('<h3 id="简易图生图工作流" tabindex="-1"><a class="header-anchor" href="#简易图生图工作流"><span>简易图生图工作流</span></a></h3><p>现在再来看看其他的工作流节点。这里可以先跳到下一章 “工作流”，然后再回来看</p><p>例如图生图的工作流。</p><p>要点：图生图中KSampler的denoise值要调低 (SD中的重绘强度)</p><p>图生图的新增使用节点：</p><p><a href="../ProjectNote/Study/02.%20%E7%AE%80%E6%98%93%E5%9B%BE%E7%94%9F%E5%9B%BE.json">../ProjectNote/Study/02.%20简易图生图.json</a></p><h3 id="简易图生图工作流-节点类别位置" tabindex="-1"><a class="header-anchor" href="#简易图生图工作流-节点类别位置"><span>简易图生图工作流_节点类别位置</span></a></h3>',7)),l[8]||(l[8]=t("div",{class:"ab-note drop-shadow"},[t("table",{class:"ab-table ab-branch-table"},[t("tbody",null,[t("tr",null,[t("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[t("div",null,[t("p",null,"Load Checkpoint")])]),t("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[t("div",null,[t("p",null,"loaders/")])])]),t("tr",null,[t("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[t("div",null,[t("p",null,"CLIP Text Encode (Prompt)")])]),t("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[t("div",null,[t("p",null,"conditioning/")])])]),t("tr",null,[t("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[t("div",null,[t("p",null,"Empty Latent Image")])]),t("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[t("div",null,[t("p",null,"latent/")])])]),t("tr",null,[t("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[t("div",null,[t("p",null,"KSampler")])]),t("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[t("div",null,[t("p",null,"sampling/")])])]),t("tr",null,[t("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[t("div",null,[t("p",null,"VAE Decode")])]),t("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[t("div",null,[t("p",null,"latent/")])])]),t("tr",null,[t("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[t("div",null,[t("p",null,"Save Image")])]),t("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[t("div",null,[t("p",null,"image/")])])]),t("tr",null,[t("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[t("div",null,[t("p",null,[t("strong",null,"VAE Encode")])])]),t("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[t("div",null,[t("p",null,"latent/")])])]),t("tr",null,[t("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[t("div",null,[t("p",null,[t("strong",null,"Load VAE")])])]),t("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[t("div",null,[t("p",null,"loaders/ (用自定义VAE代替默认的)")])])]),t("tr",null,[t("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[t("div",null,[t("p",null,[t("strong",null,"Load Image")])])]),t("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[t("div",null,[t("p",null,"image/")])])]),t("tr",null,[t("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[t("div",null,[t("p",null,[t("strong",null,"Upscale Latent")])])]),t("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[t("div",null,[t("p",null,"latent/ (用于重调图生图的尺寸)")])])])])])],-1)),l[9]||(l[9]=r('<h2 id="按使用频率" tabindex="-1"><a class="header-anchor" href="#按使用频率"><span>按使用频率</span></a></h2><p>除了常用工作流的常用节点外，这里再介绍其他也比较常用的节点</p><h3 id="default" tabindex="-1"><a class="header-anchor" href="#default"><span>Default</span></a></h3><p>Load LoRA</p><p>元节点 (可以用于单独抠出很多选项的节点中的某一个节点出来，简化小白用户体验)</p><h2 id="按分类" tabindex="-1"><a class="header-anchor" href="#按分类"><span>按分类</span></a></h2><p>右键菜单可创建的节点</p><p>右键&gt;Add Node</p>',8)),l[10]||(l[10]=t("div",{class:"ab-note drop-shadow"},[t("table",{class:"ab-table ab-list-table ab-table-folder"},[t("tbody",null,[t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"utils")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"sampling/")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"采样器")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"custom_sampling")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"video_models")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"**KSampler**            ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("strong",null,"KSampler")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"K采样器，负责采样去噪 (生成过程最重要的一环)")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"KSampler (Advanced)",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"KSampler (Advanced)")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"loaders/")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"向ComfyUI加载各种功能模型")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"video_models")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"**Load Checkpoint** ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("strong",null,"Load Checkpoint")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"加载检查点模型")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"Load VAE",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Load VAE")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"Load LoRA",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Load LoRA")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"Load ControlNet Model",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Load ControlNet Model")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"Load ControlNet Model(diff)",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Load ControlNet Model(diff)")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"Load Style Model",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Load Style Model")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"Load CLIP Vision",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Load CLIP Vision")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"unCLIPCheckpointLoader",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"unCLIPCheckpointLoader")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"GLIGENLoader",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"GLIGENLoader")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"LoraLoaderModelOnly",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"LoraLoaderModelOnly")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"HypernetworkLoader",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"HypernetworkLoader")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"Load Upscale Model",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Load Upscale Model")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"conditioning/")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"条件")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"style_model")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"controlnet")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"gligen")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"inpaint")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"video_models")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"3d_models")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"upscale_diffusion")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"stable_cascade")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"instructpix2pix")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"**CLIP Text Encode (Prompt)** ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("strong",null,"CLIP Text Encode (Prompt)")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"CLIP文本编码器 (提示词)")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"CLIP Set Last Layer",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"CLIP Set Last Layer")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"ConditioningAverage",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"ConditioningAverage")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"Conditioning (COmbine)",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Conditioning (COmbine)")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"Conditioning (Concat)",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 34
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Conditioning (Concat)")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"Conditioning (Set Area)",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 35
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Conditioning (Set Area)")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"Conditioning (Set Area with Percentage)",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 36
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Conditioning (Set Area with Percentage)")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"ConditioningSetAreaStrength",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 37
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"ConditioningSetAreaStrength")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"Conditioning (Set Mask)",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 38
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Conditioning (Set Mask)")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"CLIO Vision Encode",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 39
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"CLIO Vision Encode")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"unCLIOConditioning",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 40
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"unCLIOConditioning")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 41
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"latent/")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"潜空间 (内部图片编码格式)")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 42
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"inpaint")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 43
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"batch")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 44
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"transform")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 45
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"advanced")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 46
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"stable_cascade")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 47
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"audio")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 48
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"sd3")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"**VAE Decode**         ",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 49
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("strong",null,"VAE Decode")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"VAE解码器，Latent->Image")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"**VAE Encode**         ",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 50
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("strong",null,"VAE Encode")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"VAE编码器，Image->Latent")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"**Empty Latent Image** ",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 51
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("strong",null,"Empty Latent Image")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"空的")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"Upscale Latent",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 52
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Upscale Latent")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"Upscale Latent By",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 53
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Upscale Latent By")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"Latent Composite",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 54
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Latent Composite")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"LatentCompositeMasked",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 55
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"LatentCompositeMasked")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 56
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"image")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"**Save Image** ",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 57
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("strong",null,"Save Image")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"保存图片")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"Preview Image",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 58
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Preview Image")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"Load Image",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 59
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Load Image")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"Invert Image",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 60
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Invert Image")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"Batch Images",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 61
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Batch Images")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"Pad Image for Outpainting",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 62
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Pad Image for Outpainting")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 63
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"...")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"folder",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 64
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"mask")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"folder",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 65
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"_for_testing")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"folder",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 66
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"advanced")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"folder",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 67
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"model_patches")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"folder",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 68
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"audio")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"folder",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 69
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"api/")])])])])]),t("button",{class:"ab-table-fold",is_fold:"false"},"全部折叠/展开")])],-1)),l[11]||(l[11]=r('<h2 id="按扩展" tabindex="-1"><a class="header-anchor" href="#按扩展"><span>按扩展</span></a></h2><p>除了自带工作流外，还有很多可以额外安装或自定义的节点</p><h3 id="自定义节点介绍" tabindex="-1"><a class="header-anchor" href="#自定义节点介绍"><span>自定义节点介绍</span></a></h3><h4 id="自定义节点丢失的错误问题" tabindex="-1"><a class="header-anchor" href="#自定义节点丢失的错误问题"><span>自定义节点丢失的错误问题</span></a></h4><p>当使用别人的工作流时，别人的工作流中可能也包含了很多自定义节点。如果你没有这些节点，可能会遇到很多节点 “变红” 的情况</p><p>解决：最简单的解决方法是在 <code>ComfyUI Manager Menu</code> (似乎是插件) 中点击 <code>Install Missing Custom Nodes</code> 按钮，就可以了</p><h4 id="自定义节点的本质、3种安装方式" tabindex="-1"><a class="header-anchor" href="#自定义节点的本质、3种安装方式"><span>自定义节点的本质、3种安装方式</span></a></h4><p>节点本质是一堆代码，存储在Github仓库中。下面介绍安装方式：</p><ul><li>clone安装 将这些仓库代码放到 <code>ComfyUI/custom_nodes</code> 路径，即实现了自定义节点的安装和加载（仓库clone下载就行，不需要编译。是即用的py脚本）</li><li>在github中下载zip安装也行 不建议</li><li>使用扩展 “Comfy UI Manager” 该扩展可以很方便地去下载、管理其他自定义节点</li></ul><p>（话说不存在像UE那种用多个节点自定义成一个节点的方法吗，那种也挺好用的）</p><h4 id="一些链接" tabindex="-1"><a class="header-anchor" href="#一些链接"><span>一些链接</span></a></h4>',11)),t("p",null,[t("a",u,[l[0]||(l[0]=o("视频")),n(a)]),l[1]||(l[1]=o(" 中介绍的所有节点的仓库链接："))]),l[12]||(l[12]=r('<ul><li>ComfyUI Manager： github.com/ltdrdata/ComfyUI-Manager</li><li>ComfyUI汉化节点： github.com/AIGODLIKE/AIGODLIKE-COMFYUI-TRANSLATION</li><li>ComfyUI提示词反推： github.com/pythongosssss/ComfyUI-WD14-Tagger</li><li>Impact节点包： github.com/ltdrdata/ComfyUI-Impact-Pack Efficiency Nodes</li><li>效率节点包： github.com/jags111/efficiency-nodes-comfyui</li><li>自定义脚本包（含提示词补全）： github.com/pythongosssss/ComfyUI-Custom-Scripts</li></ul><p>更多没有介绍详细的节点：</p><ul><li>One Button Prompt（简易负面词）： github.com/AIrjen/OneButtonPrompt</li><li>CR节点包： github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes</li><li>WAS节点套件： github.com/WASasquatch/was-node-suite-comfyui</li><li>RG3节点包： github.com/rgthree/rgthree-comfy</li><li>AnimateDiff Evolved： github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved</li><li>IPAdapter Plus： github.com/cubiq/ComfyUI_IPAdapter_plus</li><li>ReActor： github.com/Gourieff/comfyui-reactor-node</li><li>Catcat： github.com/jw782cn/ComfyUI-Catcat</li><li>ComfyPets： github.com/nathannlu/ComfyUI-Pets</li></ul><h3 id="常用的自定义节点" tabindex="-1"><a class="header-anchor" href="#常用的自定义节点"><span>常用的自定义节点</span></a></h3><h4 id="comfy-ui-manager" tabindex="-1"><a class="header-anchor" href="#comfy-ui-manager"><span>Comfy UI Manager</span></a></h4><p>见 “扩展” 一章</p>',6))])}const w=d(_,[["render",b],["__file","03. 节点.html.vue"]]),g=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Type/Artificial_Intelligence/Project/Draw/ComfyUI/%E6%95%99%E7%A8%8B/03.%20%E8%8A%82%E7%82%B9.html","title":"节点","lang":"zh-CN","frontmatter":{"description":"节点 右键可以新键节点 按工作流 默认文生图工作流","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Type/Artificial_Intelligence/Project/Draw/ComfyUI/%E6%95%99%E7%A8%8B/03.%20%E8%8A%82%E7%82%B9.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"节点"}],["meta",{"property":"og:description","content":"节点 右键可以新键节点 按工作流 默认文生图工作流"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"节点\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"节点","slug":"节点","link":"#节点","children":[{"level":2,"title":"按工作流","slug":"按工作流","link":"#按工作流","children":[{"level":3,"title":"默认文生图工作流","slug":"默认文生图工作流","link":"#默认文生图工作流","children":[]},{"level":3,"title":"默认文生图工作流_节点类别位置","slug":"默认文生图工作流-节点类别位置","link":"#默认文生图工作流-节点类别位置","children":[]},{"level":3,"title":"简易图生图工作流","slug":"简易图生图工作流","link":"#简易图生图工作流","children":[]},{"level":3,"title":"简易图生图工作流_节点类别位置","slug":"简易图生图工作流-节点类别位置","link":"#简易图生图工作流-节点类别位置","children":[]}]},{"level":2,"title":"按使用频率","slug":"按使用频率","link":"#按使用频率","children":[{"level":3,"title":"Default","slug":"default","link":"#default","children":[]}]},{"level":2,"title":"按分类","slug":"按分类","link":"#按分类","children":[]},{"level":2,"title":"按扩展","slug":"按扩展","link":"#按扩展","children":[{"level":3,"title":"自定义节点介绍","slug":"自定义节点介绍","link":"#自定义节点介绍","children":[{"level":4,"title":"自定义节点丢失的错误问题","slug":"自定义节点丢失的错误问题","link":"#自定义节点丢失的错误问题","children":[]},{"level":4,"title":"自定义节点的本质、3种安装方式","slug":"自定义节点的本质、3种安装方式","link":"#自定义节点的本质、3种安装方式","children":[]},{"level":4,"title":"一些链接","slug":"一些链接","link":"#一些链接","children":[]}]},{"level":3,"title":"常用的自定义节点","slug":"常用的自定义节点","link":"#常用的自定义节点","children":[{"level":4,"title":"Comfy UI Manager","slug":"comfy-ui-manager","link":"#comfy-ui-manager","children":[]}]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":4.17,"words":1252},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Artificial_Intelligence/Project/Draw/ComfyUI/教程/03. 节点.md","excerpt":"\\n<p>右键可以新键节点</p>\\n<h2>按工作流</h2>\\n<h3>默认文生图工作流</h3>\\n","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Artificial_Intelligence/Project/Draw/ComfyUI/教程/03. 节点.md","value":{"title":"03. 节点","path":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Artificial_Intelligence/Project/Draw/ComfyUI/教程/03. 节点.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{w as comp,g as data};

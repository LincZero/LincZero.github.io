import{_ as n,c as i,b as r,a as l,f as t,o}from"./app-CjGre04A.js";const s={};function a(d,e){return o(),i("div",null,e[0]||(e[0]=[r('<h1 id="界面操作" tabindex="-1">界面操作</h1><h2 id="基本操作" tabindex="-1">基本操作</h2><ul><li>生成图片：Ctrl+Enter</li><li>双击画布：显示搜索框</li></ul><h3 id="主视图" tabindex="-1">主视图</h3><p>视图操作</p><ul><li>拖拽视图： 按住左键/按住中键</li><li>缩放视图： 滚轮</li><li>菜单： 右键</li><li>多选： Ctrl拖拽 <ul><li>批量移动： Shift拖拽</li></ul></li></ul><p>节点操作</p><ul><li><strong>节点操作</strong><ul><li>右键节点： 可以自定义title、color</li><li>命名标题： 双击标题</li><li>节点拷贝黏贴： Ctrl+C、Ctrl+V</li><li>创建操作 <ul><li>画布右键&gt;新建节点</li><li>新版UI侧边栏选择</li><li>(技巧) 从Socket中拖线出来，可以创建与该Socket能够连接的常用节点 (不常用的不行)<br> (技巧) 注意，这种方式还可以用于创建 “转接点”<br> (技巧) 在松开前按住Shift，能更方便创建节点</li><li>(技巧) 两个节点的A类型Socket已经相连接，可以在他们中间快速新建一个I/O类型均为A类型的节点。只需点击他们中间连线的小圆点，点击Add Node</li></ul></li><li>节点忽略 <ul><li>一种方法是部分节点可以权重调成0</li><li>但通常选择节点右键 &gt; 忽略节点</li><li>快捷键 Ctrl+B</li><li>使用相关节点：RGThree节点包里有两个开关节点</li></ul></li></ul></li><li><strong>线操作</strong><ul><li>创建操作 <ul><li>在节点的IO口拖拽，线的两端需要同色，输入口只能接受一个源而输出口可以输出多个</li><li>(技巧) 新版不用拖拽到IO口，拖拽到节点处即可自动匹配连线</li></ul></li><li>拔开线： Shift拖拽</li></ul></li><li><strong>整理操作</strong><ul><li>打组： Ctrl+G</li><li>节点展开/折叠： 点击节点左上角的圆点，或Alt+C</li><li>固定节点/组： P</li><li>对齐： 多选多个节点后 &gt; 右键 &gt; 将选中节点对齐到</li><li>吸附网格： 按住Shift拖拽</li><li>创建转接线： 见 “节点操作&gt;创建”</li></ul></li><li>刷新： R</li><li>完整快捷键列表见： https://github.com/comfyanonymous/ComfyUI</li></ul><h3 id="左下" tabindex="-1">左下</h3><ul><li>T</li><li>I</li><li>N：Node Number，节点数</li><li>V</li><li>FPS：刷新率</li></ul><h3 id="右侧-工作流面板" tabindex="-1">右侧：工作流面板</h3>',11),l("div",{class:"ab-note drop-shadow"},[l("table",{class:"ab-table ab-branch-table"},[l("tbody",null,[l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"(SettingIcon)")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div",null,[l("p",null,"设置")])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"Queue Prompt")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div")])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"Extra options")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div")])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"Queue Front")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div")])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"View Queue")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div")])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"View History")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div")])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"Save")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div",null,[l("p",null,"保存工作流")])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"Load")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div",null,[l("p",null,"加载工作流")])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"Refresh")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div",null,[l("p",null,"刷新界面（可更新各选单中模型）")])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"Clipspace")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div",null,[l("p",null,"剪切版")])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"Clear")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div",null,[l("p",null,"删除界面上的所有节点")])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"Load Default")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div",null,[l("p",null,"加载默认的节点工作流")])])])])])],-1),l("h3",{id:"右键",tabindex:"-1"},"右键",-1),l("div",{class:"ab-note drop-shadow"},[l("div",{class:"ab-list-table-parent"},[l("table",{class:"ab-table ab-list-table ab-table-folder"},[l("tbody",null,[l("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"folder"},[l("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[t("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),l("div",{class:"ab-list-table-witharrow"},"Add Node")]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"这里我们后面有专门的“节点”章节讲解")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"Add Group"},[l("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[t("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow"},"Add Group")])]),l("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"Convert to Group Node"},[l("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[t("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow"},"Convert to Group Node")])]),l("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"Manage Group Nodes"},[l("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[t("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow"},"Manage Group Nodes")])]),l("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"Add Group For Selected Nodes"},[l("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[t("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow"},"Add Group For Selected Nodes")])]),l("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"~~"},[l("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[t("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow"},"~~")])]),l("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"Save Selected as Templatte"},[l("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[t("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow"},"Save Selected as Templatte")])]),l("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"folder"},[l("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[t("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),l("div",{class:"ab-list-table-witharrow"},"Node Templates")])])])]),l("button",{class:"ab-table-fold",is_fold:"false",onclick:`          const btn = this;
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
          `},[l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-fold-vertical-icon lucide-fold-vertical"},[l("path",{d:"M12 22v-6"}),l("path",{d:"M12 8V2"}),l("path",{d:"M4 12H2"}),l("path",{d:"M10 12H8"}),l("path",{d:"M16 12h-2"}),l("path",{d:"M22 12h-2"}),l("path",{d:"m15 19-3-3-3 3"}),l("path",{d:"m15 5-3 3-3-3"})])])])],-1),r('<h2 id="基本操作-新ui" tabindex="-1">基本操作_新UI</h2><p>(需要用新版前端，并且最好在 设置 &gt; Comfy &gt; Menu &gt; 启动新版财经)</p><h3 id="上右" tabindex="-1">上右</h3><p>（从右往左。注意很多选项只有安装插件后才会有）</p><ul><li>执行队列</li><li>X</li><li>Comfy UI Manager扩展提供部分 <ul><li>Share，分享</li><li>Free model and node cache，释放模型和节点缓存</li><li>Unload Models，卸载模型</li><li>Manager, 进入菜单</li><li>Switch Locale，便捷切换语言</li></ul></li><li>等等</li></ul><h3 id="上左" tabindex="-1">上左</h3><p>（从左往右）</p><ul><li>工作流管理器 (新增，ComfyUI新前端支持多开工作流)</li><li>保存 <ul><li>保存/保存为/导出</li><li>(导出是浏览器方式下载)</li><li>(保存是进入到 “工作流管理器中”，当然，也会在软件安装路径下保存一份 <code>ComfyUI/user/default/workflows</code>)</li></ul></li><li>刷新</li><li>剪切版</li><li>重设视角</li><li>清空</li></ul><h3 id="左上" tabindex="-1">左上</h3><p>（从上往下）</p><ul><li>队列 (即图库，保存之前的生成结果)</li><li>节点库 (比右键菜单好用多了)</li></ul><h3 id="左下-1" tabindex="-1">左下</h3><ul><li>进入设置面板</li><li>切换夜间模式</li></ul>',13)]))}const f=n(s,[["render",a]]),u=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Type/Artificial_Intelligence/Project/Draw/ComfyUI/%E6%95%99%E7%A8%8B/02.%20%E7%95%8C%E9%9D%A2%E6%93%8D%E4%BD%9C.html","title":"界面操作","lang":"zh-CN","frontmatter":{"description":"界面操作 基本操作 生成图片：Ctrl+Enter 双击画布：显示搜索框 主视图 视图操作 拖拽视图： 按住左键/按住中键 缩放视图： 滚轮 菜单： 右键 多选： Ctrl拖拽 批量移动： Shift拖拽 节点操作 节点操作 右键节点： 可以自定义title、color 命名标题： 双击标题 节点拷贝黏贴： Ctrl+C、Ctrl+V 创建操作 画布右...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"界面操作\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Type/Artificial_Intelligence/Project/Draw/ComfyUI/%E6%95%99%E7%A8%8B/02.%20%E7%95%8C%E9%9D%A2%E6%93%8D%E4%BD%9C.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"界面操作"}],["meta",{"property":"og:description","content":"界面操作 基本操作 生成图片：Ctrl+Enter 双击画布：显示搜索框 主视图 视图操作 拖拽视图： 按住左键/按住中键 缩放视图： 滚轮 菜单： 右键 多选： Ctrl拖拽 批量移动： Shift拖拽 节点操作 节点操作 右键节点： 可以自定义title、color 命名标题： 双击标题 节点拷贝黏贴： Ctrl+C、Ctrl+V 创建操作 画布右..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]]},"git":{},"readingTime":{"minutes":2.77,"words":830},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Artificial_Intelligence/Project/Draw/ComfyUI/教程/02. 界面操作.md","excerpt":"\\n<h2>基本操作</h2>\\n<ul>\\n<li>生成图片：Ctrl+Enter</li>\\n<li>双击画布：显示搜索框</li>\\n</ul>\\n<h3>主视图</h3>\\n<p>视图操作</p>\\n<ul>\\n<li>拖拽视图： 按住左键/按住中键</li>\\n<li>缩放视图： 滚轮</li>\\n<li>菜单： 右键</li>\\n<li>多选： Ctrl拖拽\\n<ul>\\n<li>批量移动： Shift拖拽</li>\\n</ul>\\n</li>\\n</ul>\\n<p>节点操作</p>\\n<ul>\\n<li><strong>节点操作</strong>\\n<ul>\\n<li>右键节点： 可以自定义title、color</li>\\n<li>命名标题： 双击标题</li>\\n<li>节点拷贝黏贴： Ctrl+C、Ctrl+V</li>\\n<li>创建操作\\n<ul>\\n<li>画布右键&gt;新建节点</li>\\n<li>新版UI侧边栏选择</li>\\n<li>(技巧) 从Socket中拖线出来，可以创建与该Socket能够连接的常用节点 (不常用的不行)<br>\\n(技巧) 注意，这种方式还可以用于创建 “转接点”<br>\\n(技巧) 在松开前按住Shift，能更方便创建节点</li>\\n<li>(技巧) 两个节点的A类型Socket已经相连接，可以在他们中间快速新建一个I/O类型均为A类型的节点。只需点击他们中间连线的小圆点，点击Add Node</li>\\n</ul>\\n</li>\\n<li>节点忽略\\n<ul>\\n<li>一种方法是部分节点可以权重调成0</li>\\n<li>但通常选择节点右键 &gt; 忽略节点</li>\\n<li>快捷键 Ctrl+B</li>\\n<li>使用相关节点：RGThree节点包里有两个开关节点</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li><strong>线操作</strong>\\n<ul>\\n<li>创建操作\\n<ul>\\n<li>在节点的IO口拖拽，线的两端需要同色，输入口只能接受一个源而输出口可以输出多个</li>\\n<li>(技巧) 新版不用拖拽到IO口，拖拽到节点处即可自动匹配连线</li>\\n</ul>\\n</li>\\n<li>拔开线： Shift拖拽</li>\\n</ul>\\n</li>\\n<li><strong>整理操作</strong>\\n<ul>\\n<li>打组： Ctrl+G</li>\\n<li>节点展开/折叠： 点击节点左上角的圆点，或Alt+C</li>\\n<li>固定节点/组： P</li>\\n<li>对齐： 多选多个节点后 &gt; 右键 &gt; 将选中节点对齐到</li>\\n<li>吸附网格： 按住Shift拖拽</li>\\n<li>创建转接线： 见 “节点操作&gt;创建”</li>\\n</ul>\\n</li>\\n<li>刷新： R</li>\\n<li>完整快捷键列表见： https://github.com/comfyanonymous/ComfyUI</li>\\n</ul>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Artificial_Intelligence/Project/Draw/ComfyUI/教程/02. 界面操作.md","value":{"title":"02. 界面操作","path":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Artificial_Intelligence/Project/Draw/ComfyUI/教程/02. 界面操作.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{f as comp,u as data};

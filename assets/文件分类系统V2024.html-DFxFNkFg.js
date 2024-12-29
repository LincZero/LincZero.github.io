import{_ as o,c as s,e as l,a as t,f as e,d as r,o as i}from"./app-T3I-xDym.js";const a={};function d(f,n){return i(),s("div",null,n[0]||(n[0]=[l('<h1 id="文件分类系统2024" tabindex="-1"><a class="header-anchor" href="#文件分类系统2024"><span>文件分类系统2024</span></a></h1><p>这里只是记录 “增添” 的部分，以及 “重要” 的部分，其实部分延续之前分类系统习惯。</p><h2 id="分类原则" tabindex="-1"><a class="header-anchor" href="#分类原则"><span>分类原则</span></a></h2><h3 id="big3部分" tabindex="-1"><a class="header-anchor" href="#big3部分"><span>Big3部分</span></a></h3><p>基于V5版本有些改进，也是我分类系统的最重要的原则之一</p><h4 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h4><p>V5中的旧定义</p><blockquote><p>Big3 在之前 ThreeRoot (见分类原则笔记) 中的定义是：性能、管理、隐私</p></blockquote><p>2024版的定义的不同，给出了更多的层次：</p>',9),t("div",{class:"ab-note drop-shadow"},[t("table",{class:"ab-table ab-list-table"},[t("tbody",null,[t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"文件Big3",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"文件Big3")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"分类",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"分类")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"硬盘、(编码)格式、(编码)加密")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"特点",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"特点")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"当一个文件被存储到你的电脑后，该文件自身就拥有这三种特性，不随人为意志改变。 比如说一个文件认为是隐私还是公开，可以在一念之间被修改。但他是否加密，则是客观事实。")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"影响Big3",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"影响Big3")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"分类",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"分类")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"性能、管理、隐私")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"特点",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"特点")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"这些是抽象的概念，根据打开的方式和处理软件的默认行为不同，特点不同。 比如说在某个弱加密软件中某文件属于隐私，但在电脑的资源管理器中你能直接打开看到。")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"软件Big3",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"软件Big3")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"分类",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"分类")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"分区管理软件、专项管理软件、加密管理软件")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"特点",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"特点")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"这里才是对分类系统有指导意义的三类")])])])])])])],-1),l('<h4 id="big3细分" tabindex="-1"><a class="header-anchor" href="#big3细分"><span>Big3细分</span></a></h4><p>（这里Big三不分先后，但Big分的细分有先后。<em>从影响程度从高到低排</em>）</p><ul><li>性能 <ol><li><em>硬盘</em> 会影响性能 (物理天然性能)</li><li><em>格式</em> 会影响性能 (文件格式天然有性能差异)</li><li><em>加密</em> 会影响性能 (加密, 但似乎影响很低)</li></ol></li><li>管理 <ol><li><em>跨硬盘</em> 会影响管理</li><li><em>跨格式</em> 会影响管理</li><li><em>跨加密</em> 会影响管理</li></ol></li><li>隐私 <ol><li><em>硬盘隔绝</em> 会影响隐私</li><li><em>加密隔绝</em> 会影响隐私</li><li><em>格式不同</em> 会影响隐私</li></ol></li></ul><p>除了上面提到的外，一些 “优化” 也能够影响他们。例如对系统部分的内存空间提高优先级，从而使其在调度算法中占据优势，这是可能的。</p><h4 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级"><span>优先级</span></a></h4><blockquote><h5 id="原则" tabindex="-1"><a class="header-anchor" href="#原则"><span>原则</span></a></h5></blockquote><p>优先级原则一：优先级只是层级优先级，不代表重要程度</p><p>优先级原则二：大家排高优先级其实都有道理和应用场景，我这里给出的不意味着就是对的。并且其实很多时候大家都是紧耦合，不是完全区分的</p><blockquote><h5 id="原因" tabindex="-1"><a class="header-anchor" href="#原因"><span>原因</span></a></h5></blockquote><ul><li><s>隐私&gt;硬盘</s>： 最极致的隐私保护，必然是物理隔绝。但感觉个人用不到这么极致</li><li><em>硬盘&gt;隐私</em>： 一方面隐私盘只放隐私、公开盘只放公开，对操作和硬盘数都太苛刻了。二来我们不允许在公有盘中放私有信息，但应允许在私有盘放公有信息 (只是禁止将私有盘中的公有资料发布出去，可能有风险)</li><li><s>隐私&gt;管理</s>： (同点一)</li><li><em>管理&gt;隐私</em>： 常用的管理软件如 GitHub Desktop，管理对象就是同时包含各种权限的</li><li><s>管理&gt;硬盘</s>： 从 “分布式存储系统” 的角度，集群子机可能面临宕机/替换，管理不应该依赖于硬盘</li><li><em>硬盘&gt;管理</em>： 大部分管理系统其实不支持多文件夹并集。如Git库/笔记库/音乐库/图片库，虽然看起来是缓存多个路径 (多个库) 方便随时切换，但同一时间只能打开一个。并不具备像分布式系统那种分布式查询能力</li></ul><blockquote><h5 id="我的排序、多层嵌套问题" tabindex="-1"><a class="header-anchor" href="#我的排序、多层嵌套问题"><span>我的排序、多层嵌套问题</span></a></h5></blockquote><p>而在电脑文件管理方面，我的优先级为：(前三个是宏观来看的，后三个才是在物理上有标记，六个之后的是二次的嵌套分类)</p><ol><li>宏观隐私</li><li>宏观管理</li><li>宏观硬盘</li><li><em>标记硬盘</em></li><li><em>标记管理</em> (管理类型，而不是文件类型)</li><li><em>标记隐私</em></li><li>二次标记管理 (详见Er层)</li></ol><h4 id="参考一些编程框架" tabindex="-1"><a class="header-anchor" href="#参考一些编程框架"><span>参考一些编程框架</span></a></h4><p>优先级参考：并且，我们可以参考一些现成系统，他山之石，来为我们的分类系统提供支撑：</p><ul><li>参考 “面向对象”： <ul><li>程序文件 = 硬盘</li><li>同父类的类 = 同类型、同格式、同管理对象</li><li>类方法的可访问性 = 隐私</li><li>排序：硬盘&gt;格式&gt;加密</li></ul></li><li>参考 “Redis分布式存储系统”： <ul><li>集群子机 = 硬盘</li><li>Redis的数据结构 = 格式、管理对象</li><li>存储中的访问权限字段 = 隐私 (假设有)</li><li>排序：硬盘&gt;格式&gt;加密</li></ul></li><li>参考 “资源网站”： <ul><li>不同的资源网站 = 硬盘</li><li>先按教程类型分类 = 格式、管理对象</li><li>然后部分教程免费部分收费 = 隐私</li><li>排序：硬盘&gt;格式&gt;加密</li></ul></li></ul><h3 id="er2部分" tabindex="-1"><a class="header-anchor" href="#er2部分"><span>Er2部分</span></a></h3><p>这条原则，也是由Big3的格式/管理层，延伸出来的</p><h4 id="二次管理" tabindex="-1"><a class="header-anchor" href="#二次管理"><span>二次管理</span></a></h4><p>这里是属于第二次管理的。为什么会有两次：</p><ul><li>硬盘的多层管理： <ul><li>如：不同的电脑、不同的磁盘。前者第一层，后者第二层。</li></ul></li><li>格式的多层管理： <ul><li>如：处理各种格式 (3D/Plant/Video/...) 工具的 (软件/文档/教程/项目/...)。 后者属于第一层格式，前者是第二层格式。</li><li>如：而且格式可能有嵌套，如一个泛用格式管理软件 &gt; 文档管理软件 &gt; md/论文管理软件</li><li>格式一层，通常叫管理层。格式二层，通常叫处理层，也叫Er层 (processor的意思)。而Er层又有两层结构，所以我记为Er2层。</li></ul></li><li>权限的多层管理： <ul><li>如：根据不同项目组 (技术/财务/销售/...) 有不同的权限，每个项目组中的人员 (组长/组员/...) 又有不同的权限。</li></ul></li></ul><p>不过硬盘和权限都可以扁平化，而非嵌套化。通常多层情况还是格式比较多。</p><h2 id="分类树" tabindex="-1"><a class="header-anchor" href="#分类树"><span>分类树</span></a></h2><p>前四层名字：</p>',24),t("div",{class:"ab-note drop-shadow"},[t("table",{class:"ab-table ab-list-table ab-table-folder"},[t("tbody",null,[t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"硬盘层")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"管理层")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"隐私层")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Er层")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"4",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Er子层 (根据Er层有所不同)/")])])])])])])],-1),t("h3",{id:"前三层结构-根据big3",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#前三层结构-根据big3"},[t("span",null,"前三层结构 (根据Big3)")])],-1),t("p",null,"(括号路径为虚拟路径)",-1),t("div",{class:"ab-note drop-shadow"},[t("table",{class:"ab-table ab-list-table ab-table-folder"},[t("tbody",null,[t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"系统盘")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"系统")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"ResDefault")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div")])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"如果空间不够可以移至主盘中")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"主盘")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div")])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("em",null,"特点：未归档、热资源")])])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Soft")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"软件")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("em",null,"特点：不用归档")])])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"SoftDev")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"生产力分类")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"SoftIO")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"IO分类")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"SoftOther")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"其他分类")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"ResGit")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"工程")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[r("可能包括不使用Git管理的工程 "),t("em",null,"特点：需要归档")])])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Private")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"私有")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Public")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"公有")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Work")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"特定权限")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"ResDefault")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"默认下载/存储的资源")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[r("归档过的资源都应该属于冷数据。 附加：注意这里需要将默认保存放在这 "),t("em",null,"特点：需要归档")])])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Private")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("s",null,"Public")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div")])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"很少会有，几乎强制为Private")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("s",null,"Work")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div")])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"很少会有，几乎强制为Private")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"备份盘")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div")])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("em",null,"特点：已归档、冷资源"),r("。如果需要热运行，那么应该拷贝一份 (除非是txt查看编辑这类低消耗工作)")])])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"ResInstaller")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"(软件网) 安装器")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"包括 软件、系统。虽然一般都是公有权限，但为了一致性，还是要分的")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Private")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Public")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Work")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"ResGit")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"(Github网)")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"同上")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Private")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Public")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Work")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"ResNormal")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"(资源网)")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Private")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Public")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Work")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"ResRetrieval_Billfish")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"(图片网)")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"ResTutorial")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"(教程网)")])])])])])])],-1),t("h3",{id:"第四、五层结构-根据er2",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#第四、五层结构-根据er2"},[t("span",null,"第四、五层结构 (根据Er2)")])],-1),t("p",null,"以软件/软件安装器路径为例 (括号路径为虚拟路径)",-1),t("div",{class:"ab-note drop-shadow"},[t("table",{class:"ab-table ab-list-table ab-table-folder"},[t("tbody",null,[t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"(硬件层)")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"(管理层)")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"仅以Soft/ResInstall为例")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"(隐私层)")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Private/Public/Work")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"(Er层)")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Editor")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"特点：1. 按性能类型分类, 2. 可编辑")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"4",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"3D")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"4",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Dev")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"4",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Doc")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"4",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Mix")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"4",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Plane")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"4",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Video")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"4",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"VIrtual")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"4",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Voice")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Viewer")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"特点：1. 重视内容而非性能, 按记录内容分类, 2. 一般是只读")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"4",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"InfoDoc")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"4",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"InfoTeach")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Other")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"特点：仅使用，或一些抽象的东西")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"4",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"IO")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"5",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"...")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"4",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"社交软件/资料")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"4",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"游戏")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"4",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,".../")])])])])])])],-1),l('<p>第四层往后就不统一了，前四层统一</p><h2 id="宏观扩展" tabindex="-1"><a class="header-anchor" href="#宏观扩展"><span>宏观扩展</span></a></h2><p>优先级：软件 &gt; 普通资源</p><h3 id="软件部分" tabindex="-1"><a class="header-anchor" href="#软件部分"><span>软件部分</span></a></h3><ul><li>普通软件 <ul><li>这个就不用解释了吧</li></ul></li><li>软件环境 <ul><li>编程环境等，本质上也是一些可运行文件加资源文件的集合，也是数据+算法。本质是软件</li></ul></li><li>软件插件/脚本 <ul><li>普通软件可能依赖于系统、也可能依赖于环境/软件、而插件依赖于软件。其实原理都是一样的</li><li>软件可以将外部依赖包装起来，插件本身也有可能这么做而做成独立软件。所以本质是一样的</li><li>软件不一定强依赖特点系统 (多平台软件)，插件也不一定强依赖特点软件 (多软件通用插件)</li></ul></li><li>系统/虚拟系统 <ul><li>系统算软件，虚拟系统是可以在系统的层级上进行安装的，从这点看他是软件</li><li>VMWare的VM镜像。这玩意会在使用过程中自编辑，所以本质是软件，无法当成文件冷资源看待</li><li>DockerFile和Vagrant。虽然单文件本身不算，但我可以把他们理解成一个指向系统iso的网页链接，所以本质也是软件</li></ul></li><li>工作区与软件缓存 <ul><li>Installer没有这部分，这部分是专门针对安装后的Soft路径写的</li><li>指运行中的软件的一些缓存路径等，应该放在软件的文件夹中。考量是：这些东西会随着软件的运行自修改，且不随人为意志不可控地进行 (工作区看情况，没有运行热更新的也可以不放在软件路径中)</li></ul></li></ul><h3 id="资源部分" tabindex="-1"><a class="header-anchor" href="#资源部分"><span>资源部分</span></a></h3><p>略</p><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h2><p>.billfish和.obsidian虽然包含一部分缓存，但感觉无伤大雅，不算热资源。 一方面应该都是小缓存，另一方面应该是针对库的缓存，而不是软件缓存，后者应该还是在软件文件夹或C盘。</p>',9)]))}const c=o(a,[["render",d],["__file","文件分类系统V2024.html.vue"]]),u=JSON.parse('{"path":"/MdNote_Public/02.%20SubjectAndKnowledge/12.%20%E7%AE%A1%E7%90%86%E5%AD%A6%E3%80%81%E5%88%86%E7%B1%BB%E5%AD%A6/%E5%88%86%E7%B1%BB%E5%AD%A6/%E6%96%87%E4%BB%B6%E5%88%86%E7%B1%BB%E7%B3%BB%E7%BB%9F/%E6%96%87%E4%BB%B6%E5%88%86%E7%B1%BB%E7%B3%BB%E7%BB%9FV2024.html","title":"文件分类系统2024","lang":"zh-CN","frontmatter":{"description":"文件分类系统2024 这里只是记录 “增添” 的部分，以及 “重要” 的部分，其实部分延续之前分类系统习惯。 分类原则 Big3部分 基于V5版本有些改进，也是我分类系统的最重要的原则之一 更新日志 V5中的旧定义 Big3 在之前 ThreeRoot (见分类原则笔记) 中的定义是：性能、管理、隐私 2024版的定义的不同，给出了更多的层次： Big...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/02.%20SubjectAndKnowledge/12.%20%E7%AE%A1%E7%90%86%E5%AD%A6%E3%80%81%E5%88%86%E7%B1%BB%E5%AD%A6/%E5%88%86%E7%B1%BB%E5%AD%A6/%E6%96%87%E4%BB%B6%E5%88%86%E7%B1%BB%E7%B3%BB%E7%BB%9F/%E6%96%87%E4%BB%B6%E5%88%86%E7%B1%BB%E7%B3%BB%E7%BB%9FV2024.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"文件分类系统2024"}],["meta",{"property":"og:description","content":"文件分类系统2024 这里只是记录 “增添” 的部分，以及 “重要” 的部分，其实部分延续之前分类系统习惯。 分类原则 Big3部分 基于V5版本有些改进，也是我分类系统的最重要的原则之一 更新日志 V5中的旧定义 Big3 在之前 ThreeRoot (见分类原则笔记) 中的定义是：性能、管理、隐私 2024版的定义的不同，给出了更多的层次： Big..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"文件分类系统2024\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"文件分类系统2024","slug":"文件分类系统2024","link":"#文件分类系统2024","children":[{"level":2,"title":"分类原则","slug":"分类原则","link":"#分类原则","children":[{"level":3,"title":"Big3部分","slug":"big3部分","link":"#big3部分","children":[{"level":4,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":4,"title":"Big3细分","slug":"big3细分","link":"#big3细分","children":[]},{"level":4,"title":"优先级","slug":"优先级","link":"#优先级","children":[]},{"level":4,"title":"参考一些编程框架","slug":"参考一些编程框架","link":"#参考一些编程框架","children":[]}]},{"level":3,"title":"Er2部分","slug":"er2部分","link":"#er2部分","children":[{"level":4,"title":"二次管理","slug":"二次管理","link":"#二次管理","children":[]}]}]},{"level":2,"title":"分类树","slug":"分类树","link":"#分类树","children":[{"level":3,"title":"前三层结构 (根据Big3)","slug":"前三层结构-根据big3","link":"#前三层结构-根据big3","children":[]},{"level":3,"title":"第四、五层结构 (根据Er2)","slug":"第四、五层结构-根据er2","link":"#第四、五层结构-根据er2","children":[]}]},{"level":2,"title":"宏观扩展","slug":"宏观扩展","link":"#宏观扩展","children":[{"level":3,"title":"软件部分","slug":"软件部分","link":"#软件部分","children":[]},{"level":3,"title":"资源部分","slug":"资源部分","link":"#资源部分","children":[]}]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":8.16,"words":2448},"filePathRelative":"MdNote_Public/02. SubjectAndKnowledge/12. 管理学、分类学/分类学/文件分类系统/文件分类系统V2024.md","excerpt":"\\n<p>这里只是记录 “增添” 的部分，以及 “重要” 的部分，其实部分延续之前分类系统习惯。</p>\\n<h2>分类原则</h2>\\n<h3>Big3部分</h3>\\n<p>基于V5版本有些改进，也是我分类系统的最重要的原则之一</p>\\n<h4>更新日志</h4>\\n<p>V5中的旧定义</p>\\n<blockquote>\\n<p>Big3 在之前 ThreeRoot (见分类原则笔记) 中的定义是：性能、管理、隐私</p>\\n</blockquote>\\n<p>2024版的定义的不同，给出了更多的层次：</p>\\n<div class=\\"ab-note drop-shadow\\"><table class=\\"ab-table ab-list-table\\"><tbody><tr class=\\"ab-foldable-tr\\" tr_level=\\"0\\" is_fold=\\"false\\" able_fold=\\"true\\" type=\\"文件Big3\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 0\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>文件Big3</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"1\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"分类\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 1\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>分类</p>\\n</div></div></td><td rowspan=\\"1\\"><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>硬盘、(编码)格式、(编码)加密</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"1\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"特点\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 2\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>特点</p>\\n</div></div></td><td rowspan=\\"1\\"><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>当一个文件被存储到你的电脑后，该文件自身就拥有这三种特性，不随人为意志改变。\\n比如说一个文件认为是隐私还是公开，可以在一念之间被修改。但他是否加密，则是客观事实。</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"0\\" is_fold=\\"false\\" able_fold=\\"true\\" type=\\"影响Big3\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 3\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>影响Big3</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"1\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"分类\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 4\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>分类</p>\\n</div></div></td><td rowspan=\\"1\\"><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>性能、管理、隐私</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"1\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"特点\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 5\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>特点</p>\\n</div></div></td><td rowspan=\\"1\\"><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>这些是抽象的概念，根据打开的方式和处理软件的默认行为不同，特点不同。\\n比如说在某个弱加密软件中某文件属于隐私，但在电脑的资源管理器中你能直接打开看到。</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"0\\" is_fold=\\"false\\" able_fold=\\"true\\" type=\\"软件Big3\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 6\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>软件Big3</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"1\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"分类\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 7\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>分类</p>\\n</div></div></td><td rowspan=\\"1\\"><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>分区管理软件、专项管理软件、加密管理软件</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"1\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"特点\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 8\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>特点</p>\\n</div></div></td><td rowspan=\\"1\\"><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>这里才是对分类系统有指导意义的三类</p>\\n</div></div></td></tr></tbody></table></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/02. SubjectAndKnowledge/12. 管理学、分类学/分类学/文件分类系统/文件分类系统V2024.md","value":{"title":"文件分类系统V2024","path":"MdNote_Public/02. SubjectAndKnowledge/12. 管理学、分类学/分类学/文件分类系统/文件分类系统V2024.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{c as comp,u as data};

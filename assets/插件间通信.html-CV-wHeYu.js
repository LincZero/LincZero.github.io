import{_ as i,e as n,g as l,f as t,k as e,o as r}from"./app-BT9C1UAp.js";const a={};function o(d,s){return r(),n("div",null,s[0]||(s[0]=[l(`<h1 id="插件间通信" tabindex="-1"><a class="header-anchor" href="#插件间通信"><span>插件间通信</span></a></h1><h2 id="可供参考的插件-文档" tabindex="-1"><a class="header-anchor" href="#可供参考的插件-文档"><span>可供参考的插件/文档</span></a></h2><p>这里对之前调研的方式做一些归纳，以及补充</p><p>提前总结：</p><p>（结合我接下来要做的一个东西的选型，他们各自都有一些缺点）</p><ul><li>事件注册方式、渲染驱动方式：拿不到返回值</li><li>全局状态方式：不够灵活，能分享的内容有限</li><li>http方式、app.plugins.plugins方式：需要对方插件的配合</li></ul><h3 id="http方式" tabindex="-1"><a class="header-anchor" href="#http方式"><span>Http方式</span></a></h3><p>这里有两个可供参考的插件：</p><ul><li>Local Rest API</li><li>APIRequest</li></ul><p>这两个插件我会在后面进行剖析、原理分析</p><h3 id="事件注册方式" tabindex="-1"><a class="header-anchor" href="#事件注册方式"><span>事件注册方式</span></a></h3><p>注册命令</p><h3 id="渲染驱动" tabindex="-1"><a class="header-anchor" href="#渲染驱动"><span>渲染驱动</span></a></h3><p><code>MarkdownRender()</code> 方法</p><p>可以参考 https://any-block.github.io/obsidian-any-block/docs/zh/05.%20%E7%B2%BE%E5%BD%A9%E7%94%A8%E4%BE%8B.html 里的一些例子</p><h3 id="全局状态方式" tabindex="-1"><a class="header-anchor" href="#全局状态方式"><span>全局状态方式</span></a></h3><p>暂时不研究，因为不打算使用这种方式。</p><p>全局状态一般只适合分享一些比较小且固定、预定好的几个状态变量，不满足我的当前需求。</p><h3 id="app-plugins-plugins-获取其他插件实例" tabindex="-1"><a class="header-anchor" href="#app-plugins-plugins-获取其他插件实例"><span>app.plugins.plugins 获取其他插件实例</span></a></h3><h4 id="各插件提供的api" tabindex="-1"><a class="header-anchor" href="#各插件提供的api"><span>各插件提供的API</span></a></h4><p>参考：obsidian 群的 Moy 群友</p><ul><li>Templater：<br><code>app.plugins.plugins[&quot;templater-obsidian&quot;].templater.current_functions_object</code></li><li>TP 中调用 Obsidian 的 API：<br><code>tp.obsidian</code></li><li><a href="https://blacksmithgu.github.io/obsidian-dataview/api/intro/" target="_blank" rel="noopener noreferrer">Dataview</a>：<br><code>app.plugins.plugins.dataview.api</code></li><li>QuickAdd：<br><code>this.quickAddApi</code></li><li>Metaedit：<br><code>app.plugins.plugins[&quot;metaedit&quot;].api</code><br> （来自 QuickAdd 的<a href="https://quickadd.obsidian.guide/docs/Choices/MacroChoice" target="_blank" rel="noopener noreferrer">文档</a>）</li></ul><h4 id="注册api" tabindex="-1"><a class="header-anchor" href="#注册api"><span>注册api</span></a></h4><p>那么这些插件是如何注册api的呢？</p><p>见后面dataview的分析</p><h2 id="参考插件深入剖析" tabindex="-1"><a class="header-anchor" href="#参考插件深入剖析"><span>参考插件深入剖析</span></a></h2><h3 id="dataview-原理分析" tabindex="-1"><a class="header-anchor" href="#dataview-原理分析"><span>dataview - 原理分析</span></a></h3><p>参考: https://github.com/blacksmithgu/obsidian-dataview/blob/6d9030ef1df9c3f310f42e3502149dc71792dc4d/src/main.ts#L59</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> DataviewPlugin</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Plugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  public</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> api</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> DataviewApi</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">   async</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> onload</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // From this point onwards the dataview API is fully functional (even if the index needs to do some background indexing).</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">api</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> DataviewApi</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">index</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">settings</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">manifest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // Register API to global window object.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    (</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;DataviewAPI&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">api</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&amp;&amp;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">register</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;"> delete</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;DataviewAPI&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="local-rest-api-插件" tabindex="-1"><a class="header-anchor" href="#local-rest-api-插件"><span>Local Rest API - 插件</span></a></h3><ul><li>接收外部的http请求，以执行一些操作。可用于自动化</li><li>github: https://github.com/coddingtonbear/obsidian-local-rest-api star 712</li><li>其文档: https://coddingtonbear.github.io/obsidian-local-rest-api/</li></ul><h3 id="local-rest-api-原理分析" tabindex="-1"><a class="header-anchor" href="#local-rest-api-原理分析"><span>Local Rest API - 原理分析</span></a></h3><ul><li></li></ul><h3 id="apirequest-插件" tabindex="-1"><a class="header-anchor" href="#apirequest-插件"><span>APIRequest - 插件</span></a></h3><ul><li>发送http请求到外部，并获取响应值</li><li>官网 <ul><li>github: https://github.com/Rooyca/obsidian-api-request star 126</li><li>文档: https://rooyca.github.io/obsidian-api-request/</li></ul></li><li>我的fork (中文注释) <ul><li>github: https://github.dev/LincDemo/obsidian-api-request</li><li>文档: https://lincdocs.github.io/obsidian-api-request/</li></ul></li></ul><h3 id="apirequest-原理分析" tabindex="-1"><a class="header-anchor" href="#apirequest-原理分析"><span>APIRequest - 原理分析</span></a></h3><p>（部分在 <a href="https://github.com/LincDemo/obsidian-api-request/tree/master" target="_blank" rel="noopener noreferrer">注释fork</a> 中）</p>`,37),t("div",{class:"ab-note drop-shadow"},[t("table",{class:"ab-table ab-list-table ab-table-folder"},[t("tbody",null,[t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,".github")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"docs")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"src")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"functions")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"js",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"HtmlSanitizer.js")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"ts ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"frontmatterUtils.ts")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"解析前辅文")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"ts          ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"general.ts")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"通用函数")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"js          ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"mdparse.js")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"简易的md解析")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"ts",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"regx.ts")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"settings")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"ts ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"settingsData.ts")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"设置项定义")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"ts  ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"settingsTab.ts")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"设置菜单，class APRSettings extends PluginSettingTab")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"ts           ",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"main.ts")])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"核心")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"(some files)")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"md",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"README.md")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"md",onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"README.es.md")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:`md
`,onclick:`
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
        `},[t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"README.zh.md")])])])])]),t("button",{class:"ab-table-fold",is_fold:"false"},"全部折叠/展开")])],-1),l(`<p>依赖 (package.json)，并没有使用什么特别的库</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;devDependencies&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;@types/node&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;^16.11.6&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;@typescript-eslint/eslint-plugin&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;^5.59.2&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;@typescript-eslint/parser&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;5.29.0&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;builtin-modules&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;3.3.0&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;esbuild&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;0.17.3&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;obsidian&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;latest&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;tslib&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.4.0&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;typescript&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;4.7.4&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要流程：</p><ul><li>都在 <code>main.ts</code> 中，注册代码块类型，回调使用异步回调，回调时： <ol><li>解析代码块</li><li>http请求并获得响应 (<code>responseData = await requestUrl(...)</code>，这个是ob自己提供的方法，所以不需要其他依赖。如果你的插件要跨平台，需要写一个可以适配的方法)</li><li>渲染响应和保留结果 (if isRender, if isSaveTo)</li></ol></li></ul><h2 id="gpt调研-旧" tabindex="-1"><a class="header-anchor" href="#gpt调研-旧"><span>GPT调研 - 旧</span></a></h2><p>kimi gpt:</p><div class="hint-container note"><p class="hint-container-title">注</p><p>Obsidian 插件之间可以互相通信，但需要通过一定的方法和 API 来实现。以下是一些相关的方法和 API：</p><h3 id="直接插件间通信" tabindex="-1"><a class="header-anchor" href="#直接插件间通信"><span>直接插件间通信</span></a></h3><ul><li><strong>插件 API</strong>：Obsidian 提供了一个插件 API，允许插件之间进行通信和交互。插件可以通过 API 访问其他插件的功能和数据。例如，插件可以注册命令、监听事件、访问其他插件的状态等- 。</li><li><strong>插件状态共享</strong>：插件可以将数据存储在 Obsidian 的全局状态中，其他插件可以访问和修改这些状态。这样，不同插件之间可以共享数据，实现通信。</li></ul><h3 id="通过外部api通信" tabindex="-1"><a class="header-anchor" href="#通过外部api通信"><span>通过外部API通信</span></a></h3><ul><li><strong>Local REST API 插件</strong>：这个插件为 Obsidian 提供了一个本地的 REST API 服务，允许外部工具和插件通过 HTTP 请求与 Obsidian 进行交互。例如，一个插件可以通过发送 HTTP 请求调用另一个插件提供的 API，实现功能的调用和数据的交换- 。</li><li><strong>APIRequest 插件</strong>：这个插件允许 Obsidian 向外部 API 发送请求，并以 JSON 块或 Obsidian 变量的格式接收响应。插件之间可以通过调用外部 API 来实现间接的通信和数据交换。</li></ul><h3 id="通过事件监听通信" tabindex="-1"><a class="header-anchor" href="#通过事件监听通信"><span>通过事件监听通信</span></a></h3><ul><li><strong>事件系统</strong>：Obsidian 的插件 API 提供了一个事件系统，插件可以监听和触发各种事件。例如，一个插件可以触发一个自定义事件，另一个插件监听该事件并执行相应的操作。通过这种方式，插件之间可以实现基于事件的通信。</li></ul><h3 id="通过插件扩展通信" tabindex="-1"><a class="header-anchor" href="#通过插件扩展通信"><span>通过插件扩展通信</span></a></h3><ul><li><strong>编辑器扩展</strong>：对于编辑器相关的插件，可以通过扩展 Obsidian 的编辑器来实现通信。例如，一个插件可以创建一个编辑器扩展，并通过该扩展与其他插件进行交互。</li></ul><p>总之，Obsidian 插件之间可以通过插件 API、外部 API、事件系统和插件扩展等多种方式实现互相通信。开发者可以根据具体的需求和场景选择合适的方法来实现插件之间的通信和协作</p></div><p>后来又问了一遍</p><div class="hint-container note"><p class="hint-container-title">注</p><p>在Obsidian中，插件之间可以通过以下几种方式实现通信：</p><h3 id="_1-使用事件系统" tabindex="-1"><a class="header-anchor" href="#_1-使用事件系统"><span>1. 使用事件系统</span></a></h3><p>Obsidian的API提供了一个事件系统，插件可以注册监听特定的事件，也可以触发事件。当一个插件触发事件时，其他插件可以监听到这个事件并作出相应的响应</p><ul><li><strong>注册事件监听器</strong>：插件可以注册一个事件监听器，当特定事件发生时，执行相应的回调函数。</li><li><strong>触发事件</strong>：插件可以在适当的时候触发一个事件，通知其他插件某个动作已经发生或即将发生。</li></ul><h3 id="_2-使用插件api" tabindex="-1"><a class="header-anchor" href="#_2-使用插件api"><span>2. 使用插件API</span></a></h3><p>Obsidian的API为插件提供了许多可以调用的方法和属性，插件可以通过这些API与其他插件进行通信。</p><ul><li><strong>获取插件实例</strong>：插件可以通过API获取其他插件的实例，然后调用这些插件提供的方法或访问其属性。</li><li><strong>调用插件方法</strong>：如果一个插件公开了一些方法，其他插件可以直接调用这些方法来实现通信。</li></ul><h3 id="_3-使用全局状态" tabindex="-1"><a class="header-anchor" href="#_3-使用全局状态"><span>3. 使用全局状态</span></a></h3><p>Obsidian提供了一些全局状态，插件可以读取或修改这些状态，从而实现插件之间的通信。</p><ul><li><strong>读取全局状态</strong>：插件可以读取全局状态中的数据，了解其他插件的状态或行为。</li><li><strong>修改全局状态</strong>：插件可以修改全局状态，其他插件可以通过监听状态的变化来做出响应。</li></ul><h3 id="_4-使用插件之间的协议" tabindex="-1"><a class="header-anchor" href="#_4-使用插件之间的协议"><span>4. 使用插件之间的协议</span></a></h3><p>一些插件可能会定义自己的通信协议，其他插件可以通过遵循这些协议来实现通信。</p><ul><li><strong>定义协议</strong>：一个插件可以定义一套通信协议，包括数据格式、通信方式等。</li><li><strong>遵循协议</strong>：其他插件在与该插件通信时，需要遵循其定义的协议。</li></ul><h3 id="_5-使用http-api接口" tabindex="-1"><a class="header-anchor" href="#_5-使用http-api接口"><span>5. 使用HTTP API接口</span></a></h3><p>对于一些需要与其他系统或插件进行复杂通信的场景，插件可以通过HTTP API接口实现。</p><ul><li><strong>提供API接口</strong>：插件可以提供HTTP API接口，其他插件或系统可以通过这些接口发送请求。</li><li><strong>调用API接口</strong>：插件可以调用其他插件提供的HTTP API接口，获取数据或触发动作。</li></ul><p>通过以上几种方式，Obsidian的插件之间可以实现灵活的通信，从而扩展和增强Obsidian的功能。开发者可以根据具体的需求和场景选择合适的通信方式。</p></div>`,9)]))}const c=i(a,[["render",o],["__file","插件间通信.html.vue"]]),h=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Type/Doc/MarkdwonAbout/01.%20Soft%20And%20Frame/Obsidian/%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%8F%92%E4%BB%B6%E9%97%B4%E9%80%9A%E4%BF%A1.html","title":"插件间通信","lang":"zh-CN","frontmatter":{"create_time":"2025-01-14T00:00:00.000Z","Author":"LincZero","description":"插件间通信 可供参考的插件/文档 这里对之前调研的方式做一些归纳，以及补充 提前总结： （结合我接下来要做的一个东西的选型，他们各自都有一些缺点） 事件注册方式、渲染驱动方式：拿不到返回值 全局状态方式：不够灵活，能分享的内容有限 http方式、app.plugins.plugins方式：需要对方插件的配合 Http方式 这里有两个可供参考的插件： L...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Type/Doc/MarkdwonAbout/01.%20Soft%20And%20Frame/Obsidian/%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91/%E6%8F%92%E4%BB%B6%E9%97%B4%E9%80%9A%E4%BF%A1.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"插件间通信"}],["meta",{"property":"og:description","content":"插件间通信 可供参考的插件/文档 这里对之前调研的方式做一些归纳，以及补充 提前总结： （结合我接下来要做的一个东西的选型，他们各自都有一些缺点） 事件注册方式、渲染驱动方式：拿不到返回值 全局状态方式：不够灵活，能分享的内容有限 http方式、app.plugins.plugins方式：需要对方插件的配合 Http方式 这里有两个可供参考的插件： L..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"插件间通信\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"git":{},"readingTime":{"minutes":6.51,"words":1954},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Doc/MarkdwonAbout/01. Soft And Frame/Obsidian/插件开发/插件间通信.md","excerpt":"\\n<h2>可供参考的插件/文档</h2>\\n<p>这里对之前调研的方式做一些归纳，以及补充</p>\\n<p>提前总结：</p>\\n<p>（结合我接下来要做的一个东西的选型，他们各自都有一些缺点）</p>\\n<ul>\\n<li>事件注册方式、渲染驱动方式：拿不到返回值</li>\\n<li>全局状态方式：不够灵活，能分享的内容有限</li>\\n<li>http方式、app.plugins.plugins方式：需要对方插件的配合</li>\\n</ul>\\n<h3>Http方式</h3>\\n<p>这里有两个可供参考的插件：</p>\\n<ul>\\n<li>Local Rest API</li>\\n<li>APIRequest</li>\\n</ul>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Doc/MarkdwonAbout/01. Soft And Frame/Obsidian/插件开发/插件间通信.md","value":{"title":"插件间通信","path":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Doc/MarkdwonAbout/01. Soft And Frame/Obsidian/插件开发/插件间通信.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{c as comp,h as data};

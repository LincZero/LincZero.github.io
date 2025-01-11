import{_ as o,c as a,a as n,d as e,f as s,e as l,o as i}from"./app-DaW0uU2l.js";const r={};function c(p,t){return i(),a("div",null,t[0]||(t[0]=[n("h1",{id:"devcontainer",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#devcontainer"},[n("span",null,".devcontainer/")])],-1),n("p",null,[e("文件夹名是 "),n("code",null,".devcontainer"),e("，用于控制 vscode 的 codespace")],-1),n("p",null,"文件夹结构内容通常如下：",-1),n("div",{class:"ab-note drop-shadow"},[n("table",{class:"ab-table ab-list-table ab-table-folder"},[n("tbody",null,[n("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-svg"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),n("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,".devcontainer")])])])]),n("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:`json
`,onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-svg"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),n("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"devcontainer.json")])])])])]),n("button",{class:"ab-table-fold",is_fold:"false"},"全部折叠/展开")])],-1),l(`<h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo"><span>demo</span></a></h2><p>参考： https://github.com/nolebase/integrations/blob/main/.devcontainer/devcontainer.json</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token comment">// For format details, see https://aka.ms/devcontainer.json. For config options, see the</span>
<span class="token comment">// README at: https://github.com/devcontainers/templates/tree/main/src/typescript-node</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nolebase-integrations&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// Or use a Dockerfile or Docker Compose file. More info: https://containers.dev/guide/dockerfile</span>
  <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// Features to add to the dev container. More info: https://containers.dev/features.</span>
  <span class="token property">&quot;features&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ghcr.io/devcontainers-contrib/features/pnpm:2&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// Use &#39;forwardPorts&#39; to make a list of ports inside the container available locally.</span>
  <span class="token property">&quot;forwardPorts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">5173</span><span class="token punctuation">,</span> <span class="token number">4173</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;portsAttributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;5173&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dev port&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;4173&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;build port&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// Use &#39;postCreateCommand&#39; to run commands after the container is created.</span>
  <span class="token property">&quot;postCreateCommand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pnpm i&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">//   &quot;postStartCommand&quot;: &quot;pnpm docs:dev&quot;,</span>

  <span class="token comment">// Configure tool-specific properties.</span>
  <span class="token property">&quot;customizations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;vscode&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// Set *default* container specific settings.json values on container create.</span>
      <span class="token property">&quot;extensions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;streetsidesoftware.code-spell-checker&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;mikestead.dotenv&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;EditorConfig.EditorConfig&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;usernamehw.errorlens&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;dbaeumer.vscode-eslint&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;antfu.goto-alias&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;lokalise.i18n-ally&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;antfu.iconify&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;yzhang.markdown-all-in-one&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;antfu.unocss&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Vue.volar&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;vitest.explorer&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;redhat.vscode-yaml&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;codespaces&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;openFiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;./README.md&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Uncomment to connect as root instead. More info: https://aka.ms/dev-containers-non-root.</span>
  <span class="token comment">// &quot;remoteUser&quot;: &quot;root&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const u=o(r,[["render",c],["__file","devcontainer.html.vue"]]),v=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/02.%20%E5%A4%9A%E6%96%87%E4%BB%B6%E5%A4%9A%E7%9B%AE%E5%BD%95%E7%AE%A1%E7%90%86/%E8%BE%85%E5%8A%A9%E6%96%87%E4%BB%B6/%E5%B9%B3%E5%8F%B0%E9%85%8D%E7%BD%AE/devcontainer.html","title":".devcontainer/","lang":"zh-CN","frontmatter":{"create_time":"2025-01-09T00:00:00.000Z","Author":"LincZero","description":".devcontainer/ 文件夹名是 .devcontainer，用于控制 vscode 的 codespace 文件夹结构内容通常如下： 全部折叠/展开demo 参考： https://github.com/nolebase/integrations/blob/main/.devcontainer/devcontainer.json","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/01.%20DesignAndDevelop/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/02.%20%E5%A4%9A%E6%96%87%E4%BB%B6%E5%A4%9A%E7%9B%AE%E5%BD%95%E7%AE%A1%E7%90%86/%E8%BE%85%E5%8A%A9%E6%96%87%E4%BB%B6/%E5%B9%B3%E5%8F%B0%E9%85%8D%E7%BD%AE/devcontainer.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":".devcontainer/"}],["meta",{"property":"og:description","content":".devcontainer/ 文件夹名是 .devcontainer，用于控制 vscode 的 codespace 文件夹结构内容通常如下： 全部折叠/展开demo 参考： https://github.com/nolebase/integrations/blob/main/.devcontainer/devcontainer.json"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\".devcontainer/\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":".devcontainer/","slug":"devcontainer","link":"#devcontainer","children":[{"level":2,"title":"demo","slug":"demo","link":"#demo","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.67,"words":201},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Develop/03. Tools/02. 管理层/02. 多文件多目录管理/辅助文件/平台配置/devcontainer.md","excerpt":"\\n<p>文件夹名是 <code>.devcontainer</code>，用于控制 vscode 的 codespace</p>\\n<p>文件夹结构内容通常如下：</p>\\n<div class=\\"ab-note drop-shadow\\"><button class=\\"ab-table-fold\\" is_fold=\\"false\\">全部折叠/展开</button><table class=\\"ab-table ab-list-table ab-table-folder\\"><tbody><tr class=\\"ab-foldable-tr\\" tr_level=\\"0\\" is_fold=\\"false\\" able_fold=\\"true\\" type=\\"folder\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 0\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>.devcontainer</p>\\n</div></div></td></tr><tr class=\\"ab-foldable-tr\\" tr_level=\\"1\\" is_fold=\\"false\\" able_fold=\\"false\\" type=\\"json\\n\\" onclick=\\"\\n          const tr = this\\n          const l_tr = tr.parentNode.querySelectorAll(&quot;tr&quot;)\\n          const i = 1\\n          const tr_level = Number(tr.getAttribute(&quot;tr_level&quot;))\\n          if (isNaN(tr_level)) return\\n          const tr_isfold = tr.getAttribute(&quot;is_fold&quot;)\\n          if (!tr_isfold) return\\n          let flag_do_fold = false  // 防止折叠最小层\\n          for (let j=i+1; j<l_tr.length; j++){\\n            const tr2 = l_tr[j]\\n            const tr_level2 = Number(tr2.getAttribute(&quot;tr_level&quot;))\\n            if (isNaN(tr_level2)) break\\n            if (tr_level2<=tr_level) break\\n            (tr_isfold == &quot;true&quot;) ? tr2.style.display = &quot;&quot; : tr2.style.display = &quot;none&quot;\\n            flag_do_fold = true\\n          }\\n          if (flag_do_fold) tr.setAttribute(&quot;is_fold&quot;, tr_isfold==&quot;true&quot;?&quot;false&quot;:&quot;true&quot;)\\n        \\"><td rowspan=\\"1\\"><div class=\\"ab-list-table-svg\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 384 512\\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\\"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z\\"></path></svg></div><div class=\\"ab-list-table-witharrow markdown-rendered\\"><div><p>devcontainer.json</p>\\n</div></div></td></tr></tbody></table></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/01. DesignAndDevelop/Develop/03. Tools/02. 管理层/02. 多文件多目录管理/辅助文件/平台配置/devcontainer.md","value":{"title":"devcontainer","path":"MdNote_Public/01. DesignAndDevelop/Develop/03. Tools/02. 管理层/02. 多文件多目录管理/辅助文件/平台配置/devcontainer.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{u as comp,v as data};

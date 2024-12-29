import{_ as a,c as e,e as o,a as n,f as s,o as l}from"./app-DUNc33_O.js";const r={};function i(p,t){return l(),e("div",null,t[0]||(t[0]=[o(`<h1 id="vagrant批量创建虚拟机" tabindex="-1"><a class="header-anchor" href="#vagrant批量创建虚拟机"><span>Vagrant批量创建虚拟机</span></a></h1><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>Vagrant<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span> <span class="token keyword">do</span> <span class="token operator">|</span>config<span class="token operator">|</span>

  config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>box <span class="token operator">=</span> <span class="token string">&quot;ubuntu/jammy64&quot;</span>
  
  <span class="token punctuation">(</span><span class="token number">1.</span><span class="token number">.3</span><span class="token punctuation">)</span><span class="token punctuation">.</span>each <span class="token keyword">do</span> <span class="token operator">|</span>i<span class="token operator">|</span>
    config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>define <span class="token string">&quot;node-#{i}&quot;</span> <span class="token keyword">do</span> <span class="token operator">|</span>node<span class="token operator">|</span>
      node<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>provision <span class="token string">&quot;shell&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">inline</span><span class="token operator">:</span> <span class="token string">&quot;echo hello from node #{i}&quot;</span>
    end
  end
  
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以通过数组来定义多个虚拟机的配置。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>vm_list <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> # hash map
    <span class="token string">&quot;name&quot;</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;node-1&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;cpu&quot;</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;mem&quot;</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;2048&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;ip_addr&quot;</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;192.168.56.10&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token string">&quot;name&quot;</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;node-2&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;cpu&quot;</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;mem&quot;</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;1024&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;ip_addr&quot;</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;192.168.56.11&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token string">&quot;name&quot;</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;node-3&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;cpu&quot;</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;mem&quot;</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;1024&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;ip_addr&quot;</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;192.168.56.12&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

Vagrant<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">do</span> <span class="token operator">|</span>config<span class="token operator">|</span>

   config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>box <span class="token operator">=</span> <span class="token string">&quot;ubuntu/jammy64&quot;</span>

   vm_list<span class="token punctuation">.</span>each <span class="token keyword">do</span> <span class="token operator">|</span>item<span class="token operator">|</span>
        config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>define item<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span> <span class="token keyword">do</span> <span class="token operator">|</span>node<span class="token operator">|</span>

            node<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>provider <span class="token string">&quot;virtualbox&quot;</span> <span class="token keyword">do</span> <span class="token operator">|</span>vbox<span class="token operator">|</span>
              vbox<span class="token punctuation">.</span>name <span class="token operator">=</span> item<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  # 虚拟机名称
              vbox<span class="token punctuation">.</span>memory <span class="token operator">=</span> item<span class="token punctuation">[</span><span class="token string">&quot;mem&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> # 内存
              vbox<span class="token punctuation">.</span>cpus <span class="token operator">=</span> item<span class="token punctuation">[</span><span class="token string">&quot;cpu&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>   # <span class="token constant">CPU</span>
            end
            # 设置hostanme
            node<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>hostname <span class="token operator">=</span> item<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span>
            # 设置<span class="token constant">IP</span>
            node<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>network <span class="token string">&quot;private_network&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">ip</span><span class="token operator">:</span> item<span class="token punctuation">[</span><span class="token string">&quot;ip_addr&quot;</span><span class="token punctuation">]</span>

        end
    end

end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令后面加虚拟机的名字，可以单独操作虚拟机：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vagrant up node-1
vagrant <span class="token function">halt</span> node-1
vagrant reload node-1
vagrant destroy node-1
vagrant provision node-1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SSH的私钥也分别存放在.vagrant虚拟机名对应的目录下</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ssh</span> vagrant@192.168.56.10 <span class="token parameter variable">-i</span> .vagrant/machines/k3s-server/virtualbox/private_key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),n("div",{class:"ab-note drop-shadow"},[n("table",{class:"ab-table ab-list-table ab-table-folder"},[n("tbody",null,[n("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-svg"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),n("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,".vagrant")])])])]),n("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-svg"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),n("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"bundler")])])])]),n("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-svg"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),n("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"machines")])])])]),n("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-svg"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),n("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"k3s-agent1")])])]),n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"秘钥")])])])]),n("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-svg"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),n("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"k3s-agent2")])])]),n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"秘钥")])])])]),n("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder",onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-svg"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),n("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"k3s-server")])])]),n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"秘钥")])])])])])])],-1)]))}const u=a(r,[["render",i],["__file","07. 批量创建虚拟机.html.vue"]]),d=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Virtual/%E8%99%9A%E6%8B%9F%E6%9C%BA/Vagrant/%E3%80%8AVagrant%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8%E3%80%8B/07.%20%E6%89%B9%E9%87%8F%E5%88%9B%E5%BB%BA%E8%99%9A%E6%8B%9F%E6%9C%BA.html","title":"Vagrant批量创建虚拟机","lang":"zh-CN","frontmatter":{"description":"Vagrant批量创建虚拟机 我们可以通过数组来定义多个虚拟机的配置。 命令后面加虚拟机的名字，可以单独操作虚拟机： SSH的私钥也分别存放在.vagrant虚拟机名对应的目录下","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/01.%20DesignAndDevelop/Virtual/%E8%99%9A%E6%8B%9F%E6%9C%BA/Vagrant/%E3%80%8AVagrant%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8%E3%80%8B/07.%20%E6%89%B9%E9%87%8F%E5%88%9B%E5%BB%BA%E8%99%9A%E6%8B%9F%E6%9C%BA.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Vagrant批量创建虚拟机"}],["meta",{"property":"og:description","content":"Vagrant批量创建虚拟机 我们可以通过数组来定义多个虚拟机的配置。 命令后面加虚拟机的名字，可以单独操作虚拟机： SSH的私钥也分别存放在.vagrant虚拟机名对应的目录下"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vagrant批量创建虚拟机\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"Vagrant批量创建虚拟机","slug":"vagrant批量创建虚拟机","link":"#vagrant批量创建虚拟机","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.74,"words":222},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Virtual/虚拟机/Vagrant/《Vagrant快速入门》/07. 批量创建虚拟机.md","excerpt":"\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code>Vagrant<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">configure</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"2\\"</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">do</span> <span class=\\"token operator\\">|</span>config<span class=\\"token operator\\">|</span>\\n\\n  config<span class=\\"token punctuation\\">.</span>vm<span class=\\"token punctuation\\">.</span>box <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"ubuntu/jammy64\\"</span>\\n  \\n  <span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1.</span><span class=\\"token number\\">.3</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>each <span class=\\"token keyword\\">do</span> <span class=\\"token operator\\">|</span>i<span class=\\"token operator\\">|</span>\\n    config<span class=\\"token punctuation\\">.</span>vm<span class=\\"token punctuation\\">.</span>define <span class=\\"token string\\">\\"node-#{i}\\"</span> <span class=\\"token keyword\\">do</span> <span class=\\"token operator\\">|</span>node<span class=\\"token operator\\">|</span>\\n      node<span class=\\"token punctuation\\">.</span>vm<span class=\\"token punctuation\\">.</span>provision <span class=\\"token string\\">\\"shell\\"</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token literal-property property\\">inline</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"echo hello from node #{i}\\"</span>\\n    end\\n  end\\n  \\nend\\n</code></pre></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/01. DesignAndDevelop/Virtual/虚拟机/Vagrant/《Vagrant快速入门》/07. 批量创建虚拟机.md","value":{"title":"07. 批量创建虚拟机","path":"MdNote_Public/01. DesignAndDevelop/Virtual/虚拟机/Vagrant/《Vagrant快速入门》/07. 批量创建虚拟机.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{u as comp,d as data};

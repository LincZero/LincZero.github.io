import{_ as s,c as l,b as t,d as a,e as n,o as r}from"./app-CoK3rLoY.js";const i="/assets/image 9-BUON3QE3.webp",o={};function d(c,e){return r(),l("div",null,e[0]||(e[0]=[t(`<h1 id="虚拟机的创建" tabindex="-1"><a class="header-anchor" href="#虚拟机的创建"><span>虚拟机的创建</span></a></h1><h2 id="创建虚拟机" tabindex="-1"><a class="header-anchor" href="#创建虚拟机"><span>创建虚拟机</span></a></h2><h3 id="创建虚拟机方式" tabindex="-1"><a class="header-anchor" href="#创建虚拟机方式"><span>创建虚拟机方式</span></a></h3><p>比如我们要创建ubuntu 22.04的虚拟机，参考官网资料： https://app.vagrantup.com/ubuntu/boxes/jammy64</p><h4 id="方式一-vagrantfile" tabindex="-1"><a class="header-anchor" href="#方式一-vagrantfile"><span>方式一：Vagrantfile</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 1. 创建Vagrantfile文件，并填充内容</span>
<span class="token function">vi</span> Vagrantfile
<span class="token comment"># 然后填入Vagrantfile内容</span>
Vagrant.configure<span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span> <span class="token keyword">do</span> <span class="token operator">|</span>config<span class="token operator">|</span>
  config.vm.box <span class="token operator">=</span> <span class="token string">&quot;ubuntu/jammy64&quot;</span>
end

<span class="token comment"># 2. 使用Vagrant up命令启动</span>
vagrant up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方式二-指定镜像" tabindex="-1"><a class="header-anchor" href="#方式二-指定镜像"><span>方式二：指定镜像</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 1. 便捷地创建预设Vagrantfile文件</span>
vagrant init ubuntu/jammy64 

<span class="token comment"># 2. 使用Vagrant up命令启动</span>
vagrant up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们运行 <code>vagrant init</code> 命令时，会在当前目录生成 <code>Vagrantfile</code> 配置文件，默认的配置文件如下：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>Vagrant<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span> <span class="token keyword">do</span> <span class="token operator">|</span>config<span class="token operator">|</span>
  config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>box <span class="token operator">=</span> <span class="token string">&quot;ubuntu/jammy64&quot;</span>
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建过程" tabindex="-1"><a class="header-anchor" href="#创建过程"><span>创建过程</span></a></h3><p><img src="`+i+'" alt="" loading="lazy"></p><p>创建和启动虚拟机主要有下面四个步骤：</p>',13),a("div",{class:"ab-note drop-shadow"},[a("table",{class:"ab-table ab-list-table ab-listtable-likelist"},[a("tbody",null,[a("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"配置网络",onclick:`
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
        `},[a("td",{rowspan:"1"},[a("div",{class:"ab-list-table-witharrow markdown-rendered"},[a("div",null,[a("p",null,"配置网络")])])]),a("td",{rowspan:"1"},[a("div",{class:"ab-list-table-witharrow markdown-rendered"},[a("div",null,[a("p",null,"这里使用NAT模式")])])])]),a("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"转发SSH端口",onclick:`
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
        `},[a("td",{rowspan:"1"},[a("div",{class:"ab-list-table-witharrow markdown-rendered"},[a("div",null,[a("p",null,"转发SSH端口")])])]),a("td",{rowspan:"1"},[a("div",{class:"ab-list-table-witharrow markdown-rendered"},[a("div",null,[a("p",null,"这里将虚拟机的22端口转发到主机的2222端口")])])])]),a("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"配置ssh用户和密钥对",onclick:`
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
        `},[a("td",{rowspan:"1"},[a("div",{class:"ab-list-table-witharrow markdown-rendered"},[a("div",null,[a("p",null,"配置ssh用户和密钥对")])])]),a("td",{rowspan:"1"},[a("div",{class:"ab-list-table-witharrow markdown-rendered"},[a("div",null,[a("p",null,"设置用户名vagrant，和秘钥")])])])]),a("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"挂载共享目录",onclick:`
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
        `},[a("td",{rowspan:"1"},[a("div",{class:"ab-list-table-witharrow markdown-rendered"},[a("div",null,[a("p",null,"挂载共享目录")])])]),a("td",{rowspan:"1"},[a("div",{class:"ab-list-table-witharrow markdown-rendered"},[a("div",null,[a("p",null,[n("将虚拟机的 "),a("code",null,"/vagrant"),n(" 目录挂载到主机的 "),a("code",null,"/Users/qiu/vagrant"),n(" 目录")])])])])])])])],-1),t(`<h3 id="连接虚拟机" tabindex="-1"><a class="header-anchor" href="#连接虚拟机"><span>连接虚拟机</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vagrant <span class="token function">ssh</span>

<span class="token comment"># 语法糖，等同于：</span>
<span class="token comment"># ssh vagrant@localhost -p 2222</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一些默认配置" tabindex="-1"><a class="header-anchor" href="#一些默认配置"><span>一些默认配置</span></a></h2><h3 id="配置网络" tabindex="-1"><a class="header-anchor" href="#配置网络"><span>配置网络</span></a></h3><p>vagrant总是会将虚拟机的第一个网卡设置为NAT (默认值)</p><h3 id="配置ssh" tabindex="-1"><a class="header-anchor" href="#配置ssh"><span>配置SSH</span></a></h3><h4 id="转发ssh端口" tabindex="-1"><a class="header-anchor" href="#转发ssh端口"><span>转发SSH端口</span></a></h4><p>NAT无法从主机访问虚拟机，为什么可以使用<code>vagrant ssh</code>连接到虚拟机呢？</p><p>这是因为vagrant将虚拟机的ssh端口<code>22</code>转发到宿主机<code>2222</code>端口。如果有多个虚拟机，每个虚拟机会转发到不同的端口。</p><p>通过<code>vagrant ssh</code>连接到虚拟机跟使用下列命令是一样的。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ssh</span> vagrant@localhost <span class="token parameter variable">-p</span> <span class="token number">2222</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="配置ssh用户" tabindex="-1"><a class="header-anchor" href="#配置ssh用户"><span>配置SSH用户</span></a></h4><p>vagrant默认为每个虚拟机创建一个 <code>vagrant</code> 用户，密码为 <code>vagrant</code>。</p><p>这个用户拥有 <code>sudo</code> 权限，默认情况下不启动 <code>root</code> 用户。</p><h4 id="配置ssh密钥对" tabindex="-1"><a class="header-anchor" href="#配置ssh密钥对"><span>配置SSH密钥对</span></a></h4><p>vagrant ssh命令不需要输入密码，通过<strong>密钥对免密登录</strong>虚拟机。</p><p>所有的虚拟机Box打包的时候都使用同一个公开的密钥对。这样子显然是不安全的。</p><p>内置的密钥对仅用于第一次创建虚拟机的时候，vagrant会通过这个密钥对登录进虚拟机。然后生成一个新的密钥对，并替换公开的密钥对。</p><h3 id="更新guest-additions" tabindex="-1"><a class="header-anchor" href="#更新guest-additions"><span>更新Guest Additions</span></a></h3><p>如果要去掉<code>guest additions</code>版本不匹配的提示信息，可以手动更新。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vagrant plugin <span class="token function">install</span> vagrant-vbguest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="vagrant-常用命令" tabindex="-1"><a class="header-anchor" href="#vagrant-常用命令"><span>Vagrant 常用命令</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vagrant init ubuntu/jammy64 <span class="token comment"># 创建Vagrantfile</span>
vagrant up        <span class="token comment"># 根据Vagrantfile创建box镜像</span>
vagrant reload    <span class="token comment"># 重新配置虚拟机</span>
vagrant <span class="token function">halt</span>      <span class="token comment"># 关闭虚拟机</span>
vagrant destroy   <span class="token comment"># 删除虚拟机</span>
vagrant <span class="token function">suspend</span>   <span class="token comment"># 休眠</span>
vagrant resume    <span class="token comment"># 唤醒</span>

vagrant <span class="token parameter variable">-v</span>        <span class="token comment"># --version</span>
vagrant <span class="token parameter variable">-h</span>        <span class="token comment"># --help</span>

vagrant box list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23)]))}const u=s(o,[["render",d],["__file","03. 虚拟机的创建.html.vue"]]),v=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Virtual/%E8%99%9A%E6%8B%9F%E6%9C%BA/Vagrant/%E3%80%8AVagrant%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8%E3%80%8B/03.%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%9A%84%E5%88%9B%E5%BB%BA.html","title":"虚拟机的创建","lang":"zh-CN","frontmatter":{"description":"虚拟机的创建 创建虚拟机 创建虚拟机方式 比如我们要创建ubuntu 22.04的虚拟机，参考官网资料： https://app.vagrantup.com/ubuntu/boxes/jammy64 方式一：Vagrantfile 方式二：指定镜像 当我们运行 vagrant init 命令时，会在当前目录生成 Vagrantfile 配置文件，默认的...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20DesignAndDevelop/Virtual/%E8%99%9A%E6%8B%9F%E6%9C%BA/Vagrant/%E3%80%8AVagrant%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8%E3%80%8B/03.%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%9A%84%E5%88%9B%E5%BB%BA.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"虚拟机的创建"}],["meta",{"property":"og:description","content":"虚拟机的创建 创建虚拟机 创建虚拟机方式 比如我们要创建ubuntu 22.04的虚拟机，参考官网资料： https://app.vagrantup.com/ubuntu/boxes/jammy64 方式一：Vagrantfile 方式二：指定镜像 当我们运行 vagrant init 命令时，会在当前目录生成 Vagrantfile 配置文件，默认的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"虚拟机的创建\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"虚拟机的创建","slug":"虚拟机的创建","link":"#虚拟机的创建","children":[{"level":2,"title":"创建虚拟机","slug":"创建虚拟机","link":"#创建虚拟机","children":[{"level":3,"title":"创建虚拟机方式","slug":"创建虚拟机方式","link":"#创建虚拟机方式","children":[{"level":4,"title":"方式一：Vagrantfile","slug":"方式一-vagrantfile","link":"#方式一-vagrantfile","children":[]},{"level":4,"title":"方式二：指定镜像","slug":"方式二-指定镜像","link":"#方式二-指定镜像","children":[]}]},{"level":3,"title":"创建过程","slug":"创建过程","link":"#创建过程","children":[]},{"level":3,"title":"连接虚拟机","slug":"连接虚拟机","link":"#连接虚拟机","children":[]}]},{"level":2,"title":"一些默认配置","slug":"一些默认配置","link":"#一些默认配置","children":[{"level":3,"title":"配置网络","slug":"配置网络","link":"#配置网络","children":[]},{"level":3,"title":"配置SSH","slug":"配置ssh","link":"#配置ssh","children":[{"level":4,"title":"转发SSH端口","slug":"转发ssh端口","link":"#转发ssh端口","children":[]},{"level":4,"title":"配置SSH用户","slug":"配置ssh用户","link":"#配置ssh用户","children":[]},{"level":4,"title":"配置SSH密钥对","slug":"配置ssh密钥对","link":"#配置ssh密钥对","children":[]}]},{"level":3,"title":"更新Guest Additions","slug":"更新guest-additions","link":"#更新guest-additions","children":[]}]},{"level":2,"title":"Vagrant 常用命令","slug":"vagrant-常用命令","link":"#vagrant-常用命令","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.23,"words":668},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Virtual/虚拟机/Vagrant/《Vagrant快速入门》/03. 虚拟机的创建.md","excerpt":"\\n<h2>创建虚拟机</h2>\\n<h3>创建虚拟机方式</h3>\\n<p>比如我们要创建ubuntu 22.04的虚拟机，参考官网资料： https://app.vagrantup.com/ubuntu/boxes/jammy64</p>\\n<h4>方式一：Vagrantfile</h4>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># 1. 创建Vagrantfile文件，并填充内容</span>\\n<span class=\\"token function\\">vi</span> Vagrantfile\\n<span class=\\"token comment\\"># 然后填入Vagrantfile内容</span>\\nVagrant.configure<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"2\\"</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">do</span> <span class=\\"token operator\\">|</span>config<span class=\\"token operator\\">|</span>\\n  config.vm.box <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"ubuntu/jammy64\\"</span>\\nend\\n\\n<span class=\\"token comment\\"># 2. 使用Vagrant up命令启动</span>\\nvagrant up\\n</code></pre></div>","autoDesc":true}');export{u as comp,v as data};

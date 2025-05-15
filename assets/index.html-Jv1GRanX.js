import{_ as r,e as p,g as h,f as s,k as a,j as n,h as t,i as e,r as k,o as d}from"./app-DpI9FnpE.js";const o={},c={class:"ab-note drop-shadow"},g={class:"ab-list-table-parent"},A={class:"ab-table ab-list-table ab-table-folder"},u={class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"pdb`"},y={rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},v={class:"ab-list-table-witharrow"},b={class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"d`"},f={rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},F={class:"ab-list-table-witharrow"},m={class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"exe`"},B={rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},_={class:"ab-list-table-witharrow"};function C(E,i){const l=k("projectname");return d(),p("div",null,[i[25]||(i[25]=h(`<h1 id="build" tabindex="-1"><a class="header-anchor" href="#build"><span>Build</span></a></h1><h2 id="引言" tabindex="-1"><a class="header-anchor" href="#引言"><span>引言</span></a></h2><p>先读：[../How to build](../How to build.md)</p><p>在那篇文章中，说了各种编程语言/框架项目的编译/运行流程。而其中cpp在编译流中工具的种类比较多、选择比较灵活。依然是之前的四个通用步骤</p><ol><li>安装通用环境/依赖</li><li>项目下载/编写</li><li>安装项目环境/依赖</li><li>运行/编译项目</li></ol><p>像rust就是：</p><ol><li>通过 rustup 安装 rustc (编译器) 和 cargo (包管理和构建系统)，以及安装其他环境和工具链等<br> (相较 cpp 这里有原生的包管理、构建系统、管理依赖项、运行测试、生成文档、脚手架等，还挺好)</li><li>项目下载/编写。编写的话可以借助 <code>cargo new &lt;project-name&gt;</code> 快速创建项目</li><li>不需要，和go类似的，构建项目的时候会自动安装依赖</li><li>编译 <code>cargo build</code>，运行 <code>cargo run</code></li></ol><h2 id="step1-通用环境-依赖" tabindex="-1"><a class="header-anchor" href="#step1-通用环境-依赖"><span>step1 通用环境/依赖</span></a></h2><p>到官网 https://www.rust-lang.org/ 下载，按官方 <a href="https://www.rust-lang.org/zh-CN/tools/install" target="_blank" rel="noopener noreferrer">安装须知</a> 的指引下载，<strong>并配置环境变量</strong></p><p>以windows为例，得到一个12MB的 <code>rustup-init.exe</code> (安装器+管理器，有点类似于c++的cygwin或msys2)</p><div class="callout" data-callout="quote"><div class="callout-title"><div class="callout-title-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg></div><div class="callout-title-inner">Quote</div></div><div class="callout-content"><p>Rust 由工具 rustup 安装和管理。Rust 有着以 6 星期为周期的 快速版本迭代机制，支持 大量平台，因而不同时期存在大量不同的 Rust 构建版本。 rustup 用于管理不同平台下的 Rust 构建版本并使其互相兼容， 支持安装由 Beta 和 Nightly 频道发布的版本，并支持其他用于交叉编译的编译版本。</p></div></div><p>双击进入安装界面 (命令式安装)</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 1 安装方式</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Current</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> installation</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> options:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">   default</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> host</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> triple:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> x86_64-pc-windows-msvc</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">     default</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> toolchain:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (default)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">               profile:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> default</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  modify</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> PATH</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> variable:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> yes</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 继续进行标准安装（默认-只需按enter键）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 自定义安装</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 取消安装</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2 主机名</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">I</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> am</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> going</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ask</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> you</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> value</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> of</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> each</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> of</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> these</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> installation</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> options.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">You</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> may</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> simply</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> press</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Enter</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> key</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> leave</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> unchanged.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Default</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> host</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> triple?</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [x86_64-pc-windows-msvc]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 3 工具链</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Default</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> toolchain?</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (stable/beta/nightly/none) [stable]</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 4 配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Profile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (which </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">tools</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> and</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> data</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)? (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">minimal/default/complete</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) [default]</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 5 修改环境变量</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Modify</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> PATH</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> variable?</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (Y/n)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 6 重复确认</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Current</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> installation</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> options:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">   default</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> host</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> triple:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> x86_64-pc-windows-msvc</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">     default</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> toolchain:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stable</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">               profile:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> default</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  modify</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> PATH</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> variable:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> yes</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) Proceed with selected options (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">default</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> just</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> press</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) Customize installation</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) Cancel installation</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Enter</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>补充 - 镜像</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 默认的这两个网站均在中国大陆境外，因此在中国大陆访问会很慢，需要配置成境内的镜像:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 设置方法:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 在 PowerShell 或 CMD 中设置临时环境变量</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$env</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:RUSTUP_DIST_SERVER = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://rsproxy.cn&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$env</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:RUSTUP_UPDATE_ROOT = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://rsproxy.cn/rustup&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 备用</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">RUSTUP_DIST_SERVER</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">https://static.rust-lang.org</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                   # 默认</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">RUSTUP_UPDATE_ROOT</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">https://static.rust-lang.org/rustup</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            # 默认</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">RUSTUP_DIST_SERVER</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">https://mirrors.ustc.edu.cn/rust-static</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        # 中国科学技术大学 (推荐)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">RUSTUP_UPDATE_ROOT</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">https://mirrors.ustc.edu.cn/rust-static/rustup</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 中国科学技术大学</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">RUSTUP_DIST_SERVER</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">https://mirrors.tuna.tsinghua.edu.cn/rustup</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 清华大学</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">RUSTUP_DIST_SERVER</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">https://mirrors.sjtug.sjtu.edu.cn/rust-static/</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 上海交通大学</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>补充 - 验证</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 验证</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rustc</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -V</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rustc</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1.85.1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (4eb161250 </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">2025-03-15</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cargo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -V</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cargo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1.85.1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (d73d2caf9 </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">2024-12-31</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="step2-项目下载-编写" tabindex="-1"><a class="header-anchor" href="#step2-项目下载-编写"><span>step2 项目下载/编写</span></a></h2><p>shell</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cargo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> new</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rust-http-demo</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rust-http-demo</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>cargo.toml</p><div class="language-toml line-numbers-mode" data-highlighter="shiki" data-ext="toml" data-title="toml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">package</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;rust-http-demo&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;0.1.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">edition</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2021&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dependencies</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">actix-web</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;4.4&quot;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 使用 actix-web 作为 web 框架</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">tokio</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;1.0&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">features</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;macros&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;rt-multi-thread&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] }  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 异步运行时</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src/main.rs</p><div class="language-rust line-numbers-mode" data-highlighter="shiki" data-ext="rust" data-title="rust" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">use</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> actix_web</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">::{get, web, </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">App</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">HttpResponse</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">HttpServer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">Responder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">#[get(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">)]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">async</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> hello</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() -&gt; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">impl</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> Responder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">    HttpResponse</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">::</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Ok</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Hello from Rust HTTP Server!&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">#[get(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/health&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">)]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">async</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> health_check</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() -&gt; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">impl</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> Responder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">    HttpResponse</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">::</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Ok</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;OK&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">#[actix_web</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">::</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">main]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">async</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() -&gt; </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">std</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">::</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">io</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">::</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">Result</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;()&gt; {</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">    HttpServer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">::</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">new</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">||</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">        App</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">::</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">new</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">service</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">hello</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">service</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">health_check</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    })</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bind</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">((</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;0.0.0.0&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">8080</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">))?</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    .</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">await</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="step3-项目环境-依赖" tabindex="-1"><a class="header-anchor" href="#step3-项目环境-依赖"><span>step3 项目环境/依赖</span></a></h2><p>不需要，和go类似的，构建/运行项目的时候会自动安装依赖</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cargo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 编译</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cargo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   # 运行</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="step4-项目运行-编译" tabindex="-1"><a class="header-anchor" href="#step4-项目运行-编译"><span>step4 项目运行/编译</span></a></h2><div class="hint-container note"><p class="hint-container-title">注</p><p>主要是两个工具：</p><ul><li><code>rustc</code> 编译器<br> 类似cpp的gcc/g++，<code>rustc &lt;source-file&gt;</code>，如 <code>rustc main.rs</code>，它会生成一个与源文件同名的可执行文件。但一般不用这个，而是用cargo</li><li><code>cargo</code> 包管理器和构建系统<br> 它不仅负责构建项目，还可以管理依赖项、运行测试、生成文档等。常用命令:<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cargo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> new</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">project-nam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt;   </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 创建一个新的 Rust 项目。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cargo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                # 构建项目。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cargo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                  # 构建并运行项目。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cargo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                 # 运行测试。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cargo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> doc</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                  # 生成文档。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cargo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">crate-nam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安装一个 Rust 包（crate）。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cargo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 编译</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cargo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   # 运行</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加多平台构建支持" tabindex="-1"><a class="header-anchor" href="#添加多平台构建支持"><span>添加多平台构建支持</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cargo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --target</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> x86_64-unknown-linux-gnu</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --release</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # Linux</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cargo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --target</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> x86_64-pc-windows-msvc</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --release</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   # Windows</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cargo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --target</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> x86_64-apple-darwin</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --release</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # macOS</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或使用cross来构建</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cargo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cross</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rustup</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> target</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> x86_64-pc-windows-msvc</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rustup</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> target</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> x86_64-unknown-linux-gnu</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rustup</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> target</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> x86_64-apple-darwin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cross</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --target</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> x86_64-unknown-linux-musl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --release</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cross</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --target</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> x86_64-pc-windows-msvc</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --release</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="产物路径" tabindex="-1"><a class="header-anchor" href="#产物路径"><span>产物路径</span></a></h3><p>其中构建产物值得一提，确保重新编译时，往往删掉可执行文件再编译会很快。但如果整个target文件夹删掉，再编译会非常慢。因为这个有点相当于是构建版依赖文件，类似 js package.json，但是依赖的文件经过了本地的构建。</p><p>即第一次构建时，会下载依赖+构建为本地适用的版本，然后构建产物。重新构建时并不需要去删除依赖</p><p>windows</p>`,38)),s("div",c,[s("div",g,[s("table",A,[s("tbody",null,[i[9]||(i[9]=s("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder"},[s("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),s("div",{class:"ab-list-table-witharrow"},"target")])],-1)),i[10]||(i[10]=s("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder"},[s("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),s("div",{class:"ab-list-table-witharrow"},"debug")]),s("td",{rowspan:"1"},[s("div",{class:"ab-list-table-witharrow markdown-rendered"},[s("div",null,[s("p",null,"核心")])])])],-1)),i[11]||(i[11]=s("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[s("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),s("div",{class:"ab-list-table-witharrow"},".fingerprint")])],-1)),i[12]||(i[12]=s("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[s("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),s("div",{class:"ab-list-table-witharrow"},"build")]),s("td",{rowspan:"1"},[s("div",{class:"ab-list-table-witharrow markdown-rendered"},[s("div",null,[s("p",null,"核心")])])])],-1)),i[13]||(i[13]=s("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[s("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),s("div",{class:"ab-list-table-witharrow"},"deps")]),s("td",{rowspan:"1"},[s("div",{class:"ab-list-table-witharrow markdown-rendered"},[s("div",null,[s("p",null,"核心")])])])],-1)),i[14]||(i[14]=s("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[s("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),s("div",{class:"ab-list-table-witharrow"},"examples")])],-1)),i[15]||(i[15]=s("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[s("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),s("div",{class:"ab-list-table-witharrow"},"incremental")])],-1)),i[16]||(i[16]=s("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"cargo-lock"},[s("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),s("div",{class:"ab-list-table-witharrow"},".cargo-lock")])],-1)),s("tr",u,[s("td",y,[i[2]||(i[2]=s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])],-1)),s("div",v,[i[1]||(i[1]=n("`")),t(l,null,{default:e(()=>i[0]||(i[0]=[n(".pdb`")])),_:1})])])]),s("tr",b,[s("td",f,[i[5]||(i[5]=s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])],-1)),s("div",F,[i[4]||(i[4]=n("`")),t(l,null,{default:e(()=>i[3]||(i[3]=[n(".d`")])),_:1})])])]),s("tr",m,[s("td",B,[i[8]||(i[8]=s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])],-1)),s("div",_,[i[7]||(i[7]=n("`")),t(l,null,{default:e(()=>i[6]||(i[6]=[n(".exe`")])),_:1})])])]),i[17]||(i[17]=s("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder"},[s("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),s("div",{class:"ab-list-table-witharrow"},"release")]),s("td",{rowspan:"1"},[s("div",{class:"ab-list-table-witharrow markdown-rendered"},[s("div",null,[s("p",null,"核心")])])])],-1)),i[18]||(i[18]=s("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"(同上)"},[s("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),s("div",{class:"ab-list-table-witharrow"},"(同上)")])],-1)),i[19]||(i[19]=s("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder"},[s("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),s("div",{class:"ab-list-table-witharrow"},"x86_64-pc-windows-msvc")]),s("td",{rowspan:"1"},[s("div",{class:"ab-list-table-witharrow markdown-rendered"},[s("div",null,[s("p",null,[n("这个是交叉编译相关的，"),s("code",null,"--target <目标平台的固定字符串>")])])])])],-1)),i[20]||(i[20]=s("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[s("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),s("div",{class:"ab-list-table-witharrow"},"release")])],-1)),i[21]||(i[21]=s("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"TAG"},[s("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),s("div",{class:"ab-list-table-witharrow"},"CACHEDIR.TAG")])],-1)),i[22]||(i[22]=s("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"json"},[s("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),s("div",{class:"ab-list-table-witharrow"},".rustc_info.json")])],-1)),i[23]||(i[23]=s("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:`TAR
`},[s("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),s("div",{class:"ab-list-table-witharrow"},"CACEDIR.TAR")])],-1))])]),i[24]||(i[24]=s("button",{class:"ab-table-fold",is_fold:"false",onclick:`          const btn = this;
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
          `},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-fold-vertical-icon lucide-fold-vertical"},[s("path",{d:"M12 22v-6"}),s("path",{d:"M12 8V2"}),s("path",{d:"M4 12H2"}),s("path",{d:"M10 12H8"}),s("path",{d:"M16 12h-2"}),s("path",{d:"M22 12h-2"}),s("path",{d:"m15 19-3-3-3 3"}),s("path",{d:"m15 5-3 3-3-3"})])],-1))])]),i[26]||(i[26]=h(`<h2 id="all-workflows" tabindex="-1"><a class="header-anchor" href="#all-workflows"><span>all_workflows</span></a></h2><h3 id="简单工作流" tabindex="-1"><a class="header-anchor" href="#简单工作流"><span>简单工作流</span></a></h3><p>先来看 Github 为 Rust 项目推荐的工作流：</p><ul><li>Rust | 用Cargo构建并测试一个Rust项目</li></ul><p>默认的workflow非常简单优雅 (似乎是 GitHub 托管的一些运行器已预装了 Rust 工具链，不一定会有)</p><div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Rust</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  push</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    branches</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;master&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  pull_request</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    branches</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;master&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">env</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  CARGO_TERM_COLOR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">always</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">jobs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  build</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    runs-on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    steps</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">uses</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">actions/checkout@v4</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Build</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">cargo build --verbose</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Run tests</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">cargo test --verbose</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者可以参考其他非官方工作流：</p><p>https://github.com/rust-build/rust-build.action 这里用到了 <code>rust-build/rust-build.action@v1.4.5</code>，比较封装</p><div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># .github/workflows/release.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  release</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    types</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">created</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">jobs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  release</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">release \${{ matrix.target }}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    runs-on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    strategy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      fail-fast</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      matrix</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        include</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">target</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">x86_64-pc-windows-gnu</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            archive</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">zip</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">target</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">x86_64-unknown-linux-musl</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            archive</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">tar.gz tar.xz tar.zst</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">target</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">x86_64-apple-darwin</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            archive</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">zip</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    steps</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">uses</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">actions/checkout@master</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Compile and release</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        uses</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">rust-build/rust-build.action@v1.4.5</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        env</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          GITHUB_TOKEN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\${{ secrets.GITHUB_TOKEN }}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        with</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          RUSTTARGET</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\${{ matrix.target }}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          ARCHIVE_TYPES</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\${{ matrix.archive }}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="交叉编译" tabindex="-1"><a class="header-anchor" href="#交叉编译"><span>交叉编译</span></a></h3><p>现在我们加入多平台构建可执行文件</p><div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 根据情况修改 branches name、BIN_NAME (toml对应的应用名)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Native Multi-Platform Build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  push</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # tags: [&quot;v*&quot;]  # 在打版本标签时触发构建</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    branches</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;master&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  pull_request</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    branches</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;master&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">env</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  CARGO_TERM_COLOR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">always</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">jobs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  build</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    runs-on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\${{ matrix.os }}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    strategy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      fail-fast</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 一个失败不影响其他的矩阵运行</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      matrix</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        include</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # Linux 平台</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">os</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ubuntu-22.04</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            target</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">x86_64-unknown-linux-gnu</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">       # 原生 x86_64</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            toolchain</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: []</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">os</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ubuntu-22.04</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            target</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">x86_64-unknown-linux-musl</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 静态链接</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            toolchain</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;musl-tools&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # - os: ubuntu-22.04</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          #   target: aarch64-unknown-linux-gnu      # ARM64 (交叉编译)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          #   toolchain: &quot;gcc-aarch64-linux-gnu&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # Windows 平台</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">os</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">windows-latest</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            target</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">x86_64-pc-windows-msvc</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">         # 原生 x64</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            toolchain</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: []</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">os</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">windows-latest</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            target</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">aarch64-pc-windows-msvc</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        # ARM64 (交叉编译)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            toolchain</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: []                          </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># &quot;clang&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # macOS 平台</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">os</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">macos-latest</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            target</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">x86_64-apple-darwin</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            # Intel 兼容模式</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            toolchain</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: []</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">os</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">macos-latest</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            target</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">aarch64-apple-darwin</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">           # 原生 Apple Silicon</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            toolchain</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: []</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    steps</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">01. code checkout</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        uses</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">actions/checkout@v4</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 配置 Rust 环境</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">02. Setup Rust</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        uses</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">dtolnay/rust-toolchain@stable</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        with</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          targets</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\${{ matrix.target }}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          components</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">rust-std</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 交叉编译工具修复</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">02. Install Cross-compiler Toolchain</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">matrix.os == &#39;ubuntu-22.04&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">|</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          # 按需安装 musl 工具链</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          if [[ &quot;\${{ matrix.target }}&quot; == *&quot;musl&quot;* ]]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            echo &quot;安装 musl 工具链...&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            sudo apt-get update</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            sudo apt-get install -y musl-tools</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            rustup target add x86_64-unknown-linux-musl</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          # 按需安装 ARM64 交叉编译工具链</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          if [[ &quot;\${{ matrix.target }}&quot; == *&quot;aarch64&quot;* ]]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            echo &quot;安装 ARM64 交叉编译工具链...&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            sudo apt-get update</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            sudo apt-get install -y gcc-aarch64-linux-gnu</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            rustup target add aarch64-unknown-linux-gnu</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 安装平台专用工具链 (github有些系统会内置rust，而且这东西安装很慢，如果有内置那就不装)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # - name: 02. Install Toolchain</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      #   if: matrix.toolchain != &#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      #   run: |</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      #     case &quot;\${{ runner.os }}&quot; in</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      #       Linux)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      #         sudo apt-get update</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      #         sudo apt-get install -y \${{ matrix.toolchain }}</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      #         ;;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      #       Windows)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      #         choco install \${{ matrix.toolchain }}  # 示例：通过 Chocolatey 安装</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      #         ;;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      #     esac</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 解决 macOS 常见问题</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Fix macOS SDK (Apple Silicon), Setup Xcode (Apple Silicon)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">matrix.os == &#39;macos-latest&#39; &amp;&amp; matrix.target == &#39;aarch64-apple-darwin&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">|</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          sudo xcode-select -s /Applications/Xcode.app/Contents/Developer</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          sudo xcodebuild -license accept</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 执行编译</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">04. Build Release</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">|</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          cargo build --release --target \${{ matrix.target }}</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          ls</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 智能处理产物名称，只保留可执行文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Package Artifacts</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        shell</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">bash</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">|</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          BIN_NAME=rust-http-demo # [!code] 这里要写入你toml里写的app名</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          OUTPUT_DIR=release      # [!code]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          mkdir -p $OUTPUT_DIR</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          case &quot;\${{ matrix.target }}&quot; in</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            *windows*)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">              cp target/\${{ matrix.target }}/release/$BIN_NAME.exe $OUTPUT_DIR/\${BIN_NAME}-\${{ matrix.target }}.exe</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">              ;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            *)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">              cp target/\${{ matrix.target }}/release/$BIN_NAME $OUTPUT_DIR/\${BIN_NAME}-\${{ matrix.target }}</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">              ;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          esac</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">uses</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">actions/upload-artifact@v4</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        with</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">binaries-\${{ matrix.os }}-\${{ matrix.target }}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">release/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="all-docker" tabindex="-1"><a class="header-anchor" href="#all-docker"><span>all_Docker</span></a></h2><p>file</p><div class="language-dockerfile line-numbers-mode" data-highlighter="shiki" data-ext="dockerfile" data-title="dockerfile" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 构建阶段</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> rust:1.70 </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">as</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> builder</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">WORKDIR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /app</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">COPY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> . .</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">RUN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> cargo build --release</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 运行阶段</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> debian:bullseye-slim</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">COPY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --from=builder /app/target/release/rust-http-demo /usr/local/bin/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">EXPOSE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 8080</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">CMD</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;rust-http-demo&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>shell</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rust-http-demo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="ll" tabindex="-1"><a class="header-anchor" href="#ll"><span>ll</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>macos</span></span>
<span class="line"><span>build时：</span></span>
<span class="line"><span>Error: The operation was canceled.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ubuntu 2204 aarch</span></span>
<span class="line"><span>build时:</span></span>
<span class="line"><span>warning: zstd-sys@2.0.15+zstd.1.5.7: Compiler family detection failed due to error: ToolNotFound: failed to find tool &quot;aarch64-linux-musl-gcc&quot;: No such file or directory (os error 2)</span></span>
<span class="line"><span>warning: zstd-sys@2.0.15+zstd.1.5.7: Compiler family detection failed due to error: ToolNotFound: failed to find tool &quot;aarch64-linux-musl-gcc&quot;: No such file or directory (os error 2)</span></span>
<span class="line"><span>warning: zstd-sys@2.0.15+zstd.1.5.7: Compiler family detection failed due to error: ToolNotFound: failed to find tool &quot;aarch64-linux-musl-gcc&quot;: No such file or directory (os error 2)</span></span>
<span class="line"><span>warning: zstd-sys@2.0.15+zstd.1.5.7: Compiler family detection failed due to error: ToolNotFound: failed to find tool &quot;aarch64-linux-musl-gcc&quot;: No such file or directory (os error 2)</span></span>
<span class="line"><span>error: failed to run custom build command for \`zstd-sys v2.0.15+zstd.1.5.7\`</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>error occurred in cc-rs: failed to find tool &quot;aarch64-linux-musl-gcc&quot;: No such file or directory (os error 2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>warning: build failed, waiting for other jobs to finish...</span></span>
<span class="line"><span>Error: Process completed with exit code 101.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ubuntu 2204 x64</span></span>
<span class="line"><span>build时:</span></span>
<span class="line"><span>warning: zstd-sys@2.0.15+zstd.1.5.7: Compiler family detection failed due to error: ToolNotFound: failed to find tool &quot;musl-gcc&quot;: No such file or directory (os error 2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>warning: zstd-sys@2.0.15+zstd.1.5.7: Compiler family detection failed due to error: ToolNotFound: failed to find tool &quot;musl-gcc&quot;: No such file or directory (os error 2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>warning: zstd-sys@2.0.15+zstd.1.5.7: Compiler family detection failed due to error: ToolNotFound: failed to find tool &quot;musl-gcc&quot;: No such file or directory (os error 2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>warning: zstd-sys@2.0.15+zstd.1.5.7: Compiler family detection failed due to error: ToolNotFound: failed to find tool &quot;musl-gcc&quot;: No such file or directory (os error 2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>error: failed to run custom build command for \`zstd-sys v2.0.15+zstd.1.5.7\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>error occurred in cc-rs: failed to find tool &quot;musl-gcc&quot;: No such file or directory (os error 2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>warning: build failed, waiting for other jobs to finish...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Error: The operation was canceled.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19))])}const N=r(o,[["render",C],["__file","index.html.vue"]]),x=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Develop/03.%20Tools/02.%20%E5%BC%80%E5%8F%91%E5%B1%82/How%20to%20build/Rust/","title":"Build","lang":"zh-CN","frontmatter":{"description":"Build 引言 先读：[../How to build](../How to build.md) 在那篇文章中，说了各种编程语言/框架项目的编译/运行流程。而其中cpp在编译流中工具的种类比较多、选择比较灵活。依然是之前的四个通用步骤 安装通用环境/依赖 项目下载/编写 安装项目环境/依赖 运行/编译项目 像rust就是： 通过 rustup 安装 ...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/01.%20DesignAndDevelop/Develop/03.%20Tools/02.%20%E5%BC%80%E5%8F%91%E5%B1%82/How%20to%20build/Rust/"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Build"}],["meta",{"property":"og:description","content":"Build 引言 先读：[../How to build](../How to build.md) 在那篇文章中，说了各种编程语言/框架项目的编译/运行流程。而其中cpp在编译流中工具的种类比较多、选择比较灵活。依然是之前的四个通用步骤 安装通用环境/依赖 项目下载/编写 安装项目环境/依赖 运行/编译项目 像rust就是： 通过 rustup 安装 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Build\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"git":{},"readingTime":{"minutes":8.09,"words":2426},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Develop/03. Tools/02. 开发层/How to build/Rust/README.md","excerpt":"\\n<h2>引言</h2>\\n<p>先读：[../How to build](../How to build.md)</p>\\n<p>在那篇文章中，说了各种编程语言/框架项目的编译/运行流程。而其中cpp在编译流中工具的种类比较多、选择比较灵活。依然是之前的四个通用步骤</p>\\n<ol>\\n<li>安装通用环境/依赖</li>\\n<li>项目下载/编写</li>\\n<li>安装项目环境/依赖</li>\\n<li>运行/编译项目</li>\\n</ol>\\n<p>像rust就是：</p>\\n<ol>\\n<li>通过 rustup 安装 rustc (编译器) 和 cargo (包管理和构建系统)，以及安装其他环境和工具链等<br>\\n(相较 cpp 这里有原生的包管理、构建系统、管理依赖项、运行测试、生成文档、脚手架等，还挺好)</li>\\n<li>项目下载/编写。编写的话可以借助 <code>cargo new &lt;project-name&gt;</code> 快速创建项目</li>\\n<li>不需要，和go类似的，构建项目的时候会自动安装依赖</li>\\n<li>编译 <code>cargo build</code>，运行 <code>cargo run</code></li>\\n</ol>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/01. DesignAndDevelop/Develop/03. Tools/02. 开发层/How to build/Rust/README.md","value":{"title":"How to build/","path":"MdNote_Public/01. DesignAndDevelop/Develop/03. Tools/02. 开发层/How to build/Rust/README.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{N as comp,x as data};

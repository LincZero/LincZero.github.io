import{h as a,i as n,k as s,j as i,n as t,o as l}from"./app-BxIN6IW3.js";const h={};function r(o,e){return l(),n("div",null,e[0]||(e[0]=[s(`<h1 id="获取商店内容" tabindex="-1"><a class="header-anchor" href="#获取商店内容"><span>获取商店内容</span></a></h1><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!--mdx内容--&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">import Tabs from &quot;@theme/Tabs&quot;;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">import TabItem from &quot;@theme/TabItem&quot;;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">import Asciinema from &quot;@site/src/components/Asciinema&quot;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果你暂时没有获取商店内容的需求，可以跳过本章节。</p></div><p>NoneBot 提供了一个<a href="/store/plugins">商店</a>，商店内容均由社区开发者贡献。你可以在商店中查找你需要的适配器和插件等，进行安装或者参考其文档等。</p><p>商店中每个内容的卡片都包含了其名称和简介等信息，点击<strong>卡片右上角</strong>链接图标即可跳转到其主页。</p><h2 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件"><span>安装插件</span></a></h2><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!--mdx内容--&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Asciinema</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://asciinema.org/a/569650.cast&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  options</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{{ theme: &quot;monokai&quot;, poster: &quot;npt:16.8&quot; }}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在商店插件页面中，点击你需要安装的插件下方的 <code>点击复制安装命令</code> 按钮，即可复制 <code>nb-cli</code> 命令。</p><p>请在你的<strong>项目目录</strong>下执行该命令。<code>nb-cli</code> 会自动安装插件并将其添加到加载列表中。</p>`,9),i("div",{class:"ab-note drop-shadow"},[i("div",{class:"ab-tab-root"},[i("div",{class:"ab-tab-nav"},[i("button",{class:"ab-tab-nav-item",is_activate:"true",onclick:`
            const i = 0
            const tab_current = this
            const tab_nav = this.parentNode
            const tab_root = tab_nav.parentNode
            const tab_content = tab_root.querySelector(":scope>.ab-tab-content")
            const tab_nav_items = tab_nav.querySelectorAll(":scope>.ab-tab-nav-item")
            const tab_content_items = tab_content.querySelectorAll(":scope>.ab-tab-content-item")
            for (let j=0; j<tab_content_items.length; j++){
              tab_nav_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("style", "display:none")
            }
            tab_current.setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("style", "display:block")
          `},"命令方式"),i("button",{class:"ab-tab-nav-item",is_activate:"false",onclick:`
            const i = 1
            const tab_current = this
            const tab_nav = this.parentNode
            const tab_root = tab_nav.parentNode
            const tab_content = tab_root.querySelector(":scope>.ab-tab-content")
            const tab_nav_items = tab_nav.querySelectorAll(":scope>.ab-tab-nav-item")
            const tab_content_items = tab_content.querySelectorAll(":scope>.ab-tab-content-item")
            for (let j=0; j<tab_content_items.length; j++){
              tab_nav_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("style", "display:none")
            }
            tab_current.setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("style", "display:block")
          `},"交互式安装"),i("button",{class:"ab-tab-nav-item",is_activate:"false",onclick:`
            const i = 2
            const tab_current = this
            const tab_nav = this.parentNode
            const tab_root = tab_nav.parentNode
            const tab_content = tab_root.querySelector(":scope>.ab-tab-content")
            const tab_nav_items = tab_nav.querySelectorAll(":scope>.ab-tab-nav-item")
            const tab_content_items = tab_content.querySelectorAll(":scope>.ab-tab-content-item")
            for (let j=0; j<tab_content_items.length; j++){
              tab_nav_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("style", "display:none")
            }
            tab_current.setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("style", "display:block")
          `},"pip安装")]),i("div",{class:"ab-tab-content"},[i("div",{class:"ab-tab-content-item markdown-rendered",style:{display:"block"},is_activate:"true"},[i("div",null,[i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"nb"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," plugin"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," install"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," <"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"插件名"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"称>")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"})])])])]),i("div",{class:"ab-tab-content-item markdown-rendered",style:{display:"none"},is_activate:"false"},[i("div",null,[i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"nb"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," plugin"),i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-light-font-style":"italic","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}}," # 或 nb plugin install")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"})])])])]),i("div",{class:"ab-tab-content-item markdown-rendered",style:{display:"none"},is_activate:"false"},[i("div",null,[i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"pip"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," install"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," <"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"插件包"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"名>")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"})])])])])])])],-1),s(`<p>如果想要查看插件列表，可以使用以下命令</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 列出商店所有插件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nb</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> plugin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> list</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 搜索商店插件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nb</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> plugin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> search</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [可选关键词]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>升级和卸载插件可以使用以下命令</p>`,3),i("div",{class:"ab-note drop-shadow"},[i("div",{class:"ab-tab-root"},[i("div",{class:"ab-tab-nav"},[i("button",{class:"ab-tab-nav-item",is_activate:"true",onclick:`
            const i = 0
            const tab_current = this
            const tab_nav = this.parentNode
            const tab_root = tab_nav.parentNode
            const tab_content = tab_root.querySelector(":scope>.ab-tab-content")
            const tab_nav_items = tab_nav.querySelectorAll(":scope>.ab-tab-nav-item")
            const tab_content_items = tab_content.querySelectorAll(":scope>.ab-tab-content-item")
            for (let j=0; j<tab_content_items.length; j++){
              tab_nav_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("style", "display:none")
            }
            tab_current.setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("style", "display:block")
          `},"命令方式"),i("button",{class:"ab-tab-nav-item",is_activate:"false",onclick:`
            const i = 1
            const tab_current = this
            const tab_nav = this.parentNode
            const tab_root = tab_nav.parentNode
            const tab_content = tab_root.querySelector(":scope>.ab-tab-content")
            const tab_nav_items = tab_nav.querySelectorAll(":scope>.ab-tab-nav-item")
            const tab_content_items = tab_content.querySelectorAll(":scope>.ab-tab-content-item")
            for (let j=0; j<tab_content_items.length; j++){
              tab_nav_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("style", "display:none")
            }
            tab_current.setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("style", "display:block")
          `},"交互式安装"),i("button",{class:"ab-tab-nav-item",is_activate:"false",onclick:`
            const i = 2
            const tab_current = this
            const tab_nav = this.parentNode
            const tab_root = tab_nav.parentNode
            const tab_content = tab_root.querySelector(":scope>.ab-tab-content")
            const tab_nav_items = tab_nav.querySelectorAll(":scope>.ab-tab-nav-item")
            const tab_content_items = tab_content.querySelectorAll(":scope>.ab-tab-content-item")
            for (let j=0; j<tab_content_items.length; j++){
              tab_nav_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("style", "display:none")
            }
            tab_current.setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("style", "display:block")
          `},"pip安装")]),i("div",{class:"ab-tab-content"},[i("div",{class:"ab-tab-content-item markdown-rendered",style:{display:"block"},is_activate:"true"},[i("div",null,[i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"nb"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," plugin"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," update"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," <"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"插件名"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"称>")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"nb"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," plugin"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," uninstall"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," <"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"插件名"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"称>")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"})])])])]),i("div",{class:"ab-tab-content-item markdown-rendered",style:{display:"none"},is_activate:"false"},[i("div",null,[i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"$"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," nb"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," plugin"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," update")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"[?] 想要安装的插件名称: <插件名称>")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"$"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," nb"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," plugin"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," uninstall")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"[?] 想要卸载的插件名称: <插件名称>")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])])])]),i("div",{class:"ab-tab-content-item markdown-rendered",style:{display:"none"},is_activate:"false"},[i("div",null,[i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"pip"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," install"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," --upgrade"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," <"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"插件包"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"名>")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"pip"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," uninstall"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," <"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"插件包"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"名>")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"})])])])])])])],-1),i("h2",{id:"安装适配器",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#安装适配器"},[i("span",null,"安装适配器")])],-1),i("p",null,[t("安装适配器与安装插件类似，只是将命令换为 "),i("code",null,"nb adapter"),t("，这里就不再赘述。")],-1),i("p",null,[t("请在你的"),i("strong",null,"项目目录"),t("下执行该命令。"),i("code",null,"nb-cli"),t(" 会自动安装适配器并将其添加到注册列表中。")],-1),i("div",{class:"ab-note drop-shadow"},[i("div",{class:"ab-tab-root"},[i("div",{class:"ab-tab-nav"},[i("button",{class:"ab-tab-nav-item",is_activate:"true",onclick:`
            const i = 0
            const tab_current = this
            const tab_nav = this.parentNode
            const tab_root = tab_nav.parentNode
            const tab_content = tab_root.querySelector(":scope>.ab-tab-content")
            const tab_nav_items = tab_nav.querySelectorAll(":scope>.ab-tab-nav-item")
            const tab_content_items = tab_content.querySelectorAll(":scope>.ab-tab-content-item")
            for (let j=0; j<tab_content_items.length; j++){
              tab_nav_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("style", "display:none")
            }
            tab_current.setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("style", "display:block")
          `},"命令方式"),i("button",{class:"ab-tab-nav-item",is_activate:"false",onclick:`
            const i = 1
            const tab_current = this
            const tab_nav = this.parentNode
            const tab_root = tab_nav.parentNode
            const tab_content = tab_root.querySelector(":scope>.ab-tab-content")
            const tab_nav_items = tab_nav.querySelectorAll(":scope>.ab-tab-nav-item")
            const tab_content_items = tab_content.querySelectorAll(":scope>.ab-tab-content-item")
            for (let j=0; j<tab_content_items.length; j++){
              tab_nav_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("style", "display:none")
            }
            tab_current.setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("style", "display:block")
          `},"交互式安装"),i("button",{class:"ab-tab-nav-item",is_activate:"false",onclick:`
            const i = 2
            const tab_current = this
            const tab_nav = this.parentNode
            const tab_root = tab_nav.parentNode
            const tab_content = tab_root.querySelector(":scope>.ab-tab-content")
            const tab_nav_items = tab_nav.querySelectorAll(":scope>.ab-tab-nav-item")
            const tab_content_items = tab_content.querySelectorAll(":scope>.ab-tab-content-item")
            for (let j=0; j<tab_content_items.length; j++){
              tab_nav_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("style", "display:none")
            }
            tab_current.setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("style", "display:block")
          `},"pip安装")]),i("div",{class:"ab-tab-content"},[i("div",{class:"ab-tab-content-item markdown-rendered",style:{display:"block"},is_activate:"true"},[i("div",null,[i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"nb"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," adapter"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," install"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," <"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"适配器名"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"称>")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"})])])])]),i("div",{class:"ab-tab-content-item markdown-rendered",style:{display:"none"},is_activate:"false"},[i("div",null,[i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"$"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," nb"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," adapter"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," install")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"[?] 想要安装的适配器名称: <适配器名称>")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"})])])])]),i("div",{class:"ab-tab-content-item markdown-rendered",style:{display:"none"},is_activate:"false"},[i("div",null,[i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"pip"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," install"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," <"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"适配器包"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"名>")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"})])]),i("p",null,[t("适配器包名可以在商店适配器卡片中找到，或者使用 nb-cli 搜索适配器显示的详情中找到。安装完成后，需要参考"),i("a",{href:"https://nonebot.dev/docs/advanced/adapter#%E6%B3%A8%E5%86%8C%E9%80%82%E9%85%8D%E5%99%A8",target:"_blank",rel:"noopener noreferrer"},"注册适配器章节"),t("自行注册。")])])])])])],-1),s(`<p>如果想要查看适配器列表，可以使用以下命令</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 列出商店所有适配器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nb</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> adapter</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> list</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 搜索商店适配器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nb</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> adapter</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> search</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [可选关键词]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">OneBot</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> V11</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                          👍</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> OneBot</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> V11</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 协议</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nonebot-adapter-onebot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">钉钉</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (nonebot-adapter-ding)         👍 钉钉协议</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">飞书</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (nonebot-adapter-feishu)       👍 飞书协议</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Telegram</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                            👍</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Telegram</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 协议</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nonebot-adapter-telegram</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">QQ</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (nonebot-adapter-qq)             👍 QQ 官方机器人</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">开黑啦</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                                 开黑啦协议适配</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nonebot-adapter-kaiheila</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Mirai</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (nonebot-adapter-mirai)       👍 mirai-api-http v2 协议适配</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">OneBot</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> V12</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                          👍</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> OneBot</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> V12</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 协议</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nonebot-adapter-onebot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Console</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                             👍</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 基于终端的交互式适配器</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nonebot-adapter-console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">GitHub</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (nonebot-adapter-github)     👍 GitHub APP &amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">OAuth</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> APP</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> integration</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Ntchat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (nonebot-adapter-ntchat)        pc hook的微信客户端适配</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Minecraft</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                              MineCraft通信适配，支持Rcon</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nonebot-adapter-minecraft</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">BilibiliLive</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                           b站直播间ws协议</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nonebot-adapter-bilibili</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Walle-Q</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (nonebot-adapter-walleq)       内置 QQ 协议实现</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">大别野</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (nonebot-adapter-villa)         米游社大别野官方Bot适配</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">RedProtocol</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                         👍</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> QQNT</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> RedProtocol</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 适配</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nonebot-adapter-red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Discord</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                             👍</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Discord</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 官方</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Bot</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 协议适配</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nonebot-adapter-discord</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Satori</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (nonebot-adapter-satori)     👍 Satori 协议适配器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">DoDo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (nonebot-adapter-dodo)         👍 DoDo Bot 协议适配器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">RocketChat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                             RocketChat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> adapter</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> for</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nonebot2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nonebot-adapter-rocketchat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Kritor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (nonebot-adapter-kritor)     👍 Kritor 协议适配</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Tailchat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                               Tailchat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 适配器</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nonebot-adapter-tailchat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Mail</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (nonebot-adapter-mail)            邮件收发协议</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">黑盒语音</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                               黑盒语音机器人适配</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nonebot-adapter-heybox</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">WXMP</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (nonebot-adapter-wxmp)            微信公众平台 客服适配器</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>升级和卸载适配器可以使用以下命令</p>`,3),i("div",{class:"ab-note drop-shadow"},[i("div",{class:"ab-tab-root"},[i("div",{class:"ab-tab-nav"},[i("button",{class:"ab-tab-nav-item",is_activate:"true",onclick:`
            const i = 0
            const tab_current = this
            const tab_nav = this.parentNode
            const tab_root = tab_nav.parentNode
            const tab_content = tab_root.querySelector(":scope>.ab-tab-content")
            const tab_nav_items = tab_nav.querySelectorAll(":scope>.ab-tab-nav-item")
            const tab_content_items = tab_content.querySelectorAll(":scope>.ab-tab-content-item")
            for (let j=0; j<tab_content_items.length; j++){
              tab_nav_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("style", "display:none")
            }
            tab_current.setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("style", "display:block")
          `},"命令方式"),i("button",{class:"ab-tab-nav-item",is_activate:"false",onclick:`
            const i = 1
            const tab_current = this
            const tab_nav = this.parentNode
            const tab_root = tab_nav.parentNode
            const tab_content = tab_root.querySelector(":scope>.ab-tab-content")
            const tab_nav_items = tab_nav.querySelectorAll(":scope>.ab-tab-nav-item")
            const tab_content_items = tab_content.querySelectorAll(":scope>.ab-tab-content-item")
            for (let j=0; j<tab_content_items.length; j++){
              tab_nav_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("style", "display:none")
            }
            tab_current.setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("style", "display:block")
          `},"交互式安装"),i("button",{class:"ab-tab-nav-item",is_activate:"false",onclick:`
            const i = 2
            const tab_current = this
            const tab_nav = this.parentNode
            const tab_root = tab_nav.parentNode
            const tab_content = tab_root.querySelector(":scope>.ab-tab-content")
            const tab_nav_items = tab_nav.querySelectorAll(":scope>.ab-tab-nav-item")
            const tab_content_items = tab_content.querySelectorAll(":scope>.ab-tab-content-item")
            for (let j=0; j<tab_content_items.length; j++){
              tab_nav_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("style", "display:none")
            }
            tab_current.setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("style", "display:block")
          `},"pip安装")]),i("div",{class:"ab-tab-content"},[i("div",{class:"ab-tab-content-item markdown-rendered",style:{display:"block"},is_activate:"true"},[i("div",null,[i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"nb"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," adapter"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," update"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," <"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"适配器名"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"称>")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"nb"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," adapter"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," uninstall"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," <"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"适配器名称")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"})])])])]),i("div",{class:"ab-tab-content-item markdown-rendered",style:{display:"none"},is_activate:"false"},[i("div",null,[i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"$"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," nb"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," adapter"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," update")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"[?] 想要安装的适配器名称: <适配器名称>")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"$"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," nb"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," adapter"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," uninstall")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"[?] 想要卸载的适配器名称: <适配器名称>")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])])])]),i("div",{class:"ab-tab-content-item markdown-rendered",style:{display:"none"},is_activate:"false"},[i("div",null,[i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"pip"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," install"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," --upgrade"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," <"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"适配器包"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"名>")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"pip"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," uninstall"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," <"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"适配器包"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"名>")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"})])]),i("p",null,[t("适配器包名可以在商店适配器卡片中找到，或者使用 "),i("code",null,"nb-cli"),t(" 搜索适配器显示的详情中找到。卸载完成后，需要自行移除适配器加载。")])])])])])],-1),s(`<h2 id="安装驱动器" tabindex="-1"><a class="header-anchor" href="#安装驱动器"><span>安装驱动器</span></a></h2><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!--mdx内容--&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Asciinema</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://asciinema.org/a/569665.cast&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  options</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{{ theme: &quot;monokai&quot;, poster: &quot;npt:14.0&quot; }}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装驱动器与安装插件同样类似，只是将命令换为 <code>nb driver</code>，这里就不再赘述。</p><p>如果你使用了虚拟环境，请在你的<strong>项目目录</strong>下执行该命令，<code>nb-cli</code> 会自动安装驱动器到虚拟环境中。</p><p>请注意 <code>nb-cli</code> 并不会在安装驱动器后修改项目所使用的驱动器，请自行参考<a href="../appendices/config.mdx">配置方法</a>章节以及 <a href="../appendices/config.mdx#driver"><code>DRIVER</code> 配置项</a>修改驱动器。</p>`,5),i("div",{class:"ab-note drop-shadow"},[i("div",{class:"ab-tab-root"},[i("div",{class:"ab-tab-nav"},[i("button",{class:"ab-tab-nav-item",is_activate:"true",onclick:`
            const i = 0
            const tab_current = this
            const tab_nav = this.parentNode
            const tab_root = tab_nav.parentNode
            const tab_content = tab_root.querySelector(":scope>.ab-tab-content")
            const tab_nav_items = tab_nav.querySelectorAll(":scope>.ab-tab-nav-item")
            const tab_content_items = tab_content.querySelectorAll(":scope>.ab-tab-content-item")
            for (let j=0; j<tab_content_items.length; j++){
              tab_nav_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("style", "display:none")
            }
            tab_current.setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("style", "display:block")
          `},"命令方式"),i("button",{class:"ab-tab-nav-item",is_activate:"false",onclick:`
            const i = 1
            const tab_current = this
            const tab_nav = this.parentNode
            const tab_root = tab_nav.parentNode
            const tab_content = tab_root.querySelector(":scope>.ab-tab-content")
            const tab_nav_items = tab_nav.querySelectorAll(":scope>.ab-tab-nav-item")
            const tab_content_items = tab_content.querySelectorAll(":scope>.ab-tab-content-item")
            for (let j=0; j<tab_content_items.length; j++){
              tab_nav_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("style", "display:none")
            }
            tab_current.setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("style", "display:block")
          `},"交互式安装"),i("button",{class:"ab-tab-nav-item",is_activate:"false",onclick:`
            const i = 2
            const tab_current = this
            const tab_nav = this.parentNode
            const tab_root = tab_nav.parentNode
            const tab_content = tab_root.querySelector(":scope>.ab-tab-content")
            const tab_nav_items = tab_nav.querySelectorAll(":scope>.ab-tab-nav-item")
            const tab_content_items = tab_content.querySelectorAll(":scope>.ab-tab-content-item")
            for (let j=0; j<tab_content_items.length; j++){
              tab_nav_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("style", "display:none")
            }
            tab_current.setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("style", "display:block")
          `},"pip安装")]),i("div",{class:"ab-tab-content"},[i("div",{class:"ab-tab-content-item markdown-rendered",style:{display:"block"},is_activate:"true"},[i("div",null,[i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"nb"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," driver"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," install"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," <"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"驱动器名"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"称>")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"})])])])]),i("div",{class:"ab-tab-content-item markdown-rendered",style:{display:"none"},is_activate:"false"},[i("div",null,[i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"$"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," nb"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," driver"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," install")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"[?] 想要安装的驱动器名称: <驱动器名称>")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"})])])])]),i("div",{class:"ab-tab-content-item markdown-rendered",style:{display:"none"},is_activate:"false"},[i("div",null,[i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"pip"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," install"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," <"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"驱动器包"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"名>")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"})])]),i("p",null,[t("适配器包名可以在商店适配器卡片中找到，或者使用 nb-cli 搜索适配器显示的详情中找到。安装完成后，需要参考"),i("a",{href:"https://nonebot.dev/docs/advanced/adapter#%E6%B3%A8%E5%86%8C%E9%80%82%E9%85%8D%E5%99%A8",target:"_blank",rel:"noopener noreferrer"},"注册适配器章节"),t("自行注册。")])])])])])],-1),s(`<p>如果想要查看驱动器列表，可以使用以下命令</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 列出商店所有驱动器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nb</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> driver</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> list</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 搜索商店驱动器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nb</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> driver</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> search</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [可选关键词]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ()                        👍 None 驱动器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">FastAPI</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (nonebot2[fastapi])    👍 FastAPI 驱动器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Quart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (nonebot2[quart])        👍 Quart 驱动器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">HTTPX</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (nonebot2[httpx])        👍 HTTPX 驱动器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">websockets</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                     👍</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> websockets</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 驱动器</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nonebot2[websockets]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">AIOHTTP</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (nonebot2[aiohttp])    👍 AIOHTTP 驱动器</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>升级和卸载驱动器可以使用以下命令</p>`,3),i("div",{class:"ab-note drop-shadow"},[i("div",{class:"ab-tab-root"},[i("div",{class:"ab-tab-nav"},[i("button",{class:"ab-tab-nav-item",is_activate:"true",onclick:`
            const i = 0
            const tab_current = this
            const tab_nav = this.parentNode
            const tab_root = tab_nav.parentNode
            const tab_content = tab_root.querySelector(":scope>.ab-tab-content")
            const tab_nav_items = tab_nav.querySelectorAll(":scope>.ab-tab-nav-item")
            const tab_content_items = tab_content.querySelectorAll(":scope>.ab-tab-content-item")
            for (let j=0; j<tab_content_items.length; j++){
              tab_nav_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("style", "display:none")
            }
            tab_current.setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("style", "display:block")
          `},"命令方式"),i("button",{class:"ab-tab-nav-item",is_activate:"false",onclick:`
            const i = 1
            const tab_current = this
            const tab_nav = this.parentNode
            const tab_root = tab_nav.parentNode
            const tab_content = tab_root.querySelector(":scope>.ab-tab-content")
            const tab_nav_items = tab_nav.querySelectorAll(":scope>.ab-tab-nav-item")
            const tab_content_items = tab_content.querySelectorAll(":scope>.ab-tab-content-item")
            for (let j=0; j<tab_content_items.length; j++){
              tab_nav_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("style", "display:none")
            }
            tab_current.setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("style", "display:block")
          `},"交互式安装"),i("button",{class:"ab-tab-nav-item",is_activate:"false",onclick:`
            const i = 2
            const tab_current = this
            const tab_nav = this.parentNode
            const tab_root = tab_nav.parentNode
            const tab_content = tab_root.querySelector(":scope>.ab-tab-content")
            const tab_nav_items = tab_nav.querySelectorAll(":scope>.ab-tab-nav-item")
            const tab_content_items = tab_content.querySelectorAll(":scope>.ab-tab-content-item")
            for (let j=0; j<tab_content_items.length; j++){
              tab_nav_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("style", "display:none")
            }
            tab_current.setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("style", "display:block")
          `},"pip安装")]),i("div",{class:"ab-tab-content"},[i("div",{class:"ab-tab-content-item markdown-rendered",style:{display:"block"},is_activate:"true"},[i("div",null,[i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"nb"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," driver"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," update"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," <"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"驱动器名"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"称>")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"nb"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," driver"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," uninstall"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," <"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"驱动器名"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"称>")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"})])])])]),i("div",{class:"ab-tab-content-item markdown-rendered",style:{display:"none"},is_activate:"false"},[i("div",null,[i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"$"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," nb"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," driver"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," update")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"[?] 想要安装的驱动器名称: <驱动器名称>")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"$"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," nb"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," driver"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," uninstall")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"[?] 想要卸载的驱动器名称: <驱动器名称>")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])])])]),i("div",{class:"ab-tab-content-item markdown-rendered",style:{display:"none"},is_activate:"false"},[i("div",null,[i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"pip"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," install"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," --upgrade"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," <"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"驱动器包"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"名>")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"pip"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," uninstall"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," <"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"驱动器包"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"名>")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"})])]),i("p",null,"驱动器包名可以在商店驱动器卡片中找到，或者使用 nb-cli 搜索驱动器显示的详情中找到。卸载完成后，需要自行移除适配器加载。")])])])])],-1)]))}const d=a(h,[["render",r],["__file","03. 获取商店内容.mdx.html.vue"]]),c=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Platform/SoftCode/ChatBot/NoneBot2/version-2.4.1/02.%20%E6%8C%87%E5%8D%97/03.%20%E8%8E%B7%E5%8F%96%E5%95%86%E5%BA%97%E5%86%85%E5%AE%B9.mdx.html","title":"获取商店内容","lang":"zh-CN","frontmatter":{"sidebar_position":2,"description":"从商店安装适配器和插件","options":{"menu":[{"category":"tutorial","weight":40}]},"head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Platform/SoftCode/ChatBot/NoneBot2/version-2.4.1/02.%20%E6%8C%87%E5%8D%97/03.%20%E8%8E%B7%E5%8F%96%E5%95%86%E5%BA%97%E5%86%85%E5%AE%B9.mdx.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"获取商店内容"}],["meta",{"property":"og:description","content":"从商店安装适配器和插件"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"获取商店内容\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"git":{},"readingTime":{"minutes":5.31,"words":1594},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/SoftCode/ChatBot/NoneBot2/version-2.4.1/02. 指南/03. 获取商店内容.mdx.md","excerpt":"\\n<div class=\\"language-vue line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"vue\\" data-title=\\"vue\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">&lt;!--mdx内容--&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">import Tabs from \\"@theme/Tabs\\";</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">import TabItem from \\"@theme/TabItem\\";</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">import Asciinema from \\"@site/src/components/Asciinema\\";</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","bioChainData":{"outlink":[],"backlink":[{"title":"01. 选择驱动器","link":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/SoftCode/ChatBot/NoneBot2/version-2.4.1/04. 进阶/01. 选择驱动器.html"},{"title":"01. 定时任务","link":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/SoftCode/ChatBot/NoneBot2/version-2.4.1/05. 最佳实践/01. 定时任务.html"},{"title":"02. 数据存储","link":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/SoftCode/ChatBot/NoneBot2/version-2.4.1/05. 最佳实践/02. 数据存储.html"},{"title":"03. 错误跟踪","link":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/SoftCode/ChatBot/NoneBot2/version-2.4.1/05. 最佳实践/03. 错误跟踪.html"}],"localMap":{"nodes":[{"id":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/SoftCode/ChatBot/NoneBot2/version-2.4.1/02. 指南/03. 获取商店内容.mdx.md","value":{"title":"03. 获取商店内容.mdx","path":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/SoftCode/ChatBot/NoneBot2/version-2.4.1/02. 指南/03. 获取商店内容.mdx.md","outlink":[],"backlink":["MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/SoftCode/ChatBot/NoneBot2/version-2.4.1/04. 进阶/01. 选择驱动器.md","MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/SoftCode/ChatBot/NoneBot2/version-2.4.1/05. 最佳实践/01. 定时任务.md","MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/SoftCode/ChatBot/NoneBot2/version-2.4.1/05. 最佳实践/02. 数据存储.md","MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/SoftCode/ChatBot/NoneBot2/version-2.4.1/05. 最佳实践/03. 错误跟踪.md"]}},{"id":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/SoftCode/ChatBot/NoneBot2/version-2.4.1/04. 进阶/01. 选择驱动器.md","value":{"title":"01. 选择驱动器","path":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/SoftCode/ChatBot/NoneBot2/version-2.4.1/04. 进阶/01. 选择驱动器.md","outlink":[],"backlink":[]}},{"id":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/SoftCode/ChatBot/NoneBot2/version-2.4.1/05. 最佳实践/01. 定时任务.md","value":{"title":"01. 定时任务","path":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/SoftCode/ChatBot/NoneBot2/version-2.4.1/05. 最佳实践/01. 定时任务.md","outlink":[],"backlink":[]}},{"id":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/SoftCode/ChatBot/NoneBot2/version-2.4.1/05. 最佳实践/02. 数据存储.md","value":{"title":"02. 数据存储","path":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/SoftCode/ChatBot/NoneBot2/version-2.4.1/05. 最佳实践/02. 数据存储.md","outlink":[],"backlink":[]}},{"id":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/SoftCode/ChatBot/NoneBot2/version-2.4.1/05. 最佳实践/03. 错误跟踪.md","value":{"title":"03. 错误跟踪","path":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/SoftCode/ChatBot/NoneBot2/version-2.4.1/05. 最佳实践/03. 错误跟踪.md","outlink":[],"backlink":[]}}],"links":[{"source":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/SoftCode/ChatBot/NoneBot2/version-2.4.1/04. 进阶/01. 选择驱动器.md","target":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/SoftCode/ChatBot/NoneBot2/version-2.4.1/02. 指南/03. 获取商店内容.mdx.md"},{"source":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/SoftCode/ChatBot/NoneBot2/version-2.4.1/05. 最佳实践/01. 定时任务.md","target":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/SoftCode/ChatBot/NoneBot2/version-2.4.1/02. 指南/03. 获取商店内容.mdx.md"},{"source":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/SoftCode/ChatBot/NoneBot2/version-2.4.1/05. 最佳实践/02. 数据存储.md","target":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/SoftCode/ChatBot/NoneBot2/version-2.4.1/02. 指南/03. 获取商店内容.mdx.md"},{"source":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/SoftCode/ChatBot/NoneBot2/version-2.4.1/05. 最佳实践/03. 错误跟踪.md","target":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/SoftCode/ChatBot/NoneBot2/version-2.4.1/02. 指南/03. 获取商店内容.mdx.md"}]}}}');export{d as comp,c as data};

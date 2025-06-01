import{_ as d,c as h,b as n,a as t,d as i,f as e,e as l,r as a,o as p}from"./app-nOKFa9Yh.js";const f={};function c(_,s){const o=a("Mermaid"),r=a("VPIcon");return p(),h("div",null,[s[13]||(s[13]=n(`<h1 id="vuepress-hope主题-源码分析" tabindex="-1">Vuepress Hope主题 源码分析</h1><h2 id="贡献指南" tabindex="-1">贡献指南</h2><p><a href="https://theme-hope.vuejs.press/zh/contribution.html%EF%BC%8C%E8%BF%99%E4%B8%AA%E4%BD%8D%E7%BD%AE%E6%9C%89%E7%82%B9%E8%BF%B7%EF%BC%8C%E7%A0%94%E7%A9%B6%E8%B5%B0%E4%BA%86%E7%82%B9%E5%BC%AF%E8%B7%AF%E5%90%8E%EF%BC%8C%E6%88%91%E6%89%8D%E7%9C%8B%E5%88%B0%E6%9C%89%E8%BF%99%E4%B9%88%E4%B8%80%E9%A1%B5%EF%BC%8C%E5%B1%85%E7%84%B6%E8%A6%81%E7%82%B9" target="_blank" rel="noopener noreferrer">https://theme-hope.vuejs.press/zh/contribution.html，这个位置有点迷，研究走了点弯路后，我才看到有这么一页，居然要点</a> &quot;常见问题&quot; 才能在这个完整版的侧边栏底部看到</p><h3 id="项目文件结构" tabindex="-1">项目文件结构</h3><p>本项目是一个 monorepo，使用 pnpm 管理。</p><ul><li>docs: 放置各插件与主题的文档，每个子文件夹为一个项目</li><li>demo: 主题演示项目</li><li>packages: 放置各<strong>插件与主题</strong>的代码，每个子文件夹为一个项目</li></ul><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-js"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">├── .</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">github</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">GitHub</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 配置</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">├── .</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">husky</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">husky</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 配置</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">demo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">演示项目</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">docs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">文档目录</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">auto</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">catalog</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">auto</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">catalog</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件文档</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">blog</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">blog2</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件文档</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">comment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">comment2</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件文档</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">components</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">components</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件文档</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">copy</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">code</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">copy</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">code2</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件文档</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">feed</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">feed2</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件文档</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">lightgallery</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">lightgallery</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件文档</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">md</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">enhance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">md</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">enhance</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件文档</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">photo</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">swipe</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">photo</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">swipe</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 文档</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">pwa</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">pwa2</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件文档</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">reading</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">time</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">reading</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">time2</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件文档</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">remove</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">pwa</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">remove</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">pwa</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件文档</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">rtl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">rtl</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件文档</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">sass</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">palette</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">sass</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">palette</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件文档</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">shared</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">vuepress</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">shared</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 文档</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">search</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">pro</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">search</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">pro</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件文档</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">seo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">seo2</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件文档</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ └── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">theme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">主题文档</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">docs</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">shared</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">文档的通用文件</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">|</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">packages</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">项目源代码</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">auto</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">catalog</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">auto</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">catalog</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">blog2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">blog2</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">comment2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">comment2</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">components</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">components</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">copy</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">code2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">copy</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">code2</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">create</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">create</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">vuepress</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">theme</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">hope</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 助手</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">feed2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">feed2</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">lightgallery</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">lightgallery</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">md</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">enhance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">md</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">enhance</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">photo</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">swipe</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">photo</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">swipe</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">pwa2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">pwa2</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">reading</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">time2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">reading</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">time2</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">remove</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">pwa</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">remove</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">pwa</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">rtl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">rtl</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">sass</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">palette</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">sass</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">palette</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">search</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">pro</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">search</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">pro</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">seo2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">seo2</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">shared</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">共享文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">sitemap2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">sitemap2</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 插件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│ └── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">theme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">vuepress</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">theme</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">hope</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 主题</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">scripts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">命令脚本</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">├── </span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">...</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">一些配置文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">├── </span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">LICENSE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">协议</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">package</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">json</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">项目根</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> package</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">json</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">├── </span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">README</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">md</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">项目介绍</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">├── </span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">SECURITY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">md</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">安全政策文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">└── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">tsconfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">TypeScript</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 配置文件</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="文档修改" tabindex="-1">文档修改</h3><p>你可以直接在 docs 文件夹内找到对应项目，并修改对应的 Markdown。</p><p>确保 <code>pnpm lint</code> 与 <code>pnpm lint:md</code> 命令没有错误后，即可提交到 GitHub 发起 PR。</p><blockquote><p>预览文档</p><p>由于文档使用的是本地主题和插件，因此你需要先通过 <code>pnpm build</code> 构建本地项目。</p><p>之后在 <code>docs</code> 目录下的正确文档项目文件夹打开终端，运行 <code>pnpm docs:vite-dev</code> (使用 vite) 或 <code>pnpm docs:webpack-dev</code> (使用 webpack)。</p></blockquote><h3 id="项目修改" tabindex="-1">项目修改</h3><p>每个项目的结构都大致如下：</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-js"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">lib</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">编译后的输出文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│    ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">client</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">客户端侧代码</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│    └── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">Node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">js</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 侧代码</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">└── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">源文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">     ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">client</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">客户端侧代码</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">     ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">Node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">js</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 侧代码</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">     └── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">shared</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">客户端和</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> Node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">js</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 的共享文件</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>VuePress 同时运行在客户端和 Node 端。 Node 侧有像 <code>fs</code> 这样的 node 模块，而客户端运行在有<code>document\`\`windows\`\`navigator</code>等全局变量的浏览器中，你应该清楚一段代码运行在哪里。</p><ul><li><code>client</code> 目录存储在浏览器中运行的代码</li><li><code>node</code> 目录存储在 Node.js 中运行的代码</li><li><code>shared</code> 目录存储在客户端和 Node 中使用的文件，因此代码不应引用任何浏览器全局变量或 node 模块。</li></ul><p>为了更好的性能，所有插件在发布时都会使用 rollup 进行打包并压缩。</p><h3 id="提交" tabindex="-1">提交</h3><p>项目使用 <code>husky</code> 添加了额外的 Git Hooks 进行验证：</p><ul><li>在 <code>precommit</code> 阶段我们使用 <code>lint-staged</code> 配合对应 Linter 对改动的代码进行检验<br> 这意味着你需要保证你的代码按照项目要求进行格式化，可以通过 Linter。</li><li>在 <code>commit-msg</code> 阶段我们使用 <code>commitlint</code> 对提交备注进行校验。<br> 这意味着你需要保证你的提交注释符合语义化提交 (Semantic)</li></ul><blockquote><p>提示</p><p>如果你不能通过上述 Git Hooks，你将无法完成 <code>git commit</code>。</p><p>如果你已经进行贡献了一些内容，但无法完成提交且不会修复，你可以在提交时添加 <code>--no-verify</code> Flag 绕过 Git Hooks。</p></blockquote><blockquote><p>husky 个人补充</p><p>对应的是项目中的 <code>/.husky</code> 文件夹，尚不知道是 github 专用还是通用的，不知道是前端专用的还是通用的</p></blockquote><h2 id="main-repo-父项目" tabindex="-1">main-repo 父项目</h2><p>简化：看起来多，但如果将 &quot;可选&quot; 插件的末枝去掉，主干是theme文件夹</p><h3 id="目录结构" tabindex="-1">目录结构</h3><h4 id="项目根目录" tabindex="-1">项目根目录</h4><p><a href="https://github.com/vuepress-theme-hope/vuepress-theme-hope" target="_blank" rel="noopener noreferrer">https://github.com/vuepress-theme-hope/vuepress-theme-hope</a></p>`,27)),s[14]||(s[14]=t("div",{class:"ab-note drop-shadow"},[t("div",{class:"ab-list-table-parent"},[t("table",{class:"ab-table ab-list-table ab-table-folder"},[t("tbody",null,[t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"/")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("strong",null,"main-repo")])])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"(主要目录)")])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"true",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"demo")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"插件使用示例，演示项目")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"一些插件")])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"true",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"docs")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"插件使用文档")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"一些插件")])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"true",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"packages")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"插件源码")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"一些插件")])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"（其他非主要目录）")])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},".github")])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},".husky")])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"true",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},".vscode")])]),t("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"false",type:"json"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"extensions.json")])]),t("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"false",type:"json"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"launch.json")])]),t("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"false",type:"json"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"setting.json")])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"docs-shared")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"文档的通用文件（但内容是代码啊）")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"scripts")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"命令脚本")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"~~node_modules/~~"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"~~node_modules/~~")])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"LICENSE"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"LICENSE")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"协议")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"json"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"package.json")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"项目根 package.json")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"md"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"README.md")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"项目介绍")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"md"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"SECURITY.md")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"安全政策文件")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"*"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"tsconfig.*")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"TypeScript 配置文件")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:`
`},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"...")])])])]),t("button",{class:"ab-table-fold",is_fold:"false",onclick:`          const btn = this;
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
          `},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-fold-vertical-icon lucide-fold-vertical"},[t("path",{d:"M12 22v-6"}),t("path",{d:"M12 8V2"}),t("path",{d:"M4 12H2"}),t("path",{d:"M10 12H8"}),t("path",{d:"M16 12h-2"}),t("path",{d:"M22 12h-2"}),t("path",{d:"m15 19-3-3-3 3"}),t("path",{d:"m15 5-3 3-3-3"})])])])],-1)),s[15]||(s[15]=t("h4",{id:"插件目录-都是一些monorepo组织的子项目",tabindex:"-1"},"插件目录（都是一些monorepo组织的子项目）",-1)),s[16]||(s[16]=t("p",null,[l("一些插件，对应的介绍页："),t("a",{href:"https://vuepress-theme-hope.github.io/v2/zh/config/plugins/intro.html#%E6%8F%92%E4%BB%B6%E9%80%89%E9%A1%B9",target:"_blank",rel:"noopener noreferrer"},"https://vuepress-theme-hope.github.io/v2/zh/config/plugins/intro.html#插件选项")],-1)),s[17]||(s[17]=t("p",null,[l("注意：/demo或docs或packages/xxx/，这一层都是 "),t("strong",null,"sub-repo")],-1)),s[18]||(s[18]=t("div",{class:"ab-note drop-shadow"},[t("div",{class:"ab-list-table-parent"},[t("table",{class:"ab-table ab-list-table ab-table-folder"},[t("tbody",null,[t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"/demo或docs或packages")])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"(Mr.Hope 提供的插件部分)")])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"auto-catalog")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"自动目录页")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"blog2")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"博客插件")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"comment2")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"评论与浏览量")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"components")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"一些开箱即用的插件")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"copy-code2")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"一键复制代码块")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"copyright2")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"在用户复制时追加版权信息，或禁用站点的复制与选择")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"feed2")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Feed 支持 插件")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"md-enhance")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"更多 Markdown 语法")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"photo-swipe")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"基于 Photo Swipe 的图片浏览插件")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"pwa2")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"增强 PWA 支持")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"reading-time2")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"阅读时间与字数统计")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"remove-pwa")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"面向全部插件和主题的 Sass 配置插件")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"seo2")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"SEO 增强插件")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"sitemap2")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Sitemap 插件？(docs不包含)")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"(一些没被主题捆绑的插件)")])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"create")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"(docs不包含)")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"lightgallery")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"基于 lightgallery 图片浏览插件")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"redirect")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"重定向插件")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"[vuepress-plugin-remove-pwa](https://vuepress-theme-hope.github.io/v2/remove-pwa/zh/)")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"移除 PWA 插件")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"search-pro")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"客户端搜索插件")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"(其他没介绍的)")])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"rtl")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"未知插件")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"sass-palette")])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"shared")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"docs是vuepress-shared 文档，packages是共享文件")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"theme")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"一些主题配置")])])])])])]),t("button",{class:"ab-table-fold",is_fold:"false",onclick:`          const btn = this;
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
          `},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-fold-vertical-icon lucide-fold-vertical"},[t("path",{d:"M12 22v-6"}),t("path",{d:"M12 8V2"}),t("path",{d:"M4 12H2"}),t("path",{d:"M10 12H8"}),t("path",{d:"M16 12h-2"}),t("path",{d:"M22 12h-2"}),t("path",{d:"m15 19-3-3-3 3"}),t("path",{d:"m15 5-3 3-3-3"})])])])],-1)),s[19]||(s[19]=n(`<p>有一些插件不在在个路径，例如官方插件：</p><ul><li><a href="https://vuejs.press/zh/reference/plugin/active-header-links.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-active-header-links</a>: 自动更新路由 Hash</li><li><a href="https://vuejs.press/zh/reference/plugin/container.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-container</a>: 自定义容器</li><li><a href="https://vuejs.press/zh/reference/plugin/external-link-icon.html" target="_blank" rel="noopener noreferrer">@vuepress/external-link-icon</a>: 为 Markdown 的外部链接添加外部链接图标。</li><li><a href="https://vuejs.press/zh/reference/plugin/git.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-git</a>: 基于 Git 的信息插件</li><li><a href="https://vuejs.press/zh/reference/plugin/nprogress.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-nprogress</a>: 进度条</li><li><a href="https://vuejs.press/zh/reference/plugin/prismjs.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-prismjs</a>: 基于 prism.js 的代码高亮插件</li><li><a href="https://vuejs.press/zh/reference/plugin/theme-data.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-theme-data</a>: 主题配置的 Composition API 插件</li></ul><h3 id="根-package-json-脚本" tabindex="-1">根 package.json 脚本</h3><ol><li>构建项目: <code>pnpm build</code><ul><li>使用 rollup 打包并压缩代码，并输出到 <code>lib</code> 文件夹</li><li>使用 <code>rollup-plugin-copy</code> 复制其他文件到 <code>lib</code> 文件夹</li></ul></li><li>开发项目: <code>pnpm dev</code><ul><li>使用 <code>tsc</code> 编译 TypeScript 文件到 <code>lib</code> 文件夹</li><li>Use <code>cpx</code> 复制其他文件到 <code>lib</code> 文件夹</li></ul></li></ol><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-json"><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;scripts&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 注意：请不要混用构建和开发命令，因为它们的构建方式完全不同</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 否则你可能需要执行 \`pnpm clean\` 命令来清除上一次的命令结果</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 其他自带通用命令：i、un、publish</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 构建 (packages子项目会各自生成lib文件夹)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;build&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;cross-env NODE_ENV=production pnpm run --stream -r build&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;build:no-bundle&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;concurrently </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">tsc -b tsconfig.build.json</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">pnpm run copy</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 开发</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;dev&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;concurrently </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">tsc -b tsconfig.build.json --watch</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">pnpm run dev:copy</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;dev:copy&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;pnpm run --parallel -r dev:copy&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 通用</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;clean&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;pnpm run --stream -r clean&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;commit&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;pnpm git-cz&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;copy&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;pnpm run --parallel -r copy&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 文档类 (docs子项目会各自生成dist文件夹)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;docs:vite-build&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;pnpm run -r docs:vite-build&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;docs:webpack-build&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;pnpm run -r docs:vite-build&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // lint类，格式化项目</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;lint&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;pnpm lint:prettier --write &amp;&amp; pnpm lint:eslint --fix &amp;&amp; pnpm lint:stylelint --fix&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// prettier、eslint 和 stylelint 格式化</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;lint:check&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;pnpm lint:prettier &amp;&amp; pnpm lint:eslint &amp;&amp; pnpm lint:stylelint&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;lint:eslint&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;eslint . --ext .js,.ts,.vue&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;lint:md&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;markdownlint **/*.md&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 如果你修改了 Markdown，则需要运行</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;lint:prettier&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;prettier --check .&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;lint:stylelint&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;stylelint packages/*/src/**/*.{css,scss}&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 其他类</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;packages:bootstrap&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;tsx scripts/bootstrap.ts&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;packages:check-update&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;pnpm dlx npm-check-updates -u --deep --timeout 600000&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;packages:update&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;pnpm up -r&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;prepare&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;husky install&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;release&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;pnpm clean &amp;&amp; pnpm build &amp;&amp; pnpm release:bump &amp;&amp; pnpm release:publish &amp;&amp; pnpm release:sync&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;release:bump&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;bumpp -r --execute=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">pnpm commit-and-tag-version &amp;&amp; git add CHANGELOG.md</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> --commit </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">chore(release): publish v%s</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> --all --tag --push&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;release:publish&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;cross-env NODE_OPTIONS=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">--experimental-json-modules</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tsx scripts/release.ts&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;release:sync&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;cross-env NODE_OPTIONS=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">--experimental-json-modules</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tsx scripts/sync.ts&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;test&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;vitest --coverage&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="sub-repo-通用子项目" tabindex="-1">sub-repo 通用子项目</h2><p>每个项目的结构都大致如下：</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-js"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">lib</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">编译后的输出文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│    ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">client</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">客户端侧代码</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">│    └── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">Node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">js</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 侧代码</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">└── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">源文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">     ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">client</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">客户端侧代码</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">     ├── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">Node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">js</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 侧代码</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">     └── </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">shared</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> → </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">客户端和</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> Node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">js</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 的共享文件</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>VuePress 同时运行在客户端和 Node 端。 Node 侧有像 <code>fs</code> 这样的 node 模块，而客户端运行在有<code>document\`\`windows\`\`navigator</code>等全局变量的浏览器中，你应该清楚一段代码运行在哪里。</p><ul><li><code>client</code> 目录存储在浏览器中运行的代码</li><li><code>node</code> 目录存储在 Node.js 中运行的代码</li><li><code>shared</code> 目录存储在客户端和 Node 中使用的文件，因此代码不应引用任何浏览器全局变量或 node 模块。</li></ul><p>为了更好的性能，所有插件在发布时都会使用 rollup 进行打包并压缩。</p><h2 id="sub-repo-主题子项目-theme" tabindex="-1">sub-repo 主题子项目 (theme)</h2><h3 id="主题专题" tabindex="-1">主题专题</h3><p>侧边栏专题：</p>`,14)),s[20]||(s[20]=t("div",{class:"ab-note drop-shadow"},[t("div",{class:"ab-list-table-parent"},[t("table",{class:"ab-table ab-list-table ab-table-folder"},[t("tbody",null,[t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"/packages/theme")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"主题 sub-repo，主题子项目")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"src")])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"true",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"client")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"客户端侧代码")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"components")])]),t("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"composables")])]),t("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"layouts")])]),t("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"styles")])]),t("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"utils")])]),t("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"true",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"modules")])]),t("tr",{class:"ab-foldable-tr",tr_level:"4",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"blog")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"博客")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"4",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"encrypt")])]),t("tr",{class:"ab-foldable-tr",tr_level:"4",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"info")])]),t("tr",{class:"ab-foldable-tr",tr_level:"4",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"navbar")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"导航栏")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"4",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"outlook")])]),t("tr",{class:"ab-foldable-tr",tr_level:"4",is_fold:"false",able_fold:"false",type:"com/vuepress-theme-hope/vuepress-theme-hope/tree/main/packages/theme/src/client/modules/sidebar/)"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"[sidebar/](https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/packages/theme/src/client/modules/sidebar/)")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"侧边栏")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"false",type:"ts"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"export.ts")])]),t("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"false",type:"ts"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"index.ts")])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"node")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"Node.js 侧代码")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"presets")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"预设数据和设置")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"shared")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"客户端和Node.js的共享文件")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"ts"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"… .ts")])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"lib")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"项目编译后的文件目录？")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"client/node/presets/shared")])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"\\_\\_test\\_\\_"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"\\_\\_test\\_\\_")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"测试代码")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"templates")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"一些通用的svg、css、scss")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"node_modules")])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"json"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"package.json")])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"md"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"README.md")])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:`
`},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"...")])])])]),t("button",{class:"ab-table-fold",is_fold:"false",onclick:`          const btn = this;
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
          `},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-fold-vertical-icon lucide-fold-vertical"},[t("path",{d:"M12 22v-6"}),t("path",{d:"M12 8V2"}),t("path",{d:"M4 12H2"}),t("path",{d:"M10 12H8"}),t("path",{d:"M16 12h-2"}),t("path",{d:"M22 12h-2"}),t("path",{d:"m15 19-3-3-3 3"}),t("path",{d:"m15 5-3 3-3-3"})])])])],-1)),s[21]||(s[21]=t("h3",{id:"文件结构专题",tabindex:"-1"},"文件结构专题",-1)),s[22]||(s[22]=t("h3",{id:"侧边栏专题-旧",tabindex:"-1"},"侧边栏专题 (旧)",-1)),s[23]||(s[23]=t("div",{class:"ab-note drop-shadow"},[t("div",{class:"ab-list-table-parent"},[t("table",{class:"ab-table ab-list-table ab-table-folder"},[t("tbody",null,[t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"/packages/theme/src/client")])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"utils")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"一些通用的东西")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"ts"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"resolveLinkInfo.ts")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[l("解析链接信息，有能生成目录结构的函数"),t("br"),l(" 被调用：PageNav.ts、autoLink.ts、navbarConfig.ts、resolveConfig.ts")])])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"modules/sidebar")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("a",{href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/packages/theme/src/client/modules/sidebar/",target:"_blank",rel:"noopener noreferrer"},"侧边栏")])])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"true",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"components")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"侧边栏组件的源代码")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"false",type:"ts"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"Sidebar.ts")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"侧边栏主体")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"false",type:"ts"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"SidebarChild.ts")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"文件")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"false",type:"ts"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"SidebarGroup.ts")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"文件夹")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"false",type:"ts"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"SidebarLinks.ts")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"链接")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"true",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"composables")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"包含一些可复用的Vue 3 Composition API 函数")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"false",type:"ts"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"index.ts")])]),t("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"false",type:"ts"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"render.ts")])]),t("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"false",type:"ts"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"resolveConfig.ts")]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"配置解析器，调用了 resolveLinkInfo")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"false",type:"ts"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"setup.ts")])]),t("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"false",type:"ts"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"utils.ts")])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"styles")])]),t("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[t("div",{class:"ab-list-table-svg"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),t("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),t("div",{class:"ab-list-table-witharrow"},"utils")])])])]),t("button",{class:"ab-table-fold",is_fold:"false",onclick:`          const btn = this;
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
          `},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-fold-vertical-icon lucide-fold-vertical"},[t("path",{d:"M12 22v-6"}),t("path",{d:"M12 8V2"}),t("path",{d:"M4 12H2"}),t("path",{d:"M10 12H8"}),t("path",{d:"M16 12h-2"}),t("path",{d:"M22 12h-2"}),t("path",{d:"m15 19-3-3-3 3"}),t("path",{d:"m15 5-3 3-3-3"})])])])],-1)),s[24]||(s[24]=t("p",null,"依赖",-1)),i(o,{id:"mermaid-276",code:"eJx9UEEOgjAQPNNX9AP4BA9yMCbe9EYIASnQWFvSgvHoIzz5An9m/IVlW3RFQg/tdnZ2d3YqnTU13a+I6XIXH9SpUZLJ1pBgxwuWZ5qG4ZL6eMvl0RBqDwYwI6q5KGYZa626BjMAoOFiPIbJYiTMZLlgVhmXBbuQQDOjxJlFSpa88ihMMqztO9pohmJDjZGu5WI0FKA0hichgftCRQx3MkVP49f1/rw9hiovod9pI0sFJQS7BdPdSthyh/wsgFf69PvzGckckt7i6eRXBE6+AXxKuyE="}),s[25]||(s[25]=t("h3",{id:"侧边栏专题",tabindex:"-1"},"侧边栏专题",-1)),t("ul",null,[t("li",null,[s[6]||(s[6]=t("p",null,[t("s",null,"文件结构数据的传递链：")],-1)),t("ul",null,[t("li",null,[s[0]||(s[0]=l("client/utils")),i(r,{icon:`resolveLinkInfo (导航栏侧边栏通用结构, 但会被再次大改) -> ???**getSidebarData** ->
setup.ts ->
@vueuse/core`}),s[1]||(s[1]=l("computedWithControl & resolveConfig")),i(r,{icon:`resolveSidebarItems (加工为侧边栏专用结构) -> 
setupSidebarItems (每次访问网站只计算一次并存起来) -> setup.ts`}),s[2]||(s[2]=l("useSidebarItems (而保存的值会取多遍) ->")),s[3]||(s[3]=t("br",null,null,-1)),s[4]||(s[4]=l(" index.ts -> Sidebar")),i(r,{icon:"sidebarItems -> SidebarLinks"}),s[5]||(s[5]=l("props.config -> SiderbarGroup与SidebarChild"))])])]),t("li",null,[s[11]||(s[11]=t("p",null,[t("s",null,"文件调用链：")],-1)),t("ul",null,[s[10]||(s[10]=t("li",null,[l("index.ts -> setup.ts -> …… ->"),t("br"),l(" Sidebar -> SidebarLinks -> SiderbarGroup")],-1)),t("li",null,[s[7]||(s[7]=l("Sidebar -> sidebar")),i(r,{icon:"index -> sidebar"}),s[8]||(s[8]=l("setup -> sidebar")),i(r,{icon:"resolveConfig -> utils"}),s[9]||(s[9]=l("resolveLinkInfo"))])])]),s[12]||(s[12]=n("<li><p>函数调用栈方式表达（写法说明：函数调用自外向内，数据传递自内向外）</p><ul><li>首次访问 <ul><li>sidebar/setup::setupSidebarItems，存于 sidebarItems <ul><li>sidebar/resolveConfig::resolveSidebarItems <ul><li><strong>(KEY) @temp/theme-hope/sidebar::sidebarData</strong><br> (由node端，node/prepare/sidebar/sidebar.ts 计算并存于 @temp/theme-hope/sidebar.js 中)</li><li>(若文件类型) utils/linkInfo::resolveLinkInfo x md文件个数 <ul><li>utils/linkInfo::utils/resolvePrefix x md文件个数</li></ul></li></ul></li><li>utils/linkInfo::resolveLinkInfo x N</li></ul></li></ul></li><li>取 <ul><li>sidebar/setup::useSidebarItems</li></ul></li></ul></li>",1))]),s[26]||(s[26]=n("<p>侧边栏的可替换组建</p><ul><li>组件: <ul><li><code>@theme-hope/modules/sidebar/components/Sidebar</code> 侧边栏</li><li><code>@theme-hope/modules/sidebar/components/SidebarChild</code> 侧边栏链接子项</li><li><code>@theme-hope/modules/sidebar/components/SidebarGroup</code> 侧边栏分组链接</li><li><code>@theme-hope/modules/sidebar/components/SidebarLinks</code> 侧边栏链接</li></ul></li><li>杂项: <ul><li><code>@theme-hope/modules/sidebar/composables/index</code> 侧边栏可组合 API</li><li><code>@theme-hope/modules/sidebar/utils/index</code> 侧边栏通用函数</li></ul></li></ul>",2))])}const g=d(f,[["render",c]]),b=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Type/Doc/MarkdwonAbout/01.%20Soft%20And%20Frame/VuePress2%20(Vue3)/03.%20%E4%B8%BB%E9%A2%98%E6%89%A9%E5%B1%95/Hope%E4%B8%BB%E9%A2%98/09.%20%E6%BA%90%E7%A0%81/03.%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90.html","title":"Vuepress Hope主题 源码分析","lang":"zh-CN","frontmatter":{"tags":["源码"],"description":"Vuepress Hope主题 源码分析 贡献指南 https://theme-hope.vuejs.press/zh/contribution.html，这个位置有点迷，研究走了点弯路后，我才看到有这么一页，居然要点 \\"常见问题\\" 才能在这个完整版的侧边栏底部看到 项目文件结构 本项目是一个 monorepo，使用 pnpm 管理。 docs: 放置...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vuepress Hope主题 源码分析\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Type/Doc/MarkdwonAbout/01.%20Soft%20And%20Frame/VuePress2%20(Vue3)/03.%20%E4%B8%BB%E9%A2%98%E6%89%A9%E5%B1%95/Hope%E4%B8%BB%E9%A2%98/09.%20%E6%BA%90%E7%A0%81/03.%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Vuepress Hope主题 源码分析"}],["meta",{"property":"og:description","content":"Vuepress Hope主题 源码分析 贡献指南 https://theme-hope.vuejs.press/zh/contribution.html，这个位置有点迷，研究走了点弯路后，我才看到有这么一页，居然要点 \\"常见问题\\" 才能在这个完整版的侧边栏底部看到 项目文件结构 本项目是一个 monorepo，使用 pnpm 管理。 docs: 放置..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"源码"}]],"tag":["源码"]},"git":{},"readingTime":{"minutes":9.15,"words":2746},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Doc/MarkdwonAbout/01. Soft And Frame/VuePress2 (Vue3)/03. 主题扩展/Hope主题/09. 源码/03. 源码分析.md","excerpt":"\\n<h2>贡献指南</h2>\\n<p><a href=\\"https://theme-hope.vuejs.press/zh/contribution.html%EF%BC%8C%E8%BF%99%E4%B8%AA%E4%BD%8D%E7%BD%AE%E6%9C%89%E7%82%B9%E8%BF%B7%EF%BC%8C%E7%A0%94%E7%A9%B6%E8%B5%B0%E4%BA%86%E7%82%B9%E5%BC%AF%E8%B7%AF%E5%90%8E%EF%BC%8C%E6%88%91%E6%89%8D%E7%9C%8B%E5%88%B0%E6%9C%89%E8%BF%99%E4%B9%88%E4%B8%80%E9%A1%B5%EF%BC%8C%E5%B1%85%E7%84%B6%E8%A6%81%E7%82%B9\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://theme-hope.vuejs.press/zh/contribution.html，这个位置有点迷，研究走了点弯路后，我才看到有这么一页，居然要点</a> \\"常见问题\\" 才能在这个完整版的侧边栏底部看到</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Doc/MarkdwonAbout/01. Soft And Frame/VuePress2 (Vue3)/03. 主题扩展/Hope主题/09. 源码/03. 源码分析.md","value":{"title":"03. 源码分析","path":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Doc/MarkdwonAbout/01. Soft And Frame/VuePress2 (Vue3)/03. 主题扩展/Hope主题/09. 源码/03. 源码分析.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{g as comp,b as data};

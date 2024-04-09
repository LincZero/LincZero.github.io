import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as e}from"./app-IRYUHD7s.js";const t={},o=e(`<h1 id="项目分析" tabindex="-1"><a class="header-anchor" href="#项目分析"><span>项目分析</span></a></h1><p>当前使用版本</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;linczero-websize&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LincZero WebSize&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LGPL-2.1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build src&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:clean-dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev src --clean-cache&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev src&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:update-package&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pnpm dlx vp-update&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;@vuepress/client&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.0.0-beta.67&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.3.4&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vuepress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.0.0-beta.67&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vuepress-theme-hope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.0.0-beta.237&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构分析" tabindex="-1"><a class="header-anchor" href="#结构分析"><span>结构分析</span></a></h2><h3 id="路径分析" tabindex="-1"><a class="header-anchor" href="#路径分析"><span>路径分析</span></a></h3><ul><li>/src/ <ul><li>.vuepress/ <ul><li>config.ts； 第一批加载项，全局配置，使用 &quot;./theme.js&quot;</li><li>theme.ts； 第二批加载项，主题配置，使用 &quot;./navbar/&quot; 和 &quot;./sidebar/&quot;</li><li>navbar/； 第三批加载项，存储导航栏</li><li>sidebar/； 第三批加载项，存储侧边栏</li><li>public/； 共有资源，图标图片等</li><li>styles/； 自定义样式等</li><li><s>.cache/； (gitignore)</s></li><li><s>.temp/； (gitignore)</s></li><li><s>dist； (gitignore)</s></li></ul></li><li>README.md</li><li>... (other md)</li></ul></li><li>/.gitignore</li><li>/package.json</li><li>/pnpm-lock.yaml</li></ul><h3 id="文件分析" tabindex="-1"><a class="header-anchor" href="#文件分析"><span>文件分析</span></a></h3><h4 id="config-ts" tabindex="-1"><a class="header-anchor" href="#config-ts"><span>config.ts</span></a></h4><p>该文件的大部分配置可以查这个页面：https://vuejs.press/zh/reference/config.html</p><p>简化目录版</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 从 &quot;vuepress&quot; 导入定义用户配置的方法</span>
<span class="token keyword">import</span> theme <span class="token keyword">from</span> <span class="token string">&quot;./theme.js&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 从当前目录下的 &quot;theme.js&quot; 文件导入主题</span>

<span class="token comment">// 使用定义的用户配置导出一个默认的配置对象</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  base<span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 设置基本目录路径</span>

  locales<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 设置多语言配置</span>

  theme<span class="token punctuation">,</span> <span class="token comment">// 使用导入的主题</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整版</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 从 &quot;vuepress&quot; 导入定义用户配置的方法</span>
<span class="token keyword">import</span> theme <span class="token keyword">from</span> <span class="token string">&quot;./theme.js&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 从当前目录下的 &quot;theme.js&quot; 文件导入主题</span>

<span class="token comment">// 使用定义的用户配置导出一个默认的配置对象</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  base<span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 设置基本目录路径</span>

  locales<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 设置多语言配置</span>
    <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      lang<span class="token operator">:</span> <span class="token string">&quot;en-US&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 设定语言为美式英语</span>
      title<span class="token operator">:</span> <span class="token string">&quot;Docs Demo&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 设定标题</span>
      description<span class="token operator">:</span> <span class="token string">&quot;A docs demo for vuepress-theme-hope&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 设定描述</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;/zh/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      lang<span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">&quot;文档演示&quot;</span><span class="token punctuation">,</span>
      description<span class="token operator">:</span> <span class="token string">&quot;vuepress-theme-hope 的文档演示&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  theme<span class="token punctuation">,</span> <span class="token comment">// 使用导入的主题</span>

  <span class="token comment">// 使网页成为PWA</span>
  <span class="token comment">// shouldPrefetch: false, // 是否预获取</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="theme-ts" tabindex="-1"><a class="header-anchor" href="#theme-ts"><span>theme.ts</span></a></h4><p>该文件的大部分配置可以查这两个页面：</p><ul><li>默认主题：https://vuejs.press/zh/reference/default-theme/config.html</li><li>Hope独有：https://theme-hope.vuejs.press/zh/config/theme/layout.html</li></ul><p>简化目录版</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// 导出默认的主题配置</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 信息类</span>
  hostname<span class="token operator">:</span> <span class="token string">&quot;http://192.168.0.101:8080/&quot;</span><span class="token punctuation">,</span> <span class="token comment">//设置网站主机名</span>
  author<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 设置作者信息</span>
    name<span class="token operator">:</span> <span class="token string">&quot;LincZero&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 作者姓名</span>
    url<span class="token operator">:</span> <span class="token string">&quot;https://github.com/LincZero/&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 作者网站链接</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  repo<span class="token operator">:</span> <span class="token string">&quot;LincZero/LincZero-Vuepress&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 仓库地址</span>
  iconAssets<span class="token operator">:</span> <span class="token string">&quot;fontawesome-with-brands&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 使用 FontAwesome 图标库</span>
  logo<span class="token operator">:</span> <span class="token string">&quot;/logo.svg&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 设置 logo 路径</span>

  <span class="token comment">// 配置类</span>
  docsDir<span class="token operator">:</span> <span class="token string">&quot;src&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 存放文档的目录</span>
  locales<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 多语言设置 ?</span>
  encrypt<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 加密配置</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 插件配置</span>
    comment<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 评论系统的配置</span>
    mdEnhance<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 扩展 Markdown 的功能</span>
    pwa<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// PWA 的设置</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整版</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 从 &quot;vuepress-theme-hope&quot; 导入 hope 主题</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> enNavbar<span class="token punctuation">,</span> zhNavbar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./navbar/index.js&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 导入英语和中文导航栏配置</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> enSidebar<span class="token punctuation">,</span> zhSidebar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./sidebar/index.js&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 导入英语和中文侧边栏配置</span>

<span class="token comment">// 导出默认的主题配置</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  hostname<span class="token operator">:</span> <span class="token string">&quot;https://vuepress-theme-hope-docs-demo.netlify.app&quot;</span><span class="token punctuation">,</span> <span class="token comment">//设置主机名</span>

  author<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 设置作者信息</span>
    name<span class="token operator">:</span> <span class="token string">&quot;Mr.Hope&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 作者姓名</span>
    url<span class="token operator">:</span> <span class="token string">&quot;https://mister-hope.com&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 作者网站链接</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  iconAssets<span class="token operator">:</span> <span class="token string">&quot;fontawesome-with-brands&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 使用 FontAwesome 图标库</span>

  logo<span class="token operator">:</span> <span class="token string">&quot;/logo.svg&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 设置 logo 路径</span>

  repo<span class="token operator">:</span> <span class="token string">&quot;vuepress-theme-hope/vuepress-theme-hope&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 仓库地址</span>

  docsDir<span class="token operator">:</span> <span class="token string">&quot;src&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 存放文档的目录</span>
  
  locales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 英文</span>
      navbar<span class="token operator">:</span> enNavbar<span class="token punctuation">,</span> <span class="token comment">// 导航栏</span>
      sidebar<span class="token operator">:</span> enSidebar<span class="token punctuation">,</span> <span class="token comment">// 侧边栏</span>
      footer<span class="token operator">:</span> <span class="token string">&quot;Default footer&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 页脚文本</span>
      displayFooter<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 显示页脚</span>
      metaLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
        editLink<span class="token operator">:</span> <span class="token string">&quot;Edit this page on GitHub&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Github上编辑该页的文本</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token string-property property">&quot;/zh/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      navbar<span class="token operator">:</span> zhNavbar<span class="token punctuation">,</span>
      sidebar<span class="token operator">:</span> zhSidebar<span class="token punctuation">,</span>
      footer<span class="token operator">:</span> <span class="token string">&quot;默认页脚&quot;</span><span class="token punctuation">,</span>
      displayFooter<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      metaLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
        editLink<span class="token operator">:</span> <span class="token string">&quot;在 GitHub 上编辑此页&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  encrypt<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 加密配置</span>
    config<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;/demo/encrypt.html&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;1234&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// &quot;/demo/encrypt.html&quot; 需要使用 &quot;1234&quot; 进行解密</span>
      <span class="token string-property property">&quot;/zh/demo/encrypt.html&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;1234&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// &quot;/zh/demo/encrypt.html&quot; 需要使用 &quot;1234&quot; 进行解密</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  plugins<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 插件配置</span>
    comment<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 评论系统的配置</span>
      provider<span class="token operator">:</span> <span class="token string">&quot;Giscus&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 评论系统提供商</span>
      repo<span class="token operator">:</span> <span class="token string">&quot;vuepress-theme-hope/giscus-discussions&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 用于存放讨论的仓库</span>
      repoId<span class="token operator">:</span> <span class="token string">&quot;R_kgDOG_Pt2A&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 仓库 ID</span>
      category<span class="token operator">:</span> <span class="token string">&quot;Announcements&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 类别</span>
      categoryId<span class="token operator">:</span> <span class="token string">&quot;DIC_kwDOG_Pt2M4COD69&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 类别的 ID</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    mdEnhance<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 扩展 Markdown 的功能</span>
      align<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 对齐</span>
      attrs<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 属性</span>
      chart<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 图表</span>
      codetabs<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 代码标签</span>
      demo<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 演示</span>
      echarts<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Echarts 图表工具</span>
      figure<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Figure 图表工具</span>
      flowchart<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 流程图</span>
      gfm<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// GitHub 风格的 Markdown</span>
      imgLazyload<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 懒加载图片</span>
      imgSize<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 图片大小</span>
      include<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 包括</span>
      katex<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Katex 数学公式渲染工具</span>
      mark<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 标记</span>
      mermaid<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Mermaid 图表工具</span>
      playground<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 在线代码演示设置</span>
        presets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 预设</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      presentation<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;highlight&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;math&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;search&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;notes&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;zoom&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 展示工具</span>
      stylize<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// 样式化工具</span>
        <span class="token punctuation">{</span>
          matcher<span class="token operator">:</span> <span class="token string">&quot;Recommended&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 匹配器</span>
          <span class="token function-variable function">replacer</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> tag <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// 替换器</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>tag <span class="token operator">===</span> <span class="token string">&quot;em&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 如果标签为 &quot;em&quot;</span>
              <span class="token keyword">return</span> <span class="token punctuation">{</span>
                tag<span class="token operator">:</span> <span class="token string">&quot;Badge&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 替换为 &quot;Badge&quot; 标签</span>
                attrs<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;tip&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 设置属性</span>
                content<span class="token operator">:</span> <span class="token string">&quot;Recommended&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 设置内容</span>
              <span class="token punctuation">}</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      sub<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 子项</span>
      sup<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 上标</span>
      tabs<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 标签</span>
      vPre<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Vue 预处理</span>
      vuePlayground<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Vue 种植场</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// PWA 的设置</span>
    <span class="token comment">// pwa: {</span>
    <span class="token comment">//   favicon: &quot;/favicon.ico&quot;,</span>
    <span class="token comment">//   cacheHTML: true,</span>
    <span class="token comment">//   cachePic: true,</span>
    <span class="token comment">//   appendBase: true,</span>
    <span class="token comment">//   apple: {</span>
    <span class="token comment">//     icon: &quot;/assets/icon/apple-icon-152.png&quot;,</span>
    <span class="token comment">//     statusBarColor: &quot;black&quot;,</span>
    <span class="token comment">//   },</span>
    <span class="token comment">//   msTile: {</span>
    <span class="token comment">//     image: &quot;/assets/icon/ms-icon-144.png&quot;,</span>
    <span class="token comment">//     color: &quot;#ffffff&quot;,</span>
    <span class="token comment">//   },</span>
    <span class="token comment">//   manifest: {</span>
    <span class="token comment">//     icons: [</span>
    <span class="token comment">//       {</span>
    <span class="token comment">//         src: &quot;/assets/icon/chrome-mask-512.png&quot;,</span>
    <span class="token comment">//         sizes: &quot;512x512&quot;,</span>
    <span class="token comment">//         purpose: &quot;maskable&quot;,</span>
    <span class="token comment">//         type: &quot;image/png&quot;,</span>
    <span class="token comment">//       },</span>
    <span class="token comment">//       {</span>
    <span class="token comment">//         src: &quot;/assets/icon/chrome-mask-192.png&quot;,</span>
    <span class="token comment">//         sizes: &quot;192x192&quot;,</span>
    <span class="token comment">//         purpose: &quot;maskable&quot;,</span>
    <span class="token comment">//         type: &quot;image/png&quot;,</span>
    <span class="token comment">//       },</span>
    <span class="token comment">//       {</span>
    <span class="token comment">//         src: &quot;/assets/icon/chrome-512.png&quot;,</span>
    <span class="token comment">//         sizes: &quot;512x512&quot;,</span>
    <span class="token comment">//         type: &quot;image/png&quot;,</span>
    <span class="token comment">//       },</span>
    <span class="token comment">//       {</span>
    <span class="token comment">//         src: &quot;/assets/icon/chrome-192.png&quot;,</span>
    <span class="token comment">//         sizes: &quot;192x192&quot;,</span>
    <span class="token comment">//         type: &quot;image/png&quot;,</span>
    <span class="token comment">//       },</span>
    <span class="token comment">//     ],</span>
    <span class="token comment">//     shortcuts: [</span>
    <span class="token comment">//       {</span>
    <span class="token comment">//         name: &quot;Demo&quot;,</span>
    <span class="token comment">//         short_name: &quot;Demo&quot;,</span>
    <span class="token comment">//         url: &quot;/demo/&quot;,</span>
    <span class="token comment">//         icons: [</span>
    <span class="token comment">//           {</span>
    <span class="token comment">//             src: &quot;/assets/icon/guide-maskable.png&quot;,</span>
    <span class="token comment">//             sizes: &quot;192x192&quot;,</span>
    <span class="token comment">//             purpose: &quot;maskable&quot;,</span>
    <span class="token comment">//             type: &quot;image/png&quot;,</span>
    <span class="token comment">//           },</span>
    <span class="token comment">//         ],</span>
    <span class="token comment">//       },</span>
    <span class="token comment">//     ],</span>
    <span class="token comment">//   },</span>
    <span class="token comment">// },</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解析顺序" tabindex="-1"><a class="header-anchor" href="#解析顺序"><span>解析顺序</span></a></h4><p>有的地方是不是重复了？还是说是不同的、有区别的？我不太懂。</p><p>例如config.ts和theme.ts都有locales字段来设置多语言 (en和zh两种语言)？</p><p>然后这两个文件，一般哪个是“更大”的配置，哪个是“较小”的配置，会先解析哪个先</p><hr><p>这是一个很好的问题。在许多项目中，你会看到配置信息散布在多个不同的文件和位置。这主要是因为每个文件都有各自的责任和用途。</p><p><code>config.ts</code> 和 <code>theme.ts</code> 都有 <code>locales</code> 字段是因为 Vuepress 的 <code>locales</code> 是多层级的。</p><ol><li>在 <code>config.ts</code> 文件中， <code>locales</code> 字段设置的是<strong>全局层次</strong>的语言配置，例如整个网站的语言、标题、描述等。</li><li>在 <code>theme.ts</code> 文件中，<code>locales</code> 字段则是在 <strong>主题层次</strong>做语言配置，例如主题的导航栏、侧边栏、页脚等按照语言的不同来设置。</li></ol><p>一个简单的理解方式是 <code>config.ts</code> 提供了全局（&quot;更大&quot;）的配置，<code>theme.ts</code> 对特定主题（&quot;较小&quot;）的配置进行了更为细致的定义和调整。虽然它们看起来可能有一些重复，但这种设计让配置更加灵活，可以在不同的层级进行不同的定制。</p><p>解析顺序上，通常先解析 <code>config.ts</code> 的全局配置，然后 <code>theme.ts</code> 的主题配置会覆盖或添加到全局配置中。所以，如果你在 <code>theme.ts</code> 中设置了与 <code>config.ts</code> 中同名的字段，<code>theme.ts</code> 中的设置将会生效。</p><h2 id="功能分析" tabindex="-1"><a class="header-anchor" href="#功能分析"><span>功能分析</span></a></h2><p>Hope主题将主题配置分成了个六维度：</p><ol><li>基本</li><li>功能</li><li>布局</li><li>外观</li><li>多语言</li><li>行为</li></ol>`,33),p=[o];function c(l,i){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","01. 项目使用分析.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Type/Doc/MarkdwonAbout/VuePress2%20(Vue3)/03.%20%E4%B8%BB%E9%A2%98%E6%89%A9%E5%B1%95/Hope%E4%B8%BB%E9%A2%98/09.%20%E6%BA%90%E7%A0%81/01.%20%E9%A1%B9%E7%9B%AE%E4%BD%BF%E7%94%A8%E5%88%86%E6%9E%90.html","title":"项目分析","lang":"zh-CN","frontmatter":{"description":"项目分析 当前使用版本 结构分析 路径分析 /src/ .vuepress/ config.ts； 第一批加载项，全局配置，使用 \\"./theme.js\\" theme.ts； 第二批加载项，主题配置，使用 \\"./navbar/\\" 和 \\"./sidebar/\\" navbar/； 第三批加载项，存储导航栏 sidebar/； 第三批加载项，存储侧边栏 pu...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Type/Doc/MarkdwonAbout/VuePress2%20(Vue3)/03.%20%E4%B8%BB%E9%A2%98%E6%89%A9%E5%B1%95/Hope%E4%B8%BB%E9%A2%98/09.%20%E6%BA%90%E7%A0%81/01.%20%E9%A1%B9%E7%9B%AE%E4%BD%BF%E7%94%A8%E5%88%86%E6%9E%90.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"项目分析"}],["meta",{"property":"og:description","content":"项目分析 当前使用版本 结构分析 路径分析 /src/ .vuepress/ config.ts； 第一批加载项，全局配置，使用 \\"./theme.js\\" theme.ts； 第二批加载项，主题配置，使用 \\"./navbar/\\" 和 \\"./sidebar/\\" navbar/； 第三批加载项，存储导航栏 sidebar/； 第三批加载项，存储侧边栏 pu..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"项目分析\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"项目分析","slug":"项目分析","link":"#项目分析","children":[{"level":2,"title":"结构分析","slug":"结构分析","link":"#结构分析","children":[{"level":3,"title":"路径分析","slug":"路径分析","link":"#路径分析","children":[]},{"level":3,"title":"文件分析","slug":"文件分析","link":"#文件分析","children":[{"level":4,"title":"config.ts","slug":"config-ts","link":"#config-ts","children":[]},{"level":4,"title":"theme.ts","slug":"theme-ts","link":"#theme-ts","children":[]},{"level":4,"title":"解析顺序","slug":"解析顺序","link":"#解析顺序","children":[]}]}]},{"level":2,"title":"功能分析","slug":"功能分析","link":"#功能分析","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":5.69,"words":1708},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Type/Doc/MarkdwonAbout/VuePress2 (Vue3)/03. 主题扩展/Hope主题/09. 源码/01. 项目使用分析.md","autoDesc":true}');export{d as comp,m as data};

import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as c,c as l,b as n,d as s,e,a as t}from"./app-CctSPqZW.js";const i={},r=t(`<h1 id="obsidian" tabindex="-1"><a class="header-anchor" href="#obsidian"><span>Obsidian</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="插件接口剖析-纯obsidian接口" tabindex="-1"><a class="header-anchor" href="#插件接口剖析-纯obsidian接口"><span>插件接口剖析（纯Obsidian接口）</span></a></h1><p><mark>这里仅展示纯Obsidian接口，Ob中也可使用CodeMirror接口，详见CodeMirror相关笔记</mark></p><h2 id="常用" tabindex="-1"><a class="header-anchor" href="#常用"><span>常用</span></a></h2><h3 id="plugin2-ex-component" tabindex="-1"><a class="header-anchor" href="#plugin2-ex-component"><span>Plugin2（Ex Component）</span></a></h3><h4 id="register-方法" tabindex="-1"><a class="header-anchor" href="#register-方法"><span>register…… 方法</span></a></h4><h5 id="注册代码块-registermarkdowncodeblockprocessor" tabindex="-1"><a class="header-anchor" href="#注册代码块-registermarkdowncodeblockprocessor"><span>注册代码块（registerMarkdownCodeBlockProcessor）</span></a></h5><p>（代码选自 chat-view-qq 插件）</p><div class="language-tsx line-numbers-mode" data-ext="tsx" data-title="tsx"><pre class="language-tsx"><code><span class="token comment">// 注册代码块</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">registerMarkdownCodeBlockProcessor</span><span class="token punctuation">(</span><span class="token string">&quot;chat-qq&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>source<span class="token punctuation">,</span> el<span class="token punctuation">,</span> _<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">new</span> <span class="token class-name">Chat_qq</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> el<span class="token punctuation">,</span> _<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="注册后处理器-registermarkdownpostprocessor" tabindex="-1"><a class="header-anchor" href="#注册后处理器-registermarkdownpostprocessor"><span>注册后处理器（registerMarkdownPostProcessor）</span></a></h5><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 注册后处理器</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">registerMarkdownPostProcessor</span><span class="token punctuation">(</span>
    <span class="token function">buildPostProcessor</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>postProcessorConfig<span class="token punctuation">)</span>	<span class="token comment">// 好像是每一段（双换行）都会调一次</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="注册编辑器扩展-registereditorextension" tabindex="-1"><a class="header-anchor" href="#注册编辑器扩展-registereditorextension"><span>注册编辑器扩展（registerEditorExtension）</span></a></h5><p>（代码选自 cm6-Decoration 插件）</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 注册编辑器扩展</span>
<span class="token literal-property property">editorExtension</span><span class="token operator">:</span> Extension<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">registerEditorExtension</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>editorExtension<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>editorExtension<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>        <span class="token comment">// 清空数组</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>editorExtension<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">suggestionsExtension</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> suggestionsExtension <span class="token operator">=</span> <span class="token punctuation">(</span>plugin<span class="token operator">:</span> MyPlugin<span class="token punctuation">)</span><span class="token operator">:</span> ViewPlugin<span class="token operator">&lt;</span>PluginValue<span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或</p><p>（代码选自 list-callout 插件）</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">registerEditorExtension</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    calloutsConfigField<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">buildEditorConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    calloutExtension
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="注册事件-registerevent" tabindex="-1"><a class="header-anchor" href="#注册事件-registerevent"><span>注册事件（registerEvent）</span></a></h5><p>创建一个新的文件</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Plugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;obsidian&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">ExamplePlugin</span> <span class="token keyword">extends</span> <span class="token class-name">Plugin</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">onload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">registerEvent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>app<span class="token punctuation">.</span>vault<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;create&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a new file has entered the arena&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检测打开文件和布局修改</p><p>（代码选自 cm6-Decoration 插件）</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">registerEvent</span><span class="token punctuation">(</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>app<span class="token punctuation">.</span>workspace<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;file-open&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">fileObj</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;file-open:&quot;</span><span class="token punctuation">,</span> fileObj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打开了文件</span>
        <span class="token comment">// 这将保存到插件对象中，并允许CM6扩展查看文件是否刚刚更改，因此即使文档/视口没有更改，它也会运行</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>fileObj<span class="token punctuation">)</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onFileOpen <span class="token operator">=</span> fileObj<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">registerEvent</span><span class="token punctuation">(</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>app<span class="token punctuation">.</span>workspace<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;layout-change&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// 目前还没有做任何事情，但会监测</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;layout-change&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 布局改变了</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="注册dom事件-registerdomevent" tabindex="-1"><a class="header-anchor" href="#注册dom事件-registerdomevent"><span>注册Dom事件（registerDomEvent）</span></a></h5><p>（代码选自 cm6-Decoration 插件）</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 如果插件连接了任何全局DOM事件(应用程序中不属于这个插件的部分)</span>
<span class="token comment">// 当这个插件被禁用时，使用这个函数将自动删除事件监听器。</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">registerDomEvent</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">evt</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(&#39;click&#39;, evt);</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="注册计时事件-registerinterval" tabindex="-1"><a class="header-anchor" href="#注册计时事件-registerinterval"><span>注册计时事件（registerInterval）</span></a></h5><p>计时事件</p>`,29),u={href:"https://developer.mozilla.org/en-US/docs/Web/API/setInterval",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"window.setInterval()",-1),k={href:"https://marcus.se.net/obsidian-plugin-docs/reference/typescript/classes/Component#registerinterval",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"registerInterval()",-1),m=t(`<p>以下示例在状态栏中显示当前时间，每秒更新一次：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> moment<span class="token punctuation">,</span> Plugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;obsidian&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">ExamplePlugin</span> <span class="token keyword">extends</span> <span class="token class-name">Plugin</span> <span class="token punctuation">{</span>
  statusBar<span class="token operator">:</span> HTMLElement<span class="token punctuation">;</span>

  <span class="token keyword">async</span> <span class="token function">onload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>statusBar <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addStatusBarItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateStatusBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// highlight-start</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">registerInterval</span><span class="token punctuation">(</span>
      window<span class="token punctuation">.</span><span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateStatusBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token comment">// 每秒更新一次</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// highlight-end</span>
  <span class="token punctuation">}</span>

  <span class="token function">updateStatusBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>statusBar<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;H:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),b={href:"https://momentjs.com/",target:"_blank",rel:"noopener noreferrer"},y=t(`<h5 id="注册编辑建议-registereditorsuggest" tabindex="-1"><a class="header-anchor" href="#注册编辑建议-registereditorsuggest"><span>注册编辑建议（registerEditorSuggest）</span></a></h5><p>（插件 Ad 中使用过）</p><h5 id="注册视图窗口-registerview" tabindex="-1"><a class="header-anchor" href="#注册视图窗口-registerview"><span>注册视图窗口（registerView）</span></a></h5><p>略，详见：第三方文档 &gt; 用户界面 &gt; 视图</p><h5 id="注册其他" tabindex="-1"><a class="header-anchor" href="#注册其他"><span>注册其他</span></a></h5><p>形如 <code>register……</code> 的方法，主要是Plugin2和Component接口声明的</p><p>（有五个没见过，其他都见过有插件用）</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// Plugin_2 (8)</span>
<span class="token function">registerView</span><span class="token punctuation">(</span>type<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">viewCreator</span><span class="token operator">:</span> ViewCreator<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span> 		<span class="token comment">//</span>
<span class="token function">registerExtensions</span><span class="token punctuation">(</span>extensions<span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">viewType</span><span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>	<span class="token comment">//**</span>
<span class="token function">registerEditorExtension</span><span class="token punctuation">(</span>extension<span class="token operator">:</span> Extension<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>				<span class="token comment">//</span>
<span class="token function">registerMarkdownPostProcessor</span><span class="token punctuation">(</span>postProcessor<span class="token operator">:</span> MarkdownPostProcessor<span class="token punctuation">,</span> sortOrder<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> MarkdownPostProcessor<span class="token punctuation">;</span> <span class="token comment">//</span>
<span class="token function">registerMarkdownCodeBlockProcessor</span><span class="token punctuation">(</span>language<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">handler</span><span class="token operator">:</span> <span class="token punctuation">(</span>source<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">el</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">,</span> <span class="token comment">//</span>
			<span class="token literal-property property">ctx</span><span class="token operator">:</span> MarkdownPostProcessorContext<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Promise<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">,</span> sortOrder<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> MarkdownPostProcessor<span class="token punctuation">;</span>
<span class="token function">registerCodeMirror</span><span class="token punctuation">(</span><span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">cm</span><span class="token operator">:</span> CodeMirror<span class="token punctuation">.</span>Editor</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">//**</span>
<span class="token function">registerObsidianProtocolHandler</span><span class="token punctuation">(</span>action<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">handler</span><span class="token operator">:</span> ObsidianProtocolHandler<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">//**</span>
<span class="token function">registerEditorSuggest</span><span class="token punctuation">(</span>editorSuggest<span class="token operator">:</span> EditorSuggest<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">//</span>

<span class="token comment">// Component (5)</span>
<span class="token function">register</span><span class="token punctuation">(</span><span class="token function-variable function">cb</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">//**</span>
<span class="token function">registerEvent</span><span class="token punctuation">(</span>eventRef<span class="token operator">:</span> EventRef<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">//</span>
<span class="token function">registerScopeEvent</span><span class="token punctuation">(</span>keyHandler<span class="token operator">:</span> KeymapEventHandler<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">//**</span>
<span class="token function">registerInterval</span><span class="token punctuation">(</span>id<span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> number<span class="token punctuation">;</span> <span class="token comment">//</span>
registerDomEvent<span class="token operator">&lt;</span><span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token class-name">keyof</span> WindowEventMap<span class="token operator">&gt;</span><span class="token punctuation">(</span>el<span class="token operator">:</span> Window<span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">,</span> <span class="token literal-property property">callback</span><span class="token operator">:</span>  <span class="token comment">//</span>
			<span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">this</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">,</span> <span class="token literal-property property">ev</span><span class="token operator">:</span> WindowEventMap<span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> boolean <span class="token operator">|</span> AddEventListenerOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
registerDomEvent<span class="token operator">&lt;</span><span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token class-name">keyof</span> DocumentEventMap<span class="token operator">&gt;</span><span class="token punctuation">(</span>el<span class="token operator">:</span> Document<span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> 
			<span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">this</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">,</span> <span class="token literal-property property">ev</span><span class="token operator">:</span> DocumentEventMap<span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> boolean <span class="token operator">|</span> AddEventListenerOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
registerDomEvent<span class="token operator">&lt;</span><span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token class-name">keyof</span> HTMLElementEventMap<span class="token operator">&gt;</span><span class="token punctuation">(</span>el<span class="token operator">:</span> HTMLElement<span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> 
			<span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">this</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">,</span> <span class="token literal-property property">ev</span><span class="token operator">:</span> HTMLElementEventMap<span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> boolean <span class="token operator">|</span> AddEventListenerOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="plugin-2" tabindex="-1"><a class="header-anchor" href="#plugin-2"><span>Plugin_2</span></a></h4><div class="language-tsx line-numbers-mode" data-ext="tsx" data-title="tsx"><pre class="language-tsx"><code><span class="token keyword">export</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Plugin_2</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
	<span class="token comment">/**
     * @public
     */</span>
    app<span class="token operator">:</span> App<span class="token punctuation">;</span>
    <span class="token comment">/**
     * @public
     */</span>
    manifest<span class="token operator">:</span> PluginManifest<span class="token punctuation">;</span>
    <span class="token comment">/**
     * @public
     */</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>app<span class="token operator">:</span> App<span class="token punctuation">,</span> manifest<span class="token operator">:</span> PluginManifest<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * 将色带图标添加到左侧栏
     * @param icon - The icon name to be used. See {@link addIcon}
     * @param title - The title to be displayed in the tooltip.
     * @param callback - The \`click\` callback.
     * @public
     */</span>
    <span class="token function">addRibbonIcon</span><span class="token punctuation">(</span>icon<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span>evt<span class="token operator">:</span> MouseEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">;</span>
    <span class="token comment">/**
     * @public
     */</span>
    <span class="token function">addStatusBarItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">;</span>
    <span class="token comment">/**
     * Register a command globally. The command id and name will be automatically prefixed with this plugin&#39;s id and name.
     * @public
     */</span>
    <span class="token function">addCommand</span><span class="token punctuation">(</span>command<span class="token operator">:</span> Command<span class="token punctuation">)</span><span class="token operator">:</span> Command<span class="token punctuation">;</span>
    <span class="token comment">/**
     * @public
     */</span>
    <span class="token function">addSettingTab</span><span class="token punctuation">(</span>settingTab<span class="token operator">:</span> PluginSettingTab<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * @public
     */</span>
    <span class="token function">registerView</span><span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> viewCreator<span class="token operator">:</span> ViewCreator<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * 注册 - 视图
     * @public
     */</span>
    <span class="token function">registerExtensions</span><span class="token punctuation">(</span>extensions<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> viewType<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * 注册 - 扩展？
     * registerExtensions 和 registerEditorExtensions 的区别是什么？
     * @public
     */</span>
    <span class="token function">registerMarkdownPostProcessor</span><span class="token punctuation">(</span>postProcessor<span class="token operator">:</span> MarkdownPostProcessor<span class="token punctuation">,</span> sortOrder<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> MarkdownPostProcessor<span class="token punctuation">;</span>
    <span class="token comment">/**
     * 注册 - MD后处理器
     * 注册一个特殊的后处理器来处理给定语言和处理程序的隔离代码。
	 * 这个特殊的后处理器负责删除&lt;pre&gt;&lt;代码&gt;，并创建一个&lt;div&gt;
	 * 将被传递给你的处理程序，并被期望用你的自定义元素填充。
	 * @示例 list-callouts用了
	 * @param postProcessor是一个复用接口，本质是(el: HTMLElement, ctx: MarkdownPostProcessorContext): Promise&lt;any&gt; | void;
     * @public
     */</span>
    <span class="token function">registerMarkdownCodeBlockProcessor</span><span class="token punctuation">(</span>language<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token punctuation">(</span>source<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> el<span class="token operator">:</span> HTMLElement<span class="token punctuation">,</span> ctx<span class="token operator">:</span> MarkdownPostProcessorContext<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">,</span> sortOrder<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> MarkdownPostProcessor<span class="token punctuation">;</span>
    <span class="token comment">/**
     * 注册 - 代码块处理器
     * 对所有当前加载的CodeMirror实例运行回调，
	 * 然后为所有未来的CodeMirror实例注册回调。
	 * @示例 在代码块里渲染的都是
     * @public
     */</span>
    <span class="token function">registerCodeMirror</span><span class="token punctuation">(</span><span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span>cm<span class="token operator">:</span> CodeMirror<span class="token punctuation">.</span>Editor<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * 注册 - CodeMirror 6扩展。
	 * 要为你的插件动态地重新配置cm6扩展，你可以在这里动态地传递一个数组
	 * 修改它。一旦这个数组被修改，调用&#39; Workspace.updateOptions() &#39;来应用更改
     * @param extension - 必须是一个CodeMirror 6 &#39;扩展&#39;，或一个数组的扩展
     * @public
     */</span>
    <span class="token function">registerEditorExtension</span><span class="token punctuation">(</span>extension<span class="token operator">:</span> Extension<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * 注册 - 编辑器扩展
     * 为 obsidian://url 注册一个处理程序。
	 * @param action - 操作字符串。例如，“open”对应于“obsidian://open”。
	 * @param handler - 要触发的回调。您将得到从查询中解码的键-值对。
	 * 					例如：obsidian://open?Key =value 将生成 {&quot;action&quot;: &quot;open&quot;， &quot; Key &quot;: &quot;value&quot;}
	 * @示例 list-callouts用了
     * @public
     */</span>
    <span class="token function">registerObsidianProtocolHandler</span><span class="token punctuation">(</span>action<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> handler<span class="token operator">:</span> ObsidianProtocolHandler<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * 注册 - 注册Obsidian协议处理程序
     * 注册一个EditorSuggest，它可以在用户输入时提供实时建议
     * @public
     */</span>
    <span class="token function">registerEditorSuggest</span><span class="token punctuation">(</span>editorSuggest<span class="token operator">:</span> EditorSuggest<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * 注册 - 编辑器建议
     * @public
     */</span>
    <span class="token function">loadData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * @public
     */</span>
    <span class="token function">saveData</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="component" tabindex="-1"><a class="header-anchor" href="#component"><span>Component</span></a></h4><div class="language-tsx line-numbers-mode" data-ext="tsx" data-title="tsx"><pre class="language-tsx"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>

    <span class="token comment">/**
     * Load this component and its children
     * @public
     */</span>
    <span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * Override this to load your component
     * @public
     * @virtual
     */</span>
    <span class="token function">onload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * Unload this component and its children
     * @public
     */</span>
    <span class="token function">unload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * Override this to unload your component
     * @public
     * @virtual
     */</span>
    <span class="token function">onunload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * Adds a child component, loading it if this component is loaded
     * @public
     */</span>
    <span class="token generic-function"><span class="token function">addChild</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> Component<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>component<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * 移除子组件，卸载它
     * @public
     */</span>
    <span class="token generic-function"><span class="token function">removeChild</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> Component<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>component<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * 注册一个回调函数，以便在卸载时调用
     * @public
     */</span>
    <span class="token function">register</span><span class="token punctuation">(</span><span class="token function-variable function">cb</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * 在卸载时注册一个要分离的事件
     * @public
     */</span>
    <span class="token function">registerEvent</span><span class="token punctuation">(</span>eventRef<span class="token operator">:</span> EventRef<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * 注册事件
     * 在卸载时注册一个要分离的DOM事件
     * @public
     */</span>
    <span class="token generic-function"><span class="token function">registerDomEvent</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> WindowEventMap<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>el<span class="token operator">:</span> Window<span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">,</span> ev<span class="token operator">:</span> WindowEventMap<span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> AddEventListenerOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * 注册Dom事件
     * 在卸载时注册一个要分离的DOM事件
     * @public
     */</span>
    <span class="token generic-function"><span class="token function">registerDomEvent</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> DocumentEventMap<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>el<span class="token operator">:</span> Document<span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">,</span> ev<span class="token operator">:</span> DocumentEventMap<span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> AddEventListenerOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * 在卸载时注册一个要分离的DOM事件
     * @public
     */</span>
    <span class="token generic-function"><span class="token function">registerDomEvent</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> HTMLElementEventMap<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>el<span class="token operator">:</span> HTMLElement<span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">,</span> ev<span class="token operator">:</span> HTMLElementEventMap<span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> AddEventListenerOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * 在卸载时注册一个要分离的DOM事件
     * @public
     */</span>
    <span class="token function">registerScopeEvent</span><span class="token punctuation">(</span>keyHandler<span class="token operator">:</span> KeymapEventHandler<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * 注册范围事件
     * 注册一个在卸载时取消的间隔(来自setInterval)
	 * 使用 {@link window.setInterval} 而不是 {@link setInterval}，以避免TypeScript混淆NodeJS和浏览器API
     * @public
     */</span>
    <span class="token function">registerInterval</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="workspace-ex-event" tabindex="-1"><a class="header-anchor" href="#workspace-ex-event"><span>Workspace（Ex Event）</span></a></h3><h4 id="onlayoutready-updateoptions-方法" tabindex="-1"><a class="header-anchor" href="#onlayoutready-updateoptions-方法"><span>onLayoutReady &amp; updateOptions 方法</span></a></h4><p>例如：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 【启动高亮】 - 插件加载时</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>app<span class="token punctuation">.</span>workspace<span class="token punctuation">.</span><span class="token function">onLayoutReady</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>	<span class="token comment">////////////////</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;onLayoutReady&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateEditorExtension</span><span class="token punctuation">(</span><span class="token function">suggestionsExtension</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 启动高亮功能</span>
<span class="token function">updateEditorExtension</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">extension</span><span class="token operator">:</span> Extension</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这应该只在启动/加载插件时运行一次</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;updateEditorExtension&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>editorExtension<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>editorExtension<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>extension<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>app<span class="token punctuation">.</span>workspace<span class="token punctuation">.</span><span class="token function">updateOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">////////////////</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="workspace" tabindex="-1"><a class="header-anchor" href="#workspace"><span>Workspace</span></a></h4><p><code>this.app.workspace</code> 即可获取</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Workspace</span> <span class="token keyword">extends</span> <span class="token class-name">Events</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token literal-property property">leftSplit</span><span class="token operator">:</span> WorkspaceSidedock <span class="token operator">|</span> WorkspaceMobileDrawer<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token literal-property property">rightSplit</span><span class="token operator">:</span> WorkspaceSidedock <span class="token operator">|</span> WorkspaceMobileDrawer<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token literal-property property">leftRibbon</span><span class="token operator">:</span> WorkspaceRibbon<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token literal-property property">rightRibbon</span><span class="token operator">:</span> WorkspaceRibbon<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token literal-property property">rootSplit</span><span class="token operator">:</span> WorkspaceRoot<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Indicates the currently focused leaf, if one exists.
     *
     * Please avoid using \`activeLeaf\` directly, especially without checking whether
     * \`activeLeaf\` is null.
     *
     * The recommended alternatives are:
     * - If you need information about the current view, use <span class="token punctuation">{</span><span class="token keyword">@link</span> getActiveViewOfType<span class="token punctuation">}</span>.
     * - If you need to open a new file or navigate a view, use <span class="token punctuation">{</span><span class="token keyword">@link</span> getLeaf<span class="token punctuation">}</span>.
     *
     * <span class="token keyword">@public</span>
     * <span class="token keyword">@deprecated</span> - The use of this field is discouraged.
     */</span>
    <span class="token literal-property property">activeLeaf</span><span class="token operator">:</span> WorkspaceLeaf <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token literal-property property">containerEl</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token literal-property property">layoutReady</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token literal-property property">requestSaveLayout</span><span class="token operator">:</span> Debouncer<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> Promise<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token literal-property property">requestSaveHistory</span><span class="token operator">:</span> Debouncer<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 如果布局已经准备好，则立即运行回调函数，
	 * 或将其推到队列中，以便稍后在布局准备就绪时调用。
     * <span class="token keyword">@public</span>
     * */</span>
    <span class="token function">onLayoutReady</span><span class="token punctuation">(</span><span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">changeLayout</span><span class="token punctuation">(</span>workspace<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">getLayout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> any<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">createLeafInParent</span><span class="token punctuation">(</span>parent<span class="token operator">:</span> WorkspaceSplit<span class="token punctuation">,</span> <span class="token literal-property property">index</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> WorkspaceLeaf<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">createLeafBySplit</span><span class="token punctuation">(</span>leaf<span class="token operator">:</span> WorkspaceLeaf<span class="token punctuation">,</span> direction<span class="token operator">?</span><span class="token operator">:</span> SplitDirection<span class="token punctuation">,</span> before<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">)</span><span class="token operator">:</span> WorkspaceLeaf<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@public</span>
     * <span class="token keyword">@deprecated</span> - You should use <span class="token punctuation">{</span><span class="token keyword">@link</span> getLeaf|getLeaf(true)<span class="token punctuation">}</span> instead which does the same thing.
     */</span>
    <span class="token function">splitActiveLeaf</span><span class="token punctuation">(</span>direction<span class="token operator">?</span><span class="token operator">:</span> SplitDirection<span class="token punctuation">)</span><span class="token operator">:</span> WorkspaceLeaf<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">duplicateLeaf</span><span class="token punctuation">(</span>leaf<span class="token operator">:</span> WorkspaceLeaf<span class="token punctuation">,</span> direction<span class="token operator">?</span><span class="token operator">:</span> SplitDirection<span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span>WorkspaceLeaf<span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@public</span>
     * <span class="token keyword">@deprecated</span> - You should use <span class="token punctuation">{</span><span class="token keyword">@link</span> getLeaf|getLeaf(false)<span class="token punctuation">}</span> instead which does the same thing.
     */</span>
    <span class="token function">getUnpinnedLeaf</span><span class="token punctuation">(</span>type<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> WorkspaceLeaf<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Creates a new leaf in a leaf adjacent to the currently active leaf.
     * If direction is \`&#39;vertical&#39;\`, the leaf will appear to the right.
     * If direction is \`&#39;horizontal&#39;\`, the leaf will appear below the current leaf.
     *
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">getLeaf</span><span class="token punctuation">(</span>newLeaf<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;split&#39;</span><span class="token punctuation">,</span> direction<span class="token operator">?</span><span class="token operator">:</span> SplitDirection<span class="token punctuation">)</span><span class="token operator">:</span> WorkspaceLeaf<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * If newLeaf is false (or not set) then an existing leaf which can be navigated
     * is returned, or a new leaf will be created if there was no leaf available.
     *
     * If newLeaf is \`&#39;tab&#39;\` or \`true\` then a new leaf will be created in the preferred
     * location within the root split and returned.
     *
     * If newLeaf is \`&#39;split&#39;\` then a new leaf will be created adjacent to the currently active leaf.
     *
     * If newLeaf is \`&#39;window&#39;\` then a popout window will be created with a new leaf inside.
     *
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">getLeaf</span><span class="token punctuation">(</span>newLeaf<span class="token operator">?</span><span class="token operator">:</span> PaneType <span class="token operator">|</span> boolean<span class="token punctuation">)</span><span class="token operator">:</span> WorkspaceLeaf<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Migrates this leaf to a new popout window.
     * Only works on the desktop app.
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">moveLeafToPopout</span><span class="token punctuation">(</span>leaf<span class="token operator">:</span> WorkspaceLeaf<span class="token punctuation">,</span> data<span class="token operator">?</span><span class="token operator">:</span> WorkspaceWindowInitData<span class="token punctuation">)</span><span class="token operator">:</span> WorkspaceWindow<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Open a new popout window with a single new leaf and return that leaf.
     * Only works on the desktop app.
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">openPopoutLeaf</span><span class="token punctuation">(</span>data<span class="token operator">?</span><span class="token operator">:</span> WorkspaceWindowInitData<span class="token punctuation">)</span><span class="token operator">:</span> WorkspaceLeaf<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">openLinkText</span><span class="token punctuation">(</span>linktext<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">sourcePath</span><span class="token operator">:</span> string<span class="token punctuation">,</span> newLeaf<span class="token operator">?</span><span class="token operator">:</span> PaneType <span class="token operator">|</span> boolean<span class="token punctuation">,</span> openViewState<span class="token operator">?</span><span class="token operator">:</span> OpenViewState<span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Sets the active leaf
     * <span class="token keyword">@param</span> <span class="token parameter">leaf</span> - The new active leaf
     * <span class="token keyword">@param</span> <span class="token parameter">pushHistory</span> - Whether to push the navigation history, or replace the current navigation history.
     * <span class="token keyword">@param</span> <span class="token parameter">focus</span> - Whether to ask the leaf to focus.
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">setActiveLeaf</span><span class="token punctuation">(</span>leaf<span class="token operator">:</span> WorkspaceLeaf<span class="token punctuation">,</span> pushHistory<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span> focus<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** 通过id获取树叶
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">getLeafById</span><span class="token punctuation">(</span>id<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> WorkspaceLeaf<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 获取树叶组
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">getGroupLeaves</span><span class="token punctuation">(</span>group<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> WorkspaceLeaf<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** 获取最新的树叶
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">getMostRecentLeaf</span><span class="token punctuation">(</span>root<span class="token operator">?</span><span class="token operator">:</span> WorkspaceParent<span class="token punctuation">)</span><span class="token operator">:</span> WorkspaceLeaf <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 获取左树叶
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">getLeftLeaf</span><span class="token punctuation">(</span>split<span class="token operator">:</span> boolean<span class="token punctuation">)</span><span class="token operator">:</span> WorkspaceLeaf<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 获取右树叶
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">getRightLeaf</span><span class="token punctuation">(</span>split<span class="token operator">:</span> boolean<span class="token punctuation">)</span><span class="token operator">:</span> WorkspaceLeaf<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** 
     * 【重要】例如 const view: View|null = this.app.workspace.getActiveViewOfType(MarkdownView);
     * 注意：需要有聚焦(active)才能生效，否则会返回null
     * <span class="token keyword">@public</span>
     */</span>
    getActiveViewOfType<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">View</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>type<span class="token operator">:</span> Constructor<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Returns the file for the current view if it&#39;s a FileView.
     *
     * Otherwise, it will recent the most recently active file.
     * 注意：需要有聚焦(active)才能生效，否则会返回null
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">getActiveFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> TFile <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Iterate through all leaves in the main area of the workspace.
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">iterateRootLeaves</span><span class="token punctuation">(</span><span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">leaf</span><span class="token operator">:</span> WorkspaceLeaf</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Iterate through all leaves, including main area leaves, floating leaves, and sidebar leaves.
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">iterateAllLeaves</span><span class="token punctuation">(</span><span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">leaf</span><span class="token operator">:</span> WorkspaceLeaf</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 
     * 【重要】例如 this.app.workspace.getLeavesOfType(VIEW_TYPE_EXAMPLE).forEach((leaf) =&gt; <span class="token punctuation">{</span>...<span class="token punctuation">}</span>)
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">getLeavesOfType</span><span class="token punctuation">(</span>viewType<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> WorkspaceLeaf<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 根据类型删除树叶节点
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">detachLeavesOfType</span><span class="token punctuation">(</span>viewType<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 显示树叶节点
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">revealLeaf</span><span class="token punctuation">(</span>leaf<span class="token operator">:</span> WorkspaceLeaf<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">getLastOpenFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 调用此函数将更新/重新配置所有markdown窗格的选项。
	 * 它是相当昂贵的，所以不应该经常调用
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">updateOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">iterateCodeMirrors</span><span class="token punctuation">(</span><span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">cm</span><span class="token operator">:</span> CodeMirror<span class="token punctuation">.</span>Editor</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

    <span class="token comment">// on()类</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">on</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token string">&#39;quick-preview&#39;</span><span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">file</span><span class="token operator">:</span> TFile<span class="token punctuation">,</span> <span class="token literal-property property">data</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">,</span> ctx<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> EventRef<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 调整大小
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">on</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">,</span> ctx<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> EventRef<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">on</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">evt</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">,</span> ctx<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> EventRef<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 叶子节点聚焦切换
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">on</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token string">&#39;active-leaf-change&#39;</span><span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">leaf</span><span class="token operator">:</span> WorkspaceLeaf <span class="token operator">|</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">,</span> ctx<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> EventRef<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 文件打开
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">on</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token string">&#39;file-open&#39;</span><span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">file</span><span class="token operator">:</span> TFile <span class="token operator">|</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">,</span> ctx<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> EventRef<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** 布局改变
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">on</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token string">&#39;layout-change&#39;</span><span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">,</span> ctx<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> EventRef<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 窗口打开
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">on</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token string">&#39;window-open&#39;</span><span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">win</span><span class="token operator">:</span> WorkspaceWindow<span class="token punctuation">,</span> <span class="token literal-property property">window</span><span class="token operator">:</span> Window</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">,</span> ctx<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> EventRef<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 窗口关闭
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">on</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token string">&#39;window-close&#39;</span><span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">win</span><span class="token operator">:</span> WorkspaceWindow<span class="token punctuation">,</span> <span class="token literal-property property">window</span><span class="token operator">:</span> Window</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">,</span> ctx<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> EventRef<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** css改变
     * Triggered when the CSS of the app has changed.
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">on</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token string">&#39;css-change&#39;</span><span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">,</span> ctx<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> EventRef<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 文件菜单
     * Triggered when the user opens the context menu on a file.
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">on</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token string">&#39;file-menu&#39;</span><span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">menu</span><span class="token operator">:</span> Menu<span class="token punctuation">,</span> <span class="token literal-property property">file</span><span class="token operator">:</span> TAbstractFile<span class="token punctuation">,</span> <span class="token literal-property property">source</span><span class="token operator">:</span> string<span class="token punctuation">,</span> leaf<span class="token operator">?</span><span class="token operator">:</span> WorkspaceLeaf</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">,</span> ctx<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> EventRef<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** 编辑器菜单
     * Triggered when the user opens the context menu on an editor.
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">on</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token string">&#39;editor-menu&#39;</span><span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">menu</span><span class="token operator">:</span> Menu<span class="token punctuation">,</span> <span class="token literal-property property">editor</span><span class="token operator">:</span> Editor<span class="token punctuation">,</span> <span class="token literal-property property">view</span><span class="token operator">:</span> MarkdownView</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">,</span> ctx<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> EventRef<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 编辑器改变
     * Triggered when changes to an editor has been applied, either programmatically or from a user event.
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">on</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token string">&#39;editor-change&#39;</span><span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">editor</span><span class="token operator">:</span> Editor<span class="token punctuation">,</span> <span class="token literal-property property">markdownView</span><span class="token operator">:</span> MarkdownView</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">,</span> ctx<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> EventRef<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 编辑器黏贴
     * Triggered when the editor receives a paste event.
     * Check for \`evt.defaultPrevented\` before attempting to handle this event, and return if it has been already handled.
     * Use \`evt.preventDefault()\` to indicate that you&#39;ve handled the event.
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">on</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token string">&#39;editor-paste&#39;</span><span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">evt</span><span class="token operator">:</span> ClipboardEvent<span class="token punctuation">,</span> <span class="token literal-property property">editor</span><span class="token operator">:</span> Editor<span class="token punctuation">,</span> <span class="token literal-property property">markdownView</span><span class="token operator">:</span> MarkdownView</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">,</span> ctx<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> EventRef<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Triggered when the editor receives a drop event.
     * Check for \`evt.defaultPrevented\` before attempting to handle this event, and return if it has been already handled.
     * Use \`evt.preventDefault()\` to indicate that you&#39;ve handled the event.
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">on</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token string">&#39;editor-drop&#39;</span><span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">evt</span><span class="token operator">:</span> DragEvent<span class="token punctuation">,</span> <span class="token literal-property property">editor</span><span class="token operator">:</span> Editor<span class="token punctuation">,</span> <span class="token literal-property property">markdownView</span><span class="token operator">:</span> MarkdownView</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">,</span> ctx<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> EventRef<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">on</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token string">&#39;codemirror&#39;</span><span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">cm</span><span class="token operator">:</span> CodeMirror<span class="token punctuation">.</span>Editor</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">,</span> ctx<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> EventRef<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** 退出
     * Triggered when the app is about to quit. Not guaranteed to actually run.
     * Perform some best effort cleanup here.
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">on</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token string">&#39;quit&#39;</span><span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">tasks</span><span class="token operator">:</span> Tasks</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">,</span> ctx<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> EventRef<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="event" tabindex="-1"><a class="header-anchor" href="#event"><span>Event</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Events</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">on</span><span class="token punctuation">(</span>name<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>data<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">,</span> ctx<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> EventRef<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">off</span><span class="token punctuation">(</span>name<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>data<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">offref</span><span class="token punctuation">(</span>ref<span class="token operator">:</span> EventRef<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">trigger</span><span class="token punctuation">(</span>name<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token operator">...</span>data<span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">tryTrigger</span><span class="token punctuation">(</span>evt<span class="token operator">:</span> EventRef<span class="token punctuation">,</span> <span class="token literal-property property">args</span><span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h3><h4 id="comand" tabindex="-1"><a class="header-anchor" href="#comand"><span>Comand</span></a></h4><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@public</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 用于标识该命令的全局唯一ID。
     * <span class="token keyword">@public</span>
     */</span>
    id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Human friendly name for searching.
     * <span class="token keyword">@public</span>
     */</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Icon ID to be used in the toolbar.
     * <span class="token keyword">@public</span>
     */</span>
    icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** <span class="token keyword">@public</span> */</span>
    mobileOnly<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Whether holding the hotkey should repeatedly trigger this command. Defaults to false.
     * <span class="token keyword">@public</span>
     */</span>
    repeatable<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 简单的回调，全局触发。
     * <span class="token keyword">@public</span>
     */</span>
    callback<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 复杂回调，覆盖简单回调。用于“检查”当前环境下命令是否可以执行。
	 * 例如，如果您的命令要求活动聚焦窗格是MarkdownSourceView，那么只有在条件满足时才应该返回true。
	 * 返回false或undefined将导致命令从命令面板中隐藏。
	 *
     * <span class="token keyword">@param</span> <span class="token parameter">checking</span> - 命令面板是否只是检查，您的命令是否应该立即执行。
     * 如果checking为true，则该函数不应执行任何操作。
	 * 如果checking为false，则该函数应执行该操作。
	 *
     * <span class="token keyword">@returns</span> 当前是否可以执行该命令。
     * <span class="token keyword">@public</span>
     */</span>
    checkCallback<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>checking<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 只在用户处于编辑器中时触发的命令回调。
     * 覆盖 \`callback\` and \`checkCallback\`
     * <span class="token keyword">@public</span>
     */</span>
    editorCallback<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>editor<span class="token operator">:</span> Editor<span class="token punctuation">,</span> view<span class="token operator">:</span> MarkdownView<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 只在用户处于编辑器中时触发的命令回调。
     * 覆盖 \`editorCallback\`, \`callback\` and \`checkCallback\`
     * <span class="token keyword">@public</span>
     */</span>
    editorCheckCallback<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>checking<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span> editor<span class="token operator">:</span> Editor<span class="token punctuation">,</span> view<span class="token operator">:</span> MarkdownView<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 设置默认热键。建议插件尽可能避免设置默认热键，
	 * 避免热键与用户设置的热键冲突，即使自定义热键具有更高的优先级。
     * <span class="token keyword">@public</span>
     */</span>
    hotkeys<span class="token operator">?</span><span class="token operator">:</span> Hotkey<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="markdown相关" tabindex="-1"><a class="header-anchor" href="#markdown相关"><span>Markdown相关</span></a></h2><h3 id="markdownrenderer-ex-markdownrenderchild-ex-component" tabindex="-1"><a class="header-anchor" href="#markdownrenderer-ex-markdownrenderchild-ex-component"><span>MarkdownRenderer（Ex MarkdownRenderChild, Ex Component）</span></a></h3><h4 id="markdownrenderer" tabindex="-1"><a class="header-anchor" href="#markdownrenderer"><span>MarkdownRenderer</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">export</span> abstract <span class="token keyword">class</span> <span class="token class-name">MarkdownRenderer</span> <span class="token keyword">extends</span> <span class="token class-name">MarkdownRenderChild</span> <span class="token keyword">implements</span> <span class="token class-name">MarkdownPreviewEvents</span><span class="token punctuation">,</span> HoverParent<span class="token punctuation">,</span> MarkdownFileInfo <span class="token punctuation">{</span>
    <span class="token comment">// 可以将字符串生成为Markdown渲染结果（HTML），注意是最终渲染的结果</span>
    <span class="token keyword">static</span> <span class="token function">renderMarkdown</span><span class="token punctuation">(</span>markdown<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">el</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">,</span> <span class="token literal-property property">sourcePath</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Component<span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="markdownrenderchild" tabindex="-1"><a class="header-anchor" href="#markdownrenderchild"><span>MarkdownRenderChild</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MarkdownRenderChild</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** <span class="token keyword">@public</span> */</span>
    <span class="token literal-property property">containerEl</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">containerEl</span> - This HTMLElement will be used to test whether this component is still alive.
     * It should be a child of the markdown preview sections, and when it&#39;s no longer attached
     * (for example, when it is replaced with a new version because the user edited the markdown source code),
     * this component will be unloaded.
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>containerEl<span class="token operator">:</span> HTMLElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="markdownview" tabindex="-1"><a class="header-anchor" href="#markdownview"><span>MarkdownView</span></a></h3><h3 id="markdownpostprocessorcontext-ctx" tabindex="-1"><a class="header-anchor" href="#markdownpostprocessorcontext-ctx"><span>MarkdownPostProcessorContext（ctx）</span></a></h3><p>定义，内容不多，主要使用 <code>addChild</code> 方法</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">MarkdownPostProcessorContext</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token literal-property property">docId</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** <span class="token keyword">@public</span> */</span>
    <span class="token literal-property property">sourcePath</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** <span class="token keyword">@public</span> */</span>
    <span class="token literal-property property">frontmatter</span><span class="token operator">:</span> any <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    
    <span class="token doc-comment comment">/**
     * 添加将由呈现器管理其生命周期的子组件。
	 * 使用此命令向渲染器添加一个依赖的子组件，这样如果子组件的containerEl被移除，组件的unload将被调用。
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">addChild</span><span class="token punctuation">(</span>child<span class="token operator">:</span> MarkdownRenderChild<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 获取此元素在此时间点的节信息。
	 * 只在需要此信息之前调用此函数以获得最新版本。
	 * 此函数在许多情况下也可能返回null;如果使用它，必须准备好处理空值
     * <span class="token keyword">@public</span>
     */</span>
    <span class="token function">getSectionInfo</span><span class="token punctuation">(</span>el<span class="token operator">:</span> HTMLElement<span class="token punctuation">)</span><span class="token operator">:</span> MarkdownSectionInformation <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用场景，这两个方法都会传入该实例</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">registerMarkdownCodeBlockProcessor</span><span class="token punctuation">(</span><span class="token string">&quot;tx&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>renderMarkdown<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">registerMarkdownPostProcessor</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>processTextSection<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">renderMarkdown</span><span class="token punctuation">(</span>
  <span class="token literal-property property">src</span><span class="token operator">:</span> string<span class="token punctuation">,</span>                                <span class="token comment">// 代码块内容</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">,</span>                       	  <span class="token comment">// 代码块渲染的元素</span>
  <span class="token literal-property property">ctx</span><span class="token operator">:</span> MarkdownPostProcessorContext 		  <span class="token comment">// md后处理器</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">processTextSection</span><span class="token punctuation">(</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">,</span>                        	  <span class="token comment">// 代码块渲染的元素</span>
  <span class="token literal-property property">ctx</span><span class="token operator">:</span> MarkdownPostProcessorContext		  	  <span class="token comment">// md后处理器</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般使用方法</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> child <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MarkdownRenderChild</span><span class="token punctuation">(</span>blockEl<span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>
MarkdownRenderer<span class="token punctuation">.</span><span class="token function">renderMarkdown</span><span class="token punctuation">(</span>src<span class="token punctuation">,</span> blockEl<span class="token punctuation">,</span> ctx<span class="token punctuation">.</span>sourcePath<span class="token punctuation">,</span> child<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> src <span class="token operator">=</span> <span class="token function">getSourceMarkdown</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用举例</p><p>（代码片段为Obsidian第三方手册的后处理器的emoji替换示例）</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> codeblocks<span class="token punctuation">.</span>length<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> codeblock <span class="token operator">=</span> codeblocks<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> text <span class="token operator">=</span> codeblock<span class="token punctuation">.</span>innerText<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>text<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">&amp;&amp;</span> text<span class="token punctuation">[</span>text<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&quot;:&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// highlight-next-line</span>
        ctx<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Emoji</span><span class="token punctuation">(</span>codeblock<span class="token punctuation">,</span> text<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调试输出ctx</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">addChild</span><span class="token operator">:</span> <span class="token function">f</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    <span class="token literal-property property">containerEl</span><span class="token operator">:</span> div<span class="token punctuation">.</span>markdown<span class="token operator">-</span>preview<span class="token operator">-</span>sizer<span class="token punctuation">.</span>markdown<span class="token operator">-</span>preview<span class="token operator">-</span>section	<span class="token comment">// 显示整篇文章的div</span>
    docId
    <span class="token literal-property property">el</span><span class="token operator">:</span> div			<span class="token comment">// 所在段落的div（严格换行的一行，非严格换行的一段）</span>
    fromtmatter
    getSectionInfo
    promises
    sourcePath		<span class="token comment">// 这篇文档在Vault中的路径</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43);function g(w,h){const a=o("ExternalLinkIcon");return c(),l("div",null,[r,n("p",null,[s("如果要以固定延迟重复调用函数，请使用 "),n("a",u,[d,e(a)]),s("功能与 "),n("a",k,[v,e(a)]),s("方法。")]),m,n("p",null,[s("其中， "),n("a",b,[s("Moment "),e(a)]),s("是一个流行的 JavaScript 库，用于处理日期和时间。 Obsidian 内部使用 Moment，因此您无需自行安装。 您可以改为从 Obsidian API 导入它")]),y])}const E=p(i,[["render",g],["__file","09. 接口剖析.html.vue"]]),M=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Type/Doc/MarkdwonAbout/Obsidian/%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91/09.%20%E6%8E%A5%E5%8F%A3%E5%89%96%E6%9E%90.html","title":"Obsidian","lang":"zh-CN","frontmatter":{"description":"Obsidian 目录 插件接口剖析（纯Obsidian接口） 这里仅展示纯Obsidian接口，Ob中也可使用CodeMirror接口，详见CodeMirror相关笔记 常用 Plugin2（Ex Component） register…… 方法 注册代码块（registerMarkdownCodeBlockProcessor） （代码选自 chat...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Type/Doc/MarkdwonAbout/Obsidian/%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91/09.%20%E6%8E%A5%E5%8F%A3%E5%89%96%E6%9E%90.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Obsidian"}],["meta",{"property":"og:description","content":"Obsidian 目录 插件接口剖析（纯Obsidian接口） 这里仅展示纯Obsidian接口，Ob中也可使用CodeMirror接口，详见CodeMirror相关笔记 常用 Plugin2（Ex Component） register…… 方法 注册代码块（registerMarkdownCodeBlockProcessor） （代码选自 chat..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Obsidian\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"Obsidian","slug":"obsidian","link":"#obsidian","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"插件接口剖析（纯Obsidian接口）","slug":"插件接口剖析-纯obsidian接口","link":"#插件接口剖析-纯obsidian接口","children":[{"level":2,"title":"常用","slug":"常用","link":"#常用","children":[{"level":3,"title":"Plugin2（Ex Component）","slug":"plugin2-ex-component","link":"#plugin2-ex-component","children":[{"level":4,"title":"register…… 方法","slug":"register-方法","link":"#register-方法","children":[{"level":5,"title":"注册代码块（registerMarkdownCodeBlockProcessor）","slug":"注册代码块-registermarkdowncodeblockprocessor","link":"#注册代码块-registermarkdowncodeblockprocessor","children":[]},{"level":5,"title":"注册后处理器（registerMarkdownPostProcessor）","slug":"注册后处理器-registermarkdownpostprocessor","link":"#注册后处理器-registermarkdownpostprocessor","children":[]},{"level":5,"title":"注册编辑器扩展（registerEditorExtension）","slug":"注册编辑器扩展-registereditorextension","link":"#注册编辑器扩展-registereditorextension","children":[]},{"level":5,"title":"注册事件（registerEvent）","slug":"注册事件-registerevent","link":"#注册事件-registerevent","children":[]},{"level":5,"title":"注册Dom事件（registerDomEvent）","slug":"注册dom事件-registerdomevent","link":"#注册dom事件-registerdomevent","children":[]},{"level":5,"title":"注册计时事件（registerInterval）","slug":"注册计时事件-registerinterval","link":"#注册计时事件-registerinterval","children":[]},{"level":5,"title":"注册编辑建议（registerEditorSuggest）","slug":"注册编辑建议-registereditorsuggest","link":"#注册编辑建议-registereditorsuggest","children":[]},{"level":5,"title":"注册视图窗口（registerView）","slug":"注册视图窗口-registerview","link":"#注册视图窗口-registerview","children":[]},{"level":5,"title":"注册其他","slug":"注册其他","link":"#注册其他","children":[]}]},{"level":4,"title":"Plugin_2","slug":"plugin-2","link":"#plugin-2","children":[]},{"level":4,"title":"Component","slug":"component","link":"#component","children":[]}]},{"level":3,"title":"Workspace（Ex Event）","slug":"workspace-ex-event","link":"#workspace-ex-event","children":[{"level":4,"title":"onLayoutReady & updateOptions 方法","slug":"onlayoutready-updateoptions-方法","link":"#onlayoutready-updateoptions-方法","children":[]},{"level":4,"title":"Workspace","slug":"workspace","link":"#workspace","children":[]},{"level":4,"title":"Event","slug":"event","link":"#event","children":[]}]},{"level":3,"title":"其他","slug":"其他","link":"#其他","children":[{"level":4,"title":"Comand","slug":"comand","link":"#comand","children":[]}]}]},{"level":2,"title":"Markdown相关","slug":"markdown相关","link":"#markdown相关","children":[{"level":3,"title":"MarkdownRenderer（Ex MarkdownRenderChild, Ex Component）","slug":"markdownrenderer-ex-markdownrenderchild-ex-component","link":"#markdownrenderer-ex-markdownrenderchild-ex-component","children":[{"level":4,"title":"MarkdownRenderer","slug":"markdownrenderer","link":"#markdownrenderer","children":[]},{"level":4,"title":"MarkdownRenderChild","slug":"markdownrenderchild","link":"#markdownrenderchild","children":[]}]},{"level":3,"title":"MarkdownView","slug":"markdownview","link":"#markdownview","children":[]},{"level":3,"title":"MarkdownPostProcessorContext（ctx）","slug":"markdownpostprocessorcontext-ctx","link":"#markdownpostprocessorcontext-ctx","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":13.08,"words":3923},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Type/Doc/MarkdwonAbout/Obsidian/插件开发/09. 接口剖析.md","autoDesc":true}');export{E as comp,M as data};

import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-BP7mptqa.js";const t={},p=e(`<h1 id="其他杂项" tabindex="-1"><a class="header-anchor" href="#其他杂项"><span>其他杂项</span></a></h1><h2 id="注释文档" tabindex="-1"><a class="header-anchor" href="#注释文档"><span>注释文档</span></a></h2><h3 id="core" tabindex="-1"><a class="header-anchor" href="#core"><span>Core</span></a></h3><h3 id="markdwonit" tabindex="-1"><a class="header-anchor" href="#markdwonit"><span>MarkdwonIt</span></a></h3><h2 id="开发调试" tabindex="-1"><a class="header-anchor" href="#开发调试"><span>开发调试</span></a></h2><h3 id="_1" tabindex="-1"><a class="header-anchor" href="#_1"><span>1</span></a></h3><div class="language-tsx line-numbers-mode" data-ext="tsx" data-title="tsx"><pre class="language-tsx"><code><span class="token keyword">this</span><span class="token punctuation">.</span>mdit <span class="token operator">=</span> <span class="token function">MarkdownIt</span><span class="token punctuation">(</span>mditOptions<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>mTable<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    multiline<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    rowspan<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    headerless<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>mdit<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p><p>MarkdownIt2</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>block<span class="token operator">:</span> ParserBlock
	ruler<span class="token operator">:</span> Ruler
		__rules__<span class="token operator">:</span> Array(<span class="token number">11</span>)
			<span class="token punctuation">{</span>naame<span class="token operator">:</span> &#39;table&#39;<span class="token punctuation">,</span> enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> alt<span class="token operator">:</span> Array(<span class="token number">2</span>)<span class="token punctuation">,</span> fn<span class="token operator">:</span> f<span class="token punctuation">}</span>
            <span class="token punctuation">{</span>naame<span class="token operator">:</span> &#39;code&#39;<span class="token punctuation">,</span> enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> alt<span class="token operator">:</span> Array(<span class="token number">0</span>)<span class="token punctuation">,</span> fn<span class="token operator">:</span> f<span class="token punctuation">}</span>
            <span class="token punctuation">{</span>naame<span class="token operator">:</span> &#39;fence&#39;<span class="token punctuation">,</span> enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> alt<span class="token operator">:</span> Array(<span class="token number">4</span>)<span class="token punctuation">,</span> fn<span class="token operator">:</span> f<span class="token punctuation">}</span>
            <span class="token punctuation">{</span>naame<span class="token operator">:</span> &#39;blockquote&#39;<span class="token punctuation">,</span> enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> alt<span class="token operator">:</span> Array(<span class="token number">4</span>)<span class="token punctuation">,</span> fn<span class="token operator">:</span> f<span class="token punctuation">}</span>
            <span class="token punctuation">{</span>naame<span class="token operator">:</span> &#39;hr&#39;<span class="token punctuation">,</span> enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> alt<span class="token operator">:</span> Array(<span class="token number">4</span>)<span class="token punctuation">,</span> fn<span class="token operator">:</span> f<span class="token punctuation">}</span>
            <span class="token punctuation">{</span>naame<span class="token operator">:</span> &#39;list&#39;<span class="token punctuation">,</span> enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> alt<span class="token operator">:</span> Array(<span class="token number">3</span>)<span class="token punctuation">,</span> fn<span class="token operator">:</span> f<span class="token punctuation">}</span>
            <span class="token punctuation">{</span>naame<span class="token operator">:</span> &#39;reference&#39;<span class="token punctuation">,</span> enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> alt<span class="token operator">:</span> Array(<span class="token number">0</span>)<span class="token punctuation">,</span> fn<span class="token operator">:</span> f<span class="token punctuation">}</span>
            <span class="token punctuation">{</span>naame<span class="token operator">:</span> &#39;html_block&#39;<span class="token punctuation">,</span> enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> alt<span class="token operator">:</span> Array(<span class="token number">3</span>)<span class="token punctuation">,</span> fn<span class="token operator">:</span> f<span class="token punctuation">}</span>
            <span class="token punctuation">{</span>naame<span class="token operator">:</span> &#39;heading&#39;<span class="token punctuation">,</span> enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> alt<span class="token operator">:</span> Array(<span class="token number">3</span>)<span class="token punctuation">,</span> fn<span class="token operator">:</span> f<span class="token punctuation">}</span>
            <span class="token punctuation">{</span>naame<span class="token operator">:</span> &#39;lheading&#39;<span class="token punctuation">,</span> enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> alt<span class="token operator">:</span> Array(<span class="token number">0</span>)<span class="token punctuation">,</span> fn<span class="token operator">:</span> f<span class="token punctuation">}</span>
			<span class="token punctuation">{</span>naame<span class="token operator">:</span> &#39;paragraph&#39;<span class="token punctuation">,</span> enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> alt<span class="token operator">:</span> Array(<span class="token number">0</span>)<span class="token punctuation">,</span> fn<span class="token operator">:</span> f<span class="token punctuation">}</span>
core<span class="token operator">:</span> Core
	ruler<span class="token operator">:</span> Ruler
		__rules__<span class="token operator">:</span> Array(<span class="token number">7</span>)
inline<span class="token operator">:</span> ParserInline
	ruler<span class="token operator">:</span> Ruler
		__rules__<span class="token operator">:</span> Array(<span class="token number">12</span>)
	ruler2<span class="token operator">:</span> Ruler
		__rules__<span class="token operator">:</span> Array(<span class="token number">4</span>)
options<span class="token operator">:</span>
renderer<span class="token operator">:</span>
	rules<span class="token operator">:</span>
        code_block
        code_iline
        fence
        hardbreak
        html_block
        html_inline
        image
        softbreak
        text
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>MarkdownIt2 {inline: ParserInline, block: ParserBlock, core: Core, renderer: Renderer, linkify: LinkifyIt, …}
block
: 
ParserBlock
ruler
: 
Ruler {__rules__: Array(11), __cache__: null}
[[Prototype]]
: 
Object
core
: 
Core
ruler
: 
Ruler {__rules__: Array(7), __cache__: null}
[[Prototype]]
: 
Object
helpers
: 
{parseLinkLabel: ƒ, parseLinkDestination: ƒ, parseLinkTitle: ƒ}
inline
: 
ParserInline
ruler
: 
Ruler {__rules__: Array(12), __cache__: null}
ruler2
: 
Ruler {__rules__: Array(4), __cache__: null}
[[Prototype]]
: 
Object
linkify
: 
LinkifyIt {__opts__: {…}, __index__: -1, __last_index__: -1, __schema__: &#39;&#39;, __text_cache__: &#39;&#39;, …}
normalizeLink
: 
ƒ normalizeLink(url)
normalizeLinkText
: 
ƒ normalizeLinkText(url)
options
: 
{html: true, xhtmlOut: false, breaks: false, langPrefix: &#39;language-&#39;, linkify: false, …}
renderer
: 
Renderer {rules: {…}}
utils
: 
{lib: {…}, assign: ƒ, isString: ƒ, has: ƒ, unescapeMd: ƒ, …}
validateLink
: 
ƒ validateLink(url)
[[Prototype]]
: 
Object
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2" tabindex="-1"><a class="header-anchor" href="#_2"><span>2</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 导入渲染结果</span>
<span class="token keyword">const</span> ast <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mdit<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>src<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>       <span class="token comment">// 这里的ast是指token数组</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ast<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果</p><p>Array(12)</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    type<span class="token operator">:</span> &#39;paragraph_open&#39;<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> Token<span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    type<span class="token operator">:</span> &#39;inline&#39;<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> Token<span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    type<span class="token operator">:</span> &#39;paragraph_close&#39;<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> Token<span class="token punctuation">,</span>

<span class="token comment">//////////////////////////////////////////////</span>
<span class="token punctuation">{</span>
    type<span class="token operator">:</span> &#39;paragraph_open&#39;<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> Token<span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    type<span class="token operator">:</span> &#39;inline&#39;<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> Token<span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    type<span class="token operator">:</span> &#39;paragraph_cloase&#39;<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> Token<span class="token punctuation">,</span>

<span class="token comment">//////////////////////////////////////////////</span>
<span class="token punctuation">{</span>
    type<span class="token operator">:</span> &#39;paragraph_open&#39;<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> Token<span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    type<span class="token operator">:</span> &#39;inline&#39;<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> Token<span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    type<span class="token operator">:</span> &#39;paragraph_close&#39;<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> Token<span class="token punctuation">,</span>

<span class="token comment">//////////////////////////////////////////////</span>
<span class="token punctuation">{</span>
    type<span class="token operator">:</span> &#39;paragraph_open&#39;<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> Token<span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    type<span class="token operator">:</span> &#39;inline&#39;<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> Token<span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    type<span class="token operator">:</span> &#39;paragraph_close&#39;<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> Token<span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),l=[p];function o(i,c){return s(),a("div",null,l)}const d=n(t,[["render",o],["__file","其他.html.vue"]]),k=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Type/Doc/MarkdwonAbout/02.%20Parse%20and%20Render/Markdown-it/%E3%80%8AMakrdown-it%20%E4%B8%AD%E6%96%87%E6%96%87%E6%A1%A3%E3%80%8B/01.%20%E4%BB%85%E4%BD%BF%E7%94%A8/%E5%85%B6%E4%BB%96.html","title":"其他杂项","lang":"zh-CN","frontmatter":{"description":"其他杂项 注释文档 Core MarkdwonIt 开发调试 1 打印结果： MarkdownIt2 2 打印结果 Array(12)","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Type/Doc/MarkdwonAbout/02.%20Parse%20and%20Render/Markdown-it/%E3%80%8AMakrdown-it%20%E4%B8%AD%E6%96%87%E6%96%87%E6%A1%A3%E3%80%8B/01.%20%E4%BB%85%E4%BD%BF%E7%94%A8/%E5%85%B6%E4%BB%96.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"其他杂项"}],["meta",{"property":"og:description","content":"其他杂项 注释文档 Core MarkdwonIt 开发调试 1 打印结果： MarkdownIt2 2 打印结果 Array(12)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"其他杂项\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"其他杂项","slug":"其他杂项","link":"#其他杂项","children":[{"level":2,"title":"注释文档","slug":"注释文档","link":"#注释文档","children":[{"level":3,"title":"Core","slug":"core","link":"#core","children":[]},{"level":3,"title":"MarkdwonIt","slug":"markdwonit","link":"#markdwonit","children":[]}]},{"level":2,"title":"开发调试","slug":"开发调试","link":"#开发调试","children":[{"level":3,"title":"1","slug":"_1","link":"#_1","children":[]},{"level":3,"title":"2","slug":"_2","link":"#_2","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.16,"words":348},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Type/Doc/MarkdwonAbout/02. Parse and Render/Markdown-it/《Makrdown-it 中文文档》/01. 仅使用/其他.md","autoDesc":true}');export{d as comp,k as data};

import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as e}from"./app-Ld2qzqw_.js";const t={},p=e(`<h1 id="断言" tabindex="-1"><a class="header-anchor" href="#断言"><span>断言</span></a></h1><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h2><p><strong>和其他语言不同</strong>：</p><ul><li>详细见语言区别一章</li></ul><h3 id="普通断言" tabindex="-1"><a class="header-anchor" href="#普通断言"><span>普通断言</span></a></h3><p>……</p><h3 id="类型断言-类型转换" tabindex="-1"><a class="header-anchor" href="#类型断言-类型转换"><span>类型断言 (类型转换)</span></a></h3><p>在Go语言中，类型断言是一种特殊的操作，用于检查一个接口变量是否包含特定的类型，并且在成功的情况下，可以将其转换为该类型。</p><p>判断是否该类型的变量：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// 语法</span>
<span class="token comment">// value：变量的值</span>
<span class="token comment">// ok：book类型</span>
<span class="token comment">// element：interface变量</span>
<span class="token comment">// T：断言类型</span>
value<span class="token punctuation">,</span> ok <span class="token operator">=</span> element<span class="token punctuation">.</span><span class="token punctuation">(</span>T<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用场景</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// 接口。定义规则、规范、能力</span>
<span class="token keyword">type</span> SayHello <span class="token keyword">interface</span><span class="token punctuation">{</span>
    <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	<span class="token comment">// 声明没有实现的方法</span>
<span class="token punctuation">}</span>

<span class="token comment">// 类A</span>
<span class="token keyword">type</span> Chinese <span class="token keyword">struct</span><span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>

<span class="token comment">// 类A 实现接口的方法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>person Chinese<span class="token punctuation">)</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;你好&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>person Chinese<span class="token punctuation">)</span> <span class="token function">sayChinese</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;假设中国人才会说中文&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 类B</span>
<span class="token keyword">type</span> American <span class="token keyword">struct</span><span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>

<span class="token comment">// 类B 实现接口的方法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>person American<span class="token punctuation">)</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义一个函数处理各国人打召唤的函数</span>
<span class="token keyword">func</span> <span class="token function">greet</span><span class="token punctuation">(</span>s SayHello<span class="token punctuation">)</span><span class="token punctuation">{</span>
    s<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    s<span class="token punctuation">.</span><span class="token function">sayChinese</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	<span class="token comment">// 这里报错，需要基类尝试转派生类</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c <span class="token operator">:=</span> Chinese<span class="token punctuation">{</span><span class="token punctuation">}</span>
    a <span class="token operator">:=</span> American<span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token function">greet</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
    <span class="token function">greet</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">greet</span><span class="token punctuation">(</span>s SayHello<span class="token punctuation">)</span><span class="token punctuation">{</span>
    s<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	ch<span class="token punctuation">,</span> flag <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token punctuation">(</span>Chinese<span class="token punctuation">)</span> <span class="token comment">// 尝试基类转派生类。这里用了类型断言。Q：不能用 \`类型(变量)\` 这种方法吗</span>
    <span class="token keyword">if</span> flag <span class="token operator">==</span> <span class="token boolean">true</span> <span class="token punctuation">{</span>
    	ch<span class="token punctuation">.</span><span class="token function">sayChinese</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;其他国家的人不会说中国话&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="type-switch-的基本用法" tabindex="-1"><a class="header-anchor" href="#type-switch-的基本用法"><span>Type Switch 的基本用法</span></a></h2><p>Type Switch：switch + 类型断言，一种固定的特殊语法。详见 断言 一章</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">switch</span> s<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">case</span> Chniese<span class="token punctuation">:</span>
    	<span class="token operator">...</span>
	<span class="token keyword">case</span> American<span class="token punctuation">:</span>
    	<span class="token operator">...</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
    	<span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),c=[p];function i(o,l){return s(),a("div",null,c)}const r=n(t,[["render",i],["__file","断言.html.vue"]]),k=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/Go/04_%E4%BC%98%E5%8C%96/%E6%96%AD%E8%A8%80/%E6%96%AD%E8%A8%80.html","title":"断言","lang":"zh-CN","frontmatter":{"description":"断言 概念 和其他语言不同： 详细见语言区别一章 普通断言 …… 类型断言 (类型转换) 在Go语言中，类型断言是一种特殊的操作，用于检查一个接口变量是否包含特定的类型，并且在成功的情况下，可以将其转换为该类型。 判断是否该类型的变量： 使用场景 使用 Type Switch 的基本用法 Type Switch：switch + 类型断言，一种固定的特...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/Go/04_%E4%BC%98%E5%8C%96/%E6%96%AD%E8%A8%80/%E6%96%AD%E8%A8%80.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"断言"}],["meta",{"property":"og:description","content":"断言 概念 和其他语言不同： 详细见语言区别一章 普通断言 …… 类型断言 (类型转换) 在Go语言中，类型断言是一种特殊的操作，用于检查一个接口变量是否包含特定的类型，并且在成功的情况下，可以将其转换为该类型。 判断是否该类型的变量： 使用场景 使用 Type Switch 的基本用法 Type Switch：switch + 类型断言，一种固定的特..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"断言\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"断言","slug":"断言","link":"#断言","children":[{"level":2,"title":"概念","slug":"概念","link":"#概念","children":[{"level":3,"title":"普通断言","slug":"普通断言","link":"#普通断言","children":[]},{"level":3,"title":"类型断言 (类型转换)","slug":"类型断言-类型转换","link":"#类型断言-类型转换","children":[]}]},{"level":2,"title":"Type Switch 的基本用法","slug":"type-switch-的基本用法","link":"#type-switch-的基本用法","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.22,"words":367},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/01. Language/Go/04_优化/断言/断言.md","autoDesc":true}');export{r as comp,k as data};

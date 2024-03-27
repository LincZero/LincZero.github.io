import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as i,c,b as s,e as n,d as e,a as t}from"./app-Bmv5Ekr9.js";const l={},r=t(`<h1 id="codemirror" tabindex="-1"><a class="header-anchor" href="#codemirror"><span>CodeMirror</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="接口剖析" tabindex="-1"><a class="header-anchor" href="#接口剖析"><span>接口剖析</span></a></h1><h2 id="state包" tabindex="-1"><a class="header-anchor" href="#state包"><span>State包</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
    <span class="token comment">// Extension,			// 这个比较特殊，很关键，但好像看不到类声明</span>
    					<span class="token comment">// 比较常用的</span>
    StateField<span class="token punctuation">,</span>				<span class="token comment">// 状态字段</span>
    Facet<span class="token punctuation">,</span>			
    EditorState<span class="token punctuation">,</span>			<span class="token comment">// 编辑器状态</span>
    StateEffect<span class="token punctuation">,</span>
    StateEffectType<span class="token punctuation">,</span>
    SelectionRange<span class="token punctuation">,</span>
    					<span class="token comment">// 没见过</span>
    Text<span class="token punctuation">,</span>
    Line<span class="token punctuation">,</span>
    ChangeDesc<span class="token punctuation">,</span>
    ChangeSet<span class="token punctuation">,</span>
    EditorSelection<span class="token punctuation">,</span>
    Compartment<span class="token punctuation">,</span>
    Annotation<span class="token punctuation">,</span>
    AnnotationType<span class="token punctuation">,</span>
    Transaction<span class="token punctuation">,</span>
    RangeValut<span class="token punctuation">,</span>
    Range<span class="token punctuation">,</span>
    RangeSet<span class="token punctuation">,</span>
    RangeSetBuilder
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@codemirror/state&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extensions-扩展" tabindex="-1"><a class="header-anchor" href="#extensions-扩展"><span>Extensions（扩展）</span></a></h3>`,6),d=s("strong",null,"扩展（extensions）",-1),u={href:"https://luhaifeng666.github.io/obsidian-plugin-docs-zh/zh2.0/editor/extensions/view-plugins.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://luhaifeng666.github.io/obsidian-plugin-docs-zh/zh2.0/editor/extensions/state-fields.html",target:"_blank",rel:"noopener noreferrer"},k=t(`<p>讲真，这个东西好难弄懂，一开始完全不理解</p><p>例如下面这个，大概意思我懂，<strong>可以传View Plugins、State fields、Facet Providers等等</strong>，但就是不懂他是什么声明出来的</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
在创建状态以附加各种配置和行为信息时，可以[提供]扩展值。
它们可以是内置的提供扩展的对象，如[state fields]或[facet providers]，也可以是在其&#39; extension &#39;属性中带有扩展的对象。
扩展可以嵌套在任意深度的数组中——在处理时将被平铺。
*/</span>
declare type Extension <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extension</span><span class="token operator">:</span> Extension<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token operator">|</span> readonly Extension<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ob的extensions" tabindex="-1"><a class="header-anchor" href="#ob的extensions"><span>OB的Extensions</span></a></h4><p>OB文档说Ob的Extensions和CM的一同一回事，这里看一下OB的使用方法：</p><blockquote><h5 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span>基本用法</span></a></h5></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">onload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">registerEditorExtension</span><span class="token punctuation">(</span><span class="token punctuation">[</span>examplePlugin<span class="token punctuation">,</span> exampleField<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h5 id="使用举例-extension-x-viewplugin-x-editorview" tabindex="-1"><a class="header-anchor" href="#使用举例-extension-x-viewplugin-x-editorview"><span>使用举例（Extension x ViewPlugin x EditorView）</span></a></h5></blockquote><p>不得不说这真的太麻烦了</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 原型：(method) Plugin_2.registerEditorExtension(extension: Extension): void</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">registerEditorExtension</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">editorExtension</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 原型：(method) AnyBlockPlugin.editorExtension(plugin_this: AnyBlockPlugin): ViewPlugin&lt;(Anonymous class)&gt;</span>
<span class="token comment">// 这里返回的是ViewPlugin类型给Extension接口，是吻合的</span>
<span class="token comment">// ViewPlugin类，是一个泛型类</span>
<span class="token function">editorExtension</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">plugin_this</span><span class="token operator">:</span> AnyBlockPlugin</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 原型：(method) ViewPlugin&lt;V extends PluginValue&gt;.fromClass&lt;(Anonymous class)&gt;(cls: new (view: EditorView) =&gt; (Anonymous class), spec?: PluginSpec&lt;(Anonymous class)&gt; | undefined): ViewPlugin&lt;...&gt;</span>
    <span class="token comment">// static fromClass&lt;V extends PluginValue&gt;(</span>
    <span class="token comment">//     cls: {new (view: EditorView): V;},</span>
    <span class="token comment">//     spec?: PluginSpec&lt;V&gt;</span>
    <span class="token comment">// ): ViewPlugin&lt;V&gt;;</span>
    <span class="token keyword">return</span> ViewPlugin<span class="token punctuation">.</span><span class="token function">fromClass</span><span class="token punctuation">(</span>
        <span class="token keyword">class</span> <span class="token punctuation">{</span><span class="token comment">/*...*/</span><span class="token punctuation">}</span><span class="token punctuation">,</span>	<span class="token comment">// 这是一个EditorView类</span>
        <span class="token punctuation">{</span><span class="token function-variable function">decorations</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> v<span class="token punctuation">.</span>decorations<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="statefield" tabindex="-1"><a class="header-anchor" href="#statefield"><span>StateField</span></a></h3><h4 id="statefield-t" tabindex="-1"><a class="header-anchor" href="#statefield-t"><span>StateField&lt;T&gt;</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
字段可以在**编辑器状态下存储其他信息**，并使其与状态的其余部分保持同步。
*/</span>
declare <span class="token keyword">class</span> <span class="token class-name">StateField</span><span class="token operator">&lt;</span>Value<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> createF<span class="token punctuation">;</span>
    <span class="token keyword">private</span> updateF<span class="token punctuation">;</span>
    <span class="token keyword">private</span> compareF<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    定义一个 state field.
    */</span>
    <span class="token keyword">static</span> define<span class="token operator">&lt;</span>Value<span class="token operator">&gt;</span><span class="token punctuation">(</span>config<span class="token operator">:</span> StateFieldSpec<span class="token operator">&lt;</span>Value<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> StateField<span class="token operator">&lt;</span>Value<span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> create<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Returns an extension that enables this field and overrides the way it is initialized. Can be useful when you need to provide a non-default starting value for the field.
    */</span>
    <span class="token function">init</span><span class="token punctuation">(</span><span class="token function-variable function">create</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">state</span><span class="token operator">:</span> EditorState</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Value<span class="token punctuation">)</span><span class="token operator">:</span> Extension<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    状态字段实例可以作为[Extension][^1]值来启用给定状态下的字段
    [^1]:(https://codemirror.net/6/docs/ref/#state.Extension)
    */</span>
    <span class="token keyword">get</span> <span class="token function">extension</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Extension<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="statefieldspec-t" tabindex="-1"><a class="header-anchor" href="#statefieldspec-t"><span>StateFieldSpec&lt;T&gt;</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>declare type StateFieldSpec<span class="token operator">&lt;</span>Value<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
    在创建状态时为字段创建初始值。
    */</span>
    <span class="token function-variable function">create</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">state</span><span class="token operator">:</span> EditorState</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Value<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    从字段的前一个值和[transaction][^1]计算一个新值
    [^1]:(https://codemirror.net/6/docs/ref/#state.Transaction)
    */</span>
    <span class="token function-variable function">update</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> Value<span class="token punctuation">,</span> <span class="token literal-property property">transaction</span><span class="token operator">:</span> Transaction</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Value<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    比较字段的两个值，当它们相同时返回&#39;true&#39;。
	这用于避免在字段值未改变时重新计算依赖于该字段的facet。默认使用&#39;===&#39;
    */</span>
    compare<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> Value<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> Value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> boolean<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    提供基于该字段的扩展。给定的函数将被初始化字段调用一次。
	它通常会调用一些facet的 [&#39;from&#39;][^1] 方法来从该字段创建facet输入，但也可以返回当该字段出现在配置中时应该启用的其他扩展。
    [^1]: (https://codemirror.net/6/docs/ref/#state.Facet.from)
    */</span>
    provide<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">field</span><span class="token operator">:</span> StateField<span class="token operator">&lt;</span>Value<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Extension<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    用于将该字段的内容序列化为JSON的函数。只有当该字段包含在 [&#39;EditorState.toJSON&#39;][^1] 的参数中时才有必要
    [^1]:(https://codemirror.net/6/docs/ref/#state.EditorState.toJSON)
    */</span>
    toJSON<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> Value<span class="token punctuation">,</span> <span class="token literal-property property">state</span><span class="token operator">:</span> EditorState</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    反序列化此字段内容的JSON表示的函数。
    */</span>
    fromJSON<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">json</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">state</span><span class="token operator">:</span> EditorState</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="stateeffect-t" tabindex="-1"><a class="header-anchor" href="#stateeffect-t"><span>StateEffect&lt;T&gt;</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
状态效应可用于表示与[transaction][^1]相关的附加效应
当这些更改不隐含在文档或选择更改中时，它们通常用于对自定义[state fields][^2]的更改建模
[^1]:(https://codemirror.net/6/docs/ref/#state.Transaction.effects)
[^2]:(https://codemirror.net/6/docs/ref/#state.StateField)
*/</span>
declare <span class="token keyword">class</span> <span class="token class-name">StateEffect</span><span class="token operator">&lt;</span>Value<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
    The value of this effect.
    */</span>
    readonly value<span class="token operator">:</span> Value<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Map this effect through a position mapping. Will return
    \`undefined\` when that ends up deleting the effect.
    */</span>
    <span class="token function">map</span><span class="token punctuation">(</span>mapping<span class="token operator">:</span> ChangeDesc<span class="token punctuation">)</span><span class="token operator">:</span> StateEffect<span class="token operator">&lt;</span>Value<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Tells you whether this effect object is of a given
    [type](https://codemirror.net/6/docs/ref/#state.StateEffectType).
    */</span>
    is<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>type<span class="token operator">:</span> StateEffectType<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span> is StateEffect<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    定义一个新的effect类型。type参数表示其效果所持有的值的类型
    */</span>
    <span class="token keyword">static</span> define<span class="token operator">&lt;</span>Value <span class="token operator">=</span> <span class="token keyword">null</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>spec<span class="token operator">?</span><span class="token operator">:</span> StateEffectSpec<span class="token operator">&lt;</span>Value<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> StateEffectType<span class="token operator">&lt;</span>Value<span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Map an array of effects through a change set.
    */</span>
    <span class="token keyword">static</span> <span class="token function">mapEffects</span><span class="token punctuation">(</span>effects<span class="token operator">:</span> readonly StateEffect<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">mapping</span><span class="token operator">:</span> ChangeDesc<span class="token punctuation">)</span><span class="token operator">:</span> readonly StateEffect<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    This effect can be used to reconfigure the root extensions of
    the editor. Doing this will discard any extensions
    [appended](https://codemirror.net/6/docs/ref/#state.StateEffect^appendConfig), but does not reset
    the content of [reconfigured](https://codemirror.net/6/docs/ref/#state.Compartment.reconfigure)
    compartments.
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">reconfigure</span><span class="token operator">:</span> StateEffectType<span class="token operator">&lt;</span>Extension<span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    将扩展附加到编辑器的顶级配置
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">appendConfig</span><span class="token operator">:</span> StateEffectType<span class="token operator">&lt;</span>Extension<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="stateeffecttype-t" tabindex="-1"><a class="header-anchor" href="#stateeffecttype-t"><span>StateEffectType&lt;T&gt;</span></a></h4><p><code>StateEffect.define()</code> 用的</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
一种StateEffect的表现形式。使用 StateEffect.define[^1] 定义
[^1]:(https://codemirror.net/6/docs/ref/#state.StateEffect^define)
*/</span>
declare <span class="token keyword">class</span> <span class="token class-name">StateEffectType</span><span class="token operator">&lt;</span>Value<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
    <span class="token keyword">@internal</span>
    */</span>
    readonly <span class="token function-variable function">map</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">mapping</span><span class="token operator">:</span> ChangeDesc</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Create a [state effect](https://codemirror.net/6/docs/ref/#state.StateEffect) instance of this type.
    */</span>
    <span class="token keyword">of</span><span class="token punctuation">(</span>value<span class="token operator">:</span> Value<span class="token punctuation">)</span><span class="token operator">:</span> StateEffect<span class="token operator">&lt;</span>Value<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="statefield-和-stateeffect-的联系" tabindex="-1"><a class="header-anchor" href="#statefield-和-stateeffect-的联系"><span>StateField 和 StateEffect 的联系</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 实例</span>
StateEffect<span class="token punctuation">.</span>appendConfig<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>
    <span class="token punctuation">[</span>underlineField<span class="token punctuation">,</span> underlineTheme<span class="token punctuation">]</span>
<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
<span class="token comment">// 剖析</span>
declare <span class="token keyword">class</span> <span class="token class-name">StateEffect</span><span class="token operator">&lt;</span>Value<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token literal-property property">appendConfig</span><span class="token operator">:</span> StateEffectType<span class="token operator">&lt;</span>Extension<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
declare <span class="token keyword">class</span> <span class="token class-name">StateEffectType</span><span class="token operator">&lt;</span>Value<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">of</span><span class="token punctuation">(</span>value<span class="token operator">:</span> Value<span class="token punctuation">)</span><span class="token operator">:</span> StateEffect<span class="token operator">&lt;</span>Value<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="editorstate" tabindex="-1"><a class="header-anchor" href="#editorstate"><span>EditorState</span></a></h4><p>尝试打印输出editorState</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> underlineField <span class="token operator">=</span> StateField<span class="token punctuation">.</span>define<span class="token operator">&lt;</span>DecorationSet<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">create</span><span class="token punctuation">(</span><span class="token parameter">editorState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Decoration<span class="token punctuation">.</span>none
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">decorationSet<span class="token punctuation">,</span> tr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 基本变量</span>
    <span class="token keyword">const</span> <span class="token literal-property property">view</span><span class="token operator">:</span> View<span class="token operator">|</span><span class="token keyword">null</span> <span class="token operator">=</span> global_plugin_this<span class="token punctuation">.</span>app<span class="token punctuation">.</span>workspace<span class="token punctuation">.</span><span class="token function">getActiveViewOfType</span><span class="token punctuation">(</span>MarkdownView<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>view<span class="token punctuation">)</span> <span class="token keyword">return</span> decorationSet
    <span class="token comment">// @ts-ignore 这里会说View没有editor属性</span>
    <span class="token keyword">const</span> <span class="token literal-property property">editor</span><span class="token operator">:</span> Editor <span class="token operator">=</span> view<span class="token punctuation">.</span>editor
    <span class="token comment">// @ts-ignore 这里会说Editor没有cm属性</span>
    <span class="token keyword">const</span> <span class="token literal-property property">editorView</span><span class="token operator">:</span> EditorView <span class="token operator">=</span> editor<span class="token punctuation">.</span>cm
    <span class="token keyword">const</span> <span class="token literal-property property">editorState</span><span class="token operator">:</span> EditorState <span class="token operator">=</span> editorView<span class="token punctuation">.</span>state
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;update - effectsState&quot;</span><span class="token punctuation">,</span> editorState<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">provide</span><span class="token operator">:</span> <span class="token parameter">f</span> <span class="token operator">=&gt;</span> EditorView<span class="token punctuation">.</span>decorations<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结构</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    computeSlot<span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    config<span class="token operator">:</span> e<span class="token comment">/*{}*/</span><span class="token punctuation">,</span>
    doc<span class="token operator">:</span> <span class="token punctuation">{</span>
    	children<span class="token operator">:</span> Array(<span class="token number">3</span>)<span class="token punctuation">,</span> <span class="token comment">// 感觉是每32行为一个元素，没什么其他规律</span>
		length<span class="token operator">:</span> <span class="token number">551</span><span class="token punctuation">,</span>
		lines<span class="token operator">:</span> <span class="token number">81</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    selection<span class="token operator">:</span> e<span class="token comment">/*{...}*/</span><span class="token punctuation">,</span>
    status<span class="token operator">:</span> Array(<span class="token number">16</span>)<span class="token punctuation">,</span> 		<span class="token comment">// 好像没什么特别的</span>
    values<span class="token operator">:</span> Array(<span class="token number">16</span>)<span class="token punctuation">,</span>
<span class="token comment">// get</span>
    lineBreak<span class="token operator">:</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">,</span>
    readOnly<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    tabSize<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    tree<span class="token operator">:</span> e<span class="token comment">/*{...}*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="和editorstate的关系" tabindex="-1"><a class="header-anchor" href="#和editorstate的关系"><span>和EditorState的关系</span></a></h4><p>关系：有四个方法会需要StateField参数。主要是 <code>field()</code> 方法</p><p>这个在@codemirror/view里</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
编辑器状态类是一个持久(不可变)的数据结构。
要更新状态，您[创建][^1]一个[transaction][^2]，它生成一个_new_ state实例，而不修改原始对象。
因此，永远不要直接改变状态的属性。这只会破坏事情。
[^1]:(https://codemirror.net/6/docs/ref/#state.EditorState.update)
[^2]:(https://codemirror.net/6/docs/ref/#state.Transaction)
*/</span>
declare <span class="token keyword">class</span> <span class="token class-name">EditorState</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
    当前文档.
    */</span>
    readonly doc<span class="token operator">:</span> Text<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    当前选择.
    */</span>
    readonly selection<span class="token operator">:</span> EditorSelection<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    检索 状态字段[^1] 的值. 
    当状态没有该字段时抛出错误，除非你传递&#39; false &#39;作为第二个参数
    [^1]:(https://codemirror.net/6/docs/ref/#state.StateField)
    */</span>
    field<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>field<span class="token operator">:</span> StateField<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
    field<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>field<span class="token operator">:</span> StateField<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token literal-property property">require</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Create a [transaction](https://codemirror.net/6/docs/ref/#state.Transaction) that updates this
    state. Any number of [transaction specs](https://codemirror.net/6/docs/ref/#state.TransactionSpec)
    can be passed. Unless
    [\`sequential\`](https://codemirror.net/6/docs/ref/#state.TransactionSpec.sequential) is set, the
    [changes](https://codemirror.net/6/docs/ref/#state.TransactionSpec.changes) (if any) of each spec
    are assumed to start in the _current_ document (not the document
    produced by previous specs), and its
    [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection) and
    [effects](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) are assumed to refer
    to the document created by its _own_ changes. The resulting
    transaction contains the combined effect of all the different
    specs. For [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection), later
    specs take precedence over earlier ones.
    */</span>
    <span class="token function">update</span><span class="token punctuation">(</span><span class="token operator">...</span>specs<span class="token operator">:</span> readonly TransactionSpec<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> Transaction<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    创建一个[事务规范 transaction spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec)，
	用给定的内容替换每个选择范围。
    */</span>
    <span class="token function">replaceSelection</span><span class="token punctuation">(</span>text<span class="token operator">:</span> string <span class="token operator">|</span> Text<span class="token punctuation">)</span><span class="token operator">:</span> TransactionSpec<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Create a set of changes and a new selection by running the given
    function for each range in the active selection. The function
    can return an optional set of changes (in the coordinate space
    of the start document), plus an updated range (in the coordinate
    space of the document produced by the call&#39;s own changes). This
    method will merge all the changes and ranges into a single
    changeset and selection, and return it as a [transaction
    spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec), which can be passed to
    [\`update\`](https://codemirror.net/6/docs/ref/#state.EditorState.update).
    */</span>
    <span class="token function">changeByRange</span><span class="token punctuation">(</span><span class="token function-variable function">f</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">range</span><span class="token operator">:</span> SelectionRange</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">range</span><span class="token operator">:</span> SelectionRange<span class="token punctuation">;</span>
        changes<span class="token operator">?</span><span class="token operator">:</span> ChangeSpec<span class="token punctuation">;</span>
        effects<span class="token operator">?</span><span class="token operator">:</span> StateEffect<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span> <span class="token operator">|</span> readonly StateEffect<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">changes</span><span class="token operator">:</span> ChangeSet<span class="token punctuation">;</span>
        <span class="token literal-property property">selection</span><span class="token operator">:</span> EditorSelection<span class="token punctuation">;</span>
        <span class="token literal-property property">effects</span><span class="token operator">:</span> readonly StateEffect<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    根据给定的变更描述创建一个[变更集 change set](https://codemirror.net/6/docs/ref/#state.ChangeSet)，
	将状态的文档长度和行分隔符考虑在内。
    */</span>
    <span class="token function">changes</span><span class="token punctuation">(</span>spec<span class="token operator">?</span><span class="token operator">:</span> ChangeSpec<span class="token punctuation">)</span><span class="token operator">:</span> ChangeSet<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Using the state&#39;s [line
    separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
    [\`Text\`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
    */</span>
    <span class="token function">toText</span><span class="token punctuation">(</span>string<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> Text<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Return the given range of the document as a string.
    */</span>
    <span class="token function">sliceDoc</span><span class="token punctuation">(</span>from<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">,</span> to<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Get the value of a state [facet](https://codemirror.net/6/docs/ref/#state.Facet).
    */</span>
    facet<span class="token operator">&lt;</span>Output<span class="token operator">&gt;</span><span class="token punctuation">(</span>facet<span class="token operator">:</span> Facet<span class="token operator">&lt;</span>any<span class="token punctuation">,</span> Output<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> Output<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Convert this state to a JSON-serializable object. When custom
    fields should be serialized, you can pass them in as an object
    mapping property names (in the resulting object, which should
    not use \`doc\` or \`selection\`) to fields.
    */</span>
    <span class="token function">toJSON</span><span class="token punctuation">(</span>fields<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>prop<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> StateField<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> any<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Deserialize a state from its JSON representation. When custom
    fields should be deserialized, pass the same object you passed
    to [\`toJSON\`](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) when serializing as
    third argument.
    */</span>
    <span class="token keyword">static</span> <span class="token function">fromJSON</span><span class="token punctuation">(</span>json<span class="token operator">:</span> any<span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> EditorStateConfig<span class="token punctuation">,</span> fields<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>prop<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> StateField<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> EditorState<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Create a new state. You&#39;ll usually only need this when
    initializing an editor—updated states are created by applying
    transactions.
    */</span>
    <span class="token keyword">static</span> <span class="token function">create</span><span class="token punctuation">(</span>config<span class="token operator">?</span><span class="token operator">:</span> EditorStateConfig<span class="token punctuation">)</span><span class="token operator">:</span> EditorState<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    A facet that, when enabled, causes the editor to allow multiple
    ranges to be selected. Be careful though, because by default the
    editor relies on the native DOM selection, which cannot handle
    multiple selections. An extension like
    [\`drawSelection\`](https://codemirror.net/6/docs/ref/#view.drawSelection) can be used to make
    secondary selections visible to the user.
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">allowMultipleSelections</span><span class="token operator">:</span> Facet<span class="token operator">&lt;</span>boolean<span class="token punctuation">,</span> boolean<span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Configures the tab size to use in this state. The first
    (highest-precedence) value of the facet is used. If no value is
    given, this defaults to 4.
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">tabSize</span><span class="token operator">:</span> Facet<span class="token operator">&lt;</span>number<span class="token punctuation">,</span> number<span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    The size (in columns) of a tab in the document, determined by
    the [\`tabSize\`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
    */</span>
    <span class="token keyword">get</span> <span class="token function">tabSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    The line separator to use. By default, any of \`&quot;\\n&quot;\`, \`&quot;\\r\\n&quot;\`
    and \`&quot;\\r&quot;\` is treated as a separator when splitting lines, and
    lines are joined with \`&quot;\\n&quot;\`.
    
    When you configure a value here, only that precise separator
    will be used, allowing you to round-trip documents through the
    editor without normalizing line separators.
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">lineSeparator</span><span class="token operator">:</span> Facet<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> string <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
    string for this state.
    */</span>
    <span class="token keyword">get</span> <span class="token function">lineBreak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    This facet controls the value of the
    [\`readOnly\`](https://codemirror.net/6/docs/ref/#state.EditorState.readOnly) getter, which is
    consulted by commands and extensions that implement editing
    functionality to determine whether they should apply. It
    defaults to false, but when its highest-precedence value is
    \`true\`, such functionality disables itself.
    
    Not to be confused with
    [\`EditorView.editable\`](https://codemirror.net/6/docs/ref/#view.EditorView^editable), which
    controls whether the editor&#39;s DOM is set to be editable (and
    thus focusable).
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">readOnly</span><span class="token operator">:</span> Facet<span class="token operator">&lt;</span>boolean<span class="token punctuation">,</span> boolean<span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Returns true when the editor is
    [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
    */</span>
    <span class="token keyword">get</span> <span class="token function">readOnly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Registers translation phrases. The
    [\`phrase\`](https://codemirror.net/6/docs/ref/#state.EditorState.phrase) method will look through
    all objects registered with this facet to find translations for
    its argument.
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">phrases</span><span class="token operator">:</span> Facet<span class="token operator">&lt;</span><span class="token punctuation">{</span>
        <span class="token punctuation">[</span>key<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> readonly <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>key<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Look up a translation for the given phrase (via the
    [\`phrases\`](https://codemirror.net/6/docs/ref/#state.EditorState^phrases) facet), or return the
    original string if no translation is found.
    
    If additional arguments are passed, they will be inserted in
    place of markers like \`$1\` (for the first value) and \`$2\`, etc.
    A single \`$\` is equivalent to \`$1\`, and \`$$\` will produce a
    literal dollar sign.
    */</span>
    <span class="token function">phrase</span><span class="token punctuation">(</span>phrase<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token operator">...</span>insert<span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    A facet used to register [language
    data](https://codemirror.net/6/docs/ref/#state.EditorState.languageDataAt) providers.
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">languageData</span><span class="token operator">:</span> Facet<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">state</span><span class="token operator">:</span> EditorState<span class="token punctuation">,</span> <span class="token literal-property property">pos</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">side</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token operator">|</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token operator">-</span><span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> readonly <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>name<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> any<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token function">readonly</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">state</span><span class="token operator">:</span> EditorState<span class="token punctuation">,</span> <span class="token literal-property property">pos</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">side</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token operator">|</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token operator">-</span><span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> readonly <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>name<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> any<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Find the values for a given language data field, provided by the
    the [\`languageData\`](https://codemirror.net/6/docs/ref/#state.EditorState^languageData) facet.
    */</span>
    languageDataAt<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>name<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">pos</span><span class="token operator">:</span> number<span class="token punctuation">,</span> side<span class="token operator">?</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">|</span> <span class="token number">0</span> <span class="token operator">|</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">:</span> readonly <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Return a function that can categorize strings (expected to
    represent a single [grapheme cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak))
    into one of:
    
     - Word (contains an alphanumeric character or a character
       explicitly listed in the local language&#39;s \`&quot;wordChars&quot;\`
       language data, which should be a string)
     - Space (contains only whitespace)
     - Other (anything else)
    */</span>
    <span class="token function">charCategorizer</span><span class="token punctuation">(</span>at<span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">char</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> CharCategory<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Find the word at the given position, meaning the range
    containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
    around it. If no word characters are adjacent to the position,
    this returns null.
    */</span>
    <span class="token function">wordAt</span><span class="token punctuation">(</span>pos<span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> SelectionRange <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Facet used to register change filters, which are called for each
    transaction (unless explicitly
    [disabled](https://codemirror.net/6/docs/ref/#state.TransactionSpec.filter)), and can suppress
    part of the transaction&#39;s changes.
    
    Such a function can return \`true\` to indicate that it doesn&#39;t
    want to do anything, \`false\` to completely stop the changes in
    the transaction, or a set of ranges in which changes should be
    suppressed. Such ranges are represented as an array of numbers,
    with each pair of two numbers indicating the start and end of a
    range. So for example \`[10, 20, 100, 110]\` suppresses changes
    between 10 and 20, and between 100 and 110.
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">changeFilter</span><span class="token operator">:</span> Facet<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">tr</span><span class="token operator">:</span> Transaction</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> boolean <span class="token operator">|</span> readonly number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token function">readonly</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">tr</span><span class="token operator">:</span> Transaction</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> boolean <span class="token operator">|</span> readonly number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Facet used to register a hook that gets a chance to update or
    replace transaction specs before they are applied. This will
    only be applied for transactions that don&#39;t have
    [\`filter\`](https://codemirror.net/6/docs/ref/#state.TransactionSpec.filter) set to \`false\`. You
    can either return a single transaction spec (possibly the input
    transaction), or an array of specs (which will be combined in
    the same way as the arguments to
    [\`EditorState.update\`](https://codemirror.net/6/docs/ref/#state.EditorState.update)).
    
    When possible, it is recommended to avoid accessing
    [\`Transaction.state\`](https://codemirror.net/6/docs/ref/#state.Transaction.state) in a filter,
    since it will force creation of a state that will then be
    discarded again, if the transaction is actually filtered.
    
    (This functionality should be used with care. Indiscriminately
    modifying transaction is likely to break something or degrade
    the user experience.)
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">transactionFilter</span><span class="token operator">:</span> Facet<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">tr</span><span class="token operator">:</span> Transaction</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> TransactionSpec <span class="token operator">|</span> readonly TransactionSpec<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token function">readonly</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">tr</span><span class="token operator">:</span> Transaction</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> TransactionSpec <span class="token operator">|</span> readonly TransactionSpec<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    This is a more limited form of
    [\`transactionFilter\`](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter),
    which can only add
    [annotations](https://codemirror.net/6/docs/ref/#state.TransactionSpec.annotations) and
    [effects](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects). _But_, this type
    of filter runs even if the transaction has disabled regular
    [filtering](https://codemirror.net/6/docs/ref/#state.TransactionSpec.filter), making it suitable
    for effects that don&#39;t need to touch the changes or selection,
    but do want to process every transaction.
    
    Extenders run _after_ filters, when both are present.
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">transactionExtender</span><span class="token operator">:</span> Facet<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">tr</span><span class="token operator">:</span> Transaction</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Pick<span class="token operator">&lt;</span>TransactionSpec<span class="token punctuation">,</span> <span class="token string">&quot;effects&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;annotations&quot;</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token function">readonly</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">tr</span><span class="token operator">:</span> Transaction</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Pick<span class="token operator">&lt;</span>TransactionSpec<span class="token punctuation">,</span> <span class="token string">&quot;effects&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;annotations&quot;</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="range" tabindex="-1"><a class="header-anchor" href="#range"><span>Range</span></a></h3><h4 id="rangevalue" tabindex="-1"><a class="header-anchor" href="#rangevalue"><span>RangeValue</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 没什么好说的，用来被RangeSet包含</span>
declare abstract <span class="token keyword">class</span> <span class="token class-name">RangeValue</span><span class="token punctuation">;</span>
<span class="token comment">// 主要看一下他的一些派生类</span>
declare abstract <span class="token keyword">class</span> <span class="token class-name">Decoration</span> <span class="token keyword">extends</span> <span class="token class-name">RangeValue</span><span class="token punctuation">;</span>	<span class="token comment">// 这个在@codemirror/view里</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rangeset-t" tabindex="-1"><a class="header-anchor" href="#rangeset-t"><span>RangeSet&lt;T&gt;</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 用来包含RangeValue的一种特殊可迭代类</span>
declare <span class="token keyword">class</span> <span class="token class-name">RangeSet</span><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">RangeValue</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>完整原型声明</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 范围集存储[range]的集合，使它们能够有效地进行[map]和[update]。
 * 这是一个不可变的数据结构。
 * _
 * 注意“不可变”，修改要类似这样：decorationSet = decorationSet.map(tr.changes)
 */</span>
declare <span class="token keyword">class</span> <span class="token class-name">RangeSet</span><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">RangeValue</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    The number of ranges in the set.
    */</span>
    <span class="token keyword">get</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    更新范围集，可选地添加新的范围或过滤现有的范围。
    （注意: 当\`X\`是\`Y\`的子类型时，类型参数只是作为解决TypeScript方差问题的一个拼凑，阻止 \`RangeSet&lt;Y&gt;\` 成为 \`RangeSet&lt;Y&gt;\` 的子类型。）
    */</span>
    update<span class="token operator">&lt;</span><span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token class-name">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>updateSpec<span class="token operator">:</span> RangeSetUpdate<span class="token operator">&lt;</span><span class="token constant">U</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> RangeSet<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    通过一组更改映射这个范围集，并返回新的集合。
    */</span>
    <span class="token function">map</span><span class="token punctuation">(</span>changes<span class="token operator">:</span> ChangeDesc<span class="token punctuation">)</span><span class="token operator">:</span> RangeSet<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    遍历触及区域 \`from\` 到 \`to\` 的范围，对每个区域调用 \`f\`。不能保证这些范围将以任何特定的顺序进行报告。当回调返回 \`false\` 时，迭代停止。
    */</span>
    <span class="token function">between</span><span class="token punctuation">(</span>from<span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token function-variable function">f</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">from</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token constant">T</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    按顺序遍历此集合中的范围，包括以 \`from\` 结束或在 \`from\` 之后结束的所有范围。
    */</span>
    <span class="token function">iter</span><span class="token punctuation">(</span>from<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> RangeCursor<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    从 \`from\` 开始，按顺序遍历集合中的范围。
    */</span>
    <span class="token keyword">static</span> iter<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">RangeValue</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>sets<span class="token operator">:</span> readonly RangeSet<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> from<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> RangeCursor<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    比较。
	遍历两组集合，调用comparator上的方法，通知它可能存在的差异。
    */</span>
    <span class="token keyword">static</span> compare<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">RangeValue</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>oldSets<span class="token operator">:</span> readonly RangeSet<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">newSets</span><span class="token operator">:</span> readonly RangeSet<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
        <span class="token doc-comment comment">/**
        This indicates how the underlying data changed between these
        ranges, and is needed to synchronize the iteration. \`from\` and
        \`to\` are coordinates in the _new_ space, after these changes.
        */</span>
        <span class="token literal-property property">textDiff</span><span class="token operator">:</span> ChangeDesc<span class="token punctuation">,</span> <span class="token literal-property property">comparator</span><span class="token operator">:</span> RangeComparator<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> 
        <span class="token doc-comment comment">/**
        Can be used to ignore all non-point ranges, and points below
        the given size. When -1, all ranges are compared.
        */</span>
        minPointSize<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    比较两组范围集的内容，如果它们在给定范围内相等，则返回true。
    */</span>
    <span class="token keyword">static</span> eq<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">RangeValue</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>oldSets<span class="token operator">:</span> readonly RangeSet<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">newSets</span><span class="token operator">:</span> readonly RangeSet<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> from<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">,</span> to<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    同时遍历一组范围集，通知迭代器覆盖每个给定内容的范围。
    在迭代结束时返回打开计数 (参见[\`SpanIterator.span\`](https://codemirror.net/6/docs/ref/#state.SpanIterator.span))。
    */</span>
    <span class="token keyword">static</span> spans<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">RangeValue</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>sets<span class="token operator">:</span> readonly RangeSet<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">from</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">iterator</span><span class="token operator">:</span> SpanIterator<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> 
        <span class="token doc-comment comment">/**
        当给定值且大于-1时，只考虑至少这个大小的点。
        */</span>
        minPointSize<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    为给定的范围或范围数组创建一个范围集。
    默认情况下，这期望范围是 _sorted_ (根据开始位置，如果两个开始位置相同，则 \`value.startSide\`)。
    你可以传递 \`true\` 作为第二个参数，让方法对它们进行排序。
    */</span>
    <span class="token keyword">static</span> <span class="token keyword">of</span><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">RangeValue</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>ranges<span class="token operator">:</span> readonly Range<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> Range<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> sort<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">)</span><span class="token operator">:</span> RangeSet<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    范围的空集合。
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">empty</span><span class="token operator">:</span> RangeSet<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rangesetbuilder-t-extends-rangevalue" tabindex="-1"><a class="header-anchor" href="#rangesetbuilder-t-extends-rangevalue"><span>RangeSetBuilder&lt;T extends RangeValue&gt;</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 主要定义出来构造RangeSet&lt;T&gt;</span>
<span class="token comment">// 相较于直接使用RangeSet，这里可以add填充列表，再生成RangeValue，比较方便</span>
declare <span class="token keyword">class</span> <span class="token class-name">RangeSetBuilder</span><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">RangeValue</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">add</span><span class="token punctuation">(</span>from<span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>		<span class="token comment">// 这里传入泛型</span>
	<span class="token function">finish</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> RangeSet<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>								<span class="token comment">// 返回RangeSet&lt;T&gt;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="看range如何影响decoration的设计" tabindex="-1"><a class="header-anchor" href="#看range如何影响decoration的设计"><span>看Range如何影响Decoration的设计</span></a></h4><p>这个在@codemirror/view里</p><p>DecorationSet</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// DecorationSet(装饰集)：表示Decoration (装饰) Range (范围)的集合，为高效的访问和映射而组织</span>
<span class="token comment">// 完全等同于 RangeSet&lt;Decoration&gt;</span>
declare type DecorationSet <span class="token operator">=</span> RangeSet<span class="token operator">&lt;</span>Decoration<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>RangeSetBuilder&lt;Decoration&gt;()</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>RangeSetBuilder<span class="token operator">&lt;</span>Decoration<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="transaction" tabindex="-1"><a class="header-anchor" href="#transaction"><span>Transaction</span></a></h3><img src="data:image/jpg;base64,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"><p>比较重要的两个参数的输出：</p><ul><li>tr.changes</li><li>tr.effects</li></ul><h4 id="tr-changes" tabindex="-1"><a class="header-anchor" href="#tr-changes"><span>tr.changes</span></a></h4><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token comment">// tr.changes，修改前</span>
<span class="token punctuation">{</span>
    inserted<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    sections<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">482</span><span class="token punctuation">,</span> <span class="token number">-1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">// get</span>
    desc<span class="token operator">:</span> e<span class="token punctuation">,</span>
    empty<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>				<span class="token comment">// 无修改内容</span>
    invertedDesc<span class="token operator">:</span> e<span class="token punctuation">,</span>
   	length<span class="token operator">:</span> <span class="token number">482</span><span class="token punctuation">,</span>
    newLength<span class="token operator">:</span> <span class="token number">482</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// tr.changes，修改后（倒数第2个字符处插入1个字符&quot;1&quot;）</span>
<span class="token punctuation">{</span>
    inserted<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            length<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            text<span class="token operator">:</span> <span class="token punctuation">[</span>&#39;&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span>
            children<span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            lines<span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            length<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            text<span class="token operator">:</span> <span class="token punctuation">[</span>&#39;<span class="token number">1</span>&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span>		<span class="token comment">// 插入的字符</span>
            children<span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            lines<span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    sections<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">480</span><span class="token punctuation">,</span> <span class="token number">-1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">-1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">// get</span>
    desc<span class="token operator">:</span> e<span class="token punctuation">,</span>
    empty<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>				<span class="token comment">// 有修改内容</span>
    invertedDesc<span class="token operator">:</span> e<span class="token punctuation">,</span>
   	length<span class="token operator">:</span> <span class="token number">482</span><span class="token punctuation">,</span>				<span class="token comment">// 原文档482个字符</span>
    newLength<span class="token operator">:</span> <span class="token number">483</span><span class="token punctuation">,</span>				<span class="token comment">// 修改后483个字符</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重点说一下这个inserted和sections列表</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 有一个插入位置长度是2，有2个插入位置长度就是4，其中单数位置上似乎没存东西，双数位置是增加的内容东西</span>
<span class="token literal-property property">inserted</span><span class="token operator">:</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment">// 含义详见后面</span>
<span class="token literal-property property">sections</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">480</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>


<span class="token comment">// 这里举例来说明一下</span>
<span class="token comment">// 其中-1相当于是一种识别符，用来间隔的</span>
<span class="token comment">// 		[光标, -1] 这种表示没有变化</span>
<span class="token comment">// “到下一修改处光标移动的数量”，如果没有下一处，则为到末尾的光标移动数量</span>
<span class="token punctuation">[</span>
    光标<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> 
 	减少的字符数量<span class="token punctuation">,</span> 增加的自负数量<span class="token punctuation">,</span> 到下一修改处光标移动的数量<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token number">480</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>		<span class="token comment">// 加一</span>
<span class="token punctuation">[</span><span class="token number">480</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>		<span class="token comment">// 减一</span>
<span class="token punctuation">[</span><span class="token number">480</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>		<span class="token comment">// 加二</span>
<span class="token punctuation">[</span><span class="token number">480</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>		<span class="token comment">// 减二</span>


<span class="token comment">// 来复杂点的。这个我用多光标在两个位置分别插入了1个字符</span>
<span class="token comment">// 其中第一处和第二处间隔8个字符，第二处和结尾间隔3个字符</span>
<span class="token punctuation">[</span>
    光标<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> 
    减少<span class="token punctuation">,</span> 增加<span class="token punctuation">,</span> 到下一修改处光标移动的数量<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
    减少<span class="token punctuation">,</span> 增加<span class="token punctuation">,</span> 到下一修改处光标移动的数量<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token number">477</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tr-effects" tabindex="-1"><a class="header-anchor" href="#tr-effects"><span>tr.effects</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// tr.effects</span>
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;e {map: f}&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> underfined
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="原型" tabindex="-1"><a class="header-anchor" href="#原型"><span>原型</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
编辑器**状态的更改**被分组到transactions(事务)中。
通常，用户操作创建单个事务，该事务可以包含任意数量的文档更改，可以更改选择，或者具有其他影响。
通过调用EditorState[^1]创建事务。通过调用EditorView.dispatch[^2]来调度一个。
[^1]:(https://codemirror.net/6/docs/ref/#state.EditorState.update)
[^2]:(https://codemirror.net/6/docs/ref/#view.EditorView.dispatch)
*/</span>
declare <span class="token keyword">class</span> <span class="token class-name">Transaction</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
    The state from which the transaction starts.
    */</span>
    readonly startState<span class="token operator">:</span> EditorState<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    本次Transaction所做的文件变更
    */</span>
    readonly changes<span class="token operator">:</span> ChangeSet<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    The selection set by this transaction, or undefined if it
    doesn&#39;t explicitly set a selection.
    */</span>
    readonly selection<span class="token operator">:</span> EditorSelection <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    The effects added to the transaction.
    */</span>
    readonly effects<span class="token operator">:</span> readonly StateEffect<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Whether the selection should be scrolled into view after this
    transaction is dispatched.
    */</span>
    readonly scrollIntoView<span class="token operator">:</span> boolean<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    The new document produced by the transaction. Contrary to
    [\`.state\`](https://codemirror.net/6/docs/ref/#state.Transaction.state)\`.doc\`, accessing this won&#39;t
    force the entire new state to be computed right away, so it is
    recommended that [transaction
    filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) use this getter
    when they need to look at the new document.
    */</span>
    <span class="token keyword">get</span> <span class="token function">newDoc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Text<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    The new selection produced by the transaction. If
    [\`this.selection\`](https://codemirror.net/6/docs/ref/#state.Transaction.selection) is undefined,
    this will [map](https://codemirror.net/6/docs/ref/#state.EditorSelection.map) the start state&#39;s
    current selection through the changes made by the transaction.
    */</span>
    <span class="token keyword">get</span> <span class="token function">newSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> EditorSelection<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Transaction创建的新状态。按需计算(但为后续访问保留)，
	因此建议尽可能不要在Transaction 过滤器[^1] 中访问它。
    [^1]:(https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter)
    */</span>
    <span class="token keyword">get</span> <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> EditorState<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Get the value of the given annotation type, if any.
    */</span>
    annotation<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>type<span class="token operator">:</span> AnnotationType<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    指示事务是否更改了文档。
    */</span>
    <span class="token keyword">get</span> <span class="token function">docChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Indicates whether this transaction reconfigures the state
    (through a [configuration compartment](https://codemirror.net/6/docs/ref/#state.Compartment) or
    with a top-level configuration
    [effect](https://codemirror.net/6/docs/ref/#state.StateEffect^reconfigure).
    */</span>
    <span class="token keyword">get</span> <span class="token function">reconfigured</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Returns true if the transaction has a [user
    event](https://codemirror.net/6/docs/ref/#state.Transaction^userEvent) annotation that is equal to
    or more specific than \`event\`. For example, if the transaction
    has \`&quot;select.pointer&quot;\` as user event, \`&quot;select&quot;\` and
    \`&quot;select.pointer&quot;\` will match it.
    */</span>
    <span class="token function">isUserEvent</span><span class="token punctuation">(</span>event<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Annotation used to store transaction timestamps. Automatically
    added to every transaction, holding \`Date.now()\`.
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">time</span><span class="token operator">:</span> AnnotationType<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Annotation used to associate a transaction with a user interface
    event. Holds a string identifying the event, using a
    dot-separated format to support attaching more specific
    information. The events used by the core libraries are:
    
     - \`&quot;input&quot;\` when content is entered
       - \`&quot;input.type&quot;\` for typed input
         - \`&quot;input.type.compose&quot;\` for composition
       - \`&quot;input.paste&quot;\` for pasted input
       - \`&quot;input.drop&quot;\` when adding content with drag-and-drop
       - \`&quot;input.complete&quot;\` when autocompleting
     - \`&quot;delete&quot;\` when the user deletes content
       - \`&quot;delete.selection&quot;\` when deleting the selection
       - \`&quot;delete.forward&quot;\` when deleting forward from the selection
       - \`&quot;delete.backward&quot;\` when deleting backward from the selection
       - \`&quot;delete.cut&quot;\` when cutting to the clipboard
     - \`&quot;move&quot;\` when content is moved
       - \`&quot;move.drop&quot;\` when content is moved within the editor through drag-and-drop
     - \`&quot;select&quot;\` when explicitly changing the selection
       - \`&quot;select.pointer&quot;\` when selecting with a mouse or other pointing device
     - \`&quot;undo&quot;\` and \`&quot;redo&quot;\` for history actions
    
    Use [\`isUserEvent\`](https://codemirror.net/6/docs/ref/#state.Transaction.isUserEvent) to check
    whether the annotation matches a given event.
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">userEvent</span><span class="token operator">:</span> AnnotationType<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Annotation indicating whether a transaction should be added to
    the undo history or not.
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">addToHistory</span><span class="token operator">:</span> AnnotationType<span class="token operator">&lt;</span>boolean<span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Annotation indicating (when present and true) that a transaction
    represents a change made by some other actor, not the user. This
    is used, for example, to tag other people&#39;s changes in
    collaborative editing.
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">remote</span><span class="token operator">:</span> AnnotationType<span class="token operator">&lt;</span>boolean<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="view包" tabindex="-1"><a class="header-anchor" href="#view包"><span>View包</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
    					<span class="token comment">// 比较常用的</span>
    EditorView<span class="token punctuation">,</span>				<span class="token comment">// 重要参数 - 文档和视图相关</span>
    ViewPlugin<span class="token punctuation">,</span>				<span class="token comment">// 视图插件</span>
    WidgetType<span class="token punctuation">,</span>				<span class="token comment">// 绘制小部件</span>
    Decoration<span class="token punctuation">,</span>				<span class="token comment">// 装饰</span>
    PluginValue<span class="token punctuation">,</span>			<span class="token comment">// @interface 传入ViewPlugin的一个重要参数的接口规范</span>
    <span class="token comment">// PluginSpec,			// @interface 传入ViewPlugin的一个重要参数的接口规范，一般不需要import</span>
    					<span class="token comment">// 没见过</span>
    ViewUpdate<span class="token punctuation">,</span>				<span class="token comment">// 文档变更时的更新内容</span>
    BlockInfo<span class="token punctuation">,</span>
    BidiSpan<span class="token punctuation">,</span>
    MatchDecorator<span class="token punctuation">,</span>
    GutterMarker
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@codemirror/view&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="editorview-view-editorview" tabindex="-1"><a class="header-anchor" href="#editorview-view-editorview"><span>EditorView（view: EditorView）</span></a></h3><p><code>view</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 打印属性</span>
<span class="token comment">// update(...){console.log(&quot;view&quot;, view)}</span>
<span class="token comment">// 上下滚动会触发打印</span>
<span class="token punctuation">{</span>
    viewState
<span class="token comment">// 这几个都是返回div元素</span>
    <span class="token literal-property property">dom</span><span class="token operator">:</span> div<span class="token punctuation">.</span>cm<span class="token operator">-</span>editor<span class="token punctuation">.</span>ͼ<span class="token number">1.</span>ͼ<span class="token number">2.</span>ͼ3a<span class="token punctuation">.</span>ͼq
    <span class="token literal-property property">announceDOM</span><span class="token operator">:</span> div
    <span class="token literal-property property">contentDOM</span><span class="token operator">:</span> div<span class="token punctuation">.</span>cm<span class="token operator">-</span>content
    <span class="token literal-property property">scrollDOM</span><span class="token operator">:</span> div<span class="token punctuation">.</span>cm<span class="token operator">-</span>scroller
<span class="token comment">// get类 方法</span>
    viewport			<span class="token comment">// 和visibleRanges类似，返回 {from, to} （没有列表）</span>
    visibleRanges		<span class="token comment">// 获取当前文档被渲染的部分，返回 readonly {form, to}[]</span>
    state				<span class="token comment">// view.state.sliceDoc(from, to); 这个方法能返回渲染部分的正文内容</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>view.visibleRanges</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 打印属性</span>
<span class="token comment">// update(...){console.log(&quot;visibleRanges&quot;, view.visibleRanges)}，这是一个getter属性</span>
<span class="token comment">// 上下滚动会触发打印</span>
<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">from</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span><span class="token number">653</span><span class="token punctuation">}</span><span class="token punctuation">]</span>		<span class="token comment">// 现在开始往下滚动</span>
<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">from</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span><span class="token number">920</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">from</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span><span class="token number">992</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">from</span><span class="token operator">:</span><span class="token number">539</span><span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span><span class="token number">1175</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">from</span><span class="token operator">:</span><span class="token number">775</span><span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span><span class="token number">2013</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">from</span><span class="token operator">:</span><span class="token number">921</span><span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span><span class="token number">2771</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">from</span><span class="token operator">:</span><span class="token number">1101</span><span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span><span class="token number">3456</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">from</span><span class="token operator">:</span><span class="token number">1390</span><span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span><span class="token number">4249</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">from</span><span class="token operator">:</span><span class="token number">2156</span><span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span><span class="token number">4262</span><span class="token punctuation">}</span><span class="token punctuation">]</span>	<span class="token comment">// 现在开始往上滚动。全文一共4262个字符，符合</span>
<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">from</span><span class="token operator">:</span><span class="token number">1192</span><span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span><span class="token number">4067</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">from</span><span class="token operator">:</span><span class="token number">889</span><span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span><span class="token number">2379</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">from</span><span class="token operator">:</span><span class="token number">785</span><span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span><span class="token number">1855</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">from</span><span class="token operator">:</span><span class="token number">588</span><span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span><span class="token number">1226</span><span class="token punctuation">}</span><span class="token punctuation">]</span>

<span class="token comment">// 有时这个数组长度是大于1的，并且会发现可能会缺失一部分</span>
<span class="token comment">// 发现缺失的部分是ad和callout语法或与之相似的情况</span>
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token literal-property property">from</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span><span class="token number">557</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">from</span><span class="token operator">:</span><span class="token number">783</span><span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span><span class="token number">830</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">from</span><span class="token operator">:</span><span class="token number">856</span><span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span><span class="token number">859</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">from</span><span class="token operator">:</span><span class="token number">884</span><span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span><span class="token number">919</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token comment">// 一般使用该属性的写法：</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">{</span> from<span class="token punctuation">,</span> to <span class="token punctuation">}</span> <span class="token keyword">of</span> visibleRanges<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原型</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
An editor view represents the editor&#39;s user interface. It holds
the editable DOM surface, and possibly other elements such as the
line number gutter. It handles events and dispatches state
transactions for editing actions.
*/</span>
declare <span class="token keyword">class</span> <span class="token class-name">EditorView</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
    The current editor state.
    */</span>
    <span class="token keyword">get</span> <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> EditorState<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    To be able to display large documents without consuming too much
    memory or overloading the browser, CodeMirror only draws the
    code that is visible (plus a margin around it) to the DOM. This
    property tells you the extent of the current drawn viewport, in
    document positions.
    */</span>
    <span class="token keyword">get</span> <span class="token function">viewport</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">from</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
        <span class="token literal-property property">to</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    When there are, for example, large collapsed ranges in the
    viewport, its size can be a lot bigger than the actual visible
    content. Thus, if you are doing something like styling the
    content in the viewport, it is preferable to only do so for
    these ranges, which are the subset of the viewport that is
    actually drawn.
    */</span>
    <span class="token keyword">get</span> <span class="token function">visibleRanges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> readonly <span class="token punctuation">{</span>
        <span class="token literal-property property">from</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
        <span class="token literal-property property">to</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Returns false when the editor is entirely scrolled out of view
    or otherwise hidden.
    */</span>
    <span class="token keyword">get</span> <span class="token function">inView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Indicates whether the user is currently composing text via
    [IME](https://en.wikipedia.org/wiki/Input_method), and at least
    one change has been made in the current composition.
    */</span>
    <span class="token keyword">get</span> <span class="token function">composing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Indicates whether the user is currently in composing state. Note
    that on some platforms, like Android, this will be the case a
    lot, since just putting the cursor on a word starts a
    composition there.
    */</span>
    <span class="token keyword">get</span> <span class="token function">compositionStarted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
    <span class="token keyword">private</span> _dispatch<span class="token punctuation">;</span>
    <span class="token keyword">private</span> _root<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    The document or shadow root that the view lives in.
    */</span>
    <span class="token keyword">get</span> <span class="token function">root</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> DocumentOrShadowRoot<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    The DOM element that wraps the entire editor view.
    */</span>
    readonly dom<span class="token operator">:</span> HTMLElement<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    The DOM element that can be styled to scroll. (Note that it may
    not have been, so you can&#39;t assume this is scrollable.)
    */</span>
    readonly scrollDOM<span class="token operator">:</span> HTMLElement<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    The editable DOM element holding the editor content. You should
    not, usually, interact with this content directly though the
    DOM, since the editor will immediately undo most of the changes
    you make. Instead, [dispatch](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch)
    [transactions](https://codemirror.net/6/docs/ref/#state.Transaction) to modify content, and
    [decorations](https://codemirror.net/6/docs/ref/#view.Decoration) to style it.
    */</span>
    readonly contentDOM<span class="token operator">:</span> HTMLElement<span class="token punctuation">;</span>
    <span class="token keyword">private</span> announceDOM<span class="token punctuation">;</span>
    <span class="token keyword">private</span> plugins<span class="token punctuation">;</span>
    <span class="token keyword">private</span> pluginMap<span class="token punctuation">;</span>
    <span class="token keyword">private</span> editorAttrs<span class="token punctuation">;</span>
    <span class="token keyword">private</span> contentAttrs<span class="token punctuation">;</span>
    <span class="token keyword">private</span> styleModules<span class="token punctuation">;</span>
    <span class="token keyword">private</span> bidiCache<span class="token punctuation">;</span>
    <span class="token keyword">private</span> destroyed<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    构造一个新视图。你可能想要提供一个 \`parent\` 选项，或者put \`view.dom\` 。
    在创建视图后，将Dom添加到文档中，以便用户可以看到编辑器。
    */</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>config<span class="token operator">?</span><span class="token operator">:</span> EditorViewConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    所有常规的编辑器状态更新都应经过此步骤。它接受一个事务或事务规范，并更新视图以显示该事务产生的新状态。
    它的实现可以被一个[option](https://codemirror.net/6/docs/ref/#view.EditorView.constructor^config.dispatch)覆盖。
    此函数绑定到视图实例，因此不必作为方法调用。
    */</span>
    <span class="token function">dispatch</span><span class="token punctuation">(</span>tr<span class="token operator">:</span> Transaction<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token operator">...</span>specs<span class="token operator">:</span> TransactionSpec<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    更新给定事务数组的视图。这将更新可见的文档和选择，以匹配事务产生的状态，并将更改通知视图插件。
	您通常应该调用[\`dispatch\`][^1]，它使用this作为原型
	[^1]:(https://codemirror.net/6/docs/ref/#view.EditorView.dispatch)
    */</span>
    <span class="token function">update</span><span class="token punctuation">(</span>transactions<span class="token operator">:</span> readonly Transaction<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    将视图重置为给定的状态。
	(这将导致整个文档被重绘，所有的视图插件都被重新初始化，所以你应该只在新状态不是从旧状态派生出来的时候使用它。
	否则，使用[\`dispatch\`][^1]代替。)
	[^1]:(https://codemirror.net/6/docs/ref/#view.EditorView.dispatch)
    */</span>
    <span class="token function">setState</span><span class="token punctuation">(</span>newState<span class="token operator">:</span> EditorState<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> updatePlugins<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Get the CSS classes for the currently active editor themes.
    */</span>
    <span class="token keyword">get</span> <span class="token function">themeClasses</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token keyword">private</span> updateAttrs<span class="token punctuation">;</span>
    <span class="token keyword">private</span> showAnnouncements<span class="token punctuation">;</span>
    <span class="token keyword">private</span> mountStyles<span class="token punctuation">;</span>
    <span class="token keyword">private</span> readMeasured<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Schedule a layout measurement, optionally providing callbacks to
    do custom DOM measuring followed by a DOM write phase. Using
    this is preferable reading DOM layout directly from, for
    example, an event handler, because it&#39;ll make sure measuring and
    drawing done by other components is synchronized, avoiding
    unnecessary DOM layout computations.
    */</span>
    requestMeasure<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>request<span class="token operator">?</span><span class="token operator">:</span> MeasureRequest<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Get the value of a specific plugin, if present. Note that
    plugins that crash can be dropped from a view, so even when you
    know you registered a given plugin, it is recommended to check
    the return value of this method.
    */</span>
    plugin<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">PluginValue</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>plugin<span class="token operator">:</span> ViewPlugin<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    The top position of the document, in screen coordinates. This
    may be negative when the editor is scrolled down. Points
    directly to the top of the first line, not above the padding.
    */</span>
    <span class="token keyword">get</span> <span class="token function">documentTop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Reports the padding above and below the document.
    */</span>
    <span class="token keyword">get</span> <span class="token function">documentPadding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">top</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
        <span class="token literal-property property">bottom</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Find the text line or block widget at the given vertical
    position (which is interpreted as relative to the [top of the
    document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop)).
    */</span>
    <span class="token function">elementAtHeight</span><span class="token punctuation">(</span>height<span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> BlockInfo<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Find the line block (see
    [\`lineBlockAt\`](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) at the given
    height, again interpreted relative to the [top of the
    document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop).
    */</span>
    <span class="token function">lineBlockAtHeight</span><span class="token punctuation">(</span>height<span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> BlockInfo<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Get the extent and vertical position of all [line
    blocks](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) in the viewport. Positions
    are relative to the [top of the
    document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop);
    */</span>
    <span class="token keyword">get</span> <span class="token function">viewportLineBlocks</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> BlockInfo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Find the line block around the given document position. A line
    block is a range delimited on both sides by either a
    non-[hidden](https://codemirror.net/6/docs/ref/#view.Decoration^replace) line breaks, or the
    start/end of the document. It will usually just hold a line of
    text, but may be broken into multiple textblocks by block
    widgets.
    */</span>
    <span class="token function">lineBlockAt</span><span class="token punctuation">(</span>pos<span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> BlockInfo<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    The editor&#39;s total content height.
    */</span>
    <span class="token keyword">get</span> <span class="token function">contentHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Move a cursor position by [grapheme
    cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak). \`forward\` determines whether
    the motion is away from the line start, or towards it. In
    bidirectional text, the line is traversed in visual order, using
    the editor&#39;s [text direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection).
    When the start position was the last one on the line, the
    returned position will be across the line break. If there is no
    further line, the original position is returned.
    
    By default, this method moves over a single cluster. The
    optional \`by\` argument can be used to move across more. It will
    be called with the first cluster as argument, and should return
    a predicate that determines, for each subsequent cluster,
    whether it should also be moved over.
    */</span>
    <span class="token function">moveByChar</span><span class="token punctuation">(</span>start<span class="token operator">:</span> SelectionRange<span class="token punctuation">,</span> <span class="token literal-property property">forward</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span> by<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">initial</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">next</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> boolean<span class="token punctuation">)</span><span class="token operator">:</span> SelectionRange<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Move a cursor position across the next group of either
    [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
    non-whitespace characters.
    */</span>
    <span class="token function">moveByGroup</span><span class="token punctuation">(</span>start<span class="token operator">:</span> SelectionRange<span class="token punctuation">,</span> <span class="token literal-property property">forward</span><span class="token operator">:</span> boolean<span class="token punctuation">)</span><span class="token operator">:</span> SelectionRange<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Move to the next line boundary in the given direction. If
    \`includeWrap\` is true, line wrapping is on, and there is a
    further wrap point on the current line, the wrap point will be
    returned. Otherwise this function will return the start or end
    of the line.
    */</span>
    <span class="token function">moveToLineBoundary</span><span class="token punctuation">(</span>start<span class="token operator">:</span> SelectionRange<span class="token punctuation">,</span> <span class="token literal-property property">forward</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span> includeWrap<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">)</span><span class="token operator">:</span> SelectionRange<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Move a cursor position vertically. When \`distance\` isn&#39;t given,
    it defaults to moving to the next line (including wrapped
    lines). Otherwise, \`distance\` should provide a positive distance
    in pixels.
    
    When \`start\` has a
    [\`goalColumn\`](https://codemirror.net/6/docs/ref/#state.SelectionRange.goalColumn), the vertical
    motion will use that as a target horizontal position. Otherwise,
    the cursor&#39;s own horizontal position is used. The returned
    cursor will have its goal column set to whichever column was
    used.
    */</span>
    <span class="token function">moveVertically</span><span class="token punctuation">(</span>start<span class="token operator">:</span> SelectionRange<span class="token punctuation">,</span> <span class="token literal-property property">forward</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span> distance<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> SelectionRange<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Find the DOM parent node and offset (child offset if \`node\` is
    an element, character offset when it is a text node) at the
    given document position.
    
    Note that for positions that aren&#39;t currently in
    \`visibleRanges\`, the resulting DOM position isn&#39;t necessarily
    meaningful (it may just point before or after a placeholder
    element).
    */</span>
    <span class="token function">domAtPos</span><span class="token punctuation">(</span>pos<span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">node</span><span class="token operator">:</span> Node<span class="token punctuation">;</span>
        <span class="token literal-property property">offset</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Find the document position at the given DOM node. Can be useful
    for associating positions with DOM events. Will raise an error
    when \`node\` isn&#39;t part of the editor content.
    */</span>
    <span class="token function">posAtDOM</span><span class="token punctuation">(</span>node<span class="token operator">:</span> Node<span class="token punctuation">,</span> offset<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Get the document position at the given screen coordinates. For
    positions not covered by the visible viewport&#39;s DOM structure,
    this will return null, unless \`false\` is passed as second
    argument, in which case it&#39;ll return an estimated position that
    would be near the coordinates if it were rendered.
    */</span>
    <span class="token function">posAtCoords</span><span class="token punctuation">(</span>coords<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">precise</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token function">posAtCoords</span><span class="token punctuation">(</span>coords<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> number <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Get the screen coordinates at the given document position.
    \`side\` determines whether the coordinates are based on the
    element before (-1) or after (1) the position (if no element is
    available on the given side, the method will transparently use
    another strategy to get reasonable coordinates).
    */</span>
    <span class="token function">coordsAtPos</span><span class="token punctuation">(</span>pos<span class="token operator">:</span> number<span class="token punctuation">,</span> side<span class="token operator">?</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">|</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">:</span> Rect <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    The default width of a character in the editor. May not
    accurately reflect the width of all characters (given variable
    width fonts or styling of invididual ranges).
    */</span>
    <span class="token keyword">get</span> <span class="token function">defaultCharacterWidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    The default height of a line in the editor. May not be accurate
    for all lines.
    */</span>
    <span class="token keyword">get</span> <span class="token function">defaultLineHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    The text direction
    ([\`direction\`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)
    CSS property) of the editor&#39;s content element.
    */</span>
    <span class="token keyword">get</span> <span class="token function">textDirection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Direction<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Find the text direction of the block at the given position, as
    assigned by CSS. If
    [\`perLineTextDirection\`](https://codemirror.net/6/docs/ref/#view.EditorView^perLineTextDirection)
    isn&#39;t enabled, or the given position is outside of the viewport,
    this will always return the same as
    [\`textDirection\`](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection). Note that
    this may trigger a DOM layout.
    */</span>
    <span class="token function">textDirectionAt</span><span class="token punctuation">(</span>pos<span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> Direction<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Whether this editor [wraps lines](https://codemirror.net/6/docs/ref/#view.EditorView.lineWrapping)
    (as determined by the
    [\`white-space\`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
    CSS property of its content element).
    */</span>
    <span class="token keyword">get</span> <span class="token function">lineWrapping</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Returns the bidirectional text structure of the given line
    (which should be in the current document) as an array of span
    objects. The order of these spans matches the [text
    direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection)—if that is
    left-to-right, the leftmost spans come first, otherwise the
    rightmost spans come first.
    */</span>
    <span class="token function">bidiSpans</span><span class="token punctuation">(</span>line<span class="token operator">:</span> Line<span class="token punctuation">)</span><span class="token operator">:</span> readonly BidiSpan<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Check whether the editor has focus.
    */</span>
    <span class="token keyword">get</span> <span class="token function">hasFocus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Put focus on the editor.
    */</span>
    <span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Update the [root](https://codemirror.net/6/docs/ref/##view.EditorViewConfig.root) in which the editor lives. This is only
    necessary when moving the editor&#39;s existing DOM to a new window or shadow root.
    */</span>
    <span class="token function">setRoot</span><span class="token punctuation">(</span>root<span class="token operator">:</span> Document <span class="token operator">|</span> ShadowRoot<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Clean up this editor view, removing its element from the
    document, unregistering event handlers, and notifying
    plugins. The view instance can no longer be used after
    calling this.
    */</span>
    <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Returns an effect that can be
    [added](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) to a transaction to
    cause it to scroll the given position or range into view.
    */</span>
    <span class="token keyword">static</span> <span class="token function">scrollIntoView</span><span class="token punctuation">(</span>pos<span class="token operator">:</span> number <span class="token operator">|</span> SelectionRange<span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
        By default (\`&quot;nearest&quot;\`) the position will be vertically
        scrolled only the minimal amount required to move the given
        position into view. You can set this to \`&quot;start&quot;\` to move it
        to the top of the view, \`&quot;end&quot;\` to move it to the bottom, or
        \`&quot;center&quot;\` to move it to the center.
        */</span>
        y<span class="token operator">?</span><span class="token operator">:</span> ScrollStrategy<span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
        Effect similar to
        [\`y\`](https://codemirror.net/6/docs/ref/#view.EditorView^scrollIntoView^options.y), but for the
        horizontal scroll position.
        */</span>
        x<span class="token operator">?</span><span class="token operator">:</span> ScrollStrategy<span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
        Extra vertical distance to add when moving something into
        view. Not used with the \`&quot;center&quot;\` strategy. Defaults to 5.
        */</span>
        yMargin<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
        Extra horizontal distance to add. Not used with the \`&quot;center&quot;\`
        strategy. Defaults to 5.
        */</span>
        xMargin<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> StateEffect<span class="token operator">&lt;</span>unknown<span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Facet to add a [style
    module](https://github.com/marijnh/style-mod#documentation) to
    an editor view. The view will ensure that the module is
    mounted in its [document
    root](https://codemirror.net/6/docs/ref/#view.EditorView.constructor^config.root).
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">styleModule</span><span class="token operator">:</span> Facet<span class="token operator">&lt;</span>StyleModule<span class="token punctuation">,</span> readonly StyleModule<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Returns an extension that can be used to add DOM event handlers.
    The value should be an object mapping event names to handler
    functions. For any given event, such functions are ordered by
    extension precedence, and the first handler to return true will
    be assumed to have handled that event, and no other handlers or
    built-in behavior will be activated for it. These are registered
    on the [content element](https://codemirror.net/6/docs/ref/#view.EditorView.contentDOM), except
    for \`scroll\` handlers, which will be called any time the
    editor&#39;s [scroll element](https://codemirror.net/6/docs/ref/#view.EditorView.scrollDOM) or one of
    its parent nodes is scrolled.
    */</span>
    <span class="token keyword">static</span> <span class="token function">domEventHandlers</span><span class="token punctuation">(</span>handlers<span class="token operator">:</span> DOMEventHandlers<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> Extension<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    An input handler can override the way changes to the editable
    DOM content are handled. Handlers are passed the document
    positions between which the change was found, and the new
    content. When one returns true, no further input handlers are
    called and the default behavior is prevented.
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">inputHandler</span><span class="token operator">:</span> Facet<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">view</span><span class="token operator">:</span> EditorView<span class="token punctuation">,</span> <span class="token literal-property property">from</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> boolean<span class="token punctuation">,</span> <span class="token function">readonly</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">view</span><span class="token operator">:</span> EditorView<span class="token punctuation">,</span> <span class="token literal-property property">from</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> boolean<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    By default, the editor assumes all its content has the same
    [text direction](https://codemirror.net/6/docs/ref/#view.Direction). Configure this with a \`true\`
    value to make it read the text direction of every (rendered)
    line separately.
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">perLineTextDirection</span><span class="token operator">:</span> Facet<span class="token operator">&lt;</span>boolean<span class="token punctuation">,</span> boolean<span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Allows you to provide a function that should be called when the
    library catches an exception from an extension (mostly from view
    plugins, but may be used by other extensions to route exceptions
    from user-code-provided callbacks). This is mostly useful for
    debugging and logging. See [\`logException\`](https://codemirror.net/6/docs/ref/#view.logException).
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">exceptionSink</span><span class="token operator">:</span> Facet<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">exception</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">,</span> <span class="token function">readonly</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">exception</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    A facet that can be used to register a function to be called
    every time the view updates.
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">updateListener</span><span class="token operator">:</span> Facet<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">update</span><span class="token operator">:</span> ViewUpdate</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">,</span> <span class="token function">readonly</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">update</span><span class="token operator">:</span> ViewUpdate</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Facet that controls whether the editor content DOM is editable.
    When its highest-precedence value is \`false\`, the element will
    not have its \`contenteditable\` attribute set. (Note that this
    doesn&#39;t affect API calls that change the editor content, even
    when those are bound to keys or buttons. See the
    [\`readOnly\`](https://codemirror.net/6/docs/ref/#state.EditorState.readOnly) facet for that.)
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">editable</span><span class="token operator">:</span> Facet<span class="token operator">&lt;</span>boolean<span class="token punctuation">,</span> boolean<span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Allows you to influence the way mouse selection happens. The
    functions in this facet will be called for a \`mousedown\` event
    on the editor, and can return an object that overrides the way a
    selection is computed from that mouse click or drag.
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">mouseSelectionStyle</span><span class="token operator">:</span> Facet<span class="token operator">&lt;</span>MakeSelectionStyle<span class="token punctuation">,</span> readonly MakeSelectionStyle<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Facet used to configure whether a given selection drag event
    should move or copy the selection. The given predicate will be
    called with the \`mousedown\` event, and can return \`true\` when
    the drag should move the content.
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">dragMovesSelection</span><span class="token operator">:</span> Facet<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> boolean<span class="token punctuation">,</span> <span class="token function">readonly</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> boolean<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Facet used to configure whether a given selecting click adds a
    new range to the existing selection or replaces it entirely. The
    default behavior is to check \`event.metaKey\` on macOS, and
    \`event.ctrlKey\` elsewhere.
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">clickAddsSelectionRange</span><span class="token operator">:</span> Facet<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> boolean<span class="token punctuation">,</span> <span class="token function">readonly</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> boolean<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    A facet that determines which [decorations](https://codemirror.net/6/docs/ref/#view.Decoration)
    are shown in the view. Decorations can be provided in two
    ways—directly, or via a function that takes an editor view.
    
    Only decoration sets provided directly are allowed to influence
    the editor&#39;s vertical layout structure. The ones provided as
    functions are called _after_ the new viewport has been computed,
    and thus **must not** introduce block widgets or replacing
    decorations that cover line breaks.
    
    If you want decorated ranges to behave like atomic units for
    cursor motion and deletion purposes, also provide the range set
    containing the decorations to
    [\`EditorView.atomicRanges\`](https://codemirror.net/6/docs/ref/#view.EditorView^atomicRanges).
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">decorations</span><span class="token operator">:</span> Facet<span class="token operator">&lt;</span>DecorationSet <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">view</span><span class="token operator">:</span> EditorView</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> DecorationSet<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">readonly</span> <span class="token punctuation">(</span>DecorationSet <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">view</span><span class="token operator">:</span> EditorView</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> DecorationSet<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Used to provide ranges that should be treated as atoms as far as
    cursor motion is concerned. This causes methods like
    [\`moveByChar\`](https://codemirror.net/6/docs/ref/#view.EditorView.moveByChar) and
    [\`moveVertically\`](https://codemirror.net/6/docs/ref/#view.EditorView.moveVertically) (and the
    commands built on top of them) to skip across such regions when
    a selection endpoint would enter them. This does _not_ prevent
    direct programmatic [selection
    updates](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection) from moving into such
    regions.
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">atomicRanges</span><span class="token operator">:</span> Facet<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">view</span><span class="token operator">:</span> EditorView</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> _codemirror_state<span class="token punctuation">.</span>RangeSet<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token function">readonly</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">view</span><span class="token operator">:</span> EditorView</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> _codemirror_state<span class="token punctuation">.</span>RangeSet<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Facet that allows extensions to provide additional scroll
    margins (space around the sides of the scrolling element that
    should be considered invisible). This can be useful when the
    plugin introduces elements that cover part of that element (for
    example a horizontally fixed gutter).
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">scrollMargins</span><span class="token operator">:</span> Facet<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">view</span><span class="token operator">:</span> EditorView</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Partial<span class="token operator">&lt;</span>Rect<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token function">readonly</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">view</span><span class="token operator">:</span> EditorView</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Partial<span class="token operator">&lt;</span>Rect<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Create a theme extension. The first argument can be a
    [\`style-mod\`](https://github.com/marijnh/style-mod#documentation)
    style spec providing the styles for the theme. These will be
    prefixed with a generated class for the style.
    
    Because the selectors will be prefixed with a scope class, rule
    that directly match the editor&#39;s [wrapper
    element](https://codemirror.net/6/docs/ref/#view.EditorView.dom)—to which the scope class will be
    added—need to be explicitly differentiated by adding an \`&amp;\` to
    the selector for that element—for example
    \`&amp;.cm-focused\`.
    
    When \`dark\` is set to true, the theme will be marked as dark,
    which will cause the \`&amp;dark\` rules from [base
    themes](https://codemirror.net/6/docs/ref/#view.EditorView^baseTheme) to be used (as opposed to
    \`&amp;light\` when a light theme is active).
    */</span>
    <span class="token keyword">static</span> <span class="token function">theme</span><span class="token punctuation">(</span>spec<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>selector<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> StyleSpec<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        dark<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> Extension<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    This facet records whether a dark theme is active. The extension
    returned by [\`theme\`](https://codemirror.net/6/docs/ref/#view.EditorView^theme) automatically
    includes an instance of this when the \`dark\` option is set to
    true.
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">darkTheme</span><span class="token operator">:</span> Facet<span class="token operator">&lt;</span>boolean<span class="token punctuation">,</span> boolean<span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Create an extension that adds styles to the base theme. Like
    with [\`theme\`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use \`&amp;\` to indicate the
    place of the editor wrapper element when directly targeting
    that. You can also use \`&amp;dark\` or \`&amp;light\` instead to only
    target editors with a dark or light theme.
    */</span>
    <span class="token keyword">static</span> <span class="token function">baseTheme</span><span class="token punctuation">(</span>spec<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>selector<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> StyleSpec<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> Extension<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Facet that provides additional DOM attributes for the editor&#39;s
    editable DOM element.
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">contentAttributes</span><span class="token operator">:</span> Facet<span class="token operator">&lt;</span>AttrSource<span class="token punctuation">,</span> readonly AttrSource<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Facet that provides DOM attributes for the editor&#39;s outer
    element.
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">editorAttributes</span><span class="token operator">:</span> Facet<span class="token operator">&lt;</span>AttrSource<span class="token punctuation">,</span> readonly AttrSource<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    An extension that enables line wrapping in the editor (by
    setting CSS \`white-space\` to \`pre-wrap\` in the content).
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">lineWrapping</span><span class="token operator">:</span> Extension<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    State effect used to include screen reader announcements in a
    transaction. These will be added to the DOM in a visually hidden
    element with \`aria-live=&quot;polite&quot;\` set, and should be used to
    describe effects that are visually obvious but may not be
    noticed by screen reader users (such as moving to the next
    search match).
    */</span>
    <span class="token keyword">static</span> <span class="token literal-property property">announce</span><span class="token operator">:</span> _codemirror_state<span class="token punctuation">.</span>StateEffectType<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    Retrieve an editor view instance from the view&#39;s DOM
    representation.
    */</span>
    <span class="token keyword">static</span> <span class="token function">findFromDOM</span><span class="token punctuation">(</span>dom<span class="token operator">:</span> HTMLElement<span class="token punctuation">)</span><span class="token operator">:</span> EditorView <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="viewplugin" tabindex="-1"><a class="header-anchor" href="#viewplugin"><span>ViewPlugin</span></a></h3><p>内容不多，主要是fromClass方法比较奇特。需要传入一个 <code>PluginValue</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>declare <span class="token keyword">class</span> <span class="token class-name">ViewPlugin</span><span class="token operator">&lt;</span><span class="token constant">V</span> <span class="token keyword">extends</span> <span class="token class-name">PluginValue</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
    该类的实例充当扩展
    */</span>
    <span class="token literal-property property">extension</span><span class="token operator">:</span> Extension<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    在给定的编辑器视图下，从构造函数定义插件，该函数创建插件的值。
    */</span>
    <span class="token keyword">static</span> define<span class="token operator">&lt;</span><span class="token constant">V</span> <span class="token keyword">extends</span> <span class="token class-name">PluginValue</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token function-variable function">create</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">view</span><span class="token operator">:</span> EditorView</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">V</span><span class="token punctuation">,</span> spec<span class="token operator">?</span><span class="token operator">:</span> PluginSpec<span class="token operator">&lt;</span><span class="token constant">V</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> ViewPlugin<span class="token operator">&lt;</span><span class="token constant">V</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    创建一个类的插件，其构造函数以单个编辑器视图作为参数。
    */</span>
    <span class="token keyword">static</span> fromClass<span class="token operator">&lt;</span><span class="token constant">V</span> <span class="token keyword">extends</span> <span class="token class-name">PluginValue</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>cls<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token punctuation">(</span>view<span class="token operator">:</span> EditorView<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">V</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> spec<span class="token operator">?</span><span class="token operator">:</span> PluginSpec<span class="token operator">&lt;</span><span class="token constant">V</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> ViewPlugin<span class="token operator">&lt;</span><span class="token constant">V</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pluginvalue-interface" tabindex="-1"><a class="header-anchor" href="#pluginvalue-interface"><span>PluginValue（interface）</span></a></h3><p><mark>（注意区分 PluginValue 和 ViewPlugin</mark>，他们长得有点像）</p>`,72),m={href:"https://codemirror.net/docs/ref/#view.PluginValue",target:"_blank",rel:"noopener noreferrer"},b={href:"https://codemirror.net/docs/ref/#view.ViewPlugin%5EfromClass",target:"_blank",rel:"noopener noreferrer"},h=t(`<div class="language-tsx line-numbers-mode" data-ext="tsx" data-title="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  ViewUpdate<span class="token punctuation">,</span>
  PluginValue<span class="token punctuation">,</span>
  EditorView<span class="token punctuation">,</span>
  ViewPlugin<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@codemirror/view&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ExamplePlugin</span> <span class="token keyword">implements</span> <span class="token class-name">PluginValue</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>view<span class="token operator">:</span> EditorView<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/*...*/</span><span class="token punctuation">}</span>

  <span class="token function">update</span><span class="token punctuation">(</span>update<span class="token operator">:</span> ViewUpdate<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/*...*/</span><span class="token punctuation">}</span>

  <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/*...*/</span><span class="token punctuation">}</span>	<span class="token comment">// 可以不实现</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> examplePlugin <span class="token operator">=</span> ViewPlugin<span class="token punctuation">.</span><span class="token function">fromClass</span><span class="token punctuation">(</span>ExamplePlugin<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下三个视图插件的方法控制它的生命周期：</p><ul><li><code>constructor()</code> 方法用于插件的初始化。</li><li><code>update()</code> 方法在发生改变时更新您的插件，比如在用户输入或者选择一些文本时。</li><li><code>destroy()</code> 方法在插件卸载后进行清理操作。</li></ul><h3 id="pluginspec-interface" tabindex="-1"><a class="header-anchor" href="#pluginspec-interface"><span>PluginSpec（interface）</span></a></h3><p>一般只用写一个 <code>decorations: (v) =&gt; v.decorations,</code> 方法就行了</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">PluginSpec</span><span class="token operator">&lt;</span><span class="token constant">V</span> <span class="token keyword">extends</span> <span class="token class-name">PluginValue</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
    为插件注册给定的[事件处理程序](https://codemirror.net/6/docs/ref/#view.EditorView^domEventHandlers)。
	当调用时，这些函数的“this”将绑定到插件值。
    */</span>
    eventHandlers<span class="token operator">?</span><span class="token operator">:</span> DOMEventHandlers<span class="token operator">&lt;</span><span class="token constant">V</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    指定插件在添加到编辑器配置时提供额外的扩展。
    */</span>
    provide<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">plugin</span><span class="token operator">:</span> ViewPlugin<span class="token operator">&lt;</span><span class="token constant">V</span><span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Extension<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    允许插件提供装饰。
    当给出时，这应该是一个接受插件值并返回[decoration set](https://codemirror.net/6/docs/ref/#view.DecorationSet)的函数。
    另见关于[改变布局的装饰](https://codemirror.net/6/docs/ref/#view.EditorView^decorations)依赖于视图的警告。
   
    一般直接写这句是就好了：decorations: (v) =&gt; v.decorations,
    */</span>
    decorations<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token constant">V</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> DecorationSet<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="decoration" tabindex="-1"><a class="header-anchor" href="#decoration"><span>Decoration</span></a></h3><p>详见 装饰专题 和 Range 这两章笔记</p>`,8);function g(f,y){const a=p("ExternalLinkIcon");return i(),c("div",null,[r,s("p",null,[n("CM6 也有自己的插件，称之为 "),d,n(" 尽管 CM6 支持多种扩展，但其中两个最常见的分别是 "),s("a",u,[n("View plugins"),e(a)]),n(" 以及 "),s("a",v,[n("State fields"),e(a)]),n("。")]),k,s("p",null,[n("要想创建一个视图插件，需要创建一个继承自 "),s("a",m,[n("PluginValue"),e(a)]),n(" 的类，并将它传给 "),s("a",b,[n("ViewPlugin.fromClass()"),e(a)]),n(" 方法。")]),h])}const S=o(l,[["render",g],["__file","09. 接口剖析.html.vue"]]),A=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Type/Doc/MarkdwonAbout/CodeMirror/09.%20%E6%8E%A5%E5%8F%A3%E5%89%96%E6%9E%90.html","title":"CodeMirror","lang":"zh-CN","frontmatter":{"description":"CodeMirror 目录 接口剖析 State包 Extensions（扩展） CM6 也有自己的插件，称之为 扩展（extensions） 尽管 CM6 支持多种扩展，但其中两个最常见的分别是 View plugins 以及 State fields。 讲真，这个东西好难弄懂，一开始完全不理解 例如下面这个，大概意思我懂，可以传View Plugi...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Type/Doc/MarkdwonAbout/CodeMirror/09.%20%E6%8E%A5%E5%8F%A3%E5%89%96%E6%9E%90.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"CodeMirror"}],["meta",{"property":"og:description","content":"CodeMirror 目录 接口剖析 State包 Extensions（扩展） CM6 也有自己的插件，称之为 扩展（extensions） 尽管 CM6 支持多种扩展，但其中两个最常见的分别是 View plugins 以及 State fields。 讲真，这个东西好难弄懂，一开始完全不理解 例如下面这个，大概意思我懂，可以传View Plugi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CodeMirror\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"CodeMirror","slug":"codemirror","link":"#codemirror","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"接口剖析","slug":"接口剖析","link":"#接口剖析","children":[{"level":2,"title":"State包","slug":"state包","link":"#state包","children":[{"level":3,"title":"Extensions（扩展）","slug":"extensions-扩展","link":"#extensions-扩展","children":[{"level":4,"title":"OB的Extensions","slug":"ob的extensions","link":"#ob的extensions","children":[]}]},{"level":3,"title":"StateField","slug":"statefield","link":"#statefield","children":[{"level":4,"title":"StateField<T>","slug":"statefield-t","link":"#statefield-t","children":[]},{"level":4,"title":"StateFieldSpec<T>","slug":"statefieldspec-t","link":"#statefieldspec-t","children":[]},{"level":4,"title":"StateEffect<T>","slug":"stateeffect-t","link":"#stateeffect-t","children":[]},{"level":4,"title":"StateEffectType<T>","slug":"stateeffecttype-t","link":"#stateeffecttype-t","children":[]},{"level":4,"title":"StateField 和 StateEffect 的联系","slug":"statefield-和-stateeffect-的联系","link":"#statefield-和-stateeffect-的联系","children":[]},{"level":4,"title":"EditorState","slug":"editorstate","link":"#editorstate","children":[]},{"level":4,"title":"和EditorState的关系","slug":"和editorstate的关系","link":"#和editorstate的关系","children":[]}]},{"level":3,"title":"Range","slug":"range","link":"#range","children":[{"level":4,"title":"RangeValue","slug":"rangevalue","link":"#rangevalue","children":[]},{"level":4,"title":"RangeSet<T>","slug":"rangeset-t","link":"#rangeset-t","children":[]},{"level":4,"title":"RangeSetBuilder<T extends RangeValue>","slug":"rangesetbuilder-t-extends-rangevalue","link":"#rangesetbuilder-t-extends-rangevalue","children":[]},{"level":4,"title":"看Range如何影响Decoration的设计","slug":"看range如何影响decoration的设计","link":"#看range如何影响decoration的设计","children":[]}]},{"level":3,"title":"Transaction","slug":"transaction","link":"#transaction","children":[{"level":4,"title":"tr.changes","slug":"tr-changes","link":"#tr-changes","children":[]},{"level":4,"title":"tr.effects","slug":"tr-effects","link":"#tr-effects","children":[]},{"level":4,"title":"原型","slug":"原型","link":"#原型","children":[]}]}]},{"level":2,"title":"View包","slug":"view包","link":"#view包","children":[{"level":3,"title":"EditorView（view: EditorView）","slug":"editorview-view-editorview","link":"#editorview-view-editorview","children":[]},{"level":3,"title":"ViewPlugin","slug":"viewplugin","link":"#viewplugin","children":[]},{"level":3,"title":"PluginValue（interface）","slug":"pluginvalue-interface","link":"#pluginvalue-interface","children":[]},{"level":3,"title":"PluginSpec（interface）","slug":"pluginspec-interface","link":"#pluginspec-interface","children":[]},{"level":3,"title":"Decoration","slug":"decoration","link":"#decoration","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":30.83,"words":9250},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Type/Doc/MarkdwonAbout/CodeMirror/09. 接口剖析.md","autoDesc":true}');export{S as comp,A as data};

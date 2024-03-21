import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as l,c as d,a as n,d as a,b as o,e as s}from"./app-DtBZtuIa.js";const c={},p=s('<h1 id="kramdown" tabindex="-1"><a class="header-anchor" href="#kramdown"><span>kramdown</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><p>官网文档：https://kramdown.gettalong.org/quickref.html</p><h1 id="kramdown基本语法" tabindex="-1"><a class="header-anchor" href="#kramdown基本语法"><span>kramdown基本语法</span></a></h1><h2 id="kramdown基本语法-1" tabindex="-1"><a class="header-anchor" href="#kramdown基本语法-1"><span>kramdown基本语法</span></a></h2>',5),r={href:"https://zhuanlan.zhihu.com/p/60838339",target:"_blank",rel:"noopener noreferrer"},u=s(`<h3 id="header" tabindex="-1"><a class="header-anchor" href="#header"><span>atx 风格标题 </span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>~<span class="token strike"><span class="token punctuation">~~</span><span class="token content">
#         一级
##
###
####
#####
######    六级
</span><span class="token punctuation">~~</span></span>~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="指定标头id-head-id" tabindex="-1"><a class="header-anchor" href="#指定标头id-head-id"><span>指定标头ID（<code>{#head_id}</code>）</span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>~~~

<span class="token title important"><span class="token punctuation">######</span> I can help you  {#head_1}</span>

HTML 内代码：
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>head_1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>I can help you<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">&gt;</span></span>
~~~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引用-blockquotes" tabindex="-1"><a class="header-anchor" href="#引用-blockquotes"><span>引用 {#Blockquotes}</span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>~<span class="token strike"><span class="token punctuation">~~</span><span class="token content">
&gt; 引用文本
</span><span class="token punctuation">~~</span></span>~

<span class="token title important"><span class="token punctuation">####</span> kramdown中 | 会被渲染，需要转义</span>

<span class="token blockquote punctuation">&gt;</span> 引用文本\\|单行

<span class="token blockquote punctuation">&gt;</span> 使用 <span class="token code-snippet code keyword">\`&lt;br&gt;\`</span> or 两个空格可  
<span class="token blockquote punctuation">&gt;</span> 以换行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),v=n("h3",{id:"",blank_line:"",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#"},[n("span",null,"空行")])],-1),m=s(`<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code-snippet code keyword">\`&lt;br&gt;\`</span> or 两个空格
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="code" tabindex="-1"><a class="header-anchor" href="#code"><span>Code </span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>~<span class="token strike"><span class="token punctuation">~~</span><span class="token content">
# Code
</span><span class="token punctuation">~~</span></span>~

<span class="token blockquote punctuation">&gt;</span> 若Code内含有 &quot;<span class="token strike"><span class="token punctuation">~</span><span class="token content">&quot; 符号，则只需要将 三个 **启动符号 &quot;</span><span class="token punctuation">~</span></span>&quot;** 号多写几个就可以：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="Definition_Lists" tabindex="-1"><a class="header-anchor" href="#Definition_Lists"><span>清单</span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>~~~
<span class="token list punctuation">*</span> kram
<span class="token list punctuation">+</span> down
<span class="token list punctuation">-</span> now

<span class="token list punctuation">1.</span> kram
<span class="token list punctuation">2.</span> down
<span class="token list punctuation">3.</span> now
~~~

<span class="token blockquote punctuation">&gt;</span> 注意缩进
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="Tables" tabindex="-1"><a class="header-anchor" href="#Tables"><span>表格 </span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>~<span class="token strike"><span class="token punctuation">~~</span><span class="token content">
| Header One     | Header Two     |
| :------------- | :------------- |
| Item One       | Item Two       |
</span><span class="token punctuation">~~</span></span>~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="Horizontal_Rules" tabindex="-1"><a class="header-anchor" href="#Horizontal_Rules"><span>分割线 </span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>~~~
<span class="token hr punctuation">* * *</span>

<span class="token hr punctuation">---</span>

  <span class="token italic"><span class="token punctuation">_</span><span class="token content">  </span><span class="token punctuation">_</span></span>  <span class="token italic"><span class="token punctuation">_</span><span class="token content">  </span><span class="token punctuation">_</span></span>

<span class="token hr punctuation">---------------</span>
~~~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="html_blocks" tabindex="-1"><a class="header-anchor" href="#html_blocks"><span>HTML块 </span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> 如果HTML标记具有属性markdown=&quot;0&quot;，则标记将被解析为原始HTML块。  
<span class="token blockquote punctuation">&gt;</span> 如果HTML标记具有属性markdown=&quot;1&quot;，则使用此标记中用于解析语法的默认机制。  
<span class="token blockquote punctuation">&gt;</span> 如果HTML标记具有属性markdown=&quot;block&quot;，则标记的内容将被解析为块级元素。  
<span class="token blockquote punctuation">&gt;</span> 如果HTML标记具有属性markdown=&quot;span&quot;，则标记的内容将被解析为span级别元素

~<span class="token strike"><span class="token punctuation">~~</span><span class="token content"> html
script style math option textarea pre code kbd samp var
</span><span class="token punctuation">~~</span></span>~

<span class="token blockquote punctuation">&gt;</span> 解析为原始 HTML

~<span class="token strike"><span class="token punctuation">~~</span><span class="token content"> html
applet button blockquote body colgroup dd div dl fieldset form iframe li
map noscript object ol table tbody thead tfoot tr td ul
</span><span class="token punctuation">~~</span></span>~

<span class="token blockquote punctuation">&gt;</span> 解析为块级元素

~<span class="token strike"><span class="token punctuation">~~</span><span class="token content"> html
a abbr acronym address b bdo big cite caption code del dfn dt em
h1 h2 h3 h4 h5 h6 i ins kbd label legend optgroup p pre q rb rbc
rp rt rtc ruby samp select small span strong sub sup th tt var
</span><span class="token punctuation">~~</span></span>~

<span class="token blockquote punctuation">&gt;</span> 解析为 span 级元素

~<span class="token strike"><span class="token punctuation">~~</span><span class="token content"> html
&lt;div markdown=&quot;1&quot;&gt;This is the first part of a para,
which is continued here.
&lt;/div&gt;
</span><span class="token punctuation">~~</span></span>~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="链接和图像-link-img-含扩展语法" tabindex="-1"><a class="header-anchor" href="#链接和图像-link-img-含扩展语法"><span>链接和图像 {#link_img} （含扩展语法）</span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>~~~
<span class="token title important"><span class="token punctuation">#</span> 自动链接(尖括号)</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>me.example@example.com</span><span class="token punctuation">&gt;</span></span>

<span class="token title important"><span class="token punctuation">#</span> 内联链接</span>
<span class="token url">[<span class="token content">link</span>](<span class="token url">http://xxx.com</span>)</span>


<span class="token title important"><span class="token punctuation">#</span> 图片</span>
<span class="token url"><span class="token operator">!</span>[<span class="token content">img</span>](<span class="token url">http://xxx/1.img</span>)</span>

<span class="token title important"><span class="token punctuation">#</span> 由于可以通过span和块IAL添加其他属性，因此可以指定图像宽度和高度</span>
<span class="token url"><span class="token operator">!</span>[<span class="token content">smiley</span>](<span class="token url">http://xxx/1.img</span>)</span>{:height=&quot;36px&quot; width=&quot;36px&quot;}
~~~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Typora、Obsidian不支持样式，要用img标签</p><h3 id="Emphasis" tabindex="-1"><a class="header-anchor" href="#Emphasis"><span>重点 </span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>~<span class="token strike"><span class="token punctuation">~~</span><span class="token content">
<span class="token italic"><span class="token punctuation">*</span><span class="token content">some text</span><span class="token punctuation">*</span></span>
<span class="token italic"><span class="token punctuation">_</span><span class="token content">some text</span><span class="token punctuation">_</span></span>
<span class="token bold"><span class="token punctuation">**</span><span class="token content">some text</span><span class="token punctuation">**</span></span>
<span class="token bold"><span class="token punctuation">__</span><span class="token content">some text</span><span class="token punctuation">__</span></span>
</span><span class="token punctuation">~~</span></span>~

<span class="token title important"><span class="token punctuation">#</span> kramdown中单个 * 会被渲染，需要转义 \\*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单行代码-line-code-含扩展语法" tabindex="-1"><a class="header-anchor" href="#单行代码-line-code-含扩展语法"><span>单行代码 {#line_code}（含扩展语法）</span></a></h3><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span>
\`code\`
<span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span>

<span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span>
<span class="token comment"># 与代码块一样，可以使用IAL设置代码范围的语言</span>

This <span class="token keyword">is</span> a Ruby code fragment \`x <span class="token operator">=</span> Class<span class="token punctuation">.</span>new\`<span class="token punctuation">{</span><span class="token punctuation">:</span><span class="token punctuation">.</span>language<span class="token operator">-</span>ruby<span class="token punctuation">}</span>

\`<span class="token keyword">import</span> re\`<span class="token punctuation">{</span><span class="token punctuation">:</span><span class="token punctuation">.</span>language<span class="token operator">-</span>python<span class="token punctuation">}</span>
<span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="Footnotes" tabindex="-1"><a class="header-anchor" href="#Footnotes"><span>脚注 </span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>~~~
人有悲欢离合，月有阴晴圆缺.[^1]

[^1]: 《水调歌头》
~~~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="缩略语-abbreviations-含扩展语法" tabindex="-1"><a class="header-anchor" href="#缩略语-abbreviations-含扩展语法"><span>缩略语 {#Abbreviations} （含扩展语法）</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>~~~
*[another language]: It&#39;s called Markdown

*[WTF]: What the fuck
~~~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Typora、Obsidian不支持</p><h3 id="属性定义" tabindex="-1"><a class="header-anchor" href="#属性定义"><span>属性定义</span></a></h3><h4 id="属性列表定义-ald-attribute-list-definitions-扩展语法" tabindex="-1"><a class="header-anchor" href="#属性列表定义-ald-attribute-list-definitions-扩展语法"><span>属性列表定义（ALD） {#Attribute-List-Definitions}（扩展语法）</span></a></h4><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> 用于向块和 span级元素添加属性

~<span class="token strike"><span class="token punctuation">~~</span><span class="token content">
# 例子:
{:ref-name: #myid .my-class}
{:other: ref-name #id-of-other title=&quot;hallo you&quot;}
{:test: key=&quot;value \\&quot; with quote&quot; and other=&#39;quote brace \\}&#39;}
</span><span class="token punctuation">~~</span></span>~

~~~
<span class="token title important"><span class="token punctuation">#</span> ALD行具有以下结构：</span>

左括号，可选前面最多三个空格，
然后是冒号，引用名称和另一个冒号，
然后是属性定义（允许的字符是反斜杠转义关闭括号或除了未转义的右括号之外的任何字符），
然后是一个右括号和可选空格，直到行尾
~~~

<span class="token blockquote punctuation">&gt;</span> 引用名称需要以单词字符或数字开头，可选地后跟其他单词字符，数字或短划线  
<span class="token blockquote punctuation">&gt;</span> 有四种不同类型的属性定义，必须用一个或多个空格分隔

<span class="token blockquote punctuation">&gt;</span> 如果不存在具有此引用名称的属性定义列表，则在收集属性时将忽略引用名称

~~~
<span class="token title important"><span class="token punctuation">#</span> 以下ALD都是等效的：</span>

{:id: .cls1 .cls2}
{:id: class=&quot;cls1&quot; .cls2}
{:id: class=&quot;something&quot; class=&quot;cls1&quot; .cls2}
{:id: class=&quot;cls1 cls2&quot;}
~~~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="内联属性列表-ial-inline-attribute-lists-扩展语法" tabindex="-1"><a class="header-anchor" href="#内联属性列表-ial-inline-attribute-lists-扩展语法"><span>内联属性列表（IAL） {#Inline-Attribute-Lists} （扩展语法）</span></a></h4><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> 此块级元素用于将属性附加到另一个块级元素  
<span class="token blockquote punctuation">&gt;</span> 块内联属性列表（块IAL）具有与ALD相同的结构

<span class="token blockquote punctuation">&gt;</span> 块IAL（或两个或多个块IAL）必须直接放在属性应附加到的块级元素之前或之后。  
<span class="token blockquote punctuation">&gt;</span> 如果块IAL直接在块级元素之后和之前，则将其应用于前一元素。在所有其他情况  
<span class="token blockquote punctuation">&gt;</span> 下，块IAL被忽略，例如，当块IAL被空行包围时

<span class="token blockquote punctuation">&gt;</span> 在引用的ALD中，IAL的键值对 <span class="token bold"><span class="token punctuation">**</span><span class="token content">优先于同名的键值对</span><span class="token punctuation">**</span></span>


~~~
<span class="token title important"><span class="token punctuation">#</span> 以下是块IAL的一些示例：</span>

A simple paragraph with an ID attribute.
{: #para-one}

<span class="token blockquote punctuation">&gt;</span> A blockquote with a title
{:title=&quot;The blockquote title&quot;}
{: #myid}

{:.ruby}
    Some code here
~~~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="span_ial" tabindex="-1"><a class="header-anchor" href="#span_ial"><span>Span 内联属性列表 </span></a></h4><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> span 级元素的块内联属性列表的一个版本

<span class="token blockquote punctuation">&gt;</span> 它具有与块IAL相同的结构，除了不允许前导和尾随空格  
<span class="token blockquote punctuation">&gt;</span> 跨度IAL（或两个或更多跨度IAL）必须直接放在应该应  
<span class="token blockquote punctuation">&gt;</span> 用它的span-level元素之后，之间不允许有其他字符，否则它将被忽略并仅从输出中删除


~<span class="token strike"><span class="token punctuation">~~</span><span class="token content">
This <span class="token italic"><span class="token punctuation">*</span><span class="token content">is</span><span class="token punctuation">*</span></span>{:.underline} some <span class="token code-snippet code keyword">\`code\`</span>{:#id}{:.class}.
A <span class="token url">[<span class="token content">link</span>](<span class="token url">test.html</span>)</span>{:rel=&#39;something&#39;} and some <span class="token bold"><span class="token punctuation">**</span><span class="token content">tools</span><span class="token punctuation">**</span></span>{:.tools}.
</span><span class="token punctuation">~~</span></span>~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="Extensions" tabindex="-1"><a class="header-anchor" href="#Extensions"><span>扩展 </span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> 扩展提供了其他功能，但使用相同的语法。它们既可以作为块也可以作为跨度级元素使用   
<span class="token blockquote punctuation">&gt;</span>扩展的语法与ALD的语法非常相似

~~~
<span class="token title important"><span class="token punctuation">#</span> 示例</span>

{::comment}
This text is completely ignored by kramdown - a comment in the text.
{:/comment}

Do you see {::comment}this text{:/comment}?
{::comment}some other comment{:/}

{::options key=&quot;val&quot; /}
~~~

<span class="token list punctuation">-</span> 一个左大括号，
<span class="token list punctuation">-</span> 接着是两个冒号和扩展名，
<span class="token list punctuation">-</span> 可选地后跟空格和属性定义（允许的字符是反斜杠转义关闭括号或除了未转义的右括号之外的任何字符|同ALD
<span class="token list punctuation">-</span> 然后是斜线和右大括号（如果扩展没有正文）或只有右大括号（如果扩展有正文）

~~~
<span class="token title important"><span class="token punctuation">#</span> kramdown可以使用以下扩展名：</span>

comment
将正文文本视为未在输出中显示的注释

nomarkdown
不要使用kramdown处理主体，而是按原样输出。该属性type指定哪些转换器应输出正文：如果缺少该属性，则所有转换器都应输出该属性。否则，属性值必须是以空格分隔的转换器名称列表，并且这些转换器应输出正文。

options
由于正文被忽略，应该在没有正文的情况下使用。用于设置kramdown处理器的全局选项（例如，禁用自动标头ID生成）。请注意，解析器使用的选项立即生效，而所有其他选项都不是！这意味着，例如，不能仅为kramdown文档的某些部分设置转换器选项
~~~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32);function k(b,h){const e=t("ExternalLinkIcon");return l(),d("div",null,[p,n("p",null,[a("参考："),n("a",r,[a("【知乎】kramdown基本语法"),o(e)])]),u,v,m])}const x=i(c,[["render",k],["__file","Kramdown.html.vue"]]),q=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Doc/Note%20Grammar/Kramdown.html","title":"kramdown","lang":"zh-CN","frontmatter":{"description":"kramdown 目录 官网文档：https://kramdown.gettalong.org/quickref.html kramdown基本语法 kramdown基本语法 参考：【知乎】kramdown基本语法 atx 风格标题 指定标头ID（{#head_id}） 引用 {#Blockquotes} 空行 Code 清单 表格 分割线 HTML块...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Doc/Note%20Grammar/Kramdown.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"kramdown"}],["meta",{"property":"og:description","content":"kramdown 目录 官网文档：https://kramdown.gettalong.org/quickref.html kramdown基本语法 kramdown基本语法 参考：【知乎】kramdown基本语法 atx 风格标题 指定标头ID（{#head_id}） 引用 {#Blockquotes} 空行 Code 清单 表格 分割线 HTML块..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://xxx/1.img"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"kramdown\\",\\"image\\":[\\"http://xxx/1.img\\",\\"http://xxx/1.img\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"kramdown","slug":"kramdown","link":"#kramdown","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"kramdown基本语法","slug":"kramdown基本语法","link":"#kramdown基本语法","children":[{"level":2,"title":"kramdown基本语法","slug":"kramdown基本语法-1","link":"#kramdown基本语法-1","children":[{"level":3,"title":"atx 风格标题","slug":"header","link":"#header","children":[]},{"level":3,"title":"指定标头ID（{#head_id}）","slug":"指定标头id-head-id","link":"#指定标头id-head-id","children":[]},{"level":3,"title":"引用  {#Blockquotes}","slug":"引用-blockquotes","link":"#引用-blockquotes","children":[]},{"level":3,"title":"空行","slug":"","link":"#","children":[]},{"level":3,"title":"Code","slug":"code","link":"#code","children":[]},{"level":3,"title":"清单","slug":"Definition_Lists","link":"#Definition_Lists","children":[]},{"level":3,"title":"表格","slug":"Tables","link":"#Tables","children":[]},{"level":3,"title":"分割线","slug":"Horizontal_Rules","link":"#Horizontal_Rules","children":[]},{"level":3,"title":"HTML块","slug":"html_blocks","link":"#html_blocks","children":[]},{"level":3,"title":"链接和图像  {#link_img} （含扩展语法）","slug":"链接和图像-link-img-含扩展语法","link":"#链接和图像-link-img-含扩展语法","children":[]},{"level":3,"title":"重点","slug":"Emphasis","link":"#Emphasis","children":[]},{"level":3,"title":"单行代码  {#line_code}（含扩展语法）","slug":"单行代码-line-code-含扩展语法","link":"#单行代码-line-code-含扩展语法","children":[]},{"level":3,"title":"脚注","slug":"Footnotes","link":"#Footnotes","children":[]},{"level":3,"title":"缩略语  {#Abbreviations} （含扩展语法）","slug":"缩略语-abbreviations-含扩展语法","link":"#缩略语-abbreviations-含扩展语法","children":[]},{"level":3,"title":"属性定义","slug":"属性定义","link":"#属性定义","children":[{"level":4,"title":"属性列表定义（ALD）  {#Attribute-List-Definitions}（扩展语法）","slug":"属性列表定义-ald-attribute-list-definitions-扩展语法","link":"#属性列表定义-ald-attribute-list-definitions-扩展语法","children":[]},{"level":4,"title":"内联属性列表（IAL）  {#Inline-Attribute-Lists} （扩展语法）","slug":"内联属性列表-ial-inline-attribute-lists-扩展语法","link":"#内联属性列表-ial-inline-attribute-lists-扩展语法","children":[]},{"level":4,"title":"Span 内联属性列表","slug":"span_ial","link":"#span_ial","children":[]}]},{"level":3,"title":"扩展","slug":"Extensions","link":"#Extensions","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":5.23,"words":1569},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Doc/Note Grammar/Kramdown.md","autoDesc":true}');export{x as comp,q as data};

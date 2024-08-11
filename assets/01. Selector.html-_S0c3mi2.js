import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,e as a}from"./app-Y52ihg76.js";const l={},s=a(`<h1 id="selector-选择器" tabindex="-1"><a class="header-anchor" href="#selector-选择器"><span>Selector (选择器)</span></a></h1><h2 id="什么是选择器" tabindex="-1"><a class="header-anchor" href="#什么是选择器"><span>什么是选择器？</span></a></h2><p>这是插件中的一个重要概念，对于 markdwon 的局部解析渲染，有两个重要的步骤</p><ol><li>范围识别 (我将完成这一步骤的称为 <code>选择器</code>)</li><li>将这段范围中的内容进行处理或渲染 (我将完成这一步骤的称为 <code>处理器</code>)</li></ol><h2 id="七种选择器" tabindex="-1"><a class="header-anchor" href="#七种选择器"><span>七种选择器</span></a></h2><h3 id="传统代码块选择器" tabindex="-1"><a class="header-anchor" href="#传统代码块选择器"><span>传统代码块选择器</span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>\`\`\`js       // 这是开始位置 (包含该行)
var a = 0;
\`\`\`         // 这是结束位置 (包含该行)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在obsidian中，大部分插件使用这种选择器识别范围。例子多不胜数，如：tabs标签页、col分栏、mermaid、plantuml 等等</p><h3 id="传统引用块选择器" tabindex="-1"><a class="header-anchor" href="#传统引用块选择器"><span>传统引用块选择器</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>其他内容

&gt; [!note]   // 这是开始位置 (包含该行)
&gt; 这是一个obsidian
&gt; 的callout
&gt; 语句       // 这是结束位置 (包含该行)

其他内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这也是一种选择器，通过引用块选择。但相较于有很多代码选择器的插件，用引用块进行选择的，几乎就只有callout语句了。</p><p>那是因为 —— obsidian的开发API并没有提供关于使用这种方式选择范围的快捷API，如果你想要使用这种方式选择一段md文本并进行操作，几乎只能手撸了，而这很难</p><h3 id="ab的列表选择器" tabindex="-1"><a class="header-anchor" href="#ab的列表选择器"><span>AB的列表选择器</span></a></h3><p>而 AnyBlock 提供了非常多能够轻松选择范围的选择器，并提供了丰富的解析渲染的处理器。</p><p>例如列表选择器：</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>\\[...]      // 这是开始位置 (包含该行)

<span class="token list punctuation">-</span> 1
  <span class="token list punctuation">-</span> 2
-3          // 这是结束位置 (包含该行)

其他内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>触发方式：在 <code>列表</code> 的上一/两行增加一行 <code>AB选择器头部</code> (由方括号扩起来的内容)</li><li>范围选择：从AB选择器头部开始，到其后面的列表结束为止</li></ul><h3 id="ab的标题选择器" tabindex="-1"><a class="header-anchor" href="#ab的标题选择器"><span>AB的标题选择器</span></a></h3><p>例如标题选择器：</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">##</span> 二级标题</span>

\\[...]      // 这是开始位置 (包含该行)

<span class="token title important"><span class="token punctuation">###</span> 三级标题</span>

<span class="token title important"><span class="token punctuation">####</span> 四级标题</span>

<span class="token title important"><span class="token punctuation">###</span> 三级标题</span>

内容         // 这是结束位置 (包含该行)

<span class="token title important"><span class="token punctuation">##</span> 二级标题</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>触发方式：在 <code>标题</code> 的上一/两行增加一行 <code>AB选择器头部</code> (由方括号扩起来的内容)</li><li>范围选择：从AB选择器头部开始，记其下面的标题等级为X，选择至其后面出现大于X的标题等级为止</li></ul><h3 id="ab的代码块选择器" tabindex="-1"><a class="header-anchor" href="#ab的代码块选择器"><span>AB的代码块选择器</span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>
\\[...]      // 这是开始位置 (包含该行)

\`\`\`js
var a = 1;
\`\`\`         // 这是结束位置 (包含该行)

其他内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>触发方式：在 <code>代码块</code> 的上一/两行增加一行 <code>AB选择器头部</code> (由方括号扩起来的内容)</li><li>范围选择：从AB选择器头部开始，选择至其后面的代码块结束为止</li></ul><h3 id="ab的引用块选择器" tabindex="-1"><a class="header-anchor" href="#ab的引用块选择器"><span>AB的引用块选择器</span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>
\\[...]      // 这是开始位置 (包含该行)

<span class="token blockquote punctuation">&gt;</span> ...
<span class="token blockquote punctuation">&gt;</span> ...
<span class="token blockquote punctuation">&gt;</span> ...       // 这是结束位置 (包含该行)

其他内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>触发方式：在 <code>引用块</code> 的上一/两行增加一行 <code>AB选择器头部</code> (由方括号扩起来的内容)</li><li>范围选择：从AB选择器头部开始，选择至其后面的引用块结束为止</li></ul><h3 id="mdit-container的-头尾选择器" tabindex="-1"><a class="header-anchor" href="#mdit-container的-头尾选择器"><span>Mdit-Container的<code>:::</code>头尾选择器</span></a></h3><p>这是 markdwon-it-container 的语法，在 VuePress/VitePress 博客上较为多见。</p><p>虽然该语法并不是 AnyBlock 作者所设计的，但在 Obsidian 上，该语法也同样由 AnyBlock 插件提供</p><p>语法：</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>
\\::: ...    // 这是开始位置 (包含该行)

任意内容

\\:::        // 这是结束位置 (包含该行)

其他内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="几种选择器的比较" tabindex="-1"><a class="header-anchor" href="#几种选择器的比较"><span>几种选择器的比较</span></a></h2><ul><li>传统代码开头选择器 <ul><li>优点：自带代码着色、可嵌套。适合需要包含代码的内容</li><li>缺点：若包含md内容则在无插件的情况下渲染结果不好</li></ul></li><li>传统引用块选择器 <ul><li>缺点：无Obsidian支持的API，开发困难。书写稍麻烦 (每行带 <code>&gt;</code>)，嵌套也稍麻烦</li></ul></li><li>AB选择器 <ul><li>优点：格式统一。格式无感，没啥插件嵌入的语法污染。包含md内容时，在无插件的情况下渲染结果优秀</li><li>缺点：对于复合内容，无法选择。用灵活性和功能性换来了便携性和无入侵性，导致前两者功能较mdit-container较差</li></ul></li><li>Mdit-Container选择器 <ul><li>优点：选择范围灵活。包含md内容时，在无插件的情况下渲染结果优秀。嵌套非常方便</li><li>缺点：在对于简单范围的选择上不如AB选择器高效快捷，语法的入侵痕迹更重一些</li></ul></li></ul><div class="hint-container note"><p class="hint-container-title">注</p></div>`,35),d=[s];function t(c,r){return n(),i("div",null,d)}const v=e(l,[["render",t],["__file","01. Selector.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Public/ProductDoc/AnyBlock/docs/zh/01.%20Selector.html","title":"Selector (选择器)","lang":"zh-CN","frontmatter":{"description":"Selector (选择器) 什么是选择器？ 这是插件中的一个重要概念，对于 markdwon 的局部解析渲染，有两个重要的步骤 范围识别 (我将完成这一步骤的称为 选择器) 将这段范围中的内容进行处理或渲染 (我将完成这一步骤的称为 处理器) 七种选择器 传统代码块选择器 在obsidian中，大部分插件使用这种选择器识别范围。例子多不胜数，如：ta...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/ProductDoc/AnyBlock/docs/zh/01.%20Selector.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Selector (选择器)"}],["meta",{"property":"og:description","content":"Selector (选择器) 什么是选择器？ 这是插件中的一个重要概念，对于 markdwon 的局部解析渲染，有两个重要的步骤 范围识别 (我将完成这一步骤的称为 选择器) 将这段范围中的内容进行处理或渲染 (我将完成这一步骤的称为 处理器) 七种选择器 传统代码块选择器 在obsidian中，大部分插件使用这种选择器识别范围。例子多不胜数，如：ta..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Selector (选择器)\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"Selector (选择器)","slug":"selector-选择器","link":"#selector-选择器","children":[{"level":2,"title":"什么是选择器？","slug":"什么是选择器","link":"#什么是选择器","children":[]},{"level":2,"title":"七种选择器","slug":"七种选择器","link":"#七种选择器","children":[{"level":3,"title":"传统代码块选择器","slug":"传统代码块选择器","link":"#传统代码块选择器","children":[]},{"level":3,"title":"传统引用块选择器","slug":"传统引用块选择器","link":"#传统引用块选择器","children":[]},{"level":3,"title":"AB的列表选择器","slug":"ab的列表选择器","link":"#ab的列表选择器","children":[]},{"level":3,"title":"AB的标题选择器","slug":"ab的标题选择器","link":"#ab的标题选择器","children":[]},{"level":3,"title":"AB的代码块选择器","slug":"ab的代码块选择器","link":"#ab的代码块选择器","children":[]},{"level":3,"title":"AB的引用块选择器","slug":"ab的引用块选择器","link":"#ab的引用块选择器","children":[]},{"level":3,"title":"Mdit-Container的:::头尾选择器","slug":"mdit-container的-头尾选择器","link":"#mdit-container的-头尾选择器","children":[]}]},{"level":2,"title":"几种选择器的比较","slug":"几种选择器的比较","link":"#几种选择器的比较","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":7.14,"words":2142},"filePathRelative":"MdNote_Public/ProductDoc/AnyBlock/docs/zh/01. Selector.md","autoDesc":true}');export{v as comp,m as data};

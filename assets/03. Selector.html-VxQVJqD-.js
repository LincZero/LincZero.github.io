import{_ as h,c as u,b as o,a as s,d as r,e as n,w as i,r as p,o as k,f as a}from"./app-DKMVrBFj.js";const g={},b={class:"callout","data-callout":"note"},f={class:"callout-content"};function m(v,e){const c=p("VPIcon"),d=p("Tabs");return k(),u("div",null,[e[27]||(e[27]=o(`<h1 id="selector" tabindex="-1">Selector</h1><p>Many people see the dazzling effects of the display page and think that AnyBlock provides a lot of effects processing and rendering is the content of this plugin.</p><p>But that&#39;s not the essence of AnyBlock. The essence of <code>AnyBlock</code>, as the name suggests, is to pick any range and turn it into a block.</p><p>That is, the essence of AnyBlock is the <strong>selector</strong></p><h2 id="what-is-a-selector" tabindex="-1">What is a selector?</h2><p>This is an important concept in the plugin, and there are two important steps for markdwon&#39;s partial parsing rendering</p><ol><li>Range identification (I will call this step &#39;selector&#39;)</li><li>Process or render the contents of this range (I will call this step &#39;processor&#39;)</li></ol><h2 id="eight-selectors" tabindex="-1">Eight selectors</h2><h3 id="traditional-code-block-selector" tabindex="-1">Traditional code block selector</h3><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-md"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\`\`\`js       // This is the starting position (contains the line)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`\`\`         // This is the end position (contains the line)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>In obsidian, most plug-ins use this selector to identify ranges. Examples abound: tabs tabs, col tabs, mermaid, plantuml, and more</p><p>In addition to AnyBlock&#39;s extended six selectors, traditional code block selectors are also supported. The advantage of this selector is that the official itself provides, compatibility and other issues will be very good. If you encounter some problems that AnyBllock does not take effect during use, you can try to use this method to see whether the problem is solved.</p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-md"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\`\`\`anyblock   // This is the starting position (contains the line)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[list2table]  // This is required, and is somewhat similar to the statement declaring the chart type in a mermaid code block</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">- 1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - 2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - 3</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">- 4</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - 5</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - 6</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\`\`\`           // This is the end position (contains the line)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="traditional-reference-block-selector" tabindex="-1">Traditional reference block selector</h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>Other content</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; [!note]   // This is the starting position (contains the line)</span></span>
<span class="line"><span>&gt; 这是一个obsidian</span></span>
<span class="line"><span>&gt; 的callout</span></span>
<span class="line"><span>&gt; 语句       // This is the end position (contains the line)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Other content</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>This is also a selector, selected by reference block. However, compared to plug-ins with many code selectors, the selection using reference blocks is almost the only callout statement.</p><p>That&#39;s because - obsidian&#39;s development API doesn&#39;t provide a quick API for selecting a range of options in this way, and if you want to select a piece of md text in this way and work with it, it&#39;s pretty much a hand-jerk, which is hard</p><h3 id="ab-list-selector" tabindex="-1">AB list selector</h3><p>而 AnyBlock 提供了非常多能够轻松选择范围的选择器，并提供了丰富的解析渲染的处理器。</p><p>例如列表选择器：</p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-md"><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\[</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">...]      // This is the starting position (contains the line)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-3          // This is the end position (contains the line)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Other content</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Trigger: Add an AB selector header one or two lines above the list (the content expanded by square brackets)</li><li>Range selection: starts at the head of the AB selector and ends at the end of the following list</li></ul><h3 id="ab-heading-selector" tabindex="-1">AB heading selector</h3><p>In the previous &quot;Effects Show&quot;, I always used the list selector because it is the most convenient, and to avoid introducing the concept of &quot;selector&quot; in the previous chapter, which would confuse people who are new to this plugin.</p><p>In fact, for a process like &quot;card&quot;/&quot; TAB &quot;/&quot; column &quot;, each subitem is usually a lot of content and more mixed, using the title selector or Mdit-Container selector is a better choice!</p><p>For example, a title selector:</p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-md"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">## 二级标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\[</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">...]      // This is the starting position (contains the line)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">### 三级标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">#### 四级标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">### 三级标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">内容         // This is the end position (contains the line)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">## 二级标题</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Trigger: Add a line of &#39;AB selector header&#39; one or two lines above &#39;header&#39; (the content expanded by square brackets)</li><li>Range selection: Start at the AB selector head, mark the title level below it as X, and select until a title level greater than X appears after it</li></ul><h3 id="ab-codeblock-selector" tabindex="-1">AB codeBlock selector</h3><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-md"><span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\[</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">...]      // This is the starting position (contains the line)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\`\`\`js</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`\`\`         // This is the end position (contains the line)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Other content</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Trigger: Add an AB selector header one or two lines above the code block (the content expanded by square brackets)</li><li>Range selection: Start at the AB selector header and select until the end of the following code block</li></ul><h3 id="ab-quote-selector" tabindex="-1">AB quote selector</h3><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-md"><span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\[</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">...]      // This is the starting position (contains the line)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#5C6370;--shiki-dark-font-style:inherit;">&gt; ...</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#5C6370;--shiki-dark-font-style:inherit;">&gt; ...</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#5C6370;--shiki-dark-font-style:inherit;">&gt; ...       // This is the end position (contains the line)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Other content</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Trigger: Add an AB selector header one or two lines above the reference block (the content expanded by square brackets)</li><li>Range selection: Start at the AB selector header and select until the end of the following reference block</li></ul><h3 id="ab-table-selector" tabindex="-1">AB table selector</h3><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-md"><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\[</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">...]      // This is the starting position (contains the line)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">| a | b |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">|---|---|</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">| c | d |   // This is the end position (contains the line)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Other content</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="mdit-container-headtail-selector" tabindex="-1">Mdit-Container <code>:::</code> headtail selector</h3><p>This is the syntax of markdwon-it-container, which is more common on the VuePress/VitePress blog.</p><p>Although this syntax was not designed by the AnyBlock authors, on Obsidian it is also provided by the AnyBlock plugin</p><p>Syntax:</p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-md"><span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\\::: ...    // This is the starting position (contains the line)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">任意内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\\:::        // This is the end position (contains the line)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Other content</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="summary" tabindex="-1">Summary</h2><h3 id="comparison-of-several-selectors" tabindex="-1">Comparison of several selectors</h3><ul><li>Traditional code start selector</li><li>Advantages: built-in code coloring, nesting. Suitable for content that needs to include code</li><li>Disadvantages: If you include md content, the rendering results are not good without plug-ins</li><li>Traditional reference block selector</li><li>Disadvantages: there is no Obsidian supported API, difficult to develop. Writing is a bit cumbersome (with &#39;&gt;&#39; per line), and nesting is a bit cumbersome</li><li>AB selector</li><li>Advantages: Unified format. Formatting is dull, there is no plugin embedded syntax pollution. Excellent rendering results without plugins when including md content</li><li>Disadvantages: For composite content, there is no choice. Flexibility and functionality are traded for portability and non-intrusion, resulting in the former two functions being inferior to mdit-container</li><li>Mdit-Container Indicates the selector</li><li>Advantages: Flexible selection range. Excellent rendering results without plugins when including md content. Nesting is very convenient</li><li>Disadvantages: It is not as efficient and fast as the AB selector for the selection of simple ranges, and the intrusion traces of the syntax are heavier</li></ul>`,44)),s("div",b,[e[2]||(e[2]=o('<div class="callout-title"><div class="callout-title-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path></svg></div><div class="callout-title-inner">Note</div></div>',1)),s("div",f,[s("p",null,[e[0]||(e[0]=n("The disadvantage of AB selector is not the disadvantage of AnyBlock plug-in, AnyBlock originally had its own head and tail selector, but later saw that the ':")),r(c,{icon:`' selector is more general and threw away its own '{}' head and tail selector syntax instead of that.
What's more, in Obsidian, the '`}),e[1]||(e[1]=n(":' selector is also provided by AnyBlock"))])])]),e[28]||(e[28]=o('<h3 id="why-is-the-essence-of-anyblock-the-selector" tabindex="-1">Why is the essence of AnyBlock the selector</h3><p>Although AnyBlock support is very rich in effects, but in fact many other plug-ins can do these effects. Whether in Obsidian or Markdown-it, such as the drawing of charts, timelines, columns, etc</p><p>The essence of AnyBlock is &quot;selector&quot;</p><ol><li>The first is to be able to choose the scope flexibly. It eliminates the need to implement additional syntax only through code blocks<br> (Especially for ob, vueperss does have a mdit-conteiner selector)</li><li>The second is that the way of selecting the scope is extremely convenient. Its syntax is convenient and non-invasive</li><li>The third is the decoupling of the processor and selector. The processor doesn&#39;t care which selector you use to select the range</li></ol><h2 id="use-it-flexibly" tabindex="-1">Use it flexibly</h2><h3 id="title-list" tabindex="-1">title = list</h3><ol><li>Thanks to the &#39;title2list&#39; processor and support for concatenated processors: any processor that can handle lists can also handle headings</li><li>If there is any problem, you can use &#39;title2list|code()&#39; to easily check the conversion and debug</li><li>It is not recommended to use &#39;title2tab&#39; instead of &#39;title2list|list2tab&#39;. If there are existing &#39;title2&#39; instructions, use existing ones</li></ol><ul><li>(Bottom reason: There are some differences between the two effects. Because &#39;title2list&#39; needs to convert the structure to a multi-layer tree, but &#39;list2tab&#39; only needs to convert the structure to a two-layer tree)</li></ul><p>such as：</p>',9)),r(d,{id:"277",data:[{id:"Plugin effect (插件效果)"},{id:"No plugin effect (无插件效果)"},{id:"md source code (md源码)"}]},{title0:i(({value:t,isActive:l})=>e[3]||(e[3]=[n("Plugin effect (插件效果)")])),title1:i(({value:t,isActive:l})=>e[4]||(e[4]=[n("No plugin effect (无插件效果)")])),title2:i(({value:t,isActive:l})=>e[5]||(e[5]=[n("md source code (md源码)")])),tab0:i(({value:t,isActive:l})=>e[6]||(e[6]=[s("div",{class:"ab-note drop-shadow"},[s("table",{class:"ab-table ab-branch-table"},[s("tbody",null,[s("tr",null,[s("td",{rowspan:"3",col_index:"0",class:"markdown-rendered"},[s("div",null,[s("p",null,"a")])]),s("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[s("div",null,[s("p",null,"1")])])]),s("tr",null,[s("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[s("div",null,[s("p",null,"2")])])]),s("tr",null,[s("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[s("div",null,[s("p",null,"3")])])]),s("tr",null,[s("td",{rowspan:"3",col_index:"0",class:"markdown-rendered"},[s("div",null,[s("p",null,"b")])]),s("td",{rowspan:"3",col_index:"1",class:"markdown-rendered"},[s("div",null,[s("p",null,"b1")])]),s("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[s("div",null,[s("p",null,"5")])])]),s("tr",null,[s("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[s("div",null,[s("p",null,"6")])])]),s("tr",null,[s("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[s("div",null,[s("p",null,[n("7"),s("br"),n(" @tab No plugin effect (无插件效果)")])])])])])])],-1)])),tab1:i(({value:t,isActive:l})=>e[7]||(e[7]=[s("p",null,"(noplugin)[title2list|list2table]",-1),s("h4",{id:"a",tabindex:"-1"},"a",-1),s("ul",null,[s("li",null,"1"),s("li",null,"2"),s("li",null,"3")],-1),s("h4",{id:"b",tabindex:"-1"},"b",-1),s("h5",{id:"b1",tabindex:"-1"},"b1",-1),s("ul",null,[s("li",null,"5"),s("li",null,"6"),s("li",null,"7")],-1)])),tab2:i(({value:t,isActive:l})=>e[8]||(e[8]=[s("div",{class:"language-md line-numbers-mode","data-highlighter":"shiki","data-ext":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",{class:"language-md"},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}},"\\["),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"title2list|list2table]")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"#### a")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"-"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," 1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"-"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," 2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"-"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," 3")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"#### b")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"##### b1")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"-"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," 5")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"-"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," 6")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"-"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," 7")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1)])),_:1}),e[29]||(e[29]=o(`<h3 id="container-list" tabindex="-1">container = list</h3><p>container can also be represented as a list (but only as a layer 2 list). This means that anything you can do with a layer 2 list, you can also do with the container selector syntax. Only the syntax is slightly different:</p><p>such as：tabs</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>\\::: tabs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@tab t1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>content1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@tab t2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>content2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\:::</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>such as: cards or columns</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>\\::: card (or col)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@card t1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>content1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@card t2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>content2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\:::</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="concatenation-syntax-triggers-other-syntax" tabindex="-1">Concatenation syntax triggers other syntax</h3><p>For example, some plug-ins use a code block selector, but the content needs md content, we can optimize it:</p><p>Such as tabs, col plugins, etc. (although you should actually use anyblock&#39;s processor, which also has these two features)</p><p>For example, from reference block to code block</p>`,10)),r(d,{id:"359",data:[{id:"Plugin effect (插件效果)"},{id:"No plugin effect (无插件效果)"},{id:"md source code (md源码)"}]},{title0:i(({value:t,isActive:l})=>e[9]||(e[9]=[n("Plugin effect (插件效果)")])),title1:i(({value:t,isActive:l})=>e[10]||(e[10]=[n("No plugin effect (无插件效果)")])),title2:i(({value:t,isActive:l})=>e[11]||(e[11]=[n("md source code (md源码)")])),tab0:i(({value:t,isActive:l})=>e[12]||(e[12]=[s("div",{class:"ab-note drop-shadow"},[s("div",{class:"markdown-rendered"},[s("div",null,[s("blockquote",null,[s("p",null,[n("// 这是一段 "),s("strong",null,"markdown"),n(" 文本"),s("br"),n(" var a = 0; // 这是代码")])])])])],-1)])),tab1:i(({value:t,isActive:l})=>e[13]||(e[13]=[s("p",null,"(noPlugin)[quote2code(js)]",-1),s("blockquote",null,[s("p",null,[n("js"),s("br"),n(" // 这是一段 "),s("strong",null,"markdown"),n(" 文本"),s("br"),n(" var a = 0; // 这是代码")])],-1)])),tab2:i(({value:t,isActive:l})=>e[14]||(e[14]=[s("div",{class:"language-md line-numbers-mode","data-highlighter":"shiki","data-ext":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",{class:"language-md"},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#ABB2BF"}},"["),s("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"quote2code(js)"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#ABB2BF"}},"]")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0A1A7","--shiki-light-font-style":"italic","--shiki-dark":"#5C6370","--shiki-dark-font-style":"inherit"}},"> js")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0A1A7","--shiki-light-font-style":"italic","--shiki-dark":"#5C6370","--shiki-dark-font-style":"inherit"}},"> // 这是一段 "),s("span",{style:{"--shiki-light":"#986801","--shiki-light-font-weight":"bold","--shiki-dark":"#D19A66","--shiki-dark-font-weight":"inherit"}},"**markdown**"),s("span",{style:{"--shiki-light":"#A0A1A7","--shiki-light-font-style":"italic","--shiki-dark":"#5C6370","--shiki-dark-font-style":"inherit"}}," 文本")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0A1A7","--shiki-light-font-style":"italic","--shiki-dark":"#5C6370","--shiki-dark-font-style":"inherit"}},"> var a = 0; // 这是代码")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1)])),_:1}),e[30]||(e[30]=s("p",null,"Example: Code block to reference block: (This is also what Admonition Plugin did before obsidian's callout syntax was supported)",-1)),r(d,{id:"380",data:[{id:"Plugin effect (插件效果)"},{id:"No plugin effect (无插件效果)"},{id:"md source code (md源码)"}]},{title0:i(({value:t,isActive:l})=>e[15]||(e[15]=[n("Plugin effect (插件效果)")])),title1:i(({value:t,isActive:l})=>e[16]||(e[16]=[n("No plugin effect (无插件效果)")])),title2:i(({value:t,isActive:l})=>e[17]||(e[17]=[n("md source code (md源码)")])),tab0:i(({value:t,isActive:l})=>e[18]||(e[18]=[s("div",{class:"ab-note drop-shadow"},[s("div",{class:"markdown-rendered"},[s("div",null,[s("div",{class:"callout","data-callout":"note"},[s("div",{class:"callout-title"},[s("div",{class:"callout-title-icon"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-pencil"},[s("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"}),s("path",{d:"m15 5 4 4"})])]),s("div",{class:"callout-title-inner"},"Note")]),s("div",{class:"callout-content"},[s("p",null,"[!quote]"),s("p",null,[n("这是一段 "),s("strong",null,"markdown"),n(" 文本")]),s("p",null,"指令：Xcode|quote|add(> [!note])"),s("p",null,'指令解释：去除代码块|加入引用块|在第一行插入("> [!note]")')])])])])],-1)])),tab1:i(({value:t,isActive:l})=>e[19]||(e[19]=[s("p",null,"(noPlugin)[Xcode|quote|add(> [!note])]",-1),s("div",{class:"language- line-numbers-mode","data-highlighter":"shiki","data-ext":"",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",{class:"language-"},[s("span",{class:"line"},[s("span",null,"这是一段 **markdown** 文本")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"指令：Xcode|quote|add(> [!note])")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,'指令解释：去除代码块|加入引用块|在第一行插入("> [!note]")')])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),s("p",null,null,-1)])),tab2:i(({value:t,isActive:l})=>e[20]||(e[20]=[s("div",{class:"language-md line-numbers-mode","data-highlighter":"shiki","data-ext":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",{class:"language-md"},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"[Xcode|quote|add(> "),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#ABB2BF"}},"["),s("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"!note"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#ABB2BF"}},"]"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},")]")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"这是一段 **markdown** 文本")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"指令：Xcode|quote|add(> [!note])")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},'指令解释：去除代码块|加入引用块|在第一行插入("> [!note]")')]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1)])),_:1}),e[31]||(e[31]=o(`<p>With this flexible processor syntax, if the original plugin syntax is X, you can define a new syntax Y, let the Y syntax replace the X syntax at the same time make the original plugin work!</p><h3 id="alias-system" tabindex="-1">Alias system</h3><p>Of course, you may dislike the idea of making instructions long and unreadable, but that&#39;s okay -- we also have an alias system. Allows you to define an alias to represent a string of instructions!</p><p>For example, the code2quote directive, which comes with the plugin, uses an alias system; essentially, code2quote is identical to Xcode|quote</p><p>The plugin comes with a number of very natural aliases (especially ** Chinese ** aliases), and in actual use, it is recommended that you use these aliases:</p><p>Supported shortcut aliases:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>flow</span></span>
<span class="line"><span>流程图</span></span>
<span class="line"><span>mindmap</span></span>
<span class="line"><span>思维导图</span></span>
<span class="line"><span>脑图</span></span>
<span class="line"><span>mdMindmap</span></span>
<span class="line"><span>md思维导图</span></span>
<span class="line"><span>md脑图</span></span>
<span class="line"><span>table</span></span>
<span class="line"><span>multiWayTable</span></span>
<span class="line"><span>multiCrossTable</span></span>
<span class="line"><span>crossTable</span></span>
<span class="line"><span>表格</span></span>
<span class="line"><span>多叉表格</span></span>
<span class="line"><span>多叉表</span></span>
<span class="line"><span>跨行表格</span></span>
<span class="line"><span>跨行表</span></span>
<span class="line"><span>listTable</span></span>
<span class="line"><span>treeTable</span></span>
<span class="line"><span>listGrid</span></span>
<span class="line"><span>treeGrid</span></span>
<span class="line"><span>列表格</span></span>
<span class="line"><span>树形表</span></span>
<span class="line"><span>树形表格</span></span>
<span class="line"><span>dirTree</span></span>
<span class="line"><span>dir</span></span>
<span class="line"><span>目录</span></span>
<span class="line"><span>目录树</span></span>
<span class="line"><span>目录结构</span></span>
<span class="line"><span>wbs</span></span>
<span class="line"><span>工作分解图</span></span>
<span class="line"><span>timeline</span></span>
<span class="line"><span>时间线</span></span>
<span class="line"><span>fakeList</span></span>
<span class="line"><span>仿列表</span></span>
<span class="line"><span>标签页</span></span>
<span class="line"><span>分栏</span></span>
<span class="line"><span>卡片</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Using an alias system makes the plugin syntax less invasive, for example:</p>`,8)),r(d,{id:"419",data:[{id:"Plugin effect (插件效果)"},{id:"No plugin effect (无插件效果)"},{id:"md source code (md源码)"}]},{title0:i(({value:t,isActive:l})=>e[21]||(e[21]=[n("Plugin effect (插件效果)")])),title1:i(({value:t,isActive:l})=>e[22]||(e[22]=[n("No plugin effect (无插件效果)")])),title2:i(({value:t,isActive:l})=>e[23]||(e[23]=[n("md source code (md源码)")])),tab0:i(({value:t,isActive:l})=>e[24]||(e[24]=[s("div",{class:"ab-note drop-shadow"},[s("div",{class:"ab-list-table-parent"},[s("table",{class:"ab-table ab-list-table ab-table-folder"},[s("tbody",null,[s("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder"},[s("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),s("div",{class:"ab-list-table-witharrow"},"/")])]),s("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder"},[s("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),s("div",{class:"ab-list-table-witharrow"},"home")])]),s("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder"},[s("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),s("div",{class:"ab-list-table-witharrow"},"usr")])]),s("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder"},[s("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),s("div",{class:"ab-list-table-witharrow"},"etc")])]),s("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"/network/interfaces"},[s("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),s("div",{class:"ab-list-table-witharrow"},"/network/interfaces")])]),s("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:`file
`},[s("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
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
          `},[s("div",{class:"ab-list-table-svg"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),s("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),s("div",{class:"ab-list-table-witharrow"},"file")])])])]),s("button",{class:"ab-table-fold",is_fold:"false",onclick:`          const btn = this;
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
          `},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-fold-vertical-icon lucide-fold-vertical"},[s("path",{d:"M12 22v-6"}),s("path",{d:"M12 8V2"}),s("path",{d:"M4 12H2"}),s("path",{d:"M10 12H8"}),s("path",{d:"M16 12h-2"}),s("path",{d:"M22 12h-2"}),s("path",{d:"m15 19-3-3-3 3"}),s("path",{d:"m15 5-3 3-3-3"})])])])],-1)])),tab1:i(({value:t,isActive:l})=>e[25]||(e[25]=[s("p",null,"(noplugin)[目录]",-1),s("ul",null,[s("li",null,[n("// "),s("ul",null,[s("li",null,"home/"),s("li",null,"usr/"),s("li",null,[n("etc/ "),s("ul",null,[s("li",null,"/network/interfaces")])]),s("li",null,"file")])])],-1)])),tab2:i(({value:t,isActive:l})=>e[26]||(e[26]=[s("div",{class:"language- line-numbers-mode","data-highlighter":"shiki","data-ext":"",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",{class:"language-"},[s("span",{class:"line"},[s("span",null,"\\[目录]")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"- //")]),n(`
`),s("span",{class:"line"},[s("span",null,"  - home/")]),n(`
`),s("span",{class:"line"},[s("span",null,"  - usr/")]),n(`
`),s("span",{class:"line"},[s("span",null,"  - etc/")]),n(`
`),s("span",{class:"line"},[s("span",null,"    - /network/interfaces")]),n(`
`),s("span",{class:"line"},[s("span",null,"  - file")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1)])),_:1})])}const y=h(g,[["render",m]]),B=JSON.parse(`{"path":"/MdNote_Public/ProductDoc/AnyBlock/docs/en/03.%20Selector.html","title":"Selector","lang":"zh-CN","frontmatter":{"description":"Selector Many people see the dazzling effects of the display page and think that AnyBlock provides a lot of effects processing and rendering is the content of this plugin. But t...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Selector\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/ProductDoc/AnyBlock/docs/en/03.%20Selector.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Selector"}],["meta",{"property":"og:description","content":"Selector Many people see the dazzling effects of the display page and think that AnyBlock provides a lot of effects processing and rendering is the content of this plugin. But t..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]]},"git":{},"readingTime":{"minutes":6.8,"words":2041},"filePathRelative":"MdNote_Public/ProductDoc/AnyBlock/docs/en/03. Selector.md","excerpt":"\\n<p>Many people see the dazzling effects of the display page and think that AnyBlock provides a lot of effects processing and rendering is the content of this plugin.</p>\\n<p>But that's not the essence of AnyBlock. The essence of <code>AnyBlock</code>, as the name suggests, is to pick any range and turn it into a block.</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[{"title":"ProductDoc/","link":"MdNote_Public/ProductDoc/AnyBlock/README.html"},{"title":"README.show","link":"MdNote_Public/ProductDoc/AnyBlock/README.show.html"}],"localMap":{"nodes":[{"id":"MdNote_Public/ProductDoc/AnyBlock/docs/en/03. Selector.md","value":{"title":"03. Selector","path":"MdNote_Public/ProductDoc/AnyBlock/docs/en/03. Selector.md","outlink":[],"backlink":["MdNote_Public/ProductDoc/AnyBlock/README.md","MdNote_Public/ProductDoc/AnyBlock/README.show.md"]}},{"id":"MdNote_Public/ProductDoc/AnyBlock/README.md","value":{"title":"ProductDoc/","path":"MdNote_Public/ProductDoc/AnyBlock/README.md","outlink":[],"backlink":[]}},{"id":"MdNote_Public/ProductDoc/AnyBlock/README.show.md","value":{"title":"README.show","path":"MdNote_Public/ProductDoc/AnyBlock/README.show.md","outlink":[],"backlink":[]}}],"links":[{"source":"MdNote_Public/ProductDoc/AnyBlock/README.md","target":"MdNote_Public/ProductDoc/AnyBlock/docs/en/03. Selector.md"},{"source":"MdNote_Public/ProductDoc/AnyBlock/README.show.md","target":"MdNote_Public/ProductDoc/AnyBlock/docs/en/03. Selector.md"}]}}}`);export{y as comp,B as data};

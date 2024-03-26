import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as r,c as o,b as e,e as n,d as t,a as l}from"./app-CyJMR3JQ.js";const d={},c=l('<h1 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown"><span>Markdown</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="plantuml-by-gravize" tabindex="-1"><a class="header-anchor" href="#plantuml-by-gravize"><span>plantUML by Gravize</span></a></h1><p>参考：</p>',4),p={href:"https://blog.csdn.net/Honnyee/article/details/115243923",target:"_blank",rel:"noopener noreferrer"},u={href:"http://www.gravizo.com/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://plantuml.com/zh/",target:"_blank",rel:"noopener noreferrer"},h={href:"http://www.plantuml.com/plantuml/uml/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000",target:"_blank",rel:"noopener noreferrer"},v=l(`<h2 id="教程" tabindex="-1"><a class="header-anchor" href="#教程"><span>教程</span></a></h2><p>教程看plantuml官网文档就行</p><h2 id="uml" tabindex="-1"><a class="header-anchor" href="#uml"><span>UML</span></a></h2><ul><li>很多程序员采用UML（Unified Modeling Language，统一建模语言）绘制类图，用来描述类之间的关系。 <ul><li>![img](plantUML by Gravizo.assets/01905.jpeg)</li></ul></li></ul><h2 id="gravize引擎渲染实战" tabindex="-1"><a class="header-anchor" href="#gravize引擎渲染实战"><span>Gravize引擎渲染实战</span></a></h2><h3 id="流程图" tabindex="-1"><a class="header-anchor" href="#流程图"><span>流程图</span></a></h3><p>内部的写法和plantuml写法不一致</p><p><img src="https://g.gravizo.com/svg?
@startuml;
(*) --&gt; if &quot;Some Test&quot; then;
  --&gt;[true] &quot;activity 1&quot;;
  if &quot;&quot; then;
    -&gt; &quot;activity 3&quot; as a3;
  else;
    if &quot;Other test&quot; then;
      -left-&gt; &quot;activity 5&quot;;
    else;
      --&gt; &quot;activity 6&quot;;
    endif;
  endif;
else;
  -&gt;[false] &quot;activity 2&quot;;
endif;
a3 --&gt; if &quot;last test&quot; then;
  --&gt; &quot;activity 7&quot;;
else;
  -&gt; &quot;activity 8&quot;;
endif;
@enduml"></p><h3 id="时序图" tabindex="-1"><a class="header-anchor" href="#时序图"><span>时序图</span></a></h3><p>内部的写法和plantuml写法不一致</p><p><img src="https://g.gravizo.com/svg?
@startuml;
actor User;
participant &quot;First Class&quot; as A;
participant &quot;Second Class&quot; as B;
participant &quot;Last Class&quot; as C;
User -&gt; A: DoWork;
activate A;
A -&gt; B: Create Request;
activate B;
B -&gt; C: DoWork;
activate C;
C --&gt; B: WorkDone;
destroy C;
B --&gt; A: Request Created;
deactivate B;
A --&gt; User: Done;
deactivate A;
@enduml"></p><h3 id="类图" tabindex="-1"><a class="header-anchor" href="#类图"><span>类图</span></a></h3><h4 id="踩坑-不能加载左尖括号" tabindex="-1"><a class="header-anchor" href="#踩坑-不能加载左尖括号"><span>踩坑：不能加载左尖括号</span></a></h4><p>无法被认为是img：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;img src=&#39;https://g.gravizo.com/svg?
@startuml;
Class01 &lt;|-- Class02;
@enduml
&#39;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>encode：能认为是img，但是无法解析</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;img src=&#39;https://g.gravizo.com/svg?
%40startuml%3B%0AClass01%20%3C%7C--%20Class02%3B%0A%40enduml
&#39;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>没有左尖括号的都能顺利打</p><p>最终解决方法：在官网发现了有替代写法</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>用
Class29 ^-- Class30;
代替
Class29 &lt;|-- Class30;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://g.gravizo.com/svg?
@startuml;
Class03*-- Class04;
Class05 o-- Class06;
Class07 .. Class08;
Class09 -- Class10;
Class21 %23-- Class22;
Class23 x-- Class24;
Class25 }-- Class26;
Class27 +-- Class28;
Class29 ^-- Class30;@enduml"></p><h3 id="思维导图" tabindex="-1"><a class="header-anchor" href="#思维导图"><span>思维导图</span></a></h3><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h2><p>上面的写法中，每个语句后面要接上 <code>;</code> ，否则会解析失败。报错no @startuml</p><p>后来在github上找到了原因：https://github.com/TLmaK0/gravizo/issues/50 这里的<code>;</code>，相当于一个回车断句</p><div class="language-plantuml line-numbers-mode" data-ext="plantuml" data-title="plantuml"><pre class="language-plantuml"><code><span class="token delimiter punctuation">@startuml</span><span class="token punctuation">;</span>
Class03<span class="token arrow operator">*--</span> Class04<span class="token punctuation">;</span>
Class05 <span class="token arrow operator">o--</span> Class06<span class="token punctuation">;</span>
Class07 .. Class08<span class="token punctuation">;</span>
Class09 -- Class10<span class="token punctuation">;</span>
<span class="token delimiter punctuation">@enduml</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26);function g(b,C){const a=i("ExternalLinkIcon");return r(),o("div",null,[c,e("ul",null,[e("li",null,[e("a",p,[n("【CSDN】Markdown中使用plantuml的探索"),t(a)])]),e("li",null,[e("a",u,[n("Gravizo官网"),t(a)])]),e("li",null,[e("a",m,[n("plantuml官网文档"),t(a)])]),e("li",null,[e("a",h,[n("plantuml官网在线"),t(a)])])]),v])}const y=s(d,[["render",g],["__file","plantUML by Gravizo.html.vue"]]),x=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Doc/Note%20Analysis/plantUML%20by%20Gravizo.html","title":"Markdown","lang":"zh-CN","frontmatter":{"description":"Markdown 目录 plantUML by Gravize 参考： 【CSDN】Markdown中使用plantuml的探索 Gravizo官网 plantuml官网文档 plantuml官网在线 教程 教程看plantuml官网文档就行 UML 很多程序员采用UML（Unified Modeling Language，统一建模语言）绘制类图，用来...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Doc/Note%20Analysis/plantUML%20by%20Gravizo.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Markdown"}],["meta",{"property":"og:description","content":"Markdown 目录 plantUML by Gravize 参考： 【CSDN】Markdown中使用plantuml的探索 Gravizo官网 plantuml官网文档 plantuml官网在线 教程 教程看plantuml官网文档就行 UML 很多程序员采用UML（Unified Modeling Language，统一建模语言）绘制类图，用来..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Markdown\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"Markdown","slug":"markdown","link":"#markdown","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"plantUML by Gravize","slug":"plantuml-by-gravize","link":"#plantuml-by-gravize","children":[{"level":2,"title":"教程","slug":"教程","link":"#教程","children":[]},{"level":2,"title":"UML","slug":"uml","link":"#uml","children":[]},{"level":2,"title":"Gravize引擎渲染实战","slug":"gravize引擎渲染实战","link":"#gravize引擎渲染实战","children":[{"level":3,"title":"流程图","slug":"流程图","link":"#流程图","children":[]},{"level":3,"title":"时序图","slug":"时序图","link":"#时序图","children":[]},{"level":3,"title":"类图","slug":"类图","link":"#类图","children":[{"level":4,"title":"踩坑：不能加载左尖括号","slug":"踩坑-不能加载左尖括号","link":"#踩坑-不能加载左尖括号","children":[]}]},{"level":3,"title":"思维导图","slug":"思维导图","link":"#思维导图","children":[]}]},{"level":2,"title":"注意","slug":"注意","link":"#注意","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.37,"words":412},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Doc/Note Analysis/plantUML by Gravizo.md","autoDesc":true}');export{y as comp,x as data};

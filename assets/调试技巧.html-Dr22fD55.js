import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,e as i}from"./app-BZVBD2QZ.js";const l="/assets/image-20240803212117389-Bhb4hh72.png",s={},a=i('<h1 id="调试技巧" tabindex="-1"><a class="header-anchor" href="#调试技巧"><span>调试技巧</span></a></h1><h2 id="debugger语句" tabindex="-1"><a class="header-anchor" href="#debugger语句"><span>debugger语句</span></a></h2><p>这是我有一次访问网页时发现的：</p><p>https://plantuml.github.io/plantuml.js/</p><figure><img src="'+l+`" alt="image-20240803212117389" tabindex="0" loading="lazy"><figcaption>image-20240803212117389</figcaption></figure><p>复现，输入：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@startuml
skinparam rectangle&lt;&lt;behavior&gt;&gt; {
	roundCorner 25
}

AA1 *-down- AA2
AA1 -right-&gt;&gt; AA4
AA2 -right-&gt;&gt; AA3
AA3 -up-&gt;&gt; AA4

rectangle &quot;Handle claim&quot;  as HC &lt;&lt;$bProcess&gt;&gt;&lt;&lt;behavior&gt;&gt; #Business
rectangle &quot;Capture Information&quot;  as CI &lt;&lt;$bProcess&gt;&gt;&lt;&lt;behavior&gt;&gt; #Business
rectangle &quot;Notify\\nAdditional Stakeholders&quot; as NAS &lt;&lt;$bProcess&gt;&gt;&lt;&lt;behavior&gt;&gt; #Business
rectangle &quot;Validate&quot; as V &lt;&lt;$bProcess&gt;&gt;&lt;&lt;behavior&gt;&gt; #Business
rectangle &quot;Investigate&quot; as I &lt;&lt;$bProcess&gt;&gt;&lt;&lt;behavior&gt;&gt; #Business
rectangle &quot;Pay&quot; as P &lt;&lt;$bProcess&gt;&gt;&lt;&lt;behavior&gt;&gt; #Business

HC *-down- CI
HC *-down- NAS
HC *-down- V
HC *-down- I
HC *-down- P

CI -right-&gt;&gt; NAS
NAS -right-&gt;&gt; V
V -right-&gt;&gt; I
I -right-&gt;&gt; P


scanning -up-&gt; CI
customerAdministration  -up-&gt; CI
claimsAdministration -up-&gt; NAS
claimsAdministration -up-&gt; V
claimsAdministration -up-&gt; I
Payment -up-&gt; P

Printing -up-&gt; V
Printing -up-&gt; P
@enduml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),r=[a];function g(d,o){return e(),n("div",null,r)}const m=t(s,[["render",g],["__file","调试技巧.html.vue"]]),v=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Web/01.%20%E5%89%8D%E7%AB%AF%E4%B8%89%E4%BB%B6%E5%A5%97/03.1%20JavaScript/%E8%B0%83%E8%AF%95%E6%8A%80%E5%B7%A7.html","title":"调试技巧","lang":"zh-CN","frontmatter":{"description":"调试技巧 debugger语句 这是我有一次访问网页时发现的： https://plantuml.github.io/plantuml.js/ image-20240803212117389image-20240803212117389 复现，输入：","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Web/01.%20%E5%89%8D%E7%AB%AF%E4%B8%89%E4%BB%B6%E5%A5%97/03.1%20JavaScript/%E8%B0%83%E8%AF%95%E6%8A%80%E5%B7%A7.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"调试技巧"}],["meta",{"property":"og:description","content":"调试技巧 debugger语句 这是我有一次访问网页时发现的： https://plantuml.github.io/plantuml.js/ image-20240803212117389image-20240803212117389 复现，输入："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"调试技巧\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"调试技巧","slug":"调试技巧","link":"#调试技巧","children":[{"level":2,"title":"debugger语句","slug":"debugger语句","link":"#debugger语句","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.5,"words":151},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Platform/Web/01. 前端三件套/03.1 JavaScript/调试技巧.md","excerpt":"\\n<h2>debugger语句</h2>\\n<p>这是我有一次访问网页时发现的：</p>\\n<p>https://plantuml.github.io/plantuml.js/</p>\\n<figure><figcaption>image-20240803212117389</figcaption></figure>\\n<p>复现，输入：</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>@startuml\\nskinparam rectangle&lt;&lt;behavior&gt;&gt; {\\n\\troundCorner 25\\n}\\n\\nAA1 *-down- AA2\\nAA1 -right-&gt;&gt; AA4\\nAA2 -right-&gt;&gt; AA3\\nAA3 -up-&gt;&gt; AA4\\n\\nrectangle \\"Handle claim\\"  as HC &lt;&lt;$bProcess&gt;&gt;&lt;&lt;behavior&gt;&gt; #Business\\nrectangle \\"Capture Information\\"  as CI &lt;&lt;$bProcess&gt;&gt;&lt;&lt;behavior&gt;&gt; #Business\\nrectangle \\"Notify\\\\nAdditional Stakeholders\\" as NAS &lt;&lt;$bProcess&gt;&gt;&lt;&lt;behavior&gt;&gt; #Business\\nrectangle \\"Validate\\" as V &lt;&lt;$bProcess&gt;&gt;&lt;&lt;behavior&gt;&gt; #Business\\nrectangle \\"Investigate\\" as I &lt;&lt;$bProcess&gt;&gt;&lt;&lt;behavior&gt;&gt; #Business\\nrectangle \\"Pay\\" as P &lt;&lt;$bProcess&gt;&gt;&lt;&lt;behavior&gt;&gt; #Business\\n\\nHC *-down- CI\\nHC *-down- NAS\\nHC *-down- V\\nHC *-down- I\\nHC *-down- P\\n\\nCI -right-&gt;&gt; NAS\\nNAS -right-&gt;&gt; V\\nV -right-&gt;&gt; I\\nI -right-&gt;&gt; P\\n\\n\\nscanning -up-&gt; CI\\ncustomerAdministration  -up-&gt; CI\\nclaimsAdministration -up-&gt; NAS\\nclaimsAdministration -up-&gt; V\\nclaimsAdministration -up-&gt; I\\nPayment -up-&gt; P\\n\\nPrinting -up-&gt; V\\nPrinting -up-&gt; P\\n@enduml\\n</code></pre></div>","autoDesc":true}');export{m as comp,v as data};

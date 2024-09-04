import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,e as i}from"./app-D3nI0jiY.js";const d={},r=i(`<h1 id="图标节点替换" tabindex="-1"><a class="header-anchor" href="#图标节点替换"><span>图标节点替换</span></a></h1><h2 id="图表节点对-markdown-的支持" tabindex="-1"><a class="header-anchor" href="#图表节点对-markdown-的支持"><span>图表节点对 markdown 的支持</span></a></h2><p>在ob中，大部分的思维导图到借助第三方库（mermaid/plantuml/markmap等）</p><p>其中，我们都知道，文字描述图表中，mermaid/plantuml，并不支持在节点中识别markdown并渲染，而像markmap这种则支持。</p><p>但markmap有个问题：虽说里面的节点可以是markdown内容，但他似乎没有 (不确定) 提供一个钩子函数，将渲染函数换成自定义的。也就是说他节点的markdown渲染是他库自己的渲染，而不是将这段markdown内容交给obsidian渲染，然后将ob渲染的结果拿回去并放在节点处。</p><p>例如ob的markdown渲染有所扩展，markdown节点是不具备这些扩展的。例如标签语法……显然不是标准的markdown语法，所以在这里就没办法正常渲染出来</p><h2 id="mehrmaid" tabindex="-1"><a class="header-anchor" href="#mehrmaid"><span>Mehrmaid</span></a></h2><p>Mehrmaid 是 Obsidian 的一款插件，基于mermaid，但是可以把 mermaid 中的节点替换成obsidian的渲染结果。这是一种不错的思路，可以在markdown软件中，将节点扩展为原软件的渲染效果</p><p>其语法：</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">mehrmaid</span>
<span class="token code-block language-mehrmaid language-mehrmaid language-mehrmaid language-mehrmaid language-mehrmaid">flowchart LR
A --&gt; B &amp; C --&gt; D --&gt; E --&gt; F &amp; G
G --&gt; F
A[&quot;![[logo.png|100]]&quot;]
B(&quot;![[logo-old.png|100]]&quot;)
C(&quot;[[thisisalink]]&quot;)
D(&quot;$f(x)=\\sum_i^\\inf x^i$&quot;)
E(&quot;**Caption**
1. **Bold**
2. *Italic*
3. ==Marker==
- [ ] Point
---
Different Section&quot;)
F(&quot;#uni&quot;)
G((&quot;$\\dfrac{2}{\\pi}+2$&quot;))</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">mehrmaid</span>
<span class="token code-block language-mehrmaid language-mehrmaid language-mehrmaid language-mehrmaid language-mehrmaid">flowchart LR
A --&gt; C
B --&gt; D
C &amp; D --&gt; E
E --&gt; F &amp; G
F --&gt; H
G --&gt; J
subgraph X [&quot;$X$&quot;]
A((&quot;$A$&quot;))
end
subgraph id1 [&quot;$Y$&quot;]
G((&quot;$G$&quot;))
end
subgraph id3 [&quot;$Z$&quot;]
E((&quot;$E$&quot;))
end
C((&quot;$C$&quot;))
D((&quot;$D$&quot;))
F((&quot;$F$&quot;))
B((&quot;$B$&quot;))
H((&quot;$H$&quot;))
J((&quot;$J$&quot;))</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),t=[r];function l(m,s){return e(),a("div",null,t)}const c=n(d,[["render",l],["__file","节点替换.html.vue"]]),p=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Type/Doc/MarkdwonAbout/02.%20Parse%20and%20Render/%E6%96%87%E5%AD%97%E6%8F%8F%E8%BF%B0%E5%9B%BE%E8%A1%A8/%E8%8A%82%E7%82%B9%E6%9B%BF%E6%8D%A2.html","title":"图标节点替换","lang":"zh-CN","frontmatter":{"description":"图标节点替换 图表节点对 markdown 的支持 在ob中，大部分的思维导图到借助第三方库（mermaid/plantuml/markmap等） 其中，我们都知道，文字描述图表中，mermaid/plantuml，并不支持在节点中识别markdown并渲染，而像markmap这种则支持。 但markmap有个问题：虽说里面的节点可以是markdown...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Type/Doc/MarkdwonAbout/02.%20Parse%20and%20Render/%E6%96%87%E5%AD%97%E6%8F%8F%E8%BF%B0%E5%9B%BE%E8%A1%A8/%E8%8A%82%E7%82%B9%E6%9B%BF%E6%8D%A2.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"图标节点替换"}],["meta",{"property":"og:description","content":"图标节点替换 图表节点对 markdown 的支持 在ob中，大部分的思维导图到借助第三方库（mermaid/plantuml/markmap等） 其中，我们都知道，文字描述图表中，mermaid/plantuml，并不支持在节点中识别markdown并渲染，而像markmap这种则支持。 但markmap有个问题：虽说里面的节点可以是markdown..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"图标节点替换\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"图标节点替换","slug":"图标节点替换","link":"#图标节点替换","children":[{"level":2,"title":"图表节点对 markdown 的支持","slug":"图表节点对-markdown-的支持","link":"#图表节点对-markdown-的支持","children":[]},{"level":2,"title":"Mehrmaid","slug":"mehrmaid","link":"#mehrmaid","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.28,"words":383},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Type/Doc/MarkdwonAbout/02. Parse and Render/文字描述图表/节点替换.md","excerpt":"\\n<h2>图表节点对 markdown 的支持</h2>\\n<p>在ob中，大部分的思维导图到借助第三方库（mermaid/plantuml/markmap等）</p>\\n<p>其中，我们都知道，文字描述图表中，mermaid/plantuml，并不支持在节点中识别markdown并渲染，而像markmap这种则支持。</p>\\n<p>但markmap有个问题：虽说里面的节点可以是markdown内容，但他似乎没有 (不确定) 提供一个钩子函数，将渲染函数换成自定义的。也就是说他节点的markdown渲染是他库自己的渲染，而不是将这段markdown内容交给obsidian渲染，然后将ob渲染的结果拿回去并放在节点处。</p>","autoDesc":true}');export{c as comp,p as data};

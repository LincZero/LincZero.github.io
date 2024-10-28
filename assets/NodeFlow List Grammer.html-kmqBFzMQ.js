import{_ as o,c as i,e as s,d as t,a,o as l,r as d}from"./app-DEbg6qWK.js";const p={};function c(u,n){const e=d("VueFlow");return l(),i("div",null,[n[0]||(n[0]=s(`<h1 id="nodeflow-列表语法" tabindex="-1"><a class="header-anchor" href="#nodeflow-列表语法"><span>NodeFlow 列表语法</span></a></h1><h2 id="一种基于markdown列表的便于输入的节点描述语法" tabindex="-1"><a class="header-anchor" href="#一种基于markdown列表的便于输入的节点描述语法"><span>一种基于Markdown列表的便于输入的节点描述语法</span></a></h2><p>新增一种能手写的格式，说真的有时设计语法比开发成就感还强……大家讨论讨论语法，看有没有什么可以优化的地方</p><ol><li>该语法可以和AnyBlock插件配合，从列表进行声明</li><li>参考了：JSON、JSONL、YAML、Mermaid/Mehrmaid 流程图语法</li></ol><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>[code(nodeflow-list)]

<span class="token list punctuation">-</span> nodes
  <span class="token list punctuation">-</span> node1:重名测试
    <span class="token list punctuation">-</span> o1:重名测试, output
    <span class="token list punctuation">-</span> o2:重名测试, output
  <span class="token list punctuation">-</span> node2:重名测试
    <span class="token list punctuation">-</span> i, input
    <span class="token list punctuation">-</span> o, output
    <span class="token list punctuation">-</span> v, value
  <span class="token list punctuation">-</span> Group1
    <span class="token list punctuation">-</span> node3
      <span class="token list punctuation">-</span> i, input
      <span class="token list punctuation">-</span> i2, input
    <span class="token list punctuation">-</span> node4
<span class="token list punctuation">-</span> edges
  <span class="token list punctuation">-</span> node1,o1, node2,i
  <span class="token list punctuation">-</span> node2,o, node3,i
  <span class="token list punctuation">-</span> node2,o, node4,b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)),t(e,{type:"list",data:`
- nodes
  - node1:重名测试
    - o1:重名测试, output
    - o2:重名测试, output
  - node2:重名测试
    - i, input
    - o, output
    - v, value
  - Group1
    - node3
      - i, input
      - i2, input
    - node4
- edges
  - node1,o1, node2,i
  - node2,o, node3,i
  - node2,o, node4,b
`}),n[1]||(n[1]=s('<h3 id="通用规则" tabindex="-1"><a class="header-anchor" href="#通用规则"><span>通用规则</span></a></h3><ol><li><strong>一行一个项</strong>，“项” 有四种：节点、节点上I/O Socket或属性项、线、节点组，他们的声明方式： <ul><li>节点/组：<code>id:name, type</code>，不写冒号表示id和节点名是一样的，type可以不写，默认为 &quot;node&quot;</li><li>socket：<code>id:name, type</code>，type为input/output表述输入或输出节点，value表示节点的内部属性</li><li>线：从哪个节点id，的哪个socket id，到哪个节点id，的哪个socket id</li></ul></li><li>缩进关系表示包含关系。例如节点组可以包含节点，节点可以包含节点组</li></ol><h3 id="特殊规则-进阶" tabindex="-1"><a class="header-anchor" href="#特殊规则-进阶"><span>特殊规则 (进阶)</span></a></h3><ol><li>最外层是两个特殊组，nodes和edges，固定的。 <ul><li>当然，有一个写法变形可以去掉最外层，用如果该项有四个参数就是edges组，否则则为nodes组，但我觉得虽然能写少了，但可能更容易造成混乱？待定</li></ul></li><li>当不声明节点socket时，会默认声明四个隐藏节点：left、right、top、bottom</li></ol><h2 id="超简化" tabindex="-1"><a class="header-anchor" href="#超简化"><span>超简化</span></a></h2>',5)),t(e,{type:"list",data:`
- nodes
  - GroupA
    - a1
    - a2
  - b
  - GroupC
    - GroupC1
      - c11
  - d
- edges
  - a1,r, b,l
  - a1,r, c11,l
  - a1,r, d,l
`}),n[2]||(n[2]=a("h2",{id:"实际用例参考",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#实际用例参考"},[a("span",null,"实际用例参考")])],-1)),t(e,{type:"list",data:`- nodes
  - node1: KSample
    - Latent, o
    - model, i
    - positive, v
    - negative, v
    - Latent_image, v
    - seed, v
    - control_after_generate, v
    - steps , v
    - CFG, v
    - sampler_name, v
    - scheduler, v
    - denoise, v
  - node2: KSample
    - 潜空间, 0
    - 模型, i
    - 正面条件, v
    - 负面条件, v
    - 潜空间, v
    - 种子, v
    - 运行后操作, v
    - 步数, v
    - CFG, v
    - 采样器/采样方法, v
    - 调度器, v
    - 降噪, v
  - 翻译
- edges
  - node1,Latent, 翻译,l
  - 翻译,r, node2,模型
`})])}const m=o(p,[["render",c],["__file","NodeFlow List Grammer.html.vue"]]),v=JSON.parse('{"path":"/MdNote_Public/ProductDoc/Plugin/NodeFlow/docs/zh/NodeFlow%20List%20Grammer.html","title":"NodeFlow 列表语法","lang":"zh-CN","frontmatter":{"description":"NodeFlow 列表语法 一种基于Markdown列表的便于输入的节点描述语法 新增一种能手写的格式，说真的有时设计语法比开发成就感还强……大家讨论讨论语法，看有没有什么可以优化的地方 该语法可以和AnyBlock插件配合，从列表进行声明 参考了：JSON、JSONL、YAML、Mermaid/Mehrmaid 流程图语法 示例","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/ProductDoc/Plugin/NodeFlow/docs/zh/NodeFlow%20List%20Grammer.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"NodeFlow 列表语法"}],["meta",{"property":"og:description","content":"NodeFlow 列表语法 一种基于Markdown列表的便于输入的节点描述语法 新增一种能手写的格式，说真的有时设计语法比开发成就感还强……大家讨论讨论语法，看有没有什么可以优化的地方 该语法可以和AnyBlock插件配合，从列表进行声明 参考了：JSON、JSONL、YAML、Mermaid/Mehrmaid 流程图语法 示例"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NodeFlow 列表语法\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"NodeFlow 列表语法","slug":"nodeflow-列表语法","link":"#nodeflow-列表语法","children":[{"level":2,"title":"一种基于Markdown列表的便于输入的节点描述语法","slug":"一种基于markdown列表的便于输入的节点描述语法","link":"#一种基于markdown列表的便于输入的节点描述语法","children":[{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":3,"title":"通用规则","slug":"通用规则","link":"#通用规则","children":[]},{"level":3,"title":"特殊规则 (进阶)","slug":"特殊规则-进阶","link":"#特殊规则-进阶","children":[]}]},{"level":2,"title":"超简化","slug":"超简化","link":"#超简化","children":[]},{"level":2,"title":"实际用例参考","slug":"实际用例参考","link":"#实际用例参考","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.97,"words":590},"filePathRelative":"MdNote_Public/ProductDoc/Plugin/NodeFlow/docs/zh/NodeFlow List Grammer.md","excerpt":"\\n<h2>一种基于Markdown列表的便于输入的节点描述语法</h2>\\n<p>新增一种能手写的格式，说真的有时设计语法比开发成就感还强……大家讨论讨论语法，看有没有什么可以优化的地方</p>\\n<ol>\\n<li>该语法可以和AnyBlock插件配合，从列表进行声明</li>\\n<li>参考了：JSON、JSONL、YAML、Mermaid/Mehrmaid 流程图语法</li>\\n</ol>\\n<h3>示例</h3>\\n<div class=\\"language-markdown\\" data-ext=\\"md\\" data-title=\\"md\\"><pre class=\\"language-markdown\\"><code>[code(nodeflow-list)]\\n\\n<span class=\\"token list punctuation\\">-</span> nodes\\n  <span class=\\"token list punctuation\\">-</span> node1:重名测试\\n    <span class=\\"token list punctuation\\">-</span> o1:重名测试, output\\n    <span class=\\"token list punctuation\\">-</span> o2:重名测试, output\\n  <span class=\\"token list punctuation\\">-</span> node2:重名测试\\n    <span class=\\"token list punctuation\\">-</span> i, input\\n    <span class=\\"token list punctuation\\">-</span> o, output\\n    <span class=\\"token list punctuation\\">-</span> v, value\\n  <span class=\\"token list punctuation\\">-</span> Group1\\n    <span class=\\"token list punctuation\\">-</span> node3\\n      <span class=\\"token list punctuation\\">-</span> i, input\\n      <span class=\\"token list punctuation\\">-</span> i2, input\\n    <span class=\\"token list punctuation\\">-</span> node4\\n<span class=\\"token list punctuation\\">-</span> edges\\n  <span class=\\"token list punctuation\\">-</span> node1,o1, node2,i\\n  <span class=\\"token list punctuation\\">-</span> node2,o, node3,i\\n  <span class=\\"token list punctuation\\">-</span> node2,o, node4,b\\n</code></pre></div>","autoDesc":true}');export{m as comp,v as data};

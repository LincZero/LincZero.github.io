import{_ as u,c as m,e as r,b as a,w as i,a as e,r as c,o as v,d as l}from"./app-B5WLeZKp.js";const p={};function b(g,n){const t=c("VueFlow"),d=c("Tabs");return v(),m("div",null,[n[6]||(n[6]=r('<h1 id="nodeflow-列表语法" tabindex="-1"><a class="header-anchor" href="#nodeflow-列表语法"><span>NodeFlow 列表语法</span></a></h1><h2 id="一种基于markdown列表的便于输入的节点描述语法" tabindex="-1"><a class="header-anchor" href="#一种基于markdown列表的便于输入的节点描述语法"><span>一种基于Markdown列表的便于输入的节点描述语法</span></a></h2><p>新增一种能手写的格式，说真的有时设计语法比开发成就感还强……大家讨论讨论语法，看有没有什么可以优化的地方</p><ol><li>该语法可以和AnyBlock插件配合，从列表进行声明</li><li>参考了：JSON、JSONL、YAML、Mermaid/Mehrmaid 流程图语法</li></ol><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3>',5)),a(d,{id:"24",data:[{id:"Plugin effect (插件效果)"},{id:"md source code (md源码)"}]},{title0:i(({value:o,isActive:s})=>n[0]||(n[0]=[l("Plugin effect (插件效果)")])),title1:i(({value:o,isActive:s})=>n[1]||(n[1]=[l("md source code (md源码)")])),tab0:i(({value:o,isActive:s})=>[a(t,{type:"nodeflow-list",data:`- nodes
  - Load Checkpoint
    - only name, i
    - i2, i, *i2
    - i3, i, mul line
      i3-2
      i3-3
    - i4, i, *i4
    - only name, o
    - o2, o, *o2
    - o3, o, *o3
    - o4, o, mul line
      o4-2
      o4-3
    - v2, v, *v2
    - v4, , mul line
      v4-2
      v4-3
    - v3, , *v3
    - only name, 
    - v5:, , only value
      v5-1
      v5-2
- edges
`})]),tab1:i(({value:o,isActive:s})=>n[2]||(n[2]=[e("div",{class:"language-markdown line-numbers-mode","data-ext":"md","data-title":"md"},[e("pre",{class:"language-markdown"},[e("code",null,[e("span",{class:"token code"},[e("span",{class:"token punctuation"},"```"),e("span",{class:"token code-language"},"nodeflow-list"),l(`
`),e("span",{class:"token code-block language-nodeflow-list language-nodeflow-list language-nodeflow-list"},`- nodes
  - Load Checkpoint
    - only name, i
    - i2, i, *i2
    - i3, i, mul line
      i3-2
      i3-3
    - i4, i, *i4
    - only name, o
    - o2, o, *o2
    - o3, o, *o3
    - o4, o, mul line
      o4-2
      o4-3
    - v2, v, *v2
    - v4, , mul line
      v4-2
      v4-3
    - v3, , *v3
    - only name, 
    - v5:, , only value
      v5-1
      v5-2
- edges`),l(`
`),e("span",{class:"token punctuation"},"```")]),l(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),_:1}),n[7]||(n[7]=r('<h3 id="通用规则" tabindex="-1"><a class="header-anchor" href="#通用规则"><span>通用规则</span></a></h3><ol><li><strong>一行一个项</strong>，“项” 有四种：节点、节点上I/O Socket或属性项、线、节点组，他们的声明方式： <ul><li>节点/组 <code>id(:name)?, ()=&quot;node&quot;</code> 不写冒号表示id和节点名是一样的，type可以不写，默认为 &quot;node&quot;</li><li>接口 <code>id(:name), (i|o|v|&quot;&quot;), (value)=&quot;&quot;</code> type为 <code>input</code>/<code>output </code>表述输入或输出接口，<code>value</code> 表示并非这两种之一属性</li><li>线条 <code>from, from socket, to, to socket, (name)?</code> 从哪个节点id，的哪个socket id，到哪个节点id，的哪个socket id</li></ul></li><li>缩进关系表示包含关系。例如节点组可以包含节点，节点可以包含节点组</li></ol><h3 id="特殊规则-进阶" tabindex="-1"><a class="header-anchor" href="#特殊规则-进阶"><span>特殊规则 (进阶)</span></a></h3><ol><li>最外层是两个特殊组，nodes和edges，固定的。 <ul><li>当然，有一个写法变形可以去掉最外层，用如果该项有四个参数就是edges组，否则则为nodes组，但我觉得虽然能写少了，但可能更容易造成混乱？待定</li></ul></li><li>当不声明节点socket时，会默认声明四个隐藏节点：left、right、top、bottom</li></ol><h2 id="超简化" tabindex="-1"><a class="header-anchor" href="#超简化"><span>超简化</span></a></h2>',5)),a(t,{type:"nodeflow-list",data:`
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
`}),n[8]||(n[8]=e("h2",{id:"实际用例参考",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#实际用例参考"},[e("span",null,"实际用例参考")])],-1)),a(d,{id:"93",data:[{id:"Plugin effect (插件效果)"},{id:"md source code (md源码)"}]},{title0:i(({value:o,isActive:s})=>n[3]||(n[3]=[l("Plugin effect (插件效果)")])),title1:i(({value:o,isActive:s})=>n[4]||(n[4]=[l("md source code (md源码)")])),tab0:i(({value:o,isActive:s})=>[a(t,{type:"nodeflow-list",data:`- nodes
  - node1:KSample
    - Latent, o
    - model, i
    - positive, i
    - negative, i
    - Latent, i
    - seed,
    - control_after_generate,, randomize
    - steps,, 20
    - CFG,, 8.0
    - sampler_name,, euler
    - scheduler,, normal
    - denoise,, 1.00
    - io defaultTest, i , test
    - io defaultTest, o, test
    - t1:noValueTest,
    - t2:,, noKeyTest
      mul lines test
  - node2:KSample
    - 潜空间, o
    - 模型, i
    - 正面条件, i
    - 负面条件, i
    - 潜空间, i
    - 种子,
    - 运行后操作,
    - 步数,
    - CFG,
    - 采样器/采样方法,
    - 调度器,
    - 降噪,
  - translate
- edges
  - node1,Latent, translate,l
  - translate,r, node2, 潜空间
`})]),tab1:i(({value:o,isActive:s})=>n[5]||(n[5]=[e("div",{class:"language-markdown line-numbers-mode","data-ext":"md","data-title":"md"},[e("pre",{class:"language-markdown"},[e("code",null,[e("span",{class:"token code"},[e("span",{class:"token punctuation"},"```"),e("span",{class:"token code-language"},"nodeflow-list"),l(`
`),e("span",{class:"token code-block language-nodeflow-list language-nodeflow-list language-nodeflow-list"},`- nodes
  - node1:KSample
    - Latent, o
    - model, i
    - positive, i
    - negative, i
    - Latent, i
    - seed,
    - control_after_generate,, randomize
    - steps,, 20
    - CFG,, 8.0
    - sampler_name,, euler
    - scheduler,, normal
    - denoise,, 1.00
    - io defaultTest, i , test
    - io defaultTest, o, test
    - t1:noValueTest,
    - t2:,, noKeyTest
      mul lines test
  - node2:KSample
    - 潜空间, o
    - 模型, i
    - 正面条件, i
    - 负面条件, i
    - 潜空间, i
    - 种子,
    - 运行后操作,
    - 步数,
    - CFG,
    - 采样器/采样方法,
    - 调度器,
    - 降噪,
  - translate
- edges
  - node1,Latent, translate,l
  - translate,r, node2, 潜空间`),l(`
`),e("span",{class:"token punctuation"},"```")]),l(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),_:1})])}const k=u(p,[["render",b],["__file","NodeFlow List Grammer V2.html.vue"]]),f=JSON.parse('{"path":"/MdNote_Public/ProductDoc/Plugin/NodeFlow/docs/zh/NodeFlow%20List%20Grammer%20V2.html","title":"NodeFlow 列表语法","lang":"zh-CN","frontmatter":{"description":"NodeFlow 列表语法 一种基于Markdown列表的便于输入的节点描述语法 新增一种能手写的格式，说真的有时设计语法比开发成就感还强……大家讨论讨论语法，看有没有什么可以优化的地方 该语法可以和AnyBlock插件配合，从列表进行声明 参考了：JSON、JSONL、YAML、Mermaid/Mehrmaid 流程图语法 示例 通用规则 一行一个项...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/ProductDoc/Plugin/NodeFlow/docs/zh/NodeFlow%20List%20Grammer%20V2.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"NodeFlow 列表语法"}],["meta",{"property":"og:description","content":"NodeFlow 列表语法 一种基于Markdown列表的便于输入的节点描述语法 新增一种能手写的格式，说真的有时设计语法比开发成就感还强……大家讨论讨论语法，看有没有什么可以优化的地方 该语法可以和AnyBlock插件配合，从列表进行声明 参考了：JSON、JSONL、YAML、Mermaid/Mehrmaid 流程图语法 示例 通用规则 一行一个项..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NodeFlow 列表语法\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"NodeFlow 列表语法","slug":"nodeflow-列表语法","link":"#nodeflow-列表语法","children":[{"level":2,"title":"一种基于Markdown列表的便于输入的节点描述语法","slug":"一种基于markdown列表的便于输入的节点描述语法","link":"#一种基于markdown列表的便于输入的节点描述语法","children":[{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":3,"title":"通用规则","slug":"通用规则","link":"#通用规则","children":[]},{"level":3,"title":"特殊规则 (进阶)","slug":"特殊规则-进阶","link":"#特殊规则-进阶","children":[]}]},{"level":2,"title":"超简化","slug":"超简化","link":"#超简化","children":[]},{"level":2,"title":"实际用例参考","slug":"实际用例参考","link":"#实际用例参考","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.54,"words":762},"filePathRelative":"MdNote_Public/ProductDoc/Plugin/NodeFlow/docs/zh/NodeFlow List Grammer V2.md","excerpt":"\\n<h2>一种基于Markdown列表的便于输入的节点描述语法</h2>\\n<p>新增一种能手写的格式，说真的有时设计语法比开发成就感还强……大家讨论讨论语法，看有没有什么可以优化的地方</p>\\n<ol>\\n<li>该语法可以和AnyBlock插件配合，从列表进行声明</li>\\n<li>参考了：JSON、JSONL、YAML、Mermaid/Mehrmaid 流程图语法</li>\\n</ol>\\n<h3>示例</h3>\\n\\n<h3>通用规则</h3>\\n<ol>\\n<li><strong>一行一个项</strong>，“项” 有四种：节点、节点上I/O Socket或属性项、线、节点组，他们的声明方式：\\n<ul>\\n<li>节点/组 <code>id(:name)?, ()=\\"node\\"</code>\\n不写冒号表示id和节点名是一样的，type可以不写，默认为 \\"node\\"</li>\\n<li>接口 <code>id(:name), (i|o|v|\\"\\"), (value)=\\"\\"</code>\\ntype为 <code>input</code>/<code>output </code>表述输入或输出接口，<code>value</code> 表示并非这两种之一属性</li>\\n<li>线条 <code>from, from socket, to, to socket, (name)?</code>\\n从哪个节点id，的哪个socket id，到哪个节点id，的哪个socket id</li>\\n</ul>\\n</li>\\n<li>缩进关系表示包含关系。例如节点组可以包含节点，节点可以包含节点组</li>\\n</ol>","autoDesc":true}');export{k as comp,f as data};

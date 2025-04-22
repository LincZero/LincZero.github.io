import{_ as c,e as k,g as r,h as t,f as i,i as e,r as h,o as p,j as s}from"./app-eDc_laxf.js";const B={};function u(m,n){const d=h("VueFlow"),o=h("Tabs");return p(),k("div",null,[n[6]||(n[6]=r('<h1 id="nodeflow-列表语法" tabindex="-1"><a class="header-anchor" href="#nodeflow-列表语法"><span>NodeFlow 列表语法</span></a></h1><h2 id="介绍-一种基于markdown列表的便于输入的节点描述语法" tabindex="-1"><a class="header-anchor" href="#介绍-一种基于markdown列表的便于输入的节点描述语法"><span>介绍，一种基于Markdown列表的便于输入的节点描述语法</span></a></h2><p>新增一种能手写的格式，说真的有时设计语法比开发成就感还强……大家讨论讨论语法，看有没有什么可以优化的地方</p><ol><li>该语法可以和AnyBlock插件配合，从列表进行声明</li><li>参考了：JSON、JSONL、YAML、Mermaid/Mehrmaid 流程图语法</li></ol><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><h3 id="语法示例" tabindex="-1"><a class="header-anchor" href="#语法示例"><span>语法示例</span></a></h3>',6)),t(o,{id:"27",data:[{id:"Plugin effect (插件效果)"},{id:"md source code (md源码)"}]},{title0:e(({value:l,isActive:a})=>n[0]||(n[0]=[s("Plugin effect (插件效果)")])),title1:e(({value:l,isActive:a})=>n[1]||(n[1]=[s("md source code (md源码)")])),tab0:e(({value:l,isActive:a})=>[t(d,{type:"nodeflow-list",data:`- nodes
  - NodeTitle
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
`})]),tab1:e(({value:l,isActive:a})=>n[2]||(n[2]=[i("div",{class:"language-md line-numbers-mode","data-highlighter":"shiki","data-ext":"md","data-title":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```nodeflow-list")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"- nodes")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  - NodeTitle")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - only name, i")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - i2, i, *i2")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - i3, i, mul line")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"      i3-2")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"      i3-3")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - i4, i, *i4")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - only name, o")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - o2, o, *o2")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - o3, o, *o3")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - o4, o, mul line")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"      o4-2")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"      o4-3")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - v2, v, *v2")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - v4, , mul line")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"      v4-2")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"      v4-3")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - v3, , *v3")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - only name, ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - v5:, , only value")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"      v5-1")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"      v5-2")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"- edges")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1}),n[7]||(n[7]=i("h3",{id:"实际用例",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#实际用例"},[i("span",null,"实际用例")])],-1)),t(o,{id:"38",data:[{id:"Plugin effect (插件效果)"},{id:"md source code (md源码)"}]},{title0:e(({value:l,isActive:a})=>n[3]||(n[3]=[s("Plugin effect (插件效果)")])),title1:e(({value:l,isActive:a})=>n[4]||(n[4]=[s("md source code (md源码)")])),tab0:e(({value:l,isActive:a})=>[t(d,{type:"nodeflow-list",data:`- nodes
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
`})]),tab1:e(({value:l,isActive:a})=>n[5]||(n[5]=[i("div",{class:"language-md line-numbers-mode","data-highlighter":"shiki","data-ext":"md","data-title":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```nodeflow-list")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"- nodes")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  - node1:KSample")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - Latent, o")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - model, i")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - positive, i")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - negative, i")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - Latent, i")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - seed,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - control_after_generate,, randomize")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - steps,, 20")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - CFG,, 8.0")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - sampler_name,, euler")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - scheduler,, normal")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - denoise,, 1.00")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - io defaultTest, i , test")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - io defaultTest, o, test")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - t1:noValueTest,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - t2:,, noKeyTest")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"      mul lines test")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  - node2:KSample")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - 潜空间, o")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - 模型, i")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - 正面条件, i")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - 负面条件, i")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - 潜空间, i")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - 种子,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - 运行后操作,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - 步数,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - CFG,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - 采样器/采样方法,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - 调度器,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - 降噪,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  - translate")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"- edges")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  - node1,Latent, translate,l")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  - translate,r, node2, 潜空间")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1}),n[8]||(n[8]=i("h3",{id:"超简化",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#超简化"},[i("span",null,"超简化")])],-1)),t(d,{type:"nodeflow-list",data:`
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
`}),n[9]||(n[9]=r('<h2 id="语法规则" tabindex="-1"><a class="header-anchor" href="#语法规则"><span>语法规则</span></a></h2><h3 id="通用规则" tabindex="-1"><a class="header-anchor" href="#通用规则"><span>通用规则</span></a></h3><ol><li><strong>一行一个项</strong>，“项” 有四种：节点、节点上I/O Socket或属性项、线、节点组，他们的声明方式： <ul><li>节点/组 <code>id(:name)?, ()=&quot;node&quot;</code><br> 不写冒号表示id和节点名是一样的，type可以不写，默认为 &quot;node&quot;</li><li>接口 <code>id(:name), (i|o|v|&quot;&quot;), (value)=&quot;&quot;</code><br> type为 <code>input</code>/<code>output </code>表述输入或输出接口，<code>value</code> 表示并非这两种之一属性</li><li>线条 <code>from, from socket, to, to socket, (name)?</code><br> 从哪个节点id，的哪个socket id，到哪个节点id，的哪个socket id</li></ul></li><li>缩进关系表示包含关系。例如节点组可以包含节点，节点可以包含节点组</li></ol><h3 id="特殊规则-进阶" tabindex="-1"><a class="header-anchor" href="#特殊规则-进阶"><span>特殊规则 (进阶)</span></a></h3><ol><li>最外层是两个特殊组，nodes和edges，固定的。 <ul><li>当然，有一个写法变形可以去掉最外层，用如果该项有四个参数就是edges组，否则则为nodes组，但我觉得虽然能写少了，但可能更容易造成混乱？待定</li></ul></li><li>当不声明节点socket时，会默认声明四个隐藏节点：left、right、top、bottom</li></ol><h3 id="语法设计亮点" tabindex="-1"><a class="header-anchor" href="#语法设计亮点"><span>语法设计亮点</span></a></h3><ul><li>隐藏key值设计 <ul><li>传统k-v语法，必须声明key-value对，而省略key可以大幅简化语法。例如nodeflow listGrammer的key、name、type、value键都是隐藏的。<br> 这一设计参考了：变量命名中的可选变量、for语句中的三个位置、函数的形参设计</li></ul></li><li>缩进表示包含关系 <ul><li>这一设计参考了：python流程控制语句、yaml语法</li></ul></li><li>一项一行 <ul><li>这一设计参考了：JSONL</li></ul></li><li>列表式声明 <ul><li>对一项一行设计的补充，允许了一项包含多行文本的情况<br> 这一设计参考了：Markdown语法、Obsidian AnyBlock的list选择器用法</li></ul></li></ul><h3 id="命名规则" tabindex="-1"><a class="header-anchor" href="#命名规则"><span>命名规则</span></a></h3><ul><li>value可以是任意内容</li><li>id、name、socket传参类型、socket参值类型：不可以包含逗号</li></ul><h2 id="类型表" tabindex="-1"><a class="header-anchor" href="#类型表"><span>类型表</span></a></h2><ul><li>item类型 <ul><li>主动声明：node、socket、edge</li><li>自动声明：node可以有group类型</li></ul></li><li>socket类型 <ul><li>传参类型 (TransType)：i、o、fi、fo、v（默认为v，通过什么方式获取参数，获取参数的时机是什么，引用还是拷贝）</li><li>参值类型 (ValueType)：int、float、boolean、color、enum等（任意声明，默认使用id/name作为类型）</li></ul></li><li>node类型</li></ul><h3 id="运行socket" tabindex="-1"><a class="header-anchor" href="#运行socket"><span>运行socket</span></a></h3>',12))])}const v=c(B,[["render",u],["__file","NodeFlow List Grammer.html.vue"]]),g=JSON.parse('{"path":"/MdNote_Public/ProductDoc/Plugin/NodeFlow/docs/zh/NodeFlow%20List%20Grammer.html","title":"NodeFlow 列表语法","lang":"zh-CN","frontmatter":{"description":"NodeFlow 列表语法 介绍，一种基于Markdown列表的便于输入的节点描述语法 新增一种能手写的格式，说真的有时设计语法比开发成就感还强……大家讨论讨论语法，看有没有什么可以优化的地方 该语法可以和AnyBlock插件配合，从列表进行声明 参考了：JSON、JSONL、YAML、Mermaid/Mehrmaid 流程图语法 示例 语法示例 实际...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/ProductDoc/Plugin/NodeFlow/docs/zh/NodeFlow%20List%20Grammer.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"NodeFlow 列表语法"}],["meta",{"property":"og:description","content":"NodeFlow 列表语法 介绍，一种基于Markdown列表的便于输入的节点描述语法 新增一种能手写的格式，说真的有时设计语法比开发成就感还强……大家讨论讨论语法，看有没有什么可以优化的地方 该语法可以和AnyBlock插件配合，从列表进行声明 参考了：JSON、JSONL、YAML、Mermaid/Mehrmaid 流程图语法 示例 语法示例 实际..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NodeFlow 列表语法\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"git":{},"readingTime":{"minutes":3.55,"words":1066},"filePathRelative":"MdNote_Public/ProductDoc/Plugin/NodeFlow/docs/zh/NodeFlow List Grammer.md","excerpt":"\\n<h2>介绍，一种基于Markdown列表的便于输入的节点描述语法</h2>\\n<p>新增一种能手写的格式，说真的有时设计语法比开发成就感还强……大家讨论讨论语法，看有没有什么可以优化的地方</p>\\n<ol>\\n<li>该语法可以和AnyBlock插件配合，从列表进行声明</li>\\n<li>参考了：JSON、JSONL、YAML、Mermaid/Mehrmaid 流程图语法</li>\\n</ol>\\n<h2>示例</h2>\\n<h3>语法示例</h3>\\n\\n<h3>实际用例</h3>\\n\\n<h3>超简化</h3>\\n","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/ProductDoc/Plugin/NodeFlow/docs/zh/NodeFlow List Grammer.md","value":{"title":"NodeFlow List Grammer","path":"MdNote_Public/ProductDoc/Plugin/NodeFlow/docs/zh/NodeFlow List Grammer.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{v as comp,g as data};

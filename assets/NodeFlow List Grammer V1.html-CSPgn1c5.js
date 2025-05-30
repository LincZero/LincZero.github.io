import{_ as p,c as r,a as s,d as t,b as o,w as l,r as k,o as B,e as i}from"./app-CNQIT9r4.js";const c={};function A(u,n){const d=k("VueFlow"),h=k("Tabs");return B(),r("div",null,[n[6]||(n[6]=s("h1",{id:"nodeflow-列表语法",tabindex:"-1"},"NodeFlow 列表语法",-1)),n[7]||(n[7]=s("h2",{id:"一种基于markdown列表的便于输入的节点描述语法",tabindex:"-1"},"一种基于Markdown列表的便于输入的节点描述语法",-1)),n[8]||(n[8]=s("p",null,"新增一种能手写的格式，说真的有时设计语法比开发成就感还强……大家讨论讨论语法，看有没有什么可以优化的地方",-1)),n[9]||(n[9]=s("ol",null,[s("li",null,"该语法可以和AnyBlock插件配合，从列表进行声明"),s("li",null,"参考了：JSON、JSONL、YAML、Mermaid/Mehrmaid 流程图语法")],-1)),n[10]||(n[10]=s("h3",{id:"示例",tabindex:"-1"},"示例",-1)),t(h,{id:"24",data:[{id:"Plugin effect (插件效果)"},{id:"md source code (md源码)"}]},{title0:l(({value:e,isActive:a})=>n[0]||(n[0]=[i("Plugin effect (插件效果)")])),title1:l(({value:e,isActive:a})=>n[1]||(n[1]=[i("md source code (md源码)")])),tab0:l(({value:e,isActive:a})=>[t(d,{type:"nodeflow-list",data:`- nodes
  - node1: KSample
    - Latent, o
    - model, i
    - positive, i
    - negative, i
    - Latent, i
    - seed, v
    - control_after_generate, randomize:v
    - steps , 20:v
    - CFG, 8.0:v
    - sampler_name, euler:v
    - scheduler, normal:v
    - denoise, 1.00:v
    - io defaultTest, test:i
    - io defaultTest, test:o
    - t1:noValueTest, v
    - t2: , noKeyTest:v
  - node2: KSample
    - 潜空间, 0
    - 模型, i
    - 正面条件, i
    - 负面条件, i
    - 潜空间, i
    - 种子, v
    - 运行后操作, v
    - 步数, v
    - CFG, v
    - 采样器/采样方法, v
    - 调度器, v
    - 降噪, v
  - translate
- edges
  - node1,Latent, translate,l
  - translate,r, node2,模型
`})]),tab1:l(({value:e,isActive:a})=>n[2]||(n[2]=[s("div",{class:"language-md line-numbers-mode","data-highlighter":"shiki","data-ext":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```nodeflow-list")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"- nodes")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  - node1: KSample")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - Latent, o")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - model, i")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - positive, i")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - negative, i")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - Latent, i")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - seed, v")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - control_after_generate, randomize:v")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - steps , 20:v")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - CFG, 8.0:v")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - sampler_name, euler:v")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - scheduler, normal:v")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - denoise, 1.00:v")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - io defaultTest, test:i")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - io defaultTest, test:o")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - t1:noValueTest, v")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - t2: , noKeyTest:v")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  - node2: KSample")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - 潜空间, 0")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - 模型, i")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - 正面条件, i")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - 负面条件, i")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - 潜空间, i")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - 种子, v")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - 运行后操作, v")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - 步数, v")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - CFG, v")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - 采样器/采样方法, v")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - 调度器, v")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - 降噪, v")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  - translate")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"- edges")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  - node1,Latent, translate,l")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  - translate,r, node2,模型")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1}),t(h,{id:"32",data:[{id:"Plugin effect (插件效果)"},{id:"md source code (md源码)"}]},{title0:l(({value:e,isActive:a})=>n[3]||(n[3]=[i("Plugin effect (插件效果)")])),title1:l(({value:e,isActive:a})=>n[4]||(n[4]=[i("md source code (md源码)")])),tab0:l(({value:e,isActive:a})=>[t(d,{type:"nodeflow-list",data:`
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
`})]),tab1:l(({value:e,isActive:a})=>n[5]||(n[5]=[s("div",{class:"language-md line-numbers-mode","data-highlighter":"shiki","data-ext":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```nodeflow-list")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"- nodes")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  - node1:重名测试")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - o1:重名测试, output")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - o2:重名测试, output")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  - node2:重名测试")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - i, input")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - o, output")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - v, value")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  - Group1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - node3")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"      - i, input")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"      - i2, input")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    - node4")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"- edges")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  - node1,o1, node2,i")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  - node2,o, node3,i")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  - node2,o, node4,b")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"```")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1}),n[11]||(n[11]=o(`<h3 id="示例-结合anyblock" tabindex="-1">示例 - 结合anyblock</h3><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">code(nodeflow-list)</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nodes</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> node1:重名测试</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> o1:重名测试, output</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> o2:重名测试, output</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> node2:重名测试</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i, input</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> o, output</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> v, value</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Group1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> node3</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">      -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i, input</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">      -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i2, input</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> node4</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> edges</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> node1,o1, node2,i</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> node2,o, node3,i</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> node2,o, node4,b</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通用规则" tabindex="-1">通用规则</h3><ol><li><strong>一行一个项</strong>，“项” 有四种：节点、节点上I/O Socket或属性项、线、节点组，他们的声明方式： <ul><li>节点/组：<code>id:name, type</code>，不写冒号表示id和节点名是一样的，type可以不写，默认为 &quot;node&quot;</li><li>socket：<code>id:name, type</code>，type为input/output表述输入或输出节点，value表示节点的内部属性</li><li>线：从哪个节点id，的哪个socket id，到哪个节点id，的哪个socket id</li></ul></li><li>缩进关系表示包含关系。例如节点组可以包含节点，节点可以包含节点组</li></ol><h3 id="特殊规则-进阶" tabindex="-1">特殊规则 (进阶)</h3><ol><li>最外层是两个特殊组，nodes和edges，固定的。 <ul><li>当然，有一个写法变形可以去掉最外层，用如果该项有四个参数就是edges组，否则则为nodes组，但我觉得虽然能写少了，但可能更容易造成混乱？待定</li></ul></li><li>当不声明节点socket时，会默认声明四个隐藏节点：left、right、top、bottom</li></ol><h2 id="超简化" tabindex="-1">超简化</h2>`,7)),t(d,{type:"nodeflow-list",data:`
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
`}),n[12]||(n[12]=s("h2",{id:"实际用例参考",tabindex:"-1"},"实际用例参考",-1)),t(d,{type:"nodeflow-list",data:`- nodes
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
`})])}const g=p(c,[["render",A]]),m=JSON.parse('{"path":"/MdNote_Public/ProductDoc/Plugin/NodeFlow/docs/zh/NodeFlow%20List%20Grammer%20V1.html","title":"NodeFlow 列表语法","lang":"zh-CN","frontmatter":{"description":"NodeFlow 列表语法 一种基于Markdown列表的便于输入的节点描述语法 新增一种能手写的格式，说真的有时设计语法比开发成就感还强……大家讨论讨论语法，看有没有什么可以优化的地方 该语法可以和AnyBlock插件配合，从列表进行声明 参考了：JSON、JSONL、YAML、Mermaid/Mehrmaid 流程图语法 示例 示例 - 结合any...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NodeFlow 列表语法\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/ProductDoc/Plugin/NodeFlow/docs/zh/NodeFlow%20List%20Grammer%20V1.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"NodeFlow 列表语法"}],["meta",{"property":"og:description","content":"NodeFlow 列表语法 一种基于Markdown列表的便于输入的节点描述语法 新增一种能手写的格式，说真的有时设计语法比开发成就感还强……大家讨论讨论语法，看有没有什么可以优化的地方 该语法可以和AnyBlock插件配合，从列表进行声明 参考了：JSON、JSONL、YAML、Mermaid/Mehrmaid 流程图语法 示例 示例 - 结合any..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]]},"git":{},"readingTime":{"minutes":3.01,"words":904},"filePathRelative":"MdNote_Public/ProductDoc/Plugin/NodeFlow/docs/zh/NodeFlow List Grammer V1.md","excerpt":"\\n<h2>一种基于Markdown列表的便于输入的节点描述语法</h2>\\n<p>新增一种能手写的格式，说真的有时设计语法比开发成就感还强……大家讨论讨论语法，看有没有什么可以优化的地方</p>\\n<ol>\\n<li>该语法可以和AnyBlock插件配合，从列表进行声明</li>\\n<li>参考了：JSON、JSONL、YAML、Mermaid/Mehrmaid 流程图语法</li>\\n</ol>\\n<h3>示例</h3>\\n\\n\\n<h3>示例 - 结合anyblock</h3>\\n<div class=\\"language-md line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"md\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#986801;--shiki-dark:#ABB2BF\\">[</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">code(nodeflow-list)</span><span style=\\"--shiki-light:#986801;--shiki-dark:#ABB2BF\\">]</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">-</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> nodes</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">  -</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> node1:重名测试</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">    -</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> o1:重名测试, output</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">    -</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> o2:重名测试, output</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">  -</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> node2:重名测试</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">    -</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> i, input</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">    -</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> o, output</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">    -</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> v, value</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">  -</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> Group1</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">    -</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> node3</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">      -</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> i, input</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">      -</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> i2, input</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">    -</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> node4</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">-</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> edges</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">  -</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> node1,o1, node2,i</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">  -</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> node2,o, node3,i</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">  -</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> node2,o, node4,b</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/ProductDoc/Plugin/NodeFlow/docs/zh/NodeFlow List Grammer V1.md","value":{"title":"NodeFlow List Grammer V1","path":"MdNote_Public/ProductDoc/Plugin/NodeFlow/docs/zh/NodeFlow List Grammer V1.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{g as comp,m as data};

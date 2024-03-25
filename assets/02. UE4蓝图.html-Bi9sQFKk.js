import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,a as e}from"./app-DGJmjHtg.js";const t={},r=e(`<h1 id="基本操作——蓝图篇" tabindex="-1"><a class="header-anchor" href="#基本操作——蓝图篇"><span>基本操作——蓝图篇</span></a></h1><ul><li>简单自动开关门脚本</li></ul><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
<span class="token keyword">subgraph</span> a<span class="token text string">[时间轴]</span>
    a1<span class="token text string">[Play]</span>
    a2<span class="token text string">[Reverse]</span>
    a3<span class="token text string">[Updata]</span>
    a4<span class="token text string">[新建轨迹0]</span>
    <span class="token keyword">end</span>
<span class="token keyword">subgraph</span> b<span class="token text string">[SetActorRotation]</span>
	b1<span class="token text string">[第一项]</span>
	b2<span class="token text string">[目标]</span>
	b3<span class="token text string">[NewRotation-z]</span>
	<span class="token keyword">end</span>
OnActorBeginOverlap <span class="token arrow operator">--&gt;</span> a1
OnActorEndOverlao <span class="token arrow operator">--&gt;</span> a2
a3 <span class="token arrow operator">--&gt;</span> b1
SM_Door <span class="token arrow operator">--&gt;</span> b2
a4 <span class="token arrow operator">--&gt;</span> b3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建蓝图Actor实现（添加Box Collistion）</li></ul><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
<span class="token keyword">subgraph</span> a<span class="token text string">[时间轴]</span>
    a1<span class="token text string">[Play]</span>
    a2<span class="token text string">[Reverse]</span>
    a3<span class="token text string">[Updata]</span>
    a4<span class="token text string">[新建轨迹0]</span>
    <span class="token keyword">end</span>
<span class="token keyword">subgraph</span> b<span class="token text string">[SetRelativeRotation]</span>
	b1<span class="token text string">[第一项]</span>
	b2<span class="token text string">[目标]</span>
	b3<span class="token text string">[NewRotation-z]</span>
	<span class="token keyword">end</span>
OnComponentBeginOverlap <span class="token arrow operator">--&gt;</span> a1
OnComponentEndOverlao <span class="token arrow operator">--&gt;</span> a2
a3 <span class="token arrow operator">--&gt;</span> b1
SM_Door <span class="token arrow operator">--&gt;</span> b2
a4 <span class="token arrow operator">--&gt;</span> b3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>区别</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>SetActorRoration  整个
SetRelativeRotation  组件（相对坐标）
SetWordRotation  组件（时间坐标）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>按E开门</li></ul><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
<span class="token keyword">subgraph</span> a<span class="token text string">[时间轴]</span>
	a3<span class="token text string">[Updata]</span>
    a4<span class="token text string">[新建轨迹0]</span>
    a1<span class="token text string">[Play]</span>
    a2<span class="token text string">[Reverse]</span>
    
    <span class="token keyword">end</span>
<span class="token keyword">subgraph</span> b<span class="token text string">[SetRelativeRotation]</span>
	b2<span class="token text string">[目标]</span>
	b1<span class="token text string">[第一项]</span>
	b3<span class="token text string">[NewRotation-z]</span>
	<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> c<span class="token text string">[Gate]</span>
	c0<span class="token text string">[Enter]</span>
	c1<span class="token text string">[Open]</span>
	c2<span class="token text string">[close]</span>
	c3<span class="token text string">[Exit]</span>
	<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> d<span class="token text string">[Enable_Input]</span>
	d1<span class="token text string">[_]</span>
	d2<span class="token text string">[PlayerController]</span>
	<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> e<span class="token text string">[Enable_Input]</span>
	e1<span class="token text string">[_]</span>
	e2<span class="token text string">[PlayerController]</span>
	<span class="token keyword">end</span>	
E <span class="token arrow operator">--&gt;</span>c0
OnComponentBeginOverlap <span class="token arrow operator">--&gt;</span>d1 <span class="token arrow operator">--&gt;</span>c1
OnComponentEndOverlao <span class="token arrow operator">--&gt;</span>e1 <span class="token arrow operator">--&gt;</span>c2
GetPlayerController <span class="token arrow operator">--&gt;</span>d2
GetPlayerController <span class="token arrow operator">--&gt;</span>e2
c3 <span class="token arrow operator">--&gt;</span>FilpFlop <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">_____A</span><span class="token arrow operator">--&gt;</span></span>a1
FilpFlop <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">____B</span><span class="token arrow operator">--&gt;</span></span>a2
a3 <span class="token arrow operator">--&gt;</span> b1
SM_Door <span class="token arrow operator">--&gt;</span> b2
a4 <span class="token arrow operator">--&gt;</span> b3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
E <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">Enter</span><span class="token arrow operator">--&gt;</span></span>Gate
OnComponentBeginOverlap <span class="token arrow operator">--&gt;</span>Enable_Input1 <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">Open</span><span class="token arrow operator">--&gt;</span></span>Gate
GetPlayerController <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">PlayerController</span><span class="token arrow operator">--&gt;</span></span>Enable_Input1
GetPlayerController <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">PlayerController</span> <span class="token arrow operator">--&gt;</span></span>Enable_Input2
OnComponentEndOverlao <span class="token arrow operator">--&gt;</span>Enable_Input2 <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">Close</span><span class="token arrow operator">--&gt;</span></span>Gate
Gate <span class="token arrow operator">--&gt;</span>FilpFlop <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">_____A</span><span class="token arrow operator">--&gt;</span></span>时间轴
FilpFlop <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">____B</span><span class="token arrow operator">--&gt;</span></span>时间轴
时间轴 <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">Updata</span><span class="token arrow operator">--&gt;</span></span> SetRelativeRotation
时间轴 <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">新建轨迹</span><span class="token arrow operator">--&gt;</span></span>SetRelativeRotation
SM_Door <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">目标</span><span class="token arrow operator">--&gt;</span></span> SetRelativeRotation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一些节点" tabindex="-1"><a class="header-anchor" href="#一些节点"><span>一些节点</span></a></h2><p>Lerp：Alpha控制A和B的混合，相当于0-1向任意数值的映射</p><h2 id="调试" tabindex="-1"><a class="header-anchor" href="#调试"><span>调试</span></a></h2><p>蓝图上方工具栏中的“调试过滤器”</p>`,14),l=[r];function o(i,p){return n(),s("div",null,l)}const v=a(t,[["render",o],["__file","02. UE4蓝图.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/3D/Soft/04.%20UE4/%E5%85%A5%E9%97%A8/02.%20UE4%E8%93%9D%E5%9B%BE.html","title":"基本操作——蓝图篇","lang":"zh-CN","frontmatter":{"last_time":"2020.03.31","tag":"有道云","description":"基本操作——蓝图篇 简单自动开关门脚本 创建蓝图Actor实现（添加Box Collistion） 区别 按E开门 一些节点 Lerp：Alpha控制A和B的混合，相当于0-1向任意数值的映射 调试 蓝图上方工具栏中的“调试过滤器”","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/3D/Soft/04.%20UE4/%E5%85%A5%E9%97%A8/02.%20UE4%E8%93%9D%E5%9B%BE.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"基本操作——蓝图篇"}],["meta",{"property":"og:description","content":"基本操作——蓝图篇 简单自动开关门脚本 创建蓝图Actor实现（添加Box Collistion） 区别 按E开门 一些节点 Lerp：Alpha控制A和B的混合，相当于0-1向任意数值的映射 调试 蓝图上方工具栏中的“调试过滤器”"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["meta",{"property":"article:tag","content":"有道云"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基本操作——蓝图篇\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"基本操作——蓝图篇","slug":"基本操作——蓝图篇","link":"#基本操作——蓝图篇","children":[{"level":2,"title":"一些节点","slug":"一些节点","link":"#一些节点","children":[]},{"level":2,"title":"调试","slug":"调试","link":"#调试","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.08,"words":325},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/3D/Soft/04. UE4/入门/02. UE4蓝图.md","autoDesc":true}');export{v as comp,m as data};

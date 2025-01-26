import{_ as e,c as i,e as s,o as l}from"./app-D5EhND04.js";const a={};function d(t,n){return l(),i("div",null,n[0]||(n[0]=[s(`<h1 id="vueflow学习随笔" tabindex="-1"><a class="header-anchor" href="#vueflow学习随笔"><span>VueFlow学习随笔</span></a></h1><h2 id="vueflow学习笔记-开发者的学习杂记" tabindex="-1"><a class="header-anchor" href="#vueflow学习笔记-开发者的学习杂记"><span>VueFlow学习笔记 (开发者的学习杂记)</span></a></h2><h3 id="main" tabindex="-1"><a class="header-anchor" href="#main"><span>Main</span></a></h3><ul><li>大部分看官网文档就行了</li><li>然后一部分可能在代码注释里</li><li>剩余的笔记，才会做在这里</li></ul><h3 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h3><ul><li>拖拽相关： D3.js</li><li>自定义节点： 见NodeFlow.vue，运用的自定义插槽。VueFlow标签先通过传入的数据构造有自定义标签的插槽位置，然后再用具名插槽v-slot(简写#)把插槽内容进行插入/替换。 我自定义也仿照这个设计做了 &quot;自定义 节点项&quot;</li><li>其他： VueUse</li></ul><h2 id="组合式函数部分" tabindex="-1"><a class="header-anchor" href="#组合式函数部分"><span>组合式函数部分</span></a></h2><p>参考：https://vueflow.dev/typedocs/</p><p>注意：以下说的 “原信息” 指传入节点/socket/edge组件时的props信息，而非对象信息。 对象信息通常要根据 “原信息” 提供的id，再使用如 <code>getConnectedEdges(id)</code> 的API获取</p><ul><li>useConnection | 可组合用于访问当前正在进行的连接，返回：当前连接：startHandle、endHandle、status、position</li><li>useEdge | (核心) 可组合访问边缘对象及其 dom 元素</li><li>useEdgesData | (核心)</li><li>useGetPointerPosition</li><li>useHandle | (核心)</li><li><s>useHandleConnections</s> | (核心) (弃用，<code>useNodeConnections</code> 代替) 与所选handle连接的线的原信息</li><li>useKeyPress</li><li>useNode | (核心)</li><li>useNodeConnections | (核心) (1.42.0 最近新增的) 检索连接到一个节点的所有边。可以通过句柄类型和id进行过滤</li><li>useNodeId | (核心)</li><li>useNodesData | (核心) 节点的原信息</li><li>useNodesInitialized</li><li>useVueFlow</li><li>useZoomPanHelper</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 除文档，可以参考 node_modules/@vue-flow/core/dist/composables/，这下面都是组合式函数</span>
<span class="token comment">// 学习要点：</span>
<span class="token comment">// 需要区分 useXXX、useXXXId、useXXXsData 三者</span>
<span class="token comment">// 需要区分 edge、connect</span>

<span class="token comment">// ----------------------- Node -----------------------------</span>

<span class="token doc-comment comment">/**
 * 可组合，提供对节点对象、父节点对象、连接边及其 dom 元素的访问
 * 如果没有提供节点 ID，则从上下文中注入节点 ID
 * 如果你不提供 ID，则必须在自定义节点组件的子级中调用此可组合项，否则将抛出
 * 
 * <span class="token keyword">@return</span> (object<span class="token punctuation">{</span>
 *   connectedEdges
 *   id: string
 *   node
 *   nodeEl
 *   parentNode
 * <span class="token punctuation">}</span>)
 */</span>
useNode

<span class="token doc-comment comment">/**
 * 此可组合项从 ctx 返回当前节点 id。
 * 它应该在（自定义）节点组件 ctx 内部使用，因为 id 由内部NodeWrapper组件提供。
 * 
 * <span class="token keyword">@return</span> (id: string)
 */</span>
useNodeId

<span class="token doc-comment comment">/**
 * 可组合用于接收一个或多个节点的数据
 * 
 * <span class="token keyword">@return</span> ComputedRef&lt; NodeData&lt; NodeType&gt;[]&gt;
 *   NodeData: <span class="token punctuation">{</span> id, type, data <span class="token punctuation">}</span>
 */</span>
useNodesData

<span class="token comment">// ----------------------- Edge -----------------------------</span>

<span class="token doc-comment comment">/**
 * 可组合访问边缘对象及其 dom 元素
 * 如果没有提供边缘 ID，则从上下文中注入边缘 ID
 * 如果你不提供 ID，则必须在自定义边缘组件的子级中调用此可组合项，否则将抛出
 * 
 * <span class="token keyword">@return</span> (object <span class="token punctuation">{</span>
 *   id: string,
 *   edge,
 *   edgeEl,
 * <span class="token punctuation">}</span>)
 */</span>
useEdge

<span class="token doc-comment comment">/**
 * 可组合用于接收一个或多个节点的数据
 * <span class="token keyword">@return</span> (ComputedRef&lt;EdgeData&lt;EdgeType&gt; | null&gt;) 数据对象数组
 *   EdgeData: <span class="token punctuation">{</span> id, type, data <span class="token punctuation">}</span>
 */</span>
useEdgesData

<span class="token doc-comment comment">/**
 * 可组合用于访问当前正在进行的连接
 * 
 * <span class="token keyword">@return</span> (object <span class="token punctuation">{</span>
 *   startHandle,
 *   endHandle,
 *   status,
 *   position,
 * <span class="token punctuation">}</span>)
 */</span>
useConnection

<span class="token doc-comment comment">/**
 * 返回的现有连接的可组合项&lt;Handle /&gt;
 * 
 * <span class="token keyword">@return</span> (ComputedRef&lt; HandleConnection[]&gt;)
 *   HandleConnection: <span class="token punctuation">{</span>
 *     edgeId: string,
 *     source: string,
 *     sourceHandle: string,
 *     target: string,
 *     targetHandle: string,
 *   <span class="token punctuation">}</span>
 */</span>
useHandleConnections

<span class="token comment">// ----------------------- Handle ---------------------------</span>

<span class="token doc-comment comment">/**
 * 此可组合项提供处理事件的监听器
 * 通常建议使用 \`&lt;Handle /&gt;\` 组件来代替此可组合项
 * <span class="token keyword">@return</span> (object <span class="token punctuation">{</span>
 *   handleClick(),
 *   handlePointerDown(),
 * <span class="token punctuation">}</span>)
 */</span>
useHandle

<span class="token comment">// ----------------------- Other ----------------------------</span>

<span class="token doc-comment comment">/**
 * 返回用于获取指针位置的函数的可组合项
 * <span class="token keyword">@return</span> (Function)
 */</span>
useGetPointerPosition

<span class="token doc-comment comment">/**
 * 如果按下某个键，则返回布尔值的可组合项
 * <span class="token keyword">@return</span> (Ref&lt; boolean&gt;)
 */</span>
useKeyPress

<span class="token doc-comment comment">/**
 * 可组合用于获取所有节点的初始化状态。
 * 
 * 当新节点添加到图中时，它不会立即初始化。这是因为节点的边界尚不清楚。当所有节点都初始化后，即当它们的边界已知时，此可组合项将返回 false，然后返回 true。
 * 
 * <span class="token keyword">@return</span> (ComputedRef&lt; boolean&gt;)
 */</span>
useNodesInitialized

<span class="token doc-comment comment">/**
 * 提供对存储实例的访问的可组合项
 *
 * 如果没有提供 id，则从上下文中注入 store 实例
 * 
 * 如果在上下文中没有找到存储实例，则创建一个新的存储实例并在存储中注册
 * 
 * <span class="token keyword">@return</span> (VueFlowStore)
 */</span>
useVueFlow

<span class="token doc-comment comment">/**
 * 使用缩放平移助手
 * 
 * <span class="token keyword">@deprecated</span> 改用useVueFlow
 */</span>
useZoomPanHelper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)]))}const c=e(a,[["render",d],["__file","VueFlow学习随笔.html.vue"]]),v=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Platform/Web/03.%20%E5%89%8D%E7%AB%AF%E7%BB%84%E4%BB%B6/%E7%BB%84%E4%BB%B6%E5%BA%93/VueFlow/%E5%AE%9E%E6%88%98/VueFlow%E5%AD%A6%E4%B9%A0%E9%9A%8F%E7%AC%94.html","title":"VueFlow学习随笔","lang":"zh-CN","frontmatter":{"description":"VueFlow学习随笔 VueFlow学习笔记 (开发者的学习杂记) Main 大部分看官网文档就行了 然后一部分可能在代码注释里 剩余的笔记，才会做在这里 原理 拖拽相关： D3.js 自定义节点： 见NodeFlow.vue，运用的自定义插槽。VueFlow标签先通过传入的数据构造有自定义标签的插槽位置，然后再用具名插槽v-slot(简写#)把插槽...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Platform/Web/03.%20%E5%89%8D%E7%AB%AF%E7%BB%84%E4%BB%B6/%E7%BB%84%E4%BB%B6%E5%BA%93/VueFlow/%E5%AE%9E%E6%88%98/VueFlow%E5%AD%A6%E4%B9%A0%E9%9A%8F%E7%AC%94.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"VueFlow学习随笔"}],["meta",{"property":"og:description","content":"VueFlow学习随笔 VueFlow学习笔记 (开发者的学习杂记) Main 大部分看官网文档就行了 然后一部分可能在代码注释里 剩余的笔记，才会做在这里 原理 拖拽相关： D3.js 自定义节点： 见NodeFlow.vue，运用的自定义插槽。VueFlow标签先通过传入的数据构造有自定义标签的插槽位置，然后再用具名插槽v-slot(简写#)把插槽..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"VueFlow学习随笔\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"VueFlow学习随笔","slug":"vueflow学习随笔","link":"#vueflow学习随笔","children":[{"level":2,"title":"VueFlow学习笔记 (开发者的学习杂记)","slug":"vueflow学习笔记-开发者的学习杂记","link":"#vueflow学习笔记-开发者的学习杂记","children":[{"level":3,"title":"Main","slug":"main","link":"#main","children":[]},{"level":3,"title":"原理","slug":"原理","link":"#原理","children":[]}]},{"level":2,"title":"组合式函数部分","slug":"组合式函数部分","link":"#组合式函数部分","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.28,"words":983},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/Web/03. 前端组件/组件库/VueFlow/实战/VueFlow学习随笔.md","excerpt":"\\n<h2>VueFlow学习笔记 (开发者的学习杂记)</h2>\\n<h3>Main</h3>\\n<ul>\\n<li>大部分看官网文档就行了</li>\\n<li>然后一部分可能在代码注释里</li>\\n<li>剩余的笔记，才会做在这里</li>\\n</ul>\\n<h3>原理</h3>\\n<ul>\\n<li>拖拽相关：\\nD3.js</li>\\n<li>自定义节点：\\n见NodeFlow.vue，运用的自定义插槽。VueFlow标签先通过传入的数据构造有自定义标签的插槽位置，然后再用具名插槽v-slot(简写#)把插槽内容进行插入/替换。\\n我自定义也仿照这个设计做了 \\"自定义 节点项\\"</li>\\n<li>其他：\\nVueUse</li>\\n</ul>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/Web/03. 前端组件/组件库/VueFlow/实战/VueFlow学习随笔.md","value":{"title":"VueFlow学习随笔","path":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/Web/03. 前端组件/组件库/VueFlow/实战/VueFlow学习随笔.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{c as comp,v as data};

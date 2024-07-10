import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,a as i}from"./app-5ajJQ-aM.js";const a={},t=i(`<h1 id="《c-设计模式》视频-李建忠" tabindex="-1"><a class="header-anchor" href="#《c-设计模式》视频-李建忠"><span>《C++设计模式》视频_李建忠</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><p>[toc]</p><h1 id="组合模式-composite" tabindex="-1"><a class="header-anchor" href="#组合模式-composite"><span>组合模式 Composite</span></a></h1><h2 id="所属分类——-数据结构-模式" tabindex="-1"><a class="header-anchor" href="#所属分类——-数据结构-模式"><span>所属分类——“数据结构” 模式</span></a></h2><ul><li>“数据结构” 模式 <ul><li>常常有一些组件在内部具有特定的数据结构，如果让客户程序依赖这些特定的数据结构，将极大地破坏组件的复用。 这时候，<strong>将这些特定数据结构封装在内部，在外部提供统一的接口</strong>，来实现<strong>与特定数据结构无关的访问</strong>，是一种行之有效的解决方案。</li></ul></li><li>典型模式 <ul><li>组合模式 Composite</li><li>迭代器模式 Iterator</li><li>职责链模式 Chain of Resposibility</li></ul></li></ul><h2 id="动机-motivation" tabindex="-1"><a class="header-anchor" href="#动机-motivation"><span>动机（Motivation）</span></a></h2><h3 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h3><ul><li>“数据结构” 模式 <ul><li>常常有一些组件在内部具有特定的数据结构，如果让客户程序依赖这些特定的数据结构，将极大地破坏组件的复用。 这时候，将这些特定数据结构封装在内部，在外部提供统一的<strong>接口</strong>，来实现<strong>与特定数据结构无关的访问</strong>，是一种行之有效的解决方案。</li></ul></li><li>典型模式 <ul><li>组合模式 Composite</li><li>迭代器模式 lterator</li><li>职责链模式 Chain of Resposibility</li></ul></li></ul><h3 id="代码体现" tabindex="-1"><a class="header-anchor" href="#代码体现"><span>代码体现</span></a></h3><p>其实就是树结构用多态的方式来实现</p><h4 id="举例-组合模式" tabindex="-1"><a class="header-anchor" href="#举例-组合模式"><span>举例（组合模式）</span></a></h4><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;list&gt;
#include &lt;string&gt;
#include &lt;algorithm&gt;

using namespace std;

// 定义节点的抽象接口，抽象基类（树节点和叶子节点共同组成树形结构）
class Component
{
public:
	virtual void process()=0;
    virtual ~Component(){}
};

// 枝干节点。继承Component
class Composite : public Component{	
	string name;
	list&lt;Component*&gt; elements;				// 节点，list存储多态指针
public:
    Composite(const string &amp; s):name(s){}	// 构造函数
    void add(Component* element) {			// 添加节点
		elements.push_back(element);
	}
	void remove(Componentx element){		// 移除节点
		elements.remove(element) ;
	}
	void process( ){
		// 1. process current node，处理当前节点
        // 2. process leaf nodes，处理叶子节点
        for (auto &amp;e : elements)			// 这里是C++11的基于范围循环
			e-&gt;process();					// 【虚函数调用、多态调用，且为递归调用】
    }
};

// 叶子节点。继承Component
class Leaf : public Component{
    string name;
public:
	Leaf(string s):name(s){}				// 构造函数
    
    void process(){
		//process current node
	}
};

// 客户程序
void Invoke(Component &amp; c){	// 传入树形节点
    //...
	c.process( );			// 调用树形节点（底层会递归遍历处理）
	//...
};

// 运行函数
int main(){
    // 构造枝干节点和叶子节点
	Composite root(&quot;root&quot;) ;
	Composite treeNode1(&quot;treeNode1&quot;);
    Composite treeNode2(&quot;treeNode2&quot;);
    Composite treeNode3(&quot;treeNode3&quot;);
    Composite treeNode4(&quot;treeNode4&quot;);
    Leaf left1(&quot;left1&quot;);
	Leaf left2(&quot;left2&quot;);

    // 组合枝干节点和叶子节点，组合成为树形结构
    root.add(&amp;treeNode1) ;
	treeNode1.add(&amp;treeNode2);
    treeNode2.add(&amp;leaf1);
	root.add(&amp;treeNode3);
	treeNode3.add(&amp;treeNode4);
    treeNode4.add(&amp;leaf2);
    
    // 开始处理节点
	process(root) ;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式"><span>设计模式</span></a></h2><h3 id="模式定义" tabindex="-1"><a class="header-anchor" href="#模式定义"><span>模式定义</span></a></h3><blockquote><p>将对象组合成<strong>树形结构</strong>以表示 “部分-整体” 的层次结构。 Composite使得用户对单个对象和组合对象的使用具有<strong>一致性（稳定）</strong>。</p><p>——《设计模式》GoF</p></blockquote><h3 id="结构-structure" tabindex="-1"><a class="header-anchor" href="#结构-structure"><span>结构（Structure）</span></a></h3><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
<span class="token keyword">subgraph</span> Component 树节点的抽象基类
	A1<span class="token text string">[Operation]</span><span class="token punctuation">;</span>class A1 red
	A2<span class="token text string">[Add]</span><span class="token punctuation">;</span>class A2 red
	A3<span class="token text string">[Remove]</span><span class="token punctuation">;</span>class A3 red
	A4<span class="token text string">[GetChild]</span><span class="token punctuation">;</span>class A4 red
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> Leaf 树叶节点
	B1<span class="token text string">[Operation]</span>
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> Composite 枝干节点
	C1<span class="token text string">[Operation]</span>
	C2<span class="token text string">[Add 参Component]</span>
	C3<span class="token text string">[Remove 参Component]</span>
	C4<span class="token text string">[GetChild 参int]</span>
<span class="token keyword">end</span>

AP1<span class="token text string">[参Component]</span><span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">传入参</span><span class="token arrow operator">.-&gt;</span></span>A2
AP2<span class="token text string">[参Component]</span><span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">传入参</span><span class="token arrow operator">.-&gt;</span></span>A3
AP3<span class="token text string">[参int]</span><span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">传入参</span><span class="token arrow operator">.-&gt;</span></span>A4

Client<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">调用</span><span class="token arrow operator">--&gt;</span></span>A1
A1<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>B1
A1<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>C1
C1<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">包含抽象基类指针</span><span class="token arrow operator">.-&gt;</span></span>D<span class="token text string">(Component)</span>
C1<span class="token arrow operator">-.-</span>D2<span class="token text string">(for all g in children: g.Operation)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>题外话：感觉这个结构有些问题</p><p>树叶比较尴尬，也不知道要不要实现这几个函数，实现为空的话，又违背接口原则</p><p>解决提案：Add、Remove、GetChild不一定要放在抽象基类、可只放在枝干节点中。</p><h3 id="要点总结" tabindex="-1"><a class="header-anchor" href="#要点总结"><span>要点总结</span></a></h3><ul><li>Composite模式采用树形结构来实现普遍存在的对象容器，从而<strong>将 “一对多” 的关系转化为 “一对一”</strong> 的关系， 使得客户代码可以一致地（复用）处理对象和对象容器，无需关心处理的是单个的对象，还是组合的对象容器</li><li><strong>将 “客户代码与复杂的对象容器结构&quot; 解耦</strong>是Composite的核心思想，解耦之后， 客户代码将<strong>与纯粹的抽象接口（而非对象容器的内部实现结构）发生依赖</strong>，从而更能 “应对变化”</li><li>Composite模式在具体实现中，可以让父对象中的子对象反向追溯；如果父对象有频繁的遍历需求，可使用缓存技巧来改善效率</li></ul>`,23),l=[t];function r(o,d){return n(),s("div",null,l)}const v=e(a,[["render",r],["__file","18. 组合模式 Composite.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/18.%20%E7%BB%84%E5%90%88%E6%A8%A1%E5%BC%8F%20Composite.html","title":"《C++设计模式》视频_李建忠","lang":"zh-CN","frontmatter":{"description":"《C++设计模式》视频_李建忠 目录 [toc] 组合模式 Composite 所属分类——“数据结构” 模式 “数据结构” 模式 常常有一些组件在内部具有特定的数据结构，如果让客户程序依赖这些特定的数据结构，将极大地破坏组件的复用。 这时候，将这些特定数据结构封装在内部，在外部提供统一的接口，来实现与特定数据结构无关的访问，是一种行之有效的解决方案。...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/18.%20%E7%BB%84%E5%90%88%E6%A8%A1%E5%BC%8F%20Composite.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"《C++设计模式》视频_李建忠"}],["meta",{"property":"og:description","content":"《C++设计模式》视频_李建忠 目录 [toc] 组合模式 Composite 所属分类——“数据结构” 模式 “数据结构” 模式 常常有一些组件在内部具有特定的数据结构，如果让客户程序依赖这些特定的数据结构，将极大地破坏组件的复用。 这时候，将这些特定数据结构封装在内部，在外部提供统一的接口，来实现与特定数据结构无关的访问，是一种行之有效的解决方案。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《C++设计模式》视频_李建忠\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"《C++设计模式》视频_李建忠","slug":"《c-设计模式》视频-李建忠","link":"#《c-设计模式》视频-李建忠","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"组合模式 Composite","slug":"组合模式-composite","link":"#组合模式-composite","children":[{"level":2,"title":"所属分类——“数据结构” 模式","slug":"所属分类——-数据结构-模式","link":"#所属分类——-数据结构-模式","children":[]},{"level":2,"title":"动机（Motivation）","slug":"动机-motivation","link":"#动机-motivation","children":[{"level":3,"title":"简概","slug":"简概","link":"#简概","children":[]},{"level":3,"title":"代码体现","slug":"代码体现","link":"#代码体现","children":[{"level":4,"title":"举例（组合模式）","slug":"举例-组合模式","link":"#举例-组合模式","children":[]}]}]},{"level":2,"title":"设计模式","slug":"设计模式","link":"#设计模式","children":[{"level":3,"title":"模式定义","slug":"模式定义","link":"#模式定义","children":[]},{"level":3,"title":"结构（Structure）","slug":"结构-structure","link":"#结构-structure","children":[]},{"level":3,"title":"要点总结","slug":"要点总结","link":"#要点总结","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.67,"words":1101},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/03. Tools/02. 管理层/01. 多类管理/设计模式/《C++设计模式》视频_李建忠/18. 组合模式 Composite.md","autoDesc":true}');export{v as comp,m as data};

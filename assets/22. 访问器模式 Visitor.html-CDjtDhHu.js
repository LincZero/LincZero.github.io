import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,a}from"./app-DVIBfMrr.js";const i={},l=a(`<h1 id="《c-设计模式》视频-李建忠" tabindex="-1"><a class="header-anchor" href="#《c-设计模式》视频-李建忠"><span>《C++设计模式》视频_李建忠</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><p>[toc]</p><h1 id="访问器模式-visitor" tabindex="-1"><a class="header-anchor" href="#访问器模式-visitor"><span>访问器模式 Visitor</span></a></h1><h2 id="所属分类——-行为变化-模式" tabindex="-1"><a class="header-anchor" href="#所属分类——-行为变化-模式"><span>所属分类——“行为变化” 模式</span></a></h2><p>略</p><h2 id="动机-motivation" tabindex="-1"><a class="header-anchor" href="#动机-motivation"><span>动机（Motivation）</span></a></h2><h3 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h3><ul><li>在软件构建过程中，由于需求的改变，某些<strong>类层次结构中常常需要增加新的行为（方法）</strong>， 如果直接在基类中做这样的更改，将会给子类带来很繁重的变更负担，甚至破坏原有设计</li><li>如何在<strong>不更改类层次结构的前提下</strong>，在<strong>运行时</strong>根据需要透明地为类层次结构上的各个类动态添加新的操作，从而避免上述问题？</li></ul><h3 id="代码体现" tabindex="-1"><a class="header-anchor" href="#代码体现"><span>代码体现</span></a></h3><p>假设要增加新的行为（方法），而且<strong>不知道要增加新的操作的内容以及数量</strong></p><h4 id="举例-普通写法" tabindex="-1"><a class="header-anchor" href="#举例-普通写法"><span>举例 - 普通写法</span></a></h4><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

class visitor;

// 抽象基类
class Element
{
public:
	virtual void Func1() = 0;
    virtual void Func2(int data) = 0;			// 【新增】
    virtual ~Element(){}
};

// 具体类
class ElementA : public Element
{
public:
	void Func1() override{
		//...
	}
    void Func2(int data) override{				// 【新增】
		//...
	}
};

class ElementB : public Element
{
public:
	void Func1( ) override{
		//***
	}
    void Func2(int data) override{				// 【新增】
		//***
	}
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="举例-访问器模式写法" tabindex="-1"><a class="header-anchor" href="#举例-访问器模式写法"><span>举例 - 访问器模式写法</span></a></h4><p>稳定的部分</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

class visitor;

// 抽象基类
class Element
{
public:
	virtual void accept(Visitor&amp; visitor) = 0;	//【修改】变为accept方法，访问者作为参数传入
    virtual ~Element(){}
};

// 具体类
class ElementA : public Element
{
public:
	void accept(Visitor&amp; visitor) override{		//【修改】变为accept方法
		visitor.visitElementA(*this);
	}
};

class ElementB : public Element
{
public:
	void accept(Visitor&amp; visitor) override{		//【修改】变为accept方法
		visitor.visitElementB(*this);
	}
};

// 访问器类的抽象基类
class Visitor{
public:
	virtual void visitElementA(ElementA&amp; element) = 0;
    virtual void visitElementB(ElementB&amp; element) = 0;
    virtual ~Visitor();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>未来可能需要更改的部分</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 访问器类的具体类、重写
class Visitor1 : public Visitor		// 增加一个新的行为
{
public:
	void visitElementA(ElementA&amp; element) override{
		cout &lt;&lt; &quot;Visitor1 is processing ElementA&quot; &lt;&lt; endl;
	}
	void visitElementB(ElementB&amp; element) override{
		cout &lt;&lt; &quot;Visitor1 is processing ElementB&quot; &lt;&lt; endl;
	}
};

class Visitor2 : public Visitor		// 增加一个新的行为
{
public:
	void visitElementA(ElementA&amp; element) override{
		cout &lt;&lt; &quot;Visitor2 is processing ElementA&quot; &lt;&lt; endl;
	}
	void visitElementB(ElementB&amp; element) override{
		cout &lt;&lt; &quot;Visitor2 is processing ElementB&quot; &lt;&lt; endl;
	}
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行部分</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>int main(){
	Visitor2 visitor;
	ElementB elementB;
	elementB.accept(visitor);	// 输出Visitor2 is processing ElementB
    
	ElementA elementA;
	elementA.accept(visitor);	// 输出Visitor2 is processing ElementA
    
	return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分析-访问器模式写法" tabindex="-1"><a class="header-anchor" href="#分析-访问器模式写法"><span>分析 - 访问器模式写法</span></a></h4><p>代码结构</p><p>（红色表示稳定）</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
<span class="token keyword">subgraph</span> Element
	A<span class="token text string">[accept]</span><span class="token punctuation">;</span>class A red
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> ElementA
	AA<span class="token text string">[accept]</span><span class="token punctuation">;</span>class AA red
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> ElementB
	AB<span class="token text string">[accept]</span><span class="token punctuation">;</span>class AB red
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> Visitor 访问器类
	B1<span class="token text string">[visitElementA]</span><span class="token punctuation">;</span>class B1 red
	B2<span class="token text string">[visitElementB]</span><span class="token punctuation">;</span>class B2 red
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> Visitor1 访问器具体类
	BA1<span class="token text string">[visitElementA]</span>
	BA2<span class="token text string">[visitElementB]</span>
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> Visitor2 访问器具体类
	BB1<span class="token text string">[visitElementA]</span>
	BB2<span class="token text string">[visitElementB]</span>
<span class="token keyword">end</span>

A<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>AA
A<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>AB
B1<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>BA1
B1<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>BB1
AA<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">作用</span><span class="token arrow operator">.-&gt;</span></span>AAA<span class="token text string">(接收Visitor具体类为参并调用该参内的方法)</span>
AB<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">作用</span><span class="token arrow operator">.-&gt;</span></span>AAA

<span class="token keyword">classDef</span> red <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f9f<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>4px</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>main从运行到输出，这里有个过程叫<code>double dispatch</code>（二次多态辨析 / 双重分发）</p><ul><li>第一次是在Element的accept方法（需要辨析是ElementA还是ElementB具体类）</li><li>第二次是在Element具体类的accept方法（需要辨析是Visitor1还是Visitor2具体类）</li></ul><h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式"><span>设计模式</span></a></h2><h3 id="模式定义" tabindex="-1"><a class="header-anchor" href="#模式定义"><span>模式定义</span></a></h3><blockquote><p>表示一个作用于某对象结构中的各元素的操作。使得可以在<strong>不改变（稳定）各元素的类的<mark>前提</mark>下</strong>定义（<strong>扩展</strong>）作用于这些元素的<strong>新操作（变化）</strong></p><p>——《设计模式》GoF</p></blockquote><h3 id="结构-structure" tabindex="-1"><a class="header-anchor" href="#结构-structure"><span>结构（Structure）</span></a></h3><p>（红色表示稳定）</p><p>（这个模式最大的缺点就是要求ConcreteElement的<strong>个数稳定</strong>，这个条件难满足）</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
<span class="token keyword">subgraph</span> Visitor 访问者抽象基类
	B1<span class="token text string">[VisitConcreteElementA]</span><span class="token punctuation">;</span>class B1 red
	B2<span class="token text string">[VisitConcreteElementB]</span><span class="token punctuation">;</span>class B2 red
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> ConcreVistor1 访问器具体类
	BA1<span class="token text string">[VisitConcreteElementA]</span>
	BA2<span class="token text string">[VisitConcreteElementB]</span>
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> ConcreVistor1 访问器具体类
	BB1<span class="token text string">[VisitConcreteElementA]</span>
	BB2<span class="token text string">[VisitConcreteElementB]</span>
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> Element
	A<span class="token text string">[Accept]</span><span class="token punctuation">;</span>class A red
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> ConcreteElementA
	AA1<span class="token text string">[Accept]</span><span class="token punctuation">;</span>class AA1 red
	AA2<span class="token text string">[OperationA]</span><span class="token punctuation">;</span>class AA2 red
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> ConcreteElementB
	AB1<span class="token text string">[Accept]</span><span class="token punctuation">;</span>class AB1 red
	AB2<span class="token text string">[OperationB]</span><span class="token punctuation">;</span>class AB2 red
<span class="token keyword">end</span>

Client<span class="token text string">(Client)</span><span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">创建实例</span><span class="token arrow operator">---&gt;</span></span>B1
Client<span class="token arrow operator">--&gt;</span>ObjectStructure<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">创建实例</span><span class="token arrow operator">--&gt;</span></span>A
B1<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生重写</span><span class="token arrow operator">--&gt;</span></span>BA1
B1<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生重写</span><span class="token arrow operator">--&gt;</span></span>BB1
A<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>AA1
A<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>AB1

<span class="token keyword">classDef</span> red <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f9f<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>4px</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="要点总结" tabindex="-1"><a class="header-anchor" href="#要点总结"><span>要点总结</span></a></h3><ul><li>Visitor模式通过所谓双重分发（double dispatch）来实现在不更改（不添加新的操作-编译时）Element类层次结构的<mark>前提</mark>下，在运行时透明地为类层次结构上的各个类动态添加新的操作（支持变化）</li><li>所谓<strong>双重分发</strong>即Visitor模式中间包括了<strong>两个多态分发</strong>（注意其中的多态机制）： <ul><li>第一个为accept方法的多态辨析；</li><li>第二个为VisitElementX方法的多态辨析。</li></ul></li><li>Visitor模式的<strong>最大缺点</strong>在于扩展类层次结构（增添新的Element了类），会导致Visitor类的改变。 因此Mistor模式<strong>适用于 “Element类层次结构稳定，而其中的操作却经常面临频繁改动”</strong></li></ul>`,35),t=[l];function r(d,c){return s(),e("div",null,t)}const v=n(i,[["render",r],["__file","22. 访问器模式 Visitor.html.vue"]]),u=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/22.%20%E8%AE%BF%E9%97%AE%E5%99%A8%E6%A8%A1%E5%BC%8F%20Visitor.html","title":"《C++设计模式》视频_李建忠","lang":"zh-CN","frontmatter":{"description":"《C++设计模式》视频_李建忠 目录 [toc] 访问器模式 Visitor 所属分类——“行为变化” 模式 略 动机（Motivation） 简概 在软件构建过程中，由于需求的改变，某些类层次结构中常常需要增加新的行为（方法）， 如果直接在基类中做这样的更改，将会给子类带来很繁重的变更负担，甚至破坏原有设计 如何在不更改类层次结构的前提下，在运行时根...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/22.%20%E8%AE%BF%E9%97%AE%E5%99%A8%E6%A8%A1%E5%BC%8F%20Visitor.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"《C++设计模式》视频_李建忠"}],["meta",{"property":"og:description","content":"《C++设计模式》视频_李建忠 目录 [toc] 访问器模式 Visitor 所属分类——“行为变化” 模式 略 动机（Motivation） 简概 在软件构建过程中，由于需求的改变，某些类层次结构中常常需要增加新的行为（方法）， 如果直接在基类中做这样的更改，将会给子类带来很繁重的变更负担，甚至破坏原有设计 如何在不更改类层次结构的前提下，在运行时根..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《C++设计模式》视频_李建忠\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"《C++设计模式》视频_李建忠","slug":"《c-设计模式》视频-李建忠","link":"#《c-设计模式》视频-李建忠","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"访问器模式 Visitor","slug":"访问器模式-visitor","link":"#访问器模式-visitor","children":[{"level":2,"title":"所属分类——“行为变化” 模式","slug":"所属分类——-行为变化-模式","link":"#所属分类——-行为变化-模式","children":[]},{"level":2,"title":"动机（Motivation）","slug":"动机-motivation","link":"#动机-motivation","children":[{"level":3,"title":"简概","slug":"简概","link":"#简概","children":[]},{"level":3,"title":"代码体现","slug":"代码体现","link":"#代码体现","children":[{"level":4,"title":"举例 - 普通写法","slug":"举例-普通写法","link":"#举例-普通写法","children":[]},{"level":4,"title":"举例 - 访问器模式写法","slug":"举例-访问器模式写法","link":"#举例-访问器模式写法","children":[]},{"level":4,"title":"分析 - 访问器模式写法","slug":"分析-访问器模式写法","link":"#分析-访问器模式写法","children":[]}]}]},{"level":2,"title":"设计模式","slug":"设计模式","link":"#设计模式","children":[{"level":3,"title":"模式定义","slug":"模式定义","link":"#模式定义","children":[]},{"level":3,"title":"结构（Structure）","slug":"结构-structure","link":"#结构-structure","children":[]},{"level":3,"title":"要点总结","slug":"要点总结","link":"#要点总结","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.88,"words":1164},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/03. Tools/02. 管理层/01. 多类管理/设计模式/《C++设计模式》视频_李建忠/22. 访问器模式 Visitor.md","autoDesc":true}');export{v as comp,u as data};

import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as t,a}from"./app-OHhlwNoJ.js";const s={},i=a(`<h1 id="《c-设计模式》视频-李建忠" tabindex="-1"><a class="header-anchor" href="#《c-设计模式》视频-李建忠"><span>《C++设计模式》视频_李建忠</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><p>[toc]</p><h1 id="迭代器模式-iterator" tabindex="-1"><a class="header-anchor" href="#迭代器模式-iterator"><span>迭代器模式 Iterator</span></a></h1><h2 id="所属分类——-数据结构-模式" tabindex="-1"><a class="header-anchor" href="#所属分类——-数据结构-模式"><span>所属分类——“数据结构” 模式</span></a></h2><p>略</p><h2 id="动机-motivation" tabindex="-1"><a class="header-anchor" href="#动机-motivation"><span>动机（Motivation）</span></a></h2><h3 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h3><ul><li>在软件构建过程中，集合对象内部结构常常变化各异。（列表、链表、树等等） 但对于这些集合对象，我们希望在<strong>不暴露其内部结构的同时</strong>，可以让外部客户代码透明地访问其中包含的元素； 同时这种 “透明遍历&quot; 也为 “同一种算法在多种集合对象上进行操作” 提供了可能。</li><li>使用面向对象技术将这种遍历机制抽象为 “迭代器对象” 为 “应对变化中的集合对象&quot; 提供了一种优雅的方式</li></ul><h3 id="代码体现" tabindex="-1"><a class="header-anchor" href="#代码体现"><span>代码体现</span></a></h3><h4 id="举例-迭代器模式的迭代器" tabindex="-1"><a class="header-anchor" href="#举例-迭代器模式的迭代器"><span>举例 - 迭代器模式的迭代器</span></a></h4><p><mark>（注意：这种方式用面向对象来实现，<strong>过时</strong>了。现在集合类库里面都有基础方法遍历集合、比如STL）</mark></p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 迭代器抽象基类
template&lt;typename T&gt;
class Iterator
{
public:
	virtual void first() = 0;			// 第一个车元素
    virtual void next() = 0;			// 下一个元素
	virtual bool isDone() const = 0;	// 是否到头
    virtual T&amp; current() = 0;			// 游标（可能不声明、和next合并）
};

// 需要迭代器的类，返回迭代器
template&lt;typename T&gt;
class Mycollection{
public:
	Iterator&lt;T&gt; GetIterator( ){			// 返回一个迭代器
		//...
	}
};

// 迭代器的实现
template&lt;typename T&gt;
class CollectionIterator : public Iterator&lt;T&gt;
{
    MyCollection&lt;T&gt; mc;										// 包含，会返回迭代器
public:
	collectionIterator(const Mycollection&lt;T&gt; &amp;c): mc(c){}	// 构造函数
    void first () override {
        
	}
	void next() override {
        
    }
	bool isDone() const override{
        
    }
	T&amp; current() override{
        
    }
};

// 运行使用代码
void MyAlgorithm(){
	MyCollection&lt;int&gt; mc;								// 定义一个具有迭代器的对象

    Iterator&lt;int&gt; iter= mc.GetIterator();				// 返回这个对象中的迭代器

    for (iter.first(); !iter.isDone( ); iter.next( )){	// 遍历迭代器
		cout &lt;&lt; iter.current( ) &lt;&lt; endl;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式"><span>设计模式</span></a></h2><h3 id="模式定义" tabindex="-1"><a class="header-anchor" href="#模式定义"><span>模式定义</span></a></h3><blockquote><p>提供一种方法顺序访问一个聚合对象中的各个元素，而又<strong>不暴露</strong>（稳定）该对象的内部表示。</p><p>——《设计模式》GoF</p></blockquote><h3 id="结构-structure" tabindex="-1"><a class="header-anchor" href="#结构-structure"><span>结构（Structure）</span></a></h3><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
<span class="token keyword">subgraph</span> Aggregate 包含迭代器的类的抽象基类
	A<span class="token text string">[CreateIterator 创建返回迭代器]</span>
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> ConcreteAggregate 包含迭代器的类
	AA<span class="token text string">[CreateIterator 创建返回迭代器]</span>
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> Iterator 迭代器抽象基类 接口
	B1<span class="token text string">[First]</span><span class="token punctuation">;</span>class B1 red
	B2<span class="token text string">[Next]</span><span class="token punctuation">;</span>class B2 red
	B3<span class="token text string">[IsDone]</span><span class="token punctuation">;</span>class B3 red
	B4<span class="token text string">[CurrentItem]</span><span class="token punctuation">;</span>class B4 red
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> ConcreteIterator 迭代器的具体实现
	BA<span class="token text string">[override 重写]</span>
<span class="token keyword">end</span>

A<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>AA
B3<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>BA
BA<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">包含指针</span><span class="token arrow operator">.-&gt;</span></span>BAA<span class="token text string">(ConcreteIterator 被迭代的类)</span>
AA<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">以自己为参构造并返回</span><span class="token arrow operator">--&gt;</span></span>Iterator迭代器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="要点总结" tabindex="-1"><a class="header-anchor" href="#要点总结"><span>要点总结</span></a></h3><ul><li>迭代抽象：访问一个聚合对象的内容而无需暴露它的内部表示</li><li>迭代多态：为遍历不同的集合结构提供一个统一的接口，从而支持同样的算法在不同的集合结构上进行操作</li><li>迭代器的健壮性考虑：遍历的同时更改迭代器所在的集合结构，会导致问题</li></ul><h3 id="个人体会" tabindex="-1"><a class="header-anchor" href="#个人体会"><span>个人体会</span></a></h3><h4 id="【对比】迭代器模式和stl库" tabindex="-1"><a class="header-anchor" href="#【对比】迭代器模式和stl库"><span>【对比】迭代器模式和STL库</span></a></h4><p>迭代器模式<strong>有点过时</strong>，因为他最初是用面向对象的方式来实现的。<strong>（迭代器模式会过时、但迭代器思想不会过时）</strong></p><p>而现在泛型编程和STL库的思想和迭代器模式的思想一样，但不是用面向对象而是泛型编程的方式</p><p>但除了C++以外还有挺多语言的迭代器实现还是运行时多态</p><p>性能对比</p><ul><li><p>迭代器模式：运行时多态</p><p>用面向对象的方式实现，用到了<strong>虚函数调用</strong>、性能有损。对于迭代for循环来说这种性能损失就更大了</p></li><li><p>STL库：编译时多态</p><p>迭代器用模板来描述、模板虽然也是多态、但实现的是编译时多态，性能损失小</p></li></ul><p>功能对比</p><ul><li>迭代器模式：只能往后走</li><li>STL库：有多种迭代器，还能往后走，更灵活 <ul><li>forward_iterator</li><li>reverse_iterator</li><li>bidirectional_iterator</li><li>random_access_iterator</li></ul></li></ul>`,29),l=[i];function r(o,d){return n(),t("div",null,l)}const v=e(s,[["render",r],["__file","19. 迭代器模式 Iterator.html.vue"]]),u=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/19.%20%E8%BF%AD%E4%BB%A3%E5%99%A8%E6%A8%A1%E5%BC%8F%20Iterator.html","title":"《C++设计模式》视频_李建忠","lang":"zh-CN","frontmatter":{"description":"《C++设计模式》视频_李建忠 目录 [toc] 迭代器模式 Iterator 所属分类——“数据结构” 模式 略 动机（Motivation） 简概 在软件构建过程中，集合对象内部结构常常变化各异。（列表、链表、树等等） 但对于这些集合对象，我们希望在不暴露其内部结构的同时，可以让外部客户代码透明地访问其中包含的元素； 同时这种 “透明遍历\\" 也为 ...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/19.%20%E8%BF%AD%E4%BB%A3%E5%99%A8%E6%A8%A1%E5%BC%8F%20Iterator.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"《C++设计模式》视频_李建忠"}],["meta",{"property":"og:description","content":"《C++设计模式》视频_李建忠 目录 [toc] 迭代器模式 Iterator 所属分类——“数据结构” 模式 略 动机（Motivation） 简概 在软件构建过程中，集合对象内部结构常常变化各异。（列表、链表、树等等） 但对于这些集合对象，我们希望在不暴露其内部结构的同时，可以让外部客户代码透明地访问其中包含的元素； 同时这种 “透明遍历\\" 也为 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《C++设计模式》视频_李建忠\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"《C++设计模式》视频_李建忠","slug":"《c-设计模式》视频-李建忠","link":"#《c-设计模式》视频-李建忠","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"迭代器模式 Iterator","slug":"迭代器模式-iterator","link":"#迭代器模式-iterator","children":[{"level":2,"title":"所属分类——“数据结构” 模式","slug":"所属分类——-数据结构-模式","link":"#所属分类——-数据结构-模式","children":[]},{"level":2,"title":"动机（Motivation）","slug":"动机-motivation","link":"#动机-motivation","children":[{"level":3,"title":"简概","slug":"简概","link":"#简概","children":[]},{"level":3,"title":"代码体现","slug":"代码体现","link":"#代码体现","children":[{"level":4,"title":"举例 - 迭代器模式的迭代器","slug":"举例-迭代器模式的迭代器","link":"#举例-迭代器模式的迭代器","children":[]}]}]},{"level":2,"title":"设计模式","slug":"设计模式","link":"#设计模式","children":[{"level":3,"title":"模式定义","slug":"模式定义","link":"#模式定义","children":[]},{"level":3,"title":"结构（Structure）","slug":"结构-structure","link":"#结构-structure","children":[]},{"level":3,"title":"要点总结","slug":"要点总结","link":"#要点总结","children":[]},{"level":3,"title":"个人体会","slug":"个人体会","link":"#个人体会","children":[{"level":4,"title":"【对比】迭代器模式和STL库","slug":"【对比】迭代器模式和stl库","link":"#【对比】迭代器模式和stl库","children":[]}]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.27,"words":982},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/03. Tools/02. 管理层/01. 多类管理/设计模式/《C++设计模式》视频_李建忠/19. 迭代器模式 Iterator.md","autoDesc":true}');export{v as comp,u as data};

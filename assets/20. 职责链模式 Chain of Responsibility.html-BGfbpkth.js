import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,e as i}from"./app-yixEWCFr.js";const a={},l=i(`<h1 id="《c-设计模式》视频-李建忠" tabindex="-1"><a class="header-anchor" href="#《c-设计模式》视频-李建忠"><span>《C++设计模式》视频_李建忠</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><p>[toc]</p><h1 id="职责链模式-chain-of-responsibility" tabindex="-1"><a class="header-anchor" href="#职责链模式-chain-of-responsibility"><span>职责链模式 Chain of Responsibility</span></a></h1><h2 id="所属分类——-数据结构-模式" tabindex="-1"><a class="header-anchor" href="#所属分类——-数据结构-模式"><span>所属分类——“数据结构” 模式</span></a></h2><p>略</p><h2 id="动机-motivation" tabindex="-1"><a class="header-anchor" href="#动机-motivation"><span>动机（Motivation）</span></a></h2><h3 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h3><ul><li>在软件构建过程中，一个请求可能被多个对象处理，但是每个请求在运行时只能有一个接受者，如果显式指定，将必不可少地带来请求发送者与接受者的紧耦合</li><li>如何使<strong>请求的发送者不需要指定具体的接受者</strong>？<strong>让请求的接受者自己在运行时决定来处理</strong>请求，从而使两者解耦</li></ul><h3 id="代码体现" tabindex="-1"><a class="header-anchor" href="#代码体现"><span>代码体现</span></a></h3><h4 id="举例-职责链模式" tabindex="-1"><a class="header-anchor" href="#举例-职责链模式"><span>举例 - 职责链模式</span></a></h4><p>请求类和事件接收类</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;string&gt;

using namespace std;

// 枚举类型
enum class RequestType{
	REQ_HANDLER1,
    REQ_HANDLER2,
    REQ_HANDLER3
};

// 发送请求的对象
class Reqest{
	string description;
    RequestType reqType;
public:
	Reqest(const string &amp; desc, RequestType type):description(desc), reqType(type){}
    RequestType getReqType() const { return reqType; }
	const string&amp; getDescription() const { return description; }
};

// 事件接收者，抽象基类
class ChainHandler{
	ChainHandler *nextChain;				// 指向自身的指针，多态指针，形成多态链表
	void sendReqestToNextHandler(const Reqest &amp; req)
    {
		if ( nextChain != nullptr)			// 如果链表的下个节点不为空，则让下个节点来处理请求
			nextChain-&gt;handle(req) ;
	}
protected:
	virtual bool canHandleRequest(const Reqest &amp; req) = 0;	// 处理请求
    virtual void processRequest(const Reqest &amp; req) = 0;
public:
    ChainHandler() {nextChain = nullptr;}					// 构造时，下个节点为空
    void setNextChain(ChainHandler *next){nextChain=next;}	// 设置下个节点（建立成一个链表）
    void handle(const Reqest &amp; req)
    {
        if (canHandleRequest(req))			// 如果当前对象能处理该请求则处理，否则给下一个节点处理
        	processRequest(req);
        else
			sendReqestToNextHandler(req);
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事件接受者的实现</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 事件接收者，实现接口1
class Handler1 : public ChainHandler{
protected:
	bool canHandleRequest(const Reqest &amp; req) override			// 是否能够处理该请求
    {
		return req.getReqType() == RequestType::REQ_HANDLER1;
	}
	void processRequest(const Reqest &amp; req) override			// 处理该请求
    {
		cout &lt;&lt; &quot;Handler1 is handle reqest: &quot; &lt;&lt;req.getDescription( ) &lt;&lt; endl;
    }
};

// 事件接收者，实现接口2
class Handler2 : public ChainHandler{
protected:
	bool canHandleRequest(const Reqest &amp; req) override
    {
		return req.getReqType() == RequestType::REQ_HANDLER2;
	}
	void processRequest(const Reqest &amp; req) override
    {
		cout &lt;&lt; &quot;Handler1 is handle reqest: &quot; &lt;&lt;req.getDescription( ) &lt;&lt; endl;
    }
};

// 事件接收者，实现接口3
class Handler3 : public ChainHandler{
    //...
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行代码</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>int main(){
    // 构造事件接收者、并组装职责链
	Handler1 h1;
    Handler2 h2;
    Handler3 h3;
	h1.setNextChain(&amp;h2);
    h2.setNextChain(&amp;h3);

    // 构造请求对象，并将该请求传入职责链
    Reqest req(&quot;process task ... &quot;,RequestType::REQ_HANDLER3);// 媒体类型会被事件接受者判断，自己是否能响应该请求。而实际中判断会更复杂
    h1.handle(req);
	return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式"><span>设计模式</span></a></h2><h3 id="模式定义" tabindex="-1"><a class="header-anchor" href="#模式定义"><span>模式定义</span></a></h3><blockquote><p>使多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合关系。 将这些对象连成<strong>一条链</strong>（链表、职责链），并<strong>沿着这条链传递请求</strong>，直到有一个对象处理它为止。</p><p>——《设计模式》GoF</p></blockquote><h3 id="结构-structure" tabindex="-1"><a class="header-anchor" href="#结构-structure"><span>结构（Structure）</span></a></h3><p>（红色表示稳定）</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
<span class="token keyword">subgraph</span> Handler 职责链的信息接受者
	B<span class="token text string">[HandleRequest]</span><span class="token punctuation">;</span>class B red
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> ConcreteHandler1
	BA<span class="token text string">[HandleRequest]</span>
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> ConcreteHandler2
	BB<span class="token text string">[HandleRequest]</span>
<span class="token keyword">end</span>

Client<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">调用</span><span class="token arrow operator">--&gt;</span></span>B
B<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">successor 指向自身的指针</span><span class="token arrow operator">.-&gt;</span></span>B
B<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>BA
B<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>BB

<span class="token keyword">classDef</span> red <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f9f<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>4px</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="要点总结" tabindex="-1"><a class="header-anchor" href="#要点总结"><span>要点总结</span></a></h3><ul><li>Chain of Responsibility模式的应用场合在于 <strong>“一个请求可能有多个接受者，但是最后真正的接受者只有一个”</strong>， 这时候请求发送者与接受者的耦合有可能出现 “变化脆弱&quot; 的症状，职责链的目的就是将二者解耦，从而更好地应对变化。</li><li>应用了Chain of Responsibility模式后，对象的<strong>职责分派</strong>将更具灵活性。我们可以在<strong>运行时动态</strong>添加/修改请求的处理职责</li><li>如果请求传递到职责链的末尾仍得不到处理，应该有一个合理的缺省机制。这也是每一个接受对象的责任，而不是发出请求的对象的责任。</li></ul><h3 id="个人体会" tabindex="-1"><a class="header-anchor" href="#个人体会"><span>个人体会</span></a></h3><p><strong>也有点过时</strong>。在现在的人看来，这就是一种数据结构的表达而已，而不是模式。但在早期有些观念不是太成熟</p><p>这个模式有点像是：</p><ul><li>Android的事件分发机制</li><li>QT的消息传递机制</li></ul><p>相较于观察者，不需要多个接受者去监听多个信息发送者，解耦程度更高</p>`,30),t=[l];function r(d,c){return n(),s("div",null,t)}const v=e(a,[["render",r],["__file","20. 职责链模式 Chain of Responsibility.html.vue"]]),u=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/20.%20%E8%81%8C%E8%B4%A3%E9%93%BE%E6%A8%A1%E5%BC%8F%20Chain%20of%20Responsibility.html","title":"《C++设计模式》视频_李建忠","lang":"zh-CN","frontmatter":{"description":"《C++设计模式》视频_李建忠 目录 [toc] 职责链模式 Chain of Responsibility 所属分类——“数据结构” 模式 略 动机（Motivation） 简概 在软件构建过程中，一个请求可能被多个对象处理，但是每个请求在运行时只能有一个接受者，如果显式指定，将必不可少地带来请求发送者与接受者的紧耦合 如何使请求的发送者不需要指定具...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/20.%20%E8%81%8C%E8%B4%A3%E9%93%BE%E6%A8%A1%E5%BC%8F%20Chain%20of%20Responsibility.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"《C++设计模式》视频_李建忠"}],["meta",{"property":"og:description","content":"《C++设计模式》视频_李建忠 目录 [toc] 职责链模式 Chain of Responsibility 所属分类——“数据结构” 模式 略 动机（Motivation） 简概 在软件构建过程中，一个请求可能被多个对象处理，但是每个请求在运行时只能有一个接受者，如果显式指定，将必不可少地带来请求发送者与接受者的紧耦合 如何使请求的发送者不需要指定具..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《C++设计模式》视频_李建忠\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"《C++设计模式》视频_李建忠","slug":"《c-设计模式》视频-李建忠","link":"#《c-设计模式》视频-李建忠","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"职责链模式 Chain of Responsibility","slug":"职责链模式-chain-of-responsibility","link":"#职责链模式-chain-of-responsibility","children":[{"level":2,"title":"所属分类——“数据结构” 模式","slug":"所属分类——-数据结构-模式","link":"#所属分类——-数据结构-模式","children":[]},{"level":2,"title":"动机（Motivation）","slug":"动机-motivation","link":"#动机-motivation","children":[{"level":3,"title":"简概","slug":"简概","link":"#简概","children":[]},{"level":3,"title":"代码体现","slug":"代码体现","link":"#代码体现","children":[{"level":4,"title":"举例 - 职责链模式","slug":"举例-职责链模式","link":"#举例-职责链模式","children":[]}]}]},{"level":2,"title":"设计模式","slug":"设计模式","link":"#设计模式","children":[{"level":3,"title":"模式定义","slug":"模式定义","link":"#模式定义","children":[]},{"level":3,"title":"结构（Structure）","slug":"结构-structure","link":"#结构-structure","children":[]},{"level":3,"title":"要点总结","slug":"要点总结","link":"#要点总结","children":[]},{"level":3,"title":"个人体会","slug":"个人体会","link":"#个人体会","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.49,"words":1047},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/03. Tools/02. 管理层/01. 多类管理/设计模式/《C++设计模式》视频_李建忠/20. 职责链模式 Chain of Responsibility.md","autoDesc":true}');export{v as comp,u as data};

import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,a}from"./app-OHhlwNoJ.js";const l={},s=a(`<h1 id="模板模式-template-method" tabindex="-1"><a class="header-anchor" href="#模板模式-template-method"><span>模板模式 Template Method</span></a></h1><p>极简一句话：我定义好一个有多项工作的流程，交给你定义这些工作的内容</p><p>全程 <code>模板方法模式</code>，有时简称 <code>模板方法</code>，有时简称 <code>模板模式</code></p><h2 id="所属分类——-组件协作-模式" tabindex="-1"><a class="header-anchor" href="#所属分类——-组件协作-模式"><span>所属分类——“组件协作” 模式</span></a></h2><ul><li><p>“组件协作” 模式</p><ul><li><p>现代软件专业分工之后的第一个结果是 “框架与应用程序的划分”</p><p>“组件协作” 模式通过<code>晚期绑定</code>，来实现框架与应用程序之间的松耦合，是二者之间协作时常用的模式</p></li><li><p>其实应该是指的是程序库和运行代码之间的协作时的松耦合吧</p></li></ul></li><li><p>典型模式</p><ul><li>模板方法 Template Method</li><li>策略模式 Strategy</li><li>观察模式 Observer（也叫事件模式 Event）</li></ul></li></ul><h2 id="动机-motivation" tabindex="-1"><a class="header-anchor" href="#动机-motivation"><span>动机（Motivation）</span></a></h2><h3 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h3><ul><li>在软件构建过程中，对于某一项任务，它常常有<strong>稳定</strong>的整体操作结构，但各个子步骤却有很多<strong>改变</strong>的需求，或者由于固有的原因（比如框架与应用之间的关系）而无法和任务的整体结构同时实现</li><li>如何在确定稳定操作结构的前提下，来灵活应对各个子步骤的变化或者晚期实现需求？</li></ul><h3 id="核心-提供模板、早绑定变晚绑定" tabindex="-1"><a class="header-anchor" href="#核心-提供模板、早绑定变晚绑定"><span>核心：提供模板、早绑定变晚绑定</span></a></h3><p>比较早绑定变晚绑定</p><ul><li>区别 <ul><li>早绑定：一个晚的东西绑定一个早的东西，即 “晚绑定早”，传统主流写法</li><li>晚绑定：一个早的东西绑定一个晚的东西，面向对象的写法、<strong>Template Method的面向对象设计模式</strong></li></ul></li></ul><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
B<span class="token text string">[Application]</span><span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">写法一_早绑定</span><span class="token arrow operator">--&gt;</span></span>A<span class="token text string">[Library]</span>
C<span class="token text string">[Library]</span><span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">写法二_晚绑定</span><span class="token arrow operator">--&gt;</span></span>D<span class="token text string">[Application]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>比较 <ul><li>这里是假设 “程序主流程”，是属于相对稳定的东西，是一个Template Method</li><li>那么在这个例子中，晚绑定能把变化的东西抽离出来，减少运行代码中需要写的东西</li></ul></li><li>形象比喻 <ul><li>早绑定：我打印了一份表格（早对象），里面大多数空格已经自动填好了，让对方将剩下的内容（晚对象）给填上即可</li><li>晚绑定：我告诉你你需要提交一个表格，大多数内容告诉你了，让对方将自己要自定义的东西给补充进去再顺便把表格给打出来</li></ul></li></ul><h3 id="代码体现" tabindex="-1"><a class="header-anchor" href="#代码体现"><span>代码体现</span></a></h3><p>按一定流程分别实现多个函数，这些函数有的是库类提供的，有的是应用程序开发人员提供的</p><h4 id="举例-写法1" tabindex="-1"><a class="header-anchor" href="#举例-写法1"><span>举例 - 写法1</span></a></h4><p>程序库代码</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 程序库开发人员
class Library{
public:
	void step1(){
		// ...
	}
	void step3(){
		// ...
	}
	void step5(){
        // ...
	}
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应用程序代码</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 应用程序开发人员
class Application{
public:
	bool step2(){
		// ...
	}
	void step4(){
		//...
	}
}

int main()
{
	Library lib();
    Application app();
    
    lib.Step1();

	if (app.step2()){
		lib.Step3();
	}
    
	for (int i = 0; i &lt; 4; i++){
		app.step4();
	}

    lib.step5();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="举例-写法2-template-method的设计模式" tabindex="-1"><a class="header-anchor" href="#举例-写法2-template-method的设计模式"><span>举例 - 写法2（<strong>Template Method的设计模式</strong>）</span></a></h4><p>程序库代码</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 程序库开发人员
class Library{	// 有纯虚函数
public:
	// 稳定template method
    void Run(){
		step1();
        
		if (Step2()){	// 支持变化==&gt;虚函数的多态调用
			step3();
		}
        
		for (int i = 0; i &lt; 4; i++){
			step4();	// 支持变化==&gt;虚函数的多态调用
		}

        step5();
    }
    virtual ~Library(){}
    
protected :
	void Step1() {	// 稳定
		//.....
	}
	void step3() {	// 稳定
		//.....
	}
	void step5(){	// 稳定
		//.....
	}
	virtual bool step2() = 0;	// 变化
    virtual void step4() = 0;	// 变化
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应用程序代码</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>//应用程序开发人员
class Application : public Library {
protected :
	virtual bool step2(){
		//...子类重写实现
	}
	virtual void step4(){
		//...子类重写实现
	}
};

int main()
{
	Library* pLib = new Application();	// 注意这里是个多态指针，声明类型为Library但实际类型却是Application
    									// 当调用虚函数时，就会按照虚函数动态绑定的规则来调用
    lib-&gt;Run;
    delete qLib;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="比较两种写法" tabindex="-1"><a class="header-anchor" href="#比较两种写法"><span>比较两种写法</span></a></h4><ul><li>写法一：结构化软件设计流程 <ul><li>Library开发人员：(1) 开发1、3、5三个步骤</li><li>Application开发人员：(1) 开发2、4两个步骤，(2) 程序主流程</li></ul></li><li>写法二：面向对象软件设计流程（<strong>Template Method的设计模式</strong>） <ul><li>Library开发人员：(1) 开发1、3、5三个步骤，(2) 程序主流程</li><li>Application开发人员：(1) 开发2、4两个步骤</li></ul></li></ul><h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式"><span>设计模式</span></a></h2><h3 id="模式定义" tabindex="-1"><a class="header-anchor" href="#模式定义"><span>模式定义</span></a></h3><blockquote><p>定义一个操作中的算法的骨架**（稳定）<strong>，而将一些步骤延迟</strong>（变化）<strong>到子类中。 Template Method 使得子类可以不改变</strong>（复用）**一个算法的结构即可重定义（override 重写）该算法的某些特定步骤。</p><p>——《设计模式》GoF</p></blockquote><h3 id="结构-structure" tabindex="-1"><a class="header-anchor" href="#结构-structure"><span>结构（Structure）</span></a></h3><p>（红色表示稳定）</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
<span class="token keyword">subgraph</span> AbstractClass 抽象基类
	X<span class="token text string">[TemplateMethod 模板方法]</span><span class="token punctuation">;</span>class X red
	PrimitiveOperation1
	PrimitiveOperation2
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> ConcreteClass 具体类
	PrimitiveOperation1&#39;
	PrimitiveOperation2&#39;
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> -
	PrimitiveOperation1&#39;&#39;
	PrimitiveOperation2&#39;&#39;
<span class="token keyword">end</span>
PrimitiveOperation1<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">被重写</span><span class="token arrow operator">--&gt;</span></span>PrimitiveOperation1&#39;
PrimitiveOperation2<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">被重写</span><span class="token arrow operator">--&gt;</span></span>PrimitiveOperation2&#39;
X<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">调用</span><span class="token arrow operator">--&gt;</span></span>PrimitiveOperation1&#39;&#39;
X<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">调用</span><span class="token arrow operator">--&gt;</span></span>PrimitiveOperation2&#39;&#39;

<span class="token keyword">classDef</span> red <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f9f<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>4px</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结合程序" tabindex="-1"><a class="header-anchor" href="#结合程序"><span>结合程序</span></a></h3><ul><li>稳定的代码写成非虚函数，需要变化的代码写成虚函数</li></ul><p>类曲同工</p><ul><li>如果在C中要做到这一点，就是传函数指针了（其实虚函数调用本质也是调用函数指针）</li><li>如果在js中要做到这一点，可以使用回调函数</li><li>但无疑C++面向对象的写法更加具有抽象性、简洁</li></ul><h3 id="要点总结" tabindex="-1"><a class="header-anchor" href="#要点总结"><span>要点总结</span></a></h3><ul><li>Template Method模式是一种非常基础性的设计模式，在面向对象系统中有着<strong>大量的应用</strong>。它用最简洁的机制（<strong>虚函数的多态性</strong>）为很多应用程序框架提供了灵活的扩展点，是代码复用方面的基本实现结构。</li><li>除了可以灵活应对子步骤的变化外，“不要调用我，让我来调用你” 的<strong>反向控制结构</strong>是Template Method的典型应用。</li><li>在具体实现方面，被Template Method调用的虚方法可以具有实现，也可以没有任何实现（抽象方法、纯虚方法），但一般<strong>推荐将它们设置为protected方法</strong></li></ul>`,39),t=[s];function r(d,o){return n(),i("div",null,t)}const v=e(l,[["render",r],["__file","01. 模板模式 Template Method.html.vue"]]),u=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/01.%20%E6%A8%A1%E6%9D%BF%E6%A8%A1%E5%BC%8F%20Template%20Method.html","title":"模板模式 Template Method","lang":"zh-CN","frontmatter":{"description":"模板模式 Template Method 极简一句话：我定义好一个有多项工作的流程，交给你定义这些工作的内容 全程 模板方法模式，有时简称 模板方法，有时简称 模板模式 所属分类——“组件协作” 模式 “组件协作” 模式 现代软件专业分工之后的第一个结果是 “框架与应用程序的划分” “组件协作” 模式通过晚期绑定，来实现框架与应用程序之间的松耦合，是二...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/01.%20%E6%A8%A1%E6%9D%BF%E6%A8%A1%E5%BC%8F%20Template%20Method.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"模板模式 Template Method"}],["meta",{"property":"og:description","content":"模板模式 Template Method 极简一句话：我定义好一个有多项工作的流程，交给你定义这些工作的内容 全程 模板方法模式，有时简称 模板方法，有时简称 模板模式 所属分类——“组件协作” 模式 “组件协作” 模式 现代软件专业分工之后的第一个结果是 “框架与应用程序的划分” “组件协作” 模式通过晚期绑定，来实现框架与应用程序之间的松耦合，是二..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"模板模式 Template Method\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"模板模式 Template Method","slug":"模板模式-template-method","link":"#模板模式-template-method","children":[{"level":2,"title":"所属分类——“组件协作” 模式","slug":"所属分类——-组件协作-模式","link":"#所属分类——-组件协作-模式","children":[]},{"level":2,"title":"动机（Motivation）","slug":"动机-motivation","link":"#动机-motivation","children":[{"level":3,"title":"简概","slug":"简概","link":"#简概","children":[]},{"level":3,"title":"核心：提供模板、早绑定变晚绑定","slug":"核心-提供模板、早绑定变晚绑定","link":"#核心-提供模板、早绑定变晚绑定","children":[]},{"level":3,"title":"代码体现","slug":"代码体现","link":"#代码体现","children":[{"level":4,"title":"举例 - 写法1","slug":"举例-写法1","link":"#举例-写法1","children":[]},{"level":4,"title":"举例 - 写法2（Template Method的设计模式）","slug":"举例-写法2-template-method的设计模式","link":"#举例-写法2-template-method的设计模式","children":[]},{"level":4,"title":"比较两种写法","slug":"比较两种写法","link":"#比较两种写法","children":[]}]}]},{"level":2,"title":"设计模式","slug":"设计模式","link":"#设计模式","children":[{"level":3,"title":"模式定义","slug":"模式定义","link":"#模式定义","children":[]},{"level":3,"title":"结构（Structure）","slug":"结构-structure","link":"#结构-structure","children":[]},{"level":3,"title":"结合程序","slug":"结合程序","link":"#结合程序","children":[]},{"level":3,"title":"要点总结","slug":"要点总结","link":"#要点总结","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":4.91,"words":1474},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/03. Tools/02. 管理层/01. 多类管理/设计模式/《C++设计模式》视频_李建忠/01. 模板模式 Template Method.md","autoDesc":true}');export{v as comp,u as data};

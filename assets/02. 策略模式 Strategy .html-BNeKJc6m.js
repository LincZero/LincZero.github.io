import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,a as s}from"./app-BDO1bFk4.js";const t={},i=s(`<h1 id="《c-设计模式》视频-李建忠" tabindex="-1"><a class="header-anchor" href="#《c-设计模式》视频-李建忠"><span>《C++设计模式》视频_李建忠</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><p>[toc]</p><h1 id="策略模式-strategy" tabindex="-1"><a class="header-anchor" href="#策略模式-strategy"><span>策略模式 Strategy</span></a></h1><h2 id="所属分类——-组件协作-模式" tabindex="-1"><a class="header-anchor" href="#所属分类——-组件协作-模式"><span>所属分类——“组件协作” 模式</span></a></h2><p>[省略]</p><h2 id="动机-motivation" tabindex="-1"><a class="header-anchor" href="#动机-motivation"><span>动机（Motivation）</span></a></h2><h3 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h3><ul><li>在软件构建过程中，某些对象使用的算法可能多种多样，经常改变，如果将这些算法都编码到对象中，将会使对象变得异常复杂； 而且有时候支持不使用的算法也是一个性能负担。</li><li>如何在运行时根据需要透明地更改对象的算法？将算法与对象本身解耦，从而避免上述问题？</li></ul><h3 id="核心-if分支变成派生类分支" tabindex="-1"><a class="header-anchor" href="#核心-if分支变成派生类分支"><span>核心：if分支变成派生类分支</span></a></h3><p>好处：if分支能随意增减和修改，而不影响基类对象</p><p>——</p><p>还有一种更加改进的方法：创建对象时传参枚举，对象再根据枚举创建对应的派生类</p><ul><li>优点 <ul><li>只用创建一个类再选择一个类型，而不是在一堆类里面选择，使用起来更方便！</li><li>各种枚举值能同事组合，来创建一个具有多种特征的新对象，这点比派生类分支更优！</li><li>修改各种派生类也简单</li></ul></li><li>缺点 <ul><li>增减比修改麻烦一点，但更新库时也只多了修改枚举值这一步而已。弊处不大</li><li>如果是用户修改原库（一般枚举型不能改），创建时使用创建用户的新类，而不通过枚举值的方式。弊处不大</li></ul></li></ul><h3 id="代码体现" tabindex="-1"><a class="header-anchor" href="#代码体现"><span>代码体现</span></a></h3><p>一个税收计算的实例</p><p>考虑时间轴：以后可能会支持更多的国家的计算，当增加 “法国税收” 后</p><h4 id="举例-写法1" tabindex="-1"><a class="header-anchor" href="#举例-写法1"><span>举例 - 写法1</span></a></h4><p>违背了开闭原则（开放封闭原则OCP）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>enum TaxBase {
	CN_Tax,
    us_Tax,
    DE_Tax
    ,FR_Tex											// 【更改】
};

class SalesOrder{
	TaxBase tax;	// 这个是？？？
public:
	double CalculateTax(){
		//...
		if (tax == CN_Tax){			// 中国的税收
			//...
		}
		else if (tax == us_Tax){	// 美国的税收
			//...
		}
		else if (tax == DE_Tax){	// 德国的税收
			//...
		}
        else if (tax == FR_Tax){					// 【更改】法国的税收
			//...
		}
		//...
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="举例-写法2-strategy的写法" tabindex="-1"><a class="header-anchor" href="#举例-写法2-strategy的写法"><span>举例 - 写法2（Strategy的写法）</span></a></h4><p>这里把多个类放在同一文件只是为了方便演示，项目中不推荐这种做法，不同类应在不同的文件中</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class TaxStrategy{					// 抽象基类，含纯虚方法
public:
	virtual double calculate( const Context&amp; context)=0;
    virtual ~TaxStrategy(){}
};

class CNTax : public TaxStrategy{	// 中国
public:
	virtual double calculate(const context&amp; context){
		//...
    }
}

class USTax : public TaxStrategy{	// 美国
public:
	virtual double calculate(const Context&amp; context){
		//...
	}
};

class DETax : public TaxStrategy{	// 德国
public:
	virtual double calculate(const context&amp; context){
        //...
    }
};

class FRTax : public TaxStrategy{					// 【更改】法国的税收
public:
	virtual double calculate(const context&amp; context){
        //...
    }
};

class SaleOrder{
private:
	TaxStrategy* strategy;			// 多态指针
    
public:
	SalesOrder(strategyFactory* strategyFactory){
		this-&gt;strategy = strategyFactory-&gt;NewStrategy();
	}
	~SalesOrder(){
		delete this-&gt;strategy;
    }
	public double calculateTax(){					// 计算税收
		//...
		context context();
        double val = strategy-&gt;Calculate(context);	// 多态调用
        //...
	}
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="比较两种写法" tabindex="-1"><a class="header-anchor" href="#比较两种写法"><span>比较两种写法</span></a></h4><p>考虑时间轴：以后可能会支持更多的国家的计算，当增加 “法国税收” 后</p><ul><li>第一种：违背类<code>开闭原则</code>，复用性少了</li><li>第二种：只需要添加一个新类，遵循了<code>开闭原则</code></li></ul><p>设计模式简介中画图的代码实现也是用到了这个<code>开闭原则</code>和<code>策略模式</code></p><h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式"><span>设计模式</span></a></h2><h3 id="模式定义" tabindex="-1"><a class="header-anchor" href="#模式定义"><span>模式定义</span></a></h3><blockquote><p>定义一系列算法，把它们一个个封装起来，并且使它们可互相替换（<strong>变化</strong>）。 该模式使得算法可独立于使用它的客户程序（<strong>稳定</strong>）而变化（<strong>扩展，子类化</strong>）。</p><p>——《设计模式》GoF</p></blockquote><h3 id="结构-structure" tabindex="-1"><a class="header-anchor" href="#结构-structure"><span>结构（Structure）</span></a></h3><p>（红色表示稳定）</p><p>​ 策略即算法接口，派生出多种不同的算法，以便可以在多种不同的算法之间进行切换</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
<span class="token keyword">subgraph</span> Context
	ContextInterface<span class="token punctuation">;</span>class ContextInterface red
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> Strategy 策略
	X<span class="token text string">[Algorithmlnterface 算法接口]</span><span class="token punctuation">;</span>class X red
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> ConcreteStrategyA
	A<span class="token text string">[Algorithmlnterface]</span>
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> ConcreteStrategyB
	B<span class="token text string">[Algorithmlnterface]</span>
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> ConcreteStrategyC
	C<span class="token text string">[Algorithmlnterface]</span>
<span class="token keyword">end</span>
ContextInterface<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">strategy</span><span class="token arrow operator">--&gt;</span></span>X
X<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>A
X<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>B
X<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>C
<span class="token keyword">classDef</span> red <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f9f<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>4px</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="要点总结" tabindex="-1"><a class="header-anchor" href="#要点总结"><span>要点总结</span></a></h3><ul><li>Strategy及其子类为组件提供了一系列可重用的算法，从而可以使得类型在<strong>运行时</strong>方便地根据需要<strong>在各个算法之间进行切换</strong></li><li>Strategy模式提供了用条件判断语句以外的另一种选择，<strong>消除条件判断语句，就是在解耦合。含有许多条件判断语句的代码通常都需要Strategy模式</strong> （条件判断是结构化编程的一种分而治之的策略，而设计模式提倡的是一种抽象的策略）</li><li>如果Strategy对象没有实例变量，那么各个上下文可以共享同一个Strategy对象，从而节省对象开销</li></ul>`,36),l=[i];function r(d,c){return n(),a("div",null,l)}const p=e(t,[["render",r],["__file","02. 策略模式 Strategy .html.vue"]]),u=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/02.%20%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F%20Strategy%20.html","title":"《C++设计模式》视频_李建忠","lang":"zh-CN","frontmatter":{"description":"《C++设计模式》视频_李建忠 目录 [toc] 策略模式 Strategy 所属分类——“组件协作” 模式 [省略] 动机（Motivation） 简概 在软件构建过程中，某些对象使用的算法可能多种多样，经常改变，如果将这些算法都编码到对象中，将会使对象变得异常复杂； 而且有时候支持不使用的算法也是一个性能负担。 如何在运行时根据需要透明地更改对象的...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/02.%20%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F%20Strategy%20.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"《C++设计模式》视频_李建忠"}],["meta",{"property":"og:description","content":"《C++设计模式》视频_李建忠 目录 [toc] 策略模式 Strategy 所属分类——“组件协作” 模式 [省略] 动机（Motivation） 简概 在软件构建过程中，某些对象使用的算法可能多种多样，经常改变，如果将这些算法都编码到对象中，将会使对象变得异常复杂； 而且有时候支持不使用的算法也是一个性能负担。 如何在运行时根据需要透明地更改对象的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《C++设计模式》视频_李建忠\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"《C++设计模式》视频_李建忠","slug":"《c-设计模式》视频-李建忠","link":"#《c-设计模式》视频-李建忠","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"策略模式 Strategy","slug":"策略模式-strategy","link":"#策略模式-strategy","children":[{"level":2,"title":"所属分类——“组件协作” 模式","slug":"所属分类——-组件协作-模式","link":"#所属分类——-组件协作-模式","children":[]},{"level":2,"title":"动机（Motivation）","slug":"动机-motivation","link":"#动机-motivation","children":[{"level":3,"title":"简概","slug":"简概","link":"#简概","children":[]},{"level":3,"title":"核心：if分支变成派生类分支","slug":"核心-if分支变成派生类分支","link":"#核心-if分支变成派生类分支","children":[]},{"level":3,"title":"代码体现","slug":"代码体现","link":"#代码体现","children":[{"level":4,"title":"举例 - 写法1","slug":"举例-写法1","link":"#举例-写法1","children":[]},{"level":4,"title":"举例 - 写法2（Strategy的写法）","slug":"举例-写法2-strategy的写法","link":"#举例-写法2-strategy的写法","children":[]},{"level":4,"title":"比较两种写法","slug":"比较两种写法","link":"#比较两种写法","children":[]}]}]},{"level":2,"title":"设计模式","slug":"设计模式","link":"#设计模式","children":[{"level":3,"title":"模式定义","slug":"模式定义","link":"#模式定义","children":[]},{"level":3,"title":"结构（Structure）","slug":"结构-structure","link":"#结构-structure","children":[]},{"level":3,"title":"要点总结","slug":"要点总结","link":"#要点总结","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.8,"words":1139},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/03. Tools/02. 管理层/01. 多类管理/设计模式/《C++设计模式》视频_李建忠/02. 策略模式 Strategy .md","autoDesc":true}');export{p as comp,u as data};

import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,a}from"./app-IRYUHD7s.js";const t={},i=a(`<h1 id="《c-设计模式》视频-李建忠" tabindex="-1"><a class="header-anchor" href="#《c-设计模式》视频-李建忠"><span>《C++设计模式》视频_李建忠</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><p>[toc]</p><h1 id="状态模式-state" tabindex="-1"><a class="header-anchor" href="#状态模式-state"><span>状态模式 State</span></a></h1><h2 id="所属分类——-状态变化-模式" tabindex="-1"><a class="header-anchor" href="#所属分类——-状态变化-模式"><span>所属分类——“状态变化” 模式</span></a></h2><ul><li>&quot;状态变化&quot; 模式 <ul><li>在组件构建过程中，<strong>某些对象的状态经常面临变化</strong>，如何对这些变化进行有效的管理？同时又维持高层模块的稳定？ “状态变化&quot; 模式为这一问题提供了一种解决方案</li></ul></li><li>典型模式 <ul><li>状态模式 State</li><li>备忘录模式 Memento</li></ul></li></ul><h2 id="动机-motivation" tabindex="-1"><a class="header-anchor" href="#动机-motivation"><span>动机（Motivation）</span></a></h2><h3 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h3><ul><li>在软件构建过程中，某些对象的<strong>状态如果改变，其行为也会随之而发生变化</strong>， 比如文档处于只读状态，其支持的行为和读写状态支持的行为就可能完全不同。</li><li>如何在运行时根据对象的状态来透明地更改对象的行为？而不会为对象操作和状态转化之间引入紧耦合？</li></ul><h3 id="代码体现" tabindex="-1"><a class="header-anchor" href="#代码体现"><span>代码体现</span></a></h3><p>网络状态</p><h4 id="举例-写法1" tabindex="-1"><a class="header-anchor" href="#举例-写法1"><span>举例 - 写法1</span></a></h4><p>状态枚举</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>enum NetworkState{							// 枚举类型
	Network_Open,
    Network_Close,
    Network_Connect,
    Network_Wait										// 【新增】
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>网络管理器类</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class NetworkProcessor{						// 网络管理器类
	NetworkState state;						// 创建枚举实例
public:
	void Operation1(){						// 操作一
		if( state == Network_Open){			// 若打开
			//***
			state = Network_Close;
		}
		else if (state == Network_Close){	// 若关闭
            //...
            state = Network_Connect;
        }
        else if(state == Network_Connect){	// 若连接
            //$$$
            state = Network_Open;
        }
        else if(...){									// 【新增】
            
        }
    }
    void Operation2(){						// 操作二
		if( state == Network_Open){			// 若打开
			//***
			state = Network_Connect;
		}
		else if (state == Network_Close){	// 若关闭
            //...
            state = Network_Open;
        }
        else if(state == Network_Connect){	// 若连接
            //$$$
            state = Network_Close;
        }
    }
    void Operation3(){						// 操作三
		
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就代码而言很像 “策略模式 Strategy”</p><p>上面代码所存在的问题也是：违背了开闭原则</p><p>而且策略模式也是能够解决if-else</p><h4 id="举例-写法2" tabindex="-1"><a class="header-anchor" href="#举例-写法2"><span>举例 - 写法2</span></a></h4><p>几乎完全换了一种写法</p><p>状态对象。不同状态的next指针不同，切换时用自身包含的next指针代替自身指针</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 【新增】状态的抽象基类（原来是用枚举类型来表示）
class NetworkState{
public:
    NetworkState* pNext;						// 【新增】状态类型指针，用来存储下一个要切换成的状态
    virtual void Operation1()=0;
    virtual void Operation2()=0;
    virtual void Operation3()=0;
    
    virtual ~NetworkState(){}
};

// 状态的具体类
class 0penState: public NetworkState{			// 处于打开状态时，继承NetworkSate
	static NetworkState* m_instance;			// 包含NetworkSate，用来存储下一个要切换成的状态
public:
	static NetworkState* getInstance(){			// getInstace方法，使自身变回下一个要切换成的状态法
		if (m_instance ==nullptr) {				// （如果没有要切换的状态则返回自己）
			m_instance = new 0penState();
		}
		return m_instance;
	}
	void 0peration1(){							// 操作一
		//***
		pNext = CloseState::getInstance();
	}
    void Operation2(){							// 操作二
        //...
        pNext = ConnectState::getInstance();
    }
    void Operation3(){							// 操作三
        //$$$
        pNext = OpenState::getInstance();
    }
};

class CloseState: public NetworkState{			// 处于关闭状态时，继承NetworkSate

};
    
class ConnectState: public NetworkState{		// 处于连接状态时，继承NetworkSate

};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>网络管理器类</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class NetworkProcessor{						// 网络管理器类
	NetworkState* pState;								// 【修改】创建状态对象抽象基类的指针
public:
    NetworkProcessor(NetworkState* pState){				// 【修改】传入当前状态，即状态对象具体类
        this-&gt;pState = pState;
    }
	void Operation1(){						// 操作一
		//...
        pState-&gt;Operation1();							// 【修改】变为多态调用
        pState = pState-&gt;pNext;							// 【【核心】】切换时用自身包含的next指针代替自身指针
        //...
    }
    void Operation2(){						// 操作二
		//...
        pState-&gt;Operation2();							// 【修改】变为多态调用
        pState = pState-&gt;pNext;
        //...
    }
    void Operation3(){						// 操作三
		
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="举例-写法2-1" tabindex="-1"><a class="header-anchor" href="#举例-写法2-1"><span>举例 - 写法2</span></a></h4><p>重构思路</p><ul><li>状态可能会增多，而Operation却相对稳定。所以让状态去继承同一个抽象基类，状态去实现Operation，以便进行扩展</li></ul><p>代码结构</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
B<span class="token text string">[NetworkState 网络状态的抽象基类]</span><span class="token punctuation">;</span>class B red
B1<span class="token text string">[0penState]</span>
B2<span class="token text string">[CloseState]</span>
B3<span class="token text string">[ConnectState]</span>
A<span class="token text string">[NetworkProcessor 网络管理器]</span><span class="token punctuation">;</span>class A red

B<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>B1<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">包含指针</span><span class="token arrow operator">.-&gt;</span></span>C<span class="token text string">[NetworkState指针_存下一个要切换成的状态]</span>
B<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>B2<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">包含指针</span><span class="token arrow operator">.-&gt;</span></span>C
B<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>B3<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">包含指针</span><span class="token arrow operator">.-&gt;</span></span>C
A<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">包含指针</span><span class="token arrow operator">..-&gt;</span></span>C2<span class="token text string">[NetworkState指针_存当前的状态]</span>

<span class="token keyword">classDef</span> red <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f9f<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>4px</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式"><span>设计模式</span></a></h2><h3 id="模式定义" tabindex="-1"><a class="header-anchor" href="#模式定义"><span>模式定义</span></a></h3><blockquote><p>允许一个对象在其内部状态改变时改变它的行为。从而使对象看起来似乎修改了其行为。</p><p>——《设计模式》GoF</p></blockquote><h3 id="结构-structure" tabindex="-1"><a class="header-anchor" href="#结构-structure"><span>结构（Structure）</span></a></h3><p>（红色表示稳定）</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span>
<span class="token keyword">subgraph</span> Context 内容的抽象基类
	A<span class="token text string">[Request]</span><span class="token punctuation">;</span>class A red
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> State 状态的抽象基类
	B<span class="token text string">[Handle]</span><span class="token punctuation">;</span>class B red
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> ConcreteA 状态的具体类A
	B1<span class="token text string">[Handle]</span>
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> ConcreteA 状态的具体类B
	B2<span class="token text string">[Handle]</span>
<span class="token keyword">end</span>

B<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>B1
B<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>B2

<span class="token keyword">classDef</span> red <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f9f<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>4px</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
A<span class="token text string">[Context 内容的抽象基类]</span><span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">包含指针</span><span class="token arrow operator">.-&gt;</span></span>B<span class="token text string">[State 状态的抽象基类]</span><span class="token punctuation">;</span>class A red<span class="token punctuation">;</span>class B red
<span class="token keyword">classDef</span> red <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f9f<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>4px</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="要点总结" tabindex="-1"><a class="header-anchor" href="#要点总结"><span>要点总结</span></a></h3><ul><li>State模式将所有与一个特定状态相关的行为都放入一个State的子类对象中，在对象状态切换时，切换相应的对象； 但同时维持State的接口，这样实现了<strong>具体操作与状态转换之间的解耦</strong>。</li><li>为不同的状态引入不同的对象使得<strong>状态转换变得更加明确</strong>，而且可以保证不会出现状态不一致的情况，因为<strong>转换是原子性的</strong>——即要么彻底转换过来，要么不转换。</li><li>如果State对象没有实例变量，那么各个上下文可以共享同一个State对象，从而节省对象开销。</li></ul><h3 id="个人体会" tabindex="-1"><a class="header-anchor" href="#个人体会"><span>个人体会</span></a></h3><p>和策略模式非常相像。感觉是多了 “状态转换” 的需求，通过状态类包含pNext指针来实现</p>`,41),l=[i];function r(d,o){return n(),s("div",null,l)}const v=e(t,[["render",r],["__file","16. 状态模式 State.html.vue"]]),u=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/16.%20%E7%8A%B6%E6%80%81%E6%A8%A1%E5%BC%8F%20State.html","title":"《C++设计模式》视频_李建忠","lang":"zh-CN","frontmatter":{"description":"《C++设计模式》视频_李建忠 目录 [toc] 状态模式 State 所属分类——“状态变化” 模式 \\"状态变化\\" 模式 在组件构建过程中，某些对象的状态经常面临变化，如何对这些变化进行有效的管理？同时又维持高层模块的稳定？ “状态变化\\" 模式为这一问题提供了一种解决方案 典型模式 状态模式 State 备忘录模式 Memento 动机（Motiva...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/16.%20%E7%8A%B6%E6%80%81%E6%A8%A1%E5%BC%8F%20State.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"《C++设计模式》视频_李建忠"}],["meta",{"property":"og:description","content":"《C++设计模式》视频_李建忠 目录 [toc] 状态模式 State 所属分类——“状态变化” 模式 \\"状态变化\\" 模式 在组件构建过程中，某些对象的状态经常面临变化，如何对这些变化进行有效的管理？同时又维持高层模块的稳定？ “状态变化\\" 模式为这一问题提供了一种解决方案 典型模式 状态模式 State 备忘录模式 Memento 动机（Motiva..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《C++设计模式》视频_李建忠\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"《C++设计模式》视频_李建忠","slug":"《c-设计模式》视频-李建忠","link":"#《c-设计模式》视频-李建忠","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"状态模式 State","slug":"状态模式-state","link":"#状态模式-state","children":[{"level":2,"title":"所属分类——“状态变化” 模式","slug":"所属分类——-状态变化-模式","link":"#所属分类——-状态变化-模式","children":[]},{"level":2,"title":"动机（Motivation）","slug":"动机-motivation","link":"#动机-motivation","children":[{"level":3,"title":"简概","slug":"简概","link":"#简概","children":[]},{"level":3,"title":"代码体现","slug":"代码体现","link":"#代码体现","children":[{"level":4,"title":"举例 - 写法1","slug":"举例-写法1","link":"#举例-写法1","children":[]},{"level":4,"title":"举例 - 写法2","slug":"举例-写法2","link":"#举例-写法2","children":[]},{"level":4,"title":"举例 - 写法2","slug":"举例-写法2-1","link":"#举例-写法2-1","children":[]}]}]},{"level":2,"title":"设计模式","slug":"设计模式","link":"#设计模式","children":[{"level":3,"title":"模式定义","slug":"模式定义","link":"#模式定义","children":[]},{"level":3,"title":"结构（Structure）","slug":"结构-structure","link":"#结构-structure","children":[]},{"level":3,"title":"要点总结","slug":"要点总结","link":"#要点总结","children":[]},{"level":3,"title":"个人体会","slug":"个人体会","link":"#个人体会","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":4.55,"words":1365},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/03. Tools/02. 管理层/01. 多类管理/设计模式/《C++设计模式》视频_李建忠/16. 状态模式 State.md","autoDesc":true}');export{v as comp,u as data};

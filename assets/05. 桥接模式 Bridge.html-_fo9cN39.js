import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as t,c as r,b as n,e as s,d,a as e}from"./app-Ld2qzqw_.js";const c={},p=e(`<h1 id="桥接模式-bridge" tabindex="-1"><a class="header-anchor" href="#桥接模式-bridge"><span>桥接模式 Bridge</span></a></h1><ul><li>极简一句话： <ul><li><s>策略模式：类A包含一个多态基类B指针（例如：订单业务类A包含一个国家税收多态类B指针）</s></li><li><s>装饰模式：多态基类A包含另一多态基类B指针（例如：<strong>业务</strong>多态类A包含一个<strong>业务</strong>多态类B指针）（策略模式Super版，桥接模式同祖先版）</s></li><li>桥接模式：多态基类A包含另一多态基类B指针（例如：<strong>业务</strong>多态类A包含一个<strong>平台</strong>多态类B指针）（策略模式Super版，装饰模式不同祖先版）</li></ul></li></ul><p>“桥接模式”，有时也翻译成 “桥模式”</p><h2 id="所属分类——-单一职责-模式" tabindex="-1"><a class="header-anchor" href="#所属分类——-单一职责-模式"><span>所属分类——“单一职责” 模式</span></a></h2><p>略</p><h2 id="动机-motivation" tabindex="-1"><a class="header-anchor" href="#动机-motivation"><span>动机（Motivation）</span></a></h2><h3 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h3><ul><li>由于某些类型的固有的实现逻辑，使得它们具有两个变化的维度，乃至<strong>多个纬度的变化</strong></li><li>如何应对这种 “多维度的变化&quot; ？如何利用面向对象技术来使得类型可以轻松地沿着两个乃至多个方向变化，而不引入额外的复杂度？</li></ul><h3 id="核心-继承变组合-n-m变n-m" tabindex="-1"><a class="header-anchor" href="#核心-继承变组合-n-m变n-m"><span>核心：继承变组合，n*m变n+m</span></a></h3><h3 id="代码体现" tabindex="-1"><a class="header-anchor" href="#代码体现"><span>代码体现</span></a></h3><p>通信模块，该模块可能在不同的平台（PC、Android、苹果）上有不同的体现</p><h4 id="举例-写法1" tabindex="-1"><a class="header-anchor" href="#举例-写法1"><span>举例 - 写法1</span></a></h4><p>库类代码</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class Messager{											// 信息，方法同时实现平台差异和通用功能，不符合单一职责原则
public:
	virtual void Login(string username,string password )=0;
    virtual void SendMessage(string message)=0;
	virtual void SendPicture( Image image)=0;
	
    virtual void PlaySound( )=0;
	virtual void DrawShape( )=0;
    virtual void writeText( )=0;
    virtual void Connect()=0;
    
    virtual ~Messager(){}
};

// 平台实现
class PCMessagerBase : public Messager{					// PC平台上
public:
	virtual void PlaySound(){
		//...
	}
    virtual void DrawShape(){
        //...
    }
    virtual void WriteText(){
        //...
    }
    virtual void Connect(){
        //...
    }
};

class MobileMessagerBase : public Messager{				// 手机平台上
public:
	virtual void PlaySound(){
		//...
	}
    virtual void DrawShape(){
        //...
    }
    virtual void WriteText(){
        //...
    }
    virtual void Connect(){
        //...
    }
}

// 业务抽象
class PCMessagerLite : public PCMessagerBase {			// PC平台 - 经典版
public:
	virtual void Login(string username, string password){
		PCMessagerBase::Connect();
		//...
	}
	virtual void SendMessage(string message){
		PCMessagerBase::writeText();
		//...
	}
	virtual void SendPicture(Image image){
		PCMessagerBase::DrawShape();
		//...
	}
};

class PCMessagerPerfect : public PCMessagerBase {		// PC平台 - 高级版
public:
	virtual void Login(string username, string password){
        PCMessagerBase::PlaySound();
        //***
		PCMessagerBase::Connect();
		//...
	}
	virtual void SendMessage(string message){
        PCMessagerBase::PlaySound();
        //***
		PCMessagerBase::writeText();
		//...
	}
	virtual void SendPicture(Image image){
        PCMessagerBase::PlaySound();
        //***
		PCMessagerBase::DrawShape();
		//...
	}
};

class MobileMessagerLite : public MobileMessagerBase {	// 手机平台 - 经典版
public:
	virtual void Login(string username, string password){
		MobileMessagerBase::Connect();
		//...
	}
	virtual void SendMessage(string message){
		MobileMessagerBase::writeText();
		//...
	}
	virtual void SendPicture(Image image){
		MobileMessagerBase::DrawShape();
		//...
	}
};

class MobileMessagerPerfect : public MobileMessagerBase {// 手机平台 - 高级版
	//...
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现代码装配</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>void Process(){//编译时装配
    Messager *m = new MobileMessagerPerfect();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分析-写法1" tabindex="-1"><a class="header-anchor" href="#分析-写法1"><span>分析 - 写法1</span></a></h4><p>分析，存在的问题</p>`,18),o=n("ul",null,[n("li",null,[s("和装饰模式写法1的那个例程一样，都是子类数量非常多，这里的数量为"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"1"),n("mo",null,"+"),n("mi",null,"n"),n("mo",null,"+"),n("mi",null,"m"),n("mo",null,"∗"),n("mi",null,"n")]),n("annotation",{encoding:"application/x-tex"},"1+n+m*n")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),n("span",{class:"mord"},"1"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"+"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"+"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4653em"}}),n("span",{class:"mord mathnormal"},"m"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"∗"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4306em"}}),n("span",{class:"mord mathnormal"},"n")])])])]),n("li",null,"Message方法同时实现平台差异和通用功能，不符合单一职责原则")],-1),v=e(`<h4 id="举例-写法2" tabindex="-1"><a class="header-anchor" href="#举例-写法2"><span>举例 - 写法2</span></a></h4><p>库类代码</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class Messager{													// 信息【修改】修改仅实现通用功能而不参与平台实现
public:
	virtual void Login(string username,string password )=0;
    virtual void SendMessage(string message)=0;
	virtual void SendPicture( Image image)=0;
    
    virtual ~Messager(){}
};

class MessagerImp{												//【新增】平台实现。分离原Messager的职责
public:
    virtual void PlaySound( )=0;
	virtual void DrawShape( )=0;
    virtual void writeText( )=0;
    virtual void Connect()=0;
    
    virtual ~MessagerImp(){}
}

// 平台抽象
class PCMessagerBase : public MessagerImp{				// PC平台上，【修改】改为继承Imp类
public:
	virtual void PlaySound(){
		//...
	}
    virtual void DrawShape(){
        //...
    }
    virtual void WriteText(){
        //...
    }
    virtual void Connect(){
        //...
    }
};

class MobileMessagerBase : public MessagerImp{			// 手机平台上，【修改】改为继承Imp类
public:
	virtual void PlaySound(){
		//...
	}
    virtual void DrawShape(){
        //...
    }
    virtual void WriteText(){
        //...
    }
    virtual void Connect(){
        //...
    }
}

// 业务抽象
class MessagerLite : public Messager{					// 通用平台 - 经典版
    MessagerImp* messagerImp;										// 【修改】把*部分*继承变为包含，然后变为基类的多态指针
public:
	virtual void Login(string username, string password){
		messagerImp-&gt;Connect();
		//...
	}
	virtual void SendMessage(string message){
		messagerImp-&gt;writeText();
		//...
	}
	virtual void SendPicture(Image image){
		messagerImp-&gt;DrawShape();
		//...
	}
};

class MessagerPerfect : public Messager{					// 通用平台 - 高级版
    PCMessagerImp* messagerImp;										// 【修改】把*部分*继承变为包含，然后变为基类的多态指针
public:
	virtual void Login(string username, string password){
        messagerImp-&gt;PlaySound();
        //***
		messagerImp-&gt;Connect();
		//...
	}
	virtual void SendMessage(string message){
        messagerImp-&gt;PlaySound();
        //***
		messagerImp-&gt;writeText();
		//...
	}
	virtual void SendPicture(Image image){
        messagerImp-&gt;PlaySound();
        //***
		messagerImp-&gt;DrawShape();
		//...
	}
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现代码装配</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>void Process(){//动态组合装配，这里装配的是：PC平台 + 
    MessagerImp *mImp = new PCMessagerImp();	// PC平台实现
    Messager *m = new Messager(mImp);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分析-写法2" tabindex="-1"><a class="header-anchor" href="#分析-写法2"><span>分析 - 写法2</span></a></h4><p>代码结构</p><ul><li>运行代码：进行动态组装</li></ul><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span>
method <span class="token arrow operator">--&gt;</span> C1<span class="token text string">[new ConcreteImplementor]</span><span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">组装 作为参数传入</span><span class="token arrow operator">--&gt;</span></span>C2<span class="token text string">[new RefinedAbstraction]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>分析</p>`,10),u=n("ul",null,[n("li",null,[s("子类数量减少，类的数量为"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"1"),n("mo",null,"+"),n("mi",null,"n"),n("mo",null,"+"),n("mi",null,"m")]),n("annotation",{encoding:"application/x-tex"},"1+n+m")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),n("span",{class:"mord"},"1"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"+"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"+"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4306em"}}),n("span",{class:"mord mathnormal"},"m")])])]),s("，而运行时仍然有"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n"),n("mo",null,"∗"),n("mi",null,"m")]),n("annotation",{encoding:"application/x-tex"},"n*m")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4653em"}}),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"∗"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4306em"}}),n("span",{class:"mord mathnormal"},"m")])])]),s("的功能多样性")]),n("li",null,"将继承实现分为了平台抽象和业务抽象，这是两个不同的变化方向。代码中业务抽象的实现has-a包含平台抽象")],-1),m=e(`<p>重构思路</p><ul><li>(1) 先把继承A变为包含指针A。然后找到两组不同的地方——包含的指针类型不同</li><li>(2) 把包含指针A变为其父类的指针ParentA，即变为多态</li><li>(3) 对原基类进行职责分离</li><li>(4) 最后再深入改善，提取派生类的共同点 <ul><li>马丁福勒：如果类的多个派生类中有同样的字段，那就要在中间再弄一个中间类来放这些相同的代码</li></ul></li></ul><h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式"><span>设计模式</span></a></h2><h3 id="模式定义" tabindex="-1"><a class="header-anchor" href="#模式定义"><span>模式定义</span></a></h3><blockquote><p>将抽象部分（业务功能）与实现部分（平台实现）分离，使它们都可以独立地变化</p><p>——《设计模式》GoF</p></blockquote><p>个人的话：</p><p>通过聚合，既保证了平台与应用两者的独立变化，同时又保证了两者之间的包含关系。</p><p>聚合像桥梁一样将两者连接到一块，所以这种设计模式又叫做<strong>桥接模式</strong></p><h3 id="结构-structure" tabindex="-1"><a class="header-anchor" href="#结构-structure"><span>结构（Structure）</span></a></h3><blockquote><h4 id="新" tabindex="-1"><a class="header-anchor" href="#新"><span>新</span></a></h4></blockquote><p>原写法</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">classDiagram</span>
	<span class="token keyword">class</span> Message<span class="token punctuation">{</span>
		信息
	<span class="token punctuation">}</span>
	
	Message <span class="token arrow operator">&lt;|--</span> PCMessageBase
	<span class="token keyword">class</span> PCMessageBase<span class="token punctuation">{</span>
		电脑经典版
	<span class="token punctuation">}</span>
	Message <span class="token arrow operator">&lt;|--</span> MobileMessageBase
	<span class="token keyword">class</span> MobileMessageBase<span class="token punctuation">{</span>
		手机经典版
	<span class="token punctuation">}</span>
	Message <span class="token arrow operator">&lt;|--</span> PCMessageLite
	<span class="token keyword">class</span> PCMessageLite<span class="token punctuation">{</span>
		电脑青春版
	<span class="token punctuation">}</span>
	Message <span class="token arrow operator">&lt;|--</span> MobileMessageLite
	<span class="token keyword">class</span> MobileMessageLite<span class="token punctuation">{</span>
		手机青春版
	<span class="token punctuation">}</span>
	Message <span class="token arrow operator">&lt;|--</span> PCMessagePerfect
	<span class="token keyword">class</span> PCMessagePerfect<span class="token punctuation">{</span>
		电脑高级版
	<span class="token punctuation">}</span>
	Message <span class="token arrow operator">&lt;|--</span> MobileMessagePerfect
	<span class="token keyword">class</span> MobileMessagePerfect<span class="token punctuation">{</span>
		手机高级版
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>改写后</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">classDiagram</span>
	<span class="token keyword">class</span> MessagerImp<span class="token punctuation">{</span>
		<span class="token annotation important">&lt;&lt;abstract&gt;&gt;</span>
		负责实现部分，平台实现
		+PlaySound<span class="token punctuation">(</span><span class="token punctuation">)</span>*
		+DrawShape<span class="token punctuation">(</span><span class="token punctuation">)</span>*
		+writeText<span class="token punctuation">(</span><span class="token punctuation">)</span>*
		+Connect<span class="token punctuation">(</span><span class="token punctuation">)</span>*
	<span class="token punctuation">}</span>
	MessagerImp <span class="token arrow operator">&lt;|..</span> PCMessagerBase
	<span class="token keyword">class</span> PCMessagerBase<span class="token punctuation">{</span>
		PC平台
		+PlaySound<span class="token punctuation">(</span><span class="token punctuation">)</span>
		+DrawShape<span class="token punctuation">(</span><span class="token punctuation">)</span>
		+writeText<span class="token punctuation">(</span><span class="token punctuation">)</span>
		+Connect<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	MessagerImp <span class="token arrow operator">&lt;|..</span> MobileMessagerBase
	<span class="token keyword">class</span> MobileMessagerBase<span class="token punctuation">{</span>
		手机平台
		+PlaySound<span class="token punctuation">(</span><span class="token punctuation">)</span>
		+DrawShape<span class="token punctuation">(</span><span class="token punctuation">)</span>
		+writeText<span class="token punctuation">(</span><span class="token punctuation">)</span>
		+Connect<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">class</span> Message<span class="token punctuation">{</span>
		<span class="token annotation important">&lt;&lt;abstract&gt;&gt;</span>
		信息
		负责抽象部分，负责业务功能
		组装中类似于装饰类
		...
		MessagerImp*
		Login<span class="token punctuation">(</span><span class="token punctuation">)</span>*
		SendMessage<span class="token punctuation">(</span><span class="token punctuation">)</span>*
		SendPicture<span class="token punctuation">(</span><span class="token punctuation">)</span>*
	<span class="token punctuation">}</span>
	Message <span class="token arrow operator">&lt;|..</span> MessagerLite
	<span class="token keyword">class</span> MessagerLite<span class="token punctuation">{</span>
		青春版
		...
		MessagerImp* 
		Login<span class="token punctuation">(</span><span class="token punctuation">)</span>
		SendMessage<span class="token punctuation">(</span><span class="token punctuation">)</span>
		SendPicture<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	Message <span class="token arrow operator">&lt;|..</span> MessagerPerfect
	<span class="token keyword">class</span> MessagerPerfect<span class="token punctuation">{</span>
		高级版
		...
		MessagerImp*
		Login<span class="token punctuation">(</span><span class="token punctuation">)</span>
		SendMessage<span class="token punctuation">(</span><span class="token punctuation">)</span>
		SendPicture<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	
	PCMessagerBase <span class="token arrow operator">..</span> object_pc
	MessagerLite <span class="token arrow operator">..</span> object_pc_lite
	object_pc <span class="token arrow operator">&lt;--</span> object_pc_lite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="旧" tabindex="-1"><a class="header-anchor" href="#旧"><span>旧</span></a></h4></blockquote><p>（红色表示稳定）</p><p>其中Implementor与Abstraction之间的关系为桥接</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
<span class="token keyword">subgraph</span> 抽象部分
    <span class="token keyword">subgraph</span> Abstraction 抽象部分的抽象基类
        A<span class="token text string">[Operation]</span><span class="token punctuation">;</span>class A red
    <span class="token keyword">end</span>
    <span class="token keyword">subgraph</span> RefinedAbstraction
        A1<span class="token text string">[Operation]</span>
    <span class="token keyword">end</span>
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> 实现部分
    <span class="token keyword">subgraph</span> Implementor 实现部分的抽象基类
        B<span class="token text string">[OperationImp]</span><span class="token punctuation">;</span>class B red
    <span class="token keyword">end</span>
    <span class="token keyword">subgraph</span> ConcreteImplementorA
        B1<span class="token text string">[OperationImp]</span>
    <span class="token keyword">end</span>
    <span class="token keyword">subgraph</span> ConcreteImplementorB
        B2<span class="token text string">[OperationImp]</span>
    <span class="token keyword">end</span>
<span class="token keyword">end</span>

A<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>A1
A1<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">指针包含 即依赖</span><span class="token arrow operator">.-&gt;</span></span>Z<span class="token text string">(抽象部分具体类)</span>
B<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>B1
B<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>B2

<span class="token keyword">classDef</span> red <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f9f<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>4px</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
Abstraction<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">包含指针 imp</span><span class="token arrow operator">...-&gt;</span></span>Implementor<span class="token punctuation">;</span>class Abstraction red<span class="token punctuation">;</span>class Implementor red
<span class="token keyword">classDef</span> red <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f9f<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>4px</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="要点总结" tabindex="-1"><a class="header-anchor" href="#要点总结"><span>要点总结</span></a></h3><ul><li>Bridge模式使用 “对象间的组合关系&quot; 解耦了抽象和实现之间固有的绑定关系，使得抽象和实现可以沿着各自的维度来变化。 所谓抽象和实现沿着各自纬度的变化，即 “子类化” 它们</li><li>Bridge模式有时候类似于多继承方案，但是<strong>多继承方案往往违背单一职责原则（即一个类只有一个变化的原因）</strong>，复用性比较差。 Bridge模式是比多继承方案更好的解决方法。</li><li>Bridge模式的应用一般在 “两个非常强的变化维度”，有时一个类也有多于两个的变化维度，这时可以使用Bridge的扩展模式</li></ul><h3 id="个人体会" tabindex="-1"><a class="header-anchor" href="#个人体会"><span>个人体会</span></a></h3><h4 id="是抽象部分-abstraction-还是实现部分-implementor" tabindex="-1"><a class="header-anchor" href="#是抽象部分-abstraction-还是实现部分-implementor"><span>是抽象部分（Abstraction）还是实现部分（Implementor）</span></a></h4><blockquote><p>对Window子类的所有操作都是用WindowImp接口中的抽象操作实现的。 这就将<strong>窗口的抽象</strong>与<strong>系统平台相关的实现</strong>部分分离开来。 因此，我们将Window与WindowImp之间的关系称之为桥接，因为它在抽象类与它的实现之间起到了桥梁作用，使它们可以独立地变化。</p><p>——《设计模式：可复用面向对象软件的基础》</p></blockquote><hr><p>Q：桥接（Bridge）是用于把抽象化与实现化解耦。那应选取哪个部分为抽象部分、选取那个部分为实现部分？</p><p>A：new后是抽象的为实现部分？我怎么感觉结构反过来了？</p><ul><li><s>我本来的理解是 Abstraction中（平台）包含Implementor（应用）指针，和https://blog.csdn.net/qq_35423154/article/details/111085839差不多 感觉上是 “抽象”：平台，以及 “实现”：软件 <strong>应用可以不依赖平台单独存在</strong></s></li><li>而李老讲的和《设计模式：可复用面向对象软件的基础》中的是 Abstraction中（软件）包含Implementor（平台）指针 但在例程中，平台实现属于具体实现部分，而业务功能属于抽象部分 平台可以不装应用来单独存在</li></ul><h4 id="包含还是继承" tabindex="-1"><a class="header-anchor" href="#包含还是继承"><span>包含还是继承</span></a></h4><p>桥接模式中</p><ul><li>实现部分（平台）被继承（is-a），可脱离抽象部分（应用）独立存在</li><li>抽象部分（应用）被包含（has-a），不可脱离实现部分（平台）独立存在</li></ul><p>在例子装饰模式中也是同理</p><ul><li>主体部分，其基类被继承，可脱离装饰部分独立存在</li><li>装饰部分，其基类被包含，不可脱离主体部分独立存在</li></ul><h4 id="【对比】decorator与bridge-使用上区分" tabindex="-1"><a class="header-anchor" href="#【对比】decorator与bridge-使用上区分"><span>【对比】Decorator与Bridge（使用上区分）</span></a></h4>`,34),b={href:"https://blog.csdn.net/qq_45570838/article/details/110430680",target:"_blank",rel:"noopener noreferrer"},g=e(`<p>感觉Bridge模式和Decorator模式非常相像</p><ul><li>共同点：都属于 “单一职责” 模式，都能划清职责并解决类爆炸问题。都用到了组合</li><li>桥接模式：？？？（看不懂参考里说的什么意思）</li><li>装饰模式：？？？（看不懂参考里说的什么意思）</li></ul><hr><p>个人的感觉是</p><ul><li>共同点：都属于 “单一职责” 模式，都能划清职责并解决类爆炸问题。都用到了组合</li><li>装饰模式 装配的两个部分是同一个祖先 侧重是在库类的基础上使用组合而不是继承进行<strong>扩展</strong></li><li>桥接模式 装配的两个部分不是同一祖先 侧重在设计库类时将实现部分与抽象部分分离开使两者能分别独立地<strong>变化</strong>、使用时再将他们通过继承+组合的方式结合起来</li></ul><h4 id="【对比】decorator与bridge-代码上" tabindex="-1"><a class="header-anchor" href="#【对比】decorator与bridge-代码上"><span>【对比】Decorator与Bridge（代码上）</span></a></h4><p>从代码角度区分</p><p>使用装饰模式时代码的典型特征</p><ul><li><p>典型特征1</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>DecoratorStream: public Stream{	// 继承Stream的同时	（is-a）
protected:
	Stream* stream;    			// 又包含Stream	（has-a）
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>典型特征2（通过外部接口可以看得出来）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class CryptoStream: public DecoratorStream{			// 其父类
public:
    CryptoStream(Stream* stm):DecoratorStream(stm){	// 和构造器参数是同一个父子类关系
        
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>代码区分</p><ul><li>典型特征1比较 <ul><li>装饰模式：继承主体操作部分而包含装饰部分，两部分的祖先是相同的。代码体现为继承某类的同时又包含同一个类</li><li>桥接模式：继承实现部分而包含抽象部分，两部分的祖先是不相同的</li></ul></li></ul>`,11);function h(k,w){const a=l("ExternalLinkIcon");return t(),r("div",null,[p,o,v,u,m,n("p",null,[s("参考："),n("a",b,[s("【CSDN】桥接模式和装饰者模式的区别及理解"),d(a)])]),g])}const E=i(c,[["render",h],["__file","05. 桥接模式 Bridge.html.vue"]]),A=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/05.%20%E6%A1%A5%E6%8E%A5%E6%A8%A1%E5%BC%8F%20Bridge.html","title":"桥接模式 Bridge","lang":"zh-CN","frontmatter":{"description":"桥接模式 Bridge 极简一句话： 桥接模式：多态基类A包含另一多态基类B指针（例如：业务多态类A包含一个平台多态类B指针）（策略模式Super版，装饰模式不同祖先版） “桥接模式”，有时也翻译成 “桥模式” 所属分类——“单一职责” 模式 略 动机（Motivation） 简概 由于某些类型的固有的实现逻辑，使得它们具有两个变化的维度，乃至多个纬度...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/05.%20%E6%A1%A5%E6%8E%A5%E6%A8%A1%E5%BC%8F%20Bridge.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"桥接模式 Bridge"}],["meta",{"property":"og:description","content":"桥接模式 Bridge 极简一句话： 桥接模式：多态基类A包含另一多态基类B指针（例如：业务多态类A包含一个平台多态类B指针）（策略模式Super版，装饰模式不同祖先版） “桥接模式”，有时也翻译成 “桥模式” 所属分类——“单一职责” 模式 略 动机（Motivation） 简概 由于某些类型的固有的实现逻辑，使得它们具有两个变化的维度，乃至多个纬度..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"桥接模式 Bridge\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"桥接模式 Bridge","slug":"桥接模式-bridge","link":"#桥接模式-bridge","children":[{"level":2,"title":"所属分类——“单一职责” 模式","slug":"所属分类——-单一职责-模式","link":"#所属分类——-单一职责-模式","children":[]},{"level":2,"title":"动机（Motivation）","slug":"动机-motivation","link":"#动机-motivation","children":[{"level":3,"title":"简概","slug":"简概","link":"#简概","children":[]},{"level":3,"title":"核心：继承变组合，n*m变n+m","slug":"核心-继承变组合-n-m变n-m","link":"#核心-继承变组合-n-m变n-m","children":[]},{"level":3,"title":"代码体现","slug":"代码体现","link":"#代码体现","children":[{"level":4,"title":"举例 - 写法1","slug":"举例-写法1","link":"#举例-写法1","children":[]},{"level":4,"title":"分析 - 写法1","slug":"分析-写法1","link":"#分析-写法1","children":[]},{"level":4,"title":"举例 - 写法2","slug":"举例-写法2","link":"#举例-写法2","children":[]},{"level":4,"title":"分析 - 写法2","slug":"分析-写法2","link":"#分析-写法2","children":[]}]}]},{"level":2,"title":"设计模式","slug":"设计模式","link":"#设计模式","children":[{"level":3,"title":"模式定义","slug":"模式定义","link":"#模式定义","children":[]},{"level":3,"title":"结构（Structure）","slug":"结构-structure","link":"#结构-structure","children":[]},{"level":3,"title":"要点总结","slug":"要点总结","link":"#要点总结","children":[]},{"level":3,"title":"个人体会","slug":"个人体会","link":"#个人体会","children":[{"level":4,"title":"是抽象部分（Abstraction）还是实现部分（Implementor）","slug":"是抽象部分-abstraction-还是实现部分-implementor","link":"#是抽象部分-abstraction-还是实现部分-implementor","children":[]},{"level":4,"title":"包含还是继承","slug":"包含还是继承","link":"#包含还是继承","children":[]},{"level":4,"title":"【对比】Decorator与Bridge（使用上区分）","slug":"【对比】decorator与bridge-使用上区分","link":"#【对比】decorator与bridge-使用上区分","children":[]},{"level":4,"title":"【对比】Decorator与Bridge（代码上）","slug":"【对比】decorator与bridge-代码上","link":"#【对比】decorator与bridge-代码上","children":[]}]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":9.3,"words":2790},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/03. Tools/02. 管理层/01. 多类管理/设计模式/《C++设计模式》视频_李建忠/05. 桥接模式 Bridge.md","autoDesc":true}');export{E as comp,A as data};

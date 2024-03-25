import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as a,c as r,b as i,e as n,d as l,a as s}from"./app-DGJmjHtg.js";const v={},c=s('<h1 id="《c-设计模式》视频-李建忠" tabindex="-1"><a class="header-anchor" href="#《c-设计模式》视频-李建忠"><span>《C++设计模式》视频_李建忠</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="设计模式简介" tabindex="-1"><a class="header-anchor" href="#设计模式简介"><span>设计模式简介</span></a></h1><h2 id="学习" tabindex="-1"><a class="header-anchor" href="#学习"><span>学习</span></a></h2><p>网络资料</p>',5),u={href:"https://www.bilibili.com/video/BV1kW411P7KS",target:"_blank",rel:"noopener noreferrer"},o={href:"https://www.runoob.com/design-pattern/factory-pattern.html",target:"_blank",rel:"noopener noreferrer"},m=s(`<p>推荐图书</p><ul><li>历史性著作《设计模式：可复用面向对象软件的基础》，英文名《Design Patterns》，作者GoF（Gang of Four 四巨头）</li><li>《重构——改善既有代码的设计》，作者Martin Fowler（马丁 · 福勒）</li><li>《重构与模式》，作者BufferedStream</li><li>《Head First 设计模式》，这本书弹幕经常在说，豆瓣9.2，应该也是不错的</li></ul><h2 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h2><h3 id="课程目标" tabindex="-1"><a class="header-anchor" href="#课程目标"><span>课程目标</span></a></h3><ul><li>理解松耦合设计思想</li><li>掌握面向对象设计原则</li><li>掌握重构技法改善设计</li><li>掌握GOF核心设计模式</li></ul><h3 id="简概-1" tabindex="-1"><a class="header-anchor" href="#简概-1"><span>简概</span></a></h3><p>注意点：设计模式与语言无关，面向对象语言都适用，Java和C++都能用</p><p>是什么</p><blockquote><p>runoob.com中的解释</p><p>设计模式（<em>Design pattern</em>）代表了最佳的实践，通常被有经验的面向对象的软件开发人员所采用。 设计模式是软件开发人员在软件开发过程中面临的一般问题的解决方案。 这些解决方案是众多软件开发人员经过相当长的一段时间的试验和错误总结出来的。</p></blockquote><p>作用</p><blockquote><p>每一个模式描述了一个在我们周围不断重复发生的问题，以及该问题的解决方案的核心。这样，你就能一次又一次地使用该方案而不必做重复劳动</p><p>——Christopher</p></blockquote><p>GOF设计模式（Gang Of Four 四人组）</p><blockquote><p>历史性著作《设计模式：<strong>可复用</strong>面向对象软件的基础》一书中描述了23种经典面向对象设计模式，创立了模式在软件设计中的地位</p><p>（该书也是推荐教材，英文名《Design Patterns》）</p><p>由于《设计模式》一书确定了设计模式中的地位，通常所说的设计模式隐含地表示 ”面向对象设计模式“ 。但这并不意味 ”设计模式“ 就等于 ”面向对象设计模式“</p></blockquote><h2 id="动机-motivation-、演化与思想" tabindex="-1"><a class="header-anchor" href="#动机-motivation-、演化与思想"><span>动机（Motivation）、演化与思想</span></a></h2><h3 id="面向对象的底层与抽象" tabindex="-1"><a class="header-anchor" href="#面向对象的底层与抽象"><span>面向对象的底层与抽象</span></a></h3><p><strong>重新认识</strong>面向对象</p><p>从面向对象谈起</p><ul><li>底层思维（向下） <ul><li>语言构造</li><li>编译转换</li><li>内存模型</li><li>运行时机制</li></ul></li><li>抽象思维（向上） <ul><li>面向对象</li><li>组件封装</li><li>设计模式</li><li>架构模式</li></ul></li></ul><hr><p>深入理解面向对象</p><ul><li>底层思维（向下）：深入理解三大面向对象机制 <ul><li>封装</li><li>继承</li><li>多态</li></ul></li><li>抽象思维（向上）：深刻把握面向对象机制所带来的抽象意义 <ul><li>理解隔离变化 <ul><li>从宏观层面来看，面向对象的构建方式更能适应软件的变化，能将变化所带来的影响减为最小</li></ul></li><li>各司其职 <ul><li>从微观层面来看，面向对象的方式更强调各个类的“责任”</li><li>由于需求变化导致的新增类型不应该影响原来类型的实现——是所谓各负其责</li></ul></li><li>对象是什么？ <ul><li>从语言实现层面来看，对象封装了代码和数据</li><li>从规格层面讲，对象是一系列可被使用的公共接口</li><li>从概念层面讲，对象是某种拥有责任的抽象</li></ul></li></ul></li></ul><h3 id="软件设计复杂性" tabindex="-1"><a class="header-anchor" href="#软件设计复杂性"><span>软件设计复杂性</span></a></h3><p>软件设计固有</p><blockquote><p>建筑商从来不会去想给一栋已建好的100层高的楼房底下再新修一个小地下室——这样做花费极大而且注定要失败。 然而令人惊奇的是，软件系统的用户在要求作出类似改变时却不会仔细考虑，而且他们认为这只是需要简单编程的事。</p><p>——《Object-Oriented Analysis and Designwith Applications》</p></blockquote><hr><p>软件设计复杂的根本原因——变化</p><ul><li>客户需求的变化</li><li>技术平台的变化</li><li>开发团队的变化</li><li>市场环境的变化</li><li>……</li></ul><hr><p>如何解决复杂性？</p><ul><li>分解 <ul><li>分而治之</li></ul></li><li>抽象 <ul><li>由于不能掌握全部的复杂对象，我们选择忽视它的非本质细节而去处理泛化和理想化了的对象模型</li></ul></li></ul><h3 id="代码体现" tabindex="-1"><a class="header-anchor" href="#代码体现"><span>代码体现</span></a></h3><p>一个绘图的代码实现</p><h4 id="举例-分解写法" tabindex="-1"><a class="header-anchor" href="#举例-分解写法"><span>举例 - 分解写法</span></a></h4><p>Shape.h，类</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>/* 伪代码 */
class Point{
public:
    int x;
    int y;
}

class Line{
public:
    Point start;
    Point end;
    
    Line(const Point&amp; start, const Point&amp; end){
        this-&gt;start = start;
        this-&gt;end = end;
    }
}

class Rect{
public:
	Point leftUp;
    int width;
    int height;

    Rect(const Point&amp; leftup, int width,int height){
		this-&gt;leftUp = leftUp;
		this-&gt;width = width;
        this-&gt;height = height;
	}
};

// 增加Circle类
class Circle{																	// 【改变】
    // ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MainForm.cpp，使用代码，这里没用头文件、直接声明和定义写一块了</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class MainForm : public Form{
private:
	Point p1;
    Point p2;

    vector&lt;Line&gt; lineVector;	// 装Line类型的容器
    vector&lt;Rect&gt; rectVector;	// 装Rect类型的容器
    vector&lt;Circle&gt; circleVector;												// 【改变】
    /** 复习下Vector
     * 向量（Vector）是一个封装了动态大小数组的顺序容器（Sequence Container），特性：
	 * 1.顺序序列
	 * 2.动态数组
	 * 3.能够感知内存分配器的（Allocator-aware）
	 */
public:
	MainForm(){
		//...
	}
    
protected:
	virtual void OnMouseDown( const MouseEventArgs&amp; e);
    virtual void OnMouseUp( const MouseEventArgs&amp; e);
    virtual void OnPaint(const PaintEventArgs&amp; e);
};

void MainForm::OnMouseDown(const MouseEventArgs&amp; e){	// 按下鼠标
	p1.x = e.x;
	p1.y = e.Y;
	//...
	Form::OnMouseDown(e);
}

void MainForm::OnMouseUp(const MouseEventArgs&amp; e){		// 松开鼠标
	p2.x = e.x;
	p2.y = e.Y;
    
    // 针对直线
	if(rdoLine.Checke){
		Line line(p1，p2);
		lineVector.push_back(line);
	}
    // 针对矩形
	else if (rdoRect.Checked){
		int width = abs(p2.x - p1.x);
        int height = abs(p2.y - p1.y);
        Rect rect(p1， width, height);
        rectVector.push_back( rect) ;
	}
    // 针对圆形
    else if(){}																	// 【改变】
    
	// ...
    this-&gt;Refresh();
	Form::OnMouseUp(e);
}

void MainForm::OnPaint(const PaintEventArgs&amp; e){
	// 针对直线
	for (int i = 0; i &lt; lineVector.size(); i++){
		e.Graphics.DrawLine(Pens.Red,
			lineVector[i].start.x,
			lineVector[i].start.y,
            lineVector[i].end.x,
            lineVector[i].end.y);
	}
    
	// 针对矩形
	for (int i = 0; i &lt; rectVector.size(); i++){
		e.Graphics. DrawRectangle(Pens.Red,
			rectVector[i].leftUp,
			rectVector[i].width,
            rectVector[i].height);
    }
    // 针对圆形
    // ...																		// 【改变】
    
    // ...
    Form::OnPaint(e);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="举例-抽象写法" tabindex="-1"><a class="header-anchor" href="#举例-抽象写法"><span>举例 - 抽象写法</span></a></h4><p>Shape.h</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class Shape{				// 有纯虚函数
public:
	virtual void Draw(const Graphics&amp; g)=0;
    virtual ~shape() { }	// 空的虚析构函数
};

class Point{
public:
	int x;
    int y;
};

class Line: public Shape{
public:
	Point start;
    Point end;

    Line( const Point&amp; start,const Point&amp; end){
		this-&gt;start = start;
		this-&gt;end = end;
	}

    // 实现自己的Draw，负责画自己
	virtual void Draw( const Graphics&amp; g) override{
		g.DrawLine(Pens.Red,
		start.x,start.y,end.x, end.y );
	}
}；
    
class Rect: public shape{
public:
	Point leftup;
    int width;
    int height;

    Rect(const Point&amp; leftup, int width，int height){
		this-&gt;leftUp = leftUp;
		this-&gt;width = width;this-&gt;height = height;
    }

    //实现自己的Draw，负责画自己
	virtual void Draw( const Graphics&amp; g){
		g. DrawRectangle(Pens.Red,
			leftUp ,width,height);
	}
};

// 增加Circle类
class Circle: public shape{														// 【改变】
    // ...
    //实现自己的Draw，负责画自己
	virtual void Draw( const Graphics&amp; g){
    // ...
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MainForm.cpp</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class MainForm : public Form{
private:
	Point p1;
    Point p2;

    // 针对所有形状
	vector&lt;Shape*&gt; shapeVector;	// 注意这里是指针，因为这里需要多态性！这里要既可以存直线又可以存矩形

public:
	MainForm( ){
		// ...
	}
    
protected:
	virtual void OnMouseDown( const MouseEventArgs&amp; e);
    virtual void OnMouseup( const MouseEventArgs&amp; e);
    virtual void OnPaint( const PaintEventArgs&amp; e);
};

void MainForm::OnMouseDown( const MouseEventArgs&amp; e){
	p1.x = e.X;
	p1.y = e.Y;
	//...
	Form: : OnMouseDown(e);
}

void MainForm::OnMouseUp( const MouseEventArgs&amp; e){
	p2.x = e.x;
	p2.y = e.Y;
    // 针对直线
	if (rdoLine.checked){
		shapeVector. push_back( new Line(p1,p2));
	}
    // 针对矩形
	else if (rdoRect.Checked){
		int width = abs(p2.x - p1.x);
        int height = abs(p2.y - p1.y);
        shapeVector.push_back(new Rect(p1, width, height));
    }
    // 针对圆形
    else if(){}																	// 【改变】

    // ...
    this-&gt;Refresh();
    Form::OnMouseUp(e);
}

void MainForm : : OnPaint( const PaintEventArgs&amp; e){
	// 针对所有形状
	for (int i = 0; i &lt; shapeVector.size(); i++){
		shapeVector[i]-&gt;Draw(e.Graphics);
        /** 多态调用，各负其责。
         * 注：这里的shapeVector类型是vector&lt;Shape*&gt;，掉用方法时，
         * 因为是纯虚函数，所以最后回调用派生对象中重写的方法
         */
	}
	//...
	Form: :OnPaint(e);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="比较两种写法" tabindex="-1"><a class="header-anchor" href="#比较两种写法"><span>比较两种写法</span></a></h4><p>哪种设计好？直接看貌似不相伯仲。但假设，有一种变化，比如客户需要新增一个绘制圆形的功能</p><ul><li>分解：修改4处，Shape.h 1处，MainForm.cpp 3处</li><li>抽象：修改2处，Shape.h 1处，MainForm.cpp 1处，耦合更低（如果用到工厂设计模式，甚至在MainForm.cpp不需要改变）</li></ul><p>第二种写法的同用性更好，需求变更时修改更少</p><h2 id="学设计模式的一些个人体会" tabindex="-1"><a class="header-anchor" href="#学设计模式的一些个人体会"><span>学设计模式的一些个人体会</span></a></h2><ul><li>设计模式用的好，代码就扩展性更好</li><li>什么是好的软件设计？软件设计的金科玉律：<strong>复用！</strong></li><li>变化是复用的天敌，面向对象设计最大的优势在于：<strong>抵御变化！</strong></li><li>产业强盛的标志：<strong>接口标准化！</strong></li><li>设计模式本质 当算法全部都是不稳定的，或者全部都是稳定的，那设计模式就没有意义了 设计模式最大的作用是在变化和稳定之间寻找隔离点，分离他们，从而来管理变化</li><li>复用的误解 复用指的是编译级别的原封不动，追加和复制源代码到别处都不算复用</li><li>依赖的误解 A依赖B，是指A编译的时候B必须要存在才能编译通过。一般这里说的依赖特指编译时依赖而不是运行时依赖</li><li>条件判断 条件判断是结构化编程的一种分而治之的策略，而设计模式提倡的是一种抽象的策略 <strong>消除条件判断语句，就是在解耦合。含有许多条件判断语句的代码通常都需要Strategy模式</strong> 看到if-else可能是一种bad smell，除非if-else是比较稳定不变的，比如一周只有七天，那可以用</li><li>C++不推荐多继承，多继承带来很多耦合性的问题。但是可以继承一个主基类，其他都是辅助抽象基类接口</li></ul><p>我在实战中可能会接触得比较多的：</p><ul><li>单例模式，这个可以说是最常用的</li><li>策略模式，之前弄ipv4和ipv6不同行为时用过 装饰模式，同上</li><li>观察者模式，很多语言或框架都有这个</li><li>适配器模式，很久以前弄Android程序时接触过</li><li>代理模式，很多语言或框架都有这个，像 Vue3 使用的 js 的 proxy</li><li>工厂模式？</li></ul>`,50);function b(p,h){const e=d("ExternalLinkIcon");return a(),r("div",null,[c,i("ul",null,[i("li",null,[n("视频："),i("a",u,[n("【B站】23个设计模式"),l(e)]),n("（该笔记也主要依赖该视频来写）")]),i("li",null,[i("a",o,[n("【菜鸟】设计模式"),l(e)]),n("（话说这里有33种设计模式，怎么比23种还多出10种）")])]),m])}const A=t(v,[["render",b],["__file","00.1. 设计模式简介.html.vue"]]),f=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/00.1.%20%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E7%AE%80%E4%BB%8B.html","title":"《C++设计模式》视频_李建忠","lang":"zh-CN","frontmatter":{"description":"《C++设计模式》视频_李建忠 目录 设计模式简介 学习 网络资料 视频：【B站】23个设计模式（该笔记也主要依赖该视频来写） 【菜鸟】设计模式（话说这里有33种设计模式，怎么比23种还多出10种） 推荐图书 历史性著作《设计模式：可复用面向对象软件的基础》，英文名《Design Patterns》，作者GoF（Gang of Four 四巨头） 《重...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/00.1.%20%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E7%AE%80%E4%BB%8B.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"《C++设计模式》视频_李建忠"}],["meta",{"property":"og:description","content":"《C++设计模式》视频_李建忠 目录 设计模式简介 学习 网络资料 视频：【B站】23个设计模式（该笔记也主要依赖该视频来写） 【菜鸟】设计模式（话说这里有33种设计模式，怎么比23种还多出10种） 推荐图书 历史性著作《设计模式：可复用面向对象软件的基础》，英文名《Design Patterns》，作者GoF（Gang of Four 四巨头） 《重..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《C++设计模式》视频_李建忠\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"《C++设计模式》视频_李建忠","slug":"《c-设计模式》视频-李建忠","link":"#《c-设计模式》视频-李建忠","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"设计模式简介","slug":"设计模式简介","link":"#设计模式简介","children":[{"level":2,"title":"学习","slug":"学习","link":"#学习","children":[]},{"level":2,"title":"简概","slug":"简概","link":"#简概","children":[{"level":3,"title":"课程目标","slug":"课程目标","link":"#课程目标","children":[]},{"level":3,"title":"简概","slug":"简概-1","link":"#简概-1","children":[]}]},{"level":2,"title":"动机（Motivation）、演化与思想","slug":"动机-motivation-、演化与思想","link":"#动机-motivation-、演化与思想","children":[{"level":3,"title":"面向对象的底层与抽象","slug":"面向对象的底层与抽象","link":"#面向对象的底层与抽象","children":[]},{"level":3,"title":"软件设计复杂性","slug":"软件设计复杂性","link":"#软件设计复杂性","children":[]},{"level":3,"title":"代码体现","slug":"代码体现","link":"#代码体现","children":[{"level":4,"title":"举例 - 分解写法","slug":"举例-分解写法","link":"#举例-分解写法","children":[]},{"level":4,"title":"举例 - 抽象写法","slug":"举例-抽象写法","link":"#举例-抽象写法","children":[]},{"level":4,"title":"比较两种写法","slug":"比较两种写法","link":"#比较两种写法","children":[]}]}]},{"level":2,"title":"学设计模式的一些个人体会","slug":"学设计模式的一些个人体会","link":"#学设计模式的一些个人体会","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":8.28,"words":2484},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/03. Tools/02. 管理层/01. 多类管理/设计模式/《C++设计模式》视频_李建忠/00.1. 设计模式简介.md","autoDesc":true}');export{A as comp,f as data};

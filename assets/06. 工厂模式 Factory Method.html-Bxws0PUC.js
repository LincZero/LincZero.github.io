import{_ as r,c as a,e as t,b as n,a as i,o as s,r as d}from"./app-DOwvp1dV.js";const c={};function v(o,e){const l=d("Mermaid");return s(),a("div",null,[e[0]||(e[0]=t(`<h1 id="工厂模式-factory-method" tabindex="-1"><a class="header-anchor" href="#工厂模式-factory-method"><span>工厂模式 Factory Method</span></a></h1><p>全程 <code>工厂方法模式</code>，有时简称 <code>工厂方法</code>，有时简称 <code>工厂模式</code></p><h2 id="所属分类——-对象创建-模式" tabindex="-1"><a class="header-anchor" href="#所属分类——-对象创建-模式"><span>所属分类——“对象创建” 模式</span></a></h2><ul><li>“对象创建” 模式 <ul><li>通过 “对象创建” 模式绕开new，来避免对象创建（new）过程中所导致的紧耦合（依赖具体类），从而支持对象创建的稳定。 它是接口抽象之后的第一步工作。</li></ul></li><li>典型模式 <ul><li>工厂模式 Factory Method</li><li>抽象工厂 Abstract Factory</li><li>原型模式 Prototype</li><li>构建器 Builder</li></ul></li></ul><h2 id="动机-motivation" tabindex="-1"><a class="header-anchor" href="#动机-motivation"><span>动机（Motivation）</span></a></h2><h3 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h3><ul><li>在软件系统中，经常面临着创建对象的工作；由于需求的变化，需要创建的对象的具体类型经常变化</li><li>如何应对这种变化？如何绕过常规的对象创建方法（new），提供一种 “封装机制&quot; 来避免客户程序和这种 “具体对象创建工作&quot; 的紧耦合？</li></ul><h3 id="核心-对象的晚创建-原来的早创建对象由工厂类进行代替" tabindex="-1"><a class="header-anchor" href="#核心-对象的晚创建-原来的早创建对象由工厂类进行代替"><span>核心：对象的晚创建，原来的早创建对象由工厂类进行代替</span></a></h3><h3 id="代码体现" tabindex="-1"><a class="header-anchor" href="#代码体现"><span>代码体现</span></a></h3><p>还是文件分割器</p><p>考虑时间线：假设现在只支持二进制分割、以后支持文本分割、图片分割等</p><h4 id="举例-写法1" tabindex="-1"><a class="header-anchor" href="#举例-写法1"><span>举例 - 写法1</span></a></h4><p>低层的具体类代码</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class FileSplitter
{
public:
	void split( ){
		//...
	}
};

class TxtSplitter{
    
};

class PictureSplitter{
    
};

class VideoSplitter{
    
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>高层类代码</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class MainForm : public Form
{   
public:
	void Button1_click(){
		string filePath = txtFilePath-&gt;getText();
		int number = atoi(txtFileNumber-&gt;getText().c_str());
	
        FileSplitter* splitter=new FileSplitter(filePath,number);	// 【缺陷】声明成具体类
		splitter-&gt;split();
	}
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分析-写法1" tabindex="-1"><a class="header-anchor" href="#分析-写法1"><span>分析 - 写法1</span></a></h4><p>声明成具体类就意味着不支持未来的变化、定死了</p><h4 id="举例-写法2" tabindex="-1"><a class="header-anchor" href="#举例-写法2"><span>举例 - 写法2</span></a></h4><p>低层的抽象基类（分割器与工厂）【新增】</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>/* 分割器的抽象基类 */
class ISplitter{													// 【新增】定义抽象基类，其他类继承此类
public:
    virtual void split()=0;
    virtual ~ISplitter(){}
};

/* 【抽象基类】定义工厂类 */
class SplitterFactory{												// 【新增】工厂类的抽象基类
public:
    /*ISplitter CreateSplitter(){									// 不行，间接依赖还是会依赖了具体类
        return new ISplitter();
    }*/
    virtual ISplitter CreateSplitter()=0; // 作用返回具体类
    virtual ~SplitterFactory(){}
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>低层的具体类（分割器与工厂）</p><div class="language-C++ line-numbers-mode" data-ext="C++" data-title="C++"><pre class="language-C++"><code>/* 具体分割器 */
class BinarySplitter : public ISplitter
{
public:
	void split( ){
		//...
	}
};

class TxtSplitter : public ISplitter{
    
};

class PictureSplitter : public ISplitter{
    
};

class VideoSplitter : public ISplitter{
    
};

/* 具体工厂	*/
class BinarySplitterFactory: public SplitterFactory{				// 【新增】工厂类的具体类
public:
    virtual ISplitter* CreateSplitter(){
        return new BinarySplitter();
    }
}

class TxtSplitterFactory: public SplitterFactory{
public:
    virtual ISplitter* CreateSplitter(){
        return new TxtSplitter();
    }
}

class PictureSplitterFactory: public SplitterFactory{
public:
    virtual ISplitter* CreateSplitter(){
        return new PictureSplitter();
    }
}

class VideoSplitterFactory: public SplitterFactory{
public:
    virtual ISplitter* CreateSplitter(){
        return new VideoSplitter();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>高层类代码</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class MainForm : public Form
{
    SplitterFactory* factory;										//【新增】工厂模式抽象基类（多态指针）
public:
    MainForm(SplitterFactory* factory){								// 【修改】构造函数传入工厂模式的具体类来动态指定多态指针
        this-&gt;factory=factory;
    }
    
	void Button1_click(){
		string filePath = txtFilePath-&gt;getText();
		int number = atoi(txtFileNumber-&gt;getText().c_str());
        // FileSplitter* splitter=new FileSplitter(filePath,number);// 原写法，声明成具体类，不行
        // ISplitter* splitter=new BinarySplitter(filePath,number);	// 这种写法后面还是依赖了具体类
        // ISplitter* splitter=new ISplitter();						// 也不行
        // ISplitter splitter();									// 也不行
        ISplitter* splitter = factory-&gt;CreateSplitter();			//【修改】多态new，面向接口编程，用方法来返回对象
		splitter-&gt;split();
	}
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分析-写法2" tabindex="-1"><a class="header-anchor" href="#分析-写法2"><span>分析 - 写法2</span></a></h4><p>（红色表示稳定）</p><p>代码结构</p>`,28)),n(l,{id:"mermaid-121",code:"eJxLL0osyFAIceIqLk2CsJ/sWv50cuPL5hVPO9q4OD2DC3IyS0pSi6LhLAWgxNPOTU9nrng+q+VZ194XGxc+nb/r+cbdsdbJOYnFxQoIlUWpKVwKQAAX0dV9tmXf8ynzdXXtnDLzEosqYRI4lYVUlBBUE5CZXFJalApXl5qXgvDP0+1Ln/Y1wfwDU+OWmFySX1QZjcaHqsbhMXTFIO+hm4jsQ8NoVE9ClcTi1WQUjeRlonQYR6MFAFwXKCC4nAx19ZyLUhNLUl/sn/J09jw9XTtnQw0IG9V9mlxORphqjaBqkZwFVGiMqdAYqhDNNZpcXODgc0lNA4WYQlpmTo6Vcpplmk5xSVF+dqqVsrGxMZStW56ZUpJhZVJQYc0FAAXwG00="}),e[1]||(e[1]=i("p",null,"运行时",-1)),n(l,{id:"mermaid-125",code:"eJx1kM9OwkAQxs/dp/AF9hU81LM3b8YDhkZOYirei4A00hgif5Q2lpLYtNGDEBOQQsPLdGa3b+HARglRbpPdL9/vN3NhFq5KByc6u745VzMO29nXG8xCeLiFxixLO2KyYNqRaRQqZRP7c/zscS5XXfB8zg+ZliURdKrCrW/TxmVxW5i/P4skoue8FoN9xzT9FP16bgUwiM/WTW05cvBpCvYLRC1w+vDqolVFp5k/2huCksH7VE5GMEyoSn0SO12Jbiw/QuUD1nKXrcp/wMdGpVQubhJMzZyD7cEiIYKIW78LwHyaLQNohITX2T48uQ9caKbYG8txjTwovXMm9vc0BPR8DNZ7/eP+DeZe5/Q="}),e[2]||(e[2]=t('<p><code>面向接口编程</code>的一个显著特点是变量声明为抽象基类，写法2符合这一点，而且符合了<code>依赖倒置原则</code>——依赖抽象而不是实现细节</p><p>而且绕过了new方式以避开对具体类的依赖</p><p><mark>Q</mark>：为什么运行函数不直接传入Splitter进高层模块里</p><h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式"><span>设计模式</span></a></h2><h3 id="模式定义" tabindex="-1"><a class="header-anchor" href="#模式定义"><span>模式定义</span></a></h3><blockquote><p>定义一个用于创建对象的接口，让子类决定实例化哪一个类。 Factory Method使得一个类的实例化延迟（目的：解耦，手段︰虚函数）到子类。</p><p>——《设计模式》GoF</p></blockquote><h3 id="结构-structure" tabindex="-1"><a class="header-anchor" href="#结构-structure"><span>结构（Structure）</span></a></h3><blockquote><h4 id="新" tabindex="-1"><a class="header-anchor" href="#新"><span>新</span></a></h4></blockquote><p>原写法</p>',9)),n(l,{id:"mermaid-160",code:"eJxLzkksLnbJTEwvSszlAnMU3DJzUoMLcjJLSlKLoEIhFSVoIgGZySWlRejqwjJTUvPhYgBRziLF"}),e[3]||(e[3]=i("p",null,"修改后",-1)),n(l,{id:"mermaid-164",code:"eJxLzkksLnbJTEwvSszlAnMUPIMLcjJLSlKLqrk4bWwSk4pLihKTS+zsuDifdrQ97dz0dOaK57NanrZuf7J38vONu7k4i0HqNTS1uGq54HoVbGr09BScMvMSiyphYlDzUQWBljzZ1fNi/+ynHdvg5mOaFFJRgmYMkgjQjGfT2p/NWYPHgLDMlNR8NCNQxICGvFje9nLRRGRDoAphatyAAZFfVIk7YBR0FZ5uX/q0rwkcMM5FqYklqTDNwBBChC3QbDRDsYUYVAprwCHcghl++J1B2BVIYYvqBEwJzLCn1HKUWEG1HpsUZryR4AAu1DBVsNHVxREFSD4Hq8ISRCiuAyvC6hUAEZVwFA=="}),e[4]||(e[4]=i("p",null,"使用时",-1)),e[5]||(e[5]=i("blockquote",null,[i("p",null,"这个例子其实比较难说明使用的意义，"),i("p",null,"只能说用BinarySplitterFactory代替BinarySplitter，使得BinarySplitter的创建由在main中延迟到了在MainForm中"),i("p",null,"使用场景有点类似于Web图片的懒加载、插件本体的慢加载等")],-1)),n(l,{id:"mermaid-179",code:"eJxLzkksLnbJTEwvSszlAnMUchMz87hAhIKurp2CU2ZeYlFlcEFOZklJapFbYnJJflElQtoXyHDLL8q1UniyZ8HT7Uuf9jU937ibiwurNiwGQu3Eqryai9O5KDWxJBUmrqGp4AnXWIvLEhtdXbizoMbDuEAT0VRrKaRBvcTpVFpSkp8Xn5yTmZwNtKkotaS0KA/FQgARW2+1"}),e[6]||(e[6]=i("blockquote",null,[i("h4",{id:"旧",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#旧"},[i("span",null,"旧")])])],-1)),e[7]||(e[7]=i("p",null,"（红色表示稳定）",-1)),n(l,{id:"mermaid-188",code:"eJxLL0osyFAIceIqLk2CsJ2LUhNL8osUnm5f+rSv6VnX3hcbFz6dv+v5xt1cnI7RbonJQMlK39SSjPyUWOvknMTiYgVHhaLUFKCsY7Rjnn9BalFiSWZ+Xqyunq6jk0ZAUX5KaXKJLYpGTZhGsE4YxwlsTGpeCpJj8vOSi1JLUlEd9bR1+5O9kyEuMkRzEshWQ0cNoKbSojyFvNRyuBlQl2ii2gAVVXiya/nTyY2o3nWKhsrCPIrHhajmILnQyTAaTU0s2ARHXd1nW/Y9nzJfV1fXztGQywmJr2vnZMjlaKir+2L/lKez50H4XGA3uKSmgRyhkJaZk2OlnGaZplNcUpSfnWqlbGxsDGXrlmemlGRYmRRUWHMBAMttwVo="}),e[8]||(e[8]=t('<h3 id="结合代码" tabindex="-1"><a class="header-anchor" href="#结合代码"><span>结合代码</span></a></h3><ul><li>Product相当于例程的ISplitter，ConcreteProduct相当于例程的BinarySplitter等类</li><li>Creator相当于例程的SplitterFactory，ConcreteCreaotr相当于例程的SplitterFactory等类</li></ul><h3 id="要点总结" tabindex="-1"><a class="header-anchor" href="#要点总结"><span>要点总结</span></a></h3><ul><li>Factory Method模式用于<strong>隔离类对象的使用者和具体类型</strong>之间的耦合关系。面对一个经常变化的具体类型，紧耦合关系（new）会导致软件的脆弱</li><li>Factory Method模式通过面向对象的手法，将所要创建的具体对象工作<strong>延迟</strong>到子类，从而实现一种<strong>扩展</strong>（而非更改）的策略，较好地解决了这种紧耦合关系</li><li>Factory Method模式解决 “单个对象” 的需求变化。缺点在于要求创建方法/参数相同</li></ul>',4))])}const p=r(c,[["render",v],["__file","06. 工厂模式 Factory Method.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/06.%20%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F%20Factory%20Method.html","title":"工厂模式 Factory Method","lang":"zh-CN","frontmatter":{"description":"工厂模式 Factory Method 全程 工厂方法模式，有时简称 工厂方法，有时简称 工厂模式 所属分类——“对象创建” 模式 “对象创建” 模式 通过 “对象创建” 模式绕开new，来避免对象创建（new）过程中所导致的紧耦合（依赖具体类），从而支持对象创建的稳定。 它是接口抽象之后的第一步工作。 典型模式 工厂模式 Factory Method...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/01.%20DesignAndDevelop/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/06.%20%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F%20Factory%20Method.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"工厂模式 Factory Method"}],["meta",{"property":"og:description","content":"工厂模式 Factory Method 全程 工厂方法模式，有时简称 工厂方法，有时简称 工厂模式 所属分类——“对象创建” 模式 “对象创建” 模式 通过 “对象创建” 模式绕开new，来避免对象创建（new）过程中所导致的紧耦合（依赖具体类），从而支持对象创建的稳定。 它是接口抽象之后的第一步工作。 典型模式 工厂模式 Factory Method..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"工厂模式 Factory Method\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"工厂模式 Factory Method","slug":"工厂模式-factory-method","link":"#工厂模式-factory-method","children":[{"level":2,"title":"所属分类——“对象创建” 模式","slug":"所属分类——-对象创建-模式","link":"#所属分类——-对象创建-模式","children":[]},{"level":2,"title":"动机（Motivation）","slug":"动机-motivation","link":"#动机-motivation","children":[{"level":3,"title":"简概","slug":"简概","link":"#简概","children":[]},{"level":3,"title":"核心：对象的晚创建，原来的早创建对象由工厂类进行代替","slug":"核心-对象的晚创建-原来的早创建对象由工厂类进行代替","link":"#核心-对象的晚创建-原来的早创建对象由工厂类进行代替","children":[]},{"level":3,"title":"代码体现","slug":"代码体现","link":"#代码体现","children":[{"level":4,"title":"举例 - 写法1","slug":"举例-写法1","link":"#举例-写法1","children":[]},{"level":4,"title":"分析 - 写法1","slug":"分析-写法1","link":"#分析-写法1","children":[]},{"level":4,"title":"举例 - 写法2","slug":"举例-写法2","link":"#举例-写法2","children":[]},{"level":4,"title":"分析 - 写法2","slug":"分析-写法2","link":"#分析-写法2","children":[]}]}]},{"level":2,"title":"设计模式","slug":"设计模式","link":"#设计模式","children":[{"level":3,"title":"模式定义","slug":"模式定义","link":"#模式定义","children":[]},{"level":3,"title":"结构（Structure）","slug":"结构-structure","link":"#结构-structure","children":[]},{"level":3,"title":"结合代码","slug":"结合代码","link":"#结合代码","children":[]},{"level":3,"title":"要点总结","slug":"要点总结","link":"#要点总结","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":5.48,"words":1645},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Develop/03. Tools/02. 管理层/01. 多类管理/设计模式/《C++设计模式》视频_李建忠/06. 工厂模式 Factory Method.md","excerpt":"\\n<p>全程 <code>工厂方法模式</code>，有时简称 <code>工厂方法</code>，有时简称 <code>工厂模式</code></p>\\n<h2>所属分类——“对象创建” 模式</h2>\\n<ul>\\n<li>“对象创建” 模式\\n<ul>\\n<li>通过 “对象创建” 模式绕开new，来避免对象创建（new）过程中所导致的紧耦合（依赖具体类），从而支持对象创建的稳定。\\n它是接口抽象之后的第一步工作。</li>\\n</ul>\\n</li>\\n<li>典型模式\\n<ul>\\n<li>工厂模式 Factory Method</li>\\n<li>抽象工厂 Abstract Factory</li>\\n<li>原型模式 Prototype</li>\\n<li>构建器 Builder</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/01. DesignAndDevelop/Develop/03. Tools/02. 管理层/01. 多类管理/设计模式/《C++设计模式》视频_李建忠/06. 工厂模式 Factory Method.md","value":{"title":"06. 工厂模式 Factory Method","path":"MdNote_Public/01. DesignAndDevelop/Develop/03. Tools/02. 管理层/01. 多类管理/设计模式/《C++设计模式》视频_李建忠/06. 工厂模式 Factory Method.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{p as comp,m as data};

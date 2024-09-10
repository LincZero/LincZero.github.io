import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as r,c as a,a as e,d as s,e as i}from"./app-CKlzH9Ze.js";const c={},d=i('<h1 id="《c-设计模式》视频-李建忠" tabindex="-1"><a class="header-anchor" href="#《c-设计模式》视频-李建忠"><span>《C++设计模式》视频_李建忠</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><p>[toc]</p><h1 id="原型模式-prototype" tabindex="-1"><a class="header-anchor" href="#原型模式-prototype"><span>原型模式 Prototype</span></a></h1><p>也有叫克隆模式的</p><h2 id="所属分类——-对象创建-模式" tabindex="-1"><a class="header-anchor" href="#所属分类——-对象创建-模式"><span>所属分类——“对象创建” 模式</span></a></h2>',6),p={class:"ab-note drop-shadow"},v={class:"markdown-rendered"},o=i(`<h2 id="动机-motivation" tabindex="-1"><a class="header-anchor" href="#动机-motivation"><span>动机（Motivation）</span></a></h2><h3 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h3><ul><li>在软件系统中，经常面临着 “某些结构复杂的对象” 的创建工作； 由于需求的变化，这些对象经常面临着剧烈的变化，但是它们却拥有比较稳定一致的接口。</li><li>如何应对这种变化？如何向 “客户程序（使用这些对象的程序）” 隔离出 “这些易变对象” ，从而使得 “依赖这些易变对象的客户程序&quot; 不随着需求改变而改变？</li></ul><h3 id="代码体现" tabindex="-1"><a class="header-anchor" href="#代码体现"><span>代码体现</span></a></h3><p>文件分割器的例子</p><h4 id="举例-写法1-工厂方法" tabindex="-1"><a class="header-anchor" href="#举例-写法1-工厂方法"><span>举例 - 写法1（工厂方法）</span></a></h4><p>抽象基类（产品类和工厂类）ISplitterFactory.cpp</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>//抽象类
class ISplitter{
public:
	virtual void split( )=0;
    virtual ~ISplitter(){}
};

//工厂基类
class splitterFactory{
public:
	virtual ISplitter* CreateSplitter( )=0;
    virtual ~SplitterFactory( ){}
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体类</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>/* 具体分割器 */
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
class BinarySplitterFactory: public SplitterFactory{
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>高层类</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class MainForm : public Form
{
    SplitterFactory* factory;
public:
    MainForm(SplitterFactory* factory){
        this-&gt;factory=factory;
    }

	void Button1_click(){
		string filePath = txtFilePath-&gt;getText();
		int number = atoi(txtFileNumber-&gt;getText().c_str());
        ISplitter* splitter = factory-&gt;CreateSplitter();
		splitter-&gt;split();
	}
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="举例-写法2-原型模式" tabindex="-1"><a class="header-anchor" href="#举例-写法2-原型模式"><span>举例 - 写法2（原型模式）</span></a></h4><p>抽象基类（合并了产品类和工厂类的抽象基类）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class ISplitter{								// 【修改】把产品类和工厂类合并起来了，为原型对象的抽象基类
public:
	virtual void split( )=0;
	virtual ISplitter* clone()=0;				// 【修改】更改Create函数名为clone，通过克隆自己来创建对象

    virtual ~ISplitter(){}
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体类（合并了产品类和工厂类的具体类）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class BinarySplitter : public ISplitter			// 【修改】合并原具体分割器和工厂，为原型对象的具体类
{
public:
	void split( ){
		//...
	}
    virtual ISplitter* clone(){					// 【修改】克隆，通过拷贝构造函数的方式
        return new BinarySplitter(*this);
    }
};

class TxtSplitter : public ISplitter{
    virtual ISplitter* clone(){
        return new TxtSplitter(*this);
    }
};

class PictureSplitter : public ISplitter{
    virtual ISplitter* clone(){
        return new PictureSplitter(*this);
    }
};

class VideoSplitter : public ISplitter{
    virtual ISplitter* clone(){
        return new VideoSplitter(*this);
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>高层类</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class MainForm : public Form
{
    ISplitter* prototype;							// 【修改】声明为原型对象（原来是声明为工厂对象）
public:
    MainForm(SplitterFactory* prototype){			// 【修改】传入prototype
        this-&gt;factory=factory;
    }

	void Button1_click(){
        ISplitter* splitter = prototype-&gt;clone();	// 【修改】克隆原型，通过克隆原型得到新对象（原型对象不能直接使用，只是用来克隆的）
		prototype-&gt;split();
	}
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式"><span>设计模式</span></a></h2><h3 id="模式定义" tabindex="-1"><a class="header-anchor" href="#模式定义"><span>模式定义</span></a></h3><blockquote><p>使用<strong>原型实例</strong>指定创建对象的种类，然后通过拷贝（深克隆）这些原型来创建新的对象。</p><p>——《设计模式》GoF</p></blockquote><h3 id="结构-structure" tabindex="-1"><a class="header-anchor" href="#结构-structure"><span>结构（Structure）</span></a></h3><p>（红色表示稳定）</p>`,24),u=i('<h3 id="要点总结" tabindex="-1"><a class="header-anchor" href="#要点总结"><span>要点总结</span></a></h3><ul><li>Prototype模式同样用于隔离类对象的使用者和具体类型（易变类）之间的耦合关系，它同样要求这些 “易变类” 拥有 “稳定的接口” （这点和Factory Method一样）</li><li>Prototype模式对于 “如何创建易变类的实体对象&quot; 采用 “原型克隆&quot; 的方法来做，它使得我们可以非常灵活地动态创建 “拥有某些稳定接口&quot; 的新对象——所需工作仅仅是注册一个新类的对象（即原型），然后在任何需要的地方Clone （这点和Factory Method不同）</li><li>Prototype模式中的Clone方法可以利用某些框架中的序列化来实现深拷贝</li></ul><h3 id="个人体会" tabindex="-1"><a class="header-anchor" href="#个人体会"><span>个人体会</span></a></h3><h4 id="【对比】原型模式和工厂方法" tabindex="-1"><a class="header-anchor" href="#【对比】原型模式和工厂方法"><span>【对比】原型模式和工厂方法</span></a></h4><p>当对象结构比较复杂，原型模式只需要定好状态，克隆出来就可以了</p><p>用得不如工厂模式多</p>',6);function b(m,h){const t=l("mermaid");return r(),a("div",null,[d,e("div",p,[e("div",v,[e("div",null,[o,s(t,{id:"mermaid-74",code:"eJyFz81Kw0AQwPFz9ykGeqngFpJ4McVAEu9K8VZ6iMnGBpfdZbNFe/YDseCpeujBoCdBUIuCqOjbJKlvYdL4hSLeBuY3f5gN6YkerDko7q9Xs0sjwhSkV+fZwX1+eY1qdmdFEOmpiLNuy6deHIMNkgSIsODrblVyxeVAEEiPkvR0mI93s8Pn6eQsTR7zyROqOR2fclas94av4/0KZScP2e3xR9X5XXU58yVR5LOuFSGtKnX/oXpB9e8U2YCb05udfHTRxBbY7YaAJRClV4XHllvaOeRgnN295KMEY8vRcGEdrd2QpK8kA5+LAfAQYkLDH1SfUf0PimZPLpOw/BLCiFKzHi6G87GSfJOYdcMw3me8FQWqZy6I7RZ6A9REojg="}),u])])])])}const y=n(c,[["render",b],["__file","08. 原型模式 Prototype.html.vue"]]),g=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/08.%20%E5%8E%9F%E5%9E%8B%E6%A8%A1%E5%BC%8F%20Prototype.html","title":"《C++设计模式》视频_李建忠","lang":"zh-CN","frontmatter":{"description":"《C++设计模式》视频_李建忠 目录 [toc] 原型模式 Prototype 也有叫克隆模式的 所属分类——“对象创建” 模式 动机（Motivation） 简概 在软件系统中，经常面临着 “某些结构复杂的对象” 的创建工作； 由于需求的变化，这些对象经常面临着剧烈的变化，但是它们却拥有比较稳定一致的接口。 如何应对这种变化？如何向 “客户程序（使用...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/08.%20%E5%8E%9F%E5%9E%8B%E6%A8%A1%E5%BC%8F%20Prototype.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"《C++设计模式》视频_李建忠"}],["meta",{"property":"og:description","content":"《C++设计模式》视频_李建忠 目录 [toc] 原型模式 Prototype 也有叫克隆模式的 所属分类——“对象创建” 模式 动机（Motivation） 简概 在软件系统中，经常面临着 “某些结构复杂的对象” 的创建工作； 由于需求的变化，这些对象经常面临着剧烈的变化，但是它们却拥有比较稳定一致的接口。 如何应对这种变化？如何向 “客户程序（使用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《C++设计模式》视频_李建忠\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"《C++设计模式》视频_李建忠","slug":"《c-设计模式》视频-李建忠","link":"#《c-设计模式》视频-李建忠","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"原型模式 Prototype","slug":"原型模式-prototype","link":"#原型模式-prototype","children":[{"level":2,"title":"所属分类——“对象创建” 模式","slug":"所属分类——-对象创建-模式","link":"#所属分类——-对象创建-模式","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.32,"words":995},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/03. Tools/02. 管理层/01. 多类管理/设计模式/《C++设计模式》视频_李建忠/08. 原型模式 Prototype.md","excerpt":"\\n<h1>目录</h1>\\n<p>[toc]</p>\\n<h1>原型模式 Prototype</h1>\\n<p>也有叫克隆模式的</p>\\n<h2>所属分类——“对象创建” 模式</h2>\\n<div class=\\"ab-note drop-shadow\\"><div class=\\"markdown-rendered\\"><div><h2>动机（Motivation）</h2>\\n<h3>简概</h3>\\n<ul>\\n<li>在软件系统中，经常面临着 “某些结构复杂的对象” 的创建工作；\\n由于需求的变化，这些对象经常面临着剧烈的变化，但是它们却拥有比较稳定一致的接口。</li>\\n<li>如何应对这种变化？如何向 “客户程序（使用这些对象的程序）” 隔离出 “这些易变对象” ，从而使得 “依赖这些易变对象的客户程序\\" 不随着需求改变而改变？</li>\\n</ul>\\n<h3>代码体现</h3>\\n<p>文件分割器的例子</p>\\n<h4>举例 - 写法1（工厂方法）</h4>\\n<p>抽象基类（产品类和工厂类）ISplitterFactory.cpp</p>\\n<div class=\\"language-c++\\" data-ext=\\"c++\\" data-title=\\"c++\\"><pre class=\\"language-c++\\"><code>//抽象类\\nclass ISplitter{\\npublic:\\n\\tvirtual void split( )=0;\\n    virtual ~ISplitter(){}\\n};\\n\\n//工厂基类\\nclass splitterFactory{\\npublic:\\n\\tvirtual ISplitter* CreateSplitter( )=0;\\n    virtual ~SplitterFactory( ){}\\n};\\n</code></pre></div><p>具体类</p>\\n<div class=\\"language-c++\\" data-ext=\\"c++\\" data-title=\\"c++\\"><pre class=\\"language-c++\\"><code>/* 具体分割器 */\\nclass BinarySplitter : public ISplitter\\n{\\npublic:\\n\\tvoid split( ){\\n\\t\\t//...\\n\\t}\\n};\\n\\nclass TxtSplitter : public ISplitter{\\n\\n};\\n\\nclass PictureSplitter : public ISplitter{\\n\\n};\\n\\nclass VideoSplitter : public ISplitter{\\n\\n};\\n\\n/* 具体工厂\\t*/\\nclass BinarySplitterFactory: public SplitterFactory{\\npublic:\\n    virtual ISplitter* CreateSplitter(){\\n        return new BinarySplitter();\\n    }\\n}\\n\\nclass TxtSplitterFactory: public SplitterFactory{\\npublic:\\n    virtual ISplitter* CreateSplitter(){\\n        return new TxtSplitter();\\n    }\\n}\\n\\nclass PictureSplitterFactory: public SplitterFactory{\\npublic:\\n    virtual ISplitter* CreateSplitter(){\\n        return new PictureSplitter();\\n    }\\n}\\n\\nclass VideoSplitterFactory: public SplitterFactory{\\npublic:\\n    virtual ISplitter* CreateSplitter(){\\n        return new VideoSplitter();\\n    }\\n}\\n</code></pre></div><p>高层类</p>\\n<div class=\\"language-c++\\" data-ext=\\"c++\\" data-title=\\"c++\\"><pre class=\\"language-c++\\"><code>class MainForm : public Form\\n{\\n    SplitterFactory* factory;\\npublic:\\n    MainForm(SplitterFactory* factory){\\n        this-&gt;factory=factory;\\n    }\\n\\n\\tvoid Button1_click(){\\n\\t\\tstring filePath = txtFilePath-&gt;getText();\\n\\t\\tint number = atoi(txtFileNumber-&gt;getText().c_str());\\n        ISplitter* splitter = factory-&gt;CreateSplitter();\\n\\t\\tsplitter-&gt;split();\\n\\t}\\n};\\n</code></pre></div><h4>举例 - 写法2（原型模式）</h4>\\n<p>抽象基类（合并了产品类和工厂类的抽象基类）</p>\\n<div class=\\"language-c++\\" data-ext=\\"c++\\" data-title=\\"c++\\"><pre class=\\"language-c++\\"><code>class ISplitter{\\t\\t\\t\\t\\t\\t\\t\\t// 【修改】把产品类和工厂类合并起来了，为原型对象的抽象基类\\npublic:\\n\\tvirtual void split( )=0;\\n\\tvirtual ISplitter* clone()=0;\\t\\t\\t\\t// 【修改】更改Create函数名为clone，通过克隆自己来创建对象\\n\\n    virtual ~ISplitter(){}\\n};\\n</code></pre></div><p>具体类（合并了产品类和工厂类的具体类）</p>\\n<div class=\\"language-c++\\" data-ext=\\"c++\\" data-title=\\"c++\\"><pre class=\\"language-c++\\"><code>class BinarySplitter : public ISplitter\\t\\t\\t// 【修改】合并原具体分割器和工厂，为原型对象的具体类\\n{\\npublic:\\n\\tvoid split( ){\\n\\t\\t//...\\n\\t}\\n    virtual ISplitter* clone(){\\t\\t\\t\\t\\t// 【修改】克隆，通过拷贝构造函数的方式\\n        return new BinarySplitter(*this);\\n    }\\n};\\n\\nclass TxtSplitter : public ISplitter{\\n    virtual ISplitter* clone(){\\n        return new TxtSplitter(*this);\\n    }\\n};\\n\\nclass PictureSplitter : public ISplitter{\\n    virtual ISplitter* clone(){\\n        return new PictureSplitter(*this);\\n    }\\n};\\n\\nclass VideoSplitter : public ISplitter{\\n    virtual ISplitter* clone(){\\n        return new VideoSplitter(*this);\\n    }\\n};\\n</code></pre></div><p>高层类</p>\\n<div class=\\"language-c++\\" data-ext=\\"c++\\" data-title=\\"c++\\"><pre class=\\"language-c++\\"><code>class MainForm : public Form\\n{\\n    ISplitter* prototype;\\t\\t\\t\\t\\t\\t\\t// 【修改】声明为原型对象（原来是声明为工厂对象）\\npublic:\\n    MainForm(SplitterFactory* prototype){\\t\\t\\t// 【修改】传入prototype\\n        this-&gt;factory=factory;\\n    }\\n\\n\\tvoid Button1_click(){\\n        ISplitter* splitter = prototype-&gt;clone();\\t// 【修改】克隆原型，通过克隆原型得到新对象（原型对象不能直接使用，只是用来克隆的）\\n\\t\\tprototype-&gt;split();\\n\\t}\\n};\\n</code></pre></div><h2>设计模式</h2>\\n<h3>模式定义</h3>\\n<blockquote>\\n<p>使用<strong>原型实例</strong>指定创建对象的种类，然后通过拷贝（深克隆）这些原型来创建新的对象。</p>\\n<p>——《设计模式》GoF</p>\\n</blockquote>\\n<h3>结构（Structure）</h3>\\n<p>（红色表示稳定）</p>\\n<h3>要点总结</h3>\\n<ul>\\n<li>Prototype模式同样用于隔离类对象的使用者和具体类型（易变类）之间的耦合关系，它同样要求这些 “易变类” 拥有 “稳定的接口”\\n（这点和Factory Method一样）</li>\\n<li>Prototype模式对于 “如何创建易变类的实体对象\\" 采用 “原型克隆\\" 的方法来做，它使得我们可以非常灵活地动态创建 “拥有某些稳定接口\\" 的新对象——所需工作仅仅是注册一个新类的对象（即原型），然后在任何需要的地方Clone\\n（这点和Factory Method不同）</li>\\n<li>Prototype模式中的Clone方法可以利用某些框架中的序列化来实现深拷贝</li>\\n</ul>\\n<h3>个人体会</h3>\\n<h4>【对比】原型模式和工厂方法</h4>\\n<p>当对象结构比较复杂，原型模式只需要定好状态，克隆出来就可以了</p>\\n<p>用得不如工厂模式多</p>\\n</div></div></div>","autoDesc":true}');export{y as comp,g as data};

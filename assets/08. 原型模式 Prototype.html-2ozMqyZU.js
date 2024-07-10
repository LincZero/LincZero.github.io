import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,e as l}from"./app-D9NcyM5y.js";const s={},t=l(`<h1 id="《c-设计模式》视频-李建忠" tabindex="-1"><a class="header-anchor" href="#《c-设计模式》视频-李建忠"><span>《C++设计模式》视频_李建忠</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><p>[toc]</p><h1 id="原型模式-prototype" tabindex="-1"><a class="header-anchor" href="#原型模式-prototype"><span>原型模式 Prototype</span></a></h1><p>也有叫克隆模式的</p><h2 id="所属分类——-对象创建-模式" tabindex="-1"><a class="header-anchor" href="#所属分类——-对象创建-模式"><span>所属分类——“对象创建” 模式</span></a></h2><p>[省略]</p><h2 id="动机-motivation" tabindex="-1"><a class="header-anchor" href="#动机-motivation"><span>动机（Motivation）</span></a></h2><h3 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h3><ul><li>在软件系统中，经常面临着 “某些结构复杂的对象” 的创建工作； 由于需求的变化，这些对象经常面临着剧烈的变化，但是它们却拥有比较稳定一致的接口。</li><li>如何应对这种变化？如何向 “客户程序（使用这些对象的程序）” 隔离出 “这些易变对象” ，从而使得 “依赖这些易变对象的客户程序&quot; 不随着需求改变而改变？</li></ul><h3 id="代码体现" tabindex="-1"><a class="header-anchor" href="#代码体现"><span>代码体现</span></a></h3><p>文件分割器的例子</p><h4 id="举例-写法1-工厂方法" tabindex="-1"><a class="header-anchor" href="#举例-写法1-工厂方法"><span>举例 - 写法1（工厂方法）</span></a></h4><p>抽象基类（产品类和工厂类）ISplitterFactory.cpp</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>//抽象类
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式"><span>设计模式</span></a></h2><h3 id="模式定义" tabindex="-1"><a class="header-anchor" href="#模式定义"><span>模式定义</span></a></h3><blockquote><p>使用<strong>原型实例</strong>指定创建对象的种类，然后通过拷贝（深克隆）这些原型来创建新的对象。</p><p>——《设计模式》GoF</p></blockquote><h3 id="结构-structure" tabindex="-1"><a class="header-anchor" href="#结构-structure"><span>结构（Structure）</span></a></h3><p>（红色表示稳定）</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
<span class="token keyword">subgraph</span> Client 客户端
	A<span class="token text string">[Operation]</span><span class="token punctuation">;</span>class A red
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> Protorype 原型的抽象基类
	B<span class="token text string">[clone 克隆原型方法]</span><span class="token punctuation">;</span>class B red
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> ConcreteProtorype1
	B1<span class="token text string">[clone]</span>
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> ConcreteProtorype2
	B2<span class="token text string">[clone]</span>
<span class="token keyword">end</span>

A <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">调用</span><span class="token arrow operator">.-&gt;</span></span> AR<span class="token punctuation">(</span>p = prototype<span class="token arrow operator">-&gt;</span>Clone<span class="token punctuation">)</span>
B<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>B1<span class="token arrow operator">-.-&gt;</span>B1R<span class="token text string">(reutrn copy of self)</span>
B<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>B2<span class="token arrow operator">-.-&gt;</span>B2R<span class="token text string">(reutrn copy of self)</span>

<span class="token keyword">classDef</span> red <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f9f<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>4px</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="要点总结" tabindex="-1"><a class="header-anchor" href="#要点总结"><span>要点总结</span></a></h3><ul><li>Prototype模式同样用于隔离类对象的使用者和具体类型（易变类）之间的耦合关系，它同样要求这些 “易变类” 拥有 “稳定的接口” （这点和Factory Method一样）</li><li>Prototype模式对于 “如何创建易变类的实体对象&quot; 采用 “原型克隆&quot; 的方法来做，它使得我们可以非常灵活地动态创建 “拥有某些稳定接口&quot; 的新对象——所需工作仅仅是注册一个新类的对象（即原型），然后在任何需要的地方Clone （这点和Factory Method不同）</li><li>Prototype模式中的Clone方法可以利用某些框架中的序列化来实现深拷贝</li></ul><h3 id="个人体会" tabindex="-1"><a class="header-anchor" href="#个人体会"><span>个人体会</span></a></h3><h4 id="【对比】原型模式和工厂方法" tabindex="-1"><a class="header-anchor" href="#【对比】原型模式和工厂方法"><span>【对比】原型模式和工厂方法</span></a></h4><p>当对象结构比较复杂，原型模式只需要定好状态，克隆出来就可以了</p><p>用得不如工厂模式多</p>`,38),a=[t];function r(d,c){return n(),i("div",null,a)}const o=e(s,[["render",r],["__file","08. 原型模式 Prototype.html.vue"]]),u=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/08.%20%E5%8E%9F%E5%9E%8B%E6%A8%A1%E5%BC%8F%20Prototype.html","title":"《C++设计模式》视频_李建忠","lang":"zh-CN","frontmatter":{"description":"《C++设计模式》视频_李建忠 目录 [toc] 原型模式 Prototype 也有叫克隆模式的 所属分类——“对象创建” 模式 [省略] 动机（Motivation） 简概 在软件系统中，经常面临着 “某些结构复杂的对象” 的创建工作； 由于需求的变化，这些对象经常面临着剧烈的变化，但是它们却拥有比较稳定一致的接口。 如何应对这种变化？如何向 “客户...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/08.%20%E5%8E%9F%E5%9E%8B%E6%A8%A1%E5%BC%8F%20Prototype.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"《C++设计模式》视频_李建忠"}],["meta",{"property":"og:description","content":"《C++设计模式》视频_李建忠 目录 [toc] 原型模式 Prototype 也有叫克隆模式的 所属分类——“对象创建” 模式 [省略] 动机（Motivation） 简概 在软件系统中，经常面临着 “某些结构复杂的对象” 的创建工作； 由于需求的变化，这些对象经常面临着剧烈的变化，但是它们却拥有比较稳定一致的接口。 如何应对这种变化？如何向 “客户..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《C++设计模式》视频_李建忠\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"《C++设计模式》视频_李建忠","slug":"《c-设计模式》视频-李建忠","link":"#《c-设计模式》视频-李建忠","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"原型模式 Prototype","slug":"原型模式-prototype","link":"#原型模式-prototype","children":[{"level":2,"title":"所属分类——“对象创建” 模式","slug":"所属分类——-对象创建-模式","link":"#所属分类——-对象创建-模式","children":[]},{"level":2,"title":"动机（Motivation）","slug":"动机-motivation","link":"#动机-motivation","children":[{"level":3,"title":"简概","slug":"简概","link":"#简概","children":[]},{"level":3,"title":"代码体现","slug":"代码体现","link":"#代码体现","children":[{"level":4,"title":"举例 - 写法1（工厂方法）","slug":"举例-写法1-工厂方法","link":"#举例-写法1-工厂方法","children":[]},{"level":4,"title":"举例 - 写法2（原型模式）","slug":"举例-写法2-原型模式","link":"#举例-写法2-原型模式","children":[]}]}]},{"level":2,"title":"设计模式","slug":"设计模式","link":"#设计模式","children":[{"level":3,"title":"模式定义","slug":"模式定义","link":"#模式定义","children":[]},{"level":3,"title":"结构（Structure）","slug":"结构-structure","link":"#结构-structure","children":[]},{"level":3,"title":"要点总结","slug":"要点总结","link":"#要点总结","children":[]},{"level":3,"title":"个人体会","slug":"个人体会","link":"#个人体会","children":[{"level":4,"title":"【对比】原型模式和工厂方法","slug":"【对比】原型模式和工厂方法","link":"#【对比】原型模式和工厂方法","children":[]}]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.32,"words":995},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/03. Tools/02. 管理层/01. 多类管理/设计模式/《C++设计模式》视频_李建忠/08. 原型模式 Prototype.md","autoDesc":true}');export{o as comp,u as data};

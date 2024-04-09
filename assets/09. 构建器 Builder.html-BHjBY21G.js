import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,a}from"./app-IRYUHD7s.js";const i={},l=a(`<h1 id="《c-设计模式》视频-李建忠" tabindex="-1"><a class="header-anchor" href="#《c-设计模式》视频-李建忠"><span>《C++设计模式》视频_李建忠</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><p>[toc]</p><h1 id="构建器-builder" tabindex="-1"><a class="header-anchor" href="#构建器-builder"><span>构建器 Builder</span></a></h1><p><mark>（注意，李建忠视频中关于这集的剪辑有问题。</mark></p><p><mark>（观看顺序：0:00~9:12 - 13:00~17:00 - 9:12~13:00 - 17:00~END）</mark></p><h2 id="所属分类——-对象创建-模式" tabindex="-1"><a class="header-anchor" href="#所属分类——-对象创建-模式"><span>所属分类——“对象创建” 模式</span></a></h2><p>[省略]</p><h2 id="动机-motivation" tabindex="-1"><a class="header-anchor" href="#动机-motivation"><span>动机（Motivation）</span></a></h2><h3 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h3><ul><li>在软件系统中，有时候面临着 “一个复杂对象&quot; 创建工作，其通常由各个部分的子对象用一定的算法构成； 由于需求的变化，这个复杂对象的各个部分经常面临着剧烈的变化，但是将它们组合在一起的算法却相对稳定（听起来有点像Template Method）</li><li>如何应对这种变化？如何提供一种 “封装机制&quot; 来隔离出 “复杂对象的各个部分” 的变化，从而保持系统中的 “稳定构建算法&quot; 不随着需求改变而改变？</li></ul><h3 id="代码体现" tabindex="-1"><a class="header-anchor" href="#代码体现"><span>代码体现</span></a></h3><h4 id="举例-写法1" tabindex="-1"><a class="header-anchor" href="#举例-写法1"><span>举例 - 写法1</span></a></h4><p>抽象基类</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class House {
public:
    /** 然后注意一下
     *
     * C++比较特殊
     * 这里的Init不能改写成构造函数House()
     * 如果在C++中构造函数调用虚函数，会完成 &quot;静态绑定&quot;
     * 而虚函数还没定义，最后会报错
     * 而且子类构造要先调用父类构造，程序就不对了
     * 
     * 但在Java、C#中，会是 &quot;动态绑定&quot;，可以将这里写成构造函数
     */
	void Init(){						// 初始化，有点像Template Method
		this-&gt;BuildPart1();
		for (int i = 0; i &lt; 4; i++){
			this-&gt;BuildPart2();
		}
        bool flag=this-&gt;BuildPart3();
        if(flag){
			this-&gt;BuildPart4();
		}
		this-&gt;BuildPart5();
	}
    virtual ~House(){}
    
protected:
	virtual void BuildPart1()=0;
    virtual void BuildPart2()=0;
    virtual void BuildPart3()=0;
    virtual void BuildPart4()=0;
    virtual void BuildPart5()=0;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体类</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class StoneHouse: public House{
protected:
    virtual void BuildPart1(){
        
    }
    virtual void BuildPart2(){
        
    }
    virtual void BuildPart3(){
        
    }
    virtual void BuildPart4(){
        
    }
    virtual void BuildPart5(){
        
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行代码</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>int main(){
    House* pHouse=new StoneHouse();
    pHouse-&gt;Init();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分析-写法1" tabindex="-1"><a class="header-anchor" href="#分析-写法1"><span>分析 - 写法1</span></a></h4><p>代码结构</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
House<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>StroneHouse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="举例-写法2-构建器" tabindex="-1"><a class="header-anchor" href="#举例-写法2-构建器"><span>举例 - 写法2（构建器）</span></a></h4><p>抽象基类</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class House{									// 【分离1】抽象基类，对象的表示
    //...
};

class HouseBuild {								// 【分离2】抽象基类，对象的构建
public:
    House* GetResult(){							// 【新增】返回指针
        return pHouse;
    }
    virtual ~HouseBuild(){}
    
protected:
    House* pHouse;								// 【新增】包含
	virtual void BuildPart1()=0;
    virtual void BuildPart2()=0;
    virtual void BuildPart3()=0;
    virtual void BuildPart4()=0;
    virtual void BuildPart5()=0;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体类</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class StoneHouse: public House{					// 【分离1】具体类，对象的表示
	//...
}

class StoneHouseBuilder: public HouseBuilder{	// 【分离2】具体类，对象的构建
protected:
    virtual void BuildPart1(){
        //pHouse-&gt;Part1 = ...;
    }
    virtual void BuildPart2(){
        
    }
    virtual void BuildPart3(){
        
    }
    virtual void BuildPart4(){
        
    }
    virtual void BuildPart5(){
        
    }
}

// 高级类
class HouseDirector{							// 【分离】抽离初始化的代码
public:
    HouseBuilder* pHouseBuilder; 				// 【新增】包含
    
    HouseDirector(HouseBuilder* pHouseBuilder){	// 【新增构造函数】
        this-&gt;pHouseBuilder=pHouseBuilder
    }
    
    House* Construct(){	// 初始化
		pHouseBuilder-&gt;BuildPart1();
		for (int i = 0; i &lt; 4; i++){
			pHouseBuilder-&gt;BuildPart2();
		}
        bool flag=pHouseBuilder-&gt;BuildPart3();
        if(flag){
			pHouseBuilder-&gt;BuildPart4();
		}
		pHouseBuilder-&gt;BuildPart5();
        
        return pHouseBuilder-&gt;GerResult();		// 【新增】返回House*指针
	}
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行代码</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>int main(){
    House* pHouse=new StoneHouse();
    pHouse-&gt;Init();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分析-写法2" tabindex="-1"><a class="header-anchor" href="#分析-写法2"><span>分析 - 写法2</span></a></h4><p>代码结构</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
A<span class="token text string">[House 对象表示的抽象基类]</span><span class="token punctuation">;</span>class A red
B<span class="token text string">[HouseBuild 对象构建的抽象基类]</span><span class="token punctuation">;</span>class B red
C<span class="token text string">[HouseDirector]</span><span class="token punctuation">;</span>class C red

C<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">调用</span><span class="token arrow operator">.-&gt;</span></span>C1<span class="token text string">(Construct方法)</span>
C<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">包含指针</span><span class="token arrow operator">.-&gt;</span></span>B
B<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>B2<span class="token text string">[StoneHouseBuilder 对象构建的具体类]</span>
B<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">包含指针</span><span class="token arrow operator">.-&gt;</span></span>A
A<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>A2<span class="token text string">[StoneHouse 对象表示的具体类]</span>

<span class="token keyword">classDef</span> red <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f9f<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>4px</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式"><span>设计模式</span></a></h2><h3 id="模式定义" tabindex="-1"><a class="header-anchor" href="#模式定义"><span>模式定义</span></a></h3><blockquote><p>将一个复杂对象的<strong>构建与其表示相分离</strong>，使得同样的构建过程（稳定）可以创建不同的表示（变化）。</p><p>——《设计模式》GoF</p></blockquote><h3 id="结构-structure" tabindex="-1"><a class="header-anchor" href="#结构-structure"><span>结构（Structure）</span></a></h3><p>（红色表示稳定）</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
<span class="token keyword">subgraph</span> Builder 构建器的抽象基类
	B<span class="token text string">[BuildPart]</span><span class="token punctuation">;</span>class B red
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> ConcreteBuilder 构建器的具体类
	B1<span class="token text string">[BuildPart]</span>
	GetResult
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> Product 产品的表示
	Product
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> Director
	A<span class="token text string">[Construct 初始化结构]</span><span class="token punctuation">;</span>class A red
<span class="token keyword">end</span>

B<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>B1<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">包含指针</span><span class="token arrow operator">.-&gt;</span></span>Product

<span class="token keyword">classDef</span> red <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f9f<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>4px</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
S1<span class="token text string">[Director]</span><span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">包含指针 builder</span><span class="token arrow operator">...-&gt;</span></span>S2<span class="token text string">[Builder]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="要点总结" tabindex="-1"><a class="header-anchor" href="#要点总结"><span>要点总结</span></a></h3><ul><li>Builder模式主要用于 “分步骤构建一个复杂的对象” 。在这其中 “分步骤” 是一个<strong>稳定</strong>的算法，而复杂对象的各个部分则经常<strong>变化</strong></li><li>变化点在哪里，封装哪里 —— Builder模式主要在于应对 “复杂对象各个部分&quot; 的<strong>频繁需求变动</strong>。其缺点在于难以应对 “分步骤构建算法” 的需求变动</li><li>在Builder模式中，要注意不同语言中构造器内调用虚函数的差别（C++ vs C#）</li></ul><h1 id="说实话不是很懂这个结构" tabindex="-1"><a class="header-anchor" href="#说实话不是很懂这个结构"><span>（说实话不是很懂这个结构）</span></a></h1>`,42),r=[l];function t(d,c){return n(),s("div",null,r)}const v=e(i,[["render",t],["__file","09. 构建器 Builder.html.vue"]]),p=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/09.%20%E6%9E%84%E5%BB%BA%E5%99%A8%20Builder.html","title":"《C++设计模式》视频_李建忠","lang":"zh-CN","frontmatter":{"description":"《C++设计模式》视频_李建忠 目录 [toc] 构建器 Builder （注意，李建忠视频中关于这集的剪辑有问题。 （观看顺序：0:00~9:12 - 13:00~17:00 - 9:12~13:00 - 17:00~END） 所属分类——“对象创建” 模式 [省略] 动机（Motivation） 简概 在软件系统中，有时候面临着 “一个复杂对象\\" ...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/09.%20%E6%9E%84%E5%BB%BA%E5%99%A8%20Builder.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"《C++设计模式》视频_李建忠"}],["meta",{"property":"og:description","content":"《C++设计模式》视频_李建忠 目录 [toc] 构建器 Builder （注意，李建忠视频中关于这集的剪辑有问题。 （观看顺序：0:00~9:12 - 13:00~17:00 - 9:12~13:00 - 17:00~END） 所属分类——“对象创建” 模式 [省略] 动机（Motivation） 简概 在软件系统中，有时候面临着 “一个复杂对象\\" ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《C++设计模式》视频_李建忠\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"《C++设计模式》视频_李建忠","slug":"《c-设计模式》视频-李建忠","link":"#《c-设计模式》视频-李建忠","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"构建器 Builder","slug":"构建器-builder","link":"#构建器-builder","children":[{"level":2,"title":"所属分类——“对象创建” 模式","slug":"所属分类——-对象创建-模式","link":"#所属分类——-对象创建-模式","children":[]},{"level":2,"title":"动机（Motivation）","slug":"动机-motivation","link":"#动机-motivation","children":[{"level":3,"title":"简概","slug":"简概","link":"#简概","children":[]},{"level":3,"title":"代码体现","slug":"代码体现","link":"#代码体现","children":[{"level":4,"title":"举例 - 写法1","slug":"举例-写法1","link":"#举例-写法1","children":[]},{"level":4,"title":"分析 - 写法1","slug":"分析-写法1","link":"#分析-写法1","children":[]},{"level":4,"title":"举例 - 写法2（构建器）","slug":"举例-写法2-构建器","link":"#举例-写法2-构建器","children":[]},{"level":4,"title":"分析 - 写法2","slug":"分析-写法2","link":"#分析-写法2","children":[]}]}]},{"level":2,"title":"设计模式","slug":"设计模式","link":"#设计模式","children":[{"level":3,"title":"模式定义","slug":"模式定义","link":"#模式定义","children":[]},{"level":3,"title":"结构（Structure）","slug":"结构-structure","link":"#结构-structure","children":[]},{"level":3,"title":"要点总结","slug":"要点总结","link":"#要点总结","children":[]}]}]},{"level":1,"title":"（说实话不是很懂这个结构）","slug":"说实话不是很懂这个结构","link":"#说实话不是很懂这个结构","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.62,"words":1085},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/03. Tools/02. 管理层/01. 多类管理/设计模式/《C++设计模式》视频_李建忠/09. 构建器 Builder.md","autoDesc":true}');export{v as comp,p as data};

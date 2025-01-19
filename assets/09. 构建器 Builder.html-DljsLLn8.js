import{_ as a,c as s,e as l,a as i,b as t,d,o as r,r as u}from"./app-C-bjNnVy.js";const v={},o={class:"ab-note drop-shadow"},c={class:"markdown-rendered"};function p(m,n){const e=u("mermaid");return r(),s("div",null,[n[5]||(n[5]=l('<h1 id="《c-设计模式》视频-李建忠" tabindex="-1"><a class="header-anchor" href="#《c-设计模式》视频-李建忠"><span>《C++设计模式》视频_李建忠</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><p>[toc]</p><h1 id="构建器-builder" tabindex="-1"><a class="header-anchor" href="#构建器-builder"><span>构建器 Builder</span></a></h1><p><mark>（注意，李建忠视频中关于这集的剪辑有问题。</mark></p><p><mark>（观看顺序：0:00~9:12 - 13:00~17:00 - 9:12~13:00 - 17:00~END）</mark></p><h2 id="所属分类——-对象创建-模式" tabindex="-1"><a class="header-anchor" href="#所属分类——-对象创建-模式"><span>所属分类——“对象创建” 模式</span></a></h2>',7)),i("div",o,[i("div",c,[i("div",null,[n[0]||(n[0]=l(`<h2 id="动机-motivation" tabindex="-1"><a class="header-anchor" href="#动机-motivation"><span>动机（Motivation）</span></a></h2><h3 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h3><ul><li>在软件系统中，有时候面临着 “一个复杂对象&quot; 创建工作，其通常由各个部分的子对象用一定的算法构成； 由于需求的变化，这个复杂对象的各个部分经常面临着剧烈的变化，但是将它们组合在一起的算法却相对稳定（听起来有点像Template Method）</li><li>如何应对这种变化？如何提供一种 “封装机制&quot; 来隔离出 “复杂对象的各个部分” 的变化，从而保持系统中的 “稳定构建算法&quot; 不随着需求改变而改变？</li></ul><h3 id="代码体现" tabindex="-1"><a class="header-anchor" href="#代码体现"><span>代码体现</span></a></h3><h4 id="举例-写法1" tabindex="-1"><a class="header-anchor" href="#举例-写法1"><span>举例 - 写法1</span></a></h4><p>抽象基类</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class House {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分析-写法1" tabindex="-1"><a class="header-anchor" href="#分析-写法1"><span>分析 - 写法1</span></a></h4><p>代码结构</p>`,13)),t(e,{id:"mermaid-42",code:"eJxLL0osyFAIceLyyC8tTtXVfbZl3/Mp83V17YJLivLzUsGiXAAWWg7E"}),n[1]||(n[1]=l(`<h4 id="举例-写法2-构建器" tabindex="-1"><a class="header-anchor" href="#举例-写法2-构建器"><span>举例 - 写法2（构建器）</span></a></h4><p>抽象基类</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class House{									// 【分离1】抽象基类，对象的表示
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分析-写法2" tabindex="-1"><a class="header-anchor" href="#分析-写法2"><span>分析 - 写法2</span></a></h4><p>代码结构</p>`,9)),t(e,{id:"mermaid-64",code:"eJxLL0osyFAIceJyjPbILy1OVXi6fueLjQtfLFzxfMmu57NannXtBXKfzt/1fOPuWOvknMTiYgVHhaLUFC4niAan0sycFKiuZ/Nanu7GpcsJrMsZosslsyg1uSS/CCbpDJbkctbVe7Gh+fmUFXq6ds6GGs75ecUlRaXJJc+m7Xy2eaomSP5pT+vTCauf9bS/nNQBVOXE5aSr+2zLvudT5usCeUbRwSX5eakIl6UWobvtaev2J3sngxwG1IpunCOXI5JxjsjGoYcMkjlcYE+4pKaBfKGQlpmTY6WcZpmmA3R8fnaqlbKxsTGUrVuemVKSYWVSUGHNBQB+urUv"}),n[2]||(n[2]=l('<h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式"><span>设计模式</span></a></h2><h3 id="模式定义" tabindex="-1"><a class="header-anchor" href="#模式定义"><span>模式定义</span></a></h3><blockquote><p>将一个复杂对象的<strong>构建与其表示相分离</strong>，使得同样的构建过程（稳定）可以创建不同的表示（变化）。</p><p>——《设计模式》GoF</p></blockquote><h3 id="结构-structure" tabindex="-1"><a class="header-anchor" href="#结构-structure"><span>结构（Structure）</span></a></h3><p>（红色表示稳定）</p>',5)),t(e,{id:"mermaid-85",code:"eJxLL0osyFAIceIqLk2CsJ1KM3NSUosUns1rebp719OZK57PannWtffFxoVP5+96vnE3F6dTNFhNQGJRSax1ck5icbGCk0JRagpXal4Kwhzn/LzkotSSVGzmPW3d/mTvZIhhhkimcXG6p5YEpRaX5pSgGhZQlJ9Smlyi8GTX8qeTG4EmvFi44vmSXVycUAlU1S6ZRanJJflFXJyO0UBnFJcUgfQ+7Zj7dHn3055pz3dPBjoG5nRHuNO5nHR1n23Z93zKfF1dOydDXb2nPa1PJ6x+1tP+clKHnq4dzC4usEaX1DSQToW0zJwcK+U0yzQdoD352alWysbGxlC2bnlmSkmGlUlBhTUXAGKcnD0="}),t(e,{id:"mermaid-86",code:"eJxLL0osyFDwCeIKNox2ySxKTS7JL4rV1Xva0/p0wupnPe0vJ3UoJJVm5qSkFunp6enaBRtFO0G4sVwA4cEXyg=="}),n[3]||(n[3]=i("h3",{id:"要点总结",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#要点总结"},[i("span",null,"要点总结")])],-1)),n[4]||(n[4]=i("ul",null,[i("li",null,[d("Builder模式主要用于 “分步骤构建一个复杂的对象” 。在这其中 “分步骤” 是一个"),i("strong",null,"稳定"),d("的算法，而复杂对象的各个部分则经常"),i("strong",null,"变化")]),i("li",null,[d('变化点在哪里，封装哪里 —— Builder模式主要在于应对 “复杂对象各个部分" 的'),i("strong",null,"频繁需求变动"),d("。其缺点在于难以应对 “分步骤构建算法” 的需求变动")]),i("li",null,"在Builder模式中，要注意不同语言中构造器内调用虚函数的差别（C++ vs C#）")],-1))])])]),n[6]||(n[6]=i("h1",{id:"说实话不是很懂这个结构",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#说实话不是很懂这个结构"},[i("span",null,"（说实话不是很懂这个结构）")])],-1))])}const B=a(v,[["render",p],["__file","09. 构建器 Builder.html.vue"]]),h=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/09.%20%E6%9E%84%E5%BB%BA%E5%99%A8%20Builder.html","title":"《C++设计模式》视频_李建忠","lang":"zh-CN","frontmatter":{"description":"《C++设计模式》视频_李建忠 目录 [toc] 构建器 Builder （注意，李建忠视频中关于这集的剪辑有问题。 （观看顺序：0:00~9:12 - 13:00~17:00 - 9:12~13:00 - 17:00~END） 所属分类——“对象创建” 模式 动机（Motivation） 简概 在软件系统中，有时候面临着 “一个复杂对象\\" 创建工作，...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/undefined/MdNote_Public/01.%20DesignAndDevelop/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/09.%20%E6%9E%84%E5%BB%BA%E5%99%A8%20Builder.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"《C++设计模式》视频_李建忠"}],["meta",{"property":"og:description","content":"《C++设计模式》视频_李建忠 目录 [toc] 构建器 Builder （注意，李建忠视频中关于这集的剪辑有问题。 （观看顺序：0:00~9:12 - 13:00~17:00 - 9:12~13:00 - 17:00~END） 所属分类——“对象创建” 模式 动机（Motivation） 简概 在软件系统中，有时候面临着 “一个复杂对象\\" 创建工作，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《C++设计模式》视频_李建忠\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"《C++设计模式》视频_李建忠","slug":"《c-设计模式》视频-李建忠","link":"#《c-设计模式》视频-李建忠","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"构建器 Builder","slug":"构建器-builder","link":"#构建器-builder","children":[{"level":2,"title":"所属分类——“对象创建” 模式","slug":"所属分类——-对象创建-模式","link":"#所属分类——-对象创建-模式","children":[]}]},{"level":1,"title":"（说实话不是很懂这个结构）","slug":"说实话不是很懂这个结构","link":"#说实话不是很懂这个结构","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.62,"words":1085},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Develop/03. Tools/02. 管理层/01. 多类管理/设计模式/《C++设计模式》视频_李建忠/09. 构建器 Builder.md","excerpt":"\\n<h1>目录</h1>\\n<p>[toc]</p>\\n<h1>构建器 Builder</h1>\\n<p><mark>（注意，李建忠视频中关于这集的剪辑有问题。</mark></p>\\n<p><mark>（观看顺序：0:00~9:12  -  13:00~17:00  -  9:12~13:00  -  17:00~END）</mark></p>\\n<h2>所属分类——“对象创建” 模式</h2>\\n<div class=\\"ab-note drop-shadow\\"><div class=\\"markdown-rendered\\"><div><h2>动机（Motivation）</h2>\\n<h3>简概</h3>\\n<ul>\\n<li>在软件系统中，有时候面临着 “一个复杂对象\\" 创建工作，其通常由各个部分的子对象用一定的算法构成；\\n由于需求的变化，这个复杂对象的各个部分经常面临着剧烈的变化，但是将它们组合在一起的算法却相对稳定（听起来有点像Template Method）</li>\\n<li>如何应对这种变化？如何提供一种 “封装机制\\" 来隔离出 “复杂对象的各个部分” 的变化，从而保持系统中的 “稳定构建算法\\" 不随着需求改变而改变？</li>\\n</ul>\\n<h3>代码体现</h3>\\n<h4>举例 - 写法1</h4>\\n<p>抽象基类</p>\\n<div class=\\"language-c++\\" data-ext=\\"c++\\" data-title=\\"c++\\"><pre class=\\"language-c++\\"><code>class House {\\npublic:\\n    /** 然后注意一下\\n     *\\n     * C++比较特殊\\n     * 这里的Init不能改写成构造函数House()\\n     * 如果在C++中构造函数调用虚函数，会完成 \\"静态绑定\\"\\n     * 而虚函数还没定义，最后会报错\\n     * 而且子类构造要先调用父类构造，程序就不对了\\n     * \\n     * 但在Java、C#中，会是 \\"动态绑定\\"，可以将这里写成构造函数\\n     */\\n\\tvoid Init(){\\t\\t\\t\\t\\t\\t// 初始化，有点像Template Method\\n\\t\\tthis-&gt;BuildPart1();\\n\\t\\tfor (int i = 0; i &lt; 4; i++){\\n\\t\\t\\tthis-&gt;BuildPart2();\\n\\t\\t}\\n        bool flag=this-&gt;BuildPart3();\\n        if(flag){\\n\\t\\t\\tthis-&gt;BuildPart4();\\n\\t\\t}\\n\\t\\tthis-&gt;BuildPart5();\\n\\t}\\n    virtual ~House(){}\\n\\nprotected:\\n\\tvirtual void BuildPart1()=0;\\n    virtual void BuildPart2()=0;\\n    virtual void BuildPart3()=0;\\n    virtual void BuildPart4()=0;\\n    virtual void BuildPart5()=0;\\n};\\n</code></pre></div><p>具体类</p>\\n<div class=\\"language-c++\\" data-ext=\\"c++\\" data-title=\\"c++\\"><pre class=\\"language-c++\\"><code>class StoneHouse: public House{\\nprotected:\\n    virtual void BuildPart1(){\\n\\n    }\\n    virtual void BuildPart2(){\\n\\n    }\\n    virtual void BuildPart3(){\\n\\n    }\\n    virtual void BuildPart4(){\\n\\n    }\\n    virtual void BuildPart5(){\\n\\n    }\\n}\\n</code></pre></div><p>运行代码</p>\\n<div class=\\"language-c++\\" data-ext=\\"c++\\" data-title=\\"c++\\"><pre class=\\"language-c++\\"><code>int main(){\\n    House* pHouse=new StoneHouse();\\n    pHouse-&gt;Init();\\n}\\n</code></pre></div><h4>分析 - 写法1</h4>\\n<p>代码结构</p>\\n<h4>举例 - 写法2（构建器）</h4>\\n<p>抽象基类</p>\\n<div class=\\"language-c++\\" data-ext=\\"c++\\" data-title=\\"c++\\"><pre class=\\"language-c++\\"><code>class House{\\t\\t\\t\\t\\t\\t\\t\\t\\t// 【分离1】抽象基类，对象的表示\\n    //...\\n};\\n\\nclass HouseBuild {\\t\\t\\t\\t\\t\\t\\t\\t// 【分离2】抽象基类，对象的构建\\npublic:\\n    House* GetResult(){\\t\\t\\t\\t\\t\\t\\t// 【新增】返回指针\\n        return pHouse;\\n    }\\n    virtual ~HouseBuild(){}\\n\\nprotected:\\n    House* pHouse;\\t\\t\\t\\t\\t\\t\\t\\t// 【新增】包含\\n\\tvirtual void BuildPart1()=0;\\n    virtual void BuildPart2()=0;\\n    virtual void BuildPart3()=0;\\n    virtual void BuildPart4()=0;\\n    virtual void BuildPart5()=0;\\n};\\n</code></pre></div><p>具体类</p>\\n<div class=\\"language-c++\\" data-ext=\\"c++\\" data-title=\\"c++\\"><pre class=\\"language-c++\\"><code>class StoneHouse: public House{\\t\\t\\t\\t\\t// 【分离1】具体类，对象的表示\\n\\t//...\\n}\\n\\nclass StoneHouseBuilder: public HouseBuilder{\\t// 【分离2】具体类，对象的构建\\nprotected:\\n    virtual void BuildPart1(){\\n        //pHouse-&gt;Part1 = ...;\\n    }\\n    virtual void BuildPart2(){\\n\\n    }\\n    virtual void BuildPart3(){\\n\\n    }\\n    virtual void BuildPart4(){\\n\\n    }\\n    virtual void BuildPart5(){\\n\\n    }\\n}\\n\\n// 高级类\\nclass HouseDirector{\\t\\t\\t\\t\\t\\t\\t// 【分离】抽离初始化的代码\\npublic:\\n    HouseBuilder* pHouseBuilder; \\t\\t\\t\\t// 【新增】包含\\n\\n    HouseDirector(HouseBuilder* pHouseBuilder){\\t// 【新增构造函数】\\n        this-&gt;pHouseBuilder=pHouseBuilder\\n    }\\n\\n    House* Construct(){\\t// 初始化\\n\\t\\tpHouseBuilder-&gt;BuildPart1();\\n\\t\\tfor (int i = 0; i &lt; 4; i++){\\n\\t\\t\\tpHouseBuilder-&gt;BuildPart2();\\n\\t\\t}\\n        bool flag=pHouseBuilder-&gt;BuildPart3();\\n        if(flag){\\n\\t\\t\\tpHouseBuilder-&gt;BuildPart4();\\n\\t\\t}\\n\\t\\tpHouseBuilder-&gt;BuildPart5();\\n\\n        return pHouseBuilder-&gt;GerResult();\\t\\t// 【新增】返回House*指针\\n\\t}\\n};\\n</code></pre></div><p>运行代码</p>\\n<div class=\\"language-c++\\" data-ext=\\"c++\\" data-title=\\"c++\\"><pre class=\\"language-c++\\"><code>int main(){\\n    House* pHouse=new StoneHouse();\\n    pHouse-&gt;Init();\\n}\\n</code></pre></div><h4>分析 - 写法2</h4>\\n<p>代码结构</p>\\n<h2>设计模式</h2>\\n<h3>模式定义</h3>\\n<blockquote>\\n<p>将一个复杂对象的<strong>构建与其表示相分离</strong>，使得同样的构建过程（稳定）可以创建不同的表示（变化）。</p>\\n<p>——《设计模式》GoF</p>\\n</blockquote>\\n<h3>结构（Structure）</h3>\\n<p>（红色表示稳定）</p>\\n<h3>要点总结</h3>\\n<ul>\\n<li>Builder模式主要用于 “分步骤构建一个复杂的对象” 。在这其中 “分步骤” 是一个<strong>稳定</strong>的算法，而复杂对象的各个部分则经常<strong>变化</strong></li>\\n<li>变化点在哪里，封装哪里 —— Builder模式主要在于应对 “复杂对象各个部分\\" 的<strong>频繁需求变动</strong>。其缺点在于难以应对 “分步骤构建算法” 的需求变动</li>\\n<li>在Builder模式中，要注意不同语言中构造器内调用虚函数的差别（C++ vs C#）</li>\\n</ul>\\n</div></div></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/01. DesignAndDevelop/Develop/03. Tools/02. 管理层/01. 多类管理/设计模式/《C++设计模式》视频_李建忠/09. 构建器 Builder.md","value":{"title":"09. 构建器 Builder","path":"MdNote_Public/01. DesignAndDevelop/Develop/03. Tools/02. 管理层/01. 多类管理/设计模式/《C++设计模式》视频_李建忠/09. 构建器 Builder.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{B as comp,h as data};

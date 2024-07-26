import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as d,c as r,a as t,b as e,d as s,e as l}from"./app-CoO7IlkE.js";const c={},u=l('<h1 id="c" tabindex="-1"><a class="header-anchor" href="#c"><span>C++</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="std-ref函数" tabindex="-1"><a class="header-anchor" href="#std-ref函数"><span>std::ref函数</span></a></h1><p>本篇参考：</p>',4),o={href:"https://www.cnblogs.com/moodlxs/p/10111609.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://blog.csdn.net/xuebing1995/article/details/103729013",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.csdn.net/zhouguoqionghai/article/details/45792273",target:"_blank",rel:"noopener noreferrer"},b=l(`<h2 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h2><p>std::ref只是尝试模拟引用传递，并不能真正变成引用，</p><p>在非模板情况下，std::ref根本没法实现引用传递，只有模板自动推导类型时，ref能用包装类型reference_wrapper来代替原本会被识别的值类型，而reference_wrapper能隐式转换为被引用的值的引用类型</p><h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h2><h3 id="bind" tabindex="-1"><a class="header-anchor" href="#bind"><span>bind</span></a></h3><p>std::ref主要是考虑函数式编程（如std::bind）在使用时，是对参数直接拷贝，而不是引用</p><h3 id="thread" tabindex="-1"><a class="header-anchor" href="#thread"><span>thread</span></a></h3><p>其中代表的例子是thread</p><p>比如thread的方法传递引用的时候，必须外层用ref来进行引用传递，否则就是浅拷贝</p><h2 id="使用例程" tabindex="-1"><a class="header-anchor" href="#使用例程"><span>使用例程</span></a></h2><h3 id="普通引用" tabindex="-1"><a class="header-anchor" href="#普通引用"><span>普通引用</span></a></h3><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class TestRef
{
public:
	TestRef():i(0)							// 默认构造函数 
	{
		cout &lt;&lt; &quot;TestRef默认构造函数&quot; &lt;&lt; this &lt;&lt; endl;
	} 	
	TestRef(const TestRef&amp;testR) :i(0) 		// 拷贝构造函数
	{
		cout &lt;&lt; &quot;TestRef拷贝构造函数&quot; &lt;&lt; this &lt;&lt; endl;
	}
	~TestRef()								// 析构函数
	{
		cout &lt;&lt; &quot;TestRef析构函数&quot; &lt;&lt; this &lt;&lt; endl;
	}
	mutable int i ;
};

class TestRef1
{
public:
	TestRef1():i(0)							// 默认构造函数 
	{
		cout &lt;&lt; &quot;TestRef1默认构造函数&quot; &lt;&lt; this &lt;&lt; endl;
	}
	TestRef1(const TestRef1&amp;testR):i(0)		// 拷贝构造函数
	{
		cout &lt;&lt; &quot;TestRef1拷贝构造函数&quot; &lt;&lt; this &lt;&lt; endl;
	}
	~TestRef1()								// 析构函数
	{
		cout &lt;&lt; &quot;TestRef1析构函数&quot; &lt;&lt; this &lt;&lt; endl;
	}
	mutable int i=0;
};

void funs(const TestRef&amp;test1, const TestRef1&amp;test2)	// 输出并修改两个类的值
{
	cout &lt;&lt; &quot;function &quot; &lt;&lt; &quot;test1:&quot; &lt;&lt; &amp;test1 &lt;&lt;&quot; &quot;&lt;&lt; test1.i &lt;&lt; endl;
	cout &lt;&lt; &quot;function &quot; &lt;&lt; &quot;test2:&quot; &lt;&lt; &amp;test2 &lt;&lt;&quot; &quot;&lt;&lt; test2.i &lt;&lt; endl;
	test1.i++;
	test2.i++;
}
void testFunction()										// 流程
{
	TestRef t1;
	TestRef1 t2;
	cout &lt;&lt; &quot;testFunction &quot; &lt;&lt; &quot;t1:&quot; &lt;&lt; &amp;t1 &lt;&lt; &quot; &quot; &lt;&lt; t1.i &lt;&lt; &quot; t2:&quot; &lt;&lt; &quot; &quot; &lt;&lt; &amp;t2 &lt;&lt; &quot; &quot; &lt;&lt; t2.i &lt;&lt; endl;
	funs(t1,t2);
	cout &lt;&lt; &quot;testFunction &quot; &lt;&lt; &quot;t1:&quot; &lt;&lt; &amp;t1 &lt;&lt;&quot; &quot;&lt;&lt; t1.i &lt;&lt; &quot; t2:&quot; &lt;&lt;&quot; &quot; &lt;&lt; &amp;t2 &lt;&lt; &quot; &quot; &lt;&lt; t2.i &lt;&lt;endl;
}
int main()
{
	testFunction();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>TestRef默认构造函数	00EFF904 <span class="token number">0</span>
TestRef1默认构造函数	00EFF8F8 <span class="token number">0</span>

testFunction 
t1:					00EFF904 <span class="token number">0</span>
t2: 				00EFF8F8 <span class="token number">0</span>

<span class="token keyword">function</span> test1: 	00EFF904 <span class="token number">0</span> <span class="token comment"># 【注意】地址不变，说明是引用传参</span>
<span class="token keyword">function</span> test2:		00EFF8F8 <span class="token number">0</span>

testFunction 
t1:					0OEFF904 <span class="token number">1</span> <span class="token comment"># 【注意】外面的值被修改，说明可以通过引用修改值</span>
t2:					00EFF8F8 <span class="token number">1</span>

TestRef1　析构函数	00EFF8F8
TestRef　析构函数	00EFF904
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ref引用-bind-thread" tabindex="-1"><a class="header-anchor" href="#ref引用-bind-thread"><span>ref引用（bind/thread）</span></a></h3><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>void testFunction()
{
	TestRef t1;
	TestRef1 t2;
	function&lt;void()&gt; f1 = bind(funs, t1, ref(t2));	// 【注意】这里是ref传参给bind函数
	f1();											// 调用函数指针
	cout &lt;&lt; &quot;testFunction &quot; &lt;&lt; &quot;t1:&quot; &lt;&lt; &amp;t1 &lt;&lt; &quot; &quot; &lt;&lt; t1.i &lt;&lt; &quot; t2:&quot; &lt;&lt; &quot; &quot; &lt;&lt; &amp;t2 &lt;&lt; &quot; &quot; &lt;&lt; t2.i &lt;&lt; endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>TestRef默认构造函数		007BF904 <span class="token number">0</span>
TestRef1默认构造函数		007BF8F8 <span class="token number">0</span>

testFunction
t1:						007BF904 <span class="token number">0</span>
t2: 					007BF8F8 <span class="token number">0</span>

TestRef拷贝构造函数		007BF7D0	<span class="token comment"># 与原来地址不同</span>
TestRef拷贝构造函数		01085A34	<span class="token comment"># 与原来地址不同</span>
TestRef　　析构函数		007BF7D0

<span class="token keyword">function</span> test1:			01085A34 <span class="token number">0</span> 	<span class="token comment"># function中test1用的是拷贝出来的01085A34这个对象</span>
<span class="token keyword">function</span> test2:			007BF8F8 <span class="token number">0</span> 	<span class="token comment"># test2用的就是传进俩的007BF8F8这个对象</span>

testFunction
t1:						007BF904 <span class="token number">0</span>	<span class="token comment"># 没有改变值，用的是普通的引用传参</span>
t2:						007BF8F8 <span class="token number">1</span>	<span class="token comment"># 改变了值，用的是ref传参</span>

TestRef　　析构函数		01085A34
TestRef1　　析构函数		007BF8F8
TestRef　　析构函数		007BF904
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function p(h,f){const n=a("ExternalLinkIcon");return d(),r("div",null,[u,t("ul",null,[t("li",null,[t("a",o,[e("【博客园】C++11 std::ref使用场景 "),s(n)])]),t("li",null,[t("a",v,[e("【CSDN】C++ ref和引用（&）"),s(n)]),e("（主要参考）")]),t("li",null,[t("a",m,[e("【CSDN】C++11 ref函数的使用"),s(n)])])]),b])}const E=i(c,[["render",p],["__file","引用 - std ref函数.html.vue"]]),g=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/C__/08.%20%E6%96%B0%E7%89%B9%E6%80%A7/C__11/%E5%BC%95%E7%94%A8%20-%20std%20ref%E5%87%BD%E6%95%B0.html","title":"C++","lang":"zh-CN","frontmatter":{"description":"C++ 目录 std::ref函数 本篇参考： 【博客园】C++11 std::ref使用场景 【CSDN】C++ ref和引用（&）（主要参考） 【CSDN】C++11 ref函数的使用 简概 std::ref只是尝试模拟引用传递，并不能真正变成引用， 在非模板情况下，std::ref根本没法实现引用传递，只有模板自动推导类型时，ref能用包装类型r...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/C__/08.%20%E6%96%B0%E7%89%B9%E6%80%A7/C__11/%E5%BC%95%E7%94%A8%20-%20std%20ref%E5%87%BD%E6%95%B0.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"C++"}],["meta",{"property":"og:description","content":"C++ 目录 std::ref函数 本篇参考： 【博客园】C++11 std::ref使用场景 【CSDN】C++ ref和引用（&）（主要参考） 【CSDN】C++11 ref函数的使用 简概 std::ref只是尝试模拟引用传递，并不能真正变成引用， 在非模板情况下，std::ref根本没法实现引用传递，只有模板自动推导类型时，ref能用包装类型r..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"C++\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"C++","slug":"c","link":"#c","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"std::ref函数","slug":"std-ref函数","link":"#std-ref函数","children":[{"level":2,"title":"简概","slug":"简概","link":"#简概","children":[]},{"level":2,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[{"level":3,"title":"bind","slug":"bind","link":"#bind","children":[]},{"level":3,"title":"thread","slug":"thread","link":"#thread","children":[]}]},{"level":2,"title":"使用例程","slug":"使用例程","link":"#使用例程","children":[{"level":3,"title":"普通引用","slug":"普通引用","link":"#普通引用","children":[]},{"level":3,"title":"ref引用（bind/thread）","slug":"ref引用-bind-thread","link":"#ref引用-bind-thread","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.37,"words":710},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/01. Language/C++/08. 新特性/C++11/引用 - std ref函数.md","autoDesc":true}');export{E as comp,g as data};

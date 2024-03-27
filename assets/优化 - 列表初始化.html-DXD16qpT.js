import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,a as t}from"./app-Bmv5Ekr9.js";const l={},a=t(`<h1 id="c" tabindex="-1"><a class="header-anchor" href="#c"><span>C++</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="一致性初始化-列表初始化-uniform-initialization-initializer-lists" tabindex="-1"><a class="header-anchor" href="#一致性初始化-列表初始化-uniform-initialization-initializer-lists"><span>一致性初始化/列表初始化 Uniform Initialization/Initializer Lists</span></a></h1><h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span>基本用法</span></a></h2><h3 id="旧写法" tabindex="-1"><a class="header-anchor" href="#旧写法"><span>旧写法</span></a></h3><blockquote><p>Before C++11, programmers, especially novices, could easily become confused by the question ofhow to initialize a variable or an object. Initialization could happen with parentheses, braces, and/orassignment operators.</p></blockquote><p>即以前的代码初始化写法很多</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>Rect r1 = {3, 7, 20, 25, &amp;area, &amp;print};	// 等号、大括号
Rect r2 (3, 7, 20, 25);						// 小括号
int ia[6] = {27, 210, 21, 47, 109, 83};		// 中括号、等号、大括号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新写法" tabindex="-1"><a class="header-anchor" href="#新写法"><span>新写法</span></a></h3><p>现在所有的初始化语法可以只用大括号完成（声明变量后跟一个大括号）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>int values[] {1,2,3};
vector&lt;int&gt; v {2,3,5,7,11,13,17};
vector&lt;string&gt; cities {
	&quot;Berlin&quot;, &quot;New York&quot;, &quot;London&quot;, &quot;Braunschweig&quot;
};
complex&lt;double&gt; c{4.0,3.0};	// equivalent to c(4.0, 3.0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="底层原理" tabindex="-1"><a class="header-anchor" href="#底层原理"><span>底层原理</span></a></h3><blockquote><p>其实是利用一个事实：编译器看到<code>{t1,t2... tn}</code>便做出一个<code>initializer_list&lt;T&gt;</code>，它关联至一个<code>array&lt;T, n&gt;</code>（n是个数）。</p><p>有两种情况：</p><ul><li>调用函数（例如<code>ctor</code>）时，函数一次只能接受一个参数，该array内的元素可被编译器分解逐一傅给函数</li><li>但若函数参数是个<code>initializer_list&lt;T&gt;</code>， 调用者却不能给予数个T参数然后以为他们会被自动转为一个<code>initializer_list&lt;T&gt;</code>传入</li></ul><p>（补充：其中<code>ctor</code>是包含类的构造函数，ctor == constructor，dtor == destructor）</p></blockquote><p>结合代码谈原理1</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>vector&lt;string&gt; cities { &quot;Berlin&quot;, &quot;New York&quot;, &quot;London&quot; };

// 形成一个 initializer_list&lt;string&gt;，背后有个 array&lt;string, 6&gt;
// 调用 vector&lt;string&gt; ctors 时，
// 编译器找到一个 vector&lt;stirng&gt; ctor 接受 initializer_list&lt;string&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结合代码谈原理2</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>complex&lt;double&gt; c {4.0, 3.0};

// 形成一个 initializer_list&lt;double&gt;，背后有个 array&lt;double, 2&gt;
// 调用 complex&lt;double&gt; ctor 时，
// 该array内的2个元素被分解传给ctor，complex&lt;double&gt;并无任何ctor接受initializer？
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他特性" tabindex="-1"><a class="header-anchor" href="#其他特性"><span>其他特性</span></a></h2><h3 id="初始化缺省" tabindex="-1"><a class="header-anchor" href="#初始化缺省"><span>初始化缺省</span></a></h3><p>一致性初始化缺省时可以自动设置初值</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>int i;			// i has undefined value
int j{};		// j is initialized by 0
int* p;			// p has undefined value
int* q{};		// q is initialized by nullptr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="不允许隐式转换窄缩" tabindex="-1"><a class="header-anchor" href="#不允许隐式转换窄缩"><span>不允许隐式转换窄缩</span></a></h3><p>不允许隐式转换窄缩</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>int x1 (5.3);		// OK, but OUCH: xl beco
int x2= 5.3;		// OK, but OUCH: x2 beco.
int x3{5.0};		// ERROR: narrowing
int x4 = {5.3};		// ERROR: narrowing
char c1{7};			// OK: even though 7 is an int, this is not narrowing
char c2{99999};		// ERROR: narrowing (if 99999 doesn&#39;t fit into a char)
std::vector&lt;int&gt; v1 { 1，2,4,5 };		// OK
std::vector&lt;int&gt; v2 { 1，2.3,4, 5.6 };	// ERROR: narrowing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="initializer-list-t-类型" tabindex="-1"><a class="header-anchor" href="#initializer-list-t-类型"><span><code>initializer_list&lt;T&gt;</code>类型</span></a></h2><h3 id="作参数参" tabindex="-1"><a class="header-anchor" href="#作参数参"><span>作参数参</span></a></h3><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>void print(std::initializer_list&lt;int&gt; vals)
{
    for(auto p = vals.begin(); p!=vals.end(); ++p){
        std::cout &lt;&lt; *p &lt;&lt; endl;
    }
}
print({12,3,5,7,11,13,17});	// pass a list of values to print()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="作构造函数参-优先级问题" tabindex="-1"><a class="header-anchor" href="#作构造函数参-优先级问题"><span>作构造函数参（优先级问题）</span></a></h3><p>若函数同时有<strong>接收多个参数</strong>的重载版本和<strong>接收initializer list</strong>的重载版本,则优先调用<strong>接收initializer list</strong>的重载版本</p><p>重载优先级</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class P
{
public:
    P(int a, int b)
    {
        cout &lt;&lt; &quot;P(int, int), a=&quot; &lt;&lt; a &lt;&lt; &quot;,b=&quot; &lt;&lt; b &lt;&lt; end;
    }
    P(initializer_list&lt;int&gt; initlist)
    {
        cout &lt;&lt; &quot;P(initializer_list&lt;int&gt;), vlaue= &quot;;
        for(auto i:initlist)
            cout &lt;&lt; i &lt;&lt; &quot; &quot;;
        cout &lt;&lt; endl;
    }
};

P p(77,5);			// P(int, int), a=77,b=5
P q{77,5};			// P(initializer_list&lt;int&gt;), vlaue= 77 5
p r{77,5,42};		// P(initializer_list&lt;int&gt;), vlaue= 77 5 42
P s={77,5};			// P(initializer_list&lt;int&gt;), vlaue= 77 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="底层原理-1" tabindex="-1"><a class="header-anchor" href="#底层原理-1"><span>底层原理</span></a></h3><p><code>initializer_list&lt;T&gt;</code>源代码</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>template&lt;class _E&gt;
class initializer_list{
public:
	typedef _E			value_type;
	typedef const _E&amp;	reference;
	typedef const _E&amp;	const_reference;
	typedef size_t		size_type;
	typedef const _E*	iterator;
	typedef const _E*	const_iterator ;

private:
	iterator			_M__array;			// array迭代器头部（这里是指针，拷贝时只是浅拷贝）
	size_type			_M_len;				// 长度
    
	// The compiter can calt a private constructor. 编译器可以调用 私有构造函数。
	constexpr initializer_list(const_iterator _a， size_type __l)
        :_M_array(__a), _M_len(__l) { }		// 构造时会构造一个array

public:
	constexpr initializer_list( ) noexcept
        :_M_array(0), _M_len(0) { }

    // Number of etements.
	constexpr size_type
	size() const noexcept { return _M_len; }
    
	// first etement.
	constexpr const_iterator
	begin() const noexcept { return _M_array; }

    // 0ne past the iast eLement.
	constexpr const iterator
    end() const noexcept { return begin() -&gt; ???; }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="stl中的使用" tabindex="-1"><a class="header-anchor" href="#stl中的使用"><span>STL中的使用</span></a></h2><p>STL中的大部分容器和算法相关函数均有接收initializer list的重载版本，如<code>vector</code>、<code>min</code>和<code>max</code></p>`,36),s=[a];function r(d,c){return e(),n("div",null,s)}const u=i(l,[["render",r],["__file","优化 - 列表初始化.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/C__/08.%20%E6%96%B0%E7%89%B9%E6%80%A7/C__11/%E4%BC%98%E5%8C%96%20-%20%E5%88%97%E8%A1%A8%E5%88%9D%E5%A7%8B%E5%8C%96.html","title":"C++","lang":"zh-CN","frontmatter":{"description":"C++ 目录 一致性初始化/列表初始化 Uniform Initialization/Initializer Lists 基本用法 旧写法 Before C++11, programmers, especially novices, could easily become confused by the question ofhow to initia...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/C__/08.%20%E6%96%B0%E7%89%B9%E6%80%A7/C__11/%E4%BC%98%E5%8C%96%20-%20%E5%88%97%E8%A1%A8%E5%88%9D%E5%A7%8B%E5%8C%96.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"C++"}],["meta",{"property":"og:description","content":"C++ 目录 一致性初始化/列表初始化 Uniform Initialization/Initializer Lists 基本用法 旧写法 Before C++11, programmers, especially novices, could easily become confused by the question ofhow to initia..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"C++\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"C++","slug":"c","link":"#c","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"一致性初始化/列表初始化 Uniform Initialization/Initializer Lists","slug":"一致性初始化-列表初始化-uniform-initialization-initializer-lists","link":"#一致性初始化-列表初始化-uniform-initialization-initializer-lists","children":[{"level":2,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[{"level":3,"title":"旧写法","slug":"旧写法","link":"#旧写法","children":[]},{"level":3,"title":"新写法","slug":"新写法","link":"#新写法","children":[]},{"level":3,"title":"底层原理","slug":"底层原理","link":"#底层原理","children":[]}]},{"level":2,"title":"其他特性","slug":"其他特性","link":"#其他特性","children":[{"level":3,"title":"初始化缺省","slug":"初始化缺省","link":"#初始化缺省","children":[]},{"level":3,"title":"不允许隐式转换窄缩","slug":"不允许隐式转换窄缩","link":"#不允许隐式转换窄缩","children":[]}]},{"level":2,"title":"initializer_list<T>类型","slug":"initializer-list-t-类型","link":"#initializer-list-t-类型","children":[{"level":3,"title":"作参数参","slug":"作参数参","link":"#作参数参","children":[]},{"level":3,"title":"作构造函数参（优先级问题）","slug":"作构造函数参-优先级问题","link":"#作构造函数参-优先级问题","children":[]},{"level":3,"title":"底层原理","slug":"底层原理-1","link":"#底层原理-1","children":[]}]},{"level":2,"title":"STL中的使用","slug":"stl中的使用","link":"#stl中的使用","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.19,"words":957},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/01. Language/C++/08. 新特性/C++11/优化 - 列表初始化.md","autoDesc":true}');export{u as comp,m as data};

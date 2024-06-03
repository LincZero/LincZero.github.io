import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as r,c,b as e,e as l,d as n,w as o,a}from"./app-BAt33Ddg.js";const u={},m=a('<h1 id="c" tabindex="-1"><a class="header-anchor" href="#c"><span>C++</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="c-新标准c-11-14" tabindex="-1"><a class="header-anchor" href="#c-新标准c-11-14"><span>C++新标准C++11/14</span></a></h1><h2 id="新标准简概" tabindex="-1"><a class="header-anchor" href="#新标准简概"><span>新标准简概</span></a></h2><h3 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h3>',5),v={href:"https://www.bilibili.com/video/BV1Rp4y1n7fb",target:"_blank",rel:"noopener noreferrer"},p={href:"https://blog.csdn.net/ncepu_Chen/article/details/115375559",target:"_blank",rel:"noopener noreferrer"},b={href:"http://c.biancheng.net/view/3737.html",target:"_blank",rel:"noopener noreferrer"},h=e("li",null,"《高速上手C++11 14 17.pdf》",-1),g=e("li",null,"了解编译器对C++2.0的支持（百度或谷歌：Compiler support for C++11 and C++14）",-1),f={href:"https://gcc.gnu.org/onlinedocs/gcc-4.6.3/libstdc++/api/api/a00464.html",target:"_blank",rel:"noopener noreferrer"},x=e("li",null,"《The C++ Standard Library》Apr9，2012",-1),y=e("li",null,"《C++ Primer》Aug 16，2012",-1),_=e("li",null,"《The C++ Programming Language》May 20，2013",-1),C=e("li",null,"《Effective Modern C++》Nov，2014",-1),k=a("<li>工具 <ul><li>Windows Grep 2.3。是全文检索工具，方便去看标准库的源代码</li></ul></li><li>C++11简概 <ul><li>C++ 2.0 New Features（新特性），即C++11/14</li><li>从以下两个层面来学习： <ul><li>语言</li><li>标准库</li></ul></li><li>C++ Standard 演化 <ul><li><strong>C++ 98（1.0）</strong></li><li>C++ 03（TR1，Technical Report 1）</li><li><strong>C++ 11（2.0）</strong></li><li>C++ 14</li><li>C++ 17</li><li>C++ 20</li></ul></li></ul></li>",2),q=a(`<h3 id="确认支持版本" tabindex="-1"><a class="header-anchor" href="#确认支持版本"><span>确认支持版本</span></a></h3><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>cout &lt;&lt; __cplusplus &lt;&lt; endl;

// 输出：199711，表示支持 C++98 and C++03
// 输出：201103，表示支持 C++11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果输出过低，可能需要在编译器平台中打开一个Compiler的设置中，设置支持新版本的C++特性</p><h2 id="数据" tabindex="-1"><a class="header-anchor" href="#数据"><span>数据</span></a></h2><h3 id="空指针-nullptr-and-std-nullptr-t" tabindex="-1"><a class="header-anchor" href="#空指针-nullptr-and-std-nullptr-t"><span>空指针 <strong>nullptr</strong> and <strong>std::nullptr_t</strong></span></a></h3><blockquote><p>C++11 lets you use nullptr instead of 0 or NULL.</p></blockquote><p>不会出现以下歧义</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 函数重载
void f(int);
void f(void*);

// 调用
f(O);			// calls f(int)
f(NULL);		// calls f(int) if NULL is 0, ambiguous otherwise【歧义】
f(nullptr);		// calls f(void*)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nullptr is a new keyword. 而 nullptr_t是一个常量，用于不支持nullptr新关键字的程序</p><p>4.9.2\\includel\\stddefh</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#if defined(_cplusplus)8&amp;_cplusplus &gt;= 201103L
#ifndef _GXX_NULLPTR_T
#define _6XXX_NULLPTR_T
	typedef decltype(nullptr) nullptr_t;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动类型推导-automatic-type-deduction-with-auto" tabindex="-1"><a class="header-anchor" href="#自动类型推导-automatic-type-deduction-with-auto"><span>自动类型推导 Automatic Type Deduction with <strong>auto</strong></span></a></h3><p>不同于在C语言中的<code>auto</code>，那个表示的是局部变量</p><p>auto是编译时类型推导，和 js 的 var/let 或 python 的不标类型不同</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>auto i = 42;
double f();
auto d = f();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Using auto is especially useful where the type is a pretty long and/or complicatedexpression.</p></blockquote><p>即主要用于类型很长很复杂的情况下，如容器迭代器和lambda函数，不要滥用</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>vector&lt;string&gt; v;
// ...
auto pos = v.begin();
auto l = [](int x) -&gt; bool {	// 返回bool类型的lambda表达式
    // ...
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型推导-decltype-新关键字" tabindex="-1"><a class="header-anchor" href="#类型推导-decltype-新关键字"><span>类型推导 decltype 新关键字</span></a></h3><blockquote><h4 id="作用" tabindex="-1"><a class="header-anchor" href="#作用"><span>作用</span></a></h4></blockquote><p><code>decltype</code>实现了<code>typeof</code>语法,可以推断出表达式的类型.</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 新写法
map&lt;string, float&gt; coll;
decltype(coll)::value_type elem;	// elem的类型能随着coll而变，修改程序时只需修改一处

// 旧写法
map&lt;string, float&gt; coll;
map&lt;string, float&gt;::value_type elem;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="应用" tabindex="-1"><a class="header-anchor" href="#应用"><span>应用</span></a></h4></blockquote><p>常用于<strong>声明返回值类型</strong>、<strong>元编程</strong>和<strong>代指lambda函数的类型</strong>上</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>template &lt;typename T1, typename T2&gt;
decltype(x+y) add(Tl x, T2 y);			// error: &#39;x&#39; and &#39;y&#39; was not declared in this scope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>从语法上来说,上述程序是错误的,因为变量<code>x</code>和<code>y</code>在函数外访问不到,因此需要使用C++11声明返回值类型的新语法：返回类型后置</p><blockquote><h4 id="返回类型后置" tabindex="-1"><a class="header-anchor" href="#返回类型后置"><span>返回类型后置</span></a></h4></blockquote><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>template &lt;typename T1, typename T2&gt;
auto add(Tl x, T2 y) -&gt; decltype(x+y);	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>补充：Lambda表达式中的写法就用到了这个返回类型后置。<strong>且对于 lambda，返回类型必须后置</strong></p><hr><p>后置返回类型杂谈：</p><p>参考：https://www.zhihu.com/question/334039589/answer/763159374</p><p>后置类型语法优于前置类型语法</p><blockquote><h4 id="模板中的应用" tabindex="-1"><a class="header-anchor" href="#模板中的应用"><span>模板中的应用</span></a></h4></blockquote><p>该语法进一步增强了模板语法的灵活性</p><p>例程1</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>template &lt;typename T&gt;
void test_decltype(T obj) {

    map&lt;string, float&gt;::value_type elem1; 	
	
    typedef typename decltype(0bj)::iterator iType;	// decltype
	typedef typename T::iterator iType;

    decltype(obj) anotherObj(obj);					// decltype
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例程2</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>auto cmp = [](const Person&amp; p1, const Person&amp; p2){
	return pl.lastname()&lt;p2.lastname() ||
		(p1.lastname()—p2.lastname() &amp;&amp;
         pl.firstname() p2.firstname());
};
// ...
std::set&lt;Person,decltype(cmp)&gt; coll(cmp);			// decltype
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="交互" tabindex="-1"><a class="header-anchor" href="#交互"><span>交互</span></a></h2><p>（无）</p><h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化"><span>优化</span></a></h2><h3 id="for-基于范围循环-range-based-for-statement" tabindex="-1"><a class="header-anchor" href="#for-基于范围循环-range-based-for-statement"><span>for 基于范围循环 range-based <strong>for</strong> statement</span></a></h3>`,43),E={href:"https://www.cnblogs.com/goodhx/p/5132601.html",target:"_blank",rel:"noopener noreferrer"},T=a(`<div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>for (decl:coll) {
    statement
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码举例：</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>for(Type VarName : Array){
	//每个元素的值会依次赋给 VarName
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>for (std::vector&lt;int&gt;::const_iterator iter = ints.begin(); iter != ints.end(); ++iter)	// 通用for
for(auto iter:ints){};																	// C++11
for_each(ints.begin(), ints.end(), [](auto iter)-&gt;void{/**/});							// STL方法（函数模板）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="volatile-禁止reorder" tabindex="-1"><a class="header-anchor" href="#volatile-禁止reorder"><span><s>volatile 禁止reorder</s></span></a></h3><p>C++11之后的跨平台实现（<em>volatile</em>关键字）：原理主要是让编译器不reorder</p><h2 id="封装" tabindex="-1"><a class="header-anchor" href="#封装"><span>封装</span></a></h2><h3 id="lambda-匿名函数" tabindex="-1"><a class="header-anchor" href="#lambda-匿名函数"><span>Lambda 匿名函数</span></a></h3><h4 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span>基本用法</span></a></h4><p>lambda函数既可以用作变量，也可以立即执行</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// Lambda对象
[] {
    std::cout &lt;&lt; &quot;hello lambda&quot; &lt;&lt; std::endl;
};

// 直接执行
[] {
    std::cout &lt;&lt; &quot;hello lambda&quot; &lt;&lt; std::endl;
}();

// 用作变量
auto l = [] {
    std::cout &lt;&lt; &quot;hello lambda&quot; &lt;&lt; std::endl;
};
l();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="原型" tabindex="-1"><a class="header-anchor" href="#原型"><span>原型</span></a></h4>`,12),w=e("ul",null,[e("li",null,[e("code",null,"[]{}"),l("本质是lambda对象")]),e("li",null,[l("原型："),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mo",{stretchy:"false"},"["),e("mi",{mathvariant:"normal"},"."),e("mi",{mathvariant:"normal"},"."),e("mi",{mathvariant:"normal"},"."),e("mo",{stretchy:"false"},"]"),e("mo",{stretchy:"false"},"("),e("mi",{mathvariant:"normal"},"."),e("mi",{mathvariant:"normal"},"."),e("mi",{mathvariant:"normal"},"."),e("mo",{stretchy:"false"},")"),e("mi",null,"m"),e("mi",null,"u"),e("mi",null,"t"),e("mi",null,"a"),e("mi",null,"b"),e("mi",null,"l"),e("msub",null,[e("mi",null,"e"),e("mrow",null,[e("mi",null,"o"),e("mi",null,"p"),e("mi",null,"t")])]),e("mtext",null," "),e("mi",null,"t"),e("mi",null,"h"),e("mi",null,"r"),e("mi",null,"o"),e("mi",null,"w"),e("mi",null,"S"),e("mi",null,"p"),e("mi",null,"e"),e("msub",null,[e("mi",null,"c"),e("mrow",null,[e("mi",null,"o"),e("mi",null,"p"),e("mi",null,"t")])]),e("mtext",null," "),e("mo",null,"−"),e("mo",null,">"),e("mtext",null," "),e("mi",null,"r"),e("mi",null,"e"),e("mi",null,"t"),e("mi",null,"T"),e("mi",null,"y"),e("mi",null,"p"),e("msub",null,[e("mi",null,"e"),e("mrow",null,[e("mi",null,"o"),e("mi",null,"p"),e("mi",null,"t")])]),e("mo",{stretchy:"false"},"{"),e("mi",{mathvariant:"normal"},"."),e("mi",{mathvariant:"normal"},"."),e("mi",{mathvariant:"normal"},"."),e("mo",{stretchy:"false"},"}")]),e("annotation",{encoding:"application/x-tex"},"[...](...)mutable_{opt}~throwSpec_{opt}~->~retType_{opt}\\{...\\}")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1.0361em","vertical-align":"-0.2861em"}}),e("span",{class:"mopen"},"["),e("span",{class:"mord"},"..."),e("span",{class:"mclose"},"]"),e("span",{class:"mopen"},"("),e("span",{class:"mord"},"..."),e("span",{class:"mclose"},")"),e("span",{class:"mord mathnormal"},"m"),e("span",{class:"mord mathnormal"},"u"),e("span",{class:"mord mathnormal"},"t"),e("span",{class:"mord mathnormal"},"ab"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"e"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2806em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mathnormal mtight"},"o"),e("span",{class:"mord mathnormal mtight"},"pt")])])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2861em"}},[e("span")])])])])]),e("span",{class:"mspace nobreak"}," "),e("span",{class:"mord mathnormal"},"t"),e("span",{class:"mord mathnormal"},"h"),e("span",{class:"mord mathnormal"},"ro"),e("span",{class:"mord mathnormal"},"wSp"),e("span",{class:"mord mathnormal"},"e"),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"c"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2806em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mathnormal mtight"},"o"),e("span",{class:"mord mathnormal mtight"},"pt")])])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2861em"}},[e("span")])])])])]),e("span",{class:"mspace nobreak"}," "),e("span",{class:"mord"},"−"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},">"),e("span",{class:"mspace nobreak"}," "),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mord mathnormal"},"re"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"tT"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),e("span",{class:"mord mathnormal"},"p"),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"e"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2806em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mathnormal mtight"},"o"),e("span",{class:"mord mathnormal mtight"},"pt")])])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2861em"}},[e("span")])])])])]),e("span",{class:"mopen"},"{"),e("span",{class:"mord"},"..."),e("span",{class:"mclose"},"}")])])])]),e("li",null,[l("参数： ()、mutable、throwSpec、retType 都是可选的 "),e("ul",null,[e("li",null,[e("code",null,"[]"),l("：是定义时传参 "),e("ul",null,[e("li",null,[e("code",null,"[=]"),l("表示使用值传递变量，里面直接写变量名也是")]),e("li",null,[e("code",null,"[&]"),l("表示使用引用传递变量")])])]),e("li",null,[e("code",null,"()"),l("：调用时传参")]),e("li",null,[e("code",null,"mutable"),l("：使"),e("code",null,"[]"),l("传入的变量可以被修改（值传递时）")]),e("li",null,[e("code",null,"throwSpec"),l("：???")]),e("li",null,[e("code",null,"->retType"),l("：返回值类型")])])])],-1),B=a(`<h4 id="底层原理-mutable原理" tabindex="-1"><a class="header-anchor" href="#底层原理-mutable原理"><span>底层原理 - mutable原理</span></a></h4><p>编译等价代码</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>auto f = [id]() mutable {
    std::cout &lt;&lt; &quot;id:&quot; &lt;&lt; id &lt;&lt; std::endl;
    ++d;
};

// 会编译等价于以下代码
class Functor {			// 类的定义只有一次
private:
    int id;
public:
    void operator()(){
        std::cout &lt;&lt; &quot;id:&quot; &lt;&lt; id &lt;&lt; std::endl;
    	++d;
    }
};
Functor f;

// 或用函数来理解（Lambda不是这个原理！仅作理解参考！）
function(int id){
    const m_id = id;	// 静态变量只会初始化一次
    //...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>坑，定义时传参</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>int id = 0;
// 注意这里如果不加mutable会报错，说变量是只读的
auto f = [id]() mutable {						// 这里已经传入了id参数
    std::cout &lt;&lt; &quot;id:&quot; &lt;&lt; id &lt;&lt; std::endl;
    ++d;
};
id = 42;
f();											// id:0
f();											// id:1
f();											// id:2
std::cout &lt;&lt; &quot;id:&quot; &lt;&lt; id &lt;&lt; std::endl;			// id:42
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="底层原理-引用传参" tabindex="-1"><a class="header-anchor" href="#底层原理-引用传参"><span>底层原理 - 引用传参</span></a></h4><p>引用传参</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>int id = 0;
auto f = [&amp;id](int param) {						// 定义时引用传参
    std::cout &lt;&lt; &quot;id:&quot; &lt;&lt; id &lt;&lt; std::endl;
    ++d; ++param;
};
id = 42;
f(7);											// id:42
f(7);											// id:43
f(7);											// id:44
std::cout &lt;&lt; &quot;id:&quot; &lt;&lt; id &lt;&lt; std::endl;			// id:45
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Qt的坑</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 错误写法
int count = 0;								// 如果这里被销毁了，Lambda内部的指针变为悬垂指针，打印出来的值会是错的
connect(button, &amp;QAction::triggered, [&amp;count]{
    qDebug()&lt;&lt;&quot;qDebug: &quot; &lt;&lt; ++count;		// -858993460、-858993459、...
});

// 正确写法（mutable原理）
int count = 0;
connect(button, &amp;QAction::triggered, [count]()mutable{
    qDebug()&lt;&lt;&quot;qDebug: &quot; &lt;&lt; ++count;		// 1、2、3、...
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="模板中的使用" tabindex="-1"><a class="header-anchor" href="#模板中的使用"><span>模板中的使用</span></a></h4><p>（视频没太听懂）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>auto cmp = [](const Person&amp; p1,const Person&amp; p2){	// 比较大小
	return p1.lastname() &lt; p2.lastname() ||
		(p1.lastname() == p2.lastname() &amp;&amp;
         p1.firstname() &lt; p2.firstname());
};
// ...
std::set&lt;Person,decltype(cmp)&gt; coll(cmp);			// 模板使用。用了下decltype类型推导得到Lambda对象类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>lambda函数充当predict判定</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>vector&lt;int&gt; vi{5, 28, 50, 83, 70, 590, 245, 59, 24};
int x = 30;
int y = 100;
vi.erase(remove_if(vi.begin(), vi.end(),
	[x, y](int n) { return x &lt; n &amp;&amp; n &lt; y; })		// 如果数字在30~100之间就去掉。这里的n是erase传进去的
    vi.end()
);
for(auto i:vi)
    cout &lt;&lt; i &lt;&lt; &#39; &#39;;								// 输出：5 28 590 245 24
cout &lt;&lt; endl;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h4><ul><li>比较 <ul><li>函数指针、函数符、Lambda函数：</li><li>（略）</li></ul></li><li>补充 <ul><li>Lambda 函数的返回值必须后置</li></ul></li></ul><h4 id="错误记录-运行时崩溃" tabindex="-1"><a class="header-anchor" href="#错误记录-运行时崩溃"><span>错误记录 - 运行时崩溃</span></a></h4><p>调试模式下报错：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>The inferior stopped because it triggered an exception. 
Stopped in thread 0 by: Exception at 0x7ffd9b7f9aeb, code: 0xc0000005: read access violation at: 0x28, flags=0x0 (first chance).

次等的停止是因为它触发了一个异常。  
在线程0中被:Exception at 0x7ffd9b7f9aeb停止，code: 0xc0000005:读访问冲突在:0x28, flags=0x0(第一次机会)。  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>搜索得知是指针问题，然后发现是在lambda中用引用的方式传递了一个指针参数</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>QWebEngineView *view = new QWebEngineView(wid);
connect(btn, &amp;QPushButton::clicked, this, [&amp;view](){};
// 应该改为
connect(btn, &amp;QPushButton::clicked, this, [view](){};
// 主要是我的view本来不是指针而是对象，后来改成指针后忘记该lmabda函数了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="noexcept-保证无异常" tabindex="-1"><a class="header-anchor" href="#noexcept-保证无异常"><span>noexcept 保证无异常</span></a></h3><p>（视频没太听懂）</p><p>保证函数不会出异常</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>void foo() noexcept;										// 保证不出异常
void swap(Type&amp; x, Type&amp; y) noexcept(noexcept(x.swap(y))){}	// 条件不出异常
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象"><span>面向对象</span></a></h2><h3 id="default-delete" tabindex="-1"><a class="header-anchor" href="#default-delete"><span>=default，=delete</span></a></h3><p>（视频没太听懂）</p><p>如果你自行定义了一个ctor，那么编译器就不会再给你一个 default ctor</p><blockquote><h5 id="default" tabindex="-1"><a class="header-anchor" href="#default"><span>=default</span></a></h5></blockquote><blockquote><p>使得编译给类加上默认的构造函数、析构函数、拷贝构造函数、拷贝赋值函数、移动构造函数等.</p><p>在C++11之前,我们都是手动给类添加空的构造函数等函数,但是这样手动添加的函数与编译器生成的默认构造函数是不同的,一个影响就是使类不再是POD类型,减少了编译器对其优化的可能性.</p><p>如果你强制加上<code>=default</code>，就可以重新获得并使用default ctor</p></blockquote><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class Zoo
{
public:
	Zoo(int i1, int i2) : d1(il), d2(i2){ }
    Zoo(const Zoo&amp;) = delete;				// 拷贝构造函数	删除
	Zoo(Zoo&amp;&amp;) = default;					// 右值引用　　	默认
	Zoo&amp; operator=(const Zoo&amp;)= default;	// 赋值构造函数	默认
    Zoo&amp; operator=(const Zoo&amp;&amp;)= delete;	// 移动构造函数	删除
    virtual ~Zoo(){}
private:
	int d1, d2;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>QA</p><ul><li><code>complex&lt;T&gt;</code>（复数）有所谓 Big-Three 吗 <ul><li>没有<code>operator=(const complex&lt;...&gt;&amp;)</code></li><li>没有<code>~complex()</code></li></ul></li><li><code>string</code> 有所谓 Big-Three吗 <ul><li>有，而且有Bug-Five</li></ul></li></ul><blockquote><h5 id="delete" tabindex="-1"><a class="header-anchor" href="#delete"><span>=delete</span></a></h5></blockquote><blockquote><p>表示删除该函数,使得该类不具有对应的构造、析构、拷贝构造、拷贝赋值、析构等功能</p></blockquote><h3 id="explicit-针对一个以上参数的构造函数" tabindex="-1"><a class="header-anchor" href="#explicit-针对一个以上参数的构造函数"><span>explicit 针对一个以上参数的构造函数</span></a></h3><p>（这个讲得有点不是很清晰）</p><blockquote><p><code>explicit</code> for ctors taking <strong>more than</strong> one argument.</p><p>在以前这个关键字是只能支持一个参数的构造函数的</p></blockquote><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class P{
public :
	P(int a， int b){
	cout &lt;&lt; &quot;P(int a,in	t b) in&quot;;
	}
    
	P(initializer_list&lt;int&gt;) {
		cout &lt;&lt; &quot;P(initializer__list&lt;int&gt; ) in&quot;;
	}
	
    explicit P(int a, int b, int c) {
		cout &lt;&lt;&quot;explicit P(int a,int b，int c) in&quot;;
	}
};

void fp(const P&amp;){ };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>作用</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>struct Complex
{
    int real, imag;
    
	Complex(int re, int im=0) : real(re), imag(im){}
    
	Complex operator+(const Complex&amp; x){
        return Complex((real + x.real),
		(imag + x.imag));
    };
}

Complex cl(12,5);
Complex c2 = cl + 5;	// 此时前者可能发生类型转换，Complex -&gt; int

/* explicit Complex(int re, int im=0) : real(re), imag(im){}
 * 则不会出现以上情况，而会直接报错
 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="override-复写" tabindex="-1"><a class="header-anchor" href="#override-复写"><span>override 复写</span></a></h3><p>复写、改写，应用在虚函数中</p><p>应用举例：</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>struct Base {
	virtual void vfunc(float){}
};
struct Derived1:Base{
    virtual void vfunc(int){}			// 此处不加override不会报错，编译器以为你要重写定义一个虚函数而不是重写
};
struct Derived2:Base{
    virtual void vfunc(int) override{}	// 此处会报错，编译器认为你要重写，但找不到对应的基类方法
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="final-防止继承或复写" tabindex="-1"><a class="header-anchor" href="#final-防止继承或复写"><span>final 防止继承或复写</span></a></h3><ul><li><p>作用1：不允许类被继承</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>struct Basel final{};		// 不让别人继承自己
struct Derived1:Base1 {};	// 此时会报错
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>作用2：不允许类方法被复写</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>struct Base2{
    virtual void f() final;	// 不允许被复写
};
struct Derived2:Base2{
    void f();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型"><span>泛型</span></a></h2><h3 id="模板表达式的空格-spaces-in-template-expressions" tabindex="-1"><a class="header-anchor" href="#模板表达式的空格-spaces-in-template-expressions"><span>模板表达式的空格 Spaces in Template Expressions</span></a></h3><p>旧版本可能是为了避免和<code>&gt;&gt;</code>运算符混淆，现在能区分开了</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>vector&lt;list&lt;int&gt; &gt;;		// OK in each C++ version
vector&lt;list&lt;int&gt;&gt;;		// OK since C++11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模板别名-alias-template-using的三个作用" tabindex="-1"><a class="header-anchor" href="#模板别名-alias-template-using的三个作用"><span>模板别名（Alias Template），using的三个作用</span></a></h3><p>（视频没太听懂）</p><blockquote><h4 id="using的三个作用" tabindex="-1"><a class="header-anchor" href="#using的三个作用"><span>using的三个作用</span></a></h4></blockquote><ul><li>命名空间的使用</li><li>子类中引用基类的成员</li><li>别名指定（有类似功能的还有：#define预编译、typedef）</li></ul><blockquote><h4 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h4></blockquote><p>（这里主要讲的是using的第三个作用——别名）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>template &lt;typename T&gt;
using Vec = std::vector&lt;T, MyAlloc&lt;T&gt;&gt;;	// 指定别名

Vec&lt;int&gt; coll;							// 这里表示上面两个T都是int
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述功能使用<strong>宏定义</strong>或**<code>typedef</code>**都不能实现</p><blockquote><p>要想使用宏定义实现该功能,从语义上来说,应该这样实现:</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#define Vec&lt;T&gt; std::vector&lt;T, MyAlloc&lt;T&gt;&gt;		// 理想情况下应该这样写,但不能通过编译
Vec&lt;int&gt; container;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但是define不支持以小括号定义参数,要想符合语法,需要这样写</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#define Vec(T) std::vector&lt;T, MyAlloc&lt;T&gt;&gt;		// 能通过编译,但是使用小括号失去了泛型的语义。typedef不能接受参数
Vec(int) container;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样可以通过编译,但是Vec(int)这种指定泛型的方式与原生指定泛型的方式不一致.</p></blockquote><p>其他补充：<strong>模板模板参数</strong>也需要通过alias template指定其它模板参数的初值（这里没懂）</p><blockquote><h4 id="template-tamplate-parameter-模板模板参数" tabindex="-1"><a class="header-anchor" href="#template-tamplate-parameter-模板模板参数"><span>template tamplate parameter 模板模板参数</span></a></h4></blockquote><p>（视频没太听懂）</p><p><strong>模板模板参数</strong>也需要通过alias template指定其它模板参数的初值</p><p>高端模板技巧</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>template&lt;typename T, 
	template &lt;class&gt; class Container
    &gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="比较-typedef" tabindex="-1"><a class="header-anchor" href="#比较-typedef"><span>比较 typedef</span></a></h4></blockquote><p>using 类型别名（Type Alias）（类似typedef）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>typedef void (*func)(int,int);		// typedef 写法
using func = void(*) (int,int);		// using 写法，更清晰
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可变类型模板-此处略" tabindex="-1"><a class="header-anchor" href="#可变类型模板-此处略"><span>可变类型模板（此处略）</span></a></h3><p>（此处略）</p><h2 id="c-standard-library-新特性" tabindex="-1"><a class="header-anchor" href="#c-standard-library-新特性"><span>C++ Standard Library 新特性</span></a></h2><p>其他不是特别常用但见过的函数</p><ul><li>std::call_once()：只调用一次</li></ul><h2 id="standard-template-library-新特性" tabindex="-1"><a class="header-anchor" href="#standard-template-library-新特性"><span>Standard Template Library 新特性</span></a></h2>`,77);function L(A,P){const i=t("ExternalLinkIcon"),s=t("RouteLink");return r(),c("div",null,[m,e("ul",null,[e("li",null,[l("学习参考 "),e("ul",null,[e("li",null,[e("a",v,[l("【B站】C++新标准-C++11/14"),n(i)]),l("，侯捷老师的课（侯捷C++系列课程，多人推荐）（主要参考） "),e("a",p,[l("【CSDN】别人的听课笔记"),n(i)]),l(" （挺深入，但说话讲得有点不清晰，有时我真的听不清他说的什么，像在学校听课一样，如果有字幕就好了）")]),e("li",null,[e("a",b,[l("【C语言中文网】C++11"),n(i)]),l("（主要参考）")]),h])]),e("li",null,[l("网站参考 "),e("ul",null,[g,e("li",null,[n(s,{to:"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/C++/08.%20%E6%96%B0%E7%89%B9%E6%80%A7/C++11/en.cppreference.com/w/"},{default:o(()=>[l("CppReference.com")]),_:1})]),e("li",null,[e("a",f,[l("gcc.gnu.org"),n(i)])]),x,y,_,C])]),k]),q,e("p",null,[l("参考："),e("a",E,[l("【博客园】C++11基于范围的for循环"),n(i)])]),T,w,B])}const S=d(u,[["render",L],["__file","C__11.html.vue"]]),V=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/C__/08.%20%E6%96%B0%E7%89%B9%E6%80%A7/C__11/C__11.html","title":"C++","lang":"zh-CN","frontmatter":{"description":"C++ 目录 C++新标准C++11/14 新标准简概 简概 学习参考 【B站】C++新标准-C++11/14，侯捷老师的课（侯捷C++系列课程，多人推荐）（主要参考） 【CSDN】别人的听课笔记 （挺深入，但说话讲得有点不清晰，有时我真的听不清他说的什么，像在学校听课一样，如果有字幕就好了） 【C语言中文网】C++11（主要参考） 《高速上手C++1...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/C__/08.%20%E6%96%B0%E7%89%B9%E6%80%A7/C__11/C__11.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"C++"}],["meta",{"property":"og:description","content":"C++ 目录 C++新标准C++11/14 新标准简概 简概 学习参考 【B站】C++新标准-C++11/14，侯捷老师的课（侯捷C++系列课程，多人推荐）（主要参考） 【CSDN】别人的听课笔记 （挺深入，但说话讲得有点不清晰，有时我真的听不清他说的什么，像在学校听课一样，如果有字幕就好了） 【C语言中文网】C++11（主要参考） 《高速上手C++1..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"C++\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"C++","slug":"c","link":"#c","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"C++新标准C++11/14","slug":"c-新标准c-11-14","link":"#c-新标准c-11-14","children":[{"level":2,"title":"新标准简概","slug":"新标准简概","link":"#新标准简概","children":[{"level":3,"title":"简概","slug":"简概","link":"#简概","children":[]},{"level":3,"title":"确认支持版本","slug":"确认支持版本","link":"#确认支持版本","children":[]}]},{"level":2,"title":"数据","slug":"数据","link":"#数据","children":[{"level":3,"title":"空指针 nullptr and std::nullptr_t","slug":"空指针-nullptr-and-std-nullptr-t","link":"#空指针-nullptr-and-std-nullptr-t","children":[]},{"level":3,"title":"自动类型推导 Automatic Type Deduction with auto","slug":"自动类型推导-automatic-type-deduction-with-auto","link":"#自动类型推导-automatic-type-deduction-with-auto","children":[]},{"level":3,"title":"类型推导 decltype 新关键字","slug":"类型推导-decltype-新关键字","link":"#类型推导-decltype-新关键字","children":[]}]},{"level":2,"title":"交互","slug":"交互","link":"#交互","children":[]},{"level":2,"title":"优化","slug":"优化","link":"#优化","children":[{"level":3,"title":"for 基于范围循环 range-based for statement","slug":"for-基于范围循环-range-based-for-statement","link":"#for-基于范围循环-range-based-for-statement","children":[]},{"level":3,"title":"volatile 禁止reorder","slug":"volatile-禁止reorder","link":"#volatile-禁止reorder","children":[]}]},{"level":2,"title":"封装","slug":"封装","link":"#封装","children":[{"level":3,"title":"Lambda 匿名函数","slug":"lambda-匿名函数","link":"#lambda-匿名函数","children":[{"level":4,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":4,"title":"原型","slug":"原型","link":"#原型","children":[]},{"level":4,"title":"底层原理 - mutable原理","slug":"底层原理-mutable原理","link":"#底层原理-mutable原理","children":[]},{"level":4,"title":"底层原理 - 引用传参","slug":"底层原理-引用传参","link":"#底层原理-引用传参","children":[]},{"level":4,"title":"模板中的使用","slug":"模板中的使用","link":"#模板中的使用","children":[]},{"level":4,"title":"其他","slug":"其他","link":"#其他","children":[]},{"level":4,"title":"错误记录 - 运行时崩溃","slug":"错误记录-运行时崩溃","link":"#错误记录-运行时崩溃","children":[]}]},{"level":3,"title":"noexcept 保证无异常","slug":"noexcept-保证无异常","link":"#noexcept-保证无异常","children":[]}]},{"level":2,"title":"面向对象","slug":"面向对象","link":"#面向对象","children":[{"level":3,"title":"=default，=delete","slug":"default-delete","link":"#default-delete","children":[]},{"level":3,"title":"explicit 针对一个以上参数的构造函数","slug":"explicit-针对一个以上参数的构造函数","link":"#explicit-针对一个以上参数的构造函数","children":[]},{"level":3,"title":"override 复写","slug":"override-复写","link":"#override-复写","children":[]},{"level":3,"title":"final 防止继承或复写","slug":"final-防止继承或复写","link":"#final-防止继承或复写","children":[]}]},{"level":2,"title":"泛型","slug":"泛型","link":"#泛型","children":[{"level":3,"title":"模板表达式的空格 Spaces in Template Expressions","slug":"模板表达式的空格-spaces-in-template-expressions","link":"#模板表达式的空格-spaces-in-template-expressions","children":[]},{"level":3,"title":"模板别名（Alias Template），using的三个作用","slug":"模板别名-alias-template-using的三个作用","link":"#模板别名-alias-template-using的三个作用","children":[]},{"level":3,"title":"可变类型模板（此处略）","slug":"可变类型模板-此处略","link":"#可变类型模板-此处略","children":[]}]},{"level":2,"title":"C++ Standard Library 新特性","slug":"c-standard-library-新特性","link":"#c-standard-library-新特性","children":[]},{"level":2,"title":"Standard Template Library 新特性","slug":"standard-template-library-新特性","link":"#standard-template-library-新特性","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":10.28,"words":3084},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/01. Language/C++/08. 新特性/C++11/C++11.md","autoDesc":true}');export{S as comp,V as data};

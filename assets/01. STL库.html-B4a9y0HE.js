import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as a,c,b as l,e as n,d as e,a as t}from"./app-BDO1bFk4.js";const r="/assets/20210317201935850-DpBd8rup.png",u="/assets/20210317201935543-CU5A1KnO.png",v="/assets/20210317201935515-BTVtcbC9.png",m="/assets/20210317201935516-BgAvinv2.png",o="/assets/20210317202836646-Cj0pMzgf.png",b={},p=t('<h1 id="c" tabindex="-1"><a class="header-anchor" href="#c"><span>C++</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="c-标准库" tabindex="-1"><a class="header-anchor" href="#c-标准库"><span>C++标准库</span></a></h1><p>C++标准库——体系结构与内核分析（C++ Standard Library —— architecure &amp; sources）</p><ul><li>体系结构，指C++标准库主要分为6个部件</li><li>内核分析，指会分析 source code 源代码</li></ul><p>参考：</p>',6),g={href:"https://www.bilibili.com/video/BV1BX4y1G7bX",target:"_blank",rel:"noopener noreferrer"},h={href:"https://blog.csdn.net/ncepu_Chen/article/details/114947710",target:"_blank",rel:"noopener noreferrer"},_=l("ul",null,[l("li",null,"P3~P7不太懂，测试好难")],-1),q={href:"https://baptiste-wicht.com/posts/2012/11/cpp-benchmark-vector-vs-list.html#",target:"_blank",rel:"noopener noreferrer"},f=l("li",null,[n("书录 "),l("ul",null,[l("li",null,"《The C++ Standard Library》"),l("li",null,"《STL源码剖析》侯捷（自己推荐自己的书2333）")])],-1),k=t(`<h2 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h2><h3 id="简概-1" tabindex="-1"><a class="header-anchor" href="#简概-1"><span>简概</span></a></h3><p>标准库特点</p><ul><li>主要使用模板做的（Generic Programming（GP、泛型编程））</li><li>C++标准库（C++ Standard Library）包含 标准模板库（Standard Template Library）</li><li>头文件问题 <ul><li>C++标准库的头文件不带扩展名（.h）</li><li>新式 C头文件不带扩展名，例<code>#include &lt;cstdio&gt;</code></li><li>旧式 C头文件带扩展名，仍可使用，例<code>#include &lt;stdio.h&gt;</code></li><li>新式 C头文件组件封装于std命名空间中，使用<code>using namespace std;</code> or <code>using std::cout;</code></li><li>旧式 C头文件组件不封装与std头文件中</li></ul></li></ul><h3 id="stl六大组件" tabindex="-1"><a class="header-anchor" href="#stl六大组件"><span>STL六大组件</span></a></h3><p>STL六大组件，包括</p><ul><li><strong>容器</strong> (container)</li><li><strong>分配器</strong> (allocator) <ul><li>容器需要一个分配器，若不写则容器内部会有一个默认分配器</li><li>例<code>vector&lt;int,allocator&lt;int&gt;&gt; vi(ia,ia+6);</code>可简写为<code>vector&lt;int&gt; vi(ia);</code></li></ul></li><li><strong>算法</strong> (algorithm)</li><li><strong>迭代器</strong> (iterator)</li><li><strong>适配器</strong> (adapter)</li><li><strong>仿函数</strong> (functor)</li></ul><p>结构</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
<span class="token keyword">subgraph</span> 迭代器适配器
	迭代器
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> 容器适配器
	容器
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> 仿函数适配器
	仿函数
<span class="token keyword">end</span>
分配器<span class="token arrow operator">--&gt;</span>容器
仿函数<span class="token arrow operator">--&gt;</span>算法<span class="token arrow operator">-.-&gt;</span>迭代器<span class="token arrow operator">-.-&gt;</span>容器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+r+'" alt="请添加图片描述" tabindex="0" loading="lazy"><figcaption>请添加图片描述</figcaption></figure><h3 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度"><span>时间复杂度</span></a></h3>',11),x=l("ul",null,[l("li",null,[l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("semantics",null,[l("mrow",null,[l("mi",null,"O"),l("mo",{stretchy:"false"},"("),l("mn",null,"1"),l("mo",{stretchy:"false"},")")]),l("annotation",{encoding:"application/x-tex"},"O(1)")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),l("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),l("span",{class:"mopen"},"("),l("span",{class:"mord"},"1"),l("span",{class:"mclose"},")")])])]),n("或"),l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("semantics",null,[l("mrow",null,[l("mi",null,"O"),l("mo",{stretchy:"false"},"("),l("mi",null,"c"),l("mo",{stretchy:"false"},")")]),l("annotation",{encoding:"application/x-tex"},"O(c)")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),l("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),l("span",{class:"mopen"},"("),l("span",{class:"mord mathnormal"},"c"),l("span",{class:"mclose"},")")])])]),n("：常数时间（constant time）")]),l("li",null,[l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("semantics",null,[l("mrow",null,[l("mi",null,"O"),l("mo",{stretchy:"false"},"("),l("mi",null,"n"),l("mo",{stretchy:"false"},")")]),l("annotation",{encoding:"application/x-tex"},"O(n)")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),l("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),l("span",{class:"mopen"},"("),l("span",{class:"mord mathnormal"},"n"),l("span",{class:"mclose"},")")])])]),n("：线性时间（linear time）")]),l("li",null,[l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("semantics",null,[l("mrow",null,[l("mi",null,"O"),l("mo",{stretchy:"false"},"("),l("mi",null,"l"),l("mi",null,"o"),l("msub",null,[l("mi",null,"g"),l("mn",null,"2")]),l("mi",null,"n"),l("mo",{stretchy:"false"},")")]),l("annotation",{encoding:"application/x-tex"},"O(log_2n)")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),l("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),l("span",{class:"mopen"},"("),l("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),l("span",{class:"mord mathnormal"},"o"),l("span",{class:"mord"},[l("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),l("span",{class:"msupsub"},[l("span",{class:"vlist-t vlist-t2"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.3011em"}},[l("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[l("span",{class:"pstrut",style:{height:"2.7em"}}),l("span",{class:"sizing reset-size6 size3 mtight"},[l("span",{class:"mord mtight"},"2")])])]),l("span",{class:"vlist-s"},"​")]),l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.15em"}},[l("span")])])])])]),l("span",{class:"mord mathnormal"},"n"),l("span",{class:"mclose"},")")])])]),n("：次线性时间（sub-linear time）")]),l("li",null,[l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("semantics",null,[l("mrow",null,[l("mi",null,"O"),l("mo",{stretchy:"false"},"("),l("msup",null,[l("mi",null,"n"),l("mn",null,"2")]),l("mo",{stretchy:"false"},")")]),l("annotation",{encoding:"application/x-tex"},"O(n^2)")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),l("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),l("span",{class:"mopen"},"("),l("span",{class:"mord"},[l("span",{class:"mord mathnormal"},"n"),l("span",{class:"msupsub"},[l("span",{class:"vlist-t"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.8141em"}},[l("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[l("span",{class:"pstrut",style:{height:"2.7em"}}),l("span",{class:"sizing reset-size6 size3 mtight"},[l("span",{class:"mord mtight"},"2")])])])])])])]),l("span",{class:"mclose"},")")])])]),n("：平方时间（quadratic time）")]),l("li",null,[l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("semantics",null,[l("mrow",null,[l("mi",null,"O"),l("mo",{stretchy:"false"},"("),l("msup",null,[l("mi",null,"n"),l("mn",null,"3")]),l("mo",{stretchy:"false"},")")]),l("annotation",{encoding:"application/x-tex"},"O(n^3)")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),l("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),l("span",{class:"mopen"},"("),l("span",{class:"mord"},[l("span",{class:"mord mathnormal"},"n"),l("span",{class:"msupsub"},[l("span",{class:"vlist-t"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.8141em"}},[l("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[l("span",{class:"pstrut",style:{height:"2.7em"}}),l("span",{class:"sizing reset-size6 size3 mtight"},[l("span",{class:"mord mtight"},"3")])])])])])])]),l("span",{class:"mclose"},")")])])]),n("：立方时间（cubic time）")]),l("li",null,[l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("semantics",null,[l("mrow",null,[l("mi",null,"O"),l("mo",{stretchy:"false"},"("),l("msup",null,[l("mn",null,"2"),l("mi",null,"n")]),l("mo",{stretchy:"false"},")")]),l("annotation",{encoding:"application/x-tex"},"O(2^n)")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),l("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),l("span",{class:"mopen"},"("),l("span",{class:"mord"},[l("span",{class:"mord"},"2"),l("span",{class:"msupsub"},[l("span",{class:"vlist-t"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.6644em"}},[l("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[l("span",{class:"pstrut",style:{height:"2.7em"}}),l("span",{class:"sizing reset-size6 size3 mtight"},[l("span",{class:"mord mathnormal mtight"},"n")])])])])])])]),l("span",{class:"mclose"},")")])])]),n("：指数时间（exponential time）")]),l("li",null,[l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("semantics",null,[l("mrow",null,[l("mi",null,"O"),l("mo",{stretchy:"false"},"("),l("mi",null,"n"),l("msub",null,[l("mrow",null,[l("mi",null,"log"),l("mo",null,"⁡")]),l("mn",null,"2")]),l("mi",null,"n"),l("mo",{stretchy:"false"},")")]),l("annotation",{encoding:"application/x-tex"},"O(n\\log_2n)")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),l("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),l("span",{class:"mopen"},"("),l("span",{class:"mord mathnormal"},"n"),l("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),l("span",{class:"mop"},[l("span",{class:"mop"},[n("lo"),l("span",{style:{"margin-right":"0.01389em"}},"g")]),l("span",{class:"msupsub"},[l("span",{class:"vlist-t vlist-t2"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.207em"}},[l("span",{style:{top:"-2.4559em","margin-right":"0.05em"}},[l("span",{class:"pstrut",style:{height:"2.7em"}}),l("span",{class:"sizing reset-size6 size3 mtight"},[l("span",{class:"mord mtight"},"2")])])]),l("span",{class:"vlist-s"},"​")]),l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.2441em"}},[l("span")])])])])]),l("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),l("span",{class:"mord mathnormal"},"n"),l("span",{class:"mclose"},")")])])]),n("：介于线性及二次方成长的中间")])],-1),y=t('<h3 id="前闭后开区间" tabindex="-1"><a class="header-anchor" href="#前闭后开区间"><span>前闭后开区间</span></a></h3><p>STL中的区间遵循<strong>前闭后开</strong>的表示方式,迭代器<code>begin</code>指向的是第一个元素的起点,<code>end</code>指向的是<strong>最后一个元素的下一个元素</strong>.</p><figure><img src="'+u+`" alt="请添加图片描述" tabindex="0" loading="lazy"><figcaption>请添加图片描述</figcaption></figure><h2 id="程序测试-容器" tabindex="-1"><a class="header-anchor" href="#程序测试-容器"><span>程序测试 - 容器</span></a></h2><h3 id="测试程序" tabindex="-1"><a class="header-anchor" href="#测试程序"><span>测试程序</span></a></h3><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>/* 使用命名空间 */
using std::cin;
using std::cout;
using std::string;

/* 输入并获取一个目标长整数 */
long get_a_target_long()
{
	long target=0;
	cout &lt;&lt; &quot;target (0~&quot; &lt;&lt; RAND_MAX &lt;&lt; &quot;): &quot;;	// 随机数？
    cin &gt;&gt; target;
	return target;
}

/* 输入并获取一个目标字符串 */
string get_a_target_string()
{
	long target=0;
    char buf[10];
	cout &lt;&lt; &quot;target (0~&quot; &lt;&lt; RAND_MAX &lt;&lt; &quot;): &quot;;	// 随机数？
    cin &gt;&gt; target;
	snprintf(buf, 10, &quot;%d&quot;, target);			// 将数值转换为字符串
    return string(buf);
}

/* 比较 - 长整数方式 */
int compareLongs(const void* a, const void* b)	// void 指针可以指向任意类型的数据
{
    return (*(long*)a - *(long*)b);				// 先转换指针类型再取指针值
}

/* 比较 - 字符串方式 */
int compareStrings(const void* a, const void* b)// void 指针可以指向任意类型的数据
{
	if(*(string*)a &gt; *(string*)b)				// 先转换指针类型再取指针值
        return 1;
    else if(*(string*)a &lt; *(string*)b)
        return -1;
    else
        return 0; 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试-array" tabindex="-1"><a class="header-anchor" href="#测试-array"><span>测试 - array</span></a></h3><p><s>扩充</s>：不可扩充</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;array&gt;
#include &lt;iostream&gt;
#include &lt;ctime&gt;
#include &lt;cstdlib&gt; // qsort, bsearch, NULL

namespace test01
{
const long ASIZE = 500000L;											// 数组大小
void test_array() {
    cout &lt;&lt; &quot;\\ntest_array().......... \\n&quot;;

    /** 创建操作 */
	array&lt;long, ASIZE&gt; c;											// 定义容器

    /** 插入操作 */
	clock_t timeStart = clock();									// 取时间戳
    for (long i = 0; i &lt; ASIZE; ++i) {								// 随机填充满容器
        c[i] = rand();
    }
    cout &lt;&lt; &quot;milli-seconds : &quot; &lt;&lt; (clock() - timeStart) &lt;&lt; endl;	// 所用的时间计时（时间戳相减）
    cout &lt;&lt; &quot;array.size()= &quot; &lt;&lt; c.size() &lt;&lt; endl;					// 大小
    cout &lt;&lt; &quot;array.front()= &quot; &lt;&lt; c.front() &lt;&lt; endl;					// 第一个元素（随机数）
    cout &lt;&lt; &quot;array.back()= &quot; &lt;&lt; c.back() &lt;&lt; endl;					// 最后个元素（随机数）
    cout &lt;&lt; &quot;array.data()= &quot; &lt;&lt; c.data() &lt;&lt; endl;					// 起点的地址

    /** 排序 + 查找操作 */
    long target = get_a_target_long();								// 获取一个长整数
    timeStart = clock();											// 取时间戳
    qsort(c.data(), ASIZE, sizeof(long), compareLongs);				// 排序 - 长整数比较
    long *pItem = (long*)bsearch(&amp;target, (c.data()), ASIZE, sizeof(long), compareLongs);	// 排序后二分查找 - 长整数比较
    cout &lt;&lt; &quot;qsort()+bsearch(), milli-seconds : &quot; &lt;&lt; (clock() - timeStart) &lt;&lt; endl;    // 所用的时间（时间戳相减）
    if (pItem != NULL)
        cout &lt;&lt; &quot;found, &quot; &lt;&lt; *pItem &lt;&lt; endl;
    else
        cout &lt;&lt; &quot;not found! &quot; &lt;&lt; endl;
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>select: 1

test_array()..........
milli-seconds : 47
array.size()= 500000
array.front()= 3557
array.back()= 23084
array.data()= 0x47a20
target (0~32767): 20000
qsort()+bsearch(), milli-seconds : 187
found, 20000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试-vector" tabindex="-1"><a class="header-anchor" href="#测试-vector"><span>测试 - vector</span></a></h3><p><strong>扩充：底层是一段连续的内存空间，当容器满时进行扩容，将容器大小扩容为原来的两倍</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>namespace test02
{
void test_vector(long&amp; value)
{
    cout &lt;&lt; &quot;\\ntest_vector().......... \\n&quot;;

    /** 创建操作 */
	vector&lt;string&gt; c;												// 定义容器
    char buf[10];

    /** 插入操作 */
	clock_t timeStart = clock();									// 取时间戳
    for (long i = 0; i &lt; ASIZE; ++i) {								// 随机填充满容器
        try{
            snprintf(buf, 10, &quot;%d&quot;, rand()); // 按format格式化为字符串
            c.push_back(string(buf));
        }
        catch(exception&amp; p){ // 防止内存不足
            cout &lt;&lt; &quot;i:&quot; &lt;&lt; i &lt;&lt; &quot; &quot; &lt;&lt; p.what() &lt;&lt; endl;
            abort();
        }											
    }
    cout &lt;&lt; &quot;milli-seconds : &quot; &lt;&lt; (clock() - timeStart) &lt;&lt; endl;	// 所用的时间计时（时间戳相减）
    cout &lt;&lt; &quot;array.size()= &quot; &lt;&lt; c.size() &lt;&lt; endl;					// 大小
    cout &lt;&lt; &quot;array.front()= &quot; &lt;&lt; c.front() &lt;&lt; endl;					// 第一个元素（随机数）
    cout &lt;&lt; &quot;array.back()= &quot; &lt;&lt; c.back() &lt;&lt; endl;					// 最后个元素（随机数）
    cout &lt;&lt; &quot;array.data()= &quot; &lt;&lt; c.data() &lt;&lt; endl;					// 起点的地址

    /** 排序 + 查找操作 */
    // 直接find方法（在此例中更快）
	string target = get_a_target_string();
    {
        timeStart = clock();
		auto pItem = find(c.begin(), c.end(), target);
        cout &lt;&lt; &quot;std::find(), milli-seconds : &quot; &lt;&lt; (clock() - timeStart) &lt;&lt; endl;
        if (pItem != c.end())
            cout &lt;&lt; &quot;found, &quot; &lt;&lt; *pItem &lt;&lt; endl &lt;&lt; endl;
        else
            cout &lt;&lt; &quot;not found! &quot; &lt;&lt; endl &lt;&lt; endl;
    }
    // 先排序后find方法
    {
        timeStart = clock();
        sort(c.begin(), c.end());	// 这里是标准库里的sort
        cout &lt;&lt; &quot;sort(), milli-seconds : &quot; &lt;&lt; (clock() - timeStart) &lt;&lt; endl;
        timeStart = clock();
		string *pItem = (string *)::bsearch(&amp;target, (c.data()), c.size(), sizeof(string), compareStrings);
        cout &lt;&lt; &quot;bsearch(), milli-seconds : &quot; &lt;&lt; (clock() - timeStart) &lt;&lt; endl;
        if (pItem != NULL)
            cout &lt;&lt; &quot;found, &quot; &lt;&lt; *pItem &lt;&lt; endl &lt;&lt; endl;
        else
            cout &lt;&lt; &quot;not found! &quot; &lt;&lt; endl &lt;&lt; endl;
	}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>select:2
how many elements:1000000

test_vector()..........
milli-seconds : 3063
vector.size()= 1000000
vector.front()= 4047
vector.back()= 2877
vector.data()= 0x2880020
vector.capacity()= 1048576	// 表示使用了1000000个元素后，还剩余48576个元素空间（浪费）

target (0~32767):23456
std::find(), milli-seconds : 0
found, 23456

sort(), milli-seconds : 2695
bsearch(), milli-seconds : 1
found, 23456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试-list" tabindex="-1"><a class="header-anchor" href="#测试-list"><span>测试 - list</span></a></h3><p><strong>扩充：多一个元素，非常节省内存</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;list&gt;
#include &lt;stdexcept&gt;
#include &lt;string&gt;
#include &lt;cstdlib&gt; 		// abort()
#include &lt;cstdio&gt;  		// snprintf()
#include &lt;algorithm&gt; 	// find()
#include &lt;iostream&gt;
#include &lt;ctime&gt;

void test_list(long &amp;value) {
    cout &lt;&lt; &quot;\\ntest_list().......... \\n&quot;;

    /** 创建操作 */
    list &lt;string&gt; c;
    char buf[10];

    /** 插入操作 */
	clock_t timeStart = clock();
    for (long i = 0; i &lt; value; ++i) {
        try {
            snprintf(buf, 10, &quot;%d&quot;, rand());
            c.push_back(string(buf));
        }
        catch (exception &amp;p) {
            cout &lt;&lt; &quot;i=&quot; &lt;&lt; i &lt;&lt; &quot; &quot; &lt;&lt; p.what() &lt;&lt; endl;
            abort();
        }
    }
    cout &lt;&lt; &quot;milli-seconds : &quot; &lt;&lt; (clock() - timeStart) &lt;&lt; endl;
    cout &lt;&lt; &quot;list.size()= &quot; &lt;&lt; c.size() &lt;&lt; endl;
    cout &lt;&lt; &quot;list.max_size()= &quot; &lt;&lt; c.max_size() &lt;&lt; endl;    // 357913941
    cout &lt;&lt; &quot;list.front()= &quot; &lt;&lt; c.front() &lt;&lt; endl;
    cout &lt;&lt; &quot;list.back()= &quot; &lt;&lt; c.back() &lt;&lt; endl;

    /** 排序 + 查找操作 */
    // find方式
	string target = get_a_target_string();
	timeStart = clock();
	auto pItem = find(c.begin(), c.end(), target);
    cout &lt;&lt; &quot;std::find(), milli-seconds : &quot; &lt;&lt; (clock() - timeStart) &lt;&lt; endl;
    if (pItem != c.end())
        cout &lt;&lt; &quot;found, &quot; &lt;&lt; *pItem &lt;&lt; endl;
    else
        cout &lt;&lt; &quot;not found! &quot; &lt;&lt; endl;
	timeStart = clock();
    // 排序
    c.sort();	// 这里是容器里实现的sort，不是标准库里的sort。一般前者效率更高
    cout &lt;&lt; &quot;c.sort(), milli-seconds : &quot; &lt;&lt; (clock() - timeStart) &lt;&lt; endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>how many elements:1000000

test_list()..........
milli-seconds : 3265
list.size()= 1000000
list.max_size()= 384307168202282325			???
list.front()= 31411
list.back()= 7939
target (0~32767):23456
std::find(), milli-seconds : 4
found, 23456
c.sort(), milli-seconds : 3610
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试-forward-list" tabindex="-1"><a class="header-anchor" href="#测试-forward-list"><span>测试 - forward_list</span></a></h3><p><strong>扩充：多一个元素，非常节省内存</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;forward_list&gt;
#include &lt;stdexcept&gt;
#include &lt;string&gt;
#include &lt;cstdlib&gt; 	// abort()
#include &lt;cstdio&gt;  	// snprintf()
#include &lt;iostream&gt;
#include &lt;ctime&gt;

void test_forward_list(long &amp;value) {
    cout &lt;&lt; &quot;\\ntest_forward_list().......... \\n&quot;;

forward_list &lt;string&gt; c;
char buf[10];

clock_t timeStart = clock();
    for (long i = 0; i &lt; value; ++i) {
        try {
            snprintf(buf, 10, &quot;%d&quot;, rand());
            c.push_front(string(buf));	// 头部插入，因为后部操作要遍历整个链表
        }
        catch (exception &amp;p) {
            cout &lt;&lt; &quot;i=&quot; &lt;&lt; i &lt;&lt; &quot; &quot; &lt;&lt; p.what() &lt;&lt; endl;
            abort();
        }
    }
    cout &lt;&lt; &quot;milli-seconds : &quot; &lt;&lt; (clock() - timeStart) &lt;&lt; endl;
    cout &lt;&lt; &quot;forward_list.max_size()= &quot; &lt;&lt; c.max_size() &lt;&lt; endl;  //536870911
    cout &lt;&lt; &quot;forward_list.front()= &quot; &lt;&lt; c.front() &lt;&lt; endl;

string target = get_a_target_string();
    timeStart = clock();
auto pItem = find(c.begin(), c.end(), target);
    cout &lt;&lt; &quot;std::find(), milli-seconds : &quot; &lt;&lt; (clock() - timeStart) &lt;&lt; endl;

    if (pItem != c.end())
        cout &lt;&lt; &quot;found, &quot; &lt;&lt; *pItem &lt;&lt; endl;
    else
        cout &lt;&lt; &quot;not found! &quot; &lt;&lt; endl;

    timeStart = clock();
    c.sort();
    cout &lt;&lt; &quot;c.sort(), milli-seconds : &quot; &lt;&lt; (clock() - timeStart) &lt;&lt; endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>how many elements:1000000

test_forward_list()..........
milli-seconds : 296
forward_list.max_size()= 461168601842738790
forward_list.front()= 11513
target (0~32767):23456
std::find(), milli-seconds : 9
found, 23456
c.sort(), milli-seconds : 3706
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试-slist" tabindex="-1"><a class="header-anchor" href="#测试-slist"><span>测试 - slist</span></a></h3><p>测试略</p><p>和<code>forward_list</code>基本一样。但不属于C++ STL，是旧版本就有的，使用要<code>#include &lt;ext\\slist&gt;</code></p><h3 id="测试-deque" tabindex="-1"><a class="header-anchor" href="#测试-deque"><span>测试 - deque</span></a></h3><p>**扩充：每次扩充一个buffer。**deque是分段连续，抽象是连续的，但具体实现上是分为很多段的，每段叫一个buffer（也就是说添加多个元素后，占用内存才会多上一点）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;deque&gt;
#include &lt;stdexcept&gt;
#include &lt;string&gt;
#include &lt;cstdlib&gt; 	// abort()
#include &lt;cstdio&gt;  	// snprintf()
#include &lt;iostream&gt;
#include &lt;ctime&gt;

void test_deque(long &amp;value) {
    cout &lt;&lt; &quot;\\ntest_deque().......... \\n&quot;;

deque &lt;string&gt; c;
char buf[10];

clock_t timeStart = clock();
    for (long i = 0; i &lt; value; ++i) {
        try {
            snprintf(buf, 10, &quot;%d&quot;, rand());
            c.push_back(string(buf));
        }
        catch (exception &amp;p) {
            cout &lt;&lt; &quot;i=&quot; &lt;&lt; i &lt;&lt; &quot; &quot; &lt;&lt; p.what() &lt;&lt; endl;
            abort();
        }
    }
    cout &lt;&lt; &quot;milli-seconds : &quot; &lt;&lt; (clock() - timeStart) &lt;&lt; endl;
    cout &lt;&lt; &quot;deque.size()= &quot; &lt;&lt; c.size() &lt;&lt; endl;
    cout &lt;&lt; &quot;deque.front()= &quot; &lt;&lt; c.front() &lt;&lt; endl;
    cout &lt;&lt; &quot;deque.back()= &quot; &lt;&lt; c.back() &lt;&lt; endl;
    cout &lt;&lt; &quot;deque.max_size()= &quot; &lt;&lt; c.max_size() &lt;&lt; endl;    

string target = get_a_target_string();
    timeStart = clock();
auto pItem = find(c.begin(), c.end(), target);
    cout &lt;&lt; &quot;std::find(), milli-seconds : &quot; &lt;&lt; (clock() - timeStart) &lt;&lt; endl;

    if (pItem != c.end())
        cout &lt;&lt; &quot;found, &quot; &lt;&lt; *pItem &lt;&lt; endl;
    else
        cout &lt;&lt; &quot;not found! &quot; &lt;&lt; endl;

    timeStart = clock();
    sort(c.begin(), c.end());
    cout &lt;&lt; &quot;sort(), milli-seconds : &quot; &lt;&lt; (clock() - timeStart) &lt;&lt; endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试-stack-和-queue" tabindex="-1"><a class="header-anchor" href="#测试-stack-和-queue"><span>测试 - stack 和 queue</span></a></h3><p><code>stack</code>和<code>queue</code>底层是通过<code>deque</code>实现的,从设计模式上来说，这两种容器本质上是<code>deque</code>的适配器</p><p>但不同于deque：这两个容器的元素进出是有严格顺序的,因此<code>stack</code>和<code>queue</code><strong>不</strong>支持有关迭代器的操作</p><table><thead><tr><th><code>stack</code></th><th><code>queue</code></th></tr></thead><tbody><tr><td><img src="`+v+'" alt="请添加图片描述" loading="lazy"></td><td><img src="'+m+`" alt="请添加图片描述" loading="lazy"></td></tr></tbody></table><p>demo</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;stack&gt;
#include &lt;queue&gt;
#include &lt;stdexcept&gt;
#include &lt;string&gt;
#include &lt;cstdlib&gt; 	// abort()
#include &lt;cstdio&gt;  	// snprintf()
#include &lt;iostream&gt;
#include &lt;ctime&gt;

void test_stack(long &amp;value) {
    cout &lt;&lt; &quot;\\ntest_stack().......... \\n&quot;;

stack &lt;string&gt; c;
char buf[10];

clock_t timeStart = clock();
    for (long i = 0; i &lt; value; ++i) {
        try {
            snprintf(buf, 10, &quot;%d&quot;, rand());
            c.push(string(buf));
        }
        catch (exception &amp;p) {
            cout &lt;&lt; &quot;i=&quot; &lt;&lt; i &lt;&lt; &quot; &quot; &lt;&lt; p.what() &lt;&lt; endl;
            abort();
        }
    }
    cout &lt;&lt; &quot;milli-seconds : &quot; &lt;&lt; (clock() - timeStart) &lt;&lt; endl;
    cout &lt;&lt; &quot;stack.size()= &quot; &lt;&lt; c.size() &lt;&lt; endl;
    cout &lt;&lt; &quot;stack.top()= &quot; &lt;&lt; c.top() &lt;&lt; endl;
    c.pop();
    cout &lt;&lt; &quot;stack.size()= &quot; &lt;&lt; c.size() &lt;&lt; endl;
    cout &lt;&lt; &quot;stack.top()= &quot; &lt;&lt; c.top() &lt;&lt; endl;
}

void test_queue(long &amp;value) {
    cout &lt;&lt; &quot;\\ntest_queue().......... \\n&quot;;

queue &lt;string&gt; c;
char buf[10];

clock_t timeStart = clock();
    for (long i = 0; i &lt; value; ++i) {
        try {
            snprintf(buf, 10, &quot;%d&quot;, rand());
            c.push(string(buf));
        }
        catch (exception &amp;p) {
            cout &lt;&lt; &quot;i=&quot; &lt;&lt; i &lt;&lt; &quot; &quot; &lt;&lt; p.what() &lt;&lt; endl;
            abort();
        }
    }
    cout &lt;&lt; &quot;milli-seconds : &quot; &lt;&lt; (clock() - timeStart) &lt;&lt; endl;
    cout &lt;&lt; &quot;queue.size()= &quot; &lt;&lt; c.size() &lt;&lt; endl;
    cout &lt;&lt; &quot;queue.front()= &quot; &lt;&lt; c.front() &lt;&lt; endl;
    cout &lt;&lt; &quot;queue.back()= &quot; &lt;&lt; c.back() &lt;&lt; endl;
    c.pop();
    cout &lt;&lt; &quot;queue.size()= &quot; &lt;&lt; c.size() &lt;&lt; endl;
    cout &lt;&lt; &quot;queue.front()= &quot; &lt;&lt; c.front() &lt;&lt; endl;
    cout &lt;&lt; &quot;queue.back()= &quot; &lt;&lt; c.back() &lt;&lt; endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>how many elements:300000

test_stack()..........
milli-seconds : 57
stack.size()= 300000
stack.top()= 17153
stack.size()= 299999
stack.top()= 31703


how many elements:300000

test_queue()..........
milli-seconds : 54
queue.size()= 300000
queue.front()= 6608
queue.back()= 29870
queue.size()= 299999
queue.front()= 7837
queue.back()= 29870
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试-multiset-和-multimap" tabindex="-1"><a class="header-anchor" href="#测试-multiset-和-multimap"><span>测试 - multiset 和 multimap</span></a></h3><p>multiset 和 multimap，即使重复也可以添加进去</p><p><code>multiset</code>和<code>multimap</code>底层是使用红黑树实现的</p><p>因为<code>multimap</code>支持重复的key,因此不能使用重载的<code>[]</code>运算符进行插入</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;set&gt;
#include &lt;map&gt;
#include &lt;stdexcept&gt;
#include &lt;string&gt;
#include &lt;cstdlib&gt; 	// abort()
#include &lt;cstdio&gt;  	// snprintf()
#include &lt;iostream&gt;
#include &lt;ctime&gt;

void test_multiset(long &amp;value) {
    cout &lt;&lt; &quot;\\ntest_multiset().......... \\n&quot;;

    /** 填充 */
    multiset &lt;string&gt; c;
    char buf[10];
    clock_t timeStart = clock();
    for (long i = 0; i &lt; value; ++i) {
        try {
            snprintf(buf, 10, &quot;%d&quot;, rand());
            c.insert(string(buf));	// insert
        }
        catch (exception &amp;p) {
            cout &lt;&lt; &quot;i=&quot; &lt;&lt; i &lt;&lt; &quot; &quot; &lt;&lt; p.what() &lt;&lt; endl;
            abort();
        }
    }
    cout &lt;&lt; &quot;milli-seconds : &quot; &lt;&lt; (clock() - timeStart) &lt;&lt; endl;
    cout &lt;&lt; &quot;multiset.size()= &quot; &lt;&lt; c.size() &lt;&lt; endl;
    cout &lt;&lt; &quot;multiset.max_size()= &quot; &lt;&lt; c.max_size() &lt;&lt; endl;   

    /** 查找 */
	string target = get_a_target_string();
    {
        timeStart = clock();
        auto pItem = find(c.begin(), c.end(), target);    	//比 multiset::find(...) 慢很多
        cout &lt;&lt; &quot;std::find(), milli-seconds : &quot; &lt;&lt; (clock() - timeStart) &lt;&lt; endl;
        if (pItem != c.end())
            cout &lt;&lt; &quot;found, &quot; &lt;&lt; *pItem &lt;&lt; endl;
        else
            cout &lt;&lt; &quot;not found! &quot; &lt;&lt; endl;
    }

    {
        timeStart = clock();
        auto pItem = c.find(target);        				//比 std::find(...) 快很多
        cout &lt;&lt; &quot;c.find(), milli-seconds : &quot; &lt;&lt; (clock() - timeStart) &lt;&lt; endl;
        if (pItem != c.end())
            cout &lt;&lt; &quot;found, &quot; &lt;&lt; *pItem &lt;&lt; endl;
        else
            cout &lt;&lt; &quot;not found! &quot; &lt;&lt; endl;
    }
}

void test_multimap(long &amp;value) {
    cout &lt;&lt; &quot;\\ntest_multimap().......... \\n&quot;;

    multimap&lt;long, string&gt; c;
	char buf[10];

	clock_t timeStart = clock();
    for (long i = 0; i &lt; value; ++i) {
        try {
            snprintf(buf, 10, &quot;%d&quot;, rand());
            // multimap 不可使用 [] 做 insertion，map则可以
            c.insert(pair&lt;long, string&gt;(i, buf));
        }
        catch (exception &amp;p) {
            cout &lt;&lt; &quot;i=&quot; &lt;&lt; i &lt;&lt; &quot; &quot; &lt;&lt; p.what() &lt;&lt; endl;
            abort();
        }
    }
    cout &lt;&lt; &quot;milli-seconds : &quot; &lt;&lt; (clock() - timeStart) &lt;&lt; endl;
    cout &lt;&lt; &quot;multimap.size()= &quot; &lt;&lt; c.size() &lt;&lt; endl;
    cout &lt;&lt; &quot;multimap.max_size()= &quot; &lt;&lt; c.max_size() &lt;&lt; endl;    //178956970

	long target = get_a_target_long();
    timeStart = clock();
    auto pItem = c.find(target);
    cout &lt;&lt; &quot;c.find(), milli-seconds : &quot; &lt;&lt; (clock() - timeStart) &lt;&lt; endl;
    if (pItem != c.end())
        cout &lt;&lt; &quot;found, value=&quot; &lt;&lt; (*pItem).second &lt;&lt; endl;
    else
        cout &lt;&lt; &quot;not found! &quot; &lt;&lt; endl;

    c.clear();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// multiset
how many elements:1000000

test_multiset()..........
milli-seconds : 5202
multiset.size()= 1000000
multiset.max_size()= 288230376151711743
target (0~32767):23456
std::find(), milli-seconds : 75
found, 23456
c.find(), milli-seconds : 0
found, 23456

// multimap
how many elements:1000000

test_multimap()..........
milli-seconds : 1423
multimap.size()= 1000000
multimap.max_size()= 256204778801521550
target (0~32767):23456
c.find(), milli-seconds : 0
found, value=13328
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试-set-和-map" tabindex="-1"><a class="header-anchor" href="#测试-set-和-map"><span>测试 - set 和 map</span></a></h3><p>set 和 map 的原因是，这两个不能重复，重复的话会添加不进去</p><p>代码：略</p><p>set 输出</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>select: 13
how many elements: 1000000
    
test_set()..........
milli-seconds: 3922
set.size()= 32768			// 因为会重复，size比elements少
set.max_size()= 214748364
target (0~32767): 23456
::find(),milli-seconds: 0
found, 23456
c.find(),milli-seconds: 0
found, 23456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>map 输出</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>select: 14
how many elements: 1000000
    
test_set()..........
milli-seconds: 4890
set.size()= 1000000			// 一样，因为key不重复
set.max_size()= 178956970
target (0~32767): 23456
c.find(),milli-seconds: 0
found, 23456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试-unordered-multiset-和-unordered-multimap" tabindex="-1"><a class="header-anchor" href="#测试-unordered-multiset-和-unordered-multimap"><span>测试 - unordered_multiset 和 unordered_multimap</span></a></h3><p><strong>扩充：<code>unordered_multiset</code>和<code>unordered_multimap</code>元素数目达到篮子个数时，则容器扩容，将篮子数组扩充约一倍</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;unordered_set&gt;
#include &lt;unordered_map&gt;
#include &lt;stdexcept&gt;
#include &lt;string&gt;
#include &lt;cstdlib&gt; 	// abort()
#include &lt;cstdio&gt;  	// snprintf()
#include &lt;iostream&gt;
#include &lt;ctime&gt;

void test_unordered_multiset(long &amp;value) {
    cout &lt;&lt; &quot;\\ntest_unordered_multiset().......... \\n&quot;;

unordered_multiset &lt;string&gt; c;
char buf[10];

clock_t timeStart = clock();
    for (long i = 0; i &lt; value; ++i) {
        try {
            snprintf(buf, 10, &quot;%d&quot;, rand());
            c.insert(string(buf));
        }
        catch (exception &amp;p) {
            cout &lt;&lt; &quot;i=&quot; &lt;&lt; i &lt;&lt; &quot; &quot; &lt;&lt; p.what() &lt;&lt; endl;
            abort();
        }
    }
    cout &lt;&lt; &quot;milli-seconds : &quot; &lt;&lt; (clock() - timeStart) &lt;&lt; endl;
    cout &lt;&lt; &quot;unordered_multiset.size()= &quot; &lt;&lt; c.size() &lt;&lt; endl;
    cout &lt;&lt; &quot;unordered_multiset.max_size()= &quot; &lt;&lt; c.max_size() &lt;&lt; endl;    //357913941
    cout &lt;&lt; &quot;unordered_multiset.bucket_count()= &quot; &lt;&lt; c.bucket_count() &lt;&lt; endl;
    cout &lt;&lt; &quot;unordered_multiset.load_factor()= &quot; &lt;&lt; c.load_factor() &lt;&lt; endl;
    cout &lt;&lt; &quot;unordered_multiset.max_load_factor()= &quot; &lt;&lt; c.max_load_factor() &lt;&lt; endl;
    cout &lt;&lt; &quot;unordered_multiset.max_bucket_count()= &quot; &lt;&lt; c.max_bucket_count() &lt;&lt; endl;
    for (unsigned i = 0; i &lt; 10; ++i) {
        cout &lt;&lt; &quot;bucket #&quot; &lt;&lt; i &lt;&lt; &quot; has &quot; &lt;&lt; c.bucket_size(i) &lt;&lt; &quot; elements.\\n&quot;;
    }

string target = get_a_target_string();
    {
        timeStart = clock();
        auto pItem = find(c.begin(), c.end(), target);    //比 unordered_multiset::find() 慢很多
        cout &lt;&lt; &quot;std::find(), milli-seconds : &quot; &lt;&lt; (clock() - timeStart) &lt;&lt; endl;
        if (pItem != c.end())
            cout &lt;&lt; &quot;found, &quot; &lt;&lt; *pItem &lt;&lt; endl;
        else
            cout &lt;&lt; &quot;not found! &quot; &lt;&lt; endl;
    }

    {
        timeStart = clock();
        auto pItem = c.find(target);        //比 std::find() 快很多
        cout &lt;&lt; &quot;c.find(), milli-seconds : &quot; &lt;&lt; (clock() - timeStart) &lt;&lt; endl;
        if (pItem != c.end())
            cout &lt;&lt; &quot;found, &quot; &lt;&lt; *pItem &lt;&lt; endl;
        else
            cout &lt;&lt; &quot;not found! &quot; &lt;&lt; endl;
    }
}

void test_unordered_multimap(long &amp;value) {
    cout &lt;&lt; &quot;\\ntest_unordered_multimap().......... \\n&quot;;

unordered_multimap&lt;long, string&gt; c;
char buf[10];

clock_t timeStart = clock();
    for (long i = 0; i &lt; value; ++i) {
        try {
            snprintf(buf, 10, &quot;%d&quot;, rand());
            //multimap 不可使用 [] 進行 insertion
            c.insert(pair&lt;long, string&gt;(i, buf));
        }
        catch (exception &amp;p) {
            cout &lt;&lt; &quot;i=&quot; &lt;&lt; i &lt;&lt; &quot; &quot; &lt;&lt; p.what() &lt;&lt; endl;
            abort();
        }
    }
    cout &lt;&lt; &quot;milli-seconds : &quot; &lt;&lt; (clock() - timeStart) &lt;&lt; endl;
    cout &lt;&lt; &quot;unordered_multimap.size()= &quot; &lt;&lt; c.size() &lt;&lt; endl;
    cout &lt;&lt; &quot;unordered_multimap.max_size()= &quot; &lt;&lt; c.max_size() &lt;&lt; endl;   

long target = get_a_target_long();
    timeStart = clock();
    auto pItem = c.find(target);
    cout &lt;&lt; &quot;c.find(), milli-seconds : &quot; &lt;&lt; (clock() - timeStart) &lt;&lt; endl;
    if (pItem != c.end())
        cout &lt;&lt; &quot;found, value=&quot; &lt;&lt; (*pItem).second &lt;&lt; endl;
    else
        cout &lt;&lt; &quot;not found! &quot; &lt;&lt; endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>how many elements:1000000

test_unordered_multiset()..........
milli-seconds : 1476
unordered_multiset.size()= 1000000
unordered_multiset.max_size()= 384307168202282325
unordered_multiset.bucket_count()= 1832561				// 篮子的数量
unordered_multiset.load_factor()= 0.545684				// 装载因子
unordered_multiset.max_load_factor()= 1
unordered_multiset.max_bucket_count()= 384307168202282325
bucket #0 has 0 elements.
bucket #1 has 0 elements.
bucket #2 has 0 elements.
bucket #3 has 0 elements.
bucket #4 has 0 elements.
bucket #5 has 0 elements.
bucket #6 has 0 elements.
bucket #7 has 34 elements. 
bucket #8 has 0 elements.
bucket #9 has 0 elements.
target (0~32767):23456
std::find(), milli-seconds : 104
found, 23456
c.find(), milli-seconds : 1
found, 23456


how many elements:1000000

test_unordered_multimap()..........
milli-seconds : 1051
unordered_multimap.size()= 1000000
unordered_multimap.max_size()= 384307168202282325
target (0~32767):23456
 c.find(), milli-seconds : 0
found, value=20464
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试-unordered-set-和-unordered-map" tabindex="-1"><a class="header-anchor" href="#测试-unordered-set-和-unordered-map"><span>测试 - unordered_set 和 unordered_map</span></a></h3><p>略</p><h2 id="程序测试-分配器-allocator" tabindex="-1"><a class="header-anchor" href="#程序测试-分配器-allocator"><span>程序测试 - 分配器 allocator</span></a></h2><h3 id="简概-2" tabindex="-1"><a class="header-anchor" href="#简概-2"><span>简概</span></a></h3><p>分配器 (allocator)</p><ul><li>容器需要一个分配器，若不写则容器内部会有一个默认分配器</li><li>例<code>vector&lt;int,allocator&lt;int&gt;&gt; vi(ia,ia+6);</code>可简写为<code>vector&lt;int&gt; vi(ia);</code></li></ul><p>容器对分配器的使用（默认都是使用<code>std::allocator</code>分配器）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>template&lt;typename _Tp, typename _Alloc=std::allocator&lt;_Tp&gt;&gt;
class vector:protected _Vector_base&lt;_Tp, _Alloc&gt;
    
template&lt;typename _Tp, typename _Alloc=std::allocator&lt;_Tp&gt;&gt;
class list:protected _List_base&lt;_Tp, _Alloc&gt;
        
template&lt;typename _Tp, typename _Alloc=std::allocator&lt;_Tp&gt;&gt;
class depue:protected _Deque_base&lt;_Tp, _Alloc&gt;
        
template&lt;typename _Key, typename _Compare=std::less&lt;_Key&gt;,
    typename _Alloc=std::allocator&lt;_Tp&gt;&gt;
class set
        
template&lt;typename _Key, typename _Compare=std::less&lt;_Key&gt;,
    typename _Alloc=std::allocator&lt;_Tp&gt;&gt;
class map
    
template&lt;class _Value,
	class _Hash=hash&lt;_Value&gt;,
	class _Pred=std::equal_to&lt;_Value&gt;,
	class _Alloc=std::allocator&lt;_Value&gt;&gt;
class unordered_set
    
template&lt;class _Key, class _Tp,
	class _Hash=hash&lt;_Value&gt;,
	class _Pred=std::equal_to&lt;_Value&gt;,
	class _Alloc=std::allocator&lt;_Value&gt;&gt;
class unordered_map
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>STL容器默认的分配器是<code>std::allocator</code>，除此之外 gcc 额外定义了几个分配器，其头文件均在目录<code>ext</code>下</p><figure><img src="`+o+`" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure><p>（该图演示了其中两种的分配器）</p><p>gcc额外定义的分配器均位于__gnu_cxx命名空间下.分配器一般用于构建容器,不会直接使用.因为分配器想要直接使用也不好用(使用free关键字时不需要指定回收内存的大小,而分配器的deallocate函数需要指定回收内存大小).</p><h3 id="测试程序-1" tabindex="-1"><a class="header-anchor" href="#测试程序-1"><span>测试程序</span></a></h3><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;list&gt;
#include &lt;stdexcept&gt;
#include &lt;string&gt;
#include &lt;cstdlib&gt;		// abort()
#include &lt;cstdio&gt;		// snprintf()
#include &lt;algorithm&gt;	// find()
#include &lt;iostream&gt;
#include &lt;ctime&gt;
#include &lt;cstddef&gt;
#include &lt;memory&gt;    //內含 std::allocator
//欲使用 std::allocator 以外的 allocator,得自行 #include &lt;ext\\...&gt;
#ifdef __GNUC__

/* 这里是分配器的头文件（7种） */
#include &lt;ext\\array_allocator.h&gt;
#include &lt;ext\\mt_allocator.h&gt;
#include &lt;ext\\debug_allocator.h&gt;	// 调试
#include &lt;ext\\pool_allocator.h&gt;		// 内存池
#include &lt;ext\\bitmap_allocator.h&gt;
#include &lt;ext\\malloc_allocator.h&gt;
#include &lt;ext\\new_allocator.h&gt;

#endif


//pass A object to function template impl()，
//而 A 本身是個 class template, 帶有 type parameter T,
//那麼有無可能在 impl() 中抓出 T, 創建一個 list&lt;T, A&lt;T&gt;&gt; object?
//以下先暫時迴避上述疑問.

void test_list_with_special_allocator() {
    #ifdef __GNUC__
        cout &lt;&lt; &quot;\\ntest_list_with_special_allocator().......... \\n&quot;;

    /** list使用不同的分配器（6种） */
    // 不能在 switch case 中宣告，只好下面這樣. 				  	// 1000000次
    list &lt;string, allocator&lt;string&gt;&gt; c1;                   	// 3140，这个是默认的分配器
    list &lt;string, __gnu_cxx::malloc_allocator&lt;string&gt;&gt; c2; 	// 3110
    list &lt;string, __gnu_cxx::new_allocator&lt;string&gt;&gt; c3;		// 3156
    list &lt;string, __gnu_cxx::__pool_alloc&lt;string&gt;&gt; c4;     	// 4922
    list &lt;string, __gnu_cxx::__mt_alloc&lt;string&gt;&gt; c5;        // 3297
    list &lt;string, __gnu_cxx::bitmap_allocator&lt;string&gt;&gt; c6; 	// 4781

    /** 交互，选择要使用的分配器（6种） */
    int choice;
    long value;
    cout &lt;&lt; &quot;select: &quot;
        &lt;&lt; &quot; (1) std::allocator &quot;
        &lt;&lt; &quot; (2) malloc_allocator &quot;
        &lt;&lt; &quot; (3) new_allocator &quot;
        &lt;&lt; &quot; (4) __pool_alloc &quot;
        &lt;&lt; &quot; (5) __mt_alloc &quot;
        &lt;&lt; &quot; (6) bitmap_allocator &quot;;
    cin &gt;&gt; choice;
    if (choice != 0) {
        cout &lt;&lt; &quot;how many elements: &quot;;
        cin &gt;&gt; value;
    }

	/** 使用对应分配器分配内容并填充list */
    char buf[10];
    clock_t timeStart = clock();
    for (long i = 0; i &lt; value; ++i) {
        try {
            snprintf(buf, 10, &quot;%d&quot;, i);
            switch (choice) {
                case 1 :
                    c1.push_back(string(buf));
                    break;
                case 2 :
                    c2.push_back(string(buf));
                    break;
                case 3 :
                    c3.push_back(string(buf));
                    break;
                case 4 :
                    c4.push_back(string(buf));
                    break;
                case 5 :
                    c5.push_back(string(buf));
                    break;
                case 6 :
                    c6.push_back(string(buf));
                    break;
                default:
                    break;
            }
        }
        catch (exception &amp;p) {
            cout &lt;&lt; &quot;i=&quot; &lt;&lt; i &lt;&lt; &quot; &quot; &lt;&lt; p.what() &lt;&lt; endl;
            abort();
        }
    }
    cout &lt;&lt; &quot;a lot of push_back(), milli-seconds : &quot; &lt;&lt; (clock() - timeStart) &lt;&lt; endl;

    /** 这里测试6种分配器 */
    // test all allocators&#39; allocate() &amp; deallocate();
    // （这种分配的用法不建议，因为要记住分配器分配了多少内存的空间，建议直接用容器）
    int *p;
    allocator&lt;int&gt; alloc1;		// 定义分配器（int类型的默认分配器）
    p = alloc1.allocate(1);		// allocate  方法，分配1个元素（这里指一个int元素）
    alloc1.deallocate(p, 1);	// deallocate方法，交还指针和分配的空间（不建议这种用法）

    __gnu_cxx::malloc_allocator&lt;int&gt; alloc2;
    p = alloc2.allocate(1);
    alloc2.deallocate(p, 1);

    __gnu_cxx::new_allocator&lt;int&gt; alloc3;
    p = alloc3.allocate(1);
    alloc3.deallocate(p, 1);

    __gnu_cxx::__pool_alloc&lt;int&gt; alloc4;
    p = alloc4.allocate(2);
    alloc4.deallocate(p, 2);    //我刻意令參數為 2, 但這有何意義!! 一次要 2 個 ints?

    __gnu_cxx::__mt_alloc&lt;int&gt; alloc5;
    p = alloc5.allocate(1);
    alloc5.deallocate(p, 1);

    __gnu_cxx::bitmap_allocator&lt;int&gt; alloc6;
    p = alloc6.allocate(3);
    alloc6.deallocate(p, 3);    //我刻意令參數為 3, 但這有何意義!! 一次要 3 個 ints?
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="源码之分布-vc、gcc" tabindex="-1"><a class="header-anchor" href="#源码之分布-vc、gcc"><span>源码之分布（VC、GCC）</span></a></h2><p>源码之前 了无秘密</p><p>标准库路径</p><ul><li>Visual C++ <ul><li><code>...\\include</code></li><li><code>...\\include\\cliext</code></li></ul></li><li>GUN C++ <ul><li><code>...\\5.9.2\\include\\c++\\bits</code>（stl开头的头文件）</li><li><code>...\\5.9.2\\include\\c++\\ext</code>（扩充的）</li></ul></li></ul>`,77);function w(S,z){const i=d("ExternalLinkIcon");return a(),c("div",null,[p,l("ul",null,[l("li",null,[l("a",g,[n("【B站】C++标准库(STL)与泛型编程"),e(i)]),n("，侯捷老师的课 "),l("a",h,[n("【CSDN】别人的听课笔记"),e(i)]),_]),l("li",null,[l("a",q,[n("C++ 基准测试 - std::vector VS std::list "),e(i)])]),f]),k,x,y])}const A=s(b,[["render",w],["__file","01. STL库.html.vue"]]),E=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/C__/07.%20%E6%A8%A1%E5%9D%97%E5%BA%93/STL/01.%20STL%E5%BA%93.html","title":"C++","lang":"zh-CN","frontmatter":{"description":"C++ 目录 C++标准库 C++标准库——体系结构与内核分析（C++ Standard Library —— architecure & sources） 体系结构，指C++标准库主要分为6个部件 内核分析，指会分析 source code 源代码 参考： 【B站】C++标准库(STL)与泛型编程，侯捷老师的课 【CSDN】别人的听课笔记 P3~P7...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/C__/07.%20%E6%A8%A1%E5%9D%97%E5%BA%93/STL/01.%20STL%E5%BA%93.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"C++"}],["meta",{"property":"og:description","content":"C++ 目录 C++标准库 C++标准库——体系结构与内核分析（C++ Standard Library —— architecure & sources） 体系结构，指C++标准库主要分为6个部件 内核分析，指会分析 source code 源代码 参考： 【B站】C++标准库(STL)与泛型编程，侯捷老师的课 【CSDN】别人的听课笔记 P3~P7..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"C++\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"C++","slug":"c","link":"#c","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"C++标准库","slug":"c-标准库","link":"#c-标准库","children":[{"level":2,"title":"简概","slug":"简概","link":"#简概","children":[{"level":3,"title":"简概","slug":"简概-1","link":"#简概-1","children":[]},{"level":3,"title":"STL六大组件","slug":"stl六大组件","link":"#stl六大组件","children":[]},{"level":3,"title":"时间复杂度","slug":"时间复杂度","link":"#时间复杂度","children":[]},{"level":3,"title":"前闭后开区间","slug":"前闭后开区间","link":"#前闭后开区间","children":[]}]},{"level":2,"title":"程序测试 - 容器","slug":"程序测试-容器","link":"#程序测试-容器","children":[{"level":3,"title":"测试程序","slug":"测试程序","link":"#测试程序","children":[]},{"level":3,"title":"测试 - array","slug":"测试-array","link":"#测试-array","children":[]},{"level":3,"title":"测试 - vector","slug":"测试-vector","link":"#测试-vector","children":[]},{"level":3,"title":"测试 - list","slug":"测试-list","link":"#测试-list","children":[]},{"level":3,"title":"测试 - forward_list","slug":"测试-forward-list","link":"#测试-forward-list","children":[]},{"level":3,"title":"测试 - slist","slug":"测试-slist","link":"#测试-slist","children":[]},{"level":3,"title":"测试 - deque","slug":"测试-deque","link":"#测试-deque","children":[]},{"level":3,"title":"测试 - stack 和 queue","slug":"测试-stack-和-queue","link":"#测试-stack-和-queue","children":[]},{"level":3,"title":"测试 - multiset 和 multimap","slug":"测试-multiset-和-multimap","link":"#测试-multiset-和-multimap","children":[]},{"level":3,"title":"测试 - set 和 map","slug":"测试-set-和-map","link":"#测试-set-和-map","children":[]},{"level":3,"title":"测试 - unordered_multiset 和 unordered_multimap","slug":"测试-unordered-multiset-和-unordered-multimap","link":"#测试-unordered-multiset-和-unordered-multimap","children":[]},{"level":3,"title":"测试 - unordered_set 和 unordered_map","slug":"测试-unordered-set-和-unordered-map","link":"#测试-unordered-set-和-unordered-map","children":[]}]},{"level":2,"title":"程序测试 - 分配器 allocator","slug":"程序测试-分配器-allocator","link":"#程序测试-分配器-allocator","children":[{"level":3,"title":"简概","slug":"简概-2","link":"#简概-2","children":[]},{"level":3,"title":"测试程序","slug":"测试程序-1","link":"#测试程序-1","children":[]}]},{"level":2,"title":"源码之分布（VC、GCC）","slug":"源码之分布-vc、gcc","link":"#源码之分布-vc、gcc","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":14.32,"words":4296},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/01. Language/C++/07. 模块库/STL/01. STL库.md","autoDesc":true}');export{A as comp,E as data};

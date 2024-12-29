import{_ as s,c as d,e as t,a as n,d as i,b as a,o as r,r as c}from"./app-Bk_erI9r.js";const v={},p={href:"https://www.cnblogs.com/qicosmos/p/4325949.html",target:"_blank",rel:"noopener noreferrer"},o={href:"https://blog.csdn.net/alex1997222/article/details/78639991",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.cnblogs.com/ProjectDD/p/11796998.html",target:"_blank",rel:"noopener noreferrer"};function m(h,e){const l=c("ExternalLinkIcon");return r(),d("div",null,[e[4]||(e[4]=t('<h1 id="c" tabindex="-1"><a class="header-anchor" href="#c"><span>C++</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="可变参数模板-variadic-templates" tabindex="-1"><a class="header-anchor" href="#可变参数模板-variadic-templates"><span>可变参数模板 Variadic Templates</span></a></h1><p>本篇参考：</p>',4)),n("ul",null,[n("li",null,[n("a",p,[e[0]||(e[0]=i("【博客园】泛化之美--C++11可变模版参数的妙用")),a(l)])]),n("li",null,[n("a",o,[e[1]||(e[1]=i("【CSDN】C++可变参数的两种方法")),a(l)])]),n("li",null,[e[3]||(e[3]=i("感觉有点像ts的三点运算符，")),n("a",u,[e[2]||(e[2]=i("【博客园】ts中的三点运算符")),a(l)])])]),e[5]||(e[5]=t(`<h2 id="可变参数函数" tabindex="-1"><a class="header-anchor" href="#可变参数函数"><span>可变参数函数</span></a></h2><p>三个点<code>...</code>的写法以前就有，但不是在模板里</p><p>printf 源码</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>int __cdecl printf (
	const char *fromat,
	...	// 可以接受任意变量
	)
{
    // ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可变参数模板" tabindex="-1"><a class="header-anchor" href="#可变参数模板"><span>可变参数模板</span></a></h2><h3 id="可变参数模板-函数递归" tabindex="-1"><a class="header-anchor" href="#可变参数模板-函数递归"><span>可变参数模板 函数递归</span></a></h3><h4 id="例程-print" tabindex="-1"><a class="header-anchor" href="#例程-print"><span>例程 - print</span></a></h4><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>/** 模板代码 */
void print()
{
    
}

template &lt;typename T, typename... Types&gt;
void print(const T&amp; firstArg, const Types&amp;... args)	// 表示参数的类型和数目都可变
{
    cout &lt;&lt; firstArg &lt;&lt; endl;
    print(args...);
}

/** 使用代码 */
print(7.5, &quot;hello&quot;, bitset&lt;16&gt;(377), 42);

/* 输出：
7.5
hello
0000000101111001（16bit来表示377）
42
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Q：</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>template &lt;typename T, typename... Types&gt;
void print(const T&amp; firstArg, const Types&amp;... args){/**/}
// 和
template &lt;typename... Types&gt;
void print(const Types&amp;... args){/**/}
// 可以共存吗
// 若可，谁比较泛化、谁比较特化
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A：</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 可以共存
// 优先使用比较特化的那个版本，即
template &lt;typename T, typename... Types&gt;
void print(const T&amp; firstArg, const Types&amp;... args){/**/}
// 的版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h4><p><code>...</code>就是一个pack包</p><ul><li>用於template parameters，就是template parameters <strong>pack</strong>（模板参数<strong>包</strong>）</li><li>用於function parameter types，就是function parameter types <strong>pack</strong>（函数参数类型<strong>包</strong>）</li><li>用於function parameters，就是function parameters <strong>pack</strong>（函数参数<strong>包</strong>）</li></ul><p>可以帮助我们做<strong>递归</strong>，以上述例程为例：</p><p><code>(7.5, &quot;hello&quot;, bitset&lt;16&gt;(377), 42)</code>传入后会被分割成两块<code>firstArg = 7.5</code>，<code>args = (&quot;hello&quot;, bitset&lt;16&gt;(377), 42)</code></p><p>然后重复这个过程递归调用，当args为0时，就调用<code>print()</code>的重载版本</p><h4 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级"><span>优先级</span></a></h4><p>类</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class CustomerHash{
public:
    std::size_t operator()(const Customer&amp; c) const {
        return hash_val(c.fname, c.lname, c.no)		// 调用【版本1】（只有版本1符合）
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可变参数模板函数的重载</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 【版本1】
template &lt;typename... Type&gt;
inline size_t hash_val(const Types&amp;... arg){		// 接受一个参数
    size_t seed = 0;
    hash_val(seed, args...);						// 调用【版本2】（版本1、2、3均符合）
    return seed;
}

// 【版本2】
template &lt;typename T, typename... Types&gt;
inline void hash_val (size_t&amp; seed,
		const T&amp; val, const Types&amp;... args) {		// 接受三个参数
    hash_combine(seed, val);
	hash_val(seed, args...);						// 调用【版本2】，递归到最后调用【版本3】
}

// 【版本3】
template&lt;typename T&gt;
inline void hash_val(size_t&amp; seed, const T&amp; val) {	// 接受两个参数
    hash_combine(seed, val);
}

#include &lt;functional&gt;
template &lt;typename T&gt; 
inline void hash_combine(size_t&amp; seed, const T&amp; val){
	seed ^ = std:hash&lt;T&gt;O(val) + 0x9e3779b9
		+ (seed&lt;&lt;6) +(seed&gt;&gt;2);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可变参数模板-类递归" tabindex="-1"><a class="header-anchor" href="#可变参数模板-类递归"><span>可变参数模板 类递归</span></a></h3><h4 id="例程-tuple" tabindex="-1"><a class="header-anchor" href="#例程-tuple"><span>例程 - tuple</span></a></h4><p>tuple头文件</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>template&lt;typename... Values&gt; class tuple;
template&lt;&gt; class tuple&lt;&gt;{};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>tuple代码</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>template&lt;typename Head, typename... Tail&gt;
class tuple&lt;Head,Tail...&gt; :private tuple&lt;Tail...&gt; 	// 方便递归，自己继承自己【绝了，妙啊】
{
    typedef tuple&lt;Tail...&gt; inherited;
public:
	tuple(){ }
	tuple(Head v, Tail... vtail)
        :m_head(v), inherited(vtail...){}			// initialization list【关键】抽出来的部分定义为成员变量，其他部分给父类

    typename Head::type head(){ return m_head; }
    inherited&amp; tail(){ return *this; }				// 返回指针
protected:
	Head m_head;
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用代码</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>tuple&lt;int, float, string&gt; t(41, 6.3, &quot;nico&quot;);
t.head();			// 获得41
t.tail().head();	// 6.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用" tabindex="-1"><a class="header-anchor" href="#应用"><span>应用</span></a></h3><h4 id="应用方向" tabindex="-1"><a class="header-anchor" href="#应用方向"><span>应用方向</span></a></h4><p>可变参数模板主要用于递归</p><p>可以很方便地完成 recursive function call（递归函数调用）</p><h4 id="在标准库中的使用" tabindex="-1"><a class="header-anchor" href="#在标准库中的使用"><span>在标准库中的使用</span></a></h4><p>（详见C++11标准库一节）</p>`,37))])}const g=s(v,[["render",m],["__file","优化 - 可变参数模板.html.vue"]]),_=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Develop/01.%20Language/C__/08.%20%E6%96%B0%E7%89%B9%E6%80%A7/C__11/%E4%BC%98%E5%8C%96%20-%20%E5%8F%AF%E5%8F%98%E5%8F%82%E6%95%B0%E6%A8%A1%E6%9D%BF.html","title":"C++","lang":"zh-CN","frontmatter":{"description":"C++ 目录 可变参数模板 Variadic Templates 本篇参考： 【博客园】泛化之美--C++11可变模版参数的妙用 【CSDN】C++可变参数的两种方法 感觉有点像ts的三点运算符，【博客园】ts中的三点运算符 可变参数函数 三个点...的写法以前就有，但不是在模板里 printf 源码 可变参数模板 可变参数模板 函数递归 例程 - p...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/01.%20DesignAndDevelop/Develop/01.%20Language/C__/08.%20%E6%96%B0%E7%89%B9%E6%80%A7/C__11/%E4%BC%98%E5%8C%96%20-%20%E5%8F%AF%E5%8F%98%E5%8F%82%E6%95%B0%E6%A8%A1%E6%9D%BF.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"C++"}],["meta",{"property":"og:description","content":"C++ 目录 可变参数模板 Variadic Templates 本篇参考： 【博客园】泛化之美--C++11可变模版参数的妙用 【CSDN】C++可变参数的两种方法 感觉有点像ts的三点运算符，【博客园】ts中的三点运算符 可变参数函数 三个点...的写法以前就有，但不是在模板里 printf 源码 可变参数模板 可变参数模板 函数递归 例程 - p..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"C++\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"C++","slug":"c","link":"#c","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"可变参数模板 Variadic Templates","slug":"可变参数模板-variadic-templates","link":"#可变参数模板-variadic-templates","children":[{"level":2,"title":"可变参数函数","slug":"可变参数函数","link":"#可变参数函数","children":[]},{"level":2,"title":"可变参数模板","slug":"可变参数模板","link":"#可变参数模板","children":[{"level":3,"title":"可变参数模板 函数递归","slug":"可变参数模板-函数递归","link":"#可变参数模板-函数递归","children":[{"level":4,"title":"例程 - print","slug":"例程-print","link":"#例程-print","children":[]},{"level":4,"title":"原理","slug":"原理","link":"#原理","children":[]},{"level":4,"title":"优先级","slug":"优先级","link":"#优先级","children":[]}]},{"level":3,"title":"可变参数模板 类递归","slug":"可变参数模板-类递归","link":"#可变参数模板-类递归","children":[{"level":4,"title":"例程 - tuple","slug":"例程-tuple","link":"#例程-tuple","children":[]}]},{"level":3,"title":"应用","slug":"应用","link":"#应用","children":[{"level":4,"title":"应用方向","slug":"应用方向","link":"#应用方向","children":[]},{"level":4,"title":"在标准库中的使用","slug":"在标准库中的使用","link":"#在标准库中的使用","children":[]}]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.65,"words":794},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Develop/01. Language/C++/08. 新特性/C++11/优化 - 可变参数模板.md","excerpt":"\\n<h1>目录</h1>\\n<h1>可变参数模板 Variadic Templates</h1>\\n<p>本篇参考：</p>\\n<ul>\\n<li><a href=\\"https://www.cnblogs.com/qicosmos/p/4325949.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">【博客园】泛化之美--C++11可变模版参数的妙用</a></li>\\n<li><a href=\\"https://blog.csdn.net/alex1997222/article/details/78639991\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">【CSDN】C++可变参数的两种方法</a></li>\\n<li>感觉有点像ts的三点运算符，<a href=\\"https://www.cnblogs.com/ProjectDD/p/11796998.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">【博客园】ts中的三点运算符</a></li>\\n</ul>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/01. DesignAndDevelop/Develop/01. Language/C++/08. 新特性/C++11/优化 - 可变参数模板.md","value":{"title":"优化 - 可变参数模板","path":"MdNote_Public/01. DesignAndDevelop/Develop/01. Language/C++/08. 新特性/C++11/优化 - 可变参数模板.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{g as comp,_ as data};

import{_ as r,c,a as l,d as n,b as i,e as a,o as u,r as s}from"./app-DL5M9yrN.js";const o={},v={href:"https://www.bilibili.com/video/BV1XE411k7PN",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.bilibili.com/video/BV1Kt411775b",target:"_blank",rel:"noopener noreferrer"},b={href:"https://docs.microsoft.com/zh-cn/cpp/build/walkthrough-creating-and-using-a-dynamic-link-library-cpp?view=msvc-160",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.youtube.com/watch?v=auNPlHYB4ss",target:"_blank",rel:"noopener noreferrer"};function m(g,e){const d=s("ExternalLinkIcon"),t=s("Mermaid");return u(),c("div",null,[e[11]||(e[11]=l("h1",{id:"动态库与静态库讲解",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#动态库与静态库讲解"},[l("span",null,"动态库与静态库讲解")])],-1)),e[12]||(e[12]=l("p",null,"参考：",-1)),l("ul",null,[l("li",null,[l("a",v,[e[0]||(e[0]=n("【B站】动态库与静态库讲解")),i(d)])]),l("li",null,[l("a",p,[e[1]||(e[1]=n("【B站】C/C++基础教学：动态库和静态库开发")),i(d)])]),l("li",null,[l("a",b,[e[2]||(e[2]=n("【Microsoft官网】在 Visual Studio 中创建 C/C++ DLL")),i(d)]),e[4]||(e[4]=n(" 基于该文档的视频：")),l("a",h,[e[3]||(e[3]=n("【YouTube】如何使用 C++ MSVC Visual Studio 2019 演练创建和使用 DLL（动态链接库）")),i(d)])])]),e[13]||(e[13]=a('<h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="动态库与静态库讲解-1" tabindex="-1"><a class="header-anchor" href="#动态库与静态库讲解-1"><span>动态库与静态库讲解</span></a></h1><h2 id="通用" tabindex="-1"><a class="header-anchor" href="#通用"><span>通用</span></a></h2><h3 id="代码的三种分发方式" tabindex="-1"><a class="header-anchor" href="#代码的三种分发方式"><span>代码的三种分发方式</span></a></h3><ul><li>源码 <ul><li>头文件 + 源文件</li></ul></li><li>动态库 <ul><li>头文件(可选) + LIB文件(可选) + DLL文件</li></ul></li><li>静态库 <ul><li>头文件 + LIB文件</li></ul></li></ul><h3 id="区别" tabindex="-1"><a class="header-anchor" href="#区别"><span>区别</span></a></h3><h4 id="体积上和零散性" tabindex="-1"><a class="header-anchor" href="#体积上和零散性"><span>体积上和零散性</span></a></h4>',7)),l("ul",null,[l("li",null,[e[7]||(e[7]=l("p",null,"静态库",-1)),l("ul",null,[e[5]||(e[5]=l("li",null,[l("p",null,"优点：代码合并到模块中，无零散文件")],-1)),e[6]||(e[6]=l("li",null,[l("p",null,"缺点：模块体积变大。当多个模块使用该库时，内存中有多份代码 静态库的代码有改动，所有依赖它的文件都要重新编译。动态库不用（某些更改），可以只更新动态库文件")],-1)),l("li",null,[i(t,{id:"mermaid-96",code:"eJxLL0osyFBwCuFK1EutSNXVtUuMTs5PSY3lSoLyk6D8ZCg/GcoHABVlEk4="})])])]),l("li",null,[e[10]||(e[10]=l("p",null,"动态库",-1)),l("ul",null,[e[8]||(e[8]=l("li",null,[l("p",null,"优点：模块体积几乎不变。当多个模块使用该库时，内存中只存在一份代码")],-1)),e[9]||(e[9]=l("li",null,[l("p",null,"缺点：代码在单独文件中，有零散文件")],-1)),l("li",null,[i(t,{id:"mermaid-116",code:"eJxLL0osyFBwCuGqiE7OT0mN5UrUS61I1dW1q+BKgrOS4SwAa0IObA=="})])])])]),e[14]||(e[14]=a('<h4 id="动态编译和静态编译" tabindex="-1"><a class="header-anchor" href="#动态编译和静态编译"><span>动态编译和静态编译</span></a></h4><ul><li>静态库 <ul><li>编译时lib文件要进exe里编译，使用的lib越多则exe的体积就越大</li></ul></li><li>动态库 <ul><li>动态加载，exe文件会比较小（几个G的大型软件的exe文件很小的原因）</li></ul></li></ul><h4 id="选用" tabindex="-1"><a class="header-anchor" href="#选用"><span>选用</span></a></h4><ul><li>选用动态库的理由 <ul><li>考虑是否有多个程序调用一个库，若是则静态库空间浪费严重</li><li>考虑是否需要通过升级库而来升级程序，若是则动态库更方便</li><li>考虑进程之间是否需要资源共享，若需则使用动态库（共享库）</li></ul></li><li>选用静态库的理由 <ul><li><div class="ab-note drop-shadow"><div class="markdown-rendered"><div><h4 id="相关报错" tabindex="-1"><a class="header-anchor" href="#相关报错"><span>相关报错</span></a></h4><ul><li>头文件 编译时使用 相关报错：<code>error C3861: &quot;Add&quot;: 找不到标识符</code></li><li>LIB文件 链接时使用 相关报错：<code>error LNK2019: 无法解析的外部符号 &quot;int __cdecl Add(int,int)&quot;（?Add@@YAHH@Z）</code> 相关报错：<code>error LNK2019: 无法解析的外部符号 _Add，该符号在函数_main中被引用</code></li><li>DLL文件 运行时使用 相关报错：弹出窗口：<code>由于找不到DLL.dll，无法继续执行代码，重新安装程序可能会解决此问题</code></li></ul></div></div></div></li></ul></li></ul><h2 id="补充" tabindex="-1"><a class="header-anchor" href="#补充"><span>补充</span></a></h2><h3 id="补充-windows常用dll" tabindex="-1"><a class="header-anchor" href="#补充-windows常用dll"><span>补充 - windows常用dll</span></a></h3><p>windows提供了的三个重要常用的dll</p><ul><li>kernel32.dll（创建事件、创建文件夹等等）</li><li>user32.dll</li><li>gdi32.dll</li></ul><h3 id="如何查看dll提供的函数" tabindex="-1"><a class="header-anchor" href="#如何查看dll提供的函数"><span>如何查看dll提供的函数</span></a></h3><p>动态库相较于与静态库，可以没有头文件，也就是说无法直接查看库接口</p><p>这时可以借用dll查看工具</p><ul><li><s>例如Dependency（Dependency Walker官网下载：www.dependencywalker.com），将dll拖入该软件即可查看该dll导出的接口，如果查看不了接口则说明该dll没有导出接口（或导出类），没写好</s></li><li>depends那个软件win10兼容不行，推荐使用 Dependencies，下载链接：https://github.com/lucasg/Dependencies/releases</li></ul><h2 id="vs-c-编译库" tabindex="-1"><a class="header-anchor" href="#vs-c-编译库"><span>VS C++ 编译库</span></a></h2><h3 id="基本流程" tabindex="-1"><a class="header-anchor" href="#基本流程"><span>基本流程</span></a></h3>',14)),i(t,{id:"mermaid-240",code:"eJxLL0osyFDwCeJ6tmvCs2ntT3Zv09V9vmfai/UTn85coatr92TH2pfTt8BkXk7e96xvKUTmaf/6Z53LXyzsgUhyPV0CV4ZsgI+nEzbdLj4+UH0Ac9hLsg=="}),e[15]||(e[15]=a(`<p>（图上下对应）</p><h3 id="静态库的开发" tabindex="-1"><a class="header-anchor" href="#静态库的开发"><span>静态库的开发</span></a></h3><p>项目创建</p><blockquote><p>新建项目 &gt; Visual C++ &gt; Win32项目 &gt; 输入项目名并确定 &gt; 下一步 &gt; 应用程序类型选静态库（默认为Windows应用程序）</p></blockquote><p>testlib.h（相当于接口）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#ifndef TESTLIB_H
#define TESTLIB_H

int add(int a, int b);

#endif
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>testlib.cpp（会被编译成二进制的lib文件）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &quot;testlib.h&quot;

int add(int a, int b)
{
    return a+b;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时编译即可生成lib文件</p><h3 id="动态库的开发" tabindex="-1"><a class="header-anchor" href="#动态库的开发"><span>动态库的开发</span></a></h3><p>项目创建</p><blockquote><p>新建项目 &gt; Visual C++ &gt; Win32项目 &gt; 输入项目名并确定 &gt; 下一步 &gt; 应用程序类型选DLL（默认为Windows应用程序）</p></blockquote><p>testdll.h</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#ifndef TESTDLL_H
#define TESTDLL_H

__declspec(dllexport) int add(int a, int b);	// __declspec()声明这是一个导出函数（也可以导出类），且会生成一个exp文件
__declspec(dllexport) int sub(int a, int b);	// 如果想避免名词修饰，在最前面加上：extern &quot;C&quot;

#endif
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>testdll.cpp</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &quot;testdll.h&quot;

int add(int a, int b)
{
    return a+b;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时编译即可生成DLL文件</p><h3 id="开发区别及原理-略" tabindex="-1"><a class="header-anchor" href="#开发区别及原理-略"><span>开发区别及原理（略）</span></a></h3><p>略</p><h2 id="vs-c-使用库" tabindex="-1"><a class="header-anchor" href="#vs-c-使用库"><span>VS C++ 使用库</span></a></h2><h3 id="静态库的使用" tabindex="-1"><a class="header-anchor" href="#静态库的使用"><span>静态库的使用</span></a></h3><p>其中库文件：StaticLib.h</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#pragma once
int Add(int a, int b);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="偷懒的方式" tabindex="-1"><a class="header-anchor" href="#偷懒的方式"><span>偷懒的方式</span></a></h4><p>Test.cpp</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;windows.h&gt;
#include &lt;iostream&gt;

#include &quot;F:\\\\Demo\\\\Debug\\\\LIB\\\\StaticLib.h&quot; 				// 头文件（也可以相对路径）
#pragma comment(lib, &quot;F:\\\\Demo\\\\Debug\\\\LIB\\\\StaticLib.lib&quot;)	// lib文件

int main()
{
    std::cout &lt;&lt; Add(1,1) &lt;&lt; endl;							// 输出：2
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置的方式" tabindex="-1"><a class="header-anchor" href="#配置的方式"><span>配置的方式</span></a></h4><p>略</p><h3 id="动态库的使用" tabindex="-1"><a class="header-anchor" href="#动态库的使用"><span>动态库的使用</span></a></h3><h4 id="隐式调用-导入dll" tabindex="-1"><a class="header-anchor" href="#隐式调用-导入dll"><span>隐式调用 + 导入dll</span></a></h4><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;windows.h&gt;
#include &lt;iostream&gt;

#include &quot;testdll.h&quot;

__declspec(dllimport) int add(int a, int b);				// 导入（不是导出）

int main()
{
    std::cout &lt;&lt; Add(1,1) &lt;&lt; endl;							// 输出：2
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="隐式调用-宏的方式" tabindex="-1"><a class="header-anchor" href="#隐式调用-宏的方式"><span>隐式调用 + 宏的方式</span></a></h4><p>testdll.h（写法2）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#ifndef TESTDLL_H
#define TESTDLL_H

#ifndef _DLLAPI								// 导入导出公用
	#define DLLAPI __declspec(dllexport)	// 导出并定义宏
#else
	#define DLLAPI __declspec(dllimport)	// 导入并定义宏
#endif

int DLLAPI add(int a, int b);
int DLLAPI sub(int a, int b);

#endif
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

#pragma comment(lib, &quot;testdll.lib&quot;)							// 除了dll还会生成lib，但这个lib不是真正的静态库。隐式调用dll文件
#include &quot;testdll.h&quot;										// 这里做了宏的导入，后面就不用写了

int main()
{
    std::cout &lt;&lt; Add(1,1) &lt;&lt; endl;							// 输出：2
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="显式调用" tabindex="-1"><a class="header-anchor" href="#显式调用"><span>显式调用</span></a></h4><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;windows.h&gt;										// windows
#include &lt;iostream&gt;

// #pragma comment(lib, &quot;testdll.lib&quot;)
#include &quot;testdll.h&quot;										// 这里做了宏的导入，后面就不用写了

typedef int (*PADD)(int a, int b);					// 用于接口转换？
typedef int (*PSUB)(int a, int b);

int main()
{
    HMODULE hDLL = LoadLibrary(&quot;./testdll.dll&quot;);			// 显式加载dll文件
    if(hDLL == NULL){
        printf(&quot;加载DLL文件失败&quot;);
        return 0;
    }
    
    PADD pAdd = (PADD)GetProcAddress(hDLL, &quot;?add@@YAHHH@Z&quot;);// 返回函数指针，后面的名字是用Dependency看的
    PSUB pSub = (PSUB)GetProcAddress(hDLL, &quot;?sub@@YAHHH@Z&quot;);// 因为c++编译会把动态库函数名改了，c无此问题（名称修饰）
    														// 解决方案是加关键字extern &quot;C&quot;
    
    std::cout &lt;&lt; pAdd(1,1) &lt;&lt; endl;							// 输出：2
    std::cout &lt;&lt; pSub(1,1) &lt;&lt; endl;							// 输出：0
    
    FreeLibrary(hDLL);										// 卸载dll
    
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="模块定义文件-def" tabindex="-1"><a class="header-anchor" href="#模块定义文件-def"><span>模块定义文件.def</span></a></h4><p>项目右键 &gt; 添加 &gt; 新建项 &gt; 代码 &gt; 模块定义文件(.def)</p><div class="language-def line-numbers-mode" data-ext="def" data-title="def"><pre class="language-def"><code>LIBRARY testdll
EXPORTS
add
sub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置的方式-1" tabindex="-1"><a class="header-anchor" href="#配置的方式-1"><span>配置的方式</span></a></h4><p>如果按静态库的方法配置，能编译通过，但运行时弹窗报错：找不到DLL文件</p><p>即还需要一步：将DLL文件复制到exe文件的所在路径（或者放在windows的dll搜索路径里）</p><h2 id="qt-c-编译流程" tabindex="-1"><a class="header-anchor" href="#qt-c-编译流程"><span>Qt C++ 编译流程</span></a></h2><p>详见Qt笔记</p><h1 id="不同语言调dll区别" tabindex="-1"><a class="header-anchor" href="#不同语言调dll区别"><span>不同语言调Dll区别</span></a></h1><h2 id="动态调用和静态调用" tabindex="-1"><a class="header-anchor" href="#动态调用和静态调用"><span>动态调用和静态调用</span></a></h2><p>调用Dll有两种方式</p><table><thead><tr><th>调用方式</th><th>需要的文件</th><th>补充</th></tr></thead><tbody><tr><td>静态调用</td><td>编译时不仅需要头文件、甚至可能还需要lib文件。运行时需要dll文件</td><td>基本是当作未编译文件来用</td></tr><tr><td>动态调用</td><td>仅需要dll文件</td><td>一般有个LoadLibrary()函数</td></tr></tbody></table><h2 id="不同语言和调用方式的举例" tabindex="-1"><a class="header-anchor" href="#不同语言和调用方式的举例"><span>不同语言和调用方式的举例</span></a></h2><ul><li>Cpp_VS静态调用：编译前需要通过<strong>VS配置</strong>来找到头文件和lib文件，然后将dll文件置于项目根路径下</li><li>EProgram静态调用：编译前需要插入DLL运行时库并添加库的头部信息，相当于重新写了一个易语言版的头文件</li><li>Python动态调用：作为一个动态语言并没有静态调用一说（连编译dll都需要先转化成c语言），动态调用</li><li>Java：未测试</li></ul>`,52))])}const f=r(o,[["render",m],["__file","动态库和静态库.html.vue"]]),D=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Type/DLL/DLL/%E5%8A%A8%E6%80%81%E5%BA%93%E5%92%8C%E9%9D%99%E6%80%81%E5%BA%93.html","title":"动态库与静态库讲解","lang":"zh-CN","frontmatter":{"description":"动态库与静态库讲解 参考： 【B站】动态库与静态库讲解 【B站】C/C++基础教学：动态库和静态库开发 【Microsoft官网】在 Visual Studio 中创建 C/C++ DLL 基于该文档的视频：【YouTube】如何使用 C++ MSVC Visual Studio 2019 演练创建和使用 DLL（动态链接库） 目录 动态库与静态库讲解...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Type/DLL/DLL/%E5%8A%A8%E6%80%81%E5%BA%93%E5%92%8C%E9%9D%99%E6%80%81%E5%BA%93.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"动态库与静态库讲解"}],["meta",{"property":"og:description","content":"动态库与静态库讲解 参考： 【B站】动态库与静态库讲解 【B站】C/C++基础教学：动态库和静态库开发 【Microsoft官网】在 Visual Studio 中创建 C/C++ DLL 基于该文档的视频：【YouTube】如何使用 C++ MSVC Visual Studio 2019 演练创建和使用 DLL（动态链接库） 目录 动态库与静态库讲解..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"动态库与静态库讲解\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"动态库与静态库讲解","slug":"动态库与静态库讲解","link":"#动态库与静态库讲解","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"动态库与静态库讲解","slug":"动态库与静态库讲解-1","link":"#动态库与静态库讲解-1","children":[{"level":2,"title":"通用","slug":"通用","link":"#通用","children":[{"level":3,"title":"代码的三种分发方式","slug":"代码的三种分发方式","link":"#代码的三种分发方式","children":[]},{"level":3,"title":"区别","slug":"区别","link":"#区别","children":[{"level":4,"title":"体积上和零散性","slug":"体积上和零散性","link":"#体积上和零散性","children":[]},{"level":4,"title":"动态编译和静态编译","slug":"动态编译和静态编译","link":"#动态编译和静态编译","children":[]},{"level":4,"title":"选用","slug":"选用","link":"#选用","children":[]}]}]},{"level":2,"title":"补充","slug":"补充","link":"#补充","children":[{"level":3,"title":"补充 - windows常用dll","slug":"补充-windows常用dll","link":"#补充-windows常用dll","children":[]},{"level":3,"title":"如何查看dll提供的函数","slug":"如何查看dll提供的函数","link":"#如何查看dll提供的函数","children":[]}]},{"level":2,"title":"VS C++  编译库","slug":"vs-c-编译库","link":"#vs-c-编译库","children":[{"level":3,"title":"基本流程","slug":"基本流程","link":"#基本流程","children":[]},{"level":3,"title":"静态库的开发","slug":"静态库的开发","link":"#静态库的开发","children":[]},{"level":3,"title":"动态库的开发","slug":"动态库的开发","link":"#动态库的开发","children":[]},{"level":3,"title":"开发区别及原理（略）","slug":"开发区别及原理-略","link":"#开发区别及原理-略","children":[]}]},{"level":2,"title":"VS C++  使用库","slug":"vs-c-使用库","link":"#vs-c-使用库","children":[{"level":3,"title":"静态库的使用","slug":"静态库的使用","link":"#静态库的使用","children":[{"level":4,"title":"偷懒的方式","slug":"偷懒的方式","link":"#偷懒的方式","children":[]},{"level":4,"title":"配置的方式","slug":"配置的方式","link":"#配置的方式","children":[]}]},{"level":3,"title":"动态库的使用","slug":"动态库的使用","link":"#动态库的使用","children":[{"level":4,"title":"隐式调用 + 导入dll","slug":"隐式调用-导入dll","link":"#隐式调用-导入dll","children":[]},{"level":4,"title":"隐式调用 + 宏的方式","slug":"隐式调用-宏的方式","link":"#隐式调用-宏的方式","children":[]},{"level":4,"title":"显式调用","slug":"显式调用","link":"#显式调用","children":[]},{"level":4,"title":"模块定义文件.def","slug":"模块定义文件-def","link":"#模块定义文件-def","children":[]},{"level":4,"title":"配置的方式","slug":"配置的方式-1","link":"#配置的方式-1","children":[]}]}]},{"level":2,"title":"Qt C++  编译流程","slug":"qt-c-编译流程","link":"#qt-c-编译流程","children":[]}]},{"level":1,"title":"不同语言调Dll区别","slug":"不同语言调dll区别","link":"#不同语言调dll区别","children":[{"level":2,"title":"动态调用和静态调用","slug":"动态调用和静态调用","link":"#动态调用和静态调用","children":[]},{"level":2,"title":"不同语言和调用方式的举例","slug":"不同语言和调用方式的举例","link":"#不同语言和调用方式的举例","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":6.21,"words":1863},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/DLL/DLL/动态库和静态库.md","excerpt":"\\n<p>参考：</p>\\n<ul>\\n<li><a href=\\"https://www.bilibili.com/video/BV1XE411k7PN\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">【B站】动态库与静态库讲解</a></li>\\n<li><a href=\\"https://www.bilibili.com/video/BV1Kt411775b\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">【B站】C/C++基础教学：动态库和静态库开发</a></li>\\n<li><a href=\\"https://docs.microsoft.com/zh-cn/cpp/build/walkthrough-creating-and-using-a-dynamic-link-library-cpp?view=msvc-160\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">【Microsoft官网】在 Visual Studio 中创建 C/C++ DLL</a>\\n基于该文档的视频：<a href=\\"https://www.youtube.com/watch?v=auNPlHYB4ss\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">【YouTube】如何使用 C++ MSVC Visual Studio 2019 演练创建和使用 DLL（动态链接库）</a></li>\\n</ul>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/DLL/DLL/动态库和静态库.md","value":{"title":"动态库和静态库","path":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/DLL/DLL/动态库和静态库.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{f as comp,D as data};

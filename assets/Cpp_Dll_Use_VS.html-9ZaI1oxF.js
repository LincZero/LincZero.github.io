import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as i,a as n}from"./app-Ld2qzqw_.js";const t={},a=n(`<h1 id="dll-compiled-by-all-language" tabindex="-1"><a class="header-anchor" href="#dll-compiled-by-all-language"><span>DLL Compiled By All Language</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="vs-cpp-dll-use" tabindex="-1"><a class="header-anchor" href="#vs-cpp-dll-use"><span>VS_Cpp_Dll_Use</span></a></h1><h2 id="项目配置方法" tabindex="-1"><a class="header-anchor" href="#项目配置方法"><span>项目配置方法</span></a></h2><h3 id="工程模板" tabindex="-1"><a class="header-anchor" href="#工程模板"><span>工程模板</span></a></h3><p>ConsoleApplication1.cpp</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// ConsoleApplication1.cpp : 此文件包含 &quot;main&quot; 函数。程序执行将在此处开始并结束。
//

#include &lt;iostream&gt;

int main()
{
    std::cout &lt;&lt; &quot;Hello World!\\n&quot;;
}

// 运行程序: Ctrl + F5 或调试 &gt;“开始执行(不调试)”菜单
// 调试程序: F5 或调试 &gt;“开始调试”菜单

// 入门使用技巧: 
//   1. 使用解决方案资源管理器窗口添加/管理文件
//   2. 使用团队资源管理器窗口连接到源代码管理
//   3. 使用输出窗口查看生成输出和其他消息
//   4. 使用错误列表窗口查看错误
//   5. 转到“项目”&gt;“添加新项”以创建新的代码文件，或转到“项目”&gt;“添加现有项”以将现有代码文件添加到项目
//   6. 将来，若要再次打开此项目，请转到“文件”&gt;“打开”&gt;“项目”并选择 .sln 文件

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="工程配置" tabindex="-1"><a class="header-anchor" href="#工程配置"><span>工程配置</span></a></h3><p>以VS2019为例去配置</p><ol><li><p>项目右键 &gt; 属性 &gt; 配置属性 &gt; C/C++ &gt; 附加包含目录 &gt; 添加静态库头文件的路径</p><p>（项目工程的地方，可以改成相对路径）</p><p>缺失则编译时下步报错：<code>无法打开 源文件 &quot;library.h&quot;</code></p></li><li><p>项目右键 &gt; 属性 &gt; 配置属性 &gt; 链接器 &gt; 输入 &gt; 附加依赖项 &gt; 输入lib文件的文件名</p><p>（无需路径、需扩展名，例如 Dll1.lib）</p><p>缺失则编译时报错：<code>LNK2019 无法解析的外部符号 __imp__fibonacci_init</code></p></li><li><p>项目右键 &gt; 属性 &gt; 配置属性 &gt; 链接器 &gt; 常规 &gt; 附加库路径 &gt; 添加静态库lib文件的路径</p><p>（Debug/Release文件夹内，例如 ..\\..\\Dll1\\$(IntDir)）</p><p>缺失或路径不正确则编译时报错：<code>LNK1104 无法打开文件“Dll1.lib”</code></p></li><li><p>两种方法</p><ul><li><p>将Dll文件复制到当前项目路径下</p><p>（前面配置的是lib文件路径而不是dll文件路径，dll文件默认都是在项目的根路径下查找的）</p></li><li><p>或者配置：项目右键 &gt; 属性 &gt; 配置属性 &gt; 构建事件 &gt; 后期生成事件 &gt; 命令行输入：</p><p><code>xcopy /y /d &quot;..\\..\\Dll1\\$(IntDir)Dll1.dll&quot; &quot;$(OutDir)&quot;</code></p><p>其实原理不变，这里是自动复制dll文件到当前路径下，不需要手动复制，而并没有真正地修改dll路径</p></li><li><p>缺失运行时弹出报错：<code>ConsoleApplication1.exe 系统错误，由于找不到Dll1.dll，无法继续执行代码。重新安装程序可能会解决此问题</code></p></li></ul></li></ol><p>以上配置过程中注意一下Debug/Release和平台的选择，修改完要保存</p><h3 id="工程修改" tabindex="-1"><a class="header-anchor" href="#工程修改"><span>工程修改</span></a></h3><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// MathClient.cpp : Client app for MathLibrary DLL.
// #include &quot;pch.h&quot; Uncomment for Visual Studio 2017 and earlier
#include &lt;iostream&gt;
#include &quot;library.h&quot;

int main()
{
    // Initialize a Fibonacci relation sequence.
    fibonacci_init(1, 1);
    // Write out the sequence values until overflow.
    do {
        std::cout &lt;&lt; fibonacci_index() &lt;&lt; &quot;: &quot;
            &lt;&lt; fibonacci_current() &lt;&lt; std::endl;
    } while (fibonacci_next());
    // Report count of values written before overflow.
    std::cout &lt;&lt; fibonacci_index() + 1 &lt;&lt;
        &quot; Fibonacci sequence values fit in an &quot; &lt;&lt;
        &quot;unsigned 64-bit integer.&quot; &lt;&lt; std::endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="补充-外部依赖项" tabindex="-1"><a class="header-anchor" href="#补充-外部依赖项"><span>补充：外部依赖项</span></a></h3><p>此时，可以在VS解决方案的 “外部依赖项” 中的末尾找到文件 “library.h”</p><h2 id="loadlibrary-方法" tabindex="-1"><a class="header-anchor" href="#loadlibrary-方法"><span>LoadLibrary 方法</span></a></h2><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;Windows.h&gt;
#include &lt;iostream&gt;
#include &lt;tchar.h&gt;
using namespace std;
int main()
{
	typedef int(*pAdd)(const char * a, const char * b);
	HINSTANCE hDLL = LoadLibrary(_T(&quot;python_to_DLL.dll&quot;));
	cout &lt;&lt; &quot;hDLL:&quot; &lt;&lt; hDLL &lt;&lt; endl;
	if (hDLL)
	{
		// 获取DLL中需要调用的函数的地址
		pAdd pFun = (pAdd)GetProcAddress(hDLL, &quot;_str_add&quot;);
		cout &lt;&lt; &quot;pFun:&quot; &lt;&lt; pFun &lt;&lt; endl;
		const char* stra = &quot;12&quot;;
		const char* strb = &quot;22&quot;;
		if (pFun)
		{
			int i = pFun(stra, strb);
			cout &lt;&lt; &quot;i = &quot; &lt;&lt; i &lt;&lt; endl;
		}
	}
	// 调用dll测试
	//将字符变成int然后相加
	system(&quot;pause&quot;);
	return 0;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),d=[a];function s(c,r){return e(),i("div",null,d)}const p=l(t,[["render",s],["__file","Cpp_Dll_Use_VS.html.vue"]]),v=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Type/DLL/DLL%20Compiled%20By%20All%20Language/Cpp_Dll_Use_VS.html","title":"DLL Compiled By All Language","lang":"zh-CN","frontmatter":{"description":"DLL Compiled By All Language 目录 VS_Cpp_Dll_Use 项目配置方法 工程模板 ConsoleApplication1.cpp 工程配置 以VS2019为例去配置 项目右键 > 属性 > 配置属性 > C/C++ > 附加包含目录 > 添加静态库头文件的路径 （项目工程的地方，可以改成相对路径） 缺失则编译时下步报...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Type/DLL/DLL%20Compiled%20By%20All%20Language/Cpp_Dll_Use_VS.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"DLL Compiled By All Language"}],["meta",{"property":"og:description","content":"DLL Compiled By All Language 目录 VS_Cpp_Dll_Use 项目配置方法 工程模板 ConsoleApplication1.cpp 工程配置 以VS2019为例去配置 项目右键 > 属性 > 配置属性 > C/C++ > 附加包含目录 > 添加静态库头文件的路径 （项目工程的地方，可以改成相对路径） 缺失则编译时下步报..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DLL Compiled By All Language\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"DLL Compiled By All Language","slug":"dll-compiled-by-all-language","link":"#dll-compiled-by-all-language","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"VS_Cpp_Dll_Use","slug":"vs-cpp-dll-use","link":"#vs-cpp-dll-use","children":[{"level":2,"title":"项目配置方法","slug":"项目配置方法","link":"#项目配置方法","children":[{"level":3,"title":"工程模板","slug":"工程模板","link":"#工程模板","children":[]},{"level":3,"title":"工程配置","slug":"工程配置","link":"#工程配置","children":[]},{"level":3,"title":"工程修改","slug":"工程修改","link":"#工程修改","children":[]},{"level":3,"title":"补充：外部依赖项","slug":"补充-外部依赖项","link":"#补充-外部依赖项","children":[]}]},{"level":2,"title":"LoadLibrary 方法","slug":"loadlibrary-方法","link":"#loadlibrary-方法","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.83,"words":849},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Type/DLL/DLL Compiled By All Language/Cpp_Dll_Use_VS.md","autoDesc":true}');export{p as comp,v as data};

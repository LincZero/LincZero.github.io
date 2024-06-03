import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,a as l}from"./app-BAt33Ddg.js";const d={},s=l(`<h1 id="dll-compiled-by-all-language" tabindex="-1"><a class="header-anchor" href="#dll-compiled-by-all-language"><span>DLL Compiled By All Language</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="vs-cpp-dll-build" tabindex="-1"><a class="header-anchor" href="#vs-cpp-dll-build"><span>VS_Cpp_Dll_Build</span></a></h1><p>VS &gt; 创建新项目 &gt; 动态链接库</p><h2 id="工程模板" tabindex="-1"><a class="header-anchor" href="#工程模板"><span>工程模板</span></a></h2><p>工程结构</p><blockquote><p>Dll1</p><ul><li>头文件 <ul><li>framework.h</li><li>pch.h</li></ul></li><li>源文件 <ul><li>dllmain.cpp 【不同】</li><li>pch.cpp</li></ul></li></ul></blockquote><p>framework.h</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#pragma once

#define WIN32_LEAN_AND_MEAN             // 从 Windows 头文件中排除极少使用的内容
// Windows 头文件
#include &lt;windows.h&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pch.h（完全一样）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// pch.h: 这是预编译标头文件。
// 下方列出的文件仅编译一次，提高了将来生成的生成性能。
// 这还将影响 IntelliSense 性能，包括代码完成和许多代码浏览功能。
// 但是，如果此处列出的文件中的任何一个在生成之间有更新，它们全部都将被重新编译。
// 请勿在此处添加要频繁更新的文件，这将使得性能优势无效。

#ifndef PCH_H
#define PCH_H

// 添加要在此处预编译的标头
#include &quot;framework.h&quot;

#endif //PCH_H

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>dllmain.cpp【核心】</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// dllmain.cpp : 定义 DLL 应用程序的入口点。
#include &quot;pch.h&quot;

BOOL APIENTRY DllMain( HMODULE hModule,
                       DWORD  ul_reason_for_call,
                       LPVOID lpReserved
                     )
{
    switch (ul_reason_for_call)
    {
    case DLL_PROCESS_ATTACH:
    case DLL_THREAD_ATTACH:
    case DLL_THREAD_DETACH:
    case DLL_PROCESS_DETACH:
        break;
    }
    return TRUE;
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pch.cpp（完全一样）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// pch.cpp: 与预编译标头对应的源文件

#include &quot;pch.h&quot;

// 当使用预编译的头时，需要使用此源文件，编译才能成功。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工程模板编译" tabindex="-1"><a class="header-anchor" href="#工程模板编译"><span>工程模板编译</span></a></h2><p>菜单 &gt; 生成 &gt; (重新)生成解决方案</p><p>生成文件：在同级目录下有的Debug文件夹</p><ul><li>Debug <ul><li>Dll1.dll</li><li>Dll1.ilk</li><li>Dll1.pdb</li></ul></li></ul><h2 id="工程修改-microsfot-demo" tabindex="-1"><a class="header-anchor" href="#工程修改-microsfot-demo"><span>工程修改（Microsfot Demo）</span></a></h2><p>library.h</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// MathLibrary.h - Contains declarations of math functions
#pragma once

#ifdef LIBRARY_EXPORTS  //【关键字声明】
#define LIBRARY_API __declspec(dllexport)
#else
#define LIBRARY_API __declspec(dllimport)
#endif

// The Fibonacci recurrence relation describes a sequence F
// where F(n) is { n = 0, a
//               { n = 1, b
//               { n &gt; 1, F(n-2) + F(n-1)
// for some initial integral values a and b.
// If the sequence is initialized F(0) = 1, F(1) = 1,
// then this relation produces the well-known Fibonacci
// sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

// Initialize a Fibonacci relation sequence
// such that F(0) = a, F(1) = b.
// This function must be called before any other function.
extern &quot;C&quot; LIBRARY_API void fibonacci_init(
    const unsigned long long a, const unsigned long long b);

// Produce the next value in the sequence.
// Returns true on success and updates current value and index;
// false on overflow, leaves current value and index unchanged.
extern &quot;C&quot; LIBRARY_API bool fibonacci_next();

// Get the current value in the sequence.
extern &quot;C&quot; LIBRARY_API unsigned long long fibonacci_current();

// Get the position of the current value in the sequence.
extern &quot;C&quot; LIBRARY_API unsigned fibonacci_index();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>library.cpp</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// MathLibrary.cpp : Defines the exported functions for the DLL.
#include &quot;pch.h&quot; // use stdafx.h in Visual Studio 2017 and earlier
#include &lt;utility&gt;
#include &lt;limits.h&gt;
#include &quot;library.h&quot;    //【】

// DLL internal state variables:
static unsigned long long previous_;  // Previous value, if any
static unsigned long long current_;   // Current sequence value
static unsigned index_;               // Current seq. position

// Initialize a Fibonacci relation sequence
// such that F(0) = a, F(1) = b.
// This function must be called before any other function.
void fibonacci_init(
    const unsigned long long a,
    const unsigned long long b)
{
    index_ = 0;
    current_ = a;
    previous_ = b; // see special case when initialized
}

// Produce the next value in the sequence.
// Returns true on success, false on overflow.
bool fibonacci_next()
{
    // check to see if we&#39;d overflow result or position
    if ((ULLONG_MAX - previous_ &lt; current_) ||
        (UINT_MAX == index_))
    {
        return false;
    }

    // Special case when index == 0, just return b value
    if (index_ &gt; 0)
    {
        // otherwise, calculate next sequence value
        previous_ += current_;
    }
    std::swap(current_, previous_);
    ++index_;
    return true;
}

// Get the current value in the sequence.
unsigned long long fibonacci_current()
{
    return current_;
}

// Get the current index position in the sequence.
unsigned fibonacci_index()
{
    return index_;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工程修改编译" tabindex="-1"><a class="header-anchor" href="#工程修改编译"><span>工程修改编译</span></a></h2><p>菜单 &gt; 生成 &gt; (重新)生成解决方案</p><p>生成文件：在同级目录下有的Debug文件夹</p><ul><li><p>Debug</p><ul><li><p>Dll1.dll（话说我看了两次，显示结果不同，难道是同一次我vs还在运行中的原因？）</p><ul><li><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// Dependencies查看
// 在导出时extern “C&quot;了，这里没名称修饰
|DLL     |Name              |Ordinal|Type|Name type     |
|--------|------------------|-------|----|--------------|
|Dll1.dll|_fibonacci_current|0      |code|Name,no prefix|
|Dll1.dll|_fibonacci_index  |1      |code|Name,no prefix|
|Dll1.dll|_fibonacci_init   |2      |code|Name,no prefix|
|Dll1.dll|_fibonacci_next   |3      |code|Name,no prefix|
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// Dependencies查看
|Name             |Ordinal|VA   |
|-----------------|-------|-----|
|fibonacci_current|0      |0x612|
|fibonacci_index  |1      |0x58b|
|fibonacci_init   |2      |0x44b|
|fibonacci_next   |3      |0x707|
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>Dll1.ilk</p></li><li><p>Dll1.pdb</p></li><li><p>Dll1.lib</p></li><li><p>Dll1.exp</p></li></ul></li></ul>`,28),a=[s];function c(r,u){return i(),n("div",null,a)}const o=e(d,[["render",c],["__file","Cpp_Dll_Build_VS.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Type/DLL/DLL%20Compiled%20By%20All%20Language/Cpp_Dll_Build_VS.html","title":"DLL Compiled By All Language","lang":"zh-CN","frontmatter":{"description":"DLL Compiled By All Language 目录 VS_Cpp_Dll_Build VS > 创建新项目 > 动态链接库 工程模板 工程结构 Dll1 头文件 framework.h pch.h 源文件 dllmain.cpp 【不同】 pch.cpp framework.h pch.h（完全一样） dllmain.cpp【核心】 pch...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Type/DLL/DLL%20Compiled%20By%20All%20Language/Cpp_Dll_Build_VS.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"DLL Compiled By All Language"}],["meta",{"property":"og:description","content":"DLL Compiled By All Language 目录 VS_Cpp_Dll_Build VS > 创建新项目 > 动态链接库 工程模板 工程结构 Dll1 头文件 framework.h pch.h 源文件 dllmain.cpp 【不同】 pch.cpp framework.h pch.h（完全一样） dllmain.cpp【核心】 pch..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DLL Compiled By All Language\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"DLL Compiled By All Language","slug":"dll-compiled-by-all-language","link":"#dll-compiled-by-all-language","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"VS_Cpp_Dll_Build","slug":"vs-cpp-dll-build","link":"#vs-cpp-dll-build","children":[{"level":2,"title":"工程模板","slug":"工程模板","link":"#工程模板","children":[]},{"level":2,"title":"工程模板编译","slug":"工程模板编译","link":"#工程模板编译","children":[]},{"level":2,"title":"工程修改（Microsfot Demo）","slug":"工程修改-microsfot-demo","link":"#工程修改-microsfot-demo","children":[]},{"level":2,"title":"工程修改编译","slug":"工程修改编译","link":"#工程修改编译","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3,"words":900},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Type/DLL/DLL Compiled By All Language/Cpp_Dll_Build_VS.md","autoDesc":true}');export{o as comp,m as data};

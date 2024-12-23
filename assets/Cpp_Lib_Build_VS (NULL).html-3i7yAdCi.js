import{_ as l,c as i,a as n,o as a}from"./app-m8pBmpZD.js";const d={};function c(s,e){return a(),i("div",null,e[0]||(e[0]=[n(`<h1 id="dll-compiled-by-all-language" tabindex="-1"><a class="header-anchor" href="#dll-compiled-by-all-language"><span>DLL Compiled By All Language</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="vs-cpp——lib-build" tabindex="-1"><a class="header-anchor" href="#vs-cpp——lib-build"><span>VS_Cpp——Lib_Build</span></a></h1><p>VS &gt; 创建新项目 &gt; 静态库</p><h2 id="工程模板" tabindex="-1"><a class="header-anchor" href="#工程模板"><span>工程模板</span></a></h2><h3 id="工程结构" tabindex="-1"><a class="header-anchor" href="#工程结构"><span>工程结构</span></a></h3><p>Dll1</p><ul><li>头文件 <ul><li>framework.h</li><li>pch.h</li></ul></li><li>源文件 <ul><li>StaticLib1.cpp 【不同】</li><li>pch.cpp</li></ul></li></ul><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码"><span>代码</span></a></h3><p>framework.h</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#pragma once

#define WIN32_LEAN_AND_MEAN             // 从 Windows 头文件中排除极少使用的内容

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pch.h（完全一样）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// pch.h: 这是预编译标头文件。
// 下方列出的文件仅编译一次，提高了将来生成的生成性能。
// 这还将影响 IntelliSense 性能，包括代码完成和许多代码浏览功能。
// 但是，如果此处列出的文件中的任何一个在生成之间有更新，它们全部都将被重新编译。
// 请勿在此处添加要频繁更新的文件，这将使得性能优势无效。

#ifndef PCH_H
#define PCH_H

// 添加要在此处预编译的标头
#include &quot;framework.h&quot;

#endif //PCH_H

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>dllmain.cpp【核心】</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// StaticLib1.cpp : 定义静态库的函数。
//

#include &quot;pch.h&quot;
#include &quot;framework.h&quot;

// TODO: 这是一个库函数示例
void fnStaticLib1()
{
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pch.cpp（完全一样）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// pch.cpp: 与预编译标头对应的源文件

#include &quot;pch.h&quot;

// 当使用预编译的头时，需要使用此源文件，编译才能成功。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1>`,18)]))}const t=l(d,[["render",c],["__file","Cpp_Lib_Build_VS (NULL).html.vue"]]),r=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Type/DLL/DLL%20Compiled%20By%20All%20Language/Cpp_Lib_Build_VS%20(NULL).html","title":"DLL Compiled By All Language","lang":"zh-CN","frontmatter":{"description":"DLL Compiled By All Language 目录 VS_Cpp——Lib_Build VS > 创建新项目 > 静态库 工程模板 工程结构 Dll1 头文件 framework.h pch.h 源文件 StaticLib1.cpp 【不同】 pch.cpp 代码 framework.h pch.h（完全一样） dllmain.cpp【核心...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Type/DLL/DLL%20Compiled%20By%20All%20Language/Cpp_Lib_Build_VS%20(NULL).html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"DLL Compiled By All Language"}],["meta",{"property":"og:description","content":"DLL Compiled By All Language 目录 VS_Cpp——Lib_Build VS > 创建新项目 > 静态库 工程模板 工程结构 Dll1 头文件 framework.h pch.h 源文件 StaticLib1.cpp 【不同】 pch.cpp 代码 framework.h pch.h（完全一样） dllmain.cpp【核心..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DLL Compiled By All Language\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"DLL Compiled By All Language","slug":"dll-compiled-by-all-language","link":"#dll-compiled-by-all-language","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"VS_Cpp——Lib_Build","slug":"vs-cpp——lib-build","link":"#vs-cpp——lib-build","children":[{"level":2,"title":"工程模板","slug":"工程模板","link":"#工程模板","children":[{"level":3,"title":"工程结构","slug":"工程结构","link":"#工程结构","children":[]},{"level":3,"title":"代码","slug":"代码","link":"#代码","children":[]}]}]},{"level":1,"title":"","slug":"","link":"#","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.97,"words":291},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/DLL/DLL Compiled By All Language/Cpp_Lib_Build_VS (NULL).md","excerpt":"\\n<h1>目录</h1>\\n<h1>VS_Cpp——Lib_Build</h1>\\n<p>VS &gt; 创建新项目 &gt; 静态库</p>\\n<h2>工程模板</h2>\\n<h3>工程结构</h3>\\n<p>Dll1</p>\\n<ul>\\n<li>头文件\\n<ul>\\n<li>framework.h</li>\\n<li>pch.h</li>\\n</ul>\\n</li>\\n<li>源文件\\n<ul>\\n<li>StaticLib1.cpp\\t【不同】</li>\\n<li>pch.cpp</li>\\n</ul>\\n</li>\\n</ul>\\n<h3>代码</h3>\\n<p>framework.h</p>\\n<div class=\\"language-c++\\" data-ext=\\"c++\\" data-title=\\"c++\\"><pre class=\\"language-c++\\"><code>#pragma once\\n\\n#define WIN32_LEAN_AND_MEAN             // 从 Windows 头文件中排除极少使用的内容\\n\\n</code></pre></div>","autoDesc":true}');export{t as comp,r as data};

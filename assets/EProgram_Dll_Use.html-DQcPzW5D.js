import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as l,c as a,a as n}from"./app-Bmv5Ekr9.js";const i={},d=n(`<h1 id="dll-compiled-by-all-language" tabindex="-1"><a class="header-anchor" href="#dll-compiled-by-all-language"><span>DLL Compiled By All Language</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="eprogram-dll-use" tabindex="-1"><a class="header-anchor" href="#eprogram-dll-use"><span>EProgram_Dll_Use</span></a></h1><h2 id="工程模板" tabindex="-1"><a class="header-anchor" href="#工程模板"><span>工程模板</span></a></h2><p>创建控制台程序即可</p><p>程序集1</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>.版本 2

.程序集 程序集1

.子程序 _启动子程序, 整数型, , 本子程序在程序启动后最先执行

返回 (0)  &#39; 可以根据您的需要返回任意数值

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改工程" tabindex="-1"><a class="header-anchor" href="#修改工程"><span>修改工程</span></a></h2><p>菜单 &gt; 插入 &gt; Dll命令</p><p>Dll命令定义表（其实就是充当dll头文件的功能）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>.版本 2

.DLL命令 DLL命令1, 文本型, &quot;../Build/EProgramDll.dll&quot;, &quot;EProgramDll&quot;
    .参数 str1, 文本型
    .参数 str2, 文本型

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>程序集1</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>.版本 2

.程序集 程序集1

.子程序 _启动子程序, 整数型, , 本子程序在程序启动后最先执行

输出调试文本 (DLL命令1 (“Hello”, “World”))
返回 (0)  &#39; 可以根据您的需要返回任意数值

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),r=[d];function t(s,c){return l(),a("div",null,r)}const u=e(i,[["render",t],["__file","EProgram_Dll_Use.html.vue"]]),p=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Type/DLL/DLL%20Compiled%20By%20All%20Language/EProgram_Dll_Use.html","title":"DLL Compiled By All Language","lang":"zh-CN","frontmatter":{"description":"DLL Compiled By All Language 目录 EProgram_Dll_Use 工程模板 创建控制台程序即可 程序集1 修改工程 菜单 > 插入 > Dll命令 Dll命令定义表（其实就是充当dll头文件的功能） 程序集1","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Type/DLL/DLL%20Compiled%20By%20All%20Language/EProgram_Dll_Use.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"DLL Compiled By All Language"}],["meta",{"property":"og:description","content":"DLL Compiled By All Language 目录 EProgram_Dll_Use 工程模板 创建控制台程序即可 程序集1 修改工程 菜单 > 插入 > Dll命令 Dll命令定义表（其实就是充当dll头文件的功能） 程序集1"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DLL Compiled By All Language\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"DLL Compiled By All Language","slug":"dll-compiled-by-all-language","link":"#dll-compiled-by-all-language","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"EProgram_Dll_Use","slug":"eprogram-dll-use","link":"#eprogram-dll-use","children":[{"level":2,"title":"工程模板","slug":"工程模板","link":"#工程模板","children":[]},{"level":2,"title":"修改工程","slug":"修改工程","link":"#修改工程","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.72,"words":216},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Type/DLL/DLL Compiled By All Language/EProgram_Dll_Use.md","autoDesc":true}');export{u as comp,p as data};

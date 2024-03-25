import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as t,a as l}from"./app-DGJmjHtg.js";const i={},a=l(`<h1 id="c" tabindex="-1"><a class="header-anchor" href="#c"><span>C++</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="仿函数" tabindex="-1"><a class="header-anchor" href="#仿函数"><span>仿函数</span></a></h1><h2 id="大小比较仿函数" tabindex="-1"><a class="header-anchor" href="#大小比较仿函数"><span>大小比较仿函数</span></a></h2><ul><li><p><strong>“ 所有 algorithms，其内最终涉及元素本身的操作，无非就是比大小 ”</strong></p></li><li><p>仿函数的用法</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>bool strLonger(const string&amp; s1, const string&amp; s2){
    return s1.size()&lt; s2.size();
}

cout &lt;&lt; &quot;max of zoo and hello : &quot;
	&lt;&lt; max(string(&quot;zoo&quot;), string(&quot;hello&quot;)) &lt;&lt;endl;				// zoo

cout &lt;&lt; &quot;max of zoo and hello : &quot;
	&lt;&lt; max(string(&quot;zoo&quot;), string(&quot;hello&quot;), strLonger) &lt;&lt;endl;	// hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>算法 Algorithms（比大小）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>template &lt;class T&gt;
inline const T&amp; min(const T&amp; a, const T&amp; b){
    return b&lt;a?b:a;
}

template &lt;class T&gt;
inline const T&amp; max(const T&amp; a, const T&amp; b){
    return a&lt;b?b:a;
}

template &lt;class T, class Compare&gt;
inline const T&amp; min(const T&amp; a, const T&amp; b, Compare comp){	// Compare是比较大小的仿函数
    return comp(b,a)?b:a;
}

template &lt;class T, class Compare&gt;
inline const T&amp; max(const T&amp; a, const T&amp; b, Compare comp){	// Compare是比较大小的仿函数
    return comp(a,b)?b:a;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,5),s=[a];function o(r,c){return n(),t("div",null,s)}const u=e(i,[["render",o],["__file","07. 仿函数.html.vue"]]),p=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/C__/07.%20%E6%A8%A1%E5%9D%97%E5%BA%93/STL/07.%20%E4%BB%BF%E5%87%BD%E6%95%B0.html","title":"C++","lang":"zh-CN","frontmatter":{"description":"C++ 目录 仿函数 大小比较仿函数 “ 所有 algorithms，其内最终涉及元素本身的操作，无非就是比大小 ” 仿函数的用法 算法 Algorithms（比大小）","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/C__/07.%20%E6%A8%A1%E5%9D%97%E5%BA%93/STL/07.%20%E4%BB%BF%E5%87%BD%E6%95%B0.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"C++"}],["meta",{"property":"og:description","content":"C++ 目录 仿函数 大小比较仿函数 “ 所有 algorithms，其内最终涉及元素本身的操作，无非就是比大小 ” 仿函数的用法 算法 Algorithms（比大小）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"C++\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"C++","slug":"c","link":"#c","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"仿函数","slug":"仿函数","link":"#仿函数","children":[{"level":2,"title":"大小比较仿函数","slug":"大小比较仿函数","link":"#大小比较仿函数","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.65,"words":194},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/01. Language/C++/07. 模块库/STL/07. 仿函数.md","autoDesc":true}');export{u as comp,p as data};

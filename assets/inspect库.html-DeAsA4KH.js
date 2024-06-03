import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as t}from"./app-BAt33Ddg.js";const e={},p=t(`<h1 id="python" tabindex="-1"><a class="header-anchor" href="#python"><span>Python</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="inspect库" tabindex="-1"><a class="header-anchor" href="#inspect库"><span>inspect库</span></a></h1><h2 id="获取文档注释" tabindex="-1"><a class="header-anchor" href="#获取文档注释"><span>获取文档注释</span></a></h2><p>一般的打印文档注释的方法</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
这里是文档注释
&quot;&quot;&quot;</span>

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>__doc__<span class="token punctuation">)</span>		<span class="token comment"># 打印这个文件的文档注释</span>
	<span class="token keyword">return</span> <span class="token boolean">None</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;main__&quot;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># [打印结果]-------------------------------</span>
这里是文档注释
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用inspect库的方法</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> inspect

<span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; 函数中的文档注释 &quot;&quot;&quot;</span>
    <span class="token keyword">pass</span>

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>inspect<span class="token punctuation">.</span>getdoc<span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">)</span>		<span class="token comment"># 打印test函数中的文档注释</span>
	<span class="token keyword">return</span> <span class="token boolean">None</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;main__&quot;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
<span class="token comment"># [打印结果]-------------------------------</span>
 函数中的文档注释 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取源代码" tabindex="-1"><a class="header-anchor" href="#获取源代码"><span>获取源代码</span></a></h2><p>甚至可以获取源代码</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> inspect

<span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; 函数中的文档注释 &quot;&quot;&quot;</span>
    <span class="token keyword">pass</span>

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>inspect<span class="token punctuation">.</span>getdoc<span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">)</span>	
	<span class="token keyword">return</span> <span class="token boolean">None</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;main__&quot;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># [打印结果]-------------------------------</span>
<span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; 函数中的文档注释 &quot;&quot;&quot;</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="python迷惑行为-我的代码一被修改就不能运行了" tabindex="-1"><a class="header-anchor" href="#python迷惑行为-我的代码一被修改就不能运行了"><span>Python迷惑行为：我的代码一被修改就不能运行了</span></a></h2><p>参考：B站 BV1aP41157hu</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    这个函数不会修改，否则会出bug
    &quot;&quot;&quot;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token comment"># 这里的代码写隐秘点，不要被你的同事发现</span>
    <span class="token keyword">import</span> inspect
    content <span class="token operator">=</span> inspect<span class="token punctuation">.</span>getsource<span class="token punctuation">(</span>b<span class="token punctuation">)</span>
    <span class="token keyword">import</span> hashlib
    password <span class="token operator">=</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;0x</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">str</span><span class="token punctuation">(</span>hashlib<span class="token punctuation">.</span>sha256<span class="token punctuation">(</span>content<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>hexdigest<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token operator">%</span><span class="token number">1000</span>	<span class="token comment"># 获取这个函数源代码的hash值</span>
    <span class="token keyword">if</span> p <span class="token operator">!=</span> <span class="token number">100</span><span class="token punctuation">:</span>	<span class="token comment"># 由于这个数字发生改变时，hash值也会改变。所以要么把这个hash存储在外面，要么暴力破解。前面将hash缩小到三位数就是为了方便暴力</span>
        			<span class="token comment"># 如果暴力无解就随便改一下</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;都说了不要改我代码&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;代码没有被修改&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),o=[p];function i(c,l){return s(),a("div",null,o)}const r=n(e,[["render",i],["__file","inspect库.html.vue"]]),k=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/Python/07.%20%E6%A8%A1%E5%9D%97%E5%BA%93/%E6%A0%87%E5%87%86%E5%BA%93/inspect%E5%BA%93.html","title":"Python","lang":"zh-CN","frontmatter":{"description":"Python 目录 inspect库 获取文档注释 一般的打印文档注释的方法 用inspect库的方法 获取源代码 甚至可以获取源代码 Python迷惑行为：我的代码一被修改就不能运行了 参考：B站 BV1aP41157hu","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/Python/07.%20%E6%A8%A1%E5%9D%97%E5%BA%93/%E6%A0%87%E5%87%86%E5%BA%93/inspect%E5%BA%93.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Python"}],["meta",{"property":"og:description","content":"Python 目录 inspect库 获取文档注释 一般的打印文档注释的方法 用inspect库的方法 获取源代码 甚至可以获取源代码 Python迷惑行为：我的代码一被修改就不能运行了 参考：B站 BV1aP41157hu"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"Python","slug":"python","link":"#python","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"inspect库","slug":"inspect库","link":"#inspect库","children":[{"level":2,"title":"获取文档注释","slug":"获取文档注释","link":"#获取文档注释","children":[]},{"level":2,"title":"获取源代码","slug":"获取源代码","link":"#获取源代码","children":[]},{"level":2,"title":"Python迷惑行为：我的代码一被修改就不能运行了","slug":"python迷惑行为-我的代码一被修改就不能运行了","link":"#python迷惑行为-我的代码一被修改就不能运行了","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.16,"words":349},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/01. Language/Python/07. 模块库/标准库/inspect库.md","autoDesc":true}');export{r as comp,k as data};

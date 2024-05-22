import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as t}from"./app-OHhlwNoJ.js";const e={},p=t(`<h1 id="flask" tabindex="-1"><a class="header-anchor" href="#flask"><span>Flask</span></a></h1><p>day11 前端开发</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>目的：开发一个平台（网站）
	- 前端开发：HTML、CSS、JavaScript
	- Web框架：接收请求并处理
	- MySQL数据库：存储数据地方

快速上手：
	基于Flask Web框架让你快速搭建一个网站出来。
	
深入学习：
	基于Django框架（主要）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="flask安装" tabindex="-1"><a class="header-anchor" href="#flask安装"><span>Flask安装</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pip install flask
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认模板项目</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>


<span class="token comment"># 创建了网址 /show/info 和 函数index 的对应关系</span>
<span class="token comment"># 以后用户在浏览器上访问 /show/info，网站自动执行 index</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&quot;/show/info&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;中国联通&quot;</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行" tabindex="-1"><a class="header-anchor" href="#运行"><span>运行</span></a></h2><p>直接运行，然后终端会给你一个网站</p><h2 id="表单处理" tabindex="-1"><a class="header-anchor" href="#表单处理"><span>表单处理</span></a></h2><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask<span class="token punctuation">,</span> render_template<span class="token punctuation">,</span> request

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/register&#39;</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> request<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> render_template<span class="token punctuation">(</span><span class="token string">&#39;register.html&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">else</span><span class="token punctuation">:</span>
        user <span class="token operator">=</span> request<span class="token punctuation">.</span>form<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
        pwd <span class="token operator">=</span> request<span class="token punctuation">.</span>form<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;pwd&quot;</span><span class="token punctuation">)</span>
        gender <span class="token operator">=</span> request<span class="token punctuation">.</span>form<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;gender&quot;</span><span class="token punctuation">)</span>
        hobby_list <span class="token operator">=</span> request<span class="token punctuation">.</span>form<span class="token punctuation">.</span>getlist<span class="token punctuation">(</span><span class="token string">&quot;hobby&quot;</span><span class="token punctuation">)</span>
        city <span class="token operator">=</span> request<span class="token punctuation">.</span>form<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;city&quot;</span><span class="token punctuation">)</span>
        skill_list <span class="token operator">=</span> request<span class="token punctuation">.</span>form<span class="token punctuation">.</span>getlist<span class="token punctuation">(</span><span class="token string">&quot;skill&quot;</span><span class="token punctuation">)</span>
        more <span class="token operator">=</span> request<span class="token punctuation">.</span>form<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;more&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> pwd<span class="token punctuation">,</span> gender<span class="token punctuation">,</span> hobby_list<span class="token punctuation">,</span> city<span class="token punctuation">,</span> skill_list<span class="token punctuation">,</span> more<span class="token punctuation">)</span>
        <span class="token comment"># 将用户信息写入文件中实现注册、写入到excel中实现注册、写入数据库中实现注册</span>

        <span class="token comment"># 2.给用户再返回结果</span>
        <span class="token keyword">return</span> <span class="token string">&quot;注册成功&quot;</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h2><p>咱们网站与别人的不一样：</p><ul><li><p>别人的好看 vs 咱们的难堪。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>浏览器可以识别很多标签+数据，例如：
	&lt;h1&gt;中国&lt;/h1&gt;   						-&gt;  浏览器看见加大加粗
	&lt;span style=&#39;color:red;&#39;&gt;联通&lt;/span&gt;  -&gt;  浏览器看见字体变红色
	
如果我们能把浏览器能识别的所有的标签都学会，我们在网站就可以控制页面到底长什么样子。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Flask框架为了让咱们写标签方便，支持将字符串写入到文件里。</p></li><li><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask<span class="token punctuation">,</span>render_template

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&quot;/show/info&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># Flask内部会自动打开这个文件，并读取内容，将内容给用户返回。</span>
    <span class="token comment"># 默认：去当前项目目录的templates文件夹中找。</span>
    <span class="token keyword">return</span> render_template<span class="token punctuation">(</span><span class="token string">&quot;index.html&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,14),l=[p];function i(o,c){return s(),a("div",null,l)}const d=n(e,[["render",i],["__file","Flask.html.vue"]]),k=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Web/04.%20%E5%90%8E%E7%AB%AF/04.%20Py-Flask/Flask.html","title":"Flask","lang":"zh-CN","frontmatter":{"description":"Flask day11 前端开发 Flask安装 默认模板项目 运行 直接运行，然后终端会给你一个网站 表单处理 其他 咱们网站与别人的不一样： 别人的好看 vs 咱们的难堪。 Flask框架为了让咱们写标签方便，支持将字符串写入到文件里。","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Web/04.%20%E5%90%8E%E7%AB%AF/04.%20Py-Flask/Flask.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Flask"}],["meta",{"property":"og:description","content":"Flask day11 前端开发 Flask安装 默认模板项目 运行 直接运行，然后终端会给你一个网站 表单处理 其他 咱们网站与别人的不一样： 别人的好看 vs 咱们的难堪。 Flask框架为了让咱们写标签方便，支持将字符串写入到文件里。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Flask\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"Flask","slug":"flask","link":"#flask","children":[{"level":2,"title":"Flask安装","slug":"flask安装","link":"#flask安装","children":[]},{"level":2,"title":"运行","slug":"运行","link":"#运行","children":[]},{"level":2,"title":"表单处理","slug":"表单处理","link":"#表单处理","children":[]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.54,"words":463},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Platform/Web/04. 后端/04. Py-Flask/Flask.md","autoDesc":true}');export{d as comp,k as data};

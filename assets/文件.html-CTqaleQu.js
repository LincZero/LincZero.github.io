import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-D9NcyM5y.js";const t={},i=e(`<h1 id="文件" tabindex="-1"><a class="header-anchor" href="#文件"><span>文件</span></a></h1><p>核心：</p><ul><li>os包，及里面的File结构体，可以开关文件。详见 studygolang.com/pkgdoc</li><li>io包，io流相关，可以读写文件。</li><li>io/ioutil包，读写文件</li></ul><p>核心操作：</p><ul><li>内容操作：开 闭 写 读</li><li>整体操作：增 删 剪 拷</li></ul><h2 id="文件打开" tabindex="-1"><a class="header-anchor" href="#文件打开"><span>文件打开</span></a></h2><h3 id="os-open" tabindex="-1"><a class="header-anchor" href="#os-open"><span>os.Open</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// 原型</span>
<span class="token keyword">func</span> <span class="token function">Open</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>file <span class="token operator">*</span>File<span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>案例，见下一节</p><h3 id="os-openfile" tabindex="-1"><a class="header-anchor" href="#os-openfile"><span>os.OpenFile</span></a></h3><p>就是更多参数的 os.Open。详见：文件写入</p><h2 id="文件关闭-file-close" tabindex="-1"><a class="header-anchor" href="#文件关闭-file-close"><span>文件关闭 (File.Close)</span></a></h2><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// 原型</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>f <span class="token operator">*</span>File<span class="token punctuation">)</span> <span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>案例</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 打开文件</span>
    file<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;d:/Test.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;文件打开错误，错误:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;文件 = %v&quot;</span><span class="token punctuation">,</span> file<span class="token punctuation">)</span>	<span class="token comment">// 打印地址</span>
    
    <span class="token comment">// 操作文件</span>
    
    <span class="token comment">// 关闭文件</span>
    err2 <span class="token operator">:=</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> err2 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;文件关闭错误&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件读取" tabindex="-1"><a class="header-anchor" href="#文件读取"><span>文件读取</span></a></h2><h3 id="一次性-io-ioutil-readfile" tabindex="-1"><a class="header-anchor" href="#一次性-io-ioutil-readfile"><span>一次性 (io/ioutil.ReadFile)</span></a></h3><p>（弹幕似乎说这个函数已经废弃了）</p><p>原理：一次将整个文件读入到内存中，这种方式适用于文件不大的情况</p><p>使用：<code>io/ioutil包的 ReadFile</code> 方法</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// 原型</span>
<span class="token keyword">func</span> <span class="token function">ReadFile</span><span class="token punctuation">(</span>filename <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>案例：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;io/ioutil&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    content<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadFile</span><span class="token punctuation">(</span><span class="token string">&quot;d:/Test.txt&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;文件读取错误，错误：&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v&quot;</span><span class="token punctuation">,</span> content<span class="token punctuation">)</span>			<span class="token comment">// 这里是字节数组，而非字符方式</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v&quot;</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">)</span>	<span class="token comment">// 字符串方式</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="流式-带缓冲区-bufio-newreader" tabindex="-1"><a class="header-anchor" href="#流式-带缓冲区-bufio-newreader"><span>流式，带缓冲区 (bufio.NewReader)</span></a></h3><p>原理：按4096一次一次读取，适合读取较大的文件</p><p>使用：</p><ul><li>文件开闭 <code>os.Open、file.Close</code></li><li>创建流 <code>bufio.NewReader()</code></li><li>部分读 <code>ReadString</code></li></ul><p>案例：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;os&quot;</span>
    <span class="token string">&quot;bufio&quot;</span>
    <span class="token string">&quot;io&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 打开文件</span>
    file<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;d:/Test.txt&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;文件打开错误，错误:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 退出时 关闭文件</span>
    <span class="token keyword">defer</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment">// 创建一个流</span>
    reader <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        str<span class="token punctuation">,</span> err <span class="token operator">:=</span> reader<span class="token punctuation">.</span><span class="token function">ReadString</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">==</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span>	<span class="token comment">// 读到文件结尾</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;文件读取成功，且全部读完了&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件写入" tabindex="-1"><a class="header-anchor" href="#文件写入"><span>文件写入</span></a></h2><h3 id="流式-带缓冲区-bufio-newwriter" tabindex="-1"><a class="header-anchor" href="#流式-带缓冲区-bufio-newwriter"><span>流式，带缓冲区 (bufio.NewWriter)</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// 原型</span>
<span class="token comment">/**
 * @param name 文件路径
 * @param flag 文件打开模式，可用位与符号组合
 *   - O_RDONLY 只读
 *   - O_WRONLY 只写
 *   - O_RDWR 读写
 *   - O_APPEND 追加
 *   - O_CREATE 若不存在则创建
 *   - O_EXCL 和CREATE搭配，文件必须不存在
 *   - O_SYNC 打开文件用于同步IO
 *   - O_TRUNC 打开时清空内容 (如果可能)
 * @param perm 权限控制 (Linux/Unix系统下生效，Windows无效)
 */</span>
<span class="token keyword">func</span> <span class="token function">OpenFile</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> flag <span class="token builtin">int</span><span class="token punctuation">,</span> perm FileMode<span class="token punctuation">)</span> <span class="token punctuation">(</span>file <span class="token operator">*</span>File<span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>案例</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;os&quot;</span>
    <span class="token string">&quot;bufio&quot;</span>
    <span class="token string">&quot;io&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 打开文件</span>
    file<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">OpenFile</span><span class="token punctuation">(</span><span class="token string">&quot;d:/Test.txt&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_RDWR <span class="token operator">|</span> os<span class="token punctuation">.</span>O_APPEND <span class="token operator">|</span> os<span class="token punctuation">.</span>O_CREATE<span class="token punctuation">,</span> <span class="token number">0666</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;文件打开错误，错误:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 退出时 关闭文件</span>
    <span class="token keyword">defer</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment">// 创建一个流</span>
    writer <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewWriter</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>    
    <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">{</span>
        writer<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;你好\\n&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    writer<span class="token punctuation">.</span><span class="token function">Flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	<span class="token comment">// 流式输出要刷新数据才能真正写到文件中</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;文件写入成功，且全部完了&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),p=[i];function o(l,c){return s(),a("div",null,p)}const d=n(t,[["render",o],["__file","文件.html.vue"]]),k=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/Go/03_%E4%BA%A4%E4%BA%92/%E6%96%87%E4%BB%B6.html","title":"文件","lang":"zh-CN","frontmatter":{"description":"文件 核心： os包，及里面的File结构体，可以开关文件。详见 studygolang.com/pkgdoc io包，io流相关，可以读写文件。 io/ioutil包，读写文件 核心操作： 内容操作：开 闭 写 读 整体操作：增 删 剪 拷 文件打开 os.Open 案例，见下一节 os.OpenFile 就是更多参数的 os.Open。详见：文件写...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/Go/03_%E4%BA%A4%E4%BA%92/%E6%96%87%E4%BB%B6.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"文件"}],["meta",{"property":"og:description","content":"文件 核心： os包，及里面的File结构体，可以开关文件。详见 studygolang.com/pkgdoc io包，io流相关，可以读写文件。 io/ioutil包，读写文件 核心操作： 内容操作：开 闭 写 读 整体操作：增 删 剪 拷 文件打开 os.Open 案例，见下一节 os.OpenFile 就是更多参数的 os.Open。详见：文件写..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"文件\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"文件","slug":"文件","link":"#文件","children":[{"level":2,"title":"文件打开","slug":"文件打开","link":"#文件打开","children":[{"level":3,"title":"os.Open","slug":"os-open","link":"#os-open","children":[]},{"level":3,"title":"os.OpenFile","slug":"os-openfile","link":"#os-openfile","children":[]}]},{"level":2,"title":"文件关闭 (File.Close)","slug":"文件关闭-file-close","link":"#文件关闭-file-close","children":[]},{"level":2,"title":"文件读取","slug":"文件读取","link":"#文件读取","children":[{"level":3,"title":"一次性 (io/ioutil.ReadFile)","slug":"一次性-io-ioutil-readfile","link":"#一次性-io-ioutil-readfile","children":[]},{"level":3,"title":"流式，带缓冲区 (bufio.NewReader)","slug":"流式-带缓冲区-bufio-newreader","link":"#流式-带缓冲区-bufio-newreader","children":[]}]},{"level":2,"title":"文件写入","slug":"文件写入","link":"#文件写入","children":[{"level":3,"title":"流式，带缓冲区 (bufio.NewWriter)","slug":"流式-带缓冲区-bufio-newwriter","link":"#流式-带缓冲区-bufio-newwriter","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.17,"words":651},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/01. Language/Go/03_交互/文件.md","autoDesc":true}');export{d as comp,k as data};

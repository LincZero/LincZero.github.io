import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-D9NcyM5y.js";const t={},p=e(`<h1 id="管道" tabindex="-1"><a class="header-anchor" href="#管道"><span>管道</span></a></h1><p>（先读协程内容先）</p><h2 id="管道-channel" tabindex="-1"><a class="header-anchor" href="#管道-channel"><span>管道 (channel)</span></a></h2><h3 id="概括" tabindex="-1"><a class="header-anchor" href="#概括"><span>概括</span></a></h3><p>特性介绍：</p><ul><li><p>本质</p><ul><li><p>本质是一个数据结构：队列 (先进先出)</p></li><li><p>有类型，例如一个string只能存放string类型数据</p></li><li><p>自身线程安全，多协程访问时无需加锁，本身线程安全。与协程关系密切</p></li></ul></li><li><p>用处</p><ul><li>可作为流式IO。类似 C++ 的std::cout流那种感觉</li><li>线程安全，故可和协程配合使用</li></ul></li></ul><h3 id="声明定义、使用" tabindex="-1"><a class="header-anchor" href="#声明定义、使用"><span>声明定义、使用</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// 语法：如下。引用类型，必须初始化或make后才能写入数据</span>
<span class="token keyword">var</span> 变量名 <span class="token keyword">chan</span> 数据类型

<span class="token comment">// 示例</span>
<span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 声明定义</span>
    <span class="token keyword">var</span> intChan <span class="token keyword">chan</span> <span class="token builtin">int</span>
    intChan <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>			<span class="token comment">// 存放3个int类型的数据</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;intChan %v\\n&quot;</span><span class="token punctuation">,</span> intChane<span class="token punctuation">)</span>	<span class="token comment">// 打印地址，表示是引用类型</span>
    
    <span class="token comment">// 写</span>
    intChan <span class="token operator">&lt;-</span> <span class="token number">10</span>
    num <span class="token operator">:=</span> <span class="token number">20</span>
    <span class="token builtin">int</span> <span class="token keyword">chan</span> <span class="token operator">&lt;-</span> num
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;intChan 长%v 容量%v\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">Cap</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span><span class="token punctuation">)</span>	<span class="token comment">// 2 3</span>
    
    <span class="token comment">// 读 (先进先出的取)</span>
    num1 <span class="token operator">:=</span> <span class="token operator">&lt;-</span> intChan	<span class="token comment">// 10</span>
    num2 <span class="token operator">:=</span> <span class="token operator">&lt;-</span> intChan	<span class="token comment">// 20</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法" tabindex="-1"><a class="header-anchor" href="#方法"><span>方法</span></a></h3><h4 id="关闭管道" tabindex="-1"><a class="header-anchor" href="#关闭管道"><span>关闭管道</span></a></h4><p>关闭管道后，管道只读不可写</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// 原型</span>
<span class="token keyword">func</span> <span class="token function">close</span><span class="token punctuation">(</span>c <span class="token keyword">chan</span><span class="token operator">&lt;-</span> Type<span class="token punctuation">)</span>

<span class="token comment">// 例子</span>
<span class="token function">close</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历"><span>遍历</span></a></h4><p>管道遍历需要注意：遍历前必须先关闭管道，否则便利到最后时会出现 deadlock 错误</p><p>（猜测：关闭管道的原理应该是往管道符的末尾添加一个类似文件结尾 (EOF) 之类的标志，让遍历能自动结束）</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> intChan <span class="token keyword">chan</span> <span class="token builtin">int</span>				<span class="token comment">// 管道</span>
    intChan <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
    
    <span class="token comment">// 遍历写</span>
    <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        intChan <span class="token operator">&lt;-</span> i
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 关闭管道。遍历前必须先关闭管道，否则便利到最后时会出现 deadlock 错误</span>
    <span class="token function">close</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span>
    
    <span class="token comment">// 遍历读 (for range 版)</span>
    <span class="token keyword">for</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> intChan <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展"><span>扩展</span></a></h3><h4 id="实战-协程和管道-协同工作" tabindex="-1"><a class="header-anchor" href="#实战-协程和管道-协同工作"><span>(实战) 协程和管道 协同工作</span></a></h4><p>略。正常写就行，注意一下关闭管道和协程计数器的问题就行</p><p>有BUG：话说他这案例没有解决读结束时还没写完及关闭管道的问题啊</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;time&quot;</span>
    <span class="token string">&quot;sync&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup	<span class="token comment">// 协程计数器</span>

<span class="token comment">// 写</span>
<span class="token keyword">func</span> <span class="token function">writeData</span><span class="token punctuation">(</span>intChan <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span><span class="token number">20</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">{</span>
        intChan <span class="token operator">&lt;-</span> i
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;写入&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 管道关闭</span>
    <span class="token function">close</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 读</span>
<span class="token keyword">func</span> <span class="token function">readData</span><span class="token punctuation">(</span>intChan <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> intChan <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;读取&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
        time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    intChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>		<span class="token comment">// 管道（注意这里管道容量10比循环次数20要小，但由于边写边读没问题，若不读则会发生阻塞）</span>
    
    wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">writeData</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">readData</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span>
    wg<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="只读-只写管道" tabindex="-1"><a class="header-anchor" href="#只读-只写管道"><span>只读/只写管道</span></a></h4><p>管道可以声明成只读或只写的（应该是作为形参类型使用的，配合协程函数一个读一个写）</p><p>下面这个案例不好，用法没什么意义</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 可读可写 (默认)</span>
    <span class="token keyword">var</span> intChan1 <span class="token keyword">chan</span> <span class="token builtin">int</span>
    
    <span class="token comment">// 只写</span>
	<span class="token keyword">var</span> intChan2 <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">int</span>
    intChna2 <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
    
    <span class="token comment">// 只读</span>
    <span class="token keyword">var</span> intChan3 <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="管道的阻塞" tabindex="-1"><a class="header-anchor" href="#管道的阻塞"><span>管道的阻塞</span></a></h4><p>（<strong>这章有BUG，教程太拉了</strong>。命名是Add(2)导致死锁的原因，不关阻塞的事）</p><p>当管道只写不读，管道 (缓冲区) 可以会满，导致阻塞。 但是 写快读慢 则不会出现阻塞问题。（？？？，会吧，垃圾教程）</p><h4 id="select-case-语法" tabindex="-1"><a class="header-anchor" href="#select-case-语法"><span>select case 语法</span></a></h4><p>select功能：</p><ul><li>解决多个管道的选择问题，也叫多路复用。可以从多个管道中随机公平地选择一个执行</li><li>也可以解决阻塞问题</li></ul><p>注意项：</p><ul><li>case后面必须是io操作，不能是等值，随机去选择一个io操作</li><li>default可防止select被阻塞住，加入default</li></ul><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// int管道</span>
    intChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token operator">*</span><span class="token number">3</span><span class="token punctuation">)</span>
        intChan <span class="token operator">&lt;-</span> <span class="token number">10</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment">// string管道</span>
    stringChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span>
        stringChan <span class="token operator">&lt;-</span> <span class="token string">&quot;msbgolang&quot;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// fmt.Println(&lt;-intChan) // 取数据本身就阻塞</span>
    
    <span class="token keyword">select</span><span class="token punctuation">{</span>
        <span class="token keyword">case</span> v <span class="token operator">:=</span> <span class="token operator">&lt;-</span>intChan<span class="token punctuation">:</span>
        	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;intChan:&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
        <span class="token keyword">case</span> v <span class="token operator">:=</span> <span class="token operator">&lt;-</span>stringChan<span class="token punctuation">:</span>
	        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;intChan:&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span>
	        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;防止阻塞&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="defer-recover-机制处理错误" tabindex="-1"><a class="header-anchor" href="#defer-recover-机制处理错误"><span>defer + recover 机制处理错误</span></a></h4><p>背景：多个协程工作，避免 其中一个协程出现panic 导致程序崩溃</p><p>案例：就正常写。协程函数里加个 <code>defer func(){ err:= recover; if err != nil {...}}</code> 就行了</p>`,37),i=[p];function c(l,o){return s(),a("div",null,i)}const d=n(t,[["render",c],["__file","2_管道.html.vue"]]),k=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/Go/09_%E5%8A%9F%E8%83%BD%E5%AE%9E%E7%8E%B0%E7%B1%BB/%E8%BF%9B%E7%A8%8B%20%E7%BA%BF%E7%A8%8B%20%E5%8D%8F%E7%A8%8B/2_%E7%AE%A1%E9%81%93.html","title":"管道","lang":"zh-CN","frontmatter":{"description":"管道 （先读协程内容先） 管道 (channel) 概括 特性介绍： 本质 本质是一个数据结构：队列 (先进先出) 有类型，例如一个string只能存放string类型数据 自身线程安全，多协程访问时无需加锁，本身线程安全。与协程关系密切 用处 可作为流式IO。类似 C++ 的std::cout流那种感觉 线程安全，故可和协程配合使用 声明定义、使用 ...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/Go/09_%E5%8A%9F%E8%83%BD%E5%AE%9E%E7%8E%B0%E7%B1%BB/%E8%BF%9B%E7%A8%8B%20%E7%BA%BF%E7%A8%8B%20%E5%8D%8F%E7%A8%8B/2_%E7%AE%A1%E9%81%93.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"管道"}],["meta",{"property":"og:description","content":"管道 （先读协程内容先） 管道 (channel) 概括 特性介绍： 本质 本质是一个数据结构：队列 (先进先出) 有类型，例如一个string只能存放string类型数据 自身线程安全，多协程访问时无需加锁，本身线程安全。与协程关系密切 用处 可作为流式IO。类似 C++ 的std::cout流那种感觉 线程安全，故可和协程配合使用 声明定义、使用 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"管道\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"管道","slug":"管道","link":"#管道","children":[{"level":2,"title":"管道 (channel)","slug":"管道-channel","link":"#管道-channel","children":[{"level":3,"title":"概括","slug":"概括","link":"#概括","children":[]},{"level":3,"title":"声明定义、使用","slug":"声明定义、使用","link":"#声明定义、使用","children":[]},{"level":3,"title":"方法","slug":"方法","link":"#方法","children":[{"level":4,"title":"关闭管道","slug":"关闭管道","link":"#关闭管道","children":[]},{"level":4,"title":"遍历","slug":"遍历","link":"#遍历","children":[]}]},{"level":3,"title":"扩展","slug":"扩展","link":"#扩展","children":[{"level":4,"title":"(实战) 协程和管道 协同工作","slug":"实战-协程和管道-协同工作","link":"#实战-协程和管道-协同工作","children":[]},{"level":4,"title":"只读/只写管道","slug":"只读-只写管道","link":"#只读-只写管道","children":[]},{"level":4,"title":"管道的阻塞","slug":"管道的阻塞","link":"#管道的阻塞","children":[]},{"level":4,"title":"select case 语法","slug":"select-case-语法","link":"#select-case-语法","children":[]},{"level":4,"title":"defer + recover 机制处理错误","slug":"defer-recover-机制处理错误","link":"#defer-recover-机制处理错误","children":[]}]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.34,"words":1001},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/01. Language/Go/09_功能实现类/进程 线程 协程/2_管道.md","autoDesc":true}');export{d as comp,k as data};

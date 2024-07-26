import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-CoO7IlkE.js";const p={},e=t(`<h1 id="协程" tabindex="-1"><a class="header-anchor" href="#协程"><span>协程</span></a></h1><h2 id="协程-goroutine" tabindex="-1"><a class="header-anchor" href="#协程-goroutine"><span>协程 (Goroutine)</span></a></h2><h3 id="启动协程-go关键字" tabindex="-1"><a class="header-anchor" href="#启动协程-go关键字"><span>启动协程 (go关键字)</span></a></h3><p>语言级的并发，语法非常简单，只要调用函数 (还能是立即执行函数) 前加一个 <code>go</code> 关键词，体现了go的&quot;优雅哲学&quot;</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main 

<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;strconv&quot;</span>
    <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// 协程函数 (功能为持续输出)</span>
<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span>dur <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span>dur<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello golang + &quot;</span> <span class="token operator">+</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token comment">// 阻塞1s</span>
        tiem<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 主线程</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">go</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>	
    <span class="token function">test</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动多个协程</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main 

<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span><span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 最后输出乱序的 1 2 3 4 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="退出-等待协程-sync包-waitgroup类" tabindex="-1"><a class="header-anchor" href="#退出-等待协程-sync包-waitgroup类"><span>退出/等待协程 (sync包.WaitGroup类)</span></a></h3><p>对应 sync 包里的 WaitGroup 类。需要使用三个方法：Add、Done、Wait</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// 原型</span>

<span class="token comment">// 计数器增加</span>
<span class="token comment">// @param delta 可以是负数。向内部计数加上delta</span>
<span class="token comment">//   - 当内部计数器等于0，Wait方法阻塞等待的所有线程都会释放</span>
<span class="token comment">//   - 当内部计数器小于0，异常panic。</span>
<span class="token comment">// @detail 调用顺序：</span>
<span class="token comment">//   - 本方法一般在创建新线程或其他等待事件前调用</span>
<span class="token comment">//   - 注意Add加正数的调用应该在Wait之前，否则Wait可能只会等待很少的线程。</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>wg <span class="token operator">*</span>WaitGroup<span class="token punctuation">)</span> <span class="token function">Add</span><span class="token punctuation">(</span>delta <span class="token builtin">int</span><span class="token punctuation">)</span>	

<span class="token comment">// 计数器减少</span>
<span class="token comment">// @detail 减一WaitGroup计数器的值，应在线程的最后执行</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>wg <span class="token operator">*</span>WaitGroup<span class="token punctuation">)</span> <span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 阻塞等到WaitGroup计数器减为0</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>wg <span class="token operator">*</span>WaitGroup<span class="token punctuation">)</span> <span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>案例</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main 
<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;sync&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup	<span class="token comment">// 只定义而无需赋值</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span><span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>		<span class="token comment">// 或改写成在循环之前 wg.Add(5)，适用于知道要启动多少个协程的情况</span>
        <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
            wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	<span class="token comment">// 或改写成在函数开始 defer wg.Done()，可以防止忘记</span>
        <span class="token punctuation">}</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	<span class="token comment">// 等待子协程结束 (计数器为0) 才通过 </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="协程共享数据、锁" tabindex="-1"><a class="header-anchor" href="#协程共享数据、锁"><span>协程共享数据、锁</span></a></h3><h4 id="冲突问题" tabindex="-1"><a class="header-anchor" href="#冲突问题"><span>冲突问题</span></a></h4><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main 
<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;sync&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> totalNum <span class="token builtin">int</span>			<span class="token comment">// 共享变量</span>
<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup		<span class="token comment">// 协程计数器</span>

<span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">{</span>
        totalNum <span class="token operator">=</span> i<span class="token operator">+</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">{</span>
        totalNum <span class="token operator">=</span> i<span class="token operator">-</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    wg<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>totalNum<span class="token punctuation">)</span>	<span class="token comment">// 这个输出的取值为 [-10000, +10000] 而非0。因为加减的底层是：拷贝到寄存器 -&gt; 加法 -&gt; 拷贝回内存</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="互斥锁-sync包-mutex类" tabindex="-1"><a class="header-anchor" href="#互斥锁-sync包-mutex类"><span>互斥锁 (sync包.Mutex类)</span></a></h4><p>使用sync包的Mutex</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main 
<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;sync&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> totalNum <span class="token builtin">int</span>			<span class="token comment">// 共享变量</span>
<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup		<span class="token comment">// 协程计数器</span>
<span class="token keyword">var</span> lock sync<span class="token punctuation">.</span>Mutex			<span class="token comment">// 互斥锁</span>

<span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">{</span>
        lock<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>			<span class="token comment">// 加锁解锁</span>
        totalNum <span class="token operator">=</span> i<span class="token operator">+</span><span class="token number">1</span>
        lock<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">{</span>
        lock<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>			<span class="token comment">// 加锁解锁</span>
        totalNum <span class="token operator">=</span> i<span class="token operator">-</span><span class="token number">1</span>
        lock<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    wg<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>totalNum<span class="token punctuation">)</span>	<span class="token comment">// 这个输出为0，成功，预期输出</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="读写锁-sync包-rwmutex类" tabindex="-1"><a class="header-anchor" href="#读写锁-sync包-rwmutex类"><span>读写锁 (sync包.RWMutex类)</span></a></h4><p>读写锁性能比互斥锁高，经常用于读次数远远多于写次数的场景</p><p>读锁之间不冲突，读写同时发生可能有影响。</p><p>另外，写锁一般比读锁优先级比较高，避免写锁饥饿问题。</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main 
<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;sync&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> totalNum <span class="token builtin">int</span>			<span class="token comment">// 共享变量</span>
<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup		<span class="token comment">// 协程计数器</span>
<span class="token keyword">var</span> lock sync<span class="token punctuation">.</span>RWMutex		<span class="token comment">// 读写锁</span>

<span class="token keyword">func</span> <span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    lock<span class="token punctuation">.</span><span class="token function">RLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>			<span class="token comment">// 加锁解锁 (读)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;开始读&quot;</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;结束读&quot;</span><span class="token punctuation">)</span>
    lock<span class="token punctuation">.</span><span class="token function">RUnlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    lock<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>				<span class="token comment">// 加锁解锁 (写)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;开始写&quot;</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;结束写&quot;</span><span class="token punctuation">)</span>
    lock<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i<span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">go</span> <span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">go</span> <span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    wg<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h3><h4 id="主死从随" tabindex="-1"><a class="header-anchor" href="#主死从随"><span>主死从随</span></a></h4><p>除了协程任务完成了或手动关闭后，协程会死亡外。</p><p>“主死从随”，意思是线程死亡时，他所创建的协程也会死亡（线程有其创建协程的所有权，自动生命周期）</p>`,27),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","1_协程.html.vue"]]),r=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/Go/09_%E5%8A%9F%E8%83%BD%E5%AE%9E%E7%8E%B0%E7%B1%BB/%E8%BF%9B%E7%A8%8B%20%E7%BA%BF%E7%A8%8B%20%E5%8D%8F%E7%A8%8B/1_%E5%8D%8F%E7%A8%8B.html","title":"协程","lang":"zh-CN","frontmatter":{"description":"协程 协程 (Goroutine) 启动协程 (go关键字) 语言级的并发，语法非常简单，只要调用函数 (还能是立即执行函数) 前加一个 go 关键词，体现了go的\\"优雅哲学\\" 启动多个协程 退出/等待协程 (sync包.WaitGroup类) 对应 sync 包里的 WaitGroup 类。需要使用三个方法：Add、Done、Wait 案例 协程共享...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/Go/09_%E5%8A%9F%E8%83%BD%E5%AE%9E%E7%8E%B0%E7%B1%BB/%E8%BF%9B%E7%A8%8B%20%E7%BA%BF%E7%A8%8B%20%E5%8D%8F%E7%A8%8B/1_%E5%8D%8F%E7%A8%8B.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"协程"}],["meta",{"property":"og:description","content":"协程 协程 (Goroutine) 启动协程 (go关键字) 语言级的并发，语法非常简单，只要调用函数 (还能是立即执行函数) 前加一个 go 关键词，体现了go的\\"优雅哲学\\" 启动多个协程 退出/等待协程 (sync包.WaitGroup类) 对应 sync 包里的 WaitGroup 类。需要使用三个方法：Add、Done、Wait 案例 协程共享..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"协程\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"协程","slug":"协程","link":"#协程","children":[{"level":2,"title":"协程 (Goroutine)","slug":"协程-goroutine","link":"#协程-goroutine","children":[{"level":3,"title":"启动协程 (go关键字)","slug":"启动协程-go关键字","link":"#启动协程-go关键字","children":[]},{"level":3,"title":"退出/等待协程 (sync包.WaitGroup类)","slug":"退出-等待协程-sync包-waitgroup类","link":"#退出-等待协程-sync包-waitgroup类","children":[]},{"level":3,"title":"协程共享数据、锁","slug":"协程共享数据、锁","link":"#协程共享数据、锁","children":[{"level":4,"title":"冲突问题","slug":"冲突问题","link":"#冲突问题","children":[]},{"level":4,"title":"互斥锁 (sync包.Mutex类)","slug":"互斥锁-sync包-mutex类","link":"#互斥锁-sync包-mutex类","children":[]},{"level":4,"title":"读写锁 (sync包.RWMutex类)","slug":"读写锁-sync包-rwmutex类","link":"#读写锁-sync包-rwmutex类","children":[]}]},{"level":3,"title":"原理","slug":"原理","link":"#原理","children":[{"level":4,"title":"主死从随","slug":"主死从随","link":"#主死从随","children":[]}]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.01,"words":902},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/01. Language/Go/09_功能实现类/进程 线程 协程/1_协程.md","autoDesc":true}');export{k as comp,r as data};

import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as c,c as l,a as s,d as n,b as t,e}from"./app-DtBZtuIa.js";const i={},u=e('<h1 id="bcc" tabindex="-1"><a class="header-anchor" href="#bcc"><span>BCC</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="bcc-python-开发者教程" tabindex="-1"><a class="header-anchor" href="#bcc-python-开发者教程"><span>BCC Python 开发者教程</span></a></h1><p>本教程是关于使用 Python 界面开发BCC工具和程序。有两个部分：可观察性和网络。片段取自BCC的各种程序：请参阅它们的文件以获取许可证。</p>',4),r={href:"https://github.com/iovisor/bcc/blob/master/docs/reference_guide.md",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/iovisor/bcc/blob/master/docs/tutorial.md",target:"_blank",rel:"noopener noreferrer"},k=e(`<h2 id="可观察性" tabindex="-1"><a class="header-anchor" href="#可观察性"><span>可观察性</span></a></h2><p>本可观察性教程包含 17 节课程，列举了 46 个需要学习的内容。</p><h3 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world"><span>Hello World</span></a></h3><p>首先运行examples/hello_world.py，同时在另一个会话中运行一些命令（例如“ls”）。 它应该打印 “Hello, World!” 对于新流程。如果没有，请首先修复密件抄送：请参阅 INSTALL.md。</p><blockquote><h5 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h5></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># ./examples/hello_world.py</span>
            bash-13364 <span class="token punctuation">[</span>002<span class="token punctuation">]</span> d<span class="token punctuation">..</span>. <span class="token number">24573433.052937</span>: <span class="token builtin class-name">:</span> Hello, World<span class="token operator">!</span>
            bash-13364 <span class="token punctuation">[</span>003<span class="token punctuation">]</span> d<span class="token punctuation">..</span>. <span class="token number">24573436.642808</span>: <span class="token builtin class-name">:</span> Hello, World<span class="token operator">!</span>
<span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h5 id="python代码" tabindex="-1"><a class="header-anchor" href="#python代码"><span>python代码</span></a></h5></blockquote><p>这是 hello_world.py 的代码：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> bcc <span class="token keyword">import</span> BPF
BPF<span class="token punctuation">(</span>text<span class="token operator">=</span><span class="token string">&#39;int kprobe__sys_clone(void *ctx) { bpf_trace_printk(&quot;Hello, World!\\\\n&quot;); return 0; }&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>trace_print<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h5 id="注释说明" tabindex="-1"><a class="header-anchor" href="#注释说明"><span>注释说明</span></a></h5></blockquote><p>注释版 - 前端部分：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> bcc <span class="token keyword">import</span> BPF
BPF<span class="token punctuation">(</span>text<span class="token operator">=</span><span class="token string">&#39;...&#39;</span><span class="token punctuation">)</span>			<span class="token comment"># \`text=&#39;...&#39;\` ：这定义了一个内联的 BPF 程序。该程序是用 C 编写的</span>
	<span class="token punctuation">.</span>trace_print<span class="token punctuation">(</span><span class="token punctuation">)</span>		<span class="token comment"># 读取trace_pipe并打印输出的bcc例程</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注释版 - 内核部分：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">/**
 * @functionName 通过 kprobes 进行内核动态跟踪的快捷方式。\\
 *               如果 C 函数以 \`kprobe__\` 开头，则其余部分将被视为要检测的内核函数名称, 在本例中为 \`sys_clone()\`
 * @args ctx 有参数，但由于我们在这里不使用它们，因此我们将其转换为 \`void *\`
 */</span>
<span class="token keyword">int</span> <span class="token function">kprobe__sys_clone</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>ctx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 一个简单的内核工具，用于 printf() 到公共trace_pipe  (/sys/kernel/debug/tracing/trace_pipe)。</span>
    <span class="token comment">// 这对于一些快速示例来说是可以的，但有限制：</span>
    <span class="token comment">//     最多 3 个参数，仅限 1 %s，并且 trace_pipe 是全局共享的，因此并发程序将产生冲突的输出。</span>
    <span class="token comment">// 更好的接口是通过 BPF_PERF_OUTPUT()，稍后介绍。</span>
	<span class="token function">bpf_trace_printk</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, World!\\\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 必要的手续（如果你想知道原因，请参阅 [#139](https://github.com/iovisor/bcc/issues/139)）</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sys-sync" tabindex="-1"><a class="header-anchor" href="#sys-sync"><span>sys_sync()</span></a></h3><p>动手课：</p><p>编写一个跟踪 sys_sync() 内核函数的程序。要求：</p><ul><li>运行时打印“sys_sync() called”。通过在跟踪时在另一个会话中运行 <code>sync</code> 进行测试。 hello_world.py 程序拥有您所需的一切。</li><li>通过打印“Tracing sys_sync()... Ctrl-C to end”来改进它。</li><li>当程序第一次启动时。提示：这只是Python。</li></ul><h3 id="hello-fields-py" tabindex="-1"><a class="header-anchor" href="#hello-fields-py"><span>hello_fields.py</span></a></h3><blockquote><h5 id="使用示例-1" tabindex="-1"><a class="header-anchor" href="#使用示例-1"><span>使用示例</span></a></h5></blockquote>`,20),v={href:"https://github.com/iovisor/bcc/blob/master/examples/tracing/hello_fields.py",target:"_blank",rel:"noopener noreferrer"},m=e(`<p>分别打印了时间、命令?、进程id、信息</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># ./examples/tracing/hello_fields.py</span>
TIME<span class="token punctuation">(</span>s<span class="token punctuation">)</span>            COMM             PID    MESSAGE
<span class="token number">24585001.174885999</span> sshd             <span class="token number">1432</span>   Hello, World<span class="token operator">!</span>
<span class="token number">24585001.195710000</span> sshd             <span class="token number">15780</span>  Hello, World<span class="token operator">!</span>
<span class="token number">24585001.991976000</span> systemd-udevd    <span class="token number">484</span>    Hello, World<span class="token operator">!</span>
<span class="token number">24585002.276147000</span> <span class="token function">bash</span>             <span class="token number">15787</span>  Hello, World<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h5 id="python代码-1" tabindex="-1"><a class="header-anchor" href="#python代码-1"><span>python代码</span></a></h5></blockquote><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> bcc <span class="token keyword">import</span> BPF
<span class="token keyword">from</span> bcc<span class="token punctuation">.</span>utils <span class="token keyword">import</span> printb

<span class="token comment"># define BPF program</span>
prog <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
int hello(void *ctx) {
    bpf_trace_printk(&quot;Hello, World!\\\\n&quot;);
    return 0;
}
&quot;&quot;&quot;</span>

<span class="token comment"># load BPF program</span>
b <span class="token operator">=</span> BPF<span class="token punctuation">(</span>text<span class="token operator">=</span>prog<span class="token punctuation">)</span>
b<span class="token punctuation">.</span>attach_kprobe<span class="token punctuation">(</span>event<span class="token operator">=</span>b<span class="token punctuation">.</span>get_syscall_fnname<span class="token punctuation">(</span><span class="token string">&quot;clone&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> fn_name<span class="token operator">=</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># header</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;%-18s %-16s %-6s %s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token string">&quot;TIME(s)&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;COMM&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;PID&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;MESSAGE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># format output</span>
<span class="token keyword">while</span> <span class="token number">1</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token punctuation">(</span>task<span class="token punctuation">,</span> pid<span class="token punctuation">,</span> cpu<span class="token punctuation">,</span> flags<span class="token punctuation">,</span> ts<span class="token punctuation">,</span> msg<span class="token punctuation">)</span> <span class="token operator">=</span> b<span class="token punctuation">.</span>trace_fields<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> ValueError<span class="token punctuation">:</span>
        <span class="token keyword">continue</span>
    <span class="token keyword">except</span> KeyboardInterrupt<span class="token punctuation">:</span>
        exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
    printb<span class="token punctuation">(</span><span class="token string">b&quot;%-18.9f %-16s %-6d %s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>ts<span class="token punctuation">,</span> task<span class="token punctuation">,</span> pid<span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h5 id="注释说明-1" tabindex="-1"><a class="header-anchor" href="#注释说明-1"><span>注释说明</span></a></h5></blockquote><p>注释版 - 前端部分：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> bcc <span class="token keyword">import</span> BPF
<span class="token keyword">from</span> bcc<span class="token punctuation">.</span>utils <span class="token keyword">import</span> printb

<span class="token comment"># 定义BPF程序</span>
<span class="token comment"># 这次我们将C程序声明为变量，稍后再引用它。如果您想根据命令行参数添加一些字符串替换，这非常有用。</span>
prog <span class="token operator">=</span> <span class="token string">&#39;...&#39;</span>

<span class="token comment"># 加载BPF程序</span>
b <span class="token operator">=</span> BPF<span class="token punctuation">(</span>text<span class="token operator">=</span>prog<span class="token punctuation">)</span>
<span class="token comment"># attack_kprobe 为内核克隆系统调用函数创建一个kprobe，它将执行我们定义的hello()函数。</span>
<span class="token comment"># 您可以多次调用 attach_kprobe()，并将 C 函数附加到多个内核函数。</span>
b<span class="token punctuation">.</span>attach_kprobe<span class="token punctuation">(</span>
    event<span class="token operator">=</span>b<span class="token punctuation">.</span>get_syscall_fnname<span class="token punctuation">(</span><span class="token string">&quot;clone&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    fn_name<span class="token operator">=</span><span class="token string">&quot;hello&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment"># 头部打印：时间、命令、进程id、信息</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;%-18s %-16s %-6s %s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token string">&quot;TIME(s)&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;COMM&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;PID&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;MESSAGE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 格式化输出</span>
<span class="token keyword">while</span> <span class="token number">1</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token comment"># b.trace_fields()：从trace_pipe 返回一组固定的字段</span>
        <span class="token comment"># 其与 trace_print() 类似，这对于黑客攻击来说很方便，但对于真正的工具，我们应该切换到BPF_PERF_OUTPUT()</span>
        <span class="token punctuation">(</span>task<span class="token punctuation">,</span> pid<span class="token punctuation">,</span> cpu<span class="token punctuation">,</span> flags<span class="token punctuation">,</span> ts<span class="token punctuation">,</span> msg<span class="token punctuation">)</span> <span class="token operator">=</span> b<span class="token punctuation">.</span>trace_fields<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> ValueError<span class="token punctuation">:</span>
        <span class="token keyword">continue</span>
    <span class="token keyword">except</span> KeyboardInterrupt<span class="token punctuation">:</span>
        exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
    printb<span class="token punctuation">(</span><span class="token string">b&quot;%-18.9f %-16s %-6d %s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>ts<span class="token punctuation">,</span> task<span class="token punctuation">,</span> pid<span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 格式化输出</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注释版 - 内核部分：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">/**
 * 现在我们只是声明一个 C 函数，而不是 \`kprobe__\` 快捷方式。我们稍后会提到这一点。
 *
 * - 探测器程序：BPF 程序中声明的所有 C 函数都希望在探测器上执行，因此它们都需要将 \`pt_reg* ctx\` 作为第一个参数。
 * - 非探测程序：如果您需要定义一些不会在探测器上执行的辅助函数，则需要将它们定义为 \`static inline\` 以便编译器内联。有时您还需要为其添加 \`_always_inline\` 函数属性。
 */</span>
<span class="token keyword">int</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>ctx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">bpf_trace_printk</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, World!\\\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sync-timing-py" tabindex="-1"><a class="header-anchor" href="#sync-timing-py"><span>sync_timing.py</span></a></h3><blockquote><h5 id="使用示例-2" tabindex="-1"><a class="header-anchor" href="#使用示例-2"><span>使用示例</span></a></h5></blockquote><blockquote><p>背景：</p><p>还记得系统管理员在 <code>reboot</code> 之前在慢速控制台上键入 <code>sync</code> 三次以给出第一个异步同步完成时间的日子吗？然后有人认为 <code>sync;sync;sync</code> 很聪明，将它们全部运行在一条线上，尽管违背了最初的目的，但这成为了行业惯例！然后sync变成了同步，所以更多的原因是它是愚蠢的。</p><p>上面这机翻有点怪，可能这里也需要一些背景知识，补充一下：</p><ul><li><code>sync</code>命令：<code>sync</code> 是一个Linux和类Unix系统中的命令，用于将数据从内存缓冲区同步到硬盘上。这样，即使在突然断电的情况下，操作系统也能尽可能保证数据的完整性。</li><li>慢速控制台：在这里，较慢的控制台指的是以前计算机硬件性能相对较差的时代</li><li>重复输入是次：在一个较慢的控制台上输入<code>sync</code>命令三次，然后再输入<code>reboot</code>。这样做是为了确保第一个异步的同步操作有足够的时间完成。</li><li>sync同步执行：最初，<code>sync</code> 命令是异步执行的，意味着在输入<code>sync</code>命令后，系统将继续执行其他任务，同时让数据从内存缓冲区同步到硬盘。但随着技术发展，<code>sync</code>命令变成了同步执行，即在同步完成之前，系统不会执行其他任务。因此，现如今，在执行<code>reboot</code>之前，不再需要多次输入<code>sync</code>命令来确保同步完成，输入一次就足够了。</li><li>大致意思：随着时间的推移，计算机性能加强，<code>sync</code>命令变得可以同步执行，这使得这种多次输入的做法变得更加荒谬、过时了。</li></ul></blockquote><p>以下示例对 <code>do_sync</code> 函数的调用速度进行计时，如果最近调用该函数的时间超过一秒，则打印输出。 在另一个终端执行 <code>sync;sync;sync</code>，运行sync_timing.py的终端将打印第二次和第三次同步的输出：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ ./examples/tracing/sync_timing.py
Tracing <span class="token keyword">for</span> quick <span class="token function">sync</span><span class="token string">&#39;s... Ctrl-C to end
At time 0.00 s: multiple syncs detected, last 95 ms ago
At time 0.10 s: multiple syncs detected, last 96 ms ago

# 笔记者：上面是他那里的demo的数据，我电脑这里更快
$ ./sync_timing.py
Tracing for quick sync&#39;</span>s<span class="token punctuation">..</span>. Ctrl-C to end
At <span class="token function">time</span> <span class="token number">0.00</span> s: multiple syncs detected, last <span class="token number">2</span> ms ago
At <span class="token function">time</span> <span class="token number">0.00</span> s: multiple syncs detected, last <span class="token number">1</span> ms ago
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h5 id="python代码-2" tabindex="-1"><a class="header-anchor" href="#python代码-2"><span>python代码</span></a></h5></blockquote>`,15),b={href:"https://github.com/iovisor/bcc/blob/master/examples/tracing/sync_timing.py",target:"_blank",rel:"noopener noreferrer"},h=e(`<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> __future__ <span class="token keyword">import</span> print_function
<span class="token keyword">from</span> bcc <span class="token keyword">import</span> BPF
<span class="token keyword">from</span> bcc<span class="token punctuation">.</span>utils <span class="token keyword">import</span> printb

<span class="token comment"># load BPF program</span>
b <span class="token operator">=</span> BPF<span class="token punctuation">(</span>text<span class="token operator">=</span><span class="token triple-quoted-string string">&quot;&quot;&quot;
#include &lt;uapi/linux/ptrace.h&gt;

BPF_HASH(last);

int do_trace(struct pt_regs *ctx) {
    u64 ts, *tsp, delta, key = 0;

    // attempt to read stored timestamp
    tsp = last.lookup(&amp;key);
    if (tsp != NULL) {
        delta = bpf_ktime_get_ns() - *tsp;
        if (delta &lt; 1000000000) {
            // output if time is less than 1 second
            bpf_trace_printk(&quot;%d\\\\n&quot;, delta / 1000000);
        }
        last.delete(&amp;key);
    }

    // update stored timestamp
    ts = bpf_ktime_get_ns();
    last.update(&amp;key, &amp;ts);
    return 0;
}
&quot;&quot;&quot;</span><span class="token punctuation">)</span>

b<span class="token punctuation">.</span>attach_kprobe<span class="token punctuation">(</span>event<span class="token operator">=</span>b<span class="token punctuation">.</span>get_syscall_fnname<span class="token punctuation">(</span><span class="token string">&quot;sync&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> fn_name<span class="token operator">=</span><span class="token string">&quot;do_trace&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Tracing for quick sync&#39;s... Ctrl-C to end&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># format output</span>
start <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> <span class="token number">1</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token punctuation">(</span>task<span class="token punctuation">,</span> pid<span class="token punctuation">,</span> cpu<span class="token punctuation">,</span> flags<span class="token punctuation">,</span> ts<span class="token punctuation">,</span> ms<span class="token punctuation">)</span> <span class="token operator">=</span> b<span class="token punctuation">.</span>trace_fields<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> start <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            start <span class="token operator">=</span> ts
        ts <span class="token operator">=</span> ts <span class="token operator">-</span> start
        printb<span class="token punctuation">(</span><span class="token string">b&quot;At time %.2f s: multiple syncs detected, last %s ms ago&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>ts<span class="token punctuation">,</span> ms<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> KeyboardInterrupt<span class="token punctuation">:</span>
        exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h5 id="注释说明-2" tabindex="-1"><a class="header-anchor" href="#注释说明-2"><span>注释说明</span></a></h5></blockquote><p>python部分：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> __future__ <span class="token keyword">import</span> print_function
<span class="token keyword">from</span> bcc <span class="token keyword">import</span> BPF
<span class="token keyword">from</span> bcc<span class="token punctuation">.</span>utils <span class="token keyword">import</span> printb

<span class="token comment"># 加载BPF程序</span>
b <span class="token operator">=</span> BPF<span class="token punctuation">(</span>text<span class="token operator">=</span><span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span>

b<span class="token punctuation">.</span>attach_kprobe<span class="token punctuation">(</span>event<span class="token operator">=</span>b<span class="token punctuation">.</span>get_syscall_fnname<span class="token punctuation">(</span><span class="token string">&quot;sync&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> fn_name<span class="token operator">=</span><span class="token string">&quot;do_trace&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;跟踪快速sync命令 ... 按Ctrl-C结束追踪&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 格式化输出</span>
start <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> <span class="token number">1</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token punctuation">(</span>task<span class="token punctuation">,</span> pid<span class="token punctuation">,</span> cpu<span class="token punctuation">,</span> flags<span class="token punctuation">,</span> ts<span class="token punctuation">,</span> ms<span class="token punctuation">)</span> <span class="token operator">=</span> b<span class="token punctuation">.</span>trace_fields<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> start <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            start <span class="token operator">=</span> ts
        ts <span class="token operator">=</span> ts <span class="token operator">-</span> start
        printb<span class="token punctuation">(</span><span class="token string">b&quot;在时间 %.2f s: 检测到多个sync命令, 上一次在 %s ms 前&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>ts<span class="token punctuation">,</span> ms<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> KeyboardInterrupt<span class="token punctuation">:</span>
        exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>BPF C 部分：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;uapi/linux/ptrace.h&gt;</span></span>

<span class="token function">BPF_HASH</span><span class="token punctuation">(</span>last<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建一个 BPF 映射对象，它是一个哈希（关联数组），称为“last”。我们没有指定任何进一步的参数，因此它默认为 u64 的键和值类型</span>

<span class="token keyword">int</span> <span class="token function">do_trace</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">pt_regs</span> <span class="token operator">*</span>ctx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    u64 ts<span class="token punctuation">,</span> <span class="token operator">*</span>tsp<span class="token punctuation">,</span> delta<span class="token punctuation">,</span> key <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// key=0：我们只会在此哈希中存储一个键/值对，其中键被硬连线为零</span>

    <span class="token comment">// 尝试读取存储的时间戳</span>
    tsp <span class="token operator">=</span> last<span class="token punctuation">.</span><span class="token function">lookup</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在哈希中查找键，如果存在则返回指向其值的指针，否则返回 NULL。我们将密钥作为地址传递给指针</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>tsp <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 验证程序要求必须检查从映射查找派生的指针值是否为空值，然后才能取消引用和使用它们</span>
        delta <span class="token operator">=</span> <span class="token function">bpf_ktime_get_ns</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token operator">*</span>tsp<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>delta <span class="token operator">&lt;</span> <span class="token number">1000000000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 当时间小于1秒时输出。这里是为了打印三次连续sync命令的两次间隔时间</span>
            <span class="token function">bpf_trace_printk</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\\\n&quot;</span><span class="token punctuation">,</span> delta <span class="token operator">/</span> <span class="token number">1000000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        last<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 从哈希中删除密钥。由于 \`.update()\` 中的内核错误（在 4.8.10 中已修复），目前需要这样做</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 更新存储的时间戳</span>
    ts <span class="token operator">=</span> <span class="token function">bpf_ktime_get_ns</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回以纳秒为单位的时间</span>
    last<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>key<span class="token punctuation">,</span> <span class="token operator">&amp;</span>ts<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将第二个参数中的值与键关联，覆盖任何先前的值。这记录了时间戳</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sync-count-py" tabindex="-1"><a class="header-anchor" href="#sync-count-py"><span>sync_count.py</span></a></h3><p>实践课，要求：</p><ol><li>修改sync_timing.py程序（之前的课程）以存储所有内核同步系统调用（快的和慢的）的计数，并将其与输出一起打印。</li><li>通过向现有哈希添加新的键索引，可以在 BPF 程序中记录此计数。</li></ol><h3 id="disksnoop-py" tabindex="-1"><a class="header-anchor" href="#disksnoop-py"><span>disksnoop.py</span></a></h3><blockquote><h5 id="使用示例-3" tabindex="-1"><a class="header-anchor" href="#使用示例-3"><span>使用示例</span></a></h5></blockquote>`,11),y={href:"https://github.com/iovisor/bcc/blob/master/examples/tracing/disksnoop.py",target:"_blank",rel:"noopener noreferrer"},_=e(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ ./disksnoop.py
TIME<span class="token punctuation">(</span>s<span class="token punctuation">)</span>            T  BYTES    LAT<span class="token punctuation">(</span>ms<span class="token punctuation">)</span>
<span class="token number">16458043.436012</span>    W  <span class="token number">4096</span>        <span class="token number">3.13</span>
<span class="token number">16458043.437326</span>    W  <span class="token number">4096</span>        <span class="token number">4.44</span>
<span class="token number">16458044.126545</span>    R  <span class="token number">4096</span>       <span class="token number">42.82</span>
<span class="token number">16458044.129872</span>    R  <span class="token number">4096</span>        <span class="token number">3.24</span>
<span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外：我这里的环境有个BUG：运行该BCC程序出错，运行该路径下的其他python bcc程序则是正常的。这里另外提供一下这个bug的修复：</p><blockquote><p>BUG报错：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ python ./disksnoop.py
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
  File <span class="token string">&quot;./disksnoop.py&quot;</span>, line <span class="token number">46</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
    <span class="token keyword">if</span> BPF.get_kprobe_functions<span class="token punctuation">(</span>b<span class="token string">&#39;blk_start_request&#39;</span><span class="token punctuation">)</span>:
  File <span class="token string">&quot;/usr/lib/python3/dist-packages/bcc-0.28.0+18b00a90-py3.8.egg/bcc/__init__.py&quot;</span>, line <span class="token number">698</span>, <span class="token keyword">in</span> get_kprobe_functions
  File <span class="token string">&quot;/usr/lib/python3/dist-packages/bcc-0.28.0+18b00a90-py3.8.egg/bcc/__init__.py&quot;</span>, line <span class="token number">694</span>, <span class="token keyword">in</span> get_kprobe_functions
FileNotFoundError: <span class="token punctuation">[</span>Errno <span class="token number">2</span><span class="token punctuation">]</span> No such <span class="token function">file</span> or directory: <span class="token string">&#39;/sys/kernel/debug/kprobes/blacklist&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">nano</span> /etc/fstab <span class="token comment"># 确保您的系统已经加载了debugfs。可以通过在/etc/fstab文件中搜索debugfs来检查。如果没有，则需要添加以下行到/etc/fstab：</span>
debugfs /sys/kernel/debug debugfs defaults <span class="token number">0</span> <span class="token number">0</span>
$ <span class="token function">mount</span> <span class="token parameter variable">-a</span> <span class="token comment"># 然后，加载debugfs</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><blockquote><h5 id="python片段" tabindex="-1"><a class="header-anchor" href="#python片段"><span>python片段</span></a></h5></blockquote><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>
REQ_WRITE <span class="token operator">=</span> <span class="token number">1</span>		<span class="token comment"># from include/linux/blk_types.h</span>

<span class="token comment"># load BPF program</span>
b <span class="token operator">=</span> BPF<span class="token punctuation">(</span>text<span class="token operator">=</span><span class="token triple-quoted-string string">&quot;&quot;&quot;
#include &lt;uapi/linux/ptrace.h&gt;
#include &lt;linux/blk-mq.h&gt;

BPF_HASH(start, struct request *);

void trace_start(struct pt_regs *ctx, struct request *req) {
	// stash start timestamp by request ptr
	u64 ts = bpf_ktime_get_ns();

	start.update(&amp;req, &amp;ts);
}

void trace_completion(struct pt_regs *ctx, struct request *req) {
	u64 *tsp, delta;

	tsp = start.lookup(&amp;req);
	if (tsp != 0) {
		delta = bpf_ktime_get_ns() - *tsp;
		bpf_trace_printk(&quot;%d %x %d\\\\n&quot;, req-&gt;__data_len,
		    req-&gt;cmd_flags, delta / 1000);
		start.delete(&amp;req);
	}
}
&quot;&quot;&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> BPF<span class="token punctuation">.</span>get_kprobe_functions<span class="token punctuation">(</span><span class="token string">b&#39;blk_start_request&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        b<span class="token punctuation">.</span>attach_kprobe<span class="token punctuation">(</span>event<span class="token operator">=</span><span class="token string">&quot;blk_start_request&quot;</span><span class="token punctuation">,</span> fn_name<span class="token operator">=</span><span class="token string">&quot;trace_start&quot;</span><span class="token punctuation">)</span>
b<span class="token punctuation">.</span>attach_kprobe<span class="token punctuation">(</span>event<span class="token operator">=</span><span class="token string">&quot;blk_mq_start_request&quot;</span><span class="token punctuation">,</span> fn_name<span class="token operator">=</span><span class="token string">&quot;trace_start&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> BPF<span class="token punctuation">.</span>get_kprobe_functions<span class="token punctuation">(</span><span class="token string">b&#39;__blk_account_io_done&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    b<span class="token punctuation">.</span>attach_kprobe<span class="token punctuation">(</span>event<span class="token operator">=</span><span class="token string">&quot;__blk_account_io_done&quot;</span><span class="token punctuation">,</span> fn_name<span class="token operator">=</span><span class="token string">&quot;trace_completion&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    b<span class="token punctuation">.</span>attach_kprobe<span class="token punctuation">(</span>event<span class="token operator">=</span><span class="token string">&quot;blk_account_io_done&quot;</span><span class="token punctuation">,</span> fn_name<span class="token operator">=</span><span class="token string">&quot;trace_completion&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h5 id="注释说明-3" tabindex="-1"><a class="header-anchor" href="#注释说明-3"><span>注释说明</span></a></h5></blockquote><p>python代码</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>
<span class="token comment"># 我们在 Python 程序中定义一个 \`内核常量\`，因为稍后我们将在那里使用它。</span>
<span class="token comment"># 如果我们在 BPF 程序中使用 REQ_WRITE，它应该可以与适当的 \`#includes\` 一起工作（无需定义）。</span>
REQ_WRITE <span class="token operator">=</span> <span class="token number">1</span>		<span class="token comment"># from include/linux/blk_types.h</span>

<span class="token comment"># 加载BPF程序</span>
b <span class="token operator">=</span> BPF<span class="token punctuation">(</span>text<span class="token operator">=</span><span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># 将BPF程序挂载到多个位置上</span>
<span class="token keyword">if</span> BPF<span class="token punctuation">.</span>get_kprobe_functions<span class="token punctuation">(</span><span class="token string">b&#39;blk_start_request&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        b<span class="token punctuation">.</span>attach_kprobe<span class="token punctuation">(</span>event<span class="token operator">=</span><span class="token string">&quot;blk_start_request&quot;</span><span class="token punctuation">,</span> fn_name<span class="token operator">=</span><span class="token string">&quot;trace_start&quot;</span><span class="token punctuation">)</span>
b<span class="token punctuation">.</span>attach_kprobe<span class="token punctuation">(</span>event<span class="token operator">=</span><span class="token string">&quot;blk_mq_start_request&quot;</span><span class="token punctuation">,</span> fn_name<span class="token operator">=</span><span class="token string">&quot;trace_start&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> BPF<span class="token punctuation">.</span>get_kprobe_functions<span class="token punctuation">(</span><span class="token string">b&#39;__blk_account_io_done&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    b<span class="token punctuation">.</span>attach_kprobe<span class="token punctuation">(</span>event<span class="token operator">=</span><span class="token string">&quot;__blk_account_io_done&quot;</span><span class="token punctuation">,</span> fn_name<span class="token operator">=</span><span class="token string">&quot;trace_completion&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    b<span class="token punctuation">.</span>attach_kprobe<span class="token punctuation">(</span>event<span class="token operator">=</span><span class="token string">&quot;blk_account_io_done&quot;</span><span class="token punctuation">,</span> fn_name<span class="token operator">=</span><span class="token string">&quot;trace_completion&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>BPF C 代码</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;uapi/linux/ptrace.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;linux/blk-mq.h&gt;</span></span>

<span class="token function">BPF_HASH</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> <span class="token keyword">struct</span> <span class="token class-name">request</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * 此函数稍后将附加到 kprobes。 kprobe 函数的参数是 \`struct pt_regs *ctx\` ，用于寄存器和 BPF 上下文.
 *
 * @param 然后是函数的实际参数。我们将其附加到 blk_start_request()。其中第一个参数是 \`struct request *\`
 */</span>
<span class="token keyword">void</span> <span class="token function">trace_start</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">pt_regs</span> <span class="token operator">*</span>ctx<span class="token punctuation">,</span> <span class="token keyword">struct</span> <span class="token class-name">request</span> <span class="token operator">*</span>req<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 通过请求PTR存储开始时间戳</span>
	u64 ts <span class="token operator">=</span> <span class="token function">bpf_ktime_get_ns</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">/// 我们使用指向请求结构的指针作为哈希中的键。神奇吧，这在追踪中很常见</span>
    <span class="token comment">/// 事实证明，指向结构的指针是很好的键，因为它们是唯一的：两个结构不能具有相同的指针地址（只要小心它何时被释放和重用即可）</span>
    <span class="token comment">/// </span>
    <span class="token comment">/// 因此，我们真正要做的是用我们自己的时间戳标记描述磁盘 I/O  的请求结构，以便我们可以对其进行计时。</span>
    <span class="token comment">/// 有两个常用键用于存储时间戳：指向结构的指针和线程 ID（用于计时函数条目返回）</span>
	start<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>req<span class="token punctuation">,</span> <span class="token operator">&amp;</span>ts<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">trace_completion</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">pt_regs</span> <span class="token operator">*</span>ctx<span class="token punctuation">,</span> <span class="token keyword">struct</span> <span class="token class-name">request</span> <span class="token operator">*</span>req<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	u64 <span class="token operator">*</span>tsp<span class="token punctuation">,</span> delta<span class="token punctuation">;</span>

	tsp <span class="token operator">=</span> start<span class="token punctuation">.</span><span class="token function">lookup</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>req<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>tsp <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		delta <span class="token operator">=</span> <span class="token function">bpf_ktime_get_ns</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token operator">*</span>tsp<span class="token punctuation">;</span>
		<span class="token function">bpf_trace_printk</span><span class="token punctuation">(</span>
            <span class="token string">&quot;%d %x %d\\\\n&quot;</span><span class="token punctuation">,</span> 
            <span class="token comment">/// req-&gt;__data_len：我们取消引用 \`struct request\` 的成员。请参阅内核源代码中的定义以了解其中的成员。</span>
            <span class="token comment">/// bcc 实际上将这些表达式重写为一系列 \`bpf_probe_read_kernel()\` 调用。有时 bcc 无法处理复杂的取消引用，您需要直接调用 \`bpf_probe_read_kernel()\`</span>
            req<span class="token operator">-&gt;</span>__data_len<span class="token punctuation">,</span>
		    req<span class="token operator">-&gt;</span>cmd_flags<span class="token punctuation">,</span> 
            delta <span class="token operator">/</span> <span class="token number">1000</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
		start<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>req<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是一个非常有趣的程序，如果您能够理解所有代码，您就会理解许多重要的基础知识。</p><p>我们仍在使用 bpf_trace_printk() hack，下一节让我们解决这个问题，使用 <code>BPF_PERF_OUTPUT()</code> 接口。</p><h3 id="hello-perf-output-py" tabindex="-1"><a class="header-anchor" href="#hello-perf-output-py"><span>hello_perf_output.py</span></a></h3><blockquote><h5 id="使用示例-4" tabindex="-1"><a class="header-anchor" href="#使用示例-4"><span>使用示例</span></a></h5></blockquote><p>让我们最终停止使用 bpf_trace_printk() 并使用正确的 BPF_PERF_OUTPUT() 接口。这也意味着我们将停止获取免费的 trace_field() 成员（例如 PID 和时间戳），并且需要直接获取它们。在另一个会话中运行命令时的示例输出：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># ./hello_perf_output.py</span>
TIME<span class="token punctuation">(</span>s<span class="token punctuation">)</span>            COMM             PID    MESSAGE
<span class="token number">0.000000000</span>        <span class="token function">bash</span>             <span class="token number">22986</span>  Hello, perf_output<span class="token operator">!</span>
<span class="token number">0.021080275</span>        systemd-udevd    <span class="token number">484</span>    Hello, perf_output<span class="token operator">!</span>
<span class="token number">0.021359520</span>        systemd-udevd    <span class="token number">484</span>    Hello, perf_output<span class="token operator">!</span>
<span class="token number">0.021590610</span>        systemd-udevd    <span class="token number">484</span>    Hello, perf_output<span class="token operator">!</span>
<span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h5 id="python片段-1" tabindex="-1"><a class="header-anchor" href="#python片段-1"><span>python片段</span></a></h5></blockquote>`,17),g={href:"https://github.com/iovisor/bcc/blob/master/examples/tracing/hello_perf_output.py",target:"_blank",rel:"noopener noreferrer"},f=e(`<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> bcc <span class="token keyword">import</span> BPF

<span class="token comment"># define BPF program</span>
prog <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
#include &lt;linux/sched.h&gt;

// define output data structure in C
struct data_t {
    u32 pid;
    u64 ts;
    char comm[TASK_COMM_LEN];
};
BPF_PERF_OUTPUT(events);

int hello(struct pt_regs *ctx) {
    struct data_t data = {};

    data.pid = bpf_get_current_pid_tgid();
    data.ts = bpf_ktime_get_ns();
    bpf_get_current_comm(&amp;data.comm, sizeof(data.comm));

    events.perf_submit(ctx, &amp;data, sizeof(data));

    return 0;
}
&quot;&quot;&quot;</span>

<span class="token comment"># load BPF program</span>
b <span class="token operator">=</span> BPF<span class="token punctuation">(</span>text<span class="token operator">=</span>prog<span class="token punctuation">)</span>
b<span class="token punctuation">.</span>attach_kprobe<span class="token punctuation">(</span>event<span class="token operator">=</span>b<span class="token punctuation">.</span>get_syscall_fnname<span class="token punctuation">(</span><span class="token string">&quot;clone&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> fn_name<span class="token operator">=</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># header</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;%-18s %-16s %-6s %s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token string">&quot;TIME(s)&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;COMM&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;PID&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;MESSAGE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># process event</span>
start <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">def</span> <span class="token function">print_event</span><span class="token punctuation">(</span>cpu<span class="token punctuation">,</span> data<span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> start
    event <span class="token operator">=</span> b<span class="token punctuation">[</span><span class="token string">&quot;events&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>event<span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token keyword">if</span> start <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            start <span class="token operator">=</span> event<span class="token punctuation">.</span>ts
    time_s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token builtin">float</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>ts <span class="token operator">-</span> start<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000000000</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;%-18.9f %-16s %-6d %s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>time_s<span class="token punctuation">,</span> event<span class="token punctuation">.</span>comm<span class="token punctuation">,</span> event<span class="token punctuation">.</span>pid<span class="token punctuation">,</span>
        <span class="token string">&quot;Hello, perf_output!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># loop with callback to print_event</span>
b<span class="token punctuation">[</span><span class="token string">&quot;events&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>open_perf_buffer<span class="token punctuation">(</span>print_event<span class="token punctuation">)</span>
<span class="token keyword">while</span> <span class="token number">1</span><span class="token punctuation">:</span>
    b<span class="token punctuation">.</span>perf_buffer_poll<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h5 id="注释说明-4" tabindex="-1"><a class="header-anchor" href="#注释说明-4"><span>注释说明</span></a></h5></blockquote><p>python代码</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> bcc <span class="token keyword">import</span> BPF

<span class="token comment"># 定义BPF程序</span>
prog <span class="token operator">=</span> <span class="token string">&quot;...&quot;</span>

<span class="token comment"># 加载BPF程序</span>
b <span class="token operator">=</span> BPF<span class="token punctuation">(</span>text<span class="token operator">=</span>prog<span class="token punctuation">)</span>
b<span class="token punctuation">.</span>attach_kprobe<span class="token punctuation">(</span>event<span class="token operator">=</span>b<span class="token punctuation">.</span>get_syscall_fnname<span class="token punctuation">(</span><span class="token string">&quot;clone&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> fn_name<span class="token operator">=</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 打印表格头</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;%-18s %-16s %-6s %s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token string">&quot;TIME(s)&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;COMM&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;PID&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;MESSAGE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 程序事件</span>
start <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">def</span> <span class="token function">print_event</span><span class="token punctuation">(</span>cpu<span class="token punctuation">,</span> data<span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment"># 定义一个 Python 函数，用于处理来自 \`events\` 流的读取事件</span>
    <span class="token keyword">global</span> start
    event <span class="token operator">=</span> b<span class="token punctuation">[</span><span class="token string">&quot;events&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>event<span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token comment"># 现在以 Python 对象的形式获取事件，从 C 声明自动生成</span>
    <span class="token keyword">if</span> start <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
    	start <span class="token operator">=</span> event<span class="token punctuation">.</span>ts
    time_s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token builtin">float</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>ts <span class="token operator">-</span> start<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000000000</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;%-18.9f %-16s %-6d %s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>time_s<span class="token punctuation">,</span> event<span class="token punctuation">.</span>comm<span class="token punctuation">,</span> event<span class="token punctuation">.</span>pid<span class="token punctuation">,</span>
        <span class="token string">&quot;Hello, perf_output!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 循环回调函数来打印事件</span>
b<span class="token punctuation">[</span><span class="token string">&quot;events&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>open_perf_buffer<span class="token punctuation">(</span>print_event<span class="token punctuation">)</span> <span class="token comment"># 将 Python \`print_event\` 函数与 \`events\` 流关联</span>
<span class="token keyword">while</span> <span class="token number">1</span><span class="token punctuation">:</span>
    b<span class="token punctuation">.</span>perf_buffer_poll<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 阻塞等待事件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>BPF C 代码</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;linux/sched.h&gt;</span></span>

<span class="token comment">// 用C定义输出数据结构。这定义了我们将用来将数据从内核传递到用户空间的 C 结构体</span>
<span class="token keyword">struct</span> <span class="token class-name">data_t</span> <span class="token punctuation">{</span>
    u32 pid<span class="token punctuation">;</span>
    u64 ts<span class="token punctuation">;</span>
    <span class="token keyword">char</span> comm<span class="token punctuation">[</span>TASK_COMM_LEN<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">BPF_PERF_OUTPUT</span><span class="token punctuation">(</span>events<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这将我们的输出通道命名为 \`events\`。这里相较于之前的代码相比，使用了新的更安全和可靠的输出接口</span>

<span class="token keyword">int</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">pt_regs</span> <span class="token operator">*</span>ctx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">data_t</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 创建一个空的 data_t 结构，然后我们将填充该结构</span>

    <span class="token comment">/// 内核和用户上的 \`ID\` 和 \`UID\` 的概念有所不同</span>
    <span class="token comment">///     返回低32位的进程 ID（PID, 内核视图的PID = 用户空间中的线程ID），以及高32位的线程组ID（TGID，内核TGID = 用户空间的PID）</span>
    <span class="token comment">///     通过直接将其设置为u32，我们丢弃了高32位</span>
    <span class="token comment">///</span>
    <span class="token comment">/// 您应该提供 PID 还是 TGID ?</span>
    <span class="token comment">///     对于多线程应用程序，TGID将是相同的，因此您需要PID来区分它们（如果您想要的话）。这也是最终用户的期望问题。</span>
    data<span class="token punctuation">.</span>pid <span class="token operator">=</span> <span class="token function">bpf_get_current_pid_tgid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    data<span class="token punctuation">.</span>ts <span class="token operator">=</span> <span class="token function">bpf_ktime_get_ns</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">bpf_get_current_comm</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>data<span class="token punctuation">.</span>comm<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>comm<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 用当前进程名称填充第一个参数地址</span>

    events<span class="token punctuation">.</span><span class="token function">perf_submit</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token operator">&amp;</span>data<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 提交事件供用户空间通过 perf 环形缓冲区读取</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sync-perf-output-py" tabindex="-1"><a class="header-anchor" href="#sync-perf-output-py"><span>sync_perf_output.py</span></a></h3><h3 id="bitehist-py" tabindex="-1"><a class="header-anchor" href="#bitehist-py"><span>bitehist.py</span></a></h3><h3 id="disklatency-py" tabindex="-1"><a class="header-anchor" href="#disklatency-py"><span>disklatency.py</span></a></h3><h3 id="vfsreadlat-py" tabindex="-1"><a class="header-anchor" href="#vfsreadlat-py"><span>vfsreadlat.py</span></a></h3><h3 id="urandomread-py" tabindex="-1"><a class="header-anchor" href="#urandomread-py"><span>urandomread.py</span></a></h3><h3 id="disksnoop-py-fixed" tabindex="-1"><a class="header-anchor" href="#disksnoop-py-fixed"><span>disksnoop.py fixed</span></a></h3><h3 id="strlen-count-py" tabindex="-1"><a class="header-anchor" href="#strlen-count-py"><span>strlen_count.py</span></a></h3><h3 id="nodejs-http-server-py" tabindex="-1"><a class="header-anchor" href="#nodejs-http-server-py"><span>nodejs_http_server.py</span></a></h3><h3 id="task-switch-c" tabindex="-1"><a class="header-anchor" href="#task-switch-c"><span>task_switch.c</span></a></h3><h3 id="further-study" tabindex="-1"><a class="header-anchor" href="#further-study"><span>Further Study</span></a></h3><h2 id="联网" tabindex="-1"><a class="header-anchor" href="#联网"><span>联网</span></a></h2><p>原文的这里为 <code>TODO</code>，应该不是没做，应该是还没写这部分的文档</p>`,18);function q(B,E){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,s("p",null,[n("另请参阅 bcc 开发人员的 "),s("a",r,[n("reference_guide.md"),t(a)]),n(" 和工具最终用户的教程："),s("a",d,[n("tutorial.md"),t(a)]),n("。还有一个用于 bcc 的 lua 接口。")]),k,s("p",null,[n("该程序位于 "),s("a",v,[n("examples/tracing/hello_fields.py"),t(a)]),n(" 中。示例输出（在另一个会话中运行命令）")]),m,s("p",null,[n("该程序是 "),s("a",b,[n("examples/tracing/sync_timing.py"),t(a)]),n("：")]),h,s("p",null,[n("浏览 "),s("a",y,[n("examples/tracing/disksnoop.py"),t(a)]),n(" 程序以查看新增内容。这是一些示例输出：")]),_,s("p",null,[n("代码为 "),s("a",g,[n("examples/tracing/hello_perf_output.py"),t(a)])]),f])}const P=p(i,[["render",q],["__file","03. Python开发者教程.html.vue"]]),C=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/02.%20Theory/Computer/03.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F%20-%20%E4%B8%93%E9%A2%98%E6%88%96%E5%AD%90%E7%B3%BB%E7%BB%9F%E7%9A%84%E5%AD%97%E5%85%B8%E7%89%88/%E4%B8%8B%E5%B1%82%E7%9B%B8%E5%85%B3/Network/%E7%BD%91%E7%BB%9C%E5%BA%93/%E6%97%A0%E5%8D%8F%E8%AE%AE%E6%A0%88%E5%BA%93/BCC%20(eBPF)/03.%20Python%E5%BC%80%E5%8F%91%E8%80%85%E6%95%99%E7%A8%8B.html","title":"BCC","lang":"zh-CN","frontmatter":{"description":"BCC 目录 BCC Python 开发者教程 本教程是关于使用 Python 界面开发BCC工具和程序。有两个部分：可观察性和网络。片段取自BCC的各种程序：请参阅它们的文件以获取许可证。 另请参阅 bcc 开发人员的 reference_guide.md 和工具最终用户的教程：tutorial.md。还有一个用于 bcc 的 lua 接口。 可观察...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/02.%20Theory/Computer/03.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F%20-%20%E4%B8%93%E9%A2%98%E6%88%96%E5%AD%90%E7%B3%BB%E7%BB%9F%E7%9A%84%E5%AD%97%E5%85%B8%E7%89%88/%E4%B8%8B%E5%B1%82%E7%9B%B8%E5%85%B3/Network/%E7%BD%91%E7%BB%9C%E5%BA%93/%E6%97%A0%E5%8D%8F%E8%AE%AE%E6%A0%88%E5%BA%93/BCC%20(eBPF)/03.%20Python%E5%BC%80%E5%8F%91%E8%80%85%E6%95%99%E7%A8%8B.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"BCC"}],["meta",{"property":"og:description","content":"BCC 目录 BCC Python 开发者教程 本教程是关于使用 Python 界面开发BCC工具和程序。有两个部分：可观察性和网络。片段取自BCC的各种程序：请参阅它们的文件以获取许可证。 另请参阅 bcc 开发人员的 reference_guide.md 和工具最终用户的教程：tutorial.md。还有一个用于 bcc 的 lua 接口。 可观察..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"BCC\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"BCC","slug":"bcc","link":"#bcc","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"BCC Python 开发者教程","slug":"bcc-python-开发者教程","link":"#bcc-python-开发者教程","children":[{"level":2,"title":"可观察性","slug":"可观察性","link":"#可观察性","children":[{"level":3,"title":"Hello World","slug":"hello-world","link":"#hello-world","children":[]},{"level":3,"title":"sys_sync()","slug":"sys-sync","link":"#sys-sync","children":[]},{"level":3,"title":"hello_fields.py","slug":"hello-fields-py","link":"#hello-fields-py","children":[]},{"level":3,"title":"sync_timing.py","slug":"sync-timing-py","link":"#sync-timing-py","children":[]},{"level":3,"title":"sync_count.py","slug":"sync-count-py","link":"#sync-count-py","children":[]},{"level":3,"title":"disksnoop.py","slug":"disksnoop-py","link":"#disksnoop-py","children":[]},{"level":3,"title":"hello_perf_output.py","slug":"hello-perf-output-py","link":"#hello-perf-output-py","children":[]},{"level":3,"title":"sync_perf_output.py","slug":"sync-perf-output-py","link":"#sync-perf-output-py","children":[]},{"level":3,"title":"bitehist.py","slug":"bitehist-py","link":"#bitehist-py","children":[]},{"level":3,"title":"disklatency.py","slug":"disklatency-py","link":"#disklatency-py","children":[]},{"level":3,"title":"vfsreadlat.py","slug":"vfsreadlat-py","link":"#vfsreadlat-py","children":[]},{"level":3,"title":"urandomread.py","slug":"urandomread-py","link":"#urandomread-py","children":[]},{"level":3,"title":"disksnoop.py fixed","slug":"disksnoop-py-fixed","link":"#disksnoop-py-fixed","children":[]},{"level":3,"title":"strlen_count.py","slug":"strlen-count-py","link":"#strlen-count-py","children":[]},{"level":3,"title":"nodejs_http_server.py","slug":"nodejs-http-server-py","link":"#nodejs-http-server-py","children":[]},{"level":3,"title":"task_switch.c","slug":"task-switch-c","link":"#task-switch-c","children":[]},{"level":3,"title":"Further Study","slug":"further-study","link":"#further-study","children":[]}]},{"level":2,"title":"联网","slug":"联网","link":"#联网","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":13.49,"words":4048},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/02. Theory/Computer/03. 计算机系统 - 专题或子系统的字典版/下层相关/Network/网络库/无协议栈库/BCC (eBPF)/03. Python开发者教程.md","autoDesc":true}');export{P as comp,C as data};

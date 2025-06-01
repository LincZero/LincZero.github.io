import{_ as n,c as l,b as i,d as p,r as t,o as e}from"./app-nOKFa9Yh.js";const h={};function k(r,s){const a=t("Mermaid");return e(),l("div",null,[s[0]||(s[0]=i('<h1 id="操作系统-系统以下" tabindex="-1">操作系统 - 系统以下</h1><h2 id="物理内存-vs-程序员眼中的内存" tabindex="-1">物理内存 vs 程序员眼中的内存</h2><h3 id="内存的物理机制" tabindex="-1">内存的物理机制</h3><ul><li>内部部分 <ul><li>内存集成电路</li></ul></li><li>引脚 (接口) 部分 <ul><li>有多个电路引脚 (以那种单片机上黑色的<strong>22引脚</strong>的小内存为例) <ul><li>(2) VCC 电源，GND 电源</li><li>(10) A0-A9 地址信号引脚。= 10位 = 1024个地址 = 索引1024Byte的空间</li><li>(8) D0-D7 数据信号引脚。= 8位 = 一字节 = 每个地址可以存储8个字节</li><li>(2) RD WR 控制信号引脚。即读还是写</li></ul></li><li>信号引脚中，通过5V高电平，0V低电平，来表示10</li><li>顺序 <ul><li>写则依次：(1) 指定地址、(2) 输入数据、(3) 将WR设为1</li><li>读则依次：(1) 制定地址、(2) 将RD设为1、(3) 从数据引脚中获取</li></ul></li></ul></li></ul><h3 id="字节序" tabindex="-1">字节序</h3><p>详见CSAPP或内存管理相关笔记</p><h2 id="高级语言、汇编语言、机器语言" tabindex="-1">高级语言、汇编语言、机器语言</h2><p>略，详见CSAPP</p><p>objdump -d -S hello.o // -S可以看对应的C语言语句</p><p>不过还是Godbolt香 （戈伯特）</p><h2 id="cpu执行过程" tabindex="-1">CPU执行过程</h2><h3 id="物理" tabindex="-1">物理</h3><p>集成电路，根据指令处理各种处理的电子电路，每个指令对对应相应的电子电路工作</p><ul><li>控制器：负责传入寄存器，得到结果后控制计算机</li><li>寄存器 (20~100个)：暂存指令、数据等（PC(计数器)有可能也在这个位置，例如IP就是指令指针寄存器）</li><li>运算器：运算</li></ul><p>流程</p><ol><li>读取：CPU从内存中读取指令</li><li>解码：将10串拆成操作码和操作数，知道要去执行什么操作</li><li>执行</li><li>（循环，根据计数器(PC)循环）</li></ol>',16)),p(a,{id:"mermaid-148",code:"eJxLL0osyFDwCeJ62tb6dO0M3ZerZ7xsmP98z2QQR9dQ91nf8qcd257OXKGra/d0fQtQFMR+tnApSFLX7sX+Cc/XTQcKccFZurpGmGqNUA3CtIsLAElXTOk="}),s[1]||(s[1]=i(`<h3 id="cpu指令集" tabindex="-1">CPU指令集</h3><ul><li>arm架构CPU</li><li>X86架构CPU</li></ul><p>查看CPU架构</p><ul><li>windows：systeminfo，找 &quot;系统类型&quot; 一栏</li><li>linux：lscpu，找 &quot;Architecture&quot; 一栏</li></ul><h3 id="常用指令" tabindex="-1">常用指令</h3><p>详见SCAPP</p><ul><li>mov A,B</li><li>add A,B</li><li>push A</li><li>pop A</li><li>call A</li><li>ret 无</li></ul><h3 id="常用操作数" tabindex="-1">常用操作数</h3><ul><li>寄存器 <ul><li>rbp (register base pointer)：栈基址寄存器（栈帧指针），指向当前帧的栈底地址</li><li>rsp (register stack pointer)：栈顶寄存器（栈指针），指向栈顶元素</li><li>(函数调用时会使用上面两个)</li><li>rip：存储下一条指令的内存地址</li></ul></li><li>内存</li><li>常数</li></ul><h2 id="程序-机器码-的对应" tabindex="-1">程序 - 机器码 的对应</h2><h3 id="函数调用" tabindex="-1">函数调用</h3><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> mod</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> a </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> b;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> res </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> mod</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(a, b);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> res </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> b;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> a </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> b </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> c </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(a, b);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>函数调用栈</p><ul><li>函数调用链：main -&gt; add -&gt; mod -&gt; add -&gt; main</li><li>每个栈帧会包含： <ul><li>参数值</li><li>局部变量</li><li>返回地址 (出栈时使用，并返回对应的位置)</li></ul></li></ul><p>汇编：</p><div class="language-assembly line-numbers-mode" data-highlighter="shiki" data-ext="assembly" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-assembly"><span class="line"><span>000000000000000 &lt;mod&gt;</span></span>
<span class="line"><span>	push rbp			# 栈基址</span></span>
<span class="line"><span>	mov rbp, rsp</span></span>
<span class="line"><span>	……</span></span>
<span class="line"><span>	pop rbp				# 将rbp和rsp退出上一个栈中。退回地址：rbp退回到他指向的地址</span></span>
<span class="line"><span>	ret					# 回调。回调地址：rip存着</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>000000000000015 &lt;add&gt;</span></span>
<span class="line"><span>	push rbp			# 栈基址</span></span>
<span class="line"><span>	mov rbp, rsp</span></span>
<span class="line"><span>	……</span></span>
<span class="line"><span>	call 32 &lt;add+0x1d&gt;	# 调用mod函数</span></span>
<span class="line"><span>	mov DWORD PTR [rbp-0x4], eax</span></span>
<span class="line"><span>	……</span></span>
<span class="line"><span>	leave				# = mov rbp, rsp + pop rbp</span></span>
<span class="line"><span>	ret</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>00000000000003f &lt;main&gt;</span></span>
<span class="line"><span>	push rbp			# 栈基址</span></span>
<span class="line"><span>    mov rbp, rsp</span></span>
<span class="line"><span>	……</span></span>
<span class="line"><span>	call 64 &lt;main+0x25&gt;	# 调用add函数</span></span>
<span class="line"><span>	mov DWORD PTR [rbp-0xc], eax</span></span>
<span class="line"><span>	leave</span></span>
<span class="line"><span>	ret</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>main函数不是第一个被调用的函数，被名为start函数调用。在执行main函数之前，就已经存在栈帧了</p><h3 id="其他指令" tabindex="-1">其他指令</h3><h3 id="if-指令" tabindex="-1">if 指令</h3><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> a </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> a </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> c;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (a </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">==</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> b) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        c </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> a </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> b;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        c </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> a </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> b;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> c;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>汇编</p><div class="language-assembly line-numbers-mode" data-highlighter="shiki" data-ext="assembly" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-assembly"><span class="line"><span>000000000000000 &lt;main&gt;</span></span>
<span class="line"><span>	push rbp</span></span>
<span class="line"><span>	mov rbp, rsp</span></span>
<span class="line"><span>	# int a = 3;</span></span>
<span class="line"><span>    mov DWORD PTR [rbp-0x8], 0x3</span></span>
<span class="line"><span>    # int b = 2;</span></span>
<span class="line"><span>    mov DWORD PTR [rbp-0xc], 0x2</span></span>
<span class="line"><span>    # int c;</span></span>
<span class="line"><span>    # if (a == b) {</span></span>
<span class="line"><span>    mov eax, DWORD PTR [rbp-0x8]</span></span>
<span class="line"><span>    cmp eax, DWORD PTR [rbp-0xc]	# cmp =compare，比较结果放在条件码寄存器（标志位寄存器）</span></span>
<span class="line"><span>    jne 27 &lt;main+0x27&gt;				# jnp = jump if not equal，会去查看条件寄存器的零标志位</span></span>
<span class="line"><span>    mov eax, DWORD PTR [rbp-0xc]</span></span>
<span class="line"><span>    	# c = a+b;</span></span>
<span class="line"><span>    mov edx, DWORD PTR [rbp-0x8]</span></span>
<span class="line"><span>    add eax, edx</span></span>
<span class="line"><span>    mov DWORD PTR [rbp-0x4], eax</span></span>
<span class="line"><span>    jmp 34 &lt;main+0x34&gt;</span></span>
<span class="line"><span>    # } else {</span></span>
<span class="line"><span>    #  	  c = a - b</span></span>
<span class="line"><span>0x0027</span></span>
<span class="line"><span>	mov eax, DWORD PTR [rbp-0xc]</span></span>
<span class="line"><span>	mov edx, DWORD PTR [rbp-0x8]</span></span>
<span class="line"><span>	sub edx, eax</span></span>
<span class="line"><span>	mov eax, edx</span></span>
<span class="line"><span>	mov DWORD PTR [rbp-0x4], eax</span></span>
<span class="line"><span>	# }</span></span>
<span class="line"><span>	# return c;</span></span>
<span class="line"><span>0x0034</span></span>
<span class="line"><span>	mov eax, DWORD PTR [rbp-0x4]</span></span>
<span class="line"><span>	# }</span></span>
<span class="line"><span>	pop rbp</span></span>
<span class="line"><span>	ret</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="for-指令" tabindex="-1">for 指令</h3><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> a </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        a </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">+=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> a;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>汇编</p><div class="language-assembly line-numbers-mode" data-highlighter="shiki" data-ext="assembly" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-assembly"><span class="line"><span>000000000000000 &lt;main&gt;</span></span>
<span class="line"><span>	push rbp</span></span>
<span class="line"><span>	mov rbp, rsp</span></span>
<span class="line"><span>	# int a = 0;</span></span>
<span class="line"><span>	mov DWORD PTR [rbp-0x4], 0x0</span></span>
<span class="line"><span>	# for (int i = 0; i &lt; 3; i++) {</span></span>
<span class="line"><span>	mov DWORD PTR [rbp-0x8], 0x0</span></span>
<span class="line"><span>	jmp 1e &lt;main+0x1e&gt;</span></span>
<span class="line"><span>	#     a += i;</span></span>
<span class="line"><span>0x0014</span></span>
<span class="line"><span>	mov eax, DWORD PTR [rbp-0x8]</span></span>
<span class="line"><span>	add DWORD PTR [rbp-0x4], eax</span></span>
<span class="line"><span>	# int main() {</span></span>
<span class="line"><span>	#     int a = 0;</span></span>
<span class="line"><span>	#     for (int i = 0; i &lt; 3; i++) {</span></span>
<span class="line"><span>	add DWORD PTR [rbp-0x8], 0x1</span></span>
<span class="line"><span>0x001e</span></span>
<span class="line"><span>    cmp DWORD PTR [rbp-0x8], 0x2</span></span>
<span class="line"><span>    jle 14 &lt;main+0x14&gt;</span></span>
<span class="line"><span>	#         a += i;</span></span>
<span class="line"><span>	#     }</span></span>
<span class="line"><span>	#     return a;</span></span>
<span class="line"><span>	mov eax, DWORD PTR [rbp-0x8], 0x4</span></span>
<span class="line"><span>	# }</span></span>
<span class="line"><span>	pop rbp</span></span>
<span class="line"><span>	ret</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="goto" tabindex="-1">goto</h3><p>C语言有个goto指令，可以代替条件控制。用那个来代替 if、for 等流程控制（或者说在流程控制出来前就是这样做的），应该就很好理解了</p>`,28))])}const A=n(h,[["render",k]]),c=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Develop/02.%20Theory/Computer/03.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F%20-%20%E7%BA%BF%E6%80%A7%E5%AD%A6%E4%B9%A0%E7%89%88/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%20(%E9%9D%A2%E8%AF%95%E7%89%88)/01.%20%E7%B3%BB%E7%BB%9F%E4%BB%A5%E4%B8%8B.html","title":"操作系统 - 系统以下","lang":"zh-CN","frontmatter":{"description":"操作系统 - 系统以下 物理内存 vs 程序员眼中的内存 内存的物理机制 内部部分 内存集成电路 引脚 (接口) 部分 有多个电路引脚 (以那种单片机上黑色的22引脚的小内存为例) (2) VCC 电源，GND 电源 (10) A0-A9 地址信号引脚。= 10位 = 1024个地址 = 索引1024Byte的空间 (8) D0-D7 数据信号引脚。=...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"操作系统 - 系统以下\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/01.%20DesignAndDevelop/Develop/02.%20Theory/Computer/03.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F%20-%20%E7%BA%BF%E6%80%A7%E5%AD%A6%E4%B9%A0%E7%89%88/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%20(%E9%9D%A2%E8%AF%95%E7%89%88)/01.%20%E7%B3%BB%E7%BB%9F%E4%BB%A5%E4%B8%8B.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"操作系统 - 系统以下"}],["meta",{"property":"og:description","content":"操作系统 - 系统以下 物理内存 vs 程序员眼中的内存 内存的物理机制 内部部分 内存集成电路 引脚 (接口) 部分 有多个电路引脚 (以那种单片机上黑色的22引脚的小内存为例) (2) VCC 电源，GND 电源 (10) A0-A9 地址信号引脚。= 10位 = 1024个地址 = 索引1024Byte的空间 (8) D0-D7 数据信号引脚。=..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]]},"git":{},"readingTime":{"minutes":3.96,"words":1187},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Develop/02. Theory/Computer/03. 计算机系统 - 线性学习版/操作系统 (面试版)/01. 系统以下.md","excerpt":"\\n<h2>物理内存 vs 程序员眼中的内存</h2>\\n<h3>内存的物理机制</h3>\\n<ul>\\n<li>内部部分\\n<ul>\\n<li>内存集成电路</li>\\n</ul>\\n</li>\\n<li>引脚 (接口) 部分\\n<ul>\\n<li>有多个电路引脚 (以那种单片机上黑色的<strong>22引脚</strong>的小内存为例)\\n<ul>\\n<li>(2) VCC 电源，GND 电源</li>\\n<li>(10) A0-A9 地址信号引脚。= 10位 = 1024个地址 = 索引1024Byte的空间</li>\\n<li>(8) D0-D7 数据信号引脚。= 8位 = 一字节 = 每个地址可以存储8个字节</li>\\n<li>(2) RD WR 控制信号引脚。即读还是写</li>\\n</ul>\\n</li>\\n<li>信号引脚中，通过5V高电平，0V低电平，来表示10</li>\\n<li>顺序\\n<ul>\\n<li>写则依次：(1) 指定地址、(2) 输入数据、(3) 将WR设为1</li>\\n<li>读则依次：(1) 制定地址、(2) 将RD设为1、(3) 从数据引脚中获取</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/01. DesignAndDevelop/Develop/02. Theory/Computer/03. 计算机系统 - 线性学习版/操作系统 (面试版)/01. 系统以下.md","value":{"title":"01. 系统以下","path":"MdNote_Public/01. DesignAndDevelop/Develop/02. Theory/Computer/03. 计算机系统 - 线性学习版/操作系统 (面试版)/01. 系统以下.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{A as comp,c as data};

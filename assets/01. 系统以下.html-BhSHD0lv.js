import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-yixEWCFr.js";const i={},l=e(`<h1 id="操作系统-系统以下" tabindex="-1"><a class="header-anchor" href="#操作系统-系统以下"><span>操作系统 - 系统以下</span></a></h1><h2 id="物理内存-vs-程序员眼中的内存" tabindex="-1"><a class="header-anchor" href="#物理内存-vs-程序员眼中的内存"><span>物理内存 vs 程序员眼中的内存</span></a></h2><h3 id="内存的物理机制" tabindex="-1"><a class="header-anchor" href="#内存的物理机制"><span>内存的物理机制</span></a></h3><ul><li>内部部分 <ul><li>内存集成电路</li></ul></li><li>引脚 (接口) 部分 <ul><li>有多个电路引脚 (以那种单片机上黑色的<strong>22引脚</strong>的小内存为例) <ul><li>(2) VCC 电源，GND 电源</li><li>(10) A0-A9 地址信号引脚。= 10位 = 1024个地址 = 索引1024Byte的空间</li><li>(8) D0-D7 数据信号引脚。= 8位 = 一字节 = 每个地址可以存储8个字节</li><li>(2) RD WR 控制信号引脚。即读还是写</li></ul></li><li>信号引脚中，通过5V高电平，0V低电平，来表示10</li><li>顺序 <ul><li>写则依次：(1) 指定地址、(2) 输入数据、(3) 将WR设为1</li><li>读则依次：(1) 制定地址、(2) 将RD设为1、(3) 从数据引脚中获取</li></ul></li></ul></li></ul><h3 id="字节序" tabindex="-1"><a class="header-anchor" href="#字节序"><span>字节序</span></a></h3><p>详见CSAPP或内存管理相关笔记</p><h2 id="高级语言、汇编语言、机器语言" tabindex="-1"><a class="header-anchor" href="#高级语言、汇编语言、机器语言"><span>高级语言、汇编语言、机器语言</span></a></h2><p>略，详见CSAPP</p><p>objdump -d -S hello.o // -S可以看对应的C语言语句</p><p>不过还是Godbolt香 （戈伯特）</p><h2 id="cpu执行过程" tabindex="-1"><a class="header-anchor" href="#cpu执行过程"><span>CPU执行过程</span></a></h2><h3 id="物理" tabindex="-1"><a class="header-anchor" href="#物理"><span>物理</span></a></h3><p>集成电路，根据指令处理各种处理的电子电路，每个指令对对应相应的电子电路工作</p><ul><li>控制器：负责传入寄存器，得到结果后控制计算机</li><li>寄存器 (20~100个)：暂存指令、数据等（PC(计数器)有可能也在这个位置，例如IP就是指令指针寄存器）</li><li>运算器：运算</li></ul><p>流程</p><ol><li>读取：CPU从内存中读取指令</li><li>解码：将10串拆成操作码和操作数，知道要去执行什么操作</li><li>执行</li><li>（循环，根据计数器(PC)循环）</li></ol><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
内存-高速缓存<span class="token arrow operator">--</span>1-控制器<span class="token arrow operator">--&gt;</span>寄存器-桥<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">1</span><span class="token arrow operator">--&gt;</span></span>运算器
运算器<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">2</span><span class="token arrow operator">--&gt;</span></span>寄存器-桥<span class="token arrow operator">--</span>2-控制器<span class="token arrow operator">--&gt;</span>内存-高速缓存
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cpu指令集" tabindex="-1"><a class="header-anchor" href="#cpu指令集"><span>CPU指令集</span></a></h3><ul><li>arm架构CPU</li><li>X86架构CPU</li></ul><p>查看CPU架构</p><ul><li>windows：systeminfo，找 &quot;系统类型&quot; 一栏</li><li>linux：lscpu，找 &quot;Architecture&quot; 一栏</li></ul><h3 id="常用指令" tabindex="-1"><a class="header-anchor" href="#常用指令"><span>常用指令</span></a></h3><p>详见SCAPP</p><ul><li>mov A,B</li><li>add A,B</li><li>push A</li><li>pop A</li><li>call A</li><li>ret 无</li></ul><h3 id="常用操作数" tabindex="-1"><a class="header-anchor" href="#常用操作数"><span>常用操作数</span></a></h3><ul><li>寄存器 <ul><li>rbp (register base pointer)：栈基址寄存器（栈帧指针），指向当前帧的栈底地址</li><li>rsp (register stack pointer)：栈顶寄存器（栈指针），指向栈顶元素</li><li>(函数调用时会使用上面两个)</li><li>rip：存储下一条指令的内存地址</li></ul></li><li>内存</li><li>常数</li></ul><h2 id="程序-机器码-的对应" tabindex="-1"><a class="header-anchor" href="#程序-机器码-的对应"><span>程序 - 机器码 的对应</span></a></h2><h3 id="函数调用" tabindex="-1"><a class="header-anchor" href="#函数调用"><span>函数调用</span></a></h3><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">mod</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">%</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token function">mod</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> res <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数调用栈</p><ul><li>函数调用链：main -&gt; add -&gt; mod -&gt; add -&gt; main</li><li>每个栈帧会包含： <ul><li>参数值</li><li>局部变量</li><li>返回地址 (出栈时使用，并返回对应的位置)</li></ul></li></ul><p>汇编：</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>000000000000000 &lt;mod&gt;
	push rbp			# 栈基址
	mov rbp, rsp
	……
	pop rbp				# 将rbp和rsp退出上一个栈中。退回地址：rbp退回到他指向的地址
	ret					# 回调。回调地址：rip存着
	
000000000000015 &lt;add&gt;
	push rbp			# 栈基址
	mov rbp, rsp
	……
	call 32 &lt;add+0x1d&gt;	# 调用mod函数
	mov DWORD PTR [rbp-0x4], eax
	……
	leave				# = mov rbp, rsp + pop rbp
	ret
	
00000000000003f &lt;main&gt;
	push rbp			# 栈基址
    mov rbp, rsp
	……
	call 64 &lt;main+0x25&gt;	# 调用add函数
	mov DWORD PTR [rbp-0xc], eax
	leave
	ret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>main函数不是第一个被调用的函数，被名为start函数调用。在执行main函数之前，就已经存在栈帧了</p><h3 id="其他指令" tabindex="-1"><a class="header-anchor" href="#其他指令"><span>其他指令</span></a></h3><h3 id="if-指令" tabindex="-1"><a class="header-anchor" href="#if-指令"><span>if 指令</span></a></h3><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> c<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        c <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        c <span class="token operator">=</span> a <span class="token operator">-</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>汇编</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>000000000000000 &lt;main&gt;
	push rbp
	mov rbp, rsp
	# int a = 3;
    mov DWORD PTR [rbp-0x8], 0x3
    # int b = 2;
    mov DWORD PTR [rbp-0xc], 0x2
    # int c;
    # if (a == b) {
    mov eax, DWORD PTR [rbp-0x8]
    cmp eax, DWORD PTR [rbp-0xc]	# cmp =compare，比较结果放在条件码寄存器（标志位寄存器）
    jne 27 &lt;main+0x27&gt;				# jnp = jump if not equal，会去查看条件寄存器的零标志位
    mov eax, DWORD PTR [rbp-0xc]
    	# c = a+b;
    mov edx, DWORD PTR [rbp-0x8]
    add eax, edx
    mov DWORD PTR [rbp-0x4], eax
    jmp 34 &lt;main+0x34&gt;
    # } else {
    #  	  c = a - b
0x0027
	mov eax, DWORD PTR [rbp-0xc]
	mov edx, DWORD PTR [rbp-0x8]
	sub edx, eax
	mov eax, edx
	mov DWORD PTR [rbp-0x4], eax
	# }
	# return c;
0x0034
	mov eax, DWORD PTR [rbp-0x4]
	# }
	pop rbp
	ret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for-指令" tabindex="-1"><a class="header-anchor" href="#for-指令"><span>for 指令</span></a></h3><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        a <span class="token operator">+=</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>汇编</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>000000000000000 &lt;main&gt;
	push rbp
	mov rbp, rsp
	# int a = 0;
	mov DWORD PTR [rbp-0x4], 0x0
	# for (int i = 0; i &lt; 3; i++) {
	mov DWORD PTR [rbp-0x8], 0x0
	jmp 1e &lt;main+0x1e&gt;
	#     a += i;
0x0014
	mov eax, DWORD PTR [rbp-0x8]
	add DWORD PTR [rbp-0x4], eax
	# int main() {
	#     int a = 0;
	#     for (int i = 0; i &lt; 3; i++) {
	add DWORD PTR [rbp-0x8], 0x1
0x001e
    cmp DWORD PTR [rbp-0x8], 0x2
    jle 14 &lt;main+0x14&gt;
	#         a += i;
	#     }
	#     return a;
	mov eax, DWORD PTR [rbp-0x8], 0x4
	# }
	pop rbp
	ret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="goto" tabindex="-1"><a class="header-anchor" href="#goto"><span>goto</span></a></h3><p>C语言有个goto指令，可以代替条件控制。用那个来代替 if、for 等流程控制（或者说在流程控制出来前就是这样做的），应该就很好理解了</p>`,45),t=[l];function p(r,c){return s(),a("div",null,t)}const u=n(i,[["render",p],["__file","01. 系统以下.html.vue"]]),v=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/02.%20Theory/Computer/03.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F%20-%20%E7%BA%BF%E6%80%A7%E5%AD%A6%E4%B9%A0%E7%89%88/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%20(%E9%9D%A2%E8%AF%95%E7%89%88)/01.%20%E7%B3%BB%E7%BB%9F%E4%BB%A5%E4%B8%8B.html","title":"操作系统 - 系统以下","lang":"zh-CN","frontmatter":{"description":"操作系统 - 系统以下 物理内存 vs 程序员眼中的内存 内存的物理机制 内部部分 内存集成电路 引脚 (接口) 部分 有多个电路引脚 (以那种单片机上黑色的22引脚的小内存为例) (2) VCC 电源，GND 电源 (10) A0-A9 地址信号引脚。= 10位 = 1024个地址 = 索引1024Byte的空间 (8) D0-D7 数据信号引脚。=...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/02.%20Theory/Computer/03.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F%20-%20%E7%BA%BF%E6%80%A7%E5%AD%A6%E4%B9%A0%E7%89%88/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%20(%E9%9D%A2%E8%AF%95%E7%89%88)/01.%20%E7%B3%BB%E7%BB%9F%E4%BB%A5%E4%B8%8B.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"操作系统 - 系统以下"}],["meta",{"property":"og:description","content":"操作系统 - 系统以下 物理内存 vs 程序员眼中的内存 内存的物理机制 内部部分 内存集成电路 引脚 (接口) 部分 有多个电路引脚 (以那种单片机上黑色的22引脚的小内存为例) (2) VCC 电源，GND 电源 (10) A0-A9 地址信号引脚。= 10位 = 1024个地址 = 索引1024Byte的空间 (8) D0-D7 数据信号引脚。=..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"操作系统 - 系统以下\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"操作系统 - 系统以下","slug":"操作系统-系统以下","link":"#操作系统-系统以下","children":[{"level":2,"title":"物理内存 vs 程序员眼中的内存","slug":"物理内存-vs-程序员眼中的内存","link":"#物理内存-vs-程序员眼中的内存","children":[{"level":3,"title":"内存的物理机制","slug":"内存的物理机制","link":"#内存的物理机制","children":[]},{"level":3,"title":"字节序","slug":"字节序","link":"#字节序","children":[]}]},{"level":2,"title":"高级语言、汇编语言、机器语言","slug":"高级语言、汇编语言、机器语言","link":"#高级语言、汇编语言、机器语言","children":[]},{"level":2,"title":"CPU执行过程","slug":"cpu执行过程","link":"#cpu执行过程","children":[{"level":3,"title":"物理","slug":"物理","link":"#物理","children":[]},{"level":3,"title":"CPU指令集","slug":"cpu指令集","link":"#cpu指令集","children":[]},{"level":3,"title":"常用指令","slug":"常用指令","link":"#常用指令","children":[]},{"level":3,"title":"常用操作数","slug":"常用操作数","link":"#常用操作数","children":[]}]},{"level":2,"title":"程序 - 机器码 的对应","slug":"程序-机器码-的对应","link":"#程序-机器码-的对应","children":[{"level":3,"title":"函数调用","slug":"函数调用","link":"#函数调用","children":[]},{"level":3,"title":"其他指令","slug":"其他指令","link":"#其他指令","children":[]},{"level":3,"title":"if 指令","slug":"if-指令","link":"#if-指令","children":[]},{"level":3,"title":"for 指令","slug":"for-指令","link":"#for-指令","children":[]},{"level":3,"title":"goto","slug":"goto","link":"#goto","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.96,"words":1187},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/02. Theory/Computer/03. 计算机系统 - 线性学习版/操作系统 (面试版)/01. 系统以下.md","autoDesc":true}');export{u as comp,v as data};

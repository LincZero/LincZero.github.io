import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,e as s}from"./app-yixEWCFr.js";const t={},l=s(`<h1 id="computersystems" tabindex="-1"><a class="header-anchor" href="#computersystems"><span>ComputerSystems</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="数组" tabindex="-1"><a class="header-anchor" href="#数组"><span>数组</span></a></h1><h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串"><span>字符串</span></a></h2><h2 id="如何更优雅的打印字符串" tabindex="-1"><a class="header-anchor" href="#如何更优雅的打印字符串"><span>如何更优雅的打印字符串</span></a></h2><p>需求：给定一段字符串，打印出来</p><p>方法：</p><p>数据源：ds (数据段寄存器) + si (源索引寄存器)，每取出一个字符si就+1 输出：es (扩展段寄存器) + di (目标索引寄存器)，其中es保存显存的地址 = 0xb800，每写入一个自负di就+1 通过循环依次取字符和输出字符 中续：BL待写入，BH字符属性</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>section code align=16 vstart=0x7c00

mov si, SayHello	; 将字符串放在源索引寄存器（si而已16位，这里只是放个地址，SayHello是地址）
xor di, di			; 将di置为0
call PrintString	; 调用函数
mov si, SayByeBye	; 将字符串放在源索引寄存器
call PrintString	; 调用函数
jmp End

PrintString:		; 函数
	.setup:			; 标志位
	mov ax, 0xb800	; 显卡内存，要输出的位置
	mov es, ax		; 扩展段寄存器
	
	mov bh, 0x07	; 设置字符属性
	mov cx, 0xffff	; 字符串长度（循环次数）
	
	.printchar:			; 循环体
        mov bl, [ds:si]	; 取第一个字符到bl寄存器，并移动指针
        inc si			; -
        mov [es:di], bl	; 写入到显存，并移动指针
        inc di			; -
        mov [es:di], bh	; -
        inc di			; -
        or bl, 0x00		; 判断是否循环结束
        jz .return		; 若是则跳出循环
	loop .printchar
	
	.return:		; 标志位
ret					; 函数结束

SayHello db &#39;Hi there,I am Codeing Master!&#39;		; 相当于以0x00结尾的变量
		db 0x00
SayByeBye db &#39;I think you can handle it, bye!&#39;	; 相当于以0x00结尾的变量
		db 0x00
	
End: jmp End
times 510-($-$$) db 0
	db 0x55, 0xaa
	
; 输出：Hi there,I am Codeing Master!I think you can handle it, bye!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>程序里比较多的Magic Number，即魔法数</p><p>equ改良代码：</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>NUL equ 0x00			; 空
SETCHAR equ 0x07		; 设置字符属性
VIDEOMEM equ 0xb800		; 显卡内存
STRINGLEN equ 0xffff	; 字符串长度（循环次数）

section code align=16 vstart=0x7c00

mov si, SayHello	; 将字符串放在源索引寄存器（si而已16位，这里只是放个地址，SayHello是地址）
xor di, di			; 将di置为0
call PrintString	; 调用函数
mov si, SayByeBye	; 将字符串放在源索引寄存器
call PrintString	; 调用函数
jmp End

PrintString:		; 函数
	.setup:			; 标志位
	mov ax, VIDEOMEM; 显卡内存，要输出的位置
	mov es, ax		; 扩展段寄存器
	
	mov bh, SETCHAR	; 设置字符属性
	mov cx, STRINGLEN; 字符串长度（循环次数）
	
	.printchar:			; 循环体
        mov bl, [ds:si]	; 取第一个字符到bl寄存器，并移动指针
        inc si			; -
        mov [es:di], bl	; 写入到显存，并移动指针
        inc di			; -
        mov [es:di], bh	; -
        inc di			; -
        or bl, NUL		; 判断是否循环结束
        jz .return		; 若是则跳出循环
	loop .printchar
	
	.return:		; 标志位
ret					; 函数结束

SayHello db &#39;Hi there,I am Codeing Master!&#39;		; 相当于以0x00结尾的变量
		db NUL
SayByeBye db &#39;I think you can handle it, bye!&#39;	; 相当于以0x00结尾的变量
		db NUL
	
End: jmp End
times 510-($-$$) db 0
	db 0x55, 0xaa
	
; 输出：Hi there,I am Codeing Master!I think you can handle it, bye!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),d=[l];function a(r,v){return i(),n("div",null,d)}const u=e(t,[["render",a],["__file","05. 数组.html.vue"]]),b=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/02.%20Theory/Computer/02.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%8C%87%E4%BB%A4/03.%20%E6%B1%87%E7%BC%96%E6%8C%87%E4%BB%A4/05.%20%E6%95%B0%E7%BB%84.html","title":"ComputerSystems","lang":"zh-CN","frontmatter":{"description":"ComputerSystems 目录 数组 字符串 如何更优雅的打印字符串 需求：给定一段字符串，打印出来 方法： 数据源：ds (数据段寄存器) + si (源索引寄存器)，每取出一个字符si就+1 输出：es (扩展段寄存器) + di (目标索引寄存器)，其中es保存显存的地址 = 0xb800，每写入一个自负di就+1 通过循环依次取字符和输出...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/02.%20Theory/Computer/02.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%8C%87%E4%BB%A4/03.%20%E6%B1%87%E7%BC%96%E6%8C%87%E4%BB%A4/05.%20%E6%95%B0%E7%BB%84.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"ComputerSystems"}],["meta",{"property":"og:description","content":"ComputerSystems 目录 数组 字符串 如何更优雅的打印字符串 需求：给定一段字符串，打印出来 方法： 数据源：ds (数据段寄存器) + si (源索引寄存器)，每取出一个字符si就+1 输出：es (扩展段寄存器) + di (目标索引寄存器)，其中es保存显存的地址 = 0xb800，每写入一个自负di就+1 通过循环依次取字符和输出..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ComputerSystems\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"ComputerSystems","slug":"computersystems","link":"#computersystems","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"数组","slug":"数组","link":"#数组","children":[{"level":2,"title":"字符串","slug":"字符串","link":"#字符串","children":[]},{"level":2,"title":"如何更优雅的打印字符串","slug":"如何更优雅的打印字符串","link":"#如何更优雅的打印字符串","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.39,"words":716},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/02. Theory/Computer/02. 计算机指令/03. 汇编指令/05. 数组.md","autoDesc":true}');export{u as comp,b as data};

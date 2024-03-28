import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as d,a as t}from"./app-BDO1bFk4.js";const l="/assets/4种数-rrUYbnsl.png",n={},s=t('<h1 id="computersystems" tabindex="-1"><a class="header-anchor" href="#computersystems"><span>ComputerSystems</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="信息访问" tabindex="-1"><a class="header-anchor" href="#信息访问"><span>信息访问</span></a></h1><h2 id="mov-数据传送指令" tabindex="-1"><a class="header-anchor" href="#mov-数据传送指令"><span>mov（数据传送指令）</span></a></h2><p>把不同的指令划分成<code>指令类</code>（每一类指令都执行相同的操作，主要区别在与操作数大小不同）</p><p>（表格中“效果”一列的前者是<code>源操作数</code>，后者是<code>目的操作数</code>）</p><h3 id="mov" tabindex="-1"><a class="header-anchor" href="#mov"><span>mov</span></a></h3><h4 id="存储单元之间的数据传输关系-mov" tabindex="-1"><a class="header-anchor" href="#存储单元之间的数据传输关系-mov"><span>存储单元之间的数据传输关系（mov）</span></a></h4><p>mov 目的操作数, 源操作数 # 位宽必须一致</p><p>操作对象有4种</p><ul><li>通用寄存器：AX、BX等</li><li>段寄存器：CS、DS等</li><li>内存单元</li><li>立即数、常数</li></ul><figure><img src="'+l+`" alt="image-20211110001421862" tabindex="0" loading="lazy"><figcaption>image-20211110001421862</figcaption></figure><h4 id="实战demo" tabindex="-1"><a class="header-anchor" href="#实战demo"><span>实战demo</span></a></h4><p>mov.asm</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code># 立即数相关
mov 0xb700, 0xb800		; mov 立即数, 立即数		error: invalid combination of opcode and operands
mov [0x01], 0xb 		; mov 内存单元, 立即数		error: operation size not specified
mov byte [0x01], 0xb800	; mov 内存单元, 立即数		warning: byte data exceeds bounds [-w+number-overflow]
mov word [0x01], 0xb800	; mov 内存单元, 立即数		成功

# 内存单元相关
mov [0x01], [0x02]		; mov 内存单元, 内存单元	error: invalid combination of opcode and operands
mov ax, [0x02]			; mov 寄存器, 内存单元		成功
mov [0x03], ax			; mov 内存单元, 寄存器		成功
mov ds, [0x04]			; mov 段寄存器, 内存单元	成功
mov [0x05], ds			; mov 寄存器, 段寄存器		成功

# 寄存器相关
mov ax, bx
mov cx, dl				; mov 16位寄存器, 8位寄存器	error: invalid combination of opcode and operands
mov cs, ds				; mov 段寄存器, 段寄存器 	error: invalid combination of opcode and operands
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mov衍生指令" tabindex="-1"><a class="header-anchor" href="#mov衍生指令"><span>mov衍生指令</span></a></h3><ul><li>四条指令都执行相同的操作，主要区别在与<strong>操作的数据大小不同</strong></li><li><code>movq</code>是复制双字再符号扩展为四字，而<code>movabsq</code>才是真正的复制四字</li><li>x86-64限制从内存直接复制到内存（源和目的操作数不能同时为存储器类型）</li></ul><table><thead><tr><th>mov指令</th><th>效果</th><th>描述</th></tr></thead><tbody><tr><td>movb</td><td>D &lt; S</td><td>传送字节（B）</td></tr><tr><td>movw</td><td>D &lt; S</td><td>传送字（2B）</td></tr><tr><td>movl</td><td>D &lt; S</td><td>传送双字（4B）</td></tr><tr><td>movq</td><td>D &lt; S</td><td>传送四字（8B）</td></tr><tr><td>movabsq</td><td>R &lt; I</td><td>传送绝对的四字</td></tr></tbody></table><h4 id="movs-movz类-较小源值复制到较大目的" tabindex="-1"><a class="header-anchor" href="#movs-movz类-较小源值复制到较大目的"><span>MOVS / MOVZ类（较小源值复制到较大目的）</span></a></h4><ul><li>没有<code>movzlq</code>原因：根据复制时的规则，当复制双字时就已经会自动零扩展，即<code>movl</code>的效果本质上就是<code>movzlq</code></li><li>movz和movs指令末两位都是<code>大小指示符</code>，而cltq没有操作数（操作数默认：%eax, %rax所对应的寄存器位置为第一个（返回值））</li></ul><table><thead><tr><th>movz指令</th><th>效果（零扩展）</th><th>描述</th><th>movs指令</th><th>效果（符号扩展）</th><th>描述</th></tr></thead><tbody><tr><td>movzbw</td><td>R &lt; 零扩展(S)</td><td>将做了零扩展的<mark>字节</mark>传送到<mark>字</mark></td><td>movsbw</td><td>R &lt; 符号扩展(S)</td><td>将做了符号扩展的<mark>字节</mark>传送到<mark>字</mark></td></tr><tr><td>movzbl</td><td>R &lt; 零扩展(S)</td><td>将做了零扩展的<mark>字节</mark>传送到<mark>双字</mark></td><td>movsbl</td><td>R &lt; 符号扩展(S)</td><td>将做了符号扩展的<mark>字节</mark>传送到<mark>双字</mark></td></tr><tr><td>movzwl</td><td>R &lt; 零扩展(S)</td><td>将做了零扩展的<mark>字</mark>传送到<mark>双字</mark></td><td>movswl</td><td>R &lt; 符号扩展(S)</td><td>将做了符号扩展的<mark>字</mark>传送到<mark>双字</mark></td></tr><tr><td>movzbq</td><td>R &lt; 零扩展(S)</td><td>将做了零扩展的<mark>字节</mark>传送到<mark>四字</mark></td><td>movsbq</td><td>R &lt; 符号扩展(S)</td><td>将做了符号扩展的<mark>字节</mark>传送到<mark>四字</mark></td></tr><tr><td>movzwq</td><td>R &lt; 零扩展(S)</td><td>将做了零扩展的<mark>字</mark>传送到<mark>四字</mark></td><td>movswq</td><td>R &lt; 符号扩展(S)</td><td>将做了符号扩展的<mark>字</mark>传送到<mark>四字</mark></td></tr><tr><td>（movl）</td><td>R &lt; 零扩展(S)</td><td>将做了零扩展的<mark>双字</mark>传送到<mark>四字</mark></td><td>movslq</td><td>R &lt; 符号扩展(S)</td><td>将做了符号扩展的<mark>双字</mark>传送到<mark>四字</mark></td></tr><tr><td>——</td><td>——</td><td>——</td><td>cltq</td><td>%rax &lt; 符号扩展(%eax)</td><td>把==%eax<mark>符号扩展到</mark>%rax==</td></tr></tbody></table><h4 id="数据传送示例" tabindex="-1"><a class="header-anchor" href="#数据传送示例"><span>数据传送示例</span></a></h4><p>C语言的所谓<code>指针</code>就是地址，比如<code>long *xp</code>作第一个参数，那么：</p><ul><li><code>xp</code>，汇编操作数为<code>%rdi</code>，保存在寄存器中。其值是一个地址</li><li><code>*xp</code>，汇编操作数为<code>(%rdi)</code>，保存在内存中。（调用*xp的过程即为间接寻址的过程）</li><li><code>&amp;*xp</code>即取得保存在内存中的<code>*xp</code>的地址，其值等于<code>xp</code></li><li><code>&amp;xp</code>，汇编操作为<code>leaq %rdi,?</code>（不确定能不能读寄存器地址），其值是<code>%rdi</code>（这是一个文本而不是操作数）</li><li>访问寄存器比访问内存要快得多</li></ul><p>内存转内存的过程<code>*dp = (类型) *sp</code>，分（1）*sp传送到寄存器、（2）寄存器传送到*dp两步</p><ul><li>*sp类型小于*dp时：（1）进行扩展传送，（2）普通传送 <ul><li>*sp为T：movs（符号扩展）</li><li>*sp为U：movz（零扩展）</li></ul></li><li>*sp类型大于*dp时：（1）进行普通传送，（2）取寄存器低位传送</li><li>T2U和U2T <ul><li>这里不用管T2U还是U2T，汇编级不区分TU，区分两种扩展的本质是使数据不改变而已</li><li>即这一步只有大小转换没有类型转换！也解释了为什么C语言类型转换+大小变换时，先改变大小再改变类型</li></ul></li></ul><h2 id="push-pop-数据传送指令" tabindex="-1"><a class="header-anchor" href="#push-pop-数据传送指令"><span>push/pop（数据传送指令）</span></a></h2><p>压入和弹出栈数据</p><p>后进先出，栈指针<code>%rsp</code>保存着栈顶元素的地址</p><table><thead><tr><th>指令</th><th>描述</th><th>效果</th><th>等价汇编指令</th></tr></thead><tbody><tr><td>pushq S</td><td>将四字压入栈</td><td>R[%rsp] &lt; R[%rsp]-8<br>M[R[%rsp]] &lt; S</td><td>subq $8,%rsp<br>movq %rbq, (%rsp)</td></tr><tr><td>popq D</td><td>将四字弹出栈</td><td>D &lt; M[R[%rsp]]<br>R[%rsp] &lt; R[%rsp]+8</td><td>movq (%rsp), %rax<br>addq $8, %rsp</td></tr></tbody></table><p><strong>画图时是倒过来画的</strong>（原因：进程的虚拟地址空间设计中（地址从下往上递增），顶层是内核虚拟内存，往下是用户栈，该栈往下的区域是可扩展区域）</p><ul><li>栈的走向跟数据段或代码段不一样</li><li>数据段和代码段：从内存低处向高处进行。例如代码从开始0x7c00，下条可能为0x7c02</li><li>栈段：从内存高处向低处进行。push操作让sp减少，pop操作让sp增大</li></ul><h2 id="in-out" tabindex="-1"><a class="header-anchor" href="#in-out"><span>in/out</span></a></h2><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>in dest目的(al/ax) source源(dx/imm8)	; 读入指令。若使用imm8只能访问0~255号端口，若使用dx则可以访问全部65536个端口
out dest目的(dx/imm8) source源(al/ax)	; 写入指令。参数相反！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实战-读取硬盘-原理" tabindex="-1"><a class="header-anchor" href="#实战-读取硬盘-原理"><span>实战：读取硬盘 - 原理</span></a></h3><p>原理：LBA (Logical Block Addressing，逻辑块寻址)</p><p>LBA参数</p><ul><li>LBA28：表示有2^28个扇区，每个扇区512字节，共128GB</li><li>LBA48：共256T，也是现在的接口</li><li>为了方便学习，该demo使用LBA28接口，接口如下：除了0x1F016位，其余每个端口8位 <ul><li>0x1F7，告诉硬盘你要读还是写 <ul><li>0x20:读硬盘，0x30:写硬盘</li><li>index-3：DRQ，0:未就绪，1:已就绪</li><li>index-7：BSY，0:硬盘闲，1:硬盘忙</li></ul></li><li>0x1F6，从哪个逻辑扇区开始读 24~27，其中空余出的4位要标识硬盘号和读写模式 <ul><li>index-4选择硬盘号，0:主硬盘，1:从硬盘</li><li>index-6选择读写模式，0:CHS (Cylinders Heads Sectors，柱面磁头扇区)，1:LBA (Logical Block Addressing，逻辑块寻址)</li></ul></li><li>0x1F5，从哪个逻辑扇区开始读 16~23</li><li>0x1F4，从哪个逻辑扇区开始读 8~15</li><li>0x1F3，从哪个逻辑扇区开始读 0~7</li><li>0x1F2，要读几个扇区</li><li>0x1F1</li><li>0x1F0，数据端口，16位</li></ul></li></ul><p>流程</p><ul><li>告诉硬盘要读几个扇区，将该数值写入到0x1f2端口</li><li>告诉硬盘从哪个逻辑扇区开始读，LBA28模式下，要写入28位的逻辑扇区号，分成4份写入0x1f3~1f6这4个端口</li><li>告诉硬盘你要读还是写，写到0x1f7端口。然后硬盘会检查0x1f7端口看是否已经就绪</li><li>最后读取硬盘</li></ul><h3 id="实战-读取硬盘-代码" tabindex="-1"><a class="header-anchor" href="#实战-读取硬盘-代码"><span>实战：读取硬盘 - 代码</span></a></h3><p>readhdd.asm</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>HDDPORT equ 0x1f0			; 硬盘端口号

NUL equ 0x00			; 空
SETCHAR equ 0x07		; 设置字符属性
VIDEOMEM equ 0xb800		; 显卡内存
STRINGLEN equ 0xffff	; 字符串长度（循环次数）

sectioon code align=16 vstart=0x7c00

mov si, [READSTART]			; 高位。扇区号28位，需要两个16位寄存器来装
mov cx, [READSTART+0x02]	; 低位
mov al, [SECTORNUM]			; 读取的扇区数
push ax

mov ax, [DESTMEN]
mov dx, [DESTMEN+0x02]
mov bx, 16
div bx

mov ds, ax
xor di, di
pop ax

call ReadHDD
xor si, si
call PrintString
jmp End

ReadHDD:
	push ax
	push bx
	push cx
	push dx
	
	mov dx, HDDPORT+2	; 即0x1f2
	out dx, al
	mov dx, HDDPORT+3
	mov ax, si
	out dx, al
	mov dx, HDDPORT+4
	mov al, ah
	out dx, al
	mov dx, HDDPORT+5
	mov ax, cx
	out dx, al
	mov dx, HDDPORT+6
	mov al, sh
	out dh, 0xe0
	or al, ah
	out dx, al
	mov dx, HDDPORT+7
	mov al, 0x20
	out dx, al
	
	.waits:				; 标志，等待
	in al, dx
	and al, 0x88
	cmp al, 0x08
	jnz .waits
	
	mov dx, HDDPORT
	mov cx, 256
	
	.readwrod:
	in ax, dx
	mov [ds:di], ax
	add di, 2
	or ah, 0x00
	jnz .readword
	
	.return:
	pop dx
	pop cx
	pop bx
	pop ax
ret

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
	
	
READSTART dd 10
SECTORNUM db 1
DESTMEN dd 0x10000
	
End: jmp End
times 510-($-$$) db 0
	db 0x55, 0xaa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>验证</p><p>将下面这段汇编代码编译成bin文件并使用fixVhdw将其写入到第10扇区（fixVhdw后面有个参数是 “起始LBA扇区号”）</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>Data db &#39;Hi, I come from hard disk drive!&#39;
	db 0x00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>最后运行输出</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Hi, I come from hard disk drive<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="实战-读取显卡-独显" tabindex="-1"><a class="header-anchor" href="#实战-读取显卡-独显"><span>实战：读取显卡（独显）</span></a></h3>`,49),a=[s];function r(v,m){return e(),d("div",null,a)}const u=i(n,[["render",r],["__file","02. 信息访问.html.vue"]]),b=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/02.%20Theory/Computer/02.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%8C%87%E4%BB%A4/03.%20%E6%B1%87%E7%BC%96%E6%8C%87%E4%BB%A4/02.%20%E4%BF%A1%E6%81%AF%E8%AE%BF%E9%97%AE.html","title":"ComputerSystems","lang":"zh-CN","frontmatter":{"description":"ComputerSystems 目录 信息访问 mov（数据传送指令） 把不同的指令划分成指令类（每一类指令都执行相同的操作，主要区别在与操作数大小不同） （表格中“效果”一列的前者是源操作数，后者是目的操作数） mov 存储单元之间的数据传输关系（mov） mov 目的操作数, 源操作数 # 位宽必须一致 操作对象有4种 通用寄存器：AX、BX等 段...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/02.%20Theory/Computer/02.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%8C%87%E4%BB%A4/03.%20%E6%B1%87%E7%BC%96%E6%8C%87%E4%BB%A4/02.%20%E4%BF%A1%E6%81%AF%E8%AE%BF%E9%97%AE.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"ComputerSystems"}],["meta",{"property":"og:description","content":"ComputerSystems 目录 信息访问 mov（数据传送指令） 把不同的指令划分成指令类（每一类指令都执行相同的操作，主要区别在与操作数大小不同） （表格中“效果”一列的前者是源操作数，后者是目的操作数） mov 存储单元之间的数据传输关系（mov） mov 目的操作数, 源操作数 # 位宽必须一致 操作对象有4种 通用寄存器：AX、BX等 段..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ComputerSystems\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"ComputerSystems","slug":"computersystems","link":"#computersystems","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"信息访问","slug":"信息访问","link":"#信息访问","children":[{"level":2,"title":"mov（数据传送指令）","slug":"mov-数据传送指令","link":"#mov-数据传送指令","children":[{"level":3,"title":"mov","slug":"mov","link":"#mov","children":[{"level":4,"title":"存储单元之间的数据传输关系（mov）","slug":"存储单元之间的数据传输关系-mov","link":"#存储单元之间的数据传输关系-mov","children":[]},{"level":4,"title":"实战demo","slug":"实战demo","link":"#实战demo","children":[]}]},{"level":3,"title":"mov衍生指令","slug":"mov衍生指令","link":"#mov衍生指令","children":[{"level":4,"title":"MOVS / MOVZ类（较小源值复制到较大目的）","slug":"movs-movz类-较小源值复制到较大目的","link":"#movs-movz类-较小源值复制到较大目的","children":[]},{"level":4,"title":"数据传送示例","slug":"数据传送示例","link":"#数据传送示例","children":[]}]}]},{"level":2,"title":"push/pop（数据传送指令）","slug":"push-pop-数据传送指令","link":"#push-pop-数据传送指令","children":[]},{"level":2,"title":"in/out","slug":"in-out","link":"#in-out","children":[{"level":3,"title":"实战：读取硬盘 - 原理","slug":"实战-读取硬盘-原理","link":"#实战-读取硬盘-原理","children":[]},{"level":3,"title":"实战：读取硬盘 - 代码","slug":"实战-读取硬盘-代码","link":"#实战-读取硬盘-代码","children":[]},{"level":3,"title":"实战：读取显卡（独显）","slug":"实战-读取显卡-独显","link":"#实战-读取显卡-独显","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":7.67,"words":2301},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/02. Theory/Computer/02. 计算机指令/03. 汇编指令/02. 信息访问.md","autoDesc":true}');export{u as comp,b as data};

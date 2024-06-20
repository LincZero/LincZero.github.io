import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as l,c as t,a as d}from"./app-CctSPqZW.js";const i={},n=d(`<h1 id="computersystems" tabindex="-1"><a class="header-anchor" href="#computersystems"><span>ComputerSystems</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="汇编代码" tabindex="-1"><a class="header-anchor" href="#汇编代码"><span>汇编代码</span></a></h1><h2 id="helloworld" tabindex="-1"><a class="header-anchor" href="#helloworld"><span>HelloWorld</span></a></h2><h3 id="helloworld-asm" tabindex="-1"><a class="header-anchor" href="#helloworld-asm"><span>HelloWorld.asm</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>; mov：	是move的缩写，二元指令
; a1：	目的。ax是CPU内的一个通用寄存器
; a2：	源。0b800h是显存的一个地址，h表示hex，也可写作0x0b800
mov ax, 0b800h

; 指定数据段基准地址
; a1：	目的，ds是数据端开头
; a2：	源。ax是一个通用寄存器，目前存储着0x0b800h
mov ds, ax

; 将字符放到指定的内存空间
; 这里每两个字符之间相隔2个字节而不是1个字节是因为在彩色文本空间(0b800h)中还有1字节是属性字节(这里不填即默认的黑底白字)
; mov：	move
; byte：	指定传送数据的大小为1字节
; 0x00：	地址。这里的0x00不是BIOS占用的地址，这里的0x00是基于前面0b800h的内存偏移后的0x00
; &#39;H&#39;：	内容
mov byte [0x00],&#39;H&#39;
mov byte [0x02],&#39;e&#39;
mov byte [0x04],&#39;l&#39;
mov byte [0x06],&#39;l&#39;
mov byte [0x08],&#39;o&#39;
mov byte [0x0a],&#39;,&#39;
mov byte [0x0c],&#39;W&#39;
mov byte [0x0e],&#39;o&#39;
mov byte [0x10],&#39;r&#39;
mov byte [0x12],&#39;l&#39;
mov byte [0x14],&#39;d&#39;

; 标定当前位置
; jmp：	修改IP。跳到jmp所在的位置
; $：	标定当前位置
jmp $

; 将jmp $到0x55之间的位置全部填0
; 510：	MBR分区是512字节，减2表示减去0x55,0xaa两个字节
; $$：	程序起始位置
; $：	jmp所在位置
; $-$$：	从程序开头到jmp的位置一共有多少个字节
; 510-($-$$)：	应该填充0的个数
times 510-($-$$) db 0

; 0x55,0xaa：	MBR分区最后的标志位
db 0x55,0xaa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="原理补充-——-显卡的彩色文本模式" tabindex="-1"><a class="header-anchor" href="#原理补充-——-显卡的彩色文本模式"><span>原理补充 —— 显卡的彩色文本模式</span></a></h3><p>前面的0b800h就是彩色文本模式对应的寻址范围</p><ul><li><p>汇编原理</p><ul><li>当将数据写入这些地址空间，实际上是写入到显卡的显存里，然后显示器从显存里将数据取走，然后显示走屏幕上</li></ul></li><li><p>显卡模式</p><ul><li><p>显卡是支持文字模式和图形模式的，其中文字模式还支持黑白和彩色两种</p></li><li><p>彩色图形：[暂略]</p></li><li><p>文字模式：文字模式会把显示器的整个区域分割成25行，每行80个字符（编程建议一行不超过80个字符的由来） 工程师不用每次都操作像素</p><ul><li><p>黑白文本：基本不会有人用了</p></li><li><p>彩色文本：字符可以有多种颜色，不仅仅发送ASCII码，还要指定一个属性字节，例如发送<code>0x4107</code>是黑底白字</p></li><li><p>属性字节</p><table><thead><tr><th>数字</th><th>符号</th><th>作用</th></tr></thead><tbody><tr><td>7</td><td>K</td><td>是否闪烁</td></tr><tr><td>6</td><td>R</td><td>背景色 - 红</td></tr><tr><td>5</td><td>G</td><td>背景色 - 绿</td></tr><tr><td>4</td><td>B</td><td>背景色 - 蓝</td></tr><tr><td>3</td><td>I</td><td>是否高亮</td></tr><tr><td>2</td><td>R</td><td>前景色 - 红</td></tr><tr><td>1</td><td>G</td><td>前景色 - 绿</td></tr><tr><td>0</td><td>B</td><td>前景色 - 蓝</td></tr></tbody></table></li></ul></li></ul></li></ul><h2 id="一些符号" tabindex="-1"><a class="header-anchor" href="#一些符号"><span>一些符号</span></a></h2><h3 id="注释" tabindex="-1"><a class="header-anchor" href="#注释"><span>注释<code>;</code></span></a></h3><p>分号<code>;</code></p><h3 id="当前汇编地址" tabindex="-1"><a class="header-anchor" href="#当前汇编地址"><span>当前汇编地址<code>$</code></span></a></h3><p><code>jmp $</code>就是在原地打转，不让程序直接退出，等同于<code>wula: jmp wula</code></p><h3 id="程序开头汇编地址" tabindex="-1"><a class="header-anchor" href="#程序开头汇编地址"><span>程序开头汇编地址<code>$$</code></span></a></h3><h2 id="equ-常量声明-汇编器命令" tabindex="-1"><a class="header-anchor" href="#equ-常量声明-汇编器命令"><span>equ 常量声明 (汇编器命令)</span></a></h2><p>equ：声明常量。原理：编译时会将equ常量替换为具体地址。反编译不可回溯</p><p>举例：</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>NUL equ 0x00			; 空
SETCHAR equ 0x07		; 设置字符属性
VIDEOMEM equ 0xb800		; 显卡内存
STRINGLEN equ 0xffff	; 字符串长度（循环次数）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),s=[n];function a(r,o){return l(),t("div",null,s)}const v=e(i,[["render",a],["__file","04. 汇编代码 HelloWorld.html.vue"]]),u=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/02.%20Theory/Computer/02.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%8C%87%E4%BB%A4/01.%20%E6%B1%87%E7%BC%96%E5%9F%BA%E7%A1%80/04.%20%E6%B1%87%E7%BC%96%E4%BB%A3%E7%A0%81%20HelloWorld.html","title":"ComputerSystems","lang":"zh-CN","frontmatter":{"description":"ComputerSystems 目录 汇编代码 HelloWorld HelloWorld.asm 原理补充 —— 显卡的彩色文本模式 前面的0b800h就是彩色文本模式对应的寻址范围 汇编原理 当将数据写入这些地址空间，实际上是写入到显卡的显存里，然后显示器从显存里将数据取走，然后显示走屏幕上 显卡模式 显卡是支持文字模式和图形模式的，其中文字模式还...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/02.%20Theory/Computer/02.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%8C%87%E4%BB%A4/01.%20%E6%B1%87%E7%BC%96%E5%9F%BA%E7%A1%80/04.%20%E6%B1%87%E7%BC%96%E4%BB%A3%E7%A0%81%20HelloWorld.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"ComputerSystems"}],["meta",{"property":"og:description","content":"ComputerSystems 目录 汇编代码 HelloWorld HelloWorld.asm 原理补充 —— 显卡的彩色文本模式 前面的0b800h就是彩色文本模式对应的寻址范围 汇编原理 当将数据写入这些地址空间，实际上是写入到显卡的显存里，然后显示器从显存里将数据取走，然后显示走屏幕上 显卡模式 显卡是支持文字模式和图形模式的，其中文字模式还..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ComputerSystems\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"ComputerSystems","slug":"computersystems","link":"#computersystems","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"汇编代码","slug":"汇编代码","link":"#汇编代码","children":[{"level":2,"title":"HelloWorld","slug":"helloworld","link":"#helloworld","children":[{"level":3,"title":"HelloWorld.asm","slug":"helloworld-asm","link":"#helloworld-asm","children":[]},{"level":3,"title":"原理补充 —— 显卡的彩色文本模式","slug":"原理补充-——-显卡的彩色文本模式","link":"#原理补充-——-显卡的彩色文本模式","children":[]}]},{"level":2,"title":"一些符号","slug":"一些符号","link":"#一些符号","children":[{"level":3,"title":"注释;","slug":"注释","link":"#注释","children":[]},{"level":3,"title":"当前汇编地址$","slug":"当前汇编地址","link":"#当前汇编地址","children":[]},{"level":3,"title":"程序开头汇编地址$$","slug":"程序开头汇编地址","link":"#程序开头汇编地址","children":[]}]},{"level":2,"title":"equ 常量声明 (汇编器命令)","slug":"equ-常量声明-汇编器命令","link":"#equ-常量声明-汇编器命令","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.61,"words":783},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/02. Theory/Computer/02. 计算机指令/01. 汇编基础/04. 汇编代码 HelloWorld.md","autoDesc":true}');export{v as comp,u as data};

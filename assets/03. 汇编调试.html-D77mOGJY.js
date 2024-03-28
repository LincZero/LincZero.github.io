import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as s,a as l}from"./app-BDO1bFk4.js";const n={},a=l(`<h1 id="computersystems" tabindex="-1"><a class="header-anchor" href="#computersystems"><span>ComputerSystems</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="汇编调试" tabindex="-1"><a class="header-anchor" href="#汇编调试"><span>汇编调试</span></a></h1><h2 id="调试汇编程序" tabindex="-1"><a class="header-anchor" href="#调试汇编程序"><span>调试汇编程序</span></a></h2><h3 id="bochs虚拟机-调试神器" tabindex="-1"><a class="header-anchor" href="#bochs虚拟机-调试神器"><span>Bochs虚拟机（调试神器）</span></a></h3><p>官网：http://bochs.sourceforge.net</p><p>下载地址：https://sourceforge.net/projects/bochs/files/bochs/2.6.11/</p><p>简单介绍：官网左下侧是使用手册，手册齐全、功能丰富、软件迷你仅仅5MB</p><p>使用：下载安装完成后有两个exe：bochs.exe和bochsdbg.exe，调试汇编程序时主要使用到的是后者</p><h3 id="调试过程" tabindex="-1"><a class="header-anchor" href="#调试过程"><span>调试过程</span></a></h3><h4 id="配置部分" tabindex="-1"><a class="header-anchor" href="#配置部分"><span>配置部分</span></a></h4><ol><li><p>将二进制写入虚拟硬盘</p><p>用FixVhdw程序将bin写入VHD后会告诉你程序写在了哪个物理空间</p><blockquote><p>提示信息：</p><p>虚拟硬盘： D:...\\Worksapce_VirtualBox\\AssemblyTest\\AssemblyTest\\AssemblyTest.vhd VHD规范的原始创建者标识： conectix 创建此文件的程序：vbox 创建此文件的程序版本：06.01 该虚拟磁盘创建于 2021-11-08 13:31:44。 481个柱面；4个磁头；每磁道有17个扇区。 总容量为 16 MB（兆字节）。 该磁盘为固定磁盘（容量固定，文件大小不变）。</p></blockquote></li><li><p>配置FixVhdw，当然这步不是必须的，只是为了方便</p><ul><li>在VBox路径名的选项中，选择VirtualBox安装目录中的VirtualBox.exe，以方便快速执行VBox虚拟机</li><li>在Bochs路径名的选项中，选择Bochs的安装路径下的bochsdbg.exe，以方便快速执行Bochs虚拟机</li><li>在其他程序路径名的选项中，选择Bochs的安装路径下的bochs.exe，该程序不带Debug功能</li></ul></li><li><p>点击写入并执行Bochs虚拟机</p><ul><li>初次启动时需要进行配置</li><li>选择CD通道：中间的Disk&amp;Boot &gt; 左侧的Edit &gt; 弹出框 &gt; ATA Channel 0 &gt; First HD/CD on Channel <ul><li>Type of ATA device下拉框：disk (默认none)</li><li>Path or physical device name：选择对应的虚拟磁盘.vhd文件 (文件筛选要All files)</li><li>填写磁盘物理位置（需要填写之前在FixVhdw中提示的内容），demo中分别是481-4-17 <ul><li>Cylinders 柱面</li><li>Heads 磁头</li><li>Sector per track 每道扇区</li></ul></li></ul></li><li>Boot配置：Boot Options <ul><li>Boot drive #1：disk (默认floopy)</li></ul></li><li>最后选择OK完成设置。可以将该配置保存为一个文件，不用每次都设置：点击左侧的Save按钮即可保存，若需加载则点击Load按钮</li><li>点击右侧的Start按钮运行debug用虚拟机，弹出黑框表示已进入调试状态。大黑框是调试窗口，新黑框是输出窗口</li></ul></li></ol><h4 id="调试命令" tabindex="-1"><a class="header-anchor" href="#调试命令"><span>调试命令</span></a></h4><p>常用命令</p><ul><li><p>s：单步调试</p></li><li><p>s 200：s后面加数字，表示进行多少次单步调试</p></li><li><p>b：打断点，后跟内存地址，例如：<code>b 0x7c00</code>，会直接跳转到该位置</p></li><li><p>c：contine，继续执行</p></li><li><p>q：quit，退出调试，按两次Enter完全退出。不能点叉号关闭窗口，不然会导致你下一次不能运行</p></li><li><p>r：查看所有通用寄存器的内容（除了通用寄存器外还显示控制寄存器 (IP和EFLAGS) ）</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>; 可以看到每个寄存器都是16位的
; 若单步调试运行\`mov ax, 0xb800\`后，第一行会变为：
; rax: 00000000_0000b800
rax: 00000000_0000aa55
rbx: 00000000_00000000
rcx: 00000000_00090000
rdx: 00000000_00000080
rsp: 00000000_0000ffd6
rbp: 00000000_00000000
rsi: 00000000_000e0000
rdi: 00000000_0000ffac
r8 : 00000000_00000000
r9 : 00000000_00000000
r10: 00000000_00000000
r11: 00000000_00000000
r12: 00000000_00000000
r13: 00000000_00000000
r14: 00000000_00000000
r15: 00000000_00000000
; 指令指针。这里的rip是7c00
rip: 00000000_00007c00
; 标志寄存器。eflags是存储标志位的，比如最后的可以用来存储进位和错位信息的cf，如果是小写则它是0，如果是大写那么它是1
eflags 0x00000082: id vip vif ac vm rf nt IOPL=0 of df if tf SF zf af pf cf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>sreg：查看段寄存器的内容（前4还是6个是段寄存器，后面的我也不指导是什么）</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>es:0x0000, dh=0x00009300, dl=0x0000ffff, valid=1	; 附加段
        Data segment, base=0x00000000, limit=0x0000ffff, Read/Write, Accessed
cs:0x0000, dh=0x00009300, dl=0x0000ffff, valid=1	; 代码段
        Data segment, base=0x00000000, limit=0x0000ffff, Read/Write, Accessed
ss:0x0000, dh=0x00009300, dl=0x0000ffff, valid=7	; 堆栈段
        Data segment, base=0x00000000, limit=0x0000ffff, Read/Write, Accessed
ds:0x0000, dh=0x00009300, dl=0x0000ffff, valid=1	; 数据段
        Data segment, base=0x00000000, limit=0x0000ffff, Read/Write, Accessed
fs:0x0000, dh=0x00009300, dl=0x0000ffff, valid=1	; (FS和GS寄存器无专用名称)
        Data segment, base=0x00000000, limit=0x0000ffff, Read/Write, Accessed
gs:0x0000, dh=0x00009300, dl=0x0000ffff, valid=1	; (FS和GS寄存器无专用名称)
        Data segment, base=0x00000000, limit=0x0000ffff, Read/Write, Accessed
ldtr:0x0000, dh=0x00008200, dl=0x0000ffff, valid=1
tr:0x0000, dh=0x00008b00, dl=0x0000ffff, valid=1
gdtr:base=0x00000000000f9ad7, limit=0x30
idtr:base=0x0000000000000000, limit=0x3ff
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>xp /nuf addr：查看物理内存，n=查看多少个单位，u=单位，u可以是b/h/w/g (1/2/4/8字节)，例如：<code>xp /1wx 0x7c0f1</code></p></li></ul><h4 id="正式调试部分" tabindex="-1"><a class="header-anchor" href="#正式调试部分"><span>正式调试部分</span></a></h4><p>调试过程</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>; 跳转到地址e05b，e05b是BIOS程序的入口
Next at t=0
(0) [0x0000fffffff0] f000:fff0 (unk. ctxt): jmpf 0xf000:e05b          ; ea5be000f0

&gt; s
Next at t=1
(0) [0x0000000fe05b] f000:e05b (unk. ctxt): xor ax, ax                ; 31c0

&gt; s
Next at t=2
(0) [0x0000000fe05d] f000:e05d (unk. ctxt): out 0x0d, al              ; e60d

&gt; s
Next at t=3
(0) [0x0000000fe05f] f000:e05f (unk. ctxt): out 0xda, al              ; e6da

; b：打断点并跳转到0x7c00的位置
; c：contine，继续执行
; 此时输出窗口开始显示文本
; 此时可以看到07c001的汇编指令：mov ax, 0xb800，后面跟着的那个是实际的机器码
&gt; b 0x7c00
&gt; c
Next at t=17178871
(0) [0x000000007c00] 0000:7c00 (unk. ctxt): mov ax, 0xb800            ; b800b8

; 此时s可以一直单步调试汇编代码的部分
&gt; s
; ...

&gt; q
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nasm技巧" tabindex="-1"><a class="header-anchor" href="#nasm技巧"><span>nasm技巧</span></a></h2><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>nasm -f bin start.asm -o start.bin -l start.lst
# 【技巧】
# -l：然后后面再加一个.lst扩展名的文件，可以生成一个包括汇编地址、代码以及机器码的文件。可以方便用来调试
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),d=[a];function t(r,c){return i(),s("div",null,d)}const m=e(n,[["render",t],["__file","03. 汇编调试.html.vue"]]),u=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/02.%20Theory/Computer/02.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%8C%87%E4%BB%A4/01.%20%E6%B1%87%E7%BC%96%E5%9F%BA%E7%A1%80/03.%20%E6%B1%87%E7%BC%96%E8%B0%83%E8%AF%95.html","title":"ComputerSystems","lang":"zh-CN","frontmatter":{"description":"ComputerSystems 目录 汇编调试 调试汇编程序 Bochs虚拟机（调试神器） 官网：http://bochs.sourceforge.net 下载地址：https://sourceforge.net/projects/bochs/files/bochs/2.6.11/ 简单介绍：官网左下侧是使用手册，手册齐全、功能丰富、软件迷你仅仅5MB...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/02.%20Theory/Computer/02.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%8C%87%E4%BB%A4/01.%20%E6%B1%87%E7%BC%96%E5%9F%BA%E7%A1%80/03.%20%E6%B1%87%E7%BC%96%E8%B0%83%E8%AF%95.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"ComputerSystems"}],["meta",{"property":"og:description","content":"ComputerSystems 目录 汇编调试 调试汇编程序 Bochs虚拟机（调试神器） 官网：http://bochs.sourceforge.net 下载地址：https://sourceforge.net/projects/bochs/files/bochs/2.6.11/ 简单介绍：官网左下侧是使用手册，手册齐全、功能丰富、软件迷你仅仅5MB..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ComputerSystems\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"ComputerSystems","slug":"computersystems","link":"#computersystems","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"汇编调试","slug":"汇编调试","link":"#汇编调试","children":[{"level":2,"title":"调试汇编程序","slug":"调试汇编程序","link":"#调试汇编程序","children":[{"level":3,"title":"Bochs虚拟机（调试神器）","slug":"bochs虚拟机-调试神器","link":"#bochs虚拟机-调试神器","children":[]},{"level":3,"title":"调试过程","slug":"调试过程","link":"#调试过程","children":[{"level":4,"title":"配置部分","slug":"配置部分","link":"#配置部分","children":[]},{"level":4,"title":"调试命令","slug":"调试命令","link":"#调试命令","children":[]},{"level":4,"title":"正式调试部分","slug":"正式调试部分","link":"#正式调试部分","children":[]}]}]},{"level":2,"title":"nasm技巧","slug":"nasm技巧","link":"#nasm技巧","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":4.41,"words":1324},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/02. Theory/Computer/02. 计算机指令/01. 汇编基础/03. 汇编调试.md","autoDesc":true}');export{m as comp,u as data};

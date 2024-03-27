import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as d,c as r,b as e,e as n,d as i,a as t}from"./app-Bmv5Ekr9.js";const o={},u=t('<h1 id="autohotkey" tabindex="-1"><a class="header-anchor" href="#autohotkey"><span>AutoHotKey</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="入门" tabindex="-1"><a class="header-anchor" href="#入门"><span>入门</span></a></h1><h2 id="autohotkey介绍" tabindex="-1"><a class="header-anchor" href="#autohotkey介绍"><span>AutoHotKey介绍</span></a></h2><p>这个软件也叫AHK，需要用脚本语言来写</p>',5),c={href:"https://wyagd001.github.io/v2/docs/Tutorial.htm",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.autohotkey.com/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://wyagd001.github.io/zh-cn/docs/AutoHotkey.htm",target:"_blank",rel:"noopener noreferrer"},m=e("mark",null,"主要参考",-1),p={href:"https://www.autohotkey.com/boards/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/Lexikos/AutoHotkey_L/",target:"_blank",rel:"noopener noreferrer"},g=e("li",null,"软件安装后自带chm帮助手册，缺点是只支持英文，而网页版的支持中文",-1),y=t('<p>脚本</p><ul><li>是个体积小巧，语法简单的语言</li></ul><p>作用</p><ul><li>随心所欲创建快捷键</li><li>也可以创建游戏脚本</li></ul><h3 id="使用流程" tabindex="-1"><a class="header-anchor" href="#使用流程"><span>使用流程</span></a></h3><h4 id="创建脚本" tabindex="-1"><a class="header-anchor" href="#创建脚本"><span>创建脚本</span></a></h4><p>用记事本即可，文件扩展名为.ahk</p><h4 id="编辑脚本" tabindex="-1"><a class="header-anchor" href="#编辑脚本"><span>编辑脚本</span></a></h4><p>编辑技巧：AutoHotKey提供了右键菜单，编辑.ahk时右键单击脚本文件, 然后选择 <strong>Edit Script(编辑脚本)</strong> 即可在记事本中打开， 而无需在打开方式中选择记事本</p><h4 id="运行脚本" tabindex="-1"><a class="header-anchor" href="#运行脚本"><span>运行脚本</span></a></h4><p>安装了 AutoHotkey 后, 有几种运行脚本的方法:</p>',11),_=e("li",null,"双击资源管理器中的脚本文件(或脚本文件的快捷方式).",-1),A={href:"https://wyagd001.github.io/zh-cn/docs/Scripts.htm#cmd",target:"_blank",rel:"noopener noreferrer"},f={href:"https://wyagd001.github.io/zh-cn/docs/Scripts.htm#defaultfile",target:"_blank",rel:"noopener noreferrer"},k=e("li",null,'如果 AutoHotkey 固定在 Windows 7 或更高版本系统的任务栏或 "开始" 菜单上, 则可以通过程序跳转列表打开最近的或已固定的脚本.',-1),x={href:"https://wyagd001.github.io/zh-cn/docs/Program.htm#tray-icon",target:"_blank",rel:"noopener noreferrer"},w={href:"https://wyagd001.github.io/zh-cn/docs/commands/ExitApp.htm",target:"_blank",rel:"noopener noreferrer"},E={href:"https://wyagd001.github.io/zh-cn/docs/Variables.htm#Startup",target:"_blank",rel:"noopener noreferrer"},S={href:"https://wyagd001.github.io/zh-cn/docs/Scripts.htm#ahk2exe",target:"_blank",rel:"noopener noreferrer"},H=t('<h3 id="部件" tabindex="-1"><a class="header-anchor" href="#部件"><span>部件</span></a></h3><h4 id="托盘图标" tabindex="-1"><a class="header-anchor" href="#托盘图标"><span>托盘图标</span></a></h4><p>默认情况下, 每个脚本都将自己的图标添加到任务栏通知区域(通常称为托盘)</p><h4 id="主窗口" tabindex="-1"><a class="header-anchor" href="#主窗口"><span>主窗口</span></a></h4>',4),M={href:"https://wyagd001.github.io/zh-cn/docs/commands/OnMessage.htm",target:"_blank",rel:"noopener noreferrer"},N=t(`<div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>; 这样可以防止主窗口在最小化时隐藏:
OnMessage(0x0112, Func(&quot;PreventAutoMinimize&quot;)) ; WM_SYSCOMMAND = 0x0112
OnMessage(0x0005, Func(&quot;PreventAutoMinimize&quot;)) ; WM_SIZE = 0x0005
; 这样可以防止拥有的 GUI 窗口(但不包括对话框) 自动最小化:
OnMessage(0x0018, Func(&quot;PreventAutoMinimize&quot;))

PreventAutoMinimize(wParam, lParam, uMsg, hwnd) {
    if (uMsg = 0x0112 &amp;&amp; wParam = 0xF020 &amp;&amp; hwnd = A_ScriptHwnd) { ; SC_MINIMIZE = 0xF020
        WinMinimize
        return 0 ; 防止主窗口隐藏.
    }
    if (uMsg = 0x0005 &amp;&amp; wParam = 1 &amp;&amp; hwnd = A_ScriptHwnd) ; SIZE_MINIMIZED = 1
        return 0 ; 防止主窗口隐藏.
    if (uMsg = 0x0018 &amp;&amp; lParam = 1) ; SW_PARENTCLOSING = 1
        return 0 ; 防止最小化拥有的窗口.
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装和使用" tabindex="-1"><a class="header-anchor" href="#安装和使用"><span>安装和使用</span></a></h3><h4 id="嵌入脚本" tabindex="-1"><a class="header-anchor" href="#嵌入脚本"><span>嵌入脚本</span></a></h4><p>脚本可以被嵌入到一个标准的 AutoHotkey .exe 文件中, 方法是将它们作为 Win32(RCDATA) 资源来添加</p><h4 id="命令行用法" tabindex="-1"><a class="header-anchor" href="#命令行用法"><span>命令行用法</span></a></h4><p>略</p><h4 id="安装选项" tabindex="-1"><a class="header-anchor" href="#安装选项"><span>安装选项</span></a></h4><p>略</p><h2 id="快速入门" tabindex="-1"><a class="header-anchor" href="#快速入门"><span>快速入门</span></a></h2><p>官网文档教程：https://wyagd001.github.io/zh-cn/docs/Tutorial.htm</p><h3 id="热键-热字串" tabindex="-1"><a class="header-anchor" href="#热键-热字串"><span>热键 &amp; 热字串</span></a></h3><ul><li>热键：是用来触发某些动作的按键或组合按键 热键是通过一对 <code>::</code> 创建的。按键名或组合按键名必须在 <code>::</code> 左边</li></ul><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>^j::
	Send, My First Script
Return
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>热字串：当你键入它们时, 热字串主要用于扩展缩写(自动替换) 热字串在要触发文本替换的文本两边各有一对冒号 <code>::</code></p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>::ftw::Free the whales

::btw::
   MsgBox You typed &quot;btw&quot;.
Return
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>这两个例子的区别在于, 当你按下 <code>Ctrl+J</code> 时, 热键将会触发, 而热字串会将你输入的 &quot;ftw&quot; 转换为 &quot;Free the whales&quot;</p></li></ul><h3 id="热键修饰符" tabindex="-1"><a class="header-anchor" href="#热键修饰符"><span>热键修饰符</span></a></h3><p>表。详见：https://wyagd001.github.io/zh-cn/docs/Hotkeys.htm</p>`,16),q=e("thead",null,[e("tr",null,[e("th",null,"符号"),e("th",null,"描述")])],-1),K=e("tr",null,[e("td",null,"#"),e("td",null,"Win(Windows 徽标键)")],-1),P=e("tr",null,[e("td",null,"!"),e("td",null,"Alt")],-1),B=e("tr",null,[e("td",null,"^"),e("td",null,"Ctrl")],-1),I=e("tr",null,[e("td",null,"+"),e("td",null,"Shift")],-1),W=e("tr",null,[e("td",null,"&"),e("td",null,"用于连接两个按键(含鼠标按键) 合并成一个自定义热键.")],-1),z=e("tr",null,[e("td",null,"<"),e("td",null,"使用成对按键中左边的那个。例如 <!a 相当于 !a, 只是使用左边的 Alt 才可以触发")],-1),R=e("tr",null,[e("td",null,">"),e("td",null,"使用成对按键中右边的那个")],-1),C=e("tr",null,[e("td",null,"————"),e("td",null,"————————（下面的不常用）————————")],-1),L=e("tr",null,[e("td",null,"<^>!"),e("td",null,[e("code",null,"AltGr"),n("键（标准键盘上没有该键）")])],-1),T=e("tr",null,[e("td",null,"*"),e("td",null,"通配符: 即使附加的修饰键被按住也能激发热键")],-1),F=e("tr",null,[e("td",null,"~"),e("td",null,"触发热键时, 热键中按键原有的功能不会被屏蔽(对操作系统隐藏)")],-1),V=e("td",null,"$",-1),D={href:"https://wyagd001.github.io/zh-cn/docs/commands/Send.htm",target:"_blank",rel:"noopener noreferrer"},O=e("tr",null,[e("td",null,"UP"),e("td",null,"单词 UP 可以跟在热键名后面使得在释放按键时触发热键, 而不是按下时")],-1),U=t(`<p>例如：</p><p>使用 <code>&amp;</code> 来定义一个组合热键. 在下面的例子中, 你要按下 Numpad0, 再按下 Numpad1 或 Numpad2, 才能触发热键</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>Numpad0 &amp; Numpad1::
	MsgBox You pressed Numpad1 while holding down Numpad0.
Return

Numpad0 &amp; Numpad2::
	Run Notepad
Return
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>热字串也有修饰符，例如</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>:*:ftw::Free the whales
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="窗口特定的热键-热字串" tabindex="-1"><a class="header-anchor" href="#窗口特定的热键-热字串"><span>窗口特定的热键/热字串</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>#IfWinActive
#IfWinExist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：#IfWin 指令相互排斥，只有一个有效</p><p>例如</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>; 无标题 - 记事本
#IfWinActive Untitled - Notepad
!q::
	MsgBox, You pressed Alt+Q in Notepad.
Return

; 任何不是无标题 - 记事本的窗口
#IfWinActive
!q::
	MsgBox, You pressed Alt+Q in any window.
Return

; 记事本
#IfWinActive ahk_class Notepad
#space::
	MsgBox, You pressed Win+Spacebar in Notepad.
Return
::msg::You typed msg in Notepad

; 画图
#IfWinActive Untitled - Paint  ; 无标题 - 画图
#space::
	MsgBox, You pressed Win+Spacebar in MSPaint!
Return
::msg::You typed msg in MSPaint!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一些示例" tabindex="-1"><a class="header-anchor" href="#一些示例"><span>一些示例</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>::btw::By the way  ; 替换 &quot;btw&quot; 为 &quot;By the way&quot;, 当你按下默认的终止符的时候（包括各种符号，空格换行tab等）
 By the way
:*:hlw::Hellow World  ; 替换 &quot;btw&quot; 为 &quot;By the way&quot; 而不需要按下终止符.

#n::  ; Ctrl+N 热键.
	Run, notepad.exe  ; 当你按下 Ctrl+N, 将启动记事本.
Return   ; 热键内容结束. 当按下热键时, 下面的代码不会被执行.

#b::  ; Ctrl+B 热键
    Send, {ctrl down}c{ctrl up}  ; 复制选定的文本. 也可以使用 ^c, 但这种方法更加可靠.
    SendInput, [b]{ctrl down}v{ctrl up}[/b] ; 粘贴所复制的文本, 并在文本前后加上加粗标签.
Return  ; 热键内容结束, 这之后的内容将不会触发.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="花括号-转义和事件" tabindex="-1"><a class="header-anchor" href="#花括号-转义和事件"><span>花括号 转义和事件</span></a></h3><p>用花括号。它将告诉 AutoHotkey <code>{!}</code> 表示 &quot;感叹号&quot;, 而不是要 &quot;按下 Alt&quot;.</p><p>例如</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>Send, This text has been typed{!}
; 注意 {} 中的 !(感叹号)? 这是因为, 如果没有 {}, AHK 将按下 Alt 键

; 跟上面的例子类似, 只是这次是 Enter 键. AHK 将会输出 &quot;Enter&quot;
; 如果 Enter 没有加上 {} 的话.
Send, Multiple Enter lines have Enter been sent. ; 错误
Send, Multiple{Enter}lines have{Enter}been sent. ; 正确
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>想要表示按住或松开某个按键, 可以将这个键用花括号围起来, 同时加上单词 UP 或 DOWN</p><p>例如</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>; 下面这个例子表示按下一个键的时候再按下另一个键(或多个键).
; 如果其中一个方法不奏效, 试试另一个.
Send, ^s                     ; 都表示发送 CTRL+s 键击
Send, {ctrl down}s{ctrl up}  ; 都表示发送 CTRL+s 键击
Send, {ctrl down}c{ctrl up}
Send, {b down}{b up}
Send, {Tab down}{Tab up}
Send, {Up down}  ; 按下向上键.
Sleep, 1000      ; 保持 1 秒.
Send, {Up up}    ; 然后松开向上键.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="弧括号" tabindex="-1"><a class="header-anchor" href="#弧括号"><span>弧括号</span></a></h3><p>怎样才能让我在发送超长文本时保证文本的可读性?*. 很简单. 使用我们所说的延续片段. 只需要在新行指定一个开括号, 然后是内容, 最后在它自己的行上加上一个闭括号</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>Send,
(
Line 1
Line 2
Apples are a fruit.
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function Y(G,Z){const l=a("ExternalLinkIcon");return d(),r("div",null,[u,e("ul",null,[e("li",null,[e("a",c,[n("官网V2"),i(l)]),n(" / "),e("a",h,[n("官网V1"),i(l)])]),e("li",null,[e("a",v,[n("官网文档"),i(l)]),n("（自身支持中文，"),m,n("）")]),e("li",null,[e("a",p,[n("官网论坛"),i(l)])]),e("li",null,[e("a",b,[n("【Github】AutoHotkey_L（主要分支）"),i(l)])]),g]),y,e("ul",null,[_,e("li",null,[n("在命令行中调用 AutoHotkey.exe, 并将该脚本的文件名(路径) 作为"),e("a",A,[n("命令行参数"),i(l)]),n(".")]),e("li",null,[n("创建 "),e("a",f,[n("the default script(默认脚本)"),i(l)]),n(' 后, 通过 "开始" 菜单中的快捷方式启动 AutoHotkey 以运行它.')]),k]),e("p",null,[n("大多数脚本只有在运行时才会起作用. 使用"),e("a",x,[n("托盘菜单"),i(l)]),n("或 "),e("a",w,[n("ExitApp"),i(l)]),n(" 命令退出脚本. 当 Windows 关闭时, 脚本也被迫退出. 要将脚本配置为在用户登录后自动启动, 最简单的方法是在 "),e("a",E,[n("Startup(启动)"),i(l)]),n(" 文件夹中放置脚本文件的快捷方式.")]),e("p",null,[n("脚本也可以"),e("a",S,[n("编译"),i(l)]),n("; 即与 AutoHotkey 二进制文件结合在一起, 形成一个独立的可执行(.exe) 文件")]),H,e("p",null,[n("最小化主窗口会使其自动隐藏. 这样做是为了防止将所有拥有的窗口(如 GUI 窗口或某些对话框窗口) 自动最小化, 但也有隐藏主窗口任务栏按钮的效果. 要让主窗口正常最小化, 可以用 "),e("a",M,[n("OnMessage"),i(l)]),n(" 覆盖默认的处理方式. 例如:")]),N,e("table",null,[q,e("tbody",null,[K,P,B,I,W,z,R,C,L,T,F,e("tr",null,[V,e("td",null,[n("通常只在脚本使用 "),e("a",D,[n("Send"),i(l)]),n(" 命令发送包含了热键自身的按键时才需要使用此符号, 否则可能会导致热键触发自己")])]),O])]),U])}const Q=s(o,[["render",Y],["__file","01. AutoHotKey入门.html.vue"]]),$=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Type/Script/AutoHotKey/01.%20AutoHotKey%E5%85%A5%E9%97%A8.html","title":"AutoHotKey","lang":"zh-CN","frontmatter":{"description":"AutoHotKey 目录 入门 AutoHotKey介绍 这个软件也叫AHK，需要用脚本语言来写 官网V2 / 官网V1 官网文档（自身支持中文，主要参考） 官网论坛 【Github】AutoHotkey_L（主要分支） 软件安装后自带chm帮助手册，缺点是只支持英文，而网页版的支持中文 脚本 是个体积小巧，语法简单的语言 作用 随心所欲创建快捷键 ...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Type/Script/AutoHotKey/01.%20AutoHotKey%E5%85%A5%E9%97%A8.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"AutoHotKey"}],["meta",{"property":"og:description","content":"AutoHotKey 目录 入门 AutoHotKey介绍 这个软件也叫AHK，需要用脚本语言来写 官网V2 / 官网V1 官网文档（自身支持中文，主要参考） 官网论坛 【Github】AutoHotkey_L（主要分支） 软件安装后自带chm帮助手册，缺点是只支持英文，而网页版的支持中文 脚本 是个体积小巧，语法简单的语言 作用 随心所欲创建快捷键 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AutoHotKey\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"AutoHotKey","slug":"autohotkey","link":"#autohotkey","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"入门","slug":"入门","link":"#入门","children":[{"level":2,"title":"AutoHotKey介绍","slug":"autohotkey介绍","link":"#autohotkey介绍","children":[{"level":3,"title":"使用流程","slug":"使用流程","link":"#使用流程","children":[{"level":4,"title":"创建脚本","slug":"创建脚本","link":"#创建脚本","children":[]},{"level":4,"title":"编辑脚本","slug":"编辑脚本","link":"#编辑脚本","children":[]},{"level":4,"title":"运行脚本","slug":"运行脚本","link":"#运行脚本","children":[]}]},{"level":3,"title":"部件","slug":"部件","link":"#部件","children":[{"level":4,"title":"托盘图标","slug":"托盘图标","link":"#托盘图标","children":[]},{"level":4,"title":"主窗口","slug":"主窗口","link":"#主窗口","children":[]}]},{"level":3,"title":"安装和使用","slug":"安装和使用","link":"#安装和使用","children":[{"level":4,"title":"嵌入脚本","slug":"嵌入脚本","link":"#嵌入脚本","children":[]},{"level":4,"title":"命令行用法","slug":"命令行用法","link":"#命令行用法","children":[]},{"level":4,"title":"安装选项","slug":"安装选项","link":"#安装选项","children":[]}]}]},{"level":2,"title":"快速入门","slug":"快速入门","link":"#快速入门","children":[{"level":3,"title":"热键 & 热字串","slug":"热键-热字串","link":"#热键-热字串","children":[]},{"level":3,"title":"热键修饰符","slug":"热键修饰符","link":"#热键修饰符","children":[]},{"level":3,"title":"窗口特定的热键/热字串","slug":"窗口特定的热键-热字串","link":"#窗口特定的热键-热字串","children":[]},{"level":3,"title":"一些示例","slug":"一些示例","link":"#一些示例","children":[]},{"level":3,"title":"花括号 转义和事件","slug":"花括号-转义和事件","link":"#花括号-转义和事件","children":[]},{"level":3,"title":"弧括号","slug":"弧括号","link":"#弧括号","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":6.5,"words":1949},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Type/Script/AutoHotKey/01. AutoHotKey入门.md","autoDesc":true}');export{Q as comp,$ as data};

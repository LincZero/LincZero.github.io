import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,a}from"./app-BDO1bFk4.js";const s={},l=a(`<h1 id="autohotkey" tabindex="-1"><a class="header-anchor" href="#autohotkey"><span>AutoHotKey</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h1><h2 id="输入识别类" tabindex="-1"><a class="header-anchor" href="#输入识别类"><span>输入识别类</span></a></h2><h3 id="热键" tabindex="-1"><a class="header-anchor" href="#热键"><span>热键</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>^j::
   Send, My First Script
Return
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="热字符串" tabindex="-1"><a class="header-anchor" href="#热字符串"><span>热字符串</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>::ftw::Free the whales
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="判断窗口" tabindex="-1"><a class="header-anchor" href="#判断窗口"><span>判断窗口</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>; 无标题 - 记事本
#IfWinActive Untitled - Notepad
!q::
MsgBox, You pressed Alt+Q in Notepad.
Return

; 任何不是无标题 - 记事本的窗口
#IfWinActive
!q::
MsgBox, You pressed Alt+Q in any window.
Return

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="输出命令类" tabindex="-1"><a class="header-anchor" href="#输出命令类"><span>输出命令类</span></a></h2><p>通用格式</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>Command, 参数1, 参数2, 参数3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="send" tabindex="-1"><a class="header-anchor" href="#send"><span>Send</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>^j::
   Send, My First Script
Return
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sendinput" tabindex="-1"><a class="header-anchor" href="#sendinput"><span>SendInput</span></a></h3><p>和Send可能没区别？</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>SendInput, inside the ctrl{+}j hotkey
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="msgbox" tabindex="-1"><a class="header-anchor" href="#msgbox"><span>MsgBox</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>::btw::
   MsgBox You typed &quot;btw&quot;.
Return
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="run-运行" tabindex="-1"><a class="header-anchor" href="#run-运行"><span>Run 运行</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>Run, Notepad.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>; 运行一个程序. 注意: 大部分的程序可能需要完整路径.
Run, %A_ProgramFiles%\\Some_Program\\Program.exe

; 打开一个网址
Run, https://autohotkey.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>; 一些程序并不需要完整路径, 如 Windows 标准程序.
Run, notepad.exe
Run, msPaint.exe

; 使用 AHK 内置变量来打开 &quot;我的文档&quot;
Run, %A_MyDocuments%

; 打开一些网页:
Run, https://autohotkey.com
Run, https://www.google.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="winactivate-激活窗口" tabindex="-1"><a class="header-anchor" href="#winactivate-激活窗口"><span>Winactivate 激活窗口</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>Winactivate, Untitled - Notepad  ; 无标题 - 记事本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="winwaitactive" tabindex="-1"><a class="header-anchor" href="#winwaitactive"><span>WinWaitActive</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>WinWaitActive, Untitled - Notepad  ; 无标题 - 记事本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="内置函数类" tabindex="-1"><a class="header-anchor" href="#内置函数类"><span>内置函数类</span></a></h2><p>通用格式</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Function(参数1, 参数2, 参数3)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>SubStr(37 * 12, 1, 2)
SubStr(A_Hour - 12, 2)

MyVar := SubStr(&quot;I&#39;m scripting, awesome!&quot;, 16)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和命令的区别</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>; 这些是命令
MsgBox, This is some text.
StringReplace, Output, Input, AutoHotKey, AutoHotkey, ALL
SendInput, This is awesome{!}{!}{!}

; 这些是函数
SubStr(&quot;I&#39;m scripting, awesome!&quot;, 16)
FileExist(VariableContainingPath)
Output:=SubStr(&quot;I&#39;m scripting, awesome!&quot;, 16)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块"><span>代码块</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>if (MyVar=5)
{
   MsgBox, MyVar equals %MyVar%!!
   ExitApp
}

if (MyVar = 5)
   MsgBox, MyVar equals %MyVar%!!
   ExitApp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>MyVar = Text									; 传统文本赋值
MyVar = %MyVar2%								; 传统变量赋值
MyVar = %MyVar2% some text %MyVar3%.			; 传统混合赋值

MyVar := &quot;Text&quot;									; 表达式文本赋值
MyVar := MyVar2									; 表达式变量赋值
MyVar := 6 + 8 / 3 * 2 - Sqrt(9)				; 表达式数字赋值
MyVar := &quot;The value of 5 + &quot; MyVar2 &quot; is: &quot; 5 + MyVar2	; 表达式混合赋值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="百分号" tabindex="-1"><a class="header-anchor" href="#百分号"><span>百分号</span></a></h3><p>输出变量时要用，例如</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>MyVar = %MyVar2% some text %MyVar3%.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="获取用户输入" tabindex="-1"><a class="header-anchor" href="#获取用户输入"><span>获取用户输入</span></a></h3><h3 id="对象" tabindex="-1"><a class="header-anchor" href="#对象"><span>对象</span></a></h3><p>创建</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>MyObject := [&quot;one&quot;, &quot;two&quot;, &quot;three&quot;, 17]
Banana := {&quot;Color&quot;: &quot;Yellow&quot;, &quot;Taste&quot;: &quot;Delicious&quot;, &quot;Price&quot;: 3}
MyObject := Array(&quot;one&quot;, &quot;two&quot;, &quot;three&quot;, 17)
Banana := Object(&quot;Color&quot;, &quot;Yellow&quot;, &quot;Taste&quot;, &quot;Delicious&quot;, &quot;Price&quot;, 3)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>Banana[&quot;Pickled&quot;] := True
Banana.Consistency := &quot;Mushy&quot;

Value := Banana[&quot;Color&quot;]
Value := Banana.Color

MyObject[&quot;NewerKey&quot;] := 3.1415
MyObject.NewKey := &quot;Shiny&quot;

MyObject.InsertAt(Index, Value1, Value2, Value3...)
MyObject.Push(Value1, Value2, Value3...)
Banana.Consistency := &quot;&quot;
RemovedValue := MyObject.Delete(AnyKey)
NumberOfRemovedKeys := MyObject.Delete(FirstKey, LastKey)
MyObject.Pop()
RemovedValue := MyObject.RemoveAt(Index)
NumberOfRemovedKeys := MyObject.RemoveAt(Index, Length)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他</p><h2 id="输出技巧类" tabindex="-1"><a class="header-anchor" href="#输出技巧类"><span>输出技巧类</span></a></h2><h3 id="发送按键" tabindex="-1"><a class="header-anchor" href="#发送按键"><span>发送按键</span></a></h3><p>用<code>{}</code>括起来，不要括非按键</p><h3 id="长文本" tabindex="-1"><a class="header-anchor" href="#长文本"><span>长文本</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>Send,
(
Line 1
Line 2
Apples are a fruit.
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="其他技巧" tabindex="-1"><a class="header-anchor" href="#其他技巧"><span>其他技巧</span></a></h1><h2 id="双击-长按" tabindex="-1"><a class="header-anchor" href="#双击-长按"><span>双击 长按</span></a></h2><p>https://www.zhihu.com/question/451803614</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>Space::
Loop  ; 循环，0.4s内松开键 或 按住键超过0.4s后退出循环，state值为短按或长按的结果
{
	sleep, 20
	state := GetKeyState(&quot;Space&quot;,&quot;P&quot;)  ; 是否按住Space
	if (state = 0)
	{
		break
	}
	if (A_TimeSinceThisHotkey&gt;400)
	{
		break
	}
}
if (state = 0)						;短按
{
	if (A_PriorHotkey != &quot;Space&quot; or A_TimeSincePriorHotkey &gt; 400) ; 分别保留上次的热键名和时间
	{
		count := 1
		ToolTip, Click				;单击
	}
	else
	{
		count++
		if (count = 2)
		{
			ToolTip, Double Click	;双击,单击时的代码仍被执行一次
		}
		else if (count = 3)
		{
			ToolTip, Tri Click		;三击，单击和双击的代码仍被执行一次
		}
		else
		{
			ToolTip, More Click		;多击
		}
	}	
}
else ;长按
{
	;----长按代码段-----
	ToolTip, Long Click
	;------------------
	
	KeyWait, Space ;这句不能删，等待按键或鼠标/操纵杆按钮被松开或按下
}
return
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="经验" tabindex="-1"><a class="header-anchor" href="#经验"><span>经验</span></a></h2><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>key1::		; 一直检测

key1 up::	; 仅检测抬起

key1::
KeyWait key	; 仅检测按下
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,60),d=[l];function t(r,u){return i(),n("div",null,d)}const m=e(s,[["render",t],["__file","02. 常用命令.html.vue"]]),o=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Type/Script/AutoHotKey/02.%20%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html","title":"AutoHotKey","lang":"zh-CN","frontmatter":{"description":"AutoHotKey 目录 常用命令 输入识别类 热键 热字符串 判断窗口 输出命令类 通用格式 Send SendInput 和Send可能没区别？ MsgBox Run 运行 Winactivate 激活窗口 WinWaitActive 内置函数类 通用格式 例如 和命令的区别 代码块 变量 百分号 输出变量时要用，例如 获取用户输入 对象 创建 ...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Type/Script/AutoHotKey/02.%20%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"AutoHotKey"}],["meta",{"property":"og:description","content":"AutoHotKey 目录 常用命令 输入识别类 热键 热字符串 判断窗口 输出命令类 通用格式 Send SendInput 和Send可能没区别？ MsgBox Run 运行 Winactivate 激活窗口 WinWaitActive 内置函数类 通用格式 例如 和命令的区别 代码块 变量 百分号 输出变量时要用，例如 获取用户输入 对象 创建 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AutoHotKey\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"AutoHotKey","slug":"autohotkey","link":"#autohotkey","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[{"level":2,"title":"输入识别类","slug":"输入识别类","link":"#输入识别类","children":[{"level":3,"title":"热键","slug":"热键","link":"#热键","children":[]},{"level":3,"title":"热字符串","slug":"热字符串","link":"#热字符串","children":[]},{"level":3,"title":"判断窗口","slug":"判断窗口","link":"#判断窗口","children":[]}]},{"level":2,"title":"输出命令类","slug":"输出命令类","link":"#输出命令类","children":[{"level":3,"title":"Send","slug":"send","link":"#send","children":[]},{"level":3,"title":"SendInput","slug":"sendinput","link":"#sendinput","children":[]},{"level":3,"title":"MsgBox","slug":"msgbox","link":"#msgbox","children":[]},{"level":3,"title":"Run 运行","slug":"run-运行","link":"#run-运行","children":[]},{"level":3,"title":"Winactivate 激活窗口","slug":"winactivate-激活窗口","link":"#winactivate-激活窗口","children":[]},{"level":3,"title":"WinWaitActive","slug":"winwaitactive","link":"#winwaitactive","children":[]}]},{"level":2,"title":"内置函数类","slug":"内置函数类","link":"#内置函数类","children":[{"level":3,"title":"代码块","slug":"代码块","link":"#代码块","children":[]},{"level":3,"title":"变量","slug":"变量","link":"#变量","children":[]},{"level":3,"title":"百分号","slug":"百分号","link":"#百分号","children":[]},{"level":3,"title":"获取用户输入","slug":"获取用户输入","link":"#获取用户输入","children":[]},{"level":3,"title":"对象","slug":"对象","link":"#对象","children":[]}]},{"level":2,"title":"输出技巧类","slug":"输出技巧类","link":"#输出技巧类","children":[{"level":3,"title":"发送按键","slug":"发送按键","link":"#发送按键","children":[]},{"level":3,"title":"长文本","slug":"长文本","link":"#长文本","children":[]}]}]},{"level":1,"title":"其他技巧","slug":"其他技巧","link":"#其他技巧","children":[{"level":2,"title":"双击 长按","slug":"双击-长按","link":"#双击-长按","children":[]},{"level":2,"title":"经验","slug":"经验","link":"#经验","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.58,"words":773},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Type/Script/AutoHotKey/02. 常用命令.md","autoDesc":true}');export{m as comp,o as data};

import{_ as t,c as o,e as a,a as l,d as s,b as p,w as i,r as c,o as r}from"./app-D5EhND04.js";const u={};function d(v,n){const e=c("RouteLink");return r(),o("div",null,[n[3]||(n[3]=a(`<h1 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode"><span>VSCode</span></a></h1><h2 id="编辑类" tabindex="-1"><a class="header-anchor" href="#编辑类"><span>编辑类</span></a></h2><h3 id="提升效率" tabindex="-1"><a class="header-anchor" href="#提升效率"><span>提升效率</span></a></h3><h3 id="快捷键" tabindex="-1"><a class="header-anchor" href="#快捷键"><span>快捷键</span></a></h3><table><thead><tr><th>快捷键</th><th>功能</th></tr></thead><tbody><tr><td>F1</td><td>打开VSCode命令行（不是cmd命令行），往往配合插件使用</td></tr><tr><td>Ctrl+Shift+P</td><td>编辑器设置的命令行</td></tr></tbody></table><h2 id="扩展类" tabindex="-1"><a class="header-anchor" href="#扩展类"><span>扩展类</span></a></h2><h3 id="vscode摸鱼" tabindex="-1"><a class="header-anchor" href="#vscode摸鱼"><span>VSCode摸鱼</span></a></h3><p>百度就会给你介绍很多花式摸鱼的VS插件</p><p>比如</p><ul><li>QQ，能让你在VSCode里聊QQ</li><li>小霸王</li><li>daily anime，追番</li></ul><h2 id="界面类" tabindex="-1"><a class="header-anchor" href="#界面类"><span>界面类</span></a></h2><h3 id="大纲显示的筛选" tabindex="-1"><a class="header-anchor" href="#大纲显示的筛选"><span>大纲显示的筛选</span></a></h3><p>优化大纲显示</p><p>① 首先我觉得排序依据选位置会好一点（默认是根据类型）</p><p>② 其次，如何在VS代码中配置python大纲模式以仅显示类和方法？</p><p><kbd>CtrlShift</kbd> + <kbd>P</kbd>，输入：<code>Perferences: Open Settings (JSON)</code>（首选项：打开设置 (json) ）添加或修改代码：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token comment">// 推荐屏蔽项：</span>
<span class="token property">&quot;outline.showVariables&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>  	<span class="token comment">// 只显示到函数名，看不到变量（包括全局和类/函数的局部），图标是蓝色的[]中间有个cube</span>
<span class="token property">&quot;outline.showProperties&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>	<span class="token comment">// {}里键值对的键就不显示了，图标是个灰色板手</span>
<span class="token property">&quot;outline.showFunctions&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>     <span class="token comment">// ？包括方法内隐式定义的callback匿名函数，图标和类方法一样，是个紫色的cube</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他扩展选项：（但是话说怎么没有 outline.showVariables 项）</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>outline.showArrays
outline.showBooleans
<span class="token comment">// outline.showClasses		// class 类，刚需</span>
outline.showConstants
outline.showConstructors
outline.showEnums
outline.showEvents
outline.showFields
outline.showFiles

outline.showKeys
<span class="token comment">// outline.showMethods		// 类方法 (紫色立方)，刚需</span>
outline.showModules
outline.showNamespaces
outline.showNull
outline.showNumbers
outline.showObjects
outline.showOperators
outline.showPackages
outline.showStrings
outline.showStructs
outline.showTypeParameters

outline.showFunctions		  <span class="token comment">// 函数 (紫色立方)。包括匿名函数(名字为&lt;function&gt;)</span>
outline.showVariables     <span class="token comment">// 变量 (蓝色中括)。</span>
outline.showProperties		<span class="token comment">// 属性 (灰色板手)。{}里键值对的键。一般不打开</span>
<span class="token comment">// outline.showInterfaces	// interface 接口 (蓝色的一空一实心的)。刚需</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="大纲显示的筛选-新" tabindex="-1"><a class="header-anchor" href="#大纲显示的筛选-新"><span>大纲显示的筛选 (新)</span></a></h3><p>新版补充：以前配置JSON是不分 User Setting、Default Setting、Workspace Setting 的，现在分了。</p><p>打开Default Setting就能看到各个配置，而且都有默认值和注释（我的似乎是默认注释就是中文的，如果不是，也可以用Comment Tranlate插件。挺清晰明了的）</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>	<span class="token comment">// 控制大纲项是折叠还是展开。</span>
	<span class="token comment">//  - alwaysCollapse: 折叠所有项。</span>
	<span class="token comment">//  - alwaysExpand: 展开所有项。</span>
	<span class="token property">&quot;outline.collapseItems&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alwaysExpand&quot;</span><span class="token punctuation">,</span>

	<span class="token comment">// 使用图标呈现大纲元素。</span>
	<span class="token property">&quot;outline.icons&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token comment">// 对大纲元素的错误和警告使用锁屏提醒。被关闭时由 \`problems.visibility\` 覆盖。</span>
	<span class="token property">&quot;outline.problems.badges&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token comment">// 对大纲元素的错误和警告使用颜色。被关闭时由 \`problems.visibility\` 覆盖。</span>
	<span class="token property">&quot;outline.problems.colors&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token comment">// 显示大纲元素上的错误和警告。被关闭时由 \`problems.visibility\` 覆盖。</span>
	<span class="token property">&quot;outline.problems.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token comment">// 启用后，大纲将显示 \`array\` 符号。</span>
	<span class="token property">&quot;outline.showArrays&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token comment">// 启用后，大纲将显示 \`boolean\` 符号。</span>
	<span class="token property">&quot;outline.showBooleans&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token comment">// 启用后，大纲将显示 \`class\` 符号。</span>
	<span class="token property">&quot;outline.showClasses&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token comment">// 启用后，大纲将显示\`constant\`符号。</span>
	<span class="token property">&quot;outline.showConstants&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token comment">// 启用大纲时，大纲将显示 \`constructor\` 符号。</span>
	<span class="token property">&quot;outline.showConstructors&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token comment">// 启用后，大纲将显示 \`enumMember\` 符号。</span>
	<span class="token property">&quot;outline.showEnumMembers&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token comment">// 启用后，大纲将显示 \`enum\` 符号。</span>
	<span class="token property">&quot;outline.showEnums&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token comment">// 启用后，大纲将显示 \`event\` 符号。</span>
	<span class="token property">&quot;outline.showEvents&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token comment">// 启用时，大纲将显示 \`field\`符号。</span>
	<span class="token property">&quot;outline.showFields&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token comment">// 启用后，大纲将显示 \`file\` 符号。</span>
	<span class="token property">&quot;outline.showFiles&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token comment">// 启用时，大纲将显示 \`function\` 符号。</span>
	<span class="token property">&quot;outline.showFunctions&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token comment">// 启用后，大纲将显示 \`interface\` 符号。</span>
	<span class="token property">&quot;outline.showInterfaces&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token comment">// 启用后，大纲将显示 \`key\`符号。</span>
	<span class="token property">&quot;outline.showKeys&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token comment">// 启用后，大纲将显示 \`method\` 符号。</span>
	<span class="token property">&quot;outline.showMethods&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token comment">// 启用后，大纲将显示 \`module\` 符号。</span>
	<span class="token property">&quot;outline.showModules&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token comment">// 启用后，大纲将显示 \`namespace\` 符号。</span>
	<span class="token property">&quot;outline.showNamespaces&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token comment">// 启用后，大纲将显示 \`null\` 符号。</span>
	<span class="token property">&quot;outline.showNull&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token comment">// 启用后，大纲将显示 \`number\` 符号。</span>
	<span class="token property">&quot;outline.showNumbers&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token comment">// 启用后，大纲将显示 \`object\` 符号。</span>
	<span class="token property">&quot;outline.showObjects&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token comment">// 启用时，大纲显示 \`operator\` 符号。</span>
	<span class="token property">&quot;outline.showOperators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token comment">// 启用后，大纲将显示 \`package\` 符号。</span>
	<span class="token property">&quot;outline.showPackages&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token comment">// 启用后，大纲将显示 \`property\` 符号。</span>
	<span class="token property">&quot;outline.showProperties&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token comment">// 启用后，大纲将显示 \`string\` 符号。</span>
	<span class="token property">&quot;outline.showStrings&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token comment">// 启用后，大纲将显示\`struct\` 符号。</span>
	<span class="token property">&quot;outline.showStructs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token comment">// 启用后，大纲将显示 \`typeParameter\` 符号。</span>
	<span class="token property">&quot;outline.showTypeParameters&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	<span class="token comment">// 启用后，大纲将显示 \`variable\` 符号。</span>
	<span class="token property">&quot;outline.showVariables&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置类" tabindex="-1"><a class="header-anchor" href="#配置类"><span>配置类</span></a></h2><p>部分见上面界面类</p>`,25)),l("p",null,[n[1]||(n[1]=s("尤其是可分享状态，见 ")),p(e,{to:"/MdNote_Public/01. DesignAndDevelop/Develop/03. Tools/02. 管理层/02. 多文件多目录管理/辅助文件/平台配置/dot vscode.html"},{default:i(()=>n[0]||(n[0]=[s("dot vscode")])),_:1}),n[2]||(n[2]=s(" 笔记"))]),n[4]||(n[4]=a(`<h2 id="我的user-setting" tabindex="-1"><a class="header-anchor" href="#我的user-setting"><span>我的User Setting</span></a></h2><p>LincZero的个人配置</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token comment">// -------------- 大纲部分 --------------------------------------</span>
    <span class="token property">&quot;outline.collapseItems&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alwaysCollapse&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// 折叠</span>
    <span class="token property">&quot;outline.showVariables&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>     <span class="token comment">// 变量 (蓝色中括)。按需打开</span>
    <span class="token property">&quot;outline.showProperties&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>    <span class="token comment">// 属性 (紫色立方)。按需打开</span>
    <span class="token comment">// &quot;outline.showFunctions&quot;: false,  // 函数 (灰色扳手)。这个一般都要打开，但包括匿名函数</span>

    <span class="token comment">// 只看类则删掉注释</span>
    <span class="token comment">// &quot;editor.columnSelection&quot;: false, // </span>
    
    <span class="token comment">// &quot;outline.showMethods&quot;: false,    // 类方法，刚需</span>
    <span class="token comment">// &quot;outline.showClasses&quot;: false,    // class 类，刚需</span>
    <span class="token comment">// &quot;outline.showInterfaces&quot;: false, // interface 接口，刚需</span>

    <span class="token comment">// -------------- 其他部分 --------------------------------------</span>
    <span class="token property">&quot;terminal.integrated.fontFamily&quot;</span><span class="token operator">:</span> <span class="token string">&quot;monospace&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;remote.SSH.remotePlatform&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;192.168.56.20&quot;</span><span class="token operator">:</span> <span class="token string">&quot;linux&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;files.associations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;*.kbd&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lisp&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;*.ahk&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lisp&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// -------------- 扩展部分 --------------------------------------</span>
    <span class="token property">&quot;commentTranslate.targetLanguage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;commentTranslate.hover.nearShow&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;commentTranslate.browse.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;commentTranslate.ignore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>

        <span class="token punctuation">{</span>
            <span class="token property">&quot;languageId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript,typescript,javascriptreact,typescriptreact&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;regular&quot;</span><span class="token operator">:</span> <span class="token string">&quot;[\\\\*\\\\s]+&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;languageId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dart&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;regular&quot;</span><span class="token operator">:</span> <span class="token string">&quot;[\\\\s|/]+&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;commentTranslate.browse.mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;inplace&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;commentTranslate.sourceLanguage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;en&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3))])}const k=t(u,[["render",d],["__file","VSCode.html.vue"]]),b=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Develop/10.%20%E4%B8%93%E9%A2%98/IDESoft/VSCode.html","title":"VSCode","lang":"zh-CN","frontmatter":{"description":"VSCode 编辑类 提升效率 快捷键 扩展类 VSCode摸鱼 百度就会给你介绍很多花式摸鱼的VS插件 比如 QQ，能让你在VSCode里聊QQ 小霸王 daily anime，追番 界面类 大纲显示的筛选 优化大纲显示 ① 首先我觉得排序依据选位置会好一点（默认是根据类型） ② 其次，如何在VS代码中配置python大纲模式以仅显示类和方法？ Ct...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/01.%20DesignAndDevelop/Develop/10.%20%E4%B8%93%E9%A2%98/IDESoft/VSCode.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"VSCode"}],["meta",{"property":"og:description","content":"VSCode 编辑类 提升效率 快捷键 扩展类 VSCode摸鱼 百度就会给你介绍很多花式摸鱼的VS插件 比如 QQ，能让你在VSCode里聊QQ 小霸王 daily anime，追番 界面类 大纲显示的筛选 优化大纲显示 ① 首先我觉得排序依据选位置会好一点（默认是根据类型） ② 其次，如何在VS代码中配置python大纲模式以仅显示类和方法？ Ct..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"VSCode\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"VSCode","slug":"vscode","link":"#vscode","children":[{"level":2,"title":"编辑类","slug":"编辑类","link":"#编辑类","children":[{"level":3,"title":"提升效率","slug":"提升效率","link":"#提升效率","children":[]},{"level":3,"title":"快捷键","slug":"快捷键","link":"#快捷键","children":[]}]},{"level":2,"title":"扩展类","slug":"扩展类","link":"#扩展类","children":[{"level":3,"title":"VSCode摸鱼","slug":"vscode摸鱼","link":"#vscode摸鱼","children":[]}]},{"level":2,"title":"界面类","slug":"界面类","link":"#界面类","children":[{"level":3,"title":"大纲显示的筛选","slug":"大纲显示的筛选","link":"#大纲显示的筛选","children":[]},{"level":3,"title":"大纲显示的筛选 (新)","slug":"大纲显示的筛选-新","link":"#大纲显示的筛选-新","children":[]}]},{"level":2,"title":"配置类","slug":"配置类","link":"#配置类","children":[]},{"level":2,"title":"我的User Setting","slug":"我的user-setting","link":"#我的user-setting","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.82,"words":1147},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Develop/10. 专题/IDESoft/VSCode.md","excerpt":"\\n<h2>编辑类</h2>\\n<h3>提升效率</h3>\\n<h3>快捷键</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>快捷键</th>\\n<th>功能</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>F1</td>\\n<td>打开VSCode命令行（不是cmd命令行），往往配合插件使用</td>\\n</tr>\\n<tr>\\n<td>Ctrl+Shift+P</td>\\n<td>编辑器设置的命令行</td>\\n</tr>\\n</tbody>\\n</table>\\n<h2>扩展类</h2>\\n<h3>VSCode摸鱼</h3>\\n<p>百度就会给你介绍很多花式摸鱼的VS插件</p>","autoDesc":true,"bioChainData":{"outlink":[{"title":"dot vscode","link":"MdNote_Public/01. DesignAndDevelop/Develop/03. Tools/02. 管理层/02. 多文件多目录管理/辅助文件/平台配置/dot vscode.html"}],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/01. DesignAndDevelop/Develop/10. 专题/IDESoft/VSCode.md","value":{"title":"VSCode","path":"MdNote_Public/01. DesignAndDevelop/Develop/10. 专题/IDESoft/VSCode.md","outlink":["MdNote_Public/01. DesignAndDevelop/Develop/03. Tools/02. 管理层/02. 多文件多目录管理/辅助文件/平台配置/dot vscode.md"],"backlink":[]}},{"id":"MdNote_Public/01. DesignAndDevelop/Develop/03. Tools/02. 管理层/02. 多文件多目录管理/辅助文件/平台配置/dot vscode.md","value":{"title":"dot vscode","path":"MdNote_Public/01. DesignAndDevelop/Develop/03. Tools/02. 管理层/02. 多文件多目录管理/辅助文件/平台配置/dot vscode.md","outlink":[],"backlink":[]}}],"links":[{"source":"MdNote_Public/01. DesignAndDevelop/Develop/10. 专题/IDESoft/VSCode.md","target":"MdNote_Public/01. DesignAndDevelop/Develop/03. Tools/02. 管理层/02. 多文件多目录管理/辅助文件/平台配置/dot vscode.md"}]}}}');export{k as comp,b as data};

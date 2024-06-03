import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,a as s}from"./app-BAt33Ddg.js";const i={},l=s(`<h1 id="《c-设计模式》视频-李建忠" tabindex="-1"><a class="header-anchor" href="#《c-设计模式》视频-李建忠"><span>《C++设计模式》视频_李建忠</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><p>[toc]</p><h1 id="命令模式-command" tabindex="-1"><a class="header-anchor" href="#命令模式-command"><span>命令模式 Command</span></a></h1><h2 id="所属分类——-行为变化-模式" tabindex="-1"><a class="header-anchor" href="#所属分类——-行为变化-模式"><span>所属分类——“行为变化” 模式</span></a></h2><ul><li>“行为变化” 模式 <ul><li>在组件的构建过程中，组件行为的变化经常导致组件本身剧烈的变化。 “行为变化” 模式将<strong>组件的行为和组件本身进行解耦</strong>，从而支持组件行为的变化，实现两者之间的松耦合。</li></ul></li><li>典型模式 <ul><li>命令模式 Command</li><li>访问器模式 Visitor</li></ul></li></ul><h2 id="动机-motivation" tabindex="-1"><a class="header-anchor" href="#动机-motivation"><span>动机（Motivation）</span></a></h2><h3 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h3><ul><li>在软件构建过程中，<strong>“行为请求者” 与 “行为实现者&quot; 通常呈现一种 “紧耦合”</strong>。 但在某些场合——比如需要对行为进行 “记录、撤销/重做(undo/redo)、事务” 等处理，这种无法抵御变化的紧耦合是不合适的。</li><li>在这种情况下，如何将 “行为请求者” 与 “行为实现者” 解耦？ 将一组行为抽象为对象，可以实现二者之间的松耦合。</li></ul><h3 id="代码体现" tabindex="-1"><a class="header-anchor" href="#代码体现"><span>代码体现</span></a></h3><h4 id="举例-命令模式代码" tabindex="-1"><a class="header-anchor" href="#举例-命令模式代码"><span>举例 - 命令模式代码</span></a></h4><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;vector&gt;
#include &lt;string&gt;
using namespace std;

// 命令类的抽象基类
class Command
{
public:
	virtual void execute() = 0;			// 执行
};

// 继承命令类，表示一个行为对象
class ConcreteCommand1 : public Command
{
	string arg;
public:
	ConcreteCommand1(const string &amp; a) : arg(a) {}
    void execute() override
    {
		cout&lt;&lt; &quot;#1 process...&quot; &lt;&lt;arg&lt;&lt;endl;
	}
};

class ConcreteCommand2 : public Command
{
	string arg;
public:
	ConcreteCommand2(const string &amp; a) : arg(a) {}
    void execute() override
    {
		cout&lt;&lt; &quot;#2 process...&quot; &lt;&lt;arg&lt;&lt;endl;
	}
};

// 命令组合，命令组合也属于命令。继承命令类抽象基类的同时又使用容器来包含这些命令
class MacroCommand : public Command
{
	vector&lt;Command*&gt; commands;			// 包含命令的vector容器
public:
	void addCommand(Command *c) { commands.push_back(c); }
    void execute() override
	{
		for (auto &amp;c : commands){		// 遍历命令类
			c-&gt;execute();
		}
	}
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行函数</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>int main( ){
	ConcreteCommand1 command1(receiver, &quot;Arg###&quot;);	// 命令1
    ConcreteCommand2 command2(receiver, &quot;Arg$$$&quot;);	// 命令2
    
    MacroCommand macro;								// 命令组合。并往内添加命令1和命令2
	macro.addCommand(&amp;command1);
    macro.addCommand(&amp;command2);
    macro.execute();								// 遍历执行命令组合
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分析-命令模式代码" tabindex="-1"><a class="header-anchor" href="#分析-命令模式代码"><span>分析 - 命令模式代码</span></a></h4><p>这些命令是行为，但又以对象的形式出现，这使这些命令有高的扩展、灵活性、解耦性</p><h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式"><span>设计模式</span></a></h2><h3 id="模式定义" tabindex="-1"><a class="header-anchor" href="#模式定义"><span>模式定义</span></a></h3><blockquote><p>将一个<strong>请求（行为）封装为一个对象</strong>，从而使你可用不同的请求对客户进行参数化；对请求排队或记录请求日志，以及支持可撤销的操作。</p><p>——《设计模式》GoF</p></blockquote><h3 id="结构-structure" tabindex="-1"><a class="header-anchor" href="#结构-structure"><span>结构（Structure）</span></a></h3><p>（红色表示稳定）</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
<span class="token keyword">subgraph</span> Command 命令类的抽象基类
	B<span class="token text string">[Execute]</span><span class="token punctuation">;</span>class B red
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> ConcreteCommand 命令类的具体类
	BA1<span class="token text string">[Execute]</span>
	BA2<span class="token text string">[state]</span>
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> Receiver 命令接收器
	C<span class="token text string">[Action]</span>
<span class="token keyword">end</span>

B<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>BA1
Client<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">调用</span><span class="token arrow operator">--&gt;</span></span>C
Client<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">包含</span><span class="token arrow operator">.-&gt;</span></span>BA2
BA1<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">receiver 被接收</span><span class="token arrow operator">--&gt;</span></span>C
Invoker<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">包含指针</span><span class="token arrow operator">.-&gt;</span></span>B

<span class="token keyword">classDef</span> red <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f9f<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>4px</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="要点总结" tabindex="-1"><a class="header-anchor" href="#要点总结"><span>要点总结</span></a></h3><ul><li>Command模式的根本目的在于将 “行为请求者” 与 “行为实现者” 解耦，在面向对象语言中，常见的实现手段是 “将行为抽象为对象”</li><li>实现Command接口的具体命令对象ConcreteCommand有时候根据需要可能会保存一些额外的状态信息。 通过使用Composite模式，<strong>可以将多个 “命令” 封装为一个 “复合命令”</strong> MacroCommand</li><li>Command模式与C++中的函数对象有些类似。但两者定义行为接口的规范有所区别： <ul><li>Command以面向对象中的 “接口-实现&quot; 来定义行为接口规范，更严格，但有性能损失；（运行时多态，在C++中略过时，但在其他语言有极大的应用）</li><li>C++函数对象以函数签名来定义行为接口规范，更灵活，性能更高（编译时绑定、编译时多态）</li></ul></li></ul>`,24),t=[l];function r(d,o){return e(),a("div",null,t)}const p=n(i,[["render",r],["__file","21. 命令模式 Command.html.vue"]]),v=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/21.%20%E5%91%BD%E4%BB%A4%E6%A8%A1%E5%BC%8F%20Command.html","title":"《C++设计模式》视频_李建忠","lang":"zh-CN","frontmatter":{"description":"《C++设计模式》视频_李建忠 目录 [toc] 命令模式 Command 所属分类——“行为变化” 模式 “行为变化” 模式 在组件的构建过程中，组件行为的变化经常导致组件本身剧烈的变化。 “行为变化” 模式将组件的行为和组件本身进行解耦，从而支持组件行为的变化，实现两者之间的松耦合。 典型模式 命令模式 Command 访问器模式 Visitor ...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/21.%20%E5%91%BD%E4%BB%A4%E6%A8%A1%E5%BC%8F%20Command.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"《C++设计模式》视频_李建忠"}],["meta",{"property":"og:description","content":"《C++设计模式》视频_李建忠 目录 [toc] 命令模式 Command 所属分类——“行为变化” 模式 “行为变化” 模式 在组件的构建过程中，组件行为的变化经常导致组件本身剧烈的变化。 “行为变化” 模式将组件的行为和组件本身进行解耦，从而支持组件行为的变化，实现两者之间的松耦合。 典型模式 命令模式 Command 访问器模式 Visitor ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《C++设计模式》视频_李建忠\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"《C++设计模式》视频_李建忠","slug":"《c-设计模式》视频-李建忠","link":"#《c-设计模式》视频-李建忠","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"命令模式 Command","slug":"命令模式-command","link":"#命令模式-command","children":[{"level":2,"title":"所属分类——“行为变化” 模式","slug":"所属分类——-行为变化-模式","link":"#所属分类——-行为变化-模式","children":[]},{"level":2,"title":"动机（Motivation）","slug":"动机-motivation","link":"#动机-motivation","children":[{"level":3,"title":"简概","slug":"简概","link":"#简概","children":[]},{"level":3,"title":"代码体现","slug":"代码体现","link":"#代码体现","children":[{"level":4,"title":"举例 - 命令模式代码","slug":"举例-命令模式代码","link":"#举例-命令模式代码","children":[]},{"level":4,"title":"分析 - 命令模式代码","slug":"分析-命令模式代码","link":"#分析-命令模式代码","children":[]}]}]},{"level":2,"title":"设计模式","slug":"设计模式","link":"#设计模式","children":[{"level":3,"title":"模式定义","slug":"模式定义","link":"#模式定义","children":[]},{"level":3,"title":"结构（Structure）","slug":"结构-structure","link":"#结构-structure","children":[]},{"level":3,"title":"要点总结","slug":"要点总结","link":"#要点总结","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3,"words":899},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/03. Tools/02. 管理层/01. 多类管理/设计模式/《C++设计模式》视频_李建忠/21. 命令模式 Command.md","autoDesc":true}');export{p as comp,v as data};

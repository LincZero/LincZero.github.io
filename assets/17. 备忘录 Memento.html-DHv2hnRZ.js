import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as t,a}from"./app-Ld2qzqw_.js";const i={},s=a(`<h1 id="《c-设计模式》视频-李建忠" tabindex="-1"><a class="header-anchor" href="#《c-设计模式》视频-李建忠"><span>《C++设计模式》视频_李建忠</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><p>[toc]</p><h1 id="备忘录-memento" tabindex="-1"><a class="header-anchor" href="#备忘录-memento"><span>备忘录 Memento</span></a></h1><p>英语小笔记</p><ul><li>-mem-，记录记忆的意思 <ul><li><strong>mem</strong>ento，备忘录，纪念品</li><li><strong>mem</strong>ory，记忆，内存</li><li><strong>mem</strong>ber，成员、家庭成员</li><li>re<strong>mem</strong>ber，记得 <ul><li>remind，提醒</li><li>remaid，剩下</li></ul></li></ul></li></ul><h2 id="所属分类——-状态变化-模式" tabindex="-1"><a class="header-anchor" href="#所属分类——-状态变化-模式"><span>所属分类——“状态变化” 模式</span></a></h2><p>略</p><h2 id="动机-motivation" tabindex="-1"><a class="header-anchor" href="#动机-motivation"><span>动机（Motivation）</span></a></h2><h3 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h3><ul><li>在软件构建过程中，某些对象的状态在转换过程中，可能由于某种需要，要求程序能够<strong>回溯到对象之前处于某个点时的状态</strong>。 如果使用一些公有接口来让其他对象得到对象的状态，便会暴露对象的细节实现。</li><li>如何实现对象状态的良好保存与恢复？但同时又不会因此而破坏对象本身的封装性。</li></ul><h3 id="代码体现" tabindex="-1"><a class="header-anchor" href="#代码体现"><span>代码体现</span></a></h3><p>需要给对象拍一个快照</p><h4 id="举例-代码-备忘录模式" tabindex="-1"><a class="header-anchor" href="#举例-代码-备忘录模式"><span>举例 - 代码（备忘录模式）</span></a></h4><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class Memento									// 备忘录类
{
	string state;
    //...
public:
	Memento(const string &amp; s) : state(s) {}		// 存入状态
    string getState() const {return state;}		// 取出状态
	void setstate(const string &amp; s){state = s;}	// 存入状态（此处该函数同构造函数）
};

class 0riginator								// 起源，需要被保存的类
{
	string state;
    //...
public:
	0riginator() {}
	Memento createMomento( ) {					// 【快照】
		Memento m(state) ;						// 传入state，并创建备忘录类。这个过程实际中可能会比较复杂
		return m;
	}
	void setMomento(const Memento &amp; m) {		// 【恢复】
        state = m.getState();					// 从备忘录中恢复状态
    }
};

int main()
{
    Originator orginator;
    
    // 存储到备忘录
    Memento mem = orginator.createMomento();
    
    // ... 改变orginator状态
    
    // 从备忘录中恢复
    orginator.setMomento(memento);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式"><span>设计模式</span></a></h2><h3 id="模式定义" tabindex="-1"><a class="header-anchor" href="#模式定义"><span>模式定义</span></a></h3><blockquote><p>在不破坏封装性的前提下，捕获一个对象的内部状态，并在该<strong>对象之外保存</strong>这个状态。这样以后就可以将该对象恢复到原先保存的状态。</p><p>——《设计模式》GoF</p></blockquote><h3 id="结构-structure" tabindex="-1"><a class="header-anchor" href="#结构-structure"><span>结构（Structure）</span></a></h3><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
<span class="token keyword">subgraph</span> Originator 原发器 需要被保存的类
	A1<span class="token text string">[SetMemento 取回被设置备忘录]</span>
	A2<span class="token text string">[CreateMemento 创建备忘录]</span>
	A3<span class="token text string">[state 用来存储当前状态]</span>
	
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> Memento 备忘录类
	B1<span class="token text string">[Getstate]</span>
	B2<span class="token text string">[SetState]</span>
	B3<span class="token text string">[state 用来存储当前状态]</span>
<span class="token keyword">end</span>
A1<span class="token arrow operator">-.-&gt;</span>A4<span class="token punctuation">(</span>state = m<span class="token arrow operator">-&gt;</span>GetState<span class="token punctuation">)</span>
A2<span class="token arrow operator">-.-&gt;</span>A5<span class="token text string">(return new Memento)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
Originator<span class="token arrow operator">-.-&gt;</span>Memento
Caretaker运行备忘录的主函数<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">包含指针</span><span class="token arrow operator">.-&gt;</span></span>Memento
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="要点总结" tabindex="-1"><a class="header-anchor" href="#要点总结"><span>要点总结</span></a></h3><ul><li>备忘录（Memento）存储原发器（Originator）对象的内部状态，在需要时恢复原发器状态</li><li>Memento模式的核心是信息隐藏，即Originator需要向外接隐藏信息，保持其封装性。但同时又需要将状态保持到外界（Memento）</li><li>由于现代语言运行时（如C#、Java等）都具有相当的对象序列化支持，因此往往采用效率较高、又较容易正确实现的序列化方案来实现Memento模式</li></ul><h3 id="个人总结" tabindex="-1"><a class="header-anchor" href="#个人总结"><span>个人总结</span></a></h3><p>（<strong>有人认为这种模式比较过时</strong>，毕竟这种模式是94年提出来的，95年才有Java。Java好像可以用反射来做？）</p><p>这个模式理解起来挺简单的，实现可能会比较复杂。也有点像原型模式</p>`,26),l=[s];function r(o,d){return n(),t("div",null,l)}const v=e(i,[["render",r],["__file","17. 备忘录 Memento.html.vue"]]),p=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/17.%20%E5%A4%87%E5%BF%98%E5%BD%95%20Memento.html","title":"《C++设计模式》视频_李建忠","lang":"zh-CN","frontmatter":{"description":"《C++设计模式》视频_李建忠 目录 [toc] 备忘录 Memento 英语小笔记 -mem-，记录记忆的意思 memento，备忘录，纪念品 memory，记忆，内存 member，成员、家庭成员 remember，记得 remind，提醒 remaid，剩下 所属分类——“状态变化” 模式 略 动机（Motivation） 简概 在软件构建过程中...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/17.%20%E5%A4%87%E5%BF%98%E5%BD%95%20Memento.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"《C++设计模式》视频_李建忠"}],["meta",{"property":"og:description","content":"《C++设计模式》视频_李建忠 目录 [toc] 备忘录 Memento 英语小笔记 -mem-，记录记忆的意思 memento，备忘录，纪念品 memory，记忆，内存 member，成员、家庭成员 remember，记得 remind，提醒 remaid，剩下 所属分类——“状态变化” 模式 略 动机（Motivation） 简概 在软件构建过程中..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《C++设计模式》视频_李建忠\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"《C++设计模式》视频_李建忠","slug":"《c-设计模式》视频-李建忠","link":"#《c-设计模式》视频-李建忠","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"备忘录 Memento","slug":"备忘录-memento","link":"#备忘录-memento","children":[{"level":2,"title":"所属分类——“状态变化” 模式","slug":"所属分类——-状态变化-模式","link":"#所属分类——-状态变化-模式","children":[]},{"level":2,"title":"动机（Motivation）","slug":"动机-motivation","link":"#动机-motivation","children":[{"level":3,"title":"简概","slug":"简概","link":"#简概","children":[]},{"level":3,"title":"代码体现","slug":"代码体现","link":"#代码体现","children":[{"level":4,"title":"举例 - 代码（备忘录模式）","slug":"举例-代码-备忘录模式","link":"#举例-代码-备忘录模式","children":[]}]}]},{"level":2,"title":"设计模式","slug":"设计模式","link":"#设计模式","children":[{"level":3,"title":"模式定义","slug":"模式定义","link":"#模式定义","children":[]},{"level":3,"title":"结构（Structure）","slug":"结构-structure","link":"#结构-structure","children":[]},{"level":3,"title":"要点总结","slug":"要点总结","link":"#要点总结","children":[]},{"level":3,"title":"个人总结","slug":"个人总结","link":"#个人总结","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.52,"words":756},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/03. Tools/02. 管理层/01. 多类管理/设计模式/《C++设计模式》视频_李建忠/17. 备忘录 Memento.md","autoDesc":true}');export{v as comp,p as data};

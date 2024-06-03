import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,a as s}from"./app-DVIBfMrr.js";const i="/assets/image-20210516095412297-DQ6vIDwA.png",t={},l=s('<h1 id="《c-设计模式》视频-李建忠" tabindex="-1"><a class="header-anchor" href="#《c-设计模式》视频-李建忠"><span>《C++设计模式》视频_李建忠</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><p>[toc]</p><h1 id="适配器-adapter" tabindex="-1"><a class="header-anchor" href="#适配器-adapter"><span>适配器 Adapter</span></a></h1><h2 id="所属分类——-接口隔离-模式" tabindex="-1"><a class="header-anchor" href="#所属分类——-接口隔离-模式"><span>所属分类——“接口隔离” 模式</span></a></h2><p>略</p><h2 id="动机-motivation" tabindex="-1"><a class="header-anchor" href="#动机-motivation"><span>动机（Motivation）</span></a></h2><h3 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h3><ul><li>在软件系统中，由于<strong>应用环境的变化</strong>，常常需要将 “一些现存的对象&quot; 放在新的环境中应用，但是新环境要求的接口是这些现存对象所不满足的 （老东西放到新环境中去使用）</li><li>如何应对这种 “迁移的变化&quot; ？如何既能利用现有对象的良好实现，同时又能满足新的应用环境所要求的接口？</li></ul><h3 id="应用体现" tabindex="-1"><a class="header-anchor" href="#应用体现"><span>应用体现</span></a></h3><p>举例</p><figure><img src="'+i+`" alt="image-20210516095412297" tabindex="0" loading="lazy"><figcaption>image-20210516095412297</figcaption></figure><h3 id="代码体现" tabindex="-1"><a class="header-anchor" href="#代码体现"><span>代码体现</span></a></h3><h4 id="举例-对象适配器" tabindex="-1"><a class="header-anchor" href="#举例-对象适配器"><span>举例 - 对象适配器</span></a></h4><p>（注意：需要在两者接口这件有关联、可转换才能写适配器）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 目标接口（新接口）
class ITarget{
public:
	virtual void process()=0;
}

// 遗留接口（老接口）
class IAdaptee{
public:
	virtual void foo(int data)=0;
    virtual int bar()=0;
};

// 使用了遗留接口的遗留类
class 0ldclass: public IAdaptee{
	//...
};

// 适配器
class Adapter: public ITarget{					// 继承新接口
protected:
    IAdaptee* pAdaptee;							// 包含老接口
    
public:
    Adapter(IAdaptee* pAdaptee){
        this-&gt;pAdaptee=pAdaptee;
    }
    virtual void process() override{			// 重写新接口
        int data=pAdaptee-&gt;bar();				// 实现时可以使用旧接口的方法，一般转换过程非常复杂，这里仅用伪代码表示
        pAdaptee-&gt;foo(data);
    }
};

// 适配器的使用
int main(){
    IAdaptee* pAdaptee = new OldClass();		// 创建旧类
    
    ITarget* pTarget = new Adapter(pAdaptee);	// 构建适配器对象，这是一个符合新接口而又能访问旧类的对象
    											// 组合方式，即如果还有其他旧类还可以用多态指针
    pTarget-&gt;process();							// 调用新接口
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="举例-stl" tabindex="-1"><a class="header-anchor" href="#举例-stl"><span>举例 - STL</span></a></h4><p>STL源码中也用到了这种设计模式</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class stack{
    deqeue container;
    //...
}

class queue{
    deqeue container;
    //...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="举例-类适配器" tabindex="-1"><a class="header-anchor" href="#举例-类适配器"><span>举例 - 类适配器</span></a></h4><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class Adapter: public ITarget, protected IAdaptee{	// 多继承，继承新接口和旧接口。不推荐用类适配器、定死了
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式"><span>设计模式</span></a></h2><h3 id="模式定义" tabindex="-1"><a class="header-anchor" href="#模式定义"><span>模式定义</span></a></h3><blockquote><p>将一个类的<strong>接口转换</strong>成客户希望的另一个接口。 Adapter模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。</p><p>——《设计模式》GoF</p></blockquote><h3 id="结构-structure" tabindex="-1"><a class="header-anchor" href="#结构-structure"><span>结构（Structure）</span></a></h3><p>（红色表示稳定）</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
Client
<span class="token keyword">subgraph</span> Targe 目标接口 新接口
	A<span class="token text string">[Request]</span><span class="token punctuation">;</span>class A red
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> Adapter 适配器
	B<span class="token text string">[Request]</span>
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> Adaptee 旧接口 被适配者
	C<span class="token text string">[SpecificRequest]</span><span class="token punctuation">;</span>class C red
<span class="token keyword">end</span>

Client<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">调用</span><span class="token arrow operator">--&gt;</span></span>A
A<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>B
C<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">指针被包含 adaptee</span><span class="token arrow operator">.-&gt;</span></span>B

<span class="token keyword">classDef</span> red <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f9f<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>4px</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="要点总结" tabindex="-1"><a class="header-anchor" href="#要点总结"><span>要点总结</span></a></h3><ul><li>Adapter模式主要应用于 “希望复用一些现存的类，但是接口又与复用环境要求不一致的情况”， 在遗留代码复用、类库迁移等方面非常有用。</li><li>GoF 23定义了两种Adapter模式的实现结构：<strong>对象适配器和类适配器</strong>。 但类适配器采用 “多继承&quot; 的实现方式，一般<strong>不推荐</strong>使用。 对象适配器采用 “对象组合” 的方式，更符合松耦合精神。</li><li>Adapter模式可以实现的非常灵活，不必拘泥于Gof23中定义的两种结构。 例如，完全可以将Adapter模式中的 “现存对象” 作为新的接口方法参数，来达到适配的目的。</li></ul><h1 id="java——适配器设计模式" tabindex="-1"><a class="header-anchor" href="#java——适配器设计模式"><span>Java——适配器设计模式</span></a></h1><p>有接口A，里面有很多接口方法没实现</p><p>我们写一个实现B**（适配器类）**，对所有的接口方法用空实现，并标记为Abstract</p><p>最后用C再去实现接口B，适配器需要用到哪个方法就重写哪个方法</p><p>简单来说，就是在实现类和接口之间，加入了第三者</p><p>好像和之前笔记的用法不同</p>`,35),r=[l];function d(c,p){return a(),n("div",null,r)}const u=e(t,[["render",d],["__file","14. 适配器 Adapter.html.vue"]]),h=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/14.%20%E9%80%82%E9%85%8D%E5%99%A8%20Adapter.html","title":"《C++设计模式》视频_李建忠","lang":"zh-CN","frontmatter":{"description":"《C++设计模式》视频_李建忠 目录 [toc] 适配器 Adapter 所属分类——“接口隔离” 模式 略 动机（Motivation） 简概 在软件系统中，由于应用环境的变化，常常需要将 “一些现存的对象\\" 放在新的环境中应用，但是新环境要求的接口是这些现存对象所不满足的 （老东西放到新环境中去使用） 如何应对这种 “迁移的变化\\" ？如何既能利用现...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/14.%20%E9%80%82%E9%85%8D%E5%99%A8%20Adapter.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"《C++设计模式》视频_李建忠"}],["meta",{"property":"og:description","content":"《C++设计模式》视频_李建忠 目录 [toc] 适配器 Adapter 所属分类——“接口隔离” 模式 略 动机（Motivation） 简概 在软件系统中，由于应用环境的变化，常常需要将 “一些现存的对象\\" 放在新的环境中应用，但是新环境要求的接口是这些现存对象所不满足的 （老东西放到新环境中去使用） 如何应对这种 “迁移的变化\\" ？如何既能利用现..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《C++设计模式》视频_李建忠\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"《C++设计模式》视频_李建忠","slug":"《c-设计模式》视频-李建忠","link":"#《c-设计模式》视频-李建忠","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"适配器 Adapter","slug":"适配器-adapter","link":"#适配器-adapter","children":[{"level":2,"title":"所属分类——“接口隔离” 模式","slug":"所属分类——-接口隔离-模式","link":"#所属分类——-接口隔离-模式","children":[]},{"level":2,"title":"动机（Motivation）","slug":"动机-motivation","link":"#动机-motivation","children":[{"level":3,"title":"简概","slug":"简概","link":"#简概","children":[]},{"level":3,"title":"应用体现","slug":"应用体现","link":"#应用体现","children":[]},{"level":3,"title":"代码体现","slug":"代码体现","link":"#代码体现","children":[{"level":4,"title":"举例 - 对象适配器","slug":"举例-对象适配器","link":"#举例-对象适配器","children":[]},{"level":4,"title":"举例 - STL","slug":"举例-stl","link":"#举例-stl","children":[]},{"level":4,"title":"举例 - 类适配器","slug":"举例-类适配器","link":"#举例-类适配器","children":[]}]}]},{"level":2,"title":"设计模式","slug":"设计模式","link":"#设计模式","children":[{"level":3,"title":"模式定义","slug":"模式定义","link":"#模式定义","children":[]},{"level":3,"title":"结构（Structure）","slug":"结构-structure","link":"#结构-structure","children":[]},{"level":3,"title":"要点总结","slug":"要点总结","link":"#要点总结","children":[]}]}]},{"level":1,"title":"Java——适配器设计模式","slug":"java——适配器设计模式","link":"#java——适配器设计模式","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.06,"words":919},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/03. Tools/02. 管理层/01. 多类管理/设计模式/《C++设计模式》视频_李建忠/14. 适配器 Adapter.md","autoDesc":true}');export{u as comp,h as data};

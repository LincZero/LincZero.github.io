import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,a as s}from"./app-Bmv5Ekr9.js";const r={},t=s(`<h1 id="《c-设计模式》视频-李建忠" tabindex="-1"><a class="header-anchor" href="#《c-设计模式》视频-李建忠"><span>《C++设计模式》视频_李建忠</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><p>[toc]</p><h1 id="解析器模式-interpreter" tabindex="-1"><a class="header-anchor" href="#解析器模式-interpreter"><span>解析器模式 Interpreter</span></a></h1><h2 id="所属分类——-领域规则-模式" tabindex="-1"><a class="header-anchor" href="#所属分类——-领域规则-模式"><span>所属分类——“领域规则” 模式</span></a></h2><ul><li>“领域规则” 模式 <ul><li>在特定领域中，某些变化虽然频繁，但可以抽象为某种规则。 这时候，结合特定领域，将问题抽象为语法规则，从而给出在该领域下的一般性解决方案。</li></ul></li><li>典型模式 <ul><li>lnterpreter</li></ul></li></ul><h2 id="动机-motivation" tabindex="-1"><a class="header-anchor" href="#动机-motivation"><span>动机（Motivation）</span></a></h2><h3 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h3><ul><li>在软件构建过程中，如果某一特定领域的问题比较复杂，类似的结构不断重复出现，如果使用普通的编程方式来实现将面临非常频繁的变化。</li><li>在这种情况下，将特定领域的问题表达为<strong>某种语法规则下的句子</strong>，然后构建一个解释器来解释这样的句子，从而达到解决问题的目的。</li></ul><h3 id="代码体现" tabindex="-1"><a class="header-anchor" href="#代码体现"><span>代码体现</span></a></h3><p>一个解析四则运算的解析器</p><p>（其实《数据结构与算法分析》一书中也有这个例子，原理不同）</p><h4 id="举例-解析器模式" tabindex="-1"><a class="header-anchor" href="#举例-解析器模式"><span>举例 - 解析器模式</span></a></h4><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;map&gt;
#include &lt;stack&gt;

using namespace std;

// 表达式
class Expression {
public:
	virtual int interpreter(map&lt;char, int&gt; var)=0;
    virtual ~Expression(){}
};

// 变量表达式，继承表达式（将变量本身也当做是一个表达式，相当于树的节点）
class VarExpression: public Expression {
	char key;
public:
	VarExpression( const char&amp; key){
		this-&gt;key = key;
	}
	int interpreter(map&lt;char, int&gt; var) override {
		return var[key];
	}
};

// 符号表达式，继承表达式
class SymbolExpression : public Expression {
	// 运算符左右两个参数
protected:
	Expressionx left;
    Expression* right;
public:
	SymbolExpression(Expression* left,Expression* right):left(left),right(right){

    }
};

// 加法运算，继承符号表达式
class AddExpression : public SymbolExpression {
public:
	AddExpression(Expression* left,Expression* right):
		SymbolExpression(left,right){
	
    }
	int interpreter( map&lt;char, int&gt; var) {
		return left-&gt;interpreter(var) + right-&gt;interpreter(var);
	}
};

// 减法运算，继承符号表达式
class SubExpression : public SymbolExpression {
public:
	AddExpression(Expression* left,Expression* right):
		SymbolExpression(left,right){
	
    }
	int interpreter( map&lt;char, int&gt; var) {
		return left-&gt;interpreter(var) - right-&gt;interpreter(var);
	}
};

// 表达式语法分析【即解析器】
Expression* analyse(string expStr) {
	stack&lt;Expression*&gt; expStack;			// 栈，用来存储一个最小的表达式
	Expression* left = nullptr;				// 这里通过二叉树来模拟四则运算
    Expressionx right = nullptr;
	for(int i=0; i&lt;expStr.size(); i++)		// 循环解析表达式
    {
		switch(expStr[i])					// 符号会变成二叉树的枝干
        {         
			case &#39;+&#39;:
				// 加法运算
				left = expStack.top() ;
				right = new VarExpression(expStr[++i] );
				expStack. push(new AddExpression(left,right));
                break;
            case &#39;-&#39;:
				// 减法运算
				left = expStack.top( );
				right = new VarExpression( expStr[++i] );
				expStack.push(new SubExpression(left, right));
                break;
			default:
				// 终结表达式
				expStack.push(new VarExpression(expStr[i]));
        }
    }
    Expression* expression = expStack.top();
    return expression;
}  

void release( Expression* expression){
	// 释放表达式树的节点内存...
}

int main( int argc, const char * argv[]) {
	
    string expstr = &quot;a+b-c+d&quot;;					// 四则运算，被解析器类解析
	map&lt;char, int&gt; var;							// 一个map字典（基于红黑树）
	var.insert(make_pair(&#39;a&#39;,5));
    var.insert(make_pair(&#39;b&#39;,2));
    var.insert(make_pair(&#39;c&#39;,1));
    var.insert(make_pair(&#39;d&#39;,6));
    
	Expression* expression= analyse(expStr);
    
    int result=expression-&gt;interpreter(var);
    
    cout&lt;&lt;result&lt;&lt;endl;
    
    release(expression);
    
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式"><span>设计模式</span></a></h2><h3 id="模式定义" tabindex="-1"><a class="header-anchor" href="#模式定义"><span>模式定义</span></a></h3><blockquote><p>给定一个语言，定义它的文法的一种表示，并定义一种解释器，这个解释器使用该表示来解释语言中的句子。</p><p>——《设计模式》GoF</p></blockquote><h3 id="结构-structure" tabindex="-1"><a class="header-anchor" href="#结构-structure"><span>结构（Structure）</span></a></h3><p>（红色表示稳定）</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
<span class="token keyword">subgraph</span> AbstractExpression 抽象表达式
	B<span class="token text string">[Interpret 参Context]</span>
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> TerminalExpression 末端表达式
	BA<span class="token text string">[Interpret 参Context]</span>
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> NonterminalExpression 非末端表达式
	BB<span class="token text string">[Interpret 参Context]</span>
<span class="token keyword">end</span>


Client<span class="token text string">(Client)</span><span class="token arrow operator">--&gt;</span>B
Client<span class="token arrow operator">--&gt;</span>Context
B<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>BA
B<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>BB
BB<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">包含指针</span><span class="token arrow operator">.-&gt;</span></span>BBA<span class="token text string">[AbstractExpression]</span>

<span class="token keyword">classDef</span> red <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f9f<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>4px</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="要点总结" tabindex="-1"><a class="header-anchor" href="#要点总结"><span>要点总结</span></a></h3><ul><li>Interpreter模式的<strong>应用场合</strong>是Interpreter模式应用中的<strong>难点</strong>，只有满 <strong>“业务规则频繁变化，且类似的结构不断重复出现，并且容易抽象为语法规则的问题”</strong> 才适合使用Interpreter模式。</li><li>使用Interpreter模式来表示文法规则，从而可以使用面向对象技巧来方便地 “扩展” 文法**（方便扩展）**</li><li>Interpreter模式比较适合简单的文法表示，对于复杂的文法表示lnterperter模式会产生比较大的类层次结构，需要求助于语法分析生成器这样的标准工具</li></ul><h3 id="个人体会" tabindex="-1"><a class="header-anchor" href="#个人体会"><span>个人体会</span></a></h3><p>解析器模式是组成一个树，组合模式也是组成树，二者也都分枝干节点和叶子节点，非常相像</p>`,24),l=[t];function a(d,c){return n(),i("div",null,l)}const o=e(r,[["render",a],["__file","23. 解析器 Interpreter.html.vue"]]),u=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/23.%20%E8%A7%A3%E6%9E%90%E5%99%A8%20Interpreter.html","title":"《C++设计模式》视频_李建忠","lang":"zh-CN","frontmatter":{"description":"《C++设计模式》视频_李建忠 目录 [toc] 解析器模式 Interpreter 所属分类——“领域规则” 模式 “领域规则” 模式 在特定领域中，某些变化虽然频繁，但可以抽象为某种规则。 这时候，结合特定领域，将问题抽象为语法规则，从而给出在该领域下的一般性解决方案。 典型模式 lnterpreter 动机（Motivation） 简概 在软件构...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/23.%20%E8%A7%A3%E6%9E%90%E5%99%A8%20Interpreter.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"《C++设计模式》视频_李建忠"}],["meta",{"property":"og:description","content":"《C++设计模式》视频_李建忠 目录 [toc] 解析器模式 Interpreter 所属分类——“领域规则” 模式 “领域规则” 模式 在特定领域中，某些变化虽然频繁，但可以抽象为某种规则。 这时候，结合特定领域，将问题抽象为语法规则，从而给出在该领域下的一般性解决方案。 典型模式 lnterpreter 动机（Motivation） 简概 在软件构..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《C++设计模式》视频_李建忠\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"《C++设计模式》视频_李建忠","slug":"《c-设计模式》视频-李建忠","link":"#《c-设计模式》视频-李建忠","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"解析器模式 Interpreter","slug":"解析器模式-interpreter","link":"#解析器模式-interpreter","children":[{"level":2,"title":"所属分类——“领域规则” 模式","slug":"所属分类——-领域规则-模式","link":"#所属分类——-领域规则-模式","children":[]},{"level":2,"title":"动机（Motivation）","slug":"动机-motivation","link":"#动机-motivation","children":[{"level":3,"title":"简概","slug":"简概","link":"#简概","children":[]},{"level":3,"title":"代码体现","slug":"代码体现","link":"#代码体现","children":[{"level":4,"title":"举例 - 解析器模式","slug":"举例-解析器模式","link":"#举例-解析器模式","children":[]}]}]},{"level":2,"title":"设计模式","slug":"设计模式","link":"#设计模式","children":[{"level":3,"title":"模式定义","slug":"模式定义","link":"#模式定义","children":[]},{"level":3,"title":"结构（Structure）","slug":"结构-structure","link":"#结构-structure","children":[]},{"level":3,"title":"要点总结","slug":"要点总结","link":"#要点总结","children":[]},{"level":3,"title":"个人体会","slug":"个人体会","link":"#个人体会","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.44,"words":1033},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/03. Tools/02. 管理层/01. 多类管理/设计模式/《C++设计模式》视频_李建忠/23. 解析器 Interpreter.md","autoDesc":true}');export{o as comp,u as data};

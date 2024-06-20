import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as l,a,b as s,d as e}from"./app-CctSPqZW.js";const i={},r=a(`<h1 id="装饰模式-decorator" tabindex="-1"><a class="header-anchor" href="#装饰模式-decorator"><span>装饰模式 Decorator</span></a></h1><p>极简一句话：</p><ul><li><s>策略模式：类A包含一个多态基类B指针（例如：订单业务类A包含一个国家税收多态类B指针）</s></li><li>装饰模式：多态基类A包含另一多态基类B指针（例如：<strong>业务</strong>多态类A包含一个<strong>业务</strong>多态类B指针）（策略模式Super版，桥接模式同祖先版）</li><li><s>桥接模式：多态基类A包含另一多态基类B指针（例如：<strong>业务</strong>多态类A包含一个<strong>平台</strong>多态类B指针）（策略模式Super版，装饰模式不同祖先版）</s></li></ul><h2 id="所属分类——-单一职责-模式" tabindex="-1"><a class="header-anchor" href="#所属分类——-单一职责-模式"><span>所属分类——“单一职责” 模式</span></a></h2><ul><li>“单一职责” 模式 <ul><li>在软件组件的设计中，如果责任划分的不清晰，使用继承得到的结果往往是随着需求的变化，<strong>子类急剧膨胀</strong>，同时<strong>充斥着重复代码</strong> 这时候的关键是划清责任</li></ul></li><li>典型模式 <ul><li>装饰模式 Decorator</li><li>桥模式 Bridge</li></ul></li></ul><h2 id="动机-motivation" tabindex="-1"><a class="header-anchor" href="#动机-motivation"><span>动机（Motivation）</span></a></h2><h3 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h3><ul><li>在某些情况下我们可能会 <strong>“过度地使用继承来扩展对象的功能”</strong> ，由于继承为类型引入的<strong>静态特质</strong>，使得这种扩展方式缺乏灵活性； 并且随着子类的增多（扩展功能的增多），各种子类的组合（扩展功能的组合）会导致更多子类的膨胀。</li><li>如何使 “对象功能的扩展&quot; 能够根据需要来动态地实现？ 同时避免 “扩展功能的增多&quot; 带来的子类膨胀问题？ 从而使得任何 ”功能扩展变化&quot; 所导致的影响将为最低？</li></ul><h3 id="核心-继承变组合-n-m变n-m" tabindex="-1"><a class="header-anchor" href="#核心-继承变组合-n-m变n-m"><span>核心：继承变组合，n*m变n+m</span></a></h3><h3 id="代码体现" tabindex="-1"><a class="header-anchor" href="#代码体现"><span>代码体现</span></a></h3><p>需求：在流操作的基础上增加加密操作</p><h4 id="举例-写法1" tabindex="-1"><a class="header-anchor" href="#举例-写法1"><span>举例 - 写法1</span></a></h4><p>原代码 - 流的读写</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 业务操作
class stream{							// 抽象基类
public:
	virtual char Read( int number)=0;
    virtual void Seek( int position)=0;
    virtual void Write( char data)=0;
    
	virtual ~Stream(){}
};

// 主体类
class FileStream: public Stream{
public:
	virtual char Read( int number){
		//读文件流
	}
	virtual void Seek(int position){
		//定位文件流
	}
	virtual void Write( char data){
		//写文件流
	}
};

class NetworkStream : public stream{
public:
	virtual char Read( int number){
		//读网络流
	}
	virtual void Seek( int position){
		//定位网络流
	}
	virtual void Write( char data){
		//写网络流
	}
};

class MemoryStream :public Stream{
public:
	virtual char Read ( int number){
		//读内存流
	}
	virtual void Seek( int position){
		//定位内存流
	}
	virtual void write( char data){
		//写内存流
	}
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加密扩展</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 扩展操作（加密扩展）
class CryptoFilestream :public FileStream{
public:
	virtual char Read(int number){
		//额外的加密操作...
		Filestream::Read(number) ;		// 读文件流
	}
	virtual void Seek(int position){
		//额外的加密操作...
		Filestream::Seek(position);		// 定位文件流
        //额外的加密操作...
	}
	virtual void write(byte data){
		//额外的加密操作...
		Filestream::Write(data);		// 写文件流
        //额外的加密操作...
	}
};

class CryptoNetworkStream :public NetworkStream{
public:
	virtual char Read(int number){
		//额外的加密操作...
		NetworkStream::Read(number);	// 读网络流
	}
	virtual void Seek( int position){
		//额外的加密操作...
		NetworkStream::Seek(position);	// 定位网络流
        //额外的加密操作...
	}
	virtual void Write( byte data){
		//额外的加密操作...
		NetworkStream::Write(data);		// 写网络流
        //额外的加密操作...
	}
};

class CryptoMemoryStream :public MemoryStream{
public:
	virtual char Read(int number){
		//额外的加密操作...
		MemoryStream::Read(number);		// 读内存流
	}
	virtual void Seek(int position){
		//额外的加密操作...
		MemoryStream::Seek(position);	// 定位内存流
        //额外的加密操作...
	}
	virtual void Write(byte data){
		//额外的加密操作...
		MemoryStream::Write(data);		// 写内存流
        //额外的加密操作...
	}
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缓冲扩展</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class BufferedFilestream : public Filestream{
	//...
};
class BufferedNetworkStream : public NetworkStream{
	//...
};
class BufferedMemoryStream : public MemoryStream{
	//...
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可能还有加密缓冲的扩展等等</p><p>运行时代码</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>void Process( ){			// 编译时装配
	CryptoFilestream *fs1 = new CryptoFilestream( );				// 加密文件流
    BufferedFileStream*fs2 = new BufferedFileStream( );				// 缓存文件流
	cryptoBufferedFileStream *fs3 =new CryptoBufferedFileStream( );	// 加密缓存文件流
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分析-写法1" tabindex="-1"><a class="header-anchor" href="#分析-写法1"><span>分析 - 写法1</span></a></h4><p>继承树</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">classDiagram</span>
	Stream <span class="token arrow operator">&lt;|--</span> FileStream
		FileStream <span class="token arrow operator">&lt;|--</span> CryptoFileStream
		FileStream <span class="token arrow operator">&lt;|--</span> CrytoBuffredFileStream
		FileStream <span class="token arrow operator">&lt;|--</span> BufferedFileStream
	Stream <span class="token arrow operator">&lt;|--</span> NetworkStream
		NetworkStream <span class="token arrow operator">&lt;|--</span> CryptoNetworkStream
		NetworkStream <span class="token arrow operator">&lt;|--</span> CrytoBuffredNetworkStream
		NetworkStream <span class="token arrow operator">&lt;|--</span> BufferedNetworkStream
	Stream <span class="token arrow operator">&lt;|--</span> MemoryStream
		MemoryStream <span class="token arrow operator">&lt;|--</span> CryptoMemoryStream
		MemoryStream <span class="token arrow operator">&lt;|--</span> CrytoBuffredMemoryStream
		MemoryStream <span class="token arrow operator">&lt;|--</span> BufferedMemoryStream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>旧</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
Stream<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>A<span class="token text string">[FileStream 文件流]</span>
Stream<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>B<span class="token text string">[NetworkStream 网络流]</span>
Stream<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>C<span class="token text string">[MemoryStream 内存流]</span>

A<span class="token arrow operator">--&gt;</span>CryptoFileStream
A<span class="token arrow operator">---&gt;</span>CryptoBufferedFileStream
A<span class="token arrow operator">--&gt;</span>BufferedFileStream

B<span class="token arrow operator">--&gt;</span>CryptoNetworkStream
B<span class="token arrow operator">---&gt;</span>CryptoBufferedNetworkStream
B<span class="token arrow operator">--&gt;</span>BufferedNetworkStream

C<span class="token arrow operator">--&gt;</span>CryptoMemoryStream
C<span class="token arrow operator">---&gt;</span>CryptoBufferedMemoryStream
C<span class="token arrow operator">--&gt;</span>BufferedMemoryStream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分析，存在的问题</p>`,27),d=s("ul",null,[s("li",null,[e("写法一会导致子类方法变得非常多（这里是"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"3"),s("mo",null,"∗"),s("mo",{stretchy:"false"},"("),s("msubsup",null,[s("mi",null,"C"),s("mn",null,"2"),s("mn",null,"1")]),s("mo",null,"+"),s("msubsup",null,[s("mi",null,"C"),s("mn",null,"2"),s("mn",null,"2")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"3*(C_2^1+C_2^2)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"3"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-2.4519em","margin-left":"-0.0715em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])]),s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2481em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-2.4519em","margin-left":"-0.0715em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])]),s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2481em"}},[s("span")])])])])]),s("span",{class:"mclose"},")")])])]),e("），类的个数为"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1"),s("mo",null,"+"),s("mi",null,"n"),s("mo",null,"+"),s("mi",null,"m"),s("mo",null,"∗"),s("mfrac",null,[s("mrow",null,[s("mi",null,"m"),s("mo",{stretchy:"false"},"!")]),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"},"1+n+m*\\frac{m!}{2}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4653em"}}),s("span",{class:"mord mathnormal"},"m"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.2251em","vertical-align":"-0.345em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8801em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"m"),s("span",{class:"mclose mtight"},"!")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])]),s("li",null,"而且非常多的代码重复、冗余"),s("li",null,"而且加密和缓存扩展不是一种非常is-a的操作，应该是一种装饰，可以不继承")],-1),o=a(`<h4 id="举例-写法2" tabindex="-1"><a class="header-anchor" href="#举例-写法2"><span>举例 - 写法2</span></a></h4><p>原代码 - 流的读写</p><p>[略]</p><p>加密扩展</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 扩展操作（加密扩展）
class CryptoStream:public Stream{
    
    Stream* stream;//...					// 【修改】放弃继承，而用组合。且不声明为子类指针，而是多态指针
        
public:
    Cryptostream(Stream* stm):stream(stm){}	// 【修改】构造器
	virtual char Read(int number){
		//额外的加密操作...
		stream-&gt;Read(number);		// 读文件流
	}
	virtual void Seek(int position){
		//额外的加密操作...
		stream-&gt;Seek(position);		// 定位文件流
        //额外的加密操作...
	}
	virtual void write(byte data){
		//额外的加密操作...
		stream-&gt;Write(data);		// 写文件流
        //额外的加密操作...
	}
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缓冲扩展</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class BufferedStream:public Stream{
    Stream* stream;//...					// 【修改】放弃继承，而用组合。且不声明为子类指针，而是多态指针
	//...
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行时代码</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>void Process( ){							// 【修改】编译时装配变为运行时装配
	CryptoFilestream *fs1 = new CryptoFilestream( );
    BufferedFileStream*fs2 = new BufferedFileStream( );
	cryptoBufferedFileStream *fs3 =new CryptoBufferedFileStream( );
    
    FileStream* s1 = new FileStream();				// 文件流
    CrypotoStream* s2 = new CrypotoStream(s1);		// 加密文件流（这里传入s1，让CrypotoStream中的Stream*指针变为FileStream*）
    BufferedStream* s3 = new BufferedStream(s1);	// 缓存文件流
    BufferedStream* s4 = new BufferedStream(s2);	// 加密缓存文件流
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分析-写法2" tabindex="-1"><a class="header-anchor" href="#分析-写法2"><span>分析 - 写法2</span></a></h4><p>继承树</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
Stream<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">---&gt;</span></span>A<span class="token text string">[FileStream 文件流]</span>
Stream<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">---&gt;</span></span>B<span class="token text string">[NetworkStream 网络流]</span>
Stream<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">---&gt;</span></span>C<span class="token text string">[MemoryStream 内存流]</span>

Stream<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>D<span class="token text string">[DecoratorStream 装饰类]</span>
D<span class="token arrow operator">--&gt;</span>D1<span class="token text string">[CryptoStream 加密流]</span><span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">包含</span><span class="token arrow operator">.-&gt;</span></span>Z<span class="token text string">(可以是上一层所有的类)</span>
D<span class="token arrow operator">--&gt;</span>D2<span class="token text string">[BufferedStream 缓存流]</span><span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">包含</span><span class="token arrow operator">.-&gt;</span></span>Z<span class="token text string">(可以是上一层所有的类)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分析</p>`,13),c=s("ul",null,[s("li",null,"遵循了设计原则——合成复用原则（优先使用对象组合而不是类继承）"),s("li",null,[e("这种写法类的个数为"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1"),s("mo",null,"+"),s("mi",null,"n"),s("mo",null,"+"),s("mn",null,"1"),s("mo",null,"+"),s("mi",null,"m")]),s("annotation",{encoding:"application/x-tex"},"1+n+1+m")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"m")])])]),e("，而不会去创建一大堆子类")]),s("li",null,"通过组合装配可以实现不同的效果")],-1),p=a(`<p>重构思路</p><ul><li>(1) 先把继承A变为包含指针A。然后找到两组不同的地方——包含的指针类型不同</li><li>(2) 把包含指针A变为其父类的指针ParentA，即变为多态 <ul><li>让三个三种流的声明指针在编译时一样、在运行时不一样（多态指针）</li></ul></li><li>(3) 运行时通过组合的方式装配起来！！！妙啊</li><li>(4) 最后再深入改善，弄个中间的装饰类来放<code>Stream* stream;</code>这段代码，让CryptoStream和BufferedStream继承这个中间类 <ul><li>马丁福勒：如果类的多个派生类中有同样的字段，那就要在中间再弄一个中间类来放这些相同的代码</li></ul></li></ul><h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式"><span>设计模式</span></a></h2><h3 id="模式定义" tabindex="-1"><a class="header-anchor" href="#模式定义"><span>模式定义</span></a></h3><blockquote><p>动态（组合）地给一个对象增加一些额外的职责。就增加功能而言，<strong>Decorator模式</strong>比生成子类（继承）更为灵活**（消除重复代码&amp;减少子类个数）**。</p><p>——《设计模式》GoF</p></blockquote><p>组合优于继承的典型体现</p><h3 id="结构-structure" tabindex="-1"><a class="header-anchor" href="#结构-structure"><span>结构（Structure）</span></a></h3><blockquote><h4 id="新" tabindex="-1"><a class="header-anchor" href="#新"><span>新</span></a></h4></blockquote><blockquote><p>装饰类和正常派生类都继承Stream的原因：</p><p>装饰类加工完正常派生类后，依然是派生类的类型，不会改变对象的类型</p><p>这也是装饰模式和桥接模式的一大重要区别</p></blockquote><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">classDiagram</span>
	
	<span class="token keyword">class</span> Stream<span class="token punctuation">{</span>
		流
	<span class="token punctuation">}</span>
	
	FileStream <span class="token arrow operator">..</span> object_stream
	NetworkStream <span class="token arrow operator">..</span> object_stream
	MemoryStream <span class="token arrow operator">..</span> object_stream
	
	Stream <span class="token arrow operator">&lt;|--</span> FileStream
	<span class="token keyword">class</span> FileStream<span class="token punctuation">{</span>
		文件流
	<span class="token punctuation">}</span>
	Stream <span class="token arrow operator">&lt;|--</span> NetworkStream
	<span class="token keyword">class</span> NetworkStream<span class="token punctuation">{</span>
		网络流
	<span class="token punctuation">}</span>
	Stream <span class="token arrow operator">&lt;|--</span> MemoryStream
	<span class="token keyword">class</span> MemoryStream<span class="token punctuation">{</span>
		内存流
	<span class="token punctuation">}</span>
	
	CryptoStream <span class="token arrow operator">--&gt;</span> object_stream
	Stream <span class="token arrow operator">&lt;|--</span> CryptoStream
	<span class="token keyword">class</span> CryptoStream<span class="token punctuation">{</span>
		装饰类_加密
		...
		Stream* stream
	<span class="token punctuation">}</span>
	BufferedStream <span class="token arrow operator">--&gt;</span> object_stream
	Stream <span class="token arrow operator">&lt;|--</span> BufferedStream
	<span class="token keyword">class</span> BufferedStream<span class="token punctuation">{</span>
		装饰类_缓存
		...
		Stream* stream
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="旧" tabindex="-1"><a class="header-anchor" href="#旧"><span>旧</span></a></h4></blockquote><p>（红色表示稳定）</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
<span class="token keyword">subgraph</span> Component 组件抽象基类
	X<span class="token text string">[Operation]</span><span class="token punctuation">;</span>class X red
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> ConcreteComponent 组件具体类
	A<span class="token text string">[Operation]</span>
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> Decorator 装饰模式抽象基类
	B<span class="token text string">[Operation]</span><span class="token punctuation">;</span>class B red
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> ConcreteDecoratorA 装饰具体类
	B1<span class="token text string">[Operation]</span>
	addedState
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> ConcreteDecoratorB 装饰具体类
	B2<span class="token text string">[Operation]</span>
	AddedBehavior
<span class="token keyword">end</span>

X<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">---&gt;</span></span>A
X<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>B
B<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>B1<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">包含</span><span class="token arrow operator">.-&gt;</span></span>Z<span class="token text string">(可以是上一层所有的类)</span>
B<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>B2<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">包含</span><span class="token arrow operator">.-&gt;</span></span>Z<span class="token text string">(可以是上一层所有的类)</span>

<span class="token keyword">classDef</span> red <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f9f<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>4px</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行代码：进行动态组装</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span>
Method<span class="token arrow operator">--&gt;</span>C1<span class="token text string">[new ConcreteComponent]</span>
C1<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">组装 自身作为参数传入</span><span class="token arrow operator">--&gt;</span></span>C2<span class="token text string">[new ConcreDecorator]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结合代码" tabindex="-1"><a class="header-anchor" href="#结合代码"><span>结合代码</span></a></h3><p>使用装饰模式时代码的典型特征</p><ul><li><p>典型特征1</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>DecoratorStream: public Stream{	// 继承Stream的同时	（is-a）
protected:
	Stream* stream;    			// 又包含Stream	（has-a）
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>典型特征2（通过外部接口可以看得出来）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class CryptoStream: public DecoratorStream{			// 其父类
public:
    CryptoStream(Stream* stm):DecoratorStream(stm){	// 和构造器参数是同一个父子类关系
        
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="要点总结" tabindex="-1"><a class="header-anchor" href="#要点总结"><span>要点总结</span></a></h3><ul><li>通过采用组合而非继承的手法，Decorator模式实现了在运行时动态扩展对象功能的能力，而且可以根据需要扩展多个功能 避免了使用继承带来的 “灵活性差” 和 “多子类衍生问题”</li><li>Decorator类在<strong>接口上</strong>表现为 is-a Component的<strong>继承</strong>关系，即<strong>Decorator类继承了Component类</strong>所具有的接口 Decorator类在<strong>实现上</strong>又表现为has-a Component的<strong>组合</strong>关系，即<strong>Decorator类又使用了另外一个Component类</strong></li><li>Decorator模式的目的并非解决 “多子类衍生的多继承” 问题， Decorator模式应用的要点在于解决 <strong>“主体类在多个方向上的扩展功能”</strong>——是为 “装饰” 的含义</li></ul><h3 id="个人体会" tabindex="-1"><a class="header-anchor" href="#个人体会"><span>个人体会</span></a></h3><ul><li>主体操作和扩展操作要分开分支继承</li></ul>`,22),m=[r,d,o,c,p];function v(u,b){return t(),l("div",null,m)}const k=n(i,[["render",v],["__file","04. 装饰模式 Decorator.html.vue"]]),w=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/04.%20%E8%A3%85%E9%A5%B0%E6%A8%A1%E5%BC%8F%20Decorator.html","title":"装饰模式 Decorator","lang":"zh-CN","frontmatter":{"description":"装饰模式 Decorator 极简一句话： 装饰模式：多态基类A包含另一多态基类B指针（例如：业务多态类A包含一个业务多态类B指针）（策略模式Super版，桥接模式同祖先版） 所属分类——“单一职责” 模式 “单一职责” 模式 在软件组件的设计中，如果责任划分的不清晰，使用继承得到的结果往往是随着需求的变化，子类急剧膨胀，同时充斥着重复代码 这时候的关...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/04.%20%E8%A3%85%E9%A5%B0%E6%A8%A1%E5%BC%8F%20Decorator.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"装饰模式 Decorator"}],["meta",{"property":"og:description","content":"装饰模式 Decorator 极简一句话： 装饰模式：多态基类A包含另一多态基类B指针（例如：业务多态类A包含一个业务多态类B指针）（策略模式Super版，桥接模式同祖先版） 所属分类——“单一职责” 模式 “单一职责” 模式 在软件组件的设计中，如果责任划分的不清晰，使用继承得到的结果往往是随着需求的变化，子类急剧膨胀，同时充斥着重复代码 这时候的关..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"装饰模式 Decorator\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"装饰模式 Decorator","slug":"装饰模式-decorator","link":"#装饰模式-decorator","children":[{"level":2,"title":"所属分类——“单一职责” 模式","slug":"所属分类——-单一职责-模式","link":"#所属分类——-单一职责-模式","children":[]},{"level":2,"title":"动机（Motivation）","slug":"动机-motivation","link":"#动机-motivation","children":[{"level":3,"title":"简概","slug":"简概","link":"#简概","children":[]},{"level":3,"title":"核心：继承变组合，n*m变n+m","slug":"核心-继承变组合-n-m变n-m","link":"#核心-继承变组合-n-m变n-m","children":[]},{"level":3,"title":"代码体现","slug":"代码体现","link":"#代码体现","children":[{"level":4,"title":"举例 - 写法1","slug":"举例-写法1","link":"#举例-写法1","children":[]},{"level":4,"title":"分析 - 写法1","slug":"分析-写法1","link":"#分析-写法1","children":[]},{"level":4,"title":"举例 - 写法2","slug":"举例-写法2","link":"#举例-写法2","children":[]},{"level":4,"title":"分析 - 写法2","slug":"分析-写法2","link":"#分析-写法2","children":[]}]}]},{"level":2,"title":"设计模式","slug":"设计模式","link":"#设计模式","children":[{"level":3,"title":"模式定义","slug":"模式定义","link":"#模式定义","children":[]},{"level":3,"title":"结构（Structure）","slug":"结构-structure","link":"#结构-structure","children":[]},{"level":3,"title":"结合代码","slug":"结合代码","link":"#结合代码","children":[]},{"level":3,"title":"要点总结","slug":"要点总结","link":"#要点总结","children":[]},{"level":3,"title":"个人体会","slug":"个人体会","link":"#个人体会","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":8.08,"words":2424},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/03. Tools/02. 管理层/01. 多类管理/设计模式/《C++设计模式》视频_李建忠/04. 装饰模式 Decorator.md","autoDesc":true}');export{k as comp,w as data};

import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,e as s}from"./app-yixEWCFr.js";const l={},r=s(`<h1 id="《c-设计模式》视频-李建忠" tabindex="-1"><a class="header-anchor" href="#《c-设计模式》视频-李建忠"><span>《C++设计模式》视频_李建忠</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><p>[toc]</p><h1 id="抽象工厂" tabindex="-1"><a class="header-anchor" href="#抽象工厂"><span>抽象工厂</span></a></h1><p>全程 <code>工厂方法模式</code>，有时简称 <code>工厂方法</code>，有时简称 <code>工厂模式</code></p><h2 id="所属分类——-对象创建-模式" tabindex="-1"><a class="header-anchor" href="#所属分类——-对象创建-模式"><span>所属分类——“对象创建” 模式</span></a></h2><p>[省略]</p><h2 id="动机-motivation" tabindex="-1"><a class="header-anchor" href="#动机-motivation"><span>动机（Motivation）</span></a></h2><h3 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h3><ul><li>在软件系统中，经常面临着 <strong>“一系列相互依赖的对象&quot;</strong> 的创建工作；同时，由于需求的变化，往往存在更多系列对象的创建工作。</li><li>如何应对这种变化？如何绕过常规的对象创建方法（new），提供一种 “封装机制&quot; 来避免客户程序和这种 “<strong>多系列</strong>具体对象创建工作” 的紧耦合？</li></ul><h3 id="代码体现2" tabindex="-1"><a class="header-anchor" href="#代码体现2"><span>代码体现2</span></a></h3><p>访问数据、访问数据库</p><p>考虑时间轴：可以访问多种数据库</p><h4 id="举例-写法1" tabindex="-1"><a class="header-anchor" href="#举例-写法1"><span>举例 - 写法1</span></a></h4><p>高级类</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class EmployeeDAO{
public:
	vector&lt;EmployeeD0&gt;GetEmployees(){
		sqlConnection* connection = new sqlConnection() ;	// 数据库连接
		connection-&gt;ConnectionString(&quot;...&quot;);
        
        sqlCommand* command = new sqlCommand() ;			// SQL语句
        command-&gt;CommandText(&quot;...&quot;);
        command-&gt;SetConnection(connection);	//关联性
        
		sqlDataReader* reader = command-&gt;ExecuteReader();	// 数据库数据读取
        while (reader-&gt;Read()){

        }
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="举例-写法2-工厂方法" tabindex="-1"><a class="header-anchor" href="#举例-写法2-工厂方法"><span>举例 - 写法2（工厂方法）</span></a></h4><p>抽象基类</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 数据库访问有关基类
class IDBConnection{		// 数据库连接
    
};

class IDBCommand{			// 数据库SQL语句
    
};

class IDataReader{			// 数据库数据读取
    
};

// 工厂抽象基类
class IDBConnectionFactory{	// 工厂 - 数据库连接
public:
    virtual IDBConnection* CreateDBConnection()=0;
};

class IDBCommandFactory{	// 工厂 - 数据库SQL语句
public:
    virtual IDBCommand* CreateDBCommand()=0;
};

class IDataReaderFactory{	// 工厂 - 数据库数据读取
public:
    virtual IDataReader* CreateDataReader()=0;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>系列扩展</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 支持SQL Server
class SqlConnention: public IDBConnection{
    
};

class SqlCommand: public IDBCommand{
    
};

class SqlDataReader: public IDataReader{
    
};

// 工厂具体类 - 支持SQL Server
class SqlConnentionFactory: public IDBConnectionFactory{
    
};
class SqlCommandFactory: public IDBCommandFactory{
    
};
class SqlDataReaderFactory: public IDataReaderFactory{
    
};

// 支持Oracle
class OracleConnention: public IDBConnection{
    
};

class OracleCommand: public IDBCommand{
    
};

class OracleDataReader: public IDataReader{
    
};

// 工厂具体类 - 支持Oracle
// [省略]...
// [省略]...
// [省略]...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>高层类</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 运行 - 高级类
class EmployeeDAO{
    IDBConnectionFactory* dbConnectionFactory;
    IDBCommandFactory* dbCommandFactory;
    IDataReaderFactory* dbDataReaderFactory;
    
public:
	vector&lt;EmployeeD0&gt;GetEmployees(){
		IDBConnection* connection = dbConnectionFactory-&gt;CreateDBConnection;// 【修改】声明为抽象基类的多态指针，且尝试绕过new
		connection-&gt;ConnectionString(&quot;...&quot;);
        
        IDBCommand* command = dbCommandFactory-&gt;CreateDBCommand;			// 【修改】声明为抽象基类的多态指针，且尝试绕过new
        command-&gt;CommandText(&quot;...&quot;);
        command-&gt;SetConnection(connection);	//关联性
        
		IDBDataReader* reader = command-&gt;CreateDataReader;//关联性			  // 【修改】声明为抽象基类的多态指针，且尝试绕过new
        while (reader-&gt;Read()){

        }
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分析-写法2-工厂方法" tabindex="-1"><a class="header-anchor" href="#分析-写法2-工厂方法"><span>分析 - 写法2（工厂方法）</span></a></h4><p>代码结构</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
<span class="token keyword">subgraph</span> 产品部分
    IDBConnection<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>SqlConnention等<span class="token punctuation">;</span>class IDBConnection red
    IDBCommand<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>SqlCommand等<span class="token punctuation">;</span>class IDBCommand red
    IDataReader<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>SqlDataReader等<span class="token punctuation">;</span>class IDataReader red
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> 工厂部分
	IDBConnectionFactory<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>SqlConnentionFactory等<span class="token punctuation">;</span>class IDBConnectionFactory red
	IDBCommandFactory<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>SqlCommandFactory等<span class="token punctuation">;</span>class IDBCommandFactory red
	IDataReaderFactory<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>SqlDataReaderFactory等<span class="token punctuation">;</span>class IDataReaderFactory red
<span class="token keyword">end</span>

<span class="token keyword">classDef</span> red <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f9f<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>4px</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行时</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span>
<span class="token keyword">subgraph</span> 某3个工厂的具体类
	Creator方法<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">返回</span><span class="token arrow operator">--&gt;</span></span>三个产品部分的具体类
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> 高级类部分
	构造器<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">初始化</span><span class="token arrow operator">--&gt;</span></span>包含的三个工厂抽象基类指针
	使用该返回值
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> 运行代码
	method
<span class="token keyword">end</span>

method<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">创建3个具体工厂类并传入</span><span class="token arrow operator">--&gt;</span></span>构造器
包含的三个工厂抽象基类指针<span class="token arrow operator">--&gt;</span>Creator方法
三个产品部分的具体类<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">回栈</span><span class="token arrow operator">--&gt;</span></span>使用该返回值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分析，存在的问题</p><ul><li>工厂之间具有关联性</li></ul><h4 id="举例-写法3-抽象工厂" tabindex="-1"><a class="header-anchor" href="#举例-写法3-抽象工厂"><span>举例 - 写法3（抽象工厂）</span></a></h4><p>抽象基类</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 数据库访问有关基类
class IDBConnection{		// 数据库连接
    
};

class IDBCommand{			// 数据库SQL语句
    
};

class IDataReader{			// 数据库数据读取
    
};

// 工厂抽象基类
class IDBFactory{									// 【修改】工厂 - 合并为一个通用的
public:
    virtual IDBConnection* CreateDBConnection()=0;
    virtual IDBCommand* CreateDBCommand()=0;
    virtual IDataReader* CreateDataReader()=0;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>系列扩展</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 支持SQL Server
class SqlConnention: public IDBConnection{
    
};

class SqlCommand: public IDBCommand{
    
};

class SqlDataReader: public IDataReader{
    
};

// 工厂具体类 - 支持SQL Server
class SqlDBFactory: public IDBFactory{				// 【修改】工厂SQL - 合并为一个通用的
   
};

// 支持Oracle
class OracleConnention: public IDBConnection{
    
};

class OracleCommand: public IDBCommand{
    
};

class OracleDataReader: public IDataReader{
    
};

// 工厂具体类 - 支持Oracle
// 略...
// 略...
// 略...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>高层类</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 运行 - 高级类
class EmployeeDAO{
    IDBFactory* dbFactory;							// 【修改】合并为一个通用的，抽象工厂指针。会被传入工厂具体类
													// 传入SqlDBFactory或OracleDBFactory，用来代表一个系列。【妙啊！！！】
public:
	vector&lt;EmployeeD0&gt;GetEmployees(){
		IDBConnection* connection = dbFactory-&gt;CreateDBConnection;
		connection-&gt;ConnectionString(&quot;...&quot;);
        
        IDBCommand* command = dbFactory-&gt;CreateDBCommand;
        command-&gt;CommandText(&quot;...&quot;);
        command-&gt;SetConnection(connection);	//关联性
        
		IDBDataReader* reader = command-&gt;CreateDataReader;//关联性
        while (reader-&gt;Read()){

        }
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分析-写法3-抽象工厂" tabindex="-1"><a class="header-anchor" href="#分析-写法3-抽象工厂"><span>分析 - 写法3（抽象工厂）</span></a></h4><p>代码结构</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
<span class="token keyword">subgraph</span> 产品部分
    IDBConnection<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>SqlConnention<span class="token punctuation">;</span>class IDBConnection red
    IDBConnection<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">---&gt;</span></span>OracleConnention
    IDBCommand<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>SqlCommand<span class="token punctuation">;</span>class IDBCommand red
    IDBCommand<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">---&gt;</span></span>OracleCommand
    IDataReader<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>SqlDataReader<span class="token punctuation">;</span>class IDataReader red
    IDataReader<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">---&gt;</span></span>OracleDataReader
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> 工厂部分
	IDBFactory<span class="token punctuation">;</span>class IDBFactory red
	IDBFactory<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>SqlDBFactory
	IDBFactory<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">---&gt;</span></span>OracleDBFactory
<span class="token keyword">end</span>

<span class="token keyword">classDef</span> red <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f9f<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>4px</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式"><span>设计模式</span></a></h2><h3 id="模式定义" tabindex="-1"><a class="header-anchor" href="#模式定义"><span>模式定义</span></a></h3><blockquote><p>提供一个接口,让该接口负责创建一系列 <strong>&quot;相关或者相互依赖的对象”</strong>，无需指定它们具体的类。</p><p>——《设计模式》GoF</p></blockquote><h3 id="结构-structure" tabindex="-1"><a class="header-anchor" href="#结构-structure"><span>结构（Structure）</span></a></h3><p>（红色表示稳定）</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
<span class="token keyword">subgraph</span> AbstractFactory 抽象工厂的抽象基类
	AA<span class="token text string">[CreateProductA]</span><span class="token punctuation">;</span>class AA red
	AB<span class="token text string">[CreateProductB]</span><span class="token punctuation">;</span>class AB red
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> ConcreteFactory1
	A1A<span class="token text string">[CreateProductA]</span>
	A1B<span class="token text string">[CreateProductB]</span>
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> ConcreteFactory2
	A2A<span class="token text string">[CreateProductA]</span>
	A2B<span class="token text string">[CreateProductB]</span>
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> AbstractProductA 产品的抽象基类A
	AbstractProductA<span class="token punctuation">;</span>class AbstractProductA red
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> AbstractProductB 产品的抽象基类B
	AbstractProductB<span class="token punctuation">;</span>class AbstractProductB red
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> 系列1
	ProductA1
	ProductA2
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> 系列2
	ProductB1
	ProductB2
<span class="token keyword">end</span>

AA<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>A1A
AA<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>A2A
AbstractProductA<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>ProductA1
AbstractProductA<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>ProductA2
AbstractProductB<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>ProductB1
AbstractProductB<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>ProductB2
A1A<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">Create返回</span><span class="token arrow operator">.-&gt;</span></span>C1<span class="token text string">(productA1)</span>
A1B<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">Create返回</span><span class="token arrow operator">.-&gt;</span></span>C2<span class="token text string">(productB1)</span>
A2A<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">Create返回</span><span class="token arrow operator">.-&gt;</span></span>C3<span class="token text string">(productA2)</span>
A2B<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">Create返回</span><span class="token arrow operator">.-&gt;</span></span>C4<span class="token text string">(productB2)</span>

<span class="token keyword">classDef</span> red <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f9f<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>4px</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="要点总结" tabindex="-1"><a class="header-anchor" href="#要点总结"><span>要点总结</span></a></h3><ul><li><p>如果没有应对 “<strong>多系列</strong>对象构建” 的需求变化，则没有必要使用Abstract Factory模式，这时候使用简单的工厂完全可以</p></li><li><p>“<strong>系列</strong>对象&quot; 指的是在某一特定系列下的对象之间有相互依赖、或作用的关系。不同系列的对象之间不能相互依赖</p><p>（结合代码就是：SqlConnention和SqlCommand依赖，而不能与OracleConnention依赖）</p></li><li><p>Abstract Factory模式主要在于应对 “新<strong>系列</strong>&quot; 的需求变动。其缺点在于难以应对 “新对象” 的需求变动</p></li></ul><h3 id="个人体会" tabindex="-1"><a class="header-anchor" href="#个人体会"><span>个人体会</span></a></h3><h4 id="【对比】抽象工厂和工厂方法" tabindex="-1"><a class="header-anchor" href="#【对比】抽象工厂和工厂方法"><span>【对比】抽象工厂和工厂方法</span></a></h4><p>可以说工厂方法是抽象工厂中的一个特例</p><h4 id="怎么理解-系列-的变化" tabindex="-1"><a class="header-anchor" href="#怎么理解-系列-的变化"><span>怎么理解 “系列” 的变化</span></a></h4><p>比如结合代码：需要增添新的数据库</p>`,53),i=[r];function t(d,o){return a(),e("div",null,i)}const v=n(l,[["render",t],["__file","07. 抽象工厂 Abstract Factory.html.vue"]]),u=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/07.%20%E6%8A%BD%E8%B1%A1%E5%B7%A5%E5%8E%82%20Abstract%20Factory.html","title":"《C++设计模式》视频_李建忠","lang":"zh-CN","frontmatter":{"description":"《C++设计模式》视频_李建忠 目录 [toc] 抽象工厂 全程 工厂方法模式，有时简称 工厂方法，有时简称 工厂模式 所属分类——“对象创建” 模式 [省略] 动机（Motivation） 简概 在软件系统中，经常面临着 “一系列相互依赖的对象\\" 的创建工作；同时，由于需求的变化，往往存在更多系列对象的创建工作。 如何应对这种变化？如何绕过常规的对象...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/07.%20%E6%8A%BD%E8%B1%A1%E5%B7%A5%E5%8E%82%20Abstract%20Factory.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"《C++设计模式》视频_李建忠"}],["meta",{"property":"og:description","content":"《C++设计模式》视频_李建忠 目录 [toc] 抽象工厂 全程 工厂方法模式，有时简称 工厂方法，有时简称 工厂模式 所属分类——“对象创建” 模式 [省略] 动机（Motivation） 简概 在软件系统中，经常面临着 “一系列相互依赖的对象\\" 的创建工作；同时，由于需求的变化，往往存在更多系列对象的创建工作。 如何应对这种变化？如何绕过常规的对象..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《C++设计模式》视频_李建忠\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"《C++设计模式》视频_李建忠","slug":"《c-设计模式》视频-李建忠","link":"#《c-设计模式》视频-李建忠","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"抽象工厂","slug":"抽象工厂","link":"#抽象工厂","children":[{"level":2,"title":"所属分类——“对象创建” 模式","slug":"所属分类——-对象创建-模式","link":"#所属分类——-对象创建-模式","children":[]},{"level":2,"title":"动机（Motivation）","slug":"动机-motivation","link":"#动机-motivation","children":[{"level":3,"title":"简概","slug":"简概","link":"#简概","children":[]},{"level":3,"title":"代码体现2","slug":"代码体现2","link":"#代码体现2","children":[{"level":4,"title":"举例 - 写法1","slug":"举例-写法1","link":"#举例-写法1","children":[]},{"level":4,"title":"举例 - 写法2（工厂方法）","slug":"举例-写法2-工厂方法","link":"#举例-写法2-工厂方法","children":[]},{"level":4,"title":"分析 - 写法2（工厂方法）","slug":"分析-写法2-工厂方法","link":"#分析-写法2-工厂方法","children":[]},{"level":4,"title":"举例 - 写法3（抽象工厂）","slug":"举例-写法3-抽象工厂","link":"#举例-写法3-抽象工厂","children":[]},{"level":4,"title":"分析 - 写法3（抽象工厂）","slug":"分析-写法3-抽象工厂","link":"#分析-写法3-抽象工厂","children":[]}]}]},{"level":2,"title":"设计模式","slug":"设计模式","link":"#设计模式","children":[{"level":3,"title":"模式定义","slug":"模式定义","link":"#模式定义","children":[]},{"level":3,"title":"结构（Structure）","slug":"结构-structure","link":"#结构-structure","children":[]},{"level":3,"title":"要点总结","slug":"要点总结","link":"#要点总结","children":[]},{"level":3,"title":"个人体会","slug":"个人体会","link":"#个人体会","children":[{"level":4,"title":"【对比】抽象工厂和工厂方法","slug":"【对比】抽象工厂和工厂方法","link":"#【对比】抽象工厂和工厂方法","children":[]},{"level":4,"title":"怎么理解 “系列” 的变化","slug":"怎么理解-系列-的变化","link":"#怎么理解-系列-的变化","children":[]}]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":5.1,"words":1529},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/03. Tools/02. 管理层/01. 多类管理/设计模式/《C++设计模式》视频_李建忠/07. 抽象工厂 Abstract Factory.md","autoDesc":true}');export{v as comp,u as data};

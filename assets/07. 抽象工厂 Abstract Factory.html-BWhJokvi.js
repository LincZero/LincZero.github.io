import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as l,c,a as i,d as a,e as n}from"./app-BxiJCPgt.js";const s={},r=n('<h1 id="《c-设计模式》视频-李建忠" tabindex="-1"><a class="header-anchor" href="#《c-设计模式》视频-李建忠"><span>《C++设计模式》视频_李建忠</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><p>[toc]</p><h1 id="抽象工厂" tabindex="-1"><a class="header-anchor" href="#抽象工厂"><span>抽象工厂</span></a></h1><p>全程 <code>工厂方法模式</code>，有时简称 <code>工厂方法</code>，有时简称 <code>工厂模式</code></p><h2 id="所属分类——-对象创建-模式" tabindex="-1"><a class="header-anchor" href="#所属分类——-对象创建-模式"><span>所属分类——“对象创建” 模式</span></a></h2>',6),o={class:"ab-note drop-shadow"},v={class:"markdown-rendered"},m=n(`<h2 id="动机-motivation" tabindex="-1"><a class="header-anchor" href="#动机-motivation"><span>动机（Motivation）</span></a></h2><h3 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h3><ul><li>在软件系统中，经常面临着 <strong>“一系列相互依赖的对象&quot;</strong> 的创建工作；同时，由于需求的变化，往往存在更多系列对象的创建工作。</li><li>如何应对这种变化？如何绕过常规的对象创建方法（new），提供一种 “封装机制&quot; 来避免客户程序和这种 “<strong>多系列</strong>具体对象创建工作” 的紧耦合？</li></ul><h3 id="代码体现2" tabindex="-1"><a class="header-anchor" href="#代码体现2"><span>代码体现2</span></a></h3><p>访问数据、访问数据库</p><p>考虑时间轴：可以访问多种数据库</p><h4 id="举例-写法1" tabindex="-1"><a class="header-anchor" href="#举例-写法1"><span>举例 - 写法1</span></a></h4><p>高级类</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class EmployeeDAO{
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分析-写法2-工厂方法" tabindex="-1"><a class="header-anchor" href="#分析-写法2-工厂方法"><span>分析 - 写法2（工厂方法）</span></a></h4><p>代码结构</p>`,18),u=i("p",null,"运行时",-1),b=n(`<p>分析，存在的问题</p><ul><li>工厂之间具有关联性</li></ul><h4 id="举例-写法3-抽象工厂" tabindex="-1"><a class="header-anchor" href="#举例-写法3-抽象工厂"><span>举例 - 写法3（抽象工厂）</span></a></h4><p>抽象基类</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 数据库访问有关基类
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分析-写法3-抽象工厂" tabindex="-1"><a class="header-anchor" href="#分析-写法3-抽象工厂"><span>分析 - 写法3（抽象工厂）</span></a></h4><p>代码结构</p>`,11),p=n('<h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式"><span>设计模式</span></a></h2><h3 id="模式定义" tabindex="-1"><a class="header-anchor" href="#模式定义"><span>模式定义</span></a></h3><blockquote><p>提供一个接口,让该接口负责创建一系列 <strong>&quot;相关或者相互依赖的对象”</strong>，无需指定它们具体的类。</p><p>——《设计模式》GoF</p></blockquote><h3 id="结构-structure" tabindex="-1"><a class="header-anchor" href="#结构-structure"><span>结构（Structure）</span></a></h3><p>（红色表示稳定）</p>',5),C=n('<h3 id="要点总结" tabindex="-1"><a class="header-anchor" href="#要点总结"><span>要点总结</span></a></h3><ul><li><p>如果没有应对 “<strong>多系列</strong>对象构建” 的需求变化，则没有必要使用Abstract Factory模式，这时候使用简单的工厂完全可以</p></li><li><p>“<strong>系列</strong>对象&quot; 指的是在某一特定系列下的对象之间有相互依赖、或作用的关系。不同系列的对象之间不能相互依赖</p><p>（结合代码就是：SqlConnention和SqlCommand依赖，而不能与OracleConnention依赖）</p></li><li><p>Abstract Factory模式主要在于应对 “新<strong>系列</strong>&quot; 的需求变动。其缺点在于难以应对 “新对象” 的需求变动</p></li></ul><h3 id="个人体会" tabindex="-1"><a class="header-anchor" href="#个人体会"><span>个人体会</span></a></h3><h4 id="【对比】抽象工厂和工厂方法" tabindex="-1"><a class="header-anchor" href="#【对比】抽象工厂和工厂方法"><span>【对比】抽象工厂和工厂方法</span></a></h4><p>可以说工厂方法是抽象工厂中的一个特例</p><h4 id="怎么理解-系列-的变化" tabindex="-1"><a class="header-anchor" href="#怎么理解-系列-的变化"><span>怎么理解 “系列” 的变化</span></a></h4><p>比如结合代码：需要增添新的数据库</p>',7);function h(D,g){const e=d("mermaid");return l(),c("div",null,[r,i("div",o,[i("div",v,[i("div",null,[m,a(e,{id:"mermaid-55",code:"eJxLL0osyFAIceIqLk2CsJ/sWv50cuPL5hVPO9q4FIDA08XJOT8vLzW5JDM/T1f32ZZ9z6fM19W1Cy7MAYvngcSfr+20Ts5JLC5GVa5QlJqCMCQ3NzEvBd0EsCCadrAYkt7EksSg1MSU1CJUzQhxZP1wQbABqXkpCL893b70aV8T1G+cKC51S0wuyS+qxOU/qDQOb0JlwRZCjAX7AIeZyHLYPI5mGtw/WI3DkMYaFMhGgkKEC6zCJTUNJKKQlpmTY6WcZpmmU1xSlJ+daqVsbGwMZeuWZ6aUZFiZFFRYcwEAg6Tcsw=="}),u,a(e,{id:"mermaid-59",code:"eJyNkMFKw0AURdeZr/AHZuXejV9SabAbrcS6b7XRqEGCrUUNpikSEuxCgmDbpCE/M3dm8hdOM6IERLp7PN6979x7aLVOOuT07KAedvjU22XLNywi3J2L5yHsBStGIs2JsW+ZrV7X4pMV/3igVJZj+AGle2x5rRQsizEaVBcJnMuGzjxu/9pX80eRxWqtD4nBg2HVD/GUUArnBfEt3InyhGvDmysfba5x+E0h0xmmmdJz96q6d4jBilKME/keaRz0182HsvTkzGX5qwgHxDgye51uu74get689ZFndeia+Tt6mmP1ydYh7Ejx/GCSLcmUptEX+b8lheEHPNzI/kj0BdC9/YY="}),b,a(e,{id:"mermaid-91",code:"eJxLL0osyFAIceIqLk2CsJ/sWv50cuPL5hVPO9q4FIDA08XJOT8vLzW5JDM/T1f32ZZ9z6fM19W1Cy7MAYvngcStk3MSi4tR1SoUpabgM0HXzr8oMTknFWEKQnVubmJeCrplYEFkm8ACqNagaUTYAZaAqkssSQxKTUxJLUK1ASEOtwQugmQLFt0waxByXKlA2+CB+nT70qd9TdBA5QQ61C0xuSS/qBLhGagA2BokBWgOhAljVwJ3BVwZyBFcYDtcUtNAZiukZebkWCmnWabpFJcU5WenWikbGxtD2brlmSklGVYmBRXWXACbAsu8"}),p,a(e,{id:"mermaid-112",code:"eJyNkb9Lw0AUx2fzVwS6KHiFXLrYQuGu4uzgJg5pcrHF0oRLijoqDuLgYkFQsDiIc1EQWtR/xjT9M3xpckm9HLZD4OXd532/78cxt/yOfkC1YNBOY9IOQm7Z4R58Hj/XZzef8/Fz9PES3V7GD1fZ72gSj6faBiGHLc6skO1zzxnYITlq2D0rCHRCdM4cAOhfgOYAXQCs7xTWLa9vcxayzNqAcqNkkCRLov/qYCjBKh28QkesQtToP5PX6O5C2gIBJQkUM8r1pYklgqodaMmBqh0UO43fptH1PaxSNLEUYhUK2xJqBUpTVCMEodn7VzwcIdSE40gJDAlp5qXnooM1ICxDtAxBg2tAoGQQVE0vPf8eRo9PVdRsGZu+6GcLCFomsCBoQmCFhplr4IRQaNRyDSC0xdF2mZucSXe7vV694u642zCCd8LqFdM0sxiddp2wU6/5Zw3tFz68bm4="}),C])])])])}const A=t(s,[["render",h],["__file","07. 抽象工厂 Abstract Factory.html.vue"]]),y=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/07.%20%E6%8A%BD%E8%B1%A1%E5%B7%A5%E5%8E%82%20Abstract%20Factory.html","title":"《C++设计模式》视频_李建忠","lang":"zh-CN","frontmatter":{"description":"《C++设计模式》视频_李建忠 目录 [toc] 抽象工厂 全程 工厂方法模式，有时简称 工厂方法，有时简称 工厂模式 所属分类——“对象创建” 模式 动机（Motivation） 简概 在软件系统中，经常面临着 “一系列相互依赖的对象\\" 的创建工作；同时，由于需求的变化，往往存在更多系列对象的创建工作。 如何应对这种变化？如何绕过常规的对象创建方法（...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/07.%20%E6%8A%BD%E8%B1%A1%E5%B7%A5%E5%8E%82%20Abstract%20Factory.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"《C++设计模式》视频_李建忠"}],["meta",{"property":"og:description","content":"《C++设计模式》视频_李建忠 目录 [toc] 抽象工厂 全程 工厂方法模式，有时简称 工厂方法，有时简称 工厂模式 所属分类——“对象创建” 模式 动机（Motivation） 简概 在软件系统中，经常面临着 “一系列相互依赖的对象\\" 的创建工作；同时，由于需求的变化，往往存在更多系列对象的创建工作。 如何应对这种变化？如何绕过常规的对象创建方法（..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《C++设计模式》视频_李建忠\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"《C++设计模式》视频_李建忠","slug":"《c-设计模式》视频-李建忠","link":"#《c-设计模式》视频-李建忠","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"抽象工厂","slug":"抽象工厂","link":"#抽象工厂","children":[{"level":2,"title":"所属分类——“对象创建” 模式","slug":"所属分类——-对象创建-模式","link":"#所属分类——-对象创建-模式","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":5.1,"words":1529},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/03. Tools/02. 管理层/01. 多类管理/设计模式/《C++设计模式》视频_李建忠/07. 抽象工厂 Abstract Factory.md","excerpt":"\\n<h1>目录</h1>\\n<p>[toc]</p>\\n<h1>抽象工厂</h1>\\n<p>全程 <code>工厂方法模式</code>，有时简称 <code>工厂方法</code>，有时简称 <code>工厂模式</code></p>\\n<h2>所属分类——“对象创建” 模式</h2>\\n<div class=\\"ab-note drop-shadow\\"><div class=\\"markdown-rendered\\"><div><h2>动机（Motivation）</h2>\\n<h3>简概</h3>\\n<ul>\\n<li>在软件系统中，经常面临着 <strong>“一系列相互依赖的对象\\"</strong> 的创建工作；同时，由于需求的变化，往往存在更多系列对象的创建工作。</li>\\n<li>如何应对这种变化？如何绕过常规的对象创建方法（new），提供一种 “封装机制\\" 来避免客户程序和这种 “<strong>多系列</strong>具体对象创建工作” 的紧耦合？</li>\\n</ul>\\n<h3>代码体现2</h3>\\n<p>访问数据、访问数据库</p>\\n<p>考虑时间轴：可以访问多种数据库</p>\\n<h4>举例 - 写法1</h4>\\n<p>高级类</p>\\n<div class=\\"language-c++\\" data-ext=\\"c++\\" data-title=\\"c++\\"><pre class=\\"language-c++\\"><code>class EmployeeDAO{\\npublic:\\n\\tvector&lt;EmployeeD0&gt;GetEmployees(){\\n\\t\\tsqlConnection* connection = new sqlConnection() ;\\t// 数据库连接\\n\\t\\tconnection-&gt;ConnectionString(\\"...\\");\\n\\n        sqlCommand* command = new sqlCommand() ;\\t\\t\\t// SQL语句\\n        command-&gt;CommandText(\\"...\\");\\n        command-&gt;SetConnection(connection);\\t//关联性\\n\\n\\t\\tsqlDataReader* reader = command-&gt;ExecuteReader();\\t// 数据库数据读取\\n        while (reader-&gt;Read()){\\n\\n        }\\n    }\\n};\\n</code></pre></div><h4>举例 - 写法2（工厂方法）</h4>\\n<p>抽象基类</p>\\n<div class=\\"language-c++\\" data-ext=\\"c++\\" data-title=\\"c++\\"><pre class=\\"language-c++\\"><code>// 数据库访问有关基类\\nclass IDBConnection{\\t\\t// 数据库连接\\n\\n};\\n\\nclass IDBCommand{\\t\\t\\t// 数据库SQL语句\\n\\n};\\n\\nclass IDataReader{\\t\\t\\t// 数据库数据读取\\n\\n};\\n\\n// 工厂抽象基类\\nclass IDBConnectionFactory{\\t// 工厂 - 数据库连接\\npublic:\\n    virtual IDBConnection* CreateDBConnection()=0;\\n};\\n\\nclass IDBCommandFactory{\\t// 工厂 - 数据库SQL语句\\npublic:\\n    virtual IDBCommand* CreateDBCommand()=0;\\n};\\n\\nclass IDataReaderFactory{\\t// 工厂 - 数据库数据读取\\npublic:\\n    virtual IDataReader* CreateDataReader()=0;\\n};\\n</code></pre></div><p>系列扩展</p>\\n<div class=\\"language-c++\\" data-ext=\\"c++\\" data-title=\\"c++\\"><pre class=\\"language-c++\\"><code>// 支持SQL Server\\nclass SqlConnention: public IDBConnection{\\n\\n};\\n\\nclass SqlCommand: public IDBCommand{\\n\\n};\\n\\nclass SqlDataReader: public IDataReader{\\n\\n};\\n\\n// 工厂具体类 - 支持SQL Server\\nclass SqlConnentionFactory: public IDBConnectionFactory{\\n\\n};\\nclass SqlCommandFactory: public IDBCommandFactory{\\n\\n};\\nclass SqlDataReaderFactory: public IDataReaderFactory{\\n\\n};\\n\\n// 支持Oracle\\nclass OracleConnention: public IDBConnection{\\n\\n};\\n\\nclass OracleCommand: public IDBCommand{\\n\\n};\\n\\nclass OracleDataReader: public IDataReader{\\n\\n};\\n\\n// 工厂具体类 - 支持Oracle\\n// [省略]...\\n// [省略]...\\n// [省略]...\\n</code></pre></div><p>高层类</p>\\n<div class=\\"language-c++\\" data-ext=\\"c++\\" data-title=\\"c++\\"><pre class=\\"language-c++\\"><code>// 运行 - 高级类\\nclass EmployeeDAO{\\n    IDBConnectionFactory* dbConnectionFactory;\\n    IDBCommandFactory* dbCommandFactory;\\n    IDataReaderFactory* dbDataReaderFactory;\\n\\npublic:\\n\\tvector&lt;EmployeeD0&gt;GetEmployees(){\\n\\t\\tIDBConnection* connection = dbConnectionFactory-&gt;CreateDBConnection;// 【修改】声明为抽象基类的多态指针，且尝试绕过new\\n\\t\\tconnection-&gt;ConnectionString(\\"...\\");\\n\\n        IDBCommand* command = dbCommandFactory-&gt;CreateDBCommand;\\t\\t\\t// 【修改】声明为抽象基类的多态指针，且尝试绕过new\\n        command-&gt;CommandText(\\"...\\");\\n        command-&gt;SetConnection(connection);\\t//关联性\\n\\n\\t\\tIDBDataReader* reader = command-&gt;CreateDataReader;//关联性\\t\\t\\t  // 【修改】声明为抽象基类的多态指针，且尝试绕过new\\n        while (reader-&gt;Read()){\\n\\n        }\\n    }\\n};\\n</code></pre></div><h4>分析 - 写法2（工厂方法）</h4>\\n<p>代码结构</p>\\n<p>运行时</p>\\n<p>分析，存在的问题</p>\\n<ul>\\n<li>工厂之间具有关联性</li>\\n</ul>\\n<h4>举例 - 写法3（抽象工厂）</h4>\\n<p>抽象基类</p>\\n<div class=\\"language-c++\\" data-ext=\\"c++\\" data-title=\\"c++\\"><pre class=\\"language-c++\\"><code>// 数据库访问有关基类\\nclass IDBConnection{\\t\\t// 数据库连接\\n\\n};\\n\\nclass IDBCommand{\\t\\t\\t// 数据库SQL语句\\n\\n};\\n\\nclass IDataReader{\\t\\t\\t// 数据库数据读取\\n\\n};\\n\\n// 工厂抽象基类\\nclass IDBFactory{\\t\\t\\t\\t\\t\\t\\t\\t\\t// 【修改】工厂 - 合并为一个通用的\\npublic:\\n    virtual IDBConnection* CreateDBConnection()=0;\\n    virtual IDBCommand* CreateDBCommand()=0;\\n    virtual IDataReader* CreateDataReader()=0;\\n};\\n</code></pre></div><p>系列扩展</p>\\n<div class=\\"language-c++\\" data-ext=\\"c++\\" data-title=\\"c++\\"><pre class=\\"language-c++\\"><code>// 支持SQL Server\\nclass SqlConnention: public IDBConnection{\\n\\n};\\n\\nclass SqlCommand: public IDBCommand{\\n\\n};\\n\\nclass SqlDataReader: public IDataReader{\\n\\n};\\n\\n// 工厂具体类 - 支持SQL Server\\nclass SqlDBFactory: public IDBFactory{\\t\\t\\t\\t// 【修改】工厂SQL - 合并为一个通用的\\n\\n};\\n\\n// 支持Oracle\\nclass OracleConnention: public IDBConnection{\\n\\n};\\n\\nclass OracleCommand: public IDBCommand{\\n\\n};\\n\\nclass OracleDataReader: public IDataReader{\\n\\n};\\n\\n// 工厂具体类 - 支持Oracle\\n// 略...\\n// 略...\\n// 略...\\n</code></pre></div><p>高层类</p>\\n<div class=\\"language-c++\\" data-ext=\\"c++\\" data-title=\\"c++\\"><pre class=\\"language-c++\\"><code>// 运行 - 高级类\\nclass EmployeeDAO{\\n    IDBFactory* dbFactory;\\t\\t\\t\\t\\t\\t\\t// 【修改】合并为一个通用的，抽象工厂指针。会被传入工厂具体类\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t// 传入SqlDBFactory或OracleDBFactory，用来代表一个系列。【妙啊！！！】\\npublic:\\n\\tvector&lt;EmployeeD0&gt;GetEmployees(){\\n\\t\\tIDBConnection* connection = dbFactory-&gt;CreateDBConnection;\\n\\t\\tconnection-&gt;ConnectionString(\\"...\\");\\n\\n        IDBCommand* command = dbFactory-&gt;CreateDBCommand;\\n        command-&gt;CommandText(\\"...\\");\\n        command-&gt;SetConnection(connection);\\t//关联性\\n\\n\\t\\tIDBDataReader* reader = command-&gt;CreateDataReader;//关联性\\n        while (reader-&gt;Read()){\\n\\n        }\\n    }\\n};\\n</code></pre></div><h4>分析 - 写法3（抽象工厂）</h4>\\n<p>代码结构</p>\\n<h2>设计模式</h2>\\n<h3>模式定义</h3>\\n<blockquote>\\n<p>提供一个接口,让该接口负责创建一系列 <strong>\\"相关或者相互依赖的对象”</strong>，无需指定它们具体的类。</p>\\n<p>——《设计模式》GoF</p>\\n</blockquote>\\n<h3>结构（Structure）</h3>\\n<p>（红色表示稳定）</p>\\n<h3>要点总结</h3>\\n<ul>\\n<li>\\n<p>如果没有应对 “<strong>多系列</strong>对象构建” 的需求变化，则没有必要使用Abstract Factory模式，这时候使用简单的工厂完全可以</p>\\n</li>\\n<li>\\n<p>“<strong>系列</strong>对象\\" 指的是在某一特定系列下的对象之间有相互依赖、或作用的关系。不同系列的对象之间不能相互依赖</p>\\n<p>（结合代码就是：SqlConnention和SqlCommand依赖，而不能与OracleConnention依赖）</p>\\n</li>\\n<li>\\n<p>Abstract Factory模式主要在于应对 “新<strong>系列</strong>\\" 的需求变动。其缺点在于难以应对 “新对象” 的需求变动</p>\\n</li>\\n</ul>\\n<h3>个人体会</h3>\\n<h4>【对比】抽象工厂和工厂方法</h4>\\n<p>可以说工厂方法是抽象工厂中的一个特例</p>\\n<h4>怎么理解 “系列” 的变化</h4>\\n<p>比如结合代码：需要增添新的数据库</p>\\n</div></div></div>","autoDesc":true}');export{A as comp,y as data};

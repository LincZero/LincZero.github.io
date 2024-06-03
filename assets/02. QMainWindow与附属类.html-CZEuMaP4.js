import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,a}from"./app-BAt33Ddg.js";const t={},d=a(`<h1 id="qt" tabindex="-1"><a class="header-anchor" href="#qt"><span>QT</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="qmainwindow" tabindex="-1"><a class="header-anchor" href="#qmainwindow"><span>QMainWindow</span></a></h1><h2 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h2><p>QMainWindow是一个为用户提供主窗口程序的类，包含：（五类）</p><ul><li>一个菜单栏（menu bar）</li><li>多个工具栏（tool bars）</li><li>多个铆接部件（dock widgets）</li><li>一个状态栏（status bar）</li><li>一个中心部件（central widget）</li></ul><p>是许多应用程序的基础</p><h2 id="五部件-按部件" tabindex="-1"><a class="header-anchor" href="#五部件-按部件"><span>五部件 - 按部件</span></a></h2><h3 id="菜单栏-qmenubar-只能有一个" tabindex="-1"><a class="header-anchor" href="#菜单栏-qmenubar-只能有一个"><span>菜单栏 <code>QMenuBar</code>（只能有一个）</span></a></h3><h4 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h4><ul><li><p>基本流程</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// (0) 头文件
#include &lt;QMenuBar&gt;

// (1) 创建菜单栏（这里在底层也是对象树，只不过不显示传入父对象）
QMenuBar * bar = menuBar();
QMenuBar * bar = new QMenuBar();	// 或new方式

// (2) 将菜单栏放入窗口（写法不同于放入窗口，不是\`setParent()\`）
setMenuBar(bar);

// (3) 创建菜单，例如：
QMenu * fileMenu = bar-&gt;addMenu(&quot;File&quot;);
QMenu * editMenu = bar-&gt;addMenu(&quot;Edit&quot;);

// (4) 创建菜单项，例如：
QAction * newAction = fileMenu-&gt;addAction(&quot;New&quot;);
QAction * openAction = fileMenu-&gt;addAction(&quot;Open&quot;);
fileMenu-&gt;addSeparator();			// 添加分隔线
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>代码示例</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;QMenuBar&gt;

// 创建并放入
QMenuBar * menuBar = new QMenuBar();
setMenuBar(menuBar);

// 添加项
QMenu * menuFile = menuBar-&gt;addMenu(&quot;File&quot;);		// addMenu
QAction * newAction = menuFile-&gt;addAction(&quot;New&quot;);	// addAction
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="常用方法" tabindex="-1"><a class="header-anchor" href="#常用方法"><span>常用方法</span></a></h4><ul><li><p>QMenuBar，菜单栏，set、add</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>addAction		// 添加活动项
addMenu			// 添加菜单项
    
QAction *	addAction(const QString &amp;text)
QAction *	addAction(const QString &amp;text, const QObject *receiver, const char *member)
QAction *	addAction(const QString &amp;text, const Obj *receiver, PointerToMemberFunctionOrFunctor method)
QAction *	addAction(const QString &amp;text, Functor functor)
QAction *	addMenu(QMenu *menu)
QMenu *		addMenu(const QString &amp;title)
QMenu *		addMenu(const QIcon &amp;icon, const QString &amp;title)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>QMenu，菜单项，set、add</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>addAction		// 添加活动项
addMenu			// 添加菜单项（嵌套菜单项）
addSection		// 
addSeparator	// 添加分隔线
    
QAction *	addAction(const QString &amp;text)
QAction *	addAction(const QIcon &amp;icon, const QString &amp;text)
QAction *	addAction(const QString &amp;text, Functor functor, const QKeySequence &amp;shortcut = 0)
QAction *	addAction(const QIcon &amp;icon, const QString &amp;text, Functor functor, const QKeySequence &amp;shortcut = 0)
QAction *	addMenu(QMenu *menu)
QMenu *		addMenu(const QString &amp;title)
QMenu *		addMenu(const QIcon &amp;icon, const QString &amp;title)
QAction *	addSection(const QString &amp;text)
QAction *	addSection(const QIcon &amp;icon, const QString &amp;text)
QAction *	addSeparator()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="工具栏-qtoolbar-可有多个" tabindex="-1"><a class="header-anchor" href="#工具栏-qtoolbar-可有多个"><span>工具栏 <code>QToolBar</code>（可有多个）</span></a></h3><h4 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1"><span>使用</span></a></h4><ul><li><p>基本流程</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// (0) 头文件
#include &lt;QToolbar&gt;

// (1) 创建工具栏
QToolBar * toolBar = new QToolBar(this);

// (2) 将工具栏放入窗口
addToolBar(toolBar);

// 重载版本可以初始化位置
QToolBar(Qt::LeftToolBarArea, toolBar)	// Qt::表示这是一个媒体值（类似于枚举值？）
    
// (3) 创建工具项，例如：
toolBar—&gt;addAction(newAction);			// 用QAction作参时，是共用同一个QAction）
toolBar-&gt;addSeparator();				// 添加分隔线
QPushButton * btn = new QPushButton(&quot;Button&quot;, this);
toolBar-&gt;addWidget(btn);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="常用方法-1" tabindex="-1"><a class="header-anchor" href="#常用方法-1"><span>常用方法</span></a></h4><ul><li><p>set、add</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>addAction		// 添加活动项
addSeparator	// 添加分隔线
addWidget		// 添加控件
    
QAction *	addAction(const QString &amp;text)
QAction *	addAction(const QIcon &amp;icon, const QString &amp;text)
QAction *	addAction(const QString &amp;text, const QObject *receiver, const char *member)
QAction *	addAction(const QIcon &amp;icon, const QString &amp;text, const QObject *receiver, const char *member)
QAction *	addAction(const QString &amp;text, Functor functor)
QAction *	addAction(const QString &amp;text, const QObject *context, Functor functor)
QAction *	addAction(const QIcon &amp;icon, const QString &amp;text, Functor functor)
QAction *	addAction(const QIcon &amp;icon, const QString &amp;text, const QObject *context, Functor functor)
QAction *	addSeparator()
QAction *	addWidget(QWidget *widget)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>其他</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 工具栏默认可以拖拽、停靠
toolBar-&gt;setAllowedAreas(Qt::LeftToolBarArea | Qt::RightToolBarArea);	// 限制停靠位置
toolBar-&gt;setFloatable(false);											// 限制浮动
toolBar-&gt;setMovable(false);												// 限制移动（无法更改位置+无法浮动）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="状态栏-qstatusbar-只能有一个" tabindex="-1"><a class="header-anchor" href="#状态栏-qstatusbar-只能有一个"><span>状态栏 <code>QStatusBar</code>（只能有一个）</span></a></h3><h4 id="使用-2" tabindex="-1"><a class="header-anchor" href="#使用-2"><span>使用</span></a></h4><ul><li><p>基本流程</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// (0) 头文件
#include &lt;QStatusBar&gt;

// (1) 创建状态栏
QStatusBar * stBar = statusBar();
QStatusBar * stbar = new QStatusBar(); // 或new方式

// (2) 将状态栏放入窗口
setStatusBar(stBar);

// (3) 创建标签控件，例如
QLabel * label1 = new QLabel(&quot;提示信息&quot;, this);
stBar-&gt;addWidget(label1);				// 靠左显示
stBar-&gt;addPermanentWidget(label2)		// 靠右显示
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>代码示例</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;QStatusBar&gt;

// 创建并放入
QStatusBar * stbar = new QStatusBar();
setStatusBar(stBar);

// 添加活动项
QLabel * label1 = new QLabel(&quot;提示信息&quot;, this); stBar-&gt;addWidget(label1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="常用方法-2" tabindex="-1"><a class="header-anchor" href="#常用方法-2"><span>常用方法</span></a></h4><ul><li><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>  addPermanentWidget
  addWidget		// 添加控件
  
  void addPermanentWidget(QWidget *widget, int stretch = 0)
  void addWidget(QWidget *widget, int stretch = 0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="铆接部件-qdockwidget-浮靠窗口-可有多个" tabindex="-1"><a class="header-anchor" href="#铆接部件-qdockwidget-浮靠窗口-可有多个"><span>铆接部件 <code>QDockWidget</code>（浮靠窗口）（可有多个）</span></a></h3><h4 id="使用-3" tabindex="-1"><a class="header-anchor" href="#使用-3"><span>使用</span></a></h4><ul><li><p>基本流程</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// (0) 头文件
#include &lt;QDockWidget&gt;

// (1) 创建铆接部件
QDockWidget * dockWidget = new QDockWidget(&quot;浮动&quot;, this);

// (2) 将铆接部件放入窗口
addDockWidget(Qt::BottomDockWidgetArea, dockWidget);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="常用方法-3" tabindex="-1"><a class="header-anchor" href="#常用方法-3"><span>常用方法</span></a></h4><ul><li>限制停靠区域，如：<code>toolBar-&gt;setAllowedAreas(Qt::LeftToolBarArea | Qt::RightToolBarArea);</code></li></ul><h3 id="核心部件-中心部件-只能有一个" tabindex="-1"><a class="header-anchor" href="#核心部件-中心部件-只能有一个"><span>核心部件（中心部件）（只能有一个）</span></a></h3><h4 id="使用-4" tabindex="-1"><a class="header-anchor" href="#使用-4"><span>使用</span></a></h4><ul><li>基本流程</li><li><code>setCentralWidget(edit);</code>，设置中心部件</li></ul><h2 id="【捋一下】五部件" tabindex="-1"><a class="header-anchor" href="#【捋一下】五部件"><span>【捋一下】五部件</span></a></h2><h3 id="工具栏和铆接部件-区别和选用" tabindex="-1"><a class="header-anchor" href="#工具栏和铆接部件-区别和选用"><span>工具栏和铆接部件 区别和选用</span></a></h3><ul><li><p>模块化</p><p>添加设计器界面类时，可以添加QDockWidget、QFrame、QGroupBox、QScrollArea、QMdiArea、QTabWidget、QToolBox、QStackedWidget、Qwizard、QWizardPage窗口部件，和Dialog、MainWindow、Widget</p><p>其中有铆接部件但没有工具栏，即铆接部件可以作为单独的模块化编程</p></li><li><p>功能性</p><p>铆接部件更复杂、可以添加各种控件，而工具栏只能添加Action</p></li><li><p>标题</p><p>铆接部件有标题、有关闭，而工具栏均无</p></li></ul><h2 id="【捋一下】依赖、其他" tabindex="-1"><a class="header-anchor" href="#【捋一下】依赖、其他"><span>【捋一下】依赖、其他</span></a></h2><h3 id="嵌套关系" tabindex="-1"><a class="header-anchor" href="#嵌套关系"><span>嵌套关系</span></a></h3><p>创建依赖</p><table><thead><tr><th>部件</th><th>菜单栏</th><th>菜单</th><th>工具栏</th><th>状态栏</th></tr></thead><tbody><tr><td>类名</td><td>QMenuBar</td><td>QMenu</td><td>QToolBar</td><td>QStatusBar</td></tr><tr><td><code>addAction</code></td><td><strong>支持</strong></td><td><strong>支持</strong></td><td><strong>支持</strong></td><td>——</td></tr><tr><td><code>addMenu</code></td><td><strong>支持</strong></td><td><strong>支持</strong></td><td>——</td><td>——</td></tr><tr><td><code>addSeparator</code></td><td>——</td><td><strong>支持</strong></td><td><strong>支持</strong></td><td>——</td></tr><tr><td><code>addWidget</code></td><td>——</td><td>——</td><td><strong>支持</strong></td><td><strong>支持</strong></td></tr><tr><td><s><code>addSection</code></s></td><td>——</td><td><strong>支持</strong></td><td>——</td><td>——</td></tr><tr><td><s><code>addPermanentWidget</code></s></td><td>——</td><td>——</td><td>——</td><td><strong>支持</strong></td></tr></tbody></table><p>创建依赖图（从QMainWindow开始，区分<code>set</code>和<code>add</code>方法）</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
QMainWindow<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">setMenuBar</span><span class="token arrow operator">--&gt;</span></span>QMenuBar
	QMenuBar<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">addMenu</span><span class="token arrow operator">--&gt;</span></span>QMenu
		QMenu<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">addAction</span><span class="token arrow operator">--&gt;</span></span>ab<span class="token text string">[QAction]</span>
		QMenu<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">addMenu</span><span class="token arrow operator">--&gt;</span></span>QMenu
		QMenu<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">addSeparator</span><span class="token arrow operator">--&gt;</span></span>as<span class="token text string">[Separator]</span>
	QMenuBar<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">addAction</span><span class="token arrow operator">---&gt;</span></span>aa<span class="token text string">[QAction]</span>
QMainWindow<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">setStatusBar</span><span class="token arrow operator">--&gt;</span></span>QStatusBar
	QStatusBar<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">addWidget</span><span class="token arrow operator">---&gt;</span></span>bw<span class="token text string">[QWidget]</span>
QMainWindow<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">setCentralWidget</span><span class="token arrow operator">--&gt;</span></span>QWidget及子类
QMainWindow<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">addToolBar</span><span class="token arrow operator">--&gt;</span></span>QToolBar
	QToolBar<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">addAction</span><span class="token arrow operator">---&gt;</span></span>ca<span class="token text string">[QAction]</span>
	QToolBar<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">addWidget</span><span class="token arrow operator">---&gt;</span></span>cw<span class="token text string">[QWidget]</span>
	QToolBar<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">addSeparator</span><span class="token arrow operator">---&gt;</span></span>cs<span class="token text string">[Separator]</span>
QMainWindow<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">addDockWidget</span><span class="token arrow operator">--&gt;</span></span>QDockWidget
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实战的一般写法" tabindex="-1"><a class="header-anchor" href="#实战的一般写法"><span>实战的一般写法</span></a></h3><p>函数式编程，分离三个构建时自动调用的函数</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>public:
    void createActions();                        	//创建动作，构建时自动调用
    void createMenus();                           	//创建菜单，构建时自动调用
    void createToolBars();                      	//创建工具栏，构建时自动调用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命名习惯" tabindex="-1"><a class="header-anchor" href="#命名习惯"><span>命名习惯</span></a></h3><p>我个人倾向于使用前者</p><ul><li>设计模式的自动命名 <ul><li>menubar <ul><li>menuFile（menuXxx）</li></ul></li><li>actionNew（actionXxx）</li><li>toolBarTool（toolBarXxx）</li><li>statusbar</li></ul></li><li>代码模式案例命名 <ul><li>xxxMenu</li><li>xxxTool</li><li>xxxAction</li></ul></li></ul><h2 id="【捋一下】创建、关系、方法" tabindex="-1"><a class="header-anchor" href="#【捋一下】创建、关系、方法"><span>【捋一下】创建、关系、方法</span></a></h2><h3 id="创建" tabindex="-1"><a class="header-anchor" href="#创建"><span>创建</span></a></h3><ul><li><p>QMuenBar【唯一】</p><ul><li><code>QMenuBar * bar = menuBar();</code>，函数方式</li><li><code>QMenuBar * bar = new QMenuBar();</code>，new方式</li><li><code>menuBar();</code>，不创建而直接调用，也是返回值方式</li></ul></li><li><p>QStatusBar【唯一】</p><ul><li><p><code>QStatusBar * stBar = statusBar();</code>，函数方式</p></li><li><p><code>QStatusBar * stbar = new QStatusBar();</code>，new方式</p></li><li><p><code>statusBar();</code>，不创建而直接调用，也是返回值方式</p></li></ul></li><li><p>QAction</p><ul><li><code>openFileAction = new QAction(QIcon(&quot;open.png&quot;),tr(&quot;打开&quot;),this);</code>，new方式（前两个参数是图标和名字）</li><li><code>QAction * newAction = fileMenu-&gt;addAction(&quot;New&quot;);</code>，返回值方式</li></ul></li><li><p>QMenu</p><ul><li><code>略</code>，new方式</li><li><code>QMenu * fileMenu = bar-&gt;addMenu(&quot;File&quot;);</code>，返回值方式</li></ul></li><li><p>QToolBar</p><ul><li><code>QToolBar * toolBar = new QToolBar(this);</code>，new方式</li><li><code>QToolBar * addToolBar(const QString &amp;title)</code>，返回值方式</li></ul></li><li><p>QDockWidget</p><ul><li><code>QDockWidget * dockWidget = new QDockWidget(&quot;浮动&quot;, this);</code>，new方式</li><li>有<code>addDockWidget()</code>方法但该方法无返回值</li></ul></li><li><p>其他普通控件</p><ul><li><code>QPushButton * btn = new QPushButton(&quot;Button&quot;, this);</code>，new方式</li></ul></li><li><p>补充</p><ul><li>new方式 <ul><li>参数一般包含<code>(QWidget *parent = nullptr)</code>，默认构造父指针为空，可后期<code>setParent()</code>指定父指针</li><li>像QMenuBar、QStatusBar这种会被<code>set</code>函数指定关系的，父指针为空<code>nullptr</code></li><li>像QToolBar、QDockWidget这种会被<code>add</code>函数指定关系的，父指针为被add的对象，一般是主窗口<code>this</code></li></ul></li><li>返回值方式 <ul><li>一般不需要再指定父指针，推测是将使用<code>add</code>函数的对象作为返回值对象的父指针</li><li>QDockWidget倒是无返回值方式</li></ul></li><li>不创建直接使用 <ul><li>也是返回值方式的一种，但这种每次返回的结果都是一样的而不会创建新对象</li><li>像菜单、状态栏这种唯一性的才可以这样也应该这样。为写法统一它们也支持使用new方法</li></ul></li></ul></li></ul><h3 id="set、add方法" tabindex="-1"><a class="header-anchor" href="#set、add方法"><span>set、add方法</span></a></h3><h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h4><p>捋一下几种<code>set</code>和<code>add</code>方法</p><ul><li>set类（只能有一个） <ul><li><code>setMenuBar(bar);</code>，设置菜单栏</li><li><code>setStatusBar(stBar);</code>，设置状态栏</li><li><code>setCentralWidget(edit);</code>，设置中心部件</li></ul></li><li>add类（可以有多个） <ul><li><code>addMenu(&quot;File&quot;);</code>，增加菜单</li><li><code>addAction(&quot;New&quot;);</code>，增加菜单项、工具项</li><li><code>addWidget(btn);</code>，增加控件</li><li><code>addDockWidget()</code>，增加铆接部件</li></ul></li></ul><h4 id="set、add-qmainwindow" tabindex="-1"><a class="header-anchor" href="#set、add-qmainwindow"><span>set、add &amp; QMainWindow</span></a></h4><ul><li><p>常用方法</p><ul><li><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>  // 可以有多个的用 add
  void addDockWidget(Qt::DockWidgetArea area, QDockWidget *dockwidget)
  void addDockWidget(Qt::DockWidgetArea area, QDockWidget *dockwidget, Qt::Orientation orientation)
  void addToolBar(Qt::ToolBarArea area, QToolBar *toolbar)
  void addToolBar(QToolBar *toolbar)
  QToolBar *addToolBar(const QString &amp;title)
  void addToolBarBreak(Qt::ToolBarArea area = Qt::TopToolBarArea)
  
  // 只能有一个的用 set
  void setCentralWidget(QWidget *widget)			// 中心部件
  void setCorner(Qt::Corner corner, Qt::DockWidgetArea area)
  void setDockOptions(QMainWindow::DockOptions options)
  void setDocumentMode(bool enabled)
  void setIconSize(const QSize &amp;iconSize)
  void setMenuBar(QMenuBar *menuBar)				// 菜单栏
  void setMenuWidget(QWidget *menuBar)
  void setStatusBar(QStatusBar *statusbar)		// 状态栏
  void setTabPosition(Qt::DockWidgetAreas areas, QTabWidget::TabPosition tabPosition)
  void setTabShape(QTabWidget::TabShape tabShape)
  void setToolButtonStyle(Qt::ToolButtonStyle toolButtonStyle)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h4 id="set、add-qwidget" tabindex="-1"><a class="header-anchor" href="#set、add-qwidget"><span>set、add &amp; QWidget</span></a></h4><ul><li><p>常用方法</p><ul><li><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>  void addAction(QAction *action)
  void addActions(QList&lt;QAction *&gt; actions)
  void adjustSize()
  
   
  void setAcceptDrops(bool on)
  void setAccessibleDescription(const QString &amp;description)
  void setAccessibleName(const QString &amp;name)
  void setAttribute(Qt::WidgetAttribute attribute, bool on = true)	// 可以设置关闭窗口自动析构
  void setAutoFillBackground(bool enabled)
  void setBackgroundRole(QPalette::ColorRole role)
  void setBaseSize(const QSize &amp;)
  void setBaseSize(int basew, int baseh)
  void setContentsMargins(int left, int top, int right, int bottom)
  void setContentsMargins(const QMargins &amp;margins)
  void setContextMenuPolicy(Qt::ContextMenuPolicy policy)
  void setCursor(const QCursor &amp;)
  void setEditFocus(bool enable)
  void setFixedHeight(int h)
  void setFixedSize(const QSize &amp;s)
  void setFixedSize(int w, int h)
  void setFixedWidth(int w)
  void setFocus(Qt::FocusReason reason)
  void setFocusPolicy(Qt::FocusPolicy policy)
  void setFocusProxy(QWidget *w)
  void setFont(const QFont &amp;)
  void setForegroundRole(QPalette::ColorRole role)
  void setGeometry(const QRect &amp;)
  void setGeometry(int x, int y, int w, int h)
  void setGraphicsEffect(QGraphicsEffect *effect)
  void setInputMethodHints(Qt::InputMethodHints hints)
  void setLayout(QLayout *layout)
  void setLayoutDirection(Qt::LayoutDirection direction)
  void setLocale(const QLocale &amp;locale)
  void setMask(const QBitmap &amp;bitmap)
  void setMask(const QRegion &amp;region)
  void setMaximumHeight(int maxh)
  void setMaximumSize(const QSize &amp;)
  void setMaximumSize(int maxw, int maxh)
  void setMaximumWidth(int maxw)
  void setMinimumHeight(int minh)
  void setMinimumSize(const QSize &amp;)
  void setMinimumSize(int minw, int minh)
  void setMinimumWidth(int minw)
  void setMouseTracking(bool enable)
  void setPalette(const QPalette &amp;)
  void setParent(QWidget *parent)
  void setParent(QWidget *parent, Qt::WindowFlags f)
  void setShortcutAutoRepeat(int id, bool enable = true)
  void setShortcutEnabled(int id, bool enable = true)
  void setSizeIncrement(const QSize &amp;)
  void setSizeIncrement(int w, int h)
  void setSizePolicy(QSizePolicy)
  void setSizePolicy(QSizePolicy::Policy horizontal, QSizePolicy::Policy vertical)
  void setStatusTip(const QString &amp;)
  void setStyle(QStyle *style)
  void setTabletTracking(bool enable)
  void setToolTip(const QString &amp;)
  void setToolTipDuration(int msec)
  void setUpdatesEnabled(bool enable)
  void setWhatsThis(const QString &amp;)
  void setWindowFilePath(const QString &amp;filePath)
  void setWindowFlag(Qt::WindowType flag, bool on = true)
  void setWindowFlags(Qt::WindowFlags type)						// 可以隐藏窗口标题
  void setWindowIcon(const QIcon &amp;icon)
  void setWindowModality(Qt::WindowModality windowModality)
  void setWindowOpacity(qreal level)
  void setWindowRole(const QString &amp;role)
  void setWindowState(Qt::WindowStates windowState)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h4 id="set、add-设计模式" tabindex="-1"><a class="header-anchor" href="#set、add-设计模式"><span>set、add &amp; 设计模式</span></a></h4><ul><li>set：可以在右下的<code>属性编辑器</code>（<em>Property Editor</em>）处快速设置属性</li><li>add：可以在右上的<code>对象查看器</code>（<em>Object Inspector</em>）处快速添加</li></ul><h3 id="常用方法-4" tabindex="-1"><a class="header-anchor" href="#常用方法-4"><span>常用方法</span></a></h3><h4 id="public-functions" tabindex="-1"><a class="header-anchor" href="#public-functions"><span>Public Functions</span></a></h4><ul><li>QAction <ul><li><code>action-&gt;setShortcut(tr(&quot;Ctrl+O&quot;));</code>，设置快捷键</li><li><code>action-&gt;setStatusTip(tr(&quot;打开一个文件&quot;));</code>，设置状态栏提示</li></ul></li></ul><h4 id="public-slots-槽函数" tabindex="-1"><a class="header-anchor" href="#public-slots-槽函数"><span>Public Slots 槽函数</span></a></h4><ul><li><p>QWidget</p><ul><li><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>  bool close()	// 用法：SLOT(close())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p>不知（搜不到是谁提供的，而且好像又不是自定义的）</p><ul><li><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>  copy()
  cut()
  paste()
  QApplication::aboutQt()
  undo()
  redo()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul>`,64),l=[d];function s(o,r){return n(),i("div",null,l)}const v=e(t,[["render",s],["__file","02. QMainWindow与附属类.html.vue"]]),p=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Multi/QT%EF%BC%88Cpp%EF%BC%89/02.%20QtGUI%E7%B1%BB/01.%20Widget/01.%20%E7%AA%97%E5%8F%A3%E7%B1%BB/02.%20QMainWindow%E4%B8%8E%E9%99%84%E5%B1%9E%E7%B1%BB.html","title":"QT","lang":"zh-CN","frontmatter":{"description":"QT 目录 QMainWindow 简概 QMainWindow是一个为用户提供主窗口程序的类，包含：（五类） 一个菜单栏（menu bar） 多个工具栏（tool bars） 多个铆接部件（dock widgets） 一个状态栏（status bar） 一个中心部件（central widget） 是许多应用程序的基础 五部件 - 按部件 菜单栏 Q...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Multi/QT%EF%BC%88Cpp%EF%BC%89/02.%20QtGUI%E7%B1%BB/01.%20Widget/01.%20%E7%AA%97%E5%8F%A3%E7%B1%BB/02.%20QMainWindow%E4%B8%8E%E9%99%84%E5%B1%9E%E7%B1%BB.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"QT"}],["meta",{"property":"og:description","content":"QT 目录 QMainWindow 简概 QMainWindow是一个为用户提供主窗口程序的类，包含：（五类） 一个菜单栏（menu bar） 多个工具栏（tool bars） 多个铆接部件（dock widgets） 一个状态栏（status bar） 一个中心部件（central widget） 是许多应用程序的基础 五部件 - 按部件 菜单栏 Q..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"QT\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"QT","slug":"qt","link":"#qt","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"QMainWindow","slug":"qmainwindow","link":"#qmainwindow","children":[{"level":2,"title":"简概","slug":"简概","link":"#简概","children":[]},{"level":2,"title":"五部件 - 按部件","slug":"五部件-按部件","link":"#五部件-按部件","children":[{"level":3,"title":"菜单栏 QMenuBar（只能有一个）","slug":"菜单栏-qmenubar-只能有一个","link":"#菜单栏-qmenubar-只能有一个","children":[{"level":4,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":4,"title":"常用方法","slug":"常用方法","link":"#常用方法","children":[]}]},{"level":3,"title":"工具栏 QToolBar（可有多个）","slug":"工具栏-qtoolbar-可有多个","link":"#工具栏-qtoolbar-可有多个","children":[{"level":4,"title":"使用","slug":"使用-1","link":"#使用-1","children":[]},{"level":4,"title":"常用方法","slug":"常用方法-1","link":"#常用方法-1","children":[]}]},{"level":3,"title":"状态栏 QStatusBar（只能有一个）","slug":"状态栏-qstatusbar-只能有一个","link":"#状态栏-qstatusbar-只能有一个","children":[{"level":4,"title":"使用","slug":"使用-2","link":"#使用-2","children":[]},{"level":4,"title":"常用方法","slug":"常用方法-2","link":"#常用方法-2","children":[]}]},{"level":3,"title":"铆接部件 QDockWidget（浮靠窗口）（可有多个）","slug":"铆接部件-qdockwidget-浮靠窗口-可有多个","link":"#铆接部件-qdockwidget-浮靠窗口-可有多个","children":[{"level":4,"title":"使用","slug":"使用-3","link":"#使用-3","children":[]},{"level":4,"title":"常用方法","slug":"常用方法-3","link":"#常用方法-3","children":[]}]},{"level":3,"title":"核心部件（中心部件）（只能有一个）","slug":"核心部件-中心部件-只能有一个","link":"#核心部件-中心部件-只能有一个","children":[{"level":4,"title":"使用","slug":"使用-4","link":"#使用-4","children":[]}]}]},{"level":2,"title":"【捋一下】五部件","slug":"【捋一下】五部件","link":"#【捋一下】五部件","children":[{"level":3,"title":"工具栏和铆接部件 区别和选用","slug":"工具栏和铆接部件-区别和选用","link":"#工具栏和铆接部件-区别和选用","children":[]}]},{"level":2,"title":"【捋一下】依赖、其他","slug":"【捋一下】依赖、其他","link":"#【捋一下】依赖、其他","children":[{"level":3,"title":"嵌套关系","slug":"嵌套关系","link":"#嵌套关系","children":[]},{"level":3,"title":"实战的一般写法","slug":"实战的一般写法","link":"#实战的一般写法","children":[]},{"level":3,"title":"命名习惯","slug":"命名习惯","link":"#命名习惯","children":[]}]},{"level":2,"title":"【捋一下】创建、关系、方法","slug":"【捋一下】创建、关系、方法","link":"#【捋一下】创建、关系、方法","children":[{"level":3,"title":"创建","slug":"创建","link":"#创建","children":[]},{"level":3,"title":"set、add方法","slug":"set、add方法","link":"#set、add方法","children":[{"level":4,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":4,"title":"set、add & QMainWindow","slug":"set、add-qmainwindow","link":"#set、add-qmainwindow","children":[]},{"level":4,"title":"set、add & QWidget","slug":"set、add-qwidget","link":"#set、add-qwidget","children":[]},{"level":4,"title":"set、add & 设计模式","slug":"set、add-设计模式","link":"#set、add-设计模式","children":[]}]},{"level":3,"title":"常用方法","slug":"常用方法-4","link":"#常用方法-4","children":[{"level":4,"title":"Public Functions","slug":"public-functions","link":"#public-functions","children":[]},{"level":4,"title":"Public Slots 槽函数","slug":"public-slots-槽函数","link":"#public-slots-槽函数","children":[]}]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":8.1,"words":2430},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Platform/Multi/QT（Cpp）/02. QtGUI类/01. Widget/01. 窗口类/02. QMainWindow与附属类.md","autoDesc":true}');export{v as comp,p as data};

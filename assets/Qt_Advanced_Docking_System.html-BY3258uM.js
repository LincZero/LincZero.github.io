import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as t,c,a as e,b as i,d as a,e as d}from"./app-yixEWCFr.js";const r={},o=d('<h1 id="qt" tabindex="-1"><a class="header-anchor" href="#qt"><span>Qt</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="qt-advanced-docking-system" tabindex="-1"><a class="header-anchor" href="#qt-advanced-docking-system"><span>Qt_Advanced_Docking_System</span></a></h1>',3),v=e("li",null,[i("Keyword "),e("ul",null,[e("li",null,"qt dock window"),e("li",null,"qt 停靠Dock")])],-1),u={href:"https://www.cnblogs.com/cxp2009/p/3270019.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.cnblogs.com/fuqia/p/9154406.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://marketplace.qt.io/products/advanced-docking-system",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/githubuser0xFFFF/Qt-Advanced-Docking-System#getting-started--example",target:"_blank",rel:"noopener noreferrer"},b=d(`<h2 id="先进的对接系统" tabindex="-1"><a class="header-anchor" href="#先进的对接系统"><span>先进的对接系统</span></a></h2><p>https://marketplace.qt.io/products/advanced-docking-system</p><p>advanced-docking-system，简称ADS</p><p>使用步骤</p><ul><li>git clone</li><li>用Qt打开clone文件夹中的abs.pro</li><li>选择一个子项目构建并运行</li></ul><h3 id="项目分析" tabindex="-1"><a class="header-anchor" href="#项目分析"><span>项目分析</span></a></h3><ul><li><p><strong>【abs子目录项目】</strong></p><ul><li>demo项目，综合使用，还能保存布局</li><li><strong>【examplesdo子目录】</strong><ul><li>centralwidget项目，有中心部件</li><li>deleteonclose，可新建dock</li><li>dockindock项目，嵌套标签</li><li>emptydockarea项目，3个dock + 1个dockarea</li><li>sidebar项目，2个dock + 一个固定的左侧</li><li>simple项目，1个dock</li></ul></li><li>src项目，<strong>DockSystem的关键源码</strong></li></ul></li><li><p>pro依赖</p><ul><li><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">demo.depends</span> <span class="token punctuation">=</span> <span class="token value attr-value">src</span>
<span class="token key attr-name">examples.depends</span> <span class="token punctuation">=</span> <span class="token value attr-value">src</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h3 id="官方案例-example" tabindex="-1"><a class="header-anchor" href="#官方案例-example"><span>官方案例 - Example</span></a></h3><p>官方提供了6个小demo以及1个综合demo，可供参考使用，非常nice</p><ul><li>demo项目，综合使用，还能保存布局</li><li>【examplesdo子目录】 <ul><li>centralwidget项目，有中心部件</li><li>deleteonclose，可新建dock</li><li>dockindock项目，嵌套标签</li><li>emptydockarea项目，3个dock + 1个dockarea</li><li>sidebar项目，2个dock + 一个固定的左侧</li><li>simple项目，1个dock</li></ul></li></ul><h3 id="官方作品-展示柜" tabindex="-1"><a class="header-anchor" href="#官方作品-展示柜"><span>官方作品 - 展示柜</span></a></h3><p>参考Github中的说明：https://github.com/githubuser0xFFFF/Qt-Advanced-Docking-System#showcase</p><p>從 4.12 版本開始，Qt Creator 使用 Advanced Docking Framework Qt 快速設計器。 這提高了使用多個屏幕時的可用性。</p><h2 id="接口使用" tabindex="-1"><a class="header-anchor" href="#接口使用"><span>接口使用</span></a></h2><h3 id="基本使用-接入使用" tabindex="-1"><a class="header-anchor" href="#基本使用-接入使用"><span>基本使用（接入使用）</span></a></h3><h4 id="接入使用-代码增量" tabindex="-1"><a class="header-anchor" href="#接入使用-代码增量"><span>接入使用 - 代码增量</span></a></h4><p>原理详见 “接入使用原理” 一节</p><p>参考Github中的说明：https://github.com/githubuser0xFFFF/Qt-Advanced-Docking-System#getting-started--example</p><p>接入，显示了使用高级 Qt 对接系统所需的最少代码（即以simple为例）</p><p>pro</p><p>（增量部分）</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token comment">## Qt-Advanced-Docking-System</span>
<span class="token comment">#TEMPLATE = app                  # app模板（默认）</span>
<span class="token comment">#TARGET = Core                   # 指定目标文件的名称。默认情况下包含项目文件的基本名称</span>
<span class="token comment">#CONFIG += debug_and_release</span>
<span class="token comment">#adsBuildStatic {                # 静态绝对路径？宏？</span>
<span class="token comment">#    DEFINES += ADS_STATIC       # qmake将该变量的值作为编译器C预处理器宏(-D选项)添加</span>
<span class="token comment">#}</span>
<span class="token comment">#DEFINES += QT_DEPRECATED_WARNINGS#qmake将该变量的值作为编译器C预处理器宏(-D选项)添加</span>

<span class="token key attr-name">ADS_OUT_ROOT</span> <span class="token punctuation">=</span> <span class="token value attr-value">$\${OUT_PWD}/..   # 定义常量路径 = 指定Makefile的目录的完整路径，的再上一级</span>
<span class="token key attr-name">LIBS</span> <span class="token value attr-value">+= -L$\${ADS_OUT_ROOT}/lib  # 添加LIB搜索路径</span>
<span class="token comment">#DESTDIR = $\${ADS_OUT_ROOT}      # 输出路径（ exe或lib/dll）</span>
<span class="token comment">#DISTFILES += \\                  # 跨平台用pri，缺失会报错error: LNK2019: 无法解析的外部符号</span>
<span class="token comment">#    abs.pri</span>
<span class="token key attr-name">include(abs.pri)</span> <span class="token value attr-value">               # 跨平台用pri，缺失会报错error: LNK2019: 无法解析的外部符号</span>
<span class="token key attr-name">INCLUDEPATH</span> <span class="token value attr-value">+= ../AdvancedDockingSystem # 包含路径（需要#include &quot;DockManager.h&quot;）</span>
<span class="token comment">#DEPENDPATH += ../AdvancedDockingSystem  # 依赖路径（好像不写也行会自动判断）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>abs.pri</p><p>（跨平台支持。该文件也可写到pro文件中，这里独立出来，专门为跨平台编译调试适配）</p><p>（缺失会报错：一大堆的LNK2019：无法解析的外部符号；LNK1120：19个无法解析的外部符号。是因为找不到qtadvanceddocking.dll的缘故）</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token comment"># 指定工程要链接的库（库既可使用绝对路径，也可使用Unix的-L和-l标识符，例\`-L/usr/local/lib\`和\`-ldb_cxx\`）</span>
<span class="token key attr-name">CONFIG(debug,</span> <span class="token value attr-value">debug|release){               # debug模式</span>
<span class="token key attr-name">    win32</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">        LIBS</span> <span class="token value attr-value">+= -lqtadvanceddockingd        # windows的debug库名称：最后有个字母d</span>
    }
<span class="token key attr-name">    else</span><span class="token punctuation">:</span><span class="token value attr-value">mac {</span>
<span class="token key attr-name">        LIBS</span> <span class="token value attr-value">+= -lqtadvanceddocking_debug   # mac的debug库名称：有个后缀_debug</span>
    }
<span class="token key attr-name">    else</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">        LIBS</span> <span class="token value attr-value">+= -lqtadvanceddocking</span>
    }
}
<span class="token key attr-name">else{</span> <span class="token value attr-value">                                      # release模式</span>
<span class="token key attr-name">    LIBS</span> <span class="token value attr-value">+= -lqtadvanceddocking</span>
}

<span class="token key attr-name">unix</span><span class="token punctuation">:</span><span class="token value attr-value">!macx {</span>
<span class="token key attr-name">    LIBS</span> <span class="token value attr-value">+= -lxcb</span>
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>main.cpp</p><p>（无需修改）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;QApplication&gt;
#include &quot;../../examples/simple/MainWindow.h&quot;

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    MainWindow w;
    w.show();

    return a.exec();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MainWindow.h</p><p>（只需正常include和使用）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include &lt;QMainWindow&gt;
#include &quot;DockManager.h&quot;                // 核心代码中的类

QT_BEGIN_NAMESPACE
namespace Ui {
class MainWindow;
}
QT_END_NAMESPACE

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = 0);
    ~MainWindow();

private:
    Ui::MainWindow *ui;
    ads::CDockManager* m_DockManager;   // 核心代码类
};

#endif // MAINWINDOW_H
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MainWindow.cpp</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &quot;../../examples/simple/MainWindow.h&quot;

#include &quot;ui_MainWindow.h&quot;

#include &lt;QLabel&gt;
#include &lt;QTimer&gt;

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui-&gt;setupUi(this);

    // Dock管理器部分
    m_DockManager = new ads::CDockManager(this);

    // Dock控件部分
    QLabel* l = new QLabel();                       // Dock控件中的内容
    l-&gt;setWordWrap(true);                           // 保存标签的换行策略（默认禁用）
    l-&gt;setAlignment(Qt::AlignTop | Qt::AlignLeft);  // 对齐方式（默认左对齐+垂直居中）
    l-&gt;setText(&quot;It&#39;s a content text. &quot;);

    ads::CDockWidget* DockWidget = new ads::CDockWidget(&quot;Label 1&quot;); // Dock控件
    DockWidget-&gt;setWidget(l);                                       // 设置内容

    // 菜单部分
    QMenuBar * bar = new QMenuBar();
    setMenuBar(bar);
    QMenu * view = bar-&gt;addMenu(&quot;View&quot;);
    view-&gt;addAction(DockWidget-&gt;toggleViewAction());// 切换Action状态（是否显示）

    // 将Dock控件添加进Dock管理器
    m_DockManager-&gt;addDockWidget(ads::TopDockWidgetArea, DockWidget);
}

MainWindow::~MainWindow()
{
    delete ui;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="接入使用-打包注意项" tabindex="-1"><a class="header-anchor" href="#接入使用-打包注意项"><span>接入使用 - 打包注意项</span></a></h4><p>除了复制lib文件夹，还要将lib文件夹中的qtadvanceddocking.dll拷贝到根目录</p><p>否则报错：由于找不到qtadvanceddocking.dll，无法继续执行代码。重新安装程序可能会解决此问题</p><h4 id="基本使用-单dock" tabindex="-1"><a class="header-anchor" href="#基本使用-单dock"><span>基本使用 单Dock</span></a></h4><p>ads::CDockManager（Dock管理器）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>m_DockManager = new ads::CDockManager(this);						// 定义Dock管理器（头文件已声明）
// 创建Dock控件
m_DockManager-&gt;addDockWidget(ads::TopDockWidgetArea, DockWidget);	// 将Dock控件添加进Dock管理器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ads::CDockWidget（Dock控件）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>ads::CDockWidget* DockWidget = new ads::CDockWidget(&quot;Tag1&quot;);	// Dock控件
DockWidget-&gt;setWidget(widget);									// 设置内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="基本使用-多dock" tabindex="-1"><a class="header-anchor" href="#基本使用-多dock"><span>基本使用 多Dock</span></a></h4><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// Dock管理器
m_DockManager = new ads::CDockManager(this);

// Dock控件1
ads::CDockWidget* DockWidget = new ads::CDockWidget(&quot;Label 1&quot;);
DockWidget-&gt;setWidget(widget1);
ui-&gt;menuView-&gt;addAction(DockWidget-&gt;toggleViewAction());			// 开关切换（Dock窗口的关闭和显示）
m_DockManager-&gt;addDockWidget(ads::TopDockWidgetArea, DockWidget);	// 加入管理器（上方）

// Dock控件2
DockWidget = new ads::CDockWidget(&quot;Label 2&quot;);
DockWidget-&gt;setWidget(widget2);
ui-&gt;menuView-&gt;addAction(DockWidget-&gt;toggleViewAction());			// 开关切换（Dock窗口的关闭和显示）
m_DockManager-&gt;addDockWidget(ads::BottomDockWidgetArea, DockWidget);// 加入管理器（底部）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="进阶使用" tabindex="-1"><a class="header-anchor" href="#进阶使用"><span>进阶使用</span></a></h3><p>主要使用的类</p><ul><li>ads::CDockManager（Dock管理器）</li><li>ads::CDockWidget（Dock控件）</li><li>ads::CDockAreaWidget（Dock区域）</li></ul><h4 id="垃圾回收-dockmanager" tabindex="-1"><a class="header-anchor" href="#垃圾回收-dockmanager"><span>垃圾回收 DockManager</span></a></h4><p>closeEvent 事件钩子函数介绍</p><blockquote><p>当Qt从窗口系统接收到一个顶级小部件的窗口关闭请求时，该事件处理程序将与给定的事件一起调用。</p><p>默认情况下，接受事件并关闭小部件。您可以重新实现这个函数，以更改小部件响应窗口关闭请求的方式。 例如，您可以通过对所有事件调用ignore()来<strong>防止窗口关闭</strong>。</p><p>主窗口应用程序通常使用此函数的重新实现来检查用户的工作是否已被保存，并在关闭前请求许可。 例如，Application example使用helper函数来<strong>决定是否关闭窗口</strong>。</p></blockquote><p>头文件</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>protected:
    virtual void closeEvent(QCloseEvent *event) override;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>cpp重写虚函数</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>void MainWindow::closeEvent(QCloseEvent *event)
{
    QMainWindow::closeEvent(event);		// 原功能不变，增加新措施
    if (m_DockManager)					// 如果该容器还在
    {
        m_DockManager-&gt;deleteLater();	// 则销毁容器并释放内存空间
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样做的原因：</p><blockquote><p>MainWindow头文件中包含了这个指针，<code>ads::CDockManager* m_DockManager;</code></p><p>如果在cpp中new了<code>new ads::CDockManager(this);</code>，并往该容器里放东西了，则最后应该释放这里的空间</p><p>加if是为了防止new了但是没有往该容器里add，此时delete非空指针会导致程序错误</p></blockquote><h4 id="垃圾回收-dockwidget" tabindex="-1"><a class="header-anchor" href="#垃圾回收-dockwidget"><span>垃圾回收 DockWidget</span></a></h4><p>主要代码</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>dockWidget-&gt;setFeature(ads::CDockWidget::DockWidgetDeleteOnClose, true);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>案例代码</p><p>（deleteonclose案例）</p><p>该案例主要是用来验证了内存的确被回收了：</p><ul><li>new Dock的地址也会一直在变，dock标签的序号也一直在增加。主要观察的是DockArea的地址</li><li>启用销毁回收时 <ul><li>DockArea不销毁后则地址不变，销毁后new DockArea地址改变，证明了DockArea被销毁了！没有被复用！</li><li>而DockArea又是dockWidget的容器，也证明了WidgetDock被销毁了！没有复用！</li></ul></li><li>不启用销毁回收时 <ul><li>DockArea不销毁后则地址不变，销毁后new DockArea地址依然不改变，证明了DockArea没有被销毁而是复用了！</li></ul></li></ul><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class MainWindow : public QMainWindow
{
private:
    ads::CDockManager* m_DockManager = nullptr;

protected:
    virtual void closeEvent(QCloseEvent *event) override	// DockManager的垃圾回收
    {
        QMainWindow::closeEvent(event);
        if (m_DockManager)
        {
            m_DockManager-&gt;deleteLater();
        }
    }

public:
    void setDockManager(ads::CDockManager* DockManager) {m_DockManager = DockManager;}
};


int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    MainWindow w;

    /* 初始化部分 */
    auto dockManager = new ads::CDockManager(&amp;w);
    w.setDockManager(dockManager);                                                  // 初始化类中指针

    /* 标签切换部分 */
    QObject::connect(dockManager, &amp;ads::CDockManager::focusedDockWidgetChanged,     // 信号槽：聚焦改变时（切换标签时）
                     [] (ads::CDockWidget* old, ads::CDockWidget* now) {            // old和now都可以是nullptr
        static int Count = 0;                                                       // 静态计数器
    	qDebug() &lt;&lt; Count++ &lt;&lt; &quot; CDockManager::focusedDockWidgetChanged old: &quot; &lt;&lt; (old ? old-&gt;objectName() : &quot;-&quot;) &lt;&lt; &quot; now: &quot; &lt;&lt; now-&gt;objectName() &lt;&lt; &quot; visible: &quot; &lt;&lt; now-&gt;isVisible();
        now-&gt;widget()-&gt;setFocus();                                                  // 设置新窗口被聚焦
    });

    /* 工具栏按钮一 */
    int i = 0; // 标签切换次数
    QAction *action = new QAction(&quot;New Delete On Close&quot;, &amp;w);                       // 新建Dock（关闭销毁）
    w.menuBar()-&gt;addAction(action);
    QObject::connect(action, &amp;QAction::triggered, [&amp;]() {                           // 信号槽：新建Dock
        auto dw = new ads::CDockWidget(QStringLiteral(&quot;test doc %1&quot;).arg(i++), &amp;w); // 新建Dock
        auto editor = new QTextEdit(QStringLiteral(&quot;lorem ipsum...&quot;), dw);          // Dock内容
        dw-&gt;setWidget(editor);
        dw-&gt;setFeature(ads::CDockWidget::DockWidgetDeleteOnClose, true);            // Dock关闭时销毁（按钮二无该功能）
        auto area = dockManager-&gt;addDockWidgetTab(ads::CenterDockWidgetArea, dw);   // 将Dock添加到Manager并返回DockArea
        qDebug() &lt;&lt; &quot;doc dock widget created!&quot; &lt;&lt; dw &lt;&lt; area;   // 输出两个地址：后面那个DockArea的地址不变
    });

    /* 工具栏按钮二 */
    action = new QAction(&quot;New&quot;, &amp;w);                                                // 新建Dock（关闭不销毁）
    w.menuBar()-&gt;addAction(action);
    QObject::connect(action, &amp;QAction::triggered, [&amp;]() {                           // 信号槽：新建Dock
        auto dw = new ads::CDockWidget(QStringLiteral(&quot;test %1&quot;).arg(i++), &amp;w);
        auto editor = new QTextEdit(QStringLiteral(&quot;lorem ipsum...&quot;), dw);
        dw-&gt;setWidget(editor);
        auto area = dockManager-&gt;addDockWidgetTab(ads::CenterDockWidgetArea, dw);
        qDebug() &lt;&lt; &quot;dock widget created!&quot; &lt;&lt; dw &lt;&lt; area;       // 输出两个地址：后面那个DockArea的地址不变
    });

    w.show();
    return a.exec();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="属性设置-dockmanager" tabindex="-1"><a class="header-anchor" href="#属性设置-dockmanager"><span>属性设置 DockManager</span></a></h4><p>dockManager设置</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 看不出来有什么用
CDockManager::setConfigFlag(CDockManager::OpaqueSplitterResize, true);
	// 看到QSplitter::setOpaqueResize()的文档
CDockManager::setConfigFlag(CDockManager::XmlCompressionEnabled, false);
	// 如果启用，XML编写器会自动在元素之间的空白部分(可忽略的空格)添加换行和缩进
CDockManager::setConfigFlag(CDockManager::FocusHighlighting, true);
	// 启用：聚焦选项卡高亮（聚焦和非聚焦分别是蓝灰，不启用则是白灰）
CDockManager::setConfigFlag(CDockManager::AllTabsHaveCloseButton, true);
	// 启用：那么所有可关闭的选项卡将显示关闭按钮（否则只有被聚焦的那一个才有）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原理：setConfigFlag方法</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 声明静态函数(.h)
static void setConfigFlag(eConfigFlag Flag, bool On = true);
// 声明静态成员(.h)
static CDockManager::ConfigFlags StaticConfigFlags = CDockManager::DefaultNonOpaqueConfig;
// 函数实现(.cpp)
void CDockManager::setConfigFlag(eConfigFlag Flag, bool On)
{
	internal::setFlag(StaticConfigFlags, Flag, On);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DockManager的Flag集</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>enum eConfigFlag
{
    ActiveTabHasCloseButton = 0x0001,    //!&lt; If this flag is set, the active tab in a tab area has a close button
    DockAreaHasCloseButton = 0x0002,     //!&lt; If the flag is set each dock area has a close button
    DockAreaCloseButtonClosesTab = 0x0004,//!&lt; If the flag is set, the dock area close button closes the active tab, if not set, it closes the complete dock area
    OpaqueSplitterResize = 0x0008, //!&lt; See QSplitter::setOpaqueResize() documentation
    XmlAutoFormattingEnabled = 0x0010,//!&lt; If enabled, the XML writer automatically adds line-breaks and indentation to empty sections between elements (ignorable whitespace).
    XmlCompressionEnabled = 0x0020,//!&lt; If enabled, the XML output will be compressed and is not human readable anymore
    TabCloseButtonIsToolButton = 0x0040,//! If enabled the tab close buttons will be QToolButtons instead of QPushButtons - disabled by default
    AllTabsHaveCloseButton = 0x0080, //!&lt; if this flag is set, then all tabs that are closable show a close button
    RetainTabSizeWhenCloseButtonHidden = 0x0100, //!&lt; if this flag is set, the space for the close button is reserved even if the close button is not visible
    OpaqueUndocking = 0x0200,///&lt; If enabled, the widgets are immediately undocked into floating widgets, if disabled, only a draw preview is undocked and the real undocking is deferred until the mouse is released
    DragPreviewIsDynamic = 0x0400,///&lt; If opaque undocking is disabled, this flag defines the behavior of the drag preview window, if this flag is enabled, the preview will be adjusted dynamically to the drop area
    DragPreviewShowsContentPixmap = 0x0800,///&lt; If opaque undocking is disabled, the created drag preview window shows a copy of the content of the dock widget / dock are that is dragged
    DragPreviewHasWindowFrame = 0x1000,///&lt; If opaque undocking is disabled, then this flag configures if the drag preview is frameless or looks like a real window
    AlwaysShowTabs = 0x2000,///&lt; If this option is enabled, the tab of a dock widget is always displayed - even if it is the only visible dock widget in a floating widget.
    DockAreaHasUndockButton = 0x4000,     //!&lt; If the flag is set each dock area has an undock button
    DockAreaHasTabsMenuButton = 0x8000,     //!&lt; If the flag is set each dock area has a tabs menu button
    DockAreaHideDisabledButtons = 0x10000,    //!&lt; If the flag is set disabled dock area buttons will not appear on the toolbar at all (enabling them will bring them back)
    DockAreaDynamicTabsMenuButtonVisibility = 0x20000, //!&lt; If the flag is set, the tabs menu button will be shown only when it is required - that means, if the tabs are elided. If the tabs are not elided, it is hidden
    FloatingContainerHasWidgetTitle = 0x40000, //!&lt; If set, the Floating Widget window title reflects the title of the current dock widget otherwise it displays application name as window title
    FloatingContainerHasWidgetIcon = 0x80000, //!&lt; If set, the Floating Widget icon reflects the icon of the current dock widget otherwise it displays application icon
    HideSingleCentralWidgetTitleBar = 0x100000, //!&lt; If there is only one single visible dock widget in the main dock container (the dock manager) and if this flag is set, then the titlebar of this dock widget will be hidden
                                                //!&lt; this only makes sense for non draggable and non floatable widgets and enables the creation of some kind of &quot;central&quot; widget

    FocusHighlighting = 0x200000, //!&lt; enables styling of focused dock widget tabs or floating widget titlebar
    EqualSplitOnInsertion = 0x400000, ///!&lt; if enabled, the space is equally distributed to all widgets in a  splitter

    FloatingContainerForceNativeTitleBar = 0x800000, //!&lt; Linux only ! Forces all FloatingContainer to use the native title bar. This might break docking for FloatinContainer on some Window Managers (like Kwin/KDE).
                                                     //!&lt; If neither this nor FloatingContainerForceCustomTitleBar is set (the default) native titlebars are used except on known bad systems.
                                                     //! Users can overwrite this by setting the environment variable ADS_UseNativeTitle to &quot;1&quot; or &quot;0&quot;.
    FloatingContainerForceQWidgetTitleBar = 0x1000000,//!&lt; Linux only ! Forces all FloatingContainer to use a QWidget based title bar.
                                                     //!&lt; If neither this nor FloatingContainerForceNativeTitleBar is set (the default) native titlebars are used except on known bad systems.
                                                     //! Users can overwrite this by setting the environment variable ADS_UseNativeTitle to &quot;1&quot; or &quot;0&quot;.

    DefaultDockAreaButtons = DockAreaHasCloseButton
                           | DockAreaHasUndockButton
                           | DockAreaHasTabsMenuButton,///&lt; default configuration of dock area title bar buttons

    DefaultBaseConfig = DefaultDockAreaButtons
                      | ActiveTabHasCloseButton
                      | XmlCompressionEnabled
                      | FloatingContainerHasWidgetTitle,///&lt; default base configuration settings

    DefaultOpaqueConfig = DefaultBaseConfig
                        | OpaqueSplitterResize
                        | OpaqueUndocking, ///&lt; the default configuration with opaque operations - this may cause issues if ActiveX or Qt 3D windows are involved

    DefaultNonOpaqueConfig = DefaultBaseConfig
                  | DragPreviewShowsContentPixmap, ///&lt; the default configuration for non opaque operations

    NonOpaqueWithWindowFrame = DefaultNonOpaqueConfig
                  | DragPreviewHasWindowFrame ///&lt; the default configuration for non opaque operations that show a real window with frame
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="属性设置-dockwidget" tabindex="-1"><a class="header-anchor" href="#属性设置-dockwidget"><span>属性设置 DockWidget</span></a></h4><p>DockWidget设置</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 这一组设置好像没用。好像都会背覆盖
dockWidget-&gt;setMinimumSizeHintMode(CDockWidget::MinimumSizeHintFromDockWidget);// 设置minimumSizeHint()返回的最小尺寸提示
dockWidget-&gt;resize(250, 150);													// 设置尺寸（但会被覆盖）
dockWidget-&gt;setMinimumSize(200,150);												// 设置最小尺寸（但会被覆盖）
dockWidget-&gt;setFeature(ads::CDockWidget::DockWidgetDeleteOnClose, true); // 在Dock关闭时删除它
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DockWidget的Flag集</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>enum DockWidgetFeature
{
    DockWidgetClosable = 0x01,///&lt; dock widget has a close button
    DockWidgetMovable = 0x02,///&lt; dock widget is movable and can be moved to a new position in the current dock container
    DockWidgetFloatable = 0x04,///&lt; dock widget can be dragged into a floating window
    DockWidgetDeleteOnClose = 0x08, ///&lt; deletes the dock widget when it is closed
    CustomCloseHandling = 0x10, ///&lt; clicking the close button will not close the dock widget but emits the closeRequested() signal instead
    DockWidgetFocusable = 0x20, ///&lt; if this is enabled, a dock widget can get focus highlighting
    DockWidgetForceCloseWithArea = 0x40, ///&lt; dock widget will be closed when the dock area hosting it is closed
    NoTab = 0x80, ///&lt; dock widget tab will never be shown if this flag is set
    DefaultDockWidgetFeatures = DockWidgetClosable | DockWidgetMovable | DockWidgetFloatable | DockWidgetFocusable,
    AllDockWidgetFeatures = DefaultDockWidgetFeatures | DockWidgetDeleteOnClose | CustomCloseHandling,
    DockWidgetAlwaysCloseAndDelete = DockWidgetForceCloseWithArea | DockWidgetDeleteOnClose,
    NoDockWidgetFeatures = 0x00
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="dockareawidget管理" tabindex="-1"><a class="header-anchor" href="#dockareawidget管理"><span>DockAreaWidget管理</span></a></h4><p>以下方法都会返回CDockAreaWidget类型</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>/**
 * 【将dockwidget添加到给定区域】（用枚举类型指定区域）
 * 如果给定区域已有dockWidget：不会合并成一个标签组，而会在下面的区域创建dockWidget
 *
 * 第三个缺省参数是CDockAreaWidget，如果dockarewidget不为空，则area参数表示dockwidget被放置的区域
 */
CDockAreaWidget* CDockManager::addDockWidget(DockWidgetArea area, CDockWidget* Dockwidget,
		CDockAreaWidget* DockAreaWidget = nullptr);

/**
 * 【将dockwidget&quot;作为中心小部件&quot;添加到中心区域】
 * 如果给定区域已有dockWidget：则取代之
 */
CDockAreaWidget* CDockManager::setCentralWidget(CDockWidget* widget);

/**
 * 【将dockwidget&quot;作为一个新选项卡&quot;添加到给定区域】（用枚举类型指定区域）
 * 如果给定区域已有dockWidget：则合并为一个标签组
 *
 * 如果给定区域标识符不存在dockAreaWidget，则创建一个新的dockAreaWidget
 */
CDockAreaWidget* CDockManager::addDockWidgetTab(DockWidgetArea area, CDockWidget* Dockwidget);

/**
 * 【将dockwidget&quot;作为一个新选项卡&quot;添加到给定区域】（用CDockAreaWidget*类型指定区域）
 * 如果给定区域已有dockWidget：则合并为一个标签组
 */
CDockAreaWidget* CDockManager::addDockWidgetTabToArea(CDockWidget* Dockwidget, CDockAreaWidget* DockAreaWidget);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>技巧</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>DockManager-&gt;addDockWidgetTabToArea(dockWidget1, dockAreaCentral); 							// 【添加到Dock区域】
auto dockArea = DockManager-&gt;addDockWidget(DockWidgetArea::LeftDockWidgetArea, dockWidget1);// 【添加Dock控件】
// 等价于
auto dockArea = DockManager-&gt;addDockWidget(DockWidgetArea::LeftDockWidgetArea, dockWidget1, dockAreaCentral);
// 等价于（Manager）
auto dockArea = DockManager-&gt;addDockWidget(DockWidgetArea::LeftDockWidgetArea, dockWidget1);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="添加中心区域" tabindex="-1"><a class="header-anchor" href="#添加中心区域"><span>添加中心区域</span></a></h4><p>中心区域cpp（版本一），特点：有中心区域、DockWidget<strong>可以</strong>拖至中心区域</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 【DockManager】
DockManager = new CDockManager(this);

// 【CentralDockWidget】
CDockWidget* dockWidgetCentral = new CDockWidget(&quot;CentralWidget&quot;);
dockWidgetCentral-&gt;setWidget(widget1);
/* 如果参数2为true，则设置这个dockWidget的特性标志；否则清除标志
 * 标志为：如果设置了此标志，dockWidget的标签将永远不会显示
 * 注意：注释掉以后还是可以拖拽，只是没标签，即与其他Dock组成标签列时则不会显示标签
 */
dockWidgetCentral-&gt;setFeature(ads::CDockWidget::NoTab, true);
auto* dockAreaCentral = DockManager-&gt;setCentralWidget(dockWidgetCentral); // 【设置中心部件】
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>中心区域cpp（版本二），特点：有中心区域、DockWidget<strong>不可</strong>拖至中心区域</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 【DockManager】
DockManager = new CDockManager(this);

// 【CentralDockWidget】
CDockWidget* dockWidgetCentral = new CDockWidget(&quot;CentralWidget&quot;);
dockWidgetCentral-&gt;setWidget(widget1);
auto* dockAreaCentral = DockManager-&gt;setCentralWidget(dockWidgetCentral); // 【设置中心部件】
/* 配置这个特定的dockArea中允许停靠的区域
 * 这里的宏指外部区域，即不允许停靠中间
 * 其他DockWidget拖拽不进来，也不用调用setFeature(ads::CDockWidget::NoTab, true);方法了
 */
dockAreaCentral-&gt;setAllowedAreas(DockWidgetArea::OuterDockAreas);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>围绕中心区域新建Dock（DockAreaWidget进行区域管理）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 【Other DockWidgets1】
CDockWidget* dockWidget1 = new CDockWidget(&quot;Table 1&quot;);
dockWidget1-&gt;setWidget(table);
DockManager-&gt;addDockWidgetTabToArea(dockWidget1, dockAreaCentral); 							// 【添加到Dock区域】
auto dockArea = DockManager-&gt;addDockWidget(DockWidgetArea::LeftDockWidgetArea, dockWidget1);// 【添加Dock控件】

// 【Other DockWidgets2、3】，注意参数3
DockManager2-&gt;addDockWidget(DockWidgetArea::BottomDockWidgetArea, dockWidget2, dockArea); 	// 【添加Dock控件】
DockManager3-&gt;addDockWidget(DockWidgetArea::RightDockWidgetArea, dockWidget3, dockAreaCentral);// 【添加Dock控件】
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="mix-ui文件-限制dockmanager区域" tabindex="-1"><a class="header-anchor" href="#mix-ui文件-限制dockmanager区域"><span>mix ui文件（限制DockManager区域）</span></a></h4><p>在ui文件中直接使用拖拽一个QWidget控件出来，将其命名为“dockContainer”，然后将<code>ads::CDockManager</code>放入该控件的Layout里</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>QVBoxLayout* Layout = new QVBoxLayout(ui-&gt;dockContainer);
Layout-&gt;setContentsMargins(QMargins(0, 0, 0, 0));			// 设置布局周围使用的左、上、右、下边距
m_DockManager = new ads::CDockManager(ui-&gt;dockContainer);
Layout-&gt;addWidget(m_DockManager);							// 将DockManager放入Layout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原理：</p><p>DockManager本身所在的区域应该存在一个DockAreaWidget（虽然源码中看不出来有包含）布局管理 Properties</p><p>（centralwidget和emptydockarea案例）</p><p>头文件</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>private:
	void createPerspectiveUi();
private slots:
	void savePerspective();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cpp</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>CMainWindow::CMainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::CMainWindow)
{
	//...
    createPerspectiveUi();
}

void CMainWindow::createPerspectiveUi()	// 工具栏：保存与切换布局
{
    SavePerspectiveAction = new QAction(&quot;Create Perspective&quot;, this);                // 创建布局-Action
    connect(SavePerspectiveAction, SIGNAL(triggered()), SLOT(savePerspective()));   // 创建布局-Action的信号槽
    PerspectiveListAction = new QWidgetAction(this);                                // 布局列表-Action
    // QWidgetAction：通过一个接口扩展了QAction，该接口用于将定制小部件插入到基于操作的容器中，比如工具栏
    PerspectiveComboBox = new QComboBox(this);                                      // 下拉框
    PerspectiveComboBox-&gt;setSizeAdjustPolicy(QComboBox::AdjustToContents);          // 下拉框：当内容更改时组合框的大小如何更改
    PerspectiveComboBox-&gt;setSizePolicy(QSizePolicy::Preferred, QSizePolicy::Preferred);// 下拉框：保存小部件的默认布局行为
    //	connect(PerspectiveComboBox, SIGNAL(activated(const QString&amp;)),				// 原案例的错误写法
	//	DockManager, SLOT(openPerspective(const QString&amp;)));
    connect(PerspectiveComboBox, &amp;QComboBox::activated,                             // 下拉框选择时切换布局
            DockManager, [&amp;](int i){
        DockManager-&gt;openPerspective(PerspectiveComboBox-&gt;itemText(i));
    });
    PerspectiveListAction-&gt;setDefaultWidget(PerspectiveComboBox);                   // 绑定下拉框和布局列表-Action
    ui-&gt;toolBar-&gt;addSeparator();                                                    // 工具栏：增加分割线
    ui-&gt;toolBar-&gt;addAction(PerspectiveListAction);                                  // 工具栏：布局列表-Action
    ui-&gt;toolBar-&gt;addAction(SavePerspectiveAction);                                  // 工具栏：创建布局-Action
}

void CMainWindow::savePerspective()     // 保存布局具体实现
{                                                                   // 弹窗获取布局名
    QString PerspectiveName = QInputDialog::getText(this, &quot;Save Perspective&quot;, &quot;Enter unique name:&quot;);
    if (PerspectiveName.isEmpty())                                  // 检测是否正确输入了布局名
	{
		return;
	}
    DockManager-&gt;addPerspective(PerspectiveName);                   // 添加布局
    QSignalBlocker Blocker(PerspectiveComboBox);                    // 异常安全包装QObject::blockSignals()？？？
    PerspectiveComboBox-&gt;clear();                                   // 清除下拉框内容
    PerspectiveComboBox-&gt;addItems(DockManager-&gt;perspectiveNames()); // 重新填充下拉框
    PerspectiveComboBox-&gt;setCurrentText(PerspectiveName);           // 设置显示的文本
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>//	connect(PerspectiveComboBox, SIGNAL(activated(const QString&amp;)),
//		DockManager, SLOT(openPerspective(const QString&amp;)));
/* 上面的写法会报错：
 * QObject::connect: No such signal QComboBox::activated(const QString&amp;) 
 * in ..\\..\\..\\Qt-Advanced-Docking-System\\examples\\centralwidget\\mainwindow.cpp:99
 * 只有 QComboBox::activated(const int&amp;) 方法 
 */
	connect(PerspectiveComboBox, &amp;QComboBox::activated,
            DockManager, [&amp;](int i){
        DockManager-&gt;openPerspective(PerspectiveComboBox-&gt;itemText(i));
    });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原理</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// DockWidget.h
class ADS_EXPORT CDockWidget : public QFrame
{
protected:
    friend struct DockManagerPrivate;	// 私有数据类型
}

// DockManager.cpp
struct DockManagerPrivate
{
	QMap&lt;QString, QByteArray&gt; Perspectives;
    // Perspectives 本质上是一个哈希表，键是布局名，键是用二进制存储的布局（也可以修改为布局文件）
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要使用方法</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>DockManager-&gt;addPerspective(PerspectiveName);					// 添加布局到布局列表
DockManager-&gt;perspectiveNames();								// 布局列表
DockManager-&gt;openPerspective(PerspectiveComboBox-&gt;itemText(i));	// 根据布局名启用布局
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="高级使用-继承重写" tabindex="-1"><a class="header-anchor" href="#高级使用-继承重写"><span>高级使用（继承重写）</span></a></h3><p>这个很复杂，引用ADS作者的话就是</p><blockquote><p>我不得不承认，我不喜欢这个主意。 在我看来，它为已经很复杂的用户界面增加了额外的复杂性。 因此，我不会实施这个，但我会保留这个问题，以防有人想实施这个。 如果对 ADS 的其他部分没有负面影响，我只会接受此功能的拉取请求。</p></blockquote><p>属于是ADS的扩展，研究的话相当于要看Dock源码，需要的话直接使用就好</p><h4 id="嵌套分级dock-对ads-cdockmanager的继承重写" tabindex="-1"><a class="header-anchor" href="#嵌套分级dock-对ads-cdockmanager的继承重写"><span>嵌套分级Dock（对ads::CDockManager的继承重写）</span></a></h4><p>官方案例demo</p><p>项目结构（新增了4个新类）~~ ~~</p><table><thead><tr><th>文件</th><th>新类</th><th>作用</th><th>继承于</th></tr></thead><tbody><tr><td><s>mainfram.h</s></td><td><s>MainWindow</s></td><td></td><td><s>QMainWindow</s></td></tr><tr><td>dockindock.h</td><td>DockInDockWidget</td><td>嵌套dock类</td><td>QWidget</td></tr><tr><td>dockindockmanager.h</td><td>DockInDockManager</td><td>嵌套dock类管理器</td><td><strong>ads::CDockManager</strong></td></tr><tr><td>perspectiveactions.h</td><td>LoadPerspectiveAction</td><td>加载布局Action</td><td>QAction</td></tr><tr><td>perspectives.h</td><td>PerspectivesManager</td><td>布局管理器</td><td>QObject</td></tr></tbody></table><p>新继承树</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
QWidget<span class="token arrow operator">--&gt;</span>DockInDockWidget
CDockManager<span class="token arrow operator">--&gt;</span>DockInDockManager
QAction<span class="token arrow operator">--&gt;</span>LoadPerspectiveAction
QObject<span class="token arrow operator">--&gt;</span>PerspectivesManager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="main-cpp" tabindex="-1"><a class="header-anchor" href="#main-cpp"><span>main.cpp</span></a></h5><p>和普通案例一般无疑</p><p>倒是这里原案例有个巧妙的bug</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;QApplication&gt;
//#include &quot;../../examples/simple/MainWindow.h&quot;		// 原写法，程序正确运行。可能是原作者疏忽了
// 非常奇怪，引用的simple案例里的MainWindow.h时，调试会发现：
// 实际使用的还是该工程下的mainframe.h版本的MainWindow类而不是simple/MainWindow.h里面的MainWindow类
#include &quot;../../examples/dockindock/mainframe.h&quot;	// 正确写法

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    MainWindow w;
    w.show();

    return a.exec();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pro</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">SOURCES</span> <span class="token value attr-value">+= \\
        dockindock.cpp \\
        dockindockmanager.cpp \\
        perspectiveactions.cpp \\
        perspectives.cpp \\
        main.cpp \\
        mainframe.cpp				# 【1】</span>
<span class="token comment">        # ../simple/MainWindow.cpp	# 【2】</span>

<span class="token key attr-name">HEADERS</span> <span class="token value attr-value">+= \\
        dockindock.h \\
        dockindockmanager.h \\
        perspectiveactions.h \\
        perspectives.h \\
        mainframe.h					# 【1】</span>
<span class="token comment">        # ../simple/MainWindow.h	# 【2】</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实验结果</p><ul><li>有1无2：项目神奇的正确运行起来了（原demo）</li><li>无1有2：运行后效果同simple子工程</li><li>有1有2：报错：error: LNK1169: 找到一个或多个多重定义的符号。因为编译两个相同名称的类（而且他们还处于同一命名空间）</li></ul><p>原因猜测</p><ul><li>作者可能不小心引用错头文件了</li><li>虽然include了但不包含进编译列表里，然后编译器自动用编译列表里的其他东西来代替了你的include......这种感觉？</li></ul><ul><li>巧妙的bug</li></ul><h5 id="mainframe" tabindex="-1"><a class="header-anchor" href="#mainframe"><span>mainframe</span></a></h5><p>mainframe.h</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#pragma once

#include &lt;QMainWindow&gt;
#include &lt;QAction&gt;
#include &lt;QSettings&gt;

#include &lt;memory&gt;
namespace QtAdsUtl								// 向前声明
{
    class DockInDockWidget;						// 包含Dock
    class PerspectivesManager;					// 布局管理器
}

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = 0);
    ~MainWindow();

    QtAdsUtl::DockInDockWidget* m_dockManager;	// 定义两个指针，其中第二个是智能指针
    std::unique_ptr&lt;QtAdsUtl::PerspectivesManager&gt; m_perspectivesManager;
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mainframe.cpp</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &quot;mainframe.h&quot;

#include &quot;dockindock.h&quot;
#include &quot;perspectives.h&quot;

#include &lt;QLabel&gt;
#include &lt;QMenuBar&gt;
#include &lt;QMessageBox&gt;
#include &lt;QSettings&gt;

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    m_perspectivesManager( new QtAdsUtl::PerspectivesManager( &quot;persist&quot; ) )
{
    resize( 400, 400 );

    setCentralWidget( m_dockManager = new QtAdsUtl::DockInDockWidget(this,true,m_perspectivesManager.get()) );

    m_dockManager-&gt;attachViewMenu( menuBar()-&gt;addMenu( &quot;View&quot; ) );

    ads::CDockAreaWidget* previousDockWidget = NULL;
    for ( int i = 0; i != 3; ++i )
    {
        // Create example content label - this can be any application specific
        // widget
        QLabel* l = new QLabel();
        l-&gt;setWordWrap(true);
        l-&gt;setAlignment(Qt::AlignTop | Qt::AlignLeft);
        l-&gt;setText(&quot;Lorem ipsum dolor sit amet, consectetuer adipiscing elit. &quot;);

        previousDockWidget = m_dockManager-&gt;addTabWidget( l, &quot;Top label &quot; + QString::number(i), previousDockWidget );
    }

    auto lastTopLevelDock = previousDockWidget;

    for ( int j = 0; j != 2; ++j )
    {
        QtAdsUtl::DockInDockWidget* groupManager = m_dockManager-&gt;createGroup( &quot;Group &quot; + QString::number(j), lastTopLevelDock );

        previousDockWidget = NULL;
        for ( int i = 0; i != 3; ++i )
        {
            // Create example content label - this can be any application specific
            // widget
            QLabel* l = new QLabel();
            l-&gt;setWordWrap(true);
            l-&gt;setAlignment(Qt::AlignTop | Qt::AlignLeft);
            l-&gt;setText(&quot;Lorem ipsum dolor sit amet, consectetuer adipiscing elit. &quot;);

            previousDockWidget = groupManager-&gt;addTabWidget( l, &quot;ZInner &quot; + QString::number(j) + &quot;/&quot; + QString::number(i), previousDockWidget );
        }

        // create sub-group
        auto subGroup = groupManager-&gt;createGroup( &quot;SubGroup &quot; + QString::number(j), previousDockWidget );
        previousDockWidget = NULL;
        for ( int i = 0; i != 3; ++i )
        {
            // Create example content label - this can be any application specific
            // widget
            QLabel* l = new QLabel();
            l-&gt;setWordWrap(true);
            l-&gt;setAlignment(Qt::AlignTop | Qt::AlignLeft);
            l-&gt;setText(&quot;Lorem ipsum dolor sit amet, consectetuer adipiscing elit. &quot;);

            previousDockWidget = subGroup-&gt;addTabWidget( l, &quot;SubInner &quot; + QString::number(j) + &quot;/&quot; + QString::number(i), previousDockWidget );
        }
    }

    m_perspectivesManager-&gt;loadPerspectives();
}

MainWindow::~MainWindow()
{
    m_perspectivesManager-&gt;savePerspectives();
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="核心代码分析-src" tabindex="-1"><a class="header-anchor" href="#核心代码分析-src"><span>核心代码分析 - src</span></a></h2><h3 id="接入使用原理" tabindex="-1"><a class="header-anchor" href="#接入使用原理"><span>接入使用原理</span></a></h3><p>QtAdvancedDockingSystem流程</p><ul><li><p>观察生成目录：QtAdvancedDockingSystem会在同级目录生成一个lib文件夹，里面装的是<code>qtadvanceddocking.dll</code></p><p>（这个lib文件夹的生成路径可以在QtAdvancedDockingSystem.pro的第一行里进行修改ADS_OUT_ROOT参数）</p></li></ul><p>调用代码的流程</p><ul><li><code>LIBS += -L$\${ADS_OUT_ROOT}/3rdparty/lib</code>，即调用QtAdvancedDockingSystem生成的dll文件</li><li><code>INCLUDEPATH += ../3rdparty/QtAdvancedDockingSystem</code>，使工程能直接include其头文件</li><li><code>#include &quot;DockManager.h&quot;</code>，主要要引入的头文件</li></ul><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码"><span>代码</span></a></h3><h4 id="qtadvanceddockingsystem-pro" tabindex="-1"><a class="header-anchor" href="#qtadvanceddockingsystem-pro"><span>QtAdvancedDockingSystem.pro</span></a></h4><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">ADS_OUT_ROOT</span> <span class="token punctuation">=</span> <span class="token value attr-value">$\${OUT_PWD}/..		# 特别注意一下第一行，可以修改lib的生成路径</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="常用类继承树" tabindex="-1"><a class="header-anchor" href="#常用类继承树"><span>常用类继承树</span></a></h4><p>继承树</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
QObject<span class="token arrow operator">--&gt;</span>QWidget
QPaintDevice<span class="token arrow operator">--&gt;</span>QWidget
QWidget<span class="token arrow operator">--&gt;</span>QFrame

QFrame<span class="token arrow operator">--&gt;</span>CDockContainerWidget<span class="token arrow operator">--&gt;</span>CDockManager<span class="token punctuation">;</span>class CDockManager red
QFrame<span class="token arrow operator">--&gt;</span>CDockWidget<span class="token punctuation">;</span>class CDockWidget red
QFrame<span class="token arrow operator">---&gt;</span>CDockAreaWidget<span class="token punctuation">;</span>class CDockAreaWidget red
CDockWidget<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">被管理</span><span class="token arrow operator">.-&gt;</span></span>CDockManager
CDockWidget<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">实则被放入</span><span class="token arrow operator">.-&gt;</span></span>CDockAreaWidget

<span class="token keyword">classDef</span> red <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f9f<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>4px</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cdockmanager-h-核心类-dock管理器" tabindex="-1"><a class="header-anchor" href="#cdockmanager-h-核心类-dock管理器"><span>CDockManager.h（核心类，Dock管理器）</span></a></h4><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &quot;DockWidget.h&quot;
// ...
namespace ads
{
// ...    
class ADS_EXPORT CDockManager : public CDockContainerWidget	// 继承的是一个存放CDockWidget的容器
{
	Q_OBJECT
private:
    // ...
public:
    // ...
    CDockAreaWidget* addDockWidget(DockWidgetArea area, CDockWidget* Dockwidget,
		CDockAreaWidget* DockAreaWidget = nullptr);
};
} // namespace ads
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cdockwidget-h-核心类-dock控件" tabindex="-1"><a class="header-anchor" href="#cdockwidget-h-核心类-dock控件"><span>CDockWidget.h（核心类，Dock控件）</span></a></h4><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>namespace ads
{
// ...
class ADS_EXPORT CDockWidget : public QFrame		// 继承于帧QFrame
{
    Q_OBJECT
private:
	// ...
};
} // namespace ads
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cdockareawidget-h-核心类-dock控件的放置区域" tabindex="-1"><a class="header-anchor" href="#cdockareawidget-h-核心类-dock控件的放置区域"><span>CDockAreaWidget.h（核心类，Dock控件的放置区域）</span></a></h4>`,147);function k(h,D){const n=l("ExternalLinkIcon");return t(),c("div",null,[o,e("ul",null,[v,e("li",null,[i("Reference "),e("ul",null,[e("li",null,[e("s",null,[e("a",u,[i("【博客园】高级停靠(Dock)技术的实现"),a(n)])]),i("（非Qt实现）")]),e("li",null,[e("s",null,[e("a",m,[i("【博客园】Qt布局管理： 停靠窗口QDockWidget类（纯代码实现）"),a(n)])])]),e("li",null,[e("a",g,[i("【Qt官网】advanced-docking-system"),a(n)])]),e("li",null,[e("a",p,[i("【Github】Qt-Advanced-Docking-System"),a(n)])])])])]),b])}const C=s(r,[["render",k],["__file","Qt_Advanced_Docking_System.html.vue"]]),A=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Multi/QT%EF%BC%88Cpp%EF%BC%89/05.%20%E5%8A%9F%E8%83%BD%E5%AE%9E%E7%8E%B0%E7%B1%BB/Qt_Advanced_Docking_System.html","title":"Qt","lang":"zh-CN","frontmatter":{"description":"Qt 目录 Qt_Advanced_Docking_System Keyword qt dock window qt 停靠Dock Reference （非Qt实现） 【Qt官网】advanced-docking-system 【Github】Qt-Advanced-Docking-System 先进的对接系统 https://marketplace....","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Multi/QT%EF%BC%88Cpp%EF%BC%89/05.%20%E5%8A%9F%E8%83%BD%E5%AE%9E%E7%8E%B0%E7%B1%BB/Qt_Advanced_Docking_System.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Qt"}],["meta",{"property":"og:description","content":"Qt 目录 Qt_Advanced_Docking_System Keyword qt dock window qt 停靠Dock Reference （非Qt实现） 【Qt官网】advanced-docking-system 【Github】Qt-Advanced-Docking-System 先进的对接系统 https://marketplace...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Qt\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"Qt","slug":"qt","link":"#qt","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"Qt_Advanced_Docking_System","slug":"qt-advanced-docking-system","link":"#qt-advanced-docking-system","children":[{"level":2,"title":"先进的对接系统","slug":"先进的对接系统","link":"#先进的对接系统","children":[{"level":3,"title":"项目分析","slug":"项目分析","link":"#项目分析","children":[]},{"level":3,"title":"官方案例 - Example","slug":"官方案例-example","link":"#官方案例-example","children":[]},{"level":3,"title":"官方作品 - 展示柜","slug":"官方作品-展示柜","link":"#官方作品-展示柜","children":[]}]},{"level":2,"title":"接口使用","slug":"接口使用","link":"#接口使用","children":[{"level":3,"title":"基本使用（接入使用）","slug":"基本使用-接入使用","link":"#基本使用-接入使用","children":[{"level":4,"title":"接入使用 - 代码增量","slug":"接入使用-代码增量","link":"#接入使用-代码增量","children":[]},{"level":4,"title":"接入使用 - 打包注意项","slug":"接入使用-打包注意项","link":"#接入使用-打包注意项","children":[]},{"level":4,"title":"基本使用  单Dock","slug":"基本使用-单dock","link":"#基本使用-单dock","children":[]},{"level":4,"title":"基本使用  多Dock","slug":"基本使用-多dock","link":"#基本使用-多dock","children":[]}]},{"level":3,"title":"进阶使用","slug":"进阶使用","link":"#进阶使用","children":[{"level":4,"title":"垃圾回收  DockManager","slug":"垃圾回收-dockmanager","link":"#垃圾回收-dockmanager","children":[]},{"level":4,"title":"垃圾回收  DockWidget","slug":"垃圾回收-dockwidget","link":"#垃圾回收-dockwidget","children":[]},{"level":4,"title":"属性设置  DockManager","slug":"属性设置-dockmanager","link":"#属性设置-dockmanager","children":[]},{"level":4,"title":"属性设置  DockWidget","slug":"属性设置-dockwidget","link":"#属性设置-dockwidget","children":[]},{"level":4,"title":"DockAreaWidget管理","slug":"dockareawidget管理","link":"#dockareawidget管理","children":[]},{"level":4,"title":"添加中心区域","slug":"添加中心区域","link":"#添加中心区域","children":[]},{"level":4,"title":"mix ui文件（限制DockManager区域）","slug":"mix-ui文件-限制dockmanager区域","link":"#mix-ui文件-限制dockmanager区域","children":[]}]},{"level":3,"title":"高级使用（继承重写）","slug":"高级使用-继承重写","link":"#高级使用-继承重写","children":[{"level":4,"title":"嵌套分级Dock（对ads::CDockManager的继承重写）","slug":"嵌套分级dock-对ads-cdockmanager的继承重写","link":"#嵌套分级dock-对ads-cdockmanager的继承重写","children":[{"level":5,"title":"main.cpp","slug":"main-cpp","link":"#main-cpp","children":[]},{"level":5,"title":"mainframe","slug":"mainframe","link":"#mainframe","children":[]}]}]}]},{"level":2,"title":"核心代码分析 - src","slug":"核心代码分析-src","link":"#核心代码分析-src","children":[{"level":3,"title":"接入使用原理","slug":"接入使用原理","link":"#接入使用原理","children":[]},{"level":3,"title":"代码","slug":"代码","link":"#代码","children":[{"level":4,"title":"QtAdvancedDockingSystem.pro","slug":"qtadvanceddockingsystem-pro","link":"#qtadvanceddockingsystem-pro","children":[]},{"level":4,"title":"常用类继承树","slug":"常用类继承树","link":"#常用类继承树","children":[]},{"level":4,"title":"CDockManager.h（核心类，Dock管理器）","slug":"cdockmanager-h-核心类-dock管理器","link":"#cdockmanager-h-核心类-dock管理器","children":[]},{"level":4,"title":"CDockWidget.h（核心类，Dock控件）","slug":"cdockwidget-h-核心类-dock控件","link":"#cdockwidget-h-核心类-dock控件","children":[]},{"level":4,"title":"CDockAreaWidget.h（核心类，Dock控件的放置区域）","slug":"cdockareawidget-h-核心类-dock控件的放置区域","link":"#cdockareawidget-h-核心类-dock控件的放置区域","children":[]}]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":19.64,"words":5891},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Platform/Multi/QT（Cpp）/05. 功能实现类/Qt_Advanced_Docking_System.md","autoDesc":true}');export{C as comp,A as data};

import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as p,c,b as n,e,d as a,a as i}from"./app-Ld2qzqw_.js";const d={},r=i(`<h1 id="qt" tabindex="-1"><a class="header-anchor" href="#qt"><span>QT</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="混合-数种ui流" tabindex="-1"><a class="header-anchor" href="#混合-数种ui流"><span>混合 - 数种UI流</span></a></h1><h2 id="qwidgets-协同-qgraphics" tabindex="-1"><a class="header-anchor" href="#qwidgets-协同-qgraphics"><span>QWidgets 协同 QGraphics</span></a></h2><p><mark>关系树详见 QWidget与继承树</mark></p><p>QWidget 与 QGraphics 都继承于 QObject、模块均为 widgets，邻近度很高</p><p>常用控件</p><ul><li>QWidget系列，常用控件如 QWidget、QPushButton、QFlame 等</li><li>QGraphics系列，常用控件如 QGraphicsScene、QGraphicsItem 、<s>QGraphicsView (这个是QWidget)</s> 等</li></ul><h3 id="qwidget-嵌套-qgraphics" tabindex="-1"><a class="header-anchor" href="#qwidget-嵌套-qgraphics"><span>QWidget 嵌套 QGraphics</span></a></h3><p>非常简单</p><p>核心在于：QObject &gt; QWidget &gt; QFrame &gt; QAbstractScrollArea &gt; <mark>QGraphicsView</mark>，是一个构造函数接受QGraphicsScene参数的QWidget对象</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>QGraphicsView(QGraphicsScene *scene, QWidget *parent = nullptr)
QGraphicsView(QWidget *parent = nullptr)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> <span class="token punctuation">.</span>node_graphics_view <span class="token keyword">import</span> QDMGraphicsView
<span class="token keyword">from</span> <span class="token punctuation">.</span>node_scene <span class="token keyword">import</span> Scene

<span class="token keyword">class</span> <span class="token class-name">NodeEditWidget</span><span class="token punctuation">(</span>QWidget<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> parent<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># create graphics sence</span>
        self<span class="token punctuation">.</span>scene <span class="token operator">=</span> Scene<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>grScene <span class="token operator">=</span> self<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>grScene
        
        <span class="token comment"># create graphics view</span>
        self<span class="token punctuation">.</span>view <span class="token operator">=</span> QDMGraphicsView<span class="token punctuation">(</span>self<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>grScene<span class="token punctuation">,</span> self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>layout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>self<span class="token punctuation">.</span>view<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="qgraphics-嵌套-qwidget" tabindex="-1"><a class="header-anchor" href="#qgraphics-嵌套-qwidget"><span>QGraphics 嵌套 QWidget</span></a></h3><p>也非常简单（之前开发NodeEditor时用过这个操作）</p><p>核心在于：QObject &gt; QGraphicsItem &gt; QGraphicsObject &gt; QGraphicsWidget &gt; <mark>QGraphicsProxyWidget</mark>，有一个接受QWidget对象的方法</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>QGraphicsProxyWidget(QGraphicsItem *parent = nullptr, Qt::WindowFlags wFlags = Qt::WindowFlags())
void setWidget(QWidget *widget)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">QDMGraphicsNode</span><span class="token punctuation">(</span>QGraphicsItem<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> node<span class="token punctuation">,</span> parent<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># ……</span>
        self<span class="token punctuation">.</span>wdContent <span class="token operator">=</span> self<span class="token punctuation">.</span>node<span class="token punctuation">.</span>wdContent
        self<span class="token punctuation">.</span>wdContent<span class="token punctuation">.</span>setGeometry<span class="token punctuation">(</span>self<span class="token punctuation">.</span>node_padding<span class="token punctuation">,</span> self<span class="token punctuation">.</span>title_height <span class="token operator">+</span> self<span class="token punctuation">.</span>node_padding
        	<span class="token punctuation">,</span> self<span class="token punctuation">.</span>width <span class="token operator">-</span> <span class="token number">2</span> <span class="token operator">*</span> self<span class="token punctuation">.</span>node_padding<span class="token punctuation">,</span> self<span class="token punctuation">.</span>height <span class="token operator">-</span> <span class="token number">2</span> <span class="token operator">*</span> self<span class="token punctuation">.</span>node_padding <span class="token operator">-</span> self<span class="token punctuation">.</span>title_height<span class="token punctuation">)</span>
        
        self<span class="token punctuation">.</span>grContent <span class="token operator">=</span> QGraphicsProxyWidget<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>grContent<span class="token punctuation">.</span>setWidget<span class="token punctuation">(</span>self<span class="token punctuation">.</span>wdContent<span class="token punctuation">)</span>
        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="qt-widget-协同-qt-quick" tabindex="-1"><a class="header-anchor" href="#qt-widget-协同-qt-quick"><span>Qt Widget 协同 Qt Quick</span></a></h2><h3 id="main-cpp-直接-使用qml" tabindex="-1"><a class="header-anchor" href="#main-cpp-直接-使用qml"><span>main.cpp 直接 使用QML</span></a></h3><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;QGuiApplication&gt;
#include &lt;QQmlApplicationEngine&gt;

int main(int argc, char *argv[])
{
#if QT_VERSION &lt; QT_VERSION_CHECK(6, 0, 0)
    QCoreApplication::setAttribute(Qt::AA_EnableHighDpiScaling);
#endif

    QGuiApplication app(argc, argv);

    QQmlApplicationEngine engine;                                       // QML引擎
    const QUrl url(QStringLiteral(&quot;qrc:/main.qml&quot;));                    // 需要加载的qml
    QObject::connect(&amp;engine, &amp;QQmlApplicationEngine::objectCreated,	// 将引擎结果关联到lambda上
                     &amp;app, [url](QObject *obj, const QUrl &amp;objUrl) {
        if (!obj &amp;&amp; url == objUrl)										// 无法加载则退出程序
            QCoreApplication::exit(-1);
    }, Qt::QueuedConnection);
    engine.load(url);                                                   // 用QML引擎加载qml文档

    return app.exec();                                                  // 消息循环
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种情况下，QML文件需要以Window之类的作为根节点</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> QtQuick <span class="token number">2.6</span>
<span class="token keyword">import</span> QtQuick<span class="token punctuation">.</span>Window <span class="token number">2.2</span>

Window <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">640</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">480</span>
    <span class="token literal-property property">visible</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token function">qsTr</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简单嵌套-qquickwidget" tabindex="-1"><a class="header-anchor" href="#简单嵌套-qquickwidget"><span>简单嵌套（ QQuickWidget）</span></a></h3>`,26),o={href:"https://www.jianshu.com/p/19c9969745c7",target:"_blank",rel:"noopener noreferrer"},u=i(`<p>QWidget界面和QML窗口相互嵌套都是需要借助 quickwidgets 这个模块中的类 这里使用的是QQuickWidget，这个类是继承QWidget的，就和 QWidget 一样使用就行</p><p>.cpp</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;QApplication&gt;
#include &lt;QtQuickWidgets/QQuickWidget&gt;
#include &lt;QQuickView&gt;
#include &lt;QHBoxLayout&gt;
#include &lt;QLabel&gt;

int main(int argc, char *argv[])
{
    // QApplication::setAttribute(Qt::AA_UseSoftwareOpenGL);
    QApplication::setAttribute(Qt::AA_EnableHighDpiScaling);
    
    QApplication app(argc, argv);
    
    QWidget * widget = new QWidget;
    widget-&gt;setWindowTitle(&quot;widget 主窗口&quot;);
    widget-&gt;resize(800, 400);
    
    // 设置布局
    QHBoxLayout * layout = new QHBoxLayout;
    layout-&gt;setContentsMargins(0, 0, 0 ,0);
    widget-&gt;setLayout(layout);
    
    // qml 界面 嵌入到 widget
    QQuickWidget qmlWidget(QUrl(&quot;qrc:/main.qml&quot;));
    qmlWidget.setResizeMode(QQuickWidget::SizeRootObjectToView );
    // 设置这个之后 anchor不用设置，root节点大小会根据 QQuickWidget大小改变
    // 在qml里 通过 parent 获取不到 widget 窗口 !!!   
    layout-&gt;addWidget(&amp;qmlWidget);
    
    // widget 界面 嵌入到 qmlWidget里
    QLabel label(&quot;QLabel&quot;, &amp;qmlWidget);
    label.move(100, 100);
    
    // widget 界面 嵌入到 widget
    QLabel nativeWidget;
    nativeWidget.setText(&quot;Widget&quot;);
    nativeWidget.setAlignment(Qt::AlignCenter);
    layout-&gt;addWidget(&amp;nativeWidget);
    
    widget-&gt;show();
    
    return app.exec();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.qml</p><ul><li><strong>注意</strong>：如果是用 QQuickView或者QQuickWidget 加载的qml，root节点不能是 Window 这一类类型，最好是Rectangle</li><li><strong>注意</strong>：Rectangle里不能放QWidget界面，否则直接断言退出程序 ASSERT: &quot;!d-&gt;isWidget&quot; in file [kernel\\qobject.cpp, line 1979](kernel\\qobject.cpp, line 1979)</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> QtQuick <span class="token number">2.9</span>

Rectangle <span class="token punctuation">{</span>
    <span class="token comment">//visible: true</span>
    <span class="token comment">//width: 150</span>
    <span class="token comment">//height: 150</span>
    <span class="token comment">//anchors.fill: parent</span>
    <span class="token comment">//anchors.centerIn: parent</span>
    
    border<span class="token punctuation">.</span>color<span class="token operator">:</span> <span class="token string">&quot;#00ffd5&quot;</span>
    border<span class="token punctuation">.</span>width<span class="token operator">:</span> <span class="token number">10</span>
    <span class="token literal-property property">radius</span> <span class="token operator">:</span> <span class="token number">10</span>
    
    Text <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span> <span class="token operator">:</span> text
        anchors<span class="token punctuation">.</span>centerIn<span class="token operator">:</span> parent
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token function">qsTr</span><span class="token punctuation">(</span><span class="token string">&quot;QML Text&quot;</span><span class="token punctuation">)</span>
        <span class="token literal-property property">antialiasing</span><span class="token operator">:</span> <span class="token boolean">true</span>  <span class="token comment">//抗锯齿</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 旋转动画</span>
    NumberAnimation <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span> <span class="token operator">:</span> numberAnimation
        <span class="token literal-property property">target</span><span class="token operator">:</span> text
        <span class="token literal-property property">property</span><span class="token operator">:</span> <span class="token string">&quot;rotation&quot;</span>
        <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token number">360</span>
        <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">3000</span>
        
        <span class="token literal-property property">running</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token literal-property property">loops</span><span class="token operator">:</span> Animation<span class="token punctuation">.</span>Infinite
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="qwidget-嵌套-qml-并交互" tabindex="-1"><a class="header-anchor" href="#qwidget-嵌套-qml-并交互"><span>QWidget 嵌套 QML 并交互</span></a></h3><p>参考：</p>`,8),v={href:"https://blog.csdn.net/weixin_42887343/article/details/118345197",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.csdn.net/qq_35173114/article/details/80863081",target:"_blank",rel:"noopener noreferrer"},g={href:"https://blog.csdn.net/uVarAndMethod/article/details/127895907",target:"_blank",rel:"noopener noreferrer"},b=i(`<p>原理</p><ol><li><p>使用QQuickView 类提供一个用于显示 Qt Quick 用户界面的窗口。</p></li><li><p>使用QWidget::createWindowContainer()函数，将QtQuick组件嵌入到QWidget中，该函数直接返回qwidget指针。</p></li><li><p>如果不需要交互就到此为止了。步骤 3 进行交互</p><p>使用QQmlContext 类定义 QML 引擎中的上下文。通过该类可实现C++和qml属性数据的交互，比如读取qml控件中的公开属性（成员变量）。</p></li></ol><p>实现</p><ol><li>通过 QQuickView 类添加qml控件代码文件：</li></ol><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>QQuickView *mQuickView = new QQuickView();
mQuickView-&gt;setSource(QUrl(&quot;qrc:/testQml.qml&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>将qml控件导入QWidget中：</li></ol><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>QWidget *mQuickWidget = QWidget::createWindowContainer(mQuickView, this);
mQuickWidget-&gt;setMinimumSize(80,30);	//设置被嵌入的窗口大小和位置
mQuickWidget-&gt;move(0,0);
mQuickWidget-&gt;show(); 					// 显示qml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><p>如果不需要交互就到此为止了。步骤 3 进行交互</p><p>设置qml控件成员及读取其值</p></li></ol><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>QQmlContext *mQuickContext = mQuickView-&gt;rootContext();// 用于与qml交互

//首先进行读取，属性名：quickWidgetWidth、quickWidgetHeigh
int width = mQuickContext-&gt;contextProperty(&quot;quickWidgetWidth&quot;).toInt();
int hight = mQuickContext-&gt;contextProperty(&quot;quickWidgetHeigh&quot;).toInt();
qDebug()&lt;&lt;&quot;width:&quot;&lt;&lt;width;
qDebug()&lt;&lt;&quot;hight:&quot;&lt;&lt;hight;

//设置qml控件quickWidgetWidth、quickWidgetHeigh属性
mQuickContext-&gt;setContextProperty(&quot;quickWidgetWidth&quot;, 30);
mQuickContext-&gt;setContextProperty(&quot;quickWidgetHeight&quot;, 30);

//读取显示，测试是否写入成功
width = mQuickContext-&gt;contextProperty(&quot;quickWidgetWidth&quot;).toInt();
hight = mQuickContext-&gt;contextProperty(&quot;quickWidgetHeigh&quot;).toInt();
qDebug()&lt;&lt;&quot;width:&quot;&lt;&lt;width;
qDebug()&lt;&lt;&quot;hight:&quot;&lt;&lt;hight;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试用的testQml.qml文件：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> QtQuick <span class="token number">2.0</span>

Rectangle <span class="token punctuation">{</span>
    <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 缺省为0</span>
    <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 缺省为0</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> quickWidgetWidth<span class="token punctuation">;</span>   <span class="token comment">// width是宽度</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> quickWidgetHeight<span class="token punctuation">;</span> <span class="token comment">// height是高度</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="qml-嵌套-qwidget-必要性不大" tabindex="-1"><a class="header-anchor" href="#qml-嵌套-qwidget-必要性不大"><span>QML 嵌套 QWidget（必要性不大？）</span></a></h3><p><s>https://download.csdn.net/download/zs1123/13211576</s></p><p>https://download.csdn.net/download/weixin_40912639/10876647</p><h2 id="ui-混合-qml" tabindex="-1"><a class="header-anchor" href="#ui-混合-qml"><span>.ui 混合 .qml</span></a></h2><p>https://blog.csdn.net/weixin_43814837/article/details/104969474</p><h2 id="协同-web" tabindex="-1"><a class="header-anchor" href="#协同-web"><span>协同 Web</span></a></h2><h3 id="qwidget-嵌入-web" tabindex="-1"><a class="header-anchor" href="#qwidget-嵌入-web"><span>QWidget 嵌入 Web</span></a></h3><p>QWidget中与Web相关的主要类：</p><ul><li><strong>QWebEngineView</strong></li><li>QWebInspector</li><li>QWebView</li></ul><h3 id="qgraphics-嵌入-web" tabindex="-1"><a class="header-anchor" href="#qgraphics-嵌入-web"><span>QGraphics 嵌入 Web</span></a></h3><p>QGraphics系列中与Web相关的主要类：</p><ul><li>QGraphicsItem &gt; QGraphicsObject &gt; QGraphicsWidget <ul><li>QGraphicsProxyWidget</li><li>QGraphicsWebView</li></ul></li></ul><p>看到这个 QGraphicsWidget 应该也明白了，原理跟 QWidget 嵌入 Web 是一样的</p><h3 id="qml-嵌入-web" tabindex="-1"><a class="header-anchor" href="#qml-嵌入-web"><span>QML 嵌入 Web</span></a></h3><p>WebEngine QML Type</p><h3 id="web-中嵌入-应该做不到吧-也没什么必要" tabindex="-1"><a class="header-anchor" href="#web-中嵌入-应该做不到吧-也没什么必要"><span><s>Web 中嵌入 ……（应该做不到吧，也没什么必要）</s></span></a></h3>`,27);function k(h,Q){const s=l("ExternalLinkIcon");return p(),c("div",null,[r,n("p",null,[e("参考："),n("a",o,[e("【简书】QWidget 和 QML窗口 相互嵌套"),a(s)])]),u,n("ul",null,[n("li",null,[n("a",v,[e("【CSDN】qwidget嵌入qml界面"),a(s)]),e(" 原创")]),n("li",null,[n("a",m,[e("【CSDN】QWidget调用QML界面，并交互(上)"),a(s)]),e(" 原创")]),n("li",null,[n("a",g,[e("【CSDN】qt 中 qwidget 嵌入 qml"),a(s)]),e(" 原创")])]),b])}const W=t(d,[["render",k],["__file","02. 混合 - 数种UI流.html.vue"]]),y=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Multi/QT%EF%BC%88Cpp%EF%BC%89/02.%20QtGUI%E7%B1%BB/00.%20%E6%95%B0%E7%A7%8DUI%E6%B5%81/02.%20%E6%B7%B7%E5%90%88%20-%20%E6%95%B0%E7%A7%8DUI%E6%B5%81.html","title":"QT","lang":"zh-CN","frontmatter":{"description":"QT 目录 混合 - 数种UI流 QWidgets 协同 QGraphics 关系树详见 QWidget与继承树 QWidget 与 QGraphics 都继承于 QObject、模块均为 widgets，邻近度很高 常用控件 QWidget系列，常用控件如 QWidget、QPushButton、QFlame 等 QGraphics系列，常用控件如 ...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Multi/QT%EF%BC%88Cpp%EF%BC%89/02.%20QtGUI%E7%B1%BB/00.%20%E6%95%B0%E7%A7%8DUI%E6%B5%81/02.%20%E6%B7%B7%E5%90%88%20-%20%E6%95%B0%E7%A7%8DUI%E6%B5%81.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"QT"}],["meta",{"property":"og:description","content":"QT 目录 混合 - 数种UI流 QWidgets 协同 QGraphics 关系树详见 QWidget与继承树 QWidget 与 QGraphics 都继承于 QObject、模块均为 widgets，邻近度很高 常用控件 QWidget系列，常用控件如 QWidget、QPushButton、QFlame 等 QGraphics系列，常用控件如 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"QT\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"QT","slug":"qt","link":"#qt","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"混合 - 数种UI流","slug":"混合-数种ui流","link":"#混合-数种ui流","children":[{"level":2,"title":"QWidgets 协同 QGraphics","slug":"qwidgets-协同-qgraphics","link":"#qwidgets-协同-qgraphics","children":[{"level":3,"title":"QWidget 嵌套 QGraphics","slug":"qwidget-嵌套-qgraphics","link":"#qwidget-嵌套-qgraphics","children":[]},{"level":3,"title":"QGraphics 嵌套 QWidget","slug":"qgraphics-嵌套-qwidget","link":"#qgraphics-嵌套-qwidget","children":[]}]},{"level":2,"title":"Qt Widget 协同 Qt Quick","slug":"qt-widget-协同-qt-quick","link":"#qt-widget-协同-qt-quick","children":[{"level":3,"title":"main.cpp 直接 使用QML","slug":"main-cpp-直接-使用qml","link":"#main-cpp-直接-使用qml","children":[]},{"level":3,"title":"简单嵌套（ QQuickWidget）","slug":"简单嵌套-qquickwidget","link":"#简单嵌套-qquickwidget","children":[]},{"level":3,"title":"QWidget 嵌套 QML 并交互","slug":"qwidget-嵌套-qml-并交互","link":"#qwidget-嵌套-qml-并交互","children":[]},{"level":3,"title":"QML 嵌套 QWidget（必要性不大？）","slug":"qml-嵌套-qwidget-必要性不大","link":"#qml-嵌套-qwidget-必要性不大","children":[]}]},{"level":2,"title":".ui 混合 .qml","slug":"ui-混合-qml","link":"#ui-混合-qml","children":[]},{"level":2,"title":"协同 Web","slug":"协同-web","link":"#协同-web","children":[{"level":3,"title":"QWidget 嵌入 Web","slug":"qwidget-嵌入-web","link":"#qwidget-嵌入-web","children":[]},{"level":3,"title":"QGraphics 嵌入 Web","slug":"qgraphics-嵌入-web","link":"#qgraphics-嵌入-web","children":[]},{"level":3,"title":"QML 嵌入 Web","slug":"qml-嵌入-web","link":"#qml-嵌入-web","children":[]},{"level":3,"title":"Web 中嵌入 ……（应该做不到吧，也没什么必要）","slug":"web-中嵌入-应该做不到吧-也没什么必要","link":"#web-中嵌入-应该做不到吧-也没什么必要","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":4.17,"words":1251},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Platform/Multi/QT（Cpp）/02. QtGUI类/00. 数种UI流/02. 混合 - 数种UI流.md","autoDesc":true}');export{W as comp,y as data};

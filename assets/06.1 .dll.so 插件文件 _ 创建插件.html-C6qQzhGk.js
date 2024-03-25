import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as d,c as r,b as n,e,d as l,a as s}from"./app-CMEFroyS.js";const u={},c=s('<h1 id="qt" tabindex="-1"><a class="header-anchor" href="#qt"><span>Qt</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="dll-so-插件文件-创建插件" tabindex="-1"><a class="header-anchor" href="#dll-so-插件文件-创建插件"><span>.dll.so 插件文件 &amp; 创建插件</span></a></h1><p>注：插件的笔记之前因为系统崩溃而坏掉了（5k多字啊，大大的惨），所以我不得不重新写了一遍，所以内容可能会有点缺失</p><p>可另参考另一篇笔记：<strong>Dev &gt; Tools &gt; 辅助文件 &gt; 动态库和静态库</strong></p><p>参考</p>',6),o={href:"https://doc.qt.io/qt-5/plugins-howto.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://blog.51cto.com/u_9291927/2107320#h11",target:"_blank",rel:"noopener noreferrer"},m=n("li",null,[e("https://blog.csdn.net/Mr_robot_strange/article/details/108469284，"),n("strong",null,"自定义到设计师界面")],-1),p=s(`<h2 id="各种插件" tabindex="-1"><a class="header-anchor" href="#各种插件"><span>各种插件</span></a></h2><h3 id="template的lib和插件" tabindex="-1"><a class="header-anchor" href="#template的lib和插件"><span>TEMPLATE的LIB和插件</span></a></h3><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">TEMPLATE</span> <span class="token punctuation">=</span> <span class="token value attr-value">LIB</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>包括lib、dll</p><p>其中插件是特殊的LIB模板</p><p>共同点和区别</p><table><thead><tr><th>C/C++文件</th><th>LIB模板</th><th>插件</th></tr></thead><tbody><tr><td></td><td></td><td>本质上也是LIB模板</td></tr><tr><td>与要使用的项目一同编译</td><td>不一同编译，生成dll和lib文件<br>补充：dll和lib区别在与何时链接</td><td>不一同编译，生成dll和lib文件<br>补充：dll和lib区别在与何时链接</td></tr><tr><td>同项目通过头文件使用</td><td>其他项目通过头文件使用</td><td>其他项目通过接口类的头文件使用</td></tr></tbody></table><h3 id="sharedplugin-qtplugin" tabindex="-1"><a class="header-anchor" href="#sharedplugin-qtplugin"><span>SharedPlugin &amp; QtPlugin</span></a></h3><blockquote><h4 id="分类" tabindex="-1"><a class="header-anchor" href="#分类"><span>分类</span></a></h4></blockquote><p>Qt支持两种插件方式：高级 API 和低级 API。</p><p>高级 API 指的的为Qt软件本身定制插件；</p><p>低级 API 指的是为自己写的软件定制插件。</p><p>这篇文章主要讲的是如何编写使用一个低级 API，文章属于入门级的，只是简单使用</p><blockquote><h4 id="区别" tabindex="-1"><a class="header-anchor" href="#区别"><span>区别</span></a></h4></blockquote><ul><li>SharedPlugin <ul><li>库 <ul><li>QtPlugin（定义接口集），QPluginLoader（加载插件）</li></ul></li><li>.pro <ul><li>指定DESTDIR，使情况INCLUDEPATH</li></ul></li><li>接口文件 <ul><li><code>#include &lt;QtPlugin&gt;</code></li><li>需要自定义接口</li></ul></li><li>.h <ul><li><code>#include 接口文件</code>并继承</li><li>声明宏：<code>Q_OBJECT</code>、<code>Q_PLUGIN_METADATA(IID 插件的标识符)</code>、<code>Q_INTERFACES(插件名)</code></li><li>需要实现插件接口</li><li>无<code>keys()</code>和<code>creator()</code></li></ul></li><li>使用插件 <ul><li>手动查找目录加载插件</li></ul></li></ul></li><li>QtPlugin <ul><li>库 <ul><li>QLibrary</li></ul></li><li>.pro <ul><li>指定DESTDIR，有<code>CONFIG += plugin</code></li></ul></li><li>接口文件 <ul><li>不需要自己定义</li></ul></li><li>.h <ul><li><code>#include 接口文件</code>并继承</li><li>声明宏：<code>Q_OBJECT</code>、<code>Q_PLUGIN_METADATA(IID 插件的标识符)</code>、<code>Q_INTERFACES(插件名)</code></li><li>需要实现插件接口</li><li>有<code>keys()</code>和<code>creator()</code></li></ul></li><li>使用插件 <ul><li>配置QApplication一下即可，甚至可以不改源代码直接用命令行实现</li></ul></li></ul></li><li>Qt4DesignerCustomWidget <ul><li>略</li></ul></li></ul><h3 id="qt-plugin-dll" tabindex="-1"><a class="header-anchor" href="#qt-plugin-dll"><span>Qt_Plugin &amp; DLL</span></a></h3>`,16),b={href:"https://bbs.csdn.net/topics/390843246?page=1",target:"_blank",rel:"noopener noreferrer"},g=s('<p>Qt 插件本身是动态库，除此之外，它定义了一组专用的接口，从动态库中导出，供 Qt 的插件管理体系发现和调用。 <strong>（即Qt插件在动态库的基础上多了一组专用接口）</strong></p><p>当你选择 Qt 插件项目模板时， QtCreator 会自动为你插入专用接口相关的模板代码。</p><p>假如你从一个白板做起，实现一个动态库，要想客户方调用，还是需要导出 N 多的函数。</p><p>而 Qt 这种，只是它约定了你需要导出什么函数、什么类、怎样查询你导出的接口，它定义了一套规范而已。</p><h3 id="关于库文件后缀" tabindex="-1"><a class="header-anchor" href="#关于库文件后缀"><span>关于库文件后缀</span></a></h3><p>Linux/Unix 系统里静态库扩展名一般是 .a，动态库扩展名一般是 .so 。Windows 系统里 VC 编译器用的静态库扩展名一般是 .lib，动态库扩展名一般是 .dll 。</p><p>MinGW 比较特殊，是将 GNU 工具集和链接库从 Linux/Unix 系统移植到 Windows 里， 有意思的情况就出现了，MinGW 使用的静态库扩展名为 .a ，而其动态库扩展名则为 .dll， .a 仅在生成目标程序过程中使用，.dll 则是在目标程序运行时使用。</p><h3 id="官网提供的插件example" tabindex="-1"><a class="header-anchor" href="#官网提供的插件example"><span>官网提供的插件Example</span></a></h3><p>官网有很多关于插件的Example</p><p>Example中搜索Plugin后的结果</p>',10),h=n("thead",null,[n("tr",null,[n("th",null,"Name"),n("th",null,"Translate"),n("th",null,"Tag"),n("th",null,"Contain")])],-1),Q=n("tr",null,[n("td",null,"【Desginer】"),n("td"),n("td"),n("td")],-1),_={href:"https://doc.qt.io/qt-6/qtdesigner-customwidgetplugin-example.html",target:"_blank",rel:"noopener noreferrer"},k=n("br",null,null,-1),q={href:"https://doc.qt.io/qt-6/qtwidgets-widgets-analogclock-example.html",target:"_blank",rel:"noopener noreferrer"},C=n("td",null,[e("自定义控件"),n("br"),e("模拟时钟")],-1),P=n("td",null,[e("custom designer plugin widget"),n("br"),e("analog android clock ios widgets")],-1),E=n("td",null,[e("Designer Plugin"),n("br"),e("Non-Plugin Version")],-1),T={href:"https://doc.qt.io/qt-6/qtdesigner-worldtimeclockplugin-example.html",target:"_blank",rel:"noopener noreferrer"},f=n("br",null,null,-1),x=n("td",null,"世界时钟",-1),y=n("td",null,[e("clock designer plugin time world"),n("br"),e("builder clock designer time world")],-1),I=n("td",null,[e("Designer Plugin"),n("br"),e("Normal")],-1),S=n("tr",null,[n("td",null,"Container Extension Example"),n("td",null,"容器扩展"),n("td",null,"container designer extension"),n("td")],-1),w=n("tr",null,[n("td",null,"Task Muenu Extension Example"),n("td",null,"任务菜单"),n("td",null,"designer extension menu task"),n("td")],-1),L=n("tr",null,[n("td",null,"【Widget】"),n("td"),n("td"),n("td")],-1),A={href:"https://doc.qt.io/qt-6/qtwidgets-tools-echoplugin-example.html",target:"_blank",rel:"noopener noreferrer"},D=n("td",null,"回声插件",-1),W=n("td",null,"echo plugin widget",-1),B=n("td",null,"SharedPlugin",-1),N={href:"https://doc.qt.io/qt-6/qtwidgets-tools-styleplugin-example.html",target:"_blank",rel:"noopener noreferrer"},M=n("td",null,"风格插件",-1),O=n("td",null,"plugin style widgets",-1),G=n("td",null,"QtPlugin - QStylePlugin",-1),R=n("tr",null,[n("td",null,"Plugin & PaintBasic Tools Example"),n("td",null,"绘画"),n("td",null,"basic paint plug tools widgets"),n("td")],-1),F=n("tr",null,[n("td",null,"Plugin & Paint Example"),n("td",null,"绘画"),n("td",null,"paint plug widget"),n("td")],-1),U=n("tr",null,[n("td",null,"Plugin & Paint Extra Filters Example"),n("td",null,"绘画"),n("td",null,"extra filters paint plug widgets"),n("td")],-1),z=n("tr",null,[n("td",null,"【QML/Quick】"),n("td"),n("td"),n("td")],-1),H=n("tr",null,[n("td",null,"QML Plugin Example"),n("td",null,"QML插件"),n("td",null,"plugin qml"),n("td")],-1),j=n("tr",null,[n("td",null,"Qt Quick Controls - Flat Style"),n("td",null,"扁平化插件"),n("td",null,"android controls flat quick style"),n("td")],-1),$={href:"https://doc.qt.io/qt-6/plugins-howto.html",target:"_blank",rel:"noopener noreferrer"},V={href:"https://doc.qt.io/qt-6/qtplugin.html",target:"_blank",rel:"noopener noreferrer"},X={href:"http://c.biancheng.net/view/3871.html",target:"_blank",rel:"noopener noreferrer"},J=n("h2",{id:"【sharedplugin】qtplugin-qpluginloader",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#【sharedplugin】qtplugin-qpluginloader"},[n("span",null,"【SharedPlugin】QtPlugin + QPluginLoader")])],-1),K=n("p",null,"参考",-1),Y={href:"https://blog.csdn.net/u011370855/article/details/82924752",target:"_blank",rel:"noopener noreferrer"},Z=s(`<h3 id="原理简概" tabindex="-1"><a class="header-anchor" href="#原理简概"><span>原理简概</span></a></h3><p>原理</p><ul><li>原理：一个应用程序插件就是实现了一个或多个<code>接口</code>（<em>interface</em>）</li><li>接口：由专有的纯虚函数组成的类</li><li>应用程序和插件之间的通信：通过接口的<code>虚表</code>（<em>virtual table</em>）来完成的</li></ul><h3 id="实战-项目模板" tabindex="-1"><a class="header-anchor" href="#实战-项目模板"><span>实战 - 项目模板</span></a></h3><h4 id="创建项目模板" tabindex="-1"><a class="header-anchor" href="#创建项目模板"><span>创建项目模板</span></a></h4><p>库创建流程</p><ul><li>新建一个C库。文件 &gt; 新建项目 &gt; Library &gt; C库</li><li>【配置选择】Type 类型 <ul><li>Shared Library，动态库（默认项）</li><li>Statically Linked Library，静态链接库</li><li>Qt Plugin，Qt插件</li></ul></li><li>【配置选择】Qt module 模块 <ul><li>这个无关紧要，后期可以在.pro文件里改<code>Qt += XXX</code></li><li>当前面的Type选择了Shared Library / Statically Linked Library <ul><li>None</li><li>Core（默认项）</li><li>Gui</li><li>Widgets</li></ul></li><li>当前面的Type选择了Qt Plugin。这里选项更具体的解释见后面的表格 <ul><li>QAccessiblePlugin</li><li>QGenericPlugin，默认项</li><li>QIconEnginePlugin</li><li>QImageIOPlugin</li><li>QScriptExtensionPlugin</li><li>QSqlDriverPlugin</li><li>QStylePlugin</li></ul></li></ul></li><li>【配置选择】Qt插件名称 <ul><li>当前面的Type选择了Shared Library / Statically Linked Library <ul><li>根据库名自动起名</li></ul></li><li>当前面的Type选择了Qt Plugin <ul><li>根据选择的Qt module自动起名</li></ul></li></ul></li></ul><h4 id="项目模板结构" tabindex="-1"><a class="header-anchor" href="#项目模板结构"><span>项目模板结构</span></a></h4><p>略</p><h4 id="使用流程" tabindex="-1"><a class="header-anchor" href="#使用流程"><span>使用流程</span></a></h4><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
QDir_插件文件夹绝对路径 <span class="token arrow operator">--&gt;</span> QDir_文件绝对路径
QDir_插件文件夹绝对路径 <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">遍历</span><span class="token arrow operator">.-&gt;</span></span> QString_文件名
QString_文件名 <span class="token arrow operator">--&gt;</span> QDir_文件绝对路径
<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">pluginLoader</span><span class="token arrow operator">--&gt;</span></span>QPluginLoader_插件加载器
<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">instance</span><span class="token arrow operator">--&gt;</span></span>QObject*_通用插件
<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">qobject_cast参MainInterface*</span><span class="token arrow operator">--&gt;</span></span>A<span class="token text string">(MainInterface*_满足接口集接口的插件)</span>

QPluginLoader_插件加载器 <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">unload</span><span class="token arrow operator">.-&gt;</span></span>使用完还可以卸载加载器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实战-网络demo" tabindex="-1"><a class="header-anchor" href="#实战-网络demo"><span>实战 - 网络demo</span></a></h3><h4 id="_1-准备接口集" tabindex="-1"><a class="header-anchor" href="#_1-准备接口集"><span>(1) 准备接口集</span></a></h4><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#ifndef MAININTERFACE_H
#define MAININTERFACE_H

#include &lt;qstring.h&gt;
#include &lt;QtPlugin&gt;                         // Qt插件类。用于使用后面的Q_DECLARE_INTERFACE()

/** 接口定义，接口集
 *
 *  构成：由纯虚函数和空析构函数组成
 *  作用：插件工程通过接口集实现接口，主工程通过接口集调用插件
 */
class MainInterface
{
public:
    virtual ~MainInterface(){}
    virtual QString name() = 0;
    virtual QString information() = 0;
    virtual QWidget *centerWidget() = 0;
};

/** 声明插件宏。依赖：#include &lt;QtPlugin&gt;
 *  这个宏将给定的标识符(字符串字面值)与称为ClassName的接口类相关联。标识符必须唯一
 *  这里定义标识符为常量是因为插件还会用一次Q_INTERFACES(MainInterface)，修改时方便
 */
#define MainInterface_iid &quot;com.Interface.MainInterface&quot;
Q_DECLARE_INTERFACE(MainInterface, MainInterface_iid)

#endif // MAININTERFACE_H

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-新建一个插件" tabindex="-1"><a class="header-anchor" href="#_2-新建一个插件"><span>(2) 新建一个插件</span></a></h4><p>创建插件时Type 类型选择Shared Library</p><h4 id="_3-编写插件代码" tabindex="-1"><a class="header-anchor" href="#_3-编写插件代码"><span>(3) 编写插件代码</span></a></h4><p>.h</p><p>为了方便这里直接在头文件而非cpp文件实现接口功能了</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#ifndef GENERICPLUGIN_H
#define GENERICPLUGIN_H

#include &lt;QGenericPlugin&gt;
#include &lt;QPushButton&gt;                                  // 需要在【.pro】文件加载插件Qt+=widget，不然会说找不到QPushButton
#include &quot;maininterface.h&quot;                              // 这里需要在【.pro】文件INCLUDEPATH +=../MainWindow，不然会说找不到头文件。另一种方案就是复制多个接口集文件

class GenericPlugin : public QGenericPlugin
        ,public MainInterface                           // MainWindow中定义的接口集（抽象基类）
{
    /** 元对象系统宏*/
    Q_OBJECT
    /** 插件元数据宏
     *  这个宏被用来声明元数据，该元数据是实例化这个对象的插件的一部分。
     * 宏需要声明通过对象实现的接口的IID，并引用包含插件元数据的文件。
     * 在Qt插件的源代码中应该只出现一次这个宏。*/
    //Q_PLUGIN_METADATA(IID QGenericPluginFactoryInterface_iid FILE &quot;RichTextEditor.json&quot;)// 自动生成的，必须写
    Q_PLUGIN_METADATA(IID MainInterface_iid)
    /** 插件宏
     *  这个宏告诉Qt这个类实现了哪些接口。这是在实现插件时使用的。*/
    Q_INTERFACES(MainInterface)                         // 声明插件的宏，必须写

public:
    explicit GenericPlugin(QObject *parent = nullptr){}
    ~GenericPlugin(){qDebug()&lt;&lt;&quot;~GenericPlugin&quot;;}

    /** 下面三个都是重写纯虚函数
     * 接口的重写都是公有方法
     * 其中override是C++11的语法，表示这些都是纯虚函数的重写
     */
    virtual QString name() override {return &quot;one&quot;;}
    virtual QString information() override {return &quot;one_info&quot;;}
    virtual QPushButton *centerWidget() override {return new QPushButton(&quot;One&quot;);}

private:
    QObject *create(const QString &amp;name, const QString &amp;spec) override;
};

#endif // GENERICPLUGIN_H

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-插件的使用" tabindex="-1"><a class="header-anchor" href="#_4-插件的使用"><span>(4) 插件的使用</span></a></h4><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>/** 构造函数初始化调用，加载插件并返回插件个数
 * @brief MainWindow::loadPlugins 加载插件、插件放在plugins文件夹下
 * @return 返回插件的个数
 */
int MainWindow::loadPlugins()
{
    int count  = 0;
    QDir qdir = QDir();
    QDir pluginsDir = QDir(qApp-&gt;applicationDirPath());                 // 获取应用路径（指pro中DESTDIR的参）并构造QDir
    if(!pluginsDir.cd(&quot;plugins&quot;)) return -1;                            // 查看是否存在plugins目录
    foreach (QString fileName, pluginsDir.entryList(QDir::Files))       // 循环加载plugins目录中的插件，entryList返回QStingList
    {
        /* 里面返回目录中文件的【绝对路径名】，然后加载插件（加载插件需要绝对路径）*/
        QPluginLoader pluginLoader(pluginsDir.absoluteFilePath(fileName));
        /* 这个QObject就是插件，将插件实例化，这个时候会调用插件类的构造函数*/
        QObject *plugin = pluginLoader.instance();
        /* 注意的是该目录下不仅仅有dll插件还有同插件生成的其他文件，只有插件才会通过（但dll不一定通过）*/
        if(plugin)
        {
            MainInterface* centerInterface = qobject_cast&lt;MainInterface*&gt;(plugin);  // 把插件实例类型转换为接口一样的东西
            /* 转换不成功则返回0，可据此判断是否是符合MainInterface接口的插件 */
            if(centerInterface)
            {
                count++;
                QPushButton *btn1 = new QPushButton(centerInterface-&gt;name(),this);  // 根据接口中的name以text来new
                btn1-&gt;setGeometry((count-1)*80,0,80,35);
                connect(btn1,&amp;QAbstractButton::clicked,this,[=](){
                    auto centerWidget = centerInterface-&gt;centerWidget();            // 返回一个QOPushButton
                    setCentralWidget(centerWidget);
                });
                // pluginLoader.unload();	// 使用完了还可以卸载插件
            }
        }
    }
    return count;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="补充-插件通信" tabindex="-1"><a class="header-anchor" href="#补充-插件通信"><span>补充 - 插件通信</span></a></h3><p>参考：https://blog.csdn.net/kenfan1647/article/details/107493294</p><ul><li>首先，改一下接口，增加一个插件间通信的结构体，增加插件发送消息和接收消息的纯虚函数供插件实现</li><li>修改插件01如下，实现插件接口的信息接收函数，将插件接口的发送函数实现为信号</li><li>然后是插件02，几乎一样的代码</li><li>插件管理器做如下修改（PluginLoader的PluginManager）</li></ul><p>大致原理</p><ul><li>(1) 插件A的sendMsgToManager信号触发管理器的槽（相当于监听信息发送请求）</li><li>(2) 管理器的槽调用插件B的recMsgFromManager函数</li></ul><h2 id="【qtplugin】qlibrary" tabindex="-1"><a class="header-anchor" href="#【qtplugin】qlibrary"><span>【QtPlugin】QLibrary</span></a></h2><p>参考</p>`,29),nn={href:"https://doc.qt.io/qt-5/plugins-howto.html",target:"_blank",rel:"noopener noreferrer"},en=n("li",null,"《C++ GUI Qt4编程》（第二版）p366",-1),ln={href:"https://itzhai.cn/xuexijiaocheng/1115.html",target:"_blank",rel:"noopener noreferrer"},sn=n("h3",{id:"原理简概-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#原理简概-1"},[n("span",null,"原理简概")])],-1),tn=n("li",null,[n("h4",{id:"简概",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简概"},[n("span",null,"简概")])]),n("ul",null,[n("li",null,[n("code",null,"动态库"),e("（也称为"),n("code",null,"共享库"),e("或者"),n("code",null,"动态链接库"),e("），是存储在磁盘上一个单独文件中的独立模块，"),n("strong",null,"可以被多个应用程序访问")])])],-1),an=n("h4",{id:"两种类型",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#两种类型"},[n("span",null,"两种类型")])],-1),dn=s(`<li><p>程序通常会在连接的时候指明它们所需动态库</p><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>LIBS		+= -ldb_cxx
INCLUDEPATH	+= /usr/local/BerkeleyDB.4.2/include
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),rn=n("p",null,"另一种方式是在需要的时候动态加载这个库（插件）",-1),un=n("p",null,[e("Qt提供的"),n("code",null,"QLibrary"),e("类可以使用一种与平台无关的方式来实现这一点（即给定库名字后会在该平台的标准位置搜索这个库）。例如：")],-1),cn={href:"http://xn--Linuxxxx-775t.so",target:"_blank",rel:"noopener noreferrer"},on=s('<li><h4 id="应用" tabindex="-1"><a class="header-anchor" href="#应用"><span>应用</span></a></h4><ul><li>利用插件可以对现存的GUI应用程序进行扩展。插件就是一个动态库</li></ul></li><li><h4 id="举例" tabindex="-1"><a class="header-anchor" href="#举例"><span>举例</span></a></h4><ul><li>可以使用很多插件类型来扩展Qt，常用的有：数据库驱动程序、图像格式、风格和文本编码解码器</li></ul></li><li><h4 id="实现" tabindex="-1"><a class="header-anchor" href="#实现"><span>实现</span></a></h4><ul><li>至少需要两个类</li><li>插件<code>封装器类</code>：实现了插件的通用API函数</li><li>一个或多个<code>处理器类</code>：实现了一种用于特殊类型插件的API</li><li>通过<code>封装器类</code>才能访问这些<code>处理器类</code></li></ul></li><li><h4 id="开发示例" tabindex="-1"><a class="header-anchor" href="#开发示例"><span>开发示例</span></a></h4><ul><li>书中实现两个插件</li><li>QStyle，用于Bronze风格中</li><li>读取Windows单色光标文件的插件</li></ul></li><li><h4 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h4><ul><li>会自动查找各个插件，如果找到一个风格插件，它将会在它的Form-&gt;Preview子菜单中提供一个浏览该风格的子目录</li><li>Qt应用程序在可执行文件所在目录的plugins目录中查找插件</li><li>如果希望把Qt插件配置到与此不同的目录中，那么就需要使用<code>QCoreApplication::addLibraryPath()</code>来扩展插件的搜索路径</li><li>或者在启动程序之前设置<code>QT_PLUGIN_PATH</code>环境变量</li></ul></li>',5),vn=s(`<h3 id="实战-项目模板-1" tabindex="-1"><a class="header-anchor" href="#实战-项目模板-1"><span>实战 - 项目模板</span></a></h3><h4 id="项目模板创建" tabindex="-1"><a class="header-anchor" href="#项目模板创建"><span>项目模板创建</span></a></h4><p>库创建流程</p><ul><li>新建一个C库。文件 &gt; 新建项目 &gt; Library &gt; C库</li><li>【配置选择】Type 类型 <ul><li>Shared Library，动态库（默认项）</li><li>Statically Linked Library，静态链接库</li><li>Qt Plugin，Qt插件</li></ul></li><li>【配置选择】Qt module 模块 <ul><li>这个无关紧要，后期可以在.pro文件里改<code>Qt += XXX</code></li><li>当前面的Type选择了Shared Library / Statically Linked Library <ul><li>None</li><li>Core（默认项）</li><li>Gui</li><li>Widgets</li></ul></li><li>当前面的Type选择了Qt Plugin。这里选项更具体的解释见后面的表格 <ul><li>QAccessiblePlugin</li><li>QGenericPlugin，默认项</li><li>QIconEnginePlugin</li><li>QImageIOPlugin</li><li>QScriptExtensionPlugin</li><li>QSqlDriverPlugin</li><li>QStylePlugin</li></ul></li></ul></li><li>【配置选择】Qt插件名称 <ul><li>当前面的Type选择了Shared Library / Statically Linked Library <ul><li>根据库名自动起名</li></ul></li><li>当前面的Type选择了Qt Plugin <ul><li>根据选择的Qt module自动起名</li></ul></li></ul></li></ul><h4 id="qt的插件类和处理器类补充" tabindex="-1"><a class="header-anchor" href="#qt的插件类和处理器类补充"><span>Qt的插件类和处理器类补充</span></a></h4><p>*仅在Linux下Qt/Embedded中可用</p><table><thead><tr><th>含义</th><th>插件类</th><th>处理器基类（即create函数返回值）</th></tr></thead><tbody><tr><td>默认插件</td><td><strong>QGenericPlugin</strong></td><td>QObject *</td></tr><tr><td></td><td>QAccessibleBridgePlugin</td><td><s>QAccessibleBridge</s></td></tr><tr><td></td><td><strong>QAccessiblePlugin</strong></td><td>QAccessibleInterface *</td></tr><tr><td></td><td>QDecorationPlugin*</td><td><s>QDecoration *</s></td></tr><tr><td>字体引擎插件</td><td>QFontEnginePlugin</td><td><s>QAbstractFontEngine</s></td></tr><tr><td>图标引擎插件</td><td><strong>QIconEnginePlugin</strong></td><td>QIconEngine *</td></tr><tr><td>图像IO插件</td><td><strong>QImageIOPlugin</strong></td><td>QImageIOHandler *</td></tr><tr><td>输入内容插件</td><td>QInputContextPlugin</td><td><s>QInputContext</s></td></tr><tr><td>Kdb引擎插件</td><td>QKbdDriverPlugin*</td><td><s>QWSKeyboardHandler *</s></td></tr><tr><td>鼠标驱动插件</td><td>QMouseDriverPlugin*</td><td><s>QWSMouseHandler *</s></td></tr><tr><td>图片格式插件</td><td>QPictureFormatPlugin</td><td>N/A（无create函数）</td></tr><tr><td>屏幕驱动插件</td><td>QScreenDriverPlugin*</td><td><s>QSceen *</s></td></tr><tr><td>脚本扩展插件</td><td><strong>QScriptExtensionPlugin</strong></td><td>N/A（无create函数）</td></tr><tr><td>SQL驱动插件</td><td><strong>QSqlDriverPlugin</strong></td><td>QSqlDriver *</td></tr><tr><td>风格化插件</td><td><strong>QStylePlugin</strong></td><td>QStyle *</td></tr><tr><td>文本编码插件</td><td>QTextCondecPlugin</td><td><s>QTextCodec</s></td></tr></tbody></table><h4 id="项目模板结构-1" tabindex="-1"><a class="header-anchor" href="#项目模板结构-1"><span>项目模板结构</span></a></h4><p>接口集其实就是那个create()函数</p><p>详略，翻书</p><h4 id="使用流程-1" tabindex="-1"><a class="header-anchor" href="#使用流程-1"><span>使用流程</span></a></h4><p>插件的使用</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>QApplication::setStyle(&quot;Bronze&quot;);


// 或者命令行
./spreadsheet -style bronze
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实战-书例-qstyle插件" tabindex="-1"><a class="header-anchor" href="#实战-书例-qstyle插件"><span>实战 - 书例 QStyle插件</span></a></h3><h4 id="书例的不同-旧版本的不同" tabindex="-1"><a class="header-anchor" href="#书例的不同-旧版本的不同"><span>书例的不同（旧版本的不同）</span></a></h4><p>书例的吐槽：很多地方和实际生成的空demo不同</p><p>比如实际demo没有keys()函数，而用来一个存储keys的json文件</p><p>这书上大多数的例程都无法正常运行，而且有时用了非本章内容的函数，让人迷惑得不得了</p><h4 id="实战" tabindex="-1"><a class="header-anchor" href="#实战"><span>实战</span></a></h4><p>生成三个文件</p><ul><li>.pro，但与之前的有所不同</li><li>.h， 提供<code>QStylePlugin</code>子类，用作该风格的封装器</li><li>.cpp，提供<code>QStylePlugin</code>子类，用作该风格的封装器</li></ul><blockquote><h5 id="h" tabindex="-1"><a class="header-anchor" href="#h"><span>.h</span></a></h5></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class BronzeStylePlugin : public QStylePlugin
{
public:
    /* 所有的插件至少要提供一个keys()函数和一个create()函数 */
    QStringList keys() const;			// keys()函数返回一个该插件可以创建的对象列表
    QStyle *create(const QString &amp;key);	// create()函数返回一个给定键的对象，该键必须与由keys()函数返回的列表中的一个相同
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h5 id="cpp" tabindex="-1"><a class="header-anchor" href="#cpp"><span>.cpp</span></a></h5></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>QStringList BronzeStylePlugin::keys() const
{
    return QStringList() &lt;&lt; &quot;Bronze&quot;;	// 字母键不分大小写
}

QStyle *BronzeStylePlugin::create(const QString &amp;key)
{
    if(key.toLower()==&quot;bronze&quot;)			// 字母键不分大小写
        return new BornzeStyle;			// 如果该键是“Bronze”，就创建一个BronzeStyle对象并返回
    return 0;
}

/* 宏，放在文件的最后
 * 第一个参数：目标库名字去除任意扩展符
 * 第二个参数：插件的类名
**/
Q_EXPORT_PLUGIN2(bronzestyleplugin, BronzeStylePlugin)	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h5 id="pro" tabindex="-1"><a class="header-anchor" href="#pro"><span>.pro</span></a></h5></blockquote><p>插件的.pro文件与应用程序的.pro文件不同</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>TEMPLATE	= lib							# 应用程序时为\`app\`，而这里是\`lib\`
CONFIG		+=plugin						# 表示这个库不是\`通用库\`，而是一个\`插件库\`
HEADERS		= ../bronze/bronzestyle.h\\
			  bronzestyleplugin.h
SOURCES		= ../bronze/bronzestyle.cpp\\
			  bronzestyleplugin.cpp
RESOURCES	= ../bronze/bronze.qrc
DESTDIR		= $$[QT_INSTALL_PLUGINS]/styles	# 这个插件应当存放的目录，这里表示软件安装路径下的plugins目录的styles子目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h5 id="注意项" tabindex="-1"><a class="header-anchor" href="#注意项"><span>注意项</span></a></h5></blockquote><p>注意：使用release模式和debug模式为Qt构建的插件是不同的，一般需要在.pro文件中指明要使用的是哪个文件</p><p>如<code>CONFIG += release</code></p><blockquote><h5 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h5></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>QApplication::setStyle(&quot;Bronze&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或<code>./spreadsheet -style bronze</code></p><h3 id="实战-书例-读取windows单色光标文件" tabindex="-1"><a class="header-anchor" href="#实战-书例-读取windows单色光标文件"><span>实战 - 书例 读取Windows单色光标文件</span></a></h3><p>略</p><h2 id="【qt4-designer-custom-widget】" tabindex="-1"><a class="header-anchor" href="#【qt4-designer-custom-widget】"><span>【Qt4 Designer Custom Widget】</span></a></h2><p>参考：</p>`,38),mn={href:"https://blog.csdn.net/Mr_robot_strange/article/details/108469284",target:"_blank",rel:"noopener noreferrer"},pn={href:"https://blog.csdn.net/lv75543255/article/details/8797574",target:"_blank",rel:"noopener noreferrer"},bn=s(`<h3 id="原理简概-2" tabindex="-1"><a class="header-anchor" href="#原理简概-2"><span>原理简概</span></a></h3><p>SharedPlugin &amp; DesignerPlugin： 从实现上来讲，DesignerPlugin是SharedPlugin的高级封装，提供了更好的封装和更多的功能，简化了用户操作</p><p>与低级api相比，Qt4 Designer Custom Widget：</p><ul><li><p>不需要自己提供接口，插件继承Qt提供的设计师自定义控件接口：QDesignerCustomWidgetInterface</p><p><code>class CustomWidgetTestPlugin : public QObject, public QDesignerCustomWidgetInterface{}</code></p></li><li><p>不需要使用 QPluginLoader 动态加载插件，也可以直接使用。Qt可以帮你自动加载（构建时确定文件路径，比遍历文件夹更快）</p><p>只需要<code>LIBS +=</code>添加lib检索路径，和在根目录添加dll文件</p></li></ul><h3 id="实战-项目模板-2" tabindex="-1"><a class="header-anchor" href="#实战-项目模板-2"><span>实战 - 项目模板</span></a></h3><h4 id="创建项目模板-1" tabindex="-1"><a class="header-anchor" href="#创建项目模板-1"><span>创建项目模板</span></a></h4><ul><li>文件 &gt; 新建文件或项目 &gt; 其他项目 &gt; Qt4设计师自定义控件 &gt; <ul><li>Lcation和Kits：略</li><li>Custom Widgets：新建一个控件类。详见文件举例： <ul><li>控件项目文件：customwidgettest.pri</li><li>控件头文件：customwidgettest.h</li><li>控件源文件：customwidgettest.cpp</li><li>控件的基类：QWidget</li><li>插件类名：CustomWidgetTestPlugin</li><li>插件头文件：customwidgettestplugin.h</li><li>插件源文件：customwidgettestplugin.cpp</li></ul></li><li>Plugin Details：默认</li></ul></li></ul><h4 id="项目模板结构-2" tabindex="-1"><a class="header-anchor" href="#项目模板结构-2"><span>项目模板结构</span></a></h4><p>Qt4DesignerCustomWidget</p><ul><li>Qt4DesignerCustomWidget.pro</li><li>customwidgettest.pri，控件类 <ul><li>customwidgettest.h，控件类</li><li>customwidgettest.cpp，控件类</li></ul></li><li>customwidgettestplugin.h，控件插件类</li><li>customwidgettestplugin.cpp，控件插件类</li><li>icons.qrc</li></ul><p>pro</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">CONFIG</span> <span class="token value attr-value">     += plugin debug_and_release		# 编译一个插件，同时具有调试库和发布库</span>
<span class="token key attr-name">TARGET</span>      <span class="token punctuation">=</span> <span class="token value attr-value">$$qtLibraryTarget(customwidgettestplugin)</span>
<span class="token key attr-name">TEMPLATE</span>    <span class="token punctuation">=</span> <span class="token value attr-value">lib							# lib模板</span>

<span class="token key attr-name">HEADERS</span>     <span class="token punctuation">=</span> <span class="token value attr-value">customwidgettestplugin.h</span>
<span class="token key attr-name">SOURCES</span>     <span class="token punctuation">=</span> <span class="token value attr-value">customwidgettestplugin.cpp</span>
<span class="token key attr-name">RESOURCES</span>   <span class="token punctuation">=</span> <span class="token value attr-value">icons.qrc</span>
<span class="token key attr-name">LIBS</span> <span class="token value attr-value">       += -L. 							# lib检索路径为当前文件夹</span>

<span class="token key attr-name">greaterThan(QT_MAJOR_VERSION,</span> <span class="token value attr-value">4) {</span>
<span class="token key attr-name">    QT</span> <span class="token value attr-value">+= designer</span>
<span class="token key attr-name">}</span> <span class="token value attr-value">else {</span>
<span class="token key attr-name">    CONFIG</span> <span class="token value attr-value">+= designer</span>
}

<span class="token comment"># 该两句联合使用</span>
<span class="token comment"># target.path定义描述了安装生成目标的位置</span>
<span class="token comment"># installs分配将生成目标添加到要安装的现有资源列表中</span>
<span class="token key attr-name">target.path</span> <span class="token punctuation">=</span> <span class="token value attr-value">$$[QT_INSTALL_PLUGINS]/designer</span>
<span class="token key attr-name">INSTALLS</span> <span class="token value attr-value">   += target</span>

include(customwidgettest.pri)				# pri

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>customwidgettest.h，控件类</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#ifndef CUSTOMWIDGETTEST_H
#define CUSTOMWIDGETTEST_Haw

#include &lt;QWidget&gt;

class CustomWidgetTest : public QWidget
{
    Q_OBJECT

public:
    CustomWidgetTest(QWidget *parent = 0);
};

#endif // CUSTOMWIDGETTEST_H

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>customwidgettest.cpp，控件类</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &quot;customwidgettest.h&quot;

CustomWidgetTest::CustomWidgetTest(QWidget *parent) :
    QWidget(parent)
{
// 可以在里面嵌套控件，如下
//    QLayout *lay = new QVBoxLayout(this);
//    QPushButton *btn = new QPushButton(&quot;customwidget&quot;,this);
//    QPushButton *btn2 = new QPushButton(&quot;customwidget2&quot;,this);
//    lay-&gt;addWidget(btn);
//    lay-&gt;addWidget(btn2);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>customwidgettestplugin.h，控件插件类</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#ifndef CUSTOMWIDGETTESTPLUGIN_H
#define CUSTOMWIDGETTESTPLUGIN_H

#include &lt;QDesignerCustomWidgetInterface&gt;

class CustomWidgetTestPlugin : public QObject, 
				public QDesignerCustomWidgetInterface	// 继承，实现接口
{
    Q_OBJECT											// 启用元对象系统
    Q_INTERFACES(QDesignerCustomWidgetInterface)		// 接口
#if QT_VERSION &gt;= 0x050000
    Q_PLUGIN_METADATA(IID &quot;org.qt-project.Qt.QDesignerCustomWidgetInterface&quot;)
#endif // QT_VERSION &gt;= 0x050000

public:
    CustomWidgetTestPlugin(QObject *parent = 0);		// 构造函数

    bool isContainer() const;							// 主要的纯虚接口实现
    bool isInitialized() const;
    QIcon icon() const;
    QString domXml() const;
    QString group() const;
    QString includeFile() const;
    QString name() const;
    QString toolTip() const;
    QString whatsThis() const;
    QWidget *createWidget(QWidget *parent);
    void initialize(QDesignerFormEditorInterface *core);

private:
    bool m_initialized;
};

#endif // CUSTOMWIDGETTESTPLUGIN_H

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>customwidgettestplugin.cpp，控件插件类</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &quot;customwidgettest.h&quot;
#include &quot;customwidgettestplugin.h&quot;

#include &lt;QtPlugin&gt;

CustomWidgetTestPlugin::CustomWidgetTestPlugin(QObject *parent)
    : QObject(parent)
{
    m_initialized = false;
}

void CustomWidgetTestPlugin::initialize(QDesignerFormEditorInterface * /* core */)
{														// 初始化插件
    if (m_initialized)
        return;

    // Add extension registrations, etc. here

    m_initialized = true;
}

bool CustomWidgetTestPlugin::isInitialized() const		// 是否已经初始化
{
    return m_initialized;
}

QWidget *CustomWidgetTestPlugin::createWidget(QWidget *parent)
{
    return new CustomWidgetTest(parent);				// 【主要接口】返回Widget控件
}

QString CustomWidgetTestPlugin::name() const			// 插件信息 - 控件名
{
    return QLatin1String(&quot;CustomWidgetTest&quot;);
}

QString CustomWidgetTestPlugin::group() const
{
    return QLatin1String(&quot;&quot;);
}

QIcon CustomWidgetTestPlugin::icon() const				// 插件信息 - 控件图标
{
    return QIcon();
}

QString CustomWidgetTestPlugin::toolTip() const
{
    return QLatin1String(&quot;&quot;);
}

QString CustomWidgetTestPlugin::whatsThis() const		// 插件信息 - 插件接介绍
{
    return QLatin1String(&quot;&quot;);
}

bool CustomWidgetTestPlugin::isContainer() const		// 插件信息 - 是否是容器
{
    return false;
}

QString CustomWidgetTestPlugin::domXml() const			// 返回一个 UI 文件片段，
{														// Qt Designer 的小部件工厂使用它来创建自定义小部件及其适用的属性
    return QLatin1String(&quot;&lt;widget class=\\&quot;CustomWidgetTest\\&quot; name=\\&quot;customWidgetTest\\&quot;&gt;\\n&lt;/widget&gt;\\n&quot;);
//    例如：
//    return &quot;&lt;ui language=\\&quot;c++\\&quot;&gt;\\n&quot;
//           &quot; &lt;widget class=\\&quot;WorldTimeClock\\&quot; name=\\&quot;worldTimeClock\\&quot;&gt;\\n&quot;
//           &quot;  &lt;property name=\\&quot;geometry\\&quot;&gt;\\n&quot;
//           &quot;   &lt;rect&gt;\\n&quot;
//           &quot;    &lt;x&gt;0&lt;/x&gt;\\n&quot;
//           &quot;    &lt;y&gt;0&lt;/y&gt;\\n&quot;
//           &quot;    &lt;width&gt;100&lt;/width&gt;\\n&quot;
//           &quot;    &lt;height&gt;100&lt;/height&gt;\\n&quot;
//           &quot;   &lt;/rect&gt;\\n&quot;
//           &quot;  &lt;/property&gt;\\n&quot;
//           &quot; &lt;/widget&gt;\\n&quot;
//           &quot;&lt;/ui&gt;&quot;;
}

QString CustomWidgetTestPlugin::includeFile() const		//
{
    return QLatin1String(&quot;customwidgettest.h&quot;);
}
#if QT_VERSION &lt; 0x050000
Q_EXPORT_PLUGIN2(customwidgettestplugin, CustomWidgetTestPlugin)
#endif // QT_VERSION &lt; 0x050000

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用流程-2" tabindex="-1"><a class="header-anchor" href="#使用流程-2"><span>使用流程</span></a></h4><ul><li><p>创建项目</p><ul><li>如上</li></ul></li><li><p>项目完善</p><ul><li><p>完善自定义控件代码，<code>Q_PROPERTY</code>定义的属性之后会出现在Qt Designer属性栏中。例下</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>Q_OBJECT	// 在Q_OBJECT宏的下面写
QQ_PROPERTY(QColor Color_frame_outCircle READ getColor_frame_outCicle WRITE setColor_frame_outCircle)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>控件发布</p><ul><li>选择<code>Release</code>版本，先<code>qmake</code>，再<code>构建</code></li></ul></li><li><p>开始集成</p><ul><li>拷贝 <ul><li>Qt版本和kit版本都要与前面的构建路径相对应，MSVC需要拷贝.dll和.lib，MinGW需要拷贝.dll和.a</li><li>拷贝后无需重启QT即可使用</li><li>拷贝到Qt中的路径：<code>安装路径\\QT\\6.0.3\\msvc2019_64\\plugins\\designer</code></li></ul></li><li>可视化 <ul><li>QtCreator界面编辑器界面不显示，在QtDesigner中能显示</li><li>即需要右键ui文件 &gt; 用...打开 &gt; 选QtDesigner而不选界面编辑器，后者是QtDesigner集成在QtCreator中的建议版本</li></ul></li><li><s>include简化</s><ul><li><s>拷贝到Qt中的路径：<code>安装路径\\QT\\6.0.3\\msvc2019_64\\include\\DIY自定义文件夹</code></s></li></ul></li></ul></li><li><p>开始使用</p><ul><li>集成后使用：打开相应版本的Designer，在ui文件中直接拖拽自定义控件使用即可</li><li>非集成使用：则将工程复制到使用它的工程目录，include(.pri)，再一起构建</li></ul></li><li><p>报错</p><ul><li><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token string">&quot;QFormBuilder was unable to create a widget of the class &#39;CustomWidgetTest&#39;.&quot;</span>
<span class="token string">&quot;QFormBuilder was unable to create a widget of the class &#39;CustomWidgetTest&#39;.&quot;</span>
<span class="token string">&quot;Empty widget item in QHBoxLayout &#39;horizontalLayout&#39;.&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>原因：可能是当前项目构建的版本和库的版本不同</p></li></ul></li></ul><h3 id="实战-官网案例-world-time-clock-plugin" tabindex="-1"><a class="header-anchor" href="#实战-官网案例-world-time-clock-plugin"><span>实战 - 官网案例 World Time Clock Plugin</span></a></h3><ul><li>插件构建 <ul><li>官网案例：World Time Clock Plugin Example工程</li><li>案例路径：<code>安装路径\\QT\\Examples\\Qt-6.0.3\\designer\\worldtimeclockplugin</code></li></ul></li><li>插件构建 <ul><li>选择release</li><li>构建路径：<code>安装路径\\QT\\Examples\\Qt-6.0.3\\designer\\build- ... _MSVC2019_64bit-Release</code></li></ul></li><li>插件集成 <ul><li>拷贝 <ul><li>Qt版本和kit版本都要与前面的构建路径相对应，MSVC需要拷贝.dll和.lib，MinGW需要拷贝.dll和.a</li><li>拷贝后无需重启QT即可使用</li><li>拷贝到Qt中的路径：<code>安装路径\\QT\\6.0.3\\msvc2019_64\\plugins\\designer</code></li></ul></li><li>可视化 <ul><li>QtCreator界面编辑器界面不显示，在QtDesigner中能显示</li><li>即需要右键ui文件 &gt; 用...打开 &gt; 选QtDesigner而不选界面编辑器，后者是QtDesigner集成在QtCreator中的建议版本</li></ul></li><li><s>include简化</s><ul><li><s>拷贝到Qt中的路径：<code>安装路径\\QT\\6.0.3\\msvc2019_64\\include\\DIY自定义文件夹</code></s></li></ul></li></ul></li><li>插件使用 <ul><li>官网案例：World Time Colock Builder Example工程</li><li>案例路径：<code>安装路径\\QT\\Examples\\Qt-6.0.3\\designer\\worldtimeclockbuilder</code> 也就是<code>$$[QT_INSTALL_EXAMPLES]/designer/worldtimeclockbuilder</code></li><li>注意：因为前面拷贝的是release版本的插件，也没CONFIG设置debug_and_release 所以用Debug会报错：QFormBuilder was unable to create a widget of the class &#39;WorldTimeClock&#39;，需要Release才能使用</li></ul></li></ul><hr><p>项目观察</p><p>与Qt4DesignerCustomWidget一样，同样是继承了<code>QDesignerCustomWidgetInterface</code></p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class WorldTimeClockPlugin : public QObject,
                             public QDesignerCustomWidgetInterface
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但是项目结构比起默认项目模板稍简洁一些，没有.pri文件，原.pri中的.h.cpp文件不变</p><p>没有</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">Qt</span> <span class="token value attr-value">+= uiplugin</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用-飞扬青云插件" tabindex="-1"><a class="header-anchor" href="#使用-飞扬青云插件"><span>使用 - 飞扬青云插件</span></a></h3><p>基本使用</p><p>详见</p>`,34),gn={href:"http://www.qtcn.org/bbs/read-htm-tid-90117.html",target:"_blank",rel:"noopener noreferrer"},hn={href:"https://github.com/feiyangqingyun/qucsdk",target:"_blank",rel:"noopener noreferrer"},Qn={href:"https://gitee.com/feiyangqingyun/QUCSDK",target:"_blank",rel:"noopener noreferrer"},_n=s(`<h4 id="使用说明-作者的文档说明" tabindex="-1"><a class="header-anchor" href="#使用说明-作者的文档说明"><span>使用说明（作者的文档说明）</span></a></h4><blockquote><ol><li>第一步：前提是qt版本、编译器类型、编译器版本、编译器位数必须完全一致。</li><li>第二步：找到qt安装目录的库所在的bin目录，同级有个plugins文件夹，plugins文件夹下有个designer目录，将对应插件文件例如 quc_5_7_0_msvc2013_32.dll 放到此目录即可。 <ul><li>windows系统上Qt Designer设计师动态库存放的地址一般是 C:\\Qt\\Qt5.15.2\\5.15.2\\mingw81_64\\plugins\\designer，Qt Creator动态库存放的地址一般是 C:\\Qt\\Qt5.15.2\\Tools\\QtCreator\\bin\\plugins\\designer。</li><li>linux系统上Qt Designer设计师动态库存放的地址一般是 /home/liu/Qt/Qt5.14.0/5.14.0/gcc_64/plugins/designer，Qt Creator动态库存放的地址一般是 /home/liu/Qt/Qt5.14.0/Tools/QtCreator/lib/Qt/plugins/designer。</li><li>mac系统上Qt Designer设计师动态库存放的地址一般是 /Users/liu/Qt/5.15.2/clang_64/plugins/designer，Qt Creator动态库存放的地址一般是 /Users/liu/Qt/Qt Creator.app/Contents/PlugIns/designer。</li></ul></li><li>第三步：双击bin目录下的designer.exe，打开提供的demo.ui，即可看到效果。或者新建个空白UI然后从左边的控件栏里面拖动过去。</li><li>如果想集成到qtcreator中，则必须保证你下载的库版本必须和你的qtcreator所用的<strong>qt版本+编译器+位数完全一致</strong>才行，很可能集成安装包中的qtcreator版本是上一个qt版本编译的，这样是无法集成进去的，推荐用qt5.12.3这个集成安装包，如果你是msvc编译器那是可以顺利集成进去的。</li><li>非官方使用图文教程 https://blog.csdn.net/u014779536/article/details/106923566</li></ol></blockquote><h4 id="踩坑补充" tabindex="-1"><a class="header-anchor" href="#踩坑补充"><span>踩坑补充</span></a></h4><blockquote><p>QtCreator菜单帮助 &gt; AboutQtCreator中能查看QtCreator的Qt版本（Based on Qt 5.15.2 MSVC 2019 64bit），然后要放对应版本的dll到QtCreator的plugin/designer目录中。否则就会Designer中能检测到而QtCreatorDesigner中检测不到控件的问题</p><p>当然这只是浏览用的，构建时还是使用的构建器的版本。也就是说QtCreator版本的Designer并不会随你选择的构建器改变而改变！</p></blockquote><h3 id="参考-官网案例-customwidgetplugin" tabindex="-1"><a class="header-anchor" href="#参考-官网案例-customwidgetplugin"><span>参考 - 官网案例 CustomWidgetPlugin</span></a></h3><p>好像是 World Time Clock Plugin 官网案例的无信号槽版本</p><p>项目结构</p><p>pro</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token comment">#! [0]</span>
<span class="token key attr-name">QT</span> <span class="token value attr-value">         += widgets uiplugin</span>
<span class="token comment">#! [0]</span>

<span class="token key attr-name">QTDIR_build</span> <span class="token value attr-value">{</span>
<span class="token comment"># This is only for the Qt build. Do not use externally. We mean it.</span>
<span class="token key attr-name">PLUGIN_TYPE</span> <span class="token punctuation">=</span> <span class="token value attr-value">designer</span>
<span class="token key attr-name">PLUGIN_CLASS_NAME</span> <span class="token punctuation">=</span> <span class="token value attr-value">AnalogClockPlugin</span>
load(qt_plugin)
<span class="token key attr-name">CONFIG</span> <span class="token value attr-value">+= install_ok</span>
<span class="token key attr-name">}</span> <span class="token value attr-value">else {</span>
<span class="token comment"># Public example:</span>

<span class="token comment">#! [2]</span>
<span class="token key attr-name">CONFIG</span> <span class="token value attr-value">     += plugin</span>
<span class="token key attr-name">TEMPLATE</span>    <span class="token punctuation">=</span> <span class="token value attr-value">lib</span>
<span class="token comment">#! [2]</span>

<span class="token key attr-name">TARGET</span> <span class="token punctuation">=</span> <span class="token value attr-value">$$qtLibraryTarget($$TARGET)</span>

<span class="token key attr-name">target.path</span> <span class="token punctuation">=</span> <span class="token value attr-value">$$[QT_INSTALL_PLUGINS]/designer</span>
<span class="token key attr-name">INSTALLS</span> <span class="token value attr-value">+= target</span>

}

<span class="token comment">#! [3]</span>
<span class="token key attr-name">HEADERS</span>     <span class="token punctuation">=</span> <span class="token value attr-value">analogclock.h \\
              customwidgetplugin.h</span>
<span class="token key attr-name">SOURCES</span>     <span class="token punctuation">=</span> <span class="token value attr-value">analogclock.cpp \\
              customwidgetplugin.cpp</span>
<span class="token key attr-name">OTHER_FILES</span> <span class="token value attr-value">+= analogclock.json</span>
<span class="token comment">#! [3]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>analogclock.h</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// Copyright (C) 2016 The Qt Company Ltd.

#ifndef ANALOGCLOCK_H
#define ANALOGCLOCK_H

#include &lt;QWidget&gt;
#include &lt;QtUiPlugin/QDesignerExportWidget&gt;

class QDESIGNER_WIDGET_EXPORT AnalogClock : public QWidget
{
    Q_OBJECT

public:
    explicit AnalogClock(QWidget *parent = nullptr);

protected:
    void paintEvent(QPaintEvent *event) override;
};

#endif

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>analogclock.cpp</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// Copyright (C) 2016 The Qt Company Ltd.

#include &quot;analogclock.h&quot;

#include &lt;QMouseEvent&gt;
#include &lt;QPainter&gt;
#include &lt;QTime&gt;
#include &lt;QTimer&gt;

AnalogClock::AnalogClock(QWidget *parent)
    : QWidget(parent)
{
    QTimer *timer = new QTimer(this);
    connect(timer, &amp;QTimer::timeout, this, QOverload&lt;&gt;::of(&amp;QWidget::update));
    timer-&gt;start(1000);

    setWindowTitle(tr(&quot;Analog Clock&quot;));
    resize(200, 200);
}

void AnalogClock::paintEvent(QPaintEvent *)
{
    static const QPoint hourHand[3] = {
        QPoint(7, 8),
        QPoint(-7, 8),
        QPoint(0, -40)
    };
    static const QPoint minuteHand[3] = {
        QPoint(7, 8),
        QPoint(-7, 8),
        QPoint(0, -70)
    };

    QColor hourColor(127, 0, 127);
    QColor minuteColor(0, 127, 127, 191);

    int side = qMin(width(), height());
    QTime time = QTime::currentTime();

    QPainter painter(this);
    painter.setRenderHint(QPainter::Antialiasing);
    painter.translate(width() / 2, height() / 2);
    painter.scale(side / 200.0, side / 200.0);

    painter.setPen(Qt::NoPen);
    painter.setBrush(hourColor);

    painter.save();
    painter.rotate(30.0 * ((time.hour() + time.minute() / 60.0)));
    painter.drawConvexPolygon(hourHand, 3);
    painter.restore();

    painter.setPen(hourColor);

    for (int i = 0; i &lt; 12; ++i) {
        painter.drawLine(88, 0, 96, 0);
        painter.rotate(30.0);
    }

    painter.setPen(Qt::NoPen);
    painter.setBrush(minuteColor);

    painter.save();
    painter.rotate(6.0 * (time.minute() + time.second() / 60.0));
    painter.drawConvexPolygon(minuteHand, 3);
    painter.restore();

    painter.setPen(minuteColor);

    for (int j = 0; j &lt; 60; ++j) {
        if ((j % 5) != 0)
            painter.drawLine(92, 0, 96, 0);
        painter.rotate(6.0);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CustomWidgetPlugin.h</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// Copyright (C) 2016 The Qt Company Ltd.

#ifndef CUSTOMWIDGETPLUGIN_H
#define CUSTOMWIDGETPLUGIN_H

#include &lt;QtUiPlugin/QDesignerCustomWidgetInterface&gt;

//! [0]
class AnalogClockPlugin : public QObject, public QDesignerCustomWidgetInterface
{
    Q_OBJECT
    Q_PLUGIN_METADATA(IID &quot;org.qt-project.Qt.QDesignerCustomWidgetInterface&quot;)
    Q_INTERFACES(QDesignerCustomWidgetInterface)
public:
    explicit AnalogClockPlugin(QObject *parent = nullptr);

    bool isContainer() const override;
    bool isInitialized() const override;
    QIcon icon() const override;
    QString domXml() const override;
    QString group() const override;
    QString includeFile() const override;
    QString name() const override;
    QString toolTip() const override;
    QString whatsThis() const override;
    QWidget *createWidget(QWidget *parent) override;
    void initialize(QDesignerFormEditorInterface *core) override;

private:
    bool initialized = false;
};
//! [0]

#endif

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CustomWidgetPlugin.cpp</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// Copyright (C) 2016 The Qt Company Ltd.

#include &quot;analogclock.h&quot;
#include &quot;customwidgetplugin.h&quot;

#include &lt;QtPlugin&gt;

//! [0]
AnalogClockPlugin::AnalogClockPlugin(QObject *parent)
    : QObject(parent)
{
}
//! [0]

//! [1]
void AnalogClockPlugin::initialize(QDesignerFormEditorInterface * /* core */)
{
    if (initialized)
        return;

    initialized = true;
}
//! [1]

//! [2]
bool AnalogClockPlugin::isInitialized() const
{
    return initialized;
}
//! [2]

//! [3]
QWidget *AnalogClockPlugin::createWidget(QWidget *parent)
{
    return new AnalogClock(parent);
}
//! [3]

//! [4]
QString AnalogClockPlugin::name() const
{
    return QStringLiteral(&quot;AnalogClock&quot;);
}
//! [4]

//! [5]
QString AnalogClockPlugin::group() const
{
    return QStringLiteral(&quot;Display Widgets [Examples]&quot;);
}
//! [5]

//! [6]
QIcon AnalogClockPlugin::icon() const
{
    return QIcon();
}
//! [6]

//! [7]
QString AnalogClockPlugin::toolTip() const
{
    return QString();
}
//! [7]

//! [8]
QString AnalogClockPlugin::whatsThis() const
{
    return QString();
}
//! [8]

//! [9]
bool AnalogClockPlugin::isContainer() const
{
    return false;
}
//! [9]

//! [10]
QString AnalogClockPlugin::domXml() const
{
    return &quot;&lt;ui language=\\&quot;c++\\&quot;&gt;\\n&quot;
           &quot; &lt;widget class=\\&quot;AnalogClock\\&quot; name=\\&quot;analogClock\\&quot;&gt;\\n&quot;
//! [11]
           &quot;  &lt;property name=\\&quot;geometry\\&quot;&gt;\\n&quot;
           &quot;   &lt;rect&gt;\\n&quot;
           &quot;    &lt;x&gt;0&lt;/x&gt;\\n&quot;
           &quot;    &lt;y&gt;0&lt;/y&gt;\\n&quot;
           &quot;    &lt;width&gt;100&lt;/width&gt;\\n&quot;
           &quot;    &lt;height&gt;100&lt;/height&gt;\\n&quot;
           &quot;   &lt;/rect&gt;\\n&quot;
           &quot;  &lt;/property&gt;\\n&quot;
//! [11]
           &quot;  &lt;property name=\\&quot;toolTip\\&quot; &gt;\\n&quot;
           &quot;   &lt;string&gt;The current time&lt;/string&gt;\\n&quot;
           &quot;  &lt;/property&gt;\\n&quot;
           &quot;  &lt;property name=\\&quot;whatsThis\\&quot; &gt;\\n&quot;
           &quot;   &lt;string&gt;The analog clock widget displays the current time.&lt;/string&gt;\\n&quot;
           &quot;  &lt;/property&gt;\\n&quot;
           &quot; &lt;/widget&gt;\\n&quot;
           &quot;&lt;/ui&gt;\\n&quot;;
}
//! [10]

//! [12]
QString AnalogClockPlugin::includeFile() const
{
    return QStringLiteral(&quot;analogclock.h&quot;);
}
//! [12]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Copyright (C) 2016 The Qt Company Ltd.</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>/****************************************************************************
**
** 版权所有(C) 2016 The Qt Company Ltd.
** 联系:https://www.qt.io/licensing/
**
** 该文件是Qt工具包示例的一部分。
**
** $QT_BEGIN_LICENSE:BSD$
** 商用许可证使用
** 持有有效商业Qt许可证的被许可方可以在
** 依照商业许可协议提供的
** 软件，或根据本协议所载条款
** 你和Qt公司之间的书面协议。对许可条款
** 和条件见https://www.qt.io/terms-conditions。为进一步
** 信息请访问https://www.qt.io/contact-us。
**
** BSD License Usage
** 您也可以在BSD许可条款下使用此文件
** 如下:
**
** “无论是否以源代码和二进制形式重新分配和使用修改，只要符合下列条件:
** * 重新发布的源代码必须保留上述版权通知，此条件列表和以下免责声明。
** * 以二进制形式再发布必须复制上述版权通知，此条件列表和以下免责声明随附的文件和/或其他材料分布。
** * 不包括Qt公司的名称，也不包括其名称贡献者可能被用来支持或推广衍生产品未经事先书面许可而使用本软件。
**
**
** 本软件由版权所有人和贡献者提供
** “按现状”及任何明示或默示保证，包括但不包括
** 仅限于，默示的适销性和适用性保证
** 不承认特定目的。在任何情况下，版权都不应
** 所有人或贡献者须对任何直接、间接、附带、
** 特殊的、惩罚性的或间接的损害赔偿(包括但不包括
** 限于，代用品或服务的采购;损失的使用,
** 数据，或利润;或业务中断)
** 责任理论，无论是在合同、严格责任，还是侵权
** (包括因使用而以任何方式产生的疏忽或其他)
** 本软件，即使被告知有可能发生此类损坏。”
**
** $QT_END_LICENSE$
**
****************************************************************************/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function kn(qn,Cn){const i=a("ExternalLinkIcon");return d(),r("div",null,[c,n("ul",null,[n("li",null,[n("a",o,[e("【Qt官网】How to Create Qt Plugins"),l(i)])]),n("li",null,[n("a",v,[e("【51CTO博客】Qt高级——Qt插件开发"),l(i)]),e("，介绍了多种不同种类的插件")]),m]),p,n("p",null,[e("参考地址："),n("a",b,[e("【CSDN】QT插件和普通动态库的差别？！"),l(i)])]),g,n("table",null,[h,n("tbody",null,[Q,n("tr",null,[n("td",null,[n("a",_,[e("Custom widget Plugin Example"),l(i)]),k,n("a",q,[e("Analog Clock Example"),l(i)]),e("（非插件）")]),C,P,E]),n("tr",null,[n("td",null,[n("a",T,[e("World Time Clock Plugin Example"),l(i)]),f,e("+ World Time Colock Builder Example")]),x,y,I]),S,w,L,n("tr",null,[n("td",null,[n("a",A,[e("Echo Plugin Example"),l(i)])]),D,W,B]),n("tr",null,[n("td",null,[n("a",N,[e("Style Plugin Example"),l(i)])]),M,O,G]),R,F,U,z,H,j])]),n("ul",null,[n("li",null,[e("其他参考链接 "),n("ul",null,[n("li",null,[n("a",$,[e("【Qt官网】如何创建Qt插件 "),l(i)]),e("（Qt6.1 > 如何创建Qt插件）")]),n("li",null,[n("a",V,[e("【Qt官网】<QtPlugin>-定义插件"),l(i)]),e("（Qt6.1 > Qt核心 > 插件类 > <QtPlugin>-定义插件）")]),n("li",null,[n("a",X,[e("【C语言中文网】Qt编程涉及的属于和名词"),l(i)])])])])]),J,K,n("ul",null,[n("li",null,[n("a",Y,[e("【CSDN】QT插件框架"),l(i)]),e("，含demo")])]),Z,n("ul",null,[n("li",null,[n("a",nn,[e("【Qt官网】How to Create Qt Plugins"),l(i)])]),en,n("li",null,[n("a",ln,[e("【个人博客】Qt5个人软件插件使用（低级API）"),l(i)]),e("，QtPlugin")])]),sn,n("ul",null,[tn,n("li",null,[an,n("ul",null,[dn,n("li",null,[rn,un,n("p",null,[e("Windows的xxx.dll，"),n("a",cn,[e("Linux的xxx.so"),l(i)]),e("、Mac OS X的xxx.dylib")])])])]),on]),vn,n("ul",null,[n("li",null,[n("a",mn,[e("【CSDN】Qt--自定义插件并集成到Qt Designer"),l(i)])]),n("li",null,[n("a",pn,[e("【CSDN】关于QT自定义控件（Custom Widget）相关知识总结"),l(i)])])]),bn,n("ul",null,[n("li",null,[n("a",gn,[e("【QTCN】Qt自定义控件集成到全平台QtCreator效果图"),l(i)])]),n("li",null,[n("a",hn,[e("【Github】飞扬青云控件Github"),l(i)]),e(" 或 "),n("a",Qn,[e("【Gitee】飞扬青云QUCSDK"),l(i)])])]),_n])}const Tn=t(u,[["render",kn],["__file","06.1 .dll.so 插件文件 _ 创建插件.html.vue"]]),fn=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Multi/QT%EF%BC%88Cpp%EF%BC%89/04.%20%E8%BE%85%E5%8A%A9%E6%96%87%E4%BB%B6/%E8%B5%84%E6%BA%90%E6%80%A7%E8%BE%85%E5%8A%A9%E6%96%87%E4%BB%B6/06.1%20.dll.so%20%E6%8F%92%E4%BB%B6%E6%96%87%E4%BB%B6%20_%20%E5%88%9B%E5%BB%BA%E6%8F%92%E4%BB%B6.html","title":"Qt","lang":"zh-CN","frontmatter":{"description":"Qt 目录 .dll.so 插件文件 & 创建插件 注：插件的笔记之前因为系统崩溃而坏掉了（5k多字啊，大大的惨），所以我不得不重新写了一遍，所以内容可能会有点缺失 可另参考另一篇笔记：Dev > Tools > 辅助文件 > 动态库和静态库 参考 【Qt官网】How to Create Qt Plugins 【51CTO博客】Qt高级——Qt插件开发...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Multi/QT%EF%BC%88Cpp%EF%BC%89/04.%20%E8%BE%85%E5%8A%A9%E6%96%87%E4%BB%B6/%E8%B5%84%E6%BA%90%E6%80%A7%E8%BE%85%E5%8A%A9%E6%96%87%E4%BB%B6/06.1%20.dll.so%20%E6%8F%92%E4%BB%B6%E6%96%87%E4%BB%B6%20_%20%E5%88%9B%E5%BB%BA%E6%8F%92%E4%BB%B6.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Qt"}],["meta",{"property":"og:description","content":"Qt 目录 .dll.so 插件文件 & 创建插件 注：插件的笔记之前因为系统崩溃而坏掉了（5k多字啊，大大的惨），所以我不得不重新写了一遍，所以内容可能会有点缺失 可另参考另一篇笔记：Dev > Tools > 辅助文件 > 动态库和静态库 参考 【Qt官网】How to Create Qt Plugins 【51CTO博客】Qt高级——Qt插件开发..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Qt\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"Qt","slug":"qt","link":"#qt","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":".dll.so 插件文件 & 创建插件","slug":"dll-so-插件文件-创建插件","link":"#dll-so-插件文件-创建插件","children":[{"level":2,"title":"各种插件","slug":"各种插件","link":"#各种插件","children":[{"level":3,"title":"TEMPLATE的LIB和插件","slug":"template的lib和插件","link":"#template的lib和插件","children":[]},{"level":3,"title":"SharedPlugin & QtPlugin","slug":"sharedplugin-qtplugin","link":"#sharedplugin-qtplugin","children":[]},{"level":3,"title":"Qt_Plugin & DLL","slug":"qt-plugin-dll","link":"#qt-plugin-dll","children":[]},{"level":3,"title":"关于库文件后缀","slug":"关于库文件后缀","link":"#关于库文件后缀","children":[]},{"level":3,"title":"官网提供的插件Example","slug":"官网提供的插件example","link":"#官网提供的插件example","children":[]}]},{"level":2,"title":"【SharedPlugin】QtPlugin + QPluginLoader","slug":"【sharedplugin】qtplugin-qpluginloader","link":"#【sharedplugin】qtplugin-qpluginloader","children":[{"level":3,"title":"原理简概","slug":"原理简概","link":"#原理简概","children":[]},{"level":3,"title":"实战 - 项目模板","slug":"实战-项目模板","link":"#实战-项目模板","children":[{"level":4,"title":"创建项目模板","slug":"创建项目模板","link":"#创建项目模板","children":[]},{"level":4,"title":"项目模板结构","slug":"项目模板结构","link":"#项目模板结构","children":[]},{"level":4,"title":"使用流程","slug":"使用流程","link":"#使用流程","children":[]}]},{"level":3,"title":"实战 - 网络demo","slug":"实战-网络demo","link":"#实战-网络demo","children":[{"level":4,"title":"(1) 准备接口集","slug":"_1-准备接口集","link":"#_1-准备接口集","children":[]},{"level":4,"title":"(2) 新建一个插件","slug":"_2-新建一个插件","link":"#_2-新建一个插件","children":[]},{"level":4,"title":"(3) 编写插件代码","slug":"_3-编写插件代码","link":"#_3-编写插件代码","children":[]},{"level":4,"title":"(4) 插件的使用","slug":"_4-插件的使用","link":"#_4-插件的使用","children":[]}]},{"level":3,"title":"补充 - 插件通信","slug":"补充-插件通信","link":"#补充-插件通信","children":[]}]},{"level":2,"title":"【QtPlugin】QLibrary","slug":"【qtplugin】qlibrary","link":"#【qtplugin】qlibrary","children":[{"level":3,"title":"原理简概","slug":"原理简概-1","link":"#原理简概-1","children":[]},{"level":3,"title":"实战 - 项目模板","slug":"实战-项目模板-1","link":"#实战-项目模板-1","children":[{"level":4,"title":"项目模板创建","slug":"项目模板创建","link":"#项目模板创建","children":[]},{"level":4,"title":"Qt的插件类和处理器类补充","slug":"qt的插件类和处理器类补充","link":"#qt的插件类和处理器类补充","children":[]},{"level":4,"title":"项目模板结构","slug":"项目模板结构-1","link":"#项目模板结构-1","children":[]},{"level":4,"title":"使用流程","slug":"使用流程-1","link":"#使用流程-1","children":[]}]},{"level":3,"title":"实战 - 书例 QStyle插件","slug":"实战-书例-qstyle插件","link":"#实战-书例-qstyle插件","children":[{"level":4,"title":"书例的不同（旧版本的不同）","slug":"书例的不同-旧版本的不同","link":"#书例的不同-旧版本的不同","children":[]},{"level":4,"title":"实战","slug":"实战","link":"#实战","children":[]}]},{"level":3,"title":"实战 - 书例 读取Windows单色光标文件","slug":"实战-书例-读取windows单色光标文件","link":"#实战-书例-读取windows单色光标文件","children":[]}]},{"level":2,"title":"【Qt4 Designer Custom Widget】","slug":"【qt4-designer-custom-widget】","link":"#【qt4-designer-custom-widget】","children":[{"level":3,"title":"原理简概","slug":"原理简概-2","link":"#原理简概-2","children":[]},{"level":3,"title":"实战 - 项目模板","slug":"实战-项目模板-2","link":"#实战-项目模板-2","children":[{"level":4,"title":"创建项目模板","slug":"创建项目模板-1","link":"#创建项目模板-1","children":[]},{"level":4,"title":"项目模板结构","slug":"项目模板结构-2","link":"#项目模板结构-2","children":[]},{"level":4,"title":"使用流程","slug":"使用流程-2","link":"#使用流程-2","children":[]}]},{"level":3,"title":"实战 - 官网案例 World Time Clock Plugin","slug":"实战-官网案例-world-time-clock-plugin","link":"#实战-官网案例-world-time-clock-plugin","children":[]},{"level":3,"title":"使用 - 飞扬青云插件","slug":"使用-飞扬青云插件","link":"#使用-飞扬青云插件","children":[{"level":4,"title":"使用说明（作者的文档说明）","slug":"使用说明-作者的文档说明","link":"#使用说明-作者的文档说明","children":[]},{"level":4,"title":"踩坑补充","slug":"踩坑补充","link":"#踩坑补充","children":[]}]},{"level":3,"title":"参考 - 官网案例 CustomWidgetPlugin","slug":"参考-官网案例-customwidgetplugin","link":"#参考-官网案例-customwidgetplugin","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":24.34,"words":7302},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Platform/Multi/QT（Cpp）/04. 辅助文件/资源性辅助文件/06.1 .dll.so 插件文件 & 创建插件.md","autoDesc":true}');export{Tn as comp,fn as data};

import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as e,a}from"./app-OHhlwNoJ.js";const s={},l=a(`<h1 id="qt" tabindex="-1"><a class="header-anchor" href="#qt"><span>QT</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="开发流程-观察-项目结构" tabindex="-1"><a class="header-anchor" href="#开发流程-观察-项目结构"><span>开发流程 - 观察（项目结构）</span></a></h1><h2 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构"><span>项目结构</span></a></h2><p>注：QtCreator的项目浏览器的顶部有个筛选器，可以简化树形结构（不区分头文件/源文件/ui文件）</p><ul><li><code>ProjectName</code>项目名 <ul><li><code>ProjectName.pro</code>，项目文件</li><li>Headers头文件 <ul><li><code>widget.h/mainwindow.h/dialog.h</code>，窗口类的头文件</li></ul></li><li>Sources源文件 <ul><li><code>main.cpp</code>，入口文件</li><li><code>widget.cpp/mainwindow.cpp/dialog.cpp</code>，窗口类，继承的是<code>QWidget.cpp/QMainWindow.cpp/QDialog.cpp</code></li></ul></li><li>Forms <ul><li><code>.ui</code>，窗口布局文件</li></ul></li></ul></li></ul><h2 id="demo项目文件" tabindex="-1"><a class="header-anchor" href="#demo项目文件"><span>demo项目文件</span></a></h2><h3 id="main-cpp-入口文件" tabindex="-1"><a class="header-anchor" href="#main-cpp-入口文件"><span>main.cpp（入口文件）</span></a></h3><p>代码</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &quot;widget.h&quot;                 // 窗口类的头文件

#include &lt;QApplication&gt;

int main(int argc, char *argv[])    // 程序入口，argc是命令行变量的数量，argv是命令行变量的数组
{
    QApplication a(argc, argv);     // a是应用程序的实例对象。在Qt中该应用程序对象有且只有一个
    Widget w;                       // 窗口类的实例对象
    w.show();                       // 显示窗口
    return a.exec();                // 进入消息循环
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="widget-h-窗口类的头文件" tabindex="-1"><a class="header-anchor" href="#widget-h-窗口类的头文件"><span>widget.h（窗口类的头文件）</span></a></h3><p>代码</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#ifndef WIDGET_H                        // 防止头文件重复包含-1
#define WIDGET_H                        // 防止头文件重复包含-2

#include &lt;QWidget&gt;                      // 预编译 QWidget窗口类

QT_BEGIN_NAMESPACE
namespace Ui { class Widget; }          // 前置声明ui生成文件中的Ui::Widget类
QT_END_NAMESPACE

class Widget : public QWidget           // 继承QWidget窗口类
{
    Q_OBJECT                            // Q_OBJECT宏，允许类中使用信息好槽的机制

public:
    Widget(QWidget *parent = nullptr);  // 构造函数
    ~Widget();                          // 析构函数

private:
    Ui::Widget *ui;                     // .ui后生成一个.h，里面有一个UI_MainWindow类，Ui::MainWindow继承于UI_MainWindow类
};
#endif // WIDGET_H                      // 防止头文件重复包含-3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include &lt;QMainWindow&gt;

QT_BEGIN_NAMESPACE
namespace Ui { class MainWindow; }		// 前置声明ui生成文件中的Ui::MainWindow类
QT_END_NAMESPACE

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    MainWindow(QWidget *parent = nullptr);
    ~MainWindow();

private:
    // 私有指针
    // .ui后生成一个.h，里面有一个UI_MainWindow类，Ui::MainWindow继承于UI_MainWindow类
    // 提前声明 + 不include而在cpp才包含 + 使用非指针，是为了解耦合，修改ui文件时不需要重新编译incldue此类的文件。设计模式的思想
    Ui::MainWindow *ui;
};
#endif // MAINWINDOW_H
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ui-mainwindow-h-ui的生成文件" tabindex="-1"><a class="header-anchor" href="#ui-mainwindow-h-ui的生成文件"><span>ui_mainwindow.h（ui的生成文件）</span></a></h3><p>这个要在QtCreator中的过滤取勾 “隐藏生成的文件”，才可以看到</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// ...

class Ui_MainWindow
{
    // ...
};

/**定义一个新类 Ui::MainWindow
 * Ui::MainWindow和MainWindow不是同一个类！！！
 * 前者继承于Ui_MainWindow，而后者继承与QMainWindow，后者包含前者的指针
 * 如果在 MainWindow.cpp 中 using namespace ui; 则可能会导致两者混淆
 */
namespace Ui {
    class MainWindow: public Ui_MainWindow {};
}

// ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="widget-cpp-窗口类的实现代码" tabindex="-1"><a class="header-anchor" href="#widget-cpp-窗口类的实现代码"><span>widget.cpp（窗口类的实现代码）</span></a></h3><p>或</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &quot;mainwindow.h&quot;
#include &quot;ui_mainwindow.h&quot;		// 这个.h是.ui文件生成出来的

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)	// 不是多重继承，如果是多重继承的话应该在头文件看。这里是列表初始化
{
    // ui = new Ui::MainWindow;	// 第二种写法 —— 不适用列表初始化
    ui-&gt;setupUi(this);
}

MainWindow::~MainWindow()
{
    delete ui;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="projectname-pro-工程文件" tabindex="-1"><a class="header-anchor" href="#projectname-pro-工程文件"><span>ProjectName.pro（工程文件）</span></a></h3><p>代码（好像不支持尾注释，这就十分操蛋了）</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token comment"># Qt包含的模块</span>
<span class="token key attr-name">QT</span> <span class="token value attr-value">      += core gui</span>

<span class="token comment"># 大于4版本以上，则包含widget模块</span>
<span class="token key attr-name">greaterThan(QT_MAJOR_VERSION,</span> <span class="token value attr-value">4): QT += widgets</span>

<span class="token comment"># TARGET = ProjectName	# 编译时窗口的名字、和编译的exe文件的名字</span>
<span class="token comment"># TEMPLATE = app		# 模板，为空则默认为应用程序模板，即app</span>
<span class="token key attr-name">CONFIG</span> <span class="token value attr-value">+= c++11</span>

<span class="token comment"># 如果代码使用了弃用的API，则可能导致编译失败 You can make your code fail to compile if it uses deprecated APIs.</span>
<span class="token comment"># 为此，需要取消下面一行的注释以解决 In order to do so, uncomment the following line.</span>
<span class="token comment">#DEFINES += QT_DISABLE_DEPRECATED_BEFORE=0x060000    # disables all the APIs deprecated before Qt 6.0.0</span>

<span class="token comment"># 源文件（自动添加）</span>
<span class="token key attr-name">SOURCES</span> <span class="token value attr-value">+= \\
    main.cpp \\
    widget.cpp</span>

<span class="token comment"># 头文件（自动添加）</span>
<span class="token key attr-name">HEADERS</span> <span class="token value attr-value">+= \\
    widget.h</span>

<span class="token comment"># Forms文件（自动添加）</span>
<span class="token key attr-name">FORMS</span> <span class="token value attr-value">+= \\
    widget.ui</span>

<span class="token comment"># 部署的默认规则 Default rules for deployment.</span>
<span class="token key attr-name">qnx</span><span class="token punctuation">:</span> <span class="token value attr-value">target.path = /tmp/$\${TARGET}/bin</span>
<span class="token key attr-name">else</span><span class="token punctuation">:</span> <span class="token value attr-value">unix:!android: target.path = /opt/$\${TARGET}/bin</span>
<span class="token comment">!isEmpty(target.path): INSTALLS += target</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ui-mainwindow-h-生成文件-默认隐藏" tabindex="-1"><a class="header-anchor" href="#ui-mainwindow-h-生成文件-默认隐藏"><span>ui_mainwindow.h（生成文件，默认隐藏）</span></a></h3><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>/********************************************************************************
** Form generated from reading UI file &#39;mainwindow.ui&#39;
**
** Created by: Qt User Interface Compiler version 5.15.2
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_MAINWINDOW_H
#define UI_MAINWINDOW_H

#include &lt;QtCore/QVariant&gt;
#include &lt;QtWidgets/QApplication&gt;
#include &lt;QtWidgets/QMainWindow&gt;
#include &lt;QtWidgets/QMenuBar&gt;
#include &lt;QtWidgets/QPushButton&gt;
#include &lt;QtWidgets/QStatusBar&gt;
#include &lt;QtWidgets/QWidget&gt;

QT_BEGIN_NAMESPACE

class Ui_MainWindow
{
public:
    QWidget *centralwidget;
    QPushButton *pushButton;
    QMenuBar *menubar;
    QStatusBar *statusbar;

/**
 * @brief 初始化Ui，这个公有方法会在窗口类的cpp构造函数中被调用
 * @return 无
 * @other 这个头文件均为内联函数，即没有对应的cpp文件只有头文件
 */
    void setupUi(QMainWindow *MainWindow)
    {
        if (MainWindow-&gt;objectName().isEmpty())
            MainWindow-&gt;setObjectName(QString::fromUtf8(&quot;MainWindow&quot;));
        MainWindow-&gt;resize(800, 600);
        centralwidget = new QWidget(MainWindow);
        centralwidget-&gt;setObjectName(QString::fromUtf8(&quot;centralwidget&quot;));
        pushButton = new QPushButton(centralwidget);
        pushButton-&gt;setObjectName(QString::fromUtf8(&quot;pushButton&quot;));
        pushButton-&gt;setGeometry(QRect(360, 300, 341, 171));
        MainWindow-&gt;setCentralWidget(centralwidget);
        menubar = new QMenuBar(MainWindow);
        menubar-&gt;setObjectName(QString::fromUtf8(&quot;menubar&quot;));
        menubar-&gt;setGeometry(QRect(0, 0, 800, 23));
        MainWindow-&gt;setMenuBar(menubar);
        statusbar = new QStatusBar(MainWindow);
        statusbar-&gt;setObjectName(QString::fromUtf8(&quot;statusbar&quot;));
        MainWindow-&gt;setStatusBar(statusbar);

        retranslateUi(MainWindow);

        QMetaObject::connectSlotsByName(MainWindow);
    } // setupUi

    void retranslateUi(QMainWindow *MainWindow)
    {
        MainWindow-&gt;setWindowTitle(QCoreApplication::translate(&quot;MainWindow&quot;, &quot;MainWindow&quot;, nullptr));
        pushButton-&gt;setText(QCoreApplication::translate(&quot;MainWindow&quot;, &quot;PushButton&quot;, nullptr));
    } // retranslateUi

};

/**
 * 名称空间 - Ui
 * 在主窗口的头文件中：namespace Ui {class MainWindow;}
 * 即MainWindow在名称空间Ui中
 */
namespace Ui {
    class MainWindow: public Ui_MainWindow {};
}

QT_END_NAMESPACE

#endif // UI_MAINWINDOW_H

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件夹结构" tabindex="-1"><a class="header-anchor" href="#文件夹结构"><span>文件夹结构</span></a></h2><h3 id="build文件夹" tabindex="-1"><a class="header-anchor" href="#build文件夹"><span>build文件夹</span></a></h3><p>用Qt进行构建后会在于工程文件夹同目录下生成一个名为<code>build-ProjectName...</code>的文件夹</p><p>该文件夹包含debug和release版本，里面有exe文件</p><p>可能会出现在QtCreator中能编译，但运行debug里的exe会报错：找不到xxx.dll文件（比如Qt5Cored.dll、Qt5Widgetsd.dll）</p><p>解决方法：因为没有配置环境变量，或者可以直接把那几个dll拷贝进exe所属目录底下，或者封装exe和dll文件</p><p>（dll所在位置：Qt安装路径\\Tools\\QtCreator\\bin）</p>`,33),d=[l];function t(c,r){return n(),e("div",null,d)}const o=i(s,[["render",t],["__file","04.2. 开发流程 - 观察（项目结构）.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Multi/QT%EF%BC%88Cpp%EF%BC%89/01.%20%E7%AE%80%E6%A6%82/02.%20%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B/04.2.%20%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B%20-%20%E8%A7%82%E5%AF%9F%EF%BC%88%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84%EF%BC%89.html","title":"QT","lang":"zh-CN","frontmatter":{"description":"QT 目录 开发流程 - 观察（项目结构） 项目结构 注：QtCreator的项目浏览器的顶部有个筛选器，可以简化树形结构（不区分头文件/源文件/ui文件） ProjectName项目名 ProjectName.pro，项目文件 Headers头文件 widget.h/mainwindow.h/dialog.h，窗口类的头文件 Sources源文件 m...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Multi/QT%EF%BC%88Cpp%EF%BC%89/01.%20%E7%AE%80%E6%A6%82/02.%20%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B/04.2.%20%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B%20-%20%E8%A7%82%E5%AF%9F%EF%BC%88%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"QT"}],["meta",{"property":"og:description","content":"QT 目录 开发流程 - 观察（项目结构） 项目结构 注：QtCreator的项目浏览器的顶部有个筛选器，可以简化树形结构（不区分头文件/源文件/ui文件） ProjectName项目名 ProjectName.pro，项目文件 Headers头文件 widget.h/mainwindow.h/dialog.h，窗口类的头文件 Sources源文件 m..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"QT\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"QT","slug":"qt","link":"#qt","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"开发流程 - 观察（项目结构）","slug":"开发流程-观察-项目结构","link":"#开发流程-观察-项目结构","children":[{"level":2,"title":"项目结构","slug":"项目结构","link":"#项目结构","children":[]},{"level":2,"title":"demo项目文件","slug":"demo项目文件","link":"#demo项目文件","children":[{"level":3,"title":"main.cpp（入口文件）","slug":"main-cpp-入口文件","link":"#main-cpp-入口文件","children":[]},{"level":3,"title":"widget.h（窗口类的头文件）","slug":"widget-h-窗口类的头文件","link":"#widget-h-窗口类的头文件","children":[]},{"level":3,"title":"ui_mainwindow.h（ui的生成文件）","slug":"ui-mainwindow-h-ui的生成文件","link":"#ui-mainwindow-h-ui的生成文件","children":[]},{"level":3,"title":"widget.cpp（窗口类的实现代码）","slug":"widget-cpp-窗口类的实现代码","link":"#widget-cpp-窗口类的实现代码","children":[]},{"level":3,"title":"ProjectName.pro（工程文件）","slug":"projectname-pro-工程文件","link":"#projectname-pro-工程文件","children":[]},{"level":3,"title":"ui_mainwindow.h（生成文件，默认隐藏）","slug":"ui-mainwindow-h-生成文件-默认隐藏","link":"#ui-mainwindow-h-生成文件-默认隐藏","children":[]}]},{"level":2,"title":"文件夹结构","slug":"文件夹结构","link":"#文件夹结构","children":[{"level":3,"title":"build文件夹","slug":"build文件夹","link":"#build文件夹","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":4.4,"words":1320},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Platform/Multi/QT（Cpp）/01. 简概/02. 开发流程/04.2. 开发流程 - 观察（项目结构）.md","autoDesc":true}');export{o as comp,m as data};

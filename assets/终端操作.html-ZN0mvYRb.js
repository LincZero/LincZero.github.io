import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as l,c as s,a as e,b as r,d,e as n}from"./app-CoO7IlkE.js";const c={},o=n('<h1 id="qt" tabindex="-1"><a class="header-anchor" href="#qt"><span>Qt</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="终端操作" tabindex="-1"><a class="header-anchor" href="#终端操作"><span>终端操作</span></a></h1><p>参考</p>',4),u={href:"https://blog.csdn.net/pyuxing/article/details/88813774",target:"_blank",rel:"noopener noreferrer"},m=n(`<h2 id="ping" tabindex="-1"><a class="header-anchor" href="#ping"><span>ping</span></a></h2><blockquote><h3 id="方案1" tabindex="-1"><a class="header-anchor" href="#方案1"><span>方案1</span></a></h3></blockquote><p>等待数据全部接受完毕会才显示</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>void MainWindow::on_btnPing_clicked(){
    QProcess myProcess(this);							// 建立程序对象
    QString program = &quot;C:/Windows/System32/cmd.exe&quot;;	// 程序路径
    QStringList arguments;								// 参数列表，并传入参数
    arguments &lt;&lt;&quot;/c&quot; &lt;&lt;&quot;ping www.baidu.com&quot;;
    myProcess.start(program,arguments);					// 以参数启动程序，并等待程序完成
    myProcess.waitForFinished();						// 阻塞（单线程下回阻塞当前进程）
    QString qstr = QString::fromLocal8Bit(myProcess.readAllStandardOutput());	// 获取返回内容，并显示
    ui-&gt;textBrowser-&gt;setText(qstr);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h3 id="方案2" tabindex="-1"><a class="header-anchor" href="#方案2"><span>方案2</span></a></h3></blockquote><p>能即时显示</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>//mainwindow.cpp文件，主界面实现
#include &quot;mainwindow.h&quot;
#include &quot;ui_mainwindow.h&quot;
#include &lt;qdebug.h&gt;
#include &lt;qprocess.h&gt;

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow){
    ui-&gt;setupUi(this);
}
MainWindow::~MainWindow(){
    delete ui;
}
void MainWindow::on_btnPing_clicked(){
    qDebug()&lt;&lt;QStringLiteral(&quot;开始点击&quot;);
    ui-&gt;textBrowser-&gt;clear();
    ui-&gt;textBrowser-&gt;setText(QStringLiteral(&quot;请等待&quot;));
    ui-&gt;textBrowser-&gt;update();
	
    // 外部程序部分
    QProcess myProcess(this);
    QString program = &quot;C:/Windows/System32/cmd.exe&quot;;
    QStringList arguments;
    arguments &lt;&lt;&quot;/c&quot; &lt;&lt;&quot;ping www.baidu.com&quot;;
    myProcess.start(program,arguments);

    /** 每100ms检查一次
     * 阻塞直到程序结束或过指定时间（后面的参数默认是30000）。进程完成返回true，否则false
    **/
    while (myProcess.waitForFinished(100) == false) {
        QByteArray qByteRead = myProcess.readAllStandardOutput();	// 读结果
        if (!qByteRead.isEmpty()) {
            ui-&gt;textBrowser-&gt;append(QString::fromLocal8Bit(qByteRead));	// append实时更新内容
            repaint();	// 立刻调用paintEvent重绘部件，除非禁用更新或隐藏小部件（update()好像会更好）
        }
    }
    QByteArray qByteRead = myProcess.readAllStandardOutput();
    ui-&gt;textBrowser-&gt;append(QString::fromLocal8Bit(qByteRead));

    qDebug()&lt;&lt;QString::fromLocal8Bit(qByteRead);
    qDebug()&lt;&lt;&quot;结束点击&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function v(p,b){const i=a("ExternalLinkIcon");return l(),s("div",null,[o,e("ul",null,[e("li",null,[e("a",u,[r("【CSDN】QT之调用cmd并执行ping命令"),d(i)])])]),m])}const E=t(c,[["render",v],["__file","终端操作.html.vue"]]),B=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Multi/QT%EF%BC%88Cpp%EF%BC%89/05.%20%E5%8A%9F%E8%83%BD%E5%AE%9E%E7%8E%B0%E7%B1%BB/%E7%BB%88%E7%AB%AF%E6%93%8D%E4%BD%9C.html","title":"Qt","lang":"zh-CN","frontmatter":{"description":"Qt 目录 终端操作 参考 【CSDN】QT之调用cmd并执行ping命令 ping 方案1 等待数据全部接受完毕会才显示 方案2 能即时显示","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Multi/QT%EF%BC%88Cpp%EF%BC%89/05.%20%E5%8A%9F%E8%83%BD%E5%AE%9E%E7%8E%B0%E7%B1%BB/%E7%BB%88%E7%AB%AF%E6%93%8D%E4%BD%9C.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Qt"}],["meta",{"property":"og:description","content":"Qt 目录 终端操作 参考 【CSDN】QT之调用cmd并执行ping命令 ping 方案1 等待数据全部接受完毕会才显示 方案2 能即时显示"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Qt\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"Qt","slug":"qt","link":"#qt","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"终端操作","slug":"终端操作","link":"#终端操作","children":[{"level":2,"title":"ping","slug":"ping","link":"#ping","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.11,"words":334},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Platform/Multi/QT（Cpp）/05. 功能实现类/终端操作.md","autoDesc":true}');export{E as comp,B as data};

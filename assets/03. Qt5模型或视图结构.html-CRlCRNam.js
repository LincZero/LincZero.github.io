import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,a as s}from"./app-Dtl9Pch1.js";const t={},l=s(`<h1 id="qt" tabindex="-1"><a class="header-anchor" href="#qt"><span>Qt</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="qt5模型或视图结构" tabindex="-1"><a class="header-anchor" href="#qt5模型或视图结构"><span>Qt5模型或视图结构</span></a></h1><p>（参自《Qt5开发及实例》（第4版）第8章 - P214）</p><h2 id="mvc设计模式-与-interview" tabindex="-1"><a class="header-anchor" href="#mvc设计模式-与-interview"><span>MVC设计模式 与 InterView</span></a></h2><h3 id="mvc设计模式" tabindex="-1"><a class="header-anchor" href="#mvc设计模式"><span>MVC设计模式</span></a></h3><ul><li><p>简概：是起源于Smalltalk的一种与用户界面相关的设计模式，可以有效分离数据和用户界面（类似于Vue框架？）</p></li><li><p>构成：<code>MVC设计模式</code>包括三个元素</p><ul><li>表示数据的模型（<em>Model</em>）</li><li>表示用户界面的视图（<em>View</em>）</li><li>用户在界面上操作的控制器（<em>Controller</em>）</li></ul></li></ul><h3 id="模型-视图结构" tabindex="-1"><a class="header-anchor" href="#模型-视图结构"><span>模型/视图结构</span></a></h3><ul><li><p>简概：与MVC设计模式类似，Qt引入了模型/视图结构用于完成数据与界面的分离，即<code>InterView框架</code></p></li><li><p>区别</p><ul><li>Qt的InterView框架把视图和控制器部件结合在一起，使得框架更加简洁</li><li>同时引入了代理，通过代理，能自定义数据条目的显示和编辑方式</li></ul></li><li><p>构成：<code>模型/视图结构</code>分为三个部分</p><ul><li>模型（<em>Model</em>）</li><li>视图（<em>View</em>）</li><li>代理（<em>Delegate</em>）</li></ul></li><li><p>模型/视图结构与关系</p><ul><li><p>数据发生改变时，模型发出信号通知视图</p></li><li><p>用户对界面进行操作，视图发出信号</p></li><li><p>代理发出信号告知模型和视图编辑器目前的状态</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
数据<span class="token arrow operator">---</span>模型<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">Redering 反馈</span><span class="token arrow operator">--&gt;</span></span>视图
模型<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">编辑</span><span class="token arrow operator">---</span></span>a<span class="token text string">(代理)</span><span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">Rendering</span><span class="token arrow operator">---</span></span>视图
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h2><h3 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念"><span>基本概念</span></a></h3><blockquote><h4 id="模型-model" tabindex="-1"><a class="header-anchor" href="#模型-model"><span>模型（<em>Model</em>）</span></a></h4></blockquote><p>InterView框架中所有模型都基于抽象基类<code>QAbstractItemModel</code></p><p>Inherited By: QAbstractListModel, QAbstractProxyModel, QAbstractTableModel, QConcatenateTablesProxyModel, QDirModel, QFileSystemModel, QStandardItemModel</p><p>继承树</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
p<span class="token text string">[QAbstractItemModel]</span>
p<span class="token arrow operator">--&gt;</span>QProxyModel<span class="token text string">(QProxyModel)</span>
p<span class="token arrow operator">--&gt;</span>QAbstractListModel<span class="token arrow operator">--&gt;</span>列表模型<span class="token arrow operator">---</span>如QStringListModel
p<span class="token arrow operator">--&gt;</span>QAbstractTableModel<span class="token arrow operator">--&gt;</span>表格模型<span class="token arrow operator">---</span>如QSqlQueryModel
p<span class="token arrow operator">--&gt;</span>QAbstractProxyModel<span class="token arrow operator">---</span>代理模型抽象类
p<span class="token arrow operator">--&gt;</span>QDirModel<span class="token arrow operator">---</span>文件和目录的存储模型
p<span class="token arrow operator">--&gt;</span>QFileSystemModel<span class="token arrow operator">---</span>文件系统模型
p<span class="token arrow operator">--&gt;</span>QHelpContentModel<span class="token text string">(QHelpContentModel)</span>
p<span class="token arrow operator">--&gt;</span>QStandardItemModel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="视图-view" tabindex="-1"><a class="header-anchor" href="#视图-view"><span>视图（<em>View</em>）</span></a></h4></blockquote><p>InterView框架中所有视图都基于抽象基类<code>QAbstractItemView</code></p><p>Inherited By：QColumnView, QHeaderView, QListView, QTableView, QTreeView</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
p<span class="token text string">[QAbstractItemView]</span>
p<span class="token arrow operator">--&gt;</span>QColumnView<span class="token punctuation">;</span>class QColumnView red
p<span class="token arrow operator">--&gt;</span>QHeaderView
p<span class="token arrow operator">--&gt;</span>QListView<span class="token punctuation">;</span>class QListView red
	QListView<span class="token arrow operator">--&gt;</span>QUndoView<span class="token punctuation">;</span>class QUndoView red
	QListView<span class="token arrow operator">--&gt;</span>QListWidget<span class="token arrow operator">-.-</span>z<span class="token punctuation">;</span>class QListWidget blue
p<span class="token arrow operator">--&gt;</span>QTableView<span class="token arrow operator">--&gt;</span>QTableWidget<span class="token arrow operator">-.-</span>z<span class="token punctuation">;</span>class QTableView red<span class="token punctuation">;</span>class QTableWidget blue
p<span class="token arrow operator">--&gt;</span>QTreeView<span class="token arrow operator">--&gt;</span>QTreeWidget<span class="token arrow operator">-.-</span>z<span class="token punctuation">;</span>class QTreeView red<span class="token punctuation">;</span>class QTreeWidget blue
z<span class="token text string">(实际已经包括了数据__是模型/视图继承在一起的类)</span><span class="token punctuation">;</span>class z blue

<span class="token keyword">classDef</span> red <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f9f<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>4px</span><span class="token punctuation">;</span>
<span class="token keyword">classDef</span> blue <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#6ab7f5<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>4px</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>图例：红色表示<code>项目视图 Item Views(Model-Based)</code>，蓝色表示<code>项目控件 Item Widgets(Item-Based)</code></p><blockquote><h4 id="代理-delegate" tabindex="-1"><a class="header-anchor" href="#代理-delegate"><span>代理（<em>Delegate</em>）</span></a></h4></blockquote><p>InterView框架中所有代理都基于抽象类<code>QAbstractItemDelegate</code></p><p>Inherited By：QItemDelegate、QStyledItemDelegate</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
p<span class="token text string">[QAbstractItemDelegate]</span>
p<span class="token arrow operator">--&gt;</span>QItemDelegate<span class="token arrow operator">--&gt;</span>QSqlRelationalDelegate<span class="token arrow operator">---</span>表示数据库中关系代理
p<span class="token arrow operator">--&gt;</span>QStyledItemDelegate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h4></blockquote><p>QStandardItemModel、QDirModel、QStringListModel、QColumnView、QHeaderView、QListView、QTableView、QTreeView</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &quot;mainwindow.h&quot;
#include &lt;QApplication&gt;
#include &lt;QAbstractItemModel&gt;
#include &lt;QAbstractItemView&gt;
#include &lt;QItemSelectionModel&gt;
#include &lt;QDirModel&gt;
#include &lt;QTreeView&gt;
#include &lt;QListView&gt;
#include &lt;QTableView&gt;
#include &lt;QSplitter&gt;
int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    QDirModel model;											// 新建一个QDirModel对象，还可以设置过滤器
    // QDirModel类继承自QAbstractItemModel类，为访问本地文件系统提供数据模型提供新建、删除、创建目录等一系列与文件操作相关的函数
    
    /* 新建三种不同的View对象，以便文件目录可以以三种不同的方式显示 */
    QTreeView tree;
    QListView list;
    QTableView table;

    /* 设置视图/模型 */
    tree.setModel(&amp;model);										// 设置View对象的Model
    list.setModel(&amp;model);
    table.setModel(&amp;model);

    /* 设置视图的选择方式 */
    tree.setSelectionMode(QAbstractItemView::MultiSelection);	// 调用setModel(QAbstracItemView::MultiSelection)设置
    list.setSelectionModel(tree.selectionModel());				// 设置QListView对象与QTreeView对象使用相同的选择模型
    table.setSelectionModel(tree.selectionModel());				// 设置TableView对象与QTreeView对象使用相同的选择模型
    /* QTreeView对象的选择方式为多选，提供了五种选择模式。媒体值：
    - QAbstractItemView::SingleSelection
    - QAbstractItemView::ContiguousSelection
    - QAbstractItemView::ExtendedSelection
    - QAbstractItemView::MultiSelection
    - QAbstractItemView::NoSelection

    /* 信号和槽 */
    QObject::connect(&amp;tree,SIGNAL(doubleClicked(QModelIndex)),&amp;list,
                           SLOT(setRootIndex(QModelIndex)));
    QObject::connect(&amp;tree,SIGNAL(doubleClicked(QModelIndex)),&amp;table,
                           SLOT(setRootIndex(QModelIndex)));
    // 为实现双击QTreeView对象的某个目录时，QLestView对象和QTableView对象中显示此选定目录下的所有文件和目录

    /* 布局 */
    QSplitter *splitter = new QSplitter;
    splitter-&gt;addWidget(&amp;tree);
    splitter-&gt;addWidget(&amp;list);
    splitter-&gt;addWidget(&amp;table);
    splitter-&gt;setWindowTitle(QObject::tr(&quot;Model/View&quot;));
    splitter-&gt;show();

    //MainWindow w;
    //w.show();

    return a.exec();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模型-model-1" tabindex="-1"><a class="header-anchor" href="#模型-model-1"><span>模型（<em>Model</em>）</span></a></h2><p>自定义模型：可以通过继承<code>QAbstractItemModel</code>或<code>QAbstractListModel</code>和<code>QAbstractTableModel</code>实现</p><h2 id="视图-view-1" tabindex="-1"><a class="header-anchor" href="#视图-view-1"><span>视图（<em>View</em>）</span></a></h2><h2 id="代理-delegate-1" tabindex="-1"><a class="header-anchor" href="#代理-delegate-1"><span>代理（<em>Delegate</em>）</span></a></h2>`,32),i=[l];function r(o,d){return a(),n("div",null,i)}const m=e(t,[["render",r],["__file","03. Qt5模型或视图结构.html.vue"]]),u=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Multi/QT%EF%BC%88Cpp%EF%BC%89/02.%20QtGUI%E7%B1%BB/01.%20Widget/02.%20%E6%8E%A7%E4%BB%B6%E7%B1%BB/03.%20Qt5%E6%A8%A1%E5%9E%8B%E6%88%96%E8%A7%86%E5%9B%BE%E7%BB%93%E6%9E%84.html","title":"Qt","lang":"zh-CN","frontmatter":{"description":"Qt 目录 Qt5模型或视图结构 （参自《Qt5开发及实例》（第4版）第8章 - P214） MVC设计模式 与 InterView MVC设计模式 简概：是起源于Smalltalk的一种与用户界面相关的设计模式，可以有效分离数据和用户界面（类似于Vue框架？） 构成：MVC设计模式包括三个元素 表示数据的模型（Model） 表示用户界面的视图（Vie...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Multi/QT%EF%BC%88Cpp%EF%BC%89/02.%20QtGUI%E7%B1%BB/01.%20Widget/02.%20%E6%8E%A7%E4%BB%B6%E7%B1%BB/03.%20Qt5%E6%A8%A1%E5%9E%8B%E6%88%96%E8%A7%86%E5%9B%BE%E7%BB%93%E6%9E%84.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Qt"}],["meta",{"property":"og:description","content":"Qt 目录 Qt5模型或视图结构 （参自《Qt5开发及实例》（第4版）第8章 - P214） MVC设计模式 与 InterView MVC设计模式 简概：是起源于Smalltalk的一种与用户界面相关的设计模式，可以有效分离数据和用户界面（类似于Vue框架？） 构成：MVC设计模式包括三个元素 表示数据的模型（Model） 表示用户界面的视图（Vie..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Qt\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"Qt","slug":"qt","link":"#qt","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"Qt5模型或视图结构","slug":"qt5模型或视图结构","link":"#qt5模型或视图结构","children":[{"level":2,"title":"MVC设计模式 与 InterView","slug":"mvc设计模式-与-interview","link":"#mvc设计模式-与-interview","children":[{"level":3,"title":"MVC设计模式","slug":"mvc设计模式","link":"#mvc设计模式","children":[]},{"level":3,"title":"模型/视图结构","slug":"模型-视图结构","link":"#模型-视图结构","children":[]}]},{"level":2,"title":"简概","slug":"简概","link":"#简概","children":[{"level":3,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[]}]},{"level":2,"title":"模型（Model）","slug":"模型-model-1","link":"#模型-model-1","children":[]},{"level":2,"title":"视图（View）","slug":"视图-view-1","link":"#视图-view-1","children":[]},{"level":2,"title":"代理（Delegate）","slug":"代理-delegate-1","link":"#代理-delegate-1","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.34,"words":1001},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Platform/Multi/QT（Cpp）/02. QtGUI类/01. Widget/02. 控件类/03. Qt5模型或视图结构.md","autoDesc":true}');export{m as comp,u as data};

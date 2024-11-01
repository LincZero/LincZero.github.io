import{_ as i,c as o,b as e,a,d as t,o as l,r as d}from"./app-DyeLIyox.js";const c="/assets/image-20220523122936511-DkdgO7rA.png",p={};function u(r,n){const s=d("Mermaid");return l(),o("div",null,[n[0]||(n[0]=e('<h1 id="pyqt-node-editor" tabindex="-1"><a class="header-anchor" href="#pyqt-node-editor"><span>PyQt_Node_Editor</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="类的实现与设计" tabindex="-1"><a class="header-anchor" href="#类的实现与设计"><span>类的实现与设计</span></a></h1><h2 id="节点编辑器实现" tabindex="-1"><a class="header-anchor" href="#节点编辑器实现"><span>节点编辑器实现</span></a></h2><h3 id="使用原理" tabindex="-1"><a class="header-anchor" href="#使用原理"><span>使用原理</span></a></h3><p><img src="'+c+`" alt="image-20220523122936511" loading="lazy"></p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>ads::CDockWidget* dockWidget = new ads::CDockWidget(i.value());
dockWidget-&gt;setWidget(widExport);
menuView-&gt;addAction(dockWidget-&gt;toggleViewAction());
m_DockManager-&gt;addDockWidget(ads::TopDockWidgetArea, dockWidget);

// ——————————————————————————————————————————————————————————————————————————————
// ——————————————————————————————————————————————————————————————————————————————

/** CDockWidget原理 */
class ADS_EXPORT CDockWidget : public QFrame
{
private:
    DockWidgetPrivate* d;  // 用来存储QWidget的东西
public:
    CDockWidget(const QString &amp;title, QWidget* parent = 0);
    void setWidget(QWidget* widget, eInsertMode InsertMode = AutoScrollArea);
...
}

/** DockWidgetPrivate原理（DockWidget.cpp中定义） */
struct DockWidgetPrivate
{
    CDockWidget* _this = nullptr;  // 用来存储QWidget的东西
    ...
}

/** CDockManager原理 */
class ADS_EXPORT CDockManager : public CDockContainerWidget
{
private:
    QMap&lt;QString, CDockWidget*&gt; DockWidgetsMap;
public:
    CDockAreaWidget* addDockWidget(DockWidgetArea area, CDockWidget* Dockwidget,
                                   CDockAreaWidget* DockAreaWidget = nullptr){
        d-&gt;DockWidgetsMap.insert(Dockwidget-&gt;objectName(), Dockwidget);
    }
...
}

/** DockManagerPrivate原理 (DockManager.cpp中定义) */
struct DockManagerPrivate
{
    CDockManager* _this;
    QMap&lt;QString, CDockWidget*&gt; DockWidgetsMap;  // 存储QDockWidget的容器
    CDockWidget* CentralWidget = nullptr;
    ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="qt类包含关系" tabindex="-1"><a class="header-anchor" href="#qt类包含关系"><span>QT类包含关系</span></a></h3>`,8)),a(s,{id:"mermaid-22",code:"eJxLL0osyFAIceIKDM9MSU8t0dV92jH76e5dT3tan05YratrF+gOUpGZXByWmVpOWFVwcmpeKhcqV1dPIbDk6fqdLzYufLZgooIeuqHoynEa7lmSmmuIX9qYJMOMuAAaO2/l"}),n[1]||(n[1]=e(`<blockquote><p>补充：QGraphicsScene和QGraphicsView的关系</p><p>后者相当于摄像机，前者有多个后者，前者也能调用后者</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>self<span class="token punctuation">.</span>node<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>grScene<span class="token punctuation">.</span>views<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h3 id="类包含关系" tabindex="-1"><a class="header-anchor" href="#类包含关系"><span>类包含关系</span></a></h3><p>包含关系</p>`,3)),a(s,{id:"mermaid-38",code:"eJxLL0osyFAIceLiKi5NgnACwzNT0lNLuDj98lNSXVMyS/KLwvNSuFKBGKHGHURlJhcHJ6fmpXIpAAGYpav7tGP20927nva0Pp2wWuFZT/vLSR0vFq2G8HV17QJdfFG1gozFYq5nSWquEdhcV6BjSDEWpB6fqYZgU0F+I8VUkHpcpoZlppZzcSIpBgvgcYIxF2dwfnJ2aglJwQXWATEWPRQVdPUUAkOert/5YuPCZwsmohukoKeHYhTYfVxcKPGL6hSg1ZDowa8Gw0xIItBTeNox/cXCFVDbIRyQaxYCnaJrBw5LolSC4xLdswQDDWw+ybrAdoH9S0gpMGwgccEFAIkIdXI="}),n[2]||(n[2]=t("h3",{id:"uml",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#uml"},[t("span",null,"UML")])],-1)),a(s,{id:"mermaid-42",code:"eJxtUstOwkAUXTNf0bBSSBe6NIaNEDdqYkh0YYxpaION0pK26IKQKD6CCqJoYhRCNEYxMeLKByDwMXZoP8M7M+XV2kVzX3POmTM3ti3oelgW4pqQQDThllRRioiyoWqriphGHHz2x5eVbdAwiHNl3GriSrN3+/67t2+fZqFFgk4DZZCDsRxenNeE5KYc01dkaddBqR3jcoehsLh3VTDbFTiMS3m79oyLl9bdodk8M1ufE5OANiaF4/mQG3iGM3/uozFJkRD9c7M8755BrtyNM5cyFmQAcKRTnDTysRsiX1ABEfoatw6hJMb7IZOOczf2wwvVyvjVcX4mzeNJn4O36x2rXbcP8kBlvZ1QoJFngBHmLxDKSjJlOOSalFB3JJj2BdWUMayzt9HV2JZk0K7dvcblKiuY7QJwMQoC7tZKal6p4zIG6qIUkjS61d75Ey4+AlsE7AlwxCTiB53wGEKr/zjixRtwEdhBh6yZL6gbgmZssHuRd1HEYTIwJ4PISbcCUvPyezgck8a3b3TTAgBLLaNeksy527BNqfpG+Kf9sJwh/5Sf1mFzmyWr/I3zR/jiFaE/rNdjmw=="}),n[3]||(n[3]=e(`<h3 id="容器管理" tabindex="-1"><a class="header-anchor" href="#容器管理"><span>容器管理</span></a></h3><p>对象树容器</p><p>对容器的直接管理一览</p><p>（宗旨——尽可能不要让同一个容器被多个类影响，当然跨对象间接影响可以被允许）</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># Scene::nodes[]，被Node管理</span>
<span class="token comment"># Scene::edges[]，被Edge管理</span>
<span class="token keyword">def</span> <span class="token function">addNode</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> node<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token triple-quoted-string string">&quot;&quot;&quot; 填充node列表
	方法被Node调用，间接被Scene、View、Window调用
	&quot;&quot;&quot;</span>
	<span class="token keyword">pass</span>

<span class="token keyword">def</span> <span class="token function">removeNode</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> node<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; 删除node列表中的元素
    方法被Node调用，间接被Scene、View、Window调用
    &quot;&quot;&quot;</span>
    <span class="token keyword">pass</span>

<span class="token keyword">def</span> <span class="token function">addEdge</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> edge<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; 填充edge列表
    方法被Edge调用，间接被Scene、View、Window调用
    &quot;&quot;&quot;</span>
    <span class="token keyword">pass</span>

<span class="token keyword">def</span> <span class="token function">removeEdge</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> edge<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; 删除edge列表中的元素
    方法被Edge调用，间接被Scene、View、Window调用
    &quot;&quot;&quot;</span>
    <span class="token keyword">pass</span>

<span class="token comment"># Node::inputs[]，不用被Socket管理，被自己管理</span>
<span class="token comment"># Node::outputs[]，不用被Socket管理，被自己管理</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot; 均被Node管理。这里没必要被Socket管理，这里下层不影响上层，除非你Socket可以自由增加或减少 &quot;&quot;&quot;</span>

<span class="token comment"># Socket::edges[]，被Edges管理</span>
<span class="token comment"># TODO：应该要隐藏容器的</span>
<span class="token keyword">def</span> <span class="token function">addEdge</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> edge<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    方法被Edge调用
    &quot;&quot;&quot;</span>
    <span class="token keyword">pass</span>

<span class="token keyword">def</span> <span class="token function">removeEdge</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> edge<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    方法被Edge调用
    &quot;&quot;&quot;</span>
    <span class="token keyword">pass</span>

<span class="token keyword">def</span> <span class="token function">_delete_all_edges</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    被self.remove调用
    multi_edges=False时addEdge也会调用
    &quot;&quot;&quot;</span>
    <span class="token keyword">pass</span>

<span class="token comment"># Edge::start_socket*</span>
<span class="token comment"># Edge::end_socket*</span>
<span class="token comment"># Edge::updatePosions，Node移动时会调用</span>
<span class="token decorator annotation punctuation">@start_socket<span class="token punctuation">.</span>setter</span>
<span class="token keyword">def</span> <span class="token function">start_socket</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; 方法被Edge、View调用 &quot;&quot;&quot;</span>
    <span class="token keyword">pass</span>

<span class="token decorator annotation punctuation">@end_socket<span class="token punctuation">.</span>setter</span>
<span class="token keyword">def</span> <span class="token function">end_socket</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; 方法Edge、View调用 &quot;&quot;&quot;</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建类" tabindex="-1"><a class="header-anchor" href="#创建类"><span>创建类</span></a></h2><h3 id="node系列" tabindex="-1"><a class="header-anchor" href="#node系列"><span>node系列</span></a></h3><h4 id="main" tabindex="-1"><a class="header-anchor" href="#main"><span>main</span></a></h4><p>node_editor_wnd.py</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">NodeEditorWnd</span><span class="token punctuation">(</span>QWidget<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; 起点
    show的对象
    &quot;&quot;&quot;</span>
    self<span class="token punctuation">.</span>scene <span class="token operator">=</span> Scene<span class="token punctuation">(</span><span class="token punctuation">)</span>
    self<span class="token punctuation">.</span>grScene <span class="token operator">=</span> self<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>grScene
    self<span class="token punctuation">.</span>view <span class="token operator">=</span> QDMGraphicsView<span class="token punctuation">(</span>self<span class="token punctuation">.</span>grScene<span class="token punctuation">,</span> self<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>node_graphics_view.py</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">QDMGraphicsView</span><span class="token punctuation">(</span>QGraphicsView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; 视图
    QDMGraphicsView(QGraphicsView)
    &quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="node-scene" tabindex="-1"><a class="header-anchor" href="#node-scene"><span>node_scene</span></a></h4><p>node_scene.py</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Scene</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; 包含节点的场景
    包含成员
        nodes和edges列表，由Node子对象去填充
        GrScene
        场景大小
    &quot;&quot;&quot;</span>
    
    self<span class="token punctuation">.</span>grScene <span class="token operator">=</span> QDMGraphicsScene<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>grScene<span class="token punctuation">.</span>setGrScene<span class="token punctuation">(</span>self<span class="token punctuation">.</span>scene_width<span class="token punctuation">,</span> self<span class="token punctuation">.</span>scene_height<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>node_graphics_scene.py</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">QDMGraphicsScene</span><span class="token punctuation">(</span>QGraphicsScene<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; 场景
    &quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="node-node" tabindex="-1"><a class="header-anchor" href="#node-node"><span>node_node</span></a></h4><p>node_node.py</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Node</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; 创建节点的工厂
    包含成员
        inputs和outputs
        grNode
    包含方法
        返回socket的位置
        设置节点位置
    父对象操作
    	对scene的Node列表进行填充
    &quot;&quot;&quot;</span>
    
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> scene<span class="token punctuation">,</span> title<span class="token operator">=</span><span class="token string">&quot;Undefined Node&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    	self<span class="token punctuation">.</span>grNode <span class="token operator">=</span> QDMGraphicsNode<span class="token punctuation">(</span>self<span class="token punctuation">,</span> self<span class="token punctuation">.</span>title<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>node_graphics_node.py</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">QDMGraphicsNode</span><span class="token punctuation">(</span>QGraphicsItem<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; 节点
    包含
        节点属性
    补充
        需要注意QGraphicsItem是抽象类
        virtual QRectF boundingRect() const = 0
        virtual void paint(QPainter *painter, const QStyleOptionGraphicsIte, *option, QWidget *widget = nullptr) = 0
    &quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="node-socket" tabindex="-1"><a class="header-anchor" href="#node-socket"><span>node_socket</span></a></h4><p>node_socket.py</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Socket</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; 创建Socket的工厂，包括输入和输出
    包含
        位置
    父对象操作
        这次没有，父对象自己操作了
    &quot;&quot;&quot;</span>
    
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> node<span class="token punctuation">,</span> index<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> position<span class="token operator">=</span>LEFT_TOP<span class="token punctuation">)</span><span class="token punctuation">:</span>
    	self<span class="token punctuation">.</span>grSocket <span class="token operator">=</span> QDMGraphicsSocket<span class="token punctuation">(</span>self<span class="token punctuation">.</span>node<span class="token punctuation">.</span>grNode<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>node_graphics_socket.py</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">QDMGraphicsSocket</span><span class="token punctuation">(</span>QGraphicsItem<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; 节点的IO口，以小圆点的形式表现
    &quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="node-edge" tabindex="-1"><a class="header-anchor" href="#node-edge"><span>node_edge</span></a></h4><p>node_edge.py</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Edge</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; 创建节点的工厂，通过type决定创建哪一种线
    包含成员
        开始的socket和结束的socket
        grEdge
    父对象操作
        对scene的Node列表进行填充
        对socket的edge进行赋值（当前只能一对一）
    &quot;&quot;&quot;</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> scene<span class="token punctuation">,</span> start_socket<span class="token punctuation">,</span> end_socket<span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token operator">=</span>EDGE_TYPE_DIRECT<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>scene <span class="token operator">=</span> scene
        self<span class="token punctuation">.</span>grEdge <span class="token operator">=</span> QDMGraphicsEdgeDirect<span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token keyword">if</span> <span class="token builtin">type</span> <span class="token operator">==</span> EDGE_TYPE_DIRECT <span class="token keyword">else</span> QDMGraphicsEdgeBezier<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>grScene<span class="token punctuation">.</span>addItem<span class="token punctuation">(</span>self<span class="token punctuation">.</span>grEdge<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>node_graphics_edge.py</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">QDMGraphicsEdge</span><span class="token punctuation">(</span>QGraphicsLineItem<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; 连接socket的边
    &quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一些冲突" tabindex="-1"><a class="header-anchor" href="#一些冲突"><span>一些冲突</span></a></h2><h3 id="关于循环依赖" tabindex="-1"><a class="header-anchor" href="#关于循环依赖"><span>关于循环依赖</span></a></h3><blockquote><p>这里的循环依赖很多，Python是弱类型，循环依赖要好解决得多，不像C++。</p><p>C++如果要循环依赖还需变量提前声明，包含指针只需要声明变量即可。 创建包含的那个类include，反向包含指针的类则向前声明再包含指针。</p><p>C++循环依赖也很常见，像QT的对象树需要传回父指针也是一种</p></blockquote><h3 id="romove函数冲突" tabindex="-1"><a class="header-anchor" href="#romove函数冲突"><span>romove函数冲突</span></a></h3><p>node和edge都有remove</p><p>多选以后一起调用remove就有冲突了</p><p>甚至都不用多选，你删调一个节点，edge remove，他要删除两边节点的edge信息的</p><ul><li>node remove 调用 edge remove</li><li>edge remove 不用调用 node remove</li><li>后者要做个 try catch pass</li></ul>`,40))])}const k=i(p,[["render",u],["__file","02. 类的实现与设计.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Platform/Multi/QT%EF%BC%88Cpp%EF%BC%89/05.%20%E5%8A%9F%E8%83%BD%E5%AE%9E%E7%8E%B0%E7%B1%BB/Node_Editor/02.%20%E7%B1%BB%E7%9A%84%E5%AE%9E%E7%8E%B0%E4%B8%8E%E8%AE%BE%E8%AE%A1.html","title":"PyQt_Node_Editor","lang":"zh-CN","frontmatter":{"description":"PyQt_Node_Editor 目录 类的实现与设计 节点编辑器实现 使用原理 image-20220523122936511 QT类包含关系 补充：QGraphicsScene和QGraphicsView的关系 后者相当于摄像机，前者有多个后者，前者也能调用后者 类包含关系 包含关系 UML 容器管理 对象树容器 对容器的直接管理一览 （宗旨——尽...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Platform/Multi/QT%EF%BC%88Cpp%EF%BC%89/05.%20%E5%8A%9F%E8%83%BD%E5%AE%9E%E7%8E%B0%E7%B1%BB/Node_Editor/02.%20%E7%B1%BB%E7%9A%84%E5%AE%9E%E7%8E%B0%E4%B8%8E%E8%AE%BE%E8%AE%A1.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"PyQt_Node_Editor"}],["meta",{"property":"og:description","content":"PyQt_Node_Editor 目录 类的实现与设计 节点编辑器实现 使用原理 image-20220523122936511 QT类包含关系 补充：QGraphicsScene和QGraphicsView的关系 后者相当于摄像机，前者有多个后者，前者也能调用后者 类包含关系 包含关系 UML 容器管理 对象树容器 对容器的直接管理一览 （宗旨——尽..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PyQt_Node_Editor\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"PyQt_Node_Editor","slug":"pyqt-node-editor","link":"#pyqt-node-editor","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"类的实现与设计","slug":"类的实现与设计","link":"#类的实现与设计","children":[{"level":2,"title":"节点编辑器实现","slug":"节点编辑器实现","link":"#节点编辑器实现","children":[{"level":3,"title":"使用原理","slug":"使用原理","link":"#使用原理","children":[]},{"level":3,"title":"QT类包含关系","slug":"qt类包含关系","link":"#qt类包含关系","children":[]},{"level":3,"title":"类包含关系","slug":"类包含关系","link":"#类包含关系","children":[]},{"level":3,"title":"UML","slug":"uml","link":"#uml","children":[]},{"level":3,"title":"容器管理","slug":"容器管理","link":"#容器管理","children":[]}]},{"level":2,"title":"创建类","slug":"创建类","link":"#创建类","children":[{"level":3,"title":"node系列","slug":"node系列","link":"#node系列","children":[{"level":4,"title":"main","slug":"main","link":"#main","children":[]},{"level":4,"title":"node_scene","slug":"node-scene","link":"#node-scene","children":[]},{"level":4,"title":"node_node","slug":"node-node","link":"#node-node","children":[]},{"level":4,"title":"node_socket","slug":"node-socket","link":"#node-socket","children":[]},{"level":4,"title":"node_edge","slug":"node-edge","link":"#node-edge","children":[]}]}]},{"level":2,"title":"一些冲突","slug":"一些冲突","link":"#一些冲突","children":[{"level":3,"title":"关于循环依赖","slug":"关于循环依赖","link":"#关于循环依赖","children":[]},{"level":3,"title":"romove函数冲突","slug":"romove函数冲突","link":"#romove函数冲突","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":4.7,"words":1409},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/Multi/QT（Cpp）/05. 功能实现类/Node_Editor/02. 类的实现与设计.md","excerpt":"\\n<h1>目录</h1>\\n<h1>类的实现与设计</h1>\\n<h2>节点编辑器实现</h2>\\n<h3>使用原理</h3>\\n<p></p>\\n<div class=\\"language-c++\\" data-ext=\\"c++\\" data-title=\\"c++\\"><pre class=\\"language-c++\\"><code>ads::CDockWidget* dockWidget = new ads::CDockWidget(i.value());\\ndockWidget-&gt;setWidget(widExport);\\nmenuView-&gt;addAction(dockWidget-&gt;toggleViewAction());\\nm_DockManager-&gt;addDockWidget(ads::TopDockWidgetArea, dockWidget);\\n\\n// ——————————————————————————————————————————————————————————————————————————————\\n// ——————————————————————————————————————————————————————————————————————————————\\n\\n/** CDockWidget原理 */\\nclass ADS_EXPORT CDockWidget : public QFrame\\n{\\nprivate:\\n    DockWidgetPrivate* d;  // 用来存储QWidget的东西\\npublic:\\n    CDockWidget(const QString &amp;title, QWidget* parent = 0);\\n    void setWidget(QWidget* widget, eInsertMode InsertMode = AutoScrollArea);\\n...\\n}\\n\\n/** DockWidgetPrivate原理（DockWidget.cpp中定义） */\\nstruct DockWidgetPrivate\\n{\\n    CDockWidget* _this = nullptr;  // 用来存储QWidget的东西\\n    ...\\n}\\n\\n/** CDockManager原理 */\\nclass ADS_EXPORT CDockManager : public CDockContainerWidget\\n{\\nprivate:\\n    QMap&lt;QString, CDockWidget*&gt; DockWidgetsMap;\\npublic:\\n    CDockAreaWidget* addDockWidget(DockWidgetArea area, CDockWidget* Dockwidget,\\n                                   CDockAreaWidget* DockAreaWidget = nullptr){\\n        d-&gt;DockWidgetsMap.insert(Dockwidget-&gt;objectName(), Dockwidget);\\n    }\\n...\\n}\\n\\n/** DockManagerPrivate原理 (DockManager.cpp中定义) */\\nstruct DockManagerPrivate\\n{\\n    CDockManager* _this;\\n    QMap&lt;QString, CDockWidget*&gt; DockWidgetsMap;  // 存储QDockWidget的容器\\n    CDockWidget* CentralWidget = nullptr;\\n    ...\\n}\\n</code></pre></div>","autoDesc":true}');export{k as comp,m as data};

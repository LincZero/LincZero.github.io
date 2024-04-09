import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,a as l}from"./app-IRYUHD7s.js";const a={},d=l(`<h1 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式"><span>设计模式</span></a></h1><p>大话设计模式-职责链模式</p><p>https://localhost.blog.csdn.net/article/details/90202435</p><p>大话设计模式-系列文章(共50篇)：</p><p>https://blog.csdn.net/qq_41113081/category_8723350.html</p><h2 id="错题" tabindex="-1"><a class="header-anchor" href="#错题"><span>错题</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>以下哪个模式可以利用一个对象，快速地生成一批对象？（）
抽象工厂模式
单例模式
原型模式.
简单工厂模式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案C。我选D，看错题了，是利用对象生成对象而不是利用类生成对象</p><h3 id="傻逼题" tabindex="-1"><a class="header-anchor" href="#傻逼题"><span>（傻逼题）</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>通过电视机遥控器可以实现对电视机频道进行选择，其实选择电视机频道就是对存放频道的集合进行遍历操作。所以可以使用（ ）模拟电视机遥控器的实现

命令模式
观察者模式
迭代器模式
单例模式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正确答案：C，你的答案：A/B。</p><p>重点是对集合进行遍历操作，遍历操作，遍历操作。</p><p>迭代器模式使用场景：</p><p>1、访问聚合对象的内容不需要暴露其内部表示。2、需要为聚合对象提供多种遍历方式。3、为了遍历不同的聚合结构对象提供统一的接口。</p><p>感觉有点low，评论争议比较大</p><h3 id="访问者模式" tabindex="-1"><a class="header-anchor" href="#访问者模式"><span>访问者模式</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>某高校奖励审批系统可以实现教师奖励和学生奖励的审批(AwardCheck)，如果教师发表论文数超过10篇或者学生论文超过2篇可以评选科研奖，如果教师教学反馈分大于等于90分或者学生平均成绩大于等于90分可以评选成绩优秀奖。奖励审批系统可以使用（）设计该系统，以判断候选人集合中的教师或学生是否符合某种获奖要求。
 
工厂方法模式
访问者模式
模板方法模式
责任链
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正确答案：B，你的答案：D</p><p>学生和老师是两个不同的访问者</p><p>访问者模式是将数据结构与对数据的操作分离开来，适用于数据结构稳定，但数据操作多变的系统，题中对于获取成绩优秀奖的数据结构是稳定的，但访问者有多个，比如学生，老师，所以适用访问者设计模式</p><p>访问者模式实际上就是把数据和对数据的访问解耦，数据的存储是一致的：论文发表数和分数，对数据的访问方式(是否获奖)却不同，因此使用访问者模式。</p><h3 id="几种工厂模式" tabindex="-1"><a class="header-anchor" href="#几种工厂模式"><span>几种工厂模式</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>下面的选项中哪些属于工厂模式()
A
静态工厂模式
B
工厂方法模式
C
抽象工厂模式
D
简单工厂模式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正确答案：BCD，你的答案：ABCD。为什么静态工厂模式不算？</p><p>工厂模式可理解为：当客户获取产品时，工厂模式作为获取产品的接口。</p><p>1、简单工厂模式：由接口直接负责获取产品</p><p>2、工厂方法模式：客户必须清楚地指出想获取哪种产品；由接口的子类负责获取产品</p><p>3、抽象工厂模式：客户不知道其想获取哪种产品；由接口中判断调用哪个子类，通过子类获取产品。</p><h2 id="不确定" tabindex="-1"><a class="header-anchor" href="#不确定"><span>不确定</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>现在大多数软件都有撤销(Undo)的功能，快捷键一般都是Ctrl+Z。这些软件可能使用了（）模式来进行。

备忘录模式
访问者模式
模板方法模式
责任链
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>购物车设计：顾客在超市中将选择的商品，如苹果、图书等放在购物车中，然后到收银员处付款。在购物过程中，顾客需要对这些商品进行访问，以便确认这些商品的质量，之后收银员计算价格时也需要访问购物车内顾客所选择的商品。购物车设计可以使用（）来设计该购物过程。
A
工厂方法模式
B
访问者模式
C
模板方法模式
D
责任链
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我B</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>如果让你来实现前端的MVVM框架，View层需要支持不同终端的不同交互，下面哪些设计模式不太适合用来实现这个需求（）
单例模式
观察者模式
适配器模式
代理模式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>在现实生活中，居民身份证号码具有唯一性，居民可以申请身份证号码或补办身份证号码（还是使用原来的身份证号码，不会产生新的号码）。我们可以使用（）来模拟实现居民身份证号码办理。

命令模式
桥接
单例模式
责任链
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>都不像的样子……C。评论都说这题很抽象</p><h2 id="不会" tabindex="-1"><a class="header-anchor" href="#不会"><span>不会</span></a></h2><h3 id="打印池" tabindex="-1"><a class="header-anchor" href="#打印池"><span>打印池</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>打印池在操作系统中是一个用于管理打印任务的应用程序，通过打印池用户可以删除、中止或者改变打印任务的优先级。我们可以使用（）来模拟实现打印池的设计
A
命令模式
B
桥接
C
责任链
D
单例模式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果居然是D</p><p>一个系统只允许存在一个打印池对象，打印池是管理多台打印机的作用，看到池就想享元是不对的</p><h3 id="外观模式" tabindex="-1"><a class="header-anchor" href="#外观模式"><span>外观模式</span></a></h3><p>下列描述中，哪些是外观模式的特点（ ），多选</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>A
对客户端屏蔽了子系统组件
B
实现了子系统与客户端之间的紧耦合关系
C
单个子系统的修改不影响其他子系统
D
子系统类变化时，只需要修改外观类即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ACD，蒙对了</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>以下关于外观模式的叙述中正确是（      ）
A
外观模式符合单一职责原则
B
在外观模式中，一个子系统的外部与内部通信通过统一的外观对象进行
C
在外观模式中，客户类只需要直接与外观对象进行交互
D
外观模式是迪米特法则的一种具体实现
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>BCD蒙对了，不过D是什么东西</p><p>迪米特法则：最小知识原则，一个实体应当尽量少地与其他实体之间发生相互作用，使得系统功能模块相对独立。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>假设一个电源总开关可以控制四盏灯、一个风扇、一台空调和一台电视机的启动和关闭。通过该电源总开关可以同时控制上述所有电器设备，可以使用（) 来模拟设计该系统。
A
外观模式
B
观察者模式
C
迭代器模式
D
单例模式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正确答案：A，你的答案：C</p><p>外观模式（Facade Pattern）隐藏系统的复杂性，并向客户端提供了一个可以访问系统的接口。</p><p>电源总开关是四盏灯、一个风扇、一台空调和一台电视机的外观。有了外观以后，启动和关闭这些电器设备都简化了。</p><p>直接 new 一个总开关。</p><p>在 new 总开关的同时把灯、风扇、空调和电视机都初始化好并且接好线。</p><p>对外暴露方法（打开总开关，关闭总开关）。</p><p>打开总开关（按一下开关键）：打开灯、风扇、空调和电视机</p><p>关闭总开关（按一下开关键）：关闭灯、风扇、空调和电视机</p><h3 id="解释器模式" tabindex="-1"><a class="header-anchor" href="#解释器模式"><span>解释器模式</span></a></h3><h3 id="责任链" tabindex="-1"><a class="header-anchor" href="#责任链"><span><s>责任链</s></span></a></h3><p>解释器重在解释； 装饰器重在扩展； 桥联重在连接不同的东西； 责任链重在<strong>传递请求</strong>，这个Handler传到ConcreteHandler能明显看出是责任链了；</p><h2 id="怪题" tabindex="-1"><a class="header-anchor" href="#怪题"><span>怪题</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> 策略模式的结构中包括三种角色上下文、具体策略和抽象策略。抽象策略角色是一个（ ）
A
类
B
抽象类
C
接口
D
子类
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正确答案：C，你的答案：B</p><p>这个题目有点问题。抽象策略角色，在C++中是抽象类，在Java中是接口</p><h2 id="复习" tabindex="-1"><a class="header-anchor" href="#复习"><span>复习</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> 某网络的IP地址空间为192.168.5.0/24，采用定长子网划分，子网掩码为255.255.255.248，则该网络中的最大子网个数、每个子网内的最大可分配地址个数分别是（）。
A
32，8
B
32，6
C
8，32
D
8，30
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>B。主机需去掉全0和全1</p>`,68),s=[d];function t(r,v){return n(),i("div",null,s)}const p=e(a,[["render",t],["__file","设计模式.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/10.%20%E9%9D%A2%E8%AF%95/%E7%89%9B%E5%AE%A2/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F.html","title":"设计模式","lang":"zh-CN","frontmatter":{"description":"设计模式 大话设计模式-职责链模式 https://localhost.blog.csdn.net/article/details/90202435 大话设计模式-系列文章(共50篇)： https://blog.csdn.net/qq_41113081/category_8723350.html 错题 答案C。我选D，看错题了，是利用对象生成对象而不...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/10.%20%E9%9D%A2%E8%AF%95/%E7%89%9B%E5%AE%A2/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"设计模式"}],["meta",{"property":"og:description","content":"设计模式 大话设计模式-职责链模式 https://localhost.blog.csdn.net/article/details/90202435 大话设计模式-系列文章(共50篇)： https://blog.csdn.net/qq_41113081/category_8723350.html 错题 答案C。我选D，看错题了，是利用对象生成对象而不..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"设计模式","slug":"设计模式","link":"#设计模式","children":[{"level":2,"title":"错题","slug":"错题","link":"#错题","children":[{"level":3,"title":"（傻逼题）","slug":"傻逼题","link":"#傻逼题","children":[]},{"level":3,"title":"访问者模式","slug":"访问者模式","link":"#访问者模式","children":[]},{"level":3,"title":"几种工厂模式","slug":"几种工厂模式","link":"#几种工厂模式","children":[]}]},{"level":2,"title":"不确定","slug":"不确定","link":"#不确定","children":[]},{"level":2,"title":"不会","slug":"不会","link":"#不会","children":[{"level":3,"title":"打印池","slug":"打印池","link":"#打印池","children":[]},{"level":3,"title":"外观模式","slug":"外观模式","link":"#外观模式","children":[]},{"level":3,"title":"解释器模式","slug":"解释器模式","link":"#解释器模式","children":[]},{"level":3,"title":"责任链","slug":"责任链","link":"#责任链","children":[]}]},{"level":2,"title":"怪题","slug":"怪题","link":"#怪题","children":[]},{"level":2,"title":"复习","slug":"复习","link":"#复习","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":6.94,"words":2083},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/10. 面试/牛客/设计模式.md","autoDesc":true}');export{p as comp,m as data};

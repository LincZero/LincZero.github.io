import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as l,c as i,e as n}from"./app-yixEWCFr.js";const t={},a=n(`<h1 id="《c-设计模式》视频-李建忠" tabindex="-1"><a class="header-anchor" href="#《c-设计模式》视频-李建忠"><span>《C++设计模式》视频_李建忠</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><p>[toc]</p><h1 id="单件模式-singleton" tabindex="-1"><a class="header-anchor" href="#单件模式-singleton"><span>单件模式 Singleton</span></a></h1><p>也叫单例模式（菜鸟教程中的叫法）</p><h2 id="所属分类——-对象性能-模式" tabindex="-1"><a class="header-anchor" href="#所属分类——-对象性能-模式"><span>所属分类——“对象性能” 模式</span></a></h2><ul><li>“对象性能” 模式 <ul><li>面向对象很好地解决了 “抽象&quot; 的问题，但是必不可免地要付出一定的代价。 对于通常情况来讲，面向对象的成本大都可以忽略不计。 但是某些情况，面向对象所带来的<strong>成本</strong>必须谨慎处理。</li></ul></li><li>典型模式 <ul><li>单件模式 Singleton</li><li>享元模式 Flyweight</li></ul></li><li>补充：面向对象常见的性能代价 <ul><li>虚函数</li></ul></li></ul><h2 id="动机-motivation" tabindex="-1"><a class="header-anchor" href="#动机-motivation"><span>动机（Motivation）</span></a></h2><h3 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h3><ul><li>在软件系统中，经常有这样一些特殊的类，必须保证它们在系统中只存在一个实例，才能确保它们的逻辑正确性、以及良好的效率</li><li>如何绕过常规的构造器，提供一种机制来保证一个类只有一个实例？</li><li>这应该是类设计者的责任，而不是使用者的责任</li></ul><h3 id="核心-保证一个类仅有一个实例-并提供一个该实例的全局访问点" tabindex="-1"><a class="header-anchor" href="#核心-保证一个类仅有一个实例-并提供一个该实例的全局访问点"><span>核心：保证一个类仅有一个实例，并提供一个该实例的全局访问点</span></a></h3><h3 id="代码体现" tabindex="-1"><a class="header-anchor" href="#代码体现"><span>代码体现</span></a></h3><p>目的是让每一次都返回唯一的那个对象</p><blockquote><h4 id="单例类" tabindex="-1"><a class="header-anchor" href="#单例类"><span>单例类</span></a></h4></blockquote><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class Singleton{
private:								// 让外界不能使用以下的两个构造函数
	Singleton() ;						// 构造函数
	singleton(const Singleton&amp; other);	// 复制构造函数
public:
	static singleton* getInstance();
    static Singleton* m_instance;
};

Singleton* Singleton::m_instance=nullptr;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="版本1-线程非安全" tabindex="-1"><a class="header-anchor" href="#版本1-线程非安全"><span>版本1：线程非安全</span></a></h4><ul><li>存在问题 <ul><li>在多线程中，例如AB两个线程</li><li>A执行完<code>if</code>（判断单例是否存在）还没执行下一行时，B恰好执行到<code>if</code>那行</li><li>这就会产生两个单例</li></ul></li><li>建议 <ul><li>单线程可以用</li></ul></li></ul><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>Singleton* Singleton::getInstance(){
	if(m_instance == nullptr){
		m_instance = new Singleton();
	}
	return m_instance;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="版本2-线程安全-加锁版-cleck-lock" tabindex="-1"><a class="header-anchor" href="#版本2-线程安全-加锁版-cleck-lock"><span>版本2：线程安全 - 加锁版（<em>Cleck Lock</em>）</span></a></h4><ul><li><p>存在问题：</p><ul><li>锁的代价过高</li><li>读的时候根本没必要去锁，性能浪费</li></ul></li><li><p>建议</p><ul><li>可以用，但高并发的话性能损耗大</li></ul></li></ul><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>Singleton* Singleton::getInstance(){
    Lock lock;
	if(m_instance == nullptr){
		m_instance = new Singleton();
	}
	return m_instance;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="版本3-线程安全-双检查锁-double-cleck-lock" tabindex="-1"><a class="header-anchor" href="#版本3-线程安全-双检查锁-double-cleck-lock"><span>版本3：线程安全 - 双检查锁（<em>Double Cleck Lock</em>）</span></a></h4><ul><li><p>存在问题</p><ul><li>由于内存读写reorder不安全，会导致双检查锁失效</li><li>reorder：从汇编指令的角度来看，<code>m_instance = new Singleton();</code>这行代码可以分解成三个步骤 <ul><li>(1) 分配内存</li><li>(2) 调用构造器</li><li>(3) 地址返回值给指针</li><li>但这三步只是理想指令执行顺序，实际情况中<em>有可能</em> 被reorder（重排顺序），顺序变成了 1-3-2</li></ul></li><li>那么假设存在AB两个线程并发生以下情况 <ul><li>当A线程执行<code>m_instance = new Singleton();</code>时被reorder，即按1-3-2顺序执行指令</li><li>当A线程执行完指令3但还没执行指令2时</li><li>B恰好依次执行代码第2行的判断、第8行的return。但此时构造器还未被调用，会出错</li></ul></li></ul></li><li><p>建议</p><ul><li><strong>不要用</strong>，不安全，容易出错</li></ul></li></ul><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>Singleton* Singleton::getInstance(){
	if(m_instance == nullptr){
        Lock lock;
        if(m_instance == nullptr){
			m_instance = new Singleton();
        }
	}
	return m_instance;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="版本4-c-11之后的跨平台实现-volatile关键字" tabindex="-1"><a class="header-anchor" href="#版本4-c-11之后的跨平台实现-volatile关键字"><span>版本4：C++11之后的跨平台实现（<em>volatile</em>关键字）</span></a></h4><ul><li>简概 <ul><li>C++11引入的新函数</li></ul></li><li>功能 <ul><li>原理主要是让编译器不reorder</li></ul></li></ul><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>std::atomic&lt;Singleton*&gt; Singleton::m_instance;
std::mutex Singleton::m_mutex;

Singleton* Singleton::getInstance() {
	singleton* tmp = m_instance.load(std::memory_order_relaxed) ;	// 不让用reorder
	std::atomic_thread_fence(std::memory_order_acquire);			// 获取内存fence
    if(tmp==nullptr){
		std::lock_guard&lt;std: :mutex&gt; lock(m_mutex);					// 锁进程
		tmp = m_instance.load(std::memory_order_relaxed);			// 不让用reorder
        if(tmp==nullptr){
			tmp = new Singleton;									// 此时不会出现reorder
			std::atomic_thread_fence(std::memory_order_release);	// 释放内存fence
            m_instance.store(tmp, std::memory_order_relaxed);		// 解除不让用reorder
		}
	}
	return tmp;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="版本5-c-11的-std-call-once" tabindex="-1"><a class="header-anchor" href="#版本5-c-11的-std-call-once"><span>版本5：C++11的 std::call_once()</span></a></h4><ul><li><p>简概</p><ul><li>C++11引入的新函数，感觉这个函数简直是为单例模式量身定做的</li></ul></li><li><p>功能</p><ul><li>能保证某个函数只被调用一次</li><li>能实现互斥量的功能，且效率上会更高</li><li>与if-else相比，在多线程中使用会更安全</li></ul></li><li><p>原理：</p><ul><li>第二个参数是需要调用的函数名</li><li>第一个参数是一个<code>std::once_flag</code>类型的标记。该标记将决定函数是否执行。 当执行过一次call_once()后，就会把这个标记设置为已调用状态。后续再调用时就会无法调用</li></ul></li><li><p>使用：</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>using namespace std;

std::once_flag g_flag;						// 【标记】这是个标记

class Single
{
private:
    Single(){}
    static Single *m_instance;				// 静态成员变量
    static void CreateInstance()			// 创建实例【只被调用一次】
    {
        m_instance = new Single;
    }
public:
    static Single * Instance()				// 使用实例
    {
        std:call_once(g_flage, CreateInstance);	// 【call_once方法】传入标记、函数名作参
        return m_instance;
    };
}
Single *Single::m_instance = nullptr;		// 初始化为空

// 线程入口函数
void mythread()
{
    cout &lt;&lt; &quot;子线程&quot; &lt;&lt; endl;
    Single *single = Single::Instance();	// 使用单例对象
    return;
}

int main
{
	std::thread mytobj(mythread);
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="版本6-直接使用static的简易版本" tabindex="-1"><a class="header-anchor" href="#版本6-直接使用static的简易版本"><span>版本6：直接使用static的简易版本</span></a></h4><p>C++11中还有一种简单的单例，就是直接使用static。</p><p>C++11中可以保证static变量时多线程安全的，在底层实现了加锁操作，而且由于是static对象，也可以保证对象只生成一次</p><p>但用这种写法的基类可能因使用时操作不当不安全（比如不用static对象，自己又另外创建了一个）</p><h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式"><span>设计模式</span></a></h2><h3 id="模式定义" tabindex="-1"><a class="header-anchor" href="#模式定义"><span>模式定义</span></a></h3><blockquote><p>保证一个类仅有一个实例，并提供一个该实例的全局访问点。</p><p>——《设计模式》GoF</p></blockquote><h3 id="结构-structure" tabindex="-1"><a class="header-anchor" href="#结构-structure"><span>结构（Structure）</span></a></h3><p>[省略]</p><h3 id="要点总结" tabindex="-1"><a class="header-anchor" href="#要点总结"><span>要点总结</span></a></h3><ul><li>Singleton模式中的实例构造器可以设置为protected以允许子类派生。</li><li>Singleton模式一般不要支持拷贝构造函数和Clone接口，因为这有可能导致多个对象实例，与Singleton模式的初衷违背。</li><li>如何实现多线程环境下安全的Singleton？注意对双检查锁的正确实现。</li></ul>`,40),s=[a];function d(c,r){return l(),i("div",null,s)}const v=e(t,[["render",d],["__file","10. 单件模式 Singleton.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/10.%20%E5%8D%95%E4%BB%B6%E6%A8%A1%E5%BC%8F%20Singleton.html","title":"《C++设计模式》视频_李建忠","lang":"zh-CN","frontmatter":{"description":"《C++设计模式》视频_李建忠 目录 [toc] 单件模式 Singleton 也叫单例模式（菜鸟教程中的叫法） 所属分类——“对象性能” 模式 “对象性能” 模式 面向对象很好地解决了 “抽象\\" 的问题，但是必不可免地要付出一定的代价。 对于通常情况来讲，面向对象的成本大都可以忽略不计。 但是某些情况，面向对象所带来的成本必须谨慎处理。 典型模式 单...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/10.%20%E5%8D%95%E4%BB%B6%E6%A8%A1%E5%BC%8F%20Singleton.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"《C++设计模式》视频_李建忠"}],["meta",{"property":"og:description","content":"《C++设计模式》视频_李建忠 目录 [toc] 单件模式 Singleton 也叫单例模式（菜鸟教程中的叫法） 所属分类——“对象性能” 模式 “对象性能” 模式 面向对象很好地解决了 “抽象\\" 的问题，但是必不可免地要付出一定的代价。 对于通常情况来讲，面向对象的成本大都可以忽略不计。 但是某些情况，面向对象所带来的成本必须谨慎处理。 典型模式 单..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《C++设计模式》视频_李建忠\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"《C++设计模式》视频_李建忠","slug":"《c-设计模式》视频-李建忠","link":"#《c-设计模式》视频-李建忠","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"单件模式 Singleton","slug":"单件模式-singleton","link":"#单件模式-singleton","children":[{"level":2,"title":"所属分类——“对象性能” 模式","slug":"所属分类——-对象性能-模式","link":"#所属分类——-对象性能-模式","children":[]},{"level":2,"title":"动机（Motivation）","slug":"动机-motivation","link":"#动机-motivation","children":[{"level":3,"title":"简概","slug":"简概","link":"#简概","children":[]},{"level":3,"title":"核心：保证一个类仅有一个实例，并提供一个该实例的全局访问点","slug":"核心-保证一个类仅有一个实例-并提供一个该实例的全局访问点","link":"#核心-保证一个类仅有一个实例-并提供一个该实例的全局访问点","children":[]},{"level":3,"title":"代码体现","slug":"代码体现","link":"#代码体现","children":[{"level":4,"title":"版本1：线程非安全","slug":"版本1-线程非安全","link":"#版本1-线程非安全","children":[]},{"level":4,"title":"版本2：线程安全 - 加锁版（Cleck Lock）","slug":"版本2-线程安全-加锁版-cleck-lock","link":"#版本2-线程安全-加锁版-cleck-lock","children":[]},{"level":4,"title":"版本3：线程安全 - 双检查锁（Double Cleck Lock）","slug":"版本3-线程安全-双检查锁-double-cleck-lock","link":"#版本3-线程安全-双检查锁-double-cleck-lock","children":[]},{"level":4,"title":"版本4：C++11之后的跨平台实现（volatile关键字）","slug":"版本4-c-11之后的跨平台实现-volatile关键字","link":"#版本4-c-11之后的跨平台实现-volatile关键字","children":[]},{"level":4,"title":"版本5：C++11的 std::call_once()","slug":"版本5-c-11的-std-call-once","link":"#版本5-c-11的-std-call-once","children":[]},{"level":4,"title":"版本6：直接使用static的简易版本","slug":"版本6-直接使用static的简易版本","link":"#版本6-直接使用static的简易版本","children":[]}]}]},{"level":2,"title":"设计模式","slug":"设计模式","link":"#设计模式","children":[{"level":3,"title":"模式定义","slug":"模式定义","link":"#模式定义","children":[]},{"level":3,"title":"结构（Structure）","slug":"结构-structure","link":"#结构-structure","children":[]},{"level":3,"title":"要点总结","slug":"要点总结","link":"#要点总结","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":4.74,"words":1423},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/03. Tools/02. 管理层/01. 多类管理/设计模式/《C++设计模式》视频_李建忠/10. 单件模式 Singleton.md","autoDesc":true}');export{v as comp,m as data};

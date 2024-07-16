import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,e as l}from"./app-yixEWCFr.js";const s={},d=l(`<h1 id="多线程-单例设计模式中的多线程" tabindex="-1"><a class="header-anchor" href="#多线程-单例设计模式中的多线程"><span>多线程 - 单例设计模式中的多线程</span></a></h1><h2 id="单例设计模式简概" tabindex="-1"><a class="header-anchor" href="#单例设计模式简概"><span>单例设计模式简概</span></a></h2><h3 id="设计模式简概" tabindex="-1"><a class="header-anchor" href="#设计模式简概"><span>设计模式简概</span></a></h3><p><mark>（详见设计模式相关的笔记）</mark></p><p>略</p><h3 id="单例模式例程" tabindex="-1"><a class="header-anchor" href="#单例模式例程"><span>单例模式例程</span></a></h3><p><mark>（详见设计模式相关的笔记）</mark></p><p>在设计模式中，使用频率比较高</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class Single
{
private:
    Single(){}
    static Single *m_instance;	// 静态成员变量
public:
    static Single * Instance()
    {
        if(m_instance == nullptr)
        {
            m_instance = new Single();	// new了
            static GarbageCollector gc;	// 创建回收类
        }
        return m_instance;
    };
    
    // 不写这个也行，一般单例对象的生命周期就是覆盖整个程序的，退出程序自动析构
    class GarbageCollector				// 内部类，负责释放前面的new
    {
        ~GarbageCollector()
        {
            if(Single::m_instance)
            {
                delete Single::m_instance;
                Single::m_instance = nullptr;
            }
        }
    };
}
Single *Single::m_instance = nullptr;	// 初始化为空

int main
{
	Single *single = Single::Instance();	// 使用单例对象
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Q：为什么不能在单例类的析构中进行delete？</li><li>A：当析构Single对象时，此时<code>m_instance</code>指针可能已经被释放了。如果此时析构函数中<code>delete m_instance;</code>，有可能会释放该内存两次？出错 还是因为自己delete自己会造成逻辑混乱？ 其实一般情况下也不用手动析构，一般单例对象的生命周期就是覆盖整个程序的，退出程序自动析构</li></ul><h2 id="单例设计模式共享数据问题的分析、解决" tabindex="-1"><a class="header-anchor" href="#单例设计模式共享数据问题的分析、解决"><span>单例设计模式共享数据问题的分析、解决</span></a></h2><h3 id="存在问题" tabindex="-1"><a class="header-anchor" href="#存在问题"><span>存在问题</span></a></h3><p><mark>（详见设计模式相关的笔记）</mark></p><p>单例模式若需要多线程下起作用（多个线程共用一个单例），则需要<code>Instance()</code>函数互斥</p><h4 id="版本1-线程非安全" tabindex="-1"><a class="header-anchor" href="#版本1-线程非安全"><span>版本1：线程非安全</span></a></h4><p>（可能多个线程时能够创建不止一个单例，有几率出错，不安全）</p><p>（出错原因和改进方法详见设计模式单例模式的笔记）</p><ul><li>存在问题 <ul><li>在多线程中，例如AB两个线程</li><li>A执行完<code>if</code>（判断单例是否存在）还没执行下一行时，B恰好执行到<code>if</code>那行</li><li>这就会产生两个单例</li></ul></li><li>建议 <ul><li>单线程可以用</li></ul></li></ul><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class Single
{
private:
    Single(){}
    static Single *m_instance;				// 静态成员变量
public:
    static Single * Instance()
    {
        if(m_instance == nullptr)
        {
            m_instance = new Single();		// new了
        }
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="版本2-线程安全-加锁版-cleck-lock" tabindex="-1"><a class="header-anchor" href="#版本2-线程安全-加锁版-cleck-lock"><span>版本2：线程安全 - 加锁版（<em>Cleck Lock</em>）</span></a></h4><ul><li>存在问题： <ul><li>锁的代价过高</li><li>读的时候根本没必要去锁，性能浪费</li></ul></li><li>建议 <ul><li>可以用，但高并发的话性能损耗大</li></ul></li></ul><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;mutex&gt;
using namespace std;

std::mutex mutex1;							// 【互斥量】

class Single
{
private:
    Single(){}
    static Single *m_instance;				// 静态成员变量
public:
    static Single * Instance()
    {
        std::unique_lock&lt;std::mutex&gt; up_mutex(mutex1)	// 【互斥量加锁】
        if(m_instance == nullptr)
        {
            m_instance = new Single();		// new了
        }
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="版本3-线程安全-双检查锁-double-cleck-lock" tabindex="-1"><a class="header-anchor" href="#版本3-线程安全-双检查锁-double-cleck-lock"><span>版本3：线程安全 - 双检查锁（<em>Double Cleck Lock</em>）</span></a></h4><ul><li>存在问题 <ul><li>由于内存读写reorder不安全，会导致双检查锁失效</li><li>reorder：从汇编指令的角度来看，<code>m_instance = new Singleton();</code>这行代码可以分解成三个步骤 <ul><li>(1) 分配内存</li><li>(2) 调用构造器</li><li>(3) 地址返回值给指针</li><li>但这三步只是理想指令执行顺序，实际情况中<em>有可能</em> 被reorder（重排顺序），顺序变成了 1-3-2</li></ul></li><li>那么假设存在AB两个线程并发生以下情况 <ul><li>当A线程执行<code>m_instance = new Singleton();</code>时被reorder，即按1-3-2顺序执行指令</li><li>当A线程执行完指令3但还没执行指令2时</li><li>B恰好依次执行代码第2行的判断、第8行的return。但此时构造器还未被调用，会出错</li></ul></li></ul></li><li>建议 <ul><li><strong>不要用</strong>，不安全，容易出错</li></ul></li></ul><h4 id="版本4-c-11的-volatile-关键字" tabindex="-1"><a class="header-anchor" href="#版本4-c-11的-volatile-关键字"><span>版本4：C++11的 volatile 关键字</span></a></h4><ul><li>简概 <ul><li>C++11引入的新函数</li></ul></li><li>功能 <ul><li>原理主要是让编译器不reorder</li></ul></li></ul><p>（函数略）</p><h4 id="版本5-c-11的-std-call-once" tabindex="-1"><a class="header-anchor" href="#版本5-c-11的-std-call-once"><span>版本5：C++11的 std::call_once()</span></a></h4><ul><li>简概 <ul><li>C++11引入的新函数，感觉这个函数简直是为单例模式量身定做的</li></ul></li><li>功能 <ul><li>能保证某个函数只被调用一次</li><li>能实现互斥量的功能，且效率上会更高</li><li>与if-else相比，在多线程中使用会更安全</li></ul></li><li>原理： <ul><li>第二个参数是需要调用的函数名</li><li>第一个参数是一个<code>std::once_flag</code>类型的标记。该标记将决定函数是否执行。 当执行过一次call_once()后，就会把这个标记设置为已调用状态。后续再调用时就会无法调用</li></ul></li></ul><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>using namespace std;

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
    Single::Instance();						// 【在主线程中初始化创建】那么new出来的对象就会在主线程的堆栈空间中，更好
	std::thread mytobj(mythread);
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="版本6-直接使用static的简易版本" tabindex="-1"><a class="header-anchor" href="#版本6-直接使用static的简易版本"><span>版本6：直接使用static的简易版本</span></a></h4><p>C++11中还有一种简单的单例，就是直接使用static。</p><p>C++11中可以保证static变量时多线程安全的，在底层实现了加锁操作，而且由于是static对象，也可以保证对象只生成一次</p><p>但用这种写法的基类可能因使用时操作不当不安全（比如不用static对象，自己又另外创建了一个）</p>`,34),a=[d];function t(c,r){return i(),n("div",null,a)}const m=e(s,[["render",t],["__file","05. 单例设计模式中的多线程.html.vue"]]),b=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/C__/04.%20%E4%BC%98%E5%8C%96/%E5%A4%9A%E7%BA%BF%E7%A8%8B/05.%20%E5%8D%95%E4%BE%8B%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E4%B8%AD%E7%9A%84%E5%A4%9A%E7%BA%BF%E7%A8%8B.html","title":"多线程 - 单例设计模式中的多线程","lang":"zh-CN","frontmatter":{"description":"多线程 - 单例设计模式中的多线程 单例设计模式简概 设计模式简概 （详见设计模式相关的笔记） 略 单例模式例程 （详见设计模式相关的笔记） 在设计模式中，使用频率比较高 Q：为什么不能在单例类的析构中进行delete？ A：当析构Single对象时，此时m_instance指针可能已经被释放了。如果此时析构函数中delete m_instance;，...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/C__/04.%20%E4%BC%98%E5%8C%96/%E5%A4%9A%E7%BA%BF%E7%A8%8B/05.%20%E5%8D%95%E4%BE%8B%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E4%B8%AD%E7%9A%84%E5%A4%9A%E7%BA%BF%E7%A8%8B.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"多线程 - 单例设计模式中的多线程"}],["meta",{"property":"og:description","content":"多线程 - 单例设计模式中的多线程 单例设计模式简概 设计模式简概 （详见设计模式相关的笔记） 略 单例模式例程 （详见设计模式相关的笔记） 在设计模式中，使用频率比较高 Q：为什么不能在单例类的析构中进行delete？ A：当析构Single对象时，此时m_instance指针可能已经被释放了。如果此时析构函数中delete m_instance;，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"多线程 - 单例设计模式中的多线程\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"多线程 - 单例设计模式中的多线程","slug":"多线程-单例设计模式中的多线程","link":"#多线程-单例设计模式中的多线程","children":[{"level":2,"title":"单例设计模式简概","slug":"单例设计模式简概","link":"#单例设计模式简概","children":[{"level":3,"title":"设计模式简概","slug":"设计模式简概","link":"#设计模式简概","children":[]},{"level":3,"title":"单例模式例程","slug":"单例模式例程","link":"#单例模式例程","children":[]}]},{"level":2,"title":"单例设计模式共享数据问题的分析、解决","slug":"单例设计模式共享数据问题的分析、解决","link":"#单例设计模式共享数据问题的分析、解决","children":[{"level":3,"title":"存在问题","slug":"存在问题","link":"#存在问题","children":[{"level":4,"title":"版本1：线程非安全","slug":"版本1-线程非安全","link":"#版本1-线程非安全","children":[]},{"level":4,"title":"版本2：线程安全 - 加锁版（Cleck Lock）","slug":"版本2-线程安全-加锁版-cleck-lock","link":"#版本2-线程安全-加锁版-cleck-lock","children":[]},{"level":4,"title":"版本3：线程安全 - 双检查锁（Double Cleck Lock）","slug":"版本3-线程安全-双检查锁-double-cleck-lock","link":"#版本3-线程安全-双检查锁-double-cleck-lock","children":[]},{"level":4,"title":"版本4：C++11的 volatile 关键字","slug":"版本4-c-11的-volatile-关键字","link":"#版本4-c-11的-volatile-关键字","children":[]},{"level":4,"title":"版本5：C++11的 std::call_once()","slug":"版本5-c-11的-std-call-once","link":"#版本5-c-11的-std-call-once","children":[]},{"level":4,"title":"版本6：直接使用static的简易版本","slug":"版本6-直接使用static的简易版本","link":"#版本6-直接使用static的简易版本","children":[]}]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":4.72,"words":1415},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/01. Language/C++/04. 优化/多线程/05. 单例设计模式中的多线程.md","autoDesc":true}');export{m as comp,b as data};

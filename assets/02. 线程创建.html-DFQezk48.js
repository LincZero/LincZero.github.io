import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,a as l}from"./app-DVIBfMrr.js";const d={},t=l(`<h1 id="多线程-线程创建" tabindex="-1"><a class="header-anchor" href="#多线程-线程创建"><span>多线程 - 线程创建</span></a></h1><h2 id="方法简概" tabindex="-1"><a class="header-anchor" href="#方法简概"><span>方法简概</span></a></h2><p>主线程从main()开始执行，创建的线程也需要有一个<code>初始函数</code>开始运行，当这个初始函数运行完毕时该线程结束</p><p>一般情况下当主线程执行完毕则其他子线程也会被强行终止（说的是thread方法，而detach线程方法可令主线程执行完毕后子线程继续执行）</p><hr><p>线程创建方法</p><ul><li>线程使用（thread对象） <ul><li>thread</li><li>join</li><li>detach</li><li>joinable</li></ul></li><li>其他创建线程的手法 <ul><li>类对象 / 匿名对象</li><li>Lambda表达式</li></ul></li></ul><hr><p>比较、适用场景</p><ul><li>病毒软件多用detach，不然任务管理器kill掉你的主线程，子线程也都废了</li></ul><h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用"><span>基本使用</span></a></h2><h3 id="thread-join-例程" tabindex="-1"><a class="header-anchor" href="#thread-join-例程"><span>thread+join 例程</span></a></h3><p>（一般用这种方式）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;thread&gt;			// 线程头文件

using namespace std;

void mythreadfn()			// 线程的初始函数
{
    cout &lt;&lt; &quot;子线程&quot; &lt;&lt; endl;
}
    
int main()					// main函数，主线程的初始函数
{
    /* (1) 分叉（创建线程）
     * 创建线程并指定初始函数，此时线程开始执行了
     * 这里的thread是标准库里的类，构造时传入一个可调用对象（这里是函数指针）*/
    std::thread mythread(mythreadfn);
    /* (2) 合并（等子线程和主线程汇合）
     * 阻塞主线程，让主线程等待子线程执行完毕
     * 可以避免主线程在子线程之前执行完 */
    mythread.join();
    
    cout &lt;&lt; &quot;主线程&quot; &lt;&lt; endl;
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="thread-detach-例程" tabindex="-1"><a class="header-anchor" href="#thread-detach-例程"><span>thread+detach 例程</span></a></h3><p>可以让主线程执行完毕后子线程继续执行</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;thread&gt;			// 线程头文件

using namespace std;

void mythreadfn				// 线程的初始函数
{
    cout &lt;&lt; &quot;子线程&quot; &lt;&lt; endl;
}
    
int main()					// main函数，主线程的初始函数
{
    /* (1) 分叉（创建线程）
     * 创建线程并指定初始函数，此时线程开始执行了
     * 这里的thread是标准库里的类，构造时传入一个可调用对象（这里是函数指针）*/
    std::thread mythread(mythreadfn);
    /* (2) 分离（分离主线程不和子线程）
     * 可令主线程在子线程之前执行完毕。执行后，主线程和关联的thread对象之间会失去关联
     * 子线程会驻留在后台运行，相当于被C++运行时库接管。线程执行完毕时，由运行时库负责清理该线程相关的资源 */
    mythread.detach();
    
    cout &lt;&lt; &quot;主线程&quot; &lt;&lt; endl;
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="joinable" tabindex="-1"><a class="header-anchor" href="#joinable"><span>joinable</span></a></h3><p>功能：判断是否可以成功使用join()或detach()</p><p>返回true：都能使用</p><p>返回false：都不能使用</p><p>使用场景：比如之前join或detach过一遍就会返回false避免重复重复join或detach</p><h2 id="线程入口" tabindex="-1"><a class="header-anchor" href="#线程入口"><span>线程入口</span></a></h2><h3 id="_1-函数" tabindex="-1"><a class="header-anchor" href="#_1-函数"><span>(1) 函数</span></a></h3><p>略，如上</p><h3 id="_2-类对象-匿名对象" tabindex="-1"><a class="header-anchor" href="#_2-类对象-匿名对象"><span>(2) 类对象 / 匿名对象</span></a></h3><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;thread&gt;			// 线程头文件

using namespace std;

class TA
{
public:
	void operator()(int num)	// 线程的初始函数（类成员函数）【注意这里有两个小括号】
    {
        cout &lt;&lt; &quot;子线程&quot; &lt;&lt; endl;
    }
}
    
int main()					// main函数，主线程的初始函数
{
    Ta ta;					// 类对象
    /* std::thread mythread(Ta()); 				// 这里用匿名对象也是可以的 */
    /* std::thread mythread(std::ref(ta),15);	// 这里可以用引用 */
    std::thread mythread(ta,15);	// 函数、类、Lambda都是可调用对象
    mythread.join();
    
    cout &lt;&lt; &quot;主线程&quot; &lt;&lt; endl;
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-lambda函数" tabindex="-1"><a class="header-anchor" href="#_3-lambda函数"><span>(3) Lambda函数</span></a></h3><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;thread&gt;			// 线程头文件

using namespace std;

int main()					// main函数，主线程的初始函数
{
    auto mylamthread = []{
        cout &lt;&lt; &quot;子线程&quot; &lt;&lt; endl;
    }
    std::thread mythread(mylamthread);	// 函数、类、Lambda都是可调用对象
    mythread.join();
    
    cout &lt;&lt; &quot;主线程&quot; &lt;&lt; endl;
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-成员函数指针" tabindex="-1"><a class="header-anchor" href="#_4-成员函数指针"><span>(4) 成员函数指针</span></a></h3><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;thread&gt;			// 线程头文件

using namespace std;

class A						// 要传递的类对象
{
public:
    mutable int m_i;
	A(int a):m_i(a){
        cout&lt;&lt;&quot;【构造函数】&quot;&lt;&lt;endl
            &lt;&lt;&quot;【地址】&quot;&lt;&lt;this&lt;&lt;endl
            &lt;&lt;&quot;【线程id】&quot;&lt;&lt;std::this_thread:get_id()&lt;&lt;endl;
    }
    A(const A &amp;a):m_i{
        cout&lt;&lt;&quot;【复制构造函数】&quot;&lt;&lt;endl
            &lt;&lt;&quot;【地址】&quot;&lt;&lt;this&lt;&lt;endl
            &lt;&lt;&quot;【线程id】&quot;&lt;&lt;std::this_thread:get_id()&lt;&lt;endl;
    }
    ~A(){
        cout&lt;&lt;&quot;【析构函数】&quot;&lt;&lt;endl
            &lt;&lt;&quot;【地址】&quot;&lt;&lt;this&lt;&lt;endl
            &lt;&lt;&quot;【线程id】&quot;&lt;&lt;std::this_thread:get_id()&lt;&lt;endl;
    }
    void thread_work(int num)					// 【成员函数作为线程的初始函数】
    {
        cout &lt;&lt; &quot;《子线程》&quot; &lt;&lt; endl
        	&lt;&lt;&quot;《线程id》&quot;&lt;&lt;std::this_thread:get_id()&lt;&lt;endl;
    }
}
    
int main()
{
    A aObj(10);
    // 参：成员函数入口、传对象地址（不是传引用而是传地址，防止复制构造，ref()也行）、成员函数的参数
    thread mythread(&amp;A::Obj.thread_work, &amp;aObj, 20);
    mythread.join();
    cout &lt;&lt; &quot;《主线程》&quot; &lt;&lt; endl
        &lt;&lt;&quot;《线程id》&quot;&lt;&lt;std::this_thread:get_id()&lt;&lt;endl;
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>调试结果 <ul><li>对象执行一次构造函数（主线程）、一次拷贝构造函数（子线程），两侧析构函数（主线程子线程各一次）</li><li>成员函数在子线程中输出</li></ul></li></ul><h2 id="多个线程" tabindex="-1"><a class="header-anchor" href="#多个线程"><span>多个线程</span></a></h2><p>多个线程可以用同一个线程入口函数</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;thread&gt;			// 线程头文件

using namespace std;

void myprint(const int i)
{
    cout &lt;&lt; &quot;《子线程》&quot; &lt;&lt; endl
        &lt;&lt;&quot;《线程id》&quot;&lt;&lt;std::this_thread:get_id()&lt;&lt;endl;
}
    
int main()
{
    vector &lt;thread&gt; mythreads;	//多个线程
    /* 创建10个线程，并使用同一个入口函数（线程池有2w多个，系统线程大约有5k个） */
    for(int i=0; i&lt;10; i++)
    {
        mythreads.push_back(thread(myprint, i));
    }
    /* 遍历并join */
    for(auto iter=mythreads.begin(); iter!=mythreads.end(); iter++)
    {
        iter-&gt;join();
    }
    cout &lt;&lt; &quot;《主线程》&quot; &lt;&lt; endl
        &lt;&lt;&quot;《线程id》&quot;&lt;&lt;std::this_thread:get_id()&lt;&lt;endl;
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),a=[t];function s(r,v){return i(),n("div",null,a)}const m=e(d,[["render",s],["__file","02. 线程创建.html.vue"]]),b=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/C__/04.%20%E4%BC%98%E5%8C%96/%E5%A4%9A%E7%BA%BF%E7%A8%8B/02.%20%E7%BA%BF%E7%A8%8B%E5%88%9B%E5%BB%BA.html","title":"多线程 - 线程创建","lang":"zh-CN","frontmatter":{"description":"多线程 - 线程创建 方法简概 主线程从main()开始执行，创建的线程也需要有一个初始函数开始运行，当这个初始函数运行完毕时该线程结束 一般情况下当主线程执行完毕则其他子线程也会被强行终止（说的是thread方法，而detach线程方法可令主线程执行完毕后子线程继续执行） 线程创建方法 线程使用（thread对象） thread join detac...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/C__/04.%20%E4%BC%98%E5%8C%96/%E5%A4%9A%E7%BA%BF%E7%A8%8B/02.%20%E7%BA%BF%E7%A8%8B%E5%88%9B%E5%BB%BA.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"多线程 - 线程创建"}],["meta",{"property":"og:description","content":"多线程 - 线程创建 方法简概 主线程从main()开始执行，创建的线程也需要有一个初始函数开始运行，当这个初始函数运行完毕时该线程结束 一般情况下当主线程执行完毕则其他子线程也会被强行终止（说的是thread方法，而detach线程方法可令主线程执行完毕后子线程继续执行） 线程创建方法 线程使用（thread对象） thread join detac..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"多线程 - 线程创建\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"多线程 - 线程创建","slug":"多线程-线程创建","link":"#多线程-线程创建","children":[{"level":2,"title":"方法简概","slug":"方法简概","link":"#方法简概","children":[]},{"level":2,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[{"level":3,"title":"thread+join 例程","slug":"thread-join-例程","link":"#thread-join-例程","children":[]},{"level":3,"title":"thread+detach 例程","slug":"thread-detach-例程","link":"#thread-detach-例程","children":[]},{"level":3,"title":"joinable","slug":"joinable","link":"#joinable","children":[]}]},{"level":2,"title":"线程入口","slug":"线程入口","link":"#线程入口","children":[{"level":3,"title":"(1) 函数","slug":"_1-函数","link":"#_1-函数","children":[]},{"level":3,"title":"(2) 类对象 / 匿名对象","slug":"_2-类对象-匿名对象","link":"#_2-类对象-匿名对象","children":[]},{"level":3,"title":"(3) Lambda函数","slug":"_3-lambda函数","link":"#_3-lambda函数","children":[]},{"level":3,"title":"(4) 成员函数指针","slug":"_4-成员函数指针","link":"#_4-成员函数指针","children":[]}]},{"level":2,"title":"多个线程","slug":"多个线程","link":"#多个线程","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":4.16,"words":1247},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/01. Language/C++/04. 优化/多线程/02. 线程创建.md","autoDesc":true}');export{m as comp,b as data};

import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as l,c as e,a as n}from"./app-DGJmjHtg.js";const t={},d=n(`<h1 id="多线程-线程参数与数据" tabindex="-1"><a class="header-anchor" href="#多线程-线程参数与数据"><span>多线程 - 线程参数与数据</span></a></h1><h2 id="线程传参" tabindex="-1"><a class="header-anchor" href="#线程传参"><span>线程传参</span></a></h2><h3 id="临时对象-值传递" tabindex="-1"><a class="header-anchor" href="#临时对象-值传递"><span>临时对象（值传递）</span></a></h3><h4 id="引用传递-错误写法" tabindex="-1"><a class="header-anchor" href="#引用传递-错误写法"><span>引用传递（错误写法）</span></a></h4><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;thread&gt;			// 线程头文件

using namespace std;

void myprint(const int &amp;i, char *pmybuf)	// 带参数的线程的初始函数
{
    cout &lt;&lt; i &lt;&lt; endl;						// 输出：1 				【调试】&amp;i = 0x0072d9e
    cout &lt;&lt; pmybuf &lt;&lt; endl;					// 输出：this is a test!	【调试】&amp;pmybuff = 0x004ffb64
}
    
int main()
{
    int mvar = 1;							// 【调试】&amp;mvar = 0x0022fa58 {1}
    int &amp;mvary = mvar;						// 【调试】&amp;mvary = 0x0022fa58 {1}
    char mybuf[] = &quot;this is a test!&quot;;		// 【调试】&amp;mybuff = 0x004ffb64
    thread mythread(myprint, mvar, mybuf);	// 注意这里传参会有点不一样
    mythread.detach();
    cout &lt;&lt; &quot;主线程&quot; &lt;&lt; endl;
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>存在问题</p><ul><li>i，看似引用传参，但实际上是值传递，指向的不是同一地址！</li><li>pmybuf，是真正的引用传参</li><li>不推荐用引用、detach子线程中绝对不可以用指针</li></ul></li><li><p>解决方案</p><ul><li>简单类型传值，传字符串时参数为<code>const string &amp;pmybuf</code>，打印<code>pmybuf.c_str()</code></li><li>这里要加<code>const</code>的原因：略</li></ul></li></ul><h4 id="隐式转换传递-错误写法" tabindex="-1"><a class="header-anchor" href="#隐式转换传递-错误写法"><span>隐式转换传递（错误写法）</span></a></h4><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;thread&gt;			// 线程头文件
using namespace std;

void myprint(const int i, const string &amp;pmybuf)	// 带参数的线程的初始函数
{
    cout &lt;&lt; i &lt;&lt; endl;						// 输出：1 				【调试】&amp;i = 0x0072d9e
    cout &lt;&lt; pmybuf.c_str() &lt;&lt; endl;			// 输出：this is a test!	【调试】&amp;pmybuff = 不同
}

int main(){
    int mvar = 1;							// 【调试】&amp;mvar = 0x0022fa58 {1}
    int &amp;mvary = mvar;						// 【调试】&amp;mvary = 0x0022fa58 {1}
    char mybuf[] = &quot;this is a test!&quot;;		// 【调试】&amp;mybuff = 0x004ffb64
    thread mythread(myprint, mvar, mybuf);	// 注意这里传参会有点不一样
    mythread.detach();
    cout &lt;&lt; &quot;主线程&quot; &lt;&lt; endl;
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>存在问题</p><ul><li>mybuf什么时候转换成string？有可能主线程结束后，mybuf被回收后才转换成string，此时会出问题</li></ul></li><li><p>解决方案</p><ul><li>直接转换，不要隐式转换。因为隐式转换的过程会在子线程中</li></ul></li></ul><h4 id="显示类型转换为临时变量-正确写法" tabindex="-1"><a class="header-anchor" href="#显示类型转换为临时变量-正确写法"><span>显示类型转换为临时变量（正确写法）</span></a></h4><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;thread&gt;			// 线程头文件
using namespace std;

void myprint(const int i, const string &amp;pmybuf)
{
    cout &lt;&lt; i &lt;&lt; endl;
    cout &lt;&lt; pmybuf.c_str() &lt;&lt; endl;					// 【调试】00C0D298
}

int main(){
    int mvar = 1;
    int &amp;mvary = mvar;
    char mybuf[] = &quot;this is a test!&quot;;
    thread mythread(myprint, mvar, string(mybuf));	// 直接转换，不要隐式转换	【调试】0079F6D0
    mythread.detach();
    cout &lt;&lt; &quot;主线程&quot; &lt;&lt; endl;
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>隐式转换和显式转换区别（可以用线程id来调试一下并验证） <ul><li>隐式转换 <ul><li>string类的活动：一次类型转换构造函数（传参时 <strong>子线程</strong>）、一次析构函数（子线程）</li></ul></li><li>显示转换 <ul><li>string类的活动：进行一次类型转换构造函数（主线程）、一次复制构造函数（传参时 <strong>主线程</strong>）、两次析构函数（一次主线程、一次子线程）</li></ul></li><li>区别原因 <ul><li>显示转换写法中，能确保类型转换后立刻调用复制构造函数。因为这里的复制构造函数不是传参引发的，而是Thread构造函数内部的一个行为</li><li>但隐式转换写法中，类型转换构造函数不是Thread完成的，和普通函数一样不能确保传参后立刻调用</li></ul></li></ul></li><li>结论 <ul><li><p>传递int这种简单类型参数，值传递</p></li><li><p>不建议使用detach</p></li></ul></li></ul><h3 id="类对象-ref函数传递" tabindex="-1"><a class="header-anchor" href="#类对象-ref函数传递"><span>类对象（ref函数传递）</span></a></h3><h4 id="拷贝构造写法-地址不同" tabindex="-1"><a class="header-anchor" href="#拷贝构造写法-地址不同"><span>拷贝构造写法（地址不同）</span></a></h4><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;#include &lt;thread&gt;			// 线程头文件
using namespace std;void myprint(const int i, const string &amp;pmybuf){
    cout &lt;&lt; &quot;《子线程》&quot; &lt;&lt; endl
        &lt;&lt;&quot;《线程id》&quot;&lt;&lt;std::this_thread:get_id()&lt;&lt;endl;
}

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
}

int main(){
    A aObj(10);		// 类对象
    thread mythread(myprint, aObj);				// 直接传
    mythread.join();
    cout &lt;&lt; &quot;《主线程》&quot; &lt;&lt; endl
        &lt;&lt;&quot;《线程id》&quot;&lt;&lt;std::this_thread:get_id()&lt;&lt;endl;
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>调试结果 <ul><li>类对象一次构造函数（主线程）、一次拷贝构造函数（子线程）、两次析构函数（主线程、子线程各一次），两次构造的对象地址不同</li><li>这种写法可以用detach</li></ul></li></ul><h4 id="ref写法-地址相同" tabindex="-1"><a class="header-anchor" href="#ref写法-地址相同"><span>ref写法（地址相同）</span></a></h4><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>int main(){
    A aObj(10);		// 类对象
    thread mythread(myprint, std::ref(aObj));	// 【修改】ref，真正的引用传递，令得主线程和子线程公用同一个地址的同一个对象
    mythread.join();
    cout &lt;&lt; &quot;《主线程》&quot; &lt;&lt; endl
        &lt;&lt;&quot;《线程id》&quot;&lt;&lt;std::this_thread:get_id()&lt;&lt;endl;
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>调试结果</p><ul><li>主线程和子线程公用同一个地址的同一个对象</li><li>类对象一次构造函数（主线程）、一次析构情况（主线程）</li><li>这种写法不能用detach，会出错</li></ul></li><li><p>深层原理</p><ul><li><p>传递类对象时，避免隐式类型转换。创建线程时构建临时对象，并用引用来接</p><p>线程初始函数用引用来接，这里的引用并没有失效。如果用值传递的话，会有三次构造函数！一次默认构造、两次复制构造</p><p>这里其中的一次复制构造函数不是传参造成的，而是新建线程时的默认行为：thread构造函数内部会有一个构造tuple</p></li></ul></li><li><p>选用</p><ul><li>类对象全部使用ref()就挺好的</li></ul></li></ul><h3 id="智能指针-move函数传递" tabindex="-1"><a class="header-anchor" href="#智能指针-move函数传递"><span>智能指针（move函数传递）</span></a></h3><h4 id="错误写法" tabindex="-1"><a class="header-anchor" href="#错误写法"><span>错误写法</span></a></h4><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>int main(){
    unique_ptr&lt;int&gt; ap(new int(100));			// 智能指针
    thread mythread(myprint, ap);				// 直接传，会报错。报错原因：unique不支持拷贝构造函数
    mythread.join();
    cout &lt;&lt; &quot;《主线程》&quot; &lt;&lt; endl
        &lt;&lt;&quot;《线程id》&quot;&lt;&lt;std::this_thread:get_id()&lt;&lt;endl;
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>报错原因 <ul><li>unique不支持拷贝构造函数</li></ul></li></ul><h4 id="移动语义方案" tabindex="-1"><a class="header-anchor" href="#移动语义方案"><span>移动语义方案</span></a></h4><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>int main(){    
    unique_ptr&lt;int&gt; ap(new int(100));			// 智能指针
    thread mythread(myprint, std::move(ap));	// 【修改】移动语义方案（本质是所有权转移）
    mythread.join();
    cout &lt;&lt; &quot;《主线程》&quot; &lt;&lt; endl
        &lt;&lt;&quot;《线程id》&quot;&lt;&lt;std::this_thread:get_id()&lt;&lt;endl;
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>调试结果 <ul><li>主线程和子线程的智能指针指向同一块地址</li><li>这种写法不能用detach，会出错</li></ul></li><li>危险性 <ul><li>线程都有独立堆栈空间，主线程的智能指针指向主线程堆栈空间，在std::move后主线程智能指针为空</li><li>但通过new分配的内存依然在主线程中，子线程指针指向的内存在主线程中</li><li>当主线程结束后，内存回收，子线程智能指针指向的是主线程地址，会导致程序错乱</li><li>总结：也就是说当主线程和子线程存在共享内存数据时，绝对不能用detach()</li></ul></li></ul><h2 id="共享参数" tabindex="-1"><a class="header-anchor" href="#共享参数"><span>共享参数</span></a></h2><h3 id="只读数据" tabindex="-1"><a class="header-anchor" href="#只读数据"><span>只读数据</span></a></h3><p>直接使用即可，加上const更安全</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;thread&gt;			// 线程头文件
using namespace std;
vector &lt;int&gt; g_v = {1,2,3};	// 【共享数据】不传参也可被线程直接使用

void myprint(const int i){
    cout &lt;&lt; &quot;《子线程》&quot; &lt;&lt; endl
        &lt;&lt;&quot;《线程id》&quot;&lt;&lt;std::this_thread:get_id()&lt;&lt;endl;
    cout &lt;&lt; g_v[0] &lt;&lt; endl;	// 【共享数据】直接使用
}

int main(){
    vector &lt;thread&gt; mythreads;
    for(int i=0; i&lt;10; i++)
    {
        mythreads.push_back(thread(myprint, i));
    }
    for(auto iter=mythreads.begin(); iter!=mythreads.end(); iter++)
    {
        iter-&gt;join();
    }
    cout &lt;&lt; &quot;《主线程》&quot; &lt;&lt; endl 
        &lt;&lt;&quot;《线程id》&quot;&lt;&lt;std::this_thread:get_id()&lt;&lt;endl;
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可读可写-互斥量加锁" tabindex="-1"><a class="header-anchor" href="#可读可写-互斥量加锁"><span>可读可写（互斥量加锁）</span></a></h3><p>这种情况下，代码写得有问题会很容易导致程序崩溃</p><ul><li>关键处理：读的时候不能写、写的时候不能读/写</li><li>深层原因：写的操作不原子性，可能正在写的时候任务切换，发生问题</li><li>解决方案：<strong>用互斥量加线程锁</strong>，将共享数据的操作锁住</li></ul><p>应用举例</p><ul><li>比如火车有10个售票窗口（或者电影院网上订座），当订座时不能冲突</li></ul>`,35),a=[d];function s(r,u){return l(),e("div",null,a)}const m=i(t,[["render",s],["__file","03. 线程参数与数据.html.vue"]]),o=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/C__/04.%20%E4%BC%98%E5%8C%96/%E5%A4%9A%E7%BA%BF%E7%A8%8B/03.%20%E7%BA%BF%E7%A8%8B%E5%8F%82%E6%95%B0%E4%B8%8E%E6%95%B0%E6%8D%AE.html","title":"多线程 - 线程参数与数据","lang":"zh-CN","frontmatter":{"description":"多线程 - 线程参数与数据 线程传参 临时对象（值传递） 引用传递（错误写法） 存在问题 i，看似引用传参，但实际上是值传递，指向的不是同一地址！ pmybuf，是真正的引用传参 不推荐用引用、detach子线程中绝对不可以用指针 解决方案 简单类型传值，传字符串时参数为const string &pmybuf，打印pmybuf.c_str() 这里要...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/C__/04.%20%E4%BC%98%E5%8C%96/%E5%A4%9A%E7%BA%BF%E7%A8%8B/03.%20%E7%BA%BF%E7%A8%8B%E5%8F%82%E6%95%B0%E4%B8%8E%E6%95%B0%E6%8D%AE.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"多线程 - 线程参数与数据"}],["meta",{"property":"og:description","content":"多线程 - 线程参数与数据 线程传参 临时对象（值传递） 引用传递（错误写法） 存在问题 i，看似引用传参，但实际上是值传递，指向的不是同一地址！ pmybuf，是真正的引用传参 不推荐用引用、detach子线程中绝对不可以用指针 解决方案 简单类型传值，传字符串时参数为const string &pmybuf，打印pmybuf.c_str() 这里要..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"多线程 - 线程参数与数据\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"多线程 - 线程参数与数据","slug":"多线程-线程参数与数据","link":"#多线程-线程参数与数据","children":[{"level":2,"title":"线程传参","slug":"线程传参","link":"#线程传参","children":[{"level":3,"title":"临时对象（值传递）","slug":"临时对象-值传递","link":"#临时对象-值传递","children":[{"level":4,"title":"引用传递（错误写法）","slug":"引用传递-错误写法","link":"#引用传递-错误写法","children":[]},{"level":4,"title":"隐式转换传递（错误写法）","slug":"隐式转换传递-错误写法","link":"#隐式转换传递-错误写法","children":[]},{"level":4,"title":"显示类型转换为临时变量（正确写法）","slug":"显示类型转换为临时变量-正确写法","link":"#显示类型转换为临时变量-正确写法","children":[]}]},{"level":3,"title":"类对象（ref函数传递）","slug":"类对象-ref函数传递","link":"#类对象-ref函数传递","children":[{"level":4,"title":"拷贝构造写法（地址不同）","slug":"拷贝构造写法-地址不同","link":"#拷贝构造写法-地址不同","children":[]},{"level":4,"title":"ref写法（地址相同）","slug":"ref写法-地址相同","link":"#ref写法-地址相同","children":[]}]},{"level":3,"title":"智能指针（move函数传递）","slug":"智能指针-move函数传递","link":"#智能指针-move函数传递","children":[{"level":4,"title":"错误写法","slug":"错误写法","link":"#错误写法","children":[]},{"level":4,"title":"移动语义方案","slug":"移动语义方案","link":"#移动语义方案","children":[]}]}]},{"level":2,"title":"共享参数","slug":"共享参数","link":"#共享参数","children":[{"level":3,"title":"只读数据","slug":"只读数据","link":"#只读数据","children":[]},{"level":3,"title":"可读可写（互斥量加锁）","slug":"可读可写-互斥量加锁","link":"#可读可写-互斥量加锁","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":6.05,"words":1815},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/01. Language/C++/04. 优化/多线程/03. 线程参数与数据.md","autoDesc":true}');export{m as comp,o as data};

import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as l,a as n}from"./app-IRYUHD7s.js";const d={},t=n(`<h1 id="多线程-线程锁" tabindex="-1"><a class="header-anchor" href="#多线程-线程锁"><span>多线程 - 线程锁</span></a></h1><h2 id="互斥量-mutex" tabindex="-1"><a class="header-anchor" href="#互斥量-mutex"><span>互斥量（<em>mutex</em>）</span></a></h2><h3 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h3><p>简概</p><ul><li>互斥量是个类对象，理解成一把锁</li><li>使用互斥量要小心，多了影响效率、少了则不安全</li></ul><p>使用</p><ul><li><code>std::mutex mymutex;</code>，创建类成员变量</li><li><code>lock()</code>，成员函数能够对线程进行加锁。同一时间只有一个线程能够锁成功； 锁成功时会返回true，若没锁成功则阻塞会一直尝试调用lock()</li><li><code>unlock()</code>，成员函数能够对线程进行解锁</li><li>使用步骤：lock -&gt; 操作共享数据 -&gt; unlock，其中lock和unlock要成对使用</li></ul><p>智能互斥量</p><ul><li><code>std::lock_guard</code>类模板，能自动unlock（防止你忘记unlock、有点像智能指针自动释放内存）</li><li>原理：<code>std::lock_guard&lt;std::mutex&gt; sbguard(my_mutex);</code>生成的互斥量对象，在构造函数和析构函数调用时，自动加锁和解锁 是对局部变量的巧妙运用</li><li>缺点：不太灵活，无法自由控制解锁的位置，不能手动unlock。但可以配合<code>{}</code>来提高灵活度</li></ul><h3 id="错误例程-边读边写-会崩溃" tabindex="-1"><a class="header-anchor" href="#错误例程-边读边写-会崩溃"><span>错误例程（边读边写，会崩溃）</span></a></h3><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;thread&gt;			// 线程头文件
using namespace std;

class A{
public:   
    // 收集数据的线程
    void inMsgRecQueue()
    {
        for(int i=0; i&lt;10000; ++i)			// 增加崩溃几率 
        { 
            cout &lt;&lt; &quot;_&quot;; 
            msgRecvQueue.push_back(i);		// 写操作是非原子性的
        } 
    }  
    // 取出数据的线程
    void outMsgRecQueue() 
    {      
        for(int i=0; i&lt;10000; ++i)			// 增加崩溃几率   
        {       
            if(!msgRecvQueue.empty())      
            {          
                msgRecvQueue.front();		// 返回第一个元素但不检查是否存在   
                msgRecvQueue.pop_front();	// 移除第一个元素但不返回，写操作是非原子性的
                cout &lt;&lt; &quot;O&quot;; 
            }  
            else    
            {            
                cout &lt;&lt; &quot;空&quot;;    
            }      
        }  
    }
private  
    std::list&lt;int&gt; msgRecvQueue;			// 收到的消息列表
} 

int main(){
    A a;
    thread threadI(&amp;A::inMsgRecQueue, &amp;a);	// 成员函数作为线程初始函数
    thread threadO(&amp;A::outMsgRecQueue, &amp;a);	// 成员函数作为线程初始函数
    threadI.json();
    threadO.json();
    cout &lt;&lt; &quot;《主线程》&quot; &lt;&lt; endl 
        &lt;&lt;&quot;《线程id》&quot;&lt;&lt;std::this_thread:get_id()&lt;&lt;endl;
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="加锁例程-lock-unlock" tabindex="-1"><a class="header-anchor" href="#加锁例程-lock-unlock"><span>加锁例程（lock/unlock）</span></a></h3><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;thread&gt;			// 线程头文件
using namespace std;

class A
{
public:
    // 收集数据的线程
    void inMsgRecQueue()
    {  
        for(int i=0; i&lt;10000; ++i)			// 增加崩溃几率 
        {      
            cout &lt;&lt; &quot;_&quot;;
            mymutex.lock();					// 【互斥量】加锁  
            msgRecvQueue.push_back(i);		// 写操作是非原子性的 
            mymutex.unlock();				// 【互斥量】解锁 
        } 
    }   
    // 取出数据的线程   
    void outMsgRecQueue()  
    {    
        for(int i=0; i&lt;10000; ++i)			// 增加崩溃几率  
        {          
            mymutex.lock();					// 【互斥量】加锁   
            if(!msgRecvQueue.empty())		// 读        
            {            
                mymutex.lock();				// 【互斥量】加锁        
                msgRecvQueue.front();		// 返回第一个元素但不检查是否存在    
                msgRecvQueue.pop_front();	// 移除第一个元素但不返回，写操作是非原子性的   
                cout &lt;&lt; &quot;O&quot;;      
            }      
            mymutex.unlock();				// 【互斥量】解锁       
            else       
            {           
                cout &lt;&lt; &quot;空&quot;;    
            }      
        }  
    }
private 
    std::list&lt;int&gt; msgRecvQueue;			// 收到的消息列表  
    std::mutex mymutex;						// 【互斥量】创建一个互斥量成员变量
}  

int main()
{   
    A a; 
    thread threadI(&amp;A::inMsgRecQueue, &amp;a);	// 成员函数作为线程初始函数
    thread threadO(&amp;A::outMsgRecQueue, &amp;a);	// 成员函数作为线程初始函数
    threadI.json(); 
    threadO.json();   
    cout &lt;&lt; &quot;《主线程》&quot; &lt;&lt; endl  
        &lt;&lt;&quot;《线程id》&quot;&lt;&lt;std::this_thread:get_id()&lt;&lt;endl; 
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="智能互斥量" tabindex="-1"><a class="header-anchor" href="#智能互斥量"><span>智能互斥量</span></a></h2><h3 id="lock-guard" tabindex="-1"><a class="header-anchor" href="#lock-guard"><span>lock_guard</span></a></h3><h4 id="lock-guard-1" tabindex="-1"><a class="header-anchor" href="#lock-guard-1"><span>lock_guard</span></a></h4><p>加锁例程</p><p>原理：<code>std::lock_guard&lt;std::mutex&gt; sbguard(my_mutex);</code>生成的互斥量对象，在构造函数和析构函数调用时，自动加锁和解锁</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class A
{
public:   
    // 收集数据的线程  
    void inMsgRecQueue() 
    {     
        for(int i=0; i&lt;10000; ++i)			// 增加崩溃几率       
        {           
            cout &lt;&lt; &quot;_&quot;;      
            std::lock_guard&lt;std::mutex&gt; sbguard(my_mutex);		// 【智能互斥量】     
            msgRecvQueue.push_back(i);		// 写操作是非原子性的    
        }    
    }   
    // 取出数据的线程    
    void outMsgRecQueue()  
    {      
        for(int i=0; i&lt;10000; ++i)			// 增加崩溃几率    
        {      
            if(!msgRecvQueue.empty())		// 读     
            {             
                std::lock_guard&lt;std::mutex&gt; sbguard(my_mutex);	// 【智能互斥量】    
                msgRecvQueue.front();		// 返回第一个元素但不检查是否存在    
                msgRecvQueue.pop_front();	// 移除第一个元素但不返回，写操作是非原子性的  
                cout &lt;&lt; &quot;O&quot;;        
            }      
            else         
            {        
                cout &lt;&lt; &quot;空&quot;;   
            }    
        } 
    }
private  
    std::list&lt;int&gt; msgRecvQueue;			// 收到的消息列表  
    std::mutex mymutex;						// 【互斥量】创建一个互斥量成员变量
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="lock-guard-第二个参数" tabindex="-1"><a class="header-anchor" href="#lock-guard-第二个参数"><span>lock_guard 第二个参数</span></a></h4><ul><li><p>第二个参数：该参数是一个结构体对象，起一个标记的作用</p></li><li><p><code>std::adopt_lock</code></p><ul><li><p>作用：表示这个互斥量已经lock()了，不需要再lock一遍，只要负责析构时解锁就行了</p></li><li><p>应用：创建智能互斥量对象（组合）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>std::lock(mutexA, mutexB);										// 先组合锁
std::lock_guard&lt;std::mutex&gt; sbguard(mutexA, std::adopt_lock);	// 再设为析构自动解锁
std::lock_guard&lt;std::mutex&gt; sbguard(mutexB, std::adopt_lock);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h3 id="unique-lock" tabindex="-1"><a class="header-anchor" href="#unique-lock"><span>unique_lock</span></a></h3><h4 id="unique-lock-1" tabindex="-1"><a class="header-anchor" href="#unique-lock-1"><span>unique_lock</span></a></h4><ul><li>简概 <ul><li><code>unique_lock</code>是个类模板。和<code>lock_guard</code>的作用类似，但更灵活</li></ul></li><li>比较unique_lock、lock_guard <ul><li>选用：一般选用lock_guard</li><li>优点：更灵活。可以在代码中自由加锁解锁（锁锁住代码的多少，称为锁的<code>粒度的粗细</code>，粒度越细执行效率越高）</li><li>缺点：效率低一点，内存占用多点，但差别不大</li></ul></li><li>使用 <ul><li>可直接替换lock_guard使用</li><li>此时，功能和lock_guard没什么区别</li></ul></li></ul><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;thread&gt;			// 线程头文件
using namespace std;

class A
{
public:   
    // 收集数据的线程 
    void inMsgRecQueue()   
    {      
        for(int i=0; i&lt;10000; ++i)			// 增加崩溃几率   
        {        
            cout &lt;&lt; &quot;_&quot;;   
            std::unique_lock&lt;std::mutex&gt; sbguard(my_mutex);	// 【unique_lock】  
            msgRecvQueue.push_back(i);		// 写操作是非原子性的    
        }  
    }  
    // 取出数据的线程   
    void outMsgRecQueue() 
    {     
        for(int i=0; i&lt;10000; ++i)			// 增加崩溃几率   
        {          
            std::unique_lock&lt;std::mutex&gt; sbguard(my_mutex);	// 【unique_lock】            
            if(!msgRecvQueue.empty())		// 读       
            {            
                msgRecvQueue.front();		// 返回第一个元素但不检查是否存在  
                msgRecvQueue.pop_front();	// 移除第一个元素但不返回，写操作是非原子性的       
                cout &lt;&lt; &quot;O&quot;;     
            }           
            else   
            {       
                cout &lt;&lt; &quot;空&quot;;   
            }    
        }  
    }
private   
    std::list&lt;int&gt; msgRecvQueue;			// 收到的消息列表  
    std::mutex mymutex;						// 【互斥量】创建一个互斥量成员变量
}  

int main()
{   
    A a;  
    thread threadI(&amp;A::inMsgRecQueue, &amp;a);	// 成员函数作为线程初始函数 
    thread threadO(&amp;A::outMsgRecQueue, &amp;a);	// 成员函数作为线程初始函数 
    threadI.json();
    threadO.json(); 
    cout &lt;&lt; &quot;《主线程》&quot; &lt;&lt; endl    
        &lt;&lt;&quot;《线程id》&quot;&lt;&lt;std::this_thread:get_id()&lt;&lt;endl;  
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="unique-lock-休眠操作" tabindex="-1"><a class="header-anchor" href="#unique-lock-休眠操作"><span>unique_lock 休眠操作</span></a></h4><p>休眠（锁完以后休眠20s）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>std::unique_lock&lt;std::mutex&gt; sbguard(my_mutex);	// 【unique_lock】
std::chrono::milliseconds dura(2000);			// 【20s】
std::this_thread::sleep_for(dura);				// 【休息20s】
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="unique-lock-第二个参数" tabindex="-1"><a class="header-anchor" href="#unique-lock-第二个参数"><span>unique_lock 第二个参数</span></a></h4><ul><li><p>第二个参数：该参数是一个结构体对象，起一个标记的作用</p></li><li><p><code>std::adopt_lock</code></p><ul><li><p>作用：表示这个互斥量已经lock()了，不需要再lock一遍，只要负责析构时解锁就行了 使用前需要手动lock互斥量</p></li><li><p>应用：创建智能互斥量对象（组合）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>std::lock(mutexA, mutexB);										// 先组合锁
std::unique_lock&lt;std::mutex&gt; sbguard(mutexA, std::adopt_lock);	// 再设为析构自动解锁
std::unique_lock&lt;std::mutex&gt; sbguard(mutexB, std::adopt_lock);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>这个标记和在lock_guard中的用法一样</p></li></ul></li><li><p><code>std::try_to_lock</code></p><ul><li><p>作用：尝试去lock()，若没有锁定成功则立即返回，而不会阻塞 注意使用前不要自己先lock互斥量，否则会出错</p></li><li><p>应用：</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>std::unique_lock&lt;std::mutex&gt; sbgruad1(my_mutex1, std::try_to_back);
if(shguard1.owns_lock())	// 拿到了锁
{  
    // 操作共享数据
}
else						// 没拿到锁
{   
    // 干点其他事情
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p><code>std::defer_lock</code></p><ul><li><p>作用：初始化一个没有加锁的mutex 使用前不能自己lock互斥量，否则报异常 使用后需要lock()，且不需要手动解锁</p></li><li><p>优点：加锁解锁较自由</p></li><li><p>缺点：这里并没有真正加锁原来的那个互斥量，读写时可能会出问题（不稳定）</p></li><li><p>应用：</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>std::unique_lock&lt;std::mutex&gt; sbgruad1(my_mutex1, std::defer_lock);	// 初始化一个没有加锁的mutex并添加到智能指针的成员
subgruad1.lock();													// 加锁那个初始化的mutex，并且该mutex可以被自动解锁
// 处理一些非共享数据
subgruad1.unlock();
subgruad1.lock();
// 继续处理共享数据
// subgruad1.unlock(); // 写不写都行，该模式的智能互斥量指针析构会自动检查有无解锁
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h4 id="unique-lock-成员函数" tabindex="-1"><a class="header-anchor" href="#unique-lock-成员函数"><span>unique_lock 成员函数</span></a></h4><ul><li><p><code>lock()</code></p><ul><li>加锁，和互斥量用法一样</li></ul></li><li><p><code>unlock()</code></p><ul><li>解锁，和互斥量用法一样</li></ul></li><li><p><code>try_lock()</code></p><ul><li>尝试给互斥量加锁，如果拿不到锁则返回false，否则返回true。不阻塞</li><li>和unique_lock的<code>std::try_to_lock</code>参数的作用类似</li></ul></li><li><p><code>release()</code></p><ul><li><p>返回它管理的mutext对象指针，并释放所有权</p></li><li><p>即使unique_lock和构建它的mutext不再有关系</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>std::unique_lock&lt;std::mutex&gt; sbguard1(my_mutex1);
std::mutex *ptx = sbguard1.release();	// 此时 ptx == my_mutex1。由于和智能互斥量解除关系，现在需要自己解锁了
// ...
ptx-&gt;unlock();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h4 id="unique-lock-所有权的传递" tabindex="-1"><a class="header-anchor" href="#unique-lock-所有权的传递"><span>unique_lock 所有权的传递</span></a></h4><ul><li><p>概念</p><ul><li><p>如下例程所示</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>std::unique_lock&lt;std::mutex&gt; sbguard1(mutex1);	// 此时sbguard1拥有mutex1的所有权
std::unique_lock&lt;std::mutex&gt; sbguard2(mutex1);	// 此时sbguard2不能再拥有mutex1的所有权，该行会报错
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>所有权的转移</p><ul><li><p>概念：unique_lock该对象可以转移mutex参数的所有权，但不能复制。这和unique_ptr一样，属于独占型智能指针</p></li><li><p>方法1（std::move方法调用移动构造函数）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>std::unique_lock&lt;std::mutex&gt; sbguard1(mutex1);				// 此时sbguard1拥有mutex1的所有权
// std::unique_lock&lt;std::mutex&gt; sbguard2(sbguard1);			// 非法报错，不能复制所有权
std::unique_lock&lt;std::mutex&gt; sbguard2(std:move(sbguard1));	// 移动语义，参数变为右值，所有权转移。此时sbguard1指向空
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>方法2（返回局部对象从而调用移动构造函数）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>std::unique_lock&lt;std::mutex&gt; rtn_unique_lock(){   
    std::unique_lockKstd::mutex&gt; tmpguard(my_mutex1):  
    return tmpguard:	//从函数返回一个局部的unique_lock对象是可以的。  
    // 移动构造函数的知识：返回局部对象会导致系统生成临时的对象，并调用相应的移动构造函数
}
std::unique_lock&lt;std::mutex&gt; sbguard1 = rtn_unique_lock();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="死锁-多个互斥量" tabindex="-1"><a class="header-anchor" href="#死锁-多个互斥量"><span>死锁（多个互斥量）</span></a></h2><ul><li><p>造成原因：至少有两个互斥量才会造成死锁</p><ul><li>抽象场景举例 <ul><li>线程1依次执行：<code>mutexA.lock();</code>、<code>mutexB.lock();</code></li><li>线程2依次执行：<code>mutexB.lock();</code>、<code>mutexA.lock();</code></li><li>当线程1锁完mutexA后上下文切换为线程2并锁了mutexB，就会形成死锁</li><li>此时两个线程都会一直阻塞</li></ul></li><li>具体场景距离 <ul><li>占有资源、并去抢占其他资源，就有可能会出现死锁</li></ul></li></ul></li><li><p>解决方案</p><ul><li>保证两个互斥量上锁的顺序一致</li><li>可用<code>std::lock()</code>函数模板解决</li></ul></li><li><p><code>std::lock()</code>函数模板</p><ul><li>作用：一次锁住多个互斥量，可避免在多个线程中因为锁顺序问题导致死锁</li><li>原理：如遇到没被锁的互斥量则锁住，直到互斥量中有一个没锁住则立即解锁之前锁住的互斥量，并阻塞循环直到组合中所有互斥量都被锁住</li><li>使用：<code>std::lock(mutexA, mutexB);</code>后，要与解锁配对：<code>mutexA.unlock(); mutexB.unlock();</code></li></ul></li><li><p>结合智能互斥量</p><ul><li><p><code>std::adopt_lock</code>参数</p><ul><li>简概：这是个结构体对象，起一个标记的作用</li><li>作用：表示这个互斥量已经lock()了，不需要再lock一遍，只要负责析构时解锁就行了</li><li>应用：创建智能互斥量对象（组合）</li></ul></li><li><p>写法</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>std::lock(mutexA, mutexB);										// 先组合锁
std::lock_guard&lt;std::mutex&gt; sbguard(mutexA, std::adopt_lock);	// 再设为析构自动解锁
std::lock_guard&lt;std::mutex&gt; sbguard(mutexB, std::adopt_lock);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><ul><li><p><code>std::mutex</code>，创建互斥量对象</p></li><li><p><code>std::lock()</code>，组合锁的函数模板</p></li><li><p>创建智能互斥量对象（非组合）</p><ul><li><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>std::lock_guard&lt;std::mutex&gt; sbguard(mutexA);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p>创建智能互斥量对象（组合）</p><ul><li><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>std::lock(mutexA, mutexB);										// 先组合锁
std::lock_guard&lt;std::mutex&gt; sbguard(mutexA, std::adopt_lock);	// 再设为析构自动解锁
std::lock_guard&lt;std::mutex&gt; sbguard(mutexB, std::adopt_lock);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul>`,38),s=[t];function u(a,c){return i(),l("div",null,s)}const m=e(d,[["render",u],["__file","04. 线程锁.html.vue"]]),o=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/C__/04.%20%E4%BC%98%E5%8C%96/%E5%A4%9A%E7%BA%BF%E7%A8%8B/04.%20%E7%BA%BF%E7%A8%8B%E9%94%81.html","title":"多线程 - 线程锁","lang":"zh-CN","frontmatter":{"description":"多线程 - 线程锁 互斥量（mutex） 简概 简概 互斥量是个类对象，理解成一把锁 使用互斥量要小心，多了影响效率、少了则不安全 使用 std::mutex mymutex;，创建类成员变量 lock()，成员函数能够对线程进行加锁。同一时间只有一个线程能够锁成功； 锁成功时会返回true，若没锁成功则阻塞会一直尝试调用lock() unlock()...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/C__/04.%20%E4%BC%98%E5%8C%96/%E5%A4%9A%E7%BA%BF%E7%A8%8B/04.%20%E7%BA%BF%E7%A8%8B%E9%94%81.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"多线程 - 线程锁"}],["meta",{"property":"og:description","content":"多线程 - 线程锁 互斥量（mutex） 简概 简概 互斥量是个类对象，理解成一把锁 使用互斥量要小心，多了影响效率、少了则不安全 使用 std::mutex mymutex;，创建类成员变量 lock()，成员函数能够对线程进行加锁。同一时间只有一个线程能够锁成功； 锁成功时会返回true，若没锁成功则阻塞会一直尝试调用lock() unlock()..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"多线程 - 线程锁\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"多线程 - 线程锁","slug":"多线程-线程锁","link":"#多线程-线程锁","children":[{"level":2,"title":"互斥量（mutex）","slug":"互斥量-mutex","link":"#互斥量-mutex","children":[{"level":3,"title":"简概","slug":"简概","link":"#简概","children":[]},{"level":3,"title":"错误例程（边读边写，会崩溃）","slug":"错误例程-边读边写-会崩溃","link":"#错误例程-边读边写-会崩溃","children":[]},{"level":3,"title":"加锁例程（lock/unlock）","slug":"加锁例程-lock-unlock","link":"#加锁例程-lock-unlock","children":[]}]},{"level":2,"title":"智能互斥量","slug":"智能互斥量","link":"#智能互斥量","children":[{"level":3,"title":"lock_guard","slug":"lock-guard","link":"#lock-guard","children":[{"level":4,"title":"lock_guard","slug":"lock-guard-1","link":"#lock-guard-1","children":[]},{"level":4,"title":"lock_guard 第二个参数","slug":"lock-guard-第二个参数","link":"#lock-guard-第二个参数","children":[]}]},{"level":3,"title":"unique_lock","slug":"unique-lock","link":"#unique-lock","children":[{"level":4,"title":"unique_lock","slug":"unique-lock-1","link":"#unique-lock-1","children":[]},{"level":4,"title":"unique_lock 休眠操作","slug":"unique-lock-休眠操作","link":"#unique-lock-休眠操作","children":[]},{"level":4,"title":"unique_lock 第二个参数","slug":"unique-lock-第二个参数","link":"#unique-lock-第二个参数","children":[]},{"level":4,"title":"unique_lock 成员函数","slug":"unique-lock-成员函数","link":"#unique-lock-成员函数","children":[]},{"level":4,"title":"unique_lock 所有权的传递","slug":"unique-lock-所有权的传递","link":"#unique-lock-所有权的传递","children":[]}]}]},{"level":2,"title":"死锁（多个互斥量）","slug":"死锁-多个互斥量","link":"#死锁-多个互斥量","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":9.05,"words":2714},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/01. Language/C++/04. 优化/多线程/04. 线程锁.md","autoDesc":true}');export{m as comp,o as data};

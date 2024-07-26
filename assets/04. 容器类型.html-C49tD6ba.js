import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as a,c as d,a as e,b as n,d as c,e as l}from"./app-CoO7IlkE.js";const r={},o=l(`<h1 id="_04-容器类型" tabindex="-1"><a class="header-anchor" href="#_04-容器类型"><span>04. 容器类型</span></a></h1><h2 id="类型模板类-结构体-struct" tabindex="-1"><a class="header-anchor" href="#类型模板类-结构体-struct"><span>类型模板类 &gt; 结构体 struct</span></a></h2><h3 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h3><ul><li>说明：是C++ OOP的基石，是用户定义的类型</li><li><strong>使用场景</strong>：C语言没有面向对象性质时模拟使用</li></ul><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3><blockquote><h4 id="字面量方式-与c不同" tabindex="-1"><a class="header-anchor" href="#字面量方式-与c不同"><span>字面量方式（与C不同）</span></a></h4></blockquote><ul><li><p><strong>类型定义</strong>：<code>struct 结构名{结构的成员}</code>，例<code>struct inflatable {char name[20]; float volume;}</code></p><p>可以声明位数，例<code>struct inflatable {unsigned int:4; bool goodIn:1;}</code></p><p>可以使用没有名称的字段来提供间距</p></li><li><p><strong>声明</strong>：<code>[struct] 结构名 变量名</code>，例<code>inflatable guest</code><mark>（C++允许省略&quot;struct&quot;）</mark></p></li><li><p><strong>初始化</strong></p><ul><li>C语言：<code>[struct] 结构名 变量名 = {对应参数}</code>，例<code>inflatable guest = {&quot;Tony&quot;, 1.88}</code></li><li>C++：<code>[struct] 结构名 变量名 {对应参数}</code>（即大括号初始化省略等号）</li></ul></li><li><p><strong>赋值</strong>：结构之间可以相互赋值</p></li><li><p><strong>访问成员</strong>：使用句点运算符，例<code>inflatable.name</code></p></li></ul><h2 id="数组-与python列表不同" tabindex="-1"><a class="header-anchor" href="#数组-与python列表不同"><span>数组（与python列表不同）</span></a></h2><h3 id="简概-1" tabindex="-1"><a class="header-anchor" href="#简概-1"><span>简概</span></a></h3><ul><li>创建声明：要创建数组，声明应指出：存储在每个元素中的值的类型、数组名、元素数</li><li>子类型：int数组、float数组......等等</li></ul><h3 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1"><span>使用</span></a></h3><blockquote><h4 id="字面量方式" tabindex="-1"><a class="header-anchor" href="#字面量方式"><span>字面量方式</span></a></h4></blockquote><p>整体</p><ul><li><p><strong>声明一般方式</strong>：通用格式<code>typeName arrayName[arraySize]</code>，例如<code>short months[12]</code></p><p>其中所有的值在<mark>编译时</mark>都是已知的，即arraySize不能是变量，变量的值是在程序运行时设置的（可以用new方式绕开）</p></li><li><p><strong>初始化一般方式</strong>：使用大括号初始化</p><ul><li>一般用法：<code>int ai_foo[4] = {3, 6, 8, 10}</code></li><li>自动填补：若不写完整，如<code>= {1}</code>，则其他元素被初始化为0</li><li>全零简便写法：基于空值自动填补0的特性，<code>int ai_foo[4] = {0}</code>即全部元素被初始化为0</li><li>自动计算个数：<code>int ai_foo[] = {1, 2, 3, 4}</code>，自动计算数组长度并计算（主要是字符数组初始化为字符串比较方便）</li><li>注意项：大括号初始化法只有在初始化时才能用，后期无法使用</li><li>注意项：C语言只能通过大括号初始器（列表初始化）初始化<code>类变量</code>，C++将其作为一种通用初始化方式，并且其新增了一些功能： <ul><li>可省略等号，如<code>int n_int {1}</code></li><li>可省略大括号里的值（初始化为0），如<code>int n_int {}</code>（优点：能更好防范类型转换错误）</li><li>禁止缩窄转换，如不能<code>int n_int {1.0}</code></li></ul></li></ul></li><li><p><strong>数组赋值</strong>：不能够使用大括号初始化法赋值、也不能将一个数组赋个另一个数组（赋值的是地址）</p></li><li><p><strong>多维数组</strong>：例<code>int maxtemps[4][5]</code></p></li></ul><p>元素</p><ul><li><strong>使用元素</strong>：用方括号标注序列</li><li><strong>元素赋值</strong>：可以正常赋值</li></ul><blockquote><h4 id="内置函数操作" tabindex="-1"><a class="header-anchor" href="#内置函数操作"><span>内置函数操作</span></a></h4></blockquote><ul><li><strong>计算长度</strong>：<code>sizeof()</code>只能知道总字节数，但可以这样求：<code>sizeof(ari_val) / sizeof(ari_val[0])</code></li></ul><h2 id="【模板容器】vector" tabindex="-1"><a class="header-anchor" href="#【模板容器】vector"><span>【模板容器】Vector</span></a></h2><p>（数组的代替品）</p><h3 id="简概-2" tabindex="-1"><a class="header-anchor" href="#简概-2"><span>简概</span></a></h3><p>C++标准模板库（STL）提供了数组代替品：模板类<code>vector</code>和<code>array</code>（第16章）</p><ul><li>本质 <ul><li>模板类</li><li>动态数组（基本上，是使用new创建动态数组的替代品，也使用new和delete管理内存，但这种工作是自动完成的）</li></ul></li><li>优点： <ul><li>动态数组（动态联结）： <ul><li>可用在运行阶段设置长度</li><li>可在末尾附加新数据、中间插入新数据</li></ul></li></ul></li></ul><h3 id="使用-2" tabindex="-1"><a class="header-anchor" href="#使用-2"><span>使用</span></a></h3><ul><li>头文件：<code>#include &lt;vector&gt;</code></li><li>名称空间：<code>using namespace std</code></li><li>定义：（由于可以动态调整长度，因此可以将初始长度设置为零） <ul><li>通用格式：<code>vector&lt;typeName&gt; vt[(n_elem)=(0)]</code>，n_elem可以是整型常量或变量</li><li>举例：<code>vector&lt;int&gt; vn</code>（不传参数则设置长度为零）、<code>vector&lt;double&gt; vd(n)</code></li></ul></li></ul><h2 id="【模板容器】array" tabindex="-1"><a class="header-anchor" href="#【模板容器】array"><span>【模板容器】Array</span></a></h2><p>（数组的替代品）</p><h3 id="简概-3" tabindex="-1"><a class="header-anchor" href="#简概-3"><span>简概</span></a></h3><p>和vector差不多</p><h3 id="使用-3" tabindex="-1"><a class="header-anchor" href="#使用-3"><span>使用</span></a></h3><ul><li>头文件：<code>#include &lt;array&gt;</code>，使用命名空间<code>std</code></li><li>定义： <ul><li>通用格式：<code>array&lt;typeName, n_elem&gt; arr</code>，n_elem只能为整型常量</li></ul></li></ul><h2 id="【高级容器】tuple元组-c-11" tabindex="-1"><a class="header-anchor" href="#【高级容器】tuple元组-c-11"><span>【高级容器】Tuple元组（C++11）</span></a></h2><h3 id="简概-4" tabindex="-1"><a class="header-anchor" href="#简概-4"><span>简概</span></a></h3><p>tuple是一个强大的<strong>允许存放多个不同类型数据的容器</strong>，是对pair的泛化</p><p>std::tuple理论上可以有无数个任意类型的成员变量，而std::pair只能是2个成员，因此在需要保存3个及以上的数据时就需要使用tuple元组了（tuple（元组）在c++11中开始引用的。）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>std::tuple&lt;T1, T2, TN&gt; t1; //创建一个空的tuple对象（使用默认构造），对应的元素分别是T1和T2...Tn类型，采用值初始化
std::tuple&lt;T1, T2, TN&gt; t2(v1, v2, ... TN);  //创建一个tuple对象，它的两个元素分别是T1和T2 ...Tn类型; 要获取元素的值需要通过tuple的成员get&lt;Ith&gt;(obj)进行获取(Ith是指获取在tuple中的第几个元素，请看后面具体实例)。
std::tuple&lt;T1&amp;&gt; t3(ref&amp;); // tuple的元素类型可以是一个引用
std::make_tuple(v1, v2); // 像pair一样也可以通过make_tuple进行创建一个tuple对象
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【高级容器】boost-any" tabindex="-1"><a class="header-anchor" href="#【高级容器】boost-any"><span>【高级容器】Boost::any</span></a></h2>`,37),v={href:"https://www.cnblogs.com/qiangxia/p/4578667.html",target:"_blank",rel:"noopener noreferrer"},u=l(`<h3 id="使用-4" tabindex="-1"><a class="header-anchor" href="#使用-4"><span>使用</span></a></h3><p>用法示例（一个可以存任意不同类型的数组，类似于python的列表）</p><p>补充：Python列表的原理：参考：https://cloud.tencent.com/developer/article/1820193</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;list&gt;
#include &lt;boost/any.hpp&gt;	// boost库

typedef std::list&lt;boost::any&gt; list_any;

//关键部分：可以存放任意类型的对象
void fill_list(list_any&amp; la)
{    
    la.push_back(10);//存放常数 
    la.push_back( std::string(&quot;dyunze&quot;) );//存放字符串对象；注意la.push_back(“dyunze”)错误，因为会被当错字符串数组
}

//根据类型进行显示
void show_list(list_any&amp; la)
{
    list_any::iterator it;
    boost::any anyone;

    for( it = la.begin(); it != la.end(); it++ )		// 遍历显示内容
    {    
        anyone = *it;

        if( anyone.type() == typeid(int) )				// 显示Int
            std::cout&lt;&lt;boost::any_cast&lt;int&gt;(*it)&lt;&lt;std::endl;
        else if( anyone.type() == typeid(std::string) )	// 显示字符串
            std::cout&lt;&lt;boost::any_cast&lt;std::string&gt;(*it).c_str()&lt;&lt;std::endl;
    }
}

int main()
{
    list_any la;
    fill_list(la);
    show_list(la);

    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点"><span>优缺点</span></a></h3><p>优点1 —— 能存放类型本身</p><p>对设计模式理解的朋友都会知道<strong>合成模式</strong>。因为多态只有在使用指针或引用的情况下才能显现，所以std容器中只能存放指针或引用（但实际上只能存放指针，无法存放引用，这个好像是c++的不足吧）。如：</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>std::list&lt;BaseClass*&gt; mylist;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样，我们就要对指针所指向内容的生存周期操心 (可能需要程序员适时删除申请的内存；但是由于存放指针，插入/删除的效率高)， 而使用boost::any就可能避免这种情况，因为我们可以存放类型本身（当然存放指针也可以）。这是boost::any的优点之一。</p><p>优点2 —— 可以存放任何类型</p><p>而前面提到的mylist只能存放BaseClass类指针以及其继承类的指针。</p><p>缺点</p><p>由于boost::any可以存放任何类型，自然它<strong>用不了多态特性</strong>，没有统一的接口，所以<strong>在获取容器中的元素时需要实现判别元素的真正类型</strong>，这增加了程序员的负担。与面向对象编程思想有些矛盾，但整个标准c++模板库何尝不是如此，用那些牛人的话来说，是“有益补充”。</p><p>总之，有利必有弊，没有十全十美的</p><h3 id="分析并模仿boost-any" tabindex="-1"><a class="header-anchor" href="#分析并模仿boost-any"><span>分析并模仿boost::any</span></a></h3><p>分析</p><p>实现any的功能主要由三部分组成：</p><ol><li>any类</li><li>真正保存数据的holder类及其基类placeholder</li><li>获取真正数据的模板函数any_cast，类型转换的功能。</li></ol><p>模仿</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;list&gt;
#include &lt;cassert&gt;
												//////// 自定义的any类
class any
{
public:
    
    											//////// 保存真正数据的接口类（纯虚基类）I，不用模板
    class placeholder
    {
    public: 
        virtual const std::type_info &amp; type() const = 0;
        virtual placeholder * clone() const = 0;
        virtual ~placeholder(){}
    };

    											//////// 真正保存和获取数据的类（派生类）II，用了模板
    											//////// 即会生成多个placeholder的派生类，他们都继承于placeholder
    template&lt;typename ValueType&gt;
    class holder : public placeholder
    {
    public: 
        ValueType held;         		// 真正的数据，就保存在这里
        holder(const ValueType &amp; value): held(value){}
        virtual const std::type_info &amp; type() const
        {
            return typeid(ValueType);
        }
        virtual placeholder * clone() const
        {
            return new holder(held); 	// 使用了原型模式。即拷贝构造时通过深克隆原型来创建新的对象
        }
    };

public:
    any(): content(NULL){}

    //模板构造函数，参数可以是任意类型，真正的数据保存在content中
    template&lt;typename ValueType&gt;
    any(const ValueType &amp; value): content(new holder&lt;ValueType&gt;(value)){}  

    //拷贝构造函数
    any(const any &amp; other)
        : content(other.content ? other.content-&gt;clone() : 0){}

    //析构函数，删除保存数据的content对象
    ~any()
    {
        if(NULL != content)
            delete content;
    }

private:
    //一个placeholde对象指针，指向其子类folder的一个实现
    // 即content( new holder&lt;ValueType&gt;(value) )语句
    placeholder* content;
    											//////// 获取真正数据的模板函数（友元）I
    template&lt;typename ValueType&gt; friend ValueType any_cast(const any&amp; operand);
    
public: 
    //查询真实数据的类型。
    const std::type_info &amp; type() const
    {
        return content ? content-&gt;type() : typeid(void);
    }
};

												//////// 获取真正数据的模板函数（友元）II
//获取content-&gt;helder数据的方法。用来获取真正的数据
template&lt;typename ValueType&gt;
ValueType any_cast(const any&amp; operand)
{
    assert( operand.type() == typeid(ValueType) );
    return static_cast&lt;any::holder&lt;ValueType&gt; *&gt;(operand.content)-&gt;held;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>typedef std::list&lt;any&gt; list_any;

void fill_list(list_any&amp; la)
{    
    la.push_back(10);//存放常数；调用了any的模板构造函数，下同
    la.push_back( std::string(&quot;我是string&quot;) );//存放字符串对象；注意la.push_back(“dyunze”)错误，因为会被当错字符串数组

    char* p = &quot;我是常量区字符串abc&quot;;
    la.push_back(p);//可以存放指针，但要注意指针的失效问题
}

//根据类型进行显示
void show_list(list_any&amp; la)
{
    list_any::iterator it;

    for( it = la.begin(); it != la.end(); it++ )
    {    

        if( (*it).type() == typeid(int) )
            std::cout&lt;&lt;any_cast&lt;int&gt;(*it)&lt;&lt;std::endl;
        else if( (*it).type() == typeid(std::string) )
            std::cout&lt;&lt;any_cast&lt;std::string&gt;(*it).c_str()&lt;&lt;std::endl;
        else if( (*it).type() == typeid(char*) )
            std::cout&lt;&lt;any_cast&lt;char*&gt;(*it)&lt;&lt;std::endl;
    }
}

int main()
{
    list_any la;
    fill_list(la);
    show_list(la);

    return 0;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function p(m,b){const i=s("ExternalLinkIcon");return a(),d("div",null,[o,e("p",null,[n("参考："),e("a",v,[n("【博客园】转 - boost::any的用法、优点和缺点以及源代码分析"),c(i)])]),u])}const y=t(r,[["render",p],["__file","04. 容器类型.html.vue"]]),_=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/C__/02.%20%E6%95%B0%E6%8D%AE_%E7%AE%97%E6%B3%95/04.%20%E5%AE%B9%E5%99%A8%E7%B1%BB%E5%9E%8B.html","title":"04. 容器类型","lang":"zh-CN","frontmatter":{"description":"04. 容器类型 类型模板类 > 结构体 struct 简概 说明：是C++ OOP的基石，是用户定义的类型 使用场景：C语言没有面向对象性质时模拟使用 使用 字面量方式（与C不同） 类型定义：struct 结构名{结构的成员}，例struct inflatable {char name[20]; float volume;} 可以声明位数，例stru...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/C__/02.%20%E6%95%B0%E6%8D%AE_%E7%AE%97%E6%B3%95/04.%20%E5%AE%B9%E5%99%A8%E7%B1%BB%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"04. 容器类型"}],["meta",{"property":"og:description","content":"04. 容器类型 类型模板类 > 结构体 struct 简概 说明：是C++ OOP的基石，是用户定义的类型 使用场景：C语言没有面向对象性质时模拟使用 使用 字面量方式（与C不同） 类型定义：struct 结构名{结构的成员}，例struct inflatable {char name[20]; float volume;} 可以声明位数，例stru..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"04. 容器类型\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"04. 容器类型","slug":"_04-容器类型","link":"#_04-容器类型","children":[{"level":2,"title":"类型模板类 > 结构体 struct","slug":"类型模板类-结构体-struct","link":"#类型模板类-结构体-struct","children":[{"level":3,"title":"简概","slug":"简概","link":"#简概","children":[]},{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]}]},{"level":2,"title":"数组（与python列表不同）","slug":"数组-与python列表不同","link":"#数组-与python列表不同","children":[{"level":3,"title":"简概","slug":"简概-1","link":"#简概-1","children":[]},{"level":3,"title":"使用","slug":"使用-1","link":"#使用-1","children":[]}]},{"level":2,"title":"【模板容器】Vector","slug":"【模板容器】vector","link":"#【模板容器】vector","children":[{"level":3,"title":"简概","slug":"简概-2","link":"#简概-2","children":[]},{"level":3,"title":"使用","slug":"使用-2","link":"#使用-2","children":[]}]},{"level":2,"title":"【模板容器】Array","slug":"【模板容器】array","link":"#【模板容器】array","children":[{"level":3,"title":"简概","slug":"简概-3","link":"#简概-3","children":[]},{"level":3,"title":"使用","slug":"使用-3","link":"#使用-3","children":[]}]},{"level":2,"title":"【高级容器】Tuple元组（C++11）","slug":"【高级容器】tuple元组-c-11","link":"#【高级容器】tuple元组-c-11","children":[{"level":3,"title":"简概","slug":"简概-4","link":"#简概-4","children":[]}]},{"level":2,"title":"【高级容器】Boost::any","slug":"【高级容器】boost-any","link":"#【高级容器】boost-any","children":[{"level":3,"title":"使用","slug":"使用-4","link":"#使用-4","children":[]},{"level":3,"title":"优缺点","slug":"优缺点","link":"#优缺点","children":[]},{"level":3,"title":"分析并模仿boost::any","slug":"分析并模仿boost-any","link":"#分析并模仿boost-any","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":7.95,"words":2386},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/01. Language/C++/02. 数据+算法/04. 容器类型.md","autoDesc":true}');export{y as comp,_ as data};

import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as t,c,b as e,e as i,d as l,a}from"./app-CMEFroyS.js";const r={},o=a(`<h1 id="_05-指针类型" tabindex="-1"><a class="header-anchor" href="#_05-指针类型"><span>05. 指针类型</span></a></h1><h2 id="指针" tabindex="-1"><a class="header-anchor" href="#指针"><span>指针</span></a></h2><h3 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h3><p>指针</p><ul><li>定义：指针是一个存储值的地址的变量</li><li>计算机存储数据时跟踪3种基本属性 <ul><li>信息存储在何处</li><li>存储的值是多少</li><li>存储信息什么类型</li></ul></li><li>连续定义时 <ul><li>有的系统先定义的在高位（Windows x86）</li><li>有的系统先定义的在低位（Widnows x64）</li><li>有的系统不会把不同类型的变量放在相邻的内存单元中</li></ul></li><li>与常规变量区别 <ul><li>使用常规变量时：值是指定的量，而地址是派生量</li><li>使用地址变量时：地址是指定的量，而值是派生量</li></ul></li><li>指针与数组 <ul><li>基本等价，这是C和C++的优点之</li></ul></li></ul><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3><blockquote><h4 id="字面量方式" tabindex="-1"><a class="header-anchor" href="#字面量方式"><span>字面量方式</span></a></h4></blockquote><ul><li><strong>初始化</strong>：例<code>int * pi_e = &amp;i_e</code>中，<code>i_e = *pi_e= 值</code>，<code>&amp;i_e = pi_e = 地址</code> 补充：定义时<code>*</code>两侧的空格可有可无，一般都有 补充：这里定义时和函数原型中的<code>*</code>、<code>&amp;</code>、<code>[]</code>，不要理解成地址运算符、解除引用运算符这些，而应理解为类型标识符</li><li><strong>指定地址初始化</strong>：<code>int * pt = (int *) 0xB8000000</code></li><li><strong>定义空指针的三种方式</strong><ul><li>0</li><li>NULL（需要NULL头文件）</li><li>nullptr（C++11新增）</li></ul></li></ul><blockquote><h4 id="符号操作" tabindex="-1"><a class="header-anchor" href="#符号操作"><span>符号操作</span></a></h4></blockquote><ul><li><strong>取地址</strong>：用法<code>&amp;变量</code>，<code>&amp;</code>运算符被称为<code>地址运算符</code></li><li><strong>地址取值</strong>：用法<code>*地址</code>，<code>*</code>运算符被称为<code>间接值或解除引用运算符</code></li></ul><blockquote><h4 id="指针-x-const" tabindex="-1"><a class="header-anchor" href="#指针-x-const"><span>指针 x const</span></a></h4></blockquote><p>两种标注方法</p><blockquote><h4 id="指针-x-异常" tabindex="-1"><a class="header-anchor" href="#指针-x-异常"><span>指针 x 异常</span></a></h4></blockquote><p>C++标准提供了一种在失败时返回空指针的new</p><h1 id="深度剖析指针【专题】" tabindex="-1"><a class="header-anchor" href="#深度剖析指针【专题】"><span>深度剖析指针【专题】</span></a></h1><p>内容很庞大的一章</p><p>C语言的指针玩得比较花，C++其实还是应该多研究模板、C++11+这些东西</p><h2 id="各种指针" tabindex="-1"><a class="header-anchor" href="#各种指针"><span>各种指针</span></a></h2><p>参考</p><ul><li>https://blog.csdn.net/a22025340/article/details/124013311</li><li>https://blog.csdn.net/afei__/article/details/81985937</li></ul><h3 id="基本数据类型指针" tabindex="-1"><a class="header-anchor" href="#基本数据类型指针"><span>基本数据类型指针</span></a></h3><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>int * pi_e = &amp;i_e;
pi_e = &amp;i_e = 地址;	// True
*pi_e = i_e =  值;  	 // True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器指针" tabindex="-1"><a class="header-anchor" href="#容器指针"><span>容器指针</span></a></h3><h4 id="多维容器指针" tabindex="-1"><a class="header-anchor" href="#多维容器指针"><span>多维容器指针</span></a></h4><h4 id="嵌套指针" tabindex="-1"><a class="header-anchor" href="#嵌套指针"><span>嵌套指针</span></a></h4><h3 id="函数指针" tabindex="-1"><a class="header-anchor" href="#函数指针"><span>函数指针</span></a></h3>`,26),u={href:"https://zhuanlan.zhihu.com/p/168627944",target:"_blank",rel:"noopener noreferrer"},v=a(`<p>核心</p><ul><li>函数指针只在乎声明传入参数和返回参数信息，即相同参数数量类型和返回类型的函数都能用这个指针来表示</li><li>非静态类函数指针除外，还需要多声明一个所属类</li></ul><h4 id="函数指针-1" tabindex="-1"><a class="header-anchor" href="#函数指针-1"><span>函数指针</span></a></h4><p>函数指针的作用</p><ul><li>充当回调函数（以函数指针为参数的函数）</li><li>其他</li></ul><p>基本用法</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>
double pam(int);			// 函数原型
double (*pf)(int) = pam;    // 声明函数指针
pf()						// 使用函数指针

// 复杂点的例子如下
void printdata(int (*p)(int,int),int a,int b){
    cout&lt;&lt;p(a,b)&lt;&lt;endl;
}
void (*pp) (int(*)(int,int),int,int) = printdata;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="使用typedef简化" tabindex="-1"><a class="header-anchor" href="#使用typedef简化"><span>使用typedef简化</span></a></h5><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>typedef int (*ptr)(int, int);
ptr p1 = get_sum;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="使用auto简化" tabindex="-1"><a class="header-anchor" href="#使用auto简化"><span>使用auto简化</span></a></h5><div class="language-C++ line-numbers-mode" data-ext="C++" data-title="C++"><pre class="language-C++"><code>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="函数参数指针" tabindex="-1"><a class="header-anchor" href="#函数参数指针"><span>函数参数指针</span></a></h4><ul><li><p>写法（数组作参和指针作参）</p><ul><li><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>int sum_arr(int arr[], int n);		// 数组作参
int sum_arr(int *arr, int n);		// 指针作参
int sum_arr(char * str, char ch);	// 字符串作参
int sum(int ar2[][4], int size);	// 多维数组作参
int sum(int (*ar2)[4], int size);	// 多维指针作参
char * buildstr(char c, int n);		// 字符串返回值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>函数原型中（可省略函数名），这些写法是等价的：</p><ul><li><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>const double * f1(const double ar[], int n);
const double * f2(const double [], int n);
const double * f3(const double *, int n);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h3 id="类指针" tabindex="-1"><a class="header-anchor" href="#类指针"><span>类指针</span></a></h3><p><mark>（需结合 “面向对象_继承_虚” 笔记一起使用）</mark></p><h4 id="类指针-1" tabindex="-1"><a class="header-anchor" href="#类指针-1"><span>类指针</span></a></h4><h4 id="类成员字段指针" tabindex="-1"><a class="header-anchor" href="#类成员字段指针"><span>类成员字段指针</span></a></h4><h4 id="类成员方法指针" tabindex="-1"><a class="header-anchor" href="#类成员方法指针"><span>类成员方法指针</span></a></h4><h5 id="静态的成员方法函数指针语法" tabindex="-1"><a class="header-anchor" href="#静态的成员方法函数指针语法"><span>静态的成员方法函数指针语法</span></a></h5><p>（同C语言差不多） 声明时和普通函数指针区别不大。 赋值有所不同，要传的是一个类的静态成员函数的地址，要加上类名限定</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>void (*ptrStaticFun)() = &amp;ClassName::staticFun;					// 声明
ptrStaticFun();													// 调用1
(*ptrStaticFun)();												// 调用2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="非静态成员方法函数指针语法" tabindex="-1"><a class="header-anchor" href="#非静态成员方法函数指针语法"><span>非静态成员方法函数指针语法</span></a></h5><p>（麻烦一点） 注意调用类中非静态成员函数的时候，使用的是 类名::函数名，而不是 实例名::函数名</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>void (ClassName::*ptrNonStaticFun)() = &amp;ClassName::nonStaticFun;// 声明
(classObject.*ptrNonStaticFun)();								// 调用1。注意要用括号括起前面，不然优先级不对
(pClassObject-&gt;*ptrNonStaticFun)();								// 调用2。注意要用括号括起前面，不然优先级不对
// （*(classObject.*ptrNonStaticFun)）();			// 没有这种用法
// （&amp;(classObject.*ptrNonStaticFun)）();			// 没有这种用法
// 没有像静态方法那样的变体，左边括号的极不是函数名也不是函数地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="区分两者" tabindex="-1"><a class="header-anchor" href="#区分两者"><span>区分两者</span></a></h5><p>两者的本质区别是什么</p><p>记住一句最核心的一句话：<strong>「静态函数没有<code>this</code>指针。」</strong> 类内使用非静态成员变量或函数前面其实是有一个隐藏的 <code>this-&gt;</code></p><p>非静态成员函数</p><ul><li><p>与静态函数不同，成员函数在被调用时，<strong>必须要提供this指针</strong> 不是仅仅需要函数地址就可以调用的</p><p>因为在它被调用之前，自己也不知道哪个对象的此函数被调用。所以通过<code>&amp;</code>拿到的不是实际的内存地址 只有调用的时候，C++才会<strong>结合this指针通过固定的偏移量找到函数的真实地址</strong>调用</p></li><li><p>为了支持这种调用方式，这里C++给专门提供了特殊的几个操作符：<code>::*</code> <code>.*</code> <code>-&gt;*</code></p><ul><li><p>声明 <code>void (Test::*fptr)()；</code>，类成员函数指针的声明，就必须加上类名限定，这就声明了一个函数指针变量fptr，他只能指向Test类的成员函数</p></li><li><p>赋值 <code>fptr = &amp;Test::function</code></p></li><li><p>调用 类的成员函数是无法直接调用的，必须要使用对象或者对象指针调用（这样函数才能通过对象获取到this指针）。</p><ul><li><code>(t.*fptr)();</code>，t是Test类的一个实例，通过对象调用。</li><li><code>(pt-&gt;*fptr)();</code>，pt是一个指向Test类对象的指针，通过指针调用。</li></ul></li></ul></li><li><p>C++成员函数的调用需要至少3个要素：</p><ol><li>this指针；</li><li>函数参数(也许为空)；</li><li>函数地址</li></ol></li></ul><h5 id="应用举例" tabindex="-1"><a class="header-anchor" href="#应用举例"><span>应用举例</span></a></h5><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;stdio.h&gt;
#include &lt;iostream&gt;
  
using namespace std;
  
class MyClass {
public:
    static int FunA(int a, int b) {
        cout &lt;&lt; &quot;call FunA&quot; &lt;&lt; endl;
        return a + b;
    }
  
    void FunB() {
        cout &lt;&lt; &quot;call FunB&quot; &lt;&lt; endl;
    }
  
    void FunC() {
        cout &lt;&lt; &quot;call FunC&quot; &lt;&lt; endl;
    }
  
    int pFun1(int (*p)(int, int), int a, int b) {
        return (*p)(a, b);
    }
  
    void pFun2(void (MyClass::*nonstatic)()) {
        (this-&gt;*nonstatic)();
    }
};
  
int main() {
    MyClass* obj = new MyClass;
    // 静态函数指针的使用
    int (*pFunA)(int, int) = &amp;MyClass::FunA;
    cout &lt;&lt; pFunA(1, 2) &lt;&lt; endl;
     
    // 成员函数指针的使用
    void (MyClass::*pFunB)() = &amp;MyClass::FunB;
    (obj-&gt;*pFunB)();
     
    // 通过 pFun1 只能调用静态方法
    obj-&gt;pFun1(&amp;MyClass::FunA, 1, 2);
     
    // 通过 pFun2 就是调用成员方法
    obj-&gt;pFun2(&amp;MyClass::FunB);
    obj-&gt;pFun2(&amp;MyClass::FunC);
 
    delete obj;
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="虚函数的函数指针" tabindex="-1"><a class="header-anchor" href="#虚函数的函数指针"><span>虚函数的函数指针</span></a></h4><p>虚函数其实就是一种特殊的成员函数，定义和声明同非虚成员函数</p><p>另外，指向虚函数的函数指针在涉及到多继承和指针强转的问题时，使用不当会踩到大坑：</p><ol><li>不要使用<code>static_cast</code>将继承类的成员函数指针赋值给基类成员函数指针，如果一定要使用，首先确定没有问题。（这条可能会限制代码的可扩展性。）</li><li>如果一定要使用<code>static_cast</code>, 注意不要使用多继承。</li><li>如果一定要使用多继承的话，不要把一个基类的成员函数指针赋值给另一个基类的函数指针。</li><li>单继承要么全部不使用虚函数，要么全部使用虚函数。不要使用非虚基类，却让子类包含虚函数。</li></ol><h4 id="类成员方法指针-地址问题" tabindex="-1"><a class="header-anchor" href="#类成员方法指针-地址问题"><span><s>类成员方法指针_地址问题</s></span></a></h4><p>（这一节搜出来的不是我想的那个意思，我想搜的其实是 如何打印函数指针的地址）</p><p>参考：</p>`,38),p={href:"https://blog.csdn.net/ml232528/article/details/79876915",target:"_blank",rel:"noopener noreferrer"},h={href:"https://blog.csdn.net/qq_41579616/article/details/105585780",target:"_blank",rel:"noopener noreferrer"},m=a(`<p>非静态类成员方法指针是特殊的，需要配合实例去使用，而且也不能通过一般方法去取地址</p><p>我整理了4种C++中取成员函数地址的方法</p><ul><li>pointer_cast</li><li>union_cast</li><li>cdecl_cast</li><li>汇编（该方法不能在VS6上编译通过）</li></ul><h5 id="pointer-cast-通过静态转换" tabindex="-1"><a class="header-anchor" href="#pointer-cast-通过静态转换"><span>pointer_cast - 通过静态转换</span></a></h5><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>template&lt;typename dst_type,typename src_type&gt;
dst_type pointer_cast(src_type src)
{
    return *static_cast&lt;dst_type*&gt;(static_cast&lt;void*&gt;(&amp;src));
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="union-cast-通过联合体的共享储存机制" tabindex="-1"><a class="header-anchor" href="#union-cast-通过联合体的共享储存机制"><span>union_cast - 通过联合体的共享储存机制</span></a></h5><p>这种方法是最常规, 也是最好理解的一种方法了, 巧妙地利用了联合体的优点. 当然, 模板的使用恰到好处. 同时,传入参数时注意数据类型大小一致.</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>template&lt;typename dst_type,typename src_type&gt;
dst_type union_cast(src_type src)
{
    union{
        src_type s;
        dst_type d;
    }u;
    u.s = src;
    return u.d;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="cdecl-cast-通过c语言的可变参数不检测参数类型" tabindex="-1"><a class="header-anchor" href="#cdecl-cast-通过c语言的可变参数不检测参数类型"><span>cdecl_cast - 通过C语言的可变参数不检测参数类型</span></a></h5><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>__declspec(naked) void* __cdecl cdecl_cast(...)
{
    __asm{
        mov eax,dword ptr[esp+4]
        ret
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="asm-cast-通过汇编的offset语句取成员函数偏移得到地址" tabindex="-1"><a class="header-anchor" href="#asm-cast-通过汇编的offset语句取成员函数偏移得到地址"><span>asm_cast - 通过汇编的offset语句取成员函数偏移得到地址</span></a></h5><p>这个方法也比较巧妙, 不过貌似在VC6上编译不过. VS2012没问题.</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>#define asm_cast(var,addr)  \\
{                           \\
    __asm{                  \\
        mov var,offset addr \\
    }                       \\
}    

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="q-能否搞出指向构造函数和析构函数的函数指针" tabindex="-1"><a class="header-anchor" href="#q-能否搞出指向构造函数和析构函数的函数指针"><span>Q：能否搞出指向构造函数和析构函数的函数指针？</span></a></h5><blockquote><p>C++标准明确规定：The address of a constructor or destructor shall not be taken.</p><p>写出来了编译也会报错：error: taking address of constructor &quot;Test::Test&quot;</p></blockquote><h4 id="用汇编看透成员函数本质" tabindex="-1"><a class="header-anchor" href="#用汇编看透成员函数本质"><span>用汇编看透成员函数本质</span></a></h4><p>详见：https://blog.csdn.net/tangchuxian080/article/details/80711339</p><h3 id="万能指针-空类型指针-仅c语言" tabindex="-1"><a class="header-anchor" href="#万能指针-空类型指针-仅c语言"><span>万能指针：空类型指针（仅C语言）</span></a></h3><h4 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h4><p>万能指针能操作所有类型指针，但使用前要进行强制类型转换</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>void print(){
    cout&lt;&lt;&quot;万能指针调用函数指针&quot;&lt;&lt;endl;
}

void *p = print;
((void(*)())p)();		// 两种指针调用函数的方法
*((void(*)())p)();		// 两种指针调用函数的方法

// 剖析：
// 1）void print()的函数指针是 void(*pr)();
// 2）去掉变量名，所以函数指针的类型是 void(*)();
// 3）(void(*)())p == print，将万能指针强制类型转换成void(*)()
// 4）((void(*)())p)(); 将万能指针强制类型转换成void(*)(),再调用函数
// 4）*((void(*)())p)(); 取星号运算，也是调用函数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缺陷</p><p>函数指针不能直接用void*存，你只能取函数地址整数转成void*的地址，在使用的时候再把void*转成函数指针类型，这样才可以跳用，</p><p>关键一点：void*不能调用，只能传递</p><h4 id="c-兼容性问题-无法将函数指针转换的问题" tabindex="-1"><a class="header-anchor" href="#c-兼容性问题-无法将函数指针转换的问题"><span>C++兼容性问题 / 无法将函数指针转换的问题</span></a></h4><p>无法将函数指针转换的问题 将指针转换<code>void *</code>为不可行的方法，因为成员指针的大小通常大于<code>sizeof(void *)</code><code>void *</code>在任何情况下强制转换它都会丢弃指针表示的一部分，从而不再保证唯一性.</p><p>群友说： 这是c类型的，如果你要在cpp里用，cpp是强类型的，不支持隐式转换。 例如像上面的转化函数指针为万能指针会报错：<code>无效的转换从&#39; void(*)() &#39;到&#39; void* &#39;</code></p><p>但是像下面这样只是用来存基本类型指针则没有问题</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>int a = 5;
void* p = &amp;a;
cout &lt;&lt; *(int*)p &lt;&lt; endl;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="c-替代方案-——-模板指针" tabindex="-1"><a class="header-anchor" href="#c-替代方案-——-模板指针"><span>C++替代方案 —— 模板指针</span></a></h4><p>为了避免一些问题，C++不用万能指针的</p><p>C++更好的选择是使用模板来代替万能指针，<code>T*</code>完事</p><h2 id="const修饰指针" tabindex="-1"><a class="header-anchor" href="#const修饰指针"><span>Const修饰指针</span></a></h2><h2 id="指针的传递" tabindex="-1"><a class="header-anchor" href="#指针的传递"><span>指针的传递</span></a></h2><h2 id="智能指针" tabindex="-1"><a class="header-anchor" href="#智能指针"><span>智能指针</span></a></h2><h2 id="引用类型" tabindex="-1"><a class="header-anchor" href="#引用类型"><span>引用类型</span></a></h2><p>使用场景：</p><ul><li>改参</li><li>函数返回多个信息</li></ul><h2 id="原理剖析" tabindex="-1"><a class="header-anchor" href="#原理剖析"><span>原理剖析</span></a></h2><ul><li>Q：指针是地址，为什么声明类型？</li><li>A：以便获取长度</li><li>Q：函数指针的原理是什么，为什么声明变量和返回值？</li><li>A：不知道</li></ul>`,40);function b(g,_){const n=d("ExternalLinkIcon");return t(),c("div",null,[o,e("p",null,[i("建议阅读："),e("a",u,[i("【知乎】万字长文系统梳理一下C++函数指针"),l(n)])]),v,e("ul",null,[e("li",null,[e("a",p,[i("【CSDN】c++ 类成员函数地址"),l(n)])]),e("li",null,[e("a",h,[i("【CSDN】总结C++中取成员函数地址的几种方法"),l(n)])])]),m])}const k=s(r,[["render",b],["__file","05. 指针类型.html.vue"]]),C=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/C__/02.%20%E6%95%B0%E6%8D%AE_%E7%AE%97%E6%B3%95/05.%20%E6%8C%87%E9%92%88%E7%B1%BB%E5%9E%8B.html","title":"05. 指针类型","lang":"zh-CN","frontmatter":{"description":"05. 指针类型 指针 简概 指针 定义：指针是一个存储值的地址的变量 计算机存储数据时跟踪3种基本属性 信息存储在何处 存储的值是多少 存储信息什么类型 连续定义时 有的系统先定义的在高位（Windows x86） 有的系统先定义的在低位（Widnows x64） 有的系统不会把不同类型的变量放在相邻的内存单元中 与常规变量区别 使用常规变量时：值是...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/C__/02.%20%E6%95%B0%E6%8D%AE_%E7%AE%97%E6%B3%95/05.%20%E6%8C%87%E9%92%88%E7%B1%BB%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"05. 指针类型"}],["meta",{"property":"og:description","content":"05. 指针类型 指针 简概 指针 定义：指针是一个存储值的地址的变量 计算机存储数据时跟踪3种基本属性 信息存储在何处 存储的值是多少 存储信息什么类型 连续定义时 有的系统先定义的在高位（Windows x86） 有的系统先定义的在低位（Widnows x64） 有的系统不会把不同类型的变量放在相邻的内存单元中 与常规变量区别 使用常规变量时：值是..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"05. 指针类型\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"05. 指针类型","slug":"_05-指针类型","link":"#_05-指针类型","children":[{"level":2,"title":"指针","slug":"指针","link":"#指针","children":[{"level":3,"title":"简概","slug":"简概","link":"#简概","children":[]},{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]}]}]},{"level":1,"title":"深度剖析指针【专题】","slug":"深度剖析指针【专题】","link":"#深度剖析指针【专题】","children":[{"level":2,"title":"各种指针","slug":"各种指针","link":"#各种指针","children":[{"level":3,"title":"基本数据类型指针","slug":"基本数据类型指针","link":"#基本数据类型指针","children":[]},{"level":3,"title":"容器指针","slug":"容器指针","link":"#容器指针","children":[{"level":4,"title":"多维容器指针","slug":"多维容器指针","link":"#多维容器指针","children":[]},{"level":4,"title":"嵌套指针","slug":"嵌套指针","link":"#嵌套指针","children":[]}]},{"level":3,"title":"函数指针","slug":"函数指针","link":"#函数指针","children":[{"level":4,"title":"函数指针","slug":"函数指针-1","link":"#函数指针-1","children":[{"level":5,"title":"使用typedef简化","slug":"使用typedef简化","link":"#使用typedef简化","children":[]},{"level":5,"title":"使用auto简化","slug":"使用auto简化","link":"#使用auto简化","children":[]}]},{"level":4,"title":"函数参数指针","slug":"函数参数指针","link":"#函数参数指针","children":[]}]},{"level":3,"title":"类指针","slug":"类指针","link":"#类指针","children":[{"level":4,"title":"类指针","slug":"类指针-1","link":"#类指针-1","children":[]},{"level":4,"title":"类成员字段指针","slug":"类成员字段指针","link":"#类成员字段指针","children":[]},{"level":4,"title":"类成员方法指针","slug":"类成员方法指针","link":"#类成员方法指针","children":[{"level":5,"title":"静态的成员方法函数指针语法","slug":"静态的成员方法函数指针语法","link":"#静态的成员方法函数指针语法","children":[]},{"level":5,"title":"非静态成员方法函数指针语法","slug":"非静态成员方法函数指针语法","link":"#非静态成员方法函数指针语法","children":[]},{"level":5,"title":"区分两者","slug":"区分两者","link":"#区分两者","children":[]},{"level":5,"title":"应用举例","slug":"应用举例","link":"#应用举例","children":[]}]},{"level":4,"title":"虚函数的函数指针","slug":"虚函数的函数指针","link":"#虚函数的函数指针","children":[]},{"level":4,"title":"类成员方法指针_地址问题","slug":"类成员方法指针-地址问题","link":"#类成员方法指针-地址问题","children":[{"level":5,"title":"pointer_cast - 通过静态转换","slug":"pointer-cast-通过静态转换","link":"#pointer-cast-通过静态转换","children":[]},{"level":5,"title":"union_cast - 通过联合体的共享储存机制","slug":"union-cast-通过联合体的共享储存机制","link":"#union-cast-通过联合体的共享储存机制","children":[]},{"level":5,"title":"cdecl_cast - 通过C语言的可变参数不检测参数类型","slug":"cdecl-cast-通过c语言的可变参数不检测参数类型","link":"#cdecl-cast-通过c语言的可变参数不检测参数类型","children":[]},{"level":5,"title":"asm_cast - 通过汇编的offset语句取成员函数偏移得到地址","slug":"asm-cast-通过汇编的offset语句取成员函数偏移得到地址","link":"#asm-cast-通过汇编的offset语句取成员函数偏移得到地址","children":[]},{"level":5,"title":"Q：能否搞出指向构造函数和析构函数的函数指针？","slug":"q-能否搞出指向构造函数和析构函数的函数指针","link":"#q-能否搞出指向构造函数和析构函数的函数指针","children":[]}]},{"level":4,"title":"用汇编看透成员函数本质","slug":"用汇编看透成员函数本质","link":"#用汇编看透成员函数本质","children":[]}]},{"level":3,"title":"万能指针：空类型指针（仅C语言）","slug":"万能指针-空类型指针-仅c语言","link":"#万能指针-空类型指针-仅c语言","children":[{"level":4,"title":"原理","slug":"原理","link":"#原理","children":[]},{"level":4,"title":"C++兼容性问题 / 无法将函数指针转换的问题","slug":"c-兼容性问题-无法将函数指针转换的问题","link":"#c-兼容性问题-无法将函数指针转换的问题","children":[]},{"level":4,"title":"C++替代方案 —— 模板指针","slug":"c-替代方案-——-模板指针","link":"#c-替代方案-——-模板指针","children":[]}]}]},{"level":2,"title":"Const修饰指针","slug":"const修饰指针","link":"#const修饰指针","children":[]},{"level":2,"title":"指针的传递","slug":"指针的传递","link":"#指针的传递","children":[]},{"level":2,"title":"智能指针","slug":"智能指针","link":"#智能指针","children":[]},{"level":2,"title":"引用类型","slug":"引用类型","link":"#引用类型","children":[]},{"level":2,"title":"原理剖析","slug":"原理剖析","link":"#原理剖析","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":9.48,"words":2845},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/01. Language/C++/02. 数据+算法/05. 指针类型.md","autoDesc":true}');export{k as comp,C as data};

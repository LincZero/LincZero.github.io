import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as a,c as r,b as n,e,d as l,a as t}from"./app-BDO1bFk4.js";const c={},u=t('<h1 id="c" tabindex="-1"><a class="header-anchor" href="#c"><span>C++</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="c-c-中调用python" tabindex="-1"><a class="header-anchor" href="#c-c-中调用python"><span>C/C++中调用Python</span></a></h1><p>参考： （C/C++中调用Python）</p>',4),o={href:"https://docs.python.org/zh-cn/3.7/c-api/index.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://docs.python.org/zh-cn/3.7/c-api/intro.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://blog.csdn.net/wzyaiwl/article/details/115298127",target:"_blank",rel:"noopener noreferrer"},m=n("li",null,[n("mark",null,"部分内容详见《QT》笔记中《调用Python脚本》")],-1),b=n("li",null,"c和c++调用Python，https://www.xzhongwei.com/post/127，好总结，重要参考",-1),p=n("p",null,"扩展参考： （Python中使用C/C++）",-1),y={href:"https://docs.python.org/zh-cn/3.7/extending/index.html",target:"_blank",rel:"noopener noreferrer"},P={href:"https://docs.python.org/zh-cn/3.7/extending/extending.html",target:"_blank",rel:"noopener noreferrer"},g=t(`<h2 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h2><ul><li><p>定义</p><ul><li><p>Python 的应用编程接口（API）使得 C 和 C++ 程序员可以在多个层级上访问 Python 解释器。</p><p>该 API 在 C++ 中同样可用，但为简化描述，通常将其称为 <code>Python/C API</code>。</p></li></ul></li><li><p>应用。使用 Python/C API 有两个基本的理由</p><ul><li>第一个理由是为了特定目的而编写 扩展模块；它们是扩展 Python 解释器功能的 C 模块。这可能是最常见的使用场景。</li><li>第二个理由是将 Python 用作更大规模应用的组件；这种技巧通常被称为在一个应用中 embedding Python。</li></ul></li></ul><p>编写可包含于 CPython 的 C 代码</p><h2 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作"><span>基本操作</span></a></h2><p>包含文件</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#define PY_SSIZE_T_CLEAN
#include &lt;Python.h&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重要部分" tabindex="-1"><a class="header-anchor" href="#重要部分"><span>重要部分</span></a></h2><p>参考：c和c++调用Python，https://www.xzhongwei.com/post/127，好总结，重要参考</p><h3 id="一、使用python提供给c-c-的api" tabindex="-1"><a class="header-anchor" href="#一、使用python提供给c-c-的api"><span>一、使用python提供给C/C++的API</span></a></h3><h4 id="包含头文件" tabindex="-1"><a class="header-anchor" href="#包含头文件"><span>包含头文件</span></a></h4><p>#include &quot;Python.h&quot;</p><p>注：因为python可能定义一些影响某些系统标准头的预处理器定义，所以必需在包含标准头文件（&lt;stdio.h&gt;, &lt;string.h&gt;, &lt;errno.h&gt;, &lt;limits.h&gt;, &lt;assert.h&gt; and &lt;stdlib.h&gt;）之前包含Python.h。</p><h4 id="api介绍" tabindex="-1"><a class="header-anchor" href="#api介绍"><span>API介绍</span></a></h4><p>以下是一些API的介绍：</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>void Py_Initialize(void);
// 初始化Python解释器。如果初始化失败，继续下面的调用会出现各种错误，可惜的是此函数没有返回值来判断是否初始化成功，如果失败会导致致命错误。

int Py_IsInitialized(void);
// 检查是否已经进行了初始化。如果返回0，表示没有进行过初始化。

void Py_Finalize();
// 反初始化Python解释器。包括子解释器，调用此函数同时会释放Python解释器所占用的资源。


int PyRun_SimpleString(const char *command);
// 实际上是一个宏，执行一段Python代码。

PyObject* PyImport_ImportModule(char *name);
// 导入一个Python模块，参数name可以是*.py文件的文件名。类似Python内建函数import。

PyObject* PyModule_GetDict( PyObject *module);
// 相当于Python模块对象的dict属性，得到模块名称空间下的字典对象。

PyObject* PyRun_String(const char* str, int start,PyObject* globals, PyObject* locals);
// 执行一段Python代码。


int PyArg_Parse(PyObject* args, char* format, …);
// 把Python数据类型解析为C的类型，这样C程序中才可以使用Python里面的数据。

PyObject* Py_BuildValue(char* format, …);
// 和PyArg_Parse刚好相反，构建一个参数列表，把C类型转换为Python对象，使得Python里面可以使用C类型数据。

PyObject* PyObject_GetAttrString(PyObject *o, char*attr_name);
// 返回模块对象o中的attr_name 属性或函数，相当于Python中表达式语句，o.attr_name。

PyObject* PyEval_CallObject(PyObject* pfunc, PyObject*pargs);
// 此函数有两个参数，而且都是Python对象指针，其中pfunc是要调用的Python 函数，一般说来可以使用PyObject_GetAttrString()获得，pargs是函数的参数列表，通常是使用Py_BuildValue()来构建。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、c-向-python-传递参数" tabindex="-1"><a class="header-anchor" href="#二、c-向-python-传递参数"><span>二、C++ 向 Python 传递参数</span></a></h3><p><mark><strong>Python 的参数实际上是元组，因此传参实际上就是构造一个合适的元组</strong></mark></p><p>常用的有两种方法：</p><h4 id="方法一-使用-pytuple-new-创建元组-pytuple-setitem-设置元组值" tabindex="-1"><a class="header-anchor" href="#方法一-使用-pytuple-new-创建元组-pytuple-setitem-设置元组值"><span>方法一：使用 PyTuple_New 创建元组， PyTuple_SetItem 设置元组值</span></a></h4><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>PyObject* args = PyTuple_New(3);
PyObject* arg1 = Py_BuildValue(&quot;i&quot;, 100); // 整数参数
PyObject* arg2 = Py_BuildValue(&quot;f&quot;, 3.14); // 浮点数参数
PyObject* arg3 = Py_BuildValue(&quot;s&quot;, &quot;hello&quot;); // 字符串参数
PyTuple_SetItem(args, 0, arg1);
PyTuple_SetItem(args, 1, arg2);
PyTuple_SetItem(args, 2, arg3);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方法二-直接使用py-buildvalue构造元组" tabindex="-1"><a class="header-anchor" href="#方法二-直接使用py-buildvalue构造元组"><span>方法二：直接使用Py_BuildValue构造元组</span></a></h4><div class="language-C++ line-numbers-mode" data-ext="C++" data-title="C++"><pre class="language-C++"><code>PyObject* args = Py_BuildValue(&quot;(ifs)&quot;, 100, 3.14, &quot;hello&quot;);
PyObject* args = Py_BuildValue(&quot;()&quot;); // 无参函数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、pyarg-parsetuple函数" tabindex="-1"><a class="header-anchor" href="#三、pyarg-parsetuple函数"><span>三、PyArg_ParseTuple函数</span></a></h3><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>//作用：
    此函数其实相当于 sscanf(str,format,…) ，是Py_BuildValue的逆过程，这个函数将PyObject参数转换成C/C++数据类型，传递的是指针，
//区别：
    但这个函数与Py_BuildValue有点不同，这个函数只能解析Tuple元组，而Py_BuildValue函数可以生成元组，列表，字典等。
//原型：
    PyAPI_FUNC(int) PyArg_ParseTuple(PyObject *args, const char *format,...)
	//Args：
    	一般为Python程序返回的元组。
    //Foramt：
    	同Py_BulidValue类型，就不在累述咯
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="四、-py-buildvalue-函数" tabindex="-1"><a class="header-anchor" href="#四、-py-buildvalue-函数"><span>四、 Py_BuildValue()函数</span></a></h3><p>PyObject* Py_BuildValue(char* format, …)</p><p>参数解释：format及转换格式，类似与C语言中%d,%f，后面的不定参数对应前面的格式，具体格式如下： &quot;s&quot;(string) [char *] ：将C字符串转换成Python对象，如果C字符串为空，返回NONE。</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>&quot;s#&quot;(string) [char *, int];
// 将C字符串和它的长度转换成Python对象，如果C字符串为空指针，长度忽略，返回NONE。

&quot;z&quot;(string or None) [char *];
// 作用同&quot;s&quot;。

&quot;z#&quot; (stringor None) [char *, int];
// 作用同&quot;s#&quot;。

&quot;i&quot;(integer) [int];
// 将一个C类型的int转换成Python int对象。

&quot;b&quot;(integer) [char];
// 作用同&quot;i&quot;。

&quot;h&quot;(integer) [short int];
// 作用同&quot;i&quot;。

&quot;l&quot;(integer) [long int];
// 将C类型的long转换成Pyhon中的int对象。

&quot;c&quot;(string of length 1) [char];
// 将C类型的char转换成长度为1的Python字符串对象。

&quot;d&quot;(float) [double];
// 将C类型的double转换成python中的浮点型对象。

&quot;f&quot;(float) [float];
// 作用同&quot;d&quot;。

&quot;O&amp;&quot;(object) [converter, anything];
// 将任何数据类型通过转换函数转换成Python对象，这些数据作为转换函数的参数被调用并且返回一个新的Python对象，如果发生错误返回NULL。

&quot;(items)&quot;(tuple) [matching-items];
// 将一系列的C值转换成Python元组。

&quot;[items]&quot;(list) [matching-items];
// 将一系列的C值转换成Python列表。

&quot;{items}&quot;(dictionary) [matching-items];
// 将一系类的C值转换成Python的字典，每一对连续的C值将转换成一个键值对。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// 后面为PyObject的返回值

Py_BuildValue(&quot;&quot;)  // None

Py_BuildValue(&quot;i&quot;,123)  // 123

Py_BuildValue(&quot;iii&quot;,123, 456, 789)  // (123, 456, 789)

Py_BuildValue(&quot;s&quot;,&quot;hello&quot;)  // &#39;hello&#39;

Py_BuildValue(&quot;ss&quot;,&quot;hello&quot;, &quot;world&quot;)  // (&#39;hello&#39;, &#39;world&#39;)

Py_BuildValue(&quot;s#&quot;,&quot;hello&quot;, 4)  // &#39;hell&#39;

Py_BuildValue(&quot;()&quot;)  // ()

Py_BuildValue(&quot;(i)&quot;,123)  // (123,)      

Py_BuildValue(&quot;(ii)&quot;,123, 456)  // (123, 456)

Py_BuildValue(&quot;(i,i)&quot;,123, 456)  // (123, 456)

Py_BuildValue(&quot;[i,i]&quot;,123, 456)  // [123, 456]
    
Py_BuildValue(&quot;{s:i,s:i}&quot;, &quot;abc&quot;,123, &quot;def&quot;, 456)  // {&#39;abc&#39;: 123, &#39;def&#39;: 456}

Py_BuildValue(&quot;((ii)(ii))(ii)&quot;, 1, 2, 3, 4, 5, 6)  // (((1, 2), (3, 4)), (5, 6))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="五、元组操作函数" tabindex="-1"><a class="header-anchor" href="#五、元组操作函数"><span>五、元组操作函数：</span></a></h3><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>因为程序之间传递的参数，大多数为Tuple类型，所以有专门的函数来操作元组：

PyAPI_FUNC(PyObject *)PyTuple_New(Py_ssize_t size);

解释：新建一个参数列表（调试了下，发现其实是用链表实现的），size列表为长度的宽度

PyAPI_FUNC(Py_ssize_t)PyTuple_Size(PyObject *);

解释：获取该列表的大小

PyAPI_FUNC(PyObject *)PyTuple_GetItem(PyObject *, Py_ssize_t);

解释：获取该列表某位置的值

PyAPI_FUNC(int) PyTuple_SetItem(PyObject *,Py_ssize_t, PyObject *);

解释：设置该列表此位置的值。如PyTuple_SetItem(pyParams,1,Py_BuildValue(&quot;i&quot;,2));设置第2个位置的值为2的整数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法一-主流方法将python程序编程文本形式的动态链接库-在c-c-程序中调用其中定义的函数" tabindex="-1"><a class="header-anchor" href="#方法一-主流方法将python程序编程文本形式的动态链接库-在c-c-程序中调用其中定义的函数"><span>方法一：主流方法将python程序编程文本形式的动态链接库，在c/c++程序中调用其中定义的函数</span></a></h3><h4 id="_1-链接到python调用库" tabindex="-1"><a class="header-anchor" href="#_1-链接到python调用库"><span>1. 链接到Python调用库</span></a></h4><p>Python 安装目录下已经包含头文件( include 目录)和库文件 ( Windows 下为 python27.lib)。 使用之前需要链接到此库。</p><h4 id="_2-直接调用-python-语句" tabindex="-1"><a class="header-anchor" href="#_2-直接调用-python-语句"><span>2. 直接调用 Python 语句</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#include &quot;python/Python.h&quot;

int main()
{
    Py_Initialize();    ## 初始化

    PyRun_SimpleString(&quot;print &#39;hello&#39;&quot;);

    Py_Finalize();      ## 释放资源
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-加载-python-模块并调用函数" tabindex="-1"><a class="header-anchor" href="#_3-加载-python-模块并调用函数"><span>3. 加载 Python 模块并调用函数</span></a></h4><p>​ test.py : ​</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>def test_add(a, b):
    print &#39;add &#39;, a, &#39; and &#39;, b
    return a+b


#include &quot;python/Python.h&quot;
#include &lt;iostream&gt;
using namespace std;

int main()
{
    Py_Initialize();    // 初始化

    // 将Python工作路径切换到待调用模块所在目录，一定要保证路径名的正确性
    string path = &quot;~/test&quot;;
    string chdir_cmd = string(&quot;sys.path.append(\\&quot;&quot;) + path + &quot;\\&quot;)&quot;;
    const char* cstr_cmd = chdir_cmd.c_str();
    PyRun_SimpleString(&quot;import sys&quot;);
    PyRun_SimpleString(cstr_cmd);

    // 加载模块
    PyObject* moduleName = PyString_FromString(&quot;test&quot;); //模块名，不是文件名
    PyObject* pModule = PyImport_Import(moduleName);
    if (!pModule) // 加载模块失败
    {
        cout &lt;&lt; &quot;[ERROR] Python get module failed.&quot; &lt;&lt; endl;
        return 0;
    }
    cout &lt;&lt; &quot;[INFO] Python get module succeed.&quot; &lt;&lt; endl;

    // 加载函数
    PyObject* pv = PyObject_GetAttrString(pModule, &quot;test_add&quot;);
    if (!pv || !PyCallable_Check(pv))  // 验证是否加载成功
    {
        cout &lt;&lt; &quot;[ERROR] Can&#39;t find funftion (test_add)&quot; &lt;&lt; endl;
        return 0;
    }
    cout &lt;&lt; &quot;[INFO] Get function (test_add) succeed.&quot; &lt;&lt; endl;

    // 设置参数
    PyObject* args = PyTuple_New(2);   // 2个参数
    PyObject* arg1 = PyInt_FromLong(4);    // 参数一设为4
    PyObject* arg2 = PyInt_FromLong(3);    // 参数二设为3
    PyTuple_SetItem(args, 0, arg1);
    PyTuple_SetItem(args, 1, arg2);

    // 调用函数
    PyObject* pRet = PyObject_CallObject(pv, args);

    // 获取参数
    if (pRet)  // 验证是否调用成功
    {
        long result = PyInt_AsLong(pRet);
        cout &lt;&lt; &quot;result:&quot; &lt;&lt; result;
    }

    Py_Finalize();      ## 释放资源

    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法二-完整调用python脚本文件及参数的方法。" tabindex="-1"><a class="header-anchor" href="#方法二-完整调用python脚本文件及参数的方法。"><span>方法二：完整调用python脚本文件及参数的方法。</span></a></h3><p>以下是测试用的python脚本文件，功能是输出命令行参数：sample.py</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># !/usr/bin/env python2.6
import sys
def test():
    for arg in sys.argv:
        print arg

if __name__==&#39;__main__&#39;:
    test()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是测试用的c程序文件：test.c</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#include &quot;python2.6/Python.h&quot;
int main()
{
    //第一步：初始化Python
    //在调用Python的提供的给C的API之前，通过执行初始化
    //来添加Python的内建模块、__main__、sys等
    Py_Initialize();

    //检查初始化是否完成
    if (!Py_IsInitialized())
    {
        return -1;
    }

    //第二步：导入sys模块
    PyRun_SimpleString(&quot;import sys&quot;);

    //第三步：导入执行脚本时的命令行参数，如：./sample.py int argc = 2;   
	char *argv[2];  
	argv[0] = &quot;arg1&quot;;   
	argv[1] = &quot;arg2&quot;;
	PySys_SetArgv(argc, argv);

    //第四步：执行调用脚本文件命令,注意文件的路径
    if (PyRun_SimpleString(&quot;execfile(&#39;./sample.py&#39;)&quot;) == NULL)
    {
        return -1;
    }

    //第五步：关闭Python解释器
    Py_Finalize();
    return 0;
}

编译指令:

g++ -g -W -o test test.cpp -I /usr/include/ -L /usr/lib64/ -l python2.
执行指令：./test
输出：

arg1
arg2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="python中使用c-c" tabindex="-1"><a class="header-anchor" href="#python中使用c-c"><span>Python中使用C/C++</span></a></h1><p>扩展参考： （C/C++中调用Python）</p>`,47),_={href:"https://docs.python.org/zh-cn/3.7/c-api/index.html",target:"_blank",rel:"noopener noreferrer"},q={href:"https://docs.python.org/zh-cn/3.7/c-api/intro.html",target:"_blank",rel:"noopener noreferrer"},C={href:"https://blog.csdn.net/wzyaiwl/article/details/115298127",target:"_blank",rel:"noopener noreferrer"},f=n("li",null,[n("mark",null,"部分内容详见《QT》笔记中《调用Python脚本》")],-1),x=n("p",null,"参考： （Python中使用C/C++）",-1),A={href:"https://docs.python.org/zh-cn/3.7/extending/index.html",target:"_blank",rel:"noopener noreferrer"},E={href:"https://docs.python.org/zh-cn/3.7/extending/extending.html",target:"_blank",rel:"noopener noreferrer"},I=n("h2",{id:"简概-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简概-1"},[n("span",null,"简概")])],-1),B=n("p",null,"本文档描述了如何使用 C 或 C++ 编写模块以使用新模块来扩展 Python 解释器的功能。 这些模块不仅可以定义新的函数，还可以定义新的对象类型及其方法。 该文档还描述了如何将 Python 解释器嵌入到另一个应用程序中，以用作扩展语言。 最后，它展示了如何编译和链接扩展模块，以便它们可以动态地（在运行时）加载到解释器中，如果底层操作系统支持此特性的话。",-1),O={href:"https://docs.python.org/zh-cn/3.7/tutorial/index.html#tutorial-index",target:"_blank",rel:"noopener noreferrer"},k={href:"https://docs.python.org/zh-cn/3.7/reference/index.html#reference-index",target:"_blank",rel:"noopener noreferrer"},j={href:"https://docs.python.org/zh-cn/3.7/library/index.html#library-index",target:"_blank",rel:"noopener noreferrer"},N={href:"https://docs.python.org/zh-cn/3.7/c-api/index.html#c-api-index",target:"_blank",rel:"noopener noreferrer"},S=t(`<h2 id="重要注意项" tabindex="-1"><a class="header-anchor" href="#重要注意项"><span>重要注意项</span></a></h2><h3 id="c文件命名规范" tabindex="-1"><a class="header-anchor" href="#c文件命名规范"><span>c文件命名规范</span></a></h3><p>（传统上，如果一个模块叫 <code>spam</code>，则对应实现它的 C 文件叫 <code>spammodule.c</code>；如果这个模块名字非常长，比如 <code>spammify</code>，则这个模块的文件可以直接叫 <code>spammify.c</code>。）</p><h3 id="python-h函数名规范" tabindex="-1"><a class="header-anchor" href="#python-h函数名规范"><span>Python.h函数名规范</span></a></h3><p>所有在 <code>Python.h</code> 中定义的用户可见的符号都具有 <code>Py</code> 或 <code>PY</code> 前缀，已在标准头文件中定义的那些除外。</p><p>考虑到便利性，也由于其在 Python 解释器中被广泛使用，<code>&quot;Python.h&quot;</code> 还包含了一些标准头文件: <code>&lt;stdio.h&gt;</code>，<code>&lt;string.h&gt;</code>，<code>&lt;errno.h&gt;</code> 和 <code>&lt;stdlib.h&gt;</code>。 如果后面的头文件在你的系统上不存在，它还会直接声明函数 <code>malloc()</code>，<code>free()</code> 和 <code>realloc()</code>。</p><h2 id="基本操作-1" tabindex="-1"><a class="header-anchor" href="#基本操作-1"><span>基本操作</span></a></h2><p>spammodule.c</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#define PY_SSIZE_T_CLEAN
#include &lt;Python.h&gt;  // 导入 Python API



static PyObject *
spam_system(PyObject *self, PyObject *args)
{
    const char *command;
    int sts;

    if (!PyArg_ParseTuple(args, &quot;s&quot;, &amp;command))
        return NULL;
    sts = system(command);
    return PyLong_FromLong(sts);
}





</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function z(V,T){const i=d("ExternalLinkIcon");return a(),r("div",null,[u,n("ul",null,[n("li",null,[n("a",o,[e("【Python官网文档】Python/C API 参考手册"),l(i)]),e("，编写扩展模块并将 Python 解释器嵌入其应用程序中的 C 和 C++ 程序员可用的 API")]),n("li",null,[n("a",v,[e("【Python官网文档】Python/C API 概述"),l(i)]),e("，C 和 C++ 程序员可以在多个层级上访问 Python 解释器")]),n("li",null,[n("a",h,[e("【CSDN】QT——调用Python脚本"),l(i)])]),m,b]),p,n("ul",null,[n("li",null,[n("a",y,[e("【Python官网】扩展和嵌入 Python 解释器"),l(i)]),e("，如何使用 C 或 C++ 编写模块以使用新模块来扩展 Python 解释器的功能")]),n("li",null,[n("a",P,[e("【Python官网文档】使用 C 或 C++ 扩展 Python"),l(i)])])]),g,n("ul",null,[n("li",null,[n("a",_,[e("【Python官网文档】Python/C API 参考手册"),l(i)]),e("，编写扩展模块并将 Python 解释器嵌入其应用程序中的 C 和 C++ 程序员可用的 API")]),n("li",null,[n("a",q,[e("【Python官网文档】Python/C API 概述"),l(i)]),e("，C 和 C++ 程序员可以在多个层级上访问 Python 解释器")]),n("li",null,[n("a",C,[e("【CSDN】QT——调用Python脚本"),l(i)])]),f]),x,n("ul",null,[n("li",null,[n("a",A,[e("【Python官网】扩展和嵌入 Python 解释器"),l(i)]),e("，如何使用 C 或 C++ 编写模块以使用新模块来扩展 Python 解释器的功能")]),n("li",null,[n("a",E,[e("【Python官网文档】使用 C 或 C++ 扩展 Python"),l(i)])])]),I,B,n("p",null,[e("本文档假设你具备有关 Python 的基本知识。有关该语言的非正式介绍，请参阅 "),n("a",O,[e("Python 教程"),l(i)]),e(" 。 "),n("a",k,[e("Python语言参考"),l(i)]),e(" 给出了更正式的语言定义。 "),n("a",j,[e("Python 标准库"),l(i)]),e(" 包含现有的对象类型、函数和模块（内置和用 Python 编写）的文档，使语言具有广泛的应用范围。")]),n("p",null,[e("关于整个 Python/C API 的详细介绍，请参阅独立的 "),n("a",N,[e("Python/C API 参考手册"),l(i)]),e(" 。")]),S])}const F=s(c,[["render",z],["__file","扩展Python解释器.html.vue"]]),R=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/C__/09.%20%E5%8A%9F%E8%83%BD%E5%AE%9E%E7%8E%B0%E7%B1%BB/%E6%89%A9%E5%B1%95Python%E8%A7%A3%E9%87%8A%E5%99%A8.html","title":"C++","lang":"zh-CN","frontmatter":{"description":"C++ 目录 C/C++中调用Python 参考： （C/C++中调用Python） 【Python官网文档】Python/C API 参考手册，编写扩展模块并将 Python 解释器嵌入其应用程序中的 C 和 C++ 程序员可用的 API 【Python官网文档】Python/C API 概述，C 和 C++ 程序员可以在多个层级上访问 Python...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/C__/09.%20%E5%8A%9F%E8%83%BD%E5%AE%9E%E7%8E%B0%E7%B1%BB/%E6%89%A9%E5%B1%95Python%E8%A7%A3%E9%87%8A%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"C++"}],["meta",{"property":"og:description","content":"C++ 目录 C/C++中调用Python 参考： （C/C++中调用Python） 【Python官网文档】Python/C API 参考手册，编写扩展模块并将 Python 解释器嵌入其应用程序中的 C 和 C++ 程序员可用的 API 【Python官网文档】Python/C API 概述，C 和 C++ 程序员可以在多个层级上访问 Python..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"C++\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"C++","slug":"c","link":"#c","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"C/C++中调用Python","slug":"c-c-中调用python","link":"#c-c-中调用python","children":[{"level":2,"title":"简概","slug":"简概","link":"#简概","children":[]},{"level":2,"title":"基本操作","slug":"基本操作","link":"#基本操作","children":[]},{"level":2,"title":"重要部分","slug":"重要部分","link":"#重要部分","children":[{"level":3,"title":"一、使用python提供给C/C++的API","slug":"一、使用python提供给c-c-的api","link":"#一、使用python提供给c-c-的api","children":[{"level":4,"title":"包含头文件","slug":"包含头文件","link":"#包含头文件","children":[]},{"level":4,"title":"API介绍","slug":"api介绍","link":"#api介绍","children":[]}]},{"level":3,"title":"二、C++ 向 Python 传递参数","slug":"二、c-向-python-传递参数","link":"#二、c-向-python-传递参数","children":[{"level":4,"title":"方法一：使用 PyTuple_New 创建元组， PyTuple_SetItem 设置元组值","slug":"方法一-使用-pytuple-new-创建元组-pytuple-setitem-设置元组值","link":"#方法一-使用-pytuple-new-创建元组-pytuple-setitem-设置元组值","children":[]},{"level":4,"title":"方法二：直接使用Py_BuildValue构造元组","slug":"方法二-直接使用py-buildvalue构造元组","link":"#方法二-直接使用py-buildvalue构造元组","children":[]}]},{"level":3,"title":"三、PyArg_ParseTuple函数","slug":"三、pyarg-parsetuple函数","link":"#三、pyarg-parsetuple函数","children":[]},{"level":3,"title":"四、 Py_BuildValue()函数","slug":"四、-py-buildvalue-函数","link":"#四、-py-buildvalue-函数","children":[]},{"level":3,"title":"五、元组操作函数：","slug":"五、元组操作函数","link":"#五、元组操作函数","children":[]},{"level":3,"title":"方法一：主流方法将python程序编程文本形式的动态链接库，在c/c++程序中调用其中定义的函数","slug":"方法一-主流方法将python程序编程文本形式的动态链接库-在c-c-程序中调用其中定义的函数","link":"#方法一-主流方法将python程序编程文本形式的动态链接库-在c-c-程序中调用其中定义的函数","children":[{"level":4,"title":"1. 链接到Python调用库","slug":"_1-链接到python调用库","link":"#_1-链接到python调用库","children":[]},{"level":4,"title":"2. 直接调用 Python 语句","slug":"_2-直接调用-python-语句","link":"#_2-直接调用-python-语句","children":[]},{"level":4,"title":"3. 加载 Python 模块并调用函数","slug":"_3-加载-python-模块并调用函数","link":"#_3-加载-python-模块并调用函数","children":[]}]},{"level":3,"title":"方法二：完整调用python脚本文件及参数的方法。","slug":"方法二-完整调用python脚本文件及参数的方法。","link":"#方法二-完整调用python脚本文件及参数的方法。","children":[]}]}]},{"level":1,"title":"Python中使用C/C++","slug":"python中使用c-c","link":"#python中使用c-c","children":[{"level":2,"title":"简概","slug":"简概-1","link":"#简概-1","children":[]},{"level":2,"title":"重要注意项","slug":"重要注意项","link":"#重要注意项","children":[{"level":3,"title":"c文件命名规范","slug":"c文件命名规范","link":"#c文件命名规范","children":[]},{"level":3,"title":"Python.h函数名规范","slug":"python-h函数名规范","link":"#python-h函数名规范","children":[]}]},{"level":2,"title":"基本操作","slug":"基本操作-1","link":"#基本操作-1","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":10.22,"words":3066},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/01. Language/C++/09. 功能实现类/扩展Python解释器.md","autoDesc":true}');export{F as comp,R as data};

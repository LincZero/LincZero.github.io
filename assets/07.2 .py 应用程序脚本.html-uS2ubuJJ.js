import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as r,c as d,b as e,e as n,d as t,a as i}from"./app-BAt33Ddg.js";const o={},u=i('<h1 id="qt" tabindex="-1"><a class="header-anchor" href="#qt"><span>Qt</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="py-应用程序脚本" tabindex="-1"><a class="header-anchor" href="#py-应用程序脚本"><span>.py 应用程序脚本</span></a></h1><p>与C/C++调用Python程序的原理是一样的，QT也没有什么特殊的地方</p><p>参考：</p>',5),c={href:"https://docs.python.org/zh-cn/3.7/extending/index.html",target:"_blank",rel:"noopener noreferrer"},p={href:"https://blog.csdn.net/wzyaiwl/article/details/115298127",target:"_blank",rel:"noopener noreferrer"},v=e("li",null,"c和c++调用Python，https://www.xzhongwei.com/post/127，好总结，重要参考",-1),m=i('<h2 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h2><h3 id="py与-js区别" tabindex="-1"><a class="header-anchor" href="#py与-js区别"><span>.py与.js区别</span></a></h3><p>.py用作脚本的话和.js脚本类型，有略微不同</p><ul><li>Qt工程上的区别： <ul><li>.py：<mark>可以直接创建，不用加入到.qrc资源文件当中</mark>，会归类到 “Other files” 当中</li><li>.js：<mark>无法直接创建，但可以添加进.qrc资源文件中</mark></li></ul></li><li>语言自身性质区别：python可以创建类，面向对象编程</li><li>Qt支持上的区别：python有<code>PySide2 / PyQt5</code>模块的支持，这能让Python像C++一样使用Qt框架</li></ul><h3 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置"><span>基本配置</span></a></h3><h4 id="qt中运行python脚本" tabindex="-1"><a class="header-anchor" href="#qt中运行python脚本"><span>QT中运行Python脚本</span></a></h4><p>（图文版见参考链接）</p>',7),y=e("blockquote",null,[e("p",null,"工具->选项->环境->外部工具"),e("ol",null,[e("li",null,"添加->添加目录 (双击可任意更改名称这里更改为RunPy)"),e("li",null,"添加->添加工具(双击可任意更改名称这里更改为Python3)"),e("li",null,[n("点击Python3，配置执行档、参数等配置： "),e("ul",null,[e("li",null,"执行档：（根据python安装路径设置，D:\\Soft\\Dev\\All\\Python_Anaconda\\python.exe )"),e("li",{"CurrentDocument:FilePath":""},"参数：%"),e("li",{"CurrentDocument:Path":""},"工作目录：%")])])])],-1),h=i(`<h4 id="c-中调用python脚本" tabindex="-1"><a class="header-anchor" href="#c-中调用python脚本"><span>C++中调用Python脚本</span></a></h4><blockquote><p>项目文件下右键 -&gt; 添加库</p><ol><li>选择链接到库的类型 -&gt; 外部库 -&gt; 下一步</li><li>制定链接库和包含路径 <ul><li>Library type：WIndows</li><li>库文件：（根据安装路径设置，D:\\Soft\\Dev\\All\\Python_Anaconda\\libs\\python37.lib）</li><li>包含路径：（根据安装路径设置，D:\\Soft\\Dev\\All\\Python_Anaconda\\libs）</li><li>平台：取选Linux、Mac，只留Windows（默认全勾选）</li><li>链接：静态（默认是动态）</li><li>Windows：取选：为debug版本添加 &#39;d&#39; 作为后缀 <strong>（教程里勾选但实际应该是取选。比如勾选的话他会找我的python37d.lib，但我没有啊。当然也可以后期在.pro里删掉 &#39;d&#39;）</strong></li></ul></li></ol></blockquote><h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用"><span>基本使用</span></a></h3><p>测试代码1</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;Python.h&gt;
Py_Initialize();
PyRun_SimpleString(&quot;import sys&quot;);					// 前面这堆没懂什么作用
PyRun_SimpleString(&quot;sys.argv = [&#39;python.py&#39;]&quot;);		// 前面这堆没懂什么作用
PyRun_SimpleString(&quot;sys.path.append(&#39;./&#39;)&quot;);		// 前面这堆没懂什么作用
PyObject* pModule = PyImport_ImportModule(&quot;dsdfs&quot;);
if (!pModule)
 {
     qDebug()&lt;&lt;&quot;Cant open python file!\\n&quot;;
 }
qDebug()&lt;&lt;&quot;file of python ac been opened&quot;;
PyObject* pFunhello= PyObject_GetAttrString(pModule,&quot;hhh&quot;);
if(!pFunhello){
    qDebug()&lt;&lt;&quot;Get function hello failed&quot;;
}
//调用temperImg函数
PyObject_CallFunction(pFunhello,NULL);
//结束，释放python
Py_Finalize();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行会报错，下一章解决</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>D:\\Soft\\Dev\\All\\Python_Anaconda\\include\\object.h:448: error: C2059: 语法错误:“;”
D:\\Soft\\Dev\\All\\Python_Anaconda\\include\\object.h:448: error: C2238: 意外的标记位于“;”之前
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>改良代码2</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>void runPy2(){
    /* 不加则运行时崩溃 */
    Py_SetPythonHome(L&quot;D:\\\\Soft\\\\Dev\\\\All\\\\Python_Anaconda&quot;);
    /** Python系统初始化 */
    Py_Initialize();
    if(!Py_IsInitialized())
    {
        qDebug()&lt;&lt;&quot;Failed to initialize py.&quot;;
        return;
    }
    /** Python文件 */
    PyObject* pModule = PyImport_ImportModule(&quot;pythonTest&quot;);
    if(!pModule)
    {
        qDebug()&lt;&lt;&quot;Failed to import py script file.&quot;;
        return;
    }
    /** Python文件中的函数 */
    PyObject* pFunhello= PyObject_GetAttrString(pModule,&quot;hello&quot;);
    if(!pFunhello){
        qDebug()&lt;&lt;&quot;Failed to get py function.&quot;;
        return;
    }
    //执行函数
    PyObject_CallFunction(pFunhello,NULL);
    //结束，释放Python系统
    Py_Finalize();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取返回值" tabindex="-1"><a class="header-anchor" href="#获取返回值"><span>获取返回值</span></a></h2><p>参考：https://blog.csdn.net/qq_36662876/article/details/100929437</p><p>C++</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>void runPy(){
    Py_SetPythonHome(L&quot;D:\\\\Soft\\\\Dev\\\\All\\\\Python_Anaconda&quot;);
    /** Python系统初始化 */
    Py_Initialize();
    if(!Py_IsInitialized())
    {
        qDebug()&lt;&lt;&quot;Failed to initialize py.&quot;;
        return;
    }
    
    /** Python文件 */
    PyObject* pModule = PyImport_ImportModule(&quot;pythonTest&quot;);
    if(!pModule)
    {
        qDebug()&lt;&lt;&quot;Failed to import py script file.&quot;;
        return;
    }
    
    /** Python文件中的函数 */
    PyObject* pFunhello= PyObject_GetAttrString(pModule,&quot;hello&quot;);
    if(!pFunhello){
        qDebug()&lt;&lt;&quot;Failed to get py function.&quot;;
        return;
    }
    
    /** 执行Python函数并获取返回值 By CallFunction */
    PyObject* pArg = Py_BuildValue(&quot;(s)&quot;,&quot;wwwooo&quot;);  // 括号是因为参数是元组，这里有两种方法可以用
    PyObject* pyValue = PyObject_CallObject(pFunhello, pArg);
    
    /** 将返回值转化为C++类型 */
    char *pyReturnStr, *IO_door;
    if(PyArg_ParseTuple(pyValue, &quot;s|s&quot;, &amp;pyReturnStr, &amp;IO_door)){  // 只返回一个数时会显示乱码，所以加了没有含义的IO_door
        qDebug()&lt;&lt;&quot;transfrom sucess&quot;;
        qDebug()&lt;&lt;&quot;QT: &quot;&lt;&lt;pyReturnStr;
    }
    // 返回数字同理
    // int i; // 指针？
    // if(PyArg_Parse(pyValue, &quot;i&quot;, &amp;i)){ qDebug()&lt;&lt;i; }
    
    /** 结束，释放Python系统 */
    Py_Finalize();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Py</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span>text<span class="token operator">=</span><span class="token string">&quot;not vals&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
    xx<span class="token operator">=</span><span class="token string">&#39;none&#39;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;hello world!&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token string">&quot;python function return&quot;</span><span class="token punctuation">,</span>xx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="坑非常多-建议逐步测试" tabindex="-1"><a class="header-anchor" href="#坑非常多-建议逐步测试"><span>坑非常多，建议逐步测试</span></a></h2><p>逐步测试详见Python笔记中的编译DLL一章</p>`,17),b={href:"https://blog.csdn.net/wzyaiwl/article/details/115298127",target:"_blank",rel:"noopener noreferrer"},g=i(`<h3 id="首先检查" tabindex="-1"><a class="header-anchor" href="#首先检查"><span><mark>首先检查</mark></span></a></h3><h4 id="修改py文件时要修改两处" tabindex="-1"><a class="header-anchor" href="#修改py文件时要修改两处"><span>修改py文件时要修改两处</span></a></h4><p><mark>更新py文件时要注意，exe目录和源项目中的py文件都要更新，别忘了前者</mark></p><h4 id="推荐每一步-if-一下-看哪步出错了" tabindex="-1"><a class="header-anchor" href="#推荐每一步-if-一下-看哪步出错了"><span>推荐每一步 if 一下，看哪步出错了</span></a></h4><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>void runPy(){
    Py_SetPythonHome(L&quot;D:\\\\Soft\\\\Dev\\\\All\\\\Python_Anaconda&quot;);
    
    /** Python系统初始化 */
    Py_Initialize();
    if(!Py_IsInitialized())
    {
        qDebug()&lt;&lt;&quot;Failed to initialize py.&quot;;
        return;
    }
    
    /** Python文件 */
    PyObject* pModule = PyImport_ImportModule(&quot;pythonTest&quot;);
    if(!pModule)
    {
        qDebug()&lt;&lt;&quot;Failed to import py script file.&quot;;
        return;
    }
    
    /** Python文件中的函数 */
    PyObject* pFunhello= PyObject_GetAttrString(pModule,&quot;hello&quot;);
    if(!pFunhello){
        qDebug()&lt;&lt;&quot;Failed to get py function.&quot;;
        return;
    }
    
    /** 执行Python函数并获取返回值 By CallFunction */
    PyObject* pArg = Py_BuildValue(&quot;(s)&quot;,&quot;wwwooo&quot;);  // 括号是因为参数是元组，这里有两种方法可以用
    PyObject* pyValue = PyObject_CallObject(pFunhello, pArg);
    if(!pyValue){
        qDebug()&lt;&lt;&quot;Failed to get py return.&quot;;
        return;
    }
    
    /** 将返回值转化为C++类型 */
    char *pyReturnStr, *IO_door;
    if(!PyArg_ParseTuple(pyValue, &quot;s|s&quot;, &amp;pyReturnStr, &amp;IO_door)){  // 只返回一个数时会显示乱码，所以加了没有含义的IO_door
		qDebug()&lt;&lt;&quot;Failed to transfrom python return.&quot;;
    }
    qDebug()&lt;&lt;&quot;QT: &quot;&lt;&lt;pyReturnStr;
    
    /** 结束，释放Python系统 */
    Py_Finalize();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="py-initialize-就出错" tabindex="-1"><a class="header-anchor" href="#py-initialize-就出错"><span>py_Initialize 就出错</span></a></h3><h4 id="c2059-语法错误-、c2238-意外的标记位于-之前" tabindex="-1"><a class="header-anchor" href="#c2059-语法错误-、c2238-意外的标记位于-之前"><span>C2059: 语法错误:“;”、C2238: 意外的标记位于“;”之前</span></a></h4><p>打开报错的python源文件，并加两行条件编译注释解决</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>typedef struct<span class="token punctuation">{</span>
    const char<span class="token operator">*</span> name<span class="token punctuation">;</span>
    <span class="token builtin">int</span> basicsize<span class="token punctuation">;</span>
    <span class="token builtin">int</span> itemsize<span class="token punctuation">;</span>
    unsigned <span class="token builtin">int</span> flags<span class="token punctuation">;</span>
    <span class="token comment">#undef slots</span>
    PyType_Slot <span class="token operator">*</span>slots<span class="token punctuation">;</span> <span class="token operator">/</span><span class="token operator">*</span> terminated by slot<span class="token operator">==</span><span class="token number">0.</span> <span class="token operator">*</span><span class="token operator">/</span>	<span class="token comment"># 这里定义的slots和QT中的关键字冲突。加上下两行注释即可解决</span>
    <span class="token comment">#define slots Q_SLOTS</span>
<span class="token punctuation">}</span> PyType_Spec<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="lnk1104-无法打开文件-python37-d-lib" tabindex="-1"><a class="header-anchor" href="#lnk1104-无法打开文件-python37-d-lib"><span>LNK1104: 无法打开文件“python37_d.lib”</span></a></h4><p>include文件夹下找到pyconfig.h文件，将python37_d.lib更改为python37.lib</p><h4 id="c1083-无法打开文件-pyconfig-h-no-such-file-or-directory" tabindex="-1"><a class="header-anchor" href="#c1083-无法打开文件-pyconfig-h-no-such-file-or-directory"><span>C1083: 无法打开文件“pyconfig.h”; No such file or directory</span></a></h4><p>这个Anaconda自带的那个目录是有这个文件的，但是你自己下载的Python源码是没有的，好像要另外配置</p><p>推荐直接用Anaconda路径的那个</p><h4 id="断点在-py-initialize-初始化时崩溃" tabindex="-1"><a class="header-anchor" href="#断点在-py-initialize-初始化时崩溃"><span>断点在 py_Initialize 初始化时崩溃</span></a></h4><p>两个方法</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>/* 不加则运行时崩溃：
 * initfsencoding: unable to load the file system codec
 * 参考：https://www.cnblogs.com/2008nmj/p/8027430.html
 * 两个方法:
 * 一个就是补全python的环境变量。但不知道为什么我的环境变量设置没用，还是报错
 * 另一个就是手动设置初始化函数的搜寻路径(也就是加载路径)
 */
Py_SetPythonHome(L&quot;D:\\\\Soft\\\\Dev\\\\All\\\\Python_Anaconda&quot;); // 方法二
/** Python系统初始化 */
Py_Initialize();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="调用py文件时出错" tabindex="-1"><a class="header-anchor" href="#调用py文件时出错"><span>调用Py文件时出错</span></a></h3><h4 id="pyimport-importmodule-导入py文件时找不到" tabindex="-1"><a class="header-anchor" href="#pyimport-importmodule-导入py文件时找不到"><span>PyImport_ImportModule 导入py文件时找不到</span></a></h4><p><mark>要将py文件和exe文件放置于同一目录下</mark></p><h3 id="与python文件" tabindex="-1"><a class="header-anchor" href="#与python文件"><span>与Python文件</span></a></h3><h4 id="systemerror-new-style-getargs-format-but-argument-is-not-a-tuple、不崩溃-若打印则崩溃" tabindex="-1"><a class="header-anchor" href="#systemerror-new-style-getargs-format-but-argument-is-not-a-tuple、不崩溃-若打印则崩溃"><span>SystemError: new style getargs format but argument is not a tuple、不崩溃，若打印则崩溃</span></a></h4><p>原代码</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>const char *command;
if(PyArg_Parse(pyValue, &quot;s&quot;, &amp;command)){  		// 报错：TypeError: argument must be str, not None
    qDebug()&lt;&lt;&quot;transfrom sucess&quot;;
}

const char *command;
if(PyArg_ParseTuple(pyValue, &quot;s&quot;, &amp;command)){	// 报错：SystemError: new style getargs format but argument is not a tuple
    qDebug()&lt;&lt;&quot;transfrom sucess&quot;;
}

char *pyReturnStr, *IO_door;
if(PyArg_ParseTuple(pyValue, &quot;s&quot;, &amp;pyReturnStr)){ // 报错：SystemError: new style getargs format but argument is not a tuple
    qDebug()&lt;&lt;&quot;transfrom sucess&quot;;
    qDebug()&lt;&lt;&quot;QT: &quot;&lt;&lt;pyReturnStr;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// Python多传一个无意义参数
char *pyReturnStr, *IO_door;
if(PyArg_ParseTuple(pyValue, &quot;s|s&quot;, &amp;pyReturnStr, &amp;IO_door)){
    qDebug()&lt;&lt;&quot;transfrom sucess&quot;;
    qDebug()&lt;&lt;&quot;QT: &quot;&lt;&lt;pyReturnStr;
}

// 或将方法改成PyArg_Parse
char *pyReturnStr;
if(PyArg_Parse(pyValue, &quot;s&quot;, &amp;pyReturnStr)){
    qDebug()&lt;&lt;&quot;transfrom sucess&quot;;
    qDebug()&lt;&lt;&quot;QT: &quot;&lt;&lt;pyReturnStr;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="typeerror-argument-must-be-str-not-none、输出的都是乱码、不崩溃" tabindex="-1"><a class="header-anchor" href="#typeerror-argument-must-be-str-not-none、输出的都是乱码、不崩溃"><span>TypeError: argument must be str, not None、输出的都是乱码、不崩溃</span></a></h4><p>原代码</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// C++
const char *command;
if(PyArg_Parse(pyValue, &quot;s&quot;, &amp;command)){
    qDebug()&lt;&lt;&quot;transfrom sucess&quot;;
}

// python
return &quot;python function return&quot;,&quot;none&quot;
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="typeerror-an-integer-is-required-got-type-nonetype" tabindex="-1"><a class="header-anchor" href="#typeerror-an-integer-is-required-got-type-nonetype"><span>TypeError: an integer is required ( got type NoneType )</span></a></h4><p>翻译：需要一个整数</p><p>后来发现是我exe目录里的py文件没更新</p><h4 id="systemerror-old-style-getargs-format-uses-new-features、不崩溃" tabindex="-1"><a class="header-anchor" href="#systemerror-old-style-getargs-format-uses-new-features、不崩溃"><span>SystemError: old style getargs format uses new features、不崩溃</span></a></h4><p>PyArg_Parse 改 PyArg_ParseTuple 就行了</p>`,34);function q(P,f){const l=a("ExternalLinkIcon");return r(),d("div",null,[u,e("ul",null,[e("li",null,[e("a",c,[n("【Python官网文档】扩展和嵌入 Python 解释器"),t(l)])]),e("li",null,[e("a",p,[n("【CSDN】QT——调用Python脚本"),t(l)])]),v]),m,y,h,e("p",null,[n("更多的坑见："),e("a",b,[n("【CSDN】QT——调用Python脚本"),t(l)])]),g])}const E=s(o,[["render",q],["__file","07.2 .py 应用程序脚本.html.vue"]]),A=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Multi/QT%EF%BC%88Cpp%EF%BC%89/04.%20%E8%BE%85%E5%8A%A9%E6%96%87%E4%BB%B6/%E5%88%9B%E5%BB%BA%E6%80%A7%E8%BE%85%E5%8A%A9%E6%96%87%E4%BB%B6/07.2%20.py%20%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E8%84%9A%E6%9C%AC.html","title":"Qt","lang":"zh-CN","frontmatter":{"description":"Qt 目录 .py 应用程序脚本 与C/C++调用Python程序的原理是一样的，QT也没有什么特殊的地方 参考： 【Python官网文档】扩展和嵌入 Python 解释器 【CSDN】QT——调用Python脚本 c和c++调用Python，https://www.xzhongwei.com/post/127，好总结，重要参考 简概 .py与.js区...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Multi/QT%EF%BC%88Cpp%EF%BC%89/04.%20%E8%BE%85%E5%8A%A9%E6%96%87%E4%BB%B6/%E5%88%9B%E5%BB%BA%E6%80%A7%E8%BE%85%E5%8A%A9%E6%96%87%E4%BB%B6/07.2%20.py%20%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E8%84%9A%E6%9C%AC.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Qt"}],["meta",{"property":"og:description","content":"Qt 目录 .py 应用程序脚本 与C/C++调用Python程序的原理是一样的，QT也没有什么特殊的地方 参考： 【Python官网文档】扩展和嵌入 Python 解释器 【CSDN】QT——调用Python脚本 c和c++调用Python，https://www.xzhongwei.com/post/127，好总结，重要参考 简概 .py与.js区..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Qt\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"Qt","slug":"qt","link":"#qt","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":".py 应用程序脚本","slug":"py-应用程序脚本","link":"#py-应用程序脚本","children":[{"level":2,"title":"简概","slug":"简概","link":"#简概","children":[{"level":3,"title":".py与.js区别","slug":"py与-js区别","link":"#py与-js区别","children":[]},{"level":3,"title":"基本配置","slug":"基本配置","link":"#基本配置","children":[{"level":4,"title":"QT中运行Python脚本","slug":"qt中运行python脚本","link":"#qt中运行python脚本","children":[]},{"level":4,"title":"C++中调用Python脚本","slug":"c-中调用python脚本","link":"#c-中调用python脚本","children":[]}]},{"level":3,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[]}]},{"level":2,"title":"获取返回值","slug":"获取返回值","link":"#获取返回值","children":[]},{"level":2,"title":"坑非常多，建议逐步测试","slug":"坑非常多-建议逐步测试","link":"#坑非常多-建议逐步测试","children":[{"level":3,"title":"首先检查","slug":"首先检查","link":"#首先检查","children":[{"level":4,"title":"修改py文件时要修改两处","slug":"修改py文件时要修改两处","link":"#修改py文件时要修改两处","children":[]},{"level":4,"title":"推荐每一步 if 一下，看哪步出错了","slug":"推荐每一步-if-一下-看哪步出错了","link":"#推荐每一步-if-一下-看哪步出错了","children":[]}]},{"level":3,"title":"py_Initialize 就出错","slug":"py-initialize-就出错","link":"#py-initialize-就出错","children":[{"level":4,"title":"C2059: 语法错误:“;”、C2238: 意外的标记位于“;”之前","slug":"c2059-语法错误-、c2238-意外的标记位于-之前","link":"#c2059-语法错误-、c2238-意外的标记位于-之前","children":[]},{"level":4,"title":"LNK1104: 无法打开文件“python37_d.lib”","slug":"lnk1104-无法打开文件-python37-d-lib","link":"#lnk1104-无法打开文件-python37-d-lib","children":[]},{"level":4,"title":"C1083: 无法打开文件“pyconfig.h”; No such file or directory","slug":"c1083-无法打开文件-pyconfig-h-no-such-file-or-directory","link":"#c1083-无法打开文件-pyconfig-h-no-such-file-or-directory","children":[]},{"level":4,"title":"断点在 py_Initialize 初始化时崩溃","slug":"断点在-py-initialize-初始化时崩溃","link":"#断点在-py-initialize-初始化时崩溃","children":[]}]},{"level":3,"title":"调用Py文件时出错","slug":"调用py文件时出错","link":"#调用py文件时出错","children":[{"level":4,"title":"PyImport_ImportModule 导入py文件时找不到","slug":"pyimport-importmodule-导入py文件时找不到","link":"#pyimport-importmodule-导入py文件时找不到","children":[]}]},{"level":3,"title":"与Python文件","slug":"与python文件","link":"#与python文件","children":[{"level":4,"title":"SystemError: new style getargs format but argument is not a tuple、不崩溃，若打印则崩溃","slug":"systemerror-new-style-getargs-format-but-argument-is-not-a-tuple、不崩溃-若打印则崩溃","link":"#systemerror-new-style-getargs-format-but-argument-is-not-a-tuple、不崩溃-若打印则崩溃","children":[]},{"level":4,"title":"TypeError: argument must be str, not None、输出的都是乱码、不崩溃","slug":"typeerror-argument-must-be-str-not-none、输出的都是乱码、不崩溃","link":"#typeerror-argument-must-be-str-not-none、输出的都是乱码、不崩溃","children":[]},{"level":4,"title":"TypeError: an integer is required ( got type NoneType )","slug":"typeerror-an-integer-is-required-got-type-nonetype","link":"#typeerror-an-integer-is-required-got-type-nonetype","children":[]},{"level":4,"title":"SystemError: old style getargs format uses new features、不崩溃","slug":"systemerror-old-style-getargs-format-uses-new-features、不崩溃","link":"#systemerror-old-style-getargs-format-uses-new-features、不崩溃","children":[]}]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":6.07,"words":1822},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Platform/Multi/QT（Cpp）/04. 辅助文件/创建性辅助文件/07.2 .py 应用程序脚本.md","autoDesc":true}');export{E as comp,A as data};

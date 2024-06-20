import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as e}from"./app-CctSPqZW.js";const t={},i=e(`<h1 id="ndpi" tabindex="-1"><a class="header-anchor" href="#ndpi"><span>nDPI</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="【ndpi】源码解析之深度包检测分析" tabindex="-1"><a class="header-anchor" href="#【ndpi】源码解析之深度包检测分析"><span>【NDPI】源码解析之深度包检测分析</span></a></h1><p>参考：https://blog.csdn.net/A_lber_t/article/details/89632412</p><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>关于nDPI的基本功能就不在这介绍了，有兴趣了解的读者可以阅读官方的快速入门指南：https://github.com/ntop/nDPI/blob/dev/doc/nDPI_QuickStartGuide.pdf，也可以阅读我翻译过来的文章：NDPI快速入门指南（翻译自官方文档）。</p><p>nDPI是在OpenDPI基础上扩展的一个库，解决了Opendpi的许多问题，并且具有比较完善的应用层协议识别功能。所以简单来说nDPI就是一个网络协议分析器，可以分析出抓取的流量是什么应用类型，比如来自facebook、ntop、qq还是推特等应用。当然不限于这些它自带的协议分析器，我们同样可以通过向引擎添加自定义的协议分析器，理论上可以分析任何我们想分析的协议。</p><p>nDPI源代码在编译后会生成两个部分，第一个部分是通过向Linux内核中的插件netfilter中注册nDPI的协议分析引擎，生成内核层的xt_ndpi.ko模块，用来分析实时的流量信息。编译的另一个结果就是生成了一个应用层的lib库，给ndpiReader这个工具提供一个函数库，可以用来分析抓包工具提供的pcap文件或者底层网卡提供的数据包，这个之后会有一系列文章向大家展示如何使用gdb工具来调试ndpiReader，用来研究ndpiReader分析流量的过程以及它是如何引用nDPI这个库的。</p><p>在这个系列呢主要是解读生成内核层模块的源代码，也就是研究这个库是如何进行深度包检测的。下面是正式分析部分：</p><h2 id="ndpi深度包检测流程" tabindex="-1"><a class="header-anchor" href="#ndpi深度包检测流程"><span>nDPI深度包检测流程</span></a></h2><h2 id="重要结构体的源码分析" tabindex="-1"><a class="header-anchor" href="#重要结构体的源码分析"><span>重要结构体的源码分析</span></a></h2><h3 id="ndpi-ethdr、ndpi-iphdr、ndpi-tcphdr、ndpi-udphdr" tabindex="-1"><a class="header-anchor" href="#ndpi-ethdr、ndpi-iphdr、ndpi-tcphdr、ndpi-udphdr"><span>ndpi_ethdr、ndpi_iphdr、ndpi_tcphdr、ndpi_udphdr</span></a></h3><h3 id="ndpi-flow-struct" tabindex="-1"><a class="header-anchor" href="#ndpi-flow-struct"><span>ndpi_flow_struct</span></a></h3><h3 id="ndpi-packet-struct" tabindex="-1"><a class="header-anchor" href="#ndpi-packet-struct"><span>ndpi_packet_struct</span></a></h3><h3 id="ndpi-detection-module-struct" tabindex="-1"><a class="header-anchor" href="#ndpi-detection-module-struct"><span>ndpi_detection_module_struct</span></a></h3><h2 id="ndpi-api-h-源代码分析及注释" tabindex="-1"><a class="header-anchor" href="#ndpi-api-h-源代码分析及注释"><span>ndpi_api.h 源代码分析及注释</span></a></h2><p>在分析一些工具或者库的源码时，我们不妨先看看它的API文档。</p><ul><li>在nDPI的快速入门指南中，API文档只有少数的一些函数。</li><li>但在nDPI的src/include文件夹中，有一个头文件“ndpi_api.h”，里面声明了非常多的函数。</li></ul><p>在我们分析其流程之前，可以先分析浏览一下这个头文件中声明的函数，大概搞清楚他们的功能，哪怕是字面意义上，之后在我们分析函数主体时便于我们理解，遇到不清楚的也可以回来查阅，下面我将展示出 “ndpi_api.h” 的源代码，里面有我的一些注释，供大家参考：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">/*相关宏定义*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">__NDPI_API_H__</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">__NDPI_API_H__</span></span>
 
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;ndpi_main.h&quot;</span></span>
 
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">__cplusplus</span></span>
<span class="token keyword">extern</span> <span class="token string">&quot;C&quot;</span> <span class="token punctuation">{</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
 
  <span class="token comment">/* 与nDPI动态链接的app可以通过使用下面的宏定义来确认数据结构，跨版本适配。
  */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">NDPI_API_VERSION</span>                      <span class="token expression"><span class="token number">1</span></span></span>
 
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">SIZEOF_ID_STRUCT</span>                      <span class="token expression"><span class="token punctuation">(</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_id_struct</span><span class="token punctuation">)</span>   <span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">SIZEOF_FLOW_STRUCT</span>                    <span class="token expression"><span class="token punctuation">(</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_flow_struct</span><span class="token punctuation">)</span> <span class="token punctuation">)</span></span></span>
 
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">NDPI_DETECTION_ONLY_IPV4</span>              <span class="token expression"><span class="token punctuation">(</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">0</span> <span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">NDPI_DETECTION_ONLY_IPV6</span>              <span class="token expression"><span class="token punctuation">(</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span> <span class="token punctuation">)</span></span></span>
 
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">ADD_TO_DETECTION_BITMASK</span>              <span class="token expression"><span class="token number">1</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">NO_ADD_TO_DETECTION_BITMASK</span>           <span class="token expression"><span class="token number">0</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">SAVE_DETECTION_BITMASK_AS_UNKNOWN</span>     <span class="token expression"><span class="token number">1</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">NO_SAVE_DETECTION_BITMASK_AS_UNKNOWN</span>  <span class="token expression"><span class="token number">0</span></span></span>
 
 
  <span class="token comment">/**
   *查看字符串是否使用了域名码的编码方式的函数
   * ( https://tools.ietf.org/html/rfc3492 )
   *   参数含义：
   * @par    buff = 指向检查的字符串的指针
   * @par    len  = 字符串长度
   * @return 1 如果这个字符串是域名码;
   *         else 0
   *
   */</span>
  <span class="token keyword">int</span> <span class="token function">check_punycode_string</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>buff<span class="token punctuation">,</span> <span class="token keyword">int</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
 
  <span class="token comment">/**
   * 获得流结构的长度大小
   *
   * @返回ndpi_flow_struct长度大小
   *
   */</span>
  <span class="token class-name">u_int32_t</span> <span class="token function">ndpi_detection_get_sizeof_ndpi_flow_struct</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
 
  <span class="token comment">/**
   * 获得id struct长度大小
   *
   * @返回其长度大小
   *
   */</span>
  <span class="token class-name">u_int32_t</span> <span class="token function">ndpi_detection_get_sizeof_ndpi_id_struct</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * nDPI 分配内存跟释放函数
  **/</span>
  <span class="token keyword">void</span> <span class="token operator">*</span> <span class="token function">ndpi_malloc</span><span class="token punctuation">(</span><span class="token class-name">size_t</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//动态分配长度为size的内存空间，返回指向这块内存的指针</span>
  <span class="token keyword">void</span> <span class="token operator">*</span> <span class="token function">ndpi_calloc</span><span class="token punctuation">(</span><span class="token keyword">unsigned</span> <span class="token keyword">long</span> count<span class="token punctuation">,</span> <span class="token class-name">size_t</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//分配内存，初始化，用于存数组</span>
  <span class="token keyword">void</span> <span class="token operator">*</span> <span class="token function">ndpi_realloc</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>ptr<span class="token punctuation">,</span> <span class="token class-name">size_t</span> old_size<span class="token punctuation">,</span> <span class="token class-name">size_t</span> new_size<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//增加内存大小</span>
  <span class="token keyword">char</span> <span class="token operator">*</span> <span class="token function">ndpi_strdup</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//拷贝字符串</span>
  <span class="token keyword">void</span>   <span class="token function">ndpi_free</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//释放内存</span>
  <span class="token keyword">void</span> <span class="token operator">*</span> <span class="token function">ndpi_flow_malloc</span><span class="token punctuation">(</span><span class="token class-name">size_t</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span>   <span class="token function">ndpi_flow_free</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * 搜索子字符串第一次出现的地方 -find- in -s-
   * 搜索仅限于字符串的第一个-slen-字符
   *
   * @par    s     = 解析字符串
   * @par    find  = 要与-s匹配的字符串
   * @par    slen  =匹配 -s- and -find-的最大长度
   * @返回一个指针，指向定位到的子字符串;
   *        返回空指针则表示子字符串未找到
   *
   */</span>
  <span class="token keyword">char</span><span class="token operator">*</span> <span class="token function">ndpi_strnstr</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>s<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>find<span class="token punctuation">,</span> <span class="token class-name">size_t</span> slen<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
 
 
  <span class="token comment">/**
   * 与 ndpi_strnstr函数功能相似但是不区分大小写
   *
   * @par    s     =解析的字符串
   * @par    find  = 要与 -s-匹配的字符串
   * @par    slen  = max length to match between -s- and -find-
   * @返回一个指针，指向定位到的子字符串;
   *        返回空指针则表示子字符串未找到
   *
   */</span>
  <span class="token keyword">char</span><span class="token operator">*</span> <span class="token function">ndpi_strncasestr</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>s<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>find<span class="token punctuation">,</span> <span class="token class-name">size_t</span> slen<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
 
 
  <span class="token comment">/**
   *返回nDPI协议ID用于基于IP的协议检测
   *
   * @par    ndpi_struct  = 创建这个结构体用于协议检测
   * @par    pin          =IP主机地址（必须按网络字节顺序）：
   *详情见Man（7）IP
   * @返回nDPI协议ID
   *
   */</span>
  <span class="token class-name">u_int16_t</span> <span class="token function">ndpi_network_ptree_match</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_struct<span class="token punctuation">,</span><span class="token keyword">struct</span> <span class="token class-name">in_addr</span> <span class="token operator">*</span>pin<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * 初始化单个协议的匹配
   *
   * @par ndpi_mod  = 创建这个结构体用于协议检测
   * @par match     = 结构传递进函数，用于协议匹配
   *
   */</span>
  <span class="token keyword">void</span> <span class="token function">ndpi_init_protocol_match</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_mod<span class="token punctuation">,</span>
				ndpi_protocol_match <span class="token operator">*</span>match<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * 模块初始化函数，返回一个新的初始化过的检测模块
   *
   * @返回一个初始化的检测检测模块
   *
   */</span>
  <span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span><span class="token function">ndpi_init_detection_module</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * 释放指定流中分配的内存
   *
   * @par flow  = 需要被释放内存的流
   *
   */</span>
  <span class="token keyword">void</span> <span class="token function">ndpi_free_flow</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_flow_struct</span> <span class="token operator">*</span>flow<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   *使能存储器支持.
   * In nDPI is used for some protocol用于支持一些协议 (i.e. Skype)
   *
   * @par ndpi_mod  =用于协议检测的结构体
   * @par host      = 域（主机）名字符串
   * @par port      = 端口名（无符号整型）
   *
   */</span>
  <span class="token keyword">void</span> <span class="token function">ndpi_enable_cache</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_mod<span class="token punctuation">,</span>
			 <span class="token keyword">char</span><span class="token operator">*</span> host<span class="token punctuation">,</span> u_int port<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * 清除检测模块
   *
   * @par ndpi_struct  = 需要清除的检测模块
   *
   */</span>
  <span class="token keyword">void</span> <span class="token function">ndpi_exit_detection_module</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_struct<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * 设置单个协议的位掩码
   * 此函数不会增加回调缓冲区的索引
   *
   * @par label                    = 协议名字符串
   * @par ndpi_struct              = 检测模块
   * @par detection_bitmask        = 检测位掩码
   * @par idx                      = 每个协议的回调函数的索引
   * @par func                     = 协议搜索的函数指针
   * @par ndpi_selection_bitmask   = 被选择的位掩码
   * @par b_save_bitmask_unknow    = 如果被设置为“true”，将检测的位掩码保存为unknown
   * @par b_add_detection_bitmask  = 如果被设置为“true”添加这个协议的bitmask到detection bitmask中
   *
   */</span>
  <span class="token keyword">void</span> <span class="token function">ndpi_set_bitmask_protocol_detection</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>label<span class="token punctuation">,</span>
					   <span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_struct<span class="token punctuation">,</span>
					   <span class="token keyword">const</span> NDPI_PROTOCOL_BITMASK <span class="token operator">*</span>detection_bitmask<span class="token punctuation">,</span>
					   <span class="token keyword">const</span> <span class="token class-name">u_int32_t</span> idx<span class="token punctuation">,</span>
					   <span class="token class-name">u_int16_t</span> ndpi_protocol_id<span class="token punctuation">,</span>
					   <span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">*</span>func<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span><span class="token punctuation">,</span>
							 <span class="token keyword">struct</span> <span class="token class-name">ndpi_flow_struct</span> <span class="token operator">*</span>flow<span class="token punctuation">)</span><span class="token punctuation">,</span>
					   <span class="token keyword">const</span> NDPI_SELECTION_BITMASK_PROTOCOL_SIZE ndpi_selection_bitmask<span class="token punctuation">,</span>
					   <span class="token class-name">u_int8_t</span> b_save_bitmask_unknow<span class="token punctuation">,</span>
					   <span class="token class-name">u_int8_t</span> b_add_detection_bitmask<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   *设置协议的 bitmask2
   *
   * @par ndpi_struct        =检测模块
   * @par detection_bitmask  = the protocol bitmask to set
   *
   */</span>
  <span class="token keyword">void</span> <span class="token function">ndpi_set_protocol_detection_bitmask2</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_struct<span class="token punctuation">,</span><span class="token keyword">const</span> NDPI_PROTOCOL_BITMASK <span class="token operator">*</span> detection_bitmask<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">/**
   * 在未知匹配的情况下要调用的函数，以查看当前ndpi首选项配置是否阻止了部分匹配
   *
   * @par    ndpi_struct  = 检测模块
   * @par    flow         = 检测模块检测的流
   * 即使流不是完整的，也返回检测到的协议;
   *
   */</span>
  ndpi_protocol <span class="token function">ndpi_get_partial_detection</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_struct<span class="token punctuation">,</span>
                <span class="token keyword">struct</span> <span class="token class-name">ndpi_flow_struct</span> <span class="token operator">*</span>flow<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">/**
   *  在放弃对给定流的检测之前要调用的函数
   *  这个函数减少了对NDPI_UNKNOWN_PROTOCOL未知协议的检测
   *
   * @par    ndpi_struct  = the detection module
   * @par    flow         = the flow given for the detection module
   * @par    enable_guess = 如果协议未知，猜测协议
   * @即使流不是完整的，也返回检测到的协议
   *
   */</span>
  ndpi_protocol <span class="token function">ndpi_detection_giveup</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_struct<span class="token punctuation">,</span>
				      <span class="token keyword">struct</span> <span class="token class-name">ndpi_flow_struct</span> <span class="token operator">*</span>flow<span class="token punctuation">,</span>
				      <span class="token class-name">u_int8_t</span> enable_guess<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * 处理一个额外的数据包，以便获得给定协议的更多信息
   * (就像ssl获取客户端和服务器证书一样，即使在看到客户端证书之后我们已经知道这个协议是什么。)
   *
   * @par    ndpi_struct   = the detection module
   * @par    flow          = pointer to the connection state machine指向连接状态机的指针。
   * @par    packet        = unsigned char pointer to the Layer 3 (IP header)
   * @par    packetlen     = 数据包长度
   * @par    current_tick  = 包的时间戳
   * @par    src           = pointer to the source subscriber state machine
   *                          指向源订阅状态机
   * @par    dst           = pointer to the destination subscriber state machine
   *                          指向目的订阅状态机
   * @return void
   *
   */</span>
  <span class="token keyword">void</span> <span class="token function">ndpi_process_extra_packet</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_struct<span class="token punctuation">,</span>
				 <span class="token keyword">struct</span> <span class="token class-name">ndpi_flow_struct</span> <span class="token operator">*</span>flow<span class="token punctuation">,</span>
				 <span class="token keyword">const</span> <span class="token keyword">unsigned</span> <span class="token keyword">char</span> <span class="token operator">*</span>packet<span class="token punctuation">,</span>
				 <span class="token keyword">const</span> <span class="token keyword">unsigned</span> <span class="token keyword">short</span> packetlen<span class="token punctuation">,</span>
				 <span class="token keyword">const</span> <span class="token class-name">u_int64_t</span> current_tick<span class="token punctuation">,</span>
				 <span class="token keyword">struct</span> <span class="token class-name">ndpi_id_struct</span> <span class="token operator">*</span>src<span class="token punctuation">,</span>
				 <span class="token keyword">struct</span> <span class="token class-name">ndpi_id_struct</span> <span class="token operator">*</span>dst<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * 处理一个数据包，并且返回检测到的协议ID
   * This is the MAIN PACKET PROCESSING FUNCTION.
   *            主要的包处理函数，很重要，之后我们会分析到
   * @par    ndpi_struct   = the detection module
   * @par    flow          = pointer to the connection state machine指向连接状态机的指针
   * @par    packet        = unsigned char pointer to the Layer 3 (IP header)
   * @par    packetlen     = the length of the packet
   * @par    current_tick  = the current timestamp for the packet
   * @par    src           = pointer to the source subscriber state machine
   * @par    dst           = pointer to the destination subscriber state machine
   * @return the detected ID of the protocol
   *
   */</span>
  ndpi_protocol <span class="token function">ndpi_detection_process_packet</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_struct<span class="token punctuation">,</span>
					      <span class="token keyword">struct</span> <span class="token class-name">ndpi_flow_struct</span> <span class="token operator">*</span>flow<span class="token punctuation">,</span>
					      <span class="token keyword">const</span> <span class="token keyword">unsigned</span> <span class="token keyword">char</span> <span class="token operator">*</span>packet<span class="token punctuation">,</span>
					      <span class="token keyword">const</span> <span class="token keyword">unsigned</span> <span class="token keyword">short</span> packetlen<span class="token punctuation">,</span>
					      <span class="token keyword">const</span> <span class="token class-name">u_int64_t</span> current_tick<span class="token punctuation">,</span>
					      <span class="token keyword">struct</span> <span class="token class-name">ndpi_id_struct</span> <span class="token operator">*</span>src<span class="token punctuation">,</span>
					      <span class="token keyword">struct</span> <span class="token class-name">ndpi_id_struct</span> <span class="token operator">*</span>dst<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">/**
   * 获取检测模块检测到传递流的主协议
   *
   *
   * @par    ndpi_struct  = the detection module
   * @par    flow         = the flow given for the detection module
   * @return the ID of the master protocol detected主协议
   *
   */</span>
  <span class="token class-name">u_int16_t</span> <span class="token function">ndpi_get_flow_masterprotocol</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_struct<span class="token punctuation">,</span>
					 <span class="token keyword">struct</span> <span class="token class-name">ndpi_flow_struct</span> <span class="token operator">*</span>flow<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">/**
   *ndpi_detection_process_packet函数或应用程序在内部调用的API calls
   * 希望避免调用ndpi_detection_process_packet函数，因为它们已经解析了数据包，因此希望避免这种情况，这说明app在外部并不能调用ndpi_detection_process_packet函数来处理数据包
   *
   *
   * @par    ndpi_struct              = the detection module
   * @par    flow                     = the flow given for the detection module
   * @par    ndpi_selection_bitmask   = the protocol selected bitmask
   *
   */</span>
  <span class="token keyword">void</span> <span class="token function">ndpi_check_flow_func</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_struct<span class="token punctuation">,</span>
			    <span class="token keyword">struct</span> <span class="token class-name">ndpi_flow_struct</span> <span class="token operator">*</span>flow<span class="token punctuation">,</span>
			    NDPI_SELECTION_BITMASK_PROTOCOL_SIZE <span class="token operator">*</span>ndpi_selection_packet<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * 查询指向第4层数据包的指针
   *
   * @par    l3 = pointer to the layer 3 data
   * @par    l3_len = length of the layer 3 data
   * @par    l4_return = address to the pointer of the layer 4 data if return value == 0, else undefined 如果返回值=0，则指向第4层数据指针的地址，否则未定义
   * @par    l4_len_return = length of the layer 4 data if return value == 0, else undefined
   * @par    l4_protocol_return = protocol of the layer 4 data if return value == 0, undefined otherwise
   * @par    flags = limit operation on ipv4 or ipv6 packets. Possible values: NDPI_DETECTION_ONLY_IPV4 - NDPI_DETECTION_ONLY_IPV6 - 0 (any)限制IPV4或者IPV6
   * @return 0 if layer 4 data could be found correctly; 正确找到了第四层数据，返回0，否则不返回0
             else != 0
   *
   */</span>
  <span class="token class-name">u_int8_t</span> <span class="token function">ndpi_detection_get_l4</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token class-name">u_int8_t</span> <span class="token operator">*</span>l3<span class="token punctuation">,</span> <span class="token class-name">u_int16_t</span> l3_len<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token class-name">u_int8_t</span> <span class="token operator">*</span><span class="token operator">*</span>l4_return<span class="token punctuation">,</span> <span class="token class-name">u_int16_t</span> <span class="token operator">*</span>l4_len_return<span class="token punctuation">,</span>
				 <span class="token class-name">u_int8_t</span> <span class="token operator">*</span>l4_protocol_return<span class="token punctuation">,</span> <span class="token class-name">u_int32_t</span> flags<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * 根据匹配的端口搜索并返回协议
   *
   * @par    ndpi_struct  = the detection module
   * @par    shost        = source address in host byte order 主机字节顺序的源地址
   * @par    sport        = source port number
   * @par    dhost        = destination address in host byte order
   * @par    dport        = destination port number
   * @return the struct ndpi_protocol that match the port base protocol
   * 注意此处返回的是一个结构ndpi_protocol
   */</span>
  ndpi_protocol <span class="token function">ndpi_find_port_based_protocol</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_struct<span class="token comment">/* , u_int8_t proto */</span><span class="token punctuation">,</span>
					      <span class="token class-name">u_int32_t</span> shost<span class="token punctuation">,</span>
					      <span class="token class-name">u_int16_t</span> sport<span class="token punctuation">,</span>
					      <span class="token class-name">u_int32_t</span> dhost<span class="token punctuation">,</span>
					      <span class="token class-name">u_int16_t</span> dport<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">/**
   * Search and return the protocol guessed that is undetected
   *  搜索并返回未检测出但是被猜测的协议
   * @par    ndpi_struct  = the detection module
   * @par    flow         = the flow we&#39;re trying to guess, NULL if not available需要猜测的流
   * @par    proto        = the l4 protocol number
   * @par    shost        = source address in host byte order
   * @par    sport        = source port number
   * @par    dhost        = destination address in host byte order
   * @par    dport        = destination port number
   * @return the struct ndpi_protocol that match the port base protocol
   *
   */</span>
  ndpi_protocol <span class="token function">ndpi_guess_undetected_protocol</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_struct<span class="token punctuation">,</span>
					       <span class="token keyword">struct</span> <span class="token class-name">ndpi_flow_struct</span> <span class="token operator">*</span>flow<span class="token punctuation">,</span>
					       <span class="token class-name">u_int8_t</span> proto<span class="token punctuation">,</span>
					       <span class="token class-name">u_int32_t</span> shost<span class="token punctuation">,</span>
					       <span class="token class-name">u_int16_t</span> sport<span class="token punctuation">,</span>
					       <span class="token class-name">u_int32_t</span> dhost<span class="token punctuation">,</span>
					       <span class="token class-name">u_int16_t</span> dport<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
 
  <span class="token comment">/**下面三个函数对应了三个方法，检测子协议**/</span>
  <span class="token comment">/*
   *检查传递的字符串是否与协议匹配， 用于子协议的检测
   *
   * @par    ndpi_struct         = the detection module
   * @par    string_to_match     = the string to match
   * @par    string_to_match_len = the length of the string
   * @par    ret_match           = completed returned match information
   * @par    is_host_match       = value of the second field of struct ndpi_automa
   * @return the ID of the matched subprotocol 返回匹配的子协议ID
   *
   */</span>
  <span class="token keyword">int</span> <span class="token function">ndpi_match_string_subprotocol</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_struct<span class="token punctuation">,</span>
				    <span class="token keyword">char</span> <span class="token operator">*</span>string_to_match<span class="token punctuation">,</span>
				    u_int string_to_match_len<span class="token punctuation">,</span>
				    ndpi_protocol_match_result <span class="token operator">*</span>ret_match<span class="token punctuation">,</span>
				    <span class="token class-name">u_int8_t</span> is_host_match<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">/**
   * 检查传递的域名（主机）是否与协议匹配
   *
   * @par    ndpi_struct         = the detection module
   * @par    flow                = the flow where match the host
   * @par    string_to_match     = the string to match 匹配的字符串
   * @par    string_to_match_len = the length of the string
   * @par    ret_match           = completed returned match information 匹配结果信息
   * @par    master_protocol_id  = value of the ID associated to the master protocol detected    主协议ID
   * @return the ID of the matched subprotocol  返回子协议ID
   *
   */</span>
  <span class="token keyword">int</span> <span class="token function">ndpi_match_host_subprotocol</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_struct<span class="token punctuation">,</span>
				  <span class="token keyword">struct</span> <span class="token class-name">ndpi_flow_struct</span> <span class="token operator">*</span>flow<span class="token punctuation">,</span>
				  <span class="token keyword">char</span> <span class="token operator">*</span>string_to_match<span class="token punctuation">,</span>
				  u_int string_to_match_len<span class="token punctuation">,</span>
				  ndpi_protocol_match_result <span class="token operator">*</span>ret_match<span class="token punctuation">,</span>
				  <span class="token class-name">u_int16_t</span> master_protocol_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
 
  <span class="token comment">/**
   * 检查传递的字符串内容是否与协议匹配
   *
   * @par    ndpi_struct         = the detection module
   * @par    flow                = the flow where match the host
   * @par    string_to_match     = the string to match
   * @par    string_to_match_len = the length of the string
   * @par    ret_match           = completed returned match information
   * @par    master_protocol_id  = value of the ID associated to the master protocol detected
   * @return the ID of the matched subprotocol
   *
   */</span>
  <span class="token keyword">int</span> <span class="token function">ndpi_match_content_subprotocol</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_struct<span class="token punctuation">,</span>
				     <span class="token keyword">struct</span> <span class="token class-name">ndpi_flow_struct</span> <span class="token operator">*</span>flow<span class="token punctuation">,</span>
				     <span class="token keyword">char</span> <span class="token operator">*</span>string_to_match<span class="token punctuation">,</span>
				     u_int string_to_match_len<span class="token punctuation">,</span>
				     ndpi_protocol_match_result <span class="token operator">*</span>ret_match<span class="token punctuation">,</span>
				     <span class="token class-name">u_int16_t</span> master_protocol_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
 
  <span class="token comment">/**
   * 从搜索中排除协议
   *
   * @par    ndpi_struct         = the detection module
   * @par    flow                = the flow where match the host
   * @par    master_protocol_id  = value of the ID associated to the master protocol detected
   *
   */</span>
  <span class="token keyword">void</span> <span class="token function">ndpi_exclude_protocol</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_struct<span class="token punctuation">,</span>
				  <span class="token keyword">struct</span> <span class="token class-name">ndpi_flow_struct</span> <span class="token operator">*</span>flow<span class="token punctuation">,</span>
				  <span class="token class-name">u_int16_t</span> master_protocol_id<span class="token punctuation">,</span>
				  <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>_file<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>_func<span class="token punctuation">,</span><span class="token keyword">int</span> _line<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">/**
   *检查字符串-bigram-to-u是否匹配-automa的bigram- 双字节匹配
   *
   * @par     ndpi_mod         = the detection module
   * @par     automa           = the struct ndpi_automa for the bigram
   * @par     bigram_to_match  = the bigram string to match
   * @return  0
   *
   */</span>
  <span class="token keyword">int</span> <span class="token function">ndpi_match_bigram</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_mod<span class="token punctuation">,</span>
			ndpi_automa <span class="token operator">*</span>automa<span class="token punctuation">,</span>
			<span class="token keyword">char</span> <span class="token operator">*</span>bigram_to_match<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * Write the protocol name in the buffer -buf- as master_protocol.protocol
   *在数组-buf- as master_protocol.protocol中写入协议名
   * @par     ndpi_mod      = the detection module
   * @par     proto         = the struct ndpi_protocol contain the protocols name
   * @par     buf           = the buffer to write the name of the protocols
   * @par     buf_len       = the length of the buffer
   * @return  the buffer contains the master_protocol and protocol name
   *
   */</span>
  <span class="token keyword">char</span><span class="token operator">*</span> <span class="token function">ndpi_protocol2name</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_mod<span class="token punctuation">,</span>
			   ndpi_protocol proto<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>buf<span class="token punctuation">,</span> u_int buf_len<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * Same as ndpi_protocol2name() with the difference that the numeric protocol
   * name is returned  
   * 返回数字协议名
   * @par     ndpi_mod      = the detection module
   * @par     proto         = the struct ndpi_protocol contain the protocols name
   * @par     buf           = the buffer to write the name of the protocols
   * @par     buf_len       = the length of the buffer
   * @return  the buffer contains the master_protocol and protocol name
   *
   */</span>
  <span class="token keyword">char</span><span class="token operator">*</span> <span class="token function">ndpi_protocol2id</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_mod<span class="token punctuation">,</span>
			 ndpi_protocol proto<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>buf<span class="token punctuation">,</span> u_int buf_len<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * 找出给定的类别是否是自定义/用户定义的
   *
   * @par     category      = the category associated to the protocol
   * @return  1 if this is a custom user category, 0 otherwise
   * 如果是自定义则返回1
   */</span>
  <span class="token keyword">int</span> <span class="token function">ndpi_is_custom_category</span><span class="token punctuation">(</span><span class="token class-name">ndpi_protocol_category_t</span> category<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * 用自定义类型覆盖由NDPI定义的协议类型
   *
   * @par     ndpi_mod      = the detection module
   * @par     protoId       = the protocol identifier to overwrite 用于覆盖的协议分析器
   * @par     breed         = the breed to be associated to the protocol
   *
   */</span>
  <span class="token keyword">void</span> <span class="token function">ndpi_set_proto_breed</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_mod<span class="token punctuation">,</span>
			    <span class="token class-name">u_int16_t</span> protoId<span class="token punctuation">,</span> <span class="token class-name">ndpi_protocol_breed_t</span> breed<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * 用自定义类别覆盖由NDPI定义的协议类别
   *
   * @par     ndpi_mod      = the detection module
   * @par     protoId       = the protocol identifier to overwrite
   * @par     category      = the category associated to the protocol
   *
   */</span>
  <span class="token keyword">void</span> <span class="token function">ndpi_set_proto_category</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_mod<span class="token punctuation">,</span>
			       <span class="token class-name">u_int16_t</span> protoId<span class="token punctuation">,</span> <span class="token class-name">ndpi_protocol_category_t</span> protoCategory<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * 检查指定主协议的子协议是否只是信息性的（而不是真实的）
   *
   * @par     mod           = the detection module
   * @par     protoId       = the (master) protocol identifier to query
   * @return  1 = the subprotocol is informative, 0 otherwise.
   *
   */</span>
  <span class="token class-name">u_int8_t</span> <span class="token function">ndpi_is_subprotocol_informative</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_mod<span class="token punctuation">,</span>
					   <span class="token class-name">u_int16_t</span> protoId<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * 将协议类别作为字符串获取
   *
   * @par     mod           = the detection module
   * @par     category      = the category associated to the protocol
   * @return  the string name of the category
   *
   */</span>
  <span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> <span class="token function">ndpi_category_get_name</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_mod<span class="token punctuation">,</span>
				     <span class="token class-name">ndpi_protocol_category_t</span> category<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * 设置协议类别字符串
   *
   * @par     mod           = the detection module
   * @par     category      = the category associated to the protocol
   * @paw     name          = the string name of the category
   *
   */</span>
  <span class="token keyword">void</span> <span class="token function">ndpi_category_set_name</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_mod<span class="token punctuation">,</span>
			      <span class="token class-name">ndpi_protocol_category_t</span> category<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * 获得协议种类
   *
   * @par     ndpi_mod      = the detection module
   * @par     proto         = the struct ndpi_protocol contain the protocols name
   * @return  the protocol category
   */</span>
  <span class="token class-name">ndpi_protocol_category_t</span> <span class="token function">ndpi_get_proto_category</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_mod<span class="token punctuation">,</span>
						   ndpi_protocol proto<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * 获取与ID关联的协议名
   *
   * @par     mod           = the detection module
   * @par     proto_id      = the ID of the protocol
   * @return  the buffer contains the master_protocol and protocol name
   *
   */</span>
  <span class="token keyword">char</span><span class="token operator">*</span> <span class="token function">ndpi_get_proto_name</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>mod<span class="token punctuation">,</span> <span class="token class-name">u_int16_t</span> proto_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
 
  <span class="token comment">/**
   * 返回与协议相关联的协议类型ID
   *
   * @par     ndpi_struct   = the detection module
   * @par     proto         = the ID of the protocol
   * @return  the breed ID associated to the protocol
   *
   */</span>
  <span class="token class-name">ndpi_protocol_breed_t</span> <span class="token function">ndpi_get_proto_breed</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_struct<span class="token punctuation">,</span>
					     <span class="token class-name">u_int16_t</span> proto<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * Return the string name of the protocol breed
   *返回协议类型的字符串名
   * @par     ndpi_struct   = the detection module
   * @par     breed_id      = the breed ID associated to the protocol
   * @return  the string name of the breed ID
   *
   */</span>
  <span class="token keyword">char</span><span class="token operator">*</span> <span class="token function">ndpi_get_proto_breed_name</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_struct<span class="token punctuation">,</span>
				  <span class="token class-name">ndpi_protocol_breed_t</span> breed_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * Return the ID of the protocol返回协议ID，整型
   *
   * @par     ndpi_mod   = the detection module
   * @par     proto      = the protocol name
   * @return  the ID of the protocol
   *
   */</span>
  <span class="token keyword">int</span> <span class="token function">ndpi_get_protocol_id</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_mod<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>proto<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * Return the ID of the category返回类型ID
   *
   * @par     ndpi_mod   = the detection module
   * @par     proto      = the category name
   * @return  the ID of the category
   *
   */</span>
  <span class="token keyword">int</span> <span class="token function">ndpi_get_category_id</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_mod<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>cat<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * 生成子协议列表Write the list of the supported protocols
   *
   * @par  ndpi_mod = the detection module
   */</span>
  <span class="token keyword">void</span> <span class="token function">ndpi_dump_protocols</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>mod<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * 读文件加载协议 Read a file and load the protocols
   *
   * Format: &lt;tcp|udp&gt;:&lt;port&gt;,&lt;tcp|udp&gt;:&lt;port&gt;,.....@&lt;proto&gt;
   *
   * Example:
   * tcp:80,tcp:3128@HTTP
   * udp:139@NETBIOS
   *
   * @par     ndpi_mod = the detection module
   * @par     path     = the path of the file
   * @return  0 if the file is loaded correctly;
   *          -1 else
   *
   */</span>
  <span class="token keyword">int</span> <span class="token function">ndpi_load_protocols_file</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_mod<span class="token punctuation">,</span>
			       <span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * 获得子协议的总数Get the total number of the supported protocols
   *
   * @par     ndpi_mod = the detection module
   * @return  the number of protocols
   *
   */</span>
  u_int <span class="token function">ndpi_get_num_supported_protocols</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_mod<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * Get the nDPI version release 获取 nDPI 版本
   *
   * @return the NDPI_GIT_RELEASE
   *
   */</span>
  <span class="token keyword">char</span><span class="token operator">*</span> <span class="token function">ndpi_revision</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * 为协议搜索设置自动匹配 Set the automa for the protocol search 
   *
   * @par ndpi_struct = the detection module
   * @par automa      = the automa to match
   *
   */</span>
  <span class="token keyword">void</span> <span class="token function">ndpi_set_automa</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_struct<span class="token punctuation">,</span>
		       <span class="token keyword">void</span><span class="token operator">*</span> automa<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">/* NDPI_PROTOCOL_HTTP */</span>
  <span class="token comment">/**
   * 检索HTTP流的信息
   *
   * @par     ndpi_mod = the detection module
   * @par     flow     = the detected flow
   * @return  the HTTP method information about the flow
   *
  */</span>
  ndpi_http_method <span class="token function">ndpi_get_http_method</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_mod<span class="token punctuation">,</span>
					<span class="token keyword">struct</span> <span class="token class-name">ndpi_flow_struct</span> <span class="token operator">*</span>flow<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * Get the HTTP url 获取HTTP URL
   *
   * @par     ndpi_mod = the detection module
   * @par     flow     = the detected flow
   * @return  the HTTP method information about the flow
   *
  */</span>
  <span class="token keyword">char</span><span class="token operator">*</span> <span class="token function">ndpi_get_http_url</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_mod<span class="token punctuation">,</span>
			  <span class="token keyword">struct</span> <span class="token class-name">ndpi_flow_struct</span> <span class="token operator">*</span>flow<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * Get the HTTP content-type  内容类型
   *
   * @par     ndpi_mod = the detection module
   * @par     flow     = the detected flow
   * @return  the HTTP method information about the flow
   *
  */</span>
  <span class="token keyword">char</span><span class="token operator">*</span> <span class="token function">ndpi_get_http_content_type</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_mod<span class="token punctuation">,</span>
				   <span class="token keyword">struct</span> <span class="token class-name">ndpi_flow_struct</span> <span class="token operator">*</span>flow<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">/* NDPI_PROTOCOL_TOR */</span>
  <span class="token comment">/**
   * 检查流是否可以作为Tor协议检测到Check if the flow could be detected as TOR protocol
   *
   * @par     ndpi_struct = the detection module
   * @par     flow = the detected flow
   * @par     certificate = the ssl certificate
   * @return  1 if the flow is TOR;
   *          0 else
   *
   */</span>
  <span class="token keyword">int</span> <span class="token function">ndpi_is_ssl_tor</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_struct<span class="token punctuation">,</span>
		      <span class="token keyword">struct</span> <span class="token class-name">ndpi_flow_struct</span> <span class="token operator">*</span>flow<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>certificate<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/* Wrappers functions */</span>
  <span class="token comment">/**
   * Init Aho-Corasick automata  初始化AC自动机
   *
   * @return  The requested automata, or NULL if an error occurred
   *
   */</span>
  <span class="token keyword">void</span><span class="token operator">*</span> <span class="token function">ndpi_init_automa</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
 
 <span class="token comment">/**
   * Free Aho-Corasick automata allocated with ndpi_init_automa();
   *
   * @par     The automata initialized with ndpi_init_automa();
   *
   */</span>
  <span class="token keyword">void</span> <span class="token function">ndpi_free_automa</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>_automa<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * Add a string to match to an automata
   *
   * @par     The automata initialized with ndpi_init_automa();
   * @par     The (sub)string to search
   * @par     The number associated with this string
   * @return  0 in case of no error, or -1 if an error occurred.
   *
   */</span>
  <span class="token keyword">int</span> <span class="token function">ndpi_add_string_value_to_automa</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>_automa<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>str<span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * Add a string to match to an automata. Same as ndpi_add_string_value_to_automa() with num set to 1
   *
   * @par     The automata initialized with ndpi_init_automa();
   * @par     The (sub)string to search
   * @return  0 in case of no error, or -1 if an error occurred.
   *
   */</span>
  <span class="token keyword">int</span> <span class="token function">ndpi_add_string_to_automa</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>_automa<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/**
   * Finalize the automa (necessary before start searching)开始搜索必须设置好自动机
   *
   * @par     The automata initialized with ndpi_init_automa();
   *
   */</span>
  <span class="token keyword">void</span> <span class="token function">ndpi_finalize_automa</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>_automa<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/** 
   * Add a string to match to an automata  添加与自动机匹配的字符串
   *
   * @par     The automata initialized with ndpi_init_automa();
   * @par     The (sub)string to search
   * @return  0 in case of match, or -1 if no match, or -2 if an error occurred.
   *
   */</span>
  <span class="token keyword">int</span> <span class="token function">ndpi_match_string</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>_automa<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>string_to_match<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token keyword">void</span> <span class="token function">ndpi_load_ip_category</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_struct<span class="token punctuation">,</span>
			     <span class="token keyword">char</span> <span class="token operator">*</span>ip_address_and_mask<span class="token punctuation">,</span> <span class="token class-name">ndpi_protocol_category_t</span> category<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> <span class="token function">ndpi_load_hostname_category</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_struct<span class="token punctuation">,</span>
				  <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">,</span> <span class="token class-name">ndpi_protocol_category_t</span> category<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> <span class="token function">ndpi_enable_loaded_categories</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_struct<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> <span class="token function">ndpi_fill_ip_protocol_category</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_struct<span class="token punctuation">,</span>
				 <span class="token class-name">u_int32_t</span> saddr<span class="token punctuation">,</span>
				 <span class="token class-name">u_int32_t</span> daddr<span class="token punctuation">,</span>
				 ndpi_protocol <span class="token operator">*</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> <span class="token function">ndpi_match_custom_category</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_struct<span class="token punctuation">,</span>
				      <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span> <span class="token operator">*</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">ndpi_fill_protocol_category</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_struct<span class="token punctuation">,</span>
				   <span class="token keyword">struct</span> <span class="token class-name">ndpi_flow_struct</span> <span class="token operator">*</span>flow<span class="token punctuation">,</span>
				   ndpi_protocol <span class="token operator">*</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> <span class="token function">ndpi_get_custom_category_match</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_struct<span class="token punctuation">,</span>
				      <span class="token keyword">char</span> <span class="token operator">*</span>name_or_ip<span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span> <span class="token operator">*</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> <span class="token function">ndpi_set_detection_preferences</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_mod<span class="token punctuation">,</span>
				     ndpi_detection_preference pref<span class="token punctuation">,</span>
				     <span class="token keyword">int</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token class-name">ndpi_proto_defaults_t</span><span class="token operator">*</span> <span class="token function">ndpi_get_proto_defaults</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_mod<span class="token punctuation">)</span><span class="token punctuation">;</span>
  u_int <span class="token function">ndpi_get_ndpi_num_supported_protocols</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_mod<span class="token punctuation">)</span><span class="token punctuation">;</span>
  u_int <span class="token function">ndpi_get_ndpi_num_custom_protocols</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_mod<span class="token punctuation">)</span><span class="token punctuation">;</span>
  u_int <span class="token function">ndpi_get_ndpi_detection_module_size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">ndpi_set_log_level</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_mod<span class="token punctuation">,</span> u_int l<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/* LRU cache */</span>
  <span class="token keyword">struct</span> <span class="token class-name">ndpi_lru_cache</span><span class="token operator">*</span> <span class="token function">ndpi_lru_cache_init</span><span class="token punctuation">(</span><span class="token class-name">u_int32_t</span> num_entries<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">ndpi_lru_free_cache</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_lru_cache</span> <span class="token operator">*</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">u_int8_t</span> <span class="token function">ndpi_lru_find_cache</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_lru_cache</span> <span class="token operator">*</span>c<span class="token punctuation">,</span> <span class="token class-name">u_int32_t</span> key<span class="token punctuation">,</span> <span class="token class-name">u_int8_t</span> clean_key_when_found<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">ndpi_lru_add_to_cache</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_lru_cache</span> <span class="token operator">*</span>c<span class="token punctuation">,</span> <span class="token class-name">u_int32_t</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">/**
   * Add a string to match to an automata  //ID字符串
   *
   * @par     The automata initialized with ndpi_init_automa();
   * @par     The (sub)string to search
   * @par     The id associated with the matched string or 0 id not found.
   * @return  0 in case of match, or -1 if no match, or -2 if an error occurred.
   *
   */</span>
  <span class="token keyword">int</span> <span class="token function">ndpi_match_string_id</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>_automa<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>string_to_match<span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span> <span class="token operator">*</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/* Utility functions to set ndpi malloc/free/print wrappers
    *设置ndpi malloc/free/print wrappers的实用程序函数 */</span>
  <span class="token keyword">void</span> <span class="token function">set_ndpi_malloc</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token operator">*</span>__ndpi_malloc<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token class-name">size_t</span> size<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">set_ndpi_free</span><span class="token punctuation">(</span><span class="token keyword">void</span>  <span class="token punctuation">(</span><span class="token operator">*</span>__ndpi_free<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>ptr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">set_ndpi_flow_malloc</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token operator">*</span>__ndpi_flow_malloc<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token class-name">size_t</span> size<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">set_ndpi_flow_free</span><span class="token punctuation">(</span><span class="token keyword">void</span>  <span class="token punctuation">(</span><span class="token operator">*</span>__ndpi_flow_free<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>ptr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">set_ndpi_debug_function</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ndpi_detection_module_struct</span> <span class="token operator">*</span>ndpi_str<span class="token punctuation">,</span>
			       ndpi_debug_function_ptr ndpi_debug_printf<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token operator">*</span> <span class="token function">ndpi_malloc</span><span class="token punctuation">(</span><span class="token class-name">size_t</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token operator">*</span> <span class="token function">ndpi_calloc</span><span class="token punctuation">(</span><span class="token keyword">unsigned</span> <span class="token keyword">long</span> count<span class="token punctuation">,</span> <span class="token class-name">size_t</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">ndpi_free</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">u_int8_t</span> <span class="token function">ndpi_get_api_version</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">/* https://github.com/corelight/community-id-spec */</span>
  <span class="token keyword">int</span> <span class="token function">ndpi_flowv4_flow_hash</span><span class="token punctuation">(</span><span class="token class-name">u_int8_t</span> l4_proto<span class="token punctuation">,</span> <span class="token class-name">u_int32_t</span> src_ip<span class="token punctuation">,</span> <span class="token class-name">u_int32_t</span> dst_ip<span class="token punctuation">,</span> <span class="token class-name">u_int16_t</span> src_port<span class="token punctuation">,</span> <span class="token class-name">u_int16_t</span> dst_port<span class="token punctuation">,</span>
			    <span class="token class-name">u_int8_t</span> icmp_type<span class="token punctuation">,</span> <span class="token class-name">u_int8_t</span> icmp_code<span class="token punctuation">,</span> u_char <span class="token operator">*</span>hash_buf<span class="token punctuation">,</span> <span class="token class-name">u_int8_t</span> hash_buf_len<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> <span class="token function">ndpi_flowv6_flow_hash</span><span class="token punctuation">(</span><span class="token class-name">u_int8_t</span> l4_proto<span class="token punctuation">,</span> <span class="token keyword">struct</span> <span class="token class-name">ndpi_in6_addr</span> <span class="token operator">*</span>src_ip<span class="token punctuation">,</span> <span class="token keyword">struct</span> <span class="token class-name">ndpi_in6_addr</span> <span class="token operator">*</span>dst_ip<span class="token punctuation">,</span>
			    <span class="token class-name">u_int16_t</span> src_port<span class="token punctuation">,</span> <span class="token class-name">u_int16_t</span> dst_port<span class="token punctuation">,</span> <span class="token class-name">u_int8_t</span> icmp_type<span class="token punctuation">,</span> <span class="token class-name">u_int8_t</span> icmp_code<span class="token punctuation">,</span>
			    u_char <span class="token operator">*</span>hash_buf<span class="token punctuation">,</span> <span class="token class-name">u_int8_t</span> hash_buf_len<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">__cplusplus</span></span>
<span class="token punctuation">}</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
 
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span>	<span class="token comment">/* __NDPI_API_H__ */</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文件中声明的函数非常多，很多函数也许现在并不是很理解其功能，但是我们会在今后一步一步来分析它们，而且这些函数声明中有很多参数都是我们上一篇文章中分析的重要结构体，所以在阅读函数主体之前我们应该熟悉掌握这些重要的结构体。之后的函数分析则会根据nDPI的工作流程来逐步分析所用到的函数及其功能。</p>`,21),p=[i];function o(c,l){return s(),a("div",null,p)}const u=n(t,[["render",o],["__file","nDPI源码解析之深度包检测分析.html.vue"]]),v=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/02.%20Theory/Computer/03.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F%20-%20%E4%B8%93%E9%A2%98%E6%88%96%E5%AD%90%E7%B3%BB%E7%BB%9F%E7%9A%84%E5%AD%97%E5%85%B8%E7%89%88/%E4%B8%8B%E5%B1%82%E7%9B%B8%E5%85%B3/Network/%E7%BD%91%E7%BB%9C%E5%BA%93/%E6%97%A0%E5%8D%8F%E8%AE%AE%E6%A0%88%E5%BA%93/nDPI/%E6%9D%82%E7%AF%87/nDPI%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90%E4%B9%8B%E6%B7%B1%E5%BA%A6%E5%8C%85%E6%A3%80%E6%B5%8B%E5%88%86%E6%9E%90.html","title":"nDPI","lang":"zh-CN","frontmatter":{"description":"nDPI 目录 【NDPI】源码解析之深度包检测分析 参考：https://blog.csdn.net/A_lber_t/article/details/89632412 前言 关于nDPI的基本功能就不在这介绍了，有兴趣了解的读者可以阅读官方的快速入门指南：https://github.com/ntop/nDPI/blob/dev/doc/nDPI_...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/02.%20Theory/Computer/03.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F%20-%20%E4%B8%93%E9%A2%98%E6%88%96%E5%AD%90%E7%B3%BB%E7%BB%9F%E7%9A%84%E5%AD%97%E5%85%B8%E7%89%88/%E4%B8%8B%E5%B1%82%E7%9B%B8%E5%85%B3/Network/%E7%BD%91%E7%BB%9C%E5%BA%93/%E6%97%A0%E5%8D%8F%E8%AE%AE%E6%A0%88%E5%BA%93/nDPI/%E6%9D%82%E7%AF%87/nDPI%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90%E4%B9%8B%E6%B7%B1%E5%BA%A6%E5%8C%85%E6%A3%80%E6%B5%8B%E5%88%86%E6%9E%90.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"nDPI"}],["meta",{"property":"og:description","content":"nDPI 目录 【NDPI】源码解析之深度包检测分析 参考：https://blog.csdn.net/A_lber_t/article/details/89632412 前言 关于nDPI的基本功能就不在这介绍了，有兴趣了解的读者可以阅读官方的快速入门指南：https://github.com/ntop/nDPI/blob/dev/doc/nDPI_..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nDPI\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"nDPI","slug":"ndpi","link":"#ndpi","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"【NDPI】源码解析之深度包检测分析","slug":"【ndpi】源码解析之深度包检测分析","link":"#【ndpi】源码解析之深度包检测分析","children":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"nDPI深度包检测流程","slug":"ndpi深度包检测流程","link":"#ndpi深度包检测流程","children":[]},{"level":2,"title":"重要结构体的源码分析","slug":"重要结构体的源码分析","link":"#重要结构体的源码分析","children":[{"level":3,"title":"ndpi_ethdr、ndpi_iphdr、ndpi_tcphdr、ndpi_udphdr","slug":"ndpi-ethdr、ndpi-iphdr、ndpi-tcphdr、ndpi-udphdr","link":"#ndpi-ethdr、ndpi-iphdr、ndpi-tcphdr、ndpi-udphdr","children":[]},{"level":3,"title":"ndpi_flow_struct","slug":"ndpi-flow-struct","link":"#ndpi-flow-struct","children":[]},{"level":3,"title":"ndpi_packet_struct","slug":"ndpi-packet-struct","link":"#ndpi-packet-struct","children":[]},{"level":3,"title":"ndpi_detection_module_struct","slug":"ndpi-detection-module-struct","link":"#ndpi-detection-module-struct","children":[]}]},{"level":2,"title":"ndpi_api.h 源代码分析及注释","slug":"ndpi-api-h-源代码分析及注释","link":"#ndpi-api-h-源代码分析及注释","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":15.96,"words":4788},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/02. Theory/Computer/03. 计算机系统 - 专题或子系统的字典版/下层相关/Network/网络库/无协议栈库/nDPI/杂篇/nDPI源码解析之深度包检测分析.md","autoDesc":true}');export{u as comp,v as data};

import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as s,a}from"./app-DVIBfMrr.js";const i={},t=a(`<h2 id="常用的api方法原型" tabindex="-1"><a class="header-anchor" href="#常用的api方法原型"><span>常用的API方法原型</span></a></h2><h3 id="event-new-初始化上树节点" tabindex="-1"><a class="header-anchor" href="#event-new-初始化上树节点"><span>event_new（初始化上树节点）</span></a></h3><p>初始化上树节点</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">/**
  分配和分配一个新的事件结构，准备添加。

函数event_new()返回一个新事件，该事件可用于将来调用event_add()和event_del()。fd和事件参数决定哪些条件将触发事件;的
callback和callback_arg参数告诉Libevent在事件变为活动状态。

如果事件包含EV_READ, EV_WRITE或EV_READ中的一个，则
Fd是一个应该被监视的文件描述符或套接字
准备好读，准备好写，或准备好进行任一操作
(分别)。如果events包含EV_SIGNAL，则fd是一个信号
等待的号码。如果事件不包含这些标志，则
事件只能通过超时或手动激活来触发
event_active():在这种情况下，fd必须为-1。

EV_PERSIST标志也可以在events参数中传递
Event_add()一直持续到event_del()被调用。

EV_ET标志与EV_READ和EV_WRITE标志兼容，并且支持
只有特定的后端。它告诉Libevent使用edge-triggered
事件。

EV_TIMEOUT标志在这里没有作用。

在同一个fds上监听多个事件是可以的;但
它们要么都是边缘触发的，要么根本不是边缘触发的。

当事件变为活动状态时，事件循环将运行提供的
回调函数，带有三个参数。第一个将被提供
fd的价值。第二个将是触发事件的位域:
EV_READ, EV_WRITE或EV_SIGNAL。这里EV_TIMEOUT标志表示
表示超时，EV_ET表示边缘触发
事件发生。第三个事件将是callback_arg指针
你提供的。

  @param {event_base} base 根节点，事件要被添加到的事件管理器
  @param {evutill_socket_t} fd 要被添加到树的节点。即要监视的文件描述符或信号，或-1
  @param {short} events 需要监控的事件: 可设置为：
	  EV_READ, 0x01，文件描述符可读时 (有数据可读了)
	  EV_WRITE, 0x02，文件描述符可写时
	  EV_SIGNAL, 0x04，信号事件。信号事件用于处理操作系统发送给程序的信号，如 \`SIGINT\`、\`SIGTERM\` 等
	  EV_PERSIST, 0x08，表示事件是持久。设置后在回调函数执行后，事件将保持活跃状态并继续监听
	  EV_ET, 0x10，表示事件是边缘触发的。
  @param {event_callback_fn} 要调用的回调函数
  @param {void*} 给回调函数的参数
  @return 一个新分配的结构体事件，如果发生错误，必须稍后用event_free()或NULL释放它。
  @see event_free(), event_add(), event_del(), event_assign()
 */</span>
EVENT2_EXPORT_SYMBOL
<span class="token keyword">struct</span> <span class="token class-name">event</span> <span class="token operator">*</span><span class="token function">event_new</span><span class="token punctuation">(</span>
	<span class="token keyword">struct</span> <span class="token class-name">event_base</span> <span class="token operator">*</span>base<span class="token punctuation">,</span> 
	evutil_socket_t fd<span class="token punctuation">,</span> 
	<span class="token keyword">short</span> events<span class="token punctuation">,</span>
	event_callback_fn callback<span class="token punctuation">,</span> 
	<span class="token keyword">void</span> <span class="token operator">*</span>callback_arg<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * event的回调函数
 * @param {evutill_socket_t} fd 一个文件描述符或信号
 * @param {short} events EV_* flags 的参数，详见 event_new 注释
 * @param {void*} arg 用户提供的参数。
 * @see event_new()
 */</span>
<span class="token keyword">typedef</span> <span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">*</span>event_callback_fn<span class="token punctuation">)</span><span class="token punctuation">(</span>evutil_socket_t<span class="token punctuation">,</span> <span class="token keyword">short</span><span class="token punctuation">,</span> <span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>补充：里面提到的 <code>边缘触发</code> 是什么意思</p><p>边缘触发事件与水平触发事件相反。水平触发事件是默认的触发模式，这意味着只要条件满足（如有数据可读或可写），事件就会不断触发。然而，边缘触发事件仅在条件从不满足变为满足时触发。因此，在边缘触发模式下，当底层的文件描述符准备好进行读或写操作时，只会触发一次事件，即使仍有数据可读或有更多空间可写。</p></blockquote><h3 id="event-add-节点上树" tabindex="-1"><a class="header-anchor" href="#event-add-节点上树"><span>event_add（节点上树）</span></a></h3><p>节点上树</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">/**
 * @param ev，上树节点的地址
 * @param timeout, 限时时间，NULL则为永久监听
 */</span>
<span class="token keyword">int</span> <span class="token function">event_add</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">event</span><span class="token operator">*</span> ev<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">struct</span> <span class="token class-name">timeval</span><span class="token operator">*</span> timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="event-del-节点下树" tabindex="-1"><a class="header-anchor" href="#event-del-节点下树"><span>event_del（节点下树）</span></a></h3><p>节点下树</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">/**
 * @param ev，下树节点的地址
 */</span>
<span class="token keyword">int</span> <span class="token function">event_del</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">event</span><span class="token operator">*</span> ev<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="event-free-释放节点" tabindex="-1"><a class="header-anchor" href="#event-free-释放节点"><span>event_free（释放节点）</span></a></h3><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">event_free</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">event</span><span class="token operator">*</span> ev<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),l=[t];function d(c,p){return e(),s("div",null,l)}const o=n(i,[["render",d],["__file","09. 看源码.html.vue"]]),u=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/02.%20Theory/Computer/03.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F%20-%20%E4%B8%93%E9%A2%98%E6%88%96%E5%AD%90%E7%B3%BB%E7%BB%9F%E7%9A%84%E5%AD%97%E5%85%B8%E7%89%88/%E4%B8%8B%E5%B1%82%E7%9B%B8%E5%85%B3/Network/%E7%BD%91%E7%BB%9C%E5%BA%93/%E9%80%9A%E7%94%A8%E5%BA%93/Libevent/09.%20%E7%9C%8B%E6%BA%90%E7%A0%81.html","title":"","lang":"zh-CN","frontmatter":{"description":"常用的API方法原型 event_new（初始化上树节点） 初始化上树节点 补充：里面提到的 边缘触发 是什么意思 边缘触发事件与水平触发事件相反。水平触发事件是默认的触发模式，这意味着只要条件满足（如有数据可读或可写），事件就会不断触发。然而，边缘触发事件仅在条件从不满足变为满足时触发。因此，在边缘触发模式下，当底层的文件描述符准备好进行读或写操作时...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/02.%20Theory/Computer/03.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F%20-%20%E4%B8%93%E9%A2%98%E6%88%96%E5%AD%90%E7%B3%BB%E7%BB%9F%E7%9A%84%E5%AD%97%E5%85%B8%E7%89%88/%E4%B8%8B%E5%B1%82%E7%9B%B8%E5%85%B3/Network/%E7%BD%91%E7%BB%9C%E5%BA%93/%E9%80%9A%E7%94%A8%E5%BA%93/Libevent/09.%20%E7%9C%8B%E6%BA%90%E7%A0%81.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"常用的API方法原型 event_new（初始化上树节点） 初始化上树节点 补充：里面提到的 边缘触发 是什么意思 边缘触发事件与水平触发事件相反。水平触发事件是默认的触发模式，这意味着只要条件满足（如有数据可读或可写），事件就会不断触发。然而，边缘触发事件仅在条件从不满足变为满足时触发。因此，在边缘触发模式下，当底层的文件描述符准备好进行读或写操作时..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":2,"title":"常用的API方法原型","slug":"常用的api方法原型","link":"#常用的api方法原型","children":[{"level":3,"title":"event_new（初始化上树节点）","slug":"event-new-初始化上树节点","link":"#event-new-初始化上树节点","children":[]},{"level":3,"title":"event_add（节点上树）","slug":"event-add-节点上树","link":"#event-add-节点上树","children":[]},{"level":3,"title":"event_del（节点下树）","slug":"event-del-节点下树","link":"#event-del-节点下树","children":[]},{"level":3,"title":"event_free（释放节点）","slug":"event-free-释放节点","link":"#event-free-释放节点","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.07,"words":922},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/02. Theory/Computer/03. 计算机系统 - 专题或子系统的字典版/下层相关/Network/网络库/通用库/Libevent/09. 看源码.md","autoDesc":true}');export{o as comp,u as data};

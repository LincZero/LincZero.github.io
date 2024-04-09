import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as t,a as i}from"./app-IRYUHD7s.js";const l={},a=i(`<h1 id="qt" tabindex="-1"><a class="header-anchor" href="#qt"><span>Qt</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="网络与通信" tabindex="-1"><a class="header-anchor" href="#网络与通信"><span>网络与通信</span></a></h1><h2 id="udp编程模型" tabindex="-1"><a class="header-anchor" href="#udp编程模型"><span>UDP编程模型</span></a></h2><div class="language-sequence line-numbers-mode" data-ext="sequence" data-title="sequence"><pre class="language-sequence"><code>participant 客户端
participant 服务器

服务器-&gt;服务器:初始化套接字
服务器-&gt;服务器:绑定
服务器-&gt;服务器:接收，阻塞直到收到客户数据
客户端-&gt;客户端:初始化套接字
客户端-&gt;服务器:发送数据请求
服务器-&gt;服务器:处理请求
服务器-&gt;客户端:数据应答
服务器-&gt;服务器:继续等待接收
客户端-&gt;客户端:关闭
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tcp编程模型" tabindex="-1"><a class="header-anchor" href="#tcp编程模型"><span>TCP编程模型</span></a></h2><div class="language-sequence line-numbers-mode" data-ext="sequence" data-title="sequence"><pre class="language-sequence"><code>participant 客户端
participant 服务器

Note right of 服务器:初始化套接字
Note right of 服务器:绑定
Note right of 服务器:监听
Note right of 服务器:接收连接，阻塞直到客户连接到达
Note left of 客户端:初始化套接字
Note left of 客户端:连接
客户端-&gt;服务器:建立连接（三次握手）
服务器-&gt;服务器:处理请求
服务器-&gt;客户端:数据应答
客户端-&gt;服务器:文件结束通知
Note left of 客户端:关闭
Note right of 服务器:关闭

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),s=[a];function r(d,c){return n(),t("div",null,s)}const v=e(l,[["render",r],["__file","网络与通信.html.vue"]]),p=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Multi/QT%EF%BC%88Cpp%EF%BC%89/03.%20Qt%E5%85%B6%E4%BB%96%E7%B1%BB%EF%BC%88%E6%8C%89%E5%8A%9F%E8%83%BD%EF%BC%89/04.%20%E7%BD%91%E7%BB%9C%E7%9B%B8%E5%85%B3/%E7%BD%91%E7%BB%9C%E4%B8%8E%E9%80%9A%E4%BF%A1.html","title":"Qt","lang":"zh-CN","frontmatter":{"description":"Qt 目录 网络与通信 UDP编程模型 TCP编程模型","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Multi/QT%EF%BC%88Cpp%EF%BC%89/03.%20Qt%E5%85%B6%E4%BB%96%E7%B1%BB%EF%BC%88%E6%8C%89%E5%8A%9F%E8%83%BD%EF%BC%89/04.%20%E7%BD%91%E7%BB%9C%E7%9B%B8%E5%85%B3/%E7%BD%91%E7%BB%9C%E4%B8%8E%E9%80%9A%E4%BF%A1.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Qt"}],["meta",{"property":"og:description","content":"Qt 目录 网络与通信 UDP编程模型 TCP编程模型"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Qt\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"Qt","slug":"qt","link":"#qt","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"网络与通信","slug":"网络与通信","link":"#网络与通信","children":[{"level":2,"title":"UDP编程模型","slug":"udp编程模型","link":"#udp编程模型","children":[]},{"level":2,"title":"TCP编程模型","slug":"tcp编程模型","link":"#tcp编程模型","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.89,"words":268},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Platform/Multi/QT（Cpp）/03. Qt其他类（按功能）/04. 网络相关/网络与通信.md","autoDesc":true}');export{v as comp,p as data};

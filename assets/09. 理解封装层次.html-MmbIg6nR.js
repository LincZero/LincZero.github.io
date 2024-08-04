import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,a as e}from"./app-Bytj5cc3.js";const r={},o=e("h2",{id:"libevent的封装层次与原理浅析",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#libevent的封装层次与原理浅析"},[e("span",null,"libevent的封装层次与原理浅析")])],-1),l=e("h2",{id:"libevent的封装层次",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#libevent的封装层次"},[e("span",null,"libevent的封装层次")])],-1),a=e("div",{class:"ab-note drop-shadow"},[e("button",{style:{"background-color":"argb(255, 125, 125, 0.5)"},onclick:`
  console.log("mermaid chick");
  let script_el = document.querySelector('script[script-id="ab-mermaid-script"]');
  if (script_el) script_el.remove();
  script_el = document.createElement('script'); document.head.appendChild(script_el);
  script_el.type = "module";
  script_el.setAttribute("script-id", "ab-mermaid-script");
  script_el.textContent = \`
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
  mermaid.initialize({ startOnLoad: false });
  const el_mermaids = document.querySelectorAll('.mermaid');
  function getID(length=16){
    return Number(Math.random().toString().substr(3,length) + Date.now()).toString(36);
  }
  for(const el_mermaid of el_mermaids) {
    const { svg } = await mermaid.render("ab-mermaid-"+getID(), el_mermaid.textContent);
    el_mermaid.innerHTML = svg
  }
  \``},"ChickMe ReRender Mermaid"),e("pre",{class:"mermaid"},`graph LR

事件检测 --> 事件管理器 --> 构建对象:event_base_new
事件管理器 --> 构建对象:event_base_new_with_config
事件管理器 --> 销毁对象:event_base_free
事件管理器 --> 事件循环:event_base_loop
事件管理器 --> 事件循环退出: --> event_base_loopbreak
事件循环退出: --> event_base_loopexit
事件检测 --> 事件 --> 构建事件对象:event_new --> event_set
构建事件对象:event_new --> event_base_set
事件 --> 销毁事件对象:event_free
事件 --> 注册事件:event_add
事件 --> 销毁事件:event_del
事件 --> 修改事件:event_assign
`)],-1),E=e("p",null,"如果你不想自己管理I/O，希望由libevent库完成读写I/O的处理后自己仅需从缓冲区中读数据来完成事件的逻辑处理，那么可以从较高的封装层次上来使用libevent。它提供了关于网络I/O的连接事件、读写事件等等的事件操作接口，调用者需要做的仅仅是注册这些事件并且在事件处理函数被回调时从相应的buffer中读写业务数据。除了I/O事件，libevent还提供对定时事件和信号处理事件的管理，十分方便。",-1),s=[o,l,a,E];function c(d,m){return n(),i("div",null,s)}const B=t(r,[["render",c],["__file","09. 理解封装层次.html.vue"]]),v=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/02.%20Theory/Computer/03.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F%20-%20%E4%B8%93%E9%A2%98%E6%88%96%E5%AD%90%E7%B3%BB%E7%BB%9F%E7%9A%84%E5%AD%97%E5%85%B8%E7%89%88/%E4%B8%8B%E5%B1%82%E7%9B%B8%E5%85%B3/Network/%E7%BD%91%E7%BB%9C%E5%BA%93/%E9%80%9A%E7%94%A8%E5%BA%93/Libevent/09.%20%E7%90%86%E8%A7%A3%E5%B0%81%E8%A3%85%E5%B1%82%E6%AC%A1.html","title":"","lang":"zh-CN","frontmatter":{"description":"libevent的封装层次与原理浅析 libevent的封装层次 ChickMe ReRender Mermaid如果你不想自己管理I/O，希望由libevent库完成读写I/O的处理后自己仅需从缓冲区中读数据来完成事件的逻辑处理，那么可以从较高的封装层次上来使用libevent。它提供了关于网络I/O的连接事件、读写事件等等的事件操作接口，调用者需要...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/02.%20Theory/Computer/03.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F%20-%20%E4%B8%93%E9%A2%98%E6%88%96%E5%AD%90%E7%B3%BB%E7%BB%9F%E7%9A%84%E5%AD%97%E5%85%B8%E7%89%88/%E4%B8%8B%E5%B1%82%E7%9B%B8%E5%85%B3/Network/%E7%BD%91%E7%BB%9C%E5%BA%93/%E9%80%9A%E7%94%A8%E5%BA%93/Libevent/09.%20%E7%90%86%E8%A7%A3%E5%B0%81%E8%A3%85%E5%B1%82%E6%AC%A1.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"libevent的封装层次与原理浅析 libevent的封装层次 ChickMe ReRender Mermaid如果你不想自己管理I/O，希望由libevent库完成读写I/O的处理后自己仅需从缓冲区中读数据来完成事件的逻辑处理，那么可以从较高的封装层次上来使用libevent。它提供了关于网络I/O的连接事件、读写事件等等的事件操作接口，调用者需要..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":2,"title":"libevent的封装层次与原理浅析","slug":"libevent的封装层次与原理浅析","link":"#libevent的封装层次与原理浅析","children":[]},{"level":2,"title":"libevent的封装层次","slug":"libevent的封装层次","link":"#libevent的封装层次","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.82,"words":247},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/02. Theory/Computer/03. 计算机系统 - 专题或子系统的字典版/下层相关/Network/网络库/通用库/Libevent/09. 理解封装层次.md","autoDesc":true}');export{B as comp,v as data};

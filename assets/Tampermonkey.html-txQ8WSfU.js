import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,a}from"./app-Bh75ISgc.js";const t={},i=a(`<h1 id="tampermonkey" tabindex="-1"><a class="header-anchor" href="#tampermonkey"><span>Tampermonkey</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="tampermonkey-1" tabindex="-1"><a class="header-anchor" href="#tampermonkey-1"><span>Tampermonkey</span></a></h1><h2 id="优秀脚本推荐" tabindex="-1"><a class="header-anchor" href="#优秀脚本推荐"><span>优秀脚本推荐</span></a></h2><h1 id="插件开发" tabindex="-1"><a class="header-anchor" href="#插件开发"><span>插件开发</span></a></h1><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料"><span>资料</span></a></h2><p>参考：</p><ul><li>书签用法</li><li>利用tampermonkey向页面注入自定义Javascript，https://blog.csdn.net/xue251248603/article/details/76419309</li><li>使用Tampermonkey动态修改网页的js，https://blog.csdn.net/sndayYU/article/details/98752373</li><li>https://blog.csdn.net/iteye_15008/article/details/82580393</li><li>https://www.jianshu.com/p/1bf123b3c8bf</li></ul><h2 id="修改js" tabindex="-1"><a class="header-anchor" href="#修改js"><span>修改js</span></a></h2><h3 id="一些失败尝试" tabindex="-1"><a class="header-anchor" href="#一些失败尝试"><span>一些失败尝试</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// ==UserScript==</span>
<span class="token comment">// @name         Allegro部分限制解除</span>
<span class="token comment">// @namespace    https://demo.allegro-packets.com/</span>
<span class="token comment">// @version      0.1</span>
<span class="token comment">// @description  Allegro部分限制解除</span>
<span class="token comment">// @author       LincZero</span>
<span class="token comment">// @match        *://demo.allegro-packets.com/*</span>
<span class="token comment">// @icon         https://www.google.com/s2/favicons?sz=64&amp;domain=allegro-packets.com</span>
<span class="token comment">// @grant        none</span>
<span class="token comment">// ==/UserScript==</span>

<span class="token comment">// 拦截目标http脚本并修改（try3 失败，不是XMLHttpRequest请求，只是一个 &lt;script defer=&quot;defer&quot; src=&quot;main.ed1868.js&quot;&gt;&lt;/script&gt;）</span>
<span class="token comment">/*document.documentElement.appendChild(Object.assign(document.createElement(&#39;script&#39;), {
  textContent: \`(\${(() =&gt; {
    const originalOpen = XMLHttpRequest.prototype.open;

    XMLHttpRequest.prototype.open = function () {
      if (arguments[1].includes(&#39;http://localhost:8050/main.ed1868.js&#39;)) {
        arguments[1] = &#39;https://demo.allegro-packets.com/main.ed1868.js&#39;;
        console.log(&quot;替换成功&quot;);
      }
      return originalOpen.apply(this, arguments);
    };
  }).toString()})()\`,
}));*/</span>

<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 原型修改，让dbCapable()的返回值恒为true（try2 失败，被webpack打包后闭包了）</span>
    <span class="token comment">/*DatabaseModeSettingsCtrl.prototype.dbCapable = function() {
      return true;
   };*/</span>

    <span class="token doc-comment comment">/**
     * 移除原来的js然后添加一个新的js（try4）
     * 最接近成功的一次，然后前端显示：
     * The Allegro Network Multimeter interface relies on a HTML 5 capable browser with scripts enabled.
     * Your browser is either still loading the additional files, or scripts have been disabled.
     * If this message does not disappear after some short amount of time (depending on the speed of your network connection), check if scripts are enabled.
     */</span>
    <span class="token comment">/*window.addEventListener(&#39;beforescriptexecute&#39;, function(e) {
        if (e.target.src.includes(&#39;main.ed1868.js&#39;)) {
            // Prevent the original script from loading
            e.preventDefault();
            e.stopPropagation();
            e.target.remove(); // Remove the original script
            var new_script = document.createElement(&#39;script&#39;); // Create a new script element
            new_script.src = &#39;http://localhost:8050/main.ed1868.js&#39;; // Point the source of the script to your desired location
            document.head.appendChild(new_script); // Append the new script to the head
            console.log(&quot;Script replaced successfully&quot;);
        }
    }, true);*/</span>

    <span class="token comment">// try5。使用服务工作者（Service Workers）拦截和修改网络请求</span>
    <span class="token comment">/*if (&#39;serviceWorker&#39; in navigator) {
        navigator.serviceWorker.register(&#39;sw.js&#39;).then(function(registration) {
            console.log(&#39;Service Worker registered with scope:&#39;, registration.scope);
        }).catch(function(error) {
            console.log(&#39;Service Worker registration failed:&#39;, error);
        });

        navigator.serviceWorker.ready.then(function(registration) {
            fetch(&#39;main.ed1868.js&#39;).then(function(response) {
                if (!response.ok) {
                    throw new Error(&quot;HTTP error, status = &quot; + response.status);
                }
                return response.text();
            }).then(function(text) {
                let contentToAppend = \`http://localhost:8050/main.ed1868.js\`;
                text = text.replace(&quot;https://demo.allegro-packets.com/main.ed1868.js&quot;, contentToAppend);
                let blob = new Blob([text], {type: &#39;application/javascript&#39;});
                let url = URL.createObjectURL(blob);
                registration.unregister().then(function() {
                    return navigator.serviceWorker.register(url);
                }).catch(function(error) {
                    console.log(&#39;Service Worker registration failed:&#39;, error);
                });
            }).catch(function(error) {
                console.log(&#39;Fetch Error:&#39;, error);
            });
        });
    } else {
        console.log(&quot;不支持serviceWorker&quot;);
    }*/</span>

    <span class="token comment">// try5.2 （失败，报错：Uncaught (in promise) DOMException: ServiceWorkerContainer.register: Scope URL is not same-origin with Client）</span>
    <span class="token comment">// 应用程式外挂无法注入非同源的 Service Worker，这是 Service Worker 的安全限制。</span>
    <span class="token comment">/*navigator.serviceWorker.getRegistration().then(function(registration) {
        if (!!registration) {
            console.log(&quot;Unregistering a service worker.&quot;);
            registration.unregister();
        }
        navigator.serviceWorker.register(&quot;http://localhost:8050/sw.js&quot;).then(function() {
            console.log(&quot;Service worker has been registered.&quot;);
        });
    });*/</span>

    <span class="token comment">// 显示隐藏字段</span>
    document<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;style&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">textContent</span><span class="token operator">:</span> <span class="token string">&#39;.metismenu li.ng-hide {display: block !important;}&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 设置db-mode为true（try1 失败）</span>
    <span class="token comment">/*var targetElement = document.getElementById(&#39;db-mode&#39;);
    if (targetElement) {
        // 设置 ng-if 值为 true
        targetElement.setAttribute(&#39;ng-if&#39;, &#39;true&#39;);
    }*/</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="成功" tabindex="-1"><a class="header-anchor" href="#成功"><span>成功</span></a></h3><p>成功，但是需要额外操作：</p><ol><li><p>本地提供的http服务，提供修改过的js</p></li><li><p>如果是本地替换或非https网站不需要这步，否则要手动将浏览器解除限制：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>使用脚本后浏览器可能报错：已阻止加载混合活动内容“http://192.168.1.208:8050/main.ed1868.js”。
那么在火狐浏览器地址栏输入：“about:config”，然后找到并更改“security.mixed_content.block_active_content”的设置为Flase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>脚本内容：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// ==UserScript==</span>
<span class="token comment">// @name         Allegro部分限制解除2</span>
<span class="token comment">// @namespace    https://demo.allegro-packets.com/</span>
<span class="token comment">// @version      0.1</span>
<span class="token comment">// @description  Allegro部分限制解除</span>
<span class="token comment">// @author       LincZero</span>
<span class="token comment">// @match        *://demo.allegro-packets.com/*</span>
<span class="token comment">// @resource remoteJS http://localhost:8050/main.ed1868.js</span>
<span class="token comment">// @run-at       document-start</span>
<span class="token comment">// @icon         https://www.google.com/s2/favicons?sz=64&amp;domain=allegro-packets.com</span>
<span class="token comment">// @grant        none</span>
<span class="token comment">// ==/UserScript==</span>

<span class="token keyword">var</span> targScript <span class="token operator">=</span> <span class="token string">&#39;https://demo.allegro-packets.com/main.ed1868.js&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> newScript <span class="token operator">=</span> <span class="token string">&#39;http://localhost:8050/main.ed1868.js&#39;</span><span class="token punctuation">;</span>

window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;beforescriptexecute&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> src <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>src<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>src<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>targScript<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">loadScript</span><span class="token punctuation">(</span>newScript<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">loadScript</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> script <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;script&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    script<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&#39;text/javascript&#39;</span><span class="token punctuation">;</span>
    script<span class="token punctuation">.</span>src <span class="token operator">=</span> url<span class="token punctuation">;</span>
    document<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>script<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 显示隐藏字段</span>
    document<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;style&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">textContent</span><span class="token operator">:</span> <span class="token string">&#39;.metismenu li.ng-hide {display: block !important;}&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配套的启动方式" tabindex="-1"><a class="header-anchor" href="#配套的启动方式"><span>配套的启动方式</span></a></h3><p>下面这个失败，因为返回js的方式方式不对</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>python <span class="token parameter variable">-m</span> http.server <span class="token number">8050</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>后来使用了这个：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> http<span class="token punctuation">.</span>server
<span class="token keyword">import</span> socketserver

PORT <span class="token operator">=</span> <span class="token number">8050</span>

Handler <span class="token operator">=</span> http<span class="token punctuation">.</span>server<span class="token punctuation">.</span>SimpleHTTPRequestHandler
Handler<span class="token punctuation">.</span>extensions_map<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string">&#39;.js&#39;</span><span class="token punctuation">:</span>  <span class="token string">&#39;application/javascript&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">with</span> socketserver<span class="token punctuation">.</span>TCPServer<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> PORT<span class="token punctuation">)</span><span class="token punctuation">,</span> Handler<span class="token punctuation">)</span> <span class="token keyword">as</span> httpd<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;serving at port&quot;</span><span class="token punctuation">,</span> PORT<span class="token punctuation">)</span>
    httpd<span class="token punctuation">.</span>serve_forever<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本地替换能成功，但如果给其他人用的话，这里没有开http。需要对方手动关闭浏览器的限制</p>`,22),c=[i];function p(l,o){return s(),e("div",null,c)}const d=n(t,[["render",p],["__file","Tampermonkey.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Type/Script/Plugin_%E6%B5%8F%E8%A7%88%E5%99%A8/Tampermonkey.html","title":"Tampermonkey","lang":"zh-CN","frontmatter":{"description":"Tampermonkey 目录 Tampermonkey 优秀脚本推荐 插件开发 资料 参考： 书签用法 利用tampermonkey向页面注入自定义Javascript，https://blog.csdn.net/xue251248603/article/details/76419309 使用Tampermonkey动态修改网页的js，https:/...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Type/Script/Plugin_%E6%B5%8F%E8%A7%88%E5%99%A8/Tampermonkey.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Tampermonkey"}],["meta",{"property":"og:description","content":"Tampermonkey 目录 Tampermonkey 优秀脚本推荐 插件开发 资料 参考： 书签用法 利用tampermonkey向页面注入自定义Javascript，https://blog.csdn.net/xue251248603/article/details/76419309 使用Tampermonkey动态修改网页的js，https:/..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Tampermonkey\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"Tampermonkey","slug":"tampermonkey","link":"#tampermonkey","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"Tampermonkey","slug":"tampermonkey-1","link":"#tampermonkey-1","children":[{"level":2,"title":"优秀脚本推荐","slug":"优秀脚本推荐","link":"#优秀脚本推荐","children":[]}]},{"level":1,"title":"插件开发","slug":"插件开发","link":"#插件开发","children":[{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]},{"level":2,"title":"修改js","slug":"修改js","link":"#修改js","children":[{"level":3,"title":"一些失败尝试","slug":"一些失败尝试","link":"#一些失败尝试","children":[]},{"level":3,"title":"成功","slug":"成功","link":"#成功","children":[]},{"level":3,"title":"配套的启动方式","slug":"配套的启动方式","link":"#配套的启动方式","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.1,"words":930},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Type/Script/Plugin_浏览器/Tampermonkey.md","autoDesc":true}');export{d as comp,m as data};

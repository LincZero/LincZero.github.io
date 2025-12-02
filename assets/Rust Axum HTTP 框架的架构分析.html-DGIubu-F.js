import{_ as p,c as t,b as e,a as i,e as n,d as l,r as d,o as r}from"./app-U6aqFarS.js";const c={},u={id:"方法2-使用-axumfrom-fn",tabindex:"-1"},v={id:"方法3-使用-axumfrom-extractor",tabindex:"-1"};function o(m,s){const a=d("VPIcon");return r(),t("div",null,[s[8]||(s[8]=e('<p><img src="https://pica.zhimg.com/70/v2-638631f135d6fd6cce8c0760e0033153_1440w.avis?source=172ae18b&amp;biz_tag=Post" alt="Rust: Axum HTTP 框架的架构分析" loading="lazy"></p><p>Rust: Axum HTTP 框架的架构分析</p><p>目录</p><p>收起</p><p>Axum 整体架构图</p><p>Axum 基准测试</p><p>Handler 抽象设计</p><p>Axum 的handler 正是如此的特性</p><p>参数约束</p><p>Axum extract 中 FromRequest trait</p><p>如果我们需要从 handler 通过 Query 中提取数据， 那么我们该如何处理 handler？？？</p><p>Axum 的 Response 的实现和约束</p><p>Request 的所有权的问题</p><p>支持 Async Fn</p><p>middleware(中间件)的设计 --- Tower Service</p><p>那么如何实现一个自定义的中间件呢？？</p><p>方法 1. 使用实现 Tower Service trait， 参考下面案例(实现 jwt 验证的 auth 中间件)</p>',17)),i("p",null,[s[0]||(s[0]=n("方法2： 使用: axum",-1)),l(a,{icon:"middleware"}),s[1]||(s[1]=n("from_fn",-1))]),i("p",null,[s[2]||(s[2]=n("方法3： 使用: axum",-1)),l(a,{icon:"middleware"}),s[3]||(s[3]=n("from_extractor",-1))]),s[9]||(s[9]=e(`<p>方法4： 使用 tower’s combinators: 不展开详解， 如果需要， 可以看看官方文档</p><p>总结</p><p>Response 响应</p><p>自定义 Response Body</p><p>状态共享</p><p>路由抽象</p><p>路由查找： axum 使用了 matchit = &quot;0.7&quot;</p><p>axum 中关系如下</p><p>路由组合</p><p>Axum Server 的创建和使用</p><blockquote><p>以下内容来自腾讯工程师 island</p></blockquote><p>导语：基于 <a href="https://zhida.zhihu.com/search?content_id=246248543&amp;content_type=Article&amp;match_order=1&amp;q=Rust&amp;zhida_source=entity" target="_blank" rel="noopener noreferrer">Rust</a> <a href="https://zhida.zhihu.com/search?content_id=246248543&amp;content_type=Article&amp;match_order=1&amp;q=Axum&amp;zhida_source=entity" target="_blank" rel="noopener noreferrer">Axum</a> HTTP 服务框架详解和案例， 看完该文章，我相信您会对 Axum 或者是其他的Rust http server 框架有更深的理解。</p><p>axum 是 <a href="https://zhida.zhihu.com/search?content_id=246248543&amp;content_type=Article&amp;match_order=1&amp;q=hyper&amp;zhida_source=entity" target="_blank" rel="noopener noreferrer">hyper</a> 之上相对较薄的一层，增加的开销非常小。所以axum的性能与hyper相当。可以在 github 仓库中找到对应的基准测试；</p><h2 id="axum-整体架构图" tabindex="-1">Axum 整体架构图</h2><p><img src="https://pic2.zhimg.com/v2-e8003960ae2cc7c8d9db03c35a664117_1440w.jpg" alt="" loading="lazy"></p><p>图上可看出请求的流向（图来自互联网）</p><p>关键信息： hyper, axum(Server, Router, Matchit, Endpoint, Route, Middleware, Handler, Request, Response);</p><h2 id="axum-基准测试" tabindex="-1">Axum 基准测试</h2><p><img src="https://picx.zhimg.com/v2-2e1adfcf8d0c9dbb39d5d86c6fae32b5_1440w.jpg" alt="" loading="lazy"></p><h2 id="handler-抽象设计" tabindex="-1">Handler 抽象设计</h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>// 对于简单的路由设计 axum 是这样的：</span></span>
<span class="line"><span>use axum::{</span></span>
<span class="line"><span>    routing::get,</span></span>
<span class="line"><span>    Router,</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let router = Router::new();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// handler 没有参数</span></span>
<span class="line"><span>let router = router</span></span>
<span class="line"><span>    .route(&quot;/&quot;, get(async || {&quot;hello world&quot;}))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们设计最简单的路由是自行解析 Http 结构中的数据， cookie，header， body， query 等( hyper decode http协议)， 如何将解析出来的 http.request 给 handler， 由 handler 函数放回一个 Response</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>// 类似这样的设计</span></span>
<span class="line"><span>add_route(handler: H, ...)</span></span>
<span class="line"><span>    where H: Fn(req: http::Request) -&gt; http::Response { ... }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就存在很多设计的缺陷： 比如：用户需要自己来解析 http 协议从其中返序列化出对应的数据，还需要组装 http.Response, 如果我们可以直接从 handler 的参数中获取到对应已经序列化好的参数，则非常的方便</p><h3 id="axum-的handler-正是如此的特性" tabindex="-1">Axum 的handler 正是如此的特性</h3><blockquote><p>为了解决上述的问题： handler 需要支持如下特性</p></blockquote><ol><li>约束每一个参数都可以从 http request 中提取到数据</li><li>约束函数的返回值都可以转换为 HTTP Response</li><li>支持可变的参数</li><li>支持 Async Fn</li></ol><h3 id="参数约束" tabindex="-1">参数约束</h3><blockquote><p>我们期望是可以在通过编译检测确保这些参数可以从 Request 中提取到， 那么我们定义 Trait</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>// 这个类似我们的设计</span></span>
<span class="line"><span>pub trait FromRequest {</span></span>
<span class="line"><span>  // 我们需要一个错误的关联类型</span></span>
<span class="line"><span>  type Error</span></span>
<span class="line"><span>  // 接受一个 Request， 如果处理不成功， 将返回错误</span></span>
<span class="line"><span>  fn from_request(req: &amp;http::Request) -&gt; Result&lt;Self, Self::Error&gt;;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="axum-extract-中-fromrequest-trait" tabindex="-1">Axum extract 中 FromRequest trait</h3><blockquote><p>可以从请求创建的类型。 实现 FromRequest 的提取器可以(consume)请求正文，因此只能为处理程序运行一次。<br><code>注意</code> ： 如果您的 <code>提取器不需要(consume)请求正文</code> ，那么您应该 <code>实现 [FromRequestParts](https://zhida.zhihu.com/search?content_id=246248543&amp;content_type=Article&amp;match_order=1&amp;q=FromRequestParts&amp;zhida_source=entity) 而不是 FromRequest</code> 。 有关提取器的更多一般文档，请参阅 axum::extract。</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>pub trait FromRequest&lt;S, M = ViaRequest&gt;: Sized {</span></span>
<span class="line"><span>    // 如果提取器失败，它将使用这种“拒绝”类型。拒绝是一种可以转换为响应的错误。</span></span>
<span class="line"><span>    type Rejection: IntoResponse;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Required method</span></span>
<span class="line"><span>    fn from_request&lt;&#39;life0, &#39;async_trait&gt;(</span></span>
<span class="line"><span>        req: Request&lt;Body&gt;,</span></span>
<span class="line"><span>        state: &amp;&#39;life0 S</span></span>
<span class="line"><span>    ) -&gt; Pin&lt;Box&lt;dyn Future&lt;Output = Result&lt;Self, Self::Rejection&gt;&gt; + Send + &#39;async_trait&gt;&gt;</span></span>
<span class="line"><span>       where &#39;life0: &#39;async_trait,</span></span>
<span class="line"><span>             Self: &#39;async_trait;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PS： 从 axum 的 FromRequest 的源码中可以看出： 大致实现的和我们期望的实现类似</p><h3 id="如果我们需要从-handler-通过-query-中提取数据-那么我们该如何处理-handler" tabindex="-1">如果我们需要从 handler 通过 Query 中提取数据， 那么我们该如何处理 handler？？？</h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>// user code</span></span>
<span class="line"><span>// user code</span></span>
<span class="line"><span>#[derive(Deserilize, Debug)]</span></span>
<span class="line"><span>struct Filter {</span></span>
<span class="line"><span>    keyword: String,</span></span>
<span class="line"><span>    count: u32,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 这里我们通过 Query 这个提取器； 来提取出数据</span></span>
<span class="line"><span>async fn search(Query(f): Query&lt;Filter&gt;) -&gt; (StatusCode, String) { ... }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注：提取器： 我们将可以从 Request 中提取出对应的类型的数据的结构体， 成为 <code>提取器</code></p></blockquote><p><strong>看看官方实现 Form 提取器 和 Query 提取器</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#[cfg_attr(docsrs, doc(cfg(feature = &quot;query&quot;)))]</span></span>
<span class="line"><span>#[derive(Debug, Clone, Copy, Default)]</span></span>
<span class="line"><span>pub struct Query&lt;T&gt;(pub T);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#[async_trait]</span></span>
<span class="line"><span>impl&lt;T, S&gt; FromRequestParts&lt;S&gt; for Query&lt;T&gt;</span></span>
<span class="line"><span>where</span></span>
<span class="line"><span>    T: DeserializeOwned,</span></span>
<span class="line"><span>    S: Send + Sync,</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    type Rejection = QueryRejection;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /////////// \\\`这里是引用\\\`</span></span>
<span class="line"><span>    async fn from_request_parts(parts: &amp;mut Parts, _state: &amp;S) -&gt; Result&lt;Self, Self::Rejection&gt; {</span></span>
<span class="line"><span>        Self::try_from_uri(&amp;parts.uri)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#[cfg_attr(docsrs, doc(cfg(feature = &quot;form&quot;)))]</span></span>
<span class="line"><span>#[derive(Debug, Clone, Copy, Default)]</span></span>
<span class="line"><span>#[must_use]</span></span>
<span class="line"><span>pub struct Form&lt;T&gt;(pub T);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 这里出现了 泛型 S</span></span>
<span class="line"><span>#[async_trait]</span></span>
<span class="line"><span>impl&lt;T, S&gt; FromRequest&lt;S&gt; for Form&lt;T&gt;</span></span>
<span class="line"><span>where</span></span>
<span class="line"><span>    T: DeserializeOwned,</span></span>
<span class="line"><span>    S: Send + Sync,</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    type Rejection = FormRejection;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 直接拿到 Request 的所有权</span></span>
<span class="line"><span>    async fn from_request(req: Request, _state: &amp;S) -&gt; Result&lt;Self, Self::Rejection&gt; {</span></span>
<span class="line"><span>        let is_get_or_head =</span></span>
<span class="line"><span>            req.method() == http::Method::GET || req.method() == http::Method::HEAD;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        match req.extract().await {</span></span>
<span class="line"><span>            Ok(RawForm(bytes)) =&gt; {</span></span>
<span class="line"><span>                let value =</span></span>
<span class="line"><span>                    serde_urlencoded::from_bytes(&amp;bytes).map_err(|err| -&gt; FormRejection {</span></span>
<span class="line"><span>                        if is_get_or_head {</span></span>
<span class="line"><span>                            FailedToDeserializeForm::from_err(err).into()</span></span>
<span class="line"><span>                        } else {</span></span>
<span class="line"><span>                            FailedToDeserializeFormBody::from_err(err).into()</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    })?;</span></span>
<span class="line"><span>                Ok(Form(value))</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            Err(RawFormRejection::BytesRejection(r)) =&gt; Err(FormRejection::BytesRejection(r)),</span></span>
<span class="line"><span>            Err(RawFormRejection::InvalidFormContentType(r)) =&gt; {</span></span>
<span class="line"><span>                Err(FormRejection::InvalidFormContentType(r))</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>从上面两个提取器中可以看到 Form 和 Query 提取器的实现存在区别</p></blockquote><ul><li>Form 提取器实现了 FromRequest</li><li>Query 提取器实现了 FromRequestParts</li></ul><p><strong>FromRequest vs FromRequestParts 两者的区别及提取器(Axum Extract)</strong></p><blockquote><p>从这里看我们不得不讲解一下 Axum Extract 提取器的设计： <code>从请求中提取数据的类型和特征。</code></p></blockquote><ol><li>从上面我们知道 FormRequest 会 (consume) Request(请求正文)</li></ol><ul><li>从上面可以看到 FormRequest 的 from_request 的参数是 Request； 全部 Request 正文</li></ul><ol><li>如果您的提取器不需要访问请求正文(Request)，请实现 FromRequestParts：</li></ol><ul><li>FromRequestParts 中的 from_request_parts 函数中只是 <code>Parts</code></li></ul><blockquote><p>官方解释说： 由于 FromRequestParts 实现的提取器不需要访问 Request 正文， 那么该提取器在 handler 参数中将可以以任意的顺序运行, 从下面的例子可以看出</p></blockquote><blockquote><p>Json 提取器是实现了 FromRequest， 而 State 是实现了 FromRequestParts， State 的提取器在 Json 的前面， Json 在参数的后面，否则会出现一个错误(从错误的信息中也可以看出区别)<br> 同时提取器可以访问其他的提取器， 因为 <code>提取器也是支持可变参数</code></p></blockquote><p><code>注意： 自定义提取器不能两个同时实现 FromRequest vs FromRequestParts</code></p><blockquote><p>首先 Handler 接受的参数是 Extract(提取器)，而每一个提取器是一种实现 FromRequest 或 FromRequestParts 的类型。</p></blockquote><p>那么 提取器解决了我们从 hyper http 协议 Request 正文中解析和反序列化出我们所需要的数据，但是我们还是需要手动取组装 Response 进行返回</p><h3 id="axum-的-response-的实现和约束" tabindex="-1">Axum 的 Response 的实现和约束</h3><blockquote><p>在 Axum 中有一个很重要的 trait 就是 <code>IntoResponse</code>: 实现了该 trait， 则可以将其转换为对应的 Response</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>// 该 trait 中只有一个方法就是 into_response</span></span>
<span class="line"><span>pub trait IntoResponse {</span></span>
<span class="line"><span>    fn into_response(self) -&gt; http::Response;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 其中 axum 内部的为我们实现了很多类型的转换： str，String， tuple 等</span></span>
<span class="line"><span>impl IntoResponse for &amp;&#39;static str {...}</span></span>
<span class="line"><span>impl IntoResponse for String {...}</span></span>
<span class="line"><span>impl IntoResponse for (StatusCode, String) {...}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可变长参数： 我们知道 Extract 和 Handler 都是支持多个参数(可变长不固定的参数个数)</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>// from axum 使用了 macro 宏来定义</span></span>
<span class="line"><span>macro_rules! all_the_tuples {</span></span>
<span class="line"><span>    ($name:ident) =&gt; {</span></span>
<span class="line"><span>        $name!([], T1);</span></span>
<span class="line"><span>        $name!([T1], T2);</span></span>
<span class="line"><span>        $name!([T1, T2], T3);</span></span>
<span class="line"><span>        $name!([T1, T2, T3], T4);</span></span>
<span class="line"><span>        $name!([T1, T2, T3, T4], T5);</span></span>
<span class="line"><span>        $name!([T1, T2, T3, T4, T5], T6);</span></span>
<span class="line"><span>        $name!([T1, T2, T3, T4, T5, T6], T7);</span></span>
<span class="line"><span>        $name!([T1, T2, T3, T4, T5, T6, T7], T8);</span></span>
<span class="line"><span>        $name!([T1, T2, T3, T4, T5, T6, T7, T8], T9);</span></span>
<span class="line"><span>        $name!([T1, T2, T3, T4, T5, T6, T7, T8, T9], T10);</span></span>
<span class="line"><span>        $name!([T1, T2, T3, T4, T5, T6, T7, T8, T9, T10], T11);</span></span>
<span class="line"><span>        $name!([T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11], T12);</span></span>
<span class="line"><span>        $name!([T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12], T13);</span></span>
<span class="line"><span>        $name!([T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13], T14);</span></span>
<span class="line"><span>        $name!([T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14], T15);</span></span>
<span class="line"><span>        $name!([T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15], T16);</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 大概宏展开之后就是下面这样</span></span>
<span class="line"><span>pub trait Handler {</span></span>
<span class="line"><span>    fn call(&amp;self, req: http::Request) -&gt; http::Response;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// illustrate for macro expand</span></span>
<span class="line"><span>impl&lt;F, O&gt; Handler for F</span></span>
<span class="line"><span>    where F: Fn() -&gt; O, O: IntoResponse { ... }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// illustrate for macro expand result</span></span>
<span class="line"><span>impl&lt;F, O, T1&gt; Handler for F</span></span>
<span class="line"><span>    where F: Fn(T1) -&gt; O, O: IntoResponse, T1: FromRequest {</span></span>
<span class="line"><span>    fn call(&amp;self, req: http::Request) -&gt; http::Response {</span></span>
<span class="line"><span>        let param1 = match T1::from_request(&amp;req) {</span></span>
<span class="line"><span>            Ok(p) =&gt; p,</span></span>
<span class="line"><span>            Err(e) =&gt; return e.into(),</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>        let resp = (self)(param1).into_response();</span></span>
<span class="line"><span>        resp</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// illustrate for macro expand： 多个参数的情况</span></span>
<span class="line"><span>impl&lt;F, O, T1, T2&gt; Handler for F</span></span>
<span class="line"><span>    where F: Fn(T1, T2) -&gt; O, O: IntoResponse, T1: FromRequest, T1: FromRequest { ... }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// other impl blocks ...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="request-的所有权的问题" tabindex="-1">Request 的所有权的问题</h3><blockquote><p>所有的参数提取器中只能拿到 Request 的只读引用，因为我们可以需要提取多个参数， 如果只有一个参数， 那么可以传入所有权， 如果有多个， 那么这是最后一个给所有权</p></blockquote><ul><li>FromRequestParts 可以从 HTTP Request Head 中提取内容 <code>（传递引用）</code></li><li>FromRequest 可以从 HTTP Request Head 和 Body 中提取 <code>（传递整个 Request 的所有权）</code> 。FromRequest 对于需要消费 Body 的提取器来说非常友好，但只会应用于最后一个提取器</li></ul><h3 id="支持-async-fn" tabindex="-1">支持 Async Fn</h3><blockquote><p>往往 handler 都是异步函数(数据库读写， rpc 调用等)，那么 handler 必须是一个 Async Fn(这里不展开讲解 Rust 的异步编程相关的知识)， 那么我们的 Handler 必须取实现 <code>Future</code>,</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>// 之前： handler</span></span>
<span class="line"><span>fn example() -&gt; String { ... }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 之后： 我们的 handler 必须是返回一个 Future</span></span>
<span class="line"><span>fn example() -&gt; AnonymousFut { ... }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 这两个 Future 得到的数据是 Response</span></span>
<span class="line"><span>struct AnonymousFut { ... }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 这里就实现了 Future</span></span>
<span class="line"><span>impl Future for AnonymousFut {</span></span>
<span class="line"><span>    // 这里是 Response 的数据</span></span>
<span class="line"><span>    type Output = String;</span></span>
<span class="line"><span>    fn poll(self: Pin&lt;&amp;mut Self&gt;, cx: &amp;mut Context&lt;&#39;_&gt;) -&gt; Poll&lt;Self::Output&gt; { ... }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了实现上诉的 Handler， 那么我们需要做一些改动</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>pub trait Handler {</span></span>
<span class="line"><span>    fn call(&amp;self, req: http::Request) -&gt; BoxFuture&lt;&#39;static, http::Response&gt;;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>BoxFuture 由 <code>[futures](https://zhida.zhihu.com/search?content_id=246248543&amp;content_type=Article&amp;match_order=1&amp;q=futures&amp;zhida_source=entity)</code> 包提供， 可以使用 <code>futures_util::future::BoxFuture</code>; 包提供，可以提供了 Future 关联类型的语法糖， 从而去掉关联类型的定义， 在内置的 Service 中间件中可以使用</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>pub type BoxFuture&lt;&#39;a, T&gt; = Pin&lt;Box&lt;dyn Future&lt;Output = T&gt; + Send + &#39;a&gt;&gt;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>从而上面的 Handler 的宏展开的例子就是如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>// 我们都知道 宏 会在编译器时进行代码展开， 这里定义一个参数， F 实现 handler trait</span></span>
<span class="line"><span>// O 是 Response， T1 参数是 Request</span></span>
<span class="line"><span>impl&lt;F, O, T1&gt; Handler for F</span></span>
<span class="line"><span>    where F: Fn(T1) -&gt; Fut, Fut: Future&lt;Output = O&gt;,</span></span>
<span class="line"><span>          O: IntoResponse, T1: FromRequest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    fn call(&amp;self, req: http::Request) -&gt; BoxFuture&lt;&#39;static, http::Response&gt; {</span></span>
<span class="line"><span>        Box::pin(async move {</span></span>
<span class="line"><span>            let param1 = match T1::from_request(&amp;req) {</span></span>
<span class="line"><span>                Ok(p) =&gt; p,</span></span>
<span class="line"><span>                Err(e) =&gt; return e.into(),</span></span>
<span class="line"><span>            };</span></span>
<span class="line"><span>            let resp = (self)(param1).into_response();</span></span>
<span class="line"><span>            resp</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结： 如此设计之后， 用户可以在 Handler 中仅关注业务的实现，从而不需要关注一些公共的部分(在函数的参数和返回值上使用一些提取器和生成器)</p></blockquote><h2 id="middleware-中间件-的设计-tower-service" tabindex="-1">middleware(中间件)的设计 --- Tower Service</h2><blockquote><p>中间件的内部调用顺序（官方图）经典的洋葱模型</p></blockquote><p><img src="https://pic2.zhimg.com/v2-916bd3f2105c122d4360f1d7e7d42067_1440w.jpg" alt="" loading="lazy"></p><p>中间件的内部调用顺序（官方图）经典的洋葱模型</p><ul><li>Req -&gt; 从底部的 Layer 开始，也就是： 先进去的后调用； 栈的结构</li><li>Res -&gt; 队列的结构： 先进去的先调用</li></ul><blockquote><p>说到中间件，那么我们不得不提及 Tower， 该库为多数 http web框架提供了中间件 Service Trait 的支持， 它是一个 Rust 生态中通用的逻辑描述组件， 提供了一个 Service Trait 描述一个输入的 Request， 输出的 Result&lt;Response， Error&gt;， 只需要一个输入和输出对应， 那么基本上可以使用该描述逻辑，这个就是为啥 Tower 为各个 web 框架提供了中间件的支持</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>/ 在 tower 中的 Service</span></span>
<span class="line"><span>pub trait Service&lt;Request&gt; {</span></span>
<span class="line"><span>    type Response;</span></span>
<span class="line"><span>    type Error;</span></span>
<span class="line"><span>    type Future: Future&lt;Output = Result&lt;Self::Response, Self::Error&gt;&gt;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    fn poll_ready(&amp;mut self, cx: &amp;mut Context&lt;&#39;_&gt;) -&gt; Poll&lt;Result&lt;(), Self::Error&gt;&gt;;</span></span>
<span class="line"><span>    fn call(&amp;mut self, req: Request) -&gt; Self::Future;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Service 不只能帮助不同组件之间的接口对齐，我们还可以利用 tower 的一些辅助组件来做逻辑的组合。Tower 提供了 Layer 用于对 Service 做修饰，还提供了 <code>Stack</code> 用于 <code>Layer</code> 之间的嵌套。</p></blockquote><ul><li>Tower 中的 Layer 和 Stack</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>// 源码： tower-layer/stack.rs</span></span>
<span class="line"><span>/// Two middlewares chained together.</span></span>
<span class="line"><span>#[derive(Clone)]</span></span>
<span class="line"><span>pub struct Stack&lt;Inner, Outer&gt; {</span></span>
<span class="line"><span>    inner: Inner,</span></span>
<span class="line"><span>    outer: Outer,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>impl&lt;Inner, Outer&gt; Stack&lt;Inner, Outer&gt; {</span></span>
<span class="line"><span>    /// Create a new \\\`Stack\\\`.</span></span>
<span class="line"><span>    pub fn new(inner: Inner, outer: Outer) -&gt; Self {</span></span>
<span class="line"><span>        Stack { inner, outer }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>impl&lt;S, Inner, Outer&gt; Layer&lt;S&gt; for Stack&lt;Inner, Outer&gt;</span></span>
<span class="line"><span>where</span></span>
<span class="line"><span>    Inner: Layer&lt;S&gt;,</span></span>
<span class="line"><span>    Outer: Layer&lt;Inner::Service&gt;,</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    type Service = Outer::Service;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    fn layer(&amp;self, service: S) -&gt; Self::Service {</span></span>
<span class="line"><span>        let inner = self.inner.layer(service);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        self.outer.layer(inner)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Service 描述了 async fn(Resquet) -&gt; Result&lt;Response, Error&gt; 的通用的逻辑方式</li><li>Layer 是 Service 的装饰器， 传入一个 Service 可以放回一个被修饰的 Service。</li><li>Stack 是 Layer 的组合， 本身也是实现了Layer， 在调用.layer 时， 会依次调用内部的 layer， 顾一个 Service 内也可以存在多个 layer， 这里是使用的 <code>栈结构进行保存</code> ； 则调用顺序也是符合 Stack 的规则</li></ul><p>由于我们的中间件是使用了 Service 中间件， 而 Route 本身是实现了 Service， 所以我们接受的 Layer 可以包装为 Route， 但是由于缺少 State</p><p>故： 对于当前还缺少 State 的 BoxedIntoRoute，我们先将 layer 暂存起来，等待填充 State 后再 layer 包装。(见下面的参考案例则是如此的设计)</p><h3 id="那么如何实现一个自定义的中间件呢" tabindex="-1">那么如何实现一个自定义的中间件呢？？</h3><h3 id="方法-1-使用实现-tower-service-trait-参考下面案例-实现-jwt-验证的-auth-中间件" tabindex="-1">方法 1. 使用实现 Tower Service trait， 参考下面案例(实现 jwt 验证的 auth 中间件)</h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#[derive(Debug, Clone)]</span></span>
<span class="line"><span>pub struct JwtAuthMiddleware {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>impl&lt;S&gt; Layer&lt;S&gt; for JwtAuthMiddleware {</span></span>
<span class="line"><span>    type Service = AuthMiddlewareService&lt;S&gt;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    fn layer(&amp;self, inner: S) -&gt; Self::Service {</span></span>
<span class="line"><span>        AuthMiddlewareService { inner }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#[derive(Debug, Clone)]</span></span>
<span class="line"><span>pub struct AuthMiddlewareService&lt;S&gt; {</span></span>
<span class="line"><span>    inner: S,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>impl&lt;T&gt; Service&lt;Request&gt; for AuthMiddlewareService&lt;T&gt;</span></span>
<span class="line"><span>where</span></span>
<span class="line"><span>    T: Service&lt;Request, Response = Response&gt; + Send + &#39;static,</span></span>
<span class="line"><span>    T::Future: Send + &#39;static,</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    // 中间件返回类型</span></span>
<span class="line"><span>    type Response = T::Response;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 错误类型</span></span>
<span class="line"><span>    type Error = T::Error;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 异步类型</span></span>
<span class="line"><span>    type Future = Pin&lt;Box&lt;dyn Future&lt;Output = Result&lt;Self::Response, Self::Error&gt;&gt; + Send&gt;&gt;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // type Future = T::Future;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 询问是否准备 ok</span></span>
<span class="line"><span>    fn poll_ready(</span></span>
<span class="line"><span>        &amp;mut self,</span></span>
<span class="line"><span>        cx: &amp;mut std::task::Context&lt;&#39;_&gt;,</span></span>
<span class="line"><span>    ) -&gt; std::task::Poll&lt;Result&lt;(), Self::Error&gt;&gt; {</span></span>
<span class="line"><span>        // 这里会调用 inner 中的 poll ready； 如果 inner 都ready 了； 那么就 ready， 会调用 下面的 call得到结果</span></span>
<span class="line"><span>        self.inner.poll_ready(cx)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 调用异步</span></span>
<span class="line"><span>    fn call(&amp;mut self, mut request: Request) -&gt; Self::Future {</span></span>
<span class="line"><span>        let uri = request.uri();</span></span>
<span class="line"><span>        let is_white_path = NO_AUTH_PATHS_PREFIX</span></span>
<span class="line"><span>            .iter()</span></span>
<span class="line"><span>            .any(|v| uri.path().starts_with(v));</span></span>
<span class="line"><span>        // 白名单的 path 直接跳过 auth 中间件</span></span>
<span class="line"><span>        if is_white_path {</span></span>
<span class="line"><span>            return Box::pin(self.inner.call(request));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 进行登录校验</span></span>
<span class="line"><span>        if jwt_token {</span></span>
<span class="line"><span>            if let Some(claims) = JwtClaims::decode(jwt) {</span></span>
<span class="line"><span>                request</span></span>
<span class="line"><span>                    .borrow_mut()</span></span>
<span class="line"><span>                    .extensions_mut()</span></span>
<span class="line"><span>                    .insert::&lt;JwtClaims&gt;(claims);</span></span>
<span class="line"><span>                return Box::pin(self.inner.call(request));</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            // self.context.</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 直接返回： 不进行下一步的 call request future， 提前返回 Response</span></span>
<span class="line"><span>        Box::pin(async { Ok(KeepResponse::&lt;()&gt;::auth_error().into_response()) })</span></span>
<span class="line"><span>        //  这里是向下传递 future</span></span>
<span class="line"><span>        // let payload = self.auth_jwt()</span></span>
<span class="line"><span>        // let fut = self.inner.call(request);</span></span>
<span class="line"><span>        // // 得到 future 的返回值，进行包装返回</span></span>
<span class="line"><span>        // Box::pin(async move {</span></span>
<span class="line"><span>        //     let response: Response = fut.await?;</span></span>
<span class="line"><span>        //     println!(&quot;res: {:?}&quot;, response);</span></span>
<span class="line"><span>        //     Ok(response)</span></span>
<span class="line"><span>        // })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ol><li>创建一个自定义的中间件结构体： JwtAuthMiddleware</li><li>该结构体必须实现 Layer， 因为我们需要使用 route.layer(JwtAuthMiddleware{})来添加 Layer 中间件, 那么我们的该中间件<br> 必须实现 Layer trait</li></ol><ul><li>在 Layer 内部有一个 layer 方法， 该方法会返回 Layer 的关联类型(Service)</li></ul><ol><li>我们需要创建我们自己的中间件 Service 来处理 Response 和 Request， 那么需要定义 AuthMiddlewareService 结构体， 该结构体需要接受 S(State) 的泛型，便于传递 State 的类型</li><li>Service 内部存在三个关联类型： Response(需要返回的 Response)， Error： 错误类型，Future： 向下传递的 Future</li></ol><ul><li>poll_ready 方法： 需要告诉异步运行时， 该 Service 是否已经 Ready，如果 Ready 则会调用 Call 方法继续向下传递</li><li>call 方法： 拿到 Request 处理具体的逻辑，同时传递 Future</li></ul>`,91)),i("h3",u,[s[4]||(s[4]=n("方法2： 使用: axum",-1)),l(a,{icon:"middleware"}),s[5]||(s[5]=n("from_fn",-1))]),s[10]||(s[10]=e(`<blockquote><p>Axum 官方解释： 您不习惯实现自己的 future，而宁愿使用熟悉的 async/await 语法。 您不打算将您的中间件作为板条箱发布以供其他人使用。这样编写的中间件仅与 axum 兼容。</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>// 定义</span></span>
<span class="line"><span>pub fn from_fn&lt;F, T&gt;(f: F) -&gt; FromFnLayer&lt;F, (), T&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用： 使用该方法比较简单， 类似 <code>洋葱模型</code> 使用 Next 函数向下传递</p><p><code>请注意</code> ，该函数不支持提取 State。为此，请使用 <code>from_fn_with_state</code> 。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>// 在中间件中不使用提取器： 提取数据</span></span>
<span class="line"><span>async fn my_middleware(</span></span>
<span class="line"><span>    request: Request,</span></span>
<span class="line"><span>    next: Next,</span></span>
<span class="line"><span>) -&gt; Response {</span></span>
<span class="line"><span>    // do something with \\\`request\\\`...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let response = next.run(request).await;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // do something with \\\`response\\\`...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    response</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用提取器提取</span></span>
<span class="line"><span></span></span>
<span class="line"><span>async fn auth(</span></span>
<span class="line"><span>    // run the \\\`HeaderMap\\\` extractor</span></span>
<span class="line"><span>    headers: HeaderMap,</span></span>
<span class="line"><span>    // 您还可以在此处添加更多提取器，但最后一个提取器必须是实现了 \\\`FromRequest\\\`， 这里就是我们上面 Handler 提取器的规则了</span></span>
<span class="line"><span>    request: Request,</span></span>
<span class="line"><span>    next: Next,</span></span>
<span class="line"><span>) -&gt; Result&lt;Response, StatusCode&gt; {</span></span>
<span class="line"><span>    match get_token(&amp;headers) {</span></span>
<span class="line"><span>        Some(token) if token_is_valid(token) =&gt; {</span></span>
<span class="line"><span>            let response = next.run(request).await;</span></span>
<span class="line"><span>            Ok(response)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        _ =&gt; {</span></span>
<span class="line"><span>            Err(StatusCode::UNAUTHORIZED)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn get_token(headers: &amp;HeaderMap) -&gt; Option&lt;&amp;str&gt; {</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn token_is_valid(token: &amp;str) -&gt; bool {</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// main.rs</span></span>
<span class="line"><span>let app = Router::new()</span></span>
<span class="line"><span>    .route(&quot;/&quot;, get(|| async { /* ... */ }))</span></span>
<span class="line"><span>    .layer(middleware::from_fn(my_middleware));</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)),i("h3",v,[s[6]||(s[6]=n("方法3： 使用: axum",-1)),l(a,{icon:"middleware"}),s[7]||(s[7]=n("from_extractor",-1))]),s[11]||(s[11]=e(`<p>不建议使用该方法， 感觉有些不伦不类， 这里直接贴官方的案例了； 不作过多的说明, 利用 <code>提取器来作为中间件</code></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>pub fn from_extractor&lt;E&gt;() -&gt; FromExtractorLayer&lt;E, ()&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>use axum::{</span></span>
<span class="line"><span>    extract::FromRequestParts,</span></span>
<span class="line"><span>    middleware::from_extractor,</span></span>
<span class="line"><span>    routing::{get, post},</span></span>
<span class="line"><span>    Router,</span></span>
<span class="line"><span>    http::{header, StatusCode, request::Parts},</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>use async_trait::async_trait;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// An extractor that performs authorization.</span></span>
<span class="line"><span>struct RequireAuth;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#[async_trait]</span></span>
<span class="line"><span>impl&lt;S&gt; FromRequestParts&lt;S&gt; for RequireAuth</span></span>
<span class="line"><span>where</span></span>
<span class="line"><span>    S: Send + Sync,</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    type Rejection = StatusCode;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    async fn from_request_parts(parts: &amp;mut Parts, state: &amp;S) -&gt; Result&lt;Self, Self::Rejection&gt; {</span></span>
<span class="line"><span>        let auth_header = parts</span></span>
<span class="line"><span>            .headers</span></span>
<span class="line"><span>            .get(header::AUTHORIZATION)</span></span>
<span class="line"><span>            .and_then(|value| value.to_str().ok());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        match auth_header {</span></span>
<span class="line"><span>            Some(auth_header) if token_is_valid(auth_header) =&gt; {</span></span>
<span class="line"><span>                Ok(Self)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            _ =&gt; Err(StatusCode::UNAUTHORIZED),</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn token_is_valid(token: &amp;str) -&gt; bool {</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>async fn handler() {</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>async fn other_handler() {</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let app = Router::new()</span></span>
<span class="line"><span>    .route(&quot;/&quot;, get(handler))</span></span>
<span class="line"><span>    .route(&quot;/foo&quot;, post(other_handler))</span></span>
<span class="line"><span>    // 提取器将在所有路线之前运行</span></span>
<span class="line"><span>    .route_layer(from_extractor::&lt;RequireAuth&gt;());</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Axum 官方解释： 您有一种类型，有时想用作提取器，有时用作中间件。如果您只需要您的类型作为中间件，则更喜欢 middleware::from_fn。</p><h3 id="方法4-使用-tower-s-combinators-不展开详解-如果需要-可以看看官方文档" tabindex="-1">方法4： 使用 tower’s combinators: 不展开详解， 如果需要， 可以看看官方文档</h3><blockquote><p>tower 有几个实用程序组合器，可用于对请求或响应执行简单的修改。最常用的是</p></blockquote><ul><li>ServiceBuilder::map_request</li><li>ServiceBuilder::map_response</li><li>ServiceBuilder::then</li><li>ServiceBuilder::and_then</li></ul><h3 id="总结" tabindex="-1">总结</h3><ol><li>自定义中间件， 使用内置 Axum 的方法，或者是 Tower 的 Layer 和 Service 实现</li><li>Axum 中间件中可以访问 State， 处理 Cookie</li></ol><h2 id="response-响应" tabindex="-1">Response 响应</h2><blockquote><p>这里补充说明一下 Response 的规则； 上面我们知道，如果要将一个数据作为 Response 进行返回， 需要实现 <code>IntoResponse Trait</code>; 我们从源码中分析一下： Axum 的 Response 的规则</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>// axum-core/response.rs</span></span>
<span class="line"><span>pub type Response&lt;T = Body&gt; = http::Response&lt;T&gt;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在 Axum 源码中定义了 Response， 实际上是 <code>http::Response</code>, 同时泛型 <code>T 默认是 axum::body::Body</code>, 从axum 的依赖上看， <code>http::Response</code> 来自 http1.0.0; 同时 Body 来自 http-body， http-body-util 为其 Body 进行扩展， 那么说明 axum 的Body 是通过 http-body 中的 Body trait 进行自定义的， 从而我们可以看看如何自定义我们自己的 Response Body</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>http = &quot;1.0.0&quot;</span></span>
<span class="line"><span>http-body = &quot;1.0.0&quot;</span></span>
<span class="line"><span>http-body-util = &quot;0.1.0&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义-response-body" tabindex="-1">自定义 Response Body</h3><blockquote><p>我们看一下 Axum 是如何根据 http-body 自定义 Body 的</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>// 源码： axum-core/body.rs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 定义了一个包装类型：</span></span>
<span class="line"><span>type BoxBody = http_body_util::combinators::UnsyncBoxBody&lt;Bytes, Error&gt;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 核心代码</span></span>
<span class="line"><span>/// axum 请求和响应中使用的主体类型。</span></span>
<span class="line"><span>#[derive(Debug)]</span></span>
<span class="line"><span>pub struct Body(BoxBody);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 这里实际上是将 B 返回为 BoxBody</span></span>
<span class="line"><span>fn boxed&lt;B&gt;(body: B) -&gt; BoxBody</span></span>
<span class="line"><span>where</span></span>
<span class="line"><span>    B: http_body::Body&lt;Data = Bytes&gt; + Send + &#39;static,</span></span>
<span class="line"><span>    B::Error: Into&lt;BoxError&gt;,</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    try_downcast(body).unwrap_or_else(|body| body.map_err(Error::new).boxed_unsync())</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 尝试取转换</span></span>
<span class="line"><span>pub(crate) fn try_downcast&lt;T, K&gt;(k: K) -&gt; Result&lt;T, K&gt;</span></span>
<span class="line"><span>where</span></span>
<span class="line"><span>    T: &#39;static,</span></span>
<span class="line"><span>    K: Send + &#39;static,</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    let mut k = Some(k);</span></span>
<span class="line"><span>    if let Some(k) = &lt;dyn std::any::Any&gt;::downcast_mut::&lt;Option&lt;T&gt;&gt;(&amp;mut k) {</span></span>
<span class="line"><span>        Ok(k.take().unwrap())</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        Err(k.unwrap())</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>impl Body {</span></span>
<span class="line"><span>    /// 创建一个新的 \\\`Body\\\` 来包装另一个 [\\\`http_body::Body\\\`]。</span></span>
<span class="line"><span>    pub fn new&lt;B&gt;(body: B) -&gt; Self</span></span>
<span class="line"><span>    where</span></span>
<span class="line"><span>        B: http_body::Body&lt;Data = Bytes&gt; + Send + &#39;static,</span></span>
<span class="line"><span>        B::Error: Into&lt;BoxError&gt;,</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      // 取将其 包装起来</span></span>
<span class="line"><span>        try_downcast(body).unwrap_or_else(|body| Self(boxed(body)))</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /// 创建一个空的 body</span></span>
<span class="line"><span>    pub fn empty() -&gt; Self {</span></span>
<span class="line"><span>        Self::new(http_body_util::Empty::new())</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /// 从 [\\\`Stream\\\`] 创建一个新的 \\\`Body\\\`。</span></span>
<span class="line"><span>    ///</span></span>
<span class="line"><span>    /// [\\\`Stream\\\`]: https://docs.rs/futures-core/latest/futures_core/stream/trait.Stream.html</span></span>
<span class="line"><span>    pub fn from_stream&lt;S&gt;(stream: S) -&gt; Self</span></span>
<span class="line"><span>    where</span></span>
<span class="line"><span>        S: TryStream + Send + &#39;static,</span></span>
<span class="line"><span>        S::Ok: Into&lt;Bytes&gt;,</span></span>
<span class="line"><span>        S::Error: Into&lt;BoxError&gt;,</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        Self::new(StreamBody {</span></span>
<span class="line"><span>            stream: SyncWrapper::new(stream),</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /// 将主体转换为数据帧的 [\\\`Stream\\\`]。</span></span>
<span class="line"><span>    ///</span></span>
<span class="line"><span>    /// 非数据帧（例如预告片）将被丢弃。使用 [\\\`http_body_util::BodyStream\\\`] 如果</span></span>
<span class="line"><span>    /// 你需要一个所有帧类型的 [\\\`Stream\\\`]。</span></span>
<span class="line"><span>    /// [\\\`http_body_util::BodyStream\\\`]: https://docs.rs/http-body-util/latest/http_body_util/struct.BodyStream.html</span></span>
<span class="line"><span>    pub fn into_data_stream(self) -&gt; BodyDataStream {</span></span>
<span class="line"><span>        BodyDataStream { inner: self }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>从上面源码中看中看： 是从 Stream 中得到的 Body 数据流； 实际上我们不是特殊的数据需要进行数据流的订制的化， 一般不需要自定义 Body， 但是我们需要实现自定的 <code>Response Data</code>: 可以参考下面给的 <code>案例仓库</code> 中的 <code>response.rs</code> 文件</p></blockquote><h2 id="状态共享" tabindex="-1">状态共享</h2><blockquote><p>Handler 内部可能会需要一些外部量，比如初始化好的 db、或者用于缓存的 HashMap 等。我们一般会允许用户在创建 Route 的时候能够 attach 上某个 State（或者叫 Data），在 handler 函数参数中提取这个结构。</p></blockquote><blockquote><p>从上面的代码中可以看到 State 是 handler 函数中使用提取器获取的， 由于 State 不需要访问 Request 正文，那么从而 State 的提取器是实现了 <code>FormRequestParts</code> ， 上面 axum 源码中可以看出, 也许也会好奇， State 是如何绑定到 Request 上的， 在 Axum 或者是 Actix 状态的存储都是在 Request Extension 的 type map 中， 直接在其中写入数据，<br> 直接在 map 中写入数据， 会丢失静态类型检测，从而如果参数中的 State 和 Route 上的State 类型不匹配， 那么会将类型的错误抛到运行时</p></blockquote><ul><li><code>为了让 State 具备类型检测，在发生在编译期</code></li></ul><blockquote><p>axum 在 Handler， Route 和 FromRequest 上添加了泛型 <code>&lt;S&gt;</code>, 在 Router 上也添加了 <code>Router&lt;S&gt;</code> 来做相关的约束， 从上面的源码中可以看出</p></blockquote><ul><li>axum 源码中泛型 S 贯穿整个代码中</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>pub trait Handler&lt;S&gt; {</span></span>
<span class="line"><span>    fn call(&amp;self, req: http::Request, state: S) -&gt; BoxFuture&lt;&#39;static, http::Response&gt;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>pub trait FromRequest&lt;S&gt; {</span></span>
<span class="line"><span>    type Error;</span></span>
<span class="line"><span>    fn from_request(req: &amp;http::Request, state: &amp;S) -&gt; Result&lt;Self, Self::Error&gt;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pub struct Route&lt;S&gt; { ... }</span></span>
<span class="line"><span>impl&lt;S&gt; Route&lt;S&gt; {</span></span>
<span class="line"><span>    pub fn new(state: S) -&gt; Self { ... }</span></span>
<span class="line"><span>    // we can only add Handler&lt;S&gt; to our self, not Handler&lt;A&gt; or Handler&lt;B&gt;</span></span>
<span class="line"><span>    pub fn route&lt;H: Handler&lt;S&gt;&gt;(self, hander: H) -&gt; Self { ... }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// illustrate for macro expand result</span></span>
<span class="line"><span>impl&lt;F, O, S, T1&gt; Handler&lt;S&gt; for F</span></span>
<span class="line"><span>    where F: Fn(T1) -&gt; Fut, Fut: Future&lt;Output = O&gt;,</span></span>
<span class="line"><span>          O: IntoResponse, T1: FromRequest {</span></span>
<span class="line"><span>    fn call(&amp;self, req: http::Request, state: S) -&gt; BoxFuture&lt;&#39;static, http::Response&gt; {</span></span>
<span class="line"><span>        Box::pin(async move {</span></span>
<span class="line"><span>            let param1 = match T1::from_request(&amp;req, &amp;state) {</span></span>
<span class="line"><span>                Ok(p) =&gt; p,</span></span>
<span class="line"><span>                Err(e) =&gt; return e.into(),</span></span>
<span class="line"><span>            };</span></span>
<span class="line"><span>            let resp = (self)(param1).into_response();</span></span>
<span class="line"><span>            resp</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由抽象" tabindex="-1">路由抽象</h2><h3 id="路由查找-axum-使用了-matchit-0-7" tabindex="-1">路由查找： axum 使用了 matchit = &quot;0.7&quot;</h3><blockquote><p>matchit 是一个第三方的库， 可以帮助我们匹配路由路径， 符合的 Path 对应的 Value 返回给我们。Matchit 基于 <code>radix trie</code> 实现，比起 HashMap 支持前缀匹配和参数提取（如 /user/:id）。</p></blockquote><h3 id="axum-中关系如下" tabindex="-1">axum 中关系如下</h3><ol><li>当查找路径时，直接丢给 matchit Router 查到对应的 RouteId，之后使用 RouteId 查找到 Endpoint。</li><li>当合并路由时，假设我们要将 B 合并到 A，我们会遍历 B 里的路由信息，得到所有的 (RouterId, Path, Endpoint) tuple，之后尝试合并到 A 中同 Path 上（对于 Path 相同 Method 不同的），如果不存在再另外创建新的。</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>1. RouteId → Endpoint</span></span>
<span class="line"><span>2. Node</span></span>
<span class="line"><span>  matchit Router&lt;RouteId&gt;: 用于路径匹配</span></span>
<span class="line"><span>  RouteId → Path</span></span>
<span class="line"><span>  Path → RouteId</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 axum 中 Handler 被表示为 EndPoint 类型, 源码如下：</p><p><img src="https://pic2.zhimg.com/v2-4f78d36caf15283387ea61c1c6d90dc3_1440w.jpg" alt="" loading="lazy"></p><p>(图片源自互联网）</p><ol><li><code>BoxedIntoRoute</code> 擦掉了 Handler 类型，所以我们在其泛型上找不到 Handler 相关的标记，或 Handler 的关联类型,其 State 是待填充的，我们可以将 BoxedIntoRoute 理解为一个没有附加 State 的 Route。当附加 State 后它会变成一个真正的 Route，就是名字里 Into Route 的含义。</li><li><code>MethodRouter</code> 内包含不同 Method 对应的 MethodEndpoint。MethodEndpoint 可能对应 None（该方法上没设置），也可能是先前提到的 Route 或 BoxedIntoRoute。</li></ol><h3 id="路由组合" tabindex="-1">路由组合</h3><blockquote><p>下面例子是从 axum 中的 example 中抄来的</p></blockquote><p>首先.route(&quot;/keys&quot;, get(list_keys)), 通过 get 将一个函数 Box 起来转为 <code>MethodRouter&lt;S = (), E = Infallible&gt;</code>, 之后通过 <code>route</code> 将其插入到 <code>Endpoint::MethodRouter</code>, 由于还没有附加 State, 所以其 <code>内部类型对应 BoxedIntoRoute，即缺少 State 的那个类型。</code></p><p>之后看 <code>.with_state(Arc::clone(&amp;shared_state))</code></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>pub fn with_state&lt;S2&gt;(self, state: S) -&gt; Router&lt;S2, B&gt; { ... }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这里会附加 S 类型的 state 并重写泛型为新的类型 S2（S2 此时没有任何约束）。 with_state 内部会对所有 BoxedIntoRoute 附加 State 将其变为 Route 类型。</p><p><code>注意：</code>.nest 会接收一个 <code>prefix 和子路由</code> 。这时只需要将 <code>子路由作为 NestedRouter 插入即可</code> 。需要注意的是这里在丢给子路由之前，还需要 <code>额外去掉 prefix</code> 。</p><h2 id="axum-server-的创建和使用" tabindex="-1">Axum Server 的创建和使用</h2><blockquote><p>路由、Handler 和 中间件组合到一起，就构成一个 Server，Server 允许用户 bind 并 serve MakeService：</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>axum::Server::bind(&amp;addr)</span></span>
<span class="line"><span>      .serve(router.into_make_service())</span></span>
<span class="line"><span>      .await;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>IntoMakeService&lt;S&gt;</code> 实现了 Service&lt;T, Response = S, Error = Infallible&gt;。</li></ul><p><strong>欢迎点赞分享，搜索关注【鹅厂架构师】公众号，一起探索更多业界领先产品技术。</strong></p><p>发布于 2024-08-06 10:30・广东<a href="https://www.zhihu.com/topic/19588535" target="_blank" rel="noopener noreferrer">HTTP</a><a href="https://www.zhihu.com/topic/19674381" target="_blank" rel="noopener noreferrer">Rust（编程语言）</a><a href="https://www.zhihu.com/topic/27380522" target="_blank" rel="noopener noreferrer">webserver</a></p>`,48))])}const h=p(c,[["render",o]]),g=JSON.parse('{"path":"/MdNote_Public/Clippings/Rust%20Axum%20HTTP%20%E6%A1%86%E6%9E%B6%E7%9A%84%E6%9E%B6%E6%9E%84%E5%88%86%E6%9E%90.html","title":"Rust: Axum HTTP 框架的架构分析","lang":"zh-CN","frontmatter":{"title":"Rust: Axum HTTP 框架的架构分析","source":"https://zhuanlan.zhihu.com/p/711528388","author":["[[鹅厂架构师​已认证机构号]]"],"published":null,"created":"2025-06-08T00:00:00.000Z","description":"以下内容来自腾讯工程师 island导语：基于 Rust Axum HTTP 服务框架详解和案例， 看完该文章，我相信您会对 Axum 或者是其他的Rust http server 框架有更深的理解。 axum 是 hyper 之上相对较薄的一层，增加的开销…","tags":["clippings"],"head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Rust: Axum HTTP 框架的架构分析\\",\\"image\\":[\\"https://pica.zhimg.com/70/v2-638631f135d6fd6cce8c0760e0033153_1440w.avis?source=172ae18b&biz_tag=Post\\",\\"https://pic2.zhimg.com/v2-e8003960ae2cc7c8d9db03c35a664117_1440w.jpg\\",\\"https://picx.zhimg.com/v2-2e1adfcf8d0c9dbb39d5d86c6fae32b5_1440w.jpg\\",\\"https://pic2.zhimg.com/v2-916bd3f2105c122d4360f1d7e7d42067_1440w.jpg\\",\\"https://pic2.zhimg.com/v2-4f78d36caf15283387ea61c1c6d90dc3_1440w.jpg\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"[[鹅厂架构师​已认证机构号]]\\"}]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/Clippings/Rust%20Axum%20HTTP%20%E6%A1%86%E6%9E%B6%E7%9A%84%E6%9E%B6%E6%9E%84%E5%88%86%E6%9E%90.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Rust: Axum HTTP 框架的架构分析"}],["meta",{"property":"og:description","content":"以下内容来自腾讯工程师 island导语：基于 Rust Axum HTTP 服务框架详解和案例， 看完该文章，我相信您会对 Axum 或者是其他的Rust http server 框架有更深的理解。 axum 是 hyper 之上相对较薄的一层，增加的开销…"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pica.zhimg.com/70/v2-638631f135d6fd6cce8c0760e0033153_1440w.avis?source=172ae18b&biz_tag=Post"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"[[鹅厂架构师​已认证机构号]]"}],["meta",{"property":"article:tag","content":"clippings"}]],"tag":["clippings"]},"git":{},"readingTime":{"minutes":20.96,"words":6288},"filePathRelative":"MdNote_Public/Clippings/Rust Axum HTTP 框架的架构分析.md","excerpt":"<p><img src=\\"https://pica.zhimg.com/70/v2-638631f135d6fd6cce8c0760e0033153_1440w.avis?source=172ae18b&amp;biz_tag=Post\\" alt=\\"Rust: Axum HTTP 框架的架构分析\\" loading=\\"lazy\\"></p>\\n<p>Rust: Axum HTTP 框架的架构分析</p>\\n<p>目录</p>\\n<p>收起</p>\\n<p>Axum 整体架构图</p>\\n<p>Axum 基准测试</p>\\n<p>Handler 抽象设计</p>\\n<p>Axum 的handler 正是如此的特性</p>","bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/Clippings/Rust Axum HTTP 框架的架构分析.md","value":{"title":"Rust Axum HTTP 框架的架构分析","path":"MdNote_Public/Clippings/Rust Axum HTTP 框架的架构分析.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{h as comp,g as data};

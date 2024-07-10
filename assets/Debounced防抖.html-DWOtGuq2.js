import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o,c as i,a as n,b as s,d as t,e}from"./app-D9NcyM5y.js";const l={},u=e('<h1 id="debounced防抖" tabindex="-1"><a class="header-anchor" href="#debounced防抖"><span>Debounced防抖</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="debounced防抖-1" tabindex="-1"><a class="header-anchor" href="#debounced防抖-1"><span>Debounced防抖</span></a></h1><p>参考：</p>',4),d={href:"https://juejin.cn/post/6844903749429919758#heading-1",target:"_blank",rel:"noopener noreferrer"},k={href:"https://blog.csdn.net/qq_39706777/article/details/121975197",target:"_blank",rel:"noopener noreferrer"},r=e(`<h2 id="简易版-不能处理有返回值的情况" tabindex="-1"><a class="header-anchor" href="#简易版-不能处理有返回值的情况"><span>简易版（不能处理有返回值的情况）</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span>delay</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> _this <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">let</span> args <span class="token operator">=</span> arguments
    <span class="token keyword">if</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>_this<span class="token punctuation">,</span>args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>delay<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> debounceSayHi <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span>sayHi<span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token function">debounceSayHi</span><span class="token punctuation">(</span><span class="token string">&#39;lucy&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="完整版" tabindex="-1"><a class="header-anchor" href="#完整版"><span>完整版</span></a></h2><h3 id="函数防抖最终版" tabindex="-1"><a class="header-anchor" href="#函数防抖最终版"><span>函数防抖最终版</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">method<span class="token punctuation">,</span> wait<span class="token punctuation">,</span> immediate</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timeout
  <span class="token comment">// debounced函数为返回值</span>
  <span class="token comment">// 使用Async/Await处理异步，如果函数异步执行，等待setTimeout执行完，拿到原函数返回值后将其返回</span>
  <span class="token comment">// args为返回函数调用时传入的参数，传给method</span>
  <span class="token keyword">let</span> <span class="token function-variable function">debounced</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span> <span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 用于记录原函数执行结果</span>
      <span class="token keyword">let</span> result
      <span class="token comment">// 将method执行时this的指向设为debounce返回的函数被调用时的this指向</span>
      <span class="token keyword">let</span> context <span class="token operator">=</span> <span class="token keyword">this</span>
      <span class="token comment">// 如果存在定时器则将其清除</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>timeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 立即执行需要两个条件，一是immediate为true，二是timeout未被赋值或被置为null</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果定时器不存在，则立即执行，并设置一个定时器，wait毫秒后将定时器置为null</span>
        <span class="token comment">// 这样确保立即执行后wait毫秒内不会被再次触发</span>
        <span class="token keyword">let</span> callNow <span class="token operator">=</span> <span class="token operator">!</span>timeout
        timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          timeout <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
        <span class="token comment">// 如果满足上述两个条件，则立即执行并记录其执行结果</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>callNow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          result <span class="token operator">=</span> <span class="token function">method</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果immediate为false，则等待函数执行并记录其执行结果</span>
        <span class="token comment">// 并将Promise状态置为fullfilled，以使函数继续执行</span>
        timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">// args是一个数组，所以使用fn.apply</span>
          <span class="token comment">// 也可写作method.call(context, ...args)</span>
          result <span class="token operator">=</span> <span class="token function">method</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 在返回的debounced函数上添加取消方法</span>
  debounced<span class="token punctuation">.</span><span class="token function-variable function">cancel</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>
    timeout <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> debounced
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，如果需要原函数返回值，调用防抖后的函数的外层函数需要使用Async/Await语法等待执行结果返回</p><p>使用方法见代码：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> debouncedFn <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span>square<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>

window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> val
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    val <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">debouncedFn</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 停止缩放1S后输出：</span>
  <span class="token comment">// 原函数的返回值为：16</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">原函数返回值为</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>val<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体的实现步骤请往下看</p><h3 id="debounce-的实现" tabindex="-1"><a class="header-anchor" href="#debounce-的实现"><span>Debounce 的实现</span></a></h3><h4 id="_1-《javascript高级程序设计》-第三版-中的实现" tabindex="-1"><a class="header-anchor" href="#_1-《javascript高级程序设计》-第三版-中的实现"><span>1. 《JavaScript高级程序设计》（第三版）中的实现</span></a></h4><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code>function <span class="token function">debounce</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">clearTimeout</span><span class="token punctuation">(</span>method.tId<span class="token punctuation">)</span>
  method.tId = <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token selector">=&gt; </span><span class="token punctuation">{</span>
    method.<span class="token function">call</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> 1000<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

function <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console.<span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

window.onresize = <span class="token function">debounce</span><span class="token punctuation">(</span>print<span class="token punctuation">)</span>
复制代码复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们不停缩放窗口，当停止1S后，打印出Hello World。</p><p><strong>有个可以优化的地方</strong>: 此实现方法有副作用（Side Effect），改变了输入值（method），给method新增了属性</p><h4 id="_2-优化第一版-消除副作用-将定时器隔离" tabindex="-1"><a class="header-anchor" href="#_2-优化第一版-消除副作用-将定时器隔离"><span>2. 优化第一版：消除副作用，将定时器隔离</span></a></h4><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code>function <span class="token function">debounce</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> wait<span class="token punctuation">,</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  let timeout
  return <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    if <span class="token punctuation">(</span>timeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    timeout = <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token selector">=&gt; </span><span class="token punctuation">{</span>
      method.<span class="token function">call</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-优化第二版-自动调整this正确指向" tabindex="-1"><a class="header-anchor" href="#_3-优化第二版-自动调整this正确指向"><span>3. 优化第二版：自动调整this正确指向</span></a></h4><p>之前的函数我们需要手动传入函数执行上下文<code>context</code>，现在优化将 this 指向正确的对象。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">method<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timeout
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将method执行时this的指向设为debounce返回的函数被调用时的this指向</span>
    <span class="token keyword">let</span> context <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">method</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-优化第三版-函数可传入参数" tabindex="-1"><a class="header-anchor" href="#_4-优化第三版-函数可传入参数"><span>4. 优化第三版：函数可传入参数</span></a></h4><p>即便我们的函数不需要传参，但是别忘了JavaScript 在事件处理函数中会提供事件对象 event，所以我们要实现传参功能。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">method<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timeout
  <span class="token comment">// args为返回函数调用时传入的参数，传给method</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> context <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// args是一个数组，所以使用fn.apply</span>
      <span class="token comment">// 也可写作method.call(context, ...args)</span>
      <span class="token function">method</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-优化第四版-提供立即执行选项" tabindex="-1"><a class="header-anchor" href="#_5-优化第四版-提供立即执行选项"><span>5. 优化第四版：提供立即执行选项</span></a></h4><p>有些时候我不希望非要等到事件停止触发后才执行，我希望立刻执行函数，然后等到停止触发n毫秒后，才可以重新触发执行。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code>function <span class="token function">debounce</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> wait<span class="token punctuation">,</span> immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  let timeout
  return <span class="token function">function</span><span class="token punctuation">(</span>...args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    let context = this
    if <span class="token punctuation">(</span>timeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 立即执行需要两个条件，一是immediate为true，二是timeout未被赋值或被置为null</span>
    if <span class="token punctuation">(</span>immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果定时器不存在，则立即执行，并设置一个定时器，wait毫秒后将定时器置为null</span>
      <span class="token comment">// 这样确保立即执行后wait毫秒内不会被再次触发</span>
      let callNow = !timeout
      timeout = <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token selector">=&gt; </span><span class="token punctuation">{</span>
        timeout = <span class="token null keyword">null</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
      if <span class="token punctuation">(</span>callNow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        method.<span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token selector">else </span><span class="token punctuation">{</span>
      <span class="token comment">// 如果immediate为false，则函数wait毫秒后执行</span>
      timeout = <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token selector">=&gt; </span><span class="token punctuation">{</span>
        <span class="token comment">// args是一个类数组对象，所以使用fn.apply</span>
        <span class="token comment">// 也可写作method.call(context, ...args)</span>
        method.<span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-优化第五版-提供取消功能" tabindex="-1"><a class="header-anchor" href="#_6-优化第五版-提供取消功能"><span>6. 优化第五版：提供取消功能</span></a></h4><p>有些时候我们需要在不可触发的这段时间内能够手动取消防抖，代码实现如下：</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code>function <span class="token function">debounce</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> wait<span class="token punctuation">,</span> immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  let timeout
  <span class="token comment">// 将返回的匿名函数赋值给debounced，以便在其上添加取消方法</span>
  let debounced = <span class="token function">function</span><span class="token punctuation">(</span>...args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    let context = this
    if <span class="token punctuation">(</span>timeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    if <span class="token punctuation">(</span>immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      let callNow = !timeout
      timeout = <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token selector">=&gt; </span><span class="token punctuation">{</span>
        timeout = <span class="token null keyword">null</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
      if <span class="token punctuation">(</span>callNow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        method.<span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token selector">else </span><span class="token punctuation">{</span>
      timeout = <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token selector">=&gt; </span><span class="token punctuation">{</span>
        method.<span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 加入取消功能，使用方法如下</span>
  <span class="token comment">// let myFn = debounce(otherFn)</span>
  <span class="token comment">// myFn.cancel()</span>
  debounced.cancel = <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>
    timeout = <span class="token null keyword">null</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此，我们已经比较完整地实现了一个underscore中的debounce函数。</p><h3 id="遗留问题" tabindex="-1"><a class="header-anchor" href="#遗留问题"><span>遗留问题</span></a></h3><p>需要防抖的函数可能是存在返回值的，我们要对这种情况进行处理。 <code>underscore</code>的处理方法是将函数返回值在返回的<code>debounced</code>函数内再次返回，但是这样其实是有问题的。如果参数<code>immediate</code>传入值不为<code>true</code>的话，当防抖后的函数第一次被触发时，如果原始函数有返回值，其实是拿不到返回值的，因为原函数是在<code>setTimeout</code>内，是异步延迟执行的，而<code>return</code>是同步执行的，所以返回值是<code>undefined</code>。</p><p>第二次触发时拿到的返回值其实是第一次执行的返回值，第三次触发时拿到的返回值其实是第二次执行的返回值，以此类推。</p><h2 id="使用回调函数处理函数返回值" tabindex="-1"><a class="header-anchor" href="#使用回调函数处理函数返回值"><span>使用回调函数处理函数返回值</span></a></h2><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code>function <span class="token function">debounce</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> wait<span class="token punctuation">,</span> immediate<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  let timeout<span class="token punctuation">,</span> result
  let debounced = <span class="token function">function</span><span class="token punctuation">(</span>...args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    let context = this
    if <span class="token punctuation">(</span>timeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    if <span class="token punctuation">(</span>immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      let callNow = !timeout
      timeout = <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token selector">=&gt; </span><span class="token punctuation">{</span>
        timeout = <span class="token null keyword">null</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
      if <span class="token punctuation">(</span>callNow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result = method.<span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
        <span class="token comment">// 使用回调函数处理函数返回值</span>
        callback &amp;&amp; <span class="token function">callback</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token selector">else </span><span class="token punctuation">{</span>
      timeout = <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token selector">=&gt; </span><span class="token punctuation">{</span>
        result = method.<span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
        <span class="token comment">// 使用回调函数处理函数返回值</span>
        callback &amp;&amp; <span class="token function">callback</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  debounced.cancel = <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>
    timeout = <span class="token null keyword">null</span>
  <span class="token punctuation">}</span>

  return debounced
<span class="token punctuation">}</span>
复制代码复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样我们就可以在函数防抖时传入一个回调函数来处理函数的返回值，使用代码如下：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> debouncedFn <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span>square<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token parameter">val</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">原函数的返回值为：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>val<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">debouncedFn</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token comment">// 停止缩放1S后输出：</span>
<span class="token comment">// 原函数的返回值为：16</span>
复制代码复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-使用promise处理返回值" tabindex="-1"><a class="header-anchor" href="#_2-使用promise处理返回值"><span>2. 使用Promise处理返回值</span></a></h2><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code>function <span class="token function">debounce</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> wait<span class="token punctuation">,</span> immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  let timeout<span class="token punctuation">,</span> result
  let debounced = <span class="token function">function</span><span class="token punctuation">(</span>...args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 返回一个Promise，以便可以使用then或者Async/Await语法拿到原函数返回值</span>
    return new <span class="token function">Promise</span><span class="token punctuation">(</span><span class="token selector">resolve =&gt; </span><span class="token punctuation">{</span>
      let context = this
      if <span class="token punctuation">(</span>timeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      if <span class="token punctuation">(</span>immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        let callNow = !timeout
        timeout = <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token selector">=&gt; </span><span class="token punctuation">{</span>
          timeout = <span class="token null keyword">null</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
        if <span class="token punctuation">(</span>callNow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          result = method.<span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
          <span class="token comment">// 将原函数的返回值传给resolve</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token selector">else </span><span class="token punctuation">{</span>
        timeout = <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token selector">=&gt; </span><span class="token punctuation">{</span>
          result = method.<span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
          <span class="token comment">// 将原函数的返回值传给resolve</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  debounced.cancel = <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>
    timeout = <span class="token null keyword">null</span>
  <span class="token punctuation">}</span>

  return debounced
<span class="token punctuation">}</span>
复制代码复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用方法一</strong>：在调用防抖后的函数时，使用<code>then</code>拿到原函数的返回值</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> debouncedFn <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span>square<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>

window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">debouncedFn</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">val</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">原函数的返回值为：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>val<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token comment">// 停止缩放1S后输出：</span>
<span class="token comment">// 原函数的返回值为：16</span>
复制代码复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用方法二</strong>：调用防抖后的函数的外层函数使用Async/Await语法等待执行结果返回</p><p>使用方法见代码：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> debouncedFn <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span>square<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>

window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> val
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    val <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">debouncedFn</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">原函数返回值为</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>val<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token comment">// 停止缩放1S后输出：</span>
<span class="token comment">// 原函数的返回值为：16复制代码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43);function v(m,b){const a=c("ExternalLinkIcon");return o(),i("div",null,[u,n("ul",null,[n("li",null,[n("a",d,[s("【稀土掘金】javascript函数防抖Debounce"),t(a)]),s("（这篇文章很不错，还有很多额外的东西）")]),n("li",null,[n("a",k,[s("【CSDN】JavaScript 防抖、节流：限制事件回调函数的调用次数"),t(a)]),s("（这个简易版，不能处理有返回值的情况）")])]),r])}const g=p(l,[["render",v],["__file","Debounced防抖.html.vue"]]),w=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/JavaScript/09.%20%E5%BA%94%E7%94%A8-web/Debounced%E9%98%B2%E6%8A%96.html","title":"Debounced防抖","lang":"zh-CN","frontmatter":{"description":"Debounced防抖 目录 Debounced防抖 参考： 【稀土掘金】javascript函数防抖Debounce（这篇文章很不错，还有很多额外的东西） 【CSDN】JavaScript 防抖、节流：限制事件回调函数的调用次数（这个简易版，不能处理有返回值的情况） 简易版（不能处理有返回值的情况） 完整版 函数防抖最终版 需要注意的是，如果需要原函...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/JavaScript/09.%20%E5%BA%94%E7%94%A8-web/Debounced%E9%98%B2%E6%8A%96.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Debounced防抖"}],["meta",{"property":"og:description","content":"Debounced防抖 目录 Debounced防抖 参考： 【稀土掘金】javascript函数防抖Debounce（这篇文章很不错，还有很多额外的东西） 【CSDN】JavaScript 防抖、节流：限制事件回调函数的调用次数（这个简易版，不能处理有返回值的情况） 简易版（不能处理有返回值的情况） 完整版 函数防抖最终版 需要注意的是，如果需要原函..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Debounced防抖\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"Debounced防抖","slug":"debounced防抖","link":"#debounced防抖","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"Debounced防抖","slug":"debounced防抖-1","link":"#debounced防抖-1","children":[{"level":2,"title":"简易版（不能处理有返回值的情况）","slug":"简易版-不能处理有返回值的情况","link":"#简易版-不能处理有返回值的情况","children":[]},{"level":2,"title":"完整版","slug":"完整版","link":"#完整版","children":[{"level":3,"title":"函数防抖最终版","slug":"函数防抖最终版","link":"#函数防抖最终版","children":[]},{"level":3,"title":"Debounce 的实现","slug":"debounce-的实现","link":"#debounce-的实现","children":[{"level":4,"title":"1. 《JavaScript高级程序设计》（第三版）中的实现","slug":"_1-《javascript高级程序设计》-第三版-中的实现","link":"#_1-《javascript高级程序设计》-第三版-中的实现","children":[]},{"level":4,"title":"2. 优化第一版：消除副作用，将定时器隔离","slug":"_2-优化第一版-消除副作用-将定时器隔离","link":"#_2-优化第一版-消除副作用-将定时器隔离","children":[]},{"level":4,"title":"3. 优化第二版：自动调整this正确指向","slug":"_3-优化第二版-自动调整this正确指向","link":"#_3-优化第二版-自动调整this正确指向","children":[]},{"level":4,"title":"4. 优化第三版：函数可传入参数","slug":"_4-优化第三版-函数可传入参数","link":"#_4-优化第三版-函数可传入参数","children":[]},{"level":4,"title":"5. 优化第四版：提供立即执行选项","slug":"_5-优化第四版-提供立即执行选项","link":"#_5-优化第四版-提供立即执行选项","children":[]},{"level":4,"title":"6. 优化第五版：提供取消功能","slug":"_6-优化第五版-提供取消功能","link":"#_6-优化第五版-提供取消功能","children":[]}]},{"level":3,"title":"遗留问题","slug":"遗留问题","link":"#遗留问题","children":[]}]},{"level":2,"title":"使用回调函数处理函数返回值","slug":"使用回调函数处理函数返回值","link":"#使用回调函数处理函数返回值","children":[]},{"level":2,"title":"2. 使用Promise处理返回值","slug":"_2-使用promise处理返回值","link":"#_2-使用promise处理返回值","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":6.97,"words":2091},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/01. Language/JavaScript/09. 应用-web/Debounced防抖.md","autoDesc":true}');export{g as comp,w as data};

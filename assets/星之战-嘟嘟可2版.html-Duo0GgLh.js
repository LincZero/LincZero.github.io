import{_ as n,c as a,d as i,o as e}from"./app-k1oQHSab.js";const l={};function p(d,s){return e(),a("div",null,[...s[0]||(s[0]=[i(`<h1 id="星之战-嘟嘟可2版-草稿" tabindex="-1">星之战-嘟嘟可2版 (草稿)</h1><p>与第一部类似，但规则有一些变动。更难了许多。</p><p>图示: <strong>RGB 表示不同颜色，且该色有两个嘟嘟可。rgb 表示不同颜色，且该色有一个嘟嘟可。x 表示不可能，o 表示在</strong></p><p>不过这个比较多要猜，就很难受了。</p><p>主要扫雷很好看出是不是要死猜（看出来要猜也等于解出来了）<br> 而这种比较难判断出是不是需要开始猜了（等于没解出来）</p><h2 id="同样适用的旧定式" tabindex="-1">同样适用的旧定式</h2><ul><li>N色只占N行/列</li></ul><h2 id="定式-——-无一雷" tabindex="-1">定式 —— 无一雷</h2><p>这种有点类似旧定式，指若某个地方是星，则剩余地方不可能再有星</p><p>与1不同，在前期比较难使用行列排除法</p><h3 id="_3格定式、6格定式-最常用之一" tabindex="-1">3格定式、6格定式 (最常用之一)</h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>R x R</span></span>
<span class="line"><span>R x R</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>小于这个结构的变型也能用：如缺一格、如一条3格</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>R x _</span></span>
<span class="line"><span>R x 0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>0 x 0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_9格结构" tabindex="-1">9格结构</h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>R R R</span></span>
<span class="line"><span>R x R</span></span>
<span class="line"><span>R R R</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缺几个结果一样</p><h3 id="长条" tabindex="-1">长条</h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>x x x R R ... R R x x x</span></span>
<span class="line"><span></span></span>
<span class="line"><span>其中，数量 &lt;= 5 时:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>_ _ _ _ x _ x _ _ _ // 5</span></span>
<span class="line"><span>x x x R R R R R x x</span></span>
<span class="line"><span>_ _ _ _ x _ x _ _ _</span></span>
<span class="line"><span></span></span>
<span class="line"><span>_ _ _ x x x x _ _ _ // 4</span></span>
<span class="line"><span>x x x R R R R x x x</span></span>
<span class="line"><span>_ _ _ x x x x _ _ _</span></span>
<span class="line"><span></span></span>
<span class="line"><span>_ _ x x x x x _ _ // 3</span></span>
<span class="line"><span>x x x 0 x 0 x x x</span></span>
<span class="line"><span>_ _ x x x x x _ _</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他" tabindex="-1">其他</h3><ul><li>行列余二法</li><li>行列已二法</li></ul><h3 id="单色类" tabindex="-1">单色类</h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>x x</span></span>
<span class="line"><span>r r</span></span>
<span class="line"><span>x x</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定式-——-无二雷-双色" tabindex="-1">定式 —— 无二雷 (双色)</h2><p>指若某个地方是星，则剩余地方最多一星，不可能有两星。</p><p>无一雷定式是在自己中去除，这个是在别人颜色中去除。</p><p>快速掌握该定时的技巧：用一个 3x3 区域围绕目标颜色转一圈，看是去除该去除后是否剩余 2x2 区域</p><h3 id="大l型" tabindex="-1">大L型</h3><p>3+3/3+4</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>R</span></span>
<span class="line"><span>R x</span></span>
<span class="line"><span>R R R R R</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  R</span></span>
<span class="line"><span>x R x</span></span>
<span class="line"><span>  R R R R</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至于小L型用颜色拆分定式理解更简单</p><h3 id="t型" tabindex="-1">T型</h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>R </span></span>
<span class="line"><span>R x</span></span>
<span class="line"><span>R R R</span></span>
<span class="line"><span>R x</span></span>
<span class="line"><span>R</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定式-——-定双雷-冲突-双色" tabindex="-1">定式 —— 定双雷-冲突 (双色)</h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>      x</span></span>
<span class="line"><span>      R</span></span>
<span class="line"><span>R R R R</span></span>
<span class="line"><span>R B R R</span></span>
<span class="line"><span>R R R R</span></span>
<span class="line"><span>      R</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这里 B 若存在，则最右侧有三雷，冲突</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3x4型" tabindex="-1">3x4型</h3><p>圆型/椭圆型</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>R R R R</span></span>
<span class="line"><span>R B B R</span></span>
<span class="line"><span>R R R R</span></span>
<span class="line"><span></span></span>
<span class="line"><span>可以允许缺失几个 R</span></span>
<span class="line"><span>此时通常可以排除 B 项</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>R R R R</span></span>
<span class="line"><span>R R B R</span></span>
<span class="line"><span>R R R R</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这样也同理</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1型" tabindex="-1">4+1型</h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>        R</span></span>
<span class="line"><span>x x x R R R R G x x x</span></span>
<span class="line"><span></span></span>
<span class="line"><span>则最上的 R 可以排除，若是则该行无法存在的两雷会紧贴</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2格的一横加多竖" tabindex="-1">2格的一横加多竖</h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>x R x R x G x x x</span></span>
<span class="line"><span>x R x R x G x B B</span></span>
<span class="line"><span></span></span>
<span class="line"><span>可得</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    x   x</span></span>
<span class="line"><span>x R x R x G x x x</span></span>
<span class="line"><span>x R x R x G x B B</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变型</p><ul><li>这里的横换成星也同理</li><li>横竖互换也同理</li></ul><h2 id="定式-——-双色" tabindex="-1">定式 —— 双色</h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>xxx R R xxx G G xxx</span></span>
<span class="line"><span>    _ _ ... _ _</span></span>
<span class="line"><span>xxx R R xxx G G xxx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>xxx R xxx G G xxx</span></span>
<span class="line"><span>    _ ... _ _</span></span>
<span class="line"><span>xxx R ... G G xxx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="颜色拆分定式" tabindex="-1">颜色拆分定式</h2><p>关键是当一个连续色块去除了两个相近色块后，会变成一个无法容纳双色的情况</p><h3 id="无法容纳双色的情况" tabindex="-1">无法容纳双色的情况</h3><p>2x2 四格占地的四种情况</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>R R</span></span>
<span class="line"><span>R R</span></span>
<span class="line"><span></span></span>
<span class="line"><span>R R</span></span>
<span class="line"><span>R</span></span>
<span class="line"><span></span></span>
<span class="line"><span>R</span></span>
<span class="line"><span>  R</span></span>
<span class="line"><span></span></span>
<span class="line"><span>R R</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了描述方便，后文将这种称为 &quot;单色区&quot;</p><h3 id="拆分定式" tabindex="-1">拆分定式</h3><p>只要一个颜色组有两个单色区组成，就可以认为这是颜色拆分定时</p><p>即假设 g 部分一个雷也没有，那么 r 部分就有两雷，但这并不可能，所以 g 部分至少有一雷。反之。</p><p>下面举例:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>R R</span></span>
<span class="line"><span>  R R R</span></span>
<span class="line"><span></span></span>
<span class="line"><span>r r x x</span></span>
<span class="line"><span>x r g g</span></span>
<span class="line"><span>    x x</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>R</span></span>
<span class="line"><span>R R R R</span></span>
<span class="line"><span></span></span>
<span class="line"><span>r x x x</span></span>
<span class="line"><span>r r g g</span></span>
<span class="line"><span>    x x</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>_ _ _ _ R R R R _ _ _ _</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        x x x x</span></span>
<span class="line"><span>x x x x r r g g x x x x</span></span>
<span class="line"><span>        x x x x</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>x R R</span></span>
<span class="line"><span>x R R R</span></span>
<span class="line"><span></span></span>
<span class="line"><span>x r x x</span></span>
<span class="line"><span>x r x g</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 之前的6格定式和其变形也可以用这个定式来解释，甚至更清晰</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>R R R _</span></span>
<span class="line"><span>R _ R R</span></span>
<span class="line"><span></span></span>
<span class="line"><span>r r g x</span></span>
<span class="line"><span>r x g g</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>R R R R</span></span>
<span class="line"><span>R R R R</span></span>
<span class="line"><span></span></span>
<span class="line"><span>r r g g</span></span>
<span class="line"><span>r r g g</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 不过该例子没什么意义，只要不是 4+4，有一边小于 4，都能提供到有效信息</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分析法" tabindex="-1">分析法</h2><h3 id="横竖视角" tabindex="-1">横竖视角</h3><h3 id="拆分法" tabindex="-1">拆分法</h3><p>将一个颜色拆成两个颜色，那么就跟旧版本的一色一雷较像了 (一行/列二雷这个不像以外)</p><h2 id="田字分析" tabindex="-1">田字分析</h2><h3 id="非对称田" tabindex="-1">非对称田</h3><h3 id="_1111田" tabindex="-1">1111田</h3><h3 id="_2222田" tabindex="-1">2222田</h3><h2 id="异色组合" tabindex="-1">异色组合</h2><p>多种颜色视为一个颜色整体去分析</p><h2 id="强弱链" tabindex="-1">强弱链</h2><h2 id="猜星技巧" tabindex="-1">猜星技巧</h2><p>由于星总是稀少的</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>a a</span></span>
<span class="line"><span>A A</span></span>
<span class="line"><span>B B</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这里如果 a+A 区域和 A+b 区域，都确定有一个星。</span></span>
<span class="line"><span>那么有两种可能：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>一是 a 和 B 分别有一星。此时局部星率 2/6 = 0.33%</span></span>
<span class="line"><span>二是 A 有一星，a 和 B 没有星。此时局部星率 1/6 = 16.6%</span></span>
<span class="line"><span></span></span>
<span class="line"><span>而每行/列有1星的情况下，整体星率分别为 1/9 = 11.1%</span></span>
<span class="line"><span>而每行/列有2星的情况下，整体星率分别为 2/9 = 22.2%</span></span>
<span class="line"><span></span></span>
<span class="line"><span>看起来都是倾向于共占星更接近整体星率？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但感觉这算法不对，局部星率和整体星率的练习不像扫雷中使用雷率那么固定，而且扫雷雷率在残局中的可靠性也不高。而且这里两个概率相差也不够高。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>感觉很难猜，很难有高正确率的猜法</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>4+1 型</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  R</span></span>
<span class="line"><span>R R R R</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  R</span></span>
<span class="line"><span>R R ? ? // 似乎 4+1 的这个位置可以猜一下？收益也较高</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="标记法" tabindex="-1">标记法？</h2><p>a的和为1，b的和为2？</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>1 1 1 2 2 2 2 2 3</span></span>
<span class="line"><span>1 p 1 1 2 2 2 3 3</span></span>
<span class="line"><span>p p p p b 2 3 3 3</span></span>
<span class="line"><span>z z p p b b 3 3 3</span></span>
<span class="line"><span>z p p p b b 3 r r</span></span>
<span class="line"><span>z p p b b b b r r</span></span>
<span class="line"><span>z p p b b b b y r</span></span>
<span class="line"><span>h h h h h y y y r</span></span>
<span class="line"><span>h h h h h y y r r</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,82)])])}const c=n(l,[["render",p]]),t=JSON.parse('{"path":"/MdNote_Public/03.%20SkillAndProduction/%E6%B8%B8%E6%88%8F/%E8%B0%9C%E9%A2%98/%E6%98%9F%E4%B9%8B%E6%88%98/%E6%98%9F%E4%B9%8B%E6%88%98-%E5%98%9F%E5%98%9F%E5%8F%AF2%E7%89%88.html","title":"星之战-嘟嘟可2版 (草稿)","lang":"zh-CN","frontmatter":{"create_date":"2026-05-31T00:00:00.000Z","last_date":"2026-06-01T00:00:00.000Z","author":["LincZero"],"description":"星之战-嘟嘟可2版 (草稿) 与第一部类似，但规则有一些变动。更难了许多。 图示: RGB 表示不同颜色，且该色有两个嘟嘟可。rgb 表示不同颜色，且该色有一个嘟嘟可。x 表示不可能，o 表示在 不过这个比较多要猜，就很难受了。 主要扫雷很好看出是不是要死猜（看出来要猜也等于解出来了） 而这种比较难判断出是不是需要开始猜了（等于没解出来） 同样适用的旧...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"星之战-嘟嘟可2版 (草稿)\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\"}]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/03.%20SkillAndProduction/%E6%B8%B8%E6%88%8F/%E8%B0%9C%E9%A2%98/%E6%98%9F%E4%B9%8B%E6%88%98/%E6%98%9F%E4%B9%8B%E6%88%98-%E5%98%9F%E5%98%9F%E5%8F%AF2%E7%89%88.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"星之战-嘟嘟可2版 (草稿)"}],["meta",{"property":"og:description","content":"星之战-嘟嘟可2版 (草稿) 与第一部类似，但规则有一些变动。更难了许多。 图示: RGB 表示不同颜色，且该色有两个嘟嘟可。rgb 表示不同颜色，且该色有一个嘟嘟可。x 表示不可能，o 表示在 不过这个比较多要猜，就很难受了。 主要扫雷很好看出是不是要死猜（看出来要猜也等于解出来了） 而这种比较难判断出是不是需要开始猜了（等于没解出来） 同样适用的旧..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}]]},"git":{},"readingTime":{"minutes":5.19,"words":1557},"filePathRelative":"MdNote_Public/03. SkillAndProduction/游戏/谜题/星之战/星之战-嘟嘟可2版.md","excerpt":"\\n<p>与第一部类似，但规则有一些变动。更难了许多。</p>\\n<p>图示: <strong>RGB 表示不同颜色，且该色有两个嘟嘟可。rgb 表示不同颜色，且该色有一个嘟嘟可。x 表示不可能，o 表示在</strong></p>\\n<p>不过这个比较多要猜，就很难受了。</p>\\n<p>主要扫雷很好看出是不是要死猜（看出来要猜也等于解出来了）<br>\\n而这种比较难判断出是不是需要开始猜了（等于没解出来）</p>\\n<h2>同样适用的旧定式</h2>\\n<ul>\\n<li>N色只占N行/列</li>\\n</ul>\\n<h2>定式 —— 无一雷</h2>\\n<p>这种有点类似旧定式，指若某个地方是星，则剩余地方不可能再有星</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/03. SkillAndProduction/游戏/谜题/星之战/星之战-嘟嘟可2版.md","value":{"title":"星之战-嘟嘟可2版","path":"MdNote_Public/03. SkillAndProduction/游戏/谜题/星之战/星之战-嘟嘟可2版.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{c as comp,t as data};

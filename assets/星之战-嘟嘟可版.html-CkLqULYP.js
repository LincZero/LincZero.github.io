import{_ as n,c as a,d as i,o as e}from"./app-k1oQHSab.js";const l={};function p(d,s){return e(),a("div",null,[...s[0]||(s[0]=[i(`<h1 id="星之战-嘟嘟可版" tabindex="-1">星之战-嘟嘟可版</h1><p>取自 原神 千星奇域 中的 “嘟嘟可在哪里”</p><p>大致规则上和谜题中的 <strong>星之战</strong> 是一样的</p><p>只有少数两关会出现有多个分开的连续颜色块的情况，这里暂时忽略这种情况（星之战好像没有）</p><h2 id="规则" tabindex="-1">规则</h2><ul><li>每种颜色只有一个星</li><li>每行每列只有一个星</li><li>每个星不相邻（九宫不相邻）</li></ul><h2 id="技巧" tabindex="-1">技巧</h2><p>找嘟嘟可技巧：</p><ol><li>颜色剩余一个、行/列剩余一个</li><li>N个行/列中只有N个颜色（特例为某色占一行/列）</li><li>N个颜色只在N行/N列中</li><li>8格占位导致别人没有颜色所排除自己该格、或自己颜色多个可选均会排除别人的某格</li></ol><h3 id="复合技巧" tabindex="-1">复合技巧</h3><p>上面的技巧3可以行列复合成新定式:</p><p>(4-1) N+M个颜色只在N行M列的范围中</p><h2 id="定式" tabindex="-1">定式</h2><p>方便速做</p><p><em>注意: 定式名是我自己起的</em></p><p>这里用 RGB 来表示不同的颜色区域</p><h3 id="同行定式" tabindex="-1">同行定式</h3><p>当场上仅剩余有限的几个同颜色块时</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>_ _ _ x x _ _ _ _</span></span>
<span class="line"><span>x x x R R x x x x</span></span>
<span class="line"><span>_ _ _ x x _ _ _ _</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>_ _ _ _ x _ _ _ _  </span></span>
<span class="line"><span>x x x R x R x x x  </span></span>
<span class="line"><span>_ _ _ _ x _ _ _ _</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三色同理</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>_ _ _ _ x _ _ _ _  </span></span>
<span class="line"><span>x x x R R R x x x  </span></span>
<span class="line"><span>_ _ _ _ x _ _ _ _</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不挨得近，或者四雷及以上就只能去除同行了</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>_ _ _ _ _ _ _ _ _</span></span>
<span class="line"><span>_ _ R _ _ R _ _ _</span></span>
<span class="line"><span>_ _ _ _ _ _ _ _ _</span></span>
<span class="line"><span></span></span>
<span class="line"><span>_ _ _ _ _ _ _ _ _</span></span>
<span class="line"><span>_ _ R R R R _ _ _</span></span>
<span class="line"><span>_ _ _ _ _ _ _ _ _</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对角定式" tabindex="-1">对角定式</h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>_ _ _ _ x _ _ _ _</span></span>
<span class="line"><span>_ _ _ R R x _ _ _</span></span>
<span class="line"><span>_ _ _ x R _ _ _ _</span></span>
<span class="line"><span>_ _ _ _ _ _ _ _ _</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>_ _ _ _ x _ _ _ _</span></span>
<span class="line"><span>_ _ _ R x x _ _ _</span></span>
<span class="line"><span>_ _ x x R _ _ _ _</span></span>
<span class="line"><span>_ _ _ x _ _ _ _ _</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单叉-双叉标注" tabindex="-1">单叉/双叉标注</h3><p>这两个定式通常只能为你添加一/两个叉，作用比较有限</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>        R</span></span>
<span class="line"><span>        R</span></span>
<span class="line"><span>      R R R</span></span>
<span class="line"><span>R R R R x R R R R R</span></span>
<span class="line"><span>      R R R</span></span>
<span class="line"><span>        R</span></span>
<span class="line"><span>        R</span></span>
<span class="line"><span>        R</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>当这里少掉某几个 \`R\` 时，这个 \`x\` 的标注依然适用。最常见的变型是 \`LWZOCT\`，如:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>x R R R R (L)</span></span>
<span class="line"><span>  R</span></span>
<span class="line"><span></span></span>
<span class="line"><span>x R R R (W)</span></span>
<span class="line"><span>R R</span></span>
<span class="line"><span>R</span></span>
<span class="line"><span>R</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  x</span></span>
<span class="line"><span>R R R (T)</span></span>
<span class="line"><span>  R</span></span>
<span class="line"><span>  R</span></span>
<span class="line"><span></span></span>
<span class="line"><span>R R R</span></span>
<span class="line"><span>  x R R R R (Z)</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>R R R (O, 是否有开口不定，缺口方向不定，可能呈 OCUN&gt; 状)</span></span>
<span class="line"><span>R x R</span></span>
<span class="line"><span>R   R</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，当 <code>Z/L</code> 的长臂不超过三个时，可以同时叉两个:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>R R R x</span></span>
<span class="line"><span>  x R R R</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  R x</span></span>
<span class="line"><span>x R R R</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="双色类定式" tabindex="-1">双色类定式</h3><p>这里开始会用到两种颜色同时限制</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>x X x</span></span>
<span class="line"><span>R x G</span></span>
<span class="line"><span>R x G</span></span>
<span class="line"><span>x X x</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="无标" tabindex="-1">无标</h2><p>掌握无标技巧可以让你快一大截</p><p>前面的技巧主要是用于定叉，这里的技巧主要是用于直接定星</p><h3 id="心标" tabindex="-1">心标</h3><p>心中定叉、心中去掉色/行/列的心算类别</p><h3 id="l型定星" tabindex="-1">L型定星</h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>R</span></span>
<span class="line"><span>R</span></span>
<span class="line"><span>R</span></span>
<span class="line"><span>R</span></span>
<span class="line"><span>R R R R R</span></span>
<span class="line"><span></span></span>
<span class="line"><span>则左下为星，有鳍也是一样：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>R  </span></span>
<span class="line"><span>R R R  </span></span>
<span class="line"><span>R  </span></span>
<span class="line"><span>R R  </span></span>
<span class="line"><span>R R R R R</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这种标注后马上将对应的颜色想象成空缺，因为会直接少掉最外侧的一行一列加一些零散快，想象环节不那么吃力且快速</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(未完待续)</p><h2 id="猜" tabindex="-1">猜</h2><p>有的是非唯一解，需要多猜星技巧的</p><p>而且允许重开的竞速时 (计算完率等)，有的哪怕能推出来，但比较浪费时间，可能也会使用猜</p><h3 id="风车型-4x4空间" tabindex="-1">风车型 (4x4空间)</h3><p>对于一个 4X4 空间来说，不管其颜色 (区域) 分布，必有四星。</p><p>使用排除法可知角不可为星，而每行/列必有星，所以星必然在非角的边上，即只有两种可能:</p><p><strong>顺时针或逆时针的风车</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>  x x x x</span></span>
<span class="line"><span>x x O x x x</span></span>
<span class="line"><span>x x x x O x</span></span>
<span class="line"><span>x O x x x x</span></span>
<span class="line"><span>x x x O x x</span></span>
<span class="line"><span>  x x x x</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  x x x x</span></span>
<span class="line"><span>x x x 0 x x</span></span>
<span class="line"><span>x 0 x x x x</span></span>
<span class="line"><span>x x x x 0 x</span></span>
<span class="line"><span>x x 0 x x x</span></span>
<span class="line"><span>  x x x x</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(未完待续)</p>`,52)])])}const r=n(l,[["render",p]]),t=JSON.parse('{"path":"/MdNote_Public/03.%20SkillAndProduction/%E6%B8%B8%E6%88%8F/%E8%B0%9C%E9%A2%98/%E6%98%9F%E4%B9%8B%E6%88%98/%E6%98%9F%E4%B9%8B%E6%88%98-%E5%98%9F%E5%98%9F%E5%8F%AF%E7%89%88.html","title":"星之战-嘟嘟可版","lang":"zh-CN","frontmatter":{"create_date":"2026-04-24T00:00:00.000Z","last_date":"2026-05-13T00:00:00.000Z","author":["LincZero"],"description":"星之战-嘟嘟可版 取自 原神 千星奇域 中的 “嘟嘟可在哪里” 大致规则上和谜题中的 星之战 是一样的 只有少数两关会出现有多个分开的连续颜色块的情况，这里暂时忽略这种情况（星之战好像没有） 规则 每种颜色只有一个星 每行每列只有一个星 每个星不相邻（九宫不相邻） 技巧 找嘟嘟可技巧： 颜色剩余一个、行/列剩余一个 N个行/列中只有N个颜色（特例为某色...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"星之战-嘟嘟可版\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\"}]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/03.%20SkillAndProduction/%E6%B8%B8%E6%88%8F/%E8%B0%9C%E9%A2%98/%E6%98%9F%E4%B9%8B%E6%88%98/%E6%98%9F%E4%B9%8B%E6%88%98-%E5%98%9F%E5%98%9F%E5%8F%AF%E7%89%88.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"星之战-嘟嘟可版"}],["meta",{"property":"og:description","content":"星之战-嘟嘟可版 取自 原神 千星奇域 中的 “嘟嘟可在哪里” 大致规则上和谜题中的 星之战 是一样的 只有少数两关会出现有多个分开的连续颜色块的情况，这里暂时忽略这种情况（星之战好像没有） 规则 每种颜色只有一个星 每行每列只有一个星 每个星不相邻（九宫不相邻） 技巧 找嘟嘟可技巧： 颜色剩余一个、行/列剩余一个 N个行/列中只有N个颜色（特例为某色..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}]]},"git":{},"readingTime":{"minutes":3.65,"words":1094},"filePathRelative":"MdNote_Public/03. SkillAndProduction/游戏/谜题/星之战/星之战-嘟嘟可版.md","excerpt":"\\n<p>取自 原神 千星奇域 中的 “嘟嘟可在哪里”</p>\\n<p>大致规则上和谜题中的 <strong>星之战</strong> 是一样的</p>\\n<p>只有少数两关会出现有多个分开的连续颜色块的情况，这里暂时忽略这种情况（星之战好像没有）</p>\\n<h2>规则</h2>\\n<ul>\\n<li>每种颜色只有一个星</li>\\n<li>每行每列只有一个星</li>\\n<li>每个星不相邻（九宫不相邻）</li>\\n</ul>\\n<h2>技巧</h2>\\n<p>找嘟嘟可技巧：</p>\\n<ol>\\n<li>颜色剩余一个、行/列剩余一个</li>\\n<li>N个行/列中只有N个颜色（特例为某色占一行/列）</li>\\n<li>N个颜色只在N行/N列中</li>\\n<li>8格占位导致别人没有颜色所排除自己该格、或自己颜色多个可选均会排除别人的某格</li>\\n</ol>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/03. SkillAndProduction/游戏/谜题/星之战/星之战-嘟嘟可版.md","value":{"title":"星之战-嘟嘟可版","path":"MdNote_Public/03. SkillAndProduction/游戏/谜题/星之战/星之战-嘟嘟可版.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{r as comp,t as data};

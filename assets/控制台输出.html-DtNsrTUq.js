import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as t}from"./app-9z1y9ucS.js";const e={},o=t(`<h1 id="控制台输出-打印" tabindex="-1"><a class="header-anchor" href="#控制台输出-打印"><span>控制台输出 (打印)</span></a></h1><h2 id="格式化打印" tabindex="-1"><a class="header-anchor" href="#格式化打印"><span>格式化打印</span></a></h2><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;普通的带换行打印&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// 格式化打印</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;对应字符：%c&quot;</span><span class="token punctuation">,</span> <span class="token char">&#39;A&#39;</span><span class="token punctuation">)</span>		 <span class="token comment">// A</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;对应字符：%T&quot;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span>		 <span class="token comment">// int</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>unsafe<span class="token punctuation">.</span><span class="token function">Sizeof</span><span class="token punctuation">(</span>num3<span class="token punctuation">)</span><span class="token punctuation">)</span>	<span class="token comment">// 8 (Byte)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>格式化打印字符（详见 studygolang.com/pkgdoc中fmt 部分的文档）</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// 通用</span>
<span class="token operator">%</span>v	值的默认格式表示
<span class="token operator">%</span><span class="token operator">+</span>v	类似<span class="token operator">%</span>v，但输出结构倜时会添加字段名
<span class="token operator">%</span>#v	值的Go语法表示
<span class="token operator">%</span>T	值的类型的Go语法表示
<span class="token operator">%</span><span class="token operator">%</span>	百分号

<span class="token comment">// 布尔</span>
<span class="token operator">%</span>t	单词<span class="token boolean">true</span><span class="token operator">/</span><span class="token boolean">false</span>

<span class="token comment">// 整数</span>
<span class="token operator">%</span>b	二进制
<span class="token operator">%</span>c	unicode码值
<span class="token operator">%</span>d	十进制
<span class="token operator">%</span>o	八进制
<span class="token operator">%</span>q	单引号括起来的<span class="token keyword">go</span>语法字符字面值，必要时用转义符号。即打印出来的结果是带引号的：<span class="token string">&quot;hello\\tworld&quot;</span>
<span class="token operator">%</span>x	十六进制<span class="token punctuation">(</span>小写<span class="token punctuation">)</span>
<span class="token operator">%</span>X	十六进制<span class="token punctuation">(</span>大写<span class="token punctuation">)</span>
<span class="token operator">%</span>U	Unicode码值<span class="token punctuation">(</span>U<span class="token operator">+</span><span class="token number">1234</span>表示法<span class="token punctuation">)</span>

<span class="token comment">// 浮点与复数</span>
<span class="token operator">%</span>b
<span class="token operator">%</span>e
<span class="token operator">%</span>E
<span class="token operator">%</span>f
<span class="token operator">%</span>F
<span class="token operator">%</span>g
<span class="token operator">%</span>G

<span class="token comment">// 字符串和[]byte</span>
<span class="token operator">%</span>s
<span class="token operator">%</span>q
<span class="token operator">%</span>x
<span class="token operator">%</span>X

<span class="token comment">// 指针</span>
<span class="token operator">%</span>p	表示为0x加十六进制
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="转义字符" tabindex="-1"><a class="header-anchor" href="#转义字符"><span>转义字符</span></a></h2><p>与其他语言基本一样的</p><table><thead><tr><th>转义符</th><th>含义</th><th>补充</th><th>Unicode</th></tr></thead><tbody><tr><td><code>\\b</code></td><td>退格</td><td>backspace</td><td>\\u0008</td></tr><tr><td><code>\\n</code></td><td>换行</td><td></td><td>\\u000a</td></tr><tr><td><code>\\r</code></td><td>回车</td><td>将光标指针返回本行的开头，后续输出会替换原有字符</td><td>\\u000d</td></tr><tr><td><code>\\t</code></td><td>制表符</td><td>tab</td><td>\\u0009</td></tr><tr><td><code>\\&quot;</code></td><td>双引号</td><td></td><td>\\u0022</td></tr><tr><td><code>\\&#39;</code></td><td>单引号</td><td></td><td>\\u0027</td></tr><tr><td><code>\\\\</code></td><td>反斜杠</td><td></td><td>\\u005c</td></tr></tbody></table>`,8),p=[o];function c(l,i){return s(),a("div",null,p)}const u=n(e,[["render",c],["__file","控制台输出.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/Go/03_%E4%BA%A4%E4%BA%92/%E6%8E%A7%E5%88%B6%E5%8F%B0%E8%BE%93%E5%87%BA.html","title":"控制台输出 (打印)","lang":"zh-CN","frontmatter":{"description":"控制台输出 (打印) 格式化打印 格式化打印字符（详见 studygolang.com/pkgdoc中fmt 部分的文档） 转义字符 与其他语言基本一样的","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/Go/03_%E4%BA%A4%E4%BA%92/%E6%8E%A7%E5%88%B6%E5%8F%B0%E8%BE%93%E5%87%BA.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"控制台输出 (打印)"}],["meta",{"property":"og:description","content":"控制台输出 (打印) 格式化打印 格式化打印字符（详见 studygolang.com/pkgdoc中fmt 部分的文档） 转义字符 与其他语言基本一样的"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"控制台输出 (打印)\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"控制台输出 (打印)","slug":"控制台输出-打印","link":"#控制台输出-打印","children":[{"level":2,"title":"格式化打印","slug":"格式化打印","link":"#格式化打印","children":[]},{"level":2,"title":"转义字符","slug":"转义字符","link":"#转义字符","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.07,"words":321},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/01. Language/Go/03_交互/控制台输出.md","autoDesc":true}');export{u as comp,m as data};

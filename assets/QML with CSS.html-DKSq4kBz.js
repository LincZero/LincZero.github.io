import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as e}from"./app-9z1y9ucS.js";const t={},p=e(`<h2 id="原生qml的麻烦之处" tabindex="-1"><a class="header-anchor" href="#原生qml的麻烦之处"><span>原生QML的麻烦之处</span></a></h2><p>在QML文档上直接上样式是有点麻烦的，而且如果你本身就比较熟悉CSS，那么用CSS样式无疑更好</p><p>例如：实现单边边框在QML中是麻烦的，参考：https://codeantenna.com/a/KYFKNlv9CA</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>Rectangle <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> window<span class="token punctuation">.</span>width
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">70</span>
    border<span class="token punctuation">.</span>color<span class="token operator">:</span> <span class="token string">&quot;#cdcdcd&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法1</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>Page <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> page
    <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">200</span>
    <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">78</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">200</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">200</span>

    <span class="token literal-property property">background</span><span class="token operator">:</span> Rectangle <span class="token punctuation">{</span>
        anchors<span class="token punctuation">.</span>fill<span class="token operator">:</span> parent
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;white&quot;</span>
        border<span class="token punctuation">.</span>width<span class="token operator">:</span> <span class="token number">1</span>
        border<span class="token punctuation">.</span>color<span class="token operator">:</span> <span class="token string">&quot;black&quot;</span>

        <span class="token comment">// 使用矩形覆盖上层Rectangle的边框</span>
        Rectangle <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> parent<span class="token punctuation">.</span>color
            border<span class="token punctuation">.</span>width<span class="token operator">:</span> <span class="token number">0</span>
            anchors<span class="token punctuation">.</span>fill<span class="token operator">:</span> parent
            <span class="token comment">// 使用Margin来确定是否显示边框</span>
            anchors<span class="token punctuation">.</span>leftMargin<span class="token operator">:</span> <span class="token number">1</span>
            anchors<span class="token punctuation">.</span>topMargin<span class="token operator">:</span> <span class="token number">1</span>
            anchors<span class="token punctuation">.</span>rightMargin<span class="token operator">:</span> <span class="token number">1</span>
            anchors<span class="token punctuation">.</span>bottomMargin<span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法二：使用Shape绘制边框线</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>Page <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> pageID
    <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">200</span>
    <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">78</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">200</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">200</span>

    <span class="token literal-property property">background</span><span class="token operator">:</span> Rectangle <span class="token punctuation">{</span>
        anchors<span class="token punctuation">.</span>fill<span class="token operator">:</span> parent
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;white&quot;</span>
        border<span class="token punctuation">.</span>width<span class="token operator">:</span> <span class="token number">0</span>
        border<span class="token punctuation">.</span>color<span class="token operator">:</span> <span class="token string">&quot;black&quot;</span>
        <span class="token comment">// 绘制一条边框</span>
        Shape <span class="token punctuation">{</span>
            anchors<span class="token punctuation">.</span>fill<span class="token operator">:</span> parent
            ShapePath <span class="token punctuation">{</span>
                <span class="token literal-property property">strokeWidth</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token literal-property property">strokeColor</span><span class="token operator">:</span> <span class="token string">&quot;black&quot;</span>
                <span class="token literal-property property">strokeStyle</span><span class="token operator">:</span> ShapePath<span class="token punctuation">.</span>SolidLine
                <span class="token literal-property property">startX</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token literal-property property">startY</span><span class="token operator">:</span> <span class="token number">0</span>
                PathLine <span class="token punctuation">{</span>
                    <span class="token literal-property property">x</span><span class="token operator">:</span> pageID<span class="token punctuation">.</span>width
                    <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span>
                PathLine <span class="token punctuation">{</span>
                    <span class="token literal-property property">x</span><span class="token operator">:</span> pageID<span class="token punctuation">.</span>width
                    <span class="token literal-property property">y</span><span class="token operator">:</span> pageID<span class="token punctuation">.</span>height
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css" tabindex="-1"><a class="header-anchor" href="#css"><span>CSS？？？</span></a></h2><p>好像不支持</p><h2 id="qss样式" tabindex="-1"><a class="header-anchor" href="#qss样式"><span>QSS样式？</span></a></h2><p>Qt Style Sheets 不确定QML能不能用</p>`,12),o=[p];function l(r,i){return s(),a("div",null,o)}const u=n(t,[["render",l],["__file","QML with CSS.html.vue"]]),v=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Multi/QT%EF%BC%88Cpp%EF%BC%89/02.%20QtGUI%E7%B1%BB/02.%20QtQuick/03.%20QML%20with%20CSS/QML%20with%20CSS.html","title":"","lang":"zh-CN","frontmatter":{"description":"原生QML的麻烦之处 在QML文档上直接上样式是有点麻烦的，而且如果你本身就比较熟悉CSS，那么用CSS样式无疑更好 例如：实现单边边框在QML中是麻烦的，参考：https://codeantenna.com/a/KYFKNlv9CA 方法1 方法二：使用Shape绘制边框线 CSS？？？ 好像不支持 QSS样式？ Qt Style Sheets 不确...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Multi/QT%EF%BC%88Cpp%EF%BC%89/02.%20QtGUI%E7%B1%BB/02.%20QtQuick/03.%20QML%20with%20CSS/QML%20with%20CSS.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"原生QML的麻烦之处 在QML文档上直接上样式是有点麻烦的，而且如果你本身就比较熟悉CSS，那么用CSS样式无疑更好 例如：实现单边边框在QML中是麻烦的，参考：https://codeantenna.com/a/KYFKNlv9CA 方法1 方法二：使用Shape绘制边框线 CSS？？？ 好像不支持 QSS样式？ Qt Style Sheets 不确..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":2,"title":"原生QML的麻烦之处","slug":"原生qml的麻烦之处","link":"#原生qml的麻烦之处","children":[]},{"level":2,"title":"CSS？？？","slug":"css","link":"#css","children":[]},{"level":2,"title":"QSS样式？","slug":"qss样式","link":"#qss样式","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.75,"words":224},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Platform/Multi/QT（Cpp）/02. QtGUI类/02. QtQuick/03. QML with CSS/QML with CSS.md","autoDesc":true}');export{u as comp,v as data};

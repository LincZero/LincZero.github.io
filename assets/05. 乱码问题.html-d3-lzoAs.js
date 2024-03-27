import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,a as l}from"./app-Bmv5Ekr9.js";const s={},a=l(`<h1 id="qt" tabindex="-1"><a class="header-anchor" href="#qt"><span>Qt</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="乱码问题" tabindex="-1"><a class="header-anchor" href="#乱码问题"><span>乱码问题</span></a></h1><h2 id="中文乱码或中文报错" tabindex="-1"><a class="header-anchor" href="#中文乱码或中文报错"><span>中文乱码或中文报错</span></a></h2><ul><li><p>报错</p><ul><li><strong>常量中有换行符</strong></li></ul></li><li><p>报错解决方法</p><ul><li>顶部菜单 &gt; 工具 &gt; 选项 &gt; 文本编辑器 &gt; Behavior &gt; 文件编码 &gt; UTF-8 BOM &gt; 修改成 “如果编码是UTF-8则添加”</li><li><strong>重新输入几个中文</strong>进字符串中（这有个bug，必须重新输入。也不用全部重新输入，就输入几个字就行，不然没用）</li><li>但该方法使用后，虽然不报错了，但中文部分会显示成乱码</li></ul></li><li><p>乱码解决方法（强制使用某编码输出）</p><ul><li><code>QString::fromLocal8Bit(&quot;中文文本&quot;)</code>，解决Qt中MSVC编译的中文乱码的问题</li></ul></li><li><p>乱码解决方法（告诉编译器用什么编码）</p><ul><li><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token comment">#CONFIG += utf8_source</span>
msvc{
<span class="token key attr-name">	QMAKE_CFLAGS</span> <span class="token value attr-value">+= -Qoption,cpp--unicode_source_kind,UTF-8</span>
<span class="token key attr-name">	QMAKE_CXXFLAGS</span> <span class="token value attr-value">+= -Qoption,cpp,--unicode_source_kind,UTF-8</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>网站也有人这样写：</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code>msvc{
<span class="token key attr-name">	QMAKE_CFLAGS</span> <span class="token value attr-value">+= /utf-8</span>
<span class="token key attr-name">	QMAKE_CXXFLAGS</span> <span class="token value attr-value">+= /utf-8</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><p>注意两个词的区别</p><ul><li>文件编码</li><li>解释器解码</li></ul><h2 id="_0" tabindex="-1"><a class="header-anchor" href="#_0"><span>0</span></a></h2><ul><li><p>Qt编码实例（注意的是，编辑器）</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>中文：
你好世界

————————————————————————————————————————————
Qt_编译结果：（MSVC和MinGW结果一样）
\\344\\275\\240
\\345\\245\\275
\\344\\270\\226
\\347\\225\\214

Qt_编译结果转2进制：（这里的010有点诡异）
01110 0100 010 111101 010 100000
01110 0101 010 100101 010 111101
01110 0100 010 111000 010 010110
01110 0111 010 010101 010 001100

Qt_编译结果转16进制：（会发现很奇怪，对不上）
39 17aa0
39 54abd
39 17096
39 d2a8c

————————————————————————————————————————————
16进制：
\\u4f60\\u597d\\u4e16\\u754c
或&amp;#x4F60;&amp;#x597D;&amp;#x4E16;&amp;#x754C;

16进制转2进制：（记得补前面的0）
0100 111101 100000
0101 100101 111101
0100 111000 010110
0111 010101 001100

————————————————————————————————————————————
（其实和GBK并没什么关系的，这里写出来是参考学习而已）
GBK：
e4baa0e5a5bde4b896e7958c

GBK转utf-8：
c4e3bac3cac0bde7

GBK转2进制：
1100010011100011
1011101011000011
1100101011000000
1011110111100111

————————————————————————————————————————————
用GBK解码utf8编码：
浣犲ソ涓栫晫

用utf8解码GBK编码：
ģºÊÀ½（或者形式为实体长方格子，或者形式为问好）

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,9),t=[a];function d(r,c){return i(),n("div",null,t)}const o=e(s,[["render",d],["__file","05. 乱码问题.html.vue"]]),p=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Multi/QT%EF%BC%88Cpp%EF%BC%89/03.%20Qt%E5%85%B6%E4%BB%96%E7%B1%BB%EF%BC%88%E6%8C%89%E5%8A%9F%E8%83%BD%EF%BC%89/01.%20%E6%96%87%E6%9C%AC%E7%9B%B8%E5%85%B3/05.%20%E4%B9%B1%E7%A0%81%E9%97%AE%E9%A2%98.html","title":"Qt","lang":"zh-CN","frontmatter":{"description":"Qt 目录 乱码问题 中文乱码或中文报错 报错 常量中有换行符 报错解决方法 顶部菜单 > 工具 > 选项 > 文本编辑器 > Behavior > 文件编码 > UTF-8 BOM > 修改成 “如果编码是UTF-8则添加” 重新输入几个中文进字符串中（这有个bug，必须重新输入。也不用全部重新输入，就输入几个字就行，不然没用） 但该方法使用后，虽然...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Multi/QT%EF%BC%88Cpp%EF%BC%89/03.%20Qt%E5%85%B6%E4%BB%96%E7%B1%BB%EF%BC%88%E6%8C%89%E5%8A%9F%E8%83%BD%EF%BC%89/01.%20%E6%96%87%E6%9C%AC%E7%9B%B8%E5%85%B3/05.%20%E4%B9%B1%E7%A0%81%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Qt"}],["meta",{"property":"og:description","content":"Qt 目录 乱码问题 中文乱码或中文报错 报错 常量中有换行符 报错解决方法 顶部菜单 > 工具 > 选项 > 文本编辑器 > Behavior > 文件编码 > UTF-8 BOM > 修改成 “如果编码是UTF-8则添加” 重新输入几个中文进字符串中（这有个bug，必须重新输入。也不用全部重新输入，就输入几个字就行，不然没用） 但该方法使用后，虽然..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Qt\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"Qt","slug":"qt","link":"#qt","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"乱码问题","slug":"乱码问题","link":"#乱码问题","children":[{"level":2,"title":"中文乱码或中文报错","slug":"中文乱码或中文报错","link":"#中文乱码或中文报错","children":[]},{"level":2,"title":"0","slug":"_0","link":"#_0","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.53,"words":460},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Platform/Multi/QT（Cpp）/03. Qt其他类（按功能）/01. 文本相关/05. 乱码问题.md","autoDesc":true}');export{o as comp,p as data};

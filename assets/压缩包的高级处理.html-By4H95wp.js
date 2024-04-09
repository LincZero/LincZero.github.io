import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as i,a as n}from"./app-IRYUHD7s.js";const l={},d=n(`<h1 id="压缩包的高级处理" tabindex="-1"><a class="header-anchor" href="#压缩包的高级处理"><span>压缩包的高级处理</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="压缩包的高级处理-1" tabindex="-1"><a class="header-anchor" href="#压缩包的高级处理-1"><span>压缩包的高级处理</span></a></h1><p>应用：探究归档是否应该用压缩包存储</p><h2 id="一些疑问" tabindex="-1"><a class="header-anchor" href="#一些疑问"><span>一些疑问</span></a></h2><p>有知道压缩包原理的吗？有几个问题</p><ol><li>不解压的前提下，可以直接打开某个文件/文件夹出来，或者拖拽里面的某个文件/文件夹出来</li><li>的影响不同压缩方式的影响</li><li>是否受加密的影响</li><li>是否受分卷的影响</li></ol><h2 id="实验" tabindex="-1"><a class="header-anchor" href="#实验"><span>实验</span></a></h2><p>文件1与16进制</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>qwertyuiop1
71 77 65 72 74 79 75 69 6f 70 31
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>文件2与16进制</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>qwertyuiop2
71 77 65 72 74 79 75 69 6f 70 32  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>压缩包1</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>50 4b 03 04 14
20 20 20 08 20 06
【1】
    34 53 53 ee 7a 43 c6 0d										？？？
    20 20 20 0b 20 20 20 05 20 20 20
    31 2e 74 78 74												1.txt
    2b 2c 4f 2d 2a a9 2c cd cc 2f 30 04 20 50 4b

01 02 14 20 14 20 20 20 08 20 06 34 53 53 ee 7a 43 c6 0d
【1】
    20 20 20 0b 20 20 20 05 20 24 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
    31 2e 74 78 74												1.txt
    0a 20 20 20 20 20 20 20 01 20								？？？
    
18 20 55 9a 51 fd 6f c4 d7 01 e5 12 14 98 71 c4 d7 01 a2 3b ec e8 6f c4 d7 01 50 4b 05 06 20 20 20 20 01 20 01 20 57 20 20 20 30 20 20 20 20 20  

50 4B 03 04 14 
00 00 00 08 00 06 
	34 53 53 EE 7A 43 C6 0D 
	00 00 00 0B 00 00 00 05 00 00 00 
	31 2E 74 78 74 
	2B 2C 4F 2D 2A A9 2C CD CC 2F 30 04 00 50 4B 
	
01 02 14 00 14 00 00 00 08 00 06 34 53 53 EE 7A 43 C6 0D 00 00 00 0B 00 00 00 05 00 24 00 00 00 00 00 00 00 20 00 00 00 00 00 00 00 31 2E 74 78 74 0A 00 20 00 00 00 00 00 01 00 18 00 55 9A 51 FD 6F C4 D7 01 E5 12 14 98 71 C4 D7 01 A2 3B EC E8 6F C4 D7 01 50 4B 05 06 00 00 00 00 01 00 01 00 57 00 00 00 30 00 00 00 00 00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>压缩包合</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>50 4b 03 04 14
20 20 20 08 20 06
【1】
    34 53 53 ee 7a 43 c6 0d										？？？
    20 20 20 0b 20 20 20 05 20 20 20							-
    31 2e 74 78 74												1.txt
    2b 2c 4f 2d 2a a9 2c cd cc 2f 30 04 20 50 4b				？--？

03 04 14 20 20 20 08 20 03
【2】
    34 53 53 54 2b 4a 5f 0d										？？？
    20 20 20 0b 20 20 20 05 20 20 20							-
    32 2e 74 78 74												2.txt
    2b 2c 4f 2d 2a a9 2c cd cc 2f 30 02 20 50 4b				？--？

01 02 14 20 14 20 20 20 08 20 06 34 53 53 ee 7a 43 c6 0d	结尾标识
【1】
    20 20 20 0b 20 20 20 05 20 24 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
    31 2e 74 78 74												1.txt
    0a 20 20 20 20 20 20 20 01 20 18 20							？？？

55 9a 51 fd 6f c4 d7 01 55 9a 51 fd 6f c4 d7 01 a2 3b ec e8 6f c4 d7 01 50 4b 01 02 14 20 14 20 20 20 08 20 03 34 53 53 54 2b 4a 5f 0d
【2】
    20 20 20 0b 20 20 20 05 20 24 20 20 20 20 20 20 20 20 20 20 20 30 20 20 20
    32 2e 74 78 74												2.txt
    0a 20 20 20 20 20 20 20 01 20 18 20							？？？

20 a3 82 fa 6f c4 d7 01 20 a3 82 fa 6f c4 d7 01 76 77 34 ec 6f c4 d7 01 50 4b 05 06 
20 20 20 20 02 20 02 20 ae 20 20 20 60 20 20 20 20 20  		-
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),a=[d];function s(c,r){return t(),i("div",null,a)}const m=e(l,[["render",s],["__file","压缩包的高级处理.html.vue"]]),b=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/02.%20Theory/Computer/04.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E4%BD%BF%E7%94%A8/%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%8A%BD%E8%B1%A1/%E5%8E%8B%E7%BC%A9%E5%8C%85%E7%9A%84%E9%AB%98%E7%BA%A7%E5%A4%84%E7%90%86.html","title":"压缩包的高级处理","lang":"zh-CN","frontmatter":{"description":"压缩包的高级处理 目录 压缩包的高级处理 应用：探究归档是否应该用压缩包存储 一些疑问 有知道压缩包原理的吗？有几个问题 不解压的前提下，可以直接打开某个文件/文件夹出来，或者拖拽里面的某个文件/文件夹出来 的影响不同压缩方式的影响 是否受加密的影响 是否受分卷的影响 实验 文件1与16进制 文件2与16进制 压缩包1 压缩包合","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/02.%20Theory/Computer/04.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E4%BD%BF%E7%94%A8/%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%8A%BD%E8%B1%A1/%E5%8E%8B%E7%BC%A9%E5%8C%85%E7%9A%84%E9%AB%98%E7%BA%A7%E5%A4%84%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"压缩包的高级处理"}],["meta",{"property":"og:description","content":"压缩包的高级处理 目录 压缩包的高级处理 应用：探究归档是否应该用压缩包存储 一些疑问 有知道压缩包原理的吗？有几个问题 不解压的前提下，可以直接打开某个文件/文件夹出来，或者拖拽里面的某个文件/文件夹出来 的影响不同压缩方式的影响 是否受加密的影响 是否受分卷的影响 实验 文件1与16进制 文件2与16进制 压缩包1 压缩包合"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"压缩包的高级处理\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"压缩包的高级处理","slug":"压缩包的高级处理","link":"#压缩包的高级处理","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"压缩包的高级处理","slug":"压缩包的高级处理-1","link":"#压缩包的高级处理-1","children":[{"level":2,"title":"一些疑问","slug":"一些疑问","link":"#一些疑问","children":[]},{"level":2,"title":"实验","slug":"实验","link":"#实验","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.65,"words":795},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/02. Theory/Computer/04. 计算机使用/计算机抽象/压缩包的高级处理.md","autoDesc":true}');export{m as comp,b as data};

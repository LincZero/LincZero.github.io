import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,a as s}from"./app-IRYUHD7s.js";const e={},i=s(`<h1 id="main-xml" tabindex="-1"><a class="header-anchor" href="#main-xml"><span>Main.XML</span></a></h1><h2 id="main-xml-1" tabindex="-1"><a class="header-anchor" href="#main-xml-1"><span>Main.XML</span></a></h2><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LinearLayout</span>
    <span class="token attr-name"><span class="token namespace">xmlns:</span>android</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fill_parent<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fill_parent<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">android:</span>gravity</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">andeoid:</span>orientation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vertical<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
    
    &lt;TextView
        android:layout_width=&quot;wrap_content&quot;  // 宽度
        android:layout_height=&quot;wrap_content&quot;  // 高度
        android:textSize=&quot;30sp&quot;  // 字号
        android:text=&quot;Hello World&quot; /&gt;  // 文本

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LinearLayout</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件-可视化开发-不用记" tabindex="-1"><a class="header-anchor" href="#组件-可视化开发-不用记"><span>组件（可视化开发，不用记）</span></a></h2><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>LinearLayout 线性布局、嵌套布局
&lt;LinearLayout
    xmlns:android=&quot;http://schemas.android.com/apk/res/android&quot;
    android:layout_width=&quot;fill_parent&quot;                 
    android:layout_height=&quot;fill_parent&quot;
    android:gravity=&quot;center&quot;                   // center，bottom
    andeoid:orientation=&quot;vertical&quot; &gt;           // vertical垂直，horizontal水平
    android:background=&quot;@drawable/my_bg&quot;       // 背景图
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LinearLayout</span><span class="token punctuation">&gt;</span></span>



<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextView</span><span class="token punctuation">/&gt;</span></span>
    android:layout_width=&quot;wrap_content&quot;       // 宽度 // wrap_content，match_parent最大填充但会挤压其他组件出去
    android:layout_height=&quot;wrap_content&quot;      // 高度
    android:layout_weight=&quot;1.0&quot;               // 类似于match_parent，但不会挤压其他组件出界
    android:layout_margin=&quot;20dp&quot;              // 外间距
    android:padding=&quot;20dp&quot;                    // 内边距
    android:text=&quot;Hello World&quot;                // 文本
    android:textSize=&quot;30sp&quot;                   // 文本字号
    android:textColor=&quot;#FFFFFF&quot;               // 文本颜色
    android:textStyle=&quot;bold&quot;                  // 文本样式
        
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImageView</span><span class="token punctuation">/&gt;</span></span>
    android:src=&quot;@drawable/my_android_robot&quot;  // 图片资源

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">/&gt;</span></span>
    android:onClick=&quot;onExitButtonClick&quot;       // 单击事件onClick

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EditText</span><span class="token punctuation">/&gt;</span></span>
    android:hint=&quot;Subject&quot;                    // 提示
    android:inputType=&quot;textEmailSubject&quot;      // 输入类型 // textEmailSubject邮箱主题，textEmailAddress邮箱地址，textMultiLine多行
    android:ems=&quot;10&quot;


    android:id=&quot;@+id/mainTextView1&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[i];function o(d,c){return a(),t("div",null,l)}const p=n(e,[["render",o],["__file","Main.XML.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Android/%E6%9C%89%E9%81%93%E4%BA%91%E6%97%A7%E7%AC%94%E8%AE%B0/file/Main.XML.html","title":"Main.XML","lang":"zh-CN","frontmatter":{"last_time":"2020.03.20","tag":"有道云","description":"Main.XML Main.XML 组件（可视化开发，不用记）","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Android/%E6%9C%89%E9%81%93%E4%BA%91%E6%97%A7%E7%AC%94%E8%AE%B0/file/Main.XML.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Main.XML"}],["meta",{"property":"og:description","content":"Main.XML Main.XML 组件（可视化开发，不用记）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["meta",{"property":"article:tag","content":"有道云"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Main.XML\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"Main.XML","slug":"main-xml","link":"#main-xml","children":[{"level":2,"title":"Main.XML","slug":"main-xml-1","link":"#main-xml-1","children":[]},{"level":2,"title":"组件（可视化开发，不用记）","slug":"组件-可视化开发-不用记","link":"#组件-可视化开发-不用记","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.88,"words":264},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Platform/Android/有道云旧笔记/file/Main.XML.md","autoDesc":true}');export{p as comp,m as data};

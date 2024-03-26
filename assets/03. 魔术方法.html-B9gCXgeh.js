import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as t,a as s}from"./app-CyJMR3JQ.js";const a={},i=s(`<h1 id="python" tabindex="-1"><a class="header-anchor" href="#python"><span>Python</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="魔术方法" tabindex="-1"><a class="header-anchor" href="#魔术方法"><span>魔术方法</span></a></h1><p>参考</p><ul><li>Python常用魔术方法一览表，http://c.biancheng.net/view/7817.html</li></ul><h2 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h2><p>Python 中的类有一些特殊的方法</p><ul><li>特征：方法名<strong>前后分别添加了两个下画线“__”</strong>，这些方法统称 “魔术方法”（Magic Method）</li><li>作用：使用魔术方法可以实现运算符重载，也可以将复杂的逻辑封装成简单的 API。</li></ul><h2 id="常用魔术方法" tabindex="-1"><a class="header-anchor" href="#常用魔术方法"><span>常用魔术方法</span></a></h2><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># 常用</span>
__new__ 		创建类并返回这个类的实例
__init__ 		<span class="token comment"># 可理解为“构造函数”，在对象初始化的时候调用，使用传入的参数初始化该实例</span>
__del__ 		<span class="token comment"># 可理解为“析构函数”，当一个对象进行垃圾回收时调用</span>
__metaclass__ 	定义当前类的元类
__class__ 		查看对象所属的类  <span class="token comment"># 但是一般不是用type()么</span>
__base__ 		获取当前类的父类
__bases__ 		获取当前类的所有父类
__str__ 		<span class="token comment"># 定义当前类的实例的文本显示内容</span>
__getattribute__ 	定义属性被访问时的行为
__getattr__ 	<span class="token comment"># 定义试图访问一个不存在的属性时的行为</span>
__setattr__ 	<span class="token comment"># 定义对属性进行赋值和修改操作时的行为</span>
__delattr__ 	定义删除属性时的行为
__copy__ 		定义对类的实例调用 copy<span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token punctuation">)</span> 获得对象的一个浅拷贝时所产生的行为
__deepcopy__ 	定义对类的实例调用 copy<span class="token punctuation">.</span>deepcopy<span class="token punctuation">(</span><span class="token punctuation">)</span> 获得对象的一个深拷贝时所产生的行为

<span class="token comment"># 操作符重载，相当于C++中的运算符重载：举例：operator+()</span>
__eq__ 		定义相等符号“<span class="token operator">==</span>”的行为
__ne__ 		定义不等符号“<span class="token operator">!=</span>”的行为
__lt__ 		定义小于符号“<span class="token operator">&lt;</span>”的行为
__gt__ 		定义大于符号“<span class="token operator">&gt;</span>”的行为
__le__ 		定义小于等于符号“<span class="token operator">&lt;=</span>”的行为
__ge__ 		定义大于等于符号“<span class="token operator">&gt;=</span>”的行为
__add__ 	实现操作符“<span class="token operator">+</span>”表示的加法
__sub__ 	实现操作符“<span class="token operator">-</span>”表示的减法
__mul__ 	实现操作符“<span class="token operator">*</span>”表示的乘法
__div__ 	实现操作符“<span class="token operator">/</span>”表示的除法
__mod__ 	实现操作符“％”表示的取模<span class="token punctuation">(</span>求余数<span class="token punctuation">)</span>
__pow__ 	实现操作符“<span class="token operator">**</span>”表示的指数操作
__and__ 	实现按位与操作
__or__ 		实现按位或操作
__xor__ 	实现按位异或操作

<span class="token comment"># 容器类、以及迭代器</span>
__len__ 		用于自定义容器类型，表示容器的长度
__getitem__ 	用于自定义容器类型，定义当某一项被访问时，使用 self<span class="token punctuation">[</span>key<span class="token punctuation">]</span> 所产生的行为
__setitem__ 	用于自定义容器类型，定义执行 self<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">=</span>value 时产生的行为
__delitem__ 	用于自定义容器类型，定义一个项目被删除时的行为
__iter__ 		用于自定义容器类型，一个容器迭代器  <span class="token comment"># __next__好像也是</span>
__reversed__ 	用于自定义容器类型，定义当 <span class="token builtin">reversed</span><span class="token punctuation">(</span> <span class="token punctuation">)</span> 被调用时的行为
__contains__ 	用于自定义容器类型，定义调用 <span class="token keyword">in</span> 和 <span class="token keyword">not</span> <span class="token keyword">in</span> 来测试成员是否存在的时候所产生的行为
__missing__ 	用于自定义容器类型，定义在容器中找不到 key 时触发的行为
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下代码使用魔术方法，采用运算符重载的方式实现了向量</p>`,11),l=[i];function o(c,_){return e(),t("div",null,l)}const d=n(a,[["render",o],["__file","03. 魔术方法.html.vue"]]),u=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/Python/05.%20%E5%B0%81%E8%A3%85/03.%20%E9%AD%94%E6%9C%AF%E6%96%B9%E6%B3%95.html","title":"Python","lang":"zh-CN","frontmatter":{"description":"Python 目录 魔术方法 参考 Python常用魔术方法一览表，http://c.biancheng.net/view/7817.html 简概 Python 中的类有一些特殊的方法 特征：方法名前后分别添加了两个下画线“__”，这些方法统称 “魔术方法”（Magic Method） 作用：使用魔术方法可以实现运算符重载，也可以将复杂的逻辑封装成简...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/Python/05.%20%E5%B0%81%E8%A3%85/03.%20%E9%AD%94%E6%9C%AF%E6%96%B9%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Python"}],["meta",{"property":"og:description","content":"Python 目录 魔术方法 参考 Python常用魔术方法一览表，http://c.biancheng.net/view/7817.html 简概 Python 中的类有一些特殊的方法 特征：方法名前后分别添加了两个下画线“__”，这些方法统称 “魔术方法”（Magic Method） 作用：使用魔术方法可以实现运算符重载，也可以将复杂的逻辑封装成简..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"Python","slug":"python","link":"#python","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"魔术方法","slug":"魔术方法","link":"#魔术方法","children":[{"level":2,"title":"简概","slug":"简概","link":"#简概","children":[]},{"level":2,"title":"常用魔术方法","slug":"常用魔术方法","link":"#常用魔术方法","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.56,"words":767},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/01. Language/Python/05. 封装/03. 魔术方法.md","autoDesc":true}');export{d as comp,u as data};

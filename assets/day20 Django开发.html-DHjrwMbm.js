import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as t}from"./app-CsHIiQ5U.js";const e={},p=t(`<h1 id="day20-django开发" tabindex="-1"><a class="header-anchor" href="#day20-django开发"><span>day20 Django开发</span></a></h1><p>关于考试：</p><ul><li><p>期中考试 50道题</p></li><li><p>期末考试 100道题</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>以前：下午2:00（助教老师细说）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="_1-知识点复习" tabindex="-1"><a class="header-anchor" href="#_1-知识点复习"><span>1.知识点复习</span></a></h2><h3 id="_1-1-基础入门" tabindex="-1"><a class="header-anchor" href="#_1-1-基础入门"><span>1.1 基础入门</span></a></h3><ul><li><p>编码</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>编码基础知识点：utf-8、unicode、gbk、ascii
默认解释器编码：
	- Python2：ascii（ # -*- coding:utf-8 -*- )
	- Python3：utf-8（重要）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>输入和输出</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>print
input，用户输入的永远是字符串类型。

data = input(&quot;请输入序号：&quot;) # 1
print(data) # &quot;1&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>变量</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>规范：字母、数字、下划线；数字不能开头；不能是py内置关键字。
建议：
	<span class="token operator">-</span> 见名知意
    <span class="token operator">-</span> 多个单词，用下划线连接。
    <span class="token operator">-</span> 全局变量用大写（ DATA_LIST、USER_INFO  ）；局部变量小写（user_age）。
    
注意：
	全局变量    GET_INFO
    局部变量    get_info
	函数名      get_info
    类名        GetInfo
    文件名      get_info
    包名称      get_info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>异常处理【补充】</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>data <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入：&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 你好</span>
res <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>

<span class="token comment"># 这个代码是有风险，可能会报错。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;开始&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    data <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入：&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 123  / 你好</span>
    res <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;出错了&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;结束&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>循环中for/while内部都可以用 break、continue</p></li><li><p>字符串格式化</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>data = &quot;我是{}，姓名是{}，年龄是{}&quot;.format(&quot;xx&quot;,123,999)

data = &quot;我是{0}，姓名是{1}，年龄是{2}&quot;.format(&quot;xx&quot;,123,999)

data = &quot;我是{0}，姓名是{0}，年龄是{2}&quot;.format(&quot;xx&quot;,123)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运算符</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- 传统的运算符
- 逻辑运算符
	- 常见操作，最终的到的结果：True/False
		if 1&gt;10 and 9&lt;8:
			pass
		else:
			pass
	- 非传统，最终的结果是：第一个或第二个值。
		data = 值1 and 值2
		v1 = 5 and 9  # 9
		v2 = 0 and 10 # 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_1-2-数据类型" tabindex="-1"><a class="header-anchor" href="#_1-2-数据类型"><span>1.2 数据类型</span></a></h3><ul><li><p>字符串类型</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- 不可变类型；
- 常见方法：strip/split/replace/join
	v1 = &quot;root&quot;
	data = v1.upper()
	print(v1)   # root
	print(data) # ROOT
	
- 公共：索引、切片、循环
	v1 = &quot;root&quot;
	v1[1] = &quot;X&quot;  # 报错，不可变
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>列表类型</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- 可变类型
- 常见方法：append/insert/pop/remove
- 公共：索引、切片、循环
	v1 = [11,22,33,44,55]
	
	v1[0]
	v1[1:3]      - 前取后不取
	v1[1:-1]
- 列表的推导式
	data = [ i for i in range(10)]
	data = [ i for i in range(10) if i&lt;5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>字典类型</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- 可变类型
- 字典的键是有要求：可哈希类型，目前不可哈希：list/dict/set。
- 扩展：python3.6+字典有序。
- 常见的功能：keys、values、items、get
	data = {}
	v1 = data.get(&quot;k1&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>关于元组</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>v1 = (11,)
v2 = (11)   # 11
v3 = 11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>其他数据类型</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>其他类型转布尔类型时，哪些为False： 空、0、None
其他类型转自己类型时，自己的类名()
	int(&quot;123&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_1-3-函数" tabindex="-1"><a class="header-anchor" href="#_1-3-函数"><span>1.3 函数</span></a></h3><ul><li><p>定义</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

func<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>参数</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span>v2<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span> v2<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span><span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>返回值</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token operator">-</span> 没有返回值，默认返回<span class="token boolean">None</span>
    <span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span>v2<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">999</span><span class="token punctuation">)</span>
<span class="token operator">-</span> 一个返回值
    <span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span>v2<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token number">123</span>
    
    res <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token comment"># 123</span>
    
<span class="token operator">-</span> 多个返回值
    <span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span>v2<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token number">123</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">123</span>
    
    res <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token comment"># (123,999,123)</span>
    
    
	<span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span>v2<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token number">123</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">123</span>
    
    d1<span class="token punctuation">,</span>d2<span class="token punctuation">,</span>c3 <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>v1<span class="token punctuation">,</span>v2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">]</span>
v1<span class="token punctuation">,</span>v2<span class="token punctuation">,</span>v3 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>lambda表达式（匿名函数）</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> arg <span class="token operator">+</span> <span class="token number">100</span>

func <span class="token operator">=</span> <span class="token keyword">lambda</span> arg<span class="token punctuation">:</span>arg<span class="token operator">+</span><span class="token number">100</span>
v1 <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span> <span class="token comment"># 200</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>内置函数</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>max/min/all/any/help/hex/oct/bin..

open，文件操作。
    f = open(&quot;xx.log&quot;,mode=&#39;r&#39;)
    data = f.read()
    f.close()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>文件操作</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- 模式：r/w/a ； rb/wb/ab
- 打开 &amp; 关闭
	with open(&quot;xx.log&quot;,mode=&#39;r&#39;) as f:
		f.read()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_1-4-模块" tabindex="-1"><a class="header-anchor" href="#_1-4-模块"><span>1.4 模块</span></a></h3><ul><li><p>分类</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- 自定义模块：自己写文件/文件夹
- 内置模块：time/datetime/json/hashlib/random/re等
- 第三方模块：openpyxl/requests/bs4/flask/django等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>自定义模块</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- sys.path，Python内部导入模块时，根据目录去寻找。
- 一定不要让自己写的模块名和内置的模块名重复（***）
- 导入模块：
	import xxx
	from xxx import xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>内置模块</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- 时间部分：time/datetime/字符串类型。
- random：随机生成数字。
- hashlib：加密（md5加密、md5加密+加盐） 防止被撞库。
- json：
	- JSON格式的字符串： 内部字符串双引号、内部[] 
	- json.dumps
	- json.loads
- re和正则
	- 正则：\\d \\w ; 贪婪匹配。
	- re.search/re.match/      re.findall
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>第三方模块</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- 安装第三方模块：pip、源码、wheel
- 常见第三方模块：
	- requests
	- bs4
	- openpyxl
	- python-docx
	- flask/django （flask简洁（轻量级）；django功能强大）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_1-5-面向对象" tabindex="-1"><a class="header-anchor" href="#_1-5-面向对象"><span>1.5 面向对象</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- 面向对象的三大特性：封装、继承、多态。
- 理解，读懂源码和代码。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6-mysql数据库" tabindex="-1"><a class="header-anchor" href="#_1-6-mysql数据库"><span>1.6 MySQL数据库</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- 数据库
- 表
- 数据行
更多知识：https://www.bilibili.com/video/BV15R4y1b7y9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>show databases;
use 数据库;

show tables;
desc 表名;

select * from 表;
insert into 表(列,列,列)values(...)
update  表 set 列=值;
delete from 表 where 条件;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python连接并操作MySQL：</p><ul><li><p>pymysql 【自己原生写】</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pip install pymysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>mysqlclient 【django内部】</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pip install mysqlclient
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>MySQLdb （默认不支持python3）</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pip intall MySQLdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><p>当使用Python代码去操作MySQL时，一定要防止SQL注入的问题。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># SQL语句不要用字符串格式化去拼接。</span>

<span class="token keyword">import</span> pymysql
<span class="token comment"># 1.连接MySQL</span>
conn <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">3306</span><span class="token punctuation">,</span> user<span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span> passwd<span class="token operator">=</span><span class="token string">&quot;root123&quot;</span><span class="token punctuation">,</span> charset<span class="token operator">=</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">,</span> db<span class="token operator">=</span><span class="token string">&#39;unicom&#39;</span><span class="token punctuation">)</span>
cursor <span class="token operator">=</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span>cursor<span class="token operator">=</span>pymysql<span class="token punctuation">.</span>cursors<span class="token punctuation">.</span>DictCursor<span class="token punctuation">)</span>

<span class="token comment"># 【错误】不要这么写</span>
sql <span class="token operator">=</span> <span class="token string">&quot;select * from admin where id &gt; %s&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
<span class="token comment"># 【正确】这么写</span>
cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&quot;select * from admin where id &gt; %s&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># 获取符合条件的第一条数据，字典    None</span>
res <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchone<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>  <span class="token comment"># {&#39;id&#39;: 3, &#39;username&#39;: &#39;集宁&#39;, &#39;password&#39;: &#39;qwe123&#39;, &#39;mobile&#39;: &#39;1999999999&#39;}</span>

<span class="token comment"># 3.关闭连接</span>
cursor<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-7-前端开发" tabindex="-1"><a class="header-anchor" href="#_1-7-前端开发"><span>1.7 前端开发</span></a></h3><ul><li><p>HTML</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- 块级和行内标签（div、span）
	块级：div/h系列
	行内：span/a （设置高度、宽度、边距无效）
- Form表单
	&lt;form method=&quot;post&quot; action=&quot;地址&quot;&gt; 
		&lt;input ....
		
		&lt;input type=&#39;submit&#39; ... /&gt;
	&lt;/form&gt;
	
- 关于a标签
	&lt;a href=&quot;www.baidu.com&quot;&gt;百度&lt;/a&gt;   超链接去跳转。
	做锚点
        &lt;a href=&quot;#m1&quot;&gt;第一章&lt;/a&gt;
        &lt;a href=&quot;#m2&quot;&gt;第二章&lt;/a&gt;
        &lt;div id=&quot;m1&quot; style=&quot;height: 1000px;&quot;&gt;第一章 谢新雪&lt;/div&gt;
        &lt;div id=&quot;m2&quot; style=&quot;height: 1000px;&quot;&gt;第二章 单独的&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>CSS</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- 位置
	- 标签 &lt;div style=&quot;xxx&quot;&gt;
	- style代码块
		&lt;style&gt;
			div { }
			#v1 { }
			.v2 {}
		&lt;/style&gt;
	- 文件中
	
- 选择器
	div { }
	#v1 { }
	.v2 { }
	div[xx=&#39;11&#39;] { }
	
- 样式
	color;fonts-ize; background-color; padding; margin;
	float:left; ,脱离文档流。 clear:both; :after
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>JavaScript &amp; jQuery</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- 本质上：找到标签；操作标签。

- 找标签
	$(&quot;#x1&quot;)
	$(&quot;.x1&quot;)
	$(&quot;div&quot;)
	
	$(&quot;input[type=&#39;text&#39;]&quot;)   找到 input 标签且 type=&#39;text&#39;
- 操作标签
	$(&quot;#x1&quot;).text()            &lt;div id=&#39;x1&#39;&gt;dd&lt;/div&gt;
	$(&quot;#x1&quot;).text(&quot;xxx&quot;)       &lt;div id=&#39;x1&#39;&gt;xxx&lt;/div&gt;
	
	$(&quot;#x1&quot;).val()             &lt;input id=&#39;x1&#39; /&gt;
	$(&quot;#x1&quot;).val(&quot;xxx&quot;)        &lt;input id=&#39;x1&#39; /&gt;
	
	$(&quot;#x1&quot;).attr(&quot;uu&quot;)           &lt;div id=&#39;x1&#39; uu=&quot;123&quot;&gt;dd&lt;/div&gt;
	$(&quot;#x1&quot;).attr(&quot;uu&quot;,&quot;999&quot;)     &lt;div id=&#39;x1&#39; uu=&quot;999&quot;&gt;dd&lt;/div&gt;
	
	$(&quot;#x1&quot;).empty()          &lt;div id=&#39;x1&#39;&gt;dd&lt;/div&gt;  - 清空内容
	$(&quot;#x1&quot;).remove()         &lt;div id=&#39;x1&#39;&gt;dd&lt;/div&gt;  - 整个标签删除
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>BootStrap</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- 支持响应式布局，根据屏幕的宽度调整布局。
- 栅格，12份。
- 常见的样式：
	- container  / container-fluid
	- 面板
	- 按钮
	- 表单
	- 表格
	- 对话框
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>第三方插件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- 插件一般都包含：CSS、JavaScript，开发使用时候
	- 引入css、js（依赖jQuery）
	- 使用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>关于注释</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- Python语言
	# 注释
    &quot;&quot;&quot; 注释 &quot;&quot;&quot;
- HTML
	&lt;!-- --&gt;
    
- CSS注释
	/* 注释 */
    
- JavaScript
	// 注释
    /* 注释 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_1-8-django" tabindex="-1"><a class="header-anchor" href="#_1-8-django"><span>1.8 Django</span></a></h3><ul><li><p>安装</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pip install django
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>python安装目录下：
	- lib/site-packages/django源码包
	- Scripts/django-admin.exe  文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建Django项目</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&gt;&gt;&gt;django-admin  startproject  项目名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>创建APP</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&gt;&gt;&gt;cd 项目目录
&gt;&gt;&gt;python manange.py startapp app名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>注册app</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- 不注册，models.py生成数据库表行为不执行。
- 不注册，模板文件、静态文件，不回去app目录下找。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>static目录，静态文件目录</p></li><li><p>templates目录，模板文件目录（HTML）</p></li><li><p>表结构设计 app01/modes.py下执行</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>db <span class="token keyword">import</span> models

<span class="token keyword">class</span> <span class="token class-name">UserInfo</span><span class="token punctuation">(</span>models<span class="token punctuation">.</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    v1 <span class="token operator">=</span> models<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">32</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&gt;&gt;&gt;python manage.py makemigrations
&gt;&gt;&gt;python manage.py migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>urls.py 中编写路由。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>urls <span class="token keyword">import</span> path<span class="token punctuation">,</span>re_path
<span class="token keyword">from</span> app01 <span class="token keyword">import</span> admin


urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    path<span class="token punctuation">(</span><span class="token string">&#39;admin/list/&#39;</span><span class="token punctuation">,</span> admin<span class="token punctuation">.</span>admin_list<span class="token punctuation">)</span><span class="token punctuation">,</span>
    path<span class="token punctuation">(</span><span class="token string">&#39;admin/&lt;int:nid&gt;/delete/&#39;</span><span class="token punctuation">,</span> admin<span class="token punctuation">.</span>admin_delete<span class="token punctuation">)</span><span class="token punctuation">,</span>
    re_path<span class="token punctuation">(</span><span class="token string">&#39;admin/(?P&lt;nid&gt;\\d+)/delete/&#39;</span><span class="token punctuation">,</span> admin<span class="token punctuation">.</span>admin_delete<span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>视图函数</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">admin_list</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    k1 <span class="token operator">=</span> request<span class="token punctuation">.</span>POST<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;k1&quot;</span><span class="token punctuation">)</span>
    
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> 业务处理
    
    <span class="token keyword">return</span> 数据

<span class="token operator">-</span> 默认参数request，包含请求相关的所有数据。
	request<span class="token punctuation">.</span>method
    request<span class="token punctuation">.</span>GET
    request<span class="token punctuation">.</span>POST
    request<span class="token punctuation">.</span>FILES，上传文件。
    request<span class="token punctuation">.</span>path_info，获取当前请求的URL
    	http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">:</span><span class="token number">8000</span><span class="token operator">/</span>depart<span class="token operator">/</span>add<span class="token operator">/</span>  <span class="token operator">-</span><span class="token operator">&gt;</span>    <span class="token operator">/</span>depart<span class="token operator">/</span>add<span class="token operator">/</span>
                
<span class="token operator">-</span> 返回值
	<span class="token keyword">return</span> HttpResponse<span class="token punctuation">(</span><span class="token string">&quot;字符串&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> JSONResponse<span class="token punctuation">(</span> <span class="token punctuation">{</span><span class="token string">&quot;status&quot;</span><span class="token punctuation">:</span><span class="token number">123</span><span class="token punctuation">,</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token number">456</span><span class="token punctuation">,</span><span class="token number">55</span><span class="token punctuation">,</span><span class="token number">66</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">}</span> <span class="token punctuation">)</span>
		<span class="token keyword">return</span> JSONResponse<span class="token punctuation">(</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token number">33</span><span class="token punctuation">,</span><span class="token number">44</span><span class="token punctuation">]</span> <span class="token punctuation">,</span>safe<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span><span class="token string">&quot;xxx.html&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>值<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> redirect<span class="token punctuation">(</span><span class="token string">&quot;http://127.0.0.1:8000/depart/add/&quot;</span><span class="token punctuation">)</span>
			<span class="token keyword">return</span> redirect<span class="token punctuation">(</span><span class="token string">&quot;/depart/add/&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>数据库的ORM操作</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># 增加</span>
models<span class="token punctuation">.</span>类<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>create<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;武沛齐&quot;</span><span class="token punctuation">,</span>age<span class="token operator">=</span><span class="token number">19</span><span class="token punctuation">)</span>
models<span class="token punctuation">.</span>类<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>create<span class="token punctuation">(</span><span class="token operator">**</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;武沛齐&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span><span class="token number">19</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

obj <span class="token operator">=</span> models<span class="token punctuation">.</span>类<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;武沛齐&quot;</span><span class="token punctuation">,</span>age<span class="token operator">=</span><span class="token number">19</span><span class="token punctuation">)</span>
obj<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>

obj_list <span class="token operator">=</span> <span class="token punctuation">[</span>
    models<span class="token punctuation">.</span>类<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;武沛齐&quot;</span><span class="token punctuation">,</span>age<span class="token operator">=</span><span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    models<span class="token punctuation">.</span>类<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;武沛齐&quot;</span><span class="token punctuation">,</span>age<span class="token operator">=</span><span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    models<span class="token punctuation">.</span>类<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;武沛齐&quot;</span><span class="token punctuation">,</span>age<span class="token operator">=</span><span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    models<span class="token punctuation">.</span>类<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;武沛齐&quot;</span><span class="token punctuation">,</span>age<span class="token operator">=</span><span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    models<span class="token punctuation">.</span>类<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;武沛齐&quot;</span><span class="token punctuation">,</span>age<span class="token operator">=</span><span class="token number">19</span><span class="token punctuation">)</span>
    。。。
<span class="token punctuation">]</span>
models<span class="token punctuation">.</span>类<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>bulk_create<span class="token punctuation">(</span>obj_list<span class="token punctuation">,</span>batch_size<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># 查询</span>
queyrset <span class="token operator">=</span> models<span class="token punctuation">.</span>类<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;武沛齐&quot;</span><span class="token punctuation">,</span>age<span class="token operator">=</span><span class="token number">19</span><span class="token punctuation">)</span>         <span class="token comment"># [obj,obj,]</span>
queyrset <span class="token operator">=</span> models<span class="token punctuation">.</span>类<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span><span class="token operator">**</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;武沛齐&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span><span class="token number">19</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment"># []</span>
obj <span class="token operator">=</span> models<span class="token punctuation">.</span>类<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;武沛齐&quot;</span><span class="token punctuation">,</span>age<span class="token operator">=</span><span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">.</span>first<span class="token punctuation">(</span><span class="token punctuation">)</span>      <span class="token comment"># obj / None</span>

queyrset <span class="token operator">=</span> models<span class="token punctuation">.</span>类<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>age<span class="token operator">=</span><span class="token number">19</span><span class="token punctuation">)</span>
queyrset <span class="token operator">=</span> models<span class="token punctuation">.</span>类<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>age__gt<span class="token operator">=</span><span class="token number">19</span><span class="token punctuation">)</span>
queyrset <span class="token operator">=</span> models<span class="token punctuation">.</span>类<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>age__gte<span class="token operator">=</span><span class="token number">19</span><span class="token punctuation">)</span>
queyrset <span class="token operator">=</span> models<span class="token punctuation">.</span>类<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>age__lt<span class="token operator">=</span><span class="token number">19</span><span class="token punctuation">)</span>
queyrset <span class="token operator">=</span> models<span class="token punctuation">.</span>类<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>age__lte<span class="token operator">=</span><span class="token number">19</span><span class="token punctuation">)</span>
queyrset <span class="token operator">=</span> models<span class="token punctuation">.</span>类<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>age__gt<span class="token operator">=</span><span class="token number">19</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&quot;武沛齐&quot;</span><span class="token punctuation">)</span>
queyrset <span class="token operator">=</span> models<span class="token punctuation">.</span>类<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>name__contains<span class="token operator">=</span><span class="token string">&quot;中国&quot;</span><span class="token punctuation">)</span>
queyrset <span class="token operator">=</span> models<span class="token punctuation">.</span>类<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>exclude<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token number">9</span><span class="token punctuation">)</span>  <span class="token comment"># id !=9</span>

queyrset <span class="token operator">=</span> models<span class="token punctuation">.</span>类<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>age<span class="token operator">=</span><span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">.</span>order_by<span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span>
queyrset <span class="token operator">=</span> models<span class="token punctuation">.</span>类<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>age<span class="token operator">=</span><span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">.</span>order_by<span class="token punctuation">(</span><span class="token string">&quot;-id&quot;</span><span class="token punctuation">)</span>
queyrset <span class="token operator">=</span> models<span class="token punctuation">.</span>类<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>age<span class="token operator">=</span><span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">.</span>order_by<span class="token punctuation">(</span><span class="token string">&quot;-id&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>

queyrset <span class="token operator">=</span> models<span class="token punctuation">.</span>类<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>age<span class="token operator">=</span><span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># 更新</span>
queyrset <span class="token operator">=</span> models<span class="token punctuation">.</span>类<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>update<span class="token punctuation">(</span>age<span class="token operator">=</span><span class="token number">19</span><span class="token punctuation">,</span>name<span class="token operator">=</span><span class="token string">&quot;武沛齐&quot;</span><span class="token punctuation">)</span>
queyrset <span class="token operator">=</span> models<span class="token punctuation">.</span>类<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token operator">**</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;武沛齐&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span><span class="token number">19</span><span class="token punctuation">}</span><span class="token punctuation">)</span>


obj <span class="token operator">=</span> models<span class="token punctuation">.</span>类<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>first<span class="token punctuation">(</span><span class="token punctuation">)</span>
obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;武沛齐&quot;</span>
obj<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">19</span>
obj<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># 删除</span>
models<span class="token punctuation">.</span>类<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>delete<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>整理的所有ORM操作：
	https://www.cnblogs.com/wupeiqi/articles/6216618.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Form和ModelForm组件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- 自动生成HTML标签
- 对用户请求的数据进行校验
	- 自动保存到数据库（ModelForm）
- 错误信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> django <span class="token keyword">import</span> forms

<span class="token keyword">class</span> <span class="token class-name">UserForm</span><span class="token punctuation">(</span>forms<span class="token punctuation">.</span>Form<span class="token punctuation">)</span><span class="token punctuation">:</span>
    xx <span class="token operator">=</span> forms<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
    
    
<span class="token keyword">class</span> <span class="token class-name">UserModelForm</span><span class="token punctuation">(</span>forms<span class="token punctuation">.</span>ModelForm<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        model <span class="token operator">=</span> models<span class="token punctuation">.</span>类
        fields <span class="token operator">=</span> <span class="token string">&quot;__all__&quot;</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>form <span class="token operator">=</span> UserModelForm<span class="token punctuation">(</span>data<span class="token operator">=</span>request<span class="token punctuation">.</span>POST<span class="token punctuation">,</span>instance<span class="token operator">=</span>对象<span class="token punctuation">)</span>
<span class="token keyword">if</span> form<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    form<span class="token punctuation">.</span>cleaned_data
<span class="token keyword">else</span><span class="token punctuation">:</span>
    form<span class="token punctuation">.</span>errors
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>关于POST提交CSRF认证</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>post<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
    {% csrf_token %}
    ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想要免除csrf认证。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>views<span class="token punctuation">.</span>decorators<span class="token punctuation">.</span>csrf <span class="token keyword">import</span> csrf_exempt

<span class="token decorator annotation punctuation">@csrf_exempt</span>
<span class="token keyword">def</span> <span class="token function">order_add</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Cookie和Session</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>cookie，本质上保存在浏览器端的键值对。 
session，保存服务器端（django是将session默认存储在数据库中）

def order_add(request):
    request.session[&#39;xx&#39;] = 123
    
def logout(request):
	request.session.clear()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>中间件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- 类 process_request / process_response
- 注册中间件类
    MIDDLEWARE = [
        &#39;django.middleware.security.SecurityMiddleware&#39;,
        &#39;django.contrib.sessions.middleware.SessionMiddleware&#39;,
        &#39;django.middleware.common.CommonMiddleware&#39;,
        &#39;django.middleware.csrf.CsrfViewMiddleware&#39;,
        &#39;django.contrib.auth.middleware.AuthenticationMiddleware&#39;,
        &#39;django.contrib.messages.middleware.MessageMiddleware&#39;,
        &#39;django.middleware.clickjacking.XFrameOptionsMiddleware&#39;,
        &#39;app01.middleware.auth.AuthMiddleware&#39;,
    ]
- django请求到达之后，自动会执行相应的方法。

- process_request
	- 没有返回值或返回None，继续向后执行。
	- 返回redirect/render/HttpResponse/JsonReponse，拦截请求不再继续向后之后。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>图片验证码</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pip install pillow
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- 创建图片并在图片上写文字
- 字体文件
- 自定义模块 check_code
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>分页组件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>开发时候会用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="_2-关于文件上传" tabindex="-1"><a class="header-anchor" href="#_2-关于文件上传"><span>2.关于文件上传</span></a></h2><h3 id="_2-1-基本操作" tabindex="-1"><a class="header-anchor" href="#_2-1-基本操作"><span>2.1 基本操作</span></a></h3><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>post<span class="token punctuation">&quot;</span></span> <span class="token attr-name">enctype</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>multipart/form-data<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {% csrf_token %}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>avatar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>提交<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>shortcuts <span class="token keyword">import</span> render<span class="token punctuation">,</span> HttpResponse


<span class="token keyword">def</span> <span class="token function">upload_list</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> request<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">&#39;upload_list.html&#39;</span><span class="token punctuation">)</span>

    <span class="token comment"># # &#39;username&#39;: [&#39;big666&#39;]</span>
    <span class="token comment"># print(request.POST)  # 请求体中数据</span>
    <span class="token comment"># # {&#39;avatar&#39;: [&lt;InMemoryUploadedFile: 图片 1.png (image/png)&gt;]}&gt;</span>
    <span class="token comment"># print(request.FILES)  # 请求发过来的文件 {}</span>

    file_object <span class="token operator">=</span> request<span class="token punctuation">.</span>FILES<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;avatar&quot;</span><span class="token punctuation">)</span>
    <span class="token comment"># print(file_object.name)  # 文件名：WX20211117-222041@2x.png</span>

    f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>file_object<span class="token punctuation">.</span>name<span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> chunk <span class="token keyword">in</span> file_object<span class="token punctuation">.</span>chunks<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>chunk<span class="token punctuation">)</span>
    f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> HttpResponse<span class="token punctuation">(</span><span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="案例-批量上传数据" tabindex="-1"><a class="header-anchor" href="#案例-批量上传数据"><span>案例：批量上传数据</span></a></h3><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>post<span class="token punctuation">&quot;</span></span> <span class="token attr-name">enctype</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>multipart/form-data<span class="token punctuation">&quot;</span></span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/depart/multi/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {% csrf_token %}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form-group<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>exc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>上传<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn btn-info btn-sm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">depart_multi</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; 批量删除（Excel文件）&quot;&quot;&quot;</span>
    <span class="token keyword">from</span> openpyxl <span class="token keyword">import</span> load_workbook

    <span class="token comment"># 1.获取用户上传的文件对象</span>
    file_object <span class="token operator">=</span> request<span class="token punctuation">.</span>FILES<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;exc&quot;</span><span class="token punctuation">)</span>

    <span class="token comment"># 2.对象传递给openpyxl，由openpyxl读取文件的内容</span>
    wb <span class="token operator">=</span> load_workbook<span class="token punctuation">(</span>file_object<span class="token punctuation">)</span>
    sheet <span class="token operator">=</span> wb<span class="token punctuation">.</span>worksheets<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

    <span class="token comment"># 3.循环获取每一行数据</span>
    <span class="token keyword">for</span> row <span class="token keyword">in</span> sheet<span class="token punctuation">.</span>iter_rows<span class="token punctuation">(</span>min_row<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        text <span class="token operator">=</span> row<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value
        exists <span class="token operator">=</span> models<span class="token punctuation">.</span>Department<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>title<span class="token operator">=</span>text<span class="token punctuation">)</span><span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> exists<span class="token punctuation">:</span>
            models<span class="token punctuation">.</span>Department<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>create<span class="token punctuation">(</span>title<span class="token operator">=</span>text<span class="token punctuation">)</span>

    <span class="token keyword">return</span> redirect<span class="token punctuation">(</span><span class="token string">&#39;/depart/list/&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="案例-混合数据-form" tabindex="-1"><a class="header-anchor" href="#案例-混合数据-form"><span>案例：混合数据（Form）</span></a></h3><p>提交页面时：用户输入数据 + 文件（输入不能为空、报错）。</p><ul><li>Form生成HTML标签：type=file</li><li>表单的验证</li><li>form.cleaned_data 获取 数据 + 文件对象</li></ul><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code>{% extends &#39;layout.html&#39; %}


{% block content %}

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel panel-default<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel-heading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> {{ title }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel-body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>post<span class="token punctuation">&quot;</span></span> <span class="token attr-name">enctype</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>multipart/form-data<span class="token punctuation">&quot;</span></span> <span class="token attr-name">novalidate</span> <span class="token punctuation">&gt;</span></span>
                    {% csrf_token %}

                    {% for field in form %}
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form-group<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>{{ field.label }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
                            {{ field }}
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>{{ field.errors.0 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                    {% endfor %}

                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn btn-primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>提 交<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

{% endblock %}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> django <span class="token keyword">import</span> forms
<span class="token keyword">from</span> app01<span class="token punctuation">.</span>utils<span class="token punctuation">.</span>bootstrap <span class="token keyword">import</span> BootStrapForm


<span class="token keyword">class</span> <span class="token class-name">UpForm</span><span class="token punctuation">(</span>BootStrapForm<span class="token punctuation">)</span><span class="token punctuation">:</span>
    bootstrap_exclude_fields <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">]</span>

    name <span class="token operator">=</span> forms<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>label<span class="token operator">=</span><span class="token string">&quot;姓名&quot;</span><span class="token punctuation">)</span>
    age <span class="token operator">=</span> forms<span class="token punctuation">.</span>IntegerField<span class="token punctuation">(</span>label<span class="token operator">=</span><span class="token string">&quot;年龄&quot;</span><span class="token punctuation">)</span>
    img <span class="token operator">=</span> forms<span class="token punctuation">.</span>FileField<span class="token punctuation">(</span>label<span class="token operator">=</span><span class="token string">&quot;头像&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">upload_form</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    title <span class="token operator">=</span> <span class="token string">&quot;Form上传&quot;</span>
    <span class="token keyword">if</span> request<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">:</span>
        form <span class="token operator">=</span> UpForm<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">&#39;upload_form.html&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&quot;form&quot;</span><span class="token punctuation">:</span> form<span class="token punctuation">,</span> <span class="token string">&quot;title&quot;</span><span class="token punctuation">:</span> title<span class="token punctuation">}</span><span class="token punctuation">)</span>

    form <span class="token operator">=</span> UpForm<span class="token punctuation">(</span>data<span class="token operator">=</span>request<span class="token punctuation">.</span>POST<span class="token punctuation">,</span> files<span class="token operator">=</span>request<span class="token punctuation">.</span>FILES<span class="token punctuation">)</span>
    <span class="token keyword">if</span> form<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># {&#39;name&#39;: &#39;武沛齐&#39;, &#39;age&#39;: 123, &#39;img&#39;: &lt;InMemoryUploadedFile: 图片 1.png (image/png)&gt;}</span>
        <span class="token comment"># 1.读取图片内容，写入到文件夹中并获取文件的路径。</span>
        image_object <span class="token operator">=</span> form<span class="token punctuation">.</span>cleaned_data<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;img&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># file_path = &quot;app01/static/img/{}&quot;.format(image_object.name)</span>
        db_file_path <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string">&quot;static&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;img&quot;</span><span class="token punctuation">,</span> image_object<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

        file_path <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string">&quot;app01&quot;</span><span class="token punctuation">,</span> db_file_path<span class="token punctuation">)</span>
        f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>file_path<span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> chunk <span class="token keyword">in</span> image_object<span class="token punctuation">.</span>chunks<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>chunk<span class="token punctuation">)</span>
        f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 2.将图片文件路径写入到数据库</span>
        models<span class="token punctuation">.</span>Boss<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>create<span class="token punctuation">(</span>
            name<span class="token operator">=</span>form<span class="token punctuation">.</span>cleaned_data<span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            age<span class="token operator">=</span>form<span class="token punctuation">.</span>cleaned_data<span class="token punctuation">[</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            img<span class="token operator">=</span>db_file_path<span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
        <span class="token keyword">return</span> HttpResponse<span class="token punctuation">(</span><span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">&#39;upload_form.html&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&quot;form&quot;</span><span class="token punctuation">:</span> form<span class="token punctuation">,</span> <span class="token string">&quot;title&quot;</span><span class="token punctuation">:</span> title<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：就目前而言，所有的静态文件都只能放在static目录。</p><p>在django的开发过程中两个特殊的文件夹：</p><ul><li>static，存放静态文件的路径，包括：CSS、JS、项目图片。</li><li>media，用户上传的数据的目录。</li></ul><h3 id="_2-2-启用media" tabindex="-1"><a class="header-anchor" href="#_2-2-启用media"><span>2.2 启用media</span></a></h3><p>在urls.py中进行配置：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>from django.urls import path, re_path
from django.views.static import serve
from django.conf import settings

urlpatterns = [
	re_path(r&#39;^media/(?P&lt;path&gt;.*)$&#39;, serve, {&#39;document_root&#39;: settings.MEDIA_ROOT}, name=&#39;media&#39;),
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在settings.py中进行配置：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import os

MEDIA_ROOT = os.path.join(BASE_DIR, &quot;media&quot;)
MEDIA_URL = &quot;/media/&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在浏览器上访问这个地址：</p><p>![image-20211130170639048](day20 Django开发.assets/image-20211130170639048.png)</p><h3 id="案例-混合数据-form-1" tabindex="-1"><a class="header-anchor" href="#案例-混合数据-form-1"><span>案例：混合数据（form）</span></a></h3><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> django <span class="token keyword">import</span> forms
<span class="token keyword">from</span> app01<span class="token punctuation">.</span>utils<span class="token punctuation">.</span>bootstrap <span class="token keyword">import</span> BootStrapForm


<span class="token keyword">class</span> <span class="token class-name">UpForm</span><span class="token punctuation">(</span>BootStrapForm<span class="token punctuation">)</span><span class="token punctuation">:</span>
    bootstrap_exclude_fields <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">]</span>

    name <span class="token operator">=</span> forms<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>label<span class="token operator">=</span><span class="token string">&quot;姓名&quot;</span><span class="token punctuation">)</span>
    age <span class="token operator">=</span> forms<span class="token punctuation">.</span>IntegerField<span class="token punctuation">(</span>label<span class="token operator">=</span><span class="token string">&quot;年龄&quot;</span><span class="token punctuation">)</span>
    img <span class="token operator">=</span> forms<span class="token punctuation">.</span>FileField<span class="token punctuation">(</span>label<span class="token operator">=</span><span class="token string">&quot;头像&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">upload_form</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    title <span class="token operator">=</span> <span class="token string">&quot;Form上传&quot;</span>
    <span class="token keyword">if</span> request<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">:</span>
        form <span class="token operator">=</span> UpForm<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">&#39;upload_form.html&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&quot;form&quot;</span><span class="token punctuation">:</span> form<span class="token punctuation">,</span> <span class="token string">&quot;title&quot;</span><span class="token punctuation">:</span> title<span class="token punctuation">}</span><span class="token punctuation">)</span>

    form <span class="token operator">=</span> UpForm<span class="token punctuation">(</span>data<span class="token operator">=</span>request<span class="token punctuation">.</span>POST<span class="token punctuation">,</span> files<span class="token operator">=</span>request<span class="token punctuation">.</span>FILES<span class="token punctuation">)</span>
    <span class="token keyword">if</span> form<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># {&#39;name&#39;: &#39;武沛齐&#39;, &#39;age&#39;: 123, &#39;img&#39;: &lt;InMemoryUploadedFile: 图片 1.png (image/png)&gt;}</span>
        <span class="token comment"># 1.读取图片内容，写入到文件夹中并获取文件的路径。</span>
        image_object <span class="token operator">=</span> form<span class="token punctuation">.</span>cleaned_data<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;img&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># media_path = os.path.join(settings.MEDIA_ROOT, image_object.name)</span>
        media_path <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string">&quot;media&quot;</span><span class="token punctuation">,</span> image_object<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
        f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>media_path<span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> chunk <span class="token keyword">in</span> image_object<span class="token punctuation">.</span>chunks<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>chunk<span class="token punctuation">)</span>
        f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 2.将图片文件路径写入到数据库</span>
        models<span class="token punctuation">.</span>Boss<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>create<span class="token punctuation">(</span>
            name<span class="token operator">=</span>form<span class="token punctuation">.</span>cleaned_data<span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            age<span class="token operator">=</span>form<span class="token punctuation">.</span>cleaned_data<span class="token punctuation">[</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            img<span class="token operator">=</span>media_path<span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
        <span class="token keyword">return</span> HttpResponse<span class="token punctuation">(</span><span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">&#39;upload_form.html&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&quot;form&quot;</span><span class="token punctuation">:</span> form<span class="token punctuation">,</span> <span class="token string">&quot;title&quot;</span><span class="token punctuation">:</span> title<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="案例-混合数据-modalform" tabindex="-1"><a class="header-anchor" href="#案例-混合数据-modalform"><span>案例：混合数据（ModalForm)</span></a></h3><h4 id="models-py" tabindex="-1"><a class="header-anchor" href="#models-py"><span>models.py</span></a></h4><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">City</span><span class="token punctuation">(</span>models<span class="token punctuation">.</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; 城市 &quot;&quot;&quot;</span>
    name <span class="token operator">=</span> models<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>verbose_name<span class="token operator">=</span><span class="token string">&quot;名称&quot;</span><span class="token punctuation">,</span> max_length<span class="token operator">=</span><span class="token number">32</span><span class="token punctuation">)</span>
    count <span class="token operator">=</span> models<span class="token punctuation">.</span>IntegerField<span class="token punctuation">(</span>verbose_name<span class="token operator">=</span><span class="token string">&quot;人口&quot;</span><span class="token punctuation">)</span>

    <span class="token comment"># 本质上数据库也是CharField，自动保存数据。</span>
    img <span class="token operator">=</span> models<span class="token punctuation">.</span>FileField<span class="token punctuation">(</span>verbose_name<span class="token operator">=</span><span class="token string">&quot;Logo&quot;</span><span class="token punctuation">,</span> max_length<span class="token operator">=</span><span class="token number">128</span><span class="token punctuation">,</span> upload_to<span class="token operator">=</span><span class="token string">&#39;city/&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="定义modelform" tabindex="-1"><a class="header-anchor" href="#定义modelform"><span>定义ModelForm</span></a></h4><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> app01<span class="token punctuation">.</span>utils<span class="token punctuation">.</span>bootstrap <span class="token keyword">import</span> BootStrapModelForm


<span class="token keyword">class</span> <span class="token class-name">UpModelForm</span><span class="token punctuation">(</span>BootStrapModelForm<span class="token punctuation">)</span><span class="token punctuation">:</span>
    bootstrap_exclude_fields <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">]</span>

    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        model <span class="token operator">=</span> models<span class="token punctuation">.</span>City
        fields <span class="token operator">=</span> <span class="token string">&quot;__all__&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="视图" tabindex="-1"><a class="header-anchor" href="#视图"><span>视图</span></a></h4><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">upload_modal_form</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; 上传文件和数据（modelForm）&quot;&quot;&quot;</span>
    title <span class="token operator">=</span> <span class="token string">&quot;ModelForm上传文件&quot;</span>
    <span class="token keyword">if</span> request<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">:</span>
        form <span class="token operator">=</span> UpModelForm<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">&#39;upload_form.html&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&quot;form&quot;</span><span class="token punctuation">:</span> form<span class="token punctuation">,</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">:</span> title<span class="token punctuation">}</span><span class="token punctuation">)</span>

    form <span class="token operator">=</span> UpModelForm<span class="token punctuation">(</span>data<span class="token operator">=</span>request<span class="token punctuation">.</span>POST<span class="token punctuation">,</span> files<span class="token operator">=</span>request<span class="token punctuation">.</span>FILES<span class="token punctuation">)</span>
    <span class="token keyword">if</span> form<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 对于文件：自动保存；</span>
        <span class="token comment"># 字段 + 上传路径写入到数据库</span>
        form<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>
        
        <span class="token keyword">return</span> HttpResponse<span class="token punctuation">(</span><span class="token string">&quot;成功&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">&#39;upload_form.html&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&quot;form&quot;</span><span class="token punctuation">:</span> form<span class="token punctuation">,</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">:</span> title<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h3><ul><li><p>自己手动去写</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>file_object <span class="token operator">=</span> request<span class="token punctuation">.</span>FILES<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;exc&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Form组件（表单验证）</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>request<span class="token punctuation">.</span>POST
file_object <span class="token operator">=</span> request<span class="token punctuation">.</span>FILES<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;exc&quot;</span><span class="token punctuation">)</span>

具体文件操作还是手动自己做。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>ModelForm（表单验证 + 自动保存数据库 + 自动保存文件）</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- Media文件夹
- Models.py定义类文件要
	img = models.FileField(verbose_name=&quot;Logo&quot;, max_length=128, upload_to=&#39;city/&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>关于django的开发知识点，更多的案例：</p><ul><li><p>Python基础（课件 https://gitee.com/wupeiqi/python_course）</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>https://www.bilibili.com/video/BV1m54y1r7zE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>并发编程（进程线程协程）</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>https://www.bilibili.com/video/BV1Ev411G7i3?spm_id_from=333.999.0.0

# 不建议小白学（协程）
https://www.bilibili.com/video/BV1NA411g7yf?spm_id_from=333.999.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>MySQL数据库</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># 2021最新推荐</span>
https<span class="token punctuation">:</span><span class="token operator">//</span>www<span class="token punctuation">.</span>bilibili<span class="token punctuation">.</span>com<span class="token operator">/</span>video<span class="token operator">/</span>BV15R4y1b7y9?spm_id_from<span class="token operator">=</span><span class="token number">333.999</span><span class="token number">.0</span><span class="token number">.0</span>
    
<span class="token comment"># 2017年</span>
https<span class="token punctuation">:</span><span class="token operator">//</span>www<span class="token punctuation">.</span>bilibili<span class="token punctuation">.</span>com<span class="token operator">/</span>video<span class="token operator">/</span>BV1DE411n7fU?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>前端开发</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>https<span class="token punctuation">:</span><span class="token operator">//</span>www<span class="token punctuation">.</span>bilibili<span class="token punctuation">.</span>com<span class="token operator">/</span>video<span class="token operator">/</span>BV1QE411j7bV?spm_id_from<span class="token operator">=</span><span class="token number">333.999</span><span class="token number">.0</span><span class="token number">.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>django开发知识点</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>https://www.bilibili.com/video/BV1zE411x7LG
https://www.bilibili.com/video/BV1JE411V7xk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>项目开发</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>任务管理平台：https://www.bilibili.com/video/BV1uA411b77M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>进阶项目（增删改查、权限）</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>https<span class="token punctuation">:</span><span class="token operator">//</span>space<span class="token punctuation">.</span>bilibili<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token number">283478842</span><span class="token operator">/</span>channel<span class="token operator">/</span>detail?cid<span class="token operator">=</span><span class="token number">91596</span><span class="token operator">&amp;</span>ctype<span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>前后端分离的项目： django + drf框架 + vue.js</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- Django
- drf框架
	- https://www.bilibili.com/video/BV1ZE411j7RK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>git 版本控制和协同开发 + 任务管理平台</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>https://www.bilibili.com/video/BV19E411f76x?spm_id_from=333.999.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>微信小程序 + Django + drf框架编写</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>https<span class="token punctuation">:</span><span class="token operator">//</span>www<span class="token punctuation">.</span>bilibili<span class="token punctuation">.</span>com<span class="token operator">/</span>video<span class="token operator">/</span>BV1jC4y1s7QD?spm_id_from<span class="token operator">=</span><span class="token number">333.999</span><span class="token number">.0</span><span class="token number">.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul>`,61),i=[p];function l(o,c){return s(),a("div",null,i)}const r=n(e,[["render",l],["__file","day20 Django开发.html.vue"]]),k=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Web/04.%20%E5%90%8E%E7%AB%AF/04.%20Py-Django/B%E7%AB%99%E6%AD%A6%E6%B2%9B%E9%BD%90/day20%20Django%E5%BC%80%E5%8F%91.html","title":"day20 Django开发","lang":"zh-CN","frontmatter":{"description":"day20 Django开发 关于考试： 期中考试 50道题 期末考试 100道题 1.知识点复习 1.1 基础入门 编码 输入和输出 变量 异常处理【补充】 循环中for/while内部都可以用 break、continue 字符串格式化 运算符 1.2 数据类型 字符串类型 列表类型 字典类型 关于元组 其他数据类型 1.3 函数 定义 参数 返回...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Web/04.%20%E5%90%8E%E7%AB%AF/04.%20Py-Django/B%E7%AB%99%E6%AD%A6%E6%B2%9B%E9%BD%90/day20%20Django%E5%BC%80%E5%8F%91.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"day20 Django开发"}],["meta",{"property":"og:description","content":"day20 Django开发 关于考试： 期中考试 50道题 期末考试 100道题 1.知识点复习 1.1 基础入门 编码 输入和输出 变量 异常处理【补充】 循环中for/while内部都可以用 break、continue 字符串格式化 运算符 1.2 数据类型 字符串类型 列表类型 字典类型 关于元组 其他数据类型 1.3 函数 定义 参数 返回..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"day20 Django开发\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"day20 Django开发","slug":"day20-django开发","link":"#day20-django开发","children":[{"level":2,"title":"1.知识点复习","slug":"_1-知识点复习","link":"#_1-知识点复习","children":[{"level":3,"title":"1.1 基础入门","slug":"_1-1-基础入门","link":"#_1-1-基础入门","children":[]},{"level":3,"title":"1.2 数据类型","slug":"_1-2-数据类型","link":"#_1-2-数据类型","children":[]},{"level":3,"title":"1.3 函数","slug":"_1-3-函数","link":"#_1-3-函数","children":[]},{"level":3,"title":"1.4 模块","slug":"_1-4-模块","link":"#_1-4-模块","children":[]},{"level":3,"title":"1.5 面向对象","slug":"_1-5-面向对象","link":"#_1-5-面向对象","children":[]},{"level":3,"title":"1.6 MySQL数据库","slug":"_1-6-mysql数据库","link":"#_1-6-mysql数据库","children":[]},{"level":3,"title":"1.7 前端开发","slug":"_1-7-前端开发","link":"#_1-7-前端开发","children":[]},{"level":3,"title":"1.8 Django","slug":"_1-8-django","link":"#_1-8-django","children":[]}]},{"level":2,"title":"2.关于文件上传","slug":"_2-关于文件上传","link":"#_2-关于文件上传","children":[{"level":3,"title":"2.1 基本操作","slug":"_2-1-基本操作","link":"#_2-1-基本操作","children":[]},{"level":3,"title":"案例：批量上传数据","slug":"案例-批量上传数据","link":"#案例-批量上传数据","children":[]},{"level":3,"title":"案例：混合数据（Form）","slug":"案例-混合数据-form","link":"#案例-混合数据-form","children":[]},{"level":3,"title":"2.2 启用media","slug":"_2-2-启用media","link":"#_2-2-启用media","children":[]},{"level":3,"title":"案例：混合数据（form）","slug":"案例-混合数据-form-1","link":"#案例-混合数据-form-1","children":[]},{"level":3,"title":"案例：混合数据（ModalForm)","slug":"案例-混合数据-modalform","link":"#案例-混合数据-modalform","children":[{"level":4,"title":"models.py","slug":"models-py","link":"#models-py","children":[]},{"level":4,"title":"定义ModelForm","slug":"定义modelform","link":"#定义modelform","children":[]},{"level":4,"title":"视图","slug":"视图","link":"#视图","children":[]}]},{"level":3,"title":"小结","slug":"小结","link":"#小结","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":11.85,"words":3555},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Platform/Web/04. 后端/04. Py-Django/B站武沛齐/day20 Django开发.md","autoDesc":true}');export{r as comp,k as data};

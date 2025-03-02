import{_ as n,e as a,g as e,o as i}from"./app-DPU1xou8.js";const l={};function p(d,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>MySQL</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="sql命令" tabindex="-1"><a class="header-anchor" href="#sql命令"><span>SQL命令</span></a></h1><h2 id="use-使用数据库" tabindex="-1"><a class="header-anchor" href="#use-使用数据库"><span>USE（使用数据库）</span></a></h2><div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>-- SQL不分大小写，一般&#39;命令&#39;大写其他小写</span></span>
<span class="line"><span>USE sql_store;  -- 数据库，若只有一个数据库或在指定数据库下运行则可省略</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="select-选择列-及其子句" tabindex="-1"><a class="header-anchor" href="#select-选择列-及其子句"><span>SELECT（选择列）及其子句</span></a></h2><div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>--标准示例</span></span>
<span class="line"><span>SELECT customer_id, last_name</span></span>
<span class="line"><span>FROM customers  					-- 从表选择</span></span>
<span class="line"><span>WHERE customer_id = 1  				-- 筛选。布尔：()&gt;NOT&gt;AND&gt;OR</span></span>
<span class="line"><span>ORDER BY first_name  				-- 按某列排序</span></span>
<span class="line"><span>LIMIT 10  							-- 仅显示前10条数据</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>--SELECT子句扩展（选择）</span></span>
<span class="line"><span>SELECT points + 10 AS points_factor	-- 可输入表达式，若列名有空格可加引号</span></span>
<span class="line"><span>SELECT DISTINCT state  				-- 获得唯一值列表</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一些子句-where-条件筛选-order-by-排序-limit-限制" tabindex="-1"><a class="header-anchor" href="#一些子句-where-条件筛选-order-by-排序-limit-限制"><span>一些子句：WHERE（条件筛选），ORDER BY（排序），LIMIT（限制）</span></a></h2><div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>-- WHERE子句扩展（筛选）</span></span>
<span class="line"><span> WHERE birth_date &gt;= &#39;1990-01-01&#39;  --日期标准格式</span></span>
<span class="line"><span> WHERE state IN (&#39;VA&#39;, &#39;FL&#39;, &#39;GA&#39;)</span></span>
<span class="line"><span> WHERE birth_date BETWEEN &#39;1990-01-01&#39; AND &#39;2020-01-01&#39;</span></span>
<span class="line"><span> WHERE phone IS NULL  -- 匹配空值</span></span>
<span class="line"><span> WHERE last_name LIKE &#39;b%&#39;  -- 匹配b开头的对象，大小写无关</span></span>
<span class="line"><span> WHERE last_name LIKE &#39;b____&#39;  -- %任意匹配长度字符，下划线匹配单个字符</span></span>
<span class="line"><span> WHERE last_name REGEXP &#39;field&#39;  --正则表达式</span></span>
<span class="line"><span>                 -- 正则表达式，组合特殊字符建立复杂筛选</span></span>
<span class="line"><span>                 &#39;field&#39;包含，&#39;^field&#39;以开头，&#39;field$&#39;以结尾</span></span>
<span class="line"><span>                 &#39;aa|bb&#39;并行，&#39;[abcd]e&#39;单字符并行，&#39;[a-d]e&#39;并行优化</span></span>
<span class="line"><span> -- WHERE嵌套&#39;SELECT子查询&#39;</span></span>
<span class="line"><span> WHERE client_id =(</span></span>
<span class="line"><span>                 SELECT client_id</span></span>
<span class="line"><span>                 FROM clients</span></span>
<span class="line"><span>                 WHERE name = &#39;Myworks</span></span>
<span class="line"><span> )</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> -- ORDER子句扩展（排序）</span></span>
<span class="line"><span> ORDER BY state, first_name  -- 主次关键词</span></span>
<span class="line"><span> ORDER BY first_name DESC  -- 降序排列，MySQL以外数据库对此支持不好</span></span>
<span class="line"><span> ORDER BY 1, 2  -- 可填列序，但应尽量避免</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> -- LIMIT子句扩展（限制）</span></span>
<span class="line"><span> LIMIT 10  -- 仅显示前10条</span></span>
<span class="line"><span> LIMIT 6, 3  -- 跳过前6条，显示后3条</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> -- 一些运算符</span></span>
<span class="line"><span> &gt;,&lt;,=,&gt;=,&lt;=,!=</span></span>
<span class="line"><span> AND,OR,NOT</span></span>
<span class="line"><span> IN,BETWEEN,IS NULL,LIKE,REGEXP</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="join-连接-连接字段与字段" tabindex="-1"><a class="header-anchor" href="#join-连接-连接字段与字段"><span>JOIN（连接）（连接字段与字段）</span></a></h2><div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>-- 内部链接，可且建议省略INNER</span></span>
<span class="line"><span>INNER JOIN customers  -- 仅返回满足ON条件的记录</span></span>
<span class="line"><span>-- 外部连接[左连]，可且建议省略OUTER</span></span>
<span class="line"><span>LEFT OUTER JOIN customers  -- 返回左表[FROM]全部记录，不满足ON的右表[JOIN]返回NULL</span></span>
<span class="line"><span>-- 外部连接[右连]，可且建议省略OUTER</span></span>
<span class="line"><span>RIGHT OUTER JOIN customers  -- 返回右表[JOIN]全部记录，不满足ON的左表[FROM]返回NULL</span></span>
<span class="line"><span>-- 自然连接，后面不用加ON。不建议</span></span>
<span class="line"><span>NATURAL JOIN customers</span></span>
<span class="line"><span>-- 交叉连接[显式]，也可改写为隐式</span></span>
<span class="line"><span>CROSS JOIN customers</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 标准示例</span></span>
<span class="line"><span>SELECT orders.customer_id  -- 当两个表都有相同的列名时要加前缀</span></span>
<span class="line"><span>FROM orders  -- 原表</span></span>
<span class="line"><span>JOIN sql_incentory.customers  -- 连接表，可跨多个数据库</span></span>
<span class="line"><span>    ON orders.customer_id = customers.cutomer_id  -- 连接条件，可布尔</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 简化</span></span>
<span class="line"><span>SELECT o.customer_id</span></span>
<span class="line"><span>FROM orders o  -- As to &#39;o&#39;，引用名简化</span></span>
<span class="line"><span>JOIN customers c  -- As to &#39;c&#39;，引用名简化</span></span>
<span class="line"><span>    USING(customer_id)  -- 不同表拥有相同列名时简化</span></span>
<span class="line"><span>    -- USING(order_id, product_id)  -- 可匹配多个</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 允许自己与自己连接（使用不同的别名）</span></span>
<span class="line"><span>-- 两个以上表的连接,连续用两个JOIN-ON子句</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 隐式连接。不建议：若忘记WHERE语句则会生成n*m条数据的交叉连接！</span></span>
<span class="line"><span>SELECT *</span></span>
<span class="line"><span>FROM orders o, customers c</span></span>
<span class="line"><span>WHERE o.customer_id = c.customer_id</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="union-联合-连接记录与记录" tabindex="-1"><a class="header-anchor" href="#union-联合-连接记录与记录"><span>UNION（联合）（连接记录与记录）</span></a></h2><div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>-- 可合并多个SELECT表</span></span>
<span class="line"><span>SELECT ...</span></span>
<span class="line"><span>UNION</span></span>
<span class="line"><span>SELECT ...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="insert-插入" tabindex="-1"><a class="header-anchor" href="#insert-插入"><span>INSERT（插入）</span></a></h2><div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>-- 标准示例</span></span>
<span class="line"><span>INSERT INTO customers (first_name, last_name, birth_date, address, city, state)  -- 小括号可选</span></span>
<span class="line"><span>VALUES (DEFAULT, &#39;John&#39;, &#39;Smith&#39;, &#39;1990-01-01&#39;, NULL)  -- 自动增加的id给DEFAULT。设置默认NULL的可空值给DEFAULT或NULL都行</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 插入多行</span></span>
<span class="line"><span>INSERT INTO products (name, quantity)</span></span>
<span class="line"><span>VALUES (&#39;Product1&#39;, 10),(&#39;Product2&#39;, 15),(&#39;Product3&#39;, 20)  -- 插入多行记录</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 从表插入</span></span>
<span class="line"><span>INSERT INTO orders_archived</span></span>
<span class="line"><span>SELECT *</span></span>
<span class="line"><span>FROM orders</span></span>
<span class="line"><span>WHERE order_date &lt; &#39;2019-01-01&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 其他</span></span>
<span class="line"><span>SELECT LAST_INSERT_ID()  -- 最末插入查询</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="update-更新-更改值" tabindex="-1"><a class="header-anchor" href="#update-更新-更改值"><span>UPDATE（更新，更改值）</span></a></h2><div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>--标准示例</span></span>
<span class="line"><span>UPDATE invoices</span></span>
<span class="line"><span>SET payment_total = 10, payment_date = &#39;2019-03-01&#39;</span></span>
<span class="line"><span>WHERE invoice_id = 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="delete-删除" tabindex="-1"><a class="header-anchor" href="#delete-删除"><span>DELETE（删除）</span></a></h2><div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>DELETE FROM invoices</span></span>
<span class="line"><span>WHERE invoice_id = 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="creare-创建表" tabindex="-1"><a class="header-anchor" href="#creare-创建表"><span>CREARE（创建表）</span></a></h2><div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>-- 复制表。注意：复制后没有主键和标记自动增加</span></span>
<span class="line"><span>CREATE TABLE orders_archived AS  -- 这里的AS和之前的用法不同</span></span>
<span class="line"><span>SELECT * FROM orders</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="project" tabindex="-1"><a class="header-anchor" href="#project"><span>PROJECT</span></a></h2><div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>-- 这个教程没有，计算机基础的书有</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,23)]))}const c=n(l,[["render",p],["__file","02. SQL命令.html.vue"]]),t=JSON.parse(`{"path":"/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Platform/Web/04.%20%E5%90%8E%E7%AB%AF/%E6%95%B0%E6%8D%AE%E5%BA%93/02.%20MySQL/Mosh%20Hamedani/02.%20SQL%E5%91%BD%E4%BB%A4.html","title":"MySQL","lang":"zh-CN","frontmatter":{"description":"MySQL 目录 SQL命令 USE（使用数据库） SELECT（选择列）及其子句 一些子句：WHERE（条件筛选），ORDER BY（排序），LIMIT（限制） JOIN（连接）（连接字段与字段） UNION（联合）（连接记录与记录） INSERT（插入） UPDATE（更新，更改值） DELETE（删除） CREARE（创建表） PROJECT","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Platform/Web/04.%20%E5%90%8E%E7%AB%AF/%E6%95%B0%E6%8D%AE%E5%BA%93/02.%20MySQL/Mosh%20Hamedani/02.%20SQL%E5%91%BD%E4%BB%A4.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"MySQL"}],["meta",{"property":"og:description","content":"MySQL 目录 SQL命令 USE（使用数据库） SELECT（选择列）及其子句 一些子句：WHERE（条件筛选），ORDER BY（排序），LIMIT（限制） JOIN（连接）（连接字段与字段） UNION（联合）（连接记录与记录） INSERT（插入） UPDATE（更新，更改值） DELETE（删除） CREARE（创建表） PROJECT"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"git":{},"readingTime":{"minutes":3.09,"words":926},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/Web/04. 后端/数据库/02. MySQL/Mosh Hamedani/02. SQL命令.md","excerpt":"\\n<h1>目录</h1>\\n<h1>SQL命令</h1>\\n<h2>USE（使用数据库）</h2>\\n<div class=\\"language-mysql line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"mysql\\" data-title=\\"mysql\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>-- SQL不分大小写，一般'命令'大写其他小写</span></span>\\n<span class=\\"line\\"><span>USE sql_store;  -- 数据库，若只有一个数据库或在指定数据库下运行则可省略</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/Web/04. 后端/数据库/02. MySQL/Mosh Hamedani/02. SQL命令.md","value":{"title":"02. SQL命令","path":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Platform/Web/04. 后端/数据库/02. MySQL/Mosh Hamedani/02. SQL命令.md","outlink":[],"backlink":[]}}],"links":[]}}}`);export{c as comp,t as data};

import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,a as s}from"./app-IRYUHD7s.js";const l={},d=s(`<h1 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>MySQL</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="sql命令" tabindex="-1"><a class="header-anchor" href="#sql命令"><span>SQL命令</span></a></h1><h2 id="use-使用数据库" tabindex="-1"><a class="header-anchor" href="#use-使用数据库"><span>USE（使用数据库）</span></a></h2><div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code>-- SQL不分大小写，一般&#39;命令&#39;大写其他小写
USE sql_store;  -- 数据库，若只有一个数据库或在指定数据库下运行则可省略
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="select-选择列-及其子句" tabindex="-1"><a class="header-anchor" href="#select-选择列-及其子句"><span>SELECT（选择列）及其子句</span></a></h2><div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code>--标准示例
SELECT customer_id, last_name
FROM customers  					-- 从表选择
WHERE customer_id = 1  				-- 筛选。布尔：()&gt;NOT&gt;AND&gt;OR
ORDER BY first_name  				-- 按某列排序
LIMIT 10  							-- 仅显示前10条数据
 
--SELECT子句扩展（选择）
SELECT points + 10 AS points_factor	-- 可输入表达式，若列名有空格可加引号
SELECT DISTINCT state  				-- 获得唯一值列表
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一些子句-where-条件筛选-order-by-排序-limit-限制" tabindex="-1"><a class="header-anchor" href="#一些子句-where-条件筛选-order-by-排序-limit-限制"><span>一些子句：WHERE（条件筛选），ORDER BY（排序），LIMIT（限制）</span></a></h2><div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code>-- WHERE子句扩展（筛选）
 WHERE birth_date &gt;= &#39;1990-01-01&#39;  --日期标准格式
 WHERE state IN (&#39;VA&#39;, &#39;FL&#39;, &#39;GA&#39;)
 WHERE birth_date BETWEEN &#39;1990-01-01&#39; AND &#39;2020-01-01&#39;
 WHERE phone IS NULL  -- 匹配空值
 WHERE last_name LIKE &#39;b%&#39;  -- 匹配b开头的对象，大小写无关
 WHERE last_name LIKE &#39;b____&#39;  -- %任意匹配长度字符，下划线匹配单个字符
 WHERE last_name REGEXP &#39;field&#39;  --正则表达式
                 -- 正则表达式，组合特殊字符建立复杂筛选
                 &#39;field&#39;包含，&#39;^field&#39;以开头，&#39;field$&#39;以结尾
                 &#39;aa|bb&#39;并行，&#39;[abcd]e&#39;单字符并行，&#39;[a-d]e&#39;并行优化
 -- WHERE嵌套&#39;SELECT子查询&#39;
 WHERE client_id =(
                 SELECT client_id
                 FROM clients
                 WHERE name = &#39;Myworks
 )
 
 -- ORDER子句扩展（排序）
 ORDER BY state, first_name  -- 主次关键词
 ORDER BY first_name DESC  -- 降序排列，MySQL以外数据库对此支持不好
 ORDER BY 1, 2  -- 可填列序，但应尽量避免
 
 -- LIMIT子句扩展（限制）
 LIMIT 10  -- 仅显示前10条
 LIMIT 6, 3  -- 跳过前6条，显示后3条
 
 -- 一些运算符
 &gt;,&lt;,=,&gt;=,&lt;=,!=
 AND,OR,NOT
 IN,BETWEEN,IS NULL,LIKE,REGEXP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="join-连接-连接字段与字段" tabindex="-1"><a class="header-anchor" href="#join-连接-连接字段与字段"><span>JOIN（连接）（连接字段与字段）</span></a></h2><div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code>-- 内部链接，可且建议省略INNER
INNER JOIN customers  -- 仅返回满足ON条件的记录
-- 外部连接[左连]，可且建议省略OUTER
LEFT OUTER JOIN customers  -- 返回左表[FROM]全部记录，不满足ON的右表[JOIN]返回NULL
-- 外部连接[右连]，可且建议省略OUTER
RIGHT OUTER JOIN customers  -- 返回右表[JOIN]全部记录，不满足ON的左表[FROM]返回NULL
-- 自然连接，后面不用加ON。不建议
NATURAL JOIN customers
-- 交叉连接[显式]，也可改写为隐式
CROSS JOIN customers

-- 标准示例
SELECT orders.customer_id  -- 当两个表都有相同的列名时要加前缀
FROM orders  -- 原表
JOIN sql_incentory.customers  -- 连接表，可跨多个数据库
    ON orders.customer_id = customers.cutomer_id  -- 连接条件，可布尔

-- 简化
SELECT o.customer_id
FROM orders o  -- As to &#39;o&#39;，引用名简化
JOIN customers c  -- As to &#39;c&#39;，引用名简化
    USING(customer_id)  -- 不同表拥有相同列名时简化
    -- USING(order_id, product_id)  -- 可匹配多个

-- 允许自己与自己连接（使用不同的别名）
-- 两个以上表的连接,连续用两个JOIN-ON子句

-- 隐式连接。不建议：若忘记WHERE语句则会生成n*m条数据的交叉连接！
SELECT *
FROM orders o, customers c
WHERE o.customer_id = c.customer_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="union-联合-连接记录与记录" tabindex="-1"><a class="header-anchor" href="#union-联合-连接记录与记录"><span>UNION（联合）（连接记录与记录）</span></a></h2><div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code>-- 可合并多个SELECT表
SELECT ...
UNION
SELECT ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="insert-插入" tabindex="-1"><a class="header-anchor" href="#insert-插入"><span>INSERT（插入）</span></a></h2><div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code>-- 标准示例
INSERT INTO customers (first_name, last_name, birth_date, address, city, state)  -- 小括号可选
VALUES (DEFAULT, &#39;John&#39;, &#39;Smith&#39;, &#39;1990-01-01&#39;, NULL)  -- 自动增加的id给DEFAULT。设置默认NULL的可空值给DEFAULT或NULL都行

-- 插入多行
INSERT INTO products (name, quantity)
VALUES (&#39;Product1&#39;, 10),(&#39;Product2&#39;, 15),(&#39;Product3&#39;, 20)  -- 插入多行记录

-- 从表插入
INSERT INTO orders_archived
SELECT *
FROM orders
WHERE order_date &lt; &#39;2019-01-01&#39;

-- 其他
SELECT LAST_INSERT_ID()  -- 最末插入查询
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="update-更新-更改值" tabindex="-1"><a class="header-anchor" href="#update-更新-更改值"><span>UPDATE（更新，更改值）</span></a></h2><div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code>--标准示例
UPDATE invoices
SET payment_total = 10, payment_date = &#39;2019-03-01&#39;
WHERE invoice_id = 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="delete-删除" tabindex="-1"><a class="header-anchor" href="#delete-删除"><span>DELETE（删除）</span></a></h2><div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code>DELETE FROM invoices
WHERE invoice_id = 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="creare-创建表" tabindex="-1"><a class="header-anchor" href="#creare-创建表"><span>CREARE（创建表）</span></a></h2><div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code>-- 复制表。注意：复制后没有主键和标记自动增加
CREATE TABLE orders_archived AS  -- 这里的AS和之前的用法不同
SELECT * FROM orders
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="project" tabindex="-1"><a class="header-anchor" href="#project"><span>PROJECT</span></a></h2><div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code>-- 这个教程没有，计算机基础的书有
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,23),a=[d];function r(t,c){return i(),n("div",null,a)}const u=e(l,[["render",r],["__file","02. SQL命令.html.vue"]]),E=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Web/04.%20%E5%90%8E%E7%AB%AF/02.%20MySQL/Mosh%20Hamedani/02.%20SQL%E5%91%BD%E4%BB%A4.html","title":"MySQL","lang":"zh-CN","frontmatter":{"description":"MySQL 目录 SQL命令 USE（使用数据库） SELECT（选择列）及其子句 一些子句：WHERE（条件筛选），ORDER BY（排序），LIMIT（限制） JOIN（连接）（连接字段与字段） UNION（联合）（连接记录与记录） INSERT（插入） UPDATE（更新，更改值） DELETE（删除） CREARE（创建表） PROJECT","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Web/04.%20%E5%90%8E%E7%AB%AF/02.%20MySQL/Mosh%20Hamedani/02.%20SQL%E5%91%BD%E4%BB%A4.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"MySQL"}],["meta",{"property":"og:description","content":"MySQL 目录 SQL命令 USE（使用数据库） SELECT（选择列）及其子句 一些子句：WHERE（条件筛选），ORDER BY（排序），LIMIT（限制） JOIN（连接）（连接字段与字段） UNION（联合）（连接记录与记录） INSERT（插入） UPDATE（更新，更改值） DELETE（删除） CREARE（创建表） PROJECT"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"MySQL","slug":"mysql","link":"#mysql","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"SQL命令","slug":"sql命令","link":"#sql命令","children":[{"level":2,"title":"USE（使用数据库）","slug":"use-使用数据库","link":"#use-使用数据库","children":[]},{"level":2,"title":"SELECT（选择列）及其子句","slug":"select-选择列-及其子句","link":"#select-选择列-及其子句","children":[]},{"level":2,"title":"一些子句：WHERE（条件筛选），ORDER BY（排序），LIMIT（限制）","slug":"一些子句-where-条件筛选-order-by-排序-limit-限制","link":"#一些子句-where-条件筛选-order-by-排序-limit-限制","children":[]},{"level":2,"title":"JOIN（连接）（连接字段与字段）","slug":"join-连接-连接字段与字段","link":"#join-连接-连接字段与字段","children":[]},{"level":2,"title":"UNION（联合）（连接记录与记录）","slug":"union-联合-连接记录与记录","link":"#union-联合-连接记录与记录","children":[]},{"level":2,"title":"INSERT（插入）","slug":"insert-插入","link":"#insert-插入","children":[]},{"level":2,"title":"UPDATE（更新，更改值）","slug":"update-更新-更改值","link":"#update-更新-更改值","children":[]},{"level":2,"title":"DELETE（删除）","slug":"delete-删除","link":"#delete-删除","children":[]},{"level":2,"title":"CREARE（创建表）","slug":"creare-创建表","link":"#creare-创建表","children":[]},{"level":2,"title":"PROJECT","slug":"project","link":"#project","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.09,"words":926},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Platform/Web/04. 后端/02. MySQL/Mosh Hamedani/02. SQL命令.md","autoDesc":true}');export{u as comp,E as data};

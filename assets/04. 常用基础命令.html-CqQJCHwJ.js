import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,a as l}from"./app-BDO1bFk4.js";const a={},s=l(`<h1 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>MySQL</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h2 id="数据库层级命令" tabindex="-1"><a class="header-anchor" href="#数据库层级命令"><span>数据库层级命令</span></a></h2><div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code>SHOW DATABASES;                          -- 显示所有数据库
CREATE DATABASE mydatebase;              -- 创建数据库
USE mydatebase;                          -- 使用指定数据库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="表层级命令" tabindex="-1"><a class="header-anchor" href="#表层级命令"><span>表层级命令</span></a></h2><div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code>CREATE TABLE urls(                                     	-- 创建数据库
    id INT NOT NULL AUTO_INCREMENT,                     -- 列名，类型[(长度)]，[不为空]，[默认值]，[其他属性]
    url VARCHAR(1000) NOT NULL,
    content VARCHAR(4000) NOT NULL,
    created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 	-- 这里默认值获取当前时间
    PRIMARY KEY (id)                                	-- 设置主键
);
DESCRIBE urls;                                         	-- 查看表结构
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用" tabindex="-1"><a class="header-anchor" href="#常用"><span>常用</span></a></h2><div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code>SELECT distinct(class) FROM \`nav_bili_v\` WHERE 1	-- 查看字段所有不同的值
CONCAT(str1,str2…)									-- 拼接字符串
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="curd-增删查改" tabindex="-1"><a class="header-anchor" href="#curd-增删查改"><span>CURD 增删查改</span></a></h2><div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code>-- 增
INSERT INTO urls (url, content)           -- 由于id自动递增，时间戳自动加入，所以不用增加
VALUES (&#39;www.baidu.com&#39;, &#39;百度&#39;);

-- 查
SELECT url,content
FROM urls
WHERE id=1;

-- 改
UPDATE urls
SET url=&#39;www.google.com&#39;, content=&#39;谷歌&#39;
where id = 1

-- 删
DELETE
FROM urls
WHERE url=&#39;www.baidu.com&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),t=[s];function d(r,c){return n(),i("div",null,t)}const u=e(a,[["render",d],["__file","04. 常用基础命令.html.vue"]]),v=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Web/04.%20%E5%90%8E%E7%AB%AF/02.%20MySQL/Mosh%20Hamedani/04.%20%E5%B8%B8%E7%94%A8%E5%9F%BA%E7%A1%80%E5%91%BD%E4%BB%A4.html","title":"MySQL","lang":"zh-CN","frontmatter":{"description":"MySQL 目录 数据库层级命令 表层级命令 常用 CURD 增删查改","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Web/04.%20%E5%90%8E%E7%AB%AF/02.%20MySQL/Mosh%20Hamedani/04.%20%E5%B8%B8%E7%94%A8%E5%9F%BA%E7%A1%80%E5%91%BD%E4%BB%A4.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"MySQL"}],["meta",{"property":"og:description","content":"MySQL 目录 数据库层级命令 表层级命令 常用 CURD 增删查改"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"MySQL","slug":"mysql","link":"#mysql","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[{"level":2,"title":"数据库层级命令","slug":"数据库层级命令","link":"#数据库层级命令","children":[]},{"level":2,"title":"表层级命令","slug":"表层级命令","link":"#表层级命令","children":[]},{"level":2,"title":"常用","slug":"常用","link":"#常用","children":[]},{"level":2,"title":"CURD 增删查改","slug":"curd-增删查改","link":"#curd-增删查改","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.68,"words":203},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Platform/Web/04. 后端/02. MySQL/Mosh Hamedani/04. 常用基础命令.md","autoDesc":true}');export{u as comp,v as data};

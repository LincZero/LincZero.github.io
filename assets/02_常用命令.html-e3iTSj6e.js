import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as e}from"./app-Ld2qzqw_.js";const t={},l=e(`<h1 id="redis-常用命令" tabindex="-1"><a class="header-anchor" href="#redis-常用命令"><span>Redis 常用命令</span></a></h1><h2 id="readme" tabindex="-1"><a class="header-anchor" href="#readme"><span>README</span></a></h2><h3 id="更多命令查阅" tabindex="-1"><a class="header-anchor" href="#更多命令查阅"><span>更多命令查阅</span></a></h3><p>首先这里不会记录所有命令，仅记录常用的。其他命令可以自己查：</p><p>见官网文档或在RedisInsight里查都是可以的</p><p>另外 Redis 非常好的一点是有自动提示，例如 输入 <code>SET</code> 后，后面就会提示个大概了</p><h3 id="数据类型-10种" tabindex="-1"><a class="header-anchor" href="#数据类型-10种"><span>数据类型 (10种)</span></a></h3><ul><li>基本数据类型 (5种) <ul><li>字符串 String</li><li>列表 List</li><li>集合 Set</li><li>有序集合 SortedSet</li><li>哈希 Hash</li></ul></li><li>高级数据类型 (5种) <ul><li>消息队列 Stream</li><li>地理空间 Geospatial</li><li>HyperLogLog</li><li>位图 Bitmap</li><li>位域 Bitfield</li></ul></li></ul><h2 id="string-字符串" tabindex="-1"><a class="header-anchor" href="#string-字符串"><span>String 字符串</span></a></h2><ul><li>用 Set 方式设置的则是字符串存储。无需额外加双引号。例如 <code>SET age 25; GET age;</code> 的输出为 <code>&quot;25&quot;</code>，是个字符串</li><li>区分大小写</li><li>存储不支持中文</li></ul><h3 id="整体" tabindex="-1"><a class="header-anchor" href="#整体"><span>整体</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>redis-cli				<span class="token comment"># 进入redis命令行</span>
<span class="token operator">&gt;</span> <span class="token function">clear</span>					<span class="token comment"># 清空屏幕 (类似Linux命令行)</span>
<span class="token operator">&gt;</span> quit					<span class="token comment"># 退出。Ctrl+C 也行</span>
<span class="token operator">&gt;</span> <span class="token punctuation">(</span>方向键上下<span class="token punctuation">)</span>		 	 <span class="token comment"># 切换上下一条命令 (类似Linux命令行)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="增删改查-字段" tabindex="-1"><a class="header-anchor" href="#增删改查-字段"><span>增删改查 (字段)</span></a></h3><p>SET、GET、DEL</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token operator">&gt;</span> <span class="token keyword">SET</span> name geekhour		<span class="token comment"># 增/改</span>
OK
<span class="token operator">&gt;</span> SETNX Name geekhour 	<span class="token comment"># 增 - 若已存在则不进行任何操作</span>
OK

<span class="token operator">&gt;</span> GET name				<span class="token comment"># 查 - 获取值</span>
<span class="token string">&quot;geekhour&quot;</span>
<span class="token operator">&gt;</span> <span class="token keyword">EXISTS</span> name			<span class="token comment"># 查 - 是否存在</span>
<span class="token punctuation">(</span><span class="token keyword">integer</span><span class="token punctuation">)</span> <span class="token number">1</span>

<span class="token operator">&gt;</span> DEL name				<span class="token comment"># 删</span>
<span class="token punctuation">(</span>nil<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="增删改查-多字段" tabindex="-1"><a class="header-anchor" href="#增删改查-多字段"><span>增删改查 (多字段)</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> KEYS *				<span class="token comment"># 查 - 所有键 (高危，keys * 尽量不要用，数据量多容易崩)</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;age&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;name&quot;</span>

<span class="token operator">&gt;</span> KEYS *me				<span class="token comment"># 查 - 带筛选</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;name&quot;</span>

<span class="token operator">&gt;</span> FLUSHALL				<span class="token comment"># 删 - 所有键 (高危，删库跑路是吧)</span>
OK
<span class="token operator">&gt;</span> KEYS *
<span class="token punctuation">(</span>empty array<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="过期时间" tabindex="-1"><a class="header-anchor" href="#过期时间"><span>过期时间</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> TTS	keyName			<span class="token comment"># 查询键的过期时间，TTL = Time To Live。-1表示没有设置过期时间，-2表示已经过期</span>
<span class="token parameter variable">-1</span>
<span class="token operator">&gt;</span> EXPIRE keyName <span class="token number">10</span>		<span class="token comment"># 这里设置10s过期。已经过期的话。GET keyName 和 KEYS keyName 都无法找到</span>
<span class="token number">1</span>
<span class="token operator">&gt;</span> SETEX name <span class="token number">5</span> geek 	<span class="token comment"># 增加键时可顺便添加过期时间</span>
OK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="中文问题" tabindex="-1"><a class="header-anchor" href="#中文问题"><span>中文问题</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> SET name 一键三连
OK
<span class="token operator">&gt;</span> GET name
<span class="token string">&quot;<span class="token entity" title="\\xe4">\\xe4</span><span class="token entity" title="\\xb8">\\xb8</span><span class="token entity" title="\\x80">\\x80</span><span class="token entity" title="\\xe9">\\xe9</span><span class="token entity" title="\\x94">\\x94</span><span class="token entity" title="\\xae">\\xae</span><span class="token entity" title="\\xe4">\\xe4</span><span class="token entity" title="\\xb8">\\xb8</span><span class="token entity" title="\\x89">\\x89</span><span class="token entity" title="\\xe8">\\xe8</span><span class="token entity" title="\\xbf">\\xbf</span><span class="token entity" title="\\x9e">\\x9e</span>&quot;</span>
<span class="token operator">&gt;</span> quit

redis-cli <span class="token parameter variable">--raw</span>
<span class="token operator">&gt;</span> GET name
一键三连
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="list-列表-l-r" tabindex="-1"><a class="header-anchor" href="#list-列表-l-r"><span>List 列表 (L/R+)</span></a></h2><p>命令通常以 L/R 开头</p><h3 id="整体-1" tabindex="-1"><a class="header-anchor" href="#整体-1"><span>整体</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> LLEN letter			<span class="token comment"># 查询列表长度</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="增删改查-字段-1" tabindex="-1"><a class="header-anchor" href="#增删改查-字段-1"><span>增删改查 (字段)</span></a></h3><p>LPUSH (Left-Push)、RPUSH (Right-Push) 分别添加到列表左侧和右测</p><p>LPOP、RPOP 分别在列表左侧和右侧删除</p><p>LRANGE、RRANGE 查看</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 增</span>
<span class="token operator">&gt;</span> LPUSH letter a b c	<span class="token comment"># 添加到列表左侧，可批量添加。需要注意本质还是一个个依次添加，注意顺序</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>				<span class="token comment"># 这里显示的是当前数组内有多少个元素，还是成功添加了多少个元素来着？</span>

<span class="token comment"># 查</span>
<span class="token operator">&gt;</span> LRANGE letter <span class="token number">0</span> <span class="token parameter variable">-1</span>	<span class="token comment"># 获取第一个到最后一个元素</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;c&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;b&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;a&quot;</span>

<span class="token comment"># 删</span>
<span class="token operator">&gt;</span> RPOP letter <span class="token number">2</span>			<span class="token comment"># 删除列表左侧元素，可批量删除 (仅删除一个无需填数字)。需要注意本质还是一个个依次删除，注意顺序</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;a&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;b&quot;</span>
<span class="token operator">&gt;</span> LTRIN letter <span class="token number">1</span> <span class="token number">3</span>		<span class="token comment"># 只保留索引 1、2、3 的三个元素，其他删掉 (注意他这个末尾索引居然是保留的，很反直觉)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="妙用-模拟队列与栈" tabindex="-1"><a class="header-anchor" href="#妙用-模拟队列与栈"><span>妙用 (模拟队列与栈)</span></a></h3><ul><li>用 <code>RPOP</code> + <code>LPUSH</code>，就是一个简单的先进先出队列 (FILO)</li><li>用 <code>RPOP</code> + <code>RPUSH</code>，就是一个简单的先进后出栈 (FIFO)</li></ul><h2 id="set-集合-s" tabindex="-1"><a class="header-anchor" href="#set-集合-s"><span>Set 集合 (S+)</span></a></h2><p>Set 命令一般以 S 开头</p><p>底层一般为哈希表，所有元素为整数且少于512个时底层是intset</p><ul><li>SAdd</li><li>SRem</li><li>SIsMember</li><li>SMembers</li></ul><h3 id="增删改查-字段-2" tabindex="-1"><a class="header-anchor" href="#增删改查-字段-2"><span>增删改查 (字段)</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> SADD course Redis			<span class="token comment"># 增。若重复添加则返回0</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>

<span class="token operator">&gt;</span> SMEMBERS course			<span class="token comment"># 查 - 全部</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;Redis&quot;</span>

<span class="token operator">&gt;</span> SISMEMBER course Redis	<span class="token comment"># 查 - 是否在集合中。返回是则1，否则0</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>

<span class="token operator">&gt;</span> SREM course Redis			<span class="token comment"># 删</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="集合运算" tabindex="-1"><a class="header-anchor" href="#集合运算"><span>集合运算</span></a></h3><p>集合可以运算</p><ul><li>SINTER</li><li>SUNION</li><li>SDIFF</li><li>等</li></ul><h2 id="sortedset-有序集合-也叫zset-z" tabindex="-1"><a class="header-anchor" href="#sortedset-有序集合-也叫zset-z"><span>SortedSet 有序集合 (也叫ZSet, Z+)</span></a></h2><p>SortedSet 命令一般以 Z 开头</p><p>每个成员关联一个浮点数，由浮点数进行排序。集成员是不可重复的，但关联的浮点数是可重复的</p><p>分数的排序默认是从小到大排的</p><h3 id="增删改查-字段-3" tabindex="-1"><a class="header-anchor" href="#增删改查-字段-3"><span>增删改查 (字段)</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ZADD result <span class="token number">680</span> 清华 <span class="token number">660</span> 北大 <span class="token number">650</span> 复旦 <span class="token number">640</span> 浙大	   <span class="token comment"># 增。可批量。前面数字后面字段</span>
<span class="token number">4</span>
<span class="token operator">&gt;</span> ZRANGE result <span class="token number">0</span> <span class="token parameter variable">-1</span>								<span class="token comment"># 查 - 全部</span>
浙大
复旦
北大
清华
<span class="token operator">&gt;</span> ZRANGE result <span class="token number">0</span> <span class="token parameter variable">-1</span> WITHSCORES						<span class="token comment"># 查 - 全部，连同分数</span>
浙大
<span class="token number">640</span>
复旦
<span class="token number">650</span>
北大
<span class="token number">660</span>
清华
<span class="token number">680</span>
<span class="token operator">&gt;</span> ZSCORE result 清华									<span class="token comment"># 查 - 查看分数</span>
<span class="token number">680</span>
<span class="token operator">&gt;</span> ZRANK result 清华									<span class="token comment"># 查 - 查看排名 (默认，从小到大)</span>
<span class="token number">3</span>
<span class="token operator">&gt;</span> ZREVRANK result 清华								<span class="token comment"># 查 - 查看排名 (倒序，从大到小)</span>
<span class="token number">0</span>
<span class="token operator">&gt;</span> ZREM result 清华									<span class="token comment"># 删</span>
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hash-哈希-h" tabindex="-1"><a class="header-anchor" href="#hash-哈希-h"><span>Hash 哈希 (H+)</span></a></h2><p>键值对，命令均以 H 开头</p><h3 id="整体-2" tabindex="-1"><a class="header-anchor" href="#整体-2"><span>整体</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> HEKYS person			<span class="token comment"># 查 - 获取所有键</span>
name
<span class="token operator">&gt;</span> HLEN person			<span class="token comment"># 查 - 键值对数量</span>
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="增删改查-字段-4" tabindex="-1"><a class="header-anchor" href="#增删改查-字段-4"><span>增删改查 (字段)</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> HSET person name laoyang	<span class="token comment"># 增</span>
<span class="token number">1</span>
<span class="token operator">&gt;</span> HSET person age <span class="token number">100</span>
<span class="token number">1</span>
<span class="token operator">&gt;</span> HGET person name			<span class="token comment"># 查</span>
laoyang
<span class="token operator">&gt;</span> HGET person age
<span class="token number">100</span>
<span class="token operator">&gt;</span> HGETALL person			<span class="token comment"># 查 - 获取对应内容的所有键值对</span>
name
laoyang
age
<span class="token number">100</span>
<span class="token operator">&gt;</span> HEXISTS person name		<span class="token comment"># 查 - 是否存在</span>
<span class="token number">1</span>
<span class="token operator">&gt;</span> HDEL person age			<span class="token comment"># 删</span>
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="stream-消息队列-x" tabindex="-1"><a class="header-anchor" href="#stream-消息队列-x"><span>Stream 消息队列 (X+)</span></a></h2><p>版本问题：5.0版本引入的一个新数据结构，轻量级的消息队列</p><p>可以用于解决发布订阅模式的一些局限性</p><h3 id="学习先引-发布订阅模式" tabindex="-1"><a class="header-anchor" href="#学习先引-发布订阅模式"><span>学习先引：发布订阅模式</span></a></h3><p>可以有多个订阅终端，同时订阅一个发布终端</p><p>发布订阅模式 缺点：消息无法持久化、记录历史消息。可以使用Stream流来解决这些问题</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 订阅终端 1~n</span>
<span class="token operator">&gt;</span> SUBSCRIBE geekhour		<span class="token comment"># 订阅频道</span>
subscribe
geekhour
<span class="token number">1</span>							<span class="token comment"># 当发布终端进行发布时，这里会成功接收到</span>
message
geekhour
redis

<span class="token comment"># 发布终端</span>
<span class="token operator">&gt;</span> PUBLISH geekhour redis 	<span class="token comment"># 发布。这里表示发布一个&#39;redis&#39;消息</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="增删改查" tabindex="-1"><a class="header-anchor" href="#增删改查"><span>增删改查</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> XADD geekhour * course redis	<span class="token comment"># 增。*表示自动添加一个id。内容为redis课程</span>
								<span class="token comment"># id也可以不用*而是自己写。格式为 \`时间戳整数-递增序号整数\`，需要递增序号手动保持递增</span>
<span class="token string">&quot;1686495710450-0&quot;</span>

<span class="token operator">&gt;</span> XLEN geekhour					<span class="token comment"># 查。长度</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>

<span class="token operator">&gt;</span> XRANGE geekhour - +			<span class="token comment"># 查。所有消息，奇奇怪怪的语法糖</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1686495710450-0&quot;</span>
   <span class="token number">2</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;course&quot;</span>
      <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;redis&quot;</span>

<span class="token operator">&gt;</span> XDEL geekhour <span class="token number">1686495710450</span>-0	<span class="token comment"># 删</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>

<span class="token operator">&gt;</span> XTRIM geek MAXLEN <span class="token number">0</span>			<span class="token comment"># 删。这里的0表示删除所有信息</span>
<span class="token number">0</span>

<span class="token operator">&gt;</span> XREAD COUNT <span class="token number">2</span> BLOCK <span class="token number">1000</span> STREAMS geekhour <span class="token number">0</span>
								<span class="token comment"># 查 - 读信息</span>
								<span class="token comment"># - 2表示一次读取两个信息</span>
								<span class="token comment"># - 1000表示若无消息则堵塞1000ms</span>
								<span class="token comment">#   这里若无则阻塞1s然后返回nil</span>
								<span class="token comment"># - 0表示从第一消息开始读取</span>
								<span class="token comment">#   \`$\` 则表示从当前时间戳往后开始读取，通常与阻塞时间配合使用。这就就类似发布订阅模式模式了</span>
								<span class="token comment">#   \`&gt;\` 则表示读取最新消息</span>
								<span class="token comment"># 消息可以重复读取</span>
<span class="token punctuation">(</span>nil<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="消费者组" tabindex="-1"><a class="header-anchor" href="#消费者组"><span>消费者组</span></a></h3><p>（课程这里说得不好，没有说明有什么用）</p><p>版本问题：</p><blockquote><p>(弹幕) 用电脑的exe安装redis5.0的各位 createconsumer 关键字 需要6.2以上才能使用。请大家注意！</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> XGROUP CREATE geekhour group1 <span class="token number">0</span>											<span class="token comment"># 创建消费者组</span>
<span class="token string">&quot;OK&quot;</span>

<span class="token operator">&gt;</span> XGROUP CREATECONSUMER geekhour group1 consumer1							<span class="token comment"># 将消费者加入到消费者组里</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>

<span class="token operator">&gt;</span> XINFO <span class="token environment constant">GROUPS</span> geekhour														<span class="token comment"># 查看消费者组的信息</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">..</span>.

<span class="token operator">&gt;</span> XREADGROUP GROUP group1 consumer1 COUNT <span class="token number">2</span> BLOCK <span class="token number">3000</span> STREAMS geekhour <span class="token operator">&gt;</span>	<span class="token comment"># 查 - 消费者组版</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="geospatial-地理空间-geo" tabindex="-1"><a class="header-anchor" href="#geospatial-地理空间-geo"><span>Geospatial 地理空间 (Geo+)</span></a></h2><p>版本问题：Redis 3.2 版本新特性，存储地理位置、支持对地理位置进行计算操作 (距离计算、经纬度获取、查找附近的人等)</p><p>地理空间命令一般以 Z 开头</p><h3 id="增删改查-1" tabindex="-1"><a class="header-anchor" href="#增删改查-1"><span>增删改查</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> GEOADD city <span class="token number">116.405285</span> <span class="token number">39.904989</span> beijing	<span class="token comment"># 增</span>
<span class="token punctuation">(</span>integer <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span> GEOADD city <span class="token number">121.472644</span> <span class="token number">31.231706</span> shanghai <span class="token number">114.085947</span> <span class="token number">22.547</span> shenzhen
<span class="token punctuation">(</span>integer <span class="token number">2</span><span class="token punctuation">)</span>

<span class="token operator">&gt;</span> GEOPOS city beijing						<span class="token comment"># 查 - 获取经纬度</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;116.40528291463851929&quot;</span>
   <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;39.90498842291249559&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="特殊运算" tabindex="-1"><a class="header-anchor" href="#特殊运算"><span>特殊运算</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> GEODIST city beijing shanghai				<span class="token comment"># 查 - 两地距离</span>
<span class="token string">&quot;1067597.9668&quot;</span>
<span class="token operator">&gt;</span> GEODIST city beijing shanghai KM			<span class="token comment"># 查 - 两地距离 (km单位)</span>
<span class="token string">&quot;1067.5980&quot;</span>

<span class="token operator">&gt;</span> GEOSEARCH city FROMMEMBER shanghai BYRADIUS <span class="token number">300</span> KM	<span class="token comment"># 查 (按经维/圆形/矩形来搜)</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;hangzhou&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;shanghai&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hyperloglog-pf" tabindex="-1"><a class="header-anchor" href="#hyperloglog-pf"><span>HyperLogLog (PF+)</span></a></h2><p>这是一种用来做基数统计的算法</p><p>原理：使用随机算法，牺牲部分精确度换取更小内存消耗</p><p>用途 ：统计某个网站的UV，搜索词的次数</p><h3 id="增删改查-2" tabindex="-1"><a class="header-anchor" href="#增删改查-2"><span>增删改查</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> PFADD course <span class="token function">git</span> <span class="token function">docker</span> redis nginx	<span class="token comment"># 增</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token operator">&gt;</span> PFCOUNT course						<span class="token comment"># 查看基数</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并" tabindex="-1"><a class="header-anchor" href="#合并"><span>合并</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 前面的基础上继续</span>
<span class="token operator">&gt;</span> PFADD course2 python <span class="token function">git</span> go
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token operator">&gt;</span> PFMERGE result course course2			<span class="token comment"># 合并 (由于这两个课程中git是重复的，所以基数 = 4+3-1 = 6)</span>
OK
<span class="token operator">&gt;</span> PFCOUNT result
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bitmap-位图-bit" tabindex="-1"><a class="header-anchor" href="#bitmap-位图-bit"><span>Bitmap 位图 (Bit+)</span></a></h2><p>可以用String类型模拟数组，下标即偏移量。</p><p>实现：也是String的扩展，是String实现的（不过二进制存储），所以也可以用String方法进行操作</p><p>用途：记录用户在线状态、有没有点赞等</p><h3 id="增删改查-3" tabindex="-1"><a class="header-anchor" href="#增删改查-3"><span>增删改查</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> SETBIT dianzan <span class="token number">0</span> <span class="token number">1</span>				<span class="token comment"># 增/改</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token operator">&gt;</span> SETBIT dianzan <span class="token number">1</span> <span class="token number">0</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>

<span class="token operator">&gt;</span> GETBIT dianzan <span class="token number">0</span>					<span class="token comment"># 查</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token operator">&gt;</span> GETBIT dianzan <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>

<span class="token operator">&gt;</span> SET key dianzan <span class="token string">&quot;<span class="token entity" title="\\xF0">\\xF0</span>&quot;</span>			<span class="token comment"># 增/改 - 字符串方法 11110000</span>

<span class="token operator">&gt;</span> BITCOUNT dianzan					<span class="token comment"># 查 - 为一的计数</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
<span class="token operator">&gt;</span> BITPOS dianzan <span class="token number">0</span>					<span class="token comment"># 查 - 第一个值为0的下标</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串方法" tabindex="-1"><a class="header-anchor" href="#字符串方法"><span>字符串方法</span></a></h3><p>Bitmap的底层也是String，可能只是在此基础上重载了几个方法，如下标和计数等。</p><p>所以也能对字典使用字符串方法</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> SET key dianzan <span class="token string">&quot;<span class="token entity" title="\\xF0">\\xF0</span>&quot;</span>			<span class="token comment"># 这里等同 SETBIT 设置 11110000。话说这里是大端么</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="bitfield-位域" tabindex="-1"><a class="header-anchor" href="#bitfield-位域"><span>Bitfield 位域</span></a></h2><p>作用：将多个小的整数存到一个位图中，可以节约空间</p><p>用途：例如，记录一个玩家的 level、money、exp</p><h3 id="增删改查-4" tabindex="-1"><a class="header-anchor" href="#增删改查-4"><span>增删改查</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> BITFIELD player:1 <span class="token builtin class-name">set</span> u8 <span class="token comment">#0 1		# 写。#0表示第一个位置和约定为等级</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token operator">&gt;</span> GET player:1						<span class="token comment"># 读 - 字符串版。由于底层是字符串，这里也可以用字符串方法操作</span>
<span class="token string">&quot;<span class="token entity" title="\\x01">\\x01</span>&quot;</span>
<span class="token operator">&gt;</span> BITFIELD player:1 get u8 <span class="token comment">#0		# 读</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>

<span class="token operator">&gt;</span> BITFIELD player:1 <span class="token builtin class-name">set</span> u32 <span class="token comment">#1 100	# 写。这次位置01用了32位无符号整数</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token operator">&gt;</span> GET palyer:1
<span class="token string">&quot;<span class="token entity" title="\\x01">\\x01</span><span class="token entity" title="\\x00">\\x00</span><span class="token entity" title="\\x00">\\x00</span><span class="token entity" title="\\x00">\\x00</span><span class="token entity" title="\\x00">\\x00</span><span class="token entity" title="\\x00">\\x00</span><span class="token entity" title="\\x00">\\x00</span>d&quot;</span>		<span class="token comment">#     不过怎么感觉这里对齐有问题……………………………………</span>
<span class="token operator">&gt;</span> BITFIELD player:1 get u32 <span class="token comment">#1		# 读</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>

<span class="token operator">&gt;</span> BITFIELD player:1 incrby u32 <span class="token comment">#1 100	# 增加100</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">200</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小总结" tabindex="-1"><a class="header-anchor" href="#小总结"><span>小总结</span></a></h2><ul><li><p>记忆：SET or PUSH or ADD</p><ul><li>非容器：set/get</li><li>连续容器 (自定义顺序)：push/pop</li><li>离散容器 (无顺序/自动顺序)：add/rem</li></ul></li><li><p>哈希和字符串其实有点类似，哈希类似带组的字符串的感觉</p></li><li><p>除字符串外，一般都只能全查k2，而不能全查k1 (高危)</p></li></ul><table><thead><tr><th></th><th>增</th><th>删</th><th>全查</th><th>查值</th></tr></thead><tbody><tr><td>字符串</td><td>SET k v</td><td>DEL k</td><td>KEYS * (高危)</td><td>k：EXISTS k<br>v：GET k</td></tr><tr><td>哈希 (H+)</td><td>HSET k k2 v2</td><td>HDEL k k2</td><td>k2：HEKYS k<br>k2 v2：HGETALL k</td><td>k2：HEXISTS k1 k2<br>v2：HGET k1 k2</td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td>列表 (L/R+)</td><td>RPUSH k v</td><td>RPOP k num</td><td>v：RRANGE k 0 -1</td><td>v：RRANGE k start end</td></tr><tr><td>集合 (S+)</td><td>SADD k v</td><td>SREM k v</td><td>v：SMEMBERS k</td><td>v：SISMEMBER k v</td></tr><tr><td>有序集合 (Z+)</td><td>ZADD k v2 k2</td><td>ZREM k k2</td><td>k2：ZRANGE k 0 -1<br>k2 v2：ZRANGE k 0 -1 WITHSCORES</td><td>v2：ZSCORE k k2</td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td>消息队列 (X+)</td><td>XADD</td><td></td><td></td><td></td></tr><tr><td>地理空间 (Geo+)</td><td></td><td></td><td></td><td></td></tr><tr><td>HyperLogLog (PF+)</td><td></td><td></td><td></td><td></td></tr><tr><td>位图 (Bit+)</td><td></td><td></td><td></td><td></td></tr><tr><td>位域</td><td></td><td></td><td></td><td></td></tr></tbody></table>`,100),i=[l];function p(c,o){return s(),a("div",null,i)}const u=n(t,[["render",p],["__file","02_常用命令.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Web/04.%20%E5%90%8E%E7%AB%AF/%E6%95%B0%E6%8D%AE%E5%BA%93/Redis/02_%E5%8D%81%E5%A4%A7%E7%B1%BB%E5%9E%8B/02_%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html","title":"Redis 常用命令","lang":"zh-CN","frontmatter":{"description":"Redis 常用命令 README 更多命令查阅 首先这里不会记录所有命令，仅记录常用的。其他命令可以自己查： 见官网文档或在RedisInsight里查都是可以的 另外 Redis 非常好的一点是有自动提示，例如 输入 SET 后，后面就会提示个大概了 数据类型 (10种) 基本数据类型 (5种) 字符串 String 列表 List 集合 Set ...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Web/04.%20%E5%90%8E%E7%AB%AF/%E6%95%B0%E6%8D%AE%E5%BA%93/Redis/02_%E5%8D%81%E5%A4%A7%E7%B1%BB%E5%9E%8B/02_%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Redis 常用命令"}],["meta",{"property":"og:description","content":"Redis 常用命令 README 更多命令查阅 首先这里不会记录所有命令，仅记录常用的。其他命令可以自己查： 见官网文档或在RedisInsight里查都是可以的 另外 Redis 非常好的一点是有自动提示，例如 输入 SET 后，后面就会提示个大概了 数据类型 (10种) 基本数据类型 (5种) 字符串 String 列表 List 集合 Set ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis 常用命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"Redis 常用命令","slug":"redis-常用命令","link":"#redis-常用命令","children":[{"level":2,"title":"README","slug":"readme","link":"#readme","children":[{"level":3,"title":"更多命令查阅","slug":"更多命令查阅","link":"#更多命令查阅","children":[]},{"level":3,"title":"数据类型 (10种)","slug":"数据类型-10种","link":"#数据类型-10种","children":[]}]},{"level":2,"title":"String 字符串","slug":"string-字符串","link":"#string-字符串","children":[{"level":3,"title":"整体","slug":"整体","link":"#整体","children":[]},{"level":3,"title":"增删改查 (字段)","slug":"增删改查-字段","link":"#增删改查-字段","children":[]},{"level":3,"title":"增删改查 (多字段)","slug":"增删改查-多字段","link":"#增删改查-多字段","children":[]},{"level":3,"title":"过期时间","slug":"过期时间","link":"#过期时间","children":[]},{"level":3,"title":"中文问题","slug":"中文问题","link":"#中文问题","children":[]}]},{"level":2,"title":"List 列表 (L/R+)","slug":"list-列表-l-r","link":"#list-列表-l-r","children":[{"level":3,"title":"整体","slug":"整体-1","link":"#整体-1","children":[]},{"level":3,"title":"增删改查 (字段)","slug":"增删改查-字段-1","link":"#增删改查-字段-1","children":[]},{"level":3,"title":"妙用 (模拟队列与栈)","slug":"妙用-模拟队列与栈","link":"#妙用-模拟队列与栈","children":[]}]},{"level":2,"title":"Set 集合 (S+)","slug":"set-集合-s","link":"#set-集合-s","children":[{"level":3,"title":"增删改查 (字段)","slug":"增删改查-字段-2","link":"#增删改查-字段-2","children":[]},{"level":3,"title":"集合运算","slug":"集合运算","link":"#集合运算","children":[]}]},{"level":2,"title":"SortedSet 有序集合 (也叫ZSet, Z+)","slug":"sortedset-有序集合-也叫zset-z","link":"#sortedset-有序集合-也叫zset-z","children":[{"level":3,"title":"增删改查 (字段)","slug":"增删改查-字段-3","link":"#增删改查-字段-3","children":[]}]},{"level":2,"title":"Hash 哈希 (H+)","slug":"hash-哈希-h","link":"#hash-哈希-h","children":[{"level":3,"title":"整体","slug":"整体-2","link":"#整体-2","children":[]},{"level":3,"title":"增删改查 (字段)","slug":"增删改查-字段-4","link":"#增删改查-字段-4","children":[]}]},{"level":2,"title":"Stream 消息队列 (X+)","slug":"stream-消息队列-x","link":"#stream-消息队列-x","children":[{"level":3,"title":"学习先引：发布订阅模式","slug":"学习先引-发布订阅模式","link":"#学习先引-发布订阅模式","children":[]},{"level":3,"title":"增删改查","slug":"增删改查","link":"#增删改查","children":[]},{"level":3,"title":"消费者组","slug":"消费者组","link":"#消费者组","children":[]}]},{"level":2,"title":"Geospatial 地理空间 (Geo+)","slug":"geospatial-地理空间-geo","link":"#geospatial-地理空间-geo","children":[{"level":3,"title":"增删改查","slug":"增删改查-1","link":"#增删改查-1","children":[]},{"level":3,"title":"特殊运算","slug":"特殊运算","link":"#特殊运算","children":[]}]},{"level":2,"title":"HyperLogLog (PF+)","slug":"hyperloglog-pf","link":"#hyperloglog-pf","children":[{"level":3,"title":"增删改查","slug":"增删改查-2","link":"#增删改查-2","children":[]},{"level":3,"title":"合并","slug":"合并","link":"#合并","children":[]}]},{"level":2,"title":"Bitmap 位图 (Bit+)","slug":"bitmap-位图-bit","link":"#bitmap-位图-bit","children":[{"level":3,"title":"增删改查","slug":"增删改查-3","link":"#增删改查-3","children":[]},{"level":3,"title":"字符串方法","slug":"字符串方法","link":"#字符串方法","children":[]}]},{"level":2,"title":"Bitfield 位域","slug":"bitfield-位域","link":"#bitfield-位域","children":[{"level":3,"title":"增删改查","slug":"增删改查-4","link":"#增删改查-4","children":[]}]},{"level":2,"title":"小总结","slug":"小总结","link":"#小总结","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":8.6,"words":2580},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Platform/Web/04. 后端/数据库/Redis/02_十大类型/02_常用命令.md","autoDesc":true}');export{u as comp,m as data};

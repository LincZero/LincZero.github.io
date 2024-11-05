import{_ as i,c as a,b as r,a as e,d as t,e as s,o,r as d}from"./app-U5mPla4b.js";const u="/assets/惰性删除-L0VraUoV.jpg",p="/assets/定时删除流程-rOfd_EJy.jpg",f="/assets/lru字段-owmoRW_R.png",_={},c={href:"https://xiaolincoding.com/redis/module/strategy.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://xiaolincoding.com/redis/module/strategy.html",target:"_blank",rel:"noopener noreferrer"};function v(g,l){const n=d("ExternalLinkIcon");return o(),a("div",null,[l[4]||(l[4]=r('<h1 id="redis-内存" tabindex="-1"><a class="header-anchor" href="#redis-内存"><span>Redis 内存</span></a></h1><h2 id="redis-过期删除" tabindex="-1"><a class="header-anchor" href="#redis-过期删除"><span>Redis 过期删除</span></a></h2><h3 id="过期时间的设置和存储-过期字典、键值删除策略" tabindex="-1"><a class="header-anchor" href="#过期时间的设置和存储-过期字典、键值删除策略"><span>过期时间的设置和存储 (过期字典、键值删除策略)</span></a></h3><p>Redis 是可以对 key 设置过期时间的，因此需要有相应的机制将已过期的键值对删除，而做这个工作的就是<strong>过期键值删除策略</strong>。</p><p>每当我们对一个 key 设置了过期时间时，Redis 会把该 key 带上过期时间存储到一个<strong>过期字典</strong>（expires dict）中，也就是说「过期字典」保存了数据库中所有 key 的过期时间。</p><h3 id="过期删除策略" tabindex="-1"><a class="header-anchor" href="#过期删除策略"><span>过期删除策略</span></a></h3><p>Redis 使用的过期删除策略是「<strong>惰性删除+定期删除</strong>」这两种策略配和使用。</p><p>惰性删除策略和定期删除策略都有各自的优点，所以 Redis 选择「惰性删除+定期删除」这两种策略配和使用，以求在合理使用 CPU 时间和避免内存浪费之间取得平衡。</p><h4 id="惰性删除策略" tabindex="-1"><a class="header-anchor" href="#惰性删除策略"><span>惰性删除策略</span></a></h4><p>惰性删除策略的做法是：<strong>不主动删除过期键，每次从数据库访问 key 时，都检测 key 是否过期，如果过期则删除该 key。</strong></p><p>当我们查询一个 key 时，Redis 首先检查该 key 是否存在于过期字典中：</p><ul><li>如果不在，则正常读取键值；</li><li>如果存在，则会获取该 key 的过期时间，然后与当前系统时间进行比对，如果比系统时间大，那就没有过期，否则判定该 key 已过期。</li></ul><p>惰性删除的流程图如下：</p><p><img src="'+u+'" alt="img" loading="lazy"></p><ul><li><p>优点</p><ul><li><p>损耗少、性能好，CPU友好。</p><p>因为每次访问时，才会检查 key 是否过期，所以此策略只会使用很少的系统资源，因此，惰性删除策略对 CPU 时间最友好。</p></li></ul></li><li><p>缺点</p><ul><li><p>内存浪费，内存不友好。</p><p>如果一个 key 已经过期，而这个 key 又仍然保留在数据库中，那么只要这个过期 key 一直没有被访问，它所占用的内存就不会释放，造成了一定的内存空间浪费。所以，惰性删除策略对内存不友好。</p></li></ul></li></ul><h4 id="定期删除" tabindex="-1"><a class="header-anchor" href="#定期删除"><span>定期删除</span></a></h4><p>定期删除策略的做法是，<strong>每隔一段时间「随机」从数据库中取出一定数量的 key 进行检查，并删除其中的过期key。</strong></p><p>Redis 的定期删除的流程：</p><ol><li>从过期字典中随机抽取 20 个 key；</li><li>检查这 20 个 key 是否过期，并删除已过期的 key；</li><li>判断本轮检查的已过期 key 的数量 <ul><li>如果超过 5 个（20/4），也就是「已过期 key 的数量」占比「随机抽取 key 的数量」大于 25%，则继续重复步骤 1</li><li>如果已过期的 key 比例小于 25%，则停止继续删除过期 key，然后等待下一轮再检查</li></ul></li></ol><p>可以看到，定期删除是一个循环的流程。那 Redis 为了保证定期删除不会出现循环过度，导致线程卡死现象，为此增加了定期删除循环流程的时间上限，默认不会超过 25ms。</p><p>定期删除的流程如下：</p><p><img src="'+p+'" alt="img" loading="lazy"></p><ul><li><p>优点</p><ul><li>通过<em>限制</em>删除操作执行的<em>时长和频率</em>，来减少删除操作对 CPU 的影响，同时也能删除一部分过期的数据减少了过期键对空间的无效占用。</li></ul></li><li><p>缺点</p><ul><li><p>难以确定删除操作执行的时长和频率。</p><p>如果执行的太频繁，就会对 CPU 不友好；</p><p>如果执行的太少，那又和惰性删除一样了，过期 key 占用的内存不会及时得到释放。</p></li></ul></li></ul><p>TIP</p>',24)),e("blockquote",null,[e("p",null,[l[1]||(l[1]=t("Redis 的过期删除的内容就暂时提这些，想更详细了解的，可以详细看这篇：")),e("a",c,[l[0]||(l[0]=t("Redis 过期删除策略和内存淘汰策略有什么区别？")),s(n)])])]),l[5]||(l[5]=r('<h3 id="持久化时-如何处理过期键" tabindex="-1"><a class="header-anchor" href="#持久化时-如何处理过期键"><span>持久化时，如何处理过期键？</span></a></h3><p>Redis 持久化文件有两种格式：RDB（Redis Database）和 AOF（Append Only File），下面我们分别来看过期键在这两种格式中的呈现状态。</p><p>RDB 文件分为两个阶段：</p><ul><li><p><strong>RDB 文件生成阶段</strong>：</p><p>从内存状态持久化成 RDB（文件）的时候，会对 key 进行过期检查，过期键*「不会」被保存到新的 RDB 文件中*，因此 Redis 中的过期键不会对生成新 RDB 文件产生任何影响。</p></li><li><p><strong>RDB 加载阶段</strong>：</p><p>RDB 加载阶段时，要看服务器是主服务器还是从服务器，分别对应以下两种情况：</p><ul><li>如果 Redis 是「主服务器」运行模式的话，在载入 RDB 文件时，程序会对文件中保存的键进行检查，过期键*「不会」被载入到数据库中*。所以过期键不会对载入 RDB 文件的主服务器造成影响；</li><li>如果 Redis 是「从服务器」运行模式的话，在载入 RDB 文件时，<em>不论键是否过期都会被载入到数据库中</em>。但由于主从服务器在进行数据同步时，从服务器的数据会被清空。所以一般来说，过期键对载入 RDB 文件的从服务器也不会造成影响。</li></ul></li></ul><p>AOF 文件分为两个阶段：</p><ul><li><p><strong>AOF 文件写入阶段</strong>：</p><p>当 Redis 以 AOF 模式持久化时，如果数据库某个过期键还没被删除，那么 AOF 文件会<em>保留此过期键</em></p><p>当此过期键被删除后，Redis 会向 AOF 文件<em>追加一条 DEL 命令来显式地删除该键值</em>。</p></li><li><p><strong>AOF 重写阶段</strong>：</p><p>执行 AOF 重写时，会对 Redis 中的键值对进行检查，<em>已过期的键不会被保存到重写后的 AOF 文件中</em>，因此不会对 AOF 重写造成任何影响。</p></li></ul><h3 id="主从模式中-如何处理过期键" tabindex="-1"><a class="header-anchor" href="#主从模式中-如何处理过期键"><span>主从模式中，如何处理过期键？</span></a></h3><p>当 Redis 运行在主从模式下时，<strong>从库不会进行过期扫描，从库对过期的处理是被动的</strong>。也就是即使从库中的 key 过期了，如果有客户端访问从库时，依然可以得到 key 对应的值，像未过期的键值对一样返回。</p><p>从库的过期键处理依靠主服务器控制，<strong>主库在 key 到期时，会在 AOF 文件里增加一条 del 指令，同步到所有的从库</strong>，从库通过执行这条 del 指令来删除过期的 key。</p><h2 id="redis-内存淘汰" tabindex="-1"><a class="header-anchor" href="#redis-内存淘汰"><span>Redis 内存淘汰</span></a></h2><p>什么是内存淘汰？ —— (如下)</p><p>内存满了会发生什么？—— 内存淘汰</p><p>在 Redis 的运行内存达到了某个阀值，就会触发<strong>内存淘汰机制</strong>，这个阀值就是我们设置的最大运行内存。</p><p>此值在 Redis 的配置文件中可以找到，配置项为 maxmemory。</p><p>TIP</p>',15)),e("blockquote",null,[e("p",null,[l[3]||(l[3]=t("Redis 的内存淘汰的内容，想更详细了解的，可以详细看这篇：")),e("a",b,[l[2]||(l[2]=t("Redis 过期删除策略和内存淘汰策略有什么区别？")),s(n)])])]),l[6]||(l[6]=e("h3",{id:"八种内存淘汰策略",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#八种内存淘汰策略"},[e("span",null,"八种内存淘汰策略")])],-1)),l[7]||(l[7]=e("p",null,"Redis 内存淘汰策略共有八种",-1)),l[8]||(l[8]=e("p",null,"这些策略可以按淘汰范围分类：",-1)),l[9]||(l[9]=e("div",{class:"ab-note drop-shadow"},[e("table",{class:"ab-table ab-list-table"},[e("tbody",null,[e("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"不进行数据淘汰的策略",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 0
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,"不进行数据淘汰的策略")])])])]),e("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"**noeviction**",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 1
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,[e("strong",null,"noeviction")])])])]),e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,[e("em",null,"不淘汰")])])])]),e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,"它表示当运行内存超过最大设置内存时，不淘汰任何数据，而是不再提供服务，直接返回错误")])])]),e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,[e("em",null,"Redis3.0 之后"),t("，默认的内存淘汰策略")])])])])]),e("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"进行数据淘汰的策略",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 2
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,"进行数据淘汰的策略")])])])]),e("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"在设置了过期时间的数据中进行淘汰",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 3
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,"在设置了过期时间的数据中进行淘汰")])])])]),e("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"**volatile-TTL**",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 4
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,[e("strong",null,"volatile-TTL")])])])]),e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,[e("em",null,"Time To Live，早过期淘汰")])])])]),e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,"优先淘汰更早过期的键")])])]),e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div")])])]),e("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"**volatile-Random**",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 5
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,[e("strong",null,"volatile-Random")])])])]),e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,[e("em",null,"Random，随机淘汰")])])])]),e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,"随机淘汰设置了过期时间的任意键值")])])]),e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div")])])]),e("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"**volatile-LRU**",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 6
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,[e("strong",null,"volatile-LRU")])])])]),e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,[e("em",null,"Least Recently Used，最近最少使用")])])])]),e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,"淘汰所有设置了过期时间的键值中，最久未使用的键值")])])]),e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,[e("em",null,"Redis3.0 之前"),t("，默认的内存淘汰策略")])])])])]),e("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"**volatile-LFU**",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 7
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,[e("strong",null,"volatile-LFU")])])])]),e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,[e("em",null,"Least Frequently Used，最近最不常用")])])])]),e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,"淘汰所有设置了过期时间的键值中，最少使用的键值")])])]),e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,[e("em",null,"Redis4.0 之后"),t("，新增的内存淘汰策略")])])])])]),e("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"在所有数据范围内进行淘汰",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 8
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,"在所有数据范围内进行淘汰")])])])]),e("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"**allkeys-Random**",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 9
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,[e("strong",null,"allkeys-Random")])])])]),e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,[e("em",null,"随机")])])])]),e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,"随机淘汰任意键值")])])])]),e("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"**allkeys-LRU**",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 10
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,[e("strong",null,"allkeys-LRU")])])])]),e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,[e("em",null,"Least Recently Used，最近最少使用")])])])]),e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,"淘汰整个键值中最久未使用的键值")])])])]),e("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"**allkeys-LFU**",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 11
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,[e("strong",null,"allkeys-LFU")])])])]),e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,[e("em",null,"Least Frequently Used，最近最不常用")])])])]),e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,"淘汰整个键值中最少使用的键值")])])]),e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,[e("em",null,"Redis4.0 之后"),t("，新增的内存淘汰策略")])])])])])])])],-1)),l[10]||(l[10]=r(`<p>也可以大致分成 LRU 和 LFU 两种</p><h3 id="lru-算法和-lfu-算法有什么区别" tabindex="-1"><a class="header-anchor" href="#lru-算法和-lfu-算法有什么区别"><span>LRU 算法和 LFU 算法有什么区别？</span></a></h3><h4 id="lru-算法的概念-least-recently-used-最近最少使用" tabindex="-1"><a class="header-anchor" href="#lru-算法的概念-least-recently-used-最近最少使用"><span>LRU 算法的概念 (Least Recently Used，最近最少使用)</span></a></h4><p>LRU 全称是 Least Recently Used 翻译为最近最少使用，会选择淘汰<strong>最近最少使用</strong>的数据。</p><h4 id="lru-算法的实现" tabindex="-1"><a class="header-anchor" href="#lru-算法的实现"><span>LRU 算法的实现</span></a></h4><p>传统 LRU 算法</p><blockquote><p>实现：</p><ul><li>传统 LRU 算法的实现是基于「<em>链表</em>」结构，链表中的元素按照操作顺序从前往后排列，最新操作的键会被移动到表头。</li><li>当需要内存淘汰时，只需要删除链表尾部的元素即可，因为链表尾部的元素就代表最久未被使用的元素。</li></ul><p>缺点：</p><ul><li>需要用链表管理所有的缓存数据，这会带来<em>额外的空间开销</em></li><li>当有数据被访问时，需要在链表上把该数据移动到头端，如果有大量数据被访问，就会带来很多链表移动操作。存在<em>高耗时、低性能</em>问题</li></ul></blockquote><p>由于传统的 LRU 算法存在两个缺点，Redis 并没有使用这样的方式实现 LRU 算法</p><p>Redis的 LRU 算法 (近似算法)</p><blockquote><p>实现：</p><ul><li><p>在 Redis 的对象结构体中添加一个额外的字段，用于记录此数据的最后一次访问时间</p></li><li><p>当 Redis 进行内存淘汰时，会使用<em>随机采样的方式来淘汰数据</em>，它是随机取 5 个值（此值可配置），然后淘汰最久没有使用的那个</p><p>这是一种<strong>近似 LRU 算法</strong>，目的是为了更好的节约内存</p></li></ul><p>优点：</p><ul><li>不用为所有的数据维护一个大链表，<em>节省了空间占用</em></li><li>不用在每次数据访问时都移动链表项，提升了缓存的<em>性能</em></li></ul><p>缺点：</p><ul><li>无法解决缓存污染问题。比如应用一次读取了大量的数据，而这些数据只会被读取这一次，那么这些数据会留存在 Redis 缓存中很长一段时间，造成缓存污染。</li></ul><p>因此，在 Redis 4.0 之后引入了 LFU 算法来解决这个问题。</p></blockquote><h4 id="lfu-算法的概念-least-frequently-used-最近最不常用" tabindex="-1"><a class="header-anchor" href="#lfu-算法的概念-least-frequently-used-最近最不常用"><span>LFU 算法的概念 (Least Frequently Used，最近最不常用)</span></a></h4><p>LFU 全称是 Least Frequently Used 翻译为最近最不常用的，LFU 算法是根据<strong>数据访问次数</strong>来淘汰数据的，它的核心思想是 “如果数据过去被访问多次，那么将来被访问的频率也更高”</p><p>所以， LFU 算法会记录每个数据的访问次数。当一个数据被再次访问时，就会增加该数据的访问次数。这样就解决了偶尔被访问一次之后，数据留存在缓存中很长一段时间的问题，相比于 LRU 算法也更合理一些。</p><h4 id="lfu-算法的实现" tabindex="-1"><a class="header-anchor" href="#lfu-算法的实现"><span>LFU 算法的实现</span></a></h4><p>LFU 算法相比于 LRU 算法的实现，多记录了「数据的访问频次」的信息。Redis 对象的结构如下：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">redisObject</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token comment">// 24 bits，用于记录对象的访问信息</span>
    <span class="token keyword">unsigned</span> lru<span class="token operator">:</span><span class="token number">24</span><span class="token punctuation">;</span>  
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span> robj<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="总结、区别" tabindex="-1"><a class="header-anchor" href="#总结、区别"><span>总结、区别</span></a></h4><p>Redis 对象头中的 lru 字段，在 LRU 算法下和 LFU 算法下使用方式并不相同。</p><ul><li><p>LRU 算法中 Redis 对象头的 24 bits 的 lru 字段：</p><p>是用来记录 key 的访问时间戳。因此在 LRU 模式下，Redis可以根据对象头中的 lru 字段记录的值，来比较最后一次 key 的访问时间长，从而淘汰最久未被使用的 key。</p></li><li><p>LFU 算法中 Redis对象头的 24 bits 的 lru 字段：</p><p>被分成两段来存储，高 16bit 存储 ldt(Last Decrement Time)，用来记录 key 的访问时间戳；低 8bit 存储 logc(Logistic Counter)，用来记录 key 的访问频次</p><p><img src="`+f+'" alt="img" loading="lazy"></p></li></ul>',19))])}const h=i(_,[["render",v],["__file","03.2. 存储-内存调度.html.vue"]]),y=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Develop/02.%20Theory/Computer/03.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F%20-%20%E7%BA%BF%E6%80%A7%E5%AD%A6%E4%B9%A0%E7%89%88/%E3%80%8A%E5%B0%8F%E6%9E%97coding_%E5%9B%BE%E8%A7%A3%E7%B3%BB%E5%88%97%E3%80%8B/04.%20%E5%9B%BE%E8%A7%A3Redis/01.%20%E9%9D%A2%E8%AF%95%E7%AF%87/03.2.%20%E5%AD%98%E5%82%A8-%E5%86%85%E5%AD%98%E8%B0%83%E5%BA%A6.html","title":"Redis 内存","lang":"zh-CN","frontmatter":{"description":"Redis 内存 Redis 过期删除 过期时间的设置和存储 (过期字典、键值删除策略) Redis 是可以对 key 设置过期时间的，因此需要有相应的机制将已过期的键值对删除，而做这个工作的就是过期键值删除策略。 每当我们对一个 key 设置了过期时间时，Redis 会把该 key 带上过期时间存储到一个过期字典（expires dict）中，也就是...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20DesignAndDevelop/Develop/02.%20Theory/Computer/03.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F%20-%20%E7%BA%BF%E6%80%A7%E5%AD%A6%E4%B9%A0%E7%89%88/%E3%80%8A%E5%B0%8F%E6%9E%97coding_%E5%9B%BE%E8%A7%A3%E7%B3%BB%E5%88%97%E3%80%8B/04.%20%E5%9B%BE%E8%A7%A3Redis/01.%20%E9%9D%A2%E8%AF%95%E7%AF%87/03.2.%20%E5%AD%98%E5%82%A8-%E5%86%85%E5%AD%98%E8%B0%83%E5%BA%A6.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Redis 内存"}],["meta",{"property":"og:description","content":"Redis 内存 Redis 过期删除 过期时间的设置和存储 (过期字典、键值删除策略) Redis 是可以对 key 设置过期时间的，因此需要有相应的机制将已过期的键值对删除，而做这个工作的就是过期键值删除策略。 每当我们对一个 key 设置了过期时间时，Redis 会把该 key 带上过期时间存储到一个过期字典（expires dict）中，也就是..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis 内存\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"Redis 内存","slug":"redis-内存","link":"#redis-内存","children":[{"level":2,"title":"Redis 过期删除","slug":"redis-过期删除","link":"#redis-过期删除","children":[{"level":3,"title":"过期时间的设置和存储 (过期字典、键值删除策略)","slug":"过期时间的设置和存储-过期字典、键值删除策略","link":"#过期时间的设置和存储-过期字典、键值删除策略","children":[]},{"level":3,"title":"过期删除策略","slug":"过期删除策略","link":"#过期删除策略","children":[{"level":4,"title":"惰性删除策略","slug":"惰性删除策略","link":"#惰性删除策略","children":[]},{"level":4,"title":"定期删除","slug":"定期删除","link":"#定期删除","children":[]}]},{"level":3,"title":"持久化时，如何处理过期键？","slug":"持久化时-如何处理过期键","link":"#持久化时-如何处理过期键","children":[]},{"level":3,"title":"主从模式中，如何处理过期键？","slug":"主从模式中-如何处理过期键","link":"#主从模式中-如何处理过期键","children":[]}]},{"level":2,"title":"Redis 内存淘汰","slug":"redis-内存淘汰","link":"#redis-内存淘汰","children":[{"level":3,"title":"八种内存淘汰策略","slug":"八种内存淘汰策略","link":"#八种内存淘汰策略","children":[]},{"level":3,"title":"LRU 算法和 LFU 算法有什么区别？","slug":"lru-算法和-lfu-算法有什么区别","link":"#lru-算法和-lfu-算法有什么区别","children":[{"level":4,"title":"LRU 算法的概念 (Least Recently Used，最近最少使用)","slug":"lru-算法的概念-least-recently-used-最近最少使用","link":"#lru-算法的概念-least-recently-used-最近最少使用","children":[]},{"level":4,"title":"LRU 算法的实现","slug":"lru-算法的实现","link":"#lru-算法的实现","children":[]},{"level":4,"title":"LFU 算法的概念 (Least Frequently Used，最近最不常用)","slug":"lfu-算法的概念-least-frequently-used-最近最不常用","link":"#lfu-算法的概念-least-frequently-used-最近最不常用","children":[]},{"level":4,"title":"LFU 算法的实现","slug":"lfu-算法的实现","link":"#lfu-算法的实现","children":[]},{"level":4,"title":"总结、区别","slug":"总结、区别","link":"#总结、区别","children":[]}]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":10.1,"words":3031},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Develop/02. Theory/Computer/03. 计算机系统 - 线性学习版/《小林coding_图解系列》/04. 图解Redis/01. 面试篇/03.2. 存储-内存调度.md","excerpt":"\\n<h2>Redis 过期删除</h2>\\n<h3>过期时间的设置和存储 (过期字典、键值删除策略)</h3>\\n<p>Redis 是可以对 key 设置过期时间的，因此需要有相应的机制将已过期的键值对删除，而做这个工作的就是<strong>过期键值删除策略</strong>。</p>\\n<p>每当我们对一个 key 设置了过期时间时，Redis 会把该 key 带上过期时间存储到一个<strong>过期字典</strong>（expires dict）中，也就是说「过期字典」保存了数据库中所有 key 的过期时间。</p>\\n<h3>过期删除策略</h3>\\n<p>Redis 使用的过期删除策略是「<strong>惰性删除+定期删除</strong>」这两种策略配和使用。</p>","autoDesc":true}');export{h as comp,y as data};

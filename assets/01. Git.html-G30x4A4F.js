import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as c,c as o,b as n,e as s,d as e,a as i}from"./app-Bh75ISgc.js";const r={},p=i('<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git"><span>Git</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="git-1" tabindex="-1"><a class="header-anchor" href="#git-1"><span>Git</span></a></h1><p>参考：</p>',4),d=n("strong",null,"主要参考（比较全）",-1),u={href:"https://www.cnblogs.com/LEPENGYANG/p/15915736.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.bilibili.com/video/BV15K4y1H7SV",target:"_blank",rel:"noopener noreferrer"},v=n("li",null,"《GitHub入门与实践》",-1),b=n("li",null,"git有中文的官方手册可见",-1),h={href:"https://www.bbsmax.com/A/D854jlZVzE/",target:"_blank",rel:"noopener noreferrer"},g=i(`<h2 id="入门" tabindex="-1"><a class="header-anchor" href="#入门"><span>入门</span></a></h2><p>版本管理 VCS（Version Control Systems）</p><ul><li><p>原始的版本管理</p><ul><li>拷贝一份继续写，重复这个过程</li><li>缺点：电脑里多个版本的代码</li></ul></li><li><p>本地代码管理工具 RCS（Revision Control System）</p><ul><li>RCS是记录每一次更新的差异，而不是记录每次更新的完整版本</li><li>缺点：使用与个人管理代码，但难以在团队协作上</li></ul></li><li><p>CVCS</p><ul><li>中央版本控制服务器 CVCS（Centralized Version Control Systems），上面有个版本数据库 首先由某人新建项目并上传初始代码，员工可将代码拷贝下来再传回去</li><li>缺点：团队同时编辑同一份文件时会比较麻烦 如果大家划分不同模块那相安无事。但往往产品的模块划分通常不太好，藕合严重。又或者有核心代码，几乎所有功能都与之有关，出问题都要去修它。 团队协作时，经常会同时编辑同一份文件</li></ul></li><li><p>Git</p><ul><li><p>Bitkeeper不再免费使用，Linus一怒之下撸了个git 目前被广泛采用，并催生了如github、gitee等代码管理的在线仓库，让开源变得简单 是个分布式代码版本管理工具</p></li><li><p>分布式</p><ul><li>SVN是集中化管理，有中央版本控制服务器 CVCS（Centralized Version Control Systems），如果服务器出了问题那么谁也提交不了代码</li><li><strong>git可以在本地化开发，不影响开发</strong></li></ul></li><li><p>版本管理</p></li><li><p>git工作流程</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
当前目录<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">init</span><span class="token arrow operator">--&gt;</span></span>
工作目录<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">add</span><span class="token arrow operator">--&gt;</span></span>
暂存区<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">commit</span><span class="token arrow operator">--&gt;</span></span>仓库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="一些原理-实现原理与思想原理" tabindex="-1"><a class="header-anchor" href="#一些原理-实现原理与思想原理"><span>一些原理（实现原理与思想原理）</span></a></h2><h3 id="本地仓库原理" tabindex="-1"><a class="header-anchor" href="#本地仓库原理"><span>本地仓库原理</span></a></h3><p>分为本地仓库和最终push的远程仓库</p><p>所以说就算离线也是可以使用git工具的</p><ul><li>commit后，就会将工作的项目传到本地仓库</li><li>push后，则会将本地仓库同步给远程仓库</li></ul><h3 id="版本管理原理" tabindex="-1"><a class="header-anchor" href="#版本管理原理"><span>版本管理原理</span></a></h3><p>【注：pull=fetch+merge】</p><h3 id="多人协同开发原理" tabindex="-1"><a class="header-anchor" href="#多人协同开发原理"><span>多人协同开发原理</span></a></h3><h3 id="一些颜色" tabindex="-1"><a class="header-anchor" href="#一些颜色"><span>一些颜色</span></a></h3><ul><li>绿色</li><li>黄色</li><li>红色</li><li>A</li><li>U</li><li>D</li></ul><h2 id="git命令" tabindex="-1"><a class="header-anchor" href="#git命令"><span>Git命令</span></a></h2><p>下载：https://git-scm.com/download/win</p><p>该软件包括命令行git已经图形化界面的git客户端</p><h3 id="使用流程" tabindex="-1"><a class="header-anchor" href="#使用流程"><span>使用流程</span></a></h3><h4 id="提交到远程" tabindex="-1"><a class="header-anchor" href="#提交到远程"><span>提交到远程</span></a></h4><p>git工作流程：</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
当前目录<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">init</span><span class="token arrow operator">--&gt;</span></span>
工作目录<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">add</span><span class="token arrow operator">--&gt;</span></span>
暂存区<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">commit</span><span class="token arrow operator">--&gt;</span></span>仓库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码更新（简单记下来就是add commit push）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;可选的补充说明&quot;</span>
<span class="token function">git</span> push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="远程到本地" tabindex="-1"><a class="header-anchor" href="#远程到本地"><span>远程到本地</span></a></h4><p>需要专业代码托管网站</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># cd到指定路径后clone</span>
<span class="token function">git</span> clone https://github.com/<span class="token punctuation">..</span>.

<span class="token comment"># 当后续有版本更新时,在同路径下git pull即可。增量同步，不会下载太多东西</span>
<span class="token comment"># 不要重新clone。1. clone需要退回上一级clone，2. 而且他需要有一个空文件夹，你要把原来的项目给删了或备份，3. 你要重新npm install</span>
<span class="token function">git</span> pull

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git fetch</code>和<code>git pull</code>的区别：</p><p>与git pull相比git fetch相当于是从远程获取最新版本到本地，但不会自动merge。如果需要有选择的合并git fetch是更好的选择。效果相同时git pull将更为快捷。</p><h4 id="一些不必要操作" tabindex="-1"><a class="header-anchor" href="#一些不必要操作"><span>一些不必要操作</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 在团队协作开发时，可以知道是谁提交的代码</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;YourName&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;Email@qq.com&quot;</span>

<span class="token function">git</span> init			<span class="token comment"># 本地仓库初始化。此句后项目文件变绿，有个U字，表示git开始工作了</span>

<span class="token function">git</span> add.			<span class="token comment"># 添加本文件夹下的所有文件</span>
					<span class="token comment"># 此句后项目文件后有个A字，表示added</span>

<span class="token function">git</span> status			<span class="token comment"># （不必要）查看git状态。可以看到追踪了哪些代码</span>

<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;可选的补充说明&quot;</span>	
					<span class="token comment"># 本次提交的内容，进入到git仓库</span>

<span class="token function">git</span> log				<span class="token comment"># 可以看到本次提交的日志</span>
					<span class="token comment"># 会额外显示一个commit id，可以通过git reset --hard commit_id来回退到任意版本</span>
					<span class="token comment"># commit_id的head是指向版本分支的指针</span>

					<span class="token comment"># 标签相关，但我没明白有什么用</span>
<span class="token function">git</span> tag v0.1.3		<span class="token comment"># 指定标签</span>
<span class="token function">git</span> tag				<span class="token comment"># 查看标签</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决冲突" tabindex="-1"><a class="header-anchor" href="#解决冲突"><span>解决冲突</span></a></h3>`,30),k={href:"https://www.cnblogs.com/LEPENGYANG/p/15915736.html",target:"_blank",rel:"noopener noreferrer"},f=i(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 1.查看远程分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-a</span>

<span class="token comment"># 2.查看本地分支</span>
<span class="token function">git</span> branch

<span class="token comment"># 3.创建并切换分支 （加-b表示创建并切换）</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> 分支名

<span class="token comment"># 4.切换回分支</span>
<span class="token function">git</span> checkout 分支名

<span class="token comment"># 5.从主分支里创建新分支</span>
<span class="token function">git</span> checkout master <span class="token parameter variable">-b</span> 新分支名

<span class="token comment"># 6.合并某分支到当前分支</span>
<span class="token function">git</span> merge 分支名

<span class="token comment"># 7.删除分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> 分支名
<span class="token function">git</span> branch <span class="token parameter variable">-D</span> 分支名 <span class="token punctuation">(</span>强行删除分支<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三个情景</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 情景一 提交或拉取时冲突</span>
<span class="token function">git</span> stash
<span class="token function">git</span> pull
<span class="token function">git</span> stash pop

<span class="token comment"># 情景二 如果你想完全地覆盖本地的代码，只保留服务器端代码，则直接回退到上一个版本，再进行pull</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD^
<span class="token function">git</span> pull origin master
<span class="token comment"># 注：origin master表示git的主分支</span>

<span class="token comment"># 情景三 分支合并时冲突(当我们git merge 分支名 时)</span>
<span class="token number">1</span>. <span class="token function">git</span> status <span class="token punctuation">(</span>查看发生冲突的文<span class="token punctuation">)</span>
<span class="token number">2</span>. 然后手动合并冲突
<span class="token number">3</span>. <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>  <span class="token punctuation">(</span>添加更改后的文件<span class="token punctuation">)</span>
<span class="token number">4</span>. <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;xj&#39;</span> <span class="token punctuation">(</span>提交<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git指令" tabindex="-1"><a class="header-anchor" href="#git指令"><span>git指令</span></a></h3><h4 id="git-列举命令" tabindex="-1"><a class="header-anchor" href="#git-列举命令"><span>git，列举命令</span></a></h4><p>非常友好，直接列举了常用的命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span>
start a working area <span class="token punctuation">(</span>see also: <span class="token function">git</span> <span class="token builtin class-name">help</span> tutorial<span class="token punctuation">)</span>
   clone             Clone a repository into a new directory
   init              Create an empty Git repository or reinitialize an existing one

work on the current change <span class="token punctuation">(</span>see also: <span class="token function">git</span> <span class="token builtin class-name">help</span> everyday<span class="token punctuation">)</span>
   <span class="token function">add</span>               Add <span class="token function">file</span> contents to the index
   <span class="token function">mv</span>                Move or <span class="token function">rename</span> a file, a directory, or a symlink
   restore           Restore working tree files
   <span class="token function">rm</span>                Remove files from the working tree and from the index
   sparse-checkout   Initialize and modify the sparse-checkout

examine the <span class="token function">history</span> and state <span class="token punctuation">(</span>see also: <span class="token function">git</span> <span class="token builtin class-name">help</span> revisions<span class="token punctuation">)</span>
   bisect            Use binary search to <span class="token function">find</span> the commit that introduced a bug
   <span class="token function">diff</span>              Show changes between commits, commit and working tree, etc
   <span class="token function">grep</span>              Print lines matching a pattern
   log               Show commit logs
   show              Show various types of objects
   status            Show the working tree status

grow, mark and tweak your common <span class="token function">history</span>
   branch            List, create, or delete branches
   commit            Record changes to the repository
   merge             Join two or <span class="token function">more</span> development histories together
   rebase            Reapply commits on <span class="token function">top</span> of another base tip
   reset             Reset current HEAD to the specified state
   switch            Switch branches
   tag               Create, list, delete or verify a tag object signed with GPG

collaborate <span class="token punctuation">(</span>see also: <span class="token function">git</span> <span class="token builtin class-name">help</span> workflows<span class="token punctuation">)</span>
   fetch             Download objects and refs from another repository
   pull              Fetch from and integrate with another repository or a <span class="token builtin class-name">local</span> branch
   push              Update remote refs along with associated objects

<span class="token string">&#39;git help -a&#39;</span> and <span class="token string">&#39;git help -g&#39;</span> list available subcommands and some
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="github强制覆盖本地" tabindex="-1"><a class="header-anchor" href="#github强制覆盖本地"><span>github强制覆盖本地</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> fetch <span class="token parameter variable">--all</span>                   <span class="token comment"># fetch所有分支上的内容，也可以选择只备份一部分内容</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> origin/master    <span class="token comment"># 重置本地分支</span>
<span class="token function">git</span> pull
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="项目状态" tabindex="-1"><a class="header-anchor" href="#项目状态"><span>项目状态</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> status

On branch master
Your branch is up to <span class="token function">date</span> with <span class="token string">&#39;origin/master&#39;</span><span class="token builtin class-name">.</span>
 
nothing to commit, working tree clean

可见刚clone下来还是nothing commit的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看历史日志" tabindex="-1"><a class="header-anchor" href="#查看历史日志"><span>查看历史日志</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log

Enumerating objects: <span class="token number">11</span>, done.
Counting objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">11</span>/11<span class="token punctuation">)</span>, done.
Delta compression using up to <span class="token number">16</span> threads
Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">7</span>/7<span class="token punctuation">)</span>, done.
Writing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">7</span>/7<span class="token punctuation">)</span>, <span class="token number">651</span> bytes <span class="token operator">|</span> <span class="token number">651.00</span> KiB/s, done.
Total <span class="token number">7</span> <span class="token punctuation">(</span>delta <span class="token number">5</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, pack-reused <span class="token number">0</span>
remote: Resolving deltas: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">5</span>/5<span class="token punctuation">)</span>, completed with <span class="token number">4</span> <span class="token builtin class-name">local</span> objects.
To https://github.com/LincZero/obsidian-chat-view-qq.git
   95fe6c8<span class="token punctuation">..</span>556cd64  main -<span class="token operator">&gt;</span> main

D:<span class="token punctuation">\\</span>LocalPrivate<span class="token punctuation">\\</span>Res<span class="token punctuation">\\</span>Data<span class="token punctuation">\\</span>Dev<span class="token punctuation">\\</span>Type<span class="token punctuation">\\</span>Obsidian_Plugin<span class="token punctuation">\\</span>obsidian-chat-view-qq<span class="token operator">&gt;</span>git log
commit 556cd64bf8735973dc0bf9eedaa07cfb81d17d3f <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main, origin/main, origin/HEAD<span class="token punctuation">)</span>
Author: LincZero <span class="token operator">&lt;</span><span class="token number">762699299</span>@qq.com<span class="token operator">&gt;</span>
Date:   Thu Nov <span class="token number">10</span> <span class="token number">22</span>:10:15 <span class="token number">2022</span> +0800

    v0.4.1

commit 47b7d1152efe43b4777c8828ee6abb6ab85f4328
Author: LincZero <span class="token operator">&lt;</span><span class="token number">762699299</span>@qq.com<span class="token operator">&gt;</span>
Date:   Thu Nov <span class="token number">10</span> <span class="token number">22</span>:08:18 <span class="token number">2022</span> +0800

    v0.4.1

<span class="token punctuation">..</span>.
（Enter继续查看，Q退出）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每次的版本都有自己唯一的id标识（commit后面的字符），这是系统自动生成的</p><h4 id="回到特定版本" tabindex="-1"><a class="header-anchor" href="#回到特定版本"><span>回到特定版本</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> reset <span class="token function">id</span>
<span class="token comment"># 这里的id可以用 git log查看</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="github-desktop" tabindex="-1"><a class="header-anchor" href="#github-desktop"><span>Github Desktop</span></a></h2><p>这个也很方便，可视化操作，不需要敲任何命令行</p><h2 id="gitignore-忽略文件" tabindex="-1"><a class="header-anchor" href="#gitignore-忽略文件"><span>.gitignore 忽略文件</span></a></h2><p>有时可能并不需要同步bin文件夹或者用于单元测试的test文件夹</p><p>可以在.gitignore中添加规则，这样<code>git add.</code>时就不会自动同步该文件夹的代码。保存后会发现TEST文件夹和bin文件后面的U消失了，颜色也变回了灰色</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>TEST/
*bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>常见的gitignore内容</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># ide项目 - vscode</span>
.vscode 

<span class="token comment"># ide项目 - Intellij</span>
*.iml
.idea

<span class="token comment"># npm</span>
node_modules

<span class="token comment"># 这个是.ts文件生成的.js文件，不应该被上传</span>
main.js

<span class="token comment"># Exclude sourcemaps</span>
*.map

<span class="token comment"># obsidian设置的选项</span>
data.json

<span class="token comment"># Exclude macOS Finder (System Explorer) View States</span>
.DS_Store

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用git前-用git后" tabindex="-1"><a class="header-anchor" href="#用git前-用git后"><span>用git前，用git后</span></a></h2><p>说一下个人的感悟：<mark>不会时觉得麻烦、用熟了觉得太爽了，相见恨晚</mark></p><p>一个网传的笑话：</p><blockquote><p>[!quote]</p><p>用git前： - 最终版.zip - 最终final版.zip - 最终fianl加班修改版.zip - .......... - 最终fianl凤凰涅槃猝死重生版.zip</p><p>用了git后： 把以上内容写在commit里，不愧是我</p></blockquote>`,28);function E(w,x){const a=l("ExternalLinkIcon");return c(),o("div",null,[p,n("ul",null,[n("li",null,[d,s("："),n("a",u,[s(" git上传命令方式 "),e(a)])]),n("li",null,[n("a",m,[s("【B站】「Coding Master」第13话 如何正确的git代码以及我对Linus大写的服"),e(a)])]),v,b,n("li",null,[n("a",h,[s("Git：从github上克隆、修改和更新项目"),e(a)])])]),g,n("p",null,[s("参考："),n("a",k,[s(" git上传命令方式 "),e(a)])]),f])}const A=t(r,[["render",E],["__file","01. Git.html.vue"]]),G=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/05.%20%E5%88%86%E5%8F%91%E7%AE%A1%E7%90%86/%E7%89%88%E6%9C%AC%E4%B8%8E%E5%88%86%E6%94%AF%E7%AE%A1%E7%90%86/Git/01.%20Git.html","title":"Git","lang":"zh-CN","frontmatter":{"description":"Git 目录 Git 参考： 主要参考（比较全）： git上传命令方式 【B站】「Coding Master」第13话 如何正确的git代码以及我对Linus大写的服 《GitHub入门与实践》 git有中文的官方手册可见 Git：从github上克隆、修改和更新项目 入门 版本管理 VCS（Version Control Systems） 原始的版本...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/05.%20%E5%88%86%E5%8F%91%E7%AE%A1%E7%90%86/%E7%89%88%E6%9C%AC%E4%B8%8E%E5%88%86%E6%94%AF%E7%AE%A1%E7%90%86/Git/01.%20Git.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Git"}],["meta",{"property":"og:description","content":"Git 目录 Git 参考： 主要参考（比较全）： git上传命令方式 【B站】「Coding Master」第13话 如何正确的git代码以及我对Linus大写的服 《GitHub入门与实践》 git有中文的官方手册可见 Git：从github上克隆、修改和更新项目 入门 版本管理 VCS（Version Control Systems） 原始的版本..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"Git","slug":"git","link":"#git","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"Git","slug":"git-1","link":"#git-1","children":[{"level":2,"title":"入门","slug":"入门","link":"#入门","children":[]},{"level":2,"title":"一些原理（实现原理与思想原理）","slug":"一些原理-实现原理与思想原理","link":"#一些原理-实现原理与思想原理","children":[{"level":3,"title":"本地仓库原理","slug":"本地仓库原理","link":"#本地仓库原理","children":[]},{"level":3,"title":"版本管理原理","slug":"版本管理原理","link":"#版本管理原理","children":[]},{"level":3,"title":"多人协同开发原理","slug":"多人协同开发原理","link":"#多人协同开发原理","children":[]},{"level":3,"title":"一些颜色","slug":"一些颜色","link":"#一些颜色","children":[]}]},{"level":2,"title":"Git命令","slug":"git命令","link":"#git命令","children":[{"level":3,"title":"使用流程","slug":"使用流程","link":"#使用流程","children":[{"level":4,"title":"提交到远程","slug":"提交到远程","link":"#提交到远程","children":[]},{"level":4,"title":"远程到本地","slug":"远程到本地","link":"#远程到本地","children":[]},{"level":4,"title":"一些不必要操作","slug":"一些不必要操作","link":"#一些不必要操作","children":[]}]},{"level":3,"title":"解决冲突","slug":"解决冲突","link":"#解决冲突","children":[]},{"level":3,"title":"git指令","slug":"git指令","link":"#git指令","children":[{"level":4,"title":"git，列举命令","slug":"git-列举命令","link":"#git-列举命令","children":[]},{"level":4,"title":"github强制覆盖本地","slug":"github强制覆盖本地","link":"#github强制覆盖本地","children":[]},{"level":4,"title":"项目状态","slug":"项目状态","link":"#项目状态","children":[]},{"level":4,"title":"查看历史日志","slug":"查看历史日志","link":"#查看历史日志","children":[]},{"level":4,"title":"回到特定版本","slug":"回到特定版本","link":"#回到特定版本","children":[]}]}]},{"level":2,"title":"Github Desktop","slug":"github-desktop","link":"#github-desktop","children":[]},{"level":2,"title":".gitignore 忽略文件","slug":"gitignore-忽略文件","link":"#gitignore-忽略文件","children":[]},{"level":2,"title":"用git前，用git后","slug":"用git前-用git后","link":"#用git前-用git后","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":7.09,"words":2128},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/03. Tools/02. 管理层/05. 分发管理/版本与分支管理/Git/01. Git.md","autoDesc":true}');export{A as comp,G as data};

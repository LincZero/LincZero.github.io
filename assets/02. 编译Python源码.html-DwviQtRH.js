import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as d,c as t,b as n,e,d as c,a as i}from"./app-Bh75ISgc.js";const v={},o=i(`<h1 id="python" tabindex="-1"><a class="header-anchor" href="#python"><span>Python</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="编译python源码" tabindex="-1"><a class="header-anchor" href="#编译python源码"><span>编译Python源码</span></a></h1><h2 id="下载源码" tabindex="-1"><a class="header-anchor" href="#下载源码"><span>下载源码</span></a></h2><p>在Python官网下载，选择下载源码（而不是安装版本）</p><h2 id="python各环境下的目录结构" tabindex="-1"><a class="header-anchor" href="#python各环境下的目录结构"><span>Python各环境下的目录结构</span></a></h2><h3 id="python源码-目录结构" tabindex="-1"><a class="header-anchor" href="#python源码-目录结构"><span>Python源码 目录结构</span></a></h3><p>下载后解压，项目结构如下</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Python-3.7.13

文件夹
Doc
Grammar
Include
Lib
m4
Mac
Misc
Modules
Objects
Parser
PC
PCbuild
Programs
Python
Tools

文件
LICENSE
README.rst
setup.py
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python安装-目录路径" tabindex="-1"><a class="header-anchor" href="#python安装-目录路径"><span>Python安装 目录路径</span></a></h3><p>（如果是安装Anaconda集成环境的话，就是Anaconda的那个目录）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>python39

文件夹
Libs
	内置模块
	site-packages			<span class="token comment"># 下载的包会在这里</span>
		openpyxl
		python-docx
		flask
		django				<span class="token comment"># pip安装该模块时生成。是该框架的源码</span>
		<span class="token punctuation">..</span>.
Scripts
	pip.exe
	django-admin.exe		<span class="token comment"># pip安装该模块时生成。是辅助创建django项目的工具，会自动创建模板下的文件和文件夹</span>
	<span class="token punctuation">..</span>.

文件
python.exe

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="anaconda安装-目录结构" tabindex="-1"><a class="header-anchor" href="#anaconda安装-目录结构"><span>Anaconda安装 目录结构</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Python_Anaconda

文件夹
condabin
conda-meta
DLLs
envs
etc
include			<span class="token comment"># 包含路径</span>
Lib
Library
libs			<span class="token comment"># lib库</span>
	_tkinter.lib
	python3.lib
	python37.lib
<span class="token function">man</span>
Menu
pkgs
Scripts
	pip.exe
share
shell
sip
tcl
Tools

文件
_conda.exe		<span class="token comment"># 程序 Anaconda</span>
cwp.py
LICENSE_PYTHON.txt
msvcp140.dll
msvcp140_1.dll
msvcp140_2.dll
python.exe		<span class="token comment"># 程序 python</span>
python3.dll
python37.dll
python37.pdb
pythonw.exe
Uninstall-Anaconda3.exe
venvlauncher.exe	<span class="token comment"># 程序 虚拟环境启动器?</span>
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pycharm项目-目录结构" tabindex="-1"><a class="header-anchor" href="#pycharm项目-目录结构"><span>PyCharm项目 目录结构</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>项目名

venv					<span class="token comment"># （基本同Python安装目录）python虚拟环境</span>
	Include				<span class="token comment"># （基本同Python安装目录）空</span>
	Lib					<span class="token comment"># （基本同Python安装目录）</span>
		site-packages	<span class="token comment"># （基本同Python安装目录）环境包</span>
			flask等
			<span class="token punctuation">..</span>.
	Scripts				<span class="token comment"># （基本同Python安装目录）</span>
		activate		<span class="token comment"># 进入该虚拟环境的脚本</span>
		pip.exe等
		<span class="token punctuation">..</span>.
	pyvenv.cfg
main.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="windows下编译" tabindex="-1"><a class="header-anchor" href="#windows下编译"><span>Windows下编译</span></a></h2><h3 id="编译" tabindex="-1"><a class="header-anchor" href="#编译"><span>编译</span></a></h3>`,18),r={href:"https://blog.csdn.net/weixin_35055546/article/details/113642957",target:"_blank",rel:"noopener noreferrer"},p=i(`<ul><li>双击PCbuild/pcbuild.sln，打开解决方案，切换到debug win32</li><li>解决方案右键 &gt; 属性 &gt; 配置属性 &gt; 配置 仅勾选项目python和pythoncore（这里仅编译python和pythoncore，其他模块暂时忽略）</li><li>再“生成解决方案”，生成目录为PCbuild/win32</li><li>将项目python设为启动项目(默认状态即是启动项目)，点击调试，运行得到如下控制台，可以像平时使用python一样，与之交互。</li></ul><h3 id="编译后的目录" tabindex="-1"><a class="header-anchor" href="#编译后的目录"><span>编译后的目录</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>python.exe
python.pdb
python37.dll
python37.exp
python37.lib
python37.pdb
python37_d.dll
python37_d.exp
python37_d.ilk
python37_d.lib
python37_d.pdb
python3_d.dll
python3_d.exp
python3_d.ilk
python3_d.lib
python3_d.pdb
python3_dstub.exp
python3_dstub.lib
python_d.exe
python_d.ilk
python_d.pdb
vcruntime140.dll
_ctypes.exp
_ctypes.lib
_ctypes.pdb
_ctypes.pyd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function h(m,u){const s=l("ExternalLinkIcon");return d(),t("div",null,[o,n("p",null,[e("参考："),n("a",r,[e("【CSDN】python 源码编译教程_如何编译和调试Python内核源码？"),c(s)])]),p])}const g=a(v,[["render",h],["__file","02. 编译Python源码.html.vue"]]),P=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/Python/11.%20%E7%BC%96%E5%86%99%E4%B9%8B%E5%A4%96/02.%20%E7%BC%96%E8%AF%91Python%E6%BA%90%E7%A0%81.html","title":"Python","lang":"zh-CN","frontmatter":{"description":"Python 目录 编译Python源码 下载源码 在Python官网下载，选择下载源码（而不是安装版本） Python各环境下的目录结构 Python源码 目录结构 下载后解压，项目结构如下 Python安装 目录路径 （如果是安装Anaconda集成环境的话，就是Anaconda的那个目录） Anaconda安装 目录结构 PyCharm项目 目录...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/01.%20Language/Python/11.%20%E7%BC%96%E5%86%99%E4%B9%8B%E5%A4%96/02.%20%E7%BC%96%E8%AF%91Python%E6%BA%90%E7%A0%81.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Python"}],["meta",{"property":"og:description","content":"Python 目录 编译Python源码 下载源码 在Python官网下载，选择下载源码（而不是安装版本） Python各环境下的目录结构 Python源码 目录结构 下载后解压，项目结构如下 Python安装 目录路径 （如果是安装Anaconda集成环境的话，就是Anaconda的那个目录） Anaconda安装 目录结构 PyCharm项目 目录..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"Python","slug":"python","link":"#python","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"编译Python源码","slug":"编译python源码","link":"#编译python源码","children":[{"level":2,"title":"下载源码","slug":"下载源码","link":"#下载源码","children":[]},{"level":2,"title":"Python各环境下的目录结构","slug":"python各环境下的目录结构","link":"#python各环境下的目录结构","children":[{"level":3,"title":"Python源码 目录结构","slug":"python源码-目录结构","link":"#python源码-目录结构","children":[]},{"level":3,"title":"Python安装 目录路径","slug":"python安装-目录路径","link":"#python安装-目录路径","children":[]},{"level":3,"title":"Anaconda安装 目录结构","slug":"anaconda安装-目录结构","link":"#anaconda安装-目录结构","children":[]},{"level":3,"title":"PyCharm项目 目录结构","slug":"pycharm项目-目录结构","link":"#pycharm项目-目录结构","children":[]}]},{"level":2,"title":"Windows下编译","slug":"windows下编译","link":"#windows下编译","children":[{"level":3,"title":"编译","slug":"编译","link":"#编译","children":[]},{"level":3,"title":"编译后的目录","slug":"编译后的目录","link":"#编译后的目录","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.78,"words":533},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/01. Language/Python/11. 编写之外/02. 编译Python源码.md","autoDesc":true}');export{g as comp,P as data};

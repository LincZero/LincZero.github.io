import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as s,a as i}from"./app-5ajJQ-aM.js";const a={},l=i(`<h1 id="目录管理" tabindex="-1"><a class="header-anchor" href="#目录管理"><span>目录管理</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="源代码目录管理" tabindex="-1"><a class="header-anchor" href="#源代码目录管理"><span>源代码目录管理</span></a></h1><p>分为项目源代码的目录管理和生成文件的目录管理</p><p>生成文件的目录跨越可能很大，有的甚至会把文件放在C盘的不知道什么系统路径中</p><p>其实观察会发现，大家都挺随心所欲的</p><h2 id="源代码目录管理-1" tabindex="-1"><a class="header-anchor" href="#源代码目录管理-1"><span>源代码目录管理</span></a></h2><h2 id="生成文件目录管理" tabindex="-1"><a class="header-anchor" href="#生成文件目录管理"><span>生成文件目录管理</span></a></h2><h2 id="参考-源码目录结构" tabindex="-1"><a class="header-anchor" href="#参考-源码目录结构"><span>参考 - 源码目录结构</span></a></h2><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python"><span>Python</span></a></h3><p>源码目录结构</p><p>下载后解压，项目结构如下</p><p><strong>不过这个应该不算源码目录结构</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Python-3.7.13

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
PCbuild			 	<span class="token comment"># PC编译入口，sln入口。这里面才属于项目目录结构。不过里面并没有什么文件夹分层，一大堆.vcxproj文件、py文件等</span>
	pcbuild.sln		<span class="token comment"># VS项目打开入口</span>
Programs
Python
Tools

文件
LICENSE
README.rst
setup.py
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pycharm" tabindex="-1"><a class="header-anchor" href="#pycharm"><span>PyCharm</span></a></h3><p>项目目录结构</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>项目名

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue" tabindex="-1"><a class="header-anchor" href="#vue"><span>Vue</span></a></h3><p>略</p><h2 id="参考-安装目录结构" tabindex="-1"><a class="header-anchor" href="#参考-安装目录结构"><span>参考 - 安装目录结构</span></a></h2><p>各个软件的参考</p><h3 id="python-1" tabindex="-1"><a class="header-anchor" href="#python-1"><span>Python</span></a></h3><p>安装目录路径</p><p>（如果是安装Anaconda集成环境的话，就是Anaconda的那个目录）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>python39

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="anaconda" tabindex="-1"><a class="header-anchor" href="#anaconda"><span>Anaconda</span></a></h3><p>安装目录结构</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Python_Anaconda

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="blender" tabindex="-1"><a class="header-anchor" href="#blender"><span>Blender</span></a></h3><p>解压安装目录结构</p><p>blender-2.82-windows64</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">2.82</span>
	datafiles
		colormanagement
		fonts
		incons
		locale
		studiolights
		usd
	python				<span class="token comment"># Python支持，包含python解释器，仅仅50MB大小</span>
		bin
			python.exe
			python37.dll
		DLLs
		lib
	scripts
		addons
		addons_contrib	<span class="token comment"># 空</span>
		freestyle
		modules			<span class="token comment"># Python模块</span>
		presets
		startup
		templates_osl
		templates_py
blender.crt
	<span class="token punctuation">..</span>.46个dll文件
blender.exe
GPL3-license.txt		<span class="token comment"># 许可证文件</span>
GPL-license.txt			<span class="token comment"># 许可证文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="maya" tabindex="-1"><a class="header-anchor" href="#maya"><span>Maya</span></a></h3><p>安装目录结构</p><p>Maya2019</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>assets
bin
	maya.exe
	其他exe
	<span class="token punctuation">..</span>.315个Qt5的dll
	<span class="token punctuation">..</span>.
brushImages
brushShapes
devkit
docs
en-US
Examples
ExternalWebBrowser
icons
include
lib
mkspecs
modules
plugins
plug-ins
presets
Python
qml
resources
scripts
Setup
support
synColor
translations
PYTHON_LICENSE
PYTHON_README
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),d=[l];function t(c,v){return e(),s("div",null,d)}const u=n(a,[["render",t],["__file","1. 源代码目录管理.html.vue"]]),p=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/02.%20%E5%A4%9A%E6%96%87%E4%BB%B6%E5%A4%9A%E7%9B%AE%E5%BD%95%E7%AE%A1%E7%90%86/%E7%9B%AE%E5%BD%95%E7%AE%A1%E7%90%86/1.%20%E6%BA%90%E4%BB%A3%E7%A0%81%E7%9B%AE%E5%BD%95%E7%AE%A1%E7%90%86.html","title":"目录管理","lang":"zh-CN","frontmatter":{"description":"目录管理 目录 源代码目录管理 分为项目源代码的目录管理和生成文件的目录管理 生成文件的目录跨越可能很大，有的甚至会把文件放在C盘的不知道什么系统路径中 其实观察会发现，大家都挺随心所欲的 源代码目录管理 生成文件目录管理 参考 - 源码目录结构 Python 源码目录结构 下载后解压，项目结构如下 不过这个应该不算源码目录结构 PyCharm 项目目...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/02.%20%E5%A4%9A%E6%96%87%E4%BB%B6%E5%A4%9A%E7%9B%AE%E5%BD%95%E7%AE%A1%E7%90%86/%E7%9B%AE%E5%BD%95%E7%AE%A1%E7%90%86/1.%20%E6%BA%90%E4%BB%A3%E7%A0%81%E7%9B%AE%E5%BD%95%E7%AE%A1%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"目录管理"}],["meta",{"property":"og:description","content":"目录管理 目录 源代码目录管理 分为项目源代码的目录管理和生成文件的目录管理 生成文件的目录跨越可能很大，有的甚至会把文件放在C盘的不知道什么系统路径中 其实观察会发现，大家都挺随心所欲的 源代码目录管理 生成文件目录管理 参考 - 源码目录结构 Python 源码目录结构 下载后解压，项目结构如下 不过这个应该不算源码目录结构 PyCharm 项目目..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"目录管理\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"目录管理","slug":"目录管理","link":"#目录管理","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"源代码目录管理","slug":"源代码目录管理","link":"#源代码目录管理","children":[{"level":2,"title":"源代码目录管理","slug":"源代码目录管理-1","link":"#源代码目录管理-1","children":[]},{"level":2,"title":"生成文件目录管理","slug":"生成文件目录管理","link":"#生成文件目录管理","children":[]},{"level":2,"title":"参考 - 源码目录结构","slug":"参考-源码目录结构","link":"#参考-源码目录结构","children":[{"level":3,"title":"Python","slug":"python","link":"#python","children":[]},{"level":3,"title":"PyCharm","slug":"pycharm","link":"#pycharm","children":[]},{"level":3,"title":"Vue","slug":"vue","link":"#vue","children":[]}]},{"level":2,"title":"参考 - 安装目录结构","slug":"参考-安装目录结构","link":"#参考-安装目录结构","children":[{"level":3,"title":"Python","slug":"python-1","link":"#python-1","children":[]},{"level":3,"title":"Anaconda","slug":"anaconda","link":"#anaconda","children":[]},{"level":3,"title":"Blender","slug":"blender","link":"#blender","children":[]},{"level":3,"title":"Maya","slug":"maya","link":"#maya","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.11,"words":632},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/03. Tools/02. 管理层/02. 多文件多目录管理/目录管理/1. 源代码目录管理.md","autoDesc":true}');export{u as comp,p as data};

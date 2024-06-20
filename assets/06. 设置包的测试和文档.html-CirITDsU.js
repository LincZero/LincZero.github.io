import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as d,c as r,b as n,d as e,e as t,a}from"./app-CctSPqZW.js";const o={},p=a(`<h1 id="pyqt-node-editor" tabindex="-1"><a class="header-anchor" href="#pyqt-node-editor"><span>PyQt_Node_Editor</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="设置包的测试和文档" tabindex="-1"><a class="header-anchor" href="#设置包的测试和文档"><span>设置包的测试和文档</span></a></h1><p>How to create python package 步骤详见链接，这个链接的内容的视频教程里打开网页的内容也有所不同</p><p>pip官网参考：（<strong>p</strong>ackag<strong>i</strong>ng.<strong>p</strong>ython.org）</p><ul><li>https://packaging.python.org/en/latest/tutorials/packaging-projects/ （https://packaging.python.org &gt; Tutorials 教程 &gt; Packaging Python Projects 包装Python项目）</li></ul><h2 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构"><span>项目结构</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>packaging_tutorial/
└── src/
    └── example_package/
        ├── __init__.py
        └── example.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目准备-创建包文件" tabindex="-1"><a class="header-anchor" href="#项目准备-创建包文件"><span>项目准备 - 创建包文件</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>packaging_tutorial/
├── LICENSE
├── pyproject.toml
├── README.md
├── setup.cfg
├── src/
│   └── example_package/
│       ├── __init__.py
│       └── example.py
└── tests/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建测试目录-tests" tabindex="-1"><a class="header-anchor" href="#创建测试目录-tests"><span>创建测试目录 tests/</span></a></h3><p><code>tests/</code>是测试文件的占位符。 暂时将其留空。</p><h3 id="创建-pyproject-toml" tabindex="-1"><a class="header-anchor" href="#创建-pyproject-toml"><span>创建 pyproject.toml</span></a></h3>`,13),c=n("code",null,"pyproject.toml",-1),u={href:"https://packaging.python.org/en/latest/key_projects/#pip",target:"_blank",rel:"noopener noreferrer"},v={href:"https://packaging.python.org/en/latest/key_projects/#build",target:"_blank",rel:"noopener noreferrer"},m={href:"https://packaging.python.org/en/latest/key_projects/#setuptools",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"pyproject.toml",-1),b=a(`<div class="language-toml line-numbers-mode" data-ext="toml" data-title="toml"><pre class="language-toml"><code><span class="token punctuation">[</span><span class="token table class-name">build-system</span><span class="token punctuation">]</span>
<span class="token key property">requires</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;setuptools&gt;=42&quot;</span><span class="token punctuation">]</span>
<span class="token key property">build-backend</span> <span class="token punctuation">=</span> <span class="token string">&quot;setuptools.build_meta&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置元数据-setup-cfg-setup-py" tabindex="-1"><a class="header-anchor" href="#配置元数据-setup-cfg-setup-py"><span>配置元数据 setup.cfg/setup.py</span></a></h3><p>元数据有两种类型：静态和动态。</p><ul><li>静态元数据 ( <code>setup.cfg</code>)：<strong>保证每次都一样</strong>。 这是 更简单，更易于阅读，并避免了许多常见错误，例如编码错误。</li><li>动态元数据（ <code>setup.py</code>)：可能是<strong>不确定的</strong>。 任何物品 动态或在安装时确定，以及扩展模块或 setuptools 的扩展，需要进入 <code>setup.py</code>.</li></ul><p>选择</p><ul><li>静态元数据 ( <code>setup.cfg</code>) 应该是首选。</li><li>动态元数据（ <code>setup.py</code>) 只应在绝对必要时用作逃生舱口。 <code>setup.py</code>习惯于 是必需的，但可以在较新版本的 setuptools 和 pip 中省略</li></ul><h3 id="创建-readme-md" tabindex="-1"><a class="header-anchor" href="#创建-readme-md"><span>创建 README.md</span></a></h3><p>随便，就是个md文件</p><h3 id="创建许可证-license" tabindex="-1"><a class="header-anchor" href="#创建许可证-license"><span>创建许可证 LICENSE</span></a></h3>`,9),g={href:"https://choosealicense.com/community/",target:"_blank",rel:"noopener noreferrer"},_=a(`<p>例如MIT：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="包括其他文件" tabindex="-1"><a class="header-anchor" href="#包括其他文件"><span>包括其他文件</span></a></h3><h2 id="上传" tabindex="-1"><a class="header-anchor" href="#上传"><span>上传</span></a></h2><h3 id="生成分发档案" tabindex="-1"><a class="header-anchor" href="#生成分发档案"><span>生成分发档案</span></a></h3>`,5),k={href:"https://packaging.python.org/en/latest/glossary/#term-Distribution-Package",target:"_blank",rel:"noopener noreferrer"},E={href:"https://packaging.python.org/en/latest/key_projects/#pip",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"tar.gz",-1),f={href:"https://packaging.python.org/en/latest/glossary/#term-Source-Archive",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,".whl",-1),A={href:"https://packaging.python.org/en/latest/glossary/#term-Built-Distribution",target:"_blank",rel:"noopener noreferrer"},N={href:"https://packaging.python.org/en/latest/key_projects/#pip",target:"_blank",rel:"noopener noreferrer"},T=a(`<h3 id="上传分发档案" tabindex="-1"><a class="header-anchor" href="#上传分发档案"><span>上传分发档案</span></a></h3><p>要注册帐户，请访问 https://test.pypi.org/account/register/</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><h3 id="安装新上传的包" tabindex="-1"><a class="header-anchor" href="#安装新上传的包"><span>安装新上传的包</span></a></h3><h2 id="全自动配置" tabindex="-1"><a class="header-anchor" href="#全自动配置"><span>全自动配置</span></a></h2><p>Cookiecutter 工具（Github开源）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>pip
where pip

pip <span class="token function">install</span> cookiecutter
cookiecutter https://github.com/audreyr/cookiecutter-pypackage
	full name: Pavel Krupala
	email: pavel.krupala@gmail.com
	github_username: pavelkrupala
	project_name: Node Editor
	project_slug: template
	project_short_description: 
	pypi_username:
	version <span class="token punctuation">[</span><span class="token number">0.1</span>.0<span class="token punctuation">]</span>: <span class="token number">0.9</span>.0
	user_pytest <span class="token punctuation">[</span>n<span class="token punctuation">]</span>:
	use_pypi_deployment_with_travis <span class="token punctuation">[</span>y<span class="token punctuation">]</span>: n
	add_pyup_badge <span class="token punctuation">[</span>n<span class="token punctuation">]</span>: n
	Choose from <span class="token number">1</span>, <span class="token number">2</span>: <span class="token number">2</span>
	create_author_file <span class="token punctuation">[</span>y<span class="token punctuation">]</span>:
	Select open_source_license: <span class="token number">1</span>
<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="上手" tabindex="-1"><a class="header-anchor" href="#上手"><span>上手</span></a></h1><h2 id="将项目包装到package中" tabindex="-1"><a class="header-anchor" href="#将项目包装到package中"><span>将项目包装到package中</span></a></h2><ul><li><p>PyCharm &gt; 菜单 &gt; File &gt; Settings &gt; Project: NodeEditor &gt; Project Interpreter：设置Project Interpreter（用哪个解释器）</p></li><li><p>将启动Script设置为example_test中的main.py</p></li><li><p>用Cookiecutter配置</p></li><li><p>创建Package</p><ul><li><p>项目名右键 &gt; New &gt; Python Package: nodeeditor，并复制项目文件进去</p></li><li><p>项目名右键 &gt; New &gt; Python Package: tests</p></li><li><p>两个包的 <code>__init__.py</code> 加上下面的注释</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="自动生成一些东西" tabindex="-1"><a class="header-anchor" href="#自动生成一些东西"><span>自动生成一些东西</span></a></h2><ul><li><p>检查根目录下自动生成的 requirements.txt 文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>弄出下面的项目结构</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>NodeEditor
	docs
	examples
		example_test
    nodeeditor
    	__init__.py
    	(NodeEditor项目)
    template
    	(Cookiecutter配置出来的东西)
    	tests
    		__init__.py
    		test_template.py
    tests
    	__init__.py
    	test_000_import.py (复制下_template/tests/test_template.py里的内容)
    		from nodeeditor.node_scene import Scene
    .gitignore
    LICENCE
    README.rst
    requirements.txt
    setup.py
    HISTORY.rst (Cookiecutter配置，即template文件夹里移出来的)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>教学视频 17:30 开始的配置看不懂了</p><ul><li>setup.py 的修改、pip里就可以看到安装了nodeeditor</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> <span class="token parameter variable">-e</span> <span class="token builtin class-name">.</span>

<span class="token comment"># 安装与卸载</span>
pip un <span class="token function">install</span> template  <span class="token comment"># 可以通过setup.py将template改成nodeeditor</span>
	y
pip
	<span class="token comment"># ...</span>
	<span class="token comment"># nodeeditor	0.9.0	(包的路径)</span>
	<span class="token comment"># ...</span>
pip uninstall nodeeditor

python setup.py sdist  <span class="token comment"># 会生成./dist/nodeeditor-0.9.0.tar.gz</span>

<span class="token comment"># wheel方式 - 安装与卸载</span>
pip <span class="token function">install</span> wheel
python setup.py bdist_wheel  <span class="token comment"># 会生成./build/bdist.win-amd64、./build/lib/nodeeditor、./dist/nodeeditor-0.9.0.py3-none-any.whl</span>
pip <span class="token function">install</span> dist<span class="token punctuation">\\</span>nodeeditor-0.9.0.py3-none-any.whl
	<span class="token comment"># ...</span>
	<span class="token comment"># nodeeditor	0.9.0</span>
	<span class="token comment"># ...</span>
pip uninstall nodeeditor




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>断言测试</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">assert</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="自动生成docs目录-使用文档" tabindex="-1"><a class="header-anchor" href="#自动生成docs目录-使用文档"><span>自动生成docs目录 (使用文档)</span></a></h2><p>详见www.sphinx-doc.org/en/1.5/theming.html</p><p>还可以通过修改<code>conf.py</code>来使用不同的主题</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>sphinx-quickstart
<span class="token comment"># ... 一堆配置</span>

<span class="token function">make</span> html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function I(P,B){const s=l("ExternalLinkIcon");return d(),r("div",null,[p,n("p",null,[c,e("告诉构建工具（如 "),n("a",u,[e("pip "),t(s)]),e("和 "),n("a",v,[e("build "),t(s)]),e("） 构建您的项目需要什么。 本教程使用 "),n("a",m,[e("setuptools "),t(s)]),e("， 如此开放 "),h,e("并输入以下内容：")]),b,n("p",null,[e("请参阅 https://choosealicense.com/ > "),n("a",g,[e("license preferred by the community"),t(s)])]),_,n("p",null,[e("下一步是为 "),n("a",k,[e("包 "),t(s)]),e("发包。 这些是上传到 Python 的档案 包索引，可以通过 "),n("a",E,[e("pip "),t(s)]),e("。")]),n("p",null,[e("这 "),y,e("文件是 "),n("a",f,[e("源存档 "),t(s)]),e("，而 "),x,e("文件是一个 "),n("a",A,[e("内置的发行版 "),t(s)]),e("。 较新 "),n("a",N,[e("pip "),t(s)]),e("版本优先安装内置发行版")]),T])}const O=i(o,[["render",I],["__file","06. 设置包的测试和文档.html.vue"]]),S=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Multi/QT%EF%BC%88Cpp%EF%BC%89/05.%20%E5%8A%9F%E8%83%BD%E5%AE%9E%E7%8E%B0%E7%B1%BB/Node_Editor/06.%20%E8%AE%BE%E7%BD%AE%E5%8C%85%E7%9A%84%E6%B5%8B%E8%AF%95%E5%92%8C%E6%96%87%E6%A1%A3.html","title":"PyQt_Node_Editor","lang":"zh-CN","frontmatter":{"description":"PyQt_Node_Editor 目录 设置包的测试和文档 How to create python package 步骤详见链接，这个链接的内容的视频教程里打开网页的内容也有所不同 pip官网参考：（packaging.python.org） https://packaging.python.org/en/latest/tutorials/packa...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Multi/QT%EF%BC%88Cpp%EF%BC%89/05.%20%E5%8A%9F%E8%83%BD%E5%AE%9E%E7%8E%B0%E7%B1%BB/Node_Editor/06.%20%E8%AE%BE%E7%BD%AE%E5%8C%85%E7%9A%84%E6%B5%8B%E8%AF%95%E5%92%8C%E6%96%87%E6%A1%A3.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"PyQt_Node_Editor"}],["meta",{"property":"og:description","content":"PyQt_Node_Editor 目录 设置包的测试和文档 How to create python package 步骤详见链接，这个链接的内容的视频教程里打开网页的内容也有所不同 pip官网参考：（packaging.python.org） https://packaging.python.org/en/latest/tutorials/packa..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PyQt_Node_Editor\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"PyQt_Node_Editor","slug":"pyqt-node-editor","link":"#pyqt-node-editor","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"设置包的测试和文档","slug":"设置包的测试和文档","link":"#设置包的测试和文档","children":[{"level":2,"title":"项目结构","slug":"项目结构","link":"#项目结构","children":[]},{"level":2,"title":"项目准备 - 创建包文件","slug":"项目准备-创建包文件","link":"#项目准备-创建包文件","children":[{"level":3,"title":"创建测试目录  tests/","slug":"创建测试目录-tests","link":"#创建测试目录-tests","children":[]},{"level":3,"title":"创建 pyproject.toml","slug":"创建-pyproject-toml","link":"#创建-pyproject-toml","children":[]},{"level":3,"title":"配置元数据 setup.cfg/setup.py","slug":"配置元数据-setup-cfg-setup-py","link":"#配置元数据-setup-cfg-setup-py","children":[]},{"level":3,"title":"创建 README.md","slug":"创建-readme-md","link":"#创建-readme-md","children":[]},{"level":3,"title":"创建许可证 LICENSE","slug":"创建许可证-license","link":"#创建许可证-license","children":[]},{"level":3,"title":"包括其他文件","slug":"包括其他文件","link":"#包括其他文件","children":[]}]},{"level":2,"title":"上传","slug":"上传","link":"#上传","children":[{"level":3,"title":"生成分发档案","slug":"生成分发档案","link":"#生成分发档案","children":[]},{"level":3,"title":"上传分发档案","slug":"上传分发档案","link":"#上传分发档案","children":[]}]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[{"level":3,"title":"安装新上传的包","slug":"安装新上传的包","link":"#安装新上传的包","children":[]}]},{"level":2,"title":"全自动配置","slug":"全自动配置","link":"#全自动配置","children":[]}]},{"level":1,"title":"上手","slug":"上手","link":"#上手","children":[{"level":2,"title":"将项目包装到package中","slug":"将项目包装到package中","link":"#将项目包装到package中","children":[]},{"level":2,"title":"自动生成一些东西","slug":"自动生成一些东西","link":"#自动生成一些东西","children":[]},{"level":2,"title":"自动生成docs目录 (使用文档)","slug":"自动生成docs目录-使用文档","link":"#自动生成docs目录-使用文档","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.54,"words":1063},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Platform/Multi/QT（Cpp）/05. 功能实现类/Node_Editor/06. 设置包的测试和文档.md","autoDesc":true}');export{O as comp,S as data};

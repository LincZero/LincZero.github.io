import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as e}from"./app-Dtl9Pch1.js";const t={},i=e(`<h1 id="目录管理" tabindex="-1"><a class="header-anchor" href="#目录管理"><span>目录管理</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="发布目录管理" tabindex="-1"><a class="header-anchor" href="#发布目录管理"><span>发布目录管理</span></a></h1><h2 id="本地简易安装器-纯批处理" tabindex="-1"><a class="header-anchor" href="#本地简易安装器-纯批处理"><span>本地简易安装器 - 纯批处理</span></a></h2><h3 id="start-bat-windows" tabindex="-1"><a class="header-anchor" href="#start-bat-windows"><span>start.bat (Windows)</span></a></h3><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>@echo off
<span class="token operator">::</span> utf<span class="token operator">-</span><span class="token number">8</span>输出
chcp <span class="token number">65001</span>

<span class="token operator">::</span> 定义安装文件名
set <span class="token string">&quot;MSVC_INSTALL=.\\pack\\recorder_win_msvc.zip&quot;</span>
set <span class="token string">&quot;MINGW_INSTALL=.\\pack\\recorder_win_mingw.zip&quot;</span>

<span class="token operator">::</span> 安装部分
<span class="token operator">::</span> 如果缺少名为recorder<span class="token punctuation">.</span>exe的文件，则先进行安装
<span class="token keyword">if</span> not exist recorder<span class="token punctuation">.</span><span class="token function">exe</span> <span class="token punctuation">(</span>
    rem 检查是否存在Visual Studio
    rem reg query <span class="token string">&quot;HKLM\\SOFTWARE\\Wow6432Node\\Microsoft\\VisualStudio\\14.0&quot;</span> <span class="token operator">&gt;</span>nul <span class="token number">2</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span><span class="token number">1</span>
    rem <span class="token keyword">if</span> <span class="token operator">%</span>errorlevel<span class="token operator">%</span> equ <span class="token number">0</span> <span class="token punctuation">(</span>
    rem     <span class="token operator">::</span> 存在Visual Studio，解压MSVC版本到当前路径下
    rem     powershell <span class="token operator">-</span>Command <span class="token string">&quot;Expand-Archive -Path &#39;%MSVC_INSTALL%&#39; -DestinationPath .&quot;</span>
    rem <span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">(</span>
    rem     <span class="token operator">::</span> 不存在Visual Studio，解压Mingw版本到当前路径下
    rem     powershell <span class="token operator">-</span>Command <span class="token string">&quot;Expand-Archive -Path &#39;%MINGW_INSTALL%&#39; -DestinationPath .&quot;</span>
    rem <span class="token punctuation">)</span>

    rem 暂时强制用minGW，msvc版本依赖问题未解决
    powershell <span class="token operator">-</span>Command <span class="token string">&quot;Expand-Archive -Path &#39;%MINGW_INSTALL%&#39; -DestinationPath .&quot;</span>
<span class="token punctuation">)</span>

<span class="token operator">::</span> 运行部分，运行recorder<span class="token punctuation">.</span>exe文件
start recorder<span class="token punctuation">.</span>exe

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="start-sh-linux" tabindex="-1"><a class="header-anchor" href="#start-sh-linux"><span>start.sh (Linux)</span></a></h3><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>#<span class="token operator">!</span><span class="token operator">/</span>bin<span class="token operator">/</span>sh

# 安装部分
# 如果缺少名为recorder的可执行行文件，则先进行安装
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token operator">-</span>f recorder <span class="token punctuation">]</span><span class="token punctuation">;</span> then
    # 定义GCC版本与对应的安装包
    MIN_GCC_VERSION<span class="token operator">=</span><span class="token string">&quot;4.8.0&quot;</span>
    GCC_VERSION_48<span class="token operator">=</span><span class="token string">&quot;4.8.0&quot;</span>
    GCC_VERSION_5<span class="token operator">=</span><span class="token string">&quot;5.0.0&quot;</span>
    GCC_VERSION_8<span class="token operator">=</span><span class="token string">&quot;8.0.0&quot;</span>
    GCC_VERSION_13<span class="token operator">=</span><span class="token string">&quot;13.0.0&quot;</span>
    GCC_VERSION_48_INSTALL<span class="token operator">=</span><span class="token string">&quot;pack/recorder_linux_gcc48.zip&quot;</span>
    GCC_VERSION_5_INSTALL<span class="token operator">=</span><span class="token string">&quot;pack/recorder_linux_gcc5.zip&quot;</span>
    GCC_VERSION_8_INSTALL<span class="token operator">=</span><span class="token string">&quot;pack/recorder_linux_gcc8.zip&quot;</span>
    GCC_VERSION_13_INSTALL<span class="token operator">=</span><span class="token string">&quot;pack/recorder_linux_gcc13.zip&quot;</span>

    # 获取当前GCC版本
    GCC_VERSION<span class="token operator">=</span>$<span class="token punctuation">(</span>gcc <span class="token operator">-</span>dumpversion<span class="token punctuation">)</span>

    # 类似版本号的字符串比较函数
    <span class="token function">ver</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> printf <span class="token string">&quot;%03d%03d%03d%03d&quot;</span> $<span class="token punctuation">(</span>echo <span class="token string">&quot;$1&quot;</span> <span class="token operator">|</span> tr <span class="token char">&#39;.&#39;</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    # 根据系统的GCC版本解压对应的文件夹到当前路径下
    <span class="token keyword">if</span> <span class="token punctuation">[</span> $<span class="token punctuation">(</span>ver $GCC_VERSION<span class="token punctuation">)</span> <span class="token operator">-</span>ge $<span class="token punctuation">(</span>ver $MIN_GCC_VERSION<span class="token punctuation">)</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> then
        <span class="token keyword">if</span> <span class="token punctuation">[</span> $<span class="token punctuation">(</span>ver $GCC_VERSION<span class="token punctuation">)</span> <span class="token operator">-</span>lt $<span class="token punctuation">(</span>ver $GCC_VERSION_5<span class="token punctuation">)</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> then
            unzip $GCC_VERSION_48_INSTALL
        elif <span class="token punctuation">[</span> $<span class="token punctuation">(</span>ver $GCC_VERSION<span class="token punctuation">)</span> <span class="token operator">-</span>lt $<span class="token punctuation">(</span>ver $GCC_VERSION_8<span class="token punctuation">)</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> then
            unzip $GCC_VERSION_5_INSTALL
        elif <span class="token punctuation">[</span> $<span class="token punctuation">(</span>ver $GCC_VERSION<span class="token punctuation">)</span> <span class="token operator">-</span>lt $<span class="token punctuation">(</span>ver $GCC_VERSION_13<span class="token punctuation">)</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> then
            unzip $GCC_VERSION_8_INSTALL
        <span class="token keyword">else</span>
            unzip $GCC_VERSION_13_INSTALL
        fi
        chmod <span class="token number">755</span> recorder
    <span class="token keyword">else</span>
        echo <span class="token string">&quot;GCC version must be greater than or equal to $MIN_GCC_VERSION&quot;</span>
        exit
    fi
fi

# 运行部分，运行recorder可执行文件
<span class="token punctuation">.</span><span class="token operator">/</span>recorder

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="start-command-macos" tabindex="-1"><a class="header-anchor" href="#start-command-macos"><span>start.command (MacOS)</span></a></h3><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>#<span class="token operator">!</span><span class="token operator">/</span>bin<span class="token operator">/</span>sh
# 第一行有可能是#<span class="token operator">!</span><span class="token operator">/</span>bin<span class="token operator">/</span>zsh

# 同步CWD与ED
DIR<span class="token operator">=</span><span class="token string">&quot;$( cd &quot;</span>$<span class="token punctuation">(</span> dirname <span class="token string">&quot;\${BASH_SOURCE[0]}&quot;</span> <span class="token punctuation">)</span><span class="token string">&quot; &amp;&amp; pwd )&quot;</span>
echo $DIR
cd $DIR

# 安装部分
# 如果缺少名为recorder的可执行行文件，则先进行安装
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token operator">-</span>f recorder <span class="token punctuation">]</span><span class="token punctuation">;</span> then
    # 定义版本与对应的安装包
    MAC_ARM64_INSTALL<span class="token operator">=</span><span class="token string">&quot;./pack/recorder_mac_arm64.zip&quot;</span>
    MAC_X86_64_INSTALL<span class="token operator">=</span><span class="token string">&quot;./pack/recorder_mac_x86_64.zip&quot;</span>

    # 获取当前处理器架构
    ARCHITECTURE<span class="token operator">=</span>$<span class="token punctuation">(</span>uname <span class="token operator">-</span>m<span class="token punctuation">)</span>

    # 根据系统的处理器架构解压对应的文件夹到当前路径下
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;$ARCHITECTURE&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;x86_64&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> then
        unzip $MAC_X86_64_INSTALL
    elif <span class="token punctuation">[</span> <span class="token string">&quot;$ARCHITECTURE&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;arm64&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> then
        unzip $MAC_ARM64_INSTALL
    <span class="token keyword">else</span>
        echo <span class="token string">&quot;Unsupported architecture!&quot;</span>
        exit
    fi

    # 设为可执行
    chmod <span class="token number">755</span> recorder
fi

# 运行部分，运行recorder可执行文件
<span class="token punctuation">.</span><span class="token operator">/</span>recorder

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[i];function p(l,c){return s(),a("div",null,o)}const d=n(t,[["render",p],["__file","3. 发布目录管理.html.vue"]]),v=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/02.%20%E5%A4%9A%E6%96%87%E4%BB%B6%E5%A4%9A%E7%9B%AE%E5%BD%95%E7%AE%A1%E7%90%86/%E7%9B%AE%E5%BD%95%E7%AE%A1%E7%90%86/3.%20%E5%8F%91%E5%B8%83%E7%9B%AE%E5%BD%95%E7%AE%A1%E7%90%86.html","title":"目录管理","lang":"zh-CN","frontmatter":{"description":"目录管理 目录 发布目录管理 本地简易安装器 - 纯批处理 start.bat (Windows) start.sh (Linux) start.command (MacOS)","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/02.%20%E5%A4%9A%E6%96%87%E4%BB%B6%E5%A4%9A%E7%9B%AE%E5%BD%95%E7%AE%A1%E7%90%86/%E7%9B%AE%E5%BD%95%E7%AE%A1%E7%90%86/3.%20%E5%8F%91%E5%B8%83%E7%9B%AE%E5%BD%95%E7%AE%A1%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"目录管理"}],["meta",{"property":"og:description","content":"目录管理 目录 发布目录管理 本地简易安装器 - 纯批处理 start.bat (Windows) start.sh (Linux) start.command (MacOS)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"目录管理\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"目录管理","slug":"目录管理","link":"#目录管理","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"发布目录管理","slug":"发布目录管理","link":"#发布目录管理","children":[{"level":2,"title":"本地简易安装器 - 纯批处理","slug":"本地简易安装器-纯批处理","link":"#本地简易安装器-纯批处理","children":[{"level":3,"title":"start.bat (Windows)","slug":"start-bat-windows","link":"#start-bat-windows","children":[]},{"level":3,"title":"start.sh (Linux)","slug":"start-sh-linux","link":"#start-sh-linux","children":[]},{"level":3,"title":"start.command (MacOS)","slug":"start-command-macos","link":"#start-command-macos","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.74,"words":523},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/03. Tools/02. 管理层/02. 多文件多目录管理/目录管理/3. 发布目录管理.md","autoDesc":true}');export{d as comp,v as data};

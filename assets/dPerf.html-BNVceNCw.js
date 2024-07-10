import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as c,c as p,b as n,d as s,e,a as i}from"./app-5ajJQ-aM.js";const d={},r=i(`<h2 id="dpdk环境部分-不建议先单独安装dpdk-而是按dperf的说明安装dpdk" tabindex="-1"><a class="header-anchor" href="#dpdk环境部分-不建议先单独安装dpdk-而是按dperf的说明安装dpdk"><span>DPDK环境部分 (不建议先单独安装DPDK，而是按DPerf的说明安装DPDK)</span></a></h2><h3 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h3><ul><li>官网：https://www.dpdk.org/</li><li>下载：http://core.dpdk.org/download/</li><li>安装：http://core.dpdk.org/doc/quick-start/</li><li>文档：https://doc.dpdk.org/guides/linux_gsg/index.html</li></ul><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">tar</span> xf dpdk.tar.gz
<span class="token builtin class-name">cd</span> dpdk

meson build
ninja <span class="token parameter variable">-C</span> build

<span class="token comment"># 安装</span>
<span class="token builtin class-name">cd</span> build
ninja
meson <span class="token function">install</span>
ldconfig

<span class="token comment"># 安装后的二进制库路径：/usr/local/lib/x86_64-linux-gnu/</span>
<span class="token comment"># 安装后的头文件路径：/usr/local/include/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="卸载环境" tabindex="-1"><a class="header-anchor" href="#卸载环境"><span>卸载环境</span></a></h3><p>删除库和头文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/local/include/dpdk
<span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/local/lib/librte_*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>卸载DPDK驱动</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> rmmod igb_uio
<span class="token function">sudo</span> rmmod rte_kni
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>删除配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rm</span> /usr/local/etc/rte.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="额外参考-dperf" tabindex="-1"><a class="header-anchor" href="#额外参考-dperf"><span>额外参考 - dperf</span></a></h3><p>另外 dperf 也写了个自动编译脚本：https://dperf.org/doc/html/compile-dpdk-22.11</p><h3 id="额外参考-packetmaster" tabindex="-1"><a class="header-anchor" href="#额外参考-packetmaster"><span>额外参考 - packetMaster</span></a></h3><p>PacketMaster自动化脚本</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># Debian10 编译环境安装</span>

<span class="token comment"># 非零退出状态的命令时立即终止</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># apt换源</span>
<span class="token function">cp</span> /etc/apt/sources.list /etc/apt/sources.list_bak
<span class="token function">cp</span> sources.list /etc/apt/sources.list

<span class="token comment"># 更新apt（如果出现GPG错误，请注释这一行，脚本先更新GPG密钥）</span>
<span class="token function">apt</span> update

<span class="token comment"># 获取GPG最新密钥</span>
<span class="token function">apt</span> <span class="token function">install</span> gnupg
apt-key adv --refresh-keys <span class="token parameter variable">--keyserver</span> keyserver.ubuntu.com

<span class="token comment"># 如果还是报GPG密钥错误，获取指定密钥</span>
<span class="token comment">#apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 0E98404D386FA1D9 6ED0E7B82643E131</span>

<span class="token function">apt</span> update
<span class="token function">apt</span> upgrade <span class="token parameter variable">-y</span>

<span class="token comment"># 安装环境</span>
<span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> build-essential cmake subversion <span class="token function">wget</span> <span class="token function">git</span> <span class="token function">nano</span> python3-pip ninja-build net-tools pciutils <span class="token function">zip</span> libpcap-dev pkg-config iproute2 kmod <span class="token function">rsync</span> ccache

<span class="token comment"># pip换源</span>
pip3 config <span class="token builtin class-name">set</span> global.index-url https://pypi.tuna.tsinghua.edu.cn/simple <span class="token comment"># 清华</span>
<span class="token comment"># pip3 config set global.index-url http://mirrors.aliyun.com/pypi/simple/ # 阿里云</span>
<span class="token comment"># pip3 config set global.index-url https://pypi.mirrors.ustc.edu.cn/simple/ # 中科大</span>
<span class="token comment"># pip3 config set global.index-url http://pypi.douban.com/simple/ # 豆瓣</span>

<span class="token comment"># 创建文件夹</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;/root/packetmaster_install_script&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">mkdir</span> <span class="token string">&quot;/root/packetmaster_install_script&quot;</span>
<span class="token keyword">fi</span>

<span class="token comment"># python环境</span>
pip3 <span class="token function">install</span> meson pyelftools

<span class="token comment"># DPDK</span>
<span class="token builtin class-name">cd</span> /root/packetmaster_install_script
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> dpdksource
<span class="token function">git</span> clone https://gitee.com/mirrors/dpdksource.git <span class="token comment"># gitee镜像</span>
<span class="token comment"># git clone https://github.com/DPDK/dpdk</span>
<span class="token builtin class-name">cd</span> dpdksource
<span class="token function">git</span> checkout v22.11
meson build
<span class="token builtin class-name">cd</span> build
ninja
ninja <span class="token function">install</span>

<span class="token comment"># cryptopp</span>
<span class="token builtin class-name">cd</span> /root/packetmaster_install_script
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> cryptopp
<span class="token function">git</span> clone https://gitee.com/mirrors/cryptopp.git <span class="token comment"># gitee镜像</span>
<span class="token comment"># git clone https://github.com/weidai11/cryptopp</span>
<span class="token builtin class-name">cd</span> cryptopp
<span class="token function">make</span> <span class="token parameter variable">-j</span> <span class="token number">4</span>
<span class="token function">make</span> <span class="token function">install</span>
<span class="token function">make</span> install-lib

<span class="token comment"># PcapPlusPlus</span>
<span class="token builtin class-name">cd</span> /root/packetmaster_install_script
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> PcapPlusPlus
<span class="token function">git</span> clone https://gitee.com/mirrors/PcapPlusPlus.git <span class="token comment"># gitee镜像</span>
<span class="token comment"># git clone https://github.com/seladb/PcapPlusPlus</span>
<span class="token builtin class-name">cd</span> PcapPlusPlus
<span class="token function">mkdir</span> build
<span class="token builtin class-name">cd</span> build
cmake <span class="token parameter variable">-DPCAPPP_USE_DPDK</span><span class="token operator">=</span>true <span class="token punctuation">..</span>
<span class="token function">make</span> Pcap++ <span class="token parameter variable">-j</span>
<span class="token function">make</span> <span class="token function">install</span> Pcap++ <span class="token parameter variable">-j</span>

<span class="token comment"># PacketMaster</span>
<span class="token builtin class-name">cd</span> /root/packetmaster_install_script
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> packetmaster
<span class="token function">git</span> clone http://mochazi:Aa123456@192.168.1.50/packetmaster/packetmaster.git
<span class="token builtin class-name">cd</span> packetmaster/
<span class="token comment"># Set the username and password</span>
<span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token string">&quot;mochazi&quot;</span>
<span class="token assign-left variable">password</span><span class="token operator">=</span><span class="token string">&quot;Aa123456&quot;</span>

<span class="token comment"># Define the target URL</span>
<span class="token assign-left variable">target_url</span><span class="token operator">=</span><span class="token string">&quot;192.168.1.50/&quot;</span>

<span class="token comment"># Generate the URL with username and password</span>
<span class="token assign-left variable">url_with_credentials</span><span class="token operator">=</span><span class="token string">&quot;http://<span class="token variable">\${username}</span>:<span class="token variable">\${password}</span>@<span class="token variable">\${target_url}</span>&quot;</span>

<span class="token comment"># Replace the URL in the .gitmodules file</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s|url = http://192.168.1.50|url = <span class="token variable">\${url_with_credentials}</span>|&quot;</span> .gitmodules
<span class="token function">git</span> submodule update <span class="token parameter variable">--init</span> <span class="token parameter variable">--recursive</span>

<span class="token comment"># install 3rdParty</span>
<span class="token builtin class-name">cd</span> 3rdParty/
<span class="token builtin class-name">cd</span> PcapTool/ <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> build <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> build <span class="token operator">&amp;&amp;</span> cmake <span class="token punctuation">..</span>
<span class="token function">make</span>

<span class="token builtin class-name">cd</span> /root/packetmaster_install_script/packetmaster/scripts/
<span class="token function">chmod</span> +x *.sh
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/make PacketMaster -j 8/make PacketMaster -j 4/g&quot;</span> package.sh
./package.sh
dpkg <span class="token parameter variable">-i</span> <span class="token punctuation">..</span>/release/*.deb


<span class="token comment"># 设置UTF-8编码</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LC_ALL</span></span><span class="token operator">=</span>C.UTF-8

<span class="token comment"># 更新环境变量</span>
ldconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dperf环境" tabindex="-1"><a class="header-anchor" href="#dperf环境"><span>DPerf环境</span></a></h2><h3 id="参考-1" tabindex="-1"><a class="header-anchor" href="#参考-1"><span>参考</span></a></h3>`,19),o={href:"https://github.com/baidu/dperf",target:"_blank",rel:"noopener noreferrer"},u={href:"https://dperf.org/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://dperf.org/doc/html/configuration",target:"_blank",rel:"noopener noreferrer"},v=n("li",null,"配置参考：https://dperf.org/doc/html/compile-dperf-on-ubuntu-22.04（他这里有N个版本的编译流程，就很烦）",-1),b=n("li",null,"配置参考：https://github.com/digger-yu/blog/blob/main/how%20to%20install%20dperf%20on%20ubuntu.md（居然还有个中文版的）",-1),k=i(`<h3 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1"><span>安装</span></a></h3><p>与他DPerf的流程不同，他这个默认是要指定安装位置的。如果之前安装了，就把build文件夹删了</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 编译 DPDK</span>
……
meson build <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/root/CLion/dpdk/dpdk-stable-22.11.4/mydpdk <span class="token parameter variable">-Denable_kmods</span><span class="token operator">=</span>true <span class="token parameter variable">-Ddisable_libs</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>
ninja <span class="token parameter variable">-C</span> build <span class="token function">install</span>

<span class="token comment"># 编译 dperf</span>
<span class="token builtin class-name">cd</span> dperf
<span class="token builtin class-name">export</span> <span class="token assign-left variable">PKG_CONFIG_PATH</span><span class="token operator">=</span>/root/CLion/dpdk/dpdk-stable-22.11.4/mydpdk/lib/x86_64-linux-gnu/pkgconfig
<span class="token function">make</span>

<span class="token comment"># 运行 dperf</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">LD_LIBRARY_PATH</span><span class="token operator">=</span>/root/CLion/dpdk/dpdk-stable-22.11.4/mydpdk/lib/x86_64-linux-gnu
./build/dperf <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是默认的方式安装DPDK，对应的路径有所不同：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>root@msy:/usr<span class="token comment"># find ./ -name pkgconfig</span>
./lib/x86_64-linux-gnu/pkgconfig
./lib/pkgconfig
./share/pkgconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="faq" tabindex="-1"><a class="header-anchor" href="#faq"><span>FAQ</span></a></h3><h4 id="官方faq" tabindex="-1"><a class="header-anchor" href="#官方faq"><span>官方FAQ</span></a></h4><p>https://dperf.org/doc/html/dperf-faq</p><p>目录：</p><ol><li>支持性 <ol><li>支持哪些DPDK版本？</li><li>支持哪些平台？</li><li>支持哪些网卡？</li><li>支持哪些操作系统？</li><li>有安装包吗？</li></ol></li><li>环境类 <ol><li>如何编译dperf？</li><li>如何配置大页和绑定网卡？</li><li>如何运行 dperf，参数是什么？</li><li>启动失败报网卡初始化失败</li><li>启动失败报找不到网关</li></ol></li><li>配置类 <ol><li>如何配置 dperf？</li><li>我可以在同一台主机上运行客户端和服务器吗？</li><li>我可以在同一台主机上运行客户端和服务器吗？</li><li>统计数据的含义是什么？</li><li>如何测试网络带宽？推荐的初始配置</li></ol></li><li>高级类 7. 如何使用多CPU核心？ 8. 如何使用多网卡？ 9. 如何使用修改后的源地址测试 DUT（例如第 4 层负载均衡器 DPVS 的 FULLNAT 模式）？ 10. 如何验证dperf是否启动成功？</li><li>更多问题 <ol><li>如何贡献？</li><li>如何提问？</li><li>如何学习代码？</li><li>有计划支持HTTPS吗？</li><li>有计划支持DNS吗？</li><li>绩效未达到预期水平？</li><li>如何测试大象流？</li><li>错误：“没有足够的可用端口”</li><li>curl/ab无法访问dperf服务器</li><li>错误：“套接字分配失败”</li></ol></li></ol><h4 id="缺少kni" tabindex="-1"><a class="header-anchor" href="#缺少kni"><span>缺少kni</span></a></h4><p>安装时报错：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>In <span class="token function">file</span> included from src/config.h:26,
                 from src/main.c:24:
src/port.h:29:10: fatal error: rte_kni.h: No such <span class="token function">file</span> or directory
   <span class="token number">29</span> <span class="token operator">|</span> <span class="token comment">#include &lt;rte_kni.h&gt;</span>
      <span class="token operator">|</span>          ^~~~~~~~~~~
compilation terminated.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里rte的其他头文件是有的，但没有这个kni头文件</p><p>解决方法：卸载并重新安装DPDK（根据DPerf而非DPDK官网的方法安装）</p><h4 id="无法设置大页" tabindex="-1"><a class="header-anchor" href="#无法设置大页"><span>无法设置大页</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>root@msy:~/CLion/dperf/build<span class="token comment"># dpdk-hugepages.py --clear</span>
Unable to <span class="token builtin class-name">set</span> pages <span class="token punctuation">(</span><span class="token number">158</span> instead of <span class="token number">0</span> <span class="token keyword">in</span> /sys/devices/system/node/node0/hugepages/hugepages-2048kB/nr_hugepages<span class="token punctuation">)</span>.
root@msy:~/CLion/dperf/build<span class="token comment"># dpdk-hugepages.py --setup 2048000K</span>
Unable to <span class="token builtin class-name">set</span> pages <span class="token punctuation">(</span><span class="token number">158</span> instead of <span class="token number">0</span> <span class="token keyword">in</span> /sys/devices/system/node/node0/hugepages/hugepages-2048kB/nr_hugepages<span class="token punctuation">)</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先检查是否已经启用了大页</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> /proc/meminfo <span class="token operator">|</span> <span class="token function">grep</span> Huge
AnonHugePages:         <span class="token number">0</span> kB
ShmemHugePages:        <span class="token number">0</span> kB
FileHugePages:         <span class="token number">0</span> kB
HugePages_Total:     <span class="token number">158</span>
HugePages_Free:        <span class="token number">0</span>
HugePages_Rsvd:        <span class="token number">0</span>
HugePages_Surp:      <span class="token number">158</span>
Hugepagesize:       <span class="token number">2048</span> kB
Hugetlb:          <span class="token number">323584</span> kB
$ <span class="token function">cat</span> /proc/sys/vm/nr_hugepages
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>GPT：</p><blockquote><p>在你的情况下，你已经尝试使用<code>dpdk-hugepages.py --clear</code>命令来清除大页，但是这个命令没有成功。这可能是因为有一些DPDK进程仍在运行，占用了这些大页。</p><p>首先，你需要找出哪些进程正在使用大页。你可以使用<code>fuser</code>或<code>lsof</code>命令来查找哪些进程正在使用特定的文件或目录。在这种情况下，你需要查找使用<code>/dev/hugepages</code>目录的进程。</p><p><code>fuser -vm /dev/hugepages</code></p><p>或者</p><p><code>lsof /dev/hugepages</code></p><p>这些命令将列出正在使用大页的所有进程的PID。然后，你可以使用<code>kill</code>命令来停止这些进程。</p><p><code>kill -9 &lt;PID&gt;</code></p><p>一旦所有的DPDK进程都被停止，你就可以再次尝试使用<code>dpdk-hugepages.py --clear</code>命令来清除大页。如果这个命令仍然没有成功，你可以尝试直接修改<code>/sys/devices/system/node/node0/hugepages/hugepages-2048kB/nr_hugepages</code>文件来清除大页。</p><p><code>echo 0 &gt; /sys/devices/system/node/node0/hugepages/hugepages-2048kB/nr_hugepages</code></p><p>这个命令将会设置系统的大页数量为0，从而清除所有的大页。如果你的系统有多个NUMA节点，你可能需要为每个节点执行这个命令。</p><p>请注意，这些操作需要root权限，所以在执行这些命令时，你可能需要使用<code>sudo</code>。</p></blockquote><h4 id="当退出后再次运行失败" tabindex="-1"><a class="header-anchor" href="#当退出后再次运行失败"><span>当退出后再次运行失败</span></a></h4><p>他会说有另一个进程在运行，找到并删掉就好</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># ./dperf -c client1.conf</span>
EAL: Detected CPU lcores: <span class="token number">8</span>
EAL: Detected NUMA nodes: <span class="token number">1</span>
EAL: Detected static linkage of DPDK
EAL: Cannot create lock on <span class="token string">&#39;/var/run/dpdk/rte/config&#39;</span><span class="token builtin class-name">.</span> Is another primary process running?
EAL: FATAL: Cannot init config
EAL: Cannot init config
rte_eal_init fail
dpdk_eal_init fail
dpdk init fail
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删掉：ps aux 找到：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>root       17595  2.0  0.1 67192540 13692 pts/1  Tl   07:25   0:07 ./dperf -c client1.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="同机器运行cs问题" tabindex="-1"><a class="header-anchor" href="#同机器运行cs问题"><span>同机器运行CS问题</span></a></h4><p>参考 dPerf 的 FAQ</p><p>例如分配了4G大页，那么就要给分别给2G，</p><ul><li>单NUMA系统：均 <code>socket_mem 2048</code></li><li>双NUMA系统：分别 <code>socket_mem 2048,0</code>、<code>socket_mem 0,2048</code></li></ul><h4 id="无三层交换机问题" tabindex="-1"><a class="header-anchor" href="#无三层交换机问题"><span>无三层交换机问题</span></a></h4><p>参考：https://dperf.org/doc/html/dperf-performance-testing-advanced</p><p>放同一网关就行</p><h2 id="dpdk初始化" tabindex="-1"><a class="header-anchor" href="#dpdk初始化"><span>DPDK初始化</span></a></h2><p>安装完后，还需要进行一些初始化操作</p><h3 id="配置大页" tabindex="-1"><a class="header-anchor" href="#配置大页"><span>配置大页</span></a></h3><p>手动</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dpdk-hugepages.py <span class="token function">clear</span>
dpdk-hugepages.py <span class="token parameter variable">--setup</span> 409600K <span class="token comment"># 2*2048*1024=4GB</span>
modprobe vfio-pci
dpdk-devbind.py <span class="token parameter variable">-b</span> vfio-pci 04:00.1 <span class="token parameter variable">--force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>./dpdk_env_init.sh</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span> <span class="token comment"># 非零退出状态的命令时立即终止</span>

<span class="token assign-left variable">GRUB_FILE</span><span class="token operator">=</span><span class="token string">&quot;/etc/default/grub&quot;</span>
<span class="token assign-left variable">GRUB_FILE_TEMP</span><span class="token operator">=</span><span class="token string">&quot;/etc/default/grub.temp&quot;</span>
<span class="token assign-left variable">LOCK_CORE</span><span class="token operator">=</span><span class="token string">&quot;isolcpus=1,2,3,4,5,6,7&quot;</span> <span class="token comment"># 系统隔离的逻辑核</span>
<span class="token assign-left variable">RESERVED_MEMORY</span><span class="token operator">=</span><span class="token number">3</span>                  <span class="token comment"># 系统保留内存</span>
<span class="token assign-left variable">is_modified</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token comment"># (1) 检查GRUB_CMDLINE_LINUX_DEFAULT设置是否正确</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;(1) GRUB_check&quot;</span>
<span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">grep</span> <span class="token string">&#39;GRUB_CMDLINE_LINUX_DEFAULT=&quot;quiet splash iommu=pt intel_iommu=on&quot;&#39;</span> <span class="token variable">$GRUB_FILE</span> <span class="token operator">&gt;</span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token function">sed</span> <span class="token string">&#39;s/^GRUB_CMDLINE_LINUX_DEFAULT=&quot;quiet&quot;/GRUB_CMDLINE_LINUX_DEFAULT=&quot;quiet splash iommu=pt intel_iommu=on&quot;/&#39;</span> <span class="token variable">$GRUB_FILE</span> <span class="token operator">&gt;</span><span class="token variable">$GRUB_FILE_TEMP</span>
  <span class="token function">mv</span> <span class="token variable">$GRUB_FILE_TEMP</span> <span class="token variable">$GRUB_FILE</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;GRUB_CMDLINE_LINUX_DEFAULT has been set to &#39;quiet splash iommu=pt intel_iommu=on&#39;.&quot;</span>
  <span class="token assign-left variable">is_modified</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">fi</span>

<span class="token comment"># (2) 检查GRUB_CMDLINE_LINUX设置是否正确</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;(2) GRUB_check2&quot;</span>
<span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">grep</span> <span class="token string">&quot;GRUB_CMDLINE_LINUX=<span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">\${LOCK_CORE}</span><span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span> <span class="token variable">$GRUB_FILE</span> <span class="token operator">&gt;</span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token comment"># 替换GRUB_CMDLINE_LINUX的值</span>
  <span class="token function">sed</span> <span class="token string">&quot;/^GRUB_CMDLINE_LINUX=/s/<span class="token entity" title="\\&quot;">\\&quot;</span>[^<span class="token entity" title="\\&quot;">\\&quot;</span>]*<span class="token entity" title="\\&quot;">\\&quot;</span>/<span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">\${LOCK_CORE}</span><span class="token entity" title="\\&quot;">\\&quot;</span>/&quot;</span> <span class="token variable">$GRUB_FILE</span> <span class="token operator">&gt;</span><span class="token variable">$GRUB_FILE_TEMP</span>
  <span class="token comment"># 将修改后的临时文件覆盖原始文件</span>
  <span class="token function">mv</span> <span class="token variable">$GRUB_FILE_TEMP</span> <span class="token variable">$GRUB_FILE</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;GRUB_CMDLINE_LINUX has been set to &#39;<span class="token variable">\${LOCK_CORE}</span>&#39;.&quot;</span>
  <span class="token assign-left variable">is_modified</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">fi</span>

<span class="token comment"># (3) 如果有修改, 更新GRUB配置文件并提示重启</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;(3) GRUB_change&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$is_modified</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token function">update-grub</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;System will reboot in 30 seconds...&quot;</span>
  <span class="token function">sleep</span> <span class="token number">30</span>
  <span class="token function">reboot</span>
<span class="token keyword">fi</span>

<span class="token comment"># 新增环境变量路径</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/usr/local/PacketMaster/scripts/DPDK

<span class="token comment"># (4) 大页相关设置</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;(4) HugePages Set&quot;</span>
dpdk-hugepages.py <span class="token parameter variable">--clear</span> <span class="token comment"># 清除大页(hugepages)</span>
<span class="token assign-left variable">mem_free</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">grep</span> MemFree /proc/meminfo <span class="token operator">|</span> <span class="token function">awk</span> -F: <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token parameter variable">-d</span> <span class="token string">&#39; kB&#39;</span><span class="token variable">)</span></span> <span class="token comment"># 获取可用内存</span>
<span class="token assign-left variable">hugepage_size</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>mem_free <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">)</span> <span class="token operator">*</span> RESERVED_MEMORY<span class="token variable">))</span></span> <span class="token comment"># hugepage_size为 (可用内存-RESERVED_MEMORY)</span>
<span class="token assign-left variable">hugepage_size</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>hugepage_siz37e <span class="token operator">/</span> <span class="token number">2048</span> <span class="token operator">*</span> <span class="token number">2048</span><span class="token variable">))</span></span>
dpdk-hugepages.py <span class="token parameter variable">--setup</span> <span class="token variable">\${hugepage_size}</span>K <span class="token comment"># 分配大页(hugepages)</span>

<span class="token comment"># 加载vfio-pci模块</span>
modprobe vfio-pci

<span class="token comment"># (5) 绑定网卡</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;(5) Bind Card&quot;</span>
<span class="token comment"># 找到所有的非管理口网卡(目前只适配2600以及X10硬件, 如果后续管理口不是I211或者I210就需要修改)</span>
<span class="token assign-left variable">nics</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>dpdk-devbind.py <span class="token parameter variable">-s</span> <span class="token operator">|</span> <span class="token function">grep</span> drv <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> I211 <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> I210 <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> *Active*<span class="token variable">)</span></span> <span class="token comment"># grep -E &#39;0000:(02|82|81)&#39;</span>
<span class="token comment"># 绑定非管理口网卡</span>
<span class="token keyword">while</span> <span class="token builtin class-name">read</span> <span class="token parameter variable">-r</span> nic_info<span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token assign-left variable">nic</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$nic_info</span>&quot;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">)</span></span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">$nic</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">continue</span>
  <span class="token keyword">fi</span>
  <span class="token comment"># 开始解绑网卡</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;bind <span class="token variable">$nic</span>&quot;</span>
  dpdk-devbind.py <span class="token parameter variable">-b</span> vfio-pci <span class="token string">&quot;<span class="token variable">$nic</span>&quot;</span> <span class="token parameter variable">--force</span>
<span class="token keyword">done</span> <span class="token operator">&lt;&lt;&lt;</span><span class="token string">&quot;<span class="token variable">$nics</span>&quot;</span>

<span class="token comment"># (6) 其他环境检查</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;(6) Other&quot;</span>
<span class="token comment"># 检查 zip 是否已安装</span>
<span class="token keyword">if</span> <span class="token operator">!</span> dpkg <span class="token parameter variable">-s</span> <span class="token function">zip</span> <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;zip is not installed, installing...&quot;</span>
  <span class="token function">apt</span> update
  <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">zip</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;zip was installed.&quot;</span>
<span class="token keyword">fi</span>
<span class="token comment"># 检查 net-tools 是否已安装</span>
<span class="token keyword">if</span> <span class="token operator">!</span> dpkg <span class="token parameter variable">-s</span> net-tools <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;net-tools is not installed, installing...&quot;</span>
  <span class="token function">apt</span> update
  <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> net-tools
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;net-tools was installed.&quot;</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;env init successfully.&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dperf配置" tabindex="-1"><a class="header-anchor" href="#dperf配置"><span>Dperf配置</span></a></h2><h3 id="主要配置参数" tabindex="-1"><a class="header-anchor" href="#主要配置参数"><span>主要配置参数</span></a></h3><p>参考：https://dperf.org/doc/html/configuration</p><p>略</p><h3 id="统计查看" tabindex="-1"><a class="header-anchor" href="#统计查看"><span>统计查看</span></a></h3><p>客户端和服务端的统计是一样的</p><p>在运行的整个过程中显示的都是实时统计，没有累计统计：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>seconds 第几秒的统计        cpuUsage CPU使用情况
pktRx   收包数              pktTx   发包数             bitsRx   接收比特                  bitsTx  发送比特            dropTx  发送丢包

tcpRx   TCP报文            tcpTx    TCP报文             udpRx    UDP报文                 udpTx   UDP报文 
arpRx   ARP报文            arpTx    ARP报文             icmpRx   ICMP报文                icmpTx  ICMP报文

tosRx   0                  otherRx  0                  badRx    接收错包
udpRt   0                  udpDrop  udp丢包            tcpDrop  tcp丢包
skOpen  socket打开数       skClose  socket关闭数       skCon    socket连接数 (等同设置的cc项)   skErr   socket连接错误数             

ierrors 输入错误            oerrors  输出错误           imissed  0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>累计统计会在测试结束后给出：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>-----------------------
dperf Test Finished
Version: 1.7.0-dev
License: Apache 2.0
Author:  Jianzhang Peng
-----------------------

Total Numbers:
pktRx   21                 pktTx    1,111              bitsRx   38,696             bitsTx  13,203,696         dropTx  0                
tcpRx   0                  tcpTx    0                  udpRx    13                 udpTx   1,100
arpRx   0                  arpTx    11                 icmpRx   0                  icmpTx  0
tosRx   0                  otherRx  8                  badRx    0
udpRt   1,000              udpDrop  13                 tcpDrop  0
skOpen  100                skClose  0                  skCon    100                skErr   0
ierrors 0                  oerrors  0                  imissed  0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，前面两个是UDP的，TCP的还会再多一些统计项处理：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>seconds 153                cpuUsage 0
pktRx   0                  pktTx    39,980             bitsRx   0                  bitsTx  19,830,080         dropTx  0

tcpRx   0                  tcpTx    39,980             udpRx    0                  udpTx   0
arpRx   0                  arpTx    0                  icmpRx   0                  icmpTx  0

tosRx   0                  otherRx  0                  badRx    0

# 这个部分不同
synRx   0                  synTx    39,980             finRx    0                  finTx   0                  rstRx   0          rstTx 0
synRt   39,980             finRt    0                  ackRt    0                  pushRt  0
tcpDrop 0                  udpDrop  0                  ackDup   0
skOpen  0                  skClose  19,990             skCon    80,020             skErr   19,990             rtt(us) 0.0 # TCP会多一个rtt，借此可以测试网络迟延
httpGet 0                  http2XX  0                  httpErr  0

ierrors 0                  oerrors  0                  imissed  0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="正式测试" tabindex="-1"><a class="header-anchor" href="#正式测试"><span>正式测试</span></a></h2><ul><li>server：0000:04:00.1、cpu1、port2480</li><li>client ：0000:04:00.0、cpu0</li></ul><h3 id="快速测试" tabindex="-1"><a class="header-anchor" href="#快速测试"><span>快速测试</span></a></h3><p>参考：https://dperf.org/doc/html/dperf-quick-start</p><p>server0.conf (亲测可用，但非双端测试)</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mode        server
cpu         1
duration    10m
port        0000:04:00.1    6.6.241.27   6.6.241.31
client      6.6.241.31      1
server      6.6.241.27      1
listen      80 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./dperf <span class="token parameter variable">-c</span> server0.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="基础测试-新连接速率测试" tabindex="-1"><a class="header-anchor" href="#基础测试-新连接速率测试"><span>基础测试 - 新连接速率测试</span></a></h3><p>参考：https://dperf.org/doc/html/dperf-performance-testing-basic</p><p>server1.conf (亲测可用)</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> daemon</span>
mode            server
tx_burst        128
cpu             1
duration        3m
payload_size    1

<span class="token title important"><span class="token punctuation">#</span> numa2</span>
port            0000:04:00.1    6.6.247.3    6.6.247.1  b4:a9:fc:ab:7a:85

<span class="token title important"><span class="token punctuation">#</span> addr_start      num</span>
client          6.6.245.3       100

<span class="token title important"><span class="token punctuation">#</span> addr_start      num</span>
server          6.6.247.3       1

<span class="token title important"><span class="token punctuation">#</span> port_start      num</span>
listen          2480              5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>服务器侦听 IP 6.6.247.3，端口范围为 80-84。</li><li>仅接受 6.6.245.3-6.6.245.102 范围内的客户端地址。源地址超出此范围的 TCP 数据包将被丢弃或重置。 Ping 不受影响。</li><li>服务器绑定到具有互连 IP 6.6.247.3（重用侦听 IP）和网关 6.6.247.1（交换机 IP）的单个网络接口。</li><li>新连接速率测试中无法开启Keepalive。</li><li>将 HTTP 响应长度设置为最小值： <code>payload_size 1</code></li></ul><p>client-newCC.conf (亲测可用)</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>mode            client
tx_burst        128
launch_num      10
cpu             0
payload_size    1
duration        2m
cps             2.1m

<span class="token title important"><span class="token punctuation">#</span> port           pci             addr      gateway        [mac]</span>
port            0000:04:00.0    6.6.245.3 6.6.245.1  b4:a9:fc:ab:7a:85

<span class="token title important"><span class="token punctuation">#</span> addr_start      num</span>
client          6.6.245.3       100

<span class="token title important"><span class="token punctuation">#</span> addr_start      num</span>
server          6.6.247.3       1
<span class="token title important"><span class="token punctuation">#</span> port_start      num</span>
listen          2480              5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>客户端以服务器的监听地址为目标。 IP为6.6.247.3，端口范围为80-84。</li><li>客户端使用地址池中的IP地址：6.6.245.3-6.6.245.102。</li><li>客户端绑定到具有互连 IP 6.6.245.3（重用池中的地址）和网关 6.6.245.1（交换机 IP）的单个网络接口。</li><li>将 HTTP 响应长度设置为最小值： <code>payload_size 1</code></li><li>将 CPS (每秒连接数) 目标设置为 200 万。根据CPU容量灵活调整CPS值。建议从较小的值开始，例如“10k”。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Run the server</span>
./dperf <span class="token parameter variable">-c</span> server1.conf

<span class="token comment"># Run the client</span>
./dperf <span class="token parameter variable">-c</span> client1.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基础测试-并发连接测试" tabindex="-1"><a class="header-anchor" href="#基础测试-并发连接测试"><span>基础测试 - 并发连接测试</span></a></h3><p>client-concurrentConnections.conf</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>mode            client
tx_burst        128
launch_num      10
cpu             0
payload_size    1
duration        10m
cps             0.5m
cc              100m


keepalive       60s

<span class="token title important"><span class="token punctuation">#</span> port           pci             addr      gateway    [mac]</span>
port            0000:04:00.0    6.6.245.3 6.6.245.1  b4:a9:fc:ab:7a:85

<span class="token title important"><span class="token punctuation">#</span> addr_start      num</span>
client          6.6.245.3       100

<span class="token title important"><span class="token punctuation">#</span> addr_start      num</span>
server          6.6.247.3       1
<span class="token title important"><span class="token punctuation">#</span> port_start      num</span>
listen          80              32
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>客户端配置已针对并发连接测试进行调整。</li><li>Keepalive 设置为 60 秒以维持长期连接。</li><li>CPS 目标设定为 50 万。</li><li>CC（并发连接数）设置为1亿。根据您的具体测试要求调整这些值。</li></ul><h3 id="基础测试-带宽测试" tabindex="-1"><a class="header-anchor" href="#基础测试-带宽测试"><span>基础测试 - 带宽测试</span></a></h3><p>带宽测试建立在并发连接测试的基础上：</p><ul><li>通过将 <code>payload_size</code> 设置为 1400 来增加消息长度。</li><li>减少并发连接数，例如将 <code>cc</code> 设置为3000。</li><li>提高请求发送速度，例如每 1 毫秒发送一次请求。</li><li>由于并发级别较低，CPS 较低。</li></ul><p>client-bandwidth.conf</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>mode            client
tx_burst        128
launch_num      10
cpu             0
payload_size    1400
duration        10m
cps             10
cc              10
keepalive       60s

<span class="token title important"><span class="token punctuation">#</span> port           pci             addr      gateway    [mac]</span>
port            0000:04:00.0    6.6.245.3 6.6.245.1  b4:a9:fc:ab:7a:85

<span class="token title important"><span class="token punctuation">#</span> addr_start      num</span>
client          6.6.245.3       5

<span class="token title important"><span class="token punctuation">#</span> addr_start      num</span>
server          6.6.247.3       1
<span class="token title important"><span class="token punctuation">#</span> port_start      num</span>
listen          2480              32
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基础测试-pps测试" tabindex="-1"><a class="header-anchor" href="#基础测试-pps测试"><span>基础测试 - PPS测试</span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>mode            client
tx_burst        128
launch_num      10
cpu             0
payload_size    1
duration        2m
cps             400
cc              3000
keepalive       1ms

<span class="token title important"><span class="token punctuation">#</span> port           pci             addr         gateway    [mac]</span>
port            0000:01:00.0    6.6.245.3   6.6.245.1   b4:a9:fc:ab:7a:85

<span class="token title important"><span class="token punctuation">#</span> addr_start      num</span>
client          6.6.245.3        100

<span class="token title important"><span class="token punctuation">#</span> addr_start      num</span>
server          6.6.247.3       1
<span class="token title important"><span class="token punctuation">#</span> port_start      num</span>
listen          80              5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>对于最小数据包长度，有效负载大小设置为 1 字节。</li></ul><h2 id="个人自用测试项" tabindex="-1"><a class="header-anchor" href="#个人自用测试项"><span>个人自用测试项</span></a></h2><p>参考：https://dperf.org/doc/html/configuration</p><p>另外注意：</p><ul><li>哪怕在注释里，也不能有中文，否则直接不会运行也不会报错</li><li>不支持行尾注释，注释只能单独一行</li><li>逗号后面不要加空格</li></ul><h3 id="_3000并发1ms" tabindex="-1"><a class="header-anchor" href="#_3000并发1ms"><span>3000并发1ms</span></a></h3><p>client.conf</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># Occupy resource Settings</span>
mode            client
cpu             0
socket_mem      1920

<span class="token comment"># General Settings</span>
duration        2m
protocol        udp

<span class="token comment"># Client setup</span>
tx_burst        128
launch_num      10
<span class="token comment"># payload_size  1400</span>
packet_size     64
cps             300
cc              3000
keepalive       1ms
pipeline        0

<span class="token comment"># Network topology setting</span>
<span class="token comment"># port          pci             addr       gateway    [mac]</span>
port            0000<span class="token punctuation">:</span>04<span class="token punctuation">:</span>00.0    6.6.245.11 6.6.245.1  b4<span class="token punctuation">:</span>a9<span class="token punctuation">:</span>fc<span class="token punctuation">:</span>ab<span class="token punctuation">:</span>7a<span class="token punctuation">:</span><span class="token number">91</span>
<span class="token comment"># addr_start    num</span>
client          6.6.245.11      10
<span class="token comment"># addr_start    num</span>
server          6.6.245.1       1
<span class="token comment"># port_start    num</span>
listen          2480            1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>server.conf</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># Occupy resource Settings</span>
mode            server
cpu             1
socket_mem      1920

<span class="token comment"># General Settings</span>
duration        2m
protocol        udp

<span class="token comment"># Server setup</span>
<span class="token comment"># send_window</span>
keepalive       1ms

<span class="token comment"># Network topology setting</span>
<span class="token comment"># port          pci             addr       gateway    [mac]</span>
port            0000<span class="token punctuation">:</span>04<span class="token punctuation">:</span>00.1    6.6.245.2  6.6.245.1  b4<span class="token punctuation">:</span>a9<span class="token punctuation">:</span>fc<span class="token punctuation">:</span>ab<span class="token punctuation">:</span>7a<span class="token punctuation">:</span><span class="token number">80</span>
<span class="token comment"># addr_start    num</span>
client          6.6.245.11      10
<span class="token comment"># addr_start    num</span>
server          6.6.245.2       1
<span class="token comment"># port_start    num</span>
listen          2480            1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10k并发1ms" tabindex="-1"><a class="header-anchor" href="#_10k并发1ms"><span>10k并发1ms</span></a></h3><p>client.conf</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># Occupy resource Settings</span>
mode            client
cpu             0
socket_mem      1920

<span class="token comment"># General Settings</span>
duration        2m
protocol        udp

<span class="token comment"># Client setup</span>
tx_burst        128
launch_num      10
<span class="token comment"># payload_size  1400</span>
packet_size     64
cps             1k
cc              10k
keepalive       1ms

<span class="token comment"># Network topology setting</span>
<span class="token comment"># port          pci             addr       gateway    [mac]</span>
port            0000<span class="token punctuation">:</span>04<span class="token punctuation">:</span>00.0    6.6.245.11 6.6.245.1  b4<span class="token punctuation">:</span>a9<span class="token punctuation">:</span>fc<span class="token punctuation">:</span>ab<span class="token punctuation">:</span>7a<span class="token punctuation">:</span><span class="token number">91</span>
<span class="token comment"># addr_start    num</span>
client          6.6.245.11      10
<span class="token comment"># addr_start    num</span>
server          6.6.245.1       1
<span class="token comment"># port_start    num</span>
listen          2480            1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>server.conf</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># Occupy resource Settings</span>
mode            server
cpu             1
socket_mem      1920

<span class="token comment"># General Settings</span>
duration        2m
protocol        udp

<span class="token comment"># Server setup</span>
<span class="token comment"># send_window</span>
keepalive       1ms

<span class="token comment"># Network topology setting</span>
<span class="token comment"># port          pci             addr       gateway    [mac]</span>
port            0000<span class="token punctuation">:</span>04<span class="token punctuation">:</span>00.1    6.6.245.2  6.6.245.1  b4<span class="token punctuation">:</span>a9<span class="token punctuation">:</span>fc<span class="token punctuation">:</span>ab<span class="token punctuation">:</span>7a<span class="token punctuation">:</span><span class="token number">80</span>
<span class="token comment"># addr_start    num</span>
client          6.6.245.11      10
<span class="token comment"># addr_start    num</span>
server          6.6.245.2       1
<span class="token comment"># port_start    num</span>
listen          2480            1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_200-ip-x-512-port-10k-并发" tabindex="-1"><a class="header-anchor" href="#_200-ip-x-512-port-10k-并发"><span>200 ip x 512 port = 10k 并发</span></a></h3><p>参考：https://blog.51cto.com/u_11529070/9214521，但弱化了一些参数，万用表100k就崩了</p><p>client.conf</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># Occupy resource Settings</span>
mode            client
cpu             0
socket_mem      1920

<span class="token comment"># General Settings</span>
duration        2m
protocol        udp

<span class="token comment"># Client setup</span>
tx_burst        128
launch_num      10
packet_size     64
cps             1k
cc              10k
keepalive       1ms
lport_range     1 512

<span class="token comment"># Network topology setting</span>
<span class="token comment"># port          pci             addr       gateway    [mac]</span>
port            0000<span class="token punctuation">:</span>04<span class="token punctuation">:</span>00.0    6.6.245.11 6.6.245.1  b4<span class="token punctuation">:</span>a9<span class="token punctuation">:</span>fc<span class="token punctuation">:</span>ab<span class="token punctuation">:</span>7a<span class="token punctuation">:</span><span class="token number">91</span>
<span class="token comment"># addr_start    num</span>
client          6.6.245.11      200
<span class="token comment"># addr_start    num</span>
server          6.6.245.1       1
<span class="token comment"># port_start    num</span>
listen          2480            1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>server.conf</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># Occupy resource Settings</span>
mode            server
cpu             1
socket_mem      1920

<span class="token comment"># General Settings</span>
duration        2m
protocol        udp

<span class="token comment"># Server setup</span>
<span class="token comment"># send_window</span>
keepalive       1ms

<span class="token comment"># Network topology setting</span>
<span class="token comment"># port          pci             addr       gateway    [mac]</span>
port            0000<span class="token punctuation">:</span>04<span class="token punctuation">:</span>00.1    6.6.245.2  6.6.245.1  b4<span class="token punctuation">:</span>a9<span class="token punctuation">:</span>fc<span class="token punctuation">:</span>ab<span class="token punctuation">:</span>7a<span class="token punctuation">:</span><span class="token number">80</span>
<span class="token comment"># addr_start    num</span>
client          6.6.245.11      200
<span class="token comment"># addr_start    num</span>
server          6.6.245.2       1
<span class="token comment"># port_start    num</span>
listen          2480            1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1488095pps" tabindex="-1"><a class="header-anchor" href="#_1488095pps"><span>1488095pps</span></a></h3><h3 id="单连接大流" tabindex="-1"><a class="header-anchor" href="#单连接大流"><span>单连接大流</span></a></h3><p>client.conf</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># Occupy resource Settings</span>
mode            client
cpu             0
socket_mem      1920

<span class="token comment"># General Settings</span>
duration        2m
protocol        udp

<span class="token comment"># Client setup</span>
tx_burst        128
launch_num      10
<span class="token comment"># payload_size  1400</span>
packet_size     64
cps             1k
cc              10k
keepalive       1ms

<span class="token comment"># Network topology setting</span>
<span class="token comment"># port          pci             addr       gateway    [mac]</span>
port            0000<span class="token punctuation">:</span>04<span class="token punctuation">:</span>00.0    6.6.245.11 6.6.245.1  b4<span class="token punctuation">:</span>a9<span class="token punctuation">:</span>fc<span class="token punctuation">:</span>ab<span class="token punctuation">:</span>7a<span class="token punctuation">:</span><span class="token number">91</span>
<span class="token comment"># addr_start    num</span>
client          6.6.245.11      10
<span class="token comment"># addr_start    num</span>
server          6.6.245.1       1
<span class="token comment"># port_start    num</span>
listen          2480            1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>server.conf</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># Occupy resource Settings</span>
mode            server
cpu             1
socket_mem      1920

<span class="token comment"># General Settings</span>
duration        2m
protocol        udp

<span class="token comment"># Server setup</span>
<span class="token comment"># send_window</span>
keepalive       10us

<span class="token comment"># Network topology setting</span>
<span class="token comment"># port          pci             addr       gateway    [mac]</span>
port            0000<span class="token punctuation">:</span>04<span class="token punctuation">:</span>00.1    6.6.245.2  6.6.245.1  b4<span class="token punctuation">:</span>a9<span class="token punctuation">:</span>fc<span class="token punctuation">:</span>ab<span class="token punctuation">:</span>7a<span class="token punctuation">:</span><span class="token number">80</span>
<span class="token comment"># addr_start    num</span>
client          6.6.245.11      10
<span class="token comment"># addr_start    num</span>
server          6.6.245.2       1
<span class="token comment"># port_start    num</span>
listen          2480            1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_20k连接速度-tcp" tabindex="-1"><a class="header-anchor" href="#_20k连接速度-tcp"><span>20k连接速度 tcp</span></a></h3><p>参考：https://blog.51cto.com/u_11529070/9214521，但弱化了一些参数，万用表100k就崩了</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mode            client
tx_burst        128
launch_num      10
cpu             0
socket_mem      2048

payload_size    1
duration        2m
cps             20k

#port           pci             addr      gateway        [mac]
port            0000:04:00.0    6.6.245.11 6.6.245.1  b4:a9:fc:ab:7a:91

#               addr_start      num
client          6.6.245.11		20

#               addr_start      num
server          6.6.245.2       1
#               port_start      num
listen          2480            1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#daemon
mode            server
tx_burst        128
cpu             7
socket_mem      1920

duration        3m
payload_size    1

#numa2
port            0000:04:00.1    6.6.245.2  6.6.245.1  b4:a9:fc:ab:7a:80

#               addr_start      num
client          6.6.245.11		20

#               addr_start      num
server          6.6.245.2       1

#               port_start      num
listen          2480            1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1m-pps-大象流" tabindex="-1"><a class="header-anchor" href="#_1m-pps-大象流"><span>1M PPS 大象流</span></a></h3><p>参考：https://dperf.org/doc/html/elephant</p><p>在之前的版本中，dperf 对于单个连接来说，单向最大 PPS 为 100K，两个方向最大 PPS 为 200K。在某些场景下，我们需要测试单流1M PPS，这种高PPS的流称为大象流。本文介绍如何配置 dperf 来测试单流 1M PPS。注意大象流仅支持UDP协议。</p><p>核心配置：</p><ul><li>pipeline。原来的dperf客户端需要收到服务器的响应后才能发送下一个请求；使用pipeline可以一次发送多个请求，类似于http的pipeline请求；这样PPS就可以翻倍。</li><li>keepalive。 dperf原来的keepalive间隔只能配置为最小10us，现在可以配置为最小0。更小的间隔可以让dperf更快地发送请求。</li><li>flood。这是单向流的开关，表示连接不需要等待响应。</li></ul><h4 id="单向大象流配置示例" tabindex="-1"><a class="header-anchor" href="#单向大象流配置示例"><span>单向大象流配置示例</span></a></h4><p>服务器配置</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mode            server
protocol        udp
tx_burst        4
payload_size    1
keepalive       1s
cpu             1
duration        2h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端配置</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mode            client
protocol        udp
tx_burst        4
payload_size    1
keepalive       1us
pipeline        1
cc        1
flood
cpu             0
duration        1h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="双向大象流配置示例" tabindex="-1"><a class="header-anchor" href="#双向大象流配置示例"><span>双向大象流配置示例</span></a></h4><p>server configuration 服务器配置</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mode            server
protocol        udp
tx_burst        4
payload_size    1
keepalive       1s
cpu             1
duration        2h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>client configuration 客户端配置</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mode            client
protocol        udp
tx_burst        4
payload_size    1
keepalive       0us
socket_mem      2048
pipeline        10
cc        1
cpu             0
duration        1h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_100g带宽" tabindex="-1"><a class="header-anchor" href="#_100g带宽"><span>100G带宽</span></a></h3><p>参考：https://zhuanlan.zhihu.com/p/601137162</p><p>客户端 12核x10网口x65535端口 -&gt; 12核x12网口x1端口，1450大小</p><p>cc 8000、cps2000</p><h3 id="向大量-ip-发送" tabindex="-1"><a class="header-anchor" href="#向大量-ip-发送"><span>向大量 IP 发送</span></a></h3><p>参考：https://dperf.org/doc/html/dperf-change-dip</p><h3 id="http服务" tabindex="-1"><a class="header-anchor" href="#http服务"><span>HTTP服务</span></a></h3><p>参考：https://dperf.org/doc/html/dperf-http-server</p><div class="language-plaintext line-numbers-mode" data-ext="plaintext" data-title="plaintext"><pre class="language-plaintext"><code>mode            server
protocol        http # 关键设置
jumbo           9000
tx_burst        6

payload_size    1m
send_window     6

keepalive       1s
cpu             0
duration        100m
port            0000:00:06.0    192.168.4.2    192.168.4.3
client          192.168.4.3     1
server          192.168.4.2     1
listen          80              1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="计算备注" tabindex="-1"><a class="header-anchor" href="#计算备注"><span>计算备注</span></a></h3>`,135),h=n("p",null,[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mtext",null,"总连接数"),n("mo",null,"="),n("mtext",null,"客户端"),n("mi",null,"I"),n("mi",null,"P"),n("mtext",null,"数"),n("mo",null,"∗"),n("mn",null,"65535"),n("mo",null,"∗"),n("mtext",null,"服务器"),n("mi",null,"I"),n("mi",null,"P"),n("mtext",null,"数"),n("mo",null,"∗"),n("mtext",null,"监听端口数")]),n("annotation",{encoding:"application/x-tex"},"总连接数=客户端IP数*65535*服务器IP数*监听端口数")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6833em"}}),n("span",{class:"mord cjk_fallback"},"总连接数"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"="),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6833em"}}),n("span",{class:"mord cjk_fallback"},"客户端"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),n("span",{class:"mord cjk_fallback"},"数"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"∗"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"65535"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"∗"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6833em"}}),n("span",{class:"mord cjk_fallback"},"服务器"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),n("span",{class:"mord cjk_fallback"},"数"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"∗"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6833em"}}),n("span",{class:"mord cjk_fallback"},"监听端口数")])])])],-1),g=n("p",null,"socket数计算",-1),x=n("ul",null,[n("li",null,[s("例如： "),n("ul",null,[n("li",null,[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mo",{stretchy:"false"},"("),n("mtext",null,"客户端端口 "),n("mn",null,"65536"),n("mo",null,"×"),n("mtext",null,"客户端"),n("mi",null,"I"),n("mi",null,"P"),n("mtext",null," "),n("mn",null,"20"),n("mo",{stretchy:"false"},")"),n("mo",null,"×"),n("mo",{stretchy:"false"},"("),n("mtext",null,"服务端"),n("mi",null,"I"),n("mi",null,"P"),n("mtext",null," "),n("mn",null,"1"),n("mo",null,"×"),n("mtext",null,"服务端端口 "),n("mn",null,"20"),n("mo",{stretchy:"false"},")"),n("mo",null,"="),n("mn",null,"26214000")]),n("annotation",{encoding:"application/x-tex"},"(客户端端口~65536\\times客户端IP~20)\\times(服务端IP~1\\times服务端端口~20) = 26214000")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mopen"},"("),n("span",{class:"mord cjk_fallback"},"客户端端口"),n("span",{class:"mspace nobreak"}," "),n("span",{class:"mord"},"65536"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"×"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord cjk_fallback"},"客户端"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),n("span",{class:"mspace nobreak"}," "),n("span",{class:"mord"},"20"),n("span",{class:"mclose"},")"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"×"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mopen"},"("),n("span",{class:"mord cjk_fallback"},"服务端"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),n("span",{class:"mspace nobreak"}," "),n("span",{class:"mord"},"1"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"×"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord cjk_fallback"},"服务端端口"),n("span",{class:"mspace nobreak"}," "),n("span",{class:"mord"},"20"),n("span",{class:"mclose"},")"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"="),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"26214000")])])]),s("，"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mo",null,"∗"),n("mn",null,"80"),n("mi",null,"B"),n("mi",null,"y"),n("mi",null,"t"),n("mi",null,"e"),n("mi",{mathvariant:"normal"},"/"),n("mn",null,"1"),n("mi",null,"G"),n("mi",null,"B"),n("mo",null,"="),n("mtext",null,"内存大小"),n("mn",null,"1.95"),n("mi",null,"G"),n("mi",null,"B")]),n("annotation",{encoding:"application/x-tex"},"*80Byte/1GB= 内存大小1.95GB")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord"},"∗"),n("span",{class:"mord"},"80"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.05017em"}},"B"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),n("span",{class:"mord mathnormal"},"t"),n("span",{class:"mord mathnormal"},"e"),n("span",{class:"mord"},"/1"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.05017em"}},"GB"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"="),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6833em"}}),n("span",{class:"mord cjk_fallback"},"内存大小"),n("span",{class:"mord"},"1.95"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.05017em"}},"GB")])])])]),n("li",null,[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mo",{stretchy:"false"},"("),n("mtext",null,"客户端端口 "),n("mn",null,"65536"),n("mo",null,"×"),n("mtext",null,"客户端"),n("mi",null,"I"),n("mi",null,"P"),n("mtext",null," "),n("mn",null,"10"),n("mo",{stretchy:"false"},")"),n("mo",null,"×"),n("mo",{stretchy:"false"},"("),n("mtext",null,"服务端"),n("mi",null,"I"),n("mi",null,"P"),n("mtext",null," "),n("mn",null,"1"),n("mo",null,"×"),n("mtext",null,"服务端端口 "),n("mn",null,"10"),n("mo",{stretchy:"false"},")"),n("mo",null,"="),n("mn",null,"06553500")]),n("annotation",{encoding:"application/x-tex"},"(客户端端口~65536\\times客户端IP~10)\\times(服务端IP~1\\times服务端端口~10) = 06553500")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mopen"},"("),n("span",{class:"mord cjk_fallback"},"客户端端口"),n("span",{class:"mspace nobreak"}," "),n("span",{class:"mord"},"65536"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"×"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord cjk_fallback"},"客户端"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),n("span",{class:"mspace nobreak"}," "),n("span",{class:"mord"},"10"),n("span",{class:"mclose"},")"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"×"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mopen"},"("),n("span",{class:"mord cjk_fallback"},"服务端"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),n("span",{class:"mspace nobreak"}," "),n("span",{class:"mord"},"1"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"×"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord cjk_fallback"},"服务端端口"),n("span",{class:"mspace nobreak"}," "),n("span",{class:"mord"},"10"),n("span",{class:"mclose"},")"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"="),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"06553500")])])]),s("，"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mo",null,"∗"),n("mn",null,"80"),n("mi",null,"B"),n("mi",null,"y"),n("mi",null,"t"),n("mi",null,"e"),n("mi",{mathvariant:"normal"},"/"),n("mn",null,"1"),n("mi",null,"G"),n("mi",null,"B"),n("mo",null,"="),n("mtext",null,"内存大小"),n("mn",null,"0.49"),n("mi",null,"G"),n("mi",null,"B")]),n("annotation",{encoding:"application/x-tex"},"*80Byte/1GB = 内存大小0.49GB")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord"},"∗"),n("span",{class:"mord"},"80"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.05017em"}},"B"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),n("span",{class:"mord mathnormal"},"t"),n("span",{class:"mord mathnormal"},"e"),n("span",{class:"mord"},"/1"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.05017em"}},"GB"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"="),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6833em"}}),n("span",{class:"mord cjk_fallback"},"内存大小"),n("span",{class:"mord"},"0.49"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.05017em"}},"GB")])])])])])])],-1),f=i(`<h2 id="性能" tabindex="-1"><a class="header-anchor" href="#性能"><span>性能</span></a></h2><h3 id="dperf标榜性能" tabindex="-1"><a class="header-anchor" href="#dperf标榜性能"><span>Dperf标榜性能</span></a></h3><p>见大象流</p><p>在之前的版本中，dperf 对于单个连接来说，单向最大 PPS 为 100K，两个方向最大 PPS 为 200K。在某些场景下，我们需要测试单流1M PPS，这种高PPS的流称为大象流。本文介绍如何配置 dperf 来测试单流 1M PPS。注意大象流仅支持UDP协议。</p><h3 id="基准测试" tabindex="-1"><a class="header-anchor" href="#基准测试"><span>基准测试</span></a></h3><p>机器参数</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>卡：
04:00.0 Ethernet controller: Intel Corporation I350 Gigabit Network Connection (rev 01)

CPU
ip:                  1.208
Model name:            Intel(R) Core(TM) i7-4790K CPU @ 4.00GHz
CPU(s):                  8
CPU max MHz:         4000.0000
CPU min MHz:         800.0000
Caches (sum of all):
  L1d:                   128 KiB (4 instances)
  L1i:                   128 KiB (4 instances)
  L2:                    1 MiB (4 instances)
  L3:                    8 MiB (1 instance)

内存：
总大页：4194304K = 4G
配置分出：1920*2MB = 3840MB (3.75G)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="udp-cc-1000k" tabindex="-1"><a class="header-anchor" href="#udp-cc-1000k"><span>UDP CC-1000k</span></a></h4><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># 配置</span>
<span class="token comment"># 使用资源：1000k * 80Byte * 2 = 0.08G * 2</span>
<span class="token comment"># Occupy resource Settings</span>
mode            client
cpu             0
socket_mem      1920
port            0000<span class="token punctuation">:</span>04<span class="token punctuation">:</span>00.0    6.6.245.121 6.6.245.1   b4<span class="token punctuation">:</span>a9<span class="token punctuation">:</span>fc<span class="token punctuation">:</span>ab<span class="token punctuation">:</span>7a<span class="token punctuation">:</span><span class="token number">91</span>
<span class="token comment"># General Settings</span>
duration        1m
protocol        udp
packet_size     64
keepalive       1ms
client          6.6.245.11      100
server          6.6.245.2       1
listen          2480            100
lport_range     1 100
<span class="token comment"># Client setup</span>
tx_burst        128
launch_num      10
packet_size     64
cps             10k
cc              1000k

<span class="token comment"># 发送端：发1.4Mpps(计发送丢包可5Mpps) * 64*8bpp ~= 777Mbps，收53Kpps * 64*8bpp ~= 3.4MB，连接数360k</span>
seconds 50                 cpuUsage 100 
pktRx   53<span class="token punctuation">,</span>235             pktTx    4<span class="token punctuation">,</span><span class="token number">659</span><span class="token punctuation">,</span>163          bitsRx   27<span class="token punctuation">,</span><span class="token number">256</span><span class="token punctuation">,</span>320         bitsTx  2<span class="token punctuation">,</span><span class="token number">385</span><span class="token punctuation">,</span><span class="token number">491</span><span class="token punctuation">,</span>456      dropTx  3<span class="token punctuation">,</span><span class="token number">254</span><span class="token punctuation">,</span><span class="token number">020</span>         
tcpRx   0                  tcpTx    0                  udpRx    53<span class="token punctuation">,</span>235             udpTx   4<span class="token punctuation">,</span><span class="token number">659</span><span class="token punctuation">,</span><span class="token number">163</span>         
arpRx   0                  arpTx    0                  icmpRx   0                  icmpTx  0                 
tosRx   0                  otherRx  0                  badRx    0                 
udpRt   4<span class="token punctuation">,</span><span class="token number">598</span><span class="token punctuation">,</span>815          udpDrop  0                  tcpDrop  0                 
skOpen  8<span class="token punctuation">,</span>580              skClose  0                  skCon    358<span class="token punctuation">,</span>240            skErr   0                 
ierrors 0                  oerrors  0                  imissed  49<span class="token punctuation">,</span><span class="token number">808</span><span class="token punctuation">,</span><span class="token number">123</span> 

<span class="token comment"># 接收端：收发 1.4Mpps * 64*8bpp ~= 718Mbps</span>
seconds 59                 cpuUsage 44  
pktRx   1<span class="token punctuation">,</span><span class="token number">403</span><span class="token punctuation">,</span>848          pktTx    1<span class="token punctuation">,</span><span class="token number">403</span><span class="token punctuation">,</span>848          bitsRx   718<span class="token punctuation">,</span><span class="token number">770</span><span class="token punctuation">,</span>176        bitsTx  718<span class="token punctuation">,</span><span class="token number">770</span><span class="token punctuation">,</span>176        dropTx  0                 
tcpRx   0                  tcpTx    0                  udpRx    1<span class="token punctuation">,</span><span class="token number">403</span><span class="token punctuation">,</span>848          udpTx   1<span class="token punctuation">,</span><span class="token number">403</span><span class="token punctuation">,</span><span class="token number">848</span>         
arpRx   0                  arpTx    0                  icmpRx   0                  icmpTx  0                 
tosRx   0                  otherRx  0                  badRx    0                 
udpRt   0                  udpDrop  0                  tcpDrop  0                 
skOpen  0                  skClose  0                  skCon    0                  skErr   0                 
ierrors 0                  oerrors  0                  imissed  0    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="udp-cc-10000k" tabindex="-1"><a class="header-anchor" href="#udp-cc-10000k"><span>UDP CC-10000k</span></a></h4><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># 配置</span>
<span class="token comment"># 使用资源：10000k * 80Byte * 2 = 0.75G * 2</span>
<span class="token comment"># Occupy resource Settings</span>
mode            client
cpu             0
socket_mem      1920
port            0000<span class="token punctuation">:</span>04<span class="token punctuation">:</span>00.0    6.6.245.121 6.6.245.1   b4<span class="token punctuation">:</span>a9<span class="token punctuation">:</span>fc<span class="token punctuation">:</span>ab<span class="token punctuation">:</span>7a<span class="token punctuation">:</span><span class="token number">91</span>
<span class="token comment"># General Settings</span>
duration        1m
protocol        udp
packet_size     64
keepalive       1us
client          6.6.245.11      100
server          6.6.245.2       1
listen          2480            100
lport_range     1 1000
<span class="token comment"># Client setup</span>
tx_burst        128
launch_num      10
packet_size     64
cps             10k
cc              10000k

<span class="token comment"># 结果，同上，本来就只能到350k</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tcp-cc-1000k" tabindex="-1"><a class="header-anchor" href="#tcp-cc-1000k"><span>TCP CC-1000k</span></a></h4><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># 配置</span>
<span class="token comment"># 使用资源：1000k * 80Byte * 2 = 0.08G * 2</span>
<span class="token comment"># Occupy resource Settings</span>
mode            client
cpu             0
socket_mem      1920
port            0000<span class="token punctuation">:</span>04<span class="token punctuation">:</span>00.0    6.6.245.121 6.6.245.1   b4<span class="token punctuation">:</span>a9<span class="token punctuation">:</span>fc<span class="token punctuation">:</span>ab<span class="token punctuation">:</span>7a<span class="token punctuation">:</span><span class="token number">91</span>
<span class="token comment"># General Settings</span>
duration        1m
protocol        tcp
packet_size     64
keepalive       1ms
client          6.6.245.11      100
server          6.6.245.2       1
listen          2480            100
lport_range     1 100
<span class="token comment"># Client setup</span>
tx_burst        128
launch_num      10
packet_size     64
cps             10k
cc              1000k

<span class="token comment"># 发送端：收发 1.4Mpps(计发送丢包可1.5Mpps) * 64*8bpp ~= 777Mbps (满1G，他这里的统计不算前导码和帧间隙的)，连接数211k</span>
seconds 35                 cpuUsage 49  
pktRx   1<span class="token punctuation">,</span><span class="token number">420</span><span class="token punctuation">,</span>809          pktTx    1<span class="token punctuation">,</span><span class="token number">517</span><span class="token punctuation">,</span>316          bitsRx   727<span class="token punctuation">,</span><span class="token number">294</span><span class="token punctuation">,</span>512        bitsTx  776<span class="token punctuation">,</span><span class="token number">695</span><span class="token punctuation">,</span>536        dropTx  94<span class="token punctuation">,</span><span class="token number">611</span>            
tcpRx   1<span class="token punctuation">,</span><span class="token number">420</span><span class="token punctuation">,</span>809          tcpTx    1<span class="token punctuation">,</span><span class="token number">517</span><span class="token punctuation">,</span>316          udpRx    0                  udpTx   0                 
arpRx   0                  arpTx    0                  icmpRx   0                  icmpTx  0                 
tosRx   0                  otherRx  0                  badRx    0                 
synRx   9<span class="token punctuation">,</span>981              synTx    10<span class="token punctuation">,</span>641             finRx    0                  finTx   0                  rstRx   0          rstTx 0         
synRt   641                finRt    0                  ackRt    0                  pushRt  91<span class="token punctuation">,</span><span class="token number">301</span>            
tcpDrop 5<span class="token punctuation">,</span>393              udpDrop  0                  ackDup   0                 
skOpen  10<span class="token punctuation">,</span>000             skClose  152                skCon    211<span class="token punctuation">,</span>166            skErr   152               
tcpReq  1<span class="token punctuation">,</span><span class="token number">506</span><span class="token punctuation">,</span>675          tcpRsp   1<span class="token punctuation">,</span><span class="token number">405</span><span class="token punctuation">,</span><span class="token number">435</span>         
ierrors 0                  oerrors  0                  imissed  34<span class="token punctuation">,</span><span class="token number">902</span>  

<span class="token comment"># 服务端：同上</span>
seconds 60                 cpuUsage 49  
pktRx   1<span class="token punctuation">,</span><span class="token number">420</span><span class="token punctuation">,</span>782          pktTx    1<span class="token punctuation">,</span><span class="token number">459</span><span class="token punctuation">,</span>046          bitsRx   727<span class="token punctuation">,</span><span class="token number">279</span><span class="token punctuation">,</span>136        bitsTx  746<span class="token punctuation">,</span><span class="token number">865</span><span class="token punctuation">,</span>776        dropTx  38<span class="token punctuation">,</span><span class="token number">793</span>            
tcpRx   1<span class="token punctuation">,</span><span class="token number">420</span><span class="token punctuation">,</span>782          tcpTx    1<span class="token punctuation">,</span><span class="token number">459</span><span class="token punctuation">,</span>046          udpRx    0                  udpTx   0                 
arpRx   0                  arpTx    0                  icmpRx   0                  icmpTx  0                 
tosRx   0                  otherRx  0                  badRx    0                 
synRx   10<span class="token punctuation">,</span>078             synTx    10<span class="token punctuation">,</span>361             finRx    0                  finTx   0                  rstRx   0          rstTx 0         
synRt   410                finRt    0                  ackRt    0                  pushRt  62<span class="token punctuation">,</span><span class="token number">280</span>            
tcpDrop 24<span class="token punctuation">,</span>299             udpDrop  0                  ackDup   0                 
skOpen  9<span class="token punctuation">,</span>951              skClose  718                skCon    438<span class="token punctuation">,</span>470            skErr   718               
tcpReq  1<span class="token punctuation">,</span><span class="token number">386</span><span class="token punctuation">,</span>405          tcpRsp   1<span class="token punctuation">,</span><span class="token number">448</span><span class="token punctuation">,</span><span class="token number">685</span>         
ierrors 0                  oerrors  0                  imissed  0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="http-cc-1000k" tabindex="-1"><a class="header-anchor" href="#http-cc-1000k"><span>HTTP CC-1000k</span></a></h4><p>仅修改包大小和协议（非64帧长似乎有些怪）</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># 配置</span>
<span class="token comment"># 使用资源：1000k * 80Byte * 2 = 0.08G * 2</span>
<span class="token comment"># Occupy resource Settings</span>
mode            client
cpu             0
socket_mem      1920
port            0000<span class="token punctuation">:</span>04<span class="token punctuation">:</span>00.0    6.6.245.121 6.6.245.1   b4<span class="token punctuation">:</span>a9<span class="token punctuation">:</span>fc<span class="token punctuation">:</span>ab<span class="token punctuation">:</span>7a<span class="token punctuation">:</span><span class="token number">91</span>
<span class="token comment"># General Settings</span>
duration        1m
protocol        http
packet_size     128
keepalive       1ms
client          6.6.245.11      100
server          6.6.245.2       1
listen          2480            100
lport_range     1 100
<span class="token comment"># Client setup</span>
tx_burst        128
launch_num      10
packet_size     64
cps             10k
cc              1000k

<span class="token comment"># 发送端：发 1.4Mpps(计发送丢包可1.7Mpps，接收少了，相较于tcp反而高了) * 128*8bpp = 1523MB &lt; 817MB ，，连接数371k</span>
seconds 52                 cpuUsage 69  
pktRx   803<span class="token punctuation">,</span>396            pktTx    1<span class="token punctuation">,</span><span class="token number">716</span><span class="token punctuation">,</span>083          bitsRx   817<span class="token punctuation">,</span><span class="token number">265</span><span class="token punctuation">,</span>504        bitsTx  817<span class="token punctuation">,</span><span class="token number">507</span><span class="token punctuation">,</span>840        dropTx  306<span class="token punctuation">,</span><span class="token number">787</span>           
tcpRx   803<span class="token punctuation">,</span>396            tcpTx    1<span class="token punctuation">,</span><span class="token number">716</span><span class="token punctuation">,</span>083          udpRx    0                  udpTx   0                 
arpRx   0                  arpTx    0                  icmpRx   0                  icmpTx  0                 
tosRx   0                  otherRx  0                  badRx    0                 
synRx   10<span class="token punctuation">,</span>250             synTx    12<span class="token punctuation">,</span>031             finRx    0                  finTx   0                  rstRx   0          rstTx 0         
synRt   2<span class="token punctuation">,</span>171              finRt    0                  ackRt    0                  pushRt  170<span class="token punctuation">,</span><span class="token number">892</span>           
tcpDrop 31<span class="token punctuation">,</span>499             udpDrop  0                  ackDup   0                 
skOpen  9<span class="token punctuation">,</span>860              skClose  2<span class="token punctuation">,</span>094              skCon    371<span class="token punctuation">,</span>192            skErr   2<span class="token punctuation">,</span><span class="token number">094</span>             
httpGet 942<span class="token punctuation">,</span>375            http2XX  761<span class="token punctuation">,</span>677            httpErr  0                 
ierrors 0                  oerrors  0                  imissed  19<span class="token punctuation">,</span><span class="token number">883</span> 

<span class="token comment"># 服务端：同上</span>
seconds 52                 cpuUsage 41  
pktRx   1<span class="token punctuation">,</span><span class="token number">429</span><span class="token punctuation">,</span>757          pktTx    828<span class="token punctuation">,</span>705            bitsRx   711<span class="token punctuation">,</span><span class="token number">520</span><span class="token punctuation">,</span>720        bitsTx  842<span class="token punctuation">,</span><span class="token number">996</span><span class="token punctuation">,</span>592        dropTx  10<span class="token punctuation">,</span><span class="token number">111</span>            
tcpRx   1<span class="token punctuation">,</span><span class="token number">429</span><span class="token punctuation">,</span>757          tcpTx    828<span class="token punctuation">,</span>705            udpRx    0                  udpTx   0                 
arpRx   0                  arpTx    0                  icmpRx   0                  icmpTx  0                 
tosRx   0                  otherRx  0                  badRx    0                 
synRx   10<span class="token punctuation">,</span>105             synTx    10<span class="token punctuation">,</span>601             finRx    0                  finTx   0                  rstRx   0          rstTx 0         
synRt   546                finRt    0                  ackRt    0                  pushRt  38<span class="token punctuation">,</span><span class="token number">344</span>            
tcpDrop 3<span class="token punctuation">,</span>855              udpDrop  0                  ackDup   0                 
skOpen  10<span class="token punctuation">,</span>055             skClose  961                skCon    362<span class="token punctuation">,</span>167            skErr   961               
httpGet 0                  http2XX  818<span class="token punctuation">,</span>104            httpErr  779<span class="token punctuation">,</span><span class="token number">760</span>           
ierrors 0                  oerrors  0                  imissed  0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="单端极限pps" tabindex="-1"><a class="header-anchor" href="#单端极限pps"><span>单端极限pps</span></a></h4><p>修改了tx_burst、flood、pipeline、launch_num、cc</p><p>仅发送不接收</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># 配置 (尝试使pps达到最大)</span>
<span class="token comment"># 使用资源：2000k * 80Byte = 0.15G</span>
<span class="token comment"># Occupy resource Settings</span>
mode            client
cpu             0
socket_mem      3840
port            0000<span class="token punctuation">:</span>04<span class="token punctuation">:</span>00.0    6.6.245.11  6.6.245.1   b4<span class="token punctuation">:</span>a9<span class="token punctuation">:</span>fc<span class="token punctuation">:</span>ab<span class="token punctuation">:</span>7a<span class="token punctuation">:</span><span class="token number">91</span>
<span class="token comment"># General Settings</span>
duration        1m
protocol        udp
packet_size     64
client          6.6.245.11      20
server          6.6.245.2       1
listen          2480            10
lport_range     1               10
<span class="token comment"># Client setup</span>
keepalive       1us
tx_burst        1024
launch_num      1000
<span class="token comment">#cps             10k</span>
cc              100
flood
pipeline        100

<span class="token comment"># 发送端：udp含丢包6.2Mpps、tcp和http均5.8Mpps (由于单端，全发的syn包，非udp无法开启pipeline选项)</span>
seconds 21                 cpuUsage 100 
pktRx   0                  pktTx    6<span class="token punctuation">,</span><span class="token number">288</span><span class="token punctuation">,</span>524          bitsRx   0                  bitsTx  3<span class="token punctuation">,</span><span class="token number">219</span><span class="token punctuation">,</span><span class="token number">724</span><span class="token punctuation">,</span>288      dropTx  6<span class="token punctuation">,</span><span class="token number">287</span><span class="token punctuation">,</span><span class="token number">360</span>         
tcpRx   0                  tcpTx    0                  udpRx    0                  udpTx   6<span class="token punctuation">,</span><span class="token number">288</span><span class="token punctuation">,</span><span class="token number">524</span>         
arpRx   0                  arpTx    0                  icmpRx   0                  icmpTx  0                 
tosRx   0                  otherRx  0                  badRx    0                 
udpRt   0                  udpDrop  0                  tcpDrop  0                 
skOpen  0                  skClose  0                  skCon    100                skErr   0                 
ierrors 0                  oerrors  0                  imissed  0                 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="图" tabindex="-1"><a class="header-anchor" href="#图"><span>图</span></a></h4><h4 id="收发形式-抓包" tabindex="-1"><a class="header-anchor" href="#收发形式-抓包"><span>收发形式 (抓包)</span></a></h4>`,22);function _(y,P){const a=t("ExternalLinkIcon");return c(),p("div",null,[r,n("ul",null,[n("li",null,[n("a",o,[s("Github"),e(a)]),s("，有中文 README.md")]),n("li",null,[n("a",u,[s("官方文档"),e(a)]),s("，主要参考")]),n("li",null,[n("a",m,[s("参数说明"),e(a)])]),v,b]),k,h,g,x,f])}const D=l(d,[["render",_],["__file","dPerf.html.vue"]]),T=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/02.%20Theory/Computer/03.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F%20-%20%E4%B8%93%E9%A2%98%E6%88%96%E5%AD%90%E7%B3%BB%E7%BB%9F%E7%9A%84%E5%AD%97%E5%85%B8%E7%89%88/%E4%B8%8B%E5%B1%82%E7%9B%B8%E5%85%B3/Network/%E7%BD%91%E7%BB%9C%E5%B7%A5%E5%85%B7/Perf/dPerf.html","title":"","lang":"zh-CN","frontmatter":{"description":"DPDK环境部分 (不建议先单独安装DPDK，而是按DPerf的说明安装DPDK) 参考 官网：https://www.dpdk.org/ 下载：http://core.dpdk.org/download/ 安装：http://core.dpdk.org/doc/quick-start/ 文档：https://doc.dpdk.org/guides/l...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/02.%20Theory/Computer/03.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F%20-%20%E4%B8%93%E9%A2%98%E6%88%96%E5%AD%90%E7%B3%BB%E7%BB%9F%E7%9A%84%E5%AD%97%E5%85%B8%E7%89%88/%E4%B8%8B%E5%B1%82%E7%9B%B8%E5%85%B3/Network/%E7%BD%91%E7%BB%9C%E5%B7%A5%E5%85%B7/Perf/dPerf.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"DPDK环境部分 (不建议先单独安装DPDK，而是按DPerf的说明安装DPDK) 参考 官网：https://www.dpdk.org/ 下载：http://core.dpdk.org/download/ 安装：http://core.dpdk.org/doc/quick-start/ 文档：https://doc.dpdk.org/guides/l..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":2,"title":"DPDK环境部分 (不建议先单独安装DPDK，而是按DPerf的说明安装DPDK)","slug":"dpdk环境部分-不建议先单独安装dpdk-而是按dperf的说明安装dpdk","link":"#dpdk环境部分-不建议先单独安装dpdk-而是按dperf的说明安装dpdk","children":[{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]},{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"卸载环境","slug":"卸载环境","link":"#卸载环境","children":[]},{"level":3,"title":"额外参考 - dperf","slug":"额外参考-dperf","link":"#额外参考-dperf","children":[]},{"level":3,"title":"额外参考 - packetMaster","slug":"额外参考-packetmaster","link":"#额外参考-packetmaster","children":[]}]},{"level":2,"title":"DPerf环境","slug":"dperf环境","link":"#dperf环境","children":[{"level":3,"title":"参考","slug":"参考-1","link":"#参考-1","children":[]},{"level":3,"title":"安装","slug":"安装-1","link":"#安装-1","children":[]},{"level":3,"title":"FAQ","slug":"faq","link":"#faq","children":[{"level":4,"title":"官方FAQ","slug":"官方faq","link":"#官方faq","children":[]},{"level":4,"title":"缺少kni","slug":"缺少kni","link":"#缺少kni","children":[]},{"level":4,"title":"无法设置大页","slug":"无法设置大页","link":"#无法设置大页","children":[]},{"level":4,"title":"当退出后再次运行失败","slug":"当退出后再次运行失败","link":"#当退出后再次运行失败","children":[]},{"level":4,"title":"同机器运行CS问题","slug":"同机器运行cs问题","link":"#同机器运行cs问题","children":[]},{"level":4,"title":"无三层交换机问题","slug":"无三层交换机问题","link":"#无三层交换机问题","children":[]}]}]},{"level":2,"title":"DPDK初始化","slug":"dpdk初始化","link":"#dpdk初始化","children":[{"level":3,"title":"配置大页","slug":"配置大页","link":"#配置大页","children":[]}]},{"level":2,"title":"Dperf配置","slug":"dperf配置","link":"#dperf配置","children":[{"level":3,"title":"主要配置参数","slug":"主要配置参数","link":"#主要配置参数","children":[]},{"level":3,"title":"统计查看","slug":"统计查看","link":"#统计查看","children":[]}]},{"level":2,"title":"正式测试","slug":"正式测试","link":"#正式测试","children":[{"level":3,"title":"快速测试","slug":"快速测试","link":"#快速测试","children":[]},{"level":3,"title":"基础测试 - 新连接速率测试","slug":"基础测试-新连接速率测试","link":"#基础测试-新连接速率测试","children":[]},{"level":3,"title":"基础测试 - 并发连接测试","slug":"基础测试-并发连接测试","link":"#基础测试-并发连接测试","children":[]},{"level":3,"title":"基础测试 - 带宽测试","slug":"基础测试-带宽测试","link":"#基础测试-带宽测试","children":[]},{"level":3,"title":"基础测试 - PPS测试","slug":"基础测试-pps测试","link":"#基础测试-pps测试","children":[]}]},{"level":2,"title":"个人自用测试项","slug":"个人自用测试项","link":"#个人自用测试项","children":[{"level":3,"title":"3000并发1ms","slug":"_3000并发1ms","link":"#_3000并发1ms","children":[]},{"level":3,"title":"10k并发1ms","slug":"_10k并发1ms","link":"#_10k并发1ms","children":[]},{"level":3,"title":"200 ip x 512 port = 10k 并发","slug":"_200-ip-x-512-port-10k-并发","link":"#_200-ip-x-512-port-10k-并发","children":[]},{"level":3,"title":"1488095pps","slug":"_1488095pps","link":"#_1488095pps","children":[]},{"level":3,"title":"单连接大流","slug":"单连接大流","link":"#单连接大流","children":[]},{"level":3,"title":"20k连接速度 tcp","slug":"_20k连接速度-tcp","link":"#_20k连接速度-tcp","children":[]},{"level":3,"title":"1M PPS 大象流","slug":"_1m-pps-大象流","link":"#_1m-pps-大象流","children":[{"level":4,"title":"单向大象流配置示例","slug":"单向大象流配置示例","link":"#单向大象流配置示例","children":[]},{"level":4,"title":"双向大象流配置示例","slug":"双向大象流配置示例","link":"#双向大象流配置示例","children":[]}]},{"level":3,"title":"100G带宽","slug":"_100g带宽","link":"#_100g带宽","children":[]},{"level":3,"title":"向大量 IP 发送","slug":"向大量-ip-发送","link":"#向大量-ip-发送","children":[]},{"level":3,"title":"HTTP服务","slug":"http服务","link":"#http服务","children":[]},{"level":3,"title":"计算备注","slug":"计算备注","link":"#计算备注","children":[]}]},{"level":2,"title":"性能","slug":"性能","link":"#性能","children":[{"level":3,"title":"Dperf标榜性能","slug":"dperf标榜性能","link":"#dperf标榜性能","children":[]},{"level":3,"title":"基准测试","slug":"基准测试","link":"#基准测试","children":[{"level":4,"title":"UDP CC-1000k","slug":"udp-cc-1000k","link":"#udp-cc-1000k","children":[]},{"level":4,"title":"UDP CC-10000k","slug":"udp-cc-10000k","link":"#udp-cc-10000k","children":[]},{"level":4,"title":"TCP CC-1000k","slug":"tcp-cc-1000k","link":"#tcp-cc-1000k","children":[]},{"level":4,"title":"HTTP CC-1000k","slug":"http-cc-1000k","link":"#http-cc-1000k","children":[]},{"level":4,"title":"单端极限pps","slug":"单端极限pps","link":"#单端极限pps","children":[]},{"level":4,"title":"图","slug":"图","link":"#图","children":[]},{"level":4,"title":"收发形式 (抓包)","slug":"收发形式-抓包","link":"#收发形式-抓包","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":20.17,"words":6050},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/02. Theory/Computer/03. 计算机系统 - 专题或子系统的字典版/下层相关/Network/网络工具/Perf/dPerf.md","autoDesc":true}');export{D as comp,T as data};

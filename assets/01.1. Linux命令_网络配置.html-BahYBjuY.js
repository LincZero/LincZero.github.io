import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,e as s}from"./app-yixEWCFr.js";const i={},t=s(`<h1 id="linux命令-网络配置" tabindex="-1"><a class="header-anchor" href="#linux命令-网络配置"><span>Linux命令_网络配置</span></a></h1><p>Linux网络配置方法简介</p><h2 id="配置ip地址-ip-ifconfig" tabindex="-1"><a class="header-anchor" href="#配置ip地址-ip-ifconfig"><span>配置IP地址 (ip/ifconfig)</span></a></h2><h3 id="命令行方式-重启丢失" tabindex="-1"><a class="header-anchor" href="#命令行方式-重启丢失"><span>命令行方式（重启丢失）</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 使用ifconfig (interface config)</span>
<span class="token function">ifconfig</span> eth0 <span class="token number">192.168</span>.1.3 netmask <span class="token number">255.255</span>.255.0

<span class="token comment"># 使用用ip命令增加一个IP</span>
<span class="token function">ip</span> addr <span class="token function">add</span> <span class="token number">192.168</span>.1.4/24 dev eth0

<span class="token comment"># 使用ifconfig增加网卡别名</span>
<span class="token function">ifconfig</span> eth0:0 <span class="token number">192.168</span>.1.10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改配置文件方式-永久" tabindex="-1"><a class="header-anchor" href="#修改配置文件方式-永久"><span>修改配置文件方式（永久）</span></a></h3><p>这样配置的 IP 地址重启机器后会丢失，所以一般应该把网络配置写入文件中。</p><ul><li>Ubuntu 和 Debain：可以将网卡配置写入<code>/etc/network/interfaces</code></li><li>Redhat 和 CentOS：则需要写入<code>/etc/sysconfig/network-scripts/ifcfg-eth0</code>中</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>auto lo
iface lo inet loopback

auto eth0
iface eth0 inet static
    address 192.168.1.3
    netmask 255.255.255.0
    gateway 192.168.1.1

auto eth1
iface eth1 inet dhcp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置默认路由-ip-route" tabindex="-1"><a class="header-anchor" href="#配置默认路由-ip-route"><span>配置默认路由 (ip/route)</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 使用route命令</span>
route <span class="token function">add</span> default gw <span class="token number">192.168</span>.1.1

<span class="token comment"># 也可以使用ip命令</span>
<span class="token function">ip</span> route <span class="token function">add</span> default via <span class="token number">192.168</span>.1.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置vlan-vconfig" tabindex="-1"><a class="header-anchor" href="#配置vlan-vconfig"><span>配置VLAN (vconfig)</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 安装并加载内核模块</span>
<span class="token function">apt-get</span> <span class="token function">install</span> vlan
modprobe 8021q

<span class="token comment"># 添加vlan</span>
vconfig <span class="token function">add</span> eth0 <span class="token number">100</span>
<span class="token function">ifconfig</span> eth0.100 <span class="token number">192.168</span>.100.2 netmask <span class="token number">255.255</span>.255.0

<span class="token comment"># 删除vlan</span>
vconfig rem eth0.100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置硬件选项-ethtool" tabindex="-1"><a class="header-anchor" href="#配置硬件选项-ethtool"><span>配置硬件选项 (ethtool)</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 改变speed</span>
<span class="token function">ethtool</span> <span class="token parameter variable">-s</span> eth0 speed <span class="token number">1000</span> duplex full

<span class="token comment"># 关闭GRO</span>
<span class="token function">ethtool</span> <span class="token parameter variable">-K</span> eth0 gro off

<span class="token comment"># 开启网卡多队列</span>
<span class="token function">ethtool</span> <span class="token parameter variable">-L</span> eth0 combined <span class="token number">4</span>

<span class="token comment"># 开启vxlan offload</span>
<span class="token function">ethtool</span> <span class="token parameter variable">-K</span> ens2f0 rx-checksum on
<span class="token function">ethtool</span> <span class="token parameter variable">-K</span> ens2f0 tx-udp_tnl-segmentation on

<span class="token comment"># 查询网卡统计</span>
<span class="token function">ethtool</span> <span class="token parameter variable">-S</span> eth0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),l=[t];function c(o,d){return e(),a("div",null,l)}const u=n(i,[["render",c],["__file","01.1. Linux命令_网络配置.html.vue"]]),v=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/02.%20Theory/Computer/03.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F%20-%20%E4%B8%93%E9%A2%98%E6%88%96%E5%AD%90%E7%B3%BB%E7%BB%9F%E7%9A%84%E5%AD%97%E5%85%B8%E7%89%88/%E4%B8%8B%E5%B1%82%E7%9B%B8%E5%85%B3/Network/%E3%80%8Asdn-handbook%E3%80%8B/03.%20Linux%E7%BD%91%E7%BB%9C/01.1.%20Linux%E5%91%BD%E4%BB%A4_%E7%BD%91%E7%BB%9C%E9%85%8D%E7%BD%AE.html","title":"Linux命令_网络配置","lang":"zh-CN","frontmatter":{"description":"Linux命令_网络配置 Linux网络配置方法简介 配置IP地址 (ip/ifconfig) 命令行方式（重启丢失） 修改配置文件方式（永久） 这样配置的 IP 地址重启机器后会丢失，所以一般应该把网络配置写入文件中。 Ubuntu 和 Debain：可以将网卡配置写入/etc/network/interfaces Redhat 和 CentOS：则...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/02.%20Theory/Computer/03.%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F%20-%20%E4%B8%93%E9%A2%98%E6%88%96%E5%AD%90%E7%B3%BB%E7%BB%9F%E7%9A%84%E5%AD%97%E5%85%B8%E7%89%88/%E4%B8%8B%E5%B1%82%E7%9B%B8%E5%85%B3/Network/%E3%80%8Asdn-handbook%E3%80%8B/03.%20Linux%E7%BD%91%E7%BB%9C/01.1.%20Linux%E5%91%BD%E4%BB%A4_%E7%BD%91%E7%BB%9C%E9%85%8D%E7%BD%AE.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Linux命令_网络配置"}],["meta",{"property":"og:description","content":"Linux命令_网络配置 Linux网络配置方法简介 配置IP地址 (ip/ifconfig) 命令行方式（重启丢失） 修改配置文件方式（永久） 这样配置的 IP 地址重启机器后会丢失，所以一般应该把网络配置写入文件中。 Ubuntu 和 Debain：可以将网卡配置写入/etc/network/interfaces Redhat 和 CentOS：则..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux命令_网络配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"Linux命令_网络配置","slug":"linux命令-网络配置","link":"#linux命令-网络配置","children":[{"level":2,"title":"配置IP地址 (ip/ifconfig)","slug":"配置ip地址-ip-ifconfig","link":"#配置ip地址-ip-ifconfig","children":[{"level":3,"title":"命令行方式（重启丢失）","slug":"命令行方式-重启丢失","link":"#命令行方式-重启丢失","children":[]},{"level":3,"title":"修改配置文件方式（永久）","slug":"修改配置文件方式-永久","link":"#修改配置文件方式-永久","children":[]}]},{"level":2,"title":"配置默认路由 (ip/route)","slug":"配置默认路由-ip-route","link":"#配置默认路由-ip-route","children":[]},{"level":2,"title":"配置VLAN (vconfig)","slug":"配置vlan-vconfig","link":"#配置vlan-vconfig","children":[]},{"level":2,"title":"配置硬件选项 (ethtool)","slug":"配置硬件选项-ethtool","link":"#配置硬件选项-ethtool","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1,"words":299},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/02. Theory/Computer/03. 计算机系统 - 专题或子系统的字典版/下层相关/Network/《sdn-handbook》/03. Linux网络/01.1. Linux命令_网络配置.md","autoDesc":true}');export{u as comp,v as data};

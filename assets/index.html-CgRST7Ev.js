import{_ as i,c as o,e as t,a as n,d as a,b as l,o as p,r}from"./app-uEZYZ2I0.js";const c={},d={href:"https://www.sysgeek.cn/install-python-ubuntu/#0-%E7%AC%AC-1-%E6%AD%A5%EF%BC%9A%E9%80%9A%E8%BF%87-ppa-%E5%AE%89%E8%A3%85-python-312",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-22-04",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/nvm-sh/nvm#installing-and-updating",target:"_blank",rel:"noopener noreferrer"};function k(b,s){const e=r("ExternalLinkIcon");return p(),o("div",null,[s[9]||(s[9]=t(`<h1 id="vagrant实战" tabindex="-1"><a class="header-anchor" href="#vagrant实战"><span>Vagrant实战</span></a></h1><h2 id="实战环境-windows11" tabindex="-1"><a class="header-anchor" href="#实战环境-windows11"><span>实战环境 (windows11)</span></a></h2><h3 id="我的环境" tabindex="-1"><a class="header-anchor" href="#我的环境"><span>我的环境</span></a></h3><ul><li>系统/软件环境 <ul><li>Windows11</li><li>Vagrant 2.5.1 <ul><li>注意，这里只支持到VirtualBox 7.0，7.1不支持</li></ul></li><li>VirtualBox 7.0.20 <ul><li>一开始安装的7.1.2，但似乎版本太高，Vagrant不兼容，路径 <code>C:\\Program Files\\Oracle\\VirtualBox\\</code></li></ul></li></ul></li><li>使用的镜像 <ul><li>源是这个： https://app.vagrantup.com/ubuntu/boxes/jammy64</li><li>虽然用了镜像但都是一样的： https://vagrantcloud.com/ubuntu/boxes/jammy64/versions/20240912.0.0/providers/virtualbox/unknown/vagrant.box</li></ul></li><li>工作路径 <ul><li><code>H:/Git/Private/VMProjects/VirtualBoxProject/</code></li></ul></li></ul><h3 id="流程-准备环境" tabindex="-1"><a class="header-anchor" href="#流程-准备环境"><span>流程 - 准备环境</span></a></h3><p>安装： 安装环境，安装好Virtual和Vagrant，安装后后他会要求你重启电脑，重启</p><p>cmd中准备：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vagrant <span class="token parameter variable">-v</span> <span class="token comment"># 1</span>
Vagrant <span class="token number">2.4</span>.1

$ VBoxManage <span class="token parameter variable">-v</span> <span class="token comment"># 2 如果这里没有，就去设置windows的环境变量</span>
<span class="token number">7.1</span>.2r164945

$ vagrant status <span class="token comment"># 3</span>
<span class="token comment"># 这里可能遇到多种不同的情况，见下</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>异常补充</em>：</p><p>(主要是 vagrant status 命令)</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># ------------------- 失败情况一 ------------------- </span>
<span class="token comment"># 如果环境不对，检查前面步骤。VBox是否有VBoxManage、重新用管理员权限打开终端</span>
$ vagrant status
No usable default provider could be found <span class="token keyword">for</span> your system.

Vagrant relies on interactions with 3rd party systems, known as
<span class="token string">&quot;providers&quot;</span>, to provide Vagrant with resources to run development
environments. Examples are VirtualBox, VMware, Hyper-V.

The easiest solution to this message is to <span class="token function">install</span> VirtualBox, <span class="token function">which</span>
is available <span class="token keyword">for</span> <span class="token function">free</span> on all major platforms.

If you believe you already have a provider available, <span class="token function">make</span> sure it
is properly installed and configured. You can see <span class="token function">more</span> details about
why a particular provider isn<span class="token punctuation">\\</span>&#39;t working by forcing usage with
<span class="token variable"><span class="token variable">\`</span>vagrant up <span class="token parameter variable">--provider</span><span class="token operator">=</span>PROVIDER<span class="token variable">\`</span></span>, <span class="token function">which</span> should give you a <span class="token function">more</span> specific
error message <span class="token keyword">for</span> that particular provider.

<span class="token comment"># ------------------- 失败情况二 -------------------</span>
<span class="token comment"># 这里如果只检查到了hyperv，也不对，关键看是否检测到了VirtualBox</span>
<span class="token comment"># 至于这里为什么没检测到VirtualBox，我跳过这里执行后面的步骤才告诉我原因，估计是VirtualBox版本太高他不支持</span>
$ vagrant status
Current machine states:

default                   not_created <span class="token punctuation">(</span>hyperv<span class="token punctuation">)</span>

<span class="token comment"># ------------------- 成功情况一 -------------------</span>
$ vagrant status
Current machine states:

default                   not created <span class="token punctuation">(</span>virtualbox<span class="token punctuation">)</span>

The environment has not yet been created. Run <span class="token variable"><span class="token variable">\`</span>vagrant up<span class="token variable">\`</span></span> to
create the environment. If a machine is not created, only the
default provider will be shown. So <span class="token keyword">if</span> a provider is not listed,
<span class="token keyword">then</span> the machine is not created <span class="token keyword">for</span> that environment.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>准备位置： Windows创建项目文件夹，打开cmd并定位到项目文件夹</p><h3 id="流程-准备box" tabindex="-1"><a class="header-anchor" href="#流程-准备box"><span>流程 - 准备box</span></a></h3><p>cmd中创建box镜像：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vagrant init ubuntu/jammy64 <span class="token comment"># 第1步，暂时只用默认的镜像。这一步也可以使用自定义vagrantfile文件代替</span>

<span class="token comment"># (可选，检查一下：dir、notepad Vagrantfile)</span>

$ vagrant up <span class="token comment"># 第2步</span>
<span class="token comment"># 这里可能遇到多种不同的情况，见下</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>异常补充</em>：</p><p>(主要是 vagrant up 命令)</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># ------------------- 失败情况一 ------------------- </span>
<span class="token comment"># 这里说明default值是Hyper-V，不对</span>
$ vagrant up
Bringing machine <span class="token string">&#39;default&#39;</span> up with <span class="token string">&#39;hyperv&#39;</span> provider<span class="token punctuation">..</span>.
<span class="token operator">==</span><span class="token operator">&gt;</span> default: Verifying Hyper-V is enabled<span class="token punctuation">..</span>.
The Hyper-V cmdlets <span class="token keyword">for</span> PowerShell are not available<span class="token operator">!</span> Vagrant
requires these to control Hyper-V. Please <span class="token builtin class-name">enable</span> them <span class="token keyword">in</span> the
<span class="token string">&quot;Windows Features&quot;</span> control panel and try again.

<span class="token comment"># ------------------- 失败情况二 ------------------- </span>
<span class="token comment"># 这里估计是我安装的VirtualBox7.2版本太高了，Vagrant识别不了</span>
$ vagrant up <span class="token parameter variable">--provider</span><span class="token operator">=</span>virtualbox

The provider <span class="token string">&#39;virtualbox&#39;</span> that was requested to back the machine
<span class="token string">&#39;default&#39;</span> is reporting that it isn<span class="token punctuation">\\</span>&#39;t usable on this system. The
reason is shown below:

Vagrant has detected that you have a version of VirtualBox installed
that is not supported by this version of Vagrant. Please <span class="token function">install</span> one of
the supported versions listed below to use Vagrant:

<span class="token number">4.0</span>, <span class="token number">4.1</span>, <span class="token number">4.2</span>, <span class="token number">4.3</span>, <span class="token number">5.0</span>, <span class="token number">5.1</span>, <span class="token number">5.2</span>, <span class="token number">6.0</span>, <span class="token number">6.1</span>, <span class="token number">7.0</span>

A Vagrant update may also be available that adds support <span class="token keyword">for</span> the version
you specified. Please check www.vagrantup.com/downloads.html to download
the latest version.

<span class="token comment"># ------------------- 失败情况三 ------------------- </span>
<span class="token comment"># 这里说找不到 &#39;ubuntu/jammy64&#39;</span>
$ vagrant up
Bringing machine <span class="token string">&#39;default&#39;</span> up with <span class="token string">&#39;virtualbox&#39;</span> provider<span class="token punctuation">..</span>.
<span class="token operator">==</span><span class="token operator">&gt;</span> default: Box <span class="token string">&#39;ubuntu/jammy64&#39;</span> could not be found. Attempting to <span class="token function">find</span> and install<span class="token punctuation">..</span>.
    default: Box Provider: virtualbox
    default: Box Version: <span class="token operator">&gt;=</span> <span class="token number">0</span>
<span class="token operator">==</span><span class="token operator">&gt;</span> default: Loading metadata <span class="token keyword">for</span> box <span class="token string">&#39;ubuntu/jammy64&#39;</span>
    default: URL: https://vagrantcloud.com/api/v2/vagrant/ubuntu/jammy64
<span class="token operator">==</span><span class="token operator">&gt;</span> default: Adding box <span class="token string">&#39;ubuntu/jammy64&#39;</span> <span class="token punctuation">(</span>v20240912.0.0<span class="token punctuation">)</span> <span class="token keyword">for</span> provider: virtualbox
    default: Downloading: https://vagrantcloud.com/ubuntu/boxes/jammy64/versions/20240912.0.0/providers/virtualbox/unknown/vagrant.box
Download redirected to host: cloud-images.ubuntu.com
    default:
An error occurred <span class="token keyword">while</span> downloading the remote file. The error
message, <span class="token keyword">if</span> any, is reproduced below. Please fix this error and try
again.

Failed to connect to cloud-images.ubuntu.com port <span class="token number">443</span> after <span class="token number">42112</span> ms: Couldn<span class="token punctuation">\\</span>&#39;t connect to server

<span class="token comment"># ------------------- 成功情况一 -------------------</span>
<span class="token comment"># 1. 要么梯子开全局</span>
<span class="token comment"># 2. 要么尝试在配置中增加镜像源：(如果链接失效自行去镜像网站更新，一般是修改一下那个日期)</span>
<span class="token comment">#   config.vm.box_url = &quot;https://mirrors.tuna.tsinghua.edu.cn/ubuntu-cloud-images/jammy/20240912/jammy-server-cloudimg-amd64-vagrant.box&quot;，用镜像源也要等挺久的</span>
<span class="token comment"># 3. 还有一种方法，是将box文件下载到本地 (详见《Vagrant快速入门》笔记)</span>
<span class="token comment">#   config.vm.box_url = &quot;file://tmp/ubuntu-2204.box&quot;</span>
<span class="token comment"># 这里使用了方案二</span>
$ vagrant up
Bringing machine <span class="token string">&#39;default&#39;</span> up with <span class="token string">&#39;virtualbox&#39;</span> provider<span class="token punctuation">..</span>.
<span class="token operator">==</span><span class="token operator">&gt;</span> default: Box <span class="token string">&#39;ubuntu/jammy64&#39;</span> could not be found. Attempting to <span class="token function">find</span> and install<span class="token punctuation">..</span>.
    default: Box Provider: virtualbox
    default: Box Version: <span class="token operator">&gt;=</span> <span class="token number">0</span>
<span class="token operator">==</span><span class="token operator">&gt;</span> default: Box <span class="token function">file</span> was not detected as metadata. Adding it directly<span class="token punctuation">..</span>.
<span class="token operator">==</span><span class="token operator">&gt;</span> default: Adding box <span class="token string">&#39;ubuntu/jammy64&#39;</span> <span class="token punctuation">(</span>v0<span class="token punctuation">)</span> <span class="token keyword">for</span> provider: virtualbox
    default: Downloading: https://mirrors.tuna.tsinghua.edu.cn/ubuntu-cloud-images/jammy/20240912/jammy-server-cloudimg-amd64-vagrant.box
<span class="token operator">==</span><span class="token operator">&gt;</span> default: Box download is resuming from prior download progress
    default:
<span class="token operator">==</span><span class="token operator">&gt;</span> default: Successfully added box <span class="token string">&#39;ubuntu/jammy64&#39;</span> <span class="token punctuation">(</span>v0<span class="token punctuation">)</span> <span class="token keyword">for</span> <span class="token string">&#39;virtualbox&#39;</span><span class="token operator">!</span>
<span class="token operator">==</span><span class="token operator">&gt;</span> default: Importing base box <span class="token string">&#39;ubuntu/jammy64&#39;</span><span class="token punctuation">..</span>.
<span class="token operator">==</span><span class="token operator">&gt;</span> default: Matching MAC address <span class="token keyword">for</span> NAT networking<span class="token punctuation">..</span>.
<span class="token operator">==</span><span class="token operator">&gt;</span> default: Setting the name of the VM: VirtualBoxProject_default_1727881439007_57295
Vagrant is currently configured to create VirtualBox synced folders with
the <span class="token variable"><span class="token variable">\`</span>SharedFoldersEnableSymlinksCreate<span class="token variable">\`</span></span> option enabled. If the Vagrant
guest is not trusted, you may want to disable this option. For <span class="token function">more</span>
information on this option, please refer to the VirtualBox manual:

  https://www.virtualbox.org/manual/ch04.html<span class="token comment">#sharedfolders</span>

This option can be disabled globally with an environment variable:

  <span class="token assign-left variable">VAGRANT_DISABLE_VBOXSYMLINKCREATE</span><span class="token operator">=</span><span class="token number">1</span>

or on a per folder basis within the Vagrantfile:

  config.vm.synced_folder <span class="token string">&#39;/host/path&#39;</span>, <span class="token string">&#39;/guest/path&#39;</span>, SharedFoldersEnableSymlinksCreate: <span class="token boolean">false</span>
<span class="token operator">==</span><span class="token operator">&gt;</span> default: Clearing any previously <span class="token builtin class-name">set</span> network interfaces<span class="token punctuation">..</span>.
<span class="token operator">==</span><span class="token operator">&gt;</span> default: Preparing network interfaces based on configuration<span class="token punctuation">..</span>.
    default: Adapter <span class="token number">1</span>: nat
<span class="token operator">==</span><span class="token operator">&gt;</span> default: Forwarding ports<span class="token punctuation">..</span>.
    default: <span class="token number">22</span> <span class="token punctuation">(</span>guest<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">2222</span> <span class="token punctuation">(</span>host<span class="token punctuation">)</span> <span class="token punctuation">(</span>adapter <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment"># ! 重点</span>
<span class="token operator">==</span><span class="token operator">&gt;</span> default: Running <span class="token string">&#39;pre-boot&#39;</span> VM customizations<span class="token punctuation">..</span>.
<span class="token operator">==</span><span class="token operator">&gt;</span> default: Booting VM<span class="token punctuation">..</span>.
<span class="token operator">==</span><span class="token operator">&gt;</span> default: Waiting <span class="token keyword">for</span> machine to boot. This may take a few minutes<span class="token punctuation">..</span>.
    default: SSH address: <span class="token number">127.0</span>.0.1:2222
    default: SSH username: vagrant
    default: SSH auth method: private key
    default:
    default: Vagrant insecure key detected. Vagrant will automatically replace
    default: this with a newly generated keypair <span class="token keyword">for</span> better security.
    default:
    default: Inserting generated public key within guest<span class="token punctuation">..</span>.
    default: Removing insecure key from the guest <span class="token keyword">if</span> it<span class="token punctuation">\\</span>&#39;s present<span class="token punctuation">..</span>.
    default: Key inserted<span class="token operator">!</span> Disconnecting and reconnecting using new SSH key<span class="token punctuation">..</span>.
<span class="token operator">==</span><span class="token operator">&gt;</span> default: Machine booted and ready<span class="token operator">!</span>
<span class="token operator">==</span><span class="token operator">&gt;</span> default: Checking <span class="token keyword">for</span> guest additions <span class="token keyword">in</span> VM<span class="token punctuation">..</span>.
    default: The guest additions on this VM <span class="token keyword">do</span> not match the installed version of
    default: VirtualBox<span class="token operator">!</span> In <span class="token function">most</span> cases this is fine, but <span class="token keyword">in</span> rare cases it can
    default: prevent things such as shared folders from working properly. If you see
    default: shared folder errors, please <span class="token function">make</span> sure the guest additions within the
    default: virtual machine match the version of VirtualBox you have installed on
    default: your <span class="token function">host</span> and reload your VM.
    default:
    default: Guest Additions Version: <span class="token number">6.0</span>.0 r127566
    default: VirtualBox Version: <span class="token number">7.0</span>
<span class="token operator">==</span><span class="token operator">&gt;</span> default: Mounting shared folders<span class="token punctuation">..</span>.
    default: /vagrant <span class="token operator">=</span><span class="token operator">&gt;</span> H:/Git/Private/VMProjects/VirtualBoxProject <span class="token comment"># ! 重点</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="流程-连接虚拟机" tabindex="-1"><a class="header-anchor" href="#流程-连接虚拟机"><span>流程 - 连接虚拟机</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vagrant <span class="token function">ssh</span> <span class="token comment"># 第3步</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>异常补充：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># ------------------- 成功情况一 -------------------</span>
Welcome to Ubuntu <span class="token number">22.04</span>.5 LTS <span class="token punctuation">(</span>GNU/Linux <span class="token number">5.15</span>.0-119-generic x86_64<span class="token punctuation">)</span>

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/pro

 System information as of Wed Oct  <span class="token number">2</span> <span class="token number">15</span>:11:53 UTC <span class="token number">2024</span>

  System load:  <span class="token number">0.0</span>               Processes:               <span class="token number">101</span>
  Usage of /:   <span class="token number">3.7</span>% of <span class="token number">38</span>.70GB   Users logged in:         <span class="token number">0</span>
  Memory usage: <span class="token number">20</span>%               IPv4 address <span class="token keyword">for</span> enp0s3: <span class="token number">10.0</span>.2.15
  Swap usage:   <span class="token number">0</span>%


Expanded Security Maintenance <span class="token keyword">for</span> Applications is not enabled.

<span class="token number">0</span> updates can be applied immediately.

Enable ESM Apps to receive additional future security updates.
See https://ubuntu.com/esm or run: <span class="token function">sudo</span> pro status


The list of available updates is <span class="token function">more</span> than a week old.
To check <span class="token keyword">for</span> new updates run: <span class="token function">sudo</span> <span class="token function">apt</span> update
New release <span class="token string">&#39;24.04.1 LTS&#39;</span> available.
Run <span class="token string">&#39;do-release-upgrade&#39;</span> to upgrade to it.


vagrant@ubuntu-jammy:~$

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展增强" tabindex="-1"><a class="header-anchor" href="#扩展增强"><span>扩展增强</span></a></h2><p>其实这里已经可以正常使用了</p><p>可以看到，除准备环境外，创建虚拟机一共只需要三步！非常方便快捷！</p><h3 id="预安装一些环境" tabindex="-1"><a class="header-anchor" href="#预安装一些环境"><span>预安装一些环境</span></a></h3><p>没问题的话，这里可以换成一些我常用的配置：（<em>部分可选根据你自己的需求取舍</em>）</p><p>(可以先简单运行起来，再换这里的配置，不用一步到位，没什么区别 (主要是速度比较快)。分步操作在出现bug时也更容易调试)</p><p>(当然，你也可以卸载重装。<code>vagrant halt</code> 和 <code>vagrant destroy</code> 分别关闭和删除虚拟机)</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># -*- mode: ruby -*-</span>
<span class="token comment"># vi: set ft=ruby :</span>

Vagrant<span class="token punctuation">.</span>configure<span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span> do <span class="token operator">|</span>config<span class="token operator">|</span>
  <span class="token comment"># 镜像设置。这里使用了镜像。若链接失效则到该链接更新:</span>
  <span class="token comment"># https://mirrors.tuna.tsinghua.edu.cn/ubuntu-cloud-images/jammy/</span>
  config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>box <span class="token operator">=</span> <span class="token string">&quot;ubuntu/jammy64&quot;</span>
  config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>box_url <span class="token operator">=</span> <span class="token string">&quot;https://mirrors.tuna.tsinghua.edu.cn/ubuntu-cloud-images/jammy/20240912/jammy-server-cloudimg-amd64-vagrant.box&quot;</span>

  <span class="token comment"># 设置内存和CPU数量等</span>
  config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>network <span class="token string">&quot;private_network&quot;</span><span class="token punctuation">,</span> ip<span class="token punctuation">:</span> <span class="token string">&quot;192.168.56.2&quot;</span>
  config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>provider <span class="token string">&quot;virtualbox&quot;</span> do <span class="token operator">|</span>vb<span class="token operator">|</span>
    vb<span class="token punctuation">.</span>memory <span class="token operator">=</span> <span class="token string">&quot;2048&quot;</span>
    vb<span class="token punctuation">.</span>cpus <span class="token operator">=</span> <span class="token number">2</span>
  end

  <span class="token comment"># 在虚拟机启动时运行的 shell 命令</span>
  config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>provision <span class="token string">&quot;shell&quot;</span><span class="token punctuation">,</span> inline<span class="token punctuation">:</span> <span class="token operator">&lt;&lt;</span><span class="token operator">-</span>SHELL
    <span class="token comment"># 环境安装 - 基本</span>
    apt<span class="token operator">-</span>get update <span class="token operator">-</span>y <span class="token comment"># 更新包列表</span>
    apt<span class="token operator">-</span>get install <span class="token operator">-</span>y software<span class="token operator">-</span>properties<span class="token operator">-</span>common <span class="token comment"># 安装基础工具</span>
    apt<span class="token operator">-</span>get install <span class="token operator">-</span>y git
    
    <span class="token comment"># 环境安装 - python</span>
    <span class="token comment"># miniconda部分参考：https://docs.anaconda.com/miniconda/index.html#latest-miniconda-installer-links</span>
    <span class="token comment"># 目前我这个版本的conda会自动安装python3.12</span>
    mkdir <span class="token operator">-</span>p <span class="token operator">~</span><span class="token operator">/</span>miniconda3
    wget https<span class="token punctuation">:</span><span class="token operator">//</span>repo<span class="token punctuation">.</span>anaconda<span class="token punctuation">.</span>com<span class="token operator">/</span>miniconda<span class="token operator">/</span>Miniconda3<span class="token operator">-</span>latest<span class="token operator">-</span>Linux<span class="token operator">-</span>x86_64<span class="token punctuation">.</span>sh <span class="token operator">-</span>O <span class="token operator">~</span><span class="token operator">/</span>miniconda3<span class="token operator">/</span>miniconda<span class="token punctuation">.</span>sh
    bash <span class="token operator">~</span><span class="token operator">/</span>miniconda3<span class="token operator">/</span>miniconda<span class="token punctuation">.</span>sh <span class="token operator">-</span>b <span class="token operator">-</span>u <span class="token operator">-</span>p <span class="token operator">~</span><span class="token operator">/</span>miniconda3
    rm <span class="token operator">~</span><span class="token operator">/</span>miniconda3<span class="token operator">/</span>miniconda<span class="token punctuation">.</span>sh
    <span class="token comment"># PPA方案: https://www.sysgeek.cn/install-python-ubuntu/#0-%E7%AC%AC-1-%E6%AD%A5%EF%BC%9A%E9%80%9A%E8%BF%87-ppa-%E5%AE%89%E8%A3%85-python-312</span>
    <span class="token comment"># sudo add-apt-repository ppa:deadsnakes/ppa # 导入PPA - 仅稳定版本</span>
    <span class="token comment"># sudo apt update # 更新APT缓存</span>
    <span class="token comment"># sudo apt install -y python3.12 python3-pip</span>
    <span class="token comment"># 环境安装 - python常用包</span>
    pip3 install jupyter <span class="token comment"># 这个的时间也挺长的</span>
    <span class="token comment"># pip3 install torch</span>

    <span class="token comment"># 环境安装 - 前端</span>
    <span class="token comment"># PPA方案</span>
    <span class="token comment"># 为什么要执行这里的PPA：ubuntu到22也无法直接通过apt安装高版本，最多就到node12，而前端环境一般最少要node18，新一点甚至要node20。将PPA添加到配置中，就可以安装更高的版本</span>
    <span class="token comment"># 链接失效则到该链接更新: https://deb.nodesource.com/、https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-22-04</span>
    curl <span class="token operator">-</span>fsSL https<span class="token punctuation">:</span><span class="token operator">//</span>deb<span class="token punctuation">.</span>nodesource<span class="token punctuation">.</span>com<span class="token operator">/</span>setup_20<span class="token punctuation">.</span>x <span class="token operator">|</span> sudo bash <span class="token operator">-</span>
    sudo apt install <span class="token operator">-</span>y nodejs
    sudo apt install <span class="token operator">-</span>y npm
    sudo npm install <span class="token operator">-</span>g pnpm
    
    <span class="token comment"># 环境检查 - 版本打印</span>
    echo <span class="token string">&quot;-------------- env version check --------------&quot;</span>
    apt <span class="token operator">-</span><span class="token operator">-</span>version      <span class="token comment"># apt 2.4.13 (amd64)</span>
    git <span class="token operator">-</span><span class="token operator">-</span>version      <span class="token comment"># git version 2.34.1</span>
    conda <span class="token operator">-</span><span class="token operator">-</span>version    <span class="token comment"># (这个好像不行)</span>
    conda env <span class="token builtin">list</span>
    <span class="token operator">~</span><span class="token operator">/</span>miniconda3<span class="token operator">/</span><span class="token builtin">bin</span><span class="token operator">/</span>conda <span class="token operator">-</span><span class="token operator">-</span>version <span class="token comment"># conda 24.7.1</span>
    python3 <span class="token operator">-</span><span class="token operator">-</span>version  <span class="token comment"># (默认的，好像是内置的) Python 3.10.12</span>
    python3<span class="token punctuation">.</span><span class="token number">12</span> <span class="token operator">-</span><span class="token operator">-</span>version <span class="token comment"># Python 3.12.7</span>
    pip <span class="token operator">-</span><span class="token operator">-</span>version      <span class="token comment"># pip 22.0.2 from /usr/lib/python3/dist-packages/pip (python 3.10)</span>
    jupyter <span class="token operator">-</span><span class="token operator">-</span>version  <span class="token comment"># 这里一串 (IPython 8.28.0 jupyter_core 5.7.2 notebook 7.2.2)</span>
    node <span class="token operator">-</span><span class="token operator">-</span>version     <span class="token comment"># v20.17.0 (注意默认只有12.22.9，完全不够用，要用PPA等方案)</span>
    npm <span class="token operator">-</span><span class="token operator">-</span>version      <span class="token comment"># 10.8.2</span>
    pnpm <span class="token operator">-</span><span class="token operator">-</span>version     <span class="token comment"># 9.12.0 # 这里似乎有问题</span>
    <span class="token comment"># 环境检查 - 设备、网络打印</span>
    cat <span class="token operator">/</span>etc<span class="token operator">/</span>issue     <span class="token comment"># Ubuntu 22.04.5 LTS</span>
    uname <span class="token operator">-</span>a
    lspci <span class="token operator">|</span> grep <span class="token operator">-</span>i <span class="token string">&#39;vga\\|3d\\|graphics&#39;</span> <span class="token comment"># 显卡</span>
    <span class="token comment"># ifconfig         # 网络检查，需先 sudo apt install net-tools</span>
    <span class="token comment"># top/htop         # 内存检查</span>
    <span class="token comment"># nvidia-smi/gputop# 显存检查，部分需先 sudo apt install gputop、pip install gpustat</span>
    <span class="token comment">#   sysmon # pip install sysmon</span>
    ping <span class="token operator">-</span>c <span class="token number">4</span> www<span class="token punctuation">.</span>baidu<span class="token punctuation">.</span>com
  SHELL
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用新vagrantfile</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 可以重新加载虚拟机并执行脚本：</span>
vagrant reload
vagrant provision

<span class="token comment"># 也可以直接卸载重装</span>
vagrant <span class="token function">halt</span>    <span class="token comment"># 关闭虚拟机</span>
vagrant destroy <span class="token comment"># 卸载虚拟机</span>
vagrant up      <span class="token comment"># 重新装</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>验证：我在脚本最后打印了一些环境版本。需要注意：python3的版本不要过旧、node版本最好&gt;=18 (默认的v12完全不够用)</p><p>上面有一些东西是可以手动执行的：网络检查、版本检查的部分</p><h3 id="手动处理环境" tabindex="-1"><a class="header-anchor" href="#手动处理环境"><span>手动处理环境</span></a></h3><p>这部分更多的是一些账户帐密和ssh账密的东西，不方便在vagrant脚本里写</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">passwd</span> root <span class="token comment"># 创建root账户</span>
$ <span class="token function">su</span> root

<span class="token comment"># 未开启ssh时可用的几种连接方式：</span>
$ <span class="token function">ssh</span> vagrant@localhost <span class="token parameter variable">-p</span> <span class="token number">2222</span> <span class="token parameter variable">-i</span> .vagrant/machines/default/virtualbox/private_key
$ <span class="token function">ssh</span> vagrant@192.168.56.20 <span class="token parameter variable">-i</span> .vagrant/machines/default/virtualbox/private_key

<span class="token comment"># 允许ssh账密连接</span>
$ <span class="token function">sudo</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;==&gt; Enable ssh password authentication&quot;</span>
<span class="token function">sudo</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/^PassworkAuthentication .*PasswordAuthentication yes/&#39;</span> /etc/ssh/sshd_config
<span class="token function">sudo</span> systemctl reload sshd
<span class="token comment"># 或者手动</span>
$ <span class="token function">sudo</span> <span class="token function">vi</span> /etc/ssh/sshd_config
<span class="token punctuation">[</span>修改<span class="token punctuation">]</span> PasswordAuthentication <span class="token function">yes</span>
<span class="token punctuation">[</span>添加<span class="token punctuation">]</span> PermitRootLogin <span class="token function">yes</span>
$ <span class="token function">sudo</span> systemctl restart sshd
$ vagrant ssh-config
Host default
  HostName <span class="token number">127.0</span>.0.1
  User vagrant
  Port <span class="token number">2222</span>
  UserKnownHostsFile /dev/null
  StrictHostKeyChecking no  <span class="token comment"># 严格的主机密钥检查</span>
  PasswordAuthentication no <span class="token comment"># 重点看这里，虽然这里是no，但似乎还是可以连上的</span>
  IdentityFile <span class="token punctuation">..</span>.
  IdentitiesOnly <span class="token function">yes</span>
  LogLevel FATAL
  PubkeyAcceptedKeyTypes +ssh-rsa
  HostKeyAlgorithms +ssh-rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tips，在常用的VSCode的ssh远程连接中，可以直接用这里的秘钥对，不是非得用账密</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ssh</span> vagrant@192.168.56.20 <span class="token parameter variable">-i</span> H:/Git/Private/VMProjects/VirtualBoxProject/.vagrant/machines/default/virtualbox/private_key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="软件的高版本-多版本问题" tabindex="-1"><a class="header-anchor" href="#软件的高版本-多版本问题"><span>软件的高版本/多版本问题</span></a></h3><h4 id="python" tabindex="-1"><a class="header-anchor" href="#python"><span>Python</span></a></h4>`,41)),n("p",null,[s[1]||(s[1]=a("参考：")),n("a",d,[s[0]||(s[0]=a("如何在 Ubuntu 24.04 LTS 中安装 Python 3.12 或指定版本")),l(e)])]),s[10]||(s[10]=t(`<ul><li>apt方案： 一般够用(并不)，但版本不高(22.04.5 LTS 默认 3.10.12)</li><li>PPA存储库</li><li>Anaconda、虚拟环境： 需要频繁切换Python版本</li><li>压缩包： <code>wget -qO- https://www.python.org/downloads/source/3.12.0/Python-3.12.0.tgz | sudo tar -xz -C /usr/src/python</code></li></ul><p>PPA方案：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 导入PPA</span>
<span class="token function">sudo</span> add-apt-repository ppa:deadsnakes/ppa <span class="token comment"># 稳定版本</span>
<span class="token comment"># sudo add-apt-repository ppa:deadsnakes/nightly -y # 最新开发版本</span>

<span class="token comment"># 更新APT缓存</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update

<span class="token comment"># 安装指定版本</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> python3.12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>conda方案：</p><p>参考：anaconda官方：https://docs.anaconda.com/miniconda/index.html#latest-miniconda-installer-links</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/miniconda3
<span class="token function">wget</span> https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh <span class="token parameter variable">-O</span> ~/miniconda3/miniconda.sh
<span class="token function">bash</span> ~/miniconda3/miniconda.sh <span class="token parameter variable">-b</span> <span class="token parameter variable">-u</span> <span class="token parameter variable">-p</span> ~/miniconda3
<span class="token function">rm</span> ~/miniconda3/miniconda.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="node" tabindex="-1"><a class="header-anchor" href="#node"><span>Node</span></a></h4>`,7)),n("p",null,[s[4]||(s[4]=a("参考：")),n("a",u,[s[2]||(s[2]=a("How To Install Node.js on Ubuntu 20.04")),l(e)]),s[5]||(s[5]=a("，")),n("a",v,[s[3]||(s[3]=a("How To Install Node.js on Ubuntu 22.04")),l(e)]),s[6]||(s[6]=a(" 这里提供了三个方案："))]),s[11]||(s[11]=n("div",{class:"ab-note drop-shadow"},[n("table",{class:"ab-table ab-list-table ab-listtable-likelist"},[n("tbody",null,[n("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"apt方案",onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"apt方案")])])]),n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"一般够用(并不)，但版本很低(22.04.5 LTS 默认 12.22.9)")])])])]),n("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"PPA存储库",onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"PPA存储库")])])]),n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"可以使用特定的较新或较旧的Node版本，参考 https://deb.nodesource.com/")])])])]),n("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"nvm",onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"nvm")])])]),n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"需要频繁切换Node版本")])])])]),n("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"压缩包",onclick:`
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
        `},[n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"压缩包")])])]),n("td",{rowspan:"1"},[n("div",{class:"ab-list-table-witharrow markdown-rendered"},[n("div",null,[n("p",null,"略")])])])])]),n("button",{class:"ab-table-fold",is_fold:"false"},"全部折叠/展开")])],-1)),s[12]||(s[12]=t(`<p>PPA方案：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://deb.nodesource.com/setup_20.x <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">bash</span> -
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> nodejs

<span class="token comment"># 或 (更多分步，以及可以查看脚本内容的)</span>

<span class="token function">curl</span> <span class="token parameter variable">-sL</span> https://deb.nodesource.com/setup_<span class="token operator">==</span><span class="token number">18</span>.x<span class="token operator">==</span> <span class="token parameter variable">-o</span> nodesource_setup.sh
<span class="token function">sudo</span> <span class="token function">bash</span> nodesource_setup.sh
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> nodejs

<span class="token comment"># 或</span>

<span class="token comment"># 废弃方案：</span>
add-apt-repository <span class="token parameter variable">-y</span> ppa:nodejs/ppa <span class="token comment"># 添加 Node.js 的 PPA</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> nodejs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用PPA方案时，我们可以看一下实际的脚本：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># Logger Function</span>
<span class="token function-name function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">local</span> <span class="token assign-left variable">message</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>
  <span class="token builtin class-name">local</span> <span class="token assign-left variable">type</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$2</span>&quot;</span>
  <span class="token builtin class-name">local</span> <span class="token assign-left variable">timestamp</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token string">&#39;+%Y-%m-%d %H:%M:%S&#39;</span><span class="token variable">)</span></span>
  <span class="token builtin class-name">local</span> color
  <span class="token builtin class-name">local</span> <span class="token assign-left variable">endcolor</span><span class="token operator">=</span><span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[0m&quot;</span>

  <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$type</span>&quot;</span> <span class="token keyword">in</span>
    <span class="token string">&quot;info&quot;</span><span class="token punctuation">)</span> <span class="token assign-left variable">color</span><span class="token operator">=</span><span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[38;5;79m&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token string">&quot;success&quot;</span><span class="token punctuation">)</span> <span class="token assign-left variable">color</span><span class="token operator">=</span><span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[1;32m&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span> <span class="token assign-left variable">color</span><span class="token operator">=</span><span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[1;31m&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span> <span class="token assign-left variable">color</span><span class="token operator">=</span><span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[1;34m&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token keyword">esac</span>

  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token variable">\${color}</span><span class="token variable">\${timestamp}</span> - <span class="token variable">\${message}</span><span class="token variable">\${endcolor}</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment"># Error handler function  </span>
<span class="token function-name function">handle_error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">local</span> <span class="token assign-left variable">exit_code</span><span class="token operator">=</span><span class="token variable">$1</span>
  <span class="token builtin class-name">local</span> <span class="token assign-left variable">error_message</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$2</span>&quot;</span>
  log <span class="token string">&quot;Error: <span class="token variable">$error_message</span> (Exit Code: <span class="token variable">$exit_code</span>)&quot;</span> <span class="token string">&quot;error&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$exit_code</span>
<span class="token punctuation">}</span>

<span class="token comment"># Function to check for command availability</span>
<span class="token function-name function">command_exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">command</span> <span class="token parameter variable">-v</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token operator">&amp;&gt;</span> /dev/null
<span class="token punctuation">}</span>

<span class="token function-name function">check_os</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token operator">!</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;/etc/debian_version&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Error: This script is only supported on Debian-based systems.&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">1</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment"># Function to Install the script pre-requisites</span>
<span class="token function-name function">install_pre_reqs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    log <span class="token string">&quot;Installing pre-requisites&quot;</span> <span class="token string">&quot;info&quot;</span>

    <span class="token comment"># Run &#39;apt-get update&#39;</span>
    <span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">apt-get</span> update -y<span class="token punctuation">;</span> <span class="token keyword">then</span>
        handle_error <span class="token string">&quot;<span class="token variable">$?</span>&quot;</span> <span class="token string">&quot;Failed to run &#39;apt-get update&#39;&quot;</span>
    <span class="token keyword">fi</span>

    <span class="token comment"># Run &#39;apt-get install&#39;</span>
    <span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> apt-transport-https ca-certificates <span class="token function">curl</span> gnupg<span class="token punctuation">;</span> <span class="token keyword">then</span>
        handle_error <span class="token string">&quot;<span class="token variable">$?</span>&quot;</span> <span class="token string">&quot;Failed to install packages&quot;</span>
    <span class="token keyword">fi</span>

    <span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/share/keyrings<span class="token punctuation">;</span> <span class="token keyword">then</span>
      handle_error <span class="token string">&quot;<span class="token variable">$?</span>&quot;</span> <span class="token string">&quot;Makes sure the path /usr/share/keyrings exist or run &#39; mkdir -p /usr/share/keyrings&#39; with sudo&quot;</span>
    <span class="token keyword">fi</span>

    <span class="token function">rm</span> <span class="token parameter variable">-f</span> /usr/share/keyrings/nodesource.gpg <span class="token operator">||</span> <span class="token boolean">true</span>
    <span class="token function">rm</span> <span class="token parameter variable">-f</span> /etc/apt/sources.list.d/nodesource.list <span class="token operator">||</span> <span class="token boolean">true</span>

    <span class="token comment"># Run &#39;curl&#39; and &#39;gpg&#39; to download and import the NodeSource signing key</span>
    <span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key <span class="token operator">|</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token parameter variable">-o</span> /usr/share/keyrings/nodesource.gpg<span class="token punctuation">;</span> <span class="token keyword">then</span>
      handle_error <span class="token string">&quot;<span class="token variable">$?</span>&quot;</span> <span class="token string">&quot;Failed to download and import the NodeSource signing key&quot;</span>
    <span class="token keyword">fi</span>

    <span class="token comment"># Explicitly set the permissions to ensure the file is readable by all</span>
    <span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">chmod</span> <span class="token number">644</span> /usr/share/keyrings/nodesource.gpg<span class="token punctuation">;</span> <span class="token keyword">then</span>
        handle_error <span class="token string">&quot;<span class="token variable">$?</span>&quot;</span> <span class="token string">&quot;Failed to set correct permissions on /usr/share/keyrings/nodesource.gpg&quot;</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment"># Function to configure the Repo</span>
<span class="token function-name function">configure_repo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">local</span> <span class="token assign-left variable">node_version</span><span class="token operator">=</span><span class="token variable">$1</span>

    <span class="token assign-left variable">arch</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>dpkg --print-architecture<span class="token variable">)</span></span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$arch</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;amd64&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$arch</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;arm64&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$arch</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;armhf&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
      handle_error <span class="token string">&quot;1&quot;</span> <span class="token string">&quot;Unsupported architecture: <span class="token variable">$arch</span>. Only amd64, arm64, and armhf are supported.&quot;</span>
    <span class="token keyword">fi</span>

    <span class="token builtin class-name">echo</span> <span class="token string">&quot;deb [arch=<span class="token variable">$arch</span> signed-by=/usr/share/keyrings/nodesource.gpg] https://deb.nodesource.com/node_<span class="token variable">$node_version</span> nodistro main&quot;</span> <span class="token operator">|</span> <span class="token function">tee</span> /etc/apt/sources.list.d/nodesource.list <span class="token operator">&gt;</span> /dev/null

    <span class="token comment"># N|solid Config</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Package: nsolid&quot;</span> <span class="token operator">|</span> <span class="token function">tee</span> /etc/apt/preferences.d/nsolid <span class="token operator">&gt;</span> /dev/null
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Pin: origin deb.nodesource.com&quot;</span> <span class="token operator">|</span> <span class="token function">tee</span> <span class="token parameter variable">-a</span> /etc/apt/preferences.d/nsolid <span class="token operator">&gt;</span> /dev/null
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Pin-Priority: 600&quot;</span> <span class="token operator">|</span> <span class="token function">tee</span> <span class="token parameter variable">-a</span> /etc/apt/preferences.d/nsolid <span class="token operator">&gt;</span> /dev/null

    <span class="token comment"># Nodejs Config</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Package: nodejs&quot;</span> <span class="token operator">|</span> <span class="token function">tee</span> /etc/apt/preferences.d/nodejs <span class="token operator">&gt;</span> /dev/null
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Pin: origin deb.nodesource.com&quot;</span> <span class="token operator">|</span> <span class="token function">tee</span> <span class="token parameter variable">-a</span> /etc/apt/preferences.d/nodejs <span class="token operator">&gt;</span> /dev/null
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Pin-Priority: 600&quot;</span> <span class="token operator">|</span> <span class="token function">tee</span> <span class="token parameter variable">-a</span> /etc/apt/preferences.d/nodejs <span class="token operator">&gt;</span> /dev/null

    <span class="token comment"># Run &#39;apt-get update&#39;</span>
    <span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">apt-get</span> update -y<span class="token punctuation">;</span> <span class="token keyword">then</span>
        handle_error <span class="token string">&quot;<span class="token variable">$?</span>&quot;</span> <span class="token string">&quot;Failed to run &#39;apt-get update&#39;&quot;</span>
    <span class="token keyword">else</span>
        log <span class="token string">&quot;Repository configured successfully.&quot;</span>
        log <span class="token string">&quot;To install Node.js, run: apt-get install nodejs -y&quot;</span> <span class="token string">&quot;info&quot;</span>
        log <span class="token string">&quot;You can use N|solid Runtime as a node.js alternative&quot;</span> <span class="token string">&quot;info&quot;</span>
        log <span class="token string">&quot;To install N|solid Runtime, run: apt-get install nsolid -y <span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token string">&quot;success&quot;</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment"># Define Node.js version</span>
<span class="token assign-left variable">NODE_VERSION</span><span class="token operator">=</span><span class="token string">&quot;20.x&quot;</span>

<span class="token comment"># Check OS</span>
check_os

<span class="token comment"># Main execution</span>
install_pre_reqs <span class="token operator">||</span> handle_error <span class="token variable">$?</span> <span class="token string">&quot;Failed installing pre-requisites&quot;</span>
configure_repo <span class="token string">&quot;<span class="token variable">$NODE_VERSION</span>&quot;</span> <span class="token operator">||</span> handle_error <span class="token variable">$?</span> <span class="token string">&quot;Failed configuring repository&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="npm与pnpm" tabindex="-1"><a class="header-anchor" href="#npm与pnpm"><span>npm与pnpm</span></a></h4><p>方法一：npm命令</p><p>可以用前面说到的修改node版本的方法，那有没有不更新node直接更新npm或pnpm版本的操作呢？</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token parameter variable">-v</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">npm</span> <span class="token comment"># 更新到最新版本</span>

<span class="token comment"># 清除 NPM 缓存</span>

<span class="token function">npm</span> <span class="token parameter variable">-g</span> <span class="token function">install</span> npm@6.8.0 <span class="token comment"># 更新到指定版本</span>
<span class="token comment"># npm i npm@6 -g         # 或者</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法二：重装node</p><p>上面的方法可能会导致node和npm版本不一致的问题，而重装node就不会有这种问题，两个一起更新</p><p>方法三：nvm方法</p>`,11)),n("p",null,[s[8]||(s[8]=a("这是 NVM 的")),n("a",m,[s[7]||(s[7]=a("安装指南")),l(e)])]),s[13]||(s[13]=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nvm <span class="token function">install</span> <span class="token function">node</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>方法四：仅更新pnpm</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> pnpm@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载"><span>卸载</span></a></h4><p>例如：<code>apt remove nodejs</code></p><h4 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h4><p>如何查找 PPA 源？（GPT）</p><ul><li>Launchpad 搜索： 直接搜索： 在 Launchpad 上的搜索框中输入你需要的软件名称或关键词，例如 &quot;python 3.10&quot; 或 &quot;node.js 18&quot;。 浏览 PPA 目录： 浏览 Launchpad 上的 PPA 目录，例如 deadsnakes PPA（https://launchpad.net/~deadsnakes/+archive/ubuntu/ppa），该 PPA 提供了多个版本的 Python。</li><li>Google 搜索： 精确搜索： 使用关键词 &quot;ubuntu ppa python 3.10&quot; 或 &quot;ubuntu ppa node.js 18&quot; 进行搜索。 社区论坛： 在 Stack Overflow、Ask Ubuntu 等社区论坛上搜索，通常会有很多用户分享他们使用的 PPA。</li><li>软件官方网站： 官方文档： 一些软件的官方文档中会提供安装说明，包括如何添加 PPA 源。 社区论坛： 软件的官方社区论坛也是一个很好的资源。</li></ul><h2 id="技巧" tabindex="-1"><a class="header-anchor" href="#技巧"><span>技巧</span></a></h2><p>可以借用 VirtualBox 的一些东西，比较方便。</p><ul><li>例如 “明细”，查看一些虚拟硬件的配置</li><li>例如 “活动”，可以监控CPU、内存、硬盘、网络的使用情况</li></ul>`,11))])}const h=i(c,[["render",k],["__file","index.html.vue"]]),f=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Virtual/%E8%99%9A%E6%8B%9F%E6%9C%BA/Vagrant/%E5%AE%9E%E6%88%98/","title":"Vagrant实战","lang":"zh-CN","frontmatter":{"description":"Vagrant实战 实战环境 (windows11) 我的环境 系统/软件环境 Windows11 Vagrant 2.5.1 注意，这里只支持到VirtualBox 7.0，7.1不支持 VirtualBox 7.0.20 一开始安装的7.1.2，但似乎版本太高，Vagrant不兼容，路径 C:\\\\Program Files\\\\Oracle\\\\Virtua...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/01.%20DesignAndDevelop/Virtual/%E8%99%9A%E6%8B%9F%E6%9C%BA/Vagrant/%E5%AE%9E%E6%88%98/"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Vagrant实战"}],["meta",{"property":"og:description","content":"Vagrant实战 实战环境 (windows11) 我的环境 系统/软件环境 Windows11 Vagrant 2.5.1 注意，这里只支持到VirtualBox 7.0，7.1不支持 VirtualBox 7.0.20 一开始安装的7.1.2，但似乎版本太高，Vagrant不兼容，路径 C:\\\\Program Files\\\\Oracle\\\\Virtua..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vagrant实战\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"Vagrant实战","slug":"vagrant实战","link":"#vagrant实战","children":[{"level":2,"title":"实战环境 (windows11)","slug":"实战环境-windows11","link":"#实战环境-windows11","children":[{"level":3,"title":"我的环境","slug":"我的环境","link":"#我的环境","children":[]},{"level":3,"title":"流程 - 准备环境","slug":"流程-准备环境","link":"#流程-准备环境","children":[]},{"level":3,"title":"流程 - 准备box","slug":"流程-准备box","link":"#流程-准备box","children":[]},{"level":3,"title":"流程 - 连接虚拟机","slug":"流程-连接虚拟机","link":"#流程-连接虚拟机","children":[]}]},{"level":2,"title":"扩展增强","slug":"扩展增强","link":"#扩展增强","children":[{"level":3,"title":"预安装一些环境","slug":"预安装一些环境","link":"#预安装一些环境","children":[]},{"level":3,"title":"手动处理环境","slug":"手动处理环境","link":"#手动处理环境","children":[]},{"level":3,"title":"软件的高版本/多版本问题","slug":"软件的高版本-多版本问题","link":"#软件的高版本-多版本问题","children":[{"level":4,"title":"Python","slug":"python","link":"#python","children":[]},{"level":4,"title":"Node","slug":"node","link":"#node","children":[]},{"level":4,"title":"npm与pnpm","slug":"npm与pnpm","link":"#npm与pnpm","children":[]},{"level":4,"title":"卸载","slug":"卸载","link":"#卸载","children":[]},{"level":4,"title":"其他","slug":"其他","link":"#其他","children":[]}]}]},{"level":2,"title":"技巧","slug":"技巧","link":"#技巧","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":12.57,"words":3771},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Virtual/虚拟机/Vagrant/实战/README.md","excerpt":"\\n<h2>实战环境 (windows11)</h2>\\n<h3>我的环境</h3>\\n<ul>\\n<li>系统/软件环境\\n<ul>\\n<li>Windows11</li>\\n<li>Vagrant 2.5.1\\n<ul>\\n<li>注意，这里只支持到VirtualBox 7.0，7.1不支持</li>\\n</ul>\\n</li>\\n<li>VirtualBox 7.0.20\\n<ul>\\n<li>一开始安装的7.1.2，但似乎版本太高，Vagrant不兼容，路径 <code>C:\\\\Program Files\\\\Oracle\\\\VirtualBox\\\\</code></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>使用的镜像\\n<ul>\\n<li>源是这个： https://app.vagrantup.com/ubuntu/boxes/jammy64</li>\\n<li>虽然用了镜像但都是一样的： https://vagrantcloud.com/ubuntu/boxes/jammy64/versions/20240912.0.0/providers/virtualbox/unknown/vagrant.box</li>\\n</ul>\\n</li>\\n<li>工作路径\\n<ul>\\n<li><code>H:/Git/Private/VMProjects/VirtualBoxProject/</code></li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/01. DesignAndDevelop/Virtual/虚拟机/Vagrant/实战/README.md","value":{"title":"Vagrant/","path":"MdNote_Public/01. DesignAndDevelop/Virtual/虚拟机/Vagrant/实战/README.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{h as comp,f as data};

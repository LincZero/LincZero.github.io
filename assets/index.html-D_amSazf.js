import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as p,c,b as n,e as s,d as e,a as i}from"./app-OHhlwNoJ.js";const r="/assets/image-20231018225021694-_0P9a5d6.png",o={},d=i(`<h1 id="好用的docker镜像" tabindex="-1"><a class="header-anchor" href="#好用的docker镜像"><span>好用的Docker镜像</span></a></h1><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料"><span>资料</span></a></h2><p>找镜像的地方</p><ul><li>https://hub.docker.com/</li></ul><p>优秀镜像</p><ul><li>存储类 <ul><li>nextcloud：</li><li>ftp (调研中) <ul><li>？，https://hub.docker.com/r/delfer/alpine-ftp-server</li><li>清华大学ftp，tunathu/ftpsync</li><li>中科大ftp，ustclug/ftp，（USTC，University of Science and Technology of China Linux User Group）</li></ul></li></ul></li><li>portainer，portainer/portainer-ce，类似于Docker Desktop</li><li>GitLab，gitlab/gitlab-ce</li><li>Jenkins，jenkins/jenkins:lts-jdk11</li></ul><h2 id="管理类" tabindex="-1"><a class="header-anchor" href="#管理类"><span>管理类</span></a></h2><p>其实进去docker里如果文档写得比较好的都有</p><h3 id="portainer" tabindex="-1"><a class="header-anchor" href="#portainer"><span>portainer</span></a></h3><p>例如：https://hub.docker.com/r/portainer/portainer</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> pull portainer/portainer
<span class="token comment">#$ docker run -itd --restart=always \\ 这个不行，没权限</span>
<span class="token comment">#    -d -p 9000:9000 \\</span>
<span class="token comment">#    --name portainer_container \\</span>
<span class="token comment">#    portainer/portainer</span>
    
<span class="token comment">#$ docker run -d --net=host \\</span>
<span class="token comment">#	--restart=unless-stopped \\</span>
<span class="token comment">#	-p 9000:9000 \\</span>
<span class="token comment">#    -v /var/run/docker.sock:/var/run/docker.sock \\</span>
<span class="token comment">#    portainer/portainer</span>
    <span class="token comment"># -v /data/portainer_data:/data portainer/portainer:1.23.2</span>

<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">9000</span>:9000<span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> my_portainer <span class="token punctuation">\\</span>
    <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> /var/run/docker.sock:/var/run/docker.sock portainer/portainer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-registry" tabindex="-1"><a class="header-anchor" href="#docker-registry"><span>docker registry</span></a></h3><p>以下是设置私有 Docker 镜像仓库的基本步骤：</p><ol><li><p>安装 Docker Registry：Docker Registry 是 Docker 的官方镜像仓库服务，你可以在你的服务器上运行它。安装 Docker Registry 的命令是</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">9050</span>:5000 <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">--name</span> dockerRegistry registry:2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>推送镜像到私有仓库：首先，你需要将你的本地镜像标记（tag）为私有仓库的地址。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 例如，如果你的私有仓库运行在 localhost 的 9050 端口，那么你可以使用以下命令标记你的镜像：</span>
$ <span class="token function">docker</span> tag msy/ubuntu:gcc48 <span class="token number">192.168</span>.1.208:9050/msy/ubuntu:gcc48
<span class="token comment"># 然后，你可以使用以下命令将镜像推送到私有仓库：</span>
$ <span class="token function">docker</span> push <span class="token number">192.168</span>.1.208:9050/msy/ubuntu:gcc48
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在 GitLab Runner 的配置文件中使用私有仓库的镜像：你可以在 .gitlab-ci.yml 文件中使用你的私有仓库的镜像，例如 <code>image: 192.168.1.208:9050/my-image</code>。</p></li></ol><p>请注意，这只是一个基本的示例，实际的设置可能会更复杂。例如，你可能需要设置 SSL 证书来保护你的私有仓库，或者设置身份验证来控制谁可以访问你的私有仓库。你也需要确保你的 GitLab Runner 可以访问你的私有仓库。这可能需要在你的网络设置中进行一些调整。</p><p>其他bug：ip不是localhost时，可能需要设置 gitlab runner 的允许以http方式拉取</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 在Docker的配置文件（一般在/etc/docker/daemon.json）中添加以下内容</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;insecure-registries&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;192.168.1.208:9050&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment"># 这将告诉Docker守护进程，对于这个特定的Registry，允许使用HTTP进行连接。</span>
<span class="token comment"># 然后，你需要重启Docker服务使配置生效：</span>
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="仓库类-ftp" tabindex="-1"><a class="header-anchor" href="#仓库类-ftp"><span>仓库类 - ftp</span></a></h2><h3 id="ustclug-ftp" tabindex="-1"><a class="header-anchor" href="#ustclug-ftp"><span>ustclug ftp</span></a></h3><p>例如：https://hub.docker.com/r/ustclug/ftp</p><p>原</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># docker pull ustclug/ftp 先拉镜像再创建，或像下面那样直接创建</span>

<span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">20</span>-22:20-22 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">40000</span>-40050:40000-40050 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> <span class="token variable">$LOCAL_DIR</span>/data:/srv/ftp <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> <span class="token variable">$LOCAL_DIR</span>/log:/var/log <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> <span class="token variable">$LOCAL_DIR</span>/home:/home <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token assign-left variable">PRIVATE_PASSWD</span><span class="token operator">=</span>secret <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token assign-left variable">PASV_ADDRESS</span><span class="token operator">=</span><span class="token variable">$PUBLIC_IP_ADDRESS</span> <span class="token punctuation">\\</span>
    ustclug/ftp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>改</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">20</span>-22:20-22 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">8000</span>:80 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">40000</span>-40050:40000-40050 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> <span class="token variable">$LOCAL_DIR</span>/data:/srv/ftp <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> <span class="token variable">$LOCAL_DIR</span>/log:/var/log <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> <span class="token variable">$LOCAL_DIR</span>/home:/home <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token assign-left variable">PRIVATE_PASSWD</span><span class="token operator">=</span>secret <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token assign-left variable">PASV_ADDRESS</span><span class="token operator">=</span><span class="token variable">$PUBLIC_IP_ADDRESS</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> <span class="token function">ftp</span> <span class="token punctuation">\\</span>
    ustclug/ftp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很多端口冲突，再改</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">7020</span>-7022:20-22 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">7000</span>:80 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">40000</span>-40050:40000-40050 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> <span class="token variable">$LOCAL_DIR</span>/data:/srv/ftp <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> <span class="token variable">$LOCAL_DIR</span>/log:/var/log <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> <span class="token variable">$LOCAL_DIR</span>/home:/home/http <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token assign-left variable">PRIVATE_PASSWD</span><span class="token operator">=</span>secret <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token assign-left variable">PASV_ADDRESS</span><span class="token operator">=</span><span class="token variable">$PUBLIC_IP_ADDRESS</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> <span class="token function">ftp</span> <span class="token punctuation">\\</span>
    ustclug/ftp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="stilliard-pure-ftpd" tabindex="-1"><a class="header-anchor" href="#stilliard-pure-ftpd"><span>stilliard/pure-ftpd</span></a></h3><p>https://hub.docker.com/r/stilliard/pure-ftpd</p><p>官方版</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> pull stilliard/pure-ftpd
$ <span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> ftpd_server <span class="token punctuation">\\</span>
	<span class="token parameter variable">-p</span> <span class="token number">21</span>:21 <span class="token parameter variable">-p</span> <span class="token number">30000</span>-30009:30000-30009 <span class="token punctuation">\\</span>
	stilliard/pure-ftpd <span class="token function">bash</span> /run.sh <span class="token parameter variable">-c</span> <span class="token number">30</span> <span class="token parameter variable">-C</span> <span class="token number">10</span> <span class="token punctuation">\\</span>
	<span class="token parameter variable">-l</span> puredb:/etc/pure-ftpd/pureftpd.pdb <span class="token parameter variable">-E</span> <span class="token parameter variable">-j</span> <span class="token parameter variable">-R</span> <span class="token punctuation">\\</span>
	<span class="token parameter variable">-P</span> localhost <span class="token parameter variable">-p</span> <span class="token number">30000</span>:30059
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简化版</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">21</span>:21 <span class="token parameter variable">-p</span> <span class="token number">30000</span>-30009:30000-30009 <span class="token punctuation">\\</span>
	<span class="token parameter variable">-e</span> <span class="token string">&quot;PUBLICHOST=your_public_ip&quot;</span> <span class="token punctuation">\\</span>
	<span class="token parameter variable">-e</span> <span class="token string">&quot;FTP_USER=user_name&quot;</span> <span class="token punctuation">\\</span>
	<span class="token parameter variable">-e</span> <span class="token string">&quot;FTP_PASS=user_password&quot;</span> <span class="token punctuation">\\</span>
	stilliard/pure-ftpd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fauria-vsftpd" tabindex="-1"><a class="header-anchor" href="#fauria-vsftpd"><span>fauria/vsftpd</span></a></h3><p>docker部署</p><p>这个docker比较简易，支持PASV被动模式，但不支持 sftp</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> pull fauria/vsftpd
<span class="token comment"># 参数解释</span>
<span class="token comment"># -p 7021:21 主动端口映射</span>
<span class="token comment"># -p 21100-21110:21100-21110 被动模式的端口映射</span>
<span class="token comment"># -e PASV_MIN_PORT=21100 -e PASV_MAX_PORT=21110 被动模式的端口设置</span>
<span class="token comment"># -e FTP_USER=ftpuser -e FTP_PASS=ftpuser 账密</span>
<span class="token comment"># -e PASV_ADDRESS=192.168.1.208 应该设置为FTP服务器对外公开的地址，不要填本地回环地址</span>
$ <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> /home/msy/ftp:/home/vsftpd <span class="token punctuation">\\</span>
	<span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">7021</span>:21 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">21100</span>-21110:21100-21110 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token assign-left variable">PASV_MIN_PORT</span><span class="token operator">=</span><span class="token number">21100</span> <span class="token parameter variable">-e</span> <span class="token assign-left variable">PASV_MAX_PORT</span><span class="token operator">=</span><span class="token number">21110</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token assign-left variable">FTP_USER</span><span class="token operator">=</span>ftpuser <span class="token parameter variable">-e</span> <span class="token assign-left variable">FTP_PASS</span><span class="token operator">=</span>ftpuser <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token assign-left variable">PASV_ADDRESS</span><span class="token operator">=</span><span class="token number">192.168</span>.1.208 <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> vsftpd <span class="token punctuation">\\</span>
    fauria/vsftpd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>快速验证</p><p>简单验证是否完成：（要么用测试demo，要么使用windows自带的ftp命令，话说不知道为什么FileZilla好像连接不上）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>PS C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>msy<span class="token operator">&gt;</span> <span class="token function">ftp</span>
ftp<span class="token operator">&gt;</span> <span class="token function">open</span> <span class="token number">192.168</span>.1.208 <span class="token number">7021</span>
Connected to <span class="token number">192.168</span>.1.208.
<span class="token number">220</span> <span class="token punctuation">(</span>vsFTPd <span class="token number">3.0</span>.2<span class="token punctuation">)</span>
<span class="token number">200</span> Always <span class="token keyword">in</span> UTF8 mode.
User <span class="token punctuation">(</span><span class="token number">192.168</span>.1.208:<span class="token punctuation">(</span>none<span class="token punctuation">))</span>: ftpuser
<span class="token number">331</span> Please specify the password.
Password:
<span class="token number">230</span> Login successful. <span class="token comment"># successful基本就是成功了</span>
ftp<span class="token operator">&gt;</span> <span class="token function">mkdir</span> test_xxx <span class="token comment"># 测试验证一下</span>
ftp<span class="token operator">&gt;</span> quote PASV <span class="token comment"># 使用其他命令需要先开启主动或被动模式，quote PASV 或 quote PORT</span>
ftp<span class="token operator">&gt;</span> <span class="token function">ls</span>
ftp<span class="token operator">&gt;</span> put D:<span class="token punctuation">\\</span>Git<span class="token punctuation">\\</span>Work<span class="token punctuation">\\</span>Recorder<span class="token punctuation">\\</span>recorder<span class="token punctuation">\\</span>cmake-build-debug
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="权限管理" tabindex="-1"><a class="header-anchor" href="#权限管理"><span>权限管理</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">vi</span> /etc/vsftpd/vsftpd.conf

<span class="token assign-left variable">anonymous_enable</span><span class="token operator">=</span>NO <span class="token comment">#此处将yes改为no，禁用匿名访问</span>
<span class="token assign-left variable">local_enable</span><span class="token operator">=</span>YES <span class="token comment">#启用本地认证登陆</span>
<span class="token assign-left variable">download_enable</span><span class="token operator">=</span>NO <span class="token comment">#禁止本地用户下载文件</span>
<span class="token assign-left variable">write_enable</span><span class="token operator">=</span>YES <span class="token comment">#允许</span>
<span class="token assign-left variable">anon_max_rate</span><span class="token operator">=</span><span class="token number">5000000</span> <span class="token comment"># 限速5MBps，可以使用 anon_upload_max_rate 和 anon_upload_max_rate 分别设置上传和下载速率</span>
<span class="token comment">#</span>
<span class="token comment"># Default umask for local users is 077. You may wish to change this to 022,</span>
<span class="token comment"># if your users expect that (022 is used by most other ftpd&#39;s)</span>
<span class="token assign-left variable">local_umask</span><span class="token operator">=</span>022
<span class="token assign-left variable">xferlog_enable</span><span class="token operator">=</span>YES <span class="token comment">#开启日志</span>
<span class="token assign-left variable">xferlog_file</span><span class="token operator">=</span>/var/log/vsftpd.log
<span class="token assign-left variable">xferlog_std_format</span><span class="token operator">=</span>YES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="atmoz-sftp" tabindex="-1"><a class="header-anchor" href="#atmoz-sftp"><span>atmoz/sftp</span></a></h3><p>500M+，更新频繁</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">22</span>:22 atmoz/sftp user:pass:::upload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：最后的那个是账密的设置，upload表示仅允许上传</p><p>个人用：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">7022</span>:22 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> /home/msy/ftp:/home/ftpuser/upload <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> <span class="token function">sftp</span> <span class="token punctuation">\\</span>
    atmoz/sftp <span class="token punctuation">\\</span>
    ftpuser:ftpuser:::upload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="仓库类-静态页面" tabindex="-1"><a class="header-anchor" href="#仓库类-静态页面"><span>仓库类 - 静态页面</span></a></h2><h3 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>nginx</span></a></h3><p>（错误）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
	<span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
	<span class="token parameter variable">-p</span> <span class="token number">7080</span>:80 <span class="token punctuation">\\</span>
	<span class="token parameter variable">-v</span> /home/guest/ftp:/usr/share/nginx/html <span class="token punctuation">\\</span>
	<span class="token parameter variable">--name</span> nginx <span class="token punctuation">\\</span>
	nginx:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时没有index.html大概率是403，禁止了目录索引。而我现在要弄的是ftp页，是需要索引的，要开一下：</p><p>创建一个新的Nginx配置文件。在你的宿主机上，创建一个新的文件，例如<code>default.conf</code>，并添加以下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        root   /usr/share/nginx/html<span class="token punctuation">;</span>
        autoindex on<span class="token punctuation">;</span> <span class="token comment"># 允许目录索引</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># redirect server error pages to the static page /50x.html</span>
    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
        root   /usr/share/nginx/html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个文件中，我们设置了<code>autoindex on;</code>，这会开启目录索引</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
	<span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
	<span class="token parameter variable">-p</span> <span class="token number">7080</span>:80 <span class="token punctuation">\\</span>
	<span class="token parameter variable">-v</span> /home/guest/ftp:/usr/share/nginx/html <span class="token punctuation">\\</span>
	<span class="token parameter variable">-v</span> /home/guest/default.conf:/etc/nginx/conf.d/default.conf <span class="token punctuation">\\</span>
	<span class="token parameter variable">--name</span> nginx <span class="token punctuation">\\</span>
	nginx:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者直接改docker内的配置应该也行（就是不持久化）</p><p>在这里，<code>/path/to/your/default.conf</code>是你的<code>default.conf</code>文件的路径，你需要将其替换为实际的路径。注意，你需要确保这个文件的权限允许Nginx读取它。</p><p>跨域问题：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>server <span class="token punctuation">{</span>
    listen <span class="token number">80</span>;
    server_name localhost;

    location / <span class="token punctuation">{</span>
        add_header &#39;Access-Control-Allow-Origin&#39; &#39;*&#39;;
        add_header &#39;Access-Control-Allow-Methods&#39; &#39;GET<span class="token punctuation">,</span> POST<span class="token punctuation">,</span> OPTIONS&#39;;
        proxy_pass http<span class="token operator">:</span><span class="token comment">//localhost:80;</span>
        proxy_set_header Host $host<span class="token operator">:</span>$server_port;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header Via <span class="token string">&quot;nginx&quot;</span>;
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>顺便说一下非docker版本：</p><h3 id="systemd-python" tabindex="-1"><a class="header-anchor" href="#systemd-python"><span>systemd + python</span></a></h3><p>适用于ubuntu：</p><p>/etc/systemd/system/httpServer.service</p><div class="language-ini line-numbers-mode" data-ext="ini" data-title="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Unit</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">Description</span><span class="token punctuation">=</span><span class="token value attr-value">My HTTP Service</span>
<span class="token key attr-name">After</span><span class="token punctuation">=</span><span class="token value attr-value">network.target</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Service</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">ExecStart</span><span class="token punctuation">=</span><span class="token value attr-value">/usr/bin/python3 /root/Http/python.py</span>
<span class="token key attr-name">WorkingDirectory</span><span class="token punctuation">=</span><span class="token value attr-value">/root/Http</span>
<span class="token key attr-name">User</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">Restart</span><span class="token punctuation">=</span><span class="token value attr-value">always</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Install</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">WantedBy</span><span class="token punctuation">=</span><span class="token value attr-value">multi-user.target</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>/etc/systemd/system/httpServer2.service</p><div class="language-ini line-numbers-mode" data-ext="ini" data-title="ini"><pre class="language-ini"><code>
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Unit</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">Description</span><span class="token punctuation">=</span><span class="token value attr-value">My HTTP Service</span>
<span class="token key attr-name">After</span><span class="token punctuation">=</span><span class="token value attr-value">network.target</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Service</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">ExecStart</span><span class="token punctuation">=</span><span class="token value attr-value">/usr/bin/python3 /home/msy/ftp/ftpuser/python.py</span>
<span class="token key attr-name">WorkingDirectory</span><span class="token punctuation">=</span><span class="token value attr-value">/home/msy/ftp/ftpuser/</span>
<span class="token key attr-name">User</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">Restart</span><span class="token punctuation">=</span><span class="token value attr-value">always</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Install</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">WantedBy</span><span class="token punctuation">=</span><span class="token value attr-value">multi-user.target</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>/home/msy/ftp/ftpuser/python.py</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> http<span class="token punctuation">.</span>server
<span class="token keyword">import</span> socketserver

PORT <span class="token operator">=</span> <span class="token number">7080</span>

Handler <span class="token operator">=</span> http<span class="token punctuation">.</span>server<span class="token punctuation">.</span>SimpleHTTPRequestHandler
Handler<span class="token punctuation">.</span>extensions_map<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string">&#39;.js&#39;</span><span class="token punctuation">:</span>  <span class="token string">&#39;application/javascript&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">with</span> socketserver<span class="token punctuation">.</span>TCPServer<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> PORT<span class="token punctuation">)</span><span class="token punctuation">,</span> Handler<span class="token punctuation">)</span> <span class="token keyword">as</span> httpd<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;serving at port&quot;</span><span class="token punctuation">,</span> PORT<span class="token punctuation">)</span>
    httpd<span class="token punctuation">.</span>serve_forever<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 主要命令</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> httpServer.service
<span class="token comment"># 除enable外的其他命令</span>
stop
restart
start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="仓库类-云盘gui" tabindex="-1"><a class="header-anchor" href="#仓库类-云盘gui"><span>仓库类 - 云盘gui</span></a></h2><h3 id="nextcloud" tabindex="-1"><a class="header-anchor" href="#nextcloud"><span>nextcloud</span></a></h3><p>略</p><h2 id="仓库类-特殊" tabindex="-1"><a class="header-anchor" href="#仓库类-特殊"><span>仓库类 - 特殊</span></a></h2><h3 id="gitlab" tabindex="-1"><a class="header-anchor" href="#gitlab"><span>gitlab</span></a></h3><h4 id="部署" tabindex="-1"><a class="header-anchor" href="#部署"><span>部署</span></a></h4><p>https://hub.docker.com/r/gitlab/gitlab-ce</p><p>注意gitlab提供了两个docker镜像：<code>gitlab/gitlab-ce</code> 和 <code>gitlab/gitlab-ee</code></p><ul><li><code>gitlab/gitlab-ce</code> 是GitLab社区版（Community Edition）的Docker镜像。这个版本是<strong>完全开源</strong>的，包含了GitLab的核心功能，适合个人或者小团队使用。</li><li><code>gitlab/gitlab-ee</code> 是GitLab企业版（Enterprise Edition）的Docker镜像。这个版本包含了所有CE版的功能，另外还有一些企业级的高级功能，如高级项目管理、审计报告等。这个版本是部分开源的，部分高级功能需要付费才能使用。</li></ul><p>&lt; CC版</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--detach</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--hostname</span> gitlab.example.com <span class="token punctuation">\\</span>
    <span class="token parameter variable">--publish</span> <span class="token number">443</span>:443 <span class="token parameter variable">--publish</span> <span class="token number">80</span>:80 <span class="token parameter variable">--publish</span> <span class="token number">22</span>:22 <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> gitlab <span class="token punctuation">\\</span>
    <span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
    <span class="token parameter variable">--volume</span> /srv/gitlab/config:/etc/gitlab <span class="token punctuation">\\</span>
    <span class="token parameter variable">--volume</span> /srv/gitlab/logs:/var/log/gitlab <span class="token punctuation">\\</span>
    <span class="token parameter variable">--volume</span> /srv/gitlab/data:/var/opt/gitlab <span class="token punctuation">\\</span>
    gitlab/gitlab-ce:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&lt; EE版</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--detach</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--hostname</span> gitlab.example.com <span class="token punctuation">\\</span>
    <span class="token parameter variable">--publish</span> <span class="token number">443</span>:443 <span class="token parameter variable">--publish</span> <span class="token number">80</span>:80 <span class="token parameter variable">--publish</span> <span class="token number">22</span>:22 <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> gitlab <span class="token punctuation">\\</span>
    <span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
    <span class="token parameter variable">--volume</span> /srv/gitlab/config:/etc/gitlab <span class="token punctuation">\\</span>
    <span class="token parameter variable">--volume</span> /srv/gitlab/logs:/var/log/gitlab <span class="token punctuation">\\</span>
    <span class="token parameter variable">--volume</span> /srv/gitlab/data:/var/opt/gitlab <span class="token punctuation">\\</span>
    gitlab/gitlab-ee:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我主要使用的是cc版</p><p>个人端口冲突优化：（这里的hostname不是url，不加前缀和端口，端口默认是80，如修改了需要在external_url里面加，后面会说说。如果不想麻烦的话就直接映射到80端口就好）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--detach</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--hostname</span> <span class="token number">192.168</span>.1.208 <span class="token punctuation">\\</span>
    <span class="token parameter variable">--publish</span> <span class="token number">2443</span>:443 <span class="token parameter variable">--publish</span> <span class="token number">80</span>:80 <span class="token parameter variable">--publish</span> <span class="token number">2022</span>:22 <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> gitlab <span class="token punctuation">\\</span>
    <span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
    <span class="token parameter variable">--volume</span> /srv/gitlab/config:/etc/gitlab <span class="token punctuation">\\</span>
    <span class="token parameter variable">--volume</span> /srv/gitlab/logs:/var/log/gitlab <span class="token punctuation">\\</span>
    <span class="token parameter variable">--volume</span> /srv/gitlab/data:/var/opt/gitlab <span class="token punctuation">\\</span>
    gitlab/gitlab-ce:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="其他设置" tabindex="-1"><a class="header-anchor" href="#其他设置"><span>其他设置</span></a></h4><p>注意hostname要填和GitLab访问地址相同的地址，如果前期填错了后期的修改方式会比较麻烦（但好像没成功，最后还是删了docker重新创建）</p><ul><li><p>https://www.cnblogs.com/Irving/p/5460866.html</p></li><li><p>https://itaken.github.io/2021/5/21/%E4%BF%AE%E6%94%B9gitlab%E7%9A%84host/</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">find</span> / <span class="token parameter variable">-name</span> gitlab.yml
/opt/gitlab/embedded/service/gitlab-rails/config/gitlab.yml
/var/opt/gitlab/gitlab-rails/etc/gitlab.yml

$ <span class="token function">find</span> / <span class="token parameter variable">-name</span> gitlab.rb
/etc/gitlab/gitlab.rb

<span class="token number">1</span>.修改 gitlab.yml（/opt/gitlab/embedded/service/gitlab-rails/config/gitlab.yml）文件中的host地址
<span class="token number">2</span>.修改 gitlab.rb（/etc/gitlab/gitlab.rb）文件中的external_url  <span class="token punctuation">[</span>将<span class="token variable"><span class="token variable">\`</span>external_url <span class="token operator">=</span> <span class="token string">&#39;http://git.example.com&#39;</span><span class="token variable">\`</span></span>修改为自己的IP地址（必须要加http://完整前缀）<span class="token punctuation">]</span>
<span class="token number">3</span>.客户端 <span class="token function">git</span> remote set-url origin <span class="token operator">&lt;</span>新的git地址<span class="token operator">&gt;</span>

因为一开始我们设置了映射卷，实际上也能从这两处修改（这样一来也不需要在docker里安装nano了）：
<span class="token parameter variable">--volume</span> /srv/gitlab/config:/etc/gitlab <span class="token punctuation">\\</span>
<span class="token parameter variable">--volume</span> /srv/gitlab/data:/var/opt/gitlab <span class="token punctuation">\\</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="端口号bug" tabindex="-1"><a class="header-anchor" href="#端口号bug"><span>端口号bug</span></a></h4><p>非默认80端口会出现这个情况</p><p>完整步骤：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>先修改：external_url <span class="token string">&#39;http://192.168.1.208:2080&#39;</span> <span class="token comment"># 但好像会导致无法访问网页</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> gitlab gitlab-ctl reconfigure <span class="token comment"># 重新配置</span>
<span class="token function">docker</span> restart gitlab <span class="token comment"># 重启 GitLab</span>
在clone处验证是否成功
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但还是有bug：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>docker run --detach \\
    --hostname 192.168.1.208 \\
    --publish 2443:443 --publish 2080:80 --publish 2022:22 \\
    --name gitlab \\
    --restart always \\
    --volume /srv/gitlab/config:/etc/gitlab \\
    --volume /srv/gitlab/logs:/var/log/gitlab \\
    --volume /srv/gitlab/data:/var/opt/gitlab \\
    gitlab/gitlab-ce:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里clone的地址不对，如何修复这个问题</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>现在默认显示的地址是：http://192.168.1.208/LincZero/recorder-web.git
但实际上需要在后面加端口才能正常clone
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其他的也有问题，例如runner运行时会有错误：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>fatal: unable to access &#39;http://192.168.1.208/LincZero/recorder-web.git/&#39;: Failed to connect to 192.168.1.208 port 80 after 0 ms: Couldn&#39;t connect to server
ERROR: Job failed: exit code 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其中修改external_url似乎无法修复这一问题。external_url默认值时，存在上述问题，此时网页还能正常打开。但若修改为&#39;http://192.168.1.208:2080&#39;，则网页无法打开</p><p>后来发现是这个原因：https://www.cnblogs.com/hero123/p/10559116.html，还要修改下面的Advanced setting且要改成不同的端口</p><h4 id="管理员" tabindex="-1"><a class="header-anchor" href="#管理员"><span>管理员</span></a></h4><p>刚部署好的gitlab docker已经有一个默认管理员，我们需要在后台去设置这个管理员</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token operator">&lt;</span>容器ID<span class="token operator">&gt;</span> /bin/bash <span class="token comment"># 进去容器</span>
gitlab-rails console <span class="token parameter variable">-e</span> production <span class="token comment"># 进入 GitLab 控制台</span>
user <span class="token operator">=</span> User.where<span class="token punctuation">(</span>id: <span class="token number">1</span><span class="token punctuation">)</span>.first <span class="token comment"># 查询第一个用户名，一般是管理员账户，且名字的root</span>
user.password <span class="token operator">=</span> <span class="token string">&#39;msyqwe123&#39;</span> <span class="token comment"># 设置密码</span>
user.password_confirmation <span class="token operator">=</span> <span class="token string">&#39;msyqwe123&#39;</span>
user.save<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gitlab-runner" tabindex="-1"><a class="header-anchor" href="#gitlab-runner"><span>gitlab-runner</span></a></h3><p>docker</p><ul><li>https://hub.docker.com/r/gitlab/gitlab-runner</li><li>https://docs.gitlab.com/runner/install/docker.html</li></ul><p>使用教程</p><ul><li>https://docs.gitlab.com/ee/tutorials/create_register_first_runner/</li><li>https://docs.gitlab.com/ee/tutorials/create_register_first_runner/index.html</li><li>https://docs.gitlab.com/runner/install/</li></ul><h4 id="镜像版安装" tabindex="-1"><a class="header-anchor" href="#镜像版安装"><span>镜像版安装</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 1. 获取镜像</span>
$ <span class="token function">docker</span> pull gitlab/gitlab-runner:latest

<span class="token comment"># 2. 运行容器</span>
$ <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> gitlab-runner <span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /srv/gitlab-runner/config:/etc/gitlab-runner <span class="token punctuation">\\</span>
  gitlab/gitlab-runner:latest
  
<span class="token comment"># 3. 注册 GitLab Runner。你可以在 GitLab 的设置 -&gt; CI/CD -&gt; Runner 设置中找到这些信息。</span>
$ <span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-v</span> /srv/gitlab-runner/config:/etc/gitlab-runner gitlab/gitlab-runner register
<span class="token comment"># 这将开始一个交互式会话，你需要提供以下信息：</span>
    GitLab 实例的 URL
    注册令牌
    Runner 的描述和标签
    Runner 的执行器（例如 <span class="token string">&quot;docker&quot;</span>）
    Docker 镜像（例如 <span class="token string">&quot;alpine:latest&quot;</span>）

<span class="token comment"># 4. 使用 GitLab Runner</span>
<span class="token comment"># 以下是一个 .gitlab-ci.yml 文件的例子</span>
<span class="token comment"># 这个配置文件定义了两个阶段：构建和测试。在每个阶段，它都会运行一个脚本。</span>
\`\`<span class="token variable"><span class="token variable">\`</span>
image: alpine:latest

stages:
  - build
  - <span class="token builtin class-name">test</span>

build_job:
  stage: build
  script: <span class="token builtin class-name">echo</span> <span class="token string">&quot;Building the application...&quot;</span>

test_job:
  stage: <span class="token builtin class-name">test</span>
  script: <span class="token builtin class-name">echo</span> <span class="token string">&quot;Testing the application...&quot;</span>
<span class="token variable">\`</span></span>\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="普通版安装" tabindex="-1"><a class="header-anchor" href="#普通版安装"><span>普通版安装</span></a></h4><p>后来没用docker，这个参考GitLab上他给你的install方法就行了，有各平台的安装</p><p>Linux</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Download the binary for your system</span>
<span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">--output</span> /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64

<span class="token comment"># Give it permission to execute</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/gitlab-runner

<span class="token comment"># Create a GitLab Runner user</span>
<span class="token function">sudo</span> <span class="token function">useradd</span> <span class="token parameter variable">--comment</span> <span class="token string">&#39;GitLab Runner&#39;</span> --create-home gitlab-runner <span class="token parameter variable">--shell</span> /bin/bash

<span class="token comment"># Install and run as a service</span>
<span class="token function">sudo</span> gitlab-runner <span class="token function">install</span> <span class="token parameter variable">--user</span><span class="token operator">=</span>gitlab-runner --working-directory<span class="token operator">=</span>/home/gitlab-runner
<span class="token function">sudo</span> gitlab-runner start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>macOS</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Download the binary for your system</span>
<span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">--output</span> /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-darwin-amd64

<span class="token comment"># Give it permission to execute</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/gitlab-runner

<span class="token comment"># The rest of the commands execute as the user who will run the runner</span>
<span class="token comment"># Register the runner (steps below), then run</span>
<span class="token builtin class-name">cd</span> ~
gitlab-runner <span class="token function">install</span>
gitlab-runner start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Windwos</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Run PowerShell: https://docs.microsoft.com/en-us/powershell/scripting/windows-powershell/starting-windows-powershell?view=powershell-7#with-administrative-privileges-run-as-administrator</span>
<span class="token comment"># Create a folder somewhere on your system, for example: C:\\GitLab-Runner</span>
New-Item <span class="token parameter variable">-Path</span> <span class="token string">&#39;C:\\GitLab-Runner&#39;</span> <span class="token parameter variable">-ItemType</span> Directory

<span class="token comment"># Change to the folder</span>
<span class="token builtin class-name">cd</span> <span class="token string">&#39;C:\\GitLab-Runner&#39;</span>

<span class="token comment"># Download binary</span>
Invoke-WebRequest <span class="token parameter variable">-Uri</span> <span class="token string">&quot;https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-windows-386.exe&quot;</span> <span class="token parameter variable">-OutFile</span> <span class="token string">&quot;gitlab-runner.exe&quot;</span>

<span class="token comment"># Register the runner (steps below), then run</span>
.<span class="token punctuation">\\</span>gitlab-runner.exe <span class="token function">install</span>
.<span class="token punctuation">\\</span>gitlab-runner.exe start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h4><p>在admin的Runner页面直接注册了（这个应该是在本机上进行的注册。一般在GitLab界面上也会告诉你各平台怎么去安装Runner，比较简单）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>root@msy:~$ gitlab-runner register <span class="token comment"># windows第一行有所不同其他都一样：powershell先cd再：.\\gitlab-runner.exe register</span>
  <span class="token comment"># --url 192.168.1.208:2080，可以加这个简化一下</span>
  <span class="token comment"># --token glrt-Gfhmw6ssJ8SVf3zdDQgJ，可以加这个简化一下</span>
Runtime platform                                    <span class="token assign-left variable">arch</span><span class="token operator">=</span>amd64 <span class="token assign-left variable">os</span><span class="token operator">=</span>linux <span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token number">128798</span> <span class="token assign-left variable">revision</span><span class="token operator">=</span>d89a789a <span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token number">16.4</span>.1
Running <span class="token keyword">in</span> system-mode.

Enter the GitLab instance URL <span class="token punctuation">(</span>for example, https://gitlab.com/<span class="token punctuation">)</span>:
http://192.168.1.208:2080
Enter the registration token:
glrt-Gfhmw6ssJ8SVf3zdDQgJ
Verifying runner<span class="token punctuation">..</span>. is valid                        <span class="token assign-left variable">runner</span><span class="token operator">=</span>Gfhmw6ssJ
Enter a name <span class="token keyword">for</span> the runner. This is stored only <span class="token keyword">in</span> the <span class="token builtin class-name">local</span> config.toml file:
<span class="token punctuation">[</span>msy<span class="token punctuation">]</span>: root
Enter an executor: docker, virtualbox, docker+machine, instance, custom, docker-windows, parallels, shell, ssh, docker-autoscaler, kubernetes:
<span class="token function">docker</span>
Enter the default Docker image <span class="token punctuation">(</span>for example, ruby:2.7<span class="token punctuation">)</span>: <span class="token comment"># 默认docker，可以被.gitlab-ci.yml所覆盖</span>
ruby:2.7
Runner registered successfully. Feel <span class="token function">free</span> to start it, but <span class="token keyword">if</span> it&#39;s running already the config should be automatically reloaded<span class="token operator">!</span>

Configuration <span class="token punctuation">(</span>with the authentication token<span class="token punctuation">)</span> was saved <span class="token keyword">in</span> <span class="token string">&quot;/etc/gitlab-runner/config.toml&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="设置" tabindex="-1"><a class="header-anchor" href="#设置"><span>设置</span></a></h4><p><code>config.toml</code> 是 GitLab Runner 的配置文件。其位置取决于你的 GitLab Runner 是如何安装的，以及你的操作系统。以下是一些可能的位置：</p><ul><li><p>在 Linux 上，如果你使用的是系统级的 GitLab Runner，<code>config.toml</code> 通常位于 <code>/etc/gitlab-runner/</code> 目录下。</p></li><li><p>在 Windows 上，如果你使用的是系统级的 GitLab Runner，<code>config.toml</code> 通常位于 <code>C:\\GitLab-Runner\\</code> 目录下。</p></li><li><p>如果你使用的是用户级的 GitLab Runner（即你在用户目录下运行 GitLab Runner），<code>config.toml</code> 通常位于 GitLab Runner 的当前工作目录下。这可能是你运行 <code>gitlab-runner install</code> 命令时的目录。</p></li></ul><p>你可以在命令行中使用 <code>find</code> 命令（在 Linux 或 macOS 上）或 <code>dir</code> 命令（在 Windows 上）来查找 <code>config.toml</code> 文件。例如，在 Windows 上，你可以使用以下命令：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>dir config.toml /s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令会在当前目录及其所有子目录中查找 <code>config.toml</code> 文件，并显示其完整路径。</p><p>请注意，修改 <code>config.toml</code> 文件需要管理员权限。你需要使用管理员权限运行编辑器（例如 Notepad++ 或 Visual Studio Code）来编辑这个文件。</p><hr><p>这里之前用 windows 无法找到 pwsd 命令，就可以将这个文件的 pwsd 换成 powershell 来解决</p><h2 id="专题-gitlab-cicd" tabindex="-1"><a class="header-anchor" href="#专题-gitlab-cicd"><span>专题 - GitLab CICD</span></a></h2><p>参考：</p><ul><li>https://www.bilibili.com/video/BV18y4y1S7VC</li><li>https://www.bilibili.com/video/BV1AV411A79q</li></ul><h3 id="比较jenkins" tabindex="-1"><a class="header-anchor" href="#比较jenkins"><span>比较Jenkins</span></a></h3><p>与Jenkins相比，优点：</p><ul><li>同时运行多个作业</li><li>对多个服务器（甚至每个项目）使用多个令牌</li><li>限制每个令牌的并发作业数</li><li>可以运行作业 <ul><li>本地</li><li>使用Docker容器</li><li>使用Docker容器并通过SSH执行作业</li><li>在不同的云和虚拟化管理程序上使用具有自动缩放功能的Docker容器</li><li>连接到远程SSH服务器</li></ul></li><li>用Go编写并作为单个二进制文件鲼，没有其他任何要求</li><li>支持Bash、PowerShell Core和Windows PowersShell</li><li>适用于GUN/Linux、macOS和Windows（几乎可以在任何可以运行Docker的地方）</li><li>允许自定义作业运行环境</li><li>无需重新启动即可自动重新加载配置</li><li>易于使用的设置，支持Docker、Docker-SSH、Parallels或SSH运行环境</li><li>嵌入式Prometheus指标HTTP服务器</li><li>Referee workers监控Prometheus指标和其他特定于工作的数据并将其传递给GitLab</li></ul><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h3><p>GitLab Runner、CICD、DevOps的概念、区别、联系</p><ul><li>概念 <ol><li>GitLab Runner <ul><li>这是一个用来执行在 GitLab CI/CD 中定义的作业的程序。GitLab Runner 可以在您选择的机器上安装并执行作业。一旦作业完成，结果将返回给 GitLab。GitLab Runner 是自动化您的部署过程的关键部分。</li></ul></li><li>CI/CD <ul><li>这是跨业务自动化和快速开发实践的一种途径。</li><li>CI 代表持续集成，确保<strong>所有的代码改动都收到测试</strong>，以尽最大可能减少软件中的错误。</li><li>CD 可能代表持续部署或持续交付，都涉及在开发环境中自动化代码改动的<strong>部署</strong>。这可以帮助开发团队更频繁、更可靠地向生产环境<strong>交付</strong>产品。</li></ul></li><li>DevOps <ul><li>是一种理念和实践集合，强调软件开发人员（Dev）和运维工程师（Ops）之间的沟通和协作，以实现快速、高质量的软件<strong>交付</strong>。</li><li>DevOps 通常与工具如 GitLab、Jenkins、Docker 等一起使用，以实现其目标。</li></ul></li></ol></li><li>关于区别 <ul><li>GitLab Runner 是一个<strong>工具</strong></li><li>CI/CD 是一种开发<strong>实践</strong></li><li>DevOps 是一种<strong>理念</strong></li><li>而 GitLab Runner 是实现 CI/CD 中自动执行作业的一个<strong>重要工具</strong>，CI/CD 则是实现 DevOps 理念中自动化交付部分的<strong>实践方式</strong>。</li></ul></li><li>关于联系 <ul><li>在 DevOps 理念下，开发人员和运维人员共同使用工具（如 GitLab Runner）并采取实践（如 CI/CD），从而实现更频繁和高质量的软件交付。 因此，DevOps、CI/CD 和 GitLab Runner 是相互关联的，其目标都是提高开发效率并提升软件质量。</li></ul></li></ul><h3 id="步骤-使用" tabindex="-1"><a class="header-anchor" href="#步骤-使用"><span>步骤 - 使用</span></a></h3><p>先说使用再说注册，不过操作上是先注册再使用</p><p>其中GitLabRunner有三种类型和两种状态</p><ul><li>shared： 运行整个平台项目的作业（GitLab，这个需要管理员 &gt; 系统设置 &gt; Runnners）</li><li>group： 运行特点group下的所有项目的作业（Group，Group &gt; Setting &gt; CI/CD &gt; Runner &gt; 展开）</li><li>specific：运行指定的项目作业（Project，Project &gt; Setting &gt; CI/CD &gt; Runner &gt; 展开）</li><li>locked：无法运行项目作业，刚注册完会是这种状态</li><li>paused：不会运行作业</li></ul><p>在对应的使用Runner的页面会看到三行信息：</p><ol><li>安装GitLab Runner (这步我不知道为什么好像已经完成过了，跳过)</li><li>给了你GitLab的所在地址</li><li>给了你一个 <code>registration token</code></li></ol><h3 id="步骤-注册" tabindex="-1"><a class="header-anchor" href="#步骤-注册"><span>步骤 - 注册</span></a></h3><p>注册需要获取runner token进行注册</p><p>注册有两种方式</p><ul><li><p>交互式（一问一答）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token parameter variable">--rm</span> <span class="token parameter variable">-v</span> ~/data/gitlab-runner/config:/etc/gitlab-runner gitlab/gitlab-runner:v12.6.0 register
$ <span class="token function">docker</span> <span class="token function">ps</span> <span class="token operator">|</span> <span class="token function">grep</span> gitlab
$ <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> aa9cae99d9f9 <span class="token function">bash</span>

<span class="token comment"># docker里</span>
<span class="token comment"># &gt; 输入Gitlab所在地址</span>
<span class="token comment"># &gt; 输入注册命令</span>
<span class="token comment"># &gt; 说一些描述信息</span>
<span class="token comment"># &gt; 给一个标签，这个很关键</span>
<span class="token comment"># &gt; 选择执行器</span>
<span class="token comment">#     如果选shell，下一步不用再填信息</span>
<span class="token comment">#     如果选docker，下一步要选一个默认镜像# </span>
$ gitlab-runner register
	--non-interactive <span class="token punctuation">\\</span>
    <span class="token parameter variable">--executor</span> <span class="token string">&quot;shell&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--url</span> <span class="token string">&quot;http://gitlab.devops.com&quot;</span> <span class="token punctuation">\\</span>
    --registration-token <span class="token string">&quot;RjAoLah8Vp7JCGyNzZwf&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--description</span> <span class="token string">&quot;devops-runner&quot;</span> <span class="token punctuation">\\</span>
    --tag-list <span class="token string">&quot;build,deploy&quot;</span> <span class="token punctuation">\\</span>
    --run-untagged<span class="token operator">=</span><span class="token string">&quot;true&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--locked</span><span class="token operator">=</span><span class="token string">&quot;false&quot;</span> <span class="token punctuation">\\</span>
    --access-level<span class="token operator">=</span><span class="token string">&quot;not_protected&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>非交互式（执行时顺便准备一堆参数）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token parameter variable">--rm</span> <span class="token parameter variable">-v</span> ~/data/gitlab-runner/config:/etc/gitlab-runner gitlab/gitlab-runner:v12.6.0 register <span class="token punctuation">\\</span>
    --non-interactive <span class="token punctuation">\\</span>
    <span class="token parameter variable">--executor</span> <span class="token string">&quot;shell&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--url</span> <span class="token string">&quot;http://gitlab.devops.com&quot;</span> <span class="token punctuation">\\</span>
    --registration-token <span class="token string">&quot;RjAoLah8Vp7JCGyNzZwf&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--description</span> <span class="token string">&quot;devops-runner&quot;</span> <span class="token punctuation">\\</span>
    --tag-list <span class="token string">&quot;build,deploy&quot;</span> <span class="token punctuation">\\</span>
    --run-untagged<span class="token operator">=</span><span class="token string">&quot;true&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--locked</span><span class="token operator">=</span><span class="token string">&quot;false&quot;</span> <span class="token punctuation">\\</span>
    --access-level<span class="token operator">=</span><span class="token string">&quot;not_protected&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>注册完成后，可以在GitLab上看到注册成功的Runner</p><p>有些参数也可以在Running创建后通过GitLab设置再去修改</p><h3 id="补充-其他参数" tabindex="-1"><a class="header-anchor" href="#补充-其他参数"><span>补充 - 其他参数</span></a></h3><p>一些参数的介绍</p><ul><li><p>执行器（主要是下面3种，其他的功能不是很丰富）</p><ul><li><p>Shell （这个使用的是本机的环境，但是可以在docker里面去执行shell，从而间接使用docker环境）</p></li><li><p>Docker （这个的pull过程可能会稍慢，不知道能不能预先下载镜像来加速这个过程）</p></li><li><p>Kubernetes</p></li><li><figure><img src="`+r+`" alt="image-20231018225021694" tabindex="0" loading="lazy"><figcaption>image-20231018225021694</figcaption></figure></li><li><table><thead><tr><th>执行器</th><th>Shell</th><th>Docker</th><th>Kubernetes</th></tr></thead><tbody><tr><td>每次构建后清除构造环境</td><td>❌</td><td>✅</td><td>✅</td></tr><tr><td>每次检查clone是否存在</td><td>✅</td><td>✅</td><td>❌</td></tr></tbody></table></li></ul></li></ul><h3 id="补充-其他命令" tabindex="-1"><a class="header-anchor" href="#补充-其他命令"><span>补充 - 其他命令</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>gitlab-runner register		<span class="token comment"># 默认交互模式下使用，非交互模式添加 --non-interactive</span>
gitlab-runner list 			<span class="token comment"># 此命令列出了保存在配置文件中的所有运行程序</span>
gitlab-runner verify 		<span class="token comment"># 检查注册的runner是否可以连接，但不验证GitLab服务是否正在使用runner。--delete 删除</span>
gitlab-runner unregister 	<span class="token comment"># 该命令使用GitLab取消已注册的runner</span>

gitlab-runner unregister <span class="token parameter variable">--url</span> http://gitlab.example.com/ <span class="token parameter variable">--token</span> t0k3n <span class="token comment"># 使用令牌注销</span>
gitlab-runner unregister <span class="token parameter variable">--name</span> test-runner <span class="token comment"># 使用名字注销</span>
gitlab-runner unregister --all-runners <span class="token comment"># 注销所有</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="并发数设置" tabindex="-1"><a class="header-anchor" href="#并发数设置"><span>并发数设置</span></a></h3><p>GitLab Runner的并发数可以在Runner的配置文件config.toml中进行设置。这个文件通常位于/etc/gitlab-runner/目录下。在config.toml文件中，你可以找到concurrent这个选项，它决定了Runner的并发数。</p><p>以下是一个config.toml的示例：</p><div class="language-ini line-numbers-mode" data-ext="ini" data-title="ini"><pre class="language-ini"><code><span class="token key attr-name">concurrent</span> <span class="token punctuation">=</span> <span class="token value attr-value">4 # 默认是1</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">[runners</span><span class="token punctuation">]</span></span>]
  <span class="token key attr-name">name</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">My Runner</span>&quot;</span>
  <span class="token key attr-name">url</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">https://gitlab.com/</span>&quot;</span>
  <span class="token key attr-name">token</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">TOKEN</span>&quot;</span>
  <span class="token key attr-name">executor</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">shell</span>&quot;</span>
  <span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">runners.custom_build_dir</span><span class="token punctuation">]</span></span>
  <span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">runners.cache</span><span class="token punctuation">]</span></span>
    <span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">runners.cache.s3</span><span class="token punctuation">]</span></span>
    <span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">runners.cache.gcs</span><span class="token punctuation">]</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h2><p>Docker 通常用于运行后台服务，而不是图形用户界面 (GUI) 应用程序。然而，有些 Docker 镜像确实被配置为运行桌面环境，通常是通过在 Docker 容器中运行 X 服务器或其他类型的显示服务器。</p><p>对于 Windows，情况就复杂多了。Microsoft 提供了 Windows Server Core 和 Nano Server 的 Docker 镜像，但这些都是无头的，也就是说，它们不包含图形用户界面。尽管有一些工作已经在尝试在 Docker 中运行 Windows 桌面，但这并不是 Docker 的主要用途，也不是 Microsoft Windows Docker 镜像的主要目标。</p><p>总的来说，如果你需要在 Docker 中运行带有 GUI 的 Windows 应用程序，可能需要寻找其他解决方案。例如，你可能会考虑使用 Windows 的远程桌面服务，或者使用像是 VirtualBox 或 VMware 这样的全功能虚拟机软件。</p><p>然而，如果你只是想在 Docker 中运行 Windows 应用程序，而不需要 GUI，那么 Windows Server Core 或 Nano Server 镜像可能会满足你的需求。</p><h2 id="自定义dockerfile" tabindex="-1"><a class="header-anchor" href="#自定义dockerfile"><span>自定义DockerFile</span></a></h2><p>有时单个docker满足不了我们，我们需要一些自定义的docker，这里列些常用的</p><h3 id="自用gcc" tabindex="-1"><a class="header-anchor" href="#自用gcc"><span>自用gcc</span></a></h3><h4 id="自用gcc4-8" tabindex="-1"><a class="header-anchor" href="#自用gcc4-8"><span>自用gcc4.8</span></a></h4><ul><li>ubuntu 18.04</li><li>gcc/g++ 4.8</li><li>cmake 3.20.2</li></ul><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token comment"># 包含gcc4.8, g++4.8和cmake的Ubuntu镜像</span>

<span class="token comment"># 使用Ubuntu 18.04作为基础镜像</span>
<span class="token instruction"><span class="token keyword">FROM</span> ubuntu:18.04</span>

<span class="token comment"># 更新apt源并安装必要的工具</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get update &amp;&amp; apt-get install -y software-properties-common</span>

<span class="token comment"># 安装gcc-4.8和g++-4.8</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get update &amp;&amp; apt-get install -y gcc-4.8 g++-4.8</span>

<span class="token comment"># 设置gcc-4.8和g++-4.8为默认</span>
<span class="token instruction"><span class="token keyword">RUN</span> update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-4.8 50 --slave /usr/bin/g++ g++ /usr/bin/g++-4.8</span>

<span class="token comment"># (可选) 添加cmake的官方PPA，不加的话cmake版本只有3.10太低</span>
<span class="token comment"># RUN apt-get install -y apt-transport-https ca-certificates gnupg software-properties-common wget &amp;&amp; \\</span>
<span class="token comment">#     wget -O - https://apt.kitware.com/keys/kitware-archive-latest.asc 2&gt;/dev/null | gpg --dearmor - | tee /etc/apt/trusted.gpg.d/kitware.gpg &gt;/dev/null &amp;&amp; \\</span>
<span class="token comment">#     apt-add-repository &#39;deb https://apt.kitware.com/ubuntu/ bionic main&#39;  </span>
<span class="token comment"># 安装cmake</span>
<span class="token comment"># RUN apt-get install -y cmake</span>
<span class="token comment"># RUN apt-get update &amp;&amp; apt-get install -y cmake=3.20.2-0kitware1ubuntu18.04.1</span>

<span class="token comment"># 安装依赖</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get install -y wget libssl-dev make</span>

<span class="token comment"># 下载cmake 3.20.2</span>
<span class="token instruction"><span class="token keyword">RUN</span> wget https://github.com/Kitware/CMake/releases/download/v3.20.2/cmake-3.20.2.tar.gz</span>

<span class="token comment"># 解压cmake源码</span>
<span class="token instruction"><span class="token keyword">RUN</span> tar -zxvf cmake-3.20.2.tar.gz</span>

<span class="token comment"># 进入cmake源码目录</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> cmake-3.20.2</span>

<span class="token comment"># 编译并安装cmake</span>
<span class="token instruction"><span class="token keyword">RUN</span> ./bootstrap &amp;&amp; make &amp;&amp; make install</span>

<span class="token comment"># 返回到主目录</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /</span>

<span class="token comment"># 验证安装</span>
<span class="token instruction"><span class="token keyword">RUN</span> gcc --version &amp;&amp; g++ --version &amp;&amp; cmake --version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker build -t msy/ubuntu:gcc48 .</p><h4 id="自用gcc11" tabindex="-1"><a class="header-anchor" href="#自用gcc11"><span>自用gcc11</span></a></h4><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token comment"># 使用Ubuntu 20.04作为基础镜像</span>
<span class="token instruction"><span class="token keyword">FROM</span> ubuntu:20.04</span>

<span class="token comment"># 设置环境变量，防止在安装过程中出现tzdata挂起的情况</span>
<span class="token instruction"><span class="token keyword">ENV</span> DEBIAN_FRONTEND=noninteractive</span>

<span class="token comment"># 更换为清华大学Ubuntu镜像源</span>
<span class="token instruction"><span class="token keyword">RUN</span> echo <span class="token string">&quot;deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse&quot;</span> &gt; /etc/apt/sources.list &amp;&amp; <span class="token operator">\\</span>
    echo <span class="token string">&quot;deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse&quot;</span> &gt;&gt; /etc/apt/sources.list &amp;&amp; <span class="token operator">\\</span>
    echo <span class="token string">&quot;deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse&quot;</span> &gt;&gt; /etc/apt/sources.list &amp;&amp; <span class="token operator">\\</span>
    echo <span class="token string">&quot;deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse&quot;</span> &gt;&gt; /etc/apt/sources.list</span>

<span class="token comment"># 更新apt源并安装必要的工具</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get update &amp;&amp; apt-get install -y software-properties-common</span>

<span class="token comment"># 安装gcc-11和g++-11</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get update &amp;&amp; apt-get install -y gcc-11 g++-11</span>

<span class="token comment"># 设置gcc-11和g++-11为默认</span>
<span class="token instruction"><span class="token keyword">RUN</span> update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-11 50 --slave /usr/bin/g++ g++ /usr/bin/g++-11</span>

<span class="token comment"># (可选) 添加cmake的官方PPA，不加的话cmake版本只有3.10太低</span>
<span class="token comment"># RUN apt-get install -y apt-transport-https ca-certificates gnupg software-properties-common wget &amp;&amp; \\</span>
<span class="token comment">#     wget -O - https://apt.kitware.com/keys/kitware-archive-latest.asc 2&gt;/dev/null | gpg --dearmor - | tee /etc/apt/trusted.gpg.d/kitware.gpg &gt;/dev/null &amp;&amp; \\</span>
<span class="token comment">#     apt-add-repository &#39;deb https://apt.kitware.com/ubuntu/ bionic main&#39;  </span>
<span class="token comment"># 安装cmake</span>
<span class="token comment"># RUN apt-get install -y cmake</span>
<span class="token comment"># RUN apt-get update &amp;&amp; apt-get install -y cmake=3.20.2-0kitware1ubuntu18.04.1</span>

<span class="token comment"># 安装依赖</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get install -y wget libssl-dev make</span>

<span class="token comment"># 下载cmake 3.20.2</span>
<span class="token instruction"><span class="token keyword">RUN</span> wget https://github.com/Kitware/CMake/releases/download/v3.20.2/cmake-3.20.2.tar.gz</span>

<span class="token comment"># 解压cmake源码</span>
<span class="token instruction"><span class="token keyword">RUN</span> tar -zxvf cmake-3.20.2.tar.gz</span>

<span class="token comment"># 进入cmake源码目录</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> cmake-3.20.2</span>

<span class="token comment"># 编译并安装cmake</span>
<span class="token instruction"><span class="token keyword">RUN</span> ./bootstrap &amp;&amp; make &amp;&amp; make install</span>

<span class="token comment"># 返回到主目录</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /</span>

<span class="token comment"># 验证安装</span>
<span class="token instruction"><span class="token keyword">RUN</span> gcc --version &amp;&amp; g++ --version &amp;&amp; cmake --version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker build -t msy/ubuntu:gcc11 .</p><h3 id="自用node" tabindex="-1"><a class="header-anchor" href="#自用node"><span>自用node</span></a></h3><ul><li>node:18-alpine</li></ul><h3 id="自用python" tabindex="-1"><a class="header-anchor" href="#自用python"><span>自用python</span></a></h3><h4 id="自用conda-debian" tabindex="-1"><a class="header-anchor" href="#自用conda-debian"><span>自用conda (Debian)</span></a></h4><ul><li><s>miniconda3 (Debian)</s></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 使用官方的miniconda3镜像作为基础镜像</span>
FROM continuumio/miniconda3

<span class="token comment"># 设置工作目录</span>
WORKDIR /app

<span class="token comment"># 将当前目录下的所有文件（除了.dockerignore排除的路径）复制到容器的/app目录下</span>
COPY <span class="token builtin class-name">.</span> /app

<span class="token comment"># 创建一个新的conda环境并安装pip</span>
RUN conda create <span class="token parameter variable">--name</span> myenv pip

<span class="token comment"># 激活新的conda环境</span>
RUN <span class="token builtin class-name">echo</span> <span class="token string">&quot;source activate myenv&quot;</span> <span class="token operator">&gt;</span>~/.bashrc
ENV <span class="token environment constant">PATH</span> /opt/conda/envs/myenv/bin:<span class="token environment constant">$PATH</span>

<span class="token comment"># 使用pip安装你的Python项目的依赖</span>
<span class="token comment"># COPY requirements.txt /app/requirements.txt</span>
<span class="token comment"># RUN pip install -r requirements.txt</span>

<span class="token comment"># 指定容器启动时执行的命令</span>
<span class="token comment"># CMD [&quot;python&quot;, &quot;your_script.py&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自用conda-公司" tabindex="-1"><a class="header-anchor" href="#自用conda-公司"><span>自用conda (公司)</span></a></h4>`,184),u=n("li",null,"ubuntu 20.04",-1),v={href:"https://repo.anaconda.com/archive/Anaconda3-2023.09-0-Linux-x86_64.sh",target:"_blank",rel:"noopener noreferrer"},m={href:"https://repo.anaconda.com/miniconda/Miniconda3-py39_23.9.0-0-Linux-x86_64.sh",target:"_blank",rel:"noopener noreferrer"},k=n("li",null,"python 3.9.0",-1),b=n("li",null,"git",-1),g=i(`<div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token comment"># 使用 Ubuntu 20.04 作为基础镜像</span>
<span class="token instruction"><span class="token keyword">FROM</span> ubuntu:20.04</span>

<span class="token comment"># 定义环境变量，用于解决他中途会让你填时区什么的</span>
<span class="token instruction"><span class="token keyword">ENV</span> TZ=Asia/Shanghai</span>
<span class="token instruction"><span class="token keyword">ENV</span> DEBIAN_FRONTEND=noninteractive</span>

<span class="token comment"># 更新 Ubuntu 的源列表为阿里云镜像</span>
<span class="token instruction"><span class="token keyword">RUN</span> sed -i <span class="token string">&#39;s/archive.ubuntu.com/mirrors.aliyun.com/g&#39;</span> /etc/apt/sources.list</span>
<span class="token instruction"><span class="token keyword">RUN</span> sed -i <span class="token string">&#39;s/security.ubuntu.com/mirrors.aliyun.com/g&#39;</span> /etc/apt/sources.list</span>

<span class="token comment"># 设置工作目录</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /usr/src/app</span>

<span class="token comment"># 定义环境变量</span>
<span class="token instruction"><span class="token keyword">ENV</span> LANG C.UTF-8</span>
<span class="token instruction"><span class="token keyword">ENV</span> LC_ALL C.UTF-8</span>
<span class="token instruction"><span class="token keyword">ENV</span> PATH /opt/conda/bin:<span class="token variable">$PATH</span></span>

<span class="token comment"># 安装必要的包</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get update --fix-missing &amp;&amp; <span class="token operator">\\</span>
    apt-get install -y wget bzip2 ca-certificates libglib2.0-0 libxext6 libsm6 libxrender1 git mercurial subversion &amp;&amp; <span class="token operator">\\</span>
    apt-get clean</span>

<span class="token comment"># 下载并安装 Anaconda</span>
<span class="token comment"># 旧 RUN wget --quiet https://repo.anaconda.com/archive/Anaconda3-2023.09-0-Linux-x86_64.sh -O ~/anaconda.sh</span>
<span class="token instruction"><span class="token keyword">RUN</span> wget --quiet https://repo.anaconda.com/miniconda/Miniconda3-py39_23.9.0-0-Linux-x86_64.sh -O ~/miniconda.sh</span>
<span class="token instruction"><span class="token keyword">RUN</span> /bin/bash ~/miniconda.sh -b -p /opt/conda</span>
<span class="token instruction"><span class="token keyword">RUN</span> rm ~/miniconda.sh</span>
<span class="token instruction"><span class="token keyword">RUN</span> /opt/conda/bin/conda clean -tipy</span>

<span class="token comment"># 创建一个 Python 3.9 的环境</span>
<span class="token instruction"><span class="token keyword">RUN</span> /opt/conda/bin/conda install -y python=3.9</span>
<span class="token instruction"><span class="token keyword">RUN</span> /opt/conda/bin/conda clean -tipy</span>

<span class="token comment"># 使用新环境</span>
<span class="token instruction"><span class="token keyword">RUN</span> conda create -n HoloWAN_Recorder_Test_Env python=3.9.0</span>
<span class="token instruction"><span class="token keyword">SHELL</span> [<span class="token string">&quot;conda&quot;</span>, <span class="token string">&quot;run&quot;</span>, <span class="token string">&quot;-n&quot;</span>, <span class="token string">&quot;HoloWAN_Recorder_Test_Env&quot;</span>, <span class="token string">&quot;/bin/bash&quot;</span>, <span class="token string">&quot;-c&quot;</span>]</span>

<span class="token comment"># 更新 Conda 基础环境版本</span>
<span class="token comment"># RUN conda update -n base -c defaults conda</span>

<span class="token comment"># 确认 Python 和 Conda 已经安装</span>
<span class="token instruction"><span class="token keyword">RUN</span> conda --version</span>
<span class="token instruction"><span class="token keyword">RUN</span> python --version</span>
<span class="token instruction"><span class="token keyword">RUN</span> pip --version</span>

<span class="token comment"># 暴露必要的端口（这个例子中是 Jupyter Notebook 的默认端口）</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 8888</span>

<span class="token comment"># 定义一个运行应用的命令</span>
<span class="token comment"># CMD [&quot;echo&quot;, &quot;Dockerfile setup complete&quot;]</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;tail&quot;</span>, <span class="token string">&quot;-f&quot;</span>, <span class="token string">&quot;/dev/null&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker build --no-cache -t msy/conda:3 .</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token punctuation">\\</span>
	<span class="token parameter variable">-p</span> <span class="token number">8888</span>:8888 <span class="token punctuation">\\</span>
	<span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
	<span class="token parameter variable">--name</span> conda_recorder_test <span class="token punctuation">\\</span>
	msy/conda:3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自己用flask-pyserver服务" tabindex="-1"><a class="header-anchor" href="#自己用flask-pyserver服务"><span>自己用flask pyServer服务</span></a></h4><p>Dockerfile</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token comment"># 建议使用</span>
<span class="token comment"># docker build -t recorder_py_server .</span>
<span class="token comment"># docker run -itd \\</span>
<span class="token comment">#     --restart=always \\</span>
<span class="token comment">#     -p 8088:8088 \\</span>
<span class="token comment">#     --name recorder_py_server</span>
<span class="token comment">#     recorder_py_server</span>

<span class="token comment"># 使用清华的Ubuntu镜像</span>
<span class="token comment"># FROM ubuntu:18.04</span>
<span class="token comment"># 设置清华的源</span>
<span class="token comment">#RUN echo &quot;deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse&quot; &gt; /etc/apt/sources.list &amp;&amp; \\</span>
<span class="token comment">#    echo &quot;deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse&quot; &gt;&gt; /etc/apt/sources.list &amp;&amp; \\</span>
<span class="token comment">#    echo &quot;deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse&quot; &gt;&gt; /etc/apt/sources.list &amp;&amp; \\</span>
<span class="token comment">#    echo &quot;deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse&quot; &gt;&gt; /etc/apt/sources.list</span>

<span class="token comment"># 使用清华的Ubuntu镜像</span>
<span class="token instruction"><span class="token keyword">FROM</span> ubuntu:20.04</span>
<span class="token comment"># 设置清华的源</span>
<span class="token instruction"><span class="token keyword">RUN</span> echo <span class="token string">&quot;deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse&quot;</span> &gt; /etc/apt/sources.list &amp;&amp; <span class="token operator">\\</span>
    echo <span class="token string">&quot;deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse&quot;</span> &gt;&gt; /etc/apt/sources.list &amp;&amp; <span class="token operator">\\</span>
    echo <span class="token string">&quot;deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse&quot;</span> &gt;&gt; /etc/apt/sources.list &amp;&amp; <span class="token operator">\\</span>
    echo <span class="token string">&quot;deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse&quot;</span> &gt;&gt; /etc/apt/sources.list</span>

<span class="token comment"># 安装ca-certificates</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get update &amp;&amp; apt-get install -y ca-certificates</span>

<span class="token comment"># 安装必要的工具</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get update &amp;&amp; apt-get install -y wget bzip2</span>

<span class="token comment"># 安装miniconda3</span>
<span class="token instruction"><span class="token keyword">RUN</span> wget https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda.sh &amp;&amp; <span class="token operator">\\</span>
    bash ~/miniconda.sh -b -p /opt/conda &amp;&amp; <span class="token operator">\\</span>
    rm ~/miniconda.sh</span>

<span class="token comment"># 将conda的bin目录添加到PATH</span>
<span class="token instruction"><span class="token keyword">ENV</span> PATH /opt/conda/bin:<span class="token variable">$PATH</span></span>

<span class="token comment"># 配置conda的镜像源</span>
<span class="token instruction"><span class="token keyword">RUN</span> conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/ &amp;&amp; <span class="token operator">\\</span>
    conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/ &amp;&amp; <span class="token operator">\\</span>
    conda config --set show_channel_urls yes</span>

<span class="token comment"># 复制当前目录下的所有文件到容器的/app目录</span>
<span class="token instruction"><span class="token keyword">COPY</span> . /app</span>

<span class="token comment"># 切换工作目录</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token comment"># 根据requirements.txt安装依赖</span>
<span class="token instruction"><span class="token keyword">RUN</span> pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple</span>

<span class="token comment"># 开放7088端口</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 7088</span>

<span class="token comment"># 运行flask项目</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;python&quot;</span>, <span class="token string">&quot;app.py&quot;</span>]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自用android" tabindex="-1"><a class="header-anchor" href="#自用android"><span>自用android</span></a></h3><h4 id="自用android-旧版本-失败" tabindex="-1"><a class="header-anchor" href="#自用android-旧版本-失败"><span>自用android (旧版本，失败)</span></a></h4><ul><li>ubuntu 20.04</li><li>jdk 8</li><li>gradle 6.5</li></ul><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token comment"># 基于 Ubuntu 20.04 LTS</span>
<span class="token instruction"><span class="token keyword">FROM</span> ubuntu:20.04</span>

<span class="token comment"># 话说这里如果基于 gradle:8.0-jdk11 镜像可能会更方便</span>
<span class="token comment"># FROM gradle:8.0-jdk11</span>

<span class="token comment"># 设置非交互模式</span>
<span class="token instruction"><span class="token keyword">ENV</span> DEBIAN_FRONTEND=noninteractive</span>

<span class="token comment"># 更新系统并安装必要的工具</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get update &amp;&amp; apt-get install -y <span class="token operator">\\</span>
    git <span class="token operator">\\</span>
    curl <span class="token operator">\\</span>
    unzip <span class="token operator">\\</span>
    python <span class="token operator">\\</span>
    openjdk-8-jdk <span class="token operator">\\</span>
    build-essential <span class="token operator">\\</span>
    libssl-dev <span class="token operator">\\</span>
    rsync <span class="token operator">\\</span>
    zip <span class="token operator">\\</span>
    zlib1g-dev <span class="token operator">\\</span>
    libncurses5-dev <span class="token operator">\\</span>
    libncursesw5-dev <span class="token operator">\\</span>
    libc6-dev <span class="token operator">\\</span>
    libstdc++6 <span class="token operator">\\</span>
    &amp;&amp; rm -rf /var/lib/apt/lists/*</span>

<span class="token comment"># 安装 Android SDK</span>
<span class="token instruction"><span class="token keyword">ENV</span> ANDROID_HOME /opt/android-sdk</span>
<span class="token instruction"><span class="token keyword">ENV</span> PATH <span class="token variable">\${PATH}</span>:<span class="token variable">\${ANDROID_HOME}</span>/tools/bin:<span class="token variable">\${ANDROID_HOME}</span>/platform-tools</span>

<span class="token instruction"><span class="token keyword">RUN</span> mkdir -p <span class="token variable">\${ANDROID_HOME}</span> &amp;&amp; cd <span class="token variable">\${ANDROID_HOME}</span> <span class="token operator">\\</span>
    &amp;&amp; curl -o sdk-tools.zip https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip <span class="token operator">\\</span>
    &amp;&amp; unzip sdk-tools.zip &amp;&amp; rm sdk-tools.zip <span class="token operator">\\</span>
    &amp;&amp; yes | sdkmanager --licenses <span class="token operator">\\</span>
    &amp;&amp; sdkmanager <span class="token string">&quot;platform-tools&quot;</span> <span class="token string">&quot;platforms;android-29&quot;</span> <span class="token string">&quot;build-tools;29.0.3&quot;</span></span>

<span class="token comment"># 安装 Gradle</span>
<span class="token instruction"><span class="token keyword">ENV</span> GRADLE_HOME /opt/gradle</span>
<span class="token instruction"><span class="token keyword">ENV</span> PATH <span class="token variable">\${PATH}</span>:<span class="token variable">\${GRADLE_HOME}</span>/bin</span>

<span class="token instruction"><span class="token keyword">RUN</span> curl -o gradle.zip https://services.gradle.org/distributions/gradle-6.5-bin.zip <span class="token operator">\\</span>
    &amp;&amp; unzip -d /opt gradle.zip &amp;&amp; rm gradle.zip <span class="token operator">\\</span>
    &amp;&amp; mv /opt/gradle-* <span class="token variable">\${GRADLE_HOME}</span></span>

<span class="token comment"># 设置工作目录</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token comment"># 将项目复制到 Docker 镜像中</span>
<span class="token comment"># COPY . /app</span>

<span class="token comment"># 编译项目</span>
<span class="token comment"># RUN gradle assembleDebug</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker build -t msy/android:jdk8 .</p><h4 id="自用android-新" tabindex="-1"><a class="header-anchor" href="#自用android-新"><span>自用android (新)</span></a></h4><ul><li>Debian-based 系统 (Open JDK)</li><li>jdk 11</li><li>gradle 8</li></ul><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token comment"># 基于 gradle:8.0-jdk11 镜像</span>
<span class="token instruction"><span class="token keyword">FROM</span> gradle:8.0-jdk11</span>

<span class="token comment"># 设置非交互模式</span>
<span class="token instruction"><span class="token keyword">ENV</span> DEBIAN_FRONTEND=noninteractive</span>

<span class="token comment"># 阿里云镜像 (特殊仓库需要通过公钥信任仓库才能使用，docker会先安装一个公钥管理器并输入公钥然后才会去拉对应的仓库)</span>
<span class="token instruction"><span class="token keyword">RUN</span> echo <span class="token string">&quot;deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse&quot;</span> &gt; /etc/apt/sources.list &amp;&amp; <span class="token operator">\\</span>
    echo <span class="token string">&quot;deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse&quot;</span> &gt;&gt; /etc/apt/sources.list &amp;&amp; <span class="token operator">\\</span>
    echo <span class="token string">&quot;deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse&quot;</span> &gt;&gt; /etc/apt/sources.list &amp;&amp; <span class="token operator">\\</span>
    echo <span class="token string">&quot;deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse&quot;</span> &gt;&gt; /etc/apt/sources.list &amp;&amp; <span class="token operator">\\</span>
    echo <span class="token string">&quot;deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse&quot;</span> &gt;&gt; /etc/apt/sources.list &amp;&amp; <span class="token operator">\\</span>
    apt-get update &amp;&amp; <span class="token operator">\\</span>
    apt-get install -y --no-install-recommends gnupg2 &amp;&amp; <span class="token operator">\\</span>
    apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 3B4FE6ACC0B21F32</span>

<span class="token comment"># 更新系统并安装必要的工具</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get update &amp;&amp; apt-get install -y <span class="token operator">\\</span>
    git <span class="token operator">\\</span>
    curl <span class="token operator">\\</span>
    unzip <span class="token operator">\\</span>
    python <span class="token operator">\\</span>
    libssl-dev <span class="token operator">\\</span>
    rsync <span class="token operator">\\</span>
    zip <span class="token operator">\\</span>
    zlib1g-dev <span class="token operator">\\</span>
    libncurses5-dev <span class="token operator">\\</span>
    libncursesw5-dev <span class="token operator">\\</span>
    libc6-dev <span class="token operator">\\</span>
    libstdc++6 <span class="token operator">\\</span>
    &amp;&amp; rm -rf /var/lib/apt/lists/*</span>

<span class="token comment"># 安装 Android SDK</span>
<span class="token instruction"><span class="token keyword">ENV</span> ANDROID_HOME /opt/android-sdk</span>
<span class="token instruction"><span class="token keyword">ENV</span> PATH <span class="token variable">\${PATH}</span>:<span class="token variable">\${ANDROID_HOME}</span>/tools/bin:<span class="token variable">\${ANDROID_HOME}</span>/platform-tools</span>

<span class="token instruction"><span class="token keyword">RUN</span> mkdir -p <span class="token variable">\${ANDROID_HOME}</span> &amp;&amp; cd <span class="token variable">\${ANDROID_HOME}</span> <span class="token operator">\\</span>
    &amp;&amp; curl -o sdk-tools.zip https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip <span class="token operator">\\</span>
    &amp;&amp; unzip sdk-tools.zip &amp;&amp; rm sdk-tools.zip <span class="token operator">\\</span>
    &amp;&amp; yes | sdkmanager --licenses <span class="token operator">\\</span>
    &amp;&amp; sdkmanager <span class="token string">&quot;platform-tools&quot;</span> <span class="token string">&quot;platforms;android-29&quot;</span> <span class="token string">&quot;build-tools;29.0.3&quot;</span></span>

<span class="token comment"># 设置工作目录</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token comment"># 将项目复制到 Docker 镜像中</span>
<span class="token comment"># COPY . /app</span>

<span class="token comment"># 编译项目</span>
<span class="token comment"># RUN gradle assembleDebug</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker build -t msy/android:jdk11 .</p><h4 id="自用android-公司-成功但版本不对" tabindex="-1"><a class="header-anchor" href="#自用android-公司-成功但版本不对"><span>自用android（公司，成功但版本不对）</span></a></h4><p>使用公司用的配置：</p><ul><li>ubuntu 20.04</li><li>gradle-8</li><li>jdk8 (8/15/17好像这几个都有，但似乎用的是 jdk-17，这里错了)</li></ul><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token comment"># 基于 Ubuntu 20.04 LTS</span>
<span class="token instruction"><span class="token keyword">FROM</span> ubuntu:20.04</span>

<span class="token comment"># 定义环境变量</span>
<span class="token instruction"><span class="token keyword">ENV</span> JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64</span>
<span class="token instruction"><span class="token keyword">ENV</span> GRADLE_HOME /opt/gradle</span>
<span class="token instruction"><span class="token keyword">ENV</span> GRADLE_VERSION 8.0</span>

<span class="token comment"># 更新 Ubuntu 的源列表</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get update</span>

<span class="token comment"># 安装 OpenJDK-8</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get install -y openjdk-8-jdk</span>

<span class="token comment"># 安装 wget 和 unzip</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get install -y wget unzip</span>

<span class="token comment"># 验证 Java 版本</span>
<span class="token instruction"><span class="token keyword">RUN</span> java -version</span>

<span class="token comment"># 下载所需的 Gradle 版本</span>
<span class="token instruction"><span class="token keyword">RUN</span> wget https://services.gradle.org/distributions/gradle-<span class="token variable">\${GRADLE_VERSION}</span>-bin.zip -P /tmp</span>

<span class="token comment"># 解压 Gradle 并移动到指定目录</span>
<span class="token instruction"><span class="token keyword">RUN</span> unzip -d /opt/gradle /tmp/gradle-*.zip</span>

<span class="token comment"># 配置环境变量</span>
<span class="token instruction"><span class="token keyword">ENV</span> PATH <span class="token variable">\${GRADLE_HOME}</span>/gradle-<span class="token variable">\${GRADLE_VERSION}</span>/bin:<span class="token variable">\${PATH}</span></span>

<span class="token comment"># 验证 Gradle 版本</span>
<span class="token instruction"><span class="token keyword">RUN</span> gradle -v</span>

<span class="token comment"># 清理缓存</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get clean &amp;&amp; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*</span>

<span class="token comment"># 设置工作目录</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token comment"># 默认命令</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;bash&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker build -t msy/android:jdk8 .</p><h4 id="自用android-公司-成功" tabindex="-1"><a class="header-anchor" href="#自用android-公司-成功"><span>自用android（公司，成功）</span></a></h4><p>使用公司用的配置：</p><ul><li>ubuntu 20.04</li><li>gradle-8.0 (8.1好像会正确一点，还有个Android Gradle Plugin的8.1版本)</li><li>jdk17 (8/15/17好像这几个都有，但似乎用的是 jdk-17)</li></ul><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token comment"># 基于 Ubuntu 20.04 LTS</span>
<span class="token instruction"><span class="token keyword">FROM</span> ubuntu:20.04</span>

<span class="token comment"># 定义环境变量，用于解决他中途会让你填时区什么的</span>
<span class="token instruction"><span class="token keyword">ENV</span> TZ=Asia/Shanghai</span>
<span class="token instruction"><span class="token keyword">ENV</span> DEBIAN_FRONTEND=noninteractive</span>

<span class="token comment"># 更新 Ubuntu 的源列表</span>
<span class="token comment"># 阿里云镜像 (特殊仓库需要通过公钥信任仓库才能使用，docker会先安装一个公钥管理器并输入公钥然后才会去拉对应的仓库)</span>
<span class="token instruction"><span class="token keyword">RUN</span> sed -i <span class="token string">&#39;s/archive.ubuntu.com/mirrors.aliyun.com/g&#39;</span> /etc/apt/sources.list</span>
<span class="token instruction"><span class="token keyword">RUN</span> sed -i <span class="token string">&#39;s/security.ubuntu.com/mirrors.aliyun.com/g&#39;</span> /etc/apt/sources.list</span>

<span class="token comment"># 安装其他依赖</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get update</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get install -y wget unzip git # 安装 wget 和 unzip 和 git</span>

<span class="token comment"># JDK部分</span>
<span class="token instruction"><span class="token keyword">ENV</span> JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get install -y openjdk-17-jdk # 安装OpenJDK-17</span>
<span class="token instruction"><span class="token keyword">ENV</span> PATH <span class="token variable">\${JAVA_HOME}</span>/bin:<span class="token variable">\${PATH}</span> # 配置环境变量</span>
<span class="token instruction"><span class="token keyword">RUN</span> java -version # 验证 Java 版本: 17.0.8.1</span>
<span class="token instruction"><span class="token keyword">RUN</span> update-alternatives --list java # 调试查看安装路径: /usr/lib/jvm/java-17-openjdk-amd64/bin/java</span>
    <span class="token comment"># TODO 主题查看调试查看的安装路径和一开始指定的是否一致</span>
    <span class="token comment"># RUN echo &quot;JAVA_HOME=$(dirname $(dirname $(readlink -f $(which java))))&quot; &gt;&gt; /etc/environment # 自动获取 JAVA_HOME</span>
    <span class="token comment"># RUN source /etc/environment # 使用新的 JAVA_HOME 环境变量</span>
    <span class="token comment"># ENV JAVA_HOME=$(dirname $(dirname $(readlink -f $(which java)))) # 自动获取 JAVA_HOME</span>

<span class="token comment"># SDK部分</span>
<span class="token instruction"><span class="token keyword">ENV</span> ANDROID_HOME /opt/android-sdk</span>
<span class="token instruction"><span class="token keyword">RUN</span> wget https://dl.google.com/android/repository/commandlinetools-linux-10406996_latest.zip -P /tmp # 下载</span>
    <span class="token comment"># 应该对应的 33.0.0？ 链接可在https://developer.android.com/studio?hl=zh-cn底部找到</span>
<span class="token instruction"><span class="token keyword">RUN</span> mkdir -p <span class="token variable">\${ANDROID_HOME}</span>/cmdline-tools/lastest/</span>
<span class="token instruction"><span class="token keyword">RUN</span> mkdir -p <span class="token variable">\${ANDROID_HOME}</span>/tmp</span>
<span class="token instruction"><span class="token keyword">RUN</span> unzip -d <span class="token variable">\${ANDROID_HOME}</span>/tmp/ /tmp/commandlinetools-*.zip # 解压</span>
<span class="token instruction"><span class="token keyword">RUN</span> mv <span class="token variable">\${ANDROID_HOME}</span>/tmp/cmdline-tools/* <span class="token variable">\${ANDROID_HOME}</span>/cmdline-tools/lastest/</span>
	<span class="token comment"># 解压。这里有点怪，原压缩包是没latest路径的，但要解压时要多一层latest，否则sdkmanager不认</span>
	<span class="token comment"># 原压缩包内容：/cmdline-tools/bin</span>
	<span class="token comment"># 但sdkmanager会去找：/cmdline-tools/latest/bin</span>
<span class="token instruction"><span class="token keyword">ENV</span> PATH <span class="token variable">\${ANDROID_HOME}</span>/cmdline-tools/lastest/bin:<span class="token variable">\${PATH}</span> # 配置环境变量</span>
<span class="token instruction"><span class="token keyword">RUN</span> yes | <span class="token variable">\${ANDROID_HOME}</span>/cmdline-tools/lastest/bin/sdkmanager --licenses # 同意 Android SDK 许可协议</span>
<span class="token instruction"><span class="token keyword">RUN</span> <span class="token variable">\${ANDROID_HOME}</span>/cmdline-tools/lastest/bin/sdkmanager --version # 验证 Android SDK 版本</span>

<span class="token comment"># Gradle部分</span>
<span class="token instruction"><span class="token keyword">ENV</span> GRADLE_VERSION 8.0</span>
<span class="token instruction"><span class="token keyword">ENV</span> GRADLE_HOME /opt/gradle</span>
<span class="token instruction"><span class="token keyword">RUN</span> wget https://services.gradle.org/distributions/gradle-<span class="token variable">\${GRADLE_VERSION}</span>-bin.zip -P /tmp # 下载</span>
<span class="token instruction"><span class="token keyword">RUN</span> unzip -d /opt/gradle /tmp/gradle-*.zip # 解压</span>
<span class="token instruction"><span class="token keyword">ENV</span> PATH <span class="token variable">\${GRADLE_HOME}</span>/gradle-<span class="token variable">\${GRADLE_VERSION}</span>/bin:<span class="token variable">\${PATH}</span> # 配置环境变量</span>
<span class="token instruction"><span class="token keyword">RUN</span> gradle -v # 验证 Gradle 版本: 8.0</span>

<span class="token comment"># 清理缓存</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get clean &amp;&amp; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*</span>
<span class="token comment"># 设置工作目录</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token comment"># 默认命令</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;bash&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker build --no-cache -t msy/android:jdk17 .</p><p>小技巧，整个过程非常长，SDK和Gradle可交换，可以将容易失败的部分往上移，快速调试。</p><h4 id="自用android-windows-shell" tabindex="-1"><a class="header-anchor" href="#自用android-windows-shell"><span>自用android（windows shell）</span></a></h4><p>差不多，能用AndroidStudio的话环境基本都齐。需要特别注意的是：</p><p>/local.properties</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sdk.dir=C\\:\\\\Users\\\\msy\\\\Desktop\\\\AndroidSDK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个本地的路径可能不能被 runner 访问，要添加环境：</p><p>Git Runner的环境变量可以在其配置文件中设置。Git Runner的配置文件通常位于</p><ul><li><code>/etc/gitlab-runner/config.toml</code>（Linux）</li><li><code>C:\\GitLab-Runner\\config.toml</code>（Windows）。</li></ul><p>你可以按照以下步骤来设置<code>ANDROID_HOME</code>环境变量：</p><ol><li><p>打开Git Runner的配置文件。你可能需要使用管理员权限来编辑这个文件。</p></li><li><p>在<code>[[runners]]</code>部分添加<code>environment</code>字段，如下所示：</p><div class="language-toml line-numbers-mode" data-ext="toml" data-title="toml"><pre class="language-toml"><code><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token table class-name">runners</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
  <span class="token key property">environment</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;ANDROID_HOME=C:\\\\Users\\\\msy\\\\Desktop\\\\AndroidSDK&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意你需要将<code>C:\\\\Users\\\\msy\\\\Desktop\\\\AndroidSDK</code>替换为你的Android SDK的实际路径。</p></li><li><p>保存并关闭配置文件。</p></li><li><p>重启Git Runner以使新的配置生效。你可以在命令行中运行以下命令来重启Git Runner：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>gitlab-runner restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>`,35);function h(f,y){const a=l("ExternalLinkIcon");return p(),c("div",null,[d,n("ul",null,[u,n("li",null,[s("conda3 "),n("s",null,[n("a",v,[s("2023.09-0-Linux-x86_64"),e(a)])]),s(),n("a",m,[s("mini版"),e(a)])]),k,b]),g])}const x=t(o,[["render",h],["__file","index.html.vue"]]),D=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Virtual/%E8%99%9A%E6%8B%9F%E6%9C%BA/Docker/%E5%A5%BD%E7%94%A8%E7%9A%84Docker%E9%95%9C%E5%83%8F/","title":"好用的Docker镜像","lang":"zh-CN","frontmatter":{"description":"好用的Docker镜像 资料 找镜像的地方 https://hub.docker.com/ 优秀镜像 存储类 nextcloud： ftp (调研中) ？，https://hub.docker.com/r/delfer/alpine-ftp-server 清华大学ftp，tunathu/ftpsync 中科大ftp，ustclug/ftp，（USTC，...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Virtual/%E8%99%9A%E6%8B%9F%E6%9C%BA/Docker/%E5%A5%BD%E7%94%A8%E7%9A%84Docker%E9%95%9C%E5%83%8F/"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"好用的Docker镜像"}],["meta",{"property":"og:description","content":"好用的Docker镜像 资料 找镜像的地方 https://hub.docker.com/ 优秀镜像 存储类 nextcloud： ftp (调研中) ？，https://hub.docker.com/r/delfer/alpine-ftp-server 清华大学ftp，tunathu/ftpsync 中科大ftp，ustclug/ftp，（USTC，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"好用的Docker镜像\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"好用的Docker镜像","slug":"好用的docker镜像","link":"#好用的docker镜像","children":[{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]},{"level":2,"title":"管理类","slug":"管理类","link":"#管理类","children":[{"level":3,"title":"portainer","slug":"portainer","link":"#portainer","children":[]},{"level":3,"title":"docker registry","slug":"docker-registry","link":"#docker-registry","children":[]}]},{"level":2,"title":"仓库类 - ftp","slug":"仓库类-ftp","link":"#仓库类-ftp","children":[{"level":3,"title":"ustclug ftp","slug":"ustclug-ftp","link":"#ustclug-ftp","children":[]},{"level":3,"title":"stilliard/pure-ftpd","slug":"stilliard-pure-ftpd","link":"#stilliard-pure-ftpd","children":[]},{"level":3,"title":"fauria/vsftpd","slug":"fauria-vsftpd","link":"#fauria-vsftpd","children":[{"level":4,"title":"权限管理","slug":"权限管理","link":"#权限管理","children":[]}]},{"level":3,"title":"atmoz/sftp","slug":"atmoz-sftp","link":"#atmoz-sftp","children":[]}]},{"level":2,"title":"仓库类 - 静态页面","slug":"仓库类-静态页面","link":"#仓库类-静态页面","children":[{"level":3,"title":"nginx","slug":"nginx","link":"#nginx","children":[]},{"level":3,"title":"systemd + python","slug":"systemd-python","link":"#systemd-python","children":[]}]},{"level":2,"title":"仓库类 - 云盘gui","slug":"仓库类-云盘gui","link":"#仓库类-云盘gui","children":[{"level":3,"title":"nextcloud","slug":"nextcloud","link":"#nextcloud","children":[]}]},{"level":2,"title":"仓库类 - 特殊","slug":"仓库类-特殊","link":"#仓库类-特殊","children":[{"level":3,"title":"gitlab","slug":"gitlab","link":"#gitlab","children":[{"level":4,"title":"部署","slug":"部署","link":"#部署","children":[]},{"level":4,"title":"其他设置","slug":"其他设置","link":"#其他设置","children":[]},{"level":4,"title":"端口号bug","slug":"端口号bug","link":"#端口号bug","children":[]},{"level":4,"title":"管理员","slug":"管理员","link":"#管理员","children":[]}]},{"level":3,"title":"gitlab-runner","slug":"gitlab-runner","link":"#gitlab-runner","children":[{"level":4,"title":"镜像版安装","slug":"镜像版安装","link":"#镜像版安装","children":[]},{"level":4,"title":"普通版安装","slug":"普通版安装","link":"#普通版安装","children":[]},{"level":4,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":4,"title":"设置","slug":"设置","link":"#设置","children":[]}]}]},{"level":2,"title":"专题 - GitLab CICD","slug":"专题-gitlab-cicd","link":"#专题-gitlab-cicd","children":[{"level":3,"title":"比较Jenkins","slug":"比较jenkins","link":"#比较jenkins","children":[]},{"level":3,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":3,"title":"步骤 - 使用","slug":"步骤-使用","link":"#步骤-使用","children":[]},{"level":3,"title":"步骤 - 注册","slug":"步骤-注册","link":"#步骤-注册","children":[]},{"level":3,"title":"补充 - 其他参数","slug":"补充-其他参数","link":"#补充-其他参数","children":[]},{"level":3,"title":"补充 - 其他命令","slug":"补充-其他命令","link":"#补充-其他命令","children":[]},{"level":3,"title":"并发数设置","slug":"并发数设置","link":"#并发数设置","children":[]}]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[]},{"level":2,"title":"自定义DockerFile","slug":"自定义dockerfile","link":"#自定义dockerfile","children":[{"level":3,"title":"自用gcc","slug":"自用gcc","link":"#自用gcc","children":[{"level":4,"title":"自用gcc4.8","slug":"自用gcc4-8","link":"#自用gcc4-8","children":[]},{"level":4,"title":"自用gcc11","slug":"自用gcc11","link":"#自用gcc11","children":[]}]},{"level":3,"title":"自用node","slug":"自用node","link":"#自用node","children":[]},{"level":3,"title":"自用python","slug":"自用python","link":"#自用python","children":[{"level":4,"title":"自用conda (Debian)","slug":"自用conda-debian","link":"#自用conda-debian","children":[]},{"level":4,"title":"自用conda (公司)","slug":"自用conda-公司","link":"#自用conda-公司","children":[]},{"level":4,"title":"自己用flask pyServer服务","slug":"自己用flask-pyserver服务","link":"#自己用flask-pyserver服务","children":[]}]},{"level":3,"title":"自用android","slug":"自用android","link":"#自用android","children":[{"level":4,"title":"自用android (旧版本，失败)","slug":"自用android-旧版本-失败","link":"#自用android-旧版本-失败","children":[]},{"level":4,"title":"自用android (新)","slug":"自用android-新","link":"#自用android-新","children":[]},{"level":4,"title":"自用android（公司，成功但版本不对）","slug":"自用android-公司-成功但版本不对","link":"#自用android-公司-成功但版本不对","children":[]},{"level":4,"title":"自用android（公司，成功）","slug":"自用android-公司-成功","link":"#自用android-公司-成功","children":[]},{"level":4,"title":"自用android（windows shell）","slug":"自用android-windows-shell","link":"#自用android-windows-shell","children":[]}]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":27.07,"words":8121},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Virtual/虚拟机/Docker/好用的Docker镜像/README.md","autoDesc":true}');export{x as comp,D as data};

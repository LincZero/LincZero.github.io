import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as e}from"./app-CyJMR3JQ.js";const t={},i=e(`<h3 id="部署gpt" tabindex="-1"><a class="header-anchor" href="#部署gpt"><span>部署gpt</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 检查</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token comment"># 查看原有容器，没有对应的容器</span>
<span class="token function">docker</span> image <span class="token function">ls</span> <span class="token comment"># 查看原有镜像，没有对应的镜像，要自己下载</span>

<span class="token comment"># 准备镜像</span>
<span class="token function">docker</span> pull node:latest <span class="token comment"># 下载node镜像，该命令通过 docker hub 获取</span>
<span class="token function">docker</span> search <span class="token function">node</span> <span class="token comment"># 查看是否安装成功</span>
<span class="token function">docker</span> image <span class="token comment"># 查看是否安装成功</span>

<span class="token comment"># 准备容器</span>
<span class="token comment"># docker run -itd --name gpt node # 使用node镜像创建gpt容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">4000</span>:4000 <span class="token parameter variable">-itd</span> <span class="token parameter variable">--name</span> gpt <span class="token function">node</span> <span class="token comment"># (最好在这一步暴露端口先)</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token comment"># 查看是否创建新容器成功（加-a可以看到已停止的容器）</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> gpt /bin/bash <span class="token comment"># 测试:进入容器</span>
								<span class="token comment"># -it 是 -i交互式 -t终端 的意思</span>
								<span class="token comment"># /bin/bash 是在容器中执行的命令，bash允许与容器进行交互</span>
								<span class="token comment"># 还有一种更简短的写法：docker attach gpt，但这个不易于进行交互操作</span>
<span class="token builtin class-name">exec</span> <span class="token comment"># 或Ctrl+D，测试:退出容器</span>

<span class="token comment"># docker中运行程序</span>
<span class="token function">docker</span> <span class="token function">cp</span> <span class="token string">&#39;PatrikZeros-ChatGPT-API-UI 230511&#39;</span> gpt:/home/gpt <span class="token comment"># 拷贝代码到容器中 (宿主机到docker)</span>
<span class="token punctuation">..</span>. <span class="token comment"># 进入代码位置</span>
<span class="token function">npm</span> i pm2 <span class="token parameter variable">-g</span> <span class="token comment"># 先下载pm2</span>
pm2 start e<span class="token punctuation">..</span>. <span class="token comment"># 运行程序</span>
pm2 list <span class="token comment"># 检查运行情况</span>


<span class="token comment"># 暴露端口</span>
<span class="token comment"># 多种方法</span>
<span class="token comment"># 1. 创建容器时可以指定，但我们已经创建过了。后来还是选择删除容器重新创建</span>
<span class="token comment">#     docker rm gpt</span>
<span class="token comment">#     docker run -p 4000:4000 -itd --name gpt node</span>
<span class="token comment"># 2. dockerfile配置，EXPOSE，但我们没用dockerfile文件</span>
<span class="token comment"># 3. 好像不管用</span>
<span class="token comment">#     iptables -t nat -A DOCKER -p tcp --dport 4000 -j DNAT --to-destination 172.17.0.5:4000 # 添加端口映射</span>
<span class="token comment">#     iptables -t nat -A POSTROUTING -j DOCKER</span>
<span class="token comment">#     iptables -t nat -vnL # 检查是否映射成功</span>

<span class="token comment"># 开机自启</span>
pm2 save <span class="token comment"># 这是将pm2正在运行的列表设置为开机自启项，如果是非pm2要用其他方法。不过好像无效就是了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="公司的几个服务" tabindex="-1"><a class="header-anchor" href="#公司的几个服务"><span>公司的几个服务</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>portainer <span class="token comment"># Image: portainer/portainer-ce. port: 9000. 相当于web版的docker desktop</span>
Jenkins <span class="token comment"># Image: jenkins/jenkins:lts-jdk11. port: 50000,8999</span>
gitlab <span class="token comment"># Image: gitlab/gitlab-ce. port: 222 443 80</span>
gpt <span class="token comment"># Image: node. port: 4000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自启动相关" tabindex="-1"><a class="header-anchor" href="#自启动相关"><span>自启动相关</span></a></h3><p>linux开机自启动指定docker，制定docker开机自启动 <code>pm2 start ee.cjs</code> 命令</p><p>首先，确保 Docker 守护进程已设置为开机自启动。在大多数 Linux 发行版上，这可以通过以下命令实现：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 <code>docker run</code> 命令来创建您的 Docker 容器。在此命令中包含 <code>--restart=always</code> 选项，以便容器在每次系统启动时自动启动。另外，使用 <code>-d</code> 选项以分离模式运行容器：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> your_container_name <span class="token parameter variable">--restart</span><span class="token operator">=</span>always your_image_name
<span class="token comment"># 用您的实际容器名和镜像名替换 your_container_name 和 your_image_name</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Docker 容器内部设置 <code>ee.cjs</code> 的开机自启动。要绑定容器内的 PM2 与宿主机的开机启动进程，您可以使用以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> your_container_name pm2 start ee.cjs
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> your_container_name pm2 save
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> your_container_name pm2 startup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些命令将在容器内部使用 <code>pm2</code> 来运行 <code>ee.cjs</code> 文件集合、保存当前进程列表，以及生成系统服务的启动脚本。</p><p>现在，每次您的 Linux 系统启动时，Docker 容器应自动启动，容器内的 PM2 进程也会自动运行 <code>ee.cjs</code> 命令。</p><h3 id="dockerfile-方式" tabindex="-1"><a class="header-anchor" href="#dockerfile-方式"><span>DockerFile 方式</span></a></h3><p>新</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token comment"># 运行建议：</span>
<span class="token comment"># 1. docker build -t gpt-next-web3 .</span>
<span class="token comment"># 2. docker run -d --restart=always -p 8000:3000 --name gpt-next-web gpt-next-web3</span>

<span class="token comment"># 基础镜像</span>
<span class="token instruction"><span class="token keyword">FROM</span> node:18-alpine</span>

<span class="token comment"># 安装pm2</span>
<span class="token instruction"><span class="token keyword">RUN</span> npm install -g pm2</span>

<span class="token comment"># 设置工作目录</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token comment"># 复制项目文件</span>
<span class="token instruction"><span class="token keyword">COPY</span> . .</span>

<span class="token comment"># 安装依赖</span>
<span class="token instruction"><span class="token keyword">RUN</span> npm install</span>

<span class="token comment"># 暴露端口（如果你的应用需要的话）</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 3000</span>

<span class="token comment"># 运行应用</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;pm2-runtime&quot;</span>, <span class="token string">&quot;npm&quot;</span>, <span class="token string">&quot;--&quot;</span>, <span class="token string">&quot;run&quot;</span>, <span class="token string">&quot;dev&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>老</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> node:18-alpine <span class="token keyword">AS</span> base</span>

<span class="token instruction"><span class="token keyword">FROM</span> base <span class="token keyword">AS</span> deps</span>

<span class="token instruction"><span class="token keyword">RUN</span> apk add --no-cache libc6-compat</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token instruction"><span class="token keyword">COPY</span> package.json yarn.lock ./</span>

<span class="token instruction"><span class="token keyword">RUN</span> yarn config set registry <span class="token string">&#39;https://registry.npmmirror.com/&#39;</span></span>
<span class="token instruction"><span class="token keyword">RUN</span> yarn install</span>

<span class="token instruction"><span class="token keyword">FROM</span> base <span class="token keyword">AS</span> builder</span>

<span class="token instruction"><span class="token keyword">RUN</span> apk update &amp;&amp; apk add --no-cache git</span>

<span class="token instruction"><span class="token keyword">ENV</span> OPENAI_API_KEY=<span class="token string">&quot;&quot;</span></span>
<span class="token instruction"><span class="token keyword">ENV</span> CODE=<span class="token string">&quot;&quot;</span></span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">deps</span></span> /app/node_modules ./node_modules</span>
<span class="token instruction"><span class="token keyword">COPY</span> . .</span>

<span class="token instruction"><span class="token keyword">RUN</span> yarn build</span>

<span class="token instruction"><span class="token keyword">FROM</span> base <span class="token keyword">AS</span> runner</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token instruction"><span class="token keyword">RUN</span> apk add proxychains-ng</span>

<span class="token instruction"><span class="token keyword">ENV</span> PROXY_URL=<span class="token string">&quot;&quot;</span></span>
<span class="token instruction"><span class="token keyword">ENV</span> OPENAI_API_KEY=<span class="token string">&quot;&quot;</span></span>
<span class="token instruction"><span class="token keyword">ENV</span> CODE=<span class="token string">&quot;&quot;</span></span>

<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">builder</span></span> /app/public ./public</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">builder</span></span> /app/.next/standalone ./</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">builder</span></span> /app/.next/static ./.next/static</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">builder</span></span> /app/.next/server ./.next/server</span>

<span class="token instruction"><span class="token keyword">EXPOSE</span> 3000</span>

<span class="token instruction"><span class="token keyword">CMD</span> if [ -n <span class="token string">&quot;$PROXY_URL&quot;</span> ]; then <span class="token operator">\\</span>
        export HOSTNAME=<span class="token string">&quot;127.0.0.1&quot;</span>; <span class="token operator">\\</span>
        protocol=$(echo <span class="token variable">$PROXY_URL</span> | cut -d: -f1); <span class="token operator">\\</span>
        host=$(echo <span class="token variable">$PROXY_URL</span> | cut -d/ -f3 | cut -d: -f1); <span class="token operator">\\</span>
        port=$(echo <span class="token variable">$PROXY_URL</span> | cut -d: -f3); <span class="token operator">\\</span>
        conf=/etc/proxychains.conf; <span class="token operator">\\</span>
        echo <span class="token string">&quot;strict_chain&quot;</span> &gt; <span class="token variable">$conf</span>; <span class="token operator">\\</span>
        echo <span class="token string">&quot;proxy_dns&quot;</span> &gt;&gt; <span class="token variable">$conf</span>; <span class="token operator">\\</span>
        echo <span class="token string">&quot;remote_dns_subnet 224&quot;</span> &gt;&gt; <span class="token variable">$conf</span>; <span class="token operator">\\</span>
        echo <span class="token string">&quot;tcp_read_time_out 15000&quot;</span> &gt;&gt; <span class="token variable">$conf</span>; <span class="token operator">\\</span>
        echo <span class="token string">&quot;tcp_connect_time_out 8000&quot;</span> &gt;&gt; <span class="token variable">$conf</span>; <span class="token operator">\\</span>
        echo <span class="token string">&quot;localnet 127.0.0.0/255.0.0.0&quot;</span> &gt;&gt; <span class="token variable">$conf</span>; <span class="token operator">\\</span>
        echo <span class="token string">&quot;localnet ::1/128&quot;</span> &gt;&gt; <span class="token variable">$conf</span>; <span class="token operator">\\</span>
        echo <span class="token string">&quot;[ProxyList]&quot;</span> &gt;&gt; <span class="token variable">$conf</span>; <span class="token operator">\\</span>
        echo <span class="token string">&quot;$protocol $host $port&quot;</span> &gt;&gt; <span class="token variable">$conf</span>; <span class="token operator">\\</span>
        cat /etc/proxychains.conf; <span class="token operator">\\</span>
        proxychains -f <span class="token variable">$conf</span> node server.js; <span class="token operator">\\</span>
    else <span class="token operator">\\</span>
        node server.js; <span class="token operator">\\</span>
    fi</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> gpt-next-web <span class="token builtin class-name">.</span>
<span class="token comment"># 后面好像有bug，说权限问题，要新增这个：--network host</span>

<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">4000</span>:3000 <span class="token punctuation">\\</span>
	<span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
	<span class="token parameter variable">--name</span> gpt <span class="token punctuation">\\</span>
   <span class="token parameter variable">-e</span> <span class="token assign-left variable">OPENAI_API_KEY</span><span class="token operator">=</span>sk-xxxx <span class="token punctuation">\\</span>
   <span class="token parameter variable">-e</span> <span class="token assign-left variable">CODE</span><span class="token operator">=</span>页面访问密码 <span class="token punctuation">\\</span>
   yidadaa/chatgpt-next-web
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),c=[i];function o(l,p){return s(),a("div",null,c)}const u=n(t,[["render",o],["__file","实战 - 公司 docker 部署 gpt.html.vue"]]),k=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Virtual/%E8%99%9A%E6%8B%9F%E6%9C%BA/Docker/%E5%AE%9E%E6%88%98/%E5%AE%9E%E6%88%98%20-%20%E5%85%AC%E5%8F%B8%20docker%20%E9%83%A8%E7%BD%B2%20gpt.html","title":"","lang":"zh-CN","frontmatter":{"description":"部署gpt 公司的几个服务 自启动相关 linux开机自启动指定docker，制定docker开机自启动 pm2 start ee.cjs 命令 首先，确保 Docker 守护进程已设置为开机自启动。在大多数 Linux 发行版上，这可以通过以下命令实现： 使用 docker run 命令来创建您的 Docker 容器。在此命令中包含 --restar...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Virtual/%E8%99%9A%E6%8B%9F%E6%9C%BA/Docker/%E5%AE%9E%E6%88%98/%E5%AE%9E%E6%88%98%20-%20%E5%85%AC%E5%8F%B8%20docker%20%E9%83%A8%E7%BD%B2%20gpt.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"部署gpt 公司的几个服务 自启动相关 linux开机自启动指定docker，制定docker开机自启动 pm2 start ee.cjs 命令 首先，确保 Docker 守护进程已设置为开机自启动。在大多数 Linux 发行版上，这可以通过以下命令实现： 使用 docker run 命令来创建您的 Docker 容器。在此命令中包含 --restar..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":3,"title":"部署gpt","slug":"部署gpt","link":"#部署gpt","children":[]},{"level":3,"title":"公司的几个服务","slug":"公司的几个服务","link":"#公司的几个服务","children":[]},{"level":3,"title":"自启动相关","slug":"自启动相关","link":"#自启动相关","children":[]},{"level":3,"title":"DockerFile 方式","slug":"dockerfile-方式","link":"#dockerfile-方式","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.7,"words":1110},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Virtual/虚拟机/Docker/实战/实战 - 公司 docker 部署 gpt.md","autoDesc":true}');export{u as comp,k as data};

import{_ as l,c as p,e as a,a as n,d as s,o as i}from"./app-DaW0uU2l.js";const r={};function t(o,e){return i(),p("div",null,e[0]||(e[0]=[a('<h1 id="vuepress-升级、更新、依赖" tabindex="-1"><a class="header-anchor" href="#vuepress-升级、更新、依赖"><span>VuePress 升级、更新、依赖</span></a></h1><h2 id="代理问题" tabindex="-1"><a class="header-anchor" href="#代理问题"><span>代理问题</span></a></h2><p>注意 <code>pnpm dlx vp-update</code> 命令与 <code>pnpm install ...</code> 命令不同：无法使用 <code>--registry</code> 选项：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">pnpm</span> dlx vp-update <span class="token parameter variable">--registry</span> https://registry.npmmirror.com/                         \n WARN  GET https://registry.npmjs.org/semver error <span class="token punctuation">(</span>ECONNRESET<span class="token punctuation">)</span>. Will retry <span class="token keyword">in</span> <span class="token number">10</span> seconds. <span class="token number">2</span> retries left.\nPackages: +3\n+++\nProgress: resolved <span class="token number">3</span>, reused <span class="token number">3</span>, downloaded <span class="token number">0</span>, added <span class="token number">3</span>, <span class="token keyword">done</span>\nfile:///C:/Users/76269/AppData/Local/pnpm-cache/dlx/taf3ilq7ai6qndt6j7t5qja34i/19443a7b85d-2998/node_modules/.pnpm/cac@6.7.14/node_modules/cac/dist/index.mjs:400\n          throw new CACError<span class="token punctuation">(</span><span class="token variable"><span class="token variable">`</span>Unknown option <span class="token punctuation">\\</span><span class="token variable">`</span></span><span class="token variable">${name.length &gt; 1 ? `--${name}</span><span class="token variable"><span class="token variable">`</span> <span class="token builtin class-name">:</span> <span class="token variable">`</span></span>-<span class="token variable">${name}</span><span class="token variable"><span class="token variable">`</span><span class="token punctuation">}</span><span class="token punctuation">\\</span><span class="token variable">`</span></span><span class="token variable"><span class="token variable">`</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                ^\n\nCACError: Unknown option <span class="token variable">`</span></span>--registry`\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代替方式是：</p><ul><li>要么设置环境变量，全局生效</li><li>要么增加npm配置环境</li></ul><p>这里我选择了后者：</p>',7),n("div",{class:"ab-note drop-shadow"},[n("div",{class:"ab-deco-title"},[n("div",{class:"ab-deco-title-title","title-type":"none"},[n("p",null," .npmrc")]),n("div",{class:"ab-deco-title-content"},[n("div",{class:"markdown-rendered"},[n("div",null,[n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 设置全局代理，如果你不需要，可以注释掉该文件"),s(`

`),n("span",{class:"token comment"},"# .npmrc 文件内容"),s(`
`),n("span",{class:"token comment"},"# proxy=http://proxy.example.com:8080"),s(`
`),n("span",{class:"token comment"},"# https-proxy=http://proxy.example.com:8080"),s(`
`),n("span",{class:"token assign-left variable"},"registry"),n("span",{class:"token operator"},"="),s(`https://registry.npmmirror.com/

`),n("span",{class:"token comment"},"# 可使用以下命令验证:"),s(`
`),n("span",{class:"token comment"},"# pnpm config get proxy"),s(`
`),n("span",{class:"token comment"},"# pnpm config get https-proxy"),s(`
`),n("span",{class:"token comment"},"# pnpm config get registry # 原 https://registry.npmjs.org/ 代理 https://registry.npmmirror.com/"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])])])])])],-1),a(`<h2 id="记录一个更新过程" tabindex="-1"><a class="header-anchor" href="#记录一个更新过程"><span>记录一个更新过程</span></a></h2><p>（版本跨得有点远）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">pnpm</span> dlx vp-update         
Packages: +3
+++
Progress: resolved <span class="token number">3</span>, reused <span class="token number">3</span>, downloaded <span class="token number">0</span>, added <span class="token number">3</span>, <span class="token keyword">done</span>
Bumping deps<span class="token punctuation">..</span>.
<span class="token string">&quot;@vuepress/utils&quot;</span>is deprecated, please remove it from your dependencies and <span class="token function">import</span> <span class="token string">&quot;vuepress/utils&quot;</span> from <span class="token string">&quot;vuepress&quot;</span> directly.
Install deps<span class="token punctuation">..</span>.

   ╭──────────────────────────────────────────────────────────────────╮
   │                                                                  │
   │                Update available<span class="token operator">!</span> <span class="token number">9.12</span>.2 → <span class="token number">9.15</span>.3.                │
   │   Changelog: https://github.com/pnpm/pnpm/releases/tag/v9.15.3   │
   │                Run <span class="token string">&quot;pnpm self-update&quot;</span> to update.                 │
   │                                                                  │
   │         Follow @pnpmjs <span class="token keyword">for</span> updates: https://x.com/pnpmjs         │
   │                                                                  │
   ╰──────────────────────────────────────────────────────────────────╯

Packages: +240 <span class="token parameter variable">-32</span>
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-------------------------
Progress: resolved <span class="token number">664</span>, reused <span class="token number">418</span>, downloaded <span class="token number">181</span>, added <span class="token number">240</span>, <span class="token keyword">done</span>
node_modules/.pnpm/esbuild@0.24.2/node_modules/esbuild: Running postinstall script, <span class="token keyword">done</span> <span class="token keyword">in</span> 485ms
node_modules/.pnpm/vue-demi@0.14.7_vue@3.5.13/node_modules/vue-demi: Running postinstall script, <span class="token keyword">done</span> <span class="token keyword">in</span> 325ms

devDependencies:
- @vuepress/bundler-vite <span class="token number">2.0</span>.0-rc.8
+ @vuepress/bundler-vite <span class="token number">2.0</span>.0-rc.19
- @vuepress/plugin-docsearch <span class="token number">2.0</span>.0-rc.21
+ @vuepress/plugin-docsearch <span class="token number">2.0</span>.0-rc.69
- @vuepress/utils <span class="token number">2.0</span>.0-rc.2
+ @vuepress/utils <span class="token number">2.0</span>.0-rc.19
- vue <span class="token number">3.4</span>.21
+ vue <span class="token number">3.5</span>.13
- vuepress <span class="token number">2.0</span>.0-rc.8
+ vuepress <span class="token number">2.0</span>.0-rc.19
- vuepress-theme-hope <span class="token number">2.0</span>.0-rc.31
+ vuepress-theme-hope <span class="token number">2.0</span>.0-rc.67

 WARN  Issues with peer dependencies found
<span class="token builtin class-name">.</span>
├─┬ vuepress-theme-hope <span class="token number">2.0</span>.0-rc.67
│ ├─┬ @vuepress/plugin-markdown-math <span class="token number">2.0</span>.0-rc.69
│ │ └── ✕ unmet peer katex@^0.16.10: found <span class="token number">0.16</span>.9
│ └─┬ vuepress-plugin-md-enhance <span class="token number">2.0</span>.0-rc.67
│   └── ✕ unmet peer mermaid@^11.2.0: found <span class="token number">10.9</span>.1
└─┬ @vuepress/helper <span class="token number">2.0</span>.0-rc.19
  └── ✕ unmet peer vuepress@2.0.0-rc.8: found <span class="token number">2.0</span>.0-rc.19

Done <span class="token keyword">in</span> <span class="token number">12</span>.1s
Upgrading deps<span class="token punctuation">..</span>.
Packages: +82
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved <span class="token number">654</span>, reused <span class="token number">566</span>, downloaded <span class="token number">23</span>, added <span class="token number">82</span>, <span class="token keyword">done</span>
node_modules/.pnpm/vue-demi@0.14.10_vue@3.5.13/node_modules/vue-demi: Running postinstall script, <span class="token keyword">done</span> <span class="token keyword">in</span> 277ms

dependencies:
- @vue-flow/background <span class="token number">1.3</span>.0
+ @vue-flow/background <span class="token number">1.3</span>.2
- @vue-flow/core <span class="token number">1.41</span>.2
+ @vue-flow/core <span class="token number">1.41</span>.7
- katex <span class="token number">0.16</span>.9
+ katex <span class="token number">0.16</span>.19
- mermaid <span class="token number">10.9</span>.1
+ mermaid <span class="token number">10.9</span>.3 <span class="token punctuation">(</span><span class="token number">11.4</span>.1 is available<span class="token punctuation">)</span>

devDependencies:
- @vueuse/core <span class="token number">10.9</span>.0
+ @vueuse/core <span class="token number">10.11</span>.1 <span class="token punctuation">(</span><span class="token number">12.3</span>.0 is available<span class="token punctuation">)</span>
- jsdom <span class="token number">24.1</span>.1
+ jsdom <span class="token number">24.1</span>.3 <span class="token punctuation">(</span><span class="token number">25.0</span>.1 is available<span class="token punctuation">)</span>

 WARN  Issues with peer dependencies found
<span class="token builtin class-name">.</span>
├─┬ vuepress-theme-hope <span class="token number">2.0</span>.0-rc.67
│ └─┬ vuepress-plugin-md-enhance <span class="token number">2.0</span>.0-rc.67
│   └── ✕ unmet peer mermaid@^11.2.0: found <span class="token number">10.9</span>.3
└─┬ @vuepress/helper <span class="token number">2.0</span>.0-rc.19
  └── ✕ unmet peer vuepress@2.0.0-rc.8: found <span class="token number">2.0</span>.0-rc.19

Done <span class="token keyword">in</span> <span class="token number">6</span>.3s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const d=l(r,[["render",t],["__file","VuePress Update.html.vue"]]),u=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Type/Doc/MarkdwonAbout/01.%20Soft%20And%20Frame/VuePress2%20(Vue3)/09.%20%E5%85%B6%E4%BB%96/VuePress%20Update.html","title":"VuePress 升级、更新、依赖","lang":"zh-CN","frontmatter":{"description":"VuePress 升级、更新、依赖 代理问题 注意 pnpm dlx vp-update 命令与 pnpm install ... 命令不同：无法使用 --registry 选项： 代替方式是： 要么设置环境变量，全局生效 要么增加npm配置环境 这里我选择了后者： .npmrc记录一个更新过程 （版本跨得有点远）","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Type/Doc/MarkdwonAbout/01.%20Soft%20And%20Frame/VuePress2%20(Vue3)/09.%20%E5%85%B6%E4%BB%96/VuePress%20Update.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"VuePress 升级、更新、依赖"}],["meta",{"property":"og:description","content":"VuePress 升级、更新、依赖 代理问题 注意 pnpm dlx vp-update 命令与 pnpm install ... 命令不同：无法使用 --registry 选项： 代替方式是： 要么设置环境变量，全局生效 要么增加npm配置环境 这里我选择了后者： .npmrc记录一个更新过程 （版本跨得有点远）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"VuePress 升级、更新、依赖\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"VuePress 升级、更新、依赖","slug":"vuepress-升级、更新、依赖","link":"#vuepress-升级、更新、依赖","children":[{"level":2,"title":"代理问题","slug":"代理问题","link":"#代理问题","children":[]},{"level":2,"title":"记录一个更新过程","slug":"记录一个更新过程","link":"#记录一个更新过程","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.6,"words":479},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Doc/MarkdwonAbout/01. Soft And Frame/VuePress2 (Vue3)/09. 其他/VuePress Update.md","excerpt":"\\n<h2>代理问题</h2>\\n<p>注意 <code>pnpm dlx vp-update</code> 命令与 <code>pnpm install ...</code> 命令不同：无法使用 <code>--registry</code> 选项：</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token operator\\">&gt;</span> <span class=\\"token function\\">pnpm</span> dlx vp-update <span class=\\"token parameter variable\\">--registry</span> https://registry.npmmirror.com/                         \\n WARN  GET https://registry.npmjs.org/semver error <span class=\\"token punctuation\\">(</span>ECONNRESET<span class=\\"token punctuation\\">)</span>. Will retry <span class=\\"token keyword\\">in</span> <span class=\\"token number\\">10</span> seconds. <span class=\\"token number\\">2</span> retries left.\\nPackages: +3\\n+++\\nProgress: resolved <span class=\\"token number\\">3</span>, reused <span class=\\"token number\\">3</span>, downloaded <span class=\\"token number\\">0</span>, added <span class=\\"token number\\">3</span>, <span class=\\"token keyword\\">done</span>\\nfile:///C:/Users/76269/AppData/Local/pnpm-cache/dlx/taf3ilq7ai6qndt6j7t5qja34i/19443a7b85d-2998/node_modules/.pnpm/cac@6.7.14/node_modules/cac/dist/index.mjs:400\\n          throw new CACError<span class=\\"token punctuation\\">(</span><span class=\\"token variable\\"><span class=\\"token variable\\">`</span>Unknown option <span class=\\"token punctuation\\">\\\\</span><span class=\\"token variable\\">`</span></span><span class=\\"token variable\\">${name.length &gt; 1 ? `--${name}</span><span class=\\"token variable\\"><span class=\\"token variable\\">`</span> <span class=\\"token builtin class-name\\">:</span> <span class=\\"token variable\\">`</span></span>-<span class=\\"token variable\\">${name}</span><span class=\\"token variable\\"><span class=\\"token variable\\">`</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">\\\\</span><span class=\\"token variable\\">`</span></span><span class=\\"token variable\\"><span class=\\"token variable\\">`</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                ^\\n\\nCACError: Unknown option <span class=\\"token variable\\">`</span></span>--registry`\\n</code></pre></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Doc/MarkdwonAbout/01. Soft And Frame/VuePress2 (Vue3)/09. 其他/VuePress Update.md","value":{"title":"VuePress Update","path":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Doc/MarkdwonAbout/01. Soft And Frame/VuePress2 (Vue3)/09. 其他/VuePress Update.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{d as comp,u as data};

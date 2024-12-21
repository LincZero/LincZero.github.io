import{_ as l,c,a as o,e as a,b as n,o as i,r as p}from"./app-QwGOqOEk.js";const u={},d={class:"ab-note drop-shadow"},k={class:"markdown-rendered"},r={class:"ab-note drop-shadow"},v={class:"markdown-rendered"};function m(_,s){const e=p("VueFlow"),t=p("vueflow");return i(),c("div",null,[s[0]||(s[0]=o(`<h1 id="nodeflow-yaml手写格式设计过程" tabindex="-1"><a class="header-anchor" href="#nodeflow-yaml手写格式设计过程"><span>NodeFlow Yaml手写格式设计过程</span></a></h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>yaml语法：</p><ol><li>扩展部分</li><li><code>key: value</code></li><li>换行缩进表示层级</li><li><code>value</code> 前面加 <code>|换行</code>，则value可以写多行</li><li>json的部分</li></ol><ul><li><code>{}</code> 和 <code>[]</code> yaml是json的超集，有时我们使用混合语法会比纯用无 <code>{}</code> 和无 <code>[]</code> 的写法更简单，用这两个语法来压缩多行到一行</li><li><code>&quot;&quot;</code> 哪怕混合使用，也不建议使用引号了</li></ul><p>相关工具：在线编辑Yaml并实时矫正</p><ul><li>https://www.bejson.com/validators/yaml_editor/</li><li>https://yaml.cn/</li><li>https://toolgg.com/yaml-validator.html</li><li>json2yaml： https://www.bejson.com/json/json2yaml/</li></ul><h2 id="语法设计" tabindex="-1"><a class="header-anchor" href="#语法设计"><span>语法设计</span></a></h2><h3 id="摸索过程" tabindex="-1"><a class="header-anchor" href="#摸索过程"><span>摸索过程</span></a></h3><h4 id="最简单的yaml" tabindex="-1"><a class="header-anchor" href="#最简单的yaml"><span>最简单的yaml</span></a></h4><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">nodes</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> a
  <span class="token key atrule">title</span><span class="token punctuation">:</span> abc
<span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> b
  <span class="token key atrule">title</span><span class="token punctuation">:</span> cba
<span class="token key atrule">edges</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">source</span><span class="token punctuation">:</span> a
  <span class="token key atrule">target</span><span class="token punctuation">:</span> b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多socket的节点" tabindex="-1"><a class="header-anchor" href="#多socket的节点"><span>多socket的节点</span></a></h4><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">nodes</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> <span class="token number">8</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&#39;8, VAEDecode&#39;</span>
    <span class="token key atrule">inputs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> samples
        <span class="token key atrule">type</span><span class="token punctuation">:</span> LATENT
        <span class="token key atrule">link</span><span class="token punctuation">:</span> <span class="token number">7</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> vae
        <span class="token key atrule">type</span><span class="token punctuation">:</span> VAE
        <span class="token key atrule">link</span><span class="token punctuation">:</span> <span class="token number">8</span>
    <span class="token key atrule">outputs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> IMAGE
        <span class="token key atrule">type</span><span class="token punctuation">:</span> IMAGE
        <span class="token key atrule">links</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token number">9</span>
        <span class="token key atrule">slot_index</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">properties</span><span class="token punctuation">:</span>
      <span class="token key atrule">Node name for S&amp;R</span><span class="token punctuation">:</span> VAEDecode
    <span class="token key atrule">widgets_values</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> <span class="token number">9</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&#39;9, SaveImage&#39;</span>
    <span class="token key atrule">inputs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> images
        <span class="token key atrule">type</span><span class="token punctuation">:</span> IMAGE
        <span class="token key atrule">link</span><span class="token punctuation">:</span> <span class="token number">9</span>
    <span class="token key atrule">outputs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token key atrule">properties</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token key atrule">widgets_values</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ComfyUI
<span class="token key atrule">links</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token punctuation">-</span> <span class="token number">1</span>
    <span class="token punctuation">-</span> <span class="token number">8</span>
    <span class="token punctuation">-</span> <span class="token number">0</span>
    <span class="token punctuation">-</span> <span class="token number">9</span>
    <span class="token punctuation">-</span> <span class="token number">0</span>
    <span class="token punctuation">-</span> IMAGE
<span class="token key atrule">groups</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token key atrule">config</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="按行简化" tabindex="-1"><a class="header-anchor" href="#按行简化"><span>按行简化</span></a></h4><p>（类似json line，一行是一个节点/socket/线）</p><ul><li>nodes <ul><li>id, name, type <ul><li>id, name, type(i/o/attr), value</li><li>id, name, type(i/o/attr), value</li></ul></li><li>id, name, type <ul><li>id, name type(i/o/attr), value</li><li>id, name type(i/o/attr), value</li></ul></li></ul></li><li>edges <ul><li>from node-socket to node-socket</li></ul></li></ul><p>示例：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>nodes
  <span class="token number">1</span><span class="token operator">:</span>name1
    <span class="token number">1</span><span class="token operator">:</span>sdf type<span class="token operator">:</span>value
    <span class="token number">2</span><span class="token operator">:</span>df type<span class="token operator">:</span>value
  <span class="token number">2</span><span class="token punctuation">,</span> sdfs
    <span class="token number">1</span><span class="token punctuation">,</span> dsf type<span class="token operator">:</span>value
    <span class="token number">2</span><span class="token punctuation">,</span> dsf type<span class="token operator">:</span>value
edges
  <span class="token number">1.1</span><span class="token punctuation">,</span> <span class="token number">2.1</span>
  <span class="token number">1.2</span><span class="token punctuation">,</span> <span class="token number">2.2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="yaml混合json语法简化" tabindex="-1"><a class="header-anchor" href="#yaml混合json语法简化"><span>yaml混合json语法简化</span></a></h4><p>name特殊规则: 第一个下划线及以前的内容不作为名字的组成部分，通过该方式设计 <code>可选id</code></p><p>（无组）口诀：第二可括号是</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>nodes<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span>node_id<span class="token punctuation">,</span> node_title<span class="token punctuation">,</span>
    <span class="token punctuation">[</span>socket_id<span class="token punctuation">,</span> socket_title<span class="token punctuation">,</span> type<span class="token operator">?</span><span class="token punctuation">,</span> value<span class="token operator">?</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>id<span class="token punctuation">,</span> socket_title<span class="token punctuation">,</span> type<span class="token operator">?</span><span class="token punctuation">,</span> value<span class="token operator">?</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>
    node_id<span class="token punctuation">,</span> node_title<span class="token punctuation">,</span>
      <span class="token punctuation">[</span>socket_id<span class="token punctuation">,</span> socket_title<span class="token punctuation">,</span> type<span class="token operator">?</span><span class="token punctuation">,</span> value<span class="token operator">?</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span>id<span class="token punctuation">,</span> socket_title<span class="token punctuation">,</span> type<span class="token operator">?</span><span class="token punctuation">,</span> value<span class="token operator">?</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">]</span>
edges<span class="token operator">:</span> <span class="token punctuation">[</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>叫：<strong>无引号, yaml混json</strong></p><p>再优化下：</p><h3 id="v1" tabindex="-1"><a class="header-anchor" href="#v1"><span>V1</span></a></h3><h4 id="经典childen写法、去除children字段" tabindex="-1"><a class="header-anchor" href="#经典childen写法、去除children字段"><span>经典childen写法、去除children字段</span></a></h4><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>nodes3<span class="token operator">:</span>
  children<span class="token operator">:</span>
    node_id1<span class="token operator">:</span>
      self<span class="token operator">:</span> <span class="token punctuation">[</span>node_name<span class="token punctuation">]</span>
      children<span class="token operator">:</span>
        socket_id1<span class="token operator">:</span> <span class="token punctuation">[</span>socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span>
        socket_id2<span class="token operator">:</span> <span class="token punctuation">[</span>socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span>
    node_id2<span class="token operator">:</span>
      self<span class="token operator">:</span> <span class="token punctuation">[</span>node_name<span class="token punctuation">]</span>
      children<span class="token operator">:</span>
        socket_id1<span class="token operator">:</span> <span class="token punctuation">[</span>socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span>
        socket_id2<span class="token operator">:</span> <span class="token punctuation">[</span>socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span>
    group<span class="token operator">:</span>
      children<span class="token operator">:</span>
        node_id3<span class="token operator">:</span>
          self<span class="token operator">:</span> <span class="token punctuation">[</span>node_name<span class="token punctuation">]</span>
          children<span class="token operator">:</span>
            socket_id1<span class="token operator">:</span> <span class="token punctuation">[</span>socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span>
            socket_id2<span class="token operator">:</span> <span class="token punctuation">[</span>socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span>
edges3<span class="token operator">:</span>
  children<span class="token operator">:</span>
    edge_id1<span class="token operator">:</span> <span class="token punctuation">[</span>from_node<span class="token punctuation">,</span> from_socket<span class="token punctuation">,</span> to_node<span class="token punctuation">,</span> to_socket<span class="token punctuation">]</span>
    edge_id2<span class="token operator">:</span> <span class="token punctuation">[</span>from_node<span class="token punctuation">,</span> from_socket<span class="token punctuation">,</span> to_node<span class="token punctuation">,</span> to_socket<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>优点：经典写法</li><li>缺点：由于children标识过于臃肿，我们将所有的children去掉。用self表示节点自身属性，非self节点视为children属性：</li></ul><h4 id="yaml-json" tabindex="-1"><a class="header-anchor" href="#yaml-json"><span>yaml-json</span></a></h4><ul><li>优点：没那么臃肿</li><li>缺点：不符合<strong>一行一个项</strong>的设计，还可以再优化</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>nodes<span class="token operator">:</span>
  node_id1<span class="token operator">:</span>
    self<span class="token operator">:</span> <span class="token punctuation">[</span>node_name<span class="token punctuation">]</span>
    socket_id1<span class="token operator">:</span> <span class="token punctuation">[</span>socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span>
    socket_id2<span class="token operator">:</span> <span class="token punctuation">[</span>socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span>
  node_id2<span class="token operator">:</span>
    self<span class="token operator">:</span> <span class="token punctuation">[</span>node_name<span class="token punctuation">]</span>
    socket_id1<span class="token operator">:</span> <span class="token punctuation">[</span>socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span>
    socket_id2<span class="token operator">:</span> <span class="token punctuation">[</span>socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span>
  group<span class="token operator">:</span>
    node_id3<span class="token operator">:</span>
      self<span class="token operator">:</span> <span class="token punctuation">[</span>node_name<span class="token punctuation">]</span>
      socket_id1<span class="token operator">:</span> <span class="token punctuation">[</span>socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span>
      socket_id2<span class="token operator">:</span> <span class="token punctuation">[</span>socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span>
edges<span class="token operator">:</span>
  edge_id1<span class="token operator">:</span> <span class="token punctuation">[</span>from_node<span class="token punctuation">,</span> from_socket<span class="token punctuation">,</span> to_node<span class="token punctuation">,</span> to_socket<span class="token punctuation">]</span>
  edge_id2<span class="token operator">:</span> <span class="token punctuation">[</span>from_node<span class="token punctuation">,</span> from_socket<span class="token punctuation">,</span> to_node<span class="token punctuation">,</span> to_socket<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="yaml-json-fake-特殊语法糖-后续会再转yaml的" tabindex="-1"><a class="header-anchor" href="#yaml-json-fake-特殊语法糖-后续会再转yaml的"><span>yaml-json-fake (特殊语法糖，后续会再转yaml的)</span></a></h4><ul><li>优点：这样可以少几个 <code>self</code> 行，且满足<strong>一行一个项</strong>的设计</li><li>缺点：但不合法</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>nodes4<span class="token operator">:</span>
  node_id1<span class="token operator">:</span> <span class="token punctuation">[</span>node_name<span class="token punctuation">]</span>
    socket_id1<span class="token operator">:</span> <span class="token punctuation">[</span>socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span>
    socket_id2<span class="token operator">:</span> <span class="token punctuation">[</span>socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span>
  node_id2<span class="token operator">:</span> <span class="token punctuation">[</span>node_name<span class="token punctuation">]</span>
    socket_id1<span class="token operator">:</span> <span class="token punctuation">[</span>socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span>
    socket_id2<span class="token operator">:</span> <span class="token punctuation">[</span>socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span>
edges4<span class="token operator">:</span> <span class="token punctuation">[</span>
  edge_id1<span class="token operator">:</span> <span class="token punctuation">[</span>from_node<span class="token punctuation">,</span> from_socket<span class="token punctuation">,</span> to_node<span class="token punctuation">,</span> to_socket<span class="token punctuation">]</span><span class="token punctuation">,</span>
  edge_id2<span class="token operator">:</span> <span class="token punctuation">[</span>from_node<span class="token punctuation">,</span> from_socket<span class="token punctuation">,</span> to_node<span class="token punctuation">,</span> to_socket<span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以让他合法：但逗号就多起来了，而且yml和json的过度混合容易混乱</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>nodes4<span class="token operator">:</span>
  node_id1<span class="token operator">:</span> <span class="token punctuation">{</span> self<span class="token operator">:</span> node_name<span class="token punctuation">,</span>
    socket_id1<span class="token operator">:</span> <span class="token punctuation">[</span>socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span><span class="token punctuation">,</span>
    socket_id2<span class="token operator">:</span> <span class="token punctuation">[</span>socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span><span class="token punctuation">}</span>
  node_id2<span class="token operator">:</span> <span class="token punctuation">{</span> self<span class="token operator">:</span> node_name<span class="token punctuation">,</span>
    socket_id1<span class="token operator">:</span> <span class="token punctuation">[</span>socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span><span class="token punctuation">,</span>
    socket_id2<span class="token operator">:</span> <span class="token punctuation">[</span>socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="yaml-array" tabindex="-1"><a class="header-anchor" href="#yaml-array"><span>yaml-array</span></a></h4><ul><li>优点：这样依然可以少几个 <code>self</code> 行，且满足<strong>一行一个项</strong>的设计，也能合法</li><li>缺点：但是尾部的 <code>]</code> 随着叠层增加，臃肿，且逗号也多起来了</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>nodes2<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span>node_id1<span class="token punctuation">,</span> node_name<span class="token punctuation">,</span>
    <span class="token punctuation">[</span>socket_id1<span class="token punctuation">,</span> socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>socket_id2<span class="token punctuation">,</span> socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>node_id2<span class="token punctuation">,</span> node_name<span class="token punctuation">,</span>
    <span class="token punctuation">[</span>socket_id1<span class="token punctuation">,</span> socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>socket_id2<span class="token punctuation">,</span> socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>group_name<span class="token punctuation">,</span>
    <span class="token punctuation">[</span>node_id2<span class="token punctuation">,</span> node_name<span class="token punctuation">,</span>
      <span class="token punctuation">[</span>socket_id1<span class="token punctuation">,</span> socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span>socket_id2<span class="token punctuation">,</span> socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
edges2<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span>edge_id1<span class="token punctuation">,</span> from_node<span class="token punctuation">,</span> from_socket<span class="token punctuation">,</span> to_node<span class="token punctuation">,</span> to_socket<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>edge_id2<span class="token punctuation">,</span> from_node<span class="token punctuation">,</span> from_socket<span class="token punctuation">,</span> to_node<span class="token punctuation">,</span> to_socket<span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者这样：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>nodes4<span class="token operator">:</span>
  node_id1<span class="token operator">:</span> <span class="token punctuation">[</span>node_name<span class="token punctuation">,</span>
    socket_id1<span class="token operator">:</span> <span class="token punctuation">[</span>socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span><span class="token punctuation">,</span>
    socket_id2<span class="token operator">:</span> <span class="token punctuation">[</span>socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
  node_id2<span class="token operator">:</span> <span class="token punctuation">[</span>node_name<span class="token punctuation">,</span>
    socket_id1<span class="token operator">:</span> <span class="token punctuation">[</span>socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span><span class="token punctuation">,</span>
    socket_id2<span class="token operator">:</span> <span class="token punctuation">[</span>socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value<span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="纯列表" tabindex="-1"><a class="header-anchor" href="#纯列表"><span>纯列表</span></a></h4><p>(大体和yaml-array的结构是一样的，但少了 <code>[]</code> 和结束尾)</p><ul><li>nodes <ul><li>node_id1, node_name <ul><li>socket_id1, socket_name, socket_type, socket_value</li><li>socket_id2, socket_name, socket_type, socket_value</li></ul></li><li>node_id2, node_name <ul><li>socket_id1, socket_name, socket_type, socket_value</li><li>socket_id2, socket_name, socket_type, socket_value</li></ul></li><li><strong>group_name</strong><ul><li>node_id3, node_name <ul><li>socket_id1, socket_name, socket_type, socket_value</li><li>socket_id2, socket_name, socket_type, socket_value</li></ul></li></ul></li></ul></li><li>edges <ul><li>edge_id1, from_node, from_socket, to_node, to_socket</li><li>edge_id2, from_node, from_socket, to_node, to_socket</li></ul></li></ul><p>列表判断原理：</p><ul><li>nodes：除根部，单元素群组，双元素节点，四元素socket</li><li>edges：五元素正常，三元素为串联id语法糖</li></ul><h4 id="字符串表示的yml" tabindex="-1"><a class="header-anchor" href="#字符串表示的yml"><span>字符串表示的yml</span></a></h4><ul><li>缺点：无法通过json解析函数一次性进行解析，还不如全部重新文本解析。没啥用</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>node_id1<span class="token punctuation">,</span> node_name
  socket_id1<span class="token punctuation">,</span> socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value
  socket_id2<span class="token punctuation">,</span> socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value
node_id2<span class="token punctuation">,</span> node_name
  socket_id1<span class="token punctuation">,</span> socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value
  socket_id2<span class="token punctuation">,</span> socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value
group_name
  node_id3<span class="token punctuation">,</span> node_name
    socket_id1<span class="token punctuation">,</span> socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value
    socket_id2<span class="token punctuation">,</span> socket_name<span class="token punctuation">,</span> socket_type<span class="token punctuation">,</span> socket_value
edge_id1<span class="token punctuation">,</span> from_node<span class="token punctuation">,</span> from_socket<span class="token punctuation">,</span> to_node<span class="token punctuation">,</span> to_socket
edge_id2<span class="token punctuation">,</span> from_node<span class="token punctuation">,</span> from_socket<span class="token punctuation">,</span> to_node<span class="token punctuation">,</span> to_socket
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v2" tabindex="-1"><a class="header-anchor" href="#v2"><span>V2</span></a></h3><h4 id="结构解释-根部" tabindex="-1"><a class="header-anchor" href="#结构解释-根部"><span>结构解释 - 根部</span></a></h4><p>方案一：nodes和edges的根元素可以去掉，真正完全做到：<strong>一行一个项</strong></p><p>（可选：edge可以被一个空group包起来）</p><ul><li>node_id1, node_name <ul><li>socket_id1, socket_name, socket_type, socket_value</li><li>socket_id2, socket_name, socket_type, socket_value</li></ul></li><li>node_id2, node_name <ul><li>socket_id1, socket_name, socket_type, socket_value</li><li>socket_id2, socket_name, socket_type, socket_value</li></ul></li><li><strong>group_name</strong><ul><li>node_id3, node_name <ul><li>socket_id1, socket_name, socket_type, socket_value</li><li>socket_id2, socket_name, socket_type, socket_value</li></ul></li></ul></li><li>edge_id1, from_node, from_socket, to_node, to_socket</li><li>edge_id2, from_node, from_socket, to_node, to_socket</li></ul><p>方案二：把最外部的nodes和edges视为一个<strong>特殊的组</strong>，这样也能做到：<strong>一行一个项</strong></p><p>还是选择<mark>方案二</mark>吧</p><h4 id="结构解释-self项" tabindex="-1"><a class="header-anchor" href="#结构解释-self项"><span>结构解释 - self项</span></a></h4><p>将self看作是一个特殊的socket！并且使之可选！</p><p>就像是Python/js类方法里的 <code>init</code> 或 <code>construct</code> 方法代表的是给自己用的，而不是给别人的。</p><p>这样也能符合：<strong>一行一个项</strong></p><h4 id="jsonln" tabindex="-1"><a class="header-anchor" href="#jsonln"><span>JSONLN</span></a></h4><p><strong>一行一个项</strong>的灵感来机器学习常用的 <code>JSONL</code> 格式，而这里我们在此基础上使用缩进增加了对嵌套的支持。</p><p>所以我把这种结构叫：<code>JSONLN</code> (JSON-LINE-NEST)</p><h4 id="简化合法格式" tabindex="-1"><a class="header-anchor" href="#简化合法格式"><span>简化合法格式</span></a></h4><p>就保留两个：</p><ol><li>yaml-json</li><li>纯列表</li></ol><ul><li>可以把self item往下写，也可以往上写</li><li>写多行内容时较yaml更方便</li></ul><h3 id="v3" tabindex="-1"><a class="header-anchor" href="#v3"><span>V3</span></a></h3><p>可选字段列表，socket_name, socket_type、socket_value有时不是必须填的。简化数组数量。</p><p>语法糖：用input/output来代替socket类型的输入和输出！</p><ul><li>node_id1, node_name <ul><li>socket_id0, name (value，可选) (type, 可选，未支持，或许可以通过value判断type)</li><li>socket_id1, name input</li><li>socket_id2, name output</li><li>socket_id3, k value</li></ul></li><li>node_id2, node_name <ul><li>socket_id1, name (value，可选) (type, 可选，未支持)</li><li>socket_id2, name (value，可选) (type, 可选，未支持)</li></ul></li><li><strong>group_name</strong><ul><li>node_id3, node_name <ul><li>socket_id1, name (value，可选) (type, 可选，未支持)</li><li>socket_id2, name (value，可选) (type, 可选，未支持)</li></ul></li></ul></li><li>edge_id1? from_node, from_socket to_node, to_socket</li><li>edge_id2? from_node, from_socket to_node, to_socket</li></ul><p>解释：等同传统做法中的：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token operator">-</span> self<span class="token operator">:</span> node_id1 node_name
  children<span class="token operator">:</span>
  <span class="token operator">-</span> self<span class="token operator">:</span> socket_id0 <span class="token function">name</span> <span class="token punctuation">(</span>value，可选<span class="token punctuation">)</span> <span class="token punctuation">(</span>type<span class="token punctuation">,</span> 可选，未支持，或许可以通过value判断type<span class="token punctuation">)</span>
    children<span class="token operator">:</span>
  <span class="token operator">-</span> self<span class="token operator">:</span> socket_id1 <span class="token function">name</span> <span class="token punctuation">(</span>value，可选<span class="token punctuation">)</span> <span class="token punctuation">(</span>type<span class="token punctuation">,</span> 可选，未支持，或许可以通过value判断type<span class="token punctuation">)</span>
    children<span class="token operator">:</span>
  <span class="token operator">-</span> self<span class="token operator">:</span> socket_id2 <span class="token function">name</span> <span class="token punctuation">(</span>value，可选<span class="token punctuation">)</span> <span class="token punctuation">(</span>type<span class="token punctuation">,</span> 可选，未支持，或许可以通过value判断type<span class="token punctuation">)</span>
    children<span class="token operator">:</span>
<span class="token operator">-</span> self<span class="token operator">:</span> node_id2 node_name
  children<span class="token operator">:</span> 
  <span class="token operator">-</span> self<span class="token operator">:</span> socket_id0 <span class="token function">name</span> <span class="token punctuation">(</span>value，可选<span class="token punctuation">)</span> <span class="token punctuation">(</span>type<span class="token punctuation">,</span> 可选，未支持，或许可以通过value判断type<span class="token punctuation">)</span>
    children<span class="token operator">:</span>
  <span class="token operator">-</span> self<span class="token operator">:</span> socket_id1 <span class="token function">name</span> <span class="token punctuation">(</span>value，可选<span class="token punctuation">)</span> <span class="token punctuation">(</span>type<span class="token punctuation">,</span> 可选，未支持，或许可以通过value判断type<span class="token punctuation">)</span>
    children<span class="token operator">:</span>
  <span class="token operator">-</span> self<span class="token operator">:</span> socket_id2 <span class="token function">name</span> <span class="token punctuation">(</span>value，可选<span class="token punctuation">)</span> <span class="token punctuation">(</span>type<span class="token punctuation">,</span> 可选，未支持，或许可以通过value判断type<span class="token punctuation">)</span>
    children<span class="token operator">:</span>
<span class="token operator">-</span> self<span class="token operator">:</span> edge_id1 from_node<span class="token punctuation">,</span> from_socket to_node<span class="token punctuation">,</span> to_socket
  children<span class="token operator">:</span>
<span class="token operator">-</span> self<span class="token operator">:</span> edge_id2 from_node<span class="token punctuation">,</span> from_socket to_node<span class="token punctuation">,</span> to_socket
    children<span class="token operator">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>即：每个object固定有且只有两个项</p><ul><li>我们省略了self项，用不缩进表示</li><li>我们省略了children项，用缩进表示</li></ul><p>在开发时，为了灵活性，我们增加了parent项。每一个树节点都有父子指针！</p><h2 id="语法确定" tabindex="-1"><a class="header-anchor" href="#语法确定"><span>语法确定</span></a></h2><h3 id="v1-1" tabindex="-1"><a class="header-anchor" href="#v1-1"><span>V1</span></a></h3>`,78)),a(e,{type:"nodeflow-list2",data:`- nodes
  - 1, name1
    - s11, name, input
    - s12, name, output
    - s13, name, value
  - 2, name2
    - s21, name, input
    - s22, name, output
    - s23, name, value
  - 3, name3
    - s31, name, input
    - s32, name, output
    - s33, name, value
- edges
  - 1,source-0, 2,target-0
  - 2,source-0, 3,target-0
`}),a(e,{type:"nodeflow-list-demo-old",data:""}),s[1]||(s[1]=n("p",null,"(默认类型为node)",-1)),a(e,{type:"nodeflow-list-demo2",data:`- nodes
  - 1, name1
    - s11, name: input
    - s12, name: output
    - s13, name: value
  - 2, name2
    - s21, name: input
    - s22, name: output
    - s23, name: value
  - 3, name3
    - s31, name: input
    - s32, name: output
    - s33, name: value
- edges
  - 1, s12, 2, s21
  - 2, s22, 3, s31
`}),s[2]||(s[2]=n("h3",{id:"配合anyblock",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配合anyblock"},[n("span",null,"配合anyblock")])],-1)),n("div",d,[n("div",k,[n("div",null,[a(t,{type:"nodeflow-list-old",data:`- nodes
  - 1, name1
    - s11, name, input
    - s12, name, output
    - s13, name, value
  - 2, name2
    - s21, name, input
    - s22, name, output
    - s23, name, value
  - 3, name3
    - s31, name, input
    - s32, name, output
    - s33, name, value
- edges
  - 1,source-0, 2,target-0
  - 2,source-0, 3,target-0

`})])])]),s[3]||(s[3]=n("h3",{id:"v2-id-name-value-name",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#v2-id-name-value-name"},[n("span",null,"v2 id:name, value:name")])],-1)),n("div",r,[n("div",v,[n("div",null,[a(t,{type:"nodeflow-list-old",data:`- nodes
  - node1
    - s11:name, input
    - s12:name, output
    - s13:name, value
  - node2
    - s11:name, input
    - s12:name, output
    - s13:name, value
  - node3
    - s11:name, input
    - s12:name, output
    - s13:name, value
- edges
  - node1, source-0, node2, target-0
  - node2, source-0, node3, target-0

`})])])]),s[4]||(s[4]=o(`<h3 id="v3-简化、默认socket" tabindex="-1"><a class="header-anchor" href="#v3-简化、默认socket"><span>v3 简化、默认socket</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- nodes
  - node1:重名测试
    - i1:重名测试, input
    - o1:重名测试, output
    - v1, value
  - node2:重名测试
    - i1, input
    - o1, output
    - v1, value
  - Group1
    - node3
    - node4
- edges
  - node1,o1, node2,i1
  - node2,o1, node3,l
  - node2,o1, node4,l
  - node1,o1, node3,b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2))])}const y=l(u,[["render",m],["__file","NodeFlow Yaml手写格式.html.vue"]]),h=JSON.parse('{"path":"/MdNote_Public/ProductDoc/Plugin/NodeFlow/docs/dev%20docs/NodeFlow%20Yaml%E6%89%8B%E5%86%99%E6%A0%BC%E5%BC%8F.html","title":"NodeFlow Yaml手写格式设计过程","lang":"zh-CN","frontmatter":{"description":"NodeFlow Yaml手写格式设计过程 介绍 yaml语法： 扩展部分 key: value 换行缩进表示层级 value 前面加 |换行，则value可以写多行 json的部分 {} 和 [] yaml是json的超集，有时我们使用混合语法会比纯用无 {} 和无 [] 的写法更简单，用这两个语法来压缩多行到一行 \\"\\" 哪怕混合使用，也不建议使用引...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/Pkmer-Math/MdNote_Public/ProductDoc/Plugin/NodeFlow/docs/dev%20docs/NodeFlow%20Yaml%E6%89%8B%E5%86%99%E6%A0%BC%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"NodeFlow Yaml手写格式设计过程"}],["meta",{"property":"og:description","content":"NodeFlow Yaml手写格式设计过程 介绍 yaml语法： 扩展部分 key: value 换行缩进表示层级 value 前面加 |换行，则value可以写多行 json的部分 {} 和 [] yaml是json的超集，有时我们使用混合语法会比纯用无 {} 和无 [] 的写法更简单，用这两个语法来压缩多行到一行 \\"\\" 哪怕混合使用，也不建议使用引..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NodeFlow Yaml手写格式设计过程\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"NodeFlow Yaml手写格式设计过程","slug":"nodeflow-yaml手写格式设计过程","link":"#nodeflow-yaml手写格式设计过程","children":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"语法设计","slug":"语法设计","link":"#语法设计","children":[{"level":3,"title":"摸索过程","slug":"摸索过程","link":"#摸索过程","children":[{"level":4,"title":"最简单的yaml","slug":"最简单的yaml","link":"#最简单的yaml","children":[]},{"level":4,"title":"多socket的节点","slug":"多socket的节点","link":"#多socket的节点","children":[]},{"level":4,"title":"按行简化","slug":"按行简化","link":"#按行简化","children":[]},{"level":4,"title":"yaml混合json语法简化","slug":"yaml混合json语法简化","link":"#yaml混合json语法简化","children":[]}]},{"level":3,"title":"V1","slug":"v1","link":"#v1","children":[{"level":4,"title":"经典childen写法、去除children字段","slug":"经典childen写法、去除children字段","link":"#经典childen写法、去除children字段","children":[]},{"level":4,"title":"yaml-json","slug":"yaml-json","link":"#yaml-json","children":[]},{"level":4,"title":"yaml-json-fake (特殊语法糖，后续会再转yaml的)","slug":"yaml-json-fake-特殊语法糖-后续会再转yaml的","link":"#yaml-json-fake-特殊语法糖-后续会再转yaml的","children":[]},{"level":4,"title":"yaml-array","slug":"yaml-array","link":"#yaml-array","children":[]},{"level":4,"title":"纯列表","slug":"纯列表","link":"#纯列表","children":[]},{"level":4,"title":"字符串表示的yml","slug":"字符串表示的yml","link":"#字符串表示的yml","children":[]}]},{"level":3,"title":"V2","slug":"v2","link":"#v2","children":[{"level":4,"title":"结构解释 - 根部","slug":"结构解释-根部","link":"#结构解释-根部","children":[]},{"level":4,"title":"结构解释 - self项","slug":"结构解释-self项","link":"#结构解释-self项","children":[]},{"level":4,"title":"JSONLN","slug":"jsonln","link":"#jsonln","children":[]},{"level":4,"title":"简化合法格式","slug":"简化合法格式","link":"#简化合法格式","children":[]}]},{"level":3,"title":"V3","slug":"v3","link":"#v3","children":[]}]},{"level":2,"title":"语法确定","slug":"语法确定","link":"#语法确定","children":[{"level":3,"title":"V1","slug":"v1-1","link":"#v1-1","children":[]},{"level":3,"title":"配合anyblock","slug":"配合anyblock","link":"#配合anyblock","children":[]},{"level":3,"title":"v2 id:name, value:name","slug":"v2-id-name-value-name","link":"#v2-id-name-value-name","children":[]},{"level":3,"title":"v3 简化、默认socket","slug":"v3-简化、默认socket","link":"#v3-简化、默认socket","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":6.5,"words":1950},"filePathRelative":"MdNote_Public/ProductDoc/Plugin/NodeFlow/docs/dev docs/NodeFlow Yaml手写格式.md","excerpt":"\\n<h2>介绍</h2>\\n<p>yaml语法：</p>\\n<ol>\\n<li>扩展部分</li>\\n<li><code>key: value</code></li>\\n<li>换行缩进表示层级</li>\\n<li><code>value</code> 前面加 <code>|换行</code>，则value可以写多行</li>\\n<li>json的部分</li>\\n</ol>\\n<ul>\\n<li><code>{}</code> 和 <code>[]</code>\\nyaml是json的超集，有时我们使用混合语法会比纯用无 <code>{}</code> 和无 <code>[]</code> 的写法更简单，用这两个语法来压缩多行到一行</li>\\n<li><code>\\"\\"</code> 哪怕混合使用，也不建议使用引号了</li>\\n</ul>","autoDesc":true}');export{y as comp,h as data};

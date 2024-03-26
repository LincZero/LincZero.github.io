import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as p,c,b as s,e as n,d as t,a}from"./app-CyJMR3JQ.js";const o={},u=a(`<h1 id="schema-yaml-详解" tabindex="-1"><a class="header-anchor" href="#schema-yaml-详解"><span>Schema.yaml 详解</span></a></h1><blockquote><p>原文: https://github.com/LEOYoon-Tsaw/Rime_collections/blob/master/Rime_description.md 更新时间：2022/04/26</p></blockquote><h2 id="开始之前" tabindex="-1"><a class="header-anchor" href="#开始之前"><span>开始之前</span></a></h2><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># Rime schema</span>
<span class="token comment"># encoding: utf-8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="描述档-schema" tabindex="-1"><a class="header-anchor" href="#描述档-schema"><span>描述档 schema</span></a></h2><p>参数</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">schema</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;方案的显示名称〔即出现于方案选单中以示人的，通常为中文〕&quot;</span>
    <span class="token key atrule">schema_id</span><span class="token punctuation">:</span> <span class="token string">&quot;方案内部名，在代码中引用此方案时以此名为正，通常由英文、数字、下划线组成&quot;</span>
    <span class="token key atrule">author</span><span class="token punctuation">:</span> <span class="token string">&quot;发明人、撰写者。如果您对方案做出了修改，请保留原作者名，并将自己的名字加在后面&quot;</span>
    <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&quot;请简要描述方案历史、码表来源、该方案规则等&quot;</span>
    <span class="token key atrule">dependencies</span><span class="token punctuation">:</span> <span class="token string">&quot;如果本方案依赖于其它方案〔通常来说会依頼其它方案做为反查，抑或是两种或多种方案混用时〕&quot;</span>
    <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;版本号，在发布新版前请确保已升版本号&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">schema</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;苍颉检字法&quot;</span>
  <span class="token key atrule">schema_id</span><span class="token punctuation">:</span> cangjie6
  <span class="token key atrule">author</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;发明人 朱邦复先生、沈红莲女士&quot;</span>
  <span class="token key atrule">dependencies</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> luna_pinyin
    <span class="token punctuation">-</span> jyutping
    <span class="token punctuation">-</span> zyenpheng
  <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    第六代仓颉输入法
    码表由雪斋、惜缘和crazy4u整理</span>
  <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">0.19</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开关-switches" tabindex="-1"><a class="header-anchor" href="#开关-switches"><span>开关 switches</span></a></h2><p>通常包含以下数个，但并不限于此，自定义滤镜皆可设置开关调控</p><h3 id="中英文-ascii-mode" tabindex="-1"><a class="header-anchor" href="#中英文-ascii-mode"><span>中英文 ascii_mode</span></a></h3><p>ascii_mode: 中英文转换开关</p><ul><li>预设<code>0</code>为中文，<code>1</code>为英文</li></ul><h3 id="全半角符号-full-shape" tabindex="-1"><a class="header-anchor" href="#全半角符号-full-shape"><span>全半角符号 full_shape</span></a></h3><p>full_shape: 是全角符号／半角符号开关</p><ul><li>注意，开启全角时英文字母亦为全角。<code>0</code>为半角，<code>1</code>为全角</li></ul><h3 id="中西文符号-ascii-punct" tabindex="-1"><a class="header-anchor" href="#中西文符号-ascii-punct"><span>中西文符号 ascii_punct</span></a></h3><p>ascii_punct: 是中西文标点转换开关</p><ul><li>0为中文句读，1为西文标点。</li></ul><h3 id="字符集开关-extended-charset" tabindex="-1"><a class="header-anchor" href="#字符集开关-extended-charset"><span>字符集开关 extended_charset</span></a></h3><p>extended_charset: 是字符集开关</p><ul><li>0为 CJK 基本字符集，1为 CJK 全字符集</li><li>仅<code>table_translator</code>可用</li></ul><h3 id="简繁体-转化字-开关-simplification" tabindex="-1"><a class="header-anchor" href="#简繁体-转化字-开关-simplification"><span>简繁体(转化字)开关 simplification</span></a></h3><p>simplification: 是转化字开关</p><ul><li><p>一般情况下与上同，0为不开启转化，1为转化。</p></li><li><p>所有关关选项名偁可自定义，可用快捷键切换：该名偁可用于<code>key_binder/bindings</code>中的<code>toggle:</code>后</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> simplification
  <span class="token key atrule">states</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;汉字&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;汉字&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">reset</span><span class="token punctuation">:</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="多选开关" tabindex="-1"><a class="header-anchor" href="#多选开关"><span>(多选开关)</span></a></h3><p>亦可使用多选开关，同样支持快捷键：<code>options</code>名偁用于<code>key_binder/bindings</code>时，使用<code>set_option:</code>或<code>unset_option:</code>开启或关闭某一个</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">options</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> zh_trad<span class="token punctuation">,</span> zh_cn<span class="token punctuation">,</span> zh_mars <span class="token punctuation">]</span>
  <span class="token key atrule">states</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 字型 → 汉字
    <span class="token punctuation">-</span> 字型 → 汉字
    <span class="token punctuation">-</span> 字型 → 䕼茡
  <span class="token key atrule">reset</span><span class="token punctuation">:</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="整体使用" tabindex="-1"><a class="header-anchor" href="#整体使用"><span>(整体使用)</span></a></h3><ul><li><code>name</code>/<code>options</code>名：须与<code>simplifier</code>中<code>option_name</code>相同</li><li><code>states</code>：可不写，如不写则此开关存在但不可见，可由快捷键操作</li><li><code>reset</code>：设定默认状态〔<code>reset</code>可不写，此时切换窗口时不会重置到默认状态〕</li></ul><p>示例</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">switches</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ascii_mode
    <span class="token key atrule">reset</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">states</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;中文&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;西文&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> full_shape
    <span class="token key atrule">states</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;半角&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;全角&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> extended_charset
    <span class="token key atrule">states</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;通用&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;增广&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> simplification
    <span class="token key atrule">states</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;汉字&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;汉字&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ascii_punct
    <span class="token key atrule">states</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;句读&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;符号&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="引擎-engine" tabindex="-1"><a class="header-anchor" href="#引擎-engine"><span>引擎 engine</span></a></h2><ul><li>以下<strong>加粗</strong>项为可细配者，<em>斜体</em>者为不常用者</li></ul><p>引擎分四组：</p><h3 id="processors-按键消息" tabindex="-1"><a class="header-anchor" href="#processors-按键消息"><span>processors 按键消息</span></a></h3><p>这批组件处理各类按键消息</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">ascii_composer</span><span class="token punctuation">:</span> 处理西文模式及中西文切
<span class="token key atrule">recognizer</span><span class="token punctuation">:</span> 与matcher搭配，处理符合特定规则的输入码，如网址、反查等tags
<span class="token key atrule">key_binder</span><span class="token punctuation">:</span> 在特定条件下将按键绑定到其他按键，如重定义逗号、句号为候选翻页、开关快捷键等
<span class="token key atrule">speller</span><span class="token punctuation">:</span> 拼写处理器，接受字符按键，编辑输入
<span class="token key atrule">punctuator</span><span class="token punctuation">:</span> 句读处理器，将单个字符按键直接映射为标点符号或文字
<span class="token key atrule">selector</span><span class="token punctuation">:</span> 选字处理器，处理数字选字键〔可以换成别的哦〕、上、下候选定位、换页
<span class="token key atrule">navigator</span><span class="token punctuation">:</span> 处理输入栏内的光标移动
<span class="token key atrule">express_editor</span><span class="token punctuation">:</span> 编辑器，处理空格、回车上屏、回退键
<span class="token key atrule">fluid_editor</span><span class="token punctuation">:</span> 句式编辑器，用于以空格断词、回车上屏的【注音】、【语句流】等输入方案，替换express_editor
<span class="token key atrule">chord_composer</span><span class="token punctuation">:</span> 和弦作曲家或曰并击处理器，用于【宫保拼音】等多键并击的输入方案
<span class="token key atrule">lua_processor</span><span class="token punctuation">:</span> 使用lua自定义按键，后接@+lua函数名
    \`lua\`函数名即用户文件夹内\`rime.lua\`中函数名，参数为\`(key<span class="token punctuation">,</span> env)\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="segmentors" tabindex="-1"><a class="header-anchor" href="#segmentors"><span>segmentors</span></a></h3><p>这批组件识别不同内容类型，将输入码分段并加上<code>tag</code></p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">ascii_segmentor</span><span class="token punctuation">:</span> 标识西文段落〔譬如在西文模式下〕字母直接上屛
<span class="token key atrule">matcher</span><span class="token punctuation">:</span> 配合recognizer标识符合特定规则的段落，如网址、反查等，加上特定tag
<span class="token key atrule">abc_segmentor</span><span class="token punctuation">:</span> 标识常规的文字段落，加上abc这个tag
<span class="token key atrule">punct_segmentor</span><span class="token punctuation">:</span> 标识句读段落〔键入标点符号用〕加上punct这个tag
<span class="token key atrule">fallback_segmentor</span><span class="token punctuation">:</span> 标识其他未标识段落
<span class="token key atrule">affix_segmentor</span><span class="token punctuation">:</span> 用户自定义tag
    此项可加载多个实例，后接\`@\`+\`tag\`名
<span class="token key atrule">lua_segmentor</span><span class="token punctuation">:</span> 使用lua自定义切分，后接@+lua函数名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="translators" tabindex="-1"><a class="header-anchor" href="#translators"><span>translators</span></a></h3><p>这批组件翻译特定类型的编码段为一组候选文字</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">echo_translator</span><span class="token punctuation">:</span> 没有其他候选字时，回显输入码〔输入码可以Shift+Enter上屛〕
<span class="token key atrule">punct_translator</span><span class="token punctuation">:</span> 配合punct_segmentor转换标点符号
<span class="token key atrule">table_translator</span><span class="token punctuation">:</span> 码表翻译器，用于仓颉、五笔等基于码表的输入方案
    此项可加载多个实例，后接\`@\`+翻译器名〔如：\`cangjie\`、\`wubi\`等〕1. <span class="token important">**\`script_translator\`**</span> 脚本翻译器，用于拼音、粤拼等基于音节表的输入方案
    此项可加载多个实例，后接\`@\`+翻译器名〔如：\`pinyin\`、\`jyutping\`等〕1. <span class="token important">*\`reverse_lookup_translator\`*</span> 反查翻译器，用另一种编码方案查码
<span class="token key atrule">lua_translator</span><span class="token punctuation">:</span> 使用lua自定义输入，例如动态输入当前日期、时间，后接@+lua函数名
    \`lua\`函数名即用户文件夹内\`rime.lua\`中函数名，参数为\`(input<span class="token punctuation">,</span> seg<span class="token punctuation">,</span> env)\`
    可以\`env.engine.context<span class="token punctuation">:</span>get_option(&quot;option_name&quot;)\`方式绑定到\`switch\`开关／\`key_binder\`快捷键
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filters" tabindex="-1"><a class="header-anchor" href="#filters"><span>filters</span></a></h3><p>这批组件过滤翻译的结果，自定义滤镜皆可使用开关调控</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">uniquifier</span><span class="token punctuation">:</span> 过滤重复的候选字，有可能来自simplifier
<span class="token key atrule">cjk_minifier</span><span class="token punctuation">:</span> 字符集过滤〔仅用于script_translator，使之支援extended_charset开关〕
<span class="token key atrule">single_char_filter</span><span class="token punctuation">:</span> 单字过滤器，如加载此组件，则屛敝词典中的词组〔仅table_translator有效〕
<span class="token key atrule">simplifier</span><span class="token punctuation">:</span> 用字转换
<span class="token key atrule">reverse_lookup_filter</span><span class="token punctuation">:</span> 反查滤镜，以更灵活的方式反查，Rime1.0 后替代reverse_lookup_translator
    此项可加载多个实例，后接\`@\`+滤镜名〔如：\`pinyin_lookup\`、\`jyutping_lookup\`等〕
<span class="token key atrule">lua_filter</span><span class="token punctuation">:</span> 使用lua自定义过滤，例如过滤字符集、调整排序，后接@+lua函数名
    \`lua\`函数名即用户文件夹内\`rime.lua\`中函数名，参数为\`(input<span class="token punctuation">,</span> env)\`
    可以\`env.engine.context<span class="token punctuation">:</span>get_option(&quot;option_name&quot;)\`方式绑定到\`switch\`开关／\`key_binder\`快捷键
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="整体使用-1" tabindex="-1"><a class="header-anchor" href="#整体使用-1"><span>(整体使用)</span></a></h3><p>示例</p><p>cangjie6.schema.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">engine</span><span class="token punctuation">:</span>
  <span class="token key atrule">processors</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ascii_composer
    <span class="token punctuation">-</span> recognizer
    <span class="token punctuation">-</span> key_binder
    <span class="token punctuation">-</span> speller
    <span class="token punctuation">-</span> punctuator
    <span class="token punctuation">-</span> selector
    <span class="token punctuation">-</span> navigator
    <span class="token punctuation">-</span> express_editor
  <span class="token key atrule">segmentors</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ascii_segmentor
    <span class="token punctuation">-</span> matcher
    <span class="token punctuation">-</span> affix_segmentor@pinyin
    <span class="token punctuation">-</span> affix_segmentor@jyutping
    <span class="token punctuation">-</span> affix_segmentor@pinyin_lookup
    <span class="token punctuation">-</span> affix_segmentor@jyutping_lookup
    <span class="token punctuation">-</span> affix_segmentor@reverse_lookup
    <span class="token punctuation">-</span> abc_segmentor
    <span class="token punctuation">-</span> punct_segmentor
    <span class="token punctuation">-</span> fallback_segmentor
  <span class="token key atrule">translators</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> punct_translator
    <span class="token punctuation">-</span> table_translator
    <span class="token punctuation">-</span> script_translator@pinyin
    <span class="token punctuation">-</span> script_translator@jyutping
    <span class="token punctuation">-</span> script_translator@pinyin_lookup
    <span class="token punctuation">-</span> script_translator@jyutping_lookup
    <span class="token punctuation">-</span> lua_translator@get_date
  <span class="token key atrule">filters</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> simplifier@zh_simp
    <span class="token punctuation">-</span> uniquifier
    <span class="token punctuation">-</span> cjk_minifier
    <span class="token punctuation">-</span> reverse_lookup_filter@middle_chinese
    <span class="token punctuation">-</span> reverse_lookup_filter@pinyin_reverse_lookup
    <span class="token punctuation">-</span> reverse_lookup_filter@jyutping_reverse_lookup
    <span class="token punctuation">-</span> lua_filter@single_char_first
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="细项配置" tabindex="-1"><a class="header-anchor" href="#细项配置"><span>细项配置</span></a></h2>`,53),d=s("code",null,"comment_format",-1),r=s("code",null,"preedit_format",-1),k=s("code",null,"speller/algebra",-1),m={href:"http://www.boost.org/doc/libs/1_49_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html",target:"_blank",rel:"noopener noreferrer"},v=a(`<p><strong>引擎中所举之加粗者均可在下方详细描述，格式为：</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span>
  <span class="token key atrule">branches</span><span class="token punctuation">:</span> configurations
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span>
  <span class="token key atrule">branches</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> configurations
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="speller-自动上屏等" tabindex="-1"><a class="header-anchor" href="#speller-自动上屏等"><span>speller 自动上屏等</span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">alphabet</span><span class="token punctuation">:</span> 定义本方案输入键
<span class="token key atrule">initials</span><span class="token punctuation">:</span> 定义仅作始码之键
<span class="token key atrule">finals</span><span class="token punctuation">:</span> 定义仅作末码之键
<span class="token key atrule">delimiter</span><span class="token punctuation">:</span> 上屛时的音节间分音符
<span class="token key atrule">algebra</span><span class="token punctuation">:</span> 拼写运算规则，由之算出的拼写汇入prism中
<span class="token key atrule">max_code_length</span><span class="token punctuation">:</span> 形码最大码长，超过则顶字上屛〔number〕
<span class="token key atrule">auto_select</span><span class="token punctuation">:</span> 自动上屛〔true或false〕
<span class="token key atrule">auto_select_pattern</span><span class="token punctuation">:</span> 自动上屏规则，以正则表达式描述，当输入串可以被匹配时自动顶字上屏。
<span class="token key atrule">use_space</span><span class="token punctuation">:</span> 以空格作输入码〔true或false〕
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>speller</code>的演算包含：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">xform</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>改写〔不保留原形〕
<span class="token key atrule">derive</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>衍生〔保留原形〕
<span class="token key atrule">abbrev</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>简拼〔出字优先级较上两组更低〕
<span class="token key atrule">fuzz</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>畧拼〔此种简拼仅组词，不出单字〕
<span class="token key atrule">xlit</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>变换〔适合大量一对一变换〕
<span class="token key atrule">erase</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>删除
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p><p>luna_pinyin.schema.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">speller</span><span class="token punctuation">:</span>
  <span class="token key atrule">alphabet</span><span class="token punctuation">:</span> zyxwvutsrqponmlkjihgfedcba
  <span class="token key atrule">delimiter</span><span class="token punctuation">:</span> <span class="token string">&quot; &#39;&quot;</span>
  <span class="token key atrule">algebra</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> erase/^xx$/
    <span class="token punctuation">-</span> abbrev/^(<span class="token punctuation">[</span>a<span class="token punctuation">-</span>z<span class="token punctuation">]</span>).+$/$1/
    <span class="token punctuation">-</span> abbrev/^(<span class="token punctuation">[</span>zcs<span class="token punctuation">]</span>h).+$/$1/
    <span class="token punctuation">-</span> derive/^(<span class="token punctuation">[</span>nl<span class="token punctuation">]</span>)ve$/$1ue/
    <span class="token punctuation">-</span> derive/^(<span class="token punctuation">[</span>jqxy<span class="token punctuation">]</span>)u/$1v/
    <span class="token punctuation">-</span> derive/un$/uen/
    <span class="token punctuation">-</span> derive/ui$/uei/
    <span class="token punctuation">-</span> derive/iu$/iou/
    <span class="token punctuation">-</span> derive/(<span class="token punctuation">[</span>aeiou<span class="token punctuation">]</span>)ng$/$1gn/
    <span class="token punctuation">-</span> derive/(<span class="token punctuation">[</span>dtngkhrzcs<span class="token punctuation">]</span>)o(u<span class="token punctuation">|</span>ng)$/$1o/
    <span class="token punctuation">-</span> derive/ong$/on/
    <span class="token punctuation">-</span> derive/ao$/oa/
    <span class="token punctuation">-</span> derive/(<span class="token punctuation">[</span>iu<span class="token punctuation">]</span>)a(o<span class="token punctuation">|</span>ng<span class="token punctuation">?</span>)$/a$1$2/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="segmentor-分段器" tabindex="-1"><a class="header-anchor" href="#segmentor-分段器"><span>segmentor 分段器</span></a></h3><ul><li><code>segmentor</code>配合<code>recognizer</code>标记出<code>tag</code>。这里会用到<code>affix_segmentor</code>和<code>abc_segmentor</code></li><li><code>tag</code>用在<code>translator</code>、<code>reverse_lookup_filter</code>、<code>simplifier</code>中用以标定各自作用范围</li><li>如果不需要用到<code>extra_tags</code>则不需要单独配置<code>segmentor</code></li></ul><ol><li><code>tag:</code> 设定其<code>tag</code></li><li><code>prefix:</code> 设定其前缀标识，可不塡，不塡则无前缀</li><li><code>suffix:</code> 设定其尾缀标识，可不塡，不塡则无尾缀</li><li><code>tips:</code> 设定其输入前提示符，可不塡，不塡则无提示符</li><li><code>closing_tips:</code> 设定其结束输入提示符，可不塡，不塡则无提示符</li><li><code>extra_tags:</code> 为此<code>segmentor</code>所标记的段落插上其它<code>tag</code></li></ol><p><strong>当<code>affix_segmentor</code>和<code>translator</code>重名时，两者可并在一处配置，此处 1-5 条对应下面 19-23 条。<code>abc_segmentor</code>仅可设<code>extra_tags</code></strong>#### <strong>示例</strong></p><p>cangjie6.schema.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">reverse_lookup</span><span class="token punctuation">:</span>
  <span class="token key atrule">tag</span><span class="token punctuation">:</span> reverse_lookup
  <span class="token key atrule">prefix</span><span class="token punctuation">:</span> <span class="token string">&quot;\`&quot;</span>
  <span class="token key atrule">suffix</span><span class="token punctuation">:</span> <span class="token string">&quot;;&quot;</span>
  <span class="token key atrule">tips</span><span class="token punctuation">:</span> <span class="token string">&quot;【反查】&quot;</span>
  <span class="token key atrule">closing_tips</span><span class="token punctuation">:</span> <span class="token string">&quot;【苍颉】&quot;</span>
  <span class="token key atrule">extra_tags</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> pinyin_lookup
    <span class="token punctuation">-</span> jyutping_lookup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="translator-翻译器" tabindex="-1"><a class="header-anchor" href="#translator-翻译器"><span>translator 翻译器</span></a></h3><p>每个方案有一个主<code>translator</code>，在引擎列表中不以<code>@</code>+翻译器名定义，在细项配置时直接以<code>translator:</code>命名。以下加粗项为可在主<code>translator</code>中定义之项，其它可在副〔以<code>@</code>+翻译器名命名〕<code>translator</code>中定义</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">translator</span><span class="token punctuation">:</span>
	<span class="token comment"># 主translator</span>
    <span class="token key atrule">enable_charset_filter</span><span class="token punctuation">:</span> 是否开启字符集过滤〔仅table_translator有效。启用cjk_minifier后可适用于script_translator〕
    <span class="token key atrule">nable_encoder</span><span class="token punctuation">:</span> 是否开启自动造词〔仅table_translator有效〕
    <span class="token key atrule">encode_commit_history</span><span class="token punctuation">:</span> 是否对已上屛词自动成词〔仅table_translator有效〕
    <span class="token key atrule">max_phrase_length</span><span class="token punctuation">:</span> 最大自动成词词长〔仅table_translator有效〕
    <span class="token key atrule">enable_completion</span><span class="token punctuation">:</span> 提前显示尚未输入完整码的字〔仅table_translator有效〕
    <span class="token key atrule">sentence_over_completion</span><span class="token punctuation">:</span> 在无全码对应字而仅有逐键提示时也开启智能组句〔仅table_translator有效〕
    <span class="token key atrule">strict_spelling</span><span class="token punctuation">:</span> 配合speller中的fuzz规则，仅以畧拼码组词〔仅table_translator有效〕
    <span class="token key atrule">disable_user_dict_for_patterns</span><span class="token punctuation">:</span> 禁止某些编码录入用户词典
    <span class="token key atrule">enable_sentence</span><span class="token punctuation">:</span> 是否开启自动造句
    <span class="token key atrule">enable_user_dict</span><span class="token punctuation">:</span> 是否开启用户词典〔用户词典记录动态字词频、用户词〕
        <span class="token punctuation">-</span> 以上选塡\`true\`或\`false\`
    <span class="token key atrule">dictionary</span><span class="token punctuation">:</span> 翻译器将调取此字典文件
    <span class="token key atrule">prism</span><span class="token punctuation">:</span> 设定由此主翻译器的speller生成的棱镜文件名，或此副编译器调用的棱镜名
    <span class="token key atrule">user_dict</span><span class="token punctuation">:</span> 设定用户词典名
    <span class="token key atrule">db_class</span><span class="token punctuation">:</span> 设定用户词典类型，可设tabledb〔文本〕或userdb〔二进制〕
    <span class="token key atrule">preedit_format</span><span class="token punctuation">:</span> 上屛码自定义
    <span class="token key atrule">comment_format</span><span class="token punctuation">:</span> 提示码自定义
    <span class="token key atrule">spelling_hints</span><span class="token punctuation">:</span> 设定多少字以内候选标注完整带调拼音〔仅script_translator有效〕
    <span class="token key atrule">initial_quality</span><span class="token punctuation">:</span> 设定此翻译器出字优先级 (多翻译器时)
    <span class="token comment"># 副translator</span>
    <span class="token key atrule">tag</span><span class="token punctuation">:</span> 设定此翻译器针对的tag。可不塡，不塡则仅针对abc
    <span class="token key atrule">prefix</span><span class="token punctuation">:</span> 设定此翻译器的前缀标识，可不塡，不塡则无前缀
    <span class="token key atrule">suffix</span><span class="token punctuation">:</span> 设定此翻译器的尾缀标识，可不塡，不塡则无尾缀
    <span class="token key atrule">tips</span><span class="token punctuation">:</span> 设定此翻译器的输入前提示符，可不塡，不塡则无提示符
    <span class="token key atrule">closing_tips</span><span class="token punctuation">:</span> 设定此翻译器的结束输入提示符，可不塡，不塡则无提示符
    <span class="token key atrule">contextual_suggestions</span><span class="token punctuation">:</span> 是否使用语言模型优化输出结果〔需配合grammar使用〕
    <span class="token key atrule">max_homophones</span><span class="token punctuation">:</span> 最大同音簇长度〔需配合grammar使用〕
    <span class="token key atrule">max_homographs</span><span class="token punctuation">:</span> 最大同形簇长度〔需配合grammar使用〕
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p><p>cangjie6.schema.yaml 苍颉主翻译器</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">translator</span><span class="token punctuation">:</span>
  <span class="token key atrule">dictionary</span><span class="token punctuation">:</span> cangjie6
  <span class="token key atrule">enable_charset_filter</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">enable_sentence</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">enable_encoder</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">encode_commit_history</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">max_phrase_length</span><span class="token punctuation">:</span> <span class="token number">5</span>
  <span class="token key atrule">preedit_format</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> xform/^(<span class="token punctuation">[</span>a<span class="token punctuation">-</span>z <span class="token punctuation">]</span>)$/$1｜\\U$1\\E/
    <span class="token punctuation">-</span> xform/(<span class="token punctuation">?</span>&lt;=<span class="token punctuation">[</span>a<span class="token punctuation">-</span>z<span class="token punctuation">]</span>)\\s(<span class="token punctuation">?</span>=<span class="token punctuation">[</span>a<span class="token punctuation">-</span>z<span class="token punctuation">]</span>)//
    <span class="token punctuation">-</span> <span class="token string">&quot;xlit|ABCDEFGHIJKLMNOPQRSTUVWXYZ|日月金木水火土竹戈十大中一弓人心手口尸廿山女田止卜片|&quot;</span>
  <span class="token key atrule">comment_format</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;xlit|abcdefghijklmnopqrstuvwxyz~|日月金木水火土竹戈十大中一弓人心手口尸廿山女田止卜片・|&quot;</span>
  <span class="token key atrule">disable_user_dict_for_patterns</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;^z.$&quot;</span>
  <span class="token key atrule">initial_quality</span><span class="token punctuation">:</span> <span class="token number">0.75</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cangjie6.schema.yaml 拼音副翻译器</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">pinyin</span><span class="token punctuation">:</span>
  <span class="token key atrule">tag</span><span class="token punctuation">:</span> pinyin
  <span class="token key atrule">dictionary</span><span class="token punctuation">:</span> luna_pinyin
  <span class="token key atrule">enable_charset_filter</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">prefix</span><span class="token punctuation">:</span> <span class="token string">&#39;P&#39;</span> <span class="token comment">#须配合recognizer</span>
  <span class="token key atrule">suffix</span><span class="token punctuation">:</span> <span class="token string">&#39;;&#39;</span> <span class="token comment">#须配合recognizer</span>
  <span class="token key atrule">preedit_format</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;xform/([nl])v/$1ü/&quot;</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;xform/([nl])ue/$1üe/&quot;</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;xform/([jqxy])v/$1u/&quot;</span>
  <span class="token key atrule">tips</span><span class="token punctuation">:</span> <span class="token string">&quot;【汉拼】&quot;</span>
  <span class="token key atrule">closing_tips</span><span class="token punctuation">:</span> <span class="token string">&quot;【苍颉】&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pinyin_simp.schema.yaml 拼音・简化字主翻译器</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">translator</span><span class="token punctuation">:</span>
  <span class="token key atrule">dictionary</span><span class="token punctuation">:</span> luna_pinyin
  <span class="token key atrule">prism</span><span class="token punctuation">:</span> luna_pinyin_simp
  <span class="token key atrule">preedit_format</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> xform/(<span class="token punctuation">[</span>nl<span class="token punctuation">]</span>)v/$1ü/
    <span class="token punctuation">-</span> xform/(<span class="token punctuation">[</span>nl<span class="token punctuation">]</span>)ue/$1üe/
    <span class="token punctuation">-</span> xform/(<span class="token punctuation">[</span>jqxy<span class="token punctuation">]</span>)v/$1u/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>luna_pinyin.schema.yaml 朙月拼音用户短语</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">custom_phrase</span><span class="token punctuation">:</span> <span class="token comment">#这是一个table_translator</span>
  <span class="token key atrule">dictionary</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
  <span class="token key atrule">user_dict</span><span class="token punctuation">:</span> custom_phrase
  <span class="token key atrule">db_class</span><span class="token punctuation">:</span> tabledb
  <span class="token key atrule">enable_sentence</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">enable_completion</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">initial_quality</span><span class="token punctuation">:</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reverse-lookup-filter-反查器" tabindex="-1"><a class="header-anchor" href="#reverse-lookup-filter-反查器"><span>reverse_lookup_filter 反查器</span></a></h3><ul><li>此滤镜须挂在<code>translator</code>上，不影响该<code>translator</code>工作</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">tags</span><span class="token punctuation">:</span> 设定其作用范围
<span class="token key atrule">overwrite_comment</span><span class="token punctuation">:</span> 是否覆盖其他提示
<span class="token key atrule">dictionary</span><span class="token punctuation">:</span> 反查所得提示码之码表
<span class="token key atrule">comment_format</span><span class="token punctuation">:</span> 自定义提示码格式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p><p>cangjie6.schema.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">pinyin_reverse_lookup</span><span class="token punctuation">:</span> <span class="token comment">#该反查滤镜名</span>
  <span class="token key atrule">tags</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> pinyin_lookup <span class="token punctuation">]</span> <span class="token comment">#挂在这个tag所对应的翻译器上</span>
  <span class="token key atrule">overwrite_comment</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">dictionary</span><span class="token punctuation">:</span> cangjie6 <span class="token comment">#反查所得为苍颉码</span>
  <span class="token key atrule">comment_format</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;xform/$/〕/&quot;</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;xform/^/〔/&quot;</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;xlit|abcdefghijklmnopqrstuvwxyz |日月金木水火土竹戈十大中一弓人心手口尸廿山女田止卜片、|&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="simplifier-简繁体" tabindex="-1"><a class="header-anchor" href="#simplifier-简繁体"><span>simplifier 简繁体</span></a></h3><ol><li><code>option_name:</code> 对应<code>switches</code>中设定的切换项名，暨<code>key_binder/binding</code>中所用名</li><li><code>opencc_config:</code> 用字转换配置文件 <ul><li>位于：<code>rime_dir/opencc/</code>，自带之配置文件含： <ol><li>繁转简〔默认〕：<code>t2s.json</code></li><li>繁转台湾：<code>t2tw.json</code></li><li>繁转香港：<code>t2hk.json</code></li><li>简转繁：<code>s2t.json</code></li></ol></li></ul></li><li><code>tags:</code> 设定转换范围</li><li><code>tips:</code> 设定是否提示转换前的字，可塡<code>none</code>〔或不塡〕、<code>char</code>〔仅对单字有效〕、<code>all</code></li><li><code>comment_format:</code> 自定义提示码格式</li><li><code>allow_erase_comment:</code> 是否允许返回空提示码〔默认<code>false</code>〕</li><li><code>show_in_comment:</code> 设定是否仅将转换结果显示在备注中</li><li><em><code>excluded_types:</code></em> 取消特定范围〔一般为 <em><code>reverse_lookup_translator</code></em> 〕转化用字</li></ol><p>示例</p><p>修改自 luna_pinyin_kunki.schema</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">zh_tw</span><span class="token punctuation">:</span>
  <span class="token key atrule">option_name</span><span class="token punctuation">:</span> zh_tw
  <span class="token key atrule">opencc_config</span><span class="token punctuation">:</span> t2tw.json
  <span class="token key atrule">tags</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> abc <span class="token punctuation">]</span> <span class="token comment">#abc对应abc_segmentor</span>
  <span class="token key atrule">tips</span><span class="token punctuation">:</span> none
  <span class="token key atrule">allow_erase_comment</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">comment_format</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> xform/.<span class="token important">*//</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="chord-composer-并击" tabindex="-1"><a class="header-anchor" href="#chord-composer-并击"><span>chord_composer 并击</span></a></h3><ul><li>并击把键盘分两半，相当于两块键盘。两边同时击键，系统默认在其中一半上按的键先于另一半，由此得出上屛码</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">alphabet</span><span class="token punctuation">:</span> 字母表，包含用于并击的按键。击键虽有先后，形成并击时，一律以字母表顺序排列
<span class="token key atrule">algebra</span><span class="token punctuation">:</span> 拼写运算规则，将一组并击编码转换为拼音音节
<span class="token key atrule">output_format</span><span class="token punctuation">:</span> 并击完成后套用的式样，追加隔音符号
<span class="token key atrule">prompt_format</span><span class="token punctuation">:</span> 并击过程中套用的式样，加方括弧
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p><p>combo_pinyin.schema.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">chord_composer</span><span class="token punctuation">:</span>
  <span class="token comment"># 字母表，包含用于并击的按键</span>
  <span class="token comment"># 击键虽有先后，形成并击时，一律以字母表顺序排列</span>
  <span class="token key atrule">alphabet</span><span class="token punctuation">:</span> <span class="token string">&quot;swxdecfrvgtbnjum ki,lo.&quot;</span>
  <span class="token comment"># 拼写运算规则，将一组并击编码转换为拼音音节</span>
  <span class="token key atrule">algebra</span><span class="token punctuation">:</span>
    <span class="token comment"># 先将物理按键字符对应到宫保拼音键位中的拼音字母</span>
    <span class="token punctuation">-</span> <span class="token string">&#39;xlit|swxdecfrvgtbnjum ki,lo.|sczhlfgdbktpRiuVaNIUeoE|&#39;</span>
    <span class="token comment"># 以下根据宫保拼音的键位分别变换声母、韵母部分</span>
    <span class="token comment"># 组合声母</span>
    <span class="token punctuation">-</span> xform/^zf/zh/
    <span class="token punctuation">-</span> xform/^cl/ch/
    <span class="token punctuation">-</span> xform/^fb/m/
    <span class="token punctuation">-</span> xform/^ld/n/
    <span class="token punctuation">-</span> xform/^hg/r/
    ……
    <span class="token comment"># 声母独用时补足隠含的韵母</span>
    <span class="token punctuation">-</span> xform/^(<span class="token punctuation">[</span>bpf<span class="token punctuation">]</span>)$/$1u/
    <span class="token punctuation">-</span> xform/^(<span class="token punctuation">[</span>mdtnlgkh<span class="token punctuation">]</span>)$/$1e/
    <span class="token punctuation">-</span> xform/^(<span class="token punctuation">[</span>mdtnlgkh<span class="token punctuation">]</span>)$/$1e/
    <span class="token punctuation">-</span> xform/^(<span class="token punctuation">[</span>zcsr<span class="token punctuation">]</span>h<span class="token punctuation">?</span>)$/$1i/
  <span class="token comment"># 并击完成后套用的式样，追加隔音符号</span>
  <span class="token key atrule">output_format</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;xform/^([a-z]+)$/$1&#39;/&quot;</span>
  <span class="token comment"># 并击过程中套用的式样，加方括弧</span>
  <span class="token key atrule">prompt_format</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;xform/^(.*)$/[$1]/&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lua-脚本" tabindex="-1"><a class="header-anchor" href="#lua-脚本"><span>lua 脚本</span></a></h3>`,47),b={href:"https://github.com/hchunhui/librime-lua",target:"_blank",rel:"noopener noreferrer"},y=a(`<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>lua_translator
lua_filter
lua_processor
lua_segmentor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p><p>rime.lua</p><div class="language-lua line-numbers-mode" data-ext="lua" data-title="lua"><pre class="language-lua"><code><span class="token keyword">function</span> <span class="token function">get_date</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> seg<span class="token punctuation">,</span> env<span class="token punctuation">)</span>
  <span class="token comment">--- 以 show_date 为开关名或 key_binder 中 toggle 的对象</span>
  on <span class="token operator">=</span> env<span class="token punctuation">.</span>engine<span class="token punctuation">.</span>context<span class="token punctuation">:</span><span class="token function">get_option</span><span class="token punctuation">(</span><span class="token string">&quot;show_date&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>on <span class="token keyword">and</span> input <span class="token operator">==</span> <span class="token string">&quot;date&quot;</span><span class="token punctuation">)</span> <span class="token keyword">then</span>
    <span class="token comment">--- Candidate(type, start, end, text, comment)</span>
    <span class="token function">yield</span><span class="token punctuation">(</span><span class="token function">Candidate</span><span class="token punctuation">(</span><span class="token string">&quot;date&quot;</span><span class="token punctuation">,</span> seg<span class="token punctuation">.</span>start<span class="token punctuation">,</span> seg<span class="token punctuation">.</span>_end<span class="token punctuation">,</span> os<span class="token punctuation">.</span><span class="token function">date</span><span class="token punctuation">(</span><span class="token string">&quot;%Y年%m月%d日&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot; 日期&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">end</span>
<span class="token keyword">end</span>
<span class="token comment">---</span>
<span class="token keyword">function</span> <span class="token function">single_char_first</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> env<span class="token punctuation">)</span>
  <span class="token comment">--- 以 single_char 为开关名或 key_binder 中 toggle 的对象</span>
  on <span class="token operator">=</span> env<span class="token punctuation">.</span>engine<span class="token punctuation">.</span>context<span class="token punctuation">:</span><span class="token function">get_option</span><span class="token punctuation">(</span><span class="token string">&quot;single_char&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">local</span> cache <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">for</span> cand <span class="token keyword">in</span> input<span class="token punctuation">:</span><span class="token function">iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">do</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">not</span> on <span class="token keyword">or</span> utf8<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span>cand<span class="token punctuation">.</span>text<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">then</span>
      <span class="token function">yield</span><span class="token punctuation">(</span>cand<span class="token punctuation">)</span>
    <span class="token keyword">else</span>
      table<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>cache<span class="token punctuation">,</span> cand<span class="token punctuation">)</span>
    <span class="token keyword">end</span>
  <span class="token keyword">end</span>
  <span class="token keyword">for</span> i<span class="token punctuation">,</span> cand <span class="token keyword">in</span> <span class="token function">ipairs</span><span class="token punctuation">(</span>cache<span class="token punctuation">)</span> <span class="token keyword">do</span>
    <span class="token function">yield</span><span class="token punctuation">(</span>cand<span class="token punctuation">)</span>
  <span class="token keyword">end</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="key-binder-按键绑定" tabindex="-1"><a class="header-anchor" href="#key-binder-按键绑定"><span>key_binder 按键绑定</span></a></h3><p>key_binder: 下设bindings: 设置功能性快捷键</p><ul><li><p>每一条<code>binding</code>包含：<code>when</code>作用范围、<code>accept</code>实际所按之键，以及期望的操作</p></li><li><p>操作可为以下任意一个：<code>send</code>输出按键、<code>toggle</code>切换开关、<code>send_sequence</code>输出一串按键、<code>set_option</code>开某多选开关、<code>unset_option</code>关某多选开关、<code>select</code>选候选字</p><ul><li><p><code>toggle</code>可用字段包含各开关名</p></li><li><p><code>set_option</code>、<code>unset_option</code>可用字段包含多选开关名</p></li><li><p><code>when</code>可用字段包含：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>paging	翻䈎用
has_menu	操作候选项用
composing	操作输入码用
always	全域
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><p><code>accept</code>和<code>send</code>可用字段除 A-Za-z0-9 外，还包含以下键板上实际有的键：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>BackSpace	退格
Tab	水平定位符
Linefeed	换行
Clear	清除
Return	回车
Pause	暂停
Sys_Req	印屏
Escape	退出
Delete	删除
Home	原位
Left	左箭头
Up	上箭头
Right	右箭头
Down	下箭头
Prior、Page_Up	上翻
Next、Page_Down	下翻
End	末位
Begin	始位
Shift_L	左Shift
Shift_R	右Shift
Control_L	左Ctrl
Control_R	右Ctrl
Meta_L	左Meta
Meta_R	右Meta
Alt_L	左Alt
Alt_R	右Alt
Super_L	左Super
Super_R	右Super
Hyper_L	左Hyper
Hyper_R	右Hyper
Caps_Lock	大写锁
Shift_Lock	上档锁
Scroll_Lock	滚动锁
Num_Lock	小键板锁
Select	选定
Print	列印
Execute	执行
Insert	插入
Undo	还原
Redo	重做
Menu	菜单
Find	搜寻
Cancel	取消
Help	帮助
Break	中断
space
exclam	<span class="token tag">!</span>
quotedbl	&quot;
numbersign	<span class="token comment">#</span>
dollar	$
percent	%
ampersand	&amp;
apostrophe	&#39;
parenleft	(
parenright	)
asterisk	*
plus	+
comma	<span class="token punctuation">,</span>
minus	<span class="token punctuation">-</span>
period	.
slash	/
<span class="token key atrule">colon</span>	<span class="token punctuation">:</span>
semicolon	;
less	&lt;
equal	=
greater	<span class="token punctuation">&gt;</span>
question	<span class="token punctuation">?</span>
at	@
bracketleft	<span class="token punctuation">[</span>
backslash
bracketright	<span class="token punctuation">]</span>
asciicircum	^
underscore	_
grave	\`
braceleft	<span class="token punctuation">{</span>
bar	<span class="token punctuation">|</span>
braceright	<span class="token punctuation">}</span>
asciitilde	~
KP_Space	小键板空格
KP_Tab	小键板水平定位符
KP_Enter	小键板回车
KP_Delete	小键板删除
KP_Home	小键板原位
KP_Left	小键板左箭头
KP_Up	小键板上箭头
KP_Right	小键板右箭头
KP_Down	小键板下箭头
KP_Prior、KP_Page_Up	小键板上翻
KP_Next、KP_Page_Down	小键板下翻
KP_End	小键板末位
KP_Begin	小键板始位
KP_Insert	小键板插入
KP_Equal	小键板等于
KP_Multiply	小键板乘号
KP_Add	小键板加号
KP_Subtract	小键板减号
KP_Divide	小键板除号
KP_Decimal	小键板小数点
KP_0	小键板0
KP_1	小键板1
KP_2	小键板2
KP_3	小键板3
KP_4	小键板4
KP_5	小键板5
KP_6	小键板6
KP_7	小键板7
KP_8	小键板8
KP_9	小键板9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>editor</code>用以订制操作键〔不支持<code>import_preset:</code>〕，键板键名同<code>key_binder/bindings</code>中的<code>accept</code>和<code>send</code>，效果定义如下：</p><div class="language-csv line-numbers-mode" data-ext="csv" data-title="csv"><pre class="language-csv"><code><span class="token value">confirm	上屏候选项</span>
<span class="token value">commit_comment	上屏候选项备注</span>
<span class="token value">commit_raw_input	上屏原始输入</span>
<span class="token value">commit_script_text	上屏变换后输入</span>
<span class="token value">commit_composition	语句流单字上屏</span>
<span class="token value">revert	撤消上次输入</span>
<span class="token value">back	按字符回退</span>
<span class="token value">back_syllable	按音节回退</span>
<span class="token value">delete_candidate	删除候选项</span>
<span class="token value">delete	向后删除</span>
<span class="token value">cancel	取消输入</span>
<span class="token value">noop	空</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>punctuator:</code> 下设<code>full_shape:</code>和<code>half_shape:</code>分别控制全角模式下的符号和半角模式下的符号，另有<code>use_space:</code>空格顶字〔<code>true</code>或<code>false</code>〕</p><ul><li>每条标点项可加<code>commit</code>直接上屏和<code>pair</code>交替上屏两种模式，默认为选单模式</li></ul><h3 id="recognizer-识别器" tabindex="-1"><a class="header-anchor" href="#recognizer-识别器"><span>recognizer 识别器</span></a></h3><p><code>recognizer:</code> 下设<code>patterns:</code> 配合<code>segmentor</code>的<code>prefix</code>和<code>suffix</code>完成段落划分、<code>tag</code>分配</p><ul><li>前字段可以为以<code>affix_segmentor@someTag</code>定义的<code>Tag</code>名，或者<code>punct</code>、<code>reverse_lookup</code>两个内设的字段。其它字段不调用输入法引擎，输入即输出〔如<code>url</code>等字段〕</li></ul><p>示例</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">recognizer</span><span class="token punctuation">:</span>
  <span class="token key atrule">import_preset</span><span class="token punctuation">:</span> default
  <span class="token key atrule">patterns</span><span class="token punctuation">:</span>
    <span class="token key atrule">email</span><span class="token punctuation">:</span> <span class="token string">&quot;^[a-z][-_.0-9a-z]*@.*$&quot;</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;^(www[.]|https?:|ftp:|mailto:).*$&quot;</span>
    <span class="token key atrule">reverse_lookup</span><span class="token punctuation">:</span> <span class="token string">&quot;\`[a-z]*;?$&quot;</span>
    <span class="token key atrule">pinyin_lookup</span><span class="token punctuation">:</span> <span class="token string">&quot;\`P[a-z]*;?$&quot;</span>
    <span class="token key atrule">jyutping_lookup</span><span class="token punctuation">:</span> <span class="token string">&quot;\`J[a-z]*;?$&quot;</span>
    <span class="token key atrule">pinyin</span><span class="token punctuation">:</span> <span class="token string">&quot;(?&lt;!\`)P[a-z&#39;]*;?$&quot;</span>
    <span class="token key atrule">jyutping</span><span class="token punctuation">:</span> <span class="token string">&quot;(?&lt;!\`)J[a-z&#39;]*;?$&quot;</span>
    <span class="token key atrule">punct</span><span class="token punctuation">:</span> <span class="token string">&quot;/[a-z]*$&quot;</span> <span class="token comment">#配合symbols.yaml中的特殊字符输入</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="punctuator-标点" tabindex="-1"><a class="header-anchor" href="#punctuator-标点"><span>punctuator 标点</span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">punctuator</span><span class="token punctuation">:</span> <span class="token comment"># 标点</span>
  <span class="token key atrule">import_preset</span><span class="token punctuation">:</span> default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="history-输入历史" tabindex="-1"><a class="header-anchor" href="#history-输入历史"><span>history 输入历史</span></a></h3><p>可用于重复上次上屏</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">history</span><span class="token punctuation">:</span>
  <span class="token key atrule">input</span><span class="token punctuation">:</span> ;f
  <span class="token key atrule">size</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># 重复前几次上屏</span>
  <span class="token key atrule">initial_quality</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># 首选</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">punctuator</span><span class="token punctuation">:</span>
  <span class="token key atrule">import_preset</span><span class="token punctuation">:</span> symbols
  <span class="token key atrule">half_shape</span><span class="token punctuation">:</span>
    <span class="token key atrule">&quot;&#39;&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token key atrule">pair</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;「&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;」&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span> <span class="token comment">#第一次按是「，第二次是」</span>
    <span class="token key atrule">&quot;(&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;〔&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;［&quot;</span><span class="token punctuation">]</span> <span class="token comment">#弹出选单</span>
    <span class="token key atrule">.</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token key atrule">commit</span><span class="token punctuation">:</span> <span class="token string">&quot;。&quot;</span><span class="token punctuation">}</span> <span class="token comment">#无选单，直接上屛。优先级最高</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="menu-候选项数等" tabindex="-1"><a class="header-anchor" href="#menu-候选项数等"><span>menu 候选项数等</span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">menu</span><span class="token punctuation">:</span>
  <span class="token punctuation">[</span> _<span class="token punctuation">,</span> e<span class="token punctuation">,</span> x<span class="token punctuation">,</span> C<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token key atrule">alternative_select_keys</span><span class="token punctuation">:</span> <span class="token string">&quot;_exC234890&quot;</span>
  <span class="token key atrule">page_size</span><span class="token punctuation">:</span> <span class="token number">9</span> <span class="token comment"># 候选项数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="style-样式-横排竖排等" tabindex="-1"><a class="header-anchor" href="#style-样式-横排竖排等"><span>style 样式，横排竖排等</span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">style</span><span class="token punctuation">:</span>
  <span class="token key atrule">horizontal</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 竖排为false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h3><p>包括<code>recognizer</code>、<code>key_binder</code>、<code>punctuator</code>。 <strong>标点</strong> 、 <strong>快捷键</strong> 、 <strong>二三选重</strong> 、<strong>特殊字符</strong>等均于此设置</p><ol><li><p><strong><code>import_preset:</code></strong> 由外部统一文件导入</p></li><li><p><code>grammar:</code> 下设：</p><ul><li><code>language:</code> 取值<code>zh-han[ts]-t-essay-bg[wc]</code></li><li><code>collocation_max_length:</code> 最大搭配长度（整句输入可忽畧此项）</li><li><code>collocation_min_length:</code> 最小搭配长度（整句输入可忽畧此项）</li></ul></li></ol><p>示例</p><p>修改自 cangjie6.schema.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">key_binder</span><span class="token punctuation">:</span>
  <span class="token key atrule">import_preset</span><span class="token punctuation">:</span> default
  <span class="token key atrule">bindings</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token key atrule">accept</span><span class="token punctuation">:</span> semicolon<span class="token punctuation">,</span> <span class="token key atrule">send</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token key atrule">when</span><span class="token punctuation">:</span> has_menu<span class="token punctuation">}</span> <span class="token comment"># 分号选第二重码</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token key atrule">accept</span><span class="token punctuation">:</span> apostrophe<span class="token punctuation">,</span> <span class="token key atrule">send</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token key atrule">when</span><span class="token punctuation">:</span> has_menu<span class="token punctuation">}</span> <span class="token comment"># 引号选第三重码</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token key atrule">accept</span><span class="token punctuation">:</span> <span class="token string">&quot;Control+1&quot;</span><span class="token punctuation">,</span> <span class="token key atrule">select</span><span class="token punctuation">:</span> .next<span class="token punctuation">,</span> <span class="token key atrule">when</span><span class="token punctuation">:</span> always<span class="token punctuation">}</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token key atrule">accept</span><span class="token punctuation">:</span> <span class="token string">&quot;Control+2&quot;</span><span class="token punctuation">,</span> <span class="token key atrule">toggle</span><span class="token punctuation">:</span> full_shape<span class="token punctuation">,</span> <span class="token key atrule">when</span><span class="token punctuation">:</span> always<span class="token punctuation">}</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token key atrule">accept</span><span class="token punctuation">:</span> <span class="token string">&quot;Control+3&quot;</span><span class="token punctuation">,</span> <span class="token key atrule">toggle</span><span class="token punctuation">:</span> simplification<span class="token punctuation">,</span> <span class="token key atrule">when</span><span class="token punctuation">:</span> always<span class="token punctuation">}</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token key atrule">accept</span><span class="token punctuation">:</span> <span class="token string">&quot;Control+4&quot;</span><span class="token punctuation">,</span> <span class="token key atrule">toggle</span><span class="token punctuation">:</span> extended_charset<span class="token punctuation">,</span> <span class="token key atrule">when</span><span class="token punctuation">:</span> always<span class="token punctuation">}</span>
<span class="token key atrule">editor</span><span class="token punctuation">:</span>
  <span class="token key atrule">bindings</span><span class="token punctuation">:</span>
    <span class="token key atrule">Return</span><span class="token punctuation">:</span> commit_comment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其它" tabindex="-1"><a class="header-anchor" href="#其它"><span>其它</span></a></h2><ul><li>Rime 还为每个方案提供选单和一定的外观订制能力</li><li>通常情况下<code>menu</code>在<code>default.yaml</code>中定义〔或用户修改档<code>default.custom.yaml</code>〕，<code>style</code>在<code>squirrel.yaml</code>或<code>weasel.yaml</code>〔或用户修改档<code>squirrel.custom.yaml</code>或<code>weasel.custom.yaml</code>〕</li></ul><p>示例</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">menu</span><span class="token punctuation">:</span>
  <span class="token key atrule">alternative_select_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> ①<span class="token punctuation">,</span> ②<span class="token punctuation">,</span> ③<span class="token punctuation">,</span> ④<span class="token punctuation">,</span> ⑤<span class="token punctuation">,</span> ⑥<span class="token punctuation">,</span> ⑦<span class="token punctuation">,</span> ⑧<span class="token punctuation">,</span> ⑨ <span class="token punctuation">]</span>  <span class="token comment"># 修改候选标签</span>
  <span class="token key atrule">alternative_select_keys</span><span class="token punctuation">:</span> ASDFGHJKL <span class="token comment">#如编码字符占用数字键则须另设选字键</span>
  <span class="token key atrule">page_size</span><span class="token punctuation">:</span> <span class="token number">5</span> <span class="token comment">#选单每䈎显示个数</span>
<span class="token key atrule">style</span><span class="token punctuation">:</span>
  <span class="token key atrule">font_face</span><span class="token punctuation">:</span> <span class="token string">&quot;HanaMinA, HanaMinB&quot;</span> <span class="token comment">#字体〔小狼毫得且仅得设一个字体；鼠须管得设多个字体，后面的字体自动补前面字体不含的字〕</span>
  <span class="token key atrule">font_point</span><span class="token punctuation">:</span> <span class="token number">15</span> <span class="token comment">#字号</span>
  <span class="token key atrule">label_format</span><span class="token punctuation">:</span> <span class="token string">&#39;%s&#39;</span>  <span class="token comment"># 候选标签格式</span>
  <span class="token key atrule">horizontal</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment">#横／直排</span>
  <span class="token key atrule">line_spacing</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment">#行距</span>
  <span class="token key atrule">inline_preedit</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment">#输入码内嵌</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="dict-yaml-详解" tabindex="-1"><a class="header-anchor" href="#dict-yaml-详解"><span>Dict.yaml 详解</span></a></h1><h2 id="头信息" tabindex="-1"><a class="header-anchor" href="#头信息"><span>头信息</span></a></h2><h3 id="开始之前-1" tabindex="-1"><a class="header-anchor" href="#开始之前-1"><span>开始之前</span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># Rime dict</span>
<span class="token comment"># encoding: utf-8</span>
〔你还可以在这注释字典来源、变动记录等〕
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="描述档" tabindex="-1"><a class="header-anchor" href="#描述档"><span>描述档</span></a></h3><ol><li><code>name:</code> 内部字典名，也即<code>schema</code>所引用的字典名，确保与文件名相一致</li><li><code>version:</code> 如果发布，请确保每次改动升版本号</li></ol><p>示例</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;cangjie6.extended&quot;</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;0.1&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">sort</span><span class="token punctuation">:</span> 字典初始排序，可选original或by_weight
<span class="token key atrule">use_preset_vocabulary</span><span class="token punctuation">:</span> 是否引入「八股文」〔含字词频、词库〕
<span class="token key atrule">max_phrase_length</span><span class="token punctuation">:</span> 配合use_preset_vocabulary<span class="token punctuation">:</span>，设定导入词条最大词长
<span class="token key atrule">min_phrase_weight</span><span class="token punctuation">:</span> 配合use_preset_vocabulary<span class="token punctuation">:</span>，设定导入词条最小词频
<span class="token key atrule">columns</span><span class="token punctuation">:</span> 定义码表以Tab分隔出的各列，可设text【文本】、code【码】、weight【权重】、stem【造词码】
<span class="token key atrule">import_tables</span><span class="token punctuation">:</span> 加载其它外部码表
<span class="token key atrule">encoder</span><span class="token punctuation">:</span> 形码造词规则
    <span class="token key atrule">exclude_patterns</span><span class="token punctuation">:</span>
    <span class="token key atrule">rules</span><span class="token punctuation">:</span> 可用length_equal<span class="token punctuation">:</span>和length_in_range<span class="token punctuation">:</span>定义。大写字母表示字序，小写字母表示其所跟随的大写字母所以表的字中的编码序
    <span class="token key atrule">tail_anchor</span><span class="token punctuation">:</span> 造词码包含结构分割符〔仅用于仓颉〕
    <span class="token key atrule">exclude_patterns</span><span class="token punctuation">:</span> 取消某编码的造词资格
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p><p>cangjie6.extended.dict.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">sort</span><span class="token punctuation">:</span> by_weight
<span class="token key atrule">use_preset_vocabulary</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">import_tables</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> cangjie6 <span class="token comment"># 单字码表由cangjie6.dict.yaml导入</span>
<span class="token key atrule">columns</span><span class="token punctuation">:</span> <span class="token comment"># 此字典为纯词典，无单字编码，仅有字和词频</span>
  <span class="token punctuation">-</span> text <span class="token comment"># 字／词</span>
  <span class="token punctuation">-</span> weight <span class="token comment"># 字／词频</span>
<span class="token key atrule">encoder</span><span class="token punctuation">:</span>
  <span class="token key atrule">exclude_patterns</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&#39;^z.*$&#39;</span>
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">length_equal</span><span class="token punctuation">:</span> <span class="token number">2</span> <span class="token comment"># 对于二字词</span>
      <span class="token key atrule">formula</span><span class="token punctuation">:</span> <span class="token string">&quot;AaAzBaBbBz&quot;</span> <span class="token comment"># 取第一字首尾码、第二字首次尾码</span>
    <span class="token punctuation">-</span> <span class="token key atrule">length_equal</span><span class="token punctuation">:</span> <span class="token number">3</span> <span class="token comment"># 对于三字词</span>
      <span class="token key atrule">formula</span><span class="token punctuation">:</span> <span class="token string">&quot;AaAzBaYzZz&quot;</span> <span class="token comment"># 取第一字首尾码、第二字首尾码、第三字尾码</span>
    <span class="token punctuation">-</span> <span class="token key atrule">length_in_range</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token comment"># 对于四至五字词</span>
      <span class="token key atrule">formula</span><span class="token punctuation">:</span> <span class="token string">&quot;AaBzCaYzZz&quot;</span> <span class="token comment"># 取第一字首码，第二字尾码、第三字首码、倒数第二字尾码、最后一字尾码</span>
  <span class="token key atrule">tail_anchor</span><span class="token punctuation">:</span> <span class="token string">&quot;&#39;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="码表" tabindex="-1"><a class="header-anchor" href="#码表"><span>码表</span></a></h2><ul><li>以<code>Tab</code>分隔各列，各列依<code>columns:</code>定义排列。</li></ul><p>示例</p><p>cangjie6.dict.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">columns</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> text <span class="token comment">#第一列字／词</span>
  <span class="token punctuation">-</span> code <span class="token comment">#第二列码</span>
  <span class="token punctuation">-</span> weight <span class="token comment">#第三列字／词频</span>
  <span class="token punctuation">-</span> stem <span class="token comment">#第四列造词码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cangjie6.dict.yaml</p><div class="language-csv line-numbers-mode" data-ext="csv" data-title="csv"><pre class="language-csv"><code><span class="token value">个	owjr	246268	ow&#39;jr</span>
<span class="token value">看	hqbu	245668</span>
<span class="token value">中	l	243881</span>
<span class="token value">呢	rsp	242970</span>
<span class="token value">来	doo	235101</span>
<span class="token value">吗	rsqf	221092</span>
<span class="token value">为	bhnf	211340</span>
<span class="token value">会	owfa	209844</span>
<span class="token value">她	vpd	204725</span>
<span class="token value">与	xyc	203975</span>
<span class="token value">给	vfor	193007</span>
<span class="token value">等	hgdi	183340</span>
<span class="token value">这	yymr	181787</span>
<span class="token value">用	bq	168934	b&#39;q</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,59);function g(h,_){const e=i("ExternalLinkIcon");return p(),c("div",null,[u,s("p",null,[n("凡"),d,n("、"),r,n("、"),k,n("所用之正则表达式，请参阅"),s("a",m,[n("「Perl 正则表达式」"),t(e)])]),v,s("ul",null,[s("li",null,[n("请参考 "),s("a",b,[n("hchunhui/librime-lua"),t(e)]),n(" 以寻求更多灵感。")])]),y])}const q=l(o,[["render",g],["__file","04. Schema.yaml 详解.html.vue"]]),w=JSON.parse('{"path":"/MdNote_Public/03.%20%E7%94%9F%E6%B4%BB%E6%8A%80%E8%83%BD%E4%B8%8E%E7%94%9F%E6%B4%BB%E7%94%9F%E4%BA%A7/%E8%BE%93%E5%85%A5%E6%B3%95/RIME/01.%20%E6%96%87%E6%A1%A3/03.%20%E8%BF%9B%E9%98%B6/04.%20Schema.yaml%20%E8%AF%A6%E8%A7%A3.html","title":"Schema.yaml 详解","lang":"zh-CN","frontmatter":{"feed":false,"seo":false,"head":[]},"headers":[{"level":1,"title":"Schema.yaml 详解","slug":"schema-yaml-详解","link":"#schema-yaml-详解","children":[{"level":2,"title":"开始之前","slug":"开始之前","link":"#开始之前","children":[]},{"level":2,"title":"描述档 schema","slug":"描述档-schema","link":"#描述档-schema","children":[]},{"level":2,"title":"开关 switches","slug":"开关-switches","link":"#开关-switches","children":[{"level":3,"title":"中英文 ascii_mode","slug":"中英文-ascii-mode","link":"#中英文-ascii-mode","children":[]},{"level":3,"title":"全半角符号 full_shape","slug":"全半角符号-full-shape","link":"#全半角符号-full-shape","children":[]},{"level":3,"title":"中西文符号 ascii_punct","slug":"中西文符号-ascii-punct","link":"#中西文符号-ascii-punct","children":[]},{"level":3,"title":"字符集开关 extended_charset","slug":"字符集开关-extended-charset","link":"#字符集开关-extended-charset","children":[]},{"level":3,"title":"简繁体(转化字)开关 simplification","slug":"简繁体-转化字-开关-simplification","link":"#简繁体-转化字-开关-simplification","children":[]},{"level":3,"title":"(多选开关)","slug":"多选开关","link":"#多选开关","children":[]},{"level":3,"title":"(整体使用)","slug":"整体使用","link":"#整体使用","children":[]}]},{"level":2,"title":"引擎 engine","slug":"引擎-engine","link":"#引擎-engine","children":[{"level":3,"title":"processors 按键消息","slug":"processors-按键消息","link":"#processors-按键消息","children":[]},{"level":3,"title":"segmentors","slug":"segmentors","link":"#segmentors","children":[]},{"level":3,"title":"translators","slug":"translators","link":"#translators","children":[]},{"level":3,"title":"filters","slug":"filters","link":"#filters","children":[]},{"level":3,"title":"(整体使用)","slug":"整体使用-1","link":"#整体使用-1","children":[]}]},{"level":2,"title":"细项配置","slug":"细项配置","link":"#细项配置","children":[{"level":3,"title":"speller 自动上屏等","slug":"speller-自动上屏等","link":"#speller-自动上屏等","children":[]},{"level":3,"title":"segmentor 分段器","slug":"segmentor-分段器","link":"#segmentor-分段器","children":[]},{"level":3,"title":"translator 翻译器","slug":"translator-翻译器","link":"#translator-翻译器","children":[]},{"level":3,"title":"reverse_lookup_filter 反查器","slug":"reverse-lookup-filter-反查器","link":"#reverse-lookup-filter-反查器","children":[]},{"level":3,"title":"simplifier 简繁体","slug":"simplifier-简繁体","link":"#simplifier-简繁体","children":[]},{"level":3,"title":"chord_composer 并击","slug":"chord-composer-并击","link":"#chord-composer-并击","children":[]},{"level":3,"title":"lua 脚本","slug":"lua-脚本","link":"#lua-脚本","children":[]},{"level":3,"title":"key_binder 按键绑定","slug":"key-binder-按键绑定","link":"#key-binder-按键绑定","children":[]},{"level":3,"title":"recognizer 识别器","slug":"recognizer-识别器","link":"#recognizer-识别器","children":[]},{"level":3,"title":"punctuator 标点","slug":"punctuator-标点","link":"#punctuator-标点","children":[]},{"level":3,"title":"history 输入历史","slug":"history-输入历史","link":"#history-输入历史","children":[]},{"level":3,"title":"menu 候选项数等","slug":"menu-候选项数等","link":"#menu-候选项数等","children":[]},{"level":3,"title":"style 样式，横排竖排等","slug":"style-样式-横排竖排等","link":"#style-样式-横排竖排等","children":[]},{"level":3,"title":"其他","slug":"其他","link":"#其他","children":[]}]},{"level":2,"title":"其它","slug":"其它","link":"#其它","children":[]}]},{"level":1,"title":"Dict.yaml 详解","slug":"dict-yaml-详解","link":"#dict-yaml-详解","children":[{"level":2,"title":"头信息","slug":"头信息","link":"#头信息","children":[{"level":3,"title":"开始之前","slug":"开始之前-1","link":"#开始之前-1","children":[]},{"level":3,"title":"描述档","slug":"描述档","link":"#描述档","children":[]}]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"码表","slug":"码表","link":"#码表","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":17.92,"words":5376},"filePathRelative":"MdNote_Public/03. 生活技能与生活生产/输入法/RIME/01. 文档/03. 进阶/04. Schema.yaml 详解.md"}');export{q as comp,w as data};

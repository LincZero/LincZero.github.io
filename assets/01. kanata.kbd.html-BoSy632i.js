import{_ as s,c as a,e,o as i}from"./app-DL5M9yrN.js";const t={};function l(c,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h1 id="kanata-kbd" tabindex="-1"><a class="header-anchor" href="#kanata-kbd"><span>kanata.kbd</span></a></h1><p>这个文件是官方示例的脚本文件，我在这里会将他拆开成多段进行注释，但实际上他们属于同一个文件</p><p>（我是按顺序拆分分的，也没有省略段落，最多就是进行了一些注释中的翻译。这些脚本块拼起来就是原文件的内容）</p><h2 id="文件介绍" tabindex="-1"><a class="header-anchor" href="#文件介绍"><span>文件介绍</span></a></h2><div class="language-lisp line-numbers-mode" data-ext="lisp" data-title="lisp"><pre class="language-lisp"><code>#|
这是一个示例配置文件，展示了kanata中的每个特性。
在这里可以找到一个更详细、更简洁的配置指南：

https<span class="token lisp-property property">://github</span>.com/jtroo/kanata/blob/main/docs/config.adoc

其他配置示例如下：

https<span class="token lisp-property property">://github</span>.com/jtroo/kanata/tree/main/cfg_samples

如果有什么令人困惑或难以发现的，请提交问题或贡献一个pull请求来帮助改进文档。

因为这对你来说可能很重要，所以按住所有的同时按下以下三个键将导致kanata退出：

左Ctrl，Space，Esc

这是用于物理键输入，而不是在任何重新映射之后
这些都是卡纳塔做的。
|#
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释"><span>注释</span></a></h2><div class="language-lisp line-numbers-mode" data-ext="lisp" data-title="lisp"><pre class="language-lisp"><code><span class="token comment">;; 单行注释以双分号为前缀。一个分号被解析为键盘键。配置文件的注释将被忽略。</span>

#|
多行注释块以 \`#|\` 开头，后跟一个管道。
要结束多行注释块，请使用一个管道，后跟一个8号管道。
就像下面去掉冒号的序列：\`|:#\`。没有使用实际的两个字符序列，因为它将结束这个多行注释块并导致解析错误。.

这种配置语言类似于lisp，并使用S-Expression语法。
如果您不熟悉Lisp，不要惊慌。维护人员jtroo也不熟悉Lisp。您不需要深入了解Lisp就可以配置kanata。

如果您按照示例进行操作，应该不会有问题。但愿Kanata也有有用的错误信息，以防出现问题。
如果你需要帮助，欢迎在GitHub讨论中提问。
|#
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="defcfg-配置键值对设" tabindex="-1"><a class="header-anchor" href="#defcfg-配置键值对设"><span>defcfg 配置键值对设</span></a></h2><div class="language-lisp line-numbers-mode" data-ext="lisp" data-title="lisp"><pre class="language-lisp"><code><span class="token comment">;; 如果需要，可以添加一个defcfg条目。这用于配置键值对，这些键值对在全局级别上更改kanata的行为。</span>
<span class="token comment">;; 所有defcfg选项都是可选的。</span>
<span class="token punctuation">(</span><span class="token car">defcfg</span>
  <span class="token comment">;; 您的键盘设备可能与此不同。我认为 /dev/input/by-id/ 更可取；我记得读到过它不太可能改变你的名字，但我没有在我的VM中找到任何键盘设备。如果您使用的是Linux并且省略了这个条目，kanata将尝试连接到您的系统中所有看起来像键盘的设备。</span>
  <span class="token comment">;; linux-dev /dev/input/by-path/platform-i8042-serio-0-event-kbd</span>

  <span class="token comment">;; If you want to read from multiple devices, separate them by \`:\`.</span>
  <span class="token comment">;; linux-dev /dev/input/&lt;dev1&gt;:/dev/input/&lt;dev2&gt;</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; If you have a colon in your device path, add a backslash before it so that</span>
  <span class="token comment">;; kanata does not parse it as multiple devices.</span>
  <span class="token comment">;; linux-dev /dev/input/path-to\\:device</span>

  <span class="token comment">;; Alternatively, you can use list syntax, where both backslashes and colons</span>
  <span class="token comment">;; are parsed literally. List items are separated by spaces or newlines.</span>
  <span class="token comment">;; Using quotation marks for each item is optional, and only required if an</span>
  <span class="token comment">;; item contains spaces.</span>
  <span class="token comment">;; linux-dev (</span>
  <span class="token comment">;;   /dev/input/by-path/pci-0000:00:14.0-usb-0:1:1.0-event</span>
  <span class="token comment">;;   /dev/input/by-id/usb-Dell_Dell_USB_Keyboard-event-kbd</span>
  <span class="token comment">;; )</span>

  <span class="token comment">;; The linux-dev-names-include entry is parsed identically to linux-dev. It</span>
  <span class="token comment">;; defines a list of device names that should be included. This is only</span>
  <span class="token comment">;; used if linux-dev is omitted.</span>
  <span class="token comment">;; linux-dev-names-include device-1-name:device\\:2\\:name</span>

  <span class="token comment">;; The linux-dev-names-exclude entry is parsed identically to linux-dev. It</span>
  <span class="token comment">;; defines a list of device names that should be excluded. This is only</span>
  <span class="token comment">;; used if linux-dev is omitted. This and linux-dev-names-include are not</span>
  <span class="token comment">;; mutually exclusive but in practice it probably makes sense to only use</span>
  <span class="token comment">;; one of them.</span>
  <span class="token comment">;; linux-dev-names-exclude device-1-name:device\\:2\\:name</span>

  <span class="token comment">;; By default, kanata will crash if no input devices are found. You can change</span>
  <span class="token comment">;; this behaviour by setting \`linux-continue-if-no-devs-found\`.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; linux-continue-if-no-devs-found yes</span>

  <span class="token comment">;; Kanata on Linux automatically detects and grabs input devices</span>
  <span class="token comment">;; when none of the explicit device configurations are in use.</span>
  <span class="token comment">;; In case kanata is undesirably grabbing mouse-like devices,</span>
  <span class="token comment">;; you can use a configuration item to change detection behaviour.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; linux-device-detect-mode keyboard-only</span>

  <span class="token comment">;; On Linux, you can ask kanata to run \`xset r rate &lt;delay&gt; &lt;rate&gt;\` on startup</span>
  <span class="token comment">;; and on live reload via the config below. The first number is the delay in ms</span>
  <span class="token comment">;; and the second number is the repeat rate in repeats/second.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; linux-x11-repeat-delay-rate 400,50</span>

  <span class="token comment">;; On linux, you can ask kanata to label itself as a trackpoint. This has several</span>
  <span class="token comment">;; effects on libinput including enabling middle mouse button scrolling and using</span>
  <span class="token comment">;; a different acceleration curve. Otherwise, a trackpoint intercepted by kanata</span>
  <span class="token comment">;; may not behave as expected.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; If using this feature, it is recommended to filter out any non-trackpoint</span>
  <span class="token comment">;; pointing devices using linux-only-linux-dev-names-include,</span>
  <span class="token comment">;; linux-only-linux-dev-names-exclude or linux-only-linux-dev to avoid changing</span>
  <span class="token comment">;; their behavior as well.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; linux-use-trackpoint-property yes</span>

  <span class="token comment">;; Unicode on Linux works by pressing Ctrl+Shift+U, typing the unicode hex value,</span>
  <span class="token comment">;; then pressing Enter. However, if you do remapping in userspace, e.g. via</span>
  <span class="token comment">;; xmodmap/xkb, the keycode &quot;U&quot; that kanata outputs may not become a keysym &quot;u&quot;</span>
  <span class="token comment">;; after the userspace remapping. This will be likely if you use non-US,</span>
  <span class="token comment">;; non-European keyboards on top of kanata. For unicode to work, kanata needs to</span>
  <span class="token comment">;; use the keycode that outputs the keysym &quot;u&quot;, which might not be the keycode</span>
  <span class="token comment">;; &quot;U&quot;.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; You can use \`evtest\` or \`kanata --debug\`, set your userspace key remapping,</span>
  <span class="token comment">;; then press the key that outputs the keysym &quot;u&quot; to see which underlying keycode</span>
  <span class="token comment">;; is sent. Then you can use this configuration to change kanata&#39;s behaviour.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; Example:</span>
  <span class="token comment">;;</span>
  <span class="token comment">;;   linux-unicode-u-code v</span>

  <span class="token comment">;; Unicode on Linux terminates with the Enter key by default. This may not work in</span>
  <span class="token comment">;; some applications. The termination is configurable with the following options:</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; - \`enter\`</span>
  <span class="token comment">;; - \`space\`</span>
  <span class="token comment">;; - \`enter-space\`</span>
  <span class="token comment">;; - \`space-enter\`</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; Example:</span>
  <span class="token comment">;;</span>
  <span class="token comment">;;   linux-unicode-termination space</span>

  <span class="token comment">;; Kanata on Linux needs to declare a &quot;bus type&quot; for its evdev output device.</span>
  <span class="token comment">;; The options are USB and I8042. The default is I8042.</span>
  <span class="token comment">;; Using USB can break disable-touchpad-while-typing on Wayland.</span>
  <span class="token comment">;; But using I8042 appears to break some other scenarios. Thus it is configurable.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; Examples:</span>
  <span class="token comment">;;</span>
  <span class="token comment">;;   linux-output-device-bus-type USB</span>
  <span class="token comment">;;   linux-output-device-bus-type I8042</span>

  <span class="token comment">;; There is an optional configuration entry for Windows to help mitigate strange</span>
  <span class="token comment">;; behaviour of AltGr if your layout uses that. Uncomment one of the items below</span>
  <span class="token comment">;; to change what kanata does with the key.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; For more context, see: https://github.com/jtroo/kanata/issues/55.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; windows-altgr cancel-lctl-press ;; remove the lctl press that comes as a combo with ralt</span>
  <span class="token comment">;; windows-altgr add-lctl-release  ;; add an lctl release when ralt is released</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; NOTE: even with these workarounds, putting lctl+ralt in your defsrc may</span>
  <span class="token comment">;; not work too well with other applications that use WH_KEYBOARD_LL.</span>
  <span class="token comment">;; Known applications with issues: GWSL/VcXsrv</span>

  <span class="token comment">;; Enable kanata to execute commands.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; I consider this feature a hazard so it is conditionally compiled out of</span>
  <span class="token comment">;; the default binary.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; This is dangerous because it allows kanata to execute arbitrary commands.</span>
  <span class="token comment">;; Using a binary compiled with the cmd feature enabled, uncomment below to</span>
  <span class="token comment">;; enable command execution:</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; danger-enable-cmd yes</span>

  <span class="token comment">;; Enable processing of keys that are not in defsrc.</span>
  <span class="token comment">;; This is useful if you are only mapping a few keys in defsrc instead of</span>
  <span class="token comment">;; most of the keys on your keyboard. Without this, the tap-hold-release and</span>
  <span class="token comment">;; tap-hold-press actions will not activate for keys that are not in defsrc.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; The reason this is not enabled by default is because some keys may not</span>
  <span class="token comment">;; work correctly if they are intercepted. E.g. rctl/altgr on Windows; see the</span>
  <span class="token comment">;; windows-altgr configuration item above for context.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; process-unmapped-keys yes</span>

  <span class="token comment">;; We need to set it to yes in this kanata.kbd example config to allow the use of __ and ___</span>
  <span class="token comment">;; in the deflayer-custom-map example below in the file</span>
  process-unmapped-keys yes

  <span class="token comment">;; Disable all keys not mapped in defsrc.</span>
  <span class="token comment">;; Only works if process-unmapped-keys is also yes.</span>
  <span class="token comment">;; block-unmapped-keys yes</span>

  <span class="token comment">;; Intercept mouse buttons for a specific mouse device.</span>
  <span class="token comment">;; The intended use case for this is for laptops such as a Thinkpad, which have</span>
  <span class="token comment">;; mouse buttons that may be useful to activate kanata actions with. This only</span>
  <span class="token comment">;; works with the Interception driver.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; To know what numbers to put into the string, you can run the</span>
  <span class="token comment">;; kanata-wintercept variant with this defcfg item defined with random numbers.</span>
  <span class="token comment">;; Then when a button is first pressed on the mouse device, kanata will print</span>
  <span class="token comment">;; its hwid in the log; you can then copy-paste that into this configuration</span>
  <span class="token comment">;; entry. If this defcfg item is not defined, the log will not print.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; windows-interception-mouse-hwid &quot;70, 0, 90, 0, 20&quot;</span>

  <span class="token comment">;; There is also a list version of windows-interception-mouse-hwid:</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; windows-interception-mouse-hwids (</span>
  <span class="token comment">;;   &quot;70, 0, 60, 0&quot;</span>
  <span class="token comment">;;   &quot;71, 0, 62, 0&quot;</span>
  <span class="token comment">;; )</span>

  <span class="token comment">;; List configuration for kanata-wintercept variants</span>
  <span class="token comment">;; that allows intercepting only some connected keyboards.</span>
  <span class="token comment">;; Use similarly to mouse-hwid above.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; windows-interception-keyboard-hwids (</span>
  <span class="token comment">;;   &quot;90, 80, 11, 34&quot;</span>
  <span class="token comment">;;   &quot;99, 88, 77, 66&quot;</span>
  <span class="token comment">;; )</span>

  <span class="token comment">;; Transparent keys on layers will delegate to the corresponding defsrc key</span>
  <span class="token comment">;; when found on a layer activated by \`layer-switch\`. This config entry</span>
  <span class="token comment">;; changes the behaviour to delegate to the action of the first layer,</span>
  <span class="token comment">;; which is the layer active upon startup, that is in the same position.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; delegate-to-first-layer yes</span>

  <span class="token comment">;; This config entry alters the behavior of movemouse-accel actions.</span>
  <span class="token comment">;; By default, this setting is disabled - vertical and horizontal</span>
  <span class="token comment">;; acceleration are independent. Enabling this setting will emulate QMK mouse</span>
  <span class="token comment">;; move acceleration behavior, i.e. the acceleration state of new mouse</span>
  <span class="token comment">;; movement actions are inherited if others are already being pressed.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; movemouse-inherit-accel-state yes</span>

  <span class="token comment">;; This config entry alters the behavior of movemouseaccel actions.</span>
  <span class="token comment">;; This makes diagonal movements simultaneous to mitigate choppiness in</span>
  <span class="token comment">;; drawing apps, if you&#39;re using kanata mouse movements to draw for</span>
  <span class="token comment">;; whatever reason.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; movemouse-smooth-diagonals yes</span>

  <span class="token comment">;; This configuration allows you to customize the length limit on dynamic macros.</span>
  <span class="token comment">;; The default limit is 128 keys.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; dynamic-macro-max-presses 1000</span>

  <span class="token comment">;; This configuration makes multiple tap-hold actions that are activated near</span>
  <span class="token comment">;; in time expire their timeout quicker. Without this, the timeout for the 2nd</span>
  <span class="token comment">;; tap-hold onwards will start from 0ms after the previous tap-hold expires.</span>
  <span class="token comment">;;</span>
  concurrent-tap-hold yes

  <span class="token comment">;; This configuration makes the release of one-shot-press and of the tap in a tap-hold</span>
  <span class="token comment">;; by the defined number of milliseconds (approximate).</span>
  <span class="token comment">;; The default value is 5.</span>
  <span class="token comment">;; While the release is delayed, further processing of inputs is also paused.</span>
  <span class="token comment">;; This means that there will be a minor input latency impact in the mentioned scenarios.</span>
  <span class="token comment">;; The reason for this configuration existing is that some environments</span>
  <span class="token comment">;; do not process the scenarios correctly due to the rapidity of the release.</span>
  <span class="token comment">;; Kanata does send the events in the correct order,</span>
  <span class="token comment">;; so the fault is more in the environment, but kanata provides a workaround anyway.</span>
  rapid-event-delay <span class="token number">5</span>

  <span class="token comment">;; This setting defaults to yes but can be configured to no to save on</span>
  <span class="token comment">;; logging. However, if --log-layer-changes is passed as a command line</span>
  <span class="token comment">;; argument, a &quot;no&quot; in the configuration file will be overridden and layer</span>
  <span class="token comment">;; changes will be logged.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; log-layer-changes no</span>

  <span class="token comment">;; This configuration will press and then immediately release the non-modifier key</span>
  <span class="token comment">;; as soon as the override activates, meaning you are unlikely as a human to ever</span>
  <span class="token comment">;; release modifiers first, which can result in unintended behaviour.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; The downside of this configuration is that the non-modifier key</span>
  <span class="token comment">;; does not remain held which is important to consider for your use cases.</span>
  override-release-on-activation yes
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="deflocalkeys-平台检测" tabindex="-1"><a class="header-anchor" href="#deflocalkeys-平台检测"><span>deflocalkeys 平台检测</span></a></h2><div class="language-lisp line-numbers-mode" data-ext="lisp" data-title="lisp"><pre class="language-lisp"><code><span class="token comment">;; deflocalkeys-* 使您能够定义和使用与您的语言环境匹配的键名，方法是为该字符定义操作系统代码编号映射。</span>
<span class="token comment">;;</span>
<span class="token comment">;; There are five variants of deflocalkeys-*:</span>
<span class="token comment">;; - deflocalkeys-win</span>
<span class="token comment">;; - deflocalkeys-winiov2</span>
<span class="token comment">;; - deflocalkeys-wintercept</span>
<span class="token comment">;; - deflocalkeys-linux</span>
<span class="token comment">;; - deflocalkeys-macos</span>
<span class="token comment">;;</span>
<span class="token comment">;; Only one of each deflocalkeys-* variant is allowed. The variants that are</span>
<span class="token comment">;; not applicable will be ignored, e.g. deflocalkeys-linux and deflocalkeys-wintercept</span>
<span class="token comment">;; are both ignored when using the default Windows kanata binary.</span>
<span class="token comment">;;</span>
<span class="token comment">;; The configuration item is parsed similarly to defcfg; it is composed of</span>
<span class="token comment">;; pairs of keys and values.</span>
<span class="token comment">;;</span>
<span class="token comment">;; You can check docs/locales.adoc for the mapping for your locale. If your</span>
<span class="token comment">;; locale is not there, please ask for help if needed, and add the mapping for</span>
<span class="token comment">;; your locale to the document.</span>
<span class="token comment">;;</span>
<span class="token comment">;; Web link for locales: https://github.com/jtroo/kanata/blob/main/docs/locales.adoc</span>
<span class="token comment">;;</span>
<span class="token comment">;; This example is for an Italian keyboard remapping in Linux. The numbers will</span>
<span class="token comment">;; unfortunately differ between Linux, Windows-hooks, and Windows-interception.</span>
<span class="token comment">;;</span>
<span class="token comment">;; To see how you can discover key mappings for yourself, see the &quot;Non-US keyboards&quot;</span>
<span class="token comment">;; section of docs/config.adoc.</span>
<span class="token comment">;;</span>
<span class="token comment">;; Web link or config: https://github.com/jtroo/kanata/blob/main/docs/config.adoc</span>

<span class="token punctuation">(</span><span class="token car">deflocalkeys-win</span>
  ì <span class="token number">187</span>
<span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token car">deflocalkeys-wintercept</span>
  ì <span class="token number">187</span>
<span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token car">deflocalkeys-winiov2</span>
  ì <span class="token number">187</span>
<span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token car">deflocalkeys-linux</span>
  ì <span class="token number">13</span>
<span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token car">deflocalkeys-macos</span>
  ì <span class="token number">13</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="defsrc、deflayer、deflayermap-层布局" tabindex="-1"><a class="header-anchor" href="#defsrc、deflayer、deflayermap-层布局"><span>defsrc、deflayer、deflayermap 层布局</span></a></h2><div class="language-lisp line-numbers-mode" data-ext="lisp" data-title="lisp"><pre class="language-lisp"><code><span class="token comment">;; 只允许一个defsrc</span>
<span class="token comment">;;</span>
<span class="token comment">;; Defsrc定义了kanata将要截获的按键。</span>
<span class="token comment">;; 键的顺序与deflayer声明匹配，</span>
<span class="token comment">;; 并且所有deflayer声明必须具有与defsrc相同的键数。</span>
<span class="token comment">;;</span>
<span class="token comment">;; visual/spatial *不是*强制性的；这是按照惯例做的，以便于视觉上的方便。</span>
<span class="token comment">;; 这些项被解析为一个长列表，换行符将被忽略。</span>
<span class="token comment">;;</span>
<span class="token comment">;; 如果你正在寻找其他的键，文件 \`src/keys/mod.rs\` 应该有希望提供一些见解</span>
<span class="token punctuation">(</span><span class="token car">defsrc</span>
  grv  <span class="token number">1</span>    <span class="token number">2</span>    <span class="token number">3</span>    <span class="token number">4</span>    <span class="token number">5</span>    <span class="token number">6</span>    <span class="token number">7</span>    <span class="token number">8</span>    <span class="token number">9</span>    <span class="token number">0</span>    -    =    bspc
  tab  q    w    e    r    <span class="token boolean">t</span>    y    u    i    o    p    <span class="token punctuation">[</span>    <span class="token punctuation">]</span>    \\
  caps a    s    d    f    g    h    j    k    l    <span class="token comment">;    &#39;    ret</span>
  lsft z    x    c    v    b    n    m    ,    <span class="token punctuation">.</span>    /    rsft
  lctl lmet lalt           spc            ralt rmet rctl
<span class="token punctuation">)</span>

<span class="token comment">;; 定义的第一层是在kanata启动时默认激活的层。</span>
<span class="token comment">;; 这一层是标准的QWERTY布局，除了backtick/grave键（@grl），它是轻按键的别名。</span>
<span class="token punctuation">(</span><span class="token car">deflayer</span> qwerty
  @grl <span class="token number">1</span>    <span class="token number">2</span>    <span class="token number">3</span>    <span class="token number">4</span>    <span class="token number">5</span>    <span class="token number">6</span>    <span class="token number">7</span>    <span class="token number">8</span>    <span class="token number">9</span>    <span class="token number">0</span>    -    =    bspc
  tab  q    w    e    r    <span class="token boolean">t</span>    y    u    i    o    p    <span class="token punctuation">[</span>    <span class="token punctuation">]</span>    \\
  caps a    s    d    f    g    h    j    k    l    <span class="token comment">;    &#39;    ret</span>
  lsft z    x    c    v    b    n    m    ,    <span class="token punctuation">.</span>    /    rsft
  lctl lmet lalt           spc            ralt rmet rctl
<span class="token punctuation">)</span>

<span class="token comment">;; dvorak层将键重新映射到dvorak布局。在左侧配置了几个轻击键别名。</span>
<span class="token punctuation">(</span><span class="token car">deflayer</span> dvorak
  @grl <span class="token number">1</span>    <span class="token number">2</span>    <span class="token number">3</span>    <span class="token number">4</span>    <span class="token number">5</span>    <span class="token number">6</span>    <span class="token number">7</span>    <span class="token number">8</span>    <span class="token number">9</span>    <span class="token number">0</span>    <span class="token punctuation">[</span>    <span class="token punctuation">]</span>    bspc
  tab  &#39;    ,    @.ms p    y    f    g    c    r    l    /    =    \\
  @cap @anm @oar @ech @umc @ifk d    h    <span class="token boolean">t</span>    n    s    -    ret
  lsft <span class="token comment">;    q    j    k    x    b    m    w    v    z    rsft</span>
  lctl lmet lalt           spc           @ralt rmet @rcl
<span class="token punctuation">)</span>

<span class="token comment">;; 这是deflayer的替代方案，不依赖于defsrc。</span>
<span class="token comment">;; 如果只重新映射几个键，它的优点是配置更简单。</span>
<span class="token comment">;; 当您正在学习一个新的配置时，您可能仍然更喜欢标准的deflayer，因为它在日志中有可视化的打印。</span>
<span class="token punctuation">(</span><span class="token car">deflayermap</span> <span class="token punctuation">(</span><span class="token car">custom-map-example</span><span class="token punctuation">)</span>
  caps esc
  esc  caps

  <span class="token comment">;; 您可以使用 \`_、__或___\` 而不是指定键名来映射层中未显式映射的所有键。</span>
  <span class="token comment">;; 例如，上面的esc和大写字母将不会被覆盖</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; \`_\`    只映射defsrc中的键.</span>
  <span class="token comment">;; \`__\`   排除defsrc中的映射键</span>
  <span class="token comment">;; \`___\`  映射 \`defsrc\` 中的键和不在 \`defsrc\` 中的键.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; 两个下划线和三个下划线的变体需要defcfg中的 &quot;process-unmapped-keys yes&quot; 才能工作。</span>

  <span class="token comment">;; ___ XX ;; maps all keys that are not mapped explicitly in the layer</span>
  <span class="token comment">;;          ;; (i.e. esc and caps above) to &quot;no-op&quot; to disable the key.</span>
  _ XX   <span class="token comment">;; 映射defsrc中没有映射到层中的所有键</span>
  __ XX  <span class="token comment">;; 映射所有不在defsrc中且未在层中映射的键</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h2><h3 id="defvar-值变量" tabindex="-1"><a class="header-anchor" href="#defvar-值变量"><span>defvar 值变量</span></a></h3><h3 id="defalias-按键变量-函数变量" tabindex="-1"><a class="header-anchor" href="#defalias-按键变量-函数变量"><span>defalias 按键变量/函数变量</span></a></h3><h3 id="tap-timeout、hold-timeout、tap-hold-按住多少时间" tabindex="-1"><a class="header-anchor" href="#tap-timeout、hold-timeout、tap-hold-按住多少时间"><span>tap-timeout、hold-timeout、tap-hold 按住多少时间</span></a></h3><div class="language-lisp line-numbers-mode" data-ext="lisp" data-title="lisp"><pre class="language-lisp"><code><span class="token comment">;; Defvar可以用来声明常用的值</span>
<span class="token punctuation">(</span><span class="token defvar"><span class="token keyword">defvar</span>
  <span class="token variable">tap-timeout</span></span>   <span class="token number">100</span>
  hold-timeout  <span class="token number">200</span>
  tt $tap-timeout
  ht $hold-timeout

  <span class="token comment">;; A list value in defvar that begins with concat behaves in a special manner</span>
  <span class="token comment">;; where strings will be joined together.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; Below results in 100200</span>
  a <span class="token string">&quot;hello&quot;</span>
  b <span class="token string">&quot;world&quot;</span>
  ct <span class="token punctuation">(</span><span class="token keyword">concat</span> $a <span class="token string">&quot; &quot;</span> $b<span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token car">defalias</span>
  th1 <span class="token punctuation">(</span><span class="token car">tap-hold</span> $tt $ht caps lctl<span class="token punctuation">)</span>
  th2 <span class="token punctuation">(</span><span class="token car">tap-hold</span> $tt $ht spc lsft<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="layer-switch、layer-toggle、layer-while-held-切换图层" tabindex="-1"><a class="header-anchor" href="#layer-switch、layer-toggle、layer-while-held-切换图层"><span>layer-switch、layer-toggle、layer-while-held 切换图层</span></a></h3><div class="language-lisp line-numbers-mode" data-ext="lisp" data-title="lisp"><pre class="language-lisp"><code><span class="token comment">;; 默认值用于为更复杂的操作声明快捷方式，以保持defler声明的整洁和对齐。</span>
<span class="token comment">;; deflayers的对齐不是必需的，但强烈建议便于视觉理解。</span>
<span class="token comment">;;</span>
<span class="token comment">;; 别名通过 \`@&lt;alias_name&gt;\` 来引用。别名可以相互引用，例如在“anm”别名中。</span>
<span class="token comment">;; 但是，别名只能引用在它之前在文件中定义的另一个别名。</span>
<span class="token punctuation">(</span><span class="token car">defalias</span>
  <span class="token comment">;; 将基础层更改为qwerty或dvorak的别名</span>
  dvk <span class="token punctuation">(</span><span class="token car">layer-switch</span> dvorak<span class="token punctuation">)</span>
  qwr <span class="token punctuation">(</span><span class="token car">layer-switch</span> qwerty<span class="token punctuation">)</span>

  <span class="token comment">;; 图层“切换”的别名。这并不完全是切换，因为当键被持有时，层将处于活动状态，</span>
  <span class="token comment">;; 而当键被释放时，层将处于非活动状态。您可以使用的另一个操作名称是layer-while-held。</span>
  <span class="token comment">;; 然而，为了简洁起见，本文的其余部分将使用术语“toggle”。</span>
  num <span class="token punctuation">(</span><span class="token car">layer-toggle</span> numbers<span class="token punctuation">)</span>
  chr <span class="token punctuation">(</span><span class="token car">layer-toggle</span> chords<span class="token punctuation">)</span>
  arr <span class="token punctuation">(</span><span class="token car">layer-toggle</span> arrows<span class="token punctuation">)</span>
  msc <span class="token punctuation">(</span><span class="token car">layer-toggle</span> misc<span class="token punctuation">)</span>
  lay <span class="token punctuation">(</span><span class="token car">layer-toggle</span> layers<span class="token punctuation">)</span>
  mse <span class="token punctuation">(</span><span class="token car">layer-toggle</span> mouse<span class="token punctuation">)</span>
  fks <span class="token punctuation">(</span><span class="token car">layer-while-held</span> fakekeys<span class="token punctuation">)</span>

  <span class="token comment">;; 点击按住别名与点击为dvorak键，并保持切换层</span>
  <span class="token comment">;; WARNING(Linux only): 键重复与轻击按住可能会出现意外行为.</span>
  <span class="token comment">;; 完整内容见 https://github.com/jtroo/kanata/discussions/422</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; tap-hold parameter order:</span>
  <span class="token comment">;; 1. tap timeout</span>
  <span class="token comment">;; 2. hold timeout</span>
  <span class="token comment">;; 3. tap action</span>
  <span class="token comment">;; 4. hold action</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; 对于完整上下文，保持超时是保持动作将被激活的毫秒数。</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; The tap timeout is best explained in a roundabout way. When you press and</span>
  <span class="token comment">;; hold a standard key on your keyboard (e.g. &#39;a&#39;), your operating system will</span>
  <span class="token comment">;; read that and keep sending &#39;a&#39; to the active application. To be able to</span>
  <span class="token comment">;; replicate this behaviour with a tap-hold key, you must press-release-press</span>
  <span class="token comment">;; the key within the tap timeout window (number is milliseconds). Simply</span>
  <span class="token comment">;; holding the key results in the hold action activating, which is why you</span>
  <span class="token comment">;; need to double-press for the tap action to stay pressed.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; There are two additional versions of tap-hold available:</span>
  <span class="token comment">;; 1. tap-hold-press: if there is a key press, the hold action is activated</span>
  <span class="token comment">;; 2. tap-hold-release: if there is a press and release of another key, the</span>
  <span class="token comment">;; hold action is activated</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; These versions are useful if you don&#39;t want to wait for the whole hold</span>
  <span class="token comment">;; timeout to activate, but want to activate the hold action immediately</span>
  <span class="token comment">;; based on the next key press or press and release of another key. These</span>
  <span class="token comment">;; versions might be great to implement home row mods.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; 如果您来自kmonad，则 tap-hold-press 和 tap-hold-release 分别类似于</span>
  <span class="token comment">;; tap-hold-next 和 tap-hold-next-release。</span>
  <span class="token comment">;; 如果您知道底层的keyberon crate，则 tap-hold-press 是 HoldOnOtherKeyPress，</span>
  <span class="token comment">;; tap-hold-release 是 PermissiveHold配置。</span>
  anm <span class="token punctuation">(</span><span class="token car">tap-hold</span> <span class="token number">200</span> <span class="token number">200</span> a @num<span class="token punctuation">)</span>   <span class="token comment">;; tap: a      hold: numbers layer</span>
  oar <span class="token punctuation">(</span><span class="token car">tap-hold</span> <span class="token number">200</span> <span class="token number">200</span> o @arr<span class="token punctuation">)</span>   <span class="token comment">;; tap: o      hold: arrows layer</span>
  ech <span class="token punctuation">(</span><span class="token car">tap-hold</span> <span class="token number">200</span> <span class="token number">200</span> e @chr<span class="token punctuation">)</span>   <span class="token comment">;; tap: e      hold: chords layer</span>
  umc <span class="token punctuation">(</span><span class="token car">tap-hold</span> <span class="token number">200</span> <span class="token number">200</span> u @msc<span class="token punctuation">)</span>   <span class="token comment">;; tap: u      hold: misc layer</span>
  grl <span class="token punctuation">(</span><span class="token car">tap-hold</span> <span class="token number">200</span> <span class="token number">200</span> grv @lay<span class="token punctuation">)</span> <span class="token comment">;; tap: grave  hold: layers layer</span>
  .ms <span class="token punctuation">(</span><span class="token car">tap-hold</span> <span class="token number">200</span> <span class="token number">200</span> <span class="token punctuation">.</span> @mse<span class="token punctuation">)</span>   <span class="token comment">;; tap: .      hold: mouse layer</span>
  ifk <span class="token punctuation">(</span><span class="token car">tap-hold</span> <span class="token number">200</span> <span class="token number">200</span> i @fks<span class="token punctuation">)</span>   <span class="token comment">;; tap: i      hold: fake keys layer</span>

  <span class="token comment">;; 当动作超时时，还有其他类型的 tap-hold-press 和 tap-hold-release</span>
  <span class="token comment">;; 会激活超时动作（第5个参数），而不是由其他键激活保持动作。</span>

  <span class="token comment">;; tap: o    hold: arrows layer    timeout: backspace</span>
  oat <span class="token punctuation">(</span><span class="token car">tap-hold-press-timeout</span>   <span class="token number">200</span> <span class="token number">200</span> o @arr bspc<span class="token punctuation">)</span>
  <span class="token comment">;; tap: e    hold: chords layer    timeout: esc</span>
  ect <span class="token punctuation">(</span><span class="token car">tap-hold-release-timeout</span> <span class="token number">200</span> <span class="token number">200</span> e @chr esc<span class="token punctuation">)</span>

  <span class="token comment">;; There is another variant of \`tap-hold-release\` that takes a 5th parameter</span>
  <span class="token comment">;; that is a list of keys that will trigger an early tap.</span>

  <span class="token comment">;; tap: u    hold: misc layer      early tap if any of: (a o e) are pressed</span>
  umk <span class="token punctuation">(</span><span class="token car">tap-hold-release-keys</span> <span class="token number">200</span> <span class="token number">200</span> u @msc <span class="token punctuation">(</span><span class="token car">a</span> o e<span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token comment">;; tap: u    hold: misc layer      always tap if any of: (a o e) are pressed</span>
  uek <span class="token punctuation">(</span><span class="token car">tap-hold-except-keys</span> <span class="token number">200</span> <span class="token number">200</span> u @msc <span class="token punctuation">(</span><span class="token car">a</span> o e<span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token comment">;; tap for capslk, hold for lctl</span>
  cap <span class="token punctuation">(</span><span class="token car">tap-hold</span> <span class="token number">200</span> <span class="token number">200</span> caps lctl<span class="token punctuation">)</span>

  <span class="token comment">;; Below is an alias for the \`multi\` action which executes multiple actions</span>
  <span class="token comment">;; in order but at the same time.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; It may result in some incorrect/unexpected behaviour if combining complex</span>
  <span class="token comment">;; actions, so be reasonable with it. One reasonable use case is this alias:</span>
  <span class="token comment">;; press right-alt while also toggling to the \`ralted\` layer. The utility of</span>
  <span class="token comment">;; this is better revealed if you go see \`ralted\` and its aliases.</span>
  ralt <span class="token punctuation">(</span><span class="token car">multi</span> ralt <span class="token punctuation">(</span><span class="token car">layer-toggle</span> ralted<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="environment-环境变量判断" tabindex="-1"><a class="header-anchor" href="#environment-环境变量判断"><span>environment 环境变量判断</span></a></h2><div class="language-lisp line-numbers-mode" data-ext="lisp" data-title="lisp"><pre class="language-lisp"><code><span class="token comment">;; 将顶级配置项包装在以（environment （env-var-name env-var-value）…configuration…</span>
<span class="token comment">;; -开头的列表中，将使配置仅在环境变量匹配时才激活。</span>
<span class="token punctuation">(</span><span class="token car">environment</span> <span class="token punctuation">(</span><span class="token car">LAPTOP</span> lp1<span class="token punctuation">)</span>
  <span class="token punctuation">(</span><span class="token car">defalias</span> met @lp1met<span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token car">environment</span> <span class="token punctuation">(</span><span class="token car">LAPTOP</span> lp2<span class="token punctuation">)</span>
  <span class="token punctuation">(</span><span class="token car">defalias</span> met @lp2met<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="defaliasenvcond" tabindex="-1"><a class="header-anchor" href="#defaliasenvcond"><span>defaliasenvcond</span></a></h2><div class="language-lisp line-numbers-mode" data-ext="lisp" data-title="lisp"><pre class="language-lisp"><code><span class="token comment">;; NOTE: the configuration below is an older and less general variant</span>
<span class="token comment">;; of the environment configuration above.</span>
<span class="token comment">;;</span>
<span class="token comment">;; The defaliasenvcond variant of defalias is parsed similarly, but there must</span>
<span class="token comment">;; be a list parameter first. The list must contain two strings. In order,</span>
<span class="token comment">;; these strings are: an environment variable name, and the environment</span>
<span class="token comment">;; variable value. When the environment variable defined by name has the</span>
<span class="token comment">;; corresponding value when running kanata, the aliases within will be active.</span>
<span class="token comment">;; Otherwise, the aliases will be skipped.</span>
<span class="token punctuation">(</span><span class="token car">defaliasenvcond</span> <span class="token punctuation">(</span><span class="token car">LAPTOP</span> lp1<span class="token punctuation">)</span>
  met @lp1met
<span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token car">defaliasenvcond</span> <span class="token punctuation">(</span><span class="token car">LAPTOP</span> lp2<span class="token punctuation">)</span>
  met @lp2met
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="defalias" tabindex="-1"><a class="header-anchor" href="#defalias"><span>defalias ^</span></a></h2><div class="language-lisp line-numbers-mode" data-ext="lisp" data-title="lisp"><pre class="language-lisp"><code><span class="token punctuation">(</span><span class="token car">defalias</span>
  <span class="token comment">;; shifted keys</span>
  { S-<span class="token punctuation">[</span>
  } S-<span class="token punctuation">]</span>
  : S-<span class="token comment">;</span>

  <span class="token comment">;; alias numbers as themselves for use in macro</span>
  <span class="token number">8</span> <span class="token number">8</span>
  <span class="token number">0</span> <span class="token number">0</span>
<span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token car">defalias</span>
  <span class="token comment">;; For the multi action, all keys are pressed for the whole sequence</span>
  <span class="token comment">;; but still in the listed order which may be undesirable, particularly</span>
  <span class="token comment">;; for modifiers like shift. You probably want to use macro instead.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; Chording can be more succinctly described by the modifier prefixes</span>
  <span class="token comment">;; \`C-\`, \`A-\`, \`S-\`, and \`M-\` for lctrl, lalt, lshift, lmeta, but are possible</span>
  <span class="token comment">;; by using \`multi\` as well. The lmeta key is also known by some other</span>
  <span class="token comment">;; names: &quot;Windows&quot;, &quot;GUI&quot;, &quot;Command&quot;, &quot;Super&quot;.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; For ralt/altgr, you can use either of: \`RA-\` or \`AG-\`. They both work the</span>
  <span class="token comment">;; same and only one is allowed in a single chord. This chord can be useful for</span>
  <span class="token comment">;; international layouts.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; A special behaviour of output chords is that if another key is pressed,</span>
  <span class="token comment">;; all of the chord keys will be released. For the explanation about why</span>
  <span class="token comment">;; this is the case, see the configuration guide.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; This use case for multi is typing an all-caps string.</span>
  alp <span class="token punctuation">(</span><span class="token car">multi</span> lsft a b c d e f g h i j k l m n o p q r s <span class="token boolean">t</span> u v w x y z<span class="token punctuation">)</span>

  <span class="token comment">;; Within multi you can also include reverse-release-order to release keys</span>
  <span class="token comment">;; from last-to-first order instead of first-to-last which is the default.</span>
  S-a-reversed <span class="token punctuation">(</span><span class="token car">multi</span> lsft a reverse-release-order<span class="token punctuation">)</span>

  <span class="token comment">;; Chords using the shortcut syntax. These ones are used for copying/pasting</span>
  <span class="token comment">;; from some Linux terminals.</span>
  csv C-S-v
  csc C-S-c

  <span class="token comment">;; Windows shortcut for displaying all windows</span>
  win M-tab

  <span class="token comment">;; Accented e characters for France layout using altgr sequence. Showcases</span>
  <span class="token comment">;; both of the shortcuts. You can just use one version of shortcut at your</span>
  <span class="token comment">;; preference.</span>
  é AG-2
  è RA-7
  testmacro <span class="token punctuation">(</span><span class="token car">macro</span> AG-2 RA-7<span class="token punctuation">)</span>
  🙃 <span class="token punctuation">(</span><span class="token car">unicode</span> 🙃<span class="token punctuation">)</span>

  <span class="token comment">;; macro accepts keys, chords, and numbers (a delay in ms). Note that numbers</span>
  <span class="token comment">;; will be parsed as delays, so they will need to be aliased to be used.</span>
  lch <span class="token punctuation">(</span><span class="token car">macro</span> h <span class="token boolean">t</span> <span class="token boolean">t</span> p @: / / <span class="token number">100</span> l o c a l h o s <span class="token boolean">t</span> @: @8 @0 @8 @0<span class="token punctuation">)</span>
  tbm <span class="token punctuation">(</span><span class="token car">macro</span> A-<span class="token punctuation">(</span><span class="token car">tab</span> <span class="token number">200</span> tab <span class="token number">200</span> tab<span class="token punctuation">)</span> <span class="token number">200</span> S-A-<span class="token punctuation">(</span><span class="token car">tab</span> <span class="token number">200</span> tab <span class="token number">200</span> tab<span class="token punctuation">)</span><span class="token punctuation">)</span>
  hpy <span class="token punctuation">(</span><span class="token car">macro</span> S-i spc a m spc S-<span class="token punctuation">(</span><span class="token car">h</span> a p p y<span class="token punctuation">)</span> spc m y S-f r S-i e S-n d @🙃<span class="token punctuation">)</span>

  rls <span class="token punctuation">(</span><span class="token car">macro-release-cancel</span> <span class="token number">1</span> <span class="token number">500</span> bspc S-1 <span class="token number">500</span> bspc S-2<span class="token punctuation">)</span>

  <span class="token comment">;; repeat variants will repeat while held, once ALL macros have ended,</span>
  <span class="token comment">;; including the held macro.</span>
  mr1 <span class="token punctuation">(</span><span class="token car">macro-repeat</span> mltp<span class="token punctuation">)</span>
  mr2 <span class="token punctuation">(</span><span class="token car">macro-repeat-release-cancel</span> mltp<span class="token punctuation">)</span>

  <span class="token comment">;; Kanata also supports dynamic macros. Dynamic macros can be nested, but</span>
  <span class="token comment">;; cannot recurse.</span>
  dms dynamic-macro-record-stop
  dst <span class="token punctuation">(</span><span class="token car">dynamic-macro-record-stop-truncate</span> <span class="token number">3</span><span class="token punctuation">)</span>
  dr0 <span class="token punctuation">(</span><span class="token car">dynamic-macro-record</span> <span class="token number">0</span><span class="token punctuation">)</span>
  dr1 <span class="token punctuation">(</span><span class="token car">dynamic-macro-record</span> <span class="token number">1</span><span class="token punctuation">)</span>
  dr2 <span class="token punctuation">(</span><span class="token car">dynamic-macro-record</span> <span class="token number">2</span><span class="token punctuation">)</span>
  dp0 <span class="token punctuation">(</span><span class="token car">dynamic-macro-play</span> <span class="token number">0</span><span class="token punctuation">)</span>
  dp1 <span class="token punctuation">(</span><span class="token car">dynamic-macro-play</span> <span class="token number">1</span><span class="token punctuation">)</span>
  dp2 <span class="token punctuation">(</span><span class="token car">dynamic-macro-play</span> <span class="token number">2</span><span class="token punctuation">)</span>

  <span class="token comment">;; unmod will release all modifiers temporarily and send the .</span>
  <span class="token comment">;; So for example holding shift and tapping a @um1 key will still output 1.</span>
  um1 <span class="token punctuation">(</span><span class="token car">unmod</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token comment">;; dead keys é (as opposed to using AltGr) that outputs É when shifted</span>
  dké <span class="token punctuation">(</span><span class="token car">macro</span> <span class="token punctuation">(</span><span class="token car">unmod</span> &#39;<span class="token punctuation">)</span> e<span class="token punctuation">)</span>

  <span class="token comment">;; unshift is like unmod but only releases shifts</span>
  <span class="token comment">;; In ISO German QWERTZ, force unshifted symbols even if shift is held</span>
  de{ <span class="token punctuation">(</span><span class="token car">unshift</span> ralt <span class="token number">7</span><span class="token punctuation">)</span>
  de<span class="token punctuation">[</span> <span class="token punctuation">(</span><span class="token car">unshift</span> ralt <span class="token number">8</span><span class="token punctuation">)</span>

  <span class="token comment">;; unmod can optionally take a list as the first parameter,</span>
  <span class="token comment">;; and then will only temporarily remove</span>
  <span class="token comment">;; the listed modifiers instead of all modifiers.</span>
  unalt-a <span class="token punctuation">(</span><span class="token car">unmod</span> <span class="token punctuation">(</span><span class="token car">lalt</span> ralt<span class="token punctuation">)</span> a<span class="token punctuation">)</span>

  <span class="token comment">;; unicode accepts a single unicode character. The unicode character will</span>
  <span class="token comment">;; not be automatically repeated by holding the key down. The alias name</span>
  <span class="token comment">;; is the unicode character itself and is referenced by @🙁 in deflayer.</span>
  🙁 <span class="token punctuation">(</span><span class="token car">unicode</span> 🙁<span class="token punctuation">)</span>

  <span class="token comment">;; You may output parentheses or double quotes using unicode</span>
  <span class="token comment">;; by quotes as well as special quoting syntax.</span>
  lp1 <span class="token punctuation">(</span><span class="token car">unicode</span> r#<span class="token string">&quot;(&quot;</span>#<span class="token punctuation">)</span>
  rp1 <span class="token punctuation">(</span><span class="token car">unicode</span> r#<span class="token string">&quot;)&quot;</span>#<span class="token punctuation">)</span>
  dq <span class="token punctuation">(</span><span class="token car">unicode</span> r#<span class="token string">&quot;&quot;</span><span class="token string">&quot;#)
  lp2 (unicode &quot;</span><span class="token punctuation">(</span><span class="token string">&quot;)
  rp2 (unicode &quot;</span><span class="token punctuation">)</span><span class="token string">&quot;)

  ;; fork accepts two actions and a key list. The first (left) action will
  ;; activate by default. The second (right) action will activate if any of
  ;; the keys in the third parameter (right-trigger-keys) are currently active.
  frk (fork @🙃 @🙁 (lsft rsft))

  ;; switch accepts triples of keys check, action, and fallthrough|break.
  ;; The default usage of keys check behaves similarly to fork.
  ;; However, it also accepts boolean operators and|or to allow more
  ;; complex use cases.
  ;;
  ;; The order of cases matters. If two different cases match the
  ;; currently pressed keys, the case listed earlier in the configuration
  ;; will activate first. If the early case uses break, the second case will
  ;; not activate at all. Otherwise if fallthrough is used, the second case
  ;; will also activate sequentially after the first case.
  swt (switch

    ;; translating this keys check to some other common languages
    ;; this might look like:
    ;;
    ;;    (a &amp;&amp; b &amp;&amp; (c || d) &amp;&amp; (e || f))
    ((and a b (or c d) (or e f))) a break

    ;; this case behaves like fork, i.e.
    ;;
    ;;    (or a b c)
    ;;
    ;; or for some other common languages:
    ;;
    ;;    a || b || c
    (a b c) b fallthrough

    ;; key-history evaluates to true if the n&#39;th most recent typed key,
    ;; {n | n ∈ [1, 8]}, matches the given key.
    ((key-history a 1) (key-history b 8)) c break

    ;; key-timing evaluates to true if the n&#39;th most recent typed key,
    ;; {n | n ∈ [1, 8]}, was typed at a time less-than/greater-than the
    ;; given number of milliseconds.
    ((key-timing 1 lt 3000)       (key-timing 2 gt 30000)        ) c break
    ((key-timing 7 less-than 200) (key-timing 8 greater-than 500)) c break

    ;; not means &quot;</span>not any of the list constituents<span class="token string">&quot;.
    ;; The example below behaves like:
    ;;
    ;;    !(a || b || c)
    ;;
    ;; and is equivalent to:
    ;;
    ;;    ((not (or a b c)))
    ((not a b c)) c break

    ;; input logic
    ((input real lctl)) d break
    ((input virtual sft)) e break
    ((input-history real lsft 2)) f break
    ((input-history virtual ctl 2)) g break

    ;; layer evaluates to \`true\` if the active layer matches the given name
    ((layer dvorak)) x break
    ((layer qwerty)) y break

    ;; base-layer evaluates to \`true\` if the base layer matches the given name
    ;; The base layer is the most recent target of layer-switch.
    ;; The base layer is not always the active layer.
    ((base-layer dvorak)) x break
    ((base-layer qwerty)) y break

    ;; default case, empty list always evaluates to true.
    ;; break vs. fallthrough doesn&#39;t matter here
    () c break
  )

  ;; Having a cmd action in your configuration without explicitly enabling
  ;; \`danger-enable-cmd\` **and** using the cmd-enabled executable will make
  ;; kanata refuse to load your configuration. The aliases below are commented
  ;; out since commands aren&#39;t allowed by this configuration file.
  ;;
  ;; Note that the parameters to \`cmd\` are executed directly as opposed to
  ;; passed to a shell. So for example, \`~\` and \`$HOME\` would not refer
  ;; to your home directory on Linux.
  ;;
  ;; You can use:
  ;; \`cmd bash -c &quot;</span>your_stuff_here<span class="token string">&quot;\` to run your command inside of bash.
  ;;
  ;; cm1 (cmd bash -c &quot;</span>echo hello world<span class="token string">&quot;)
  ;; cm2 (cmd rm -fr /tmp/testing)

  ;; One variant of \`cmd\` is \`cmd-log\`, which lets you control how
  ;; running command, stdout, stderr, and execution failure are logged.
  ;;
  ;; The command takes two extra arguments at the beginning \`&lt;log_level&gt;\`,
  ;; and \`&lt;error_log_level&gt;\`. \`&lt;log_level&gt;\` controls where the name
  ;; of the command is logged, as well as the success message and command
  ;; stdout and stderr.
  ;;
  ;; \`&lt;error_log_level&gt;\` is only used if there is a failure executing the initial
  ;; command. This can be if there is trouble spawning the command, or
  ;; the command is not found. This means if you use \`bash -c &quot;</span>thisisntacommand<span class="token string">&quot;\`, as
  ;; long as bash starts up correctly, nothing would be logged to this channel, but
  ;; something like \`thisisntacommand\` would be.
  ;;
  ;; The log level can be \`debug\`, \`info\`, \`warn\`, \`error\`, or \`none\`.
  ;;
  ;; cmd-log info error bash -c &quot;</span>echo these are the default levels<span class="token string">&quot;
  ;; cmd-log none none bash -c &quot;</span>echo nothing back in kanata logs<span class="token string">&quot;
  ;; cmd-log none error bash -c &quot;</span>only if command fails<span class="token string">&quot;
  ;; cmd-log debug debug bash -c &quot;</span>echo log, but require changing verbosity levels<span class="token string">&quot;
  ;; cmd-log warn warn bash -c &quot;</span>echo this probably isn<span class="token quoted-symbol variable symbol">&#39;t</span> helpful<span class="token string">&quot;

  ;; Another variant of \`cmd\` is \`cmd-output-keys\`. This reads the output
  ;; of the command and treats it as an S-Expression, similarly to \`macro\`.
  ;; However, only delays, keys, chords, and chorded lists are supported.
  ;; Other actions are not.
  ;;
  ;; bash: type date-time as <span class="token argument">YYYY-MM-DD</span> HH:<span class="token argument">MM</span>
  ;; cmd-output-keys bash -c &quot;</span>date +<span class="token quoted-symbol variable symbol">&#39;%F</span> %R&#39; | sed <span class="token quoted-symbol variable symbol">&#39;s/</span>./&amp; /g&#39; | sed <span class="token quoted-symbol variable symbol">&#39;s/</span><span class="token lisp-property property">:/S-</span><span class="token comment">;/g&#39; | sed &#39;s/\\(.\\{20\\}\\)\\(.*\\)/\\(\\1 spc \\2\\)/&#39;&quot;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="deflayer" tabindex="-1"><a class="header-anchor" href="#deflayer"><span>deflayer ^</span></a></h2><div class="language-lisp line-numbers-mode" data-ext="lisp" data-title="lisp"><pre class="language-lisp"><code><span class="token comment">;; The underscore _ means transparent. The key on the base layer will be used</span>
<span class="token comment">;; instead. XX means no-op. The key will do nothing.</span>
<span class="token punctuation">(</span><span class="token car">deflayer</span> numbers
  _    _    _    _    _    _    nlk  kp7  kp8  kp9  _    _    _    _
  _    _    _    _    _    XX   _    kp4  kp5  kp6  -    _    _    _
  _    _    C-z  _    _    XX   _    kp1  kp2  kp3  +    _    _
  _    C-z  C-x  C-c  C-v  XX   _    kp0  kp0  <span class="token punctuation">.</span>    /    _
  _    _    _              _              _    _    _
<span class="token punctuation">)</span>

<span class="token comment">;; The \`lrld\` action stands for &quot;live reload&quot;.</span>
<span class="token comment">;;</span>
<span class="token comment">;; NOTE: live reload does not read changes to device-related configurations,</span>
<span class="token comment">;; such as \`linux-dev\`, \`macos-dev-names-include\`,</span>
<span class="token comment">;; or \`windows-only-windows-interception-keyboard-hwids\`.</span>
<span class="token comment">;;</span>
<span class="token comment">;; The variants \`lrpv\` and \`lrnx\` will cycle between multiple configuration files</span>
<span class="token comment">;; if they are specified in the startup arguments.</span>
<span class="token comment">;; The list action variant \`lrld-num\` takes a number parameter and</span>
<span class="token comment">;; reloads the configuration file specified by the number, according to the</span>
<span class="token comment">;; order passed into the arguments on kanata startup.</span>
<span class="token comment">;;</span>
<span class="token comment">;; Upon a successful reload, the kanata state will begin on the default base layer</span>
<span class="token comment">;; in the configuration. E.g. in this example configuration, you would start on</span>
<span class="token comment">;; the qwerty layer.</span>
<span class="token punctuation">(</span><span class="token car">deflayer</span> layers
  _    @qwr @dvk lrld lrpv lrnx <span class="token punctuation">(</span><span class="token car">lrld-num</span> <span class="token number">1</span><span class="token punctuation">)</span> _ _    _    _    _    _    _
  _    _    _    _    _    _    _    _    _    _    _    _    _    _
  _    _    _    _    _    _    _    _    _    _    _    _    _
  _    _    _    _    _    _    _    _    _    _    _    _
  _    _    _              _              _    _    _
<span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token car">defalias</span>

  <span class="token comment">;; Alias for one-shot which will activate an action until either the timeout</span>
  <span class="token comment">;; expires or a different key is pressed. The timeout is the first parameter</span>
  <span class="token comment">;; and the action is the second parameter.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; The intended use cases are pressing a modifier for exactly one key or</span>
  <span class="token comment">;; switching to another layer for exactly one key.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; If a one-shot key is held then it will act as a regular key. E.g. for os1</span>
  <span class="token comment">;; below, holding an @os1 key will keep lsft held and holding an @os3 key</span>
  <span class="token comment">;; will keep the layer set to misc.</span>
  os1 <span class="token punctuation">(</span><span class="token car">one-shot</span> <span class="token number">500</span> lsft<span class="token punctuation">)</span>
  os2 <span class="token punctuation">(</span><span class="token car">one-shot</span> <span class="token number">500</span> C-S-lalt<span class="token punctuation">)</span>
  os3 <span class="token punctuation">(</span><span class="token car">one-shot</span> <span class="token number">500</span> <span class="token punctuation">(</span><span class="token car">layer-toggle</span> misc<span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token comment">;; Another name for one-shot is one-shot-press, since it ends on the first</span>
  <span class="token comment">;; press of another key.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; There is another variant one-shot-release which ends on the first release</span>
  <span class="token comment">;; of another key.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; There are further variants of both of these:</span>
  <span class="token comment">;; - one-shot-press-pcancel</span>
  <span class="token comment">;; - one-shot-release-pcancel</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; These will cancel the one-shot action and all other active one-shot actions</span>
  <span class="token comment">;; if a one-shot key is repressed while already active.</span>
  osp <span class="token punctuation">(</span><span class="token car">one-shot-press</span> <span class="token number">500</span> lsft<span class="token punctuation">)</span>
  osr <span class="token punctuation">(</span><span class="token car">one-shot-release</span> <span class="token number">500</span> lsft<span class="token punctuation">)</span>
  opp <span class="token punctuation">(</span><span class="token car">one-shot-press-pcancel</span> <span class="token number">500</span> lsft<span class="token punctuation">)</span>
  orp <span class="token punctuation">(</span><span class="token car">one-shot-release-pcancel</span> <span class="token number">500</span> lsft<span class="token punctuation">)</span>

  <span class="token comment">;; Alias for tap-dance which will activate one of the actions in the action</span>
  <span class="token comment">;; list depending on how many taps were done. Tapping once will output the</span>
  <span class="token comment">;; first action and tapping N times will output the N&#39;th action.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; The first parameter is a timeout. Tapping the same tap-dance key again</span>
  <span class="token comment">;; within the timeout will reset the timeout and advance the tap-dance to the</span>
  <span class="token comment">;; next key.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; The action activates either when any of the following happens:</span>
  <span class="token comment">;; - the timeout expires</span>
  <span class="token comment">;; - the tap sequence reaches the end</span>
  <span class="token comment">;; - a different key is pressed</span>
  td <span class="token punctuation">(</span><span class="token car">tap-dance</span> <span class="token number">200</span> <span class="token punctuation">(</span><span class="token car">a</span> b c d spc<span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token comment">;; There is a variant of tap-dance — tap-dance-eager — that will activate</span>
  <span class="token comment">;; every action tapped in the sequence rather than a single one. The example</span>
  <span class="token comment">;; below is rather simple and behaves similarly to the original tap-dance.</span>
  td2 <span class="token punctuation">(</span><span class="token car">tap-dance-eager</span> <span class="token number">500</span> <span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token car">macro</span> a<span class="token punctuation">)</span> <span class="token comment">;; use macro to prevent auto-repeat of the key</span>
    <span class="token punctuation">(</span><span class="token car">macro</span> bspc b b<span class="token punctuation">)</span>
    <span class="token punctuation">(</span><span class="token car">macro</span> bspc bspc c c c<span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token comment">;; arbitrary-code allows sending an arbitrary number as an OS code. This is</span>
  <span class="token comment">;; not cross platform! This can be useful for testing keys that are not yet</span>
  <span class="token comment">;; named or mapped in kanata. Please contribute findings with names and/order</span>
  <span class="token comment">;; mappings, either in a GitHub issue or as a pull request! This is currently</span>
  <span class="token comment">;; not supported with Windows using the interception driver.</span>
  ab1 <span class="token punctuation">(</span><span class="token car">arbitrary-code</span> <span class="token number">700</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token car">defalias</span>
  <span class="token comment">;; caps-word will add an lsft to the active key list for all alphanumeric keys</span>
  <span class="token comment">;; a-z, and the US layout minus key; meaning it will be converted to an</span>
  <span class="token comment">;; underscore.</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; The caps-word state will also be cleared if any key that doesn&#39;t get auto-</span>
  <span class="token comment">;; capitalized and also doesn&#39;t belong in this list is pressed:</span>
  <span class="token comment">;; - 0-9</span>
  <span class="token comment">;; - kp0-kp9</span>
  <span class="token comment">;; - bspc, del</span>
  <span class="token comment">;; - up, down, left, rght</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; The single parameter is a timeout in milliseconds after which the caps-word</span>
  <span class="token comment">;; state will be cleared and lsft will not be added anymore. The timer is reset</span>
  <span class="token comment">;; any time a capitalizable or extra non-terminating key is active.</span>
  cw <span class="token punctuation">(</span><span class="token car">caps-word</span> <span class="token number">2000</span><span class="token punctuation">)</span>

  <span class="token comment">;; Like caps-word, but you get to choose the key lists where lsft gets added.</span>
  <span class="token comment">;; This example is similar to the default caps-word behaviour but it moves the</span>
  <span class="token comment">;; 0-9 keys to capitalized key list from the extra non-terminating key list.</span>
  cwc <span class="token punctuation">(</span><span class="token car">caps-word-custom</span>
    <span class="token number">2000</span>
    <span class="token punctuation">(</span><span class="token car">a</span> b c d e f g h i j k l m n o p q r s <span class="token boolean">t</span> u v w x y z <span class="token number">0</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span> <span class="token number">9</span><span class="token punctuation">)</span>
    <span class="token punctuation">(</span><span class="token car">kp0</span> kp1 kp2 kp3 kp4 kp5 kp6 kp7 kp8 kp9 bspc del up down left rght<span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token comment">;; -toggle variants of caps-word will terminate caps-word on repress if it is</span>
<span class="token comment">;; currently active, otherwise caps-word will be activated.</span>
<span class="token punctuation">(</span><span class="token car">defalias</span>
  cwt <span class="token punctuation">(</span><span class="token car">caps-word-toggle</span> <span class="token number">2000</span><span class="token punctuation">)</span>
  cct <span class="token punctuation">(</span><span class="token car">caps-word-custom-toggle</span>
    <span class="token number">2000</span>
    <span class="token punctuation">(</span><span class="token car">a</span> b c d e f g h i j k l m n o p q r s <span class="token boolean">t</span> u v w x y z <span class="token number">0</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span> <span class="token number">9</span><span class="token punctuation">)</span>
    <span class="token punctuation">(</span><span class="token car">kp0</span> kp1 kp2 kp3 kp4 kp5 kp6 kp7 kp8 kp9 bspc del up down left rght<span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token comment">;; Can see a new action \`rpt\` in this layer. This repeats the most recently</span>
<span class="token comment">;; pressed key. Holding down the \`rpt\` key will not repeatedly send the key.</span>
<span class="token comment">;; The intended use case is to be able to use a different finger to repeat a</span>
<span class="token comment">;; double letter, as opposed to double-tapping a letter.</span>
<span class="token comment">;;</span>
<span class="token comment">;; The \`rpt\` action only repeats the last key output. For example, it won&#39;t</span>
<span class="token comment">;; output a chord like \`ctrl+c\` if the previous key pressed was \`C-c\` - it</span>
<span class="token comment">;; will only output \`c\`. There is a variant \`rpt-any\` which will repeat the</span>
<span class="token comment">;; previous action and would work for that use case.</span>
<span class="token punctuation">(</span><span class="token car">deflayer</span> misc
  _    _    _    _    _    _    _    _    _    @é   @è   _    ì #|random custom key for testing|#   _
  _    _    @ab1 _    _    _    ins  @{   @}   <span class="token punctuation">[</span>    <span class="token punctuation">]</span>    _    _    +
  @cw  _    _    _    C-u  _    del  bspc esc  ret  _    _    _
  @cwc C-z  C-x  C-c  C-v  _    _    _    @td  @os1 @os2 @os3
  rpt rpt-any _            _              _    _    _
<span class="token punctuation">)</span>


<span class="token punctuation">(</span><span class="token car">deflayer</span> chords      <span class="token comment">;; you can put list actions directly in deflayer but it&#39;s ugly, so prefer aliases.</span>
  _    _    _    _    _    _    _    _    _    _    @🙁  <span class="token punctuation">(</span><span class="token car">unicode</span> 😀<span class="token punctuation">)</span> _    _
  _    _    _    _    _    _    _    _    @csc @hpy @lch @tbm         _    _
  _    @alp _    _    _    _    _    @ch1 @ch2 @ch4 @ch8 _            _
  _    _    _    _    _    _    _    _    _    @csv _    _
  _    _    _              _              _    _    _
<span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token car">deflayer</span> arrows
  _    f1   f2   f3   f4   f5   f6   f7   f8   f9   f10  f11  f12  _
  _    _    _    _    _    _    _    pgup up   pgdn _    _    _    _
  _    _    _    _    _    _    home left down rght end  _    _
  _    _    _    _    _    _    _    _    _    _    _    _
  _    _    _              _              _    _    _
<span class="token punctuation">)</span>

<span class="token comment">;; In Windows, using mouse buttons on the kanata window seems to cause it to hang.</span>
<span class="token comment">;; Using the mouse on other windows seems to be fine though.</span>
<span class="token comment">;;</span>
<span class="token comment">;; The mouse buttons can be clicked using mlft, mrgt, mmid, mfwd and mbck, representing the</span>
<span class="token comment">;; left, right, middle, forward and backward mouse buttons respectively. If the key is held, the</span>
<span class="token comment">;; button press will also be held.</span>
<span class="token comment">;;</span>
<span class="token comment">;; If there are multiple mouse click actions within a single multi action, e.g.</span>
<span class="token comment">;; (multi mrgt mlft), then all the buttons except the last will be clicked then</span>
<span class="token comment">;; unclicked. The last button will remain held until key release. In the example</span>
<span class="token comment">;; given, the button sequence will be:</span>
<span class="token comment">;; press key-&gt;click right-&gt;unclick right-&gt;click left-&gt;release key-&gt;release left</span>
<span class="token comment">;;</span>
<span class="token comment">;; There are variants of the standard mouse buttons which &quot;tap&quot; the button.</span>
<span class="token comment">;; These are mltp, mrtp, and mmtp. Rather than holding until key release, this</span>
<span class="token comment">;; action will click and unclick the button once the key is pressed. Nothing</span>
<span class="token comment">;; happens on key release. The action (multi lctl mltp) will result in the</span>
<span class="token comment">;; sequence below:</span>
<span class="token comment">;; press key-&gt;press lctl-&gt;click left-&gt;unclick left-&gt;release key-&gt;release lctl</span>
<span class="token comment">;;</span>
<span class="token comment">;; One can also see mouse movement actions at the lower right side, with the</span>
<span class="token comment">;; arrow unicode characters.</span>
<span class="token punctuation">(</span><span class="token car">deflayer</span> mouse
  _    @mwu @mwd @mwl @mwr _    _    _    _    _    @ma↑ _    _    _
  _    pgup bck  _    fwd  _    _    _    _    @ma← @ma↓ @ma→ _    _
  _    pgdn mlft _    mrgt mmid _    mbck mfwd _    @ms↑ _    _
  @fms _    mltp _    mrtp mmtp _    mbtp mftp @ms← @ms↓ @ms→
  _    _    _              _              _    _    _
<span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token car">defalias</span>
  <span class="token comment">;; Mouse wheel actions. The first number is the interval in milliseconds</span>
  <span class="token comment">;; between scroll actions. The second number is the distance in some arbitrary</span>
  <span class="token comment">;; unit. Play with the parameters to see what feels correct. Both numbers</span>
  <span class="token comment">;; must be in the range 1-65535</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; In both Windows and Linux, 120 distance units is equivalent to a single</span>
  <span class="token comment">;; notch movement on a physical wheel. In Linux, not all desktop environments</span>
  <span class="token comment">;; support the REL_WHEEL_HI_RES event so if you experience issues with \`mwheel\`</span>
  <span class="token comment">;; actions in Linux, using a distance value that is multiple of 120 may help.</span>
  mwu <span class="token punctuation">(</span><span class="token car">mwheel-up</span> <span class="token number">50</span> <span class="token number">120</span><span class="token punctuation">)</span>
  mwd <span class="token punctuation">(</span><span class="token car">mwheel-down</span> <span class="token number">50</span> <span class="token number">120</span><span class="token punctuation">)</span>

  <span class="token comment">;; Horizontal mouse wheel actions. Similar story to vertical mouse wheel.</span>
  mwl <span class="token punctuation">(</span><span class="token car">mwheel-left</span> <span class="token number">50</span> <span class="token number">120</span><span class="token punctuation">)</span>
  mwr <span class="token punctuation">(</span><span class="token car">mwheel-right</span> <span class="token number">50</span> <span class="token number">120</span><span class="token punctuation">)</span>

  <span class="token comment">;; Mouse movement actions.The first number is the interval in milliseconds</span>
  <span class="token comment">;; between mouse actions. The second number is the distance traveled per interval</span>
  <span class="token comment">;; in pixels.</span>

  ms↑ <span class="token punctuation">(</span><span class="token car">movemouse-up</span> <span class="token number">1</span> <span class="token number">1</span><span class="token punctuation">)</span>
  ms← <span class="token punctuation">(</span><span class="token car">movemouse-left</span> <span class="token number">1</span> <span class="token number">1</span><span class="token punctuation">)</span>
  ms↓ <span class="token punctuation">(</span><span class="token car">movemouse-down</span> <span class="token number">1</span> <span class="token number">1</span><span class="token punctuation">)</span>
  ms→ <span class="token punctuation">(</span><span class="token car">movemouse-right</span> <span class="token number">1</span> <span class="token number">1</span><span class="token punctuation">)</span>

  <span class="token comment">;; Mouse movement actions with linear acceleration. The first number is the</span>
  <span class="token comment">;; interval in milliseconds between mouse actions. The second number is the time</span>
  <span class="token comment">;; in milliseconds for the distance to linearly ramp up from the minimum distance</span>
  <span class="token comment">;; to the maximum distance. The third number is the minimum distance traveled</span>
  <span class="token comment">;; per interval in pixels. The fourth number is the maximum distance traveled</span>
  <span class="token comment">;; per interval in pixels.</span>

  ma↑ <span class="token punctuation">(</span><span class="token car">movemouse-accel-up</span> <span class="token number">1</span> <span class="token number">1000</span> <span class="token number">1</span> <span class="token number">5</span><span class="token punctuation">)</span>
  ma← <span class="token punctuation">(</span><span class="token car">movemouse-accel-left</span> <span class="token number">1</span> <span class="token number">1000</span> <span class="token number">1</span> <span class="token number">5</span><span class="token punctuation">)</span>
  ma↓ <span class="token punctuation">(</span><span class="token car">movemouse-accel-down</span> <span class="token number">1</span> <span class="token number">1000</span> <span class="token number">1</span> <span class="token number">5</span><span class="token punctuation">)</span>
  ma→ <span class="token punctuation">(</span><span class="token car">movemouse-accel-right</span> <span class="token number">1</span> <span class="token number">1000</span> <span class="token number">1</span> <span class="token number">5</span><span class="token punctuation">)</span>

  <span class="token comment">;; setmouse places the cursor at a specific pixel x-y position. This</span>
  <span class="token comment">;; example puts it in the middle of the screen. The coordinates go from 0,0</span>
  <span class="token comment">;; which is the upper-left corner of the screen to 65535,65535 which is the</span>
  <span class="token comment">;; lower-right corner of the screen. If you have multiple monitors, they are</span>
  <span class="token comment">;; treated as one giant screen, which may make it a bit confusing for how to</span>
  <span class="token comment">;; set up the pixels. You will need to experiment.</span>
  sm <span class="token punctuation">(</span><span class="token car">setmouse</span> <span class="token number">32228</span> <span class="token number">32228</span><span class="token punctuation">)</span>

  <span class="token comment">;; movemouse-speed takes a percentage by which it then scales all of the</span>
  <span class="token comment">;; mouse movements while held. You can have as many of these active at a</span>
  <span class="token comment">;; given time as you would like, but be warned that some values, such as 33</span>
  <span class="token comment">;; may not have correct pixel distance representations.</span>
  fms <span class="token punctuation">(</span><span class="token car">movemouse-speed</span> <span class="token number">200</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token car">defalias</span>
  lft <span class="token punctuation">(</span><span class="token car">multi</span> <span class="token punctuation">(</span><span class="token car">release-key</span> ralt<span class="token punctuation">)</span> left<span class="token punctuation">)</span> <span class="token comment">;; release ralt if held and also press left</span>
  rgt <span class="token punctuation">(</span><span class="token car">multi</span> <span class="token punctuation">(</span><span class="token car">release-key</span> ralt<span class="token punctuation">)</span> rght<span class="token punctuation">)</span> <span class="token comment">;; release ralt if held and also press rght</span>
  rlr <span class="token punctuation">(</span><span class="token car">release-layer</span> ralted<span class="token punctuation">)</span>          <span class="token comment">;; release layer-toggle of ralted</span>
<span class="token punctuation">)</span>

<span class="token comment">;; It&#39;s not clear what the practical use case is for the @rlr alias, but the</span>
<span class="token comment">;; combination of @ralt on the dvorak layer and this layer with @lft and @rgt</span>
<span class="token comment">;; results in the physical ralt key behaving mostly as ralt, **except** for</span>
<span class="token comment">;; holding it **then** pressing specific keys. These specific keys release the</span>
<span class="token comment">;; ralt because it would cause them to have undesired behaviour without the</span>
<span class="token comment">;; release.</span>
<span class="token comment">;;</span>
<span class="token comment">;; E.g. ralt+@lft will result in only left being pressed instead of ralt+left,</span>
<span class="token comment">;; while ralt(hold)+tab+tab+tab still works as intended.</span>
<span class="token punctuation">(</span><span class="token car">deflayer</span> ralted
  _    _    _    _    _    _    _    _    _    _    _    _    _    _
  _    _    _    _    _    _    _    _    _    _    _    _    _    _
  _    _    _    _    _    _    _    @lft @rlr @rgt _    _    _
  _    _    _    _    _    _    _    _    _    _    _    _
  _    _    _              _              _    _    _
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="defvirtualkeys、deffakekeys-虚拟按键动作" tabindex="-1"><a class="header-anchor" href="#defvirtualkeys、deffakekeys-虚拟按键动作"><span>defvirtualkeys、deffakekeys 虚拟按键动作</span></a></h2><div class="language-lisp line-numbers-mode" data-ext="lisp" data-title="lisp"><pre class="language-lisp"><code><span class="token comment">;; 虚拟按键动作</span>

<span class="token punctuation">(</span><span class="token car">defvirtualkeys</span>
  <span class="token comment">;; Define some virtual keys that perform modifier actions</span>
  vkctl lctl
  vksft lsft
  vkmet lmet
  vkalt lalt

  <span class="token comment">;; A virtual key that toggles all modifier virtual keys above</span>
  vktal <span class="token punctuation">(</span><span class="token car">multi</span>
        <span class="token punctuation">(</span><span class="token car">on-press</span> toggle-virtualkey vkctl<span class="token punctuation">)</span>
        <span class="token punctuation">(</span><span class="token car">on-press</span> toggle-virtualkey vksft<span class="token punctuation">)</span>
        <span class="token punctuation">(</span><span class="token car">on-press</span> toggle-virtualkey vkmet<span class="token punctuation">)</span>
        <span class="token punctuation">(</span><span class="token car">on-press</span> toggle-virtualkey vkalt<span class="token punctuation">)</span>
      <span class="token punctuation">)</span>

  <span class="token comment">;; Virtual key that activates a macro</span>
  vkmacro <span class="token punctuation">(</span><span class="token car">macro</span> h e l l o spc w o r l d<span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token car">defalias</span>
  psfvk <span class="token punctuation">(</span><span class="token car">on-press</span> press-virtualkey   vksft<span class="token punctuation">)</span>
  rsfvk <span class="token punctuation">(</span><span class="token car">on-press</span> release-virtualkey vksft<span class="token punctuation">)</span>

  palvk <span class="token punctuation">(</span><span class="token car">on-press</span> tap-vkey vktal<span class="token punctuation">)</span>
  macvk <span class="token punctuation">(</span><span class="token car">on-press</span> tap-vkey vkmacro<span class="token punctuation">)</span>

  isfvk <span class="token punctuation">(</span><span class="token car">on-idle</span> <span class="token number">1000</span> tap-vkey vksft<span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token comment">;; Press and release fake keys.</span>
<span class="token comment">;;</span>
<span class="token comment">;; Fake keys can&#39;t be pressed by any physical keyboard buttons and can only be</span>
<span class="token comment">;; acted upon by the actions:</span>
<span class="token comment">;; - on-press-fakekey</span>
<span class="token comment">;; - on-release-fakekey</span>
<span class="token comment">;; - on-idle-fakekey</span>
<span class="token comment">;;</span>
<span class="token comment">;; One use case of fake keys is for holding modifier keys</span>
<span class="token comment">;; for any number of keypresses and then releasing the modifiers when desired.</span>
<span class="token comment">;;</span>
<span class="token comment">;; The actions associated with fake keys in deffakekeys are parsed before</span>
<span class="token comment">;; aliases, so you can&#39;t use aliases within deffakekeys. Other than the lack</span>
<span class="token comment">;; of alias support, fake keys can do any action that a normal key can,</span>
<span class="token comment">;; including doing operations on previously defined fake keys.</span>
<span class="token comment">;;</span>
<span class="token comment">;; Operations on fake keys can occur either on press (on-press-fakekey),</span>
<span class="token comment">;; on release (on-release-fakekey), or on idle for a specified time</span>
<span class="token comment">;; (on-idle-fakekey).</span>
<span class="token comment">;;</span>
<span class="token comment">;; Fake keys are flexible in usage but can be obscure to discover how they</span>
<span class="token comment">;; can be useful to you.</span>
<span class="token punctuation">(</span><span class="token car">deflayer</span> fakekeys
  _    @fcp @fsp @fmp @pal _    _    _    _    _    _    _    _    _
  _    @fcr @fsr @fap @ral _    _    _    _    _    _    _    _    _
  _    @fct @fst @rma _    _    _    _    _    _    _    _    _
  _    @t1  _    _    _    _    _    _    _    _    _    _
  _    _    _              _              _    _    _
<span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token car">deffakekeys</span>
  ctl lctl
  sft lsft
  lsft lsft
  met lmet
  alt lalt
  mmid mmid
  pal <span class="token punctuation">(</span><span class="token car">multi</span>
        <span class="token punctuation">(</span><span class="token car">on-press-fakekey</span> ctl press<span class="token punctuation">)</span>
        <span class="token punctuation">(</span><span class="token car">on-press-fakekey</span> sft press<span class="token punctuation">)</span>
        <span class="token punctuation">(</span><span class="token car">on-press-fakekey</span> met press<span class="token punctuation">)</span>
        <span class="token punctuation">(</span><span class="token car">on-press-fakekey</span> alt press<span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
  ral <span class="token punctuation">(</span><span class="token car">multi</span>
        <span class="token punctuation">(</span><span class="token car">on-press-fakekey</span> ctl release<span class="token punctuation">)</span>
        <span class="token punctuation">(</span><span class="token car">on-press-fakekey</span> sft release<span class="token punctuation">)</span>
        <span class="token punctuation">(</span><span class="token car">on-press-fakekey</span> met release<span class="token punctuation">)</span>
        <span class="token punctuation">(</span><span class="token car">on-press-fakekey</span> alt release<span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token car">defalias</span>
  fcp <span class="token punctuation">(</span><span class="token car">on-press-fakekey</span> ctl press<span class="token punctuation">)</span>
  fcr <span class="token punctuation">(</span><span class="token car">on-press-fakekey</span> ctl release<span class="token punctuation">)</span>
  fct <span class="token punctuation">(</span><span class="token car">on-press-fakekey</span> ctl tap<span class="token punctuation">)</span>
  fsp <span class="token punctuation">(</span><span class="token car">on-release-fakekey</span> sft press<span class="token punctuation">)</span>
  fsr <span class="token punctuation">(</span><span class="token car">on-release-fakekey</span> sft release<span class="token punctuation">)</span>
  fst <span class="token punctuation">(</span><span class="token car">on-release-fakekey</span> sft tap<span class="token punctuation">)</span>
  fsg <span class="token punctuation">(</span><span class="token car">on-release-fakekey</span> sft toggle<span class="token punctuation">)</span>
  fmp <span class="token punctuation">(</span><span class="token car">on-press-fakekey</span> met press<span class="token punctuation">)</span>
  fap <span class="token punctuation">(</span><span class="token car">on-press-fakekey</span> alt press<span class="token punctuation">)</span>
  rma <span class="token punctuation">(</span><span class="token car">multi</span>
        <span class="token punctuation">(</span><span class="token car">on-press-fakekey</span> met release<span class="token punctuation">)</span>
        <span class="token punctuation">(</span><span class="token car">on-press-fakekey</span> alt release<span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
  pal <span class="token punctuation">(</span><span class="token car">on-press-fakekey</span> pal tap<span class="token punctuation">)</span>
  ral <span class="token punctuation">(</span><span class="token car">on-press-fakekey</span> ral tap<span class="token punctuation">)</span>
  rdl <span class="token punctuation">(</span><span class="token car">on-idle-fakekey</span> ral tap <span class="token number">1000</span><span class="token punctuation">)</span>

  <span class="token comment">;; Test of on-press-fakekey and on-release-fakekey in a macro</span>
  t1 <span class="token punctuation">(</span><span class="token car">macro-release-cancel</span> @fsp <span class="token number">5</span> a b c @fsr <span class="token number">5</span> c b a<span class="token punctuation">)</span>

  <span class="token comment">;; If you find that an application isn&#39;t registering keypresses correctly</span>
  <span class="token comment">;; with multi, you can try out:</span>
  <span class="token comment">;; - on-press-fakekey-delay</span>
  <span class="token comment">;; - on-release-fakekey-delay</span>
  <span class="token comment">;;</span>
  <span class="token comment">;; Do note that processing a fakekey-delay and even a sequence of delays will</span>
  <span class="token comment">;; delay any other inputs from being processed until the fakekey-delays are</span>
  <span class="token comment">;; all complete, so use with care.</span>
  stm <span class="token punctuation">(</span><span class="token car">multi</span> <span class="token comment">;; Shift -&gt; middle mouse with a delay</span>
    <span class="token punctuation">(</span><span class="token car">on-press-fakekey</span> lsft press<span class="token punctuation">)</span>
    <span class="token punctuation">(</span><span class="token car">on-press-fakekey-delay</span> <span class="token number">200</span><span class="token punctuation">)</span>
    <span class="token punctuation">(</span><span class="token car">on-press-fakekey</span> mmid press<span class="token punctuation">)</span>
    <span class="token punctuation">(</span><span class="token car">on-release-fakekey</span> mmid release<span class="token punctuation">)</span>
    <span class="token punctuation">(</span><span class="token car">on-release-fakekey-delay</span> <span class="token number">200</span><span class="token punctuation">)</span>
    <span class="token punctuation">(</span><span class="token car">on-release-fakekey</span> lsft release<span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="defseq-vim风格的先导键" tabindex="-1"><a class="header-anchor" href="#defseq-vim风格的先导键"><span>defseq vim风格的先导键</span></a></h2><div class="language-lisp line-numbers-mode" data-ext="lisp" data-title="lisp"><pre class="language-lisp"><code><span class="token comment">;; vim风格的先导键序列。通过按下“领导”键，然后按下一系列字符来激活假按键。</span>
<span class="token comment">;; See: https://github.com/jtroo/kanata/issues/97</span>
<span class="token comment">;;</span>
<span class="token comment">;; You can add an entry to defcfg to change the sequence timeout (default is 1000):</span>
<span class="token comment">;;     sequence-timeout &lt;number(ms)&gt;</span>
<span class="token comment">;;</span>
<span class="token comment">;; If you want multiple timeouts with different leaders, you can also activate the</span>
<span class="token comment">;; sequence action:</span>
<span class="token comment">;;     (sequence &lt;timeout&gt;)</span>
<span class="token comment">;; This acts like \`sldr\` but uses a different timeout.</span>
<span class="token comment">;;</span>
<span class="token comment">;; There is also an option to customize the key sequence input mode. Its default</span>
<span class="token comment">;; value when not configured is \`hidden-suppressed\`.</span>
<span class="token comment">;;</span>
<span class="token comment">;; The options are:</span>
<span class="token comment">;;</span>
<span class="token comment">;; - \`visible-backspaced\`: types sequence characters as they are inputted. The</span>
<span class="token comment">;;   typed characters will be erased with backspaces for a valid sequence termination.</span>
<span class="token comment">;; - \`hidden-suppressed\`: hides sequence characters as they are typed. Does not</span>
<span class="token comment">;;   output the hidden characters for an invalid sequence termination.</span>
<span class="token comment">;; - \`hidden-delay-type\`: hides sequence characters as they are typed. Outputs the</span>
<span class="token comment">;;   hidden characters for an invalid sequence termination either after either a</span>
<span class="token comment">;;   timeout or after a non-sequence key is typed.</span>
<span class="token comment">;;</span>
<span class="token comment">;; For \`visible-backspaced\` and \`hidden-delay-type\`, a sequence leader input will</span>
<span class="token comment">;; be ignored if a sequence is already active. For historical reasons, and in case</span>
<span class="token comment">;; it is desired behaviour, a sequence leader input using \`hidden-suppressed\` will</span>
<span class="token comment">;; reset the key sequence.</span>
<span class="token comment">;;</span>
<span class="token comment">;; Example:</span>
<span class="token comment">;;     sequence-input-mode visible-backspaced</span>
<span class="token punctuation">(</span><span class="token car">defseq</span> git-status <span class="token punctuation">(</span><span class="token car">g</span> s <span class="token boolean">t</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token car">deffakekeys</span> git-status <span class="token punctuation">(</span><span class="token car">macro</span> g i <span class="token boolean">t</span> spc s <span class="token boolean">t</span> a <span class="token boolean">t</span> u s<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token car">defalias</span> rcl <span class="token punctuation">(</span><span class="token car">tap-hold-release</span> <span class="token number">200</span> <span class="token number">200</span> sldr rctl<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token car">defseq</span>
    dotcom <span class="token punctuation">(</span>. S-3<span class="token punctuation">)</span>
    dotorg <span class="token punctuation">(</span>. S-4<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token car">deffakekeys</span>
    dotcom <span class="token punctuation">(</span><span class="token car">macro</span> <span class="token punctuation">.</span> c o m<span class="token punctuation">)</span>
    dotorg <span class="token punctuation">(</span><span class="token car">macro</span> <span class="token punctuation">.</span> o r g<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token comment">;; Enter sequence mode and input .</span>
<span class="token punctuation">(</span><span class="token car">defalias</span> dot-sequence <span class="token punctuation">(</span><span class="token car">macro</span> <span class="token punctuation">(</span><span class="token car">sequence</span> <span class="token number">250</span><span class="token punctuation">)</span> <span class="token number">10</span> .<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token car">defalias</span> dot-sequence-inputmode <span class="token punctuation">(</span><span class="token car">macro</span> <span class="token punctuation">(</span><span class="token car">sequence</span> <span class="token number">250</span> hidden-delay-type<span class="token punctuation">)</span> <span class="token number">10</span> .<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">;; There are special keys that you can assign in your actions which will</span>
<span class="token comment">;; never output events to your operating system, but which you can use</span>
<span class="token comment">;; in sequences. They are named: nop0-nop9.</span>
<span class="token punctuation">(</span><span class="token car">defseq</span>
    dotcom <span class="token punctuation">(</span><span class="token car">nop0</span> nop1<span class="token punctuation">)</span>
    dotorg <span class="token punctuation">(</span><span class="token car">nop8</span> nop9<span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token comment">;; A key list within O-(...) signifies simultaneous presses.</span>
<span class="token punctuation">(</span><span class="token car">defseq</span>
    dotcom <span class="token punctuation">(</span><span class="token car">O-</span><span class="token punctuation">(</span>. c m<span class="token punctuation">)</span><span class="token punctuation">)</span>
    dotorg <span class="token punctuation">(</span><span class="token car">O-</span><span class="token punctuation">(</span>. r g<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="defchords-输入拨弦" tabindex="-1"><a class="header-anchor" href="#defchords-输入拨弦"><span>defchords 输入拨弦</span></a></h2><div class="language-lisp line-numbers-mode" data-ext="lisp" data-title="lisp"><pre class="language-lisp"><code><span class="token comment">;; Input chording.</span>
<span class="token comment">;;</span>
<span class="token comment">;; Not to be confused with output chords (like C-S-a or the chords layer</span>
<span class="token comment">;; defined above), these allow you to perform actions when a combination of</span>
<span class="token comment">;; input keys (a &quot;chord&quot;) are pressed all at once (order does not matter).</span>
<span class="token comment">;; Each combination/chord can perform a different action, allowing you to bind</span>
<span class="token comment">;; up to \`2^n - 1\` different actions to just \`n\` keys.</span>
<span class="token comment">;;</span>
<span class="token comment">;; Each \`defchords\` defines a named group of such chord-action pairs.</span>
<span class="token comment">;; The 500 is a timeout after which a chord triggers if it isn&#39;t triggered by a</span>
<span class="token comment">;; key release or press of a non-chord key before the timeout expires.</span>
<span class="token comment">;; If a chord is not defined, no action will occur when it is triggered but the</span>
<span class="token comment">;; keys used to input it will be consumed regardless.</span>
<span class="token comment">;;</span>
<span class="token comment">;; Each pair consists of the keys that make up a given chord in the parenthesis</span>
<span class="token comment">;; followed by the action that should be executed when the given chord is</span>
<span class="token comment">;; pressed.</span>
<span class="token comment">;; Note that these keys do not directly correspond to real keys and are merely</span>
<span class="token comment">;; arbitrary labels that make sense within the context of the chord.</span>
<span class="token comment">;; They are mapped to real keys in layers by configuring the key in the layer to</span>
<span class="token comment">;; map to a \`(chord name key)\` action (like those in the \`defalias\` below) where</span>
<span class="token comment">;; \`name\` is the name of the chords group (here \`binary\`) and \`key\` is one of the</span>
<span class="token comment">;; arbitrary labels of the keys in a chord (here \`1\`, \`2\`, \`4\` and \`8\`).</span>
<span class="token comment">;;</span>
<span class="token comment">;; Note that it is perfectly valid to nest these \`chord\` actions that enter</span>
<span class="token comment">;; &quot;chording mode&quot; within other actions like \`tap-dance\` and that will work as</span>
<span class="token comment">;; one would expect.</span>
<span class="token comment">;; However, this only applies to the first key used to enter &quot;chording mode&quot;.</span>
<span class="token comment">;; Once &quot;chording mode&quot; is active, all other keys will be directly handled by</span>
<span class="token comment">;; &quot;chording mode&quot; with no regard for wrapper actions; e.g. if a key is pressed</span>
<span class="token comment">;; and it maps to a tap-hold with a chord as the hold action within, that chord</span>
<span class="token comment">;; key will immediately activate instead of the key needing to be held for the</span>
<span class="token comment">;; timeout period.</span>
<span class="token comment">;;</span>
<span class="token comment">;; The action executed by a chord (the right side of the chord-action pairs) may</span>
<span class="token comment">;; be any regular or advanced action, including aliases. They currently cannot</span>
<span class="token comment">;; however contain a \`chord\` action.</span>
<span class="token punctuation">(</span><span class="token car">defchords</span> binary <span class="token number">500</span>
  <span class="token punctuation">(</span><span class="token number">1</span>      <span class="token punctuation">)</span> <span class="token number">1</span>
  <span class="token punctuation">(</span>  <span class="token number">2</span>    <span class="token punctuation">)</span> <span class="token number">2</span>
  <span class="token punctuation">(</span><span class="token number">1</span> <span class="token number">2</span>    <span class="token punctuation">)</span> <span class="token number">3</span>
  <span class="token punctuation">(</span>    <span class="token number">4</span>  <span class="token punctuation">)</span> <span class="token number">4</span>
  <span class="token punctuation">(</span><span class="token number">1</span>   <span class="token number">4</span>  <span class="token punctuation">)</span> <span class="token number">5</span>
  <span class="token punctuation">(</span>  <span class="token number">2</span> <span class="token number">4</span>  <span class="token punctuation">)</span> <span class="token number">6</span>
  <span class="token punctuation">(</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">4</span>  <span class="token punctuation">)</span> <span class="token number">7</span>
  <span class="token punctuation">(</span>      <span class="token number">8</span><span class="token punctuation">)</span> <span class="token number">8</span>
  <span class="token punctuation">(</span><span class="token number">1</span>     <span class="token number">8</span><span class="token punctuation">)</span> <span class="token number">9</span>
  <span class="token punctuation">(</span>  <span class="token number">2</span>   <span class="token number">8</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token car">multi</span> <span class="token number">1</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">(</span><span class="token number">1</span> <span class="token number">2</span>   <span class="token number">8</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token car">multi</span> <span class="token number">1</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">(</span>    <span class="token number">4</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token car">multi</span> <span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token punctuation">(</span><span class="token number">1</span>   <span class="token number">4</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token car">multi</span> <span class="token number">1</span> <span class="token number">3</span><span class="token punctuation">)</span>
  <span class="token punctuation">(</span>  <span class="token number">2</span> <span class="token number">4</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token car">multi</span> <span class="token number">1</span> <span class="token number">4</span><span class="token punctuation">)</span>
  <span class="token punctuation">(</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">4</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token car">multi</span> <span class="token number">1</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token car">defalias</span>
  ch1 <span class="token punctuation">(</span><span class="token car">chord</span> binary <span class="token number">1</span><span class="token punctuation">)</span>
  ch2 <span class="token punctuation">(</span><span class="token car">chord</span> binary <span class="token number">2</span><span class="token punctuation">)</span>
  ch4 <span class="token punctuation">(</span><span class="token car">chord</span> binary <span class="token number">4</span><span class="token punctuation">)</span>
  ch8 <span class="token punctuation">(</span><span class="token car">chord</span> binary <span class="token number">8</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="deftemplate-模板" tabindex="-1"><a class="header-anchor" href="#deftemplate-模板"><span>deftemplate 模板</span></a></h2><div class="language-lisp line-numbers-mode" data-ext="lisp" data-title="lisp"><pre class="language-lisp"><code><span class="token comment">;; 顶层操作“include”将从新文件中读取配置。在撰写本文时，include只能放在顶层。</span>
<span class="token comment">;; 包含的文件也不能包含包含本身。</span>
<span class="token comment">;;</span>
<span class="token comment">;; (include included-file.kbd)</span>

<span class="token comment">;; 顶级项 \`deftemplate\` 声明了一个模板，该模板可以多次展开以减少重复。</span>
<span class="token comment">;;</span>
<span class="token comment">;; 通过 \`expand-template\` 来扩展模板。</span>

<span class="token comment">;; This template defines a chord group and aliases that use the chord group.</span>
<span class="token comment">;; The purpose is to easily define the same chord position behaviour</span>
<span class="token comment">;; for multiple layers that have different underlying keys.</span>
<span class="token punctuation">(</span><span class="token car">deftemplate</span> left-hand-chords <span class="token punctuation">(</span><span class="token car">chordgroupname</span> k1 k2 k3 k4 alias1 alias2 alias3 alias4<span class="token punctuation">)</span>
  <span class="token punctuation">(</span><span class="token car">defalias</span>
    $alias1 <span class="token punctuation">(</span><span class="token car">chord</span> $chordgroupname $k1<span class="token punctuation">)</span>
    $alias2 <span class="token punctuation">(</span><span class="token car">chord</span> $chordgroupname $k2<span class="token punctuation">)</span>
    $alias3 <span class="token punctuation">(</span><span class="token car">chord</span> $chordgroupname $k3<span class="token punctuation">)</span>
    $alias4 <span class="token punctuation">(</span><span class="token car">chord</span> $chordgroupname $k4<span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
  <span class="token punctuation">(</span><span class="token car">defchords</span> $chordgroupname $chord-timeout
    <span class="token punctuation">(</span><span class="token car">$k1</span><span class="token punctuation">)</span> $k1
    <span class="token punctuation">(</span><span class="token car">$k2</span><span class="token punctuation">)</span> $k2
    <span class="token punctuation">(</span><span class="token car">$k3</span><span class="token punctuation">)</span> $k3
    <span class="token punctuation">(</span><span class="token car">$k4</span><span class="token punctuation">)</span> $k4
    <span class="token punctuation">(</span><span class="token car">$k1</span> $k2<span class="token punctuation">)</span> lctl
    <span class="token punctuation">(</span><span class="token car">$k3</span> $k4<span class="token punctuation">)</span> lsft
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token defvar"><span class="token keyword">defvar</span> <span class="token variable">chord-timeout</span></span> <span class="token number">200</span><span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token car">template-expand</span> left-hand-chords qwerty a s d f qwa qws qwd qwf<span class="token punctuation">)</span>
<span class="token comment">;; You can use t! as a short form of template-expand</span>
<span class="token punctuation">(</span><span class="token car">t!</span> left-hand-chords dvorak a o e u dva dvo dve dvu<span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token car">deflayer</span> template-example
  _    _    _    _    _    _    _    _    _    _    _    _    _    _
  _    @qwa @qws @qwd @qwf _    _    _    _    _    _    _    _    _
  _    @dva @dvo @dve @dvu _    _    _    _    _    _    _    _
  _    _    _    _    _    _    _    _    _    _    _    _
  _    _    _              _              _    _    _
<span class="token punctuation">)</span>

<span class="token comment">;; Within a deftemplate you can use if-equal to conditionally insert content</span>
<span class="token comment">;; into the template.</span>

<span class="token punctuation">(</span><span class="token car">deftemplate</span> home-row <span class="token punctuation">(</span><span class="token car">version</span><span class="token punctuation">)</span>
  a s d f g h
  <span class="token punctuation">(</span><span class="token car">if-equal</span> $version v1 j<span class="token punctuation">)</span>
  <span class="token punctuation">(</span><span class="token car">if-equal</span> $version v2 <span class="token punctuation">(</span><span class="token car">tap-hold</span> <span class="token number">200</span> <span class="token number">200</span> j lctl<span class="token punctuation">)</span><span class="token punctuation">)</span>
   k l <span class="token comment">; &#39;</span>
<span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token car">deftemplate</span> common-overrides <span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">(</span><span class="token car">lctl</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token car">lctl</span> lsft tab<span class="token punctuation">)</span>
  <span class="token punctuation">(</span><span class="token car">lctl</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token car">lctl</span> tab<span class="token punctuation">)</span>
  <span class="token punctuation">(</span><span class="token car">lalt</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token car">lalt</span> lsft tab<span class="token punctuation">)</span>
  <span class="token punctuation">(</span><span class="token car">lalt</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token car">lalt</span> tab<span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token comment">;; Wrapping a top-level configuration item in a list beginning with</span>
<span class="token comment">;; (platform (applicable-platforms...) ...configuration...)</span>
<span class="token comment">;; will make the configuration only active on a specific platform.</span>
<span class="token punctuation">(</span><span class="token car">platform</span> <span class="token punctuation">(</span><span class="token car">macos</span><span class="token punctuation">)</span>
  <span class="token comment">;; Only on macos, use command arrows to jump/delete words</span>
  <span class="token comment">;; because command is used for so many other things</span>
  <span class="token comment">;; and it&#39;s weird that these cases use alt.</span>
  <span class="token punctuation">(</span><span class="token car">defoverrides</span>
    <span class="token punctuation">(</span><span class="token car">lmet</span> bspc<span class="token punctuation">)</span>  <span class="token punctuation">(</span><span class="token car">lalt</span> bspc<span class="token punctuation">)</span>
    <span class="token punctuation">(</span><span class="token car">lmet</span> left<span class="token punctuation">)</span>  <span class="token punctuation">(</span><span class="token car">lalt</span> left<span class="token punctuation">)</span>
    <span class="token punctuation">(</span><span class="token car">lmet</span> right<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token car">lalt</span> right<span class="token punctuation">)</span>
    <span class="token punctuation">(</span><span class="token car">template-expand</span> common-overrides<span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token car">platform</span> <span class="token punctuation">(</span><span class="token car">win</span> winiov2 wintercept linux<span class="token punctuation">)</span>
  <span class="token punctuation">(</span><span class="token car">defoverrides</span>
    <span class="token punctuation">(</span><span class="token car">template-expand</span> common-overrides<span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span>

#|

Global input chords.

Syntax <span class="token punctuation">(</span>5-tuples<span class="token punctuation">)</span>:

    <span class="token punctuation">(</span><span class="token car">defchordsv2-experimental</span>
      <span class="token punctuation">(</span><span class="token car">participating-keys1</span><span class="token punctuation">)</span> action1 timeout1 release-behaviour1 <span class="token punctuation">(</span><span class="token car">disabled-layers1</span><span class="token punctuation">)</span>
        ...
      <span class="token punctuation">(</span><span class="token car">participating-keysN</span><span class="token punctuation">)</span> actionN timeoutN release-behaviourN <span class="token punctuation">(</span><span class="token car">disabled-layersN</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>

|#

<span class="token punctuation">(</span><span class="token car">defchordsv2-experimental</span>
  <span class="token punctuation">(</span><span class="token car">a</span> b<span class="token punctuation">)</span>      c                <span class="token number">200</span> all-released  <span class="token punctuation">(</span><span class="token car">arrows</span><span class="token punctuation">)</span>
  <span class="token punctuation">(</span><span class="token car">a</span> b z<span class="token punctuation">)</span>   <span class="token punctuation">(</span><span class="token car">macro</span> h e l l o<span class="token punctuation">)</span> <span class="token number">250</span> first-release <span class="token punctuation">(</span><span class="token car">arrows</span><span class="token punctuation">)</span>
  <span class="token punctuation">(</span><span class="token car">a</span> b z y<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token car">macro</span> b y e<span class="token punctuation">)</span>     <span class="token number">400</span> first-release <span class="token punctuation">(</span><span class="token car">arrows</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36)]))}const p=s(t,[["render",l],["__file","01. kanata.kbd.html.vue"]]),d=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Type/Script/Kanata/MyScript/01.%20kanata.kbd.html","title":"kanata.kbd","lang":"zh-CN","frontmatter":{"create_time":"2024-12-31T00:00:00.000Z","Author":"LincZero","description":"kanata.kbd 这个文件是官方示例的脚本文件，我在这里会将他拆开成多段进行注释，但实际上他们属于同一个文件 （我是按顺序拆分分的，也没有省略段落，最多就是进行了一些注释中的翻译。这些脚本块拼起来就是原文件的内容） 文件介绍 注释 defcfg 配置键值对设 deflocalkeys 平台检测 defsrc、deflayer、deflayermap...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Type/Script/Kanata/MyScript/01.%20kanata.kbd.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"kanata.kbd"}],["meta",{"property":"og:description","content":"kanata.kbd 这个文件是官方示例的脚本文件，我在这里会将他拆开成多段进行注释，但实际上他们属于同一个文件 （我是按顺序拆分分的，也没有省略段落，最多就是进行了一些注释中的翻译。这些脚本块拼起来就是原文件的内容） 文件介绍 注释 defcfg 配置键值对设 deflocalkeys 平台检测 defsrc、deflayer、deflayermap..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"kanata.kbd\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"kanata.kbd","slug":"kanata-kbd","link":"#kanata-kbd","children":[{"level":2,"title":"文件介绍","slug":"文件介绍","link":"#文件介绍","children":[]},{"level":2,"title":"注释","slug":"注释","link":"#注释","children":[]},{"level":2,"title":"defcfg 配置键值对设","slug":"defcfg-配置键值对设","link":"#defcfg-配置键值对设","children":[]},{"level":2,"title":"deflocalkeys 平台检测","slug":"deflocalkeys-平台检测","link":"#deflocalkeys-平台检测","children":[]},{"level":2,"title":"defsrc、deflayer、deflayermap 层布局","slug":"defsrc、deflayer、deflayermap-层布局","link":"#defsrc、deflayer、deflayermap-层布局","children":[]},{"level":2,"title":"变量","slug":"变量","link":"#变量","children":[{"level":3,"title":"defvar 值变量","slug":"defvar-值变量","link":"#defvar-值变量","children":[]},{"level":3,"title":"defalias 按键变量/函数变量","slug":"defalias-按键变量-函数变量","link":"#defalias-按键变量-函数变量","children":[]},{"level":3,"title":"tap-timeout、hold-timeout、tap-hold 按住多少时间","slug":"tap-timeout、hold-timeout、tap-hold-按住多少时间","link":"#tap-timeout、hold-timeout、tap-hold-按住多少时间","children":[]},{"level":3,"title":"layer-switch、layer-toggle、layer-while-held 切换图层","slug":"layer-switch、layer-toggle、layer-while-held-切换图层","link":"#layer-switch、layer-toggle、layer-while-held-切换图层","children":[]}]},{"level":2,"title":"environment 环境变量判断","slug":"environment-环境变量判断","link":"#environment-环境变量判断","children":[]},{"level":2,"title":"defaliasenvcond","slug":"defaliasenvcond","link":"#defaliasenvcond","children":[]},{"level":2,"title":"defalias ^","slug":"defalias","link":"#defalias","children":[]},{"level":2,"title":"deflayer ^","slug":"deflayer","link":"#deflayer","children":[]},{"level":2,"title":"defvirtualkeys、deffakekeys 虚拟按键动作","slug":"defvirtualkeys、deffakekeys-虚拟按键动作","link":"#defvirtualkeys、deffakekeys-虚拟按键动作","children":[]},{"level":2,"title":"defseq vim风格的先导键","slug":"defseq-vim风格的先导键","link":"#defseq-vim风格的先导键","children":[]},{"level":2,"title":"defchords 输入拨弦","slug":"defchords-输入拨弦","link":"#defchords-输入拨弦","children":[]},{"level":2,"title":"deftemplate 模板","slug":"deftemplate-模板","link":"#deftemplate-模板","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":32.1,"words":9631},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Script/Kanata/MyScript/01. kanata.kbd.md","excerpt":"\\n<p>这个文件是官方示例的脚本文件，我在这里会将他拆开成多段进行注释，但实际上他们属于同一个文件</p>\\n<p>（我是按顺序拆分分的，也没有省略段落，最多就是进行了一些注释中的翻译。这些脚本块拼起来就是原文件的内容）</p>\\n<h2>文件介绍</h2>\\n<div class=\\"language-lisp\\" data-ext=\\"lisp\\" data-title=\\"lisp\\"><pre class=\\"language-lisp\\"><code>#|\\n这是一个示例配置文件，展示了kanata中的每个特性。\\n在这里可以找到一个更详细、更简洁的配置指南：\\n\\nhttps<span class=\\"token lisp-property property\\">://github</span>.com/jtroo/kanata/blob/main/docs/config.adoc\\n\\n其他配置示例如下：\\n\\nhttps<span class=\\"token lisp-property property\\">://github</span>.com/jtroo/kanata/tree/main/cfg_samples\\n\\n如果有什么令人困惑或难以发现的，请提交问题或贡献一个pull请求来帮助改进文档。\\n\\n因为这对你来说可能很重要，所以按住所有的同时按下以下三个键将导致kanata退出：\\n\\n左Ctrl，Space，Esc\\n\\n这是用于物理键输入，而不是在任何重新映射之后\\n这些都是卡纳塔做的。\\n|#\\n</code></pre></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Script/Kanata/MyScript/01. kanata.kbd.md","value":{"title":"01. kanata.kbd","path":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Script/Kanata/MyScript/01. kanata.kbd.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{p as comp,d as data};

import{_ as s,c as t,b as l,e as o,o as i,r as a}from"./app-BHdORQJ2.js";const r={};function c(p,e){const n=a("VueFlow");return i(),t("div",null,[l(n,{type:"nodeflow-comfyui",data:`---
create_time: 2024-03-20
Author: LincZero
---
# CMakePresets.json

参考：[Cmake封神之作：cmake-presets](https://blog.csdn.net/hashkitty/article/details/124747421)

## 简介

在使用 CMake 过程中，我们经常面临的一个问题是如何与其他人共享设置以获取配置项目的常用方法。这样做可以更好的支持 CI 构建，也可以使大多编译项目的人可以便捷的使用相同配置进行构建。 

CMake （译者注：v3.19以上版本）支持两个主要配置文件：

- CMakePresets.json
- CMakeUserPresets.json

区别与相似点

- 相同点：

  用来支持用户指定常用配置选项并与他人共享。CMake 还支持包含在 include 字段中的文件（译者注：比如一个 presets 可以 include 另一个 presets 文件，需要注意的是 CMakeUserPresets.json 隐式包含 CMakePresets.json，且禁止循环包含，具体查看下文文档）。

  CMakePresets.json 与 CMakeUserPresets.json 位于项目的根目录中。它们都具有完全相同的格式，并且都是可选的（尽管如果指定了 --preset 则二者至少必须存在一个）。 

- 区别：

  CMakePresets.json 旨在指定项目范围的构建细节，而 CMakeUserPresets.json 旨在让开发人员自定义他们自己的本地构建细节。

gitignore补充

- CMakePresets.json 可能会被检入版本控制系统（译者注：通常应该检入，这样CI可以使用默认配置，团队其他成员也一样）
- 而 CMakeUserPresets.json 不应被检入。例如，如果项目正在使用 Git，则可能会跟踪 CMakePresets.json，并且应将 CMakeUserPresets.json 添加到 .gitignore .

## 格式

这些文件是一个以对象为根的 JSON 文档：

- version：表示 JSON 模式版本的必需整数。支持的版本是\`1\`、\`2\`、\`3\`和\`4\`
- cmakeMinimumRequired：一个可选对象，表示构建此项目所需的最低 CMake 版本。该对象由以下字段组成：
  - \`major\`：表示主要版本的可选整数。
  - \`minor\`：表示次要版本的可选整数。
  - \`patch\`：表示补丁版本的可选整数。
- include：表示要包含的文件的可选字符串数组。如果文件名不是绝对的，则它们被认为是相对于当前文件的。\`4\`这在指定版本或更高版本的预设文件中是允许的。有关包含文件的约束的讨论，请参见[包含。](https://cmake.org/cmake/help/latest/manual/cmake-presets.7.html#includes)
- vendor：包含供应商特定信息的可选映射。CMake 不解释此字段的内容，除非它确实存在验证它是否是一个映射。但是，密钥应该是供应商特定的域名，后跟 - 分隔的\`/\`路径。例如，示例 IDE 1.0 可以使用\`example.com/ExampleIDE/1.0\`. 每个字段的值可以是供应商所需的任何值，但通常是地图。
- configurePresets：可选的[配置预设](https://cmake.org/cmake/help/latest/manual/cmake-presets.7.html#configure-preset)对象数组。\`1\`这在指定版本或更高版本的预设文件中是允许的。
- buildPresets：可选的[构建预设](https://cmake.org/cmake/help/latest/manual/cmake-presets.7.html#build-preset)对象数组。\`2\`这在指定版本或更高版本的预设文件中是允许
- testPresets：一个可选的[测试预设](https://cmake.org/cmake/help/latest/manual/cmake-presets.7.html#test-preset)对象数组。\`2\`这在指定版本或更高版本的预设文件中是允许的。

### 包括

CMakePresets.json并且CMakeUserPresets.json可以在文件版本及更高版本中包含具有该include字段的其他文件。4这些文件包含的文件也可以包含其他文件。如果CMakePresets.json和 CMakeUserPresets.json都存在，则在所有版本的格式中CMakeUserPresets.json 隐式包含CMakePresets.json，即使没有字段。include

如果预设文件包含从另一个文件中的预设继承的预设，则该文件必须直接或间接包含另一个文件。文件之间不允许包含循环。如果a.json包含 b.json，b.json则不能包含a.json。但是，同一文件或不同文件中可能会多次包含一个文件。

直接或间接包含的文件CMakePresets.json应保证由项目提供。CMakeUserPresets.json可能包括来自任何地方的文件。

### 配置预设

### 构建预设

### 测试预设

### 条件

### 宏扩展

## 架构

## 自动生成

我们通常可以图形化地来创建和修改 CMakePresets.json，手动修改其实是有点困难的

### CLion

\`CMakePresets.json\` 对应于CLion的页面是 \`设置 > 构建、执行、部署 > CMake\`

为了简化流程，我们通常需要以下两个操作

- 将该页面内容保存为 \`CMakePresets.json\`
- 该页面加载 \`CMakePresets.json\`

具体操作见CLion官网文档: https://www.jetbrains.com/help/clion/cmake-presets.html


### VS

## 为什么需要

不用这个文件的话，命令行得打一大堆选项，如：

\`\`\`bash
cmake -Bbuild_arm64_iphones -GXcode -DCMAKE_BUILD_TYPE=Release \\
	-DCONAN_PROFILE_BUILD=default \\
  	-DCONAN_PROFILE_HOST=$(pwd)/.profiles/ios-arm64-iphoneos \\
	-DCMAKE_SYSTEM_NAME=iOS \\
  	-DCMAKE_OSX_DEPLOYMENT_TARGET=9.0 \\
  	-DCMAKE_OSX_ARCHITECTURES=arm64 \\
	-DCMAKE_CXX_STANDARD=14 \\
  	-DBUILD_LANGUAGE_BRIDGE=OFF \\
  	-DCMAKE_C_FLAGS=-fembed-bitcode \\
  	-DCMAKE_CXX_FLAGS=-fembed-bitcode
`}),e[0]||(e[0]=o('<h2 id="默认值" tabindex="-1"><a class="header-anchor" href="#默认值"><span>默认值</span></a></h2><p><code>cmake --help</code> 可以查看，windows用户特别注意一下generators是vs还是ninja</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',3))])}const k=s(r,[["render",c],["__file","CMakePresets.json.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Develop/03.%20Tools/03.%20%E7%AE%A1%E7%90%86%E5%B1%82/03.%20%E5%A4%9A%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86/01.%20%E5%A4%9A%E6%96%87%E4%BB%B6%E6%9E%84%E5%BB%BA%E7%B3%BB%E7%BB%9F/CMakePresets.json.html","title":"CMakePresets.json","lang":"zh-CN","frontmatter":{"create_time":"2024-03-20T00:00:00.000Z","Author":"LincZero","description":"CMakePresets.json 参考：Cmake封神之作：cmake-presets 简介 在使用 CMake 过程中，我们经常面临的一个问题是如何与其他人共享设置以获取配置项目的常用方法。这样做可以更好的支持 CI 构建，也可以使大多编译项目的人可以便捷的使用相同配置进行构建。 CMake （译者注：v3.19以上版本）支持两个主要配置文件： C...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/01.%20DesignAndDevelop/Develop/03.%20Tools/03.%20%E7%AE%A1%E7%90%86%E5%B1%82/03.%20%E5%A4%9A%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86/01.%20%E5%A4%9A%E6%96%87%E4%BB%B6%E6%9E%84%E5%BB%BA%E7%B3%BB%E7%BB%9F/CMakePresets.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"CMakePresets.json"}],["meta",{"property":"og:description","content":"CMakePresets.json 参考：Cmake封神之作：cmake-presets 简介 在使用 CMake 过程中，我们经常面临的一个问题是如何与其他人共享设置以获取配置项目的常用方法。这样做可以更好的支持 CI 构建，也可以使大多编译项目的人可以便捷的使用相同配置进行构建。 CMake （译者注：v3.19以上版本）支持两个主要配置文件： C..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CMakePresets.json\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[{"level":1,"title":"CMakePresets.json","slug":"cmakepresets-json","link":"#cmakepresets-json","children":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"格式","slug":"格式","link":"#格式","children":[{"level":3,"title":"包括","slug":"包括","link":"#包括","children":[]},{"level":3,"title":"配置预设","slug":"配置预设","link":"#配置预设","children":[]},{"level":3,"title":"构建预设","slug":"构建预设","link":"#构建预设","children":[]},{"level":3,"title":"测试预设","slug":"测试预设","link":"#测试预设","children":[]},{"level":3,"title":"条件","slug":"条件","link":"#条件","children":[]},{"level":3,"title":"宏扩展","slug":"宏扩展","link":"#宏扩展","children":[]}]},{"level":2,"title":"架构","slug":"架构","link":"#架构","children":[]},{"level":2,"title":"自动生成","slug":"自动生成","link":"#自动生成","children":[{"level":3,"title":"CLion","slug":"clion","link":"#clion","children":[]},{"level":3,"title":"VS","slug":"vs","link":"#vs","children":[]}]},{"level":2,"title":"为什么需要","slug":"为什么需要","link":"#为什么需要","children":[]},{"level":2,"title":"默认值","slug":"默认值","link":"#默认值","children":[]}]}],"git":{},"readingTime":{"minutes":3.97,"words":1191},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Develop/03. Tools/03. 管理层/03. 多项目管理/01. 多文件构建系统/CMakePresets.json.md","excerpt":"\\n<p>参考：<a href=\\"https://blog.csdn.net/hashkitty/article/details/124747421\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Cmake封神之作：cmake-presets</a></p>\\n<h2>简介</h2>\\n<p>在使用 CMake 过程中，我们经常面临的一个问题是如何与其他人共享设置以获取配置项目的常用方法。这样做可以更好的支持 CI 构建，也可以使大多编译项目的人可以便捷的使用相同配置进行构建。</p>\\n<p>CMake （译者注：v3.19以上版本）支持两个主要配置文件：</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[{"title":"How to build cpp","link":"MdNote_Public/01. DesignAndDevelop/Develop/03. Tools/02. 开发层/Build Tools/How to build cpp.html"}],"localMap":{"nodes":[{"id":"MdNote_Public/01. DesignAndDevelop/Develop/03. Tools/03. 管理层/03. 多项目管理/01. 多文件构建系统/CMakePresets.json.md","value":{"title":"CMakePresets.json","path":"MdNote_Public/01. DesignAndDevelop/Develop/03. Tools/03. 管理层/03. 多项目管理/01. 多文件构建系统/CMakePresets.json.md","outlink":[],"backlink":["MdNote_Public/01. DesignAndDevelop/Develop/03. Tools/02. 开发层/Build Tools/How to build cpp.md"]}},{"id":"MdNote_Public/01. DesignAndDevelop/Develop/03. Tools/02. 开发层/Build Tools/How to build cpp.md","value":{"title":"How to build cpp","path":"MdNote_Public/01. DesignAndDevelop/Develop/03. Tools/02. 开发层/Build Tools/How to build cpp.md","outlink":[],"backlink":[]}}],"links":[{"source":"MdNote_Public/01. DesignAndDevelop/Develop/03. Tools/02. 开发层/Build Tools/How to build cpp.md","target":"MdNote_Public/01. DesignAndDevelop/Develop/03. Tools/03. 管理层/03. 多项目管理/01. 多文件构建系统/CMakePresets.json.md"}]}}}');export{k as comp,m as data};

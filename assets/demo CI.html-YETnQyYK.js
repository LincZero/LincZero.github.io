import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-D9NcyM5y.js";const e={},p=t(`<p>目录：</p><ul><li>Linux-gcc-4.8</li><li>Linux-gcc (5-13)</li><li>MacOS</li><li>Win-MSVC</li><li>Win-MinGW</li><li>Win-ClangCl</li><li>Android</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> CI

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths-ignore</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;**.md&#39;</span>

  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths-ignore</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;**.md&#39;</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build-linux-gcc48</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> Linux<span class="token punctuation">-</span>gcc<span class="token punctuation">-</span><span class="token number">4.8</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">container</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">:</span><span class="token number">16.04</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependency
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          apt update
          apt install -y gcc-4.8 g++-4.8 make</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Get latest CMake and Ninja
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> lukka/get<span class="token punctuation">-</span>cmake@latest

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> CMake
        <span class="token key atrule">run</span><span class="token punctuation">:</span> cmake <span class="token punctuation">-</span>S . <span class="token punctuation">-</span>B build <span class="token punctuation">-</span>DCMAKE_BUILD_TYPE=Release <span class="token punctuation">-</span>DCMAKE_C_COMPILER=gcc<span class="token punctuation">-</span>4.8 <span class="token punctuation">-</span>DCMAKE_CXX_COMPILER=g++<span class="token punctuation">-</span><span class="token number">4.8</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build
        <span class="token key atrule">run</span><span class="token punctuation">:</span> cmake <span class="token punctuation">-</span><span class="token punctuation">-</span>build build <span class="token punctuation">-</span><span class="token punctuation">-</span>target recorder <span class="token punctuation">-</span><span class="token punctuation">-</span>parallel 10

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Upload
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/upload<span class="token punctuation">-</span>artifact@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> recorder_linux_gcc48
          <span class="token key atrule">path</span><span class="token punctuation">:</span> build/recorder

  <span class="token key atrule">build-linux</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> Linux<span class="token punctuation">-</span>gcc
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">strategy</span><span class="token punctuation">:</span>
      <span class="token key atrule">matrix</span><span class="token punctuation">:</span>
        <span class="token key atrule">compiler</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;6&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;7&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;8&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;11&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;12&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;13&#39;</span> <span class="token punctuation">]</span>
    <span class="token key atrule">container</span><span class="token punctuation">:</span> gcc<span class="token punctuation">:</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.compiler <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Get latest CMake and Ninja
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> lukka/get<span class="token punctuation">-</span>cmake@latest

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> CMake
        <span class="token key atrule">run</span><span class="token punctuation">:</span> cmake <span class="token punctuation">-</span>S . <span class="token punctuation">-</span>B build <span class="token punctuation">-</span>DCMAKE_BUILD_TYPE=Release

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build
        <span class="token key atrule">run</span><span class="token punctuation">:</span> cmake <span class="token punctuation">-</span><span class="token punctuation">-</span>build build <span class="token punctuation">-</span><span class="token punctuation">-</span>target recorder <span class="token punctuation">-</span><span class="token punctuation">-</span>parallel 10

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Upload
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/upload<span class="token punctuation">-</span>artifact@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> recorder_linux_gcc$<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.compiler <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> build/recorder

  <span class="token key atrule">build-macos</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> MacOS
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> macos<span class="token punctuation">-</span><span class="token number">11</span>
    <span class="token key atrule">strategy</span><span class="token punctuation">:</span>
      <span class="token key atrule">matrix</span><span class="token punctuation">:</span>
        <span class="token key atrule">arch</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;arm64&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;x86_64&#39;</span> <span class="token punctuation">]</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cmake
        <span class="token key atrule">run</span><span class="token punctuation">:</span> cmake <span class="token punctuation">-</span>S . <span class="token punctuation">-</span>B build <span class="token punctuation">-</span>DCMAKE_BUILD_TYPE=Release <span class="token punctuation">-</span>DCMAKE_OSX_ARCHITECTURES=&quot;$<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.arch <span class="token punctuation">}</span><span class="token punctuation">}</span>&quot; <span class="token punctuation">-</span>DCMAKE_OSX_DEPLOYMENT_TARGET=10.12

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build
        <span class="token key atrule">run</span><span class="token punctuation">:</span> cmake <span class="token punctuation">-</span><span class="token punctuation">-</span>build build <span class="token punctuation">-</span><span class="token punctuation">-</span>target recorder <span class="token punctuation">-</span><span class="token punctuation">-</span>parallel 10

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Upload
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/upload<span class="token punctuation">-</span>artifact@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> recorder_mac_$<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.arch <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> build/recorder

  <span class="token key atrule">build-windows-msvc</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> Win<span class="token punctuation">-</span>MSVC
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> windows<span class="token punctuation">-</span><span class="token number">2022</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cmake
        <span class="token key atrule">run</span><span class="token punctuation">:</span> cmake <span class="token punctuation">-</span>S . <span class="token punctuation">-</span>B build <span class="token punctuation">-</span>DCMAKE_BUILD_TYPE=Release <span class="token punctuation">-</span>G &quot;Visual Studio 17 2022&quot; <span class="token punctuation">-</span>A x64

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build
        <span class="token key atrule">run</span><span class="token punctuation">:</span> cmake <span class="token punctuation">-</span><span class="token punctuation">-</span>build build <span class="token punctuation">-</span><span class="token punctuation">-</span>target recorder <span class="token punctuation">-</span><span class="token punctuation">-</span>parallel 10

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Upload
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/upload<span class="token punctuation">-</span>artifact@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> recorder_win_msvc
          <span class="token key atrule">path</span><span class="token punctuation">:</span> build/Debug/recorder.exe

  <span class="token key atrule">build-windows-mingw</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> Win<span class="token punctuation">-</span>MinGW
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> windows<span class="token punctuation">-</span><span class="token number">2019</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Set up MinGW
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> egor<span class="token punctuation">-</span>tensin/setup<span class="token punctuation">-</span>mingw@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">platform</span><span class="token punctuation">:</span> x64

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> CMake
        <span class="token key atrule">run</span><span class="token punctuation">:</span> cmake <span class="token punctuation">-</span>S . <span class="token punctuation">-</span>B build <span class="token punctuation">-</span>G &quot;MinGW Makefiles&quot; <span class="token punctuation">-</span>DCMAKE_BUILD_TYPE=Release

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build
        <span class="token key atrule">run</span><span class="token punctuation">:</span> cmake <span class="token punctuation">-</span><span class="token punctuation">-</span>build build <span class="token punctuation">-</span><span class="token punctuation">-</span>target recorder <span class="token punctuation">-</span><span class="token punctuation">-</span>parallel 10

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Upload
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/upload<span class="token punctuation">-</span>artifact@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> recorder_win_mingw
          <span class="token key atrule">path</span><span class="token punctuation">:</span> build/recorder.exe

  <span class="token key atrule">build-windows-clang-cl</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> Win<span class="token punctuation">-</span>ClangCl
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> windows<span class="token punctuation">-</span><span class="token number">2019</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cmake
        <span class="token key atrule">run</span><span class="token punctuation">:</span> cmake <span class="token punctuation">-</span>S . <span class="token punctuation">-</span>B build <span class="token punctuation">-</span>DCMAKE_BUILD_TYPE=Release <span class="token punctuation">-</span>G &quot;Visual Studio 16 2019&quot; <span class="token punctuation">-</span>A x64 <span class="token punctuation">-</span>T ClangCL

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build
        <span class="token key atrule">run</span><span class="token punctuation">:</span> cmake <span class="token punctuation">-</span><span class="token punctuation">-</span>build build <span class="token punctuation">-</span><span class="token punctuation">-</span>target recorder <span class="token punctuation">-</span><span class="token punctuation">-</span>parallel 10

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Upload
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/upload<span class="token punctuation">-</span>artifact@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> recorder_win_clang_cl
          <span class="token key atrule">path</span><span class="token punctuation">:</span> build/Debug/recorder.exe

  <span class="token key atrule">build-android</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> Android
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">strategy</span><span class="token punctuation">:</span>
      <span class="token key atrule">matrix</span><span class="token punctuation">:</span>
        <span class="token key atrule">arch</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;arm64-v8a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;x86_64&#39;</span> <span class="token punctuation">]</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Get latest CMake and Ninja
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> lukka/get<span class="token punctuation">-</span>cmake@latest

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Set up JDK 1.8
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>java@v1
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">java-version</span><span class="token punctuation">:</span> <span class="token number">1.8</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Set up Android NDK
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> nttld/setup<span class="token punctuation">-</span>ndk@v1
        <span class="token key atrule">id</span><span class="token punctuation">:</span> setup<span class="token punctuation">-</span>ndk
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">ndk-version</span><span class="token punctuation">:</span> r25c

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> CMake
        <span class="token key atrule">run</span><span class="token punctuation">:</span> cmake <span class="token punctuation">-</span>S . <span class="token punctuation">-</span>B build <span class="token punctuation">-</span>DCMAKE_BUILD_TYPE=Release <span class="token punctuation">-</span>DANDROID_ABI=$<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.arch <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">-</span>DCMAKE_TOOLCHAIN_FILE=$<span class="token punctuation">{</span><span class="token punctuation">{</span> steps.setup<span class="token punctuation">-</span>ndk.outputs.ndk<span class="token punctuation">-</span>path <span class="token punctuation">}</span><span class="token punctuation">}</span>/build/cmake/android.toolchain.cmake

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build
        <span class="token key atrule">run</span><span class="token punctuation">:</span> cmake <span class="token punctuation">-</span><span class="token punctuation">-</span>build build <span class="token punctuation">-</span><span class="token punctuation">-</span>target recorder <span class="token punctuation">-</span><span class="token punctuation">-</span>parallel 10

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Upload
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/upload<span class="token punctuation">-</span>artifact@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> recorder_android_$<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.arch <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> build/recorder

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[p];function l(u,i){return s(),a("div",null,c)}const r=n(e,[["render",l],["__file","demo CI.html.vue"]]),d=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/04.%20%E9%83%A8%E7%BD%B2%E7%AE%A1%E7%90%86/CICD/Github%20Action/demo%20CI.html","title":"","lang":"zh-CN","frontmatter":{"description":"目录： Linux-gcc-4.8 Linux-gcc (5-13) MacOS Win-MSVC Win-MinGW Win-ClangCl Android","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/04.%20%E9%83%A8%E7%BD%B2%E7%AE%A1%E7%90%86/CICD/Github%20Action/demo%20CI.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"目录： Linux-gcc-4.8 Linux-gcc (5-13) MacOS Win-MSVC Win-MinGW Win-ClangCl Android"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.63,"words":489},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/03. Tools/02. 管理层/04. 部署管理/CICD/Github Action/demo CI.md","autoDesc":true}');export{r as comp,d as data};

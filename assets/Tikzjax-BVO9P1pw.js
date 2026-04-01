import{a as e,c as t,f as n,h as r,m as i,p as a,u as o}from"./app-CqkIv9Ix.js";var s=JSON.parse(`{"path":"/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Type/Doc/MarkdwonAbout/02.%20Parse%20and%20Render/%E6%96%87%E5%AD%97%E6%8F%8F%E8%BF%B0%E5%9B%BE%E8%A1%A8/Tikzjax.html","title":"Tikzjax","lang":"zh-CN","frontmatter":{"create_date":"2025-03-01T00:00:00.000Z","last_date":"2025-10-07T00:00:00.000Z","description":"Tikzjax 参考： https://github.com/Hansimov/pgfmanual-zh 中文手册 官方demo 函数图 - 平面折线 函数图 - 三维 电路图 结构图 - 立方 结构图 - 平面化学键 结构图 - 球形","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Tikzjax\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Type/Doc/MarkdwonAbout/02.%20Parse%20and%20Render/%E6%96%87%E5%AD%97%E6%8F%8F%E8%BF%B0%E5%9B%BE%E8%A1%A8/Tikzjax.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Tikzjax"}],["meta",{"property":"og:description","content":"Tikzjax 参考： https://github.com/Hansimov/pgfmanual-zh 中文手册 官方demo 函数图 - 平面折线 函数图 - 三维 电路图 结构图 - 立方 结构图 - 平面化学键 结构图 - 球形"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]]},"git":{},"readingTime":{"minutes":1.46,"words":439},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Doc/MarkdwonAbout/02. Parse and Render/文字描述图表/Tikzjax.md","excerpt":"\\n<p>参考：</p>\\n<ul>\\n<li><a href=\\"https://github.com/Hansimov/pgfmanual-zh\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/Hansimov/pgfmanual-zh</a> 中文手册</li>\\n</ul>\\n<h2>官方demo</h2>\\n<h3>函数图 - 平面折线</h3>\\n<h3>函数图 - 三维</h3>\\n<h3>电路图</h3>\\n<h3>结构图 - 立方</h3>\\n<h3>结构图 - 平面化学键</h3>\\n<h3>结构图 - 球形</h3>\\n","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Doc/MarkdwonAbout/02. Parse and Render/文字描述图表/Tikzjax.md","value":{"title":"Tikzjax","path":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Doc/MarkdwonAbout/02. Parse and Render/文字描述图表/Tikzjax.md","outlink":[],"backlink":[]}}],"links":[]}}}`),c={name:`Tikzjax.md`};function l(e,s,c,l,u,d){let f=r(`Tikz`);return i(),o(`div`,null,[s[0]||=t(`h1`,{id:`tikzjax`,tabindex:`-1`},`Tikzjax`,-1),s[1]||=t(`p`,null,`参考：`,-1),s[2]||=t(`ul`,null,[t(`li`,null,[t(`a`,{href:`https://github.com/Hansimov/pgfmanual-zh`,target:`_blank`,rel:`noopener noreferrer`},`https://github.com/Hansimov/pgfmanual-zh`),n(` 中文手册`)])],-1),s[3]||=t(`h2`,{id:`官方demo`,tabindex:`-1`},`官方demo`,-1),s[4]||=t(`h3`,{id:`函数图-平面折线`,tabindex:`-1`},`函数图 - 平面折线`,-1),a(f,{data:`\\begin{document}
  \\begin{tikzpicture}[domain=0:4]
    %%背景网格 + x,y 轴
    \\draw[very thin,color=gray] (-0.1,-1.1) grid (3.9,3.9);
    \\draw[->] (-0.2,0) -- (4.2,0) node[right] {$x$};
    \\draw[->] (0,-1.2) -- (0,4.2) node[above] {$f(x)$};
    %% 三条函数先
    \\draw[color=red]    plot (\\x,\\x)             node[right] {$f(x) =x$};
    \\draw[color=blue]   plot (\\x,{sin(\\x r)})    node[right] {$f(x) = \\sin x$};
    \\draw[color=orange] plot (\\x,{0.05*exp(\\x)}) node[right] {$f(x) = \\frac{1}{20} \\mathrm e^x$};
  \\end{tikzpicture}
\\end{document}
`}),s[5]||=t(`h3`,{id:`函数图-三维`,tabindex:`-1`},`函数图 - 三维`,-1),a(f,{data:`\\usepackage{pgfplots}
\\pgfplotsset{compat=1.16}

\\begin{document}
  \\begin{tikzpicture}
    \\begin{axis}[colormap/viridis]
      \\addplot3[
      	surf,
      	samples=18,
      	domain=-3:3
      ]
      {exp(-x^2-y^2)*x};
    \\end{axis}
  \\end{tikzpicture}
\\end{document}
`}),s[6]||=t(`h3`,{id:`电路图`,tabindex:`-1`},`电路图`,-1),a(f,{data:`\\usepackage{circuitikz}
\\begin{document}
\\begin{circuitikz}[american, voltage shift=0.5]
\\draw (0,0)
to[isource, l=$I_0$, v=$V_0$] (0,3)
to[short, -*, i=$I_0$] (2,3)
to[R=$R_1$, i>_=$i_1$] (2,0) -- (0,0);
\\draw (2,3) -- (4,3)
to[R=$R_2$, i>_=$i_2$]
(4,0) to[short, -*] (2,0);
\\end{circuitikz}
\\end{document}
`}),s[7]||=t(`h3`,{id:`结构图-立方`,tabindex:`-1`},`结构图 - 立方`,-1),a(f,{data:`\\usepackage{tikz-cd}

\\begin{document}
\\begin{tikzcd}

\xA0 \xA0 T
\xA0 \xA0 \\arrow[drr, bend left, "x"]
\xA0 \xA0 \\arrow[ddr, bend right, "y"]
\xA0 \xA0 \\arrow[dr, dotted, "{(x,y)}" description] & & \\\\
\xA0 \xA0 K & X \\times_Z Y \\arrow[r, "p"] \\arrow[d, "q"]
\xA0 \xA0 & X \\arrow[d, "f"] \\\\
\xA0 \xA0 & Y \\arrow[r, "g"]
\xA0 \xA0 & Z

\\end{tikzcd}

\\quad \\quad

\\begin{tikzcd}[row sep=2.5em]

A' \\arrow[rr,"f'"] \\arrow[dr,swap,"a"] \\arrow[dd,swap,"g'"] &&
\xA0 B' \\arrow[dd,swap,"h'" near start] \\arrow[dr,"b"] \\\\
& A \\arrow[rr,crossing over,"f" near start] &&
\xA0 B \\arrow[dd,"h"] \\\\
C' \\arrow[rr,"k'" near end] \\arrow[dr,swap,"c"] && D' \\arrow[dr,swap,"d"] \\\\
& C \\arrow[rr,"k"] \\arrow[uu,<-,crossing over,"g" near end]&& D

\\end{tikzcd}

\\end{document}
`}),s[8]||=t(`h3`,{id:`结构图-平面化学键`,tabindex:`-1`},`结构图 - 平面化学键`,-1),a(f,{data:`\\usepackage{chemfig}
\\begin{document}

\\chemfig{[:-90]HN(-[::-45](-[::-45]R)=[::+45]O)>[::+45]*4(-(=O)-N*5(-(<:(=[::-60]O)-[::+60]OH)-(<[::+0])(<:[::-108])-S>)--)}

\\end{document}
`}),s[9]||=t(`h3`,{id:`结构图-球形`,tabindex:`-1`},`结构图 - 球形`,-1),a(f,{data:`\\usepackage{chemfig}
\\begin{document}

\\definesubmol\\fragment1{

\xA0 \xA0 (-[:#1,0.85,,,draw=none]
\xA0 \xA0 -[::126]-[::-54](=_#(2pt,2pt)[::180])
\xA0 \xA0 -[::-70](-[::-56.2,1.07]=^#(2pt,2pt)[::180,1.07])
\xA0 \xA0 -[::110,0.6](-[::-148,0.60](=^[::180,0.35])-[::-18,1.1])
\xA0 \xA0 -[::50,1.1](-[::18,0.60]=_[::180,0.35])
\xA0 \xA0 -[::50,0.6]
\xA0 \xA0 -[::110])
\xA0 \xA0 }

\\chemfig{
!\\fragment{18}
!\\fragment{90}
!\\fragment{162}
!\\fragment{234}
!\\fragment{306}
}

\\end{document}
`})])}var u=e(c,[[`render`,l]]);export{s as _pageData,u as default};
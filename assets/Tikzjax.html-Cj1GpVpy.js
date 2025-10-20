import{_ as o,c as a,a as e,d as r,e as i,r as d,o as p}from"./app-CTBhHB3T.js";const s={};function l(m,n){const t=d("Tikz");return p(),a("div",null,[n[0]||(n[0]=e("h1",{id:"tikzjax",tabindex:"-1"},"Tikzjax",-1)),n[1]||(n[1]=e("p",null,"参考：",-1)),n[2]||(n[2]=e("ul",null,[e("li",null,[e("a",{href:"https://github.com/Hansimov/pgfmanual-zh",target:"_blank",rel:"noopener noreferrer"},"https://github.com/Hansimov/pgfmanual-zh"),i(" 中文手册")])],-1)),n[3]||(n[3]=e("h2",{id:"官方demo",tabindex:"-1"},"官方demo",-1)),n[4]||(n[4]=e("h3",{id:"函数图-平面折线",tabindex:"-1"},"函数图 - 平面折线",-1)),r(t,{data:`\\begin{document}
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
`}),n[5]||(n[5]=e("h3",{id:"函数图-三维",tabindex:"-1"},"函数图 - 三维",-1)),r(t,{data:`\\usepackage{pgfplots}
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
`}),n[6]||(n[6]=e("h3",{id:"电路图",tabindex:"-1"},"电路图",-1)),r(t,{data:`\\usepackage{circuitikz}
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
`}),n[7]||(n[7]=e("h3",{id:"结构图-立方",tabindex:"-1"},"结构图 - 立方",-1)),r(t,{data:`\\usepackage{tikz-cd}

\\begin{document}
\\begin{tikzcd}

    T
    \\arrow[drr, bend left, "x"]
    \\arrow[ddr, bend right, "y"]
    \\arrow[dr, dotted, "{(x,y)}" description] & & \\\\
    K & X \\times_Z Y \\arrow[r, "p"] \\arrow[d, "q"]
    & X \\arrow[d, "f"] \\\\
    & Y \\arrow[r, "g"]
    & Z

\\end{tikzcd}

\\quad \\quad

\\begin{tikzcd}[row sep=2.5em]

A' \\arrow[rr,"f'"] \\arrow[dr,swap,"a"] \\arrow[dd,swap,"g'"] &&
  B' \\arrow[dd,swap,"h'" near start] \\arrow[dr,"b"] \\\\
& A \\arrow[rr,crossing over,"f" near start] &&
  B \\arrow[dd,"h"] \\\\
C' \\arrow[rr,"k'" near end] \\arrow[dr,swap,"c"] && D' \\arrow[dr,swap,"d"] \\\\
& C \\arrow[rr,"k"] \\arrow[uu,<-,crossing over,"g" near end]&& D

\\end{tikzcd}

\\end{document}
`}),n[8]||(n[8]=e("h3",{id:"结构图-平面化学键",tabindex:"-1"},"结构图 - 平面化学键",-1)),r(t,{data:`\\usepackage{chemfig}
\\begin{document}

\\chemfig{[:-90]HN(-[::-45](-[::-45]R)=[::+45]O)>[::+45]*4(-(=O)-N*5(-(<:(=[::-60]O)-[::+60]OH)-(<[::+0])(<:[::-108])-S>)--)}

\\end{document}
`}),n[9]||(n[9]=e("h3",{id:"结构图-球形",tabindex:"-1"},"结构图 - 球形",-1)),r(t,{data:`\\usepackage{chemfig}
\\begin{document}

\\definesubmol\\fragment1{

    (-[:#1,0.85,,,draw=none]
    -[::126]-[::-54](=_#(2pt,2pt)[::180])
    -[::-70](-[::-56.2,1.07]=^#(2pt,2pt)[::180,1.07])
    -[::110,0.6](-[::-148,0.60](=^[::180,0.35])-[::-18,1.1])
    -[::50,1.1](-[::18,0.60]=_[::180,0.35])
    -[::50,0.6]
    -[::110])
    }

\\chemfig{
!\\fragment{18}
!\\fragment{90}
!\\fragment{162}
!\\fragment{234}
!\\fragment{306}
}

\\end{document}
`})])}const c=o(s,[["render",l]]),u=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Type/Doc/MarkdwonAbout/02.%20Parse%20and%20Render/%E6%96%87%E5%AD%97%E6%8F%8F%E8%BF%B0%E5%9B%BE%E8%A1%A8/Tikzjax.html","title":"Tikzjax","lang":"zh-CN","frontmatter":{"create_date":"2025-03-01T00:00:00.000Z","last_date":"2025-10-07T00:00:00.000Z","description":"Tikzjax 参考： https://github.com/Hansimov/pgfmanual-zh 中文手册 官方demo 函数图 - 平面折线","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Tikzjax\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/01.%20DesignAndDevelop/Develop/04.%20Project/Type/Doc/MarkdwonAbout/02.%20Parse%20and%20Render/%E6%96%87%E5%AD%97%E6%8F%8F%E8%BF%B0%E5%9B%BE%E8%A1%A8/Tikzjax.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Tikzjax"}],["meta",{"property":"og:description","content":"Tikzjax 参考： https://github.com/Hansimov/pgfmanual-zh 中文手册 官方demo 函数图 - 平面折线"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]]},"git":{},"readingTime":{"minutes":1.46,"words":439},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Doc/MarkdwonAbout/02. Parse and Render/文字描述图表/Tikzjax.md","excerpt":"\\n<p>参考：</p>\\n<ul>\\n<li><a href=\\"https://github.com/Hansimov/pgfmanual-zh\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/Hansimov/pgfmanual-zh</a> 中文手册</li>\\n</ul>\\n<h2>官方demo</h2>\\n<h3>函数图 - 平面折线</h3>\\n","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Doc/MarkdwonAbout/02. Parse and Render/文字描述图表/Tikzjax.md","value":{"title":"Tikzjax","path":"MdNote_Public/01. DesignAndDevelop/Develop/04. Project/Type/Doc/MarkdwonAbout/02. Parse and Render/文字描述图表/Tikzjax.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{c as comp,u as data};

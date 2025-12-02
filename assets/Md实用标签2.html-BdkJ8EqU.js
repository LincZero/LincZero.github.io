import{_ as n,c as o,b as r,a as t,e,o as s}from"./app-U6aqFarS.js";const i="/assets/9896b250-1ce3-45cf-80e6-de3dc71b857d-I0uro-MK.png",a="/assets/Pasted%20image%2020251027142456-DjFR_PW3.png",d="/assets/14e32cdecd0a515019446c0250b95f4f-DWNj87qO.png",_={};function f(c,l){return s(),o("div",null,[...l[0]||(l[0]=[r('<h1 id="md实用标签2" tabindex="-1">Md实用标签2</h1><h2 id="致歉" tabindex="-1">致歉</h2><p>这里是对之前同系列文章的一个补充</p><p>在22年我发布过一篇 《Markdown实用的Html标签》 的文章。而现在看来，尽管我对各个平台的兼容性都做了一些兼容性测试、并绘制了兼容性表格。但当时的我对这方面的见解不够成熟、部分内容不够严谨。在此向之前被误导的读者道歉。</p><p>主要是 center、font、big、s 等标签的使用。我当初的 “是否建议” 使用的的说法存在一些问题。</p><p><img src="'+i+'" alt="" loading="lazy"></p><h2 id="过时标签问题" tabindex="-1">过时标签问题</h2><p>其实从我当初的兼容性测试，已经可以看到一些端倪。如一些平台不支持center标签。我当时只认为是安全性考虑禁用掉部分标签。</p><p>而真实原因是，在HTML5中，部分标签其实是被废弃掉了。只是一些平台依然向下兼容。<br> 对于这部分标签，我们最好是不要去用的！在某些平台无法被支持。<br> 如我之前测试的中不生效的博客平台，又如vuepress等文本编译系统遇到这些标签会直接报错。</p><p>这里列举一些过时标签和替代标签： (<a href="https://blog.csdn.net/guojunwu1977/article/details/133301827" target="_blank" rel="noopener noreferrer">参考文章</a>)</p>',10),t("div",{class:"ab-note drop-shadow"},[t("div",{class:"ab-list-table-parent ab-listtable-likelist"},[t("table",{class:"ab-table ab-list-table"},[t("tbody",null,[t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"`<applet>` "},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
            const l_tr = tr.parentNode.querySelectorAll("tr")
            const i = 0
            
            const tr_level = Number(tr.getAttribute("tr_level"))
            if (isNaN(tr_level)) return
            const tr_isfold = tr.getAttribute("is_fold")
            if (!tr_isfold) return
            let flag_do_fold = false  // 防止折叠最小层
            for (let j=i+1; j<l_tr.length; j++){
              const tr2 = l_tr[j]
              const tr_level2 = Number(tr2.getAttribute("tr_level"))
              if (isNaN(tr_level2)) break
              if (tr_level2 <= tr_level) break // 影响所有后代级
              // if (tr_level2 != tr_level+1) break // 影响下一级的 (话说这里可能有列表规范性问题?)
              (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
              flag_do_fold = true
            }
            if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("code",null,"<applet>")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[e("用于指定Java applet，已被 "),t("code",null,"<object>"),e(" 标签替代。")])])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"`<basefont>` "},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
            const l_tr = tr.parentNode.querySelectorAll("tr")
            const i = 1
            
            const tr_level = Number(tr.getAttribute("tr_level"))
            if (isNaN(tr_level)) return
            const tr_isfold = tr.getAttribute("is_fold")
            if (!tr_isfold) return
            let flag_do_fold = false  // 防止折叠最小层
            for (let j=i+1; j<l_tr.length; j++){
              const tr2 = l_tr[j]
              const tr_level2 = Number(tr2.getAttribute("tr_level"))
              if (isNaN(tr_level2)) break
              if (tr_level2 <= tr_level) break // 影响所有后代级
              // if (tr_level2 != tr_level+1) break // 影响下一级的 (话说这里可能有列表规范性问题?)
              (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
              flag_do_fold = true
            }
            if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("code",null,"<basefont>")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"用于指定基准字体大小，已被CSS的font-size属性替代。")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"`<bgsound>` "},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
            const l_tr = tr.parentNode.querySelectorAll("tr")
            const i = 2
            
            const tr_level = Number(tr.getAttribute("tr_level"))
            if (isNaN(tr_level)) return
            const tr_isfold = tr.getAttribute("is_fold")
            if (!tr_isfold) return
            let flag_do_fold = false  // 防止折叠最小层
            for (let j=i+1; j<l_tr.length; j++){
              const tr2 = l_tr[j]
              const tr_level2 = Number(tr2.getAttribute("tr_level"))
              if (isNaN(tr_level2)) break
              if (tr_level2 <= tr_level) break // 影响所有后代级
              // if (tr_level2 != tr_level+1) break // 影响下一级的 (话说这里可能有列表规范性问题?)
              (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
              flag_do_fold = true
            }
            if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("code",null,"<bgsound>")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[e("用于指定背景音乐，只有IE支持，已被 "),t("code",null,"<audio>"),e(" 标签替代。")])])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"`<big>` "},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
            const l_tr = tr.parentNode.querySelectorAll("tr")
            const i = 3
            
            const tr_level = Number(tr.getAttribute("tr_level"))
            if (isNaN(tr_level)) return
            const tr_isfold = tr.getAttribute("is_fold")
            if (!tr_isfold) return
            let flag_do_fold = false  // 防止折叠最小层
            for (let j=i+1; j<l_tr.length; j++){
              const tr2 = l_tr[j]
              const tr_level2 = Number(tr2.getAttribute("tr_level"))
              if (isNaN(tr_level2)) break
              if (tr_level2 <= tr_level) break // 影响所有后代级
              // if (tr_level2 != tr_level+1) break // 影响下一级的 (话说这里可能有列表规范性问题?)
              (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
              flag_do_fold = true
            }
            if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("code",null,"<big>")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"用于加大字体，已被CSS的font-size属性替代。")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"`<blink>` "},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
            const l_tr = tr.parentNode.querySelectorAll("tr")
            const i = 4
            
            const tr_level = Number(tr.getAttribute("tr_level"))
            if (isNaN(tr_level)) return
            const tr_isfold = tr.getAttribute("is_fold")
            if (!tr_isfold) return
            let flag_do_fold = false  // 防止折叠最小层
            for (let j=i+1; j<l_tr.length; j++){
              const tr2 = l_tr[j]
              const tr_level2 = Number(tr2.getAttribute("tr_level"))
              if (isNaN(tr_level2)) break
              if (tr_level2 <= tr_level) break // 影响所有后代级
              // if (tr_level2 != tr_level+1) break // 影响下一级的 (话说这里可能有列表规范性问题?)
              (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
              flag_do_fold = true
            }
            if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("code",null,"<blink>")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"用于实现文本闪烁效果，已被CSS的text-decoration: blink;属性替代。")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"`<center>` "},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
            const l_tr = tr.parentNode.querySelectorAll("tr")
            const i = 5
            
            const tr_level = Number(tr.getAttribute("tr_level"))
            if (isNaN(tr_level)) return
            const tr_isfold = tr.getAttribute("is_fold")
            if (!tr_isfold) return
            let flag_do_fold = false  // 防止折叠最小层
            for (let j=i+1; j<l_tr.length; j++){
              const tr2 = l_tr[j]
              const tr_level2 = Number(tr2.getAttribute("tr_level"))
              if (isNaN(tr_level2)) break
              if (tr_level2 <= tr_level) break // 影响所有后代级
              // if (tr_level2 != tr_level+1) break // 影响下一级的 (话说这里可能有列表规范性问题?)
              (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
              flag_do_fold = true
            }
            if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("code",null,"<center>")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"用于指定居中文本，已被CSS的text-align: center;属性替代。")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"`<dir>` "},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
            const l_tr = tr.parentNode.querySelectorAll("tr")
            const i = 6
            
            const tr_level = Number(tr.getAttribute("tr_level"))
            if (isNaN(tr_level)) return
            const tr_isfold = tr.getAttribute("is_fold")
            if (!tr_isfold) return
            let flag_do_fold = false  // 防止折叠最小层
            for (let j=i+1; j<l_tr.length; j++){
              const tr2 = l_tr[j]
              const tr_level2 = Number(tr2.getAttribute("tr_level"))
              if (isNaN(tr_level2)) break
              if (tr_level2 <= tr_level) break // 影响所有后代级
              // if (tr_level2 != tr_level+1) break // 影响下一级的 (话说这里可能有列表规范性问题?)
              (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
              flag_do_fold = true
            }
            if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("code",null,"<dir>")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[e("用于指定目录列表，已被 "),t("code",null,"<ul>"),e(" 标签替代。")])])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"`<embed>` "},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
            const l_tr = tr.parentNode.querySelectorAll("tr")
            const i = 7
            
            const tr_level = Number(tr.getAttribute("tr_level"))
            if (isNaN(tr_level)) return
            const tr_isfold = tr.getAttribute("is_fold")
            if (!tr_isfold) return
            let flag_do_fold = false  // 防止折叠最小层
            for (let j=i+1; j<l_tr.length; j++){
              const tr2 = l_tr[j]
              const tr_level2 = Number(tr2.getAttribute("tr_level"))
              if (isNaN(tr_level2)) break
              if (tr_level2 <= tr_level) break // 影响所有后代级
              // if (tr_level2 != tr_level+1) break // 影响下一级的 (话说这里可能有列表规范性问题?)
              (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
              flag_do_fold = true
            }
            if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("code",null,"<embed>")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[e("用于在文档中嵌入应用程序，已被 "),t("code",null,"<object>"),e(" 标签替代。")])])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"`<font>` "},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
            const l_tr = tr.parentNode.querySelectorAll("tr")
            const i = 8
            
            const tr_level = Number(tr.getAttribute("tr_level"))
            if (isNaN(tr_level)) return
            const tr_isfold = tr.getAttribute("is_fold")
            if (!tr_isfold) return
            let flag_do_fold = false  // 防止折叠最小层
            for (let j=i+1; j<l_tr.length; j++){
              const tr2 = l_tr[j]
              const tr_level2 = Number(tr2.getAttribute("tr_level"))
              if (isNaN(tr_level2)) break
              if (tr_level2 <= tr_level) break // 影响所有后代级
              // if (tr_level2 != tr_level+1) break // 影响下一级的 (话说这里可能有列表规范性问题?)
              (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
              flag_do_fold = true
            }
            if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("code",null,"<font>")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"用于指定文本字体，大小和颜色，已被CSS的font-family, font-size, color等属性替代。")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"`<isindex>` "},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
            const l_tr = tr.parentNode.querySelectorAll("tr")
            const i = 9
            
            const tr_level = Number(tr.getAttribute("tr_level"))
            if (isNaN(tr_level)) return
            const tr_isfold = tr.getAttribute("is_fold")
            if (!tr_isfold) return
            let flag_do_fold = false  // 防止折叠最小层
            for (let j=i+1; j<l_tr.length; j++){
              const tr2 = l_tr[j]
              const tr_level2 = Number(tr2.getAttribute("tr_level"))
              if (isNaN(tr_level2)) break
              if (tr_level2 <= tr_level) break // 影响所有后代级
              // if (tr_level2 != tr_level+1) break // 影响下一级的 (话说这里可能有列表规范性问题?)
              (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
              flag_do_fold = true
            }
            if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("code",null,"<isindex>")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[e("用于指定单行输入字段，已被 "),t("code",null,'<input type="text">'),e(" 标签替代。")])])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"`<listing>` "},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
            const l_tr = tr.parentNode.querySelectorAll("tr")
            const i = 10
            
            const tr_level = Number(tr.getAttribute("tr_level"))
            if (isNaN(tr_level)) return
            const tr_isfold = tr.getAttribute("is_fold")
            if (!tr_isfold) return
            let flag_do_fold = false  // 防止折叠最小层
            for (let j=i+1; j<l_tr.length; j++){
              const tr2 = l_tr[j]
              const tr_level2 = Number(tr2.getAttribute("tr_level"))
              if (isNaN(tr_level2)) break
              if (tr_level2 <= tr_level) break // 影响所有后代级
              // if (tr_level2 != tr_level+1) break // 影响下一级的 (话说这里可能有列表规范性问题?)
              (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
              flag_do_fold = true
            }
            if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("code",null,"<listing>")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[e("用于指定项目列表，已被 "),t("code",null,"<pre>"),e(" 标签替代。")])])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"`<marquee>` "},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
            const l_tr = tr.parentNode.querySelectorAll("tr")
            const i = 11
            
            const tr_level = Number(tr.getAttribute("tr_level"))
            if (isNaN(tr_level)) return
            const tr_isfold = tr.getAttribute("is_fold")
            if (!tr_isfold) return
            let flag_do_fold = false  // 防止折叠最小层
            for (let j=i+1; j<l_tr.length; j++){
              const tr2 = l_tr[j]
              const tr_level2 = Number(tr2.getAttribute("tr_level"))
              if (isNaN(tr_level2)) break
              if (tr_level2 <= tr_level) break // 影响所有后代级
              // if (tr_level2 != tr_level+1) break // 影响下一级的 (话说这里可能有列表规范性问题?)
              (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
              flag_do_fold = true
            }
            if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("code",null,"<marquee>")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,"用于创建滚动的内容，已被CSS的animation属性或JavaScript替代。")])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"`<menu>` "},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
            const l_tr = tr.parentNode.querySelectorAll("tr")
            const i = 12
            
            const tr_level = Number(tr.getAttribute("tr_level"))
            if (isNaN(tr_level)) return
            const tr_isfold = tr.getAttribute("is_fold")
            if (!tr_isfold) return
            let flag_do_fold = false  // 防止折叠最小层
            for (let j=i+1; j<l_tr.length; j++){
              const tr2 = l_tr[j]
              const tr_level2 = Number(tr2.getAttribute("tr_level"))
              if (isNaN(tr_level2)) break
              if (tr_level2 <= tr_level) break // 影响所有后代级
              // if (tr_level2 != tr_level+1) break // 影响下一级的 (话说这里可能有列表规范性问题?)
              (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
              flag_do_fold = true
            }
            if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("code",null,"<menu>")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[e("用于指定菜单列表，已被 "),t("code",null,"<ul>"),e(" 标签替代。")])])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"`<plaintext>` "},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
            const l_tr = tr.parentNode.querySelectorAll("tr")
            const i = 13
            
            const tr_level = Number(tr.getAttribute("tr_level"))
            if (isNaN(tr_level)) return
            const tr_isfold = tr.getAttribute("is_fold")
            if (!tr_isfold) return
            let flag_do_fold = false  // 防止折叠最小层
            for (let j=i+1; j<l_tr.length; j++){
              const tr2 = l_tr[j]
              const tr_level2 = Number(tr2.getAttribute("tr_level"))
              if (isNaN(tr_level2)) break
              if (tr_level2 <= tr_level) break // 影响所有后代级
              // if (tr_level2 != tr_level+1) break // 影响下一级的 (话说这里可能有列表规范性问题?)
              (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
              flag_do_fold = true
            }
            if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("code",null,"<plaintext>")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[e("用于指定明文，已被 "),t("code",null,"<pre>"),e(" 标签替代。")])])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"`<s>` "},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
            const l_tr = tr.parentNode.querySelectorAll("tr")
            const i = 14
            
            const tr_level = Number(tr.getAttribute("tr_level"))
            if (isNaN(tr_level)) return
            const tr_isfold = tr.getAttribute("is_fold")
            if (!tr_isfold) return
            let flag_do_fold = false  // 防止折叠最小层
            for (let j=i+1; j<l_tr.length; j++){
              const tr2 = l_tr[j]
              const tr_level2 = Number(tr2.getAttribute("tr_level"))
              if (isNaN(tr_level2)) break
              if (tr_level2 <= tr_level) break // 影响所有后代级
              // if (tr_level2 != tr_level+1) break // 影响下一级的 (话说这里可能有列表规范性问题?)
              (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
              flag_do_fold = true
            }
            if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("code",null,"<s>")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[e("用于指定删除线文本，已被CSS的text-decoration: line-through;属性或HTML5的 "),t("code",null,"<del>"),e(" 标签替代。")])])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"`<strike>` "},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
            const l_tr = tr.parentNode.querySelectorAll("tr")
            const i = 15
            
            const tr_level = Number(tr.getAttribute("tr_level"))
            if (isNaN(tr_level)) return
            const tr_isfold = tr.getAttribute("is_fold")
            if (!tr_isfold) return
            let flag_do_fold = false  // 防止折叠最小层
            for (let j=i+1; j<l_tr.length; j++){
              const tr2 = l_tr[j]
              const tr_level2 = Number(tr2.getAttribute("tr_level"))
              if (isNaN(tr_level2)) break
              if (tr_level2 <= tr_level) break // 影响所有后代级
              // if (tr_level2 != tr_level+1) break // 影响下一级的 (话说这里可能有列表规范性问题?)
              (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
              flag_do_fold = true
            }
            if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("code",null,"<strike>")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[e("用于指定删除线文本，已被CSS的text-decoration: line-through;属性或HTML5的 "),t("code",null,"<del>"),e(" 标签替代。")])])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"`<u>` "},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
            const l_tr = tr.parentNode.querySelectorAll("tr")
            const i = 16
            
            const tr_level = Number(tr.getAttribute("tr_level"))
            if (isNaN(tr_level)) return
            const tr_isfold = tr.getAttribute("is_fold")
            if (!tr_isfold) return
            let flag_do_fold = false  // 防止折叠最小层
            for (let j=i+1; j<l_tr.length; j++){
              const tr2 = l_tr[j]
              const tr_level2 = Number(tr2.getAttribute("tr_level"))
              if (isNaN(tr_level2)) break
              if (tr_level2 <= tr_level) break // 影响所有后代级
              // if (tr_level2 != tr_level+1) break // 影响下一级的 (话说这里可能有列表规范性问题?)
              (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
              flag_do_fold = true
            }
            if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("code",null,"<u>")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[e("用于指定带下划线的文本，已被CSS的text-decoration: underline;属性或HTML5的"),t("code",null,"<ins>"),e(" 标签替代。")])])])])]),t("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"false",type:"`<xmp>` "},[t("td",{rowspan:"1",onclick:`            const tr = (this.tagName == "TD") ? this.parentNode : this
            const l_tr = tr.parentNode.querySelectorAll("tr")
            const i = 17
            
            const tr_level = Number(tr.getAttribute("tr_level"))
            if (isNaN(tr_level)) return
            const tr_isfold = tr.getAttribute("is_fold")
            if (!tr_isfold) return
            let flag_do_fold = false  // 防止折叠最小层
            for (let j=i+1; j<l_tr.length; j++){
              const tr2 = l_tr[j]
              const tr_level2 = Number(tr2.getAttribute("tr_level"))
              if (isNaN(tr_level2)) break
              if (tr_level2 <= tr_level) break // 影响所有后代级
              // if (tr_level2 != tr_level+1) break // 影响下一级的 (话说这里可能有列表规范性问题?)
              (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
              flag_do_fold = true
            }
            if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[t("code",null,"<xmp>")])])])]),t("td",{rowspan:"1"},[t("div",{class:"ab-list-table-witharrow markdown-rendered"},[t("div",null,[t("p",null,[e("用于指定预格式化的文本，已被 "),t("code",null,"<pre>"),e("标签替代。")])])])])])])]),t("button",{class:"ab-table-fold",is_fold:"false",onclick:`          const btn = this;
          const svgStr_fold = \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-fold-vertical-icon lucide-fold-vertical"><path d="M12 22v-6"/><path d="M12 8V2"/><path d="M4 12H2"/><path d="M10 12H8"/><path d="M16 12h-2"/><path d="M22 12h-2"/><path d="m15 19-3-3-3 3"/><path d="m15 5-3 3-3-3"/></svg>\`;
          const svgStr_unfold = \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-unfold-vertical-icon lucide-unfold-vertical"><path d="M12 22v-6"/><path d="M12 8V2"/><path d="M4 12H2"/><path d="M10 12H8"/><path d="M16 12h-2"/><path d="M22 12h-2"/><path d="m15 19-3 3-3-3"/><path d="m15 5-3-3-3 3"/></svg>\`;
          const table = btn.parentNode?.querySelector("table");
          if (!table) return;
          
          const is_all_fold = btn.getAttribute("is_fold")
          if (is_all_fold=="true") {
            btn.setAttribute("is_fold", "false"); btn.innerHTML = svgStr_fold;
            const btn_subs = table.querySelectorAll("tr[is_fold='true']>td:first-child");
              btn_subs.forEach((btn_sub) => { btn_sub.click() }) // 注意setAttr版本无断言
          }
          else {
            btn.setAttribute("is_fold", "true"); btn.innerHTML = svgStr_unfold;
            const btn_subs = table.querySelectorAll("tr[is_fold='false']>td:first-child");
              btn_subs.forEach((btn_sub) => { btn_sub.click() }) // 注意setAttr版本无断言
          }`},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-fold-vertical-icon lucide-fold-vertical"},[t("path",{d:"M12 22v-6"}),t("path",{d:"M12 8V2"}),t("path",{d:"M4 12H2"}),t("path",{d:"M10 12H8"}),t("path",{d:"M16 12h-2"}),t("path",{d:"M22 12h-2"}),t("path",{d:"m15 19-3-3-3 3"}),t("path",{d:"m15 5-3 3-3-3"})])])])],-1),r('<p>其中，s、u、center、font 标签都在我上次的文章中作了介绍，但没有去严正声明应该去避免使用他们。这会带来兼容性的问题</p><h2 id="editing-toolbar-和一些插件存在的问题" tabindex="-1">Editing Toolbar 和一些插件存在的问题</h2><p><img src="'+a+'" alt="" loading="lazy"></p><p>如上，Obsidian Editing Toolbar 默认的字体颜色和背景颜色分别是第三和第四项。可以观察到这里使用了已经废弃的 font 标签。作者的本意可能是想着 font 标签的语法更简单，能避免插入过长 html 产生文本污染。</p><p>目前，我个人推荐改为写法二，原因：</p><ul><li>一是增强通用性，避免在某些博客平台不再生效，避免在某些文档编译系统中报错</li><li>二是可以和背景同用一个标签和style区域，在同时设置背景和字体颜色的情况下更简洁</li></ul><p><em>（如果你看到了这里，我应该已经去找作者讨论这件事了）</em></p><p>此外，如果你早前使用了大量的 font 标签，我也推荐你使用全局文本搜索和替换去替换他们。（当然，这处理起来很简单，只要搜索替换就可以了，也不急。你可以等到你有需要迁移到其他平台需要时，再去这样做）</p><h2 id="html-属性的安全性问题" tabindex="-1">HTML 属性的安全性问题</h2><p>除了对 <strong>HTML标签</strong> 的支持和兼容性问题外，对 <strong>HTML属性</strong> 的兼容，也是我们需要考虑的问题</p><p>对于个人的笔记软件和自建博客，HTML属性一般都能正常兼容</p><p>但是如果要在博客系统/公共平台 (如Github和Vidtor等) 上写 Markdown，很多属性都会被禁止，包括 style</p><p>主要原因有两个：<strong>安全性和平台一致性</strong> (以下内容来自 gemini 2.5 pro)</p><ol><li><strong>安全性 (Security)</strong> 这是最主要的原因。如果允许用户随意使用 <code>style</code> 属性，会带来严重的安全风险： <ul><li><strong>跨站脚本攻击 (XSS)</strong>:<br> 攻击者可以利用 CSS 的某些高级或非标准特性来执行恶意脚本。例如，在一些旧版浏览器中，可以通过 <code>style=&quot;behavior: url(javascript:...)&quot;</code> 来运行脚本。虽然现代浏览器已经修复了大部分此类问题，但开放 <code>style</code> 标签仍然是一个巨大的攻击面。</li><li><strong>UI 伪装 (UI Redressing)</strong>:<br> 恶意用户可以利用 CSS 来覆盖或修改页面的原有布局，制造虚假的按钮或链接，诱导其他用户点击，从而窃取信息或执行非预期的操作。想象一下，有人在 issue 评论里把一个“删除仓库”的按钮伪装成一个“查看详情”的链接。</li><li><strong>信息泄露</strong>:<br> 攻击者可以利用 <code>background-image: url(...)</code> 等属性向自己的服务器发送请求，从而追踪谁在何时何地查看了该页面，泄露用户的 IP 地址等信息。</li><li><strong>拒绝服务 (DoS)</strong>:<br> 精心构造的 CSS 可能会导致浏览器渲染引擎崩溃或消耗大量资源，使得其他用户无法正常浏览页面。</li></ul></li><li><strong>平台一致性与可读性 (Consistency &amp; Readability)</strong><ul><li>GitHub 是一个协作平台，它希望所有的内容（无论是 README、Issue 还是 Pull Request）都保持统一、简洁、易于阅读的风格。</li><li>如果每个用户都可以自定义字体、颜色、大小和布局，整个网站会变得非常混乱，像一个“杀马特”风格的个人博客。这会严重影响信息的可读性和专业性，降低所有用户的体验。</li></ul></li></ol><p>允许的属性:</p><p>为了从根本上杜绝这些风险，平台选择采用“白名单”策略：只允许一小部分已知安全的 HTML 标签（如 <code>&lt;b&gt;</code>, <code>&lt;i&gt;</code>, <code>&lt;img&gt;</code>, <code>&lt;a&gt;</code> 等）和属性（如 <code>href</code>, <code>src</code>），而将 <code>style</code>, <code>script</code>, <code>onclick</code> 等所有可能带来风险的标签和属性全部禁止。</p><div class="callout" data-callout="note"><div class="callout-title"><div class="callout-title-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path></svg></div><div class="callout-title-inner">Note</div></div><div class="callout-content"><p>思源问题默认带HTML属性审查，但可以关</p><p>思源设置中有个 &quot;允许执行 HTML 块内脚本&quot; 的选项，默认是关的 (默认关闭是对的，不然打开别人的笔记时可能存在风险)。开启后就可以正常属性 style 了</p><p><img src="'+d+'" alt="" loading="lazy"></p></div></div>',17)])])}const b=n(_,[["render",f]]),p=JSON.parse('{"path":"/MdNote_Public/01.%20DesignAndDevelop/Doc/Note%20Skill/Md%E5%AE%9E%E7%94%A8%E6%A0%87%E7%AD%BE2.html","title":"Md实用标签2","lang":"zh-CN","frontmatter":{"create_date":"2025-10-27T00:00:00.000Z","last_date":"2025-10-27T00:00:00.000Z","author":"LincZero","description":"Md实用标签2 致歉 这里是对之前同系列文章的一个补充 在22年我发布过一篇 《Markdown实用的Html标签》 的文章。而现在看来，尽管我对各个平台的兼容性都做了一些兼容性测试、并绘制了兼容性表格。但当时的我对这方面的见解不够成熟、部分内容不够严谨。在此向之前被误导的读者道歉。 主要是 center、font、big、s 等标签的使用。我当初的 ...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Md实用标签2\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\"}]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Public/01.%20DesignAndDevelop/Doc/Note%20Skill/Md%E5%AE%9E%E7%94%A8%E6%A0%87%E7%AD%BE2.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Md实用标签2"}],["meta",{"property":"og:description","content":"Md实用标签2 致歉 这里是对之前同系列文章的一个补充 在22年我发布过一篇 《Markdown实用的Html标签》 的文章。而现在看来，尽管我对各个平台的兼容性都做了一些兼容性测试、并绘制了兼容性表格。但当时的我对这方面的见解不够成熟、部分内容不够严谨。在此向之前被误导的读者道歉。 主要是 center、font、big、s 等标签的使用。我当初的 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}]]},"git":{},"readingTime":{"minutes":5.91,"words":1772},"filePathRelative":"MdNote_Public/01. DesignAndDevelop/Doc/Note Skill/Md实用标签2.md","excerpt":"\\n<h2>致歉</h2>\\n<p>这里是对之前同系列文章的一个补充</p>\\n<p>在22年我发布过一篇 《Markdown实用的Html标签》 的文章。而现在看来，尽管我对各个平台的兼容性都做了一些兼容性测试、并绘制了兼容性表格。但当时的我对这方面的见解不够成熟、部分内容不够严谨。在此向之前被误导的读者道歉。</p>\\n<p>主要是 center、font、big、s 等标签的使用。我当初的 “是否建议” 使用的的说法存在一些问题。</p>\\n<p></p>\\n<h2>过时标签问题</h2>\\n<p>其实从我当初的兼容性测试，已经可以看到一些端倪。如一些平台不支持center标签。我当时只认为是安全性考虑禁用掉部分标签。</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Public/01. DesignAndDevelop/Doc/Note Skill/Md实用标签2.md","value":{"title":"Md实用标签2","path":"MdNote_Public/01. DesignAndDevelop/Doc/Note Skill/Md实用标签2.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{b as comp,p as data};

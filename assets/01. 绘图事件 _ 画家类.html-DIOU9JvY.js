import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,a as t}from"./app-Ld2qzqw_.js";const l={},a=t(`<h1 id="qt" tabindex="-1"><a class="header-anchor" href="#qt"><span>Qt</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><h1 id="绘图事件-画家类" tabindex="-1"><a class="header-anchor" href="#绘图事件-画家类"><span>绘图事件 &amp;&amp; 画家类</span></a></h1><h2 id="绘画类" tabindex="-1"><a class="header-anchor" href="#绘画类"><span>绘画类</span></a></h2><h3 id="qpainter-画家类" tabindex="-1"><a class="header-anchor" href="#qpainter-画家类"><span>QPainter 画家类</span></a></h3><ul><li><p>头文件</p><ul><li><code>#include &lt;QPainter&gt;</code>，画家类</li></ul></li><li><p>原型声明</p><ul><li><code>void paintEvent(QPaintEvent *);</code>，绘画事件</li></ul></li></ul><h4 id="高级设置" tabindex="-1"><a class="header-anchor" href="#高级设置"><span>高级设置</span></a></h4><ul><li><p>使用</p><ul><li><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>  void Widget::paintEvent(QPaintEvent)	// 绘图事件，会被自动调用，本来是个空实现
  {
  	QPainter painter(this);
      painter.drawEllipse(QPoint(100,50),50,50);
      painter.setRenderHint(QPainter::Antialiasing);		// 设置画家抗锯齿（其他媒体值查文档）
      painter.drawEllipse(QPoint(200,50),50,50);
      
      painter.drawRect(QRect(20,20,50,50));
      painter.translate(100,0);							// 设置移动画家
      painter.save();										// 保存画家状态
      painter.drawRect(QRect(20,20,50,50));
      painter.translate(100,0);
      painter.restore();									// 还原画家状态
      painter.drawRect(QRect(20,20,50,50));
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h3 id="qpen-画笔类" tabindex="-1"><a class="header-anchor" href="#qpen-画笔类"><span>QPen 画笔类</span></a></h3><h3 id="qbrush-笔刷类" tabindex="-1"><a class="header-anchor" href="#qbrush-笔刷类"><span>QBrush 笔刷类</span></a></h3><h3 id="qpaintevent-绘画事件类" tabindex="-1"><a class="header-anchor" href="#qpaintevent-绘画事件类"><span>QPaintEvent 绘画事件类</span></a></h3><h4 id="手动调用绘画事件" tabindex="-1"><a class="header-anchor" href="#手动调用绘画事件"><span>手动调用绘画事件</span></a></h4><ul><li><p>注意点</p><ul><li>不要直接调用<code>paintEvent()</code>，而用另外的两个函数取间接调用</li></ul></li><li><p>使用示例（点击按钮移动图片示例）</p><ul><li><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>  构造函数{
  	connect(ui-&gt;pushButton, &amp;QPushButton::Clicked, [=](){
          posX+=20;	// 每次图片移动20px
  update();	// 而不要直接去调用 paintEvent()
      });
  }
  void Widget::paintEvent(QPaintEvent)
  {
      QPainter painter(this);
  	painter.drawPixmap(posX,100,QPixmap(&quot;:/Image/Luffy.png&quot;));
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h3 id="综合使用" tabindex="-1"><a class="header-anchor" href="#综合使用"><span>综合使用</span></a></h3><ul><li><p>使用</p><ul><li><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>  void Widget::paintEvent(QPaintEvent)	// 绘图事件，会被自动调用，本来是个空实现
  {
      // 初始化画家
      QPainter painter(this);				// 实例化画家对象，this指定绘图的设备
      
      // 设置画笔，并让画家使用画笔（只勾线）
      QPen pen(QColor(255,0,0));							// 设置画笔颜色（也可以使用媒体值指定颜色，如Qt::cyan）
      pen.setWidth(3);									// 设置画笔宽度
      pen.setStyle(Qt::DotLine);							// 设置画笔风格 - 虚线（其他媒体值查文档）
      painter.setPen(pen);								// 让画家使用该画笔
      
      // 设置画刷，并让画家使用画刷（绘制封闭图形时进行填充）
      QBrush brush(QColor(0,255,0));						// 设置画刷颜色（也可以使用媒体值指定颜色，如Qt::cyan）
      brush.setStyle(Qt::Dense7Pattern);					// 设置画刷风格
      painter.setBrush(brush);							// 让画家使用该画刷
      
      // 画家的绘制方法
      painter.drawLine(QPoint(0,0), QPoint(100,100));		// 绘制曲线
      painter.drawEllipse(QPoint(100,100),50,50);			// 绘制椭圆/圆
      painter.drawRect(QRect(20,20,50,50));				// 绘制矩形
      painter.drawText(QRect(10,200,100,50), &quot;Hello&quot;);	// 绘制文字
      QImage img;
      img.load(&quot;:/Image/Luffy.png&quot;);
      painter.drawImage(0,0,img);							// 按图片绘制
      QPicture pic;
      pic.load(&quot;E:\\\\pic.zt&quot;);
      painter.drawPicture(0,0,pic);						// 按动作绘制
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="绘图设备类" tabindex="-1"><a class="header-anchor" href="#绘图设备类"><span>绘图设备类</span></a></h2><ul><li>简概 <ul><li>绘图设备是指继承<code>QPainterDevice</code>的子类</li><li>补充：<code>QWidget</code>有两个基类：<code>QObject</code>和<code>QPaintDevice</code>，后者是绘图设备，所以可以在窗口上绘图</li></ul></li><li>分类：Qt一共提供了四个这样的类 <ul><li><code>QPixmap</code><ul><li>说明：专门用于在屏幕上显示图像，还做了跨平台显示优化</li><li>头文件：<code>#include &lt;QPixmap&gt;</code></li></ul></li><li><code>QBitmap</code><ul><li>继承：是QPixmap的一个子类，它的色深限定为1</li><li>说明：可以使用QPixmap的isQBitmap()函数来确定QPixmap是不是一个QBitmap</li></ul></li><li><code>QImage</code><ul><li>说明：可以进行图像的像素级访问</li></ul></li><li><code>QPicture</code><ul><li>说明：可以记录和重现QPainter的各条命令</li></ul></li><li>补充：gif用的<code>QMoive</code>类 <ul><li>头文件：<code>#include &lt;QMovie&gt;</code></li></ul></li></ul></li></ul><h3 id="qpixmap-位图类" tabindex="-1"><a class="header-anchor" href="#qpixmap-位图类"><span>QPixmap 位图类</span></a></h3><ul><li><p>使用示例（绘制图片并保存）</p><ul><li><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>  QPixmap pix(300,300,QImage::Format_RGB32);		// QPixmap绘图设备，300x300大小，RGB32模式（可选参数）
  pix.fill(Qt::white);				// 填充背景色（默认背景透明/为黑）
  QPainter painter(&amp;pix);				// 声明画家（参数为this时表示使用继承了QPainterDevice的主窗口绘画）
  painter.drawEllipse(QPoint(150,150),100,100);	// 回家绘制椭圆
  pix.save(&quot;E:\\\\pix.png&quot;);			// 可以画完后保存在本地
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h3 id="qimage-图片类" tabindex="-1"><a class="header-anchor" href="#qimage-图片类"><span>QImage 图片类</span></a></h3><ul><li><p>使用示例（利用QImage对像素进行修改）</p><ul><li><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>  QPainter painter(this);				// 声明画家
  QImage img;							// QImage绘图设备
  img.load(&quot;:/Image/Luffy.png&quot;);		// 加载图片
  
  for(int i=50; i&lt;100; i++)
  {
      for(int j=50; j&lt;100; j++)
      {
          QRgb value = qRgb(255,0,0);	// 像素点
          img.setPixel(i,j,value);
      }
  }
  painter.drawImage(0,0,img));		// 画家绘制图片
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h3 id="qpicture-绘图指令类" tabindex="-1"><a class="header-anchor" href="#qpicture-绘图指令类"><span>QPicture 绘图指令类</span></a></h3><ul><li><p>使用示例（记录和重现绘图指令）</p><ul><li><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>  // 记录
  QPicture pic;
  QPainter painter;
  painter.begin(&amp;pic);					// 开始画画（绘制在QPicture）
  painter.setPen(QPen(Qt::cyan));
  painter.drawEllipse(QPoint(150,150),100,100);
  painter.end();							// 结束画画
  pic.save(&quot;E:\\\\pic.zt&quot;);					// 保存.zt文件
  
  // 重现
  QPainter painter(this);
  QPicture pic;
  pic.load(&quot;E:\\\\pic.zt&quot;);					// 加载动作
  painter.drawPicture(0,0,pic);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul>`,23),d=[a];function s(r,c){return i(),n("div",null,d)}const p=e(l,[["render",s],["__file","01. 绘图事件 _ 画家类.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Multi/QT%EF%BC%88Cpp%EF%BC%89/03.%20Qt%E5%85%B6%E4%BB%96%E7%B1%BB%EF%BC%88%E6%8C%89%E5%8A%9F%E8%83%BD%EF%BC%89/02.%20%E5%9B%BE%E5%BD%A2%E7%9B%B8%E5%85%B3/01.%20%E7%BB%98%E5%9B%BE%E4%BA%8B%E4%BB%B6%20_%20%E7%94%BB%E5%AE%B6%E7%B1%BB.html","title":"Qt","lang":"zh-CN","frontmatter":{"description":"Qt 目录 绘图事件 && 画家类 绘画类 QPainter 画家类 头文件 #include <QPainter>，画家类 原型声明 void paintEvent(QPaintEvent *);，绘画事件 高级设置 使用 QPen 画笔类 QBrush 笔刷类 QPaintEvent 绘画事件类 手动调用绘画事件 注意点 不要直接调用paintEv...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/04.%20Project/Platform/Multi/QT%EF%BC%88Cpp%EF%BC%89/03.%20Qt%E5%85%B6%E4%BB%96%E7%B1%BB%EF%BC%88%E6%8C%89%E5%8A%9F%E8%83%BD%EF%BC%89/02.%20%E5%9B%BE%E5%BD%A2%E7%9B%B8%E5%85%B3/01.%20%E7%BB%98%E5%9B%BE%E4%BA%8B%E4%BB%B6%20_%20%E7%94%BB%E5%AE%B6%E7%B1%BB.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"Qt"}],["meta",{"property":"og:description","content":"Qt 目录 绘图事件 && 画家类 绘画类 QPainter 画家类 头文件 #include <QPainter>，画家类 原型声明 void paintEvent(QPaintEvent *);，绘画事件 高级设置 使用 QPen 画笔类 QBrush 笔刷类 QPaintEvent 绘画事件类 手动调用绘画事件 注意点 不要直接调用paintEv..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Qt\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"Qt","slug":"qt","link":"#qt","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"绘图事件 && 画家类","slug":"绘图事件-画家类","link":"#绘图事件-画家类","children":[{"level":2,"title":"绘画类","slug":"绘画类","link":"#绘画类","children":[{"level":3,"title":"QPainter 画家类","slug":"qpainter-画家类","link":"#qpainter-画家类","children":[{"level":4,"title":"高级设置","slug":"高级设置","link":"#高级设置","children":[]}]},{"level":3,"title":"QPen 画笔类","slug":"qpen-画笔类","link":"#qpen-画笔类","children":[]},{"level":3,"title":"QBrush 笔刷类","slug":"qbrush-笔刷类","link":"#qbrush-笔刷类","children":[]},{"level":3,"title":"QPaintEvent 绘画事件类","slug":"qpaintevent-绘画事件类","link":"#qpaintevent-绘画事件类","children":[{"level":4,"title":"手动调用绘画事件","slug":"手动调用绘画事件","link":"#手动调用绘画事件","children":[]}]},{"level":3,"title":"综合使用","slug":"综合使用","link":"#综合使用","children":[]}]},{"level":2,"title":"绘图设备类","slug":"绘图设备类","link":"#绘图设备类","children":[{"level":3,"title":"QPixmap 位图类","slug":"qpixmap-位图类","link":"#qpixmap-位图类","children":[]},{"level":3,"title":"QImage 图片类","slug":"qimage-图片类","link":"#qimage-图片类","children":[]},{"level":3,"title":"QPicture 绘图指令类","slug":"qpicture-绘图指令类","link":"#qpicture-绘图指令类","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.31,"words":992},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/04. Project/Platform/Multi/QT（Cpp）/03. Qt其他类（按功能）/02. 图形相关/01. 绘图事件 & 画家类.md","autoDesc":true}');export{p as comp,m as data};

import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as n,a as i}from"./app-Bh75ISgc.js";const a={},l=i(`<h1 id="《c-设计模式》视频-李建忠" tabindex="-1"><a class="header-anchor" href="#《c-设计模式》视频-李建忠"><span>《C++设计模式》视频_李建忠</span></a></h1><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1><p>[toc]</p><h1 id="观察者模式-observer" tabindex="-1"><a class="header-anchor" href="#观察者模式-observer"><span>观察者模式 Observer</span></a></h1><h2 id="所属分类——-组件协作-模式" tabindex="-1"><a class="header-anchor" href="#所属分类——-组件协作-模式"><span>所属分类——“组件协作” 模式</span></a></h2><p>[省略]</p><h2 id="动机-motivation" tabindex="-1"><a class="header-anchor" href="#动机-motivation"><span>动机（Motivation）</span></a></h2><h3 id="简概" tabindex="-1"><a class="header-anchor" href="#简概"><span>简概</span></a></h3><ul><li>在软件构建过程中，我们需要为某些对象建立一种 “通知依赖关系” ——一个对象（目标对象）的状态发生改变，所有的依赖对象（观察者对象）都将得到通知。如果这样的依赖关系过于紧密，将使软件不能很好地抵御变化</li><li>使用面向对象技术，可以将这种依赖关系弱化，并形成一种稳定的依赖关系。从而实现软件体系结构的松耦合</li></ul><h3 id="核心-1-让通知者可以通知多个观察者-2-观察关系可动态绑定" tabindex="-1"><a class="header-anchor" href="#核心-1-让通知者可以通知多个观察者-2-观察关系可动态绑定"><span>核心：1 让通知者可以通知多个观察者，2 观察关系可动态绑定</span></a></h3><p>消息通知时，通知者和被通知者两个对象解耦、可以动态绑定</p><p>不用这个设计模式也能实现消息通知，子父对象粗暴地互相包含对方指针，然后顺着指针一层层找到要通知的对象并调用其方法即可</p><p>但这种方法高度耦合，而且做不到一点 —— 能够动态地组合消息通知关系</p><p>——</p><p>什么时候不用？仅A类和B类两者之间有通知关系的需求</p><p>什么时候用？被通知类，有可能被各种东西进行通知</p><h3 id="代码体现" tabindex="-1"><a class="header-anchor" href="#代码体现"><span>代码体现</span></a></h3><p>文件分割器 + 进度条/命令行显示进度的实现</p><p>考虑时间轴：后续加入增加进度条的功能，再后续可能又要要求这个进度条显示百分比，再后续又有可能要在命令行而不是在GUI中显示</p><h4 id="举例-写法1-高耦合普通写法" tabindex="-1"><a class="header-anchor" href="#举例-写法1-高耦合普通写法"><span>举例 - 写法1（高耦合普通写法）</span></a></h4><p>该写法中，库类与界面类耦合了，库类依赖了实现细节m_progressBar、违背了<code>依赖倒置原则（DIP）</code> （这里的ProgressBar属于运行实现细节，他编译时依赖于FileSplitter）</p><p>文件分割器类</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>/** 传入包含
 */
class Filesplitter		// 文件分割器（把大文件分割成多个小文件方便拷贝）
{
	string m_filePath;
    int m_fileNumber;
    ProgressBar* m_progressBar;									// 【新增】声明进度条，是个通知控件
public:
	FileSplitter(const string&amp; filePath, int fileNumber
        ,ProgressBar* progressBar								// 【新增】传入进度条
        )：m_filePath(filePath),
    	m_progressBar(progressBar),								// 【新增】初始化进度条
		m_fileNumber(fileNumber){// 传入文件和文件分割数量
            
    }

    void split(){
		// 1.读取大文件
        
		// 2.分批次向小文件中写入
		for (int i - 0; i &lt; m_fileNumber; i++){
			//...
            if(m_progressBar != nullptr){						// 【新增】更新进度条
                float progressValue = m_fileNumber;
                progressValue = (i+1)/progressValue;
                m_progressBar-&gt;setValue((i+1)/m_fileNumber);
            }
		}
	}
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行代码</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>/** 创建包含
 */
class MainForm : public Form
{
	TextBox* txtFilePath;
	TextBox* txtFileNumber;
	ProgressBar* progressBar;									// 【新增】声明进度条
public:
	void Button1 click(){
		string filePath = txtFilePath-&gt;getText();
		int number = atoi(txtFileNumber-&gt;getText().c_str());

        FileSplitter splitter(filePath，number	// 文件分割器类
        	,progressBar										// 【新增】传入进度条
        	);

        splitter.split();						// 调用分割方法
	}
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="举例-写法2-观察者写法" tabindex="-1"><a class="header-anchor" href="#举例-写法2-观察者写法"><span>举例 - 写法2（观察者写法）</span></a></h4><p>单纯找基类不行</p><p>文件分割器类（含有观察者）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class IProgress{												// 【新增】通知机制的抽象基类
public:
    virtual void DoProgress(float value)=0;
    virtual ~IProgress(){}
}
    
    
class Filesplitter		// 文件分割器（把大文件分割成多个小文件方便拷贝）
{
	string m_filePath;
    int m_fileNumber;
    //ProgressBar* m_progressBar;
    IProgress* m_iprogress;										// 【新增】抽象通知机制
public:
	FileSplitter(const string&amp; filePath, int fileNumber
        ,IProgressBar* iprogressBar								// 【新增】传入通知机制
        )：m_filePath(filePath),
    	m_progress(iprogress),									// 【新增】初始化通知机制
		m_fileNumber(fileNumber){// 传入文件和文件分割数量
            
    }

    void split(){
		// 1.读取大文件
        
		// 2.分批次向小文件中写入
		for (int i - 0; i &lt; m_fileNumber; i++){
			//...
            float progressValue = m_fileNumber;					// 【新增】
            progressValue = (i+1)/progressValue;
            onProgress(progressValue);
		}
	}
    
protected:
    void onProgress(float value){								// 【新增】更新通知机制
        if(m_iprogress != nullptr){
        	m_iprogress-&gt;DoProgress(value);
        }
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行代码</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class MainForm : public Form					// 【观察者】
    , public IProgress											// 【新增】多继承一个抽象基类接口
{
	TextBox* txtFilePath;
	TextBox* txtFileNumber;
	ProgressBar* progressBar;									// 【新增】声明进度条
public:
	void Button1 click(){
		string filePath = txtFilePath-&gt;getText();
		int number = atoi(txtFileNumber-&gt;getText().c_str());

        FileSplitter splitter(filePath，number	// 文件分割器类
        	,this												// 【新增】传入通知机制（this继承了IProgress）
        	);

        splitter.split();						// 调用分割方法
	}
    virtual void DoProgress(float value) override{				// 【新增】重写抽象基类接口
        progressBar-&lt;&gt;setValue(value);
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="举例-写法3-多个观察者" tabindex="-1"><a class="header-anchor" href="#举例-写法3-多个观察者"><span>举例 - 写法3（多个观察者）</span></a></h4><p>上面是观察了一个，改变一个。但实际上观察者模式可能会改变多个</p><p>文件分割器类（支持多个观察者）</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class IProgress{													// 通知机制的抽象基类
public:
    virtual void DoProgress(float value)=0;
    virtual ~IProgress(){}
}
    
    
class Filesplitte
{
	string m_filePath;
    int m_fileNumber;
    List&lt;IProgress*&gt; m_iprogressList;							/* 【修改】变为通知机制的vector容器，支持了多个观察者
    															 * 或者用Vector等其他容器也是可以的*/
public:
	FileSplitter(const string&amp; filePath, int fileNumber
        )：m_filePath(filePath),
		m_fileNumber(fileNumber){// 传入文件和文件分割数量
    }

    void add_IProgress(IProgress* iprogress){						// 【新增】将通知进制放入vector容器中
        //m_iprogressVector.push_back(iprogress);
        m_iprogressList.add(iprogress);
    }
    
    void remove_IProgress(IProgress* iprogress){					// 【新增】将通知进制从vector容器中删除
        //m_iprogressVector.remove(iprogress);
        m_iprogressList.remove(iprogress);
    }
    
    void split(){
		// 1.读取大文件
        
		// 2.分批次向小文件中写入
		for (int i - 0; i &lt; m_fileNumber; i++){
			//...
            float progressValue = m_fileNumber;	
            progressValue = (i+1)/progressValue;
            onProgress(progressValue);
		}
	}
    
protected:
    void onProgress(float value){
        
        List&lt;IProgress*&gt;::Iterator itor=m_iprogressList.begin();	// 【修改】用迭代器遍历
        while(itor!=m_iprogressList.end())
        {
            (*itor)-&gt;DoProgress(value);// 循环调用每个Iterator的DoProgress方法（更新进度条）
            itor++;
        }
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行代码</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class MainForm : public Form					// 继承IProgress，所以this也是 “观察者”
    , public IProgress
{
	TextBox* txtFilePath;
	TextBox* txtFileNumber;
	ProgressBar* progressBar;									// 【新增】声明进度条
public:
	void Button1 click(){
		string filePath = txtFilePath-&gt;getText();
		int number = atoi(txtFileNumber-&gt;getText().c_str());
        
        ConsoleNotifier cn;
        FileSplitter splitter(filePath，number);	// 文件分割器类
        	
		splitter.addIprogress(this);			// 》》这里就添加了两个观察者（实现代码决定：是否订阅通知）
        splitter.addIprogress(&amp;cn);				// 》》这里就添加了两个观察者（实现代码决定：是否订阅通知）
        
        splitter.split();						// 调用分割方法
	}
    virtual void DoProgress(float value) override{				// 【新增】重写抽象基类接口
        progressBar-&lt;&gt;setValue(value);
    }
};

class ConsoleNotifier : public IProgress		// 继承IProgress，该类成为了 “观察者”
{
public:
    virtual void DoProgress(float value){
        cout &lt;&lt; &quot;.&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="比较两种写法" tabindex="-1"><a class="header-anchor" href="#比较两种写法"><span>比较两种写法</span></a></h4><ul><li>写法一：分析存在什么问题时就要想有没有违背八大设计原则 该写法中，库类与界面类耦合了，库类依赖了实现细节m_progressBar、违背了<code>依赖倒置原则（DIP）</code> （这里的ProgressBar属于运行实现细节，他编译时依赖于FileSplitter）</li><li>写法二/三：文件分割器类中定义IProgress（通知机制）而不是ProgressBar（进度条） <strong>没有耦合界面类</strong>，把紧耦合变成松耦合，遵循了<code>依赖倒置原则（DIP）</code></li></ul><h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式"><span>设计模式</span></a></h2><h3 id="模式定义" tabindex="-1"><a class="header-anchor" href="#模式定义"><span>模式定义</span></a></h3><blockquote><p>定义对象间的一种<strong>一对多（变化）的依赖关系</strong>，以便当一个对象（Subject）的状态发生改变时，所有依赖于它的对象都<strong>得到通知并自动更新</strong></p><p>——《设计模式》GoF</p></blockquote><h3 id="结构-structure" tabindex="-1"><a class="header-anchor" href="#结构-structure"><span>结构（Structure）</span></a></h3><blockquote><h4 id="新" tabindex="-1"><a class="header-anchor" href="#新"><span>新</span></a></h4></blockquote><p>原写法</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">classDiagram</span>
	MainForm <span class="token arrow operator">--&gt;</span> FileSplitter <span class="token operator">:</span> 传progressBar
	MainForm <span class="token arrow operator">--&gt;</span> progrewwBar
    progrewwBar <span class="token arrow operator">&lt;--</span> FileSplitter
	<span class="token keyword">class</span> MainForm<span class="token punctuation">{</span>
		-ProgressBar* progressBar
	<span class="token punctuation">}</span>
	<span class="token keyword">class</span> FileSplitter<span class="token punctuation">{</span>
		-ProgressBar* progressBar
		+splict<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">classDiagram</span>
	MainForm <span class="token arrow operator">&lt;--&gt;</span> FileSplitter <span class="token operator">:</span> 传自己
	MainForm <span class="token arrow operator">--&gt;</span> progressBar
	<span class="token keyword">class</span> MainForm<span class="token punctuation">{</span>
		-ProgressBar* progressBar
		+DoProgress<span class="token text string">(float)</span> setProgressBar
	<span class="token punctuation">}</span>
	<span class="token keyword">class</span> FileSplitter<span class="token punctuation">{</span>
		-ProgressBar* progressBar
		+splict<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>改进后</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">classDiagram</span>
	IProgress <span class="token arrow operator">&lt;|..</span> MainForm
	MainForm <span class="token arrow operator">--*</span> FileSplitter<span class="token operator">:</span> 传自己
	MainForm <span class="token arrow operator">--&gt;</span> progressBar
    
    <span class="token keyword">class</span> IProgress<span class="token punctuation">{</span>
    	<span class="token annotation important">&lt;&lt;abstract&gt;&gt;</span>
    	观察者类
		+DoProgress<span class="token text string">(float)</span>* void
	<span class="token punctuation">}</span>
	<span class="token keyword">class</span> MainForm<span class="token punctuation">{</span>
		观察者类
		-ProgressBar* progressBar 这里是具体指针
		+DoProgress<span class="token text string">(float)</span> override
	<span class="token punctuation">}</span>
	<span class="token keyword">class</span> FileSplitter<span class="token punctuation">{</span>
		通知者类
		-IProgress* m_iprogress 这里是抽象指针
		+splict<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>概括变化</p><blockquote><p>其实就是让 通知类 中，所包含的指针，<strong>由具体类变成抽象类</strong> 如此一来 通知类，就能通知更多的观察者类</p><p>在这里被通知者是MainForm</p></blockquote><blockquote><h4 id="旧" tabindex="-1"><a class="header-anchor" href="#旧"><span>旧</span></a></h4></blockquote><p>旧Mermaid</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
<span class="token keyword">subgraph</span> MainForm
主进程类<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">创建包含</span><span class="token arrow operator">--&gt;</span></span>进度条
<span class="token keyword">end</span>
主进程类<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">创建包含</span><span class="token arrow operator">---&gt;</span></span>文件分割器
进度条<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">被传入包含 可被反向影响</span><span class="token arrow operator">--&gt;</span></span>文件分割器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="旧mermaid-红色表示稳定-类图左观察右-又继承左" tabindex="-1"><a class="header-anchor" href="#旧mermaid-红色表示稳定-类图左观察右-又继承左"><span>旧Mermaid（红色表示稳定，类图左观察右，又继承左）</span></a></h4></blockquote><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TB
<span class="token keyword">subgraph</span> Observer 观察者抽象基类
	b1<span class="token text string">[Update]</span><span class="token punctuation">;</span>class b1 red
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> ConcreteObserver 观察者具体类 可为多个
	b2<span class="token text string">[Update]</span>
	observerState
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> Subject 被观察对象抽象基类
	Attach<span class="token punctuation">;</span>class Attach red
	Detach<span class="token punctuation">;</span>class Detach red
	Notify<span class="token punctuation">;</span>class Notify red
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> ConcreteSubject 被观察对象具体类
	GetState
	SetState
	subjectState
<span class="token keyword">end</span>

b1<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生多个</span><span class="token arrow operator">--&gt;</span></span>b2
Detach<span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">派生</span><span class="token arrow operator">--&gt;</span></span>SetState

<span class="token keyword">classDef</span> red <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#f9f<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#333<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>4px</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结合程序" tabindex="-1"><a class="header-anchor" href="#结合程序"><span>结合程序</span></a></h3><ul><li>Observer（观察者）相当于例程中的IProgress（通知机制），Update()相当于DoProgress()</li><li>ConcreteObserver（具体观察者）相等于例程中的MainForm和ConsoleNotifier</li><li>Subject相当于Filesplitte，里面Attach、Detach、Notify分别相当于例程的add_IProgress、remove_IProgress、onProgress</li><li>例程中的ConcreteSubject和Subject在例程中都是Filesplitte，例程为了方便显示合二为一了，但开发中可以分开</li></ul><p>和Template Method一样都是非常常见的设计模式</p><p>其他语言和架构：</p><ul><li>Java中的Listener机制</li><li>C#的Event模式</li><li>Qt的single-slot机制、Model-View模式</li><li>Vue的核心——数据驱动视图（Observer模块）</li></ul><h3 id="要点总结" tabindex="-1"><a class="header-anchor" href="#要点总结"><span>要点总结</span></a></h3><ul><li>使用面向对象的抽象，Observer模式使得我们可以独立地改变<strong>目标与观察者</strong>，从而使二者之间的依赖关系达致<strong>松耦合</strong></li><li>目标发送通知时，无需指定观察者，通知（可以携带通知信息作为参数）会自动传播</li><li><strong>观察者自己决定是否需要订阅通知，目标对象对此一无所知</strong></li><li>Observer模式是基于事件的UI框架中非常常用的设计模式，也是MVC模式的一个重要组成部分</li></ul><h3 id="个人体会" tabindex="-1"><a class="header-anchor" href="#个人体会"><span>个人体会</span></a></h3><h4 id="结合qt" tabindex="-1"><a class="header-anchor" href="#结合qt"><span>结合QT</span></a></h4><p>很像是QT的信号和槽的机制，在ConcreteObserver中定义定义槽，ConcreteSubject中定义信号、并连接信号和槽来决定观察者是否订阅通知</p><p>Model-View模式应该也是Observer模式的原理</p><p>观察者模式又叫做</p><ul><li>发布-订阅（Publish/Subscribe）模式</li><li>模型-视图（Model/View）模式</li><li>源-监听器（Source/Listener）模式</li><li>从属者（Dependents）模式</li></ul><h4 id="一对多" tabindex="-1"><a class="header-anchor" href="#一对多"><span>一对多</span></a></h4><p>说是一对多，但事实上应该是可以多对多的吧</p><ul><li>被观察者是一（single）、观察者是多（slot）</li><li>被观察者通知观察者、观察者订阅被观察者</li><li>观察者主动决定去观察被观察者</li></ul>`,73),t=[l];function r(d,c){return s(),n("div",null,t)}const p=e(a,[["render",r],["__file","03. 观察者模式 Observer.html.vue"]]),u=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/03.%20%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F%20Observer.html","title":"《C++设计模式》视频_李建忠","lang":"zh-CN","frontmatter":{"description":"《C++设计模式》视频_李建忠 目录 [toc] 观察者模式 Observer 所属分类——“组件协作” 模式 [省略] 动机（Motivation） 简概 在软件构建过程中，我们需要为某些对象建立一种 “通知依赖关系” ——一个对象（目标对象）的状态发生改变，所有的依赖对象（观察者对象）都将得到通知。如果这样的依赖关系过于紧密，将使软件不能很好地抵御...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/01.%20%E5%A4%9A%E7%B1%BB%E7%AE%A1%E7%90%86/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E3%80%8AC__%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E3%80%8B%E8%A7%86%E9%A2%91_%E6%9D%8E%E5%BB%BA%E5%BF%A0/03.%20%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F%20Observer.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:title","content":"《C++设计模式》视频_李建忠"}],["meta",{"property":"og:description","content":"《C++设计模式》视频_李建忠 目录 [toc] 观察者模式 Observer 所属分类——“组件协作” 模式 [省略] 动机（Motivation） 简概 在软件构建过程中，我们需要为某些对象建立一种 “通知依赖关系” ——一个对象（目标对象）的状态发生改变，所有的依赖对象（观察者对象）都将得到通知。如果这样的依赖关系过于紧密，将使软件不能很好地抵御..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《C++设计模式》视频_李建忠\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[{"level":1,"title":"《C++设计模式》视频_李建忠","slug":"《c-设计模式》视频-李建忠","link":"#《c-设计模式》视频-李建忠","children":[]},{"level":1,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":1,"title":"观察者模式 Observer","slug":"观察者模式-observer","link":"#观察者模式-observer","children":[{"level":2,"title":"所属分类——“组件协作” 模式","slug":"所属分类——-组件协作-模式","link":"#所属分类——-组件协作-模式","children":[]},{"level":2,"title":"动机（Motivation）","slug":"动机-motivation","link":"#动机-motivation","children":[{"level":3,"title":"简概","slug":"简概","link":"#简概","children":[]},{"level":3,"title":"核心：1 让通知者可以通知多个观察者，2 观察关系可动态绑定","slug":"核心-1-让通知者可以通知多个观察者-2-观察关系可动态绑定","link":"#核心-1-让通知者可以通知多个观察者-2-观察关系可动态绑定","children":[]},{"level":3,"title":"代码体现","slug":"代码体现","link":"#代码体现","children":[{"level":4,"title":"举例 - 写法1（高耦合普通写法）","slug":"举例-写法1-高耦合普通写法","link":"#举例-写法1-高耦合普通写法","children":[]},{"level":4,"title":"举例 - 写法2（观察者写法）","slug":"举例-写法2-观察者写法","link":"#举例-写法2-观察者写法","children":[]},{"level":4,"title":"举例 - 写法3（多个观察者）","slug":"举例-写法3-多个观察者","link":"#举例-写法3-多个观察者","children":[]},{"level":4,"title":"比较两种写法","slug":"比较两种写法","link":"#比较两种写法","children":[]}]}]},{"level":2,"title":"设计模式","slug":"设计模式","link":"#设计模式","children":[{"level":3,"title":"模式定义","slug":"模式定义","link":"#模式定义","children":[]},{"level":3,"title":"结构（Structure）","slug":"结构-structure","link":"#结构-structure","children":[]},{"level":3,"title":"结合程序","slug":"结合程序","link":"#结合程序","children":[]},{"level":3,"title":"要点总结","slug":"要点总结","link":"#要点总结","children":[]},{"level":3,"title":"个人体会","slug":"个人体会","link":"#个人体会","children":[{"level":4,"title":"结合QT","slug":"结合qt","link":"#结合qt","children":[]},{"level":4,"title":"一对多","slug":"一对多","link":"#一对多","children":[]}]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":8.18,"words":2455},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/03. Tools/02. 管理层/01. 多类管理/设计模式/《C++设计模式》视频_李建忠/03. 观察者模式 Observer.md","autoDesc":true}');export{p as comp,u as data};

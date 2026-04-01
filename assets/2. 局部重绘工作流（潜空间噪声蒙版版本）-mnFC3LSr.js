var e=37,t=94,n=[{id:8,type:`VAEDecode`,pos:{0:1170,1:390},size:{0:210,1:46},flags:{},order:9,mode:0,inputs:[{name:`samples`,type:`LATENT`,link:42,label:`Latent`},{name:`vae`,type:`VAE`,link:84,label:`VAE`}],outputs:[{name:`IMAGE`,type:`IMAGE`,links:[22],slot_index:0,label:`图像`}],properties:{"Node name for S&R":`VAEDecode`},widgets_values:[]},{id:9,type:`SaveImage`,pos:{0:1170,1:480},size:{0:390,1:400},flags:{},order:10,mode:0,inputs:[{name:`images`,type:`IMAGE`,link:22,label:`图像`}],outputs:[],properties:{},widgets_values:[`ComfyUI`]},{id:7,type:`CLIPTextEncode`,pos:{0:350,1:410},size:{0:425.27801513671875,1:180.6060791015625},flags:{},order:4,mode:0,inputs:[{name:`clip`,type:`CLIP`,link:82,label:`CLIP`}],outputs:[{name:`CONDITIONING`,type:`CONDITIONING`,links:[6],slot_index:0,label:`条件`}],properties:{"Node name for S&R":`CLIPTextEncode`},widgets_values:[`nsfw, (worst quality), (low quality), (normal quality), `]},{id:29,type:`CheckpointLoaderSimple`,pos:{0:-50,1:350},size:{0:315,1:98},flags:{},order:0,mode:0,inputs:[],outputs:[{name:`MODEL`,type:`MODEL`,links:[80],slot_index:0,label:`模型`},{name:`CLIP`,type:`CLIP`,links:[81,82],slot_index:1,label:`CLIP`},{name:`VAE`,type:`VAE`,links:[84,90],slot_index:2,label:`VAE`}],properties:{"Node name for S&R":`CheckpointLoaderSimple`},widgets_values:[`majicmixLux_v3.safetensors`]},{id:35,type:`VAEEncode`,pos:{0:487.0909118652344,1:860.6363525390625},size:{0:210,1:46},flags:{},order:5,mode:0,inputs:[{name:`pixels`,type:`IMAGE`,link:89,label:`图像`},{name:`vae`,type:`VAE`,link:90,label:`VAE`}],outputs:[{name:`LATENT`,type:`LATENT`,links:[91],slot_index:0,shape:3,label:`Latent`}],properties:{"Node name for S&R":`VAEEncode`},widgets_values:[]},{id:33,type:`SetLatentNoiseMask`,pos:{0:550,1:710},size:{0:210,1:46},flags:{},order:7,mode:0,inputs:[{name:`samples`,type:`LATENT`,link:91,label:`Latent`},{name:`mask`,type:`MASK`,link:92,label:`遮罩`}],outputs:[{name:`LATENT`,type:`LATENT`,links:[93],slot_index:0,shape:3,label:`Latent`}],properties:{"Node name for S&R":`SetLatentNoiseMask`},widgets_values:[]},{id:20,type:`LoadImage`,pos:{0:50,1:680},size:{0:385,1:365},flags:{},order:1,mode:0,inputs:[],outputs:[{name:`IMAGE`,type:`IMAGE`,links:[89,94],slot_index:0,label:`图像`},{name:`MASK`,type:`MASK`,links:[92],slot_index:1,label:`遮罩`}],properties:{"Node name for S&R":`LoadImage`},widgets_values:[`clipspace/clipspace-mask-235017.40000000037.png [input]`,`image`]},{id:36,type:`PreviewImage`,pos:{0:810,1:810},size:{0:320,1:210},flags:{},order:6,mode:0,inputs:[{name:`images`,type:`IMAGE`,link:94,label:`图像`}],outputs:[],properties:{"Node name for S&R":`PreviewImage`},widgets_values:[]},{id:3,type:`KSampler`,pos:{0:810,1:300},size:{0:320,1:470},flags:{},order:8,mode:0,inputs:[{name:`model`,type:`MODEL`,link:80,label:`模型`},{name:`positive`,type:`CONDITIONING`,link:4,label:`正面条件`},{name:`negative`,type:`CONDITIONING`,link:6,label:`负面条件`},{name:`latent_image`,type:`LATENT`,link:93,label:`Latent`}],outputs:[{name:`LATENT`,type:`LATENT`,links:[42],slot_index:0,label:`Latent`}],properties:{"Node name for S&R":`KSampler`},widgets_values:[0x6d7d65cd49e8,`randomize`,21,8,`dpmpp_2m`,`normal`,.5]},{id:6,type:`CLIPTextEncode`,pos:{0:350,1:200},size:{0:422.84503173828125,1:164.31304931640625},flags:{},order:3,mode:0,inputs:[{name:`clip`,type:`CLIP`,link:81,label:`CLIP`}],outputs:[{name:`CONDITIONING`,type:`CONDITIONING`,links:[4],slot_index:0,label:`条件`}],properties:{"Node name for S&R":`CLIPTextEncode`},widgets_values:[`masterpiece, best quality, 1girl, (bright yellow dress:1.2),(upper body:1.1), grassland, outdoors, sitting on the grass,`]},{id:37,type:`Note`,pos:{0:-557,1:213},size:{0:482.1575012207031,1:833.2864990234375},flags:{},order:2,mode:0,inputs:[],outputs:[],properties:{},widgets_values:[`# 局部重绘

## WebUI中的操作

在 WebUI 中，我们可以通过画布在上传的图片上涂抹/上传蒙版图来确定一块区域进行重绘

一般来说，白色是1(需要被操作)黑色是0(不动)

## ComfyUI中的操作

在作者提供的工作流示例中，也有提供：Inpaint文件夹。或者其他更多的工作流方法

### 重绘编码器版本

核心

- 蒙版的设置
  蒙版的位置比较隐蔽，在加载图像节点上右键 > 在蒙版(遮罩)编辑器里打开 (Open in MaskEditor)，在里面可以编辑蒙版
- VAE内补编码器
  这个本质也是VAE编码节点，不过这个是专门用于重绘的。用这个代替之前的普通版本的VAE编码节点
- 后面的流程同普通图生图

要项、原理

- 重绘强度（去噪强度），建议0.8
  太低了容易生成纯白色块（原理上，加了遮罩后，遮罩的部分是白色图像，以对应“空白”的潜空间）
  太高了容易完全重绘，与原图没关系

### 潜空间噪声蒙版版本

上一个版本重绘强度不能太低，那如何使用**更小的重绘强度**？

- 将VAE内补编码器替换成先连 \`VAE Encode\` (VAE编码) 再连 \`SetLatentNoiseMask\` (设置Latent澡波遮罩) 节点

核心

- 设置Latent澡波遮罩：将指定区域像素信息转为潜空间数据以后再做重新采样

原理

- 简单来说：
  第一个版本，相当于将遮罩部分抠下来，做一次文生图。
  而这个版本，相当于将遮罩部分抠下来，做一次图生图。
- 对应SD WebUI，局部重绘有不同的模式，可以切换为 “填充/原版/潜空间噪声/空白潜空间”
  默认的是 “原图” 模式，对应的就是这里的方式
  而 “空白潜空间” 模式，对应的就是前面说的重绘编码器版本

### 含蒙版翻转、收缩、模糊选项

无论是手涂还是智能识别生成的蒙版，蒙版边缘容易存在精度不足、过渡生硬的问题。
所以我们可能需要对蒙版进行二次处理。

在SD WebUI中，有 “柔和重绘” 这种东西。在ComfyUI里，他们被分散到一些对应功能的节点。比较常见的有：

- 扩展 (Grow)，蒙版向外延展，同ps。
  如果用的是 \`VAE Encode (for Inpainting)\` 节点，本身就有这个选项
  否则在两个mask handle之间增加一个 \`Grow Mask\` 节点
- 收缩。
  扩展节点不支持收缩，需要使用自定义节点。如 \`WAS节点包\` 里的 \`Erode Mask\` (腐蚀蒙版)
- 边缘模糊，即ps里的边缘羽化
  可以增加重绘区域与非重绘区域之间的柔和过度。
  有个不好用的：\`FeatherMask\`，但这个只能羽化整个图片边缘
  需要节点包：\`Impact Pack、Essentials\` 里的蒙版模糊 (Mask Blur)，用关键词Blur搜
- 蒙版反转 (Invert)
  自带节点和 \`WAS节点包\` 里都有这个功能
- 显示蒙版
  如果好奇处理后的蒙版长什么样子，可以使用 \`Convert Mask to Image\` + \`Save Image\` 节点来显示

### 上传蒙版版本

`],color:`#432`,bgcolor:`#653`}],r=[[4,6,0,3,1,`CONDITIONING`],[6,7,0,3,2,`CONDITIONING`],[22,8,0,9,0,`IMAGE`],[42,3,0,8,0,`LATENT`],[80,29,0,3,0,`MODEL`],[81,29,1,6,0,`CLIP`],[82,29,1,7,0,`CLIP`],[84,29,2,8,1,`VAE`],[89,20,0,35,0,`IMAGE`],[90,29,2,35,1,`VAE`],[91,35,0,33,0,`LATENT`],[92,20,1,33,1,`MASK`],[93,33,0,3,3,`LATENT`],[94,20,0,36,0,`IMAGE`]],i=[{title:`Load image and alpha mask for inpainting`,bounding:[-20,607,786,442],color:`#3f789e`,font_size:24,flags:{}}],a={},o={ds:{scale:1.191817653772724,offset:[733.2524400715455,-131.26574933878877]},"0246.VERSION":[0,0,4]},s=.4,c={last_node_id:37,last_link_id:94,nodes:n,links:r,groups:i,config:a,extra:o,version:s};export{a as config,c as default,o as extra,i as groups,t as last_link_id,e as last_node_id,r as links,n as nodes,s as version};
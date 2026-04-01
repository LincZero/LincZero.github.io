var e=20,t=34,n=[{id:5,type:`EmptyLatentImage`,pos:{0:435,1:600},size:{0:315,1:106},flags:{},order:0,mode:0,inputs:[],outputs:[{name:`LATENT`,type:`LATENT`,links:[2],slot_index:0,label:`Latent`}],properties:{"Node name for S&R":`EmptyLatentImage`},widgets_values:[768,768,1]},{id:12,type:`SaveImage`,pos:{0:1990,1:110},size:{0:407.53717041015625,1:468.13226318359375},flags:{},order:9,mode:0,inputs:[{name:`images`,type:`IMAGE`,link:25,label:`图像`}],outputs:[],properties:{},widgets_values:[`ComfyUI`]},{id:18,type:`VAEDecode`,pos:{0:1280,1:130},size:{0:210,1:46},flags:{},order:7,mode:0,inputs:[{name:`samples`,type:`LATENT`,link:26,label:`Latent`},{name:`vae`,type:`VAE`,link:28,slot_index:1,label:`VAE`}],outputs:[{name:`IMAGE`,type:`IMAGE`,links:[29],slot_index:0,shape:3,label:`图像`}],properties:{"Node name for S&R":`VAEDecode`},widgets_values:[]},{id:7,type:`CLIPTextEncode`,pos:{0:377,1:381},size:{0:425.27801513671875,1:180.6060791015625},flags:{},order:5,mode:0,inputs:[{name:`clip`,type:`CLIP`,link:20,label:`CLIP`}],outputs:[{name:`CONDITIONING`,type:`CONDITIONING`,links:[6,32],slot_index:0,label:`条件`}],properties:{"Node name for S&R":`CLIPTextEncode`},widgets_values:[`(worst quality), (low quality), (normal quality), lowres, bad anatomy, watermark `]},{id:16,type:`CheckpointLoaderSimple`,pos:{0:30,1:320},size:{0:315,1:98},flags:{},order:1,mode:0,inputs:[],outputs:[{name:`MODEL`,type:`MODEL`,links:[18,30],slot_index:0,label:`模型`},{name:`CLIP`,type:`CLIP`,links:[19,20],slot_index:1,label:`CLIP`},{name:`VAE`,type:`VAE`,links:[28,33],slot_index:2,label:`VAE`}],properties:{"Node name for S&R":`CheckpointLoaderSimple`},widgets_values:[`majicmixLux_v3.safetensors`]},{id:6,type:`CLIPTextEncode`,pos:{0:374,1:171},size:{0:422.84503173828125,1:164.31304931640625},flags:{},order:4,mode:0,inputs:[{name:`clip`,type:`CLIP`,link:19,label:`CLIP`}],outputs:[{name:`CONDITIONING`,type:`CONDITIONING`,links:[4,31],slot_index:0,label:`条件`}],properties:{"Node name for S&R":`CLIPTextEncode`},widgets_values:[`1girl, detailed background filled with (many:1.1) (colorful:1.1) (flowers):1.1, (quality:1.1), (photorealistic:1.1), (resolution:1.1), (sharpness:1.1), (cinematic lighting), depth of field, 
photographed by Canan EOS R6, 135mm, 1/1250s, f/2.8, ISO 400,`]},{id:20,type:`Note`,pos:{0:-606,1:61},size:{0:573.9961547851562,1:1163.5120849609375},flags:{},order:2,mode:0,inputs:[],outputs:[],properties:{},widgets_values:[`## Stable Diffustion 方式

在SD UI里，有三种方式：
1. 文生图的 "高清修复" (Hi-res fix)
2. 图生图的 "SD放大" (SD Upscale) 脚本
3. 后期处理中的算法放大

## ComfyUI 方式

而ComfyUI里，也有类似的方式，例如官方示例/2_pass_text2img的方式
里面有三个图(工作流)：
1. hiresfix_latent_workflow (标准的文生图高清修复工作流)
2. hiresfix_esrgan_workflow
3. latent_upscale_different_prompt_model

除了官方示例里提供的方法外，还有其他的几种方法，下面会说

### Latent放大

hiresfix_latent_workflow

核心：

1. Upscale Latent节点
   将一开始的768尺寸放大到1152尺寸
   该节点还有另一个版本：Upscale Latent By，按倍数进行缩放
2. 第二个KSample节点
   注意该方式只会做拉伸，并不会对原图进行细节的填充，所以还需要重新采样一次
   于是就有了第二次KSample

要项：

1. 降噪强度(重绘强度)
   第二个KSampler相当于图生图的采样器，denoise决定第二次生成的降噪力度。拉到1相当于重新生成一张图。
   推荐：0.5~0.8 (更像~更多细节，不要低于0.5，不然容易出现噪声没去干净)

哪怕降噪强度0.5也出现更多细节怎么办？例如多手多头。这时需要使用第二个降噪工作流 hiresfix_esrgan_workflow

### 放大模型放大

hiresfix_esrgan_workflow

借助ESRGAN等传统放大模型来实现这个放大过程，更复杂

核心：

1. VAE Decode，先解码成图片格式
2. 放大图片
   - Load Upscale Model，放大模型加载器
   - Upscale Image (using Model)，放大图片
   - Upscale Image
   这里的 Upscale Latent、Upscale Image 都是很像的，也都有by版本
3. VAE Encode，图片重新编码回来
4. 再KSampler图生图

要项：

- 这种方式在重绘时，哪怕以0.2~0.3这种低降噪采样，也不会出现噪声痕迹。
  即比Latent缩放的流程多出来的步骤，能让图片在重绘时使用更低的降噪采样。
  原因是：先解码变成图片，然后使用超分辨率放大模型的放大并不会轻易改变图片的原有内容（这与Latent直接缩放不同）
- 放大模型的选择
  \`Load Upscale Model\` 可以选择放大模型 (模型在 \`ComfyUI根目录/models/upscale_models\`)
  \`RealESRGAN_x4plus.pth\`，R-ESRGAN的4倍放大模型，目前泛用效果好的，适用于照片风格
  \`Anime 6B\` 适用于动漫插画风格的图像
  \`4xUltrasharp_4xUltrasharpV10.pth\` 放大过程中进行锐化
  （SD WebUI高清修复中选择放大算法时，就是选择的这些）

选用、缺点：

1. 低效。与Latent缩放相比，需要更多的计算和时间，容易暴显存
2. 降噪低不易重绘时增添更多细节，只是单纯放大原图容易让结果显得 “油腻”。而降噪高容易多手多头

### 后期处理放大

要项：

- 放大模型加载器中，通常模型自带一个缩放倍数。如果想要再调整大小，需要额外加一个 Upscale Image By 节点

### 放大 脚本

放大再采样时（采样一个大的东西）容易爆显存
在SD里有一个脚本 (SD upscale) 用于专门解决这个问题
后面还有升级版 (SD upscale Ultimate)，ComfyUI也有这个节点

核心：

原理是将图片分块，依次重绘再拼接

优点：

- 使用显存非常少
- 使用非常简单

`],color:`#432`,bgcolor:`#653`},{id:17,type:`UltimateSDUpscale`,pos:{0:1530,1:110},size:{0:320,1:830},flags:{},order:8,mode:0,inputs:[{name:`image`,type:`IMAGE`,link:29,label:`图像`},{name:`model`,type:`MODEL`,link:30,label:`模型`},{name:`positive`,type:`CONDITIONING`,link:31,label:`正面条件`},{name:`negative`,type:`CONDITIONING`,link:32,label:`负面条件`},{name:`vae`,type:`VAE`,link:33,label:`VAE`},{name:`upscale_model`,type:`UPSCALE_MODEL`,link:34,slot_index:5,label:`放大模型`}],outputs:[{name:`IMAGE`,type:`IMAGE`,links:[25],slot_index:0,shape:3,label:`图像`}],properties:{"Node name for S&R":`UltimateSDUpscale`},widgets_values:[2,697260984306782,`randomize`,20,8,`euler`,`normal`,.2,`Linear`,512,512,8,32,`None`,1,64,8,16,!0,!1]},{id:3,type:`KSampler`,pos:{0:845,1:172},size:{0:320,1:470},flags:{},order:6,mode:0,inputs:[{name:`model`,type:`MODEL`,link:18,label:`模型`},{name:`positive`,type:`CONDITIONING`,link:4,label:`正面条件`},{name:`negative`,type:`CONDITIONING`,link:6,label:`负面条件`},{name:`latent_image`,type:`LATENT`,link:2,label:`Latent`}],outputs:[{name:`LATENT`,type:`LATENT`,links:[26],slot_index:0,label:`Latent`}],properties:{"Node name for S&R":`KSampler`},widgets_values:[0xc193229ef4c1,`fixed`,20,8,`dpmpp_2m`,`karras`,1]},{id:19,type:`UpscaleModelLoader`,pos:{0:1200,1:290},size:{0:315,1:58},flags:{},order:3,mode:0,inputs:[],outputs:[{name:`UPSCALE_MODEL`,type:`UPSCALE_MODEL`,links:[34],shape:3,label:`放大模型`}],properties:{"Node name for S&R":`UpscaleModelLoader`},widgets_values:[`4xUltrasharp_4xUltrasharpV10.pt`]}],r=[[2,5,0,3,3,`LATENT`],[4,6,0,3,1,`CONDITIONING`],[6,7,0,3,2,`CONDITIONING`],[18,16,0,3,0,`MODEL`],[19,16,1,6,0,`CLIP`],[20,16,1,7,0,`CLIP`],[25,17,0,12,0,`IMAGE`],[26,3,0,18,0,`LATENT`],[28,16,2,18,1,`VAE`],[29,18,0,17,0,`IMAGE`],[30,16,0,17,1,`MODEL`],[31,6,0,17,2,`CONDITIONING`],[32,7,0,17,3,`CONDITIONING`],[33,16,2,17,4,`VAE`],[34,19,0,17,5,`UPSCALE_MODEL`]],i=[{title:`Save Final Image`,bounding:[1949,31,483,199],color:`#3f789e`,font_size:24,flags:{}},{title:`Ultimate Upscale`,bounding:[1224,29,715,707],color:`#A88`,font_size:24,flags:{}},{title:`Txt2Img`,bounding:[-1,30,1211,708],color:`#a1309b`,font_size:24,flags:{}}],a={},o={ds:{scale:.7400249944258175,offset:[908.8157263963966,99.87059505287436]},"0246.VERSION":[0,0,4]},s=.4,c={last_node_id:20,last_link_id:34,nodes:n,links:r,groups:i,config:a,extra:o,version:s};export{a as config,c as default,o as extra,i as groups,t as last_link_id,e as last_node_id,r as links,n as nodes,s as version};
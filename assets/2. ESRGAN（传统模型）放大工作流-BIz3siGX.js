var e=26,t=35,n=[{id:8,type:`VAEDecode`,pos:{0:1185.5013427734375,1:412.0678405761719},size:{0:210,1:46},flags:{},order:7,mode:0,inputs:[{name:`samples`,type:`LATENT`,link:7,label:`samples`},{name:`vae`,type:`VAE`,link:30,label:`vae`}],outputs:[{name:`IMAGE`,type:`IMAGE`,links:[9],slot_index:0,label:`IMAGE`}],properties:{"Node name for S&R":`VAEDecode`},widgets_values:[]},{id:13,type:`VAEDecode`,pos:{0:3221.219970703125,1:232.3800506591797},size:{0:210,1:46},flags:{},order:14,mode:0,inputs:[{name:`samples`,type:`LATENT`,link:15,label:`samples`},{name:`vae`,type:`VAE`,link:33,label:`vae`}],outputs:[{name:`IMAGE`,type:`IMAGE`,links:[17],slot_index:0,label:`IMAGE`}],properties:{"Node name for S&R":`VAEDecode`},widgets_values:[]},{id:6,type:`CLIPTextEncode`,pos:{0:81.780029296875,1:142.33999633789062},size:{0:422.84503173828125,1:164.31304931640625},flags:{},order:4,mode:0,inputs:[{name:`clip`,type:`CLIP`,link:28,label:`clip`}],outputs:[{name:`CONDITIONING`,type:`CONDITIONING`,links:[4,12],slot_index:0,label:`CONDITIONING`}],properties:{"Node name for S&R":`CLIPTextEncode`},widgets_values:[`masterpiece HDR victorian portrait painting of woman, blonde hair, mountain nature, blue sky
`]},{id:7,type:`CLIPTextEncode`,pos:{0:84.780029296875,1:352.3399963378906},size:{0:425.27801513671875,1:180.6060791015625},flags:{},order:5,mode:0,inputs:[{name:`clip`,type:`CLIP`,link:29,label:`clip`}],outputs:[{name:`CONDITIONING`,type:`CONDITIONING`,links:[6,13],slot_index:0,label:`CONDITIONING`}],properties:{"Node name for S&R":`CLIPTextEncode`},widgets_values:[`bad hands, text, watermark
`]},{id:5,type:`EmptyLatentImage`,pos:{0:142.780029296875,1:571.3400268554688},size:{0:315,1:106},flags:{},order:0,mode:0,inputs:[],outputs:[{name:`LATENT`,type:`LATENT`,links:[2],slot_index:0,label:`LATENT`}],properties:{"Node name for S&R":`EmptyLatentImage`},widgets_values:[768,768,1]},{id:3,type:`KSampler`,pos:{0:552.780029296875,1:143.33999633789062},size:{0:315,1:262},flags:{},order:6,mode:0,inputs:[{name:`model`,type:`MODEL`,link:34,label:`model`},{name:`positive`,type:`CONDITIONING`,link:4,label:`positive`},{name:`negative`,type:`CONDITIONING`,link:6,label:`negative`},{name:`latent_image`,type:`LATENT`,link:2,label:`latent_image`}],outputs:[{name:`LATENT`,type:`LATENT`,links:[7,20],slot_index:0,label:`LATENT`}],properties:{"Node name for S&R":`KSampler`},widgets_values:[0xe47ce4f662fc,`randomize`,12,8,`dpmpp_sde`,`normal`,1]},{id:21,type:`VAEDecode`,pos:{0:988.1799926757812,1:29.559995651245117},size:{0:210,1:46},flags:{},order:8,mode:0,inputs:[{name:`samples`,type:`LATENT`,link:20,label:`samples`},{name:`vae`,type:`VAE`,link:32,label:`vae`}],outputs:[{name:`IMAGE`,type:`IMAGE`,links:[23],slot_index:0,label:`IMAGE`}],properties:{"Node name for S&R":`VAEDecode`},widgets_values:[]},{id:20,type:`VAEEncode`,pos:{0:2459.099609375,1:103.0200424194336},size:{0:210,1:46},flags:{},order:12,mode:0,inputs:[{name:`pixels`,type:`IMAGE`,link:26,label:`pixels`},{name:`vae`,type:`VAE`,link:31,label:`vae`}],outputs:[{name:`LATENT`,type:`LATENT`,links:[18],slot_index:0,label:`LATENT`}],properties:{"Node name for S&R":`VAEEncode`},widgets_values:[]},{id:22,type:`ImageUpscaleWithModel`,pos:{0:1631.0599365234375,1:3.6599864959716797},size:{0:226.8000030517578,1:46},flags:{},order:10,mode:0,inputs:[{name:`upscale_model`,type:`UPSCALE_MODEL`,link:24,label:`upscale_model`},{name:`image`,type:`IMAGE`,link:23,label:`image`}],outputs:[{name:`IMAGE`,type:`IMAGE`,links:[27],slot_index:0,label:`IMAGE`}],properties:{"Node name for S&R":`ImageUpscaleWithModel`},widgets_values:[]},{id:9,type:`SaveImage`,pos:{0:1446,1:411},size:{0:611.2635498046875,1:628.5978393554688},flags:{},order:9,mode:0,inputs:[{name:`images`,type:`IMAGE`,link:9,label:`images`}],outputs:[],properties:{},widgets_values:[`ComfyUI`]},{id:24,type:`ImageScale`,pos:{0:1931,1:10},size:{0:315,1:130},flags:{},order:11,mode:0,inputs:[{name:`image`,type:`IMAGE`,link:27,label:`image`}],outputs:[{name:`IMAGE`,type:`IMAGE`,links:[26],slot_index:0,label:`IMAGE`}],properties:{"Node name for S&R":`ImageScale`},widgets_values:[`bilinear`,1536,1536,`disabled`]},{id:12,type:`SaveImage`,pos:{0:3463,1:230},size:{0:868.0108642578125,1:936.9744873046875},flags:{},order:15,mode:0,inputs:[{name:`images`,type:`IMAGE`,link:17,label:`images`}],outputs:[],properties:{},widgets_values:[`ComfyUI`]},{id:11,type:`KSampler`,pos:{0:2811.9580078125,1:176.22007751464844},size:{0:315,1:262},flags:{},order:13,mode:0,inputs:[{name:`model`,type:`MODEL`,link:35,slot_index:0,label:`model`},{name:`positive`,type:`CONDITIONING`,link:12,slot_index:1,label:`positive`},{name:`negative`,type:`CONDITIONING`,link:13,slot_index:2,label:`negative`},{name:`latent_image`,type:`LATENT`,link:18,slot_index:3,label:`latent_image`}],outputs:[{name:`LATENT`,type:`LATENT`,links:[15],slot_index:0,label:`LATENT`}],properties:{"Node name for S&R":`KSampler`},widgets_values:[783745448521451,`randomize`,14,8,`uni_pc_bh2`,`normal`,.5]},{id:25,type:`CheckpointLoaderSimple`,pos:{0:-262,1:284},size:{0:315,1:98},flags:{},order:1,mode:0,inputs:[],outputs:[{name:`MODEL`,type:`MODEL`,links:[34,35],slot_index:0,label:`MODEL`},{name:`CLIP`,type:`CLIP`,links:[28,29],slot_index:1,label:`CLIP`},{name:`VAE`,type:`VAE`,links:[30,31,32,33],slot_index:2,label:`VAE`}],properties:{"Node name for S&R":`CheckpointLoaderSimple`},widgets_values:[`v2-1_768-ema-pruned.ckpt`]},{id:23,type:`UpscaleModelLoader`,pos:{0:1288.0599365234375,1:-39.34001159667969},size:{0:315,1:58},flags:{},order:2,mode:0,inputs:[],outputs:[{name:`UPSCALE_MODEL`,type:`UPSCALE_MODEL`,links:[24],slot_index:0,label:`UPSCALE_MODEL`}],properties:{"Node name for S&R":`UpscaleModelLoader`},widgets_values:[`RealESRGAN_x4plus.pth`]},{id:26,type:`Note`,pos:{0:-961,1:28},size:[637.5789549206041,843.344421510058],flags:{},order:3,mode:0,inputs:[],outputs:[],properties:{},widgets_values:[`## Stable Diffustion 方式

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

### hiresfix_latent_workflow

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

### hiresfix_esrgan_workflow

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
`],color:`#432`,bgcolor:`#653`}],r=[[2,5,0,3,3,`LATENT`],[4,6,0,3,1,`CONDITIONING`],[6,7,0,3,2,`CONDITIONING`],[7,3,0,8,0,`LATENT`],[9,8,0,9,0,`IMAGE`],[12,6,0,11,1,`CONDITIONING`],[13,7,0,11,2,`CONDITIONING`],[15,11,0,13,0,`LATENT`],[17,13,0,12,0,`IMAGE`],[18,20,0,11,3,`LATENT`],[20,3,0,21,0,`LATENT`],[23,21,0,22,1,`IMAGE`],[24,23,0,22,0,`UPSCALE_MODEL`],[26,24,0,20,0,`IMAGE`],[27,22,0,24,0,`IMAGE`],[28,25,1,6,0,`CLIP`],[29,25,1,7,0,`CLIP`],[30,25,2,8,1,`VAE`],[31,25,2,20,1,`VAE`],[32,25,2,21,1,`VAE`],[33,25,2,13,1,`VAE`],[34,25,0,3,0,`MODEL`],[35,25,0,11,0,`MODEL`]],i=[{title:`Downscale image to a more reasonable size`,bounding:[1852,-74,483,245],color:`#8AA`,font_size:24,flags:{}},{title:`Encode back to latent space`,bounding:[2407,14,312,157],color:`#A88`,font_size:24,flags:{}},{title:`Decode to Pixel space`,bounding:[953,-46,285,142],color:`#A88`,font_size:24,flags:{}},{title:`ESRGAN upscale with 4x model`,bounding:[1259,-117,578,184],color:`#3f789e`,font_size:24,flags:{}},{title:`Save Final Image`,bounding:[3210,139,483,199],color:`#3f789e`,font_size:24,flags:{}},{title:`Second pass`,bounding:[2782,97,379,429],color:`#444`,font_size:24,flags:{}},{title:`Save Intermediate Image`,bounding:[1175,335,516,196],color:`#3f789e`,font_size:24,flags:{}},{title:`Txt2Img`,bounding:[-294,0,1211,708],color:`#a1309b`,font_size:24,flags:{}}],a={},o={ds:{scale:.620921323059155,offset:[1850.8551371787914,490.3381454257473]},"0246.VERSION":[0,0,4]},s=.4,c={last_node_id:26,last_link_id:35,nodes:n,links:r,groups:i,config:a,extra:o,version:s};export{a as config,c as default,o as extra,i as groups,t as last_link_id,e as last_node_id,r as links,n as nodes,s as version};
var e=8,t=6,n=[{id:3,type:`LoadImage`,pos:{0:600,1:330},size:{0:280,1:314},flags:{},order:0,mode:0,inputs:[],outputs:[{name:`IMAGE`,type:`IMAGE`,links:[2],slot_index:0,shape:3,label:`图像`},{name:`MASK`,type:`MASK`,links:null,shape:3,label:`遮罩`}],properties:{"Node name for S&R":`LoadImage`},widgets_values:[`00000-334733896.png`,`image`]},{id:6,type:`ImageScaleBy`,pos:{0:910,1:520},size:{0:315,1:82},flags:{},order:4,mode:0,inputs:[{name:`image`,type:`IMAGE`,link:5,label:`图像`}],outputs:[{name:`IMAGE`,type:`IMAGE`,links:[6],slot_index:0,shape:3,label:`图像`}],properties:{"Node name for S&R":`ImageScaleBy`},widgets_values:[`nearest-exact`,.5]},{id:7,type:`SaveImage`,pos:{0:1250,1:320},size:{0:315,1:58},flags:{},order:5,mode:0,inputs:[{name:`images`,type:`IMAGE`,link:6,label:`图像`}],outputs:[],properties:{},widgets_values:[`ComfyUI`]},{id:5,type:`UpscaleModelLoader`,pos:{0:910,1:320},size:{0:315,1:58},flags:{},order:1,mode:0,inputs:[],outputs:[{name:`UPSCALE_MODEL`,type:`UPSCALE_MODEL`,links:[4],shape:3,label:`放大模型`,slot_index:0}],properties:{"Node name for S&R":`UpscaleModelLoader`},widgets_values:[`RealESRGAN_x4plus.pth`]},{id:2,type:`ImageUpscaleWithModel`,pos:{0:950,1:430},size:{0:241.79998779296875,1:46},flags:{},order:3,mode:0,inputs:[{name:`upscale_model`,type:`UPSCALE_MODEL`,link:4,slot_index:0,label:`放大模型`},{name:`image`,type:`IMAGE`,link:2,slot_index:1,label:`图像`}],outputs:[{name:`IMAGE`,type:`IMAGE`,links:[5],slot_index:0,shape:3,label:`图像`}],properties:{"Node name for S&R":`ImageUpscaleWithModel`},widgets_values:[]},{id:8,type:`Note`,pos:{0:-33,1:328},size:[599.6632776624534,977.7704646144175],flags:{},order:2,mode:0,inputs:[],outputs:[],properties:{},widgets_values:[`## Stable Diffustion 方式

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
- 放大再采样时（采样一个大的东西）容易爆显存
  在SD里有一个脚本 (SD upscale) 用于专门解决这个问题，原理是将图片分块，依次重绘`],color:`#432`,bgcolor:`#653`}],r=[[2,3,0,2,1,`IMAGE`],[4,5,0,2,0,`UPSCALE_MODEL`],[5,2,0,6,0,`IMAGE`],[6,6,0,7,0,`IMAGE`]],i=[],a={},o={ds:{scale:.9849732675807631,offset:[651.6132957759582,-201.78445142917798]},"0246.VERSION":[0,0,4]},s=.4,c={last_node_id:8,last_link_id:6,nodes:n,links:r,groups:i,config:a,extra:o,version:s};export{a as config,c as default,o as extra,i as groups,t as last_link_id,e as last_node_id,r as links,n as nodes,s as version};
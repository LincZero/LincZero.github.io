var e=17,t=23,n=[{id:8,type:`VAEDecode`,pos:{0:1235.7215576171875,1:577.1878662109375},size:{0:210,1:46},flags:{},order:6,mode:0,inputs:[{name:`samples`,type:`LATENT`,link:7,label:`samples`},{name:`vae`,type:`VAE`,link:21,label:`vae`}],outputs:[{name:`IMAGE`,type:`IMAGE`,links:[9],slot_index:0,label:`IMAGE`}],properties:{"Node name for S&R":`VAEDecode`},widgets_values:[]},{id:10,type:`LatentUpscale`,pos:{0:1238,1:170},size:{0:315,1:130},flags:{},order:7,mode:0,inputs:[{name:`samples`,type:`LATENT`,link:10,label:`samples`}],outputs:[{name:`LATENT`,type:`LATENT`,links:[14],label:`LATENT`}],properties:{"Node name for S&R":`LatentUpscale`},widgets_values:[`nearest-exact`,1152,1152,`disabled`]},{id:13,type:`VAEDecode`,pos:{0:1961,1:125},size:{0:210,1:46},flags:{},order:10,mode:0,inputs:[{name:`samples`,type:`LATENT`,link:15,label:`samples`},{name:`vae`,type:`VAE`,link:22,label:`vae`}],outputs:[{name:`IMAGE`,type:`IMAGE`,links:[17],slot_index:0,label:`IMAGE`}],properties:{"Node name for S&R":`VAEDecode`},widgets_values:[]},{id:6,type:`CLIPTextEncode`,pos:{0:374,1:171},size:{0:422.84503173828125,1:164.31304931640625},flags:{},order:3,mode:0,inputs:[{name:`clip`,type:`CLIP`,link:19,label:`clip`}],outputs:[{name:`CONDITIONING`,type:`CONDITIONING`,links:[4,12],slot_index:0,label:`CONDITIONING`}],properties:{"Node name for S&R":`CLIPTextEncode`},widgets_values:[`masterpiece HDR victorian portrait painting of woman, blonde hair, mountain nature, blue sky
`]},{id:5,type:`EmptyLatentImage`,pos:{0:435,1:600},size:{0:315,1:106},flags:{},order:0,mode:0,inputs:[],outputs:[{name:`LATENT`,type:`LATENT`,links:[2],slot_index:0,label:`LATENT`}],properties:{"Node name for S&R":`EmptyLatentImage`},widgets_values:[768,768,1]},{id:11,type:`KSampler`,pos:{0:1585,1:114},size:{0:315,1:262},flags:{},order:9,mode:0,inputs:[{name:`model`,type:`MODEL`,link:23,slot_index:0,label:`model`},{name:`positive`,type:`CONDITIONING`,link:12,slot_index:1,label:`positive`},{name:`negative`,type:`CONDITIONING`,link:13,slot_index:2,label:`negative`},{name:`latent_image`,type:`LATENT`,link:14,slot_index:3,label:`latent_image`}],outputs:[{name:`LATENT`,type:`LATENT`,links:[15],slot_index:0,label:`LATENT`}],properties:{"Node name for S&R":`KSampler`},widgets_values:[497066463919513,`randomize`,14,8,`dpmpp_2m`,`simple`,.5]},{id:12,type:`SaveImage`,pos:{0:2203,1:123},size:{0:407.53717041015625,1:468.13226318359375},flags:{},order:11,mode:0,inputs:[{name:`images`,type:`IMAGE`,link:17,label:`images`}],outputs:[],properties:{},widgets_values:[`ComfyUI`]},{id:3,type:`KSampler`,pos:{0:845,1:172},size:{0:315,1:262},flags:{},order:5,mode:0,inputs:[{name:`model`,type:`MODEL`,link:18,label:`model`},{name:`positive`,type:`CONDITIONING`,link:4,label:`positive`},{name:`negative`,type:`CONDITIONING`,link:6,label:`negative`},{name:`latent_image`,type:`LATENT`,link:2,label:`latent_image`}],outputs:[{name:`LATENT`,type:`LATENT`,links:[7,10],slot_index:0,label:`LATENT`}],properties:{"Node name for S&R":`KSampler`},widgets_values:[748940210657206,`randomize`,12,8,`dpmpp_sde`,`normal`,1]},{id:9,type:`SaveImage`,pos:{0:1495.7215576171875,1:576.1878662109375},size:{0:232.94032287597656,1:282.4336242675781},flags:{},order:8,mode:0,inputs:[{name:`images`,type:`IMAGE`,link:9,label:`images`}],outputs:[],properties:{},widgets_values:[`ComfyUI`]},{id:16,type:`CheckpointLoaderSimple`,pos:{0:24,1:315},size:{0:315,1:98},flags:{},order:1,mode:0,inputs:[],outputs:[{name:`MODEL`,type:`MODEL`,links:[18,23],slot_index:0,label:`MODEL`},{name:`CLIP`,type:`CLIP`,links:[19,20],slot_index:1,label:`CLIP`},{name:`VAE`,type:`VAE`,links:[21,22],slot_index:2,label:`VAE`}],properties:{"Node name for S&R":`CheckpointLoaderSimple`},widgets_values:[`v2-1_768-ema-pruned.ckpt`]},{id:7,type:`CLIPTextEncode`,pos:{0:377,1:381},size:{0:425.27801513671875,1:180.6060791015625},flags:{},order:4,mode:0,inputs:[{name:`clip`,type:`CLIP`,link:20,label:`clip`}],outputs:[{name:`CONDITIONING`,type:`CONDITIONING`,links:[6,13],slot_index:0,label:`CONDITIONING`}],properties:{"Node name for S&R":`CLIPTextEncode`},widgets_values:[`bad hands, text, watermark
`]},{id:17,type:`Note`,pos:{0:10,1:799},size:[809.2703886133163,489.22022728532056],flags:{},order:2,mode:0,inputs:[],outputs:[],properties:{},widgets_values:[`## Stable Diffustion 方式

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

1. 使用Upscale Latent节点，将一开始的768尺寸放大到1152尺寸
   该节点还有另一个版本：Upscale Latent By，按倍数进行缩放
2. 注意该方式只会做拉伸，并不会对原图进行细节的填充，所以还需要重新采样一次
   于是就有了第二次KSample

要项：

1. 降噪强度(重绘强度)
   第二个KSampler相当于图生图的采样器，denoise决定第二次生成的降噪力度。拉到1相当于重新生成一张图。
   推荐：0.5~0.8 (更像~更多细节，不要低于0.5，不然容易出现噪声没去干净)

哪怕降噪强度0.5也出现更多细节怎么办？例如多手多头。这时需要使用第二个降噪工作流 hiresfix_esrgan_workflow

### hiresfix_esrgan_workflow

借助ESRGAN等传统放大模型来实现这个放大过程

更复杂

`],color:`#432`,bgcolor:`#653`}],r=[[2,5,0,3,3,`LATENT`],[4,6,0,3,1,`CONDITIONING`],[6,7,0,3,2,`CONDITIONING`],[7,3,0,8,0,`LATENT`],[9,8,0,9,0,`IMAGE`],[10,3,0,10,0,`LATENT`],[12,6,0,11,1,`CONDITIONING`],[13,7,0,11,2,`CONDITIONING`],[14,10,0,11,3,`LATENT`],[15,11,0,13,0,`LATENT`],[17,13,0,12,0,`IMAGE`],[18,16,0,3,0,`MODEL`],[19,16,1,6,0,`CLIP`],[20,16,1,7,0,`CLIP`],[21,16,2,8,1,`VAE`],[22,16,2,13,1,`VAE`],[23,16,0,11,0,`MODEL`]],i=[{title:`Txt2Img`,bounding:[-1,30,1211,708],color:`#a1309b`,font_size:24,flags:{}},{title:`Save Intermediate Image`,bounding:[1225,500,516,196],color:`#3f789e`,font_size:24,flags:{}},{title:`Hires Fix`,bounding:[1224,29,710,464],color:`#b58b2a`,font_size:24,flags:{}},{title:`Save Final Image`,bounding:[1949,31,483,199],color:`#3f789e`,font_size:24,flags:{}}],a={},o={ds:{scale:1,offset:[79.7296113866837,-337.5535555323909]},"0246.VERSION":[0,0,4]},s=.4,c={last_node_id:17,last_link_id:23,nodes:n,links:r,groups:i,config:a,extra:o,version:s};export{a as config,c as default,o as extra,i as groups,t as last_link_id,e as last_node_id,r as links,n as nodes,s as version};
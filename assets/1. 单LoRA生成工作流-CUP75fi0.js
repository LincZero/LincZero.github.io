var e=11,t=14,n=[{id:3,type:`KSampler`,pos:{0:863,1:186},size:{0:315,1:262},flags:{},order:6,mode:0,inputs:[{name:`model`,type:`MODEL`,link:14,label:`模型`},{name:`positive`,type:`CONDITIONING`,link:4,label:`正面条件`},{name:`negative`,type:`CONDITIONING`,link:6,label:`负面条件`},{name:`latent_image`,type:`LATENT`,link:2,label:`Latent`}],outputs:[{name:`LATENT`,type:`LATENT`,links:[7],slot_index:0,label:`Latent`}],properties:{"Node name for S&R":`KSampler`},widgets_values:[0x8e7ff42ed37e,`randomize`,20,8,`euler`,`normal`,1]},{id:8,type:`VAEDecode`,pos:{0:1209,1:188},size:{0:210,1:46},flags:{},order:7,mode:0,inputs:[{name:`samples`,type:`LATENT`,link:7,label:`Latent`},{name:`vae`,type:`VAE`,link:8,label:`VAE`}],outputs:[{name:`IMAGE`,type:`IMAGE`,links:[9],slot_index:0,label:`图像`}],properties:{"Node name for S&R":`VAEDecode`},widgets_values:[]},{id:9,type:`SaveImage`,pos:{0:1451,1:189},size:{0:210,1:58},flags:{},order:8,mode:0,inputs:[{name:`images`,type:`IMAGE`,link:9,label:`图像`}],outputs:[],properties:{},widgets_values:[`ComfyUI`]},{id:4,type:`CheckpointLoaderSimple`,pos:{0:-290,1:450},size:{0:315,1:98},flags:{},order:0,mode:0,inputs:[],outputs:[{name:`MODEL`,type:`MODEL`,links:[10],slot_index:0,label:`模型`},{name:`CLIP`,type:`CLIP`,links:[11],slot_index:1,label:`CLIP`},{name:`VAE`,type:`VAE`,links:[8],slot_index:2,label:`VAE`}],properties:{"Node name for S&R":`CheckpointLoaderSimple`},widgets_values:[`AWPainting_v1.3.safetensors`]},{id:10,type:`LoraLoader`,pos:{0:60,1:430},size:{0:315,1:126},flags:{},order:3,mode:0,inputs:[{name:`model`,type:`MODEL`,link:10,label:`模型`},{name:`clip`,type:`CLIP`,link:11,label:`CLIP`}],outputs:[{name:`MODEL`,type:`MODEL`,links:[14],slot_index:0,shape:3,label:`模型`},{name:`CLIP`,type:`CLIP`,links:[12,13],slot_index:1,shape:3,label:`CLIP`}],properties:{"Node name for S&R":`LoraLoader`},widgets_values:[`ganyu_ned2_offset.safetensors`,1,1]},{id:6,type:`CLIPTextEncode`,pos:{0:415,1:186},size:{0:422.84503173828125,1:164.31304931640625},flags:{},order:4,mode:0,inputs:[{name:`clip`,type:`CLIP`,link:12,label:`CLIP`}],outputs:[{name:`CONDITIONING`,type:`CONDITIONING`,links:[4],slot_index:0,label:`条件`}],properties:{"Node name for S&R":`CLIPTextEncode`},widgets_values:[`sfw, ganyu \\(genshin impact\\), 1girl, ahoge, architecture, bangs, bare shoulders, bell, black gloves, black pantyhose, ((blue hair)), blush, breasts, chinese knot, detached sleeves, east asian architecture, flower knot, gloves, horns, long hair, looking at viewer, neck bell, night, outdoors, pantyhose, purple eyes, sidelocks, solo, tassel,  white sleeves, ((masterpiece))`]},{id:7,type:`CLIPTextEncode`,pos:{0:413,1:389},size:{0:425.27801513671875,1:180.6060791015625},flags:{},order:5,mode:0,inputs:[{name:`clip`,type:`CLIP`,link:13,label:`CLIP`}],outputs:[{name:`CONDITIONING`,type:`CONDITIONING`,links:[6],slot_index:0,label:`条件`}],properties:{"Node name for S&R":`CLIPTextEncode`},widgets_values:[`worst quality, ugly, blurry,`]},{id:5,type:`EmptyLatentImage`,pos:{0:473,1:609},size:{0:315,1:106},flags:{},order:1,mode:0,inputs:[],outputs:[{name:`LATENT`,type:`LATENT`,links:[2],slot_index:0,label:`Latent`}],properties:{"Node name for S&R":`EmptyLatentImage`},widgets_values:[512,768,1]},{id:11,type:`Note`,pos:{0:-824,1:126},size:[520.2853334580624,738.9541604871242],flags:{},order:2,mode:0,inputs:[],outputs:[],properties:{},widgets_values:[`# 附加网络 (Additional Network)

是一个比较笼统的称呼，指SD生成中附加在最大的模型 (Checkpoint) 上的一些其他辅助性质的小模型

这些小模型的分类和作用：最常使用的三类：

- 词嵌入 (Embeddings)
- LoRA
- ControlNet

作用：提高生图质量、创作独特风格、精准控制画面

## 词嵌入 (Embeddings)

使用最简单的是Embedding，按 \`Embedding:+模型名(不包含后缀)\` 的形式填入提示词
如果开启了 Custom Scripts，可以方便地辅助输入该功能

## LoRA

与SD WebUI不同：

> 在SD WebUI中，可以用和Embedding类型的方式置入提示词中，如 \`<lora:A-> Pixel_f2:1>\`
> 
> 但在ComfyUI中不行！
> 
> 原因：Embedding本质上是一系列提示词向量的“合集”，而LoRA则是一组经过再训练的、从大模型上“提炼”出来的“附加权重”

使用：

- 使用LoRA加载器节点，放在Checkpoint Loader节点的后面
- 多个LoRA节点：直接串联他们就行了

原理：

- 可以将LoRA视做附加在主模型上的小模型，可以将checkpoint与后面被附加LoRA的部分视作一个“新的模型”

要项：

- strength_model、strength_clip 是LoRA的权重
  - 与WebUI不同：这里是两个权重，而WebUI里只有一个
  - 原因：LoRA训练时同时在底模的文本编码器 (CLIP Text Encoder) 和噪声预测器 (主模型UNet)上都做了训练，这两个部分都有对应的 “经验积累”
  - 区别：例如 \`Blindbox LoRA\` 可以把普通插画风格作品变成带PVC盲盒手办的质感的3D渲染图
    我们可以拉一张 **XY对比图**，展示两个权重在不同水平下的组合(图略，见原视频)。结果：
    - 模型强度：(图上看起来影响较大) 直接地影响了LoRA的风格 (形象) 是否能被植入到主模型中，因为作用的是主管去噪的UNet部分
    - CLIP强度：(图上看起来影响较小) 影响模型对一些提示词的相应结果，在一些具有大量触发词的LoRA里的作用会更显著
   - 值建议：当哪不准时，可以设置相同的值。根据作者的说法，二者相等时，差不多就是在WebUI里设置 \`<lora:lucy_(cyberpunk)_v10:0.5>\` 的效果
- 多LoRA使用
  可以使用有Stack功能的节点实现批量加载，例如 \`LoRA Stack\`、\`CR LoRA Stack\`，这个节点也能很好地与Efficient Loader节点配合。
  很方便，但是这种方式也会有一些“局限性”。例如输出类型是 \`LORA_STACK\`，只能和Efficient Loader节点配合
  

`],color:`#432`,bgcolor:`#653`}],r=[[2,5,0,3,3,`LATENT`],[4,6,0,3,1,`CONDITIONING`],[6,7,0,3,2,`CONDITIONING`],[7,3,0,8,0,`LATENT`],[8,4,2,8,1,`VAE`],[9,8,0,9,0,`IMAGE`],[10,4,0,10,0,`MODEL`],[11,4,1,10,1,`CLIP`],[12,10,1,6,0,`CLIP`],[13,10,1,7,0,`CLIP`],[14,10,0,3,0,`MODEL`]],i=[],a={},o={ds:{scale:1.4420993610649966,offset:[985.3597920720198,-54.74646922678285]},"0246.VERSION":[0,0,4]},s=.4,c={last_node_id:11,last_link_id:14,nodes:n,links:r,groups:i,config:a,extra:o,version:s};export{a as config,c as default,o as extra,i as groups,t as last_link_id,e as last_node_id,r as links,n as nodes,s as version};
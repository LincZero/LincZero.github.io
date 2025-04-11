import{_ as r,e,h as b,r as t,o}from"./app-DBoTYUT8.js";const l={};function a(s,i){const n=t("VueFlow");return o(),e("div",null,[b(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 16,
  "last_link_id": 21,
  "nodes": [
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": {
        "0": 1210,
        "1": 250
      },
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 10,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 7,
          "label": "Latent"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 14,
          "label": "VAE"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            9
          ],
          "slot_index": 0,
          "label": "图像"
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      },
      "widgets_values": []
    },
    {
      "id": 7,
      "type": "CLIPTextEncode",
      "pos": {
        "0": 355,
        "1": 213
      },
      "size": {
        "0": 425.27801513671875,
        "1": 180.6060791015625
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 20,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            16
          ],
          "slot_index": 0,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "(hands), text, error, cropped, (worst quality:1.2), (low quality:1.2), normal quality, (jpeg artifacts:1.3), signature, watermark, username, blurry, artist name, monochrome, sketch, censorship, censor, (copyright:1.2), extra legs, (forehead mark) (depth of field) (emotionless) (penis)"
      ]
    },
    {
      "id": 11,
      "type": "LoadImage",
      "pos": {
        "0": -70,
        "1": 177
      },
      "size": {
        "0": 387.97003173828125,
        "1": 465.5097961425781
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            12
          ],
          "slot_index": 0,
          "label": "图像"
        },
        {
          "name": "MASK",
          "type": "MASK",
          "links": null,
          "label": "遮罩"
        }
      ],
      "properties": {
        "Node name for S&R": "LoadImage"
      },
      "widgets_values": [
        "download.png",
        "image"
      ]
    },
    {
      "id": 9,
      "type": "SaveImage",
      "pos": {
        "0": 1453,
        "1": 247
      },
      "size": {
        "0": 393.6202087402344,
        "1": 449.1610107421875
      },
      "flags": {},
      "order": 11,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 9,
          "label": "图像"
        }
      ],
      "outputs": [],
      "properties": {},
      "widgets_values": [
        "ComfyUI"
      ]
    },
    {
      "id": 12,
      "type": "ControlNetLoader",
      "pos": {
        "0": -50,
        "1": 69
      },
      "size": {
        "0": 422,
        "1": 58
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "CONTROL_NET",
          "type": "CONTROL_NET",
          "links": [
            13
          ],
          "slot_index": 0,
          "label": "ControlNet"
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetLoader"
      },
      "widgets_values": [
        "control_v11p_sd15_openpose.pth"
      ]
    },
    {
      "id": 14,
      "type": "CheckpointLoaderSimple",
      "pos": {
        "0": -448,
        "1": 231
      },
      "size": {
        "0": 315,
        "1": 98
      },
      "flags": {},
      "order": 2,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            19
          ],
          "slot_index": 0,
          "label": "模型"
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            20,
            21
          ],
          "slot_index": 1,
          "label": "CLIP"
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": null,
          "label": "VAE"
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimple"
      },
      "widgets_values": [
        "awpainting_v12.safetensors"
      ]
    },
    {
      "id": 5,
      "type": "EmptyLatentImage",
      "pos": {
        "0": 439,
        "1": 446
      },
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 3,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            2
          ],
          "slot_index": 0,
          "label": "Latent"
        }
      ],
      "properties": {
        "Node name for S&R": "EmptyLatentImage"
      },
      "widgets_values": [
        512,
        768,
        1
      ]
    },
    {
      "id": 13,
      "type": "VAELoader",
      "pos": {
        "0": 840,
        "1": 30
      },
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            14
          ],
          "slot_index": 0,
          "label": "VAE"
        }
      ],
      "properties": {
        "Node name for S&R": "VAELoader"
      },
      "widgets_values": [
        "animevae.pt"
      ]
    },
    {
      "id": 3,
      "type": "KSampler",
      "pos": {
        "0": 842,
        "1": 150
      },
      "size": {
        "0": 320,
        "1": 470
      },
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 19,
          "label": "模型"
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 18,
          "label": "正面条件"
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 16,
          "label": "负面条件"
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 2,
          "label": "Latent"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            7
          ],
          "slot_index": 0,
          "label": "Latent"
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        62738418713106,
        "randomize",
        24,
        6,
        "dpmpp_2m",
        "karras",
        1
      ]
    },
    {
      "id": 10,
      "type": "ControlNetApply",
      "pos": {
        "0": 459,
        "1": 51
      },
      "size": {
        "0": 317.4000244140625,
        "1": 98
      },
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 10,
          "label": "条件"
        },
        {
          "name": "control_net",
          "type": "CONTROL_NET",
          "link": 13,
          "label": "ControlNet"
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 12,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            18
          ],
          "slot_index": 0,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetApply"
      },
      "widgets_values": [
        0.8
      ]
    },
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": {
        "0": -42,
        "1": -147
      },
      "size": {
        "0": 422.84503173828125,
        "1": 164.31304931640625
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 21,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            10
          ],
          "slot_index": 0,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "masterpiece, best quality, highres, 1girl, (arms behind back:1.5), bare shoulders, blonde hair, long hair, white background, white dress, looking at viewer, face light, low contrast, outdoors, sea of white flowers, plants, cinematic lights, lightrays,"
      ]
    },
    {
      "id": 16,
      "type": "Note",
      "pos": {
        "0": -1099,
        "1": -150
      },
      "size": [
        627.5634752473526,
        998.5694115519303
      ],
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [],
      "outputs": [],
      "properties": {},
      "widgets_values": [
        "# 附加网络 (Additional Network)\\n\\n是一个比较笼统的称呼，指SD生成中附加在最大的模型 (Checkpoint) 上的一些其他辅助性质的小模型\\n\\n这些小模型的分类和作用：最常使用的三类：\\n\\n- 词嵌入 (Embeddings)\\n- LoRA\\n- ControlNet\\n\\n作用：提高生图质量、创作独特风格、精准控制画面\\n\\n## 词嵌入 (Embeddings)\\n\\n使用最简单的是Embedding，按 \`Embedding:+模型名(不包含后缀)\` 的形式填入提示词\\n如果开启了 Custom Scripts，可以方便地辅助输入该功能\\n\\n## LoRA\\n\\n与SD WebUI不同：\\n\\n> 在SD WebUI中，可以用和Embedding类型的方式置入提示词中，如 \`<lora:A-> Pixel_f2:1>\`\\n> \\n> 但在ComfyUI中不行！\\n> \\n> 原因：Embedding本质上是一系列提示词向量的“合集”，而LoRA则是一组经过再训练的、从大模型上“提炼”出来的“附加权重”\\n\\n使用：\\n\\n- 使用LoRA加载器节点，放在Checkpoint Loader节点的后面\\n- 多个LoRA节点：直接串联他们就行了\\n\\n原理：\\n\\n- 可以将LoRA视做附加在主模型上的小模型，可以将checkpoint与后面被附加LoRA的部分视作一个“新的模型”\\n\\n要项：\\n\\n- strength_model、strength_clip 是LoRA的权重\\n  - 与WebUI不同：这里是两个权重，而WebUI里只有一个\\n  - 原因：LoRA训练时同时在底模的文本编码器 (CLIP Text Encoder) 和噪声预测器 (主模型UNet)上都做了训练，这两个部分都有对应的 “经验积累”\\n  - 区别：例如 \`Blindbox LoRA\` 可以把普通插画风格作品变成带PVC盲盒手办的质感的3D渲染图\\n    我们可以拉一张 **XY对比图**，展示两个权重在不同水平下的组合(图略，见原视频)。结果：\\n    - 模型强度：(图上看起来影响较大) 直接地影响了LoRA的风格 (形象) 是否能被植入到主模型中，因为作用的是主管去噪的UNet部分\\n    - CLIP强度：(图上看起来影响较小) 影响模型对一些提示词的相应结果，在一些具有大量触发词的LoRA里的作用会更显著\\n   - 值建议：当哪不准时，可以设置相同的值。根据作者的说法，二者相等时，差不多就是在WebUI里设置 \`<lora:lucy_(cyberpunk)_v10:0.5>\` 的效果\\n- 多LoRA使用\\n  可以使用有Stack功能的节点实现批量加载，例如 \`LoRA Stack\`、\`CR LoRA Stack\`，这个节点也能很好地与Efficient Loader节点配合。\\n  很方便，但是这种方式也会有一些“局限性”。例如输出类型是 \`LORA_STACK\`，只能和Efficient Loader节点配合\\n  \\n\\n## ControlNet\\n\\nControlNet也算附加网络吗？虽然在WebUI里以 “扩展插件” 的形式出现，但其核心的ControlNet模型，原理也是在生成时根据我们输入的 “控制信息” 动态调节Unet层来改变生成结果。感觉可以将其的训练和LoRA的训练做对比，其实是很像的\\n\\n可以参考官方示例的 “Controlnet” 文件夹的一些标准工作流\\n\\n核心：\\n\\n- Load ControlNet Model 节点，加载ControlNet模型\\n- App ControlNet 节点，接收图像、正面条件、和ControlNet模型，并添加对应控制\\n  参数strength也是控制权重强度的\\n  如果需要控制开始、结束时机，则需要使用标有Advanced的进阶节点\\n\\n要项：\\n\\n- 有趣的是，接受了CLIP正面条件为参数，输出的也是条件类型\\n- 注意原生节点只包含了ControlNet “模型” 这一部分，不包括预处理。即加载图像的部分要直接导入一个预处理的结果。\\n  那如何添加预处理器呢？下载一个预处理器节点。推荐 Fannovel16 开发的 ControlNet Aux 节点，然后搜 preprocess 调出对应的节点\\n- 既然有LoRA Stack，ControlNet也有Stack。推荐效率节点包的Control Net Stacker"
      ],
      "color": "#432",
      "bgcolor": "#653"
    }
  ],
  "links": [
    [
      2,
      5,
      0,
      3,
      3,
      "LATENT"
    ],
    [
      7,
      3,
      0,
      8,
      0,
      "LATENT"
    ],
    [
      9,
      8,
      0,
      9,
      0,
      "IMAGE"
    ],
    [
      10,
      6,
      0,
      10,
      0,
      "CONDITIONING"
    ],
    [
      12,
      11,
      0,
      10,
      2,
      "IMAGE"
    ],
    [
      13,
      12,
      0,
      10,
      1,
      "CONTROL_NET"
    ],
    [
      14,
      13,
      0,
      8,
      1,
      "VAE"
    ],
    [
      16,
      7,
      0,
      3,
      2,
      "CONDITIONING"
    ],
    [
      18,
      10,
      0,
      3,
      1,
      "CONDITIONING"
    ],
    [
      19,
      14,
      0,
      3,
      0,
      "MODEL"
    ],
    [
      20,
      14,
      1,
      7,
      0,
      "CLIP"
    ],
    [
      21,
      14,
      1,
      6,
      0,
      "CLIP"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "ds": {
      "scale": 1.310999419149999,
      "offset": [
        1375.3270854123218,
        -23.702536631709457
      ]
    },
    "0246.VERSION": [
      0,
      0,
      4
    ]
  },
  "version": 0.4
}
`})])}const d=r(l,[["render",a],["__file","4. ControlNet基本工作流（不含预处理器）.json.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%99%84%E5%8A%A0%E7%BD%91%E7%BB%9C%E5%B7%A5%E4%BD%9C%E6%B5%81/4.%20ControlNet%E5%9F%BA%E6%9C%AC%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%88%E4%B8%8D%E5%90%AB%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8%EF%BC%89.json.html","title":"4. ControlNet基本工作流（不含预处理器）.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 16, \\"last_link_id\\": 21, \\"nodes\\": [ { \\"id\\": 8, \\"type\\": \\"VAEDecode\\", \\"pos\\": { \\"0\\": 1210, \\"1\\": 250 }, \\"size\\": { \\"0\\": 210, \\"1\\": 46 }, \\"flags\\": {}, \\"order\\": 10, \\"mo...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%99%84%E5%8A%A0%E7%BD%91%E7%BB%9C%E5%B7%A5%E4%BD%9C%E6%B5%81/4.%20ControlNet%E5%9F%BA%E6%9C%AC%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%88%E4%B8%8D%E5%90%AB%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8%EF%BC%89.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 16, \\"last_link_id\\": 21, \\"nodes\\": [ { \\"id\\": 8, \\"type\\": \\"VAEDecode\\", \\"pos\\": { \\"0\\": 1210, \\"1\\": 250 }, \\"size\\": { \\"0\\": 210, \\"1\\": 46 }, \\"flags\\": {}, \\"order\\": 10, \\"mo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"git":{},"readingTime":{"minutes":5.98,"words":1795},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/附加网络工作流/4. ControlNet基本工作流（不含预处理器）.json","excerpt":"<p>{<br>\\n\\"last_node_id\\": 16,<br>\\n\\"last_link_id\\": 21,<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": 8,<br>\\n\\"type\\": \\"VAEDecode\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 1210,<br>\\n\\"1\\": 250<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 46<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 10,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 7,<br>\\n\\"label\\": \\"Latent\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 14,<br>\\n\\"label\\": \\"VAE\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n9<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"<br>\\n},<br>\\n\\"widgets_values\\": []<br>\\n},<br>\\n{<br>\\n\\"id\\": 7,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 355,<br>\\n\\"1\\": 213<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 425.27801513671875,<br>\\n\\"1\\": 180.6060791015625<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 20,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n16<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"(hands), text, error, cropped, (worst quality:1.2), (low quality:1.2), normal quality, (jpeg artifacts:1.3), signature, watermark, username, blurry, artist name, monochrome, sketch, censorship, censor, (copyright:1.2), extra legs, (forehead mark) (depth of field) (emotionless) (penis)\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 11,<br>\\n\\"type\\": \\"LoadImage\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": -70,<br>\\n\\"1\\": 177<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 387.97003173828125,<br>\\n\\"1\\": 465.5097961425781<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 0,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n12<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"图像\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": null,<br>\\n\\"label\\": \\"遮罩\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"download.png\\",<br>\\n\\"image\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 9,<br>\\n\\"type\\": \\"SaveImage\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 1453,<br>\\n\\"1\\": 247<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 393.6202087402344,<br>\\n\\"1\\": 449.1610107421875<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 11,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 9,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [],<br>\\n\\"properties\\": {},<br>\\n\\"widgets_values\\": [<br>\\n\\"ComfyUI\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 12,<br>\\n\\"type\\": \\"ControlNetLoader\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": -50,<br>\\n\\"1\\": 69<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 422,<br>\\n\\"1\\": 58<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 1,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONTROL_NET\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"links\\": [<br>\\n13<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"ControlNet\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"control_v11p_sd15_openpose.pth\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 14,<br>\\n\\"type\\": \\"CheckpointLoaderSimple\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": -448,<br>\\n\\"1\\": 231<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 98<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 2,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n19<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n20,<br>\\n21<br>\\n],<br>\\n\\"slot_index\\": 1,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": null,<br>\\n\\"label\\": \\"VAE\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"awpainting_v12.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 5,<br>\\n\\"type\\": \\"EmptyLatentImage\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 439,<br>\\n\\"1\\": 446<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 106<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n2<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"Latent\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"EmptyLatentImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n512,<br>\\n768,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 13,<br>\\n\\"type\\": \\"VAELoader\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 840,<br>\\n\\"1\\": 30<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 58<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n14<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"VAE\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAELoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"animevae.pt\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 3,<br>\\n\\"type\\": \\"KSampler\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 842,<br>\\n\\"1\\": 150<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 320,<br>\\n\\"1\\": 470<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 9,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 19,<br>\\n\\"label\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 18,<br>\\n\\"label\\": \\"正面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 16,<br>\\n\\"label\\": \\"负面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 2,<br>\\n\\"label\\": \\"Latent\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n7<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"Latent\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n62738418713106,<br>\\n\\"randomize\\",<br>\\n24,<br>\\n6,<br>\\n\\"dpmpp_2m\\",<br>\\n\\"karras\\",<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 10,<br>\\n\\"type\\": \\"ControlNetApply\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 459,<br>\\n\\"1\\": 51<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 317.4000244140625,<br>\\n\\"1\\": 98<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 8,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"conditioning\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 10,<br>\\n\\"label\\": \\"条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"control_net\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"link\\": 13,<br>\\n\\"label\\": \\"ControlNet\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 12,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n18<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetApply\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n0.8<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 6,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": -42,<br>\\n\\"1\\": -147<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 422.84503173828125,<br>\\n\\"1\\": 164.31304931640625<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 7,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 21,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n10<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"masterpiece, best quality, highres, 1girl, (arms behind back:1.5), bare shoulders, blonde hair, long hair, white background, white dress, looking at viewer, face light, low contrast, outdoors, sea of white flowers, plants, cinematic lights, lightrays,\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 16,<br>\\n\\"type\\": \\"Note\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": -1099,<br>\\n\\"1\\": -150<br>\\n},<br>\\n\\"size\\": [<br>\\n627.5634752473526,<br>\\n998.5694115519303<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 5,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [],<br>\\n\\"properties\\": {},<br>\\n\\"widgets_values\\": [<br>\\n\\"# 附加网络 (Additional Network)\\\\n\\\\n是一个比较笼统的称呼，指SD生成中附加在最大的模型 (Checkpoint) 上的一些其他辅助性质的小模型\\\\n\\\\n这些小模型的分类和作用：最常使用的三类：\\\\n\\\\n- 词嵌入 (Embeddings)\\\\n- LoRA\\\\n- ControlNet\\\\n\\\\n作用：提高生图质量、创作独特风格、精准控制画面\\\\n\\\\n## 词嵌入 (Embeddings)\\\\n\\\\n使用最简单的是Embedding，按 <code>Embedding:+模型名(不包含后缀)</code> 的形式填入提示词\\\\n如果开启了 Custom Scripts，可以方便地辅助输入该功能\\\\n\\\\n## LoRA\\\\n\\\\n与SD WebUI不同：\\\\n\\\\n&gt; 在SD WebUI中，可以用和Embedding类型的方式置入提示词中，如 <code>&lt;lora:A-&gt; Pixel_f2:1&gt;</code>\\\\n&gt; \\\\n&gt; 但在ComfyUI中不行！\\\\n&gt; \\\\n&gt; 原因：Embedding本质上是一系列提示词向量的“合集”，而LoRA则是一组经过再训练的、从大模型上“提炼”出来的“附加权重”\\\\n\\\\n使用：\\\\n\\\\n- 使用LoRA加载器节点，放在Checkpoint Loader节点的后面\\\\n- 多个LoRA节点：直接串联他们就行了\\\\n\\\\n原理：\\\\n\\\\n- 可以将LoRA视做附加在主模型上的小模型，可以将checkpoint与后面被附加LoRA的部分视作一个“新的模型”\\\\n\\\\n要项：\\\\n\\\\n- strength_model、strength_clip 是LoRA的权重\\\\n  - 与WebUI不同：这里是两个权重，而WebUI里只有一个\\\\n  - 原因：LoRA训练时同时在底模的文本编码器 (CLIP Text Encoder) 和噪声预测器 (主模型UNet)上都做了训练，这两个部分都有对应的 “经验积累”\\\\n  - 区别：例如 <code>Blindbox LoRA</code> 可以把普通插画风格作品变成带PVC盲盒手办的质感的3D渲染图\\\\n    我们可以拉一张 <strong>XY对比图</strong>，展示两个权重在不同水平下的组合(图略，见原视频)。结果：\\\\n    - 模型强度：(图上看起来影响较大) 直接地影响了LoRA的风格 (形象) 是否能被植入到主模型中，因为作用的是主管去噪的UNet部分\\\\n    - CLIP强度：(图上看起来影响较小) 影响模型对一些提示词的相应结果，在一些具有大量触发词的LoRA里的作用会更显著\\\\n   - 值建议：当哪不准时，可以设置相同的值。根据作者的说法，二者相等时，差不多就是在WebUI里设置 <code>&lt;lora:lucy_(cyberpunk)_v10:0.5&gt;</code> 的效果\\\\n- 多LoRA使用\\\\n  可以使用有Stack功能的节点实现批量加载，例如 <code>LoRA Stack</code>、<code>CR LoRA Stack</code>，这个节点也能很好地与Efficient Loader节点配合。\\\\n  很方便，但是这种方式也会有一些“局限性”。例如输出类型是 <code>LORA_STACK</code>，只能和Efficient Loader节点配合\\\\n  \\\\n\\\\n## ControlNet\\\\n\\\\nControlNet也算附加网络吗？虽然在WebUI里以 “扩展插件” 的形式出现，但其核心的ControlNet模型，原理也是在生成时根据我们输入的 “控制信息” 动态调节Unet层来改变生成结果。感觉可以将其的训练和LoRA的训练做对比，其实是很像的\\\\n\\\\n可以参考官方示例的 “Controlnet” 文件夹的一些标准工作流\\\\n\\\\n核心：\\\\n\\\\n- Load ControlNet Model 节点，加载ControlNet模型\\\\n- App ControlNet 节点，接收图像、正面条件、和ControlNet模型，并添加对应控制\\\\n  参数strength也是控制权重强度的\\\\n  如果需要控制开始、结束时机，则需要使用标有Advanced的进阶节点\\\\n\\\\n要项：\\\\n\\\\n- 有趣的是，接受了CLIP正面条件为参数，输出的也是条件类型\\\\n- 注意原生节点只包含了ControlNet “模型” 这一部分，不包括预处理。即加载图像的部分要直接导入一个预处理的结果。\\\\n  那如何添加预处理器呢？下载一个预处理器节点。推荐 Fannovel16 开发的 ControlNet Aux 节点，然后搜 preprocess 调出对应的节点\\\\n- 既然有LoRA Stack，ControlNet也有Stack。推荐效率节点包的Control Net Stacker\\"<br>\\n],<br>\\n\\"color\\": \\"#432\\",<br>\\n\\"bgcolor\\": \\"#653\\"<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\n2,<br>\\n5,<br>\\n0,<br>\\n3,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n7,<br>\\n3,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n9,<br>\\n8,<br>\\n0,<br>\\n9,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n10,<br>\\n6,<br>\\n0,<br>\\n10,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n12,<br>\\n11,<br>\\n0,<br>\\n10,<br>\\n2,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n13,<br>\\n12,<br>\\n0,<br>\\n10,<br>\\n1,<br>\\n\\"CONTROL_NET\\"<br>\\n],<br>\\n[<br>\\n14,<br>\\n13,<br>\\n0,<br>\\n8,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n16,<br>\\n7,<br>\\n0,<br>\\n3,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n18,<br>\\n10,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n19,<br>\\n14,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n20,<br>\\n14,<br>\\n1,<br>\\n7,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n21,<br>\\n14,<br>\\n1,<br>\\n6,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n]<br>\\n],<br>\\n\\"groups\\": [],<br>\\n\\"config\\": {},<br>\\n\\"extra\\": {<br>\\n\\"ds\\": {<br>\\n\\"scale\\": 1.310999419149999,<br>\\n\\"offset\\": [<br>\\n1375.3270854123218,<br>\\n-23.702536631709457<br>\\n]<br>\\n},<br>\\n\\"0246.VERSION\\": [<br>\\n0,<br>\\n0,<br>\\n4<br>\\n]<br>\\n},<br>\\n\\"version\\": 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/附加网络工作流/4. ControlNet基本工作流（不含预处理器）.json","value":{"title":"4. ControlNet基本工作流（不含预处理器）.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/附加网络工作流/4. ControlNet基本工作流（不含预处理器）.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{d as comp,m as data};

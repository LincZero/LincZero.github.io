import{_ as r,e,h as b,r as t,o as a}from"./app-eDc_laxf.js";const l={};function o(s,i){const n=t("VueFlow");return a(),e("div",null,[b(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 20,
  "last_link_id": 34,
  "nodes": [
    {
      "id": 5,
      "type": "EmptyLatentImage",
      "pos": {
        "0": 435,
        "1": 600
      },
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 0,
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
        768,
        768,
        1
      ]
    },
    {
      "id": 12,
      "type": "SaveImage",
      "pos": {
        "0": 1990,
        "1": 110
      },
      "size": {
        "0": 407.53717041015625,
        "1": 468.13226318359375
      },
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 25,
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
      "id": 18,
      "type": "VAEDecode",
      "pos": {
        "0": 1280,
        "1": 130
      },
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 26,
          "label": "Latent"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 28,
          "slot_index": 1,
          "label": "VAE"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            29
          ],
          "slot_index": 0,
          "shape": 3,
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
        "0": 377,
        "1": 381
      },
      "size": {
        "0": 425.27801513671875,
        "1": 180.6060791015625
      },
      "flags": {},
      "order": 5,
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
            6,
            32
          ],
          "slot_index": 0,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "(worst quality), (low quality), (normal quality), lowres, bad anatomy, watermark "
      ]
    },
    {
      "id": 16,
      "type": "CheckpointLoaderSimple",
      "pos": {
        "0": 30,
        "1": 320
      },
      "size": {
        "0": 315,
        "1": 98
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            18,
            30
          ],
          "slot_index": 0,
          "label": "模型"
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            19,
            20
          ],
          "slot_index": 1,
          "label": "CLIP"
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            28,
            33
          ],
          "slot_index": 2,
          "label": "VAE"
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimple"
      },
      "widgets_values": [
        "majicmixLux_v3.safetensors"
      ]
    },
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": {
        "0": 374,
        "1": 171
      },
      "size": {
        "0": 422.84503173828125,
        "1": 164.31304931640625
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 19,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            4,
            31
          ],
          "slot_index": 0,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "1girl, detailed background filled with (many:1.1) (colorful:1.1) (flowers):1.1, (quality:1.1), (photorealistic:1.1), (resolution:1.1), (sharpness:1.1), (cinematic lighting), depth of field, \\nphotographed by Canan EOS R6, 135mm, 1/1250s, f/2.8, ISO 400,"
      ]
    },
    {
      "id": 20,
      "type": "Note",
      "pos": {
        "0": -606,
        "1": 61
      },
      "size": {
        "0": 573.9961547851562,
        "1": 1163.5120849609375
      },
      "flags": {},
      "order": 2,
      "mode": 0,
      "inputs": [],
      "outputs": [],
      "properties": {},
      "widgets_values": [
        "## Stable Diffustion 方式\\n\\n在SD UI里，有三种方式：\\n1. 文生图的 \\"高清修复\\" (Hi-res fix)\\n2. 图生图的 \\"SD放大\\" (SD Upscale) 脚本\\n3. 后期处理中的算法放大\\n\\n## ComfyUI 方式\\n\\n而ComfyUI里，也有类似的方式，例如官方示例/2_pass_text2img的方式\\n里面有三个图(工作流)：\\n1. hiresfix_latent_workflow (标准的文生图高清修复工作流)\\n2. hiresfix_esrgan_workflow\\n3. latent_upscale_different_prompt_model\\n\\n除了官方示例里提供的方法外，还有其他的几种方法，下面会说\\n\\n### Latent放大\\n\\nhiresfix_latent_workflow\\n\\n核心：\\n\\n1. Upscale Latent节点\\n   将一开始的768尺寸放大到1152尺寸\\n   该节点还有另一个版本：Upscale Latent By，按倍数进行缩放\\n2. 第二个KSample节点\\n   注意该方式只会做拉伸，并不会对原图进行细节的填充，所以还需要重新采样一次\\n   于是就有了第二次KSample\\n\\n要项：\\n\\n1. 降噪强度(重绘强度)\\n   第二个KSampler相当于图生图的采样器，denoise决定第二次生成的降噪力度。拉到1相当于重新生成一张图。\\n   推荐：0.5~0.8 (更像~更多细节，不要低于0.5，不然容易出现噪声没去干净)\\n\\n哪怕降噪强度0.5也出现更多细节怎么办？例如多手多头。这时需要使用第二个降噪工作流 hiresfix_esrgan_workflow\\n\\n### 放大模型放大\\n\\nhiresfix_esrgan_workflow\\n\\n借助ESRGAN等传统放大模型来实现这个放大过程，更复杂\\n\\n核心：\\n\\n1. VAE Decode，先解码成图片格式\\n2. 放大图片\\n   - Load Upscale Model，放大模型加载器\\n   - Upscale Image (using Model)，放大图片\\n   - Upscale Image\\n   这里的 Upscale Latent、Upscale Image 都是很像的，也都有by版本\\n3. VAE Encode，图片重新编码回来\\n4. 再KSampler图生图\\n\\n要项：\\n\\n- 这种方式在重绘时，哪怕以0.2~0.3这种低降噪采样，也不会出现噪声痕迹。\\n  即比Latent缩放的流程多出来的步骤，能让图片在重绘时使用更低的降噪采样。\\n  原因是：先解码变成图片，然后使用超分辨率放大模型的放大并不会轻易改变图片的原有内容（这与Latent直接缩放不同）\\n- 放大模型的选择\\n  \`Load Upscale Model\` 可以选择放大模型 (模型在 \`ComfyUI根目录/models/upscale_models\`)\\n  \`RealESRGAN_x4plus.pth\`，R-ESRGAN的4倍放大模型，目前泛用效果好的，适用于照片风格\\n  \`Anime 6B\` 适用于动漫插画风格的图像\\n  \`4xUltrasharp_4xUltrasharpV10.pth\` 放大过程中进行锐化\\n  （SD WebUI高清修复中选择放大算法时，就是选择的这些）\\n\\n选用、缺点：\\n\\n1. 低效。与Latent缩放相比，需要更多的计算和时间，容易暴显存\\n2. 降噪低不易重绘时增添更多细节，只是单纯放大原图容易让结果显得 “油腻”。而降噪高容易多手多头\\n\\n### 后期处理放大\\n\\n要项：\\n\\n- 放大模型加载器中，通常模型自带一个缩放倍数。如果想要再调整大小，需要额外加一个 Upscale Image By 节点\\n\\n### 放大 脚本\\n\\n放大再采样时（采样一个大的东西）容易爆显存\\n在SD里有一个脚本 (SD upscale) 用于专门解决这个问题\\n后面还有升级版 (SD upscale Ultimate)，ComfyUI也有这个节点\\n\\n核心：\\n\\n原理是将图片分块，依次重绘再拼接\\n\\n优点：\\n\\n- 使用显存非常少\\n- 使用非常简单\\n\\n"
      ],
      "color": "#432",
      "bgcolor": "#653"
    },
    {
      "id": 17,
      "type": "UltimateSDUpscale",
      "pos": {
        "0": 1530,
        "1": 110
      },
      "size": {
        "0": 320,
        "1": 830
      },
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 29,
          "label": "图像"
        },
        {
          "name": "model",
          "type": "MODEL",
          "link": 30,
          "label": "模型"
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 31,
          "label": "正面条件"
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 32,
          "label": "负面条件"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 33,
          "label": "VAE"
        },
        {
          "name": "upscale_model",
          "type": "UPSCALE_MODEL",
          "link": 34,
          "slot_index": 5,
          "label": "放大模型"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            25
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "图像"
        }
      ],
      "properties": {
        "Node name for S&R": "UltimateSDUpscale"
      },
      "widgets_values": [
        2,
        697260984306782,
        "randomize",
        20,
        8,
        "euler",
        "normal",
        0.2,
        "Linear",
        512,
        512,
        8,
        32,
        "None",
        1,
        64,
        8,
        16,
        true,
        false
      ]
    },
    {
      "id": 3,
      "type": "KSampler",
      "pos": {
        "0": 845,
        "1": 172
      },
      "size": {
        "0": 320,
        "1": 470
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 18,
          "label": "模型"
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 4,
          "label": "正面条件"
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 6,
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
            26
          ],
          "slot_index": 0,
          "label": "Latent"
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        212837685195969,
        "fixed",
        20,
        8,
        "dpmpp_2m",
        "karras",
        1
      ]
    },
    {
      "id": 19,
      "type": "UpscaleModelLoader",
      "pos": {
        "0": 1200,
        "1": 290
      },
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 3,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "UPSCALE_MODEL",
          "type": "UPSCALE_MODEL",
          "links": [
            34
          ],
          "shape": 3,
          "label": "放大模型"
        }
      ],
      "properties": {
        "Node name for S&R": "UpscaleModelLoader"
      },
      "widgets_values": [
        "4xUltrasharp_4xUltrasharpV10.pt"
      ]
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
      4,
      6,
      0,
      3,
      1,
      "CONDITIONING"
    ],
    [
      6,
      7,
      0,
      3,
      2,
      "CONDITIONING"
    ],
    [
      18,
      16,
      0,
      3,
      0,
      "MODEL"
    ],
    [
      19,
      16,
      1,
      6,
      0,
      "CLIP"
    ],
    [
      20,
      16,
      1,
      7,
      0,
      "CLIP"
    ],
    [
      25,
      17,
      0,
      12,
      0,
      "IMAGE"
    ],
    [
      26,
      3,
      0,
      18,
      0,
      "LATENT"
    ],
    [
      28,
      16,
      2,
      18,
      1,
      "VAE"
    ],
    [
      29,
      18,
      0,
      17,
      0,
      "IMAGE"
    ],
    [
      30,
      16,
      0,
      17,
      1,
      "MODEL"
    ],
    [
      31,
      6,
      0,
      17,
      2,
      "CONDITIONING"
    ],
    [
      32,
      7,
      0,
      17,
      3,
      "CONDITIONING"
    ],
    [
      33,
      16,
      2,
      17,
      4,
      "VAE"
    ],
    [
      34,
      19,
      0,
      17,
      5,
      "UPSCALE_MODEL"
    ]
  ],
  "groups": [
    {
      "title": "Save Final Image",
      "bounding": [
        1949,
        31,
        483,
        199
      ],
      "color": "#3f789e",
      "font_size": 24,
      "flags": {}
    },
    {
      "title": "Ultimate Upscale",
      "bounding": [
        1224,
        29,
        715,
        707
      ],
      "color": "#A88",
      "font_size": 24,
      "flags": {}
    },
    {
      "title": "Txt2Img",
      "bounding": [
        -1,
        30,
        1211,
        708
      ],
      "color": "#a1309b",
      "font_size": 24,
      "flags": {}
    }
  ],
  "config": {},
  "extra": {
    "ds": {
      "scale": 0.7400249944258175,
      "offset": [
        908.8157263963966,
        99.87059505287436
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
`})])}const d=r(l,[["render",o],["__file","4. Ultimate SD Upscale工作流.json.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%AB%98%E6%B8%85%E6%94%BE%E5%A4%A7%E5%B7%A5%E4%BD%9C%E6%B5%81/4.%20Ultimate%20SD%20Upscale%E5%B7%A5%E4%BD%9C%E6%B5%81.json.html","title":"4. Ultimate SD Upscale工作流.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 20, \\"last_link_id\\": 34, \\"nodes\\": [ { \\"id\\": 5, \\"type\\": \\"EmptyLatentImage\\", \\"pos\\": { \\"0\\": 435, \\"1\\": 600 }, \\"size\\": { \\"0\\": 315, \\"1\\": 106 }, \\"flags\\": {}, \\"order\\": ...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%AB%98%E6%B8%85%E6%94%BE%E5%A4%A7%E5%B7%A5%E4%BD%9C%E6%B5%81/4.%20Ultimate%20SD%20Upscale%E5%B7%A5%E4%BD%9C%E6%B5%81.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 20, \\"last_link_id\\": 34, \\"nodes\\": [ { \\"id\\": 5, \\"type\\": \\"EmptyLatentImage\\", \\"pos\\": { \\"0\\": 435, \\"1\\": 600 }, \\"size\\": { \\"0\\": 315, \\"1\\": 106 }, \\"flags\\": {}, \\"order\\": ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"git":{},"readingTime":{"minutes":5.67,"words":1700},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/高清放大工作流/4. Ultimate SD Upscale工作流.json","excerpt":"<p>{<br>\\n\\"last_node_id\\": 20,<br>\\n\\"last_link_id\\": 34,<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": 5,<br>\\n\\"type\\": \\"EmptyLatentImage\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 435,<br>\\n\\"1\\": 600<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 106<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 0,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n2<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"Latent\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"EmptyLatentImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n768,<br>\\n768,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 12,<br>\\n\\"type\\": \\"SaveImage\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 1990,<br>\\n\\"1\\": 110<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 407.53717041015625,<br>\\n\\"1\\": 468.13226318359375<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 9,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 25,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [],<br>\\n\\"properties\\": {},<br>\\n\\"widgets_values\\": [<br>\\n\\"ComfyUI\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 18,<br>\\n\\"type\\": \\"VAEDecode\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 1280,<br>\\n\\"1\\": 130<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 46<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 7,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 26,<br>\\n\\"label\\": \\"Latent\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 28,<br>\\n\\"slot_index\\": 1,<br>\\n\\"label\\": \\"VAE\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n29<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"<br>\\n},<br>\\n\\"widgets_values\\": []<br>\\n},<br>\\n{<br>\\n\\"id\\": 7,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 377,<br>\\n\\"1\\": 381<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 425.27801513671875,<br>\\n\\"1\\": 180.6060791015625<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 5,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 20,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n6,<br>\\n32<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"(worst quality), (low quality), (normal quality), lowres, bad anatomy, watermark \\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 16,<br>\\n\\"type\\": \\"CheckpointLoaderSimple\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 30,<br>\\n\\"1\\": 320<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 98<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 1,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n18,<br>\\n30<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n19,<br>\\n20<br>\\n],<br>\\n\\"slot_index\\": 1,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n28,<br>\\n33<br>\\n],<br>\\n\\"slot_index\\": 2,<br>\\n\\"label\\": \\"VAE\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"majicmixLux_v3.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 6,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 374,<br>\\n\\"1\\": 171<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 422.84503173828125,<br>\\n\\"1\\": 164.31304931640625<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 19,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n4,<br>\\n31<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"1girl, detailed background filled with (many:1.1) (colorful:1.1) (flowers):1.1, (quality:1.1), (photorealistic:1.1), (resolution:1.1), (sharpness:1.1), (cinematic lighting), depth of field, \\\\nphotographed by Canan EOS R6, 135mm, 1/1250s, f/2.8, ISO 400,\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 20,<br>\\n\\"type\\": \\"Note\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": -606,<br>\\n\\"1\\": 61<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 573.9961547851562,<br>\\n\\"1\\": 1163.5120849609375<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 2,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [],<br>\\n\\"properties\\": {},<br>\\n\\"widgets_values\\": [<br>\\n\\"## Stable Diffustion 方式\\\\n\\\\n在SD UI里，有三种方式：\\\\n1. 文生图的 \\"高清修复\\" (Hi-res fix)\\\\n2. 图生图的 \\"SD放大\\" (SD Upscale) 脚本\\\\n3. 后期处理中的算法放大\\\\n\\\\n## ComfyUI 方式\\\\n\\\\n而ComfyUI里，也有类似的方式，例如官方示例/2_pass_text2img的方式\\\\n里面有三个图(工作流)：\\\\n1. hiresfix_latent_workflow (标准的文生图高清修复工作流)\\\\n2. hiresfix_esrgan_workflow\\\\n3. latent_upscale_different_prompt_model\\\\n\\\\n除了官方示例里提供的方法外，还有其他的几种方法，下面会说\\\\n\\\\n### Latent放大\\\\n\\\\nhiresfix_latent_workflow\\\\n\\\\n核心：\\\\n\\\\n1. Upscale Latent节点\\\\n   将一开始的768尺寸放大到1152尺寸\\\\n   该节点还有另一个版本：Upscale Latent By，按倍数进行缩放\\\\n2. 第二个KSample节点\\\\n   注意该方式只会做拉伸，并不会对原图进行细节的填充，所以还需要重新采样一次\\\\n   于是就有了第二次KSample\\\\n\\\\n要项：\\\\n\\\\n1. 降噪强度(重绘强度)\\\\n   第二个KSampler相当于图生图的采样器，denoise决定第二次生成的降噪力度。拉到1相当于重新生成一张图。\\\\n   推荐：0.5~0.8 (更像~更多细节，不要低于0.5，不然容易出现噪声没去干净)\\\\n\\\\n哪怕降噪强度0.5也出现更多细节怎么办？例如多手多头。这时需要使用第二个降噪工作流 hiresfix_esrgan_workflow\\\\n\\\\n### 放大模型放大\\\\n\\\\nhiresfix_esrgan_workflow\\\\n\\\\n借助ESRGAN等传统放大模型来实现这个放大过程，更复杂\\\\n\\\\n核心：\\\\n\\\\n1. VAE Decode，先解码成图片格式\\\\n2. 放大图片\\\\n   - Load Upscale Model，放大模型加载器\\\\n   - Upscale Image (using Model)，放大图片\\\\n   - Upscale Image\\\\n   这里的 Upscale Latent、Upscale Image 都是很像的，也都有by版本\\\\n3. VAE Encode，图片重新编码回来\\\\n4. 再KSampler图生图\\\\n\\\\n要项：\\\\n\\\\n- 这种方式在重绘时，哪怕以0.2~0.3这种低降噪采样，也不会出现噪声痕迹。\\\\n  即比Latent缩放的流程多出来的步骤，能让图片在重绘时使用更低的降噪采样。\\\\n  原因是：先解码变成图片，然后使用超分辨率放大模型的放大并不会轻易改变图片的原有内容（这与Latent直接缩放不同）\\\\n- 放大模型的选择\\\\n  <code>Load Upscale Model</code> 可以选择放大模型 (模型在 <code>ComfyUI根目录/models/upscale_models</code>)\\\\n  <code>RealESRGAN_x4plus.pth</code>，R-ESRGAN的4倍放大模型，目前泛用效果好的，适用于照片风格\\\\n  <code>Anime 6B</code> 适用于动漫插画风格的图像\\\\n  <code>4xUltrasharp_4xUltrasharpV10.pth</code> 放大过程中进行锐化\\\\n  （SD WebUI高清修复中选择放大算法时，就是选择的这些）\\\\n\\\\n选用、缺点：\\\\n\\\\n1. 低效。与Latent缩放相比，需要更多的计算和时间，容易暴显存\\\\n2. 降噪低不易重绘时增添更多细节，只是单纯放大原图容易让结果显得 “油腻”。而降噪高容易多手多头\\\\n\\\\n### 后期处理放大\\\\n\\\\n要项：\\\\n\\\\n- 放大模型加载器中，通常模型自带一个缩放倍数。如果想要再调整大小，需要额外加一个 Upscale Image By 节点\\\\n\\\\n### 放大 脚本\\\\n\\\\n放大再采样时（采样一个大的东西）容易爆显存\\\\n在SD里有一个脚本 (SD upscale) 用于专门解决这个问题\\\\n后面还有升级版 (SD upscale Ultimate)，ComfyUI也有这个节点\\\\n\\\\n核心：\\\\n\\\\n原理是将图片分块，依次重绘再拼接\\\\n\\\\n优点：\\\\n\\\\n- 使用显存非常少\\\\n- 使用非常简单\\\\n\\\\n\\"<br>\\n],<br>\\n\\"color\\": \\"#432\\",<br>\\n\\"bgcolor\\": \\"#653\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 17,<br>\\n\\"type\\": \\"UltimateSDUpscale\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 1530,<br>\\n\\"1\\": 110<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 320,<br>\\n\\"1\\": 830<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 8,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 29,<br>\\n\\"label\\": \\"图像\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 30,<br>\\n\\"label\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 31,<br>\\n\\"label\\": \\"正面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 32,<br>\\n\\"label\\": \\"负面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 33,<br>\\n\\"label\\": \\"VAE\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"upscale_model\\",<br>\\n\\"type\\": \\"UPSCALE_MODEL\\",<br>\\n\\"link\\": 34,<br>\\n\\"slot_index\\": 5,<br>\\n\\"label\\": \\"放大模型\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n25<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"UltimateSDUpscale\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n2,<br>\\n697260984306782,<br>\\n\\"randomize\\",<br>\\n20,<br>\\n8,<br>\\n\\"euler\\",<br>\\n\\"normal\\",<br>\\n0.2,<br>\\n\\"Linear\\",<br>\\n512,<br>\\n512,<br>\\n8,<br>\\n32,<br>\\n\\"None\\",<br>\\n1,<br>\\n64,<br>\\n8,<br>\\n16,<br>\\ntrue,<br>\\nfalse<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 3,<br>\\n\\"type\\": \\"KSampler\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 845,<br>\\n\\"1\\": 172<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 320,<br>\\n\\"1\\": 470<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 18,<br>\\n\\"label\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 4,<br>\\n\\"label\\": \\"正面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 6,<br>\\n\\"label\\": \\"负面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 2,<br>\\n\\"label\\": \\"Latent\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n26<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"Latent\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n212837685195969,<br>\\n\\"fixed\\",<br>\\n20,<br>\\n8,<br>\\n\\"dpmpp_2m\\",<br>\\n\\"karras\\",<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 19,<br>\\n\\"type\\": \\"UpscaleModelLoader\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 1200,<br>\\n\\"1\\": 290<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 58<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"UPSCALE_MODEL\\",<br>\\n\\"type\\": \\"UPSCALE_MODEL\\",<br>\\n\\"links\\": [<br>\\n34<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"放大模型\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"UpscaleModelLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"4xUltrasharp_4xUltrasharpV10.pt\\"<br>\\n]<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\n2,<br>\\n5,<br>\\n0,<br>\\n3,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n4,<br>\\n6,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n6,<br>\\n7,<br>\\n0,<br>\\n3,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n18,<br>\\n16,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n19,<br>\\n16,<br>\\n1,<br>\\n6,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n20,<br>\\n16,<br>\\n1,<br>\\n7,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n25,<br>\\n17,<br>\\n0,<br>\\n12,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n26,<br>\\n3,<br>\\n0,<br>\\n18,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n28,<br>\\n16,<br>\\n2,<br>\\n18,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n29,<br>\\n18,<br>\\n0,<br>\\n17,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n30,<br>\\n16,<br>\\n0,<br>\\n17,<br>\\n1,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n31,<br>\\n6,<br>\\n0,<br>\\n17,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n32,<br>\\n7,<br>\\n0,<br>\\n17,<br>\\n3,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n33,<br>\\n16,<br>\\n2,<br>\\n17,<br>\\n4,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n34,<br>\\n19,<br>\\n0,<br>\\n17,<br>\\n5,<br>\\n\\"UPSCALE_MODEL\\"<br>\\n]<br>\\n],<br>\\n\\"groups\\": [<br>\\n{<br>\\n\\"title\\": \\"Save Final Image\\",<br>\\n\\"bounding\\": [<br>\\n1949,<br>\\n31,<br>\\n483,<br>\\n199<br>\\n],<br>\\n\\"color\\": \\"#3f789e\\",<br>\\n\\"font_size\\": 24,<br>\\n\\"flags\\": {}<br>\\n},<br>\\n{<br>\\n\\"title\\": \\"Ultimate Upscale\\",<br>\\n\\"bounding\\": [<br>\\n1224,<br>\\n29,<br>\\n715,<br>\\n707<br>\\n],<br>\\n\\"color\\": \\"#A88\\",<br>\\n\\"font_size\\": 24,<br>\\n\\"flags\\": {}<br>\\n},<br>\\n{<br>\\n\\"title\\": \\"Txt2Img\\",<br>\\n\\"bounding\\": [<br>\\n-1,<br>\\n30,<br>\\n1211,<br>\\n708<br>\\n],<br>\\n\\"color\\": \\"#a1309b\\",<br>\\n\\"font_size\\": 24,<br>\\n\\"flags\\": {}<br>\\n}<br>\\n],<br>\\n\\"config\\": {},<br>\\n\\"extra\\": {<br>\\n\\"ds\\": {<br>\\n\\"scale\\": 0.7400249944258175,<br>\\n\\"offset\\": [<br>\\n908.8157263963966,<br>\\n99.87059505287436<br>\\n]<br>\\n},<br>\\n\\"0246.VERSION\\": [<br>\\n0,<br>\\n0,<br>\\n4<br>\\n]<br>\\n},<br>\\n\\"version\\": 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/高清放大工作流/4. Ultimate SD Upscale工作流.json","value":{"title":"4. Ultimate SD Upscale工作流.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/高清放大工作流/4. Ultimate SD Upscale工作流.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{d as comp,m as data};

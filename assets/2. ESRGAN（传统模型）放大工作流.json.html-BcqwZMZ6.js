import{_ as e,c as l,b as t,r as a,o}from"./app-DPAHrD_W.js";const s={};function i(p,d){const n=a("VueFlow");return o(),l("div",null,[t(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 26,
  "last_link_id": 35,
  "nodes": [
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": {
        "0": 1185.5013427734375,
        "1": 412.0678405761719
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
          "link": 7,
          "label": "samples"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 30,
          "label": "vae"
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
          "label": "IMAGE"
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      },
      "widgets_values": []
    },
    {
      "id": 13,
      "type": "VAEDecode",
      "pos": {
        "0": 3221.219970703125,
        "1": 232.3800506591797
      },
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 14,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 15,
          "label": "samples"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 33,
          "label": "vae"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            17
          ],
          "slot_index": 0,
          "label": "IMAGE"
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      },
      "widgets_values": []
    },
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": {
        "0": 81.780029296875,
        "1": 142.33999633789062
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
          "link": 28,
          "label": "clip"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            4,
            12
          ],
          "slot_index": 0,
          "label": "CONDITIONING"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "masterpiece HDR victorian portrait painting of woman, blonde hair, mountain nature, blue sky\\n"
      ]
    },
    {
      "id": 7,
      "type": "CLIPTextEncode",
      "pos": {
        "0": 84.780029296875,
        "1": 352.3399963378906
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
          "link": 29,
          "label": "clip"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            6,
            13
          ],
          "slot_index": 0,
          "label": "CONDITIONING"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "bad hands, text, watermark\\n"
      ]
    },
    {
      "id": 5,
      "type": "EmptyLatentImage",
      "pos": {
        "0": 142.780029296875,
        "1": 571.3400268554688
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
          "label": "LATENT"
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
      "id": 3,
      "type": "KSampler",
      "pos": {
        "0": 552.780029296875,
        "1": 143.33999633789062
      },
      "size": {
        "0": 315,
        "1": 262
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 34,
          "label": "model"
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 4,
          "label": "positive"
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 6,
          "label": "negative"
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 2,
          "label": "latent_image"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            7,
            20
          ],
          "slot_index": 0,
          "label": "LATENT"
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        251225068430076,
        "randomize",
        12,
        8,
        "dpmpp_sde",
        "normal",
        1
      ]
    },
    {
      "id": 21,
      "type": "VAEDecode",
      "pos": {
        "0": 988.1799926757812,
        "1": 29.559995651245117
      },
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 20,
          "label": "samples"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 32,
          "label": "vae"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            23
          ],
          "slot_index": 0,
          "label": "IMAGE"
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      },
      "widgets_values": []
    },
    {
      "id": 20,
      "type": "VAEEncode",
      "pos": {
        "0": 2459.099609375,
        "1": 103.0200424194336
      },
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 12,
      "mode": 0,
      "inputs": [
        {
          "name": "pixels",
          "type": "IMAGE",
          "link": 26,
          "label": "pixels"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 31,
          "label": "vae"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            18
          ],
          "slot_index": 0,
          "label": "LATENT"
        }
      ],
      "properties": {
        "Node name for S&R": "VAEEncode"
      },
      "widgets_values": []
    },
    {
      "id": 22,
      "type": "ImageUpscaleWithModel",
      "pos": {
        "0": 1631.0599365234375,
        "1": 3.6599864959716797
      },
      "size": {
        "0": 226.8000030517578,
        "1": 46
      },
      "flags": {},
      "order": 10,
      "mode": 0,
      "inputs": [
        {
          "name": "upscale_model",
          "type": "UPSCALE_MODEL",
          "link": 24,
          "label": "upscale_model"
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 23,
          "label": "image"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            27
          ],
          "slot_index": 0,
          "label": "IMAGE"
        }
      ],
      "properties": {
        "Node name for S&R": "ImageUpscaleWithModel"
      },
      "widgets_values": []
    },
    {
      "id": 9,
      "type": "SaveImage",
      "pos": {
        "0": 1446,
        "1": 411
      },
      "size": {
        "0": 611.2635498046875,
        "1": 628.5978393554688
      },
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 9,
          "label": "images"
        }
      ],
      "outputs": [],
      "properties": {},
      "widgets_values": [
        "ComfyUI"
      ]
    },
    {
      "id": 24,
      "type": "ImageScale",
      "pos": {
        "0": 1931,
        "1": 10
      },
      "size": {
        "0": 315,
        "1": 130
      },
      "flags": {},
      "order": 11,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 27,
          "label": "image"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            26
          ],
          "slot_index": 0,
          "label": "IMAGE"
        }
      ],
      "properties": {
        "Node name for S&R": "ImageScale"
      },
      "widgets_values": [
        "bilinear",
        1536,
        1536,
        "disabled"
      ]
    },
    {
      "id": 12,
      "type": "SaveImage",
      "pos": {
        "0": 3463,
        "1": 230
      },
      "size": {
        "0": 868.0108642578125,
        "1": 936.9744873046875
      },
      "flags": {},
      "order": 15,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 17,
          "label": "images"
        }
      ],
      "outputs": [],
      "properties": {},
      "widgets_values": [
        "ComfyUI"
      ]
    },
    {
      "id": 11,
      "type": "KSampler",
      "pos": {
        "0": 2811.9580078125,
        "1": 176.22007751464844
      },
      "size": {
        "0": 315,
        "1": 262
      },
      "flags": {},
      "order": 13,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 35,
          "slot_index": 0,
          "label": "model"
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 12,
          "slot_index": 1,
          "label": "positive"
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 13,
          "slot_index": 2,
          "label": "negative"
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 18,
          "slot_index": 3,
          "label": "latent_image"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            15
          ],
          "slot_index": 0,
          "label": "LATENT"
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        783745448521451,
        "randomize",
        14,
        8,
        "uni_pc_bh2",
        "normal",
        0.5
      ]
    },
    {
      "id": 25,
      "type": "CheckpointLoaderSimple",
      "pos": {
        "0": -262,
        "1": 284
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
            34,
            35
          ],
          "slot_index": 0,
          "label": "MODEL"
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            28,
            29
          ],
          "slot_index": 1,
          "label": "CLIP"
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            30,
            31,
            32,
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
        "v2-1_768-ema-pruned.ckpt"
      ]
    },
    {
      "id": 23,
      "type": "UpscaleModelLoader",
      "pos": {
        "0": 1288.0599365234375,
        "1": -39.34001159667969
      },
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 2,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "UPSCALE_MODEL",
          "type": "UPSCALE_MODEL",
          "links": [
            24
          ],
          "slot_index": 0,
          "label": "UPSCALE_MODEL"
        }
      ],
      "properties": {
        "Node name for S&R": "UpscaleModelLoader"
      },
      "widgets_values": [
        "RealESRGAN_x4plus.pth"
      ]
    },
    {
      "id": 26,
      "type": "Note",
      "pos": {
        "0": -961,
        "1": 28
      },
      "size": [
        637.5789549206041,
        843.344421510058
      ],
      "flags": {},
      "order": 3,
      "mode": 0,
      "inputs": [],
      "outputs": [],
      "properties": {},
      "widgets_values": [
        "## Stable Diffustion 方式\\n\\n在SD UI里，有三种方式：\\n1. 文生图的 \\"高清修复\\" (Hi-res fix)\\n2. 图生图的 \\"SD放大\\" (SD Upscale) 脚本\\n3. 后期处理中的算法放大\\n\\n## ComfyUI 方式\\n\\n而ComfyUI里，也有类似的方式，例如官方示例/2_pass_text2img的方式\\n里面有三个图(工作流)：\\n1. hiresfix_latent_workflow (标准的文生图高清修复工作流)\\n2. hiresfix_esrgan_workflow\\n3. latent_upscale_different_prompt_model\\n\\n### hiresfix_latent_workflow\\n\\n核心：\\n\\n1. Upscale Latent节点\\n   将一开始的768尺寸放大到1152尺寸\\n   该节点还有另一个版本：Upscale Latent By，按倍数进行缩放\\n2. 第二个KSample节点\\n   注意该方式只会做拉伸，并不会对原图进行细节的填充，所以还需要重新采样一次\\n   于是就有了第二次KSample\\n\\n要项：\\n\\n1. 降噪强度(重绘强度)\\n   第二个KSampler相当于图生图的采样器，denoise决定第二次生成的降噪力度。拉到1相当于重新生成一张图。\\n   推荐：0.5~0.8 (更像~更多细节，不要低于0.5，不然容易出现噪声没去干净)\\n\\n哪怕降噪强度0.5也出现更多细节怎么办？例如多手多头。这时需要使用第二个降噪工作流 hiresfix_esrgan_workflow\\n\\n### hiresfix_esrgan_workflow\\n\\n借助ESRGAN等传统放大模型来实现这个放大过程，更复杂\\n\\n核心：\\n\\n1. VAE Decode，先解码成图片格式\\n2. 放大图片\\n   - Load Upscale Model，放大模型加载器\\n   - Upscale Image (using Model)，放大图片\\n   - Upscale Image\\n   这里的 Upscale Latent、Upscale Image 都是很像的，也都有by版本\\n3. VAE Encode，图片重新编码回来\\n4. 再KSampler图生图\\n\\n要项：\\n\\n- 这种方式在重绘时，哪怕以0.2~0.3这种低降噪采样，也不会出现噪声痕迹。\\n  即比Latent缩放的流程多出来的步骤，能让图片在重绘时使用更低的降噪采样。\\n  原因是：先解码变成图片，然后使用超分辨率放大模型的放大并不会轻易改变图片的原有内容（这与Latent直接缩放不同）\\n- 放大模型的选择\\n  \`Load Upscale Model\` 可以选择放大模型 (模型在 \`ComfyUI根目录/models/upscale_models\`)\\n  \`RealESRGAN_x4plus.pth\`，R-ESRGAN的4倍放大模型，目前泛用效果好的，适用于照片风格\\n  \`Anime 6B\` 适用于动漫插画风格的图像\\n  \`4xUltrasharp_4xUltrasharpV10.pth\` 放大过程中进行锐化\\n  （SD WebUI高清修复中选择放大算法时，就是选择的这些）\\n\\n选用、缺点：\\n\\n1. 低效。与Latent缩放相比，需要更多的计算和时间，容易暴显存\\n2. 降噪低不易重绘时增添更多细节，只是单纯放大原图容易让结果显得 “油腻”。而降噪高容易多手多头\\n"
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
      12,
      6,
      0,
      11,
      1,
      "CONDITIONING"
    ],
    [
      13,
      7,
      0,
      11,
      2,
      "CONDITIONING"
    ],
    [
      15,
      11,
      0,
      13,
      0,
      "LATENT"
    ],
    [
      17,
      13,
      0,
      12,
      0,
      "IMAGE"
    ],
    [
      18,
      20,
      0,
      11,
      3,
      "LATENT"
    ],
    [
      20,
      3,
      0,
      21,
      0,
      "LATENT"
    ],
    [
      23,
      21,
      0,
      22,
      1,
      "IMAGE"
    ],
    [
      24,
      23,
      0,
      22,
      0,
      "UPSCALE_MODEL"
    ],
    [
      26,
      24,
      0,
      20,
      0,
      "IMAGE"
    ],
    [
      27,
      22,
      0,
      24,
      0,
      "IMAGE"
    ],
    [
      28,
      25,
      1,
      6,
      0,
      "CLIP"
    ],
    [
      29,
      25,
      1,
      7,
      0,
      "CLIP"
    ],
    [
      30,
      25,
      2,
      8,
      1,
      "VAE"
    ],
    [
      31,
      25,
      2,
      20,
      1,
      "VAE"
    ],
    [
      32,
      25,
      2,
      21,
      1,
      "VAE"
    ],
    [
      33,
      25,
      2,
      13,
      1,
      "VAE"
    ],
    [
      34,
      25,
      0,
      3,
      0,
      "MODEL"
    ],
    [
      35,
      25,
      0,
      11,
      0,
      "MODEL"
    ]
  ],
  "groups": [
    {
      "title": "Downscale image to a more reasonable size",
      "bounding": [
        1852,
        -74,
        483,
        245
      ],
      "color": "#8AA",
      "font_size": 24,
      "flags": {}
    },
    {
      "title": "Encode back to latent space",
      "bounding": [
        2407,
        14,
        312,
        157
      ],
      "color": "#A88",
      "font_size": 24,
      "flags": {}
    },
    {
      "title": "Decode to Pixel space",
      "bounding": [
        953,
        -46,
        285,
        142
      ],
      "color": "#A88",
      "font_size": 24,
      "flags": {}
    },
    {
      "title": "ESRGAN upscale with 4x model",
      "bounding": [
        1259,
        -117,
        578,
        184
      ],
      "color": "#3f789e",
      "font_size": 24,
      "flags": {}
    },
    {
      "title": "Save Final Image",
      "bounding": [
        3210,
        139,
        483,
        199
      ],
      "color": "#3f789e",
      "font_size": 24,
      "flags": {}
    },
    {
      "title": "Second pass",
      "bounding": [
        2782,
        97,
        379,
        429
      ],
      "color": "#444",
      "font_size": 24,
      "flags": {}
    },
    {
      "title": "Save Intermediate Image",
      "bounding": [
        1175,
        335,
        516,
        196
      ],
      "color": "#3f789e",
      "font_size": 24,
      "flags": {}
    },
    {
      "title": "Txt2Img",
      "bounding": [
        -294,
        0,
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
      "scale": 0.620921323059155,
      "offset": [
        1850.8551371787914,
        490.3381454257473
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
`})])}const m=e(s,[["render",i],["__file","2. ESRGAN（传统模型）放大工作流.json.html.vue"]]),E=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%AB%98%E6%B8%85%E6%94%BE%E5%A4%A7%E5%B7%A5%E4%BD%9C%E6%B5%81/2.%20ESRGAN%EF%BC%88%E4%BC%A0%E7%BB%9F%E6%A8%A1%E5%9E%8B%EF%BC%89%E6%94%BE%E5%A4%A7%E5%B7%A5%E4%BD%9C%E6%B5%81.json.html","title":"2. ESRGAN（传统模型）放大工作流.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 26, \\"last_link_id\\": 35, \\"nodes\\": [ { \\"id\\": 8, \\"type\\": \\"VAEDecode\\", \\"pos\\": { \\"0\\": 1185.5013427734375, \\"1\\": 412.0678405761719 }, \\"size\\": { \\"0\\": 210, \\"1\\": 46 }, \\"...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%AB%98%E6%B8%85%E6%94%BE%E5%A4%A7%E5%B7%A5%E4%BD%9C%E6%B5%81/2.%20ESRGAN%EF%BC%88%E4%BC%A0%E7%BB%9F%E6%A8%A1%E5%9E%8B%EF%BC%89%E6%94%BE%E5%A4%A7%E5%B7%A5%E4%BD%9C%E6%B5%81.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 26, \\"last_link_id\\": 35, \\"nodes\\": [ { \\"id\\": 8, \\"type\\": \\"VAEDecode\\", \\"pos\\": { \\"0\\": 1185.5013427734375, \\"1\\": 412.0678405761719 }, \\"size\\": { \\"0\\": 210, \\"1\\": 46 }, \\"..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{},"readingTime":{"minutes":6.17,"words":1851},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/高清放大工作流/2. ESRGAN（传统模型）放大工作流.json","excerpt":"<p>{\\n\\"last_node_id\\": 26,\\n\\"last_link_id\\": 35,\\n\\"nodes\\": [\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": {\\n\\"0\\": 1185.5013427734375,\\n\\"1\\": 412.0678405761719\\n},\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 7,\\n\\"label\\": \\"samples\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 30,\\n\\"label\\": \\"vae\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n9\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"IMAGE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 13,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": {\\n\\"0\\": 3221.219970703125,\\n\\"1\\": 232.3800506591797\\n},\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 14,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 15,\\n\\"label\\": \\"samples\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 33,\\n\\"label\\": \\"vae\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n17\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"IMAGE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 6,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": {\\n\\"0\\": 81.780029296875,\\n\\"1\\": 142.33999633789062\\n},\\n\\"size\\": {\\n\\"0\\": 422.84503173828125,\\n\\"1\\": 164.31304931640625\\n},\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 28,\\n\\"label\\": \\"clip\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n4,\\n12\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"CONDITIONING\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"masterpiece HDR victorian portrait painting of woman, blonde hair, mountain nature, blue sky\\\\n\\"\\n]\\n},\\n{\\n\\"id\\": 7,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": {\\n\\"0\\": 84.780029296875,\\n\\"1\\": 352.3399963378906\\n},\\n\\"size\\": {\\n\\"0\\": 425.27801513671875,\\n\\"1\\": 180.6060791015625\\n},\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 29,\\n\\"label\\": \\"clip\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n6,\\n13\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"CONDITIONING\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"bad hands, text, watermark\\\\n\\"\\n]\\n},\\n{\\n\\"id\\": 5,\\n\\"type\\": \\"EmptyLatentImage\\",\\n\\"pos\\": {\\n\\"0\\": 142.780029296875,\\n\\"1\\": 571.3400268554688\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 106\\n},\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n2\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"LATENT\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"EmptyLatentImage\\"\\n},\\n\\"widgets_values\\": [\\n768,\\n768,\\n1\\n]\\n},\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": {\\n\\"0\\": 552.780029296875,\\n\\"1\\": 143.33999633789062\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 262\\n},\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 34,\\n\\"label\\": \\"model\\"\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 4,\\n\\"label\\": \\"positive\\"\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 6,\\n\\"label\\": \\"negative\\"\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 2,\\n\\"label\\": \\"latent_image\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n7,\\n20\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"LATENT\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n251225068430076,\\n\\"randomize\\",\\n12,\\n8,\\n\\"dpmpp_sde\\",\\n\\"normal\\",\\n1\\n]\\n},\\n{\\n\\"id\\": 21,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": {\\n\\"0\\": 988.1799926757812,\\n\\"1\\": 29.559995651245117\\n},\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 20,\\n\\"label\\": \\"samples\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 32,\\n\\"label\\": \\"vae\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n23\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"IMAGE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 20,\\n\\"type\\": \\"VAEEncode\\",\\n\\"pos\\": {\\n\\"0\\": 2459.099609375,\\n\\"1\\": 103.0200424194336\\n},\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 12,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"pixels\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 26,\\n\\"label\\": \\"pixels\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 31,\\n\\"label\\": \\"vae\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n18\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"LATENT\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEEncode\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 22,\\n\\"type\\": \\"ImageUpscaleWithModel\\",\\n\\"pos\\": {\\n\\"0\\": 1631.0599365234375,\\n\\"1\\": 3.6599864959716797\\n},\\n\\"size\\": {\\n\\"0\\": 226.8000030517578,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"upscale_model\\",\\n\\"type\\": \\"UPSCALE_MODEL\\",\\n\\"link\\": 24,\\n\\"label\\": \\"upscale_model\\"\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 23,\\n\\"label\\": \\"image\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n27\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"IMAGE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ImageUpscaleWithModel\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 9,\\n\\"type\\": \\"SaveImage\\",\\n\\"pos\\": {\\n\\"0\\": 1446,\\n\\"1\\": 411\\n},\\n\\"size\\": {\\n\\"0\\": 611.2635498046875,\\n\\"1\\": 628.5978393554688\\n},\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 9,\\n\\"label\\": \\"images\\"\\n}\\n],\\n\\"outputs\\": [],\\n\\"properties\\": {},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\"\\n]\\n},\\n{\\n\\"id\\": 24,\\n\\"type\\": \\"ImageScale\\",\\n\\"pos\\": {\\n\\"0\\": 1931,\\n\\"1\\": 10\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 130\\n},\\n\\"flags\\": {},\\n\\"order\\": 11,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 27,\\n\\"label\\": \\"image\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n26\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"IMAGE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ImageScale\\"\\n},\\n\\"widgets_values\\": [\\n\\"bilinear\\",\\n1536,\\n1536,\\n\\"disabled\\"\\n]\\n},\\n{\\n\\"id\\": 12,\\n\\"type\\": \\"SaveImage\\",\\n\\"pos\\": {\\n\\"0\\": 3463,\\n\\"1\\": 230\\n},\\n\\"size\\": {\\n\\"0\\": 868.0108642578125,\\n\\"1\\": 936.9744873046875\\n},\\n\\"flags\\": {},\\n\\"order\\": 15,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 17,\\n\\"label\\": \\"images\\"\\n}\\n],\\n\\"outputs\\": [],\\n\\"properties\\": {},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\"\\n]\\n},\\n{\\n\\"id\\": 11,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": {\\n\\"0\\": 2811.9580078125,\\n\\"1\\": 176.22007751464844\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 262\\n},\\n\\"flags\\": {},\\n\\"order\\": 13,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 35,\\n\\"slot_index\\": 0,\\n\\"label\\": \\"model\\"\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 12,\\n\\"slot_index\\": 1,\\n\\"label\\": \\"positive\\"\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 13,\\n\\"slot_index\\": 2,\\n\\"label\\": \\"negative\\"\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 18,\\n\\"slot_index\\": 3,\\n\\"label\\": \\"latent_image\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n15\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"LATENT\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n783745448521451,\\n\\"randomize\\",\\n14,\\n8,\\n\\"uni_pc_bh2\\",\\n\\"normal\\",\\n0.5\\n]\\n},\\n{\\n\\"id\\": 25,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": {\\n\\"0\\": -262,\\n\\"1\\": 284\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n34,\\n35\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"MODEL\\"\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n28,\\n29\\n],\\n\\"slot_index\\": 1,\\n\\"label\\": \\"CLIP\\"\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n30,\\n31,\\n32,\\n33\\n],\\n\\"slot_index\\": 2,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"v2-1_768-ema-pruned.ckpt\\"\\n]\\n},\\n{\\n\\"id\\": 23,\\n\\"type\\": \\"UpscaleModelLoader\\",\\n\\"pos\\": {\\n\\"0\\": 1288.0599365234375,\\n\\"1\\": -39.34001159667969\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"UPSCALE_MODEL\\",\\n\\"type\\": \\"UPSCALE_MODEL\\",\\n\\"links\\": [\\n24\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"UPSCALE_MODEL\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"UpscaleModelLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"RealESRGAN_x4plus.pth\\"\\n]\\n},\\n{\\n\\"id\\": 26,\\n\\"type\\": \\"Note\\",\\n\\"pos\\": {\\n\\"0\\": -961,\\n\\"1\\": 28\\n},\\n\\"size\\": [\\n637.5789549206041,\\n843.344421510058\\n],\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [],\\n\\"properties\\": {},\\n\\"widgets_values\\": [\\n\\"## Stable Diffustion 方式\\\\n\\\\n在SD UI里，有三种方式：\\\\n1. 文生图的 \\"高清修复\\" (Hi-res fix)\\\\n2. 图生图的 \\"SD放大\\" (SD Upscale) 脚本\\\\n3. 后期处理中的算法放大\\\\n\\\\n## ComfyUI 方式\\\\n\\\\n而ComfyUI里，也有类似的方式，例如官方示例/2_pass_text2img的方式\\\\n里面有三个图(工作流)：\\\\n1. hiresfix_latent_workflow (标准的文生图高清修复工作流)\\\\n2. hiresfix_esrgan_workflow\\\\n3. latent_upscale_different_prompt_model\\\\n\\\\n### hiresfix_latent_workflow\\\\n\\\\n核心：\\\\n\\\\n1. Upscale Latent节点\\\\n   将一开始的768尺寸放大到1152尺寸\\\\n   该节点还有另一个版本：Upscale Latent By，按倍数进行缩放\\\\n2. 第二个KSample节点\\\\n   注意该方式只会做拉伸，并不会对原图进行细节的填充，所以还需要重新采样一次\\\\n   于是就有了第二次KSample\\\\n\\\\n要项：\\\\n\\\\n1. 降噪强度(重绘强度)\\\\n   第二个KSampler相当于图生图的采样器，denoise决定第二次生成的降噪力度。拉到1相当于重新生成一张图。\\\\n   推荐：0.5~0.8 (更像~更多细节，不要低于0.5，不然容易出现噪声没去干净)\\\\n\\\\n哪怕降噪强度0.5也出现更多细节怎么办？例如多手多头。这时需要使用第二个降噪工作流 hiresfix_esrgan_workflow\\\\n\\\\n### hiresfix_esrgan_workflow\\\\n\\\\n借助ESRGAN等传统放大模型来实现这个放大过程，更复杂\\\\n\\\\n核心：\\\\n\\\\n1. VAE Decode，先解码成图片格式\\\\n2. 放大图片\\\\n   - Load Upscale Model，放大模型加载器\\\\n   - Upscale Image (using Model)，放大图片\\\\n   - Upscale Image\\\\n   这里的 Upscale Latent、Upscale Image 都是很像的，也都有by版本\\\\n3. VAE Encode，图片重新编码回来\\\\n4. 再KSampler图生图\\\\n\\\\n要项：\\\\n\\\\n- 这种方式在重绘时，哪怕以0.2~0.3这种低降噪采样，也不会出现噪声痕迹。\\\\n  即比Latent缩放的流程多出来的步骤，能让图片在重绘时使用更低的降噪采样。\\\\n  原因是：先解码变成图片，然后使用超分辨率放大模型的放大并不会轻易改变图片的原有内容（这与Latent直接缩放不同）\\\\n- 放大模型的选择\\\\n  <code>Load Upscale Model</code> 可以选择放大模型 (模型在 <code>ComfyUI根目录/models/upscale_models</code>)\\\\n  <code>RealESRGAN_x4plus.pth</code>，R-ESRGAN的4倍放大模型，目前泛用效果好的，适用于照片风格\\\\n  <code>Anime 6B</code> 适用于动漫插画风格的图像\\\\n  <code>4xUltrasharp_4xUltrasharpV10.pth</code> 放大过程中进行锐化\\\\n  （SD WebUI高清修复中选择放大算法时，就是选择的这些）\\\\n\\\\n选用、缺点：\\\\n\\\\n1. 低效。与Latent缩放相比，需要更多的计算和时间，容易暴显存\\\\n2. 降噪低不易重绘时增添更多细节，只是单纯放大原图容易让结果显得 “油腻”。而降噪高容易多手多头\\\\n\\"\\n],\\n\\"color\\": \\"#432\\",\\n\\"bgcolor\\": \\"#653\\"\\n}\\n],\\n\\"links\\": [\\n[\\n2,\\n5,\\n0,\\n3,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n4,\\n6,\\n0,\\n3,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n6,\\n7,\\n0,\\n3,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n7,\\n3,\\n0,\\n8,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n9,\\n8,\\n0,\\n9,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n12,\\n6,\\n0,\\n11,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n13,\\n7,\\n0,\\n11,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n15,\\n11,\\n0,\\n13,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n17,\\n13,\\n0,\\n12,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n18,\\n20,\\n0,\\n11,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n20,\\n3,\\n0,\\n21,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n23,\\n21,\\n0,\\n22,\\n1,\\n\\"IMAGE\\"\\n],\\n[\\n24,\\n23,\\n0,\\n22,\\n0,\\n\\"UPSCALE_MODEL\\"\\n],\\n[\\n26,\\n24,\\n0,\\n20,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n27,\\n22,\\n0,\\n24,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n28,\\n25,\\n1,\\n6,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n29,\\n25,\\n1,\\n7,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n30,\\n25,\\n2,\\n8,\\n1,\\n\\"VAE\\"\\n],\\n[\\n31,\\n25,\\n2,\\n20,\\n1,\\n\\"VAE\\"\\n],\\n[\\n32,\\n25,\\n2,\\n21,\\n1,\\n\\"VAE\\"\\n],\\n[\\n33,\\n25,\\n2,\\n13,\\n1,\\n\\"VAE\\"\\n],\\n[\\n34,\\n25,\\n0,\\n3,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n35,\\n25,\\n0,\\n11,\\n0,\\n\\"MODEL\\"\\n]\\n],\\n\\"groups\\": [\\n{\\n\\"title\\": \\"Downscale image to a more reasonable size\\",\\n\\"bounding\\": [\\n1852,\\n-74,\\n483,\\n245\\n],\\n\\"color\\": \\"#8AA\\",\\n\\"font_size\\": 24,\\n\\"flags\\": {}\\n},\\n{\\n\\"title\\": \\"Encode back to latent space\\",\\n\\"bounding\\": [\\n2407,\\n14,\\n312,\\n157\\n],\\n\\"color\\": \\"#A88\\",\\n\\"font_size\\": 24,\\n\\"flags\\": {}\\n},\\n{\\n\\"title\\": \\"Decode to Pixel space\\",\\n\\"bounding\\": [\\n953,\\n-46,\\n285,\\n142\\n],\\n\\"color\\": \\"#A88\\",\\n\\"font_size\\": 24,\\n\\"flags\\": {}\\n},\\n{\\n\\"title\\": \\"ESRGAN upscale with 4x model\\",\\n\\"bounding\\": [\\n1259,\\n-117,\\n578,\\n184\\n],\\n\\"color\\": \\"#3f789e\\",\\n\\"font_size\\": 24,\\n\\"flags\\": {}\\n},\\n{\\n\\"title\\": \\"Save Final Image\\",\\n\\"bounding\\": [\\n3210,\\n139,\\n483,\\n199\\n],\\n\\"color\\": \\"#3f789e\\",\\n\\"font_size\\": 24,\\n\\"flags\\": {}\\n},\\n{\\n\\"title\\": \\"Second pass\\",\\n\\"bounding\\": [\\n2782,\\n97,\\n379,\\n429\\n],\\n\\"color\\": \\"#444\\",\\n\\"font_size\\": 24,\\n\\"flags\\": {}\\n},\\n{\\n\\"title\\": \\"Save Intermediate Image\\",\\n\\"bounding\\": [\\n1175,\\n335,\\n516,\\n196\\n],\\n\\"color\\": \\"#3f789e\\",\\n\\"font_size\\": 24,\\n\\"flags\\": {}\\n},\\n{\\n\\"title\\": \\"Txt2Img\\",\\n\\"bounding\\": [\\n-294,\\n0,\\n1211,\\n708\\n],\\n\\"color\\": \\"#a1309b\\",\\n\\"font_size\\": 24,\\n\\"flags\\": {}\\n}\\n],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"ds\\": {\\n\\"scale\\": 0.620921323059155,\\n\\"offset\\": [\\n1850.8551371787914,\\n490.3381454257473\\n]\\n},\\n\\"0246.VERSION\\": [\\n0,\\n0,\\n4\\n]\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/高清放大工作流/2. ESRGAN（传统模型）放大工作流.json","value":{"title":"2. ESRGAN（传统模型）放大工作流.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/高清放大工作流/2. ESRGAN（传统模型）放大工作流.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{m as comp,E as data};

import{_ as t,c as o,b as u,r as q,o as r}from"./app-VJELzSjC.js";const e={};function b(l,a){const n=q("VueFlow");return r(),o("div",null,[u(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const i=t(e,[["render",b]]),p=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%AB%98%E6%B8%85%E6%94%BE%E5%A4%A7%E5%B7%A5%E4%BD%9C%E6%B5%81/2.%20ESRGAN%EF%BC%88%E4%BC%A0%E7%BB%9F%E6%A8%A1%E5%9E%8B%EF%BC%89%E6%94%BE%E5%A4%A7%E5%B7%A5%E4%BD%9C%E6%B5%81.json.html","title":"2. ESRGAN（传统模型）放大工作流.json","lang":"zh-CN","frontmatter":{"description":"{ &quot;last_node_id&quot;: 26, &quot;last_link_id&quot;: 35, &quot;nodes&quot;: [ { &quot;id&quot;: 8, &quot;type&quot;: &quot;VAEDecode&quot;, &quot;pos&quot;: { &quot;0&quot;...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%AB%98%E6%B8%85%E6%94%BE%E5%A4%A7%E5%B7%A5%E4%BD%9C%E6%B5%81/2.%20ESRGAN%EF%BC%88%E4%BC%A0%E7%BB%9F%E6%A8%A1%E5%9E%8B%EF%BC%89%E6%94%BE%E5%A4%A7%E5%B7%A5%E4%BD%9C%E6%B5%81.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ &quot;last_node_id&quot;: 26, &quot;last_link_id&quot;: 35, &quot;nodes&quot;: [ { &quot;id&quot;: 8, &quot;type&quot;: &quot;VAEDecode&quot;, &quot;pos&quot;: { &quot;0&quot;..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"layout":"Layout"},"git":{},"readingTime":{"minutes":6.17,"words":1851},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/高清放大工作流/2. ESRGAN（传统模型）放大工作流.json","excerpt":"<p>{<br>\\n&quot;last_node_id&quot;: 26,<br>\\n&quot;last_link_id&quot;: 35,<br>\\n&quot;nodes&quot;: [<br>\\n{<br>\\n&quot;id&quot;: 8,<br>\\n&quot;type&quot;: &quot;VAEDecode&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1185.5013427734375,<br>\\n&quot;1&quot;: 412.0678405761719<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 46<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 7,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;samples&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 7,<br>\\n&quot;label&quot;: &quot;samples&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 30,<br>\\n&quot;label&quot;: &quot;vae&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n9<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;IMAGE&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEDecode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: []<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 13,<br>\\n&quot;type&quot;: &quot;VAEDecode&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 3221.219970703125,<br>\\n&quot;1&quot;: 232.3800506591797<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 46<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 14,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;samples&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 15,<br>\\n&quot;label&quot;: &quot;samples&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 33,<br>\\n&quot;label&quot;: &quot;vae&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n17<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;IMAGE&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEDecode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: []<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 6,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 81.780029296875,<br>\\n&quot;1&quot;: 142.33999633789062<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 422.84503173828125,<br>\\n&quot;1&quot;: 164.31304931640625<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 4,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 28,<br>\\n&quot;label&quot;: &quot;clip&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n4,<br>\\n12<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;CONDITIONING&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;masterpiece HDR victorian portrait painting of woman, blonde hair, mountain nature, blue sky\\\\n&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 7,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 84.780029296875,<br>\\n&quot;1&quot;: 352.3399963378906<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 425.27801513671875,<br>\\n&quot;1&quot;: 180.6060791015625<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 5,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 29,<br>\\n&quot;label&quot;: &quot;clip&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n6,<br>\\n13<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;CONDITIONING&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;bad hands, text, watermark\\\\n&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 5,<br>\\n&quot;type&quot;: &quot;EmptyLatentImage&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 142.780029296875,<br>\\n&quot;1&quot;: 571.3400268554688<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 106<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 0,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n2<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;LATENT&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;EmptyLatentImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n768,<br>\\n768,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 3,<br>\\n&quot;type&quot;: &quot;KSampler&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 552.780029296875,<br>\\n&quot;1&quot;: 143.33999633789062<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 262<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 6,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 34,<br>\\n&quot;label&quot;: &quot;model&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 4,<br>\\n&quot;label&quot;: &quot;positive&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 6,<br>\\n&quot;label&quot;: &quot;negative&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 2,<br>\\n&quot;label&quot;: &quot;latent_image&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n7,<br>\\n20<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;LATENT&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;KSampler&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n251225068430076,<br>\\n&quot;randomize&quot;,<br>\\n12,<br>\\n8,<br>\\n&quot;dpmpp_sde&quot;,<br>\\n&quot;normal&quot;,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 21,<br>\\n&quot;type&quot;: &quot;VAEDecode&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 988.1799926757812,<br>\\n&quot;1&quot;: 29.559995651245117<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 46<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 8,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;samples&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 20,<br>\\n&quot;label&quot;: &quot;samples&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 32,<br>\\n&quot;label&quot;: &quot;vae&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n23<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;IMAGE&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEDecode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: []<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 20,<br>\\n&quot;type&quot;: &quot;VAEEncode&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 2459.099609375,<br>\\n&quot;1&quot;: 103.0200424194336<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 46<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 12,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;pixels&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 26,<br>\\n&quot;label&quot;: &quot;pixels&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 31,<br>\\n&quot;label&quot;: &quot;vae&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n18<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;LATENT&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: []<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 22,<br>\\n&quot;type&quot;: &quot;ImageUpscaleWithModel&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1631.0599365234375,<br>\\n&quot;1&quot;: 3.6599864959716797<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 226.8000030517578,<br>\\n&quot;1&quot;: 46<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 10,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;upscale_model&quot;,<br>\\n&quot;type&quot;: &quot;UPSCALE_MODEL&quot;,<br>\\n&quot;link&quot;: 24,<br>\\n&quot;label&quot;: &quot;upscale_model&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 23,<br>\\n&quot;label&quot;: &quot;image&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n27<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;IMAGE&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ImageUpscaleWithModel&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: []<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 9,<br>\\n&quot;type&quot;: &quot;SaveImage&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1446,<br>\\n&quot;1&quot;: 411<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 611.2635498046875,<br>\\n&quot;1&quot;: 628.5978393554688<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 9,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 9,<br>\\n&quot;label&quot;: &quot;images&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [],<br>\\n&quot;properties&quot;: {},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;ComfyUI&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 24,<br>\\n&quot;type&quot;: &quot;ImageScale&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1931,<br>\\n&quot;1&quot;: 10<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 130<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 11,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 27,<br>\\n&quot;label&quot;: &quot;image&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n26<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;IMAGE&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ImageScale&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;bilinear&quot;,<br>\\n1536,<br>\\n1536,<br>\\n&quot;disabled&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 12,<br>\\n&quot;type&quot;: &quot;SaveImage&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 3463,<br>\\n&quot;1&quot;: 230<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 868.0108642578125,<br>\\n&quot;1&quot;: 936.9744873046875<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 15,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 17,<br>\\n&quot;label&quot;: &quot;images&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [],<br>\\n&quot;properties&quot;: {},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;ComfyUI&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 11,<br>\\n&quot;type&quot;: &quot;KSampler&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 2811.9580078125,<br>\\n&quot;1&quot;: 176.22007751464844<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 262<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 13,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 35,<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;model&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 12,<br>\\n&quot;slot_index&quot;: 1,<br>\\n&quot;label&quot;: &quot;positive&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 13,<br>\\n&quot;slot_index&quot;: 2,<br>\\n&quot;label&quot;: &quot;negative&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 18,<br>\\n&quot;slot_index&quot;: 3,<br>\\n&quot;label&quot;: &quot;latent_image&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n15<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;LATENT&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;KSampler&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n783745448521451,<br>\\n&quot;randomize&quot;,<br>\\n14,<br>\\n8,<br>\\n&quot;uni_pc_bh2&quot;,<br>\\n&quot;normal&quot;,<br>\\n0.5<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 25,<br>\\n&quot;type&quot;: &quot;CheckpointLoaderSimple&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: -262,<br>\\n&quot;1&quot;: 284<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 98<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 1,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n34,<br>\\n35<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;MODEL&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [<br>\\n28,<br>\\n29<br>\\n],<br>\\n&quot;slot_index&quot;: 1,<br>\\n&quot;label&quot;: &quot;CLIP&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;VAE&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;links&quot;: [<br>\\n30,<br>\\n31,<br>\\n32,<br>\\n33<br>\\n],<br>\\n&quot;slot_index&quot;: 2,<br>\\n&quot;label&quot;: &quot;VAE&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CheckpointLoaderSimple&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;v2-1_768-ema-pruned.ckpt&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 23,<br>\\n&quot;type&quot;: &quot;UpscaleModelLoader&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1288.0599365234375,<br>\\n&quot;1&quot;: -39.34001159667969<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 58<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 2,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;UPSCALE_MODEL&quot;,<br>\\n&quot;type&quot;: &quot;UPSCALE_MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n24<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;UPSCALE_MODEL&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;UpscaleModelLoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;RealESRGAN_x4plus.pth&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 26,<br>\\n&quot;type&quot;: &quot;Note&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: -961,<br>\\n&quot;1&quot;: 28<br>\\n},<br>\\n&quot;size&quot;: [<br>\\n637.5789549206041,<br>\\n843.344421510058<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 3,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [],<br>\\n&quot;properties&quot;: {},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;## Stable Diffustion 方式\\\\n\\\\n在SD UI里，有三种方式：\\\\n1. 文生图的 &quot;高清修复&quot; (Hi-res fix)\\\\n2. 图生图的 &quot;SD放大&quot; (SD Upscale) 脚本\\\\n3. 后期处理中的算法放大\\\\n\\\\n## ComfyUI 方式\\\\n\\\\n而ComfyUI里，也有类似的方式，例如官方示例/2_pass_text2img的方式\\\\n里面有三个图(工作流)：\\\\n1. hiresfix_latent_workflow (标准的文生图高清修复工作流)\\\\n2. hiresfix_esrgan_workflow\\\\n3. latent_upscale_different_prompt_model\\\\n\\\\n### hiresfix_latent_workflow\\\\n\\\\n核心：\\\\n\\\\n1. Upscale Latent节点\\\\n   将一开始的768尺寸放大到1152尺寸\\\\n   该节点还有另一个版本：Upscale Latent By，按倍数进行缩放\\\\n2. 第二个KSample节点\\\\n   注意该方式只会做拉伸，并不会对原图进行细节的填充，所以还需要重新采样一次\\\\n   于是就有了第二次KSample\\\\n\\\\n要项：\\\\n\\\\n1. 降噪强度(重绘强度)\\\\n   第二个KSampler相当于图生图的采样器，denoise决定第二次生成的降噪力度。拉到1相当于重新生成一张图。\\\\n   推荐：0.5~0.8 (更像~更多细节，不要低于0.5，不然容易出现噪声没去干净)\\\\n\\\\n哪怕降噪强度0.5也出现更多细节怎么办？例如多手多头。这时需要使用第二个降噪工作流 hiresfix_esrgan_workflow\\\\n\\\\n### hiresfix_esrgan_workflow\\\\n\\\\n借助ESRGAN等传统放大模型来实现这个放大过程，更复杂\\\\n\\\\n核心：\\\\n\\\\n1. VAE Decode，先解码成图片格式\\\\n2. 放大图片\\\\n   - Load Upscale Model，放大模型加载器\\\\n   - Upscale Image (using Model)，放大图片\\\\n   - Upscale Image\\\\n   这里的 Upscale Latent、Upscale Image 都是很像的，也都有by版本\\\\n3. VAE Encode，图片重新编码回来\\\\n4. 再KSampler图生图\\\\n\\\\n要项：\\\\n\\\\n- 这种方式在重绘时，哪怕以0.2~0.3这种低降噪采样，也不会出现噪声痕迹。\\\\n  即比Latent缩放的流程多出来的步骤，能让图片在重绘时使用更低的降噪采样。\\\\n  原因是：先解码变成图片，然后使用超分辨率放大模型的放大并不会轻易改变图片的原有内容（这与Latent直接缩放不同）\\\\n- 放大模型的选择\\\\n  <code>Load Upscale Model</code> 可以选择放大模型 (模型在 <code>ComfyUI根目录/models/upscale_models</code>)\\\\n  <code>RealESRGAN_x4plus.pth</code>，R-ESRGAN的4倍放大模型，目前泛用效果好的，适用于照片风格\\\\n  <code>Anime 6B</code> 适用于动漫插画风格的图像\\\\n  <code>4xUltrasharp_4xUltrasharpV10.pth</code> 放大过程中进行锐化\\\\n  （SD WebUI高清修复中选择放大算法时，就是选择的这些）\\\\n\\\\n选用、缺点：\\\\n\\\\n1. 低效。与Latent缩放相比，需要更多的计算和时间，容易暴显存\\\\n2. 降噪低不易重绘时增添更多细节，只是单纯放大原图容易让结果显得 “油腻”。而降噪高容易多手多头\\\\n&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#432&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#653&quot;<br>\\n}<br>\\n],<br>\\n&quot;links&quot;: [<br>\\n[<br>\\n2,<br>\\n5,<br>\\n0,<br>\\n3,<br>\\n3,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n4,<br>\\n6,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n6,<br>\\n7,<br>\\n0,<br>\\n3,<br>\\n2,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n7,<br>\\n3,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n9,<br>\\n8,<br>\\n0,<br>\\n9,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n12,<br>\\n6,<br>\\n0,<br>\\n11,<br>\\n1,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n13,<br>\\n7,<br>\\n0,<br>\\n11,<br>\\n2,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n15,<br>\\n11,<br>\\n0,<br>\\n13,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n17,<br>\\n13,<br>\\n0,<br>\\n12,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n18,<br>\\n20,<br>\\n0,<br>\\n11,<br>\\n3,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n20,<br>\\n3,<br>\\n0,<br>\\n21,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n23,<br>\\n21,<br>\\n0,<br>\\n22,<br>\\n1,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n24,<br>\\n23,<br>\\n0,<br>\\n22,<br>\\n0,<br>\\n&quot;UPSCALE_MODEL&quot;<br>\\n],<br>\\n[<br>\\n26,<br>\\n24,<br>\\n0,<br>\\n20,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n27,<br>\\n22,<br>\\n0,<br>\\n24,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n28,<br>\\n25,<br>\\n1,<br>\\n6,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n29,<br>\\n25,<br>\\n1,<br>\\n7,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n30,<br>\\n25,<br>\\n2,<br>\\n8,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n31,<br>\\n25,<br>\\n2,<br>\\n20,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n32,<br>\\n25,<br>\\n2,<br>\\n21,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n33,<br>\\n25,<br>\\n2,<br>\\n13,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n34,<br>\\n25,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n35,<br>\\n25,<br>\\n0,<br>\\n11,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n]<br>\\n],<br>\\n&quot;groups&quot;: [<br>\\n{<br>\\n&quot;title&quot;: &quot;Downscale image to a more reasonable size&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n1852,<br>\\n-74,<br>\\n483,<br>\\n245<br>\\n],<br>\\n&quot;color&quot;: &quot;#8AA&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;flags&quot;: {}<br>\\n},<br>\\n{<br>\\n&quot;title&quot;: &quot;Encode back to latent space&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n2407,<br>\\n14,<br>\\n312,<br>\\n157<br>\\n],<br>\\n&quot;color&quot;: &quot;#A88&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;flags&quot;: {}<br>\\n},<br>\\n{<br>\\n&quot;title&quot;: &quot;Decode to Pixel space&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n953,<br>\\n-46,<br>\\n285,<br>\\n142<br>\\n],<br>\\n&quot;color&quot;: &quot;#A88&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;flags&quot;: {}<br>\\n},<br>\\n{<br>\\n&quot;title&quot;: &quot;ESRGAN upscale with 4x model&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n1259,<br>\\n-117,<br>\\n578,<br>\\n184<br>\\n],<br>\\n&quot;color&quot;: &quot;#3f789e&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;flags&quot;: {}<br>\\n},<br>\\n{<br>\\n&quot;title&quot;: &quot;Save Final Image&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n3210,<br>\\n139,<br>\\n483,<br>\\n199<br>\\n],<br>\\n&quot;color&quot;: &quot;#3f789e&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;flags&quot;: {}<br>\\n},<br>\\n{<br>\\n&quot;title&quot;: &quot;Second pass&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n2782,<br>\\n97,<br>\\n379,<br>\\n429<br>\\n],<br>\\n&quot;color&quot;: &quot;#444&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;flags&quot;: {}<br>\\n},<br>\\n{<br>\\n&quot;title&quot;: &quot;Save Intermediate Image&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n1175,<br>\\n335,<br>\\n516,<br>\\n196<br>\\n],<br>\\n&quot;color&quot;: &quot;#3f789e&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;flags&quot;: {}<br>\\n},<br>\\n{<br>\\n&quot;title&quot;: &quot;Txt2Img&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n-294,<br>\\n0,<br>\\n1211,<br>\\n708<br>\\n],<br>\\n&quot;color&quot;: &quot;#a1309b&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;flags&quot;: {}<br>\\n}<br>\\n],<br>\\n&quot;config&quot;: {},<br>\\n&quot;extra&quot;: {<br>\\n&quot;ds&quot;: {<br>\\n&quot;scale&quot;: 0.620921323059155,<br>\\n&quot;offset&quot;: [<br>\\n1850.8551371787914,<br>\\n490.3381454257473<br>\\n]<br>\\n},<br>\\n&quot;0246.VERSION&quot;: [<br>\\n0,<br>\\n0,<br>\\n4<br>\\n]<br>\\n},<br>\\n&quot;version&quot;: 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/高清放大工作流/2. ESRGAN（传统模型）放大工作流.json","value":{"title":"2. ESRGAN（传统模型）放大工作流.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/高清放大工作流/2. ESRGAN（传统模型）放大工作流.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{i as comp,p as data};

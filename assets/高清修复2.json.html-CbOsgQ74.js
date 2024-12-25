import{_ as e,c as t,b as o,o as l,r as a}from"./app-CtMeyR3O.js";const s={};function i(p,d){const n=a("VueFlow");return l(),t("div",null,[o(n,{type:"nodeflow-comfyui",data:`{
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
          "label": "Latent"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 30,
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
          "label": "Latent"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 33,
          "label": "VAE"
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
          "label": "图像"
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
          "label": "CLIP"
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
          "label": "条件"
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
          "label": "CLIP"
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
          "label": "条件"
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
            7,
            20
          ],
          "slot_index": 0,
          "label": "Latent"
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        765010288829757,
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
          "label": "Latent"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 32,
          "label": "VAE"
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
          "label": "图像"
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
          "label": "图像"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 31,
          "label": "VAE"
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
          "label": "Latent"
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
          "label": "放大模型"
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 23,
          "label": "图像"
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
          "label": "图像"
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
          "label": "图像"
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
          "label": "图像"
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
          "label": "模型"
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 12,
          "slot_index": 1,
          "label": "正面条件"
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 13,
          "slot_index": 2,
          "label": "负面条件"
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 18,
          "slot_index": 3,
          "label": "Latent"
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
          "label": "Latent"
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        774293826159913,
        "randomize",
        14,
        8,
        "uni_pc_bh2",
        "normal",
        0.5
      ]
    },
    {
      "id": 26,
      "type": "Note",
      "pos": {
        "0": -287,
        "1": 766
      },
      "size": {
        "0": 597.762451171875,
        "1": 113.62786865234375
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "inputs": [],
      "outputs": [],
      "properties": {},
      "widgets_values": [
        "非潜在升级\\n\\n以下是如何使用 esrgan upscaler 进行升级步骤的示例。由于 ESRGAN 在像素空间中运行，因此图像必须转换为像素空间，并在放大后返回到潜在空间。"
      ],
      "color": "#432",
      "bgcolor": "#653"
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
      "order": 2,
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
          "label": "模型"
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
        "v2-1_768-ema-pruned.safetensors"
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
      "order": 3,
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
          "label": "放大模型"
        }
      ],
      "properties": {
        "Node name for S&R": "UpscaleModelLoader"
      },
      "widgets_values": [
        "RealESRGAN_x4plus.pth"
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
      "scale": 0.424097618372485,
      "offset": [
        347.1025696999255,
        62.18791764317165
      ]
    }
  },
  "version": 0.4
}
`})])}const m=e(s,[["render",i],["__file","高清修复2.json.html.vue"]]),u=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/ComfyUI_examples/%E9%AB%98%E6%B8%85%E4%BF%AE%E5%A4%8D2.json","title":"","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 26, \\"last_link_id\\": 35, \\"nodes\\": [ { \\"id\\": 8, \\"type\\": \\"VAEDecode\\", \\"pos\\": { \\"0\\": 1185.5013427734375, \\"1\\": 412.0678405761719 }, \\"size\\": { \\"0\\": 210, \\"1\\": 46 }, \\"...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/ComfyUI_examples/%E9%AB%98%E6%B8%85%E4%BF%AE%E5%A4%8D2.json"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 26, \\"last_link_id\\": 35, \\"nodes\\": [ { \\"id\\": 8, \\"type\\": \\"VAEDecode\\", \\"pos\\": { \\"0\\": 1185.5013427734375, \\"1\\": 412.0678405761719 }, \\"size\\": { \\"0\\": 210, \\"1\\": 46 }, \\"..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":4.05,"words":1214},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/ComfyUI_examples/高清修复2.json","excerpt":"<p>{\\n\\"last_node_id\\": 26,\\n\\"last_link_id\\": 35,\\n\\"nodes\\": [\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": {\\n\\"0\\": 1185.5013427734375,\\n\\"1\\": 412.0678405761719\\n},\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 7,\\n\\"label\\": \\"Latent\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 30,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n9\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 13,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": {\\n\\"0\\": 3221.219970703125,\\n\\"1\\": 232.3800506591797\\n},\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 14,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 15,\\n\\"label\\": \\"Latent\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 33,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n17\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 6,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": {\\n\\"0\\": 81.780029296875,\\n\\"1\\": 142.33999633789062\\n},\\n\\"size\\": {\\n\\"0\\": 422.84503173828125,\\n\\"1\\": 164.31304931640625\\n},\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 28,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n4,\\n12\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"masterpiece HDR victorian portrait painting of woman, blonde hair, mountain nature, blue sky\\\\n\\"\\n]\\n},\\n{\\n\\"id\\": 7,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": {\\n\\"0\\": 84.780029296875,\\n\\"1\\": 352.3399963378906\\n},\\n\\"size\\": {\\n\\"0\\": 425.27801513671875,\\n\\"1\\": 180.6060791015625\\n},\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 29,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n6,\\n13\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"bad hands, text, watermark\\\\n\\"\\n]\\n},\\n{\\n\\"id\\": 5,\\n\\"type\\": \\"EmptyLatentImage\\",\\n\\"pos\\": {\\n\\"0\\": 142.780029296875,\\n\\"1\\": 571.3400268554688\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 106\\n},\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n2\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"EmptyLatentImage\\"\\n},\\n\\"widgets_values\\": [\\n768,\\n768,\\n1\\n]\\n},\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": {\\n\\"0\\": 552.780029296875,\\n\\"1\\": 143.33999633789062\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 262\\n},\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 34,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 4,\\n\\"label\\": \\"正面条件\\"\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 6,\\n\\"label\\": \\"负面条件\\"\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 2,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n7,\\n20\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n765010288829757,\\n\\"randomize\\",\\n12,\\n8,\\n\\"dpmpp_sde\\",\\n\\"normal\\",\\n1\\n]\\n},\\n{\\n\\"id\\": 21,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": {\\n\\"0\\": 988.1799926757812,\\n\\"1\\": 29.559995651245117\\n},\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 20,\\n\\"label\\": \\"Latent\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 32,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n23\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 20,\\n\\"type\\": \\"VAEEncode\\",\\n\\"pos\\": {\\n\\"0\\": 2459.099609375,\\n\\"1\\": 103.0200424194336\\n},\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 12,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"pixels\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 26,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 31,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n18\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEEncode\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 22,\\n\\"type\\": \\"ImageUpscaleWithModel\\",\\n\\"pos\\": {\\n\\"0\\": 1631.0599365234375,\\n\\"1\\": 3.6599864959716797\\n},\\n\\"size\\": {\\n\\"0\\": 226.8000030517578,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"upscale_model\\",\\n\\"type\\": \\"UPSCALE_MODEL\\",\\n\\"link\\": 24,\\n\\"label\\": \\"放大模型\\"\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 23,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n27\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ImageUpscaleWithModel\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 9,\\n\\"type\\": \\"SaveImage\\",\\n\\"pos\\": {\\n\\"0\\": 1446,\\n\\"1\\": 411\\n},\\n\\"size\\": {\\n\\"0\\": 611.2635498046875,\\n\\"1\\": 628.5978393554688\\n},\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 9,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [],\\n\\"properties\\": {},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\"\\n]\\n},\\n{\\n\\"id\\": 24,\\n\\"type\\": \\"ImageScale\\",\\n\\"pos\\": {\\n\\"0\\": 1931,\\n\\"1\\": 10\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 130\\n},\\n\\"flags\\": {},\\n\\"order\\": 11,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 27,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n26\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ImageScale\\"\\n},\\n\\"widgets_values\\": [\\n\\"bilinear\\",\\n1536,\\n1536,\\n\\"disabled\\"\\n]\\n},\\n{\\n\\"id\\": 12,\\n\\"type\\": \\"SaveImage\\",\\n\\"pos\\": {\\n\\"0\\": 3463,\\n\\"1\\": 230\\n},\\n\\"size\\": {\\n\\"0\\": 868.0108642578125,\\n\\"1\\": 936.9744873046875\\n},\\n\\"flags\\": {},\\n\\"order\\": 15,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 17,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [],\\n\\"properties\\": {},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\"\\n]\\n},\\n{\\n\\"id\\": 11,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": {\\n\\"0\\": 2811.9580078125,\\n\\"1\\": 176.22007751464844\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 262\\n},\\n\\"flags\\": {},\\n\\"order\\": 13,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 35,\\n\\"slot_index\\": 0,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 12,\\n\\"slot_index\\": 1,\\n\\"label\\": \\"正面条件\\"\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 13,\\n\\"slot_index\\": 2,\\n\\"label\\": \\"负面条件\\"\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 18,\\n\\"slot_index\\": 3,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n15\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n774293826159913,\\n\\"randomize\\",\\n14,\\n8,\\n\\"uni_pc_bh2\\",\\n\\"normal\\",\\n0.5\\n]\\n},\\n{\\n\\"id\\": 26,\\n\\"type\\": \\"Note\\",\\n\\"pos\\": {\\n\\"0\\": -287,\\n\\"1\\": 766\\n},\\n\\"size\\": {\\n\\"0\\": 597.762451171875,\\n\\"1\\": 113.62786865234375\\n},\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [],\\n\\"properties\\": {},\\n\\"widgets_values\\": [\\n\\"非潜在升级\\\\n\\\\n以下是如何使用 esrgan upscaler 进行升级步骤的示例。由于 ESRGAN 在像素空间中运行，因此图像必须转换为像素空间，并在放大后返回到潜在空间。\\"\\n],\\n\\"color\\": \\"#432\\",\\n\\"bgcolor\\": \\"#653\\"\\n},\\n{\\n\\"id\\": 25,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": {\\n\\"0\\": -262,\\n\\"1\\": 284\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n34,\\n35\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n28,\\n29\\n],\\n\\"slot_index\\": 1,\\n\\"label\\": \\"CLIP\\"\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n30,\\n31,\\n32,\\n33\\n],\\n\\"slot_index\\": 2,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"v2-1_768-ema-pruned.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 23,\\n\\"type\\": \\"UpscaleModelLoader\\",\\n\\"pos\\": {\\n\\"0\\": 1288.0599365234375,\\n\\"1\\": -39.34001159667969\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"UPSCALE_MODEL\\",\\n\\"type\\": \\"UPSCALE_MODEL\\",\\n\\"links\\": [\\n24\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"放大模型\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"UpscaleModelLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"RealESRGAN_x4plus.pth\\"\\n]\\n}\\n],\\n\\"links\\": [\\n[\\n2,\\n5,\\n0,\\n3,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n4,\\n6,\\n0,\\n3,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n6,\\n7,\\n0,\\n3,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n7,\\n3,\\n0,\\n8,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n9,\\n8,\\n0,\\n9,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n12,\\n6,\\n0,\\n11,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n13,\\n7,\\n0,\\n11,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n15,\\n11,\\n0,\\n13,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n17,\\n13,\\n0,\\n12,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n18,\\n20,\\n0,\\n11,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n20,\\n3,\\n0,\\n21,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n23,\\n21,\\n0,\\n22,\\n1,\\n\\"IMAGE\\"\\n],\\n[\\n24,\\n23,\\n0,\\n22,\\n0,\\n\\"UPSCALE_MODEL\\"\\n],\\n[\\n26,\\n24,\\n0,\\n20,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n27,\\n22,\\n0,\\n24,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n28,\\n25,\\n1,\\n6,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n29,\\n25,\\n1,\\n7,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n30,\\n25,\\n2,\\n8,\\n1,\\n\\"VAE\\"\\n],\\n[\\n31,\\n25,\\n2,\\n20,\\n1,\\n\\"VAE\\"\\n],\\n[\\n32,\\n25,\\n2,\\n21,\\n1,\\n\\"VAE\\"\\n],\\n[\\n33,\\n25,\\n2,\\n13,\\n1,\\n\\"VAE\\"\\n],\\n[\\n34,\\n25,\\n0,\\n3,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n35,\\n25,\\n0,\\n11,\\n0,\\n\\"MODEL\\"\\n]\\n],\\n\\"groups\\": [\\n{\\n\\"title\\": \\"Downscale image to a more reasonable size\\",\\n\\"bounding\\": [\\n1852,\\n-74,\\n483,\\n245\\n],\\n\\"color\\": \\"#8AA\\",\\n\\"font_size\\": 24,\\n\\"flags\\": {}\\n},\\n{\\n\\"title\\": \\"Encode back to latent space\\",\\n\\"bounding\\": [\\n2407,\\n14,\\n312,\\n157\\n],\\n\\"color\\": \\"#A88\\",\\n\\"font_size\\": 24,\\n\\"flags\\": {}\\n},\\n{\\n\\"title\\": \\"Decode to Pixel space\\",\\n\\"bounding\\": [\\n953,\\n-46,\\n285,\\n142\\n],\\n\\"color\\": \\"#A88\\",\\n\\"font_size\\": 24,\\n\\"flags\\": {}\\n},\\n{\\n\\"title\\": \\"ESRGAN upscale with 4x model\\",\\n\\"bounding\\": [\\n1259,\\n-117,\\n578,\\n184\\n],\\n\\"color\\": \\"#3f789e\\",\\n\\"font_size\\": 24,\\n\\"flags\\": {}\\n},\\n{\\n\\"title\\": \\"Save Final Image\\",\\n\\"bounding\\": [\\n3210,\\n139,\\n483,\\n199\\n],\\n\\"color\\": \\"#3f789e\\",\\n\\"font_size\\": 24,\\n\\"flags\\": {}\\n},\\n{\\n\\"title\\": \\"Second pass\\",\\n\\"bounding\\": [\\n2782,\\n97,\\n379,\\n429\\n],\\n\\"color\\": \\"#444\\",\\n\\"font_size\\": 24,\\n\\"flags\\": {}\\n},\\n{\\n\\"title\\": \\"Save Intermediate Image\\",\\n\\"bounding\\": [\\n1175,\\n335,\\n516,\\n196\\n],\\n\\"color\\": \\"#3f789e\\",\\n\\"font_size\\": 24,\\n\\"flags\\": {}\\n},\\n{\\n\\"title\\": \\"Txt2Img\\",\\n\\"bounding\\": [\\n-294,\\n0,\\n1211,\\n708\\n],\\n\\"color\\": \\"#a1309b\\",\\n\\"font_size\\": 24,\\n\\"flags\\": {}\\n}\\n],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"ds\\": {\\n\\"scale\\": 0.424097618372485,\\n\\"offset\\": [\\n347.1025696999255,\\n62.18791764317165\\n]\\n}\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true}');export{m as comp,u as data};

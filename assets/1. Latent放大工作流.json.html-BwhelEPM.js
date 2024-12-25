import{_ as e,c as t,b as a,o as l,r as o}from"./app-CtMeyR3O.js";const s={};function i(p,r){const n=o("VueFlow");return l(),t("div",null,[a(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 17,
  "last_link_id": 23,
  "nodes": [
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": {
        "0": 1235.7215576171875,
        "1": 577.1878662109375
      },
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 6,
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
          "link": 21,
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
      "id": 10,
      "type": "LatentUpscale",
      "pos": {
        "0": 1238,
        "1": 170
      },
      "size": {
        "0": 315,
        "1": 130
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 10,
          "label": "samples"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            14
          ],
          "label": "LATENT"
        }
      ],
      "properties": {
        "Node name for S&R": "LatentUpscale"
      },
      "widgets_values": [
        "nearest-exact",
        1152,
        1152,
        "disabled"
      ]
    },
    {
      "id": 13,
      "type": "VAEDecode",
      "pos": {
        "0": 1961,
        "1": 125
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
          "link": 15,
          "label": "samples"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 22,
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
        "0": 374,
        "1": 171
      },
      "size": {
        "0": 422.84503173828125,
        "1": 164.31304931640625
      },
      "flags": {},
      "order": 3,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 19,
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
      "id": 11,
      "type": "KSampler",
      "pos": {
        "0": 1585,
        "1": 114
      },
      "size": {
        "0": 315,
        "1": 262
      },
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 23,
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
          "link": 14,
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
        497066463919513,
        "randomize",
        14,
        8,
        "dpmpp_2m",
        "simple",
        0.5
      ]
    },
    {
      "id": 12,
      "type": "SaveImage",
      "pos": {
        "0": 2203,
        "1": 123
      },
      "size": {
        "0": 407.53717041015625,
        "1": 468.13226318359375
      },
      "flags": {},
      "order": 11,
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
      "id": 3,
      "type": "KSampler",
      "pos": {
        "0": 845,
        "1": 172
      },
      "size": {
        "0": 315,
        "1": 262
      },
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 18,
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
            10
          ],
          "slot_index": 0,
          "label": "LATENT"
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        748940210657206,
        "randomize",
        12,
        8,
        "dpmpp_sde",
        "normal",
        1
      ]
    },
    {
      "id": 9,
      "type": "SaveImage",
      "pos": {
        "0": 1495.7215576171875,
        "1": 576.1878662109375
      },
      "size": {
        "0": 232.94032287597656,
        "1": 282.4336242675781
      },
      "flags": {},
      "order": 8,
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
      "id": 16,
      "type": "CheckpointLoaderSimple",
      "pos": {
        "0": 24,
        "1": 315
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
            23
          ],
          "slot_index": 0,
          "label": "MODEL"
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
            21,
            22
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
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 20,
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
      "id": 17,
      "type": "Note",
      "pos": {
        "0": 10,
        "1": 799
      },
      "size": [
        809.2703886133163,
        489.22022728532056
      ],
      "flags": {},
      "order": 2,
      "mode": 0,
      "inputs": [],
      "outputs": [],
      "properties": {},
      "widgets_values": [
        "## Stable Diffustion 方式\\n\\n在SD UI里，有三种方式：\\n1. 文生图的 \\"高清修复\\" (Hi-res fix)\\n2. 图生图的 \\"SD放大\\" (SD Upscale) 脚本\\n3. 后期处理中的算法放大\\n\\n## ComfyUI 方式\\n\\n而ComfyUI里，也有类似的方式，例如官方示例/2_pass_text2img的方式\\n里面有三个图(工作流)：\\n1. hiresfix_latent_workflow (标准的文生图高清修复工作流)\\n2. hiresfix_esrgan_workflow\\n3. latent_upscale_different_prompt_model\\n\\n### hiresfix_latent_workflow\\n\\n核心：\\n\\n1. 使用Upscale Latent节点，将一开始的768尺寸放大到1152尺寸\\n   该节点还有另一个版本：Upscale Latent By，按倍数进行缩放\\n2. 注意该方式只会做拉伸，并不会对原图进行细节的填充，所以还需要重新采样一次\\n   于是就有了第二次KSample\\n\\n要项：\\n\\n1. 降噪强度(重绘强度)\\n   第二个KSampler相当于图生图的采样器，denoise决定第二次生成的降噪力度。拉到1相当于重新生成一张图。\\n   推荐：0.5~0.8 (更像~更多细节，不要低于0.5，不然容易出现噪声没去干净)\\n\\n哪怕降噪强度0.5也出现更多细节怎么办？例如多手多头。这时需要使用第二个降噪工作流 hiresfix_esrgan_workflow\\n\\n### hiresfix_esrgan_workflow\\n\\n借助ESRGAN等传统放大模型来实现这个放大过程\\n\\n更复杂\\n\\n"
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
      10,
      3,
      0,
      10,
      0,
      "LATENT"
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
      14,
      10,
      0,
      11,
      3,
      "LATENT"
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
      21,
      16,
      2,
      8,
      1,
      "VAE"
    ],
    [
      22,
      16,
      2,
      13,
      1,
      "VAE"
    ],
    [
      23,
      16,
      0,
      11,
      0,
      "MODEL"
    ]
  ],
  "groups": [
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
    },
    {
      "title": "Save Intermediate Image",
      "bounding": [
        1225,
        500,
        516,
        196
      ],
      "color": "#3f789e",
      "font_size": 24,
      "flags": {}
    },
    {
      "title": "Hires Fix",
      "bounding": [
        1224,
        29,
        710,
        464
      ],
      "color": "#b58b2a",
      "font_size": 24,
      "flags": {}
    },
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
    }
  ],
  "config": {},
  "extra": {
    "ds": {
      "scale": 1,
      "offset": [
        79.7296113866837,
        -337.5535555323909
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
`})])}const m=e(s,[["render",i],["__file","1. Latent放大工作流.json.html.vue"]]),N=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%AB%98%E6%B8%85%E6%94%BE%E5%A4%A7%E5%B7%A5%E4%BD%9C%E6%B5%81/1.%20Latent%E6%94%BE%E5%A4%A7%E5%B7%A5%E4%BD%9C%E6%B5%81.json","title":"","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 17, \\"last_link_id\\": 23, \\"nodes\\": [ { \\"id\\": 8, \\"type\\": \\"VAEDecode\\", \\"pos\\": { \\"0\\": 1235.7215576171875, \\"1\\": 577.1878662109375 }, \\"size\\": { \\"0\\": 210, \\"1\\": 46 }, \\"...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%AB%98%E6%B8%85%E6%94%BE%E5%A4%A7%E5%B7%A5%E4%BD%9C%E6%B5%81/1.%20Latent%E6%94%BE%E5%A4%A7%E5%B7%A5%E4%BD%9C%E6%B5%81.json"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 17, \\"last_link_id\\": 23, \\"nodes\\": [ { \\"id\\": 8, \\"type\\": \\"VAEDecode\\", \\"pos\\": { \\"0\\": 1235.7215576171875, \\"1\\": 577.1878662109375 }, \\"size\\": { \\"0\\": 210, \\"1\\": 46 }, \\"..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.89,"words":1168},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/高清放大工作流/1. Latent放大工作流.json","excerpt":"<p>{\\n\\"last_node_id\\": 17,\\n\\"last_link_id\\": 23,\\n\\"nodes\\": [\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": {\\n\\"0\\": 1235.7215576171875,\\n\\"1\\": 577.1878662109375\\n},\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 7,\\n\\"label\\": \\"samples\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 21,\\n\\"label\\": \\"vae\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n9\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"IMAGE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 10,\\n\\"type\\": \\"LatentUpscale\\",\\n\\"pos\\": {\\n\\"0\\": 1238,\\n\\"1\\": 170\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 130\\n},\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 10,\\n\\"label\\": \\"samples\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n14\\n],\\n\\"label\\": \\"LATENT\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LatentUpscale\\"\\n},\\n\\"widgets_values\\": [\\n\\"nearest-exact\\",\\n1152,\\n1152,\\n\\"disabled\\"\\n]\\n},\\n{\\n\\"id\\": 13,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": {\\n\\"0\\": 1961,\\n\\"1\\": 125\\n},\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 15,\\n\\"label\\": \\"samples\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 22,\\n\\"label\\": \\"vae\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n17\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"IMAGE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 6,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": {\\n\\"0\\": 374,\\n\\"1\\": 171\\n},\\n\\"size\\": {\\n\\"0\\": 422.84503173828125,\\n\\"1\\": 164.31304931640625\\n},\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 19,\\n\\"label\\": \\"clip\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n4,\\n12\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"CONDITIONING\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"masterpiece HDR victorian portrait painting of woman, blonde hair, mountain nature, blue sky\\\\n\\"\\n]\\n},\\n{\\n\\"id\\": 5,\\n\\"type\\": \\"EmptyLatentImage\\",\\n\\"pos\\": {\\n\\"0\\": 435,\\n\\"1\\": 600\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 106\\n},\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n2\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"LATENT\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"EmptyLatentImage\\"\\n},\\n\\"widgets_values\\": [\\n768,\\n768,\\n1\\n]\\n},\\n{\\n\\"id\\": 11,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": {\\n\\"0\\": 1585,\\n\\"1\\": 114\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 262\\n},\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 23,\\n\\"slot_index\\": 0,\\n\\"label\\": \\"model\\"\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 12,\\n\\"slot_index\\": 1,\\n\\"label\\": \\"positive\\"\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 13,\\n\\"slot_index\\": 2,\\n\\"label\\": \\"negative\\"\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 14,\\n\\"slot_index\\": 3,\\n\\"label\\": \\"latent_image\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n15\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"LATENT\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n497066463919513,\\n\\"randomize\\",\\n14,\\n8,\\n\\"dpmpp_2m\\",\\n\\"simple\\",\\n0.5\\n]\\n},\\n{\\n\\"id\\": 12,\\n\\"type\\": \\"SaveImage\\",\\n\\"pos\\": {\\n\\"0\\": 2203,\\n\\"1\\": 123\\n},\\n\\"size\\": {\\n\\"0\\": 407.53717041015625,\\n\\"1\\": 468.13226318359375\\n},\\n\\"flags\\": {},\\n\\"order\\": 11,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 17,\\n\\"label\\": \\"images\\"\\n}\\n],\\n\\"outputs\\": [],\\n\\"properties\\": {},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\"\\n]\\n},\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": {\\n\\"0\\": 845,\\n\\"1\\": 172\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 262\\n},\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 18,\\n\\"label\\": \\"model\\"\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 4,\\n\\"label\\": \\"positive\\"\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 6,\\n\\"label\\": \\"negative\\"\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 2,\\n\\"label\\": \\"latent_image\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n7,\\n10\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"LATENT\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n748940210657206,\\n\\"randomize\\",\\n12,\\n8,\\n\\"dpmpp_sde\\",\\n\\"normal\\",\\n1\\n]\\n},\\n{\\n\\"id\\": 9,\\n\\"type\\": \\"SaveImage\\",\\n\\"pos\\": {\\n\\"0\\": 1495.7215576171875,\\n\\"1\\": 576.1878662109375\\n},\\n\\"size\\": {\\n\\"0\\": 232.94032287597656,\\n\\"1\\": 282.4336242675781\\n},\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 9,\\n\\"label\\": \\"images\\"\\n}\\n],\\n\\"outputs\\": [],\\n\\"properties\\": {},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\"\\n]\\n},\\n{\\n\\"id\\": 16,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": {\\n\\"0\\": 24,\\n\\"1\\": 315\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n18,\\n23\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"MODEL\\"\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n19,\\n20\\n],\\n\\"slot_index\\": 1,\\n\\"label\\": \\"CLIP\\"\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n21,\\n22\\n],\\n\\"slot_index\\": 2,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"v2-1_768-ema-pruned.ckpt\\"\\n]\\n},\\n{\\n\\"id\\": 7,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": {\\n\\"0\\": 377,\\n\\"1\\": 381\\n},\\n\\"size\\": {\\n\\"0\\": 425.27801513671875,\\n\\"1\\": 180.6060791015625\\n},\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 20,\\n\\"label\\": \\"clip\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n6,\\n13\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"CONDITIONING\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"bad hands, text, watermark\\\\n\\"\\n]\\n},\\n{\\n\\"id\\": 17,\\n\\"type\\": \\"Note\\",\\n\\"pos\\": {\\n\\"0\\": 10,\\n\\"1\\": 799\\n},\\n\\"size\\": [\\n809.2703886133163,\\n489.22022728532056\\n],\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [],\\n\\"properties\\": {},\\n\\"widgets_values\\": [\\n\\"## Stable Diffustion 方式\\\\n\\\\n在SD UI里，有三种方式：\\\\n1. 文生图的 \\"高清修复\\" (Hi-res fix)\\\\n2. 图生图的 \\"SD放大\\" (SD Upscale) 脚本\\\\n3. 后期处理中的算法放大\\\\n\\\\n## ComfyUI 方式\\\\n\\\\n而ComfyUI里，也有类似的方式，例如官方示例/2_pass_text2img的方式\\\\n里面有三个图(工作流)：\\\\n1. hiresfix_latent_workflow (标准的文生图高清修复工作流)\\\\n2. hiresfix_esrgan_workflow\\\\n3. latent_upscale_different_prompt_model\\\\n\\\\n### hiresfix_latent_workflow\\\\n\\\\n核心：\\\\n\\\\n1. 使用Upscale Latent节点，将一开始的768尺寸放大到1152尺寸\\\\n   该节点还有另一个版本：Upscale Latent By，按倍数进行缩放\\\\n2. 注意该方式只会做拉伸，并不会对原图进行细节的填充，所以还需要重新采样一次\\\\n   于是就有了第二次KSample\\\\n\\\\n要项：\\\\n\\\\n1. 降噪强度(重绘强度)\\\\n   第二个KSampler相当于图生图的采样器，denoise决定第二次生成的降噪力度。拉到1相当于重新生成一张图。\\\\n   推荐：0.5~0.8 (更像~更多细节，不要低于0.5，不然容易出现噪声没去干净)\\\\n\\\\n哪怕降噪强度0.5也出现更多细节怎么办？例如多手多头。这时需要使用第二个降噪工作流 hiresfix_esrgan_workflow\\\\n\\\\n### hiresfix_esrgan_workflow\\\\n\\\\n借助ESRGAN等传统放大模型来实现这个放大过程\\\\n\\\\n更复杂\\\\n\\\\n\\"\\n],\\n\\"color\\": \\"#432\\",\\n\\"bgcolor\\": \\"#653\\"\\n}\\n],\\n\\"links\\": [\\n[\\n2,\\n5,\\n0,\\n3,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n4,\\n6,\\n0,\\n3,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n6,\\n7,\\n0,\\n3,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n7,\\n3,\\n0,\\n8,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n9,\\n8,\\n0,\\n9,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n10,\\n3,\\n0,\\n10,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n12,\\n6,\\n0,\\n11,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n13,\\n7,\\n0,\\n11,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n14,\\n10,\\n0,\\n11,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n15,\\n11,\\n0,\\n13,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n17,\\n13,\\n0,\\n12,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n18,\\n16,\\n0,\\n3,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n19,\\n16,\\n1,\\n6,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n20,\\n16,\\n1,\\n7,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n21,\\n16,\\n2,\\n8,\\n1,\\n\\"VAE\\"\\n],\\n[\\n22,\\n16,\\n2,\\n13,\\n1,\\n\\"VAE\\"\\n],\\n[\\n23,\\n16,\\n0,\\n11,\\n0,\\n\\"MODEL\\"\\n]\\n],\\n\\"groups\\": [\\n{\\n\\"title\\": \\"Txt2Img\\",\\n\\"bounding\\": [\\n-1,\\n30,\\n1211,\\n708\\n],\\n\\"color\\": \\"#a1309b\\",\\n\\"font_size\\": 24,\\n\\"flags\\": {}\\n},\\n{\\n\\"title\\": \\"Save Intermediate Image\\",\\n\\"bounding\\": [\\n1225,\\n500,\\n516,\\n196\\n],\\n\\"color\\": \\"#3f789e\\",\\n\\"font_size\\": 24,\\n\\"flags\\": {}\\n},\\n{\\n\\"title\\": \\"Hires Fix\\",\\n\\"bounding\\": [\\n1224,\\n29,\\n710,\\n464\\n],\\n\\"color\\": \\"#b58b2a\\",\\n\\"font_size\\": 24,\\n\\"flags\\": {}\\n},\\n{\\n\\"title\\": \\"Save Final Image\\",\\n\\"bounding\\": [\\n1949,\\n31,\\n483,\\n199\\n],\\n\\"color\\": \\"#3f789e\\",\\n\\"font_size\\": 24,\\n\\"flags\\": {}\\n}\\n],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"ds\\": {\\n\\"scale\\": 1,\\n\\"offset\\": [\\n79.7296113866837,\\n-337.5535555323909\\n]\\n},\\n\\"0246.VERSION\\": [\\n0,\\n0,\\n4\\n]\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true}');export{m as comp,N as data};

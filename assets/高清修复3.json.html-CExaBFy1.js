import{_ as e,c as t,b as s,r as a,o}from"./app-AhwLXIj8.js";const l={};function i(p,r){const n=a("VueFlow");return o(),t("div",null,[s(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 33,
  "last_link_id": 62,
  "nodes": [
    {
      "id": 4,
      "type": "CheckpointLoaderSimple",
      "pos": {
        "0": -60,
        "1": 229
      },
      "size": {
        "0": 315,
        "1": 98
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            54
          ],
          "slot_index": 0,
          "label": "模型"
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            3,
            5
          ],
          "slot_index": 1,
          "label": "CLIP"
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            8,
            31
          ],
          "slot_index": 2,
          "label": "VAE"
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimple"
      },
      "widgets_values": [
        "wd-illusion-fp16.safetensors"
      ]
    },
    {
      "id": 13,
      "type": "CheckpointLoaderSimple",
      "pos": {
        "0": 1296,
        "1": -571
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
            56
          ],
          "slot_index": 0,
          "label": "模型"
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            27
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
        "cardosAnime_v10.safetensors"
      ]
    },
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": {
        "0": 370,
        "1": 40
      },
      "size": {
        "0": 510,
        "1": 220
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 3,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            4
          ],
          "slot_index": 0,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "anime happy girl (fennec:1.2) (ears:1.3) blonde long (messy hair:1.1) blue eyes, wearing serafuku jeans (sitting on rock:1.15) (spread legs:1.15) (sneakers:0.95) in lake rural swiss village on the mountain side sky clouds HDR sunset\\n(exceptional, best aesthetic, new, newest, best quality, masterpiece, extremely detailed, anime:1.05)\\n"
      ]
    },
    {
      "id": 7,
      "type": "CLIPTextEncode",
      "pos": {
        "0": 370,
        "1": 300
      },
      "size": {
        "0": 510,
        "1": 190
      },
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 5,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            6
          ],
          "slot_index": 0,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "lowres, bad anatomy, bad hands, (text:1.1), blurry, mutated hands and fingers, mutation, deformed face, ugly, (logo:1.1), cropped, worst quality, jpeg, (jpeg artifacts), deleted, old, oldest, (censored), (bad aesthetic), (mosaic censoring, bar censor, blur censor) earphones"
      ]
    },
    {
      "id": 5,
      "type": "EmptyLatentImage",
      "pos": {
        "0": 560,
        "1": 540
      },
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 2,
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
        1368,
        768,
        1
      ]
    },
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": {
        "0": 1280,
        "1": 140
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
          "link": 8,
          "label": "VAE"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            10
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
      "id": 10,
      "type": "SaveImage",
      "pos": {
        "0": 1540,
        "1": 140
      },
      "size": {
        "0": 1174.1312255859375,
        "1": 734.1587524414062
      },
      "flags": {},
      "order": 12,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 10,
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
      "id": 22,
      "type": "CLIPSetLastLayer",
      "pos": {
        "0": 1670,
        "1": -550
      },
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 27,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            13,
            14
          ],
          "slot_index": 0,
          "label": "CLIP"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPSetLastLayer"
      },
      "widgets_values": [
        -2
      ]
    },
    {
      "id": 15,
      "type": "CLIPTextEncode",
      "pos": {
        "0": 2060,
        "1": -920
      },
      "size": {
        "0": 662.3788452148438,
        "1": 313.10162353515625
      },
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 14,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            57
          ],
          "slot_index": 0,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "from far away anime happy girl (fennec ears:0.95) long (messy hair:1.3) blue eyes, wearing serafuku jeans sitting on rock spread legs (sneakers:0.95) in lake rural swiss village on the mountain side sky clouds HDR sunset\\n"
      ]
    },
    {
      "id": 14,
      "type": "CLIPTextEncode",
      "pos": {
        "0": 2060,
        "1": -550
      },
      "size": {
        "0": 660,
        "1": 300
      },
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 13,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            58
          ],
          "slot_index": 0,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "(hands), (text:1.1), letters, numbers, error, cropped, (jpeg artifacts:1.2), (signature:1.1), (watermark:1.1), username, blurry, artist name, monochrome, sketch, censorship, censor, (copyright:1.1), extra legs, (forehead mark)  (penis)"
      ]
    },
    {
      "id": 11,
      "type": "VAEDecode",
      "pos": {
        "0": 3240,
        "1": -750
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
          "link": 60,
          "label": "Latent"
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
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            12
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
      "id": 12,
      "type": "SaveImage",
      "pos": {
        "0": 3540,
        "1": -750
      },
      "size": {
        "0": 1868.09375,
        "1": 1101.470947265625
      },
      "flags": {},
      "order": 15,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 12,
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
      "id": 32,
      "type": "KSampler",
      "pos": {
        "0": 2830,
        "1": -750
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
          "link": 56,
          "label": "模型"
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 57,
          "label": "正面条件"
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 58,
          "label": "负面条件"
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 59,
          "label": "Latent"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            60
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "Latent"
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        417682270866800,
        "randomize",
        8,
        13,
        "dpmpp_sde",
        "simple",
        0.4999999999999999
      ]
    },
    {
      "id": 27,
      "type": "LatentUpscaleBy",
      "pos": {
        "0": 1510,
        "1": -160
      },
      "size": {
        "0": 325.412841796875,
        "1": 82
      },
      "flags": {},
      "order": 11,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 62,
          "slot_index": 0,
          "label": "Latent"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            59
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "Latent"
        }
      ],
      "properties": {
        "Node name for S&R": "LatentUpscaleBy"
      },
      "widgets_values": [
        "bislerp",
        1.5
      ]
    },
    {
      "id": 3,
      "type": "KSampler",
      "pos": {
        "0": 920,
        "1": 140
      },
      "size": {
        "0": 318.5013427734375,
        "1": 262
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 54,
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
            62
          ],
          "slot_index": 0,
          "label": "Latent"
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        758448896326830,
        "randomize",
        14,
        8,
        "dpmpp_sde",
        "simple",
        1
      ]
    },
    {
      "id": 33,
      "type": "Note",
      "pos": {
        "0": -60,
        "1": 377
      },
      "size": [
        316.93854389907375,
        111.4415505935687
      ],
      "flags": {},
      "order": 3,
      "mode": 0,
      "inputs": [],
      "outputs": [],
      "properties": {},
      "widgets_values": [
        "下面是一个更复杂的 2 遍工作流程的示例，该图像首先使用 WD1.5 beta 3 错觉模型生成，潜在放大，然后使用 cardosAnime_v10 完成第二遍："
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
      3,
      4,
      1,
      6,
      0,
      "CLIP"
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
      5,
      4,
      1,
      7,
      0,
      "CLIP"
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
      8,
      4,
      2,
      8,
      1,
      "VAE"
    ],
    [
      10,
      8,
      0,
      10,
      0,
      "IMAGE"
    ],
    [
      12,
      11,
      0,
      12,
      0,
      "IMAGE"
    ],
    [
      13,
      22,
      0,
      14,
      0,
      "CLIP"
    ],
    [
      14,
      22,
      0,
      15,
      0,
      "CLIP"
    ],
    [
      27,
      13,
      1,
      22,
      0,
      "CLIP"
    ],
    [
      31,
      4,
      2,
      11,
      1,
      "VAE"
    ],
    [
      54,
      4,
      0,
      3,
      0,
      "MODEL"
    ],
    [
      56,
      13,
      0,
      32,
      0,
      "MODEL"
    ],
    [
      57,
      15,
      0,
      32,
      1,
      "CONDITIONING"
    ],
    [
      58,
      14,
      0,
      32,
      2,
      "CONDITIONING"
    ],
    [
      59,
      27,
      0,
      32,
      3,
      "LATENT"
    ],
    [
      60,
      32,
      0,
      11,
      0,
      "LATENT"
    ],
    [
      62,
      3,
      0,
      27,
      0,
      "LATENT"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "ds": {
      "scale": 0.7513148009015782,
      "offset": [
        396.58245610092587,
        96.71041336517119
      ]
    }
  },
  "version": 0.4
}
`})])}const m=e(l,[["render",i],["__file","高清修复3.json.html.vue"]]),u=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/ComfyUI_examples/%E9%AB%98%E6%B8%85%E4%BF%AE%E5%A4%8D3.json.html","title":"高清修复3.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 33, \\"last_link_id\\": 62, \\"nodes\\": [ { \\"id\\": 4, \\"type\\": \\"CheckpointLoaderSimple\\", \\"pos\\": { \\"0\\": -60, \\"1\\": 229 }, \\"size\\": { \\"0\\": 315, \\"1\\": 98 }, \\"flags\\": {}, \\"ord...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/ComfyUI_examples/%E9%AB%98%E6%B8%85%E4%BF%AE%E5%A4%8D3.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 33, \\"last_link_id\\": 62, \\"nodes\\": [ { \\"id\\": 4, \\"type\\": \\"CheckpointLoaderSimple\\", \\"pos\\": { \\"0\\": -60, \\"1\\": 229 }, \\"size\\": { \\"0\\": 315, \\"1\\": 98 }, \\"flags\\": {}, \\"ord..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{},"readingTime":{"minutes":3.93,"words":1179},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/ComfyUI_examples/高清修复3.json","excerpt":"<p>{\\n\\"last_node_id\\": 33,\\n\\"last_link_id\\": 62,\\n\\"nodes\\": [\\n{\\n\\"id\\": 4,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": {\\n\\"0\\": -60,\\n\\"1\\": 229\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n54\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n3,\\n5\\n],\\n\\"slot_index\\": 1,\\n\\"label\\": \\"CLIP\\"\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n8,\\n31\\n],\\n\\"slot_index\\": 2,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"wd-illusion-fp16.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 13,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": {\\n\\"0\\": 1296,\\n\\"1\\": -571\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n56\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n27\\n],\\n\\"slot_index\\": 1,\\n\\"label\\": \\"CLIP\\"\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": null,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"cardosAnime_v10.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 6,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": {\\n\\"0\\": 370,\\n\\"1\\": 40\\n},\\n\\"size\\": {\\n\\"0\\": 510,\\n\\"1\\": 220\\n},\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 3,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n4\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"anime happy girl (fennec:1.2) (ears:1.3) blonde long (messy hair:1.1) blue eyes, wearing serafuku jeans (sitting on rock:1.15) (spread legs:1.15) (sneakers:0.95) in lake rural swiss village on the mountain side sky clouds HDR sunset\\\\n(exceptional, best aesthetic, new, newest, best quality, masterpiece, extremely detailed, anime:1.05)\\\\n\\"\\n]\\n},\\n{\\n\\"id\\": 7,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": {\\n\\"0\\": 370,\\n\\"1\\": 300\\n},\\n\\"size\\": {\\n\\"0\\": 510,\\n\\"1\\": 190\\n},\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 5,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n6\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"lowres, bad anatomy, bad hands, (text:1.1), blurry, mutated hands and fingers, mutation, deformed face, ugly, (logo:1.1), cropped, worst quality, jpeg, (jpeg artifacts), deleted, old, oldest, (censored), (bad aesthetic), (mosaic censoring, bar censor, blur censor) earphones\\"\\n]\\n},\\n{\\n\\"id\\": 5,\\n\\"type\\": \\"EmptyLatentImage\\",\\n\\"pos\\": {\\n\\"0\\": 560,\\n\\"1\\": 540\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 106\\n},\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n2\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"EmptyLatentImage\\"\\n},\\n\\"widgets_values\\": [\\n1368,\\n768,\\n1\\n]\\n},\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": {\\n\\"0\\": 1280,\\n\\"1\\": 140\\n},\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 7,\\n\\"label\\": \\"Latent\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 8,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n10\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 10,\\n\\"type\\": \\"SaveImage\\",\\n\\"pos\\": {\\n\\"0\\": 1540,\\n\\"1\\": 140\\n},\\n\\"size\\": {\\n\\"0\\": 1174.1312255859375,\\n\\"1\\": 734.1587524414062\\n},\\n\\"flags\\": {},\\n\\"order\\": 12,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 10,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [],\\n\\"properties\\": {},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\"\\n]\\n},\\n{\\n\\"id\\": 22,\\n\\"type\\": \\"CLIPSetLastLayer\\",\\n\\"pos\\": {\\n\\"0\\": 1670,\\n\\"1\\": -550\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 27,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n13,\\n14\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPSetLastLayer\\"\\n},\\n\\"widgets_values\\": [\\n-2\\n]\\n},\\n{\\n\\"id\\": 15,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": {\\n\\"0\\": 2060,\\n\\"1\\": -920\\n},\\n\\"size\\": {\\n\\"0\\": 662.3788452148438,\\n\\"1\\": 313.10162353515625\\n},\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 14,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n57\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"from far away anime happy girl (fennec ears:0.95) long (messy hair:1.3) blue eyes, wearing serafuku jeans sitting on rock spread legs (sneakers:0.95) in lake rural swiss village on the mountain side sky clouds HDR sunset\\\\n\\"\\n]\\n},\\n{\\n\\"id\\": 14,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": {\\n\\"0\\": 2060,\\n\\"1\\": -550\\n},\\n\\"size\\": {\\n\\"0\\": 660,\\n\\"1\\": 300\\n},\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 13,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n58\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"(hands), (text:1.1), letters, numbers, error, cropped, (jpeg artifacts:1.2), (signature:1.1), (watermark:1.1), username, blurry, artist name, monochrome, sketch, censorship, censor, (copyright:1.1), extra legs, (forehead mark)  (penis)\\"\\n]\\n},\\n{\\n\\"id\\": 11,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": {\\n\\"0\\": 3240,\\n\\"1\\": -750\\n},\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 14,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 60,\\n\\"label\\": \\"Latent\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 31,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n12\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 12,\\n\\"type\\": \\"SaveImage\\",\\n\\"pos\\": {\\n\\"0\\": 3540,\\n\\"1\\": -750\\n},\\n\\"size\\": {\\n\\"0\\": 1868.09375,\\n\\"1\\": 1101.470947265625\\n},\\n\\"flags\\": {},\\n\\"order\\": 15,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 12,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [],\\n\\"properties\\": {},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\"\\n]\\n},\\n{\\n\\"id\\": 32,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": {\\n\\"0\\": 2830,\\n\\"1\\": -750\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 262\\n},\\n\\"flags\\": {},\\n\\"order\\": 13,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 56,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 57,\\n\\"label\\": \\"正面条件\\"\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 58,\\n\\"label\\": \\"负面条件\\"\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 59,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n60\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n417682270866800,\\n\\"randomize\\",\\n8,\\n13,\\n\\"dpmpp_sde\\",\\n\\"simple\\",\\n0.4999999999999999\\n]\\n},\\n{\\n\\"id\\": 27,\\n\\"type\\": \\"LatentUpscaleBy\\",\\n\\"pos\\": {\\n\\"0\\": 1510,\\n\\"1\\": -160\\n},\\n\\"size\\": {\\n\\"0\\": 325.412841796875,\\n\\"1\\": 82\\n},\\n\\"flags\\": {},\\n\\"order\\": 11,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 62,\\n\\"slot_index\\": 0,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n59\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LatentUpscaleBy\\"\\n},\\n\\"widgets_values\\": [\\n\\"bislerp\\",\\n1.5\\n]\\n},\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": {\\n\\"0\\": 920,\\n\\"1\\": 140\\n},\\n\\"size\\": {\\n\\"0\\": 318.5013427734375,\\n\\"1\\": 262\\n},\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 54,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 4,\\n\\"label\\": \\"正面条件\\"\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 6,\\n\\"label\\": \\"负面条件\\"\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 2,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n7,\\n62\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n758448896326830,\\n\\"randomize\\",\\n14,\\n8,\\n\\"dpmpp_sde\\",\\n\\"simple\\",\\n1\\n]\\n},\\n{\\n\\"id\\": 33,\\n\\"type\\": \\"Note\\",\\n\\"pos\\": {\\n\\"0\\": -60,\\n\\"1\\": 377\\n},\\n\\"size\\": [\\n316.93854389907375,\\n111.4415505935687\\n],\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [],\\n\\"properties\\": {},\\n\\"widgets_values\\": [\\n\\"下面是一个更复杂的 2 遍工作流程的示例，该图像首先使用 WD1.5 beta 3 错觉模型生成，潜在放大，然后使用 cardosAnime_v10 完成第二遍：\\"\\n],\\n\\"color\\": \\"#432\\",\\n\\"bgcolor\\": \\"#653\\"\\n}\\n],\\n\\"links\\": [\\n[\\n2,\\n5,\\n0,\\n3,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n3,\\n4,\\n1,\\n6,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n4,\\n6,\\n0,\\n3,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n5,\\n4,\\n1,\\n7,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n6,\\n7,\\n0,\\n3,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n7,\\n3,\\n0,\\n8,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n8,\\n4,\\n2,\\n8,\\n1,\\n\\"VAE\\"\\n],\\n[\\n10,\\n8,\\n0,\\n10,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n12,\\n11,\\n0,\\n12,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n13,\\n22,\\n0,\\n14,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n14,\\n22,\\n0,\\n15,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n27,\\n13,\\n1,\\n22,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n31,\\n4,\\n2,\\n11,\\n1,\\n\\"VAE\\"\\n],\\n[\\n54,\\n4,\\n0,\\n3,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n56,\\n13,\\n0,\\n32,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n57,\\n15,\\n0,\\n32,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n58,\\n14,\\n0,\\n32,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n59,\\n27,\\n0,\\n32,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n60,\\n32,\\n0,\\n11,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n62,\\n3,\\n0,\\n27,\\n0,\\n\\"LATENT\\"\\n]\\n],\\n\\"groups\\": [],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"ds\\": {\\n\\"scale\\": 0.7513148009015782,\\n\\"offset\\": [\\n396.58245610092587,\\n96.71041336517119\\n]\\n}\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/ComfyUI_examples/高清修复3.json","value":{"title":"高清修复3.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/ComfyUI_examples/高清修复3.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{m as comp,u as data};

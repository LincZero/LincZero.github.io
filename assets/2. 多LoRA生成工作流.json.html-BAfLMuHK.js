import{_ as e,c as a,b as t,o as l,r as o}from"./app-CtMeyR3O.js";const s={};function i(p,r){const n=o("VueFlow");return l(),a("div",null,[t(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 19,
  "last_link_id": 40,
  "nodes": [
    {
      "id": 6,
      "type": "EmptyLatentImage",
      "pos": [
        650,
        340
      ],
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            7
          ],
          "shape": 3,
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
      "id": 8,
      "type": "VAELoader",
      "pos": [
        650,
        150
      ],
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            33
          ],
          "shape": 3,
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
      "id": 2,
      "type": "CLIPSetLastLayer",
      "pos": [
        650,
        250
      ],
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 3,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 1,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            24
          ],
          "shape": 3,
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
      "id": 1,
      "type": "CheckpointLoaderSimple",
      "pos": [
        650,
        10
      ],
      "size": {
        "0": 315,
        "1": 98
      },
      "flags": {},
      "order": 2,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            23
          ],
          "shape": 3,
          "label": "模型"
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            1
          ],
          "shape": 3,
          "label": "CLIP"
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": null,
          "shape": 3,
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
      "id": 3,
      "type": "CLIPTextEncode",
      "pos": [
        1360,
        -10
      ],
      "size": {
        "0": 400,
        "1": 200
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 39,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            5
          ],
          "shape": 3,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "official art, unity 8k wallpaper, ultra detailed, beautiful and aesthetic, beautiful, masterpiece, best quality, (zentangle, mandala, tangle, entangle) , upper body, portrait, detailed face, looking at viewer, front, highres, lu1, cyborg, multicolored hair, makeup, bare shoulders, black leotard, white jacket, open jacket, belt, shorts, , planet, moon, earth (planet),"
      ]
    },
    {
      "id": 4,
      "type": "CLIPTextEncode",
      "pos": [
        1360,
        240
      ],
      "size": {
        "0": 400,
        "1": 200
      },
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 40,
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
          "shape": 3,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, (worst quality:1.2), low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, lowres graffiti, (low quality lowres simple background:1.1),"
      ]
    },
    {
      "id": 17,
      "type": "VAEDecode",
      "pos": [
        2110,
        170
      ],
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
          "link": 31,
          "label": "Latent"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 33,
          "label": "VAE",
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            32
          ],
          "shape": 3,
          "label": "图像",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      }
    },
    {
      "id": 9,
      "type": "SaveImage",
      "pos": [
        2350,
        0
      ],
      "size": {
        "0": 320,
        "1": 270
      },
      "flags": {},
      "order": 11,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 32,
          "label": "图像"
        }
      ],
      "properties": {},
      "widgets_values": [
        "ComfyUI"
      ]
    },
    {
      "id": 5,
      "type": "KSampler",
      "pos": [
        1780,
        -10
      ],
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
          "link": 38,
          "label": "模型"
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 5,
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
          "link": 7,
          "label": "Latent"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            31
          ],
          "shape": 3,
          "label": "Latent",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        47411568428939,
        "randomize",
        50,
        7,
        "dpmpp_2m",
        "karras",
        1
      ]
    },
    {
      "id": 16,
      "type": "LoraLoader",
      "pos": [
        1010,
        -10
      ],
      "size": {
        "0": 315,
        "1": 126
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 23,
          "label": "模型"
        },
        {
          "name": "clip",
          "type": "CLIP",
          "link": 24,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            34
          ],
          "shape": 3,
          "label": "模型",
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            35
          ],
          "shape": 3,
          "label": "CLIP",
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "LoraLoader"
      },
      "widgets_values": [
        "lucy_(cyberpunk)_v10.safetensors",
        0.8,
        0.6
      ]
    },
    {
      "id": 18,
      "type": "LoraLoader",
      "pos": [
        1010,
        160
      ],
      "size": {
        "0": 315,
        "1": 126
      },
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 34,
          "label": "模型"
        },
        {
          "name": "clip",
          "type": "CLIP",
          "link": 35,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            36
          ],
          "shape": 3,
          "label": "模型",
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            37
          ],
          "shape": 3,
          "label": "CLIP",
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "LoraLoader"
      },
      "widgets_values": [
        "3DMM_V12.safetensors",
        0.8,
        0.8
      ]
    },
    {
      "id": 19,
      "type": "LoraLoader",
      "pos": [
        1010,
        330
      ],
      "size": {
        "0": 315,
        "1": 126
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 36,
          "label": "模型"
        },
        {
          "name": "clip",
          "type": "CLIP",
          "link": 37,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            38
          ],
          "shape": 3,
          "label": "模型",
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            39,
            40
          ],
          "shape": 3,
          "label": "CLIP",
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "LoraLoader"
      },
      "widgets_values": [
        "epi_noiseoffset2.safetensors",
        0.3,
        0.3
      ]
    }
  ],
  "links": [
    [
      1,
      1,
      1,
      2,
      0,
      "CLIP"
    ],
    [
      5,
      3,
      0,
      5,
      1,
      "CONDITIONING"
    ],
    [
      6,
      4,
      0,
      5,
      2,
      "CONDITIONING"
    ],
    [
      7,
      6,
      0,
      5,
      3,
      "LATENT"
    ],
    [
      23,
      1,
      0,
      16,
      0,
      "MODEL"
    ],
    [
      24,
      2,
      0,
      16,
      1,
      "CLIP"
    ],
    [
      31,
      5,
      0,
      17,
      0,
      "LATENT"
    ],
    [
      32,
      17,
      0,
      9,
      0,
      "IMAGE"
    ],
    [
      33,
      8,
      0,
      17,
      1,
      "VAE"
    ],
    [
      34,
      16,
      0,
      18,
      0,
      "MODEL"
    ],
    [
      35,
      16,
      1,
      18,
      1,
      "CLIP"
    ],
    [
      36,
      18,
      0,
      19,
      0,
      "MODEL"
    ],
    [
      37,
      18,
      1,
      19,
      1,
      "CLIP"
    ],
    [
      38,
      19,
      0,
      5,
      0,
      "MODEL"
    ],
    [
      39,
      19,
      1,
      3,
      0,
      "CLIP"
    ],
    [
      40,
      19,
      1,
      4,
      0,
      "CLIP"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "0246.VERSION": [
      0,
      0,
      4
    ]
  },
  "version": 0.4
}
`})])}const m=e(s,[["render",i],["__file","2. 多LoRA生成工作流.json.html.vue"]]),L=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%99%84%E5%8A%A0%E7%BD%91%E7%BB%9C%E5%B7%A5%E4%BD%9C%E6%B5%81/2.%20%E5%A4%9ALoRA%E7%94%9F%E6%88%90%E5%B7%A5%E4%BD%9C%E6%B5%81.json","title":"","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 19, \\"last_link_id\\": 40, \\"nodes\\": [ { \\"id\\": 6, \\"type\\": \\"EmptyLatentImage\\", \\"pos\\": [ 650, 340 ], \\"size\\": { \\"0\\": 315, \\"1\\": 106 }, \\"flags\\": {}, \\"order\\": 0, \\"mode\\":...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%99%84%E5%8A%A0%E7%BD%91%E7%BB%9C%E5%B7%A5%E4%BD%9C%E6%B5%81/2.%20%E5%A4%9ALoRA%E7%94%9F%E6%88%90%E5%B7%A5%E4%BD%9C%E6%B5%81.json"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 19, \\"last_link_id\\": 40, \\"nodes\\": [ { \\"id\\": 6, \\"type\\": \\"EmptyLatentImage\\", \\"pos\\": [ 650, 340 ], \\"size\\": { \\"0\\": 315, \\"1\\": 106 }, \\"flags\\": {}, \\"order\\": 0, \\"mode\\":..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.85,"words":856},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/附加网络工作流/2. 多LoRA生成工作流.json","excerpt":"<p>{\\n\\"last_node_id\\": 19,\\n\\"last_link_id\\": 40,\\n\\"nodes\\": [\\n{\\n\\"id\\": 6,\\n\\"type\\": \\"EmptyLatentImage\\",\\n\\"pos\\": [\\n650,\\n340\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 106\\n},\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n7\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"EmptyLatentImage\\"\\n},\\n\\"widgets_values\\": [\\n768,\\n768,\\n1\\n]\\n},\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"VAELoader\\",\\n\\"pos\\": [\\n650,\\n150\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n33\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAELoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"animevae.pt\\"\\n]\\n},\\n{\\n\\"id\\": 2,\\n\\"type\\": \\"CLIPSetLastLayer\\",\\n\\"pos\\": [\\n650,\\n250\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 1,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n24\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPSetLastLayer\\"\\n},\\n\\"widgets_values\\": [\\n-2\\n]\\n},\\n{\\n\\"id\\": 1,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": [\\n650,\\n10\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n23\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n1\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"CLIP\\"\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"majicmixLux_v3.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n1360,\\n-10\\n],\\n\\"size\\": {\\n\\"0\\": 400,\\n\\"1\\": 200\\n},\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 39,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n5\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"official art, unity 8k wallpaper, ultra detailed, beautiful and aesthetic, beautiful, masterpiece, best quality, (zentangle, mandala, tangle, entangle) , upper body, portrait, detailed face, looking at viewer, front, highres, lu1, cyborg, multicolored hair, makeup, bare shoulders, black leotard, white jacket, open jacket, belt, shorts, , planet, moon, earth (planet),\\"\\n]\\n},\\n{\\n\\"id\\": 4,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n1360,\\n240\\n],\\n\\"size\\": {\\n\\"0\\": 400,\\n\\"1\\": 200\\n},\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 40,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n6\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, (worst quality:1.2), low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, lowres graffiti, (low quality lowres simple background:1.1),\\"\\n]\\n},\\n{\\n\\"id\\": 17,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": [\\n2110,\\n170\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 31,\\n\\"label\\": \\"Latent\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 33,\\n\\"label\\": \\"VAE\\",\\n\\"slot_index\\": 1\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n32\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n}\\n},\\n{\\n\\"id\\": 9,\\n\\"type\\": \\"SaveImage\\",\\n\\"pos\\": [\\n2350,\\n0\\n],\\n\\"size\\": {\\n\\"0\\": 320,\\n\\"1\\": 270\\n},\\n\\"flags\\": {},\\n\\"order\\": 11,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 32,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\"\\n]\\n},\\n{\\n\\"id\\": 5,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": [\\n1780,\\n-10\\n],\\n\\"size\\": {\\n\\"0\\": 320,\\n\\"1\\": 470\\n},\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 38,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 5,\\n\\"label\\": \\"正面条件\\"\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 6,\\n\\"label\\": \\"负面条件\\"\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 7,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n31\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"Latent\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n47411568428939,\\n\\"randomize\\",\\n50,\\n7,\\n\\"dpmpp_2m\\",\\n\\"karras\\",\\n1\\n]\\n},\\n{\\n\\"id\\": 16,\\n\\"type\\": \\"LoraLoader\\",\\n\\"pos\\": [\\n1010,\\n-10\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 126\\n},\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 23,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 24,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n34\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"模型\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n35\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"CLIP\\",\\n\\"slot_index\\": 1\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoraLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"lucy_(cyberpunk)_v10.safetensors\\",\\n0.8,\\n0.6\\n]\\n},\\n{\\n\\"id\\": 18,\\n\\"type\\": \\"LoraLoader\\",\\n\\"pos\\": [\\n1010,\\n160\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 126\\n},\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 34,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 35,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n36\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"模型\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n37\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"CLIP\\",\\n\\"slot_index\\": 1\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoraLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"3DMM_V12.safetensors\\",\\n0.8,\\n0.8\\n]\\n},\\n{\\n\\"id\\": 19,\\n\\"type\\": \\"LoraLoader\\",\\n\\"pos\\": [\\n1010,\\n330\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 126\\n},\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 36,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 37,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n38\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"模型\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n39,\\n40\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"CLIP\\",\\n\\"slot_index\\": 1\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoraLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"epi_noiseoffset2.safetensors\\",\\n0.3,\\n0.3\\n]\\n}\\n],\\n\\"links\\": [\\n[\\n1,\\n1,\\n1,\\n2,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n5,\\n3,\\n0,\\n5,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n6,\\n4,\\n0,\\n5,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n7,\\n6,\\n0,\\n5,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n23,\\n1,\\n0,\\n16,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n24,\\n2,\\n0,\\n16,\\n1,\\n\\"CLIP\\"\\n],\\n[\\n31,\\n5,\\n0,\\n17,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n32,\\n17,\\n0,\\n9,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n33,\\n8,\\n0,\\n17,\\n1,\\n\\"VAE\\"\\n],\\n[\\n34,\\n16,\\n0,\\n18,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n35,\\n16,\\n1,\\n18,\\n1,\\n\\"CLIP\\"\\n],\\n[\\n36,\\n18,\\n0,\\n19,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n37,\\n18,\\n1,\\n19,\\n1,\\n\\"CLIP\\"\\n],\\n[\\n38,\\n19,\\n0,\\n5,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n39,\\n19,\\n1,\\n3,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n40,\\n19,\\n1,\\n4,\\n0,\\n\\"CLIP\\"\\n]\\n],\\n\\"groups\\": [],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"0246.VERSION\\": [\\n0,\\n0,\\n4\\n]\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true}');export{m as comp,L as data};

import{_ as e,c as t,e as a,o,r as s}from"./app-BETEO2EF.js";const l={};function i(p,d){const n=s("VueFlow");return o(),t("div",null,[a(n,{type:"comfyui",data:`{
  "last_node_id": 65,
  "last_link_id": 138,
  "nodes": [
    {
      "id": 7,
      "type": "CLIPTextEncode",
      "pos": [
        350,
        410
      ],
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
          "link": 82,
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
        "nsfw, (worst quality), (low quality), (normal quality), "
      ]
    },
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": [
        1260,
        150
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
          "link": 42,
          "label": "Latent"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 84,
          "label": "VAE"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            22
          ],
          "slot_index": 0,
          "label": "图像"
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      }
    },
    {
      "id": 29,
      "type": "CheckpointLoaderSimple",
      "pos": [
        -50,
        350
      ],
      "size": {
        "0": 315,
        "1": 98
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            80
          ],
          "slot_index": 0,
          "label": "模型"
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            81,
            82
          ],
          "slot_index": 1,
          "label": "CLIP"
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            84,
            89
          ],
          "slot_index": 2,
          "label": "VAE"
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimple"
      },
      "widgets_values": [
        "AWPainting_v1.3.safetensors"
      ]
    },
    {
      "id": 9,
      "type": "SaveImage",
      "pos": [
        1260,
        240
      ],
      "size": {
        "0": 340,
        "1": 350
      },
      "flags": {},
      "order": 11,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 22,
          "label": "图像"
        }
      ],
      "properties": {},
      "widgets_values": [
        "ComfyUI"
      ]
    },
    {
      "id": 3,
      "type": "KSampler",
      "pos": [
        940,
        150
      ],
      "size": {
        "0": 300,
        "1": 470
      },
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 80,
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
          "link": 92,
          "label": "Latent"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            42
          ],
          "slot_index": 0,
          "label": "Latent"
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        669543285694812,
        "randomize",
        30,
        8,
        "dpmpp_2m",
        "karras",
        1
      ]
    },
    {
      "id": 34,
      "type": "VAEEncode",
      "pos": [
        1090,
        860
      ],
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "pixels",
          "type": "IMAGE",
          "link": 88,
          "label": "图像"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 89,
          "label": "VAE"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            91
          ],
          "shape": 3,
          "label": "Latent",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEEncode"
      }
    },
    {
      "id": 33,
      "type": "SetLatentNoiseMask",
      "pos": [
        1400,
        750
      ],
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
          "link": 91,
          "label": "Latent"
        },
        {
          "name": "mask",
          "type": "MASK",
          "link": 129,
          "label": "遮罩"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            92
          ],
          "shape": 3,
          "label": "Latent",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "SetLatentNoiseMask"
      }
    },
    {
      "id": 20,
      "type": "LoadImage",
      "pos": [
        10,
        690
      ],
      "size": {
        "0": 385,
        "1": 365
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            88
          ],
          "slot_index": 0,
          "label": "图像"
        },
        {
          "name": "MASK",
          "type": "MASK",
          "links": [],
          "slot_index": 1,
          "label": "遮罩"
        }
      ],
      "properties": {
        "Node name for S&R": "LoadImage"
      },
      "widgets_values": [
        "clipspace/clipspace-mask-7249457.5.png [input]",
        "image"
      ]
    },
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": [
        350,
        200
      ],
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
          "link": 81,
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
        "1girl, upper body, from below, blurry background, depth of field, scenery, outdoors, sky,glimmer, sky, scenery, no humans, cloud, outdoors, morning,dappled_sunlight, , forest, mountains, horizon"
      ]
    },
    {
      "id": 56,
      "type": "ImpactGaussianBlurMask",
      "pos": [
        1070,
        730
      ],
      "size": {
        "0": 315,
        "1": 82
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "mask",
          "type": "MASK",
          "link": 138,
          "label": "遮罩"
        }
      ],
      "outputs": [
        {
          "name": "MASK",
          "type": "MASK",
          "links": [
            129
          ],
          "shape": 3,
          "label": "遮罩",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ImpactGaussianBlurMask"
      },
      "widgets_values": [
        5,
        10
      ]
    },
    {
      "id": 61,
      "type": "ImageToMask",
      "pos": [
        790,
        740
      ],
      "size": {
        "0": 250,
        "1": 60
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 137,
          "label": "图像",
          "slot_index": 0
        }
      ],
      "outputs": [
        {
          "name": "MASK",
          "type": "MASK",
          "links": [
            138
          ],
          "shape": 3,
          "label": "遮罩",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ImageToMask"
      },
      "widgets_values": [
        "red"
      ]
    },
    {
      "id": 65,
      "type": "LoadImage",
      "pos": [
        430,
        710
      ],
      "size": [
        320,
        314
      ],
      "flags": {},
      "order": 2,
      "mode": 0,
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            137
          ],
          "shape": 3,
          "label": "图像"
        },
        {
          "name": "MASK",
          "type": "MASK",
          "links": null,
          "shape": 3,
          "label": "遮罩"
        }
      ],
      "properties": {
        "Node name for S&R": "LoadImage"
      },
      "widgets_values": [
        "mask.jpg",
        "image"
      ]
    }
  ],
  "links": [
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
      22,
      8,
      0,
      9,
      0,
      "IMAGE"
    ],
    [
      42,
      3,
      0,
      8,
      0,
      "LATENT"
    ],
    [
      80,
      29,
      0,
      3,
      0,
      "MODEL"
    ],
    [
      81,
      29,
      1,
      6,
      0,
      "CLIP"
    ],
    [
      82,
      29,
      1,
      7,
      0,
      "CLIP"
    ],
    [
      84,
      29,
      2,
      8,
      1,
      "VAE"
    ],
    [
      88,
      20,
      0,
      34,
      0,
      "IMAGE"
    ],
    [
      89,
      29,
      2,
      34,
      1,
      "VAE"
    ],
    [
      91,
      34,
      0,
      33,
      0,
      "LATENT"
    ],
    [
      92,
      33,
      0,
      3,
      3,
      "LATENT"
    ],
    [
      129,
      56,
      0,
      33,
      1,
      "MASK"
    ],
    [
      137,
      65,
      0,
      61,
      0,
      "IMAGE"
    ],
    [
      138,
      61,
      0,
      56,
      0,
      "MASK"
    ]
  ],
  "groups": [
    {
      "title": "Load image and alpha mask for inpainting",
      "bounding": [
        -20,
        607,
        1677,
        465
      ],
      "color": "#8A8",
      "font_size": 24,
      "locked": false
    }
  ],
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
`})])}const m=e(l,[["render",i],["__file","4. 局部重绘工作流（上传蒙版版本）.json.html.vue"]]),E=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E5%B1%80%E9%83%A8%E9%87%8D%E7%BB%98%E5%B7%A5%E4%BD%9C%E6%B5%81/4.%20%E5%B1%80%E9%83%A8%E9%87%8D%E7%BB%98%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%88%E4%B8%8A%E4%BC%A0%E8%92%99%E7%89%88%E7%89%88%E6%9C%AC%EF%BC%89.json","title":"","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 65, \\"last_link_id\\": 138, \\"nodes\\": [ { \\"id\\": 7, \\"type\\": \\"CLIPTextEncode\\", \\"pos\\": [ 350, 410 ], \\"size\\": { \\"0\\": 425.27801513671875, \\"1\\": 180.6060791015625 }, \\"fla...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E5%B1%80%E9%83%A8%E9%87%8D%E7%BB%98%E5%B7%A5%E4%BD%9C%E6%B5%81/4.%20%E5%B1%80%E9%83%A8%E9%87%8D%E7%BB%98%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%88%E4%B8%8A%E4%BC%A0%E8%92%99%E7%89%88%E7%89%88%E6%9C%AC%EF%BC%89.json"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 65, \\"last_link_id\\": 138, \\"nodes\\": [ { \\"id\\": 7, \\"type\\": \\"CLIPTextEncode\\", \\"pos\\": [ 350, 410 ], \\"size\\": { \\"0\\": 425.27801513671875, \\"1\\": 180.6060791015625 }, \\"fla..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.62,"words":787},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/局部重绘工作流/4. 局部重绘工作流（上传蒙版版本）.json","excerpt":"<p>{\\n\\"last_node_id\\": 65,\\n\\"last_link_id\\": 138,\\n\\"nodes\\": [\\n{\\n\\"id\\": 7,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n350,\\n410\\n],\\n\\"size\\": {\\n\\"0\\": 425.27801513671875,\\n\\"1\\": 180.6060791015625\\n},\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 82,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n6\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"nsfw, (worst quality), (low quality), (normal quality), \\"\\n]\\n},\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": [\\n1260,\\n150\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 42,\\n\\"label\\": \\"Latent\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 84,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n22\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n}\\n},\\n{\\n\\"id\\": 29,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": [\\n-50,\\n350\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n80\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n81,\\n82\\n],\\n\\"slot_index\\": 1,\\n\\"label\\": \\"CLIP\\"\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n84,\\n89\\n],\\n\\"slot_index\\": 2,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"AWPainting_v1.3.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 9,\\n\\"type\\": \\"SaveImage\\",\\n\\"pos\\": [\\n1260,\\n240\\n],\\n\\"size\\": {\\n\\"0\\": 340,\\n\\"1\\": 350\\n},\\n\\"flags\\": {},\\n\\"order\\": 11,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 22,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\"\\n]\\n},\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": [\\n940,\\n150\\n],\\n\\"size\\": {\\n\\"0\\": 300,\\n\\"1\\": 470\\n},\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 80,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 4,\\n\\"label\\": \\"正面条件\\"\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 6,\\n\\"label\\": \\"负面条件\\"\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 92,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n42\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n669543285694812,\\n\\"randomize\\",\\n30,\\n8,\\n\\"dpmpp_2m\\",\\n\\"karras\\",\\n1\\n]\\n},\\n{\\n\\"id\\": 34,\\n\\"type\\": \\"VAEEncode\\",\\n\\"pos\\": [\\n1090,\\n860\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"pixels\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 88,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 89,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n91\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"Latent\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEEncode\\"\\n}\\n},\\n{\\n\\"id\\": 33,\\n\\"type\\": \\"SetLatentNoiseMask\\",\\n\\"pos\\": [\\n1400,\\n750\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 91,\\n\\"label\\": \\"Latent\\"\\n},\\n{\\n\\"name\\": \\"mask\\",\\n\\"type\\": \\"MASK\\",\\n\\"link\\": 129,\\n\\"label\\": \\"遮罩\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n92\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"Latent\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"SetLatentNoiseMask\\"\\n}\\n},\\n{\\n\\"id\\": 20,\\n\\"type\\": \\"LoadImage\\",\\n\\"pos\\": [\\n10,\\n690\\n],\\n\\"size\\": {\\n\\"0\\": 385,\\n\\"1\\": 365\\n},\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n88\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": [],\\n\\"slot_index\\": 1,\\n\\"label\\": \\"遮罩\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"clipspace/clipspace-mask-7249457.5.png [input]\\",\\n\\"image\\"\\n]\\n},\\n{\\n\\"id\\": 6,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n350,\\n200\\n],\\n\\"size\\": {\\n\\"0\\": 422.84503173828125,\\n\\"1\\": 164.31304931640625\\n},\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 81,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n4\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"1girl, upper body, from below, blurry background, depth of field, scenery, outdoors, sky,glimmer, sky, scenery, no humans, cloud, outdoors, morning,dappled_sunlight, , forest, mountains, horizon\\"\\n]\\n},\\n{\\n\\"id\\": 56,\\n\\"type\\": \\"ImpactGaussianBlurMask\\",\\n\\"pos\\": [\\n1070,\\n730\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 82\\n},\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"mask\\",\\n\\"type\\": \\"MASK\\",\\n\\"link\\": 138,\\n\\"label\\": \\"遮罩\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": [\\n129\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"遮罩\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ImpactGaussianBlurMask\\"\\n},\\n\\"widgets_values\\": [\\n5,\\n10\\n]\\n},\\n{\\n\\"id\\": 61,\\n\\"type\\": \\"ImageToMask\\",\\n\\"pos\\": [\\n790,\\n740\\n],\\n\\"size\\": {\\n\\"0\\": 250,\\n\\"1\\": 60\\n},\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 137,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": [\\n138\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"遮罩\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ImageToMask\\"\\n},\\n\\"widgets_values\\": [\\n\\"red\\"\\n]\\n},\\n{\\n\\"id\\": 65,\\n\\"type\\": \\"LoadImage\\",\\n\\"pos\\": [\\n430,\\n710\\n],\\n\\"size\\": [\\n320,\\n314\\n],\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n137\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"遮罩\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"mask.jpg\\",\\n\\"image\\"\\n]\\n}\\n],\\n\\"links\\": [\\n[\\n4,\\n6,\\n0,\\n3,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n6,\\n7,\\n0,\\n3,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n22,\\n8,\\n0,\\n9,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n42,\\n3,\\n0,\\n8,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n80,\\n29,\\n0,\\n3,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n81,\\n29,\\n1,\\n6,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n82,\\n29,\\n1,\\n7,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n84,\\n29,\\n2,\\n8,\\n1,\\n\\"VAE\\"\\n],\\n[\\n88,\\n20,\\n0,\\n34,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n89,\\n29,\\n2,\\n34,\\n1,\\n\\"VAE\\"\\n],\\n[\\n91,\\n34,\\n0,\\n33,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n92,\\n33,\\n0,\\n3,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n129,\\n56,\\n0,\\n33,\\n1,\\n\\"MASK\\"\\n],\\n[\\n137,\\n65,\\n0,\\n61,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n138,\\n61,\\n0,\\n56,\\n0,\\n\\"MASK\\"\\n]\\n],\\n\\"groups\\": [\\n{\\n\\"title\\": \\"Load image and alpha mask for inpainting\\",\\n\\"bounding\\": [\\n-20,\\n607,\\n1677,\\n465\\n],\\n\\"color\\": \\"#8A8\\",\\n\\"font_size\\": 24,\\n\\"locked\\": false\\n}\\n],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"0246.VERSION\\": [\\n0,\\n0,\\n4\\n]\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true}');export{m as comp,E as data};

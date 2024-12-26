import{_ as e,c as t,b as o,o as a,r as s}from"./app-xgHpiPmZ.js";const l={};function i(p,r){const n=s("VueFlow");return a(),t("div",null,[o(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 17,
  "last_link_id": 24,
  "nodes": [
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": [
        1210,
        250
      ],
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 11,
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
      }
    },
    {
      "id": 9,
      "type": "SaveImage",
      "pos": [
        1453,
        247
      ],
      "size": {
        "0": 393.6202087402344,
        "1": 449.1610107421875
      },
      "flags": {},
      "order": 12,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 9,
          "label": "图像"
        }
      ],
      "properties": {},
      "widgets_values": [
        "ComfyUI"
      ]
    },
    {
      "id": 12,
      "type": "ControlNetLoader",
      "pos": [
        -50,
        69
      ],
      "size": {
        "0": 422,
        "1": 58
      },
      "flags": {},
      "order": 0,
      "mode": 0,
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
      "id": 5,
      "type": "EmptyLatentImage",
      "pos": [
        439,
        446
      ],
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 1,
      "mode": 0,
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
      "pos": [
        840,
        30
      ],
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 2,
      "mode": 0,
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
      "pos": [
        842,
        150
      ],
      "size": {
        "0": 320,
        "1": 470
      },
      "flags": {},
      "order": 10,
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
        591832410064249,
        "randomize",
        24,
        6,
        "dpmpp_2m",
        "karras",
        1
      ]
    },
    {
      "id": 14,
      "type": "CheckpointLoaderSimple",
      "pos": [
        -390,
        -40
      ],
      "size": {
        "0": 315,
        "1": 98
      },
      "flags": {},
      "order": 3,
      "mode": 0,
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
      "id": 7,
      "type": "CLIPTextEncode",
      "pos": [
        355,
        213
      ],
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
        "(hands), text, error, cropped, (worst quality:1.2), (low quality:1.2), normal quality, (jpeg artifacts:1.3), signature, watermark, username, blurry, artist name, monochrome, sketch, censorship, censor, (copyright:1.2), extra legs, (forehead mark) (depth of field) (emotionless) (penis), embedding:EasyNegative, embedding:badhandv4, "
      ]
    },
    {
      "id": 10,
      "type": "ControlNetApply",
      "pos": [
        459,
        51
      ],
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
          "link": 23,
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
      "pos": [
        -42,
        -147
      ],
      "size": {
        "0": 422.84503173828125,
        "1": 164.31304931640625
      },
      "flags": {},
      "order": 6,
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
        "masterpiece, best quality, highres, 1girl, bare shoulders, blonde hair, long hair, white background, shining green dress, looking at viewer, face light, low contrast, outdoors, sea of white flowers, plants, cinematic lights, lightrays,"
      ]
    },
    {
      "id": 11,
      "type": "LoadImage",
      "pos": [
        -520,
        140
      ],
      "size": {
        "0": 387.97003173828125,
        "1": 465.5097961425781
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            22
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
        "00086-3734888691.png",
        "image"
      ]
    },
    {
      "id": 16,
      "type": "OpenposePreprocessor",
      "pos": [
        -40,
        230
      ],
      "size": {
        "0": 315,
        "1": 150
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 22,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            23,
            24
          ],
          "shape": 3,
          "label": "图像",
          "slot_index": 0
        },
        {
          "name": "POSE_KEYPOINT",
          "type": "POSE_KEYPOINT",
          "links": null,
          "shape": 3,
          "label": "姿态关键点"
        }
      ],
      "properties": {
        "Node name for S&R": "OpenposePreprocessor"
      },
      "widgets_values": [
        "enable",
        "enable",
        "enable",
        512
      ]
    },
    {
      "id": 17,
      "type": "PreviewImage",
      "pos": [
        10,
        450
      ],
      "size": {
        "0": 210,
        "1": 26
      },
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 24,
          "label": "图像"
        }
      ],
      "properties": {
        "Node name for S&R": "PreviewImage"
      }
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
    ],
    [
      22,
      11,
      0,
      16,
      0,
      "IMAGE"
    ],
    [
      23,
      16,
      0,
      10,
      2,
      "IMAGE"
    ],
    [
      24,
      16,
      0,
      17,
      0,
      "IMAGE"
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
`})])}const m=e(l,[["render",i],["__file","5. ControlNet基本工作流（含Openpose预处理）.json.html.vue"]]),N=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%99%84%E5%8A%A0%E7%BD%91%E7%BB%9C%E5%B7%A5%E4%BD%9C%E6%B5%81/5.%20ControlNet%E5%9F%BA%E6%9C%AC%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%88%E5%90%ABOpenpose%E9%A2%84%E5%A4%84%E7%90%86%EF%BC%89.json","title":"","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 17, \\"last_link_id\\": 24, \\"nodes\\": [ { \\"id\\": 8, \\"type\\": \\"VAEDecode\\", \\"pos\\": [ 1210, 250 ], \\"size\\": { \\"0\\": 210, \\"1\\": 46 }, \\"flags\\": {}, \\"order\\": 11, \\"mode\\": 0, \\"i...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%99%84%E5%8A%A0%E7%BD%91%E7%BB%9C%E5%B7%A5%E4%BD%9C%E6%B5%81/5.%20ControlNet%E5%9F%BA%E6%9C%AC%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%88%E5%90%ABOpenpose%E9%A2%84%E5%A4%84%E7%90%86%EF%BC%89.json"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 17, \\"last_link_id\\": 24, \\"nodes\\": [ { \\"id\\": 8, \\"type\\": \\"VAEDecode\\", \\"pos\\": [ 1210, 250 ], \\"size\\": { \\"0\\": 210, \\"1\\": 46 }, \\"flags\\": {}, \\"order\\": 11, \\"mode\\": 0, \\"i..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.72,"words":815},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/附加网络工作流/5. ControlNet基本工作流（含Openpose预处理）.json","excerpt":"<p>{\\n\\"last_node_id\\": 17,\\n\\"last_link_id\\": 24,\\n\\"nodes\\": [\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": [\\n1210,\\n250\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 11,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 7,\\n\\"label\\": \\"Latent\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 14,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n9\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n}\\n},\\n{\\n\\"id\\": 9,\\n\\"type\\": \\"SaveImage\\",\\n\\"pos\\": [\\n1453,\\n247\\n],\\n\\"size\\": {\\n\\"0\\": 393.6202087402344,\\n\\"1\\": 449.1610107421875\\n},\\n\\"flags\\": {},\\n\\"order\\": 12,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 9,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\"\\n]\\n},\\n{\\n\\"id\\": 12,\\n\\"type\\": \\"ControlNetLoader\\",\\n\\"pos\\": [\\n-50,\\n69\\n],\\n\\"size\\": {\\n\\"0\\": 422,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONTROL_NET\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"links\\": [\\n13\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"ControlNet\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"control_v11p_sd15_openpose.pth\\"\\n]\\n},\\n{\\n\\"id\\": 5,\\n\\"type\\": \\"EmptyLatentImage\\",\\n\\"pos\\": [\\n439,\\n446\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 106\\n},\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n2\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"EmptyLatentImage\\"\\n},\\n\\"widgets_values\\": [\\n512,\\n768,\\n1\\n]\\n},\\n{\\n\\"id\\": 13,\\n\\"type\\": \\"VAELoader\\",\\n\\"pos\\": [\\n840,\\n30\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n14\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAELoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"animevae.pt\\"\\n]\\n},\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": [\\n842,\\n150\\n],\\n\\"size\\": {\\n\\"0\\": 320,\\n\\"1\\": 470\\n},\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 19,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 18,\\n\\"label\\": \\"正面条件\\"\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 16,\\n\\"label\\": \\"负面条件\\"\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 2,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n7\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n591832410064249,\\n\\"randomize\\",\\n24,\\n6,\\n\\"dpmpp_2m\\",\\n\\"karras\\",\\n1\\n]\\n},\\n{\\n\\"id\\": 14,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": [\\n-390,\\n-40\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n19\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n20,\\n21\\n],\\n\\"slot_index\\": 1,\\n\\"label\\": \\"CLIP\\"\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": null,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"awpainting_v12.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 7,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n355,\\n213\\n],\\n\\"size\\": {\\n\\"0\\": 425.27801513671875,\\n\\"1\\": 180.6060791015625\\n},\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 20,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n16\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"(hands), text, error, cropped, (worst quality:1.2), (low quality:1.2), normal quality, (jpeg artifacts:1.3), signature, watermark, username, blurry, artist name, monochrome, sketch, censorship, censor, (copyright:1.2), extra legs, (forehead mark) (depth of field) (emotionless) (penis), embedding:EasyNegative, embedding:badhandv4, \\"\\n]\\n},\\n{\\n\\"id\\": 10,\\n\\"type\\": \\"ControlNetApply\\",\\n\\"pos\\": [\\n459,\\n51\\n],\\n\\"size\\": {\\n\\"0\\": 317.4000244140625,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"conditioning\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 10,\\n\\"label\\": \\"条件\\"\\n},\\n{\\n\\"name\\": \\"control_net\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"link\\": 13,\\n\\"label\\": \\"ControlNet\\"\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 23,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n18\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetApply\\"\\n},\\n\\"widgets_values\\": [\\n0.8\\n]\\n},\\n{\\n\\"id\\": 6,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n-42,\\n-147\\n],\\n\\"size\\": {\\n\\"0\\": 422.84503173828125,\\n\\"1\\": 164.31304931640625\\n},\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 21,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n10\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"masterpiece, best quality, highres, 1girl, bare shoulders, blonde hair, long hair, white background, shining green dress, looking at viewer, face light, low contrast, outdoors, sea of white flowers, plants, cinematic lights, lightrays,\\"\\n]\\n},\\n{\\n\\"id\\": 11,\\n\\"type\\": \\"LoadImage\\",\\n\\"pos\\": [\\n-520,\\n140\\n],\\n\\"size\\": {\\n\\"0\\": 387.97003173828125,\\n\\"1\\": 465.5097961425781\\n},\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n22\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": null,\\n\\"label\\": \\"遮罩\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"00086-3734888691.png\\",\\n\\"image\\"\\n]\\n},\\n{\\n\\"id\\": 16,\\n\\"type\\": \\"OpenposePreprocessor\\",\\n\\"pos\\": [\\n-40,\\n230\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 150\\n},\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 22,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n23,\\n24\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"POSE_KEYPOINT\\",\\n\\"type\\": \\"POSE_KEYPOINT\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"姿态关键点\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"OpenposePreprocessor\\"\\n},\\n\\"widgets_values\\": [\\n\\"enable\\",\\n\\"enable\\",\\n\\"enable\\",\\n512\\n]\\n},\\n{\\n\\"id\\": 17,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n10,\\n450\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 26\\n},\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 24,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n}\\n}\\n],\\n\\"links\\": [\\n[\\n2,\\n5,\\n0,\\n3,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n7,\\n3,\\n0,\\n8,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n9,\\n8,\\n0,\\n9,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n10,\\n6,\\n0,\\n10,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n13,\\n12,\\n0,\\n10,\\n1,\\n\\"CONTROL_NET\\"\\n],\\n[\\n14,\\n13,\\n0,\\n8,\\n1,\\n\\"VAE\\"\\n],\\n[\\n16,\\n7,\\n0,\\n3,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n18,\\n10,\\n0,\\n3,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n19,\\n14,\\n0,\\n3,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n20,\\n14,\\n1,\\n7,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n21,\\n14,\\n1,\\n6,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n22,\\n11,\\n0,\\n16,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n23,\\n16,\\n0,\\n10,\\n2,\\n\\"IMAGE\\"\\n],\\n[\\n24,\\n16,\\n0,\\n17,\\n0,\\n\\"IMAGE\\"\\n]\\n],\\n\\"groups\\": [],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"0246.VERSION\\": [\\n0,\\n0,\\n4\\n]\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true}');export{m as comp,N as data};

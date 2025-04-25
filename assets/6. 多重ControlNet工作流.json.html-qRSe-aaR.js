import{_ as r,e,h as b,r as o,o as t}from"./app-2ewKu9R2.js";const l={};function s(a,i){const n=o("VueFlow");return t(),e("div",null,[b(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 34,
  "last_link_id": 41,
  "nodes": [
    {
      "id": 16,
      "type": "OpenposePreprocessor",
      "pos": [
        430,
        -340
      ],
      "size": {
        "0": 315,
        "1": 150
      },
      "flags": {},
      "order": 10,
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
      "id": 12,
      "type": "ControlNetLoader",
      "pos": [
        430,
        -440
      ],
      "size": {
        "0": 320,
        "1": 60
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
      "id": 31,
      "type": "PreviewImage",
      "pos": [
        1510,
        -800
      ],
      "size": {
        "0": 210,
        "1": 310
      },
      "flags": {},
      "order": 18,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 31,
          "label": "图像"
        }
      ],
      "properties": {
        "Node name for S&R": "PreviewImage"
      }
    },
    {
      "id": 29,
      "type": "PreviewImage",
      "pos": [
        1160,
        -800
      ],
      "size": {
        "0": 210,
        "1": 310
      },
      "flags": {},
      "order": 17,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 30,
          "label": "图像",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "PreviewImage"
      }
    },
    {
      "id": 33,
      "type": "LineArtPreprocessor",
      "pos": [
        1110,
        -300
      ],
      "size": {
        "0": 315,
        "1": 82
      },
      "flags": {},
      "order": 12,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 33,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            30,
            39
          ],
          "shape": 3,
          "label": "图像",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "LineArtPreprocessor"
      },
      "widgets_values": [
        "disable",
        512
      ]
    },
    {
      "id": 34,
      "type": "HEDPreprocessor",
      "pos": [
        1450,
        -300
      ],
      "size": {
        "0": 315,
        "1": 82
      },
      "flags": {},
      "order": 13,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 34,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            31,
            40
          ],
          "shape": 3,
          "label": "图像",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "HEDPreprocessor"
      },
      "widgets_values": [
        "enable",
        512
      ]
    },
    {
      "id": 30,
      "type": "ControlNetLoader",
      "pos": [
        1110,
        -440
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
          "name": "CONTROL_NET",
          "type": "CONTROL_NET",
          "links": [
            35
          ],
          "shape": 3,
          "label": "ControlNet",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetLoader"
      },
      "widgets_values": [
        "control_v11p_sd15_lineart.pth"
      ]
    },
    {
      "id": 32,
      "type": "ControlNetLoader",
      "pos": [
        1460,
        -440
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
          "name": "CONTROL_NET",
          "type": "CONTROL_NET",
          "links": [
            36
          ],
          "shape": 3,
          "label": "ControlNet",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetLoader"
      },
      "widgets_values": [
        "control_v11p_sd15_softedge.pth"
      ]
    },
    {
      "id": 25,
      "type": "PreviewImage",
      "pos": [
        820,
        -800
      ],
      "size": {
        "0": 210,
        "1": 310
      },
      "flags": {},
      "order": 16,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 29,
          "label": "图像"
        }
      ],
      "properties": {
        "Node name for S&R": "PreviewImage"
      }
    },
    {
      "id": 23,
      "type": "ControlNetLoader",
      "pos": [
        780,
        -440
      ],
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 3,
      "mode": 0,
      "outputs": [
        {
          "name": "CONTROL_NET",
          "type": "CONTROL_NET",
          "links": [
            27
          ],
          "shape": 3,
          "label": "ControlNet"
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetLoader"
      },
      "widgets_values": [
        "control_v11f1p_sd15_depth.pth"
      ]
    },
    {
      "id": 3,
      "type": "KSampler",
      "pos": [
        1880,
        -400
      ],
      "size": {
        "0": 320,
        "1": 470
      },
      "flags": {},
      "order": 22,
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
          "link": 41,
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
        847359662531534,
        "randomize",
        24,
        10,
        "dpmpp_2m",
        "karras",
        1
      ]
    },
    {
      "id": 13,
      "type": "VAELoader",
      "pos": [
        1880,
        -520
      ],
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 4,
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
        "vae-ft-mse-840000-ema-pruned.safetensors"
      ]
    },
    {
      "id": 21,
      "type": "Zoe_DepthAnythingPreprocessor",
      "pos": [
        770,
        -300
      ],
      "size": {
        "0": 315,
        "1": 82
      },
      "flags": {},
      "order": 11,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 32,
          "label": "图像",
          "slot_index": 0
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            28,
            29
          ],
          "shape": 3,
          "label": "图像",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "Zoe_DepthAnythingPreprocessor"
      },
      "widgets_values": [
        "indoor",
        512
      ]
    },
    {
      "id": 18,
      "type": "ControlNetApply",
      "pos": [
        770,
        -140
      ],
      "size": {
        "0": 317.4000244140625,
        "1": 98
      },
      "flags": {},
      "order": 19,
      "mode": 0,
      "inputs": [
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 25,
          "label": "条件"
        },
        {
          "name": "control_net",
          "type": "CONTROL_NET",
          "link": 27,
          "label": "ControlNet",
          "slot_index": 1
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 28,
          "label": "图像",
          "slot_index": 2
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            37
          ],
          "slot_index": 0,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetApply"
      },
      "widgets_values": [
        0.3
      ]
    },
    {
      "id": 19,
      "type": "ControlNetApply",
      "pos": [
        1110,
        -140
      ],
      "size": {
        "0": 317.4000244140625,
        "1": 98
      },
      "flags": {},
      "order": 20,
      "mode": 0,
      "inputs": [
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 37,
          "label": "条件"
        },
        {
          "name": "control_net",
          "type": "CONTROL_NET",
          "link": 35,
          "label": "ControlNet"
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 39,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            38
          ],
          "slot_index": 0,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetApply"
      },
      "widgets_values": [
        0.5
      ]
    },
    {
      "id": 20,
      "type": "ControlNetApply",
      "pos": [
        1450,
        -140
      ],
      "size": {
        "0": 317.4000244140625,
        "1": 98
      },
      "flags": {},
      "order": 21,
      "mode": 0,
      "inputs": [
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 38,
          "label": "条件"
        },
        {
          "name": "control_net",
          "type": "CONTROL_NET",
          "link": 36,
          "label": "ControlNet"
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 40,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            41
          ],
          "slot_index": 0,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetApply"
      },
      "widgets_values": [
        0.5
      ]
    },
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": [
        1980,
        -620
      ],
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 23,
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
        2230,
        -570
      ],
      "size": {
        "0": 393.6202087402344,
        "1": 449.1610107421875
      },
      "flags": {},
      "order": 24,
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
      "id": 14,
      "type": "CheckpointLoaderSimple",
      "pos": [
        -300,
        -320
      ],
      "size": {
        "0": 315,
        "1": 98
      },
      "flags": {},
      "order": 5,
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
      "id": 5,
      "type": "EmptyLatentImage",
      "pos": [
        1360,
        250
      ],
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 6,
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
        800,
        1200,
        1
      ]
    },
    {
      "id": 7,
      "type": "CLIPTextEncode",
      "pos": [
        1310,
        30
      ],
      "size": {
        "0": 425.27801513671875,
        "1": 180.6060791015625
      },
      "flags": {},
      "order": 8,
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
      "id": 11,
      "type": "LoadImage",
      "pos": [
        50,
        -520
      ],
      "size": [
        220,
        314
      ],
      "flags": {},
      "order": 7,
      "mode": 0,
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            22,
            32,
            33,
            34
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
        "aimake_Example_1713001562048_49 (1) (2).jpg",
        "image"
      ]
    },
    {
      "id": 17,
      "type": "PreviewImage",
      "pos": [
        470,
        -800
      ],
      "size": {
        "0": 210,
        "1": 310
      },
      "flags": {},
      "order": 15,
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
    },
    {
      "id": 10,
      "type": "ControlNetApply",
      "pos": [
        430,
        -140
      ],
      "size": {
        "0": 317.4000244140625,
        "1": 98
      },
      "flags": {},
      "order": 14,
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
            25
          ],
          "slot_index": 0,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetApply"
      },
      "widgets_values": [
        1
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
      "order": 9,
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
        "masterpiece, best quality, highres, 1girl, bare shoulders, brown hair, long hair, bright orange dress, looking at viewer, forest, maple leaves,outdoors, wild, plants, cinematic lights, lightrays,depth of field, blurry_background, blurry_foreground, shiny luminious,"
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
    ],
    [
      25,
      10,
      0,
      18,
      0,
      "CONDITIONING"
    ],
    [
      27,
      23,
      0,
      18,
      1,
      "CONTROL_NET"
    ],
    [
      28,
      21,
      0,
      18,
      2,
      "IMAGE"
    ],
    [
      29,
      21,
      0,
      25,
      0,
      "IMAGE"
    ],
    [
      30,
      33,
      0,
      29,
      0,
      "IMAGE"
    ],
    [
      31,
      34,
      0,
      31,
      0,
      "IMAGE"
    ],
    [
      32,
      11,
      0,
      21,
      0,
      "IMAGE"
    ],
    [
      33,
      11,
      0,
      33,
      0,
      "IMAGE"
    ],
    [
      34,
      11,
      0,
      34,
      0,
      "IMAGE"
    ],
    [
      35,
      30,
      0,
      19,
      1,
      "CONTROL_NET"
    ],
    [
      36,
      32,
      0,
      20,
      1,
      "CONTROL_NET"
    ],
    [
      37,
      18,
      0,
      19,
      0,
      "CONDITIONING"
    ],
    [
      38,
      19,
      0,
      20,
      0,
      "CONDITIONING"
    ],
    [
      39,
      33,
      0,
      19,
      2,
      "IMAGE"
    ],
    [
      40,
      34,
      0,
      20,
      2,
      "IMAGE"
    ],
    [
      41,
      20,
      0,
      3,
      1,
      "CONDITIONING"
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
`})])}const d=r(l,[["render",s],["__file","6. 多重ControlNet工作流.json.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%99%84%E5%8A%A0%E7%BD%91%E7%BB%9C%E5%B7%A5%E4%BD%9C%E6%B5%81/6.%20%E5%A4%9A%E9%87%8DControlNet%E5%B7%A5%E4%BD%9C%E6%B5%81.json.html","title":"6. 多重ControlNet工作流.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 34, \\"last_link_id\\": 41, \\"nodes\\": [ { \\"id\\": 16, \\"type\\": \\"OpenposePreprocessor\\", \\"pos\\": [ 430, -340 ], \\"size\\": { \\"0\\": 315, \\"1\\": 150 }, \\"flags\\": {}, \\"order\\": 10, ...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%99%84%E5%8A%A0%E7%BD%91%E7%BB%9C%E5%B7%A5%E4%BD%9C%E6%B5%81/6.%20%E5%A4%9A%E9%87%8DControlNet%E5%B7%A5%E4%BD%9C%E6%B5%81.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 34, \\"last_link_id\\": 41, \\"nodes\\": [ { \\"id\\": 16, \\"type\\": \\"OpenposePreprocessor\\", \\"pos\\": [ 430, -340 ], \\"size\\": { \\"0\\": 315, \\"1\\": 150 }, \\"flags\\": {}, \\"order\\": 10, ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"git":{},"readingTime":{"minutes":4.97,"words":1490},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/附加网络工作流/6. 多重ControlNet工作流.json","excerpt":"<p>{<br>\\n\\"last_node_id\\": 34,<br>\\n\\"last_link_id\\": 41,<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": 16,<br>\\n\\"type\\": \\"OpenposePreprocessor\\",<br>\\n\\"pos\\": [<br>\\n430,<br>\\n-340<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 150<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 10,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 22,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n23,<br>\\n24<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"POSE_KEYPOINT\\",<br>\\n\\"type\\": \\"POSE_KEYPOINT\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"姿态关键点\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"OpenposePreprocessor\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"enable\\",<br>\\n\\"enable\\",<br>\\n\\"enable\\",<br>\\n512<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 12,<br>\\n\\"type\\": \\"ControlNetLoader\\",<br>\\n\\"pos\\": [<br>\\n430,<br>\\n-440<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 320,<br>\\n\\"1\\": 60<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 0,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONTROL_NET\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"links\\": [<br>\\n13<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"ControlNet\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"control_v11p_sd15_openpose.pth\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 31,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n1510,<br>\\n-800<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 310<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 18,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 31,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 29,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n1160,<br>\\n-800<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 310<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 17,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 30,<br>\\n\\"label\\": \\"图像\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 33,<br>\\n\\"type\\": \\"LineArtPreprocessor\\",<br>\\n\\"pos\\": [<br>\\n1110,<br>\\n-300<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 82<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 12,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 33,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n30,<br>\\n39<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LineArtPreprocessor\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"disable\\",<br>\\n512<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 34,<br>\\n\\"type\\": \\"HEDPreprocessor\\",<br>\\n\\"pos\\": [<br>\\n1450,<br>\\n-300<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 82<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 13,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 34,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n31,<br>\\n40<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"HEDPreprocessor\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"enable\\",<br>\\n512<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 30,<br>\\n\\"type\\": \\"ControlNetLoader\\",<br>\\n\\"pos\\": [<br>\\n1110,<br>\\n-440<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 58<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 1,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONTROL_NET\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"links\\": [<br>\\n35<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"ControlNet\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"control_v11p_sd15_lineart.pth\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 32,<br>\\n\\"type\\": \\"ControlNetLoader\\",<br>\\n\\"pos\\": [<br>\\n1460,<br>\\n-440<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 58<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 2,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONTROL_NET\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"links\\": [<br>\\n36<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"ControlNet\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"control_v11p_sd15_softedge.pth\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 25,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n820,<br>\\n-800<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 310<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 16,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 29,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 23,<br>\\n\\"type\\": \\"ControlNetLoader\\",<br>\\n\\"pos\\": [<br>\\n780,<br>\\n-440<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 58<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONTROL_NET\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"links\\": [<br>\\n27<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"ControlNet\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"control_v11f1p_sd15_depth.pth\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 3,<br>\\n\\"type\\": \\"KSampler\\",<br>\\n\\"pos\\": [<br>\\n1880,<br>\\n-400<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 320,<br>\\n\\"1\\": 470<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 22,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 19,<br>\\n\\"label\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 41,<br>\\n\\"label\\": \\"正面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 16,<br>\\n\\"label\\": \\"负面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 2,<br>\\n\\"label\\": \\"Latent\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n7<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"Latent\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n847359662531534,<br>\\n\\"randomize\\",<br>\\n24,<br>\\n10,<br>\\n\\"dpmpp_2m\\",<br>\\n\\"karras\\",<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 13,<br>\\n\\"type\\": \\"VAELoader\\",<br>\\n\\"pos\\": [<br>\\n1880,<br>\\n-520<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 58<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n14<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"VAE\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAELoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"vae-ft-mse-840000-ema-pruned.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 21,<br>\\n\\"type\\": \\"Zoe_DepthAnythingPreprocessor\\",<br>\\n\\"pos\\": [<br>\\n770,<br>\\n-300<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 82<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 11,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 32,<br>\\n\\"label\\": \\"图像\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n28,<br>\\n29<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"Zoe_DepthAnythingPreprocessor\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"indoor\\",<br>\\n512<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 18,<br>\\n\\"type\\": \\"ControlNetApply\\",<br>\\n\\"pos\\": [<br>\\n770,<br>\\n-140<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 317.4000244140625,<br>\\n\\"1\\": 98<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 19,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"conditioning\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 25,<br>\\n\\"label\\": \\"条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"control_net\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"link\\": 27,<br>\\n\\"label\\": \\"ControlNet\\",<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 28,<br>\\n\\"label\\": \\"图像\\",<br>\\n\\"slot_index\\": 2<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n37<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetApply\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n0.3<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 19,<br>\\n\\"type\\": \\"ControlNetApply\\",<br>\\n\\"pos\\": [<br>\\n1110,<br>\\n-140<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 317.4000244140625,<br>\\n\\"1\\": 98<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 20,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"conditioning\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 37,<br>\\n\\"label\\": \\"条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"control_net\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"link\\": 35,<br>\\n\\"label\\": \\"ControlNet\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 39,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n38<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetApply\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n0.5<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 20,<br>\\n\\"type\\": \\"ControlNetApply\\",<br>\\n\\"pos\\": [<br>\\n1450,<br>\\n-140<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 317.4000244140625,<br>\\n\\"1\\": 98<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 21,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"conditioning\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 38,<br>\\n\\"label\\": \\"条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"control_net\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"link\\": 36,<br>\\n\\"label\\": \\"ControlNet\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 40,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n41<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetApply\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n0.5<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 8,<br>\\n\\"type\\": \\"VAEDecode\\",<br>\\n\\"pos\\": [<br>\\n1980,<br>\\n-620<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 46<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 23,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 7,<br>\\n\\"label\\": \\"Latent\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 14,<br>\\n\\"label\\": \\"VAE\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n9<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 9,<br>\\n\\"type\\": \\"SaveImage\\",<br>\\n\\"pos\\": [<br>\\n2230,<br>\\n-570<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 393.6202087402344,<br>\\n\\"1\\": 449.1610107421875<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 24,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 9,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {},<br>\\n\\"widgets_values\\": [<br>\\n\\"ComfyUI\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 14,<br>\\n\\"type\\": \\"CheckpointLoaderSimple\\",<br>\\n\\"pos\\": [<br>\\n-300,<br>\\n-320<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 98<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 5,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n19<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n20,<br>\\n21<br>\\n],<br>\\n\\"slot_index\\": 1,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": null,<br>\\n\\"label\\": \\"VAE\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"awpainting_v12.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 5,<br>\\n\\"type\\": \\"EmptyLatentImage\\",<br>\\n\\"pos\\": [<br>\\n1360,<br>\\n250<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 106<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n2<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"Latent\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"EmptyLatentImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n800,<br>\\n1200,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 7,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n1310,<br>\\n30<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 425.27801513671875,<br>\\n\\"1\\": 180.6060791015625<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 8,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 20,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n16<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"(hands), text, error, cropped, (worst quality:1.2), (low quality:1.2), normal quality, (jpeg artifacts:1.3), signature, watermark, username, blurry, artist name, monochrome, sketch, censorship, censor, (copyright:1.2), extra legs, (forehead mark) (depth of field) (emotionless) (penis), embedding:EasyNegative, embedding:badhandv4, \\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 11,<br>\\n\\"type\\": \\"LoadImage\\",<br>\\n\\"pos\\": [<br>\\n50,<br>\\n-520<br>\\n],<br>\\n\\"size\\": [<br>\\n220,<br>\\n314<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 7,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n22,<br>\\n32,<br>\\n33,<br>\\n34<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"图像\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": null,<br>\\n\\"label\\": \\"遮罩\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"aimake_Example_1713001562048_49 (1) (2).jpg\\",<br>\\n\\"image\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 17,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n470,<br>\\n-800<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 310<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 15,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 24,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 10,<br>\\n\\"type\\": \\"ControlNetApply\\",<br>\\n\\"pos\\": [<br>\\n430,<br>\\n-140<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 317.4000244140625,<br>\\n\\"1\\": 98<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 14,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"conditioning\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 10,<br>\\n\\"label\\": \\"条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"control_net\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"link\\": 13,<br>\\n\\"label\\": \\"ControlNet\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 23,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n25<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetApply\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 6,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n-42,<br>\\n-147<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 422.84503173828125,<br>\\n\\"1\\": 164.31304931640625<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 9,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 21,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n10<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"masterpiece, best quality, highres, 1girl, bare shoulders, brown hair, long hair, bright orange dress, looking at viewer, forest, maple leaves,outdoors, wild, plants, cinematic lights, lightrays,depth of field, blurry_background, blurry_foreground, shiny luminious,\\"<br>\\n]<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\n2,<br>\\n5,<br>\\n0,<br>\\n3,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n7,<br>\\n3,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n9,<br>\\n8,<br>\\n0,<br>\\n9,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n10,<br>\\n6,<br>\\n0,<br>\\n10,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n13,<br>\\n12,<br>\\n0,<br>\\n10,<br>\\n1,<br>\\n\\"CONTROL_NET\\"<br>\\n],<br>\\n[<br>\\n14,<br>\\n13,<br>\\n0,<br>\\n8,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n16,<br>\\n7,<br>\\n0,<br>\\n3,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n19,<br>\\n14,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n20,<br>\\n14,<br>\\n1,<br>\\n7,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n21,<br>\\n14,<br>\\n1,<br>\\n6,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n22,<br>\\n11,<br>\\n0,<br>\\n16,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n23,<br>\\n16,<br>\\n0,<br>\\n10,<br>\\n2,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n24,<br>\\n16,<br>\\n0,<br>\\n17,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n25,<br>\\n10,<br>\\n0,<br>\\n18,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n27,<br>\\n23,<br>\\n0,<br>\\n18,<br>\\n1,<br>\\n\\"CONTROL_NET\\"<br>\\n],<br>\\n[<br>\\n28,<br>\\n21,<br>\\n0,<br>\\n18,<br>\\n2,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n29,<br>\\n21,<br>\\n0,<br>\\n25,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n30,<br>\\n33,<br>\\n0,<br>\\n29,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n31,<br>\\n34,<br>\\n0,<br>\\n31,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n32,<br>\\n11,<br>\\n0,<br>\\n21,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n33,<br>\\n11,<br>\\n0,<br>\\n33,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n34,<br>\\n11,<br>\\n0,<br>\\n34,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n35,<br>\\n30,<br>\\n0,<br>\\n19,<br>\\n1,<br>\\n\\"CONTROL_NET\\"<br>\\n],<br>\\n[<br>\\n36,<br>\\n32,<br>\\n0,<br>\\n20,<br>\\n1,<br>\\n\\"CONTROL_NET\\"<br>\\n],<br>\\n[<br>\\n37,<br>\\n18,<br>\\n0,<br>\\n19,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n38,<br>\\n19,<br>\\n0,<br>\\n20,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n39,<br>\\n33,<br>\\n0,<br>\\n19,<br>\\n2,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n40,<br>\\n34,<br>\\n0,<br>\\n20,<br>\\n2,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n41,<br>\\n20,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n]<br>\\n],<br>\\n\\"groups\\": [],<br>\\n\\"config\\": {},<br>\\n\\"extra\\": {<br>\\n\\"0246.VERSION\\": [<br>\\n0,<br>\\n0,<br>\\n4<br>\\n]<br>\\n},<br>\\n\\"version\\": 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/附加网络工作流/6. 多重ControlNet工作流.json","value":{"title":"6. 多重ControlNet工作流.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/附加网络工作流/6. 多重ControlNet工作流.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{d as comp,m as data};

import{_ as e,c as o,e as t,o as l,r as s}from"./app-CKRdBycm.js";const a={};function i(p,r){const n=s("VueFlow");return l(),o("div",null,[t(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const m=e(a,[["render",i],["__file","6. 多重ControlNet工作流.json.html.vue"]]),N=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%99%84%E5%8A%A0%E7%BD%91%E7%BB%9C%E5%B7%A5%E4%BD%9C%E6%B5%81/6.%20%E5%A4%9A%E9%87%8DControlNet%E5%B7%A5%E4%BD%9C%E6%B5%81.json","title":"","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 34, \\"last_link_id\\": 41, \\"nodes\\": [ { \\"id\\": 16, \\"type\\": \\"OpenposePreprocessor\\", \\"pos\\": [ 430, -340 ], \\"size\\": { \\"0\\": 315, \\"1\\": 150 }, \\"flags\\": {}, \\"order\\": 10, ...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%99%84%E5%8A%A0%E7%BD%91%E7%BB%9C%E5%B7%A5%E4%BD%9C%E6%B5%81/6.%20%E5%A4%9A%E9%87%8DControlNet%E5%B7%A5%E4%BD%9C%E6%B5%81.json"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 34, \\"last_link_id\\": 41, \\"nodes\\": [ { \\"id\\": 16, \\"type\\": \\"OpenposePreprocessor\\", \\"pos\\": [ 430, -340 ], \\"size\\": { \\"0\\": 315, \\"1\\": 150 }, \\"flags\\": {}, \\"order\\": 10, ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":4.97,"words":1490},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/附加网络工作流/6. 多重ControlNet工作流.json","excerpt":"<p>{\\n\\"last_node_id\\": 34,\\n\\"last_link_id\\": 41,\\n\\"nodes\\": [\\n{\\n\\"id\\": 16,\\n\\"type\\": \\"OpenposePreprocessor\\",\\n\\"pos\\": [\\n430,\\n-340\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 150\\n},\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 22,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n23,\\n24\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"POSE_KEYPOINT\\",\\n\\"type\\": \\"POSE_KEYPOINT\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"姿态关键点\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"OpenposePreprocessor\\"\\n},\\n\\"widgets_values\\": [\\n\\"enable\\",\\n\\"enable\\",\\n\\"enable\\",\\n512\\n]\\n},\\n{\\n\\"id\\": 12,\\n\\"type\\": \\"ControlNetLoader\\",\\n\\"pos\\": [\\n430,\\n-440\\n],\\n\\"size\\": {\\n\\"0\\": 320,\\n\\"1\\": 60\\n},\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONTROL_NET\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"links\\": [\\n13\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"ControlNet\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"control_v11p_sd15_openpose.pth\\"\\n]\\n},\\n{\\n\\"id\\": 31,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n1510,\\n-800\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 310\\n},\\n\\"flags\\": {},\\n\\"order\\": 18,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 31,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n}\\n},\\n{\\n\\"id\\": 29,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n1160,\\n-800\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 310\\n},\\n\\"flags\\": {},\\n\\"order\\": 17,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 30,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n}\\n},\\n{\\n\\"id\\": 33,\\n\\"type\\": \\"LineArtPreprocessor\\",\\n\\"pos\\": [\\n1110,\\n-300\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 82\\n},\\n\\"flags\\": {},\\n\\"order\\": 12,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 33,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n30,\\n39\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LineArtPreprocessor\\"\\n},\\n\\"widgets_values\\": [\\n\\"disable\\",\\n512\\n]\\n},\\n{\\n\\"id\\": 34,\\n\\"type\\": \\"HEDPreprocessor\\",\\n\\"pos\\": [\\n1450,\\n-300\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 82\\n},\\n\\"flags\\": {},\\n\\"order\\": 13,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 34,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n31,\\n40\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"HEDPreprocessor\\"\\n},\\n\\"widgets_values\\": [\\n\\"enable\\",\\n512\\n]\\n},\\n{\\n\\"id\\": 30,\\n\\"type\\": \\"ControlNetLoader\\",\\n\\"pos\\": [\\n1110,\\n-440\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONTROL_NET\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"links\\": [\\n35\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"ControlNet\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"control_v11p_sd15_lineart.pth\\"\\n]\\n},\\n{\\n\\"id\\": 32,\\n\\"type\\": \\"ControlNetLoader\\",\\n\\"pos\\": [\\n1460,\\n-440\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONTROL_NET\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"links\\": [\\n36\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"ControlNet\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"control_v11p_sd15_softedge.pth\\"\\n]\\n},\\n{\\n\\"id\\": 25,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n820,\\n-800\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 310\\n},\\n\\"flags\\": {},\\n\\"order\\": 16,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 29,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n}\\n},\\n{\\n\\"id\\": 23,\\n\\"type\\": \\"ControlNetLoader\\",\\n\\"pos\\": [\\n780,\\n-440\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONTROL_NET\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"links\\": [\\n27\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"ControlNet\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"control_v11f1p_sd15_depth.pth\\"\\n]\\n},\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": [\\n1880,\\n-400\\n],\\n\\"size\\": {\\n\\"0\\": 320,\\n\\"1\\": 470\\n},\\n\\"flags\\": {},\\n\\"order\\": 22,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 19,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 41,\\n\\"label\\": \\"正面条件\\"\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 16,\\n\\"label\\": \\"负面条件\\"\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 2,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n7\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n847359662531534,\\n\\"randomize\\",\\n24,\\n10,\\n\\"dpmpp_2m\\",\\n\\"karras\\",\\n1\\n]\\n},\\n{\\n\\"id\\": 13,\\n\\"type\\": \\"VAELoader\\",\\n\\"pos\\": [\\n1880,\\n-520\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n14\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAELoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"vae-ft-mse-840000-ema-pruned.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 21,\\n\\"type\\": \\"Zoe_DepthAnythingPreprocessor\\",\\n\\"pos\\": [\\n770,\\n-300\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 82\\n},\\n\\"flags\\": {},\\n\\"order\\": 11,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 32,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n28,\\n29\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"Zoe_DepthAnythingPreprocessor\\"\\n},\\n\\"widgets_values\\": [\\n\\"indoor\\",\\n512\\n]\\n},\\n{\\n\\"id\\": 18,\\n\\"type\\": \\"ControlNetApply\\",\\n\\"pos\\": [\\n770,\\n-140\\n],\\n\\"size\\": {\\n\\"0\\": 317.4000244140625,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 19,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"conditioning\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 25,\\n\\"label\\": \\"条件\\"\\n},\\n{\\n\\"name\\": \\"control_net\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"link\\": 27,\\n\\"label\\": \\"ControlNet\\",\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 28,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 2\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n37\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetApply\\"\\n},\\n\\"widgets_values\\": [\\n0.3\\n]\\n},\\n{\\n\\"id\\": 19,\\n\\"type\\": \\"ControlNetApply\\",\\n\\"pos\\": [\\n1110,\\n-140\\n],\\n\\"size\\": {\\n\\"0\\": 317.4000244140625,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 20,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"conditioning\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 37,\\n\\"label\\": \\"条件\\"\\n},\\n{\\n\\"name\\": \\"control_net\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"link\\": 35,\\n\\"label\\": \\"ControlNet\\"\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 39,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n38\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetApply\\"\\n},\\n\\"widgets_values\\": [\\n0.5\\n]\\n},\\n{\\n\\"id\\": 20,\\n\\"type\\": \\"ControlNetApply\\",\\n\\"pos\\": [\\n1450,\\n-140\\n],\\n\\"size\\": {\\n\\"0\\": 317.4000244140625,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 21,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"conditioning\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 38,\\n\\"label\\": \\"条件\\"\\n},\\n{\\n\\"name\\": \\"control_net\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"link\\": 36,\\n\\"label\\": \\"ControlNet\\"\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 40,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n41\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetApply\\"\\n},\\n\\"widgets_values\\": [\\n0.5\\n]\\n},\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": [\\n1980,\\n-620\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 23,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 7,\\n\\"label\\": \\"Latent\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 14,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n9\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n}\\n},\\n{\\n\\"id\\": 9,\\n\\"type\\": \\"SaveImage\\",\\n\\"pos\\": [\\n2230,\\n-570\\n],\\n\\"size\\": {\\n\\"0\\": 393.6202087402344,\\n\\"1\\": 449.1610107421875\\n},\\n\\"flags\\": {},\\n\\"order\\": 24,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 9,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\"\\n]\\n},\\n{\\n\\"id\\": 14,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": [\\n-300,\\n-320\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n19\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n20,\\n21\\n],\\n\\"slot_index\\": 1,\\n\\"label\\": \\"CLIP\\"\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": null,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"awpainting_v12.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 5,\\n\\"type\\": \\"EmptyLatentImage\\",\\n\\"pos\\": [\\n1360,\\n250\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 106\\n},\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n2\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"EmptyLatentImage\\"\\n},\\n\\"widgets_values\\": [\\n800,\\n1200,\\n1\\n]\\n},\\n{\\n\\"id\\": 7,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n1310,\\n30\\n],\\n\\"size\\": {\\n\\"0\\": 425.27801513671875,\\n\\"1\\": 180.6060791015625\\n},\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 20,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n16\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"(hands), text, error, cropped, (worst quality:1.2), (low quality:1.2), normal quality, (jpeg artifacts:1.3), signature, watermark, username, blurry, artist name, monochrome, sketch, censorship, censor, (copyright:1.2), extra legs, (forehead mark) (depth of field) (emotionless) (penis), embedding:EasyNegative, embedding:badhandv4, \\"\\n]\\n},\\n{\\n\\"id\\": 11,\\n\\"type\\": \\"LoadImage\\",\\n\\"pos\\": [\\n50,\\n-520\\n],\\n\\"size\\": [\\n220,\\n314\\n],\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n22,\\n32,\\n33,\\n34\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": null,\\n\\"label\\": \\"遮罩\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"aimake_Example_1713001562048_49 (1) (2).jpg\\",\\n\\"image\\"\\n]\\n},\\n{\\n\\"id\\": 17,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n470,\\n-800\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 310\\n},\\n\\"flags\\": {},\\n\\"order\\": 15,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 24,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n}\\n},\\n{\\n\\"id\\": 10,\\n\\"type\\": \\"ControlNetApply\\",\\n\\"pos\\": [\\n430,\\n-140\\n],\\n\\"size\\": {\\n\\"0\\": 317.4000244140625,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 14,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"conditioning\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 10,\\n\\"label\\": \\"条件\\"\\n},\\n{\\n\\"name\\": \\"control_net\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"link\\": 13,\\n\\"label\\": \\"ControlNet\\"\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 23,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n25\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetApply\\"\\n},\\n\\"widgets_values\\": [\\n1\\n]\\n},\\n{\\n\\"id\\": 6,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n-42,\\n-147\\n],\\n\\"size\\": {\\n\\"0\\": 422.84503173828125,\\n\\"1\\": 164.31304931640625\\n},\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 21,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n10\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"masterpiece, best quality, highres, 1girl, bare shoulders, brown hair, long hair, bright orange dress, looking at viewer, forest, maple leaves,outdoors, wild, plants, cinematic lights, lightrays,depth of field, blurry_background, blurry_foreground, shiny luminious,\\"\\n]\\n}\\n],\\n\\"links\\": [\\n[\\n2,\\n5,\\n0,\\n3,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n7,\\n3,\\n0,\\n8,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n9,\\n8,\\n0,\\n9,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n10,\\n6,\\n0,\\n10,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n13,\\n12,\\n0,\\n10,\\n1,\\n\\"CONTROL_NET\\"\\n],\\n[\\n14,\\n13,\\n0,\\n8,\\n1,\\n\\"VAE\\"\\n],\\n[\\n16,\\n7,\\n0,\\n3,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n19,\\n14,\\n0,\\n3,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n20,\\n14,\\n1,\\n7,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n21,\\n14,\\n1,\\n6,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n22,\\n11,\\n0,\\n16,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n23,\\n16,\\n0,\\n10,\\n2,\\n\\"IMAGE\\"\\n],\\n[\\n24,\\n16,\\n0,\\n17,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n25,\\n10,\\n0,\\n18,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n27,\\n23,\\n0,\\n18,\\n1,\\n\\"CONTROL_NET\\"\\n],\\n[\\n28,\\n21,\\n0,\\n18,\\n2,\\n\\"IMAGE\\"\\n],\\n[\\n29,\\n21,\\n0,\\n25,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n30,\\n33,\\n0,\\n29,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n31,\\n34,\\n0,\\n31,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n32,\\n11,\\n0,\\n21,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n33,\\n11,\\n0,\\n33,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n34,\\n11,\\n0,\\n34,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n35,\\n30,\\n0,\\n19,\\n1,\\n\\"CONTROL_NET\\"\\n],\\n[\\n36,\\n32,\\n0,\\n20,\\n1,\\n\\"CONTROL_NET\\"\\n],\\n[\\n37,\\n18,\\n0,\\n19,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n38,\\n19,\\n0,\\n20,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n39,\\n33,\\n0,\\n19,\\n2,\\n\\"IMAGE\\"\\n],\\n[\\n40,\\n34,\\n0,\\n20,\\n2,\\n\\"IMAGE\\"\\n],\\n[\\n41,\\n20,\\n0,\\n3,\\n1,\\n\\"CONDITIONING\\"\\n]\\n],\\n\\"groups\\": [],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"0246.VERSION\\": [\\n0,\\n0,\\n4\\n]\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true}');export{m as comp,N as data};

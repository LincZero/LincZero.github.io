import{_ as e,c as l,e as t,o,r as a}from"./app-C_O3u0sp.js";const s={};function r(i,p){const n=a("VueFlow");return o(),l("div",null,[t(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 46,
  "last_link_id": 65,
  "nodes": [
    {
      "id": 31,
      "type": "PreviewImage",
      "pos": [
        1110,
        -1000
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
        760,
        -1000
      ],
      "size": {
        "0": 210,
        "1": 310
      },
      "flags": {},
      "order": 14,
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
      "id": 34,
      "type": "HEDPreprocessor",
      "pos": [
        1050,
        -500
      ],
      "size": {
        "0": 315,
        "1": 82
      },
      "flags": {},
      "order": 10,
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
            54
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
      "id": 32,
      "type": "ControlNetLoader",
      "pos": [
        1060,
        -640
      ],
      "size": {
        "0": 315,
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
            53
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
        420,
        -1000
      ],
      "size": {
        "0": 210,
        "1": 310
      },
      "flags": {},
      "order": 13,
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
      "id": 12,
      "type": "ControlNetLoader",
      "pos": [
        30,
        -640
      ],
      "size": {
        "0": 320,
        "1": 60
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "CONTROL_NET",
          "type": "CONTROL_NET",
          "links": [
            47
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
      "id": 16,
      "type": "OpenposePreprocessor",
      "pos": [
        30,
        -540
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
            24,
            48
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
      "id": 23,
      "type": "ControlNetLoader",
      "pos": [
        380,
        -640
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
            49
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
        "control_v11f1p_sd15_depth.pth"
      ]
    },
    {
      "id": 21,
      "type": "Zoe_DepthAnythingPreprocessor",
      "pos": [
        370,
        -500
      ],
      "size": {
        "0": 315,
        "1": 82
      },
      "flags": {},
      "order": 8,
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
            29,
            50
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
      "id": 30,
      "type": "ControlNetLoader",
      "pos": [
        710,
        -640
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
            51
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
      "id": 33,
      "type": "LineArtPreprocessor",
      "pos": [
        710,
        -500
      ],
      "size": {
        "0": 315,
        "1": 82
      },
      "flags": {},
      "order": 9,
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
            52
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
      "id": 35,
      "type": "Efficient Loader",
      "pos": [
        2130,
        690
      ],
      "size": {
        "0": 400,
        "1": 462
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "lora_stack",
          "type": "LORA_STACK",
          "link": null,
          "label": "LoRA堆"
        },
        {
          "name": "cnet_stack",
          "type": "CONTROL_NET_STACK",
          "link": 55,
          "label": "ControlNet堆",
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": null,
          "shape": 3,
          "label": "模型"
        },
        {
          "name": "CONDITIONING+",
          "type": "CONDITIONING",
          "links": null,
          "shape": 3,
          "label": "正面条件"
        },
        {
          "name": "CONDITIONING-",
          "type": "CONDITIONING",
          "links": null,
          "shape": 3,
          "label": "负面条件"
        },
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": null,
          "shape": 3,
          "label": "Latent"
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": null,
          "shape": 3,
          "label": "VAE"
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": null,
          "shape": 3,
          "label": "CLIP"
        },
        {
          "name": "DEPENDENCIES",
          "type": "DEPENDENCIES",
          "links": null,
          "shape": 3,
          "label": "依赖"
        }
      ],
      "properties": {
        "Node name for S&R": "Efficient Loader"
      },
      "widgets_values": [
        "AWPainting_v1.3.safetensors",
        "Baked VAE",
        -1,
        "None",
        1,
        1,
        "CLIP_POSITIVE",
        "CLIP_NEGATIVE",
        "none",
        "comfy",
        512,
        512,
        1
      ],
      "color": "#2a363b",
      "bgcolor": "#3f5159",
      "shape": 1
    },
    {
      "id": 41,
      "type": "Control Net Stacker",
      "pos": [
        1720,
        650
      ],
      "size": {
        "0": 315,
        "1": 146
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "control_net",
          "type": "CONTROL_NET",
          "link": null,
          "label": "ControlNet"
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": null,
          "label": "图像"
        },
        {
          "name": "cnet_stack",
          "type": "CONTROL_NET_STACK",
          "link": null,
          "label": "ControlNet堆"
        }
      ],
      "outputs": [
        {
          "name": "CNET_STACK",
          "type": "CONTROL_NET_STACK",
          "links": [
            55
          ],
          "shape": 3,
          "label": "ControlNet堆"
        }
      ],
      "properties": {
        "Node name for S&R": "Control Net Stacker"
      },
      "widgets_values": [
        1,
        0,
        1
      ],
      "color": "#223322",
      "bgcolor": "#335533",
      "shape": 1
    },
    {
      "id": 17,
      "type": "PreviewImage",
      "pos": [
        70,
        -1000
      ],
      "size": {
        "0": 210,
        "1": 310
      },
      "flags": {},
      "order": 11,
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
      "id": 37,
      "type": "Control Net Stacker",
      "pos": [
        30,
        -340
      ],
      "size": {
        "0": 315,
        "1": 146
      },
      "flags": {},
      "order": 12,
      "mode": 0,
      "inputs": [
        {
          "name": "control_net",
          "type": "CONTROL_NET",
          "link": 47,
          "label": "ControlNet"
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 48,
          "label": "图像"
        },
        {
          "name": "cnet_stack",
          "type": "CONTROL_NET_STACK",
          "link": null,
          "label": "ControlNet堆"
        }
      ],
      "outputs": [
        {
          "name": "CNET_STACK",
          "type": "CONTROL_NET_STACK",
          "links": [
            62
          ],
          "shape": 3,
          "label": "ControlNet堆",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "Control Net Stacker"
      },
      "widgets_values": [
        1,
        0,
        1
      ],
      "color": "#223322",
      "bgcolor": "#335533",
      "shape": 1
    },
    {
      "id": 38,
      "type": "Control Net Stacker",
      "pos": [
        370,
        -340
      ],
      "size": {
        "0": 315,
        "1": 146
      },
      "flags": {},
      "order": 16,
      "mode": 0,
      "inputs": [
        {
          "name": "control_net",
          "type": "CONTROL_NET",
          "link": 49,
          "label": "ControlNet"
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 50,
          "label": "图像"
        },
        {
          "name": "cnet_stack",
          "type": "CONTROL_NET_STACK",
          "link": 62,
          "label": "ControlNet堆"
        }
      ],
      "outputs": [
        {
          "name": "CNET_STACK",
          "type": "CONTROL_NET_STACK",
          "links": [
            63
          ],
          "shape": 3,
          "label": "ControlNet堆",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "Control Net Stacker"
      },
      "widgets_values": [
        0.2,
        0,
        1
      ],
      "color": "#223322",
      "bgcolor": "#335533",
      "shape": 1
    },
    {
      "id": 39,
      "type": "Control Net Stacker",
      "pos": [
        710,
        -340
      ],
      "size": {
        "0": 315,
        "1": 146
      },
      "flags": {},
      "order": 17,
      "mode": 0,
      "inputs": [
        {
          "name": "control_net",
          "type": "CONTROL_NET",
          "link": 51,
          "label": "ControlNet"
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 52,
          "label": "图像"
        },
        {
          "name": "cnet_stack",
          "type": "CONTROL_NET_STACK",
          "link": 63,
          "label": "ControlNet堆"
        }
      ],
      "outputs": [
        {
          "name": "CNET_STACK",
          "type": "CONTROL_NET_STACK",
          "links": [
            64
          ],
          "shape": 3,
          "label": "ControlNet堆",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "Control Net Stacker"
      },
      "widgets_values": [
        0.5,
        0,
        1
      ],
      "color": "#223322",
      "bgcolor": "#335533",
      "shape": 1
    },
    {
      "id": 40,
      "type": "Control Net Stacker",
      "pos": [
        1050,
        -340
      ],
      "size": {
        "0": 315,
        "1": 146
      },
      "flags": {},
      "order": 18,
      "mode": 0,
      "inputs": [
        {
          "name": "control_net",
          "type": "CONTROL_NET",
          "link": 53,
          "label": "ControlNet",
          "slot_index": 0
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 54,
          "label": "图像",
          "slot_index": 1
        },
        {
          "name": "cnet_stack",
          "type": "CONTROL_NET_STACK",
          "link": 64,
          "label": "ControlNet堆"
        }
      ],
      "outputs": [
        {
          "name": "CNET_STACK",
          "type": "CONTROL_NET_STACK",
          "links": [
            65
          ],
          "shape": 3,
          "label": "ControlNet堆",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "Control Net Stacker"
      },
      "widgets_values": [
        0.5,
        0,
        1
      ],
      "color": "#223322",
      "bgcolor": "#335533",
      "shape": 1
    },
    {
      "id": 44,
      "type": "SaveImage",
      "pos": [
        2220,
        -630
      ],
      "size": {
        "0": 320,
        "1": 270
      },
      "flags": {},
      "order": 21,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 61,
          "label": "图像"
        }
      ],
      "properties": {},
      "widgets_values": [
        "ComfyUI"
      ]
    },
    {
      "id": 43,
      "type": "KSampler (Efficient)",
      "pos": [
        1860,
        -750
      ],
      "size": {
        "0": 330,
        "1": 560
      },
      "flags": {},
      "order": 20,
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
        },
        {
          "name": "optional_vae",
          "type": "VAE",
          "link": 60,
          "label": "VAE(可选)"
        },
        {
          "name": "script",
          "type": "SCRIPT",
          "link": null,
          "label": "脚本"
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": null,
          "shape": 3,
          "label": "模型"
        },
        {
          "name": "CONDITIONING+",
          "type": "CONDITIONING",
          "links": null,
          "shape": 3,
          "label": "正面条件"
        },
        {
          "name": "CONDITIONING-",
          "type": "CONDITIONING",
          "links": null,
          "shape": 3,
          "label": "负面条件"
        },
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": null,
          "shape": 3,
          "label": "Latent"
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": null,
          "shape": 3,
          "label": "VAE"
        },
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            61
          ],
          "shape": 3,
          "label": "图像",
          "slot_index": 5
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler (Efficient)"
      },
      "widgets_values": [
        248390093388796,
        null,
        20,
        10,
        "dpmpp_2m",
        "karras",
        1,
        "auto",
        "true"
      ],
      "color": "#222233",
      "bgcolor": "#333355",
      "shape": 1
    },
    {
      "id": 42,
      "type": "Efficient Loader",
      "pos": [
        1420,
        -650
      ],
      "size": {
        "0": 400,
        "1": 462.0000305175781
      },
      "flags": {},
      "order": 19,
      "mode": 0,
      "inputs": [
        {
          "name": "lora_stack",
          "type": "LORA_STACK",
          "link": null,
          "label": "LoRA堆"
        },
        {
          "name": "cnet_stack",
          "type": "CONTROL_NET_STACK",
          "link": 65,
          "label": "ControlNet堆"
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            56
          ],
          "shape": 3,
          "label": "模型",
          "slot_index": 0
        },
        {
          "name": "CONDITIONING+",
          "type": "CONDITIONING",
          "links": [
            57
          ],
          "shape": 3,
          "label": "正面条件",
          "slot_index": 1
        },
        {
          "name": "CONDITIONING-",
          "type": "CONDITIONING",
          "links": [
            58
          ],
          "shape": 3,
          "label": "负面条件",
          "slot_index": 2
        },
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            59
          ],
          "shape": 3,
          "label": "Latent",
          "slot_index": 3
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            60
          ],
          "shape": 3,
          "label": "VAE",
          "slot_index": 4
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": null,
          "shape": 3,
          "label": "CLIP"
        },
        {
          "name": "DEPENDENCIES",
          "type": "DEPENDENCIES",
          "links": null,
          "shape": 3,
          "label": "依赖"
        }
      ],
      "properties": {
        "Node name for S&R": "Efficient Loader"
      },
      "widgets_values": [
        "AWPainting_v1.3.safetensors",
        "Baked VAE",
        -2,
        "None",
        1,
        1,
        "masterpiece, best quality, highres, 1girl, bare shoulders, brown hair, long hair, (orange dress:1.2), looking at viewer, forest, maple leaves,outdoors, wild, plants, cinematic lights, lightrays,depth of field, blurry_background, blurry_foreground, shiny luminious,",
        "(hands), text, error, cropped, (worst quality:1.2), (low quality:1.2), normal quality, (jpeg artifacts:1.3), signature, watermark, username, blurry, artist name, monochrome, sketch, censorship, censor, (copyright:1.2), extra legs, (forehead mark) (depth of field) (emotionless) (penis), embedding:EasyNegative, embedding:badhandv4, ",
        "none",
        "comfy++",
        768,
        1152,
        1
      ],
      "color": "#443322",
      "bgcolor": "#665533",
      "shape": 1
    },
    {
      "id": 11,
      "type": "LoadImage",
      "pos": [
        -250,
        -800
      ],
      "size": [
        220,
        314
      ],
      "flags": {},
      "order": 5,
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
        "aimake_Example_1713001562048_49 (1) (3).jpg",
        "image"
      ]
    }
  ],
  "links": [
    [
      22,
      11,
      0,
      16,
      0,
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
      47,
      12,
      0,
      37,
      0,
      "CONTROL_NET"
    ],
    [
      48,
      16,
      0,
      37,
      1,
      "IMAGE"
    ],
    [
      49,
      23,
      0,
      38,
      0,
      "CONTROL_NET"
    ],
    [
      50,
      21,
      0,
      38,
      1,
      "IMAGE"
    ],
    [
      51,
      30,
      0,
      39,
      0,
      "CONTROL_NET"
    ],
    [
      52,
      33,
      0,
      39,
      1,
      "IMAGE"
    ],
    [
      53,
      32,
      0,
      40,
      0,
      "CONTROL_NET"
    ],
    [
      54,
      34,
      0,
      40,
      1,
      "IMAGE"
    ],
    [
      55,
      41,
      0,
      35,
      1,
      "CONTROL_NET_STACK"
    ],
    [
      56,
      42,
      0,
      43,
      0,
      "MODEL"
    ],
    [
      57,
      42,
      1,
      43,
      1,
      "CONDITIONING"
    ],
    [
      58,
      42,
      2,
      43,
      2,
      "CONDITIONING"
    ],
    [
      59,
      42,
      3,
      43,
      3,
      "LATENT"
    ],
    [
      60,
      42,
      4,
      43,
      4,
      "VAE"
    ],
    [
      61,
      43,
      5,
      44,
      0,
      "IMAGE"
    ],
    [
      62,
      37,
      0,
      38,
      2,
      "CONTROL_NET_STACK"
    ],
    [
      63,
      38,
      0,
      39,
      2,
      "CONTROL_NET_STACK"
    ],
    [
      64,
      39,
      0,
      40,
      2,
      "CONTROL_NET_STACK"
    ],
    [
      65,
      40,
      0,
      42,
      1,
      "CONTROL_NET_STACK"
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
`})])}const d=e(s,[["render",r],["__file","7. 多重ControlNet工作流（效率节点版本）.json.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%99%84%E5%8A%A0%E7%BD%91%E7%BB%9C%E5%B7%A5%E4%BD%9C%E6%B5%81/7.%20%E5%A4%9A%E9%87%8DControlNet%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%88%E6%95%88%E7%8E%87%E8%8A%82%E7%82%B9%E7%89%88%E6%9C%AC%EF%BC%89.json","title":"","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 46, \\"last_link_id\\": 65, \\"nodes\\": [ { \\"id\\": 31, \\"type\\": \\"PreviewImage\\", \\"pos\\": [ 1110, -1000 ], \\"size\\": { \\"0\\": 210, \\"1\\": 310 }, \\"flags\\": {}, \\"order\\": 15, \\"mode\\"...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%99%84%E5%8A%A0%E7%BD%91%E7%BB%9C%E5%B7%A5%E4%BD%9C%E6%B5%81/7.%20%E5%A4%9A%E9%87%8DControlNet%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%88%E6%95%88%E7%8E%87%E8%8A%82%E7%82%B9%E7%89%88%E6%9C%AC%EF%BC%89.json"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 46, \\"last_link_id\\": 65, \\"nodes\\": [ { \\"id\\": 31, \\"type\\": \\"PreviewImage\\", \\"pos\\": [ 1110, -1000 ], \\"size\\": { \\"0\\": 210, \\"1\\": 310 }, \\"flags\\": {}, \\"order\\": 15, \\"mode\\"..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":5.73,"words":1719},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/附加网络工作流/7. 多重ControlNet工作流（效率节点版本）.json","excerpt":"<p>{\\n\\"last_node_id\\": 46,\\n\\"last_link_id\\": 65,\\n\\"nodes\\": [\\n{\\n\\"id\\": 31,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n1110,\\n-1000\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 310\\n},\\n\\"flags\\": {},\\n\\"order\\": 15,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 31,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n}\\n},\\n{\\n\\"id\\": 29,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n760,\\n-1000\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 310\\n},\\n\\"flags\\": {},\\n\\"order\\": 14,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 30,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n}\\n},\\n{\\n\\"id\\": 34,\\n\\"type\\": \\"HEDPreprocessor\\",\\n\\"pos\\": [\\n1050,\\n-500\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 82\\n},\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 34,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n31,\\n54\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"HEDPreprocessor\\"\\n},\\n\\"widgets_values\\": [\\n\\"enable\\",\\n512\\n]\\n},\\n{\\n\\"id\\": 32,\\n\\"type\\": \\"ControlNetLoader\\",\\n\\"pos\\": [\\n1060,\\n-640\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONTROL_NET\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"links\\": [\\n53\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"ControlNet\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"control_v11p_sd15_softedge.pth\\"\\n]\\n},\\n{\\n\\"id\\": 25,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n420,\\n-1000\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 310\\n},\\n\\"flags\\": {},\\n\\"order\\": 13,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 29,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n}\\n},\\n{\\n\\"id\\": 12,\\n\\"type\\": \\"ControlNetLoader\\",\\n\\"pos\\": [\\n30,\\n-640\\n],\\n\\"size\\": {\\n\\"0\\": 320,\\n\\"1\\": 60\\n},\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONTROL_NET\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"links\\": [\\n47\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"ControlNet\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"control_v11p_sd15_openpose.pth\\"\\n]\\n},\\n{\\n\\"id\\": 16,\\n\\"type\\": \\"OpenposePreprocessor\\",\\n\\"pos\\": [\\n30,\\n-540\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 150\\n},\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 22,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n24,\\n48\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"POSE_KEYPOINT\\",\\n\\"type\\": \\"POSE_KEYPOINT\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"姿态关键点\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"OpenposePreprocessor\\"\\n},\\n\\"widgets_values\\": [\\n\\"enable\\",\\n\\"enable\\",\\n\\"enable\\",\\n512\\n]\\n},\\n{\\n\\"id\\": 23,\\n\\"type\\": \\"ControlNetLoader\\",\\n\\"pos\\": [\\n380,\\n-640\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONTROL_NET\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"links\\": [\\n49\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"ControlNet\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"control_v11f1p_sd15_depth.pth\\"\\n]\\n},\\n{\\n\\"id\\": 21,\\n\\"type\\": \\"Zoe_DepthAnythingPreprocessor\\",\\n\\"pos\\": [\\n370,\\n-500\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 82\\n},\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 32,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n29,\\n50\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"Zoe_DepthAnythingPreprocessor\\"\\n},\\n\\"widgets_values\\": [\\n\\"indoor\\",\\n512\\n]\\n},\\n{\\n\\"id\\": 30,\\n\\"type\\": \\"ControlNetLoader\\",\\n\\"pos\\": [\\n710,\\n-640\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONTROL_NET\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"links\\": [\\n51\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"ControlNet\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"control_v11p_sd15_lineart.pth\\"\\n]\\n},\\n{\\n\\"id\\": 33,\\n\\"type\\": \\"LineArtPreprocessor\\",\\n\\"pos\\": [\\n710,\\n-500\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 82\\n},\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 33,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n30,\\n52\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LineArtPreprocessor\\"\\n},\\n\\"widgets_values\\": [\\n\\"disable\\",\\n512\\n]\\n},\\n{\\n\\"id\\": 35,\\n\\"type\\": \\"Efficient Loader\\",\\n\\"pos\\": [\\n2130,\\n690\\n],\\n\\"size\\": {\\n\\"0\\": 400,\\n\\"1\\": 462\\n},\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"lora_stack\\",\\n\\"type\\": \\"LORA_STACK\\",\\n\\"link\\": null,\\n\\"label\\": \\"LoRA堆\\"\\n},\\n{\\n\\"name\\": \\"cnet_stack\\",\\n\\"type\\": \\"CONTROL_NET_STACK\\",\\n\\"link\\": 55,\\n\\"label\\": \\"ControlNet堆\\",\\n\\"slot_index\\": 1\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"CONDITIONING+\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"正面条件\\"\\n},\\n{\\n\\"name\\": \\"CONDITIONING-\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"负面条件\\"\\n},\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"Latent\\"\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"VAE\\"\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"CLIP\\"\\n},\\n{\\n\\"name\\": \\"DEPENDENCIES\\",\\n\\"type\\": \\"DEPENDENCIES\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"依赖\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"Efficient Loader\\"\\n},\\n\\"widgets_values\\": [\\n\\"AWPainting_v1.3.safetensors\\",\\n\\"Baked VAE\\",\\n-1,\\n\\"None\\",\\n1,\\n1,\\n\\"CLIP_POSITIVE\\",\\n\\"CLIP_NEGATIVE\\",\\n\\"none\\",\\n\\"comfy\\",\\n512,\\n512,\\n1\\n],\\n\\"color\\": \\"#2a363b\\",\\n\\"bgcolor\\": \\"#3f5159\\",\\n\\"shape\\": 1\\n},\\n{\\n\\"id\\": 41,\\n\\"type\\": \\"Control Net Stacker\\",\\n\\"pos\\": [\\n1720,\\n650\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 146\\n},\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"control_net\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"link\\": null,\\n\\"label\\": \\"ControlNet\\"\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": null,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"cnet_stack\\",\\n\\"type\\": \\"CONTROL_NET_STACK\\",\\n\\"link\\": null,\\n\\"label\\": \\"ControlNet堆\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CNET_STACK\\",\\n\\"type\\": \\"CONTROL_NET_STACK\\",\\n\\"links\\": [\\n55\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"ControlNet堆\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"Control Net Stacker\\"\\n},\\n\\"widgets_values\\": [\\n1,\\n0,\\n1\\n],\\n\\"color\\": \\"#223322\\",\\n\\"bgcolor\\": \\"#335533\\",\\n\\"shape\\": 1\\n},\\n{\\n\\"id\\": 17,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n70,\\n-1000\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 310\\n},\\n\\"flags\\": {},\\n\\"order\\": 11,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 24,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n}\\n},\\n{\\n\\"id\\": 37,\\n\\"type\\": \\"Control Net Stacker\\",\\n\\"pos\\": [\\n30,\\n-340\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 146\\n},\\n\\"flags\\": {},\\n\\"order\\": 12,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"control_net\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"link\\": 47,\\n\\"label\\": \\"ControlNet\\"\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 48,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"cnet_stack\\",\\n\\"type\\": \\"CONTROL_NET_STACK\\",\\n\\"link\\": null,\\n\\"label\\": \\"ControlNet堆\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CNET_STACK\\",\\n\\"type\\": \\"CONTROL_NET_STACK\\",\\n\\"links\\": [\\n62\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"ControlNet堆\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"Control Net Stacker\\"\\n},\\n\\"widgets_values\\": [\\n1,\\n0,\\n1\\n],\\n\\"color\\": \\"#223322\\",\\n\\"bgcolor\\": \\"#335533\\",\\n\\"shape\\": 1\\n},\\n{\\n\\"id\\": 38,\\n\\"type\\": \\"Control Net Stacker\\",\\n\\"pos\\": [\\n370,\\n-340\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 146\\n},\\n\\"flags\\": {},\\n\\"order\\": 16,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"control_net\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"link\\": 49,\\n\\"label\\": \\"ControlNet\\"\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 50,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"cnet_stack\\",\\n\\"type\\": \\"CONTROL_NET_STACK\\",\\n\\"link\\": 62,\\n\\"label\\": \\"ControlNet堆\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CNET_STACK\\",\\n\\"type\\": \\"CONTROL_NET_STACK\\",\\n\\"links\\": [\\n63\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"ControlNet堆\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"Control Net Stacker\\"\\n},\\n\\"widgets_values\\": [\\n0.2,\\n0,\\n1\\n],\\n\\"color\\": \\"#223322\\",\\n\\"bgcolor\\": \\"#335533\\",\\n\\"shape\\": 1\\n},\\n{\\n\\"id\\": 39,\\n\\"type\\": \\"Control Net Stacker\\",\\n\\"pos\\": [\\n710,\\n-340\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 146\\n},\\n\\"flags\\": {},\\n\\"order\\": 17,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"control_net\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"link\\": 51,\\n\\"label\\": \\"ControlNet\\"\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 52,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"cnet_stack\\",\\n\\"type\\": \\"CONTROL_NET_STACK\\",\\n\\"link\\": 63,\\n\\"label\\": \\"ControlNet堆\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CNET_STACK\\",\\n\\"type\\": \\"CONTROL_NET_STACK\\",\\n\\"links\\": [\\n64\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"ControlNet堆\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"Control Net Stacker\\"\\n},\\n\\"widgets_values\\": [\\n0.5,\\n0,\\n1\\n],\\n\\"color\\": \\"#223322\\",\\n\\"bgcolor\\": \\"#335533\\",\\n\\"shape\\": 1\\n},\\n{\\n\\"id\\": 40,\\n\\"type\\": \\"Control Net Stacker\\",\\n\\"pos\\": [\\n1050,\\n-340\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 146\\n},\\n\\"flags\\": {},\\n\\"order\\": 18,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"control_net\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"link\\": 53,\\n\\"label\\": \\"ControlNet\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 54,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"cnet_stack\\",\\n\\"type\\": \\"CONTROL_NET_STACK\\",\\n\\"link\\": 64,\\n\\"label\\": \\"ControlNet堆\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CNET_STACK\\",\\n\\"type\\": \\"CONTROL_NET_STACK\\",\\n\\"links\\": [\\n65\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"ControlNet堆\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"Control Net Stacker\\"\\n},\\n\\"widgets_values\\": [\\n0.5,\\n0,\\n1\\n],\\n\\"color\\": \\"#223322\\",\\n\\"bgcolor\\": \\"#335533\\",\\n\\"shape\\": 1\\n},\\n{\\n\\"id\\": 44,\\n\\"type\\": \\"SaveImage\\",\\n\\"pos\\": [\\n2220,\\n-630\\n],\\n\\"size\\": {\\n\\"0\\": 320,\\n\\"1\\": 270\\n},\\n\\"flags\\": {},\\n\\"order\\": 21,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 61,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\"\\n]\\n},\\n{\\n\\"id\\": 43,\\n\\"type\\": \\"KSampler (Efficient)\\",\\n\\"pos\\": [\\n1860,\\n-750\\n],\\n\\"size\\": {\\n\\"0\\": 330,\\n\\"1\\": 560\\n},\\n\\"flags\\": {},\\n\\"order\\": 20,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 56,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 57,\\n\\"label\\": \\"正面条件\\"\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 58,\\n\\"label\\": \\"负面条件\\"\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 59,\\n\\"label\\": \\"Latent\\"\\n},\\n{\\n\\"name\\": \\"optional_vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 60,\\n\\"label\\": \\"VAE(可选)\\"\\n},\\n{\\n\\"name\\": \\"script\\",\\n\\"type\\": \\"SCRIPT\\",\\n\\"link\\": null,\\n\\"label\\": \\"脚本\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"CONDITIONING+\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"正面条件\\"\\n},\\n{\\n\\"name\\": \\"CONDITIONING-\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"负面条件\\"\\n},\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"Latent\\"\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"VAE\\"\\n},\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n61\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 5\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler (Efficient)\\"\\n},\\n\\"widgets_values\\": [\\n248390093388796,\\nnull,\\n20,\\n10,\\n\\"dpmpp_2m\\",\\n\\"karras\\",\\n1,\\n\\"auto\\",\\n\\"true\\"\\n],\\n\\"color\\": \\"#222233\\",\\n\\"bgcolor\\": \\"#333355\\",\\n\\"shape\\": 1\\n},\\n{\\n\\"id\\": 42,\\n\\"type\\": \\"Efficient Loader\\",\\n\\"pos\\": [\\n1420,\\n-650\\n],\\n\\"size\\": {\\n\\"0\\": 400,\\n\\"1\\": 462.0000305175781\\n},\\n\\"flags\\": {},\\n\\"order\\": 19,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"lora_stack\\",\\n\\"type\\": \\"LORA_STACK\\",\\n\\"link\\": null,\\n\\"label\\": \\"LoRA堆\\"\\n},\\n{\\n\\"name\\": \\"cnet_stack\\",\\n\\"type\\": \\"CONTROL_NET_STACK\\",\\n\\"link\\": 65,\\n\\"label\\": \\"ControlNet堆\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n56\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"模型\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"CONDITIONING+\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n57\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"正面条件\\",\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"CONDITIONING-\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n58\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"负面条件\\",\\n\\"slot_index\\": 2\\n},\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n59\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"Latent\\",\\n\\"slot_index\\": 3\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n60\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"VAE\\",\\n\\"slot_index\\": 4\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"CLIP\\"\\n},\\n{\\n\\"name\\": \\"DEPENDENCIES\\",\\n\\"type\\": \\"DEPENDENCIES\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"依赖\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"Efficient Loader\\"\\n},\\n\\"widgets_values\\": [\\n\\"AWPainting_v1.3.safetensors\\",\\n\\"Baked VAE\\",\\n-2,\\n\\"None\\",\\n1,\\n1,\\n\\"masterpiece, best quality, highres, 1girl, bare shoulders, brown hair, long hair, (orange dress:1.2), looking at viewer, forest, maple leaves,outdoors, wild, plants, cinematic lights, lightrays,depth of field, blurry_background, blurry_foreground, shiny luminious,\\",\\n\\"(hands), text, error, cropped, (worst quality:1.2), (low quality:1.2), normal quality, (jpeg artifacts:1.3), signature, watermark, username, blurry, artist name, monochrome, sketch, censorship, censor, (copyright:1.2), extra legs, (forehead mark) (depth of field) (emotionless) (penis), embedding:EasyNegative, embedding:badhandv4, \\",\\n\\"none\\",\\n\\"comfy++\\",\\n768,\\n1152,\\n1\\n],\\n\\"color\\": \\"#443322\\",\\n\\"bgcolor\\": \\"#665533\\",\\n\\"shape\\": 1\\n},\\n{\\n\\"id\\": 11,\\n\\"type\\": \\"LoadImage\\",\\n\\"pos\\": [\\n-250,\\n-800\\n],\\n\\"size\\": [\\n220,\\n314\\n],\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n22,\\n32,\\n33,\\n34\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": null,\\n\\"label\\": \\"遮罩\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"aimake_Example_1713001562048_49 (1) (3).jpg\\",\\n\\"image\\"\\n]\\n}\\n],\\n\\"links\\": [\\n[\\n22,\\n11,\\n0,\\n16,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n24,\\n16,\\n0,\\n17,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n29,\\n21,\\n0,\\n25,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n30,\\n33,\\n0,\\n29,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n31,\\n34,\\n0,\\n31,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n32,\\n11,\\n0,\\n21,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n33,\\n11,\\n0,\\n33,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n34,\\n11,\\n0,\\n34,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n47,\\n12,\\n0,\\n37,\\n0,\\n\\"CONTROL_NET\\"\\n],\\n[\\n48,\\n16,\\n0,\\n37,\\n1,\\n\\"IMAGE\\"\\n],\\n[\\n49,\\n23,\\n0,\\n38,\\n0,\\n\\"CONTROL_NET\\"\\n],\\n[\\n50,\\n21,\\n0,\\n38,\\n1,\\n\\"IMAGE\\"\\n],\\n[\\n51,\\n30,\\n0,\\n39,\\n0,\\n\\"CONTROL_NET\\"\\n],\\n[\\n52,\\n33,\\n0,\\n39,\\n1,\\n\\"IMAGE\\"\\n],\\n[\\n53,\\n32,\\n0,\\n40,\\n0,\\n\\"CONTROL_NET\\"\\n],\\n[\\n54,\\n34,\\n0,\\n40,\\n1,\\n\\"IMAGE\\"\\n],\\n[\\n55,\\n41,\\n0,\\n35,\\n1,\\n\\"CONTROL_NET_STACK\\"\\n],\\n[\\n56,\\n42,\\n0,\\n43,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n57,\\n42,\\n1,\\n43,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n58,\\n42,\\n2,\\n43,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n59,\\n42,\\n3,\\n43,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n60,\\n42,\\n4,\\n43,\\n4,\\n\\"VAE\\"\\n],\\n[\\n61,\\n43,\\n5,\\n44,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n62,\\n37,\\n0,\\n38,\\n2,\\n\\"CONTROL_NET_STACK\\"\\n],\\n[\\n63,\\n38,\\n0,\\n39,\\n2,\\n\\"CONTROL_NET_STACK\\"\\n],\\n[\\n64,\\n39,\\n0,\\n40,\\n2,\\n\\"CONTROL_NET_STACK\\"\\n],\\n[\\n65,\\n40,\\n0,\\n42,\\n1,\\n\\"CONTROL_NET_STACK\\"\\n]\\n],\\n\\"groups\\": [],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"0246.VERSION\\": [\\n0,\\n0,\\n4\\n]\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true}');export{d as comp,m as data};

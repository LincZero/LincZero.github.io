import{_ as r,e,h as b,r as l,o as t}from"./app-2ewKu9R2.js";const o={};function a(s,i){const n=l("VueFlow");return t(),e("div",null,[b(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const N=r(o,[["render",a],["__file","7. 多重ControlNet工作流（效率节点版本）.json.html.vue"]]),d=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%99%84%E5%8A%A0%E7%BD%91%E7%BB%9C%E5%B7%A5%E4%BD%9C%E6%B5%81/7.%20%E5%A4%9A%E9%87%8DControlNet%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%88%E6%95%88%E7%8E%87%E8%8A%82%E7%82%B9%E7%89%88%E6%9C%AC%EF%BC%89.json.html","title":"7. 多重ControlNet工作流（效率节点版本）.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 46, \\"last_link_id\\": 65, \\"nodes\\": [ { \\"id\\": 31, \\"type\\": \\"PreviewImage\\", \\"pos\\": [ 1110, -1000 ], \\"size\\": { \\"0\\": 210, \\"1\\": 310 }, \\"flags\\": {}, \\"order\\": 15, \\"mode\\"...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%99%84%E5%8A%A0%E7%BD%91%E7%BB%9C%E5%B7%A5%E4%BD%9C%E6%B5%81/7.%20%E5%A4%9A%E9%87%8DControlNet%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%88%E6%95%88%E7%8E%87%E8%8A%82%E7%82%B9%E7%89%88%E6%9C%AC%EF%BC%89.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 46, \\"last_link_id\\": 65, \\"nodes\\": [ { \\"id\\": 31, \\"type\\": \\"PreviewImage\\", \\"pos\\": [ 1110, -1000 ], \\"size\\": { \\"0\\": 210, \\"1\\": 310 }, \\"flags\\": {}, \\"order\\": 15, \\"mode\\"..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"git":{},"readingTime":{"minutes":5.73,"words":1719},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/附加网络工作流/7. 多重ControlNet工作流（效率节点版本）.json","excerpt":"<p>{<br>\\n\\"last_node_id\\": 46,<br>\\n\\"last_link_id\\": 65,<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": 31,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n1110,<br>\\n-1000<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 310<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 15,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 31,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 29,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n760,<br>\\n-1000<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 310<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 14,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 30,<br>\\n\\"label\\": \\"图像\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 34,<br>\\n\\"type\\": \\"HEDPreprocessor\\",<br>\\n\\"pos\\": [<br>\\n1050,<br>\\n-500<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 82<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 10,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 34,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n31,<br>\\n54<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"HEDPreprocessor\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"enable\\",<br>\\n512<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 32,<br>\\n\\"type\\": \\"ControlNetLoader\\",<br>\\n\\"pos\\": [<br>\\n1060,<br>\\n-640<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 58<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 0,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONTROL_NET\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"links\\": [<br>\\n53<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"ControlNet\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"control_v11p_sd15_softedge.pth\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 25,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n420,<br>\\n-1000<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 310<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 13,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 29,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 12,<br>\\n\\"type\\": \\"ControlNetLoader\\",<br>\\n\\"pos\\": [<br>\\n30,<br>\\n-640<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 320,<br>\\n\\"1\\": 60<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 1,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONTROL_NET\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"links\\": [<br>\\n47<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"ControlNet\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"control_v11p_sd15_openpose.pth\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 16,<br>\\n\\"type\\": \\"OpenposePreprocessor\\",<br>\\n\\"pos\\": [<br>\\n30,<br>\\n-540<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 150<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 7,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 22,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n24,<br>\\n48<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"POSE_KEYPOINT\\",<br>\\n\\"type\\": \\"POSE_KEYPOINT\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"姿态关键点\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"OpenposePreprocessor\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"enable\\",<br>\\n\\"enable\\",<br>\\n\\"enable\\",<br>\\n512<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 23,<br>\\n\\"type\\": \\"ControlNetLoader\\",<br>\\n\\"pos\\": [<br>\\n380,<br>\\n-640<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 58<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 2,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONTROL_NET\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"links\\": [<br>\\n49<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"ControlNet\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"control_v11f1p_sd15_depth.pth\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 21,<br>\\n\\"type\\": \\"Zoe_DepthAnythingPreprocessor\\",<br>\\n\\"pos\\": [<br>\\n370,<br>\\n-500<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 82<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 8,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 32,<br>\\n\\"label\\": \\"图像\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n29,<br>\\n50<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"Zoe_DepthAnythingPreprocessor\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"indoor\\",<br>\\n512<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 30,<br>\\n\\"type\\": \\"ControlNetLoader\\",<br>\\n\\"pos\\": [<br>\\n710,<br>\\n-640<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 58<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONTROL_NET\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"links\\": [<br>\\n51<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"ControlNet\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"control_v11p_sd15_lineart.pth\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 33,<br>\\n\\"type\\": \\"LineArtPreprocessor\\",<br>\\n\\"pos\\": [<br>\\n710,<br>\\n-500<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 82<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 9,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 33,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n30,<br>\\n52<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LineArtPreprocessor\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"disable\\",<br>\\n512<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 35,<br>\\n\\"type\\": \\"Efficient Loader\\",<br>\\n\\"pos\\": [<br>\\n2130,<br>\\n690<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 400,<br>\\n\\"1\\": 462<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"lora_stack\\",<br>\\n\\"type\\": \\"LORA_STACK\\",<br>\\n\\"link\\": null,<br>\\n\\"label\\": \\"LoRA堆\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"cnet_stack\\",<br>\\n\\"type\\": \\"CONTROL_NET_STACK\\",<br>\\n\\"link\\": 55,<br>\\n\\"label\\": \\"ControlNet堆\\",<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING+\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"正面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING-\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"负面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"Latent\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"VAE\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"DEPENDENCIES\\",<br>\\n\\"type\\": \\"DEPENDENCIES\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"依赖\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"Efficient Loader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"AWPainting_v1.3.safetensors\\",<br>\\n\\"Baked VAE\\",<br>\\n-1,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n\\"CLIP_POSITIVE\\",<br>\\n\\"CLIP_NEGATIVE\\",<br>\\n\\"none\\",<br>\\n\\"comfy\\",<br>\\n512,<br>\\n512,<br>\\n1<br>\\n],<br>\\n\\"color\\": \\"#2a363b\\",<br>\\n\\"bgcolor\\": \\"#3f5159\\",<br>\\n\\"shape\\": 1<br>\\n},<br>\\n{<br>\\n\\"id\\": 41,<br>\\n\\"type\\": \\"Control Net Stacker\\",<br>\\n\\"pos\\": [<br>\\n1720,<br>\\n650<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 146<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"control_net\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"link\\": null,<br>\\n\\"label\\": \\"ControlNet\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": null,<br>\\n\\"label\\": \\"图像\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"cnet_stack\\",<br>\\n\\"type\\": \\"CONTROL_NET_STACK\\",<br>\\n\\"link\\": null,<br>\\n\\"label\\": \\"ControlNet堆\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CNET_STACK\\",<br>\\n\\"type\\": \\"CONTROL_NET_STACK\\",<br>\\n\\"links\\": [<br>\\n55<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"ControlNet堆\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"Control Net Stacker\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n1,<br>\\n0,<br>\\n1<br>\\n],<br>\\n\\"color\\": \\"#223322\\",<br>\\n\\"bgcolor\\": \\"#335533\\",<br>\\n\\"shape\\": 1<br>\\n},<br>\\n{<br>\\n\\"id\\": 17,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n70,<br>\\n-1000<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 310<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 11,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 24,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 37,<br>\\n\\"type\\": \\"Control Net Stacker\\",<br>\\n\\"pos\\": [<br>\\n30,<br>\\n-340<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 146<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 12,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"control_net\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"link\\": 47,<br>\\n\\"label\\": \\"ControlNet\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 48,<br>\\n\\"label\\": \\"图像\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"cnet_stack\\",<br>\\n\\"type\\": \\"CONTROL_NET_STACK\\",<br>\\n\\"link\\": null,<br>\\n\\"label\\": \\"ControlNet堆\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CNET_STACK\\",<br>\\n\\"type\\": \\"CONTROL_NET_STACK\\",<br>\\n\\"links\\": [<br>\\n62<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"ControlNet堆\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"Control Net Stacker\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n1,<br>\\n0,<br>\\n1<br>\\n],<br>\\n\\"color\\": \\"#223322\\",<br>\\n\\"bgcolor\\": \\"#335533\\",<br>\\n\\"shape\\": 1<br>\\n},<br>\\n{<br>\\n\\"id\\": 38,<br>\\n\\"type\\": \\"Control Net Stacker\\",<br>\\n\\"pos\\": [<br>\\n370,<br>\\n-340<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 146<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 16,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"control_net\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"link\\": 49,<br>\\n\\"label\\": \\"ControlNet\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 50,<br>\\n\\"label\\": \\"图像\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"cnet_stack\\",<br>\\n\\"type\\": \\"CONTROL_NET_STACK\\",<br>\\n\\"link\\": 62,<br>\\n\\"label\\": \\"ControlNet堆\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CNET_STACK\\",<br>\\n\\"type\\": \\"CONTROL_NET_STACK\\",<br>\\n\\"links\\": [<br>\\n63<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"ControlNet堆\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"Control Net Stacker\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n0.2,<br>\\n0,<br>\\n1<br>\\n],<br>\\n\\"color\\": \\"#223322\\",<br>\\n\\"bgcolor\\": \\"#335533\\",<br>\\n\\"shape\\": 1<br>\\n},<br>\\n{<br>\\n\\"id\\": 39,<br>\\n\\"type\\": \\"Control Net Stacker\\",<br>\\n\\"pos\\": [<br>\\n710,<br>\\n-340<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 146<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 17,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"control_net\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"link\\": 51,<br>\\n\\"label\\": \\"ControlNet\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 52,<br>\\n\\"label\\": \\"图像\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"cnet_stack\\",<br>\\n\\"type\\": \\"CONTROL_NET_STACK\\",<br>\\n\\"link\\": 63,<br>\\n\\"label\\": \\"ControlNet堆\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CNET_STACK\\",<br>\\n\\"type\\": \\"CONTROL_NET_STACK\\",<br>\\n\\"links\\": [<br>\\n64<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"ControlNet堆\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"Control Net Stacker\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n0.5,<br>\\n0,<br>\\n1<br>\\n],<br>\\n\\"color\\": \\"#223322\\",<br>\\n\\"bgcolor\\": \\"#335533\\",<br>\\n\\"shape\\": 1<br>\\n},<br>\\n{<br>\\n\\"id\\": 40,<br>\\n\\"type\\": \\"Control Net Stacker\\",<br>\\n\\"pos\\": [<br>\\n1050,<br>\\n-340<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 146<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 18,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"control_net\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"link\\": 53,<br>\\n\\"label\\": \\"ControlNet\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 54,<br>\\n\\"label\\": \\"图像\\",<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"cnet_stack\\",<br>\\n\\"type\\": \\"CONTROL_NET_STACK\\",<br>\\n\\"link\\": 64,<br>\\n\\"label\\": \\"ControlNet堆\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CNET_STACK\\",<br>\\n\\"type\\": \\"CONTROL_NET_STACK\\",<br>\\n\\"links\\": [<br>\\n65<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"ControlNet堆\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"Control Net Stacker\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n0.5,<br>\\n0,<br>\\n1<br>\\n],<br>\\n\\"color\\": \\"#223322\\",<br>\\n\\"bgcolor\\": \\"#335533\\",<br>\\n\\"shape\\": 1<br>\\n},<br>\\n{<br>\\n\\"id\\": 44,<br>\\n\\"type\\": \\"SaveImage\\",<br>\\n\\"pos\\": [<br>\\n2220,<br>\\n-630<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 320,<br>\\n\\"1\\": 270<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 21,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 61,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {},<br>\\n\\"widgets_values\\": [<br>\\n\\"ComfyUI\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 43,<br>\\n\\"type\\": \\"KSampler (Efficient)\\",<br>\\n\\"pos\\": [<br>\\n1860,<br>\\n-750<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 330,<br>\\n\\"1\\": 560<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 20,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 56,<br>\\n\\"label\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 57,<br>\\n\\"label\\": \\"正面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 58,<br>\\n\\"label\\": \\"负面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 59,<br>\\n\\"label\\": \\"Latent\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"optional_vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 60,<br>\\n\\"label\\": \\"VAE(可选)\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"script\\",<br>\\n\\"type\\": \\"SCRIPT\\",<br>\\n\\"link\\": null,<br>\\n\\"label\\": \\"脚本\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING+\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"正面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING-\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"负面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"Latent\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"VAE\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n61<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\",<br>\\n\\"slot_index\\": 5<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler (Efficient)\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n248390093388796,<br>\\nnull,<br>\\n20,<br>\\n10,<br>\\n\\"dpmpp_2m\\",<br>\\n\\"karras\\",<br>\\n1,<br>\\n\\"auto\\",<br>\\n\\"true\\"<br>\\n],<br>\\n\\"color\\": \\"#222233\\",<br>\\n\\"bgcolor\\": \\"#333355\\",<br>\\n\\"shape\\": 1<br>\\n},<br>\\n{<br>\\n\\"id\\": 42,<br>\\n\\"type\\": \\"Efficient Loader\\",<br>\\n\\"pos\\": [<br>\\n1420,<br>\\n-650<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 400,<br>\\n\\"1\\": 462.0000305175781<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 19,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"lora_stack\\",<br>\\n\\"type\\": \\"LORA_STACK\\",<br>\\n\\"link\\": null,<br>\\n\\"label\\": \\"LoRA堆\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"cnet_stack\\",<br>\\n\\"type\\": \\"CONTROL_NET_STACK\\",<br>\\n\\"link\\": 65,<br>\\n\\"label\\": \\"ControlNet堆\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n56<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"模型\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING+\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n57<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"正面条件\\",<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING-\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n58<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"负面条件\\",<br>\\n\\"slot_index\\": 2<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n59<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"Latent\\",<br>\\n\\"slot_index\\": 3<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n60<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"VAE\\",<br>\\n\\"slot_index\\": 4<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"DEPENDENCIES\\",<br>\\n\\"type\\": \\"DEPENDENCIES\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"依赖\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"Efficient Loader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"AWPainting_v1.3.safetensors\\",<br>\\n\\"Baked VAE\\",<br>\\n-2,<br>\\n\\"None\\",<br>\\n1,<br>\\n1,<br>\\n\\"masterpiece, best quality, highres, 1girl, bare shoulders, brown hair, long hair, (orange dress:1.2), looking at viewer, forest, maple leaves,outdoors, wild, plants, cinematic lights, lightrays,depth of field, blurry_background, blurry_foreground, shiny luminious,\\",<br>\\n\\"(hands), text, error, cropped, (worst quality:1.2), (low quality:1.2), normal quality, (jpeg artifacts:1.3), signature, watermark, username, blurry, artist name, monochrome, sketch, censorship, censor, (copyright:1.2), extra legs, (forehead mark) (depth of field) (emotionless) (penis), embedding:EasyNegative, embedding:badhandv4, \\",<br>\\n\\"none\\",<br>\\n\\"comfy++\\",<br>\\n768,<br>\\n1152,<br>\\n1<br>\\n],<br>\\n\\"color\\": \\"#443322\\",<br>\\n\\"bgcolor\\": \\"#665533\\",<br>\\n\\"shape\\": 1<br>\\n},<br>\\n{<br>\\n\\"id\\": 11,<br>\\n\\"type\\": \\"LoadImage\\",<br>\\n\\"pos\\": [<br>\\n-250,<br>\\n-800<br>\\n],<br>\\n\\"size\\": [<br>\\n220,<br>\\n314<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 5,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n22,<br>\\n32,<br>\\n33,<br>\\n34<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"图像\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": null,<br>\\n\\"label\\": \\"遮罩\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"aimake_Example_1713001562048_49 (1) (3).jpg\\",<br>\\n\\"image\\"<br>\\n]<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\n22,<br>\\n11,<br>\\n0,<br>\\n16,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n24,<br>\\n16,<br>\\n0,<br>\\n17,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n29,<br>\\n21,<br>\\n0,<br>\\n25,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n30,<br>\\n33,<br>\\n0,<br>\\n29,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n31,<br>\\n34,<br>\\n0,<br>\\n31,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n32,<br>\\n11,<br>\\n0,<br>\\n21,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n33,<br>\\n11,<br>\\n0,<br>\\n33,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n34,<br>\\n11,<br>\\n0,<br>\\n34,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n47,<br>\\n12,<br>\\n0,<br>\\n37,<br>\\n0,<br>\\n\\"CONTROL_NET\\"<br>\\n],<br>\\n[<br>\\n48,<br>\\n16,<br>\\n0,<br>\\n37,<br>\\n1,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n49,<br>\\n23,<br>\\n0,<br>\\n38,<br>\\n0,<br>\\n\\"CONTROL_NET\\"<br>\\n],<br>\\n[<br>\\n50,<br>\\n21,<br>\\n0,<br>\\n38,<br>\\n1,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n51,<br>\\n30,<br>\\n0,<br>\\n39,<br>\\n0,<br>\\n\\"CONTROL_NET\\"<br>\\n],<br>\\n[<br>\\n52,<br>\\n33,<br>\\n0,<br>\\n39,<br>\\n1,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n53,<br>\\n32,<br>\\n0,<br>\\n40,<br>\\n0,<br>\\n\\"CONTROL_NET\\"<br>\\n],<br>\\n[<br>\\n54,<br>\\n34,<br>\\n0,<br>\\n40,<br>\\n1,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n55,<br>\\n41,<br>\\n0,<br>\\n35,<br>\\n1,<br>\\n\\"CONTROL_NET_STACK\\"<br>\\n],<br>\\n[<br>\\n56,<br>\\n42,<br>\\n0,<br>\\n43,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n57,<br>\\n42,<br>\\n1,<br>\\n43,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n58,<br>\\n42,<br>\\n2,<br>\\n43,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n59,<br>\\n42,<br>\\n3,<br>\\n43,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n60,<br>\\n42,<br>\\n4,<br>\\n43,<br>\\n4,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n61,<br>\\n43,<br>\\n5,<br>\\n44,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n62,<br>\\n37,<br>\\n0,<br>\\n38,<br>\\n2,<br>\\n\\"CONTROL_NET_STACK\\"<br>\\n],<br>\\n[<br>\\n63,<br>\\n38,<br>\\n0,<br>\\n39,<br>\\n2,<br>\\n\\"CONTROL_NET_STACK\\"<br>\\n],<br>\\n[<br>\\n64,<br>\\n39,<br>\\n0,<br>\\n40,<br>\\n2,<br>\\n\\"CONTROL_NET_STACK\\"<br>\\n],<br>\\n[<br>\\n65,<br>\\n40,<br>\\n0,<br>\\n42,<br>\\n1,<br>\\n\\"CONTROL_NET_STACK\\"<br>\\n]<br>\\n],<br>\\n\\"groups\\": [],<br>\\n\\"config\\": {},<br>\\n\\"extra\\": {<br>\\n\\"0246.VERSION\\": [<br>\\n0,<br>\\n0,<br>\\n4<br>\\n]<br>\\n},<br>\\n\\"version\\": 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/附加网络工作流/7. 多重ControlNet工作流（效率节点版本）.json","value":{"title":"7. 多重ControlNet工作流（效率节点版本）.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/附加网络工作流/7. 多重ControlNet工作流（效率节点版本）.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{N as comp,d as data};

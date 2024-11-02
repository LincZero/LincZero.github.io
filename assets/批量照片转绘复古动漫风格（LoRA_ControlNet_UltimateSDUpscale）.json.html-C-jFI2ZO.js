import{_ as e,c as t,d as o,o as l,r as a}from"./app-DKPNPe4s.js";const s={};function i(p,r){const n=a("VueFlow");return l(),t("div",null,[o(n,{type:"comfyui",data:`{
  "last_node_id": 33,
  "last_link_id": 48,
  "nodes": [
    {
      "id": 13,
      "type": "Get Image Size",
      "pos": [
        -450,
        30
      ],
      "size": [
        210,
        46
      ],
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 10,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "width",
          "type": "INT",
          "links": [
            11
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "width"
        },
        {
          "name": "height",
          "type": "INT",
          "links": [
            12
          ],
          "slot_index": 1,
          "shape": 3,
          "label": "height"
        }
      ],
      "properties": {
        "Node name for S&R": "Get Image Size"
      }
    },
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": {
        "0": -50,
        "1": 200
      },
      "size": {
        "0": 210,
        "1": 54
      },
      "flags": {
        "collapsed": false
      },
      "order": 16,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 22,
          "label": "CLIP"
        },
        {
          "name": "text",
          "type": "STRING",
          "link": 14,
          "widget": {
            "name": "text"
          },
          "label": "文本"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            27
          ],
          "slot_index": 0,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "beautiful scenery nature glass bottle landscape, , purple galaxy bottle,"
      ]
    },
    {
      "id": 19,
      "type": "CLIPTextEncode",
      "pos": {
        "0": -50,
        "1": 380
      },
      "size": {
        "0": 210,
        "1": 180
      },
      "flags": {},
      "order": 18,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 24,
          "label": "CLIP"
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
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "official art, context art, retro anime, complex background, blurry background, depth of field, "
      ]
    },
    {
      "id": 31,
      "type": "UpscaleModelLoader",
      "pos": {
        "0": 750,
        "1": 400
      },
      "size": {
        "0": 320,
        "1": 60
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "UPSCALE_MODEL",
          "type": "UPSCALE_MODEL",
          "links": [
            48
          ],
          "shape": 3,
          "label": "放大模型"
        }
      ],
      "properties": {
        "Node name for S&R": "UpscaleModelLoader"
      },
      "widgets_values": [
        "4xUltrasharp_4xUltrasharpV10.pth"
      ]
    },
    {
      "id": 12,
      "type": "LoadImage",
      "pos": {
        "0": -760,
        "1": -70
      },
      "size": {
        "0": 270,
        "1": 440
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            10,
            13,
            38,
            39,
            40
          ],
          "slot_index": 0,
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
        "00048-1299086487.png",
        "image"
      ]
    },
    {
      "id": 23,
      "type": "OpenposePreprocessor",
      "pos": [
        180,
        -80
      ],
      "size": [
        264.9114990234375,
        150
      ],
      "flags": {},
      "order": 10,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 38,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            29
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "图像"
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
      "id": 24,
      "type": "ControlNetLoader",
      "pos": {
        "0": 180,
        "1": -180
      },
      "size": {
        "0": 264.9114990234375,
        "1": 58
      },
      "flags": {},
      "order": 2,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "CONTROL_NET",
          "type": "CONTROL_NET",
          "links": [
            28
          ],
          "shape": 3,
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
      "id": 25,
      "type": "Zoe_DepthAnythingPreprocessor",
      "pos": [
        460,
        -60
      ],
      "size": [
        259.91143798828125,
        82
      ],
      "flags": {},
      "order": 11,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 39,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            32
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "图像"
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
      "id": 27,
      "type": "LineArtPreprocessor",
      "pos": [
        740,
        -60
      ],
      "size": [
        260,
        82
      ],
      "flags": {},
      "order": 12,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 40,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            35
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "图像"
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
      "id": 28,
      "type": "ControlNetLoader",
      "pos": {
        "0": 740,
        "1": -180
      },
      "size": {
        "0": 260,
        "1": 60
      },
      "flags": {},
      "order": 3,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "CONTROL_NET",
          "type": "CONTROL_NET",
          "links": [
            34
          ],
          "shape": 3,
          "label": "ControlNet"
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
      "id": 26,
      "type": "ControlNetLoader",
      "pos": {
        "0": 470,
        "1": -180
      },
      "size": {
        "0": 260,
        "1": 60
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "CONTROL_NET",
          "type": "CONTROL_NET",
          "links": [
            31
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
      "id": 8,
      "type": "VAEDecode",
      "pos": {
        "0": 750,
        "1": 310
      },
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 24,
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
          "link": 41,
          "slot_index": 1,
          "label": "VAE"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            42
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
      "id": 9,
      "type": "SaveImage",
      "pos": {
        "0": 1430,
        "1": -200
      },
      "size": {
        "0": 420,
        "1": 600
      },
      "flags": {},
      "order": 26,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 43,
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
      "id": 7,
      "type": "CLIPTextEncode",
      "pos": {
        "0": 180,
        "1": 380
      },
      "size": {
        "0": 260,
        "1": 180
      },
      "flags": {},
      "order": 17,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 23,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            6,
            46
          ],
          "slot_index": 0,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "embedding:EasyNegative, lowres, text, error, extra digit, fewer digits, cropped, (worst quality:1.2), low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, lowres graffiti, (low quality lowres simple background:1.1)"
      ]
    },
    {
      "id": 18,
      "type": "ConditioningCombine",
      "pos": {
        "0": 180,
        "1": 290
      },
      "size": {
        "0": 260,
        "1": 50
      },
      "flags": {},
      "order": 19,
      "mode": 0,
      "inputs": [
        {
          "name": "conditioning_1",
          "type": "CONDITIONING",
          "link": 27,
          "label": "条件1"
        },
        {
          "name": "conditioning_2",
          "type": "CONDITIONING",
          "link": 25,
          "label": "条件2"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            36,
            45
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "ConditioningCombine"
      },
      "widgets_values": []
    },
    {
      "id": 30,
      "type": "UltimateSDUpscale",
      "pos": {
        "0": 1090,
        "1": -110
      },
      "size": {
        "0": 315,
        "1": 826
      },
      "flags": {},
      "order": 25,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 42,
          "label": "图像"
        },
        {
          "name": "model",
          "type": "MODEL",
          "link": 44,
          "label": "模型"
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 45,
          "label": "正面条件"
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 46,
          "label": "负面条件"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 47,
          "label": "VAE"
        },
        {
          "name": "upscale_model",
          "type": "UPSCALE_MODEL",
          "link": 48,
          "slot_index": 5,
          "label": "放大模型"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            43
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "图像"
        }
      ],
      "properties": {
        "Node name for S&R": "UltimateSDUpscale"
      },
      "widgets_values": [
        2,
        762732372966987,
        "randomize",
        20,
        8,
        "euler",
        "normal",
        0.2,
        "Linear",
        512,
        512,
        8,
        32,
        "None",
        1,
        64,
        8,
        16,
        true,
        false
      ]
    },
    {
      "id": 3,
      "type": "KSampler",
      "pos": {
        "0": 460,
        "1": 290
      },
      "size": {
        "0": 267.9114074707031,
        "1": 493.56451416015625
      },
      "flags": {},
      "order": 23,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 21,
          "label": "模型"
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 37,
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
        190329625678779,
        "randomize",
        20,
        8,
        "euler",
        "normal",
        1
      ]
    },
    {
      "id": 32,
      "type": "Note",
      "pos": {
        "0": -1392,
        "1": -193
      },
      "size": [
        591.4156004276399,
        1001.2689847309005
      ],
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [],
      "outputs": [],
      "properties": {},
      "widgets_values": [
        "# 总结、抄作业、课后题\\n\\n课后题：对照片做批量的画风迁移，把真人照片转复古动漫风格\\n\\n这里将WebUI的工作流程与ComfyUI的做对比，发现ComfyUI工作流轻松很多"
      ],
      "color": "#432",
      "bgcolor": "#653"
    },
    {
      "id": 14,
      "type": "WD14Tagger|pysssss",
      "pos": {
        "0": -450,
        "1": 200
      },
      "size": {
        "0": 390,
        "1": 220
      },
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 13,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "STRING",
          "type": "STRING",
          "links": [
            14
          ],
          "slot_index": 0,
          "shape": 6,
          "label": "字符串"
        }
      ],
      "properties": {
        "Node name for S&R": "WD14Tagger|pysssss"
      },
      "widgets_values": [
        "wd-v1-4-moat-tagger-v2",
        0.35,
        0.85,
        false,
        false,
        "white background, simple background,"
      ]
    },
    {
      "id": 15,
      "type": "LoraLoader",
      "pos": {
        "0": -450,
        "1": 460
      },
      "size": {
        "0": 243.7846221923828,
        "1": 126
      },
      "flags": {},
      "order": 13,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 17,
          "label": "模型"
        },
        {
          "name": "clip",
          "type": "CLIP",
          "link": 18,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            19
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "模型"
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            20
          ],
          "slot_index": 1,
          "shape": 3,
          "label": "CLIP"
        }
      ],
      "properties": {
        "Node name for S&R": "LoraLoader"
      },
      "widgets_values": [
        "80'sFusion.safetensors",
        0.7000000000000001,
        0.7000000000000001
      ]
    },
    {
      "id": 16,
      "type": "LoraLoader",
      "pos": {
        "0": -450,
        "1": 629
      },
      "size": {
        "0": 243.7846221923828,
        "1": 126
      },
      "flags": {},
      "order": 15,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 19,
          "label": "模型"
        },
        {
          "name": "clip",
          "type": "CLIP",
          "link": 20,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            21,
            44
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "模型"
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            22,
            23,
            24
          ],
          "slot_index": 1,
          "shape": 3,
          "label": "CLIP"
        }
      ],
      "properties": {
        "Node name for S&R": "LoraLoader"
      },
      "widgets_values": [
        "Retro_Anime-000002.safetensors",
        0.5,
        0.5
      ]
    },
    {
      "id": 4,
      "type": "CheckpointLoaderSimple",
      "pos": {
        "0": -780,
        "1": 440
      },
      "size": {
        "0": 315,
        "1": 98
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            17
          ],
          "slot_index": 0,
          "label": "模型"
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            18
          ],
          "slot_index": 1,
          "label": "CLIP"
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [],
          "slot_index": 2,
          "label": "VAE"
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimple"
      },
      "widgets_values": [
        "isabelia_v10.safetensors"
      ]
    },
    {
      "id": 29,
      "type": "VAELoader",
      "pos": {
        "0": -779,
        "1": 585
      },
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            41,
            47
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "VAE"
        }
      ],
      "properties": {
        "Node name for S&R": "VAELoader"
      },
      "widgets_values": [
        "kl-f8-anime2.ckpt"
      ]
    },
    {
      "id": 20,
      "type": "ControlNetApply",
      "pos": {
        "0": 180,
        "1": 130
      },
      "size": {
        "0": 263.9114074707031,
        "1": 98
      },
      "flags": {},
      "order": 20,
      "mode": 0,
      "inputs": [
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 36,
          "label": "条件"
        },
        {
          "name": "control_net",
          "type": "CONTROL_NET",
          "link": 28,
          "slot_index": 1,
          "label": "ControlNet"
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 29,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            30
          ],
          "slot_index": 0,
          "shape": 3,
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
      "id": 21,
      "type": "ControlNetApply",
      "pos": {
        "0": 460,
        "1": 130
      },
      "size": {
        "0": 269.91143798828125,
        "1": 98
      },
      "flags": {},
      "order": 21,
      "mode": 0,
      "inputs": [
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 30,
          "label": "条件"
        },
        {
          "name": "control_net",
          "type": "CONTROL_NET",
          "link": 31,
          "slot_index": 1,
          "label": "ControlNet"
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 32,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            33
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetApply"
      },
      "widgets_values": [
        0.2
      ]
    },
    {
      "id": 22,
      "type": "ControlNetApply",
      "pos": {
        "0": 740,
        "1": 130
      },
      "size": {
        "0": 270,
        "1": 100
      },
      "flags": {},
      "order": 22,
      "mode": 0,
      "inputs": [
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 33,
          "label": "条件"
        },
        {
          "name": "control_net",
          "type": "CONTROL_NET",
          "link": 34,
          "slot_index": 1,
          "label": "ControlNet"
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 35,
          "label": "图像"
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
          "shape": 3,
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
      "id": 5,
      "type": "EmptyLatentImage",
      "pos": {
        "0": -230,
        "1": 30
      },
      "size": {
        "0": 210,
        "1": 110
      },
      "flags": {},
      "order": 14,
      "mode": 0,
      "inputs": [
        {
          "name": "width",
          "type": "INT",
          "link": 11,
          "widget": {
            "name": "width"
          },
          "label": "宽度"
        },
        {
          "name": "height",
          "type": "INT",
          "link": 12,
          "widget": {
            "name": "height"
          },
          "label": "高度"
        }
      ],
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
        512,
        1
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
      10,
      12,
      0,
      13,
      0,
      "IMAGE"
    ],
    [
      11,
      13,
      0,
      5,
      0,
      "INT"
    ],
    [
      12,
      13,
      1,
      5,
      1,
      "INT"
    ],
    [
      13,
      12,
      0,
      14,
      0,
      "IMAGE"
    ],
    [
      14,
      14,
      0,
      6,
      1,
      "STRING"
    ],
    [
      17,
      4,
      0,
      15,
      0,
      "MODEL"
    ],
    [
      18,
      4,
      1,
      15,
      1,
      "CLIP"
    ],
    [
      19,
      15,
      0,
      16,
      0,
      "MODEL"
    ],
    [
      20,
      15,
      1,
      16,
      1,
      "CLIP"
    ],
    [
      21,
      16,
      0,
      3,
      0,
      "MODEL"
    ],
    [
      22,
      16,
      1,
      6,
      0,
      "CLIP"
    ],
    [
      23,
      16,
      1,
      7,
      0,
      "CLIP"
    ],
    [
      24,
      16,
      1,
      19,
      0,
      "CLIP"
    ],
    [
      25,
      19,
      0,
      18,
      1,
      "CONDITIONING"
    ],
    [
      27,
      6,
      0,
      18,
      0,
      "CONDITIONING"
    ],
    [
      28,
      24,
      0,
      20,
      1,
      "CONTROL_NET"
    ],
    [
      29,
      23,
      0,
      20,
      2,
      "IMAGE"
    ],
    [
      30,
      20,
      0,
      21,
      0,
      "CONDITIONING"
    ],
    [
      31,
      26,
      0,
      21,
      1,
      "CONTROL_NET"
    ],
    [
      32,
      25,
      0,
      21,
      2,
      "IMAGE"
    ],
    [
      33,
      21,
      0,
      22,
      0,
      "CONDITIONING"
    ],
    [
      34,
      28,
      0,
      22,
      1,
      "CONTROL_NET"
    ],
    [
      35,
      27,
      0,
      22,
      2,
      "IMAGE"
    ],
    [
      36,
      18,
      0,
      20,
      0,
      "CONDITIONING"
    ],
    [
      37,
      22,
      0,
      3,
      1,
      "CONDITIONING"
    ],
    [
      38,
      12,
      0,
      23,
      0,
      "IMAGE"
    ],
    [
      39,
      12,
      0,
      25,
      0,
      "IMAGE"
    ],
    [
      40,
      12,
      0,
      27,
      0,
      "IMAGE"
    ],
    [
      41,
      29,
      0,
      8,
      1,
      "VAE"
    ],
    [
      42,
      8,
      0,
      30,
      0,
      "IMAGE"
    ],
    [
      43,
      30,
      0,
      9,
      0,
      "IMAGE"
    ],
    [
      44,
      16,
      0,
      30,
      1,
      "MODEL"
    ],
    [
      45,
      18,
      0,
      30,
      2,
      "CONDITIONING"
    ],
    [
      46,
      7,
      0,
      30,
      3,
      "CONDITIONING"
    ],
    [
      47,
      29,
      0,
      30,
      4,
      "VAE"
    ],
    [
      48,
      31,
      0,
      30,
      5,
      "UPSCALE_MODEL"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "ds": {
      "scale": 1.0834705943388407,
      "offset": [
        1509.6886193186463,
        272.7874502754775
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
`})])}const m=e(s,[["render",i],["__file","批量照片转绘复古动漫风格（LoRA_ControlNet_UltimateSDUpscale）.json.html.vue"]]),N=JSON.parse(`{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E7%BB%84%E5%90%88%E5%B7%A5%E4%BD%9C%E6%B5%81/%E6%89%B9%E9%87%8F%E7%85%A7%E7%89%87%E8%BD%AC%E7%BB%98%E5%A4%8D%E5%8F%A4%E5%8A%A8%E6%BC%AB%E9%A3%8E%E6%A0%BC%EF%BC%88LoRA_ControlNet_UltimateSDUpscale%EF%BC%89.json","title":"","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 33, \\"last_link_id\\": 48, \\"nodes\\": [ { \\"id\\": 13, \\"type\\": \\"Get Image Size\\", \\"pos\\": [ -450, 30 ], \\"size\\": [ 210, 46 ], \\"flags\\": {}, \\"order\\": 8, \\"mode\\": 0, \\"inputs\\"...","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E7%BB%84%E5%90%88%E5%B7%A5%E4%BD%9C%E6%B5%81/%E6%89%B9%E9%87%8F%E7%85%A7%E7%89%87%E8%BD%AC%E7%BB%98%E5%A4%8D%E5%8F%A4%E5%8A%A8%E6%BC%AB%E9%A3%8E%E6%A0%BC%EF%BC%88LoRA_ControlNet_UltimateSDUpscale%EF%BC%89.json"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 33, \\"last_link_id\\": 48, \\"nodes\\": [ { \\"id\\": 13, \\"type\\": \\"Get Image Size\\", \\"pos\\": [ -450, 30 ], \\"size\\": [ 210, 46 ], \\"flags\\": {}, \\"order\\": 8, \\"mode\\": 0, \\"inputs\\"..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":6.56,"words":1969},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/组合工作流/批量照片转绘复古动漫风格（LoRA+ControlNet+UltimateSDUpscale）.json","excerpt":"<p>{\\n\\"last_node_id\\": 33,\\n\\"last_link_id\\": 48,\\n\\"nodes\\": [\\n{\\n\\"id\\": 13,\\n\\"type\\": \\"Get Image Size\\",\\n\\"pos\\": [\\n-450,\\n30\\n],\\n\\"size\\": [\\n210,\\n46\\n],\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 10,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"width\\",\\n\\"type\\": \\"INT\\",\\n\\"links\\": [\\n11\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"width\\"\\n},\\n{\\n\\"name\\": \\"height\\",\\n\\"type\\": \\"INT\\",\\n\\"links\\": [\\n12\\n],\\n\\"slot_index\\": 1,\\n\\"shape\\": 3,\\n\\"label\\": \\"height\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"Get Image Size\\"\\n}\\n},\\n{\\n\\"id\\": 6,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": {\\n\\"0\\": -50,\\n\\"1\\": 200\\n},\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 54\\n},\\n\\"flags\\": {\\n\\"collapsed\\": false\\n},\\n\\"order\\": 16,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 22,\\n\\"label\\": \\"CLIP\\"\\n},\\n{\\n\\"name\\": \\"text\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 14,\\n\\"widget\\": {\\n\\"name\\": \\"text\\"\\n},\\n\\"label\\": \\"文本\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n27\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"beautiful scenery nature glass bottle landscape, , purple galaxy bottle,\\"\\n]\\n},\\n{\\n\\"id\\": 19,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": {\\n\\"0\\": -50,\\n\\"1\\": 380\\n},\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 180\\n},\\n\\"flags\\": {},\\n\\"order\\": 18,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 24,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n25\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"official art, context art, retro anime, complex background, blurry background, depth of field, \\"\\n]\\n},\\n{\\n\\"id\\": 31,\\n\\"type\\": \\"UpscaleModelLoader\\",\\n\\"pos\\": {\\n\\"0\\": 750,\\n\\"1\\": 400\\n},\\n\\"size\\": {\\n\\"0\\": 320,\\n\\"1\\": 60\\n},\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"UPSCALE_MODEL\\",\\n\\"type\\": \\"UPSCALE_MODEL\\",\\n\\"links\\": [\\n48\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"放大模型\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"UpscaleModelLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"4xUltrasharp_4xUltrasharpV10.pth\\"\\n]\\n},\\n{\\n\\"id\\": 12,\\n\\"type\\": \\"LoadImage\\",\\n\\"pos\\": {\\n\\"0\\": -760,\\n\\"1\\": -70\\n},\\n\\"size\\": {\\n\\"0\\": 270,\\n\\"1\\": 440\\n},\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n10,\\n13,\\n38,\\n39,\\n40\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"遮罩\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"00048-1299086487.png\\",\\n\\"image\\"\\n]\\n},\\n{\\n\\"id\\": 23,\\n\\"type\\": \\"OpenposePreprocessor\\",\\n\\"pos\\": [\\n180,\\n-80\\n],\\n\\"size\\": [\\n264.9114990234375,\\n150\\n],\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 38,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n29\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"POSE_KEYPOINT\\",\\n\\"type\\": \\"POSE_KEYPOINT\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"姿态关键点\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"OpenposePreprocessor\\"\\n},\\n\\"widgets_values\\": [\\n\\"enable\\",\\n\\"enable\\",\\n\\"enable\\",\\n512\\n]\\n},\\n{\\n\\"id\\": 24,\\n\\"type\\": \\"ControlNetLoader\\",\\n\\"pos\\": {\\n\\"0\\": 180,\\n\\"1\\": -180\\n},\\n\\"size\\": {\\n\\"0\\": 264.9114990234375,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONTROL_NET\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"links\\": [\\n28\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"ControlNet\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"control_v11p_sd15_openpose.pth\\"\\n]\\n},\\n{\\n\\"id\\": 25,\\n\\"type\\": \\"Zoe_DepthAnythingPreprocessor\\",\\n\\"pos\\": [\\n460,\\n-60\\n],\\n\\"size\\": [\\n259.91143798828125,\\n82\\n],\\n\\"flags\\": {},\\n\\"order\\": 11,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 39,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n32\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"Zoe_DepthAnythingPreprocessor\\"\\n},\\n\\"widgets_values\\": [\\n\\"indoor\\",\\n512\\n]\\n},\\n{\\n\\"id\\": 27,\\n\\"type\\": \\"LineArtPreprocessor\\",\\n\\"pos\\": [\\n740,\\n-60\\n],\\n\\"size\\": [\\n260,\\n82\\n],\\n\\"flags\\": {},\\n\\"order\\": 12,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 40,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n35\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LineArtPreprocessor\\"\\n},\\n\\"widgets_values\\": [\\n\\"disable\\",\\n512\\n]\\n},\\n{\\n\\"id\\": 28,\\n\\"type\\": \\"ControlNetLoader\\",\\n\\"pos\\": {\\n\\"0\\": 740,\\n\\"1\\": -180\\n},\\n\\"size\\": {\\n\\"0\\": 260,\\n\\"1\\": 60\\n},\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONTROL_NET\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"links\\": [\\n34\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"ControlNet\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"control_v11p_sd15_lineart.pth\\"\\n]\\n},\\n{\\n\\"id\\": 26,\\n\\"type\\": \\"ControlNetLoader\\",\\n\\"pos\\": {\\n\\"0\\": 470,\\n\\"1\\": -180\\n},\\n\\"size\\": {\\n\\"0\\": 260,\\n\\"1\\": 60\\n},\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONTROL_NET\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"links\\": [\\n31\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"ControlNet\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"control_v11f1p_sd15_depth.pth\\"\\n]\\n},\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": {\\n\\"0\\": 750,\\n\\"1\\": 310\\n},\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 24,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 7,\\n\\"label\\": \\"Latent\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 41,\\n\\"slot_index\\": 1,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n42\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 9,\\n\\"type\\": \\"SaveImage\\",\\n\\"pos\\": {\\n\\"0\\": 1430,\\n\\"1\\": -200\\n},\\n\\"size\\": {\\n\\"0\\": 420,\\n\\"1\\": 600\\n},\\n\\"flags\\": {},\\n\\"order\\": 26,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 43,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [],\\n\\"properties\\": {},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\"\\n]\\n},\\n{\\n\\"id\\": 7,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": {\\n\\"0\\": 180,\\n\\"1\\": 380\\n},\\n\\"size\\": {\\n\\"0\\": 260,\\n\\"1\\": 180\\n},\\n\\"flags\\": {},\\n\\"order\\": 17,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 23,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n6,\\n46\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"embedding:EasyNegative, lowres, text, error, extra digit, fewer digits, cropped, (worst quality:1.2), low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, lowres graffiti, (low quality lowres simple background:1.1)\\"\\n]\\n},\\n{\\n\\"id\\": 18,\\n\\"type\\": \\"ConditioningCombine\\",\\n\\"pos\\": {\\n\\"0\\": 180,\\n\\"1\\": 290\\n},\\n\\"size\\": {\\n\\"0\\": 260,\\n\\"1\\": 50\\n},\\n\\"flags\\": {},\\n\\"order\\": 19,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"conditioning_1\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 27,\\n\\"label\\": \\"条件1\\"\\n},\\n{\\n\\"name\\": \\"conditioning_2\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 25,\\n\\"label\\": \\"条件2\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n36,\\n45\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ConditioningCombine\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 30,\\n\\"type\\": \\"UltimateSDUpscale\\",\\n\\"pos\\": {\\n\\"0\\": 1090,\\n\\"1\\": -110\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 826\\n},\\n\\"flags\\": {},\\n\\"order\\": 25,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 42,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 44,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 45,\\n\\"label\\": \\"正面条件\\"\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 46,\\n\\"label\\": \\"负面条件\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 47,\\n\\"label\\": \\"VAE\\"\\n},\\n{\\n\\"name\\": \\"upscale_model\\",\\n\\"type\\": \\"UPSCALE_MODEL\\",\\n\\"link\\": 48,\\n\\"slot_index\\": 5,\\n\\"label\\": \\"放大模型\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n43\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"UltimateSDUpscale\\"\\n},\\n\\"widgets_values\\": [\\n2,\\n762732372966987,\\n\\"randomize\\",\\n20,\\n8,\\n\\"euler\\",\\n\\"normal\\",\\n0.2,\\n\\"Linear\\",\\n512,\\n512,\\n8,\\n32,\\n\\"None\\",\\n1,\\n64,\\n8,\\n16,\\ntrue,\\nfalse\\n]\\n},\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": {\\n\\"0\\": 460,\\n\\"1\\": 290\\n},\\n\\"size\\": {\\n\\"0\\": 267.9114074707031,\\n\\"1\\": 493.56451416015625\\n},\\n\\"flags\\": {},\\n\\"order\\": 23,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 21,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 37,\\n\\"label\\": \\"正面条件\\"\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 6,\\n\\"label\\": \\"负面条件\\"\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 2,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n7\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n190329625678779,\\n\\"randomize\\",\\n20,\\n8,\\n\\"euler\\",\\n\\"normal\\",\\n1\\n]\\n},\\n{\\n\\"id\\": 32,\\n\\"type\\": \\"Note\\",\\n\\"pos\\": {\\n\\"0\\": -1392,\\n\\"1\\": -193\\n},\\n\\"size\\": [\\n591.4156004276399,\\n1001.2689847309005\\n],\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [],\\n\\"properties\\": {},\\n\\"widgets_values\\": [\\n\\"# 总结、抄作业、课后题\\\\n\\\\n课后题：对照片做批量的画风迁移，把真人照片转复古动漫风格\\\\n\\\\n这里将WebUI的工作流程与ComfyUI的做对比，发现ComfyUI工作流轻松很多\\"\\n],\\n\\"color\\": \\"#432\\",\\n\\"bgcolor\\": \\"#653\\"\\n},\\n{\\n\\"id\\": 14,\\n\\"type\\": \\"WD14Tagger|pysssss\\",\\n\\"pos\\": {\\n\\"0\\": -450,\\n\\"1\\": 200\\n},\\n\\"size\\": {\\n\\"0\\": 390,\\n\\"1\\": 220\\n},\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 13,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"STRING\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n14\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 6,\\n\\"label\\": \\"字符串\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"WD14Tagger|pysssss\\"\\n},\\n\\"widgets_values\\": [\\n\\"wd-v1-4-moat-tagger-v2\\",\\n0.35,\\n0.85,\\nfalse,\\nfalse,\\n\\"white background, simple background,\\"\\n]\\n},\\n{\\n\\"id\\": 15,\\n\\"type\\": \\"LoraLoader\\",\\n\\"pos\\": {\\n\\"0\\": -450,\\n\\"1\\": 460\\n},\\n\\"size\\": {\\n\\"0\\": 243.7846221923828,\\n\\"1\\": 126\\n},\\n\\"flags\\": {},\\n\\"order\\": 13,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 17,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 18,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n19\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n20\\n],\\n\\"slot_index\\": 1,\\n\\"shape\\": 3,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoraLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"80'sFusion.safetensors\\",\\n0.7000000000000001,\\n0.7000000000000001\\n]\\n},\\n{\\n\\"id\\": 16,\\n\\"type\\": \\"LoraLoader\\",\\n\\"pos\\": {\\n\\"0\\": -450,\\n\\"1\\": 629\\n},\\n\\"size\\": {\\n\\"0\\": 243.7846221923828,\\n\\"1\\": 126\\n},\\n\\"flags\\": {},\\n\\"order\\": 15,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 19,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 20,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n21,\\n44\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n22,\\n23,\\n24\\n],\\n\\"slot_index\\": 1,\\n\\"shape\\": 3,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoraLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"Retro_Anime-000002.safetensors\\",\\n0.5,\\n0.5\\n]\\n},\\n{\\n\\"id\\": 4,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": {\\n\\"0\\": -780,\\n\\"1\\": 440\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n17\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n18\\n],\\n\\"slot_index\\": 1,\\n\\"label\\": \\"CLIP\\"\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [],\\n\\"slot_index\\": 2,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"isabelia_v10.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 29,\\n\\"type\\": \\"VAELoader\\",\\n\\"pos\\": {\\n\\"0\\": -779,\\n\\"1\\": 585\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n41,\\n47\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAELoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"kl-f8-anime2.ckpt\\"\\n]\\n},\\n{\\n\\"id\\": 20,\\n\\"type\\": \\"ControlNetApply\\",\\n\\"pos\\": {\\n\\"0\\": 180,\\n\\"1\\": 130\\n},\\n\\"size\\": {\\n\\"0\\": 263.9114074707031,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 20,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"conditioning\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 36,\\n\\"label\\": \\"条件\\"\\n},\\n{\\n\\"name\\": \\"control_net\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"link\\": 28,\\n\\"slot_index\\": 1,\\n\\"label\\": \\"ControlNet\\"\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 29,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n30\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetApply\\"\\n},\\n\\"widgets_values\\": [\\n1\\n]\\n},\\n{\\n\\"id\\": 21,\\n\\"type\\": \\"ControlNetApply\\",\\n\\"pos\\": {\\n\\"0\\": 460,\\n\\"1\\": 130\\n},\\n\\"size\\": {\\n\\"0\\": 269.91143798828125,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 21,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"conditioning\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 30,\\n\\"label\\": \\"条件\\"\\n},\\n{\\n\\"name\\": \\"control_net\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"link\\": 31,\\n\\"slot_index\\": 1,\\n\\"label\\": \\"ControlNet\\"\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 32,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n33\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetApply\\"\\n},\\n\\"widgets_values\\": [\\n0.2\\n]\\n},\\n{\\n\\"id\\": 22,\\n\\"type\\": \\"ControlNetApply\\",\\n\\"pos\\": {\\n\\"0\\": 740,\\n\\"1\\": 130\\n},\\n\\"size\\": {\\n\\"0\\": 270,\\n\\"1\\": 100\\n},\\n\\"flags\\": {},\\n\\"order\\": 22,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"conditioning\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 33,\\n\\"label\\": \\"条件\\"\\n},\\n{\\n\\"name\\": \\"control_net\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"link\\": 34,\\n\\"slot_index\\": 1,\\n\\"label\\": \\"ControlNet\\"\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 35,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n37\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetApply\\"\\n},\\n\\"widgets_values\\": [\\n0.5\\n]\\n},\\n{\\n\\"id\\": 5,\\n\\"type\\": \\"EmptyLatentImage\\",\\n\\"pos\\": {\\n\\"0\\": -230,\\n\\"1\\": 30\\n},\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 110\\n},\\n\\"flags\\": {},\\n\\"order\\": 14,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"width\\",\\n\\"type\\": \\"INT\\",\\n\\"link\\": 11,\\n\\"widget\\": {\\n\\"name\\": \\"width\\"\\n},\\n\\"label\\": \\"宽度\\"\\n},\\n{\\n\\"name\\": \\"height\\",\\n\\"type\\": \\"INT\\",\\n\\"link\\": 12,\\n\\"widget\\": {\\n\\"name\\": \\"height\\"\\n},\\n\\"label\\": \\"高度\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n2\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"EmptyLatentImage\\"\\n},\\n\\"widgets_values\\": [\\n512,\\n512,\\n1\\n]\\n}\\n],\\n\\"links\\": [\\n[\\n2,\\n5,\\n0,\\n3,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n6,\\n7,\\n0,\\n3,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n7,\\n3,\\n0,\\n8,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n10,\\n12,\\n0,\\n13,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n11,\\n13,\\n0,\\n5,\\n0,\\n\\"INT\\"\\n],\\n[\\n12,\\n13,\\n1,\\n5,\\n1,\\n\\"INT\\"\\n],\\n[\\n13,\\n12,\\n0,\\n14,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n14,\\n14,\\n0,\\n6,\\n1,\\n\\"STRING\\"\\n],\\n[\\n17,\\n4,\\n0,\\n15,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n18,\\n4,\\n1,\\n15,\\n1,\\n\\"CLIP\\"\\n],\\n[\\n19,\\n15,\\n0,\\n16,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n20,\\n15,\\n1,\\n16,\\n1,\\n\\"CLIP\\"\\n],\\n[\\n21,\\n16,\\n0,\\n3,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n22,\\n16,\\n1,\\n6,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n23,\\n16,\\n1,\\n7,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n24,\\n16,\\n1,\\n19,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n25,\\n19,\\n0,\\n18,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n27,\\n6,\\n0,\\n18,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n28,\\n24,\\n0,\\n20,\\n1,\\n\\"CONTROL_NET\\"\\n],\\n[\\n29,\\n23,\\n0,\\n20,\\n2,\\n\\"IMAGE\\"\\n],\\n[\\n30,\\n20,\\n0,\\n21,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n31,\\n26,\\n0,\\n21,\\n1,\\n\\"CONTROL_NET\\"\\n],\\n[\\n32,\\n25,\\n0,\\n21,\\n2,\\n\\"IMAGE\\"\\n],\\n[\\n33,\\n21,\\n0,\\n22,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n34,\\n28,\\n0,\\n22,\\n1,\\n\\"CONTROL_NET\\"\\n],\\n[\\n35,\\n27,\\n0,\\n22,\\n2,\\n\\"IMAGE\\"\\n],\\n[\\n36,\\n18,\\n0,\\n20,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n37,\\n22,\\n0,\\n3,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n38,\\n12,\\n0,\\n23,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n39,\\n12,\\n0,\\n25,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n40,\\n12,\\n0,\\n27,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n41,\\n29,\\n0,\\n8,\\n1,\\n\\"VAE\\"\\n],\\n[\\n42,\\n8,\\n0,\\n30,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n43,\\n30,\\n0,\\n9,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n44,\\n16,\\n0,\\n30,\\n1,\\n\\"MODEL\\"\\n],\\n[\\n45,\\n18,\\n0,\\n30,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n46,\\n7,\\n0,\\n30,\\n3,\\n\\"CONDITIONING\\"\\n],\\n[\\n47,\\n29,\\n0,\\n30,\\n4,\\n\\"VAE\\"\\n],\\n[\\n48,\\n31,\\n0,\\n30,\\n5,\\n\\"UPSCALE_MODEL\\"\\n]\\n],\\n\\"groups\\": [],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"ds\\": {\\n\\"scale\\": 1.0834705943388407,\\n\\"offset\\": [\\n1509.6886193186463,\\n272.7874502754775\\n]\\n},\\n\\"0246.VERSION\\": [\\n0,\\n0,\\n4\\n]\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true}`);export{m as comp,N as data};

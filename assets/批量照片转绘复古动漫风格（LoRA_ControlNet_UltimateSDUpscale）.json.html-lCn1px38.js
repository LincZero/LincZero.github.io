import{_ as r,e as b,h as e,r as t,o}from"./app-DUgdEK0V.js";const l={};function a(s,i){const n=t("VueFlow");return o(),b("div",null,[e(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const d=r(l,[["render",a],["__file","批量照片转绘复古动漫风格（LoRA_ControlNet_UltimateSDUpscale）.json.html.vue"]]),m=JSON.parse(`{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E7%BB%84%E5%90%88%E5%B7%A5%E4%BD%9C%E6%B5%81/%E6%89%B9%E9%87%8F%E7%85%A7%E7%89%87%E8%BD%AC%E7%BB%98%E5%A4%8D%E5%8F%A4%E5%8A%A8%E6%BC%AB%E9%A3%8E%E6%A0%BC%EF%BC%88LoRA_ControlNet_UltimateSDUpscale%EF%BC%89.json.html","title":"批量照片转绘复古动漫风格（LoRA_ControlNet_UltimateSDUpscale）.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 33, \\"last_link_id\\": 48, \\"nodes\\": [ { \\"id\\": 13, \\"type\\": \\"Get Image Size\\", \\"pos\\": [ -450, 30 ], \\"size\\": [ 210, 46 ], \\"flags\\": {}, \\"order\\": 8, \\"mode\\": 0, \\"inputs\\"...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E7%BB%84%E5%90%88%E5%B7%A5%E4%BD%9C%E6%B5%81/%E6%89%B9%E9%87%8F%E7%85%A7%E7%89%87%E8%BD%AC%E7%BB%98%E5%A4%8D%E5%8F%A4%E5%8A%A8%E6%BC%AB%E9%A3%8E%E6%A0%BC%EF%BC%88LoRA_ControlNet_UltimateSDUpscale%EF%BC%89.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 33, \\"last_link_id\\": 48, \\"nodes\\": [ { \\"id\\": 13, \\"type\\": \\"Get Image Size\\", \\"pos\\": [ -450, 30 ], \\"size\\": [ 210, 46 ], \\"flags\\": {}, \\"order\\": 8, \\"mode\\": 0, \\"inputs\\"..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"git":{},"readingTime":{"minutes":6.56,"words":1969},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/组合工作流/批量照片转绘复古动漫风格（LoRA+ControlNet+UltimateSDUpscale）.json","excerpt":"<p>{<br>\\n\\"last_node_id\\": 33,<br>\\n\\"last_link_id\\": 48,<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": 13,<br>\\n\\"type\\": \\"Get Image Size\\",<br>\\n\\"pos\\": [<br>\\n-450,<br>\\n30<br>\\n],<br>\\n\\"size\\": [<br>\\n210,<br>\\n46<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 8,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 10,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"width\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"links\\": [<br>\\n11<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"width\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"height\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"links\\": [<br>\\n12<br>\\n],<br>\\n\\"slot_index\\": 1,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"height\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"Get Image Size\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 6,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": -50,<br>\\n\\"1\\": 200<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 54<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": false<br>\\n},<br>\\n\\"order\\": 16,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 22,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"text\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 14,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text\\"<br>\\n},<br>\\n\\"label\\": \\"文本\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n27<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"beautiful scenery nature glass bottle landscape, , purple galaxy bottle,\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 19,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": -50,<br>\\n\\"1\\": 380<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 180<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 18,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 24,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n25<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"official art, context art, retro anime, complex background, blurry background, depth of field, \\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 31,<br>\\n\\"type\\": \\"UpscaleModelLoader\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 750,<br>\\n\\"1\\": 400<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 320,<br>\\n\\"1\\": 60<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 0,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"UPSCALE_MODEL\\",<br>\\n\\"type\\": \\"UPSCALE_MODEL\\",<br>\\n\\"links\\": [<br>\\n48<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"放大模型\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"UpscaleModelLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"4xUltrasharp_4xUltrasharpV10.pth\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 12,<br>\\n\\"type\\": \\"LoadImage\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": -760,<br>\\n\\"1\\": -70<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 270,<br>\\n\\"1\\": 440<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 1,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n10,<br>\\n13,<br>\\n38,<br>\\n39,<br>\\n40<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"遮罩\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"00048-1299086487.png\\",<br>\\n\\"image\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 23,<br>\\n\\"type\\": \\"OpenposePreprocessor\\",<br>\\n\\"pos\\": [<br>\\n180,<br>\\n-80<br>\\n],<br>\\n\\"size\\": [<br>\\n264.9114990234375,<br>\\n150<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 10,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 38,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n29<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"POSE_KEYPOINT\\",<br>\\n\\"type\\": \\"POSE_KEYPOINT\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"姿态关键点\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"OpenposePreprocessor\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"enable\\",<br>\\n\\"enable\\",<br>\\n\\"enable\\",<br>\\n512<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 24,<br>\\n\\"type\\": \\"ControlNetLoader\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 180,<br>\\n\\"1\\": -180<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 264.9114990234375,<br>\\n\\"1\\": 58<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 2,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONTROL_NET\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"links\\": [<br>\\n28<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"ControlNet\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"control_v11p_sd15_openpose.pth\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 25,<br>\\n\\"type\\": \\"Zoe_DepthAnythingPreprocessor\\",<br>\\n\\"pos\\": [<br>\\n460,<br>\\n-60<br>\\n],<br>\\n\\"size\\": [<br>\\n259.91143798828125,<br>\\n82<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 11,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 39,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n32<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"Zoe_DepthAnythingPreprocessor\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"indoor\\",<br>\\n512<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 27,<br>\\n\\"type\\": \\"LineArtPreprocessor\\",<br>\\n\\"pos\\": [<br>\\n740,<br>\\n-60<br>\\n],<br>\\n\\"size\\": [<br>\\n260,<br>\\n82<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 12,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 40,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n35<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LineArtPreprocessor\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"disable\\",<br>\\n512<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 28,<br>\\n\\"type\\": \\"ControlNetLoader\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 740,<br>\\n\\"1\\": -180<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 260,<br>\\n\\"1\\": 60<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONTROL_NET\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"links\\": [<br>\\n34<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"ControlNet\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"control_v11p_sd15_lineart.pth\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 26,<br>\\n\\"type\\": \\"ControlNetLoader\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 470,<br>\\n\\"1\\": -180<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 260,<br>\\n\\"1\\": 60<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONTROL_NET\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"links\\": [<br>\\n31<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"ControlNet\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"control_v11f1p_sd15_depth.pth\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 8,<br>\\n\\"type\\": \\"VAEDecode\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 750,<br>\\n\\"1\\": 310<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 46<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 24,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 7,<br>\\n\\"label\\": \\"Latent\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 41,<br>\\n\\"slot_index\\": 1,<br>\\n\\"label\\": \\"VAE\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n42<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"<br>\\n},<br>\\n\\"widgets_values\\": []<br>\\n},<br>\\n{<br>\\n\\"id\\": 9,<br>\\n\\"type\\": \\"SaveImage\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 1430,<br>\\n\\"1\\": -200<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 420,<br>\\n\\"1\\": 600<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 26,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 43,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [],<br>\\n\\"properties\\": {},<br>\\n\\"widgets_values\\": [<br>\\n\\"ComfyUI\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 7,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 180,<br>\\n\\"1\\": 380<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 260,<br>\\n\\"1\\": 180<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 17,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 23,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n6,<br>\\n46<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"embedding:EasyNegative, lowres, text, error, extra digit, fewer digits, cropped, (worst quality:1.2), low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, lowres graffiti, (low quality lowres simple background:1.1)\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 18,<br>\\n\\"type\\": \\"ConditioningCombine\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 180,<br>\\n\\"1\\": 290<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 260,<br>\\n\\"1\\": 50<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 19,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"conditioning_1\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 27,<br>\\n\\"label\\": \\"条件1\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"conditioning_2\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 25,<br>\\n\\"label\\": \\"条件2\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n36,<br>\\n45<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ConditioningCombine\\"<br>\\n},<br>\\n\\"widgets_values\\": []<br>\\n},<br>\\n{<br>\\n\\"id\\": 30,<br>\\n\\"type\\": \\"UltimateSDUpscale\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 1090,<br>\\n\\"1\\": -110<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 826<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 25,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 42,<br>\\n\\"label\\": \\"图像\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 44,<br>\\n\\"label\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 45,<br>\\n\\"label\\": \\"正面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 46,<br>\\n\\"label\\": \\"负面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 47,<br>\\n\\"label\\": \\"VAE\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"upscale_model\\",<br>\\n\\"type\\": \\"UPSCALE_MODEL\\",<br>\\n\\"link\\": 48,<br>\\n\\"slot_index\\": 5,<br>\\n\\"label\\": \\"放大模型\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n43<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"UltimateSDUpscale\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n2,<br>\\n762732372966987,<br>\\n\\"randomize\\",<br>\\n20,<br>\\n8,<br>\\n\\"euler\\",<br>\\n\\"normal\\",<br>\\n0.2,<br>\\n\\"Linear\\",<br>\\n512,<br>\\n512,<br>\\n8,<br>\\n32,<br>\\n\\"None\\",<br>\\n1,<br>\\n64,<br>\\n8,<br>\\n16,<br>\\ntrue,<br>\\nfalse<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 3,<br>\\n\\"type\\": \\"KSampler\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 460,<br>\\n\\"1\\": 290<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 267.9114074707031,<br>\\n\\"1\\": 493.56451416015625<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 23,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 21,<br>\\n\\"label\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 37,<br>\\n\\"label\\": \\"正面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 6,<br>\\n\\"label\\": \\"负面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 2,<br>\\n\\"label\\": \\"Latent\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n7<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"Latent\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n190329625678779,<br>\\n\\"randomize\\",<br>\\n20,<br>\\n8,<br>\\n\\"euler\\",<br>\\n\\"normal\\",<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 32,<br>\\n\\"type\\": \\"Note\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": -1392,<br>\\n\\"1\\": -193<br>\\n},<br>\\n\\"size\\": [<br>\\n591.4156004276399,<br>\\n1001.2689847309005<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 5,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [],<br>\\n\\"properties\\": {},<br>\\n\\"widgets_values\\": [<br>\\n\\"# 总结、抄作业、课后题\\\\n\\\\n课后题：对照片做批量的画风迁移，把真人照片转复古动漫风格\\\\n\\\\n这里将WebUI的工作流程与ComfyUI的做对比，发现ComfyUI工作流轻松很多\\"<br>\\n],<br>\\n\\"color\\": \\"#432\\",<br>\\n\\"bgcolor\\": \\"#653\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 14,<br>\\n\\"type\\": \\"WD14Tagger|pysssss\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": -450,<br>\\n\\"1\\": 200<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 390,<br>\\n\\"1\\": 220<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 9,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 13,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"STRING\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n14<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 6,<br>\\n\\"label\\": \\"字符串\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"WD14Tagger|pysssss\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"wd-v1-4-moat-tagger-v2\\",<br>\\n0.35,<br>\\n0.85,<br>\\nfalse,<br>\\nfalse,<br>\\n\\"white background, simple background,\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 15,<br>\\n\\"type\\": \\"LoraLoader\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": -450,<br>\\n\\"1\\": 460<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 243.7846221923828,<br>\\n\\"1\\": 126<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 13,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 17,<br>\\n\\"label\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 18,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n19<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n20<br>\\n],<br>\\n\\"slot_index\\": 1,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LoraLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"80'sFusion.safetensors\\",<br>\\n0.7000000000000001,<br>\\n0.7000000000000001<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 16,<br>\\n\\"type\\": \\"LoraLoader\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": -450,<br>\\n\\"1\\": 629<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 243.7846221923828,<br>\\n\\"1\\": 126<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 15,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 19,<br>\\n\\"label\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 20,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n21,<br>\\n44<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n22,<br>\\n23,<br>\\n24<br>\\n],<br>\\n\\"slot_index\\": 1,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LoraLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"Retro_Anime-000002.safetensors\\",<br>\\n0.5,<br>\\n0.5<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 4,<br>\\n\\"type\\": \\"CheckpointLoaderSimple\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": -780,<br>\\n\\"1\\": 440<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 98<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n17<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n18<br>\\n],<br>\\n\\"slot_index\\": 1,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [],<br>\\n\\"slot_index\\": 2,<br>\\n\\"label\\": \\"VAE\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"isabelia_v10.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 29,<br>\\n\\"type\\": \\"VAELoader\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": -779,<br>\\n\\"1\\": 585<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 58<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 7,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n41,<br>\\n47<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"VAE\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAELoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"kl-f8-anime2.ckpt\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 20,<br>\\n\\"type\\": \\"ControlNetApply\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 180,<br>\\n\\"1\\": 130<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 263.9114074707031,<br>\\n\\"1\\": 98<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 20,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"conditioning\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 36,<br>\\n\\"label\\": \\"条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"control_net\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"link\\": 28,<br>\\n\\"slot_index\\": 1,<br>\\n\\"label\\": \\"ControlNet\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 29,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n30<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetApply\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 21,<br>\\n\\"type\\": \\"ControlNetApply\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 460,<br>\\n\\"1\\": 130<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 269.91143798828125,<br>\\n\\"1\\": 98<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 21,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"conditioning\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 30,<br>\\n\\"label\\": \\"条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"control_net\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"link\\": 31,<br>\\n\\"slot_index\\": 1,<br>\\n\\"label\\": \\"ControlNet\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 32,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n33<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetApply\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n0.2<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 22,<br>\\n\\"type\\": \\"ControlNetApply\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 740,<br>\\n\\"1\\": 130<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 270,<br>\\n\\"1\\": 100<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 22,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"conditioning\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 33,<br>\\n\\"label\\": \\"条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"control_net\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"link\\": 34,<br>\\n\\"slot_index\\": 1,<br>\\n\\"label\\": \\"ControlNet\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 35,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n37<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetApply\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n0.5<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 5,<br>\\n\\"type\\": \\"EmptyLatentImage\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": -230,<br>\\n\\"1\\": 30<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 110<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 14,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"width\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"link\\": 11,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"width\\"<br>\\n},<br>\\n\\"label\\": \\"宽度\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"height\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"link\\": 12,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"height\\"<br>\\n},<br>\\n\\"label\\": \\"高度\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n2<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"Latent\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"EmptyLatentImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n512,<br>\\n512,<br>\\n1<br>\\n]<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\n2,<br>\\n5,<br>\\n0,<br>\\n3,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n6,<br>\\n7,<br>\\n0,<br>\\n3,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n7,<br>\\n3,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n10,<br>\\n12,<br>\\n0,<br>\\n13,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n11,<br>\\n13,<br>\\n0,<br>\\n5,<br>\\n0,<br>\\n\\"INT\\"<br>\\n],<br>\\n[<br>\\n12,<br>\\n13,<br>\\n1,<br>\\n5,<br>\\n1,<br>\\n\\"INT\\"<br>\\n],<br>\\n[<br>\\n13,<br>\\n12,<br>\\n0,<br>\\n14,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n14,<br>\\n14,<br>\\n0,<br>\\n6,<br>\\n1,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n17,<br>\\n4,<br>\\n0,<br>\\n15,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n18,<br>\\n4,<br>\\n1,<br>\\n15,<br>\\n1,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n19,<br>\\n15,<br>\\n0,<br>\\n16,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n20,<br>\\n15,<br>\\n1,<br>\\n16,<br>\\n1,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n21,<br>\\n16,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n22,<br>\\n16,<br>\\n1,<br>\\n6,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n23,<br>\\n16,<br>\\n1,<br>\\n7,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n24,<br>\\n16,<br>\\n1,<br>\\n19,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n25,<br>\\n19,<br>\\n0,<br>\\n18,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n27,<br>\\n6,<br>\\n0,<br>\\n18,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n28,<br>\\n24,<br>\\n0,<br>\\n20,<br>\\n1,<br>\\n\\"CONTROL_NET\\"<br>\\n],<br>\\n[<br>\\n29,<br>\\n23,<br>\\n0,<br>\\n20,<br>\\n2,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n30,<br>\\n20,<br>\\n0,<br>\\n21,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n31,<br>\\n26,<br>\\n0,<br>\\n21,<br>\\n1,<br>\\n\\"CONTROL_NET\\"<br>\\n],<br>\\n[<br>\\n32,<br>\\n25,<br>\\n0,<br>\\n21,<br>\\n2,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n33,<br>\\n21,<br>\\n0,<br>\\n22,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n34,<br>\\n28,<br>\\n0,<br>\\n22,<br>\\n1,<br>\\n\\"CONTROL_NET\\"<br>\\n],<br>\\n[<br>\\n35,<br>\\n27,<br>\\n0,<br>\\n22,<br>\\n2,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n36,<br>\\n18,<br>\\n0,<br>\\n20,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n37,<br>\\n22,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n38,<br>\\n12,<br>\\n0,<br>\\n23,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n39,<br>\\n12,<br>\\n0,<br>\\n25,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n40,<br>\\n12,<br>\\n0,<br>\\n27,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n41,<br>\\n29,<br>\\n0,<br>\\n8,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n42,<br>\\n8,<br>\\n0,<br>\\n30,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n43,<br>\\n30,<br>\\n0,<br>\\n9,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n44,<br>\\n16,<br>\\n0,<br>\\n30,<br>\\n1,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n45,<br>\\n18,<br>\\n0,<br>\\n30,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n46,<br>\\n7,<br>\\n0,<br>\\n30,<br>\\n3,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n47,<br>\\n29,<br>\\n0,<br>\\n30,<br>\\n4,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n48,<br>\\n31,<br>\\n0,<br>\\n30,<br>\\n5,<br>\\n\\"UPSCALE_MODEL\\"<br>\\n]<br>\\n],<br>\\n\\"groups\\": [],<br>\\n\\"config\\": {},<br>\\n\\"extra\\": {<br>\\n\\"ds\\": {<br>\\n\\"scale\\": 1.0834705943388407,<br>\\n\\"offset\\": [<br>\\n1509.6886193186463,<br>\\n272.7874502754775<br>\\n]<br>\\n},<br>\\n\\"0246.VERSION\\": [<br>\\n0,<br>\\n0,<br>\\n4<br>\\n]<br>\\n},<br>\\n\\"version\\": 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/组合工作流/批量照片转绘复古动漫风格（LoRA+ControlNet+UltimateSDUpscale）.json","value":{"title":"批量照片转绘复古动漫风格（LoRA+ControlNet+UltimateSDUpscale）.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/组合工作流/批量照片转绘复古动漫风格（LoRA+ControlNet+UltimateSDUpscale）.json","outlink":[],"backlink":[]}}],"links":[]}}}`);export{d as comp,m as data};

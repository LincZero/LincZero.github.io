import{_ as r,e as b,h as e,r as o,o as l}from"./app-DeGPQmv-.js";const t={};function s(a,i){const n=o("VueFlow");return l(),b("div",null,[e(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 47,
  "last_link_id": 83,
  "nodes": [
    {
      "id": 38,
      "type": "ControlNetLoader",
      "pos": [
        1460,
        680
      ],
      "size": {
        "0": 290,
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
            64
          ],
          "shape": 3,
          "label": "ControlNet"
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetLoader"
      },
      "widgets_values": [
        "control_v11p_sd15_canny.pth"
      ],
      "color": "#2a363b",
      "bgcolor": "#3f5159"
    },
    {
      "id": 4,
      "type": "GroundingDinoModelLoader (segment anything)",
      "pos": [
        950,
        80
      ],
      "size": {
        "0": 361.20001220703125,
        "1": 60
      },
      "flags": {
        "collapsed": false
      },
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "GROUNDING_DINO_MODEL",
          "type": "GROUNDING_DINO_MODEL",
          "links": [
            4
          ],
          "shape": 3,
          "slot_index": 0,
          "label": "G-Dino模型"
        }
      ],
      "properties": {
        "Node name for S&R": "GroundingDinoModelLoader (segment anything)"
      },
      "widgets_values": [
        "GroundingDINO_SwinB (938MB)"
      ],
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 31,
      "type": "PreviewImage",
      "pos": [
        1700,
        -30
      ],
      "size": {
        "0": 190,
        "1": 170
      },
      "flags": {},
      "order": 19,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 52,
          "label": "图像"
        }
      ],
      "properties": {
        "Node name for S&R": "PreviewImage"
      },
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 36,
      "type": "GrowMaskWithBlur",
      "pos": [
        1730,
        190
      ],
      "size": {
        "0": 315,
        "1": 246
      },
      "flags": {
        "collapsed": true
      },
      "order": 20,
      "mode": 0,
      "inputs": [
        {
          "name": "mask",
          "type": "MASK",
          "link": 58,
          "label": "遮罩"
        }
      ],
      "outputs": [
        {
          "name": "mask",
          "type": "MASK",
          "links": [
            59,
            60
          ],
          "shape": 3,
          "label": "遮罩",
          "slot_index": 0
        },
        {
          "name": "mask_inverted",
          "type": "MASK",
          "links": null,
          "shape": 3,
          "label": "反转遮罩"
        }
      ],
      "properties": {
        "Node name for S&R": "GrowMaskWithBlur"
      },
      "widgets_values": [
        20,
        0,
        true,
        false,
        10,
        1,
        1,
        false
      ],
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 32,
      "type": "MaskToImage",
      "pos": [
        1880,
        190
      ],
      "size": {
        "0": 210,
        "1": 26
      },
      "flags": {
        "collapsed": true
      },
      "order": 25,
      "mode": 0,
      "inputs": [
        {
          "name": "mask",
          "type": "MASK",
          "link": 60,
          "label": "遮罩"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            54
          ],
          "shape": 3,
          "label": "图像",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "MaskToImage"
      },
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 33,
      "type": "PreviewImage",
      "pos": [
        1910,
        -30
      ],
      "size": {
        "0": 200,
        "1": 170
      },
      "flags": {},
      "order": 27,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 54,
          "label": "图像"
        }
      ],
      "properties": {
        "Node name for S&R": "PreviewImage"
      },
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 15,
      "type": "KSampler",
      "pos": [
        2170,
        680
      ],
      "size": {
        "0": 315,
        "1": 474
      },
      "flags": {},
      "order": 29,
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
          "link": 69,
          "label": "正面条件",
          "slot_index": 1
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 42,
          "label": "负面条件",
          "slot_index": 2
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 34,
          "label": "Latent"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            45
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
        600714256530672,
        "randomize",
        20,
        8,
        "euler",
        "normal",
        0.7000000000000001
      ],
      "color": "#332922",
      "bgcolor": "#593930"
    },
    {
      "id": 2,
      "type": "CheckpointLoaderSimple",
      "pos": [
        250,
        910
      ],
      "size": {
        "0": 320,
        "1": 130
      },
      "flags": {},
      "order": 2,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            1
          ],
          "shape": 3,
          "label": "模型",
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            2
          ],
          "shape": 3,
          "label": "CLIP",
          "slot_index": 1
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            77
          ],
          "shape": 3,
          "label": "VAE",
          "slot_index": 2
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimple"
      },
      "widgets_values": [
        "Rev_Animated_V122.safetensors"
      ],
      "color": "#322",
      "bgcolor": "#533"
    },
    {
      "id": 26,
      "type": "CLIPTextEncode",
      "pos": [
        1510,
        1080
      ],
      "size": {
        "0": 400,
        "1": 100
      },
      "flags": {
        "collapsed": true
      },
      "order": 18,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 82,
          "label": "CLIP",
          "slot_index": 0
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            42
          ],
          "shape": 3,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "ugly, worst quality, embedding:BadDream, embedding:ng_deepnegative_v1_75t, "
      ],
      "color": "#222",
      "bgcolor": "#000"
    },
    {
      "id": 25,
      "type": "CLIPTextEncode",
      "pos": [
        1350,
        1080
      ],
      "size": {
        "0": 400,
        "1": 90
      },
      "flags": {
        "collapsed": true
      },
      "order": 21,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 81,
          "label": "CLIP",
          "slot_index": 0
        },
        {
          "name": "text",
          "type": "STRING",
          "link": 49,
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
            40
          ],
          "shape": 3,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        ""
      ],
      "color": "#222",
      "bgcolor": "#000"
    },
    {
      "id": 43,
      "type": "Reroute",
      "pos": [
        1260,
        1050
      ],
      "size": [
        75,
        26
      ],
      "flags": {},
      "order": 13,
      "mode": 0,
      "inputs": [
        {
          "name": "",
          "type": "*",
          "link": 83
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "CLIP",
          "links": [
            81,
            82
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "showOutputText": false,
        "horizontal": false
      },
      "color": "#222",
      "bgcolor": "#000"
    },
    {
      "id": 24,
      "type": "VAEEncode",
      "pos": [
        1200,
        340
      ],
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {
        "collapsed": true
      },
      "order": 14,
      "mode": 0,
      "inputs": [
        {
          "name": "pixels",
          "type": "IMAGE",
          "link": 57,
          "label": "图像"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 78,
          "label": "VAE"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            33
          ],
          "shape": 3,
          "label": "Latent",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEEncode"
      },
      "color": "#222",
      "bgcolor": "#000"
    },
    {
      "id": 5,
      "type": "GroundingDinoSAMSegment (segment anything)",
      "pos": [
        1330,
        -20
      ],
      "size": {
        "0": 350,
        "1": 160
      },
      "flags": {
        "collapsed": false
      },
      "order": 15,
      "mode": 0,
      "inputs": [
        {
          "name": "sam_model",
          "type": "SAM_MODEL",
          "link": 3,
          "label": "SAM模型"
        },
        {
          "name": "grounding_dino_model",
          "type": "GROUNDING_DINO_MODEL",
          "link": 4,
          "label": "G-Dino模型"
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 61,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            52
          ],
          "shape": 3,
          "slot_index": 0,
          "label": " 图像"
        },
        {
          "name": "MASK",
          "type": "MASK",
          "links": [
            58
          ],
          "shape": 3,
          "slot_index": 1,
          "label": "遮罩"
        }
      ],
      "properties": {
        "Node name for S&R": "GroundingDinoSAMSegment (segment anything)"
      },
      "widgets_values": [
        "a girl",
        0.1
      ],
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 40,
      "type": "CannyEdgePreprocessor",
      "pos": [
        1460,
        490
      ],
      "size": {
        "0": 280,
        "1": 110
      },
      "flags": {},
      "order": 23,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 76,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            72
          ],
          "shape": 3,
          "label": "图像",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CannyEdgePreprocessor"
      },
      "widgets_values": [
        100,
        200,
        512
      ],
      "color": "#2a363b",
      "bgcolor": "#3f5159"
    },
    {
      "id": 12,
      "type": "OpenposePreprocessor",
      "pos": [
        1140,
        490
      ],
      "size": {
        "0": 290,
        "1": 150
      },
      "flags": {},
      "order": 22,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 75,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            8
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
      ],
      "color": "#2a363b",
      "bgcolor": "#3f5159"
    },
    {
      "id": 10,
      "type": "ControlNetApply",
      "pos": [
        1140,
        780
      ],
      "size": {
        "0": 290,
        "1": 100
      },
      "flags": {},
      "order": 26,
      "mode": 0,
      "inputs": [
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 40,
          "label": "条件",
          "slot_index": 0
        },
        {
          "name": "control_net",
          "type": "CONTROL_NET",
          "link": 7,
          "label": "ControlNet",
          "slot_index": 1
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 8,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            68
          ],
          "shape": 3,
          "label": "条件",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetApply"
      },
      "widgets_values": [
        0.5
      ],
      "color": "#2a363b",
      "bgcolor": "#3f5159"
    },
    {
      "id": 11,
      "type": "ControlNetLoader",
      "pos": [
        1140,
        680
      ],
      "size": {
        "0": 290,
        "1": 60
      },
      "flags": {},
      "order": 3,
      "mode": 0,
      "outputs": [
        {
          "name": "CONTROL_NET",
          "type": "CONTROL_NET",
          "links": [
            7
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
      ],
      "color": "#2a363b",
      "bgcolor": "#3f5159"
    },
    {
      "id": 47,
      "type": "Note",
      "pos": [
        1140,
        920
      ],
      "size": {
        "0": 620,
        "1": 60
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "properties": {
        "text": ""
      },
      "widgets_values": [
        "默认只启用一个姿势识别的ControlNet，如果人物形体变得很不像，请适当调高右边的强度参数。"
      ],
      "color": "#2a363b",
      "bgcolor": "#3f5159"
    },
    {
      "id": 37,
      "type": "ControlNetApply",
      "pos": [
        1460,
        780
      ],
      "size": {
        "0": 290,
        "1": 100
      },
      "flags": {},
      "order": 28,
      "mode": 0,
      "inputs": [
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 68,
          "label": "条件",
          "slot_index": 0
        },
        {
          "name": "control_net",
          "type": "CONTROL_NET",
          "link": 64,
          "label": "ControlNet",
          "slot_index": 1
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 72,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            69
          ],
          "shape": 3,
          "label": "条件",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetApply"
      },
      "widgets_values": [
        0
      ],
      "color": "#2a363b",
      "bgcolor": "#3f5159"
    },
    {
      "id": 28,
      "type": "WD14Tagger|pysssss",
      "pos": [
        1090,
        1080
      ],
      "size": {
        "0": 315,
        "1": 220
      },
      "flags": {
        "collapsed": true
      },
      "order": 16,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 62,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "STRING",
          "type": "STRING",
          "links": [
            49
          ],
          "shape": 6,
          "label": "字符串",
          "slot_index": 0
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
        ""
      ],
      "color": "#222",
      "bgcolor": "#000"
    },
    {
      "id": 41,
      "type": "Reroute",
      "pos": [
        1050,
        460
      ],
      "size": [
        75,
        26
      ],
      "flags": {},
      "order": 17,
      "mode": 0,
      "inputs": [
        {
          "name": "",
          "type": "*",
          "link": 74
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "IMAGE",
          "links": [
            75,
            76
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "showOutputText": false,
        "horizontal": false
      },
      "color": "#2a363b",
      "bgcolor": "#3f5159"
    },
    {
      "id": 45,
      "type": "Note",
      "pos": [
        100,
        130
      ],
      "size": {
        "0": 630.0868530273438,
        "1": 58
      },
      "flags": {},
      "order": 5,
      "mode": 0,
      "properties": {
        "text": ""
      },
      "widgets_values": [
        "在此处上传图片，无需调节尺寸，会自动缩放到合适的区间内。"
      ],
      "color": "#223",
      "bgcolor": "#335"
    },
    {
      "id": 35,
      "type": "ImageResizeKJ",
      "pos": [
        420,
        230
      ],
      "size": {
        "0": 310,
        "1": 310
      },
      "flags": {},
      "order": 12,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 56,
          "label": "图像"
        },
        {
          "name": "get_image_size",
          "type": "IMAGE",
          "link": null,
          "label": "参考图像大小"
        },
        {
          "name": "width_input",
          "type": "INT",
          "link": null,
          "widget": {
            "name": "width_input"
          },
          "label": "宽度"
        },
        {
          "name": "height_input",
          "type": "INT",
          "link": null,
          "widget": {
            "name": "height_input"
          },
          "label": "高度"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            57,
            61,
            62,
            74
          ],
          "shape": 3,
          "label": "图像",
          "slot_index": 0
        },
        {
          "name": "width",
          "type": "INT",
          "links": null,
          "shape": 3,
          "label": "宽度"
        },
        {
          "name": "height",
          "type": "INT",
          "links": null,
          "shape": 3,
          "label": "高度"
        }
      ],
      "properties": {
        "Node name for S&R": "ImageResizeKJ"
      },
      "widgets_values": [
        768,
        768,
        "nearest-exact",
        true,
        2,
        0,
        0
      ],
      "color": "#223",
      "bgcolor": "#335"
    },
    {
      "id": 1,
      "type": "LoadImage",
      "pos": [
        100,
        230
      ],
      "size": [
        310,
        314
      ],
      "flags": {},
      "order": 6,
      "mode": 0,
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            56
          ],
          "shape": 3,
          "label": "图像",
          "slot_index": 0
        },
        {
          "name": "MASK",
          "type": "MASK",
          "links": null,
          "shape": 3,
          "label": "遮罩",
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "LoadImage"
      },
      "widgets_values": [
        "pexels-laro-pilartes-814205562-19255479.jpg",
        "image"
      ],
      "color": "#223",
      "bgcolor": "#335"
    },
    {
      "id": 44,
      "type": "Note",
      "pos": [
        250,
        800
      ],
      "size": {
        "0": 640,
        "1": 70
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "properties": {
        "text": ""
      },
      "widgets_values": [
        "先切换电脑上已经有的大模型，再启动工作流！"
      ],
      "color": "#322",
      "bgcolor": "#533"
    },
    {
      "id": 3,
      "type": "LoraLoader",
      "pos": [
        590,
        910
      ],
      "size": {
        "0": 300,
        "1": 130
      },
      "flags": {},
      "order": 10,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 1,
          "label": "模型"
        },
        {
          "name": "clip",
          "type": "CLIP",
          "link": 2,
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
            83
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
        "万物黏土化_V2.safetensors",
        0.8,
        0.8
      ],
      "color": "#322",
      "bgcolor": "#533"
    },
    {
      "id": 42,
      "type": "Reroute",
      "pos": [
        1090,
        310
      ],
      "size": [
        75,
        26
      ],
      "flags": {},
      "order": 11,
      "mode": 0,
      "inputs": [
        {
          "name": "",
          "type": "*",
          "link": 77
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "VAE",
          "links": [
            78,
            79
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "showOutputText": false,
        "horizontal": false
      },
      "color": "#222",
      "bgcolor": "#000"
    },
    {
      "id": 6,
      "type": "SAMModelLoader (segment anything)",
      "pos": [
        950,
        -20
      ],
      "size": {
        "0": 360,
        "1": 60
      },
      "flags": {
        "collapsed": false
      },
      "order": 8,
      "mode": 0,
      "outputs": [
        {
          "name": "SAM_MODEL",
          "type": "SAM_MODEL",
          "links": [
            3
          ],
          "shape": 3,
          "slot_index": 0,
          "label": "SAM模型"
        }
      ],
      "properties": {
        "Node name for S&R": "SAMModelLoader (segment anything)"
      },
      "widgets_values": [
        "sam_vit_b (375MB)"
      ],
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 46,
      "type": "Note",
      "pos": [
        950,
        180
      ],
      "size": {
        "0": 730,
        "1": 60
      },
      "flags": {},
      "order": 9,
      "mode": 0,
      "properties": {
        "text": ""
      },
      "widgets_values": [
        "如上传男生照片，请将语义分割节点中的提示词修改为“Boy”。"
      ],
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 13,
      "type": "SetLatentNoiseMask",
      "pos": [
        1870,
        530
      ],
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
          "link": 33,
          "label": "Latent"
        },
        {
          "name": "mask",
          "type": "MASK",
          "link": 59,
          "label": "遮罩"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            34
          ],
          "shape": 3,
          "label": "Latent",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "SetLatentNoiseMask"
      },
      "color": "#332922",
      "bgcolor": "#593930"
    },
    {
      "id": 27,
      "type": "VAEDecode",
      "pos": [
        1980,
        340
      ],
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {
        "collapsed": true
      },
      "order": 30,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 45,
          "label": "Latent",
          "slot_index": 0
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 79,
          "label": "VAE"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            44
          ],
          "shape": 3,
          "label": "图像"
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      },
      "color": "#222",
      "bgcolor": "#000"
    },
    {
      "id": 14,
      "type": "SaveImage",
      "pos": [
        2170,
        340
      ],
      "size": {
        "0": 320,
        "1": 290
      },
      "flags": {},
      "order": 31,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 44,
          "label": "图像",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "SaveImage"
      },
      "widgets_values": [
        "ComfyUI"
      ],
      "color": "#332922",
      "bgcolor": "#593930"
    }
  ],
  "links": [
    [
      1,
      2,
      0,
      3,
      0,
      "MODEL"
    ],
    [
      2,
      2,
      1,
      3,
      1,
      "CLIP"
    ],
    [
      3,
      6,
      0,
      5,
      0,
      "SAM_MODEL"
    ],
    [
      4,
      4,
      0,
      5,
      1,
      "GROUNDING_DINO_MODEL"
    ],
    [
      7,
      11,
      0,
      10,
      1,
      "CONTROL_NET"
    ],
    [
      8,
      12,
      0,
      10,
      2,
      "IMAGE"
    ],
    [
      33,
      24,
      0,
      13,
      0,
      "LATENT"
    ],
    [
      34,
      13,
      0,
      15,
      3,
      "LATENT"
    ],
    [
      38,
      3,
      0,
      15,
      0,
      "MODEL"
    ],
    [
      40,
      25,
      0,
      10,
      0,
      "CONDITIONING"
    ],
    [
      42,
      26,
      0,
      15,
      2,
      "CONDITIONING"
    ],
    [
      44,
      27,
      0,
      14,
      0,
      "IMAGE"
    ],
    [
      45,
      15,
      0,
      27,
      0,
      "LATENT"
    ],
    [
      49,
      28,
      0,
      25,
      1,
      "STRING"
    ],
    [
      52,
      5,
      0,
      31,
      0,
      "IMAGE"
    ],
    [
      54,
      32,
      0,
      33,
      0,
      "IMAGE"
    ],
    [
      56,
      1,
      0,
      35,
      0,
      "IMAGE"
    ],
    [
      57,
      35,
      0,
      24,
      0,
      "IMAGE"
    ],
    [
      58,
      5,
      1,
      36,
      0,
      "MASK"
    ],
    [
      59,
      36,
      0,
      13,
      1,
      "MASK"
    ],
    [
      60,
      36,
      0,
      32,
      0,
      "MASK"
    ],
    [
      61,
      35,
      0,
      5,
      2,
      "IMAGE"
    ],
    [
      62,
      35,
      0,
      28,
      0,
      "IMAGE"
    ],
    [
      64,
      38,
      0,
      37,
      1,
      "CONTROL_NET"
    ],
    [
      68,
      10,
      0,
      37,
      0,
      "CONDITIONING"
    ],
    [
      69,
      37,
      0,
      15,
      1,
      "CONDITIONING"
    ],
    [
      72,
      40,
      0,
      37,
      2,
      "IMAGE"
    ],
    [
      74,
      35,
      0,
      41,
      0,
      "*"
    ],
    [
      75,
      41,
      0,
      12,
      0,
      "IMAGE"
    ],
    [
      76,
      41,
      0,
      40,
      0,
      "IMAGE"
    ],
    [
      77,
      2,
      2,
      42,
      0,
      "*"
    ],
    [
      78,
      42,
      0,
      24,
      1,
      "VAE"
    ],
    [
      79,
      42,
      0,
      27,
      1,
      "VAE"
    ],
    [
      81,
      43,
      0,
      25,
      0,
      "CLIP"
    ],
    [
      82,
      43,
      0,
      26,
      0,
      "CLIP"
    ],
    [
      83,
      3,
      1,
      43,
      0,
      "*"
    ]
  ],
  "groups": [
    {
      "title": "ControlNet",
      "bounding": [
        1093,
        412,
        683,
        607
      ],
      "color": "#8AA",
      "font_size": 24,
      "locked": false
    },
    {
      "title": "上传图片",
      "bounding": [
        59,
        41,
        710,
        544
      ],
      "color": "#88A",
      "font_size": 24,
      "locked": false
    },
    {
      "title": "切换模型",
      "bounding": [
        201,
        693,
        755,
        397
      ],
      "color": "#A88",
      "font_size": 24,
      "locked": false
    },
    {
      "title": "SAM智能抠图",
      "bounding": [
        893,
        -121,
        1259,
        401
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
    ],
    "ds": {
      "scale": 0.9090909090909101,
      "offset": [
        55.313153533853274,
        171.0866500215475
      ]
    }
  },
  "version": 0.4
}
`})])}const d=r(t,[["render",s],["__file","基础工作流：黏土风照片生成器.json.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC4%E8%AF%BE/%E5%9F%BA%E7%A1%80%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%9A%E9%BB%8F%E5%9C%9F%E9%A3%8E%E7%85%A7%E7%89%87%E7%94%9F%E6%88%90%E5%99%A8.json.html","title":"基础工作流：黏土风照片生成器.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 47, \\"last_link_id\\": 83, \\"nodes\\": [ { \\"id\\": 38, \\"type\\": \\"ControlNetLoader\\", \\"pos\\": [ 1460, 680 ], \\"size\\": { \\"0\\": 290, \\"1\\": 60 }, \\"flags\\": {}, \\"order\\": 0, \\"mode\\"...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC4%E8%AF%BE/%E5%9F%BA%E7%A1%80%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%9A%E9%BB%8F%E5%9C%9F%E9%A3%8E%E7%85%A7%E7%89%87%E7%94%9F%E6%88%90%E5%99%A8.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 47, \\"last_link_id\\": 83, \\"nodes\\": [ { \\"id\\": 38, \\"type\\": \\"ControlNetLoader\\", \\"pos\\": [ 1460, 680 ], \\"size\\": { \\"0\\": 290, \\"1\\": 60 }, \\"flags\\": {}, \\"order\\": 0, \\"mode\\"..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"git":{},"readingTime":{"minutes":7.4,"words":2220},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第4课/基础工作流：黏土风照片生成器.json","excerpt":"<p>{<br>\\n\\"last_node_id\\": 47,<br>\\n\\"last_link_id\\": 83,<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": 38,<br>\\n\\"type\\": \\"ControlNetLoader\\",<br>\\n\\"pos\\": [<br>\\n1460,<br>\\n680<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 290,<br>\\n\\"1\\": 60<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 0,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONTROL_NET\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"links\\": [<br>\\n64<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"ControlNet\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"control_v11p_sd15_canny.pth\\"<br>\\n],<br>\\n\\"color\\": \\"#2a363b\\",<br>\\n\\"bgcolor\\": \\"#3f5159\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 4,<br>\\n\\"type\\": \\"GroundingDinoModelLoader (segment anything)\\",<br>\\n\\"pos\\": [<br>\\n950,<br>\\n80<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 361.20001220703125,<br>\\n\\"1\\": 60<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": false<br>\\n},<br>\\n\\"order\\": 1,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"GROUNDING_DINO_MODEL\\",<br>\\n\\"type\\": \\"GROUNDING_DINO_MODEL\\",<br>\\n\\"links\\": [<br>\\n4<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"G-Dino模型\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"GroundingDinoModelLoader (segment anything)\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"GroundingDINO_SwinB (938MB)\\"<br>\\n],<br>\\n\\"color\\": \\"#232\\",<br>\\n\\"bgcolor\\": \\"#353\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 31,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n1700,<br>\\n-30<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 190,<br>\\n\\"1\\": 170<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 19,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 52,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n},<br>\\n\\"color\\": \\"#232\\",<br>\\n\\"bgcolor\\": \\"#353\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 36,<br>\\n\\"type\\": \\"GrowMaskWithBlur\\",<br>\\n\\"pos\\": [<br>\\n1730,<br>\\n190<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 246<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 20,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"mask\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"link\\": 58,<br>\\n\\"label\\": \\"遮罩\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"mask\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": [<br>\\n59,<br>\\n60<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"遮罩\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"mask_inverted\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"反转遮罩\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"GrowMaskWithBlur\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n20,<br>\\n0,<br>\\ntrue,<br>\\nfalse,<br>\\n10,<br>\\n1,<br>\\n1,<br>\\nfalse<br>\\n],<br>\\n\\"color\\": \\"#232\\",<br>\\n\\"bgcolor\\": \\"#353\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 32,<br>\\n\\"type\\": \\"MaskToImage\\",<br>\\n\\"pos\\": [<br>\\n1880,<br>\\n190<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 26<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 25,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"mask\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"link\\": 60,<br>\\n\\"label\\": \\"遮罩\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n54<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"MaskToImage\\"<br>\\n},<br>\\n\\"color\\": \\"#232\\",<br>\\n\\"bgcolor\\": \\"#353\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 33,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n1910,<br>\\n-30<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 200,<br>\\n\\"1\\": 170<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 27,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 54,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n},<br>\\n\\"color\\": \\"#232\\",<br>\\n\\"bgcolor\\": \\"#353\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 15,<br>\\n\\"type\\": \\"KSampler\\",<br>\\n\\"pos\\": [<br>\\n2170,<br>\\n680<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 474<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 29,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 38,<br>\\n\\"label\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 69,<br>\\n\\"label\\": \\"正面条件\\",<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 42,<br>\\n\\"label\\": \\"负面条件\\",<br>\\n\\"slot_index\\": 2<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 34,<br>\\n\\"label\\": \\"Latent\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n45<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"Latent\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n600714256530672,<br>\\n\\"randomize\\",<br>\\n20,<br>\\n8,<br>\\n\\"euler\\",<br>\\n\\"normal\\",<br>\\n0.7000000000000001<br>\\n],<br>\\n\\"color\\": \\"#332922\\",<br>\\n\\"bgcolor\\": \\"#593930\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 2,<br>\\n\\"type\\": \\"CheckpointLoaderSimple\\",<br>\\n\\"pos\\": [<br>\\n250,<br>\\n910<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 320,<br>\\n\\"1\\": 130<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 2,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n1<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"模型\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n2<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"CLIP\\",<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n77<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"VAE\\",<br>\\n\\"slot_index\\": 2<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"Rev_Animated_V122.safetensors\\"<br>\\n],<br>\\n\\"color\\": \\"#322\\",<br>\\n\\"bgcolor\\": \\"#533\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 26,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n1510,<br>\\n1080<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 400,<br>\\n\\"1\\": 100<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 18,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 82,<br>\\n\\"label\\": \\"CLIP\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n42<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"ugly, worst quality, embedding:BadDream, embedding:ng_deepnegative_v1_75t, \\"<br>\\n],<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 25,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n1350,<br>\\n1080<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 400,<br>\\n\\"1\\": 90<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 21,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 81,<br>\\n\\"label\\": \\"CLIP\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"text\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 49,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text\\"<br>\\n},<br>\\n\\"label\\": \\"文本\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n40<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"\\"<br>\\n],<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 43,<br>\\n\\"type\\": \\"Reroute\\",<br>\\n\\"pos\\": [<br>\\n1260,<br>\\n1050<br>\\n],<br>\\n\\"size\\": [<br>\\n75,<br>\\n26<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 13,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"<em>\\",<br>\\n\\"link\\": 83<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n81,<br>\\n82<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"showOutputText\\": false,<br>\\n\\"horizontal\\": false<br>\\n},<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 24,<br>\\n\\"type\\": \\"VAEEncode\\",<br>\\n\\"pos\\": [<br>\\n1200,<br>\\n340<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 46<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 14,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"pixels\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 57,<br>\\n\\"label\\": \\"图像\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 78,<br>\\n\\"label\\": \\"VAE\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n33<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"Latent\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEEncode\\"<br>\\n},<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 5,<br>\\n\\"type\\": \\"GroundingDinoSAMSegment (segment anything)\\",<br>\\n\\"pos\\": [<br>\\n1330,<br>\\n-20<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 350,<br>\\n\\"1\\": 160<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": false<br>\\n},<br>\\n\\"order\\": 15,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"sam_model\\",<br>\\n\\"type\\": \\"SAM_MODEL\\",<br>\\n\\"link\\": 3,<br>\\n\\"label\\": \\"SAM模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"grounding_dino_model\\",<br>\\n\\"type\\": \\"GROUNDING_DINO_MODEL\\",<br>\\n\\"link\\": 4,<br>\\n\\"label\\": \\"G-Dino模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 61,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n52<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\" 图像\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": [<br>\\n58<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1,<br>\\n\\"label\\": \\"遮罩\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"GroundingDinoSAMSegment (segment anything)\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"a girl\\",<br>\\n0.1<br>\\n],<br>\\n\\"color\\": \\"#232\\",<br>\\n\\"bgcolor\\": \\"#353\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 40,<br>\\n\\"type\\": \\"CannyEdgePreprocessor\\",<br>\\n\\"pos\\": [<br>\\n1460,<br>\\n490<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 280,<br>\\n\\"1\\": 110<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 23,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 76,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n72<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CannyEdgePreprocessor\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n100,<br>\\n200,<br>\\n512<br>\\n],<br>\\n\\"color\\": \\"#2a363b\\",<br>\\n\\"bgcolor\\": \\"#3f5159\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 12,<br>\\n\\"type\\": \\"OpenposePreprocessor\\",<br>\\n\\"pos\\": [<br>\\n1140,<br>\\n490<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 290,<br>\\n\\"1\\": 150<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 22,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 75,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n8<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"POSE_KEYPOINT\\",<br>\\n\\"type\\": \\"POSE_KEYPOINT\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"姿态关键点\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"OpenposePreprocessor\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"enable\\",<br>\\n\\"enable\\",<br>\\n\\"enable\\",<br>\\n512<br>\\n],<br>\\n\\"color\\": \\"#2a363b\\",<br>\\n\\"bgcolor\\": \\"#3f5159\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 10,<br>\\n\\"type\\": \\"ControlNetApply\\",<br>\\n\\"pos\\": [<br>\\n1140,<br>\\n780<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 290,<br>\\n\\"1\\": 100<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 26,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"conditioning\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 40,<br>\\n\\"label\\": \\"条件\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"control_net\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"link\\": 7,<br>\\n\\"label\\": \\"ControlNet\\",<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 8,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n68<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"条件\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetApply\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n0.5<br>\\n],<br>\\n\\"color\\": \\"#2a363b\\",<br>\\n\\"bgcolor\\": \\"#3f5159\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 11,<br>\\n\\"type\\": \\"ControlNetLoader\\",<br>\\n\\"pos\\": [<br>\\n1140,<br>\\n680<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 290,<br>\\n\\"1\\": 60<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONTROL_NET\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"links\\": [<br>\\n7<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"ControlNet\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"control_v11p_sd15_openpose.pth\\"<br>\\n],<br>\\n\\"color\\": \\"#2a363b\\",<br>\\n\\"bgcolor\\": \\"#3f5159\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 47,<br>\\n\\"type\\": \\"Note\\",<br>\\n\\"pos\\": [<br>\\n1140,<br>\\n920<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 620,<br>\\n\\"1\\": 60<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"properties\\": {<br>\\n\\"text\\": \\"\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"默认只启用一个姿势识别的ControlNet，如果人物形体变得很不像，请适当调高右边的强度参数。\\"<br>\\n],<br>\\n\\"color\\": \\"#2a363b\\",<br>\\n\\"bgcolor\\": \\"#3f5159\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 37,<br>\\n\\"type\\": \\"ControlNetApply\\",<br>\\n\\"pos\\": [<br>\\n1460,<br>\\n780<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 290,<br>\\n\\"1\\": 100<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 28,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"conditioning\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 68,<br>\\n\\"label\\": \\"条件\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"control_net\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"link\\": 64,<br>\\n\\"label\\": \\"ControlNet\\",<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 72,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n69<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"条件\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetApply\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n0<br>\\n],<br>\\n\\"color\\": \\"#2a363b\\",<br>\\n\\"bgcolor\\": \\"#3f5159\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 28,<br>\\n\\"type\\": \\"WD14Tagger|pysssss\\",<br>\\n\\"pos\\": [<br>\\n1090,<br>\\n1080<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 220<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 16,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 62,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"STRING\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n49<br>\\n],<br>\\n\\"shape\\": 6,<br>\\n\\"label\\": \\"字符串\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"WD14Tagger|pysssss\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"wd-v1-4-moat-tagger-v2\\",<br>\\n0.35,<br>\\n0.85,<br>\\nfalse,<br>\\nfalse,<br>\\n\\"\\"<br>\\n],<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 41,<br>\\n\\"type\\": \\"Reroute\\",<br>\\n\\"pos\\": [<br>\\n1050,<br>\\n460<br>\\n],<br>\\n\\"size\\": [<br>\\n75,<br>\\n26<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 17,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"</em>\\",<br>\\n\\"link\\": 74<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n75,<br>\\n76<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"showOutputText\\": false,<br>\\n\\"horizontal\\": false<br>\\n},<br>\\n\\"color\\": \\"#2a363b\\",<br>\\n\\"bgcolor\\": \\"#3f5159\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 45,<br>\\n\\"type\\": \\"Note\\",<br>\\n\\"pos\\": [<br>\\n100,<br>\\n130<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 630.0868530273438,<br>\\n\\"1\\": 58<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 5,<br>\\n\\"mode\\": 0,<br>\\n\\"properties\\": {<br>\\n\\"text\\": \\"\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"在此处上传图片，无需调节尺寸，会自动缩放到合适的区间内。\\"<br>\\n],<br>\\n\\"color\\": \\"#223\\",<br>\\n\\"bgcolor\\": \\"#335\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 35,<br>\\n\\"type\\": \\"ImageResizeKJ\\",<br>\\n\\"pos\\": [<br>\\n420,<br>\\n230<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 310,<br>\\n\\"1\\": 310<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 12,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 56,<br>\\n\\"label\\": \\"图像\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"get_image_size\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": null,<br>\\n\\"label\\": \\"参考图像大小\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"width_input\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"link\\": null,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"width_input\\"<br>\\n},<br>\\n\\"label\\": \\"宽度\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"height_input\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"link\\": null,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"height_input\\"<br>\\n},<br>\\n\\"label\\": \\"高度\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n57,<br>\\n61,<br>\\n62,<br>\\n74<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"width\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"宽度\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"height\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"高度\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ImageResizeKJ\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n768,<br>\\n768,<br>\\n\\"nearest-exact\\",<br>\\ntrue,<br>\\n2,<br>\\n0,<br>\\n0<br>\\n],<br>\\n\\"color\\": \\"#223\\",<br>\\n\\"bgcolor\\": \\"#335\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 1,<br>\\n\\"type\\": \\"LoadImage\\",<br>\\n\\"pos\\": [<br>\\n100,<br>\\n230<br>\\n],<br>\\n\\"size\\": [<br>\\n310,<br>\\n314<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n56<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"遮罩\\",<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"pexels-laro-pilartes-814205562-19255479.jpg\\",<br>\\n\\"image\\"<br>\\n],<br>\\n\\"color\\": \\"#223\\",<br>\\n\\"bgcolor\\": \\"#335\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 44,<br>\\n\\"type\\": \\"Note\\",<br>\\n\\"pos\\": [<br>\\n250,<br>\\n800<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 640,<br>\\n\\"1\\": 70<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 7,<br>\\n\\"mode\\": 0,<br>\\n\\"properties\\": {<br>\\n\\"text\\": \\"\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"先切换电脑上已经有的大模型，再启动工作流！\\"<br>\\n],<br>\\n\\"color\\": \\"#322\\",<br>\\n\\"bgcolor\\": \\"#533\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 3,<br>\\n\\"type\\": \\"LoraLoader\\",<br>\\n\\"pos\\": [<br>\\n590,<br>\\n910<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 300,<br>\\n\\"1\\": 130<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 10,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 1,<br>\\n\\"label\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 2,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n38<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"模型\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n83<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"CLIP\\",<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LoraLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"万物黏土化_V2.safetensors\\",<br>\\n0.8,<br>\\n0.8<br>\\n],<br>\\n\\"color\\": \\"#322\\",<br>\\n\\"bgcolor\\": \\"#533\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 42,<br>\\n\\"type\\": \\"Reroute\\",<br>\\n\\"pos\\": [<br>\\n1090,<br>\\n310<br>\\n],<br>\\n\\"size\\": [<br>\\n75,<br>\\n26<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 11,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"<em>\\",<br>\\n\\"link\\": 77<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n78,<br>\\n79<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"showOutputText\\": false,<br>\\n\\"horizontal\\": false<br>\\n},<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 6,<br>\\n\\"type\\": \\"SAMModelLoader (segment anything)\\",<br>\\n\\"pos\\": [<br>\\n950,<br>\\n-20<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 360,<br>\\n\\"1\\": 60<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": false<br>\\n},<br>\\n\\"order\\": 8,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"SAM_MODEL\\",<br>\\n\\"type\\": \\"SAM_MODEL\\",<br>\\n\\"links\\": [<br>\\n3<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"SAM模型\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"SAMModelLoader (segment anything)\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"sam_vit_b (375MB)\\"<br>\\n],<br>\\n\\"color\\": \\"#232\\",<br>\\n\\"bgcolor\\": \\"#353\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 46,<br>\\n\\"type\\": \\"Note\\",<br>\\n\\"pos\\": [<br>\\n950,<br>\\n180<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 730,<br>\\n\\"1\\": 60<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 9,<br>\\n\\"mode\\": 0,<br>\\n\\"properties\\": {<br>\\n\\"text\\": \\"\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"如上传男生照片，请将语义分割节点中的提示词修改为“Boy”。\\"<br>\\n],<br>\\n\\"color\\": \\"#232\\",<br>\\n\\"bgcolor\\": \\"#353\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 13,<br>\\n\\"type\\": \\"SetLatentNoiseMask\\",<br>\\n\\"pos\\": [<br>\\n1870,<br>\\n530<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 46<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 24,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 33,<br>\\n\\"label\\": \\"Latent\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"mask\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"link\\": 59,<br>\\n\\"label\\": \\"遮罩\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n34<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"Latent\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"SetLatentNoiseMask\\"<br>\\n},<br>\\n\\"color\\": \\"#332922\\",<br>\\n\\"bgcolor\\": \\"#593930\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 27,<br>\\n\\"type\\": \\"VAEDecode\\",<br>\\n\\"pos\\": [<br>\\n1980,<br>\\n340<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 46<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 30,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 45,<br>\\n\\"label\\": \\"Latent\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 79,<br>\\n\\"label\\": \\"VAE\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n44<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"<br>\\n},<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 14,<br>\\n\\"type\\": \\"SaveImage\\",<br>\\n\\"pos\\": [<br>\\n2170,<br>\\n340<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 320,<br>\\n\\"1\\": 290<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 31,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 44,<br>\\n\\"label\\": \\"图像\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"SaveImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"ComfyUI\\"<br>\\n],<br>\\n\\"color\\": \\"#332922\\",<br>\\n\\"bgcolor\\": \\"#593930\\"<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\n1,<br>\\n2,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n2,<br>\\n2,<br>\\n1,<br>\\n3,<br>\\n1,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n3,<br>\\n6,<br>\\n0,<br>\\n5,<br>\\n0,<br>\\n\\"SAM_MODEL\\"<br>\\n],<br>\\n[<br>\\n4,<br>\\n4,<br>\\n0,<br>\\n5,<br>\\n1,<br>\\n\\"GROUNDING_DINO_MODEL\\"<br>\\n],<br>\\n[<br>\\n7,<br>\\n11,<br>\\n0,<br>\\n10,<br>\\n1,<br>\\n\\"CONTROL_NET\\"<br>\\n],<br>\\n[<br>\\n8,<br>\\n12,<br>\\n0,<br>\\n10,<br>\\n2,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n33,<br>\\n24,<br>\\n0,<br>\\n13,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n34,<br>\\n13,<br>\\n0,<br>\\n15,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n38,<br>\\n3,<br>\\n0,<br>\\n15,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n40,<br>\\n25,<br>\\n0,<br>\\n10,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n42,<br>\\n26,<br>\\n0,<br>\\n15,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n44,<br>\\n27,<br>\\n0,<br>\\n14,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n45,<br>\\n15,<br>\\n0,<br>\\n27,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n49,<br>\\n28,<br>\\n0,<br>\\n25,<br>\\n1,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n52,<br>\\n5,<br>\\n0,<br>\\n31,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n54,<br>\\n32,<br>\\n0,<br>\\n33,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n56,<br>\\n1,<br>\\n0,<br>\\n35,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n57,<br>\\n35,<br>\\n0,<br>\\n24,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n58,<br>\\n5,<br>\\n1,<br>\\n36,<br>\\n0,<br>\\n\\"MASK\\"<br>\\n],<br>\\n[<br>\\n59,<br>\\n36,<br>\\n0,<br>\\n13,<br>\\n1,<br>\\n\\"MASK\\"<br>\\n],<br>\\n[<br>\\n60,<br>\\n36,<br>\\n0,<br>\\n32,<br>\\n0,<br>\\n\\"MASK\\"<br>\\n],<br>\\n[<br>\\n61,<br>\\n35,<br>\\n0,<br>\\n5,<br>\\n2,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n62,<br>\\n35,<br>\\n0,<br>\\n28,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n64,<br>\\n38,<br>\\n0,<br>\\n37,<br>\\n1,<br>\\n\\"CONTROL_NET\\"<br>\\n],<br>\\n[<br>\\n68,<br>\\n10,<br>\\n0,<br>\\n37,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n69,<br>\\n37,<br>\\n0,<br>\\n15,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n72,<br>\\n40,<br>\\n0,<br>\\n37,<br>\\n2,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n74,<br>\\n35,<br>\\n0,<br>\\n41,<br>\\n0,<br>\\n\\"</em>\\"<br>\\n],<br>\\n[<br>\\n75,<br>\\n41,<br>\\n0,<br>\\n12,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n76,<br>\\n41,<br>\\n0,<br>\\n40,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n77,<br>\\n2,<br>\\n2,<br>\\n42,<br>\\n0,<br>\\n\\"<em>\\"<br>\\n],<br>\\n[<br>\\n78,<br>\\n42,<br>\\n0,<br>\\n24,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n79,<br>\\n42,<br>\\n0,<br>\\n27,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n81,<br>\\n43,<br>\\n0,<br>\\n25,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n82,<br>\\n43,<br>\\n0,<br>\\n26,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n83,<br>\\n3,<br>\\n1,<br>\\n43,<br>\\n0,<br>\\n\\"</em>\\"<br>\\n]<br>\\n],<br>\\n\\"groups\\": [<br>\\n{<br>\\n\\"title\\": \\"ControlNet\\",<br>\\n\\"bounding\\": [<br>\\n1093,<br>\\n412,<br>\\n683,<br>\\n607<br>\\n],<br>\\n\\"color\\": \\"#8AA\\",<br>\\n\\"font_size\\": 24,<br>\\n\\"locked\\": false<br>\\n},<br>\\n{<br>\\n\\"title\\": \\"上传图片\\",<br>\\n\\"bounding\\": [<br>\\n59,<br>\\n41,<br>\\n710,<br>\\n544<br>\\n],<br>\\n\\"color\\": \\"#88A\\",<br>\\n\\"font_size\\": 24,<br>\\n\\"locked\\": false<br>\\n},<br>\\n{<br>\\n\\"title\\": \\"切换模型\\",<br>\\n\\"bounding\\": [<br>\\n201,<br>\\n693,<br>\\n755,<br>\\n397<br>\\n],<br>\\n\\"color\\": \\"#A88\\",<br>\\n\\"font_size\\": 24,<br>\\n\\"locked\\": false<br>\\n},<br>\\n{<br>\\n\\"title\\": \\"SAM智能抠图\\",<br>\\n\\"bounding\\": [<br>\\n893,<br>\\n-121,<br>\\n1259,<br>\\n401<br>\\n],<br>\\n\\"color\\": \\"#8A8\\",<br>\\n\\"font_size\\": 24,<br>\\n\\"locked\\": false<br>\\n}<br>\\n],<br>\\n\\"config\\": {},<br>\\n\\"extra\\": {<br>\\n\\"0246.VERSION\\": [<br>\\n0,<br>\\n0,<br>\\n4<br>\\n],<br>\\n\\"ds\\": {<br>\\n\\"scale\\": 0.9090909090909101,<br>\\n\\"offset\\": [<br>\\n55.313153533853274,<br>\\n171.0866500215475<br>\\n]<br>\\n}<br>\\n},<br>\\n\\"version\\": 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第4课/基础工作流：黏土风照片生成器.json","value":{"title":"基础工作流：黏土风照片生成器.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第4课/基础工作流：黏土风照片生成器.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{d as comp,m as data};

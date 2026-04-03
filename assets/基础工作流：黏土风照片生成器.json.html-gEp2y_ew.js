import{_ as o,c as t,b as u,r as q,o as r}from"./app-evNTgste.js";const b={};function e(l,s){const n=q("VueFlow");return r(),t("div",null,[u(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const i=o(b,[["render",e]]),p=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC4%E8%AF%BE/%E5%9F%BA%E7%A1%80%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%9A%E9%BB%8F%E5%9C%9F%E9%A3%8E%E7%85%A7%E7%89%87%E7%94%9F%E6%88%90%E5%99%A8.json.html","title":"基础工作流：黏土风照片生成器.json","lang":"zh-CN","frontmatter":{"description":"{ &quot;last_node_id&quot;: 47, &quot;last_link_id&quot;: 83, &quot;nodes&quot;: [ { &quot;id&quot;: 38, &quot;type&quot;: &quot;ControlNetLoader&quot;, &quot;pos&quot;: [ 1460,...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC4%E8%AF%BE/%E5%9F%BA%E7%A1%80%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%9A%E9%BB%8F%E5%9C%9F%E9%A3%8E%E7%85%A7%E7%89%87%E7%94%9F%E6%88%90%E5%99%A8.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ &quot;last_node_id&quot;: 47, &quot;last_link_id&quot;: 83, &quot;nodes&quot;: [ { &quot;id&quot;: 38, &quot;type&quot;: &quot;ControlNetLoader&quot;, &quot;pos&quot;: [ 1460,..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"layout":"Layout"},"git":{},"readingTime":{"minutes":7.4,"words":2220},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第4课/基础工作流：黏土风照片生成器.json","excerpt":"<p>{<br>\\n&quot;last_node_id&quot;: 47,<br>\\n&quot;last_link_id&quot;: 83,<br>\\n&quot;nodes&quot;: [<br>\\n{<br>\\n&quot;id&quot;: 38,<br>\\n&quot;type&quot;: &quot;ControlNetLoader&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1460,<br>\\n680<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 290,<br>\\n&quot;1&quot;: 60<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 0,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONTROL_NET&quot;,<br>\\n&quot;type&quot;: &quot;CONTROL_NET&quot;,<br>\\n&quot;links&quot;: [<br>\\n64<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;ControlNet&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ControlNetLoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;control_v11p_sd15_canny.pth&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#2a363b&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#3f5159&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 4,<br>\\n&quot;type&quot;: &quot;GroundingDinoModelLoader (segment anything)&quot;,<br>\\n&quot;pos&quot;: [<br>\\n950,<br>\\n80<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 361.20001220703125,<br>\\n&quot;1&quot;: 60<br>\\n},<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: false<br>\\n},<br>\\n&quot;order&quot;: 1,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;GROUNDING_DINO_MODEL&quot;,<br>\\n&quot;type&quot;: &quot;GROUNDING_DINO_MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n4<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;G-Dino模型&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;GroundingDinoModelLoader (segment anything)&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;GroundingDINO_SwinB (938MB)&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#232&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#353&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 31,<br>\\n&quot;type&quot;: &quot;PreviewImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1700,<br>\\n-30<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 190,<br>\\n&quot;1&quot;: 170<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 19,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 52,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;PreviewImage&quot;<br>\\n},<br>\\n&quot;color&quot;: &quot;#232&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#353&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 36,<br>\\n&quot;type&quot;: &quot;GrowMaskWithBlur&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1730,<br>\\n190<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 246<br>\\n},<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: true<br>\\n},<br>\\n&quot;order&quot;: 20,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;mask&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;link&quot;: 58,<br>\\n&quot;label&quot;: &quot;遮罩&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;mask&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: [<br>\\n59,<br>\\n60<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;遮罩&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;mask_inverted&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;反转遮罩&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;GrowMaskWithBlur&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n20,<br>\\n0,<br>\\ntrue,<br>\\nfalse,<br>\\n10,<br>\\n1,<br>\\n1,<br>\\nfalse<br>\\n],<br>\\n&quot;color&quot;: &quot;#232&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#353&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 32,<br>\\n&quot;type&quot;: &quot;MaskToImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1880,<br>\\n190<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 26<br>\\n},<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: true<br>\\n},<br>\\n&quot;order&quot;: 25,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;mask&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;link&quot;: 60,<br>\\n&quot;label&quot;: &quot;遮罩&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n54<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;图像&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;MaskToImage&quot;<br>\\n},<br>\\n&quot;color&quot;: &quot;#232&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#353&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 33,<br>\\n&quot;type&quot;: &quot;PreviewImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1910,<br>\\n-30<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 200,<br>\\n&quot;1&quot;: 170<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 27,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 54,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;PreviewImage&quot;<br>\\n},<br>\\n&quot;color&quot;: &quot;#232&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#353&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 15,<br>\\n&quot;type&quot;: &quot;KSampler&quot;,<br>\\n&quot;pos&quot;: [<br>\\n2170,<br>\\n680<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 474<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 29,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 38,<br>\\n&quot;label&quot;: &quot;模型&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 69,<br>\\n&quot;label&quot;: &quot;正面条件&quot;,<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 42,<br>\\n&quot;label&quot;: &quot;负面条件&quot;,<br>\\n&quot;slot_index&quot;: 2<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 34,<br>\\n&quot;label&quot;: &quot;Latent&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n45<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;Latent&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;KSampler&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n600714256530672,<br>\\n&quot;randomize&quot;,<br>\\n20,<br>\\n8,<br>\\n&quot;euler&quot;,<br>\\n&quot;normal&quot;,<br>\\n0.7000000000000001<br>\\n],<br>\\n&quot;color&quot;: &quot;#332922&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#593930&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 2,<br>\\n&quot;type&quot;: &quot;CheckpointLoaderSimple&quot;,<br>\\n&quot;pos&quot;: [<br>\\n250,<br>\\n910<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 320,<br>\\n&quot;1&quot;: 130<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 2,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n1<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;模型&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [<br>\\n2<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;CLIP&quot;,<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;VAE&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;links&quot;: [<br>\\n77<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;VAE&quot;,<br>\\n&quot;slot_index&quot;: 2<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CheckpointLoaderSimple&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;Rev_Animated_V122.safetensors&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#322&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#533&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 26,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1510,<br>\\n1080<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 400,<br>\\n&quot;1&quot;: 100<br>\\n},<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: true<br>\\n},<br>\\n&quot;order&quot;: 18,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 82,<br>\\n&quot;label&quot;: &quot;CLIP&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n42<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;条件&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;ugly, worst quality, embedding:BadDream, embedding:ng_deepnegative_v1_75t, &quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#222&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#000&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 25,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1350,<br>\\n1080<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 400,<br>\\n&quot;1&quot;: 90<br>\\n},<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: true<br>\\n},<br>\\n&quot;order&quot;: 21,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 81,<br>\\n&quot;label&quot;: &quot;CLIP&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;text&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;link&quot;: 49,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;text&quot;<br>\\n},<br>\\n&quot;label&quot;: &quot;文本&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n40<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;条件&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#222&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#000&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 43,<br>\\n&quot;type&quot;: &quot;Reroute&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1260,<br>\\n1050<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n75,<br>\\n26<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 13,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;&quot;,<br>\\n&quot;type&quot;: &quot;<em>&quot;,<br>\\n&quot;link&quot;: 83<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [<br>\\n81,<br>\\n82<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;showOutputText&quot;: false,<br>\\n&quot;horizontal&quot;: false<br>\\n},<br>\\n&quot;color&quot;: &quot;#222&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#000&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 24,<br>\\n&quot;type&quot;: &quot;VAEEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1200,<br>\\n340<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 46<br>\\n},<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: true<br>\\n},<br>\\n&quot;order&quot;: 14,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;pixels&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 57,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 78,<br>\\n&quot;label&quot;: &quot;VAE&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n33<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;Latent&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEEncode&quot;<br>\\n},<br>\\n&quot;color&quot;: &quot;#222&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#000&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 5,<br>\\n&quot;type&quot;: &quot;GroundingDinoSAMSegment (segment anything)&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1330,<br>\\n-20<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 350,<br>\\n&quot;1&quot;: 160<br>\\n},<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: false<br>\\n},<br>\\n&quot;order&quot;: 15,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;sam_model&quot;,<br>\\n&quot;type&quot;: &quot;SAM_MODEL&quot;,<br>\\n&quot;link&quot;: 3,<br>\\n&quot;label&quot;: &quot;SAM模型&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;grounding_dino_model&quot;,<br>\\n&quot;type&quot;: &quot;GROUNDING_DINO_MODEL&quot;,<br>\\n&quot;link&quot;: 4,<br>\\n&quot;label&quot;: &quot;G-Dino模型&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 61,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n52<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot; 图像&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;MASK&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: [<br>\\n58<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 1,<br>\\n&quot;label&quot;: &quot;遮罩&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;GroundingDinoSAMSegment (segment anything)&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;a girl&quot;,<br>\\n0.1<br>\\n],<br>\\n&quot;color&quot;: &quot;#232&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#353&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 40,<br>\\n&quot;type&quot;: &quot;CannyEdgePreprocessor&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1460,<br>\\n490<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 280,<br>\\n&quot;1&quot;: 110<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 23,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 76,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n72<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;图像&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CannyEdgePreprocessor&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n100,<br>\\n200,<br>\\n512<br>\\n],<br>\\n&quot;color&quot;: &quot;#2a363b&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#3f5159&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 12,<br>\\n&quot;type&quot;: &quot;OpenposePreprocessor&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1140,<br>\\n490<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 290,<br>\\n&quot;1&quot;: 150<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 22,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 75,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n8<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;图像&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;POSE_KEYPOINT&quot;,<br>\\n&quot;type&quot;: &quot;POSE_KEYPOINT&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;姿态关键点&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;OpenposePreprocessor&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;enable&quot;,<br>\\n&quot;enable&quot;,<br>\\n&quot;enable&quot;,<br>\\n512<br>\\n],<br>\\n&quot;color&quot;: &quot;#2a363b&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#3f5159&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 10,<br>\\n&quot;type&quot;: &quot;ControlNetApply&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1140,<br>\\n780<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 290,<br>\\n&quot;1&quot;: 100<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 26,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;conditioning&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 40,<br>\\n&quot;label&quot;: &quot;条件&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;control_net&quot;,<br>\\n&quot;type&quot;: &quot;CONTROL_NET&quot;,<br>\\n&quot;link&quot;: 7,<br>\\n&quot;label&quot;: &quot;ControlNet&quot;,<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 8,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n68<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;条件&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ControlNetApply&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n0.5<br>\\n],<br>\\n&quot;color&quot;: &quot;#2a363b&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#3f5159&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 11,<br>\\n&quot;type&quot;: &quot;ControlNetLoader&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1140,<br>\\n680<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 290,<br>\\n&quot;1&quot;: 60<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 3,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONTROL_NET&quot;,<br>\\n&quot;type&quot;: &quot;CONTROL_NET&quot;,<br>\\n&quot;links&quot;: [<br>\\n7<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;ControlNet&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ControlNetLoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;control_v11p_sd15_openpose.pth&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#2a363b&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#3f5159&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 47,<br>\\n&quot;type&quot;: &quot;Note&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1140,<br>\\n920<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 620,<br>\\n&quot;1&quot;: 60<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 4,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;properties&quot;: {<br>\\n&quot;text&quot;: &quot;&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;默认只启用一个姿势识别的ControlNet，如果人物形体变得很不像，请适当调高右边的强度参数。&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#2a363b&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#3f5159&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 37,<br>\\n&quot;type&quot;: &quot;ControlNetApply&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1460,<br>\\n780<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 290,<br>\\n&quot;1&quot;: 100<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 28,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;conditioning&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 68,<br>\\n&quot;label&quot;: &quot;条件&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;control_net&quot;,<br>\\n&quot;type&quot;: &quot;CONTROL_NET&quot;,<br>\\n&quot;link&quot;: 64,<br>\\n&quot;label&quot;: &quot;ControlNet&quot;,<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 72,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n69<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;条件&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ControlNetApply&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n0<br>\\n],<br>\\n&quot;color&quot;: &quot;#2a363b&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#3f5159&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 28,<br>\\n&quot;type&quot;: &quot;WD14Tagger|pysssss&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1090,<br>\\n1080<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 220<br>\\n},<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: true<br>\\n},<br>\\n&quot;order&quot;: 16,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 62,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;STRING&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;links&quot;: [<br>\\n49<br>\\n],<br>\\n&quot;shape&quot;: 6,<br>\\n&quot;label&quot;: &quot;字符串&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;WD14Tagger|pysssss&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;wd-v1-4-moat-tagger-v2&quot;,<br>\\n0.35,<br>\\n0.85,<br>\\nfalse,<br>\\nfalse,<br>\\n&quot;&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#222&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#000&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 41,<br>\\n&quot;type&quot;: &quot;Reroute&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1050,<br>\\n460<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n75,<br>\\n26<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 17,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;&quot;,<br>\\n&quot;type&quot;: &quot;</em>&quot;,<br>\\n&quot;link&quot;: 74<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n75,<br>\\n76<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;showOutputText&quot;: false,<br>\\n&quot;horizontal&quot;: false<br>\\n},<br>\\n&quot;color&quot;: &quot;#2a363b&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#3f5159&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 45,<br>\\n&quot;type&quot;: &quot;Note&quot;,<br>\\n&quot;pos&quot;: [<br>\\n100,<br>\\n130<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 630.0868530273438,<br>\\n&quot;1&quot;: 58<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 5,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;properties&quot;: {<br>\\n&quot;text&quot;: &quot;&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;在此处上传图片，无需调节尺寸，会自动缩放到合适的区间内。&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#223&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#335&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 35,<br>\\n&quot;type&quot;: &quot;ImageResizeKJ&quot;,<br>\\n&quot;pos&quot;: [<br>\\n420,<br>\\n230<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 310,<br>\\n&quot;1&quot;: 310<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 12,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 56,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;get_image_size&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;label&quot;: &quot;参考图像大小&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;width_input&quot;,<br>\\n&quot;type&quot;: &quot;INT&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;width_input&quot;<br>\\n},<br>\\n&quot;label&quot;: &quot;宽度&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;height_input&quot;,<br>\\n&quot;type&quot;: &quot;INT&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;height_input&quot;<br>\\n},<br>\\n&quot;label&quot;: &quot;高度&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n57,<br>\\n61,<br>\\n62,<br>\\n74<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;图像&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;width&quot;,<br>\\n&quot;type&quot;: &quot;INT&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;宽度&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;height&quot;,<br>\\n&quot;type&quot;: &quot;INT&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;高度&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ImageResizeKJ&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n768,<br>\\n768,<br>\\n&quot;nearest-exact&quot;,<br>\\ntrue,<br>\\n2,<br>\\n0,<br>\\n0<br>\\n],<br>\\n&quot;color&quot;: &quot;#223&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#335&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 1,<br>\\n&quot;type&quot;: &quot;LoadImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n100,<br>\\n230<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n310,<br>\\n314<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 6,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n56<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;图像&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;MASK&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;遮罩&quot;,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;LoadImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;pexels-laro-pilartes-814205562-19255479.jpg&quot;,<br>\\n&quot;image&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#223&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#335&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 44,<br>\\n&quot;type&quot;: &quot;Note&quot;,<br>\\n&quot;pos&quot;: [<br>\\n250,<br>\\n800<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 640,<br>\\n&quot;1&quot;: 70<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 7,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;properties&quot;: {<br>\\n&quot;text&quot;: &quot;&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;先切换电脑上已经有的大模型，再启动工作流！&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#322&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#533&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 3,<br>\\n&quot;type&quot;: &quot;LoraLoader&quot;,<br>\\n&quot;pos&quot;: [<br>\\n590,<br>\\n910<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 300,<br>\\n&quot;1&quot;: 130<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 10,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 1,<br>\\n&quot;label&quot;: &quot;模型&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 2,<br>\\n&quot;label&quot;: &quot;CLIP&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n38<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;模型&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [<br>\\n83<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;CLIP&quot;,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;LoraLoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;万物黏土化_V2.safetensors&quot;,<br>\\n0.8,<br>\\n0.8<br>\\n],<br>\\n&quot;color&quot;: &quot;#322&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#533&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 42,<br>\\n&quot;type&quot;: &quot;Reroute&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1090,<br>\\n310<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n75,<br>\\n26<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 11,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;&quot;,<br>\\n&quot;type&quot;: &quot;<em>&quot;,<br>\\n&quot;link&quot;: 77<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;links&quot;: [<br>\\n78,<br>\\n79<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;showOutputText&quot;: false,<br>\\n&quot;horizontal&quot;: false<br>\\n},<br>\\n&quot;color&quot;: &quot;#222&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#000&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 6,<br>\\n&quot;type&quot;: &quot;SAMModelLoader (segment anything)&quot;,<br>\\n&quot;pos&quot;: [<br>\\n950,<br>\\n-20<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 360,<br>\\n&quot;1&quot;: 60<br>\\n},<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: false<br>\\n},<br>\\n&quot;order&quot;: 8,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;SAM_MODEL&quot;,<br>\\n&quot;type&quot;: &quot;SAM_MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n3<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;SAM模型&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;SAMModelLoader (segment anything)&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;sam_vit_b (375MB)&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#232&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#353&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 46,<br>\\n&quot;type&quot;: &quot;Note&quot;,<br>\\n&quot;pos&quot;: [<br>\\n950,<br>\\n180<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 730,<br>\\n&quot;1&quot;: 60<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 9,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;properties&quot;: {<br>\\n&quot;text&quot;: &quot;&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;如上传男生照片，请将语义分割节点中的提示词修改为“Boy”。&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#232&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#353&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 13,<br>\\n&quot;type&quot;: &quot;SetLatentNoiseMask&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1870,<br>\\n530<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 46<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 24,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;samples&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 33,<br>\\n&quot;label&quot;: &quot;Latent&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;mask&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;link&quot;: 59,<br>\\n&quot;label&quot;: &quot;遮罩&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n34<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;Latent&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;SetLatentNoiseMask&quot;<br>\\n},<br>\\n&quot;color&quot;: &quot;#332922&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#593930&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 27,<br>\\n&quot;type&quot;: &quot;VAEDecode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1980,<br>\\n340<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 46<br>\\n},<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: true<br>\\n},<br>\\n&quot;order&quot;: 30,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;samples&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 45,<br>\\n&quot;label&quot;: &quot;Latent&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 79,<br>\\n&quot;label&quot;: &quot;VAE&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n44<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEDecode&quot;<br>\\n},<br>\\n&quot;color&quot;: &quot;#222&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#000&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 14,<br>\\n&quot;type&quot;: &quot;SaveImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n2170,<br>\\n340<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 320,<br>\\n&quot;1&quot;: 290<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 31,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 44,<br>\\n&quot;label&quot;: &quot;图像&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;SaveImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;ComfyUI&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#332922&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#593930&quot;<br>\\n}<br>\\n],<br>\\n&quot;links&quot;: [<br>\\n[<br>\\n1,<br>\\n2,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n2,<br>\\n2,<br>\\n1,<br>\\n3,<br>\\n1,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n3,<br>\\n6,<br>\\n0,<br>\\n5,<br>\\n0,<br>\\n&quot;SAM_MODEL&quot;<br>\\n],<br>\\n[<br>\\n4,<br>\\n4,<br>\\n0,<br>\\n5,<br>\\n1,<br>\\n&quot;GROUNDING_DINO_MODEL&quot;<br>\\n],<br>\\n[<br>\\n7,<br>\\n11,<br>\\n0,<br>\\n10,<br>\\n1,<br>\\n&quot;CONTROL_NET&quot;<br>\\n],<br>\\n[<br>\\n8,<br>\\n12,<br>\\n0,<br>\\n10,<br>\\n2,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n33,<br>\\n24,<br>\\n0,<br>\\n13,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n34,<br>\\n13,<br>\\n0,<br>\\n15,<br>\\n3,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n38,<br>\\n3,<br>\\n0,<br>\\n15,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n40,<br>\\n25,<br>\\n0,<br>\\n10,<br>\\n0,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n42,<br>\\n26,<br>\\n0,<br>\\n15,<br>\\n2,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n44,<br>\\n27,<br>\\n0,<br>\\n14,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n45,<br>\\n15,<br>\\n0,<br>\\n27,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n49,<br>\\n28,<br>\\n0,<br>\\n25,<br>\\n1,<br>\\n&quot;STRING&quot;<br>\\n],<br>\\n[<br>\\n52,<br>\\n5,<br>\\n0,<br>\\n31,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n54,<br>\\n32,<br>\\n0,<br>\\n33,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n56,<br>\\n1,<br>\\n0,<br>\\n35,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n57,<br>\\n35,<br>\\n0,<br>\\n24,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n58,<br>\\n5,<br>\\n1,<br>\\n36,<br>\\n0,<br>\\n&quot;MASK&quot;<br>\\n],<br>\\n[<br>\\n59,<br>\\n36,<br>\\n0,<br>\\n13,<br>\\n1,<br>\\n&quot;MASK&quot;<br>\\n],<br>\\n[<br>\\n60,<br>\\n36,<br>\\n0,<br>\\n32,<br>\\n0,<br>\\n&quot;MASK&quot;<br>\\n],<br>\\n[<br>\\n61,<br>\\n35,<br>\\n0,<br>\\n5,<br>\\n2,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n62,<br>\\n35,<br>\\n0,<br>\\n28,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n64,<br>\\n38,<br>\\n0,<br>\\n37,<br>\\n1,<br>\\n&quot;CONTROL_NET&quot;<br>\\n],<br>\\n[<br>\\n68,<br>\\n10,<br>\\n0,<br>\\n37,<br>\\n0,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n69,<br>\\n37,<br>\\n0,<br>\\n15,<br>\\n1,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n72,<br>\\n40,<br>\\n0,<br>\\n37,<br>\\n2,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n74,<br>\\n35,<br>\\n0,<br>\\n41,<br>\\n0,<br>\\n&quot;</em>&quot;<br>\\n],<br>\\n[<br>\\n75,<br>\\n41,<br>\\n0,<br>\\n12,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n76,<br>\\n41,<br>\\n0,<br>\\n40,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n77,<br>\\n2,<br>\\n2,<br>\\n42,<br>\\n0,<br>\\n&quot;<em>&quot;<br>\\n],<br>\\n[<br>\\n78,<br>\\n42,<br>\\n0,<br>\\n24,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n79,<br>\\n42,<br>\\n0,<br>\\n27,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n81,<br>\\n43,<br>\\n0,<br>\\n25,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n82,<br>\\n43,<br>\\n0,<br>\\n26,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n83,<br>\\n3,<br>\\n1,<br>\\n43,<br>\\n0,<br>\\n&quot;</em>&quot;<br>\\n]<br>\\n],<br>\\n&quot;groups&quot;: [<br>\\n{<br>\\n&quot;title&quot;: &quot;ControlNet&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n1093,<br>\\n412,<br>\\n683,<br>\\n607<br>\\n],<br>\\n&quot;color&quot;: &quot;#8AA&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;locked&quot;: false<br>\\n},<br>\\n{<br>\\n&quot;title&quot;: &quot;上传图片&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n59,<br>\\n41,<br>\\n710,<br>\\n544<br>\\n],<br>\\n&quot;color&quot;: &quot;#88A&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;locked&quot;: false<br>\\n},<br>\\n{<br>\\n&quot;title&quot;: &quot;切换模型&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n201,<br>\\n693,<br>\\n755,<br>\\n397<br>\\n],<br>\\n&quot;color&quot;: &quot;#A88&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;locked&quot;: false<br>\\n},<br>\\n{<br>\\n&quot;title&quot;: &quot;SAM智能抠图&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n893,<br>\\n-121,<br>\\n1259,<br>\\n401<br>\\n],<br>\\n&quot;color&quot;: &quot;#8A8&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;locked&quot;: false<br>\\n}<br>\\n],<br>\\n&quot;config&quot;: {},<br>\\n&quot;extra&quot;: {<br>\\n&quot;0246.VERSION&quot;: [<br>\\n0,<br>\\n0,<br>\\n4<br>\\n],<br>\\n&quot;ds&quot;: {<br>\\n&quot;scale&quot;: 0.9090909090909101,<br>\\n&quot;offset&quot;: [<br>\\n55.313153533853274,<br>\\n171.0866500215475<br>\\n]<br>\\n}<br>\\n},<br>\\n&quot;version&quot;: 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第4课/基础工作流：黏土风照片生成器.json","value":{"title":"基础工作流：黏土风照片生成器.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第4课/基础工作流：黏土风照片生成器.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{i as comp,p as data};

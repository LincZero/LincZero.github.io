import{_ as e,c as o,b as l,o as t,r as s}from"./app-DqOgzRet.js";const a={};function i(p,r){const n=s("VueFlow");return t(),o("div",null,[l(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const m=e(a,[["render",i],["__file","基础工作流：黏土风照片生成器.json.html.vue"]]),g=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC4%E8%AF%BE/%E5%9F%BA%E7%A1%80%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%9A%E9%BB%8F%E5%9C%9F%E9%A3%8E%E7%85%A7%E7%89%87%E7%94%9F%E6%88%90%E5%99%A8.json","title":"","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 47, \\"last_link_id\\": 83, \\"nodes\\": [ { \\"id\\": 38, \\"type\\": \\"ControlNetLoader\\", \\"pos\\": [ 1460, 680 ], \\"size\\": { \\"0\\": 290, \\"1\\": 60 }, \\"flags\\": {}, \\"order\\": 0, \\"mode\\"...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC4%E8%AF%BE/%E5%9F%BA%E7%A1%80%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%9A%E9%BB%8F%E5%9C%9F%E9%A3%8E%E7%85%A7%E7%89%87%E7%94%9F%E6%88%90%E5%99%A8.json"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 47, \\"last_link_id\\": 83, \\"nodes\\": [ { \\"id\\": 38, \\"type\\": \\"ControlNetLoader\\", \\"pos\\": [ 1460, 680 ], \\"size\\": { \\"0\\": 290, \\"1\\": 60 }, \\"flags\\": {}, \\"order\\": 0, \\"mode\\"..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":7.4,"words":2220},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第4课/基础工作流：黏土风照片生成器.json","excerpt":"<p>{\\n\\"last_node_id\\": 47,\\n\\"last_link_id\\": 83,\\n\\"nodes\\": [\\n{\\n\\"id\\": 38,\\n\\"type\\": \\"ControlNetLoader\\",\\n\\"pos\\": [\\n1460,\\n680\\n],\\n\\"size\\": {\\n\\"0\\": 290,\\n\\"1\\": 60\\n},\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONTROL_NET\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"links\\": [\\n64\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"ControlNet\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"control_v11p_sd15_canny.pth\\"\\n],\\n\\"color\\": \\"#2a363b\\",\\n\\"bgcolor\\": \\"#3f5159\\"\\n},\\n{\\n\\"id\\": 4,\\n\\"type\\": \\"GroundingDinoModelLoader (segment anything)\\",\\n\\"pos\\": [\\n950,\\n80\\n],\\n\\"size\\": {\\n\\"0\\": 361.20001220703125,\\n\\"1\\": 60\\n},\\n\\"flags\\": {\\n\\"collapsed\\": false\\n},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"GROUNDING_DINO_MODEL\\",\\n\\"type\\": \\"GROUNDING_DINO_MODEL\\",\\n\\"links\\": [\\n4\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0,\\n\\"label\\": \\"G-Dino模型\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"GroundingDinoModelLoader (segment anything)\\"\\n},\\n\\"widgets_values\\": [\\n\\"GroundingDINO_SwinB (938MB)\\"\\n],\\n\\"color\\": \\"#232\\",\\n\\"bgcolor\\": \\"#353\\"\\n},\\n{\\n\\"id\\": 31,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n1700,\\n-30\\n],\\n\\"size\\": {\\n\\"0\\": 190,\\n\\"1\\": 170\\n},\\n\\"flags\\": {},\\n\\"order\\": 19,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 52,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n},\\n\\"color\\": \\"#232\\",\\n\\"bgcolor\\": \\"#353\\"\\n},\\n{\\n\\"id\\": 36,\\n\\"type\\": \\"GrowMaskWithBlur\\",\\n\\"pos\\": [\\n1730,\\n190\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 246\\n},\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 20,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"mask\\",\\n\\"type\\": \\"MASK\\",\\n\\"link\\": 58,\\n\\"label\\": \\"遮罩\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"mask\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": [\\n59,\\n60\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"遮罩\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"mask_inverted\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"反转遮罩\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"GrowMaskWithBlur\\"\\n},\\n\\"widgets_values\\": [\\n20,\\n0,\\ntrue,\\nfalse,\\n10,\\n1,\\n1,\\nfalse\\n],\\n\\"color\\": \\"#232\\",\\n\\"bgcolor\\": \\"#353\\"\\n},\\n{\\n\\"id\\": 32,\\n\\"type\\": \\"MaskToImage\\",\\n\\"pos\\": [\\n1880,\\n190\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 26\\n},\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 25,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"mask\\",\\n\\"type\\": \\"MASK\\",\\n\\"link\\": 60,\\n\\"label\\": \\"遮罩\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n54\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"MaskToImage\\"\\n},\\n\\"color\\": \\"#232\\",\\n\\"bgcolor\\": \\"#353\\"\\n},\\n{\\n\\"id\\": 33,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n1910,\\n-30\\n],\\n\\"size\\": {\\n\\"0\\": 200,\\n\\"1\\": 170\\n},\\n\\"flags\\": {},\\n\\"order\\": 27,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 54,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n},\\n\\"color\\": \\"#232\\",\\n\\"bgcolor\\": \\"#353\\"\\n},\\n{\\n\\"id\\": 15,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": [\\n2170,\\n680\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 474\\n},\\n\\"flags\\": {},\\n\\"order\\": 29,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 38,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 69,\\n\\"label\\": \\"正面条件\\",\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 42,\\n\\"label\\": \\"负面条件\\",\\n\\"slot_index\\": 2\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 34,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n45\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"Latent\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n600714256530672,\\n\\"randomize\\",\\n20,\\n8,\\n\\"euler\\",\\n\\"normal\\",\\n0.7000000000000001\\n],\\n\\"color\\": \\"#332922\\",\\n\\"bgcolor\\": \\"#593930\\"\\n},\\n{\\n\\"id\\": 2,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": [\\n250,\\n910\\n],\\n\\"size\\": {\\n\\"0\\": 320,\\n\\"1\\": 130\\n},\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n1\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"模型\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n2\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"CLIP\\",\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n77\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"VAE\\",\\n\\"slot_index\\": 2\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"Rev_Animated_V122.safetensors\\"\\n],\\n\\"color\\": \\"#322\\",\\n\\"bgcolor\\": \\"#533\\"\\n},\\n{\\n\\"id\\": 26,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n1510,\\n1080\\n],\\n\\"size\\": {\\n\\"0\\": 400,\\n\\"1\\": 100\\n},\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 18,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 82,\\n\\"label\\": \\"CLIP\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n42\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"ugly, worst quality, embedding:BadDream, embedding:ng_deepnegative_v1_75t, \\"\\n],\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 25,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n1350,\\n1080\\n],\\n\\"size\\": {\\n\\"0\\": 400,\\n\\"1\\": 90\\n},\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 21,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 81,\\n\\"label\\": \\"CLIP\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"text\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 49,\\n\\"widget\\": {\\n\\"name\\": \\"text\\"\\n},\\n\\"label\\": \\"文本\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n40\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"\\"\\n],\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 43,\\n\\"type\\": \\"Reroute\\",\\n\\"pos\\": [\\n1260,\\n1050\\n],\\n\\"size\\": [\\n75,\\n26\\n],\\n\\"flags\\": {},\\n\\"order\\": 13,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"<em>\\",\\n\\"link\\": 83\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n81,\\n82\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"showOutputText\\": false,\\n\\"horizontal\\": false\\n},\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 24,\\n\\"type\\": \\"VAEEncode\\",\\n\\"pos\\": [\\n1200,\\n340\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 14,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"pixels\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 57,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 78,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n33\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"Latent\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEEncode\\"\\n},\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 5,\\n\\"type\\": \\"GroundingDinoSAMSegment (segment anything)\\",\\n\\"pos\\": [\\n1330,\\n-20\\n],\\n\\"size\\": {\\n\\"0\\": 350,\\n\\"1\\": 160\\n},\\n\\"flags\\": {\\n\\"collapsed\\": false\\n},\\n\\"order\\": 15,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"sam_model\\",\\n\\"type\\": \\"SAM_MODEL\\",\\n\\"link\\": 3,\\n\\"label\\": \\"SAM模型\\"\\n},\\n{\\n\\"name\\": \\"grounding_dino_model\\",\\n\\"type\\": \\"GROUNDING_DINO_MODEL\\",\\n\\"link\\": 4,\\n\\"label\\": \\"G-Dino模型\\"\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 61,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n52\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0,\\n\\"label\\": \\" 图像\\"\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": [\\n58\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 1,\\n\\"label\\": \\"遮罩\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"GroundingDinoSAMSegment (segment anything)\\"\\n},\\n\\"widgets_values\\": [\\n\\"a girl\\",\\n0.1\\n],\\n\\"color\\": \\"#232\\",\\n\\"bgcolor\\": \\"#353\\"\\n},\\n{\\n\\"id\\": 40,\\n\\"type\\": \\"CannyEdgePreprocessor\\",\\n\\"pos\\": [\\n1460,\\n490\\n],\\n\\"size\\": {\\n\\"0\\": 280,\\n\\"1\\": 110\\n},\\n\\"flags\\": {},\\n\\"order\\": 23,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 76,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n72\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CannyEdgePreprocessor\\"\\n},\\n\\"widgets_values\\": [\\n100,\\n200,\\n512\\n],\\n\\"color\\": \\"#2a363b\\",\\n\\"bgcolor\\": \\"#3f5159\\"\\n},\\n{\\n\\"id\\": 12,\\n\\"type\\": \\"OpenposePreprocessor\\",\\n\\"pos\\": [\\n1140,\\n490\\n],\\n\\"size\\": {\\n\\"0\\": 290,\\n\\"1\\": 150\\n},\\n\\"flags\\": {},\\n\\"order\\": 22,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 75,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n8\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"POSE_KEYPOINT\\",\\n\\"type\\": \\"POSE_KEYPOINT\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"姿态关键点\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"OpenposePreprocessor\\"\\n},\\n\\"widgets_values\\": [\\n\\"enable\\",\\n\\"enable\\",\\n\\"enable\\",\\n512\\n],\\n\\"color\\": \\"#2a363b\\",\\n\\"bgcolor\\": \\"#3f5159\\"\\n},\\n{\\n\\"id\\": 10,\\n\\"type\\": \\"ControlNetApply\\",\\n\\"pos\\": [\\n1140,\\n780\\n],\\n\\"size\\": {\\n\\"0\\": 290,\\n\\"1\\": 100\\n},\\n\\"flags\\": {},\\n\\"order\\": 26,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"conditioning\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 40,\\n\\"label\\": \\"条件\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"control_net\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"link\\": 7,\\n\\"label\\": \\"ControlNet\\",\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 8,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n68\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"条件\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetApply\\"\\n},\\n\\"widgets_values\\": [\\n0.5\\n],\\n\\"color\\": \\"#2a363b\\",\\n\\"bgcolor\\": \\"#3f5159\\"\\n},\\n{\\n\\"id\\": 11,\\n\\"type\\": \\"ControlNetLoader\\",\\n\\"pos\\": [\\n1140,\\n680\\n],\\n\\"size\\": {\\n\\"0\\": 290,\\n\\"1\\": 60\\n},\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONTROL_NET\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"links\\": [\\n7\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"ControlNet\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"control_v11p_sd15_openpose.pth\\"\\n],\\n\\"color\\": \\"#2a363b\\",\\n\\"bgcolor\\": \\"#3f5159\\"\\n},\\n{\\n\\"id\\": 47,\\n\\"type\\": \\"Note\\",\\n\\"pos\\": [\\n1140,\\n920\\n],\\n\\"size\\": {\\n\\"0\\": 620,\\n\\"1\\": 60\\n},\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"properties\\": {\\n\\"text\\": \\"\\"\\n},\\n\\"widgets_values\\": [\\n\\"默认只启用一个姿势识别的ControlNet，如果人物形体变得很不像，请适当调高右边的强度参数。\\"\\n],\\n\\"color\\": \\"#2a363b\\",\\n\\"bgcolor\\": \\"#3f5159\\"\\n},\\n{\\n\\"id\\": 37,\\n\\"type\\": \\"ControlNetApply\\",\\n\\"pos\\": [\\n1460,\\n780\\n],\\n\\"size\\": {\\n\\"0\\": 290,\\n\\"1\\": 100\\n},\\n\\"flags\\": {},\\n\\"order\\": 28,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"conditioning\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 68,\\n\\"label\\": \\"条件\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"control_net\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"link\\": 64,\\n\\"label\\": \\"ControlNet\\",\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 72,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n69\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"条件\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetApply\\"\\n},\\n\\"widgets_values\\": [\\n0\\n],\\n\\"color\\": \\"#2a363b\\",\\n\\"bgcolor\\": \\"#3f5159\\"\\n},\\n{\\n\\"id\\": 28,\\n\\"type\\": \\"WD14Tagger|pysssss\\",\\n\\"pos\\": [\\n1090,\\n1080\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 220\\n},\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 16,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 62,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"STRING\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n49\\n],\\n\\"shape\\": 6,\\n\\"label\\": \\"字符串\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"WD14Tagger|pysssss\\"\\n},\\n\\"widgets_values\\": [\\n\\"wd-v1-4-moat-tagger-v2\\",\\n0.35,\\n0.85,\\nfalse,\\nfalse,\\n\\"\\"\\n],\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 41,\\n\\"type\\": \\"Reroute\\",\\n\\"pos\\": [\\n1050,\\n460\\n],\\n\\"size\\": [\\n75,\\n26\\n],\\n\\"flags\\": {},\\n\\"order\\": 17,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"</em>\\",\\n\\"link\\": 74\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n75,\\n76\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"showOutputText\\": false,\\n\\"horizontal\\": false\\n},\\n\\"color\\": \\"#2a363b\\",\\n\\"bgcolor\\": \\"#3f5159\\"\\n},\\n{\\n\\"id\\": 45,\\n\\"type\\": \\"Note\\",\\n\\"pos\\": [\\n100,\\n130\\n],\\n\\"size\\": {\\n\\"0\\": 630.0868530273438,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"properties\\": {\\n\\"text\\": \\"\\"\\n},\\n\\"widgets_values\\": [\\n\\"在此处上传图片，无需调节尺寸，会自动缩放到合适的区间内。\\"\\n],\\n\\"color\\": \\"#223\\",\\n\\"bgcolor\\": \\"#335\\"\\n},\\n{\\n\\"id\\": 35,\\n\\"type\\": \\"ImageResizeKJ\\",\\n\\"pos\\": [\\n420,\\n230\\n],\\n\\"size\\": {\\n\\"0\\": 310,\\n\\"1\\": 310\\n},\\n\\"flags\\": {},\\n\\"order\\": 12,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 56,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"get_image_size\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": null,\\n\\"label\\": \\"参考图像大小\\"\\n},\\n{\\n\\"name\\": \\"width_input\\",\\n\\"type\\": \\"INT\\",\\n\\"link\\": null,\\n\\"widget\\": {\\n\\"name\\": \\"width_input\\"\\n},\\n\\"label\\": \\"宽度\\"\\n},\\n{\\n\\"name\\": \\"height_input\\",\\n\\"type\\": \\"INT\\",\\n\\"link\\": null,\\n\\"widget\\": {\\n\\"name\\": \\"height_input\\"\\n},\\n\\"label\\": \\"高度\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n57,\\n61,\\n62,\\n74\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"width\\",\\n\\"type\\": \\"INT\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"宽度\\"\\n},\\n{\\n\\"name\\": \\"height\\",\\n\\"type\\": \\"INT\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"高度\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ImageResizeKJ\\"\\n},\\n\\"widgets_values\\": [\\n768,\\n768,\\n\\"nearest-exact\\",\\ntrue,\\n2,\\n0,\\n0\\n],\\n\\"color\\": \\"#223\\",\\n\\"bgcolor\\": \\"#335\\"\\n},\\n{\\n\\"id\\": 1,\\n\\"type\\": \\"LoadImage\\",\\n\\"pos\\": [\\n100,\\n230\\n],\\n\\"size\\": [\\n310,\\n314\\n],\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n56\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"遮罩\\",\\n\\"slot_index\\": 1\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"pexels-laro-pilartes-814205562-19255479.jpg\\",\\n\\"image\\"\\n],\\n\\"color\\": \\"#223\\",\\n\\"bgcolor\\": \\"#335\\"\\n},\\n{\\n\\"id\\": 44,\\n\\"type\\": \\"Note\\",\\n\\"pos\\": [\\n250,\\n800\\n],\\n\\"size\\": {\\n\\"0\\": 640,\\n\\"1\\": 70\\n},\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"properties\\": {\\n\\"text\\": \\"\\"\\n},\\n\\"widgets_values\\": [\\n\\"先切换电脑上已经有的大模型，再启动工作流！\\"\\n],\\n\\"color\\": \\"#322\\",\\n\\"bgcolor\\": \\"#533\\"\\n},\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"LoraLoader\\",\\n\\"pos\\": [\\n590,\\n910\\n],\\n\\"size\\": {\\n\\"0\\": 300,\\n\\"1\\": 130\\n},\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 1,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 2,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n38\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"模型\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n83\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"CLIP\\",\\n\\"slot_index\\": 1\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoraLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"万物黏土化_V2.safetensors\\",\\n0.8,\\n0.8\\n],\\n\\"color\\": \\"#322\\",\\n\\"bgcolor\\": \\"#533\\"\\n},\\n{\\n\\"id\\": 42,\\n\\"type\\": \\"Reroute\\",\\n\\"pos\\": [\\n1090,\\n310\\n],\\n\\"size\\": [\\n75,\\n26\\n],\\n\\"flags\\": {},\\n\\"order\\": 11,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"<em>\\",\\n\\"link\\": 77\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n78,\\n79\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"showOutputText\\": false,\\n\\"horizontal\\": false\\n},\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 6,\\n\\"type\\": \\"SAMModelLoader (segment anything)\\",\\n\\"pos\\": [\\n950,\\n-20\\n],\\n\\"size\\": {\\n\\"0\\": 360,\\n\\"1\\": 60\\n},\\n\\"flags\\": {\\n\\"collapsed\\": false\\n},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"SAM_MODEL\\",\\n\\"type\\": \\"SAM_MODEL\\",\\n\\"links\\": [\\n3\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0,\\n\\"label\\": \\"SAM模型\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"SAMModelLoader (segment anything)\\"\\n},\\n\\"widgets_values\\": [\\n\\"sam_vit_b (375MB)\\"\\n],\\n\\"color\\": \\"#232\\",\\n\\"bgcolor\\": \\"#353\\"\\n},\\n{\\n\\"id\\": 46,\\n\\"type\\": \\"Note\\",\\n\\"pos\\": [\\n950,\\n180\\n],\\n\\"size\\": {\\n\\"0\\": 730,\\n\\"1\\": 60\\n},\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"properties\\": {\\n\\"text\\": \\"\\"\\n},\\n\\"widgets_values\\": [\\n\\"如上传男生照片，请将语义分割节点中的提示词修改为“Boy”。\\"\\n],\\n\\"color\\": \\"#232\\",\\n\\"bgcolor\\": \\"#353\\"\\n},\\n{\\n\\"id\\": 13,\\n\\"type\\": \\"SetLatentNoiseMask\\",\\n\\"pos\\": [\\n1870,\\n530\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 24,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 33,\\n\\"label\\": \\"Latent\\"\\n},\\n{\\n\\"name\\": \\"mask\\",\\n\\"type\\": \\"MASK\\",\\n\\"link\\": 59,\\n\\"label\\": \\"遮罩\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n34\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"Latent\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"SetLatentNoiseMask\\"\\n},\\n\\"color\\": \\"#332922\\",\\n\\"bgcolor\\": \\"#593930\\"\\n},\\n{\\n\\"id\\": 27,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": [\\n1980,\\n340\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 30,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 45,\\n\\"label\\": \\"Latent\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 79,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n44\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n},\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 14,\\n\\"type\\": \\"SaveImage\\",\\n\\"pos\\": [\\n2170,\\n340\\n],\\n\\"size\\": {\\n\\"0\\": 320,\\n\\"1\\": 290\\n},\\n\\"flags\\": {},\\n\\"order\\": 31,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 44,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"SaveImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\"\\n],\\n\\"color\\": \\"#332922\\",\\n\\"bgcolor\\": \\"#593930\\"\\n}\\n],\\n\\"links\\": [\\n[\\n1,\\n2,\\n0,\\n3,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n2,\\n2,\\n1,\\n3,\\n1,\\n\\"CLIP\\"\\n],\\n[\\n3,\\n6,\\n0,\\n5,\\n0,\\n\\"SAM_MODEL\\"\\n],\\n[\\n4,\\n4,\\n0,\\n5,\\n1,\\n\\"GROUNDING_DINO_MODEL\\"\\n],\\n[\\n7,\\n11,\\n0,\\n10,\\n1,\\n\\"CONTROL_NET\\"\\n],\\n[\\n8,\\n12,\\n0,\\n10,\\n2,\\n\\"IMAGE\\"\\n],\\n[\\n33,\\n24,\\n0,\\n13,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n34,\\n13,\\n0,\\n15,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n38,\\n3,\\n0,\\n15,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n40,\\n25,\\n0,\\n10,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n42,\\n26,\\n0,\\n15,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n44,\\n27,\\n0,\\n14,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n45,\\n15,\\n0,\\n27,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n49,\\n28,\\n0,\\n25,\\n1,\\n\\"STRING\\"\\n],\\n[\\n52,\\n5,\\n0,\\n31,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n54,\\n32,\\n0,\\n33,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n56,\\n1,\\n0,\\n35,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n57,\\n35,\\n0,\\n24,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n58,\\n5,\\n1,\\n36,\\n0,\\n\\"MASK\\"\\n],\\n[\\n59,\\n36,\\n0,\\n13,\\n1,\\n\\"MASK\\"\\n],\\n[\\n60,\\n36,\\n0,\\n32,\\n0,\\n\\"MASK\\"\\n],\\n[\\n61,\\n35,\\n0,\\n5,\\n2,\\n\\"IMAGE\\"\\n],\\n[\\n62,\\n35,\\n0,\\n28,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n64,\\n38,\\n0,\\n37,\\n1,\\n\\"CONTROL_NET\\"\\n],\\n[\\n68,\\n10,\\n0,\\n37,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n69,\\n37,\\n0,\\n15,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n72,\\n40,\\n0,\\n37,\\n2,\\n\\"IMAGE\\"\\n],\\n[\\n74,\\n35,\\n0,\\n41,\\n0,\\n\\"</em>\\"\\n],\\n[\\n75,\\n41,\\n0,\\n12,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n76,\\n41,\\n0,\\n40,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n77,\\n2,\\n2,\\n42,\\n0,\\n\\"<em>\\"\\n],\\n[\\n78,\\n42,\\n0,\\n24,\\n1,\\n\\"VAE\\"\\n],\\n[\\n79,\\n42,\\n0,\\n27,\\n1,\\n\\"VAE\\"\\n],\\n[\\n81,\\n43,\\n0,\\n25,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n82,\\n43,\\n0,\\n26,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n83,\\n3,\\n1,\\n43,\\n0,\\n\\"</em>\\"\\n]\\n],\\n\\"groups\\": [\\n{\\n\\"title\\": \\"ControlNet\\",\\n\\"bounding\\": [\\n1093,\\n412,\\n683,\\n607\\n],\\n\\"color\\": \\"#8AA\\",\\n\\"font_size\\": 24,\\n\\"locked\\": false\\n},\\n{\\n\\"title\\": \\"上传图片\\",\\n\\"bounding\\": [\\n59,\\n41,\\n710,\\n544\\n],\\n\\"color\\": \\"#88A\\",\\n\\"font_size\\": 24,\\n\\"locked\\": false\\n},\\n{\\n\\"title\\": \\"切换模型\\",\\n\\"bounding\\": [\\n201,\\n693,\\n755,\\n397\\n],\\n\\"color\\": \\"#A88\\",\\n\\"font_size\\": 24,\\n\\"locked\\": false\\n},\\n{\\n\\"title\\": \\"SAM智能抠图\\",\\n\\"bounding\\": [\\n893,\\n-121,\\n1259,\\n401\\n],\\n\\"color\\": \\"#8A8\\",\\n\\"font_size\\": 24,\\n\\"locked\\": false\\n}\\n],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"0246.VERSION\\": [\\n0,\\n0,\\n4\\n],\\n\\"ds\\": {\\n\\"scale\\": 0.9090909090909101,\\n\\"offset\\": [\\n55.313153533853274,\\n171.0866500215475\\n]\\n}\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第4课/基础工作流：黏土风照片生成器.json","value":{"title":"基础工作流：黏土风照片生成器.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第4课/基础工作流：黏土风照片生成器.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{m as comp,g as data};

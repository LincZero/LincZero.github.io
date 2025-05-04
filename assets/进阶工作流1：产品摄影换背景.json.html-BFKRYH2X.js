import{h as r,i as b,l as e,r as o,o as l}from"./app-BhP9dsIp.js";const t={};function a(s,i){const n=o("VueFlow");return l(),b("div",null,[e(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 56,
  "last_link_id": 67,
  "nodes": [
    {
      "id": 8,
      "type": "ControlNetApplyAdvanced",
      "pos": [
        2660,
        10
      ],
      "size": {
        "0": 330,
        "1": 170
      },
      "flags": {},
      "order": 27,
      "mode": 0,
      "inputs": [
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 32,
          "label": "正面条件"
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 33,
          "label": "负面条件"
        },
        {
          "name": "control_net",
          "type": "CONTROL_NET",
          "link": 6,
          "label": "ControlNet"
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 7,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "positive",
          "type": "CONDITIONING",
          "links": [
            9
          ],
          "shape": 3,
          "label": "正面条件",
          "slot_index": 0
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "links": [
            10
          ],
          "shape": 3,
          "label": "负面条件",
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetApplyAdvanced"
      },
      "widgets_values": [
        0.25,
        0,
        0.25
      ],
      "color": "#2a363b",
      "bgcolor": "#3f5159"
    },
    {
      "id": 3,
      "type": "GroundingDinoModelLoader (segment anything)",
      "pos": [
        3480,
        80
      ],
      "size": {
        "0": 300,
        "1": 70
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "GROUNDING_DINO_MODEL",
          "type": "GROUNDING_DINO_MODEL",
          "links": [
            2
          ],
          "shape": 3,
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
      "id": 16,
      "type": "SAMLoader",
      "pos": [
        3480,
        -50
      ],
      "size": {
        "0": 300,
        "1": 82
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "SAM_MODEL",
          "type": "SAM_MODEL",
          "links": [
            16
          ],
          "shape": 3,
          "label": "SAM模型"
        }
      ],
      "properties": {
        "Node name for S&R": "SAMLoader"
      },
      "widgets_values": [
        "sam_vit_b_01ec64.pth",
        "Prefer GPU"
      ],
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 4,
      "type": "InvertMask",
      "pos": [
        3790,
        110
      ],
      "size": {
        "0": 210,
        "1": 40
      },
      "flags": {},
      "order": 24,
      "mode": 0,
      "inputs": [
        {
          "name": "mask",
          "type": "MASK",
          "link": 20,
          "label": "遮罩"
        }
      ],
      "outputs": [
        {
          "name": "MASK",
          "type": "MASK",
          "links": [
            17
          ],
          "shape": 3,
          "label": "遮罩",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "InvertMask"
      },
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 20,
      "type": "SetLatentNoiseMask",
      "pos": [
        3790,
        -50
      ],
      "size": {
        "0": 210,
        "1": 120
      },
      "flags": {},
      "order": 26,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 26,
          "label": "Latent"
        },
        {
          "name": "mask",
          "type": "MASK",
          "link": 17,
          "label": "遮罩"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            24
          ],
          "shape": 3,
          "label": "Latent"
        }
      ],
      "properties": {
        "Node name for S&R": "SetLatentNoiseMask"
      },
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 7,
      "type": "PreviewImage",
      "pos": [
        2650,
        -560
      ],
      "size": {
        "0": 330,
        "1": 300
      },
      "flags": {},
      "order": 20,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 5,
          "label": "图像"
        }
      ],
      "properties": {
        "Node name for S&R": "PreviewImage"
      },
      "color": "#2a363b",
      "bgcolor": "#3f5159"
    },
    {
      "id": 10,
      "type": "PreviewImage",
      "pos": [
        3030,
        -560
      ],
      "size": {
        "0": 340,
        "1": 300
      },
      "flags": {},
      "order": 21,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 8,
          "label": "图像"
        }
      ],
      "properties": {
        "Node name for S&R": "PreviewImage"
      },
      "color": "#2a363b",
      "bgcolor": "#3f5159"
    },
    {
      "id": 9,
      "type": "ControlNetLoader",
      "pos": [
        3030,
        -210
      ],
      "size": {
        "0": 340,
        "1": 60
      },
      "flags": {},
      "order": 2,
      "mode": 0,
      "outputs": [
        {
          "name": "CONTROL_NET",
          "type": "CONTROL_NET",
          "links": [
            11
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
        "control_v11p_sd15_canny.pth"
      ],
      "color": "#2a363b",
      "bgcolor": "#3f5159"
    },
    {
      "id": 6,
      "type": "ControlNetLoader",
      "pos": [
        2660,
        -210
      ],
      "size": {
        "0": 330,
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
            6
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
      ],
      "color": "#2a363b",
      "bgcolor": "#3f5159"
    },
    {
      "id": 13,
      "type": "Zoe-DepthMapPreprocessor",
      "pos": [
        2660,
        -110
      ],
      "size": {
        "0": 330,
        "1": 80
      },
      "flags": {},
      "order": 15,
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
            5,
            7
          ],
          "shape": 3,
          "label": "图像",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "Zoe-DepthMapPreprocessor"
      },
      "widgets_values": [
        512
      ],
      "color": "#2a363b",
      "bgcolor": "#3f5159"
    },
    {
      "id": 12,
      "type": "AIO_Preprocessor",
      "pos": [
        3030,
        -110
      ],
      "size": {
        "0": 340,
        "1": 80
      },
      "flags": {},
      "order": 16,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 39,
          "label": "图像"
        },
        {
          "name": "resolution",
          "type": "INT",
          "link": null,
          "widget": {
            "name": "resolution"
          },
          "label": "分辨率"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            8,
            12
          ],
          "shape": 3,
          "label": "图像",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "AIO_Preprocessor"
      },
      "widgets_values": [
        "CannyEdgePreprocessor",
        512
      ],
      "color": "#2a363b",
      "bgcolor": "#3f5159"
    },
    {
      "id": 11,
      "type": "ControlNetApplyAdvanced",
      "pos": [
        3030,
        10
      ],
      "size": {
        "0": 338.7951965332031,
        "1": 171.03765869140625
      },
      "flags": {},
      "order": 28,
      "mode": 0,
      "inputs": [
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 9,
          "label": "正面条件"
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 10,
          "label": "负面条件"
        },
        {
          "name": "control_net",
          "type": "CONTROL_NET",
          "link": 11,
          "label": "ControlNet"
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 12,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "positive",
          "type": "CONDITIONING",
          "links": [
            22
          ],
          "shape": 3,
          "label": "正面条件",
          "slot_index": 0
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "links": [
            23
          ],
          "shape": 3,
          "label": "负面条件",
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetApplyAdvanced"
      },
      "widgets_values": [
        0.5,
        0,
        0.25
      ],
      "color": "#2a363b",
      "bgcolor": "#3f5159"
    },
    {
      "id": 43,
      "type": "DeepTranslatorTextNode",
      "pos": [
        2210,
        -500
      ],
      "size": [
        406.60150146484375,
        320
      ],
      "flags": {
        "collapsed": true
      },
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "text",
          "type": "STRING",
          "link": 64,
          "widget": {
            "name": "text"
          },
          "label": "文本"
        }
      ],
      "outputs": [
        {
          "name": "text",
          "type": "STRING",
          "links": [
            57
          ],
          "shape": 3,
          "label": "文本",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "DeepTranslatorTextNode"
      },
      "widgets_values": [
        "auto",
        "english",
        false,
        "",
        "",
        "GoogleTranslator",
        "放在水面上，蓝色调，水面倒影，",
        "proxy_hide",
        "authorization_hide"
      ],
      "color": "#332922",
      "bgcolor": "#593930"
    },
    {
      "id": 34,
      "type": "easy promptConcat",
      "pos": [
        2400,
        -520
      ],
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {
        "collapsed": true
      },
      "order": 17,
      "mode": 0,
      "inputs": [
        {
          "name": "prompt1",
          "type": "STRING",
          "link": 47,
          "widget": {
            "name": "prompt1"
          },
          "slot_index": 0,
          "label": "提示词1"
        },
        {
          "name": "prompt2",
          "type": "STRING",
          "link": 57,
          "widget": {
            "name": "prompt2"
          },
          "slot_index": 1,
          "label": "提示词2"
        }
      ],
      "outputs": [
        {
          "name": "prompt",
          "type": "STRING",
          "links": [
            58
          ],
          "shape": 3,
          "label": "提示词",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "easy promptConcat"
      },
      "widgets_values": [
        "",
        "",
        ","
      ],
      "color": "#332922",
      "bgcolor": "#593930"
    },
    {
      "id": 25,
      "type": "CLIPTextEncode",
      "pos": [
        2370,
        130
      ],
      "size": {
        "0": 400,
        "1": 200
      },
      "flags": {
        "collapsed": true
      },
      "order": 19,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 31,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            33
          ],
          "shape": 3,
          "label": "条件",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "embedding:UnrealisticDream, worst quality, ugly, simple_background, "
      ],
      "color": "#332922",
      "bgcolor": "#593930"
    },
    {
      "id": 24,
      "type": "CLIPTextEncode",
      "pos": [
        2210,
        130
      ],
      "size": {
        "0": 400,
        "1": 200
      },
      "flags": {
        "collapsed": true
      },
      "order": 25,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 30,
          "label": "CLIP"
        },
        {
          "name": "text",
          "type": "STRING",
          "link": 59,
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
            32
          ],
          "shape": 3,
          "label": "条件",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        ""
      ],
      "color": "#332922",
      "bgcolor": "#593930"
    },
    {
      "id": 27,
      "type": "Reroute",
      "pos": [
        2620,
        180
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
          "link": 37,
          "label": ""
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "IMAGE",
          "links": [
            38,
            39
          ],
          "slot_index": 0,
          "label": ""
        }
      ],
      "properties": {
        "showOutputText": false,
        "horizontal": false
      }
    },
    {
      "id": 5,
      "type": "PreviewImage",
      "pos": [
        3480,
        -540
      ],
      "size": {
        "0": 520,
        "1": 280
      },
      "flags": {},
      "order": 23,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 4,
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
      "id": 23,
      "type": "VAEEncode",
      "pos": [
        2310,
        180
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
          "link": 25,
          "label": "图像"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 28,
          "label": "VAE"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            26
          ],
          "shape": 3,
          "label": "Latent",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEEncode"
      },
      "color": "#332922",
      "bgcolor": "#593930"
    },
    {
      "id": 53,
      "type": "PrimitiveNode",
      "pos": [
        1780,
        -370
      ],
      "size": {
        "0": 310,
        "1": 140
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "outputs": [
        {
          "name": "STRING",
          "type": "STRING",
          "links": [
            64
          ],
          "slot_index": 0,
          "widget": {
            "name": "text"
          }
        }
      ],
      "properties": {
        "Run widget replace on values": false
      },
      "widgets_values": [
        "放在水面上，蓝色调，水面倒影，"
      ],
      "color": "#322",
      "bgcolor": "#533"
    },
    {
      "id": 18,
      "type": "LoadImage",
      "pos": [
        1450,
        -540
      ],
      "size": {
        "0": 315,
        "1": 314
      },
      "flags": {},
      "order": 5,
      "mode": 0,
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            21,
            37
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
          "label": "遮罩"
        }
      ],
      "properties": {
        "Node name for S&R": "LoadImage"
      },
      "widgets_values": [
        "3-01.jpg",
        "image"
      ],
      "color": "#322",
      "bgcolor": "#533"
    },
    {
      "id": 52,
      "type": "PrimitiveNode",
      "pos": [
        1780,
        -540
      ],
      "size": {
        "0": 310,
        "1": 130
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "outputs": [
        {
          "name": "STRING",
          "type": "STRING",
          "links": [
            63
          ],
          "slot_index": 0,
          "widget": {
            "name": "text"
          }
        }
      ],
      "properties": {
        "Run widget replace on values": false
      },
      "widgets_values": [
        "三个棕色的化妆品瓶子"
      ],
      "color": "#322",
      "bgcolor": "#533"
    },
    {
      "id": 15,
      "type": "LoraLoader",
      "pos": [
        1780,
        -180
      ],
      "size": {
        "0": 310,
        "1": 130
      },
      "flags": {},
      "order": 13,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 14,
          "label": "模型"
        },
        {
          "name": "clip",
          "type": "CLIP",
          "link": 15,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            29
          ],
          "shape": 3,
          "label": "模型",
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            30,
            31
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
        "产品摄影，北欧极简高质感_1.0.safetensors",
        0.25,
        0.25
      ],
      "color": "#322",
      "bgcolor": "#533"
    },
    {
      "id": 45,
      "type": "easy stylesSelector",
      "pos": [
        2210,
        -450
      ],
      "size": {
        "0": 310,
        "1": 530
      },
      "flags": {
        "collapsed": false
      },
      "order": 22,
      "mode": 0,
      "inputs": [
        {
          "name": "positive",
          "type": "STRING",
          "link": 58,
          "widget": {
            "name": "positive"
          },
          "label": "正面提示词（可选）"
        },
        {
          "name": "negative",
          "type": "STRING",
          "link": null,
          "widget": {
            "name": "negative"
          },
          "label": "负面提示词（可选）"
        }
      ],
      "outputs": [
        {
          "name": "positive",
          "type": "STRING",
          "links": [
            59
          ],
          "shape": 3,
          "label": "正面提示词",
          "slot_index": 0
        },
        {
          "name": "negative",
          "type": "STRING",
          "links": null,
          "shape": 3,
          "label": "负面提示词"
        }
      ],
      "properties": {
        "Node name for S&R": "easy stylesSelector",
        "values": [
          "ads-luxury"
        ]
      },
      "widgets_values": [
        "fooocus_styles",
        "",
        "",
        "ads-luxury"
      ],
      "color": "#332922",
      "bgcolor": "#593930"
    },
    {
      "id": 22,
      "type": "ImageResizeKJ",
      "pos": [
        1450,
        -10
      ],
      "size": {
        "0": 640,
        "1": 214
      },
      "flags": {},
      "order": 10,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 21,
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
          "slot_index": 2,
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
            25,
            49
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
        false,
        2,
        0,
        0
      ],
      "color": "#322",
      "bgcolor": "#533"
    },
    {
      "id": 14,
      "type": "CheckpointLoaderSimple",
      "pos": [
        1450,
        -180
      ],
      "size": {
        "0": 320,
        "1": 130
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            14
          ],
          "shape": 3,
          "label": "模型",
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            15
          ],
          "shape": 3,
          "label": "CLIP",
          "slot_index": 1
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            28,
            43
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
        "majicmixRealistic_v7.safetensors"
      ],
      "color": "#322",
      "bgcolor": "#533"
    },
    {
      "id": 54,
      "type": "ImageUpscaleWithModel",
      "pos": [
        4390,
        -430
      ],
      "size": {
        "0": 241.79998779296875,
        "1": 46
      },
      "flags": {},
      "order": 32,
      "mode": 0,
      "inputs": [
        {
          "name": "upscale_model",
          "type": "UPSCALE_MODEL",
          "link": 66,
          "label": "放大模型",
          "slot_index": 0
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 65,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": null,
          "shape": 3,
          "label": "图像"
        }
      ],
      "properties": {
        "Node name for S&R": "ImageUpscaleWithModel"
      },
      "color": "#222",
      "bgcolor": "#000"
    },
    {
      "id": 55,
      "type": "UpscaleModelLoader",
      "pos": [
        4390,
        -330
      ],
      "size": {
        "0": 240,
        "1": 60
      },
      "flags": {},
      "order": 8,
      "mode": 0,
      "outputs": [
        {
          "name": "UPSCALE_MODEL",
          "type": "UPSCALE_MODEL",
          "links": [
            66
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
      ],
      "color": "#222",
      "bgcolor": "#000"
    },
    {
      "id": 19,
      "type": "SaveImage",
      "pos": [
        4650,
        -530
      ],
      "size": {
        "0": 410,
        "1": 680
      },
      "flags": {},
      "order": 31,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 42,
          "label": "图像"
        }
      ],
      "properties": {
        "Node name for S&R": "SaveImage"
      },
      "widgets_values": [
        "ComfyUI"
      ],
      "color": "#222",
      "bgcolor": "#000"
    },
    {
      "id": 29,
      "type": "VAEDecode",
      "pos": [
        4390,
        -530
      ],
      "size": {
        "0": 240,
        "1": 50
      },
      "flags": {},
      "order": 30,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 41,
          "label": "Latent"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 43,
          "label": "VAE",
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            42,
            65
          ],
          "shape": 3,
          "label": "图像",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      },
      "color": "#222",
      "bgcolor": "#000"
    },
    {
      "id": 17,
      "type": "KSampler",
      "pos": [
        4080,
        -530
      ],
      "size": {
        "0": 300,
        "1": 680
      },
      "flags": {},
      "order": 29,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 29,
          "label": "模型"
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 22,
          "label": "正面条件"
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 23,
          "label": "负面条件"
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 24,
          "label": "Latent",
          "slot_index": 3
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            41
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
        802632359013539,
        "randomize",
        20,
        8,
        "euler",
        "normal",
        1
      ],
      "color": "#222",
      "bgcolor": "#000"
    },
    {
      "id": 30,
      "type": "DeepTranslatorTextNode",
      "pos": [
        2210,
        -540
      ],
      "size": [
        406.60150146484375,
        320
      ],
      "flags": {
        "collapsed": true
      },
      "order": 12,
      "mode": 0,
      "inputs": [
        {
          "name": "text",
          "type": "STRING",
          "link": 63,
          "widget": {
            "name": "text"
          },
          "label": "文本"
        }
      ],
      "outputs": [
        {
          "name": "text",
          "type": "STRING",
          "links": [
            47,
            67
          ],
          "shape": 3,
          "label": "文本",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "DeepTranslatorTextNode"
      },
      "widgets_values": [
        "auto",
        "english",
        false,
        "",
        "",
        "GoogleTranslator",
        "三个棕色的化妆品瓶子",
        "proxy_hide",
        "authorization_hide"
      ],
      "color": "#332922",
      "bgcolor": "#593930"
    },
    {
      "id": 1,
      "type": "GroundingDinoSAMSegment (segment anything)",
      "pos": [
        3479,
        -210
      ],
      "size": {
        "0": 520,
        "1": 122
      },
      "flags": {},
      "order": 18,
      "mode": 0,
      "inputs": [
        {
          "name": "sam_model",
          "type": "SAM_MODEL",
          "link": 16,
          "label": "SAM模型",
          "slot_index": 0
        },
        {
          "name": "grounding_dino_model",
          "type": "GROUNDING_DINO_MODEL",
          "link": 2,
          "label": "G-Dino模型",
          "slot_index": 1
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 49,
          "label": "图像",
          "slot_index": 2
        },
        {
          "name": "prompt",
          "type": "STRING",
          "link": 67,
          "widget": {
            "name": "prompt"
          },
          "label": "提示词"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            4
          ],
          "shape": 3,
          "label": " 图像",
          "slot_index": 0
        },
        {
          "name": "MASK",
          "type": "MASK",
          "links": [
            20
          ],
          "shape": 3,
          "label": "遮罩",
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "GroundingDinoSAMSegment (segment anything)"
      },
      "widgets_values": [
        "object",
        0.3
      ],
      "color": "#232",
      "bgcolor": "#353"
    }
  ],
  "links": [
    [
      2,
      3,
      0,
      1,
      1,
      "GROUNDING_DINO_MODEL"
    ],
    [
      4,
      1,
      0,
      5,
      0,
      "IMAGE"
    ],
    [
      5,
      13,
      0,
      7,
      0,
      "IMAGE"
    ],
    [
      6,
      6,
      0,
      8,
      2,
      "CONTROL_NET"
    ],
    [
      7,
      13,
      0,
      8,
      3,
      "IMAGE"
    ],
    [
      8,
      12,
      0,
      10,
      0,
      "IMAGE"
    ],
    [
      9,
      8,
      0,
      11,
      0,
      "CONDITIONING"
    ],
    [
      10,
      8,
      1,
      11,
      1,
      "CONDITIONING"
    ],
    [
      11,
      9,
      0,
      11,
      2,
      "CONTROL_NET"
    ],
    [
      12,
      12,
      0,
      11,
      3,
      "IMAGE"
    ],
    [
      14,
      14,
      0,
      15,
      0,
      "MODEL"
    ],
    [
      15,
      14,
      1,
      15,
      1,
      "CLIP"
    ],
    [
      16,
      16,
      0,
      1,
      0,
      "SAM_MODEL"
    ],
    [
      17,
      4,
      0,
      20,
      1,
      "MASK"
    ],
    [
      20,
      1,
      1,
      4,
      0,
      "MASK"
    ],
    [
      21,
      18,
      0,
      22,
      0,
      "IMAGE"
    ],
    [
      22,
      11,
      0,
      17,
      1,
      "CONDITIONING"
    ],
    [
      23,
      11,
      1,
      17,
      2,
      "CONDITIONING"
    ],
    [
      24,
      20,
      0,
      17,
      3,
      "LATENT"
    ],
    [
      25,
      22,
      0,
      23,
      0,
      "IMAGE"
    ],
    [
      26,
      23,
      0,
      20,
      0,
      "LATENT"
    ],
    [
      28,
      14,
      2,
      23,
      1,
      "VAE"
    ],
    [
      29,
      15,
      0,
      17,
      0,
      "MODEL"
    ],
    [
      30,
      15,
      1,
      24,
      0,
      "CLIP"
    ],
    [
      31,
      15,
      1,
      25,
      0,
      "CLIP"
    ],
    [
      32,
      24,
      0,
      8,
      0,
      "CONDITIONING"
    ],
    [
      33,
      25,
      0,
      8,
      1,
      "CONDITIONING"
    ],
    [
      37,
      18,
      0,
      27,
      0,
      "*"
    ],
    [
      38,
      27,
      0,
      13,
      0,
      "IMAGE"
    ],
    [
      39,
      27,
      0,
      12,
      0,
      "IMAGE"
    ],
    [
      41,
      17,
      0,
      29,
      0,
      "LATENT"
    ],
    [
      42,
      29,
      0,
      19,
      0,
      "IMAGE"
    ],
    [
      43,
      14,
      2,
      29,
      1,
      "VAE"
    ],
    [
      47,
      30,
      0,
      34,
      0,
      "STRING"
    ],
    [
      49,
      22,
      0,
      1,
      2,
      "IMAGE"
    ],
    [
      57,
      43,
      0,
      34,
      1,
      "STRING"
    ],
    [
      58,
      34,
      0,
      45,
      0,
      "STRING"
    ],
    [
      59,
      45,
      0,
      24,
      1,
      "STRING"
    ],
    [
      63,
      52,
      0,
      30,
      0,
      "STRING"
    ],
    [
      64,
      53,
      0,
      43,
      0,
      "STRING"
    ],
    [
      65,
      29,
      0,
      54,
      1,
      "IMAGE"
    ],
    [
      66,
      55,
      0,
      54,
      0,
      "UPSCALE_MODEL"
    ],
    [
      67,
      30,
      0,
      1,
      3,
      "STRING"
    ]
  ],
  "groups": [
    {
      "title": "SAM Segment",
      "bounding": [
        3440,
        -650,
        610,
        870
      ],
      "color": "#8A8",
      "font_size": 24,
      "locked": false
    },
    {
      "title": "ControlNet",
      "bounding": [
        2610,
        -650,
        820,
        870
      ],
      "color": "#3f789e",
      "font_size": 24,
      "locked": false
    },
    {
      "title": "Prompt",
      "bounding": [
        2150,
        -650,
        450,
        870
      ],
      "color": "#b06634",
      "font_size": 24,
      "locked": false
    },
    {
      "title": "Inputs",
      "bounding": [
        1400,
        -650,
        740,
        870
      ],
      "color": "#A88",
      "font_size": 24,
      "locked": false
    },
    {
      "title": "Output",
      "bounding": [
        4060,
        -650,
        1040,
        870
      ],
      "color": "#444",
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
      "scale": 0.6830134553650709,
      "offset": [
        -1382.2299902799575,
        1051.6093321301944
      ]
    }
  },
  "version": 0.4
}
`})])}const d=r(t,[["render",a],["__file","进阶工作流1：产品摄影换背景.json.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC4%E8%AF%BE/%E8%BF%9B%E9%98%B6%E5%B7%A5%E4%BD%9C%E6%B5%811%EF%BC%9A%E4%BA%A7%E5%93%81%E6%91%84%E5%BD%B1%E6%8D%A2%E8%83%8C%E6%99%AF.json.html","title":"进阶工作流1：产品摄影换背景.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 56, \\"last_link_id\\": 67, \\"nodes\\": [ { \\"id\\": 8, \\"type\\": \\"ControlNetApplyAdvanced\\", \\"pos\\": [ 2660, 10 ], \\"size\\": { \\"0\\": 330, \\"1\\": 170 }, \\"flags\\": {}, \\"order\\": 27,...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC4%E8%AF%BE/%E8%BF%9B%E9%98%B6%E5%B7%A5%E4%BD%9C%E6%B5%811%EF%BC%9A%E4%BA%A7%E5%93%81%E6%91%84%E5%BD%B1%E6%8D%A2%E8%83%8C%E6%99%AF.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 56, \\"last_link_id\\": 67, \\"nodes\\": [ { \\"id\\": 8, \\"type\\": \\"ControlNetApplyAdvanced\\", \\"pos\\": [ 2660, 10 ], \\"size\\": { \\"0\\": 330, \\"1\\": 170 }, \\"flags\\": {}, \\"order\\": 27,..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"git":{},"readingTime":{"minutes":8.3,"words":2489},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第4课/进阶工作流1：产品摄影换背景.json","excerpt":"<p>{<br>\\n\\"last_node_id\\": 56,<br>\\n\\"last_link_id\\": 67,<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": 8,<br>\\n\\"type\\": \\"ControlNetApplyAdvanced\\",<br>\\n\\"pos\\": [<br>\\n2660,<br>\\n10<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 330,<br>\\n\\"1\\": 170<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 27,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 32,<br>\\n\\"label\\": \\"正面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 33,<br>\\n\\"label\\": \\"负面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"control_net\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"link\\": 6,<br>\\n\\"label\\": \\"ControlNet\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 7,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n9<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"正面条件\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n10<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"负面条件\\",<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetApplyAdvanced\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n0.25,<br>\\n0,<br>\\n0.25<br>\\n],<br>\\n\\"color\\": \\"#2a363b\\",<br>\\n\\"bgcolor\\": \\"#3f5159\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 3,<br>\\n\\"type\\": \\"GroundingDinoModelLoader (segment anything)\\",<br>\\n\\"pos\\": [<br>\\n3480,<br>\\n80<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 300,<br>\\n\\"1\\": 70<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 0,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"GROUNDING_DINO_MODEL\\",<br>\\n\\"type\\": \\"GROUNDING_DINO_MODEL\\",<br>\\n\\"links\\": [<br>\\n2<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"G-Dino模型\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"GroundingDinoModelLoader (segment anything)\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"GroundingDINO_SwinB (938MB)\\"<br>\\n],<br>\\n\\"color\\": \\"#232\\",<br>\\n\\"bgcolor\\": \\"#353\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 16,<br>\\n\\"type\\": \\"SAMLoader\\",<br>\\n\\"pos\\": [<br>\\n3480,<br>\\n-50<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 300,<br>\\n\\"1\\": 82<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 1,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"SAM_MODEL\\",<br>\\n\\"type\\": \\"SAM_MODEL\\",<br>\\n\\"links\\": [<br>\\n16<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"SAM模型\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"SAMLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"sam_vit_b_01ec64.pth\\",<br>\\n\\"Prefer GPU\\"<br>\\n],<br>\\n\\"color\\": \\"#232\\",<br>\\n\\"bgcolor\\": \\"#353\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 4,<br>\\n\\"type\\": \\"InvertMask\\",<br>\\n\\"pos\\": [<br>\\n3790,<br>\\n110<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 40<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 24,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"mask\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"link\\": 20,<br>\\n\\"label\\": \\"遮罩\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": [<br>\\n17<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"遮罩\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"InvertMask\\"<br>\\n},<br>\\n\\"color\\": \\"#232\\",<br>\\n\\"bgcolor\\": \\"#353\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 20,<br>\\n\\"type\\": \\"SetLatentNoiseMask\\",<br>\\n\\"pos\\": [<br>\\n3790,<br>\\n-50<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 120<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 26,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 26,<br>\\n\\"label\\": \\"Latent\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"mask\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"link\\": 17,<br>\\n\\"label\\": \\"遮罩\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n24<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"Latent\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"SetLatentNoiseMask\\"<br>\\n},<br>\\n\\"color\\": \\"#232\\",<br>\\n\\"bgcolor\\": \\"#353\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 7,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n2650,<br>\\n-560<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 330,<br>\\n\\"1\\": 300<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 20,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 5,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n},<br>\\n\\"color\\": \\"#2a363b\\",<br>\\n\\"bgcolor\\": \\"#3f5159\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 10,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n3030,<br>\\n-560<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 340,<br>\\n\\"1\\": 300<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 21,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 8,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n},<br>\\n\\"color\\": \\"#2a363b\\",<br>\\n\\"bgcolor\\": \\"#3f5159\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 9,<br>\\n\\"type\\": \\"ControlNetLoader\\",<br>\\n\\"pos\\": [<br>\\n3030,<br>\\n-210<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 340,<br>\\n\\"1\\": 60<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 2,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONTROL_NET\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"links\\": [<br>\\n11<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"ControlNet\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"control_v11p_sd15_canny.pth\\"<br>\\n],<br>\\n\\"color\\": \\"#2a363b\\",<br>\\n\\"bgcolor\\": \\"#3f5159\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 6,<br>\\n\\"type\\": \\"ControlNetLoader\\",<br>\\n\\"pos\\": [<br>\\n2660,<br>\\n-210<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 330,<br>\\n\\"1\\": 60<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONTROL_NET\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"links\\": [<br>\\n6<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"ControlNet\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"control_v11f1p_sd15_depth.pth\\"<br>\\n],<br>\\n\\"color\\": \\"#2a363b\\",<br>\\n\\"bgcolor\\": \\"#3f5159\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 13,<br>\\n\\"type\\": \\"Zoe-DepthMapPreprocessor\\",<br>\\n\\"pos\\": [<br>\\n2660,<br>\\n-110<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 330,<br>\\n\\"1\\": 80<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 15,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 38,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n5,<br>\\n7<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"Zoe-DepthMapPreprocessor\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n512<br>\\n],<br>\\n\\"color\\": \\"#2a363b\\",<br>\\n\\"bgcolor\\": \\"#3f5159\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 12,<br>\\n\\"type\\": \\"AIO_Preprocessor\\",<br>\\n\\"pos\\": [<br>\\n3030,<br>\\n-110<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 340,<br>\\n\\"1\\": 80<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 16,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 39,<br>\\n\\"label\\": \\"图像\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"resolution\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"link\\": null,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"resolution\\"<br>\\n},<br>\\n\\"label\\": \\"分辨率\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n8,<br>\\n12<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"AIO_Preprocessor\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"CannyEdgePreprocessor\\",<br>\\n512<br>\\n],<br>\\n\\"color\\": \\"#2a363b\\",<br>\\n\\"bgcolor\\": \\"#3f5159\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 11,<br>\\n\\"type\\": \\"ControlNetApplyAdvanced\\",<br>\\n\\"pos\\": [<br>\\n3030,<br>\\n10<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 338.7951965332031,<br>\\n\\"1\\": 171.03765869140625<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 28,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 9,<br>\\n\\"label\\": \\"正面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 10,<br>\\n\\"label\\": \\"负面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"control_net\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"link\\": 11,<br>\\n\\"label\\": \\"ControlNet\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 12,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n22<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"正面条件\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n23<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"负面条件\\",<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetApplyAdvanced\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n0.5,<br>\\n0,<br>\\n0.25<br>\\n],<br>\\n\\"color\\": \\"#2a363b\\",<br>\\n\\"bgcolor\\": \\"#3f5159\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 43,<br>\\n\\"type\\": \\"DeepTranslatorTextNode\\",<br>\\n\\"pos\\": [<br>\\n2210,<br>\\n-500<br>\\n],<br>\\n\\"size\\": [<br>\\n406.60150146484375,<br>\\n320<br>\\n],<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 9,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"text\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 64,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text\\"<br>\\n},<br>\\n\\"label\\": \\"文本\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"text\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n57<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"文本\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"DeepTranslatorTextNode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"auto\\",<br>\\n\\"english\\",<br>\\nfalse,<br>\\n\\"\\",<br>\\n\\"\\",<br>\\n\\"GoogleTranslator\\",<br>\\n\\"放在水面上，蓝色调，水面倒影，\\",<br>\\n\\"proxy_hide\\",<br>\\n\\"authorization_hide\\"<br>\\n],<br>\\n\\"color\\": \\"#332922\\",<br>\\n\\"bgcolor\\": \\"#593930\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 34,<br>\\n\\"type\\": \\"easy promptConcat\\",<br>\\n\\"pos\\": [<br>\\n2400,<br>\\n-520<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 106<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 17,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"prompt1\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 47,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"prompt1\\"<br>\\n},<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"提示词1\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"prompt2\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 57,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"prompt2\\"<br>\\n},<br>\\n\\"slot_index\\": 1,<br>\\n\\"label\\": \\"提示词2\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"prompt\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n58<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"提示词\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"easy promptConcat\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"\\",<br>\\n\\"\\",<br>\\n\\",\\"<br>\\n],<br>\\n\\"color\\": \\"#332922\\",<br>\\n\\"bgcolor\\": \\"#593930\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 25,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n2370,<br>\\n130<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 400,<br>\\n\\"1\\": 200<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 19,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 31,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n33<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"条件\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"embedding:UnrealisticDream, worst quality, ugly, simple_background, \\"<br>\\n],<br>\\n\\"color\\": \\"#332922\\",<br>\\n\\"bgcolor\\": \\"#593930\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 24,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n2210,<br>\\n130<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 400,<br>\\n\\"1\\": 200<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 25,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 30,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"text\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 59,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text\\"<br>\\n},<br>\\n\\"label\\": \\"文本\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n32<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"条件\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"\\"<br>\\n],<br>\\n\\"color\\": \\"#332922\\",<br>\\n\\"bgcolor\\": \\"#593930\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 27,<br>\\n\\"type\\": \\"Reroute\\",<br>\\n\\"pos\\": [<br>\\n2620,<br>\\n180<br>\\n],<br>\\n\\"size\\": [<br>\\n75,<br>\\n26<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 11,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"<em>\\",<br>\\n\\"link\\": 37,<br>\\n\\"label\\": \\"\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n38,<br>\\n39<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"showOutputText\\": false,<br>\\n\\"horizontal\\": false<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 5,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n3480,<br>\\n-540<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 520,<br>\\n\\"1\\": 280<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 23,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 4,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n},<br>\\n\\"color\\": \\"#232\\",<br>\\n\\"bgcolor\\": \\"#353\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 23,<br>\\n\\"type\\": \\"VAEEncode\\",<br>\\n\\"pos\\": [<br>\\n2310,<br>\\n180<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 46<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 14,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"pixels\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 25,<br>\\n\\"label\\": \\"图像\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 28,<br>\\n\\"label\\": \\"VAE\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n26<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"Latent\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEEncode\\"<br>\\n},<br>\\n\\"color\\": \\"#332922\\",<br>\\n\\"bgcolor\\": \\"#593930\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 53,<br>\\n\\"type\\": \\"PrimitiveNode\\",<br>\\n\\"pos\\": [<br>\\n1780,<br>\\n-370<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 310,<br>\\n\\"1\\": 140<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"STRING\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n64<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text\\"<br>\\n}<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Run widget replace on values\\": false<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"放在水面上，蓝色调，水面倒影，\\"<br>\\n],<br>\\n\\"color\\": \\"#322\\",<br>\\n\\"bgcolor\\": \\"#533\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 18,<br>\\n\\"type\\": \\"LoadImage\\",<br>\\n\\"pos\\": [<br>\\n1450,<br>\\n-540<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 314<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 5,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n21,<br>\\n37<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"遮罩\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"3-01.jpg\\",<br>\\n\\"image\\"<br>\\n],<br>\\n\\"color\\": \\"#322\\",<br>\\n\\"bgcolor\\": \\"#533\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 52,<br>\\n\\"type\\": \\"PrimitiveNode\\",<br>\\n\\"pos\\": [<br>\\n1780,<br>\\n-540<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 310,<br>\\n\\"1\\": 130<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"STRING\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n63<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text\\"<br>\\n}<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Run widget replace on values\\": false<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"三个棕色的化妆品瓶子\\"<br>\\n],<br>\\n\\"color\\": \\"#322\\",<br>\\n\\"bgcolor\\": \\"#533\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 15,<br>\\n\\"type\\": \\"LoraLoader\\",<br>\\n\\"pos\\": [<br>\\n1780,<br>\\n-180<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 310,<br>\\n\\"1\\": 130<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 13,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 14,<br>\\n\\"label\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 15,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n29<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"模型\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n30,<br>\\n31<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"CLIP\\",<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LoraLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"产品摄影，北欧极简高质感_1.0.safetensors\\",<br>\\n0.25,<br>\\n0.25<br>\\n],<br>\\n\\"color\\": \\"#322\\",<br>\\n\\"bgcolor\\": \\"#533\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 45,<br>\\n\\"type\\": \\"easy stylesSelector\\",<br>\\n\\"pos\\": [<br>\\n2210,<br>\\n-450<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 310,<br>\\n\\"1\\": 530<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": false<br>\\n},<br>\\n\\"order\\": 22,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 58,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"positive\\"<br>\\n},<br>\\n\\"label\\": \\"正面提示词（可选）\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": null,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"negative\\"<br>\\n},<br>\\n\\"label\\": \\"负面提示词（可选）\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n59<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"正面提示词\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"负面提示词\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"easy stylesSelector\\",<br>\\n\\"values\\": [<br>\\n\\"ads-luxury\\"<br>\\n]<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"fooocus_styles\\",<br>\\n\\"\\",<br>\\n\\"\\",<br>\\n\\"ads-luxury\\"<br>\\n],<br>\\n\\"color\\": \\"#332922\\",<br>\\n\\"bgcolor\\": \\"#593930\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 22,<br>\\n\\"type\\": \\"ImageResizeKJ\\",<br>\\n\\"pos\\": [<br>\\n1450,<br>\\n-10<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 640,<br>\\n\\"1\\": 214<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 10,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 21,<br>\\n\\"label\\": \\"图像\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"get_image_size\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": null,<br>\\n\\"label\\": \\"参考图像大小\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"width_input\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"link\\": null,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"width_input\\"<br>\\n},<br>\\n\\"slot_index\\": 2,<br>\\n\\"label\\": \\"宽度\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"height_input\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"link\\": null,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"height_input\\"<br>\\n},<br>\\n\\"label\\": \\"高度\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n25,<br>\\n49<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"width\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"宽度\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"height\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"高度\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ImageResizeKJ\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n768,<br>\\n768,<br>\\n\\"nearest-exact\\",<br>\\nfalse,<br>\\n2,<br>\\n0,<br>\\n0<br>\\n],<br>\\n\\"color\\": \\"#322\\",<br>\\n\\"bgcolor\\": \\"#533\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 14,<br>\\n\\"type\\": \\"CheckpointLoaderSimple\\",<br>\\n\\"pos\\": [<br>\\n1450,<br>\\n-180<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 320,<br>\\n\\"1\\": 130<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 7,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n14<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"模型\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n15<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"CLIP\\",<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n28,<br>\\n43<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"VAE\\",<br>\\n\\"slot_index\\": 2<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"majicmixRealistic_v7.safetensors\\"<br>\\n],<br>\\n\\"color\\": \\"#322\\",<br>\\n\\"bgcolor\\": \\"#533\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 54,<br>\\n\\"type\\": \\"ImageUpscaleWithModel\\",<br>\\n\\"pos\\": [<br>\\n4390,<br>\\n-430<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 241.79998779296875,<br>\\n\\"1\\": 46<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 32,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"upscale_model\\",<br>\\n\\"type\\": \\"UPSCALE_MODEL\\",<br>\\n\\"link\\": 66,<br>\\n\\"label\\": \\"放大模型\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 65,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ImageUpscaleWithModel\\"<br>\\n},<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 55,<br>\\n\\"type\\": \\"UpscaleModelLoader\\",<br>\\n\\"pos\\": [<br>\\n4390,<br>\\n-330<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 240,<br>\\n\\"1\\": 60<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 8,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"UPSCALE_MODEL\\",<br>\\n\\"type\\": \\"UPSCALE_MODEL\\",<br>\\n\\"links\\": [<br>\\n66<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"放大模型\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"UpscaleModelLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"4xUltrasharp_4xUltrasharpV10.pth\\"<br>\\n],<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 19,<br>\\n\\"type\\": \\"SaveImage\\",<br>\\n\\"pos\\": [<br>\\n4650,<br>\\n-530<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 410,<br>\\n\\"1\\": 680<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 31,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 42,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"SaveImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"ComfyUI\\"<br>\\n],<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 29,<br>\\n\\"type\\": \\"VAEDecode\\",<br>\\n\\"pos\\": [<br>\\n4390,<br>\\n-530<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 240,<br>\\n\\"1\\": 50<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 30,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 41,<br>\\n\\"label\\": \\"Latent\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 43,<br>\\n\\"label\\": \\"VAE\\",<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n42,<br>\\n65<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"<br>\\n},<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 17,<br>\\n\\"type\\": \\"KSampler\\",<br>\\n\\"pos\\": [<br>\\n4080,<br>\\n-530<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 300,<br>\\n\\"1\\": 680<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 29,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 29,<br>\\n\\"label\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 22,<br>\\n\\"label\\": \\"正面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 23,<br>\\n\\"label\\": \\"负面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 24,<br>\\n\\"label\\": \\"Latent\\",<br>\\n\\"slot_index\\": 3<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n41<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"Latent\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n802632359013539,<br>\\n\\"randomize\\",<br>\\n20,<br>\\n8,<br>\\n\\"euler\\",<br>\\n\\"normal\\",<br>\\n1<br>\\n],<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 30,<br>\\n\\"type\\": \\"DeepTranslatorTextNode\\",<br>\\n\\"pos\\": [<br>\\n2210,<br>\\n-540<br>\\n],<br>\\n\\"size\\": [<br>\\n406.60150146484375,<br>\\n320<br>\\n],<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 12,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"text\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 63,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text\\"<br>\\n},<br>\\n\\"label\\": \\"文本\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"text\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n47,<br>\\n67<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"文本\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"DeepTranslatorTextNode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"auto\\",<br>\\n\\"english\\",<br>\\nfalse,<br>\\n\\"\\",<br>\\n\\"\\",<br>\\n\\"GoogleTranslator\\",<br>\\n\\"三个棕色的化妆品瓶子\\",<br>\\n\\"proxy_hide\\",<br>\\n\\"authorization_hide\\"<br>\\n],<br>\\n\\"color\\": \\"#332922\\",<br>\\n\\"bgcolor\\": \\"#593930\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 1,<br>\\n\\"type\\": \\"GroundingDinoSAMSegment (segment anything)\\",<br>\\n\\"pos\\": [<br>\\n3479,<br>\\n-210<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 520,<br>\\n\\"1\\": 122<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 18,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"sam_model\\",<br>\\n\\"type\\": \\"SAM_MODEL\\",<br>\\n\\"link\\": 16,<br>\\n\\"label\\": \\"SAM模型\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"grounding_dino_model\\",<br>\\n\\"type\\": \\"GROUNDING_DINO_MODEL\\",<br>\\n\\"link\\": 2,<br>\\n\\"label\\": \\"G-Dino模型\\",<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 49,<br>\\n\\"label\\": \\"图像\\",<br>\\n\\"slot_index\\": 2<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"prompt\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 67,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"prompt\\"<br>\\n},<br>\\n\\"label\\": \\"提示词\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n4<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\" 图像\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": [<br>\\n20<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"遮罩\\",<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"GroundingDinoSAMSegment (segment anything)\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"object\\",<br>\\n0.3<br>\\n],<br>\\n\\"color\\": \\"#232\\",<br>\\n\\"bgcolor\\": \\"#353\\"<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\n2,<br>\\n3,<br>\\n0,<br>\\n1,<br>\\n1,<br>\\n\\"GROUNDING_DINO_MODEL\\"<br>\\n],<br>\\n[<br>\\n4,<br>\\n1,<br>\\n0,<br>\\n5,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n5,<br>\\n13,<br>\\n0,<br>\\n7,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n6,<br>\\n6,<br>\\n0,<br>\\n8,<br>\\n2,<br>\\n\\"CONTROL_NET\\"<br>\\n],<br>\\n[<br>\\n7,<br>\\n13,<br>\\n0,<br>\\n8,<br>\\n3,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n8,<br>\\n12,<br>\\n0,<br>\\n10,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n9,<br>\\n8,<br>\\n0,<br>\\n11,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n10,<br>\\n8,<br>\\n1,<br>\\n11,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n11,<br>\\n9,<br>\\n0,<br>\\n11,<br>\\n2,<br>\\n\\"CONTROL_NET\\"<br>\\n],<br>\\n[<br>\\n12,<br>\\n12,<br>\\n0,<br>\\n11,<br>\\n3,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n14,<br>\\n14,<br>\\n0,<br>\\n15,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n15,<br>\\n14,<br>\\n1,<br>\\n15,<br>\\n1,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n16,<br>\\n16,<br>\\n0,<br>\\n1,<br>\\n0,<br>\\n\\"SAM_MODEL\\"<br>\\n],<br>\\n[<br>\\n17,<br>\\n4,<br>\\n0,<br>\\n20,<br>\\n1,<br>\\n\\"MASK\\"<br>\\n],<br>\\n[<br>\\n20,<br>\\n1,<br>\\n1,<br>\\n4,<br>\\n0,<br>\\n\\"MASK\\"<br>\\n],<br>\\n[<br>\\n21,<br>\\n18,<br>\\n0,<br>\\n22,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n22,<br>\\n11,<br>\\n0,<br>\\n17,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n23,<br>\\n11,<br>\\n1,<br>\\n17,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n24,<br>\\n20,<br>\\n0,<br>\\n17,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n25,<br>\\n22,<br>\\n0,<br>\\n23,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n26,<br>\\n23,<br>\\n0,<br>\\n20,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n28,<br>\\n14,<br>\\n2,<br>\\n23,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n29,<br>\\n15,<br>\\n0,<br>\\n17,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n30,<br>\\n15,<br>\\n1,<br>\\n24,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n31,<br>\\n15,<br>\\n1,<br>\\n25,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n32,<br>\\n24,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n33,<br>\\n25,<br>\\n0,<br>\\n8,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n37,<br>\\n18,<br>\\n0,<br>\\n27,<br>\\n0,<br>\\n\\"</em>\\"<br>\\n],<br>\\n[<br>\\n38,<br>\\n27,<br>\\n0,<br>\\n13,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n39,<br>\\n27,<br>\\n0,<br>\\n12,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n41,<br>\\n17,<br>\\n0,<br>\\n29,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n42,<br>\\n29,<br>\\n0,<br>\\n19,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n43,<br>\\n14,<br>\\n2,<br>\\n29,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n47,<br>\\n30,<br>\\n0,<br>\\n34,<br>\\n0,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n49,<br>\\n22,<br>\\n0,<br>\\n1,<br>\\n2,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n57,<br>\\n43,<br>\\n0,<br>\\n34,<br>\\n1,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n58,<br>\\n34,<br>\\n0,<br>\\n45,<br>\\n0,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n59,<br>\\n45,<br>\\n0,<br>\\n24,<br>\\n1,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n63,<br>\\n52,<br>\\n0,<br>\\n30,<br>\\n0,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n64,<br>\\n53,<br>\\n0,<br>\\n43,<br>\\n0,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n65,<br>\\n29,<br>\\n0,<br>\\n54,<br>\\n1,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n66,<br>\\n55,<br>\\n0,<br>\\n54,<br>\\n0,<br>\\n\\"UPSCALE_MODEL\\"<br>\\n],<br>\\n[<br>\\n67,<br>\\n30,<br>\\n0,<br>\\n1,<br>\\n3,<br>\\n\\"STRING\\"<br>\\n]<br>\\n],<br>\\n\\"groups\\": [<br>\\n{<br>\\n\\"title\\": \\"SAM Segment\\",<br>\\n\\"bounding\\": [<br>\\n3440,<br>\\n-650,<br>\\n610,<br>\\n870<br>\\n],<br>\\n\\"color\\": \\"#8A8\\",<br>\\n\\"font_size\\": 24,<br>\\n\\"locked\\": false<br>\\n},<br>\\n{<br>\\n\\"title\\": \\"ControlNet\\",<br>\\n\\"bounding\\": [<br>\\n2610,<br>\\n-650,<br>\\n820,<br>\\n870<br>\\n],<br>\\n\\"color\\": \\"#3f789e\\",<br>\\n\\"font_size\\": 24,<br>\\n\\"locked\\": false<br>\\n},<br>\\n{<br>\\n\\"title\\": \\"Prompt\\",<br>\\n\\"bounding\\": [<br>\\n2150,<br>\\n-650,<br>\\n450,<br>\\n870<br>\\n],<br>\\n\\"color\\": \\"#b06634\\",<br>\\n\\"font_size\\": 24,<br>\\n\\"locked\\": false<br>\\n},<br>\\n{<br>\\n\\"title\\": \\"Inputs\\",<br>\\n\\"bounding\\": [<br>\\n1400,<br>\\n-650,<br>\\n740,<br>\\n870<br>\\n],<br>\\n\\"color\\": \\"#A88\\",<br>\\n\\"font_size\\": 24,<br>\\n\\"locked\\": false<br>\\n},<br>\\n{<br>\\n\\"title\\": \\"Output\\",<br>\\n\\"bounding\\": [<br>\\n4060,<br>\\n-650,<br>\\n1040,<br>\\n870<br>\\n],<br>\\n\\"color\\": \\"#444\\",<br>\\n\\"font_size\\": 24,<br>\\n\\"locked\\": false<br>\\n}<br>\\n],<br>\\n\\"config\\": {},<br>\\n\\"extra\\": {<br>\\n\\"0246.VERSION\\": [<br>\\n0,<br>\\n0,<br>\\n4<br>\\n],<br>\\n\\"ds\\": {<br>\\n\\"scale\\": 0.6830134553650709,<br>\\n\\"offset\\": [<br>\\n-1382.2299902799575,<br>\\n1051.6093321301944<br>\\n]<br>\\n}<br>\\n},<br>\\n\\"version\\": 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第4课/进阶工作流1：产品摄影换背景.json","value":{"title":"进阶工作流1：产品摄影换背景.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第4课/进阶工作流1：产品摄影换背景.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{d as comp,m as data};

import{_ as e,c as o,e as l,o as t,r as a}from"./app-G9P12kHM.js";const s={};function i(p,r){const n=a("VueFlow");return t(),o("div",null,[l(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const m=e(s,[["render",i],["__file","进阶工作流1：产品摄影换背景.json.html.vue"]]),N=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC4%E8%AF%BE/%E8%BF%9B%E9%98%B6%E5%B7%A5%E4%BD%9C%E6%B5%811%EF%BC%9A%E4%BA%A7%E5%93%81%E6%91%84%E5%BD%B1%E6%8D%A2%E8%83%8C%E6%99%AF.json","title":"","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 56, \\"last_link_id\\": 67, \\"nodes\\": [ { \\"id\\": 8, \\"type\\": \\"ControlNetApplyAdvanced\\", \\"pos\\": [ 2660, 10 ], \\"size\\": { \\"0\\": 330, \\"1\\": 170 }, \\"flags\\": {}, \\"order\\": 27,...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/Pkmer-Math/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC4%E8%AF%BE/%E8%BF%9B%E9%98%B6%E5%B7%A5%E4%BD%9C%E6%B5%811%EF%BC%9A%E4%BA%A7%E5%93%81%E6%91%84%E5%BD%B1%E6%8D%A2%E8%83%8C%E6%99%AF.json"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 56, \\"last_link_id\\": 67, \\"nodes\\": [ { \\"id\\": 8, \\"type\\": \\"ControlNetApplyAdvanced\\", \\"pos\\": [ 2660, 10 ], \\"size\\": { \\"0\\": 330, \\"1\\": 170 }, \\"flags\\": {}, \\"order\\": 27,..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":8.3,"words":2489},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第4课/进阶工作流1：产品摄影换背景.json","excerpt":"<p>{\\n\\"last_node_id\\": 56,\\n\\"last_link_id\\": 67,\\n\\"nodes\\": [\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"ControlNetApplyAdvanced\\",\\n\\"pos\\": [\\n2660,\\n10\\n],\\n\\"size\\": {\\n\\"0\\": 330,\\n\\"1\\": 170\\n},\\n\\"flags\\": {},\\n\\"order\\": 27,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 32,\\n\\"label\\": \\"正面条件\\"\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 33,\\n\\"label\\": \\"负面条件\\"\\n},\\n{\\n\\"name\\": \\"control_net\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"link\\": 6,\\n\\"label\\": \\"ControlNet\\"\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 7,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n9\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"正面条件\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n10\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"负面条件\\",\\n\\"slot_index\\": 1\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetApplyAdvanced\\"\\n},\\n\\"widgets_values\\": [\\n0.25,\\n0,\\n0.25\\n],\\n\\"color\\": \\"#2a363b\\",\\n\\"bgcolor\\": \\"#3f5159\\"\\n},\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"GroundingDinoModelLoader (segment anything)\\",\\n\\"pos\\": [\\n3480,\\n80\\n],\\n\\"size\\": {\\n\\"0\\": 300,\\n\\"1\\": 70\\n},\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"GROUNDING_DINO_MODEL\\",\\n\\"type\\": \\"GROUNDING_DINO_MODEL\\",\\n\\"links\\": [\\n2\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"G-Dino模型\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"GroundingDinoModelLoader (segment anything)\\"\\n},\\n\\"widgets_values\\": [\\n\\"GroundingDINO_SwinB (938MB)\\"\\n],\\n\\"color\\": \\"#232\\",\\n\\"bgcolor\\": \\"#353\\"\\n},\\n{\\n\\"id\\": 16,\\n\\"type\\": \\"SAMLoader\\",\\n\\"pos\\": [\\n3480,\\n-50\\n],\\n\\"size\\": {\\n\\"0\\": 300,\\n\\"1\\": 82\\n},\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"SAM_MODEL\\",\\n\\"type\\": \\"SAM_MODEL\\",\\n\\"links\\": [\\n16\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"SAM模型\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"SAMLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"sam_vit_b_01ec64.pth\\",\\n\\"Prefer GPU\\"\\n],\\n\\"color\\": \\"#232\\",\\n\\"bgcolor\\": \\"#353\\"\\n},\\n{\\n\\"id\\": 4,\\n\\"type\\": \\"InvertMask\\",\\n\\"pos\\": [\\n3790,\\n110\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 40\\n},\\n\\"flags\\": {},\\n\\"order\\": 24,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"mask\\",\\n\\"type\\": \\"MASK\\",\\n\\"link\\": 20,\\n\\"label\\": \\"遮罩\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": [\\n17\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"遮罩\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"InvertMask\\"\\n},\\n\\"color\\": \\"#232\\",\\n\\"bgcolor\\": \\"#353\\"\\n},\\n{\\n\\"id\\": 20,\\n\\"type\\": \\"SetLatentNoiseMask\\",\\n\\"pos\\": [\\n3790,\\n-50\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 120\\n},\\n\\"flags\\": {},\\n\\"order\\": 26,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 26,\\n\\"label\\": \\"Latent\\"\\n},\\n{\\n\\"name\\": \\"mask\\",\\n\\"type\\": \\"MASK\\",\\n\\"link\\": 17,\\n\\"label\\": \\"遮罩\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n24\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"SetLatentNoiseMask\\"\\n},\\n\\"color\\": \\"#232\\",\\n\\"bgcolor\\": \\"#353\\"\\n},\\n{\\n\\"id\\": 7,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n2650,\\n-560\\n],\\n\\"size\\": {\\n\\"0\\": 330,\\n\\"1\\": 300\\n},\\n\\"flags\\": {},\\n\\"order\\": 20,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 5,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n},\\n\\"color\\": \\"#2a363b\\",\\n\\"bgcolor\\": \\"#3f5159\\"\\n},\\n{\\n\\"id\\": 10,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n3030,\\n-560\\n],\\n\\"size\\": {\\n\\"0\\": 340,\\n\\"1\\": 300\\n},\\n\\"flags\\": {},\\n\\"order\\": 21,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 8,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n},\\n\\"color\\": \\"#2a363b\\",\\n\\"bgcolor\\": \\"#3f5159\\"\\n},\\n{\\n\\"id\\": 9,\\n\\"type\\": \\"ControlNetLoader\\",\\n\\"pos\\": [\\n3030,\\n-210\\n],\\n\\"size\\": {\\n\\"0\\": 340,\\n\\"1\\": 60\\n},\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONTROL_NET\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"links\\": [\\n11\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"ControlNet\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"control_v11p_sd15_canny.pth\\"\\n],\\n\\"color\\": \\"#2a363b\\",\\n\\"bgcolor\\": \\"#3f5159\\"\\n},\\n{\\n\\"id\\": 6,\\n\\"type\\": \\"ControlNetLoader\\",\\n\\"pos\\": [\\n2660,\\n-210\\n],\\n\\"size\\": {\\n\\"0\\": 330,\\n\\"1\\": 60\\n},\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONTROL_NET\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"links\\": [\\n6\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"ControlNet\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"control_v11f1p_sd15_depth.pth\\"\\n],\\n\\"color\\": \\"#2a363b\\",\\n\\"bgcolor\\": \\"#3f5159\\"\\n},\\n{\\n\\"id\\": 13,\\n\\"type\\": \\"Zoe-DepthMapPreprocessor\\",\\n\\"pos\\": [\\n2660,\\n-110\\n],\\n\\"size\\": {\\n\\"0\\": 330,\\n\\"1\\": 80\\n},\\n\\"flags\\": {},\\n\\"order\\": 15,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 38,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n5,\\n7\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"Zoe-DepthMapPreprocessor\\"\\n},\\n\\"widgets_values\\": [\\n512\\n],\\n\\"color\\": \\"#2a363b\\",\\n\\"bgcolor\\": \\"#3f5159\\"\\n},\\n{\\n\\"id\\": 12,\\n\\"type\\": \\"AIO_Preprocessor\\",\\n\\"pos\\": [\\n3030,\\n-110\\n],\\n\\"size\\": {\\n\\"0\\": 340,\\n\\"1\\": 80\\n},\\n\\"flags\\": {},\\n\\"order\\": 16,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 39,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"resolution\\",\\n\\"type\\": \\"INT\\",\\n\\"link\\": null,\\n\\"widget\\": {\\n\\"name\\": \\"resolution\\"\\n},\\n\\"label\\": \\"分辨率\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n8,\\n12\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"AIO_Preprocessor\\"\\n},\\n\\"widgets_values\\": [\\n\\"CannyEdgePreprocessor\\",\\n512\\n],\\n\\"color\\": \\"#2a363b\\",\\n\\"bgcolor\\": \\"#3f5159\\"\\n},\\n{\\n\\"id\\": 11,\\n\\"type\\": \\"ControlNetApplyAdvanced\\",\\n\\"pos\\": [\\n3030,\\n10\\n],\\n\\"size\\": {\\n\\"0\\": 338.7951965332031,\\n\\"1\\": 171.03765869140625\\n},\\n\\"flags\\": {},\\n\\"order\\": 28,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 9,\\n\\"label\\": \\"正面条件\\"\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 10,\\n\\"label\\": \\"负面条件\\"\\n},\\n{\\n\\"name\\": \\"control_net\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"link\\": 11,\\n\\"label\\": \\"ControlNet\\"\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 12,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n22\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"正面条件\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n23\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"负面条件\\",\\n\\"slot_index\\": 1\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetApplyAdvanced\\"\\n},\\n\\"widgets_values\\": [\\n0.5,\\n0,\\n0.25\\n],\\n\\"color\\": \\"#2a363b\\",\\n\\"bgcolor\\": \\"#3f5159\\"\\n},\\n{\\n\\"id\\": 43,\\n\\"type\\": \\"DeepTranslatorTextNode\\",\\n\\"pos\\": [\\n2210,\\n-500\\n],\\n\\"size\\": [\\n406.60150146484375,\\n320\\n],\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"text\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 64,\\n\\"widget\\": {\\n\\"name\\": \\"text\\"\\n},\\n\\"label\\": \\"文本\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"text\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n57\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"文本\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"DeepTranslatorTextNode\\"\\n},\\n\\"widgets_values\\": [\\n\\"auto\\",\\n\\"english\\",\\nfalse,\\n\\"\\",\\n\\"\\",\\n\\"GoogleTranslator\\",\\n\\"放在水面上，蓝色调，水面倒影，\\",\\n\\"proxy_hide\\",\\n\\"authorization_hide\\"\\n],\\n\\"color\\": \\"#332922\\",\\n\\"bgcolor\\": \\"#593930\\"\\n},\\n{\\n\\"id\\": 34,\\n\\"type\\": \\"easy promptConcat\\",\\n\\"pos\\": [\\n2400,\\n-520\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 106\\n},\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 17,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"prompt1\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 47,\\n\\"widget\\": {\\n\\"name\\": \\"prompt1\\"\\n},\\n\\"slot_index\\": 0,\\n\\"label\\": \\"提示词1\\"\\n},\\n{\\n\\"name\\": \\"prompt2\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 57,\\n\\"widget\\": {\\n\\"name\\": \\"prompt2\\"\\n},\\n\\"slot_index\\": 1,\\n\\"label\\": \\"提示词2\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"prompt\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n58\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"提示词\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"easy promptConcat\\"\\n},\\n\\"widgets_values\\": [\\n\\"\\",\\n\\"\\",\\n\\",\\"\\n],\\n\\"color\\": \\"#332922\\",\\n\\"bgcolor\\": \\"#593930\\"\\n},\\n{\\n\\"id\\": 25,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n2370,\\n130\\n],\\n\\"size\\": {\\n\\"0\\": 400,\\n\\"1\\": 200\\n},\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 19,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 31,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n33\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"条件\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"embedding:UnrealisticDream, worst quality, ugly, simple_background, \\"\\n],\\n\\"color\\": \\"#332922\\",\\n\\"bgcolor\\": \\"#593930\\"\\n},\\n{\\n\\"id\\": 24,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n2210,\\n130\\n],\\n\\"size\\": {\\n\\"0\\": 400,\\n\\"1\\": 200\\n},\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 25,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 30,\\n\\"label\\": \\"CLIP\\"\\n},\\n{\\n\\"name\\": \\"text\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 59,\\n\\"widget\\": {\\n\\"name\\": \\"text\\"\\n},\\n\\"label\\": \\"文本\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n32\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"条件\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"\\"\\n],\\n\\"color\\": \\"#332922\\",\\n\\"bgcolor\\": \\"#593930\\"\\n},\\n{\\n\\"id\\": 27,\\n\\"type\\": \\"Reroute\\",\\n\\"pos\\": [\\n2620,\\n180\\n],\\n\\"size\\": [\\n75,\\n26\\n],\\n\\"flags\\": {},\\n\\"order\\": 11,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"<em>\\",\\n\\"link\\": 37,\\n\\"label\\": \\"\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n38,\\n39\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"\\"\\n}\\n],\\n\\"properties\\": {\\n\\"showOutputText\\": false,\\n\\"horizontal\\": false\\n}\\n},\\n{\\n\\"id\\": 5,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n3480,\\n-540\\n],\\n\\"size\\": {\\n\\"0\\": 520,\\n\\"1\\": 280\\n},\\n\\"flags\\": {},\\n\\"order\\": 23,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 4,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n},\\n\\"color\\": \\"#232\\",\\n\\"bgcolor\\": \\"#353\\"\\n},\\n{\\n\\"id\\": 23,\\n\\"type\\": \\"VAEEncode\\",\\n\\"pos\\": [\\n2310,\\n180\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 14,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"pixels\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 25,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 28,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n26\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"Latent\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEEncode\\"\\n},\\n\\"color\\": \\"#332922\\",\\n\\"bgcolor\\": \\"#593930\\"\\n},\\n{\\n\\"id\\": 53,\\n\\"type\\": \\"PrimitiveNode\\",\\n\\"pos\\": [\\n1780,\\n-370\\n],\\n\\"size\\": {\\n\\"0\\": 310,\\n\\"1\\": 140\\n},\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"STRING\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n64\\n],\\n\\"slot_index\\": 0,\\n\\"widget\\": {\\n\\"name\\": \\"text\\"\\n}\\n}\\n],\\n\\"properties\\": {\\n\\"Run widget replace on values\\": false\\n},\\n\\"widgets_values\\": [\\n\\"放在水面上，蓝色调，水面倒影，\\"\\n],\\n\\"color\\": \\"#322\\",\\n\\"bgcolor\\": \\"#533\\"\\n},\\n{\\n\\"id\\": 18,\\n\\"type\\": \\"LoadImage\\",\\n\\"pos\\": [\\n1450,\\n-540\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 314\\n},\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n21,\\n37\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"遮罩\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"3-01.jpg\\",\\n\\"image\\"\\n],\\n\\"color\\": \\"#322\\",\\n\\"bgcolor\\": \\"#533\\"\\n},\\n{\\n\\"id\\": 52,\\n\\"type\\": \\"PrimitiveNode\\",\\n\\"pos\\": [\\n1780,\\n-540\\n],\\n\\"size\\": {\\n\\"0\\": 310,\\n\\"1\\": 130\\n},\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"STRING\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n63\\n],\\n\\"slot_index\\": 0,\\n\\"widget\\": {\\n\\"name\\": \\"text\\"\\n}\\n}\\n],\\n\\"properties\\": {\\n\\"Run widget replace on values\\": false\\n},\\n\\"widgets_values\\": [\\n\\"三个棕色的化妆品瓶子\\"\\n],\\n\\"color\\": \\"#322\\",\\n\\"bgcolor\\": \\"#533\\"\\n},\\n{\\n\\"id\\": 15,\\n\\"type\\": \\"LoraLoader\\",\\n\\"pos\\": [\\n1780,\\n-180\\n],\\n\\"size\\": {\\n\\"0\\": 310,\\n\\"1\\": 130\\n},\\n\\"flags\\": {},\\n\\"order\\": 13,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 14,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 15,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n29\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"模型\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n30,\\n31\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"CLIP\\",\\n\\"slot_index\\": 1\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoraLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"产品摄影，北欧极简高质感_1.0.safetensors\\",\\n0.25,\\n0.25\\n],\\n\\"color\\": \\"#322\\",\\n\\"bgcolor\\": \\"#533\\"\\n},\\n{\\n\\"id\\": 45,\\n\\"type\\": \\"easy stylesSelector\\",\\n\\"pos\\": [\\n2210,\\n-450\\n],\\n\\"size\\": {\\n\\"0\\": 310,\\n\\"1\\": 530\\n},\\n\\"flags\\": {\\n\\"collapsed\\": false\\n},\\n\\"order\\": 22,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 58,\\n\\"widget\\": {\\n\\"name\\": \\"positive\\"\\n},\\n\\"label\\": \\"正面提示词（可选）\\"\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": null,\\n\\"widget\\": {\\n\\"name\\": \\"negative\\"\\n},\\n\\"label\\": \\"负面提示词（可选）\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n59\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"正面提示词\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"负面提示词\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"easy stylesSelector\\",\\n\\"values\\": [\\n\\"ads-luxury\\"\\n]\\n},\\n\\"widgets_values\\": [\\n\\"fooocus_styles\\",\\n\\"\\",\\n\\"\\",\\n\\"ads-luxury\\"\\n],\\n\\"color\\": \\"#332922\\",\\n\\"bgcolor\\": \\"#593930\\"\\n},\\n{\\n\\"id\\": 22,\\n\\"type\\": \\"ImageResizeKJ\\",\\n\\"pos\\": [\\n1450,\\n-10\\n],\\n\\"size\\": {\\n\\"0\\": 640,\\n\\"1\\": 214\\n},\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 21,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"get_image_size\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": null,\\n\\"label\\": \\"参考图像大小\\"\\n},\\n{\\n\\"name\\": \\"width_input\\",\\n\\"type\\": \\"INT\\",\\n\\"link\\": null,\\n\\"widget\\": {\\n\\"name\\": \\"width_input\\"\\n},\\n\\"slot_index\\": 2,\\n\\"label\\": \\"宽度\\"\\n},\\n{\\n\\"name\\": \\"height_input\\",\\n\\"type\\": \\"INT\\",\\n\\"link\\": null,\\n\\"widget\\": {\\n\\"name\\": \\"height_input\\"\\n},\\n\\"label\\": \\"高度\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n25,\\n49\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"width\\",\\n\\"type\\": \\"INT\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"宽度\\"\\n},\\n{\\n\\"name\\": \\"height\\",\\n\\"type\\": \\"INT\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"高度\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ImageResizeKJ\\"\\n},\\n\\"widgets_values\\": [\\n768,\\n768,\\n\\"nearest-exact\\",\\nfalse,\\n2,\\n0,\\n0\\n],\\n\\"color\\": \\"#322\\",\\n\\"bgcolor\\": \\"#533\\"\\n},\\n{\\n\\"id\\": 14,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": [\\n1450,\\n-180\\n],\\n\\"size\\": {\\n\\"0\\": 320,\\n\\"1\\": 130\\n},\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n14\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"模型\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n15\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"CLIP\\",\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n28,\\n43\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"VAE\\",\\n\\"slot_index\\": 2\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"majicmixRealistic_v7.safetensors\\"\\n],\\n\\"color\\": \\"#322\\",\\n\\"bgcolor\\": \\"#533\\"\\n},\\n{\\n\\"id\\": 54,\\n\\"type\\": \\"ImageUpscaleWithModel\\",\\n\\"pos\\": [\\n4390,\\n-430\\n],\\n\\"size\\": {\\n\\"0\\": 241.79998779296875,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 32,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"upscale_model\\",\\n\\"type\\": \\"UPSCALE_MODEL\\",\\n\\"link\\": 66,\\n\\"label\\": \\"放大模型\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 65,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ImageUpscaleWithModel\\"\\n},\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 55,\\n\\"type\\": \\"UpscaleModelLoader\\",\\n\\"pos\\": [\\n4390,\\n-330\\n],\\n\\"size\\": {\\n\\"0\\": 240,\\n\\"1\\": 60\\n},\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"UPSCALE_MODEL\\",\\n\\"type\\": \\"UPSCALE_MODEL\\",\\n\\"links\\": [\\n66\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"放大模型\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"UpscaleModelLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"4xUltrasharp_4xUltrasharpV10.pth\\"\\n],\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 19,\\n\\"type\\": \\"SaveImage\\",\\n\\"pos\\": [\\n4650,\\n-530\\n],\\n\\"size\\": {\\n\\"0\\": 410,\\n\\"1\\": 680\\n},\\n\\"flags\\": {},\\n\\"order\\": 31,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 42,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"SaveImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\"\\n],\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 29,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": [\\n4390,\\n-530\\n],\\n\\"size\\": {\\n\\"0\\": 240,\\n\\"1\\": 50\\n},\\n\\"flags\\": {},\\n\\"order\\": 30,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 41,\\n\\"label\\": \\"Latent\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 43,\\n\\"label\\": \\"VAE\\",\\n\\"slot_index\\": 1\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n42,\\n65\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n},\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 17,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": [\\n4080,\\n-530\\n],\\n\\"size\\": {\\n\\"0\\": 300,\\n\\"1\\": 680\\n},\\n\\"flags\\": {},\\n\\"order\\": 29,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 29,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 22,\\n\\"label\\": \\"正面条件\\"\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 23,\\n\\"label\\": \\"负面条件\\"\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 24,\\n\\"label\\": \\"Latent\\",\\n\\"slot_index\\": 3\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n41\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"Latent\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n802632359013539,\\n\\"randomize\\",\\n20,\\n8,\\n\\"euler\\",\\n\\"normal\\",\\n1\\n],\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 30,\\n\\"type\\": \\"DeepTranslatorTextNode\\",\\n\\"pos\\": [\\n2210,\\n-540\\n],\\n\\"size\\": [\\n406.60150146484375,\\n320\\n],\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 12,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"text\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 63,\\n\\"widget\\": {\\n\\"name\\": \\"text\\"\\n},\\n\\"label\\": \\"文本\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"text\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n47,\\n67\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"文本\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"DeepTranslatorTextNode\\"\\n},\\n\\"widgets_values\\": [\\n\\"auto\\",\\n\\"english\\",\\nfalse,\\n\\"\\",\\n\\"\\",\\n\\"GoogleTranslator\\",\\n\\"三个棕色的化妆品瓶子\\",\\n\\"proxy_hide\\",\\n\\"authorization_hide\\"\\n],\\n\\"color\\": \\"#332922\\",\\n\\"bgcolor\\": \\"#593930\\"\\n},\\n{\\n\\"id\\": 1,\\n\\"type\\": \\"GroundingDinoSAMSegment (segment anything)\\",\\n\\"pos\\": [\\n3479,\\n-210\\n],\\n\\"size\\": {\\n\\"0\\": 520,\\n\\"1\\": 122\\n},\\n\\"flags\\": {},\\n\\"order\\": 18,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"sam_model\\",\\n\\"type\\": \\"SAM_MODEL\\",\\n\\"link\\": 16,\\n\\"label\\": \\"SAM模型\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"grounding_dino_model\\",\\n\\"type\\": \\"GROUNDING_DINO_MODEL\\",\\n\\"link\\": 2,\\n\\"label\\": \\"G-Dino模型\\",\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 49,\\n\\"label\\": \\"图像\\",\\n\\"slot_index\\": 2\\n},\\n{\\n\\"name\\": \\"prompt\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 67,\\n\\"widget\\": {\\n\\"name\\": \\"prompt\\"\\n},\\n\\"label\\": \\"提示词\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n4\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\" 图像\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": [\\n20\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"遮罩\\",\\n\\"slot_index\\": 1\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"GroundingDinoSAMSegment (segment anything)\\"\\n},\\n\\"widgets_values\\": [\\n\\"object\\",\\n0.3\\n],\\n\\"color\\": \\"#232\\",\\n\\"bgcolor\\": \\"#353\\"\\n}\\n],\\n\\"links\\": [\\n[\\n2,\\n3,\\n0,\\n1,\\n1,\\n\\"GROUNDING_DINO_MODEL\\"\\n],\\n[\\n4,\\n1,\\n0,\\n5,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n5,\\n13,\\n0,\\n7,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n6,\\n6,\\n0,\\n8,\\n2,\\n\\"CONTROL_NET\\"\\n],\\n[\\n7,\\n13,\\n0,\\n8,\\n3,\\n\\"IMAGE\\"\\n],\\n[\\n8,\\n12,\\n0,\\n10,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n9,\\n8,\\n0,\\n11,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n10,\\n8,\\n1,\\n11,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n11,\\n9,\\n0,\\n11,\\n2,\\n\\"CONTROL_NET\\"\\n],\\n[\\n12,\\n12,\\n0,\\n11,\\n3,\\n\\"IMAGE\\"\\n],\\n[\\n14,\\n14,\\n0,\\n15,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n15,\\n14,\\n1,\\n15,\\n1,\\n\\"CLIP\\"\\n],\\n[\\n16,\\n16,\\n0,\\n1,\\n0,\\n\\"SAM_MODEL\\"\\n],\\n[\\n17,\\n4,\\n0,\\n20,\\n1,\\n\\"MASK\\"\\n],\\n[\\n20,\\n1,\\n1,\\n4,\\n0,\\n\\"MASK\\"\\n],\\n[\\n21,\\n18,\\n0,\\n22,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n22,\\n11,\\n0,\\n17,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n23,\\n11,\\n1,\\n17,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n24,\\n20,\\n0,\\n17,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n25,\\n22,\\n0,\\n23,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n26,\\n23,\\n0,\\n20,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n28,\\n14,\\n2,\\n23,\\n1,\\n\\"VAE\\"\\n],\\n[\\n29,\\n15,\\n0,\\n17,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n30,\\n15,\\n1,\\n24,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n31,\\n15,\\n1,\\n25,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n32,\\n24,\\n0,\\n8,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n33,\\n25,\\n0,\\n8,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n37,\\n18,\\n0,\\n27,\\n0,\\n\\"</em>\\"\\n],\\n[\\n38,\\n27,\\n0,\\n13,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n39,\\n27,\\n0,\\n12,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n41,\\n17,\\n0,\\n29,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n42,\\n29,\\n0,\\n19,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n43,\\n14,\\n2,\\n29,\\n1,\\n\\"VAE\\"\\n],\\n[\\n47,\\n30,\\n0,\\n34,\\n0,\\n\\"STRING\\"\\n],\\n[\\n49,\\n22,\\n0,\\n1,\\n2,\\n\\"IMAGE\\"\\n],\\n[\\n57,\\n43,\\n0,\\n34,\\n1,\\n\\"STRING\\"\\n],\\n[\\n58,\\n34,\\n0,\\n45,\\n0,\\n\\"STRING\\"\\n],\\n[\\n59,\\n45,\\n0,\\n24,\\n1,\\n\\"STRING\\"\\n],\\n[\\n63,\\n52,\\n0,\\n30,\\n0,\\n\\"STRING\\"\\n],\\n[\\n64,\\n53,\\n0,\\n43,\\n0,\\n\\"STRING\\"\\n],\\n[\\n65,\\n29,\\n0,\\n54,\\n1,\\n\\"IMAGE\\"\\n],\\n[\\n66,\\n55,\\n0,\\n54,\\n0,\\n\\"UPSCALE_MODEL\\"\\n],\\n[\\n67,\\n30,\\n0,\\n1,\\n3,\\n\\"STRING\\"\\n]\\n],\\n\\"groups\\": [\\n{\\n\\"title\\": \\"SAM Segment\\",\\n\\"bounding\\": [\\n3440,\\n-650,\\n610,\\n870\\n],\\n\\"color\\": \\"#8A8\\",\\n\\"font_size\\": 24,\\n\\"locked\\": false\\n},\\n{\\n\\"title\\": \\"ControlNet\\",\\n\\"bounding\\": [\\n2610,\\n-650,\\n820,\\n870\\n],\\n\\"color\\": \\"#3f789e\\",\\n\\"font_size\\": 24,\\n\\"locked\\": false\\n},\\n{\\n\\"title\\": \\"Prompt\\",\\n\\"bounding\\": [\\n2150,\\n-650,\\n450,\\n870\\n],\\n\\"color\\": \\"#b06634\\",\\n\\"font_size\\": 24,\\n\\"locked\\": false\\n},\\n{\\n\\"title\\": \\"Inputs\\",\\n\\"bounding\\": [\\n1400,\\n-650,\\n740,\\n870\\n],\\n\\"color\\": \\"#A88\\",\\n\\"font_size\\": 24,\\n\\"locked\\": false\\n},\\n{\\n\\"title\\": \\"Output\\",\\n\\"bounding\\": [\\n4060,\\n-650,\\n1040,\\n870\\n],\\n\\"color\\": \\"#444\\",\\n\\"font_size\\": 24,\\n\\"locked\\": false\\n}\\n],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"0246.VERSION\\": [\\n0,\\n0,\\n4\\n],\\n\\"ds\\": {\\n\\"scale\\": 0.6830134553650709,\\n\\"offset\\": [\\n-1382.2299902799575,\\n1051.6093321301944\\n]\\n}\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true}');export{m as comp,N as data};

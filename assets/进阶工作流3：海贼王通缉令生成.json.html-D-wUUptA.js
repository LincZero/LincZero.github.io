import{_ as r,c as b,d as e,r as l,o}from"./app-BIkx81ru.js";const a={};function t(s,i){const n=l("VueFlow");return o(),b("div",null,[e(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 113,
  "last_link_id": 278,
  "nodes": [
    {
      "id": 89,
      "type": "LoadImage",
      "pos": [
        -180,
        -580
      ],
      "size": {
        "0": 315,
        "1": 314
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            246
          ],
          "shape": 3,
          "label": "IMAGE",
          "slot_index": 0
        },
        {
          "name": "MASK",
          "type": "MASK",
          "links": null,
          "shape": 3,
          "label": "MASK",
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "LoadImage"
      },
      "widgets_values": [
        "portrait-woman-waving-hand-say-hi-video-chat-holding-smartphone-stretched-out-hand-greeting-friend-standing-against-white-wall.jpg",
        "image"
      ],
      "color": "#222",
      "bgcolor": "#000"
    },
    {
      "id": 76,
      "type": "VAEDecode",
      "pos": [
        2530,
        40
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
          "link": 233,
          "label": "samples"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 234,
          "label": "vae",
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            235,
            268
          ],
          "shape": 3,
          "label": "IMAGE",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      },
      "color": "#322",
      "bgcolor": "#533"
    },
    {
      "id": 86,
      "type": "ControlNetApplyAdvanced",
      "pos": [
        1340,
        -250
      ],
      "size": {
        "0": 390,
        "1": 170
      },
      "flags": {},
      "order": 21,
      "mode": 0,
      "inputs": [
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 241,
          "label": "positive"
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 242,
          "label": "negative"
        },
        {
          "name": "control_net",
          "type": "CONTROL_NET",
          "link": 243,
          "label": "control_net",
          "slot_index": 2
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 254,
          "label": "image"
        }
      ],
      "outputs": [
        {
          "name": "positive",
          "type": "CONDITIONING",
          "links": [
            248
          ],
          "shape": 3,
          "label": "positive",
          "slot_index": 0
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "links": [
            249
          ],
          "shape": 3,
          "label": "negative",
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetApplyAdvanced"
      },
      "widgets_values": [
        1,
        0,
        1
      ],
      "color": "#223",
      "bgcolor": "#335"
    },
    {
      "id": 75,
      "type": "EmptyLatentImage",
      "pos": [
        1850,
        370
      ],
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            232
          ],
          "shape": 3,
          "label": "LATENT"
        }
      ],
      "properties": {
        "Node name for S&R": "EmptyLatentImage"
      },
      "widgets_values": [
        856,
        616,
        1
      ],
      "color": "#322",
      "bgcolor": "#533"
    },
    {
      "id": 82,
      "type": "easy promptConcat",
      "pos": [
        520,
        60
      ],
      "size": {
        "0": 360,
        "1": 100
      },
      "flags": {
        "collapsed": false
      },
      "order": 16,
      "mode": 0,
      "inputs": [
        {
          "name": "prompt1",
          "type": "STRING",
          "link": 276,
          "widget": {
            "name": "prompt1"
          },
          "slot_index": 0,
          "label": "prompt1"
        },
        {
          "name": "prompt2",
          "type": "STRING",
          "link": 238,
          "widget": {
            "name": "prompt2"
          },
          "slot_index": 1,
          "label": "prompt2"
        }
      ],
      "outputs": [
        {
          "name": "prompt",
          "type": "STRING",
          "links": [
            237
          ],
          "shape": 3,
          "label": "prompt",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "easy promptConcat"
      },
      "widgets_values": [
        "",
        "wanostyle, solo, ((masterpiece)), (best quality), (extremely detailed), depth of field, sketch, dark intense shadows, sharp focus, soft lighting, hdr, colorful, good composition, manga,",
        "，"
      ],
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 72,
      "type": "CLIPTextEncode",
      "pos": [
        290,
        200
      ],
      "size": {
        "0": 590,
        "1": 54
      },
      "flags": {
        "collapsed": false
      },
      "order": 20,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 230,
          "label": "clip"
        },
        {
          "name": "text",
          "type": "STRING",
          "link": 237,
          "widget": {
            "name": "text"
          },
          "label": "text"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            241
          ],
          "shape": 3,
          "label": "CONDITIONING",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        ""
      ],
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 74,
      "type": "CLIPTextEncode",
      "pos": [
        290,
        290
      ],
      "size": {
        "0": 590,
        "1": 110
      },
      "flags": {
        "collapsed": false
      },
      "order": 18,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 231,
          "label": "clip"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            242
          ],
          "shape": 3,
          "label": "CONDITIONING",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "embedding:EasyNegative, embedding:BadDream, worst quality, ugly"
      ],
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 87,
      "type": "ControlNetLoader",
      "pos": [
        1000,
        -340
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
            243
          ],
          "shape": 3,
          "label": "CONTROL_NET"
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetLoader"
      },
      "widgets_values": [
        "control_v11p_sd15_openpose.pth"
      ],
      "color": "#223",
      "bgcolor": "#335"
    },
    {
      "id": 70,
      "type": "CLIPVisionLoader",
      "pos": [
        1010,
        50
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
          "name": "CLIP_VISION",
          "type": "CLIP_VISION",
          "links": [
            223
          ],
          "shape": 3,
          "label": "CLIP_VISION"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPVisionLoader"
      },
      "widgets_values": [
        "pytorch_model.bin"
      ],
      "color": "#332922",
      "bgcolor": "#593930"
    },
    {
      "id": 67,
      "type": "easy ipadapterApplyADV",
      "pos": [
        1340,
        50
      ],
      "size": {
        "0": 400,
        "1": 464
      },
      "flags": {},
      "order": 17,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 229,
          "label": "model",
          "slot_index": 0
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 222,
          "label": "image",
          "slot_index": 1
        },
        {
          "name": "image_negative",
          "type": "IMAGE",
          "link": null,
          "label": "image_negative"
        },
        {
          "name": "attn_mask",
          "type": "MASK",
          "link": null,
          "label": "attn_mask",
          "slot_index": 3
        },
        {
          "name": "clip_vision",
          "type": "CLIP_VISION",
          "link": 223,
          "label": "clip_vision",
          "slot_index": 4
        },
        {
          "name": "optional_ipadapter",
          "type": "IPADAPTER",
          "link": null,
          "label": "optional_ipadapter",
          "slot_index": 5
        }
      ],
      "outputs": [
        {
          "name": "model",
          "type": "MODEL",
          "links": [
            224
          ],
          "shape": 3,
          "label": "model",
          "slot_index": 0
        },
        {
          "name": "images",
          "type": "IMAGE",
          "links": null,
          "shape": 3,
          "label": "images"
        },
        {
          "name": "masks",
          "type": "MASK",
          "links": null,
          "shape": 3,
          "label": "masks"
        },
        {
          "name": "ipadapter",
          "type": "IPADAPTER",
          "links": null,
          "shape": 3,
          "label": "ipadapter"
        }
      ],
      "properties": {
        "Node name for S&R": "easy ipadapterApplyADV"
      },
      "widgets_values": [
        "FACEID PLUS V2",
        0.75,
        "CUDA",
        1,
        1,
        "linear",
        "concat",
        0,
        1,
        "V only",
        "all",
        false,
        false,
        0,
        ""
      ],
      "color": "#332922",
      "bgcolor": "#593930"
    },
    {
      "id": 77,
      "type": "SaveImage",
      "pos": [
        2750,
        40
      ],
      "size": {
        "0": 315,
        "1": 270
      },
      "flags": {},
      "order": 24,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 235,
          "label": "images"
        }
      ],
      "properties": {
        "Node name for S&R": "SaveImage"
      },
      "widgets_values": [
        "ComfyUI"
      ],
      "color": "#322",
      "bgcolor": "#533"
    },
    {
      "id": 69,
      "type": "LoadImage",
      "pos": [
        -520,
        -580
      ],
      "size": {
        "0": 315,
        "1": 314
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            222
          ],
          "shape": 3,
          "label": "IMAGE"
        },
        {
          "name": "MASK",
          "type": "MASK",
          "links": null,
          "shape": 3,
          "label": "MASK"
        }
      ],
      "properties": {
        "Node name for S&R": "LoadImage"
      },
      "widgets_values": [
        "0-1.jpg",
        "image"
      ],
      "color": "#222",
      "bgcolor": "#000"
    },
    {
      "id": 90,
      "type": "ImageResizeKJ",
      "pos": [
        1020,
        -550
      ],
      "size": {
        "0": 315,
        "1": 242
      },
      "flags": {
        "collapsed": true
      },
      "order": 12,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 246,
          "label": "image"
        },
        {
          "name": "get_image_size",
          "type": "IMAGE",
          "link": null,
          "label": "get_image_size"
        },
        {
          "name": "width_input",
          "type": "INT",
          "link": null,
          "widget": {
            "name": "width_input"
          },
          "label": "width_input"
        },
        {
          "name": "height_input",
          "type": "INT",
          "link": null,
          "widget": {
            "name": "height_input"
          },
          "label": "height_input"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            253
          ],
          "shape": 3,
          "label": "IMAGE",
          "slot_index": 0
        },
        {
          "name": "width",
          "type": "INT",
          "links": null,
          "shape": 3,
          "label": "width"
        },
        {
          "name": "height",
          "type": "INT",
          "links": null,
          "shape": 3,
          "label": "height"
        }
      ],
      "properties": {
        "Node name for S&R": "ImageResizeKJ"
      },
      "widgets_values": [
        704,
        512,
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
      "id": 93,
      "type": "DWPreprocessor",
      "pos": [
        1000,
        -580
      ],
      "size": {
        "0": 315,
        "1": 198
      },
      "flags": {},
      "order": 15,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 253,
          "label": "image"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            254,
            255
          ],
          "shape": 3,
          "label": "IMAGE",
          "slot_index": 0
        },
        {
          "name": "POSE_KEYPOINT",
          "type": "POSE_KEYPOINT",
          "links": null,
          "shape": 3,
          "label": "POSE_KEYPOINT"
        }
      ],
      "properties": {
        "Node name for S&R": "DWPreprocessor"
      },
      "widgets_values": [
        "enable",
        "enable",
        "enable",
        512,
        "yolox_l.onnx",
        "dw-ll_ucoco_384_bs5.torchscript.pt"
      ],
      "color": "#223",
      "bgcolor": "#335"
    },
    {
      "id": 91,
      "type": "PreviewImage",
      "pos": [
        1340,
        -590
      ],
      "size": {
        "0": 390,
        "1": 290
      },
      "flags": {},
      "order": 19,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 255,
          "label": "images"
        }
      ],
      "properties": {
        "Node name for S&R": "PreviewImage"
      },
      "color": "#223",
      "bgcolor": "#335"
    },
    {
      "id": 103,
      "type": "Image Overlay",
      "pos": [
        2460,
        1030
      ],
      "size": {
        "0": 315,
        "1": 290
      },
      "flags": {},
      "order": 27,
      "mode": 0,
      "inputs": [
        {
          "name": "base_image",
          "type": "IMAGE",
          "link": 263,
          "label": "base_image",
          "slot_index": 0
        },
        {
          "name": "overlay_image",
          "type": "IMAGE",
          "link": 264,
          "label": "overlay_image",
          "slot_index": 1
        },
        {
          "name": "optional_mask",
          "type": "MASK",
          "link": 265,
          "label": "optional_mask",
          "slot_index": 2
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            267,
            269
          ],
          "shape": 3,
          "label": "IMAGE",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "Image Overlay"
      },
      "widgets_values": [
        "None",
        "nearest-exact",
        1,
        512,
        512,
        0,
        0,
        0,
        0
      ],
      "color": "#432",
      "bgcolor": "#653",
      "shape": 1
    },
    {
      "id": 104,
      "type": "LoadImage",
      "pos": [
        2230,
        1040
      ],
      "size": {
        "0": 210,
        "1": 314
      },
      "flags": {
        "collapsed": false
      },
      "order": 5,
      "mode": 0,
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            264
          ],
          "shape": 3,
          "label": "IMAGE"
        },
        {
          "name": "MASK",
          "type": "MASK",
          "links": [
            265
          ],
          "shape": 3,
          "label": "MASK",
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "LoadImage"
      },
      "widgets_values": [
        "通缉令模板（镂空） (1).png",
        "image"
      ],
      "color": "#432",
      "bgcolor": "#653"
    },
    {
      "id": 109,
      "type": "PrimitiveNode",
      "pos": [
        -520,
        70
      ],
      "size": {
        "0": 650,
        "1": 100
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "outputs": [
        {
          "name": "STRING",
          "type": "STRING",
          "links": [
            271
          ],
          "widget": {
            "name": "text"
          },
          "label": "STRING"
        }
      ],
      "properties": {
        "Run widget replace on values": false
      },
      "widgets_values": [
        "5 , 0 0 0 , 0 0 0 , 0 0 0"
      ],
      "color": "#222",
      "bgcolor": "#000"
    },
    {
      "id": 102,
      "type": "ImageResizeKJ",
      "pos": [
        2290,
        680
      ],
      "size": {
        "0": 315,
        "1": 242
      },
      "flags": {
        "collapsed": true
      },
      "order": 25,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 268,
          "label": "image"
        },
        {
          "name": "get_image_size",
          "type": "IMAGE",
          "link": null,
          "label": "get_image_size"
        },
        {
          "name": "width_input",
          "type": "INT",
          "link": null,
          "widget": {
            "name": "width_input"
          },
          "label": "width_input"
        },
        {
          "name": "height_input",
          "type": "INT",
          "link": null,
          "widget": {
            "name": "height_input"
          },
          "label": "height_input"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            261
          ],
          "shape": 3,
          "label": "IMAGE",
          "slot_index": 0
        },
        {
          "name": "width",
          "type": "INT",
          "links": null,
          "shape": 3,
          "label": "width"
        },
        {
          "name": "height",
          "type": "INT",
          "links": null,
          "shape": 3,
          "label": "height"
        }
      ],
      "properties": {
        "Node name for S&R": "ImageResizeKJ"
      },
      "widgets_values": [
        856,
        616,
        "nearest-exact",
        false,
        2,
        0,
        0
      ],
      "color": "#432",
      "bgcolor": "#653"
    },
    {
      "id": 106,
      "type": "SaveImage",
      "pos": [
        2800,
        680
      ],
      "size": {
        "0": 210,
        "1": 270
      },
      "flags": {},
      "order": 28,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 267,
          "label": "images"
        }
      ],
      "properties": {
        "Node name for S&R": "SaveImage"
      },
      "widgets_values": [
        "ComfyUI"
      ],
      "color": "#432",
      "bgcolor": "#653"
    },
    {
      "id": 95,
      "type": "CR Overlay Text",
      "pos": [
        3030,
        680
      ],
      "size": {
        "0": 240,
        "1": 384
      },
      "flags": {},
      "order": 29,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 269,
          "label": "image"
        },
        {
          "name": "text",
          "type": "STRING",
          "link": 270,
          "widget": {
            "name": "text"
          },
          "label": "text",
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            258
          ],
          "shape": 3,
          "label": "IMAGE",
          "slot_index": 0
        },
        {
          "name": "show_help",
          "type": "STRING",
          "links": [],
          "shape": 3,
          "slot_index": 1,
          "label": "show_help"
        }
      ],
      "properties": {
        "Node name for S&R": "CR Overlay Text"
      },
      "widgets_values": [
        "ELON",
        "PlayfairDisplay-Bold.ttf",
        188,
        "custom",
        "center",
        "center",
        0,
        0,
        0,
        325,
        0,
        "text center",
        "503e23"
      ],
      "color": "#432",
      "bgcolor": "#653"
    },
    {
      "id": 98,
      "type": "SaveImage",
      "pos": [
        3600,
        -10
      ],
      "size": {
        "0": 940,
        "1": 1380
      },
      "flags": {},
      "order": 31,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 275,
          "label": "images"
        }
      ],
      "properties": {
        "Node name for S&R": "SaveImage"
      },
      "widgets_values": [
        "ComfyUI"
      ]
    },
    {
      "id": 97,
      "type": "CR Overlay Text",
      "pos": [
        3290,
        680
      ],
      "size": {
        "0": 220,
        "1": 384
      },
      "flags": {},
      "order": 30,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 258,
          "label": "image"
        },
        {
          "name": "text",
          "type": "STRING",
          "link": 271,
          "widget": {
            "name": "text"
          },
          "label": "text",
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            275
          ],
          "shape": 3,
          "label": "IMAGE",
          "slot_index": 0
        },
        {
          "name": "show_help",
          "type": "STRING",
          "links": [],
          "shape": 3,
          "slot_index": 1,
          "label": "show_help"
        }
      ],
      "properties": {
        "Node name for S&R": "CR Overlay Text"
      },
      "widgets_values": [
        "5 , 0 0 0 , 0 0 0 , 0 0 0",
        "Always In My Heart.ttf",
        80,
        "custom",
        "center",
        "center",
        0,
        0,
        15,
        515,
        0,
        "text center",
        "503e23"
      ],
      "color": "#432",
      "bgcolor": "#653"
    },
    {
      "id": 71,
      "type": "KSampler",
      "pos": [
        2190,
        39
      ],
      "size": {
        "0": 330,
        "1": 474
      },
      "flags": {},
      "order": 22,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 224,
          "label": "model"
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 248,
          "label": "positive",
          "slot_index": 1
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 249,
          "label": "negative",
          "slot_index": 2
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 232,
          "label": "latent_image",
          "slot_index": 3
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            233
          ],
          "shape": 3,
          "label": "LATENT",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        630358901688601,
        "randomize",
        20,
        8,
        "euler",
        "normal",
        1
      ],
      "color": "#322",
      "bgcolor": "#533"
    },
    {
      "id": 83,
      "type": "PrimitiveNode",
      "pos": [
        290,
        100
      ],
      "size": {
        "0": 210,
        "1": 58
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "outputs": [
        {
          "name": "STRING",
          "type": "STRING",
          "links": [
            238
          ],
          "slot_index": 0,
          "widget": {
            "name": "prompt2"
          },
          "label": "STRING"
        }
      ],
      "properties": {
        "Run widget replace on values": false
      },
      "widgets_values": [
        "wanostyle, solo, ((masterpiece)), (best quality), (extremely detailed), depth of field, sketch, dark intense shadows, sharp focus, soft lighting, hdr, colorful, good composition, manga,"
      ],
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 112,
      "type": "DeepTranslatorTextNode",
      "pos": [
        290,
        60
      ],
      "size": [
        330,
        219.99999618530273
      ],
      "flags": {
        "collapsed": true
      },
      "order": 13,
      "mode": 0,
      "inputs": [
        {
          "name": "text",
          "type": "STRING",
          "link": 277,
          "widget": {
            "name": "text"
          },
          "slot_index": 0
        }
      ],
      "outputs": [
        {
          "name": "text",
          "type": "STRING",
          "links": [
            276
          ],
          "shape": 3,
          "label": "text",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "DeepTranslatorTextNode"
      },
      "widgets_values": [
        "auto",
        "english",
        "disable",
        "",
        "",
        "GoogleTranslator",
        "一个精神抖擞的中年男人，身穿黑色皮外套，飞机头，身上布满金黄色的闪电，战斗姿势",
        "proxy_hide",
        "authorization_hide"
      ],
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 85,
      "type": "PrimitiveNode",
      "pos": [
        -520,
        -220
      ],
      "size": {
        "0": 650,
        "1": 110
      },
      "flags": {},
      "order": 8,
      "mode": 0,
      "outputs": [
        {
          "name": "STRING",
          "type": "STRING",
          "links": [
            277
          ],
          "slot_index": 0,
          "widget": {
            "name": "text"
          },
          "label": "STRING"
        }
      ],
      "properties": {
        "Run widget replace on values": false
      },
      "widgets_values": [
        "一个精神抖擞的中年男人，身穿黑色皮外套，飞机头，身上布满金黄色的闪电，战斗姿势"
      ],
      "color": "#222",
      "bgcolor": "#000"
    },
    {
      "id": 108,
      "type": "PrimitiveNode",
      "pos": [
        -520,
        -70
      ],
      "size": {
        "0": 650,
        "1": 100
      },
      "flags": {},
      "order": 9,
      "mode": 0,
      "outputs": [
        {
          "name": "STRING",
          "type": "STRING",
          "links": [
            270
          ],
          "widget": {
            "name": "text"
          },
          "label": "STRING"
        }
      ],
      "properties": {
        "Run widget replace on values": false
      },
      "widgets_values": [
        "ELON"
      ],
      "color": "#222",
      "bgcolor": "#000"
    },
    {
      "id": 68,
      "type": "CheckpointLoaderSimple",
      "pos": [
        -530,
        350
      ],
      "size": {
        "0": 315,
        "1": 98
      },
      "flags": {},
      "order": 10,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            227
          ],
          "shape": 3,
          "label": "MODEL",
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            228
          ],
          "shape": 3,
          "label": "CLIP",
          "slot_index": 1
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            234
          ],
          "shape": 3,
          "label": "VAE"
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimple"
      },
      "widgets_values": [
        "meinamix_meinaV11.safetensors"
      ],
      "color": "#222",
      "bgcolor": "#000"
    },
    {
      "id": 73,
      "type": "LoraLoader",
      "pos": [
        -190,
        350
      ],
      "size": {
        "0": 315,
        "1": 126
      },
      "flags": {},
      "order": 14,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 227,
          "label": "model"
        },
        {
          "name": "clip",
          "type": "CLIP",
          "link": 228,
          "label": "clip"
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            229
          ],
          "shape": 3,
          "label": "MODEL",
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            230,
            231
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
        "wano_style_loRA_v2_offset.safetensors",
        1,
        1
      ],
      "color": "#222",
      "bgcolor": "#000"
    },
    {
      "id": 113,
      "type": "EmptyImage",
      "pos": [
        2230,
        730
      ],
      "size": [
        210,
        250
      ],
      "flags": {},
      "order": 11,
      "mode": 0,
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            278
          ],
          "shape": 3,
          "label": "IMAGE"
        }
      ],
      "properties": {
        "Node name for S&R": "EmptyImage"
      },
      "widgets_values": [
        1024,
        1448,
        1,
        0
      ],
      "color": "#432",
      "bgcolor": "#653"
    },
    {
      "id": 99,
      "type": "Image Overlay",
      "pos": [
        2460,
        680
      ],
      "size": {
        "0": 320,
        "1": 300
      },
      "flags": {},
      "order": 26,
      "mode": 0,
      "inputs": [
        {
          "name": "base_image",
          "type": "IMAGE",
          "link": 278,
          "label": "base_image",
          "slot_index": 0
        },
        {
          "name": "overlay_image",
          "type": "IMAGE",
          "link": 261,
          "label": "overlay_image",
          "slot_index": 1
        },
        {
          "name": "optional_mask",
          "type": "MASK",
          "link": null,
          "label": "optional_mask",
          "slot_index": 2
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            263
          ],
          "shape": 3,
          "label": "IMAGE",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "Image Overlay"
      },
      "widgets_values": [
        "None",
        "nearest-exact",
        1,
        512,
        512,
        90,
        300,
        0,
        0
      ],
      "color": "#432",
      "bgcolor": "#653",
      "shape": 1
    }
  ],
  "links": [
    [
      222,
      69,
      0,
      67,
      1,
      "IMAGE"
    ],
    [
      223,
      70,
      0,
      67,
      4,
      "CLIP_VISION"
    ],
    [
      224,
      67,
      0,
      71,
      0,
      "MODEL"
    ],
    [
      227,
      68,
      0,
      73,
      0,
      "MODEL"
    ],
    [
      228,
      68,
      1,
      73,
      1,
      "CLIP"
    ],
    [
      229,
      73,
      0,
      67,
      0,
      "MODEL"
    ],
    [
      230,
      73,
      1,
      72,
      0,
      "CLIP"
    ],
    [
      231,
      73,
      1,
      74,
      0,
      "CLIP"
    ],
    [
      232,
      75,
      0,
      71,
      3,
      "LATENT"
    ],
    [
      233,
      71,
      0,
      76,
      0,
      "LATENT"
    ],
    [
      234,
      68,
      2,
      76,
      1,
      "VAE"
    ],
    [
      235,
      76,
      0,
      77,
      0,
      "IMAGE"
    ],
    [
      237,
      82,
      0,
      72,
      1,
      "STRING"
    ],
    [
      238,
      83,
      0,
      82,
      1,
      "STRING"
    ],
    [
      241,
      72,
      0,
      86,
      0,
      "CONDITIONING"
    ],
    [
      242,
      74,
      0,
      86,
      1,
      "CONDITIONING"
    ],
    [
      243,
      87,
      0,
      86,
      2,
      "CONTROL_NET"
    ],
    [
      246,
      89,
      0,
      90,
      0,
      "IMAGE"
    ],
    [
      248,
      86,
      0,
      71,
      1,
      "CONDITIONING"
    ],
    [
      249,
      86,
      1,
      71,
      2,
      "CONDITIONING"
    ],
    [
      253,
      90,
      0,
      93,
      0,
      "IMAGE"
    ],
    [
      254,
      93,
      0,
      86,
      3,
      "IMAGE"
    ],
    [
      255,
      93,
      0,
      91,
      0,
      "IMAGE"
    ],
    [
      258,
      95,
      0,
      97,
      0,
      "IMAGE"
    ],
    [
      261,
      102,
      0,
      99,
      1,
      "IMAGE"
    ],
    [
      263,
      99,
      0,
      103,
      0,
      "IMAGE"
    ],
    [
      264,
      104,
      0,
      103,
      1,
      "IMAGE"
    ],
    [
      265,
      104,
      1,
      103,
      2,
      "MASK"
    ],
    [
      267,
      103,
      0,
      106,
      0,
      "IMAGE"
    ],
    [
      268,
      76,
      0,
      102,
      0,
      "IMAGE"
    ],
    [
      269,
      103,
      0,
      95,
      0,
      "IMAGE"
    ],
    [
      270,
      108,
      0,
      95,
      1,
      "STRING"
    ],
    [
      271,
      109,
      0,
      97,
      1,
      "STRING"
    ],
    [
      275,
      97,
      0,
      98,
      0,
      "IMAGE"
    ],
    [
      276,
      112,
      0,
      82,
      0,
      "STRING"
    ],
    [
      277,
      85,
      0,
      112,
      0,
      "STRING"
    ],
    [
      278,
      113,
      0,
      99,
      0,
      "IMAGE"
    ]
  ],
  "groups": [
    {
      "title": "输入图片和描述",
      "bounding": [
        -590,
        -700,
        810,
        930
      ],
      "color": "#444",
      "font_size": 24,
      "locked": false
    },
    {
      "title": "切换模型",
      "bounding": [
        -590,
        250,
        810,
        290
      ],
      "color": "#444",
      "font_size": 24,
      "locked": false
    },
    {
      "title": "提示词",
      "bounding": [
        240,
        -40,
        686,
        579
      ],
      "color": "#8A8",
      "font_size": 24,
      "locked": false
    },
    {
      "title": "姿势ControlNet",
      "bounding": [
        940,
        -690,
        830,
        630
      ],
      "color": "#88A",
      "font_size": 24,
      "locked": false
    },
    {
      "title": "IPAdapter FaceID",
      "bounding": [
        940,
        -40,
        830,
        580
      ],
      "color": "#b06634",
      "font_size": 24,
      "locked": false
    },
    {
      "title": "采样绘制",
      "bounding": [
        1790,
        -40,
        1320,
        580
      ],
      "color": "#A88",
      "font_size": 24,
      "locked": false
    },
    {
      "title": "图文加工",
      "bounding": [
        2190,
        560,
        1370,
        810
      ],
      "color": "#b58b2a",
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
      "scale": 0.4950000000000003,
      "offset": [
        678.2254824661669,
        950.19619040084
      ]
    },
    "workspace_info": {
      "id": "ef37f0f5-20b4-4da2-af94-c31f664032a3"
    }
  },
  "version": 0.4
}
`})])}const d=r(a,[["render",t]]),m=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC4%E8%AF%BE/%E8%BF%9B%E9%98%B6%E5%B7%A5%E4%BD%9C%E6%B5%813%EF%BC%9A%E6%B5%B7%E8%B4%BC%E7%8E%8B%E9%80%9A%E7%BC%89%E4%BB%A4%E7%94%9F%E6%88%90.json.html","title":"进阶工作流3：海贼王通缉令生成.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 113, \\"last_link_id\\": 278, \\"nodes\\": [ { \\"id\\": 89, \\"type\\": \\"LoadImage\\", \\"pos\\": [ -180, -580 ], \\"size\\": { \\"0\\": 315, \\"1\\": 314 }, \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC4%E8%AF%BE/%E8%BF%9B%E9%98%B6%E5%B7%A5%E4%BD%9C%E6%B5%813%EF%BC%9A%E6%B5%B7%E8%B4%BC%E7%8E%8B%E9%80%9A%E7%BC%89%E4%BB%A4%E7%94%9F%E6%88%90.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 113, \\"last_link_id\\": 278, \\"nodes\\": [ { \\"id\\": 89, \\"type\\": \\"LoadImage\\", \\"pos\\": [ -180, -580 ], \\"size\\": { \\"0\\": 315, \\"1\\": 314 }, \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"layout":"Layout"},"git":{},"readingTime":{"minutes":8.72,"words":2617},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第4课/进阶工作流3：海贼王通缉令生成.json","excerpt":"<p>{<br>\\n\\"last_node_id\\": 113,<br>\\n\\"last_link_id\\": 278,<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": 89,<br>\\n\\"type\\": \\"LoadImage\\",<br>\\n\\"pos\\": [<br>\\n-180,<br>\\n-580<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 314<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 0,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n246<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"IMAGE\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"MASK\\",<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"portrait-woman-waving-hand-say-hi-video-chat-holding-smartphone-stretched-out-hand-greeting-friend-standing-against-white-wall.jpg\\",<br>\\n\\"image\\"<br>\\n],<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 76,<br>\\n\\"type\\": \\"VAEDecode\\",<br>\\n\\"pos\\": [<br>\\n2530,<br>\\n40<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 46<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 23,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 233,<br>\\n\\"label\\": \\"samples\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 234,<br>\\n\\"label\\": \\"vae\\",<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n235,<br>\\n268<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"IMAGE\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"<br>\\n},<br>\\n\\"color\\": \\"#322\\",<br>\\n\\"bgcolor\\": \\"#533\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 86,<br>\\n\\"type\\": \\"ControlNetApplyAdvanced\\",<br>\\n\\"pos\\": [<br>\\n1340,<br>\\n-250<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 390,<br>\\n\\"1\\": 170<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 21,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 241,<br>\\n\\"label\\": \\"positive\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 242,<br>\\n\\"label\\": \\"negative\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"control_net\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"link\\": 243,<br>\\n\\"label\\": \\"control_net\\",<br>\\n\\"slot_index\\": 2<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 254,<br>\\n\\"label\\": \\"image\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n248<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"positive\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n249<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"negative\\",<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetApplyAdvanced\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n1,<br>\\n0,<br>\\n1<br>\\n],<br>\\n\\"color\\": \\"#223\\",<br>\\n\\"bgcolor\\": \\"#335\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 75,<br>\\n\\"type\\": \\"EmptyLatentImage\\",<br>\\n\\"pos\\": [<br>\\n1850,<br>\\n370<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 106<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 1,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n232<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"LATENT\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"EmptyLatentImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n856,<br>\\n616,<br>\\n1<br>\\n],<br>\\n\\"color\\": \\"#322\\",<br>\\n\\"bgcolor\\": \\"#533\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 82,<br>\\n\\"type\\": \\"easy promptConcat\\",<br>\\n\\"pos\\": [<br>\\n520,<br>\\n60<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 360,<br>\\n\\"1\\": 100<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": false<br>\\n},<br>\\n\\"order\\": 16,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"prompt1\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 276,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"prompt1\\"<br>\\n},<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"prompt1\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"prompt2\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 238,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"prompt2\\"<br>\\n},<br>\\n\\"slot_index\\": 1,<br>\\n\\"label\\": \\"prompt2\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"prompt\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n237<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"prompt\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"easy promptConcat\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"\\",<br>\\n\\"wanostyle, solo, ((masterpiece)), (best quality), (extremely detailed), depth of field, sketch, dark intense shadows, sharp focus, soft lighting, hdr, colorful, good composition, manga,\\",<br>\\n\\"，\\"<br>\\n],<br>\\n\\"color\\": \\"#232\\",<br>\\n\\"bgcolor\\": \\"#353\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 72,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n290,<br>\\n200<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 590,<br>\\n\\"1\\": 54<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": false<br>\\n},<br>\\n\\"order\\": 20,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 230,<br>\\n\\"label\\": \\"clip\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"text\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 237,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text\\"<br>\\n},<br>\\n\\"label\\": \\"text\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n241<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"CONDITIONING\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"\\"<br>\\n],<br>\\n\\"color\\": \\"#232\\",<br>\\n\\"bgcolor\\": \\"#353\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 74,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n290,<br>\\n290<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 590,<br>\\n\\"1\\": 110<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": false<br>\\n},<br>\\n\\"order\\": 18,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 231,<br>\\n\\"label\\": \\"clip\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n242<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"CONDITIONING\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"embedding:EasyNegative, embedding:BadDream, worst quality, ugly\\"<br>\\n],<br>\\n\\"color\\": \\"#232\\",<br>\\n\\"bgcolor\\": \\"#353\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 87,<br>\\n\\"type\\": \\"ControlNetLoader\\",<br>\\n\\"pos\\": [<br>\\n1000,<br>\\n-340<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 58<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 2,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONTROL_NET\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"links\\": [<br>\\n243<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"CONTROL_NET\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"control_v11p_sd15_openpose.pth\\"<br>\\n],<br>\\n\\"color\\": \\"#223\\",<br>\\n\\"bgcolor\\": \\"#335\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 70,<br>\\n\\"type\\": \\"CLIPVisionLoader\\",<br>\\n\\"pos\\": [<br>\\n1010,<br>\\n50<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 58<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CLIP_VISION\\",<br>\\n\\"type\\": \\"CLIP_VISION\\",<br>\\n\\"links\\": [<br>\\n223<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"CLIP_VISION\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPVisionLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"pytorch_model.bin\\"<br>\\n],<br>\\n\\"color\\": \\"#332922\\",<br>\\n\\"bgcolor\\": \\"#593930\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 67,<br>\\n\\"type\\": \\"easy ipadapterApplyADV\\",<br>\\n\\"pos\\": [<br>\\n1340,<br>\\n50<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 400,<br>\\n\\"1\\": 464<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 17,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 229,<br>\\n\\"label\\": \\"model\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 222,<br>\\n\\"label\\": \\"image\\",<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image_negative\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": null,<br>\\n\\"label\\": \\"image_negative\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"attn_mask\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"link\\": null,<br>\\n\\"label\\": \\"attn_mask\\",<br>\\n\\"slot_index\\": 3<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"clip_vision\\",<br>\\n\\"type\\": \\"CLIP_VISION\\",<br>\\n\\"link\\": 223,<br>\\n\\"label\\": \\"clip_vision\\",<br>\\n\\"slot_index\\": 4<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"optional_ipadapter\\",<br>\\n\\"type\\": \\"IPADAPTER\\",<br>\\n\\"link\\": null,<br>\\n\\"label\\": \\"optional_ipadapter\\",<br>\\n\\"slot_index\\": 5<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n224<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"model\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"images\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"masks\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"masks\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"ipadapter\\",<br>\\n\\"type\\": \\"IPADAPTER\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"ipadapter\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"easy ipadapterApplyADV\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"FACEID PLUS V2\\",<br>\\n0.75,<br>\\n\\"CUDA\\",<br>\\n1,<br>\\n1,<br>\\n\\"linear\\",<br>\\n\\"concat\\",<br>\\n0,<br>\\n1,<br>\\n\\"V only\\",<br>\\n\\"all\\",<br>\\nfalse,<br>\\nfalse,<br>\\n0,<br>\\n\\"\\"<br>\\n],<br>\\n\\"color\\": \\"#332922\\",<br>\\n\\"bgcolor\\": \\"#593930\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 77,<br>\\n\\"type\\": \\"SaveImage\\",<br>\\n\\"pos\\": [<br>\\n2750,<br>\\n40<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 270<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 24,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 235,<br>\\n\\"label\\": \\"images\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"SaveImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"ComfyUI\\"<br>\\n],<br>\\n\\"color\\": \\"#322\\",<br>\\n\\"bgcolor\\": \\"#533\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 69,<br>\\n\\"type\\": \\"LoadImage\\",<br>\\n\\"pos\\": [<br>\\n-520,<br>\\n-580<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 314<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n222<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"IMAGE\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"MASK\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"0-1.jpg\\",<br>\\n\\"image\\"<br>\\n],<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 90,<br>\\n\\"type\\": \\"ImageResizeKJ\\",<br>\\n\\"pos\\": [<br>\\n1020,<br>\\n-550<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 242<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 12,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 246,<br>\\n\\"label\\": \\"image\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"get_image_size\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": null,<br>\\n\\"label\\": \\"get_image_size\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"width_input\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"link\\": null,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"width_input\\"<br>\\n},<br>\\n\\"label\\": \\"width_input\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"height_input\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"link\\": null,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"height_input\\"<br>\\n},<br>\\n\\"label\\": \\"height_input\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n253<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"IMAGE\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"width\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"width\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"height\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"height\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ImageResizeKJ\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n704,<br>\\n512,<br>\\n\\"nearest-exact\\",<br>\\ntrue,<br>\\n2,<br>\\n0,<br>\\n0<br>\\n],<br>\\n\\"color\\": \\"#223\\",<br>\\n\\"bgcolor\\": \\"#335\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 93,<br>\\n\\"type\\": \\"DWPreprocessor\\",<br>\\n\\"pos\\": [<br>\\n1000,<br>\\n-580<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 198<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 15,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 253,<br>\\n\\"label\\": \\"image\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n254,<br>\\n255<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"IMAGE\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"POSE_KEYPOINT\\",<br>\\n\\"type\\": \\"POSE_KEYPOINT\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"POSE_KEYPOINT\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"DWPreprocessor\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"enable\\",<br>\\n\\"enable\\",<br>\\n\\"enable\\",<br>\\n512,<br>\\n\\"yolox_l.onnx\\",<br>\\n\\"dw-ll_ucoco_384_bs5.torchscript.pt\\"<br>\\n],<br>\\n\\"color\\": \\"#223\\",<br>\\n\\"bgcolor\\": \\"#335\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 91,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n1340,<br>\\n-590<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 390,<br>\\n\\"1\\": 290<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 19,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 255,<br>\\n\\"label\\": \\"images\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n},<br>\\n\\"color\\": \\"#223\\",<br>\\n\\"bgcolor\\": \\"#335\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 103,<br>\\n\\"type\\": \\"Image Overlay\\",<br>\\n\\"pos\\": [<br>\\n2460,<br>\\n1030<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 290<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 27,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"base_image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 263,<br>\\n\\"label\\": \\"base_image\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"overlay_image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 264,<br>\\n\\"label\\": \\"overlay_image\\",<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"optional_mask\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"link\\": 265,<br>\\n\\"label\\": \\"optional_mask\\",<br>\\n\\"slot_index\\": 2<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n267,<br>\\n269<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"IMAGE\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"Image Overlay\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"None\\",<br>\\n\\"nearest-exact\\",<br>\\n1,<br>\\n512,<br>\\n512,<br>\\n0,<br>\\n0,<br>\\n0,<br>\\n0<br>\\n],<br>\\n\\"color\\": \\"#432\\",<br>\\n\\"bgcolor\\": \\"#653\\",<br>\\n\\"shape\\": 1<br>\\n},<br>\\n{<br>\\n\\"id\\": 104,<br>\\n\\"type\\": \\"LoadImage\\",<br>\\n\\"pos\\": [<br>\\n2230,<br>\\n1040<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 314<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": false<br>\\n},<br>\\n\\"order\\": 5,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n264<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"IMAGE\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": [<br>\\n265<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"MASK\\",<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"通缉令模板（镂空） (1).png\\",<br>\\n\\"image\\"<br>\\n],<br>\\n\\"color\\": \\"#432\\",<br>\\n\\"bgcolor\\": \\"#653\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 109,<br>\\n\\"type\\": \\"PrimitiveNode\\",<br>\\n\\"pos\\": [<br>\\n-520,<br>\\n70<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 650,<br>\\n\\"1\\": 100<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"STRING\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n271<br>\\n],<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text\\"<br>\\n},<br>\\n\\"label\\": \\"STRING\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Run widget replace on values\\": false<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"5 , 0 0 0 , 0 0 0 , 0 0 0\\"<br>\\n],<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 102,<br>\\n\\"type\\": \\"ImageResizeKJ\\",<br>\\n\\"pos\\": [<br>\\n2290,<br>\\n680<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 242<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 25,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 268,<br>\\n\\"label\\": \\"image\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"get_image_size\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": null,<br>\\n\\"label\\": \\"get_image_size\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"width_input\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"link\\": null,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"width_input\\"<br>\\n},<br>\\n\\"label\\": \\"width_input\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"height_input\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"link\\": null,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"height_input\\"<br>\\n},<br>\\n\\"label\\": \\"height_input\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n261<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"IMAGE\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"width\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"width\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"height\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"height\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ImageResizeKJ\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n856,<br>\\n616,<br>\\n\\"nearest-exact\\",<br>\\nfalse,<br>\\n2,<br>\\n0,<br>\\n0<br>\\n],<br>\\n\\"color\\": \\"#432\\",<br>\\n\\"bgcolor\\": \\"#653\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 106,<br>\\n\\"type\\": \\"SaveImage\\",<br>\\n\\"pos\\": [<br>\\n2800,<br>\\n680<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 270<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 28,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 267,<br>\\n\\"label\\": \\"images\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"SaveImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"ComfyUI\\"<br>\\n],<br>\\n\\"color\\": \\"#432\\",<br>\\n\\"bgcolor\\": \\"#653\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 95,<br>\\n\\"type\\": \\"CR Overlay Text\\",<br>\\n\\"pos\\": [<br>\\n3030,<br>\\n680<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 240,<br>\\n\\"1\\": 384<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 29,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 269,<br>\\n\\"label\\": \\"image\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"text\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 270,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text\\"<br>\\n},<br>\\n\\"label\\": \\"text\\",<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n258<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"IMAGE\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"show_help\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1,<br>\\n\\"label\\": \\"show_help\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CR Overlay Text\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"ELON\\",<br>\\n\\"PlayfairDisplay-Bold.ttf\\",<br>\\n188,<br>\\n\\"custom\\",<br>\\n\\"center\\",<br>\\n\\"center\\",<br>\\n0,<br>\\n0,<br>\\n0,<br>\\n325,<br>\\n0,<br>\\n\\"text center\\",<br>\\n\\"503e23\\"<br>\\n],<br>\\n\\"color\\": \\"#432\\",<br>\\n\\"bgcolor\\": \\"#653\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 98,<br>\\n\\"type\\": \\"SaveImage\\",<br>\\n\\"pos\\": [<br>\\n3600,<br>\\n-10<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 940,<br>\\n\\"1\\": 1380<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 31,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 275,<br>\\n\\"label\\": \\"images\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"SaveImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"ComfyUI\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 97,<br>\\n\\"type\\": \\"CR Overlay Text\\",<br>\\n\\"pos\\": [<br>\\n3290,<br>\\n680<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 220,<br>\\n\\"1\\": 384<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 30,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 258,<br>\\n\\"label\\": \\"image\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"text\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 271,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text\\"<br>\\n},<br>\\n\\"label\\": \\"text\\",<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n275<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"IMAGE\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"show_help\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1,<br>\\n\\"label\\": \\"show_help\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CR Overlay Text\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"5 , 0 0 0 , 0 0 0 , 0 0 0\\",<br>\\n\\"Always In My Heart.ttf\\",<br>\\n80,<br>\\n\\"custom\\",<br>\\n\\"center\\",<br>\\n\\"center\\",<br>\\n0,<br>\\n0,<br>\\n15,<br>\\n515,<br>\\n0,<br>\\n\\"text center\\",<br>\\n\\"503e23\\"<br>\\n],<br>\\n\\"color\\": \\"#432\\",<br>\\n\\"bgcolor\\": \\"#653\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 71,<br>\\n\\"type\\": \\"KSampler\\",<br>\\n\\"pos\\": [<br>\\n2190,<br>\\n39<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 330,<br>\\n\\"1\\": 474<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 22,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 224,<br>\\n\\"label\\": \\"model\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 248,<br>\\n\\"label\\": \\"positive\\",<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 249,<br>\\n\\"label\\": \\"negative\\",<br>\\n\\"slot_index\\": 2<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 232,<br>\\n\\"label\\": \\"latent_image\\",<br>\\n\\"slot_index\\": 3<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n233<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"LATENT\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n630358901688601,<br>\\n\\"randomize\\",<br>\\n20,<br>\\n8,<br>\\n\\"euler\\",<br>\\n\\"normal\\",<br>\\n1<br>\\n],<br>\\n\\"color\\": \\"#322\\",<br>\\n\\"bgcolor\\": \\"#533\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 83,<br>\\n\\"type\\": \\"PrimitiveNode\\",<br>\\n\\"pos\\": [<br>\\n290,<br>\\n100<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 58<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 7,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"STRING\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n238<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"prompt2\\"<br>\\n},<br>\\n\\"label\\": \\"STRING\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Run widget replace on values\\": false<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"wanostyle, solo, ((masterpiece)), (best quality), (extremely detailed), depth of field, sketch, dark intense shadows, sharp focus, soft lighting, hdr, colorful, good composition, manga,\\"<br>\\n],<br>\\n\\"color\\": \\"#232\\",<br>\\n\\"bgcolor\\": \\"#353\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 112,<br>\\n\\"type\\": \\"DeepTranslatorTextNode\\",<br>\\n\\"pos\\": [<br>\\n290,<br>\\n60<br>\\n],<br>\\n\\"size\\": [<br>\\n330,<br>\\n219.99999618530273<br>\\n],<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 13,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"text\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 277,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text\\"<br>\\n},<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"text\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n276<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"text\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"DeepTranslatorTextNode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"auto\\",<br>\\n\\"english\\",<br>\\n\\"disable\\",<br>\\n\\"\\",<br>\\n\\"\\",<br>\\n\\"GoogleTranslator\\",<br>\\n\\"一个精神抖擞的中年男人，身穿黑色皮外套，飞机头，身上布满金黄色的闪电，战斗姿势\\",<br>\\n\\"proxy_hide\\",<br>\\n\\"authorization_hide\\"<br>\\n],<br>\\n\\"color\\": \\"#232\\",<br>\\n\\"bgcolor\\": \\"#353\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 85,<br>\\n\\"type\\": \\"PrimitiveNode\\",<br>\\n\\"pos\\": [<br>\\n-520,<br>\\n-220<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 650,<br>\\n\\"1\\": 110<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 8,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"STRING\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n277<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text\\"<br>\\n},<br>\\n\\"label\\": \\"STRING\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Run widget replace on values\\": false<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"一个精神抖擞的中年男人，身穿黑色皮外套，飞机头，身上布满金黄色的闪电，战斗姿势\\"<br>\\n],<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 108,<br>\\n\\"type\\": \\"PrimitiveNode\\",<br>\\n\\"pos\\": [<br>\\n-520,<br>\\n-70<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 650,<br>\\n\\"1\\": 100<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 9,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"STRING\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n270<br>\\n],<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text\\"<br>\\n},<br>\\n\\"label\\": \\"STRING\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Run widget replace on values\\": false<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"ELON\\"<br>\\n],<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 68,<br>\\n\\"type\\": \\"CheckpointLoaderSimple\\",<br>\\n\\"pos\\": [<br>\\n-530,<br>\\n350<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 98<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 10,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n227<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"MODEL\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n228<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"CLIP\\",<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n234<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"VAE\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"meinamix_meinaV11.safetensors\\"<br>\\n],<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 73,<br>\\n\\"type\\": \\"LoraLoader\\",<br>\\n\\"pos\\": [<br>\\n-190,<br>\\n350<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 126<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 14,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 227,<br>\\n\\"label\\": \\"model\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 228,<br>\\n\\"label\\": \\"clip\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n229<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"MODEL\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n230,<br>\\n231<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"CLIP\\",<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LoraLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"wano_style_loRA_v2_offset.safetensors\\",<br>\\n1,<br>\\n1<br>\\n],<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 113,<br>\\n\\"type\\": \\"EmptyImage\\",<br>\\n\\"pos\\": [<br>\\n2230,<br>\\n730<br>\\n],<br>\\n\\"size\\": [<br>\\n210,<br>\\n250<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 11,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n278<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"IMAGE\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"EmptyImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n1024,<br>\\n1448,<br>\\n1,<br>\\n0<br>\\n],<br>\\n\\"color\\": \\"#432\\",<br>\\n\\"bgcolor\\": \\"#653\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 99,<br>\\n\\"type\\": \\"Image Overlay\\",<br>\\n\\"pos\\": [<br>\\n2460,<br>\\n680<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 320,<br>\\n\\"1\\": 300<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 26,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"base_image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 278,<br>\\n\\"label\\": \\"base_image\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"overlay_image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 261,<br>\\n\\"label\\": \\"overlay_image\\",<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"optional_mask\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"link\\": null,<br>\\n\\"label\\": \\"optional_mask\\",<br>\\n\\"slot_index\\": 2<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n263<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"IMAGE\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"Image Overlay\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"None\\",<br>\\n\\"nearest-exact\\",<br>\\n1,<br>\\n512,<br>\\n512,<br>\\n90,<br>\\n300,<br>\\n0,<br>\\n0<br>\\n],<br>\\n\\"color\\": \\"#432\\",<br>\\n\\"bgcolor\\": \\"#653\\",<br>\\n\\"shape\\": 1<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\n222,<br>\\n69,<br>\\n0,<br>\\n67,<br>\\n1,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n223,<br>\\n70,<br>\\n0,<br>\\n67,<br>\\n4,<br>\\n\\"CLIP_VISION\\"<br>\\n],<br>\\n[<br>\\n224,<br>\\n67,<br>\\n0,<br>\\n71,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n227,<br>\\n68,<br>\\n0,<br>\\n73,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n228,<br>\\n68,<br>\\n1,<br>\\n73,<br>\\n1,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n229,<br>\\n73,<br>\\n0,<br>\\n67,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n230,<br>\\n73,<br>\\n1,<br>\\n72,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n231,<br>\\n73,<br>\\n1,<br>\\n74,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n232,<br>\\n75,<br>\\n0,<br>\\n71,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n233,<br>\\n71,<br>\\n0,<br>\\n76,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n234,<br>\\n68,<br>\\n2,<br>\\n76,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n235,<br>\\n76,<br>\\n0,<br>\\n77,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n237,<br>\\n82,<br>\\n0,<br>\\n72,<br>\\n1,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n238,<br>\\n83,<br>\\n0,<br>\\n82,<br>\\n1,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n241,<br>\\n72,<br>\\n0,<br>\\n86,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n242,<br>\\n74,<br>\\n0,<br>\\n86,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n243,<br>\\n87,<br>\\n0,<br>\\n86,<br>\\n2,<br>\\n\\"CONTROL_NET\\"<br>\\n],<br>\\n[<br>\\n246,<br>\\n89,<br>\\n0,<br>\\n90,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n248,<br>\\n86,<br>\\n0,<br>\\n71,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n249,<br>\\n86,<br>\\n1,<br>\\n71,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n253,<br>\\n90,<br>\\n0,<br>\\n93,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n254,<br>\\n93,<br>\\n0,<br>\\n86,<br>\\n3,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n255,<br>\\n93,<br>\\n0,<br>\\n91,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n258,<br>\\n95,<br>\\n0,<br>\\n97,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n261,<br>\\n102,<br>\\n0,<br>\\n99,<br>\\n1,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n263,<br>\\n99,<br>\\n0,<br>\\n103,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n264,<br>\\n104,<br>\\n0,<br>\\n103,<br>\\n1,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n265,<br>\\n104,<br>\\n1,<br>\\n103,<br>\\n2,<br>\\n\\"MASK\\"<br>\\n],<br>\\n[<br>\\n267,<br>\\n103,<br>\\n0,<br>\\n106,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n268,<br>\\n76,<br>\\n0,<br>\\n102,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n269,<br>\\n103,<br>\\n0,<br>\\n95,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n270,<br>\\n108,<br>\\n0,<br>\\n95,<br>\\n1,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n271,<br>\\n109,<br>\\n0,<br>\\n97,<br>\\n1,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n275,<br>\\n97,<br>\\n0,<br>\\n98,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n276,<br>\\n112,<br>\\n0,<br>\\n82,<br>\\n0,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n277,<br>\\n85,<br>\\n0,<br>\\n112,<br>\\n0,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n278,<br>\\n113,<br>\\n0,<br>\\n99,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n]<br>\\n],<br>\\n\\"groups\\": [<br>\\n{<br>\\n\\"title\\": \\"输入图片和描述\\",<br>\\n\\"bounding\\": [<br>\\n-590,<br>\\n-700,<br>\\n810,<br>\\n930<br>\\n],<br>\\n\\"color\\": \\"#444\\",<br>\\n\\"font_size\\": 24,<br>\\n\\"locked\\": false<br>\\n},<br>\\n{<br>\\n\\"title\\": \\"切换模型\\",<br>\\n\\"bounding\\": [<br>\\n-590,<br>\\n250,<br>\\n810,<br>\\n290<br>\\n],<br>\\n\\"color\\": \\"#444\\",<br>\\n\\"font_size\\": 24,<br>\\n\\"locked\\": false<br>\\n},<br>\\n{<br>\\n\\"title\\": \\"提示词\\",<br>\\n\\"bounding\\": [<br>\\n240,<br>\\n-40,<br>\\n686,<br>\\n579<br>\\n],<br>\\n\\"color\\": \\"#8A8\\",<br>\\n\\"font_size\\": 24,<br>\\n\\"locked\\": false<br>\\n},<br>\\n{<br>\\n\\"title\\": \\"姿势ControlNet\\",<br>\\n\\"bounding\\": [<br>\\n940,<br>\\n-690,<br>\\n830,<br>\\n630<br>\\n],<br>\\n\\"color\\": \\"#88A\\",<br>\\n\\"font_size\\": 24,<br>\\n\\"locked\\": false<br>\\n},<br>\\n{<br>\\n\\"title\\": \\"IPAdapter FaceID\\",<br>\\n\\"bounding\\": [<br>\\n940,<br>\\n-40,<br>\\n830,<br>\\n580<br>\\n],<br>\\n\\"color\\": \\"#b06634\\",<br>\\n\\"font_size\\": 24,<br>\\n\\"locked\\": false<br>\\n},<br>\\n{<br>\\n\\"title\\": \\"采样绘制\\",<br>\\n\\"bounding\\": [<br>\\n1790,<br>\\n-40,<br>\\n1320,<br>\\n580<br>\\n],<br>\\n\\"color\\": \\"#A88\\",<br>\\n\\"font_size\\": 24,<br>\\n\\"locked\\": false<br>\\n},<br>\\n{<br>\\n\\"title\\": \\"图文加工\\",<br>\\n\\"bounding\\": [<br>\\n2190,<br>\\n560,<br>\\n1370,<br>\\n810<br>\\n],<br>\\n\\"color\\": \\"#b58b2a\\",<br>\\n\\"font_size\\": 24,<br>\\n\\"locked\\": false<br>\\n}<br>\\n],<br>\\n\\"config\\": {},<br>\\n\\"extra\\": {<br>\\n\\"0246.VERSION\\": [<br>\\n0,<br>\\n0,<br>\\n4<br>\\n],<br>\\n\\"ds\\": {<br>\\n\\"scale\\": 0.4950000000000003,<br>\\n\\"offset\\": [<br>\\n678.2254824661669,<br>\\n950.19619040084<br>\\n]<br>\\n},<br>\\n\\"workspace_info\\": {<br>\\n\\"id\\": \\"ef37f0f5-20b4-4da2-af94-c31f664032a3\\"<br>\\n}<br>\\n},<br>\\n\\"version\\": 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第4课/进阶工作流3：海贼王通缉令生成.json","value":{"title":"进阶工作流3：海贼王通缉令生成.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第4课/进阶工作流3：海贼王通缉令生成.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{d as comp,m as data};

import{_ as o,c as t,b as u,r as q,o as r}from"./app-evNTgste.js";const b={};function e(l,a){const n=q("VueFlow");return r(),t("div",null,[u(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const i=o(b,[["render",e]]),p=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC4%E8%AF%BE/%E8%BF%9B%E9%98%B6%E5%B7%A5%E4%BD%9C%E6%B5%813%EF%BC%9A%E6%B5%B7%E8%B4%BC%E7%8E%8B%E9%80%9A%E7%BC%89%E4%BB%A4%E7%94%9F%E6%88%90.json.html","title":"进阶工作流3：海贼王通缉令生成.json","lang":"zh-CN","frontmatter":{"description":"{ &quot;last_node_id&quot;: 113, &quot;last_link_id&quot;: 278, &quot;nodes&quot;: [ { &quot;id&quot;: 89, &quot;type&quot;: &quot;LoadImage&quot;, &quot;pos&quot;: [ -180, -580...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC4%E8%AF%BE/%E8%BF%9B%E9%98%B6%E5%B7%A5%E4%BD%9C%E6%B5%813%EF%BC%9A%E6%B5%B7%E8%B4%BC%E7%8E%8B%E9%80%9A%E7%BC%89%E4%BB%A4%E7%94%9F%E6%88%90.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ &quot;last_node_id&quot;: 113, &quot;last_link_id&quot;: 278, &quot;nodes&quot;: [ { &quot;id&quot;: 89, &quot;type&quot;: &quot;LoadImage&quot;, &quot;pos&quot;: [ -180, -580..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"layout":"Layout"},"git":{},"readingTime":{"minutes":8.72,"words":2617},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第4课/进阶工作流3：海贼王通缉令生成.json","excerpt":"<p>{<br>\\n&quot;last_node_id&quot;: 113,<br>\\n&quot;last_link_id&quot;: 278,<br>\\n&quot;nodes&quot;: [<br>\\n{<br>\\n&quot;id&quot;: 89,<br>\\n&quot;type&quot;: &quot;LoadImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-180,<br>\\n-580<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 314<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 0,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n246<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;IMAGE&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;MASK&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;MASK&quot;,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;LoadImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;portrait-woman-waving-hand-say-hi-video-chat-holding-smartphone-stretched-out-hand-greeting-friend-standing-against-white-wall.jpg&quot;,<br>\\n&quot;image&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#222&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#000&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 76,<br>\\n&quot;type&quot;: &quot;VAEDecode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n2530,<br>\\n40<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 46<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 23,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;samples&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 233,<br>\\n&quot;label&quot;: &quot;samples&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 234,<br>\\n&quot;label&quot;: &quot;vae&quot;,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n235,<br>\\n268<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;IMAGE&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEDecode&quot;<br>\\n},<br>\\n&quot;color&quot;: &quot;#322&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#533&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 86,<br>\\n&quot;type&quot;: &quot;ControlNetApplyAdvanced&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1340,<br>\\n-250<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 390,<br>\\n&quot;1&quot;: 170<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 21,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 241,<br>\\n&quot;label&quot;: &quot;positive&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 242,<br>\\n&quot;label&quot;: &quot;negative&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;control_net&quot;,<br>\\n&quot;type&quot;: &quot;CONTROL_NET&quot;,<br>\\n&quot;link&quot;: 243,<br>\\n&quot;label&quot;: &quot;control_net&quot;,<br>\\n&quot;slot_index&quot;: 2<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 254,<br>\\n&quot;label&quot;: &quot;image&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n248<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;positive&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n249<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;negative&quot;,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ControlNetApplyAdvanced&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n1,<br>\\n0,<br>\\n1<br>\\n],<br>\\n&quot;color&quot;: &quot;#223&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#335&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 75,<br>\\n&quot;type&quot;: &quot;EmptyLatentImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1850,<br>\\n370<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 106<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 1,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n232<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;LATENT&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;EmptyLatentImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n856,<br>\\n616,<br>\\n1<br>\\n],<br>\\n&quot;color&quot;: &quot;#322&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#533&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 82,<br>\\n&quot;type&quot;: &quot;easy promptConcat&quot;,<br>\\n&quot;pos&quot;: [<br>\\n520,<br>\\n60<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 360,<br>\\n&quot;1&quot;: 100<br>\\n},<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: false<br>\\n},<br>\\n&quot;order&quot;: 16,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;prompt1&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;link&quot;: 276,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;prompt1&quot;<br>\\n},<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;prompt1&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;prompt2&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;link&quot;: 238,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;prompt2&quot;<br>\\n},<br>\\n&quot;slot_index&quot;: 1,<br>\\n&quot;label&quot;: &quot;prompt2&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;prompt&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;links&quot;: [<br>\\n237<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;prompt&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;easy promptConcat&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;&quot;,<br>\\n&quot;wanostyle, solo, ((masterpiece)), (best quality), (extremely detailed), depth of field, sketch, dark intense shadows, sharp focus, soft lighting, hdr, colorful, good composition, manga,&quot;,<br>\\n&quot;，&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#232&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#353&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 72,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n290,<br>\\n200<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 590,<br>\\n&quot;1&quot;: 54<br>\\n},<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: false<br>\\n},<br>\\n&quot;order&quot;: 20,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 230,<br>\\n&quot;label&quot;: &quot;clip&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;text&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;link&quot;: 237,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;text&quot;<br>\\n},<br>\\n&quot;label&quot;: &quot;text&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n241<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#232&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#353&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 74,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n290,<br>\\n290<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 590,<br>\\n&quot;1&quot;: 110<br>\\n},<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: false<br>\\n},<br>\\n&quot;order&quot;: 18,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 231,<br>\\n&quot;label&quot;: &quot;clip&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n242<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;embedding:EasyNegative, embedding:BadDream, worst quality, ugly&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#232&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#353&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 87,<br>\\n&quot;type&quot;: &quot;ControlNetLoader&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1000,<br>\\n-340<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 58<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 2,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONTROL_NET&quot;,<br>\\n&quot;type&quot;: &quot;CONTROL_NET&quot;,<br>\\n&quot;links&quot;: [<br>\\n243<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;CONTROL_NET&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ControlNetLoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;control_v11p_sd15_openpose.pth&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#223&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#335&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 70,<br>\\n&quot;type&quot;: &quot;CLIPVisionLoader&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1010,<br>\\n50<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 58<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 3,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP_VISION&quot;,<br>\\n&quot;type&quot;: &quot;CLIP_VISION&quot;,<br>\\n&quot;links&quot;: [<br>\\n223<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;CLIP_VISION&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPVisionLoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;pytorch_model.bin&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#332922&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#593930&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 67,<br>\\n&quot;type&quot;: &quot;easy ipadapterApplyADV&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1340,<br>\\n50<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 400,<br>\\n&quot;1&quot;: 464<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 17,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 229,<br>\\n&quot;label&quot;: &quot;model&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 222,<br>\\n&quot;label&quot;: &quot;image&quot;,<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;image_negative&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;label&quot;: &quot;image_negative&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;attn_mask&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;label&quot;: &quot;attn_mask&quot;,<br>\\n&quot;slot_index&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;clip_vision&quot;,<br>\\n&quot;type&quot;: &quot;CLIP_VISION&quot;,<br>\\n&quot;link&quot;: 223,<br>\\n&quot;label&quot;: &quot;clip_vision&quot;,<br>\\n&quot;slot_index&quot;: 4<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;optional_ipadapter&quot;,<br>\\n&quot;type&quot;: &quot;IPADAPTER&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;label&quot;: &quot;optional_ipadapter&quot;,<br>\\n&quot;slot_index&quot;: 5<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n224<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;model&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;images&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;masks&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;masks&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;ipadapter&quot;,<br>\\n&quot;type&quot;: &quot;IPADAPTER&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;ipadapter&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;easy ipadapterApplyADV&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;FACEID PLUS V2&quot;,<br>\\n0.75,<br>\\n&quot;CUDA&quot;,<br>\\n1,<br>\\n1,<br>\\n&quot;linear&quot;,<br>\\n&quot;concat&quot;,<br>\\n0,<br>\\n1,<br>\\n&quot;V only&quot;,<br>\\n&quot;all&quot;,<br>\\nfalse,<br>\\nfalse,<br>\\n0,<br>\\n&quot;&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#332922&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#593930&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 77,<br>\\n&quot;type&quot;: &quot;SaveImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n2750,<br>\\n40<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 270<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 24,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 235,<br>\\n&quot;label&quot;: &quot;images&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;SaveImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;ComfyUI&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#322&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#533&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 69,<br>\\n&quot;type&quot;: &quot;LoadImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-520,<br>\\n-580<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 314<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 4,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n222<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;IMAGE&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;MASK&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;MASK&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;LoadImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;0-1.jpg&quot;,<br>\\n&quot;image&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#222&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#000&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 90,<br>\\n&quot;type&quot;: &quot;ImageResizeKJ&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1020,<br>\\n-550<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 242<br>\\n},<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: true<br>\\n},<br>\\n&quot;order&quot;: 12,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 246,<br>\\n&quot;label&quot;: &quot;image&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;get_image_size&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;label&quot;: &quot;get_image_size&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;width_input&quot;,<br>\\n&quot;type&quot;: &quot;INT&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;width_input&quot;<br>\\n},<br>\\n&quot;label&quot;: &quot;width_input&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;height_input&quot;,<br>\\n&quot;type&quot;: &quot;INT&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;height_input&quot;<br>\\n},<br>\\n&quot;label&quot;: &quot;height_input&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n253<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;IMAGE&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;width&quot;,<br>\\n&quot;type&quot;: &quot;INT&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;width&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;height&quot;,<br>\\n&quot;type&quot;: &quot;INT&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;height&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ImageResizeKJ&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n704,<br>\\n512,<br>\\n&quot;nearest-exact&quot;,<br>\\ntrue,<br>\\n2,<br>\\n0,<br>\\n0<br>\\n],<br>\\n&quot;color&quot;: &quot;#223&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#335&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 93,<br>\\n&quot;type&quot;: &quot;DWPreprocessor&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1000,<br>\\n-580<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 198<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 15,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 253,<br>\\n&quot;label&quot;: &quot;image&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n254,<br>\\n255<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;IMAGE&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;POSE_KEYPOINT&quot;,<br>\\n&quot;type&quot;: &quot;POSE_KEYPOINT&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;POSE_KEYPOINT&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;DWPreprocessor&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;enable&quot;,<br>\\n&quot;enable&quot;,<br>\\n&quot;enable&quot;,<br>\\n512,<br>\\n&quot;yolox_l.onnx&quot;,<br>\\n&quot;dw-ll_ucoco_384_bs5.torchscript.pt&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#223&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#335&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 91,<br>\\n&quot;type&quot;: &quot;PreviewImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1340,<br>\\n-590<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 390,<br>\\n&quot;1&quot;: 290<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 19,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 255,<br>\\n&quot;label&quot;: &quot;images&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;PreviewImage&quot;<br>\\n},<br>\\n&quot;color&quot;: &quot;#223&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#335&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 103,<br>\\n&quot;type&quot;: &quot;Image Overlay&quot;,<br>\\n&quot;pos&quot;: [<br>\\n2460,<br>\\n1030<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 290<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 27,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;base_image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 263,<br>\\n&quot;label&quot;: &quot;base_image&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;overlay_image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 264,<br>\\n&quot;label&quot;: &quot;overlay_image&quot;,<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;optional_mask&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;link&quot;: 265,<br>\\n&quot;label&quot;: &quot;optional_mask&quot;,<br>\\n&quot;slot_index&quot;: 2<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n267,<br>\\n269<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;IMAGE&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;Image Overlay&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;None&quot;,<br>\\n&quot;nearest-exact&quot;,<br>\\n1,<br>\\n512,<br>\\n512,<br>\\n0,<br>\\n0,<br>\\n0,<br>\\n0<br>\\n],<br>\\n&quot;color&quot;: &quot;#432&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#653&quot;,<br>\\n&quot;shape&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 104,<br>\\n&quot;type&quot;: &quot;LoadImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n2230,<br>\\n1040<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 314<br>\\n},<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: false<br>\\n},<br>\\n&quot;order&quot;: 5,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n264<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;IMAGE&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;MASK&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: [<br>\\n265<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;MASK&quot;,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;LoadImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;通缉令模板（镂空） (1).png&quot;,<br>\\n&quot;image&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#432&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#653&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 109,<br>\\n&quot;type&quot;: &quot;PrimitiveNode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-520,<br>\\n70<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 650,<br>\\n&quot;1&quot;: 100<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 6,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;STRING&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;links&quot;: [<br>\\n271<br>\\n],<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;text&quot;<br>\\n},<br>\\n&quot;label&quot;: &quot;STRING&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Run widget replace on values&quot;: false<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;5 , 0 0 0 , 0 0 0 , 0 0 0&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#222&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#000&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 102,<br>\\n&quot;type&quot;: &quot;ImageResizeKJ&quot;,<br>\\n&quot;pos&quot;: [<br>\\n2290,<br>\\n680<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 242<br>\\n},<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: true<br>\\n},<br>\\n&quot;order&quot;: 25,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 268,<br>\\n&quot;label&quot;: &quot;image&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;get_image_size&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;label&quot;: &quot;get_image_size&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;width_input&quot;,<br>\\n&quot;type&quot;: &quot;INT&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;width_input&quot;<br>\\n},<br>\\n&quot;label&quot;: &quot;width_input&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;height_input&quot;,<br>\\n&quot;type&quot;: &quot;INT&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;height_input&quot;<br>\\n},<br>\\n&quot;label&quot;: &quot;height_input&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n261<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;IMAGE&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;width&quot;,<br>\\n&quot;type&quot;: &quot;INT&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;width&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;height&quot;,<br>\\n&quot;type&quot;: &quot;INT&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;height&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ImageResizeKJ&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n856,<br>\\n616,<br>\\n&quot;nearest-exact&quot;,<br>\\nfalse,<br>\\n2,<br>\\n0,<br>\\n0<br>\\n],<br>\\n&quot;color&quot;: &quot;#432&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#653&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 106,<br>\\n&quot;type&quot;: &quot;SaveImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n2800,<br>\\n680<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 270<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 28,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 267,<br>\\n&quot;label&quot;: &quot;images&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;SaveImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;ComfyUI&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#432&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#653&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 95,<br>\\n&quot;type&quot;: &quot;CR Overlay Text&quot;,<br>\\n&quot;pos&quot;: [<br>\\n3030,<br>\\n680<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 240,<br>\\n&quot;1&quot;: 384<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 29,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 269,<br>\\n&quot;label&quot;: &quot;image&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;text&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;link&quot;: 270,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;text&quot;<br>\\n},<br>\\n&quot;label&quot;: &quot;text&quot;,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n258<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;IMAGE&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;show_help&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 1,<br>\\n&quot;label&quot;: &quot;show_help&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CR Overlay Text&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;ELON&quot;,<br>\\n&quot;PlayfairDisplay-Bold.ttf&quot;,<br>\\n188,<br>\\n&quot;custom&quot;,<br>\\n&quot;center&quot;,<br>\\n&quot;center&quot;,<br>\\n0,<br>\\n0,<br>\\n0,<br>\\n325,<br>\\n0,<br>\\n&quot;text center&quot;,<br>\\n&quot;503e23&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#432&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#653&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 98,<br>\\n&quot;type&quot;: &quot;SaveImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n3600,<br>\\n-10<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 940,<br>\\n&quot;1&quot;: 1380<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 31,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 275,<br>\\n&quot;label&quot;: &quot;images&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;SaveImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;ComfyUI&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 97,<br>\\n&quot;type&quot;: &quot;CR Overlay Text&quot;,<br>\\n&quot;pos&quot;: [<br>\\n3290,<br>\\n680<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 220,<br>\\n&quot;1&quot;: 384<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 30,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 258,<br>\\n&quot;label&quot;: &quot;image&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;text&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;link&quot;: 271,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;text&quot;<br>\\n},<br>\\n&quot;label&quot;: &quot;text&quot;,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n275<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;IMAGE&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;show_help&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 1,<br>\\n&quot;label&quot;: &quot;show_help&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CR Overlay Text&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;5 , 0 0 0 , 0 0 0 , 0 0 0&quot;,<br>\\n&quot;Always In My Heart.ttf&quot;,<br>\\n80,<br>\\n&quot;custom&quot;,<br>\\n&quot;center&quot;,<br>\\n&quot;center&quot;,<br>\\n0,<br>\\n0,<br>\\n15,<br>\\n515,<br>\\n0,<br>\\n&quot;text center&quot;,<br>\\n&quot;503e23&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#432&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#653&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 71,<br>\\n&quot;type&quot;: &quot;KSampler&quot;,<br>\\n&quot;pos&quot;: [<br>\\n2190,<br>\\n39<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 330,<br>\\n&quot;1&quot;: 474<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 22,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 224,<br>\\n&quot;label&quot;: &quot;model&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 248,<br>\\n&quot;label&quot;: &quot;positive&quot;,<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 249,<br>\\n&quot;label&quot;: &quot;negative&quot;,<br>\\n&quot;slot_index&quot;: 2<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 232,<br>\\n&quot;label&quot;: &quot;latent_image&quot;,<br>\\n&quot;slot_index&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n233<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;LATENT&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;KSampler&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n630358901688601,<br>\\n&quot;randomize&quot;,<br>\\n20,<br>\\n8,<br>\\n&quot;euler&quot;,<br>\\n&quot;normal&quot;,<br>\\n1<br>\\n],<br>\\n&quot;color&quot;: &quot;#322&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#533&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 83,<br>\\n&quot;type&quot;: &quot;PrimitiveNode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n290,<br>\\n100<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 58<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 7,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;STRING&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;links&quot;: [<br>\\n238<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;prompt2&quot;<br>\\n},<br>\\n&quot;label&quot;: &quot;STRING&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Run widget replace on values&quot;: false<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;wanostyle, solo, ((masterpiece)), (best quality), (extremely detailed), depth of field, sketch, dark intense shadows, sharp focus, soft lighting, hdr, colorful, good composition, manga,&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#232&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#353&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 112,<br>\\n&quot;type&quot;: &quot;DeepTranslatorTextNode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n290,<br>\\n60<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n330,<br>\\n219.99999618530273<br>\\n],<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: true<br>\\n},<br>\\n&quot;order&quot;: 13,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;text&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;link&quot;: 277,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;text&quot;<br>\\n},<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;text&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;links&quot;: [<br>\\n276<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;text&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;DeepTranslatorTextNode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;auto&quot;,<br>\\n&quot;english&quot;,<br>\\n&quot;disable&quot;,<br>\\n&quot;&quot;,<br>\\n&quot;&quot;,<br>\\n&quot;GoogleTranslator&quot;,<br>\\n&quot;一个精神抖擞的中年男人，身穿黑色皮外套，飞机头，身上布满金黄色的闪电，战斗姿势&quot;,<br>\\n&quot;proxy_hide&quot;,<br>\\n&quot;authorization_hide&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#232&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#353&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 85,<br>\\n&quot;type&quot;: &quot;PrimitiveNode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-520,<br>\\n-220<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 650,<br>\\n&quot;1&quot;: 110<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 8,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;STRING&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;links&quot;: [<br>\\n277<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;text&quot;<br>\\n},<br>\\n&quot;label&quot;: &quot;STRING&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Run widget replace on values&quot;: false<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;一个精神抖擞的中年男人，身穿黑色皮外套，飞机头，身上布满金黄色的闪电，战斗姿势&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#222&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#000&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 108,<br>\\n&quot;type&quot;: &quot;PrimitiveNode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-520,<br>\\n-70<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 650,<br>\\n&quot;1&quot;: 100<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 9,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;STRING&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;links&quot;: [<br>\\n270<br>\\n],<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;text&quot;<br>\\n},<br>\\n&quot;label&quot;: &quot;STRING&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Run widget replace on values&quot;: false<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;ELON&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#222&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#000&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 68,<br>\\n&quot;type&quot;: &quot;CheckpointLoaderSimple&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-530,<br>\\n350<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 98<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 10,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n227<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;MODEL&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [<br>\\n228<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;CLIP&quot;,<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;VAE&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;links&quot;: [<br>\\n234<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;VAE&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CheckpointLoaderSimple&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;meinamix_meinaV11.safetensors&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#222&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#000&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 73,<br>\\n&quot;type&quot;: &quot;LoraLoader&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-190,<br>\\n350<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 126<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 14,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 227,<br>\\n&quot;label&quot;: &quot;model&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 228,<br>\\n&quot;label&quot;: &quot;clip&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n229<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;MODEL&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [<br>\\n230,<br>\\n231<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;CLIP&quot;,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;LoraLoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;wano_style_loRA_v2_offset.safetensors&quot;,<br>\\n1,<br>\\n1<br>\\n],<br>\\n&quot;color&quot;: &quot;#222&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#000&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 113,<br>\\n&quot;type&quot;: &quot;EmptyImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n2230,<br>\\n730<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n210,<br>\\n250<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 11,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n278<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;IMAGE&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;EmptyImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n1024,<br>\\n1448,<br>\\n1,<br>\\n0<br>\\n],<br>\\n&quot;color&quot;: &quot;#432&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#653&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 99,<br>\\n&quot;type&quot;: &quot;Image Overlay&quot;,<br>\\n&quot;pos&quot;: [<br>\\n2460,<br>\\n680<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 320,<br>\\n&quot;1&quot;: 300<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 26,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;base_image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 278,<br>\\n&quot;label&quot;: &quot;base_image&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;overlay_image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 261,<br>\\n&quot;label&quot;: &quot;overlay_image&quot;,<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;optional_mask&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;label&quot;: &quot;optional_mask&quot;,<br>\\n&quot;slot_index&quot;: 2<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n263<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;IMAGE&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;Image Overlay&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;None&quot;,<br>\\n&quot;nearest-exact&quot;,<br>\\n1,<br>\\n512,<br>\\n512,<br>\\n90,<br>\\n300,<br>\\n0,<br>\\n0<br>\\n],<br>\\n&quot;color&quot;: &quot;#432&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#653&quot;,<br>\\n&quot;shape&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;links&quot;: [<br>\\n[<br>\\n222,<br>\\n69,<br>\\n0,<br>\\n67,<br>\\n1,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n223,<br>\\n70,<br>\\n0,<br>\\n67,<br>\\n4,<br>\\n&quot;CLIP_VISION&quot;<br>\\n],<br>\\n[<br>\\n224,<br>\\n67,<br>\\n0,<br>\\n71,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n227,<br>\\n68,<br>\\n0,<br>\\n73,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n228,<br>\\n68,<br>\\n1,<br>\\n73,<br>\\n1,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n229,<br>\\n73,<br>\\n0,<br>\\n67,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n230,<br>\\n73,<br>\\n1,<br>\\n72,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n231,<br>\\n73,<br>\\n1,<br>\\n74,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n232,<br>\\n75,<br>\\n0,<br>\\n71,<br>\\n3,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n233,<br>\\n71,<br>\\n0,<br>\\n76,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n234,<br>\\n68,<br>\\n2,<br>\\n76,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n235,<br>\\n76,<br>\\n0,<br>\\n77,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n237,<br>\\n82,<br>\\n0,<br>\\n72,<br>\\n1,<br>\\n&quot;STRING&quot;<br>\\n],<br>\\n[<br>\\n238,<br>\\n83,<br>\\n0,<br>\\n82,<br>\\n1,<br>\\n&quot;STRING&quot;<br>\\n],<br>\\n[<br>\\n241,<br>\\n72,<br>\\n0,<br>\\n86,<br>\\n0,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n242,<br>\\n74,<br>\\n0,<br>\\n86,<br>\\n1,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n243,<br>\\n87,<br>\\n0,<br>\\n86,<br>\\n2,<br>\\n&quot;CONTROL_NET&quot;<br>\\n],<br>\\n[<br>\\n246,<br>\\n89,<br>\\n0,<br>\\n90,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n248,<br>\\n86,<br>\\n0,<br>\\n71,<br>\\n1,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n249,<br>\\n86,<br>\\n1,<br>\\n71,<br>\\n2,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n253,<br>\\n90,<br>\\n0,<br>\\n93,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n254,<br>\\n93,<br>\\n0,<br>\\n86,<br>\\n3,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n255,<br>\\n93,<br>\\n0,<br>\\n91,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n258,<br>\\n95,<br>\\n0,<br>\\n97,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n261,<br>\\n102,<br>\\n0,<br>\\n99,<br>\\n1,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n263,<br>\\n99,<br>\\n0,<br>\\n103,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n264,<br>\\n104,<br>\\n0,<br>\\n103,<br>\\n1,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n265,<br>\\n104,<br>\\n1,<br>\\n103,<br>\\n2,<br>\\n&quot;MASK&quot;<br>\\n],<br>\\n[<br>\\n267,<br>\\n103,<br>\\n0,<br>\\n106,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n268,<br>\\n76,<br>\\n0,<br>\\n102,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n269,<br>\\n103,<br>\\n0,<br>\\n95,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n270,<br>\\n108,<br>\\n0,<br>\\n95,<br>\\n1,<br>\\n&quot;STRING&quot;<br>\\n],<br>\\n[<br>\\n271,<br>\\n109,<br>\\n0,<br>\\n97,<br>\\n1,<br>\\n&quot;STRING&quot;<br>\\n],<br>\\n[<br>\\n275,<br>\\n97,<br>\\n0,<br>\\n98,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n276,<br>\\n112,<br>\\n0,<br>\\n82,<br>\\n0,<br>\\n&quot;STRING&quot;<br>\\n],<br>\\n[<br>\\n277,<br>\\n85,<br>\\n0,<br>\\n112,<br>\\n0,<br>\\n&quot;STRING&quot;<br>\\n],<br>\\n[<br>\\n278,<br>\\n113,<br>\\n0,<br>\\n99,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n]<br>\\n],<br>\\n&quot;groups&quot;: [<br>\\n{<br>\\n&quot;title&quot;: &quot;输入图片和描述&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n-590,<br>\\n-700,<br>\\n810,<br>\\n930<br>\\n],<br>\\n&quot;color&quot;: &quot;#444&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;locked&quot;: false<br>\\n},<br>\\n{<br>\\n&quot;title&quot;: &quot;切换模型&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n-590,<br>\\n250,<br>\\n810,<br>\\n290<br>\\n],<br>\\n&quot;color&quot;: &quot;#444&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;locked&quot;: false<br>\\n},<br>\\n{<br>\\n&quot;title&quot;: &quot;提示词&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n240,<br>\\n-40,<br>\\n686,<br>\\n579<br>\\n],<br>\\n&quot;color&quot;: &quot;#8A8&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;locked&quot;: false<br>\\n},<br>\\n{<br>\\n&quot;title&quot;: &quot;姿势ControlNet&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n940,<br>\\n-690,<br>\\n830,<br>\\n630<br>\\n],<br>\\n&quot;color&quot;: &quot;#88A&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;locked&quot;: false<br>\\n},<br>\\n{<br>\\n&quot;title&quot;: &quot;IPAdapter FaceID&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n940,<br>\\n-40,<br>\\n830,<br>\\n580<br>\\n],<br>\\n&quot;color&quot;: &quot;#b06634&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;locked&quot;: false<br>\\n},<br>\\n{<br>\\n&quot;title&quot;: &quot;采样绘制&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n1790,<br>\\n-40,<br>\\n1320,<br>\\n580<br>\\n],<br>\\n&quot;color&quot;: &quot;#A88&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;locked&quot;: false<br>\\n},<br>\\n{<br>\\n&quot;title&quot;: &quot;图文加工&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n2190,<br>\\n560,<br>\\n1370,<br>\\n810<br>\\n],<br>\\n&quot;color&quot;: &quot;#b58b2a&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;locked&quot;: false<br>\\n}<br>\\n],<br>\\n&quot;config&quot;: {},<br>\\n&quot;extra&quot;: {<br>\\n&quot;0246.VERSION&quot;: [<br>\\n0,<br>\\n0,<br>\\n4<br>\\n],<br>\\n&quot;ds&quot;: {<br>\\n&quot;scale&quot;: 0.4950000000000003,<br>\\n&quot;offset&quot;: [<br>\\n678.2254824661669,<br>\\n950.19619040084<br>\\n]<br>\\n},<br>\\n&quot;workspace_info&quot;: {<br>\\n&quot;id&quot;: &quot;ef37f0f5-20b4-4da2-af94-c31f664032a3&quot;<br>\\n}<br>\\n},<br>\\n&quot;version&quot;: 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第4课/进阶工作流3：海贼王通缉令生成.json","value":{"title":"进阶工作流3：海贼王通缉令生成.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第4课/进阶工作流3：海贼王通缉令生成.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{i as comp,p as data};

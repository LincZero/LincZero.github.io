import{_ as e,c as l,b as o,o as a,r as t}from"./app-CnEjATvv.js";const i={};function s(p,r){const n=t("VueFlow");return a(),l("div",null,[o(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const m=e(i,[["render",s],["__file","进阶工作流3：海贼王通缉令生成.json.html.vue"]]),g=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC4%E8%AF%BE/%E8%BF%9B%E9%98%B6%E5%B7%A5%E4%BD%9C%E6%B5%813%EF%BC%9A%E6%B5%B7%E8%B4%BC%E7%8E%8B%E9%80%9A%E7%BC%89%E4%BB%A4%E7%94%9F%E6%88%90.json","title":"","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 113, \\"last_link_id\\": 278, \\"nodes\\": [ { \\"id\\": 89, \\"type\\": \\"LoadImage\\", \\"pos\\": [ -180, -580 ], \\"size\\": { \\"0\\": 315, \\"1\\": 314 }, \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC4%E8%AF%BE/%E8%BF%9B%E9%98%B6%E5%B7%A5%E4%BD%9C%E6%B5%813%EF%BC%9A%E6%B5%B7%E8%B4%BC%E7%8E%8B%E9%80%9A%E7%BC%89%E4%BB%A4%E7%94%9F%E6%88%90.json"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 113, \\"last_link_id\\": 278, \\"nodes\\": [ { \\"id\\": 89, \\"type\\": \\"LoadImage\\", \\"pos\\": [ -180, -580 ], \\"size\\": { \\"0\\": 315, \\"1\\": 314 }, \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":8.72,"words":2617},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第4课/进阶工作流3：海贼王通缉令生成.json","excerpt":"<p>{\\n\\"last_node_id\\": 113,\\n\\"last_link_id\\": 278,\\n\\"nodes\\": [\\n{\\n\\"id\\": 89,\\n\\"type\\": \\"LoadImage\\",\\n\\"pos\\": [\\n-180,\\n-580\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 314\\n},\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n246\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"IMAGE\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"MASK\\",\\n\\"slot_index\\": 1\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"portrait-woman-waving-hand-say-hi-video-chat-holding-smartphone-stretched-out-hand-greeting-friend-standing-against-white-wall.jpg\\",\\n\\"image\\"\\n],\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 76,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": [\\n2530,\\n40\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 23,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 233,\\n\\"label\\": \\"samples\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 234,\\n\\"label\\": \\"vae\\",\\n\\"slot_index\\": 1\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n235,\\n268\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"IMAGE\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n},\\n\\"color\\": \\"#322\\",\\n\\"bgcolor\\": \\"#533\\"\\n},\\n{\\n\\"id\\": 86,\\n\\"type\\": \\"ControlNetApplyAdvanced\\",\\n\\"pos\\": [\\n1340,\\n-250\\n],\\n\\"size\\": {\\n\\"0\\": 390,\\n\\"1\\": 170\\n},\\n\\"flags\\": {},\\n\\"order\\": 21,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 241,\\n\\"label\\": \\"positive\\"\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 242,\\n\\"label\\": \\"negative\\"\\n},\\n{\\n\\"name\\": \\"control_net\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"link\\": 243,\\n\\"label\\": \\"control_net\\",\\n\\"slot_index\\": 2\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 254,\\n\\"label\\": \\"image\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n248\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"positive\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n249\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"negative\\",\\n\\"slot_index\\": 1\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetApplyAdvanced\\"\\n},\\n\\"widgets_values\\": [\\n1,\\n0,\\n1\\n],\\n\\"color\\": \\"#223\\",\\n\\"bgcolor\\": \\"#335\\"\\n},\\n{\\n\\"id\\": 75,\\n\\"type\\": \\"EmptyLatentImage\\",\\n\\"pos\\": [\\n1850,\\n370\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 106\\n},\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n232\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"LATENT\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"EmptyLatentImage\\"\\n},\\n\\"widgets_values\\": [\\n856,\\n616,\\n1\\n],\\n\\"color\\": \\"#322\\",\\n\\"bgcolor\\": \\"#533\\"\\n},\\n{\\n\\"id\\": 82,\\n\\"type\\": \\"easy promptConcat\\",\\n\\"pos\\": [\\n520,\\n60\\n],\\n\\"size\\": {\\n\\"0\\": 360,\\n\\"1\\": 100\\n},\\n\\"flags\\": {\\n\\"collapsed\\": false\\n},\\n\\"order\\": 16,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"prompt1\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 276,\\n\\"widget\\": {\\n\\"name\\": \\"prompt1\\"\\n},\\n\\"slot_index\\": 0,\\n\\"label\\": \\"prompt1\\"\\n},\\n{\\n\\"name\\": \\"prompt2\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 238,\\n\\"widget\\": {\\n\\"name\\": \\"prompt2\\"\\n},\\n\\"slot_index\\": 1,\\n\\"label\\": \\"prompt2\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"prompt\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n237\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"prompt\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"easy promptConcat\\"\\n},\\n\\"widgets_values\\": [\\n\\"\\",\\n\\"wanostyle, solo, ((masterpiece)), (best quality), (extremely detailed), depth of field, sketch, dark intense shadows, sharp focus, soft lighting, hdr, colorful, good composition, manga,\\",\\n\\"，\\"\\n],\\n\\"color\\": \\"#232\\",\\n\\"bgcolor\\": \\"#353\\"\\n},\\n{\\n\\"id\\": 72,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n290,\\n200\\n],\\n\\"size\\": {\\n\\"0\\": 590,\\n\\"1\\": 54\\n},\\n\\"flags\\": {\\n\\"collapsed\\": false\\n},\\n\\"order\\": 20,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 230,\\n\\"label\\": \\"clip\\"\\n},\\n{\\n\\"name\\": \\"text\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 237,\\n\\"widget\\": {\\n\\"name\\": \\"text\\"\\n},\\n\\"label\\": \\"text\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n241\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"CONDITIONING\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"\\"\\n],\\n\\"color\\": \\"#232\\",\\n\\"bgcolor\\": \\"#353\\"\\n},\\n{\\n\\"id\\": 74,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n290,\\n290\\n],\\n\\"size\\": {\\n\\"0\\": 590,\\n\\"1\\": 110\\n},\\n\\"flags\\": {\\n\\"collapsed\\": false\\n},\\n\\"order\\": 18,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 231,\\n\\"label\\": \\"clip\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n242\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"CONDITIONING\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"embedding:EasyNegative, embedding:BadDream, worst quality, ugly\\"\\n],\\n\\"color\\": \\"#232\\",\\n\\"bgcolor\\": \\"#353\\"\\n},\\n{\\n\\"id\\": 87,\\n\\"type\\": \\"ControlNetLoader\\",\\n\\"pos\\": [\\n1000,\\n-340\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONTROL_NET\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"links\\": [\\n243\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"CONTROL_NET\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"control_v11p_sd15_openpose.pth\\"\\n],\\n\\"color\\": \\"#223\\",\\n\\"bgcolor\\": \\"#335\\"\\n},\\n{\\n\\"id\\": 70,\\n\\"type\\": \\"CLIPVisionLoader\\",\\n\\"pos\\": [\\n1010,\\n50\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CLIP_VISION\\",\\n\\"type\\": \\"CLIP_VISION\\",\\n\\"links\\": [\\n223\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"CLIP_VISION\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPVisionLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"pytorch_model.bin\\"\\n],\\n\\"color\\": \\"#332922\\",\\n\\"bgcolor\\": \\"#593930\\"\\n},\\n{\\n\\"id\\": 67,\\n\\"type\\": \\"easy ipadapterApplyADV\\",\\n\\"pos\\": [\\n1340,\\n50\\n],\\n\\"size\\": {\\n\\"0\\": 400,\\n\\"1\\": 464\\n},\\n\\"flags\\": {},\\n\\"order\\": 17,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 229,\\n\\"label\\": \\"model\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 222,\\n\\"label\\": \\"image\\",\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"image_negative\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": null,\\n\\"label\\": \\"image_negative\\"\\n},\\n{\\n\\"name\\": \\"attn_mask\\",\\n\\"type\\": \\"MASK\\",\\n\\"link\\": null,\\n\\"label\\": \\"attn_mask\\",\\n\\"slot_index\\": 3\\n},\\n{\\n\\"name\\": \\"clip_vision\\",\\n\\"type\\": \\"CLIP_VISION\\",\\n\\"link\\": 223,\\n\\"label\\": \\"clip_vision\\",\\n\\"slot_index\\": 4\\n},\\n{\\n\\"name\\": \\"optional_ipadapter\\",\\n\\"type\\": \\"IPADAPTER\\",\\n\\"link\\": null,\\n\\"label\\": \\"optional_ipadapter\\",\\n\\"slot_index\\": 5\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n224\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"model\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"images\\"\\n},\\n{\\n\\"name\\": \\"masks\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"masks\\"\\n},\\n{\\n\\"name\\": \\"ipadapter\\",\\n\\"type\\": \\"IPADAPTER\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"ipadapter\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"easy ipadapterApplyADV\\"\\n},\\n\\"widgets_values\\": [\\n\\"FACEID PLUS V2\\",\\n0.75,\\n\\"CUDA\\",\\n1,\\n1,\\n\\"linear\\",\\n\\"concat\\",\\n0,\\n1,\\n\\"V only\\",\\n\\"all\\",\\nfalse,\\nfalse,\\n0,\\n\\"\\"\\n],\\n\\"color\\": \\"#332922\\",\\n\\"bgcolor\\": \\"#593930\\"\\n},\\n{\\n\\"id\\": 77,\\n\\"type\\": \\"SaveImage\\",\\n\\"pos\\": [\\n2750,\\n40\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 270\\n},\\n\\"flags\\": {},\\n\\"order\\": 24,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 235,\\n\\"label\\": \\"images\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"SaveImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\"\\n],\\n\\"color\\": \\"#322\\",\\n\\"bgcolor\\": \\"#533\\"\\n},\\n{\\n\\"id\\": 69,\\n\\"type\\": \\"LoadImage\\",\\n\\"pos\\": [\\n-520,\\n-580\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 314\\n},\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n222\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"IMAGE\\"\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"MASK\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"0-1.jpg\\",\\n\\"image\\"\\n],\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 90,\\n\\"type\\": \\"ImageResizeKJ\\",\\n\\"pos\\": [\\n1020,\\n-550\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 242\\n},\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 12,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 246,\\n\\"label\\": \\"image\\"\\n},\\n{\\n\\"name\\": \\"get_image_size\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": null,\\n\\"label\\": \\"get_image_size\\"\\n},\\n{\\n\\"name\\": \\"width_input\\",\\n\\"type\\": \\"INT\\",\\n\\"link\\": null,\\n\\"widget\\": {\\n\\"name\\": \\"width_input\\"\\n},\\n\\"label\\": \\"width_input\\"\\n},\\n{\\n\\"name\\": \\"height_input\\",\\n\\"type\\": \\"INT\\",\\n\\"link\\": null,\\n\\"widget\\": {\\n\\"name\\": \\"height_input\\"\\n},\\n\\"label\\": \\"height_input\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n253\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"IMAGE\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"width\\",\\n\\"type\\": \\"INT\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"width\\"\\n},\\n{\\n\\"name\\": \\"height\\",\\n\\"type\\": \\"INT\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"height\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ImageResizeKJ\\"\\n},\\n\\"widgets_values\\": [\\n704,\\n512,\\n\\"nearest-exact\\",\\ntrue,\\n2,\\n0,\\n0\\n],\\n\\"color\\": \\"#223\\",\\n\\"bgcolor\\": \\"#335\\"\\n},\\n{\\n\\"id\\": 93,\\n\\"type\\": \\"DWPreprocessor\\",\\n\\"pos\\": [\\n1000,\\n-580\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 198\\n},\\n\\"flags\\": {},\\n\\"order\\": 15,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 253,\\n\\"label\\": \\"image\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n254,\\n255\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"IMAGE\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"POSE_KEYPOINT\\",\\n\\"type\\": \\"POSE_KEYPOINT\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"POSE_KEYPOINT\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"DWPreprocessor\\"\\n},\\n\\"widgets_values\\": [\\n\\"enable\\",\\n\\"enable\\",\\n\\"enable\\",\\n512,\\n\\"yolox_l.onnx\\",\\n\\"dw-ll_ucoco_384_bs5.torchscript.pt\\"\\n],\\n\\"color\\": \\"#223\\",\\n\\"bgcolor\\": \\"#335\\"\\n},\\n{\\n\\"id\\": 91,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n1340,\\n-590\\n],\\n\\"size\\": {\\n\\"0\\": 390,\\n\\"1\\": 290\\n},\\n\\"flags\\": {},\\n\\"order\\": 19,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 255,\\n\\"label\\": \\"images\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n},\\n\\"color\\": \\"#223\\",\\n\\"bgcolor\\": \\"#335\\"\\n},\\n{\\n\\"id\\": 103,\\n\\"type\\": \\"Image Overlay\\",\\n\\"pos\\": [\\n2460,\\n1030\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 290\\n},\\n\\"flags\\": {},\\n\\"order\\": 27,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"base_image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 263,\\n\\"label\\": \\"base_image\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"overlay_image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 264,\\n\\"label\\": \\"overlay_image\\",\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"optional_mask\\",\\n\\"type\\": \\"MASK\\",\\n\\"link\\": 265,\\n\\"label\\": \\"optional_mask\\",\\n\\"slot_index\\": 2\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n267,\\n269\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"IMAGE\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"Image Overlay\\"\\n},\\n\\"widgets_values\\": [\\n\\"None\\",\\n\\"nearest-exact\\",\\n1,\\n512,\\n512,\\n0,\\n0,\\n0,\\n0\\n],\\n\\"color\\": \\"#432\\",\\n\\"bgcolor\\": \\"#653\\",\\n\\"shape\\": 1\\n},\\n{\\n\\"id\\": 104,\\n\\"type\\": \\"LoadImage\\",\\n\\"pos\\": [\\n2230,\\n1040\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 314\\n},\\n\\"flags\\": {\\n\\"collapsed\\": false\\n},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n264\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"IMAGE\\"\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": [\\n265\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"MASK\\",\\n\\"slot_index\\": 1\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"通缉令模板（镂空） (1).png\\",\\n\\"image\\"\\n],\\n\\"color\\": \\"#432\\",\\n\\"bgcolor\\": \\"#653\\"\\n},\\n{\\n\\"id\\": 109,\\n\\"type\\": \\"PrimitiveNode\\",\\n\\"pos\\": [\\n-520,\\n70\\n],\\n\\"size\\": {\\n\\"0\\": 650,\\n\\"1\\": 100\\n},\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"STRING\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n271\\n],\\n\\"widget\\": {\\n\\"name\\": \\"text\\"\\n},\\n\\"label\\": \\"STRING\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Run widget replace on values\\": false\\n},\\n\\"widgets_values\\": [\\n\\"5 , 0 0 0 , 0 0 0 , 0 0 0\\"\\n],\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 102,\\n\\"type\\": \\"ImageResizeKJ\\",\\n\\"pos\\": [\\n2290,\\n680\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 242\\n},\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 25,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 268,\\n\\"label\\": \\"image\\"\\n},\\n{\\n\\"name\\": \\"get_image_size\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": null,\\n\\"label\\": \\"get_image_size\\"\\n},\\n{\\n\\"name\\": \\"width_input\\",\\n\\"type\\": \\"INT\\",\\n\\"link\\": null,\\n\\"widget\\": {\\n\\"name\\": \\"width_input\\"\\n},\\n\\"label\\": \\"width_input\\"\\n},\\n{\\n\\"name\\": \\"height_input\\",\\n\\"type\\": \\"INT\\",\\n\\"link\\": null,\\n\\"widget\\": {\\n\\"name\\": \\"height_input\\"\\n},\\n\\"label\\": \\"height_input\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n261\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"IMAGE\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"width\\",\\n\\"type\\": \\"INT\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"width\\"\\n},\\n{\\n\\"name\\": \\"height\\",\\n\\"type\\": \\"INT\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"height\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ImageResizeKJ\\"\\n},\\n\\"widgets_values\\": [\\n856,\\n616,\\n\\"nearest-exact\\",\\nfalse,\\n2,\\n0,\\n0\\n],\\n\\"color\\": \\"#432\\",\\n\\"bgcolor\\": \\"#653\\"\\n},\\n{\\n\\"id\\": 106,\\n\\"type\\": \\"SaveImage\\",\\n\\"pos\\": [\\n2800,\\n680\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 270\\n},\\n\\"flags\\": {},\\n\\"order\\": 28,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 267,\\n\\"label\\": \\"images\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"SaveImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\"\\n],\\n\\"color\\": \\"#432\\",\\n\\"bgcolor\\": \\"#653\\"\\n},\\n{\\n\\"id\\": 95,\\n\\"type\\": \\"CR Overlay Text\\",\\n\\"pos\\": [\\n3030,\\n680\\n],\\n\\"size\\": {\\n\\"0\\": 240,\\n\\"1\\": 384\\n},\\n\\"flags\\": {},\\n\\"order\\": 29,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 269,\\n\\"label\\": \\"image\\"\\n},\\n{\\n\\"name\\": \\"text\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 270,\\n\\"widget\\": {\\n\\"name\\": \\"text\\"\\n},\\n\\"label\\": \\"text\\",\\n\\"slot_index\\": 1\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n258\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"IMAGE\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"show_help\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"slot_index\\": 1,\\n\\"label\\": \\"show_help\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CR Overlay Text\\"\\n},\\n\\"widgets_values\\": [\\n\\"ELON\\",\\n\\"PlayfairDisplay-Bold.ttf\\",\\n188,\\n\\"custom\\",\\n\\"center\\",\\n\\"center\\",\\n0,\\n0,\\n0,\\n325,\\n0,\\n\\"text center\\",\\n\\"503e23\\"\\n],\\n\\"color\\": \\"#432\\",\\n\\"bgcolor\\": \\"#653\\"\\n},\\n{\\n\\"id\\": 98,\\n\\"type\\": \\"SaveImage\\",\\n\\"pos\\": [\\n3600,\\n-10\\n],\\n\\"size\\": {\\n\\"0\\": 940,\\n\\"1\\": 1380\\n},\\n\\"flags\\": {},\\n\\"order\\": 31,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 275,\\n\\"label\\": \\"images\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"SaveImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\"\\n]\\n},\\n{\\n\\"id\\": 97,\\n\\"type\\": \\"CR Overlay Text\\",\\n\\"pos\\": [\\n3290,\\n680\\n],\\n\\"size\\": {\\n\\"0\\": 220,\\n\\"1\\": 384\\n},\\n\\"flags\\": {},\\n\\"order\\": 30,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 258,\\n\\"label\\": \\"image\\"\\n},\\n{\\n\\"name\\": \\"text\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 271,\\n\\"widget\\": {\\n\\"name\\": \\"text\\"\\n},\\n\\"label\\": \\"text\\",\\n\\"slot_index\\": 1\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n275\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"IMAGE\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"show_help\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"slot_index\\": 1,\\n\\"label\\": \\"show_help\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CR Overlay Text\\"\\n},\\n\\"widgets_values\\": [\\n\\"5 , 0 0 0 , 0 0 0 , 0 0 0\\",\\n\\"Always In My Heart.ttf\\",\\n80,\\n\\"custom\\",\\n\\"center\\",\\n\\"center\\",\\n0,\\n0,\\n15,\\n515,\\n0,\\n\\"text center\\",\\n\\"503e23\\"\\n],\\n\\"color\\": \\"#432\\",\\n\\"bgcolor\\": \\"#653\\"\\n},\\n{\\n\\"id\\": 71,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": [\\n2190,\\n39\\n],\\n\\"size\\": {\\n\\"0\\": 330,\\n\\"1\\": 474\\n},\\n\\"flags\\": {},\\n\\"order\\": 22,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 224,\\n\\"label\\": \\"model\\"\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 248,\\n\\"label\\": \\"positive\\",\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 249,\\n\\"label\\": \\"negative\\",\\n\\"slot_index\\": 2\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 232,\\n\\"label\\": \\"latent_image\\",\\n\\"slot_index\\": 3\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n233\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"LATENT\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n630358901688601,\\n\\"randomize\\",\\n20,\\n8,\\n\\"euler\\",\\n\\"normal\\",\\n1\\n],\\n\\"color\\": \\"#322\\",\\n\\"bgcolor\\": \\"#533\\"\\n},\\n{\\n\\"id\\": 83,\\n\\"type\\": \\"PrimitiveNode\\",\\n\\"pos\\": [\\n290,\\n100\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"STRING\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n238\\n],\\n\\"slot_index\\": 0,\\n\\"widget\\": {\\n\\"name\\": \\"prompt2\\"\\n},\\n\\"label\\": \\"STRING\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Run widget replace on values\\": false\\n},\\n\\"widgets_values\\": [\\n\\"wanostyle, solo, ((masterpiece)), (best quality), (extremely detailed), depth of field, sketch, dark intense shadows, sharp focus, soft lighting, hdr, colorful, good composition, manga,\\"\\n],\\n\\"color\\": \\"#232\\",\\n\\"bgcolor\\": \\"#353\\"\\n},\\n{\\n\\"id\\": 112,\\n\\"type\\": \\"DeepTranslatorTextNode\\",\\n\\"pos\\": [\\n290,\\n60\\n],\\n\\"size\\": [\\n330,\\n219.99999618530273\\n],\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 13,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"text\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 277,\\n\\"widget\\": {\\n\\"name\\": \\"text\\"\\n},\\n\\"slot_index\\": 0\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"text\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n276\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"text\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"DeepTranslatorTextNode\\"\\n},\\n\\"widgets_values\\": [\\n\\"auto\\",\\n\\"english\\",\\n\\"disable\\",\\n\\"\\",\\n\\"\\",\\n\\"GoogleTranslator\\",\\n\\"一个精神抖擞的中年男人，身穿黑色皮外套，飞机头，身上布满金黄色的闪电，战斗姿势\\",\\n\\"proxy_hide\\",\\n\\"authorization_hide\\"\\n],\\n\\"color\\": \\"#232\\",\\n\\"bgcolor\\": \\"#353\\"\\n},\\n{\\n\\"id\\": 85,\\n\\"type\\": \\"PrimitiveNode\\",\\n\\"pos\\": [\\n-520,\\n-220\\n],\\n\\"size\\": {\\n\\"0\\": 650,\\n\\"1\\": 110\\n},\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"STRING\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n277\\n],\\n\\"slot_index\\": 0,\\n\\"widget\\": {\\n\\"name\\": \\"text\\"\\n},\\n\\"label\\": \\"STRING\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Run widget replace on values\\": false\\n},\\n\\"widgets_values\\": [\\n\\"一个精神抖擞的中年男人，身穿黑色皮外套，飞机头，身上布满金黄色的闪电，战斗姿势\\"\\n],\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 108,\\n\\"type\\": \\"PrimitiveNode\\",\\n\\"pos\\": [\\n-520,\\n-70\\n],\\n\\"size\\": {\\n\\"0\\": 650,\\n\\"1\\": 100\\n},\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"STRING\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n270\\n],\\n\\"widget\\": {\\n\\"name\\": \\"text\\"\\n},\\n\\"label\\": \\"STRING\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Run widget replace on values\\": false\\n},\\n\\"widgets_values\\": [\\n\\"ELON\\"\\n],\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 68,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": [\\n-530,\\n350\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n227\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"MODEL\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n228\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"CLIP\\",\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n234\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"meinamix_meinaV11.safetensors\\"\\n],\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 73,\\n\\"type\\": \\"LoraLoader\\",\\n\\"pos\\": [\\n-190,\\n350\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 126\\n},\\n\\"flags\\": {},\\n\\"order\\": 14,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 227,\\n\\"label\\": \\"model\\"\\n},\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 228,\\n\\"label\\": \\"clip\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n229\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"MODEL\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n230,\\n231\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"CLIP\\",\\n\\"slot_index\\": 1\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoraLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"wano_style_loRA_v2_offset.safetensors\\",\\n1,\\n1\\n],\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 113,\\n\\"type\\": \\"EmptyImage\\",\\n\\"pos\\": [\\n2230,\\n730\\n],\\n\\"size\\": [\\n210,\\n250\\n],\\n\\"flags\\": {},\\n\\"order\\": 11,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n278\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"IMAGE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"EmptyImage\\"\\n},\\n\\"widgets_values\\": [\\n1024,\\n1448,\\n1,\\n0\\n],\\n\\"color\\": \\"#432\\",\\n\\"bgcolor\\": \\"#653\\"\\n},\\n{\\n\\"id\\": 99,\\n\\"type\\": \\"Image Overlay\\",\\n\\"pos\\": [\\n2460,\\n680\\n],\\n\\"size\\": {\\n\\"0\\": 320,\\n\\"1\\": 300\\n},\\n\\"flags\\": {},\\n\\"order\\": 26,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"base_image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 278,\\n\\"label\\": \\"base_image\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"overlay_image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 261,\\n\\"label\\": \\"overlay_image\\",\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"optional_mask\\",\\n\\"type\\": \\"MASK\\",\\n\\"link\\": null,\\n\\"label\\": \\"optional_mask\\",\\n\\"slot_index\\": 2\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n263\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"IMAGE\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"Image Overlay\\"\\n},\\n\\"widgets_values\\": [\\n\\"None\\",\\n\\"nearest-exact\\",\\n1,\\n512,\\n512,\\n90,\\n300,\\n0,\\n0\\n],\\n\\"color\\": \\"#432\\",\\n\\"bgcolor\\": \\"#653\\",\\n\\"shape\\": 1\\n}\\n],\\n\\"links\\": [\\n[\\n222,\\n69,\\n0,\\n67,\\n1,\\n\\"IMAGE\\"\\n],\\n[\\n223,\\n70,\\n0,\\n67,\\n4,\\n\\"CLIP_VISION\\"\\n],\\n[\\n224,\\n67,\\n0,\\n71,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n227,\\n68,\\n0,\\n73,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n228,\\n68,\\n1,\\n73,\\n1,\\n\\"CLIP\\"\\n],\\n[\\n229,\\n73,\\n0,\\n67,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n230,\\n73,\\n1,\\n72,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n231,\\n73,\\n1,\\n74,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n232,\\n75,\\n0,\\n71,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n233,\\n71,\\n0,\\n76,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n234,\\n68,\\n2,\\n76,\\n1,\\n\\"VAE\\"\\n],\\n[\\n235,\\n76,\\n0,\\n77,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n237,\\n82,\\n0,\\n72,\\n1,\\n\\"STRING\\"\\n],\\n[\\n238,\\n83,\\n0,\\n82,\\n1,\\n\\"STRING\\"\\n],\\n[\\n241,\\n72,\\n0,\\n86,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n242,\\n74,\\n0,\\n86,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n243,\\n87,\\n0,\\n86,\\n2,\\n\\"CONTROL_NET\\"\\n],\\n[\\n246,\\n89,\\n0,\\n90,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n248,\\n86,\\n0,\\n71,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n249,\\n86,\\n1,\\n71,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n253,\\n90,\\n0,\\n93,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n254,\\n93,\\n0,\\n86,\\n3,\\n\\"IMAGE\\"\\n],\\n[\\n255,\\n93,\\n0,\\n91,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n258,\\n95,\\n0,\\n97,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n261,\\n102,\\n0,\\n99,\\n1,\\n\\"IMAGE\\"\\n],\\n[\\n263,\\n99,\\n0,\\n103,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n264,\\n104,\\n0,\\n103,\\n1,\\n\\"IMAGE\\"\\n],\\n[\\n265,\\n104,\\n1,\\n103,\\n2,\\n\\"MASK\\"\\n],\\n[\\n267,\\n103,\\n0,\\n106,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n268,\\n76,\\n0,\\n102,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n269,\\n103,\\n0,\\n95,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n270,\\n108,\\n0,\\n95,\\n1,\\n\\"STRING\\"\\n],\\n[\\n271,\\n109,\\n0,\\n97,\\n1,\\n\\"STRING\\"\\n],\\n[\\n275,\\n97,\\n0,\\n98,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n276,\\n112,\\n0,\\n82,\\n0,\\n\\"STRING\\"\\n],\\n[\\n277,\\n85,\\n0,\\n112,\\n0,\\n\\"STRING\\"\\n],\\n[\\n278,\\n113,\\n0,\\n99,\\n0,\\n\\"IMAGE\\"\\n]\\n],\\n\\"groups\\": [\\n{\\n\\"title\\": \\"输入图片和描述\\",\\n\\"bounding\\": [\\n-590,\\n-700,\\n810,\\n930\\n],\\n\\"color\\": \\"#444\\",\\n\\"font_size\\": 24,\\n\\"locked\\": false\\n},\\n{\\n\\"title\\": \\"切换模型\\",\\n\\"bounding\\": [\\n-590,\\n250,\\n810,\\n290\\n],\\n\\"color\\": \\"#444\\",\\n\\"font_size\\": 24,\\n\\"locked\\": false\\n},\\n{\\n\\"title\\": \\"提示词\\",\\n\\"bounding\\": [\\n240,\\n-40,\\n686,\\n579\\n],\\n\\"color\\": \\"#8A8\\",\\n\\"font_size\\": 24,\\n\\"locked\\": false\\n},\\n{\\n\\"title\\": \\"姿势ControlNet\\",\\n\\"bounding\\": [\\n940,\\n-690,\\n830,\\n630\\n],\\n\\"color\\": \\"#88A\\",\\n\\"font_size\\": 24,\\n\\"locked\\": false\\n},\\n{\\n\\"title\\": \\"IPAdapter FaceID\\",\\n\\"bounding\\": [\\n940,\\n-40,\\n830,\\n580\\n],\\n\\"color\\": \\"#b06634\\",\\n\\"font_size\\": 24,\\n\\"locked\\": false\\n},\\n{\\n\\"title\\": \\"采样绘制\\",\\n\\"bounding\\": [\\n1790,\\n-40,\\n1320,\\n580\\n],\\n\\"color\\": \\"#A88\\",\\n\\"font_size\\": 24,\\n\\"locked\\": false\\n},\\n{\\n\\"title\\": \\"图文加工\\",\\n\\"bounding\\": [\\n2190,\\n560,\\n1370,\\n810\\n],\\n\\"color\\": \\"#b58b2a\\",\\n\\"font_size\\": 24,\\n\\"locked\\": false\\n}\\n],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"0246.VERSION\\": [\\n0,\\n0,\\n4\\n],\\n\\"ds\\": {\\n\\"scale\\": 0.4950000000000003,\\n\\"offset\\": [\\n678.2254824661669,\\n950.19619040084\\n]\\n},\\n\\"workspace_info\\": {\\n\\"id\\": \\"ef37f0f5-20b4-4da2-af94-c31f664032a3\\"\\n}\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第4课/进阶工作流3：海贼王通缉令生成.json","value":{"title":"进阶工作流3：海贼王通缉令生成.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第4课/进阶工作流3：海贼王通缉令生成.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{m as comp,g as data};

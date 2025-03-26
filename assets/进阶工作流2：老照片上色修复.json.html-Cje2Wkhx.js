import{_ as r,e as b,h as e,r as o,o as l}from"./app-MVqA2zh9.js";const t={};function a(i,s){const n=o("VueFlow");return l(),b("div",null,[e(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 54,
  "last_link_id": 97,
  "nodes": [
    {
      "id": 1,
      "type": "ControlNetApplyAdvanced",
      "pos": [
        200,
        200
      ],
      "size": {
        "0": 315,
        "1": 166
      },
      "flags": {},
      "order": 18,
      "mode": 0,
      "inputs": [
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 30,
          "label": "positive",
          "slot_index": 0
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 15,
          "label": "negative",
          "slot_index": 1
        },
        {
          "name": "control_net",
          "type": "CONTROL_NET",
          "link": 18,
          "label": "control_net",
          "slot_index": 2
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 17,
          "label": "image"
        }
      ],
      "outputs": [
        {
          "name": "positive",
          "type": "CONDITIONING",
          "links": [
            10
          ],
          "shape": 3,
          "label": "positive",
          "slot_index": 0
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "links": [
            11
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
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 17,
      "type": "ControlNetApplyAdvanced",
      "pos": [
        1310,
        210
      ],
      "size": {
        "0": 315,
        "1": 166
      },
      "flags": {},
      "order": 22,
      "mode": 0,
      "inputs": [
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 32,
          "label": "positive",
          "slot_index": 0
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 57,
          "label": "negative",
          "slot_index": 1
        },
        {
          "name": "control_net",
          "type": "CONTROL_NET",
          "link": 31,
          "label": "control_net",
          "slot_index": 2
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 33,
          "label": "image"
        }
      ],
      "outputs": [
        {
          "name": "positive",
          "type": "CONDITIONING",
          "links": [
            39
          ],
          "shape": 3,
          "label": "positive",
          "slot_index": 0
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "links": [
            40
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
      "color": "#322",
      "bgcolor": "#533"
    },
    {
      "id": 11,
      "type": "EmptyLatentImage",
      "pos": [
        200,
        410
      ],
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 12,
      "mode": 0,
      "inputs": [
        {
          "name": "width",
          "type": "INT",
          "link": 19,
          "widget": {
            "name": "width"
          },
          "label": "width"
        },
        {
          "name": "height",
          "type": "INT",
          "link": 20,
          "widget": {
            "name": "height"
          },
          "label": "height"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            21
          ],
          "shape": 3,
          "label": "LATENT",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "EmptyLatentImage"
      },
      "widgets_values": [
        512,
        512,
        1
      ],
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 14,
      "type": "WD14Tagger|pysssss",
      "pos": [
        -310,
        0
      ],
      "size": {
        "0": 309.3223876953125,
        "1": 251.5987091064453
      },
      "flags": {
        "collapsed": true
      },
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 25,
          "label": "image"
        }
      ],
      "outputs": [
        {
          "name": "STRING",
          "type": "STRING",
          "links": [
            26
          ],
          "shape": 6,
          "label": "STRING",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "WD14Tagger|pysssss"
      },
      "widgets_values": [
        "wd-v1-4-moat-tagger-v2",
        0.2,
        0.85,
        false,
        false,
        "black and white, greyscale, monochrome"
      ],
      "color": "#222",
      "bgcolor": "#000"
    },
    {
      "id": 7,
      "type": "AutoNegativePrompt",
      "pos": [
        -310,
        50
      ],
      "size": {
        "0": 310,
        "1": 246
      },
      "flags": {
        "collapsed": true
      },
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "negative_prompt",
          "type": "STRING",
          "links": [
            12
          ],
          "shape": 3,
          "label": "negative_prompt",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "AutoNegativePrompt"
      },
      "widgets_values": [
        "",
        "text, watermark, embedding:UnrealisticDream, embedding:ng_deepnegative_v1_75t, ",
        1,
        0,
        "SD1.5",
        968111180811125,
        "randomize"
      ],
      "color": "#222",
      "bgcolor": "#000"
    },
    {
      "id": 9,
      "type": "ImageResizeKJ",
      "pos": [
        -310,
        480
      ],
      "size": {
        "0": 315,
        "1": 242
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 16,
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
            17
          ],
          "shape": 3,
          "label": "IMAGE",
          "slot_index": 0
        },
        {
          "name": "width",
          "type": "INT",
          "links": [
            19
          ],
          "shape": 3,
          "label": "width",
          "slot_index": 1
        },
        {
          "name": "height",
          "type": "INT",
          "links": [
            20
          ],
          "shape": 3,
          "label": "height",
          "slot_index": 2
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
      "color": "#222",
      "bgcolor": "#000"
    },
    {
      "id": 4,
      "type": "KSampler",
      "pos": [
        550,
        100
      ],
      "size": {
        "0": 315,
        "1": 474
      },
      "flags": {},
      "order": 19,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 88,
          "label": "model"
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 10,
          "label": "positive"
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 11,
          "label": "negative"
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 21,
          "label": "latent_image"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            22
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
        459071015414184,
        "fixed",
        20,
        8,
        "euler",
        "normal",
        1
      ],
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 49,
      "type": "Reroute",
      "pos": [
        -270,
        70
      ],
      "size": [
        75,
        26
      ],
      "flags": {},
      "order": 10,
      "mode": 0,
      "inputs": [
        {
          "name": "",
          "type": "*",
          "link": 83,
          "label": ""
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "CLIP",
          "links": [
            84,
            85,
            86
          ],
          "slot_index": 0,
          "label": ""
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
      "id": 5,
      "type": "CLIPTextEncode",
      "pos": [
        -130,
        50
      ],
      "size": {
        "0": 210,
        "1": 54
      },
      "flags": {
        "collapsed": true
      },
      "order": 15,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 86,
          "label": "clip"
        },
        {
          "name": "text",
          "type": "STRING",
          "link": 26,
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
            29
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
        "1GIRL, BEST QUALITY, MASTERPIECE"
      ],
      "color": "#222",
      "bgcolor": "#000"
    },
    {
      "id": 15,
      "type": "CLIPTextEncode",
      "pos": [
        -130,
        0
      ],
      "size": {
        "0": 210,
        "1": 120
      },
      "flags": {
        "collapsed": true
      },
      "order": 13,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 84,
          "label": "clip",
          "slot_index": 0
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            28
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
        "best quality, masterpiece, colorful, colorized, cinematic lighting, photograph, photorealistic, outdoors,"
      ],
      "color": "#222",
      "bgcolor": "#000"
    },
    {
      "id": 8,
      "type": "CLIPTextEncode",
      "pos": [
        -130,
        100
      ],
      "size": {
        "0": 210,
        "1": 54
      },
      "flags": {
        "collapsed": true
      },
      "order": 14,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 85,
          "label": "clip"
        },
        {
          "name": "text",
          "type": "STRING",
          "link": 12,
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
            15,
            57
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
        "1GIRL, BEST QUALITY, MASTERPIECE"
      ],
      "color": "#222",
      "bgcolor": "#000"
    },
    {
      "id": 18,
      "type": "ControlNetLoader",
      "pos": [
        1310,
        100
      ],
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "CONTROL_NET",
          "type": "CONTROL_NET",
          "links": [
            31
          ],
          "shape": 3,
          "label": "CONTROL_NET"
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetLoader"
      },
      "widgets_values": [
        "control_v11f1e_sd15_tile.pth"
      ],
      "color": "#322",
      "bgcolor": "#533"
    },
    {
      "id": 27,
      "type": "UpscaleModelLoader",
      "pos": [
        1330,
        840
      ],
      "size": {
        "0": 270,
        "1": 80
      },
      "flags": {
        "collapsed": true
      },
      "order": 2,
      "mode": 0,
      "outputs": [
        {
          "name": "UPSCALE_MODEL",
          "type": "UPSCALE_MODEL",
          "links": [
            51
          ],
          "shape": 3,
          "label": "UPSCALE_MODEL"
        }
      ],
      "properties": {
        "Node name for S&R": "UpscaleModelLoader"
      },
      "widgets_values": [
        "RealESRGAN_x4plus.pth"
      ],
      "color": "#322",
      "bgcolor": "#533"
    },
    {
      "id": 26,
      "type": "ImageUpscaleWithModel",
      "pos": [
        1490,
        840
      ],
      "size": {
        "0": 226.8000030517578,
        "1": 80
      },
      "flags": {
        "collapsed": true
      },
      "order": 23,
      "mode": 0,
      "inputs": [
        {
          "name": "upscale_model",
          "type": "UPSCALE_MODEL",
          "link": 51,
          "label": "upscale_model",
          "slot_index": 0
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 50,
          "label": "image"
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
          "label": "IMAGE",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ImageUpscaleWithModel"
      },
      "color": "#322",
      "bgcolor": "#533"
    },
    {
      "id": 28,
      "type": "ImageScaleBy",
      "pos": [
        1670,
        840
      ],
      "size": {
        "0": 210,
        "1": 82
      },
      "flags": {
        "collapsed": true
      },
      "order": 24,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 52,
          "label": "image"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            53
          ],
          "shape": 3,
          "label": "IMAGE",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ImageScaleBy"
      },
      "widgets_values": [
        "area",
        0.5
      ],
      "color": "#322",
      "bgcolor": "#533"
    },
    {
      "id": 19,
      "type": "KSampler",
      "pos": [
        1660,
        100
      ],
      "size": {
        "0": 315,
        "1": 474
      },
      "flags": {},
      "order": 26,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 89,
          "label": "model",
          "slot_index": 0
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 39,
          "label": "positive"
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 40,
          "label": "negative"
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 76,
          "label": "latent_image"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            42
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
        714309705341971,
        "randomize",
        15,
        8,
        "euler",
        "normal",
        0.33
      ],
      "color": "#322",
      "bgcolor": "#533"
    },
    {
      "id": 52,
      "type": "Reroute",
      "pos": [
        1560,
        760
      ],
      "size": [
        75,
        26
      ],
      "flags": {},
      "order": 16,
      "mode": 0,
      "inputs": [
        {
          "name": "",
          "type": "*",
          "link": 93,
          "label": ""
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "VAE",
          "links": [
            94,
            95
          ],
          "slot_index": 0,
          "label": ""
        }
      ],
      "properties": {
        "showOutputText": false,
        "horizontal": false
      },
      "color": "#322",
      "bgcolor": "#533"
    },
    {
      "id": 13,
      "type": "SaveImage",
      "pos": [
        920,
        200
      ],
      "size": {
        "0": 315,
        "1": 270
      },
      "flags": {},
      "order": 21,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 24,
          "label": "images"
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
      "id": 12,
      "type": "VAEDecode",
      "pos": [
        920,
        110
      ],
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 20,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 22,
          "label": "samples"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 91,
          "label": "vae"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            24,
            33,
            50
          ],
          "shape": 3,
          "label": "IMAGE",
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
      "id": 50,
      "type": "Reroute",
      "pos": [
        430,
        30
      ],
      "size": [
        75,
        26
      ],
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "",
          "type": "*",
          "link": 87,
          "label": ""
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "MODEL",
          "links": [
            88,
            89
          ],
          "slot_index": 0,
          "label": ""
        }
      ],
      "properties": {
        "showOutputText": false,
        "horizontal": false
      },
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 51,
      "type": "Reroute",
      "pos": [
        440,
        530
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
          "link": 90,
          "label": ""
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "VAE",
          "links": [
            91,
            93
          ],
          "slot_index": 0,
          "label": ""
        }
      ],
      "properties": {
        "showOutputText": false,
        "horizontal": false
      },
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 16,
      "type": "ConditioningCombine",
      "pos": [
        40,
        50
      ],
      "size": {
        "0": 184.8000030517578,
        "1": 50
      },
      "flags": {
        "collapsed": true
      },
      "order": 17,
      "mode": 0,
      "inputs": [
        {
          "name": "conditioning_1",
          "type": "CONDITIONING",
          "link": 28,
          "label": "conditioning_1"
        },
        {
          "name": "conditioning_2",
          "type": "CONDITIONING",
          "link": 29,
          "label": "conditioning_2"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            30,
            32
          ],
          "shape": 3,
          "label": "CONDITIONING",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ConditioningCombine"
      },
      "color": "#222",
      "bgcolor": "#000"
    },
    {
      "id": 10,
      "type": "ControlNetLoader",
      "pos": [
        200,
        100
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
          "name": "CONTROL_NET",
          "type": "CONTROL_NET",
          "links": [
            18
          ],
          "shape": 3,
          "label": "CONTROL_NET"
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetLoader"
      },
      "widgets_values": [
        "ioclab_sd15_recolor.safetensors"
      ],
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 23,
      "type": "SaveImage",
      "pos": [
        2070,
        190
      ],
      "size": {
        "0": 315,
        "1": 270
      },
      "flags": {},
      "order": 28,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 45,
          "label": "images"
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
      "type": "VAEEncode",
      "pos": [
        1860,
        940
      ],
      "size": {
        "0": 180,
        "1": 80
      },
      "flags": {
        "collapsed": true
      },
      "order": 25,
      "mode": 0,
      "inputs": [
        {
          "name": "pixels",
          "type": "IMAGE",
          "link": 53,
          "label": "pixels"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 94,
          "label": "vae",
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            76
          ],
          "shape": 3,
          "label": "LATENT",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEEncode"
      },
      "color": "#322",
      "bgcolor": "#533"
    },
    {
      "id": 53,
      "type": "Fast Groups Bypasser (rgthree)",
      "pos": {
        "0": 840,
        "1": -160,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0
      },
      "size": {
        "0": 457.0672607421875,
        "1": 98.67208099365234
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "OPT_CONNECTION",
          "type": "*",
          "links": null,
          "label": "OPT_CONNECTION"
        }
      ],
      "properties": {
        "matchColors": "",
        "matchTitle": "",
        "showNav": true,
        "sort": "position",
        "customSortAlphabet": "",
        "toggleRestriction": "default"
      },
      "color": "#432",
      "bgcolor": "#653"
    },
    {
      "id": 54,
      "type": "Image Comparer (rgthree)",
      "pos": {
        "0": 2420,
        "1": -30,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0
      },
      "size": {
        "0": 910,
        "1": 950
      },
      "flags": {},
      "order": 29,
      "mode": 0,
      "inputs": [
        {
          "name": "image_a",
          "type": "IMAGE",
          "link": 97,
          "label": "image_a",
          "dir": 3
        },
        {
          "name": "image_b",
          "type": "IMAGE",
          "link": 96,
          "label": "image_b",
          "dir": 3
        }
      ],
      "outputs": [],
      "properties": {
        "comparer_mode": "Slide"
      },
      "widgets_values": [
        [
          {
            "name": "A",
            "selected": true,
            "url": "/view?filename=rgthree.compare._temp_tivlt_00001_.png&type=temp&subfolder=&rand=0.13926185914878286"
          },
          {
            "name": "B",
            "selected": true,
            "url": "/view?filename=rgthree.compare._temp_tivlt_00002_.png&type=temp&subfolder=&rand=0.6941707574317217"
          }
        ]
      ],
      "color": "#222",
      "bgcolor": "#000"
    },
    {
      "id": 21,
      "type": "VAEDecode",
      "pos": [
        2070,
        100
      ],
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 27,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 42,
          "label": "samples"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 95,
          "label": "vae"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            45,
            96
          ],
          "shape": 3,
          "label": "IMAGE",
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
      "id": 2,
      "type": "LoadImage",
      "pos": [
        -690,
        310
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
            16,
            25,
            97
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
          "label": "MASK"
        }
      ],
      "properties": {
        "Node name for S&R": "LoadImage"
      },
      "widgets_values": [
        "02-1.jpg",
        "image"
      ],
      "color": "#222",
      "bgcolor": "#000"
    },
    {
      "id": 3,
      "type": "CheckpointLoaderSimple",
      "pos": [
        -690,
        170
      ],
      "size": {
        "0": 315,
        "1": 98
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            87
          ],
          "shape": 3,
          "label": "MODEL",
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
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            90
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
      "color": "#222",
      "bgcolor": "#000"
    }
  ],
  "links": [
    [
      10,
      1,
      0,
      4,
      1,
      "CONDITIONING"
    ],
    [
      11,
      1,
      1,
      4,
      2,
      "CONDITIONING"
    ],
    [
      12,
      7,
      0,
      8,
      1,
      "STRING"
    ],
    [
      15,
      8,
      0,
      1,
      1,
      "CONDITIONING"
    ],
    [
      16,
      2,
      0,
      9,
      0,
      "IMAGE"
    ],
    [
      17,
      9,
      0,
      1,
      3,
      "IMAGE"
    ],
    [
      18,
      10,
      0,
      1,
      2,
      "CONTROL_NET"
    ],
    [
      19,
      9,
      1,
      11,
      0,
      "INT"
    ],
    [
      20,
      9,
      2,
      11,
      1,
      "INT"
    ],
    [
      21,
      11,
      0,
      4,
      3,
      "LATENT"
    ],
    [
      22,
      4,
      0,
      12,
      0,
      "LATENT"
    ],
    [
      24,
      12,
      0,
      13,
      0,
      "IMAGE"
    ],
    [
      25,
      2,
      0,
      14,
      0,
      "IMAGE"
    ],
    [
      26,
      14,
      0,
      5,
      1,
      "STRING"
    ],
    [
      28,
      15,
      0,
      16,
      0,
      "CONDITIONING"
    ],
    [
      29,
      5,
      0,
      16,
      1,
      "CONDITIONING"
    ],
    [
      30,
      16,
      0,
      1,
      0,
      "CONDITIONING"
    ],
    [
      31,
      18,
      0,
      17,
      2,
      "CONTROL_NET"
    ],
    [
      32,
      16,
      0,
      17,
      0,
      "CONDITIONING"
    ],
    [
      33,
      12,
      0,
      17,
      3,
      "IMAGE"
    ],
    [
      39,
      17,
      0,
      19,
      1,
      "CONDITIONING"
    ],
    [
      40,
      17,
      1,
      19,
      2,
      "CONDITIONING"
    ],
    [
      42,
      19,
      0,
      21,
      0,
      "LATENT"
    ],
    [
      45,
      21,
      0,
      23,
      0,
      "IMAGE"
    ],
    [
      50,
      12,
      0,
      26,
      1,
      "IMAGE"
    ],
    [
      51,
      27,
      0,
      26,
      0,
      "UPSCALE_MODEL"
    ],
    [
      52,
      26,
      0,
      28,
      0,
      "IMAGE"
    ],
    [
      53,
      28,
      0,
      29,
      0,
      "IMAGE"
    ],
    [
      57,
      8,
      0,
      17,
      1,
      "CONDITIONING"
    ],
    [
      76,
      29,
      0,
      19,
      3,
      "LATENT"
    ],
    [
      83,
      3,
      1,
      49,
      0,
      "*"
    ],
    [
      84,
      49,
      0,
      15,
      0,
      "CLIP"
    ],
    [
      85,
      49,
      0,
      8,
      0,
      "CLIP"
    ],
    [
      86,
      49,
      0,
      5,
      0,
      "CLIP"
    ],
    [
      87,
      3,
      0,
      50,
      0,
      "*"
    ],
    [
      88,
      50,
      0,
      4,
      0,
      "MODEL"
    ],
    [
      89,
      50,
      0,
      19,
      0,
      "MODEL"
    ],
    [
      90,
      3,
      2,
      51,
      0,
      "*"
    ],
    [
      91,
      51,
      0,
      12,
      1,
      "VAE"
    ],
    [
      93,
      51,
      0,
      52,
      0,
      "*"
    ],
    [
      94,
      52,
      0,
      29,
      1,
      "VAE"
    ],
    [
      95,
      52,
      0,
      21,
      1,
      "VAE"
    ],
    [
      96,
      21,
      0,
      54,
      1,
      "IMAGE"
    ],
    [
      97,
      2,
      0,
      54,
      0,
      "IMAGE"
    ]
  ],
  "groups": [
    {
      "title": "放大（2倍）",
      "bounding": [
        1260,
        -40,
        770,
        930
      ],
      "color": "#A88",
      "font_size": 24,
      "locked": false
    },
    {
      "title": "上色",
      "bounding": [
        180,
        -40,
        710,
        930
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
      "scale": 0.7247295000000004,
      "offset": [
        328.89475906140206,
        351.98824525233533
      ]
    }
  },
  "version": 0.4
}
`})])}const d=r(t,[["render",a],["__file","进阶工作流2：老照片上色修复.json.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC4%E8%AF%BE/%E8%BF%9B%E9%98%B6%E5%B7%A5%E4%BD%9C%E6%B5%812%EF%BC%9A%E8%80%81%E7%85%A7%E7%89%87%E4%B8%8A%E8%89%B2%E4%BF%AE%E5%A4%8D.json.html","title":"进阶工作流2：老照片上色修复.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 54, \\"last_link_id\\": 97, \\"nodes\\": [ { \\"id\\": 1, \\"type\\": \\"ControlNetApplyAdvanced\\", \\"pos\\": [ 200, 200 ], \\"size\\": { \\"0\\": 315, \\"1\\": 166 }, \\"flags\\": {}, \\"order\\": 18,...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC4%E8%AF%BE/%E8%BF%9B%E9%98%B6%E5%B7%A5%E4%BD%9C%E6%B5%812%EF%BC%9A%E8%80%81%E7%85%A7%E7%89%87%E4%B8%8A%E8%89%B2%E4%BF%AE%E5%A4%8D.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 54, \\"last_link_id\\": 97, \\"nodes\\": [ { \\"id\\": 1, \\"type\\": \\"ControlNetApplyAdvanced\\", \\"pos\\": [ 200, 200 ], \\"size\\": { \\"0\\": 315, \\"1\\": 166 }, \\"flags\\": {}, \\"order\\": 18,..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"git":{},"readingTime":{"minutes":7.26,"words":2178},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第4课/进阶工作流2：老照片上色修复.json","excerpt":"<p>{<br>\\n\\"last_node_id\\": 54,<br>\\n\\"last_link_id\\": 97,<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": 1,<br>\\n\\"type\\": \\"ControlNetApplyAdvanced\\",<br>\\n\\"pos\\": [<br>\\n200,<br>\\n200<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 166<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 18,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 30,<br>\\n\\"label\\": \\"positive\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 15,<br>\\n\\"label\\": \\"negative\\",<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"control_net\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"link\\": 18,<br>\\n\\"label\\": \\"control_net\\",<br>\\n\\"slot_index\\": 2<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 17,<br>\\n\\"label\\": \\"image\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n10<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"positive\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n11<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"negative\\",<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetApplyAdvanced\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n1,<br>\\n0,<br>\\n1<br>\\n],<br>\\n\\"color\\": \\"#232\\",<br>\\n\\"bgcolor\\": \\"#353\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 17,<br>\\n\\"type\\": \\"ControlNetApplyAdvanced\\",<br>\\n\\"pos\\": [<br>\\n1310,<br>\\n210<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 166<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 22,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 32,<br>\\n\\"label\\": \\"positive\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 57,<br>\\n\\"label\\": \\"negative\\",<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"control_net\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"link\\": 31,<br>\\n\\"label\\": \\"control_net\\",<br>\\n\\"slot_index\\": 2<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 33,<br>\\n\\"label\\": \\"image\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n39<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"positive\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n40<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"negative\\",<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetApplyAdvanced\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n1,<br>\\n0,<br>\\n1<br>\\n],<br>\\n\\"color\\": \\"#322\\",<br>\\n\\"bgcolor\\": \\"#533\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 11,<br>\\n\\"type\\": \\"EmptyLatentImage\\",<br>\\n\\"pos\\": [<br>\\n200,<br>\\n410<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 106<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 12,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"width\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"link\\": 19,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"width\\"<br>\\n},<br>\\n\\"label\\": \\"width\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"height\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"link\\": 20,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"height\\"<br>\\n},<br>\\n\\"label\\": \\"height\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n21<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"LATENT\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"EmptyLatentImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n512,<br>\\n512,<br>\\n1<br>\\n],<br>\\n\\"color\\": \\"#232\\",<br>\\n\\"bgcolor\\": \\"#353\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 14,<br>\\n\\"type\\": \\"WD14Tagger|pysssss\\",<br>\\n\\"pos\\": [<br>\\n-310,<br>\\n0<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 309.3223876953125,<br>\\n\\"1\\": 251.5987091064453<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 8,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 25,<br>\\n\\"label\\": \\"image\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"STRING\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n26<br>\\n],<br>\\n\\"shape\\": 6,<br>\\n\\"label\\": \\"STRING\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"WD14Tagger|pysssss\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"wd-v1-4-moat-tagger-v2\\",<br>\\n0.2,<br>\\n0.85,<br>\\nfalse,<br>\\nfalse,<br>\\n\\"black and white, greyscale, monochrome\\"<br>\\n],<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 7,<br>\\n\\"type\\": \\"AutoNegativePrompt\\",<br>\\n\\"pos\\": [<br>\\n-310,<br>\\n50<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 310,<br>\\n\\"1\\": 246<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 0,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"negative_prompt\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n12<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"negative_prompt\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"AutoNegativePrompt\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"\\",<br>\\n\\"text, watermark, embedding:UnrealisticDream, embedding:ng_deepnegative_v1_75t, \\",<br>\\n1,<br>\\n0,<br>\\n\\"SD1.5\\",<br>\\n968111180811125,<br>\\n\\"randomize\\"<br>\\n],<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 9,<br>\\n\\"type\\": \\"ImageResizeKJ\\",<br>\\n\\"pos\\": [<br>\\n-310,<br>\\n480<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 242<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 7,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 16,<br>\\n\\"label\\": \\"image\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"get_image_size\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": null,<br>\\n\\"label\\": \\"get_image_size\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"width_input\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"link\\": null,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"width_input\\"<br>\\n},<br>\\n\\"label\\": \\"width_input\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"height_input\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"link\\": null,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"height_input\\"<br>\\n},<br>\\n\\"label\\": \\"height_input\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n17<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"IMAGE\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"width\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"links\\": [<br>\\n19<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"width\\",<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"height\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"links\\": [<br>\\n20<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"height\\",<br>\\n\\"slot_index\\": 2<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ImageResizeKJ\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n768,<br>\\n768,<br>\\n\\"nearest-exact\\",<br>\\ntrue,<br>\\n2,<br>\\n0,<br>\\n0<br>\\n],<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 4,<br>\\n\\"type\\": \\"KSampler\\",<br>\\n\\"pos\\": [<br>\\n550,<br>\\n100<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 474<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 19,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 88,<br>\\n\\"label\\": \\"model\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 10,<br>\\n\\"label\\": \\"positive\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 11,<br>\\n\\"label\\": \\"negative\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 21,<br>\\n\\"label\\": \\"latent_image\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n22<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"LATENT\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n459071015414184,<br>\\n\\"fixed\\",<br>\\n20,<br>\\n8,<br>\\n\\"euler\\",<br>\\n\\"normal\\",<br>\\n1<br>\\n],<br>\\n\\"color\\": \\"#232\\",<br>\\n\\"bgcolor\\": \\"#353\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 49,<br>\\n\\"type\\": \\"Reroute\\",<br>\\n\\"pos\\": [<br>\\n-270,<br>\\n70<br>\\n],<br>\\n\\"size\\": [<br>\\n75,<br>\\n26<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 10,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"<em>\\",<br>\\n\\"link\\": 83,<br>\\n\\"label\\": \\"\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n84,<br>\\n85,<br>\\n86<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"showOutputText\\": false,<br>\\n\\"horizontal\\": false<br>\\n},<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 5,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n-130,<br>\\n50<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 54<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 15,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 86,<br>\\n\\"label\\": \\"clip\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"text\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 26,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text\\"<br>\\n},<br>\\n\\"label\\": \\"text\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n29<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"CONDITIONING\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"1GIRL, BEST QUALITY, MASTERPIECE\\"<br>\\n],<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 15,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n-130,<br>\\n0<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 120<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 13,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 84,<br>\\n\\"label\\": \\"clip\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n28<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"CONDITIONING\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"best quality, masterpiece, colorful, colorized, cinematic lighting, photograph, photorealistic, outdoors,\\"<br>\\n],<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 8,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n-130,<br>\\n100<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 54<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 14,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 85,<br>\\n\\"label\\": \\"clip\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"text\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 12,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text\\"<br>\\n},<br>\\n\\"label\\": \\"text\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n15,<br>\\n57<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"CONDITIONING\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"1GIRL, BEST QUALITY, MASTERPIECE\\"<br>\\n],<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 18,<br>\\n\\"type\\": \\"ControlNetLoader\\",<br>\\n\\"pos\\": [<br>\\n1310,<br>\\n100<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 58<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 1,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONTROL_NET\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"links\\": [<br>\\n31<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"CONTROL_NET\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"control_v11f1e_sd15_tile.pth\\"<br>\\n],<br>\\n\\"color\\": \\"#322\\",<br>\\n\\"bgcolor\\": \\"#533\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 27,<br>\\n\\"type\\": \\"UpscaleModelLoader\\",<br>\\n\\"pos\\": [<br>\\n1330,<br>\\n840<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 270,<br>\\n\\"1\\": 80<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 2,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"UPSCALE_MODEL\\",<br>\\n\\"type\\": \\"UPSCALE_MODEL\\",<br>\\n\\"links\\": [<br>\\n51<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"UPSCALE_MODEL\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"UpscaleModelLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"RealESRGAN_x4plus.pth\\"<br>\\n],<br>\\n\\"color\\": \\"#322\\",<br>\\n\\"bgcolor\\": \\"#533\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 26,<br>\\n\\"type\\": \\"ImageUpscaleWithModel\\",<br>\\n\\"pos\\": [<br>\\n1490,<br>\\n840<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 226.8000030517578,<br>\\n\\"1\\": 80<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 23,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"upscale_model\\",<br>\\n\\"type\\": \\"UPSCALE_MODEL\\",<br>\\n\\"link\\": 51,<br>\\n\\"label\\": \\"upscale_model\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 50,<br>\\n\\"label\\": \\"image\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n52<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"IMAGE\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ImageUpscaleWithModel\\"<br>\\n},<br>\\n\\"color\\": \\"#322\\",<br>\\n\\"bgcolor\\": \\"#533\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 28,<br>\\n\\"type\\": \\"ImageScaleBy\\",<br>\\n\\"pos\\": [<br>\\n1670,<br>\\n840<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 82<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 24,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 52,<br>\\n\\"label\\": \\"image\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n53<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"IMAGE\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ImageScaleBy\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"area\\",<br>\\n0.5<br>\\n],<br>\\n\\"color\\": \\"#322\\",<br>\\n\\"bgcolor\\": \\"#533\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 19,<br>\\n\\"type\\": \\"KSampler\\",<br>\\n\\"pos\\": [<br>\\n1660,<br>\\n100<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 474<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 26,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 89,<br>\\n\\"label\\": \\"model\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 39,<br>\\n\\"label\\": \\"positive\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 40,<br>\\n\\"label\\": \\"negative\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 76,<br>\\n\\"label\\": \\"latent_image\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n42<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"LATENT\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n714309705341971,<br>\\n\\"randomize\\",<br>\\n15,<br>\\n8,<br>\\n\\"euler\\",<br>\\n\\"normal\\",<br>\\n0.33<br>\\n],<br>\\n\\"color\\": \\"#322\\",<br>\\n\\"bgcolor\\": \\"#533\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 52,<br>\\n\\"type\\": \\"Reroute\\",<br>\\n\\"pos\\": [<br>\\n1560,<br>\\n760<br>\\n],<br>\\n\\"size\\": [<br>\\n75,<br>\\n26<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 16,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"</em>\\",<br>\\n\\"link\\": 93,<br>\\n\\"label\\": \\"\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n94,<br>\\n95<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"showOutputText\\": false,<br>\\n\\"horizontal\\": false<br>\\n},<br>\\n\\"color\\": \\"#322\\",<br>\\n\\"bgcolor\\": \\"#533\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 13,<br>\\n\\"type\\": \\"SaveImage\\",<br>\\n\\"pos\\": [<br>\\n920,<br>\\n200<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 270<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 21,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 24,<br>\\n\\"label\\": \\"images\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"SaveImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"ComfyUI\\"<br>\\n],<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 12,<br>\\n\\"type\\": \\"VAEDecode\\",<br>\\n\\"pos\\": [<br>\\n920,<br>\\n110<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 46<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 20,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 22,<br>\\n\\"label\\": \\"samples\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 91,<br>\\n\\"label\\": \\"vae\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n24,<br>\\n33,<br>\\n50<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"IMAGE\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"<br>\\n},<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 50,<br>\\n\\"type\\": \\"Reroute\\",<br>\\n\\"pos\\": [<br>\\n430,<br>\\n30<br>\\n],<br>\\n\\"size\\": [<br>\\n75,<br>\\n26<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 9,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"<em>\\",<br>\\n\\"link\\": 87,<br>\\n\\"label\\": \\"\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n88,<br>\\n89<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"showOutputText\\": false,<br>\\n\\"horizontal\\": false<br>\\n},<br>\\n\\"color\\": \\"#232\\",<br>\\n\\"bgcolor\\": \\"#353\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 51,<br>\\n\\"type\\": \\"Reroute\\",<br>\\n\\"pos\\": [<br>\\n440,<br>\\n530<br>\\n],<br>\\n\\"size\\": [<br>\\n75,<br>\\n26<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 11,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"</em>\\",<br>\\n\\"link\\": 90,<br>\\n\\"label\\": \\"\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n91,<br>\\n93<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"showOutputText\\": false,<br>\\n\\"horizontal\\": false<br>\\n},<br>\\n\\"color\\": \\"#232\\",<br>\\n\\"bgcolor\\": \\"#353\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 16,<br>\\n\\"type\\": \\"ConditioningCombine\\",<br>\\n\\"pos\\": [<br>\\n40,<br>\\n50<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 184.8000030517578,<br>\\n\\"1\\": 50<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 17,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"conditioning_1\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 28,<br>\\n\\"label\\": \\"conditioning_1\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"conditioning_2\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 29,<br>\\n\\"label\\": \\"conditioning_2\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n30,<br>\\n32<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"CONDITIONING\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ConditioningCombine\\"<br>\\n},<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 10,<br>\\n\\"type\\": \\"ControlNetLoader\\",<br>\\n\\"pos\\": [<br>\\n200,<br>\\n100<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 58<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONTROL_NET\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"links\\": [<br>\\n18<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"CONTROL_NET\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"ioclab_sd15_recolor.safetensors\\"<br>\\n],<br>\\n\\"color\\": \\"#232\\",<br>\\n\\"bgcolor\\": \\"#353\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 23,<br>\\n\\"type\\": \\"SaveImage\\",<br>\\n\\"pos\\": [<br>\\n2070,<br>\\n190<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 270<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 28,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 45,<br>\\n\\"label\\": \\"images\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"SaveImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"ComfyUI\\"<br>\\n],<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 29,<br>\\n\\"type\\": \\"VAEEncode\\",<br>\\n\\"pos\\": [<br>\\n1860,<br>\\n940<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 180,<br>\\n\\"1\\": 80<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 25,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"pixels\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 53,<br>\\n\\"label\\": \\"pixels\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 94,<br>\\n\\"label\\": \\"vae\\",<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n76<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"LATENT\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEEncode\\"<br>\\n},<br>\\n\\"color\\": \\"#322\\",<br>\\n\\"bgcolor\\": \\"#533\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 53,<br>\\n\\"type\\": \\"Fast Groups Bypasser (rgthree)\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 840,<br>\\n\\"1\\": -160,<br>\\n\\"2\\": 0,<br>\\n\\"3\\": 0,<br>\\n\\"4\\": 0,<br>\\n\\"5\\": 0,<br>\\n\\"6\\": 0,<br>\\n\\"7\\": 0,<br>\\n\\"8\\": 0,<br>\\n\\"9\\": 0<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 457.0672607421875,<br>\\n\\"1\\": 98.67208099365234<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"OPT_CONNECTION\\",<br>\\n\\"type\\": \\"<em>\\",<br>\\n\\"links\\": null,<br>\\n\\"label\\": \\"OPT_CONNECTION\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"matchColors\\": \\"\\",<br>\\n\\"matchTitle\\": \\"\\",<br>\\n\\"showNav\\": true,<br>\\n\\"sort\\": \\"position\\",<br>\\n\\"customSortAlphabet\\": \\"\\",<br>\\n\\"toggleRestriction\\": \\"default\\"<br>\\n},<br>\\n\\"color\\": \\"#432\\",<br>\\n\\"bgcolor\\": \\"#653\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 54,<br>\\n\\"type\\": \\"Image Comparer (rgthree)\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 2420,<br>\\n\\"1\\": -30,<br>\\n\\"2\\": 0,<br>\\n\\"3\\": 0,<br>\\n\\"4\\": 0,<br>\\n\\"5\\": 0,<br>\\n\\"6\\": 0,<br>\\n\\"7\\": 0,<br>\\n\\"8\\": 0,<br>\\n\\"9\\": 0<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 910,<br>\\n\\"1\\": 950<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 29,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image_a\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 97,<br>\\n\\"label\\": \\"image_a\\",<br>\\n\\"dir\\": 3<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image_b\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 96,<br>\\n\\"label\\": \\"image_b\\",<br>\\n\\"dir\\": 3<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [],<br>\\n\\"properties\\": {<br>\\n\\"comparer_mode\\": \\"Slide\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n[<br>\\n{<br>\\n\\"name\\": \\"A\\",<br>\\n\\"selected\\": true,<br>\\n\\"url\\": \\"/view?filename=rgthree.compare.<em>temp_tivlt_00001</em>.png&amp;type=temp&amp;subfolder=&amp;rand=0.13926185914878286\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"B\\",<br>\\n\\"selected\\": true,<br>\\n\\"url\\": \\"/view?filename=rgthree.compare.<em>temp_tivlt_00002</em>.png&amp;type=temp&amp;subfolder=&amp;rand=0.6941707574317217\\"<br>\\n}<br>\\n]<br>\\n],<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 21,<br>\\n\\"type\\": \\"VAEDecode\\",<br>\\n\\"pos\\": [<br>\\n2070,<br>\\n100<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 46<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 27,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 42,<br>\\n\\"label\\": \\"samples\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 95,<br>\\n\\"label\\": \\"vae\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n45,<br>\\n96<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"IMAGE\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"<br>\\n},<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 2,<br>\\n\\"type\\": \\"LoadImage\\",<br>\\n\\"pos\\": [<br>\\n-690,<br>\\n310<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 314<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 5,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n16,<br>\\n25,<br>\\n97<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"IMAGE\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"MASK\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"02-1.jpg\\",<br>\\n\\"image\\"<br>\\n],<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 3,<br>\\n\\"type\\": \\"CheckpointLoaderSimple\\",<br>\\n\\"pos\\": [<br>\\n-690,<br>\\n170<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 98<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n87<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"MODEL\\",<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n83<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"CLIP\\",<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n90<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"VAE\\",<br>\\n\\"slot_index\\": 2<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"majicmixRealistic_v7.safetensors\\"<br>\\n],<br>\\n\\"color\\": \\"#222\\",<br>\\n\\"bgcolor\\": \\"#000\\"<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\n10,<br>\\n1,<br>\\n0,<br>\\n4,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n11,<br>\\n1,<br>\\n1,<br>\\n4,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n12,<br>\\n7,<br>\\n0,<br>\\n8,<br>\\n1,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n15,<br>\\n8,<br>\\n0,<br>\\n1,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n16,<br>\\n2,<br>\\n0,<br>\\n9,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n17,<br>\\n9,<br>\\n0,<br>\\n1,<br>\\n3,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n18,<br>\\n10,<br>\\n0,<br>\\n1,<br>\\n2,<br>\\n\\"CONTROL_NET\\"<br>\\n],<br>\\n[<br>\\n19,<br>\\n9,<br>\\n1,<br>\\n11,<br>\\n0,<br>\\n\\"INT\\"<br>\\n],<br>\\n[<br>\\n20,<br>\\n9,<br>\\n2,<br>\\n11,<br>\\n1,<br>\\n\\"INT\\"<br>\\n],<br>\\n[<br>\\n21,<br>\\n11,<br>\\n0,<br>\\n4,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n22,<br>\\n4,<br>\\n0,<br>\\n12,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n24,<br>\\n12,<br>\\n0,<br>\\n13,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n25,<br>\\n2,<br>\\n0,<br>\\n14,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n26,<br>\\n14,<br>\\n0,<br>\\n5,<br>\\n1,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n28,<br>\\n15,<br>\\n0,<br>\\n16,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n29,<br>\\n5,<br>\\n0,<br>\\n16,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n30,<br>\\n16,<br>\\n0,<br>\\n1,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n31,<br>\\n18,<br>\\n0,<br>\\n17,<br>\\n2,<br>\\n\\"CONTROL_NET\\"<br>\\n],<br>\\n[<br>\\n32,<br>\\n16,<br>\\n0,<br>\\n17,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n33,<br>\\n12,<br>\\n0,<br>\\n17,<br>\\n3,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n39,<br>\\n17,<br>\\n0,<br>\\n19,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n40,<br>\\n17,<br>\\n1,<br>\\n19,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n42,<br>\\n19,<br>\\n0,<br>\\n21,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n45,<br>\\n21,<br>\\n0,<br>\\n23,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n50,<br>\\n12,<br>\\n0,<br>\\n26,<br>\\n1,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n51,<br>\\n27,<br>\\n0,<br>\\n26,<br>\\n0,<br>\\n\\"UPSCALE_MODEL\\"<br>\\n],<br>\\n[<br>\\n52,<br>\\n26,<br>\\n0,<br>\\n28,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n53,<br>\\n28,<br>\\n0,<br>\\n29,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n57,<br>\\n8,<br>\\n0,<br>\\n17,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n76,<br>\\n29,<br>\\n0,<br>\\n19,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n83,<br>\\n3,<br>\\n1,<br>\\n49,<br>\\n0,<br>\\n\\"</em>\\"<br>\\n],<br>\\n[<br>\\n84,<br>\\n49,<br>\\n0,<br>\\n15,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n85,<br>\\n49,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n86,<br>\\n49,<br>\\n0,<br>\\n5,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n87,<br>\\n3,<br>\\n0,<br>\\n50,<br>\\n0,<br>\\n\\"<em>\\"<br>\\n],<br>\\n[<br>\\n88,<br>\\n50,<br>\\n0,<br>\\n4,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n89,<br>\\n50,<br>\\n0,<br>\\n19,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n90,<br>\\n3,<br>\\n2,<br>\\n51,<br>\\n0,<br>\\n\\"</em>\\"<br>\\n],<br>\\n[<br>\\n91,<br>\\n51,<br>\\n0,<br>\\n12,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n93,<br>\\n51,<br>\\n0,<br>\\n52,<br>\\n0,<br>\\n\\"*\\"<br>\\n],<br>\\n[<br>\\n94,<br>\\n52,<br>\\n0,<br>\\n29,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n95,<br>\\n52,<br>\\n0,<br>\\n21,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n96,<br>\\n21,<br>\\n0,<br>\\n54,<br>\\n1,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n97,<br>\\n2,<br>\\n0,<br>\\n54,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n]<br>\\n],<br>\\n\\"groups\\": [<br>\\n{<br>\\n\\"title\\": \\"放大（2倍）\\",<br>\\n\\"bounding\\": [<br>\\n1260,<br>\\n-40,<br>\\n770,<br>\\n930<br>\\n],<br>\\n\\"color\\": \\"#A88\\",<br>\\n\\"font_size\\": 24,<br>\\n\\"locked\\": false<br>\\n},<br>\\n{<br>\\n\\"title\\": \\"上色\\",<br>\\n\\"bounding\\": [<br>\\n180,<br>\\n-40,<br>\\n710,<br>\\n930<br>\\n],<br>\\n\\"color\\": \\"#8A8\\",<br>\\n\\"font_size\\": 24,<br>\\n\\"locked\\": false<br>\\n}<br>\\n],<br>\\n\\"config\\": {},<br>\\n\\"extra\\": {<br>\\n\\"0246.VERSION\\": [<br>\\n0,<br>\\n0,<br>\\n4<br>\\n],<br>\\n\\"ds\\": {<br>\\n\\"scale\\": 0.7247295000000004,<br>\\n\\"offset\\": [<br>\\n328.89475906140206,<br>\\n351.98824525233533<br>\\n]<br>\\n}<br>\\n},<br>\\n\\"version\\": 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第4课/进阶工作流2：老照片上色修复.json","value":{"title":"进阶工作流2：老照片上色修复.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第4课/进阶工作流2：老照片上色修复.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{d as comp,m as data};

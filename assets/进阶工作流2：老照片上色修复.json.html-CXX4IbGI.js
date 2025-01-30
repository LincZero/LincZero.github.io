import{_ as e,c as o,b as l,o as t,r as a}from"./app-CnU47LaV.js";const i={};function s(p,r){const n=a("VueFlow");return t(),o("div",null,[l(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const m=e(i,[["render",s],["__file","进阶工作流2：老照片上色修复.json.html.vue"]]),N=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC4%E8%AF%BE/%E8%BF%9B%E9%98%B6%E5%B7%A5%E4%BD%9C%E6%B5%812%EF%BC%9A%E8%80%81%E7%85%A7%E7%89%87%E4%B8%8A%E8%89%B2%E4%BF%AE%E5%A4%8D.json.html","title":"进阶工作流2：老照片上色修复.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 54, \\"last_link_id\\": 97, \\"nodes\\": [ { \\"id\\": 1, \\"type\\": \\"ControlNetApplyAdvanced\\", \\"pos\\": [ 200, 200 ], \\"size\\": { \\"0\\": 315, \\"1\\": 166 }, \\"flags\\": {}, \\"order\\": 18,...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC4%E8%AF%BE/%E8%BF%9B%E9%98%B6%E5%B7%A5%E4%BD%9C%E6%B5%812%EF%BC%9A%E8%80%81%E7%85%A7%E7%89%87%E4%B8%8A%E8%89%B2%E4%BF%AE%E5%A4%8D.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 54, \\"last_link_id\\": 97, \\"nodes\\": [ { \\"id\\": 1, \\"type\\": \\"ControlNetApplyAdvanced\\", \\"pos\\": [ 200, 200 ], \\"size\\": { \\"0\\": 315, \\"1\\": 166 }, \\"flags\\": {}, \\"order\\": 18,..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{},"readingTime":{"minutes":7.26,"words":2178},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第4课/进阶工作流2：老照片上色修复.json","excerpt":"<p>{\\n\\"last_node_id\\": 54,\\n\\"last_link_id\\": 97,\\n\\"nodes\\": [\\n{\\n\\"id\\": 1,\\n\\"type\\": \\"ControlNetApplyAdvanced\\",\\n\\"pos\\": [\\n200,\\n200\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 166\\n},\\n\\"flags\\": {},\\n\\"order\\": 18,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 30,\\n\\"label\\": \\"positive\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 15,\\n\\"label\\": \\"negative\\",\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"control_net\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"link\\": 18,\\n\\"label\\": \\"control_net\\",\\n\\"slot_index\\": 2\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 17,\\n\\"label\\": \\"image\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n10\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"positive\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n11\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"negative\\",\\n\\"slot_index\\": 1\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetApplyAdvanced\\"\\n},\\n\\"widgets_values\\": [\\n1,\\n0,\\n1\\n],\\n\\"color\\": \\"#232\\",\\n\\"bgcolor\\": \\"#353\\"\\n},\\n{\\n\\"id\\": 17,\\n\\"type\\": \\"ControlNetApplyAdvanced\\",\\n\\"pos\\": [\\n1310,\\n210\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 166\\n},\\n\\"flags\\": {},\\n\\"order\\": 22,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 32,\\n\\"label\\": \\"positive\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 57,\\n\\"label\\": \\"negative\\",\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"control_net\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"link\\": 31,\\n\\"label\\": \\"control_net\\",\\n\\"slot_index\\": 2\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 33,\\n\\"label\\": \\"image\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n39\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"positive\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n40\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"negative\\",\\n\\"slot_index\\": 1\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetApplyAdvanced\\"\\n},\\n\\"widgets_values\\": [\\n1,\\n0,\\n1\\n],\\n\\"color\\": \\"#322\\",\\n\\"bgcolor\\": \\"#533\\"\\n},\\n{\\n\\"id\\": 11,\\n\\"type\\": \\"EmptyLatentImage\\",\\n\\"pos\\": [\\n200,\\n410\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 106\\n},\\n\\"flags\\": {},\\n\\"order\\": 12,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"width\\",\\n\\"type\\": \\"INT\\",\\n\\"link\\": 19,\\n\\"widget\\": {\\n\\"name\\": \\"width\\"\\n},\\n\\"label\\": \\"width\\"\\n},\\n{\\n\\"name\\": \\"height\\",\\n\\"type\\": \\"INT\\",\\n\\"link\\": 20,\\n\\"widget\\": {\\n\\"name\\": \\"height\\"\\n},\\n\\"label\\": \\"height\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n21\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"LATENT\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"EmptyLatentImage\\"\\n},\\n\\"widgets_values\\": [\\n512,\\n512,\\n1\\n],\\n\\"color\\": \\"#232\\",\\n\\"bgcolor\\": \\"#353\\"\\n},\\n{\\n\\"id\\": 14,\\n\\"type\\": \\"WD14Tagger|pysssss\\",\\n\\"pos\\": [\\n-310,\\n0\\n],\\n\\"size\\": {\\n\\"0\\": 309.3223876953125,\\n\\"1\\": 251.5987091064453\\n},\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 25,\\n\\"label\\": \\"image\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"STRING\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n26\\n],\\n\\"shape\\": 6,\\n\\"label\\": \\"STRING\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"WD14Tagger|pysssss\\"\\n},\\n\\"widgets_values\\": [\\n\\"wd-v1-4-moat-tagger-v2\\",\\n0.2,\\n0.85,\\nfalse,\\nfalse,\\n\\"black and white, greyscale, monochrome\\"\\n],\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 7,\\n\\"type\\": \\"AutoNegativePrompt\\",\\n\\"pos\\": [\\n-310,\\n50\\n],\\n\\"size\\": {\\n\\"0\\": 310,\\n\\"1\\": 246\\n},\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"negative_prompt\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n12\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"negative_prompt\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"AutoNegativePrompt\\"\\n},\\n\\"widgets_values\\": [\\n\\"\\",\\n\\"text, watermark, embedding:UnrealisticDream, embedding:ng_deepnegative_v1_75t, \\",\\n1,\\n0,\\n\\"SD1.5\\",\\n968111180811125,\\n\\"randomize\\"\\n],\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 9,\\n\\"type\\": \\"ImageResizeKJ\\",\\n\\"pos\\": [\\n-310,\\n480\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 242\\n},\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 16,\\n\\"label\\": \\"image\\"\\n},\\n{\\n\\"name\\": \\"get_image_size\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": null,\\n\\"label\\": \\"get_image_size\\"\\n},\\n{\\n\\"name\\": \\"width_input\\",\\n\\"type\\": \\"INT\\",\\n\\"link\\": null,\\n\\"widget\\": {\\n\\"name\\": \\"width_input\\"\\n},\\n\\"label\\": \\"width_input\\"\\n},\\n{\\n\\"name\\": \\"height_input\\",\\n\\"type\\": \\"INT\\",\\n\\"link\\": null,\\n\\"widget\\": {\\n\\"name\\": \\"height_input\\"\\n},\\n\\"label\\": \\"height_input\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n17\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"IMAGE\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"width\\",\\n\\"type\\": \\"INT\\",\\n\\"links\\": [\\n19\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"width\\",\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"height\\",\\n\\"type\\": \\"INT\\",\\n\\"links\\": [\\n20\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"height\\",\\n\\"slot_index\\": 2\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ImageResizeKJ\\"\\n},\\n\\"widgets_values\\": [\\n768,\\n768,\\n\\"nearest-exact\\",\\ntrue,\\n2,\\n0,\\n0\\n],\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 4,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": [\\n550,\\n100\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 474\\n},\\n\\"flags\\": {},\\n\\"order\\": 19,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 88,\\n\\"label\\": \\"model\\"\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 10,\\n\\"label\\": \\"positive\\"\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 11,\\n\\"label\\": \\"negative\\"\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 21,\\n\\"label\\": \\"latent_image\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n22\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"LATENT\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n459071015414184,\\n\\"fixed\\",\\n20,\\n8,\\n\\"euler\\",\\n\\"normal\\",\\n1\\n],\\n\\"color\\": \\"#232\\",\\n\\"bgcolor\\": \\"#353\\"\\n},\\n{\\n\\"id\\": 49,\\n\\"type\\": \\"Reroute\\",\\n\\"pos\\": [\\n-270,\\n70\\n],\\n\\"size\\": [\\n75,\\n26\\n],\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"<em>\\",\\n\\"link\\": 83,\\n\\"label\\": \\"\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n84,\\n85,\\n86\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"\\"\\n}\\n],\\n\\"properties\\": {\\n\\"showOutputText\\": false,\\n\\"horizontal\\": false\\n},\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 5,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n-130,\\n50\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 54\\n},\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 15,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 86,\\n\\"label\\": \\"clip\\"\\n},\\n{\\n\\"name\\": \\"text\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 26,\\n\\"widget\\": {\\n\\"name\\": \\"text\\"\\n},\\n\\"label\\": \\"text\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n29\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"CONDITIONING\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"1GIRL, BEST QUALITY, MASTERPIECE\\"\\n],\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 15,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n-130,\\n0\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 120\\n},\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 13,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 84,\\n\\"label\\": \\"clip\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n28\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"CONDITIONING\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"best quality, masterpiece, colorful, colorized, cinematic lighting, photograph, photorealistic, outdoors,\\"\\n],\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n-130,\\n100\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 54\\n},\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 14,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 85,\\n\\"label\\": \\"clip\\"\\n},\\n{\\n\\"name\\": \\"text\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 12,\\n\\"widget\\": {\\n\\"name\\": \\"text\\"\\n},\\n\\"label\\": \\"text\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n15,\\n57\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"CONDITIONING\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"1GIRL, BEST QUALITY, MASTERPIECE\\"\\n],\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 18,\\n\\"type\\": \\"ControlNetLoader\\",\\n\\"pos\\": [\\n1310,\\n100\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONTROL_NET\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"links\\": [\\n31\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"CONTROL_NET\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"control_v11f1e_sd15_tile.pth\\"\\n],\\n\\"color\\": \\"#322\\",\\n\\"bgcolor\\": \\"#533\\"\\n},\\n{\\n\\"id\\": 27,\\n\\"type\\": \\"UpscaleModelLoader\\",\\n\\"pos\\": [\\n1330,\\n840\\n],\\n\\"size\\": {\\n\\"0\\": 270,\\n\\"1\\": 80\\n},\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"UPSCALE_MODEL\\",\\n\\"type\\": \\"UPSCALE_MODEL\\",\\n\\"links\\": [\\n51\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"UPSCALE_MODEL\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"UpscaleModelLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"RealESRGAN_x4plus.pth\\"\\n],\\n\\"color\\": \\"#322\\",\\n\\"bgcolor\\": \\"#533\\"\\n},\\n{\\n\\"id\\": 26,\\n\\"type\\": \\"ImageUpscaleWithModel\\",\\n\\"pos\\": [\\n1490,\\n840\\n],\\n\\"size\\": {\\n\\"0\\": 226.8000030517578,\\n\\"1\\": 80\\n},\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 23,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"upscale_model\\",\\n\\"type\\": \\"UPSCALE_MODEL\\",\\n\\"link\\": 51,\\n\\"label\\": \\"upscale_model\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 50,\\n\\"label\\": \\"image\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n52\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"IMAGE\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ImageUpscaleWithModel\\"\\n},\\n\\"color\\": \\"#322\\",\\n\\"bgcolor\\": \\"#533\\"\\n},\\n{\\n\\"id\\": 28,\\n\\"type\\": \\"ImageScaleBy\\",\\n\\"pos\\": [\\n1670,\\n840\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 82\\n},\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 24,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 52,\\n\\"label\\": \\"image\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n53\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"IMAGE\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ImageScaleBy\\"\\n},\\n\\"widgets_values\\": [\\n\\"area\\",\\n0.5\\n],\\n\\"color\\": \\"#322\\",\\n\\"bgcolor\\": \\"#533\\"\\n},\\n{\\n\\"id\\": 19,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": [\\n1660,\\n100\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 474\\n},\\n\\"flags\\": {},\\n\\"order\\": 26,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 89,\\n\\"label\\": \\"model\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 39,\\n\\"label\\": \\"positive\\"\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 40,\\n\\"label\\": \\"negative\\"\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 76,\\n\\"label\\": \\"latent_image\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n42\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"LATENT\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n714309705341971,\\n\\"randomize\\",\\n15,\\n8,\\n\\"euler\\",\\n\\"normal\\",\\n0.33\\n],\\n\\"color\\": \\"#322\\",\\n\\"bgcolor\\": \\"#533\\"\\n},\\n{\\n\\"id\\": 52,\\n\\"type\\": \\"Reroute\\",\\n\\"pos\\": [\\n1560,\\n760\\n],\\n\\"size\\": [\\n75,\\n26\\n],\\n\\"flags\\": {},\\n\\"order\\": 16,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"</em>\\",\\n\\"link\\": 93,\\n\\"label\\": \\"\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n94,\\n95\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"\\"\\n}\\n],\\n\\"properties\\": {\\n\\"showOutputText\\": false,\\n\\"horizontal\\": false\\n},\\n\\"color\\": \\"#322\\",\\n\\"bgcolor\\": \\"#533\\"\\n},\\n{\\n\\"id\\": 13,\\n\\"type\\": \\"SaveImage\\",\\n\\"pos\\": [\\n920,\\n200\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 270\\n},\\n\\"flags\\": {},\\n\\"order\\": 21,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 24,\\n\\"label\\": \\"images\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"SaveImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\"\\n],\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 12,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": [\\n920,\\n110\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 20,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 22,\\n\\"label\\": \\"samples\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 91,\\n\\"label\\": \\"vae\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n24,\\n33,\\n50\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"IMAGE\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n},\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 50,\\n\\"type\\": \\"Reroute\\",\\n\\"pos\\": [\\n430,\\n30\\n],\\n\\"size\\": [\\n75,\\n26\\n],\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"<em>\\",\\n\\"link\\": 87,\\n\\"label\\": \\"\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n88,\\n89\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"\\"\\n}\\n],\\n\\"properties\\": {\\n\\"showOutputText\\": false,\\n\\"horizontal\\": false\\n},\\n\\"color\\": \\"#232\\",\\n\\"bgcolor\\": \\"#353\\"\\n},\\n{\\n\\"id\\": 51,\\n\\"type\\": \\"Reroute\\",\\n\\"pos\\": [\\n440,\\n530\\n],\\n\\"size\\": [\\n75,\\n26\\n],\\n\\"flags\\": {},\\n\\"order\\": 11,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"</em>\\",\\n\\"link\\": 90,\\n\\"label\\": \\"\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n91,\\n93\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"\\"\\n}\\n],\\n\\"properties\\": {\\n\\"showOutputText\\": false,\\n\\"horizontal\\": false\\n},\\n\\"color\\": \\"#232\\",\\n\\"bgcolor\\": \\"#353\\"\\n},\\n{\\n\\"id\\": 16,\\n\\"type\\": \\"ConditioningCombine\\",\\n\\"pos\\": [\\n40,\\n50\\n],\\n\\"size\\": {\\n\\"0\\": 184.8000030517578,\\n\\"1\\": 50\\n},\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 17,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"conditioning_1\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 28,\\n\\"label\\": \\"conditioning_1\\"\\n},\\n{\\n\\"name\\": \\"conditioning_2\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 29,\\n\\"label\\": \\"conditioning_2\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n30,\\n32\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"CONDITIONING\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ConditioningCombine\\"\\n},\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 10,\\n\\"type\\": \\"ControlNetLoader\\",\\n\\"pos\\": [\\n200,\\n100\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONTROL_NET\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"links\\": [\\n18\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"CONTROL_NET\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"ioclab_sd15_recolor.safetensors\\"\\n],\\n\\"color\\": \\"#232\\",\\n\\"bgcolor\\": \\"#353\\"\\n},\\n{\\n\\"id\\": 23,\\n\\"type\\": \\"SaveImage\\",\\n\\"pos\\": [\\n2070,\\n190\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 270\\n},\\n\\"flags\\": {},\\n\\"order\\": 28,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 45,\\n\\"label\\": \\"images\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"SaveImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\"\\n],\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 29,\\n\\"type\\": \\"VAEEncode\\",\\n\\"pos\\": [\\n1860,\\n940\\n],\\n\\"size\\": {\\n\\"0\\": 180,\\n\\"1\\": 80\\n},\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 25,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"pixels\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 53,\\n\\"label\\": \\"pixels\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 94,\\n\\"label\\": \\"vae\\",\\n\\"slot_index\\": 1\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n76\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"LATENT\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEEncode\\"\\n},\\n\\"color\\": \\"#322\\",\\n\\"bgcolor\\": \\"#533\\"\\n},\\n{\\n\\"id\\": 53,\\n\\"type\\": \\"Fast Groups Bypasser (rgthree)\\",\\n\\"pos\\": {\\n\\"0\\": 840,\\n\\"1\\": -160,\\n\\"2\\": 0,\\n\\"3\\": 0,\\n\\"4\\": 0,\\n\\"5\\": 0,\\n\\"6\\": 0,\\n\\"7\\": 0,\\n\\"8\\": 0,\\n\\"9\\": 0\\n},\\n\\"size\\": {\\n\\"0\\": 457.0672607421875,\\n\\"1\\": 98.67208099365234\\n},\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"OPT_CONNECTION\\",\\n\\"type\\": \\"<em>\\",\\n\\"links\\": null,\\n\\"label\\": \\"OPT_CONNECTION\\"\\n}\\n],\\n\\"properties\\": {\\n\\"matchColors\\": \\"\\",\\n\\"matchTitle\\": \\"\\",\\n\\"showNav\\": true,\\n\\"sort\\": \\"position\\",\\n\\"customSortAlphabet\\": \\"\\",\\n\\"toggleRestriction\\": \\"default\\"\\n},\\n\\"color\\": \\"#432\\",\\n\\"bgcolor\\": \\"#653\\"\\n},\\n{\\n\\"id\\": 54,\\n\\"type\\": \\"Image Comparer (rgthree)\\",\\n\\"pos\\": {\\n\\"0\\": 2420,\\n\\"1\\": -30,\\n\\"2\\": 0,\\n\\"3\\": 0,\\n\\"4\\": 0,\\n\\"5\\": 0,\\n\\"6\\": 0,\\n\\"7\\": 0,\\n\\"8\\": 0,\\n\\"9\\": 0\\n},\\n\\"size\\": {\\n\\"0\\": 910,\\n\\"1\\": 950\\n},\\n\\"flags\\": {},\\n\\"order\\": 29,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image_a\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 97,\\n\\"label\\": \\"image_a\\",\\n\\"dir\\": 3\\n},\\n{\\n\\"name\\": \\"image_b\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 96,\\n\\"label\\": \\"image_b\\",\\n\\"dir\\": 3\\n}\\n],\\n\\"outputs\\": [],\\n\\"properties\\": {\\n\\"comparer_mode\\": \\"Slide\\"\\n},\\n\\"widgets_values\\": [\\n[\\n{\\n\\"name\\": \\"A\\",\\n\\"selected\\": true,\\n\\"url\\": \\"/view?filename=rgthree.compare.<em>temp_tivlt_00001</em>.png&amp;type=temp&amp;subfolder=&amp;rand=0.13926185914878286\\"\\n},\\n{\\n\\"name\\": \\"B\\",\\n\\"selected\\": true,\\n\\"url\\": \\"/view?filename=rgthree.compare.<em>temp_tivlt_00002</em>.png&amp;type=temp&amp;subfolder=&amp;rand=0.6941707574317217\\"\\n}\\n]\\n],\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 21,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": [\\n2070,\\n100\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 27,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 42,\\n\\"label\\": \\"samples\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 95,\\n\\"label\\": \\"vae\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n45,\\n96\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"IMAGE\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n},\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 2,\\n\\"type\\": \\"LoadImage\\",\\n\\"pos\\": [\\n-690,\\n310\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 314\\n},\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n16,\\n25,\\n97\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"IMAGE\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"MASK\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"02-1.jpg\\",\\n\\"image\\"\\n],\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n},\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": [\\n-690,\\n170\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n87\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"MODEL\\",\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n83\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"CLIP\\",\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n90\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"VAE\\",\\n\\"slot_index\\": 2\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"majicmixRealistic_v7.safetensors\\"\\n],\\n\\"color\\": \\"#222\\",\\n\\"bgcolor\\": \\"#000\\"\\n}\\n],\\n\\"links\\": [\\n[\\n10,\\n1,\\n0,\\n4,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n11,\\n1,\\n1,\\n4,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n12,\\n7,\\n0,\\n8,\\n1,\\n\\"STRING\\"\\n],\\n[\\n15,\\n8,\\n0,\\n1,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n16,\\n2,\\n0,\\n9,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n17,\\n9,\\n0,\\n1,\\n3,\\n\\"IMAGE\\"\\n],\\n[\\n18,\\n10,\\n0,\\n1,\\n2,\\n\\"CONTROL_NET\\"\\n],\\n[\\n19,\\n9,\\n1,\\n11,\\n0,\\n\\"INT\\"\\n],\\n[\\n20,\\n9,\\n2,\\n11,\\n1,\\n\\"INT\\"\\n],\\n[\\n21,\\n11,\\n0,\\n4,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n22,\\n4,\\n0,\\n12,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n24,\\n12,\\n0,\\n13,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n25,\\n2,\\n0,\\n14,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n26,\\n14,\\n0,\\n5,\\n1,\\n\\"STRING\\"\\n],\\n[\\n28,\\n15,\\n0,\\n16,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n29,\\n5,\\n0,\\n16,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n30,\\n16,\\n0,\\n1,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n31,\\n18,\\n0,\\n17,\\n2,\\n\\"CONTROL_NET\\"\\n],\\n[\\n32,\\n16,\\n0,\\n17,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n33,\\n12,\\n0,\\n17,\\n3,\\n\\"IMAGE\\"\\n],\\n[\\n39,\\n17,\\n0,\\n19,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n40,\\n17,\\n1,\\n19,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n42,\\n19,\\n0,\\n21,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n45,\\n21,\\n0,\\n23,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n50,\\n12,\\n0,\\n26,\\n1,\\n\\"IMAGE\\"\\n],\\n[\\n51,\\n27,\\n0,\\n26,\\n0,\\n\\"UPSCALE_MODEL\\"\\n],\\n[\\n52,\\n26,\\n0,\\n28,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n53,\\n28,\\n0,\\n29,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n57,\\n8,\\n0,\\n17,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n76,\\n29,\\n0,\\n19,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n83,\\n3,\\n1,\\n49,\\n0,\\n\\"</em>\\"\\n],\\n[\\n84,\\n49,\\n0,\\n15,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n85,\\n49,\\n0,\\n8,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n86,\\n49,\\n0,\\n5,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n87,\\n3,\\n0,\\n50,\\n0,\\n\\"<em>\\"\\n],\\n[\\n88,\\n50,\\n0,\\n4,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n89,\\n50,\\n0,\\n19,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n90,\\n3,\\n2,\\n51,\\n0,\\n\\"</em>\\"\\n],\\n[\\n91,\\n51,\\n0,\\n12,\\n1,\\n\\"VAE\\"\\n],\\n[\\n93,\\n51,\\n0,\\n52,\\n0,\\n\\"*\\"\\n],\\n[\\n94,\\n52,\\n0,\\n29,\\n1,\\n\\"VAE\\"\\n],\\n[\\n95,\\n52,\\n0,\\n21,\\n1,\\n\\"VAE\\"\\n],\\n[\\n96,\\n21,\\n0,\\n54,\\n1,\\n\\"IMAGE\\"\\n],\\n[\\n97,\\n2,\\n0,\\n54,\\n0,\\n\\"IMAGE\\"\\n]\\n],\\n\\"groups\\": [\\n{\\n\\"title\\": \\"放大（2倍）\\",\\n\\"bounding\\": [\\n1260,\\n-40,\\n770,\\n930\\n],\\n\\"color\\": \\"#A88\\",\\n\\"font_size\\": 24,\\n\\"locked\\": false\\n},\\n{\\n\\"title\\": \\"上色\\",\\n\\"bounding\\": [\\n180,\\n-40,\\n710,\\n930\\n],\\n\\"color\\": \\"#8A8\\",\\n\\"font_size\\": 24,\\n\\"locked\\": false\\n}\\n],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"0246.VERSION\\": [\\n0,\\n0,\\n4\\n],\\n\\"ds\\": {\\n\\"scale\\": 0.7247295000000004,\\n\\"offset\\": [\\n328.89475906140206,\\n351.98824525233533\\n]\\n}\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第4课/进阶工作流2：老照片上色修复.json","value":{"title":"进阶工作流2：老照片上色修复.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第4课/进阶工作流2：老照片上色修复.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{m as comp,N as data};

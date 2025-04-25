import{_ as r,e as b,h as e,r as t,o}from"./app-CggdqKg7.js";const l={};function s(a,i){const n=t("VueFlow");return o(),b("div",null,[e(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 168,
  "last_link_id": 284,
  "nodes": [
    {
      "id": 18,
      "type": "MarigoldDepthEstimation",
      "pos": [
        1347.6374127426923,
        114.30344941481799
      ],
      "size": [
        315,
        394
      ],
      "flags": {},
      "order": 18,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 279,
          "label": "image"
        }
      ],
      "outputs": [
        {
          "name": "ensembled_image",
          "type": "IMAGE",
          "links": [
            19,
            23
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "ensembled_image"
        }
      ],
      "properties": {
        "Node name for S&R": "MarigoldDepthEstimation"
      },
      "widgets_values": [
        995352869972963,
        "randomize",
        4,
        10,
        0.02,
        "median",
        5,
        0.001,
        true,
        true,
        2,
        true,
        "LCMScheduler",
        true,
        "marigold-lcm-v1-0"
      ]
    },
    {
      "id": 25,
      "type": "VAEEncode",
      "pos": {
        "0": 1780,
        "1": 400
      },
      "size": {
        "0": 310,
        "1": 50
      },
      "flags": {
        "collapsed": false
      },
      "order": 24,
      "mode": 0,
      "inputs": [
        {
          "name": "pixels",
          "type": "IMAGE",
          "link": 110,
          "label": "图像"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 272,
          "label": "VAE"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            111
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "Latent"
        }
      ],
      "properties": {
        "Node name for S&R": "VAEEncode"
      },
      "widgets_values": []
    },
    {
      "id": 16,
      "type": "ControlNetLoader",
      "pos": {
        "0": 1347.637451171875,
        "1": 564.303466796875
      },
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "CONTROL_NET",
          "type": "CONTROL_NET",
          "links": [
            20
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "ControlNet"
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetLoader"
      },
      "widgets_values": [
        "controllora256\\\\control-lora-depth-rank256.safetensors"
      ]
    },
    {
      "id": 15,
      "type": "ControlNetApply",
      "pos": {
        "0": 1347.637451171875,
        "1": 674.303466796875
      },
      "size": {
        "0": 317.4000244140625,
        "1": 98
      },
      "flags": {},
      "order": 26,
      "mode": 0,
      "inputs": [
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 21,
          "slot_index": 0,
          "label": "条件"
        },
        {
          "name": "control_net",
          "type": "CONTROL_NET",
          "link": 20,
          "slot_index": 1,
          "label": "ControlNet"
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 19,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            24
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetApply"
      },
      "widgets_values": [
        0.8
      ]
    },
    {
      "id": 20,
      "type": "PreviewImage",
      "pos": {
        "0": 1357.637451171875,
        "1": 824.303466796875
      },
      "size": {
        "0": 310,
        "1": 250
      },
      "flags": {},
      "order": 23,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 23,
          "label": "图像"
        }
      ],
      "outputs": [],
      "properties": {
        "Node name for S&R": "PreviewImage"
      },
      "widgets_values": []
    },
    {
      "id": 19,
      "type": "PreviewImage",
      "pos": {
        "0": 1017.6373901367188,
        "1": 824.303466796875
      },
      "size": {
        "0": 300,
        "1": 250
      },
      "flags": {},
      "order": 22,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 118,
          "label": "图像"
        }
      ],
      "outputs": [],
      "properties": {
        "Node name for S&R": "PreviewImage"
      },
      "widgets_values": []
    },
    {
      "id": 152,
      "type": "Text _O",
      "pos": [
        424.4658621011265,
        103.75643180321805
      ],
      "size": [
        210,
        80
      ],
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "STRING",
          "type": "STRING",
          "links": [
            257
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "STRING"
        }
      ],
      "properties": {
        "Node name for S&R": "Text _O"
      },
      "widgets_values": [
        "american Shorthair"
      ],
      "title": "Text_1"
    },
    {
      "id": 123,
      "type": "PreviewImage",
      "pos": {
        "0": 1010,
        "1": -560
      },
      "size": {
        "0": 490,
        "1": 530
      },
      "flags": {},
      "order": 31,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 283,
          "label": "图像"
        }
      ],
      "outputs": [],
      "properties": {
        "Node name for S&R": "PreviewImage"
      },
      "widgets_values": []
    },
    {
      "id": 1,
      "type": "CheckpointLoaderSimple",
      "pos": {
        "0": 51.86028289794922,
        "1": 115.81229400634766
      },
      "size": {
        "0": 320,
        "1": 100
      },
      "flags": {},
      "order": 2,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            252
          ],
          "slot_index": 0,
          "label": "模型"
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            253
          ],
          "slot_index": 1,
          "label": "CLIP"
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            270
          ],
          "slot_index": 2,
          "label": "VAE"
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimple"
      },
      "widgets_values": [
        "SDXL\\\\dreamshaperXL_v21TurboDPMSDE.safetensors"
      ]
    },
    {
      "id": 162,
      "type": "Reroute",
      "pos": {
        "0": 400,
        "1": -10
      },
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
          "link": 270
        }
      ],
      "outputs": [
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            271
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "showOutputText": true,
        "horizontal": false
      }
    },
    {
      "id": 154,
      "type": "LoraLoader",
      "pos": {
        "0": 51.86028289794922,
        "1": 285.8122863769531
      },
      "size": {
        "0": 315,
        "1": 126
      },
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 252,
          "label": "模型"
        },
        {
          "name": "clip",
          "type": "CLIP",
          "link": 253,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            274
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "模型"
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            243,
            244
          ],
          "slot_index": 1,
          "shape": 3,
          "label": "CLIP"
        }
      ],
      "properties": {
        "Node name for S&R": "LoraLoader"
      },
      "widgets_values": [
        "StudioGhibli.Redmond-STDGBREDMAF.safetensors",
        0.6,
        1
      ]
    },
    {
      "id": 164,
      "type": "Reroute",
      "pos": {
        "0": 490,
        "1": -10
      },
      "size": [
        82,
        26
      ],
      "flags": {},
      "order": 13,
      "mode": 0,
      "inputs": [
        {
          "name": "",
          "type": "*",
          "link": 274
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            275
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "showOutputText": true,
        "horizontal": false
      }
    },
    {
      "id": 156,
      "type": "ConcatText_Zho",
      "pos": [
        745.1003863878493,
        131.07336710338762
      ],
      "size": [
        210,
        65.9999771118164
      ],
      "flags": {
        "collapsed": true
      },
      "order": 11,
      "mode": 0,
      "inputs": [
        {
          "name": "text_1",
          "type": "STRING",
          "link": 257,
          "widget": {
            "name": "text_1"
          },
          "label": "text_1"
        },
        {
          "name": "text_2",
          "type": "STRING",
          "link": 258,
          "widget": {
            "name": "text_2"
          },
          "label": "text_2"
        }
      ],
      "outputs": [
        {
          "name": "text",
          "type": "STRING",
          "links": [
            254
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "text"
        }
      ],
      "properties": {
        "Node name for S&R": "ConcatText_Zho"
      },
      "widgets_values": [
        "",
        ""
      ]
    },
    {
      "id": 159,
      "type": "ConcatText_Zho",
      "pos": [
        745.1003863878493,
        241.07336710338762
      ],
      "size": [
        210,
        54
      ],
      "flags": {
        "collapsed": true
      },
      "order": 16,
      "mode": 0,
      "inputs": [
        {
          "name": "text_1",
          "type": "STRING",
          "link": 254,
          "widget": {
            "name": "text_1"
          },
          "label": "text_1"
        },
        {
          "name": "text_2",
          "type": "STRING",
          "link": 259,
          "widget": {
            "name": "text_2"
          },
          "label": "text_2"
        }
      ],
      "outputs": [
        {
          "name": "text",
          "type": "STRING",
          "links": [
            260
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "text"
        }
      ],
      "properties": {
        "Node name for S&R": "ConcatText_Zho"
      },
      "widgets_values": [
        "",
        ""
      ]
    },
    {
      "id": 157,
      "type": "Text _O",
      "pos": [
        425.1003863878501,
        541.0733671033877
      ],
      "size": [
        210,
        75.99999237060547
      ],
      "flags": {},
      "order": 3,
      "mode": 0,
      "outputs": [
        {
          "name": "STRING",
          "type": "STRING",
          "links": [
            259
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "STRING"
        }
      ],
      "properties": {
        "Node name for S&R": "Text _O"
      },
      "widgets_values": [
        "StdGBRedmAF,Studio Ghibli,"
      ],
      "title": "Text _2"
    },
    {
      "id": 4,
      "type": "CLIPTextEncode",
      "pos": {
        "0": 725.1004028320312,
        "1": 401.0733642578125
      },
      "size": {
        "0": 210,
        "1": 54
      },
      "flags": {
        "collapsed": false
      },
      "order": 14,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 244,
          "label": "CLIP"
        },
        {
          "name": "text",
          "type": "STRING",
          "link": 261,
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
            109
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        ""
      ]
    },
    {
      "id": 160,
      "type": "Text _O",
      "pos": [
        425.1003863878501,
        411.0733671033876
      ],
      "size": [
        210,
        76.00003814697266
      ],
      "flags": {},
      "order": 4,
      "mode": 0,
      "outputs": [
        {
          "name": "STRING",
          "type": "STRING",
          "links": [
            261
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "STRING"
        }
      ],
      "properties": {
        "Node name for S&R": "Text _O"
      },
      "widgets_values": [
        "photo, deformed, black and white, realism, disfigured, low contrast"
      ],
      "color": "#322",
      "bgcolor": "#533"
    },
    {
      "id": 158,
      "type": "Text _O",
      "pos": [
        425.1003863878501,
        261.0733671033876
      ],
      "size": [
        210,
        100
      ],
      "flags": {},
      "order": 5,
      "mode": 0,
      "outputs": [
        {
          "name": "STRING",
          "type": "STRING",
          "links": [
            258
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "STRING"
        }
      ],
      "properties": {
        "Node name for S&R": "Text _O"
      },
      "widgets_values": [
        "no humans,animal focus, looking at viewer, anime artwork, anime style, key visual, vibrant, studio anime, highly detailed"
      ],
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 131,
      "type": "CLIPTextEncode",
      "pos": {
        "0": 730,
        "1": 300
      },
      "size": {
        "0": 210,
        "1": 54
      },
      "flags": {
        "collapsed": false
      },
      "order": 21,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 243,
          "label": "CLIP"
        },
        {
          "name": "text",
          "type": "STRING",
          "link": 260,
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
            209
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        ""
      ]
    },
    {
      "id": 71,
      "type": "CannyEdgePreprocessor",
      "pos": [
        1010,
        120
      ],
      "size": [
        315,
        106
      ],
      "flags": {},
      "order": 17,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 278,
          "label": "image"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            118,
            119
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "IMAGE"
        }
      ],
      "properties": {
        "Node name for S&R": "CannyEdgePreprocessor"
      },
      "widgets_values": [
        50,
        150,
        1024
      ]
    },
    {
      "id": 13,
      "type": "ControlNetLoader",
      "pos": {
        "0": 1020,
        "1": 570
      },
      "size": {
        "0": 300,
        "1": 60
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "CONTROL_NET",
          "type": "CONTROL_NET",
          "links": [
            16
          ],
          "shape": 3,
          "label": "ControlNet"
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetLoader"
      },
      "widgets_values": [
        "controllora256\\\\control-lora-canny-rank256.safetensors"
      ]
    },
    {
      "id": 12,
      "type": "ControlNetApply",
      "pos": {
        "0": 1020,
        "1": 680
      },
      "size": {
        "0": 300,
        "1": 100
      },
      "flags": {},
      "order": 25,
      "mode": 0,
      "inputs": [
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 209,
          "slot_index": 0,
          "label": "条件"
        },
        {
          "name": "control_net",
          "type": "CONTROL_NET",
          "link": 16,
          "slot_index": 1,
          "label": "ControlNet"
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 119,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            21
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetApply"
      },
      "widgets_values": [
        0.8
      ]
    },
    {
      "id": 3,
      "type": "LoadImage",
      "pos": {
        "0": 494.5950012207031,
        "1": -596.682373046875
      },
      "size": {
        "0": 480,
        "1": 570
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            277
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "图像"
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
        "cat1.jpg",
        "image"
      ]
    },
    {
      "id": 166,
      "type": "Reroute",
      "pos": {
        "0": 1060,
        "1": -10
      },
      "size": [
        75,
        26
      ],
      "flags": {},
      "order": 12,
      "mode": 0,
      "inputs": [
        {
          "name": "",
          "type": "*",
          "link": 277
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "IMAGE",
          "links": [
            278,
            279,
            280
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "showOutputText": false,
        "horizontal": false
      }
    },
    {
      "id": 21,
      "type": "KSampler",
      "pos": {
        "0": 1780,
        "1": 510
      },
      "size": {
        "0": 320,
        "1": 470
      },
      "flags": {},
      "order": 27,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 276,
          "label": "模型"
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 24,
          "label": "正面条件"
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 109,
          "label": "负面条件"
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 111,
          "label": "Latent"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            31
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "Latent"
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        358881677137626,
        "randomize",
        20,
        7,
        "dpmpp_2m_sde",
        "karras",
        0.7000000000000001
      ]
    },
    {
      "id": 70,
      "type": "ImageScaleToTotalPixels",
      "pos": {
        "0": 1790,
        "1": 250
      },
      "size": {
        "0": 310,
        "1": 82
      },
      "flags": {
        "collapsed": false
      },
      "order": 19,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 280,
          "slot_index": 0,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            110
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "图像"
        }
      ],
      "properties": {
        "Node name for S&R": "ImageScaleToTotalPixels"
      },
      "widgets_values": [
        "lanczos",
        1
      ]
    },
    {
      "id": 27,
      "type": "VAEDecode",
      "pos": {
        "0": 1790,
        "1": 130
      },
      "size": {
        "0": 300,
        "1": 50
      },
      "flags": {
        "collapsed": false
      },
      "order": 28,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 31,
          "label": "Latent"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 273,
          "label": "VAE"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            281
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "图像"
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      },
      "widgets_values": []
    },
    {
      "id": 168,
      "type": "Reroute",
      "pos": {
        "0": 950,
        "1": -10
      },
      "size": [
        75,
        26
      ],
      "flags": {},
      "order": 30,
      "mode": 0,
      "inputs": [
        {
          "name": "",
          "type": "*",
          "link": 284
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "IMAGE",
          "links": [
            283
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "showOutputText": false,
        "horizontal": false
      }
    },
    {
      "id": 167,
      "type": "Reroute",
      "pos": {
        "0": 2060,
        "1": -10
      },
      "size": [
        75,
        26
      ],
      "flags": {},
      "order": 29,
      "mode": 0,
      "inputs": [
        {
          "name": "",
          "type": "*",
          "link": 281
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "IMAGE",
          "links": [
            284
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "showOutputText": false,
        "horizontal": false
      }
    },
    {
      "id": 165,
      "type": "Reroute",
      "pos": {
        "0": 1580,
        "1": -10
      },
      "size": [
        82,
        26
      ],
      "flags": {},
      "order": 20,
      "mode": 0,
      "inputs": [
        {
          "name": "",
          "type": "*",
          "link": 275
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            276
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "showOutputText": true,
        "horizontal": false
      }
    },
    {
      "id": 163,
      "type": "Reroute",
      "pos": {
        "0": 1680,
        "1": -10
      },
      "size": [
        75,
        26
      ],
      "flags": {},
      "order": 15,
      "mode": 0,
      "inputs": [
        {
          "name": "",
          "type": "*",
          "link": 271
        }
      ],
      "outputs": [
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            272,
            273
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "showOutputText": true,
        "horizontal": false
      }
    },
    {
      "id": 153,
      "type": "Note",
      "pos": {
        "0": 20,
        "1": -320
      },
      "size": {
        "0": 370,
        "1": 300
      },
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [],
      "outputs": [],
      "properties": {
        "text": ""
      },
      "widgets_values": [
        "Text1：\\nAdding the typename of animal helps to improve accuracy, such as:\\nbritish Shorthair\\namerican Shorthair\\nYorkshire Terrier\\n\\nText2：\\nAdd Lora trigger\\n\\nCheckpoint：\\nhttps://civitai.com/models/112902?modelVersionId=351306\\n\\nLora：\\nhttps://civitai.com/models/137562/studioghibliredmond-studio-ghibli-lora-for-sd-xl\\n\\nYou can change the Checkpoint and lora to get more new creative!\\n\\nany question let's wechat:78809161\\n"
      ],
      "color": "#432",
      "bgcolor": "#653"
    }
  ],
  "links": [
    [
      16,
      13,
      0,
      12,
      1,
      "CONTROL_NET"
    ],
    [
      19,
      18,
      0,
      15,
      2,
      "IMAGE"
    ],
    [
      20,
      16,
      0,
      15,
      1,
      "CONTROL_NET"
    ],
    [
      21,
      12,
      0,
      15,
      0,
      "CONDITIONING"
    ],
    [
      23,
      18,
      0,
      20,
      0,
      "IMAGE"
    ],
    [
      24,
      15,
      0,
      21,
      1,
      "CONDITIONING"
    ],
    [
      31,
      21,
      0,
      27,
      0,
      "LATENT"
    ],
    [
      74,
      1,
      1,
      2,
      0,
      "CLIP"
    ],
    [
      75,
      10,
      0,
      18,
      0,
      "IMAGE"
    ],
    [
      76,
      10,
      0,
      17,
      0,
      "IMAGE"
    ],
    [
      77,
      1,
      2,
      27,
      1,
      "VAE"
    ],
    [
      78,
      1,
      1,
      29,
      0,
      "CLIP"
    ],
    [
      79,
      1,
      0,
      43,
      0,
      "MODEL"
    ],
    [
      80,
      4,
      0,
      43,
      2,
      "CONDITIONING"
    ],
    [
      81,
      25,
      0,
      43,
      3,
      "LATENT"
    ],
    [
      82,
      10,
      0,
      39,
      0,
      "IMAGE"
    ],
    [
      83,
      1,
      2,
      44,
      1,
      "VAE"
    ],
    [
      84,
      10,
      0,
      47,
      0,
      "IMAGE"
    ],
    [
      85,
      1,
      0,
      21,
      0,
      "MODEL"
    ],
    [
      86,
      4,
      0,
      21,
      2,
      "CONDITIONING"
    ],
    [
      87,
      25,
      0,
      21,
      3,
      "LATENT"
    ],
    [
      88,
      1,
      1,
      4,
      0,
      "CLIP"
    ],
    [
      89,
      1,
      1,
      52,
      0,
      "CLIP"
    ],
    [
      90,
      10,
      0,
      60,
      0,
      "IMAGE"
    ],
    [
      91,
      1,
      0,
      63,
      0,
      "MODEL"
    ],
    [
      92,
      4,
      0,
      63,
      2,
      "CONDITIONING"
    ],
    [
      93,
      25,
      0,
      63,
      3,
      "LATENT"
    ],
    [
      94,
      10,
      0,
      67,
      0,
      "IMAGE"
    ],
    [
      95,
      10,
      0,
      50,
      1,
      "IMAGE"
    ],
    [
      96,
      1,
      2,
      25,
      1,
      "VAE"
    ],
    [
      97,
      10,
      0,
      7,
      0,
      "IMAGE"
    ],
    [
      98,
      10,
      0,
      45,
      0,
      "IMAGE"
    ],
    [
      99,
      1,
      2,
      64,
      1,
      "VAE"
    ],
    [
      100,
      1,
      1,
      6,
      0,
      "CLIP"
    ],
    [
      101,
      1,
      1,
      32,
      0,
      "CLIP"
    ],
    [
      102,
      1,
      1,
      54,
      0,
      "CLIP"
    ],
    [
      109,
      4,
      0,
      21,
      2,
      "CONDITIONING"
    ],
    [
      110,
      70,
      0,
      25,
      0,
      "IMAGE"
    ],
    [
      111,
      25,
      0,
      21,
      3,
      "LATENT"
    ],
    [
      118,
      71,
      0,
      19,
      0,
      "IMAGE"
    ],
    [
      119,
      71,
      0,
      12,
      2,
      "IMAGE"
    ],
    [
      209,
      131,
      0,
      12,
      0,
      "CONDITIONING"
    ],
    [
      243,
      154,
      1,
      131,
      0,
      "CLIP"
    ],
    [
      244,
      154,
      1,
      4,
      0,
      "CLIP"
    ],
    [
      252,
      1,
      0,
      154,
      0,
      "MODEL"
    ],
    [
      253,
      1,
      1,
      154,
      1,
      "CLIP"
    ],
    [
      254,
      156,
      0,
      159,
      0,
      "STRING"
    ],
    [
      257,
      152,
      0,
      156,
      0,
      "STRING"
    ],
    [
      258,
      158,
      0,
      156,
      1,
      "STRING"
    ],
    [
      259,
      157,
      0,
      159,
      1,
      "STRING"
    ],
    [
      260,
      159,
      0,
      131,
      1,
      "STRING"
    ],
    [
      261,
      160,
      0,
      4,
      1,
      "STRING"
    ],
    [
      270,
      1,
      2,
      162,
      0,
      "*"
    ],
    [
      271,
      162,
      0,
      163,
      0,
      "*"
    ],
    [
      272,
      163,
      0,
      25,
      1,
      "VAE"
    ],
    [
      273,
      163,
      0,
      27,
      1,
      "VAE"
    ],
    [
      274,
      154,
      0,
      164,
      0,
      "*"
    ],
    [
      275,
      164,
      0,
      165,
      0,
      "*"
    ],
    [
      276,
      165,
      0,
      21,
      0,
      "MODEL"
    ],
    [
      277,
      3,
      0,
      166,
      0,
      "*"
    ],
    [
      278,
      166,
      0,
      71,
      0,
      "IMAGE"
    ],
    [
      279,
      166,
      0,
      18,
      0,
      "IMAGE"
    ],
    [
      280,
      166,
      0,
      70,
      0,
      "IMAGE"
    ],
    [
      281,
      27,
      0,
      167,
      0,
      "*"
    ],
    [
      283,
      168,
      0,
      123,
      0,
      "IMAGE"
    ],
    [
      284,
      167,
      0,
      168,
      0,
      "*"
    ]
  ],
  "groups": [
    {
      "title": "Prompt",
      "bounding": [
        416,
        20,
        548,
        602
      ],
      "color": "#3f789e",
      "font_size": 24,
      "flags": {}
    },
    {
      "title": "Chectpoint&LoRA",
      "bounding": [
        16,
        20,
        375,
        605
      ],
      "color": "#3f789e",
      "font_size": 24,
      "flags": {}
    },
    {
      "title": "Ksampler",
      "bounding": [
        1713,
        20,
        437,
        1075
      ],
      "color": "#3f789e",
      "font_size": 24,
      "flags": {}
    },
    {
      "title": "I/O",
      "bounding": [
        452,
        -683,
        1129,
        667
      ],
      "color": "#3f789e",
      "font_size": 24,
      "flags": {}
    },
    {
      "title": "controlnet",
      "bounding": [
        983,
        20,
        717,
        1073
      ],
      "color": "#3f789e",
      "font_size": 24,
      "flags": {}
    }
  ],
  "config": {},
  "extra": {
    "ds": {
      "scale": 0.620921323059155,
      "offset": [
        672.6848120841853,
        698.7132675632573
      ]
    }
  },
  "version": 0.4
}
`})])}const d=r(l,[["render",s],["__file","workflow-animal-2-anime-NoE7zH8tJ4KlrXbFr6AG-willling-openart.ai.json.html.vue"]]),m=JSON.parse(`{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Download/workflow-animal-2-anime-NoE7zH8tJ4KlrXbFr6AG-willling-openart.ai.json.html","title":"workflow-animal-2-anime-NoE7zH8tJ4KlrXbFr6AG-willling-openart.ai.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 168, \\"last_link_id\\": 284, \\"nodes\\": [ { \\"id\\": 18, \\"type\\": \\"MarigoldDepthEstimation\\", \\"pos\\": [ 1347.6374127426923, 114.30344941481799 ], \\"size\\": [ 315, 394 ], \\"f...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Download/workflow-animal-2-anime-NoE7zH8tJ4KlrXbFr6AG-willling-openart.ai.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 168, \\"last_link_id\\": 284, \\"nodes\\": [ { \\"id\\": 18, \\"type\\": \\"MarigoldDepthEstimation\\", \\"pos\\": [ 1347.6374127426923, 114.30344941481799 ], \\"size\\": [ 315, 394 ], \\"f..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"git":{},"readingTime":{"minutes":7.25,"words":2174},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Download/workflow-animal-2-anime-NoE7zH8tJ4KlrXbFr6AG-willling-openart.ai.json","excerpt":"<p>{<br>\\n\\"last_node_id\\": 168,<br>\\n\\"last_link_id\\": 284,<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": 18,<br>\\n\\"type\\": \\"MarigoldDepthEstimation\\",<br>\\n\\"pos\\": [<br>\\n1347.6374127426923,<br>\\n114.30344941481799<br>\\n],<br>\\n\\"size\\": [<br>\\n315,<br>\\n394<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 18,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 279,<br>\\n\\"label\\": \\"image\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"ensembled_image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n19,<br>\\n23<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"ensembled_image\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"MarigoldDepthEstimation\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n995352869972963,<br>\\n\\"randomize\\",<br>\\n4,<br>\\n10,<br>\\n0.02,<br>\\n\\"median\\",<br>\\n5,<br>\\n0.001,<br>\\ntrue,<br>\\ntrue,<br>\\n2,<br>\\ntrue,<br>\\n\\"LCMScheduler\\",<br>\\ntrue,<br>\\n\\"marigold-lcm-v1-0\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 25,<br>\\n\\"type\\": \\"VAEEncode\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 1780,<br>\\n\\"1\\": 400<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 310,<br>\\n\\"1\\": 50<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": false<br>\\n},<br>\\n\\"order\\": 24,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"pixels\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 110,<br>\\n\\"label\\": \\"图像\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 272,<br>\\n\\"label\\": \\"VAE\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n111<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"Latent\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": []<br>\\n},<br>\\n{<br>\\n\\"id\\": 16,<br>\\n\\"type\\": \\"ControlNetLoader\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 1347.637451171875,<br>\\n\\"1\\": 564.303466796875<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 58<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 0,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONTROL_NET\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"links\\": [<br>\\n20<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"ControlNet\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"controllora256\\\\control-lora-depth-rank256.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 15,<br>\\n\\"type\\": \\"ControlNetApply\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 1347.637451171875,<br>\\n\\"1\\": 674.303466796875<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 317.4000244140625,<br>\\n\\"1\\": 98<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 26,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"conditioning\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 21,<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"control_net\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"link\\": 20,<br>\\n\\"slot_index\\": 1,<br>\\n\\"label\\": \\"ControlNet\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 19,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n24<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetApply\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n0.8<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 20,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 1357.637451171875,<br>\\n\\"1\\": 824.303466796875<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 310,<br>\\n\\"1\\": 250<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 23,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 23,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n},<br>\\n\\"widgets_values\\": []<br>\\n},<br>\\n{<br>\\n\\"id\\": 19,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 1017.6373901367188,<br>\\n\\"1\\": 824.303466796875<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 300,<br>\\n\\"1\\": 250<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 22,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 118,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n},<br>\\n\\"widgets_values\\": []<br>\\n},<br>\\n{<br>\\n\\"id\\": 152,<br>\\n\\"type\\": \\"Text _O\\",<br>\\n\\"pos\\": [<br>\\n424.4658621011265,<br>\\n103.75643180321805<br>\\n],<br>\\n\\"size\\": [<br>\\n210,<br>\\n80<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 1,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"STRING\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n257<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"STRING\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"Text _O\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"american Shorthair\\"<br>\\n],<br>\\n\\"title\\": \\"Text_1\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 123,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 1010,<br>\\n\\"1\\": -560<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 490,<br>\\n\\"1\\": 530<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 31,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 283,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n},<br>\\n\\"widgets_values\\": []<br>\\n},<br>\\n{<br>\\n\\"id\\": 1,<br>\\n\\"type\\": \\"CheckpointLoaderSimple\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 51.86028289794922,<br>\\n\\"1\\": 115.81229400634766<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 320,<br>\\n\\"1\\": 100<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 2,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n252<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n253<br>\\n],<br>\\n\\"slot_index\\": 1,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n270<br>\\n],<br>\\n\\"slot_index\\": 2,<br>\\n\\"label\\": \\"VAE\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"SDXL\\\\dreamshaperXL_v21TurboDPMSDE.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 162,<br>\\n\\"type\\": \\"Reroute\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 400,<br>\\n\\"1\\": -10<br>\\n},<br>\\n\\"size\\": [<br>\\n75,<br>\\n26<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 10,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"<em>\\",<br>\\n\\"link\\": 270<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n271<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"showOutputText\\": true,<br>\\n\\"horizontal\\": false<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 154,<br>\\n\\"type\\": \\"LoraLoader\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 51.86028289794922,<br>\\n\\"1\\": 285.8122863769531<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 126<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 9,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 252,<br>\\n\\"label\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 253,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n274<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n243,<br>\\n244<br>\\n],<br>\\n\\"slot_index\\": 1,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LoraLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"StudioGhibli.Redmond-STDGBREDMAF.safetensors\\",<br>\\n0.6,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 164,<br>\\n\\"type\\": \\"Reroute\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 490,<br>\\n\\"1\\": -10<br>\\n},<br>\\n\\"size\\": [<br>\\n82,<br>\\n26<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 13,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"</em>\\",<br>\\n\\"link\\": 274<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n275<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"showOutputText\\": true,<br>\\n\\"horizontal\\": false<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 156,<br>\\n\\"type\\": \\"ConcatText_Zho\\",<br>\\n\\"pos\\": [<br>\\n745.1003863878493,<br>\\n131.07336710338762<br>\\n],<br>\\n\\"size\\": [<br>\\n210,<br>\\n65.9999771118164<br>\\n],<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 11,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"text_1\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 257,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text_1\\"<br>\\n},<br>\\n\\"label\\": \\"text_1\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"text_2\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 258,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text_2\\"<br>\\n},<br>\\n\\"label\\": \\"text_2\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"text\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n254<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"text\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ConcatText_Zho\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"\\",<br>\\n\\"\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 159,<br>\\n\\"type\\": \\"ConcatText_Zho\\",<br>\\n\\"pos\\": [<br>\\n745.1003863878493,<br>\\n241.07336710338762<br>\\n],<br>\\n\\"size\\": [<br>\\n210,<br>\\n54<br>\\n],<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 16,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"text_1\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 254,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text_1\\"<br>\\n},<br>\\n\\"label\\": \\"text_1\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"text_2\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 259,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text_2\\"<br>\\n},<br>\\n\\"label\\": \\"text_2\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"text\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n260<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"text\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ConcatText_Zho\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"\\",<br>\\n\\"\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 157,<br>\\n\\"type\\": \\"Text _O\\",<br>\\n\\"pos\\": [<br>\\n425.1003863878501,<br>\\n541.0733671033877<br>\\n],<br>\\n\\"size\\": [<br>\\n210,<br>\\n75.99999237060547<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"STRING\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n259<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"STRING\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"Text _O\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"StdGBRedmAF,Studio Ghibli,\\"<br>\\n],<br>\\n\\"title\\": \\"Text _2\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 4,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 725.1004028320312,<br>\\n\\"1\\": 401.0733642578125<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 54<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": false<br>\\n},<br>\\n\\"order\\": 14,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 244,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"text\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 261,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text\\"<br>\\n},<br>\\n\\"label\\": \\"文本\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n109<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 160,<br>\\n\\"type\\": \\"Text _O\\",<br>\\n\\"pos\\": [<br>\\n425.1003863878501,<br>\\n411.0733671033876<br>\\n],<br>\\n\\"size\\": [<br>\\n210,<br>\\n76.00003814697266<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"STRING\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n261<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"STRING\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"Text _O\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"photo, deformed, black and white, realism, disfigured, low contrast\\"<br>\\n],<br>\\n\\"color\\": \\"#322\\",<br>\\n\\"bgcolor\\": \\"#533\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 158,<br>\\n\\"type\\": \\"Text _O\\",<br>\\n\\"pos\\": [<br>\\n425.1003863878501,<br>\\n261.0733671033876<br>\\n],<br>\\n\\"size\\": [<br>\\n210,<br>\\n100<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 5,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"STRING\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n258<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"STRING\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"Text _O\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"no humans,animal focus, looking at viewer, anime artwork, anime style, key visual, vibrant, studio anime, highly detailed\\"<br>\\n],<br>\\n\\"color\\": \\"#232\\",<br>\\n\\"bgcolor\\": \\"#353\\"<br>\\n},<br>\\n{<br>\\n\\"id\\": 131,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 730,<br>\\n\\"1\\": 300<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 54<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": false<br>\\n},<br>\\n\\"order\\": 21,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 243,<br>\\n\\"label\\": \\"CLIP\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"text\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 260,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text\\"<br>\\n},<br>\\n\\"label\\": \\"文本\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n209<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 71,<br>\\n\\"type\\": \\"CannyEdgePreprocessor\\",<br>\\n\\"pos\\": [<br>\\n1010,<br>\\n120<br>\\n],<br>\\n\\"size\\": [<br>\\n315,<br>\\n106<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 17,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 278,<br>\\n\\"label\\": \\"image\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n118,<br>\\n119<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"IMAGE\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CannyEdgePreprocessor\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n50,<br>\\n150,<br>\\n1024<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 13,<br>\\n\\"type\\": \\"ControlNetLoader\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 1020,<br>\\n\\"1\\": 570<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 300,<br>\\n\\"1\\": 60<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONTROL_NET\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"links\\": [<br>\\n16<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"ControlNet\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"controllora256\\\\control-lora-canny-rank256.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 12,<br>\\n\\"type\\": \\"ControlNetApply\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 1020,<br>\\n\\"1\\": 680<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 300,<br>\\n\\"1\\": 100<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 25,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"conditioning\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 209,<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"control_net\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"link\\": 16,<br>\\n\\"slot_index\\": 1,<br>\\n\\"label\\": \\"ControlNet\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 119,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n21<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetApply\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n0.8<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 3,<br>\\n\\"type\\": \\"LoadImage\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 494.5950012207031,<br>\\n\\"1\\": -596.682373046875<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 480,<br>\\n\\"1\\": 570<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 7,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n277<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"遮罩\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"cat1.jpg\\",<br>\\n\\"image\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 166,<br>\\n\\"type\\": \\"Reroute\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 1060,<br>\\n\\"1\\": -10<br>\\n},<br>\\n\\"size\\": [<br>\\n75,<br>\\n26<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 12,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"<em>\\",<br>\\n\\"link\\": 277<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n278,<br>\\n279,<br>\\n280<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"showOutputText\\": false,<br>\\n\\"horizontal\\": false<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 21,<br>\\n\\"type\\": \\"KSampler\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 1780,<br>\\n\\"1\\": 510<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 320,<br>\\n\\"1\\": 470<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 27,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 276,<br>\\n\\"label\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 24,<br>\\n\\"label\\": \\"正面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 109,<br>\\n\\"label\\": \\"负面条件\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 111,<br>\\n\\"label\\": \\"Latent\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n31<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"Latent\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n358881677137626,<br>\\n\\"randomize\\",<br>\\n20,<br>\\n7,<br>\\n\\"dpmpp_2m_sde\\",<br>\\n\\"karras\\",<br>\\n0.7000000000000001<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 70,<br>\\n\\"type\\": \\"ImageScaleToTotalPixels\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 1790,<br>\\n\\"1\\": 250<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 310,<br>\\n\\"1\\": 82<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": false<br>\\n},<br>\\n\\"order\\": 19,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 280,<br>\\n\\"slot_index\\": 0,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n110<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ImageScaleToTotalPixels\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"lanczos\\",<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 27,<br>\\n\\"type\\": \\"VAEDecode\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 1790,<br>\\n\\"1\\": 130<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 300,<br>\\n\\"1\\": 50<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": false<br>\\n},<br>\\n\\"order\\": 28,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 31,<br>\\n\\"label\\": \\"Latent\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 273,<br>\\n\\"label\\": \\"VAE\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n281<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"label\\": \\"图像\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"<br>\\n},<br>\\n\\"widgets_values\\": []<br>\\n},<br>\\n{<br>\\n\\"id\\": 168,<br>\\n\\"type\\": \\"Reroute\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 950,<br>\\n\\"1\\": -10<br>\\n},<br>\\n\\"size\\": [<br>\\n75,<br>\\n26<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 30,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"</em>\\",<br>\\n\\"link\\": 284<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n283<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"showOutputText\\": false,<br>\\n\\"horizontal\\": false<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 167,<br>\\n\\"type\\": \\"Reroute\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 2060,<br>\\n\\"1\\": -10<br>\\n},<br>\\n\\"size\\": [<br>\\n75,<br>\\n26<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 29,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"<em>\\",<br>\\n\\"link\\": 281<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n284<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"showOutputText\\": false,<br>\\n\\"horizontal\\": false<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 165,<br>\\n\\"type\\": \\"Reroute\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 1580,<br>\\n\\"1\\": -10<br>\\n},<br>\\n\\"size\\": [<br>\\n82,<br>\\n26<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 20,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"</em>\\",<br>\\n\\"link\\": 275<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n276<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"showOutputText\\": true,<br>\\n\\"horizontal\\": false<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 163,<br>\\n\\"type\\": \\"Reroute\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 1680,<br>\\n\\"1\\": -10<br>\\n},<br>\\n\\"size\\": [<br>\\n75,<br>\\n26<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 15,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"<em>\\",<br>\\n\\"link\\": 271<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n272,<br>\\n273<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"showOutputText\\": true,<br>\\n\\"horizontal\\": false<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 153,<br>\\n\\"type\\": \\"Note\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 20,<br>\\n\\"1\\": -320<br>\\n},<br>\\n\\"size\\": {<br>\\n\\"0\\": 370,<br>\\n\\"1\\": 300<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 8,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [],<br>\\n\\"properties\\": {<br>\\n\\"text\\": \\"\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"Text1：\\\\nAdding the typename of animal helps to improve accuracy, such as:\\\\nbritish Shorthair\\\\namerican Shorthair\\\\nYorkshire Terrier\\\\n\\\\nText2：\\\\nAdd Lora trigger\\\\n\\\\nCheckpoint：\\\\nhttps://civitai.com/models/112902?modelVersionId=351306\\\\n\\\\nLora：\\\\nhttps://civitai.com/models/137562/studioghibliredmond-studio-ghibli-lora-for-sd-xl\\\\n\\\\nYou can change the Checkpoint and lora to get more new creative!\\\\n\\\\nany question let's wechat:78809161\\\\n\\"<br>\\n],<br>\\n\\"color\\": \\"#432\\",<br>\\n\\"bgcolor\\": \\"#653\\"<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\n16,<br>\\n13,<br>\\n0,<br>\\n12,<br>\\n1,<br>\\n\\"CONTROL_NET\\"<br>\\n],<br>\\n[<br>\\n19,<br>\\n18,<br>\\n0,<br>\\n15,<br>\\n2,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n20,<br>\\n16,<br>\\n0,<br>\\n15,<br>\\n1,<br>\\n\\"CONTROL_NET\\"<br>\\n],<br>\\n[<br>\\n21,<br>\\n12,<br>\\n0,<br>\\n15,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n23,<br>\\n18,<br>\\n0,<br>\\n20,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n24,<br>\\n15,<br>\\n0,<br>\\n21,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n31,<br>\\n21,<br>\\n0,<br>\\n27,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n74,<br>\\n1,<br>\\n1,<br>\\n2,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n75,<br>\\n10,<br>\\n0,<br>\\n18,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n76,<br>\\n10,<br>\\n0,<br>\\n17,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n77,<br>\\n1,<br>\\n2,<br>\\n27,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n78,<br>\\n1,<br>\\n1,<br>\\n29,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n79,<br>\\n1,<br>\\n0,<br>\\n43,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n80,<br>\\n4,<br>\\n0,<br>\\n43,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n81,<br>\\n25,<br>\\n0,<br>\\n43,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n82,<br>\\n10,<br>\\n0,<br>\\n39,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n83,<br>\\n1,<br>\\n2,<br>\\n44,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n84,<br>\\n10,<br>\\n0,<br>\\n47,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n85,<br>\\n1,<br>\\n0,<br>\\n21,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n86,<br>\\n4,<br>\\n0,<br>\\n21,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n87,<br>\\n25,<br>\\n0,<br>\\n21,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n88,<br>\\n1,<br>\\n1,<br>\\n4,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n89,<br>\\n1,<br>\\n1,<br>\\n52,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n90,<br>\\n10,<br>\\n0,<br>\\n60,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n91,<br>\\n1,<br>\\n0,<br>\\n63,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n92,<br>\\n4,<br>\\n0,<br>\\n63,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n93,<br>\\n25,<br>\\n0,<br>\\n63,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n94,<br>\\n10,<br>\\n0,<br>\\n67,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n95,<br>\\n10,<br>\\n0,<br>\\n50,<br>\\n1,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n96,<br>\\n1,<br>\\n2,<br>\\n25,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n97,<br>\\n10,<br>\\n0,<br>\\n7,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n98,<br>\\n10,<br>\\n0,<br>\\n45,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n99,<br>\\n1,<br>\\n2,<br>\\n64,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n100,<br>\\n1,<br>\\n1,<br>\\n6,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n101,<br>\\n1,<br>\\n1,<br>\\n32,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n102,<br>\\n1,<br>\\n1,<br>\\n54,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n109,<br>\\n4,<br>\\n0,<br>\\n21,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n110,<br>\\n70,<br>\\n0,<br>\\n25,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n111,<br>\\n25,<br>\\n0,<br>\\n21,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n118,<br>\\n71,<br>\\n0,<br>\\n19,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n119,<br>\\n71,<br>\\n0,<br>\\n12,<br>\\n2,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n209,<br>\\n131,<br>\\n0,<br>\\n12,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n243,<br>\\n154,<br>\\n1,<br>\\n131,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n244,<br>\\n154,<br>\\n1,<br>\\n4,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n252,<br>\\n1,<br>\\n0,<br>\\n154,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n253,<br>\\n1,<br>\\n1,<br>\\n154,<br>\\n1,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n254,<br>\\n156,<br>\\n0,<br>\\n159,<br>\\n0,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n257,<br>\\n152,<br>\\n0,<br>\\n156,<br>\\n0,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n258,<br>\\n158,<br>\\n0,<br>\\n156,<br>\\n1,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n259,<br>\\n157,<br>\\n0,<br>\\n159,<br>\\n1,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n260,<br>\\n159,<br>\\n0,<br>\\n131,<br>\\n1,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n261,<br>\\n160,<br>\\n0,<br>\\n4,<br>\\n1,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n270,<br>\\n1,<br>\\n2,<br>\\n162,<br>\\n0,<br>\\n\\"</em>\\"<br>\\n],<br>\\n[<br>\\n271,<br>\\n162,<br>\\n0,<br>\\n163,<br>\\n0,<br>\\n\\"<em>\\"<br>\\n],<br>\\n[<br>\\n272,<br>\\n163,<br>\\n0,<br>\\n25,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n273,<br>\\n163,<br>\\n0,<br>\\n27,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n274,<br>\\n154,<br>\\n0,<br>\\n164,<br>\\n0,<br>\\n\\"</em>\\"<br>\\n],<br>\\n[<br>\\n275,<br>\\n164,<br>\\n0,<br>\\n165,<br>\\n0,<br>\\n\\"<em>\\"<br>\\n],<br>\\n[<br>\\n276,<br>\\n165,<br>\\n0,<br>\\n21,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n277,<br>\\n3,<br>\\n0,<br>\\n166,<br>\\n0,<br>\\n\\"</em>\\"<br>\\n],<br>\\n[<br>\\n278,<br>\\n166,<br>\\n0,<br>\\n71,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n279,<br>\\n166,<br>\\n0,<br>\\n18,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n280,<br>\\n166,<br>\\n0,<br>\\n70,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n281,<br>\\n27,<br>\\n0,<br>\\n167,<br>\\n0,<br>\\n\\"<em>\\"<br>\\n],<br>\\n[<br>\\n283,<br>\\n168,<br>\\n0,<br>\\n123,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n284,<br>\\n167,<br>\\n0,<br>\\n168,<br>\\n0,<br>\\n\\"</em>\\"<br>\\n]<br>\\n],<br>\\n\\"groups\\": [<br>\\n{<br>\\n\\"title\\": \\"Prompt\\",<br>\\n\\"bounding\\": [<br>\\n416,<br>\\n20,<br>\\n548,<br>\\n602<br>\\n],<br>\\n\\"color\\": \\"#3f789e\\",<br>\\n\\"font_size\\": 24,<br>\\n\\"flags\\": {}<br>\\n},<br>\\n{<br>\\n\\"title\\": \\"Chectpoint&amp;LoRA\\",<br>\\n\\"bounding\\": [<br>\\n16,<br>\\n20,<br>\\n375,<br>\\n605<br>\\n],<br>\\n\\"color\\": \\"#3f789e\\",<br>\\n\\"font_size\\": 24,<br>\\n\\"flags\\": {}<br>\\n},<br>\\n{<br>\\n\\"title\\": \\"Ksampler\\",<br>\\n\\"bounding\\": [<br>\\n1713,<br>\\n20,<br>\\n437,<br>\\n1075<br>\\n],<br>\\n\\"color\\": \\"#3f789e\\",<br>\\n\\"font_size\\": 24,<br>\\n\\"flags\\": {}<br>\\n},<br>\\n{<br>\\n\\"title\\": \\"I/O\\",<br>\\n\\"bounding\\": [<br>\\n452,<br>\\n-683,<br>\\n1129,<br>\\n667<br>\\n],<br>\\n\\"color\\": \\"#3f789e\\",<br>\\n\\"font_size\\": 24,<br>\\n\\"flags\\": {}<br>\\n},<br>\\n{<br>\\n\\"title\\": \\"controlnet\\",<br>\\n\\"bounding\\": [<br>\\n983,<br>\\n20,<br>\\n717,<br>\\n1073<br>\\n],<br>\\n\\"color\\": \\"#3f789e\\",<br>\\n\\"font_size\\": 24,<br>\\n\\"flags\\": {}<br>\\n}<br>\\n],<br>\\n\\"config\\": {},<br>\\n\\"extra\\": {<br>\\n\\"ds\\": {<br>\\n\\"scale\\": 0.620921323059155,<br>\\n\\"offset\\": [<br>\\n672.6848120841853,<br>\\n698.7132675632573<br>\\n]<br>\\n}<br>\\n},<br>\\n\\"version\\": 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Download/workflow-animal-2-anime-NoE7zH8tJ4KlrXbFr6AG-willling-openart.ai.json","value":{"title":"workflow-animal-2-anime-NoE7zH8tJ4KlrXbFr6AG-willling-openart.ai.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Download/workflow-animal-2-anime-NoE7zH8tJ4KlrXbFr6AG-willling-openart.ai.json","outlink":[],"backlink":[]}}],"links":[]}}}`);export{d as comp,m as data};

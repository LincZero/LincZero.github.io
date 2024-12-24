import{_ as e,c as t,b as o,o as s,r as l}from"./app-P52SBxEA.js";const a={};function i(p,r){const n=l("VueFlow");return s(),t("div",null,[o(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const m=e(a,[["render",i],["__file","workflow-animal-2-anime-NoE7zH8tJ4KlrXbFr6AG-willling-openart.ai.json.html.vue"]]),u=JSON.parse(`{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Download/workflow-animal-2-anime-NoE7zH8tJ4KlrXbFr6AG-willling-openart.ai.json","title":"","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 168, \\"last_link_id\\": 284, \\"nodes\\": [ { \\"id\\": 18, \\"type\\": \\"MarigoldDepthEstimation\\", \\"pos\\": [ 1347.6374127426923, 114.30344941481799 ], \\"size\\": [ 315, 394 ], \\"f...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Download/workflow-animal-2-anime-NoE7zH8tJ4KlrXbFr6AG-willling-openart.ai.json"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 168, \\"last_link_id\\": 284, \\"nodes\\": [ { \\"id\\": 18, \\"type\\": \\"MarigoldDepthEstimation\\", \\"pos\\": [ 1347.6374127426923, 114.30344941481799 ], \\"size\\": [ 315, 394 ], \\"f..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":7.25,"words":2174},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Download/workflow-animal-2-anime-NoE7zH8tJ4KlrXbFr6AG-willling-openart.ai.json","excerpt":"<p>{\\n\\"last_node_id\\": 168,\\n\\"last_link_id\\": 284,\\n\\"nodes\\": [\\n{\\n\\"id\\": 18,\\n\\"type\\": \\"MarigoldDepthEstimation\\",\\n\\"pos\\": [\\n1347.6374127426923,\\n114.30344941481799\\n],\\n\\"size\\": [\\n315,\\n394\\n],\\n\\"flags\\": {},\\n\\"order\\": 18,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 279,\\n\\"label\\": \\"image\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"ensembled_image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n19,\\n23\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"ensembled_image\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"MarigoldDepthEstimation\\"\\n},\\n\\"widgets_values\\": [\\n995352869972963,\\n\\"randomize\\",\\n4,\\n10,\\n0.02,\\n\\"median\\",\\n5,\\n0.001,\\ntrue,\\ntrue,\\n2,\\ntrue,\\n\\"LCMScheduler\\",\\ntrue,\\n\\"marigold-lcm-v1-0\\"\\n]\\n},\\n{\\n\\"id\\": 25,\\n\\"type\\": \\"VAEEncode\\",\\n\\"pos\\": {\\n\\"0\\": 1780,\\n\\"1\\": 400\\n},\\n\\"size\\": {\\n\\"0\\": 310,\\n\\"1\\": 50\\n},\\n\\"flags\\": {\\n\\"collapsed\\": false\\n},\\n\\"order\\": 24,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"pixels\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 110,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 272,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n111\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEEncode\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 16,\\n\\"type\\": \\"ControlNetLoader\\",\\n\\"pos\\": {\\n\\"0\\": 1347.637451171875,\\n\\"1\\": 564.303466796875\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONTROL_NET\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"links\\": [\\n20\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"ControlNet\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"controllora256\\\\control-lora-depth-rank256.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 15,\\n\\"type\\": \\"ControlNetApply\\",\\n\\"pos\\": {\\n\\"0\\": 1347.637451171875,\\n\\"1\\": 674.303466796875\\n},\\n\\"size\\": {\\n\\"0\\": 317.4000244140625,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 26,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"conditioning\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 21,\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n},\\n{\\n\\"name\\": \\"control_net\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"link\\": 20,\\n\\"slot_index\\": 1,\\n\\"label\\": \\"ControlNet\\"\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 19,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n24\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetApply\\"\\n},\\n\\"widgets_values\\": [\\n0.8\\n]\\n},\\n{\\n\\"id\\": 20,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": {\\n\\"0\\": 1357.637451171875,\\n\\"1\\": 824.303466796875\\n},\\n\\"size\\": {\\n\\"0\\": 310,\\n\\"1\\": 250\\n},\\n\\"flags\\": {},\\n\\"order\\": 23,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 23,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 19,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": {\\n\\"0\\": 1017.6373901367188,\\n\\"1\\": 824.303466796875\\n},\\n\\"size\\": {\\n\\"0\\": 300,\\n\\"1\\": 250\\n},\\n\\"flags\\": {},\\n\\"order\\": 22,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 118,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 152,\\n\\"type\\": \\"Text _O\\",\\n\\"pos\\": [\\n424.4658621011265,\\n103.75643180321805\\n],\\n\\"size\\": [\\n210,\\n80\\n],\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"STRING\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n257\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"STRING\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"Text _O\\"\\n},\\n\\"widgets_values\\": [\\n\\"american Shorthair\\"\\n],\\n\\"title\\": \\"Text_1\\"\\n},\\n{\\n\\"id\\": 123,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": {\\n\\"0\\": 1010,\\n\\"1\\": -560\\n},\\n\\"size\\": {\\n\\"0\\": 490,\\n\\"1\\": 530\\n},\\n\\"flags\\": {},\\n\\"order\\": 31,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 283,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 1,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": {\\n\\"0\\": 51.86028289794922,\\n\\"1\\": 115.81229400634766\\n},\\n\\"size\\": {\\n\\"0\\": 320,\\n\\"1\\": 100\\n},\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n252\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n253\\n],\\n\\"slot_index\\": 1,\\n\\"label\\": \\"CLIP\\"\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n270\\n],\\n\\"slot_index\\": 2,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"SDXL\\\\dreamshaperXL_v21TurboDPMSDE.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 162,\\n\\"type\\": \\"Reroute\\",\\n\\"pos\\": {\\n\\"0\\": 400,\\n\\"1\\": -10\\n},\\n\\"size\\": [\\n75,\\n26\\n],\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"<em>\\",\\n\\"link\\": 270\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n271\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"showOutputText\\": true,\\n\\"horizontal\\": false\\n}\\n},\\n{\\n\\"id\\": 154,\\n\\"type\\": \\"LoraLoader\\",\\n\\"pos\\": {\\n\\"0\\": 51.86028289794922,\\n\\"1\\": 285.8122863769531\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 126\\n},\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 252,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 253,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n274\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n243,\\n244\\n],\\n\\"slot_index\\": 1,\\n\\"shape\\": 3,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoraLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"StudioGhibli.Redmond-STDGBREDMAF.safetensors\\",\\n0.6,\\n1\\n]\\n},\\n{\\n\\"id\\": 164,\\n\\"type\\": \\"Reroute\\",\\n\\"pos\\": {\\n\\"0\\": 490,\\n\\"1\\": -10\\n},\\n\\"size\\": [\\n82,\\n26\\n],\\n\\"flags\\": {},\\n\\"order\\": 13,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"</em>\\",\\n\\"link\\": 274\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n275\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"showOutputText\\": true,\\n\\"horizontal\\": false\\n}\\n},\\n{\\n\\"id\\": 156,\\n\\"type\\": \\"ConcatText_Zho\\",\\n\\"pos\\": [\\n745.1003863878493,\\n131.07336710338762\\n],\\n\\"size\\": [\\n210,\\n65.9999771118164\\n],\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 11,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"text_1\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 257,\\n\\"widget\\": {\\n\\"name\\": \\"text_1\\"\\n},\\n\\"label\\": \\"text_1\\"\\n},\\n{\\n\\"name\\": \\"text_2\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 258,\\n\\"widget\\": {\\n\\"name\\": \\"text_2\\"\\n},\\n\\"label\\": \\"text_2\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"text\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n254\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"text\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ConcatText_Zho\\"\\n},\\n\\"widgets_values\\": [\\n\\"\\",\\n\\"\\"\\n]\\n},\\n{\\n\\"id\\": 159,\\n\\"type\\": \\"ConcatText_Zho\\",\\n\\"pos\\": [\\n745.1003863878493,\\n241.07336710338762\\n],\\n\\"size\\": [\\n210,\\n54\\n],\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 16,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"text_1\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 254,\\n\\"widget\\": {\\n\\"name\\": \\"text_1\\"\\n},\\n\\"label\\": \\"text_1\\"\\n},\\n{\\n\\"name\\": \\"text_2\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 259,\\n\\"widget\\": {\\n\\"name\\": \\"text_2\\"\\n},\\n\\"label\\": \\"text_2\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"text\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n260\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"text\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ConcatText_Zho\\"\\n},\\n\\"widgets_values\\": [\\n\\"\\",\\n\\"\\"\\n]\\n},\\n{\\n\\"id\\": 157,\\n\\"type\\": \\"Text _O\\",\\n\\"pos\\": [\\n425.1003863878501,\\n541.0733671033877\\n],\\n\\"size\\": [\\n210,\\n75.99999237060547\\n],\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"STRING\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n259\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"STRING\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"Text _O\\"\\n},\\n\\"widgets_values\\": [\\n\\"StdGBRedmAF,Studio Ghibli,\\"\\n],\\n\\"title\\": \\"Text _2\\"\\n},\\n{\\n\\"id\\": 4,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": {\\n\\"0\\": 725.1004028320312,\\n\\"1\\": 401.0733642578125\\n},\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 54\\n},\\n\\"flags\\": {\\n\\"collapsed\\": false\\n},\\n\\"order\\": 14,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 244,\\n\\"label\\": \\"CLIP\\"\\n},\\n{\\n\\"name\\": \\"text\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 261,\\n\\"widget\\": {\\n\\"name\\": \\"text\\"\\n},\\n\\"label\\": \\"文本\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n109\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"\\"\\n]\\n},\\n{\\n\\"id\\": 160,\\n\\"type\\": \\"Text _O\\",\\n\\"pos\\": [\\n425.1003863878501,\\n411.0733671033876\\n],\\n\\"size\\": [\\n210,\\n76.00003814697266\\n],\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"STRING\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n261\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"STRING\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"Text _O\\"\\n},\\n\\"widgets_values\\": [\\n\\"photo, deformed, black and white, realism, disfigured, low contrast\\"\\n],\\n\\"color\\": \\"#322\\",\\n\\"bgcolor\\": \\"#533\\"\\n},\\n{\\n\\"id\\": 158,\\n\\"type\\": \\"Text _O\\",\\n\\"pos\\": [\\n425.1003863878501,\\n261.0733671033876\\n],\\n\\"size\\": [\\n210,\\n100\\n],\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"STRING\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n258\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"STRING\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"Text _O\\"\\n},\\n\\"widgets_values\\": [\\n\\"no humans,animal focus, looking at viewer, anime artwork, anime style, key visual, vibrant, studio anime, highly detailed\\"\\n],\\n\\"color\\": \\"#232\\",\\n\\"bgcolor\\": \\"#353\\"\\n},\\n{\\n\\"id\\": 131,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": {\\n\\"0\\": 730,\\n\\"1\\": 300\\n},\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 54\\n},\\n\\"flags\\": {\\n\\"collapsed\\": false\\n},\\n\\"order\\": 21,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 243,\\n\\"label\\": \\"CLIP\\"\\n},\\n{\\n\\"name\\": \\"text\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 260,\\n\\"widget\\": {\\n\\"name\\": \\"text\\"\\n},\\n\\"label\\": \\"文本\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n209\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"\\"\\n]\\n},\\n{\\n\\"id\\": 71,\\n\\"type\\": \\"CannyEdgePreprocessor\\",\\n\\"pos\\": [\\n1010,\\n120\\n],\\n\\"size\\": [\\n315,\\n106\\n],\\n\\"flags\\": {},\\n\\"order\\": 17,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 278,\\n\\"label\\": \\"image\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n118,\\n119\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"IMAGE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CannyEdgePreprocessor\\"\\n},\\n\\"widgets_values\\": [\\n50,\\n150,\\n1024\\n]\\n},\\n{\\n\\"id\\": 13,\\n\\"type\\": \\"ControlNetLoader\\",\\n\\"pos\\": {\\n\\"0\\": 1020,\\n\\"1\\": 570\\n},\\n\\"size\\": {\\n\\"0\\": 300,\\n\\"1\\": 60\\n},\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONTROL_NET\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"links\\": [\\n16\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"ControlNet\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"controllora256\\\\control-lora-canny-rank256.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 12,\\n\\"type\\": \\"ControlNetApply\\",\\n\\"pos\\": {\\n\\"0\\": 1020,\\n\\"1\\": 680\\n},\\n\\"size\\": {\\n\\"0\\": 300,\\n\\"1\\": 100\\n},\\n\\"flags\\": {},\\n\\"order\\": 25,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"conditioning\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 209,\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n},\\n{\\n\\"name\\": \\"control_net\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"link\\": 16,\\n\\"slot_index\\": 1,\\n\\"label\\": \\"ControlNet\\"\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 119,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n21\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetApply\\"\\n},\\n\\"widgets_values\\": [\\n0.8\\n]\\n},\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"LoadImage\\",\\n\\"pos\\": {\\n\\"0\\": 494.5950012207031,\\n\\"1\\": -596.682373046875\\n},\\n\\"size\\": {\\n\\"0\\": 480,\\n\\"1\\": 570\\n},\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n277\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"遮罩\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"cat1.jpg\\",\\n\\"image\\"\\n]\\n},\\n{\\n\\"id\\": 166,\\n\\"type\\": \\"Reroute\\",\\n\\"pos\\": {\\n\\"0\\": 1060,\\n\\"1\\": -10\\n},\\n\\"size\\": [\\n75,\\n26\\n],\\n\\"flags\\": {},\\n\\"order\\": 12,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"<em>\\",\\n\\"link\\": 277\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n278,\\n279,\\n280\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"showOutputText\\": false,\\n\\"horizontal\\": false\\n}\\n},\\n{\\n\\"id\\": 21,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": {\\n\\"0\\": 1780,\\n\\"1\\": 510\\n},\\n\\"size\\": {\\n\\"0\\": 320,\\n\\"1\\": 470\\n},\\n\\"flags\\": {},\\n\\"order\\": 27,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 276,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 24,\\n\\"label\\": \\"正面条件\\"\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 109,\\n\\"label\\": \\"负面条件\\"\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 111,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n31\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n358881677137626,\\n\\"randomize\\",\\n20,\\n7,\\n\\"dpmpp_2m_sde\\",\\n\\"karras\\",\\n0.7000000000000001\\n]\\n},\\n{\\n\\"id\\": 70,\\n\\"type\\": \\"ImageScaleToTotalPixels\\",\\n\\"pos\\": {\\n\\"0\\": 1790,\\n\\"1\\": 250\\n},\\n\\"size\\": {\\n\\"0\\": 310,\\n\\"1\\": 82\\n},\\n\\"flags\\": {\\n\\"collapsed\\": false\\n},\\n\\"order\\": 19,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 280,\\n\\"slot_index\\": 0,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n110\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ImageScaleToTotalPixels\\"\\n},\\n\\"widgets_values\\": [\\n\\"lanczos\\",\\n1\\n]\\n},\\n{\\n\\"id\\": 27,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": {\\n\\"0\\": 1790,\\n\\"1\\": 130\\n},\\n\\"size\\": {\\n\\"0\\": 300,\\n\\"1\\": 50\\n},\\n\\"flags\\": {\\n\\"collapsed\\": false\\n},\\n\\"order\\": 28,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 31,\\n\\"label\\": \\"Latent\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 273,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n281\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 168,\\n\\"type\\": \\"Reroute\\",\\n\\"pos\\": {\\n\\"0\\": 950,\\n\\"1\\": -10\\n},\\n\\"size\\": [\\n75,\\n26\\n],\\n\\"flags\\": {},\\n\\"order\\": 30,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"</em>\\",\\n\\"link\\": 284\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n283\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"showOutputText\\": false,\\n\\"horizontal\\": false\\n}\\n},\\n{\\n\\"id\\": 167,\\n\\"type\\": \\"Reroute\\",\\n\\"pos\\": {\\n\\"0\\": 2060,\\n\\"1\\": -10\\n},\\n\\"size\\": [\\n75,\\n26\\n],\\n\\"flags\\": {},\\n\\"order\\": 29,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"<em>\\",\\n\\"link\\": 281\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n284\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"showOutputText\\": false,\\n\\"horizontal\\": false\\n}\\n},\\n{\\n\\"id\\": 165,\\n\\"type\\": \\"Reroute\\",\\n\\"pos\\": {\\n\\"0\\": 1580,\\n\\"1\\": -10\\n},\\n\\"size\\": [\\n82,\\n26\\n],\\n\\"flags\\": {},\\n\\"order\\": 20,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"</em>\\",\\n\\"link\\": 275\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n276\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"showOutputText\\": true,\\n\\"horizontal\\": false\\n}\\n},\\n{\\n\\"id\\": 163,\\n\\"type\\": \\"Reroute\\",\\n\\"pos\\": {\\n\\"0\\": 1680,\\n\\"1\\": -10\\n},\\n\\"size\\": [\\n75,\\n26\\n],\\n\\"flags\\": {},\\n\\"order\\": 15,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"<em>\\",\\n\\"link\\": 271\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n272,\\n273\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"showOutputText\\": true,\\n\\"horizontal\\": false\\n}\\n},\\n{\\n\\"id\\": 153,\\n\\"type\\": \\"Note\\",\\n\\"pos\\": {\\n\\"0\\": 20,\\n\\"1\\": -320\\n},\\n\\"size\\": {\\n\\"0\\": 370,\\n\\"1\\": 300\\n},\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [],\\n\\"properties\\": {\\n\\"text\\": \\"\\"\\n},\\n\\"widgets_values\\": [\\n\\"Text1：\\\\nAdding the typename of animal helps to improve accuracy, such as:\\\\nbritish Shorthair\\\\namerican Shorthair\\\\nYorkshire Terrier\\\\n\\\\nText2：\\\\nAdd Lora trigger\\\\n\\\\nCheckpoint：\\\\nhttps://civitai.com/models/112902?modelVersionId=351306\\\\n\\\\nLora：\\\\nhttps://civitai.com/models/137562/studioghibliredmond-studio-ghibli-lora-for-sd-xl\\\\n\\\\nYou can change the Checkpoint and lora to get more new creative!\\\\n\\\\nany question let's wechat:78809161\\\\n\\"\\n],\\n\\"color\\": \\"#432\\",\\n\\"bgcolor\\": \\"#653\\"\\n}\\n],\\n\\"links\\": [\\n[\\n16,\\n13,\\n0,\\n12,\\n1,\\n\\"CONTROL_NET\\"\\n],\\n[\\n19,\\n18,\\n0,\\n15,\\n2,\\n\\"IMAGE\\"\\n],\\n[\\n20,\\n16,\\n0,\\n15,\\n1,\\n\\"CONTROL_NET\\"\\n],\\n[\\n21,\\n12,\\n0,\\n15,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n23,\\n18,\\n0,\\n20,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n24,\\n15,\\n0,\\n21,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n31,\\n21,\\n0,\\n27,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n74,\\n1,\\n1,\\n2,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n75,\\n10,\\n0,\\n18,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n76,\\n10,\\n0,\\n17,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n77,\\n1,\\n2,\\n27,\\n1,\\n\\"VAE\\"\\n],\\n[\\n78,\\n1,\\n1,\\n29,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n79,\\n1,\\n0,\\n43,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n80,\\n4,\\n0,\\n43,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n81,\\n25,\\n0,\\n43,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n82,\\n10,\\n0,\\n39,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n83,\\n1,\\n2,\\n44,\\n1,\\n\\"VAE\\"\\n],\\n[\\n84,\\n10,\\n0,\\n47,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n85,\\n1,\\n0,\\n21,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n86,\\n4,\\n0,\\n21,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n87,\\n25,\\n0,\\n21,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n88,\\n1,\\n1,\\n4,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n89,\\n1,\\n1,\\n52,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n90,\\n10,\\n0,\\n60,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n91,\\n1,\\n0,\\n63,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n92,\\n4,\\n0,\\n63,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n93,\\n25,\\n0,\\n63,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n94,\\n10,\\n0,\\n67,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n95,\\n10,\\n0,\\n50,\\n1,\\n\\"IMAGE\\"\\n],\\n[\\n96,\\n1,\\n2,\\n25,\\n1,\\n\\"VAE\\"\\n],\\n[\\n97,\\n10,\\n0,\\n7,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n98,\\n10,\\n0,\\n45,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n99,\\n1,\\n2,\\n64,\\n1,\\n\\"VAE\\"\\n],\\n[\\n100,\\n1,\\n1,\\n6,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n101,\\n1,\\n1,\\n32,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n102,\\n1,\\n1,\\n54,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n109,\\n4,\\n0,\\n21,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n110,\\n70,\\n0,\\n25,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n111,\\n25,\\n0,\\n21,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n118,\\n71,\\n0,\\n19,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n119,\\n71,\\n0,\\n12,\\n2,\\n\\"IMAGE\\"\\n],\\n[\\n209,\\n131,\\n0,\\n12,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n243,\\n154,\\n1,\\n131,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n244,\\n154,\\n1,\\n4,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n252,\\n1,\\n0,\\n154,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n253,\\n1,\\n1,\\n154,\\n1,\\n\\"CLIP\\"\\n],\\n[\\n254,\\n156,\\n0,\\n159,\\n0,\\n\\"STRING\\"\\n],\\n[\\n257,\\n152,\\n0,\\n156,\\n0,\\n\\"STRING\\"\\n],\\n[\\n258,\\n158,\\n0,\\n156,\\n1,\\n\\"STRING\\"\\n],\\n[\\n259,\\n157,\\n0,\\n159,\\n1,\\n\\"STRING\\"\\n],\\n[\\n260,\\n159,\\n0,\\n131,\\n1,\\n\\"STRING\\"\\n],\\n[\\n261,\\n160,\\n0,\\n4,\\n1,\\n\\"STRING\\"\\n],\\n[\\n270,\\n1,\\n2,\\n162,\\n0,\\n\\"</em>\\"\\n],\\n[\\n271,\\n162,\\n0,\\n163,\\n0,\\n\\"<em>\\"\\n],\\n[\\n272,\\n163,\\n0,\\n25,\\n1,\\n\\"VAE\\"\\n],\\n[\\n273,\\n163,\\n0,\\n27,\\n1,\\n\\"VAE\\"\\n],\\n[\\n274,\\n154,\\n0,\\n164,\\n0,\\n\\"</em>\\"\\n],\\n[\\n275,\\n164,\\n0,\\n165,\\n0,\\n\\"<em>\\"\\n],\\n[\\n276,\\n165,\\n0,\\n21,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n277,\\n3,\\n0,\\n166,\\n0,\\n\\"</em>\\"\\n],\\n[\\n278,\\n166,\\n0,\\n71,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n279,\\n166,\\n0,\\n18,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n280,\\n166,\\n0,\\n70,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n281,\\n27,\\n0,\\n167,\\n0,\\n\\"<em>\\"\\n],\\n[\\n283,\\n168,\\n0,\\n123,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n284,\\n167,\\n0,\\n168,\\n0,\\n\\"</em>\\"\\n]\\n],\\n\\"groups\\": [\\n{\\n\\"title\\": \\"Prompt\\",\\n\\"bounding\\": [\\n416,\\n20,\\n548,\\n602\\n],\\n\\"color\\": \\"#3f789e\\",\\n\\"font_size\\": 24,\\n\\"flags\\": {}\\n},\\n{\\n\\"title\\": \\"Chectpoint&amp;LoRA\\",\\n\\"bounding\\": [\\n16,\\n20,\\n375,\\n605\\n],\\n\\"color\\": \\"#3f789e\\",\\n\\"font_size\\": 24,\\n\\"flags\\": {}\\n},\\n{\\n\\"title\\": \\"Ksampler\\",\\n\\"bounding\\": [\\n1713,\\n20,\\n437,\\n1075\\n],\\n\\"color\\": \\"#3f789e\\",\\n\\"font_size\\": 24,\\n\\"flags\\": {}\\n},\\n{\\n\\"title\\": \\"I/O\\",\\n\\"bounding\\": [\\n452,\\n-683,\\n1129,\\n667\\n],\\n\\"color\\": \\"#3f789e\\",\\n\\"font_size\\": 24,\\n\\"flags\\": {}\\n},\\n{\\n\\"title\\": \\"controlnet\\",\\n\\"bounding\\": [\\n983,\\n20,\\n717,\\n1073\\n],\\n\\"color\\": \\"#3f789e\\",\\n\\"font_size\\": 24,\\n\\"flags\\": {}\\n}\\n],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"ds\\": {\\n\\"scale\\": 0.620921323059155,\\n\\"offset\\": [\\n672.6848120841853,\\n698.7132675632573\\n]\\n}\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true}`);export{m as comp,u as data};

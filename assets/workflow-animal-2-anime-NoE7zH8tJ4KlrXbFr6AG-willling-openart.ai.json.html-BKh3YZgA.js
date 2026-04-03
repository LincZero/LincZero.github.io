import{_ as t,c as o,b as u,r,o as q}from"./app-C8fCxSCu.js";const b={};function e(l,s){const n=r("VueFlow");return q(),o("div",null,[u(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const i=t(b,[["render",e]]),p=JSON.parse(`{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Download/workflow-animal-2-anime-NoE7zH8tJ4KlrXbFr6AG-willling-openart.ai.json.html","title":"workflow-animal-2-anime-NoE7zH8tJ4KlrXbFr6AG-willling-openart.ai.json","lang":"zh-CN","frontmatter":{"description":"{ &quot;last_node_id&quot;: 168, &quot;last_link_id&quot;: 284, &quot;nodes&quot;: [ { &quot;id&quot;: 18, &quot;type&quot;: &quot;MarigoldDepthEstimation&quot;, &quot;pos&quot;...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Download/workflow-animal-2-anime-NoE7zH8tJ4KlrXbFr6AG-willling-openart.ai.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ &quot;last_node_id&quot;: 168, &quot;last_link_id&quot;: 284, &quot;nodes&quot;: [ { &quot;id&quot;: 18, &quot;type&quot;: &quot;MarigoldDepthEstimation&quot;, &quot;pos&quot;..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"layout":"Layout"},"git":{},"readingTime":{"minutes":7.25,"words":2174},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Download/workflow-animal-2-anime-NoE7zH8tJ4KlrXbFr6AG-willling-openart.ai.json","excerpt":"<p>{<br>\\n&quot;last_node_id&quot;: 168,<br>\\n&quot;last_link_id&quot;: 284,<br>\\n&quot;nodes&quot;: [<br>\\n{<br>\\n&quot;id&quot;: 18,<br>\\n&quot;type&quot;: &quot;MarigoldDepthEstimation&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1347.6374127426923,<br>\\n114.30344941481799<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n315,<br>\\n394<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 18,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 279,<br>\\n&quot;label&quot;: &quot;image&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;ensembled_image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n19,<br>\\n23<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;ensembled_image&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;MarigoldDepthEstimation&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n995352869972963,<br>\\n&quot;randomize&quot;,<br>\\n4,<br>\\n10,<br>\\n0.02,<br>\\n&quot;median&quot;,<br>\\n5,<br>\\n0.001,<br>\\ntrue,<br>\\ntrue,<br>\\n2,<br>\\ntrue,<br>\\n&quot;LCMScheduler&quot;,<br>\\ntrue,<br>\\n&quot;marigold-lcm-v1-0&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 25,<br>\\n&quot;type&quot;: &quot;VAEEncode&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1780,<br>\\n&quot;1&quot;: 400<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 310,<br>\\n&quot;1&quot;: 50<br>\\n},<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: false<br>\\n},<br>\\n&quot;order&quot;: 24,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;pixels&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 110,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 272,<br>\\n&quot;label&quot;: &quot;VAE&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n111<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;Latent&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: []<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 16,<br>\\n&quot;type&quot;: &quot;ControlNetLoader&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1347.637451171875,<br>\\n&quot;1&quot;: 564.303466796875<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 58<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 0,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONTROL_NET&quot;,<br>\\n&quot;type&quot;: &quot;CONTROL_NET&quot;,<br>\\n&quot;links&quot;: [<br>\\n20<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;ControlNet&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ControlNetLoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;controllora256\\\\control-lora-depth-rank256.safetensors&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 15,<br>\\n&quot;type&quot;: &quot;ControlNetApply&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1347.637451171875,<br>\\n&quot;1&quot;: 674.303466796875<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 317.4000244140625,<br>\\n&quot;1&quot;: 98<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 26,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;conditioning&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 21,<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;条件&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;control_net&quot;,<br>\\n&quot;type&quot;: &quot;CONTROL_NET&quot;,<br>\\n&quot;link&quot;: 20,<br>\\n&quot;slot_index&quot;: 1,<br>\\n&quot;label&quot;: &quot;ControlNet&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 19,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n24<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;条件&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ControlNetApply&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n0.8<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 20,<br>\\n&quot;type&quot;: &quot;PreviewImage&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1357.637451171875,<br>\\n&quot;1&quot;: 824.303466796875<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 310,<br>\\n&quot;1&quot;: 250<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 23,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 23,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;PreviewImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: []<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 19,<br>\\n&quot;type&quot;: &quot;PreviewImage&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1017.6373901367188,<br>\\n&quot;1&quot;: 824.303466796875<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 300,<br>\\n&quot;1&quot;: 250<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 22,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 118,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;PreviewImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: []<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 152,<br>\\n&quot;type&quot;: &quot;Text _O&quot;,<br>\\n&quot;pos&quot;: [<br>\\n424.4658621011265,<br>\\n103.75643180321805<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n210,<br>\\n80<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 1,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;STRING&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;links&quot;: [<br>\\n257<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;STRING&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;Text _O&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;american Shorthair&quot;<br>\\n],<br>\\n&quot;title&quot;: &quot;Text_1&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 123,<br>\\n&quot;type&quot;: &quot;PreviewImage&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1010,<br>\\n&quot;1&quot;: -560<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 490,<br>\\n&quot;1&quot;: 530<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 31,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 283,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;PreviewImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: []<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 1,<br>\\n&quot;type&quot;: &quot;CheckpointLoaderSimple&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 51.86028289794922,<br>\\n&quot;1&quot;: 115.81229400634766<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 320,<br>\\n&quot;1&quot;: 100<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 2,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n252<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;模型&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [<br>\\n253<br>\\n],<br>\\n&quot;slot_index&quot;: 1,<br>\\n&quot;label&quot;: &quot;CLIP&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;VAE&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;links&quot;: [<br>\\n270<br>\\n],<br>\\n&quot;slot_index&quot;: 2,<br>\\n&quot;label&quot;: &quot;VAE&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CheckpointLoaderSimple&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;SDXL\\\\dreamshaperXL_v21TurboDPMSDE.safetensors&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 162,<br>\\n&quot;type&quot;: &quot;Reroute&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 400,<br>\\n&quot;1&quot;: -10<br>\\n},<br>\\n&quot;size&quot;: [<br>\\n75,<br>\\n26<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 10,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;&quot;,<br>\\n&quot;type&quot;: &quot;<em>&quot;,<br>\\n&quot;link&quot;: 270<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;VAE&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;links&quot;: [<br>\\n271<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;showOutputText&quot;: true,<br>\\n&quot;horizontal&quot;: false<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 154,<br>\\n&quot;type&quot;: &quot;LoraLoader&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 51.86028289794922,<br>\\n&quot;1&quot;: 285.8122863769531<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 126<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 9,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 252,<br>\\n&quot;label&quot;: &quot;模型&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 253,<br>\\n&quot;label&quot;: &quot;CLIP&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n274<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;模型&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [<br>\\n243,<br>\\n244<br>\\n],<br>\\n&quot;slot_index&quot;: 1,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;CLIP&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;LoraLoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;StudioGhibli.Redmond-STDGBREDMAF.safetensors&quot;,<br>\\n0.6,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 164,<br>\\n&quot;type&quot;: &quot;Reroute&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 490,<br>\\n&quot;1&quot;: -10<br>\\n},<br>\\n&quot;size&quot;: [<br>\\n82,<br>\\n26<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 13,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;&quot;,<br>\\n&quot;type&quot;: &quot;</em>&quot;,<br>\\n&quot;link&quot;: 274<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n275<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;showOutputText&quot;: true,<br>\\n&quot;horizontal&quot;: false<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 156,<br>\\n&quot;type&quot;: &quot;ConcatText_Zho&quot;,<br>\\n&quot;pos&quot;: [<br>\\n745.1003863878493,<br>\\n131.07336710338762<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n210,<br>\\n65.9999771118164<br>\\n],<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: true<br>\\n},<br>\\n&quot;order&quot;: 11,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;text_1&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;link&quot;: 257,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;text_1&quot;<br>\\n},<br>\\n&quot;label&quot;: &quot;text_1&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;text_2&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;link&quot;: 258,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;text_2&quot;<br>\\n},<br>\\n&quot;label&quot;: &quot;text_2&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;text&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;links&quot;: [<br>\\n254<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;text&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ConcatText_Zho&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;&quot;,<br>\\n&quot;&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 159,<br>\\n&quot;type&quot;: &quot;ConcatText_Zho&quot;,<br>\\n&quot;pos&quot;: [<br>\\n745.1003863878493,<br>\\n241.07336710338762<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n210,<br>\\n54<br>\\n],<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: true<br>\\n},<br>\\n&quot;order&quot;: 16,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;text_1&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;link&quot;: 254,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;text_1&quot;<br>\\n},<br>\\n&quot;label&quot;: &quot;text_1&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;text_2&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;link&quot;: 259,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;text_2&quot;<br>\\n},<br>\\n&quot;label&quot;: &quot;text_2&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;text&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;links&quot;: [<br>\\n260<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;text&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ConcatText_Zho&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;&quot;,<br>\\n&quot;&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 157,<br>\\n&quot;type&quot;: &quot;Text _O&quot;,<br>\\n&quot;pos&quot;: [<br>\\n425.1003863878501,<br>\\n541.0733671033877<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n210,<br>\\n75.99999237060547<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 3,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;STRING&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;links&quot;: [<br>\\n259<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;STRING&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;Text _O&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;StdGBRedmAF,Studio Ghibli,&quot;<br>\\n],<br>\\n&quot;title&quot;: &quot;Text _2&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 4,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 725.1004028320312,<br>\\n&quot;1&quot;: 401.0733642578125<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 54<br>\\n},<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: false<br>\\n},<br>\\n&quot;order&quot;: 14,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 244,<br>\\n&quot;label&quot;: &quot;CLIP&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;text&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;link&quot;: 261,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;text&quot;<br>\\n},<br>\\n&quot;label&quot;: &quot;文本&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n109<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;条件&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 160,<br>\\n&quot;type&quot;: &quot;Text _O&quot;,<br>\\n&quot;pos&quot;: [<br>\\n425.1003863878501,<br>\\n411.0733671033876<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n210,<br>\\n76.00003814697266<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 4,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;STRING&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;links&quot;: [<br>\\n261<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;STRING&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;Text _O&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;photo, deformed, black and white, realism, disfigured, low contrast&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#322&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#533&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 158,<br>\\n&quot;type&quot;: &quot;Text _O&quot;,<br>\\n&quot;pos&quot;: [<br>\\n425.1003863878501,<br>\\n261.0733671033876<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n210,<br>\\n100<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 5,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;STRING&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;links&quot;: [<br>\\n258<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;STRING&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;Text _O&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;no humans,animal focus, looking at viewer, anime artwork, anime style, key visual, vibrant, studio anime, highly detailed&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#232&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#353&quot;<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 131,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 730,<br>\\n&quot;1&quot;: 300<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 54<br>\\n},<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: false<br>\\n},<br>\\n&quot;order&quot;: 21,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 243,<br>\\n&quot;label&quot;: &quot;CLIP&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;text&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;link&quot;: 260,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;text&quot;<br>\\n},<br>\\n&quot;label&quot;: &quot;文本&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n209<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;条件&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 71,<br>\\n&quot;type&quot;: &quot;CannyEdgePreprocessor&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1010,<br>\\n120<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n315,<br>\\n106<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 17,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 278,<br>\\n&quot;label&quot;: &quot;image&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n118,<br>\\n119<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;IMAGE&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CannyEdgePreprocessor&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n50,<br>\\n150,<br>\\n1024<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 13,<br>\\n&quot;type&quot;: &quot;ControlNetLoader&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1020,<br>\\n&quot;1&quot;: 570<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 300,<br>\\n&quot;1&quot;: 60<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 6,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONTROL_NET&quot;,<br>\\n&quot;type&quot;: &quot;CONTROL_NET&quot;,<br>\\n&quot;links&quot;: [<br>\\n16<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;ControlNet&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ControlNetLoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;controllora256\\\\control-lora-canny-rank256.safetensors&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 12,<br>\\n&quot;type&quot;: &quot;ControlNetApply&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1020,<br>\\n&quot;1&quot;: 680<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 300,<br>\\n&quot;1&quot;: 100<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 25,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;conditioning&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 209,<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;条件&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;control_net&quot;,<br>\\n&quot;type&quot;: &quot;CONTROL_NET&quot;,<br>\\n&quot;link&quot;: 16,<br>\\n&quot;slot_index&quot;: 1,<br>\\n&quot;label&quot;: &quot;ControlNet&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 119,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n21<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;条件&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ControlNetApply&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n0.8<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 3,<br>\\n&quot;type&quot;: &quot;LoadImage&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 494.5950012207031,<br>\\n&quot;1&quot;: -596.682373046875<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 480,<br>\\n&quot;1&quot;: 570<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 7,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n277<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;MASK&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;遮罩&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;LoadImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;cat1.jpg&quot;,<br>\\n&quot;image&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 166,<br>\\n&quot;type&quot;: &quot;Reroute&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1060,<br>\\n&quot;1&quot;: -10<br>\\n},<br>\\n&quot;size&quot;: [<br>\\n75,<br>\\n26<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 12,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;&quot;,<br>\\n&quot;type&quot;: &quot;<em>&quot;,<br>\\n&quot;link&quot;: 277<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n278,<br>\\n279,<br>\\n280<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;showOutputText&quot;: false,<br>\\n&quot;horizontal&quot;: false<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 21,<br>\\n&quot;type&quot;: &quot;KSampler&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1780,<br>\\n&quot;1&quot;: 510<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 320,<br>\\n&quot;1&quot;: 470<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 27,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 276,<br>\\n&quot;label&quot;: &quot;模型&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 24,<br>\\n&quot;label&quot;: &quot;正面条件&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 109,<br>\\n&quot;label&quot;: &quot;负面条件&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 111,<br>\\n&quot;label&quot;: &quot;Latent&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n31<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;Latent&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;KSampler&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n358881677137626,<br>\\n&quot;randomize&quot;,<br>\\n20,<br>\\n7,<br>\\n&quot;dpmpp_2m_sde&quot;,<br>\\n&quot;karras&quot;,<br>\\n0.7000000000000001<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 70,<br>\\n&quot;type&quot;: &quot;ImageScaleToTotalPixels&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1790,<br>\\n&quot;1&quot;: 250<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 310,<br>\\n&quot;1&quot;: 82<br>\\n},<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: false<br>\\n},<br>\\n&quot;order&quot;: 19,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 280,<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n110<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ImageScaleToTotalPixels&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;lanczos&quot;,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 27,<br>\\n&quot;type&quot;: &quot;VAEDecode&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1790,<br>\\n&quot;1&quot;: 130<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 300,<br>\\n&quot;1&quot;: 50<br>\\n},<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: false<br>\\n},<br>\\n&quot;order&quot;: 28,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;samples&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 31,<br>\\n&quot;label&quot;: &quot;Latent&quot;<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 273,<br>\\n&quot;label&quot;: &quot;VAE&quot;<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n281<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;label&quot;: &quot;图像&quot;<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEDecode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: []<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 168,<br>\\n&quot;type&quot;: &quot;Reroute&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 950,<br>\\n&quot;1&quot;: -10<br>\\n},<br>\\n&quot;size&quot;: [<br>\\n75,<br>\\n26<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 30,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;&quot;,<br>\\n&quot;type&quot;: &quot;</em>&quot;,<br>\\n&quot;link&quot;: 284<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n283<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;showOutputText&quot;: false,<br>\\n&quot;horizontal&quot;: false<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 167,<br>\\n&quot;type&quot;: &quot;Reroute&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 2060,<br>\\n&quot;1&quot;: -10<br>\\n},<br>\\n&quot;size&quot;: [<br>\\n75,<br>\\n26<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 29,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;&quot;,<br>\\n&quot;type&quot;: &quot;<em>&quot;,<br>\\n&quot;link&quot;: 281<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n284<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;showOutputText&quot;: false,<br>\\n&quot;horizontal&quot;: false<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 165,<br>\\n&quot;type&quot;: &quot;Reroute&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1580,<br>\\n&quot;1&quot;: -10<br>\\n},<br>\\n&quot;size&quot;: [<br>\\n82,<br>\\n26<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 20,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;&quot;,<br>\\n&quot;type&quot;: &quot;</em>&quot;,<br>\\n&quot;link&quot;: 275<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n276<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;showOutputText&quot;: true,<br>\\n&quot;horizontal&quot;: false<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 163,<br>\\n&quot;type&quot;: &quot;Reroute&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 1680,<br>\\n&quot;1&quot;: -10<br>\\n},<br>\\n&quot;size&quot;: [<br>\\n75,<br>\\n26<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 15,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;&quot;,<br>\\n&quot;type&quot;: &quot;<em>&quot;,<br>\\n&quot;link&quot;: 271<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;VAE&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;links&quot;: [<br>\\n272,<br>\\n273<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;showOutputText&quot;: true,<br>\\n&quot;horizontal&quot;: false<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 153,<br>\\n&quot;type&quot;: &quot;Note&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 20,<br>\\n&quot;1&quot;: -320<br>\\n},<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 370,<br>\\n&quot;1&quot;: 300<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 8,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [],<br>\\n&quot;outputs&quot;: [],<br>\\n&quot;properties&quot;: {<br>\\n&quot;text&quot;: &quot;&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;Text1：\\\\nAdding the typename of animal helps to improve accuracy, such as:\\\\nbritish Shorthair\\\\namerican Shorthair\\\\nYorkshire Terrier\\\\n\\\\nText2：\\\\nAdd Lora trigger\\\\n\\\\nCheckpoint：\\\\n<a href=\\"https://civitai.com/models/112902?modelVersionId=351306%5Cn%5CnLora%EF%BC%9A%5Cnhttps://civitai.com/models/137562/studioghibliredmond-studio-ghibli-lora-for-sd-xl%5Cn%5CnYou\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://civitai.com/models/112902?modelVersionId=351306\\\\n\\\\nLora：\\\\nhttps://civitai.com/models/137562/studioghibliredmond-studio-ghibli-lora-for-sd-xl\\\\n\\\\nYou</a> can change the Checkpoint and lora to get more new creative!\\\\n\\\\nany question let's wechat:78809161\\\\n&quot;<br>\\n],<br>\\n&quot;color&quot;: &quot;#432&quot;,<br>\\n&quot;bgcolor&quot;: &quot;#653&quot;<br>\\n}<br>\\n],<br>\\n&quot;links&quot;: [<br>\\n[<br>\\n16,<br>\\n13,<br>\\n0,<br>\\n12,<br>\\n1,<br>\\n&quot;CONTROL_NET&quot;<br>\\n],<br>\\n[<br>\\n19,<br>\\n18,<br>\\n0,<br>\\n15,<br>\\n2,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n20,<br>\\n16,<br>\\n0,<br>\\n15,<br>\\n1,<br>\\n&quot;CONTROL_NET&quot;<br>\\n],<br>\\n[<br>\\n21,<br>\\n12,<br>\\n0,<br>\\n15,<br>\\n0,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n23,<br>\\n18,<br>\\n0,<br>\\n20,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n24,<br>\\n15,<br>\\n0,<br>\\n21,<br>\\n1,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n31,<br>\\n21,<br>\\n0,<br>\\n27,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n74,<br>\\n1,<br>\\n1,<br>\\n2,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n75,<br>\\n10,<br>\\n0,<br>\\n18,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n76,<br>\\n10,<br>\\n0,<br>\\n17,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n77,<br>\\n1,<br>\\n2,<br>\\n27,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n78,<br>\\n1,<br>\\n1,<br>\\n29,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n79,<br>\\n1,<br>\\n0,<br>\\n43,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n80,<br>\\n4,<br>\\n0,<br>\\n43,<br>\\n2,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n81,<br>\\n25,<br>\\n0,<br>\\n43,<br>\\n3,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n82,<br>\\n10,<br>\\n0,<br>\\n39,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n83,<br>\\n1,<br>\\n2,<br>\\n44,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n84,<br>\\n10,<br>\\n0,<br>\\n47,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n85,<br>\\n1,<br>\\n0,<br>\\n21,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n86,<br>\\n4,<br>\\n0,<br>\\n21,<br>\\n2,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n87,<br>\\n25,<br>\\n0,<br>\\n21,<br>\\n3,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n88,<br>\\n1,<br>\\n1,<br>\\n4,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n89,<br>\\n1,<br>\\n1,<br>\\n52,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n90,<br>\\n10,<br>\\n0,<br>\\n60,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n91,<br>\\n1,<br>\\n0,<br>\\n63,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n92,<br>\\n4,<br>\\n0,<br>\\n63,<br>\\n2,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n93,<br>\\n25,<br>\\n0,<br>\\n63,<br>\\n3,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n94,<br>\\n10,<br>\\n0,<br>\\n67,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n95,<br>\\n10,<br>\\n0,<br>\\n50,<br>\\n1,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n96,<br>\\n1,<br>\\n2,<br>\\n25,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n97,<br>\\n10,<br>\\n0,<br>\\n7,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n98,<br>\\n10,<br>\\n0,<br>\\n45,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n99,<br>\\n1,<br>\\n2,<br>\\n64,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n100,<br>\\n1,<br>\\n1,<br>\\n6,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n101,<br>\\n1,<br>\\n1,<br>\\n32,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n102,<br>\\n1,<br>\\n1,<br>\\n54,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n109,<br>\\n4,<br>\\n0,<br>\\n21,<br>\\n2,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n110,<br>\\n70,<br>\\n0,<br>\\n25,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n111,<br>\\n25,<br>\\n0,<br>\\n21,<br>\\n3,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n118,<br>\\n71,<br>\\n0,<br>\\n19,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n119,<br>\\n71,<br>\\n0,<br>\\n12,<br>\\n2,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n209,<br>\\n131,<br>\\n0,<br>\\n12,<br>\\n0,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n243,<br>\\n154,<br>\\n1,<br>\\n131,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n244,<br>\\n154,<br>\\n1,<br>\\n4,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n252,<br>\\n1,<br>\\n0,<br>\\n154,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n253,<br>\\n1,<br>\\n1,<br>\\n154,<br>\\n1,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n254,<br>\\n156,<br>\\n0,<br>\\n159,<br>\\n0,<br>\\n&quot;STRING&quot;<br>\\n],<br>\\n[<br>\\n257,<br>\\n152,<br>\\n0,<br>\\n156,<br>\\n0,<br>\\n&quot;STRING&quot;<br>\\n],<br>\\n[<br>\\n258,<br>\\n158,<br>\\n0,<br>\\n156,<br>\\n1,<br>\\n&quot;STRING&quot;<br>\\n],<br>\\n[<br>\\n259,<br>\\n157,<br>\\n0,<br>\\n159,<br>\\n1,<br>\\n&quot;STRING&quot;<br>\\n],<br>\\n[<br>\\n260,<br>\\n159,<br>\\n0,<br>\\n131,<br>\\n1,<br>\\n&quot;STRING&quot;<br>\\n],<br>\\n[<br>\\n261,<br>\\n160,<br>\\n0,<br>\\n4,<br>\\n1,<br>\\n&quot;STRING&quot;<br>\\n],<br>\\n[<br>\\n270,<br>\\n1,<br>\\n2,<br>\\n162,<br>\\n0,<br>\\n&quot;</em>&quot;<br>\\n],<br>\\n[<br>\\n271,<br>\\n162,<br>\\n0,<br>\\n163,<br>\\n0,<br>\\n&quot;<em>&quot;<br>\\n],<br>\\n[<br>\\n272,<br>\\n163,<br>\\n0,<br>\\n25,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n273,<br>\\n163,<br>\\n0,<br>\\n27,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n274,<br>\\n154,<br>\\n0,<br>\\n164,<br>\\n0,<br>\\n&quot;</em>&quot;<br>\\n],<br>\\n[<br>\\n275,<br>\\n164,<br>\\n0,<br>\\n165,<br>\\n0,<br>\\n&quot;<em>&quot;<br>\\n],<br>\\n[<br>\\n276,<br>\\n165,<br>\\n0,<br>\\n21,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n277,<br>\\n3,<br>\\n0,<br>\\n166,<br>\\n0,<br>\\n&quot;</em>&quot;<br>\\n],<br>\\n[<br>\\n278,<br>\\n166,<br>\\n0,<br>\\n71,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n279,<br>\\n166,<br>\\n0,<br>\\n18,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n280,<br>\\n166,<br>\\n0,<br>\\n70,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n281,<br>\\n27,<br>\\n0,<br>\\n167,<br>\\n0,<br>\\n&quot;<em>&quot;<br>\\n],<br>\\n[<br>\\n283,<br>\\n168,<br>\\n0,<br>\\n123,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n284,<br>\\n167,<br>\\n0,<br>\\n168,<br>\\n0,<br>\\n&quot;</em>&quot;<br>\\n]<br>\\n],<br>\\n&quot;groups&quot;: [<br>\\n{<br>\\n&quot;title&quot;: &quot;Prompt&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n416,<br>\\n20,<br>\\n548,<br>\\n602<br>\\n],<br>\\n&quot;color&quot;: &quot;#3f789e&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;flags&quot;: {}<br>\\n},<br>\\n{<br>\\n&quot;title&quot;: &quot;Chectpoint&amp;LoRA&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n16,<br>\\n20,<br>\\n375,<br>\\n605<br>\\n],<br>\\n&quot;color&quot;: &quot;#3f789e&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;flags&quot;: {}<br>\\n},<br>\\n{<br>\\n&quot;title&quot;: &quot;Ksampler&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n1713,<br>\\n20,<br>\\n437,<br>\\n1075<br>\\n],<br>\\n&quot;color&quot;: &quot;#3f789e&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;flags&quot;: {}<br>\\n},<br>\\n{<br>\\n&quot;title&quot;: &quot;I/O&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n452,<br>\\n-683,<br>\\n1129,<br>\\n667<br>\\n],<br>\\n&quot;color&quot;: &quot;#3f789e&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;flags&quot;: {}<br>\\n},<br>\\n{<br>\\n&quot;title&quot;: &quot;controlnet&quot;,<br>\\n&quot;bounding&quot;: [<br>\\n983,<br>\\n20,<br>\\n717,<br>\\n1073<br>\\n],<br>\\n&quot;color&quot;: &quot;#3f789e&quot;,<br>\\n&quot;font_size&quot;: 24,<br>\\n&quot;flags&quot;: {}<br>\\n}<br>\\n],<br>\\n&quot;config&quot;: {},<br>\\n&quot;extra&quot;: {<br>\\n&quot;ds&quot;: {<br>\\n&quot;scale&quot;: 0.620921323059155,<br>\\n&quot;offset&quot;: [<br>\\n672.6848120841853,<br>\\n698.7132675632573<br>\\n]<br>\\n}<br>\\n},<br>\\n&quot;version&quot;: 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Download/workflow-animal-2-anime-NoE7zH8tJ4KlrXbFr6AG-willling-openart.ai.json","value":{"title":"workflow-animal-2-anime-NoE7zH8tJ4KlrXbFr6AG-willling-openart.ai.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Download/workflow-animal-2-anime-NoE7zH8tJ4KlrXbFr6AG-willling-openart.ai.json","outlink":[],"backlink":[]}}],"links":[]}}}`);export{i as comp,p as data};

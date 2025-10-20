import{_ as r,c as b,d as e,r as t,o as s}from"./app-CMpzP5QO.js";const i={};function o(l,a){const n=t("VueFlow");return s(),b("div",null,[e(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 71,
  "last_link_id": 483,
  "nodes": [
    {
      "id": 13,
      "type": "LoadImage",
      "pos": [
        140,
        660
      ],
      "size": [
        680,
        780
      ],
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            449
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "MASK",
          "type": "MASK",
          "links": null,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "LoadImage"
      },
      "widgets_values": [
        "ComfyUI_temp_ayyqd_00003_.png",
        "image"
      ]
    },
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": [
        480,
        240
      ],
      "size": [
        340,
        50
      ],
      "flags": {},
      "order": 15,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 125
        },
        {
          "name": "text",
          "type": "STRING",
          "link": 469,
          "widget": {
            "name": "text"
          }
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            453
          ],
          "slot_index": 0
        }
      ],
      "title": "Positive",
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "watercolor"
      ]
    },
    {
      "id": 4,
      "type": "CheckpointLoaderSimple",
      "pos": [
        480,
        90
      ],
      "size": [
        340,
        100
      ],
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            454,
            455
          ],
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            124,
            125
          ],
          "slot_index": 1
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            8,
            448
          ],
          "slot_index": 2
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimple"
      },
      "widgets_values": [
        "cosxl_edit.safetensors"
      ]
    },
    {
      "id": 60,
      "type": "SamplerCustomAdvanced",
      "pos": [
        1220,
        390
      ],
      "size": [
        370,
        120
      ],
      "flags": {},
      "order": 18,
      "mode": 0,
      "inputs": [
        {
          "name": "noise",
          "type": "NOISE",
          "link": 440,
          "slot_index": 0
        },
        {
          "name": "guider",
          "type": "GUIDER",
          "link": 441,
          "slot_index": 1
        },
        {
          "name": "sampler",
          "type": "SAMPLER",
          "link": 442,
          "slot_index": 2
        },
        {
          "name": "sigmas",
          "type": "SIGMAS",
          "link": 443,
          "slot_index": 3
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 444,
          "slot_index": 4
        }
      ],
      "outputs": [
        {
          "name": "output",
          "type": "LATENT",
          "links": [
            450
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "denoised_output",
          "type": "LATENT",
          "links": null,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "SamplerCustomAdvanced"
      }
    },
    {
      "id": 55,
      "type": "BasicScheduler",
      "pos": [
        1220,
        220
      ],
      "size": [
        370,
        120
      ],
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 454
        }
      ],
      "outputs": [
        {
          "name": "SIGMAS",
          "type": "SIGMAS",
          "links": [
            443
          ],
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "BasicScheduler"
      },
      "widgets_values": [
        "normal",
        20,
        1
      ]
    },
    {
      "id": 52,
      "type": "KSamplerSelect",
      "pos": [
        1220,
        90
      ],
      "size": [
        370,
        80
      ],
      "flags": {},
      "order": 2,
      "mode": 0,
      "outputs": [
        {
          "name": "SAMPLER",
          "type": "SAMPLER",
          "links": [
            442
          ],
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "KSamplerSelect"
      },
      "widgets_values": [
        "euler"
      ]
    },
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": [
        1220,
        560
      ],
      "size": [
        370,
        50
      ],
      "flags": {
        "collapsed": false
      },
      "order": 19,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 450
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 8
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            419
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      }
    },
    {
      "id": 53,
      "type": "RandomNoise",
      "pos": [
        840,
        500
      ],
      "size": [
        360,
        110
      ],
      "flags": {},
      "order": 3,
      "mode": 0,
      "outputs": [
        {
          "name": "NOISE",
          "type": "NOISE",
          "links": [
            440
          ],
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "RandomNoise"
      },
      "widgets_values": [
        566363035823543,
        "fixed"
      ]
    },
    {
      "id": 59,
      "type": "DualCFGGuider",
      "pos": [
        840,
        270
      ],
      "size": [
        360,
        180
      ],
      "flags": {},
      "order": 17,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 455
        },
        {
          "name": "cond1",
          "type": "CONDITIONING",
          "link": 437
        },
        {
          "name": "cond2",
          "type": "CONDITIONING",
          "link": 438
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 452
        }
      ],
      "outputs": [
        {
          "name": "GUIDER",
          "type": "GUIDER",
          "links": [
            441
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "DualCFGGuider"
      },
      "widgets_values": [
        5,
        1.5
      ]
    },
    {
      "id": 58,
      "type": "InstructPixToPixConditioning",
      "pos": [
        840,
        90
      ],
      "size": [
        360,
        130
      ],
      "flags": {},
      "order": 16,
      "mode": 0,
      "inputs": [
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 453
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 451
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 448
        },
        {
          "name": "pixels",
          "type": "IMAGE",
          "link": 449
        }
      ],
      "outputs": [
        {
          "name": "positive",
          "type": "CONDITIONING",
          "links": [
            437
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "links": [
            438
          ],
          "shape": 3,
          "slot_index": 1
        },
        {
          "name": "latent",
          "type": "LATENT",
          "links": [
            444
          ],
          "shape": 3,
          "slot_index": 2
        }
      ],
      "properties": {
        "Node name for S&R": "InstructPixToPixConditioning"
      }
    },
    {
      "id": 41,
      "type": "PreviewImage",
      "pos": [
        840,
        660
      ],
      "size": [
        750,
        780
      ],
      "flags": {},
      "order": 20,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 419
        }
      ],
      "title": "CosXL Edit",
      "properties": {
        "Node name for S&R": "PreviewImage"
      }
    },
    {
      "id": 66,
      "type": "ConcatText_Zho",
      "pos": [
        140,
        500
      ],
      "size": {
        "0": 320,
        "1": 70
      },
      "flags": {
        "collapsed": true
      },
      "order": 11,
      "mode": 0,
      "inputs": [
        {
          "name": "text_1",
          "type": "STRING",
          "link": 477,
          "widget": {
            "name": "text_1"
          },
          "slot_index": 0
        },
        {
          "name": "text_2",
          "type": "STRING",
          "link": 478,
          "widget": {
            "name": "text_2"
          }
        }
      ],
      "outputs": [
        {
          "name": "text",
          "type": "STRING",
          "links": [
            463,
            482
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ConcatText_Zho"
      },
      "widgets_values": [
        "high quality",
        ""
      ]
    },
    {
      "id": 71,
      "type": "Any Switch (rgthree)",
      "pos": [
        480,
        500
      ],
      "size": [
        340,
        110
      ],
      "flags": {
        "collapsed": false
      },
      "order": 13,
      "mode": 0,
      "inputs": [
        {
          "name": "any_01",
          "type": "STRING",
          "link": 481,
          "dir": 3
        },
        {
          "name": "any_02",
          "type": "STRING",
          "link": 482,
          "dir": 3
        },
        {
          "name": "any_03",
          "type": "STRING",
          "link": null,
          "dir": 3
        },
        {
          "name": "any_04",
          "type": "STRING",
          "link": null,
          "dir": 3
        },
        {
          "name": "any_05",
          "type": "STRING",
          "link": null,
          "dir": 3
        }
      ],
      "outputs": [
        {
          "name": "*",
          "type": "STRING",
          "links": [
            483
          ],
          "shape": 3,
          "dir": 4,
          "label": "STRING",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "Any Switch (rgthree)"
      }
    },
    {
      "id": 7,
      "type": "CLIPTextEncode",
      "pos": [
        480,
        340
      ],
      "size": [
        340,
        110
      ],
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 124
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            451,
            452
          ],
          "slot_index": 0
        }
      ],
      "title": "Negative",
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "low quality"
      ]
    },
    {
      "id": 70,
      "type": "Fast Bypasser (rgthree)",
      "pos": {
        "0": 140,
        "1": 90,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0
      },
      "size": [
        320,
        170
      ],
      "flags": {},
      "order": 10,
      "mode": 0,
      "inputs": [
        {
          "name": "🎨 ArtistsGallery_Zho",
          "type": "*",
          "link": 474,
          "dir": 3
        },
        {
          "name": "🎨 MovementsGallery_Zho",
          "type": "*",
          "link": 475,
          "dir": 3
        },
        {
          "name": "🎨 StylesGallery_Zho",
          "type": "*",
          "link": 476,
          "dir": 3
        },
        {
          "name": "",
          "type": "*",
          "link": null,
          "dir": 3
        }
      ],
      "outputs": [
        {
          "name": "OPT_CONNECTION",
          "type": "*",
          "links": null,
          "dir": 4
        }
      ],
      "properties": {
        "toggleRestriction": "default"
      }
    },
    {
      "id": 64,
      "type": "StylesImage_Zho",
      "pos": [
        -200,
        1020
      ],
      "size": {
        "0": 320,
        "1": 420
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "outputs": [
        {
          "name": "name",
          "type": "STRING",
          "links": [
            476,
            479
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "image",
          "type": "IMAGE",
          "links": null,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "StylesImage_Zho"
      },
      "widgets_values": [
        "Watercolor.png",
        1.04
      ]
    },
    {
      "id": 69,
      "type": "PrimitiveNode",
      "pos": [
        140,
        310
      ],
      "size": [
        320,
        140
      ],
      "flags": {},
      "order": 5,
      "mode": 0,
      "outputs": [
        {
          "name": "STRING",
          "type": "STRING",
          "links": [
            480
          ],
          "slot_index": 0,
          "widget": {
            "name": "text_2"
          }
        }
      ],
      "title": "Prompt",
      "properties": {
        "Run widget replace on values": false
      },
      "widgets_values": [
        "cute"
      ]
    },
    {
      "id": 68,
      "type": "ConcatText_Zho",
      "pos": [
        140,
        610
      ],
      "size": [
        340,
        60
      ],
      "flags": {
        "collapsed": true
      },
      "order": 14,
      "mode": 0,
      "inputs": [
        {
          "name": "text_1",
          "type": "STRING",
          "link": 483,
          "widget": {
            "name": "text_1"
          },
          "slot_index": 0
        },
        {
          "name": "text_2",
          "type": "STRING",
          "link": 480,
          "widget": {
            "name": "text_2"
          },
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "text",
          "type": "STRING",
          "links": [
            469
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ConcatText_Zho"
      },
      "widgets_values": [
        "",
        "cute"
      ]
    },
    {
      "id": 67,
      "type": "ConcatText_Zho",
      "pos": [
        140,
        556
      ],
      "size": {
        "0": 320,
        "1": 54
      },
      "flags": {
        "collapsed": true
      },
      "order": 12,
      "mode": 0,
      "inputs": [
        {
          "name": "text_1",
          "type": "STRING",
          "link": 463,
          "widget": {
            "name": "text_1"
          },
          "slot_index": 0
        },
        {
          "name": "text_2",
          "type": "STRING",
          "link": 479,
          "widget": {
            "name": "text_2"
          },
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "text",
          "type": "STRING",
          "links": [
            481
          ],
          "shape": 3,
          "slot_index": 0
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
      "id": 63,
      "type": "MovementsImage_Zho",
      "pos": [
        -200,
        550
      ],
      "size": {
        "0": 320,
        "1": 420
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "outputs": [
        {
          "name": "name",
          "type": "STRING",
          "links": [
            475,
            478
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "image",
          "type": "IMAGE",
          "links": null,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "MovementsImage_Zho"
      },
      "widgets_values": [
        "Generative Art.png",
        1.2
      ]
    },
    {
      "id": 62,
      "type": "ArtistsImage_Zho",
      "pos": [
        -200,
        90
      ],
      "size": {
        "0": 320,
        "1": 410
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "outputs": [
        {
          "name": "name",
          "type": "STRING",
          "links": [
            474,
            477
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "image",
          "type": "IMAGE",
          "links": null,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "ArtistsImage_Zho"
      },
      "widgets_values": [
        "James Gilleard.png",
        0.53
      ]
    }
  ],
  "links": [
    [
      8,
      4,
      2,
      8,
      1,
      "VAE"
    ],
    [
      124,
      4,
      1,
      7,
      0,
      "CLIP"
    ],
    [
      125,
      4,
      1,
      6,
      0,
      "CLIP"
    ],
    [
      419,
      8,
      0,
      41,
      0,
      "IMAGE"
    ],
    [
      437,
      58,
      0,
      59,
      1,
      "CONDITIONING"
    ],
    [
      438,
      58,
      1,
      59,
      2,
      "CONDITIONING"
    ],
    [
      440,
      53,
      0,
      60,
      0,
      "NOISE"
    ],
    [
      441,
      59,
      0,
      60,
      1,
      "GUIDER"
    ],
    [
      442,
      52,
      0,
      60,
      2,
      "SAMPLER"
    ],
    [
      443,
      55,
      0,
      60,
      3,
      "SIGMAS"
    ],
    [
      444,
      58,
      2,
      60,
      4,
      "LATENT"
    ],
    [
      448,
      4,
      2,
      58,
      2,
      "VAE"
    ],
    [
      449,
      13,
      0,
      58,
      3,
      "IMAGE"
    ],
    [
      450,
      60,
      0,
      8,
      0,
      "LATENT"
    ],
    [
      451,
      7,
      0,
      58,
      1,
      "CONDITIONING"
    ],
    [
      452,
      7,
      0,
      59,
      3,
      "CONDITIONING"
    ],
    [
      453,
      6,
      0,
      58,
      0,
      "CONDITIONING"
    ],
    [
      454,
      4,
      0,
      55,
      0,
      "MODEL"
    ],
    [
      455,
      4,
      0,
      59,
      0,
      "MODEL"
    ],
    [
      463,
      66,
      0,
      67,
      0,
      "STRING"
    ],
    [
      469,
      68,
      0,
      6,
      1,
      "STRING"
    ],
    [
      474,
      62,
      0,
      70,
      0,
      "*"
    ],
    [
      475,
      63,
      0,
      70,
      1,
      "*"
    ],
    [
      476,
      64,
      0,
      70,
      2,
      "*"
    ],
    [
      477,
      62,
      0,
      66,
      0,
      "STRING"
    ],
    [
      478,
      63,
      0,
      66,
      1,
      "STRING"
    ],
    [
      479,
      64,
      0,
      67,
      1,
      "STRING"
    ],
    [
      480,
      69,
      0,
      68,
      1,
      "STRING"
    ],
    [
      481,
      67,
      0,
      71,
      0,
      "*"
    ],
    [
      482,
      66,
      0,
      71,
      1,
      "STRING"
    ],
    [
      483,
      71,
      0,
      68,
      0,
      "STRING"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "groupNodes": {
      "IP2PSampler": {
        "nodes": [
          {
            "type": "KSamplerSelect",
            "pos": [
              912,
              1536
            ],
            "size": {
              "0": 315,
              "1": 58
            },
            "flags": {},
            "order": 6,
            "mode": 0,
            "outputs": [
              {
                "name": "SAMPLER",
                "type": "SAMPLER",
                "links": [],
                "shape": 3
              }
            ],
            "properties": {
              "Node name for S&R": "KSamplerSelect"
            },
            "widgets_values": [
              "euler"
            ],
            "index": 0
          },
          {
            "type": "RandomNoise",
            "pos": [
              912,
              1200
            ],
            "size": {
              "0": 315,
              "1": 82
            },
            "flags": {},
            "order": 7,
            "mode": 0,
            "outputs": [
              {
                "name": "NOISE",
                "type": "NOISE",
                "links": [],
                "shape": 3
              }
            ],
            "properties": {
              "Node name for S&R": "RandomNoise"
            },
            "widgets_values": [
              156680208700303,
              "fixed"
            ],
            "index": 1
          },
          {
            "type": "Reroute",
            "pos": [
              720,
              1488
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
                "link": null
              }
            ],
            "outputs": [
              {
                "name": "",
                "type": "*",
                "links": null
              }
            ],
            "properties": {
              "showOutputText": false,
              "horizontal": false
            },
            "index": 2
          },
          {
            "type": "BasicScheduler",
            "pos": [
              912,
              1632
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
                "name": "model",
                "type": "MODEL",
                "link": null
              }
            ],
            "outputs": [
              {
                "name": "SIGMAS",
                "type": "SIGMAS",
                "links": [],
                "shape": 3
              }
            ],
            "properties": {
              "Node name for S&R": "BasicScheduler"
            },
            "widgets_values": [
              "normal",
              20,
              1
            ],
            "index": 3
          },
          {
            "type": "Reroute",
            "pos": [
              575,
              1344
            ],
            "size": [
              75,
              26
            ],
            "flags": {},
            "order": 14,
            "mode": 0,
            "inputs": [
              {
                "name": "",
                "type": "*",
                "link": null
              }
            ],
            "outputs": [
              {
                "name": "",
                "type": "*",
                "links": null
              }
            ],
            "properties": {
              "showOutputText": false,
              "horizontal": false
            },
            "index": 4
          },
          {
            "type": "Reroute",
            "pos": [
              570,
              1386
            ],
            "size": [
              75,
              26
            ],
            "flags": {},
            "order": 13,
            "mode": 0,
            "inputs": [
              {
                "name": "",
                "type": "*",
                "link": null
              }
            ],
            "outputs": [
              {
                "name": "",
                "type": "*",
                "links": null
              }
            ],
            "properties": {
              "showOutputText": false,
              "horizontal": false
            },
            "index": 5
          },
          {
            "type": "InstructPixToPixConditioning",
            "pos": [
              672,
              1344
            ],
            "size": {
              "0": 235.1999969482422,
              "1": 86
            },
            "flags": {},
            "order": 15,
            "mode": 0,
            "inputs": [
              {
                "name": "positive",
                "type": "CONDITIONING",
                "link": null
              },
              {
                "name": "negative",
                "type": "CONDITIONING",
                "link": null
              },
              {
                "name": "vae",
                "type": "VAE",
                "link": null
              },
              {
                "name": "pixels",
                "type": "IMAGE",
                "link": null
              }
            ],
            "outputs": [
              {
                "name": "positive",
                "type": "CONDITIONING",
                "links": [],
                "shape": 3,
                "slot_index": 0
              },
              {
                "name": "negative",
                "type": "CONDITIONING",
                "links": [],
                "shape": 3,
                "slot_index": 1
              },
              {
                "name": "latent",
                "type": "LATENT",
                "links": [],
                "shape": 3,
                "slot_index": 2
              }
            ],
            "properties": {
              "Node name for S&R": "InstructPixToPixConditioning"
            },
            "index": 6
          },
          {
            "type": "DualCFGGuider",
            "pos": [
              912,
              1344
            ],
            "size": {
              "0": 315,
              "1": 142
            },
            "flags": {},
            "order": 16,
            "mode": 0,
            "inputs": [
              {
                "name": "model",
                "type": "MODEL",
                "link": null
              },
              {
                "name": "cond1",
                "type": "CONDITIONING",
                "link": null
              },
              {
                "name": "cond2",
                "type": "CONDITIONING",
                "link": null
              },
              {
                "name": "negative",
                "type": "CONDITIONING",
                "link": null
              }
            ],
            "outputs": [
              {
                "name": "GUIDER",
                "type": "GUIDER",
                "links": [],
                "shape": 3,
                "slot_index": 0
              }
            ],
            "properties": {
              "Node name for S&R": "DualCFGGuider"
            },
            "widgets_values": [
              3,
              1.5
            ],
            "index": 7
          },
          {
            "type": "SamplerCustomAdvanced",
            "pos": [
              1296,
              1200
            ],
            "size": {
              "0": 355.20001220703125,
              "1": 106
            },
            "flags": {},
            "order": 17,
            "mode": 0,
            "inputs": [
              {
                "name": "noise",
                "type": "NOISE",
                "link": null,
                "slot_index": 0
              },
              {
                "name": "guider",
                "type": "GUIDER",
                "link": null,
                "slot_index": 1
              },
              {
                "name": "sampler",
                "type": "SAMPLER",
                "link": null,
                "slot_index": 2
              },
              {
                "name": "sigmas",
                "type": "SIGMAS",
                "link": null,
                "slot_index": 3
              },
              {
                "name": "latent_image",
                "type": "LATENT",
                "link": null,
                "slot_index": 4
              }
            ],
            "outputs": [
              {
                "name": "output",
                "type": "LATENT",
                "links": [],
                "shape": 3,
                "slot_index": 0
              },
              {
                "name": "denoised_output",
                "type": "LATENT",
                "links": null,
                "shape": 3
              }
            ],
            "properties": {
              "Node name for S&R": "SamplerCustomAdvanced"
            },
            "index": 8
          }
        ],
        "links": [
          [
            null,
            0,
            2,
            0,
            4,
            "MODEL"
          ],
          [
            2,
            0,
            3,
            0,
            26,
            "MODEL"
          ],
          [
            null,
            0,
            5,
            0,
            7,
            "CONDITIONING"
          ],
          [
            null,
            0,
            4,
            0,
            6,
            "CONDITIONING"
          ],
          [
            4,
            0,
            6,
            0,
            35,
            "CONDITIONING"
          ],
          [
            5,
            0,
            6,
            1,
            29,
            "CONDITIONING"
          ],
          [
            null,
            2,
            6,
            2,
            4,
            "VAE"
          ],
          [
            null,
            0,
            6,
            3,
            13,
            "IMAGE"
          ],
          [
            2,
            0,
            7,
            0,
            26,
            "MODEL"
          ],
          [
            6,
            0,
            7,
            1,
            33,
            "CONDITIONING"
          ],
          [
            6,
            1,
            7,
            2,
            33,
            "CONDITIONING"
          ],
          [
            5,
            0,
            7,
            3,
            29,
            "CONDITIONING"
          ],
          [
            1,
            0,
            8,
            0,
            19,
            "NOISE"
          ],
          [
            7,
            0,
            8,
            1,
            28,
            "GUIDER"
          ],
          [
            0,
            0,
            8,
            2,
            20,
            "SAMPLER"
          ],
          [
            3,
            0,
            8,
            3,
            21,
            "SIGMAS"
          ],
          [
            6,
            2,
            8,
            4,
            33,
            "LATENT"
          ]
        ],
        "external": [
          [
            {
              "type": "SamplerCustomAdvanced",
              "pos": [
                1296,
                1200
              ],
              "size": {
                "0": 355.20001220703125,
                "1": 106
              },
              "flags": {},
              "order": 17,
              "mode": 0,
              "inputs": [
                {
                  "name": "noise",
                  "type": "NOISE",
                  "link": null,
                  "slot_index": 0
                },
                {
                  "name": "guider",
                  "type": "GUIDER",
                  "link": null,
                  "slot_index": 1
                },
                {
                  "name": "sampler",
                  "type": "SAMPLER",
                  "link": null,
                  "slot_index": 2
                },
                {
                  "name": "sigmas",
                  "type": "SIGMAS",
                  "link": null,
                  "slot_index": 3
                },
                {
                  "name": "latent_image",
                  "type": "LATENT",
                  "link": null,
                  "slot_index": 4
                }
              ],
              "outputs": [
                {
                  "name": "output",
                  "type": "LATENT",
                  "links": [],
                  "shape": 3,
                  "slot_index": 0
                },
                {
                  "name": "denoised_output",
                  "type": "LATENT",
                  "links": null,
                  "shape": 3
                }
              ],
              "properties": {
                "Node name for S&R": "SamplerCustomAdvanced"
              },
              "index": 8
            },
            0,
            "LATENT"
          ]
        ],
        "config": {
          "0": {},
          "1": {},
          "2": {
            "input": {
              "MODEL": {
                "name": "model"
              }
            }
          },
          "3": {},
          "4": {
            "input": {
              "CONDITIONING": {
                "name": "positive"
              }
            }
          },
          "5": {
            "input": {
              "CONDITIONING": {
                "name": "negative"
              }
            }
          },
          "6": {},
          "7": {
            "input": {
              "cfg_conds": {
                "name": "cfg_text"
              },
              "cfg_cond2_negative": {
                "name": "cfg_image"
              }
            }
          },
          "8": {}
        }
      }
    }
  },
  "version": 0.4
}
`})])}const d=r(i,[["render",o]]),m=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/CosXL%20Edit%20_%20ArtGallery%201.0%E3%80%90Zho%E3%80%91.json.html","title":"CosXL Edit _ ArtGallery 1.0【Zho】.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 71, \\"last_link_id\\": 483, \\"nodes\\": [ { \\"id\\": 13, \\"type\\": \\"LoadImage\\", \\"pos\\": [ 140, 660 ], \\"size\\": [ 680, 780 ], \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0, \\"outputs\\": ...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/CosXL%20Edit%20_%20ArtGallery%201.0%E3%80%90Zho%E3%80%91.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 71, \\"last_link_id\\": 483, \\"nodes\\": [ { \\"id\\": 13, \\"type\\": \\"LoadImage\\", \\"pos\\": [ 140, 660 ], \\"size\\": [ 680, 780 ], \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0, \\"outputs\\": ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"layout":"Layout"},"git":{},"readingTime":{"minutes":6.53,"words":1958},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/CosXL Edit + ArtGallery 1.0【Zho】.json","excerpt":"<p>{<br>\\n\\"last_node_id\\": 71,<br>\\n\\"last_link_id\\": 483,<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": 13,<br>\\n\\"type\\": \\"LoadImage\\",<br>\\n\\"pos\\": [<br>\\n140,<br>\\n660<br>\\n],<br>\\n\\"size\\": [<br>\\n680,<br>\\n780<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 0,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n449<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"ComfyUI_temp_ayyqd_00003_.png\\",<br>\\n\\"image\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 6,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n480,<br>\\n240<br>\\n],<br>\\n\\"size\\": [<br>\\n340,<br>\\n50<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 15,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 125<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"text\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 469,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text\\"<br>\\n}<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n453<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"title\\": \\"Positive\\",<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"watercolor\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 4,<br>\\n\\"type\\": \\"CheckpointLoaderSimple\\",<br>\\n\\"pos\\": [<br>\\n480,<br>\\n90<br>\\n],<br>\\n\\"size\\": [<br>\\n340,<br>\\n100<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 1,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n454,<br>\\n455<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n124,<br>\\n125<br>\\n],<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n8,<br>\\n448<br>\\n],<br>\\n\\"slot_index\\": 2<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"cosxl_edit.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 60,<br>\\n\\"type\\": \\"SamplerCustomAdvanced\\",<br>\\n\\"pos\\": [<br>\\n1220,<br>\\n390<br>\\n],<br>\\n\\"size\\": [<br>\\n370,<br>\\n120<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 18,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"noise\\",<br>\\n\\"type\\": \\"NOISE\\",<br>\\n\\"link\\": 440,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"guider\\",<br>\\n\\"type\\": \\"GUIDER\\",<br>\\n\\"link\\": 441,<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"sampler\\",<br>\\n\\"type\\": \\"SAMPLER\\",<br>\\n\\"link\\": 442,<br>\\n\\"slot_index\\": 2<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"sigmas\\",<br>\\n\\"type\\": \\"SIGMAS\\",<br>\\n\\"link\\": 443,<br>\\n\\"slot_index\\": 3<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 444,<br>\\n\\"slot_index\\": 4<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"output\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n450<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"denoised_output\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"SamplerCustomAdvanced\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 55,<br>\\n\\"type\\": \\"BasicScheduler\\",<br>\\n\\"pos\\": [<br>\\n1220,<br>\\n220<br>\\n],<br>\\n\\"size\\": [<br>\\n370,<br>\\n120<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 8,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 454<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"SIGMAS\\",<br>\\n\\"type\\": \\"SIGMAS\\",<br>\\n\\"links\\": [<br>\\n443<br>\\n],<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"BasicScheduler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"normal\\",<br>\\n20,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 52,<br>\\n\\"type\\": \\"KSamplerSelect\\",<br>\\n\\"pos\\": [<br>\\n1220,<br>\\n90<br>\\n],<br>\\n\\"size\\": [<br>\\n370,<br>\\n80<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 2,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"SAMPLER\\",<br>\\n\\"type\\": \\"SAMPLER\\",<br>\\n\\"links\\": [<br>\\n442<br>\\n],<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSamplerSelect\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"euler\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 8,<br>\\n\\"type\\": \\"VAEDecode\\",<br>\\n\\"pos\\": [<br>\\n1220,<br>\\n560<br>\\n],<br>\\n\\"size\\": [<br>\\n370,<br>\\n50<br>\\n],<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": false<br>\\n},<br>\\n\\"order\\": 19,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 450<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 8<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n419<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 53,<br>\\n\\"type\\": \\"RandomNoise\\",<br>\\n\\"pos\\": [<br>\\n840,<br>\\n500<br>\\n],<br>\\n\\"size\\": [<br>\\n360,<br>\\n110<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"NOISE\\",<br>\\n\\"type\\": \\"NOISE\\",<br>\\n\\"links\\": [<br>\\n440<br>\\n],<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"RandomNoise\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n566363035823543,<br>\\n\\"fixed\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 59,<br>\\n\\"type\\": \\"DualCFGGuider\\",<br>\\n\\"pos\\": [<br>\\n840,<br>\\n270<br>\\n],<br>\\n\\"size\\": [<br>\\n360,<br>\\n180<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 17,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 455<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"cond1\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 437<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"cond2\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 438<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 452<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"GUIDER\\",<br>\\n\\"type\\": \\"GUIDER\\",<br>\\n\\"links\\": [<br>\\n441<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"DualCFGGuider\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n5,<br>\\n1.5<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 58,<br>\\n\\"type\\": \\"InstructPixToPixConditioning\\",<br>\\n\\"pos\\": [<br>\\n840,<br>\\n90<br>\\n],<br>\\n\\"size\\": [<br>\\n360,<br>\\n130<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 16,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 453<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 451<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 448<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"pixels\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 449<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n437<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n438<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n444<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 2<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"InstructPixToPixConditioning\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 41,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n840,<br>\\n660<br>\\n],<br>\\n\\"size\\": [<br>\\n750,<br>\\n780<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 20,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 419<br>\\n}<br>\\n],<br>\\n\\"title\\": \\"CosXL Edit\\",<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 66,<br>\\n\\"type\\": \\"ConcatText_Zho\\",<br>\\n\\"pos\\": [<br>\\n140,<br>\\n500<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 320,<br>\\n\\"1\\": 70<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 11,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"text_1\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 477,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text_1\\"<br>\\n},<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"text_2\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 478,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text_2\\"<br>\\n}<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"text\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n463,<br>\\n482<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ConcatText_Zho\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"high quality\\",<br>\\n\\"\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 71,<br>\\n\\"type\\": \\"Any Switch (rgthree)\\",<br>\\n\\"pos\\": [<br>\\n480,<br>\\n500<br>\\n],<br>\\n\\"size\\": [<br>\\n340,<br>\\n110<br>\\n],<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": false<br>\\n},<br>\\n\\"order\\": 13,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"any_01\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 481,<br>\\n\\"dir\\": 3<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"any_02\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 482,<br>\\n\\"dir\\": 3<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"any_03\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": null,<br>\\n\\"dir\\": 3<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"any_04\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": null,<br>\\n\\"dir\\": 3<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"any_05\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": null,<br>\\n\\"dir\\": 3<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"<em>\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n483<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"dir\\": 4,<br>\\n\\"label\\": \\"STRING\\",<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"Any Switch (rgthree)\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 7,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n480,<br>\\n340<br>\\n],<br>\\n\\"size\\": [<br>\\n340,<br>\\n110<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 9,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 124<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n451,<br>\\n452<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"title\\": \\"Negative\\",<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"low quality\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 70,<br>\\n\\"type\\": \\"Fast Bypasser (rgthree)\\",<br>\\n\\"pos\\": {<br>\\n\\"0\\": 140,<br>\\n\\"1\\": 90,<br>\\n\\"2\\": 0,<br>\\n\\"3\\": 0,<br>\\n\\"4\\": 0,<br>\\n\\"5\\": 0,<br>\\n\\"6\\": 0,<br>\\n\\"7\\": 0,<br>\\n\\"8\\": 0,<br>\\n\\"9\\": 0<br>\\n},<br>\\n\\"size\\": [<br>\\n320,<br>\\n170<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 10,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"🎨 ArtistsGallery_Zho\\",<br>\\n\\"type\\": \\"</em>\\",<br>\\n\\"link\\": 474,<br>\\n\\"dir\\": 3<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"🎨 MovementsGallery_Zho\\",<br>\\n\\"type\\": \\"<em>\\",<br>\\n\\"link\\": 475,<br>\\n\\"dir\\": 3<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"🎨 StylesGallery_Zho\\",<br>\\n\\"type\\": \\"</em>\\",<br>\\n\\"link\\": 476,<br>\\n\\"dir\\": 3<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"<em>\\",<br>\\n\\"link\\": null,<br>\\n\\"dir\\": 3<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"OPT_CONNECTION\\",<br>\\n\\"type\\": \\"</em>\\",<br>\\n\\"links\\": null,<br>\\n\\"dir\\": 4<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"toggleRestriction\\": \\"default\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 64,<br>\\n\\"type\\": \\"StylesImage_Zho\\",<br>\\n\\"pos\\": [<br>\\n-200,<br>\\n1020<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 320,<br>\\n\\"1\\": 420<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"name\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n476,<br>\\n479<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"StylesImage_Zho\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"Watercolor.png\\",<br>\\n1.04<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 69,<br>\\n\\"type\\": \\"PrimitiveNode\\",<br>\\n\\"pos\\": [<br>\\n140,<br>\\n310<br>\\n],<br>\\n\\"size\\": [<br>\\n320,<br>\\n140<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 5,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"STRING\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n480<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text_2\\"<br>\\n}<br>\\n}<br>\\n],<br>\\n\\"title\\": \\"Prompt\\",<br>\\n\\"properties\\": {<br>\\n\\"Run widget replace on values\\": false<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"cute\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 68,<br>\\n\\"type\\": \\"ConcatText_Zho\\",<br>\\n\\"pos\\": [<br>\\n140,<br>\\n610<br>\\n],<br>\\n\\"size\\": [<br>\\n340,<br>\\n60<br>\\n],<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 14,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"text_1\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 483,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text_1\\"<br>\\n},<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"text_2\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 480,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text_2\\"<br>\\n},<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"text\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n469<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ConcatText_Zho\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"\\",<br>\\n\\"cute\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 67,<br>\\n\\"type\\": \\"ConcatText_Zho\\",<br>\\n\\"pos\\": [<br>\\n140,<br>\\n556<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 320,<br>\\n\\"1\\": 54<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 12,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"text_1\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 463,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text_1\\"<br>\\n},<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"text_2\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"link\\": 479,<br>\\n\\"widget\\": {<br>\\n\\"name\\": \\"text_2\\"<br>\\n},<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"text\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n481<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ConcatText_Zho\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"\\",<br>\\n\\"\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 63,<br>\\n\\"type\\": \\"MovementsImage_Zho\\",<br>\\n\\"pos\\": [<br>\\n-200,<br>\\n550<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 320,<br>\\n\\"1\\": 420<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"name\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n475,<br>\\n478<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"MovementsImage_Zho\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"Generative Art.png\\",<br>\\n1.2<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 62,<br>\\n\\"type\\": \\"ArtistsImage_Zho\\",<br>\\n\\"pos\\": [<br>\\n-200,<br>\\n90<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 320,<br>\\n\\"1\\": 410<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 7,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"name\\",<br>\\n\\"type\\": \\"STRING\\",<br>\\n\\"links\\": [<br>\\n474,<br>\\n477<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ArtistsImage_Zho\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"James Gilleard.png\\",<br>\\n0.53<br>\\n]<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\n8,<br>\\n4,<br>\\n2,<br>\\n8,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n124,<br>\\n4,<br>\\n1,<br>\\n7,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n125,<br>\\n4,<br>\\n1,<br>\\n6,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n419,<br>\\n8,<br>\\n0,<br>\\n41,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n437,<br>\\n58,<br>\\n0,<br>\\n59,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n438,<br>\\n58,<br>\\n1,<br>\\n59,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n440,<br>\\n53,<br>\\n0,<br>\\n60,<br>\\n0,<br>\\n\\"NOISE\\"<br>\\n],<br>\\n[<br>\\n441,<br>\\n59,<br>\\n0,<br>\\n60,<br>\\n1,<br>\\n\\"GUIDER\\"<br>\\n],<br>\\n[<br>\\n442,<br>\\n52,<br>\\n0,<br>\\n60,<br>\\n2,<br>\\n\\"SAMPLER\\"<br>\\n],<br>\\n[<br>\\n443,<br>\\n55,<br>\\n0,<br>\\n60,<br>\\n3,<br>\\n\\"SIGMAS\\"<br>\\n],<br>\\n[<br>\\n444,<br>\\n58,<br>\\n2,<br>\\n60,<br>\\n4,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n448,<br>\\n4,<br>\\n2,<br>\\n58,<br>\\n2,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n449,<br>\\n13,<br>\\n0,<br>\\n58,<br>\\n3,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n450,<br>\\n60,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n451,<br>\\n7,<br>\\n0,<br>\\n58,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n452,<br>\\n7,<br>\\n0,<br>\\n59,<br>\\n3,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n453,<br>\\n6,<br>\\n0,<br>\\n58,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n454,<br>\\n4,<br>\\n0,<br>\\n55,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n455,<br>\\n4,<br>\\n0,<br>\\n59,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n463,<br>\\n66,<br>\\n0,<br>\\n67,<br>\\n0,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n469,<br>\\n68,<br>\\n0,<br>\\n6,<br>\\n1,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n474,<br>\\n62,<br>\\n0,<br>\\n70,<br>\\n0,<br>\\n\\"<em>\\"<br>\\n],<br>\\n[<br>\\n475,<br>\\n63,<br>\\n0,<br>\\n70,<br>\\n1,<br>\\n\\"</em>\\"<br>\\n],<br>\\n[<br>\\n476,<br>\\n64,<br>\\n0,<br>\\n70,<br>\\n2,<br>\\n\\"<em>\\"<br>\\n],<br>\\n[<br>\\n477,<br>\\n62,<br>\\n0,<br>\\n66,<br>\\n0,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n478,<br>\\n63,<br>\\n0,<br>\\n66,<br>\\n1,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n479,<br>\\n64,<br>\\n0,<br>\\n67,<br>\\n1,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n480,<br>\\n69,<br>\\n0,<br>\\n68,<br>\\n1,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n481,<br>\\n67,<br>\\n0,<br>\\n71,<br>\\n0,<br>\\n\\"</em>\\"<br>\\n],<br>\\n[<br>\\n482,<br>\\n66,<br>\\n0,<br>\\n71,<br>\\n1,<br>\\n\\"STRING\\"<br>\\n],<br>\\n[<br>\\n483,<br>\\n71,<br>\\n0,<br>\\n68,<br>\\n0,<br>\\n\\"STRING\\"<br>\\n]<br>\\n],<br>\\n\\"groups\\": [],<br>\\n\\"config\\": {},<br>\\n\\"extra\\": {<br>\\n\\"groupNodes\\": {<br>\\n\\"IP2PSampler\\": {<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"type\\": \\"KSamplerSelect\\",<br>\\n\\"pos\\": [<br>\\n912,<br>\\n1536<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 58<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"SAMPLER\\",<br>\\n\\"type\\": \\"SAMPLER\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSamplerSelect\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"euler\\"<br>\\n],<br>\\n\\"index\\": 0<br>\\n},<br>\\n{<br>\\n\\"type\\": \\"RandomNoise\\",<br>\\n\\"pos\\": [<br>\\n912,<br>\\n1200<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 82<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 7,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"NOISE\\",<br>\\n\\"type\\": \\"NOISE\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"RandomNoise\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n156680208700303,<br>\\n\\"fixed\\"<br>\\n],<br>\\n\\"index\\": 1<br>\\n},<br>\\n{<br>\\n\\"type\\": \\"Reroute\\",<br>\\n\\"pos\\": [<br>\\n720,<br>\\n1488<br>\\n],<br>\\n\\"size\\": [<br>\\n75,<br>\\n26<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 9,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"<em>\\",<br>\\n\\"link\\": null<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"</em>\\",<br>\\n\\"links\\": null<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"showOutputText\\": false,<br>\\n\\"horizontal\\": false<br>\\n},<br>\\n\\"index\\": 2<br>\\n},<br>\\n{<br>\\n\\"type\\": \\"BasicScheduler\\",<br>\\n\\"pos\\": [<br>\\n912,<br>\\n1632<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 106<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 12,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": null<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"SIGMAS\\",<br>\\n\\"type\\": \\"SIGMAS\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"BasicScheduler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"normal\\",<br>\\n20,<br>\\n1<br>\\n],<br>\\n\\"index\\": 3<br>\\n},<br>\\n{<br>\\n\\"type\\": \\"Reroute\\",<br>\\n\\"pos\\": [<br>\\n575,<br>\\n1344<br>\\n],<br>\\n\\"size\\": [<br>\\n75,<br>\\n26<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 14,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"<em>\\",<br>\\n\\"link\\": null<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"</em>\\",<br>\\n\\"links\\": null<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"showOutputText\\": false,<br>\\n\\"horizontal\\": false<br>\\n},<br>\\n\\"index\\": 4<br>\\n},<br>\\n{<br>\\n\\"type\\": \\"Reroute\\",<br>\\n\\"pos\\": [<br>\\n570,<br>\\n1386<br>\\n],<br>\\n\\"size\\": [<br>\\n75,<br>\\n26<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 13,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"<em>\\",<br>\\n\\"link\\": null<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"</em>\\",<br>\\n\\"links\\": null<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"showOutputText\\": false,<br>\\n\\"horizontal\\": false<br>\\n},<br>\\n\\"index\\": 5<br>\\n},<br>\\n{<br>\\n\\"type\\": \\"InstructPixToPixConditioning\\",<br>\\n\\"pos\\": [<br>\\n672,<br>\\n1344<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 235.1999969482422,<br>\\n\\"1\\": 86<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 15,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": null<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": null<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": null<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"pixels\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": null<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 2<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"InstructPixToPixConditioning\\"<br>\\n},<br>\\n\\"index\\": 6<br>\\n},<br>\\n{<br>\\n\\"type\\": \\"DualCFGGuider\\",<br>\\n\\"pos\\": [<br>\\n912,<br>\\n1344<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 142<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 16,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": null<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"cond1\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": null<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"cond2\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": null<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": null<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"GUIDER\\",<br>\\n\\"type\\": \\"GUIDER\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"DualCFGGuider\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n3,<br>\\n1.5<br>\\n],<br>\\n\\"index\\": 7<br>\\n},<br>\\n{<br>\\n\\"type\\": \\"SamplerCustomAdvanced\\",<br>\\n\\"pos\\": [<br>\\n1296,<br>\\n1200<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 355.20001220703125,<br>\\n\\"1\\": 106<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 17,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"noise\\",<br>\\n\\"type\\": \\"NOISE\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"guider\\",<br>\\n\\"type\\": \\"GUIDER\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"sampler\\",<br>\\n\\"type\\": \\"SAMPLER\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 2<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"sigmas\\",<br>\\n\\"type\\": \\"SIGMAS\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 3<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 4<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"output\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"denoised_output\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"SamplerCustomAdvanced\\"<br>\\n},<br>\\n\\"index\\": 8<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n2,<br>\\n0,<br>\\n4,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n2,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n26,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n5,<br>\\n0,<br>\\n7,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n4,<br>\\n0,<br>\\n6,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n4,<br>\\n0,<br>\\n6,<br>\\n0,<br>\\n35,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n5,<br>\\n0,<br>\\n6,<br>\\n1,<br>\\n29,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\nnull,<br>\\n2,<br>\\n6,<br>\\n2,<br>\\n4,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n6,<br>\\n3,<br>\\n13,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n2,<br>\\n0,<br>\\n7,<br>\\n0,<br>\\n26,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n6,<br>\\n0,<br>\\n7,<br>\\n1,<br>\\n33,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n6,<br>\\n1,<br>\\n7,<br>\\n2,<br>\\n33,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n5,<br>\\n0,<br>\\n7,<br>\\n3,<br>\\n29,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n1,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n19,<br>\\n\\"NOISE\\"<br>\\n],<br>\\n[<br>\\n7,<br>\\n0,<br>\\n8,<br>\\n1,<br>\\n28,<br>\\n\\"GUIDER\\"<br>\\n],<br>\\n[<br>\\n0,<br>\\n0,<br>\\n8,<br>\\n2,<br>\\n20,<br>\\n\\"SAMPLER\\"<br>\\n],<br>\\n[<br>\\n3,<br>\\n0,<br>\\n8,<br>\\n3,<br>\\n21,<br>\\n\\"SIGMAS\\"<br>\\n],<br>\\n[<br>\\n6,<br>\\n2,<br>\\n8,<br>\\n4,<br>\\n33,<br>\\n\\"LATENT\\"<br>\\n]<br>\\n],<br>\\n\\"external\\": [<br>\\n[<br>\\n{<br>\\n\\"type\\": \\"SamplerCustomAdvanced\\",<br>\\n\\"pos\\": [<br>\\n1296,<br>\\n1200<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 355.20001220703125,<br>\\n\\"1\\": 106<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 17,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"noise\\",<br>\\n\\"type\\": \\"NOISE\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"guider\\",<br>\\n\\"type\\": \\"GUIDER\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"sampler\\",<br>\\n\\"type\\": \\"SAMPLER\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 2<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"sigmas\\",<br>\\n\\"type\\": \\"SIGMAS\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 3<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 4<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"output\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"denoised_output\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"SamplerCustomAdvanced\\"<br>\\n},<br>\\n\\"index\\": 8<br>\\n},<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n]<br>\\n],<br>\\n\\"config\\": {<br>\\n\\"0\\": {},<br>\\n\\"1\\": {},<br>\\n\\"2\\": {<br>\\n\\"input\\": {<br>\\n\\"MODEL\\": {<br>\\n\\"name\\": \\"model\\"<br>\\n}<br>\\n}<br>\\n},<br>\\n\\"3\\": {},<br>\\n\\"4\\": {<br>\\n\\"input\\": {<br>\\n\\"CONDITIONING\\": {<br>\\n\\"name\\": \\"positive\\"<br>\\n}<br>\\n}<br>\\n},<br>\\n\\"5\\": {<br>\\n\\"input\\": {<br>\\n\\"CONDITIONING\\": {<br>\\n\\"name\\": \\"negative\\"<br>\\n}<br>\\n}<br>\\n},<br>\\n\\"6\\": {},<br>\\n\\"7\\": {<br>\\n\\"input\\": {<br>\\n\\"cfg_conds\\": {<br>\\n\\"name\\": \\"cfg_text\\"<br>\\n},<br>\\n\\"cfg_cond2_negative\\": {<br>\\n\\"name\\": \\"cfg_image\\"<br>\\n}<br>\\n}<br>\\n},<br>\\n\\"8\\": {}<br>\\n}<br>\\n}<br>\\n}<br>\\n},<br>\\n\\"version\\": 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/CosXL Edit + ArtGallery 1.0【Zho】.json","value":{"title":"CosXL Edit + ArtGallery 1.0【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/CosXL Edit + ArtGallery 1.0【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{d as comp,m as data};

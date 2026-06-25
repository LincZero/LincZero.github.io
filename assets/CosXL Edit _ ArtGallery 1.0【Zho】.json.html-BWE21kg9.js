import{_ as t,c as o,b as u,r,o as q}from"./app-CQkeIggD.js";const b={};function e(s,i){const n=r("VueFlow");return q(),o("div",null,[u(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const a=t(b,[["render",e]]),p=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/CosXL%20Edit%20_%20ArtGallery%201.0%E3%80%90Zho%E3%80%91.json.html","title":"CosXL Edit _ ArtGallery 1.0【Zho】.json","lang":"zh-CN","frontmatter":{"description":"{ &quot;last_node_id&quot;: 71, &quot;last_link_id&quot;: 483, &quot;nodes&quot;: [ { &quot;id&quot;: 13, &quot;type&quot;: &quot;LoadImage&quot;, &quot;pos&quot;: [ 140, 660 ],...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/CosXL%20Edit%20_%20ArtGallery%201.0%E3%80%90Zho%E3%80%91.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ &quot;last_node_id&quot;: 71, &quot;last_link_id&quot;: 483, &quot;nodes&quot;: [ { &quot;id&quot;: 13, &quot;type&quot;: &quot;LoadImage&quot;, &quot;pos&quot;: [ 140, 660 ],..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"layout":"Layout"},"git":{},"readingTime":{"minutes":6.53,"words":1958},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/CosXL Edit + ArtGallery 1.0【Zho】.json","excerpt":"<p>{<br>\\n&quot;last_node_id&quot;: 71,<br>\\n&quot;last_link_id&quot;: 483,<br>\\n&quot;nodes&quot;: [<br>\\n{<br>\\n&quot;id&quot;: 13,<br>\\n&quot;type&quot;: &quot;LoadImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n140,<br>\\n660<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n680,<br>\\n780<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 0,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n449<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;MASK&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;LoadImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;ComfyUI_temp_ayyqd_00003_.png&quot;,<br>\\n&quot;image&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 6,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n480,<br>\\n240<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n340,<br>\\n50<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 15,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 125<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;text&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;link&quot;: 469,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;text&quot;<br>\\n}<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n453<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;title&quot;: &quot;Positive&quot;,<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;watercolor&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 4,<br>\\n&quot;type&quot;: &quot;CheckpointLoaderSimple&quot;,<br>\\n&quot;pos&quot;: [<br>\\n480,<br>\\n90<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n340,<br>\\n100<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 1,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n454,<br>\\n455<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [<br>\\n124,<br>\\n125<br>\\n],<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;VAE&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;links&quot;: [<br>\\n8,<br>\\n448<br>\\n],<br>\\n&quot;slot_index&quot;: 2<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CheckpointLoaderSimple&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;cosxl_edit.safetensors&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 60,<br>\\n&quot;type&quot;: &quot;SamplerCustomAdvanced&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1220,<br>\\n390<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n370,<br>\\n120<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 18,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;noise&quot;,<br>\\n&quot;type&quot;: &quot;NOISE&quot;,<br>\\n&quot;link&quot;: 440,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;guider&quot;,<br>\\n&quot;type&quot;: &quot;GUIDER&quot;,<br>\\n&quot;link&quot;: 441,<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;sampler&quot;,<br>\\n&quot;type&quot;: &quot;SAMPLER&quot;,<br>\\n&quot;link&quot;: 442,<br>\\n&quot;slot_index&quot;: 2<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;sigmas&quot;,<br>\\n&quot;type&quot;: &quot;SIGMAS&quot;,<br>\\n&quot;link&quot;: 443,<br>\\n&quot;slot_index&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 444,<br>\\n&quot;slot_index&quot;: 4<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;output&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n450<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;denoised_output&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;SamplerCustomAdvanced&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 55,<br>\\n&quot;type&quot;: &quot;BasicScheduler&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1220,<br>\\n220<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n370,<br>\\n120<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 8,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 454<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;SIGMAS&quot;,<br>\\n&quot;type&quot;: &quot;SIGMAS&quot;,<br>\\n&quot;links&quot;: [<br>\\n443<br>\\n],<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;BasicScheduler&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;normal&quot;,<br>\\n20,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 52,<br>\\n&quot;type&quot;: &quot;KSamplerSelect&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1220,<br>\\n90<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n370,<br>\\n80<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 2,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;SAMPLER&quot;,<br>\\n&quot;type&quot;: &quot;SAMPLER&quot;,<br>\\n&quot;links&quot;: [<br>\\n442<br>\\n],<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;KSamplerSelect&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;euler&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 8,<br>\\n&quot;type&quot;: &quot;VAEDecode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1220,<br>\\n560<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n370,<br>\\n50<br>\\n],<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: false<br>\\n},<br>\\n&quot;order&quot;: 19,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;samples&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 450<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 8<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n419<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEDecode&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 53,<br>\\n&quot;type&quot;: &quot;RandomNoise&quot;,<br>\\n&quot;pos&quot;: [<br>\\n840,<br>\\n500<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n360,<br>\\n110<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 3,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;NOISE&quot;,<br>\\n&quot;type&quot;: &quot;NOISE&quot;,<br>\\n&quot;links&quot;: [<br>\\n440<br>\\n],<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;RandomNoise&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n566363035823543,<br>\\n&quot;fixed&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 59,<br>\\n&quot;type&quot;: &quot;DualCFGGuider&quot;,<br>\\n&quot;pos&quot;: [<br>\\n840,<br>\\n270<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n360,<br>\\n180<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 17,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 455<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;cond1&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 437<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;cond2&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 438<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 452<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;GUIDER&quot;,<br>\\n&quot;type&quot;: &quot;GUIDER&quot;,<br>\\n&quot;links&quot;: [<br>\\n441<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;DualCFGGuider&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n5,<br>\\n1.5<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 58,<br>\\n&quot;type&quot;: &quot;InstructPixToPixConditioning&quot;,<br>\\n&quot;pos&quot;: [<br>\\n840,<br>\\n90<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n360,<br>\\n130<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 16,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 453<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 451<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 448<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;pixels&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 449<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n437<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n438<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n444<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 2<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;InstructPixToPixConditioning&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 41,<br>\\n&quot;type&quot;: &quot;PreviewImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n840,<br>\\n660<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n750,<br>\\n780<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 20,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 419<br>\\n}<br>\\n],<br>\\n&quot;title&quot;: &quot;CosXL Edit&quot;,<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;PreviewImage&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 66,<br>\\n&quot;type&quot;: &quot;ConcatText_Zho&quot;,<br>\\n&quot;pos&quot;: [<br>\\n140,<br>\\n500<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 320,<br>\\n&quot;1&quot;: 70<br>\\n},<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: true<br>\\n},<br>\\n&quot;order&quot;: 11,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;text_1&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;link&quot;: 477,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;text_1&quot;<br>\\n},<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;text_2&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;link&quot;: 478,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;text_2&quot;<br>\\n}<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;text&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;links&quot;: [<br>\\n463,<br>\\n482<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ConcatText_Zho&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;high quality&quot;,<br>\\n&quot;&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 71,<br>\\n&quot;type&quot;: &quot;Any Switch (rgthree)&quot;,<br>\\n&quot;pos&quot;: [<br>\\n480,<br>\\n500<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n340,<br>\\n110<br>\\n],<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: false<br>\\n},<br>\\n&quot;order&quot;: 13,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;any_01&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;link&quot;: 481,<br>\\n&quot;dir&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;any_02&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;link&quot;: 482,<br>\\n&quot;dir&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;any_03&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;dir&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;any_04&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;dir&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;any_05&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;dir&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;<em>&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;links&quot;: [<br>\\n483<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;dir&quot;: 4,<br>\\n&quot;label&quot;: &quot;STRING&quot;,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;Any Switch (rgthree)&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 7,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n480,<br>\\n340<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n340,<br>\\n110<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 9,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 124<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n451,<br>\\n452<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;title&quot;: &quot;Negative&quot;,<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;low quality&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 70,<br>\\n&quot;type&quot;: &quot;Fast Bypasser (rgthree)&quot;,<br>\\n&quot;pos&quot;: {<br>\\n&quot;0&quot;: 140,<br>\\n&quot;1&quot;: 90,<br>\\n&quot;2&quot;: 0,<br>\\n&quot;3&quot;: 0,<br>\\n&quot;4&quot;: 0,<br>\\n&quot;5&quot;: 0,<br>\\n&quot;6&quot;: 0,<br>\\n&quot;7&quot;: 0,<br>\\n&quot;8&quot;: 0,<br>\\n&quot;9&quot;: 0<br>\\n},<br>\\n&quot;size&quot;: [<br>\\n320,<br>\\n170<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 10,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;🎨 ArtistsGallery_Zho&quot;,<br>\\n&quot;type&quot;: &quot;</em>&quot;,<br>\\n&quot;link&quot;: 474,<br>\\n&quot;dir&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;🎨 MovementsGallery_Zho&quot;,<br>\\n&quot;type&quot;: &quot;<em>&quot;,<br>\\n&quot;link&quot;: 475,<br>\\n&quot;dir&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;🎨 StylesGallery_Zho&quot;,<br>\\n&quot;type&quot;: &quot;</em>&quot;,<br>\\n&quot;link&quot;: 476,<br>\\n&quot;dir&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;&quot;,<br>\\n&quot;type&quot;: &quot;<em>&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;dir&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;OPT_CONNECTION&quot;,<br>\\n&quot;type&quot;: &quot;</em>&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;dir&quot;: 4<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;toggleRestriction&quot;: &quot;default&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 64,<br>\\n&quot;type&quot;: &quot;StylesImage_Zho&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-200,<br>\\n1020<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 320,<br>\\n&quot;1&quot;: 420<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 4,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;name&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;links&quot;: [<br>\\n476,<br>\\n479<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;StylesImage_Zho&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;Watercolor.png&quot;,<br>\\n1.04<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 69,<br>\\n&quot;type&quot;: &quot;PrimitiveNode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n140,<br>\\n310<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n320,<br>\\n140<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 5,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;STRING&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;links&quot;: [<br>\\n480<br>\\n],<br>\\n&quot;slot_index&quot;: 0,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;text_2&quot;<br>\\n}<br>\\n}<br>\\n],<br>\\n&quot;title&quot;: &quot;Prompt&quot;,<br>\\n&quot;properties&quot;: {<br>\\n&quot;Run widget replace on values&quot;: false<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;cute&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 68,<br>\\n&quot;type&quot;: &quot;ConcatText_Zho&quot;,<br>\\n&quot;pos&quot;: [<br>\\n140,<br>\\n610<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n340,<br>\\n60<br>\\n],<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: true<br>\\n},<br>\\n&quot;order&quot;: 14,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;text_1&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;link&quot;: 483,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;text_1&quot;<br>\\n},<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;text_2&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;link&quot;: 480,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;text_2&quot;<br>\\n},<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;text&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;links&quot;: [<br>\\n469<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ConcatText_Zho&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;&quot;,<br>\\n&quot;cute&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 67,<br>\\n&quot;type&quot;: &quot;ConcatText_Zho&quot;,<br>\\n&quot;pos&quot;: [<br>\\n140,<br>\\n556<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 320,<br>\\n&quot;1&quot;: 54<br>\\n},<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: true<br>\\n},<br>\\n&quot;order&quot;: 12,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;text_1&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;link&quot;: 463,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;text_1&quot;<br>\\n},<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;text_2&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;link&quot;: 479,<br>\\n&quot;widget&quot;: {<br>\\n&quot;name&quot;: &quot;text_2&quot;<br>\\n},<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;text&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;links&quot;: [<br>\\n481<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ConcatText_Zho&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;&quot;,<br>\\n&quot;&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 63,<br>\\n&quot;type&quot;: &quot;MovementsImage_Zho&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-200,<br>\\n550<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 320,<br>\\n&quot;1&quot;: 420<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 6,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;name&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;links&quot;: [<br>\\n475,<br>\\n478<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;MovementsImage_Zho&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;Generative Art.png&quot;,<br>\\n1.2<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 62,<br>\\n&quot;type&quot;: &quot;ArtistsImage_Zho&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-200,<br>\\n90<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 320,<br>\\n&quot;1&quot;: 410<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 7,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;name&quot;,<br>\\n&quot;type&quot;: &quot;STRING&quot;,<br>\\n&quot;links&quot;: [<br>\\n474,<br>\\n477<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ArtistsImage_Zho&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;James Gilleard.png&quot;,<br>\\n0.53<br>\\n]<br>\\n}<br>\\n],<br>\\n&quot;links&quot;: [<br>\\n[<br>\\n8,<br>\\n4,<br>\\n2,<br>\\n8,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n124,<br>\\n4,<br>\\n1,<br>\\n7,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n125,<br>\\n4,<br>\\n1,<br>\\n6,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n419,<br>\\n8,<br>\\n0,<br>\\n41,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n437,<br>\\n58,<br>\\n0,<br>\\n59,<br>\\n1,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n438,<br>\\n58,<br>\\n1,<br>\\n59,<br>\\n2,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n440,<br>\\n53,<br>\\n0,<br>\\n60,<br>\\n0,<br>\\n&quot;NOISE&quot;<br>\\n],<br>\\n[<br>\\n441,<br>\\n59,<br>\\n0,<br>\\n60,<br>\\n1,<br>\\n&quot;GUIDER&quot;<br>\\n],<br>\\n[<br>\\n442,<br>\\n52,<br>\\n0,<br>\\n60,<br>\\n2,<br>\\n&quot;SAMPLER&quot;<br>\\n],<br>\\n[<br>\\n443,<br>\\n55,<br>\\n0,<br>\\n60,<br>\\n3,<br>\\n&quot;SIGMAS&quot;<br>\\n],<br>\\n[<br>\\n444,<br>\\n58,<br>\\n2,<br>\\n60,<br>\\n4,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n448,<br>\\n4,<br>\\n2,<br>\\n58,<br>\\n2,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n449,<br>\\n13,<br>\\n0,<br>\\n58,<br>\\n3,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n450,<br>\\n60,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n451,<br>\\n7,<br>\\n0,<br>\\n58,<br>\\n1,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n452,<br>\\n7,<br>\\n0,<br>\\n59,<br>\\n3,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n453,<br>\\n6,<br>\\n0,<br>\\n58,<br>\\n0,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n454,<br>\\n4,<br>\\n0,<br>\\n55,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n455,<br>\\n4,<br>\\n0,<br>\\n59,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n463,<br>\\n66,<br>\\n0,<br>\\n67,<br>\\n0,<br>\\n&quot;STRING&quot;<br>\\n],<br>\\n[<br>\\n469,<br>\\n68,<br>\\n0,<br>\\n6,<br>\\n1,<br>\\n&quot;STRING&quot;<br>\\n],<br>\\n[<br>\\n474,<br>\\n62,<br>\\n0,<br>\\n70,<br>\\n0,<br>\\n&quot;<em>&quot;<br>\\n],<br>\\n[<br>\\n475,<br>\\n63,<br>\\n0,<br>\\n70,<br>\\n1,<br>\\n&quot;</em>&quot;<br>\\n],<br>\\n[<br>\\n476,<br>\\n64,<br>\\n0,<br>\\n70,<br>\\n2,<br>\\n&quot;<em>&quot;<br>\\n],<br>\\n[<br>\\n477,<br>\\n62,<br>\\n0,<br>\\n66,<br>\\n0,<br>\\n&quot;STRING&quot;<br>\\n],<br>\\n[<br>\\n478,<br>\\n63,<br>\\n0,<br>\\n66,<br>\\n1,<br>\\n&quot;STRING&quot;<br>\\n],<br>\\n[<br>\\n479,<br>\\n64,<br>\\n0,<br>\\n67,<br>\\n1,<br>\\n&quot;STRING&quot;<br>\\n],<br>\\n[<br>\\n480,<br>\\n69,<br>\\n0,<br>\\n68,<br>\\n1,<br>\\n&quot;STRING&quot;<br>\\n],<br>\\n[<br>\\n481,<br>\\n67,<br>\\n0,<br>\\n71,<br>\\n0,<br>\\n&quot;</em>&quot;<br>\\n],<br>\\n[<br>\\n482,<br>\\n66,<br>\\n0,<br>\\n71,<br>\\n1,<br>\\n&quot;STRING&quot;<br>\\n],<br>\\n[<br>\\n483,<br>\\n71,<br>\\n0,<br>\\n68,<br>\\n0,<br>\\n&quot;STRING&quot;<br>\\n]<br>\\n],<br>\\n&quot;groups&quot;: [],<br>\\n&quot;config&quot;: {},<br>\\n&quot;extra&quot;: {<br>\\n&quot;groupNodes&quot;: {<br>\\n&quot;IP2PSampler&quot;: {<br>\\n&quot;nodes&quot;: [<br>\\n{<br>\\n&quot;type&quot;: &quot;KSamplerSelect&quot;,<br>\\n&quot;pos&quot;: [<br>\\n912,<br>\\n1536<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 58<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 6,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;SAMPLER&quot;,<br>\\n&quot;type&quot;: &quot;SAMPLER&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;KSamplerSelect&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;euler&quot;<br>\\n],<br>\\n&quot;index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;type&quot;: &quot;RandomNoise&quot;,<br>\\n&quot;pos&quot;: [<br>\\n912,<br>\\n1200<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 82<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 7,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;NOISE&quot;,<br>\\n&quot;type&quot;: &quot;NOISE&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;RandomNoise&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n156680208700303,<br>\\n&quot;fixed&quot;<br>\\n],<br>\\n&quot;index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;type&quot;: &quot;Reroute&quot;,<br>\\n&quot;pos&quot;: [<br>\\n720,<br>\\n1488<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n75,<br>\\n26<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 9,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;&quot;,<br>\\n&quot;type&quot;: &quot;<em>&quot;,<br>\\n&quot;link&quot;: null<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;&quot;,<br>\\n&quot;type&quot;: &quot;</em>&quot;,<br>\\n&quot;links&quot;: null<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;showOutputText&quot;: false,<br>\\n&quot;horizontal&quot;: false<br>\\n},<br>\\n&quot;index&quot;: 2<br>\\n},<br>\\n{<br>\\n&quot;type&quot;: &quot;BasicScheduler&quot;,<br>\\n&quot;pos&quot;: [<br>\\n912,<br>\\n1632<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 106<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 12,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: null<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;SIGMAS&quot;,<br>\\n&quot;type&quot;: &quot;SIGMAS&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;BasicScheduler&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;normal&quot;,<br>\\n20,<br>\\n1<br>\\n],<br>\\n&quot;index&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;type&quot;: &quot;Reroute&quot;,<br>\\n&quot;pos&quot;: [<br>\\n575,<br>\\n1344<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n75,<br>\\n26<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 14,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;&quot;,<br>\\n&quot;type&quot;: &quot;<em>&quot;,<br>\\n&quot;link&quot;: null<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;&quot;,<br>\\n&quot;type&quot;: &quot;</em>&quot;,<br>\\n&quot;links&quot;: null<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;showOutputText&quot;: false,<br>\\n&quot;horizontal&quot;: false<br>\\n},<br>\\n&quot;index&quot;: 4<br>\\n},<br>\\n{<br>\\n&quot;type&quot;: &quot;Reroute&quot;,<br>\\n&quot;pos&quot;: [<br>\\n570,<br>\\n1386<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n75,<br>\\n26<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 13,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;&quot;,<br>\\n&quot;type&quot;: &quot;<em>&quot;,<br>\\n&quot;link&quot;: null<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;&quot;,<br>\\n&quot;type&quot;: &quot;</em>&quot;,<br>\\n&quot;links&quot;: null<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;showOutputText&quot;: false,<br>\\n&quot;horizontal&quot;: false<br>\\n},<br>\\n&quot;index&quot;: 5<br>\\n},<br>\\n{<br>\\n&quot;type&quot;: &quot;InstructPixToPixConditioning&quot;,<br>\\n&quot;pos&quot;: [<br>\\n672,<br>\\n1344<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 235.1999969482422,<br>\\n&quot;1&quot;: 86<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 15,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: null<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: null<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: null<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;pixels&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: null<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 2<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;InstructPixToPixConditioning&quot;<br>\\n},<br>\\n&quot;index&quot;: 6<br>\\n},<br>\\n{<br>\\n&quot;type&quot;: &quot;DualCFGGuider&quot;,<br>\\n&quot;pos&quot;: [<br>\\n912,<br>\\n1344<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 142<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 16,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: null<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;cond1&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: null<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;cond2&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: null<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: null<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;GUIDER&quot;,<br>\\n&quot;type&quot;: &quot;GUIDER&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;DualCFGGuider&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n3,<br>\\n1.5<br>\\n],<br>\\n&quot;index&quot;: 7<br>\\n},<br>\\n{<br>\\n&quot;type&quot;: &quot;SamplerCustomAdvanced&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1296,<br>\\n1200<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 355.20001220703125,<br>\\n&quot;1&quot;: 106<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 17,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;noise&quot;,<br>\\n&quot;type&quot;: &quot;NOISE&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;guider&quot;,<br>\\n&quot;type&quot;: &quot;GUIDER&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;sampler&quot;,<br>\\n&quot;type&quot;: &quot;SAMPLER&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 2<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;sigmas&quot;,<br>\\n&quot;type&quot;: &quot;SIGMAS&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 4<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;output&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;denoised_output&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;SamplerCustomAdvanced&quot;<br>\\n},<br>\\n&quot;index&quot;: 8<br>\\n}<br>\\n],<br>\\n&quot;links&quot;: [<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n2,<br>\\n0,<br>\\n4,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n2,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n26,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n5,<br>\\n0,<br>\\n7,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n4,<br>\\n0,<br>\\n6,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n4,<br>\\n0,<br>\\n6,<br>\\n0,<br>\\n35,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n5,<br>\\n0,<br>\\n6,<br>\\n1,<br>\\n29,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\nnull,<br>\\n2,<br>\\n6,<br>\\n2,<br>\\n4,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n6,<br>\\n3,<br>\\n13,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n2,<br>\\n0,<br>\\n7,<br>\\n0,<br>\\n26,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n6,<br>\\n0,<br>\\n7,<br>\\n1,<br>\\n33,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n6,<br>\\n1,<br>\\n7,<br>\\n2,<br>\\n33,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n5,<br>\\n0,<br>\\n7,<br>\\n3,<br>\\n29,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n1,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n19,<br>\\n&quot;NOISE&quot;<br>\\n],<br>\\n[<br>\\n7,<br>\\n0,<br>\\n8,<br>\\n1,<br>\\n28,<br>\\n&quot;GUIDER&quot;<br>\\n],<br>\\n[<br>\\n0,<br>\\n0,<br>\\n8,<br>\\n2,<br>\\n20,<br>\\n&quot;SAMPLER&quot;<br>\\n],<br>\\n[<br>\\n3,<br>\\n0,<br>\\n8,<br>\\n3,<br>\\n21,<br>\\n&quot;SIGMAS&quot;<br>\\n],<br>\\n[<br>\\n6,<br>\\n2,<br>\\n8,<br>\\n4,<br>\\n33,<br>\\n&quot;LATENT&quot;<br>\\n]<br>\\n],<br>\\n&quot;external&quot;: [<br>\\n[<br>\\n{<br>\\n&quot;type&quot;: &quot;SamplerCustomAdvanced&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1296,<br>\\n1200<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 355.20001220703125,<br>\\n&quot;1&quot;: 106<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 17,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;noise&quot;,<br>\\n&quot;type&quot;: &quot;NOISE&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;guider&quot;,<br>\\n&quot;type&quot;: &quot;GUIDER&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;sampler&quot;,<br>\\n&quot;type&quot;: &quot;SAMPLER&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 2<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;sigmas&quot;,<br>\\n&quot;type&quot;: &quot;SIGMAS&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 4<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;output&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;denoised_output&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;SamplerCustomAdvanced&quot;<br>\\n},<br>\\n&quot;index&quot;: 8<br>\\n},<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n]<br>\\n],<br>\\n&quot;config&quot;: {<br>\\n&quot;0&quot;: {},<br>\\n&quot;1&quot;: {},<br>\\n&quot;2&quot;: {<br>\\n&quot;input&quot;: {<br>\\n&quot;MODEL&quot;: {<br>\\n&quot;name&quot;: &quot;model&quot;<br>\\n}<br>\\n}<br>\\n},<br>\\n&quot;3&quot;: {},<br>\\n&quot;4&quot;: {<br>\\n&quot;input&quot;: {<br>\\n&quot;CONDITIONING&quot;: {<br>\\n&quot;name&quot;: &quot;positive&quot;<br>\\n}<br>\\n}<br>\\n},<br>\\n&quot;5&quot;: {<br>\\n&quot;input&quot;: {<br>\\n&quot;CONDITIONING&quot;: {<br>\\n&quot;name&quot;: &quot;negative&quot;<br>\\n}<br>\\n}<br>\\n},<br>\\n&quot;6&quot;: {},<br>\\n&quot;7&quot;: {<br>\\n&quot;input&quot;: {<br>\\n&quot;cfg_conds&quot;: {<br>\\n&quot;name&quot;: &quot;cfg_text&quot;<br>\\n},<br>\\n&quot;cfg_cond2_negative&quot;: {<br>\\n&quot;name&quot;: &quot;cfg_image&quot;<br>\\n}<br>\\n}<br>\\n},<br>\\n&quot;8&quot;: {}<br>\\n}<br>\\n}<br>\\n}<br>\\n},<br>\\n&quot;version&quot;: 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/CosXL Edit + ArtGallery 1.0【Zho】.json","value":{"title":"CosXL Edit + ArtGallery 1.0【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/CosXL Edit + ArtGallery 1.0【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{a as comp,p as data};

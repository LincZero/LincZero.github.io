import{_ as e,c as t,b as s,o as i,r as o}from"./app-DL5M9yrN.js";const l={};function a(p,d){const n=o("VueFlow");return i(),t("div",null,[s(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const m=e(l,[["render",a],["__file","CosXL Edit _ ArtGallery 1.0【Zho】.json.html.vue"]]),u=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/CosXL%20Edit%20_%20ArtGallery%201.0%E3%80%90Zho%E3%80%91.json","title":"","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 71, \\"last_link_id\\": 483, \\"nodes\\": [ { \\"id\\": 13, \\"type\\": \\"LoadImage\\", \\"pos\\": [ 140, 660 ], \\"size\\": [ 680, 780 ], \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0, \\"outputs\\": ...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/CosXL%20Edit%20_%20ArtGallery%201.0%E3%80%90Zho%E3%80%91.json"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 71, \\"last_link_id\\": 483, \\"nodes\\": [ { \\"id\\": 13, \\"type\\": \\"LoadImage\\", \\"pos\\": [ 140, 660 ], \\"size\\": [ 680, 780 ], \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0, \\"outputs\\": ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":6.53,"words":1958},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/CosXL Edit + ArtGallery 1.0【Zho】.json","excerpt":"<p>{\\n\\"last_node_id\\": 71,\\n\\"last_link_id\\": 483,\\n\\"nodes\\": [\\n{\\n\\"id\\": 13,\\n\\"type\\": \\"LoadImage\\",\\n\\"pos\\": [\\n140,\\n660\\n],\\n\\"size\\": [\\n680,\\n780\\n],\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n449\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": null,\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"ComfyUI_temp_ayyqd_00003_.png\\",\\n\\"image\\"\\n]\\n},\\n{\\n\\"id\\": 6,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n480,\\n240\\n],\\n\\"size\\": [\\n340,\\n50\\n],\\n\\"flags\\": {},\\n\\"order\\": 15,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 125\\n},\\n{\\n\\"name\\": \\"text\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 469,\\n\\"widget\\": {\\n\\"name\\": \\"text\\"\\n}\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n453\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"title\\": \\"Positive\\",\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"watercolor\\"\\n]\\n},\\n{\\n\\"id\\": 4,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": [\\n480,\\n90\\n],\\n\\"size\\": [\\n340,\\n100\\n],\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n454,\\n455\\n],\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n124,\\n125\\n],\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n8,\\n448\\n],\\n\\"slot_index\\": 2\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"cosxl_edit.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 60,\\n\\"type\\": \\"SamplerCustomAdvanced\\",\\n\\"pos\\": [\\n1220,\\n390\\n],\\n\\"size\\": [\\n370,\\n120\\n],\\n\\"flags\\": {},\\n\\"order\\": 18,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"noise\\",\\n\\"type\\": \\"NOISE\\",\\n\\"link\\": 440,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"guider\\",\\n\\"type\\": \\"GUIDER\\",\\n\\"link\\": 441,\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"sampler\\",\\n\\"type\\": \\"SAMPLER\\",\\n\\"link\\": 442,\\n\\"slot_index\\": 2\\n},\\n{\\n\\"name\\": \\"sigmas\\",\\n\\"type\\": \\"SIGMAS\\",\\n\\"link\\": 443,\\n\\"slot_index\\": 3\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 444,\\n\\"slot_index\\": 4\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"output\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n450\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"denoised_output\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": null,\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"SamplerCustomAdvanced\\"\\n}\\n},\\n{\\n\\"id\\": 55,\\n\\"type\\": \\"BasicScheduler\\",\\n\\"pos\\": [\\n1220,\\n220\\n],\\n\\"size\\": [\\n370,\\n120\\n],\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 454\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"SIGMAS\\",\\n\\"type\\": \\"SIGMAS\\",\\n\\"links\\": [\\n443\\n],\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"BasicScheduler\\"\\n},\\n\\"widgets_values\\": [\\n\\"normal\\",\\n20,\\n1\\n]\\n},\\n{\\n\\"id\\": 52,\\n\\"type\\": \\"KSamplerSelect\\",\\n\\"pos\\": [\\n1220,\\n90\\n],\\n\\"size\\": [\\n370,\\n80\\n],\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"SAMPLER\\",\\n\\"type\\": \\"SAMPLER\\",\\n\\"links\\": [\\n442\\n],\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSamplerSelect\\"\\n},\\n\\"widgets_values\\": [\\n\\"euler\\"\\n]\\n},\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": [\\n1220,\\n560\\n],\\n\\"size\\": [\\n370,\\n50\\n],\\n\\"flags\\": {\\n\\"collapsed\\": false\\n},\\n\\"order\\": 19,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 450\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 8\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n419\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n}\\n},\\n{\\n\\"id\\": 53,\\n\\"type\\": \\"RandomNoise\\",\\n\\"pos\\": [\\n840,\\n500\\n],\\n\\"size\\": [\\n360,\\n110\\n],\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"NOISE\\",\\n\\"type\\": \\"NOISE\\",\\n\\"links\\": [\\n440\\n],\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"RandomNoise\\"\\n},\\n\\"widgets_values\\": [\\n566363035823543,\\n\\"fixed\\"\\n]\\n},\\n{\\n\\"id\\": 59,\\n\\"type\\": \\"DualCFGGuider\\",\\n\\"pos\\": [\\n840,\\n270\\n],\\n\\"size\\": [\\n360,\\n180\\n],\\n\\"flags\\": {},\\n\\"order\\": 17,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 455\\n},\\n{\\n\\"name\\": \\"cond1\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 437\\n},\\n{\\n\\"name\\": \\"cond2\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 438\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 452\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"GUIDER\\",\\n\\"type\\": \\"GUIDER\\",\\n\\"links\\": [\\n441\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"DualCFGGuider\\"\\n},\\n\\"widgets_values\\": [\\n5,\\n1.5\\n]\\n},\\n{\\n\\"id\\": 58,\\n\\"type\\": \\"InstructPixToPixConditioning\\",\\n\\"pos\\": [\\n840,\\n90\\n],\\n\\"size\\": [\\n360,\\n130\\n],\\n\\"flags\\": {},\\n\\"order\\": 16,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 453\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 451\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 448\\n},\\n{\\n\\"name\\": \\"pixels\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 449\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n437\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n438\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"latent\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n444\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 2\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"InstructPixToPixConditioning\\"\\n}\\n},\\n{\\n\\"id\\": 41,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n840,\\n660\\n],\\n\\"size\\": [\\n750,\\n780\\n],\\n\\"flags\\": {},\\n\\"order\\": 20,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 419\\n}\\n],\\n\\"title\\": \\"CosXL Edit\\",\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n}\\n},\\n{\\n\\"id\\": 66,\\n\\"type\\": \\"ConcatText_Zho\\",\\n\\"pos\\": [\\n140,\\n500\\n],\\n\\"size\\": {\\n\\"0\\": 320,\\n\\"1\\": 70\\n},\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 11,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"text_1\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 477,\\n\\"widget\\": {\\n\\"name\\": \\"text_1\\"\\n},\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"text_2\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 478,\\n\\"widget\\": {\\n\\"name\\": \\"text_2\\"\\n}\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"text\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n463,\\n482\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ConcatText_Zho\\"\\n},\\n\\"widgets_values\\": [\\n\\"high quality\\",\\n\\"\\"\\n]\\n},\\n{\\n\\"id\\": 71,\\n\\"type\\": \\"Any Switch (rgthree)\\",\\n\\"pos\\": [\\n480,\\n500\\n],\\n\\"size\\": [\\n340,\\n110\\n],\\n\\"flags\\": {\\n\\"collapsed\\": false\\n},\\n\\"order\\": 13,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"any_01\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 481,\\n\\"dir\\": 3\\n},\\n{\\n\\"name\\": \\"any_02\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 482,\\n\\"dir\\": 3\\n},\\n{\\n\\"name\\": \\"any_03\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": null,\\n\\"dir\\": 3\\n},\\n{\\n\\"name\\": \\"any_04\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": null,\\n\\"dir\\": 3\\n},\\n{\\n\\"name\\": \\"any_05\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": null,\\n\\"dir\\": 3\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"<em>\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n483\\n],\\n\\"shape\\": 3,\\n\\"dir\\": 4,\\n\\"label\\": \\"STRING\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"Any Switch (rgthree)\\"\\n}\\n},\\n{\\n\\"id\\": 7,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n480,\\n340\\n],\\n\\"size\\": [\\n340,\\n110\\n],\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 124\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n451,\\n452\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"title\\": \\"Negative\\",\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"low quality\\"\\n]\\n},\\n{\\n\\"id\\": 70,\\n\\"type\\": \\"Fast Bypasser (rgthree)\\",\\n\\"pos\\": {\\n\\"0\\": 140,\\n\\"1\\": 90,\\n\\"2\\": 0,\\n\\"3\\": 0,\\n\\"4\\": 0,\\n\\"5\\": 0,\\n\\"6\\": 0,\\n\\"7\\": 0,\\n\\"8\\": 0,\\n\\"9\\": 0\\n},\\n\\"size\\": [\\n320,\\n170\\n],\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"🎨 ArtistsGallery_Zho\\",\\n\\"type\\": \\"</em>\\",\\n\\"link\\": 474,\\n\\"dir\\": 3\\n},\\n{\\n\\"name\\": \\"🎨 MovementsGallery_Zho\\",\\n\\"type\\": \\"<em>\\",\\n\\"link\\": 475,\\n\\"dir\\": 3\\n},\\n{\\n\\"name\\": \\"🎨 StylesGallery_Zho\\",\\n\\"type\\": \\"</em>\\",\\n\\"link\\": 476,\\n\\"dir\\": 3\\n},\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"<em>\\",\\n\\"link\\": null,\\n\\"dir\\": 3\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"OPT_CONNECTION\\",\\n\\"type\\": \\"</em>\\",\\n\\"links\\": null,\\n\\"dir\\": 4\\n}\\n],\\n\\"properties\\": {\\n\\"toggleRestriction\\": \\"default\\"\\n}\\n},\\n{\\n\\"id\\": 64,\\n\\"type\\": \\"StylesImage_Zho\\",\\n\\"pos\\": [\\n-200,\\n1020\\n],\\n\\"size\\": {\\n\\"0\\": 320,\\n\\"1\\": 420\\n},\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"name\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n476,\\n479\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": null,\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"StylesImage_Zho\\"\\n},\\n\\"widgets_values\\": [\\n\\"Watercolor.png\\",\\n1.04\\n]\\n},\\n{\\n\\"id\\": 69,\\n\\"type\\": \\"PrimitiveNode\\",\\n\\"pos\\": [\\n140,\\n310\\n],\\n\\"size\\": [\\n320,\\n140\\n],\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"STRING\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n480\\n],\\n\\"slot_index\\": 0,\\n\\"widget\\": {\\n\\"name\\": \\"text_2\\"\\n}\\n}\\n],\\n\\"title\\": \\"Prompt\\",\\n\\"properties\\": {\\n\\"Run widget replace on values\\": false\\n},\\n\\"widgets_values\\": [\\n\\"cute\\"\\n]\\n},\\n{\\n\\"id\\": 68,\\n\\"type\\": \\"ConcatText_Zho\\",\\n\\"pos\\": [\\n140,\\n610\\n],\\n\\"size\\": [\\n340,\\n60\\n],\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 14,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"text_1\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 483,\\n\\"widget\\": {\\n\\"name\\": \\"text_1\\"\\n},\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"text_2\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 480,\\n\\"widget\\": {\\n\\"name\\": \\"text_2\\"\\n},\\n\\"slot_index\\": 1\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"text\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n469\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ConcatText_Zho\\"\\n},\\n\\"widgets_values\\": [\\n\\"\\",\\n\\"cute\\"\\n]\\n},\\n{\\n\\"id\\": 67,\\n\\"type\\": \\"ConcatText_Zho\\",\\n\\"pos\\": [\\n140,\\n556\\n],\\n\\"size\\": {\\n\\"0\\": 320,\\n\\"1\\": 54\\n},\\n\\"flags\\": {\\n\\"collapsed\\": true\\n},\\n\\"order\\": 12,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"text_1\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 463,\\n\\"widget\\": {\\n\\"name\\": \\"text_1\\"\\n},\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"text_2\\",\\n\\"type\\": \\"STRING\\",\\n\\"link\\": 479,\\n\\"widget\\": {\\n\\"name\\": \\"text_2\\"\\n},\\n\\"slot_index\\": 1\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"text\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n481\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ConcatText_Zho\\"\\n},\\n\\"widgets_values\\": [\\n\\"\\",\\n\\"\\"\\n]\\n},\\n{\\n\\"id\\": 63,\\n\\"type\\": \\"MovementsImage_Zho\\",\\n\\"pos\\": [\\n-200,\\n550\\n],\\n\\"size\\": {\\n\\"0\\": 320,\\n\\"1\\": 420\\n},\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"name\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n475,\\n478\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": null,\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"MovementsImage_Zho\\"\\n},\\n\\"widgets_values\\": [\\n\\"Generative Art.png\\",\\n1.2\\n]\\n},\\n{\\n\\"id\\": 62,\\n\\"type\\": \\"ArtistsImage_Zho\\",\\n\\"pos\\": [\\n-200,\\n90\\n],\\n\\"size\\": {\\n\\"0\\": 320,\\n\\"1\\": 410\\n},\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"name\\",\\n\\"type\\": \\"STRING\\",\\n\\"links\\": [\\n474,\\n477\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": null,\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ArtistsImage_Zho\\"\\n},\\n\\"widgets_values\\": [\\n\\"James Gilleard.png\\",\\n0.53\\n]\\n}\\n],\\n\\"links\\": [\\n[\\n8,\\n4,\\n2,\\n8,\\n1,\\n\\"VAE\\"\\n],\\n[\\n124,\\n4,\\n1,\\n7,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n125,\\n4,\\n1,\\n6,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n419,\\n8,\\n0,\\n41,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n437,\\n58,\\n0,\\n59,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n438,\\n58,\\n1,\\n59,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n440,\\n53,\\n0,\\n60,\\n0,\\n\\"NOISE\\"\\n],\\n[\\n441,\\n59,\\n0,\\n60,\\n1,\\n\\"GUIDER\\"\\n],\\n[\\n442,\\n52,\\n0,\\n60,\\n2,\\n\\"SAMPLER\\"\\n],\\n[\\n443,\\n55,\\n0,\\n60,\\n3,\\n\\"SIGMAS\\"\\n],\\n[\\n444,\\n58,\\n2,\\n60,\\n4,\\n\\"LATENT\\"\\n],\\n[\\n448,\\n4,\\n2,\\n58,\\n2,\\n\\"VAE\\"\\n],\\n[\\n449,\\n13,\\n0,\\n58,\\n3,\\n\\"IMAGE\\"\\n],\\n[\\n450,\\n60,\\n0,\\n8,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n451,\\n7,\\n0,\\n58,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n452,\\n7,\\n0,\\n59,\\n3,\\n\\"CONDITIONING\\"\\n],\\n[\\n453,\\n6,\\n0,\\n58,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n454,\\n4,\\n0,\\n55,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n455,\\n4,\\n0,\\n59,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n463,\\n66,\\n0,\\n67,\\n0,\\n\\"STRING\\"\\n],\\n[\\n469,\\n68,\\n0,\\n6,\\n1,\\n\\"STRING\\"\\n],\\n[\\n474,\\n62,\\n0,\\n70,\\n0,\\n\\"<em>\\"\\n],\\n[\\n475,\\n63,\\n0,\\n70,\\n1,\\n\\"</em>\\"\\n],\\n[\\n476,\\n64,\\n0,\\n70,\\n2,\\n\\"<em>\\"\\n],\\n[\\n477,\\n62,\\n0,\\n66,\\n0,\\n\\"STRING\\"\\n],\\n[\\n478,\\n63,\\n0,\\n66,\\n1,\\n\\"STRING\\"\\n],\\n[\\n479,\\n64,\\n0,\\n67,\\n1,\\n\\"STRING\\"\\n],\\n[\\n480,\\n69,\\n0,\\n68,\\n1,\\n\\"STRING\\"\\n],\\n[\\n481,\\n67,\\n0,\\n71,\\n0,\\n\\"</em>\\"\\n],\\n[\\n482,\\n66,\\n0,\\n71,\\n1,\\n\\"STRING\\"\\n],\\n[\\n483,\\n71,\\n0,\\n68,\\n0,\\n\\"STRING\\"\\n]\\n],\\n\\"groups\\": [],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"groupNodes\\": {\\n\\"IP2PSampler\\": {\\n\\"nodes\\": [\\n{\\n\\"type\\": \\"KSamplerSelect\\",\\n\\"pos\\": [\\n912,\\n1536\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"SAMPLER\\",\\n\\"type\\": \\"SAMPLER\\",\\n\\"links\\": [],\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSamplerSelect\\"\\n},\\n\\"widgets_values\\": [\\n\\"euler\\"\\n],\\n\\"index\\": 0\\n},\\n{\\n\\"type\\": \\"RandomNoise\\",\\n\\"pos\\": [\\n912,\\n1200\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 82\\n},\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"NOISE\\",\\n\\"type\\": \\"NOISE\\",\\n\\"links\\": [],\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"RandomNoise\\"\\n},\\n\\"widgets_values\\": [\\n156680208700303,\\n\\"fixed\\"\\n],\\n\\"index\\": 1\\n},\\n{\\n\\"type\\": \\"Reroute\\",\\n\\"pos\\": [\\n720,\\n1488\\n],\\n\\"size\\": [\\n75,\\n26\\n],\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"<em>\\",\\n\\"link\\": null\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"</em>\\",\\n\\"links\\": null\\n}\\n],\\n\\"properties\\": {\\n\\"showOutputText\\": false,\\n\\"horizontal\\": false\\n},\\n\\"index\\": 2\\n},\\n{\\n\\"type\\": \\"BasicScheduler\\",\\n\\"pos\\": [\\n912,\\n1632\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 106\\n},\\n\\"flags\\": {},\\n\\"order\\": 12,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": null\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"SIGMAS\\",\\n\\"type\\": \\"SIGMAS\\",\\n\\"links\\": [],\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"BasicScheduler\\"\\n},\\n\\"widgets_values\\": [\\n\\"normal\\",\\n20,\\n1\\n],\\n\\"index\\": 3\\n},\\n{\\n\\"type\\": \\"Reroute\\",\\n\\"pos\\": [\\n575,\\n1344\\n],\\n\\"size\\": [\\n75,\\n26\\n],\\n\\"flags\\": {},\\n\\"order\\": 14,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"<em>\\",\\n\\"link\\": null\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"</em>\\",\\n\\"links\\": null\\n}\\n],\\n\\"properties\\": {\\n\\"showOutputText\\": false,\\n\\"horizontal\\": false\\n},\\n\\"index\\": 4\\n},\\n{\\n\\"type\\": \\"Reroute\\",\\n\\"pos\\": [\\n570,\\n1386\\n],\\n\\"size\\": [\\n75,\\n26\\n],\\n\\"flags\\": {},\\n\\"order\\": 13,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"<em>\\",\\n\\"link\\": null\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"</em>\\",\\n\\"links\\": null\\n}\\n],\\n\\"properties\\": {\\n\\"showOutputText\\": false,\\n\\"horizontal\\": false\\n},\\n\\"index\\": 5\\n},\\n{\\n\\"type\\": \\"InstructPixToPixConditioning\\",\\n\\"pos\\": [\\n672,\\n1344\\n],\\n\\"size\\": {\\n\\"0\\": 235.1999969482422,\\n\\"1\\": 86\\n},\\n\\"flags\\": {},\\n\\"order\\": 15,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": null\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": null\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": null\\n},\\n{\\n\\"name\\": \\"pixels\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": null\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"latent\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"slot_index\\": 2\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"InstructPixToPixConditioning\\"\\n},\\n\\"index\\": 6\\n},\\n{\\n\\"type\\": \\"DualCFGGuider\\",\\n\\"pos\\": [\\n912,\\n1344\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 142\\n},\\n\\"flags\\": {},\\n\\"order\\": 16,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": null\\n},\\n{\\n\\"name\\": \\"cond1\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": null\\n},\\n{\\n\\"name\\": \\"cond2\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": null\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": null\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"GUIDER\\",\\n\\"type\\": \\"GUIDER\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"DualCFGGuider\\"\\n},\\n\\"widgets_values\\": [\\n3,\\n1.5\\n],\\n\\"index\\": 7\\n},\\n{\\n\\"type\\": \\"SamplerCustomAdvanced\\",\\n\\"pos\\": [\\n1296,\\n1200\\n],\\n\\"size\\": {\\n\\"0\\": 355.20001220703125,\\n\\"1\\": 106\\n},\\n\\"flags\\": {},\\n\\"order\\": 17,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"noise\\",\\n\\"type\\": \\"NOISE\\",\\n\\"link\\": null,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"guider\\",\\n\\"type\\": \\"GUIDER\\",\\n\\"link\\": null,\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"sampler\\",\\n\\"type\\": \\"SAMPLER\\",\\n\\"link\\": null,\\n\\"slot_index\\": 2\\n},\\n{\\n\\"name\\": \\"sigmas\\",\\n\\"type\\": \\"SIGMAS\\",\\n\\"link\\": null,\\n\\"slot_index\\": 3\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": null,\\n\\"slot_index\\": 4\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"output\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"denoised_output\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": null,\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"SamplerCustomAdvanced\\"\\n},\\n\\"index\\": 8\\n}\\n],\\n\\"links\\": [\\n[\\nnull,\\n0,\\n2,\\n0,\\n4,\\n\\"MODEL\\"\\n],\\n[\\n2,\\n0,\\n3,\\n0,\\n26,\\n\\"MODEL\\"\\n],\\n[\\nnull,\\n0,\\n5,\\n0,\\n7,\\n\\"CONDITIONING\\"\\n],\\n[\\nnull,\\n0,\\n4,\\n0,\\n6,\\n\\"CONDITIONING\\"\\n],\\n[\\n4,\\n0,\\n6,\\n0,\\n35,\\n\\"CONDITIONING\\"\\n],\\n[\\n5,\\n0,\\n6,\\n1,\\n29,\\n\\"CONDITIONING\\"\\n],\\n[\\nnull,\\n2,\\n6,\\n2,\\n4,\\n\\"VAE\\"\\n],\\n[\\nnull,\\n0,\\n6,\\n3,\\n13,\\n\\"IMAGE\\"\\n],\\n[\\n2,\\n0,\\n7,\\n0,\\n26,\\n\\"MODEL\\"\\n],\\n[\\n6,\\n0,\\n7,\\n1,\\n33,\\n\\"CONDITIONING\\"\\n],\\n[\\n6,\\n1,\\n7,\\n2,\\n33,\\n\\"CONDITIONING\\"\\n],\\n[\\n5,\\n0,\\n7,\\n3,\\n29,\\n\\"CONDITIONING\\"\\n],\\n[\\n1,\\n0,\\n8,\\n0,\\n19,\\n\\"NOISE\\"\\n],\\n[\\n7,\\n0,\\n8,\\n1,\\n28,\\n\\"GUIDER\\"\\n],\\n[\\n0,\\n0,\\n8,\\n2,\\n20,\\n\\"SAMPLER\\"\\n],\\n[\\n3,\\n0,\\n8,\\n3,\\n21,\\n\\"SIGMAS\\"\\n],\\n[\\n6,\\n2,\\n8,\\n4,\\n33,\\n\\"LATENT\\"\\n]\\n],\\n\\"external\\": [\\n[\\n{\\n\\"type\\": \\"SamplerCustomAdvanced\\",\\n\\"pos\\": [\\n1296,\\n1200\\n],\\n\\"size\\": {\\n\\"0\\": 355.20001220703125,\\n\\"1\\": 106\\n},\\n\\"flags\\": {},\\n\\"order\\": 17,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"noise\\",\\n\\"type\\": \\"NOISE\\",\\n\\"link\\": null,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"guider\\",\\n\\"type\\": \\"GUIDER\\",\\n\\"link\\": null,\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"sampler\\",\\n\\"type\\": \\"SAMPLER\\",\\n\\"link\\": null,\\n\\"slot_index\\": 2\\n},\\n{\\n\\"name\\": \\"sigmas\\",\\n\\"type\\": \\"SIGMAS\\",\\n\\"link\\": null,\\n\\"slot_index\\": 3\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": null,\\n\\"slot_index\\": 4\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"output\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"denoised_output\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": null,\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"SamplerCustomAdvanced\\"\\n},\\n\\"index\\": 8\\n},\\n0,\\n\\"LATENT\\"\\n]\\n],\\n\\"config\\": {\\n\\"0\\": {},\\n\\"1\\": {},\\n\\"2\\": {\\n\\"input\\": {\\n\\"MODEL\\": {\\n\\"name\\": \\"model\\"\\n}\\n}\\n},\\n\\"3\\": {},\\n\\"4\\": {\\n\\"input\\": {\\n\\"CONDITIONING\\": {\\n\\"name\\": \\"positive\\"\\n}\\n}\\n},\\n\\"5\\": {\\n\\"input\\": {\\n\\"CONDITIONING\\": {\\n\\"name\\": \\"negative\\"\\n}\\n}\\n},\\n\\"6\\": {},\\n\\"7\\": {\\n\\"input\\": {\\n\\"cfg_conds\\": {\\n\\"name\\": \\"cfg_text\\"\\n},\\n\\"cfg_cond2_negative\\": {\\n\\"name\\": \\"cfg_image\\"\\n}\\n}\\n},\\n\\"8\\": {}\\n}\\n}\\n}\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/CosXL Edit + ArtGallery 1.0【Zho】.json","value":{"title":"CosXL Edit + ArtGallery 1.0【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/CosXL Edit + ArtGallery 1.0【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{m as comp,u as data};

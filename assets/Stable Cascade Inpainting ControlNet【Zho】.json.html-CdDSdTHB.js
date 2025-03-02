import{_ as r,e as b,h as e,r as t,o as s}from"./app-OgO1lqgf.js";const a={};function i(o,p){const n=t("VueFlow");return s(),b("div",null,[e(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 77,
  "last_link_id": 356,
  "nodes": [
    {
      "id": 42,
      "type": "CheckpointLoaderSimple",
      "pos": [
        -2020,
        -280
      ],
      "size": {
        "0": 350,
        "1": 100
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            113
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": null,
          "shape": 3
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            114
          ],
          "shape": 3,
          "slot_index": 2
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimple"
      },
      "widgets_values": [
        "stable_cascade_stage_b.safetensors"
      ]
    },
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": [
        -2020,
        260
      ],
      "size": {
        "0": 350,
        "1": 50
      },
      "flags": {},
      "order": 14,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 98
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 114,
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            339,
            355
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      }
    },
    {
      "id": 50,
      "type": "LoadImage",
      "pos": [
        -3150,
        360
      ],
      "size": {
        "0": 440,
        "1": 530
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            338,
            340
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "MASK",
          "type": "MASK",
          "links": [
            337,
            343
          ],
          "shape": 3,
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "LoadImage"
      },
      "widgets_values": [
        "clipspace/clipspace-mask-870079.5.png [input]",
        "image"
      ]
    },
    {
      "id": 76,
      "type": "PreviewImage",
      "pos": [
        -2690,
        360
      ],
      "size": {
        "0": 500,
        "1": 530
      },
      "flags": {},
      "order": 16,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 355
        }
      ],
      "title": "inpainting",
      "properties": {
        "Node name for S&R": "PreviewImage"
      }
    },
    {
      "id": 77,
      "type": "PreviewImage",
      "pos": [
        -2170,
        360
      ],
      "size": {
        "0": 500,
        "1": 530
      },
      "flags": {},
      "order": 17,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 356
        }
      ],
      "title": "inpainting+composite",
      "properties": {
        "Node name for S&R": "PreviewImage"
      }
    },
    {
      "id": 33,
      "type": "KSampler",
      "pos": [
        -2020,
        -130
      ],
      "size": {
        "0": 350,
        "1": 340
      },
      "flags": {},
      "order": 13,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 113,
          "slot_index": 0
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 86
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 117
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 83
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            98
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        607627294521621,
        "randomize",
        10,
        1.1,
        "euler_ancestral",
        "simple",
        1
      ]
    },
    {
      "id": 3,
      "type": "KSampler",
      "pos": [
        -2400,
        -60
      ],
      "size": {
        "0": 360,
        "1": 270
      },
      "flags": {},
      "order": 11,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 110,
          "slot_index": 0
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 120
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 142
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 82
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            88
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        646140837286288,
        "randomize",
        20,
        4,
        "euler_ancestral",
        "simple",
        1
      ]
    },
    {
      "id": 49,
      "type": "ControlNetApplyAdvanced",
      "pos": [
        -2400,
        -280
      ],
      "size": {
        "0": 360,
        "1": 170
      },
      "flags": {},
      "order": 10,
      "mode": 0,
      "inputs": [
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 118
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 119
        },
        {
          "name": "control_net",
          "type": "CONTROL_NET",
          "link": 122
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 336,
          "slot_index": 3
        }
      ],
      "outputs": [
        {
          "name": "positive",
          "type": "CONDITIONING",
          "links": [
            120
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "links": [
            142
          ],
          "shape": 3,
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
      ]
    },
    {
      "id": 36,
      "type": "StableCascade_StageB_Conditioning",
      "pos": [
        -2400,
        260
      ],
      "size": {
        "0": 360,
        "1": 50
      },
      "flags": {},
      "order": 12,
      "mode": 0,
      "inputs": [
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 116,
          "slot_index": 0
        },
        {
          "name": "stage_c",
          "type": "LATENT",
          "link": 88
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            86
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "StableCascade_StageB_Conditioning"
      }
    },
    {
      "id": 71,
      "type": "GrowMask",
      "pos": [
        -2770,
        30
      ],
      "size": [
        350,
        80
      ],
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "mask",
          "type": "MASK",
          "link": 354
        }
      ],
      "outputs": [
        {
          "name": "MASK",
          "type": "MASK",
          "links": [
            353
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "GrowMask"
      },
      "widgets_values": [
        -8,
        true
      ]
    },
    {
      "id": 7,
      "type": "CLIPTextEncode",
      "pos": [
        -2770,
        -100
      ],
      "size": [
        350,
        80
      ],
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 112
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            117,
            119
          ],
          "slot_index": 0
        }
      ],
      "title": "CLIP Text Encode (Negative Prompt)",
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "text, watermark"
      ]
    },
    {
      "id": 69,
      "type": "ImageCompositeMasked",
      "pos": [
        -2770,
        160
      ],
      "size": [
        350,
        150
      ],
      "flags": {},
      "order": 15,
      "mode": 0,
      "inputs": [
        {
          "name": "destination",
          "type": "IMAGE",
          "link": 339
        },
        {
          "name": "source",
          "type": "IMAGE",
          "link": 340
        },
        {
          "name": "mask",
          "type": "MASK",
          "link": 353
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            356
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ImageCompositeMasked"
      },
      "widgets_values": [
        0,
        0,
        true
      ]
    },
    {
      "id": 41,
      "type": "CheckpointLoaderSimple",
      "pos": [
        -3150,
        -280
      ],
      "size": [
        360,
        100
      ],
      "flags": {},
      "order": 2,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            110
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            111,
            112
          ],
          "shape": 3,
          "slot_index": 1
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": null,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimple"
      },
      "widgets_values": [
        "stable_cascade_stage_c.safetensors"
      ]
    },
    {
      "id": 34,
      "type": "StableCascade_EmptyLatentImage",
      "pos": [
        -3150,
        -130
      ],
      "size": [
        360,
        150
      ],
      "flags": {},
      "order": 3,
      "mode": 0,
      "outputs": [
        {
          "name": "stage_c",
          "type": "LATENT",
          "links": [
            82
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "stage_b",
          "type": "LATENT",
          "links": [
            83
          ],
          "shape": 3,
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "StableCascade_EmptyLatentImage"
      },
      "widgets_values": [
        1024,
        1024,
        42,
        1
      ]
    },
    {
      "id": 47,
      "type": "ControlNetLoader",
      "pos": [
        -3150,
        70
      ],
      "size": [
        360,
        60
      ],
      "flags": {},
      "order": 4,
      "mode": 0,
      "outputs": [
        {
          "name": "CONTROL_NET",
          "type": "CONTROL_NET",
          "links": [
            122
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ControlNetLoader"
      },
      "widgets_values": [
        "scinpainting.safetensors"
      ]
    },
    {
      "id": 68,
      "type": "workflow/StableCascadeInpaintCnet",
      "pos": [
        -3150,
        180
      ],
      "size": [
        360,
        50
      ],
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 338
        },
        {
          "name": "mask",
          "type": "MASK",
          "link": 337
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            336
          ],
          "shape": 3
        }
      ],
      "title": "StableCascadeInpaint",
      "properties": {
        "Node name for S&R": "workflow/StableCascadeInpaintCnet"
      },
      "widgets_values": [
        512,
        512,
        1,
        16777215,
        0.5,
        0,
        0,
        true
      ]
    },
    {
      "id": 70,
      "type": "InvertMask",
      "pos": [
        -3150,
        280
      ],
      "size": [
        360,
        30
      ],
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "mask",
          "type": "MASK",
          "link": 343
        }
      ],
      "outputs": [
        {
          "name": "MASK",
          "type": "MASK",
          "links": [
            354
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "InvertMask"
      }
    },
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": [
        -2770,
        -280
      ],
      "size": [
        350,
        130
      ],
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 111
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            116,
            118
          ],
          "slot_index": 0
        }
      ],
      "title": "CLIP Text Encode (Positive Prompt)",
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "avocado"
      ]
    }
  ],
  "links": [
    [
      82,
      34,
      0,
      3,
      3,
      "LATENT"
    ],
    [
      83,
      34,
      1,
      33,
      3,
      "LATENT"
    ],
    [
      86,
      36,
      0,
      33,
      1,
      "CONDITIONING"
    ],
    [
      88,
      3,
      0,
      36,
      1,
      "LATENT"
    ],
    [
      98,
      33,
      0,
      8,
      0,
      "LATENT"
    ],
    [
      110,
      41,
      0,
      3,
      0,
      "MODEL"
    ],
    [
      111,
      41,
      1,
      6,
      0,
      "CLIP"
    ],
    [
      112,
      41,
      1,
      7,
      0,
      "CLIP"
    ],
    [
      113,
      42,
      0,
      33,
      0,
      "MODEL"
    ],
    [
      114,
      42,
      2,
      8,
      1,
      "VAE"
    ],
    [
      116,
      6,
      0,
      36,
      0,
      "CONDITIONING"
    ],
    [
      117,
      7,
      0,
      33,
      2,
      "CONDITIONING"
    ],
    [
      118,
      6,
      0,
      49,
      0,
      "CONDITIONING"
    ],
    [
      119,
      7,
      0,
      49,
      1,
      "CONDITIONING"
    ],
    [
      120,
      49,
      0,
      3,
      1,
      "CONDITIONING"
    ],
    [
      122,
      47,
      0,
      49,
      2,
      "CONTROL_NET"
    ],
    [
      142,
      49,
      1,
      3,
      2,
      "CONDITIONING"
    ],
    [
      336,
      68,
      0,
      49,
      3,
      "IMAGE"
    ],
    [
      337,
      50,
      1,
      68,
      1,
      "MASK"
    ],
    [
      338,
      50,
      0,
      68,
      0,
      "IMAGE"
    ],
    [
      339,
      8,
      0,
      69,
      0,
      "IMAGE"
    ],
    [
      340,
      50,
      0,
      69,
      1,
      "IMAGE"
    ],
    [
      343,
      50,
      1,
      70,
      0,
      "MASK"
    ],
    [
      353,
      71,
      0,
      69,
      2,
      "MASK"
    ],
    [
      354,
      70,
      0,
      71,
      0,
      "MASK"
    ],
    [
      355,
      8,
      0,
      76,
      0,
      "IMAGE"
    ],
    [
      356,
      69,
      0,
      77,
      0,
      "IMAGE"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "groupNodes": {
      "StableCascadeInpaintCnet": {
        "nodes": [
          {
            "type": "EmptyImage",
            "pos": [
              -304,
              -267
            ],
            "size": {
              "0": 315,
              "1": 130
            },
            "flags": {},
            "order": 10,
            "mode": 0,
            "outputs": [
              {
                "name": "IMAGE",
                "type": "IMAGE",
                "links": [],
                "shape": 3
              }
            ],
            "properties": {
              "Node name for S&R": "EmptyImage"
            },
            "widgets_values": [
              512,
              512,
              1,
              16777215
            ],
            "index": 0
          },
          {
            "type": "ThresholdMask",
            "pos": [
              -225,
              -369
            ],
            "size": {
              "0": 210,
              "1": 58
            },
            "flags": {},
            "order": 14,
            "mode": 0,
            "inputs": [
              {
                "name": "mask",
                "type": "MASK",
                "link": null,
                "slot_index": 0
              }
            ],
            "outputs": [
              {
                "name": "MASK",
                "type": "MASK",
                "links": [],
                "shape": 3,
                "slot_index": 0
              }
            ],
            "properties": {
              "Node name for S&R": "ThresholdMask"
            },
            "widgets_values": [
              0.5
            ],
            "index": 1
          },
          {
            "type": "InvertMask",
            "pos": [
              -224,
              -451
            ],
            "size": {
              "0": 210,
              "1": 26
            },
            "flags": {},
            "order": 15,
            "mode": 0,
            "inputs": [
              {
                "name": "mask",
                "type": "MASK",
                "link": null
              }
            ],
            "outputs": [
              {
                "name": "MASK",
                "type": "MASK",
                "links": [],
                "shape": 3,
                "slot_index": 0
              }
            ],
            "properties": {
              "Node name for S&R": "InvertMask"
            },
            "index": 2
          },
          {
            "type": "ImageCompositeMasked",
            "pos": [
              38,
              -396
            ],
            "size": {
              "0": 315,
              "1": 146
            },
            "flags": {},
            "order": 16,
            "mode": 0,
            "inputs": [
              {
                "name": "destination",
                "type": "IMAGE",
                "link": null
              },
              {
                "name": "source",
                "type": "IMAGE",
                "link": null,
                "slot_index": 1
              },
              {
                "name": "mask",
                "type": "MASK",
                "link": null
              }
            ],
            "outputs": [
              {
                "name": "IMAGE",
                "type": "IMAGE",
                "links": [],
                "shape": 3,
                "slot_index": 0
              }
            ],
            "properties": {
              "Node name for S&R": "ImageCompositeMasked"
            },
            "widgets_values": [
              0,
              0,
              true
            ],
            "index": 3
          },
          {
            "type": "Reroute",
            "pos": [
              -372,
              -443
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
            "index": 4
          },
          {
            "type": "JoinImageWithAlpha",
            "pos": [
              375,
              -460
            ],
            "size": {
              "0": 210,
              "1": 46
            },
            "flags": {},
            "order": 17,
            "mode": 0,
            "inputs": [
              {
                "name": "image",
                "type": "IMAGE",
                "link": null
              },
              {
                "name": "alpha",
                "type": "MASK",
                "link": null
              }
            ],
            "outputs": [
              {
                "name": "IMAGE",
                "type": "IMAGE",
                "links": [],
                "shape": 3,
                "slot_index": 0
              }
            ],
            "properties": {
              "Node name for S&R": "JoinImageWithAlpha"
            },
            "index": 5
          }
        ],
        "links": [
          [
            null,
            1,
            4,
            0,
            50,
            "MASK"
          ],
          [
            4,
            0,
            1,
            0,
            66,
            "MASK"
          ],
          [
            4,
            0,
            2,
            0,
            66,
            "MASK"
          ],
          [
            null,
            0,
            3,
            0,
            50,
            "IMAGE"
          ],
          [
            0,
            0,
            3,
            1,
            62,
            "IMAGE"
          ],
          [
            1,
            0,
            3,
            2,
            64,
            "MASK"
          ],
          [
            3,
            0,
            5,
            0,
            59,
            "IMAGE"
          ],
          [
            2,
            0,
            5,
            1,
            61,
            "MASK"
          ]
        ],
        "external": [
          [
            {
              "type": "JoinImageWithAlpha",
              "pos": [
                375,
                -460
              ],
              "size": {
                "0": 210,
                "1": 46
              },
              "flags": {},
              "order": 17,
              "mode": 0,
              "inputs": [
                {
                  "name": "image",
                  "type": "IMAGE",
                  "link": null
                },
                {
                  "name": "alpha",
                  "type": "MASK",
                  "link": null
                }
              ],
              "outputs": [
                {
                  "name": "IMAGE",
                  "type": "IMAGE",
                  "links": [],
                  "shape": 3,
                  "slot_index": 0
                }
              ],
              "properties": {
                "Node name for S&R": "JoinImageWithAlpha"
              },
              "index": 5
            },
            0,
            "IMAGE"
          ]
        ],
        "config": {
          "0": {
            "input": {
              "width": {
                "visible": false
              },
              "height": {
                "visible": false
              },
              "batch_size": {
                "visible": false
              },
              "color": {
                "visible": false
              }
            }
          },
          "1": {
            "input": {
              "value": {
                "visible": false
              }
            }
          },
          "2": {},
          "3": {
            "input": {
              "x": {
                "visible": false
              },
              "y": {
                "visible": false
              },
              "resize_source": {
                "visible": false
              },
              "destination": {
                "name": "image"
              }
            }
          },
          "4": {
            "output": {
              "0": {
                "name": ""
              }
            },
            "input": {
              "MASK": {
                "name": "mask"
              }
            }
          },
          "5": {}
        }
      }
    }
  },
  "version": 0.4
}
`})])}const d=r(a,[["render",i],["__file","Stable Cascade Inpainting ControlNet【Zho】.json.html.vue"]]),m=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/Stable%20Cascade%20Inpainting%20ControlNet%E3%80%90Zho%E3%80%91.json.html","title":"Stable Cascade Inpainting ControlNet【Zho】.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 77, \\"last_link_id\\": 356, \\"nodes\\": [ { \\"id\\": 42, \\"type\\": \\"CheckpointLoaderSimple\\", \\"pos\\": [ -2020, -280 ], \\"size\\": { \\"0\\": 350, \\"1\\": 100 }, \\"flags\\": {}, \\"order\\":...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/Stable%20Cascade%20Inpainting%20ControlNet%E3%80%90Zho%E3%80%91.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 77, \\"last_link_id\\": 356, \\"nodes\\": [ { \\"id\\": 42, \\"type\\": \\"CheckpointLoaderSimple\\", \\"pos\\": [ -2020, -280 ], \\"size\\": { \\"0\\": 350, \\"1\\": 100 }, \\"flags\\": {}, \\"order\\":..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"git":{},"readingTime":{"minutes":4.97,"words":1490},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/Stable Cascade Inpainting ControlNet【Zho】.json","excerpt":"<p>{<br>\\n\\"last_node_id\\": 77,<br>\\n\\"last_link_id\\": 356,<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": 42,<br>\\n\\"type\\": \\"CheckpointLoaderSimple\\",<br>\\n\\"pos\\": [<br>\\n-2020,<br>\\n-280<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 350,<br>\\n\\"1\\": 100<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 0,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n113<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n114<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 2<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"stable_cascade_stage_b.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 8,<br>\\n\\"type\\": \\"VAEDecode\\",<br>\\n\\"pos\\": [<br>\\n-2020,<br>\\n260<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 350,<br>\\n\\"1\\": 50<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 14,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 98<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 114,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n339,<br>\\n355<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 50,<br>\\n\\"type\\": \\"LoadImage\\",<br>\\n\\"pos\\": [<br>\\n-3150,<br>\\n360<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 440,<br>\\n\\"1\\": 530<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 1,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n338,<br>\\n340<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": [<br>\\n337,<br>\\n343<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"clipspace/clipspace-mask-870079.5.png [input]\\",<br>\\n\\"image\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 76,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n-2690,<br>\\n360<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 500,<br>\\n\\"1\\": 530<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 16,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 355<br>\\n}<br>\\n],<br>\\n\\"title\\": \\"inpainting\\",<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 77,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n-2170,<br>\\n360<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 500,<br>\\n\\"1\\": 530<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 17,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 356<br>\\n}<br>\\n],<br>\\n\\"title\\": \\"inpainting+composite\\",<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 33,<br>\\n\\"type\\": \\"KSampler\\",<br>\\n\\"pos\\": [<br>\\n-2020,<br>\\n-130<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 350,<br>\\n\\"1\\": 340<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 13,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 113,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 86<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 117<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 83<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n98<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n607627294521621,<br>\\n\\"randomize\\",<br>\\n10,<br>\\n1.1,<br>\\n\\"euler_ancestral\\",<br>\\n\\"simple\\",<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 3,<br>\\n\\"type\\": \\"KSampler\\",<br>\\n\\"pos\\": [<br>\\n-2400,<br>\\n-60<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 360,<br>\\n\\"1\\": 270<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 11,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 110,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 120<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 142<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 82<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n88<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSampler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n646140837286288,<br>\\n\\"randomize\\",<br>\\n20,<br>\\n4,<br>\\n\\"euler_ancestral\\",<br>\\n\\"simple\\",<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 49,<br>\\n\\"type\\": \\"ControlNetApplyAdvanced\\",<br>\\n\\"pos\\": [<br>\\n-2400,<br>\\n-280<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 360,<br>\\n\\"1\\": 170<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 10,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 118<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 119<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"control_net\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"link\\": 122<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 336,<br>\\n\\"slot_index\\": 3<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"positive\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n120<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"negative\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n142<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetApplyAdvanced\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n1,<br>\\n0,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 36,<br>\\n\\"type\\": \\"StableCascade_StageB_Conditioning\\",<br>\\n\\"pos\\": [<br>\\n-2400,<br>\\n260<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 360,<br>\\n\\"1\\": 50<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 12,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"conditioning\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": 116,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"stage_c\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 88<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n86<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"StableCascade_StageB_Conditioning\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 71,<br>\\n\\"type\\": \\"GrowMask\\",<br>\\n\\"pos\\": [<br>\\n-2770,<br>\\n30<br>\\n],<br>\\n\\"size\\": [<br>\\n350,<br>\\n80<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 9,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"mask\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"link\\": 354<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": [<br>\\n353<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"GrowMask\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n-8,<br>\\ntrue<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 7,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n-2770,<br>\\n-100<br>\\n],<br>\\n\\"size\\": [<br>\\n350,<br>\\n80<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 8,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 112<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n117,<br>\\n119<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"title\\": \\"CLIP Text Encode (Negative Prompt)\\",<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"text, watermark\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 69,<br>\\n\\"type\\": \\"ImageCompositeMasked\\",<br>\\n\\"pos\\": [<br>\\n-2770,<br>\\n160<br>\\n],<br>\\n\\"size\\": [<br>\\n350,<br>\\n150<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 15,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"destination\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 339<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"source\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 340<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"mask\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"link\\": 353<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n356<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ImageCompositeMasked\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n0,<br>\\n0,<br>\\ntrue<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 41,<br>\\n\\"type\\": \\"CheckpointLoaderSimple\\",<br>\\n\\"pos\\": [<br>\\n-3150,<br>\\n-280<br>\\n],<br>\\n\\"size\\": [<br>\\n360,<br>\\n100<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 2,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n110<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n111,<br>\\n112<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"stable_cascade_stage_c.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 34,<br>\\n\\"type\\": \\"StableCascade_EmptyLatentImage\\",<br>\\n\\"pos\\": [<br>\\n-3150,<br>\\n-130<br>\\n],<br>\\n\\"size\\": [<br>\\n360,<br>\\n150<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"stage_c\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n82<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"stage_b\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n83<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"StableCascade_EmptyLatentImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n1024,<br>\\n1024,<br>\\n42,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 47,<br>\\n\\"type\\": \\"ControlNetLoader\\",<br>\\n\\"pos\\": [<br>\\n-3150,<br>\\n70<br>\\n],<br>\\n\\"size\\": [<br>\\n360,<br>\\n60<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONTROL_NET\\",<br>\\n\\"type\\": \\"CONTROL_NET\\",<br>\\n\\"links\\": [<br>\\n122<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"scinpainting.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 68,<br>\\n\\"type\\": \\"workflow/StableCascadeInpaintCnet\\",<br>\\n\\"pos\\": [<br>\\n-3150,<br>\\n180<br>\\n],<br>\\n\\"size\\": [<br>\\n360,<br>\\n50<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 5,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 338<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"mask\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"link\\": 337<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n336<br>\\n],<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"title\\": \\"StableCascadeInpaint\\",<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"workflow/StableCascadeInpaintCnet\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n512,<br>\\n512,<br>\\n1,<br>\\n16777215,<br>\\n0.5,<br>\\n0,<br>\\n0,<br>\\ntrue<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 70,<br>\\n\\"type\\": \\"InvertMask\\",<br>\\n\\"pos\\": [<br>\\n-3150,<br>\\n280<br>\\n],<br>\\n\\"size\\": [<br>\\n360,<br>\\n30<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"mask\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"link\\": 343<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": [<br>\\n354<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"InvertMask\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 6,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n-2770,<br>\\n-280<br>\\n],<br>\\n\\"size\\": [<br>\\n350,<br>\\n130<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 7,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 111<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [<br>\\n116,<br>\\n118<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"title\\": \\"CLIP Text Encode (Positive Prompt)\\",<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"avocado\\"<br>\\n]<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\n82,<br>\\n34,<br>\\n0,<br>\\n3,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n83,<br>\\n34,<br>\\n1,<br>\\n33,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n86,<br>\\n36,<br>\\n0,<br>\\n33,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n88,<br>\\n3,<br>\\n0,<br>\\n36,<br>\\n1,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n98,<br>\\n33,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n110,<br>\\n41,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n111,<br>\\n41,<br>\\n1,<br>\\n6,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n112,<br>\\n41,<br>\\n1,<br>\\n7,<br>\\n0,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n113,<br>\\n42,<br>\\n0,<br>\\n33,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n114,<br>\\n42,<br>\\n2,<br>\\n8,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n116,<br>\\n6,<br>\\n0,<br>\\n36,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n117,<br>\\n7,<br>\\n0,<br>\\n33,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n118,<br>\\n6,<br>\\n0,<br>\\n49,<br>\\n0,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n119,<br>\\n7,<br>\\n0,<br>\\n49,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n120,<br>\\n49,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n122,<br>\\n47,<br>\\n0,<br>\\n49,<br>\\n2,<br>\\n\\"CONTROL_NET\\"<br>\\n],<br>\\n[<br>\\n142,<br>\\n49,<br>\\n1,<br>\\n3,<br>\\n2,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n336,<br>\\n68,<br>\\n0,<br>\\n49,<br>\\n3,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n337,<br>\\n50,<br>\\n1,<br>\\n68,<br>\\n1,<br>\\n\\"MASK\\"<br>\\n],<br>\\n[<br>\\n338,<br>\\n50,<br>\\n0,<br>\\n68,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n339,<br>\\n8,<br>\\n0,<br>\\n69,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n340,<br>\\n50,<br>\\n0,<br>\\n69,<br>\\n1,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n343,<br>\\n50,<br>\\n1,<br>\\n70,<br>\\n0,<br>\\n\\"MASK\\"<br>\\n],<br>\\n[<br>\\n353,<br>\\n71,<br>\\n0,<br>\\n69,<br>\\n2,<br>\\n\\"MASK\\"<br>\\n],<br>\\n[<br>\\n354,<br>\\n70,<br>\\n0,<br>\\n71,<br>\\n0,<br>\\n\\"MASK\\"<br>\\n],<br>\\n[<br>\\n355,<br>\\n8,<br>\\n0,<br>\\n76,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n356,<br>\\n69,<br>\\n0,<br>\\n77,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n]<br>\\n],<br>\\n\\"groups\\": [],<br>\\n\\"config\\": {},<br>\\n\\"extra\\": {<br>\\n\\"groupNodes\\": {<br>\\n\\"StableCascadeInpaintCnet\\": {<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"type\\": \\"EmptyImage\\",<br>\\n\\"pos\\": [<br>\\n-304,<br>\\n-267<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 130<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 10,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"EmptyImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n512,<br>\\n512,<br>\\n1,<br>\\n16777215<br>\\n],<br>\\n\\"index\\": 0<br>\\n},<br>\\n{<br>\\n\\"type\\": \\"ThresholdMask\\",<br>\\n\\"pos\\": [<br>\\n-225,<br>\\n-369<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 58<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 14,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"mask\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ThresholdMask\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n0.5<br>\\n],<br>\\n\\"index\\": 1<br>\\n},<br>\\n{<br>\\n\\"type\\": \\"InvertMask\\",<br>\\n\\"pos\\": [<br>\\n-224,<br>\\n-451<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 26<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 15,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"mask\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"link\\": null<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"InvertMask\\"<br>\\n},<br>\\n\\"index\\": 2<br>\\n},<br>\\n{<br>\\n\\"type\\": \\"ImageCompositeMasked\\",<br>\\n\\"pos\\": [<br>\\n38,<br>\\n-396<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 315,<br>\\n\\"1\\": 146<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 16,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"destination\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": null<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"source\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"mask\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"link\\": null<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ImageCompositeMasked\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n0,<br>\\n0,<br>\\ntrue<br>\\n],<br>\\n\\"index\\": 3<br>\\n},<br>\\n{<br>\\n\\"type\\": \\"Reroute\\",<br>\\n\\"pos\\": [<br>\\n-372,<br>\\n-443<br>\\n],<br>\\n\\"size\\": [<br>\\n75,<br>\\n26<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 13,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"<em>\\",<br>\\n\\"link\\": null<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"\\",<br>\\n\\"type\\": \\"</em>\\",<br>\\n\\"links\\": null<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"showOutputText\\": false,<br>\\n\\"horizontal\\": false<br>\\n},<br>\\n\\"index\\": 4<br>\\n},<br>\\n{<br>\\n\\"type\\": \\"JoinImageWithAlpha\\",<br>\\n\\"pos\\": [<br>\\n375,<br>\\n-460<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 46<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 17,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": null<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"alpha\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"link\\": null<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"JoinImageWithAlpha\\"<br>\\n},<br>\\n\\"index\\": 5<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\nnull,<br>\\n1,<br>\\n4,<br>\\n0,<br>\\n50,<br>\\n\\"MASK\\"<br>\\n],<br>\\n[<br>\\n4,<br>\\n0,<br>\\n1,<br>\\n0,<br>\\n66,<br>\\n\\"MASK\\"<br>\\n],<br>\\n[<br>\\n4,<br>\\n0,<br>\\n2,<br>\\n0,<br>\\n66,<br>\\n\\"MASK\\"<br>\\n],<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n50,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n0,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n62,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n1,<br>\\n0,<br>\\n3,<br>\\n2,<br>\\n64,<br>\\n\\"MASK\\"<br>\\n],<br>\\n[<br>\\n3,<br>\\n0,<br>\\n5,<br>\\n0,<br>\\n59,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n2,<br>\\n0,<br>\\n5,<br>\\n1,<br>\\n61,<br>\\n\\"MASK\\"<br>\\n]<br>\\n],<br>\\n\\"external\\": [<br>\\n[<br>\\n{<br>\\n\\"type\\": \\"JoinImageWithAlpha\\",<br>\\n\\"pos\\": [<br>\\n375,<br>\\n-460<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 210,<br>\\n\\"1\\": 46<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 17,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": null<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"alpha\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"link\\": null<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"JoinImageWithAlpha\\"<br>\\n},<br>\\n\\"index\\": 5<br>\\n},<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n]<br>\\n],<br>\\n\\"config\\": {<br>\\n\\"0\\": {<br>\\n\\"input\\": {<br>\\n\\"width\\": {<br>\\n\\"visible\\": false<br>\\n},<br>\\n\\"height\\": {<br>\\n\\"visible\\": false<br>\\n},<br>\\n\\"batch_size\\": {<br>\\n\\"visible\\": false<br>\\n},<br>\\n\\"color\\": {<br>\\n\\"visible\\": false<br>\\n}<br>\\n}<br>\\n},<br>\\n\\"1\\": {<br>\\n\\"input\\": {<br>\\n\\"value\\": {<br>\\n\\"visible\\": false<br>\\n}<br>\\n}<br>\\n},<br>\\n\\"2\\": {},<br>\\n\\"3\\": {<br>\\n\\"input\\": {<br>\\n\\"x\\": {<br>\\n\\"visible\\": false<br>\\n},<br>\\n\\"y\\": {<br>\\n\\"visible\\": false<br>\\n},<br>\\n\\"resize_source\\": {<br>\\n\\"visible\\": false<br>\\n},<br>\\n\\"destination\\": {<br>\\n\\"name\\": \\"image\\"<br>\\n}<br>\\n}<br>\\n},<br>\\n\\"4\\": {<br>\\n\\"output\\": {<br>\\n\\"0\\": {<br>\\n\\"name\\": \\"\\"<br>\\n}<br>\\n},<br>\\n\\"input\\": {<br>\\n\\"MASK\\": {<br>\\n\\"name\\": \\"mask\\"<br>\\n}<br>\\n}<br>\\n},<br>\\n\\"5\\": {}<br>\\n}<br>\\n}<br>\\n}<br>\\n},<br>\\n\\"version\\": 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/Stable Cascade Inpainting ControlNet【Zho】.json","value":{"title":"Stable Cascade Inpainting ControlNet【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/Stable Cascade Inpainting ControlNet【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{d as comp,m as data};

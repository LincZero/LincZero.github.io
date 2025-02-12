import{_ as e,c as t,b as s,o as a,r as i}from"./app-BHdORQJ2.js";const o={};function p(l,d){const n=i("VueFlow");return a(),t("div",null,[s(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const m=e(o,[["render",p],["__file","Stable Cascade Inpainting ControlNet【Zho】.json.html.vue"]]),I=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/Stable%20Cascade%20Inpainting%20ControlNet%E3%80%90Zho%E3%80%91.json.html","title":"Stable Cascade Inpainting ControlNet【Zho】.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 77, \\"last_link_id\\": 356, \\"nodes\\": [ { \\"id\\": 42, \\"type\\": \\"CheckpointLoaderSimple\\", \\"pos\\": [ -2020, -280 ], \\"size\\": { \\"0\\": 350, \\"1\\": 100 }, \\"flags\\": {}, \\"order\\":...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/Stable%20Cascade%20Inpainting%20ControlNet%E3%80%90Zho%E3%80%91.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 77, \\"last_link_id\\": 356, \\"nodes\\": [ { \\"id\\": 42, \\"type\\": \\"CheckpointLoaderSimple\\", \\"pos\\": [ -2020, -280 ], \\"size\\": { \\"0\\": 350, \\"1\\": 100 }, \\"flags\\": {}, \\"order\\":..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{},"readingTime":{"minutes":4.97,"words":1490},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/Stable Cascade Inpainting ControlNet【Zho】.json","excerpt":"<p>{\\n\\"last_node_id\\": 77,\\n\\"last_link_id\\": 356,\\n\\"nodes\\": [\\n{\\n\\"id\\": 42,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": [\\n-2020,\\n-280\\n],\\n\\"size\\": {\\n\\"0\\": 350,\\n\\"1\\": 100\\n},\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n113\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": null,\\n\\"shape\\": 3\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n114\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 2\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"stable_cascade_stage_b.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": [\\n-2020,\\n260\\n],\\n\\"size\\": {\\n\\"0\\": 350,\\n\\"1\\": 50\\n},\\n\\"flags\\": {},\\n\\"order\\": 14,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 98\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 114,\\n\\"slot_index\\": 1\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n339,\\n355\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n}\\n},\\n{\\n\\"id\\": 50,\\n\\"type\\": \\"LoadImage\\",\\n\\"pos\\": [\\n-3150,\\n360\\n],\\n\\"size\\": {\\n\\"0\\": 440,\\n\\"1\\": 530\\n},\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n338,\\n340\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": [\\n337,\\n343\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 1\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"clipspace/clipspace-mask-870079.5.png [input]\\",\\n\\"image\\"\\n]\\n},\\n{\\n\\"id\\": 76,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n-2690,\\n360\\n],\\n\\"size\\": {\\n\\"0\\": 500,\\n\\"1\\": 530\\n},\\n\\"flags\\": {},\\n\\"order\\": 16,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 355\\n}\\n],\\n\\"title\\": \\"inpainting\\",\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n}\\n},\\n{\\n\\"id\\": 77,\\n\\"type\\": \\"PreviewImage\\",\\n\\"pos\\": [\\n-2170,\\n360\\n],\\n\\"size\\": {\\n\\"0\\": 500,\\n\\"1\\": 530\\n},\\n\\"flags\\": {},\\n\\"order\\": 17,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 356\\n}\\n],\\n\\"title\\": \\"inpainting+composite\\",\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"\\n}\\n},\\n{\\n\\"id\\": 33,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": [\\n-2020,\\n-130\\n],\\n\\"size\\": {\\n\\"0\\": 350,\\n\\"1\\": 340\\n},\\n\\"flags\\": {},\\n\\"order\\": 13,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 113,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 86\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 117\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 83\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n98\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n607627294521621,\\n\\"randomize\\",\\n10,\\n1.1,\\n\\"euler_ancestral\\",\\n\\"simple\\",\\n1\\n]\\n},\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": [\\n-2400,\\n-60\\n],\\n\\"size\\": {\\n\\"0\\": 360,\\n\\"1\\": 270\\n},\\n\\"flags\\": {},\\n\\"order\\": 11,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 110,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 120\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 142\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 82\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n88\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n646140837286288,\\n\\"randomize\\",\\n20,\\n4,\\n\\"euler_ancestral\\",\\n\\"simple\\",\\n1\\n]\\n},\\n{\\n\\"id\\": 49,\\n\\"type\\": \\"ControlNetApplyAdvanced\\",\\n\\"pos\\": [\\n-2400,\\n-280\\n],\\n\\"size\\": {\\n\\"0\\": 360,\\n\\"1\\": 170\\n},\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 118\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 119\\n},\\n{\\n\\"name\\": \\"control_net\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"link\\": 122\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 336,\\n\\"slot_index\\": 3\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n120\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n142\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 1\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetApplyAdvanced\\"\\n},\\n\\"widgets_values\\": [\\n1,\\n0,\\n1\\n]\\n},\\n{\\n\\"id\\": 36,\\n\\"type\\": \\"StableCascade_StageB_Conditioning\\",\\n\\"pos\\": [\\n-2400,\\n260\\n],\\n\\"size\\": {\\n\\"0\\": 360,\\n\\"1\\": 50\\n},\\n\\"flags\\": {},\\n\\"order\\": 12,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"conditioning\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 116,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"stage_c\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 88\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n86\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"StableCascade_StageB_Conditioning\\"\\n}\\n},\\n{\\n\\"id\\": 71,\\n\\"type\\": \\"GrowMask\\",\\n\\"pos\\": [\\n-2770,\\n30\\n],\\n\\"size\\": [\\n350,\\n80\\n],\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"mask\\",\\n\\"type\\": \\"MASK\\",\\n\\"link\\": 354\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": [\\n353\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"GrowMask\\"\\n},\\n\\"widgets_values\\": [\\n-8,\\ntrue\\n]\\n},\\n{\\n\\"id\\": 7,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n-2770,\\n-100\\n],\\n\\"size\\": [\\n350,\\n80\\n],\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 112\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n117,\\n119\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"title\\": \\"CLIP Text Encode (Negative Prompt)\\",\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"text, watermark\\"\\n]\\n},\\n{\\n\\"id\\": 69,\\n\\"type\\": \\"ImageCompositeMasked\\",\\n\\"pos\\": [\\n-2770,\\n160\\n],\\n\\"size\\": [\\n350,\\n150\\n],\\n\\"flags\\": {},\\n\\"order\\": 15,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"destination\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 339\\n},\\n{\\n\\"name\\": \\"source\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 340\\n},\\n{\\n\\"name\\": \\"mask\\",\\n\\"type\\": \\"MASK\\",\\n\\"link\\": 353\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n356\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ImageCompositeMasked\\"\\n},\\n\\"widgets_values\\": [\\n0,\\n0,\\ntrue\\n]\\n},\\n{\\n\\"id\\": 41,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": [\\n-3150,\\n-280\\n],\\n\\"size\\": [\\n360,\\n100\\n],\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n110\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n111,\\n112\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": null,\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"stable_cascade_stage_c.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 34,\\n\\"type\\": \\"StableCascade_EmptyLatentImage\\",\\n\\"pos\\": [\\n-3150,\\n-130\\n],\\n\\"size\\": [\\n360,\\n150\\n],\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"stage_c\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n82\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n},\\n{\\n\\"name\\": \\"stage_b\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n83\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 1\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"StableCascade_EmptyLatentImage\\"\\n},\\n\\"widgets_values\\": [\\n1024,\\n1024,\\n42,\\n1\\n]\\n},\\n{\\n\\"id\\": 47,\\n\\"type\\": \\"ControlNetLoader\\",\\n\\"pos\\": [\\n-3150,\\n70\\n],\\n\\"size\\": [\\n360,\\n60\\n],\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONTROL_NET\\",\\n\\"type\\": \\"CONTROL_NET\\",\\n\\"links\\": [\\n122\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ControlNetLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"scinpainting.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 68,\\n\\"type\\": \\"workflow/StableCascadeInpaintCnet\\",\\n\\"pos\\": [\\n-3150,\\n180\\n],\\n\\"size\\": [\\n360,\\n50\\n],\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 338\\n},\\n{\\n\\"name\\": \\"mask\\",\\n\\"type\\": \\"MASK\\",\\n\\"link\\": 337\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n336\\n],\\n\\"shape\\": 3\\n}\\n],\\n\\"title\\": \\"StableCascadeInpaint\\",\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"workflow/StableCascadeInpaintCnet\\"\\n},\\n\\"widgets_values\\": [\\n512,\\n512,\\n1,\\n16777215,\\n0.5,\\n0,\\n0,\\ntrue\\n]\\n},\\n{\\n\\"id\\": 70,\\n\\"type\\": \\"InvertMask\\",\\n\\"pos\\": [\\n-3150,\\n280\\n],\\n\\"size\\": [\\n360,\\n30\\n],\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"mask\\",\\n\\"type\\": \\"MASK\\",\\n\\"link\\": 343\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": [\\n354\\n],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"InvertMask\\"\\n}\\n},\\n{\\n\\"id\\": 6,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n-2770,\\n-280\\n],\\n\\"size\\": [\\n350,\\n130\\n],\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 111\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n116,\\n118\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"title\\": \\"CLIP Text Encode (Positive Prompt)\\",\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"avocado\\"\\n]\\n}\\n],\\n\\"links\\": [\\n[\\n82,\\n34,\\n0,\\n3,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n83,\\n34,\\n1,\\n33,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n86,\\n36,\\n0,\\n33,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n88,\\n3,\\n0,\\n36,\\n1,\\n\\"LATENT\\"\\n],\\n[\\n98,\\n33,\\n0,\\n8,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n110,\\n41,\\n0,\\n3,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n111,\\n41,\\n1,\\n6,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n112,\\n41,\\n1,\\n7,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n113,\\n42,\\n0,\\n33,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n114,\\n42,\\n2,\\n8,\\n1,\\n\\"VAE\\"\\n],\\n[\\n116,\\n6,\\n0,\\n36,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n117,\\n7,\\n0,\\n33,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n118,\\n6,\\n0,\\n49,\\n0,\\n\\"CONDITIONING\\"\\n],\\n[\\n119,\\n7,\\n0,\\n49,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n120,\\n49,\\n0,\\n3,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n122,\\n47,\\n0,\\n49,\\n2,\\n\\"CONTROL_NET\\"\\n],\\n[\\n142,\\n49,\\n1,\\n3,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n336,\\n68,\\n0,\\n49,\\n3,\\n\\"IMAGE\\"\\n],\\n[\\n337,\\n50,\\n1,\\n68,\\n1,\\n\\"MASK\\"\\n],\\n[\\n338,\\n50,\\n0,\\n68,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n339,\\n8,\\n0,\\n69,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n340,\\n50,\\n0,\\n69,\\n1,\\n\\"IMAGE\\"\\n],\\n[\\n343,\\n50,\\n1,\\n70,\\n0,\\n\\"MASK\\"\\n],\\n[\\n353,\\n71,\\n0,\\n69,\\n2,\\n\\"MASK\\"\\n],\\n[\\n354,\\n70,\\n0,\\n71,\\n0,\\n\\"MASK\\"\\n],\\n[\\n355,\\n8,\\n0,\\n76,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n356,\\n69,\\n0,\\n77,\\n0,\\n\\"IMAGE\\"\\n]\\n],\\n\\"groups\\": [],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"groupNodes\\": {\\n\\"StableCascadeInpaintCnet\\": {\\n\\"nodes\\": [\\n{\\n\\"type\\": \\"EmptyImage\\",\\n\\"pos\\": [\\n-304,\\n-267\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 130\\n},\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [],\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"EmptyImage\\"\\n},\\n\\"widgets_values\\": [\\n512,\\n512,\\n1,\\n16777215\\n],\\n\\"index\\": 0\\n},\\n{\\n\\"type\\": \\"ThresholdMask\\",\\n\\"pos\\": [\\n-225,\\n-369\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 14,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"mask\\",\\n\\"type\\": \\"MASK\\",\\n\\"link\\": null,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ThresholdMask\\"\\n},\\n\\"widgets_values\\": [\\n0.5\\n],\\n\\"index\\": 1\\n},\\n{\\n\\"type\\": \\"InvertMask\\",\\n\\"pos\\": [\\n-224,\\n-451\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 26\\n},\\n\\"flags\\": {},\\n\\"order\\": 15,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"mask\\",\\n\\"type\\": \\"MASK\\",\\n\\"link\\": null\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"InvertMask\\"\\n},\\n\\"index\\": 2\\n},\\n{\\n\\"type\\": \\"ImageCompositeMasked\\",\\n\\"pos\\": [\\n38,\\n-396\\n],\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 146\\n},\\n\\"flags\\": {},\\n\\"order\\": 16,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"destination\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": null\\n},\\n{\\n\\"name\\": \\"source\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": null,\\n\\"slot_index\\": 1\\n},\\n{\\n\\"name\\": \\"mask\\",\\n\\"type\\": \\"MASK\\",\\n\\"link\\": null\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ImageCompositeMasked\\"\\n},\\n\\"widgets_values\\": [\\n0,\\n0,\\ntrue\\n],\\n\\"index\\": 3\\n},\\n{\\n\\"type\\": \\"Reroute\\",\\n\\"pos\\": [\\n-372,\\n-443\\n],\\n\\"size\\": [\\n75,\\n26\\n],\\n\\"flags\\": {},\\n\\"order\\": 13,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"<em>\\",\\n\\"link\\": null\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"\\",\\n\\"type\\": \\"</em>\\",\\n\\"links\\": null\\n}\\n],\\n\\"properties\\": {\\n\\"showOutputText\\": false,\\n\\"horizontal\\": false\\n},\\n\\"index\\": 4\\n},\\n{\\n\\"type\\": \\"JoinImageWithAlpha\\",\\n\\"pos\\": [\\n375,\\n-460\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 17,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": null\\n},\\n{\\n\\"name\\": \\"alpha\\",\\n\\"type\\": \\"MASK\\",\\n\\"link\\": null\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"JoinImageWithAlpha\\"\\n},\\n\\"index\\": 5\\n}\\n],\\n\\"links\\": [\\n[\\nnull,\\n1,\\n4,\\n0,\\n50,\\n\\"MASK\\"\\n],\\n[\\n4,\\n0,\\n1,\\n0,\\n66,\\n\\"MASK\\"\\n],\\n[\\n4,\\n0,\\n2,\\n0,\\n66,\\n\\"MASK\\"\\n],\\n[\\nnull,\\n0,\\n3,\\n0,\\n50,\\n\\"IMAGE\\"\\n],\\n[\\n0,\\n0,\\n3,\\n1,\\n62,\\n\\"IMAGE\\"\\n],\\n[\\n1,\\n0,\\n3,\\n2,\\n64,\\n\\"MASK\\"\\n],\\n[\\n3,\\n0,\\n5,\\n0,\\n59,\\n\\"IMAGE\\"\\n],\\n[\\n2,\\n0,\\n5,\\n1,\\n61,\\n\\"MASK\\"\\n]\\n],\\n\\"external\\": [\\n[\\n{\\n\\"type\\": \\"JoinImageWithAlpha\\",\\n\\"pos\\": [\\n375,\\n-460\\n],\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 17,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": null\\n},\\n{\\n\\"name\\": \\"alpha\\",\\n\\"type\\": \\"MASK\\",\\n\\"link\\": null\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"JoinImageWithAlpha\\"\\n},\\n\\"index\\": 5\\n},\\n0,\\n\\"IMAGE\\"\\n]\\n],\\n\\"config\\": {\\n\\"0\\": {\\n\\"input\\": {\\n\\"width\\": {\\n\\"visible\\": false\\n},\\n\\"height\\": {\\n\\"visible\\": false\\n},\\n\\"batch_size\\": {\\n\\"visible\\": false\\n},\\n\\"color\\": {\\n\\"visible\\": false\\n}\\n}\\n},\\n\\"1\\": {\\n\\"input\\": {\\n\\"value\\": {\\n\\"visible\\": false\\n}\\n}\\n},\\n\\"2\\": {},\\n\\"3\\": {\\n\\"input\\": {\\n\\"x\\": {\\n\\"visible\\": false\\n},\\n\\"y\\": {\\n\\"visible\\": false\\n},\\n\\"resize_source\\": {\\n\\"visible\\": false\\n},\\n\\"destination\\": {\\n\\"name\\": \\"image\\"\\n}\\n}\\n},\\n\\"4\\": {\\n\\"output\\": {\\n\\"0\\": {\\n\\"name\\": \\"\\"\\n}\\n},\\n\\"input\\": {\\n\\"MASK\\": {\\n\\"name\\": \\"mask\\"\\n}\\n}\\n},\\n\\"5\\": {}\\n}\\n}\\n}\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/Stable Cascade Inpainting ControlNet【Zho】.json","value":{"title":"Stable Cascade Inpainting ControlNet【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/Stable Cascade Inpainting ControlNet【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{m as comp,I as data};

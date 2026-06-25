import{_ as t,c as o,b as u,r,o as q}from"./app-VJELzSjC.js";const b={};function e(s,a){const n=r("VueFlow");return q(),o("div",null,[u(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const p=t(b,[["render",e]]),l=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/Stable%20Cascade%20Inpainting%20ControlNet%E3%80%90Zho%E3%80%91.json.html","title":"Stable Cascade Inpainting ControlNet【Zho】.json","lang":"zh-CN","frontmatter":{"description":"{ &quot;last_node_id&quot;: 77, &quot;last_link_id&quot;: 356, &quot;nodes&quot;: [ { &quot;id&quot;: 42, &quot;type&quot;: &quot;CheckpointLoaderSimple&quot;, &quot;pos&quot;: ...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/Stable%20Cascade%20Inpainting%20ControlNet%E3%80%90Zho%E3%80%91.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ &quot;last_node_id&quot;: 77, &quot;last_link_id&quot;: 356, &quot;nodes&quot;: [ { &quot;id&quot;: 42, &quot;type&quot;: &quot;CheckpointLoaderSimple&quot;, &quot;pos&quot;: ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"layout":"Layout"},"git":{},"readingTime":{"minutes":4.97,"words":1490},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/Stable Cascade Inpainting ControlNet【Zho】.json","excerpt":"<p>{<br>\\n&quot;last_node_id&quot;: 77,<br>\\n&quot;last_link_id&quot;: 356,<br>\\n&quot;nodes&quot;: [<br>\\n{<br>\\n&quot;id&quot;: 42,<br>\\n&quot;type&quot;: &quot;CheckpointLoaderSimple&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-2020,<br>\\n-280<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 350,<br>\\n&quot;1&quot;: 100<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 0,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n113<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;VAE&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;links&quot;: [<br>\\n114<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 2<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CheckpointLoaderSimple&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;stable_cascade_stage_b.safetensors&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 8,<br>\\n&quot;type&quot;: &quot;VAEDecode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-2020,<br>\\n260<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 350,<br>\\n&quot;1&quot;: 50<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 14,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;samples&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 98<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: 114,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n339,<br>\\n355<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VAEDecode&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 50,<br>\\n&quot;type&quot;: &quot;LoadImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-3150,<br>\\n360<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 440,<br>\\n&quot;1&quot;: 530<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 1,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n338,<br>\\n340<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;MASK&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: [<br>\\n337,<br>\\n343<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;LoadImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;clipspace/clipspace-mask-870079.5.png [input]&quot;,<br>\\n&quot;image&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 76,<br>\\n&quot;type&quot;: &quot;PreviewImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-2690,<br>\\n360<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 500,<br>\\n&quot;1&quot;: 530<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 16,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 355<br>\\n}<br>\\n],<br>\\n&quot;title&quot;: &quot;inpainting&quot;,<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;PreviewImage&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 77,<br>\\n&quot;type&quot;: &quot;PreviewImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-2170,<br>\\n360<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 500,<br>\\n&quot;1&quot;: 530<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 17,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 356<br>\\n}<br>\\n],<br>\\n&quot;title&quot;: &quot;inpainting+composite&quot;,<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;PreviewImage&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 33,<br>\\n&quot;type&quot;: &quot;KSampler&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-2020,<br>\\n-130<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 350,<br>\\n&quot;1&quot;: 340<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 13,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 113,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 86<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 117<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 83<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n98<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;KSampler&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n607627294521621,<br>\\n&quot;randomize&quot;,<br>\\n10,<br>\\n1.1,<br>\\n&quot;euler_ancestral&quot;,<br>\\n&quot;simple&quot;,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 3,<br>\\n&quot;type&quot;: &quot;KSampler&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-2400,<br>\\n-60<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 360,<br>\\n&quot;1&quot;: 270<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 11,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;model&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;link&quot;: 110,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 120<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 142<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;latent_image&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 82<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;LATENT&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n88<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;KSampler&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n646140837286288,<br>\\n&quot;randomize&quot;,<br>\\n20,<br>\\n4,<br>\\n&quot;euler_ancestral&quot;,<br>\\n&quot;simple&quot;,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 49,<br>\\n&quot;type&quot;: &quot;ControlNetApplyAdvanced&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-2400,<br>\\n-280<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 360,<br>\\n&quot;1&quot;: 170<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 10,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 118<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 119<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;control_net&quot;,<br>\\n&quot;type&quot;: &quot;CONTROL_NET&quot;,<br>\\n&quot;link&quot;: 122<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 336,<br>\\n&quot;slot_index&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;positive&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n120<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;negative&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n142<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ControlNetApplyAdvanced&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n1,<br>\\n0,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 36,<br>\\n&quot;type&quot;: &quot;StableCascade_StageB_Conditioning&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-2400,<br>\\n260<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 360,<br>\\n&quot;1&quot;: 50<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 12,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;conditioning&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;link&quot;: 116,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;stage_c&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;link&quot;: 88<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n86<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;StableCascade_StageB_Conditioning&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 71,<br>\\n&quot;type&quot;: &quot;GrowMask&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-2770,<br>\\n30<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n350,<br>\\n80<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 9,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;mask&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;link&quot;: 354<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MASK&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: [<br>\\n353<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;GrowMask&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n-8,<br>\\ntrue<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 7,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-2770,<br>\\n-100<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n350,<br>\\n80<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 8,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 112<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n117,<br>\\n119<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;title&quot;: &quot;CLIP Text Encode (Negative Prompt)&quot;,<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;text, watermark&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 69,<br>\\n&quot;type&quot;: &quot;ImageCompositeMasked&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-2770,<br>\\n160<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n350,<br>\\n150<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 15,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;destination&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 339<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;source&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 340<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;mask&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;link&quot;: 353<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n356<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ImageCompositeMasked&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n0,<br>\\n0,<br>\\ntrue<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 41,<br>\\n&quot;type&quot;: &quot;CheckpointLoaderSimple&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-3150,<br>\\n-280<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n360,<br>\\n100<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 2,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MODEL&quot;,<br>\\n&quot;type&quot;: &quot;MODEL&quot;,<br>\\n&quot;links&quot;: [<br>\\n110<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;CLIP&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;links&quot;: [<br>\\n111,<br>\\n112<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;VAE&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CheckpointLoaderSimple&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;stable_cascade_stage_c.safetensors&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 34,<br>\\n&quot;type&quot;: &quot;StableCascade_EmptyLatentImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-3150,<br>\\n-130<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n360,<br>\\n150<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 3,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;stage_c&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n82<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;stage_b&quot;,<br>\\n&quot;type&quot;: &quot;LATENT&quot;,<br>\\n&quot;links&quot;: [<br>\\n83<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;StableCascade_EmptyLatentImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n1024,<br>\\n1024,<br>\\n42,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 47,<br>\\n&quot;type&quot;: &quot;ControlNetLoader&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-3150,<br>\\n70<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n360,<br>\\n60<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 4,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONTROL_NET&quot;,<br>\\n&quot;type&quot;: &quot;CONTROL_NET&quot;,<br>\\n&quot;links&quot;: [<br>\\n122<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ControlNetLoader&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;scinpainting.safetensors&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 68,<br>\\n&quot;type&quot;: &quot;workflow/StableCascadeInpaintCnet&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-3150,<br>\\n180<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n360,<br>\\n50<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 5,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 338<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;mask&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;link&quot;: 337<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n336<br>\\n],<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;title&quot;: &quot;StableCascadeInpaint&quot;,<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;workflow/StableCascadeInpaintCnet&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n512,<br>\\n512,<br>\\n1,<br>\\n16777215,<br>\\n0.5,<br>\\n0,<br>\\n0,<br>\\ntrue<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 70,<br>\\n&quot;type&quot;: &quot;InvertMask&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-3150,<br>\\n280<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n360,<br>\\n30<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 6,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;mask&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;link&quot;: 343<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MASK&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: [<br>\\n354<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;InvertMask&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 6,<br>\\n&quot;type&quot;: &quot;CLIPTextEncode&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-2770,<br>\\n-280<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n350,<br>\\n130<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 7,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;clip&quot;,<br>\\n&quot;type&quot;: &quot;CLIP&quot;,<br>\\n&quot;link&quot;: 111<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;type&quot;: &quot;CONDITIONING&quot;,<br>\\n&quot;links&quot;: [<br>\\n116,<br>\\n118<br>\\n],<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;title&quot;: &quot;CLIP Text Encode (Positive Prompt)&quot;,<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;CLIPTextEncode&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;avocado&quot;<br>\\n]<br>\\n}<br>\\n],<br>\\n&quot;links&quot;: [<br>\\n[<br>\\n82,<br>\\n34,<br>\\n0,<br>\\n3,<br>\\n3,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n83,<br>\\n34,<br>\\n1,<br>\\n33,<br>\\n3,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n86,<br>\\n36,<br>\\n0,<br>\\n33,<br>\\n1,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n88,<br>\\n3,<br>\\n0,<br>\\n36,<br>\\n1,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n98,<br>\\n33,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n&quot;LATENT&quot;<br>\\n],<br>\\n[<br>\\n110,<br>\\n41,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n111,<br>\\n41,<br>\\n1,<br>\\n6,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n112,<br>\\n41,<br>\\n1,<br>\\n7,<br>\\n0,<br>\\n&quot;CLIP&quot;<br>\\n],<br>\\n[<br>\\n113,<br>\\n42,<br>\\n0,<br>\\n33,<br>\\n0,<br>\\n&quot;MODEL&quot;<br>\\n],<br>\\n[<br>\\n114,<br>\\n42,<br>\\n2,<br>\\n8,<br>\\n1,<br>\\n&quot;VAE&quot;<br>\\n],<br>\\n[<br>\\n116,<br>\\n6,<br>\\n0,<br>\\n36,<br>\\n0,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n117,<br>\\n7,<br>\\n0,<br>\\n33,<br>\\n2,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n118,<br>\\n6,<br>\\n0,<br>\\n49,<br>\\n0,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n119,<br>\\n7,<br>\\n0,<br>\\n49,<br>\\n1,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n120,<br>\\n49,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n122,<br>\\n47,<br>\\n0,<br>\\n49,<br>\\n2,<br>\\n&quot;CONTROL_NET&quot;<br>\\n],<br>\\n[<br>\\n142,<br>\\n49,<br>\\n1,<br>\\n3,<br>\\n2,<br>\\n&quot;CONDITIONING&quot;<br>\\n],<br>\\n[<br>\\n336,<br>\\n68,<br>\\n0,<br>\\n49,<br>\\n3,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n337,<br>\\n50,<br>\\n1,<br>\\n68,<br>\\n1,<br>\\n&quot;MASK&quot;<br>\\n],<br>\\n[<br>\\n338,<br>\\n50,<br>\\n0,<br>\\n68,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n339,<br>\\n8,<br>\\n0,<br>\\n69,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n340,<br>\\n50,<br>\\n0,<br>\\n69,<br>\\n1,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n343,<br>\\n50,<br>\\n1,<br>\\n70,<br>\\n0,<br>\\n&quot;MASK&quot;<br>\\n],<br>\\n[<br>\\n353,<br>\\n71,<br>\\n0,<br>\\n69,<br>\\n2,<br>\\n&quot;MASK&quot;<br>\\n],<br>\\n[<br>\\n354,<br>\\n70,<br>\\n0,<br>\\n71,<br>\\n0,<br>\\n&quot;MASK&quot;<br>\\n],<br>\\n[<br>\\n355,<br>\\n8,<br>\\n0,<br>\\n76,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n356,<br>\\n69,<br>\\n0,<br>\\n77,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n]<br>\\n],<br>\\n&quot;groups&quot;: [],<br>\\n&quot;config&quot;: {},<br>\\n&quot;extra&quot;: {<br>\\n&quot;groupNodes&quot;: {<br>\\n&quot;StableCascadeInpaintCnet&quot;: {<br>\\n&quot;nodes&quot;: [<br>\\n{<br>\\n&quot;type&quot;: &quot;EmptyImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-304,<br>\\n-267<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 130<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 10,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;EmptyImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n512,<br>\\n512,<br>\\n1,<br>\\n16777215<br>\\n],<br>\\n&quot;index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;type&quot;: &quot;ThresholdMask&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-225,<br>\\n-369<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 58<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 14,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;mask&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MASK&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ThresholdMask&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n0.5<br>\\n],<br>\\n&quot;index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;type&quot;: &quot;InvertMask&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-224,<br>\\n-451<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 26<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 15,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;mask&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;link&quot;: null<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;MASK&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;InvertMask&quot;<br>\\n},<br>\\n&quot;index&quot;: 2<br>\\n},<br>\\n{<br>\\n&quot;type&quot;: &quot;ImageCompositeMasked&quot;,<br>\\n&quot;pos&quot;: [<br>\\n38,<br>\\n-396<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 315,<br>\\n&quot;1&quot;: 146<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 16,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;destination&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: null<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;source&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: null,<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;mask&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;link&quot;: null<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ImageCompositeMasked&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n0,<br>\\n0,<br>\\ntrue<br>\\n],<br>\\n&quot;index&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;type&quot;: &quot;Reroute&quot;,<br>\\n&quot;pos&quot;: [<br>\\n-372,<br>\\n-443<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n75,<br>\\n26<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 13,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;&quot;,<br>\\n&quot;type&quot;: &quot;<em>&quot;,<br>\\n&quot;link&quot;: null<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;&quot;,<br>\\n&quot;type&quot;: &quot;</em>&quot;,<br>\\n&quot;links&quot;: null<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;showOutputText&quot;: false,<br>\\n&quot;horizontal&quot;: false<br>\\n},<br>\\n&quot;index&quot;: 4<br>\\n},<br>\\n{<br>\\n&quot;type&quot;: &quot;JoinImageWithAlpha&quot;,<br>\\n&quot;pos&quot;: [<br>\\n375,<br>\\n-460<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 46<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 17,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: null<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;alpha&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;link&quot;: null<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;JoinImageWithAlpha&quot;<br>\\n},<br>\\n&quot;index&quot;: 5<br>\\n}<br>\\n],<br>\\n&quot;links&quot;: [<br>\\n[<br>\\nnull,<br>\\n1,<br>\\n4,<br>\\n0,<br>\\n50,<br>\\n&quot;MASK&quot;<br>\\n],<br>\\n[<br>\\n4,<br>\\n0,<br>\\n1,<br>\\n0,<br>\\n66,<br>\\n&quot;MASK&quot;<br>\\n],<br>\\n[<br>\\n4,<br>\\n0,<br>\\n2,<br>\\n0,<br>\\n66,<br>\\n&quot;MASK&quot;<br>\\n],<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n50,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n0,<br>\\n0,<br>\\n3,<br>\\n1,<br>\\n62,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n1,<br>\\n0,<br>\\n3,<br>\\n2,<br>\\n64,<br>\\n&quot;MASK&quot;<br>\\n],<br>\\n[<br>\\n3,<br>\\n0,<br>\\n5,<br>\\n0,<br>\\n59,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n2,<br>\\n0,<br>\\n5,<br>\\n1,<br>\\n61,<br>\\n&quot;MASK&quot;<br>\\n]<br>\\n],<br>\\n&quot;external&quot;: [<br>\\n[<br>\\n{<br>\\n&quot;type&quot;: &quot;JoinImageWithAlpha&quot;,<br>\\n&quot;pos&quot;: [<br>\\n375,<br>\\n-460<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 210,<br>\\n&quot;1&quot;: 46<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 17,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: null<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;alpha&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;link&quot;: null<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;JoinImageWithAlpha&quot;<br>\\n},<br>\\n&quot;index&quot;: 5<br>\\n},<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n]<br>\\n],<br>\\n&quot;config&quot;: {<br>\\n&quot;0&quot;: {<br>\\n&quot;input&quot;: {<br>\\n&quot;width&quot;: {<br>\\n&quot;visible&quot;: false<br>\\n},<br>\\n&quot;height&quot;: {<br>\\n&quot;visible&quot;: false<br>\\n},<br>\\n&quot;batch_size&quot;: {<br>\\n&quot;visible&quot;: false<br>\\n},<br>\\n&quot;color&quot;: {<br>\\n&quot;visible&quot;: false<br>\\n}<br>\\n}<br>\\n},<br>\\n&quot;1&quot;: {<br>\\n&quot;input&quot;: {<br>\\n&quot;value&quot;: {<br>\\n&quot;visible&quot;: false<br>\\n}<br>\\n}<br>\\n},<br>\\n&quot;2&quot;: {},<br>\\n&quot;3&quot;: {<br>\\n&quot;input&quot;: {<br>\\n&quot;x&quot;: {<br>\\n&quot;visible&quot;: false<br>\\n},<br>\\n&quot;y&quot;: {<br>\\n&quot;visible&quot;: false<br>\\n},<br>\\n&quot;resize_source&quot;: {<br>\\n&quot;visible&quot;: false<br>\\n},<br>\\n&quot;destination&quot;: {<br>\\n&quot;name&quot;: &quot;image&quot;<br>\\n}<br>\\n}<br>\\n},<br>\\n&quot;4&quot;: {<br>\\n&quot;output&quot;: {<br>\\n&quot;0&quot;: {<br>\\n&quot;name&quot;: &quot;&quot;<br>\\n}<br>\\n},<br>\\n&quot;input&quot;: {<br>\\n&quot;MASK&quot;: {<br>\\n&quot;name&quot;: &quot;mask&quot;<br>\\n}<br>\\n}<br>\\n},<br>\\n&quot;5&quot;: {}<br>\\n}<br>\\n}<br>\\n}<br>\\n},<br>\\n&quot;version&quot;: 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/Stable Cascade Inpainting ControlNet【Zho】.json","value":{"title":"Stable Cascade Inpainting ControlNet【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/Stable Cascade Inpainting ControlNet【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{p as comp,l as data};

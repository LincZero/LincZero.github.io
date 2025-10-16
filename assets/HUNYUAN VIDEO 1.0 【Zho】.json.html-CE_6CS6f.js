import{_ as r,c as e,d as b,r as l,o as i}from"./app-CHIZAOA_.js";const a={};function o(s,t){const n=l("VueFlow");return i(),e("div",null,[b(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 90,
  "last_link_id": 253,
  "nodes": [
    {
      "id": 11,
      "type": "DualCLIPLoader",
      "pos": [
        0,
        270
      ],
      "size": [
        350,
        110
      ],
      "flags": {},
      "order": 0,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            252
          ],
          "slot_index": 0,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "DualCLIPLoader"
      },
      "widgets_values": [
        "clip_l.safetensors",
        "llava_llama3_fp8_scaled.safetensors",
        "hunyuan_video"
      ]
    },
    {
      "id": 10,
      "type": "VAELoader",
      "pos": [
        0,
        430
      ],
      "size": [
        350,
        60
      ],
      "flags": {},
      "order": 1,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            211
          ],
          "slot_index": 0,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "VAELoader"
      },
      "widgets_values": [
        "hunyuan_video_vae_bf16.safetensors"
      ]
    },
    {
      "id": 12,
      "type": "UNETLoader",
      "pos": [
        0,
        130
      ],
      "size": [
        350,
        90
      ],
      "flags": {},
      "order": 2,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            250,
            251
          ],
          "slot_index": 0,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "UNETLoader"
      },
      "widgets_values": [
        "hunyuan_video_t2v_720p_bf16.safetensors",
        "default"
      ]
    },
    {
      "id": 82,
      "type": "EmptyHunyuanLatentVideo",
      "pos": [
        0,
        540
      ],
      "size": [
        350,
        130
      ],
      "flags": {},
      "order": 3,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            253
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "EmptyHunyuanLatentVideo"
      },
      "widgets_values": [
        848,
        480,
        73,
        1
      ]
    },
    {
      "id": 90,
      "type": "workflow>HUNYUAN",
      "pos": [
        0,
        720
      ],
      "size": [
        350,
        430
      ],
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 250
        },
        {
          "name": "ModelSamplingSD3 model",
          "type": "MODEL",
          "link": 251
        },
        {
          "name": "clip",
          "type": "CLIP",
          "link": 252
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 253
        }
      ],
      "outputs": [
        {
          "name": "output",
          "type": "LATENT",
          "links": [
            249
          ]
        },
        {
          "name": "denoised_output",
          "type": "LATENT",
          "links": null
        }
      ],
      "properties": {
        "Node name for S&R": "workflow>HUNYUAN"
      },
      "widgets_values": [
        "euler",
        18194918897689,
        "randomize",
        "simple",
        20,
        1,
        7,
        "In a cozy Italian restaurant, a stylish French professor dressed in a dark turtleneck sweater and gold-rimmed glasses elegantly eats pasta. He carefully twirls a small portion of noodles on his fork and gently brings it to his mouth, while the wine glass beside him reflects the warm glow of the ambient lighting. The scene is depicted in a realistic style, focusing on facial expressions and detailed table settings, with a relaxed background atmosphere of soft music and warm light.",
        6
      ]
    },
    {
      "id": 73,
      "type": "VAEDecodeTiled",
      "pos": [
        0,
        1200
      ],
      "size": [
        350,
        102
      ],
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 249
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 211
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            216
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecodeTiled"
      },
      "widgets_values": [
        256,
        64
      ]
    },
    {
      "id": 78,
      "type": "VHS_VideoCombine",
      "pos": [
        370,
        130
      ],
      "size": [
        1476.23291015625,
        1172.091552734375
      ],
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 216
        },
        {
          "name": "audio",
          "type": "AUDIO",
          "link": null,
          "shape": 7
        },
        {
          "name": "meta_batch",
          "type": "VHS_BatchManager",
          "link": null,
          "shape": 7
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": null,
          "shape": 7
        }
      ],
      "outputs": [
        {
          "name": "Filenames",
          "type": "VHS_FILENAMES",
          "links": null
        }
      ],
      "title": "HUNYUAN TEST ZHO",
      "properties": {
        "Node name for S&R": "VHS_VideoCombine"
      },
      "widgets_values": {
        "frame_rate": 24,
        "loop_count": 0,
        "filename_prefix": "HUNYUANTEST",
        "format": "video/h264-mp4",
        "pix_fmt": "yuv420p",
        "crf": 19,
        "save_metadata": true,
        "trim_to_audio": false,
        "pingpong": false,
        "save_output": true,
        "videopreview": {
          "hidden": false,
          "paused": false,
          "params": {
            "filename": "HUNYUANTEST_00001.mp4",
            "subfolder": "",
            "type": "output",
            "format": "video/h264-mp4",
            "frame_rate": 24,
            "workflow": "HUNYUANTEST_00001.png",
            "fullpath": "/content/ComfyUI/output/HUNYUANTEST_00001.mp4"
          },
          "muted": false
        }
      }
    }
  ],
  "links": [
    [
      211,
      10,
      0,
      73,
      1,
      "VAE"
    ],
    [
      216,
      73,
      0,
      78,
      0,
      "IMAGE"
    ],
    [
      249,
      90,
      0,
      73,
      0,
      "LATENT"
    ],
    [
      250,
      12,
      0,
      90,
      0,
      "MODEL"
    ],
    [
      251,
      12,
      0,
      90,
      1,
      "MODEL"
    ],
    [
      252,
      11,
      0,
      90,
      2,
      "CLIP"
    ],
    [
      253,
      82,
      0,
      90,
      3,
      "LATENT"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "ds": {
      "scale": 1,
      "offset": [
        293.5286858442546,
        -4.802425852796546
      ]
    },
    "groupNodes": {
      "HUNYUAN-1": {
        "nodes": [
          {
            "id": -1,
            "type": "KSamplerSelect",
            "pos": [
              484,
              751
            ],
            "size": [
              315,
              58
            ],
            "flags": {},
            "order": 0,
            "mode": 0,
            "inputs": [],
            "outputs": [
              {
                "name": "SAMPLER",
                "type": "SAMPLER",
                "links": [],
                "shape": 3,
                "localized_name": "采样器"
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
            "id": -1,
            "type": "EmptyHunyuanLatentVideo",
            "pos": [
              475.540771484375,
              432.673583984375
            ],
            "size": [
              315,
              130
            ],
            "flags": {},
            "order": 1,
            "mode": 0,
            "inputs": [],
            "outputs": [
              {
                "name": "LATENT",
                "type": "LATENT",
                "links": [],
                "slot_index": 0,
                "localized_name": "潜空间"
              }
            ],
            "properties": {
              "Node name for S&R": "EmptyHunyuanLatentVideo"
            },
            "widgets_values": [
              848,
              480,
              73,
              1
            ],
            "index": 1
          },
          {
            "id": -1,
            "type": "RandomNoise",
            "pos": [
              479,
              618
            ],
            "size": [
              315,
              82
            ],
            "flags": {},
            "order": 5,
            "mode": 0,
            "inputs": [],
            "outputs": [
              {
                "name": "NOISE",
                "type": "NOISE",
                "links": [],
                "shape": 3,
                "localized_name": "噪声"
              }
            ],
            "properties": {
              "Node name for S&R": "RandomNoise"
            },
            "widgets_values": [
              846495953812838,
              "randomize"
            ],
            "index": 2
          },
          {
            "id": -1,
            "type": "CLIPTextEncode",
            "pos": [
              420,
              200
            ],
            "size": [
              422.84503173828125,
              164.31304931640625
            ],
            "flags": {},
            "order": 6,
            "mode": 0,
            "inputs": [
              {
                "name": "clip",
                "type": "CLIP",
                "link": null,
                "localized_name": "clip"
              }
            ],
            "outputs": [
              {
                "name": "CONDITIONING",
                "type": "CONDITIONING",
                "links": [],
                "slot_index": 0,
                "localized_name": "条件"
              }
            ],
            "title": "CLIP Text Encode (Positive Prompt)",
            "properties": {
              "Node name for S&R": "CLIPTextEncode"
            },
            "widgets_values": [
              "In a cozy Italian restaurant, a stylish French professor dressed in a dark turtleneck sweater and gold-rimmed glasses elegantly eats pasta. He carefully twirls a small portion of noodles on his fork and gently brings it to his mouth, while the wine glass beside him reflects the warm glow of the ambient lighting. The scene is depicted in a realistic style, focusing on facial expressions and detailed table settings, with a relaxed background atmosphere of soft music and warm light."
            ],
            "index": 3
          },
          {
            "id": -1,
            "type": "BasicScheduler",
            "pos": [
              478,
              860
            ],
            "size": [
              315,
              106
            ],
            "flags": {},
            "order": 7,
            "mode": 0,
            "inputs": [
              {
                "name": "model",
                "type": "MODEL",
                "link": null,
                "slot_index": 0,
                "localized_name": "模型"
              }
            ],
            "outputs": [
              {
                "name": "SIGMAS",
                "type": "SIGMAS",
                "links": [],
                "shape": 3,
                "localized_name": "西格玛"
              }
            ],
            "properties": {
              "Node name for S&R": "BasicScheduler"
            },
            "widgets_values": [
              "simple",
              20,
              1
            ],
            "index": 4
          },
          {
            "id": -1,
            "type": "ModelSamplingSD3",
            "pos": [
              360,
              0
            ],
            "size": [
              210,
              58
            ],
            "flags": {},
            "order": 8,
            "mode": 0,
            "inputs": [
              {
                "name": "model",
                "type": "MODEL",
                "link": null,
                "localized_name": "模型"
              }
            ],
            "outputs": [
              {
                "name": "MODEL",
                "type": "MODEL",
                "links": [],
                "slot_index": 0,
                "localized_name": "模型"
              }
            ],
            "properties": {
              "Node name for S&R": "ModelSamplingSD3"
            },
            "widgets_values": [
              7
            ],
            "index": 5
          },
          {
            "id": -1,
            "type": "FluxGuidance",
            "pos": [
              520,
              100
            ],
            "size": [
              317.4000244140625,
              58
            ],
            "flags": {},
            "order": 9,
            "mode": 0,
            "inputs": [
              {
                "name": "conditioning",
                "type": "CONDITIONING",
                "link": null,
                "localized_name": "条件"
              }
            ],
            "outputs": [
              {
                "name": "CONDITIONING",
                "type": "CONDITIONING",
                "links": [],
                "slot_index": 0,
                "shape": 3,
                "localized_name": "条件"
              }
            ],
            "properties": {
              "Node name for S&R": "FluxGuidance"
            },
            "widgets_values": [
              6
            ],
            "index": 6
          },
          {
            "id": -1,
            "type": "BasicGuider",
            "pos": [
              600,
              0
            ],
            "size": [
              222.3482666015625,
              46
            ],
            "flags": {},
            "order": 10,
            "mode": 0,
            "inputs": [
              {
                "name": "model",
                "type": "MODEL",
                "link": null,
                "slot_index": 0,
                "localized_name": "模型"
              },
              {
                "name": "conditioning",
                "type": "CONDITIONING",
                "link": null,
                "slot_index": 1,
                "localized_name": "条件"
              }
            ],
            "outputs": [
              {
                "name": "GUIDER",
                "type": "GUIDER",
                "links": [],
                "slot_index": 0,
                "shape": 3,
                "localized_name": "引导器"
              }
            ],
            "properties": {
              "Node name for S&R": "BasicGuider"
            },
            "index": 7
          },
          {
            "id": -1,
            "type": "SamplerCustomAdvanced",
            "pos": [
              860,
              200
            ],
            "size": [
              272.3617858886719,
              124.53733825683594
            ],
            "flags": {},
            "order": 11,
            "mode": 0,
            "inputs": [
              {
                "name": "noise",
                "type": "NOISE",
                "link": null,
                "slot_index": 0,
                "localized_name": "噪声"
              },
              {
                "name": "guider",
                "type": "GUIDER",
                "link": null,
                "slot_index": 1,
                "localized_name": "引导器"
              },
              {
                "name": "sampler",
                "type": "SAMPLER",
                "link": null,
                "slot_index": 2,
                "localized_name": "采样器"
              },
              {
                "name": "sigmas",
                "type": "SIGMAS",
                "link": null,
                "slot_index": 3,
                "localized_name": "西格玛"
              },
              {
                "name": "latent_image",
                "type": "LATENT",
                "link": null,
                "slot_index": 4,
                "localized_name": "潜空间图像"
              }
            ],
            "outputs": [
              {
                "name": "output",
                "type": "LATENT",
                "links": [],
                "slot_index": 0,
                "shape": 3,
                "localized_name": "输出"
              },
              {
                "name": "denoised_output",
                "type": "LATENT",
                "links": null,
                "shape": 3,
                "localized_name": "去噪输出"
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
            3,
            0,
            11,
            "CLIP"
          ],
          [
            null,
            0,
            4,
            0,
            12,
            "MODEL"
          ],
          [
            null,
            0,
            5,
            0,
            12,
            "MODEL"
          ],
          [
            3,
            0,
            6,
            0,
            44,
            "CONDITIONING"
          ],
          [
            5,
            0,
            7,
            0,
            67,
            "MODEL"
          ],
          [
            6,
            0,
            7,
            1,
            26,
            "CONDITIONING"
          ],
          [
            2,
            0,
            8,
            0,
            25,
            "NOISE"
          ],
          [
            7,
            0,
            8,
            1,
            22,
            "GUIDER"
          ],
          [
            0,
            0,
            8,
            2,
            16,
            "SAMPLER"
          ],
          [
            4,
            0,
            8,
            3,
            17,
            "SIGMAS"
          ],
          [
            1,
            0,
            8,
            4,
            45,
            "LATENT"
          ]
        ],
        "external": [
          [
            8,
            0,
            "LATENT"
          ]
        ]
      },
      "HUNYUAN_2": {
        "nodes": [
          {
            "id": -1,
            "type": "KSamplerSelect",
            "pos": [
              -80.2872085571289,
              1270.399658203125
            ],
            "size": [
              315,
              58
            ],
            "flags": {},
            "order": 3,
            "mode": 0,
            "inputs": [],
            "outputs": [
              {
                "name": "SAMPLER",
                "type": "SAMPLER",
                "links": [],
                "shape": 3,
                "localized_name": "采样器"
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
            "id": -1,
            "type": "EmptyHunyuanLatentVideo",
            "pos": [
              -88.7464370727539,
              952.0732421875
            ],
            "size": [
              315,
              130
            ],
            "flags": {},
            "order": 4,
            "mode": 0,
            "inputs": [],
            "outputs": [
              {
                "name": "LATENT",
                "type": "LATENT",
                "links": [],
                "slot_index": 0,
                "localized_name": "潜空间"
              }
            ],
            "properties": {
              "Node name for S&R": "EmptyHunyuanLatentVideo"
            },
            "widgets_values": [
              848,
              480,
              73,
              1
            ],
            "index": 1
          },
          {
            "id": -1,
            "type": "RandomNoise",
            "pos": [
              -85.2872085571289,
              1137.399658203125
            ],
            "size": [
              315,
              82
            ],
            "flags": {},
            "order": 5,
            "mode": 0,
            "inputs": [],
            "outputs": [
              {
                "name": "NOISE",
                "type": "NOISE",
                "links": [],
                "shape": 3,
                "localized_name": "噪声"
              }
            ],
            "properties": {
              "Node name for S&R": "RandomNoise"
            },
            "widgets_values": [
              846495953812838,
              "randomize"
            ],
            "index": 2
          },
          {
            "id": -1,
            "type": "BasicScheduler",
            "pos": [
              -86.2872085571289,
              1379.399658203125
            ],
            "size": [
              315,
              106
            ],
            "flags": {},
            "order": 6,
            "mode": 0,
            "inputs": [
              {
                "name": "model",
                "type": "MODEL",
                "link": null,
                "slot_index": 0,
                "localized_name": "模型"
              }
            ],
            "outputs": [
              {
                "name": "SIGMAS",
                "type": "SIGMAS",
                "links": [],
                "shape": 3,
                "localized_name": "西格玛"
              }
            ],
            "properties": {
              "Node name for S&R": "BasicScheduler"
            },
            "widgets_values": [
              "simple",
              20,
              1
            ],
            "index": 3
          },
          {
            "id": -1,
            "type": "ModelSamplingSD3",
            "pos": [
              -204.28726196289062,
              519.3994750976562
            ],
            "size": [
              210,
              58
            ],
            "flags": {},
            "order": 7,
            "mode": 0,
            "inputs": [
              {
                "name": "model",
                "type": "MODEL",
                "link": null,
                "localized_name": "模型"
              }
            ],
            "outputs": [
              {
                "name": "MODEL",
                "type": "MODEL",
                "links": [],
                "slot_index": 0,
                "localized_name": "模型"
              }
            ],
            "properties": {
              "Node name for S&R": "ModelSamplingSD3"
            },
            "widgets_values": [
              7
            ],
            "index": 4
          },
          {
            "id": -1,
            "type": "CLIPTextEncode",
            "pos": [
              -71.90498352050781,
              1625.6287841796875
            ],
            "size": [
              422.84503173828125,
              164.31304931640625
            ],
            "flags": {},
            "order": 8,
            "mode": 0,
            "inputs": [
              {
                "name": "clip",
                "type": "CLIP",
                "link": null,
                "localized_name": "clip"
              }
            ],
            "outputs": [
              {
                "name": "CONDITIONING",
                "type": "CONDITIONING",
                "links": [],
                "slot_index": 0,
                "localized_name": "条件"
              }
            ],
            "title": "CLIP Text Encode (Positive Prompt)",
            "properties": {
              "Node name for S&R": "CLIPTextEncode"
            },
            "widgets_values": [
              "In a cozy Italian restaurant, a stylish French professor dressed in a dark turtleneck sweater and gold-rimmed glasses elegantly eats pasta. He carefully twirls a small portion of noodles on his fork and gently brings it to his mouth, while the wine glass beside him reflects the warm glow of the ambient lighting. The scene is depicted in a realistic style, focusing on facial expressions and detailed table settings, with a relaxed background atmosphere of soft music and warm light."
            ],
            "index": 5
          },
          {
            "id": -1,
            "type": "FluxGuidance",
            "pos": [
              -44.28723907470703,
              619.3994750976562
            ],
            "size": [
              317.4000244140625,
              58
            ],
            "flags": {},
            "order": 9,
            "mode": 0,
            "inputs": [
              {
                "name": "conditioning",
                "type": "CONDITIONING",
                "link": null,
                "localized_name": "条件"
              }
            ],
            "outputs": [
              {
                "name": "CONDITIONING",
                "type": "CONDITIONING",
                "links": [],
                "slot_index": 0,
                "shape": 3,
                "localized_name": "条件"
              }
            ],
            "properties": {
              "Node name for S&R": "FluxGuidance"
            },
            "widgets_values": [
              6
            ],
            "index": 6
          },
          {
            "id": -1,
            "type": "BasicGuider",
            "pos": [
              35.71280288696289,
              519.3994750976562
            ],
            "size": [
              222.3482666015625,
              46
            ],
            "flags": {},
            "order": 10,
            "mode": 0,
            "inputs": [
              {
                "name": "model",
                "type": "MODEL",
                "link": null,
                "slot_index": 0,
                "localized_name": "模型"
              },
              {
                "name": "conditioning",
                "type": "CONDITIONING",
                "link": null,
                "slot_index": 1,
                "localized_name": "条件"
              }
            ],
            "outputs": [
              {
                "name": "GUIDER",
                "type": "GUIDER",
                "links": [],
                "slot_index": 0,
                "shape": 3,
                "localized_name": "引导器"
              }
            ],
            "properties": {
              "Node name for S&R": "BasicGuider"
            },
            "index": 7
          },
          {
            "id": -1,
            "type": "SamplerCustomAdvanced",
            "pos": [
              295.71282958984375,
              719.3995361328125
            ],
            "size": [
              272.3617858886719,
              124.53733825683594
            ],
            "flags": {},
            "order": 11,
            "mode": 0,
            "inputs": [
              {
                "name": "noise",
                "type": "NOISE",
                "link": null,
                "slot_index": 0,
                "localized_name": "噪声"
              },
              {
                "name": "guider",
                "type": "GUIDER",
                "link": null,
                "slot_index": 1,
                "localized_name": "引导器"
              },
              {
                "name": "sampler",
                "type": "SAMPLER",
                "link": null,
                "slot_index": 2,
                "localized_name": "采样器"
              },
              {
                "name": "sigmas",
                "type": "SIGMAS",
                "link": null,
                "slot_index": 3,
                "localized_name": "西格玛"
              },
              {
                "name": "latent_image",
                "type": "LATENT",
                "link": null,
                "slot_index": 4,
                "localized_name": "潜空间图像"
              }
            ],
            "outputs": [
              {
                "name": "output",
                "type": "LATENT",
                "links": [],
                "slot_index": 0,
                "shape": 3,
                "localized_name": "输出"
              },
              {
                "name": "denoised_output",
                "type": "LATENT",
                "links": null,
                "shape": 3,
                "localized_name": "去噪输出"
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
            3,
            0,
            12,
            "MODEL"
          ],
          [
            null,
            0,
            4,
            0,
            12,
            "MODEL"
          ],
          [
            null,
            0,
            5,
            0,
            11,
            "CLIP"
          ],
          [
            5,
            0,
            6,
            0,
            44,
            "CONDITIONING"
          ],
          [
            4,
            0,
            7,
            0,
            67,
            "MODEL"
          ],
          [
            6,
            0,
            7,
            1,
            26,
            "CONDITIONING"
          ],
          [
            2,
            0,
            8,
            0,
            25,
            "NOISE"
          ],
          [
            7,
            0,
            8,
            1,
            22,
            "GUIDER"
          ],
          [
            0,
            0,
            8,
            2,
            16,
            "SAMPLER"
          ],
          [
            3,
            0,
            8,
            3,
            17,
            "SIGMAS"
          ],
          [
            1,
            0,
            8,
            4,
            45,
            "LATENT"
          ]
        ],
        "external": [
          [
            8,
            0,
            "LATENT"
          ]
        ]
      },
      "HUNYUAN": {
        "nodes": [
          {
            "id": -1,
            "type": "KSamplerSelect",
            "pos": [
              -30,
              1520
            ],
            "size": [
              315,
              58
            ],
            "flags": {},
            "order": 3,
            "mode": 0,
            "inputs": [],
            "outputs": [
              {
                "name": "SAMPLER",
                "type": "SAMPLER",
                "links": [],
                "shape": 3,
                "localized_name": "采样器"
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
            "id": -1,
            "type": "RandomNoise",
            "pos": [
              -40,
              1390
            ],
            "size": [
              315,
              82
            ],
            "flags": {},
            "order": 4,
            "mode": 0,
            "inputs": [],
            "outputs": [
              {
                "name": "NOISE",
                "type": "NOISE",
                "links": [],
                "shape": 3,
                "localized_name": "噪声"
              }
            ],
            "properties": {
              "Node name for S&R": "RandomNoise"
            },
            "widgets_values": [
              846495953812838,
              "randomize"
            ],
            "index": 1
          },
          {
            "id": -1,
            "type": "BasicScheduler",
            "pos": [
              -40,
              1630
            ],
            "size": [
              315,
              106
            ],
            "flags": {},
            "order": 6,
            "mode": 0,
            "inputs": [
              {
                "name": "model",
                "type": "MODEL",
                "link": null,
                "slot_index": 0,
                "localized_name": "模型"
              }
            ],
            "outputs": [
              {
                "name": "SIGMAS",
                "type": "SIGMAS",
                "links": [],
                "shape": 3,
                "localized_name": "西格玛"
              }
            ],
            "properties": {
              "Node name for S&R": "BasicScheduler"
            },
            "widgets_values": [
              "simple",
              20,
              1
            ],
            "index": 2
          },
          {
            "id": -1,
            "type": "ModelSamplingSD3",
            "pos": [
              -150,
              770
            ],
            "size": [
              210,
              58
            ],
            "flags": {},
            "order": 7,
            "mode": 0,
            "inputs": [
              {
                "name": "model",
                "type": "MODEL",
                "link": null,
                "localized_name": "模型"
              }
            ],
            "outputs": [
              {
                "name": "MODEL",
                "type": "MODEL",
                "links": [],
                "slot_index": 0,
                "localized_name": "模型"
              }
            ],
            "properties": {
              "Node name for S&R": "ModelSamplingSD3"
            },
            "widgets_values": [
              7
            ],
            "index": 3
          },
          {
            "id": -1,
            "type": "CLIPTextEncode",
            "pos": [
              -20,
              1880
            ],
            "size": [
              422.84503173828125,
              164.31304931640625
            ],
            "flags": {},
            "order": 8,
            "mode": 0,
            "inputs": [
              {
                "name": "clip",
                "type": "CLIP",
                "link": null,
                "localized_name": "clip"
              }
            ],
            "outputs": [
              {
                "name": "CONDITIONING",
                "type": "CONDITIONING",
                "links": [],
                "slot_index": 0,
                "localized_name": "条件"
              }
            ],
            "title": "CLIP Text Encode (Positive Prompt)",
            "properties": {
              "Node name for S&R": "CLIPTextEncode"
            },
            "widgets_values": [
              "In a cozy Italian restaurant, a stylish French professor dressed in a dark turtleneck sweater and gold-rimmed glasses elegantly eats pasta. He carefully twirls a small portion of noodles on his fork and gently brings it to his mouth, while the wine glass beside him reflects the warm glow of the ambient lighting. The scene is depicted in a realistic style, focusing on facial expressions and detailed table settings, with a relaxed background atmosphere of soft music and warm light."
            ],
            "index": 4
          },
          {
            "id": -1,
            "type": "FluxGuidance",
            "pos": [
              10,
              870
            ],
            "size": [
              317.4000244140625,
              58
            ],
            "flags": {},
            "order": 9,
            "mode": 0,
            "inputs": [
              {
                "name": "conditioning",
                "type": "CONDITIONING",
                "link": null,
                "localized_name": "条件"
              }
            ],
            "outputs": [
              {
                "name": "CONDITIONING",
                "type": "CONDITIONING",
                "links": [],
                "slot_index": 0,
                "shape": 3,
                "localized_name": "条件"
              }
            ],
            "properties": {
              "Node name for S&R": "FluxGuidance"
            },
            "widgets_values": [
              6
            ],
            "index": 5
          },
          {
            "id": -1,
            "type": "BasicGuider",
            "pos": [
              90,
              770
            ],
            "size": [
              222.3482666015625,
              46
            ],
            "flags": {},
            "order": 10,
            "mode": 0,
            "inputs": [
              {
                "name": "model",
                "type": "MODEL",
                "link": null,
                "slot_index": 0,
                "localized_name": "模型"
              },
              {
                "name": "conditioning",
                "type": "CONDITIONING",
                "link": null,
                "slot_index": 1,
                "localized_name": "条件"
              }
            ],
            "outputs": [
              {
                "name": "GUIDER",
                "type": "GUIDER",
                "links": [],
                "slot_index": 0,
                "shape": 3,
                "localized_name": "引导器"
              }
            ],
            "properties": {
              "Node name for S&R": "BasicGuider"
            },
            "index": 6
          },
          {
            "id": -1,
            "type": "SamplerCustomAdvanced",
            "pos": [
              350,
              970
            ],
            "size": [
              272.3617858886719,
              124.53733825683594
            ],
            "flags": {},
            "order": 11,
            "mode": 0,
            "inputs": [
              {
                "name": "noise",
                "type": "NOISE",
                "link": null,
                "slot_index": 0,
                "localized_name": "噪声"
              },
              {
                "name": "guider",
                "type": "GUIDER",
                "link": null,
                "slot_index": 1,
                "localized_name": "引导器"
              },
              {
                "name": "sampler",
                "type": "SAMPLER",
                "link": null,
                "slot_index": 2,
                "localized_name": "采样器"
              },
              {
                "name": "sigmas",
                "type": "SIGMAS",
                "link": null,
                "slot_index": 3,
                "localized_name": "西格玛"
              },
              {
                "name": "latent_image",
                "type": "LATENT",
                "link": null,
                "slot_index": 4,
                "localized_name": "潜空间图像"
              }
            ],
            "outputs": [
              {
                "name": "output",
                "type": "LATENT",
                "links": [],
                "slot_index": 0,
                "shape": 3,
                "localized_name": "输出"
              },
              {
                "name": "denoised_output",
                "type": "LATENT",
                "links": null,
                "shape": 3,
                "localized_name": "去噪输出"
              }
            ],
            "properties": {
              "Node name for S&R": "SamplerCustomAdvanced"
            },
            "index": 7
          }
        ],
        "links": [
          [
            null,
            0,
            2,
            0,
            12,
            "MODEL"
          ],
          [
            null,
            0,
            3,
            0,
            12,
            "MODEL"
          ],
          [
            null,
            0,
            4,
            0,
            11,
            "CLIP"
          ],
          [
            4,
            0,
            5,
            0,
            86,
            "CONDITIONING"
          ],
          [
            3,
            0,
            6,
            0,
            85,
            "MODEL"
          ],
          [
            5,
            0,
            6,
            1,
            87,
            "CONDITIONING"
          ],
          [
            1,
            0,
            7,
            0,
            83,
            "NOISE"
          ],
          [
            6,
            0,
            7,
            1,
            88,
            "GUIDER"
          ],
          [
            0,
            0,
            7,
            2,
            81,
            "SAMPLER"
          ],
          [
            2,
            0,
            7,
            3,
            84,
            "SIGMAS"
          ],
          [
            null,
            0,
            7,
            4,
            82,
            "LATENT"
          ]
        ],
        "external": [
          [
            7,
            0,
            "LATENT"
          ]
        ]
      }
    }
  },
  "version": 0.4
}
`})])}const p=r(a,[["render",o]]),m=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/HUNYUAN%20VIDEO%201.0%20%E3%80%90Zho%E3%80%91.json.html","title":"HUNYUAN VIDEO 1.0 【Zho】.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 90, \\"last_link_id\\": 253, \\"nodes\\": [ { \\"id\\": 11, \\"type\\": \\"DualCLIPLoader\\", \\"pos\\": [ 0, 270 ], \\"size\\": [ 350, 110 ], \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0, \\"inputs\\"...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/HUNYUAN%20VIDEO%201.0%20%E3%80%90Zho%E3%80%91.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 90, \\"last_link_id\\": 253, \\"nodes\\": [ { \\"id\\": 11, \\"type\\": \\"DualCLIPLoader\\", \\"pos\\": [ 0, 270 ], \\"size\\": [ 350, 110 ], \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0, \\"inputs\\"..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"layout":"Layout"},"git":{},"readingTime":{"minutes":8.05,"words":2414},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/HUNYUAN VIDEO 1.0 【Zho】.json","excerpt":"<p>{<br>\\n\\"last_node_id\\": 90,<br>\\n\\"last_link_id\\": 253,<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": 11,<br>\\n\\"type\\": \\"DualCLIPLoader\\",<br>\\n\\"pos\\": [<br>\\n0,<br>\\n270<br>\\n],<br>\\n\\"size\\": [<br>\\n350,<br>\\n110<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 0,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CLIP\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"links\\": [<br>\\n252<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"DualCLIPLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"clip_l.safetensors\\",<br>\\n\\"llava_llama3_fp8_scaled.safetensors\\",<br>\\n\\"hunyuan_video\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 10,<br>\\n\\"type\\": \\"VAELoader\\",<br>\\n\\"pos\\": [<br>\\n0,<br>\\n430<br>\\n],<br>\\n\\"size\\": [<br>\\n350,<br>\\n60<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 1,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"VAE\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"links\\": [<br>\\n211<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAELoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"hunyuan_video_vae_bf16.safetensors\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 12,<br>\\n\\"type\\": \\"UNETLoader\\",<br>\\n\\"pos\\": [<br>\\n0,<br>\\n130<br>\\n],<br>\\n\\"size\\": [<br>\\n350,<br>\\n90<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 2,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [<br>\\n250,<br>\\n251<br>\\n],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"UNETLoader\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"hunyuan_video_t2v_720p_bf16.safetensors\\",<br>\\n\\"default\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 82,<br>\\n\\"type\\": \\"EmptyHunyuanLatentVideo\\",<br>\\n\\"pos\\": [<br>\\n0,<br>\\n540<br>\\n],<br>\\n\\"size\\": [<br>\\n350,<br>\\n130<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n253<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"EmptyHunyuanLatentVideo\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n848,<br>\\n480,<br>\\n73,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 90,<br>\\n\\"type\\": \\"workflow&gt;HUNYUAN\\",<br>\\n\\"pos\\": [<br>\\n0,<br>\\n720<br>\\n],<br>\\n\\"size\\": [<br>\\n350,<br>\\n430<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 250<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"ModelSamplingSD3 model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": 251<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": 252<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 253<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"output\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [<br>\\n249<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"denoised_output\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": null<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"workflow&gt;HUNYUAN\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"euler\\",<br>\\n18194918897689,<br>\\n\\"randomize\\",<br>\\n\\"simple\\",<br>\\n20,<br>\\n1,<br>\\n7,<br>\\n\\"In a cozy Italian restaurant, a stylish French professor dressed in a dark turtleneck sweater and gold-rimmed glasses elegantly eats pasta. He carefully twirls a small portion of noodles on his fork and gently brings it to his mouth, while the wine glass beside him reflects the warm glow of the ambient lighting. The scene is depicted in a realistic style, focusing on facial expressions and detailed table settings, with a relaxed background atmosphere of soft music and warm light.\\",<br>\\n6<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 73,<br>\\n\\"type\\": \\"VAEDecodeTiled\\",<br>\\n\\"pos\\": [<br>\\n0,<br>\\n1200<br>\\n],<br>\\n\\"size\\": [<br>\\n350,<br>\\n102<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 5,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"samples\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": 249<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": 211<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n216<br>\\n],<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VAEDecodeTiled\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n256,<br>\\n64<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 78,<br>\\n\\"type\\": \\"VHS_VideoCombine\\",<br>\\n\\"pos\\": [<br>\\n370,<br>\\n130<br>\\n],<br>\\n\\"size\\": [<br>\\n1476.23291015625,<br>\\n1172.091552734375<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 216<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"audio\\",<br>\\n\\"type\\": \\"AUDIO\\",<br>\\n\\"link\\": null,<br>\\n\\"shape\\": 7<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"meta_batch\\",<br>\\n\\"type\\": \\"VHS_BatchManager\\",<br>\\n\\"link\\": null,<br>\\n\\"shape\\": 7<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": null,<br>\\n\\"shape\\": 7<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"Filenames\\",<br>\\n\\"type\\": \\"VHS_FILENAMES\\",<br>\\n\\"links\\": null<br>\\n}<br>\\n],<br>\\n\\"title\\": \\"HUNYUAN TEST ZHO\\",<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VHS_VideoCombine\\"<br>\\n},<br>\\n\\"widgets_values\\": {<br>\\n\\"frame_rate\\": 24,<br>\\n\\"loop_count\\": 0,<br>\\n\\"filename_prefix\\": \\"HUNYUANTEST\\",<br>\\n\\"format\\": \\"video/h264-mp4\\",<br>\\n\\"pix_fmt\\": \\"yuv420p\\",<br>\\n\\"crf\\": 19,<br>\\n\\"save_metadata\\": true,<br>\\n\\"trim_to_audio\\": false,<br>\\n\\"pingpong\\": false,<br>\\n\\"save_output\\": true,<br>\\n\\"videopreview\\": {<br>\\n\\"hidden\\": false,<br>\\n\\"paused\\": false,<br>\\n\\"params\\": {<br>\\n\\"filename\\": \\"HUNYUANTEST_00001.mp4\\",<br>\\n\\"subfolder\\": \\"\\",<br>\\n\\"type\\": \\"output\\",<br>\\n\\"format\\": \\"video/h264-mp4\\",<br>\\n\\"frame_rate\\": 24,<br>\\n\\"workflow\\": \\"HUNYUANTEST_00001.png\\",<br>\\n\\"fullpath\\": \\"/content/ComfyUI/output/HUNYUANTEST_00001.mp4\\"<br>\\n},<br>\\n\\"muted\\": false<br>\\n}<br>\\n}<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\n211,<br>\\n10,<br>\\n0,<br>\\n73,<br>\\n1,<br>\\n\\"VAE\\"<br>\\n],<br>\\n[<br>\\n216,<br>\\n73,<br>\\n0,<br>\\n78,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n249,<br>\\n90,<br>\\n0,<br>\\n73,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n],<br>\\n[<br>\\n250,<br>\\n12,<br>\\n0,<br>\\n90,<br>\\n0,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n251,<br>\\n12,<br>\\n0,<br>\\n90,<br>\\n1,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n252,<br>\\n11,<br>\\n0,<br>\\n90,<br>\\n2,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n253,<br>\\n82,<br>\\n0,<br>\\n90,<br>\\n3,<br>\\n\\"LATENT\\"<br>\\n]<br>\\n],<br>\\n\\"groups\\": [],<br>\\n\\"config\\": {},<br>\\n\\"extra\\": {<br>\\n\\"ds\\": {<br>\\n\\"scale\\": 1,<br>\\n\\"offset\\": [<br>\\n293.5286858442546,<br>\\n-4.802425852796546<br>\\n]<br>\\n},<br>\\n\\"groupNodes\\": {<br>\\n\\"HUNYUAN-1\\": {<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": -1,<br>\\n\\"type\\": \\"KSamplerSelect\\",<br>\\n\\"pos\\": [<br>\\n484,<br>\\n751<br>\\n],<br>\\n\\"size\\": [<br>\\n315,<br>\\n58<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 0,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"SAMPLER\\",<br>\\n\\"type\\": \\"SAMPLER\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"localized_name\\": \\"采样器\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSamplerSelect\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"euler\\"<br>\\n],<br>\\n\\"index\\": 0<br>\\n},<br>\\n{<br>\\n\\"id\\": -1,<br>\\n\\"type\\": \\"EmptyHunyuanLatentVideo\\",<br>\\n\\"pos\\": [<br>\\n475.540771484375,<br>\\n432.673583984375<br>\\n],<br>\\n\\"size\\": [<br>\\n315,<br>\\n130<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 1,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [],<br>\\n\\"slot_index\\": 0,<br>\\n\\"localized_name\\": \\"潜空间\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"EmptyHunyuanLatentVideo\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n848,<br>\\n480,<br>\\n73,<br>\\n1<br>\\n],<br>\\n\\"index\\": 1<br>\\n},<br>\\n{<br>\\n\\"id\\": -1,<br>\\n\\"type\\": \\"RandomNoise\\",<br>\\n\\"pos\\": [<br>\\n479,<br>\\n618<br>\\n],<br>\\n\\"size\\": [<br>\\n315,<br>\\n82<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 5,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"NOISE\\",<br>\\n\\"type\\": \\"NOISE\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"localized_name\\": \\"噪声\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"RandomNoise\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n846495953812838,<br>\\n\\"randomize\\"<br>\\n],<br>\\n\\"index\\": 2<br>\\n},<br>\\n{<br>\\n\\"id\\": -1,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n420,<br>\\n200<br>\\n],<br>\\n\\"size\\": [<br>\\n422.84503173828125,<br>\\n164.31304931640625<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": null,<br>\\n\\"localized_name\\": \\"clip\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [],<br>\\n\\"slot_index\\": 0,<br>\\n\\"localized_name\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"title\\": \\"CLIP Text Encode (Positive Prompt)\\",<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"In a cozy Italian restaurant, a stylish French professor dressed in a dark turtleneck sweater and gold-rimmed glasses elegantly eats pasta. He carefully twirls a small portion of noodles on his fork and gently brings it to his mouth, while the wine glass beside him reflects the warm glow of the ambient lighting. The scene is depicted in a realistic style, focusing on facial expressions and detailed table settings, with a relaxed background atmosphere of soft music and warm light.\\"<br>\\n],<br>\\n\\"index\\": 3<br>\\n},<br>\\n{<br>\\n\\"id\\": -1,<br>\\n\\"type\\": \\"BasicScheduler\\",<br>\\n\\"pos\\": [<br>\\n478,<br>\\n860<br>\\n],<br>\\n\\"size\\": [<br>\\n315,<br>\\n106<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 7,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 0,<br>\\n\\"localized_name\\": \\"模型\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"SIGMAS\\",<br>\\n\\"type\\": \\"SIGMAS\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"localized_name\\": \\"西格玛\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"BasicScheduler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"simple\\",<br>\\n20,<br>\\n1<br>\\n],<br>\\n\\"index\\": 4<br>\\n},<br>\\n{<br>\\n\\"id\\": -1,<br>\\n\\"type\\": \\"ModelSamplingSD3\\",<br>\\n\\"pos\\": [<br>\\n360,<br>\\n0<br>\\n],<br>\\n\\"size\\": [<br>\\n210,<br>\\n58<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 8,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": null,<br>\\n\\"localized_name\\": \\"模型\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [],<br>\\n\\"slot_index\\": 0,<br>\\n\\"localized_name\\": \\"模型\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ModelSamplingSD3\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n7<br>\\n],<br>\\n\\"index\\": 5<br>\\n},<br>\\n{<br>\\n\\"id\\": -1,<br>\\n\\"type\\": \\"FluxGuidance\\",<br>\\n\\"pos\\": [<br>\\n520,<br>\\n100<br>\\n],<br>\\n\\"size\\": [<br>\\n317.4000244140625,<br>\\n58<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 9,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"conditioning\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": null,<br>\\n\\"localized_name\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"localized_name\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"FluxGuidance\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n6<br>\\n],<br>\\n\\"index\\": 6<br>\\n},<br>\\n{<br>\\n\\"id\\": -1,<br>\\n\\"type\\": \\"BasicGuider\\",<br>\\n\\"pos\\": [<br>\\n600,<br>\\n0<br>\\n],<br>\\n\\"size\\": [<br>\\n222.3482666015625,<br>\\n46<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 10,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 0,<br>\\n\\"localized_name\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"conditioning\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 1,<br>\\n\\"localized_name\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"GUIDER\\",<br>\\n\\"type\\": \\"GUIDER\\",<br>\\n\\"links\\": [],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"localized_name\\": \\"引导器\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"BasicGuider\\"<br>\\n},<br>\\n\\"index\\": 7<br>\\n},<br>\\n{<br>\\n\\"id\\": -1,<br>\\n\\"type\\": \\"SamplerCustomAdvanced\\",<br>\\n\\"pos\\": [<br>\\n860,<br>\\n200<br>\\n],<br>\\n\\"size\\": [<br>\\n272.3617858886719,<br>\\n124.53733825683594<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 11,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"noise\\",<br>\\n\\"type\\": \\"NOISE\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 0,<br>\\n\\"localized_name\\": \\"噪声\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"guider\\",<br>\\n\\"type\\": \\"GUIDER\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 1,<br>\\n\\"localized_name\\": \\"引导器\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"sampler\\",<br>\\n\\"type\\": \\"SAMPLER\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 2,<br>\\n\\"localized_name\\": \\"采样器\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"sigmas\\",<br>\\n\\"type\\": \\"SIGMAS\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 3,<br>\\n\\"localized_name\\": \\"西格玛\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 4,<br>\\n\\"localized_name\\": \\"潜空间图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"output\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"localized_name\\": \\"输出\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"denoised_output\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"localized_name\\": \\"去噪输出\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"SamplerCustomAdvanced\\"<br>\\n},<br>\\n\\"index\\": 8<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n11,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n4,<br>\\n0,<br>\\n12,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n5,<br>\\n0,<br>\\n12,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n3,<br>\\n0,<br>\\n6,<br>\\n0,<br>\\n44,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n5,<br>\\n0,<br>\\n7,<br>\\n0,<br>\\n67,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n6,<br>\\n0,<br>\\n7,<br>\\n1,<br>\\n26,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n2,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n25,<br>\\n\\"NOISE\\"<br>\\n],<br>\\n[<br>\\n7,<br>\\n0,<br>\\n8,<br>\\n1,<br>\\n22,<br>\\n\\"GUIDER\\"<br>\\n],<br>\\n[<br>\\n0,<br>\\n0,<br>\\n8,<br>\\n2,<br>\\n16,<br>\\n\\"SAMPLER\\"<br>\\n],<br>\\n[<br>\\n4,<br>\\n0,<br>\\n8,<br>\\n3,<br>\\n17,<br>\\n\\"SIGMAS\\"<br>\\n],<br>\\n[<br>\\n1,<br>\\n0,<br>\\n8,<br>\\n4,<br>\\n45,<br>\\n\\"LATENT\\"<br>\\n]<br>\\n],<br>\\n\\"external\\": [<br>\\n[<br>\\n8,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n]<br>\\n]<br>\\n},<br>\\n\\"HUNYUAN_2\\": {<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": -1,<br>\\n\\"type\\": \\"KSamplerSelect\\",<br>\\n\\"pos\\": [<br>\\n-80.2872085571289,<br>\\n1270.399658203125<br>\\n],<br>\\n\\"size\\": [<br>\\n315,<br>\\n58<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"SAMPLER\\",<br>\\n\\"type\\": \\"SAMPLER\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"localized_name\\": \\"采样器\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSamplerSelect\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"euler\\"<br>\\n],<br>\\n\\"index\\": 0<br>\\n},<br>\\n{<br>\\n\\"id\\": -1,<br>\\n\\"type\\": \\"EmptyHunyuanLatentVideo\\",<br>\\n\\"pos\\": [<br>\\n-88.7464370727539,<br>\\n952.0732421875<br>\\n],<br>\\n\\"size\\": [<br>\\n315,<br>\\n130<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"LATENT\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [],<br>\\n\\"slot_index\\": 0,<br>\\n\\"localized_name\\": \\"潜空间\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"EmptyHunyuanLatentVideo\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n848,<br>\\n480,<br>\\n73,<br>\\n1<br>\\n],<br>\\n\\"index\\": 1<br>\\n},<br>\\n{<br>\\n\\"id\\": -1,<br>\\n\\"type\\": \\"RandomNoise\\",<br>\\n\\"pos\\": [<br>\\n-85.2872085571289,<br>\\n1137.399658203125<br>\\n],<br>\\n\\"size\\": [<br>\\n315,<br>\\n82<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 5,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"NOISE\\",<br>\\n\\"type\\": \\"NOISE\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"localized_name\\": \\"噪声\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"RandomNoise\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n846495953812838,<br>\\n\\"randomize\\"<br>\\n],<br>\\n\\"index\\": 2<br>\\n},<br>\\n{<br>\\n\\"id\\": -1,<br>\\n\\"type\\": \\"BasicScheduler\\",<br>\\n\\"pos\\": [<br>\\n-86.2872085571289,<br>\\n1379.399658203125<br>\\n],<br>\\n\\"size\\": [<br>\\n315,<br>\\n106<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 0,<br>\\n\\"localized_name\\": \\"模型\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"SIGMAS\\",<br>\\n\\"type\\": \\"SIGMAS\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"localized_name\\": \\"西格玛\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"BasicScheduler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"simple\\",<br>\\n20,<br>\\n1<br>\\n],<br>\\n\\"index\\": 3<br>\\n},<br>\\n{<br>\\n\\"id\\": -1,<br>\\n\\"type\\": \\"ModelSamplingSD3\\",<br>\\n\\"pos\\": [<br>\\n-204.28726196289062,<br>\\n519.3994750976562<br>\\n],<br>\\n\\"size\\": [<br>\\n210,<br>\\n58<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 7,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": null,<br>\\n\\"localized_name\\": \\"模型\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [],<br>\\n\\"slot_index\\": 0,<br>\\n\\"localized_name\\": \\"模型\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ModelSamplingSD3\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n7<br>\\n],<br>\\n\\"index\\": 4<br>\\n},<br>\\n{<br>\\n\\"id\\": -1,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n-71.90498352050781,<br>\\n1625.6287841796875<br>\\n],<br>\\n\\"size\\": [<br>\\n422.84503173828125,<br>\\n164.31304931640625<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 8,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": null,<br>\\n\\"localized_name\\": \\"clip\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [],<br>\\n\\"slot_index\\": 0,<br>\\n\\"localized_name\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"title\\": \\"CLIP Text Encode (Positive Prompt)\\",<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"In a cozy Italian restaurant, a stylish French professor dressed in a dark turtleneck sweater and gold-rimmed glasses elegantly eats pasta. He carefully twirls a small portion of noodles on his fork and gently brings it to his mouth, while the wine glass beside him reflects the warm glow of the ambient lighting. The scene is depicted in a realistic style, focusing on facial expressions and detailed table settings, with a relaxed background atmosphere of soft music and warm light.\\"<br>\\n],<br>\\n\\"index\\": 5<br>\\n},<br>\\n{<br>\\n\\"id\\": -1,<br>\\n\\"type\\": \\"FluxGuidance\\",<br>\\n\\"pos\\": [<br>\\n-44.28723907470703,<br>\\n619.3994750976562<br>\\n],<br>\\n\\"size\\": [<br>\\n317.4000244140625,<br>\\n58<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 9,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"conditioning\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": null,<br>\\n\\"localized_name\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"localized_name\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"FluxGuidance\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n6<br>\\n],<br>\\n\\"index\\": 6<br>\\n},<br>\\n{<br>\\n\\"id\\": -1,<br>\\n\\"type\\": \\"BasicGuider\\",<br>\\n\\"pos\\": [<br>\\n35.71280288696289,<br>\\n519.3994750976562<br>\\n],<br>\\n\\"size\\": [<br>\\n222.3482666015625,<br>\\n46<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 10,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 0,<br>\\n\\"localized_name\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"conditioning\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 1,<br>\\n\\"localized_name\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"GUIDER\\",<br>\\n\\"type\\": \\"GUIDER\\",<br>\\n\\"links\\": [],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"localized_name\\": \\"引导器\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"BasicGuider\\"<br>\\n},<br>\\n\\"index\\": 7<br>\\n},<br>\\n{<br>\\n\\"id\\": -1,<br>\\n\\"type\\": \\"SamplerCustomAdvanced\\",<br>\\n\\"pos\\": [<br>\\n295.71282958984375,<br>\\n719.3995361328125<br>\\n],<br>\\n\\"size\\": [<br>\\n272.3617858886719,<br>\\n124.53733825683594<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 11,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"noise\\",<br>\\n\\"type\\": \\"NOISE\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 0,<br>\\n\\"localized_name\\": \\"噪声\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"guider\\",<br>\\n\\"type\\": \\"GUIDER\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 1,<br>\\n\\"localized_name\\": \\"引导器\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"sampler\\",<br>\\n\\"type\\": \\"SAMPLER\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 2,<br>\\n\\"localized_name\\": \\"采样器\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"sigmas\\",<br>\\n\\"type\\": \\"SIGMAS\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 3,<br>\\n\\"localized_name\\": \\"西格玛\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 4,<br>\\n\\"localized_name\\": \\"潜空间图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"output\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"localized_name\\": \\"输出\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"denoised_output\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"localized_name\\": \\"去噪输出\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"SamplerCustomAdvanced\\"<br>\\n},<br>\\n\\"index\\": 8<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n12,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n4,<br>\\n0,<br>\\n12,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n5,<br>\\n0,<br>\\n11,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n5,<br>\\n0,<br>\\n6,<br>\\n0,<br>\\n44,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n4,<br>\\n0,<br>\\n7,<br>\\n0,<br>\\n67,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n6,<br>\\n0,<br>\\n7,<br>\\n1,<br>\\n26,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n2,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n25,<br>\\n\\"NOISE\\"<br>\\n],<br>\\n[<br>\\n7,<br>\\n0,<br>\\n8,<br>\\n1,<br>\\n22,<br>\\n\\"GUIDER\\"<br>\\n],<br>\\n[<br>\\n0,<br>\\n0,<br>\\n8,<br>\\n2,<br>\\n16,<br>\\n\\"SAMPLER\\"<br>\\n],<br>\\n[<br>\\n3,<br>\\n0,<br>\\n8,<br>\\n3,<br>\\n17,<br>\\n\\"SIGMAS\\"<br>\\n],<br>\\n[<br>\\n1,<br>\\n0,<br>\\n8,<br>\\n4,<br>\\n45,<br>\\n\\"LATENT\\"<br>\\n]<br>\\n],<br>\\n\\"external\\": [<br>\\n[<br>\\n8,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n]<br>\\n]<br>\\n},<br>\\n\\"HUNYUAN\\": {<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": -1,<br>\\n\\"type\\": \\"KSamplerSelect\\",<br>\\n\\"pos\\": [<br>\\n-30,<br>\\n1520<br>\\n],<br>\\n\\"size\\": [<br>\\n315,<br>\\n58<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"SAMPLER\\",<br>\\n\\"type\\": \\"SAMPLER\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"localized_name\\": \\"采样器\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"KSamplerSelect\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"euler\\"<br>\\n],<br>\\n\\"index\\": 0<br>\\n},<br>\\n{<br>\\n\\"id\\": -1,<br>\\n\\"type\\": \\"RandomNoise\\",<br>\\n\\"pos\\": [<br>\\n-40,<br>\\n1390<br>\\n],<br>\\n\\"size\\": [<br>\\n315,<br>\\n82<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"NOISE\\",<br>\\n\\"type\\": \\"NOISE\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"localized_name\\": \\"噪声\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"RandomNoise\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n846495953812838,<br>\\n\\"randomize\\"<br>\\n],<br>\\n\\"index\\": 1<br>\\n},<br>\\n{<br>\\n\\"id\\": -1,<br>\\n\\"type\\": \\"BasicScheduler\\",<br>\\n\\"pos\\": [<br>\\n-40,<br>\\n1630<br>\\n],<br>\\n\\"size\\": [<br>\\n315,<br>\\n106<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 0,<br>\\n\\"localized_name\\": \\"模型\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"SIGMAS\\",<br>\\n\\"type\\": \\"SIGMAS\\",<br>\\n\\"links\\": [],<br>\\n\\"shape\\": 3,<br>\\n\\"localized_name\\": \\"西格玛\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"BasicScheduler\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"simple\\",<br>\\n20,<br>\\n1<br>\\n],<br>\\n\\"index\\": 2<br>\\n},<br>\\n{<br>\\n\\"id\\": -1,<br>\\n\\"type\\": \\"ModelSamplingSD3\\",<br>\\n\\"pos\\": [<br>\\n-150,<br>\\n770<br>\\n],<br>\\n\\"size\\": [<br>\\n210,<br>\\n58<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 7,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": null,<br>\\n\\"localized_name\\": \\"模型\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"MODEL\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"links\\": [],<br>\\n\\"slot_index\\": 0,<br>\\n\\"localized_name\\": \\"模型\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ModelSamplingSD3\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n7<br>\\n],<br>\\n\\"index\\": 3<br>\\n},<br>\\n{<br>\\n\\"id\\": -1,<br>\\n\\"type\\": \\"CLIPTextEncode\\",<br>\\n\\"pos\\": [<br>\\n-20,<br>\\n1880<br>\\n],<br>\\n\\"size\\": [<br>\\n422.84503173828125,<br>\\n164.31304931640625<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 8,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"clip\\",<br>\\n\\"type\\": \\"CLIP\\",<br>\\n\\"link\\": null,<br>\\n\\"localized_name\\": \\"clip\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [],<br>\\n\\"slot_index\\": 0,<br>\\n\\"localized_name\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"title\\": \\"CLIP Text Encode (Positive Prompt)\\",<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"In a cozy Italian restaurant, a stylish French professor dressed in a dark turtleneck sweater and gold-rimmed glasses elegantly eats pasta. He carefully twirls a small portion of noodles on his fork and gently brings it to his mouth, while the wine glass beside him reflects the warm glow of the ambient lighting. The scene is depicted in a realistic style, focusing on facial expressions and detailed table settings, with a relaxed background atmosphere of soft music and warm light.\\"<br>\\n],<br>\\n\\"index\\": 4<br>\\n},<br>\\n{<br>\\n\\"id\\": -1,<br>\\n\\"type\\": \\"FluxGuidance\\",<br>\\n\\"pos\\": [<br>\\n10,<br>\\n870<br>\\n],<br>\\n\\"size\\": [<br>\\n317.4000244140625,<br>\\n58<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 9,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"conditioning\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": null,<br>\\n\\"localized_name\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"CONDITIONING\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"links\\": [],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"localized_name\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"FluxGuidance\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n6<br>\\n],<br>\\n\\"index\\": 5<br>\\n},<br>\\n{<br>\\n\\"id\\": -1,<br>\\n\\"type\\": \\"BasicGuider\\",<br>\\n\\"pos\\": [<br>\\n90,<br>\\n770<br>\\n],<br>\\n\\"size\\": [<br>\\n222.3482666015625,<br>\\n46<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 10,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"model\\",<br>\\n\\"type\\": \\"MODEL\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 0,<br>\\n\\"localized_name\\": \\"模型\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"conditioning\\",<br>\\n\\"type\\": \\"CONDITIONING\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 1,<br>\\n\\"localized_name\\": \\"条件\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"GUIDER\\",<br>\\n\\"type\\": \\"GUIDER\\",<br>\\n\\"links\\": [],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"localized_name\\": \\"引导器\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"BasicGuider\\"<br>\\n},<br>\\n\\"index\\": 6<br>\\n},<br>\\n{<br>\\n\\"id\\": -1,<br>\\n\\"type\\": \\"SamplerCustomAdvanced\\",<br>\\n\\"pos\\": [<br>\\n350,<br>\\n970<br>\\n],<br>\\n\\"size\\": [<br>\\n272.3617858886719,<br>\\n124.53733825683594<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 11,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"noise\\",<br>\\n\\"type\\": \\"NOISE\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 0,<br>\\n\\"localized_name\\": \\"噪声\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"guider\\",<br>\\n\\"type\\": \\"GUIDER\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 1,<br>\\n\\"localized_name\\": \\"引导器\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"sampler\\",<br>\\n\\"type\\": \\"SAMPLER\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 2,<br>\\n\\"localized_name\\": \\"采样器\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"sigmas\\",<br>\\n\\"type\\": \\"SIGMAS\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 3,<br>\\n\\"localized_name\\": \\"西格玛\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"latent_image\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"link\\": null,<br>\\n\\"slot_index\\": 4,<br>\\n\\"localized_name\\": \\"潜空间图像\\"<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"output\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": [],<br>\\n\\"slot_index\\": 0,<br>\\n\\"shape\\": 3,<br>\\n\\"localized_name\\": \\"输出\\"<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"denoised_output\\",<br>\\n\\"type\\": \\"LATENT\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"localized_name\\": \\"去噪输出\\"<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"SamplerCustomAdvanced\\"<br>\\n},<br>\\n\\"index\\": 7<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n2,<br>\\n0,<br>\\n12,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n3,<br>\\n0,<br>\\n12,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n4,<br>\\n0,<br>\\n11,<br>\\n\\"CLIP\\"<br>\\n],<br>\\n[<br>\\n4,<br>\\n0,<br>\\n5,<br>\\n0,<br>\\n86,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n3,<br>\\n0,<br>\\n6,<br>\\n0,<br>\\n85,<br>\\n\\"MODEL\\"<br>\\n],<br>\\n[<br>\\n5,<br>\\n0,<br>\\n6,<br>\\n1,<br>\\n87,<br>\\n\\"CONDITIONING\\"<br>\\n],<br>\\n[<br>\\n1,<br>\\n0,<br>\\n7,<br>\\n0,<br>\\n83,<br>\\n\\"NOISE\\"<br>\\n],<br>\\n[<br>\\n6,<br>\\n0,<br>\\n7,<br>\\n1,<br>\\n88,<br>\\n\\"GUIDER\\"<br>\\n],<br>\\n[<br>\\n0,<br>\\n0,<br>\\n7,<br>\\n2,<br>\\n81,<br>\\n\\"SAMPLER\\"<br>\\n],<br>\\n[<br>\\n2,<br>\\n0,<br>\\n7,<br>\\n3,<br>\\n84,<br>\\n\\"SIGMAS\\"<br>\\n],<br>\\n[<br>\\nnull,<br>\\n0,<br>\\n7,<br>\\n4,<br>\\n82,<br>\\n\\"LATENT\\"<br>\\n]<br>\\n],<br>\\n\\"external\\": [<br>\\n[<br>\\n7,<br>\\n0,<br>\\n\\"LATENT\\"<br>\\n]<br>\\n]<br>\\n}<br>\\n}<br>\\n},<br>\\n\\"version\\": 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/HUNYUAN VIDEO 1.0 【Zho】.json","value":{"title":"HUNYUAN VIDEO 1.0 【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/HUNYUAN VIDEO 1.0 【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{p as comp,m as data};

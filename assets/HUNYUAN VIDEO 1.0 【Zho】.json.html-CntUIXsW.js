import{_ as e,c as l,b as i,o as a,r as o}from"./app-Dwsnbiv5.js";const s={};function t(d,p){const n=o("VueFlow");return a(),l("div",null,[i(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const r=e(s,[["render",t],["__file","HUNYUAN VIDEO 1.0 【Zho】.json.html.vue"]]),u=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/HUNYUAN%20VIDEO%201.0%20%E3%80%90Zho%E3%80%91.json.html","title":"HUNYUAN VIDEO 1.0 【Zho】.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 90, \\"last_link_id\\": 253, \\"nodes\\": [ { \\"id\\": 11, \\"type\\": \\"DualCLIPLoader\\", \\"pos\\": [ 0, 270 ], \\"size\\": [ 350, 110 ], \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0, \\"inputs\\"...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/HUNYUAN%20VIDEO%201.0%20%E3%80%90Zho%E3%80%91.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 90, \\"last_link_id\\": 253, \\"nodes\\": [ { \\"id\\": 11, \\"type\\": \\"DualCLIPLoader\\", \\"pos\\": [ 0, 270 ], \\"size\\": [ 350, 110 ], \\"flags\\": {}, \\"order\\": 0, \\"mode\\": 0, \\"inputs\\"..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{},"readingTime":{"minutes":8.05,"words":2414},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/HUNYUAN VIDEO 1.0 【Zho】.json","excerpt":"<p>{\\n\\"last_node_id\\": 90,\\n\\"last_link_id\\": 253,\\n\\"nodes\\": [\\n{\\n\\"id\\": 11,\\n\\"type\\": \\"DualCLIPLoader\\",\\n\\"pos\\": [\\n0,\\n270\\n],\\n\\"size\\": [\\n350,\\n110\\n],\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n252\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"DualCLIPLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"clip_l.safetensors\\",\\n\\"llava_llama3_fp8_scaled.safetensors\\",\\n\\"hunyuan_video\\"\\n]\\n},\\n{\\n\\"id\\": 10,\\n\\"type\\": \\"VAELoader\\",\\n\\"pos\\": [\\n0,\\n430\\n],\\n\\"size\\": [\\n350,\\n60\\n],\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n211\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAELoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"hunyuan_video_vae_bf16.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 12,\\n\\"type\\": \\"UNETLoader\\",\\n\\"pos\\": [\\n0,\\n130\\n],\\n\\"size\\": [\\n350,\\n90\\n],\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n250,\\n251\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"UNETLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"hunyuan_video_t2v_720p_bf16.safetensors\\",\\n\\"default\\"\\n]\\n},\\n{\\n\\"id\\": 82,\\n\\"type\\": \\"EmptyHunyuanLatentVideo\\",\\n\\"pos\\": [\\n0,\\n540\\n],\\n\\"size\\": [\\n350,\\n130\\n],\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n253\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"EmptyHunyuanLatentVideo\\"\\n},\\n\\"widgets_values\\": [\\n848,\\n480,\\n73,\\n1\\n]\\n},\\n{\\n\\"id\\": 90,\\n\\"type\\": \\"workflow&gt;HUNYUAN\\",\\n\\"pos\\": [\\n0,\\n720\\n],\\n\\"size\\": [\\n350,\\n430\\n],\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 250\\n},\\n{\\n\\"name\\": \\"ModelSamplingSD3 model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 251\\n},\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 252\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 253\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"output\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n249\\n]\\n},\\n{\\n\\"name\\": \\"denoised_output\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": null\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"workflow&gt;HUNYUAN\\"\\n},\\n\\"widgets_values\\": [\\n\\"euler\\",\\n18194918897689,\\n\\"randomize\\",\\n\\"simple\\",\\n20,\\n1,\\n7,\\n\\"In a cozy Italian restaurant, a stylish French professor dressed in a dark turtleneck sweater and gold-rimmed glasses elegantly eats pasta. He carefully twirls a small portion of noodles on his fork and gently brings it to his mouth, while the wine glass beside him reflects the warm glow of the ambient lighting. The scene is depicted in a realistic style, focusing on facial expressions and detailed table settings, with a relaxed background atmosphere of soft music and warm light.\\",\\n6\\n]\\n},\\n{\\n\\"id\\": 73,\\n\\"type\\": \\"VAEDecodeTiled\\",\\n\\"pos\\": [\\n0,\\n1200\\n],\\n\\"size\\": [\\n350,\\n102\\n],\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 249\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 211\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n216\\n],\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecodeTiled\\"\\n},\\n\\"widgets_values\\": [\\n256,\\n64\\n]\\n},\\n{\\n\\"id\\": 78,\\n\\"type\\": \\"VHS_VideoCombine\\",\\n\\"pos\\": [\\n370,\\n130\\n],\\n\\"size\\": [\\n1476.23291015625,\\n1172.091552734375\\n],\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 216\\n},\\n{\\n\\"name\\": \\"audio\\",\\n\\"type\\": \\"AUDIO\\",\\n\\"link\\": null,\\n\\"shape\\": 7\\n},\\n{\\n\\"name\\": \\"meta_batch\\",\\n\\"type\\": \\"VHS_BatchManager\\",\\n\\"link\\": null,\\n\\"shape\\": 7\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": null,\\n\\"shape\\": 7\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"Filenames\\",\\n\\"type\\": \\"VHS_FILENAMES\\",\\n\\"links\\": null\\n}\\n],\\n\\"title\\": \\"HUNYUAN TEST ZHO\\",\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VHS_VideoCombine\\"\\n},\\n\\"widgets_values\\": {\\n\\"frame_rate\\": 24,\\n\\"loop_count\\": 0,\\n\\"filename_prefix\\": \\"HUNYUANTEST\\",\\n\\"format\\": \\"video/h264-mp4\\",\\n\\"pix_fmt\\": \\"yuv420p\\",\\n\\"crf\\": 19,\\n\\"save_metadata\\": true,\\n\\"trim_to_audio\\": false,\\n\\"pingpong\\": false,\\n\\"save_output\\": true,\\n\\"videopreview\\": {\\n\\"hidden\\": false,\\n\\"paused\\": false,\\n\\"params\\": {\\n\\"filename\\": \\"HUNYUANTEST_00001.mp4\\",\\n\\"subfolder\\": \\"\\",\\n\\"type\\": \\"output\\",\\n\\"format\\": \\"video/h264-mp4\\",\\n\\"frame_rate\\": 24,\\n\\"workflow\\": \\"HUNYUANTEST_00001.png\\",\\n\\"fullpath\\": \\"/content/ComfyUI/output/HUNYUANTEST_00001.mp4\\"\\n},\\n\\"muted\\": false\\n}\\n}\\n}\\n],\\n\\"links\\": [\\n[\\n211,\\n10,\\n0,\\n73,\\n1,\\n\\"VAE\\"\\n],\\n[\\n216,\\n73,\\n0,\\n78,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n249,\\n90,\\n0,\\n73,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n250,\\n12,\\n0,\\n90,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n251,\\n12,\\n0,\\n90,\\n1,\\n\\"MODEL\\"\\n],\\n[\\n252,\\n11,\\n0,\\n90,\\n2,\\n\\"CLIP\\"\\n],\\n[\\n253,\\n82,\\n0,\\n90,\\n3,\\n\\"LATENT\\"\\n]\\n],\\n\\"groups\\": [],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"ds\\": {\\n\\"scale\\": 1,\\n\\"offset\\": [\\n293.5286858442546,\\n-4.802425852796546\\n]\\n},\\n\\"groupNodes\\": {\\n\\"HUNYUAN-1\\": {\\n\\"nodes\\": [\\n{\\n\\"id\\": -1,\\n\\"type\\": \\"KSamplerSelect\\",\\n\\"pos\\": [\\n484,\\n751\\n],\\n\\"size\\": [\\n315,\\n58\\n],\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"SAMPLER\\",\\n\\"type\\": \\"SAMPLER\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"localized_name\\": \\"采样器\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSamplerSelect\\"\\n},\\n\\"widgets_values\\": [\\n\\"euler\\"\\n],\\n\\"index\\": 0\\n},\\n{\\n\\"id\\": -1,\\n\\"type\\": \\"EmptyHunyuanLatentVideo\\",\\n\\"pos\\": [\\n475.540771484375,\\n432.673583984375\\n],\\n\\"size\\": [\\n315,\\n130\\n],\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [],\\n\\"slot_index\\": 0,\\n\\"localized_name\\": \\"潜空间\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"EmptyHunyuanLatentVideo\\"\\n},\\n\\"widgets_values\\": [\\n848,\\n480,\\n73,\\n1\\n],\\n\\"index\\": 1\\n},\\n{\\n\\"id\\": -1,\\n\\"type\\": \\"RandomNoise\\",\\n\\"pos\\": [\\n479,\\n618\\n],\\n\\"size\\": [\\n315,\\n82\\n],\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"NOISE\\",\\n\\"type\\": \\"NOISE\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"localized_name\\": \\"噪声\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"RandomNoise\\"\\n},\\n\\"widgets_values\\": [\\n846495953812838,\\n\\"randomize\\"\\n],\\n\\"index\\": 2\\n},\\n{\\n\\"id\\": -1,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n420,\\n200\\n],\\n\\"size\\": [\\n422.84503173828125,\\n164.31304931640625\\n],\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": null,\\n\\"localized_name\\": \\"clip\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [],\\n\\"slot_index\\": 0,\\n\\"localized_name\\": \\"条件\\"\\n}\\n],\\n\\"title\\": \\"CLIP Text Encode (Positive Prompt)\\",\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"In a cozy Italian restaurant, a stylish French professor dressed in a dark turtleneck sweater and gold-rimmed glasses elegantly eats pasta. He carefully twirls a small portion of noodles on his fork and gently brings it to his mouth, while the wine glass beside him reflects the warm glow of the ambient lighting. The scene is depicted in a realistic style, focusing on facial expressions and detailed table settings, with a relaxed background atmosphere of soft music and warm light.\\"\\n],\\n\\"index\\": 3\\n},\\n{\\n\\"id\\": -1,\\n\\"type\\": \\"BasicScheduler\\",\\n\\"pos\\": [\\n478,\\n860\\n],\\n\\"size\\": [\\n315,\\n106\\n],\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": null,\\n\\"slot_index\\": 0,\\n\\"localized_name\\": \\"模型\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"SIGMAS\\",\\n\\"type\\": \\"SIGMAS\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"localized_name\\": \\"西格玛\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"BasicScheduler\\"\\n},\\n\\"widgets_values\\": [\\n\\"simple\\",\\n20,\\n1\\n],\\n\\"index\\": 4\\n},\\n{\\n\\"id\\": -1,\\n\\"type\\": \\"ModelSamplingSD3\\",\\n\\"pos\\": [\\n360,\\n0\\n],\\n\\"size\\": [\\n210,\\n58\\n],\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": null,\\n\\"localized_name\\": \\"模型\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [],\\n\\"slot_index\\": 0,\\n\\"localized_name\\": \\"模型\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ModelSamplingSD3\\"\\n},\\n\\"widgets_values\\": [\\n7\\n],\\n\\"index\\": 5\\n},\\n{\\n\\"id\\": -1,\\n\\"type\\": \\"FluxGuidance\\",\\n\\"pos\\": [\\n520,\\n100\\n],\\n\\"size\\": [\\n317.4000244140625,\\n58\\n],\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"conditioning\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": null,\\n\\"localized_name\\": \\"条件\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"localized_name\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"FluxGuidance\\"\\n},\\n\\"widgets_values\\": [\\n6\\n],\\n\\"index\\": 6\\n},\\n{\\n\\"id\\": -1,\\n\\"type\\": \\"BasicGuider\\",\\n\\"pos\\": [\\n600,\\n0\\n],\\n\\"size\\": [\\n222.3482666015625,\\n46\\n],\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": null,\\n\\"slot_index\\": 0,\\n\\"localized_name\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"conditioning\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": null,\\n\\"slot_index\\": 1,\\n\\"localized_name\\": \\"条件\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"GUIDER\\",\\n\\"type\\": \\"GUIDER\\",\\n\\"links\\": [],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"localized_name\\": \\"引导器\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"BasicGuider\\"\\n},\\n\\"index\\": 7\\n},\\n{\\n\\"id\\": -1,\\n\\"type\\": \\"SamplerCustomAdvanced\\",\\n\\"pos\\": [\\n860,\\n200\\n],\\n\\"size\\": [\\n272.3617858886719,\\n124.53733825683594\\n],\\n\\"flags\\": {},\\n\\"order\\": 11,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"noise\\",\\n\\"type\\": \\"NOISE\\",\\n\\"link\\": null,\\n\\"slot_index\\": 0,\\n\\"localized_name\\": \\"噪声\\"\\n},\\n{\\n\\"name\\": \\"guider\\",\\n\\"type\\": \\"GUIDER\\",\\n\\"link\\": null,\\n\\"slot_index\\": 1,\\n\\"localized_name\\": \\"引导器\\"\\n},\\n{\\n\\"name\\": \\"sampler\\",\\n\\"type\\": \\"SAMPLER\\",\\n\\"link\\": null,\\n\\"slot_index\\": 2,\\n\\"localized_name\\": \\"采样器\\"\\n},\\n{\\n\\"name\\": \\"sigmas\\",\\n\\"type\\": \\"SIGMAS\\",\\n\\"link\\": null,\\n\\"slot_index\\": 3,\\n\\"localized_name\\": \\"西格玛\\"\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": null,\\n\\"slot_index\\": 4,\\n\\"localized_name\\": \\"潜空间图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"output\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"localized_name\\": \\"输出\\"\\n},\\n{\\n\\"name\\": \\"denoised_output\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"localized_name\\": \\"去噪输出\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"SamplerCustomAdvanced\\"\\n},\\n\\"index\\": 8\\n}\\n],\\n\\"links\\": [\\n[\\nnull,\\n0,\\n3,\\n0,\\n11,\\n\\"CLIP\\"\\n],\\n[\\nnull,\\n0,\\n4,\\n0,\\n12,\\n\\"MODEL\\"\\n],\\n[\\nnull,\\n0,\\n5,\\n0,\\n12,\\n\\"MODEL\\"\\n],\\n[\\n3,\\n0,\\n6,\\n0,\\n44,\\n\\"CONDITIONING\\"\\n],\\n[\\n5,\\n0,\\n7,\\n0,\\n67,\\n\\"MODEL\\"\\n],\\n[\\n6,\\n0,\\n7,\\n1,\\n26,\\n\\"CONDITIONING\\"\\n],\\n[\\n2,\\n0,\\n8,\\n0,\\n25,\\n\\"NOISE\\"\\n],\\n[\\n7,\\n0,\\n8,\\n1,\\n22,\\n\\"GUIDER\\"\\n],\\n[\\n0,\\n0,\\n8,\\n2,\\n16,\\n\\"SAMPLER\\"\\n],\\n[\\n4,\\n0,\\n8,\\n3,\\n17,\\n\\"SIGMAS\\"\\n],\\n[\\n1,\\n0,\\n8,\\n4,\\n45,\\n\\"LATENT\\"\\n]\\n],\\n\\"external\\": [\\n[\\n8,\\n0,\\n\\"LATENT\\"\\n]\\n]\\n},\\n\\"HUNYUAN_2\\": {\\n\\"nodes\\": [\\n{\\n\\"id\\": -1,\\n\\"type\\": \\"KSamplerSelect\\",\\n\\"pos\\": [\\n-80.2872085571289,\\n1270.399658203125\\n],\\n\\"size\\": [\\n315,\\n58\\n],\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"SAMPLER\\",\\n\\"type\\": \\"SAMPLER\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"localized_name\\": \\"采样器\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSamplerSelect\\"\\n},\\n\\"widgets_values\\": [\\n\\"euler\\"\\n],\\n\\"index\\": 0\\n},\\n{\\n\\"id\\": -1,\\n\\"type\\": \\"EmptyHunyuanLatentVideo\\",\\n\\"pos\\": [\\n-88.7464370727539,\\n952.0732421875\\n],\\n\\"size\\": [\\n315,\\n130\\n],\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [],\\n\\"slot_index\\": 0,\\n\\"localized_name\\": \\"潜空间\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"EmptyHunyuanLatentVideo\\"\\n},\\n\\"widgets_values\\": [\\n848,\\n480,\\n73,\\n1\\n],\\n\\"index\\": 1\\n},\\n{\\n\\"id\\": -1,\\n\\"type\\": \\"RandomNoise\\",\\n\\"pos\\": [\\n-85.2872085571289,\\n1137.399658203125\\n],\\n\\"size\\": [\\n315,\\n82\\n],\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"NOISE\\",\\n\\"type\\": \\"NOISE\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"localized_name\\": \\"噪声\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"RandomNoise\\"\\n},\\n\\"widgets_values\\": [\\n846495953812838,\\n\\"randomize\\"\\n],\\n\\"index\\": 2\\n},\\n{\\n\\"id\\": -1,\\n\\"type\\": \\"BasicScheduler\\",\\n\\"pos\\": [\\n-86.2872085571289,\\n1379.399658203125\\n],\\n\\"size\\": [\\n315,\\n106\\n],\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": null,\\n\\"slot_index\\": 0,\\n\\"localized_name\\": \\"模型\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"SIGMAS\\",\\n\\"type\\": \\"SIGMAS\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"localized_name\\": \\"西格玛\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"BasicScheduler\\"\\n},\\n\\"widgets_values\\": [\\n\\"simple\\",\\n20,\\n1\\n],\\n\\"index\\": 3\\n},\\n{\\n\\"id\\": -1,\\n\\"type\\": \\"ModelSamplingSD3\\",\\n\\"pos\\": [\\n-204.28726196289062,\\n519.3994750976562\\n],\\n\\"size\\": [\\n210,\\n58\\n],\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": null,\\n\\"localized_name\\": \\"模型\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [],\\n\\"slot_index\\": 0,\\n\\"localized_name\\": \\"模型\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ModelSamplingSD3\\"\\n},\\n\\"widgets_values\\": [\\n7\\n],\\n\\"index\\": 4\\n},\\n{\\n\\"id\\": -1,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n-71.90498352050781,\\n1625.6287841796875\\n],\\n\\"size\\": [\\n422.84503173828125,\\n164.31304931640625\\n],\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": null,\\n\\"localized_name\\": \\"clip\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [],\\n\\"slot_index\\": 0,\\n\\"localized_name\\": \\"条件\\"\\n}\\n],\\n\\"title\\": \\"CLIP Text Encode (Positive Prompt)\\",\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"In a cozy Italian restaurant, a stylish French professor dressed in a dark turtleneck sweater and gold-rimmed glasses elegantly eats pasta. He carefully twirls a small portion of noodles on his fork and gently brings it to his mouth, while the wine glass beside him reflects the warm glow of the ambient lighting. The scene is depicted in a realistic style, focusing on facial expressions and detailed table settings, with a relaxed background atmosphere of soft music and warm light.\\"\\n],\\n\\"index\\": 5\\n},\\n{\\n\\"id\\": -1,\\n\\"type\\": \\"FluxGuidance\\",\\n\\"pos\\": [\\n-44.28723907470703,\\n619.3994750976562\\n],\\n\\"size\\": [\\n317.4000244140625,\\n58\\n],\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"conditioning\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": null,\\n\\"localized_name\\": \\"条件\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"localized_name\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"FluxGuidance\\"\\n},\\n\\"widgets_values\\": [\\n6\\n],\\n\\"index\\": 6\\n},\\n{\\n\\"id\\": -1,\\n\\"type\\": \\"BasicGuider\\",\\n\\"pos\\": [\\n35.71280288696289,\\n519.3994750976562\\n],\\n\\"size\\": [\\n222.3482666015625,\\n46\\n],\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": null,\\n\\"slot_index\\": 0,\\n\\"localized_name\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"conditioning\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": null,\\n\\"slot_index\\": 1,\\n\\"localized_name\\": \\"条件\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"GUIDER\\",\\n\\"type\\": \\"GUIDER\\",\\n\\"links\\": [],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"localized_name\\": \\"引导器\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"BasicGuider\\"\\n},\\n\\"index\\": 7\\n},\\n{\\n\\"id\\": -1,\\n\\"type\\": \\"SamplerCustomAdvanced\\",\\n\\"pos\\": [\\n295.71282958984375,\\n719.3995361328125\\n],\\n\\"size\\": [\\n272.3617858886719,\\n124.53733825683594\\n],\\n\\"flags\\": {},\\n\\"order\\": 11,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"noise\\",\\n\\"type\\": \\"NOISE\\",\\n\\"link\\": null,\\n\\"slot_index\\": 0,\\n\\"localized_name\\": \\"噪声\\"\\n},\\n{\\n\\"name\\": \\"guider\\",\\n\\"type\\": \\"GUIDER\\",\\n\\"link\\": null,\\n\\"slot_index\\": 1,\\n\\"localized_name\\": \\"引导器\\"\\n},\\n{\\n\\"name\\": \\"sampler\\",\\n\\"type\\": \\"SAMPLER\\",\\n\\"link\\": null,\\n\\"slot_index\\": 2,\\n\\"localized_name\\": \\"采样器\\"\\n},\\n{\\n\\"name\\": \\"sigmas\\",\\n\\"type\\": \\"SIGMAS\\",\\n\\"link\\": null,\\n\\"slot_index\\": 3,\\n\\"localized_name\\": \\"西格玛\\"\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": null,\\n\\"slot_index\\": 4,\\n\\"localized_name\\": \\"潜空间图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"output\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"localized_name\\": \\"输出\\"\\n},\\n{\\n\\"name\\": \\"denoised_output\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"localized_name\\": \\"去噪输出\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"SamplerCustomAdvanced\\"\\n},\\n\\"index\\": 8\\n}\\n],\\n\\"links\\": [\\n[\\nnull,\\n0,\\n3,\\n0,\\n12,\\n\\"MODEL\\"\\n],\\n[\\nnull,\\n0,\\n4,\\n0,\\n12,\\n\\"MODEL\\"\\n],\\n[\\nnull,\\n0,\\n5,\\n0,\\n11,\\n\\"CLIP\\"\\n],\\n[\\n5,\\n0,\\n6,\\n0,\\n44,\\n\\"CONDITIONING\\"\\n],\\n[\\n4,\\n0,\\n7,\\n0,\\n67,\\n\\"MODEL\\"\\n],\\n[\\n6,\\n0,\\n7,\\n1,\\n26,\\n\\"CONDITIONING\\"\\n],\\n[\\n2,\\n0,\\n8,\\n0,\\n25,\\n\\"NOISE\\"\\n],\\n[\\n7,\\n0,\\n8,\\n1,\\n22,\\n\\"GUIDER\\"\\n],\\n[\\n0,\\n0,\\n8,\\n2,\\n16,\\n\\"SAMPLER\\"\\n],\\n[\\n3,\\n0,\\n8,\\n3,\\n17,\\n\\"SIGMAS\\"\\n],\\n[\\n1,\\n0,\\n8,\\n4,\\n45,\\n\\"LATENT\\"\\n]\\n],\\n\\"external\\": [\\n[\\n8,\\n0,\\n\\"LATENT\\"\\n]\\n]\\n},\\n\\"HUNYUAN\\": {\\n\\"nodes\\": [\\n{\\n\\"id\\": -1,\\n\\"type\\": \\"KSamplerSelect\\",\\n\\"pos\\": [\\n-30,\\n1520\\n],\\n\\"size\\": [\\n315,\\n58\\n],\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"SAMPLER\\",\\n\\"type\\": \\"SAMPLER\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"localized_name\\": \\"采样器\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSamplerSelect\\"\\n},\\n\\"widgets_values\\": [\\n\\"euler\\"\\n],\\n\\"index\\": 0\\n},\\n{\\n\\"id\\": -1,\\n\\"type\\": \\"RandomNoise\\",\\n\\"pos\\": [\\n-40,\\n1390\\n],\\n\\"size\\": [\\n315,\\n82\\n],\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"NOISE\\",\\n\\"type\\": \\"NOISE\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"localized_name\\": \\"噪声\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"RandomNoise\\"\\n},\\n\\"widgets_values\\": [\\n846495953812838,\\n\\"randomize\\"\\n],\\n\\"index\\": 1\\n},\\n{\\n\\"id\\": -1,\\n\\"type\\": \\"BasicScheduler\\",\\n\\"pos\\": [\\n-40,\\n1630\\n],\\n\\"size\\": [\\n315,\\n106\\n],\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": null,\\n\\"slot_index\\": 0,\\n\\"localized_name\\": \\"模型\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"SIGMAS\\",\\n\\"type\\": \\"SIGMAS\\",\\n\\"links\\": [],\\n\\"shape\\": 3,\\n\\"localized_name\\": \\"西格玛\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"BasicScheduler\\"\\n},\\n\\"widgets_values\\": [\\n\\"simple\\",\\n20,\\n1\\n],\\n\\"index\\": 2\\n},\\n{\\n\\"id\\": -1,\\n\\"type\\": \\"ModelSamplingSD3\\",\\n\\"pos\\": [\\n-150,\\n770\\n],\\n\\"size\\": [\\n210,\\n58\\n],\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": null,\\n\\"localized_name\\": \\"模型\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [],\\n\\"slot_index\\": 0,\\n\\"localized_name\\": \\"模型\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ModelSamplingSD3\\"\\n},\\n\\"widgets_values\\": [\\n7\\n],\\n\\"index\\": 3\\n},\\n{\\n\\"id\\": -1,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": [\\n-20,\\n1880\\n],\\n\\"size\\": [\\n422.84503173828125,\\n164.31304931640625\\n],\\n\\"flags\\": {},\\n\\"order\\": 8,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": null,\\n\\"localized_name\\": \\"clip\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [],\\n\\"slot_index\\": 0,\\n\\"localized_name\\": \\"条件\\"\\n}\\n],\\n\\"title\\": \\"CLIP Text Encode (Positive Prompt)\\",\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"In a cozy Italian restaurant, a stylish French professor dressed in a dark turtleneck sweater and gold-rimmed glasses elegantly eats pasta. He carefully twirls a small portion of noodles on his fork and gently brings it to his mouth, while the wine glass beside him reflects the warm glow of the ambient lighting. The scene is depicted in a realistic style, focusing on facial expressions and detailed table settings, with a relaxed background atmosphere of soft music and warm light.\\"\\n],\\n\\"index\\": 4\\n},\\n{\\n\\"id\\": -1,\\n\\"type\\": \\"FluxGuidance\\",\\n\\"pos\\": [\\n10,\\n870\\n],\\n\\"size\\": [\\n317.4000244140625,\\n58\\n],\\n\\"flags\\": {},\\n\\"order\\": 9,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"conditioning\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": null,\\n\\"localized_name\\": \\"条件\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"localized_name\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"FluxGuidance\\"\\n},\\n\\"widgets_values\\": [\\n6\\n],\\n\\"index\\": 5\\n},\\n{\\n\\"id\\": -1,\\n\\"type\\": \\"BasicGuider\\",\\n\\"pos\\": [\\n90,\\n770\\n],\\n\\"size\\": [\\n222.3482666015625,\\n46\\n],\\n\\"flags\\": {},\\n\\"order\\": 10,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": null,\\n\\"slot_index\\": 0,\\n\\"localized_name\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"conditioning\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": null,\\n\\"slot_index\\": 1,\\n\\"localized_name\\": \\"条件\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"GUIDER\\",\\n\\"type\\": \\"GUIDER\\",\\n\\"links\\": [],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"localized_name\\": \\"引导器\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"BasicGuider\\"\\n},\\n\\"index\\": 6\\n},\\n{\\n\\"id\\": -1,\\n\\"type\\": \\"SamplerCustomAdvanced\\",\\n\\"pos\\": [\\n350,\\n970\\n],\\n\\"size\\": [\\n272.3617858886719,\\n124.53733825683594\\n],\\n\\"flags\\": {},\\n\\"order\\": 11,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"noise\\",\\n\\"type\\": \\"NOISE\\",\\n\\"link\\": null,\\n\\"slot_index\\": 0,\\n\\"localized_name\\": \\"噪声\\"\\n},\\n{\\n\\"name\\": \\"guider\\",\\n\\"type\\": \\"GUIDER\\",\\n\\"link\\": null,\\n\\"slot_index\\": 1,\\n\\"localized_name\\": \\"引导器\\"\\n},\\n{\\n\\"name\\": \\"sampler\\",\\n\\"type\\": \\"SAMPLER\\",\\n\\"link\\": null,\\n\\"slot_index\\": 2,\\n\\"localized_name\\": \\"采样器\\"\\n},\\n{\\n\\"name\\": \\"sigmas\\",\\n\\"type\\": \\"SIGMAS\\",\\n\\"link\\": null,\\n\\"slot_index\\": 3,\\n\\"localized_name\\": \\"西格玛\\"\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": null,\\n\\"slot_index\\": 4,\\n\\"localized_name\\": \\"潜空间图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"output\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"localized_name\\": \\"输出\\"\\n},\\n{\\n\\"name\\": \\"denoised_output\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"localized_name\\": \\"去噪输出\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"SamplerCustomAdvanced\\"\\n},\\n\\"index\\": 7\\n}\\n],\\n\\"links\\": [\\n[\\nnull,\\n0,\\n2,\\n0,\\n12,\\n\\"MODEL\\"\\n],\\n[\\nnull,\\n0,\\n3,\\n0,\\n12,\\n\\"MODEL\\"\\n],\\n[\\nnull,\\n0,\\n4,\\n0,\\n11,\\n\\"CLIP\\"\\n],\\n[\\n4,\\n0,\\n5,\\n0,\\n86,\\n\\"CONDITIONING\\"\\n],\\n[\\n3,\\n0,\\n6,\\n0,\\n85,\\n\\"MODEL\\"\\n],\\n[\\n5,\\n0,\\n6,\\n1,\\n87,\\n\\"CONDITIONING\\"\\n],\\n[\\n1,\\n0,\\n7,\\n0,\\n83,\\n\\"NOISE\\"\\n],\\n[\\n6,\\n0,\\n7,\\n1,\\n88,\\n\\"GUIDER\\"\\n],\\n[\\n0,\\n0,\\n7,\\n2,\\n81,\\n\\"SAMPLER\\"\\n],\\n[\\n2,\\n0,\\n7,\\n3,\\n84,\\n\\"SIGMAS\\"\\n],\\n[\\nnull,\\n0,\\n7,\\n4,\\n82,\\n\\"LATENT\\"\\n]\\n],\\n\\"external\\": [\\n[\\n7,\\n0,\\n\\"LATENT\\"\\n]\\n]\\n}\\n}\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/HUNYUAN VIDEO 1.0 【Zho】.json","value":{"title":"HUNYUAN VIDEO 1.0 【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/HUNYUAN VIDEO 1.0 【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{r as comp,u as data};
